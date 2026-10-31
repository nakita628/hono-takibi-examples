<h1 id="messages-api">Messages API v1.4.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Messages API consolidates and normalises exchanges across all messaging channels. It allows you to use a single API to interact with our various channels such as SMS, MMS, WhatsApp, Viber and Facebook Messenger

Base URLs:

* <a href="https://api.nexmo.com/v1/messages">https://api.nexmo.com/v1/messages</a>

Email: <a href="mailto:devrel@nexmo.com">Nexmo DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Nexmo DevRel</a> 

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="messages-api-default">Default</h1>

## Send a message to the given channel.

<a id="opIdSendMessage"></a>

> Code samples

```bash
curl https://api.nexmo.com/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "client_ref": "string",
    "message_type": "text",
    "text": null,
    "channel": "sms",
    "from": "447700900001",
    "to": "447700900000"
  }'
```

`POST /`

Send a Message

> Body parameter

```json
{
  "client_ref": "string",
  "message_type": "text",
  "text": null,
  "channel": "sms",
  "from": "447700900001",
  "to": "447700900000"
}
```

<h3 id="send-a-message-to-the-given-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Send a Message.|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» message_type|body|string|true|The type of message to send. You must provide `text` in this field|
|» text|body|string|true|none|
|» text|body|object|true|The text of message to send; limited to 1000 characters. The Messages API automatically detects unicode characters when sending SMS and sends the message as a unicode SMS. For more information on how concatenation and encoding please visit: [developer.nexmo.com/messaging/sms/guides/concatenation-and-encoding](https://developer.nexmo.com/messaging/sms/guides/concatenation-and-encoding).<br>|
|» channel|body|string|true|The channel to send to. You must provide `sms` in this field|
|» from|body|[FromNumber](#schemafromnumber)|true|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» image|body|object|true|none|
|» » url|body|string(url)|true|The publicly accessible URL of the image attachment. The image file is available for 48 hours after it is created. Supported types are .jpg, .jpeg, and .png|
|» message_type|body|string|true|The type of message to send. You must provide `image` in this field|
|» image|body|object|true|none|
|» » caption|body|string|false|Additional text to accompany the image.|
|» » url|body|string|true|The URL of the image attachment.<br><br>Supports `.jpg`, `.jpeg`, `.png` and `.gif`.<br>|
|» channel|body|string|true|The channel to send to. You must provide `mms` in this field|
|» from|body|[FromNumber](#schemafromnumber)|true|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» message_type|body|string|true|The type of message to send. You must provide `vcard` in this field|
|» vcard|body|object|true|none|
|» » url|body|string(url)|true|The publicly accessible URL of the vCard attachment. Supported types are .vcf only|
|» vcard|body|object|true|none|
|» » url|body|string|true|The URL of the vCard attachment.<br><br>Supports `.vcf` only.<br>|
|» channel|body|string|true|The channel to send to. You must provide `mms` in this field|
|» from|body|[FromNumber](#schemafromnumber)|true|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» audio|body|object|true|none|
|» » url|body|string(url)|true|none|
|» message_type|body|string|true|The type of message to send. You must provide `audio` in this field|
|» audio|body|object|true|none|
|» » caption|body|string|false|Additional text to accompany the audio file.|
|» » url|body|string|true|The URL of the audio attachment.<br>|
|» message_type|body|string|true|The type of message to send. You must provide `audio` in this field.<br><br>For best device and network support .mp3 is recommended. Not supported for US short codes.<br>|
|» channel|body|string|true|The channel to send to. You must provide `mms` in this field|
|» from|body|[FromNumber](#schemafromnumber)|true|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» message_type|body|string|true|The type of message to send. You must provide `video` in this field|
|» video|body|object|true|none|
|» » url|body|string(url)|true|Publicly accessible URL of the video attachment. Supports file types .mp4 and .3gpp<br>> Note: Only supports video codec H.264 and audio codec AAC<br>|
|» message_type|body|string|true|The type of message to send. You must provide `video` in this field.<br><br>For best device and network support .mp4 is recommended. Not supported for US short codes.<br>|
|» video|body|object|true|none|
|» » caption|body|string|false|Additional text to accompany the video file.|
|» » url|body|string|true|The URL of the video attachment.<br>|
|» channel|body|string|true|The channel to send to. You must provide `mms` in this field|
|» from|body|[FromNumber](#schemafromnumber)|true|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» message_type|body|string|true|The type of message to send. You must provide `text` in this field|
|» text|body|string|true|none|
|» text|body|object|true|The text of message to send; limited to 4096 characters, including unicode.<br>|
|» channel|body|string|true|The channel to send to. You must provide `whatsapp` in this field|
|» from|body|[FromNumber](#schemafromnumber)|true|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» location|body|object|true|none|
|» » address|body|string|false|Address of the location. Only displayed if `name` is present.|
|» » lat|body|number|true|Latitude of the location.|
|» » long|body|number|true|Longitude of the location.|
|» » name|body|string|false|Name of the location.|
|» message_type|body|string|true|The type of message to send. You must provide `location` in this field|
|» text|body|object|false|The location to be sent in the message.<br>|
|» channel|body|string|true|The channel to send to. You must provide `whatsapp` in this field|
|» from|body|[FromNumber](#schemafromnumber)|true|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» image|body|object|true|none|
|» » url|body|string(url)|true|The publicly accessible URL of the image attachment. The image file is available for 48 hours after it is created. Supported types are .jpg, .jpeg, and .png|
|» message_type|body|string|true|The type of message to send. You must provide `image` in this field|
|» image|body|object|true|none|
|» » caption|body|string|false|Additional text to accompany the image.|
|» » url|body|string|true|The URL of the image attachment.<br><br>Supports `.jpg`, `.jpeg`, and `.png`.<br>|
|» channel|body|string|true|The channel to send to. You must provide `whatsapp` in this field|
|» from|body|[FromNumber](#schemafromnumber)|true|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» audio|body|object|true|none|
|» » url|body|string(url)|true|none|
|» message_type|body|string|true|The type of message to send. You must provide `audio` in this field|
|» audio|body|object|true|none|
|» » url|body|object|true|The URL of the audio attachment.<br><br>Supports `.aac`, `.m4a`, `.amr`, `.mp3` and `.opus`.<br>|
|» channel|body|string|true|The channel to send to. You must provide `whatsapp` in this field|
|» from|body|[FromNumber](#schemafromnumber)|true|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» message_type|body|string|true|The type of message to send. You must provide `video` in this field|
|» video|body|object|true|none|
|» » url|body|string(url)|true|Publicly accessible URL of the video attachment. Supports file types .mp4 and .3gpp<br>> Note: Only supports video codec H.264 and audio codec AAC<br>|
|» video|body|object|true|none|
|» » caption|body|string|false|Additional text to accompany the file.|
|» » url|body|object|true|The URL of the video attachment.<br><br>Supports `.mp4` and `.3gpp`. Note, only `H.264` video codec and `AAC` audio codec is supported.<br>|
|» channel|body|string|true|The channel to send to. You must provide `whatsapp` in this field|
|» from|body|[FromNumber](#schemafromnumber)|true|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» file|body|object|true|none|
|» » url|body|string|true|none|
|» message_type|body|string|true|The type of message to send. You must provide `file` in this field|
|» file|body|object|true|none|
|» » caption|body|string|false|Additional text to accompany the file.|
|» » url|body|object|true|The URL of the file attachment.<br><br>Supports supports a wide range of attachments including `.zip`, `.csv` and `.pdf`.<br>|
|» channel|body|string|true|The channel to send to. You must provide `whatsapp` in this field|
|» from|body|[FromNumber](#schemafromnumber)|true|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» message_type|body|string|true|The type of message to send. You must provide `template` in this field|
|» template|body|object|true|none|
|» » name|body|string|true|The name of the template. For WhatsApp use your WhatsApp namespace (available via Facebook Business Manager), followed by a colon : and the name of the template to use.|
|» » parameters|body|[TemplateParameters](#schematemplateparameters)|false|The parameters are an array of strings, with the first string being used for {{1}} in the template, with the second being {{2}} etc. Only required if the template specified by `name` contains parameters.|
|» channel|body|string|true|The channel to send to. You must provide `whatsapp` in this field|
|» from|body|[FromNumber](#schemafromnumber)|true|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» whatsapp|body|object|true|none|
|» » locale|body|string|true|The [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) language of the template. See [the WhatsApp documentation](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages-) for supported languages.|
|» » policy|body|string|false|Policy for resolving what language template to use. As of right now the only valid choice is `deterministic`.|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» custom|body|object|false|A custom payload, which is passed directly to WhatsApp for certain features such as templates and interactive messages. The schema of a custom object can vary widely. [Read more about Custom Objects](https://developer.vonage.com/messages/concepts/custom-objects).|
|» message_type|body|string|true|The type of message to send. You must provide `custom` in this field|
|» channel|body|string|true|The channel to send to. You must provide `whatsapp` in this field|
|» from|body|[FromNumber](#schemafromnumber)|true|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» message_type|body|string|true|The type of message to send. You must provide `text` in this field|
|» text|body|string|true|none|
|» text|body|object|true|The text of message to send; limited to 640 characters, including unicode.<br>|
|» channel|body|string|true|The channel to send to. You must provide `messenger` in this field|
|» from|body|[FromId](#schemafromid)|true|The ID of the message sender<br>|
|» messenger|body|object|false|none|
|» » category|body|string|false|The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.|
|» » tag|body|string|false|A tag describing the type and relevance of the 1:1 communication between your app and the end user. A full list of available tags is available [here](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)|
|» to|body|[ToId](#schematoid)|true|The ID of the message recipient<br>|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» image|body|object|true|none|
|» » url|body|string(url)|true|The publicly accessible URL of the image attachment. The image file is available for 48 hours after it is created. Supported types are .jpg, .jpeg, and .png|
|» message_type|body|string|true|The type of message to send. You must provide `image` in this field|
|» image|body|object|true|none|
|» » url|body|string|false|The URL of the image attachment.<br><br>Supports `.jpg`, `.jpeg`, `.png` and `.gif`.<br>|
|» channel|body|string|true|The channel to send to. You must provide `messenger` in this field|
|» from|body|[FromId](#schemafromid)|true|The ID of the message sender<br>|
|» messenger|body|object|false|none|
|» » category|body|string|false|The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.|
|» » tag|body|string|false|A tag describing the type and relevance of the 1:1 communication between your app and the end user. A full list of available tags is available [here](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)|
|» to|body|[ToId](#schematoid)|true|The ID of the message recipient<br>|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» audio|body|object|true|none|
|» » url|body|string(url)|true|none|
|» message_type|body|string|true|The type of message to send. You must provide `audio` in this field|
|» audio|body|object|true|none|
|» » url|body|object|false|The URL of the audio attachment.<br><br>Only supports `.mp3` files<br>|
|» channel|body|string|true|The channel to send to. You must provide `messenger` in this field|
|» from|body|[FromId](#schemafromid)|true|The ID of the message sender<br>|
|» messenger|body|object|false|none|
|» » category|body|string|false|The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.|
|» » tag|body|string|false|A tag describing the type and relevance of the 1:1 communication between your app and the end user. A full list of available tags is available [here](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)|
|» to|body|[ToId](#schematoid)|true|The ID of the message recipient<br>|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» message_type|body|string|true|The type of message to send. You must provide `video` in this field|
|» video|body|object|true|none|
|» » url|body|string(url)|true|Publicly accessible URL of the video attachment. Supports file types .mp4 and .3gpp<br>> Note: Only supports video codec H.264 and audio codec AAC<br>|
|» video|body|object|true|none|
|» » url|body|object|false|The URL of the video attachment.<br><br>Supports `.mp4` files. Note, only `H.264` video codec and `AAC` audio codec is supported.<br>|
|» channel|body|string|true|The channel to send to. You must provide `messenger` in this field|
|» from|body|[FromId](#schemafromid)|true|The ID of the message sender<br>|
|» messenger|body|object|false|none|
|» » category|body|string|false|The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.|
|» » tag|body|string|false|A tag describing the type and relevance of the 1:1 communication between your app and the end user. A full list of available tags is available [here](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)|
|» to|body|[ToId](#schematoid)|true|The ID of the message recipient<br>|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» file|body|object|true|none|
|» » url|body|string|true|none|
|» message_type|body|string|true|The type of message to send. You must provide `file` in this field|
|» file|body|object|true|none|
|» » url|body|object|false|The URL of the file attachment.<br><br>Supports a wide range of attachments including `.zip`, `.csv` and `.pdf`.<br>|
|» channel|body|string|true|The channel to send to. You must provide `messenger` in this field|
|» from|body|[FromId](#schemafromid)|true|The ID of the message sender<br>|
|» messenger|body|object|false|none|
|» » category|body|string|false|The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.|
|» » tag|body|string|false|A tag describing the type and relevance of the 1:1 communication between your app and the end user. A full list of available tags is available [here](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)|
|» to|body|[ToId](#schematoid)|true|The ID of the message recipient<br>|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» message_type|body|string|true|The type of message to send. You must provide `text` in this field|
|» text|body|string|true|none|
|» text|body|object|true|The text of message to send; limited to 1000 characters, including unicode.<br>|
|» channel|body|string|true|The channel to send to. You must provide `viber_service` in this field|
|» from|body|[FromId](#schemafromid)|true|The ID of the message sender<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» viber_service|body|object|false|none|
|» » action|body|object|false|Node for Viber action buttons.|
|» » » text|body|string|false|Text which is rendered on the action button.|
|» » » url|body|string|false|A URL which is requested when the action button is clicked.|
|» » category|body|string|false|The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.|
|» » ttl|body|integer|false|Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.|
|» » type|body|string|false|Viber-specific type definition. To use "template", please contact your Vonage Account Manager to setup your templates. To find out more please visit the [product page](https://www.vonage.com/communications-apis/messages/)|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» image|body|object|true|none|
|» » url|body|string(url)|true|The publicly accessible URL of the image attachment. The image file is available for 48 hours after it is created. Supported types are .jpg, .jpeg, and .png|
|» message_type|body|string|true|The type of message to send. You must provide `image` in this field|
|» image|body|object|true|none|
|» » caption|body|string|false|A caption to accompany the image. Required if the message includes an action button.|
|» » url|body|string|false|The URL of the image attachment.<br><br>Supports `.jpg`, `.jpeg`, and `.png`.<br>|
|» channel|body|string|true|The channel to send to. You must provide `viber_service` in this field|
|» from|body|[FromId](#schemafromid)|true|The ID of the message sender<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» viber_service|body|object|false|none|
|» » action|body|object|false|Node for Viber action buttons.|
|» » » text|body|string|false|Text which is rendered on the action button.|
|» » » url|body|string|false|A URL which is requested when the action button is clicked.|
|» » category|body|string|false|The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.|
|» » ttl|body|integer|false|Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.|
|» » type|body|string|false|Viber-specific type definition. To use "template", please contact your Vonage Account Manager to setup your templates. To find out more please visit the [product page](https://www.vonage.com/communications-apis/messages/)|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» message_type|body|string|true|The type of message to send. You must provide `video` in this field|
|» video|body|object|true|none|
|» » url|body|string(url)|true|Publicly accessible URL of the video attachment. Supports file types .mp4 and .3gpp<br>> Note: Only supports video codec H.264 and audio codec AAC<br>|
|» video|body|object|true|none|
|» » caption|body|string|false|Text caption to accompany message.|
|» » thumb_url|body|string|true|URL to an image file for a thumbnail preview of the video.|
|» » url|body|string|true|The URL of the video attachment.|
|» channel|body|string|true|The channel to send to. You must provide `viber_service` in this field|
|» from|body|[FromId](#schemafromid)|true|The ID of the message sender<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» viber_service|body|object|false|none|
|» » category|body|string|false|The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.|
|» » duration|body|string|false|The duration of the video in seconds.|
|» » file_size|body|string|false|The file size of the video in MB.|
|» » ttl|body|integer|false|Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.|
|» » type|body|string|false|Viber-specific type definition. To use "template", please contact your Vonage Account Manager to setup your templates. To find out more please visit the [product page](https://www.vonage.com/communications-apis/messages/)|
|» *oneOf*|body|object|false|none|
|» client_ref|body|string|false|Client reference of up to 100 characters. The reference will be present in every message status.|
|» file|body|object|true|none|
|» » url|body|string|true|none|
|» message_type|body|string|true|The type of message to send. You must provide `file` in this field|
|» file|body|object|true|An object containing details of the file to be sent. Note: allowed file types are `.doc,` `.docx`, `.rtf`, `.dot`, `.dotx`, `.odt`, `.odf`, `.fodt`, `.txt`, `.info`, `.pdf`, `.xps`, `.pdax`, `.eps`, `.xls`, `.xlsx`, `.ods`, `.fods`, `.csv`, `.xlsm`, `.xltx`. Maximum file size is 200MB|
|» » name|body|string|false|The name and extension of the file.|
|» » url|body|string|false|The URL for the file attachment *or* the path for the location of the file attachement. If `name` is included, can just be the path. If  `name` is not included, must include the filename and extension.|
|» channel|body|string|true|The channel to send to. You must provide `viber_service` in this field|
|» from|body|[FromId](#schemafromid)|true|The ID of the message sender<br>|
|» to|body|[ToNumber](#schematonumber)|true|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|» viber_service|body|object|false|none|
|» » category|body|string|false|The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative & a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.|
|» » ttl|body|integer|false|Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.|
|» » type|body|string|false|Viber-specific type definition. To use "template", please contact your Vonage Account Manager to setup your templates. To find out more please visit the [product page](https://www.vonage.com/communications-apis/messages/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» message_type|text|
|» channel|sms|
|» message_type|image|
|» channel|mms|
|» message_type|vcard|
|» channel|mms|
|» message_type|audio|
|» message_type|audio|
|» channel|mms|
|» message_type|video|
|» message_type|video|
|» channel|mms|
|» message_type|text|
|» channel|whatsapp|
|» message_type|location|
|» channel|whatsapp|
|» message_type|image|
|» channel|whatsapp|
|» message_type|audio|
|» channel|whatsapp|
|» message_type|video|
|» channel|whatsapp|
|» message_type|file|
|» channel|whatsapp|
|» message_type|template|
|» channel|whatsapp|
|» » policy|deterministic|
|» message_type|custom|
|» channel|whatsapp|
|» message_type|text|
|» channel|messenger|
|» » category|response|
|» » category|update|
|» » category|message_tag|
|» message_type|image|
|» channel|messenger|
|» » category|response|
|» » category|update|
|» » category|message_tag|
|» message_type|audio|
|» channel|messenger|
|» » category|response|
|» » category|update|
|» » category|message_tag|
|» message_type|video|
|» channel|messenger|
|» » category|response|
|» » category|update|
|» » category|message_tag|
|» message_type|file|
|» channel|messenger|
|» » category|response|
|» » category|update|
|» » category|message_tag|
|» message_type|text|
|» channel|viber_service|
|» » category|transaction|
|» » category|promotion|
|» message_type|image|
|» channel|viber_service|
|» » category|transaction|
|» » category|promotion|
|» message_type|video|
|» channel|viber_service|
|» » category|transaction|
|» » category|promotion|
|» message_type|file|
|» channel|viber_service|
|» » category|transaction|
|» » category|promotion|

> Example responses

> 202 Response

```json
{
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
}
```

> 401 Response

```json
{
  "detail": "Check that you're using the correct credentials, and that your account has this feature enabled",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "You did not provide correct credentials.",
  "type": "https://developer.nexmo.com/api-errors/#unathorized"
}
```

> 402 Response

```json
{
  "detail": "This request could not be performed due to your account balance being low.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Low balance",
  "type": "https://developer.nexmo.com/api-errors/#low-balance"
}
```

> 422 Response

```json
{
  "detail": "Unexpected character ('\"' (code 34)): was expecting comma to separate Object entries",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "The request body did not contain valid JSON",
  "type": "https://developer.nexmo.com/api-errors#invalid-json"
}
```

> 429 Response

```json
{
  "detail": "Please wait, then retry your request",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Rate Limit Hit",
  "type": "https://developer.nexmo.com/api-errors/messages-olympus#1000"
}
```

> 500 Response

```json
{
  "detail": "There was an error processing your request in the Platform.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Internal error",
  "type": "https://developer.nexmo.com/api-errors/messages-olympus#1000"
}
```

<h3 id="send-a-message-to-the-given-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted.|Inline|
|401|Unauthorized|Authentication failure|Inline|
|402|Payment Required|Payment Required|[ErrorPaymentRequired](#schemaerrorpaymentrequired)|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|429|Too Many Requests|Too Many Requests|[ErrorThrottled](#schemaerrorthrottled)|
|500|Internal Server Error|Internal error|[ErrorInternal](#schemaerrorinternal)|

<h3 id="send-a-message-to-the-given-channel-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|SMS|
|message_uuid|[MessageUuid](#schemamessageuuid)|false|none|The UUID of the message|
|*oneOf*|object|false|none|MMS|
|message_uuid|[MessageUuid](#schemamessageuuid)|false|none|The UUID of the message|
|*oneOf*|object|false|none|WhatsApp|
|message_uuid|[MessageUuid](#schemamessageuuid)|false|none|The UUID of the message|
|*oneOf*|object|false|none|Messenger|
|message_uuid|[MessageUuid](#schemamessageuuid)|false|none|The UUID of the message|
|*oneOf*|object|false|none|Viber|
|message_uuid|[MessageUuid](#schemamessageuuid)|false|none|The UUID of the message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorUnauthorizedMissingCredentials](#schemaerrorunauthorizedmissingcredentials)|false|none|Missing or Invalid Credentials|
|*oneOf*|[ErrorUnauthorizedInvalidApplication](#schemaerrorunauthorizedinvalidapplication)|false|none|Invalid Application Type|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorInvalidJson](#schemaerrorinvalidjson)|false|none|Invalid JSON|
|*oneOf*|[ErrorChannel](#schemaerrorchannel)|false|none|Unsupported channel|
|*oneOf*|[ErrorChannelParams](#schemaerrorchannelparams)|false|none|Invalid channel parameters|
|*oneOf*|[ErrorSender](#schemaerrorsender)|false|none|Invalid sender|
|*oneOf*|[ErrorRecipient](#schemaerrorrecipient)|false|none|Invalid recipient|
|*oneOf*|[ErrorMessageType](#schemaerrormessagetype)|false|none|Invalid message type|
|*oneOf*|[ErrorMessageParams](#schemaerrormessageparams)|false|none|Invalid message parameters|
|*oneOf*|[ErrorClientReference](#schemaerrorclientreference)|false|none|Invalid client reference|

<h3 id="send-a-message-to-the-given-channel-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|message-status|{$request.body#/callback}|POST|Message Status|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

# Schemas

<h2 id="tocS_Audio">Audio</h2>
<!-- backwards compatibility -->
<a id="schemaaudio"></a>
<a id="schema_Audio"></a>
<a id="tocSaudio"></a>
<a id="tocsaudio"></a>

```json
{
  "client_ref": "string",
  "audio": {
    "url": "https://example.com/audio.mp3"
  },
  "message_type": "audio"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|audio|object|true|none|none|
|message_type|string|true|none|The type of message to send. You must provide `audio` in this field|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|audio|

<h2 id="tocS_Context">Context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_Context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
{
  "message_from": "447700900000",
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "whatsapp_referred_product": {
    "catalog_id": "1267260820787549",
    "product_retailer_id": "r07qei73l7"
  }
}
```

This is only present for the Inbound Message where the user is quoting another message, or for a `product` message where the user has selected the 'Message Business' 
option. It provides information about the quoted message and/or the product message being responded to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_from|string|true|none|The phone number of the **original sender** of the message being quoted in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Not present in a `context` object which is the result of a user selecting 'Message Business' in a `product` message.|
|message_uuid|string|true|none|The UUID of the message being quoted. Not present in a `context` object which is the result of a user selecting 'Message Business' in a `product` message.|
|whatsapp_referred_product|object|false|none|An object containing details of a product from a `product` message being quoted or replied to using the 'Message Business' option.<br>|

<h2 id="tocS_Custom">Custom</h2>
<!-- backwards compatibility -->
<a id="schemacustom"></a>
<a id="schema_Custom"></a>
<a id="tocScustom"></a>
<a id="tocscustom"></a>

```json
{
  "client_ref": "string",
  "custom": {},
  "message_type": "custom"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|custom|object|false|none|A custom payload, which is passed directly to WhatsApp for certain features such as templates and interactive messages. The schema of a custom object can vary widely. [Read more about Custom Objects](https://developer.vonage.com/messages/concepts/custom-objects).|
|message_type|string|true|none|The type of message to send. You must provide `custom` in this field|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|custom|

<h2 id="tocS_ErrorChannel">ErrorChannel</h2>
<!-- backwards compatibility -->
<a id="schemaerrorchannel"></a>
<a id="schema_ErrorChannel"></a>
<a id="tocSerrorchannel"></a>
<a id="tocserrorchannel"></a>

```json
{
  "detail": "The specified channel is not supported.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Unsupported channel",
  "type": "https://developer.nexmo.com/api-errors/messages-olympus#1100"
}
```

Unsupported channel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorChannelParams">ErrorChannelParams</h2>
<!-- backwards compatibility -->
<a id="schemaerrorchannelparams"></a>
<a id="schema_ErrorChannelParams"></a>
<a id="tocSerrorchannelparams"></a>
<a id="tocserrorchannelparams"></a>

```json
{
  "detail": "The value of one or more parameters is invalid.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "invalid_parameters": [
    {
      "name": "messenger.category",
      "reason": "Must be one of `response`, `update` or `message_tag`."
    }
  ],
  "title": "Invalid channel parameters",
  "type": "https://developer.nexmo.com/api-errors/messages-olympus#1110"
}
```

Invalid channel parameters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|invalid_parameters|[object]|false|none|none|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorClientReference">ErrorClientReference</h2>
<!-- backwards compatibility -->
<a id="schemaerrorclientreference"></a>
<a id="schema_ErrorClientReference"></a>
<a id="tocSerrorclientreference"></a>
<a id="tocserrorclientreference"></a>

```json
{
  "detail": "The client reference can be a string of up to 40 characters.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid client reference",
  "type": "https://developer.nexmo.com/api-errors/messages-olympus#1060"
}
```

Invalid client reference

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorInternal">ErrorInternal</h2>
<!-- backwards compatibility -->
<a id="schemaerrorinternal"></a>
<a id="schema_ErrorInternal"></a>
<a id="tocSerrorinternal"></a>
<a id="tocserrorinternal"></a>

```json
{
  "detail": "There was an error processing your request in the Platform.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Internal error",
  "type": "https://developer.nexmo.com/api-errors/messages-olympus#1000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorInvalidJson">ErrorInvalidJson</h2>
<!-- backwards compatibility -->
<a id="schemaerrorinvalidjson"></a>
<a id="schema_ErrorInvalidJson"></a>
<a id="tocSerrorinvalidjson"></a>
<a id="tocserrorinvalidjson"></a>

```json
{
  "detail": "Unexpected character ('\"' (code 34)): was expecting comma to separate Object entries",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "The request body did not contain valid JSON",
  "type": "https://developer.nexmo.com/api-errors#invalid-json"
}
```

Invalid JSON

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorMessageParams">ErrorMessageParams</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessageparams"></a>
<a id="schema_ErrorMessageParams"></a>
<a id="tocSerrormessageparams"></a>
<a id="tocserrormessageparams"></a>

```json
{
  "detail": "The value of one or more parameters is invalid.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "invalid_parameters": [
    {
      "name": "image.url",
      "reason": "is required."
    }
  ],
  "title": "Invalid params",
  "type": "https://developer.nexmo.com/api-errors/messages-olympus#1150"
}
```

Invalid message parameters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|invalid_parameters|[object]|false|none|none|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorMessageType">ErrorMessageType</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessagetype"></a>
<a id="schema_ErrorMessageType"></a>
<a id="tocSerrormessagetype"></a>
<a id="tocserrormessagetype"></a>

```json
{
  "detail": "The `to` parameter is invalid for the given channel.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid message type",
  "type": "https://developer.nexmo.com/api-errors/messages-olympus#1140"
}
```

Invalid message type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorPaymentRequired">ErrorPaymentRequired</h2>
<!-- backwards compatibility -->
<a id="schemaerrorpaymentrequired"></a>
<a id="schema_ErrorPaymentRequired"></a>
<a id="tocSerrorpaymentrequired"></a>
<a id="tocserrorpaymentrequired"></a>

```json
{
  "detail": "This request could not be performed due to your account balance being low.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Low balance",
  "type": "https://developer.nexmo.com/api-errors/#low-balance"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorRecipient">ErrorRecipient</h2>
<!-- backwards compatibility -->
<a id="schemaerrorrecipient"></a>
<a id="schema_ErrorRecipient"></a>
<a id="tocSerrorrecipient"></a>
<a id="tocserrorrecipient"></a>

```json
{
  "detail": "The `to` parameter is invalid for the given channel.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid recipient",
  "type": "https://developer.nexmo.com/api-errors/messages-olympus#110"
}
```

Invalid recipient

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorSender">ErrorSender</h2>
<!-- backwards compatibility -->
<a id="schemaerrorsender"></a>
<a id="schema_ErrorSender"></a>
<a id="tocSerrorsender"></a>
<a id="tocserrorsender"></a>

```json
{
  "detail": "The `from` parameter is invalid for the given channel.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid sender",
  "type": "https://developer.nexmo.com/api-errors/messages-olympus#1120"
}
```

Invalid sender

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorThrottled">ErrorThrottled</h2>
<!-- backwards compatibility -->
<a id="schemaerrorthrottled"></a>
<a id="schema_ErrorThrottled"></a>
<a id="tocSerrorthrottled"></a>
<a id="tocserrorthrottled"></a>

```json
{
  "detail": "Please wait, then retry your request",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Rate Limit Hit",
  "type": "https://developer.nexmo.com/api-errors/messages-olympus#1000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorUnauthorizedInvalidApplication">ErrorUnauthorizedInvalidApplication</h2>
<!-- backwards compatibility -->
<a id="schemaerrorunauthorizedinvalidapplication"></a>
<a id="schema_ErrorUnauthorizedInvalidApplication"></a>
<a id="tocSerrorunauthorizedinvalidapplication"></a>
<a id="tocserrorunauthorizedinvalidapplication"></a>

```json
{
  "detail": "Check your API key is correct and has been whitelisted",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "The crendentials provided do not have access to the requested product",
  "type": "https://developer.nexmo.com/api-errors/#unprovisioned"
}
```

Invalid Application Type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_ErrorUnauthorizedMissingCredentials">ErrorUnauthorizedMissingCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaerrorunauthorizedmissingcredentials"></a>
<a id="schema_ErrorUnauthorizedMissingCredentials"></a>
<a id="tocSerrorunauthorizedmissingcredentials"></a>
<a id="tocserrorunauthorizedmissingcredentials"></a>

```json
{
  "detail": "Check that you're using the correct credentials, and that your account has this feature enabled",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "You did not provide correct credentials.",
  "type": "https://developer.nexmo.com/api-errors/#unathorized"
}
```

Missing or Invalid Credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "client_ref": "string",
  "file": {
    "url": "https://example.com/file.pdf"
  },
  "message_type": "file"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|file|object|true|none|none|
|message_type|string|true|none|The type of message to send. You must provide `file` in this field|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|file|

<h2 id="tocS_FromId">FromId</h2>
<!-- backwards compatibility -->
<a id="schemafromid"></a>
<a id="schema_FromId"></a>
<a id="tocSfromid"></a>
<a id="tocsfromid"></a>

```json
"9876543210"
```

The ID of the message sender

<h2 id="tocS_FromNumber">FromNumber</h2>
<!-- backwards compatibility -->
<a id="schemafromnumber"></a>
<a id="schema_FromNumber"></a>
<a id="tocSfromnumber"></a>
<a id="tocsfromnumber"></a>

```json
"447700900001"
```

The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "client_ref": "string",
  "image": {
    "url": "https://example.com/image.jpg"
  },
  "message_type": "image"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|image|object|true|none|none|
|message_type|string|true|none|The type of message to send. You must provide `image` in this field|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|image|

<h2 id="tocS_InboundMessengerMessageCommon">InboundMessengerMessageCommon</h2>
<!-- backwards compatibility -->
<a id="schemainboundmessengermessagecommon"></a>
<a id="schema_InboundMessengerMessageCommon"></a>
<a id="tocSinboundmessengermessagecommon"></a>
<a id="tocsinboundmessengermessagecommon"></a>

```json
{
  "channel": "messenger",
  "from": "9876543210",
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "timestamp": "2020-01-01T14:00:00.000Z",
  "to": "0123456789"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|true|none|The channel that the message came in on|
|from|[FromId](#schemafromid)|true|none|The ID of the message sender<br>|
|message_uuid|[MessageUuid](#schemamessageuuid)|true|none|The UUID of the message|
|timestamp|[Timestamp](#schematimestamp)|true|none|The datetime of when the event occurred, in `ISO 8601` format.|
|to|[ToId](#schematoid)|true|none|The ID of the message recipient<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|messenger|

<h2 id="tocS_InboundViberMessageCommon">InboundViberMessageCommon</h2>
<!-- backwards compatibility -->
<a id="schemainboundvibermessagecommon"></a>
<a id="schema_InboundViberMessageCommon"></a>
<a id="tocSinboundvibermessagecommon"></a>
<a id="tocsinboundvibermessagecommon"></a>

```json
{
  "channel": "viber_service",
  "context": {
    "message_uuid": "1234567890abcdef"
  },
  "from": "447700900001",
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "timestamp": "2020-01-01T14:00:00.000Z",
  "to": "0123456789"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|true|none|The channel that the message came in on|
|context|object|false|none|Object containing contextual details for the inbound message when it is a response to another message.|
|from|[FromNumber](#schemafromnumber)|true|none|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|message_uuid|[MessageUuid](#schemamessageuuid)|true|none|The UUID of the message|
|timestamp|[Timestamp](#schematimestamp)|true|none|The datetime of when the event occurred, in `ISO 8601` format.|
|to|[ToId](#schematoid)|true|none|The ID of the message recipient<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|viber_service|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "client_ref": "string",
  "location": {
    "address": "23 Main St, Holmdel, NJ 07733, USA",
    "lat": 40.34772,
    "long": -74.18847,
    "name": "Vonage"
  },
  "message_type": "location"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|location|object|true|none|none|
|message_type|string|true|none|The type of message to send. You must provide `location` in this field|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|location|

<h2 id="tocS_MessageUuid">MessageUuid</h2>
<!-- backwards compatibility -->
<a id="schemamessageuuid"></a>
<a id="schema_MessageUuid"></a>
<a id="tocSmessageuuid"></a>
<a id="tocsmessageuuid"></a>

```json
"aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
```

The UUID of the message

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "client_ref": "string",
  "message_type": "order",
  "order": {
    "catalog_id": "2806150799683508",
    "product_items": [
      {
        "currency": "USD",
        "item_price": "9.99",
        "product_retailer_id": "pk1v7rudbg",
        "quantity": "1"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|message_type|string|true|none|The type of message to send.|
|order|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|order|

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "name": "Jane Smith"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The WhatsApp number's displayed profile name|

<h2 id="tocS_Reply">Reply</h2>
<!-- backwards compatibility -->
<a id="schemareply"></a>
<a id="schema_Reply"></a>
<a id="tocSreply"></a>
<a id="tocsreply"></a>

```json
{
  "client_ref": "string",
  "message_type": "reply",
  "reply": {
    "description": "Select 9am appointmaent time",
    "id": "row1",
    "title": "9am"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|message_type|string|true|none|The type of message to send. You must provide `custom` in this field.|
|reply|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|reply|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "client_ref": "string",
  "message_type": "template",
  "template": {
    "name": "9b6b4fcb_da19_4a26_8fe8_78074a91b584:verify",
    "parameters": [
      "Verification",
      "2526",
      "5"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|message_type|string|true|none|The type of message to send. You must provide `template` in this field|
|template|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|template|

<h2 id="tocS_TemplateParameters">TemplateParameters</h2>
<!-- backwards compatibility -->
<a id="schematemplateparameters"></a>
<a id="schema_TemplateParameters"></a>
<a id="tocStemplateparameters"></a>
<a id="tocstemplateparameters"></a>

```json
[
  "Verification",
  "2526",
  "5"
]
```

The parameters are an array of strings, with the first string being used for {{1}} in the template, with the second being {{2}} etc. Only required if the template specified by `name` contains parameters.

<h2 id="tocS_Text">Text</h2>
<!-- backwards compatibility -->
<a id="schematext"></a>
<a id="schema_Text"></a>
<a id="tocStext"></a>
<a id="tocstext"></a>

```json
{
  "client_ref": "string",
  "message_type": "text",
  "text": "Nexmo Verification code: 12345.<br />Valid for 10 minutes."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|message_type|string|true|none|The type of message to send. You must provide `text` in this field|
|text|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|text|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"2020-01-01T14:00:00.000Z"
```

The datetime of when the event occurred, in `ISO 8601` format.

<h2 id="tocS_ToId">ToId</h2>
<!-- backwards compatibility -->
<a id="schematoid"></a>
<a id="schema_ToId"></a>
<a id="tocStoid"></a>
<a id="tocstoid"></a>

```json
"0123456789"
```

The ID of the message recipient

<h2 id="tocS_ToNumber">ToNumber</h2>
<!-- backwards compatibility -->
<a id="schematonumber"></a>
<a id="schema_ToNumber"></a>
<a id="tocStonumber"></a>
<a id="tocstonumber"></a>

```json
"447700900000"
```

The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.

<h2 id="tocS_Unsupported">Unsupported</h2>
<!-- backwards compatibility -->
<a id="schemaunsupported"></a>
<a id="schema_Unsupported"></a>
<a id="tocSunsupported"></a>
<a id="tocsunsupported"></a>

```json
{
  "client_ref": "string",
  "message_type": "unsupported"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|message_type|string|true|none|The type of message to send. Will be `unsupported` if the type of message received from user is not supported by the channel.|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|unsupported|

<h2 id="tocS_Usage">Usage</h2>
<!-- backwards compatibility -->
<a id="schemausage"></a>
<a id="schema_Usage"></a>
<a id="tocSusage"></a>
<a id="tocsusage"></a>

```json
{
  "currency": "EUR",
  "price": "0.0333"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The charge currency in ISO 4217 format.|
|price|string|false|none|The charge amount as a stringified number.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|EUR|

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "client_ref": "string",
  "message_type": "video",
  "video": {
    "url": "https://example.com/video.mp4"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|message_type|string|true|none|The type of message to send. You must provide `video` in this field|
|video|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|video|

<h2 id="tocS_baseMessageType">baseMessageType</h2>
<!-- backwards compatibility -->
<a id="schemabasemessagetype"></a>
<a id="schema_baseMessageType"></a>
<a id="tocSbasemessagetype"></a>
<a id="tocsbasemessagetype"></a>

```json
{
  "client_ref": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|

<h2 id="tocS_channelOptionsMessenger">channelOptionsMessenger</h2>
<!-- backwards compatibility -->
<a id="schemachanneloptionsmessenger"></a>
<a id="schema_channelOptionsMessenger"></a>
<a id="tocSchanneloptionsmessenger"></a>
<a id="tocschanneloptionsmessenger"></a>

```json
{
  "channel": "messenger",
  "from": "9876543210",
  "messenger": {
    "category": "response",
    "tag": "CONFIRMED_EVENT_UPDATE"
  },
  "to": "0123456789"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|The channel to send to. You must provide `messenger` in this field|
|from|[FromId](#schemafromid)|false|none|The ID of the message sender<br>|
|messenger|object|false|none|none|
|to|[ToId](#schematoid)|false|none|The ID of the message recipient<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|messenger|

<h2 id="tocS_channelOptionsMms">channelOptionsMms</h2>
<!-- backwards compatibility -->
<a id="schemachanneloptionsmms"></a>
<a id="schema_channelOptionsMms"></a>
<a id="tocSchanneloptionsmms"></a>
<a id="tocschanneloptionsmms"></a>

```json
{
  "channel": "mms",
  "from": "447700900001",
  "to": "447700900000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|The channel to send to. You must provide `mms` in this field|
|from|[FromNumber](#schemafromnumber)|false|none|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|to|[ToNumber](#schematonumber)|false|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|mms|

<h2 id="tocS_channelOptionsSms">channelOptionsSms</h2>
<!-- backwards compatibility -->
<a id="schemachanneloptionssms"></a>
<a id="schema_channelOptionsSms"></a>
<a id="tocSchanneloptionssms"></a>
<a id="tocschanneloptionssms"></a>

```json
{
  "channel": "sms",
  "from": "447700900001",
  "to": "447700900000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|The channel to send to. You must provide `sms` in this field|
|from|[FromNumber](#schemafromnumber)|false|none|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|to|[ToNumber](#schematonumber)|false|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|sms|

<h2 id="tocS_channelOptionsViber">channelOptionsViber</h2>
<!-- backwards compatibility -->
<a id="schemachanneloptionsviber"></a>
<a id="schema_channelOptionsViber"></a>
<a id="tocSchanneloptionsviber"></a>
<a id="tocschanneloptionsviber"></a>

```json
{
  "channel": "viber_service",
  "from": "9876543210",
  "to": "447700900000",
  "viber_service": {
    "category": "transaction",
    "ttl": 600,
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|The channel to send to. You must provide `viber_service` in this field|
|from|[FromId](#schemafromid)|false|none|The ID of the message sender<br>|
|to|[ToNumber](#schematonumber)|false|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|viber_service|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|viber_service|

<h2 id="tocS_channelOptionsViberVideo">channelOptionsViberVideo</h2>
<!-- backwards compatibility -->
<a id="schemachanneloptionsvibervideo"></a>
<a id="schema_channelOptionsViberVideo"></a>
<a id="tocSchanneloptionsvibervideo"></a>
<a id="tocschanneloptionsvibervideo"></a>

```json
{
  "channel": "viber_service",
  "from": "9876543210",
  "to": "447700900000",
  "viber_service": {
    "category": "transaction",
    "duration": "123",
    "file_size": "1",
    "ttl": 600,
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|The channel to send to. You must provide `viber_service` in this field|
|from|[FromId](#schemafromid)|false|none|The ID of the message sender<br>|
|to|[ToNumber](#schematonumber)|false|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|viber_service|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|viber_service|

<h2 id="tocS_channelOptionsViberWithButton">channelOptionsViberWithButton</h2>
<!-- backwards compatibility -->
<a id="schemachanneloptionsviberwithbutton"></a>
<a id="schema_channelOptionsViberWithButton"></a>
<a id="tocSchanneloptionsviberwithbutton"></a>
<a id="tocschanneloptionsviberwithbutton"></a>

```json
{
  "channel": "viber_service",
  "from": "9876543210",
  "to": "447700900000",
  "viber_service": {
    "action": {
      "text": "Find out more",
      "url": "https://example.com/page1.html"
    },
    "category": "transaction",
    "ttl": 600,
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|The channel to send to. You must provide `viber_service` in this field|
|from|[FromId](#schemafromid)|false|none|The ID of the message sender<br>|
|to|[ToNumber](#schematonumber)|false|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|viber_service|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|viber_service|

<h2 id="tocS_channelOptionsWhatsapp">channelOptionsWhatsapp</h2>
<!-- backwards compatibility -->
<a id="schemachanneloptionswhatsapp"></a>
<a id="schema_channelOptionsWhatsapp"></a>
<a id="tocSchanneloptionswhatsapp"></a>
<a id="tocschanneloptionswhatsapp"></a>

```json
{
  "channel": "whatsapp",
  "from": "447700900001",
  "to": "447700900000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|The channel to send to. You must provide `whatsapp` in this field|
|from|[FromNumber](#schemafromnumber)|false|none|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|to|[ToNumber](#schematonumber)|false|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|whatsapp|

<h2 id="tocS_inboundMessageMMS">inboundMessageMMS</h2>
<!-- backwards compatibility -->
<a id="schemainboundmessagemms"></a>
<a id="schema_inboundMessageMMS"></a>
<a id="tocSinboundmessagemms"></a>
<a id="tocsinboundmessagemms"></a>

```json
{
  "channel": "mms",
  "from": "447700900001",
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "timestamp": "2020-01-01T14:00:00.000Z",
  "to": "447700900000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|true|none|The channel the message came in on|
|from|[FromNumber](#schemafromnumber)|true|none|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|message_uuid|[MessageUuid](#schemamessageuuid)|true|none|The UUID of the message|
|timestamp|[Timestamp](#schematimestamp)|true|none|The datetime of when the event occurred, in `ISO 8601` format.|
|to|[ToNumber](#schematonumber)|true|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|mms|

<h2 id="tocS_inboundMessageSMS">inboundMessageSMS</h2>
<!-- backwards compatibility -->
<a id="schemainboundmessagesms"></a>
<a id="schema_inboundMessageSMS"></a>
<a id="tocSinboundmessagesms"></a>
<a id="tocsinboundmessagesms"></a>

```json
{
  "channel": "sms",
  "from": "447700900001",
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "sms": {
    "keyword": "HELLO",
    "num_messages": "2"
  },
  "text": "Hello From Vonage!",
  "timestamp": "2020-01-01T14:00:00.000Z",
  "to": "447700900000",
  "usage": {
    "currency": "EUR",
    "price": "0.0333"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|true|none|The channel the message came in on|
|from|[FromNumber](#schemafromnumber)|true|none|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|message_uuid|[MessageUuid](#schemamessageuuid)|true|none|The UUID of the message|
|sms|object|false|none|Channel specific metadata for SMS|
|text|string|true|none|The UTF-8 encoded text of the inbound message.<br>|
|timestamp|[Timestamp](#schematimestamp)|true|none|The datetime of when the event occurred, in `ISO 8601` format.|
|to|[ToNumber](#schematonumber)|true|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|usage|[Usage](#schemausage)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|sms|

<h2 id="tocS_inboundWhatsAppMessageCommon">inboundWhatsAppMessageCommon</h2>
<!-- backwards compatibility -->
<a id="schemainboundwhatsappmessagecommon"></a>
<a id="schema_inboundWhatsAppMessageCommon"></a>
<a id="tocSinboundwhatsappmessagecommon"></a>
<a id="tocsinboundwhatsappmessagecommon"></a>

```json
{
  "channel": "whatsapp",
  "context": {
    "message_from": "447700900000",
    "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
    "whatsapp_referred_product": {
      "catalog_id": "1267260820787549",
      "product_retailer_id": "r07qei73l7"
    }
  },
  "from": "447700900001",
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "profile": {
    "name": "Jane Smith"
  },
  "provider_message": "string",
  "timestamp": "2020-01-01T14:00:00.000Z",
  "to": "447700900000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|true|none|The channel that the message came in on|
|context|[Context](#schemacontext)|false|none|This is only present for the Inbound Message where the user is quoting another message, or for a `product` message where the user has selected the 'Message Business' <br>option. It provides information about the quoted message and/or the product message being responded to. <br>|
|from|[FromNumber](#schemafromnumber)|true|none|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|message_uuid|[MessageUuid](#schemamessageuuid)|true|none|The UUID of the message|
|profile|[Profile](#schemaprofile)|false|none|none|
|provider_message|string|false|none|A message from the channel provider, which may contain a description, error codes or other information|
|timestamp|[Timestamp](#schematimestamp)|true|none|The datetime of when the event occurred, in `ISO 8601` format.|
|to|[ToNumber](#schematonumber)|true|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|whatsapp|

<h2 id="tocS_messageStatusBase">messageStatusBase</h2>
<!-- backwards compatibility -->
<a id="schemamessagestatusbase"></a>
<a id="schema_messageStatusBase"></a>
<a id="tocSmessagestatusbase"></a>
<a id="tocsmessagestatusbase"></a>

```json
{
  "client_ref": "string",
  "error": {
    "detail": "Throttled - You have exceeded the submission capacity allowed on this account. Please wait and retry",
    "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
    "title": 1000,
    "type": "https://developer.nexmo.com/api-errors/messages-olympus#1000"
  },
  "from": "447700900001",
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": "submitted",
  "timestamp": "2020-01-01T14:00:00.000Z",
  "to": "447700900000",
  "usage": {
    "currency": "EUR",
    "price": "0.0333"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|error|object|false|none|If the message encountered a problem a descriptive error will be supplied in this object.|
|from|[FromNumber](#schemafromnumber)|true|none|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|message_uuid|[MessageUuid](#schemamessageuuid)|true|none|The UUID of the message|
|status|string|true|none|The status of the message.|
|timestamp|string|true|none|The datetime of when the event occurred, in `ISO 8601` format.|
|to|[ToNumber](#schematonumber)|true|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|usage|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|submitted|
|status|delivered|
|status|rejected|
|status|undeliverable|

<h2 id="tocS_messageStatusMMS">messageStatusMMS</h2>
<!-- backwards compatibility -->
<a id="schemamessagestatusmms"></a>
<a id="schema_messageStatusMMS"></a>
<a id="tocSmessagestatusmms"></a>
<a id="tocsmessagestatusmms"></a>

```json
{
  "client_ref": "string",
  "error": {
    "detail": "Throttled - You have exceeded the submission capacity allowed on this account. Please wait and retry",
    "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
    "title": 1000,
    "type": "https://developer.nexmo.com/api-errors/messages-olympus#1000"
  },
  "from": "447700900001",
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": "submitted",
  "timestamp": "2020-01-01T14:00:00.000Z",
  "to": "447700900000",
  "usage": {
    "currency": "EUR",
    "price": "0.0333"
  },
  "channel": "mms"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|error|object|false|none|If the message encountered a problem a descriptive error will be supplied in this object.|
|from|[FromNumber](#schemafromnumber)|true|none|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|message_uuid|[MessageUuid](#schemamessageuuid)|true|none|The UUID of the message|
|status|string|true|none|The status of the message.|
|timestamp|string|true|none|The datetime of when the event occurred, in `ISO 8601` format.|
|to|[ToNumber](#schematonumber)|true|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|usage|object|false|none|none|
|channel|string|true|none|The channel sending to.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|submitted|
|status|delivered|
|status|rejected|
|status|undeliverable|
|channel|mms|

<h2 id="tocS_messageStatusMessenger">messageStatusMessenger</h2>
<!-- backwards compatibility -->
<a id="schemamessagestatusmessenger"></a>
<a id="schema_messageStatusMessenger"></a>
<a id="tocSmessagestatusmessenger"></a>
<a id="tocsmessagestatusmessenger"></a>

```json
{
  "client_ref": "string",
  "error": {
    "detail": "Throttled - You have exceeded the submission capacity allowed on this account. Please wait and retry",
    "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
    "title": 1000,
    "type": "https://developer.nexmo.com/api-errors/messages-olympus#1000"
  },
  "from": "9876543210",
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": "read",
  "timestamp": "2020-01-01T14:00:00.000Z",
  "to": "0123456789",
  "usage": {
    "currency": "EUR",
    "price": "0.0333"
  },
  "channel": "messenger"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|error|object|false|none|If the message encountered a problem a descriptive error will be supplied in this object.|
|from|[FromNumber](#schemafromnumber)|true|none|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|message_uuid|[MessageUuid](#schemamessageuuid)|true|none|The UUID of the message|
|status|string|true|none|The status of the message.|
|timestamp|string|true|none|The datetime of when the event occurred, in `ISO 8601` format.|
|to|[ToNumber](#schematonumber)|true|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|usage|object|false|none|none|
|channel|string|true|none|The channel sending to.|
|from|[FromId](#schemafromid)|true|none|The ID of the message sender<br>|
|status|string|true|none|none|
|to|[ToId](#schematoid)|true|none|The ID of the message recipient<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|submitted|
|status|delivered|
|status|rejected|
|status|undeliverable|
|channel|messenger|
|status|submitted|
|status|delivered|
|status|rejected|
|status|undeliverable|
|status|read|

<h2 id="tocS_messageStatusSMS">messageStatusSMS</h2>
<!-- backwards compatibility -->
<a id="schemamessagestatussms"></a>
<a id="schema_messageStatusSMS"></a>
<a id="tocSmessagestatussms"></a>
<a id="tocsmessagestatussms"></a>

```json
{
  "client_ref": "string",
  "error": {
    "detail": "Throttled - You have exceeded the submission capacity allowed on this account. Please wait and retry",
    "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
    "title": 1000,
    "type": "https://developer.nexmo.com/api-errors/messages-olympus#1000"
  },
  "from": "447700900001",
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": "submitted",
  "timestamp": "2020-01-01T14:00:00.000Z",
  "to": "447700900000",
  "usage": {
    "currency": "EUR",
    "price": "0.0333"
  },
  "channel": "sms"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|error|object|false|none|If the message encountered a problem a descriptive error will be supplied in this object.|
|from|[FromNumber](#schemafromnumber)|true|none|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|message_uuid|[MessageUuid](#schemamessageuuid)|true|none|The UUID of the message|
|status|string|true|none|The status of the message.|
|timestamp|string|true|none|The datetime of when the event occurred, in `ISO 8601` format.|
|to|[ToNumber](#schematonumber)|true|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|usage|object|false|none|none|
|channel|string|true|none|The channel sending to.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|submitted|
|status|delivered|
|status|rejected|
|status|undeliverable|
|channel|sms|

<h2 id="tocS_messageStatusViber">messageStatusViber</h2>
<!-- backwards compatibility -->
<a id="schemamessagestatusviber"></a>
<a id="schema_messageStatusViber"></a>
<a id="tocSmessagestatusviber"></a>
<a id="tocsmessagestatusviber"></a>

```json
{
  "client_ref": "string",
  "error": {
    "detail": "Throttled - You have exceeded the submission capacity allowed on this account. Please wait and retry",
    "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
    "title": 1000,
    "type": "https://developer.nexmo.com/api-errors/messages-olympus#1000"
  },
  "from": "447700900001",
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": "read",
  "timestamp": "2020-01-01T14:00:00.000Z",
  "to": "447700900000",
  "usage": {
    "currency": "EUR",
    "price": "0.0333"
  },
  "channel": "viber_service"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|error|object|false|none|If the message encountered a problem a descriptive error will be supplied in this object.|
|from|[FromNumber](#schemafromnumber)|true|none|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|message_uuid|[MessageUuid](#schemamessageuuid)|true|none|The UUID of the message|
|status|string|true|none|The status of the message.|
|timestamp|string|true|none|The datetime of when the event occurred, in `ISO 8601` format.|
|to|[ToNumber](#schematonumber)|true|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|usage|object|false|none|none|
|channel|string|true|none|The channel sending to.|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|submitted|
|status|delivered|
|status|rejected|
|status|undeliverable|
|channel|viber_service|
|status|submitted|
|status|delivered|
|status|rejected|
|status|undeliverable|
|status|read|

<h2 id="tocS_messageStatusWhatsApp">messageStatusWhatsApp</h2>
<!-- backwards compatibility -->
<a id="schemamessagestatuswhatsapp"></a>
<a id="schema_messageStatusWhatsApp"></a>
<a id="tocSmessagestatuswhatsapp"></a>
<a id="tocsmessagestatuswhatsapp"></a>

```json
{
  "client_ref": "string",
  "error": {
    "detail": "Throttled - You have exceeded the submission capacity allowed on this account. Please wait and retry",
    "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
    "title": 1000,
    "type": "https://developer.nexmo.com/api-errors/messages-olympus#1000"
  },
  "from": "447700900001",
  "message_uuid": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": "read",
  "timestamp": "2020-01-01T14:00:00.000Z",
  "to": "447700900000",
  "usage": {
    "currency": "EUR",
    "price": "0.0333"
  },
  "channel": "whatsapp",
  "whatsapp": {
    "conversation": {
      "id": "1234567890",
      "origin": {
        "type": "user_initiated"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|error|object|false|none|If the message encountered a problem a descriptive error will be supplied in this object.|
|from|[FromNumber](#schemafromnumber)|true|none|The phone number of the message **sender** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000. For SMS in certain localities alpha-numeric sender id's will work as well, see [Global Messaging](https://developer.nexmo.com/messaging/sms/guides/country-specific-features#country-specific-features) for more details<br>|
|message_uuid|[MessageUuid](#schemamessageuuid)|true|none|The UUID of the message|
|status|string|true|none|The status of the message.|
|timestamp|string|true|none|The datetime of when the event occurred, in `ISO 8601` format.|
|to|[ToNumber](#schematonumber)|true|none|The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.<br>|
|usage|object|false|none|none|
|channel|string|true|none|The channel sending to.|
|status|string|true|none|none|
|usage|object|false|none|none|
|whatsapp|object|false|none|An object contining meta-data related to the WhatsApp message that triggered this callback. Only present for callbacks with a `status` of `delivered`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|submitted|
|status|delivered|
|status|rejected|
|status|undeliverable|
|channel|whatsapp|
|status|submitted|
|status|delivered|
|status|rejected|
|status|undeliverable|
|status|read|

<h2 id="tocS_vCard">vCard</h2>
<!-- backwards compatibility -->
<a id="schemavcard"></a>
<a id="schema_vCard"></a>
<a id="tocSvcard"></a>
<a id="tocsvcard"></a>

```json
{
  "client_ref": "string",
  "message_type": "vcard",
  "vcard": {
    "url": "https://example.com/conatact.vcf"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ref|string|false|none|Client reference of up to 100 characters. The reference will be present in every message status.|
|message_type|string|true|none|The type of message to send. You must provide `vcard` in this field|
|vcard|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|message_type|vcard|
