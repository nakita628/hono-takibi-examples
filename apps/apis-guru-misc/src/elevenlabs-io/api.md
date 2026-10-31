<h1 id="elevenlabs-api-documentation">ElevenLabs API Documentation v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the documentation for the ElevenLabs API. You can use this API to use our service programmatically, this is done by using your xi-api-key. <br/> You can view your xi-api-key using the 'Profile' tab on https://beta.elevenlabs.io. Our API is experimental so all endpoints are subject to change.

Base URLs:

* <a href="https://api.elevenlabs.io/">https://api.elevenlabs.io/</a>

<h1 id="elevenlabs-api-documentation-text-to-speech">text-to-speech</h1>

Convert text into audio.

## Text To Speech

<a id="opIdText_to_speech_v1_text_to_speech__voice_id__post"></a>

> Code samples

```bash
curl https://example.com/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "text": "string",
    "voice_settings": {
      "similarity_boost": 0,
      "stability": 0
    }
  }'
```

`POST /v1/text-to-speech/{voice_id}`

Converts text into speech using a voice of your choice and returns audio.

> Body parameter

```json
{
  "text": "string",
  "voice_settings": {
    "similarity_boost": 0,
    "stability": 0
  }
}
```

<h3 id="text-to-speech-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voice_id|path|string|true|Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|
|body|body|[Body_Text_to_speech_v1_text_to_speech__voice_id__post](#schemabody_text_to_speech_v1_text_to_speech__voice_id__post)|true|none|
|» text|body|string|true|The text that will get converted into speech. Currently only English text is supported.|
|» voice_settings|body|object|false|Voice settings overriding stored setttings for the given voice. They are applied only on the given TTS request.|
|» » similarity_boost|body|number|true|none|
|» » stability|body|number|true|none|

> Example responses

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

<h3 id="text-to-speech-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Text To Speech

<a id="opIdText_to_speech_v1_text_to_speech__voice_id__stream_post"></a>

> Code samples

```bash
curl https://example.com/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM/stream \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "text": "string",
    "voice_settings": {
      "similarity_boost": 0,
      "stability": 0
    }
  }'
```

`POST /v1/text-to-speech/{voice_id}/stream`

Converts text into speech using a voice of your choice and returns audio as an audio stream.

> Body parameter

```json
{
  "text": "string",
  "voice_settings": {
    "similarity_boost": 0,
    "stability": 0
  }
}
```

<h3 id="text-to-speech-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voice_id|path|string|true|Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|
|body|body|[Body_Text_to_speech_v1_text_to_speech__voice_id__stream_post](#schemabody_text_to_speech_v1_text_to_speech__voice_id__stream_post)|true|none|
|» text|body|string|true|The text that will get converted into speech. Currently only English text is supported.|
|» voice_settings|body|object|false|Voice settings overriding stored setttings for the given voice. They are applied only on the given TTS request.|
|» » similarity_boost|body|number|true|none|
|» » stability|body|number|true|none|

> Example responses

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

<h3 id="text-to-speech-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="elevenlabs-api-documentation-voices">voices</h1>

Access to voices created either by you or us.

## Get Voices

<a id="opIdGet_voices_v1_voices_get"></a>

> Code samples

```bash
curl https://example.com/v1/voices \
  -H 'Accept: application/json'
```

`GET /v1/voices`

Gets a list of all available voices for a user.

<h3 id="get-voices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|

> Example responses

> 200 Response

```json
{
  "voices": [
    {
      "available_for_tiers": [
        "string"
      ],
      "category": "string",
      "description": "string",
      "fine_tuning": {
        "fine_tuning_requested": true,
        "finetuning_state": "not_started",
        "is_allowed_to_fine_tune": true,
        "model_id": "string",
        "slice_ids": [
          "string"
        ],
        "verification_attempts": [
          {
            "accepted": true,
            "date_unix": 0,
            "levenshtein_distance": 0,
            "recording": {
              "mime_type": "string",
              "recording_id": "string",
              "size_bytes": 0,
              "transcription": "string",
              "upload_date_unix": 0
            },
            "similarity": 0,
            "text": "string"
          }
        ],
        "verification_attempts_count": 0,
        "verification_failures": [
          "string"
        ]
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "preview_url": "string",
      "samples": [
        {
          "file_name": "string",
          "hash": "string",
          "mime_type": "string",
          "sample_id": "string",
          "size_bytes": 0
        }
      ],
      "settings": {
        "similarity_boost": 0,
        "stability": 0
      },
      "voice_id": "string"
    }
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

<h3 id="get-voices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetVoicesResponseModel](#schemagetvoicesresponsemodel)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add Voice

<a id="opIdAdd_voice_v1_voices_add_post"></a>

> Code samples

```bash
curl https://example.com/v1/voices/add \
  -X POST \
  -H 'Accept: application/json' \
  -F 'description=string' \
  -F 'files=["string"]' \
  -F 'labels=string' \
  -F 'name=string'
```

`POST /v1/voices/add`

Add a new voice to your collection of voices in VoiceLab.

> Body parameter

```yaml
description: string
files:
  - string
labels: string
name: string
```

<h3 id="add-voice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|
|body|body|[Body_Add_voice_v1_voices_add_post](#schemabody_add_voice_v1_voices_add_post)|true|none|
|» description|body|string|false|How would you describe the voice?|
|» files|body|[string(binary)]|true|One or more audio files to clone the voice from|
|» labels|body|string|false|Serialized labels dictionary for the voice.|
|» name|body|string|true|The name that identifies this voice. This will be displayed in the dropdown of the website.|

> Example responses

> 200 Response

```json
{
  "voice_id": "string"
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

<h3 id="add-voice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AddVoiceResponseModel](#schemaaddvoiceresponsemodel)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Default Voice Settings.

<a id="opIdGet_default_voice_settings__v1_voices_settings_default_get"></a>

> Code samples

```bash
curl https://example.com/v1/voices/settings/default \
  -H 'Accept: application/json'
```

`GET /v1/voices/settings/default`

Gets the default settings for voices. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.

> Example responses

> 200 Response

```json
{
  "similarity_boost": 0,
  "stability": 0
}
```

<h3 id="get-default-voice-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VoiceSettingsResponseModel](#schemavoicesettingsresponsemodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Voice

<a id="opIdGet_voice_v1_voices__voice_id__get"></a>

> Code samples

```bash
curl https://example.com/v1/voices/21m00Tcm4TlvDq8ikWAM \
  -H 'Accept: application/json'
```

`GET /v1/voices/{voice_id}`

Returns metadata about a specific voice.

<h3 id="get-voice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voice_id|path|string|true|Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.|
|with_settings|query|boolean|false|If set will return settings information corresponding to the voice, requires authorization.|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|

> Example responses

> 200 Response

```json
{
  "available_for_tiers": [
    "string"
  ],
  "category": "string",
  "description": "string",
  "fine_tuning": {
    "fine_tuning_requested": true,
    "finetuning_state": "not_started",
    "is_allowed_to_fine_tune": true,
    "model_id": "string",
    "slice_ids": [
      "string"
    ],
    "verification_attempts": [
      {
        "accepted": true,
        "date_unix": 0,
        "levenshtein_distance": 0,
        "recording": {
          "mime_type": "string",
          "recording_id": "string",
          "size_bytes": 0,
          "transcription": "string",
          "upload_date_unix": 0
        },
        "similarity": 0,
        "text": "string"
      }
    ],
    "verification_attempts_count": 0,
    "verification_failures": [
      "string"
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "preview_url": "string",
  "samples": [
    {
      "file_name": "string",
      "hash": "string",
      "mime_type": "string",
      "sample_id": "string",
      "size_bytes": 0
    }
  ],
  "settings": {
    "similarity_boost": 0,
    "stability": 0
  },
  "voice_id": "string"
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

<h3 id="get-voice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VoiceResponseModel](#schemavoiceresponsemodel)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Voice

<a id="opIdDelete_voice_v1_voices__voice_id__delete"></a>

> Code samples

```bash
curl https://example.com/v1/voices/21m00Tcm4TlvDq8ikWAM \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/voices/{voice_id}`

Deletes a voice by its ID.

<h3 id="delete-voice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voice_id|path|string|true|Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|

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

<h3 id="delete-voice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Edit Voice

<a id="opIdEdit_voice_v1_voices__voice_id__edit_post"></a>

> Code samples

```bash
curl https://example.com/v1/voices/21m00Tcm4TlvDq8ikWAM/edit \
  -X POST \
  -H 'Accept: application/json' \
  -F 'description=string' \
  -F 'files=["string"]' \
  -F 'labels=string' \
  -F 'name=string'
```

`POST /v1/voices/{voice_id}/edit`

Edit a voice created by you.

> Body parameter

```yaml
description: string
files:
  - string
labels: string
name: string
```

<h3 id="edit-voice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voice_id|path|string|true|Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|
|body|body|[Body_Edit_voice_v1_voices__voice_id__edit_post](#schemabody_edit_voice_v1_voices__voice_id__edit_post)|true|none|
|» description|body|string|false|How would you describe the voice?|
|» files|body|[string(binary)]|false|Audio files to add to the voice|
|» labels|body|string|false|Serialized labels dictionary for the voice.|
|» name|body|string|true|The name that identifies this voice. This will be displayed in the dropdown of the website.|

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

<h3 id="edit-voice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Voice Settings

<a id="opIdGet_voice_settings_v1_voices__voice_id__settings_get"></a>

> Code samples

```bash
curl https://example.com/v1/voices/21m00Tcm4TlvDq8ikWAM/settings \
  -H 'Accept: application/json'
```

`GET /v1/voices/{voice_id}/settings`

Returns the settings for a specific voice. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.

<h3 id="get-voice-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voice_id|path|string|true|Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|

> Example responses

> 200 Response

```json
{
  "similarity_boost": 0,
  "stability": 0
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

<h3 id="get-voice-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VoiceSettingsResponseModel](#schemavoicesettingsresponsemodel)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Edit Voice Settings

<a id="opIdEdit_voice_settings_v1_voices__voice_id__settings_edit_post"></a>

> Code samples

```bash
curl https://example.com/v1/voices/21m00Tcm4TlvDq8ikWAM/settings/edit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "similarity_boost": 0,
    "stability": 0
  }'
```

`POST /v1/voices/{voice_id}/settings/edit`

Edit your settings for a specific voice. "similarity_boost" corresponds to"Clarity + Similarity Enhancement" in the web app and "stability" corresponds to "Stability" slider in the web app.

> Body parameter

```json
{
  "similarity_boost": 0,
  "stability": 0
}
```

<h3 id="edit-voice-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voice_id|path|string|true|Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|
|body|body|object|true|none|
|» similarity_boost|body|number|true|none|
|» stability|body|number|true|none|

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

<h3 id="edit-voice-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="elevenlabs-api-documentation-samples">samples</h1>

Access to your samples. A sample is any audio file you attached to a voice. A voice can have one or more samples.

## Delete Sample

<a id="opIdDelete_sample_v1_voices__voice_id__samples__sample_id__delete"></a>

> Code samples

```bash
curl https://example.com/v1/voices/21m00Tcm4TlvDq8ikWAM/samples/VW7YKqPnjY4h39yTbx2L \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/voices/{voice_id}/samples/{sample_id}`

Removes a sample by its ID.

<h3 id="delete-sample-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voice_id|path|string|true|Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.|
|sample_id|path|string|true|Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice.|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|

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

<h3 id="delete-sample-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Audio From Sample

<a id="opIdGet_audio_from_sample_v1_voices__voice_id__samples__sample_id__audio_get"></a>

> Code samples

```bash
curl https://example.com/v1/voices/21m00Tcm4TlvDq8ikWAM/samples/VW7YKqPnjY4h39yTbx2L/audio \
  -H 'Accept: application/json'
```

`GET /v1/voices/{voice_id}/samples/{sample_id}/audio`

Returns the audio corresponding to a sample attached to a voice.

<h3 id="get-audio-from-sample-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voice_id|path|string|true|Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices.|
|sample_id|path|string|true|Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice.|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|

> Example responses

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

<h3 id="get-audio-from-sample-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="elevenlabs-api-documentation-history">history</h1>

Accesses your history. Your history is a list of all your created audio including its metadata.

## Get Generated Items

<a id="opIdGet_generated_items_v1_history_get"></a>

> Code samples

```bash
curl https://example.com/v1/history \
  -H 'Accept: application/json'
```

`GET /v1/history`

Returns metadata about all your generated audio.

<h3 id="get-generated-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|

> Example responses

> 200 Response

```json
{
  "history": [
    {
      "character_count_change_from": 0,
      "character_count_change_to": 0,
      "content_type": "string",
      "date_unix": 0,
      "feedback": {
        "audio_quality": true,
        "emotions": true,
        "feedback": "string",
        "glitches": true,
        "inaccurate_clone": true,
        "other": true,
        "review_status": "not_reviewed",
        "thumbs_up": true
      },
      "history_item_id": "string",
      "request_id": "string",
      "settings": {},
      "state": "created",
      "text": "string",
      "voice_id": "string",
      "voice_name": "string"
    }
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

<h3 id="get-generated-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetHistoryResponseModel](#schemagethistoryresponsemodel)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete History Items

<a id="opIdDelete_history_items_v1_history_delete_post"></a>

> Code samples

```bash
curl https://example.com/v1/history/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "history_item_ids": [
      "string"
    ]
  }'
```

`POST /v1/history/delete`

<aside class="warning">
This operation is deprecated
</aside>

Delete a number of history items by their IDs.

> Body parameter

```json
{
  "history_item_ids": [
    "string"
  ]
}
```

<h3 id="delete-history-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|
|body|body|[Body_Delete_history_items_v1_history_delete_post](#schemabody_delete_history_items_v1_history_delete_post)|true|none|
|» history_item_ids|body|[string]|true|A list of history items to remove, you can get IDs of history items and other metadata using the GET https://api.elevenlabs.io/v1/history endpoint.|

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

<h3 id="delete-history-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Download History Items

<a id="opIdDownload_history_items_v1_history_download_post"></a>

> Code samples

```bash
curl https://example.com/v1/history/download \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "history_item_ids": [
      "string"
    ]
  }'
