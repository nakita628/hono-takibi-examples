<h1 id="aivisspeech-engine">AivisSpeech Engine vlatest</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

AivisSpeech の音声合成エンジンです。

<h1 id="aivisspeech-engine-クエリ作成">クエリ作成</h1>

## 音声合成用のクエリを作成する

<a id="opIdaudio_query"></a>

> Code samples

```bash
curl 'http://localhost:10101/audio_query?text=string&speaker=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /audio_query`

音声合成用のクエリの初期値を得ます。ここで得られたクエリはそのまま音声合成に利用できます。<br>
各値の意味は `Schemas` を参照してください。

AivisSpeech Engine では英単語は常に自動的に自然なカタカナ読みに変換されて読み上げられる仕様のため、enable_katakana_english は指定不要です（常に無視されます）。

<h3 id="音声合成用のクエリを作成する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|none|
|speaker|query|integer|true|none|
|enable_katakana_english|query|boolean|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|

> Example responses

> 200 Response

```json
{
  "accent_phrases": [
    {
      "moras": [
        {
          "text": "string",
          "consonant": "string",
          "consonant_length": 0,
          "vowel": "string",
          "vowel_length": 0,
          "pitch": 0
        }
      ],
      "accent": 0,
      "pause_mora": {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      },
      "is_interrogative": false
    }
  ],
  "speedScale": 0,
  "intonationScale": 0,
  "tempoDynamicsScale": 1,
  "pitchScale": 0,
  "volumeScale": 0,
  "prePhonemeLength": 0,
  "postPhonemeLength": 0,
  "pauseLength": 0,
  "pauseLengthScale": 1,
  "outputSamplingRate": 0,
  "outputStereo": true,
  "kana": "string"
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="音声合成用のクエリを作成する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AudioQuery](#schemaaudioquery)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## 音声合成用のクエリをプリセットを用いて作成する

<a id="opIdaudio_query_from_preset"></a>

> Code samples

```bash
curl 'http://localhost:10101/audio_query_from_preset?text=string&preset_id=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /audio_query_from_preset`

音声合成用のクエリの初期値を得ます。ここで得られたクエリはそのまま音声合成に利用できます。<br>
各値の意味は `Schemas` を参照してください。

AivisSpeech Engine では英単語は常に自動的に自然なカタカナ読みに変換されて読み上げられる仕様のため、enable_katakana_english は指定不要です（常に無視されます）。

<h3 id="音声合成用のクエリをプリセットを用いて作成する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|none|
|preset_id|query|integer|true|none|
|enable_katakana_english|query|boolean|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|

> Example responses

> 200 Response

```json
{
  "accent_phrases": [
    {
      "moras": [
        {
          "text": "string",
          "consonant": "string",
          "consonant_length": 0,
          "vowel": "string",
          "vowel_length": 0,
          "pitch": 0
        }
      ],
      "accent": 0,
      "pause_mora": {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      },
      "is_interrogative": false
    }
  ],
  "speedScale": 0,
  "intonationScale": 0,
  "tempoDynamicsScale": 1,
  "pitchScale": 0,
  "volumeScale": 0,
  "prePhonemeLength": 0,
  "postPhonemeLength": 0,
  "pauseLength": 0,
  "pauseLengthScale": 1,
  "outputSamplingRate": 0,
  "outputStereo": true,
  "kana": "string"
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="音声合成用のクエリをプリセットを用いて作成する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AudioQuery](#schemaaudioquery)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)

<a id="opIdsing_frame_audio_query"></a>

> Code samples

```bash
curl 'http://localhost:10101/sing_frame_audio_query?speaker=0' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "notes": [
      {
        "id": "string",
        "key": 0,
        "frame_length": 0,
        "lyric": "string"
      }
    ]
  }'
```

`POST /sing_frame_audio_query`

> Body parameter

```json
{
  "notes": [
    {
      "id": "string",
      "key": 0,
      "frame_length": 0,
      "lyric": "string"
    }
  ]
}
```

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker|query|integer|true|none|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|body|body|[Score](#schemascore)|true|none|
|» notes|body|[[Note](#schemanote)]|true|音符のリスト|

> Example responses

> 200 Response

```json
{
  "f0": [
    0
  ],
  "volume": [
    0
  ],
  "phonemes": [
    {
      "phoneme": "string",
      "frame_length": 0,
      "note_id": "string"
    }
  ],
  "volumeScale": 0,
  "outputSamplingRate": 0,
  "outputStereo": true
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[FrameAudioQuery](#schemaframeaudioquery)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## テキストが AquesTalk 風記法に従っているか判定する

<a id="opIdvalidate_kana"></a>

> Code samples

```bash
curl 'http://localhost:10101/validate_kana?text=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /validate_kana`

テキストが AquesTalk 風記法に従っているかどうかを判定します。従っていない場合はエラーが返ります。

<h3 id="テキストが-aquestalk-風記法に従っているか判定する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|判定する対象の文字列|

> Example responses

> 200 Response

```json
true
```

> 400 Response

```json
{
  "text": "string",
  "error_name": "string",
  "error_args": {
    "property1": "string",
    "property2": "string"
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="テキストが-aquestalk-風記法に従っているか判定する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|400|Bad Request|テキストが不正です|[ParseKanaBadRequest](#schemaparsekanabadrequest)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="aivisspeech-engine-クエリ編集">クエリ編集</h1>

## テキストからアクセント句を得る

<a id="opIdaccent_phrases"></a>

> Code samples

```bash
curl 'http://localhost:10101/accent_phrases?text=string&speaker=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /accent_phrases`

テキストからアクセント句を得ます。<br>
is_kanaが`true`のとき、テキストは次の AquesTalk 風記法で解釈されます。デフォルトは`false`です。
* 全てのカナはカタカナで記述される
* アクセント句は`/`または`、`で区切る。`、`で区切った場合に限り無音区間が挿入される。
* カナの手前に`_`を入れるとそのカナは無声化される
* アクセント位置を`'`で指定する。全てのアクセント句にはアクセント位置を1つ指定する必要がある。
* アクセント句末に`？`(全角)を入れることにより疑問文の発音ができる。

AivisSpeech Engine では英単語は常に自動的に自然なカタカナ読みに変換されて読み上げられる仕様のため、enable_katakana_english は指定不要です（常に無視されます）。

<h3 id="テキストからアクセント句を得る-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|none|
|speaker|query|integer|true|none|
|is_kana|query|boolean|false|none|
|enable_katakana_english|query|boolean|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|

> Example responses

> 200 Response

```json
[
  {
    "moras": [
      {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      }
    ],
    "accent": 0,
    "pause_mora": {
      "text": "string",
      "consonant": "string",
      "consonant_length": 0,
      "vowel": "string",
      "vowel_length": 0,
      "pitch": 0
    },
    "is_interrogative": false
  }
]
```

> 400 Response

```json
{
  "text": "string",
  "error_name": "string",
  "error_args": {
    "property1": "string",
    "property2": "string"
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="テキストからアクセント句を得る-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|400|Bad Request|読み仮名のパースに失敗|[ParseKanaBadRequest](#schemaparsekanabadrequest)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="テキストからアクセント句を得る-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AccentPhrase](#schemaaccentphrase)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## アクセント句から音高・音素長を得る (AivisSpeech Engine では常にダミーの値が返されます)

<a id="opIdmora_data"></a>

> Code samples

```bash
curl 'http://localhost:10101/mora_data?speaker=0' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "moras": [
        {
          "text": "string",
          "consonant": "string",
          "consonant_length": 0,
          "vowel": "string",
          "vowel_length": 0,
          "pitch": 0
        }
      ],
      "accent": 0,
      "pause_mora": {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      },
      "is_interrogative": false
    }
  ]'
```

`POST /mora_data`

> Body parameter

```json
[
  {
    "moras": [
      {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      }
    ],
    "accent": 0,
    "pause_mora": {
      "text": "string",
      "consonant": "string",
      "consonant_length": 0,
      "vowel": "string",
      "vowel_length": 0,
      "pitch": 0
    },
    "is_interrogative": false
  }
]
```

<h3 id="アクセント句から音高・音素長を得る-aivisspeech-engine-では常にダミーの値が返されます-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker|query|integer|true|none|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|body|body|[[AccentPhrase](#schemaaccentphrase)]|true|none|

> Example responses

> 200 Response

```json
[
  {
    "moras": [
      {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      }
    ],
    "accent": 0,
    "pause_mora": {
      "text": "string",
      "consonant": "string",
      "consonant_length": 0,
      "vowel": "string",
      "vowel_length": 0,
      "pitch": 0
    },
    "is_interrogative": false
  }
]
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="アクセント句から音高・音素長を得る-aivisspeech-engine-では常にダミーの値が返されます-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="アクセント句から音高・音素長を得る-aivisspeech-engine-では常にダミーの値が返されます-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AccentPhrase](#schemaaccentphrase)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## アクセント句から音素長を得る (AivisSpeech Engine では常にダミーの値が返されます)

<a id="opIdmora_length"></a>

> Code samples

```bash
curl 'http://localhost:10101/mora_length?speaker=0' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "moras": [
        {
          "text": "string",
          "consonant": "string",
          "consonant_length": 0,
          "vowel": "string",
          "vowel_length": 0,
          "pitch": 0
        }
      ],
      "accent": 0,
      "pause_mora": {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      },
      "is_interrogative": false
    }
  ]'
```

`POST /mora_length`

> Body parameter

```json
[
  {
    "moras": [
      {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      }
    ],
    "accent": 0,
    "pause_mora": {
      "text": "string",
      "consonant": "string",
      "consonant_length": 0,
      "vowel": "string",
      "vowel_length": 0,
      "pitch": 0
    },
    "is_interrogative": false
  }
]
```

<h3 id="アクセント句から音素長を得る-aivisspeech-engine-では常にダミーの値が返されます-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker|query|integer|true|none|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|body|body|[[AccentPhrase](#schemaaccentphrase)]|true|none|

> Example responses

> 200 Response

```json
[
  {
    "moras": [
      {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      }
    ],
    "accent": 0,
    "pause_mora": {
      "text": "string",
      "consonant": "string",
      "consonant_length": 0,
      "vowel": "string",
      "vowel_length": 0,
      "pitch": 0
    },
    "is_interrogative": false
  }
]
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="アクセント句から音素長を得る-aivisspeech-engine-では常にダミーの値が返されます-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="アクセント句から音素長を得る-aivisspeech-engine-では常にダミーの値が返されます-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AccentPhrase](#schemaaccentphrase)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## アクセント句から音高を得る (AivisSpeech Engine では常にダミーの値が返されます)

<a id="opIdmora_pitch"></a>

> Code samples

```bash
curl 'http://localhost:10101/mora_pitch?speaker=0' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "moras": [
        {
          "text": "string",
          "consonant": "string",
          "consonant_length": 0,
          "vowel": "string",
          "vowel_length": 0,
          "pitch": 0
        }
      ],
      "accent": 0,
      "pause_mora": {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      },
      "is_interrogative": false
    }
  ]'
