<h1 id="️-infinity---embedding-inference-server">♾️ Infinity - Embedding Inference Server v0.0.78</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Infinity is a high-throughput, low-latency REST API for serving text-embeddings, reranking models and clip. Infinity is developed under MIT License at https://github.com/michaelfeil/infinity.

License: MIT License

<h1 id="️-infinity---embedding-inference-server-default">Default</h1>

## Health

<a id="opIdhealth"></a>

> Code samples

```bash
curl http://localhost:7997/health \
  -H 'Accept: application/json'
```

`GET /health`

health check endpoint

Returns:
    dict(unix=float): dict with unix time stamp

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<h3 id="health-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Redirect

<a id="opIdredirect__get"></a>

> Code samples

```bash
curl http://localhost:7997/ \
  -H 'Accept: application/json'
```

`GET /`

> Example responses

> 200 Response

```json
null
```

<h3 id="redirect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Models

<a id="opIdmodels"></a>

> Code samples

```bash
curl http://localhost:7997/models \
  -H 'Accept: application/json'
```

`GET /models`

get models endpoint

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "stats": {},
      "object": "model",
      "owned_by": "infinity",
      "created": 0,
      "backend": "",
      "capabilities": []
    }
  ],
  "object": "list"
}
```

<h3 id="models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAIModelInfo](#schemaopenaimodelinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Embeddings

<a id="opIdembeddings"></a>

> Code samples

```bash
curl http://localhost:7997/embeddings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": "default/not-specified",
    "encoding_format": "float",
    "user": "string",
    "dimensions": 0,
    "input": [
      "string"
    ],
    "modality": "text"
  }'
```

`POST /embeddings`

Encode Embeddings. Supports with multimodal inputs. Aligned with OpenAI Embeddings API.

## Running Text Embeddings
```python
import requests, base64
requests.post("http://..:7997/embeddings",
    json={"model":"openai/clip-vit-base-patch32","input":["Two cute cats."]})
```

## Running Image Embeddings
```python
requests.post("http://..:7997/embeddings",
    json={
        "model": "openai/clip-vit-base-patch32",
        "encoding_format": "base64",
        "input": [
            "http://images.cocodataset.org/val2017/000000039769.jpg",
            # can also be base64 encoded
        ],
        # set extra modality to image to process as image
        "modality": "image"
)
```

## Running Audio Embeddings
```python
import requests, base64
url = "https://github.com/michaelfeil/infinity/raw/3b72eb7c14bae06e68ddd07c1f23fe0bf403f220/libs/infinity_emb/tests/data/audio/beep.wav"

def url_to_base64(url, modality = "image"):
    '''small helper to convert url to base64 without server requiring access to the url'''
    response = requests.get(url)
    response.raise_for_status()
    base64_encoded = base64.b64encode(response.content).decode('utf-8')
    mimetype = f"{modality}/{url.split('.')[-1]}"
    return f"data:{mimetype};base64,{base64_encoded}"

requests.post("http://localhost:7997/embeddings",
    json={
        "model": "laion/larger_clap_general",
        "encoding_format": "float",
        "input": [
            url, url_to_base64(url, "audio")
        ],
        # set extra modality to audio to process as audio
        "modality": "audio"
    }
)
```

## Running via OpenAI Client
```python
from openai import OpenAI # pip install openai==1.51.0
client = OpenAI(base_url="http://localhost:7997/")
client.embeddings.create(
    model="laion/larger_clap_general",
    input=[url_to_base64(url, "audio")],
    encoding_format="float",
    extra_body={
        "modality": "audio"
    }
)

client.embeddings.create(
    model="laion/larger_clap_general",
    input=["the sound of a beep", "the sound of a cat"],
    encoding_format="base64", # base64: optional high performance setting
    extra_body={
        "modality": "text"
    }
)
```

### Hint: Run all the above models on one server:
```bash
infinity_emb v2 --model-id BAAI/bge-small-en-v1.5 --model-id openai/clip-vit-base-patch32 --model-id laion/larger_clap_general
```

> Body parameter

```json
{
  "model": "default/not-specified",
  "encoding_format": "float",
  "user": "string",
  "dimensions": 0,
  "input": [
    "string"
  ],
  "modality": "text"
}
```

<h3 id="embeddings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MultiModalOpenAIEmbedding](#schemamultimodalopenaiembedding)|true|none|
|» *oneOf*|body|[_OpenAIEmbeddingInput_Text](#schema_openaiembeddinginput_text)|false|helper|
|» *oneOf*|body|[OpenAIEmbeddingInput_Audio](#schemaopenaiembeddinginput_audio)|false|none|
|» *oneOf*|body|[OpenAIEmbeddingInput_Image](#schemaopenaiembeddinginput_image)|false|none|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "embedding": [
        0
      ],
      "index": 0
    }
  ],
  "model": "string",
  "usage": {
    "prompt_tokens": 0,
    "total_tokens": 0
  },
  "id": "string",
  "created": 0
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

<h3 id="embeddings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAIEmbeddingResult](#schemaopenaiembeddingresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Rerank

<a id="opIdrerank"></a>

> Code samples

```bash
curl http://localhost:7997/rerank \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": "string",
    "documents": [
      "string"
    ],
    "return_documents": false,
    "raw_scores": false,
    "model": "default/not-specified",
    "top_n": 1
  }'
