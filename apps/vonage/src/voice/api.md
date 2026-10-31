<h1 id="voice-api">Voice API v1.3.10</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Voice API lets you create outbound calls, control in-progress calls and get information about historical calls. More information about the Voice API can be found at <https://developer.nexmo.com/voice/voice-api/overview>.

Base URLs:

* <a href="https://api.nexmo.com/v1/calls">https://api.nexmo.com/v1/calls</a>

Email: <a href="mailto:devrel@vonage.com">Vonage DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Vonage DevRel</a> 

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="voice-api-calls">Calls</h1>

Fetch, Create and Modify voice calls

## Get details of your calls

<a id="opIdgetCalls"></a>

> Code samples

```bash
curl https://api.nexmo.com/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /`

Get details of your calls

<h3 id="get-details-of-your-calls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Filter by call status|
|date_start|query|string(date-time)|false|Return the records that occurred after this point in time|
|date_end|query|string(date-time)|false|Return the records that occurred before this point in time|
|page_size|query|integer|false|Return this amount of records in the response|
|record_index|query|integer|false|Return calls from this index in the response|
|order|query|string|false|Either ascending or  descending order.|
|conversation_uuid|query|[conversation_uuid](#schemaconversation_uuid)|false|Return all the records associated with a specific conversation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|started|
|status|ringing|
|status|answered|
|status|machine|
|status|completed|
|status|busy|
|status|cancelled|
|status|failed|
|status|rejected|
|status|timeout|
|status|unanswered|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "calls": [
      {
        "_links": {
          "self": {
            "href": "/calls/63f61863-4a51-4f6b-86e1-46edebcf9356"
          }
        },
        "conversation_uuid": "CON-f972836a-550f-45fa-956c-12a2ab5b7d22",
        "direction": "outbound",
        "duration": "60",
        "end_time": "2020-01-01 12:00:00",
        "from": {
          "number": "447700900001",
          "type": "phone"
        },
        "network": "65512",
        "price": "23.40",
        "rate": "0.39",
        "start_time": "2020-01-01 12:00:00",
        "status": "completed",
        "to": {
          "number": "447700900000",
          "type": "phone"
        },
        "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
      }
    ]
  },
  "_links": {
    "self": {
      "href": "/calls?page_size=10&record_index=20&order=asc"
    }
  },
  "count": 100,
  "page_size": 10,
  "record_index": 0
}
```

<h3 id="get-details-of-your-calls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetCallsResponse](#schemagetcallsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an outbound call

<a id="opIdcreateCall"></a>

> Code samples

```bash
curl https://api.nexmo.com/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ncco": [
      {
        "action": "talk",
        "text": "Hello World"
      }
    ],
    "event_method": "POST",
    "event_url": [
      "https://example.com/event"
    ],
    "from": {
      "number": "14155550100",
      "type": "phone"
    },
    "length_timer": 7200,
    "machine_detection": "continue",
    "random_from_number": false,
    "ringing_timer": 60,
    "to": [
      {
        "dtmfAnswer": "p*123#",
        "number": "14155550100",
        "type": "phone"
      }
    ]
  }'
```

`POST /`

Create an outbound Call

> Body parameter

```json
{
  "ncco": [
    {
      "action": "talk",
      "text": "Hello World"
    }
  ],
  "event_method": "POST",
  "event_url": [
    "https://example.com/event"
  ],
  "from": {
    "number": "14155550100",
    "type": "phone"
  },
  "length_timer": 7200,
  "machine_detection": "continue",
  "random_from_number": false,
  "ringing_timer": 60,
  "to": [
    {
      "dtmfAnswer": "p*123#",
      "number": "14155550100",
      "type": "phone"
    }
  ]
}
```

<h3 id="create-an-outbound-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateCallRequestNcco](#schemacreatecallrequestncco) \| [CreateCallRequestAnswerUrl](#schemacreatecallrequestanswerurl)|false|Call Details|
|» *oneOf*|body|[CreateCallRequestNcco](#schemacreatecallrequestncco)|false|none|
|» *oneOf*|body|[CreateCallRequestAnswerUrl](#schemacreatecallrequestanswerurl)|false|none|

> Example responses

> 201 Response

```json
{
  "conversation_uuid": "CON-f972836a-550f-45fa-956c-12a2ab5b7d22",
  "direction": "outbound",
  "status": "completed",
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

<h3 id="create-an-outbound-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[CreateCallResponse](#schemacreatecallresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get detail of a specific call

<a id="opIdgetCall"></a>

> Code samples

```bash
curl https://api.nexmo.com/63f61863-4a51-4f6b-86e1-46edebcf9356 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{uuid}`

Get detail of a specific call

<h3 id="get-detail-of-a-specific-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|UUID of the Call|

> Example responses

> 200 Response

```json
{
  "_links": {
    "self": {
      "href": "/calls/63f61863-4a51-4f6b-86e1-46edebcf9356"
    }
  },
  "conversation_uuid": "CON-f972836a-550f-45fa-956c-12a2ab5b7d22",
  "direction": "outbound",
  "duration": "60",
  "end_time": "2020-01-01 12:00:00",
  "from": {
    "number": "447700900001",
    "type": "phone"
  },
  "network": "65512",
  "price": "23.40",
  "rate": "0.39",
  "start_time": "2020-01-01 12:00:00",
  "status": "completed",
  "to": {
    "number": "447700900000",
    "type": "phone"
  },
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

<h3 id="get-detail-of-a-specific-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[GetCallResponse](#schemagetcallresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Modify an in progress call

<a id="opIdupdateCall"></a>

> Code samples

```bash
curl https://api.nexmo.com/63f61863-4a51-4f6b-86e1-46edebcf9356 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "transfer",
    "destination": {
      "ncco": [
        {
          "action": "talk",
          "text": "Hello World"
        }
      ],
      "type": "ncco"
    }
  }'