```

`POST /mora_pitch`

> Body parameter

```json
[
  {
    "moras": [
      {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      }
    ],
    "accent": 0,
    "pause_mora": {
      "text": "string",
      "consonant": "string",
      "consonant_length": 0,
      "vowel": "string",
      "vowel_length": 0,
      "pitch": 0
    },
    "is_interrogative": false
  }
]
```

<h3 id="アクセント句から音高を得る-aivisspeech-engine-では常にダミーの値が返されます-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker|query|integer|true|none|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|body|body|[[AccentPhrase](#schemaaccentphrase)]|true|none|

> Example responses

> 200 Response

```json
[
  {
    "moras": [
      {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      }
    ],
    "accent": 0,
    "pause_mora": {
      "text": "string",
      "consonant": "string",
      "consonant_length": 0,
      "vowel": "string",
      "vowel_length": 0,
      "pitch": 0
    },
    "is_interrogative": false
  }
]
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="アクセント句から音高を得る-aivisspeech-engine-では常にダミーの値が返されます-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="アクセント句から音高を得る-aivisspeech-engine-では常にダミーの値が返されます-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AccentPhrase](#schemaaccentphrase)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)

<a id="opIdsing_frame_f0"></a>

> Code samples

```bash
curl 'http://localhost:10101/sing_frame_f0?speaker=0' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "score": {
      "notes": [
        {
          "id": "string",
          "key": 0,
          "frame_length": 0,
          "lyric": "string"
        }
      ]
    },
    "frame_audio_query": {
      "f0": [
        0
      ],
      "volume": [
        0
      ],
      "phonemes": [
        {
          "phoneme": "string",
          "frame_length": 0,
          "note_id": "string"
        }
      ],
      "volumeScale": 0,
      "outputSamplingRate": 0,
      "outputStereo": true
    }
  }'
```

`POST /sing_frame_f0`

> Body parameter

```json
{
  "score": {
    "notes": [
      {
        "id": "string",
        "key": 0,
        "frame_length": 0,
        "lyric": "string"
      }
    ]
  },
  "frame_audio_query": {
    "f0": [
      0
    ],
    "volume": [
      0
    ],
    "phonemes": [
      {
        "phoneme": "string",
        "frame_length": 0,
        "note_id": "string"
      }
    ],
    "volumeScale": 0,
    "outputSamplingRate": 0,
    "outputStereo": true
  }
}
```

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker|query|integer|true|none|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|body|body|[Body_sing_frame_f0_sing_frame_f0_post](#schemabody_sing_frame_f0_sing_frame_f0_post)|true|none|
|» score|body|[Score](#schemascore)|true|楽譜情報。|
|» frame_audio_query|body|[FrameAudioQuery](#schemaframeaudioquery)|true|フレームごとの音声合成用のクエリ。|

> Example responses

> 200 Response

```json
[
  0
]
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[number]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)

<a id="opIdsing_frame_volume"></a>

> Code samples

```bash
curl 'http://localhost:10101/sing_frame_volume?speaker=0' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "score": {
      "notes": [
        {
          "id": "string",
          "key": 0,
          "frame_length": 0,
          "lyric": "string"
        }
      ]
    },
    "frame_audio_query": {
      "f0": [
        0
      ],
      "volume": [
        0
      ],
      "phonemes": [
        {
          "phoneme": "string",
          "frame_length": 0,
          "note_id": "string"
        }
      ],
      "volumeScale": 0,
      "outputSamplingRate": 0,
      "outputStereo": true
    }
  }'
```

`POST /sing_frame_volume`

> Body parameter

```json
{
  "score": {
    "notes": [
      {
        "id": "string",
        "key": 0,
        "frame_length": 0,
        "lyric": "string"
      }
    ]
  },
  "frame_audio_query": {
    "f0": [
      0
    ],
    "volume": [
      0
    ],
    "phonemes": [
      {
        "phoneme": "string",
        "frame_length": 0,
        "note_id": "string"
      }
    ],
    "volumeScale": 0,
    "outputSamplingRate": 0,
    "outputStereo": true
  }
}
```

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker|query|integer|true|none|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|body|body|[Body_sing_frame_volume_sing_frame_volume_post](#schemabody_sing_frame_volume_sing_frame_volume_post)|true|none|
|» score|body|[Score](#schemascore)|true|楽譜情報。|
|» frame_audio_query|body|[FrameAudioQuery](#schemaframeaudioquery)|true|フレームごとの音声合成用のクエリ。|

> Example responses

> 200 Response

```json
[
  0
]
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[number]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="aivisspeech-engine-音声合成">音声合成</h1>

## 音声合成する

<a id="opIdsynthesis"></a>

> Code samples

```bash
curl 'http://localhost:10101/synthesis?speaker=0' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accent_phrases": [
      {
        "moras": [
          {
            "text": "string",
            "consonant": "string",
            "consonant_length": 0,
            "vowel": "string",
            "vowel_length": 0,
            "pitch": 0
          }
        ],
        "accent": 0,
        "pause_mora": {
          "text": "string",
          "consonant": "string",
          "consonant_length": 0,
          "vowel": "string",
          "vowel_length": 0,
          "pitch": 0
        },
        "is_interrogative": false
      }
    ],
    "speedScale": 0,
    "intonationScale": 0,
    "tempoDynamicsScale": 1,
    "pitchScale": 0,
    "volumeScale": 0,
    "prePhonemeLength": 0,
    "postPhonemeLength": 0,
    "pauseLength": 0,
    "pauseLengthScale": 1,
    "outputSamplingRate": 0,
    "outputStereo": true,
    "kana": "string"
  }'
```

`POST /synthesis`

指定されたスタイル ID に紐づく音声合成モデルを用いて音声合成を行います。

> Body parameter

```json
{
  "accent_phrases": [
    {
      "moras": [
        {
          "text": "string",
          "consonant": "string",
          "consonant_length": 0,
          "vowel": "string",
          "vowel_length": 0,
          "pitch": 0
        }
      ],
      "accent": 0,
      "pause_mora": {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      },
      "is_interrogative": false
    }
  ],
  "speedScale": 0,
  "intonationScale": 0,
  "tempoDynamicsScale": 1,
  "pitchScale": 0,
  "volumeScale": 0,
  "prePhonemeLength": 0,
  "postPhonemeLength": 0,
  "pauseLength": 0,
  "pauseLengthScale": 1,
  "outputSamplingRate": 0,
  "outputStereo": true,
  "kana": "string"
}
```

<h3 id="音声合成する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker|query|integer|true|none|
|enable_interrogative_upspeak|query|boolean|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|body|body|[AudioQuery](#schemaaudioquery)|true|none|
|» accent_phrases|body|[[AccentPhrase](#schemaaccentphrase)]|true|アクセント句のリスト。|
|» speedScale|body|number|true|全体の話速を 0.5 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>2.0 で 2 倍速、0.5 で 0.5 倍速になる。|
|» intonationScale|body|number|true|選択した話者スタイルの感情表現の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>「全体の抑揚」ではない点で VOICEVOX ENGINE と仕様が異なる。<br>数値が大きいほど、選択した話者スタイルに近い感情表現が込められた声になる。<br>例えば話者スタイルが「上機嫌」なら、数値が大きいほどより嬉しそうな明るい話し方になる。<br>一方で、話者やスタイルによっては、数値を上げすぎると発声がおかしくなったり、棒読みで不自然な声になる場合もある。<br>正しく発声できる上限値は話者やスタイルごとに異なる。必要に応じて最適な値を見つけて調整すること。<br>全スタイルの平均であるノーマルスタイルでは自動で適切な感情表現が選択されるため、この値を指定しても無視される。|
|» tempoDynamicsScale|body|number|false|話す速さ（テンポ）の緩急の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>AivisSpeech Engine 固有のフィールドで、VOICEVOX ENGINE には存在しない。<br>数値が大きいほどより早口で生っぽい抑揚がついた声になる。<br>VOICEVOX ENGINE との互換性のため、未指定時はデフォルト値が適用される。|
|» pitchScale|body|number|true|全体の音高を -0.15 ~ 0.15 の範囲で指定する (デフォルト: 0.0) 。<br>数値が大きいほど高い声になる。<br>VOICEVOX ENGINE と異なり、この値を 0.0 から変更すると音質が劣化するため注意が必要。|
|» volumeScale|body|number|true|全体の音量を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>数値が大きいほど大きな声になる。|
|» prePhonemeLength|body|number|true|音声の前の無音時間 (秒)。|
|» postPhonemeLength|body|number|true|音声の後の無音時間 (秒)。|
|» pauseLength|body|number \| null|false|句読点などの無音時間。null のときは無視される。デフォルト値は null 。|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» pauseLengthScale|body|number|false|句読点などの無音時間（倍率）。デフォルト値は 1 。|
|» outputSamplingRate|body|integer|true|音声データの出力サンプリングレート。|
|» outputStereo|body|boolean|true|音声データをステレオ出力するか否か。|
|» kana|body|string|false|読み上げるテキストを指定する。「読みの AquesTalk 風記法テキスト」ではない点で VOICEVOX ENGINE と仕様が異なる。<br>VOICEVOX ENGINE では AquesTalk 風記法テキストが入る読み取り専用フィールドだが (音声合成時には無視される) 、AivisSpeech Engine では音声合成時に漢字や記号が含まれた通常の読み上げテキストも必要なため、苦肉の策で読み上げテキスト指定用のフィールドとして転用した。<br>VOICEVOX ENGINE との互換性のため None や空文字列が指定された場合も動作するが、その場合はアクセント句から自動生成されたひらがな文字列が読み上げテキストになるため、不自然なイントネーションになってしまう。<br>可能な限り kana に通常の読み上げテキストを指定した上で音声合成 API に渡すことを推奨する。|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="音声合成する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)

<a id="opIdcancellable_synthesis"></a>

> Code samples

```bash
curl 'http://localhost:10101/cancellable_synthesis?speaker=0' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accent_phrases": [
      {
        "moras": [
          {
            "text": "string",
            "consonant": "string",
            "consonant_length": 0,
            "vowel": "string",
            "vowel_length": 0,
            "pitch": 0
          }
        ],
        "accent": 0,
        "pause_mora": {
          "text": "string",
          "consonant": "string",
          "consonant_length": 0,
          "vowel": "string",
          "vowel_length": 0,
          "pitch": 0
        },
        "is_interrogative": false
      }
    ],
    "speedScale": 0,
    "intonationScale": 0,
    "tempoDynamicsScale": 1,
    "pitchScale": 0,
    "volumeScale": 0,
    "prePhonemeLength": 0,
    "postPhonemeLength": 0,
    "pauseLength": 0,
    "pauseLengthScale": 1,
    "outputSamplingRate": 0,
    "outputStereo": true,
    "kana": "string"
  }'
```

`POST /cancellable_synthesis`

> Body parameter

```json
{
  "accent_phrases": [
    {
      "moras": [
        {
          "text": "string",
          "consonant": "string",
          "consonant_length": 0,
          "vowel": "string",
          "vowel_length": 0,
          "pitch": 0
        }
      ],
      "accent": 0,
      "pause_mora": {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      },
      "is_interrogative": false
    }
  ],
  "speedScale": 0,
  "intonationScale": 0,
  "tempoDynamicsScale": 1,
  "pitchScale": 0,
  "volumeScale": 0,
  "prePhonemeLength": 0,
  "postPhonemeLength": 0,
  "pauseLength": 0,
  "pauseLengthScale": 1,
  "outputSamplingRate": 0,
  "outputStereo": true,
  "kana": "string"
}
```

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker|query|integer|true|none|
|enable_interrogative_upspeak|query|boolean|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|body|body|[AudioQuery](#schemaaudioquery)|true|none|
|» accent_phrases|body|[[AccentPhrase](#schemaaccentphrase)]|true|アクセント句のリスト。|
|» speedScale|body|number|true|全体の話速を 0.5 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>2.0 で 2 倍速、0.5 で 0.5 倍速になる。|
|» intonationScale|body|number|true|選択した話者スタイルの感情表現の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>「全体の抑揚」ではない点で VOICEVOX ENGINE と仕様が異なる。<br>数値が大きいほど、選択した話者スタイルに近い感情表現が込められた声になる。<br>例えば話者スタイルが「上機嫌」なら、数値が大きいほどより嬉しそうな明るい話し方になる。<br>一方で、話者やスタイルによっては、数値を上げすぎると発声がおかしくなったり、棒読みで不自然な声になる場合もある。<br>正しく発声できる上限値は話者やスタイルごとに異なる。必要に応じて最適な値を見つけて調整すること。<br>全スタイルの平均であるノーマルスタイルでは自動で適切な感情表現が選択されるため、この値を指定しても無視される。|
|» tempoDynamicsScale|body|number|false|話す速さ（テンポ）の緩急の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>AivisSpeech Engine 固有のフィールドで、VOICEVOX ENGINE には存在しない。<br>数値が大きいほどより早口で生っぽい抑揚がついた声になる。<br>VOICEVOX ENGINE との互換性のため、未指定時はデフォルト値が適用される。|
|» pitchScale|body|number|true|全体の音高を -0.15 ~ 0.15 の範囲で指定する (デフォルト: 0.0) 。<br>数値が大きいほど高い声になる。<br>VOICEVOX ENGINE と異なり、この値を 0.0 から変更すると音質が劣化するため注意が必要。|
|» volumeScale|body|number|true|全体の音量を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>数値が大きいほど大きな声になる。|
|» prePhonemeLength|body|number|true|音声の前の無音時間 (秒)。|
|» postPhonemeLength|body|number|true|音声の後の無音時間 (秒)。|
|» pauseLength|body|number \| null|false|句読点などの無音時間。null のときは無視される。デフォルト値は null 。|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» pauseLengthScale|body|number|false|句読点などの無音時間（倍率）。デフォルト値は 1 。|
|» outputSamplingRate|body|integer|true|音声データの出力サンプリングレート。|
|» outputStereo|body|boolean|true|音声データをステレオ出力するか否か。|
|» kana|body|string|false|読み上げるテキストを指定する。「読みの AquesTalk 風記法テキスト」ではない点で VOICEVOX ENGINE と仕様が異なる。<br>VOICEVOX ENGINE では AquesTalk 風記法テキストが入る読み取り専用フィールドだが (音声合成時には無視される) 、AivisSpeech Engine では音声合成時に漢字や記号が含まれた通常の読み上げテキストも必要なため、苦肉の策で読み上げテキスト指定用のフィールドとして転用した。<br>VOICEVOX ENGINE との互換性のため None や空文字列が指定された場合も動作するが、その場合はアクセント句から自動生成されたひらがな文字列が読み上げテキストになるため、不自然なイントネーションになってしまう。<br>可能な限り kana に通常の読み上げテキストを指定した上で音声合成 API に渡すことを推奨する。|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## 複数まとめて音声合成する

<a id="opIdmulti_synthesis"></a>

> Code samples

```bash
curl 'http://localhost:10101/multi_synthesis?speaker=0' \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "accent_phrases": [
        {
          "moras": [
            {
              "text": "string",
              "consonant": "string",
              "consonant_length": 0,
              "vowel": "string",
              "vowel_length": 0,
              "pitch": 0
            }
          ],
          "accent": 0,
          "pause_mora": {
            "text": "string",
            "consonant": "string",
            "consonant_length": 0,
            "vowel": "string",
            "vowel_length": 0,
            "pitch": 0
          },
          "is_interrogative": false
        }
      ],
      "speedScale": 0,
      "intonationScale": 0,
      "tempoDynamicsScale": 1,
      "pitchScale": 0,
      "volumeScale": 0,
      "prePhonemeLength": 0,
      "postPhonemeLength": 0,
      "pauseLength": 0,
      "pauseLengthScale": 1,
      "outputSamplingRate": 0,
      "outputStereo": true,
      "kana": "string"
    }
  ]'
```

`POST /multi_synthesis`

> Body parameter

```json
[
  {
    "accent_phrases": [
      {
        "moras": [
          {
            "text": "string",
            "consonant": "string",
            "consonant_length": 0,
            "vowel": "string",
            "vowel_length": 0,
            "pitch": 0
          }
        ],
        "accent": 0,
        "pause_mora": {
          "text": "string",
          "consonant": "string",
          "consonant_length": 0,
          "vowel": "string",
          "vowel_length": 0,
          "pitch": 0
        },
        "is_interrogative": false
      }
    ],
    "speedScale": 0,
    "intonationScale": 0,
    "tempoDynamicsScale": 1,
    "pitchScale": 0,
    "volumeScale": 0,
    "prePhonemeLength": 0,
    "postPhonemeLength": 0,
    "pauseLength": 0,
    "pauseLengthScale": 1,
    "outputSamplingRate": 0,
    "outputStereo": true,
    "kana": "string"
  }
]
```

<h3 id="複数まとめて音声合成する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker|query|integer|true|none|
|enable_interrogative_upspeak|query|boolean|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|body|body|[[AudioQuery](#schemaaudioquery)]|true|none|

<h3 id="複数まとめて音声合成する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|クエリが空またはサンプリングレートが不一致|None|

<aside class="success">
This operation does not require authentication
</aside>

## AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)

<a id="opIdframe_synthesis"></a>

> Code samples

```bash
curl 'http://localhost:10101/frame_synthesis?speaker=0' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "f0": [
      0
    ],
    "volume": [
      0
    ],
    "phonemes": [
      {
        "phoneme": "string",
        "frame_length": 0,
        "note_id": "string"
      }
    ],
    "volumeScale": 0,
    "outputSamplingRate": 0,
    "outputStereo": true
  }'
```

`POST /frame_synthesis`

> Body parameter

```json
{
  "f0": [
    0
  ],
  "volume": [
    0
  ],
  "phonemes": [
    {
      "phoneme": "string",
      "frame_length": 0,
      "note_id": "string"
    }
  ],
  "volumeScale": 0,
  "outputSamplingRate": 0,
  "outputStereo": true
}
```

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker|query|integer|true|none|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|body|body|[FrameAudioQuery](#schemaframeaudioquery)|true|none|
|» f0|body|[number]|true|フレームごとの基本周波数|
|» volume|body|[number]|true|フレームごとの音量|
|» phonemes|body|[[FramePhoneme](#schemaframephoneme)]|true|音素のリスト|
|» volumeScale|body|number|true|全体の音量|
|» outputSamplingRate|body|integer|true|音声データの出力サンプリングレート|
|» outputStereo|body|boolean|true|音声データをステレオ出力するか否か|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Base64 エンコードされた複数の WAV データを一つに結合する

<a id="opIdconnect_waves"></a>

> Code samples

```bash
curl http://localhost:10101/connect_waves \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    "string"
  ]'
```

`POST /connect_waves`

Base64 エンコードされた WAV データを一つに結合し、WAV ファイルで返します。

> Body parameter

```json
[
  "string"
]
```

<h3 id="base64-エンコードされた複数の-wav-データを一つに結合する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|true|none|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="base64-エンコードされた複数の-wav-データを一つに結合する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## 指定したスタイルに対してエンジン内のキャラクターがモーフィングが可能か判定する

<a id="opIdmorphable_targets"></a>

> Code samples

```bash
curl http://localhost:10101/morphable_targets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    0
  ]'
```

`POST /morphable_targets`

指定されたベーススタイルに対してエンジン内の各キャラクターがモーフィング機能を利用可能か返します。<br>
モーフィングの許可/禁止は `/speakers `の `speaker.supported_features.synthesis_morphing` に記載されています。<br>
プロパティが存在しない場合は、モーフィングが許可されているとみなします。<br>
返り値のスタイル ID は string 型なので注意。<br>
AivisSpeech Engine では話者ごとに発声タイミングが異なる関係で実装不可能なため (動作こそするが聴くに耐えない) 、
全ての話者でモーフィングが禁止されています。

> Body parameter

```json
[
  0
]
```

<h3 id="指定したスタイルに対してエンジン内のキャラクターがモーフィングが可能か判定する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|body|body|[integer]|true|none|

> Example responses

> 200 Response

```json
[
  {
    "property1": {
      "is_morphable": true
    },
    "property2": {
      "is_morphable": true
    }
  }
]
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="指定したスタイルに対してエンジン内のキャラクターがモーフィングが可能か判定する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="指定したスタイルに対してエンジン内のキャラクターがモーフィングが可能か判定する-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» **additionalProperties**|[MorphableTargetInfo](#schemamorphabletargetinfo)|false|none|モーフィング相手としての情報。|

<aside class="success">
This operation does not require authentication
</aside>

## 2種類のスタイルでモーフィングした音声を合成する

<a id="opId_synthesis_morphing"></a>

> Code samples

```bash
curl 'http://localhost:10101/synthesis_morphing?base_speaker=0&target_speaker=0&morph_rate=0' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accent_phrases": [
      {
        "moras": [
          {
            "text": "string",
            "consonant": "string",
            "consonant_length": 0,
            "vowel": "string",
            "vowel_length": 0,
            "pitch": 0
          }
        ],
        "accent": 0,
        "pause_mora": {
          "text": "string",
          "consonant": "string",
          "consonant_length": 0,
          "vowel": "string",
          "vowel_length": 0,
          "pitch": 0
        },
        "is_interrogative": false
      }
    ],
    "speedScale": 0,
    "intonationScale": 0,
    "tempoDynamicsScale": 1,
    "pitchScale": 0,
    "volumeScale": 0,
    "prePhonemeLength": 0,
    "postPhonemeLength": 0,
    "pauseLength": 0,
    "pauseLengthScale": 1,
    "outputSamplingRate": 0,
    "outputStereo": true,
    "kana": "string"
  }'
```

`POST /synthesis_morphing`

指定された 2 種類のスタイルで音声を合成、指定した割合でモーフィングした音声を得ます。<br>
モーフィングの割合は `morph_rate` で指定でき、0.0 でベースのスタイル、1.0 でターゲットのスタイルに近づきます。<br>
AivisSpeech Engine では話者ごとに発声タイミングが異なる関係で実装不可能なため (動作こそするが聴くに耐えない) 、
常に 400 Bad Request を返します。

> Body parameter

```json
{
  "accent_phrases": [
    {
      "moras": [
        {
          "text": "string",
          "consonant": "string",
          "consonant_length": 0,
          "vowel": "string",
          "vowel_length": 0,
          "pitch": 0
        }
      ],
      "accent": 0,
      "pause_mora": {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      },
      "is_interrogative": false
    }
  ],
  "speedScale": 0,
  "intonationScale": 0,
  "tempoDynamicsScale": 1,
  "pitchScale": 0,
  "volumeScale": 0,
  "prePhonemeLength": 0,
  "postPhonemeLength": 0,
  "pauseLength": 0,
  "pauseLengthScale": 1,
  "outputSamplingRate": 0,
  "outputStereo": true,
  "kana": "string"
}
```

<h3 id="2種類のスタイルでモーフィングした音声を合成する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|base_speaker|query|integer|true|none|
|target_speaker|query|integer|true|none|
|morph_rate|query|number|true|none|
|enable_interrogative_upspeak|query|boolean|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|
|body|body|[AudioQuery](#schemaaudioquery)|true|none|
|» accent_phrases|body|[[AccentPhrase](#schemaaccentphrase)]|true|アクセント句のリスト。|
|» speedScale|body|number|true|全体の話速を 0.5 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>2.0 で 2 倍速、0.5 で 0.5 倍速になる。|
|» intonationScale|body|number|true|選択した話者スタイルの感情表現の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>「全体の抑揚」ではない点で VOICEVOX ENGINE と仕様が異なる。<br>数値が大きいほど、選択した話者スタイルに近い感情表現が込められた声になる。<br>例えば話者スタイルが「上機嫌」なら、数値が大きいほどより嬉しそうな明るい話し方になる。<br>一方で、話者やスタイルによっては、数値を上げすぎると発声がおかしくなったり、棒読みで不自然な声になる場合もある。<br>正しく発声できる上限値は話者やスタイルごとに異なる。必要に応じて最適な値を見つけて調整すること。<br>全スタイルの平均であるノーマルスタイルでは自動で適切な感情表現が選択されるため、この値を指定しても無視される。|
|» tempoDynamicsScale|body|number|false|話す速さ（テンポ）の緩急の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>AivisSpeech Engine 固有のフィールドで、VOICEVOX ENGINE には存在しない。<br>数値が大きいほどより早口で生っぽい抑揚がついた声になる。<br>VOICEVOX ENGINE との互換性のため、未指定時はデフォルト値が適用される。|
|» pitchScale|body|number|true|全体の音高を -0.15 ~ 0.15 の範囲で指定する (デフォルト: 0.0) 。<br>数値が大きいほど高い声になる。<br>VOICEVOX ENGINE と異なり、この値を 0.0 から変更すると音質が劣化するため注意が必要。|
|» volumeScale|body|number|true|全体の音量を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>数値が大きいほど大きな声になる。|
|» prePhonemeLength|body|number|true|音声の前の無音時間 (秒)。|
|» postPhonemeLength|body|number|true|音声の後の無音時間 (秒)。|
|» pauseLength|body|number \| null|false|句読点などの無音時間。null のときは無視される。デフォルト値は null 。|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» pauseLengthScale|body|number|false|句読点などの無音時間（倍率）。デフォルト値は 1 。|
|» outputSamplingRate|body|integer|true|音声データの出力サンプリングレート。|
|» outputStereo|body|boolean|true|音声データをステレオ出力するか否か。|
|» kana|body|string|false|読み上げるテキストを指定する。「読みの AquesTalk 風記法テキスト」ではない点で VOICEVOX ENGINE と仕様が異なる。<br>VOICEVOX ENGINE では AquesTalk 風記法テキストが入る読み取り専用フィールドだが (音声合成時には無視される) 、AivisSpeech Engine では音声合成時に漢字や記号が含まれた通常の読み上げテキストも必要なため、苦肉の策で読み上げテキスト指定用のフィールドとして転用した。<br>VOICEVOX ENGINE との互換性のため None や空文字列が指定された場合も動作するが、その場合はアクセント句から自動生成されたひらがな文字列が読み上げテキストになるため、不自然なイントネーションになってしまう。<br>可能な限り kana に通常の読み上げテキストを指定した上で音声合成 API に渡すことを推奨する。|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="2種類のスタイルでモーフィングした音声を合成する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="aivisspeech-engine-音声合成モデル管理">音声合成モデル管理</h1>

## 指定されたスタイル ID に紐づく音声合成モデルをロードする

<a id="opIdinitialize_speaker"></a>

> Code samples

```bash
curl 'http://localhost:10101/initialize_speaker?speaker=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /initialize_speaker`

指定されたスタイル ID に紐づく音声合成モデルをロードします。<br>
実行しなくても他の API は利用できますが、音声合成の初回実行時に時間がかかることがあります。

<h3 id="指定されたスタイル-id-に紐づく音声合成モデルをロードする-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker|query|integer|true|none|
|skip_reinit|query|boolean|false|既にロード済みの音声合成モデルの再ロードをスキップするかどうか|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="指定されたスタイル-id-に紐づく音声合成モデルをロードする-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## 指定されたスタイル ID に紐づく音声合成モデルがロードされているかを確認する

<a id="opIdis_initialized_speaker"></a>

> Code samples

```bash
curl 'http://localhost:10101/is_initialized_speaker?speaker=0' \
  -H 'Accept: application/json'
```

`GET /is_initialized_speaker`

指定されたスタイル ID に紐づく音声合成モデルがロードされているかどうかを返します。

<h3 id="指定されたスタイル-id-に紐づく音声合成モデルがロードされているかを確認する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker|query|integer|true|none|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|

> Example responses

> 200 Response

```json
true
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="指定されたスタイル-id-に紐づく音声合成モデルがロードされているかを確認する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## このビルドでサポートされている、音声合成モデルの推論デバイスを取得する

<a id="opIdsupported_devices"></a>

> Code samples

```bash
curl http://localhost:10101/supported_devices \
  -H 'Accept: application/json'
```

`GET /supported_devices`

このビルドでサポートされている、音声合成モデルの推論デバイスを返します。<br>
通常、下記の値が返されます。true であっても実際に推論デバイスが利用可能とは限りません。
- Windows: `{"cpu": true, "cuda": false, "dml": true}`
- macOS: `{"cpu": true, "cuda": false, "dml": false}`
- Linux: `{"cpu": true, "cuda": true, "dml": false}`

<h3 id="このビルドでサポートされている、音声合成モデルの推論デバイスを取得する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|

> Example responses

> 200 Response

```json
{
  "cpu": true,
  "cuda": true,
  "dml": true
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="このビルドでサポートされている、音声合成モデルの推論デバイスを取得する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SupportedDevicesInfo](#schemasupporteddevicesinfo)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## インストール済みのすべての音声合成モデルの情報を取得する

<a id="opIdget_installed_aivm_infos"></a>

> Code samples

```bash
curl http://localhost:10101/aivm_models \
  -H 'Accept: application/json'
```

`GET /aivm_models`

インストール済みのすべての音声合成モデルの情報を返します。

> Example responses

> 200 Response

```json
{
  "property1": {
    "is_loaded": true,
    "is_update_available": true,
    "is_private_model": true,
    "is_default_model": false,
    "latest_version": "string",
    "file_path": "string",
    "file_size": 0,
    "manifest": {
      "manifest_version": "1.0",
      "name": "string",
      "description": "",
      "creators": [],
      "license": "string",
      "model_architecture": "Style-Bert-VITS2",
      "model_format": "Safetensors",
      "training_epochs": 0,
      "training_steps": 0,
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "version": "string",
      "speakers": [
        {
          "name": "string",
          "icon": "string",
          "supported_languages": [
            "string"
          ],
          "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "local_id": 0,
          "styles": [
            {
              "name": "string",
              "icon": "string",
              "local_id": 0,
              "voice_samples": []
            }
          ]
        }
      ]
    },
    "speakers": [
      {
        "speaker": {
          "name": "string",
          "speaker_uuid": "string",
          "styles": [
            {
              "name": "string",
              "id": 0,
              "type": "talk"
            }
          ],
          "version": "string",
          "supported_features": {
            "permitted_synthesis_morphing": "ALL"
          }
        },
        "speaker_info": {
          "policy": "string",
          "portrait": "string",
          "style_infos": [
            {
              "id": 0,
              "icon": "string",
              "portrait": "string",
              "voice_samples": [
                "string"
              ],
              "voice_sample_transcripts": []
            }
          ]
        }
      }
    ]
  },
  "property2": {
    "is_loaded": true,
    "is_update_available": true,
    "is_private_model": true,
    "is_default_model": false,
    "latest_version": "string",
    "file_path": "string",
    "file_size": 0,
    "manifest": {
      "manifest_version": "1.0",
      "name": "string",
      "description": "",
      "creators": [],
      "license": "string",
      "model_architecture": "Style-Bert-VITS2",
      "model_format": "Safetensors",
      "training_epochs": 0,
      "training_steps": 0,
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "version": "string",
      "speakers": [
        {
          "name": "string",
          "icon": "string",
          "supported_languages": [
            "string"
          ],
          "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "local_id": 0,
          "styles": [
            {
              "name": "string",
              "icon": "string",
              "local_id": 0,
              "voice_samples": []
            }
          ]
        }
      ]
    },
    "speakers": [
      {
        "speaker": {
          "name": "string",
          "speaker_uuid": "string",
          "styles": [
            {
              "name": "string",
              "id": 0,
              "type": "talk"
            }
          ],
          "version": "string",
          "supported_features": {
            "permitted_synthesis_morphing": "ALL"
          }
        },
        "speaker_info": {
          "policy": "string",
          "portrait": "string",
          "style_infos": [
            {
              "id": 0,
              "icon": "string",
              "portrait": "string",
              "voice_samples": [
                "string"
              ],
              "voice_sample_transcripts": []
            }
          ]
        }
      }
    ]
  }
}
```

<h3 id="インストール済みのすべての音声合成モデルの情報を取得する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|インストール済みのすべての音声合成モデルの情報|Inline|

<h3 id="インストール済みのすべての音声合成モデルの情報を取得する-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AivmInfo](#schemaaivminfo)|false|none|AIVM (Aivis Voice Model) 仕様に準拠した音声合成モデルのメタデータ情報。<br><br>AIVM マニフェストには、音声合成モデルに関連する全てのメタデータが含まれる。<br>speakers フィールド内の話者情報は、VOICEVOX ENGINE との API 互換性のために、<br>AIVM マニフェストを基に Speaker / SpeakerStyle / SpeakerInfo / StyleInfo モデルに変換したもの。|

<aside class="success">
This operation does not require authentication
</aside>

## 音声合成モデルをインストールする

<a id="opIdinstall_model"></a>

> Code samples

```bash
curl http://localhost:10101/aivm_models/install \
  -X POST \
  -H 'Accept: application/json' \
  -F 'file=string' \
  -F 'url=string'
```

`POST /aivm_models/install`

音声合成モデルをインストールします。<br>
ファイルからインストールする場合は `file` を指定してください。<br>
URL からインストールする場合は `url` を指定してください。

> Body parameter

```yaml
file: string
url: string
```

<h3 id="音声合成モデルをインストールする-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_install_model_aivm_models_install_post](#schemabody_install_model_aivm_models_install_post)|false|none|
|» file|body|string(binary) \| null|false|AIVMX ファイル (`.aivmx`)|
|» » *anyOf*|body|string(binary)|false|none|
|» » *anyOf*|body|null|false|none|
|» url|body|string \| null|false|AIVMX ファイルの URL|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="音声合成モデルをインストールする-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## 指定された音声合成モデルの情報を取得する

<a id="opIdget_aivm_info"></a>

> Code samples

```bash
curl http://localhost:10101/aivm_models/string \
  -H 'Accept: application/json'
```

`GET /aivm_models/{aivm_model_uuid}`

指定された音声合成モデルの情報を取得します。

<h3 id="指定された音声合成モデルの情報を取得する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aivm_model_uuid|path|string|true|AIVM マニフェスト記載の音声合成モデルの UUID|

> Example responses

> 200 Response

```json
{
  "is_loaded": true,
  "is_update_available": true,
  "is_private_model": true,
  "is_default_model": false,
  "latest_version": "string",
  "file_path": "string",
  "file_size": 0,
  "manifest": {
    "manifest_version": "1.0",
    "name": "string",
    "description": "",
    "creators": [],
    "license": "string",
    "model_architecture": "Style-Bert-VITS2",
    "model_format": "Safetensors",
    "training_epochs": 0,
    "training_steps": 0,
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version": "string",
    "speakers": [
      {
        "name": "string",
        "icon": "string",
        "supported_languages": [
          "string"
        ],
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "local_id": 0,
        "styles": [
          {
            "name": "string",
            "icon": "string",
            "local_id": 0,
            "voice_samples": []
          }
        ]
      }
    ]
  },
  "speakers": [
    {
      "speaker": {
        "name": "string",
        "speaker_uuid": "string",
        "styles": [
          {
            "name": "string",
            "id": 0,
            "type": "talk"
          }
        ],
        "version": "string",
        "supported_features": {
          "permitted_synthesis_morphing": "ALL"
        }
      },
      "speaker_info": {
        "policy": "string",
        "portrait": "string",
        "style_infos": [
          {
            "id": 0,
            "icon": "string",
            "portrait": "string",
            "voice_samples": [
              "string"
            ],
            "voice_sample_transcripts": []
          }
        ]
      }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="指定された音声合成モデルの情報を取得する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|指定された音声合成モデルの情報|[AivmInfo](#schemaaivminfo)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## 指定された音声合成モデルをロードする

<a id="opIdload_model"></a>

> Code samples

```bash
curl http://localhost:10101/aivm_models/string/load \
  -X POST \
  -H 'Accept: application/json'
```

`POST /aivm_models/{aivm_model_uuid}/load`

指定された音声合成モデルをロードします。すでにロード済みの場合は何も行われません。<br>
実行しなくても他の API は利用できますが、音声合成の初回実行時に時間がかかることがあります。

<h3 id="指定された音声合成モデルをロードする-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aivm_model_uuid|path|string|true|AIVM マニフェスト記載の音声合成モデルの UUID|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="指定された音声合成モデルをロードする-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## 指定された音声合成モデルをアンロードする

<a id="opIdunload_model"></a>

> Code samples

```bash
curl http://localhost:10101/aivm_models/string/unload \
  -X POST \
  -H 'Accept: application/json'
```

`POST /aivm_models/{aivm_model_uuid}/unload`

指定された音声合成モデルをアンロードします。

<h3 id="指定された音声合成モデルをアンロードする-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aivm_model_uuid|path|string|true|AIVM マニフェスト記載の音声合成モデルの UUID|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="指定された音声合成モデルをアンロードする-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## 指定された音声合成モデルを更新する

<a id="opIdupdate_model"></a>

> Code samples

```bash
curl http://localhost:10101/aivm_models/string/update \
  -X POST \
  -H 'Accept: application/json'
```

`POST /aivm_models/{aivm_model_uuid}/update`

AivisHub から指定された音声合成モデルの一番新しいバージョンをダウンロードし、
インストール済みの音声合成モデルへ上書き更新します。

<h3 id="指定された音声合成モデルを更新する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aivm_model_uuid|path|string|true|AIVM マニフェスト記載の音声合成モデルの UUID|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="指定された音声合成モデルを更新する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## 指定された音声合成モデルをアンインストールする

<a id="opIduninstall_model"></a>

> Code samples

```bash
curl http://localhost:10101/aivm_models/string/uninstall \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /aivm_models/{aivm_model_uuid}/uninstall`

指定された音声合成モデルをアンインストールします。

<h3 id="指定された音声合成モデルをアンインストールする-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aivm_model_uuid|path|string|true|AIVM マニフェスト記載の音声合成モデルの UUID|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="指定された音声合成モデルをアンインストールする-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="aivisspeech-engine-話者情報">話者情報</h1>

## 話者情報の一覧を取得する

<a id="opIdspeakers"></a>

> Code samples

```bash
curl http://localhost:10101/speakers \
  -H 'Accept: application/json'
```

`GET /speakers`

話者情報の一覧を返します。

<h3 id="話者情報の一覧を取得する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "speaker_uuid": "string",
    "styles": [
      {
        "name": "string",
        "id": 0,
        "type": "talk"
      }
    ],
    "version": "string",
    "supported_features": {
      "permitted_synthesis_morphing": "ALL"
    }
  }
]
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="話者情報の一覧を取得する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="話者情報の一覧を取得する-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Speaker](#schemaspeaker)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## UUID で指定された話者の情報を取得する

<a id="opIdspeaker_info"></a>

> Code samples

```bash
curl 'http://localhost:10101/speaker_info?speaker_uuid=string' \
  -H 'Accept: application/json'
```

`GET /speaker_info`

UUID で指定された話者の情報を返します。
画像や音声は resource_format で指定した形式で返されます。

<h3 id="uuid-で指定された話者の情報を取得する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker_uuid|query|string|true|none|
|resource_format|query|string|false|none|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource_format|base64|
|resource_format|url|

> Example responses

> 200 Response

```json
{
  "policy": "string",
  "portrait": "string",
  "style_infos": [
    {
      "id": 0,
      "icon": "string",
      "portrait": "string",
      "voice_samples": [
        "string"
      ],
      "voice_sample_transcripts": []
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="uuid-で指定された話者の情報を取得する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SpeakerInfo](#schemaspeakerinfo)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)

<a id="opIdsingers"></a>

> Code samples

```bash
curl http://localhost:10101/singers \
  -H 'Accept: application/json'
```

`GET /singers`

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "speaker_uuid": "string",
    "styles": [
      {
        "name": "string",
        "id": 0,
        "type": "talk"
      }
    ],
    "version": "string",
    "supported_features": {
      "permitted_synthesis_morphing": "ALL"
    }
  }
]
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-5-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Speaker](#schemaspeaker)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## AivisSpeech Engine ではサポートされていない API です (常に 501 Not Implemented を返します)

<a id="opIdsinger_info"></a>

> Code samples

```bash
curl 'http://localhost:10101/singer_info?speaker_uuid=string' \
  -H 'Accept: application/json'
```

`GET /singer_info`

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speaker_uuid|query|string|true|none|
|resource_format|query|string|false|none|
|core_version|query|string|false|AivisSpeech Engine ではサポートされていないパラメータです (常に無視されます) 。|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource_format|base64|
|resource_format|url|

> Example responses

> 200 Response

```json
{
  "policy": "string",
  "portrait": "string",
  "style_infos": [
    {
      "id": 0,
      "icon": "string",
      "portrait": "string",
      "voice_samples": [
        "string"
      ],
      "voice_sample_transcripts": []
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="aivisspeech-engine-ではサポートされていない-api-です-常に-501-not-implemented-を返します-6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SpeakerInfo](#schemaspeakerinfo)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="aivisspeech-engine-プリセット">プリセット</h1>

## エンジンが保持しているプリセットの設定を取得する

<a id="opIdget_presets"></a>

> Code samples

```bash
curl http://localhost:10101/presets \
  -H 'Accept: application/json'
```

`GET /presets`

エンジンが保持しているプリセットの設定を返します。

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "speaker_uuid": "string",
    "style_id": 0,
    "speedScale": 0,
    "intonationScale": 0,
    "tempoDynamicsScale": 1,
    "pitchScale": 0,
    "volumeScale": 0,
    "prePhonemeLength": 0,
    "postPhonemeLength": 0,
    "pauseLength": 0,
    "pauseLengthScale": 1
  }
]
```

<h3 id="エンジンが保持しているプリセットの設定を取得する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|プリセットのリスト|Inline|

<h3 id="エンジンが保持しているプリセットの設定を取得する-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Preset](#schemapreset)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## 新しいプリセットを追加する

<a id="opIdadd_preset"></a>

> Code samples

```bash
curl http://localhost:10101/add_preset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0,
    "name": "string",
    "speaker_uuid": "string",
    "style_id": 0,
    "speedScale": 0,
    "intonationScale": 0,
    "tempoDynamicsScale": 1,
    "pitchScale": 0,
    "volumeScale": 0,
    "prePhonemeLength": 0,
    "postPhonemeLength": 0,
    "pauseLength": 0,
    "pauseLengthScale": 1
  }'
```

`POST /add_preset`

新しいプリセットを追加します。

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "speaker_uuid": "string",
  "style_id": 0,
  "speedScale": 0,
  "intonationScale": 0,
  "tempoDynamicsScale": 1,
  "pitchScale": 0,
  "volumeScale": 0,
  "prePhonemeLength": 0,
  "postPhonemeLength": 0,
  "pauseLength": 0,
  "pauseLengthScale": 1
}
```

<h3 id="新しいプリセットを追加する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Preset](#schemapreset)|true|none|
|» id|body|integer|true|プリセット ID 。|
|» name|body|string|true|プリセット名。|
|» speaker_uuid|body|string|true|キャラクターの UUID 。|
|» style_id|body|integer|true|スタイル ID 。|
|» speedScale|body|number|true|全体の話速を 0.5 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>2.0 で 2 倍速、0.5 で 0.5 倍速になる。|
|» intonationScale|body|number|true|選択した話者スタイルの感情表現の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>「全体の抑揚」ではない点で VOICEVOX ENGINE と仕様が異なる。<br>数値が大きいほど、選択した話者スタイルに近い感情表現が込められた声になる。<br>例えば話者スタイルが「上機嫌」なら、数値が大きいほどより嬉しそうな明るい話し方になる。<br>一方で、話者やスタイルによっては、数値を上げすぎると発声がおかしくなったり、棒読みで不自然な声になる場合もある。<br>正しく発声できる上限値は話者やスタイルごとに異なる。必要に応じて最適な値を見つけて調整すること。<br>全スタイルの平均であるノーマルスタイルでは自動で適切な感情表現が選択されるため、この値を指定しても無視される。|
|» tempoDynamicsScale|body|number|false|話す速さ（テンポ）の緩急の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>AivisSpeech Engine 固有のフィールドで、VOICEVOX ENGINE には存在しない。<br>数値が大きいほどより早口で生っぽい抑揚がついた声になる。<br>VOICEVOX ENGINE との互換性のため、未指定時はデフォルト値が適用される。|
|» pitchScale|body|number|true|全体の音高を -0.15 ~ 0.15 の範囲で指定する (デフォルト: 0.0) 。<br>数値が大きいほど高い声になる。<br>VOICEVOX ENGINE と異なり、この値を 0.0 から変更すると音質が劣化するため注意が必要。|
|» volumeScale|body|number|true|全体の音量を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>数値が大きいほど大きな声になる。|
|» prePhonemeLength|body|number|true|音声の前の無音時間 (秒)。|
|» postPhonemeLength|body|number|true|音声の後の無音時間 (秒)。|
|» pauseLength|body|number|false|句読点などの無音時間。null のときは無視される。デフォルト値は null 。|
|» pauseLengthScale|body|number|false|句読点などの無音時間（倍率）。デフォルト値は 1 。|

> Example responses

> 200 Response

```json
0
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="新しいプリセットを追加する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|追加したプリセットのプリセットID|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## 既存のプリセットを更新する

<a id="opIdupdate_preset"></a>

> Code samples

```bash
curl http://localhost:10101/update_preset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0,
    "name": "string",
    "speaker_uuid": "string",
    "style_id": 0,
    "speedScale": 0,
    "intonationScale": 0,
    "tempoDynamicsScale": 1,
    "pitchScale": 0,
    "volumeScale": 0,
    "prePhonemeLength": 0,
    "postPhonemeLength": 0,
    "pauseLength": 0,
    "pauseLengthScale": 1
  }'
```

`POST /update_preset`

既存のプリセットを更新します。

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "speaker_uuid": "string",
  "style_id": 0,
  "speedScale": 0,
  "intonationScale": 0,
  "tempoDynamicsScale": 1,
  "pitchScale": 0,
  "volumeScale": 0,
  "prePhonemeLength": 0,
  "postPhonemeLength": 0,
  "pauseLength": 0,
  "pauseLengthScale": 1
}
```

<h3 id="既存のプリセットを更新する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Preset](#schemapreset)|true|none|
|» id|body|integer|true|プリセット ID 。|
|» name|body|string|true|プリセット名。|
|» speaker_uuid|body|string|true|キャラクターの UUID 。|
|» style_id|body|integer|true|スタイル ID 。|
|» speedScale|body|number|true|全体の話速を 0.5 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>2.0 で 2 倍速、0.5 で 0.5 倍速になる。|
|» intonationScale|body|number|true|選択した話者スタイルの感情表現の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>「全体の抑揚」ではない点で VOICEVOX ENGINE と仕様が異なる。<br>数値が大きいほど、選択した話者スタイルに近い感情表現が込められた声になる。<br>例えば話者スタイルが「上機嫌」なら、数値が大きいほどより嬉しそうな明るい話し方になる。<br>一方で、話者やスタイルによっては、数値を上げすぎると発声がおかしくなったり、棒読みで不自然な声になる場合もある。<br>正しく発声できる上限値は話者やスタイルごとに異なる。必要に応じて最適な値を見つけて調整すること。<br>全スタイルの平均であるノーマルスタイルでは自動で適切な感情表現が選択されるため、この値を指定しても無視される。|
|» tempoDynamicsScale|body|number|false|話す速さ（テンポ）の緩急の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>AivisSpeech Engine 固有のフィールドで、VOICEVOX ENGINE には存在しない。<br>数値が大きいほどより早口で生っぽい抑揚がついた声になる。<br>VOICEVOX ENGINE との互換性のため、未指定時はデフォルト値が適用される。|
|» pitchScale|body|number|true|全体の音高を -0.15 ~ 0.15 の範囲で指定する (デフォルト: 0.0) 。<br>数値が大きいほど高い声になる。<br>VOICEVOX ENGINE と異なり、この値を 0.0 から変更すると音質が劣化するため注意が必要。|
|» volumeScale|body|number|true|全体の音量を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>数値が大きいほど大きな声になる。|
|» prePhonemeLength|body|number|true|音声の前の無音時間 (秒)。|
|» postPhonemeLength|body|number|true|音声の後の無音時間 (秒)。|
|» pauseLength|body|number|false|句読点などの無音時間。null のときは無視される。デフォルト値は null 。|
|» pauseLengthScale|body|number|false|句読点などの無音時間（倍率）。デフォルト値は 1 。|

> Example responses

> 200 Response

```json
0
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="既存のプリセットを更新する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|更新したプリセットのプリセットID|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## 既存のプリセットを削除する

<a id="opIddelete_preset"></a>

> Code samples

```bash
curl 'http://localhost:10101/delete_preset?id=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /delete_preset`

既存のプリセットを削除します。

<h3 id="既存のプリセットを削除する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|削除するプリセットのプリセットID|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="既存のプリセットを削除する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="aivisspeech-engine-ユーザー辞書">ユーザー辞書</h1>

## ユーザー辞書に登録されている単語の一覧を取得する

<a id="opIdget_user_dict_words"></a>

> Code samples

```bash
curl http://localhost:10101/user_dict \
  -H 'Accept: application/json'
```

`GET /user_dict`

ユーザー辞書に登録されている単語の一覧を返します。<br>
複合語アクセントのサポートを有効にするか次第で、返されるデータ型が変化します。<br>
デフォルトでは、従来の API と互換性のある `UserDictWordForCompat` を返します。<br>
`?enable_compound_accent=true` を指定すると、AivisSpeech Engine 1.1.0 以降で利用可能な `UserDictWord` を返します。

<h3 id="ユーザー辞書に登録されている単語の一覧を取得する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enable_compound_accent|query|boolean|false|複数のアクセント句を持つ単語の扱いを指定する<br>false の場合は API 互換性のため、最初のアクセント句の情報のみを返します。<br>未指定時は `false` が設定されます。|

> Example responses

> 200 Response

```json
{
  "property1": {
    "surface": "string",
    "priority": 0,
    "context_id": 1348,
    "part_of_speech": "string",
    "part_of_speech_detail_1": "string",
    "part_of_speech_detail_2": "string",
    "part_of_speech_detail_3": "string",
    "word_type": "PROPER_NOUN",
    "inflectional_type": "string",
    "inflectional_form": "string",
    "stem": [
      "string"
    ],
    "yomi": [
      "string"
    ],
    "pronunciation": [
      "string"
    ],
    "accent_type": [
      0
    ],
    "mora_count": [],
    "accent_associative_rule": "string"
  },
  "property2": {
    "surface": "string",
    "priority": 0,
    "context_id": 1348,
    "part_of_speech": "string",
    "part_of_speech_detail_1": "string",
    "part_of_speech_detail_2": "string",
    "part_of_speech_detail_3": "string",
    "word_type": "PROPER_NOUN",
    "inflectional_type": "string",
    "inflectional_form": "string",
    "stem": [
      "string"
    ],
    "yomi": [
      "string"
    ],
    "pronunciation": [
      "string"
    ],
    "accent_type": [
      0
    ],
    "mora_count": [],
    "accent_associative_rule": "string"
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="ユーザー辞書に登録されている単語の一覧を取得する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ユーザー辞書に登録されている単語情報のリスト|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="ユーザー辞書に登録されている単語の一覧を取得する-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[UserDictWord](#schemauserdictword) \| [UserDictWordForCompat](#schemauserdictwordforcompat)|false|none|none|
|» *anyOf*|[UserDictWord](#schemauserdictword)|false|none|ユーザー辞書のビルドに必要な単語情報。<br><br>単語登録・変更リクエストで受け取った単語情報のバリデーションと JSON への保存に用いる。|
|» *anyOf*|[UserDictWordForCompat](#schemauserdictwordforcompat)|false|none|UserDictWord とほとんど同じだが、ユーザー辞書関連 API の後方互換性を保つための互換レイヤー。<br><br>stem, yomi, pronunciation, accent_type, mora_count はリストではなく文字列/数値で表す。<br>既に UserDictWord にバリデーションが実装されていることから、重複するバリデーション定義は削られている。|

<aside class="success">
This operation does not require authentication
</aside>

## ユーザー辞書に単語を追加する

<a id="opIdadd_user_dict_word"></a>

> Code samples

```bash
curl 'http://localhost:10101/user_dict_word?surface=string&pronunciation=string&accent_type=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /user_dict_word`

ユーザー辞書に単語を追加します。<br>
複合語を辞書に追加するには、`?surface=新田&surface=真剣佑&pronunciation=あらた&pronunciation=まっけんゆう&accent_type=1&accent_type=3` のように、`surface`, `pronunciation`, `accent_type` を同じ長さのリストで指定します。

<h3 id="ユーザー辞書に単語を追加する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|surface|query|[string]|true|単語の表層形|
|pronunciation|query|[string]|true|単語の発音（カタカナ）|
|accent_type|query|[integer]|true|東京式アクセントにおけるアクセント型<br>音高が下がる直前のモーラのインデックスを 1-indexed で指定します。0 は平板型を意味します。<br>例として、`surface: ["新田", "真剣佑"], pronunciation: ["あらた", "まっけんゆう"]` のとき、`accent_type: [1, 3]` (新田 → 頭高型, 真剣佑 → 中高型) のように指定します。|
|word_type|query|[WordTypes](#schemawordtypes)|false|単語の品詞<br>固有名詞 / 地名 / 組織・施設名 / 人名 / 人名 (姓) / 人名 (名) / 普通名詞 / 動詞 / 形容詞 / 語尾 のいずれかを指定します。<br>未指定時は `固有名詞` が設定されます。|
|priority|query|integer|false|単語の優先度 (1~9 の範囲を推奨)<br>数値が大きいほど、辞書適用時に優先して利用されます。<br>未指定時は `5` が設定されます。|

#### Enumerated Values

|Parameter|Value|
|---|---|
|word_type|PROPER_NOUN|
|word_type|LOCATION_NAME|
|word_type|ORGANIZATION_NAME|
|word_type|PERSON_NAME|
|word_type|PERSON_FAMILY_NAME|
|word_type|PERSON_GIVEN_NAME|
|word_type|COMMON_NOUN|
|word_type|VERB|
|word_type|ADJECTIVE|
|word_type|SUFFIX|

> Example responses

> 200 Response

```json
"string"
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="ユーザー辞書に単語を追加する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|追加した単語の UUID|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## ユーザー辞書に登録されている単語を更新する

<a id="opIdupdate_user_dict_word"></a>

> Code samples

```bash
curl 'http://localhost:10101/user_dict_word/string?surface=string&pronunciation=string&accent_type=0' \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /user_dict_word/{word_uuid}`

ユーザー辞書に登録されている単語を更新します。<br>
複合語を辞書に追加するには、`?surface=新田&surface=真剣佑&pronunciation=あらた&pronunciation=まっけんゆう&accent_type=1&accent_type=3` のように、`surface`, `pronunciation`, `accent_type` を同じ長さのリストで指定します。

<h3 id="ユーザー辞書に登録されている単語を更新する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|word_uuid|path|string|true|更新する単語の UUID|
|surface|query|[string]|true|単語の表層形|
|pronunciation|query|[string]|true|単語の発音（カタカナ）|
|accent_type|query|[integer]|true|東京式アクセントにおけるアクセント型<br>音高が下がる直前のモーラのインデックスを 1-indexed で指定します。0 は平板型を意味します。<br>例として、`surface: ["新田", "真剣佑"], pronunciation: ["あらた", "まっけんゆう"]` のとき、`accent_type: [1, 3]` (新田 → 頭高型, 真剣佑 → 中高型) のように指定します。|
|word_type|query|[WordTypes](#schemawordtypes)|false|単語の品詞<br>固有名詞 / 地名 / 組織・施設名 / 人名 / 人名 (姓) / 人名 (名) / 普通名詞 / 動詞 / 形容詞 / 語尾 のいずれかを指定します。<br>未指定時は `固有名詞` が設定されます。|
|priority|query|integer|false|単語の優先度 (1~9 の範囲を推奨)<br>数値が大きいほど、辞書適用時に優先して利用されます。<br>未指定時は `5` が設定されます。|

#### Enumerated Values

|Parameter|Value|
|---|---|
|word_type|PROPER_NOUN|
|word_type|LOCATION_NAME|
|word_type|ORGANIZATION_NAME|
|word_type|PERSON_NAME|
|word_type|PERSON_FAMILY_NAME|
|word_type|PERSON_GIVEN_NAME|
|word_type|COMMON_NOUN|
|word_type|VERB|
|word_type|ADJECTIVE|
|word_type|SUFFIX|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="ユーザー辞書に登録されている単語を更新する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## ユーザー辞書に登録されている単語を削除する

<a id="opIddelete_user_dict_word"></a>

> Code samples

```bash
curl http://localhost:10101/user_dict_word/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /user_dict_word/{word_uuid}`

ユーザー辞書に登録されている単語を削除します。

<h3 id="ユーザー辞書に登録されている単語を削除する-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|word_uuid|path|string|true|削除する単語の UUID|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="ユーザー辞書に登録されている単語を削除する-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## ユーザー辞書をインポートする

<a id="opIdimport_user_dict_words"></a>

> Code samples

```bash
curl 'http://localhost:10101/import_user_dict?override=true' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "property1": {
      "surface": "string",
      "priority": 0,
      "context_id": 1348,
      "part_of_speech": "string",
      "part_of_speech_detail_1": "string",
      "part_of_speech_detail_2": "string",
      "part_of_speech_detail_3": "string",
      "word_type": "PROPER_NOUN",
      "inflectional_type": "string",
      "inflectional_form": "string",
      "stem": [
        "string"
      ],
      "yomi": [
        "string"
      ],
      "pronunciation": [
        "string"
      ],
      "accent_type": [
        0
      ],
      "mora_count": [],
      "accent_associative_rule": "string"
    },
    "property2": {
      "surface": "string",
      "priority": 0,
      "context_id": 1348,
      "part_of_speech": "string",
      "part_of_speech_detail_1": "string",
      "part_of_speech_detail_2": "string",
      "part_of_speech_detail_3": "string",
      "word_type": "PROPER_NOUN",
      "inflectional_type": "string",
      "inflectional_form": "string",
      "stem": [
        "string"
      ],
      "yomi": [
        "string"
      ],
      "pronunciation": [
        "string"
      ],
      "accent_type": [
        0
      ],
      "mora_count": [],
      "accent_associative_rule": "string"
    }
  }'
```

`POST /import_user_dict`

指定されたユーザー辞書をインポートします。<br>
従来の API と互換性のある `UserDictWordForCompat` と、AivisSpeech Engine 1.1.0 以降で利用可能な `UserDictWord` の両方の型に対応しています。<br>
`?override=true` を指定すると、UUID が重複したエントリはインポートしたデータで上書きされます。

> Body parameter

```json
{
  "property1": {
    "surface": "string",
    "priority": 0,
    "context_id": 1348,
    "part_of_speech": "string",
    "part_of_speech_detail_1": "string",
    "part_of_speech_detail_2": "string",
    "part_of_speech_detail_3": "string",
    "word_type": "PROPER_NOUN",
    "inflectional_type": "string",
    "inflectional_form": "string",
    "stem": [
      "string"
    ],
    "yomi": [
      "string"
    ],
    "pronunciation": [
      "string"
    ],
    "accent_type": [
      0
    ],
    "mora_count": [],
    "accent_associative_rule": "string"
  },
  "property2": {
    "surface": "string",
    "priority": 0,
    "context_id": 1348,
    "part_of_speech": "string",
    "part_of_speech_detail_1": "string",
    "part_of_speech_detail_2": "string",
    "part_of_speech_detail_3": "string",
    "word_type": "PROPER_NOUN",
    "inflectional_type": "string",
    "inflectional_form": "string",
    "stem": [
      "string"
    ],
    "yomi": [
      "string"
    ],
    "pronunciation": [
      "string"
    ],
    "accent_type": [
      0
    ],
    "mora_count": [],
    "accent_associative_rule": "string"
  }
}
```

<h3 id="ユーザー辞書をインポートする-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|override|query|boolean|true|重複したエントリがあった場合、上書きするかどうか|
|body|body|object|true|none|
|» **additionalProperties**|body|[UserDictWord](#schemauserdictword) \| [UserDictWordForCompat](#schemauserdictwordforcompat)|false|none|
|» » *anyOf*|body|[UserDictWord](#schemauserdictword)|false|ユーザー辞書のビルドに必要な単語情報。<br><br>単語登録・変更リクエストで受け取った単語情報のバリデーションと JSON への保存に用いる。|
|» » *anyOf*|body|[UserDictWordForCompat](#schemauserdictwordforcompat)|false|UserDictWord とほとんど同じだが、ユーザー辞書関連 API の後方互換性を保つための互換レイヤー。<br><br>stem, yomi, pronunciation, accent_type, mora_count はリストではなく文字列/数値で表す。<br>既に UserDictWord にバリデーションが実装されていることから、重複するバリデーション定義は削られている。|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="ユーザー辞書をインポートする-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="aivisspeech-engine-設定">設定</h1>

## Setting Get

<a id="opIdsetting_get"></a>

> Code samples

```bash
curl http://localhost:10101/setting
```

`GET /setting`

設定ページを返します。

<h3 id="setting-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Setting Post

<a id="opIdsetting_post"></a>

> Code samples

```bash
curl http://localhost:10101/setting \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'cors_policy_mode=all&allow_origin=string'
```

`POST /setting`

設定を更新します。

> Body parameter

```yaml
cors_policy_mode: all
allow_origin: string
```

<h3 id="setting-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_setting_post_setting_post](#schemabody_setting_post_setting_post)|true|none|
|» cors_policy_mode|body|[CorsPolicyMode](#schemacorspolicymode)|true|CORS の許可モード。|
|» allow_origin|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» cors_policy_mode|all|
|» cors_policy_mode|localapps|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="setting-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="aivisspeech-engine-その他">その他</h1>

## Version

<a id="opIdversion"></a>

> Code samples

```bash
curl http://localhost:10101/version \
  -H 'Accept: application/json'
```

`GET /version`

エンジンのバージョンを取得します。

> Example responses

> 200 Response

```json
"string"
```

<h3 id="version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Core Versions

<a id="opIdcore_versions"></a>

> Code samples

```bash
curl http://localhost:10101/core_versions \
  -H 'Accept: application/json'
```

`GET /core_versions`

利用可能なコアのバージョン一覧を取得します。

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="core-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<h3 id="core-versions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Engine Manifest

<a id="opIdengine_manifest"></a>

> Code samples

```bash
curl http://localhost:10101/engine_manifest \
  -H 'Accept: application/json'
```

`GET /engine_manifest`

エンジンマニフェストを取得します。

> Example responses

> 200 Response

```json
{
  "manifest_version": "string",
  "name": "string",
  "brand_name": "string",
  "uuid": "string",
  "url": "string",
  "icon": "string",
  "default_sampling_rate": 0,
  "frame_rate": 0,
  "terms_of_service": "string",
  "update_infos": [
    {
      "version": "string",
      "descriptions": [
        "string"
      ],
      "contributors": [
        "string"
      ]
    }
  ],
  "dependency_licenses": [
    {
      "name": "string",
      "version": "string",
      "license": "string",
      "text": "string"
    }
  ],
  "supported_vvlib_manifest_version": "string",
  "supported_features": {
    "adjust_mora_pitch": true,
    "adjust_phoneme_length": true,
    "adjust_speed_scale": true,
    "adjust_pitch_scale": true,
    "adjust_intonation_scale": true,
    "adjust_volume_scale": true,
    "adjust_pause_length": true,
    "interrogative_upspeak": true,
    "synthesis_morphing": true,
    "sing": true,
    "manage_library": true,
    "return_resource_url": true,
    "apply_katakana_english": true
  }
}
```

<h3 id="engine-manifest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[EngineManifest](#schemaenginemanifest)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Portal Page

<a id="opIdget_portal_page"></a>

> Code samples

```bash
curl http://localhost:10101/
```

`GET /`

ポータルページを返します。

<h3 id="get-portal-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccentPhrase">AccentPhrase</h2>
<!-- backwards compatibility -->
<a id="schemaaccentphrase"></a>
<a id="schema_AccentPhrase"></a>
<a id="tocSaccentphrase"></a>
<a id="tocsaccentphrase"></a>

```json
{
  "moras": [
    {
      "text": "string",
      "consonant": "string",
      "consonant_length": 0,
      "vowel": "string",
      "vowel_length": 0,
      "pitch": 0
    }
  ],
  "accent": 0,
  "pause_mora": {
    "text": "string",
    "consonant": "string",
    "consonant_length": 0,
    "vowel": "string",
    "vowel_length": 0,
    "pitch": 0
  },
  "is_interrogative": false
}
```

アクセント句ごとの情報。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|moras|[[Mora](#schemamora)]|true|none|モーラのリスト|
|accent|integer|true|none|アクセント箇所|
|pause_mora|[Mora](#schemamora)|false|none|アクセント句の末尾につく無音モーラ。null の場合は無音モーラを付けない。|
|is_interrogative|boolean|false|none|疑問系かどうか|

<h2 id="tocS_AivmInfo">AivmInfo</h2>
<!-- backwards compatibility -->
<a id="schemaaivminfo"></a>
<a id="schema_AivmInfo"></a>
<a id="tocSaivminfo"></a>
<a id="tocsaivminfo"></a>

```json
{
  "is_loaded": true,
  "is_update_available": true,
  "is_private_model": true,
  "is_default_model": false,
  "latest_version": "string",
  "file_path": "string",
  "file_size": 0,
  "manifest": {
    "manifest_version": "1.0",
    "name": "string",
    "description": "",
    "creators": [],
    "license": "string",
    "model_architecture": "Style-Bert-VITS2",
    "model_format": "Safetensors",
    "training_epochs": 0,
    "training_steps": 0,
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version": "string",
    "speakers": [
      {
        "name": "string",
        "icon": "string",
        "supported_languages": [
          "string"
        ],
        "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "local_id": 0,
        "styles": [
          {
            "name": "string",
            "icon": "string",
            "local_id": 0,
            "voice_samples": []
          }
        ]
      }
    ]
  },
  "speakers": [
    {
      "speaker": {
        "name": "string",
        "speaker_uuid": "string",
        "styles": [
          {
            "name": "string",
            "id": 0,
            "type": "talk"
          }
        ],
        "version": "string",
        "supported_features": {
          "permitted_synthesis_morphing": "ALL"
        }
      },
      "speaker_info": {
        "policy": "string",
        "portrait": "string",
        "style_infos": [
          {
            "id": 0,
            "icon": "string",
            "portrait": "string",
            "voice_samples": [
              "string"
            ],
            "voice_sample_transcripts": []
          }
        ]
      }
    }
  ]
}
```

AIVM (Aivis Voice Model) 仕様に準拠した音声合成モデルのメタデータ情報。

AIVM マニフェストには、音声合成モデルに関連する全てのメタデータが含まれる。
speakers フィールド内の話者情報は、VOICEVOX ENGINE との API 互換性のために、
AIVM マニフェストを基に Speaker / SpeakerStyle / SpeakerInfo / StyleInfo モデルに変換したもの。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_loaded|boolean|true|none|この音声合成モデルがロードされているかどうか|
|is_update_available|boolean|true|none|この音声合成モデルの新しいバージョンが AivisHub で公開されているかどうか|
|is_private_model|boolean|true|none|AivisHub で公開されておらず、ユーザーがローカルからインストールしたモデルの場合は True (ネットワークエラーなどで AivisHub から情報を取得できなかった場合も True を返す)|
|is_default_model|boolean|false|none|AivisHub がデフォルトインストール対象として指定した音声合成モデルかどうか|
|latest_version|string|true|none|この音声合成モデルの AivisHub で公開されている最新バージョン (AivisHub で公開されていない場合は AIVM マニフェスト記載のバージョン)|
|file_path|string(path)|true|none|AIVMX ファイルのインストール先パス|
|file_size|integer|true|none|AIVMX ファイルのインストールサイズ (バイト単位)|
|manifest|[AivmManifest](#schemaaivmmanifest)|true|none|AIVM マニフェスト|
|speakers|[[LibrarySpeaker](#schemalibraryspeaker)]|true|none|話者情報のリスト (VOICEVOX ENGINE 互換)|

<h2 id="tocS_AivmManifest">AivmManifest</h2>
<!-- backwards compatibility -->
<a id="schemaaivmmanifest"></a>
<a id="schema_AivmManifest"></a>
<a id="tocSaivmmanifest"></a>
<a id="tocsaivmmanifest"></a>

```json
{
  "manifest_version": "1.0",
  "name": "string",
  "description": "",
  "creators": [],
  "license": "string",
  "model_architecture": "Style-Bert-VITS2",
  "model_format": "Safetensors",
  "training_epochs": 0,
  "training_steps": 0,
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "version": "string",
  "speakers": [
    {
      "name": "string",
      "icon": "string",
      "supported_languages": [
        "string"
      ],
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "local_id": 0,
      "styles": [
        {
          "name": "string",
          "icon": "string",
          "local_id": 0,
          "voice_samples": []
        }
      ]
    }
  ]
}
```

AIVM マニフェストのスキーマ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manifest_version|string|true|none|none|
|name|string|true|none|none|
|description|string|false|none|none|
|creators|[string]|false|none|none|
|license|string \| null|false|none|none|
|model_architecture|[ModelArchitecture](#schemamodelarchitecture)|true|none|none|
|model_format|[ModelFormat](#schemamodelformat)|true|none|none|
|training_epochs|integer \| null|false|none|none|
|training_steps|integer \| null|false|none|none|
|uuid|string(uuid)|true|none|none|
|version|string|true|none|none|
|speakers|[[AivmManifestSpeaker](#schemaaivmmanifestspeaker)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|model_architecture|Style-Bert-VITS2|
|model_architecture|Style-Bert-VITS2 (JP-Extra)|
|model_format|Safetensors|
|model_format|ONNX|

<h2 id="tocS_AivmManifestSpeaker">AivmManifestSpeaker</h2>
<!-- backwards compatibility -->
<a id="schemaaivmmanifestspeaker"></a>
<a id="schema_AivmManifestSpeaker"></a>
<a id="tocSaivmmanifestspeaker"></a>
<a id="tocsaivmmanifestspeaker"></a>

```json
{
  "name": "string",
  "icon": "string",
  "supported_languages": [
    "string"
  ],
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "local_id": 0,
  "styles": [
    {
      "name": "string",
      "icon": "string",
      "local_id": 0,
      "voice_samples": []
    }
  ]
}
```

AIVM マニフェストの話者情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|icon|string|true|none|none|
|supported_languages|[string]|true|none|none|
|uuid|string(uuid)|true|none|none|
|local_id|integer|true|none|none|
|styles|[[AivmManifestSpeakerStyle](#schemaaivmmanifestspeakerstyle)]|true|none|none|

<h2 id="tocS_AivmManifestSpeakerStyle">AivmManifestSpeakerStyle</h2>
<!-- backwards compatibility -->
<a id="schemaaivmmanifestspeakerstyle"></a>
<a id="schema_AivmManifestSpeakerStyle"></a>
<a id="tocSaivmmanifestspeakerstyle"></a>
<a id="tocsaivmmanifestspeakerstyle"></a>

```json
{
  "name": "string",
  "icon": "string",
  "local_id": 0,
  "voice_samples": []
}
```

AIVM マニフェストの話者スタイル情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|icon|string \| null|false|none|none|
|local_id|integer|true|none|none|
|voice_samples|[[AivmManifestVoiceSample](#schemaaivmmanifestvoicesample)]|false|none|none|

<h2 id="tocS_AivmManifestVoiceSample">AivmManifestVoiceSample</h2>
<!-- backwards compatibility -->
<a id="schemaaivmmanifestvoicesample"></a>
<a id="schema_AivmManifestVoiceSample"></a>
<a id="tocSaivmmanifestvoicesample"></a>
<a id="tocsaivmmanifestvoicesample"></a>

```json
{
  "audio": "string",
  "transcript": "string"
}
```

AIVM マニフェストのボイスサンプル情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|string|true|none|none|
|transcript|string|true|none|none|

<h2 id="tocS_AudioQuery">AudioQuery</h2>
<!-- backwards compatibility -->
<a id="schemaaudioquery"></a>
<a id="schema_AudioQuery"></a>
<a id="tocSaudioquery"></a>
<a id="tocsaudioquery"></a>

```json
{
  "accent_phrases": [
    {
      "moras": [
        {
          "text": "string",
          "consonant": "string",
          "consonant_length": 0,
          "vowel": "string",
          "vowel_length": 0,
          "pitch": 0
        }
      ],
      "accent": 0,
      "pause_mora": {
        "text": "string",
        "consonant": "string",
        "consonant_length": 0,
        "vowel": "string",
        "vowel_length": 0,
        "pitch": 0
      },
      "is_interrogative": false
    }
  ],
  "speedScale": 0,
  "intonationScale": 0,
  "tempoDynamicsScale": 1,
  "pitchScale": 0,
  "volumeScale": 0,
  "prePhonemeLength": 0,
  "postPhonemeLength": 0,
  "pauseLength": 0,
  "pauseLengthScale": 1,
  "outputSamplingRate": 0,
  "outputStereo": true,
  "kana": "string"
}
```

音声合成用のクエリ。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accent_phrases|[[AccentPhrase](#schemaaccentphrase)]|true|none|アクセント句のリスト。|
|speedScale|number|true|none|全体の話速を 0.5 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>2.0 で 2 倍速、0.5 で 0.5 倍速になる。|
|intonationScale|number|true|none|選択した話者スタイルの感情表現の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>「全体の抑揚」ではない点で VOICEVOX ENGINE と仕様が異なる。<br>数値が大きいほど、選択した話者スタイルに近い感情表現が込められた声になる。<br>例えば話者スタイルが「上機嫌」なら、数値が大きいほどより嬉しそうな明るい話し方になる。<br>一方で、話者やスタイルによっては、数値を上げすぎると発声がおかしくなったり、棒読みで不自然な声になる場合もある。<br>正しく発声できる上限値は話者やスタイルごとに異なる。必要に応じて最適な値を見つけて調整すること。<br>全スタイルの平均であるノーマルスタイルでは自動で適切な感情表現が選択されるため、この値を指定しても無視される。|
|tempoDynamicsScale|number|false|none|話す速さ（テンポ）の緩急の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>AivisSpeech Engine 固有のフィールドで、VOICEVOX ENGINE には存在しない。<br>数値が大きいほどより早口で生っぽい抑揚がついた声になる。<br>VOICEVOX ENGINE との互換性のため、未指定時はデフォルト値が適用される。|
|pitchScale|number|true|none|全体の音高を -0.15 ~ 0.15 の範囲で指定する (デフォルト: 0.0) 。<br>数値が大きいほど高い声になる。<br>VOICEVOX ENGINE と異なり、この値を 0.0 から変更すると音質が劣化するため注意が必要。|
|volumeScale|number|true|none|全体の音量を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>数値が大きいほど大きな声になる。|
|prePhonemeLength|number|true|none|音声の前の無音時間 (秒)。|
|postPhonemeLength|number|true|none|音声の後の無音時間 (秒)。|
|pauseLength|number \| null|false|none|句読点などの無音時間。null のときは無視される。デフォルト値は null 。|
|pauseLengthScale|number|false|none|句読点などの無音時間（倍率）。デフォルト値は 1 。|
|outputSamplingRate|integer|true|none|音声データの出力サンプリングレート。|
|outputStereo|boolean|true|none|音声データをステレオ出力するか否か。|
|kana|string|false|none|読み上げるテキストを指定する。「読みの AquesTalk 風記法テキスト」ではない点で VOICEVOX ENGINE と仕様が異なる。<br>VOICEVOX ENGINE では AquesTalk 風記法テキストが入る読み取り専用フィールドだが (音声合成時には無視される) 、AivisSpeech Engine では音声合成時に漢字や記号が含まれた通常の読み上げテキストも必要なため、苦肉の策で読み上げテキスト指定用のフィールドとして転用した。<br>VOICEVOX ENGINE との互換性のため None や空文字列が指定された場合も動作するが、その場合はアクセント句から自動生成されたひらがな文字列が読み上げテキストになるため、不自然なイントネーションになってしまう。<br>可能な限り kana に通常の読み上げテキストを指定した上で音声合成 API に渡すことを推奨する。|

<h2 id="tocS_Body_install_model_aivm_models_install_post">Body_install_model_aivm_models_install_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_install_model_aivm_models_install_post"></a>
<a id="schema_Body_install_model_aivm_models_install_post"></a>
<a id="tocSbody_install_model_aivm_models_install_post"></a>
<a id="tocsbody_install_model_aivm_models_install_post"></a>

```json
{
  "file": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary) \| null|false|none|AIVMX ファイル (`.aivmx`)|
|url|string \| null|false|none|AIVMX ファイルの URL|

<h2 id="tocS_Body_setting_post_setting_post">Body_setting_post_setting_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_setting_post_setting_post"></a>
<a id="schema_Body_setting_post_setting_post"></a>
<a id="tocSbody_setting_post_setting_post"></a>
<a id="tocsbody_setting_post_setting_post"></a>

```json
{
  "cors_policy_mode": "all",
  "allow_origin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cors_policy_mode|[CorsPolicyMode](#schemacorspolicymode)|true|none|CORS の許可モード。|
|allow_origin|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|cors_policy_mode|all|
|cors_policy_mode|localapps|

<h2 id="tocS_Body_sing_frame_f0_sing_frame_f0_post">Body_sing_frame_f0_sing_frame_f0_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_sing_frame_f0_sing_frame_f0_post"></a>
<a id="schema_Body_sing_frame_f0_sing_frame_f0_post"></a>
<a id="tocSbody_sing_frame_f0_sing_frame_f0_post"></a>
<a id="tocsbody_sing_frame_f0_sing_frame_f0_post"></a>

```json
{
  "score": {
    "notes": [
      {
        "id": "string",
        "key": 0,
        "frame_length": 0,
        "lyric": "string"
      }
    ]
  },
  "frame_audio_query": {
    "f0": [
      0
    ],
    "volume": [
      0
    ],
    "phonemes": [
      {
        "phoneme": "string",
        "frame_length": 0,
        "note_id": "string"
      }
    ],
    "volumeScale": 0,
    "outputSamplingRate": 0,
    "outputStereo": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|[Score](#schemascore)|true|none|楽譜情報。|
|frame_audio_query|[FrameAudioQuery](#schemaframeaudioquery)|true|none|フレームごとの音声合成用のクエリ。|

<h2 id="tocS_Body_sing_frame_volume_sing_frame_volume_post">Body_sing_frame_volume_sing_frame_volume_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_sing_frame_volume_sing_frame_volume_post"></a>
<a id="schema_Body_sing_frame_volume_sing_frame_volume_post"></a>
<a id="tocSbody_sing_frame_volume_sing_frame_volume_post"></a>
<a id="tocsbody_sing_frame_volume_sing_frame_volume_post"></a>

```json
{
  "score": {
    "notes": [
      {
        "id": "string",
        "key": 0,
        "frame_length": 0,
        "lyric": "string"
      }
    ]
  },
  "frame_audio_query": {
    "f0": [
      0
    ],
    "volume": [
      0
    ],
    "phonemes": [
      {
        "phoneme": "string",
        "frame_length": 0,
        "note_id": "string"
      }
    ],
    "volumeScale": 0,
    "outputSamplingRate": 0,
    "outputStereo": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|[Score](#schemascore)|true|none|楽譜情報。|
|frame_audio_query|[FrameAudioQuery](#schemaframeaudioquery)|true|none|フレームごとの音声合成用のクエリ。|

<h2 id="tocS_CorsPolicyMode">CorsPolicyMode</h2>
<!-- backwards compatibility -->
<a id="schemacorspolicymode"></a>
<a id="schema_CorsPolicyMode"></a>
<a id="tocScorspolicymode"></a>
<a id="tocscorspolicymode"></a>

```json
"all"
```

CORS の許可モード。

<h2 id="tocS_EngineManifest">EngineManifest</h2>
<!-- backwards compatibility -->
<a id="schemaenginemanifest"></a>
<a id="schema_EngineManifest"></a>
<a id="tocSenginemanifest"></a>
<a id="tocsenginemanifest"></a>

```json
{
  "manifest_version": "string",
  "name": "string",
  "brand_name": "string",
  "uuid": "string",
  "url": "string",
  "icon": "string",
  "default_sampling_rate": 0,
  "frame_rate": 0,
  "terms_of_service": "string",
  "update_infos": [
    {
      "version": "string",
      "descriptions": [
        "string"
      ],
      "contributors": [
        "string"
      ]
    }
  ],
  "dependency_licenses": [
    {
      "name": "string",
      "version": "string",
      "license": "string",
      "text": "string"
    }
  ],
  "supported_vvlib_manifest_version": "string",
  "supported_features": {
    "adjust_mora_pitch": true,
    "adjust_phoneme_length": true,
    "adjust_speed_scale": true,
    "adjust_pitch_scale": true,
    "adjust_intonation_scale": true,
    "adjust_volume_scale": true,
    "adjust_pause_length": true,
    "interrogative_upspeak": true,
    "synthesis_morphing": true,
    "sing": true,
    "manage_library": true,
    "return_resource_url": true,
    "apply_katakana_english": true
  }
}
```

エンジン自体に関する情報。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manifest_version|string|true|none|マニフェストのバージョン|
|name|string|true|none|エンジン名|
|brand_name|string|true|none|ブランド名|
|uuid|string|true|none|エンジンのUUID|
|url|string|true|none|エンジンのURL|
|icon|string|true|none|エンジンのアイコンをBASE64エンコードしたもの|
|default_sampling_rate|integer|true|none|デフォルトのサンプリング周波数|
|frame_rate|number|true|none|エンジンのフレームレート|
|terms_of_service|string|true|none|エンジンの利用規約|
|update_infos|[[UpdateInfo](#schemaupdateinfo)]|true|none|エンジンのアップデート情報|
|dependency_licenses|[[LicenseInfo](#schemalicenseinfo)]|true|none|依存関係のライセンス情報|
|supported_vvlib_manifest_version|string|false|none|エンジンが対応するvvlibのバージョン|
|supported_features|[SupportedFeatures](#schemasupportedfeatures)|true|none|エンジンが持つ機能|

<h2 id="tocS_FrameAudioQuery">FrameAudioQuery</h2>
<!-- backwards compatibility -->
<a id="schemaframeaudioquery"></a>
<a id="schema_FrameAudioQuery"></a>
<a id="tocSframeaudioquery"></a>
<a id="tocsframeaudioquery"></a>

```json
{
  "f0": [
    0
  ],
  "volume": [
    0
  ],
  "phonemes": [
    {
      "phoneme": "string",
      "frame_length": 0,
      "note_id": "string"
    }
  ],
  "volumeScale": 0,
  "outputSamplingRate": 0,
  "outputStereo": true
}
```

フレームごとの音声合成用のクエリ。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|f0|[number]|true|none|フレームごとの基本周波数|
|volume|[number]|true|none|フレームごとの音量|
|phonemes|[[FramePhoneme](#schemaframephoneme)]|true|none|音素のリスト|
|volumeScale|number|true|none|全体の音量|
|outputSamplingRate|integer|true|none|音声データの出力サンプリングレート|
|outputStereo|boolean|true|none|音声データをステレオ出力するか否か|

<h2 id="tocS_FramePhoneme">FramePhoneme</h2>
<!-- backwards compatibility -->
<a id="schemaframephoneme"></a>
<a id="schema_FramePhoneme"></a>
<a id="tocSframephoneme"></a>
<a id="tocsframephoneme"></a>

```json
{
  "phoneme": "string",
  "frame_length": 0,
  "note_id": "string"
}
```

音素の情報。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneme|string|true|none|音素|
|frame_length|integer|true|none|音素のフレーム長|
|note_id|string \| null|false|none|音符のID|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[[ValidationError](#schemavalidationerror)]|false|none|none|

<h2 id="tocS_LibrarySpeaker">LibrarySpeaker</h2>
<!-- backwards compatibility -->
<a id="schemalibraryspeaker"></a>
<a id="schema_LibrarySpeaker"></a>
<a id="tocSlibraryspeaker"></a>
<a id="tocslibraryspeaker"></a>

```json
{
  "speaker": {
    "name": "string",
    "speaker_uuid": "string",
    "styles": [
      {
        "name": "string",
        "id": 0,
        "type": "talk"
      }
    ],
    "version": "string",
    "supported_features": {
      "permitted_synthesis_morphing": "ALL"
    }
  },
  "speaker_info": {
    "policy": "string",
    "portrait": "string",
    "style_infos": [
      {
        "id": 0,
        "icon": "string",
        "portrait": "string",
        "voice_samples": [
          "string"
        ],
        "voice_sample_transcripts": []
      }
    ]
  }
}
```

音声ライブラリに含まれるキャラクターの情報。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|speaker|[Speaker](#schemaspeaker)|true|none|キャラクター情報|
|speaker_info|[SpeakerInfo](#schemaspeakerinfo)|true|none|キャラクターの追加情報|

<h2 id="tocS_LicenseInfo">LicenseInfo</h2>
<!-- backwards compatibility -->
<a id="schemalicenseinfo"></a>
<a id="schema_LicenseInfo"></a>
<a id="tocSlicenseinfo"></a>
<a id="tocslicenseinfo"></a>

```json
{
  "name": "string",
  "version": "string",
  "license": "string",
  "text": "string"
}
```

依存ライブラリのライセンス情報。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|依存ライブラリ名|
|version|string|false|none|依存ライブラリのバージョン|
|license|string|false|none|依存ライブラリのライセンス名|
|text|string|true|none|依存ライブラリのライセンス本文|

<h2 id="tocS_ModelArchitecture">ModelArchitecture</h2>
<!-- backwards compatibility -->
<a id="schemamodelarchitecture"></a>
<a id="schema_ModelArchitecture"></a>
<a id="tocSmodelarchitecture"></a>
<a id="tocsmodelarchitecture"></a>

```json
"Style-Bert-VITS2"
```

<h2 id="tocS_ModelFormat">ModelFormat</h2>
<!-- backwards compatibility -->
<a id="schemamodelformat"></a>
<a id="schema_ModelFormat"></a>
<a id="tocSmodelformat"></a>
<a id="tocsmodelformat"></a>

```json
"Safetensors"
```

<h2 id="tocS_Mora">Mora</h2>
<!-- backwards compatibility -->
<a id="schemamora"></a>
<a id="schema_Mora"></a>
<a id="tocSmora"></a>
<a id="tocsmora"></a>

```json
{
  "text": "string",
  "consonant": "string",
  "consonant_length": 0,
  "vowel": "string",
  "vowel_length": 0,
  "pitch": 0
}
```

モーラ（子音＋母音）ごとの情報。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|子音＋母音に対応する文字。<br>VOICEVOX ENGINE と異なり、感嘆符・句読点などの記号もモーラに含まれる。<br>記号モーラの場合、`text` には記号がそのまま、`vowel` には "pau" が設定される。|
|consonant|string|false|none|子音の音素。|
|consonant_length|number|false|none|子音の音長。<br>AivisSpeech Engine の実装上算出できないため、ダミー値として常に 0.0 が返される。|
|vowel|string|true|none|母音の音素。|
|vowel_length|number|true|none|母音の音長。<br>AivisSpeech Engine の実装上算出できないため、ダミー値として常に 0.0 が返される。|
|pitch|number|true|none|音高。<br>AivisSpeech Engine の実装上算出できないため、ダミー値として常に 0.0 が返される。|

<h2 id="tocS_MorphableTargetInfo">MorphableTargetInfo</h2>
<!-- backwards compatibility -->
<a id="schemamorphabletargetinfo"></a>
<a id="schema_MorphableTargetInfo"></a>
<a id="tocSmorphabletargetinfo"></a>
<a id="tocsmorphabletargetinfo"></a>

```json
{
  "is_morphable": true
}
```

モーフィング相手としての情報。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_morphable|boolean|true|none|指定したキャラクターに対してモーフィングの可否|

<h2 id="tocS_Note">Note</h2>
<!-- backwards compatibility -->
<a id="schemanote"></a>
<a id="schema_Note"></a>
<a id="tocSnote"></a>
<a id="tocsnote"></a>

```json
{
  "id": "string",
  "key": 0,
  "frame_length": 0,
  "lyric": "string"
}
```

音符ごとの情報。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|ID|
|key|integer|false|none|音階|
|frame_length|integer|true|none|音符のフレーム長|
|lyric|string|true|none|音符の歌詞|

<h2 id="tocS_ParseKanaBadRequest">ParseKanaBadRequest</h2>
<!-- backwards compatibility -->
<a id="schemaparsekanabadrequest"></a>
<a id="schema_ParseKanaBadRequest"></a>
<a id="tocSparsekanabadrequest"></a>
<a id="tocsparsekanabadrequest"></a>

```json
{
  "text": "string",
  "error_name": "string",
  "error_args": {
    "property1": "string",
    "property2": "string"
  }
}
```

読み仮名のパースに失敗した。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|エラーメッセージ|
|error_name|string|true|none|エラー名<br><br>\|name\|description\|<br>\|---\|---\|<br>\| UNKNOWN_TEXT \| 判別できない読み仮名があります: {text} \|<br>\| ACCENT_TOP \| 句頭にアクセントは置けません: {text} \|<br>\| ACCENT_TWICE \| 1つのアクセント句に二つ以上のアクセントは置けません: {text} \|<br>\| ACCENT_NOTFOUND \| アクセントを指定していないアクセント句があります: {text} \|<br>\| EMPTY_PHRASE \| {position}番目のアクセント句が空白です \|<br>\| INTERROGATION_MARK_NOT_AT_END \| アクセント句末以外に「？」は置けません: {text} \|<br>\| INFINITE_LOOP \| 処理時に無限ループになってしまいました...バグ報告をお願いします。 \||
|error_args|object|true|none|エラーを起こした箇所|

<h2 id="tocS_Preset">Preset</h2>
<!-- backwards compatibility -->
<a id="schemapreset"></a>
<a id="schema_Preset"></a>
<a id="tocSpreset"></a>
<a id="tocspreset"></a>

```json
{
  "id": 0,
  "name": "string",
  "speaker_uuid": "string",
  "style_id": 0,
  "speedScale": 0,
  "intonationScale": 0,
  "tempoDynamicsScale": 1,
  "pitchScale": 0,
  "volumeScale": 0,
  "prePhonemeLength": 0,
  "postPhonemeLength": 0,
  "pauseLength": 0,
  "pauseLengthScale": 1
}
```

プリセット情報。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|プリセット ID 。|
|name|string|true|none|プリセット名。|
|speaker_uuid|string|true|none|キャラクターの UUID 。|
|style_id|integer|true|none|スタイル ID 。|
|speedScale|number|true|none|全体の話速を 0.5 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>2.0 で 2 倍速、0.5 で 0.5 倍速になる。|
|intonationScale|number|true|none|選択した話者スタイルの感情表現の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>「全体の抑揚」ではない点で VOICEVOX ENGINE と仕様が異なる。<br>数値が大きいほど、選択した話者スタイルに近い感情表現が込められた声になる。<br>例えば話者スタイルが「上機嫌」なら、数値が大きいほどより嬉しそうな明るい話し方になる。<br>一方で、話者やスタイルによっては、数値を上げすぎると発声がおかしくなったり、棒読みで不自然な声になる場合もある。<br>正しく発声できる上限値は話者やスタイルごとに異なる。必要に応じて最適な値を見つけて調整すること。<br>全スタイルの平均であるノーマルスタイルでは自動で適切な感情表現が選択されるため、この値を指定しても無視される。|
|tempoDynamicsScale|number|false|none|話す速さ（テンポ）の緩急の強弱を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>AivisSpeech Engine 固有のフィールドで、VOICEVOX ENGINE には存在しない。<br>数値が大きいほどより早口で生っぽい抑揚がついた声になる。<br>VOICEVOX ENGINE との互換性のため、未指定時はデフォルト値が適用される。|
|pitchScale|number|true|none|全体の音高を -0.15 ~ 0.15 の範囲で指定する (デフォルト: 0.0) 。<br>数値が大きいほど高い声になる。<br>VOICEVOX ENGINE と異なり、この値を 0.0 から変更すると音質が劣化するため注意が必要。|
|volumeScale|number|true|none|全体の音量を 0.0 ~ 2.0 の範囲で指定する (デフォルト: 1.0) 。<br>数値が大きいほど大きな声になる。|
|prePhonemeLength|number|true|none|音声の前の無音時間 (秒)。|
|postPhonemeLength|number|true|none|音声の後の無音時間 (秒)。|
|pauseLength|number|false|none|句読点などの無音時間。null のときは無視される。デフォルト値は null 。|
|pauseLengthScale|number|false|none|句読点などの無音時間（倍率）。デフォルト値は 1 。|

<h2 id="tocS_Score">Score</h2>
<!-- backwards compatibility -->
<a id="schemascore"></a>
<a id="schema_Score"></a>
<a id="tocSscore"></a>
<a id="tocsscore"></a>

```json
{
  "notes": [
    {
      "id": "string",
      "key": 0,
      "frame_length": 0,
      "lyric": "string"
    }
  ]
}
```

楽譜情報。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notes|[[Note](#schemanote)]|true|none|音符のリスト|

<h2 id="tocS_Speaker">Speaker</h2>
<!-- backwards compatibility -->
<a id="schemaspeaker"></a>
<a id="schema_Speaker"></a>
<a id="tocSspeaker"></a>
<a id="tocsspeaker"></a>

```json
{
  "name": "string",
  "speaker_uuid": "string",
  "styles": [
    {
      "name": "string",
      "id": 0,
      "type": "talk"
    }
  ],
  "version": "string",
  "supported_features": {
    "permitted_synthesis_morphing": "ALL"
  }
}
```

キャラクター情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|名前|
|speaker_uuid|string|true|none|キャラクターの UUID|
|styles|[[SpeakerStyle](#schemaspeakerstyle)]|true|none|スタイルの一覧|
|version|string|true|none|キャラクターのバージョン|
|supported_features|[SpeakerSupportedFeatures](#schemaspeakersupportedfeatures)|false|none|キャラクターの対応機能|

<h2 id="tocS_SpeakerInfo">SpeakerInfo</h2>
<!-- backwards compatibility -->
<a id="schemaspeakerinfo"></a>
<a id="schema_SpeakerInfo"></a>
<a id="tocSspeakerinfo"></a>
<a id="tocsspeakerinfo"></a>

```json
{
  "policy": "string",
  "portrait": "string",
  "style_infos": [
    {
      "id": 0,
      "icon": "string",
      "portrait": "string",
      "voice_samples": [
        "string"
      ],
      "voice_sample_transcripts": []
    }
  ]
}
```

キャラクターの追加情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|string|true|none|policy.md|
|portrait|string|true|none|アイコンを base64 エンコードしたもの、あるいは URL (「立ち絵画像を base64 エンコードしたもの」ではない点で VOICEVOX ENGINE と異なる)|
|style_infos|[[StyleInfo](#schemastyleinfo)]|true|none|スタイルの追加情報|

<h2 id="tocS_SpeakerStyle">SpeakerStyle</h2>
<!-- backwards compatibility -->
<a id="schemaspeakerstyle"></a>
<a id="schema_SpeakerStyle"></a>
<a id="tocSspeakerstyle"></a>
<a id="tocsspeakerstyle"></a>

```json
{
  "name": "string",
  "id": 0,
  "type": "talk"
}
```

キャラクターのスタイル情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|スタイル名|
|id|integer|true|none|スタイル ID|
|type|string|false|none|スタイルの種類。talk: 音声合成クエリの作成と音声合成が可能。singing_teacher: 歌唱音声合成用のクエリの作成が可能。frame_decode: 歌唱音声合成が可能。sing: 歌唱音声合成用のクエリの作成と歌唱音声合成が可能。|

#### Enumerated Values

|Property|Value|
|---|---|
|type|talk|
|type|singing_teacher|
|type|frame_decode|
|type|sing|

<h2 id="tocS_SpeakerSupportedFeatures">SpeakerSupportedFeatures</h2>
<!-- backwards compatibility -->
<a id="schemaspeakersupportedfeatures"></a>
<a id="schema_SpeakerSupportedFeatures"></a>
<a id="tocSspeakersupportedfeatures"></a>
<a id="tocsspeakersupportedfeatures"></a>

```json
{
  "permitted_synthesis_morphing": "ALL"
}
```

キャラクターの対応機能の情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permitted_synthesis_morphing|string|false|none|モーフィング機能への対応。'ALL' は「全て許可」、'SELF_ONLY' は「同じキャラクター内でのみ許可」、'NOTHING' は「全て禁止」|

#### Enumerated Values

|Property|Value|
|---|---|
|permitted_synthesis_morphing|ALL|
|permitted_synthesis_morphing|SELF_ONLY|
|permitted_synthesis_morphing|NOTHING|

<h2 id="tocS_StyleInfo">StyleInfo</h2>
<!-- backwards compatibility -->
<a id="schemastyleinfo"></a>
<a id="schema_StyleInfo"></a>
<a id="tocSstyleinfo"></a>
<a id="tocsstyleinfo"></a>

```json
{
  "id": 0,
  "icon": "string",
  "portrait": "string",
  "voice_samples": [
    "string"
  ],
  "voice_sample_transcripts": []
}
```

スタイルの追加情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|スタイル ID|
|icon|string|true|none|このスタイルのアイコンを base64 エンコードしたもの、あるいは URL|
|portrait|string|false|none|AivisSpeech Engine では常に None を返す (「このスタイルの立ち絵画像を base64 エンコードしたもの」ではない点で VOICEVOX ENGINE と異なる)|
|voice_samples|[string]|true|none|ボイスサンプルの音声データを base64 エンコードしたもの、あるいは URL|
|voice_sample_transcripts|[string]|false|none|ボイスサンプルの書き起こしテキスト (voice_samples の配列インデックスと対応し、存在しない場合は空文字列)|

<h2 id="tocS_SupportedDevicesInfo">SupportedDevicesInfo</h2>
<!-- backwards compatibility -->
<a id="schemasupporteddevicesinfo"></a>
<a id="schema_SupportedDevicesInfo"></a>
<a id="tocSsupporteddevicesinfo"></a>
<a id="tocssupporteddevicesinfo"></a>

```json
{
  "cpu": true,
  "cuda": true,
  "dml": true
}
```

対応しているデバイスの情報。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpu|boolean|true|none|CPU に対応しているか|
|cuda|boolean|true|none|CUDA (NVIDIA GPU) に対応しているか|
|dml|boolean|true|none|DirectML (NVIDIA GPU/Radeon GPU 等) に対応しているか|

<h2 id="tocS_SupportedFeatures">SupportedFeatures</h2>
<!-- backwards compatibility -->
<a id="schemasupportedfeatures"></a>
<a id="schema_SupportedFeatures"></a>
<a id="tocSsupportedfeatures"></a>
<a id="tocssupportedfeatures"></a>

```json
{
  "adjust_mora_pitch": true,
  "adjust_phoneme_length": true,
  "adjust_speed_scale": true,
  "adjust_pitch_scale": true,
  "adjust_intonation_scale": true,
  "adjust_volume_scale": true,
  "adjust_pause_length": true,
  "interrogative_upspeak": true,
  "synthesis_morphing": true,
  "sing": true,
  "manage_library": true,
  "return_resource_url": true,
  "apply_katakana_english": true
}
```

エンジンが持つ機能の一覧。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjust_mora_pitch|boolean|true|none|モーラごとの音高の調整|
|adjust_phoneme_length|boolean|true|none|音素ごとの長さの調整|
|adjust_speed_scale|boolean|true|none|全体の話速の調整|
|adjust_pitch_scale|boolean|true|none|全体の音高の調整|
|adjust_intonation_scale|boolean|true|none|全体の抑揚の調整|
|adjust_volume_scale|boolean|true|none|全体の音量の調整|
|adjust_pause_length|boolean|false|none|句読点などの無音時間の調整|
|interrogative_upspeak|boolean|true|none|疑問文の自動調整|
|synthesis_morphing|boolean|true|none|2種類のスタイルでモーフィングした音声を合成|
|sing|boolean|false|none|歌唱音声合成|
|manage_library|boolean|false|none|音声ライブラリのインストール・アンインストール|
|return_resource_url|boolean|false|none|キャラクター情報のリソースを URL で返送|
|apply_katakana_english|boolean|false|none|未知の英単語をカタカナ読みに変換|

<h2 id="tocS_UpdateInfo">UpdateInfo</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinfo"></a>
<a id="schema_UpdateInfo"></a>
<a id="tocSupdateinfo"></a>
<a id="tocsupdateinfo"></a>

```json
{
  "version": "string",
  "descriptions": [
    "string"
  ],
  "contributors": [
    "string"
  ]
}
```

エンジンのアップデート情報。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|エンジンのバージョン名|
|descriptions|[string]|true|none|アップデートの詳細についての説明|
|contributors|[string]|false|none|貢献者名|

<h2 id="tocS_UserDictWord">UserDictWord</h2>
<!-- backwards compatibility -->
<a id="schemauserdictword"></a>
<a id="schema_UserDictWord"></a>
<a id="tocSuserdictword"></a>
<a id="tocsuserdictword"></a>

```json
{
  "surface": "string",
  "priority": 0,
  "context_id": 1348,
  "part_of_speech": "string",
  "part_of_speech_detail_1": "string",
  "part_of_speech_detail_2": "string",
  "part_of_speech_detail_3": "string",
  "word_type": "PROPER_NOUN",
  "inflectional_type": "string",
  "inflectional_form": "string",
  "stem": [
    "string"
  ],
  "yomi": [
    "string"
  ],
  "pronunciation": [
    "string"
  ],
  "accent_type": [
    0
  ],
  "mora_count": [],
  "accent_associative_rule": "string"
}
```

ユーザー辞書のビルドに必要な単語情報。

単語登録・変更リクエストで受け取った単語情報のバリデーションと JSON への保存に用いる。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|surface|string|true|none|表層形|
|priority|integer|true|none|優先度|
|context_id|integer|false|none|文脈 ID|
|part_of_speech|string|true|none|品詞|
|part_of_speech_detail_1|string|true|none|品詞細分類1|
|part_of_speech_detail_2|string|true|none|品詞細分類2|
|part_of_speech_detail_3|string|true|none|品詞細分類3|
|word_type|[WordTypes](#schemawordtypes)|false|none|品詞種別|
|inflectional_type|string|true|none|活用型|
|inflectional_form|string|true|none|活用形|
|stem|[string]|true|none|原形|
|yomi|[string]|true|none|読み|
|pronunciation|[string]|true|none|発音|
|accent_type|[integer]|true|none|アクセント型|
|mora_count|[integer]|false|none|モーラ数|
|accent_associative_rule|string|true|none|アクセント結合規則|

#### Enumerated Values

|Property|Value|
|---|---|
|word_type|PROPER_NOUN|
|word_type|LOCATION_NAME|
|word_type|ORGANIZATION_NAME|
|word_type|PERSON_NAME|
|word_type|PERSON_FAMILY_NAME|
|word_type|PERSON_GIVEN_NAME|
|word_type|COMMON_NOUN|
|word_type|VERB|
|word_type|ADJECTIVE|
|word_type|SUFFIX|

<h2 id="tocS_UserDictWordForCompat">UserDictWordForCompat</h2>
<!-- backwards compatibility -->
<a id="schemauserdictwordforcompat"></a>
<a id="schema_UserDictWordForCompat"></a>
<a id="tocSuserdictwordforcompat"></a>
<a id="tocsuserdictwordforcompat"></a>

```json
{
  "surface": "string",
  "priority": 0,
  "context_id": 1348,
  "part_of_speech": "string",
  "part_of_speech_detail_1": "string",
  "part_of_speech_detail_2": "string",
  "part_of_speech_detail_3": "string",
  "inflectional_type": "string",
  "inflectional_form": "string",
  "stem": "string",
  "yomi": "string",
  "pronunciation": "string",
  "accent_type": 0,
  "mora_count": 0,
  "accent_associative_rule": "string"
}
```

UserDictWord とほとんど同じだが、ユーザー辞書関連 API の後方互換性を保つための互換レイヤー。

stem, yomi, pronunciation, accent_type, mora_count はリストではなく文字列/数値で表す。
既に UserDictWord にバリデーションが実装されていることから、重複するバリデーション定義は削られている。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|surface|string|true|none|表層形|
|priority|integer|true|none|優先度|
|context_id|integer|false|none|文脈 ID|
|part_of_speech|string|true|none|品詞|
|part_of_speech_detail_1|string|true|none|品詞細分類1|
|part_of_speech_detail_2|string|true|none|品詞細分類2|
|part_of_speech_detail_3|string|true|none|品詞細分類3|
|inflectional_type|string|true|none|活用型|
|inflectional_form|string|true|none|活用形|
|stem|string|true|none|原形|
|yomi|string|true|none|読み|
|pronunciation|string|true|none|発音|
|accent_type|integer|true|none|アクセント型|
|mora_count|integer|false|none|モーラ数|
|accent_associative_rule|string|true|none|アクセント結合規則|

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
  "type": "string",
  "input": null,
  "ctx": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loc|[string \| integer]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|
|input|object|false|none|none|
|ctx|object|false|none|none|

<h2 id="tocS_WordTypes">WordTypes</h2>
<!-- backwards compatibility -->
<a id="schemawordtypes"></a>
<a id="schema_WordTypes"></a>
<a id="tocSwordtypes"></a>
<a id="tocswordtypes"></a>

```json
"PROPER_NOUN"
```

品詞を表す列挙型。