```

`POST /rerank`

Rerank documents. Aligned with Cohere API (https://docs.cohere.com/reference/rerank)

```python
import requests
requests.post("http://..:7997/rerank",
    json={
        "model":"mixedbread-ai/mxbai-rerank-xsmall-v1",
        "query":"Where is Munich?",
        "documents":["Munich is in Germany.", "The sky is blue."]
    })
```

> Body parameter

```json
{
  "query": "string",
  "documents": [
    "string"
  ],
  "return_documents": false,
  "raw_scores": false,
  "model": "default/not-specified",
  "top_n": 1
}
```

<h3 id="rerank-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RerankInput](#schemarerankinput)|true|none|
|» query|body|string|true|none|
|» documents|body|[string]|true|none|
|» return_documents|body|boolean|false|none|
|» raw_scores|body|boolean|false|none|
|» model|body|string|false|none|
|» top_n|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "object": "rerank",
  "results": [
    {
      "relevance_score": 0,
      "index": 0,
      "document": "string"
    }
  ],
  "model": "string",
  "usage": {
    "prompt_tokens": 0,
    "total_tokens": 0
  },
  "id": "string",
  "created": 0
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

<h3 id="rerank-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ReRankResult](#schemarerankresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Classify

<a id="opIdclassify"></a>

> Code samples

```bash
curl http://localhost:7997/classify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "input": [
      "string"
    ],
    "model": "default/not-specified",
    "raw_scores": false
  }'
```

`POST /classify`

Score or Classify Sentiments

```python
import requests
requests.post("http://..:7997/classify",
    json={"model":"SamLowe/roberta-base-go_emotions","input":["I am not having a great day."]})
```

> Body parameter

```json
{
  "input": [
    "string"
  ],
  "model": "default/not-specified",
  "raw_scores": false
}
```

<h3 id="classify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClassifyInput](#schemaclassifyinput)|true|none|
|» input|body|[string]|true|none|
|» model|body|string|false|none|
|» raw_scores|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "object": "classify",
  "data": [
    [
      {
        "score": 0,
        "label": "string"
      }
    ]
  ],
  "model": "string",
  "usage": {
    "prompt_tokens": 0,
    "total_tokens": 0
  },
  "id": "string",
  "created": 0
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

<h3 id="classify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ClassifyResult](#schemaclassifyresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Deprecated: Use `embeddings` with `modality` set to `image`

<a id="opIdembeddings_image"></a>

> Code samples

```bash
curl http://localhost:7997/embeddings_image \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "input": [
      "data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu"
    ],
    "model": "default/not-specified",
    "encoding_format": "float",
    "user": "string"
  }'
```

`POST /embeddings_image`

<aside class="warning">
This operation is deprecated
</aside>

Encode Embeddings from Image files

Supports URLs of Images and Base64-encoded Images

```python
import requests
requests.post("http://..:7997/embeddings_image",
    json={
        "model":"openai/clip-vit-base-patch32",
        "input": [
            "http://images.cocodataset.org/val2017/000000039769.jpg",
            "data:image/png;base64,iVBORw0KGgoDEMOoSAMPLEoENCODEDIMAGE"
        ]
    })