```

`PUT /{uuid}`

Modify an in progress call

> Body parameter

```json
{
  "action": "transfer",
  "destination": {
    "ncco": [
      {
        "action": "talk",
        "text": "Hello World"
      }
    ],
    "type": "ncco"
  }
}
```

<h3 id="modify-an-in-progress-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|UUID of the Call|
|body|body|[UpdateCallRequestTransferNcco](#schemaupdatecallrequesttransferncco) \| [UpdateCallRequestTransferAnswerUrl](#schemaupdatecallrequesttransferanswerurl) \| [UpdateCallRequestHangup](#schemaupdatecallrequesthangup) \| [UpdateCallRequestMute](#schemaupdatecallrequestmute) \| [UpdateCallRequestUnmute](#schemaupdatecallrequestunmute) \| [UpdateCallRequestEarmuff](#schemaupdatecallrequestearmuff) \| [UpdateCallRequestUnearmuff](#schemaupdatecallrequestunearmuff)|true|none|
|» *oneOf*|body|[UpdateCallRequestTransferNcco](#schemaupdatecallrequesttransferncco)|false|none|
|» *oneOf*|body|[UpdateCallRequestTransferAnswerUrl](#schemaupdatecallrequesttransferanswerurl)|false|none|
|» *oneOf*|body|[UpdateCallRequestHangup](#schemaupdatecallrequesthangup)|false|none|
|» *oneOf*|body|[UpdateCallRequestMute](#schemaupdatecallrequestmute)|false|none|
|» *oneOf*|body|[UpdateCallRequestUnmute](#schemaupdatecallrequestunmute)|false|none|
|» *oneOf*|body|[UpdateCallRequestEarmuff](#schemaupdatecallrequestearmuff)|false|none|
|» *oneOf*|body|[UpdateCallRequestUnearmuff](#schemaupdatecallrequestunearmuff)|false|none|

<h3 id="modify-an-in-progress-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="voice-api-stream-audio">Stream Audio</h1>

Start or stop streaming audio in to an active call

## Play an audio file into a call

<a id="opIdstartStream"></a>

> Code samples

```bash
curl https://api.nexmo.com/63f61863-4a51-4f6b-86e1-46edebcf9356/stream \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "level": "0.4",
    "loop": 1,
    "stream_url": [
      "https://example.com/waiting.mp3"
    ]
  }'
```

`PUT /{uuid}/stream`

Play an audio file into a call

> Body parameter

```json
{
  "level": "0.4",
  "loop": 1,
  "stream_url": [
    "https://example.com/waiting.mp3"
  ]
}
```

<h3 id="play-an-audio-file-into-a-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|UUID of the Call Leg|
|body|body|[StartStreamRequest](#schemastartstreamrequest)|true|action to perform|
|» level|body|string|false|Set the audio level of the stream in the range `-1 >= level <= 1` with a precision of 0.1. The default value is 0.|
|» loop|body|integer|false|the number of times to play the file, 0 for infinite|
|» stream_url|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "message": "Stream started",
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

<h3 id="play-an-audio-file-into-a-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[StartStreamResponse](#schemastartstreamresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Stop playing an audio file into a call

<a id="opIdstopStream"></a>

> Code samples

```bash
curl https://api.nexmo.com/63f61863-4a51-4f6b-86e1-46edebcf9356/stream \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{uuid}/stream`

Stop playing an audio file into a call

<h3 id="stop-playing-an-audio-file-into-a-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|UUID of the Call Leg|

> Example responses

> 200 Response

```json
{
  "message": "Stream stopped",
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

<h3 id="stop-playing-an-audio-file-into-a-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[StopStreamResponse](#schemastopstreamresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="voice-api-play-tts">Play TTS</h1>

Start or stop playing Text to Speech in to an active call

## Play text to speech into a call

<a id="opIdstartTalk"></a>

> Code samples

```bash
curl https://api.nexmo.com/63f61863-4a51-4f6b-86e1-46edebcf9356/talk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "language": "en-US",
    "level": "0.4",
    "loop": 1,
    "premium": false,
    "style": 0,
    "text": "Hello. How are you today?",
    "voice_name": "Kimberly"
  }'
