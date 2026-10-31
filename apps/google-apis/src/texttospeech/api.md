<h1 id="cloud-text-to-speech-api">Cloud Text-to-Speech API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Synthesizes natural-sounding speech by applying powerful neural network models.

Base URLs:

* <a href="https://texttospeech.googleapis.com/">https://texttospeech.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/text-to-speech/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="cloud-text-to-speech-api-projects">projects</h1>

## texttospeech.projects.locations.operations.get

<a id="opIdtexttospeech.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="texttospeechprojectslocationsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="texttospeechprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## texttospeech.projects.locations.operations.list

<a id="opIdtexttospeech.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="texttospeechprojectslocationsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="texttospeechprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## texttospeech.projects.locations.synthesizeLongAudio

<a id="opIdtexttospeech.projects.locations.synthesizeLongAudio"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:synthesizeLongAudio \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "audioConfig": {
      "audioEncoding": "AUDIO_ENCODING_UNSPECIFIED",
      "effectsProfileId": [
        "string"
      ],
      "pitch": 0,
      "sampleRateHertz": 0,
      "speakingRate": 0,
      "volumeGainDb": 0
    },
    "input": {
      "ssml": "string",
      "text": "string"
    },
    "outputGcsUri": "string",
    "voice": {
      "customVoice": {
        "model": "string",
        "reportedUsage": "REPORTED_USAGE_UNSPECIFIED"
      },
      "languageCode": "string",
      "name": "string",
      "ssmlGender": "SSML_VOICE_GENDER_UNSPECIFIED"
    }
  }'
