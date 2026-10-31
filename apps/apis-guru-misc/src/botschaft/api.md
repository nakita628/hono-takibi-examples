<h1 id="fastapi">FastAPI v0.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://botschaft.local">http://botschaft.local</a>

<h1 id="fastapi-default">Default</h1>

## Config

<a id="opIdconfig_config_get"></a>

> Code samples

```bash
curl https://example.com/config \
  -H 'Accept: application/json'
```

`GET /config`

<h3 id="config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorization|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "providers": {},
  "topics": [
    null
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Config](#schemaconfig)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Topic

<a id="opIdtopic_topic__topic_name__get"></a>

> Code samples

```bash
curl https://example.com/topic/string \
  -H 'Accept: application/json'
```

`GET /topic/{topic_name}`

<h3 id="topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topic_name|path|string|true|none|
|message|query|string|false|none|
|base64_message|query|string|false|none|
|authorization|header|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="fastapi-discord">discord</h1>

## Discord Get

<a id="opIddiscord_get_discord_get"></a>

> Code samples

```bash
curl 'https://example.com/discord?channel=string' \
  -H 'Accept: application/json'
```

`GET /discord`

<h3 id="discord-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel|query|string|true|none|
|message|query|string|false|none|
|base64_message|query|string|false|none|
|authorization|header|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="discord-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Discord Post

<a id="opIddiscord_post_discord_post"></a>

> Code samples

```bash
curl https://example.com/discord \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "base64_message": "string",
    "channel": "string",
    "message": "string"
  }'
```

`POST /discord`

> Body parameter

```json
{
  "base64_message": "string",
  "channel": "string",
  "message": "string"
}
```

<h3 id="discord-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorization|header|string|false|none|
|body|body|[DiscordMessageRequest](#schemadiscordmessagerequest)|true|none|
|» base64_message|body|string|false|none|
|» channel|body|string|true|none|
|» message|body|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="discord-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="fastapi-slack">slack</h1>

## Slack Get

<a id="opIdslack_get_slack_get"></a>

> Code samples

```bash
curl 'https://example.com/slack?channel=string' \
  -H 'Accept: application/json'
```

`GET /slack`

<h3 id="slack-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel|query|string|true|none|
|message|query|string|false|none|
|base64_message|query|string|false|none|
|authorization|header|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="slack-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Slack Post

<a id="opIdslack_post_slack_post"></a>

> Code samples

```bash
curl https://example.com/slack \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "base64_message": "string",
    "channel": "string",
    "message": "string"
  }'
```

`POST /slack`

> Body parameter

```json
{
  "base64_message": "string",
  "channel": "string",
  "message": "string"
}
```

<h3 id="slack-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorization|header|string|false|none|
|body|body|[SlackMessageRequest](#schemaslackmessagerequest)|true|none|
|» base64_message|body|string|false|none|
|» channel|body|string|true|none|
|» message|body|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="slack-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="fastapi-sns">sns</h1>

## Sns Get

<a id="opIdsns_get_sns_get"></a>

> Code samples

```bash
curl https://example.com/sns \
  -H 'Accept: application/json'
```

`GET /sns`

<h3 id="sns-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message|query|string|false|none|
|base64_message|query|string|false|none|
|authorization|header|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="sns-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Sns Post

<a id="opIdsns_post_sns_post"></a>

> Code samples

```bash
curl https://example.com/sns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "base64_message": "string",
    "message": "string"
  }'
```

`POST /sns`

> Body parameter

```json
{
  "base64_message": "string",
  "message": "string"
}
```

<h3 id="sns-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorization|header|string|false|none|
|body|body|[SnsMessageRequest](#schemasnsmessagerequest)|true|none|
|» base64_message|body|string|false|none|
|» message|body|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="sns-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="fastapi-twilio">twilio</h1>

## Twilio Message Get

<a id="opIdtwilio_message_get_twilio_get"></a>

> Code samples

```bash
curl 'https://example.com/twilio?to=string' \
  -H 'Accept: application/json'
```

`GET /twilio`

<h3 id="twilio-message-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|to|query|string|true|none|
|message|query|string|false|none|
|base64_message|query|string|false|none|
|authorization|header|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="twilio-message-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Twilio Message Post

<a id="opIdtwilio_message_post_twilio_post"></a>

> Code samples

```bash
curl https://example.com/twilio \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "base64_message": "string",
    "message": "string",
    "to": "string"
  }'
```

`POST /twilio`

> Body parameter

```json
{
  "base64_message": "string",
  "message": "string",
  "to": "string"
}
```

<h3 id="twilio-message-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorization|header|string|false|none|
|body|body|[TwilioMessageRequest](#schematwiliomessagerequest)|true|none|
|» base64_message|body|string|false|none|
|» message|body|string|false|none|
|» to|body|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="twilio-message-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Config">Config</h2>
<!-- backwards compatibility -->
<a id="schemaconfig"></a>
<a id="schema_Config"></a>
<a id="tocSconfig"></a>
<a id="tocsconfig"></a>

```json
{
  "providers": {},
  "topics": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|object|true|none|none|
|topics|[object]|true|none|none|

<h2 id="tocS_DiscordMessageRequest">DiscordMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiscordmessagerequest"></a>
<a id="schema_DiscordMessageRequest"></a>
<a id="tocSdiscordmessagerequest"></a>
<a id="tocsdiscordmessagerequest"></a>

```json
{
  "base64_message": "string",
  "channel": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base64_message|string|false|none|none|
|channel|string|true|none|none|
|message|string|false|none|none|

<h2 id="tocS_HTTPValidationError">HTTPValidationError</h2>
<!-- backwards compatibility -->
<a id="schemahttpvalidationerror"></a>
<a id="schema_HTTPValidationError"></a>
<a id="tocShttpvalidationerror"></a>
<a id="tocshttpvalidationerror"></a>

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[[ValidationError](#schemavalidationerror)]|false|none|none|

<h2 id="tocS_SlackMessageRequest">SlackMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaslackmessagerequest"></a>
<a id="schema_SlackMessageRequest"></a>
<a id="tocSslackmessagerequest"></a>
<a id="tocsslackmessagerequest"></a>

```json
{
  "base64_message": "string",
  "channel": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base64_message|string|false|none|none|
|channel|string|true|none|none|
|message|string|false|none|none|

<h2 id="tocS_SnsMessageRequest">SnsMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemasnsmessagerequest"></a>
<a id="schema_SnsMessageRequest"></a>
<a id="tocSsnsmessagerequest"></a>
<a id="tocssnsmessagerequest"></a>

```json
{
  "base64_message": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base64_message|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_TwilioMessageRequest">TwilioMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schematwiliomessagerequest"></a>
<a id="schema_TwilioMessageRequest"></a>
<a id="tocStwiliomessagerequest"></a>
<a id="tocstwiliomessagerequest"></a>

```json
{
  "base64_message": "string",
  "message": "string",
  "to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base64_message|string|false|none|none|
|message|string|false|none|none|
|to|string|true|none|none|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "loc": [
    "string"
  ],
  "msg": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loc|[string]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|
