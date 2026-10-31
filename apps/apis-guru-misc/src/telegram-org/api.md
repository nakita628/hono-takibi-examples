<h1 id="telegram-bot-api">Telegram Bot API v5.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Auto-generated OpenAPI schema

Base URLs:

* <a href="https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11">https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11</a>

<a href="https://core.telegram.org/bots/api">The Bot API is an HTTP-based interface created for developers keen on building bots for Telegram.</a>

<h1 id="telegram-bot-api-default">Default</h1>

## post/addStickerToSet

> Code samples

```bash
curl https://example.com/addStickerToSet \
  -X POST \
  -H 'Accept: application/json' \
  -F 'emojis=string' \
  -F 'mask_position={"point":"forehead","scale":0,"x_shift":0,"y_shift":0}' \
  -F 'name=string' \
  -F 'png_sticker=' \
  -F 'tgs_sticker=' \
  -F 'user_id=0'
```

`POST /addStickerToSet`

Use this method to add a new sticker to a set created by the bot. You **must** use exactly one of the fields *png\_sticker* or *tgs\_sticker*. Animated stickers can be added to animated sticker sets and only to them. Animated sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#addstickertoset">External documentation</a>

> Body parameter

```yaml
emojis: string
mask_position:
  point: forehead
  scale: 0
  x_shift: 0
  y_shift: 0
name: string
png_sticker: null
tgs_sticker: null
user_id: 0
```

<h3 id="postaddstickertoset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» emojis|body|string|true|One or more emoji corresponding to the sticker|
|» mask_position|body|[MaskPosition](#schemamaskposition)|false|This object describes the position on faces where a mask should be placed by default.|
|» name|body|string|true|Sticker set name|
|» png_sticker|body|[InputFile](#schemainputfile) \| string|false|**PNG** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file\_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|
|» tgs_sticker|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» user_id|body|integer|true|User identifier of sticker set owner|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postaddstickertoset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postaddstickertoset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/answerCallbackQuery

> Code samples

```bash
curl https://example.com/answerCallbackQuery \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cache_time": 0,
    "callback_query_id": "string",
    "show_alert": false,
    "text": "string",
    "url": "string"
  }'
```

`POST /answerCallbackQuery`

Use this method to send answers to callback queries sent from [inline keyboards](/bots#inline-keyboards-and-on-the-fly-updating). The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, *True* is returned.

Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via [@Botfather](https://t.me/botfather) and accept the terms. Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.

<a href="https://core.telegram.org/bots/api/#answercallbackquery">External documentation</a>

> Body parameter

```json
{
  "cache_time": 0,
  "callback_query_id": "string",
  "show_alert": false,
  "text": "string",
  "url": "string"
}
```

<h3 id="postanswercallbackquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» cache_time|body|integer|false|The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.|
|» callback_query_id|body|string|true|Unique identifier for the query to be answered|
|» show_alert|body|boolean|false|If *true*, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to *false*.|
|» text|body|string|false|Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters|
|» url|body|string|false|URL that will be opened by the user's client. If you have created a [Game](https://core.telegram.org/bots/api/#game) and accepted the conditions via [@Botfather](https://t.me/botfather), specify the URL that opens your game — note that this will only work if the query comes from a [*callback\_game*](https://core.telegram.org/bots/api/#inlinekeyboardbutton) button.  <br><br>Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postanswercallbackquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postanswercallbackquery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/answerInlineQuery

> Code samples

```bash
curl https://example.com/answerInlineQuery \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cache_time": 300,
    "inline_query_id": "string",
    "is_personal": true,
    "next_offset": "string",
    "results": [
      {
        "audio_file_id": "string",
        "caption": "string",
        "caption_entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "id": "string",
        "input_message_content": {
          "disable_web_page_preview": true,
          "entities": [
            {
              "language": "string",
              "length": 0,
              "offset": 0,
              "type": "mention",
              "url": "string",
              "user": {
                "can_join_groups": true,
                "can_read_all_group_messages": true,
                "first_name": "string",
                "id": 0,
                "is_bot": true,
                "language_code": "string",
                "last_name": "string",
                "supports_inline_queries": true,
                "username": "string"
              }
            }
          ],
          "message_text": "string",
          "parse_mode": "string"
        },
        "parse_mode": "string",
        "reply_markup": {
          "inline_keyboard": [
            [
              {
                "callback_data": "string",
                "callback_game": null,
                "login_url": {
                  "bot_username": "string",
                  "forward_text": "string",
                  "request_write_access": true,
                  "url": "string"
                },
                "pay": true,
                "switch_inline_query": "string",
                "switch_inline_query_current_chat": "string",
                "text": "string",
                "url": "string"
              }
            ]
          ]
        },
        "type": "string"
      }
    ],
    "switch_pm_parameter": "string",
    "switch_pm_text": "string"
  }'
```

`POST /answerInlineQuery`

Use this method to send answers to an inline query. On success, *True* is returned.  
No more than **50** results per query are allowed.

<a href="https://core.telegram.org/bots/api/#answerinlinequery">External documentation</a>

> Body parameter

```json
{
  "cache_time": 300,
  "inline_query_id": "string",
  "is_personal": true,
  "next_offset": "string",
  "results": [
    {
      "audio_file_id": "string",
      "caption": "string",
      "caption_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "input_message_content": {
        "disable_web_page_preview": true,
        "entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "message_text": "string",
        "parse_mode": "string"
      },
      "parse_mode": "string",
      "reply_markup": {
        "inline_keyboard": [
          [
            {
              "callback_data": "string",
              "callback_game": null,
              "login_url": {
                "bot_username": "string",
                "forward_text": "string",
                "request_write_access": true,
                "url": "string"
              },
              "pay": true,
              "switch_inline_query": "string",
              "switch_inline_query_current_chat": "string",
              "text": "string",
              "url": "string"
            }
          ]
        ]
      },
      "type": "string"
    }
  ],
  "switch_pm_parameter": "string",
  "switch_pm_text": "string"
}
```

<h3 id="postanswerinlinequery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» cache_time|body|integer|false|The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.|
|» inline_query_id|body|string|true|Unique identifier for the answered query|
|» is_personal|body|boolean|false|Pass *True*, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query|
|» next_offset|body|string|false|Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.|
|» results|body|[[InlineQueryResult](#schemainlinequeryresult)]|true|A JSON-serialized array of results for the inline query|
|» switch_pm_parameter|body|string|false|[Deep-linking](/bots#deep-linking) parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed.  <br><br>*Example:* An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an oauth link. Once done, the bot can offer a [*switch\_inline*](https://core.telegram.org/bots/api/#inlinekeyboardmarkup) button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.|
|» switch_pm_text|body|string|false|If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter *switch\_pm\_parameter*|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postanswerinlinequery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postanswerinlinequery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/answerPreCheckoutQuery

> Code samples

```bash
curl https://example.com/answerPreCheckoutQuery \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "error_message": "string",
    "ok": true,
    "pre_checkout_query_id": "string"
  }'
```

`POST /answerPreCheckoutQuery`

Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an [Update](https://core.telegram.org/bots/api/#update) with the field *pre\_checkout\_query*. Use this method to respond to such pre-checkout queries. On success, True is returned. **Note:** The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.

<a href="https://core.telegram.org/bots/api/#answerprecheckoutquery">External documentation</a>

> Body parameter

```json
{
  "error_message": "string",
  "ok": true,
  "pre_checkout_query_id": "string"
}
```

<h3 id="postanswerprecheckoutquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» error_message|body|string|false|Required if *ok* is *False*. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.|
|» ok|body|boolean|true|Specify *True* if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use *False* if there are any problems.|
|» pre_checkout_query_id|body|string|true|Unique identifier for the query to be answered|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postanswerprecheckoutquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postanswerprecheckoutquery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/answerShippingQuery

> Code samples

```bash
curl https://example.com/answerShippingQuery \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "error_message": "string",
    "ok": true,
    "shipping_options": [
      {
        "id": "string",
        "prices": [
          {
            "amount": 0,
            "label": "string"
          }
        ],
        "title": "string"
      }
    ],
    "shipping_query_id": "string"
  }'
```

`POST /answerShippingQuery`

If you sent an invoice requesting a shipping address and the parameter *is\_flexible* was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api/#update) with a *shipping\_query* field to the bot. Use this method to reply to shipping queries. On success, True is returned.

<a href="https://core.telegram.org/bots/api/#answershippingquery">External documentation</a>

> Body parameter

```json
{
  "error_message": "string",
  "ok": true,
  "shipping_options": [
    {
      "id": "string",
      "prices": [
        {
          "amount": 0,
          "label": "string"
        }
      ],
      "title": "string"
    }
  ],
  "shipping_query_id": "string"
}
```

<h3 id="postanswershippingquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» error_message|body|string|false|Required if *ok* is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user.|
|» ok|body|boolean|true|Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)|
|» shipping_options|body|[[ShippingOption](#schemashippingoption)]|false|Required if *ok* is True. A JSON-serialized array of available shipping options.|
|» shipping_query_id|body|string|true|Unique identifier for the query to be answered|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postanswershippingquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postanswershippingquery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/close

> Code samples

```bash
curl https://example.com/close \
  -X POST \
  -H 'Accept: application/json'
```

`POST /close`

Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns *True* on success. Requires no parameters.

<a href="https://core.telegram.org/bots/api/#close">External documentation</a>

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postclose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postclose-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/copyMessage

> Code samples

```bash
curl https://example.com/copyMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allow_sending_without_reply": true,
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "chat_id": 0,
    "disable_notification": true,
    "from_chat_id": 0,
    "message_id": 0,
    "parse_mode": "string",
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message_id": 0
  }'
```

`POST /copyMessage`

Use this method to copy messages of any kind. The method is analogous to the method [forwardMessages](https://core.telegram.org/bots/api/#forwardmessages), but the copied message doesn't have a link to the original message. Returns the [MessageId](https://core.telegram.org/bots/api/#messageid) of the sent message on success.

<a href="https://core.telegram.org/bots/api/#copymessage">External documentation</a>

> Body parameter

```json
{
  "allow_sending_without_reply": true,
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "chat_id": 0,
  "disable_notification": true,
  "from_chat_id": 0,
  "message_id": 0,
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "reply_to_message_id": 0
}
```

<h3 id="postcopymessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» caption|body|string|false|New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept|
|» caption_entities|body|[[MessageEntity](#schemamessageentity)]|false|List of special entities that appear in the new caption, which can be specified instead of *parse\_mode*|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» from_chat_id|body|integer \| string|true|Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» message_id|body|integer|true|Message identifier in the chat specified in *from\_chat\_id*|
|» parse_mode|body|string|false|Mode for parsing entities in the new caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "message_id": 0
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postcopymessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postcopymessage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[MessageId](#schemamessageid)|true|none|This object represents a unique message identifier.|

<aside class="success">
This operation does not require authentication
</aside>

## post/createNewStickerSet

> Code samples

```bash
curl https://example.com/createNewStickerSet \
  -X POST \
  -H 'Accept: application/json' \
  -F 'contains_masks=true' \
  -F 'emojis=string' \
  -F 'mask_position={"point":"forehead","scale":0,"x_shift":0,"y_shift":0}' \
  -F 'name=string' \
  -F 'png_sticker=' \
  -F 'tgs_sticker=' \
  -F 'title=string' \
  -F 'user_id=0'
```

`POST /createNewStickerSet`

Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. You **must** use exactly one of the fields *png\_sticker* or *tgs\_sticker*. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#createnewstickerset">External documentation</a>

> Body parameter

```yaml
contains_masks: true
emojis: string
mask_position:
  point: forehead
  scale: 0
  x_shift: 0
  y_shift: 0
name: string
png_sticker: null
tgs_sticker: null
title: string
user_id: 0
```

<h3 id="postcreatenewstickerset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» contains_masks|body|boolean|false|Pass *True*, if a set of mask stickers should be created|
|» emojis|body|string|true|One or more emoji corresponding to the sticker|
|» mask_position|body|[MaskPosition](#schemamaskposition)|false|This object describes the position on faces where a mask should be placed by default.|
|» name|body|string|true|Short name of sticker set, to be used in `t.me/addstickers/` URLs (e.g., *animals*). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in *“\_by\_<bot username>”*. *<bot\_username>* is case insensitive. 1-64 characters.|
|» png_sticker|body|[InputFile](#schemainputfile) \| string|false|**PNG** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file\_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|
|» tgs_sticker|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» title|body|string|true|Sticker set title, 1-64 characters|
|» user_id|body|integer|true|User identifier of created sticker set owner|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postcreatenewstickerset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postcreatenewstickerset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/deleteChatPhoto

> Code samples

```bash
curl https://example.com/deleteChatPhoto \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0
  }'
```

`POST /deleteChatPhoto`

Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#deletechatphoto">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0
}
```

<h3 id="postdeletechatphoto-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postdeletechatphoto-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postdeletechatphoto-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/deleteChatStickerSet

> Code samples

```bash
curl https://example.com/deleteChatStickerSet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0
  }'
```

`POST /deleteChatStickerSet`

Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\_set\_sticker\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/#getchat) requests to check if the bot can use this method. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#deletechatstickerset">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0
}
```

<h3 id="postdeletechatstickerset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postdeletechatstickerset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postdeletechatstickerset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/deleteMessage

> Code samples

```bash
curl https://example.com/deleteMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "message_id": 0
  }'
```

`POST /deleteMessage`

Use this method to delete a message, including service messages, with the following limitations:  
\- A message can only be deleted if it was sent less than 48 hours ago.  
\- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.  
\- Bots can delete outgoing messages in private chats, groups, and supergroups.  
\- Bots can delete incoming messages in private chats.  
\- Bots granted *can\_post\_messages* permissions can delete outgoing messages in channels.  
\- If the bot is an administrator of a group, it can delete any message there.  
\- If the bot has *can\_delete\_messages* permission in a supergroup or a channel, it can delete any message there.  
Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#deletemessage">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "message_id": 0
}
```

<h3 id="postdeletemessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» message_id|body|integer|true|Identifier of the message to delete|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postdeletemessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postdeletemessage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/deleteStickerFromSet

> Code samples

```bash
curl https://example.com/deleteStickerFromSet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sticker": "string"
  }'
```

`POST /deleteStickerFromSet`

Use this method to delete a sticker from a set created by the bot. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#deletestickerfromset">External documentation</a>

> Body parameter

```json
{
  "sticker": "string"
}
```

<h3 id="postdeletestickerfromset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» sticker|body|string|true|File identifier of the sticker|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postdeletestickerfromset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postdeletestickerfromset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/deleteWebhook

> Code samples

```bash
curl https://example.com/deleteWebhook \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "drop_pending_updates": true
  }'
```

`POST /deleteWebhook`

Use this method to remove webhook integration if you decide to switch back to [getUpdates](https://core.telegram.org/bots/api/#getupdates). Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#deletewebhook">External documentation</a>

> Body parameter

```json
{
  "drop_pending_updates": true
}
```

<h3 id="postdeletewebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» drop_pending_updates|body|boolean|false|Pass *True* to drop all pending updates|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postdeletewebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postdeletewebhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/editMessageCaption

> Code samples

```bash
curl https://example.com/editMessageCaption \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "chat_id": 0,
    "inline_message_id": "string",
    "message_id": 0,
    "parse_mode": "string",
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    }
  }'
```

`POST /editMessageCaption`

Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.

<a href="https://core.telegram.org/bots/api/#editmessagecaption">External documentation</a>

> Body parameter

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "chat_id": 0,
  "inline_message_id": "string",
  "message_id": 0,
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  }
}
```

<h3 id="posteditmessagecaption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» caption|body|string|false|New caption of the message, 0-1024 characters after entities parsing|
|» caption_entities|body|[[MessageEntity](#schemamessageentity)]|false|List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|» chat_id|body|integer \| string|false|Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» inline_message_id|body|string|false|Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message|
|» message_id|body|integer|false|Required if *inline\_message\_id* is not specified. Identifier of the message to edit|
|» parse_mode|body|string|false|Mode for parsing entities in the message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="posteditmessagecaption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="posteditmessagecaption-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage) \| boolean|true|none|none|
|» *anyOf*|[Message](#schemamessage)|false|none|This object represents a message.|
|» *anyOf*|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/editMessageLiveLocation

> Code samples

```bash
curl https://example.com/editMessageLiveLocation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "heading": 0,
    "horizontal_accuracy": 0,
    "inline_message_id": "string",
    "latitude": 0,
    "longitude": 0,
    "message_id": 0,
    "proximity_alert_radius": 0,
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    }
  }'
```

`POST /editMessageLiveLocation`

Use this method to edit live location messages. A location can be edited until its *live\_period* expires or editing is explicitly disabled by a call to [stopMessageLiveLocation](https://core.telegram.org/bots/api/#stopmessagelivelocation). On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.

<a href="https://core.telegram.org/bots/api/#editmessagelivelocation">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "heading": 0,
  "horizontal_accuracy": 0,
  "inline_message_id": "string",
  "latitude": 0,
  "longitude": 0,
  "message_id": 0,
  "proximity_alert_radius": 0,
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  }
}
```

<h3 id="posteditmessagelivelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|false|Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» heading|body|integer|false|Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.|
|» horizontal_accuracy|body|number|false|The radius of uncertainty for the location, measured in meters; 0-1500|
|» inline_message_id|body|string|false|Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message|
|» latitude|body|number|true|Latitude of new location|
|» longitude|body|number|true|Longitude of new location|
|» message_id|body|integer|false|Required if *inline\_message\_id* is not specified. Identifier of the message to edit|
|» proximity_alert_radius|body|integer|false|Maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="posteditmessagelivelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="posteditmessagelivelocation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage) \| boolean|true|none|none|
|» *anyOf*|[Message](#schemamessage)|false|none|This object represents a message.|
|» *anyOf*|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/editMessageMedia

> Code samples

```bash
curl https://example.com/editMessageMedia \
  -X POST \
  -H 'Accept: application/json' \
  -F 'chat_id=0' \
  -F 'inline_message_id=string' \
  -F 'media={"caption":"string","caption_entities":[{"language":"string","length":0,"offset":0,"type":"mention","url":"string","user":{"can_join_groups":true,"can_read_all_group_messages":true,"first_name":"string","id":0,"is_bot":true,"language_code":"string","last_name":"string","supports_inline_queries":true,"username":"string"}}],"duration":0,"height":0,"media":"string","parse_mode":"string","thumb":null,"type":"string","width":0}' \
  -F 'message_id=0' \
  -F 'reply_markup={"inline_keyboard":[[{"callback_data":"string","callback_game":null,"login_url":{"bot_username":"string","forward_text":"string","request_write_access":true,"url":"string"},"pay":true,"switch_inline_query":"string","switch_inline_query_current_chat":"string","text":"string","url":"string"}]]}'
```

`POST /editMessageMedia`

Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded. Use a previously uploaded file via its file\_id or specify a URL. On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.

<a href="https://core.telegram.org/bots/api/#editmessagemedia">External documentation</a>

> Body parameter

```yaml
chat_id: 0
inline_message_id: string
media:
  caption: string
  caption_entities:
    -
      language: string
      length: 0
      offset: 0
      type: mention
      url: string
      user:
        can_join_groups: true
        can_read_all_group_messages: true
        first_name: string
        id: 0
        is_bot: true
        language_code: string
        last_name: string
        supports_inline_queries: true
        username: string
  duration: 0
  height: 0
  media: string
  parse_mode: string
  thumb: null
  type: string
  width: 0
message_id: 0
reply_markup:
  inline_keyboard:
    -
      -
        callback_data: string
        callback_game: null
        login_url:
          bot_username: string
          forward_text: string
          request_write_access: true
          url: string
        pay: true
        switch_inline_query: string
        switch_inline_query_current_chat: string
        text: string
        url: string
```

<h3 id="posteditmessagemedia-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|false|Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» inline_message_id|body|string|false|Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message|
|» media|body|[InputMedia](#schemainputmedia)|true|This object represents the content of a media message to be sent. It should be one of|
|» message_id|body|integer|false|Required if *inline\_message\_id* is not specified. Identifier of the message to edit|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="posteditmessagemedia-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="posteditmessagemedia-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage) \| boolean|true|none|none|
|» *anyOf*|[Message](#schemamessage)|false|none|This object represents a message.|
|» *anyOf*|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/editMessageReplyMarkup

> Code samples

```bash
curl https://example.com/editMessageReplyMarkup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "inline_message_id": "string",
    "message_id": 0,
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    }
  }'
```

`POST /editMessageReplyMarkup`

Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.

<a href="https://core.telegram.org/bots/api/#editmessagereplymarkup">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "inline_message_id": "string",
  "message_id": 0,
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  }
}
```

<h3 id="posteditmessagereplymarkup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|false|Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» inline_message_id|body|string|false|Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message|
|» message_id|body|integer|false|Required if *inline\_message\_id* is not specified. Identifier of the message to edit|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="posteditmessagereplymarkup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="posteditmessagereplymarkup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage) \| boolean|true|none|none|
|» *anyOf*|[Message](#schemamessage)|false|none|This object represents a message.|
|» *anyOf*|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/editMessageText

> Code samples

```bash
curl https://example.com/editMessageText \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "inline_message_id": "string",
    "message_id": 0,
    "parse_mode": "string",
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "text": "string"
  }'
```

`POST /editMessageText`

Use this method to edit text and [game](https://core.telegram.org/bots/api/#games) messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.

<a href="https://core.telegram.org/bots/api/#editmessagetext">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "disable_web_page_preview": true,
  "entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "inline_message_id": "string",
  "message_id": 0,
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "text": "string"
}
```

<h3 id="posteditmessagetext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|false|Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_web_page_preview|body|boolean|false|Disables link previews for links in this message|
|» entities|body|[[MessageEntity](#schemamessageentity)]|false|List of special entities that appear in message text, which can be specified instead of *parse\_mode*|
|» inline_message_id|body|string|false|Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message|
|» message_id|body|integer|false|Required if *inline\_message\_id* is not specified. Identifier of the message to edit|
|» parse_mode|body|string|false|Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» text|body|string|true|New text of the message, 1-4096 characters after entities parsing|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="posteditmessagetext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="posteditmessagetext-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage) \| boolean|true|none|none|
|» *anyOf*|[Message](#schemamessage)|false|none|This object represents a message.|
|» *anyOf*|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/exportChatInviteLink

> Code samples

```bash
curl https://example.com/exportChatInviteLink \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0
  }'
```

`POST /exportChatInviteLink`

Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as *String* on success.

<a href="https://core.telegram.org/bots/api/#exportchatinvitelink">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0
}
```

<h3 id="postexportchatinvitelink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": "string"
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postexportchatinvitelink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postexportchatinvitelink-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/forwardMessage

> Code samples

```bash
curl https://example.com/forwardMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "disable_notification": true,
    "from_chat_id": 0,
    "message_id": 0
  }'
```

`POST /forwardMessage`

Use this method to forward messages of any kind. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.

<a href="https://core.telegram.org/bots/api/#forwardmessage">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "disable_notification": true,
  "from_chat_id": 0,
  "message_id": 0
}
```

<h3 id="postforwardmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» from_chat_id|body|integer \| string|true|Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» message_id|body|integer|true|Message identifier in the chat specified in *from\_chat\_id*|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postforwardmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postforwardmessage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/getChat

> Code samples

```bash
curl https://example.com/getChat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0
  }'
```

`POST /getChat`

Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a [Chat](https://core.telegram.org/bots/api/#chat) object on success.

<a href="https://core.telegram.org/bots/api/#getchat">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0
}
```

<h3 id="postgetchat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "bio": "string",
    "can_set_sticker_set": true,
    "description": "string",
    "first_name": "string",
    "id": 0,
    "invite_link": "string",
    "last_name": "string",
    "linked_chat_id": 0,
    "location": {
      "address": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      }
    },
    "permissions": {
      "can_add_web_page_previews": true,
      "can_change_info": true,
      "can_invite_users": true,
      "can_pin_messages": true,
      "can_send_media_messages": true,
      "can_send_messages": true,
      "can_send_other_messages": true,
      "can_send_polls": true
    },
    "photo": {
      "big_file_id": "string",
      "big_file_unique_id": "string",
      "small_file_id": "string",
      "small_file_unique_id": "string"
    },
    "pinned_message": {},
    "slow_mode_delay": 0,
    "sticker_set_name": "string",
    "title": "string",
    "type": "private",
    "username": "string"
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postgetchat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postgetchat-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Chat](#schemachat)|true|none|This object represents a chat.|

<aside class="success">
This operation does not require authentication
</aside>

## post/getChatAdministrators

> Code samples

```bash
curl https://example.com/getChatAdministrators \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0
  }'
```

`POST /getChatAdministrators`

Use this method to get a list of administrators in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api/#chatmember) objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.

<a href="https://core.telegram.org/bots/api/#getchatadministrators">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0
}
```

<h3 id="postgetchatadministrators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": [
    {
      "can_add_web_page_previews": true,
      "can_be_edited": true,
      "can_change_info": true,
      "can_delete_messages": true,
      "can_edit_messages": true,
      "can_invite_users": true,
      "can_pin_messages": true,
      "can_post_messages": true,
      "can_promote_members": true,
      "can_restrict_members": true,
      "can_send_media_messages": true,
      "can_send_messages": true,
      "can_send_other_messages": true,
      "can_send_polls": true,
      "custom_title": "string",
      "is_anonymous": true,
      "is_member": true,
      "status": "creator",
      "until_date": 0,
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postgetchatadministrators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postgetchatadministrators-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[[ChatMember](#schemachatmember)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/getChatMember

> Code samples

```bash
curl https://example.com/getChatMember \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "user_id": 0
  }'
```

`POST /getChatMember`

Use this method to get information about a member of a chat. Returns a [ChatMember](https://core.telegram.org/bots/api/#chatmember) object on success.

<a href="https://core.telegram.org/bots/api/#getchatmember">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "user_id": 0
}
```

<h3 id="postgetchatmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» user_id|body|integer|true|Unique identifier of the target user|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "can_add_web_page_previews": true,
    "can_be_edited": true,
    "can_change_info": true,
    "can_delete_messages": true,
    "can_edit_messages": true,
    "can_invite_users": true,
    "can_pin_messages": true,
    "can_post_messages": true,
    "can_promote_members": true,
    "can_restrict_members": true,
    "can_send_media_messages": true,
    "can_send_messages": true,
    "can_send_other_messages": true,
    "can_send_polls": true,
    "custom_title": "string",
    "is_anonymous": true,
    "is_member": true,
    "status": "creator",
    "until_date": 0,
    "user": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postgetchatmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postgetchatmember-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[ChatMember](#schemachatmember)|true|none|This object contains information about one member of a chat.|

<aside class="success">
This operation does not require authentication
</aside>

## post/getChatMembersCount

> Code samples

```bash
curl https://example.com/getChatMembersCount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0
  }'
```

`POST /getChatMembersCount`

Use this method to get the number of members in a chat. Returns *Int* on success.

<a href="https://core.telegram.org/bots/api/#getchatmemberscount">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0
}
```

<h3 id="postgetchatmemberscount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": 0
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postgetchatmemberscount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postgetchatmemberscount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|integer|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/getFile

> Code samples

```bash
curl https://example.com/getFile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "file_id": "string"
  }'
```

`POST /getFile`

Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a [File](https://core.telegram.org/bots/api/#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`, where `<file_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile) again.

<a href="https://core.telegram.org/bots/api/#getfile">External documentation</a>

> Body parameter

```json
{
  "file_id": "string"
}
```

<h3 id="postgetfile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file_id|body|string|true|File identifier to get info about|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "file_id": "string",
    "file_path": "string",
    "file_size": 0,
    "file_unique_id": "string"
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postgetfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postgetfile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[File](#schemafile)|true|none|This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile).<br><br>Maximum file size to download is 20 MB|

<aside class="success">
This operation does not require authentication
</aside>

## post/getGameHighScores

> Code samples

```bash
curl https://example.com/getGameHighScores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "inline_message_id": "string",
    "message_id": 0,
    "user_id": 0
  }'
```

`POST /getGameHighScores`

Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. On success, returns an *Array* of [GameHighScore](https://core.telegram.org/bots/api/#gamehighscore) objects.

This method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and his neighbors are not among them. Please note that this behavior is subject to change.

<a href="https://core.telegram.org/bots/api/#getgamehighscores">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "inline_message_id": "string",
  "message_id": 0,
  "user_id": 0
}
```