```

`POST /v1/history/download`

Download one or more history items. If one history item ID is provided, we will return a single audio file. If more than one history item IDs are provided, we will provide the history items packed into a .zip file.

> Body parameter

```json
{
  "history_item_ids": [
    "string"
  ]
}
```

<h3 id="download-history-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|
|body|body|[Body_Download_history_items_v1_history_download_post](#schemabody_download_history_items_v1_history_download_post)|true|none|
|» history_item_ids|body|[string]|true|A list of history items to download, you can get IDs of history items and other metadata using the GET https://api.elevenlabs.io/v1/history endpoint.|

> Example responses

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

<h3 id="download-history-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete History Item

<a id="opIdDelete_history_item_v1_history__history_item_id__delete"></a>

> Code samples

```bash
curl https://example.com/v1/history/VW7YKqPnjY4h39yTbx2L \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/history/{history_item_id}`

Delete a history item by its ID

<h3 id="delete-history-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|history_item_id|path|string|true|History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs.|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|

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

<h3 id="delete-history-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Audio From History Item

<a id="opIdGet_audio_from_history_item_v1_history__history_item_id__audio_get"></a>

> Code samples

```bash
curl https://example.com/v1/history/VW7YKqPnjY4h39yTbx2L/audio \
  -H 'Accept: application/json'
```