```

> Body parameter

```json
{
  "input": [
    "data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu"
  ],
  "model": "default/not-specified",
  "encoding_format": "float",
  "user": "string"
}
```

<h3 id="deprecated-use-embeddings-with-modality-set-to-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImageEmbeddingInput](#schemaimageembeddinginput)|true|none|
|» input|body|[string \| string(uri)] \| string \| string(uri)|true|none|
|» » *anyOf*|body|[string \| string(uri)]|false|none|
|» *anyOf*|body|string|false|none|
|» *anyOf*|body|string(uri)|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|string(uri)|false|none|
|» model|body|string|false|none|
|» encoding_format|body|[EmbeddingEncodingFormat](#schemaembeddingencodingformat)|false|none|
|» user|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encoding_format|float|
|» encoding_format|base64|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "embedding": [
        0
      ],
      "index": 0
    }
  ],
  "model": "string",
  "usage": {
    "prompt_tokens": 0,
    "total_tokens": 0
  },
  "id": "string",
  "created": 0
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

<h3 id="deprecated-use-embeddings-with-modality-set-to-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAIEmbeddingResult](#schemaopenaiembeddingresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Deprecated: Use `embeddings` with `modality` set to `audio`

<a id="opIdembeddings_audio"></a>

> Code samples

```bash
curl http://localhost:7997/embeddings_audio \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "input": [
      "data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu"
    ],
    "model": "default/not-specified",
    "encoding_format": "float",
    "user": "string"
  }'
```

`POST /embeddings_audio`

<aside class="warning">
This operation is deprecated
</aside>

Encode Embeddings from Audio files

Supports URLs of Audios and Base64-encoded Audios

```python
import requests
requests.post("http://..:7997/embeddings_audio",
    json={
        "model":"laion/larger_clap_general",
        "input": [
            "https://github.com/michaelfeil/infinity/raw/3b72eb7c14bae06e68ddd07c1f23fe0bf403f220/libs/infinity_emb/tests/data/audio/beep.wav",
            "data:audio/wav;base64,iVBORw0KGgoDEMOoSAMPLEoENCODEDAUDIO"
        ]
    })
```

> Body parameter

```json
{
  "input": [
    "data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu"
  ],
  "model": "default/not-specified",
  "encoding_format": "float",
  "user": "string"
}
```

<h3 id="deprecated-use-embeddings-with-modality-set-to-audio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AudioEmbeddingInput](#schemaaudioembeddinginput)|true|none|
|» input|body|[string \| string(uri)] \| string \| string(uri)|true|none|
|» » *anyOf*|body|[string \| string(uri)]|false|none|
|» *anyOf*|body|string|false|none|
|» *anyOf*|body|string(uri)|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|string(uri)|false|none|
|» model|body|string|false|none|
|» encoding_format|body|[EmbeddingEncodingFormat](#schemaembeddingencodingformat)|false|none|
|» user|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encoding_format|float|
|» encoding_format|base64|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "embedding": [
        0
      ],
      "index": 0
    }
  ],
  "model": "string",
  "usage": {
    "prompt_tokens": 0,
    "total_tokens": 0
  },
  "id": "string",
  "created": 0
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

<h3 id="deprecated-use-embeddings-with-modality-set-to-audio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OpenAIEmbeddingResult](#schemaopenaiembeddingresult)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Metrics

<a id="opIdmetrics_metrics_get"></a>

> Code samples

```bash
curl http://localhost:7997/metrics \
  -H 'Accept: application/json'