<h3 id="postgetgamehighscores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer|false|Required if *inline\_message\_id* is not specified. Unique identifier for the target chat|
|» inline_message_id|body|string|false|Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message|
|» message_id|body|integer|false|Required if *inline\_message\_id* is not specified. Identifier of the sent message|
|» user_id|body|integer|true|Target user id|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": [
    {
      "position": 0,
      "score": 0,
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postgetgamehighscores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postgetgamehighscores-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[[GameHighScore](#schemagamehighscore)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/getMe

> Code samples

```bash
curl https://example.com/getMe \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getMe`

A simple method for testing your bot's auth token. Requires no parameters. Returns basic information about the bot in form of a [User](https://core.telegram.org/bots/api/#user) object.

<a href="https://core.telegram.org/bots/api/#getme">External documentation</a>

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postgetme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postgetme-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[User](#schemauser)|true|none|This object represents a Telegram user or bot.|

<aside class="success">
This operation does not require authentication
</aside>

## post/getMyCommands

> Code samples

```bash
curl https://example.com/getMyCommands \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getMyCommands`

Use this method to get the current list of the bot's commands. Requires no parameters. Returns Array of [BotCommand](https://core.telegram.org/bots/api/#botcommand) on success.

<a href="https://core.telegram.org/bots/api/#getmycommands">External documentation</a>

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": [
    {
      "command": "string",
      "description": "string"
    }
  ]
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postgetmycommands-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postgetmycommands-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[[BotCommand](#schemabotcommand)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/getStickerSet

> Code samples

```bash
curl https://example.com/getStickerSet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string"
  }'
```

`POST /getStickerSet`

Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api/#stickerset) object is returned.

<a href="https://core.telegram.org/bots/api/#getstickerset">External documentation</a>

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="postgetstickerset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|Name of the sticker set|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "contains_masks": true,
    "is_animated": true,
    "name": "string",
    "stickers": [
      {
        "emoji": "string",
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "is_animated": true,
        "mask_position": {
          "point": "forehead",
          "scale": 0,
          "x_shift": 0,
          "y_shift": 0
        },
        "set_name": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      }
    ],
    "thumb": {
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "width": 0
    },
    "title": "string"
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postgetstickerset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postgetstickerset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[StickerSet](#schemastickerset)|true|none|This object represents a sticker set.|

<aside class="success">
This operation does not require authentication
</aside>

## post/getUpdates

> Code samples

```bash
curl https://example.com/getUpdates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allowed_updates": [
      "string"
    ],
    "limit": 100,
    "offset": 0,
    "timeout": 0
  }'
```

`POST /getUpdates`

Use this method to receive incoming updates using long polling ([wiki](https://en.wikipedia.org/wiki/Push_technology#Long_polling)). An Array of [Update](https://core.telegram.org/bots/api/#update) objects is returned.

<a href="https://core.telegram.org/bots/api/#getupdates">External documentation</a>

> Body parameter

```json
{
  "allowed_updates": [
    "string"
  ],
  "limit": 100,
  "offset": 0,
  "timeout": 0
}
```

<h3 id="postgetupdates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allowed_updates|body|[string]|false|A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited\_channel\_post”, “callback\_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api/#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.  <br><br>Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.|
|» limit|body|integer|false|Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.|
|» offset|body|integer|false|Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as [getUpdates](https://core.telegram.org/bots/api/#getupdates) is called with an *offset* higher than its *update\_id*. The negative offset can be specified to retrieve updates starting from *-offset* update from the end of the updates queue. All previous updates will forgotten.|
|» timeout|body|integer|false|Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": [
    {
      "callback_query": {
        "chat_instance": "string",
        "data": "string",
        "from": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "game_short_name": "string",
        "id": "string",
        "inline_message_id": "string",
        "message": {
          "animation": {
            "duration": 0,
            "file_id": "string",
            "file_name": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "mime_type": "string",
            "thumb": {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            },
            "width": 0
          },
          "audio": {
            "duration": 0,
            "file_id": "string",
            "file_name": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "mime_type": "string",
            "performer": "string",
            "thumb": {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            },
            "title": "string"
          },
          "author_signature": "string",
          "caption": "string",
          "caption_entities": [
            {
              "language": "string",
              "length": 0,
              "offset": 0,
              "type": "mention",
              "url": "string",
              "user": {
                "can_join_groups": true,
                "can_read_all_group_messages": true,
                "first_name": "string",
                "id": 0,
                "is_bot": true,
                "language_code": "string",
                "last_name": "string",
                "supports_inline_queries": true,
                "username": "string"
              }
            }
          ],
          "channel_chat_created": true,
          "chat": {},
          "connected_website": "string",
          "contact": {
            "first_name": "string",
            "last_name": "string",
            "phone_number": "string",
            "user_id": 0,
            "vcard": "string"
          },
          "date": 0,
          "delete_chat_photo": true,
          "dice": {
            "emoji": "string",
            "value": 0
          },
          "document": {
            "file_id": "string",
            "file_name": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "mime_type": "string",
            "thumb": {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            }
          },
          "edit_date": 0,
          "entities": [
            {
              "language": "string",
              "length": 0,
              "offset": 0,
              "type": "mention",
              "url": "string",
              "user": {
                "can_join_groups": true,
                "can_read_all_group_messages": true,
                "first_name": "string",
                "id": 0,
                "is_bot": true,
                "language_code": "string",
                "last_name": "string",
                "supports_inline_queries": true,
                "username": "string"
              }
            }
          ],
          "forward_date": 0,
          "forward_from": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          },
          "forward_from_chat": {},
          "forward_from_message_id": 0,
          "forward_sender_name": "string",
          "forward_signature": "string",
          "from": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          },
          "game": {
            "animation": {
              "duration": 0,
              "file_id": "string",
              "file_name": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "mime_type": "string",
              "thumb": {
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string",
                "height": 0,
                "width": 0
              },
              "width": 0
            },
            "description": "string",
            "photo": [
              {
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string",
                "height": 0,
                "width": 0
              }
            ],
            "text": "string",
            "text_entities": [
              {
                "language": "string",
                "length": 0,
                "offset": 0,
                "type": "mention",
                "url": "string",
                "user": {
                  "can_join_groups": true,
                  "can_read_all_group_messages": true,
                  "first_name": "string",
                  "id": 0,
                  "is_bot": true,
                  "language_code": "string",
                  "last_name": "string",
                  "supports_inline_queries": true,
                  "username": "string"
                }
              }
            ],
            "title": "string"
          },
          "group_chat_created": true,
          "invoice": {
            "currency": "string",
            "description": "string",
            "start_parameter": "string",
            "title": "string",
            "total_amount": 0
          },
          "left_chat_member": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          },
          "location": {
            "heading": 0,
            "horizontal_accuracy": 0,
            "latitude": 0,
            "live_period": 0,
            "longitude": 0,
            "proximity_alert_radius": 0
          },
          "media_group_id": "string",
          "message_id": 0,
          "migrate_from_chat_id": 0,
          "migrate_to_chat_id": 0,
          "new_chat_members": [
            {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          ],
          "new_chat_photo": [
            {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            }
          ],
          "new_chat_title": "string",
          "passport_data": {
            "credentials": {
              "data": "string",
              "hash": "string",
              "secret": "string"
            },
            "data": [
              {
                "data": "string",
                "email": "string",
                "files": [
                  {
                    "file_date": 0,
                    "file_id": "string",
                    "file_size": 0,
                    "file_unique_id": "string"
                  }
                ],
                "front_side": {
                  "file_date": 0,
                  "file_id": "string",
                  "file_size": 0,
                  "file_unique_id": "string"
                },
                "hash": "string",
                "phone_number": "string",
                "reverse_side": {
                  "file_date": 0,
                  "file_id": "string",
                  "file_size": 0,
                  "file_unique_id": "string"
                },
                "selfie": {
                  "file_date": 0,
                  "file_id": "string",
                  "file_size": 0,
                  "file_unique_id": "string"
                },
                "translation": [
                  {
                    "file_date": 0,
                    "file_id": "string",
                    "file_size": 0,
                    "file_unique_id": "string"
                  }
                ],
                "type": "personal_details"
              }
            ]
          },
          "photo": [
            {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            }
          ],
          "pinned_message": {},
          "poll": {
            "allows_multiple_answers": true,
            "close_date": 0,
            "correct_option_id": 0,
            "explanation": "string",
            "explanation_entities": [
              {
                "language": "string",
                "length": 0,
                "offset": 0,
                "type": "mention",
                "url": "string",
                "user": {
                  "can_join_groups": true,
                  "can_read_all_group_messages": true,
                  "first_name": "string",
                  "id": 0,
                  "is_bot": true,
                  "language_code": "string",
                  "last_name": "string",
                  "supports_inline_queries": true,
                  "username": "string"
                }
              }
            ],
            "id": "string",
            "is_anonymous": true,
            "is_closed": true,
            "open_period": 0,
            "options": [
              {
                "text": "string",
                "voter_count": 0
              }
            ],
            "question": "string",
            "total_voter_count": 0,
            "type": "string"
          },
          "proximity_alert_triggered": {
            "distance": 0,
            "traveler": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            },
            "watcher": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          },
          "reply_markup": {
            "inline_keyboard": [
              [
                {
                  "callback_data": "string",
                  "callback_game": null,
                  "login_url": {
                    "bot_username": "string",
                    "forward_text": "string",
                    "request_write_access": true,
                    "url": "string"
                  },
                  "pay": true,
                  "switch_inline_query": "string",
                  "switch_inline_query_current_chat": "string",
                  "text": "string",
                  "url": "string"
                }
              ]
            ]
          },
          "reply_to_message": {},
          "sender_chat": {},
          "sticker": {
            "emoji": "string",
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "is_animated": true,
            "mask_position": {
              "point": "forehead",
              "scale": 0,
              "x_shift": 0,
              "y_shift": 0
            },
            "set_name": "string",
            "thumb": {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            },
            "width": 0
          },
          "successful_payment": {
            "currency": "string",
            "invoice_payload": "string",
            "order_info": {
              "email": "string",
              "name": "string",
              "phone_number": "string",
              "shipping_address": {
                "city": "string",
                "country_code": "string",
                "post_code": "string",
                "state": "string",
                "street_line1": "string",
                "street_line2": "string"
              }
            },
            "provider_payment_charge_id": "string",
            "shipping_option_id": "string",
            "telegram_payment_charge_id": "string",
            "total_amount": 0
          },
          "supergroup_chat_created": true,
          "text": "string",
          "venue": {
            "address": "string",
            "foursquare_id": "string",
            "foursquare_type": "string",
            "google_place_id": "string",
            "google_place_type": "string",
            "location": {
              "heading": 0,
              "horizontal_accuracy": 0,
              "latitude": 0,
              "live_period": 0,
              "longitude": 0,
              "proximity_alert_radius": 0
            },
            "title": "string"
          },
          "via_bot": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          },
          "video": {
            "duration": 0,
            "file_id": "string",
            "file_name": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "mime_type": "string",
            "thumb": {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            },
            "width": 0
          },
          "video_note": {
            "duration": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "length": 0,
            "thumb": {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            }
          },
          "voice": {
            "duration": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "mime_type": "string"
          }
        }
      },
      "channel_post": {
        "animation": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "audio": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "mime_type": "string",
          "performer": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "title": "string"
        },
        "author_signature": "string",
        "caption": "string",
        "caption_entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "channel_chat_created": true,
        "chat": {},
        "connected_website": "string",
        "contact": {
          "first_name": "string",
          "last_name": "string",
          "phone_number": "string",
          "user_id": 0,
          "vcard": "string"
        },
        "date": 0,
        "delete_chat_photo": true,
        "dice": {
          "emoji": "string",
          "value": 0
        },
        "document": {
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        },
        "edit_date": 0,
        "entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "forward_date": 0,
        "forward_from": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "forward_from_chat": {},
        "forward_from_message_id": 0,
        "forward_sender_name": "string",
        "forward_signature": "string",
        "from": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "game": {
          "animation": {
            "duration": 0,
            "file_id": "string",
            "file_name": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "mime_type": "string",
            "thumb": {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            },
            "width": 0
          },
          "description": "string",
          "photo": [
            {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            }
          ],
          "text": "string",
          "text_entities": [
            {
              "language": "string",
              "length": 0,
              "offset": 0,
              "type": "mention",
              "url": "string",
              "user": {
                "can_join_groups": true,
                "can_read_all_group_messages": true,
                "first_name": "string",
                "id": 0,
                "is_bot": true,
                "language_code": "string",
                "last_name": "string",
                "supports_inline_queries": true,
                "username": "string"
              }
            }
          ],
          "title": "string"
        },
        "group_chat_created": true,
        "invoice": {
          "currency": "string",
          "description": "string",
          "start_parameter": "string",
          "title": "string",
          "total_amount": 0
        },
        "left_chat_member": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "location": {
          "heading": 0,
          "horizontal_accuracy": 0,
          "latitude": 0,
          "live_period": 0,
          "longitude": 0,
          "proximity_alert_radius": 0
        },
        "media_group_id": "string",
        "message_id": 0,
        "migrate_from_chat_id": 0,
        "migrate_to_chat_id": 0,
        "new_chat_members": [
          {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        ],
        "new_chat_photo": [
          {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        ],
        "new_chat_title": "string",
        "passport_data": {
          "credentials": {
            "data": "string",
            "hash": "string",
            "secret": "string"
          },
          "data": [
            {
              "data": "string",
              "email": "string",
              "files": [
                {
                  "file_date": 0,
                  "file_id": "string",
                  "file_size": 0,
                  "file_unique_id": "string"
                }
              ],
              "front_side": {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              },
              "hash": "string",
              "phone_number": "string",
              "reverse_side": {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              },
              "selfie": {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              },
              "translation": [
                {
                  "file_date": 0,
                  "file_id": "string",
                  "file_size": 0,
                  "file_unique_id": "string"
                }
              ],
              "type": "personal_details"
            }
          ]
        },
        "photo": [
          {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        ],
        "pinned_message": {},
        "poll": {
          "allows_multiple_answers": true,
          "close_date": 0,
          "correct_option_id": 0,
          "explanation": "string",
          "explanation_entities": [
            {
              "language": "string",
              "length": 0,
              "offset": 0,
              "type": "mention",
              "url": "string",
              "user": {
                "can_join_groups": true,
                "can_read_all_group_messages": true,
                "first_name": "string",
                "id": 0,
                "is_bot": true,
                "language_code": "string",
                "last_name": "string",
                "supports_inline_queries": true,
                "username": "string"
              }
            }
          ],
          "id": "string",
          "is_anonymous": true,
          "is_closed": true,
          "open_period": 0,
          "options": [
            {
              "text": "string",
              "voter_count": 0
            }
          ],
          "question": "string",
          "total_voter_count": 0,
          "type": "string"
        },
        "proximity_alert_triggered": {
          "distance": 0,
          "traveler": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          },
          "watcher": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        },
        "reply_markup": {
          "inline_keyboard": [
            [
              {
                "callback_data": "string",
                "callback_game": null,
                "login_url": {
                  "bot_username": "string",
                  "forward_text": "string",
                  "request_write_access": true,
                  "url": "string"
                },
                "pay": true,
                "switch_inline_query": "string",
                "switch_inline_query_current_chat": "string",
                "text": "string",
                "url": "string"
              }
            ]
          ]
        },
        "reply_to_message": {},
        "sender_chat": {},
        "sticker": {
          "emoji": "string",
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "is_animated": true,
          "mask_position": {
            "point": "forehead",
            "scale": 0,
            "x_shift": 0,
            "y_shift": 0
          },
          "set_name": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "successful_payment": {
          "currency": "string",
          "invoice_payload": "string",
          "order_info": {
            "email": "string",
            "name": "string",
            "phone_number": "string",
            "shipping_address": {
              "city": "string",
              "country_code": "string",
              "post_code": "string",
              "state": "string",
              "street_line1": "string",
              "street_line2": "string"
            }
          },
          "provider_payment_charge_id": "string",
          "shipping_option_id": "string",
          "telegram_payment_charge_id": "string",
          "total_amount": 0
        },
        "supergroup_chat_created": true,
        "text": "string",
        "venue": {
          "address": "string",
          "foursquare_id": "string",
          "foursquare_type": "string",
          "google_place_id": "string",
          "google_place_type": "string",
          "location": {
            "heading": 0,
            "horizontal_accuracy": 0,
            "latitude": 0,
            "live_period": 0,
            "longitude": 0,
            "proximity_alert_radius": 0
          },
          "title": "string"
        },
        "via_bot": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "video": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "video_note": {
          "duration": 0,
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "length": 0,
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        },
        "voice": {
          "duration": 0,
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "mime_type": "string"
        }
      },
      "chosen_inline_result": {
        "from": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "inline_message_id": "string",
        "location": {
          "heading": 0,
          "horizontal_accuracy": 0,
          "latitude": 0,
          "live_period": 0,
          "longitude": 0,
          "proximity_alert_radius": 0
        },
        "query": "string",
        "result_id": "string"
      },
      "edited_channel_post": {
        "animation": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "audio": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "mime_type": "string",
          "performer": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "title": "string"
        },
        "author_signature": "string",
        "caption": "string",
        "caption_entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "channel_chat_created": true,
        "chat": {},
        "connected_website": "string",
        "contact": {
          "first_name": "string",
          "last_name": "string",
          "phone_number": "string",
          "user_id": 0,
          "vcard": "string"
        },
        "date": 0,
        "delete_chat_photo": true,
        "dice": {
          "emoji": "string",
          "value": 0
        },
        "document": {
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        },
        "edit_date": 0,
        "entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "forward_date": 0,
        "forward_from": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "forward_from_chat": {},
        "forward_from_message_id": 0,
        "forward_sender_name": "string",
        "forward_signature": "string",
        "from": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "game": {
          "animation": {
            "duration": 0,
            "file_id": "string",
            "file_name": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "mime_type": "string",
            "thumb": {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            },
            "width": 0
          },
          "description": "string",
          "photo": [
            {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            }
          ],
          "text": "string",
          "text_entities": [
            {
              "language": "string",
              "length": 0,
              "offset": 0,
              "type": "mention",
              "url": "string",
              "user": {
                "can_join_groups": true,
                "can_read_all_group_messages": true,
                "first_name": "string",
                "id": 0,
                "is_bot": true,
                "language_code": "string",
                "last_name": "string",
                "supports_inline_queries": true,
                "username": "string"
              }
            }
          ],
          "title": "string"
        },
        "group_chat_created": true,
        "invoice": {
          "currency": "string",
          "description": "string",
          "start_parameter": "string",
          "title": "string",
          "total_amount": 0
        },
        "left_chat_member": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "location": {
          "heading": 0,
          "horizontal_accuracy": 0,
          "latitude": 0,
          "live_period": 0,
          "longitude": 0,
          "proximity_alert_radius": 0
        },
        "media_group_id": "string",
        "message_id": 0,
        "migrate_from_chat_id": 0,
        "migrate_to_chat_id": 0,
        "new_chat_members": [
          {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        ],
        "new_chat_photo": [
          {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        ],
        "new_chat_title": "string",
        "passport_data": {
          "credentials": {
            "data": "string",
            "hash": "string",
            "secret": "string"
          },
          "data": [
            {
              "data": "string",
              "email": "string",
              "files": [
                {
                  "file_date": 0,
                  "file_id": "string",
                  "file_size": 0,
                  "file_unique_id": "string"
                }
              ],
              "front_side": {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              },
              "hash": "string",
              "phone_number": "string",
              "reverse_side": {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              },
              "selfie": {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              },
              "translation": [
                {
                  "file_date": 0,
                  "file_id": "string",
                  "file_size": 0,
                  "file_unique_id": "string"
                }
              ],
              "type": "personal_details"
            }
          ]
        },
        "photo": [
          {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        ],
        "pinned_message": {},
        "poll": {
          "allows_multiple_answers": true,
          "close_date": 0,
          "correct_option_id": 0,
          "explanation": "string",
          "explanation_entities": [
            {
              "language": "string",
              "length": 0,
              "offset": 0,
              "type": "mention",
              "url": "string",
              "user": {
                "can_join_groups": true,
                "can_read_all_group_messages": true,
                "first_name": "string",
                "id": 0,
                "is_bot": true,
                "language_code": "string",
                "last_name": "string",
                "supports_inline_queries": true,
                "username": "string"
              }
            }
          ],
          "id": "string",
          "is_anonymous": true,
          "is_closed": true,
          "open_period": 0,
          "options": [
            {
              "text": "string",
              "voter_count": 0
            }
          ],
          "question": "string",
          "total_voter_count": 0,
          "type": "string"
        },
        "proximity_alert_triggered": {
          "distance": 0,
          "traveler": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          },
          "watcher": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        },
        "reply_markup": {
          "inline_keyboard": [
            [
              {
                "callback_data": "string",
                "callback_game": null,
                "login_url": {
                  "bot_username": "string",
                  "forward_text": "string",
                  "request_write_access": true,
                  "url": "string"
                },
                "pay": true,
                "switch_inline_query": "string",
                "switch_inline_query_current_chat": "string",
                "text": "string",
                "url": "string"
              }
            ]
          ]
        },
        "reply_to_message": {},
        "sender_chat": {},
        "sticker": {
          "emoji": "string",
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "is_animated": true,
          "mask_position": {
            "point": "forehead",
            "scale": 0,
            "x_shift": 0,
            "y_shift": 0
          },
          "set_name": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "successful_payment": {
          "currency": "string",
          "invoice_payload": "string",
          "order_info": {
            "email": "string",
            "name": "string",
            "phone_number": "string",
            "shipping_address": {
              "city": "string",
              "country_code": "string",
              "post_code": "string",
              "state": "string",
              "street_line1": "string",
              "street_line2": "string"
            }
          },
          "provider_payment_charge_id": "string",
          "shipping_option_id": "string",
          "telegram_payment_charge_id": "string",
          "total_amount": 0
        },
        "supergroup_chat_created": true,
        "text": "string",
        "venue": {
          "address": "string",
          "foursquare_id": "string",
          "foursquare_type": "string",
          "google_place_id": "string",
          "google_place_type": "string",
          "location": {
            "heading": 0,
            "horizontal_accuracy": 0,
            "latitude": 0,
            "live_period": 0,
            "longitude": 0,
            "proximity_alert_radius": 0
          },
          "title": "string"
        },
        "via_bot": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "video": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "video_note": {
          "duration": 0,
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "length": 0,
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        },
        "voice": {
          "duration": 0,
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "mime_type": "string"
        }
      },
      "edited_message": {
        "animation": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "audio": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "mime_type": "string",
          "performer": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "title": "string"
        },
        "author_signature": "string",
        "caption": "string",
        "caption_entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "channel_chat_created": true,
        "chat": {},
        "connected_website": "string",
        "contact": {
          "first_name": "string",
          "last_name": "string",
          "phone_number": "string",
          "user_id": 0,
          "vcard": "string"
        },
        "date": 0,
        "delete_chat_photo": true,
        "dice": {
          "emoji": "string",
          "value": 0
        },
        "document": {
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        },
        "edit_date": 0,
        "entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "forward_date": 0,
        "forward_from": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "forward_from_chat": {},
        "forward_from_message_id": 0,
        "forward_sender_name": "string",
        "forward_signature": "string",
        "from": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "game": {
          "animation": {
            "duration": 0,
            "file_id": "string",
            "file_name": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "mime_type": "string",
            "thumb": {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            },
            "width": 0
          },
          "description": "string",
          "photo": [
            {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            }
          ],
          "text": "string",
          "text_entities": [
            {
              "language": "string",
              "length": 0,
              "offset": 0,
              "type": "mention",
              "url": "string",
              "user": {
                "can_join_groups": true,
                "can_read_all_group_messages": true,
                "first_name": "string",
                "id": 0,
                "is_bot": true,
                "language_code": "string",
                "last_name": "string",
                "supports_inline_queries": true,
                "username": "string"
              }
            }
          ],
          "title": "string"
        },
        "group_chat_created": true,
        "invoice": {
          "currency": "string",
          "description": "string",
          "start_parameter": "string",
          "title": "string",
          "total_amount": 0
        },
        "left_chat_member": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "location": {
          "heading": 0,
          "horizontal_accuracy": 0,
          "latitude": 0,
          "live_period": 0,
          "longitude": 0,
          "proximity_alert_radius": 0
        },
        "media_group_id": "string",
        "message_id": 0,
        "migrate_from_chat_id": 0,
        "migrate_to_chat_id": 0,
        "new_chat_members": [
          {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        ],
        "new_chat_photo": [
          {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        ],
        "new_chat_title": "string",
        "passport_data": {
          "credentials": {
            "data": "string",
            "hash": "string",
            "secret": "string"
          },
          "data": [
            {
              "data": "string",
              "email": "string",
              "files": [
                {
                  "file_date": 0,
                  "file_id": "string",
                  "file_size": 0,
                  "file_unique_id": "string"
                }
              ],
              "front_side": {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              },
              "hash": "string",
              "phone_number": "string",
              "reverse_side": {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              },
              "selfie": {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              },
              "translation": [
                {
                  "file_date": 0,
                  "file_id": "string",
                  "file_size": 0,
                  "file_unique_id": "string"
                }
              ],
              "type": "personal_details"
            }
          ]
        },
        "photo": [
          {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        ],
        "pinned_message": {},
        "poll": {
          "allows_multiple_answers": true,
          "close_date": 0,
          "correct_option_id": 0,
          "explanation": "string",
          "explanation_entities": [
            {
              "language": "string",
              "length": 0,
              "offset": 0,
              "type": "mention",
              "url": "string",
              "user": {
                "can_join_groups": true,
                "can_read_all_group_messages": true,
                "first_name": "string",
                "id": 0,
                "is_bot": true,
                "language_code": "string",
                "last_name": "string",
                "supports_inline_queries": true,
                "username": "string"
              }
            }
          ],
          "id": "string",
          "is_anonymous": true,
          "is_closed": true,
          "open_period": 0,
          "options": [
            {
              "text": "string",
              "voter_count": 0
            }
          ],
          "question": "string",
          "total_voter_count": 0,
          "type": "string"
        },
        "proximity_alert_triggered": {
          "distance": 0,
          "traveler": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          },
          "watcher": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        },
        "reply_markup": {
          "inline_keyboard": [
            [
              {
                "callback_data": "string",
                "callback_game": null,
                "login_url": {
                  "bot_username": "string",
                  "forward_text": "string",
                  "request_write_access": true,
                  "url": "string"
                },
                "pay": true,
                "switch_inline_query": "string",
                "switch_inline_query_current_chat": "string",
                "text": "string",
                "url": "string"
              }
            ]
          ]
        },
        "reply_to_message": {},
        "sender_chat": {},
        "sticker": {
          "emoji": "string",
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "is_animated": true,
          "mask_position": {
            "point": "forehead",
            "scale": 0,
            "x_shift": 0,
            "y_shift": 0
          },
          "set_name": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "successful_payment": {
          "currency": "string",
          "invoice_payload": "string",
          "order_info": {
            "email": "string",
            "name": "string",
            "phone_number": "string",
            "shipping_address": {
              "city": "string",
              "country_code": "string",
              "post_code": "string",
              "state": "string",
              "street_line1": "string",
              "street_line2": "string"
            }
          },
          "provider_payment_charge_id": "string",
          "shipping_option_id": "string",
          "telegram_payment_charge_id": "string",
          "total_amount": 0
        },
        "supergroup_chat_created": true,
        "text": "string",
        "venue": {
          "address": "string",
          "foursquare_id": "string",
          "foursquare_type": "string",
          "google_place_id": "string",
          "google_place_type": "string",
          "location": {
            "heading": 0,
            "horizontal_accuracy": 0,
            "latitude": 0,
            "live_period": 0,
            "longitude": 0,
            "proximity_alert_radius": 0
          },
          "title": "string"
        },
        "via_bot": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "video": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "video_note": {
          "duration": 0,
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "length": 0,
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        },
        "voice": {
          "duration": 0,
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "mime_type": "string"
        }
      },
      "inline_query": {
        "from": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "id": "string",
        "location": {
          "heading": 0,
          "horizontal_accuracy": 0,
          "latitude": 0,
          "live_period": 0,
          "longitude": 0,
          "proximity_alert_radius": 0
        },
        "offset": "string",
        "query": "string"
      },
      "message": {
        "animation": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "audio": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "mime_type": "string",
          "performer": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "title": "string"
        },
        "author_signature": "string",
        "caption": "string",
        "caption_entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "channel_chat_created": true,
        "chat": {},
        "connected_website": "string",
        "contact": {
          "first_name": "string",
          "last_name": "string",
          "phone_number": "string",
          "user_id": 0,
          "vcard": "string"
        },
        "date": 0,
        "delete_chat_photo": true,
        "dice": {
          "emoji": "string",
          "value": 0
        },
        "document": {
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        },
        "edit_date": 0,
        "entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "forward_date": 0,
        "forward_from": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "forward_from_chat": {},
        "forward_from_message_id": 0,
        "forward_sender_name": "string",
        "forward_signature": "string",
        "from": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "game": {
          "animation": {
            "duration": 0,
            "file_id": "string",
            "file_name": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "mime_type": "string",
            "thumb": {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            },
            "width": 0
          },
          "description": "string",
          "photo": [
            {
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string",
              "height": 0,
              "width": 0
            }
          ],
          "text": "string",
          "text_entities": [
            {
              "language": "string",
              "length": 0,
              "offset": 0,
              "type": "mention",
              "url": "string",
              "user": {
                "can_join_groups": true,
                "can_read_all_group_messages": true,
                "first_name": "string",
                "id": 0,
                "is_bot": true,
                "language_code": "string",
                "last_name": "string",
                "supports_inline_queries": true,
                "username": "string"
              }
            }
          ],
          "title": "string"
        },
        "group_chat_created": true,
        "invoice": {
          "currency": "string",
          "description": "string",
          "start_parameter": "string",
          "title": "string",
          "total_amount": 0
        },
        "left_chat_member": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "location": {
          "heading": 0,
          "horizontal_accuracy": 0,
          "latitude": 0,
          "live_period": 0,
          "longitude": 0,
          "proximity_alert_radius": 0
        },
        "media_group_id": "string",
        "message_id": 0,
        "migrate_from_chat_id": 0,
        "migrate_to_chat_id": 0,
        "new_chat_members": [
          {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        ],
        "new_chat_photo": [
          {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        ],
        "new_chat_title": "string",
        "passport_data": {
          "credentials": {
            "data": "string",
            "hash": "string",
            "secret": "string"
          },
          "data": [
            {
              "data": "string",
              "email": "string",
              "files": [
                {
                  "file_date": 0,
                  "file_id": "string",
                  "file_size": 0,
                  "file_unique_id": "string"
                }
              ],
              "front_side": {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              },
              "hash": "string",
              "phone_number": "string",
              "reverse_side": {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              },
              "selfie": {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              },
              "translation": [
                {
                  "file_date": 0,
                  "file_id": "string",
                  "file_size": 0,
                  "file_unique_id": "string"
                }
              ],
              "type": "personal_details"
            }
          ]
        },
        "photo": [
          {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        ],
        "pinned_message": {},
        "poll": {
          "allows_multiple_answers": true,
          "close_date": 0,
          "correct_option_id": 0,
          "explanation": "string",
          "explanation_entities": [
            {
              "language": "string",
              "length": 0,
              "offset": 0,
              "type": "mention",
              "url": "string",
              "user": {
                "can_join_groups": true,
                "can_read_all_group_messages": true,
                "first_name": "string",
                "id": 0,
                "is_bot": true,
                "language_code": "string",
                "last_name": "string",
                "supports_inline_queries": true,
                "username": "string"
              }
            }
          ],
          "id": "string",
          "is_anonymous": true,
          "is_closed": true,
          "open_period": 0,
          "options": [
            {
              "text": "string",
              "voter_count": 0
            }
          ],
          "question": "string",
          "total_voter_count": 0,
          "type": "string"
        },
        "proximity_alert_triggered": {
          "distance": 0,
          "traveler": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          },
          "watcher": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        },
        "reply_markup": {
          "inline_keyboard": [
            [
              {
                "callback_data": "string",
                "callback_game": null,
                "login_url": {
                  "bot_username": "string",
                  "forward_text": "string",
                  "request_write_access": true,
                  "url": "string"
                },
                "pay": true,
                "switch_inline_query": "string",
                "switch_inline_query_current_chat": "string",
                "text": "string",
                "url": "string"
              }
            ]
          ]
        },
        "reply_to_message": {},
        "sender_chat": {},
        "sticker": {
          "emoji": "string",
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "is_animated": true,
          "mask_position": {
            "point": "forehead",
            "scale": 0,
            "x_shift": 0,
            "y_shift": 0
          },
          "set_name": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "successful_payment": {
          "currency": "string",
          "invoice_payload": "string",
          "order_info": {
            "email": "string",
            "name": "string",
            "phone_number": "string",
            "shipping_address": {
              "city": "string",
              "country_code": "string",
              "post_code": "string",
              "state": "string",
              "street_line1": "string",
              "street_line2": "string"
            }
          },
          "provider_payment_charge_id": "string",
          "shipping_option_id": "string",
          "telegram_payment_charge_id": "string",
          "total_amount": 0
        },
        "supergroup_chat_created": true,
        "text": "string",
        "venue": {
          "address": "string",
          "foursquare_id": "string",
          "foursquare_type": "string",
          "google_place_id": "string",
          "google_place_type": "string",
          "location": {
            "heading": 0,
            "horizontal_accuracy": 0,
            "latitude": 0,
            "live_period": 0,
            "longitude": 0,
            "proximity_alert_radius": 0
          },
          "title": "string"
        },
        "via_bot": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "video": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "video_note": {
          "duration": 0,
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "length": 0,
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        },
        "voice": {
          "duration": 0,
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "mime_type": "string"
        }
      },
      "poll": {
        "allows_multiple_answers": true,
        "close_date": 0,
        "correct_option_id": 0,
        "explanation": "string",
        "explanation_entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "id": "string",
        "is_anonymous": true,
        "is_closed": true,
        "open_period": 0,
        "options": [
          {
            "text": "string",
            "voter_count": 0
          }
        ],
        "question": "string",
        "total_voter_count": 0,
        "type": "string"
      },
      "poll_answer": {
        "option_ids": [
          0
        ],
        "poll_id": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      },
      "pre_checkout_query": {
        "currency": "string",
        "from": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "id": "string",
        "invoice_payload": "string",
        "order_info": {
          "email": "string",
          "name": "string",
          "phone_number": "string",
          "shipping_address": {
            "city": "string",
            "country_code": "string",
            "post_code": "string",
            "state": "string",
            "street_line1": "string",
            "street_line2": "string"
          }
        },
        "shipping_option_id": "string",
        "total_amount": 0
      },
      "shipping_query": {
        "from": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "id": "string",
        "invoice_payload": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "update_id": 0
    }
  ]
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postgetupdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postgetupdates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[[Update](#schemaupdate)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/getUserProfilePhotos

> Code samples

```bash
curl https://example.com/getUserProfilePhotos \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "limit": 100,
    "offset": 0,
    "user_id": 0
  }'
```

`POST /getUserProfilePhotos`

Use this method to get a list of profile pictures for a user. Returns a [UserProfilePhotos](https://core.telegram.org/bots/api/#userprofilephotos) object.

<a href="https://core.telegram.org/bots/api/#getuserprofilephotos">External documentation</a>

> Body parameter

```json
{
  "limit": 100,
  "offset": 0,
  "user_id": 0
}
```

<h3 id="postgetuserprofilephotos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» limit|body|integer|false|Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.|
|» offset|body|integer|false|Sequential number of the first photo to be returned. By default, all photos are returned.|
|» user_id|body|integer|true|Unique identifier of the target user|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "photos": [
      [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ]
    ],
    "total_count": 0
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postgetuserprofilephotos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postgetuserprofilephotos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[UserProfilePhotos](#schemauserprofilephotos)|true|none|This object represent a user's profile pictures.|

<aside class="success">
This operation does not require authentication
</aside>

## post/getWebhookInfo

> Code samples

```bash
curl https://example.com/getWebhookInfo \
  -X POST \
  -H 'Accept: application/json'
```

`POST /getWebhookInfo`

Use this method to get current webhook status. Requires no parameters. On success, returns a [WebhookInfo](https://core.telegram.org/bots/api/#webhookinfo) object. If the bot is using [getUpdates](https://core.telegram.org/bots/api/#getupdates), will return an object with the *url* field empty.

<a href="https://core.telegram.org/bots/api/#getwebhookinfo">External documentation</a>

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "allowed_updates": [
      "string"
    ],
    "has_custom_certificate": true,
    "ip_address": "string",
    "last_error_date": 0,
    "last_error_message": "string",
    "max_connections": 0,
    "pending_update_count": 0,
    "url": "string"
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postgetwebhookinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postgetwebhookinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[WebhookInfo](#schemawebhookinfo)|true|none|Contains information about the current status of a webhook.|

<aside class="success">
This operation does not require authentication
</aside>

## post/kickChatMember

> Code samples

```bash
curl https://example.com/kickChatMember \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "until_date": 0,
    "user_id": 0
  }'
```

`POST /kickChatMember`

Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless [unbanned](https://core.telegram.org/bots/api/#unbanchatmember) first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#kickchatmember">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "until_date": 0,
  "user_id": 0
}
```

<h3 id="postkickchatmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» until_date|body|integer|false|Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever|
|» user_id|body|integer|true|Unique identifier of the target user|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postkickchatmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postkickchatmember-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/leaveChat

> Code samples

```bash
curl https://example.com/leaveChat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0
  }'
```

`POST /leaveChat`

Use this method for your bot to leave a group, supergroup or channel. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#leavechat">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0
}
```

<h3 id="postleavechat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postleavechat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postleavechat-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/logOut

> Code samples

```bash
curl https://example.com/logOut \
  -X POST \
  -H 'Accept: application/json'
```

`POST /logOut`

Use this method to log out from the cloud Bot API server before launching the bot locally. You **must** log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns *True* on success. Requires no parameters.

<a href="https://core.telegram.org/bots/api/#logout">External documentation</a>

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postlogout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postlogout-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/pinChatMessage

> Code samples

```bash
curl https://example.com/pinChatMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "disable_notification": true,
    "message_id": 0
  }'
```

`POST /pinChatMessage`

Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\_pin\_messages' admin right in a supergroup or 'can\_edit\_messages' admin right in a channel. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#pinchatmessage">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "disable_notification": true,
  "message_id": 0
}
```

<h3 id="postpinchatmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Pass *True*, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.|
|» message_id|body|integer|true|Identifier of a message to pin|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postpinchatmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postpinchatmessage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/promoteChatMember

> Code samples

```bash
curl https://example.com/promoteChatMember \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "can_change_info": true,
    "can_delete_messages": true,
    "can_edit_messages": true,
    "can_invite_users": true,
    "can_pin_messages": true,
    "can_post_messages": true,
    "can_promote_members": true,
    "can_restrict_members": true,
    "chat_id": 0,
    "is_anonymous": true,
    "user_id": 0
  }'
```

`POST /promoteChatMember`

Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass *False* for all boolean parameters to demote a user. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#promotechatmember">External documentation</a>

> Body parameter

```json
{
  "can_change_info": true,
  "can_delete_messages": true,
  "can_edit_messages": true,
  "can_invite_users": true,
  "can_pin_messages": true,
  "can_post_messages": true,
  "can_promote_members": true,
  "can_restrict_members": true,
  "chat_id": 0,
  "is_anonymous": true,
  "user_id": 0
}
```

<h3 id="postpromotechatmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» can_change_info|body|boolean|false|Pass True, if the administrator can change chat title, photo and other settings|
|» can_delete_messages|body|boolean|false|Pass True, if the administrator can delete messages of other users|
|» can_edit_messages|body|boolean|false|Pass True, if the administrator can edit messages of other users and can pin messages, channels only|
|» can_invite_users|body|boolean|false|Pass True, if the administrator can invite new users to the chat|
|» can_pin_messages|body|boolean|false|Pass True, if the administrator can pin messages, supergroups only|
|» can_post_messages|body|boolean|false|Pass True, if the administrator can create channel posts, channels only|
|» can_promote_members|body|boolean|false|Pass True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by him)|
|» can_restrict_members|body|boolean|false|Pass True, if the administrator can restrict, ban or unban chat members|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» is_anonymous|body|boolean|false|Pass *True*, if the administrator's presence in the chat is hidden|
|» user_id|body|integer|true|Unique identifier of the target user|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postpromotechatmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postpromotechatmember-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/restrictChatMember

> Code samples

```bash
curl https://example.com/restrictChatMember \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "permissions": {
      "can_add_web_page_previews": true,
      "can_change_info": true,
      "can_invite_users": true,
      "can_pin_messages": true,
      "can_send_media_messages": true,
      "can_send_messages": true,
      "can_send_other_messages": true,
      "can_send_polls": true
    },
    "until_date": 0,
    "user_id": 0
  }'
```

`POST /restrictChatMember`

Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass *True* for all permissions to lift restrictions from a user. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#restrictchatmember">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "permissions": {
    "can_add_web_page_previews": true,
    "can_change_info": true,
    "can_invite_users": true,
    "can_pin_messages": true,
    "can_send_media_messages": true,
    "can_send_messages": true,
    "can_send_other_messages": true,
    "can_send_polls": true
  },
  "until_date": 0,
  "user_id": 0
}
```

<h3 id="postrestrictchatmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» permissions|body|[ChatPermissions](#schemachatpermissions)|true|Describes actions that a non-administrator user is allowed to take in a chat.|
|» until_date|body|integer|false|Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever|
|» user_id|body|integer|true|Unique identifier of the target user|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postrestrictchatmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postrestrictchatmember-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendAnimation

> Code samples

```bash
curl https://example.com/sendAnimation \
  -X POST \
  -H 'Accept: application/json' \
  -F 'allow_sending_without_reply=true' \
  -F 'animation=' \
  -F 'caption=string' \
  -F 'caption_entities=[{"language":"string","length":0,"offset":0,"type":"mention","url":"string","user":{"can_join_groups":true,"can_read_all_group_messages":true,"first_name":"string","id":0,"is_bot":true,"language_code":"string","last_name":"string","supports_inline_queries":true,"username":"string"}}]' \
  -F 'chat_id=0' \
  -F 'disable_notification=true' \
  -F 'duration=0' \
  -F 'height=0' \
  -F 'parse_mode=string' \
  -F 'reply_markup={"inline_keyboard":[[{"callback_data":"string","callback_game":null,"login_url":{"bot_username":"string","forward_text":"string","request_write_access":true,"url":"string"},"pay":true,"switch_inline_query":"string","switch_inline_query_current_chat":"string","text":"string","url":"string"}]]}' \
  -F 'reply_to_message_id=0' \
  -F 'thumb=' \
  -F 'width=0'
```

`POST /sendAnimation`

Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.

<a href="https://core.telegram.org/bots/api/#sendanimation">External documentation</a>

> Body parameter

```yaml
allow_sending_without_reply: true
animation: null
caption: string
caption_entities:
  -
    language: string
    length: 0
    offset: 0
    type: mention
    url: string
    user:
      can_join_groups: true
      can_read_all_group_messages: true
      first_name: string
      id: 0
      is_bot: true
      language_code: string
      last_name: string
      supports_inline_queries: true
      username: string
chat_id: 0
disable_notification: true
duration: 0
height: 0
parse_mode: string
reply_markup:
  inline_keyboard:
    -
      -
        callback_data: string
        callback_game: null
        login_url:
          bot_username: string
          forward_text: string
          request_write_access: true
          url: string
        pay: true
        switch_inline_query: string
        switch_inline_query_current_chat: string
        text: string
        url: string
reply_to_message_id: 0
thumb: null
width: 0
```

<h3 id="postsendanimation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» animation|body|[InputFile](#schemainputfile) \| string|true|Animation to send. Pass a file\_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|
|» caption|body|string|false|Animation caption (may also be used when resending animation by *file\_id*), 0-1024 characters after entities parsing|
|» caption_entities|body|[[MessageEntity](#schemamessageentity)]|false|List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» duration|body|integer|false|Duration of sent animation in seconds|
|» height|body|integer|false|Animation height|
|» parse_mode|body|string|false|Mode for parsing entities in the animation caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|
|» thumb|body|[InputFile](#schemainputfile) \| string|false|Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|
|» width|body|integer|false|Animation width|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendanimation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendanimation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendAudio

> Code samples

```bash
curl https://example.com/sendAudio \
  -X POST \
  -H 'Accept: application/json' \
  -F 'allow_sending_without_reply=true' \
  -F 'audio=' \
  -F 'caption=string' \
  -F 'caption_entities=[{"language":"string","length":0,"offset":0,"type":"mention","url":"string","user":{"can_join_groups":true,"can_read_all_group_messages":true,"first_name":"string","id":0,"is_bot":true,"language_code":"string","last_name":"string","supports_inline_queries":true,"username":"string"}}]' \
  -F 'chat_id=0' \
  -F 'disable_notification=true' \
  -F 'duration=0' \
  -F 'parse_mode=string' \
  -F 'performer=string' \
  -F 'reply_markup={"inline_keyboard":[[{"callback_data":"string","callback_game":null,"login_url":{"bot_username":"string","forward_text":"string","request_write_access":true,"url":"string"},"pay":true,"switch_inline_query":"string","switch_inline_query_current_chat":"string","text":"string","url":"string"}]]}' \
  -F 'reply_to_message_id=0' \
  -F 'thumb=' \
  -F 'title=string'
```

`POST /sendAudio`

Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.

For sending voice messages, use the [sendVoice](https://core.telegram.org/bots/api/#sendvoice) method instead.

<a href="https://core.telegram.org/bots/api/#sendaudio">External documentation</a>

> Body parameter

```yaml
allow_sending_without_reply: true
audio: null
caption: string
caption_entities:
  -
    language: string
    length: 0
    offset: 0
    type: mention
    url: string
    user:
      can_join_groups: true
      can_read_all_group_messages: true
      first_name: string
      id: 0
      is_bot: true
      language_code: string
      last_name: string
      supports_inline_queries: true
      username: string
chat_id: 0
disable_notification: true
duration: 0
parse_mode: string
performer: string
reply_markup:
  inline_keyboard:
    -
      -
        callback_data: string
        callback_game: null
        login_url:
          bot_username: string
          forward_text: string
          request_write_access: true
          url: string
        pay: true
        switch_inline_query: string
        switch_inline_query_current_chat: string
        text: string
        url: string
reply_to_message_id: 0
thumb: null
title: string
```

<h3 id="postsendaudio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» audio|body|[InputFile](#schemainputfile) \| string|true|Audio file to send. Pass a file\_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|
|» caption|body|string|false|Audio caption, 0-1024 characters after entities parsing|
|» caption_entities|body|[[MessageEntity](#schemamessageentity)]|false|List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» duration|body|integer|false|Duration of the audio in seconds|
|» parse_mode|body|string|false|Mode for parsing entities in the audio caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|» performer|body|string|false|Performer|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|
|» thumb|body|[InputFile](#schemainputfile) \| string|false|Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|
|» title|body|string|false|Track name|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendaudio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendaudio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendChatAction

> Code samples

```bash
curl https://example.com/sendChatAction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "string",
    "chat_id": 0
  }'
```

`POST /sendChatAction`

Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns *True* on success.

Example: The [ImageBot](https://t.me/imagebot) needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use [sendChatAction](https://core.telegram.org/bots/api/#sendchataction) with *action* = *upload\_photo*. The user will see a “sending photo” status for the bot.

We only recommend using this method when a response from the bot will take a **noticeable** amount of time to arrive.

<a href="https://core.telegram.org/bots/api/#sendchataction">External documentation</a>

> Body parameter

```json
{
  "action": "string",
  "chat_id": 0
}
```

<h3 id="postsendchataction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» action|body|string|true|Type of action to broadcast. Choose one, depending on what the user is about to receive: *typing* for [text messages](https://core.telegram.org/bots/api/#sendmessage), *upload\_photo* for [photos](https://core.telegram.org/bots/api/#sendphoto), *record\_video* or *upload\_video* for [videos](https://core.telegram.org/bots/api/#sendvideo), *record\_voice* or *upload\_voice* for [voice notes](https://core.telegram.org/bots/api/#sendvoice), *upload\_document* for [general files](https://core.telegram.org/bots/api/#senddocument), *find\_location* for [location data](https://core.telegram.org/bots/api/#sendlocation), *record\_video\_note* or *upload\_video\_note* for [video notes](https://core.telegram.org/bots/api/#sendvideonote).|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendchataction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendchataction-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendContact

> Code samples

```bash
curl https://example.com/sendContact \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allow_sending_without_reply": true,
    "chat_id": 0,
    "disable_notification": true,
    "first_name": "string",
    "last_name": "string",
    "phone_number": "string",
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message_id": 0,
    "vcard": "string"
  }'
```

`POST /sendContact`

Use this method to send phone contacts. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.

<a href="https://core.telegram.org/bots/api/#sendcontact">External documentation</a>

> Body parameter

```json
{
  "allow_sending_without_reply": true,
  "chat_id": 0,
  "disable_notification": true,
  "first_name": "string",
  "last_name": "string",
  "phone_number": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "reply_to_message_id": 0,
  "vcard": "string"
}
```

<h3 id="postsendcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» first_name|body|string|true|Contact's first name|
|» last_name|body|string|false|Contact's last name|
|» phone_number|body|string|true|Contact's phone number|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|
|» vcard|body|string|false|Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendcontact-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendDice

> Code samples

```bash
curl https://example.com/sendDice \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allow_sending_without_reply": true,
    "chat_id": 0,
    "disable_notification": true,
    "emoji": "🎲",
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message_id": 0
  }'
```

`POST /sendDice`

Use this method to send an animated emoji that will display a random value. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.

<a href="https://core.telegram.org/bots/api/#senddice">External documentation</a>

> Body parameter

```json
{
  "allow_sending_without_reply": true,
  "chat_id": 0,
  "disable_notification": true,
  "emoji": "🎲",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "reply_to_message_id": 0
}
```

<h3 id="postsenddice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» emoji|body|string|false|Emoji on which the dice throw animation is based. Currently, must be one of “<img alt="🎲" src="//telegram.org/img/emoji/40/F09F8EB2.png" height="20" width="20" />”, “<img alt="🎯" src="//telegram.org/img/emoji/40/F09F8EAF.png" height="20" width="20" />”, “<img alt="🏀" src="//telegram.org/img/emoji/40/F09F8F80.png" height="20" width="20" />”, “<img alt="⚽" src="//telegram.org/img/emoji/40/E29ABD.png" height="20" width="20" />”, or “<img alt="🎰" src="//telegram.org/img/emoji/40/F09F8EB0.png" height="20" width="20" />”. Dice can have values 1-6 for “<img alt="🎲" src="//telegram.org/img/emoji/40/F09F8EB2.png" height="20" width="20" />” and “<img alt="🎯" src="//telegram.org/img/emoji/40/F09F8EAF.png" height="20" width="20" />”, values 1-5 for “<img alt="🏀" src="//telegram.org/img/emoji/40/F09F8F80.png" height="20" width="20" />” and “<img alt="⚽" src="//telegram.org/img/emoji/40/E29ABD.png" height="20" width="20" />”, and values 1-64 for “<img alt="🎰" src="//telegram.org/img/emoji/40/F09F8EB0.png" height="20" width="20" />”. Defaults to “<img alt="🎲" src="//telegram.org/img/emoji/40/F09F8EB2.png" height="20" width="20" />”|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» emoji|🎲|
|» emoji|🎯|
|» emoji|🏀|
|» emoji|⚽|
|» emoji|🎰|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsenddice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsenddice-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendDocument

> Code samples

```bash
curl https://example.com/sendDocument \
  -X POST \
  -H 'Accept: application/json' \
  -F 'allow_sending_without_reply=true' \
  -F 'caption=string' \
  -F 'caption_entities=[{"language":"string","length":0,"offset":0,"type":"mention","url":"string","user":{"can_join_groups":true,"can_read_all_group_messages":true,"first_name":"string","id":0,"is_bot":true,"language_code":"string","last_name":"string","supports_inline_queries":true,"username":"string"}}]' \
  -F 'chat_id=0' \
  -F 'disable_content_type_detection=true' \
  -F 'disable_notification=true' \
  -F 'document=' \
  -F 'parse_mode=string' \
  -F 'reply_markup={"inline_keyboard":[[{"callback_data":"string","callback_game":null,"login_url":{"bot_username":"string","forward_text":"string","request_write_access":true,"url":"string"},"pay":true,"switch_inline_query":"string","switch_inline_query_current_chat":"string","text":"string","url":"string"}]]}' \
  -F 'reply_to_message_id=0' \
  -F 'thumb='
```

`POST /sendDocument`

Use this method to send general files. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.

<a href="https://core.telegram.org/bots/api/#senddocument">External documentation</a>

> Body parameter

```yaml
allow_sending_without_reply: true
caption: string
caption_entities:
  -
    language: string
    length: 0
    offset: 0
    type: mention
    url: string
    user:
      can_join_groups: true
      can_read_all_group_messages: true
      first_name: string
      id: 0
      is_bot: true
      language_code: string
      last_name: string
      supports_inline_queries: true
      username: string
chat_id: 0
disable_content_type_detection: true
disable_notification: true
document: null
parse_mode: string
reply_markup:
  inline_keyboard:
    -
      -
        callback_data: string
        callback_game: null
        login_url:
          bot_username: string
          forward_text: string
          request_write_access: true
          url: string
        pay: true
        switch_inline_query: string
        switch_inline_query_current_chat: string
        text: string
        url: string
reply_to_message_id: 0
thumb: null
```

<h3 id="postsenddocument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» caption|body|string|false|Document caption (may also be used when resending documents by *file\_id*), 0-1024 characters after entities parsing|
|» caption_entities|body|[[MessageEntity](#schemamessageentity)]|false|List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_content_type_detection|body|boolean|false|Disables automatic server-side content type detection for files uploaded using multipart/form-data|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» document|body|[InputFile](#schemainputfile) \| string|true|File to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|
|» parse_mode|body|string|false|Mode for parsing entities in the document caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|
|» thumb|body|[InputFile](#schemainputfile) \| string|false|Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsenddocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsenddocument-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendGame

> Code samples

```bash
curl https://example.com/sendGame \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allow_sending_without_reply": true,
    "chat_id": 0,
    "disable_notification": true,
    "game_short_name": "string",
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message_id": 0
  }'
```

`POST /sendGame`

Use this method to send a game. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.

<a href="https://core.telegram.org/bots/api/#sendgame">External documentation</a>

> Body parameter

```json
{
  "allow_sending_without_reply": true,
  "chat_id": 0,
  "disable_notification": true,
  "game_short_name": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "reply_to_message_id": 0
}
```

<h3 id="postsendgame-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» chat_id|body|integer|true|Unique identifier for the target chat|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» game_short_name|body|string|true|Short name of the game, serves as the unique identifier for the game. Set up your games via [Botfather](https://t.me/botfather).|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendgame-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendgame-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendInvoice

> Code samples

```bash
curl https://example.com/sendInvoice \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allow_sending_without_reply": true,
    "chat_id": 0,
    "currency": "string",
    "description": "string",
    "disable_notification": true,
    "is_flexible": true,
    "need_email": true,
    "need_name": true,
    "need_phone_number": true,
    "need_shipping_address": true,
    "payload": "string",
    "photo_height": 0,
    "photo_size": 0,
    "photo_url": "string",
    "photo_width": 0,
    "prices": [
      {
        "amount": 0,
        "label": "string"
      }
    ],
    "provider_data": "string",
    "provider_token": "string",
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message_id": 0,
    "send_email_to_provider": true,
    "send_phone_number_to_provider": true,
    "start_parameter": "string",
    "title": "string"
  }'
```

`POST /sendInvoice`

Use this method to send invoices. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.

<a href="https://core.telegram.org/bots/api/#sendinvoice">External documentation</a>

> Body parameter

```json
{
  "allow_sending_without_reply": true,
  "chat_id": 0,
  "currency": "string",
  "description": "string",
  "disable_notification": true,
  "is_flexible": true,
  "need_email": true,
  "need_name": true,
  "need_phone_number": true,
  "need_shipping_address": true,
  "payload": "string",
  "photo_height": 0,
  "photo_size": 0,
  "photo_url": "string",
  "photo_width": 0,
  "prices": [
    {
      "amount": 0,
      "label": "string"
    }
  ],
  "provider_data": "string",
  "provider_token": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "reply_to_message_id": 0,
  "send_email_to_provider": true,
  "send_phone_number_to_provider": true,
  "start_parameter": "string",
  "title": "string"
}
```

<h3 id="postsendinvoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» chat_id|body|integer|true|Unique identifier for the target private chat|
|» currency|body|string|true|Three-letter ISO 4217 currency code, see [more on currencies](/bots/payments#supported-currencies)|
|» description|body|string|true|Product description, 1-255 characters|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» is_flexible|body|boolean|false|Pass *True*, if the final price depends on the shipping method|
|» need_email|body|boolean|false|Pass *True*, if you require the user's email address to complete the order|
|» need_name|body|boolean|false|Pass *True*, if you require the user's full name to complete the order|
|» need_phone_number|body|boolean|false|Pass *True*, if you require the user's phone number to complete the order|
|» need_shipping_address|body|boolean|false|Pass *True*, if you require the user's shipping address to complete the order|
|» payload|body|string|true|Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.|
|» photo_height|body|integer|false|Photo height|
|» photo_size|body|integer|false|Photo size|
|» photo_url|body|string|false|URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.|
|» photo_width|body|integer|false|Photo width|
|» prices|body|[[LabeledPrice](#schemalabeledprice)]|true|Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)|
|» provider_data|body|string|false|A JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.|
|» provider_token|body|string|true|Payments provider token, obtained via [Botfather](https://t.me/botfather)|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|
|» send_email_to_provider|body|boolean|false|Pass *True*, if user's email address should be sent to provider|
|» send_phone_number_to_provider|body|boolean|false|Pass *True*, if user's phone number should be sent to provider|
|» start_parameter|body|string|true|Unique deep-linking parameter that can be used to generate this invoice when used as a start parameter|
|» title|body|string|true|Product name, 1-32 characters|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendinvoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendinvoice-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendLocation

> Code samples

```bash
curl https://example.com/sendLocation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allow_sending_without_reply": true,
    "chat_id": 0,
    "disable_notification": true,
    "heading": 0,
    "horizontal_accuracy": 0,
    "latitude": 0,
    "live_period": 0,
    "longitude": 0,
    "proximity_alert_radius": 0,
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message_id": 0
  }'
```

`POST /sendLocation`

Use this method to send point on the map. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.

<a href="https://core.telegram.org/bots/api/#sendlocation">External documentation</a>

> Body parameter

```json
{
  "allow_sending_without_reply": true,
  "chat_id": 0,
  "disable_notification": true,
  "heading": 0,
  "horizontal_accuracy": 0,
  "latitude": 0,
  "live_period": 0,
  "longitude": 0,
  "proximity_alert_radius": 0,
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "reply_to_message_id": 0
}
```

<h3 id="postsendlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» heading|body|integer|false|For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.|
|» horizontal_accuracy|body|number|false|The radius of uncertainty for the location, measured in meters; 0-1500|
|» latitude|body|number|true|Latitude of the location|
|» live_period|body|integer|false|Period in seconds for which the location will be updated (see [Live Locations](https://telegram.org/blog/live-locations), should be between 60 and 86400.|
|» longitude|body|number|true|Longitude of the location|
|» proximity_alert_radius|body|integer|false|For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendlocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendlocation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendMediaGroup

> Code samples

```bash
curl https://example.com/sendMediaGroup \
  -X POST \
  -H 'Accept: application/json' \
  -F 'allow_sending_without_reply=true' \
  -F 'chat_id=0' \
  -F 'disable_notification=true' \
  -F 'media=[{"caption":"string","caption_entities":[{"language":"string","length":0,"offset":0,"type":"mention","url":"string","user":{"can_join_groups":true,"can_read_all_group_messages":true,"first_name":"string","id":0,"is_bot":true,"language_code":"string","last_name":"string","supports_inline_queries":true,"username":"string"}}],"duration":0,"media":"string","parse_mode":"string","performer":"string","thumb":null,"title":"string","type":"string"}]' \
  -F 'reply_to_message_id=0'
```

`POST /sendMediaGroup`

Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of [Messages](https://core.telegram.org/bots/api/#message) that were sent is returned.

<a href="https://core.telegram.org/bots/api/#sendmediagroup">External documentation</a>

> Body parameter

```yaml
allow_sending_without_reply: true
chat_id: 0
disable_notification: true
media:
  -
    caption: string
    caption_entities:
      -
        language: string
        length: 0
        offset: 0
        type: mention
        url: string
        user:
          can_join_groups: true
          can_read_all_group_messages: true
          first_name: string
          id: 0
          is_bot: true
          language_code: string
          last_name: string
          supports_inline_queries: true
          username: string
    duration: 0
    media: string
    parse_mode: string
    performer: string
    thumb: null
    title: string
    type: string
reply_to_message_id: 0
```

<h3 id="postsendmediagroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends messages [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» media|body|[[InputMediaAudio](#schemainputmediaaudio) \| [InputMediaDocument](#schemainputmediadocument) \| [InputMediaPhoto](#schemainputmediaphoto) \| [InputMediaVideo](#schemainputmediavideo)]|true|A JSON-serialized array describing messages to be sent, must include 2-10 items|
|» » *anyOf*|body|[InputMediaAudio](#schemainputmediaaudio)|false|Represents an audio file to be treated as music to be sent.|
|» » *anyOf*|body|[InputMediaDocument](#schemainputmediadocument)|false|Represents a general file to be sent.|
|» » *anyOf*|body|[InputMediaPhoto](#schemainputmediaphoto)|false|Represents a photo to be sent.|
|» » *anyOf*|body|[InputMediaVideo](#schemainputmediavideo)|false|Represents a video to be sent.|
|» reply_to_message_id|body|integer|false|If the messages are a reply, ID of the original message|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": [
    {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "audio": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "mime_type": "string",
        "performer": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "title": "string"
      },
      "author_signature": "string",
      "caption": "string",
      "caption_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "channel_chat_created": true,
      "chat": {},
      "connected_website": "string",
      "contact": {
        "first_name": "string",
        "last_name": "string",
        "phone_number": "string",
        "user_id": 0,
        "vcard": "string"
      },
      "date": 0,
      "delete_chat_photo": true,
      "dice": {
        "emoji": "string",
        "value": 0
      },
      "document": {
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      },
      "edit_date": 0,
      "entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "forward_date": 0,
      "forward_from": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "forward_from_chat": {},
      "forward_from_message_id": 0,
      "forward_sender_name": "string",
      "forward_signature": "string",
      "from": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "game": {
        "animation": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "description": "string",
        "photo": [
          {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        ],
        "text": "string",
        "text_entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "title": "string"
      },
      "group_chat_created": true,
      "invoice": {
        "currency": "string",
        "description": "string",
        "start_parameter": "string",
        "title": "string",
        "total_amount": 0
      },
      "left_chat_member": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "media_group_id": "string",
      "message_id": 0,
      "migrate_from_chat_id": 0,
      "migrate_to_chat_id": 0,
      "new_chat_members": [
        {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      ],
      "new_chat_photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "new_chat_title": "string",
      "passport_data": {
        "credentials": {
          "data": "string",
          "hash": "string",
          "secret": "string"
        },
        "data": [
          {
            "data": "string",
            "email": "string",
            "files": [
              {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              }
            ],
            "front_side": {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            },
            "hash": "string",
            "phone_number": "string",
            "reverse_side": {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            },
            "selfie": {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            },
            "translation": [
              {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              }
            ],
            "type": "personal_details"
          }
        ]
      },
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "pinned_message": {},
      "poll": {
        "allows_multiple_answers": true,
        "close_date": 0,
        "correct_option_id": 0,
        "explanation": "string",
        "explanation_entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "id": "string",
        "is_anonymous": true,
        "is_closed": true,
        "open_period": 0,
        "options": [
          {
            "text": "string",
            "voter_count": 0
          }
        ],
        "question": "string",
        "total_voter_count": 0,
        "type": "string"
      },
      "proximity_alert_triggered": {
        "distance": 0,
        "traveler": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "watcher": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      },
      "reply_markup": {
        "inline_keyboard": [
          [
            {
              "callback_data": "string",
              "callback_game": null,
              "login_url": {
                "bot_username": "string",
                "forward_text": "string",
                "request_write_access": true,
                "url": "string"
              },
              "pay": true,
              "switch_inline_query": "string",
              "switch_inline_query_current_chat": "string",
              "text": "string",
              "url": "string"
            }
          ]
        ]
      },
      "reply_to_message": {},
      "sender_chat": {},
      "sticker": {
        "emoji": "string",
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "is_animated": true,
        "mask_position": {
          "point": "forehead",
          "scale": 0,
          "x_shift": 0,
          "y_shift": 0
        },
        "set_name": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "successful_payment": {
        "currency": "string",
        "invoice_payload": "string",
        "order_info": {
          "email": "string",
          "name": "string",
          "phone_number": "string",
          "shipping_address": {
            "city": "string",
            "country_code": "string",
            "post_code": "string",
            "state": "string",
            "street_line1": "string",
            "street_line2": "string"
          }
        },
        "provider_payment_charge_id": "string",
        "shipping_option_id": "string",
        "telegram_payment_charge_id": "string",
        "total_amount": 0
      },
      "supergroup_chat_created": true,
      "text": "string",
      "venue": {
        "address": "string",
        "foursquare_id": "string",
        "foursquare_type": "string",
        "google_place_id": "string",
        "google_place_type": "string",
        "location": {
          "heading": 0,
          "horizontal_accuracy": 0,
          "latitude": 0,
          "live_period": 0,
          "longitude": 0,
          "proximity_alert_radius": 0
        },
        "title": "string"
      },
      "via_bot": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "video": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "video_note": {
        "duration": 0,
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "length": 0,
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      },
      "voice": {
        "duration": 0,
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "mime_type": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendmediagroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendmediagroup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[[Message](#schemamessage)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendMessage

> Code samples

```bash
curl https://example.com/sendMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allow_sending_without_reply": true,
    "chat_id": 0,
    "disable_notification": true,
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "parse_mode": "string",
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message_id": 0,
    "text": "string"
  }'
```

`POST /sendMessage`

Use this method to send text messages. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.

<a href="https://core.telegram.org/bots/api/#sendmessage">External documentation</a>

> Body parameter

```json
{
  "allow_sending_without_reply": true,
  "chat_id": 0,
  "disable_notification": true,
  "disable_web_page_preview": true,
  "entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "reply_to_message_id": 0,
  "text": "string"
}
```

<h3 id="postsendmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» disable_web_page_preview|body|boolean|false|Disables link previews for links in this message|
|» entities|body|[[MessageEntity](#schemamessageentity)]|false|List of special entities that appear in message text, which can be specified instead of *parse\_mode*|
|» parse_mode|body|string|false|Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|
|» text|body|string|true|Text of the message to be sent, 1-4096 characters after entities parsing|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendmessage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendPhoto

> Code samples

```bash
curl https://example.com/sendPhoto \
  -X POST \
  -H 'Accept: application/json' \
  -F 'allow_sending_without_reply=true' \
  -F 'caption=string' \
  -F 'caption_entities=[{"language":"string","length":0,"offset":0,"type":"mention","url":"string","user":{"can_join_groups":true,"can_read_all_group_messages":true,"first_name":"string","id":0,"is_bot":true,"language_code":"string","last_name":"string","supports_inline_queries":true,"username":"string"}}]' \
  -F 'chat_id=0' \
  -F 'disable_notification=true' \
  -F 'parse_mode=string' \
  -F 'photo=' \
  -F 'reply_markup={"inline_keyboard":[[{"callback_data":"string","callback_game":null,"login_url":{"bot_username":"string","forward_text":"string","request_write_access":true,"url":"string"},"pay":true,"switch_inline_query":"string","switch_inline_query_current_chat":"string","text":"string","url":"string"}]]}' \
  -F 'reply_to_message_id=0'
```

`POST /sendPhoto`

Use this method to send photos. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.

<a href="https://core.telegram.org/bots/api/#sendphoto">External documentation</a>

> Body parameter

```yaml
allow_sending_without_reply: true
caption: string
caption_entities:
  -
    language: string
    length: 0
    offset: 0
    type: mention
    url: string
    user:
      can_join_groups: true
      can_read_all_group_messages: true
      first_name: string
      id: 0
      is_bot: true
      language_code: string
      last_name: string
      supports_inline_queries: true
      username: string
chat_id: 0
disable_notification: true
parse_mode: string
photo: null
reply_markup:
  inline_keyboard:
    -
      -
        callback_data: string
        callback_game: null
        login_url:
          bot_username: string
          forward_text: string
          request_write_access: true
          url: string
        pay: true
        switch_inline_query: string
        switch_inline_query_current_chat: string
        text: string
        url: string
reply_to_message_id: 0
```

<h3 id="postsendphoto-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» caption|body|string|false|Photo caption (may also be used when resending photos by *file\_id*), 0-1024 characters after entities parsing|
|» caption_entities|body|[[MessageEntity](#schemamessageentity)]|false|List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» parse_mode|body|string|false|Mode for parsing entities in the photo caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|» photo|body|[InputFile](#schemainputfile) \| string|true|Photo to send. Pass a file\_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendphoto-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendphoto-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendPoll

> Code samples

```bash
curl https://example.com/sendPoll \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allow_sending_without_reply": true,
    "allows_multiple_answers": true,
    "chat_id": 0,
    "close_date": 0,
    "correct_option_id": 0,
    "disable_notification": true,
    "explanation": "string",
    "explanation_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "explanation_parse_mode": "string",
    "is_anonymous": true,
    "is_closed": true,
    "open_period": 0,
    "options": [
      "string"
    ],
    "question": "string",
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message_id": 0,
    "type": "string"
  }'
```

`POST /sendPoll`

Use this method to send a native poll. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.

<a href="https://core.telegram.org/bots/api/#sendpoll">External documentation</a>

> Body parameter

```json
{
  "allow_sending_without_reply": true,
  "allows_multiple_answers": true,
  "chat_id": 0,
  "close_date": 0,
  "correct_option_id": 0,
  "disable_notification": true,
  "explanation": "string",
  "explanation_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "explanation_parse_mode": "string",
  "is_anonymous": true,
  "is_closed": true,
  "open_period": 0,
  "options": [
    "string"
  ],
  "question": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "reply_to_message_id": 0,
  "type": "string"
}
```

<h3 id="postsendpoll-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» allows_multiple_answers|body|boolean|false|True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to *False*|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» close_date|body|integer|false|Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with *open\_period*.|
|» correct_option_id|body|integer|false|0-based identifier of the correct answer option, required for polls in quiz mode|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» explanation|body|string|false|Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing|
|» explanation_entities|body|[[MessageEntity](#schemamessageentity)]|false|List of special entities that appear in the poll explanation, which can be specified instead of *parse\_mode*|
|» explanation_parse_mode|body|string|false|Mode for parsing entities in the explanation. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|» is_anonymous|body|boolean|false|True, if the poll needs to be anonymous, defaults to *True*|
|» is_closed|body|boolean|false|Pass *True*, if the poll needs to be immediately closed. This can be useful for poll preview.|
|» open_period|body|integer|false|Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with *close\_date*.|
|» options|body|[string]|true|A JSON-serialized list of answer options, 2-10 strings 1-100 characters each|
|» question|body|string|true|Poll question, 1-300 characters|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|
|» type|body|string|false|Poll type, “quiz” or “regular”, defaults to “regular”|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendpoll-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendpoll-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendSticker

> Code samples

```bash
curl https://example.com/sendSticker \
  -X POST \
  -H 'Accept: application/json' \
  -F 'allow_sending_without_reply=true' \
  -F 'chat_id=0' \
  -F 'disable_notification=true' \
  -F 'reply_markup={"inline_keyboard":[[{"callback_data":"string","callback_game":null,"login_url":{"bot_username":"string","forward_text":"string","request_write_access":true,"url":"string"},"pay":true,"switch_inline_query":"string","switch_inline_query_current_chat":"string","text":"string","url":"string"}]]}' \
  -F 'reply_to_message_id=0' \
  -F 'sticker='
```

`POST /sendSticker`

Use this method to send static .WEBP or [animated](https://telegram.org/blog/animated-stickers) .TGS stickers. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.

<a href="https://core.telegram.org/bots/api/#sendsticker">External documentation</a>

> Body parameter

```yaml
allow_sending_without_reply: true
chat_id: 0
disable_notification: true
reply_markup:
  inline_keyboard:
    -
      -
        callback_data: string
        callback_game: null
        login_url:
          bot_username: string
          forward_text: string
          request_write_access: true
          url: string
        pay: true
        switch_inline_query: string
        switch_inline_query_current_chat: string
        text: string
        url: string
reply_to_message_id: 0
sticker: null
```

<h3 id="postsendsticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|
|» sticker|body|[InputFile](#schemainputfile) \| string|true|Sticker to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendsticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendsticker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendVenue

> Code samples

```bash
curl https://example.com/sendVenue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "address": "string",
    "allow_sending_without_reply": true,
    "chat_id": 0,
    "disable_notification": true,
    "foursquare_id": "string",
    "foursquare_type": "string",
    "google_place_id": "string",
    "google_place_type": "string",
    "latitude": 0,
    "longitude": 0,
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message_id": 0,
    "title": "string"
  }'
```

`POST /sendVenue`

Use this method to send information about a venue. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.

<a href="https://core.telegram.org/bots/api/#sendvenue">External documentation</a>

> Body parameter

```json
{
  "address": "string",
  "allow_sending_without_reply": true,
  "chat_id": 0,
  "disable_notification": true,
  "foursquare_id": "string",
  "foursquare_type": "string",
  "google_place_id": "string",
  "google_place_type": "string",
  "latitude": 0,
  "longitude": 0,
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "reply_to_message_id": 0,
  "title": "string"
}
```

<h3 id="postsendvenue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» address|body|string|true|Address of the venue|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» foursquare_id|body|string|false|Foursquare identifier of the venue|
|» foursquare_type|body|string|false|Foursquare type of the venue, if known. (For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.)|
|» google_place_id|body|string|false|Google Places identifier of the venue|
|» google_place_type|body|string|false|Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).)|
|» latitude|body|number|true|Latitude of the venue|
|» longitude|body|number|true|Longitude of the venue|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|
|» title|body|string|true|Name of the venue|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendvenue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendvenue-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendVideo

> Code samples

```bash
curl https://example.com/sendVideo \
  -X POST \
  -H 'Accept: application/json' \
  -F 'allow_sending_without_reply=true' \
  -F 'caption=string' \
  -F 'caption_entities=[{"language":"string","length":0,"offset":0,"type":"mention","url":"string","user":{"can_join_groups":true,"can_read_all_group_messages":true,"first_name":"string","id":0,"is_bot":true,"language_code":"string","last_name":"string","supports_inline_queries":true,"username":"string"}}]' \
  -F 'chat_id=0' \
  -F 'disable_notification=true' \
  -F 'duration=0' \
  -F 'height=0' \
  -F 'parse_mode=string' \
  -F 'reply_markup={"inline_keyboard":[[{"callback_data":"string","callback_game":null,"login_url":{"bot_username":"string","forward_text":"string","request_write_access":true,"url":"string"},"pay":true,"switch_inline_query":"string","switch_inline_query_current_chat":"string","text":"string","url":"string"}]]}' \
  -F 'reply_to_message_id=0' \
  -F 'supports_streaming=true' \
  -F 'thumb=' \
  -F 'video=' \
  -F 'width=0'
```

`POST /sendVideo`

Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as [Document](https://core.telegram.org/bots/api/#document)). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.

<a href="https://core.telegram.org/bots/api/#sendvideo">External documentation</a>

> Body parameter

```yaml
allow_sending_without_reply: true
caption: string
caption_entities:
  -
    language: string
    length: 0
    offset: 0
    type: mention
    url: string
    user:
      can_join_groups: true
      can_read_all_group_messages: true
      first_name: string
      id: 0
      is_bot: true
      language_code: string
      last_name: string
      supports_inline_queries: true
      username: string
chat_id: 0
disable_notification: true
duration: 0
height: 0
parse_mode: string
reply_markup:
  inline_keyboard:
    -
      -
        callback_data: string
        callback_game: null
        login_url:
          bot_username: string
          forward_text: string
          request_write_access: true
          url: string
        pay: true
        switch_inline_query: string
        switch_inline_query_current_chat: string
        text: string
        url: string
reply_to_message_id: 0
supports_streaming: true
thumb: null
video: null
width: 0
```

<h3 id="postsendvideo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» caption|body|string|false|Video caption (may also be used when resending videos by *file\_id*), 0-1024 characters after entities parsing|
|» caption_entities|body|[[MessageEntity](#schemamessageentity)]|false|List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» duration|body|integer|false|Duration of sent video in seconds|
|» height|body|integer|false|Video height|
|» parse_mode|body|string|false|Mode for parsing entities in the video caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|
|» supports_streaming|body|boolean|false|Pass *True*, if the uploaded video is suitable for streaming|
|» thumb|body|[InputFile](#schemainputfile) \| string|false|Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|
|» video|body|[InputFile](#schemainputfile) \| string|true|Video to send. Pass a file\_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|
|» width|body|integer|false|Video width|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendvideo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendvideo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendVideoNote

> Code samples

```bash
curl https://example.com/sendVideoNote \
  -X POST \
  -H 'Accept: application/json' \
  -F 'allow_sending_without_reply=true' \
  -F 'chat_id=0' \
  -F 'disable_notification=true' \
  -F 'duration=0' \
  -F 'length=0' \
  -F 'reply_markup={"inline_keyboard":[[{"callback_data":"string","callback_game":null,"login_url":{"bot_username":"string","forward_text":"string","request_write_access":true,"url":"string"},"pay":true,"switch_inline_query":"string","switch_inline_query_current_chat":"string","text":"string","url":"string"}]]}' \
  -F 'reply_to_message_id=0' \
  -F 'thumb=' \
  -F 'video_note='
```

`POST /sendVideoNote`

As of [v.4.0](https://telegram.org/blog/video-messages-and-telescope), Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.

<a href="https://core.telegram.org/bots/api/#sendvideonote">External documentation</a>

> Body parameter

```yaml
allow_sending_without_reply: true
chat_id: 0
disable_notification: true
duration: 0
length: 0
reply_markup:
  inline_keyboard:
    -
      -
        callback_data: string
        callback_game: null
        login_url:
          bot_username: string
          forward_text: string
          request_write_access: true
          url: string
        pay: true
        switch_inline_query: string
        switch_inline_query_current_chat: string
        text: string
        url: string
reply_to_message_id: 0
thumb: null
video_note: null
```

<h3 id="postsendvideonote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» duration|body|integer|false|Duration of sent video in seconds|
|» length|body|integer|false|Video width and height, i.e. diameter of the video message|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|
|» thumb|body|[InputFile](#schemainputfile) \| string|false|Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|
|» video_note|body|[InputFile](#schemainputfile) \| string|true|Video note to send. Pass a file\_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files). Sending video notes by a URL is currently unsupported|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendvideonote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendvideonote-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/sendVoice

> Code samples

```bash
curl https://example.com/sendVoice \
  -X POST \
  -H 'Accept: application/json' \
  -F 'allow_sending_without_reply=true' \
  -F 'caption=string' \
  -F 'caption_entities=[{"language":"string","length":0,"offset":0,"type":"mention","url":"string","user":{"can_join_groups":true,"can_read_all_group_messages":true,"first_name":"string","id":0,"is_bot":true,"language_code":"string","last_name":"string","supports_inline_queries":true,"username":"string"}}]' \
  -F 'chat_id=0' \
  -F 'disable_notification=true' \
  -F 'duration=0' \
  -F 'parse_mode=string' \
  -F 'reply_markup={"inline_keyboard":[[{"callback_data":"string","callback_game":null,"login_url":{"bot_username":"string","forward_text":"string","request_write_access":true,"url":"string"},"pay":true,"switch_inline_query":"string","switch_inline_query_current_chat":"string","text":"string","url":"string"}]]}' \
  -F 'reply_to_message_id=0' \
  -F 'voice='
```

`POST /sendVoice`

Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as [Audio](https://core.telegram.org/bots/api/#audio) or [Document](https://core.telegram.org/bots/api/#document)). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.

<a href="https://core.telegram.org/bots/api/#sendvoice">External documentation</a>

> Body parameter

```yaml
allow_sending_without_reply: true
caption: string
caption_entities:
  -
    language: string
    length: 0
    offset: 0
    type: mention
    url: string
    user:
      can_join_groups: true
      can_read_all_group_messages: true
      first_name: string
      id: 0
      is_bot: true
      language_code: string
      last_name: string
      supports_inline_queries: true
      username: string
chat_id: 0
disable_notification: true
duration: 0
parse_mode: string
reply_markup:
  inline_keyboard:
    -
      -
        callback_data: string
        callback_game: null
        login_url:
          bot_username: string
          forward_text: string
          request_write_access: true
          url: string
        pay: true
        switch_inline_query: string
        switch_inline_query_current_chat: string
        text: string
        url: string
reply_to_message_id: 0
voice: null
```

<h3 id="postsendvoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_sending_without_reply|body|boolean|false|Pass *True*, if the message should be sent even if the specified replied-to message is not found|
|» caption|body|string|false|Voice message caption, 0-1024 characters after entities parsing|
|» caption_entities|body|[[MessageEntity](#schemamessageentity)]|false|List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» disable_notification|body|boolean|false|Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.|
|» duration|body|integer|false|Duration of the voice message in seconds|
|» parse_mode|body|string|false|Mode for parsing entities in the voice message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup) \| [ReplyKeyboardMarkup](#schemareplykeyboardmarkup) \| [ReplyKeyboardRemove](#schemareplykeyboardremove) \| [ForceReply](#schemaforcereply)|false|Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.|
|» » *anyOf*|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|» » *anyOf*|body|[ReplyKeyboardMarkup](#schemareplykeyboardmarkup)|false|This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).|
|» » *anyOf*|body|[ReplyKeyboardRemove](#schemareplykeyboardremove)|false|Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).|
|» » *anyOf*|body|[ForceReply](#schemaforcereply)|false|Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).|
|» reply_to_message_id|body|integer|false|If the message is a reply, ID of the original message|
|» voice|body|[InputFile](#schemainputfile) \| string|true|Audio file to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsendvoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsendvoice-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage)|true|none|This object represents a message.|

<aside class="success">
This operation does not require authentication
</aside>

## post/setChatAdministratorCustomTitle

> Code samples

```bash
curl https://example.com/setChatAdministratorCustomTitle \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "custom_title": "string",
    "user_id": 0
  }'
```

`POST /setChatAdministratorCustomTitle`

Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#setchatadministratorcustomtitle">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "custom_title": "string",
  "user_id": 0
}
```

<h3 id="postsetchatadministratorcustomtitle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» custom_title|body|string|true|New custom title for the administrator; 0-16 characters, emoji are not allowed|
|» user_id|body|integer|true|Unique identifier of the target user|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsetchatadministratorcustomtitle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsetchatadministratorcustomtitle-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/setChatDescription

> Code samples

```bash
curl https://example.com/setChatDescription \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "description": "string"
  }'
```

`POST /setChatDescription`

Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#setchatdescription">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "description": "string"
}
```

<h3 id="postsetchatdescription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» description|body|string|false|New chat description, 0-255 characters|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsetchatdescription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsetchatdescription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/setChatPermissions

> Code samples

```bash
curl https://example.com/setChatPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "permissions": {
      "can_add_web_page_previews": true,
      "can_change_info": true,
      "can_invite_users": true,
      "can_pin_messages": true,
      "can_send_media_messages": true,
      "can_send_messages": true,
      "can_send_other_messages": true,
      "can_send_polls": true
    }
  }'
```

`POST /setChatPermissions`

Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the *can\_restrict\_members* admin rights. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#setchatpermissions">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "permissions": {
    "can_add_web_page_previews": true,
    "can_change_info": true,
    "can_invite_users": true,
    "can_pin_messages": true,
    "can_send_media_messages": true,
    "can_send_messages": true,
    "can_send_other_messages": true,
    "can_send_polls": true
  }
}
```

<h3 id="postsetchatpermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» permissions|body|[ChatPermissions](#schemachatpermissions)|true|Describes actions that a non-administrator user is allowed to take in a chat.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsetchatpermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsetchatpermissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/setChatPhoto

> Code samples

```bash
curl https://example.com/setChatPhoto \
  -X POST \
  -H 'Accept: application/json' \
  -F 'chat_id=0' \
  -F 'photo='
```

`POST /setChatPhoto`

Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#setchatphoto">External documentation</a>

> Body parameter

```yaml
chat_id: 0
photo: null
```

<h3 id="postsetchatphoto-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» photo|body|[InputFile](#schemainputfile)|true|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsetchatphoto-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsetchatphoto-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/setChatStickerSet

> Code samples

```bash
curl https://example.com/setChatStickerSet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "sticker_set_name": "string"
  }'
```

`POST /setChatStickerSet`

Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\_set\_sticker\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/#getchat) requests to check if the bot can use this method. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#setchatstickerset">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "sticker_set_name": "string"
}
```

<h3 id="postsetchatstickerset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» sticker_set_name|body|string|true|Name of the sticker set to be set as the group sticker set|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsetchatstickerset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsetchatstickerset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/setChatTitle

> Code samples

```bash
curl https://example.com/setChatTitle \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "title": "string"
  }'
```

`POST /setChatTitle`

Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#setchattitle">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "title": "string"
}
```

<h3 id="postsetchattitle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» title|body|string|true|New chat title, 1-255 characters|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsetchattitle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsetchattitle-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/setGameScore

> Code samples

```bash
curl https://example.com/setGameScore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "disable_edit_message": true,
    "force": true,
    "inline_message_id": "string",
    "message_id": 0,
    "score": 0,
    "user_id": 0
  }'
```

`POST /setGameScore`

Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api/#message), otherwise returns *True*. Returns an error, if the new score is not greater than the user's current score in the chat and *force* is *False*.

<a href="https://core.telegram.org/bots/api/#setgamescore">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "disable_edit_message": true,
  "force": true,
  "inline_message_id": "string",
  "message_id": 0,
  "score": 0,
  "user_id": 0
}
```

<h3 id="postsetgamescore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer|false|Required if *inline\_message\_id* is not specified. Unique identifier for the target chat|
|» disable_edit_message|body|boolean|false|Pass True, if the game message should not be automatically edited to include the current scoreboard|
|» force|body|boolean|false|Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters|
|» inline_message_id|body|string|false|Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message|
|» message_id|body|integer|false|Required if *inline\_message\_id* is not specified. Identifier of the sent message|
|» score|body|integer|true|New score, must be non-negative|
|» user_id|body|integer|true|User identifier|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsetgamescore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsetgamescore-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage) \| boolean|true|none|none|
|» *anyOf*|[Message](#schemamessage)|false|none|This object represents a message.|
|» *anyOf*|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/setMyCommands

> Code samples

```bash
curl https://example.com/setMyCommands \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "commands": [
      {
        "command": "string",
        "description": "string"
      }
    ]
  }'
```

`POST /setMyCommands`

Use this method to change the list of the bot's commands. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#setmycommands">External documentation</a>

> Body parameter

```json
{
  "commands": [
    {
      "command": "string",
      "description": "string"
    }
  ]
}
```

<h3 id="postsetmycommands-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» commands|body|[[BotCommand](#schemabotcommand)]|true|A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsetmycommands-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsetmycommands-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/setPassportDataErrors

> Code samples

```bash
curl https://example.com/setPassportDataErrors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "errors": [
      {
        "data_hash": "string",
        "field_name": "string",
        "message": "string",
        "source": "string",
        "type": "personal_details"
      }
    ],
    "user_id": 0
  }'
```

`POST /setPassportDataErrors`

Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns *True* on success.

Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.

<a href="https://core.telegram.org/bots/api/#setpassportdataerrors">External documentation</a>

> Body parameter

```json
{
  "errors": [
    {
      "data_hash": "string",
      "field_name": "string",
      "message": "string",
      "source": "string",
      "type": "personal_details"
    }
  ],
  "user_id": 0
}
```

<h3 id="postsetpassportdataerrors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» errors|body|[[PassportElementError](#schemapassportelementerror)]|true|A JSON-serialized array describing the errors|
|» user_id|body|integer|true|User identifier|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsetpassportdataerrors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsetpassportdataerrors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/setStickerPositionInSet

> Code samples

```bash
curl https://example.com/setStickerPositionInSet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "position": 0,
    "sticker": "string"
  }'
```

`POST /setStickerPositionInSet`

Use this method to move a sticker in a set created by the bot to a specific position. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#setstickerpositioninset">External documentation</a>

> Body parameter

```json
{
  "position": 0,
  "sticker": "string"
}
```

<h3 id="postsetstickerpositioninset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» position|body|integer|true|New sticker position in the set, zero-based|
|» sticker|body|string|true|File identifier of the sticker|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsetstickerpositioninset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsetstickerpositioninset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/setStickerSetThumb

> Code samples

```bash
curl https://example.com/setStickerSetThumb \
  -X POST \
  -H 'Accept: application/json' \
  -F 'name=string' \
  -F 'thumb=' \
  -F 'user_id=0'
```

`POST /setStickerSetThumb`

Use this method to set the thumbnail of a sticker set. Animated thumbnails can be set for animated sticker sets only. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#setstickersetthumb">External documentation</a>

> Body parameter

```yaml
name: string
thumb: null
user_id: 0
```

<h3 id="postsetstickersetthumb-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|Sticker set name|
|» thumb|body|[InputFile](#schemainputfile) \| string|false|A **PNG** image with the thumbnail, must be up to 128 kilobytes in size and have width and height exactly 100px, or a **TGS** animation with the thumbnail up to 32 kilobytes in size; see [](https://core.telegram.org/animated_stickers#technical-requirements)[https://core.telegram.org/animated\_stickers#technical-requirements](https://core.telegram.org/animated_stickers#technical-requirements) for animated sticker technical requirements. Pass a *file\_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files). Animated sticker set thumbnail can't be uploaded via HTTP URL.|
|» » *anyOf*|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» » *anyOf*|body|string|false|none|
|» user_id|body|integer|true|User identifier of the sticker set owner|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsetstickersetthumb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsetstickersetthumb-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/setWebhook

> Code samples

```bash
curl https://example.com/setWebhook \
  -X POST \
  -H 'Accept: application/json' \
  -F 'allowed_updates=["string"]' \
  -F 'certificate=' \
  -F 'drop_pending_updates=true' \
  -F 'ip_address=string' \
  -F 'max_connections=40' \
  -F 'url=string'
```

`POST /setWebhook`

Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url, containing a JSON-serialized [Update](https://core.telegram.org/bots/api/#update). In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns *True* on success.

If you'd like to make sure that the Webhook request comes from Telegram, we recommend using a secret path in the URL, e.g. `https://www.example.com/<token>`. Since nobody else knows your bot's token, you can be pretty sure it's us.

<a href="https://core.telegram.org/bots/api/#setwebhook">External documentation</a>

> Body parameter

```yaml
allowed_updates:
  - string
certificate: null
drop_pending_updates: true
ip_address: string
max_connections: 40
url: string
```

<h3 id="postsetwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allowed_updates|body|[string]|false|A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited\_channel\_post”, “callback\_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api/#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.  <br>Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.|
|» certificate|body|[InputFile](#schemainputfile)|false|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» drop_pending_updates|body|boolean|false|Pass *True* to drop all pending updates|
|» ip_address|body|string|false|The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS|
|» max_connections|body|integer|false|Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to *40*. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.|
|» url|body|string|true|HTTPS url to send updates to. Use an empty string to remove webhook integration|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postsetwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postsetwebhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/stopMessageLiveLocation

> Code samples

```bash
curl https://example.com/stopMessageLiveLocation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "inline_message_id": "string",
    "message_id": 0,
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    }
  }'
```

`POST /stopMessageLiveLocation`

Use this method to stop updating a live location message before *live\_period* expires. On success, if the message was sent by the bot, the sent [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.

<a href="https://core.telegram.org/bots/api/#stopmessagelivelocation">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "inline_message_id": "string",
  "message_id": 0,
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  }
}
```

<h3 id="poststopmessagelivelocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|false|Required if *inline\_message\_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» inline_message_id|body|string|false|Required if *chat\_id* and *message\_id* are not specified. Identifier of the inline message|
|» message_id|body|integer|false|Required if *inline\_message\_id* is not specified. Identifier of the message with live location to stop|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="poststopmessagelivelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="poststopmessagelivelocation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Message](#schemamessage) \| boolean|true|none|none|
|» *anyOf*|[Message](#schemamessage)|false|none|This object represents a message.|
|» *anyOf*|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/stopPoll

> Code samples

```bash
curl https://example.com/stopPoll \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "message_id": 0,
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    }
  }'
```

`POST /stopPoll`

Use this method to stop a poll which was sent by the bot. On success, the stopped [Poll](https://core.telegram.org/bots/api/#poll) with the final results is returned.

<a href="https://core.telegram.org/bots/api/#stoppoll">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "message_id": 0,
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  }
}
```

<h3 id="poststoppoll-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» message_id|body|integer|true|Identifier of the original message with the poll|
|» reply_markup|body|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "allows_multiple_answers": true,
    "close_date": 0,
    "correct_option_id": 0,
    "explanation": "string",
    "explanation_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "id": "string",
    "is_anonymous": true,
    "is_closed": true,
    "open_period": 0,
    "options": [
      {
        "text": "string",
        "voter_count": 0
      }
    ],
    "question": "string",
    "total_voter_count": 0,
    "type": "string"
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="poststoppoll-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="poststoppoll-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[Poll](#schemapoll)|true|none|This object contains information about a poll.|

<aside class="success">
This operation does not require authentication
</aside>

## post/unbanChatMember

> Code samples

```bash
curl https://example.com/unbanChatMember \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "only_if_banned": true,
    "user_id": 0
  }'
```

`POST /unbanChatMember`

Use this method to unban a previously kicked user in a supergroup or channel. The user will **not** return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be **removed** from the chat. If you don't want this, use the parameter *only\_if\_banned*. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#unbanchatmember">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "only_if_banned": true,
  "user_id": 0
}
```

<h3 id="postunbanchatmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target group or username of the target supergroup or channel (in the format `@username`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» only_if_banned|body|boolean|false|Do nothing if the user is not banned|
|» user_id|body|integer|true|Unique identifier of the target user|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postunbanchatmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postunbanchatmember-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/unpinAllChatMessages

> Code samples

```bash
curl https://example.com/unpinAllChatMessages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0
  }'
```

`POST /unpinAllChatMessages`

Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\_pin\_messages' admin right in a supergroup or 'can\_edit\_messages' admin right in a channel. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#unpinallchatmessages">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0
}
```

<h3 id="postunpinallchatmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postunpinallchatmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postunpinallchatmessages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/unpinChatMessage

> Code samples

```bash
curl https://example.com/unpinChatMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "chat_id": 0,
    "message_id": 0
  }'
```

`POST /unpinChatMessage`

Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\_pin\_messages' admin right in a supergroup or 'can\_edit\_messages' admin right in a channel. Returns *True* on success.

<a href="https://core.telegram.org/bots/api/#unpinchatmessage">External documentation</a>

> Body parameter

```json
{
  "chat_id": 0,
  "message_id": 0
}
```

<h3 id="postunpinchatmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» chat_id|body|integer \| string|true|Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|string|false|none|
|» message_id|body|integer|false|Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": true
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postunpinchatmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postunpinchatmessage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/uploadStickerFile

> Code samples

```bash
curl https://example.com/uploadStickerFile \
  -X POST \
  -H 'Accept: application/json' \
  -F 'png_sticker=' \
  -F 'user_id=0'
```

`POST /uploadStickerFile`

Use this method to upload a .PNG file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api/#file) on success.

<a href="https://core.telegram.org/bots/api/#uploadstickerfile">External documentation</a>

> Body parameter

```yaml
png_sticker: null
user_id: 0
```

<h3 id="postuploadstickerfile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» png_sticker|body|[InputFile](#schemainputfile)|true|This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.|
|» user_id|body|integer|true|User identifier of sticker file owner|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "result": {
    "file_id": "string",
    "file_path": "string",
    "file_size": 0,
    "file_unique_id": "string"
  }
}
```

> default Response

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

<h3 id="postuploadstickerfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default||[Error](#schemaerror)|

<h3 id="postuploadstickerfile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|none|
|result|[File](#schemafile)|true|none|This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile).<br><br>Maximum file size to download is 20 MB|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Animation">Animation</h2>
<!-- backwards compatibility -->
<a id="schemaanimation"></a>
<a id="schema_Animation"></a>
<a id="tocSanimation"></a>
<a id="tocsanimation"></a>

```json
{
  "duration": 0,
  "file_id": "string",
  "file_name": "string",
  "file_size": 0,
  "file_unique_id": "string",
  "height": 0,
  "mime_type": "string",
  "thumb": {
    "file_id": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "height": 0,
    "width": 0
  },
  "width": 0
}
```

This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|integer|true|none|Duration of the video in seconds as defined by sender|
|file_id|string|true|none|Identifier for this file, which can be used to download or reuse the file|
|file_name|string|false|none|*Optional*. Original animation filename as defined by sender|
|file_size|integer|false|none|*Optional*. File size|
|file_unique_id|string|true|none|Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|
|height|integer|true|none|Video height as defined by sender|
|mime_type|string|false|none|*Optional*. MIME type of the file as defined by sender|
|thumb|[PhotoSize](#schemaphotosize)|false|none|This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail.|
|width|integer|true|none|Video width as defined by sender|

<h2 id="tocS_Audio">Audio</h2>
<!-- backwards compatibility -->
<a id="schemaaudio"></a>
<a id="schema_Audio"></a>
<a id="tocSaudio"></a>
<a id="tocsaudio"></a>

```json
{
  "duration": 0,
  "file_id": "string",
  "file_name": "string",
  "file_size": 0,
  "file_unique_id": "string",
  "mime_type": "string",
  "performer": "string",
  "thumb": {
    "file_id": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "height": 0,
    "width": 0
  },
  "title": "string"
}
```

This object represents an audio file to be treated as music by the Telegram clients.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|integer|true|none|Duration of the audio in seconds as defined by sender|
|file_id|string|true|none|Identifier for this file, which can be used to download or reuse the file|
|file_name|string|false|none|*Optional*. Original filename as defined by sender|
|file_size|integer|false|none|*Optional*. File size|
|file_unique_id|string|true|none|Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|
|mime_type|string|false|none|*Optional*. MIME type of the file as defined by sender|
|performer|string|false|none|*Optional*. Performer of the audio as defined by sender or by audio tags|
|thumb|[PhotoSize](#schemaphotosize)|false|none|This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail.|
|title|string|false|none|*Optional*. Title of the audio as defined by sender or by audio tags|

<h2 id="tocS_BotCommand">BotCommand</h2>
<!-- backwards compatibility -->
<a id="schemabotcommand"></a>
<a id="schema_BotCommand"></a>
<a id="tocSbotcommand"></a>
<a id="tocsbotcommand"></a>

```json
{
  "command": "string",
  "description": "string"
}
```

This object represents a bot command.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|string|true|none|Text of the command, 1-32 characters. Can contain only lowercase English letters, digits and underscores.|
|description|string|true|none|Description of the command, 3-256 characters.|

<h2 id="tocS_CallbackGame">CallbackGame</h2>
<!-- backwards compatibility -->
<a id="schemacallbackgame"></a>
<a id="schema_CallbackGame"></a>
<a id="tocScallbackgame"></a>
<a id="tocscallbackgame"></a>

```json
null
```

A placeholder, currently holds no information. Use [BotFather](https://t.me/botfather) to set up your game.

<h2 id="tocS_CallbackQuery">CallbackQuery</h2>
<!-- backwards compatibility -->
<a id="schemacallbackquery"></a>
<a id="schema_CallbackQuery"></a>
<a id="tocScallbackquery"></a>
<a id="tocscallbackquery"></a>

```json
{
  "chat_instance": "string",
  "data": "string",
  "from": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  },
  "game_short_name": "string",
  "id": "string",
  "inline_message_id": "string",
  "message": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  }
}
```

This object represents an incoming callback query from a callback button in an [inline keyboard](/bots#inline-keyboards-and-on-the-fly-updating). If the button that originated the query was attached to a message sent by the bot, the field *message* will be present. If the button was attached to a message sent via the bot (in [inline mode](https://core.telegram.org/bots/api/#inline-mode)), the field *inline\_message\_id* will be present. Exactly one of the fields *data* or *game\_short\_name* will be present.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chat_instance|string|true|none|Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in [games](https://core.telegram.org/bots/api/#games).|
|data|string|false|none|*Optional*. Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field.|
|from|[User](#schemauser)|true|none|This object represents a Telegram user or bot.|
|game_short_name|string|false|none|*Optional*. Short name of a [Game](https://core.telegram.org/bots/api/#games) to be returned, serves as the unique identifier for the game|
|id|string|true|none|Unique identifier for this query|
|inline_message_id|string|false|none|*Optional*. Identifier of the message sent via the bot in inline mode, that originated the query.|
|message|[Message](#schemamessage)|false|none|This object represents a message.|

<h2 id="tocS_Chat">Chat</h2>
<!-- backwards compatibility -->
<a id="schemachat"></a>
<a id="schema_Chat"></a>
<a id="tocSchat"></a>
<a id="tocschat"></a>

```json
{
  "bio": "string",
  "can_set_sticker_set": true,
  "description": "string",
  "first_name": "string",
  "id": 0,
  "invite_link": "string",
  "last_name": "string",
  "linked_chat_id": 0,
  "location": {
    "address": "string",
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    }
  },
  "permissions": {
    "can_add_web_page_previews": true,
    "can_change_info": true,
    "can_invite_users": true,
    "can_pin_messages": true,
    "can_send_media_messages": true,
    "can_send_messages": true,
    "can_send_other_messages": true,
    "can_send_polls": true
  },
  "photo": {
    "big_file_id": "string",
    "big_file_unique_id": "string",
    "small_file_id": "string",
    "small_file_unique_id": "string"
  },
  "pinned_message": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  },
  "slow_mode_delay": 0,
  "sticker_set_name": "string",
  "title": "string",
  "type": "private",
  "username": "string"
}
```

This object represents a chat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bio|string|false|none|*Optional*. Bio of the other party in a private chat. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat).|
|can_set_sticker_set|boolean|false|none|*Optional*. True, if the bot can change the group sticker set. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat).|
|description|string|false|none|*Optional*. Description, for groups, supergroups and channel chats. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat).|
|first_name|string|false|none|*Optional*. First name of the other party in a private chat|
|id|integer|true|none|Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.|
|invite_link|string|false|none|*Optional*. Chat invite link, for groups, supergroups and channel chats. Each administrator in a chat generates their own invite links, so the bot must first generate the link using [exportChatInviteLink](https://core.telegram.org/bots/api/#exportchatinvitelink). Returned only in [getChat](https://core.telegram.org/bots/api/#getchat).|
|last_name|string|false|none|*Optional*. Last name of the other party in a private chat|
|linked_chat_id|integer|false|none|*Optional*. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat).|
|location|[ChatLocation](#schemachatlocation)|false|none|Represents a location to which a chat is connected.|
|permissions|[ChatPermissions](#schemachatpermissions)|false|none|Describes actions that a non-administrator user is allowed to take in a chat.|
|photo|[ChatPhoto](#schemachatphoto)|false|none|This object represents a chat photo.|
|pinned_message|[Message](#schemamessage)|false|none|This object represents a message.|
|slow_mode_delay|integer|false|none|*Optional*. For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat).|
|sticker_set_name|string|false|none|*Optional*. For supergroups, name of group sticker set. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat).|
|title|string|false|none|*Optional*. Title, for supergroups, channels and group chats|
|type|string|true|none|Type of chat, can be either “private”, “group”, “supergroup” or “channel”|
|username|string|false|none|*Optional*. Username, for private chats, supergroups and channels if available|

#### Enumerated Values

|Property|Value|
|---|---|
|type|private|
|type|group|
|type|supergroup|
|type|channel|

<h2 id="tocS_ChatLocation">ChatLocation</h2>
<!-- backwards compatibility -->
<a id="schemachatlocation"></a>
<a id="schema_ChatLocation"></a>
<a id="tocSchatlocation"></a>
<a id="tocschatlocation"></a>

```json
{
  "address": "string",
  "location": {
    "heading": 0,
    "horizontal_accuracy": 0,
    "latitude": 0,
    "live_period": 0,
    "longitude": 0,
    "proximity_alert_radius": 0
  }
}
```

Represents a location to which a chat is connected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Location address; 1-64 characters, as defined by the chat owner|
|location|[Location](#schemalocation)|true|none|This object represents a point on the map.|

<h2 id="tocS_ChatMember">ChatMember</h2>
<!-- backwards compatibility -->
<a id="schemachatmember"></a>
<a id="schema_ChatMember"></a>
<a id="tocSchatmember"></a>
<a id="tocschatmember"></a>

```json
{
  "can_add_web_page_previews": true,
  "can_be_edited": true,
  "can_change_info": true,
  "can_delete_messages": true,
  "can_edit_messages": true,
  "can_invite_users": true,
  "can_pin_messages": true,
  "can_post_messages": true,
  "can_promote_members": true,
  "can_restrict_members": true,
  "can_send_media_messages": true,
  "can_send_messages": true,
  "can_send_other_messages": true,
  "can_send_polls": true,
  "custom_title": "string",
  "is_anonymous": true,
  "is_member": true,
  "status": "creator",
  "until_date": 0,
  "user": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  }
}
```

This object contains information about one member of a chat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_add_web_page_previews|boolean|false|none|*Optional*. Restricted only. True, if the user is allowed to add web page previews to their messages|
|can_be_edited|boolean|false|none|*Optional*. Administrators only. True, if the bot is allowed to edit administrator privileges of that user|
|can_change_info|boolean|false|none|*Optional*. Administrators and restricted only. True, if the user is allowed to change the chat title, photo and other settings|
|can_delete_messages|boolean|false|none|*Optional*. Administrators only. True, if the administrator can delete messages of other users|
|can_edit_messages|boolean|false|none|*Optional*. Administrators only. True, if the administrator can edit messages of other users and can pin messages; channels only|
|can_invite_users|boolean|false|none|*Optional*. Administrators and restricted only. True, if the user is allowed to invite new users to the chat|
|can_pin_messages|boolean|false|none|*Optional*. Administrators and restricted only. True, if the user is allowed to pin messages; groups and supergroups only|
|can_post_messages|boolean|false|none|*Optional*. Administrators only. True, if the administrator can post in the channel; channels only|
|can_promote_members|boolean|false|none|*Optional*. Administrators only. True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user)|
|can_restrict_members|boolean|false|none|*Optional*. Administrators only. True, if the administrator can restrict, ban or unban chat members|
|can_send_media_messages|boolean|false|none|*Optional*. Restricted only. True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes|
|can_send_messages|boolean|false|none|*Optional*. Restricted only. True, if the user is allowed to send text messages, contacts, locations and venues|
|can_send_other_messages|boolean|false|none|*Optional*. Restricted only. True, if the user is allowed to send animations, games, stickers and use inline bots|
|can_send_polls|boolean|false|none|*Optional*. Restricted only. True, if the user is allowed to send polls|
|custom_title|string|false|none|*Optional*. Owner and administrators only. Custom title for this user|
|is_anonymous|boolean|false|none|*Optional*. Owner and administrators only. True, if the user's presence in the chat is hidden|
|is_member|boolean|false|none|*Optional*. Restricted only. True, if the user is a member of the chat at the moment of the request|
|status|string|true|none|The member's status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked”|
|until_date|integer|false|none|*Optional*. Restricted and kicked only. Date when restrictions will be lifted for this user; unix time|
|user|[User](#schemauser)|true|none|This object represents a Telegram user or bot.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|creator|
|status|administrator|
|status|member|
|status|restricted|
|status|left|
|status|kicked|

<h2 id="tocS_ChatPermissions">ChatPermissions</h2>
<!-- backwards compatibility -->
<a id="schemachatpermissions"></a>
<a id="schema_ChatPermissions"></a>
<a id="tocSchatpermissions"></a>
<a id="tocschatpermissions"></a>

```json
{
  "can_add_web_page_previews": true,
  "can_change_info": true,
  "can_invite_users": true,
  "can_pin_messages": true,
  "can_send_media_messages": true,
  "can_send_messages": true,
  "can_send_other_messages": true,
  "can_send_polls": true
}
```

Describes actions that a non-administrator user is allowed to take in a chat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_add_web_page_previews|boolean|false|none|*Optional*. True, if the user is allowed to add web page previews to their messages, implies can\_send\_media\_messages|
|can_change_info|boolean|false|none|*Optional*. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups|
|can_invite_users|boolean|false|none|*Optional*. True, if the user is allowed to invite new users to the chat|
|can_pin_messages|boolean|false|none|*Optional*. True, if the user is allowed to pin messages. Ignored in public supergroups|
|can_send_media_messages|boolean|false|none|*Optional*. True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes, implies can\_send\_messages|
|can_send_messages|boolean|false|none|*Optional*. True, if the user is allowed to send text messages, contacts, locations and venues|
|can_send_other_messages|boolean|false|none|*Optional*. True, if the user is allowed to send animations, games, stickers and use inline bots, implies can\_send\_media\_messages|
|can_send_polls|boolean|false|none|*Optional*. True, if the user is allowed to send polls, implies can\_send\_messages|

<h2 id="tocS_ChatPhoto">ChatPhoto</h2>
<!-- backwards compatibility -->
<a id="schemachatphoto"></a>
<a id="schema_ChatPhoto"></a>
<a id="tocSchatphoto"></a>
<a id="tocschatphoto"></a>

```json
{
  "big_file_id": "string",
  "big_file_unique_id": "string",
  "small_file_id": "string",
  "small_file_unique_id": "string"
}
```

This object represents a chat photo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|big_file_id|string|true|none|File identifier of big (640x640) chat photo. This file\_id can be used only for photo download and only for as long as the photo is not changed.|
|big_file_unique_id|string|true|none|Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|
|small_file_id|string|true|none|File identifier of small (160x160) chat photo. This file\_id can be used only for photo download and only for as long as the photo is not changed.|
|small_file_unique_id|string|true|none|Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|

<h2 id="tocS_ChosenInlineResult">ChosenInlineResult</h2>
<!-- backwards compatibility -->
<a id="schemachoseninlineresult"></a>
<a id="schema_ChosenInlineResult"></a>
<a id="tocSchoseninlineresult"></a>
<a id="tocschoseninlineresult"></a>

```json
{
  "from": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  },
  "inline_message_id": "string",
  "location": {
    "heading": 0,
    "horizontal_accuracy": 0,
    "latitude": 0,
    "live_period": 0,
    "longitude": 0,
    "proximity_alert_radius": 0
  },
  "query": "string",
  "result_id": "string"
}
```

Represents a [result](https://core.telegram.org/bots/api/#inlinequeryresult) of an inline query that was chosen by the user and sent to their chat partner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|[User](#schemauser)|true|none|This object represents a Telegram user or bot.|
|inline_message_id|string|false|none|*Optional*. Identifier of the sent inline message. Available only if there is an [inline keyboard](https://core.telegram.org/bots/api/#inlinekeyboardmarkup) attached to the message. Will be also received in [callback queries](https://core.telegram.org/bots/api/#callbackquery) and can be used to [edit](https://core.telegram.org/bots/api/#updating-messages) the message.|
|location|[Location](#schemalocation)|false|none|This object represents a point on the map.|
|query|string|true|none|The query that was used to obtain the result|
|result_id|string|true|none|The unique identifier for the result that was chosen|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "first_name": "string",
  "last_name": "string",
  "phone_number": "string",
  "user_id": 0,
  "vcard": "string"
}
```

This object represents a phone contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|Contact's first name|
|last_name|string|false|none|*Optional*. Contact's last name|
|phone_number|string|true|none|Contact's phone number|
|user_id|integer|false|none|*Optional*. Contact's user identifier in Telegram|
|vcard|string|false|none|*Optional*. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard)|

<h2 id="tocS_Dice">Dice</h2>
<!-- backwards compatibility -->
<a id="schemadice"></a>
<a id="schema_Dice"></a>
<a id="tocSdice"></a>
<a id="tocsdice"></a>

```json
{
  "emoji": "string",
  "value": 0
}
```

This object represents an animated emoji that displays a random value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emoji|string|true|none|Emoji on which the dice throw animation is based|
|value|integer|true|none|Value of the dice, 1-6 for “<img alt="🎲" src="//telegram.org/img/emoji/40/F09F8EB2.png" height="20" width="20" />” and “<img alt="🎯" src="//telegram.org/img/emoji/40/F09F8EAF.png" height="20" width="20" />” base emoji, 1-5 for “<img alt="🏀" src="//telegram.org/img/emoji/40/F09F8F80.png" height="20" width="20" />” and “<img alt="⚽" src="//telegram.org/img/emoji/40/E29ABD.png" height="20" width="20" />” base emoji, 1-64 for “<img alt="🎰" src="//telegram.org/img/emoji/40/F09F8EB0.png" height="20" width="20" />” base emoji|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "file_id": "string",
  "file_name": "string",
  "file_size": 0,
  "file_unique_id": "string",
  "mime_type": "string",
  "thumb": {
    "file_id": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "height": 0,
    "width": 0
  }
}
```

This object represents a general file (as opposed to [photos](https://core.telegram.org/bots/api/#photosize), [voice messages](https://core.telegram.org/bots/api/#voice) and [audio files](https://core.telegram.org/bots/api/#audio)).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_id|string|true|none|Identifier for this file, which can be used to download or reuse the file|
|file_name|string|false|none|*Optional*. Original filename as defined by sender|
|file_size|integer|false|none|*Optional*. File size|
|file_unique_id|string|true|none|Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|
|mime_type|string|false|none|*Optional*. MIME type of the file as defined by sender|
|thumb|[PhotoSize](#schemaphotosize)|false|none|This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail.|

<h2 id="tocS_EncryptedCredentials">EncryptedCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaencryptedcredentials"></a>
<a id="schema_EncryptedCredentials"></a>
<a id="tocSencryptedcredentials"></a>
<a id="tocsencryptedcredentials"></a>

```json
{
  "data": "string",
  "hash": "string",
  "secret": "string"
}
```

Contains data required for decrypting and authenticating [EncryptedPassportElement](https://core.telegram.org/bots/api/#encryptedpassportelement). See the [Telegram Passport Documentation](https://core.telegram.org/passport#receiving-information) for a complete description of the data decryption and authentication processes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for [EncryptedPassportElement](https://core.telegram.org/bots/api/#encryptedpassportelement) decryption and authentication|
|hash|string|true|none|Base64-encoded data hash for data authentication|
|secret|string|true|none|Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption|

<h2 id="tocS_EncryptedPassportElement">EncryptedPassportElement</h2>
<!-- backwards compatibility -->
<a id="schemaencryptedpassportelement"></a>
<a id="schema_EncryptedPassportElement"></a>
<a id="tocSencryptedpassportelement"></a>
<a id="tocsencryptedpassportelement"></a>

```json
{
  "data": "string",
  "email": "string",
  "files": [
    {
      "file_date": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string"
    }
  ],
  "front_side": {
    "file_date": 0,
    "file_id": "string",
    "file_size": 0,
    "file_unique_id": "string"
  },
  "hash": "string",
  "phone_number": "string",
  "reverse_side": {
    "file_date": 0,
    "file_id": "string",
    "file_size": 0,
    "file_unique_id": "string"
  },
  "selfie": {
    "file_date": 0,
    "file_id": "string",
    "file_size": 0,
    "file_unique_id": "string"
  },
  "translation": [
    {
      "file_date": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string"
    }
  ],
  "type": "personal_details"
}
```

Contains information about documents or other Telegram Passport elements shared with the bot by the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|*Optional*. Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal\_details”, “passport”, “driver\_license”, “identity\_card”, “internal\_passport” and “address” types. Can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api/#encryptedcredentials).|
|email|string|false|none|*Optional*. User's verified email address, available only for “email” type|
|files|[[PassportFile](#schemapassportfile)]|false|none|*Optional*. Array of encrypted files with documents provided by the user, available for “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration” and “temporary\_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api/#encryptedcredentials).|
|front_side|[PassportFile](#schemapassportfile)|false|none|This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.|
|hash|string|true|none|Base64-encoded element hash for using in [PassportElementErrorUnspecified](https://core.telegram.org/bots/api/#passportelementerrorunspecified)|
|phone_number|string|false|none|*Optional*. User's verified phone number, available only for “phone\_number” type|
|reverse_side|[PassportFile](#schemapassportfile)|false|none|This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.|
|selfie|[PassportFile](#schemapassportfile)|false|none|This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.|
|translation|[[PassportFile](#schemapassportfile)]|false|none|*Optional*. Array of encrypted files with translated versions of documents provided by the user. Available if requested for “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration” and “temporary\_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api/#encryptedcredentials).|
|type|string|true|none|Element type. One of “personal\_details”, “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “address”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration”, “phone\_number”, “email”.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|personal_details|
|type|passport|
|type|driver_license|
|type|identity_card|
|type|internal_passport|
|type|address|
|type|utility_bill|
|type|bank_statement|
|type|rental_agreement|
|type|passport_registration|
|type|temporary_registration|
|type|phone_number|
|type|email|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "description": "string",
  "error_code": 0,
  "ok": false,
  "parameters": {
    "migrate_to_chat_id": 0,
    "retry_after": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|error_code|integer|true|none|none|
|ok|boolean|true|none|none|
|parameters|[ResponseParameters](#schemaresponseparameters)|false|none|Contains information about why a request was unsuccessful.|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "file_id": "string",
  "file_path": "string",
  "file_size": 0,
  "file_unique_id": "string"
}
```

This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile).

Maximum file size to download is 20 MB

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_id|string|true|none|Identifier for this file, which can be used to download or reuse the file|
|file_path|string|false|none|*Optional*. File path. Use `https://api.telegram.org/file/bot<token>/<file_path>` to get the file.|
|file_size|integer|false|none|*Optional*. File size, if known|
|file_unique_id|string|true|none|Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|

<h2 id="tocS_ForceReply">ForceReply</h2>
<!-- backwards compatibility -->
<a id="schemaforcereply"></a>
<a id="schema_ForceReply"></a>
<a id="tocSforcereply"></a>
<a id="tocsforcereply"></a>

```json
{
  "force_reply": true,
  "selective": true
}
```

Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots#privacy-mode).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|force_reply|boolean|true|none|Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'|
|selective|boolean|false|none|*Optional*. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the *text* of the [Message](https://core.telegram.org/bots/api/#message) object; 2) if the bot's message is a reply (has *reply\_to\_message\_id*), sender of the original message.|

<h2 id="tocS_Game">Game</h2>
<!-- backwards compatibility -->
<a id="schemagame"></a>
<a id="schema_Game"></a>
<a id="tocSgame"></a>
<a id="tocsgame"></a>

```json
{
  "animation": {
    "duration": 0,
    "file_id": "string",
    "file_name": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "height": 0,
    "mime_type": "string",
    "thumb": {
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "width": 0
    },
    "width": 0
  },
  "description": "string",
  "photo": [
    {
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "width": 0
    }
  ],
  "text": "string",
  "text_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "title": "string"
}
```

This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|animation|[Animation](#schemaanimation)|false|none|This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).|
|description|string|true|none|Description of the game|
|photo|[[PhotoSize](#schemaphotosize)]|true|none|Photo that will be displayed in the game message in chats.|
|text|string|false|none|*Optional*. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls [setGameScore](https://core.telegram.org/bots/api/#setgamescore), or manually edited using [editMessageText](https://core.telegram.org/bots/api/#editmessagetext). 0-4096 characters.|
|text_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. Special entities that appear in *text*, such as usernames, URLs, bot commands, etc.|
|title|string|true|none|Title of the game|

<h2 id="tocS_GameHighScore">GameHighScore</h2>
<!-- backwards compatibility -->
<a id="schemagamehighscore"></a>
<a id="schema_GameHighScore"></a>
<a id="tocSgamehighscore"></a>
<a id="tocsgamehighscore"></a>

```json
{
  "position": 0,
  "score": 0,
  "user": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  }
}
```

This object represents one row of the high scores table for a game.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|integer|true|none|Position in high score table for the game|
|score|integer|true|none|Score|
|user|[User](#schemauser)|true|none|This object represents a Telegram user or bot.|

<h2 id="tocS_InlineKeyboardButton">InlineKeyboardButton</h2>
<!-- backwards compatibility -->
<a id="schemainlinekeyboardbutton"></a>
<a id="schema_InlineKeyboardButton"></a>
<a id="tocSinlinekeyboardbutton"></a>
<a id="tocsinlinekeyboardbutton"></a>

```json
{
  "callback_data": "string",
  "callback_game": null,
  "login_url": {
    "bot_username": "string",
    "forward_text": "string",
    "request_write_access": true,
    "url": "string"
  },
  "pay": true,
  "switch_inline_query": "string",
  "switch_inline_query_current_chat": "string",
  "text": "string",
  "url": "string"
}
```

This object represents one button of an inline keyboard. You **must** use exactly one of the optional fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_data|string|false|none|*Optional*. Data to be sent in a [callback query](https://core.telegram.org/bots/api/#callbackquery) to the bot when button is pressed, 1-64 bytes|
|callback_game|[CallbackGame](#schemacallbackgame)|false|none|A placeholder, currently holds no information. Use [BotFather](https://t.me/botfather) to set up your game.|
|login_url|[LoginUrl](#schemaloginurl)|false|none|This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login) when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:<br><br>Telegram apps support these buttons as of [version 5.7](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots).<br><br>Sample bot: [@discussbot](https://t.me/discussbot)|
|pay|boolean|false|none|*Optional*. Specify True, to send a [Pay button](https://core.telegram.org/bots/api/#payments).  <br><br>**NOTE:** This type of button **must** always be the first button in the first row.|
|switch_inline_query|string|false|none|*Optional*. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. Can be empty, in which case just the bot's username will be inserted.  <br><br>**Note:** This offers an easy way for users to start using your bot in [inline mode](/bots/inline) when they are currently in a private chat with it. Especially useful when combined with [*switch\_pm…*](https://core.telegram.org/bots/api/#answerinlinequery) actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen.|
|switch_inline_query_current_chat|string|false|none|*Optional*. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot's username will be inserted.  <br><br>This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options.|
|text|string|true|none|Label text on the button|
|url|string|false|none|*Optional*. HTTP or tg:// url to be opened when button is pressed|

<h2 id="tocS_InlineKeyboardMarkup">InlineKeyboardMarkup</h2>
<!-- backwards compatibility -->
<a id="schemainlinekeyboardmarkup"></a>
<a id="schema_InlineKeyboardMarkup"></a>
<a id="tocSinlinekeyboardmarkup"></a>
<a id="tocsinlinekeyboardmarkup"></a>

```json
{
  "inline_keyboard": [
    [
      {
        "callback_data": "string",
        "callback_game": null,
        "login_url": {
          "bot_username": "string",
          "forward_text": "string",
          "request_write_access": true,
          "url": "string"
        },
        "pay": true,
        "switch_inline_query": "string",
        "switch_inline_query_current_chat": "string",
        "text": "string",
        "url": "string"
      }
    ]
  ]
}
```

This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inline_keyboard|[[[InlineKeyboardButton](#schemainlinekeyboardbutton)]]|true|none|Array of button rows, each represented by an Array of [InlineKeyboardButton](https://core.telegram.org/bots/api/#inlinekeyboardbutton) objects|

<h2 id="tocS_InlineQuery">InlineQuery</h2>
<!-- backwards compatibility -->
<a id="schemainlinequery"></a>
<a id="schema_InlineQuery"></a>
<a id="tocSinlinequery"></a>
<a id="tocsinlinequery"></a>

```json
{
  "from": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  },
  "id": "string",
  "location": {
    "heading": 0,
    "horizontal_accuracy": 0,
    "latitude": 0,
    "live_period": 0,
    "longitude": 0,
    "proximity_alert_radius": 0
  },
  "offset": "string",
  "query": "string"
}
```

This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|[User](#schemauser)|true|none|This object represents a Telegram user or bot.|
|id|string|true|none|Unique identifier for this query|
|location|[Location](#schemalocation)|false|none|This object represents a point on the map.|
|offset|string|true|none|Offset of the results to be returned, can be controlled by the bot|
|query|string|true|none|Text of the query (up to 256 characters)|

<h2 id="tocS_InlineQueryResult">InlineQueryResult</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresult"></a>
<a id="schema_InlineQueryResult"></a>
<a id="tocSinlinequeryresult"></a>
<a id="tocsinlinequeryresult"></a>

```json
{
  "audio_file_id": "string",
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "type": "string"
}
```

This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[InlineQueryResultCachedAudio](#schemainlinequeryresultcachedaudio)|false|none|Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the audio.|
|*anyOf*|[InlineQueryResultCachedDocument](#schemainlinequeryresultcacheddocument)|false|none|Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the file.|
|*anyOf*|[InlineQueryResultCachedGif](#schemainlinequeryresultcachedgif)|false|none|Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with specified content instead of the animation.|
|*anyOf*|[InlineQueryResultCachedMpeg4Gif](#schemainlinequeryresultcachedmpeg4gif)|false|none|Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the animation.|
|*anyOf*|[InlineQueryResultCachedPhoto](#schemainlinequeryresultcachedphoto)|false|none|Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the photo.|
|*anyOf*|[InlineQueryResultCachedSticker](#schemainlinequeryresultcachedsticker)|false|none|Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the sticker.|
|*anyOf*|[InlineQueryResultCachedVideo](#schemainlinequeryresultcachedvideo)|false|none|Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the video.|
|*anyOf*|[InlineQueryResultCachedVoice](#schemainlinequeryresultcachedvoice)|false|none|Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the voice message.|
|*anyOf*|[InlineQueryResultArticle](#schemainlinequeryresultarticle)|false|none|Represents a link to an article or web page.|
|*anyOf*|[InlineQueryResultAudio](#schemainlinequeryresultaudio)|false|none|Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the audio.|
|*anyOf*|[InlineQueryResultContact](#schemainlinequeryresultcontact)|false|none|Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the contact.|
|*anyOf*|[InlineQueryResultGame](#schemainlinequeryresultgame)|false|none|Represents a [Game](https://core.telegram.org/bots/api/#games).|
|*anyOf*|[InlineQueryResultDocument](#schemainlinequeryresultdocument)|false|none|Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the file. Currently, only **.PDF** and **.ZIP** files can be sent using this method.|
|*anyOf*|[InlineQueryResultGif](#schemainlinequeryresultgif)|false|none|Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the animation.|
|*anyOf*|[InlineQueryResultLocation](#schemainlinequeryresultlocation)|false|none|Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the location.|
|*anyOf*|[InlineQueryResultMpeg4Gif](#schemainlinequeryresultmpeg4gif)|false|none|Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the animation.|
|*anyOf*|[InlineQueryResultPhoto](#schemainlinequeryresultphoto)|false|none|Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the photo.|
|*anyOf*|[InlineQueryResultVenue](#schemainlinequeryresultvenue)|false|none|Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the venue.|
|*anyOf*|[InlineQueryResultVideo](#schemainlinequeryresultvideo)|false|none|Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the video.<br><br>If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you **must** replace its content using *input\_message\_content*.|
|*anyOf*|[InlineQueryResultVoice](#schemainlinequeryresultvoice)|false|none|Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the the voice message.|

<h2 id="tocS_InlineQueryResultArticle">InlineQueryResultArticle</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultarticle"></a>
<a id="schema_InlineQueryResultArticle"></a>
<a id="tocSinlinequeryresultarticle"></a>
<a id="tocsinlinequeryresultarticle"></a>

```json
{
  "description": "string",
  "hide_url": true,
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "thumb_height": 0,
  "thumb_url": "string",
  "thumb_width": 0,
  "title": "string",
  "type": "string",
  "url": "string"
}
```

Represents a link to an article or web page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|*Optional*. Short description of the result|
|hide_url|boolean|false|none|*Optional*. Pass *True*, if you don't want the URL to be shown in the message|
|id|string|true|none|Unique identifier for this result, 1-64 Bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|true|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|thumb_height|integer|false|none|*Optional*. Thumbnail height|
|thumb_url|string|false|none|*Optional*. Url of the thumbnail for the result|
|thumb_width|integer|false|none|*Optional*. Thumbnail width|
|title|string|true|none|Title of the result|
|type|string|true|none|Type of the result, must be *article*|
|url|string|false|none|*Optional*. URL of the result|

<h2 id="tocS_InlineQueryResultAudio">InlineQueryResultAudio</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultaudio"></a>
<a id="schema_InlineQueryResultAudio"></a>
<a id="tocSinlinequeryresultaudio"></a>
<a id="tocsinlinequeryresultaudio"></a>

```json
{
  "audio_duration": 0,
  "audio_url": "string",
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "parse_mode": "string",
  "performer": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "title": "string",
  "type": "string"
}
```

Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the audio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_duration|integer|false|none|*Optional*. Audio duration in seconds|
|audio_url|string|true|none|A valid URL for the audio file|
|caption|string|false|none|*Optional*. Caption, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the audio caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|performer|string|false|none|*Optional*. Performer|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|title|string|true|none|Title|
|type|string|true|none|Type of the result, must be *audio*|

<h2 id="tocS_InlineQueryResultCachedAudio">InlineQueryResultCachedAudio</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultcachedaudio"></a>
<a id="schema_InlineQueryResultCachedAudio"></a>
<a id="tocSinlinequeryresultcachedaudio"></a>
<a id="tocsinlinequeryresultcachedaudio"></a>

```json
{
  "audio_file_id": "string",
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "type": "string"
}
```

Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the audio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_file_id|string|true|none|A valid file identifier for the audio file|
|caption|string|false|none|*Optional*. Caption, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the audio caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|type|string|true|none|Type of the result, must be *audio*|

<h2 id="tocS_InlineQueryResultCachedDocument">InlineQueryResultCachedDocument</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultcacheddocument"></a>
<a id="schema_InlineQueryResultCachedDocument"></a>
<a id="tocSinlinequeryresultcacheddocument"></a>
<a id="tocsinlinequeryresultcacheddocument"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "description": "string",
  "document_file_id": "string",
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "title": "string",
  "type": "string"
}
```

Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the document to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|description|string|false|none|*Optional*. Short description of the result|
|document_file_id|string|true|none|A valid file identifier for the file|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the document caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|title|string|true|none|Title for the result|
|type|string|true|none|Type of the result, must be *document*|

<h2 id="tocS_InlineQueryResultCachedGif">InlineQueryResultCachedGif</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultcachedgif"></a>
<a id="schema_InlineQueryResultCachedGif"></a>
<a id="tocSinlinequeryresultcachedgif"></a>
<a id="tocsinlinequeryresultcachedgif"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "gif_file_id": "string",
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "title": "string",
  "type": "string"
}
```

Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with specified content instead of the animation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the GIF file to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|gif_file_id|string|true|none|A valid file identifier for the GIF file|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|title|string|false|none|*Optional*. Title for the result|
|type|string|true|none|Type of the result, must be *gif*|

<h2 id="tocS_InlineQueryResultCachedMpeg4Gif">InlineQueryResultCachedMpeg4Gif</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultcachedmpeg4gif"></a>
<a id="schema_InlineQueryResultCachedMpeg4Gif"></a>
<a id="tocSinlinequeryresultcachedmpeg4gif"></a>
<a id="tocsinlinequeryresultcachedmpeg4gif"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "mpeg4_file_id": "string",
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "title": "string",
  "type": "string"
}
```

Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the animation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|mpeg4_file_id|string|true|none|A valid file identifier for the MP4 file|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|title|string|false|none|*Optional*. Title for the result|
|type|string|true|none|Type of the result, must be *mpeg4\_gif*|

<h2 id="tocS_InlineQueryResultCachedPhoto">InlineQueryResultCachedPhoto</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultcachedphoto"></a>
<a id="schema_InlineQueryResultCachedPhoto"></a>
<a id="tocSinlinequeryresultcachedphoto"></a>
<a id="tocsinlinequeryresultcachedphoto"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "description": "string",
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "parse_mode": "string",
  "photo_file_id": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "title": "string",
  "type": "string"
}
```

Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the photo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the photo to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|description|string|false|none|*Optional*. Short description of the result|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the photo caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|photo_file_id|string|true|none|A valid file identifier of the photo|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|title|string|false|none|*Optional*. Title for the result|
|type|string|true|none|Type of the result, must be *photo*|

<h2 id="tocS_InlineQueryResultCachedSticker">InlineQueryResultCachedSticker</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultcachedsticker"></a>
<a id="schema_InlineQueryResultCachedSticker"></a>
<a id="tocSinlinequeryresultcachedsticker"></a>
<a id="tocsinlinequeryresultcachedsticker"></a>

```json
{
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "sticker_file_id": "string",
  "type": "string"
}
```

Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the sticker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|sticker_file_id|string|true|none|A valid file identifier of the sticker|
|type|string|true|none|Type of the result, must be *sticker*|

<h2 id="tocS_InlineQueryResultCachedVideo">InlineQueryResultCachedVideo</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultcachedvideo"></a>
<a id="schema_InlineQueryResultCachedVideo"></a>
<a id="tocSinlinequeryresultcachedvideo"></a>
<a id="tocsinlinequeryresultcachedvideo"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "description": "string",
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "title": "string",
  "type": "string",
  "video_file_id": "string"
}
```

Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the video to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|description|string|false|none|*Optional*. Short description of the result|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the video caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|title|string|true|none|Title for the result|
|type|string|true|none|Type of the result, must be *video*|
|video_file_id|string|true|none|A valid file identifier for the video file|

<h2 id="tocS_InlineQueryResultCachedVoice">InlineQueryResultCachedVoice</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultcachedvoice"></a>
<a id="schema_InlineQueryResultCachedVoice"></a>
<a id="tocSinlinequeryresultcachedvoice"></a>
<a id="tocsinlinequeryresultcachedvoice"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "title": "string",
  "type": "string",
  "voice_file_id": "string"
}
```

Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the voice message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the voice message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|title|string|true|none|Voice message title|
|type|string|true|none|Type of the result, must be *voice*|
|voice_file_id|string|true|none|A valid file identifier for the voice message|

<h2 id="tocS_InlineQueryResultContact">InlineQueryResultContact</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultcontact"></a>
<a id="schema_InlineQueryResultContact"></a>
<a id="tocSinlinequeryresultcontact"></a>
<a id="tocsinlinequeryresultcontact"></a>

```json
{
  "first_name": "string",
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "last_name": "string",
  "phone_number": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "thumb_height": 0,
  "thumb_url": "string",
  "thumb_width": 0,
  "type": "string",
  "vcard": "string"
}
```

Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|Contact's first name|
|id|string|true|none|Unique identifier for this result, 1-64 Bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|last_name|string|false|none|*Optional*. Contact's last name|
|phone_number|string|true|none|Contact's phone number|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|thumb_height|integer|false|none|*Optional*. Thumbnail height|
|thumb_url|string|false|none|*Optional*. Url of the thumbnail for the result|
|thumb_width|integer|false|none|*Optional*. Thumbnail width|
|type|string|true|none|Type of the result, must be *contact*|
|vcard|string|false|none|*Optional*. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes|

<h2 id="tocS_InlineQueryResultDocument">InlineQueryResultDocument</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultdocument"></a>
<a id="schema_InlineQueryResultDocument"></a>
<a id="tocSinlinequeryresultdocument"></a>
<a id="tocsinlinequeryresultdocument"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "description": "string",
  "document_url": "string",
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "mime_type": "application/pdf",
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "thumb_height": 0,
  "thumb_url": "string",
  "thumb_width": 0,
  "title": "string",
  "type": "string"
}
```

Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the file. Currently, only **.PDF** and **.ZIP** files can be sent using this method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the document to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|description|string|false|none|*Optional*. Short description of the result|
|document_url|string|true|none|A valid URL for the file|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|mime_type|string|true|none|Mime type of the content of the file, either “application/pdf” or “application/zip”|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the document caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|thumb_height|integer|false|none|*Optional*. Thumbnail height|
|thumb_url|string|false|none|*Optional*. URL of the thumbnail (jpeg only) for the file|
|thumb_width|integer|false|none|*Optional*. Thumbnail width|
|title|string|true|none|Title for the result|
|type|string|true|none|Type of the result, must be *document*|

#### Enumerated Values

|Property|Value|
|---|---|
|mime_type|application/pdf|
|mime_type|application/zip|

<h2 id="tocS_InlineQueryResultGame">InlineQueryResultGame</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultgame"></a>
<a id="schema_InlineQueryResultGame"></a>
<a id="tocSinlinequeryresultgame"></a>
<a id="tocsinlinequeryresultgame"></a>

```json
{
  "game_short_name": "string",
  "id": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "type": "string"
}
```

Represents a [Game](https://core.telegram.org/bots/api/#games).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|game_short_name|string|true|none|Short name of the game|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|type|string|true|none|Type of the result, must be *game*|

<h2 id="tocS_InlineQueryResultGif">InlineQueryResultGif</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultgif"></a>
<a id="schema_InlineQueryResultGif"></a>
<a id="tocSinlinequeryresultgif"></a>
<a id="tocsinlinequeryresultgif"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "gif_duration": 0,
  "gif_height": 0,
  "gif_url": "string",
  "gif_width": 0,
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "thumb_mime_type": "image/jpeg",
  "thumb_url": "string",
  "title": "string",
  "type": "string"
}
```

Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the animation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the GIF file to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|gif_duration|integer|false|none|*Optional*. Duration of the GIF|
|gif_height|integer|false|none|*Optional*. Height of the GIF|
|gif_url|string|true|none|A valid URL for the GIF file. File size must not exceed 1MB|
|gif_width|integer|false|none|*Optional*. Width of the GIF|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|thumb_mime_type|string|false|none|*Optional*. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”|
|thumb_url|string|true|none|URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result|
|title|string|false|none|*Optional*. Title for the result|
|type|string|true|none|Type of the result, must be *gif*|

#### Enumerated Values

|Property|Value|
|---|---|
|thumb_mime_type|image/jpeg|
|thumb_mime_type|image/gif|
|thumb_mime_type|video/mp4|

<h2 id="tocS_InlineQueryResultLocation">InlineQueryResultLocation</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultlocation"></a>
<a id="schema_InlineQueryResultLocation"></a>
<a id="tocSinlinequeryresultlocation"></a>
<a id="tocsinlinequeryresultlocation"></a>

```json
{
  "heading": 0,
  "horizontal_accuracy": 0,
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "latitude": 0,
  "live_period": 0,
  "longitude": 0,
  "proximity_alert_radius": 0,
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "thumb_height": 0,
  "thumb_url": "string",
  "thumb_width": 0,
  "title": "string",
  "type": "string"
}
```

Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|heading|integer|false|none|*Optional*. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.|
|horizontal_accuracy|number|false|none|*Optional*. The radius of uncertainty for the location, measured in meters; 0-1500|
|id|string|true|none|Unique identifier for this result, 1-64 Bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|latitude|number|true|none|Location latitude in degrees|
|live_period|integer|false|none|*Optional*. Period in seconds for which the location can be updated, should be between 60 and 86400.|
|longitude|number|true|none|Location longitude in degrees|
|proximity_alert_radius|integer|false|none|*Optional*. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|thumb_height|integer|false|none|*Optional*. Thumbnail height|
|thumb_url|string|false|none|*Optional*. Url of the thumbnail for the result|
|thumb_width|integer|false|none|*Optional*. Thumbnail width|
|title|string|true|none|Location title|
|type|string|true|none|Type of the result, must be *location*|

<h2 id="tocS_InlineQueryResultMpeg4Gif">InlineQueryResultMpeg4Gif</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultmpeg4gif"></a>
<a id="schema_InlineQueryResultMpeg4Gif"></a>
<a id="tocSinlinequeryresultmpeg4gif"></a>
<a id="tocsinlinequeryresultmpeg4gif"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "mpeg4_duration": 0,
  "mpeg4_height": 0,
  "mpeg4_url": "string",
  "mpeg4_width": 0,
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "thumb_mime_type": "image/jpeg",
  "thumb_url": "string",
  "title": "string",
  "type": "string"
}
```

Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the animation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|mpeg4_duration|integer|false|none|*Optional*. Video duration|
|mpeg4_height|integer|false|none|*Optional*. Video height|
|mpeg4_url|string|true|none|A valid URL for the MP4 file. File size must not exceed 1MB|
|mpeg4_width|integer|false|none|*Optional*. Video width|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|thumb_mime_type|string|false|none|*Optional*. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”|
|thumb_url|string|true|none|URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result|
|title|string|false|none|*Optional*. Title for the result|
|type|string|true|none|Type of the result, must be *mpeg4\_gif*|

#### Enumerated Values

|Property|Value|
|---|---|
|thumb_mime_type|image/jpeg|
|thumb_mime_type|image/gif|
|thumb_mime_type|video/mp4|

<h2 id="tocS_InlineQueryResultPhoto">InlineQueryResultPhoto</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultphoto"></a>
<a id="schema_InlineQueryResultPhoto"></a>
<a id="tocSinlinequeryresultphoto"></a>
<a id="tocsinlinequeryresultphoto"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "description": "string",
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "parse_mode": "string",
  "photo_height": 0,
  "photo_url": "string",
  "photo_width": 0,
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "thumb_url": "string",
  "title": "string",
  "type": "string"
}
```

Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the photo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the photo to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|description|string|false|none|*Optional*. Short description of the result|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the photo caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|photo_height|integer|false|none|*Optional*. Height of the photo|
|photo_url|string|true|none|A valid URL of the photo. Photo must be in **jpeg** format. Photo size must not exceed 5MB|
|photo_width|integer|false|none|*Optional*. Width of the photo|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|thumb_url|string|true|none|URL of the thumbnail for the photo|
|title|string|false|none|*Optional*. Title for the result|
|type|string|true|none|Type of the result, must be *photo*|

<h2 id="tocS_InlineQueryResultVenue">InlineQueryResultVenue</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultvenue"></a>
<a id="schema_InlineQueryResultVenue"></a>
<a id="tocSinlinequeryresultvenue"></a>
<a id="tocsinlinequeryresultvenue"></a>

```json
{
  "address": "string",
  "foursquare_id": "string",
  "foursquare_type": "string",
  "google_place_id": "string",
  "google_place_type": "string",
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "latitude": 0,
  "longitude": 0,
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "thumb_height": 0,
  "thumb_url": "string",
  "thumb_width": 0,
  "title": "string",
  "type": "string"
}
```

Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the venue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Address of the venue|
|foursquare_id|string|false|none|*Optional*. Foursquare identifier of the venue if known|
|foursquare_type|string|false|none|*Optional*. Foursquare type of the venue, if known. (For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.)|
|google_place_id|string|false|none|*Optional*. Google Places identifier of the venue|
|google_place_type|string|false|none|*Optional*. Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).)|
|id|string|true|none|Unique identifier for this result, 1-64 Bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|latitude|number|true|none|Latitude of the venue location in degrees|
|longitude|number|true|none|Longitude of the venue location in degrees|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|thumb_height|integer|false|none|*Optional*. Thumbnail height|
|thumb_url|string|false|none|*Optional*. Url of the thumbnail for the result|
|thumb_width|integer|false|none|*Optional*. Thumbnail width|
|title|string|true|none|Title of the venue|
|type|string|true|none|Type of the result, must be *venue*|

<h2 id="tocS_InlineQueryResultVideo">InlineQueryResultVideo</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultvideo"></a>
<a id="schema_InlineQueryResultVideo"></a>
<a id="tocSinlinequeryresultvideo"></a>
<a id="tocsinlinequeryresultvideo"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "description": "string",
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "mime_type": "string",
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "thumb_url": "string",
  "title": "string",
  "type": "string",
  "video_duration": 0,
  "video_height": 0,
  "video_url": "string",
  "video_width": 0
}
```

Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the video.

If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you **must** replace its content using *input\_message\_content*.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the video to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|description|string|false|none|*Optional*. Short description of the result|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|mime_type|string|true|none|Mime type of the content of video url, “text/html” or “video/mp4”|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the video caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|thumb_url|string|true|none|URL of the thumbnail (jpeg only) for the video|
|title|string|true|none|Title for the result|
|type|string|true|none|Type of the result, must be *video*|
|video_duration|integer|false|none|*Optional*. Video duration in seconds|
|video_height|integer|false|none|*Optional*. Video height|
|video_url|string|true|none|A valid URL for the embedded video player or video file|
|video_width|integer|false|none|*Optional*. Video width|

<h2 id="tocS_InlineQueryResultVoice">InlineQueryResultVoice</h2>
<!-- backwards compatibility -->
<a id="schemainlinequeryresultvoice"></a>
<a id="schema_InlineQueryResultVoice"></a>
<a id="tocSinlinequeryresultvoice"></a>
<a id="tocsinlinequeryresultvoice"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "id": "string",
  "input_message_content": {
    "disable_web_page_preview": true,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "message_text": "string",
    "parse_mode": "string"
  },
  "parse_mode": "string",
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "title": "string",
  "type": "string",
  "voice_duration": 0,
  "voice_url": "string"
}
```

Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use *input\_message\_content* to send a message with the specified content instead of the the voice message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|id|string|true|none|Unique identifier for this result, 1-64 bytes|
|input_message_content|[InputMessageContent](#schemainputmessagecontent)|false|none|This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the voice message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|title|string|true|none|Recording title|
|type|string|true|none|Type of the result, must be *voice*|
|voice_duration|integer|false|none|*Optional*. Recording duration in seconds|
|voice_url|string|true|none|A valid URL for the voice recording|

<h2 id="tocS_InputContactMessageContent">InputContactMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemainputcontactmessagecontent"></a>
<a id="schema_InputContactMessageContent"></a>
<a id="tocSinputcontactmessagecontent"></a>
<a id="tocsinputcontactmessagecontent"></a>

```json
{
  "first_name": "string",
  "last_name": "string",
  "phone_number": "string",
  "vcard": "string"
}
```

Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a contact message to be sent as the result of an inline query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|Contact's first name|
|last_name|string|false|none|*Optional*. Contact's last name|
|phone_number|string|true|none|Contact's phone number|
|vcard|string|false|none|*Optional*. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes|

<h2 id="tocS_InputFile">InputFile</h2>
<!-- backwards compatibility -->
<a id="schemainputfile"></a>
<a id="schema_InputFile"></a>
<a id="tocSinputfile"></a>
<a id="tocsinputfile"></a>

```json
null
```

This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.

<h2 id="tocS_InputLocationMessageContent">InputLocationMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemainputlocationmessagecontent"></a>
<a id="schema_InputLocationMessageContent"></a>
<a id="tocSinputlocationmessagecontent"></a>
<a id="tocsinputlocationmessagecontent"></a>

```json
{
  "heading": 0,
  "horizontal_accuracy": 0,
  "latitude": 0,
  "live_period": 0,
  "longitude": 0,
  "proximity_alert_radius": 0
}
```

Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a location message to be sent as the result of an inline query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|heading|integer|false|none|*Optional*. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.|
|horizontal_accuracy|number|false|none|*Optional*. The radius of uncertainty for the location, measured in meters; 0-1500|
|latitude|number|true|none|Latitude of the location in degrees|
|live_period|integer|false|none|*Optional*. Period in seconds for which the location can be updated, should be between 60 and 86400.|
|longitude|number|true|none|Longitude of the location in degrees|
|proximity_alert_radius|integer|false|none|*Optional*. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.|

<h2 id="tocS_InputMedia">InputMedia</h2>
<!-- backwards compatibility -->
<a id="schemainputmedia"></a>
<a id="schema_InputMedia"></a>
<a id="tocSinputmedia"></a>
<a id="tocsinputmedia"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "duration": 0,
  "height": 0,
  "media": "string",
  "parse_mode": "string",
  "thumb": null,
  "type": "string",
  "width": 0
}
```

This object represents the content of a media message to be sent. It should be one of

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[InputMediaAnimation](#schemainputmediaanimation)|false|none|Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.|
|*anyOf*|[InputMediaDocument](#schemainputmediadocument)|false|none|Represents a general file to be sent.|
|*anyOf*|[InputMediaAudio](#schemainputmediaaudio)|false|none|Represents an audio file to be treated as music to be sent.|
|*anyOf*|[InputMediaPhoto](#schemainputmediaphoto)|false|none|Represents a photo to be sent.|
|*anyOf*|[InputMediaVideo](#schemainputmediavideo)|false|none|Represents a video to be sent.|

<h2 id="tocS_InputMediaAnimation">InputMediaAnimation</h2>
<!-- backwards compatibility -->
<a id="schemainputmediaanimation"></a>
<a id="schema_InputMediaAnimation"></a>
<a id="tocSinputmediaanimation"></a>
<a id="tocsinputmediaanimation"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "duration": 0,
  "height": 0,
  "media": "string",
  "parse_mode": "string",
  "thumb": null,
  "type": "string",
  "width": 0
}
```

Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the animation to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|duration|integer|false|none|*Optional*. Animation duration|
|height|integer|false|none|*Optional*. Animation height|
|media|string|true|none|File to send. Pass a file\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\_attach\_name>” to upload a new one using multipart/form-data under <file\_attach\_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the animation caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|thumb|[InputFile](#schemainputfile) \| string|false|none|*Optional*. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|type|string|true|none|Type of the result, must be *animation*|
|width|integer|false|none|*Optional*. Animation width|

<h2 id="tocS_InputMediaAudio">InputMediaAudio</h2>
<!-- backwards compatibility -->
<a id="schemainputmediaaudio"></a>
<a id="schema_InputMediaAudio"></a>
<a id="tocSinputmediaaudio"></a>
<a id="tocsinputmediaaudio"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "duration": 0,
  "media": "string",
  "parse_mode": "string",
  "performer": "string",
  "thumb": null,
  "title": "string",
  "type": "string"
}
```

Represents an audio file to be treated as music to be sent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the audio to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|duration|integer|false|none|*Optional*. Duration of the audio in seconds|
|media|string|true|none|File to send. Pass a file\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\_attach\_name>” to upload a new one using multipart/form-data under <file\_attach\_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the audio caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|performer|string|false|none|*Optional*. Performer of the audio|
|thumb|[InputFile](#schemainputfile) \| string|false|none|*Optional*. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|title|string|false|none|*Optional*. Title of the audio|
|type|string|true|none|Type of the result, must be *audio*|

<h2 id="tocS_InputMediaDocument">InputMediaDocument</h2>
<!-- backwards compatibility -->
<a id="schemainputmediadocument"></a>
<a id="schema_InputMediaDocument"></a>
<a id="tocSinputmediadocument"></a>
<a id="tocsinputmediadocument"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "disable_content_type_detection": true,
  "media": "string",
  "parse_mode": "string",
  "thumb": null,
  "type": "string"
}
```

Represents a general file to be sent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the document to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|disable_content_type_detection|boolean|false|none|*Optional*. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always true, if the document is sent as part of an album.|
|media|string|true|none|File to send. Pass a file\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\_attach\_name>” to upload a new one using multipart/form-data under <file\_attach\_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the document caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|thumb|[InputFile](#schemainputfile) \| string|false|none|*Optional*. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|type|string|true|none|Type of the result, must be *document*|

<h2 id="tocS_InputMediaPhoto">InputMediaPhoto</h2>
<!-- backwards compatibility -->
<a id="schemainputmediaphoto"></a>
<a id="schema_InputMediaPhoto"></a>
<a id="tocSinputmediaphoto"></a>
<a id="tocsinputmediaphoto"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "media": "string",
  "parse_mode": "string",
  "type": "string"
}
```

Represents a photo to be sent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the photo to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|media|string|true|none|File to send. Pass a file\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\_attach\_name>” to upload a new one using multipart/form-data under <file\_attach\_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the photo caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|type|string|true|none|Type of the result, must be *photo*|

<h2 id="tocS_InputMediaVideo">InputMediaVideo</h2>
<!-- backwards compatibility -->
<a id="schemainputmediavideo"></a>
<a id="schema_InputMediaVideo"></a>
<a id="tocSinputmediavideo"></a>
<a id="tocsinputmediavideo"></a>

```json
{
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "duration": 0,
  "height": 0,
  "media": "string",
  "parse_mode": "string",
  "supports_streaming": true,
  "thumb": null,
  "type": "string",
  "width": 0
}
```

Represents a video to be sent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|*Optional*. Caption of the video to be sent, 0-1024 characters after entities parsing|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\_mode*|
|duration|integer|false|none|*Optional*. Video duration|
|height|integer|false|none|*Optional*. Video height|
|media|string|true|none|File to send. Pass a file\_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file\_attach\_name>” to upload a new one using multipart/form-data under <file\_attach\_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the video caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|
|supports_streaming|boolean|false|none|*Optional*. Pass *True*, if the uploaded video is suitable for streaming|
|thumb|[InputFile](#schemainputfile) \| string|false|none|*Optional*. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file\_attach\_name>” if the thumbnail was uploaded using multipart/form-data under <file\_attach\_name>. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)|
|type|string|true|none|Type of the result, must be *video*|
|width|integer|false|none|*Optional*. Video width|

<h2 id="tocS_InputMessageContent">InputMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemainputmessagecontent"></a>
<a id="schema_InputMessageContent"></a>
<a id="tocSinputmessagecontent"></a>
<a id="tocsinputmessagecontent"></a>

```json
{
  "disable_web_page_preview": true,
  "entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "message_text": "string",
  "parse_mode": "string"
}
```

This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[InputTextMessageContent](#schemainputtextmessagecontent)|false|none|Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a text message to be sent as the result of an inline query.|
|*anyOf*|[InputLocationMessageContent](#schemainputlocationmessagecontent)|false|none|Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a location message to be sent as the result of an inline query.|
|*anyOf*|[InputVenueMessageContent](#schemainputvenuemessagecontent)|false|none|Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a venue message to be sent as the result of an inline query.|
|*anyOf*|[InputContactMessageContent](#schemainputcontactmessagecontent)|false|none|Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a contact message to be sent as the result of an inline query.|

<h2 id="tocS_InputTextMessageContent">InputTextMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemainputtextmessagecontent"></a>
<a id="schema_InputTextMessageContent"></a>
<a id="tocSinputtextmessagecontent"></a>
<a id="tocsinputtextmessagecontent"></a>

```json
{
  "disable_web_page_preview": true,
  "entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "message_text": "string",
  "parse_mode": "string"
}
```

Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a text message to be sent as the result of an inline query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disable_web_page_preview|boolean|false|none|*Optional*. Disables link previews for links in the sent message|
|entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. List of special entities that appear in message text, which can be specified instead of *parse\_mode*|
|message_text|string|true|none|Text of the message to be sent, 1-4096 characters|
|parse_mode|string|false|none|*Optional*. Mode for parsing entities in the message text. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details.|

<h2 id="tocS_InputVenueMessageContent">InputVenueMessageContent</h2>
<!-- backwards compatibility -->
<a id="schemainputvenuemessagecontent"></a>
<a id="schema_InputVenueMessageContent"></a>
<a id="tocSinputvenuemessagecontent"></a>
<a id="tocsinputvenuemessagecontent"></a>

```json
{
  "address": "string",
  "foursquare_id": "string",
  "foursquare_type": "string",
  "google_place_id": "string",
  "google_place_type": "string",
  "latitude": 0,
  "longitude": 0,
  "title": "string"
}
```

Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a venue message to be sent as the result of an inline query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Address of the venue|
|foursquare_id|string|false|none|*Optional*. Foursquare identifier of the venue, if known|
|foursquare_type|string|false|none|*Optional*. Foursquare type of the venue, if known. (For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.)|
|google_place_id|string|false|none|*Optional*. Google Places identifier of the venue|
|google_place_type|string|false|none|*Optional*. Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).)|
|latitude|number|true|none|Latitude of the venue in degrees|
|longitude|number|true|none|Longitude of the venue in degrees|
|title|string|true|none|Name of the venue|

<h2 id="tocS_Invoice">Invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoice"></a>
<a id="schema_Invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "currency": "string",
  "description": "string",
  "start_parameter": "string",
  "title": "string",
  "total_amount": 0
}
```

This object contains basic information about an invoice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|Three-letter ISO 4217 [currency](/bots/payments#supported-currencies) code|
|description|string|true|none|Product description|
|start_parameter|string|true|none|Unique bot deep-linking parameter that can be used to generate this invoice|
|title|string|true|none|Product name|
|total_amount|integer|true|none|Total price in the *smallest units* of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the *exp* parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).|

<h2 id="tocS_KeyboardButton">KeyboardButton</h2>
<!-- backwards compatibility -->
<a id="schemakeyboardbutton"></a>
<a id="schema_KeyboardButton"></a>
<a id="tocSkeyboardbutton"></a>
<a id="tocskeyboardbutton"></a>

```json
{
  "request_contact": true,
  "request_location": true,
  "request_poll": {
    "type": "string"
  },
  "text": "string"
}
```

This object represents one button of the reply keyboard. For simple text buttons *String* can be used instead of this object to specify text of the button. Optional fields *request\_contact*, *request\_location*, and *request\_poll* are mutually exclusive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_contact|boolean|false|none|*Optional*. If *True*, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only|
|request_location|boolean|false|none|*Optional*. If *True*, the user's current location will be sent when the button is pressed. Available in private chats only|
|request_poll|[KeyboardButtonPollType](#schemakeyboardbuttonpolltype)|false|none|This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.|
|text|string|true|none|Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed|

<h2 id="tocS_KeyboardButtonPollType">KeyboardButtonPollType</h2>
<!-- backwards compatibility -->
<a id="schemakeyboardbuttonpolltype"></a>
<a id="schema_KeyboardButtonPollType"></a>
<a id="tocSkeyboardbuttonpolltype"></a>
<a id="tocskeyboardbuttonpolltype"></a>

```json
{
  "type": "string"
}
```

This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|*Optional*. If *quiz* is passed, the user will be allowed to create only polls in the quiz mode. If *regular* is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.|

<h2 id="tocS_LabeledPrice">LabeledPrice</h2>
<!-- backwards compatibility -->
<a id="schemalabeledprice"></a>
<a id="schema_LabeledPrice"></a>
<a id="tocSlabeledprice"></a>
<a id="tocslabeledprice"></a>

```json
{
  "amount": 0,
  "label": "string"
}
```

This object represents a portion of the price for goods or services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|true|none|Price of the product in the *smallest units* of the [currency](/bots/payments#supported-currencies) (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the *exp* parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).|
|label|string|true|none|Portion label|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "heading": 0,
  "horizontal_accuracy": 0,
  "latitude": 0,
  "live_period": 0,
  "longitude": 0,
  "proximity_alert_radius": 0
}
```

This object represents a point on the map.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|heading|integer|false|none|*Optional*. The direction in which user is moving, in degrees; 1-360. For active live locations only.|
|horizontal_accuracy|number|false|none|*Optional*. The radius of uncertainty for the location, measured in meters; 0-1500|
|latitude|number|true|none|Latitude as defined by sender|
|live_period|integer|false|none|*Optional*. Time relative to the message sending date, during which the location can be updated, in seconds. For active live locations only.|
|longitude|number|true|none|Longitude as defined by sender|
|proximity_alert_radius|integer|false|none|*Optional*. Maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.|

<h2 id="tocS_LoginUrl">LoginUrl</h2>
<!-- backwards compatibility -->
<a id="schemaloginurl"></a>
<a id="schema_LoginUrl"></a>
<a id="tocSloginurl"></a>
<a id="tocsloginurl"></a>

```json
{
  "bot_username": "string",
  "forward_text": "string",
  "request_write_access": true,
  "url": "string"
}
```

This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login) when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:

Telegram apps support these buttons as of [version 5.7](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots).

Sample bot: [@discussbot](https://t.me/discussbot)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bot_username|string|false|none|*Optional*. Username of a bot, which will be used for user authorization. See [Setting up a bot](https://core.telegram.org/widgets/login#setting-up-a-bot) for more details. If not specified, the current bot's username will be assumed. The *url*'s domain must be the same as the domain linked with the bot. See [Linking your domain to the bot](https://core.telegram.org/widgets/login#linking-your-domain-to-the-bot) for more details.|
|forward_text|string|false|none|*Optional*. New text of the button in forwarded messages.|
|request_write_access|boolean|false|none|*Optional*. Pass True to request the permission for your bot to send messages to the user.|
|url|string|true|none|An HTTP URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in [Receiving authorization data](https://core.telegram.org/widgets/login#receiving-authorization-data).  <br><br>**NOTE:** You **must** always check the hash of the received data to verify the authentication and the integrity of the data as described in [Checking authorization](https://core.telegram.org/widgets/login#checking-authorization).|

<h2 id="tocS_MaskPosition">MaskPosition</h2>
<!-- backwards compatibility -->
<a id="schemamaskposition"></a>
<a id="schema_MaskPosition"></a>
<a id="tocSmaskposition"></a>
<a id="tocsmaskposition"></a>

```json
{
  "point": "forehead",
  "scale": 0,
  "x_shift": 0,
  "y_shift": 0
}
```

This object describes the position on faces where a mask should be placed by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|point|string|true|none|The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.|
|scale|number|true|none|Mask scaling coefficient. For example, 2.0 means double size.|
|x_shift|number|true|none|Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.|
|y_shift|number|true|none|Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.|

#### Enumerated Values

|Property|Value|
|---|---|
|point|forehead|
|point|eyes|
|point|mouth|
|point|chin|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "animation": {
    "duration": 0,
    "file_id": "string",
    "file_name": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "height": 0,
    "mime_type": "string",
    "thumb": {
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "width": 0
    },
    "width": 0
  },
  "audio": {
    "duration": 0,
    "file_id": "string",
    "file_name": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "mime_type": "string",
    "performer": "string",
    "thumb": {
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "width": 0
    },
    "title": "string"
  },
  "author_signature": "string",
  "caption": "string",
  "caption_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "channel_chat_created": true,
  "chat": {
    "bio": "string",
    "can_set_sticker_set": true,
    "description": "string",
    "first_name": "string",
    "id": 0,
    "invite_link": "string",
    "last_name": "string",
    "linked_chat_id": 0,
    "location": {
      "address": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      }
    },
    "permissions": {
      "can_add_web_page_previews": true,
      "can_change_info": true,
      "can_invite_users": true,
      "can_pin_messages": true,
      "can_send_media_messages": true,
      "can_send_messages": true,
      "can_send_other_messages": true,
      "can_send_polls": true
    },
    "photo": {
      "big_file_id": "string",
      "big_file_unique_id": "string",
      "small_file_id": "string",
      "small_file_unique_id": "string"
    },
    "pinned_message": {},
    "slow_mode_delay": 0,
    "sticker_set_name": "string",
    "title": "string",
    "type": "private",
    "username": "string"
  },
  "connected_website": "string",
  "contact": {
    "first_name": "string",
    "last_name": "string",
    "phone_number": "string",
    "user_id": 0,
    "vcard": "string"
  },
  "date": 0,
  "delete_chat_photo": true,
  "dice": {
    "emoji": "string",
    "value": 0
  },
  "document": {
    "file_id": "string",
    "file_name": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "mime_type": "string",
    "thumb": {
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "width": 0
    }
  },
  "edit_date": 0,
  "entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "forward_date": 0,
  "forward_from": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  },
  "forward_from_chat": {
    "bio": "string",
    "can_set_sticker_set": true,
    "description": "string",
    "first_name": "string",
    "id": 0,
    "invite_link": "string",
    "last_name": "string",
    "linked_chat_id": 0,
    "location": {
      "address": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      }
    },
    "permissions": {
      "can_add_web_page_previews": true,
      "can_change_info": true,
      "can_invite_users": true,
      "can_pin_messages": true,
      "can_send_media_messages": true,
      "can_send_messages": true,
      "can_send_other_messages": true,
      "can_send_polls": true
    },
    "photo": {
      "big_file_id": "string",
      "big_file_unique_id": "string",
      "small_file_id": "string",
      "small_file_unique_id": "string"
    },
    "pinned_message": {},
    "slow_mode_delay": 0,
    "sticker_set_name": "string",
    "title": "string",
    "type": "private",
    "username": "string"
  },
  "forward_from_message_id": 0,
  "forward_sender_name": "string",
  "forward_signature": "string",
  "from": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  },
  "game": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "description": "string",
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "text": "string",
    "text_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "title": "string"
  },
  "group_chat_created": true,
  "invoice": {
    "currency": "string",
    "description": "string",
    "start_parameter": "string",
    "title": "string",
    "total_amount": 0
  },
  "left_chat_member": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  },
  "location": {
    "heading": 0,
    "horizontal_accuracy": 0,
    "latitude": 0,
    "live_period": 0,
    "longitude": 0,
    "proximity_alert_radius": 0
  },
  "media_group_id": "string",
  "message_id": 0,
  "migrate_from_chat_id": 0,
  "migrate_to_chat_id": 0,
  "new_chat_members": [
    {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    }
  ],
  "new_chat_photo": [
    {
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "width": 0
    }
  ],
  "new_chat_title": "string",
  "passport_data": {
    "credentials": {
      "data": "string",
      "hash": "string",
      "secret": "string"
    },
    "data": [
      {
        "data": "string",
        "email": "string",
        "files": [
          {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          }
        ],
        "front_side": {
          "file_date": 0,
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string"
        },
        "hash": "string",
        "phone_number": "string",
        "reverse_side": {
          "file_date": 0,
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string"
        },
        "selfie": {
          "file_date": 0,
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string"
        },
        "translation": [
          {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          }
        ],
        "type": "personal_details"
      }
    ]
  },
  "photo": [
    {
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "width": 0
    }
  ],
  "pinned_message": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  },
  "poll": {
    "allows_multiple_answers": true,
    "close_date": 0,
    "correct_option_id": 0,
    "explanation": "string",
    "explanation_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "id": "string",
    "is_anonymous": true,
    "is_closed": true,
    "open_period": 0,
    "options": [
      {
        "text": "string",
        "voter_count": 0
      }
    ],
    "question": "string",
    "total_voter_count": 0,
    "type": "string"
  },
  "proximity_alert_triggered": {
    "distance": 0,
    "traveler": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "watcher": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    }
  },
  "reply_markup": {
    "inline_keyboard": [
      [
        {
          "callback_data": "string",
          "callback_game": null,
          "login_url": {
            "bot_username": "string",
            "forward_text": "string",
            "request_write_access": true,
            "url": "string"
          },
          "pay": true,
          "switch_inline_query": "string",
          "switch_inline_query_current_chat": "string",
          "text": "string",
          "url": "string"
        }
      ]
    ]
  },
  "reply_to_message": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  },
  "sender_chat": {
    "bio": "string",
    "can_set_sticker_set": true,
    "description": "string",
    "first_name": "string",
    "id": 0,
    "invite_link": "string",
    "last_name": "string",
    "linked_chat_id": 0,
    "location": {
      "address": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      }
    },
    "permissions": {
      "can_add_web_page_previews": true,
      "can_change_info": true,
      "can_invite_users": true,
      "can_pin_messages": true,
      "can_send_media_messages": true,
      "can_send_messages": true,
      "can_send_other_messages": true,
      "can_send_polls": true
    },
    "photo": {
      "big_file_id": "string",
      "big_file_unique_id": "string",
      "small_file_id": "string",
      "small_file_unique_id": "string"
    },
    "pinned_message": {},
    "slow_mode_delay": 0,
    "sticker_set_name": "string",
    "title": "string",
    "type": "private",
    "username": "string"
  },
  "sticker": {
    "emoji": "string",
    "file_id": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "height": 0,
    "is_animated": true,
    "mask_position": {
      "point": "forehead",
      "scale": 0,
      "x_shift": 0,
      "y_shift": 0
    },
    "set_name": "string",
    "thumb": {
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "width": 0
    },
    "width": 0
  },
  "successful_payment": {
    "currency": "string",
    "invoice_payload": "string",
    "order_info": {
      "email": "string",
      "name": "string",
      "phone_number": "string",
      "shipping_address": {
        "city": "string",
        "country_code": "string",
        "post_code": "string",
        "state": "string",
        "street_line1": "string",
        "street_line2": "string"
      }
    },
    "provider_payment_charge_id": "string",
    "shipping_option_id": "string",
    "telegram_payment_charge_id": "string",
    "total_amount": 0
  },
  "supergroup_chat_created": true,
  "text": "string",
  "venue": {
    "address": "string",
    "foursquare_id": "string",
    "foursquare_type": "string",
    "google_place_id": "string",
    "google_place_type": "string",
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "title": "string"
  },
  "via_bot": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  },
  "video": {
    "duration": 0,
    "file_id": "string",
    "file_name": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "height": 0,
    "mime_type": "string",
    "thumb": {
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "width": 0
    },
    "width": 0
  },
  "video_note": {
    "duration": 0,
    "file_id": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "length": 0,
    "thumb": {
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "width": 0
    }
  },
  "voice": {
    "duration": 0,
    "file_id": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "mime_type": "string"
  }
}
```

This object represents a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|animation|[Animation](#schemaanimation)|false|none|This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).|
|audio|[Audio](#schemaaudio)|false|none|This object represents an audio file to be treated as music by the Telegram clients.|
|author_signature|string|false|none|*Optional*. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator|
|caption|string|false|none|*Optional*. Caption for the animation, audio, document, photo, video or voice, 0-1024 characters|
|caption_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption|
|channel_chat_created|boolean|false|none|*Optional*. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply\_to\_message if someone replies to a very first message in a channel.|
|chat|[Chat](#schemachat)|true|none|This object represents a chat.|
|connected_website|string|false|none|*Optional*. The domain name of the website on which the user has logged in. [More about Telegram Login »](/widgets/login)|
|contact|[Contact](#schemacontact)|false|none|This object represents a phone contact.|
|date|integer|true|none|Date the message was sent in Unix time|
|delete_chat_photo|boolean|false|none|*Optional*. Service message: the chat photo was deleted|
|dice|[Dice](#schemadice)|false|none|This object represents an animated emoji that displays a random value.|
|document|[Document](#schemadocument)|false|none|This object represents a general file (as opposed to [photos](https://core.telegram.org/bots/api/#photosize), [voice messages](https://core.telegram.org/bots/api/#voice) and [audio files](https://core.telegram.org/bots/api/#audio)).|
|edit_date|integer|false|none|*Optional*. Date the message was last edited in Unix time|
|entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text|
|forward_date|integer|false|none|*Optional*. For forwarded messages, date the original message was sent in Unix time|
|forward_from|[User](#schemauser)|false|none|This object represents a Telegram user or bot.|
|forward_from_chat|[Chat](#schemachat)|false|none|This object represents a chat.|
|forward_from_message_id|integer|false|none|*Optional*. For messages forwarded from channels, identifier of the original message in the channel|
|forward_sender_name|string|false|none|*Optional*. Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages|
|forward_signature|string|false|none|*Optional*. For messages forwarded from channels, signature of the post author if present|
|from|[User](#schemauser)|false|none|This object represents a Telegram user or bot.|
|game|[Game](#schemagame)|false|none|This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.|
|group_chat_created|boolean|false|none|*Optional*. Service message: the group has been created|
|invoice|[Invoice](#schemainvoice)|false|none|This object contains basic information about an invoice.|
|left_chat_member|[User](#schemauser)|false|none|This object represents a Telegram user or bot.|
|location|[Location](#schemalocation)|false|none|This object represents a point on the map.|
|media_group_id|string|false|none|*Optional*. The unique identifier of a media message group this message belongs to|
|message_id|integer|true|none|Unique message identifier inside this chat|
|migrate_from_chat_id|integer|false|none|*Optional*. The supergroup has been migrated from a group with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.|
|migrate_to_chat_id|integer|false|none|*Optional*. The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.|
|new_chat_members|[[User](#schemauser)]|false|none|*Optional*. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)|
|new_chat_photo|[[PhotoSize](#schemaphotosize)]|false|none|*Optional*. A chat photo was change to this value|
|new_chat_title|string|false|none|*Optional*. A chat title was changed to this value|
|passport_data|[PassportData](#schemapassportdata)|false|none|Contains information about Telegram Passport data shared with the bot by the user.|
|photo|[[PhotoSize](#schemaphotosize)]|false|none|*Optional*. Message is a photo, available sizes of the photo|
|pinned_message|[Message](#schemamessage)|false|none|This object represents a message.|
|poll|[Poll](#schemapoll)|false|none|This object contains information about a poll.|
|proximity_alert_triggered|[ProximityAlertTriggered](#schemaproximityalerttriggered)|false|none|This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.|
|reply_markup|[InlineKeyboardMarkup](#schemainlinekeyboardmarkup)|false|none|This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.|
|reply_to_message|[Message](#schemamessage)|false|none|This object represents a message.|
|sender_chat|[Chat](#schemachat)|false|none|This object represents a chat.|
|sticker|[Sticker](#schemasticker)|false|none|This object represents a sticker.|
|successful_payment|[SuccessfulPayment](#schemasuccessfulpayment)|false|none|This object contains basic information about a successful payment.|
|supergroup_chat_created|boolean|false|none|*Optional*. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply\_to\_message if someone replies to a very first message in a directly created supergroup.|
|text|string|false|none|*Optional*. For text messages, the actual UTF-8 text of the message, 0-4096 characters|
|venue|[Venue](#schemavenue)|false|none|This object represents a venue.|
|via_bot|[User](#schemauser)|false|none|This object represents a Telegram user or bot.|
|video|[Video](#schemavideo)|false|none|This object represents a video file.|
|video_note|[VideoNote](#schemavideonote)|false|none|This object represents a [video message](https://telegram.org/blog/video-messages-and-telescope) (available in Telegram apps as of [v.4.0](https://telegram.org/blog/video-messages-and-telescope)).|
|voice|[Voice](#schemavoice)|false|none|This object represents a voice note.|

<h2 id="tocS_MessageEntity">MessageEntity</h2>
<!-- backwards compatibility -->
<a id="schemamessageentity"></a>
<a id="schema_MessageEntity"></a>
<a id="tocSmessageentity"></a>
<a id="tocsmessageentity"></a>

```json
{
  "language": "string",
  "length": 0,
  "offset": 0,
  "type": "mention",
  "url": "string",
  "user": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  }
}
```

This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string|false|none|*Optional*. For “pre” only, the programming language of the entity text|
|length|integer|true|none|Length of the entity in UTF-16 code units|
|offset|integer|true|none|Offset in UTF-16 code units to the start of the entity|
|type|string|true|none|Type of the entity. Can be “mention” (`@username`), “hashtag” (`#hashtag`), “cashtag” (`$USD`), “bot\_command” (`/start@jobs_bot`), “url” (`https://telegram.org`), “email” (`do-not-reply@telegram.org`), “phone\_number” (`+1-212-555-0123`), “bold” (**bold text**), “italic” (*italic text*), “underline” (underlined text), “strikethrough” (strikethrough text), “code” (monowidth string), “pre” (monowidth block), “text\_link” (for clickable text URLs), “text\_mention” (for users [without usernames](https://telegram.org/blog/edit#new-mentions))|
|url|string|false|none|*Optional*. For “text\_link” only, url that will be opened after user taps on the text|
|user|[User](#schemauser)|false|none|This object represents a Telegram user or bot.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mention|
|type|hashtag|
|type|cashtag|
|type|bot_command|
|type|url|
|type|email|
|type|phone_number|
|type|bold|
|type|italic|
|type|underline|
|type|strikethrough|
|type|code|
|type|pre|
|type|text_link|
|type|text_mention|

<h2 id="tocS_MessageId">MessageId</h2>
<!-- backwards compatibility -->
<a id="schemamessageid"></a>
<a id="schema_MessageId"></a>
<a id="tocSmessageid"></a>
<a id="tocsmessageid"></a>

```json
{
  "message_id": 0
}
```

This object represents a unique message identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_id|integer|true|none|Unique message identifier|

<h2 id="tocS_OrderInfo">OrderInfo</h2>
<!-- backwards compatibility -->
<a id="schemaorderinfo"></a>
<a id="schema_OrderInfo"></a>
<a id="tocSorderinfo"></a>
<a id="tocsorderinfo"></a>

```json
{
  "email": "string",
  "name": "string",
  "phone_number": "string",
  "shipping_address": {
    "city": "string",
    "country_code": "string",
    "post_code": "string",
    "state": "string",
    "street_line1": "string",
    "street_line2": "string"
  }
}
```

This object represents information about an order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|*Optional*. User email|
|name|string|false|none|*Optional*. User name|
|phone_number|string|false|none|*Optional*. User's phone number|
|shipping_address|[ShippingAddress](#schemashippingaddress)|false|none|This object represents a shipping address.|

<h2 id="tocS_PassportData">PassportData</h2>
<!-- backwards compatibility -->
<a id="schemapassportdata"></a>
<a id="schema_PassportData"></a>
<a id="tocSpassportdata"></a>
<a id="tocspassportdata"></a>

```json
{
  "credentials": {
    "data": "string",
    "hash": "string",
    "secret": "string"
  },
  "data": [
    {
      "data": "string",
      "email": "string",
      "files": [
        {
          "file_date": 0,
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string"
        }
      ],
      "front_side": {
        "file_date": 0,
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string"
      },
      "hash": "string",
      "phone_number": "string",
      "reverse_side": {
        "file_date": 0,
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string"
      },
      "selfie": {
        "file_date": 0,
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string"
      },
      "translation": [
        {
          "file_date": 0,
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string"
        }
      ],
      "type": "personal_details"
    }
  ]
}
```

Contains information about Telegram Passport data shared with the bot by the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|[EncryptedCredentials](#schemaencryptedcredentials)|true|none|Contains data required for decrypting and authenticating [EncryptedPassportElement](https://core.telegram.org/bots/api/#encryptedpassportelement). See the [Telegram Passport Documentation](https://core.telegram.org/passport#receiving-information) for a complete description of the data decryption and authentication processes.|
|data|[[EncryptedPassportElement](#schemaencryptedpassportelement)]|true|none|Array with information about documents and other Telegram Passport elements that was shared with the bot|

<h2 id="tocS_PassportElementError">PassportElementError</h2>
<!-- backwards compatibility -->
<a id="schemapassportelementerror"></a>
<a id="schema_PassportElementError"></a>
<a id="tocSpassportelementerror"></a>
<a id="tocspassportelementerror"></a>

```json
{
  "data_hash": "string",
  "field_name": "string",
  "message": "string",
  "source": "string",
  "type": "personal_details"
}
```

This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[PassportElementErrorDataField](#schemapassportelementerrordatafield)|false|none|Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.|
|*anyOf*|[PassportElementErrorFrontSide](#schemapassportelementerrorfrontside)|false|none|Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.|
|*anyOf*|[PassportElementErrorReverseSide](#schemapassportelementerrorreverseside)|false|none|Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.|
|*anyOf*|[PassportElementErrorSelfie](#schemapassportelementerrorselfie)|false|none|Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.|
|*anyOf*|[PassportElementErrorFile](#schemapassportelementerrorfile)|false|none|Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.|
|*anyOf*|[PassportElementErrorFiles](#schemapassportelementerrorfiles)|false|none|Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.|
|*anyOf*|[PassportElementErrorTranslationFile](#schemapassportelementerrortranslationfile)|false|none|Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.|
|*anyOf*|[PassportElementErrorTranslationFiles](#schemapassportelementerrortranslationfiles)|false|none|Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.|
|*anyOf*|[PassportElementErrorUnspecified](#schemapassportelementerrorunspecified)|false|none|Represents an issue in an unspecified place. The error is considered resolved when new data is added.|

<h2 id="tocS_PassportElementErrorDataField">PassportElementErrorDataField</h2>
<!-- backwards compatibility -->
<a id="schemapassportelementerrordatafield"></a>
<a id="schema_PassportElementErrorDataField"></a>
<a id="tocSpassportelementerrordatafield"></a>
<a id="tocspassportelementerrordatafield"></a>

```json
{
  "data_hash": "string",
  "field_name": "string",
  "message": "string",
  "source": "string",
  "type": "personal_details"
}
```

Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_hash|string|true|none|Base64-encoded data hash|
|field_name|string|true|none|Name of the data field which has the error|
|message|string|true|none|Error message|
|source|string|true|none|Error source, must be *data*|
|type|string|true|none|The section of the user's Telegram Passport which has the error, one of “personal\_details”, “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “address”|

#### Enumerated Values

|Property|Value|
|---|---|
|type|personal_details|
|type|passport|
|type|driver_license|
|type|identity_card|
|type|internal_passport|
|type|address|

<h2 id="tocS_PassportElementErrorFile">PassportElementErrorFile</h2>
<!-- backwards compatibility -->
<a id="schemapassportelementerrorfile"></a>
<a id="schema_PassportElementErrorFile"></a>
<a id="tocSpassportelementerrorfile"></a>
<a id="tocspassportelementerrorfile"></a>

```json
{
  "file_hash": "string",
  "message": "string",
  "source": "string",
  "type": "utility_bill"
}
```

Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_hash|string|true|none|Base64-encoded file hash|
|message|string|true|none|Error message|
|source|string|true|none|Error source, must be *file*|
|type|string|true|none|The section of the user's Telegram Passport which has the issue, one of “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration”|

#### Enumerated Values

|Property|Value|
|---|---|
|type|utility_bill|
|type|bank_statement|
|type|rental_agreement|
|type|passport_registration|
|type|temporary_registration|

<h2 id="tocS_PassportElementErrorFiles">PassportElementErrorFiles</h2>
<!-- backwards compatibility -->
<a id="schemapassportelementerrorfiles"></a>
<a id="schema_PassportElementErrorFiles"></a>
<a id="tocSpassportelementerrorfiles"></a>
<a id="tocspassportelementerrorfiles"></a>

```json
{
  "file_hashes": [
    "string"
  ],
  "message": "string",
  "source": "string",
  "type": "utility_bill"
}
```

Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_hashes|[string]|true|none|List of base64-encoded file hashes|
|message|string|true|none|Error message|
|source|string|true|none|Error source, must be *files*|
|type|string|true|none|The section of the user's Telegram Passport which has the issue, one of “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration”|

#### Enumerated Values

|Property|Value|
|---|---|
|type|utility_bill|
|type|bank_statement|
|type|rental_agreement|
|type|passport_registration|
|type|temporary_registration|

<h2 id="tocS_PassportElementErrorFrontSide">PassportElementErrorFrontSide</h2>
<!-- backwards compatibility -->
<a id="schemapassportelementerrorfrontside"></a>
<a id="schema_PassportElementErrorFrontSide"></a>
<a id="tocSpassportelementerrorfrontside"></a>
<a id="tocspassportelementerrorfrontside"></a>

```json
{
  "file_hash": "string",
  "message": "string",
  "source": "string",
  "type": "passport"
}
```

Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_hash|string|true|none|Base64-encoded hash of the file with the front side of the document|
|message|string|true|none|Error message|
|source|string|true|none|Error source, must be *front\_side*|
|type|string|true|none|The section of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport”|

#### Enumerated Values

|Property|Value|
|---|---|
|type|passport|
|type|driver_license|
|type|identity_card|
|type|internal_passport|

<h2 id="tocS_PassportElementErrorReverseSide">PassportElementErrorReverseSide</h2>
<!-- backwards compatibility -->
<a id="schemapassportelementerrorreverseside"></a>
<a id="schema_PassportElementErrorReverseSide"></a>
<a id="tocSpassportelementerrorreverseside"></a>
<a id="tocspassportelementerrorreverseside"></a>

```json
{
  "file_hash": "string",
  "message": "string",
  "source": "string",
  "type": "driver_license"
}
```

Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_hash|string|true|none|Base64-encoded hash of the file with the reverse side of the document|
|message|string|true|none|Error message|
|source|string|true|none|Error source, must be *reverse\_side*|
|type|string|true|none|The section of the user's Telegram Passport which has the issue, one of “driver\_license”, “identity\_card”|

#### Enumerated Values

|Property|Value|
|---|---|
|type|driver_license|
|type|identity_card|

<h2 id="tocS_PassportElementErrorSelfie">PassportElementErrorSelfie</h2>
<!-- backwards compatibility -->
<a id="schemapassportelementerrorselfie"></a>
<a id="schema_PassportElementErrorSelfie"></a>
<a id="tocSpassportelementerrorselfie"></a>
<a id="tocspassportelementerrorselfie"></a>

```json
{
  "file_hash": "string",
  "message": "string",
  "source": "string",
  "type": "passport"
}
```

Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_hash|string|true|none|Base64-encoded hash of the file with the selfie|
|message|string|true|none|Error message|
|source|string|true|none|Error source, must be *selfie*|
|type|string|true|none|The section of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport”|

#### Enumerated Values

|Property|Value|
|---|---|
|type|passport|
|type|driver_license|
|type|identity_card|
|type|internal_passport|

<h2 id="tocS_PassportElementErrorTranslationFile">PassportElementErrorTranslationFile</h2>
<!-- backwards compatibility -->
<a id="schemapassportelementerrortranslationfile"></a>
<a id="schema_PassportElementErrorTranslationFile"></a>
<a id="tocSpassportelementerrortranslationfile"></a>
<a id="tocspassportelementerrortranslationfile"></a>

```json
{
  "file_hash": "string",
  "message": "string",
  "source": "string",
  "type": "passport"
}
```

Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_hash|string|true|none|Base64-encoded file hash|
|message|string|true|none|Error message|
|source|string|true|none|Error source, must be *translation\_file*|
|type|string|true|none|Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration”|

#### Enumerated Values

|Property|Value|
|---|---|
|type|passport|
|type|driver_license|
|type|identity_card|
|type|internal_passport|
|type|utility_bill|
|type|bank_statement|
|type|rental_agreement|
|type|passport_registration|
|type|temporary_registration|

<h2 id="tocS_PassportElementErrorTranslationFiles">PassportElementErrorTranslationFiles</h2>
<!-- backwards compatibility -->
<a id="schemapassportelementerrortranslationfiles"></a>
<a id="schema_PassportElementErrorTranslationFiles"></a>
<a id="tocSpassportelementerrortranslationfiles"></a>
<a id="tocspassportelementerrortranslationfiles"></a>

```json
{
  "file_hashes": [
    "string"
  ],
  "message": "string",
  "source": "string",
  "type": "passport"
}
```

Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_hashes|[string]|true|none|List of base64-encoded file hashes|
|message|string|true|none|Error message|
|source|string|true|none|Error source, must be *translation\_files*|
|type|string|true|none|Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration”|

#### Enumerated Values

|Property|Value|
|---|---|
|type|passport|
|type|driver_license|
|type|identity_card|
|type|internal_passport|
|type|utility_bill|
|type|bank_statement|
|type|rental_agreement|
|type|passport_registration|
|type|temporary_registration|

<h2 id="tocS_PassportElementErrorUnspecified">PassportElementErrorUnspecified</h2>
<!-- backwards compatibility -->
<a id="schemapassportelementerrorunspecified"></a>
<a id="schema_PassportElementErrorUnspecified"></a>
<a id="tocSpassportelementerrorunspecified"></a>
<a id="tocspassportelementerrorunspecified"></a>

```json
{
  "element_hash": "string",
  "message": "string",
  "source": "string",
  "type": "string"
}
```

Represents an issue in an unspecified place. The error is considered resolved when new data is added.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|element_hash|string|true|none|Base64-encoded element hash|
|message|string|true|none|Error message|
|source|string|true|none|Error source, must be *unspecified*|
|type|string|true|none|Type of element of the user's Telegram Passport which has the issue|

<h2 id="tocS_PassportFile">PassportFile</h2>
<!-- backwards compatibility -->
<a id="schemapassportfile"></a>
<a id="schema_PassportFile"></a>
<a id="tocSpassportfile"></a>
<a id="tocspassportfile"></a>

```json
{
  "file_date": 0,
  "file_id": "string",
  "file_size": 0,
  "file_unique_id": "string"
}
```

This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_date|integer|true|none|Unix time when the file was uploaded|
|file_id|string|true|none|Identifier for this file, which can be used to download or reuse the file|
|file_size|integer|true|none|File size|
|file_unique_id|string|true|none|Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|

<h2 id="tocS_PhotoSize">PhotoSize</h2>
<!-- backwards compatibility -->
<a id="schemaphotosize"></a>
<a id="schema_PhotoSize"></a>
<a id="tocSphotosize"></a>
<a id="tocsphotosize"></a>

```json
{
  "file_id": "string",
  "file_size": 0,
  "file_unique_id": "string",
  "height": 0,
  "width": 0
}
```

This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_id|string|true|none|Identifier for this file, which can be used to download or reuse the file|
|file_size|integer|false|none|*Optional*. File size|
|file_unique_id|string|true|none|Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|
|height|integer|true|none|Photo height|
|width|integer|true|none|Photo width|

<h2 id="tocS_Poll">Poll</h2>
<!-- backwards compatibility -->
<a id="schemapoll"></a>
<a id="schema_Poll"></a>
<a id="tocSpoll"></a>
<a id="tocspoll"></a>

```json
{
  "allows_multiple_answers": true,
  "close_date": 0,
  "correct_option_id": 0,
  "explanation": "string",
  "explanation_entities": [
    {
      "language": "string",
      "length": 0,
      "offset": 0,
      "type": "mention",
      "url": "string",
      "user": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    }
  ],
  "id": "string",
  "is_anonymous": true,
  "is_closed": true,
  "open_period": 0,
  "options": [
    {
      "text": "string",
      "voter_count": 0
    }
  ],
  "question": "string",
  "total_voter_count": 0,
  "type": "string"
}
```

This object contains information about a poll.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allows_multiple_answers|boolean|true|none|True, if the poll allows multiple answers|
|close_date|integer|false|none|*Optional*. Point in time (Unix timestamp) when the poll will be automatically closed|
|correct_option_id|integer|false|none|*Optional*. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot.|
|explanation|string|false|none|*Optional*. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters|
|explanation_entities|[[MessageEntity](#schemamessageentity)]|false|none|*Optional*. Special entities like usernames, URLs, bot commands, etc. that appear in the *explanation*|
|id|string|true|none|Unique poll identifier|
|is_anonymous|boolean|true|none|True, if the poll is anonymous|
|is_closed|boolean|true|none|True, if the poll is closed|
|open_period|integer|false|none|*Optional*. Amount of time in seconds the poll will be active after creation|
|options|[[PollOption](#schemapolloption)]|true|none|List of poll options|
|question|string|true|none|Poll question, 1-255 characters|
|total_voter_count|integer|true|none|Total number of users that voted in the poll|
|type|string|true|none|Poll type, currently can be “regular” or “quiz”|

<h2 id="tocS_PollAnswer">PollAnswer</h2>
<!-- backwards compatibility -->
<a id="schemapollanswer"></a>
<a id="schema_PollAnswer"></a>
<a id="tocSpollanswer"></a>
<a id="tocspollanswer"></a>

```json
{
  "option_ids": [
    0
  ],
  "poll_id": "string",
  "user": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  }
}
```

This object represents an answer of a user in a non-anonymous poll.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|option_ids|[integer]|true|none|0-based identifiers of answer options, chosen by the user. May be empty if the user retracted their vote.|
|poll_id|string|true|none|Unique poll identifier|
|user|[User](#schemauser)|true|none|This object represents a Telegram user or bot.|

<h2 id="tocS_PollOption">PollOption</h2>
<!-- backwards compatibility -->
<a id="schemapolloption"></a>
<a id="schema_PollOption"></a>
<a id="tocSpolloption"></a>
<a id="tocspolloption"></a>

```json
{
  "text": "string",
  "voter_count": 0
}
```

This object contains information about one answer option in a poll.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|Option text, 1-100 characters|
|voter_count|integer|true|none|Number of users that voted for this option|

<h2 id="tocS_PreCheckoutQuery">PreCheckoutQuery</h2>
<!-- backwards compatibility -->
<a id="schemaprecheckoutquery"></a>
<a id="schema_PreCheckoutQuery"></a>
<a id="tocSprecheckoutquery"></a>
<a id="tocsprecheckoutquery"></a>

```json
{
  "currency": "string",
  "from": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  },
  "id": "string",
  "invoice_payload": "string",
  "order_info": {
    "email": "string",
    "name": "string",
    "phone_number": "string",
    "shipping_address": {
      "city": "string",
      "country_code": "string",
      "post_code": "string",
      "state": "string",
      "street_line1": "string",
      "street_line2": "string"
    }
  },
  "shipping_option_id": "string",
  "total_amount": 0
}
```

This object contains information about an incoming pre-checkout query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|Three-letter ISO 4217 [currency](/bots/payments#supported-currencies) code|
|from|[User](#schemauser)|true|none|This object represents a Telegram user or bot.|
|id|string|true|none|Unique query identifier|
|invoice_payload|string|true|none|Bot specified invoice payload|
|order_info|[OrderInfo](#schemaorderinfo)|false|none|This object represents information about an order.|
|shipping_option_id|string|false|none|*Optional*. Identifier of the shipping option chosen by the user|
|total_amount|integer|true|none|Total price in the *smallest units* of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the *exp* parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).|

<h2 id="tocS_ProximityAlertTriggered">ProximityAlertTriggered</h2>
<!-- backwards compatibility -->
<a id="schemaproximityalerttriggered"></a>
<a id="schema_ProximityAlertTriggered"></a>
<a id="tocSproximityalerttriggered"></a>
<a id="tocsproximityalerttriggered"></a>

```json
{
  "distance": 0,
  "traveler": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  },
  "watcher": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  }
}
```

This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distance|integer|true|none|The distance between the users|
|traveler|[User](#schemauser)|true|none|This object represents a Telegram user or bot.|
|watcher|[User](#schemauser)|true|none|This object represents a Telegram user or bot.|

<h2 id="tocS_ReplyKeyboardMarkup">ReplyKeyboardMarkup</h2>
<!-- backwards compatibility -->
<a id="schemareplykeyboardmarkup"></a>
<a id="schema_ReplyKeyboardMarkup"></a>
<a id="tocSreplykeyboardmarkup"></a>
<a id="tocsreplykeyboardmarkup"></a>

```json
{
  "keyboard": [
    [
      {
        "request_contact": true,
        "request_location": true,
        "request_poll": {
          "type": "string"
        },
        "text": "string"
      }
    ]
  ],
  "one_time_keyboard": false,
  "resize_keyboard": false,
  "selective": true
}
```

This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyboard|[[[KeyboardButton](#schemakeyboardbutton)]]|true|none|Array of button rows, each represented by an Array of [KeyboardButton](https://core.telegram.org/bots/api/#keyboardbutton) objects|
|one_time_keyboard|boolean|false|none|*Optional*. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again. Defaults to *false*.|
|resize_keyboard|boolean|false|none|*Optional*. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to *false*, in which case the custom keyboard is always of the same height as the app's standard keyboard.|
|selective|boolean|false|none|*Optional*. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the *text* of the [Message](https://core.telegram.org/bots/api/#message) object; 2) if the bot's message is a reply (has *reply\_to\_message\_id*), sender of the original message.  <br><br>*Example:* A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.|

<h2 id="tocS_ReplyKeyboardRemove">ReplyKeyboardRemove</h2>
<!-- backwards compatibility -->
<a id="schemareplykeyboardremove"></a>
<a id="schema_ReplyKeyboardRemove"></a>
<a id="tocSreplykeyboardremove"></a>
<a id="tocsreplykeyboardremove"></a>

```json
{
  "remove_keyboard": true,
  "selective": true
}
```

Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup)).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remove_keyboard|boolean|true|none|Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use *one\_time\_keyboard* in [ReplyKeyboardMarkup](https://core.telegram.org/bots/api/#replykeyboardmarkup))|
|selective|boolean|false|none|*Optional*. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the *text* of the [Message](https://core.telegram.org/bots/api/#message) object; 2) if the bot's message is a reply (has *reply\_to\_message\_id*), sender of the original message.  <br><br>*Example:* A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.|

<h2 id="tocS_ResponseParameters">ResponseParameters</h2>
<!-- backwards compatibility -->
<a id="schemaresponseparameters"></a>
<a id="schema_ResponseParameters"></a>
<a id="tocSresponseparameters"></a>
<a id="tocsresponseparameters"></a>

```json
{
  "migrate_to_chat_id": 0,
  "retry_after": 0
}
```

Contains information about why a request was unsuccessful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migrate_to_chat_id|integer|false|none|*Optional*. The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.|
|retry_after|integer|false|none|*Optional*. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated|

<h2 id="tocS_ShippingAddress">ShippingAddress</h2>
<!-- backwards compatibility -->
<a id="schemashippingaddress"></a>
<a id="schema_ShippingAddress"></a>
<a id="tocSshippingaddress"></a>
<a id="tocsshippingaddress"></a>

```json
{
  "city": "string",
  "country_code": "string",
  "post_code": "string",
  "state": "string",
  "street_line1": "string",
  "street_line2": "string"
}
```

This object represents a shipping address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|City|
|country_code|string|true|none|ISO 3166-1 alpha-2 country code|
|post_code|string|true|none|Address post code|
|state|string|true|none|State, if applicable|
|street_line1|string|true|none|First line for the address|
|street_line2|string|true|none|Second line for the address|

<h2 id="tocS_ShippingOption">ShippingOption</h2>
<!-- backwards compatibility -->
<a id="schemashippingoption"></a>
<a id="schema_ShippingOption"></a>
<a id="tocSshippingoption"></a>
<a id="tocsshippingoption"></a>

```json
{
  "id": "string",
  "prices": [
    {
      "amount": 0,
      "label": "string"
    }
  ],
  "title": "string"
}
```

This object represents one shipping option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Shipping option identifier|
|prices|[[LabeledPrice](#schemalabeledprice)]|true|none|List of price portions|
|title|string|true|none|Option title|

<h2 id="tocS_ShippingQuery">ShippingQuery</h2>
<!-- backwards compatibility -->
<a id="schemashippingquery"></a>
<a id="schema_ShippingQuery"></a>
<a id="tocSshippingquery"></a>
<a id="tocsshippingquery"></a>

```json
{
  "from": {
    "can_join_groups": true,
    "can_read_all_group_messages": true,
    "first_name": "string",
    "id": 0,
    "is_bot": true,
    "language_code": "string",
    "last_name": "string",
    "supports_inline_queries": true,
    "username": "string"
  },
  "id": "string",
  "invoice_payload": "string",
  "shipping_address": {
    "city": "string",
    "country_code": "string",
    "post_code": "string",
    "state": "string",
    "street_line1": "string",
    "street_line2": "string"
  }
}
```

This object contains information about an incoming shipping query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|[User](#schemauser)|true|none|This object represents a Telegram user or bot.|
|id|string|true|none|Unique query identifier|
|invoice_payload|string|true|none|Bot specified invoice payload|
|shipping_address|[ShippingAddress](#schemashippingaddress)|true|none|This object represents a shipping address.|

<h2 id="tocS_Sticker">Sticker</h2>
<!-- backwards compatibility -->
<a id="schemasticker"></a>
<a id="schema_Sticker"></a>
<a id="tocSsticker"></a>
<a id="tocssticker"></a>

```json
{
  "emoji": "string",
  "file_id": "string",
  "file_size": 0,
  "file_unique_id": "string",
  "height": 0,
  "is_animated": true,
  "mask_position": {
    "point": "forehead",
    "scale": 0,
    "x_shift": 0,
    "y_shift": 0
  },
  "set_name": "string",
  "thumb": {
    "file_id": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "height": 0,
    "width": 0
  },
  "width": 0
}
```

This object represents a sticker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emoji|string|false|none|*Optional*. Emoji associated with the sticker|
|file_id|string|true|none|Identifier for this file, which can be used to download or reuse the file|
|file_size|integer|false|none|*Optional*. File size|
|file_unique_id|string|true|none|Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|
|height|integer|true|none|Sticker height|
|is_animated|boolean|true|none|*True*, if the sticker is [animated](https://telegram.org/blog/animated-stickers)|
|mask_position|[MaskPosition](#schemamaskposition)|false|none|This object describes the position on faces where a mask should be placed by default.|
|set_name|string|false|none|*Optional*. Name of the sticker set to which the sticker belongs|
|thumb|[PhotoSize](#schemaphotosize)|false|none|This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail.|
|width|integer|true|none|Sticker width|

<h2 id="tocS_StickerSet">StickerSet</h2>
<!-- backwards compatibility -->
<a id="schemastickerset"></a>
<a id="schema_StickerSet"></a>
<a id="tocSstickerset"></a>
<a id="tocsstickerset"></a>

```json
{
  "contains_masks": true,
  "is_animated": true,
  "name": "string",
  "stickers": [
    {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    }
  ],
  "thumb": {
    "file_id": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "height": 0,
    "width": 0
  },
  "title": "string"
}
```

This object represents a sticker set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contains_masks|boolean|true|none|*True*, if the sticker set contains masks|
|is_animated|boolean|true|none|*True*, if the sticker set contains [animated stickers](https://telegram.org/blog/animated-stickers)|
|name|string|true|none|Sticker set name|
|stickers|[[Sticker](#schemasticker)]|true|none|List of all set stickers|
|thumb|[PhotoSize](#schemaphotosize)|false|none|This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail.|
|title|string|true|none|Sticker set title|

<h2 id="tocS_SuccessfulPayment">SuccessfulPayment</h2>
<!-- backwards compatibility -->
<a id="schemasuccessfulpayment"></a>
<a id="schema_SuccessfulPayment"></a>
<a id="tocSsuccessfulpayment"></a>
<a id="tocssuccessfulpayment"></a>

```json
{
  "currency": "string",
  "invoice_payload": "string",
  "order_info": {
    "email": "string",
    "name": "string",
    "phone_number": "string",
    "shipping_address": {
      "city": "string",
      "country_code": "string",
      "post_code": "string",
      "state": "string",
      "street_line1": "string",
      "street_line2": "string"
    }
  },
  "provider_payment_charge_id": "string",
  "shipping_option_id": "string",
  "telegram_payment_charge_id": "string",
  "total_amount": 0
}
```

This object contains basic information about a successful payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|Three-letter ISO 4217 [currency](/bots/payments#supported-currencies) code|
|invoice_payload|string|true|none|Bot specified invoice payload|
|order_info|[OrderInfo](#schemaorderinfo)|false|none|This object represents information about an order.|
|provider_payment_charge_id|string|true|none|Provider payment identifier|
|shipping_option_id|string|false|none|*Optional*. Identifier of the shipping option chosen by the user|
|telegram_payment_charge_id|string|true|none|Telegram payment identifier|
|total_amount|integer|true|none|Total price in the *smallest units* of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the *exp* parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).|

<h2 id="tocS_Update">Update</h2>
<!-- backwards compatibility -->
<a id="schemaupdate"></a>
<a id="schema_Update"></a>
<a id="tocSupdate"></a>
<a id="tocsupdate"></a>

```json
{
  "callback_query": {
    "chat_instance": "string",
    "data": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game_short_name": "string",
    "id": "string",
    "inline_message_id": "string",
    "message": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "audio": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "mime_type": "string",
        "performer": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "title": "string"
      },
      "author_signature": "string",
      "caption": "string",
      "caption_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "channel_chat_created": true,
      "chat": {},
      "connected_website": "string",
      "contact": {
        "first_name": "string",
        "last_name": "string",
        "phone_number": "string",
        "user_id": 0,
        "vcard": "string"
      },
      "date": 0,
      "delete_chat_photo": true,
      "dice": {
        "emoji": "string",
        "value": 0
      },
      "document": {
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      },
      "edit_date": 0,
      "entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "forward_date": 0,
      "forward_from": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "forward_from_chat": {},
      "forward_from_message_id": 0,
      "forward_sender_name": "string",
      "forward_signature": "string",
      "from": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "game": {
        "animation": {
          "duration": 0,
          "file_id": "string",
          "file_name": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "mime_type": "string",
          "thumb": {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          },
          "width": 0
        },
        "description": "string",
        "photo": [
          {
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string",
            "height": 0,
            "width": 0
          }
        ],
        "text": "string",
        "text_entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "title": "string"
      },
      "group_chat_created": true,
      "invoice": {
        "currency": "string",
        "description": "string",
        "start_parameter": "string",
        "title": "string",
        "total_amount": 0
      },
      "left_chat_member": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "media_group_id": "string",
      "message_id": 0,
      "migrate_from_chat_id": 0,
      "migrate_to_chat_id": 0,
      "new_chat_members": [
        {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      ],
      "new_chat_photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "new_chat_title": "string",
      "passport_data": {
        "credentials": {
          "data": "string",
          "hash": "string",
          "secret": "string"
        },
        "data": [
          {
            "data": "string",
            "email": "string",
            "files": [
              {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              }
            ],
            "front_side": {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            },
            "hash": "string",
            "phone_number": "string",
            "reverse_side": {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            },
            "selfie": {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            },
            "translation": [
              {
                "file_date": 0,
                "file_id": "string",
                "file_size": 0,
                "file_unique_id": "string"
              }
            ],
            "type": "personal_details"
          }
        ]
      },
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "pinned_message": {},
      "poll": {
        "allows_multiple_answers": true,
        "close_date": 0,
        "correct_option_id": 0,
        "explanation": "string",
        "explanation_entities": [
          {
            "language": "string",
            "length": 0,
            "offset": 0,
            "type": "mention",
            "url": "string",
            "user": {
              "can_join_groups": true,
              "can_read_all_group_messages": true,
              "first_name": "string",
              "id": 0,
              "is_bot": true,
              "language_code": "string",
              "last_name": "string",
              "supports_inline_queries": true,
              "username": "string"
            }
          }
        ],
        "id": "string",
        "is_anonymous": true,
        "is_closed": true,
        "open_period": 0,
        "options": [
          {
            "text": "string",
            "voter_count": 0
          }
        ],
        "question": "string",
        "total_voter_count": 0,
        "type": "string"
      },
      "proximity_alert_triggered": {
        "distance": 0,
        "traveler": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        },
        "watcher": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      },
      "reply_markup": {
        "inline_keyboard": [
          [
            {
              "callback_data": "string",
              "callback_game": null,
              "login_url": {
                "bot_username": "string",
                "forward_text": "string",
                "request_write_access": true,
                "url": "string"
              },
              "pay": true,
              "switch_inline_query": "string",
              "switch_inline_query_current_chat": "string",
              "text": "string",
              "url": "string"
            }
          ]
        ]
      },
      "reply_to_message": {},
      "sender_chat": {},
      "sticker": {
        "emoji": "string",
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "is_animated": true,
        "mask_position": {
          "point": "forehead",
          "scale": 0,
          "x_shift": 0,
          "y_shift": 0
        },
        "set_name": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "successful_payment": {
        "currency": "string",
        "invoice_payload": "string",
        "order_info": {
          "email": "string",
          "name": "string",
          "phone_number": "string",
          "shipping_address": {
            "city": "string",
            "country_code": "string",
            "post_code": "string",
            "state": "string",
            "street_line1": "string",
            "street_line2": "string"
          }
        },
        "provider_payment_charge_id": "string",
        "shipping_option_id": "string",
        "telegram_payment_charge_id": "string",
        "total_amount": 0
      },
      "supergroup_chat_created": true,
      "text": "string",
      "venue": {
        "address": "string",
        "foursquare_id": "string",
        "foursquare_type": "string",
        "google_place_id": "string",
        "google_place_type": "string",
        "location": {
          "heading": 0,
          "horizontal_accuracy": 0,
          "latitude": 0,
          "live_period": 0,
          "longitude": 0,
          "proximity_alert_radius": 0
        },
        "title": "string"
      },
      "via_bot": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "video": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "video_note": {
        "duration": 0,
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "length": 0,
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      },
      "voice": {
        "duration": 0,
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "mime_type": "string"
      }
    }
  },
  "channel_post": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  },
  "chosen_inline_result": {
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "inline_message_id": "string",
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "query": "string",
    "result_id": "string"
  },
  "edited_channel_post": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  },
  "edited_message": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  },
  "inline_query": {
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "id": "string",
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "offset": "string",
    "query": "string"
  },
  "message": {
    "animation": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "audio": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "performer": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "title": "string"
    },
    "author_signature": "string",
    "caption": "string",
    "caption_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "channel_chat_created": true,
    "chat": {},
    "connected_website": "string",
    "contact": {
      "first_name": "string",
      "last_name": "string",
      "phone_number": "string",
      "user_id": 0,
      "vcard": "string"
    },
    "date": 0,
    "delete_chat_photo": true,
    "dice": {
      "emoji": "string",
      "value": 0
    },
    "document": {
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "edit_date": 0,
    "entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "forward_date": 0,
    "forward_from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "forward_from_chat": {},
    "forward_from_message_id": 0,
    "forward_sender_name": "string",
    "forward_signature": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "game": {
      "animation": {
        "duration": 0,
        "file_id": "string",
        "file_name": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "mime_type": "string",
        "thumb": {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        },
        "width": 0
      },
      "description": "string",
      "photo": [
        {
          "file_id": "string",
          "file_size": 0,
          "file_unique_id": "string",
          "height": 0,
          "width": 0
        }
      ],
      "text": "string",
      "text_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "title": "string"
    },
    "group_chat_created": true,
    "invoice": {
      "currency": "string",
      "description": "string",
      "start_parameter": "string",
      "title": "string",
      "total_amount": 0
    },
    "left_chat_member": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "location": {
      "heading": 0,
      "horizontal_accuracy": 0,
      "latitude": 0,
      "live_period": 0,
      "longitude": 0,
      "proximity_alert_radius": 0
    },
    "media_group_id": "string",
    "message_id": 0,
    "migrate_from_chat_id": 0,
    "migrate_to_chat_id": 0,
    "new_chat_members": [
      {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    ],
    "new_chat_photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "new_chat_title": "string",
    "passport_data": {
      "credentials": {
        "data": "string",
        "hash": "string",
        "secret": "string"
      },
      "data": [
        {
          "data": "string",
          "email": "string",
          "files": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "front_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "hash": "string",
          "phone_number": "string",
          "reverse_side": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "selfie": {
            "file_date": 0,
            "file_id": "string",
            "file_size": 0,
            "file_unique_id": "string"
          },
          "translation": [
            {
              "file_date": 0,
              "file_id": "string",
              "file_size": 0,
              "file_unique_id": "string"
            }
          ],
          "type": "personal_details"
        }
      ]
    },
    "photo": [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ],
    "pinned_message": {},
    "poll": {
      "allows_multiple_answers": true,
      "close_date": 0,
      "correct_option_id": 0,
      "explanation": "string",
      "explanation_entities": [
        {
          "language": "string",
          "length": 0,
          "offset": 0,
          "type": "mention",
          "url": "string",
          "user": {
            "can_join_groups": true,
            "can_read_all_group_messages": true,
            "first_name": "string",
            "id": 0,
            "is_bot": true,
            "language_code": "string",
            "last_name": "string",
            "supports_inline_queries": true,
            "username": "string"
          }
        }
      ],
      "id": "string",
      "is_anonymous": true,
      "is_closed": true,
      "open_period": 0,
      "options": [
        {
          "text": "string",
          "voter_count": 0
        }
      ],
      "question": "string",
      "total_voter_count": 0,
      "type": "string"
    },
    "proximity_alert_triggered": {
      "distance": 0,
      "traveler": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      },
      "watcher": {
        "can_join_groups": true,
        "can_read_all_group_messages": true,
        "first_name": "string",
        "id": 0,
        "is_bot": true,
        "language_code": "string",
        "last_name": "string",
        "supports_inline_queries": true,
        "username": "string"
      }
    },
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            "callback_data": "string",
            "callback_game": null,
            "login_url": {
              "bot_username": "string",
              "forward_text": "string",
              "request_write_access": true,
              "url": "string"
            },
            "pay": true,
            "switch_inline_query": "string",
            "switch_inline_query_current_chat": "string",
            "text": "string",
            "url": "string"
          }
        ]
      ]
    },
    "reply_to_message": {},
    "sender_chat": {},
    "sticker": {
      "emoji": "string",
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "is_animated": true,
      "mask_position": {
        "point": "forehead",
        "scale": 0,
        "x_shift": 0,
        "y_shift": 0
      },
      "set_name": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "successful_payment": {
      "currency": "string",
      "invoice_payload": "string",
      "order_info": {
        "email": "string",
        "name": "string",
        "phone_number": "string",
        "shipping_address": {
          "city": "string",
          "country_code": "string",
          "post_code": "string",
          "state": "string",
          "street_line1": "string",
          "street_line2": "string"
        }
      },
      "provider_payment_charge_id": "string",
      "shipping_option_id": "string",
      "telegram_payment_charge_id": "string",
      "total_amount": 0
    },
    "supergroup_chat_created": true,
    "text": "string",
    "venue": {
      "address": "string",
      "foursquare_id": "string",
      "foursquare_type": "string",
      "google_place_id": "string",
      "google_place_type": "string",
      "location": {
        "heading": 0,
        "horizontal_accuracy": 0,
        "latitude": 0,
        "live_period": 0,
        "longitude": 0,
        "proximity_alert_radius": 0
      },
      "title": "string"
    },
    "via_bot": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "video": {
      "duration": 0,
      "file_id": "string",
      "file_name": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "height": 0,
      "mime_type": "string",
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      },
      "width": 0
    },
    "video_note": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "length": 0,
      "thumb": {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    },
    "voice": {
      "duration": 0,
      "file_id": "string",
      "file_size": 0,
      "file_unique_id": "string",
      "mime_type": "string"
    }
  },
  "poll": {
    "allows_multiple_answers": true,
    "close_date": 0,
    "correct_option_id": 0,
    "explanation": "string",
    "explanation_entities": [
      {
        "language": "string",
        "length": 0,
        "offset": 0,
        "type": "mention",
        "url": "string",
        "user": {
          "can_join_groups": true,
          "can_read_all_group_messages": true,
          "first_name": "string",
          "id": 0,
          "is_bot": true,
          "language_code": "string",
          "last_name": "string",
          "supports_inline_queries": true,
          "username": "string"
        }
      }
    ],
    "id": "string",
    "is_anonymous": true,
    "is_closed": true,
    "open_period": 0,
    "options": [
      {
        "text": "string",
        "voter_count": 0
      }
    ],
    "question": "string",
    "total_voter_count": 0,
    "type": "string"
  },
  "poll_answer": {
    "option_ids": [
      0
    ],
    "poll_id": "string",
    "user": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    }
  },
  "pre_checkout_query": {
    "currency": "string",
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "id": "string",
    "invoice_payload": "string",
    "order_info": {
      "email": "string",
      "name": "string",
      "phone_number": "string",
      "shipping_address": {
        "city": "string",
        "country_code": "string",
        "post_code": "string",
        "state": "string",
        "street_line1": "string",
        "street_line2": "string"
      }
    },
    "shipping_option_id": "string",
    "total_amount": 0
  },
  "shipping_query": {
    "from": {
      "can_join_groups": true,
      "can_read_all_group_messages": true,
      "first_name": "string",
      "id": 0,
      "is_bot": true,
      "language_code": "string",
      "last_name": "string",
      "supports_inline_queries": true,
      "username": "string"
    },
    "id": "string",
    "invoice_payload": "string",
    "shipping_address": {
      "city": "string",
      "country_code": "string",
      "post_code": "string",
      "state": "string",
      "street_line1": "string",
      "street_line2": "string"
    }
  },
  "update_id": 0
}
```

This [object](https://core.telegram.org/bots/api/#available-types) represents an incoming update.  
At most **one** of the optional parameters can be present in any given update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_query|[CallbackQuery](#schemacallbackquery)|false|none|This object represents an incoming callback query from a callback button in an [inline keyboard](/bots#inline-keyboards-and-on-the-fly-updating). If the button that originated the query was attached to a message sent by the bot, the field *message* will be present. If the button was attached to a message sent via the bot (in [inline mode](https://core.telegram.org/bots/api/#inline-mode)), the field *inline\_message\_id* will be present. Exactly one of the fields *data* or *game\_short\_name* will be present.|
|channel_post|[Message](#schemamessage)|false|none|This object represents a message.|
|chosen_inline_result|[ChosenInlineResult](#schemachoseninlineresult)|false|none|Represents a [result](https://core.telegram.org/bots/api/#inlinequeryresult) of an inline query that was chosen by the user and sent to their chat partner.|
|edited_channel_post|[Message](#schemamessage)|false|none|This object represents a message.|
|edited_message|[Message](#schemamessage)|false|none|This object represents a message.|
|inline_query|[InlineQuery](#schemainlinequery)|false|none|This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.|
|message|[Message](#schemamessage)|false|none|This object represents a message.|
|poll|[Poll](#schemapoll)|false|none|This object contains information about a poll.|
|poll_answer|[PollAnswer](#schemapollanswer)|false|none|This object represents an answer of a user in a non-anonymous poll.|
|pre_checkout_query|[PreCheckoutQuery](#schemaprecheckoutquery)|false|none|This object contains information about an incoming pre-checkout query.|
|shipping_query|[ShippingQuery](#schemashippingquery)|false|none|This object contains information about an incoming shipping query.|
|update_id|integer|true|none|The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you're using [Webhooks](https://core.telegram.org/bots/api/#setwebhook), since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "can_join_groups": true,
  "can_read_all_group_messages": true,
  "first_name": "string",
  "id": 0,
  "is_bot": true,
  "language_code": "string",
  "last_name": "string",
  "supports_inline_queries": true,
  "username": "string"
}
```

This object represents a Telegram user or bot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_join_groups|boolean|false|none|*Optional*. True, if the bot can be invited to groups. Returned only in [getMe](https://core.telegram.org/bots/api/#getme).|
|can_read_all_group_messages|boolean|false|none|*Optional*. True, if [privacy mode](https://core.telegram.org/bots#privacy-mode) is disabled for the bot. Returned only in [getMe](https://core.telegram.org/bots/api/#getme).|
|first_name|string|true|none|User's or bot's first name|
|id|integer|true|none|Unique identifier for this user or bot|
|is_bot|boolean|true|none|True, if this user is a bot|
|language_code|string|false|none|*Optional*. [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the user's language|
|last_name|string|false|none|*Optional*. User's or bot's last name|
|supports_inline_queries|boolean|false|none|*Optional*. True, if the bot supports inline queries. Returned only in [getMe](https://core.telegram.org/bots/api/#getme).|
|username|string|false|none|*Optional*. User's or bot's username|

<h2 id="tocS_UserProfilePhotos">UserProfilePhotos</h2>
<!-- backwards compatibility -->
<a id="schemauserprofilephotos"></a>
<a id="schema_UserProfilePhotos"></a>
<a id="tocSuserprofilephotos"></a>
<a id="tocsuserprofilephotos"></a>

```json
{
  "photos": [
    [
      {
        "file_id": "string",
        "file_size": 0,
        "file_unique_id": "string",
        "height": 0,
        "width": 0
      }
    ]
  ],
  "total_count": 0
}
```

This object represent a user's profile pictures.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photos|[[[PhotoSize](#schemaphotosize)]]|true|none|Requested profile pictures (in up to 4 sizes each)|
|total_count|integer|true|none|Total number of profile pictures the target user has|

<h2 id="tocS_Venue">Venue</h2>
<!-- backwards compatibility -->
<a id="schemavenue"></a>
<a id="schema_Venue"></a>
<a id="tocSvenue"></a>
<a id="tocsvenue"></a>

```json
{
  "address": "string",
  "foursquare_id": "string",
  "foursquare_type": "string",
  "google_place_id": "string",
  "google_place_type": "string",
  "location": {
    "heading": 0,
    "horizontal_accuracy": 0,
    "latitude": 0,
    "live_period": 0,
    "longitude": 0,
    "proximity_alert_radius": 0
  },
  "title": "string"
}
```

This object represents a venue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Address of the venue|
|foursquare_id|string|false|none|*Optional*. Foursquare identifier of the venue|
|foursquare_type|string|false|none|*Optional*. Foursquare type of the venue. (For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.)|
|google_place_id|string|false|none|*Optional*. Google Places identifier of the venue|
|google_place_type|string|false|none|*Optional*. Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).)|
|location|[Location](#schemalocation)|true|none|This object represents a point on the map.|
|title|string|true|none|Name of the venue|

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "duration": 0,
  "file_id": "string",
  "file_name": "string",
  "file_size": 0,
  "file_unique_id": "string",
  "height": 0,
  "mime_type": "string",
  "thumb": {
    "file_id": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "height": 0,
    "width": 0
  },
  "width": 0
}
```

This object represents a video file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|integer|true|none|Duration of the video in seconds as defined by sender|
|file_id|string|true|none|Identifier for this file, which can be used to download or reuse the file|
|file_name|string|false|none|*Optional*. Original filename as defined by sender|
|file_size|integer|false|none|*Optional*. File size|
|file_unique_id|string|true|none|Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|
|height|integer|true|none|Video height as defined by sender|
|mime_type|string|false|none|*Optional*. Mime type of a file as defined by sender|
|thumb|[PhotoSize](#schemaphotosize)|false|none|This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail.|
|width|integer|true|none|Video width as defined by sender|

<h2 id="tocS_VideoNote">VideoNote</h2>
<!-- backwards compatibility -->
<a id="schemavideonote"></a>
<a id="schema_VideoNote"></a>
<a id="tocSvideonote"></a>
<a id="tocsvideonote"></a>

```json
{
  "duration": 0,
  "file_id": "string",
  "file_size": 0,
  "file_unique_id": "string",
  "length": 0,
  "thumb": {
    "file_id": "string",
    "file_size": 0,
    "file_unique_id": "string",
    "height": 0,
    "width": 0
  }
}
```

This object represents a [video message](https://telegram.org/blog/video-messages-and-telescope) (available in Telegram apps as of [v.4.0](https://telegram.org/blog/video-messages-and-telescope)).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|integer|true|none|Duration of the video in seconds as defined by sender|
|file_id|string|true|none|Identifier for this file, which can be used to download or reuse the file|
|file_size|integer|false|none|*Optional*. File size|
|file_unique_id|string|true|none|Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|
|length|integer|true|none|Video width and height (diameter of the video message) as defined by sender|
|thumb|[PhotoSize](#schemaphotosize)|false|none|This object represents one size of a photo or a [file](https://core.telegram.org/bots/api/#document) / [sticker](https://core.telegram.org/bots/api/#sticker) thumbnail.|

<h2 id="tocS_Voice">Voice</h2>
<!-- backwards compatibility -->
<a id="schemavoice"></a>
<a id="schema_Voice"></a>
<a id="tocSvoice"></a>
<a id="tocsvoice"></a>

```json
{
  "duration": 0,
  "file_id": "string",
  "file_size": 0,
  "file_unique_id": "string",
  "mime_type": "string"
}
```

This object represents a voice note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|integer|true|none|Duration of the audio in seconds as defined by sender|
|file_id|string|true|none|Identifier for this file, which can be used to download or reuse the file|
|file_size|integer|false|none|*Optional*. File size|
|file_unique_id|string|true|none|Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.|
|mime_type|string|false|none|*Optional*. MIME type of the file as defined by sender|

<h2 id="tocS_WebhookInfo">WebhookInfo</h2>
<!-- backwards compatibility -->
<a id="schemawebhookinfo"></a>
<a id="schema_WebhookInfo"></a>
<a id="tocSwebhookinfo"></a>
<a id="tocswebhookinfo"></a>

```json
{
  "allowed_updates": [
    "string"
  ],
  "has_custom_certificate": true,
  "ip_address": "string",
  "last_error_date": 0,
  "last_error_message": "string",
  "max_connections": 0,
  "pending_update_count": 0,
  "url": "string"
}
```

Contains information about the current status of a webhook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_updates|[string]|false|none|*Optional*. A list of update types the bot is subscribed to. Defaults to all update types|
|has_custom_certificate|boolean|true|none|True, if a custom certificate was provided for webhook certificate checks|
|ip_address|string|false|none|*Optional*. Currently used webhook IP address|
|last_error_date|integer|false|none|*Optional*. Unix time for the most recent error that happened when trying to deliver an update via webhook|
|last_error_message|string|false|none|*Optional*. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook|
|max_connections|integer|false|none|*Optional*. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery|
|pending_update_count|integer|true|none|Number of updates awaiting delivery|
|url|string|true|none|Webhook URL, may be empty if webhook is not set up|