`GET /v1/history/{history_item_id}/audio`

Returns the audio of an history item.

<h3 id="get-audio-from-history-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|history_item_id|path|string|true|History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs.|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|

> Example responses

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

<h3 id="get-audio-from-history-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="elevenlabs-api-documentation-user">user</h1>

## Get User Info

<a id="opIdGet_user_info_v1_user_get"></a>

> Code samples

```bash
curl https://example.com/v1/user \
  -H 'Accept: application/json'
```

`GET /v1/user`

Gets information about the user

<h3 id="get-user-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|

> Example responses

> 200 Response

```json
{
  "is_new_user": true,
  "subscription": {
    "allowed_to_extend_character_limit": true,
    "available_models": [
      {
        "display_name": "string",
        "model_id": "string",
        "supported_language": [
          {
            "display_name": "string",
            "iso_code": "string"
          }
        ]
      }
    ],
    "can_extend_character_limit": true,
    "can_extend_voice_limit": true,
    "can_use_delayed_payment_methods": true,
    "can_use_instant_voice_cloning": true,
    "can_use_professional_voice_cloning": true,
    "character_count": 0,
    "character_limit": 0,
    "currency": "usd",
    "next_character_count_reset_unix": 0,
    "professional_voice_limit": 0,
    "status": "trialing",
    "tier": "string",
    "voice_limit": 0
  },
  "xi_api_key": "string"
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

<h3 id="get-user-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[UserResponseModel](#schemauserresponsemodel)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get User Subscription Info

<a id="opIdGet_user_subscription_info_v1_user_subscription_get"></a>

> Code samples

```bash
curl https://example.com/v1/user/subscription \
  -H 'Accept: application/json'