```

`GET /metrics`

Endpoint that serves Prometheus metrics.

> Example responses

> 200 Response

```json
null
```

<h3 id="metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AudioEmbeddingInput">AudioEmbeddingInput</h2>
<!-- backwards compatibility -->
<a id="schemaaudioembeddinginput"></a>
<a id="schema_AudioEmbeddingInput"></a>
<a id="tocSaudioembeddinginput"></a>
<a id="tocsaudioembeddinginput"></a>

```json
{
  "input": [
    "data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu"
  ],
  "model": "default/not-specified",
  "encoding_format": "float",
  "user": "string"
}
```

LEGACY, DO NO LONGER UPDATE

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[string \| string(uri)] \| string \| string(uri)|true|none|none|
|model|string|false|none|none|
|encoding_format|[EmbeddingEncodingFormat](#schemaembeddingencodingformat)|false|none|none|
|user|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding_format|float|
|encoding_format|base64|

<h2 id="tocS_ClassifyInput">ClassifyInput</h2>
<!-- backwards compatibility -->
<a id="schemaclassifyinput"></a>
<a id="schema_ClassifyInput"></a>
<a id="tocSclassifyinput"></a>
<a id="tocsclassifyinput"></a>

```json
{
  "input": [
    "string"
  ],
  "model": "default/not-specified",
  "raw_scores": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[string]|true|none|none|
|model|string|false|none|none|
|raw_scores|boolean|false|none|none|

<h2 id="tocS_ClassifyResult">ClassifyResult</h2>
<!-- backwards compatibility -->
<a id="schemaclassifyresult"></a>
<a id="schema_ClassifyResult"></a>
<a id="tocSclassifyresult"></a>
<a id="tocsclassifyresult"></a>

```json
{
  "object": "classify",
  "data": [
    [
      {
        "score": 0,
        "label": "string"
      }
    ]
  ],
  "model": "string",
  "usage": {
    "prompt_tokens": 0,
    "total_tokens": 0
  },
  "id": "string",
  "created": 0
}
```

Result of classification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|data|[[[_ClassifyObject](#schema_classifyobject)]]|true|none|none|
|model|string|true|none|none|
|usage|[_Usage](#schema_usage)|true|none|none|
|id|string|false|none|none|
|created|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|object|classify|

<h2 id="tocS_EmbeddingEncodingFormat">EmbeddingEncodingFormat</h2>
<!-- backwards compatibility -->
<a id="schemaembeddingencodingformat"></a>
<a id="schema_EmbeddingEncodingFormat"></a>
<a id="tocSembeddingencodingformat"></a>
<a id="tocsembeddingencodingformat"></a>

```json
"float"
```

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

<h2 id="tocS_ImageEmbeddingInput">ImageEmbeddingInput</h2>
<!-- backwards compatibility -->
<a id="schemaimageembeddinginput"></a>
<a id="schema_ImageEmbeddingInput"></a>
<a id="tocSimageembeddinginput"></a>
<a id="tocsimageembeddinginput"></a>

```json
{
  "input": [
    "data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu"
  ],
  "model": "default/not-specified",
  "encoding_format": "float",
  "user": "string"
}
```

LEGACY, DO NO LONGER UPDATE

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[string \| string(uri)] \| string \| string(uri)|true|none|none|
|model|string|false|none|none|
|encoding_format|[EmbeddingEncodingFormat](#schemaembeddingencodingformat)|false|none|none|
|user|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding_format|float|
|encoding_format|base64|

<h2 id="tocS_ModelInfo">ModelInfo</h2>
<!-- backwards compatibility -->
<a id="schemamodelinfo"></a>
<a id="schema_ModelInfo"></a>
<a id="tocSmodelinfo"></a>
<a id="tocsmodelinfo"></a>

```json
{
  "id": "string",
  "stats": {},
  "object": "model",
  "owned_by": "infinity",
  "created": 0,
  "backend": "",
  "capabilities": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|stats|object|true|none|none|
|object|string|false|none|none|
|owned_by|string|false|none|none|
|created|integer|false|none|none|
|backend|string|false|none|none|
|capabilities|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|object|model|
|owned_by|infinity|

<h2 id="tocS_MultiModalOpenAIEmbedding">MultiModalOpenAIEmbedding</h2>
<!-- backwards compatibility -->
<a id="schemamultimodalopenaiembedding"></a>
<a id="schema_MultiModalOpenAIEmbedding"></a>
<a id="tocSmultimodalopenaiembedding"></a>
<a id="tocsmultimodalopenaiembedding"></a>

```json
{
  "model": "default/not-specified",
  "encoding_format": "float",
  "user": "string",
  "dimensions": 0,
  "input": [
    "string"
  ],
  "modality": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[_OpenAIEmbeddingInput_Text](#schema_openaiembeddinginput_text)|false|none|helper|
|*oneOf*|[OpenAIEmbeddingInput_Audio](#schemaopenaiembeddinginput_audio)|false|none|none|
|*oneOf*|[OpenAIEmbeddingInput_Image](#schemaopenaiembeddinginput_image)|false|none|none|

<h2 id="tocS_OpenAIEmbeddingInput_Audio">OpenAIEmbeddingInput_Audio</h2>
<!-- backwards compatibility -->
<a id="schemaopenaiembeddinginput_audio"></a>
<a id="schema_OpenAIEmbeddingInput_Audio"></a>
<a id="tocSopenaiembeddinginput_audio"></a>
<a id="tocsopenaiembeddinginput_audio"></a>

```json
{
  "model": "default/not-specified",
  "encoding_format": "float",
  "user": "string",
  "dimensions": 0,
  "input": [
    "data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu"
  ],
  "modality": "audio"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|none|
|encoding_format|[EmbeddingEncodingFormat](#schemaembeddingencodingformat)|false|none|none|
|user|string \| null|false|none|none|
|dimensions|integer|false|none|none|
|input|[string \| string(uri)] \| string \| string(uri)|true|none|none|
|modality|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding_format|float|
|encoding_format|base64|
|modality|audio|

<h2 id="tocS_OpenAIEmbeddingInput_Image">OpenAIEmbeddingInput_Image</h2>
<!-- backwards compatibility -->
<a id="schemaopenaiembeddinginput_image"></a>
<a id="schema_OpenAIEmbeddingInput_Image"></a>
<a id="tocSopenaiembeddinginput_image"></a>
<a id="tocsopenaiembeddinginput_image"></a>

```json
{
  "model": "default/not-specified",
  "encoding_format": "float",
  "user": "string",
  "dimensions": 0,
  "input": [
    "data:text/plain;charset=utf-8;base64,VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cu"
  ],
  "modality": "image"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|none|
|encoding_format|[EmbeddingEncodingFormat](#schemaembeddingencodingformat)|false|none|none|
|user|string \| null|false|none|none|
|dimensions|integer|false|none|none|
|input|[string \| string(uri)] \| string \| string(uri)|true|none|none|
|modality|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding_format|float|
|encoding_format|base64|
|modality|image|

<h2 id="tocS_OpenAIEmbeddingResult">OpenAIEmbeddingResult</h2>
<!-- backwards compatibility -->
<a id="schemaopenaiembeddingresult"></a>
<a id="schema_OpenAIEmbeddingResult"></a>
<a id="tocSopenaiembeddingresult"></a>
<a id="tocsopenaiembeddingresult"></a>

```json
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "embedding": [
        0
      ],
      "index": 0
    }
  ],
  "model": "string",
  "usage": {
    "prompt_tokens": 0,
    "total_tokens": 0
  },
  "id": "string",
  "created": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|data|[[_EmbeddingObject](#schema_embeddingobject)]|true|none|none|
|model|string|true|none|none|
|usage|[_Usage](#schema_usage)|true|none|none|
|id|string|false|none|none|
|created|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|object|list|

<h2 id="tocS_OpenAIModelInfo">OpenAIModelInfo</h2>
<!-- backwards compatibility -->
<a id="schemaopenaimodelinfo"></a>
<a id="schema_OpenAIModelInfo"></a>
<a id="tocSopenaimodelinfo"></a>
<a id="tocsopenaimodelinfo"></a>

```json
{
  "data": [
    {
      "id": "string",
      "stats": {},
      "object": "model",
      "owned_by": "infinity",
      "created": 0,
      "backend": "",
      "capabilities": []
    }
  ],
  "object": "list"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ModelInfo](#schemamodelinfo)]|true|none|none|
|object|string|false|none|none|

<h2 id="tocS_ReRankResult">ReRankResult</h2>
<!-- backwards compatibility -->
<a id="schemarerankresult"></a>
<a id="schema_ReRankResult"></a>
<a id="tocSrerankresult"></a>
<a id="tocsrerankresult"></a>

```json
{
  "object": "rerank",
  "results": [
    {
      "relevance_score": 0,
      "index": 0,
      "document": "string"
    }
  ],
  "model": "string",
  "usage": {
    "prompt_tokens": 0,
    "total_tokens": 0
  },
  "id": "string",
  "created": 0
}
```

Following the Cohere protocol for Rerankers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|results|[[_ReRankObject](#schema_rerankobject)]|true|none|none|
|model|string|true|none|none|
|usage|[_Usage](#schema_usage)|true|none|none|
|id|string|false|none|none|
|created|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|object|rerank|

<h2 id="tocS_RerankInput">RerankInput</h2>
<!-- backwards compatibility -->
<a id="schemarerankinput"></a>
<a id="schema_RerankInput"></a>
<a id="tocSrerankinput"></a>
<a id="tocsrerankinput"></a>

```json
{
  "query": "string",
  "documents": [
    "string"
  ],
  "return_documents": false,
  "raw_scores": false,
  "model": "default/not-specified",
  "top_n": 1
}
```

Input for reranking

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|none|
|documents|[string]|true|none|none|
|return_documents|boolean|false|none|none|
|raw_scores|boolean|false|none|none|
|model|string|false|none|none|
|top_n|integer \| null|false|none|none|

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

<h2 id="tocS__ClassifyObject">_ClassifyObject</h2>
<!-- backwards compatibility -->
<a id="schema_classifyobject"></a>
<a id="schema__ClassifyObject"></a>
<a id="tocS_classifyobject"></a>
<a id="tocs_classifyobject"></a>

```json
{
  "score": 0,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|number|true|none|none|
|label|string|true|none|none|

<h2 id="tocS__EmbeddingObject">_EmbeddingObject</h2>
<!-- backwards compatibility -->
<a id="schema_embeddingobject"></a>
<a id="schema__EmbeddingObject"></a>
<a id="tocS_embeddingobject"></a>
<a id="tocs_embeddingobject"></a>

```json
{
  "object": "embedding",
  "embedding": [
    0
  ],
  "index": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|embedding|[number] \| string(binary) \| [[number]]|true|none|none|
|index|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|object|embedding|

<h2 id="tocS__OpenAIEmbeddingInput_Text">_OpenAIEmbeddingInput_Text</h2>
<!-- backwards compatibility -->
<a id="schema_openaiembeddinginput_text"></a>
<a id="schema__OpenAIEmbeddingInput_Text"></a>
<a id="tocS_openaiembeddinginput_text"></a>
<a id="tocs_openaiembeddinginput_text"></a>

```json
{
  "model": "default/not-specified",
  "encoding_format": "float",
  "user": "string",
  "dimensions": 0,
  "input": [
    "string"
  ],
  "modality": "text"
}
```

helper

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|none|
|encoding_format|[EmbeddingEncodingFormat](#schemaembeddingencodingformat)|false|none|none|
|user|string \| null|false|none|none|
|dimensions|integer|false|none|none|
|input|[string] \| string|true|none|none|
|modality|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding_format|float|
|encoding_format|base64|
|modality|text|

<h2 id="tocS__ReRankObject">_ReRankObject</h2>
<!-- backwards compatibility -->
<a id="schema_rerankobject"></a>
<a id="schema__ReRankObject"></a>
<a id="tocS_rerankobject"></a>
<a id="tocs_rerankobject"></a>

```json
{
  "relevance_score": 0,
  "index": 0,
  "document": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relevance_score|number|true|none|none|
|index|integer|true|none|none|
|document|string \| null|false|none|none|

<h2 id="tocS__Usage">_Usage</h2>
<!-- backwards compatibility -->
<a id="schema_usage"></a>
<a id="schema__Usage"></a>
<a id="tocS_usage"></a>
<a id="tocs_usage"></a>

```json
{
  "prompt_tokens": 0,
  "total_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prompt_tokens|integer|true|none|none|
|total_tokens|integer|true|none|none|
