<h1 id="webhook-type-definition">Webhook Type Definition v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Webhook event definition of the LINE Messaging API

Base URLs:

* <a href="https://example.com">https://example.com</a>

<h1 id="webhook-type-definition-dummy">dummy</h1>

## callback

<a id="opIdcallback"></a>

> Code samples

```bash
curl https://example.com/callback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destination": "stringstringstringstringstringstr",
    "events": [
      {
        "type": "string",
        "source": {
          "type": "string"
        },
        "timestamp": 0,
        "mode": "active",
        "webhookEventId": "string",
        "deliveryContext": {
          "isRedelivery": true
        }
      }
    ]
  }'
```

`POST /callback`

This is the dummy endpoint to generate the model classes

> Body parameter

```json
{
  "destination": "stringstringstringstringstringstr",
  "events": [
    {
      "type": "string",
      "source": {
        "type": "string"
      },
      "timestamp": 0,
      "mode": "active",
      "webhookEventId": "string",
      "deliveryContext": {
        "isRedelivery": true
      }
    }
  ]
}
```

<h3 id="callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CallbackRequest](#schemacallbackrequest)|true|none|
|» destination|body|string|true|User ID of a bot that should receive webhook events.<br>The user ID value is a string that matches the regular expression, `U[0-9a-f]{32}`.<br>|
|» events|body|[[Event](#schemaevent)]|true|Array of webhook event objects.<br>The LINE Platform may send an empty array that doesn't include a webhook event object to confirm communication.<br>|

> Example responses

> 200 Response

```json
"OK"
```

<h3 id="callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CallbackRequest">CallbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemacallbackrequest"></a>
<a id="schema_CallbackRequest"></a>
<a id="tocScallbackrequest"></a>
<a id="tocscallbackrequest"></a>

```json
{
  "destination": "stringstringstringstringstringstr",
  "events": [
    {
      "type": "string",
      "source": {
        "type": "string"
      },
      "timestamp": 0,
      "mode": "active",
      "webhookEventId": "string",
      "deliveryContext": {
        "isRedelivery": true
      }
    }
  ]
}
```

The request body contains a JSON object with the user ID of a bot that should receive webhook events and an array of webhook event objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|true|none|User ID of a bot that should receive webhook events.<br>The user ID value is a string that matches the regular expression, `U[0-9a-f]{32}`.<br>|
|events|[[Event](#schemaevent)]|true|none|Array of webhook event objects.<br>The LINE Platform may send an empty array that doesn't include a webhook event object to confirm communication.<br>|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  }
}
```

Webhook event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_EventMode">EventMode</h2>
<!-- backwards compatibility -->
<a id="schemaeventmode"></a>
<a id="schema_EventMode"></a>
<a id="tocSeventmode"></a>
<a id="tocseventmode"></a>

```json
"active"
```

Channel state.

<h2 id="tocS_DeliveryContext">DeliveryContext</h2>
<!-- backwards compatibility -->
<a id="schemadeliverycontext"></a>
<a id="schema_DeliveryContext"></a>
<a id="tocSdeliverycontext"></a>
<a id="tocsdeliverycontext"></a>

```json
{
  "isRedelivery": true
}
```

webhook's delivery context information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isRedelivery|boolean|true|none|Whether the webhook event is a redelivered one or not.|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "type": "string"
}
```

the source of the event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|source type|

<h2 id="tocS_UserSource">UserSource</h2>
<!-- backwards compatibility -->
<a id="schemausersource"></a>
<a id="schema_UserSource"></a>
<a id="tocSusersource"></a>
<a id="tocsusersource"></a>

```json
{
  "type": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|source type|
|userId|string|false|none|ID of the source user|

<h2 id="tocS_GroupSource">GroupSource</h2>
<!-- backwards compatibility -->
<a id="schemagroupsource"></a>
<a id="schema_GroupSource"></a>
<a id="tocSgroupsource"></a>
<a id="tocsgroupsource"></a>

```json
{
  "type": "string",
  "groupId": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|source type|
|groupId|string|true|none|Group ID of the source group chat|
|userId|string|false|none|ID of the source user. Only included in message events. Only users of LINE for iOS and LINE for Android are included in userId.|

<h2 id="tocS_RoomSource">RoomSource</h2>
<!-- backwards compatibility -->
<a id="schemaroomsource"></a>
<a id="schema_RoomSource"></a>
<a id="tocSroomsource"></a>
<a id="tocsroomsource"></a>

```json
{
  "type": "string",
  "userId": "string",
  "roomId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|source type|
|userId|string|false|none|ID of the source user. Only included in message events. Only users of LINE for iOS and LINE for Android are included in userId.|
|roomId|string|true|none|Room ID of the source multi-person chat|

<h2 id="tocS_MessageEvent">MessageEvent</h2>
<!-- backwards compatibility -->
<a id="schemamessageevent"></a>
<a id="schema_MessageEvent"></a>
<a id="tocSmessageevent"></a>
<a id="tocsmessageevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "replyToken": "string",
  "message": {
    "type": "string",
    "id": "string"
  }
}
```

Webhook event object which contains the sent message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|replyToken|string|false|none|none|
|message|[MessageContent](#schemamessagecontent)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_MessageContent">MessageContent</h2>
<!-- backwards compatibility -->
<a id="schemamessagecontent"></a>
<a id="schema_MessageContent"></a>
<a id="tocSmessagecontent"></a>
<a id="tocsmessagecontent"></a>

```json
{
  "type": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type|
|id|string|true|none|Message ID|

<h2 id="tocS_ContentProvider">ContentProvider</h2>
<!-- backwards compatibility -->
<a id="schemacontentprovider"></a>
<a id="schema_ContentProvider"></a>
<a id="tocScontentprovider"></a>
<a id="tocscontentprovider"></a>

```json
{
  "type": "line",
  "originalContentUrl": "http://example.com",
  "previewImageUrl": "http://example.com"
}
```

Provider of the media file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Provider of the image file.|
|originalContentUrl|string(uri)|false|none|URL of the image file. Only included when contentProvider.type is external.|
|previewImageUrl|string(uri)|false|none|URL of the preview image. Only included when contentProvider.type is external.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|line|
|type|external|

<h2 id="tocS_TextMessageContent">TextMessageContent</h2>
<!-- backwards compatibility -->
<a id="schematextmessagecontent"></a>
<a id="schema_TextMessageContent"></a>
<a id="tocStextmessagecontent"></a>
<a id="tocstextmessagecontent"></a>

```json
{
  "type": "string",
  "id": "string",
  "text": "string",
  "emojis": [
    {
      "index": 0,
      "length": 0,
      "productId": "string",
      "emojiId": "string"
    }
  ],
  "mention": {
    "mentionees": [
      {
        "type": "string",
        "index": 0,
        "length": 0
      }
    ]
  },
  "quoteToken": "string",
  "quotedMessageId": "string",
  "markAsReadToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type|
|id|string|true|none|Message ID|
|text|string|true|none|Message text.|
|emojis|[[Emoji](#schemaemoji)]|false|none|Array of one or more LINE emoji objects. Only included in the message event when the text property contains a LINE emoji.|
|mention|[Mention](#schemamention)|false|none|none|
|quoteToken|string|true|none|Quote token to quote this message.<br>|
|quotedMessageId|string|false|none|Message ID of a quoted message. Only included when the received message quotes a past message.|
|markAsReadToken|string|false|none|Token used to mark the message as read.<br>|

<h2 id="tocS_Emoji">Emoji</h2>
<!-- backwards compatibility -->
<a id="schemaemoji"></a>
<a id="schema_Emoji"></a>
<a id="tocSemoji"></a>
<a id="tocsemoji"></a>

```json
{
  "index": 0,
  "length": 0,
  "productId": "string",
  "emojiId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer|true|none|Index position for a character in text, with the first character being at position 0.|
|length|integer|true|none|The length of the LINE emoji string. For LINE emoji (hello), 7 is the length.|
|productId|string|true|none|Product ID for a LINE emoji set.|
|emojiId|string|true|none|ID for a LINE emoji inside a set.|

<h2 id="tocS_Mention">Mention</h2>
<!-- backwards compatibility -->
<a id="schemamention"></a>
<a id="schema_Mention"></a>
<a id="tocSmention"></a>
<a id="tocsmention"></a>

```json
{
  "mentionees": [
    {
      "type": "string",
      "index": 0,
      "length": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mentionees|[[Mentionee](#schemamentionee)]|true|none|Array of one or more mention objects. Max: 20 mentions|

<h2 id="tocS_Mentionee">Mentionee</h2>
<!-- backwards compatibility -->
<a id="schemamentionee"></a>
<a id="schema_Mentionee"></a>
<a id="tocSmentionee"></a>
<a id="tocsmentionee"></a>

```json
{
  "type": "string",
  "index": 0,
  "length": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Mentioned target.|
|index|integer(int32)|true|none|Index position of the user mention for a character in text, with the first character being at position 0.|
|length|integer(int32)|true|none|The length of the text of the mentioned user. For a mention @example, 8 is the length.|

<h2 id="tocS_UserMentionee">UserMentionee</h2>
<!-- backwards compatibility -->
<a id="schemausermentionee"></a>
<a id="schema_UserMentionee"></a>
<a id="tocSusermentionee"></a>
<a id="tocsusermentionee"></a>

```json
{
  "type": "string",
  "index": 0,
  "length": 0,
  "userId": "string",
  "isSelf": true
}
```

Mentioned target is user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Mentioned target.|
|index|integer(int32)|true|none|Index position of the user mention for a character in text, with the first character being at position 0.|
|length|integer(int32)|true|none|The length of the text of the mentioned user. For a mention @example, 8 is the length.|
|userId|string|false|none|User ID of the mentioned user. Only included if mention.mentions[].type is user and the user consents to the LINE Official Account obtaining their user profile information.|
|isSelf|boolean|false|none|Whether the mentioned user is the bot that receives the webhook.|

<h2 id="tocS_AllMentionee">AllMentionee</h2>
<!-- backwards compatibility -->
<a id="schemaallmentionee"></a>
<a id="schema_AllMentionee"></a>
<a id="tocSallmentionee"></a>
<a id="tocsallmentionee"></a>

```json
{
  "type": "string",
  "index": 0,
  "length": 0
}
```

Mentioned target is entire group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Mentioned target.|
|index|integer(int32)|true|none|Index position of the user mention for a character in text, with the first character being at position 0.|
|length|integer(int32)|true|none|The length of the text of the mentioned user. For a mention @example, 8 is the length.|

<h2 id="tocS_ImageMessageContent">ImageMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemaimagemessagecontent"></a>
<a id="schema_ImageMessageContent"></a>
<a id="tocSimagemessagecontent"></a>
<a id="tocsimagemessagecontent"></a>

```json
{
  "type": "string",
  "id": "string",
  "contentProvider": {
    "type": "line",
    "originalContentUrl": "http://example.com",
    "previewImageUrl": "http://example.com"
  },
  "imageSet": {
    "id": "string",
    "index": 0,
    "total": 0
  },
  "quoteToken": "string",
  "markAsReadToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type|
|id|string|true|none|Message ID|
|contentProvider|[ContentProvider](#schemacontentprovider)|true|none|Provider of the media file.|
|imageSet|[ImageSet](#schemaimageset)|false|none|none|
|quoteToken|string|true|none|Quote token to quote this message.<br>|
|markAsReadToken|string|false|none|Token used to mark the message as read.<br>|

<h2 id="tocS_ImageSet">ImageSet</h2>
<!-- backwards compatibility -->
<a id="schemaimageset"></a>
<a id="schema_ImageSet"></a>
<a id="tocSimageset"></a>
<a id="tocsimageset"></a>

```json
{
  "id": "string",
  "index": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Image set ID. Only included when multiple images are sent simultaneously.|
|index|integer|false|none|An index starting from 1, indicating the image number in a set of images sent simultaneously. Only included when multiple images are sent simultaneously. However, it won't be included if the sender is using LINE 11.15 or earlier for Android.|
|total|integer|false|none|The total number of images sent simultaneously.|

<h2 id="tocS_VideoMessageContent">VideoMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemavideomessagecontent"></a>
<a id="schema_VideoMessageContent"></a>
<a id="tocSvideomessagecontent"></a>
<a id="tocsvideomessagecontent"></a>

```json
{
  "type": "string",
  "id": "string",
  "duration": 0,
  "contentProvider": {
    "type": "line",
    "originalContentUrl": "http://example.com",
    "previewImageUrl": "http://example.com"
  },
  "quoteToken": "string",
  "markAsReadToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type|
|id|string|true|none|Message ID|
|duration|integer(int64)|false|none|Length of video file (milliseconds)|
|contentProvider|[ContentProvider](#schemacontentprovider)|true|none|Provider of the media file.|
|quoteToken|string|true|none|Quote token to quote this message.<br>|
|markAsReadToken|string|false|none|Token used to mark the message as read.<br>|

<h2 id="tocS_AudioMessageContent">AudioMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemaaudiomessagecontent"></a>
<a id="schema_AudioMessageContent"></a>
<a id="tocSaudiomessagecontent"></a>
<a id="tocsaudiomessagecontent"></a>

```json
{
  "type": "string",
  "id": "string",
  "contentProvider": {
    "type": "line",
    "originalContentUrl": "http://example.com",
    "previewImageUrl": "http://example.com"
  },
  "duration": 0,
  "markAsReadToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type|
|id|string|true|none|Message ID|
|contentProvider|[ContentProvider](#schemacontentprovider)|true|none|Provider of the media file.|
|duration|integer(int64)|false|none|Length of audio file (milliseconds)|
|markAsReadToken|string|false|none|Token used to mark the message as read.<br>|

<h2 id="tocS_FileMessageContent">FileMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemafilemessagecontent"></a>
<a id="schema_FileMessageContent"></a>
<a id="tocSfilemessagecontent"></a>
<a id="tocsfilemessagecontent"></a>

```json
{
  "type": "string",
  "id": "string",
  "fileName": "string",
  "fileSize": 0,
  "markAsReadToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type|
|id|string|true|none|Message ID|
|fileName|string|true|none|File name|
|fileSize|integer|true|none|File size in bytes|
|markAsReadToken|string|false|none|Token used to mark the message as read.<br>|

<h2 id="tocS_LocationMessageContent">LocationMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemalocationmessagecontent"></a>
<a id="schema_LocationMessageContent"></a>
<a id="tocSlocationmessagecontent"></a>
<a id="tocslocationmessagecontent"></a>

```json
{
  "type": "string",
  "id": "string",
  "title": "string",
  "address": "string",
  "latitude": 0,
  "longitude": 0,
  "markAsReadToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type|
|id|string|true|none|Message ID|
|title|string|false|none|Title|
|address|string|false|none|Address|
|latitude|number(double)|true|none|Latitude|
|longitude|number(double)|true|none|Longitude|
|markAsReadToken|string|false|none|Token used to mark the message as read.<br>|

<h2 id="tocS_StickerMessageContent">StickerMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemastickermessagecontent"></a>
<a id="schema_StickerMessageContent"></a>
<a id="tocSstickermessagecontent"></a>
<a id="tocsstickermessagecontent"></a>

```json
{
  "type": "string",
  "id": "string",
  "packageId": "string",
  "stickerId": "string",
  "stickerResourceType": "STATIC",
  "keywords": [
    "string"
  ],
  "text": "string",
  "quoteToken": "string",
  "quotedMessageId": "string",
  "markAsReadToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type|
|id|string|true|none|Message ID|
|packageId|string|true|none|Package ID|
|stickerId|string|true|none|Sticker ID|
|stickerResourceType|string|true|none|none|
|keywords|[string]|false|none|Array of up to 15 keywords describing the sticker.<br>If a sticker has 16 or more keywords, a random selection of 15 keywords will be returned.<br>The keyword selection is random for each event, so different keywords may be returned for the same sticker.<br>|
|text|string|false|none|Any text entered by the user. This property is only included for message stickers.<br>Max character limit: 100<br>|
|quoteToken|string|true|none|Quote token to quote this message.<br>|
|quotedMessageId|string|false|none|Message ID of a quoted message. Only included when the received message quotes a past message.<br>|
|markAsReadToken|string|false|none|Token used to mark the message as read.<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|stickerResourceType|STATIC|
|stickerResourceType|ANIMATION|
|stickerResourceType|SOUND|
|stickerResourceType|ANIMATION_SOUND|
|stickerResourceType|POPUP|
|stickerResourceType|POPUP_SOUND|
|stickerResourceType|CUSTOM|
|stickerResourceType|MESSAGE|
|stickerResourceType|NAME_TEXT|
|stickerResourceType|PER_STICKER_TEXT|

<h2 id="tocS_UnsendEvent">UnsendEvent</h2>
<!-- backwards compatibility -->
<a id="schemaunsendevent"></a>
<a id="schema_UnsendEvent"></a>
<a id="tocSunsendevent"></a>
<a id="tocsunsendevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "unsend": {
    "messageId": "string"
  }
}
```

Event object for when the user unsends a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|unsend|[UnsendDetail](#schemaunsenddetail)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_UnsendDetail">UnsendDetail</h2>
<!-- backwards compatibility -->
<a id="schemaunsenddetail"></a>
<a id="schema_UnsendDetail"></a>
<a id="tocSunsenddetail"></a>
<a id="tocsunsenddetail"></a>

```json
{
  "messageId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|string|true|none|The message ID of the unsent message|

<h2 id="tocS_FollowEvent">FollowEvent</h2>
<!-- backwards compatibility -->
<a id="schemafollowevent"></a>
<a id="schema_FollowEvent"></a>
<a id="tocSfollowevent"></a>
<a id="tocsfollowevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "replyToken": "string",
  "follow": {
    "isUnblocked": true
  }
}
```

Event object for when your LINE Official Account is added as a friend (or unblocked). You can reply to follow events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|replyToken|string|true|none|Reply token used to send reply message to this event|
|follow|[FollowDetail](#schemafollowdetail)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_FollowDetail">FollowDetail</h2>
<!-- backwards compatibility -->
<a id="schemafollowdetail"></a>
<a id="schema_FollowDetail"></a>
<a id="tocSfollowdetail"></a>
<a id="tocsfollowdetail"></a>

```json
{
  "isUnblocked": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isUnblocked|boolean|true|none|Whether a user has added your LINE Official Account as a friend or unblocked.|

<h2 id="tocS_UnfollowEvent">UnfollowEvent</h2>
<!-- backwards compatibility -->
<a id="schemaunfollowevent"></a>
<a id="schema_UnfollowEvent"></a>
<a id="tocSunfollowevent"></a>
<a id="tocsunfollowevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  }
}
```

Event object for when your LINE Official Account is blocked.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_JoinEvent">JoinEvent</h2>
<!-- backwards compatibility -->
<a id="schemajoinevent"></a>
<a id="schema_JoinEvent"></a>
<a id="tocSjoinevent"></a>
<a id="tocsjoinevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "replyToken": "string"
}
```

Event object for when your LINE Official Account joins a group chat or multi-person chat. You can reply to join events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|replyToken|string|true|none|Reply token used to send reply message to this event|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_LeaveEvent">LeaveEvent</h2>
<!-- backwards compatibility -->
<a id="schemaleaveevent"></a>
<a id="schema_LeaveEvent"></a>
<a id="tocSleaveevent"></a>
<a id="tocsleaveevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  }
}
```

Event object for when a user removes your LINE Official Account from a group chat or when your LINE Official Account leaves a group chat or multi-person chat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_MemberJoinedEvent">MemberJoinedEvent</h2>
<!-- backwards compatibility -->
<a id="schemamemberjoinedevent"></a>
<a id="schema_MemberJoinedEvent"></a>
<a id="tocSmemberjoinedevent"></a>
<a id="tocsmemberjoinedevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "replyToken": "string",
  "joined": {
    "members": [
      {
        "type": "string",
        "userId": "string"
      }
    ]
  }
}
```

Event object for when a user joins a group chat or multi-person chat that the LINE Official Account is in.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|replyToken|string|true|none|Reply token used to send reply message to this event|
|joined|[JoinedMembers](#schemajoinedmembers)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_JoinedMembers">JoinedMembers</h2>
<!-- backwards compatibility -->
<a id="schemajoinedmembers"></a>
<a id="schema_JoinedMembers"></a>
<a id="tocSjoinedmembers"></a>
<a id="tocsjoinedmembers"></a>

```json
{
  "members": [
    {
      "type": "string",
      "userId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[[UserSource](#schemausersource)]|true|none|Users who joined. Array of source user objects.|

<h2 id="tocS_MemberLeftEvent">MemberLeftEvent</h2>
<!-- backwards compatibility -->
<a id="schemamemberleftevent"></a>
<a id="schema_MemberLeftEvent"></a>
<a id="tocSmemberleftevent"></a>
<a id="tocsmemberleftevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "left": {
    "members": [
      {
        "type": "string",
        "userId": "string"
      }
    ]
  }
}
```

Event object for when a user leaves a group chat or multi-person chat that the LINE Official Account is in.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|left|[LeftMembers](#schemaleftmembers)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_LeftMembers">LeftMembers</h2>
<!-- backwards compatibility -->
<a id="schemaleftmembers"></a>
<a id="schema_LeftMembers"></a>
<a id="tocSleftmembers"></a>
<a id="tocsleftmembers"></a>

```json
{
  "members": [
    {
      "type": "string",
      "userId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[[UserSource](#schemausersource)]|true|none|Users who left. Array of source user objects.|

<h2 id="tocS_PostbackEvent">PostbackEvent</h2>
<!-- backwards compatibility -->
<a id="schemapostbackevent"></a>
<a id="schema_PostbackEvent"></a>
<a id="tocSpostbackevent"></a>
<a id="tocspostbackevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "replyToken": "string",
  "postback": {
    "data": "string",
    "params": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Event object for when a user performs a postback action which initiates a postback. You can reply to postback events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|replyToken|string|false|none|Reply token used to send reply message to this event|
|postback|[PostbackContent](#schemapostbackcontent)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_PostbackContent">PostbackContent</h2>
<!-- backwards compatibility -->
<a id="schemapostbackcontent"></a>
<a id="schema_PostbackContent"></a>
<a id="tocSpostbackcontent"></a>
<a id="tocspostbackcontent"></a>

```json
{
  "data": "string",
  "params": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|Postback data|
|params|object|false|none|none|

<h2 id="tocS_VideoPlayCompleteEvent">VideoPlayCompleteEvent</h2>
<!-- backwards compatibility -->
<a id="schemavideoplaycompleteevent"></a>
<a id="schema_VideoPlayCompleteEvent"></a>
<a id="tocSvideoplaycompleteevent"></a>
<a id="tocsvideoplaycompleteevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "replyToken": "string",
  "videoPlayComplete": {
    "trackingId": "string"
  }
}
```

Event for when a user finishes viewing a video at least once with the specified trackingId sent by the LINE Official Account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|replyToken|string|true|none|Reply token used to send reply message to this event|
|videoPlayComplete|[VideoPlayComplete](#schemavideoplaycomplete)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_VideoPlayComplete">VideoPlayComplete</h2>
<!-- backwards compatibility -->
<a id="schemavideoplaycomplete"></a>
<a id="schema_VideoPlayComplete"></a>
<a id="tocSvideoplaycomplete"></a>
<a id="tocsvideoplaycomplete"></a>

```json
{
  "trackingId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trackingId|string|true|none|ID used to identify a video. Returns the same value as the trackingId assigned to the video message.|

<h2 id="tocS_BeaconEvent">BeaconEvent</h2>
<!-- backwards compatibility -->
<a id="schemabeaconevent"></a>
<a id="schema_BeaconEvent"></a>
<a id="tocSbeaconevent"></a>
<a id="tocsbeaconevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "replyToken": "string",
  "beacon": {
    "hwid": "string",
    "type": "enter",
    "dm": "string"
  }
}
```

Event object for when a user enters the range of a LINE Beacon. You can reply to beacon events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|replyToken|string|true|none|Reply token used to send reply message to this event|
|beacon|[BeaconContent](#schemabeaconcontent)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_BeaconContent">BeaconContent</h2>
<!-- backwards compatibility -->
<a id="schemabeaconcontent"></a>
<a id="schema_BeaconContent"></a>
<a id="tocSbeaconcontent"></a>
<a id="tocsbeaconcontent"></a>

```json
{
  "hwid": "string",
  "type": "enter",
  "dm": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hwid|string|true|none|Hardware ID of the beacon that was detected|
|type|string|true|none|Type of beacon event.|
|dm|string|false|none|Device message of beacon that was detected.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|enter|
|type|banner|
|type|stay|

<h2 id="tocS_AccountLinkEvent">AccountLinkEvent</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlinkevent"></a>
<a id="schema_AccountLinkEvent"></a>
<a id="tocSaccountlinkevent"></a>
<a id="tocsaccountlinkevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "replyToken": "string",
  "link": {
    "result": "ok",
    "nonce": "string"
  }
}
```

Event object for when a user has linked their LINE account with a provider's service account. You can reply to account link events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|replyToken|string|false|none|Reply token used to send reply message to this event. This property won't be included if linking the account has failed.|
|link|[LinkContent](#schemalinkcontent)|true|none|Content of the account link event.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_LinkContent">LinkContent</h2>
<!-- backwards compatibility -->
<a id="schemalinkcontent"></a>
<a id="schema_LinkContent"></a>
<a id="tocSlinkcontent"></a>
<a id="tocslinkcontent"></a>

```json
{
  "result": "ok",
  "nonce": "string"
}
```

Content of the account link event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|true|none|One of the following values to indicate whether linking the account was successful or not|
|nonce|string|true|none|Specified nonce (number used once) when verifying the user ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|result|ok|
|result|failed|

<h2 id="tocS_MembershipEvent">MembershipEvent</h2>
<!-- backwards compatibility -->
<a id="schemamembershipevent"></a>
<a id="schema_MembershipEvent"></a>
<a id="tocSmembershipevent"></a>
<a id="tocsmembershipevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "replyToken": "string",
  "membership": {
    "type": "string"
  }
}
```

This event indicates that a user has subscribed (joined), unsubscribed (left), or renewed the bot's membership.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|replyToken|string|true|none|Reply token used to send reply message to this event|
|membership|[MembershipContent](#schemamembershipcontent)|true|none|Content of the membership event.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_MembershipContent">MembershipContent</h2>
<!-- backwards compatibility -->
<a id="schemamembershipcontent"></a>
<a id="schema_MembershipContent"></a>
<a id="tocSmembershipcontent"></a>
<a id="tocsmembershipcontent"></a>

```json
{
  "type": "string"
}
```

Content of the membership event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of membership event.|

<h2 id="tocS_JoinedMembershipContent">JoinedMembershipContent</h2>
<!-- backwards compatibility -->
<a id="schemajoinedmembershipcontent"></a>
<a id="schema_JoinedMembershipContent"></a>
<a id="tocSjoinedmembershipcontent"></a>
<a id="tocsjoinedmembershipcontent"></a>

```json
{
  "type": "string",
  "membershipId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of membership event.|
|membershipId|integer|true|none|The ID of the membership that the user joined. This is defined for each membership.|

<h2 id="tocS_LeftMembershipContent">LeftMembershipContent</h2>
<!-- backwards compatibility -->
<a id="schemaleftmembershipcontent"></a>
<a id="schema_LeftMembershipContent"></a>
<a id="tocSleftmembershipcontent"></a>
<a id="tocsleftmembershipcontent"></a>

```json
{
  "type": "string",
  "membershipId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of membership event.|
|membershipId|integer|true|none|The ID of the membership that the user left. This is defined for each membership.|

<h2 id="tocS_RenewedMembershipContent">RenewedMembershipContent</h2>
<!-- backwards compatibility -->
<a id="schemarenewedmembershipcontent"></a>
<a id="schema_RenewedMembershipContent"></a>
<a id="tocSrenewedmembershipcontent"></a>
<a id="tocsrenewedmembershipcontent"></a>

```json
{
  "type": "string",
  "membershipId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of membership event.|
|membershipId|integer|true|none|The ID of the membership that the user renewed. This is defined for each membership.|

<h2 id="tocS_ModuleEvent">ModuleEvent</h2>
<!-- backwards compatibility -->
<a id="schemamoduleevent"></a>
<a id="schema_ModuleEvent"></a>
<a id="tocSmoduleevent"></a>
<a id="tocsmoduleevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "module": {
    "type": "string"
  }
}
```

This event indicates that the module channel has been attached to the LINE Official Account. Sent to the webhook URL server of the module channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|module|[ModuleContent](#schemamodulecontent)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_ModuleContent">ModuleContent</h2>
<!-- backwards compatibility -->
<a id="schemamodulecontent"></a>
<a id="schema_ModuleContent"></a>
<a id="tocSmodulecontent"></a>
<a id="tocsmodulecontent"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type|

<h2 id="tocS_AttachedModuleContent">AttachedModuleContent</h2>
<!-- backwards compatibility -->
<a id="schemaattachedmodulecontent"></a>
<a id="schema_AttachedModuleContent"></a>
<a id="tocSattachedmodulecontent"></a>
<a id="tocsattachedmodulecontent"></a>

```json
{
  "type": "string",
  "botId": "string",
  "scopes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type|
|botId|string|true|none|User ID of the bot on the attached LINE Official Account|
|scopes|[string]|true|none|An array of strings indicating the scope permitted by the admin of the LINE Official Account.|

<h2 id="tocS_DetachedModuleContent">DetachedModuleContent</h2>
<!-- backwards compatibility -->
<a id="schemadetachedmodulecontent"></a>
<a id="schema_DetachedModuleContent"></a>
<a id="tocSdetachedmodulecontent"></a>
<a id="tocsdetachedmodulecontent"></a>

```json
{
  "type": "string",
  "botId": "string",
  "reason": "bot_deleted"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type|
|botId|string|true|none|Detached LINE Official Account bot user ID|
|reason|string|true|none|Reason for detaching|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|bot_deleted|

<h2 id="tocS_ActivatedEvent">ActivatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaactivatedevent"></a>
<a id="schema_ActivatedEvent"></a>
<a id="tocSactivatedevent"></a>
<a id="tocsactivatedevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "chatControl": {
    "expireAt": 0
  }
}
```

This event indicates that the module channel has been switched to Active Channel by calling the Acquire Control API. Sent to the webhook URL server of the module channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|chatControl|[ChatControl](#schemachatcontrol)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_ChatControl">ChatControl</h2>
<!-- backwards compatibility -->
<a id="schemachatcontrol"></a>
<a id="schema_ChatControl"></a>
<a id="tocSchatcontrol"></a>
<a id="tocschatcontrol"></a>

```json
{
  "expireAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expireAt|integer(int64)|true|none|none|

<h2 id="tocS_DeactivatedEvent">DeactivatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemadeactivatedevent"></a>
<a id="schema_DeactivatedEvent"></a>
<a id="tocSdeactivatedevent"></a>
<a id="tocsdeactivatedevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  }
}
```

This event indicates that the module channel has been switched to Standby Channel by calling Acquire Control API or Release Control API. Sent to the webhook URL server of the module channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_BotSuspendedEvent">BotSuspendedEvent</h2>
<!-- backwards compatibility -->
<a id="schemabotsuspendedevent"></a>
<a id="schema_BotSuspendedEvent"></a>
<a id="tocSbotsuspendedevent"></a>
<a id="tocsbotsuspendedevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  }
}
```

This event indicates that the LINE Official Account has been suspended (Suspend). Sent to the webhook URL server of the module channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_BotResumedEvent">BotResumedEvent</h2>
<!-- backwards compatibility -->
<a id="schemabotresumedevent"></a>
<a id="schema_BotResumedEvent"></a>
<a id="tocSbotresumedevent"></a>
<a id="tocsbotresumedevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  }
}
```

This event indicates that the LINE Official Account has returned from the suspended state. Sent to the webhook URL server of the module channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_PnpDeliveryCompletionEvent">PnpDeliveryCompletionEvent</h2>
<!-- backwards compatibility -->
<a id="schemapnpdeliverycompletionevent"></a>
<a id="schema_PnpDeliveryCompletionEvent"></a>
<a id="tocSpnpdeliverycompletionevent"></a>
<a id="tocspnpdeliverycompletionevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "delivery": {
    "data": "string"
  }
}
```

When a request is made to the LINE notification messages API and delivery of the LINE notification message to the user is completed, a dedicated webhook event (delivery completion event) is sent from the LINE Platform to the webhook URL of the bot server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|delivery|[PnpDelivery](#schemapnpdelivery)|true|none|A delivery object containing a hashed phone number string or a string specified by `X-Line-Delivery-Tag` header|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|

<h2 id="tocS_PnpDelivery">PnpDelivery</h2>
<!-- backwards compatibility -->
<a id="schemapnpdelivery"></a>
<a id="schema_PnpDelivery"></a>
<a id="tocSpnpdelivery"></a>
<a id="tocspnpdelivery"></a>

```json
{
  "data": "string"
}
```

A delivery object containing a hashed phone number string or a string specified by `X-Line-Delivery-Tag` header

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|A hashed phone number string or a string specified by `X-Line-Delivery-Tag` header|

<h2 id="tocS_MessageEditedEvent">MessageEditedEvent</h2>
<!-- backwards compatibility -->
<a id="schemamessageeditedevent"></a>
<a id="schema_MessageEditedEvent"></a>
<a id="tocSmessageeditedevent"></a>
<a id="tocsmessageeditedevent"></a>

```json
{
  "type": "string",
  "source": {
    "type": "string"
  },
  "timestamp": 0,
  "mode": "active",
  "webhookEventId": "string",
  "deliveryContext": {
    "isRedelivery": true
  },
  "replyToken": "string",
  "message": {
    "type": "string",
    "id": "string"
  }
}
```

Webhook event object which contains the edited message. This event is triggered when a user edits a text message.
Currently, message editing is not available in one-on-one chats with LINE Official Accounts, so this event is only triggered in group chats.
Multiple messageEdited webhook events may arrive out of order. The event with the largest timestamp represents the latest edit state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the event|
|source|[Source](#schemasource)|false|none|the source of the event.|
|timestamp|integer(int64)|true|none|Time of the event in milliseconds.|
|mode|[EventMode](#schemaeventmode)|true|none|Channel state.|
|webhookEventId|string|true|none|Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.|
|deliveryContext|[DeliveryContext](#schemadeliverycontext)|true|none|webhook's delivery context information|
|replyToken|string|false|none|none|
|message|[MessageContent](#schemamessagecontent)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|active|
|mode|standby|