```

`PUT /{uuid}/talk`

Play text to speech into a call

> Body parameter

```json
{
  "language": "en-US",
  "level": "0.4",
  "loop": 1,
  "premium": false,
  "style": 0,
  "text": "Hello. How are you today?",
  "voice_name": "Kimberly"
}
```

<h3 id="play-text-to-speech-into-a-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|UUID of the Call Leg|
|body|body|[StartTalkRequest](#schemastarttalkrequest)|false|Action to perform|
|» language|body|[language](#schemalanguage)|false|The language to use|
|» level|body|string|false|The volume level that the speech is played. This can be any value between `-1` to `1` in `0.1` increments, with `0` being the default.|
|» loop|body|integer|false|The number of times to repeat the text the file, 0 for infinite|
|» premium|body|boolean|false|Set to true to use the premium version of the specified style if available, otherwise the standard version will be used. The default value is false. You can find more information about Premium Voices in the [Text-To-Speech guide](/voice/voice-api/guides/text-to-speech#premium-voices).|
|» style|body|[style](#schemastyle)|false|The vocal style (vocal range, tessitura, and timbre) to use|
|» text|body|string|true|The text to read|
|» voice_name|body|[voice_name](#schemavoice_name)|false|**Deprecated.** <strong>DEPRECATED</strong> The voice & language to use|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» language|ar|
|» language|ca-ES|
|» language|cmn-CN|
|» language|cmn-TW|
|» language|cs-CZ|
|» language|cy-GB|
|» language|da-DK|
|» language|de-DE|
|» language|el-GR|
|» language|en-AU|
|» language|en-GB|
|» language|en-GB-WLS|
|» language|en-IN|
|» language|en-US|
|» language|en-ZA|
|» language|es-ES|
|» language|es-MX|
|» language|es-US|
|» language|eu-ES|
|» language|fi-FI|
|» language|fil-PH|
|» language|fr-CA|
|» language|fr-FR|
|» language|he-IL|
|» language|hi-IN|
|» language|hu-HU|
|» language|id-ID|
|» language|is-IS|
|» language|it-IT|
|» language|ja-JP|
|» language|ko-KR|
|» language|nb-NO|
|» language|nl-NL|
|» language|no-NO|
|» language|pl-PL|
|» language|pt-BR|
|» language|pt-PT|
|» language|ro-RO|
|» language|ru-RU|
|» language|sk-SK|
|» language|sv-SE|
|» language|th-TH|
|» language|tr-TR|
|» language|uk-UA|
|» language|vi-VN|
|» language|yue-CN|
|» voice_name|Aditi|
|» voice_name|Agnieszka|
|» voice_name|Alva|
|» voice_name|Amy|
|» voice_name|Astrid|
|» voice_name|Bianca|
|» voice_name|Brian|
|» voice_name|Carla|
|» voice_name|Carmen|
|» voice_name|Carmit|
|» voice_name|Catarina|
|» voice_name|Celine|
|» voice_name|Cem|
|» voice_name|Chantal|
|» voice_name|Chipmunk|
|» voice_name|Conchita|
|» voice_name|Cristiano|
|» voice_name|Damayanti|
|» voice_name|Dora|
|» voice_name|Emma|
|» voice_name|Empar|
|» voice_name|Enrique|
|» voice_name|Eric|
|» voice_name|Ewa|
|» voice_name|Felipe|
|» voice_name|Filiz|
|» voice_name|Geraint|
|» voice_name|Giorgio|
|» voice_name|Gwyneth|
|» voice_name|Hans|
|» voice_name|Henrik|
|» voice_name|Ines|
|» voice_name|Ioana|
|» voice_name|Iveta|
|» voice_name|Ivy|
|» voice_name|Jacek|
|» voice_name|Jan|
|» voice_name|Jennifer|
|» voice_name|Joana|
|» voice_name|Joanna|
|» voice_name|Joey|
|» voice_name|Jordi|
|» voice_name|Justin|
|» voice_name|Kanya|
|» voice_name|Karl|
|» voice_name|Kendra|
|» voice_name|Kimberly|
|» voice_name|Laila|
|» voice_name|Laura|
|» voice_name|Lea|
|» voice_name|Lekha|
|» voice_name|Liv|
|» voice_name|Lotte|
|» voice_name|Lucia|
|» voice_name|Luciana|
|» voice_name|Mads|
|» voice_name|Maged|
|» voice_name|Maja|
|» voice_name|Mariska|
|» voice_name|Marlene|
|» voice_name|Mathieu|
|» voice_name|Matthew|
|» voice_name|Maxim|
|» voice_name|Mei-Jia|
|» voice_name|Melina|
|» voice_name|Mia|
|» voice_name|Miguel|
|» voice_name|Miren|
|» voice_name|Mizuki|
|» voice_name|Montserrat|
|» voice_name|Naja|
|» voice_name|Nicole|
|» voice_name|Nikos|
|» voice_name|Nora|
|» voice_name|Oskar|
|» voice_name|Penelope|
|» voice_name|Raveena|
|» voice_name|Ricardo|
|» voice_name|Ruben|
|» voice_name|Russell|
|» voice_name|Salli|
|» voice_name|Satu|
|» voice_name|Seoyeon|
|» voice_name|Sin-Ji|
|» voice_name|Sora|
|» voice_name|Takumi|
|» voice_name|Tarik|
|» voice_name|Tatyana|
|» voice_name|Tessa|
|» voice_name|Tian-Tian|
|» voice_name|Vicki|
|» voice_name|Vitoria|
|» voice_name|Yelda|
|» voice_name|Zeina|
|» voice_name|Zhiyu|
|» voice_name|Zuzana|

> Example responses

> 200 Response

```json
{
  "message": "Talk started",
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

<h3 id="play-text-to-speech-into-a-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[StartTalkResponse](#schemastarttalkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Stop text to speech in a call

<a id="opIdstopTalk"></a>

> Code samples

```bash
curl https://api.nexmo.com/63f61863-4a51-4f6b-86e1-46edebcf9356/talk \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{uuid}/talk`

Stop text to speech in a call

<h3 id="stop-text-to-speech-in-a-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|UUID of the Call Leg|

> Example responses

> 200 Response

```json
{
  "message": "Talk stopped",
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

<h3 id="stop-text-to-speech-in-a-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[StopTalkResponse](#schemastoptalkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="voice-api-play-dtmf">Play DTMF</h1>

Play DTMF tones in to an active call

## Play DTMF tones into a call

<a id="opIdstartDTMF"></a>

> Code samples

```bash
curl https://api.nexmo.com/63f61863-4a51-4f6b-86e1-46edebcf9356/dtmf \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "digits": 1713
  }'