```

`GET /v1/user/subscription`

Gets extended information about the users subscription

<h3 id="get-user-subscription-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|xi-api-key|header|string|false|Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website.|

> Example responses

> 200 Response

```json
{
  "allowed_to_extend_character_limit": true,
  "available_models": [
    {
      "display_name": "string",
      "model_id": "string",
      "supported_language": [
        {
          "display_name": "string",
          "iso_code": "string"
        }
      ]
    }
  ],
  "can_extend_character_limit": true,
  "can_extend_voice_limit": true,
  "can_use_delayed_payment_methods": true,
  "can_use_instant_voice_cloning": true,
  "can_use_professional_voice_cloning": true,
  "character_count": 0,
  "character_limit": 0,
  "currency": "usd",
  "next_character_count_reset_unix": 0,
  "next_invoice": {
    "amount_due_cents": 0,
    "next_payment_attempt_unix": 0
  },
  "professional_voice_limit": 0,
  "status": "trialing",
  "tier": "string",
  "voice_limit": 0
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

<h3 id="get-user-subscription-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ExtendedSubscriptionResponseModel](#schemaextendedsubscriptionresponsemodel)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AddVoiceResponseModel">AddVoiceResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemaaddvoiceresponsemodel"></a>
<a id="schema_AddVoiceResponseModel"></a>
<a id="tocSaddvoiceresponsemodel"></a>
<a id="tocsaddvoiceresponsemodel"></a>

```json
{
  "voice_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|voice_id|string|true|none|none|

<h2 id="tocS_Body_Add_voice_v1_voices_add_post">Body_Add_voice_v1_voices_add_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_add_voice_v1_voices_add_post"></a>
<a id="schema_Body_Add_voice_v1_voices_add_post"></a>
<a id="tocSbody_add_voice_v1_voices_add_post"></a>
<a id="tocsbody_add_voice_v1_voices_add_post"></a>

```json
{
  "description": "string",
  "files": [
    "string"
  ],
  "labels": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|How would you describe the voice?|
|files|[string(binary)]|true|none|One or more audio files to clone the voice from|
|labels|string|false|none|Serialized labels dictionary for the voice.|
|name|string|true|none|The name that identifies this voice. This will be displayed in the dropdown of the website.|

<h2 id="tocS_Body_Delete_history_items_v1_history_delete_post">Body_Delete_history_items_v1_history_delete_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_delete_history_items_v1_history_delete_post"></a>
<a id="schema_Body_Delete_history_items_v1_history_delete_post"></a>
<a id="tocSbody_delete_history_items_v1_history_delete_post"></a>
<a id="tocsbody_delete_history_items_v1_history_delete_post"></a>

```json
{
  "history_item_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history_item_ids|[string]|true|none|A list of history items to remove, you can get IDs of history items and other metadata using the GET https://api.elevenlabs.io/v1/history endpoint.|

<h2 id="tocS_Body_Download_history_items_v1_history_download_post">Body_Download_history_items_v1_history_download_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_download_history_items_v1_history_download_post"></a>
<a id="schema_Body_Download_history_items_v1_history_download_post"></a>
<a id="tocSbody_download_history_items_v1_history_download_post"></a>
<a id="tocsbody_download_history_items_v1_history_download_post"></a>

```json
{
  "history_item_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history_item_ids|[string]|true|none|A list of history items to download, you can get IDs of history items and other metadata using the GET https://api.elevenlabs.io/v1/history endpoint.|

<h2 id="tocS_Body_Edit_voice_v1_voices__voice_id__edit_post">Body_Edit_voice_v1_voices__voice_id__edit_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_edit_voice_v1_voices__voice_id__edit_post"></a>
<a id="schema_Body_Edit_voice_v1_voices__voice_id__edit_post"></a>
<a id="tocSbody_edit_voice_v1_voices__voice_id__edit_post"></a>
<a id="tocsbody_edit_voice_v1_voices__voice_id__edit_post"></a>

```json
{
  "description": "string",
  "files": [
    "string"
  ],
  "labels": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|How would you describe the voice?|
|files|[string(binary)]|false|none|Audio files to add to the voice|
|labels|string|false|none|Serialized labels dictionary for the voice.|
|name|string|true|none|The name that identifies this voice. This will be displayed in the dropdown of the website.|

<h2 id="tocS_Body_Text_to_speech_v1_text_to_speech__voice_id__post">Body_Text_to_speech_v1_text_to_speech__voice_id__post</h2>
<!-- backwards compatibility -->
<a id="schemabody_text_to_speech_v1_text_to_speech__voice_id__post"></a>
<a id="schema_Body_Text_to_speech_v1_text_to_speech__voice_id__post"></a>
<a id="tocSbody_text_to_speech_v1_text_to_speech__voice_id__post"></a>
<a id="tocsbody_text_to_speech_v1_text_to_speech__voice_id__post"></a>

```json
{
  "text": "string",
  "voice_settings": {
    "similarity_boost": 0,
    "stability": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The text that will get converted into speech. Currently only English text is supported.|
|voice_settings|object|false|none|Voice settings overriding stored setttings for the given voice. They are applied only on the given TTS request.|

<h2 id="tocS_Body_Text_to_speech_v1_text_to_speech__voice_id__stream_post">Body_Text_to_speech_v1_text_to_speech__voice_id__stream_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_text_to_speech_v1_text_to_speech__voice_id__stream_post"></a>
<a id="schema_Body_Text_to_speech_v1_text_to_speech__voice_id__stream_post"></a>
<a id="tocSbody_text_to_speech_v1_text_to_speech__voice_id__stream_post"></a>
<a id="tocsbody_text_to_speech_v1_text_to_speech__voice_id__stream_post"></a>

```json
{
  "text": "string",
  "voice_settings": {
    "similarity_boost": 0,
    "stability": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The text that will get converted into speech. Currently only English text is supported.|
|voice_settings|object|false|none|Voice settings overriding stored setttings for the given voice. They are applied only on the given TTS request.|

<h2 id="tocS_ExtendedSubscriptionResponseModel">ExtendedSubscriptionResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemaextendedsubscriptionresponsemodel"></a>
<a id="schema_ExtendedSubscriptionResponseModel"></a>
<a id="tocSextendedsubscriptionresponsemodel"></a>
<a id="tocsextendedsubscriptionresponsemodel"></a>

```json
{
  "allowed_to_extend_character_limit": true,
  "available_models": [
    {
      "display_name": "string",
      "model_id": "string",
      "supported_language": [
        {
          "display_name": "string",
          "iso_code": "string"
        }
      ]
    }
  ],
  "can_extend_character_limit": true,
  "can_extend_voice_limit": true,
  "can_use_delayed_payment_methods": true,
  "can_use_instant_voice_cloning": true,
  "can_use_professional_voice_cloning": true,
  "character_count": 0,
  "character_limit": 0,
  "currency": "usd",
  "next_character_count_reset_unix": 0,
  "next_invoice": {
    "amount_due_cents": 0,
    "next_payment_attempt_unix": 0
  },
  "professional_voice_limit": 0,
  "status": "trialing",
  "tier": "string",
  "voice_limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_to_extend_character_limit|boolean|true|none|none|
|available_models|[[TTSModelResponseModel](#schemattsmodelresponsemodel)]|true|none|none|
|can_extend_character_limit|boolean|true|none|none|
|can_extend_voice_limit|boolean|true|none|none|
|can_use_delayed_payment_methods|boolean|true|none|none|
|can_use_instant_voice_cloning|boolean|true|none|none|
|can_use_professional_voice_cloning|boolean|true|none|none|
|character_count|integer|true|none|none|
|character_limit|integer|true|none|none|
|currency|string|true|none|none|
|next_character_count_reset_unix|integer|true|none|none|
|next_invoice|[InvoiceResponseModel](#schemainvoiceresponsemodel)|true|none|none|
|professional_voice_limit|integer|true|none|none|
|status|string|true|none|none|
|tier|string|true|none|none|
|voice_limit|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|usd|
|currency|eur|
|status|trialing|
|status|active|
|status|incomplete|
|status|incomplete_expired|
|status|past_due|
|status|canceled|
|status|unpaid|
|status|free|

<h2 id="tocS_FeedbackResponseModel">FeedbackResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackresponsemodel"></a>
<a id="schema_FeedbackResponseModel"></a>
<a id="tocSfeedbackresponsemodel"></a>
<a id="tocsfeedbackresponsemodel"></a>

```json
{
  "audio_quality": true,
  "emotions": true,
  "feedback": "string",
  "glitches": true,
  "inaccurate_clone": true,
  "other": true,
  "review_status": "not_reviewed",
  "thumbs_up": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_quality|boolean|true|none|none|
|emotions|boolean|true|none|none|
|feedback|string|true|none|none|
|glitches|boolean|true|none|none|
|inaccurate_clone|boolean|true|none|none|
|other|boolean|true|none|none|
|review_status|string|false|none|none|
|thumbs_up|boolean|true|none|none|

<h2 id="tocS_FineTuningResponseModel">FineTuningResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemafinetuningresponsemodel"></a>
<a id="schema_FineTuningResponseModel"></a>
<a id="tocSfinetuningresponsemodel"></a>
<a id="tocsfinetuningresponsemodel"></a>

```json
{
  "fine_tuning_requested": true,
  "finetuning_state": "not_started",
  "is_allowed_to_fine_tune": true,
  "model_id": "string",
  "slice_ids": [
    "string"
  ],
  "verification_attempts": [
    {
      "accepted": true,
      "date_unix": 0,
      "levenshtein_distance": 0,
      "recording": {
        "mime_type": "string",
        "recording_id": "string",
        "size_bytes": 0,
        "transcription": "string",
        "upload_date_unix": 0
      },
      "similarity": 0,
      "text": "string"
    }
  ],
  "verification_attempts_count": 0,
  "verification_failures": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fine_tuning_requested|boolean|true|none|none|
|finetuning_state|string|true|none|none|
|is_allowed_to_fine_tune|boolean|true|none|none|
|model_id|string|true|none|none|
|slice_ids|[string]|true|none|none|
|verification_attempts|[[VerificationAttemptResponseModel](#schemaverificationattemptresponsemodel)]|true|none|none|
|verification_attempts_count|integer|true|none|none|
|verification_failures|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|finetuning_state|not_started|
|finetuning_state|is_fine_tuning|
|finetuning_state|fine_tuned|

<h2 id="tocS_GetHistoryResponseModel">GetHistoryResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemagethistoryresponsemodel"></a>
<a id="schema_GetHistoryResponseModel"></a>
<a id="tocSgethistoryresponsemodel"></a>
<a id="tocsgethistoryresponsemodel"></a>

```json
{
  "history": [
    {
      "character_count_change_from": 0,
      "character_count_change_to": 0,
      "content_type": "string",
      "date_unix": 0,
      "feedback": {
        "audio_quality": true,
        "emotions": true,
        "feedback": "string",
        "glitches": true,
        "inaccurate_clone": true,
        "other": true,
        "review_status": "not_reviewed",
        "thumbs_up": true
      },
      "history_item_id": "string",
      "request_id": "string",
      "settings": {},
      "state": "created",
      "text": "string",
      "voice_id": "string",
      "voice_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|[[HistoryItemResponseModel](#schemahistoryitemresponsemodel)]|true|none|none|

<h2 id="tocS_GetVoicesResponseModel">GetVoicesResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemagetvoicesresponsemodel"></a>
<a id="schema_GetVoicesResponseModel"></a>
<a id="tocSgetvoicesresponsemodel"></a>
<a id="tocsgetvoicesresponsemodel"></a>

```json
{
  "voices": [
    {
      "available_for_tiers": [
        "string"
      ],
      "category": "string",
      "description": "string",
      "fine_tuning": {
        "fine_tuning_requested": true,
        "finetuning_state": "not_started",
        "is_allowed_to_fine_tune": true,
        "model_id": "string",
        "slice_ids": [
          "string"
        ],
        "verification_attempts": [
          {
            "accepted": true,
            "date_unix": 0,
            "levenshtein_distance": 0,
            "recording": {
              "mime_type": "string",
              "recording_id": "string",
              "size_bytes": 0,
              "transcription": "string",
              "upload_date_unix": 0
            },
            "similarity": 0,
            "text": "string"
          }
        ],
        "verification_attempts_count": 0,
        "verification_failures": [
          "string"
        ]
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "preview_url": "string",
      "samples": [
        {
          "file_name": "string",
          "hash": "string",
          "mime_type": "string",
          "sample_id": "string",
          "size_bytes": 0
        }
      ],
      "settings": {
        "similarity_boost": 0,
        "stability": 0
      },
      "voice_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|voices|[[VoiceResponseModel](#schemavoiceresponsemodel)]|true|none|none|

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

<h2 id="tocS_HistoryItemResponseModel">HistoryItemResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemahistoryitemresponsemodel"></a>
<a id="schema_HistoryItemResponseModel"></a>
<a id="tocShistoryitemresponsemodel"></a>
<a id="tocshistoryitemresponsemodel"></a>

```json
{
  "character_count_change_from": 0,
  "character_count_change_to": 0,
  "content_type": "string",
  "date_unix": 0,
  "feedback": {
    "audio_quality": true,
    "emotions": true,
    "feedback": "string",
    "glitches": true,
    "inaccurate_clone": true,
    "other": true,
    "review_status": "not_reviewed",
    "thumbs_up": true
  },
  "history_item_id": "string",
  "request_id": "string",
  "settings": {},
  "state": "created",
  "text": "string",
  "voice_id": "string",
  "voice_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|character_count_change_from|integer|true|none|none|
|character_count_change_to|integer|true|none|none|
|content_type|string|true|none|none|
|date_unix|integer|true|none|none|
|feedback|[FeedbackResponseModel](#schemafeedbackresponsemodel)|true|none|none|
|history_item_id|string|true|none|none|
|request_id|string|true|none|none|
|settings|object|true|none|none|
|state|string|true|none|none|
|text|string|true|none|none|
|voice_id|string|true|none|none|
|voice_name|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|deleted|
|state|processing|

<h2 id="tocS_InvoiceResponseModel">InvoiceResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceresponsemodel"></a>
<a id="schema_InvoiceResponseModel"></a>
<a id="tocSinvoiceresponsemodel"></a>
<a id="tocsinvoiceresponsemodel"></a>

```json
{
  "amount_due_cents": 0,
  "next_payment_attempt_unix": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount_due_cents|integer|true|none|none|
|next_payment_attempt_unix|integer|true|none|none|

<h2 id="tocS_LanguageResponseModel">LanguageResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemalanguageresponsemodel"></a>
<a id="schema_LanguageResponseModel"></a>
<a id="tocSlanguageresponsemodel"></a>
<a id="tocslanguageresponsemodel"></a>

```json
{
  "display_name": "string",
  "iso_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|true|none|none|
|iso_code|string|true|none|none|

<h2 id="tocS_RecordingResponseModel">RecordingResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemarecordingresponsemodel"></a>
<a id="schema_RecordingResponseModel"></a>
<a id="tocSrecordingresponsemodel"></a>
<a id="tocsrecordingresponsemodel"></a>

```json
{
  "mime_type": "string",
  "recording_id": "string",
  "size_bytes": 0,
  "transcription": "string",
  "upload_date_unix": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mime_type|string|true|none|none|
|recording_id|string|true|none|none|
|size_bytes|integer|true|none|none|
|transcription|string|true|none|none|
|upload_date_unix|integer|true|none|none|

<h2 id="tocS_SampleResponseModel">SampleResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemasampleresponsemodel"></a>
<a id="schema_SampleResponseModel"></a>
<a id="tocSsampleresponsemodel"></a>
<a id="tocssampleresponsemodel"></a>

```json
{
  "file_name": "string",
  "hash": "string",
  "mime_type": "string",
  "sample_id": "string",
  "size_bytes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_name|string|true|none|none|
|hash|string|true|none|none|
|mime_type|string|true|none|none|
|sample_id|string|true|none|none|
|size_bytes|integer|true|none|none|

<h2 id="tocS_SubscriptionResponseModel">SubscriptionResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionresponsemodel"></a>
<a id="schema_SubscriptionResponseModel"></a>
<a id="tocSsubscriptionresponsemodel"></a>
<a id="tocssubscriptionresponsemodel"></a>

```json
{
  "allowed_to_extend_character_limit": true,
  "available_models": [
    {
      "display_name": "string",
      "model_id": "string",
      "supported_language": [
        {
          "display_name": "string",
          "iso_code": "string"
        }
      ]
    }
  ],
  "can_extend_character_limit": true,
  "can_extend_voice_limit": true,
  "can_use_delayed_payment_methods": true,
  "can_use_instant_voice_cloning": true,
  "can_use_professional_voice_cloning": true,
  "character_count": 0,
  "character_limit": 0,
  "currency": "usd",
  "next_character_count_reset_unix": 0,
  "professional_voice_limit": 0,
  "status": "trialing",
  "tier": "string",
  "voice_limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_to_extend_character_limit|boolean|true|none|none|
|available_models|[[TTSModelResponseModel](#schemattsmodelresponsemodel)]|true|none|none|
|can_extend_character_limit|boolean|true|none|none|
|can_extend_voice_limit|boolean|true|none|none|
|can_use_delayed_payment_methods|boolean|true|none|none|
|can_use_instant_voice_cloning|boolean|true|none|none|
|can_use_professional_voice_cloning|boolean|true|none|none|
|character_count|integer|true|none|none|
|character_limit|integer|true|none|none|
|currency|string|true|none|none|
|next_character_count_reset_unix|integer|true|none|none|
|professional_voice_limit|integer|true|none|none|
|status|string|true|none|none|
|tier|string|true|none|none|
|voice_limit|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|usd|
|currency|eur|
|status|trialing|
|status|active|
|status|incomplete|
|status|incomplete_expired|
|status|past_due|
|status|canceled|
|status|unpaid|
|status|free|

<h2 id="tocS_TTSModelResponseModel">TTSModelResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemattsmodelresponsemodel"></a>
<a id="schema_TTSModelResponseModel"></a>
<a id="tocSttsmodelresponsemodel"></a>
<a id="tocsttsmodelresponsemodel"></a>

```json
{
  "display_name": "string",
  "model_id": "string",
  "supported_language": [
    {
      "display_name": "string",
      "iso_code": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|true|none|none|
|model_id|string|true|none|none|
|supported_language|[[LanguageResponseModel](#schemalanguageresponsemodel)]|true|none|none|

<h2 id="tocS_UserResponseModel">UserResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemauserresponsemodel"></a>
<a id="schema_UserResponseModel"></a>
<a id="tocSuserresponsemodel"></a>
<a id="tocsuserresponsemodel"></a>

```json
{
  "is_new_user": true,
  "subscription": {
    "allowed_to_extend_character_limit": true,
    "available_models": [
      {
        "display_name": "string",
        "model_id": "string",
        "supported_language": [
          {
            "display_name": "string",
            "iso_code": "string"
          }
        ]
      }
    ],
    "can_extend_character_limit": true,
    "can_extend_voice_limit": true,
    "can_use_delayed_payment_methods": true,
    "can_use_instant_voice_cloning": true,
    "can_use_professional_voice_cloning": true,
    "character_count": 0,
    "character_limit": 0,
    "currency": "usd",
    "next_character_count_reset_unix": 0,
    "professional_voice_limit": 0,
    "status": "trialing",
    "tier": "string",
    "voice_limit": 0
  },
  "xi_api_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new_user|boolean|true|none|none|
|subscription|[SubscriptionResponseModel](#schemasubscriptionresponsemodel)|true|none|none|
|xi_api_key|string|true|none|none|

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
|loc|[string \| integer]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_VerificationAttemptResponseModel">VerificationAttemptResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemaverificationattemptresponsemodel"></a>
<a id="schema_VerificationAttemptResponseModel"></a>
<a id="tocSverificationattemptresponsemodel"></a>
<a id="tocsverificationattemptresponsemodel"></a>

```json
{
  "accepted": true,
  "date_unix": 0,
  "levenshtein_distance": 0,
  "recording": {
    "mime_type": "string",
    "recording_id": "string",
    "size_bytes": 0,
    "transcription": "string",
    "upload_date_unix": 0
  },
  "similarity": 0,
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accepted|boolean|true|none|none|
|date_unix|integer|true|none|none|
|levenshtein_distance|number|true|none|none|
|recording|[RecordingResponseModel](#schemarecordingresponsemodel)|true|none|none|
|similarity|number|true|none|none|
|text|string|true|none|none|

<h2 id="tocS_VoiceResponseModel">VoiceResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemavoiceresponsemodel"></a>
<a id="schema_VoiceResponseModel"></a>
<a id="tocSvoiceresponsemodel"></a>
<a id="tocsvoiceresponsemodel"></a>

```json
{
  "available_for_tiers": [
    "string"
  ],
  "category": "string",
  "description": "string",
  "fine_tuning": {
    "fine_tuning_requested": true,
    "finetuning_state": "not_started",
    "is_allowed_to_fine_tune": true,
    "model_id": "string",
    "slice_ids": [
      "string"
    ],
    "verification_attempts": [
      {
        "accepted": true,
        "date_unix": 0,
        "levenshtein_distance": 0,
        "recording": {
          "mime_type": "string",
          "recording_id": "string",
          "size_bytes": 0,
          "transcription": "string",
          "upload_date_unix": 0
        },
        "similarity": 0,
        "text": "string"
      }
    ],
    "verification_attempts_count": 0,
    "verification_failures": [
      "string"
    ]
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "preview_url": "string",
  "samples": [
    {
      "file_name": "string",
      "hash": "string",
      "mime_type": "string",
      "sample_id": "string",
      "size_bytes": 0
    }
  ],
  "settings": {
    "similarity_boost": 0,
    "stability": 0
  },
  "voice_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available_for_tiers|[string]|true|none|none|
|category|string|true|none|none|
|description|string|true|none|none|
|fine_tuning|[FineTuningResponseModel](#schemafinetuningresponsemodel)|true|none|none|
|labels|object|true|none|none|
|name|string|true|none|none|
|preview_url|string|true|none|none|
|samples|[[SampleResponseModel](#schemasampleresponsemodel)]|true|none|none|
|settings|[VoiceSettingsResponseModel](#schemavoicesettingsresponsemodel)|true|none|none|
|voice_id|string|true|none|none|

<h2 id="tocS_VoiceSettingsResponseModel">VoiceSettingsResponseModel</h2>
<!-- backwards compatibility -->
<a id="schemavoicesettingsresponsemodel"></a>
<a id="schema_VoiceSettingsResponseModel"></a>
<a id="tocSvoicesettingsresponsemodel"></a>
<a id="tocsvoicesettingsresponsemodel"></a>

```json
{
  "similarity_boost": 0,
  "stability": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|similarity_boost|number|true|none|none|
|stability|number|true|none|none|
