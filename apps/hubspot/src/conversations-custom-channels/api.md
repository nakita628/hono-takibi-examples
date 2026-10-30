<h1 id="conversations-custom-channels">Conversations Custom Channels v2026-09</h1>

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
|conversations.custom_channels.read||
|conversations.custom_channels.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="conversations-custom-channels-basic">Basic</h1>

## List Channels

<a id="opIdget-/conversations/custom-channels/2026-09_/conversations/custom-channels/v3"></a>

> Code samples

```bash
curl "https://api.hubapi.com/conversations/custom-channels/2026-09?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /conversations/custom-channels/2026-09`

Retrieve a list of custom conversation channels for the specified version. This endpoint allows you to paginate through the results and sort them according to your preferences.

<h3 id="list-channels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|defaultPageLength|query|integer(int32)|false|The default number of results to display per page.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|sort|query|[string]|false|An array of fields to sort the results by.|

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
|200|OK|successful operation|[CollectionResponseWithTotalPublicChannelIntegrationChannel](#schemacollectionresponsewithtotalpublicchannelintegrationchannel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Create

<a id="opIdpost-/conversations/custom-channels/2026-09_/conversations/custom-channels/v3"></a>

> Code samples

```bash
curl "https://api.hubapi.com/conversations/custom-channels/2026-09?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /conversations/custom-channels/2026-09`

Create a new custom channel integration in your HubSpot account. This endpoint allows you to define the capabilities and properties of the custom channel, such as its name, description, and webhook URL. The request must include a JSON body with the necessary details for the new channel integration.

> Body parameter

```json
null
```

<h3 id="create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublicChannelIntegrationChannelCreate](#schemapublicchannelintegrationchannelcreate)|true|none|
|» capabilities|body|object|true|An object that defines the capabilities of the channel, with additional properties as key-value pairs.|
|» » **additionalProperties**|body|object|false|none|
|» channelAccountConnectionRedirectUrl|body|string|false|A string representing the URL to which users will be redirected to connect their channel account.|
|» channelDescription|body|string|false|A string providing a description of the channel.|
|» channelLogoUrl|body|string|false|A string representing the URL of the channel's logo.|
|» name|body|string|true|A string representing the name of the channel.|
|» webhookUrl|body|string|false|A string representing the URL to which webhook events will be sent.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicChannelIntegrationChannel](#schemapublicchannelintegrationchannel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

<h1 id="conversations-custom-channels-channel-accounts">Channel accounts</h1>

## Update a channel account staging token

<a id="opIdpatch-/conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /conversations/custom-channels/2026-09/{channelId}/channel-account-staging-tokens/{accountToken}`

Update a channel account staging token's account name and delivery identifier. This information will be applied to the channel account created from this staging token. This is used for public apps.

> Body parameter

```json
null
```

<h3 id="update-a-channel-account-staging-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountToken|path|string|true|The unique token of the channel account staging to be updated.|
|channelId|path|integer(int32)|true|The unique identifier of the custom conversation channel.|
|body|body|[PublicChannelAccountStagingTokenUpdateRequest](#schemapublicchannelaccountstagingtokenupdaterequest)|true|none|
|» accountName|body|string|false|A string representing the name of the account associated with the staging token.|
|» deliveryIdentifier|body|[PublicDeliveryIdentifier](#schemapublicdeliveryidentifier)|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-channel-account-staging-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicChannelAccountStagingToken](#schemapublicchannelaccountstagingtoken)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.custom_channels.read ), oauth2 ( Scopes: conversations.custom_channels.write )
</aside>

## Get accounts for a channel

<a id="opIdget-/conversations/custom-channels/2026-09/{channelId}/channel-accounts"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/custom-channels/2026-09/{channelId}/channel-accounts' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/custom-channels/2026-09/{channelId}/channel-accounts`

Retrieve a list of accounts for a custom channel.

<h3 id="get-accounts-for-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|integer(int32)|true|The unique identifier of the channel for which to list the accounts.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|defaultPageLength|query|integer(int32)|false|The default number of results to display per page.|
|deliveryIdentifierType|query|[string]|false|An array of delivery identifier types to filter the results. Valid values include HS_EMAIL_ADDRESS, HS_PHONE_NUMBER, HS_SHORT_CODE, and CHANNEL_SPECIFIC_OPAQUE_ID.|
|deliveryIdentifierValue|query|[string]|false|An array of delivery identifier values to filter the results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|sort|query|[string]|false|An array specifying the sort order of the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|deliveryIdentifierType|HS_EMAIL_ADDRESS|
|deliveryIdentifierType|HS_PHONE_NUMBER|
|deliveryIdentifierType|HS_SHORT_CODE|
|deliveryIdentifierType|CHANNEL_SPECIFIC_OPAQUE_ID|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-accounts-for-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPublicChannelAccount](#schemacollectionresponsewithtotalpublicchannelaccount)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.custom_channels.read ), oauth2 ( Scopes: conversations.custom_channels.write )
</aside>

## Create a channel account

<a id="opIdpost-/conversations/custom-channels/2026-09/{channelId}/channel-accounts"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/custom-channels/2026-09/{channelId}/channel-accounts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /conversations/custom-channels/2026-09/{channelId}/channel-accounts`

Create a new account for a channel. Multiple accounts can communicate over a single channel using different delivery identifiers.

> Body parameter

```json
null
```

<h3 id="create-a-channel-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|integer(int32)|true|The unique identifier of the custom channel for which the channel account is being created.|
|body|body|[PublicChannelAccountEgg](#schemapublicchannelaccountegg)|true|none|
|» authorized|body|boolean|true|A boolean indicating whether the channel account is authorized.|
|» deliveryIdentifier|body|[PublicDeliveryIdentifier](#schemapublicdeliveryidentifier)|false|none|
|» inboxId|body|string|true|The unique identifier for the inbox associated with this channel account. It is a string.|
|» name|body|string|true|The name of the channel account. It is a string.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-channel-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicChannelAccount](#schemapublicchannelaccount)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.custom_channels.read ), oauth2 ( Scopes: conversations.custom_channels.write )
</aside>

## Update a channel account

<a id="opIdpatch-/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}`

This API is used to update the name of the channel account and it's isAuthorized status. Setting to isAuthorized flag to False disables the channel account.

> Body parameter

```json
null
```

<h3 id="update-a-channel-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelAccountId|path|integer(int64)|true|The unique identifier of the channel account to update.|
|channelId|path|integer(int32)|true|The unique identifier of the custom channel to which the account belongs.|
|body|body|[PublicChannelAccountUpdateRequest](#schemapublicchannelaccountupdaterequest)|true|none|
|» authorized|body|boolean|false|A boolean indicating whether the channel account is authorized.|
|» name|body|string|false|A string representing the name of the channel account.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-channel-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicChannelAccount](#schemapublicchannelaccount)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.custom_channels.read ), oauth2 ( Scopes: conversations.custom_channels.write )
</aside>

<h1 id="conversations-custom-channels-channels">Channels</h1>

## Get a custom channel

<a id="opIdget-/conversations/custom-channels/2026-09/{channelId}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/conversations/custom-channels/2026-09/{channelId}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /conversations/custom-channels/2026-09/{channelId}`

Retrieve the details about a custom channel. This API allows you to see a custom channel's current capabilties and other configuration metadata

<h3 id="get-a-custom-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|integer(int32)|true|The unique identifier of the custom channel to retrieve. It is an integer value.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-a-custom-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicChannelIntegrationChannel](#schemapublicchannelintegrationchannel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Archive a custom channel

<a id="opIddelete-/conversations/custom-channels/2026-09/{channelId}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/conversations/custom-channels/2026-09/{channelId}?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /conversations/custom-channels/2026-09/{channelId}`

Archive an existing registered custom channel

<h3 id="archive-a-custom-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|integer(int32)|true|The unique identifier of the custom channel to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="archive-a-custom-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update a custom channel

<a id="opIdpatch-/conversations/custom-channels/2026-09/{channelId}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/conversations/custom-channels/2026-09/{channelId}?hapikey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /conversations/custom-channels/2026-09/{channelId}`

Update the capabilities for an existing. You can also use it to update the channel's webhookUri and its channelAccountConnectionRedirectUrl.

> Body parameter

```json
null
```

<h3 id="update-a-custom-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|integer(int32)|true|The unique identifier of the custom channel to update.|
|body|body|[PublicChannelIntegrationChannelPatch](#schemapublicchannelintegrationchannelpatch)|true|none|
|» capabilities|body|object|true|An object that defines the capabilities of the channel. This can include various properties that describe what the channel can do.|
|» » **additionalProperties**|body|object|false|none|
|» channelAccountConnectionRedirectUrl|body|object|true|An object representing the URL used to redirect for channel account connection.|
|» channelDescription|body|object|true|An object containing the description of the channel.|
|» channelLogoUrl|body|object|true|An object representing the URL of the channel's logo.|
|» name|body|object|true|An object representing the name of the channel.|
|» webhookUrl|body|object|true|An object representing the URL for the webhook associated with the channel.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-custom-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicChannelIntegrationChannel](#schemapublicchannelintegrationchannel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Get a channel account by id

<a id="opIdget-/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/custom-channels/2026-09/{channelId}/channel-accounts/{channelAccountId}`

Retrieve the details for a specific channel account. This contains all the metadata about your channel account, including its channel, associated inbox id, and delivery identifier information.

<h3 id="get-a-channel-account-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelAccountId|path|integer(int64)|true|The unique identifier of the channel account to retrieve.|
|channelId|path|integer(int32)|true|The unique identifier of the custom channel.|
|archived|query|boolean|false|Whether to return only results that have been archived.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-a-channel-account-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicChannelAccount](#schemapublicchannelaccount)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.custom_channels.read ), oauth2 ( Scopes: conversations.custom_channels.write )
</aside>

<h1 id="conversations-custom-channels-messages">Messages</h1>

## Publish a message

<a id="opIdpost-/conversations/custom-channels/2026-09/{channelId}/messages"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/custom-channels/2026-09/{channelId}/messages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /conversations/custom-channels/2026-09/{channelId}/messages`

Publish a message over your custom channel

> Body parameter

```json
null
```

<h3 id="publish-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|integer(int32)|true|The unique identifier of the custom channel where the message will be created.|
|body|body|[ChannelIntegrationMessageEgg](#schemachannelintegrationmessageegg)|true|none|
|» associateWithContactId|body|integer(int64)|false|The ID of the contact with which this message should be associated.|
|» attachments|body|[[FileAttachment](#schemafileattachment) \| [LocationAttachment](#schemalocationattachment) \| [ContactAttachment](#schemacontactattachment) \| [UnsupportedContentAttachment](#schemaunsupportedcontentattachment) \| [MessageHeaderAttachment](#schemamessageheaderattachment) \| [QuickRepliesAttachment](#schemaquickrepliesattachment) \| [SocialMetadataIntegrationAttachment](#schemasocialmetadataintegrationattachment)]|true|An array of attachments included with the message, which can be files, locations, contacts, or other supported types.|
|» » *oneOf*|body|[FileAttachment](#schemafileattachment)|false|none|
|» » *oneOf*|body|[LocationAttachment](#schemalocationattachment)|false|none|
|» » *oneOf*|body|[ContactAttachment](#schemacontactattachment)|false|none|
|» » *oneOf*|body|[UnsupportedContentAttachment](#schemaunsupportedcontentattachment)|false|none|
|» » *oneOf*|body|[MessageHeaderAttachment](#schemamessageheaderattachment)|false|none|
|» » *oneOf*|body|[QuickRepliesAttachment](#schemaquickrepliesattachment)|false|none|
|» » *oneOf*|body|[SocialMetadataIntegrationAttachment](#schemasocialmetadataintegrationattachment)|false|none|
|» channelAccountId|body|string|true|The ID of the channel account through which the message is sent.|
|» inReplyToId|body|string|false|The ID of the message this message is replying to.|
|» integrationIdempotencyId|body|string|false|A unique identifier to ensure idempotency of the message within the integration.|
|» integrationThreadId|body|string|false|A unique identifier for the thread within the integration.|
|» messageDirection|body|string|true|The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'.|
|» preResolvedContacts|body|[PreResolvedContacts](#schemapreresolvedcontacts)|false|none|
|» recipients|body|[[ChannelIntegrationParticipant](#schemachannelintegrationparticipant)]|true|An array of participants representing the recipients of the message.|
|» richText|body|string|false|The rich text content of the message, allowing for formatting.|
|» senders|body|[[ChannelIntegrationParticipant](#schemachannelintegrationparticipant)]|true|An array of participants representing the senders of the message.|
|» text|body|string|true|The plain text content of the message.|
|» timestamp|body|string(date-time)|true|The date and time when the message was created, in ISO 8601 format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» messageDirection|INCOMING|
|» messageDirection|OUTGOING|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="publish-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicConversationsMessage](#schemapublicconversationsmessage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.custom_channels.write )
</aside>

## Get a message

<a id="opIdget-/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/custom-channels/2026-09/{channelId}/messages/{messageId}`

Get the details for a specific message sent over a custom channel

<h3 id="get-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|integer(int32)|true|The unique identifier of the custom channel from which the message is to be retrieved.|
|messageId|path|string|true|The unique identifier of the message to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicConversationsMessage](#schemapublicconversationsmessage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.custom_channels.read )
</aside>

## Update a message

<a id="opIdpatch-/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/conversations/custom-channels/2026-09/{channelId}/messages/{messageId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /conversations/custom-channels/2026-09/{channelId}/messages/{messageId}`

Update a message's status to indicate if it was successfully sent, failed to send, or was read. For failed messages, this can also include the error message for the failure.

> Body parameter

```json
null
```

<h3 id="update-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|path|integer(int32)|true|The unique identifier of the custom channel that contains the message.|
|messageId|path|string|true|The unique identifier of the message to update.|
|body|body|[PublicChannelIntegrationMessageUpdateRequest](#schemapublicchannelintegrationmessageupdaterequest)|true|none|
|» errorMessage|body|string|false|A string containing an error message, if applicable.|
|» statusType|body|string|true|Valid status are SENT, FAILED, and READ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» statusType|FAILED|
|» statusType|READ|
|» statusType|SENT|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicConversationsMessage](#schemapublicconversationsmessage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: conversations.custom_channels.write )
</aside>

# Schemas

<h2 id="tocS_ChannelIntegrationMessageEgg">ChannelIntegrationMessageEgg</h2>
<!-- backwards compatibility -->
<a id="schemachannelintegrationmessageegg"></a>
<a id="schema_ChannelIntegrationMessageEgg"></a>
<a id="tocSchannelintegrationmessageegg"></a>
<a id="tocschannelintegrationmessageegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associateWithContactId|integer(int64)|false|none|The ID of the contact with which this message should be associated.|
|attachments|[[FileAttachment](#schemafileattachment) \| [LocationAttachment](#schemalocationattachment) \| [ContactAttachment](#schemacontactattachment) \| [UnsupportedContentAttachment](#schemaunsupportedcontentattachment) \| [MessageHeaderAttachment](#schemamessageheaderattachment) \| [QuickRepliesAttachment](#schemaquickrepliesattachment) \| [SocialMetadataIntegrationAttachment](#schemasocialmetadataintegrationattachment)]|true|none|An array of attachments included with the message, which can be files, locations, contacts, or other supported types.|
|channelAccountId|string|true|none|The ID of the channel account through which the message is sent.|
|inReplyToId|string|false|none|The ID of the message this message is replying to.|
|integrationIdempotencyId|string|false|none|A unique identifier to ensure idempotency of the message within the integration.|
|integrationThreadId|string|false|none|A unique identifier for the thread within the integration.|
|messageDirection|string|true|none|The direction of the message, indicating whether it is 'INCOMING' or 'OUTGOING'.|
|preResolvedContacts|[PreResolvedContacts](#schemapreresolvedcontacts)|false|none|none|
|recipients|[[ChannelIntegrationParticipant](#schemachannelintegrationparticipant)]|true|none|An array of participants representing the recipients of the message.|
|richText|string|false|none|The rich text content of the message, allowing for formatting.|
|senders|[[ChannelIntegrationParticipant](#schemachannelintegrationparticipant)]|true|none|An array of participants representing the senders of the message.|
|text|string|true|none|The plain text content of the message.|
|timestamp|string(date-time)|true|none|The date and time when the message was created, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|messageDirection|INCOMING|
|messageDirection|OUTGOING|

<h2 id="tocS_ChannelIntegrationParticipant">ChannelIntegrationParticipant</h2>
<!-- backwards compatibility -->
<a id="schemachannelintegrationparticipant"></a>
<a id="schema_ChannelIntegrationParticipant"></a>
<a id="tocSchannelintegrationparticipant"></a>
<a id="tocschannelintegrationparticipant"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryIdentifier|[PublicDeliveryIdentifier](#schemapublicdeliveryidentifier)|true|none|none|
|name|string|false|none|The name of the participant. It is a string that can be used to identify the participant within the channel.|
|senderActorId|string|false|none|A string representing the unique identifier of the sender actor. This is used to distinguish the sender within the channel integration.|

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
|results|[[PublicChannelAccount](#schemapublicchannelaccount)]|true|none|An array of PublicChannelAccount objects, each representing a public channel account with its details.|
|total|integer(int32)|true|none|An integer representing the total number of public channel accounts available.|

<h2 id="tocS_CollectionResponseWithTotalPublicChannelIntegrationChannel">CollectionResponseWithTotalPublicChannelIntegrationChannel</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalpublicchannelintegrationchannel"></a>
<a id="schema_CollectionResponseWithTotalPublicChannelIntegrationChannel"></a>
<a id="tocScollectionresponsewithtotalpublicchannelintegrationchannel"></a>
<a id="tocscollectionresponsewithtotalpublicchannelintegrationchannel"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[PublicChannelIntegrationChannel](#schemapublicchannelintegrationchannel)]|true|none|An array of public channel integration channels. Each item in the array is a PublicChannelIntegrationChannel object.|
|total|integer(int32)|true|none|The total number of public channel integration channels available. This is an integer value.|

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
|city|string|false|none|The city where the contact is located. It is a string value.|
|country|string|false|none|The country where the contact is located. It is a string value.|
|countryCode|string|false|none|The code representing the country of the contact's address. It is a string value.|
|state|string|false|none|The state where the contact is located. It is a string value.|
|street|string|false|none|The street address of the contact. It is a string value.|
|type|string|false|none|The type of address, which can be either 'HOME' or 'WORK'.|
|zip|string|false|none|The postal code of the contact's address. It is a string value.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOME|
|type|WORK|

<h2 id="tocS_ContactAttachment">ContactAttachment</h2>
<!-- backwards compatibility -->
<a id="schemacontactattachment"></a>
<a id="schema_ContactAttachment"></a>
<a id="tocScontactattachment"></a>
<a id="tocscontactattachment"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactProfile|[ContactProfile](#schemacontactprofile)|true|none|none|
|type|string|true|none|A string indicating the type of attachment. The default value is 'CONTACT'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CONTACT|

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
|email|string|true|none|The actual email address of the contact, represented as a string.|
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
|middleName|string|false|none|A string representing the middle name of the contact.|
|prefix|string|false|none|A string representing the prefix of the contact's name, such as 'Mr.', 'Ms.', or 'Dr.'.|
|suffix|string|false|none|A string representing the suffix of the contact's name, such as 'Jr.', 'Sr.', or 'III'.|

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
|company|string|false|none|The name of the company the contact is associated with. It is a string value.|
|department|string|false|none|The department within the company where the contact works. It is a string value.|
|title|string|false|none|The job title of the contact within their company. It is a string value.|

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
|phone|string|true|none|The phone number associated with the contact. This is a string representing the contact's phone number.|
|type|string|false|none|The type of phone, which can be one of the following: 'CELL', 'MAIN', 'HOME', or 'WORK'.|

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
|addresses|[[ContactAddress](#schemacontactaddress)]|true|none|An array of addresses associated with the contact, where each address includes details such as type (e.g., HOME, WORK), street, city, state, zip, country, and country code.|
|emails|[[ContactEmail](#schemacontactemail)]|true|none|An array of email addresses for the contact, with each email having a type (e.g., HOME, WORK) and the email address itself.|
|name|[ContactName](#schemacontactname)|false|none|none|
|org|[ContactOrg](#schemacontactorg)|false|none|none|
|phones|[[ContactPhone](#schemacontactphone)]|true|none|An array of phone numbers for the contact, with each phone number including a type (e.g., CELL, MAIN, HOME, WORK) and the phone number.|
|urls|[[ContactUrl](#schemacontacturl)]|true|none|An array of URLs related to the contact, where each URL includes a type (e.g., HOME, WORK) and the URL itself.|

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
|type|string|false|none|The category of the URL, indicating its purpose. Valid values include 'HOME' and 'WORK'.|
|url|string|true|none|The actual URL string associated with the contact.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOME|
|type|WORK|

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
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

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
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_FileAttachment">FileAttachment</h2>
<!-- backwards compatibility -->
<a id="schemafileattachment"></a>
<a id="schema_FileAttachment"></a>
<a id="tocSfileattachment"></a>
<a id="tocsfileattachment"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileId|string|true|none|A string representing the unique identifier for the file.|
|fileUsageType|string|false|none|A string that specifies the usage type of the file. Valid values include 'STICKER', 'VOICE_RECORDING', 'IMAGE', 'AUDIO', and 'OTHER'.|
|type|string|true|none|A string that indicates the type of attachment. The default value is 'FILE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|fileUsageType|AUDIO|
|fileUsageType|IMAGE|
|fileUsageType|OTHER|
|fileUsageType|STICKER|
|fileUsageType|VOICE_RECORDING|
|type|FILE|

<h2 id="tocS_LocationAttachment">LocationAttachment</h2>
<!-- backwards compatibility -->
<a id="schemalocationattachment"></a>
<a id="schema_LocationAttachment"></a>
<a id="tocSlocationattachment"></a>
<a id="tocslocationattachment"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|A string representing the address of the location.|
|latitude|number|true|none|A number representing the latitude of the location.|
|longitude|number|true|none|A number representing the longitude of the location.|
|name|string|false|none|A string representing the name of the location.|
|type|string|true|none|A string indicating the type of attachment, which is always 'LOCATION'.|
|url|string|false|none|A string representing a URL associated with the location.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LOCATION|

<h2 id="tocS_MessageHeaderAttachment">MessageHeaderAttachment</h2>
<!-- backwards compatibility -->
<a id="schemamessageheaderattachment"></a>
<a id="schema_MessageHeaderAttachment"></a>
<a id="tocSmessageheaderattachment"></a>
<a id="tocsmessageheaderattachment"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileId|integer(int64)|false|none|An optional integer representing the ID of an associated file, formatted as an int64.|
|text|string|false|none|An optional string containing text information for the message header.|
|type|string|true|none|A string representing the type of attachment, which is always 'MESSAGE_HEADER'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MESSAGE_HEADER|

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
|after|string|true|none|A paging cursor token for retrieving subsequent pages.|
|link|string|false|none|A URL that can be used to retrieve the next page results.|

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

<h2 id="tocS_PreResolvedContact">PreResolvedContact</h2>
<!-- backwards compatibility -->
<a id="schemapreresolvedcontact"></a>
<a id="schema_PreResolvedContact"></a>
<a id="tocSpreresolvedcontact"></a>
<a id="tocspreresolvedcontact"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactPropertiesLeadingToMatch|[string]|true|none|An array of strings indicating the properties that were used to match and identify the contact. Valid values include various contact attributes such as 'email', 'firstname', 'lastname', and many more.|
|contactVid|integer(int64)|true|none|The unique identifier for the contact, represented as an integer in int64 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|contactPropertiesLeadingToMatch|address|
|contactPropertiesLeadingToMatch|annualrevenue|
|contactPropertiesLeadingToMatch|associatedcompanyid|
|contactPropertiesLeadingToMatch|associatedcompanylastupdated|
|contactPropertiesLeadingToMatch|city|
|contactPropertiesLeadingToMatch|closedate|
|contactPropertiesLeadingToMatch|company|
|contactPropertiesLeadingToMatch|company_size|
|contactPropertiesLeadingToMatch|country|
|contactPropertiesLeadingToMatch|createdate|
|contactPropertiesLeadingToMatch|currentlyinworkflow|
|contactPropertiesLeadingToMatch|date_of_birth|
|contactPropertiesLeadingToMatch|days_to_close|
|contactPropertiesLeadingToMatch|degree|
|contactPropertiesLeadingToMatch|email|
|contactPropertiesLeadingToMatch|engagements_last_meeting_booked|
|contactPropertiesLeadingToMatch|engagements_last_meeting_booked_campaign|
|contactPropertiesLeadingToMatch|engagements_last_meeting_booked_medium|
|contactPropertiesLeadingToMatch|engagements_last_meeting_booked_source|
|contactPropertiesLeadingToMatch|fax|
|contactPropertiesLeadingToMatch|field_of_study|
|contactPropertiesLeadingToMatch|first_conversion_date|
|contactPropertiesLeadingToMatch|first_conversion_event_name|
|contactPropertiesLeadingToMatch|first_deal_created_date|
|contactPropertiesLeadingToMatch|firstname|
|contactPropertiesLeadingToMatch|followercount|
|contactPropertiesLeadingToMatch|gender|
|contactPropertiesLeadingToMatch|graduation_date|
|contactPropertiesLeadingToMatch|hs_active_contracts_arr|
|contactPropertiesLeadingToMatch|hs_active_contracts_mrr|
|contactPropertiesLeadingToMatch|hs_active_contracts_tcv|
|contactPropertiesLeadingToMatch|hs_additional_emails|
|contactPropertiesLeadingToMatch|hs_all_contact_vids|
|contactPropertiesLeadingToMatch|hs_analytics_average_page_views|
|contactPropertiesLeadingToMatch|hs_analytics_first_referrer|
|contactPropertiesLeadingToMatch|hs_analytics_first_timestamp|
|contactPropertiesLeadingToMatch|hs_analytics_first_touch_converting_campaign|
|contactPropertiesLeadingToMatch|hs_analytics_first_url|
|contactPropertiesLeadingToMatch|hs_analytics_first_visit_timestamp|
|contactPropertiesLeadingToMatch|hs_analytics_last_referrer|
|contactPropertiesLeadingToMatch|hs_analytics_last_timestamp|
|contactPropertiesLeadingToMatch|hs_analytics_last_touch_converting_campaign|
|contactPropertiesLeadingToMatch|hs_analytics_last_url|
|contactPropertiesLeadingToMatch|hs_analytics_last_visit_timestamp|
|contactPropertiesLeadingToMatch|hs_analytics_num_event_completions|
|contactPropertiesLeadingToMatch|hs_analytics_num_page_views|
|contactPropertiesLeadingToMatch|hs_analytics_num_visits|
|contactPropertiesLeadingToMatch|hs_analytics_revenue|
|contactPropertiesLeadingToMatch|hs_analytics_source|
|contactPropertiesLeadingToMatch|hs_analytics_source_composite_data|
|contactPropertiesLeadingToMatch|hs_analytics_source_data_1|
|contactPropertiesLeadingToMatch|hs_analytics_source_data_2|
|contactPropertiesLeadingToMatch|hs_associated_target_accounts|
|contactPropertiesLeadingToMatch|hs_avatar_filemanager_key|
|contactPropertiesLeadingToMatch|hs_bing_ad_clicked|
|contactPropertiesLeadingToMatch|hs_bing_click_id|
|contactPropertiesLeadingToMatch|hs_buying_role|
|contactPropertiesLeadingToMatch|hs_calculated_form_submissions|
|contactPropertiesLeadingToMatch|hs_calculated_merged_vids|
|contactPropertiesLeadingToMatch|hs_calculated_mobile_number|
|contactPropertiesLeadingToMatch|hs_calculated_phone_number|
|contactPropertiesLeadingToMatch|hs_calculated_phone_number_area_code|
|contactPropertiesLeadingToMatch|hs_calculated_phone_number_country_code|
|contactPropertiesLeadingToMatch|hs_calculated_phone_number_region_code|
|contactPropertiesLeadingToMatch|hs_chat_assistant_iql_date|
|contactPropertiesLeadingToMatch|hs_chat_assistant_source|
|contactPropertiesLeadingToMatch|hs_chat_assistant_summary|
|contactPropertiesLeadingToMatch|hs_chatgpt_ad_clicked|
|contactPropertiesLeadingToMatch|hs_chatgpt_click_id|
|contactPropertiesLeadingToMatch|hs_clicked_linkedin_ad|
|contactPropertiesLeadingToMatch|hs_consent_to_email_tracking|
|contactPropertiesLeadingToMatch|hs_contact_creation_legal_basis_source_instance_id|
|contactPropertiesLeadingToMatch|hs_contact_enrichment_opt_out|
|contactPropertiesLeadingToMatch|hs_contact_enrichment_opt_out_timestamp|
|contactPropertiesLeadingToMatch|hs_content_membership_email|
|contactPropertiesLeadingToMatch|hs_content_membership_email_confirmed|
|contactPropertiesLeadingToMatch|hs_content_membership_follow_up_enqueued_at|
|contactPropertiesLeadingToMatch|hs_content_membership_notes|
|contactPropertiesLeadingToMatch|hs_content_membership_registered_at|
|contactPropertiesLeadingToMatch|hs_content_membership_registration_domain_sent_to|
|contactPropertiesLeadingToMatch|hs_content_membership_registration_email_sent_at|
|contactPropertiesLeadingToMatch|hs_content_membership_status|
|contactPropertiesLeadingToMatch|hs_conversations_visitor_email|
|contactPropertiesLeadingToMatch|hs_count_is_unworked|
|contactPropertiesLeadingToMatch|hs_count_is_worked|
|contactPropertiesLeadingToMatch|hs_country_region_code|
|contactPropertiesLeadingToMatch|hs_created_by_conversations|
|contactPropertiesLeadingToMatch|hs_cross_account_data_mirroring_source_account_ids|
|contactPropertiesLeadingToMatch|hs_cross_account_note|
|contactPropertiesLeadingToMatch|hs_cross_sell_opportunity|
|contactPropertiesLeadingToMatch|hs_current_customer|
|contactPropertiesLeadingToMatch|hs_currently_enrolled_in_prospecting_agent|
|contactPropertiesLeadingToMatch|hs_customer_agent_lead_status|
|contactPropertiesLeadingToMatch|hs_data_privacy_ads_consent|
|contactPropertiesLeadingToMatch|hs_date_entered_customer|
|contactPropertiesLeadingToMatch|hs_date_entered_evangelist|
|contactPropertiesLeadingToMatch|hs_date_entered_lead|
|contactPropertiesLeadingToMatch|hs_date_entered_marketingqualifiedlead|
|contactPropertiesLeadingToMatch|hs_date_entered_opportunity|
|contactPropertiesLeadingToMatch|hs_date_entered_other|
|contactPropertiesLeadingToMatch|hs_date_entered_salesqualifiedlead|
|contactPropertiesLeadingToMatch|hs_date_entered_subscriber|
|contactPropertiesLeadingToMatch|hs_date_exited_customer|
|contactPropertiesLeadingToMatch|hs_date_exited_evangelist|
|contactPropertiesLeadingToMatch|hs_date_exited_lead|
|contactPropertiesLeadingToMatch|hs_date_exited_marketingqualifiedlead|
|contactPropertiesLeadingToMatch|hs_date_exited_opportunity|
|contactPropertiesLeadingToMatch|hs_date_exited_other|
|contactPropertiesLeadingToMatch|hs_date_exited_salesqualifiedlead|
|contactPropertiesLeadingToMatch|hs_date_exited_subscriber|
|contactPropertiesLeadingToMatch|hs_document_last_revisited|
|contactPropertiesLeadingToMatch|hs_email_bad_address|
|contactPropertiesLeadingToMatch|hs_email_bounce|
|contactPropertiesLeadingToMatch|hs_email_click|
|contactPropertiesLeadingToMatch|hs_email_communication_subscriptions_opted_in|
|contactPropertiesLeadingToMatch|hs_email_communication_subscriptions_opted_out|
|contactPropertiesLeadingToMatch|hs_email_customer_quarantined_reason|
|contactPropertiesLeadingToMatch|hs_email_delivered|
|contactPropertiesLeadingToMatch|hs_email_domain|
|contactPropertiesLeadingToMatch|hs_email_engagement_likelihood_category|
|contactPropertiesLeadingToMatch|hs_email_first_click_date|
|contactPropertiesLeadingToMatch|hs_email_first_open_date|
|contactPropertiesLeadingToMatch|hs_email_first_reply_date|
|contactPropertiesLeadingToMatch|hs_email_first_send_date|
|contactPropertiesLeadingToMatch|hs_email_hard_bounce_reason|
|contactPropertiesLeadingToMatch|hs_email_hard_bounce_reason_enum|
|contactPropertiesLeadingToMatch|hs_email_is_ineligible|
|contactPropertiesLeadingToMatch|hs_email_last_click_date|
|contactPropertiesLeadingToMatch|hs_email_last_email_name|
|contactPropertiesLeadingToMatch|hs_email_last_open_date|
|contactPropertiesLeadingToMatch|hs_email_last_reply_date|
|contactPropertiesLeadingToMatch|hs_email_last_send_date|
|contactPropertiesLeadingToMatch|hs_email_live_sourcing_restricted|
|contactPropertiesLeadingToMatch|hs_email_open|
|contactPropertiesLeadingToMatch|hs_email_optimal_send_day_of_week|
|contactPropertiesLeadingToMatch|hs_email_optimal_send_time_of_day|
|contactPropertiesLeadingToMatch|hs_email_optout|
|contactPropertiesLeadingToMatch|hs_email_optout_survey_reason|
|contactPropertiesLeadingToMatch|hs_email_quarantined|
|contactPropertiesLeadingToMatch|hs_email_quarantined_reason|
|contactPropertiesLeadingToMatch|hs_email_recipient_fatigue_recovery_time|
|contactPropertiesLeadingToMatch|hs_email_replied|
|contactPropertiesLeadingToMatch|hs_email_sends_since_last_engagement|
|contactPropertiesLeadingToMatch|hs_email_type|
|contactPropertiesLeadingToMatch|hs_emailconfirmationstatus|
|contactPropertiesLeadingToMatch|hs_employment_change_detected_date|
|contactPropertiesLeadingToMatch|hs_enforce_double_opt_in|
|contactPropertiesLeadingToMatch|hs_enriched_email_bounce_detected|
|contactPropertiesLeadingToMatch|hs_excluded_from_cross_account_data_mirroring|
|contactPropertiesLeadingToMatch|hs_facebook_ad_clicked|
|contactPropertiesLeadingToMatch|hs_facebook_click_id|
|contactPropertiesLeadingToMatch|hs_facebookid|
|contactPropertiesLeadingToMatch|hs_feedback_last_ces_survey_date|
|contactPropertiesLeadingToMatch|hs_feedback_last_ces_survey_follow_up|
|contactPropertiesLeadingToMatch|hs_feedback_last_ces_survey_rating|
|contactPropertiesLeadingToMatch|hs_feedback_last_csat_survey_date|
|contactPropertiesLeadingToMatch|hs_feedback_last_csat_survey_follow_up|
|contactPropertiesLeadingToMatch|hs_feedback_last_csat_survey_rating|
|contactPropertiesLeadingToMatch|hs_feedback_last_nps_follow_up|
|contactPropertiesLeadingToMatch|hs_feedback_last_nps_rating|
|contactPropertiesLeadingToMatch|hs_feedback_last_nps_rating_number|
|contactPropertiesLeadingToMatch|hs_feedback_last_survey_date|
|contactPropertiesLeadingToMatch|hs_feedback_show_nps_web_survey|
|contactPropertiesLeadingToMatch|hs_first_closed_order_id|
|contactPropertiesLeadingToMatch|hs_first_engagement_object_id|
|contactPropertiesLeadingToMatch|hs_first_order_closed_date|
|contactPropertiesLeadingToMatch|hs_first_outreach_date|
|contactPropertiesLeadingToMatch|hs_first_subscription_create_date|
|contactPropertiesLeadingToMatch|hs_full_name_or_email|
|contactPropertiesLeadingToMatch|hs_geohash_1|
|contactPropertiesLeadingToMatch|hs_geohash_2|
|contactPropertiesLeadingToMatch|hs_geohash_3|
|contactPropertiesLeadingToMatch|hs_geohash_4|
|contactPropertiesLeadingToMatch|hs_geohash_5|
|contactPropertiesLeadingToMatch|hs_geohash_6|
|contactPropertiesLeadingToMatch|hs_google_click_id|
|contactPropertiesLeadingToMatch|hs_googleplusid|
|contactPropertiesLeadingToMatch|hs_gps_coordinates|
|contactPropertiesLeadingToMatch|hs_gps_error|
|contactPropertiesLeadingToMatch|hs_gps_latitude|
|contactPropertiesLeadingToMatch|hs_gps_longitude|
|contactPropertiesLeadingToMatch|hs_has_active_subscription|
|contactPropertiesLeadingToMatch|hs_inbound_agent_inquiry_type|
|contactPropertiesLeadingToMatch|hs_inbound_agent_last_conversation_date|
|contactPropertiesLeadingToMatch|hs_inbound_agent_qualification_status|
|contactPropertiesLeadingToMatch|hs_inferred_language_codes|
|contactPropertiesLeadingToMatch|hs_intent_paid_up_to_date|
|contactPropertiesLeadingToMatch|hs_intent_signals_enabled|
|contactPropertiesLeadingToMatch|hs_ip_timezone|
|contactPropertiesLeadingToMatch|hs_is_contact|
|contactPropertiesLeadingToMatch|hs_is_enriched|
|contactPropertiesLeadingToMatch|hs_is_mass_marketing_activation_disallowed|
|contactPropertiesLeadingToMatch|hs_is_merge_revertible|
|contactPropertiesLeadingToMatch|hs_is_unworked|
|contactPropertiesLeadingToMatch|hs_job_change_detected_date|
|contactPropertiesLeadingToMatch|hs_journey_stage|
|contactPropertiesLeadingToMatch|hs_language|
|contactPropertiesLeadingToMatch|hs_last_metered_enrichment_timestamp|
|contactPropertiesLeadingToMatch|hs_last_sales_activity_date|
|contactPropertiesLeadingToMatch|hs_last_sales_activity_timestamp|
|contactPropertiesLeadingToMatch|hs_last_sales_activity_type|
|contactPropertiesLeadingToMatch|hs_last_sms_send_date|
|contactPropertiesLeadingToMatch|hs_last_sms_send_name|
|contactPropertiesLeadingToMatch|hs_latest_disqualified_lead_date|
|contactPropertiesLeadingToMatch|hs_latest_meeting_activity|
|contactPropertiesLeadingToMatch|hs_latest_open_lead_date|
|contactPropertiesLeadingToMatch|hs_latest_qualified_lead_date|
|contactPropertiesLeadingToMatch|hs_latest_sequence_ended_date|
|contactPropertiesLeadingToMatch|hs_latest_sequence_enrolled|
|contactPropertiesLeadingToMatch|hs_latest_sequence_enrolled_date|
|contactPropertiesLeadingToMatch|hs_latest_sequence_finished_date|
|contactPropertiesLeadingToMatch|hs_latest_sequence_unenrolled_date|
|contactPropertiesLeadingToMatch|hs_latest_source|
|contactPropertiesLeadingToMatch|hs_latest_source_composite_data|
|contactPropertiesLeadingToMatch|hs_latest_source_data_1|
|contactPropertiesLeadingToMatch|hs_latest_source_data_2|
|contactPropertiesLeadingToMatch|hs_latest_source_timestamp|
|contactPropertiesLeadingToMatch|hs_latest_subscription_create_date|
|contactPropertiesLeadingToMatch|hs_latitude|
|contactPropertiesLeadingToMatch|hs_lead_status|
|contactPropertiesLeadingToMatch|hs_legal_basis|
|contactPropertiesLeadingToMatch|hs_lifecyclestage_customer_date|
|contactPropertiesLeadingToMatch|hs_lifecyclestage_evangelist_date|
|contactPropertiesLeadingToMatch|hs_lifecyclestage_lead_date|
|contactPropertiesLeadingToMatch|hs_lifecyclestage_marketingqualifiedlead_date|
|contactPropertiesLeadingToMatch|hs_lifecyclestage_opportunity_date|
|contactPropertiesLeadingToMatch|hs_lifecyclestage_other_date|
|contactPropertiesLeadingToMatch|hs_lifecyclestage_salesqualifiedlead_date|
|contactPropertiesLeadingToMatch|hs_lifecyclestage_subscriber_date|
|contactPropertiesLeadingToMatch|hs_linkedin_ad_clicked|
|contactPropertiesLeadingToMatch|hs_linkedin_click_id|
|contactPropertiesLeadingToMatch|hs_linkedin_url|
|contactPropertiesLeadingToMatch|hs_linkedinid|
|contactPropertiesLeadingToMatch|hs_live_enrichment_deadline|
|contactPropertiesLeadingToMatch|hs_longitude|
|contactPropertiesLeadingToMatch|hs_manual_campaign_ids|
|contactPropertiesLeadingToMatch|hs_marketable_reason_id|
|contactPropertiesLeadingToMatch|hs_marketable_reason_type|
|contactPropertiesLeadingToMatch|hs_marketable_status|
|contactPropertiesLeadingToMatch|hs_marketable_until_renewal|
|contactPropertiesLeadingToMatch|hs_membership_has_accessed_private_content|
|contactPropertiesLeadingToMatch|hs_membership_last_private_content_access_date|
|contactPropertiesLeadingToMatch|hs_messaging_engagement_score|
|contactPropertiesLeadingToMatch|hs_mobile_sdk_push_tokens|
|contactPropertiesLeadingToMatch|hs_next_renewal_date|
|contactPropertiesLeadingToMatch|hs_notes_last_activity|
|contactPropertiesLeadingToMatch|hs_notes_next_activity|
|contactPropertiesLeadingToMatch|hs_notes_next_activity_type|
|contactPropertiesLeadingToMatch|hs_num_active_contracts|
|contactPropertiesLeadingToMatch|hs_num_associated_open_deals|
|contactPropertiesLeadingToMatch|hs_persona|
|contactPropertiesLeadingToMatch|hs_pinned_engagement_id|
|contactPropertiesLeadingToMatch|hs_pipeline|
|contactPropertiesLeadingToMatch|hs_predictivecontactscore|
|contactPropertiesLeadingToMatch|hs_predictivecontactscore_tmp|
|contactPropertiesLeadingToMatch|hs_predictivecontactscore_v2|
|contactPropertiesLeadingToMatch|hs_predictivecontactscorebucket|
|contactPropertiesLeadingToMatch|hs_predictivescoringtier|
|contactPropertiesLeadingToMatch|hs_predictivescoringtier_tmp|
|contactPropertiesLeadingToMatch|hs_prospecting_agent_activation_email_id|
|contactPropertiesLeadingToMatch|hs_prospecting_agent_activation_status|
|contactPropertiesLeadingToMatch|hs_prospecting_agent_actively_enrolled_count|
|contactPropertiesLeadingToMatch|hs_prospecting_agent_enrollment_status|
|contactPropertiesLeadingToMatch|hs_prospecting_agent_enrollment_status_raw|
|contactPropertiesLeadingToMatch|hs_prospecting_agent_last_enrolled|
|contactPropertiesLeadingToMatch|hs_prospecting_agent_sender|
|contactPropertiesLeadingToMatch|hs_prospecting_agent_total_enrolled_count|
|contactPropertiesLeadingToMatch|hs_quarantined_emails|
|contactPropertiesLeadingToMatch|hs_recent_closed_order_date|
|contactPropertiesLeadingToMatch|hs_reddit_ad_clicked|
|contactPropertiesLeadingToMatch|hs_reddit_click_id|
|contactPropertiesLeadingToMatch|hs_registered_member|
|contactPropertiesLeadingToMatch|hs_registration_method|
|contactPropertiesLeadingToMatch|hs_returning_to_office_detected_date|
|contactPropertiesLeadingToMatch|hs_role|
|contactPropertiesLeadingToMatch|hs_sa_first_engagement_date|
|contactPropertiesLeadingToMatch|hs_sa_first_engagement_descr|
|contactPropertiesLeadingToMatch|hs_sa_first_engagement_object_type|
|contactPropertiesLeadingToMatch|hs_sales_email_last_clicked|
|contactPropertiesLeadingToMatch|hs_sales_email_last_opened|
|contactPropertiesLeadingToMatch|hs_sales_email_last_replied|
|contactPropertiesLeadingToMatch|hs_searchable_calculated_international_mobile_number|
|contactPropertiesLeadingToMatch|hs_searchable_calculated_international_phone_number|
|contactPropertiesLeadingToMatch|hs_searchable_calculated_mobile_number|
|contactPropertiesLeadingToMatch|hs_searchable_calculated_phone_number|
|contactPropertiesLeadingToMatch|hs_seniority|
|contactPropertiesLeadingToMatch|hs_sequences_actively_enrolled_count|
|contactPropertiesLeadingToMatch|hs_sequences_enrolled_count|
|contactPropertiesLeadingToMatch|hs_sequences_is_enrolled|
|contactPropertiesLeadingToMatch|hs_social_facebook_clicks|
|contactPropertiesLeadingToMatch|hs_social_google_plus_clicks|
|contactPropertiesLeadingToMatch|hs_social_last_engagement|
|contactPropertiesLeadingToMatch|hs_social_linkedin_clicks|
|contactPropertiesLeadingToMatch|hs_social_num_broadcast_clicks|
|contactPropertiesLeadingToMatch|hs_social_twitter_clicks|
|contactPropertiesLeadingToMatch|hs_source_object_id|
|contactPropertiesLeadingToMatch|hs_source_portal_id|
|contactPropertiesLeadingToMatch|hs_sourced_contact_origin|
|contactPropertiesLeadingToMatch|hs_state_code|
|contactPropertiesLeadingToMatch|hs_sub_role|
|contactPropertiesLeadingToMatch|hs_testpurge|
|contactPropertiesLeadingToMatch|hs_testrollback|
|contactPropertiesLeadingToMatch|hs_tiktok_ad_clicked|
|contactPropertiesLeadingToMatch|hs_tiktok_click_id|
|contactPropertiesLeadingToMatch|hs_time_between_contact_creation_and_deal_close|
|contactPropertiesLeadingToMatch|hs_time_between_contact_creation_and_deal_creation|
|contactPropertiesLeadingToMatch|hs_time_in_customer|
|contactPropertiesLeadingToMatch|hs_time_in_evangelist|
|contactPropertiesLeadingToMatch|hs_time_in_lead|
|contactPropertiesLeadingToMatch|hs_time_in_marketingqualifiedlead|
|contactPropertiesLeadingToMatch|hs_time_in_opportunity|
|contactPropertiesLeadingToMatch|hs_time_in_other|
|contactPropertiesLeadingToMatch|hs_time_in_salesqualifiedlead|
|contactPropertiesLeadingToMatch|hs_time_in_subscriber|
|contactPropertiesLeadingToMatch|hs_time_to_first_engagement|
|contactPropertiesLeadingToMatch|hs_time_to_move_from_lead_to_customer|
|contactPropertiesLeadingToMatch|hs_time_to_move_from_marketingqualifiedlead_to_customer|
|contactPropertiesLeadingToMatch|hs_time_to_move_from_opportunity_to_customer|
|contactPropertiesLeadingToMatch|hs_time_to_move_from_salesqualifiedlead_to_customer|
|contactPropertiesLeadingToMatch|hs_time_to_move_from_subscriber_to_customer|
|contactPropertiesLeadingToMatch|hs_timezone|
|contactPropertiesLeadingToMatch|hs_twitterid|
|contactPropertiesLeadingToMatch|hs_user_ids_of_all_notification_recipients|
|contactPropertiesLeadingToMatch|hs_v2_cumulative_time_in_customer|
|contactPropertiesLeadingToMatch|hs_v2_cumulative_time_in_evangelist|
|contactPropertiesLeadingToMatch|hs_v2_cumulative_time_in_lead|
|contactPropertiesLeadingToMatch|hs_v2_cumulative_time_in_marketingqualifiedlead|
|contactPropertiesLeadingToMatch|hs_v2_cumulative_time_in_opportunity|
|contactPropertiesLeadingToMatch|hs_v2_cumulative_time_in_other|
|contactPropertiesLeadingToMatch|hs_v2_cumulative_time_in_salesqualifiedlead|
|contactPropertiesLeadingToMatch|hs_v2_cumulative_time_in_subscriber|
|contactPropertiesLeadingToMatch|hs_v2_date_entered_current_stage|
|contactPropertiesLeadingToMatch|hs_v2_date_entered_customer|
|contactPropertiesLeadingToMatch|hs_v2_date_entered_evangelist|
|contactPropertiesLeadingToMatch|hs_v2_date_entered_lead|
|contactPropertiesLeadingToMatch|hs_v2_date_entered_marketingqualifiedlead|
|contactPropertiesLeadingToMatch|hs_v2_date_entered_opportunity|
|contactPropertiesLeadingToMatch|hs_v2_date_entered_other|
|contactPropertiesLeadingToMatch|hs_v2_date_entered_salesqualifiedlead|
|contactPropertiesLeadingToMatch|hs_v2_date_entered_subscriber|
|contactPropertiesLeadingToMatch|hs_v2_date_exited_customer|
|contactPropertiesLeadingToMatch|hs_v2_date_exited_evangelist|
|contactPropertiesLeadingToMatch|hs_v2_date_exited_lead|
|contactPropertiesLeadingToMatch|hs_v2_date_exited_marketingqualifiedlead|
|contactPropertiesLeadingToMatch|hs_v2_date_exited_opportunity|
|contactPropertiesLeadingToMatch|hs_v2_date_exited_other|
|contactPropertiesLeadingToMatch|hs_v2_date_exited_salesqualifiedlead|
|contactPropertiesLeadingToMatch|hs_v2_date_exited_subscriber|
|contactPropertiesLeadingToMatch|hs_v2_latest_time_in_customer|
|contactPropertiesLeadingToMatch|hs_v2_latest_time_in_evangelist|
|contactPropertiesLeadingToMatch|hs_v2_latest_time_in_lead|
|contactPropertiesLeadingToMatch|hs_v2_latest_time_in_marketingqualifiedlead|
|contactPropertiesLeadingToMatch|hs_v2_latest_time_in_opportunity|
|contactPropertiesLeadingToMatch|hs_v2_latest_time_in_other|
|contactPropertiesLeadingToMatch|hs_v2_latest_time_in_salesqualifiedlead|
|contactPropertiesLeadingToMatch|hs_v2_latest_time_in_subscriber|
|contactPropertiesLeadingToMatch|hs_v2_time_in_current_stage|
|contactPropertiesLeadingToMatch|hs_whatsapp_bsuids|
|contactPropertiesLeadingToMatch|hs_whatsapp_communication_subscriptions_opted_in|
|contactPropertiesLeadingToMatch|hs_whatsapp_communication_subscriptions_opted_out|
|contactPropertiesLeadingToMatch|hs_whatsapp_phone_number|
|contactPropertiesLeadingToMatch|hs_why_this_contact|
|contactPropertiesLeadingToMatch|hubspot_owner_id|
|contactPropertiesLeadingToMatch|hubspotscore|
|contactPropertiesLeadingToMatch|industry|
|contactPropertiesLeadingToMatch|ip_city|
|contactPropertiesLeadingToMatch|ip_country|
|contactPropertiesLeadingToMatch|ip_country_code|
|contactPropertiesLeadingToMatch|ip_latlon|
|contactPropertiesLeadingToMatch|ip_state|
|contactPropertiesLeadingToMatch|ip_state_code|
|contactPropertiesLeadingToMatch|ip_zipcode|
|contactPropertiesLeadingToMatch|job_function|
|contactPropertiesLeadingToMatch|jobtitle|
|contactPropertiesLeadingToMatch|kloutscoregeneral|
|contactPropertiesLeadingToMatch|lastmodifieddate|
|contactPropertiesLeadingToMatch|lastname|
|contactPropertiesLeadingToMatch|lifecyclestage|
|contactPropertiesLeadingToMatch|linkedinbio|
|contactPropertiesLeadingToMatch|linkedinconnections|
|contactPropertiesLeadingToMatch|marital_status|
|contactPropertiesLeadingToMatch|message|
|contactPropertiesLeadingToMatch|military_status|
|contactPropertiesLeadingToMatch|mobilephone|
|contactPropertiesLeadingToMatch|notes_last_contacted|
|contactPropertiesLeadingToMatch|notes_last_updated|
|contactPropertiesLeadingToMatch|notes_next_activity_date|
|contactPropertiesLeadingToMatch|num_associated_deals|
|contactPropertiesLeadingToMatch|num_contacted_notes|
|contactPropertiesLeadingToMatch|num_conversion_events|
|contactPropertiesLeadingToMatch|num_notes|
|contactPropertiesLeadingToMatch|num_unique_conversion_events|
|contactPropertiesLeadingToMatch|numemployees|
|contactPropertiesLeadingToMatch|owneremail|
|contactPropertiesLeadingToMatch|ownername|
|contactPropertiesLeadingToMatch|phone|
|contactPropertiesLeadingToMatch|photo|
|contactPropertiesLeadingToMatch|recent_conversion_date|
|contactPropertiesLeadingToMatch|recent_conversion_event_name|
|contactPropertiesLeadingToMatch|recent_deal_amount|
|contactPropertiesLeadingToMatch|recent_deal_close_date|
|contactPropertiesLeadingToMatch|relationship_status|
|contactPropertiesLeadingToMatch|salutation|
|contactPropertiesLeadingToMatch|school|
|contactPropertiesLeadingToMatch|seniority|
|contactPropertiesLeadingToMatch|start_date|
|contactPropertiesLeadingToMatch|state|
|contactPropertiesLeadingToMatch|surveymonkeyeventlastupdated|
|contactPropertiesLeadingToMatch|total_revenue|
|contactPropertiesLeadingToMatch|twitterbio|
|contactPropertiesLeadingToMatch|twitterhandle|
|contactPropertiesLeadingToMatch|twitterprofilephoto|
|contactPropertiesLeadingToMatch|webinareventlastupdated|
|contactPropertiesLeadingToMatch|website|
|contactPropertiesLeadingToMatch|work_email|
|contactPropertiesLeadingToMatch|zip|

<h2 id="tocS_PreResolvedContacts">PreResolvedContacts</h2>
<!-- backwards compatibility -->
<a id="schemapreresolvedcontacts"></a>
<a id="schema_PreResolvedContacts"></a>
<a id="tocSpreresolvedcontacts"></a>
<a id="tocspreresolvedcontacts"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contacts|[[PreResolvedContact](#schemapreresolvedcontact)]|true|none|An array of PreResolvedContact objects. Each object contains information about a contact that has been pre-resolved, including properties that led to the match. This array is required.|

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
|before|string|true|none|A string token indicating the position before the current page in the pagination sequence.|
|link|string|false|none|A URL string that can be used to access the previous page of results.|

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
|channelId|string|true|none|The unique identifier for the channel to which this account belongs, represented as a string.|
|createdAt|string(date-time)|true|none|The date and time when the channel account was created, in ISO 8601 format.|
|deliveryIdentifier|[PublicDeliveryIdentifier](#schemapublicdeliveryidentifier)|false|none|none|
|id|string|true|none|The unique identifier for this channel account, represented as a string.|
|inboxId|string|true|none|The unique identifier for the inbox associated with this channel account, represented as a string.|
|name|string|true|none|The name of the channel account, represented as a string.|

<h2 id="tocS_PublicChannelAccountEgg">PublicChannelAccountEgg</h2>
<!-- backwards compatibility -->
<a id="schemapublicchannelaccountegg"></a>
<a id="schema_PublicChannelAccountEgg"></a>
<a id="tocSpublicchannelaccountegg"></a>
<a id="tocspublicchannelaccountegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorized|boolean|true|none|A boolean indicating whether the channel account is authorized.|
|deliveryIdentifier|[PublicDeliveryIdentifier](#schemapublicdeliveryidentifier)|false|none|none|
|inboxId|string|true|none|The unique identifier for the inbox associated with this channel account. It is a string.|
|name|string|true|none|The name of the channel account. It is a string.|

<h2 id="tocS_PublicChannelAccountStagingToken">PublicChannelAccountStagingToken</h2>
<!-- backwards compatibility -->
<a id="schemapublicchannelaccountstagingtoken"></a>
<a id="schema_PublicChannelAccountStagingToken"></a>
<a id="tocSpublicchannelaccountstagingtoken"></a>
<a id="tocspublicchannelaccountstagingtoken"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|A string representing the name of the account.|
|accountToken|string|true|none|A string representing the unique token for the account.|
|createdAt|string(date-time)|true|none|The date and time when the token was created, in ISO 8601 format.|
|deliveryIdentifier|[PublicDeliveryIdentifier](#schemapublicdeliveryidentifier)|false|none|none|
|genericChannelId|integer(int32)|true|none|An integer representing the unique identifier of the generic channel.|
|inboxId|integer(int32)|true|none|An integer representing the unique identifier of the inbox associated with the account.|
|userId|integer(int32)|true|none|An integer representing the unique identifier of the user associated with the account.|

<h2 id="tocS_PublicChannelAccountStagingTokenUpdateRequest">PublicChannelAccountStagingTokenUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicchannelaccountstagingtokenupdaterequest"></a>
<a id="schema_PublicChannelAccountStagingTokenUpdateRequest"></a>
<a id="tocSpublicchannelaccountstagingtokenupdaterequest"></a>
<a id="tocspublicchannelaccountstagingtokenupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|A string representing the name of the account associated with the staging token.|
|deliveryIdentifier|[PublicDeliveryIdentifier](#schemapublicdeliveryidentifier)|false|none|none|

<h2 id="tocS_PublicChannelAccountUpdateRequest">PublicChannelAccountUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicchannelaccountupdaterequest"></a>
<a id="schema_PublicChannelAccountUpdateRequest"></a>
<a id="tocSpublicchannelaccountupdaterequest"></a>
<a id="tocspublicchannelaccountupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorized|boolean|false|none|A boolean indicating whether the channel account is authorized.|
|name|string|false|none|A string representing the name of the channel account.|

<h2 id="tocS_PublicChannelIntegrationChannel">PublicChannelIntegrationChannel</h2>
<!-- backwards compatibility -->
<a id="schemapublicchannelintegrationchannel"></a>
<a id="schema_PublicChannelIntegrationChannel"></a>
<a id="tocSpublicchannelintegrationchannel"></a>
<a id="tocspublicchannelintegrationchannel"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|object|true|none|An object detailing the capabilities of the channel, with additional properties as objects.|
|channelAccountConnectionRedirectUrl|string|false|none|A string representing the URL used to redirect for channel account connection.|
|channelDescription|string|false|none|A string providing a description of the channel.|
|channelLogoUrl|string|false|none|A string representing the URL of the channel's logo.|
|createdAt|string(date-time)|true|none|The date and time when the channel was created, in ISO 8601 format.|
|id|string|true|none|A string that uniquely identifies the channel.|
|name|string|true|none|A string representing the name of the channel.|
|webhookUrl|string|false|none|A string representing the URL to which webhook events will be sent.|

<h2 id="tocS_PublicChannelIntegrationChannelCreate">PublicChannelIntegrationChannelCreate</h2>
<!-- backwards compatibility -->
<a id="schemapublicchannelintegrationchannelcreate"></a>
<a id="schema_PublicChannelIntegrationChannelCreate"></a>
<a id="tocSpublicchannelintegrationchannelcreate"></a>
<a id="tocspublicchannelintegrationchannelcreate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|object|true|none|An object that defines the capabilities of the channel, with additional properties as key-value pairs.|
|channelAccountConnectionRedirectUrl|string|false|none|A string representing the URL to which users will be redirected to connect their channel account.|
|channelDescription|string|false|none|A string providing a description of the channel.|
|channelLogoUrl|string|false|none|A string representing the URL of the channel's logo.|
|name|string|true|none|A string representing the name of the channel.|
|webhookUrl|string|false|none|A string representing the URL to which webhook events will be sent.|

<h2 id="tocS_PublicChannelIntegrationChannelPatch">PublicChannelIntegrationChannelPatch</h2>
<!-- backwards compatibility -->
<a id="schemapublicchannelintegrationchannelpatch"></a>
<a id="schema_PublicChannelIntegrationChannelPatch"></a>
<a id="tocSpublicchannelintegrationchannelpatch"></a>
<a id="tocspublicchannelintegrationchannelpatch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|object|true|none|An object that defines the capabilities of the channel. This can include various properties that describe what the channel can do.|
|channelAccountConnectionRedirectUrl|object|true|none|An object representing the URL used to redirect for channel account connection.|
|channelDescription|object|true|none|An object containing the description of the channel.|
|channelLogoUrl|object|true|none|An object representing the URL of the channel's logo.|
|name|object|true|none|An object representing the name of the channel.|
|webhookUrl|object|true|none|An object representing the URL for the webhook associated with the channel.|

<h2 id="tocS_PublicChannelIntegrationMessageUpdateRequest">PublicChannelIntegrationMessageUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicchannelintegrationmessageupdaterequest"></a>
<a id="schema_PublicChannelIntegrationMessageUpdateRequest"></a>
<a id="tocSpublicchannelintegrationmessageupdaterequest"></a>
<a id="tocspublicchannelintegrationmessageupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|A string containing an error message, if applicable.|
|statusType|string|true|none|Valid status are SENT, FAILED, and READ|

#### Enumerated Values

|Property|Value|
|---|---|
|statusType|FAILED|
|statusType|READ|
|statusType|SENT|

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
|integrationAppId|integer(int32)|false|none|The unique identifier for the integration application associated with this client. It is an integer value.|

#### Enumerated Values

|Property|Value|
|---|---|
|clientType|HUBSPOT|
|clientType|INTEGRATION|
|clientType|SYSTEM|
|clientType|UNKNOWN|

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
|type|string|true|none|A string indicating the type of the component, which is 'CONTACT' by default.|

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
|archived|boolean|true|none|A boolean indicating whether the message is archived.|
|attachments|[[PublicFile](#schemapublicfile) \| [PublicLocation](#schemapubliclocation) \| [PublicContact](#schemapubliccontact) \| [PublicUnsupportedContent](#schemapublicunsupportedcontent) \| [PublicMessageHeader](#schemapublicmessageheader) \| [PublicQuickReplies](#schemapublicquickreplies) \| [PublicWhatsAppTemplateMetadata](#schemapublicwhatsapptemplatemetadata) \| [PublicSocialMetadataAttachment](#schemapublicsocialmetadataattachment)]|true|none|An array of attachments included with the message, which can be files, locations, contacts, or other supported types.|
|channelAccountId|string|true|none|The identifier of the channel account associated with the message.|
|channelId|string|true|none|The identifier of the channel through which the message was sent.|
|client|[PublicClient](#schemapublicclient)|true|none|none|
|conversationsThreadId|string|true|none|The identifier for the conversation thread to which this message belongs.|
|createdAt|string(date-time)|true|none|The date and time when the message was created, in ISO 8601 format.|
|createdBy|string|true|none|The identifier of the user or system that created the message.|
|direction|string|true|none|The direction of the message, either 'INCOMING' or 'OUTGOING'.|
|id|string|true|none|The unique identifier for the message.|
|inReplyToId|string|false|none|The identifier of the message to which this message is a reply, if applicable.|
|recipients|[[PublicRecipient](#schemapublicrecipient)]|true|none|An array of recipients of the message, each containing recipient details.|
|richText|string|false|none|The rich text content of the message, if available.|
|senders|[[PublicSender](#schemapublicsender)]|true|none|An array of senders associated with the message, each containing sender details.|
|status|[PublicMessageStatus](#schemapublicmessagestatus)|false|none|none|
|subject|string|false|none|The subject of the message, if applicable.|
|text|string|true|none|The plain text content of the message.|
|truncationStatus|string|true|none|Indicates whether the message content is truncated. Valid values are 'NOT_TRUNCATED', 'TRUNCATED_TO_MOST_RECENT_REPLY', and 'TRUNCATED'.|
|type|string|true|none|The type of the message, which is always 'MESSAGE'.|
|updatedAt|string(date-time)|false|none|The date and time when the message was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|INCOMING|
|direction|OUTGOING|
|truncationStatus|NOT_TRUNCATED|
|truncationStatus|TRUNCATED|
|truncationStatus|TRUNCATED_TO_MOST_RECENT_REPLY|
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
|type|string|true|none|A string representing the type of delivery identifier. Valid values include 'HS_EMAIL_ADDRESS', 'HS_PHONE_NUMBER', 'HS_SHORT_CODE', and 'CHANNEL_SPECIFIC_OPAQUE_ID'.|
|value|string|true|none|A string representing the value associated with the delivery identifier type.|

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
|fileUsageType|string|true|none|A string specifying the usage type of the file, which can be 'STICKER', 'VOICE_RECORDING', 'IMAGE', 'AUDIO', or 'OTHER'.|
|name|string|false|none|A string containing the name of the file.|
|type|string|true|none|A string indicating the type of the attachment, which is always 'FILE'.|
|url|string|false|none|A string containing the URL where the file can be accessed.|

#### Enumerated Values

|Property|Value|
|---|---|
|fileUsageType|AUDIO|
|fileUsageType|IMAGE|
|fileUsageType|OTHER|
|fileUsageType|STICKER|
|fileUsageType|VOICE_RECORDING|
|type|FILE|

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
|address|string|false|none|A string representing the address of the location.|
|latitude|number|true|none|A number representing the latitude of the location.|
|longitude|number|true|none|A number representing the longitude of the location.|
|name|string|false|none|A string representing the name of the location.|
|type|string|true|none|A string that specifies the type of the component, which is 'LOCATION'.|
|url|string|false|none|A string representing a URL associated with the location.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LOCATION|

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
|errorMessage|string|false|none|A string containing a human-readable description of the error that occurred during message delivery.|
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
|fileId|integer(int64)|false|none|An integer representing the ID of an associated file, formatted as an int64.|
|text|string|false|none|A string containing the text content of the message header.|
|type|string|true|none|A string indicating the type of message header. The default and only valid value is 'MESSAGE_HEADER'.|

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
|statusType|string|true|none|The current status of the message. Valid values include 'SENT', 'FAILED', 'RECEIVED', and 'READ'.|

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
|allowMultiSelect|boolean|true|none|A boolean indicating whether multiple quick replies can be selected by the user.|
|allowUserInput|boolean|true|none|A boolean indicating whether the user is allowed to input their own response in addition to selecting from the quick replies.|
|quickReplies|[[QuickReply](#schemaquickreply)]|true|none|An array of QuickReply objects, each representing a single quick reply option available to the user.|
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
|actorId|string|false|none|A string representing the unique identifier of the actor associated with the recipient.|
|deliveryIdentifier|[PublicDeliveryIdentifier](#schemapublicdeliveryidentifier)|true|none|none|
|name|string|false|none|A string representing the name of the recipient.|
|recipientField|string|false|none|A string representing a specific field related to the recipient.|

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
|senderField|string|false|none|A string field associated with the sender, its specific use is not detailed in the spec.|

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
|type|string|true|none|A string indicating the type of attachment, which is 'SOCIAL_MEDIA_METADATA'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SOCIAL_MEDIA_METADATA|

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
|type|string|true|none|A string that specifies the type of unsupported content. The default and only valid value is 'UNSUPPORTED_CONTENT'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNSUPPORTED_CONTENT|

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
|contentId|integer(int64)|false|none|An integer representing the content ID associated with the template. This is a 64-bit integer.|
|crmObjectIds|object|true|none|An object mapping CRM object types to their respective IDs, where each ID is a 64-bit integer.|
|mappedTemplateId|integer(int64)|false|none|An integer representing the ID of the mapped template. This is a 64-bit integer.|
|parameters|object|true|none|An object containing key-value pairs of parameters used for template customization, where each value is a string.|
|rootMicId|integer(int64)|false|none|An integer representing the root message interaction context ID. This is a 64-bit integer.|
|type|string|true|none|A string indicating the type of metadata, which is 'WHATSAPP_TEMPLATE_METADATA'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|WHATSAPP_TEMPLATE_METADATA|

<h2 id="tocS_QuickRepliesAttachment">QuickRepliesAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaquickrepliesattachment"></a>
<a id="schema_QuickRepliesAttachment"></a>
<a id="tocSquickrepliesattachment"></a>
<a id="tocsquickrepliesattachment"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quickReplies|[[QuickReply](#schemaquickreply)]|true|none|An array of QuickReply objects, each representing a predefined option that a user can select.|
|type|string|true|none|A string indicating the type of attachment. The default value is 'QUICK_REPLIES'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|QUICK_REPLIES|

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
|label|string|false|none|The label displayed to the user for the quick reply option. It is a string.|
|value|string|true|none|The value associated with the quick reply, typically used as the response when the quick reply is selected. It is a string.|
|valueType|string|true|none|The type of the value, indicating how the value should be interpreted. It is a string and can be either 'TEXT' or 'URL'.|

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
|id|string|false|none|The unique identifier for this media content.|
|mediaTitle|string|false|none|The title of the media content.|
|mediaType|string|true|none|The type of media content, such as 'PHOTO', 'VIDEO', 'CAROUSEL', 'LINK', 'ARTICLE', 'GIF', 'DOCUMENT', 'POLL', 'NONE', 'STORY', or 'AUDIO'.|
|mediaUrl|string|false|none|The URL where the media content is located.|
|mediaUrlString|string|false|none|A string representing the URL of the media content.|
|thumbnailUrl|string|false|none|The URL of the thumbnail image for the media content.|

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

<h2 id="tocS_SocialMetadataIntegrationAttachment">SocialMetadataIntegrationAttachment</h2>
<!-- backwards compatibility -->
<a id="schemasocialmetadataintegrationattachment"></a>
<a id="schema_SocialMetadataIntegrationAttachment"></a>
<a id="tocSsocialmetadataintegrationattachment"></a>
<a id="tocssocialmetadataintegrationattachment"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|socialMetadata|[SocialMetadata](#schemasocialmetadata)|true|none|none|
|type|string|true|none|A string indicating the type of attachment, which is 'SOCIAL_MEDIA_METADATA'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SOCIAL_MEDIA_METADATA|

<h2 id="tocS_UnsupportedContentAttachment">UnsupportedContentAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedcontentattachment"></a>
<a id="schema_UnsupportedContentAttachment"></a>
<a id="tocSunsupportedcontentattachment"></a>
<a id="tocsunsupportedcontentattachment"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|A string indicating the type of the attachment. The default value is 'UNSUPPORTED_CONTENT'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNSUPPORTED_CONTENT|