```

`PUT /{uuid}/dtmf`

Play DTMF tones into a call

> Body parameter

```json
{
  "digits": 1713
}
```

<h3 id="play-dtmf-tones-into-a-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|UUID of the Call Leg|
|body|body|[DTMFRequest](#schemadtmfrequest)|true|action to perform|
|» digits|body|string|false|The digits to send|

> Example responses

> 200 Response

```json
{
  "message": "DTMF sent",
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

<h3 id="play-dtmf-tones-into-a-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[DTMFResponse](#schemadtmfresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_AddressE164">AddressE164</h2>
<!-- backwards compatibility -->
<a id="schemaaddresse164"></a>
<a id="schema_AddressE164"></a>
<a id="tocSaddresse164"></a>
<a id="tocsaddresse164"></a>

```json
"14155550100"
```

The phone number to connect to

<h2 id="tocS_AddressSip">AddressSip</h2>
<!-- backwards compatibility -->
<a id="schemaaddresssip"></a>
<a id="schema_AddressSip"></a>
<a id="tocSaddresssip"></a>
<a id="tocsaddresssip"></a>

```json
"sip:rebekka@sip.example.com"
```

The SIP URI to connect to

<h2 id="tocS_AddressWebsocket">AddressWebsocket</h2>
<!-- backwards compatibility -->
<a id="schemaaddresswebsocket"></a>
<a id="schema_AddressWebsocket"></a>
<a id="tocSaddresswebsocket"></a>
<a id="tocsaddresswebsocket"></a>

```json
"wss://example.com/socket"
```

<h2 id="tocS_CreateCallRequestAnswerUrl">CreateCallRequestAnswerUrl</h2>
<!-- backwards compatibility -->
<a id="schemacreatecallrequestanswerurl"></a>
<a id="schema_CreateCallRequestAnswerUrl"></a>
<a id="tocScreatecallrequestanswerurl"></a>
<a id="tocscreatecallrequestanswerurl"></a>

```json
{
  "answer_method": "GET",
  "answer_url": [
    "https://example.com/answer"
  ],
  "event_method": "POST",
  "event_url": [
    "https://example.com/event"
  ],
  "from": {
    "number": "14155550100",
    "type": "phone"
  },
  "length_timer": 7200,
  "machine_detection": "continue",
  "random_from_number": false,
  "ringing_timer": 60,
  "to": [
    {
      "dtmfAnswer": "p*123#",
      "number": "14155550100",
      "type": "phone"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer_method|string|false|none|The HTTP method used to send event information to answer_url.|
|answer_url|[string]|true|none|The webhook endpoint where you provide the [Nexmo Call Control Object](/voice/voice-api/ncco-reference) that governs this call.<br>|
|event_method|string|false|none|The HTTP method used to send event information to `event_url`.|
|event_url|[string(uri)]|false|none|**Required** unless `event_url` is configured at the application<br>level, see [Create an Application](/api/application.v2#createApplication)<br><br>The webhook endpoint where call progress events are<br>sent to. For more information about the values sent, see<br>[Event webhook](/voice/voice-api/webhook-reference#event-webhook).<br>|
|from|[EndpointPhoneFrom](#schemaendpointphonefrom)|true|none|Connect to a Phone (PSTN) number|
|length_timer|integer|false|none|Set the number of seconds that elapse before Vonage hangs up after the call state changes to answered.|
|machine_detection|string|false|none|Configure the behavior when Vonage detects that the call is answered by voicemail. If `continue`, Vonage sends an HTTP request to `event_url` with the Call event machine. If `hangup`, Vonage ends the call.|
|random_from_number|boolean|false|none|Set to `true` to use random phone number as `from`. The number will be selected from the list of the numbers assigned to the current application. `random_from_number: true` cannot be used together with `from`.|
|ringing_timer|integer|false|none|Set the number of seconds that elapse before Vonage hangs up after the call state changes to ‘ringing’.|
|to|[[EndpointPhoneTo](#schemaendpointphoneto) \| [EndpointSip](#schemaendpointsip) \| [EndpointWebsocket](#schemaendpointwebsocket) \| [EndpointVBCExtension](#schemaendpointvbcextension)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|answer_method|POST|
|answer_method|GET|
|event_method|POST|
|event_method|GET|
|machine_detection|continue|
|machine_detection|hangup|

<h2 id="tocS_CreateCallRequestBase">CreateCallRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemacreatecallrequestbase"></a>
<a id="schema_CreateCallRequestBase"></a>
<a id="tocScreatecallrequestbase"></a>
<a id="tocscreatecallrequestbase"></a>

```json
{
  "event_method": "POST",
  "event_url": [
    "https://example.com/event"
  ],
  "from": {
    "number": "14155550100",
    "type": "phone"
  },
  "length_timer": 7200,
  "machine_detection": "continue",
  "random_from_number": false,
  "ringing_timer": 60,
  "to": [
    {
      "dtmfAnswer": "p*123#",
      "number": "14155550100",
      "type": "phone"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_method|string|false|none|The HTTP method used to send event information to `event_url`.|
|event_url|[string(uri)]|false|none|**Required** unless `event_url` is configured at the application<br>level, see [Create an Application](/api/application.v2#createApplication)<br><br>The webhook endpoint where call progress events are<br>sent to. For more information about the values sent, see<br>[Event webhook](/voice/voice-api/webhook-reference#event-webhook).<br>|
|from|[EndpointPhoneFrom](#schemaendpointphonefrom)|true|none|Connect to a Phone (PSTN) number|
|length_timer|integer|false|none|Set the number of seconds that elapse before Vonage hangs up after the call state changes to answered.|
|machine_detection|string|false|none|Configure the behavior when Vonage detects that the call is answered by voicemail. If `continue`, Vonage sends an HTTP request to `event_url` with the Call event machine. If `hangup`, Vonage ends the call.|
|random_from_number|boolean|false|none|Set to `true` to use random phone number as `from`. The number will be selected from the list of the numbers assigned to the current application. `random_from_number: true` cannot be used together with `from`.|
|ringing_timer|integer|false|none|Set the number of seconds that elapse before Vonage hangs up after the call state changes to ‘ringing’.|
|to|[[EndpointPhoneTo](#schemaendpointphoneto) \| [EndpointSip](#schemaendpointsip) \| [EndpointWebsocket](#schemaendpointwebsocket) \| [EndpointVBCExtension](#schemaendpointvbcextension)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_method|POST|
|event_method|GET|
|machine_detection|continue|
|machine_detection|hangup|

<h2 id="tocS_CreateCallRequestNcco">CreateCallRequestNcco</h2>
<!-- backwards compatibility -->
<a id="schemacreatecallrequestncco"></a>
<a id="schema_CreateCallRequestNcco"></a>
<a id="tocScreatecallrequestncco"></a>
<a id="tocscreatecallrequestncco"></a>

```json
{
  "ncco": [
    {
      "action": "talk",
      "text": "Hello World"
    }
  ],
  "event_method": "POST",
  "event_url": [
    "https://example.com/event"
  ],
  "from": {
    "number": "14155550100",
    "type": "phone"
  },
  "length_timer": 7200,
  "machine_detection": "continue",
  "random_from_number": false,
  "ringing_timer": 60,
  "to": [
    {
      "dtmfAnswer": "p*123#",
      "number": "14155550100",
      "type": "phone"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ncco|[object]|true|none|The [Nexmo Call Control Object](/voice/voice-api/ncco-reference) to use for this call.<br>|
|event_method|string|false|none|The HTTP method used to send event information to `event_url`.|
|event_url|[string(uri)]|false|none|**Required** unless `event_url` is configured at the application<br>level, see [Create an Application](/api/application.v2#createApplication)<br><br>The webhook endpoint where call progress events are<br>sent to. For more information about the values sent, see<br>[Event webhook](/voice/voice-api/webhook-reference#event-webhook).<br>|
|from|[EndpointPhoneFrom](#schemaendpointphonefrom)|true|none|Connect to a Phone (PSTN) number|
|length_timer|integer|false|none|Set the number of seconds that elapse before Vonage hangs up after the call state changes to answered.|
|machine_detection|string|false|none|Configure the behavior when Vonage detects that the call is answered by voicemail. If `continue`, Vonage sends an HTTP request to `event_url` with the Call event machine. If `hangup`, Vonage ends the call.|
|random_from_number|boolean|false|none|Set to `true` to use random phone number as `from`. The number will be selected from the list of the numbers assigned to the current application. `random_from_number: true` cannot be used together with `from`.|
|ringing_timer|integer|false|none|Set the number of seconds that elapse before Vonage hangs up after the call state changes to ‘ringing’.|
|to|[[EndpointPhoneTo](#schemaendpointphoneto) \| [EndpointSip](#schemaendpointsip) \| [EndpointWebsocket](#schemaendpointwebsocket) \| [EndpointVBCExtension](#schemaendpointvbcextension)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_method|POST|
|event_method|GET|
|machine_detection|continue|
|machine_detection|hangup|

<h2 id="tocS_CreateCallResponse">CreateCallResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecallresponse"></a>
<a id="schema_CreateCallResponse"></a>
<a id="tocScreatecallresponse"></a>
<a id="tocscreatecallresponse"></a>

```json
{
  "conversation_uuid": "CON-f972836a-550f-45fa-956c-12a2ab5b7d22",
  "direction": "outbound",
  "status": "completed",
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversation_uuid|[conversation_uuid](#schemaconversation_uuid)|false|none|The unique identifier for the conversation this call leg is part of.|
|direction|[direction](#schemadirection)|false|none|Possible values are `outbound` or `inbound`|
|status|[status](#schemastatus)|false|none|The status of the call. [See possible values](https://developer.nexmo.com/voice/voice-api/guides/call-flow#event-objects)|
|uuid|[uuid](#schemauuid)|false|none|The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|outbound|
|direction|inbound|

<h2 id="tocS_DTMFRequest">DTMFRequest</h2>
<!-- backwards compatibility -->
<a id="schemadtmfrequest"></a>
<a id="schema_DTMFRequest"></a>
<a id="tocSdtmfrequest"></a>
<a id="tocsdtmfrequest"></a>

```json
{
  "digits": 1713
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digits|string|false|none|The digits to send|

<h2 id="tocS_DTMFResponse">DTMFResponse</h2>
<!-- backwards compatibility -->
<a id="schemadtmfresponse"></a>
<a id="schema_DTMFResponse"></a>
<a id="tocSdtmfresponse"></a>
<a id="tocsdtmfresponse"></a>

```json
{
  "message": "DTMF sent",
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Description of the action taken|
|uuid|[uuid](#schemauuid)|false|none|The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls|

<h2 id="tocS_EndpointApp">EndpointApp</h2>
<!-- backwards compatibility -->
<a id="schemaendpointapp"></a>
<a id="schema_EndpointApp"></a>
<a id="tocSendpointapp"></a>
<a id="tocsendpointapp"></a>

```json
{
  "type": "app",
  "user": "jamie"
}
```

Connect to an App User

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of connection. Must be `app`|
|user|string|true|none|The username to connect to|

<h2 id="tocS_EndpointPhoneFrom">EndpointPhoneFrom</h2>
<!-- backwards compatibility -->
<a id="schemaendpointphonefrom"></a>
<a id="schema_EndpointPhoneFrom"></a>
<a id="tocSendpointphonefrom"></a>
<a id="tocsendpointphonefrom"></a>

```json
{
  "number": "14155550100",
  "type": "phone"
}
```

Connect to a Phone (PSTN) number

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|[AddressE164](#schemaaddresse164)|true|none|The phone number to connect to|
|type|string|true|none|The type of connection. Must be `phone`|

<h2 id="tocS_EndpointPhoneTo">EndpointPhoneTo</h2>
<!-- backwards compatibility -->
<a id="schemaendpointphoneto"></a>
<a id="schema_EndpointPhoneTo"></a>
<a id="tocSendpointphoneto"></a>
<a id="tocsendpointphoneto"></a>

```json
{
  "dtmfAnswer": "p*123#",
  "number": "14155550100",
  "type": "phone"
}
```

Connect to a Phone (PSTN) number

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dtmfAnswer|string|false|none|Provide [DTMF digits](https://developer.nexmo.com/voice/voice-api/guides/dtmf) to send when the call is answered|
|number|[AddressE164](#schemaaddresse164)|true|none|The phone number to connect to|
|type|string|true|none|The type of connection. Must be `phone`|

<h2 id="tocS_EndpointSip">EndpointSip</h2>
<!-- backwards compatibility -->
<a id="schemaendpointsip"></a>
<a id="schema_EndpointSip"></a>
<a id="tocSendpointsip"></a>
<a id="tocsendpointsip"></a>

```json
{
  "type": "sip",
  "uri": "sip:rebekka@sip.example.com"
}
```

Connect to a SIP Endpoint

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of connection. Must be `sip`|
|uri|[AddressSip](#schemaaddresssip)|false|none|The SIP URI to connect to|

<h2 id="tocS_EndpointVBCExtension">EndpointVBCExtension</h2>
<!-- backwards compatibility -->
<a id="schemaendpointvbcextension"></a>
<a id="schema_EndpointVBCExtension"></a>
<a id="tocSendpointvbcextension"></a>
<a id="tocsendpointvbcextension"></a>

```json
{
  "extension": "1234",
  "type": "vbc"
}
```

Connect to a VBC extension

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extension|string|true|none|none|
|type|string|true|none|The type of connection. Must be `vbc`|

<h2 id="tocS_EndpointWebsocket">EndpointWebsocket</h2>
<!-- backwards compatibility -->
<a id="schemaendpointwebsocket"></a>
<a id="schema_EndpointWebsocket"></a>
<a id="tocSendpointwebsocket"></a>
<a id="tocsendpointwebsocket"></a>

```json
{
  "content-type": "audio/l16;rate=16000",
  "headers": {
    "customer_id": "ABC123"
  },
  "type": "websocket",
  "uri": "wss://example.com/socket"
}
```

Connect to a Websocket

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content-type|string|true|none|none|
|headers|object|false|none|Details of the Websocket you want to connect to|
|type|string|true|none|The type of connection. Must be `websocket`|
|uri|[AddressWebsocket](#schemaaddresswebsocket)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|content-type|audio/l16;rate=8000|
|content-type|audio/l16;rate=16000|

<h2 id="tocS_GetCallResponse">GetCallResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcallresponse"></a>
<a id="schema_GetCallResponse"></a>
<a id="tocSgetcallresponse"></a>
<a id="tocsgetcallresponse"></a>

```json
{
  "_links": {
    "self": {
      "href": "/calls/63f61863-4a51-4f6b-86e1-46edebcf9356"
    }
  },
  "conversation_uuid": "CON-f972836a-550f-45fa-956c-12a2ab5b7d22",
  "direction": "outbound",
  "duration": "60",
  "end_time": "2020-01-01 12:00:00",
  "from": {
    "number": "447700900001",
    "type": "phone"
  },
  "network": "65512",
  "price": "23.40",
  "rate": "0.39",
  "start_time": "2020-01-01 12:00:00",
  "status": "completed",
  "to": {
    "number": "447700900000",
    "type": "phone"
  },
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|conversation_uuid|[conversation_uuid](#schemaconversation_uuid)|false|none|The unique identifier for the conversation this call leg is part of.|
|direction|[direction](#schemadirection)|false|none|Possible values are `outbound` or `inbound`|
|duration|[duration](#schemaduration)|false|none|The time elapsed for the call to take place in seconds. This is only sent if `status` is `completed`.|
|end_time|[end_time](#schemaend_time)|false|none|The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For xample, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`.|
|from|[from](#schemafrom)|false|none|The endpoint you called from. Possible values are the same as `to`.|
|network|[network](#schemanetwork)|false|none|The Mobile Country Code Mobile Network Code ([MCCMNC](https://en.wikipedia.org/wiki/Mobile_country_code)) for the carrier network used to make this call. This is only sent if `status` is `completed`.|
|price|[price](#schemaprice)|false|none|The total price charged for this call. This is only sent if `status` is `completed`.|
|rate|[rate](#schemarate)|false|none|The price per minute for this call. This is only sent if `status` is `completed`.|
|start_time|[start_time](#schemastart_time)|false|none|The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For example, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`.|
|status|[status](#schemastatus)|false|none|The status of the call. [See possible values](https://developer.nexmo.com/voice/voice-api/guides/call-flow#event-objects)|
|to|[to](#schemato)|false|none|The single or mixed collection of endpoint types you connected to|
|uuid|[uuid](#schemauuid)|false|none|The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|outbound|
|direction|inbound|

<h2 id="tocS_GetCallsResponse">GetCallsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcallsresponse"></a>
<a id="schema_GetCallsResponse"></a>
<a id="tocSgetcallsresponse"></a>
<a id="tocsgetcallsresponse"></a>

```json
{
  "_embedded": {
    "calls": [
      {
        "_links": {
          "self": {
            "href": "/calls/63f61863-4a51-4f6b-86e1-46edebcf9356"
          }
        },
        "conversation_uuid": "CON-f972836a-550f-45fa-956c-12a2ab5b7d22",
        "direction": "outbound",
        "duration": "60",
        "end_time": "2020-01-01 12:00:00",
        "from": {
          "number": "447700900001",
          "type": "phone"
        },
        "network": "65512",
        "price": "23.40",
        "rate": "0.39",
        "start_time": "2020-01-01 12:00:00",
        "status": "completed",
        "to": {
          "number": "447700900000",
          "type": "phone"
        },
        "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
      }
    ]
  },
  "_links": {
    "self": {
      "href": "/calls?page_size=10&record_index=20&order=asc"
    }
  },
  "count": 100,
  "page_size": 10,
  "record_index": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|A list of call objects. See the [get details of a specific call](#getCall) response fields for a description of the nested objects|
|_links|object|false|none|none|
|count|integer|false|none|none|
|page_size|integer|false|none|none|
|record_index|integer|false|none|none|

<h2 id="tocS_RequestTransferActionParam">RequestTransferActionParam</h2>
<!-- backwards compatibility -->
<a id="schemarequesttransferactionparam"></a>
<a id="schema_RequestTransferActionParam"></a>
<a id="tocSrequesttransferactionparam"></a>
<a id="tocsrequesttransferactionparam"></a>

```json
"transfer"
```

Transfer the call to a new NCCO

<h2 id="tocS_StartStreamRequest">StartStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartstreamrequest"></a>
<a id="schema_StartStreamRequest"></a>
<a id="tocSstartstreamrequest"></a>
<a id="tocsstartstreamrequest"></a>

```json
{
  "level": "0.4",
  "loop": 1,
  "stream_url": [
    "https://example.com/waiting.mp3"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|string|false|none|Set the audio level of the stream in the range `-1 >= level <= 1` with a precision of 0.1. The default value is 0.|
|loop|integer|false|none|the number of times to play the file, 0 for infinite|
|stream_url|[string]|true|none|none|

<h2 id="tocS_StartStreamResponse">StartStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartstreamresponse"></a>
<a id="schema_StartStreamResponse"></a>
<a id="tocSstartstreamresponse"></a>
<a id="tocsstartstreamresponse"></a>

```json
{
  "message": "Stream started",
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Description of the action taken|
|uuid|[uuid](#schemauuid)|false|none|The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls|

<h2 id="tocS_StartTalkRequest">StartTalkRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarttalkrequest"></a>
<a id="schema_StartTalkRequest"></a>
<a id="tocSstarttalkrequest"></a>
<a id="tocsstarttalkrequest"></a>

```json
{
  "language": "en-US",
  "level": "0.4",
  "loop": 1,
  "premium": false,
  "style": 0,
  "text": "Hello. How are you today?",
  "voice_name": "Kimberly"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|[language](#schemalanguage)|false|none|The language to use|
|level|string|false|none|The volume level that the speech is played. This can be any value between `-1` to `1` in `0.1` increments, with `0` being the default.|
|loop|integer|false|none|The number of times to repeat the text the file, 0 for infinite|
|premium|boolean|false|none|Set to true to use the premium version of the specified style if available, otherwise the standard version will be used. The default value is false. You can find more information about Premium Voices in the [Text-To-Speech guide](/voice/voice-api/guides/text-to-speech#premium-voices).|
|style|[style](#schemastyle)|false|none|The vocal style (vocal range, tessitura, and timbre) to use|
|text|string|true|none|The text to read|
|voice_name|[voice_name](#schemavoice_name)|false|none|**Deprecated.** <strong>DEPRECATED</strong> The voice & language to use|

#### Enumerated Values

|Property|Value|
|---|---|
|language|ar|
|language|ca-ES|
|language|cmn-CN|
|language|cmn-TW|
|language|cs-CZ|
|language|cy-GB|
|language|da-DK|
|language|de-DE|
|language|el-GR|
|language|en-AU|
|language|en-GB|
|language|en-GB-WLS|
|language|en-IN|
|language|en-US|
|language|en-ZA|
|language|es-ES|
|language|es-MX|
|language|es-US|
|language|eu-ES|
|language|fi-FI|
|language|fil-PH|
|language|fr-CA|
|language|fr-FR|
|language|he-IL|
|language|hi-IN|
|language|hu-HU|
|language|id-ID|
|language|is-IS|
|language|it-IT|
|language|ja-JP|
|language|ko-KR|
|language|nb-NO|
|language|nl-NL|
|language|no-NO|
|language|pl-PL|
|language|pt-BR|
|language|pt-PT|
|language|ro-RO|
|language|ru-RU|
|language|sk-SK|
|language|sv-SE|
|language|th-TH|
|language|tr-TR|
|language|uk-UA|
|language|vi-VN|
|language|yue-CN|
|voice_name|Aditi|
|voice_name|Agnieszka|
|voice_name|Alva|
|voice_name|Amy|
|voice_name|Astrid|
|voice_name|Bianca|
|voice_name|Brian|
|voice_name|Carla|
|voice_name|Carmen|
|voice_name|Carmit|
|voice_name|Catarina|
|voice_name|Celine|
|voice_name|Cem|
|voice_name|Chantal|
|voice_name|Chipmunk|
|voice_name|Conchita|
|voice_name|Cristiano|
|voice_name|Damayanti|
|voice_name|Dora|
|voice_name|Emma|
|voice_name|Empar|
|voice_name|Enrique|
|voice_name|Eric|
|voice_name|Ewa|
|voice_name|Felipe|
|voice_name|Filiz|
|voice_name|Geraint|
|voice_name|Giorgio|
|voice_name|Gwyneth|
|voice_name|Hans|
|voice_name|Henrik|
|voice_name|Ines|
|voice_name|Ioana|
|voice_name|Iveta|
|voice_name|Ivy|
|voice_name|Jacek|
|voice_name|Jan|
|voice_name|Jennifer|
|voice_name|Joana|
|voice_name|Joanna|
|voice_name|Joey|
|voice_name|Jordi|
|voice_name|Justin|
|voice_name|Kanya|
|voice_name|Karl|
|voice_name|Kendra|
|voice_name|Kimberly|
|voice_name|Laila|
|voice_name|Laura|
|voice_name|Lea|
|voice_name|Lekha|
|voice_name|Liv|
|voice_name|Lotte|
|voice_name|Lucia|
|voice_name|Luciana|
|voice_name|Mads|
|voice_name|Maged|
|voice_name|Maja|
|voice_name|Mariska|
|voice_name|Marlene|
|voice_name|Mathieu|
|voice_name|Matthew|
|voice_name|Maxim|
|voice_name|Mei-Jia|
|voice_name|Melina|
|voice_name|Mia|
|voice_name|Miguel|
|voice_name|Miren|
|voice_name|Mizuki|
|voice_name|Montserrat|
|voice_name|Naja|
|voice_name|Nicole|
|voice_name|Nikos|
|voice_name|Nora|
|voice_name|Oskar|
|voice_name|Penelope|
|voice_name|Raveena|
|voice_name|Ricardo|
|voice_name|Ruben|
|voice_name|Russell|
|voice_name|Salli|
|voice_name|Satu|
|voice_name|Seoyeon|
|voice_name|Sin-Ji|
|voice_name|Sora|
|voice_name|Takumi|
|voice_name|Tarik|
|voice_name|Tatyana|
|voice_name|Tessa|
|voice_name|Tian-Tian|
|voice_name|Vicki|
|voice_name|Vitoria|
|voice_name|Yelda|
|voice_name|Zeina|
|voice_name|Zhiyu|
|voice_name|Zuzana|

<h2 id="tocS_StartTalkResponse">StartTalkResponse</h2>
<!-- backwards compatibility -->
<a id="schemastarttalkresponse"></a>
<a id="schema_StartTalkResponse"></a>
<a id="tocSstarttalkresponse"></a>
<a id="tocsstarttalkresponse"></a>

```json
{
  "message": "Talk started",
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Description of the action taken|
|uuid|[uuid](#schemauuid)|false|none|The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls|

<h2 id="tocS_StopStreamResponse">StopStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopstreamresponse"></a>
<a id="schema_StopStreamResponse"></a>
<a id="tocSstopstreamresponse"></a>
<a id="tocsstopstreamresponse"></a>

```json
{
  "message": "Stream stopped",
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Description of the action taken|
|uuid|[uuid](#schemauuid)|false|none|The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls|

<h2 id="tocS_StopTalkResponse">StopTalkResponse</h2>
<!-- backwards compatibility -->
<a id="schemastoptalkresponse"></a>
<a id="schema_StopTalkResponse"></a>
<a id="tocSstoptalkresponse"></a>
<a id="tocsstoptalkresponse"></a>

```json
{
  "message": "Talk stopped",
  "uuid": "63f61863-4a51-4f6b-86e1-46edebcf9356"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Description of the action taken|
|uuid|[uuid](#schemauuid)|false|none|The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls|

<h2 id="tocS_UpdateCallRequestEarmuff">UpdateCallRequestEarmuff</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecallrequestearmuff"></a>
<a id="schema_UpdateCallRequestEarmuff"></a>
<a id="tocSupdatecallrequestearmuff"></a>
<a id="tocsupdatecallrequestearmuff"></a>

```json
{
  "action": "earmuff"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Prevent the specified UUID from hearing audio|

#### Enumerated Values

|Property|Value|
|---|---|
|action|earmuff|

<h2 id="tocS_UpdateCallRequestHangup">UpdateCallRequestHangup</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecallrequesthangup"></a>
<a id="schema_UpdateCallRequestHangup"></a>
<a id="tocSupdatecallrequesthangup"></a>
<a id="tocsupdatecallrequesthangup"></a>

```json
{
  "action": "hangup"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|End the call for the specified UUID|

#### Enumerated Values

|Property|Value|
|---|---|
|action|hangup|

<h2 id="tocS_UpdateCallRequestMute">UpdateCallRequestMute</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecallrequestmute"></a>
<a id="schema_UpdateCallRequestMute"></a>
<a id="tocSupdatecallrequestmute"></a>
<a id="tocsupdatecallrequestmute"></a>

```json
{
  "action": "mute"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Mute the specified UUID|

#### Enumerated Values

|Property|Value|
|---|---|
|action|mute|

<h2 id="tocS_UpdateCallRequestTransferAnswerUrl">UpdateCallRequestTransferAnswerUrl</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecallrequesttransferanswerurl"></a>
<a id="schema_UpdateCallRequestTransferAnswerUrl"></a>
<a id="tocSupdatecallrequesttransferanswerurl"></a>
<a id="tocsupdatecallrequesttransferanswerurl"></a>

```json
{
  "action": "transfer",
  "destination": {
    "type": "ncco",
    "url": [
      "https://example.com/ncco.json"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[RequestTransferActionParam](#schemarequesttransferactionparam)|true|none|Transfer the call to a new NCCO|
|destination|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|transfer|

<h2 id="tocS_UpdateCallRequestTransferNcco">UpdateCallRequestTransferNcco</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecallrequesttransferncco"></a>
<a id="schema_UpdateCallRequestTransferNcco"></a>
<a id="tocSupdatecallrequesttransferncco"></a>
<a id="tocsupdatecallrequesttransferncco"></a>

```json
{
  "action": "transfer",
  "destination": {
    "ncco": [
      {
        "action": "talk",
        "text": "Hello World"
      }
    ],
    "type": "ncco"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[RequestTransferActionParam](#schemarequesttransferactionparam)|true|none|Transfer the call to a new NCCO|
|destination|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|transfer|

<h2 id="tocS_UpdateCallRequestUnearmuff">UpdateCallRequestUnearmuff</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecallrequestunearmuff"></a>
<a id="schema_UpdateCallRequestUnearmuff"></a>
<a id="tocSupdatecallrequestunearmuff"></a>
<a id="tocsupdatecallrequestunearmuff"></a>

```json
{
  "action": "unearmuff"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Allow the specified UUID to hear audio|

#### Enumerated Values

|Property|Value|
|---|---|
|action|unearmuff|

<h2 id="tocS_UpdateCallRequestUnmute">UpdateCallRequestUnmute</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecallrequestunmute"></a>
<a id="schema_UpdateCallRequestUnmute"></a>
<a id="tocSupdatecallrequestunmute"></a>
<a id="tocsupdatecallrequestunmute"></a>

```json
{
  "action": "unmute"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Unmute the specified UUID|

#### Enumerated Values

|Property|Value|
|---|---|
|action|mute|

<h2 id="tocS_conversation_uuid">conversation_uuid</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_uuid"></a>
<a id="schema_conversation_uuid"></a>
<a id="tocSconversation_uuid"></a>
<a id="tocsconversation_uuid"></a>

```json
"CON-f972836a-550f-45fa-956c-12a2ab5b7d22"
```

The unique identifier for the conversation this call leg is part of.

<h2 id="tocS_direction">direction</h2>
<!-- backwards compatibility -->
<a id="schemadirection"></a>
<a id="schema_direction"></a>
<a id="tocSdirection"></a>
<a id="tocsdirection"></a>

```json
"outbound"
```

Possible values are `outbound` or `inbound`

<h2 id="tocS_duration">duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
"60"
```

The time elapsed for the call to take place in seconds. This is only sent if `status` is `completed`.

<h2 id="tocS_end_time">end_time</h2>
<!-- backwards compatibility -->
<a id="schemaend_time"></a>
<a id="schema_end_time"></a>
<a id="tocSend_time"></a>
<a id="tocsend_time"></a>

```json
"2020-01-01 12:00:00"
```

The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For xample, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`.

<h2 id="tocS_from">from</h2>
<!-- backwards compatibility -->
<a id="schemafrom"></a>
<a id="schema_from"></a>
<a id="tocSfrom"></a>
<a id="tocsfrom"></a>

```json
{
  "number": "447700900001",
  "type": "phone"
}
```

The endpoint you called from. Possible values are the same as `to`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_language">language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
"en-US"
```

The language to use

<h2 id="tocS_network">network</h2>
<!-- backwards compatibility -->
<a id="schemanetwork"></a>
<a id="schema_network"></a>
<a id="tocSnetwork"></a>
<a id="tocsnetwork"></a>

```json
"65512"
```

The Mobile Country Code Mobile Network Code ([MCCMNC](https://en.wikipedia.org/wiki/Mobile_country_code)) for the carrier network used to make this call. This is only sent if `status` is `completed`.

<h2 id="tocS_price">price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
"23.40"
```

The total price charged for this call. This is only sent if `status` is `completed`.

<h2 id="tocS_rate">rate</h2>
<!-- backwards compatibility -->
<a id="schemarate"></a>
<a id="schema_rate"></a>
<a id="tocSrate"></a>
<a id="tocsrate"></a>

```json
"0.39"
```

The price per minute for this call. This is only sent if `status` is `completed`.

<h2 id="tocS_start_time">start_time</h2>
<!-- backwards compatibility -->
<a id="schemastart_time"></a>
<a id="schema_start_time"></a>
<a id="tocSstart_time"></a>
<a id="tocsstart_time"></a>

```json
"2020-01-01 12:00:00"
```

The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For example, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`.

<h2 id="tocS_status">status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"completed"
```

The status of the call. [See possible values](https://developer.nexmo.com/voice/voice-api/guides/call-flow#event-objects)

<h2 id="tocS_style">style</h2>
<!-- backwards compatibility -->
<a id="schemastyle"></a>
<a id="schema_style"></a>
<a id="tocSstyle"></a>
<a id="tocsstyle"></a>

```json
0
```

The vocal style (vocal range, tessitura, and timbre) to use

<h2 id="tocS_to">to</h2>
<!-- backwards compatibility -->
<a id="schemato"></a>
<a id="schema_to"></a>
<a id="tocSto"></a>
<a id="tocsto"></a>

```json
{
  "number": "447700900000",
  "type": "phone"
}
```

The single or mixed collection of endpoint types you connected to

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_uuid">uuid</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_uuid"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"63f61863-4a51-4f6b-86e1-46edebcf9356"
```

The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls

<h2 id="tocS_voice_name">voice_name</h2>
<!-- backwards compatibility -->
<a id="schemavoice_name"></a>
<a id="schema_voice_name"></a>
<a id="tocSvoice_name"></a>
<a id="tocsvoice_name"></a>

```json
"Kimberly"
```

<strong>DEPRECATED</strong> The voice & language to use