```

`POST /v1beta1/{parent}:synthesizeLongAudio`

Synthesizes long form text asynchronously.

> Body parameter

```json
{
  "audioConfig": {
    "audioEncoding": "AUDIO_ENCODING_UNSPECIFIED",
    "effectsProfileId": [
      "string"
    ],
    "pitch": 0,
    "sampleRateHertz": 0,
    "speakingRate": 0,
    "volumeGainDb": 0
  },
  "input": {
    "ssml": "string",
    "text": "string"
  },
  "outputGcsUri": "string",
  "voice": {
    "customVoice": {
      "model": "string",
      "reportedUsage": "REPORTED_USAGE_UNSPECIFIED"
    },
    "languageCode": "string",
    "name": "string",
    "ssmlGender": "SSML_VOICE_GENDER_UNSPECIFIED"
  }
}
```

<h3 id="texttospeechprojectslocationssynthesizelongaudio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource states of the request in the form of `projects/*/locations/*`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SynthesizeLongAudioRequest](#schemasynthesizelongaudiorequest)|false|none|
|» audioConfig|body|[AudioConfig](#schemaaudioconfig)|false|Required. The configuration of the synthesized audio.|
|» input|body|[SynthesisInput](#schemasynthesisinput)|false|Required. The Synthesizer requires either plain text or SSML as input. While Long Audio is in preview, SSML is temporarily unsupported.|
|» outputGcsUri|body|string|false|Required. Specifies a Cloud Storage URI for the synthesis results. Must be specified in the format: `gs://bucket_name/object_name`, and the bucket must already exist.|
|» voice|body|[VoiceSelectionParams](#schemavoiceselectionparams)|false|Required. The desired voice of the synthesized audio.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="texttospeechprojectslocationssynthesizelongaudio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-text-to-speech-api-text">text</h1>

## texttospeech.text.synthesize

<a id="opIdtexttospeech.text.synthesize"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/text:synthesize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "audioConfig": {
      "audioEncoding": "AUDIO_ENCODING_UNSPECIFIED",
      "effectsProfileId": [
        "string"
      ],
      "pitch": 0,
      "sampleRateHertz": 0,
      "speakingRate": 0,
      "volumeGainDb": 0
    },
    "enableTimePointing": [
      "TIMEPOINT_TYPE_UNSPECIFIED"
    ],
    "input": {
      "ssml": "string",
      "text": "string"
    },
    "voice": {
      "customVoice": {
        "model": "string",
        "reportedUsage": "REPORTED_USAGE_UNSPECIFIED"
      },
      "languageCode": "string",
      "name": "string",
      "ssmlGender": "SSML_VOICE_GENDER_UNSPECIFIED"
    }
  }'
```

`POST /v1beta1/text:synthesize`

Synthesizes speech synchronously: receive results after all text input has been processed.

> Body parameter

```json
{
  "audioConfig": {
    "audioEncoding": "AUDIO_ENCODING_UNSPECIFIED",
    "effectsProfileId": [
      "string"
    ],
    "pitch": 0,
    "sampleRateHertz": 0,
    "speakingRate": 0,
    "volumeGainDb": 0
  },
  "enableTimePointing": [
    "TIMEPOINT_TYPE_UNSPECIFIED"
  ],
  "input": {
    "ssml": "string",
    "text": "string"
  },
  "voice": {
    "customVoice": {
      "model": "string",
      "reportedUsage": "REPORTED_USAGE_UNSPECIFIED"
    },
    "languageCode": "string",
    "name": "string",
    "ssmlGender": "SSML_VOICE_GENDER_UNSPECIFIED"
  }
}
```

<h3 id="texttospeechtextsynthesize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SynthesizeSpeechRequest](#schemasynthesizespeechrequest)|false|none|
|» audioConfig|body|[AudioConfig](#schemaaudioconfig)|false|Required. The configuration of the synthesized audio.|
|» enableTimePointing|body|[string]|false|Whether and what timepoints are returned in the response.|
|» input|body|[SynthesisInput](#schemasynthesisinput)|false|Required. The Synthesizer requires either plain text or SSML as input.|
|» voice|body|[VoiceSelectionParams](#schemavoiceselectionparams)|false|Required. The desired voice of the synthesized audio.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» enableTimePointing|TIMEPOINT_TYPE_UNSPECIFIED|
|» enableTimePointing|SSML_MARK|

> Example responses

> 200 Response

```json
{
  "audioConfig": {
    "audioEncoding": "AUDIO_ENCODING_UNSPECIFIED",
    "effectsProfileId": [
      "string"
    ],
    "pitch": 0,
    "sampleRateHertz": 0,
    "speakingRate": 0,
    "volumeGainDb": 0
  },
  "audioContent": "string",
  "timepoints": [
    {
      "markName": "string",
      "timeSeconds": 0
    }
  ]
}
```

<h3 id="texttospeechtextsynthesize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SynthesizeSpeechResponse](#schemasynthesizespeechresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-text-to-speech-api-voices">voices</h1>

## texttospeech.voices.list

<a id="opIdtexttospeech.voices.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/voices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/voices`

Returns a list of Voice supported for synthesis.

<h3 id="texttospeechvoiceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|languageCode|query|string|false|Optional. Recommended. [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. If not specified, the API will return all supported voices. If specified, the ListVoices call will only return voices that can be used to synthesize this language_code. For example, if you specify `"en-NZ"`, all `"en-NZ"` voices will be returned. If you specify `"no"`, both `"no-\*"` (Norwegian) and `"nb-\*"` (Norwegian Bokmal) voices will be returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "voices": [
    {
      "languageCodes": [
        "string"
      ],
      "name": "string",
      "naturalSampleRateHertz": 0,
      "ssmlGender": "SSML_VOICE_GENDER_UNSPECIFIED"
    }
  ]
}
```

<h3 id="texttospeechvoiceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVoicesResponse](#schemalistvoicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AudioConfig">AudioConfig</h2>
<!-- backwards compatibility -->
<a id="schemaaudioconfig"></a>
<a id="schema_AudioConfig"></a>
<a id="tocSaudioconfig"></a>
<a id="tocsaudioconfig"></a>

```json
{
  "audioEncoding": "AUDIO_ENCODING_UNSPECIFIED",
  "effectsProfileId": [
    "string"
  ],
  "pitch": 0,
  "sampleRateHertz": 0,
  "speakingRate": 0,
  "volumeGainDb": 0
}
```

Description of audio data to be synthesized.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioEncoding|string|false|none|Required. The format of the audio byte stream.|
|effectsProfileId|[string]|false|none|Optional. Input only. An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given. See [audio profiles](https://cloud.google.com/text-to-speech/docs/audio-profiles) for current supported profile ids.|
|pitch|number(double)|false|none|Optional. Input only. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.|
|sampleRateHertz|integer(int32)|false|none|Optional. The synthesis sample rate (in hertz) for this audio. When this is specified in SynthesizeSpeechRequest, if this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality), unless the specified sample rate is not supported for the encoding chosen, in which case it will fail the request and return google.rpc.Code.INVALID_ARGUMENT.|
|speakingRate|number(double)|false|none|Optional. Input only. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or > 4.0 will return an error.|
|volumeGainDb|number(double)|false|none|Optional. Input only. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. Strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.|

#### Enumerated Values

|Property|Value|
|---|---|
|audioEncoding|AUDIO_ENCODING_UNSPECIFIED|
|audioEncoding|LINEAR16|
|audioEncoding|MP3|
|audioEncoding|MP3_64_KBPS|
|audioEncoding|OGG_OPUS|
|audioEncoding|MULAW|
|audioEncoding|ALAW|

<h2 id="tocS_CustomVoiceParams">CustomVoiceParams</h2>
<!-- backwards compatibility -->
<a id="schemacustomvoiceparams"></a>
<a id="schema_CustomVoiceParams"></a>
<a id="tocScustomvoiceparams"></a>
<a id="tocscustomvoiceparams"></a>

```json
{
  "model": "string",
  "reportedUsage": "REPORTED_USAGE_UNSPECIFIED"
}
```

Description of the custom voice to be synthesized.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|Required. The name of the AutoML model that synthesizes the custom voice.|
|reportedUsage|string|false|none|**Deprecated.** Optional. Deprecated. The usage of the synthesized audio to be reported.|

#### Enumerated Values

|Property|Value|
|---|---|
|reportedUsage|REPORTED_USAGE_UNSPECIFIED|
|reportedUsage|REALTIME|
|reportedUsage|OFFLINE|

<h2 id="tocS_GoogleCloudTexttospeechV1beta1SynthesizeLongAudioMetadata">GoogleCloudTexttospeechV1beta1SynthesizeLongAudioMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudtexttospeechv1beta1synthesizelongaudiometadata"></a>
<a id="schema_GoogleCloudTexttospeechV1beta1SynthesizeLongAudioMetadata"></a>
<a id="tocSgooglecloudtexttospeechv1beta1synthesizelongaudiometadata"></a>
<a id="tocsgooglecloudtexttospeechv1beta1synthesizelongaudiometadata"></a>

```json
{
  "lastUpdateTime": "string",
  "progressPercentage": 0,
  "startTime": "string"
}
```

Metadata for response returned by the `SynthesizeLongAudio` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdateTime|string(google-datetime)|false|none|**Deprecated.** Deprecated. Do not use.|
|progressPercentage|number(double)|false|none|The progress of the most recent processing update in percentage, ie. 70.0%.|
|startTime|string(google-datetime)|false|none|Time when the request was received.|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[Operation](#schemaoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_ListVoicesResponse">ListVoicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvoicesresponse"></a>
<a id="schema_ListVoicesResponse"></a>
<a id="tocSlistvoicesresponse"></a>
<a id="tocslistvoicesresponse"></a>

```json
{
  "voices": [
    {
      "languageCodes": [
        "string"
      ],
      "name": "string",
      "naturalSampleRateHertz": 0,
      "ssmlGender": "SSML_VOICE_GENDER_UNSPECIFIED"
    }
  ]
}
```

The message returned to the client by the `ListVoices` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|voices|[[Voice](#schemavoice)]|false|none|The list of voices.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_SynthesisInput">SynthesisInput</h2>
<!-- backwards compatibility -->
<a id="schemasynthesisinput"></a>
<a id="schema_SynthesisInput"></a>
<a id="tocSsynthesisinput"></a>
<a id="tocssynthesisinput"></a>

```json
{
  "ssml": "string",
  "text": "string"
}
```

Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 bytes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ssml|string|false|none|The SSML document to be synthesized. The SSML document must be valid and well-formed. Otherwise the RPC will fail and return google.rpc.Code.INVALID_ARGUMENT. For more information, see [SSML](https://cloud.google.com/text-to-speech/docs/ssml).|
|text|string|false|none|The raw text to be synthesized.|

<h2 id="tocS_SynthesizeLongAudioMetadata">SynthesizeLongAudioMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasynthesizelongaudiometadata"></a>
<a id="schema_SynthesizeLongAudioMetadata"></a>
<a id="tocSsynthesizelongaudiometadata"></a>
<a id="tocssynthesizelongaudiometadata"></a>

```json
{
  "lastUpdateTime": "string",
  "progressPercentage": 0,
  "startTime": "string"
}
```

Metadata for response returned by the `SynthesizeLongAudio` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdateTime|string(google-datetime)|false|none|**Deprecated.** Deprecated. Do not use.|
|progressPercentage|number(double)|false|none|The progress of the most recent processing update in percentage, ie. 70.0%.|
|startTime|string(google-datetime)|false|none|Time when the request was received.|

<h2 id="tocS_SynthesizeLongAudioRequest">SynthesizeLongAudioRequest</h2>
<!-- backwards compatibility -->
<a id="schemasynthesizelongaudiorequest"></a>
<a id="schema_SynthesizeLongAudioRequest"></a>
<a id="tocSsynthesizelongaudiorequest"></a>
<a id="tocssynthesizelongaudiorequest"></a>

```json
{
  "audioConfig": {
    "audioEncoding": "AUDIO_ENCODING_UNSPECIFIED",
    "effectsProfileId": [
      "string"
    ],
    "pitch": 0,
    "sampleRateHertz": 0,
    "speakingRate": 0,
    "volumeGainDb": 0
  },
  "input": {
    "ssml": "string",
    "text": "string"
  },
  "outputGcsUri": "string",
  "voice": {
    "customVoice": {
      "model": "string",
      "reportedUsage": "REPORTED_USAGE_UNSPECIFIED"
    },
    "languageCode": "string",
    "name": "string",
    "ssmlGender": "SSML_VOICE_GENDER_UNSPECIFIED"
  }
}
```

The top-level message sent by the client for the `SynthesizeLongAudio` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioConfig|[AudioConfig](#schemaaudioconfig)|false|none|Required. The configuration of the synthesized audio.|
|input|[SynthesisInput](#schemasynthesisinput)|false|none|Required. The Synthesizer requires either plain text or SSML as input. While Long Audio is in preview, SSML is temporarily unsupported.|
|outputGcsUri|string|false|none|Required. Specifies a Cloud Storage URI for the synthesis results. Must be specified in the format: `gs://bucket_name/object_name`, and the bucket must already exist.|
|voice|[VoiceSelectionParams](#schemavoiceselectionparams)|false|none|Required. The desired voice of the synthesized audio.|

<h2 id="tocS_SynthesizeSpeechRequest">SynthesizeSpeechRequest</h2>
<!-- backwards compatibility -->
<a id="schemasynthesizespeechrequest"></a>
<a id="schema_SynthesizeSpeechRequest"></a>
<a id="tocSsynthesizespeechrequest"></a>
<a id="tocssynthesizespeechrequest"></a>

```json
{
  "audioConfig": {
    "audioEncoding": "AUDIO_ENCODING_UNSPECIFIED",
    "effectsProfileId": [
      "string"
    ],
    "pitch": 0,
    "sampleRateHertz": 0,
    "speakingRate": 0,
    "volumeGainDb": 0
  },
  "enableTimePointing": [
    "TIMEPOINT_TYPE_UNSPECIFIED"
  ],
  "input": {
    "ssml": "string",
    "text": "string"
  },
  "voice": {
    "customVoice": {
      "model": "string",
      "reportedUsage": "REPORTED_USAGE_UNSPECIFIED"
    },
    "languageCode": "string",
    "name": "string",
    "ssmlGender": "SSML_VOICE_GENDER_UNSPECIFIED"
  }
}
```

The top-level message sent by the client for the `SynthesizeSpeech` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioConfig|[AudioConfig](#schemaaudioconfig)|false|none|Required. The configuration of the synthesized audio.|
|enableTimePointing|[string]|false|none|Whether and what timepoints are returned in the response.|
|input|[SynthesisInput](#schemasynthesisinput)|false|none|Required. The Synthesizer requires either plain text or SSML as input.|
|voice|[VoiceSelectionParams](#schemavoiceselectionparams)|false|none|Required. The desired voice of the synthesized audio.|

#### Enumerated Values

|Property|Value|
|---|---|
|enableTimePointing|TIMEPOINT_TYPE_UNSPECIFIED|
|enableTimePointing|SSML_MARK|

<h2 id="tocS_SynthesizeSpeechResponse">SynthesizeSpeechResponse</h2>
<!-- backwards compatibility -->
<a id="schemasynthesizespeechresponse"></a>
<a id="schema_SynthesizeSpeechResponse"></a>
<a id="tocSsynthesizespeechresponse"></a>
<a id="tocssynthesizespeechresponse"></a>

```json
{
  "audioConfig": {
    "audioEncoding": "AUDIO_ENCODING_UNSPECIFIED",
    "effectsProfileId": [
      "string"
    ],
    "pitch": 0,
    "sampleRateHertz": 0,
    "speakingRate": 0,
    "volumeGainDb": 0
  },
  "audioContent": "string",
  "timepoints": [
    {
      "markName": "string",
      "timeSeconds": 0
    }
  ]
}
```

The message returned to the client by the `SynthesizeSpeech` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioConfig|[AudioConfig](#schemaaudioconfig)|false|none|The audio metadata of `audio_content`.|
|audioContent|string(byte)|false|none|The audio data bytes encoded as specified in the request, including the header for encodings that are wrapped in containers (e.g. MP3, OGG_OPUS). For LINEAR16 audio, we include the WAV header. Note: as with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.|
|timepoints|[[Timepoint](#schematimepoint)]|false|none|A link between a position in the original request input and a corresponding time in the output audio. It's only supported via `` of SSML input.|

<h2 id="tocS_Timepoint">Timepoint</h2>
<!-- backwards compatibility -->
<a id="schematimepoint"></a>
<a id="schema_Timepoint"></a>
<a id="tocStimepoint"></a>
<a id="tocstimepoint"></a>

```json
{
  "markName": "string",
  "timeSeconds": 0
}
```

This contains a mapping between a certain point in the input text and a corresponding time in the output audio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|markName|string|false|none|Timepoint name as received from the client within `` tag.|
|timeSeconds|number(double)|false|none|Time offset in seconds from the start of the synthesized audio.|

<h2 id="tocS_Voice">Voice</h2>
<!-- backwards compatibility -->
<a id="schemavoice"></a>
<a id="schema_Voice"></a>
<a id="tocSvoice"></a>
<a id="tocsvoice"></a>

```json
{
  "languageCodes": [
    "string"
  ],
  "name": "string",
  "naturalSampleRateHertz": 0,
  "ssmlGender": "SSML_VOICE_GENDER_UNSPECIFIED"
}
```

Description of a voice supported by the TTS service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCodes|[string]|false|none|The languages that this voice supports, expressed as [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags (e.g. "en-US", "es-419", "cmn-tw").|
|name|string|false|none|The name of this voice. Each distinct voice has a unique name.|
|naturalSampleRateHertz|integer(int32)|false|none|The natural sample rate (in hertz) for this voice.|
|ssmlGender|string|false|none|The gender of this voice.|

#### Enumerated Values

|Property|Value|
|---|---|
|ssmlGender|SSML_VOICE_GENDER_UNSPECIFIED|
|ssmlGender|MALE|
|ssmlGender|FEMALE|
|ssmlGender|NEUTRAL|

<h2 id="tocS_VoiceSelectionParams">VoiceSelectionParams</h2>
<!-- backwards compatibility -->
<a id="schemavoiceselectionparams"></a>
<a id="schema_VoiceSelectionParams"></a>
<a id="tocSvoiceselectionparams"></a>
<a id="tocsvoiceselectionparams"></a>

```json
{
  "customVoice": {
    "model": "string",
    "reportedUsage": "REPORTED_USAGE_UNSPECIFIED"
  },
  "languageCode": "string",
  "name": "string",
  "ssmlGender": "SSML_VOICE_GENDER_UNSPECIFIED"
}
```

Description of which voice to use for a synthesis request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customVoice|[CustomVoiceParams](#schemacustomvoiceparams)|false|none|The configuration for a custom voice. If [CustomVoiceParams.model] is set, the service will choose the custom voice matching the specified configuration.|
|languageCode|string|false|none|Required. The language (and potentially also the region) of the voice expressed as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag, e.g. "en-US". This should not include a script tag (e.g. use "cmn-cn" rather than "cmn-Hant-cn"), because the script will be inferred from the input provided in the SynthesisInput. The TTS service will use this parameter to help choose an appropriate voice. Note that the TTS service may choose a voice with a slightly different language code than the one selected; it may substitute a different region (e.g. using en-US rather than en-CA if there isn't a Canadian voice available), or even a different language, e.g. using "nb" (Norwegian Bokmal) instead of "no" (Norwegian)".|
|name|string|false|none|The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and gender.|
|ssmlGender|string|false|none|The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement; if a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|ssmlGender|SSML_VOICE_GENDER_UNSPECIFIED|
|ssmlGender|MALE|
|ssmlGender|FEMALE|
|ssmlGender|NEUTRAL|
