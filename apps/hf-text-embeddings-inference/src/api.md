<h1 id="text-embeddings-inference">Text Embeddings Inference v1.9.4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Text Embedding Webserver

License: <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a>

<h1 id="text-embeddings-inference-text-embeddings-inference">Text Embeddings Inference</h1>

Hugging Face Text Embeddings Inference API

## Decode input ids

<a id="opIddecode"></a>

> Code samples

```bash
curl http://localhost:8080/decode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ids": [
      0
    ],
    "skip_special_tokens": "true"
  }'
```

`POST /decode`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "skip_special_tokens": "true"
}
```

<h3 id="decode-input-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DecodeRequest](#schemadecoderequest)|true|none|
|» ids|body|[InputIds](#schemainputids)|true|none|
|» skip_special_tokens|body|boolean|false|none|

> Example responses

> 200 Response

```json
[
  "test"
]
```

> 400 Response

```json
{
  "error": "Batch is empty",
  "error_type": "empty"
}
```

> 413 Response

```json
{
  "error": "Batch size error",
  "error_type": "validation"
}
```

> 422 Response

```json
{
  "error": "Tokenization error",
  "error_type": "tokenizer"
}
```

<h3 id="decode-input-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Decoded ids|[DecodeResponse](#schemadecoderesponse)|
|400|Bad Request|Batch is empty|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|Batch size error|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Tokenization error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Embeddings. Returns a 424 status code if the model is not an embedding model.

<a id="opIdembed"></a>

> Code samples

```bash
curl http://localhost:8080/embed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dimensions": "null",
    "inputs": "string",
    "normalize": "true",
    "prompt_name": "null",
    "truncate": "false",
    "truncation_direction": "right"
  }'
```

`POST /embed`

> Body parameter

```json
{
  "dimensions": "null",
  "inputs": "string",
  "normalize": "true",
  "prompt_name": "null",
  "truncate": "false",
  "truncation_direction": "right"
}
```

<h3 id="get-embeddings-returns-a-424-status-code-if-the-model-is-not-an-embedding-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmbedRequest](#schemaembedrequest)|true|none|
|» dimensions|body|integer \| null|false|The number of dimensions that the output embeddings should have. If not set, the original<br>shape of the representation will be returned instead.|
|» inputs|body|[Input](#schemainput)|true|none|
|» normalize|body|boolean|false|none|
|» prompt_name|body|string \| null|false|The name of the prompt that should be used by for encoding. If not set, no prompt<br>will be applied.<br><br>Must be a key in the `sentence-transformers` configuration `prompts` dictionary.<br><br>For example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},<br>then the sentence "What is the capital of France?" will be encoded as<br>"query: What is the capital of France?" because the prompt text will be prepended before<br>any text to encode.|
|» truncate|body|boolean \| null|false|none|
|» truncation_direction|body|object|false|none|

> Example responses

> 200 Response

```json
[
  [
    0,
    1,
    2
  ]
]
```

> 400 Response

```json
{
  "error": "Batch is empty",
  "error_type": "empty"
}
```

> 413 Response

```json
{
  "error": "Batch size error",
  "error_type": "validation"
}
```

> 422 Response

```json
{
  "error": "Tokenization error",
  "error_type": "tokenizer"
}
```

> 424 Response

```json
{
  "error": "Inference failed",
  "error_type": "backend"
}
```

> 429 Response

```json
{
  "error": "Model is overloaded",
  "error_type": "overloaded"
}
```

<h3 id="get-embeddings-returns-a-424-status-code-if-the-model-is-not-an-embedding-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Embeddings|[EmbedResponse](#schemaembedresponse)|
|400|Bad Request|Batch is empty|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|Batch size error|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Tokenization error|[ErrorResponse](#schemaerrorresponse)|
|424|Failed Dependency|Embedding Error|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Model is overloaded|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all Embeddings without Pooling.

<a id="opIdembed_all"></a>

> Code samples

```bash
curl http://localhost:8080/embed_all \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "inputs": "string",
    "prompt_name": "null",
    "truncate": "false",
    "truncation_direction": "right"
  }'
```

`POST /embed_all`

Returns a 424 status code if the model is not an embedding model.

> Body parameter

```json
{
  "inputs": "string",
  "prompt_name": "null",
  "truncate": "false",
  "truncation_direction": "right"
}
```

<h3 id="get-all-embeddings-without-pooling-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmbedAllRequest](#schemaembedallrequest)|true|none|
|» inputs|body|[Input](#schemainput)|true|none|
|» prompt_name|body|string \| null|false|The name of the prompt that should be used by for encoding. If not set, no prompt<br>will be applied.<br><br>Must be a key in the `sentence-transformers` configuration `prompts` dictionary.<br><br>For example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},<br>then the sentence "What is the capital of France?" will be encoded as<br>"query: What is the capital of France?" because the prompt text will be prepended before<br>any text to encode.|
|» truncate|body|boolean \| null|false|none|
|» truncation_direction|body|object|false|none|

> Example responses

> 200 Response

```json
[
  [
    [
      0,
      1,
      2
    ]
  ]
]
```

> 400 Response

```json
{
  "error": "Batch is empty",
  "error_type": "empty"
}
```

> 413 Response

```json
{
  "error": "Batch size error",
  "error_type": "validation"
}
```

> 422 Response

```json
{
  "error": "Tokenization error",
  "error_type": "tokenizer"
}
```

> 424 Response

```json
{
  "error": "Inference failed",
  "error_type": "backend"
}
```

> 429 Response

```json
{
  "error": "Model is overloaded",
  "error_type": "overloaded"
}
```

<h3 id="get-all-embeddings-without-pooling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Embeddings|[EmbedAllResponse](#schemaembedallresponse)|
|400|Bad Request|Batch is empty|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|Batch size error|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Tokenization error|[ErrorResponse](#schemaerrorresponse)|
|424|Failed Dependency|Embedding Error|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Model is overloaded|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Sparse Embeddings. Returns a 424 status code if the model is not an embedding model with SPLADE pooling.

<a id="opIdembed_sparse"></a>

> Code samples

```bash
curl http://localhost:8080/embed_sparse \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "inputs": "string",
    "prompt_name": "null",
    "truncate": "false",
    "truncation_direction": "right"
  }'
```

`POST /embed_sparse`

> Body parameter

```json
{
  "inputs": "string",
  "prompt_name": "null",
  "truncate": "false",
  "truncation_direction": "right"
}
```

<h3 id="get-sparse-embeddings-returns-a-424-status-code-if-the-model-is-not-an-embedding-model-with-splade-pooling-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmbedSparseRequest](#schemaembedsparserequest)|true|none|
|» inputs|body|[Input](#schemainput)|true|none|
|» prompt_name|body|string \| null|false|The name of the prompt that should be used by for encoding. If not set, no prompt<br>will be applied.<br><br>Must be a key in the `sentence-transformers` configuration `prompts` dictionary.<br><br>For example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},<br>then the sentence "What is the capital of France?" will be encoded as<br>"query: What is the capital of France?" because the prompt text will be prepended before<br>any text to encode.|
|» truncate|body|boolean \| null|false|none|
|» truncation_direction|body|object|false|none|

> Example responses

> 200 Response

```json
[
  [
    {
      "index": 0,
      "value": 0
    }
  ]
]
```

> 400 Response

```json
{
  "error": "Batch is empty",
  "error_type": "empty"
}
```

> 413 Response

```json
{
  "error": "Batch size error",
  "error_type": "validation"
}
```

> 422 Response

```json
{
  "error": "Tokenization error",
  "error_type": "tokenizer"
}
```

> 424 Response

```json
{
  "error": "Inference failed",
  "error_type": "backend"
}
```

> 429 Response

```json
{
  "error": "Model is overloaded",
  "error_type": "overloaded"
}
```

<h3 id="get-sparse-embeddings-returns-a-424-status-code-if-the-model-is-not-an-embedding-model-with-splade-pooling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Embeddings|[EmbedSparseResponse](#schemaembedsparseresponse)|
|400|Bad Request|Batch is empty|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|Batch size error|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Tokenization error|[ErrorResponse](#schemaerrorresponse)|
|424|Failed Dependency|Embedding Error|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Model is overloaded|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Health check method

<a id="opIdhealth"></a>

> Code samples

```bash
curl http://localhost:8080/health \
  -H 'Accept: application/json'
```

`GET /health`

> Example responses

> 503 Response

```json
{
  "error": "unhealthy",
  "error_type": "unhealthy"
}
```

<h3 id="health-check-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Everything is working fine|None|
|503|Service Unavailable|Text embeddings Inference is down|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Text Embeddings Inference endpoint info

<a id="opIdget_model_info"></a>

> Code samples

```bash
curl http://localhost:8080/info \
  -H 'Accept: application/json'
```

`GET /info`

> Example responses

> 200 Response

```json
{
  "auto_truncate": true,
  "docker_label": "null",
  "max_batch_requests": "null",
  "max_batch_tokens": "2048",
  "max_client_batch_size": "32",
  "max_concurrent_requests": "128",
  "max_input_length": "512",
  "model_dtype": "float16",
  "model_id": "thenlper/gte-base",
  "model_sha": "fca14538aa9956a46526bd1d0d11d69e19b5a101",
  "model_type": {
    "classifier": {
      "id2label": {
        "0": "LABEL"
      },
      "label2id": {
        "LABEL": 0
      }
    }
  },
  "served_model_name": "thenlper/gte-base",
  "sha": "null",
  "tokenization_workers": "4",
  "version": "0.5.0"
}
```

<h3 id="text-embeddings-inference-endpoint-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Served model info|[Info](#schemainfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Prometheus metrics scrape endpoint

<a id="opIdmetrics"></a>

> Code samples

```bash
curl http://localhost:8080/metrics
```

`GET /metrics`

<h3 id="prometheus-metrics-scrape-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Prometheus Metrics|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get Predictions. Returns a 424 status code if the model is not a Sequence Classification model

<a id="opIdpredict"></a>

> Code samples

```bash
curl http://localhost:8080/predict \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "inputs": "What is Deep Learning?",
    "raw_scores": "false",
    "truncate": "false",
    "truncation_direction": "right"
  }'
```

`POST /predict`

> Body parameter

```json
{
  "inputs": "What is Deep Learning?",
  "raw_scores": "false",
  "truncate": "false",
  "truncation_direction": "right"
}
```

<h3 id="get-predictions-returns-a-424-status-code-if-the-model-is-not-a-sequence-classification-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PredictRequest](#schemapredictrequest)|true|none|
|» inputs|body|[PredictInput](#schemapredictinput)|true|Model input. Can be either a single string, a pair of strings or a batch of mixed single and pairs of strings.|
|» raw_scores|body|boolean|false|none|
|» truncate|body|boolean \| null|false|none|
|» truncation_direction|body|object|false|none|

> Example responses

> 200 Response

```json
[
  {
    "label": "admiration",
    "score": "0.5"
  }
]
```

> 400 Response

```json
{
  "error": "Batch is empty",
  "error_type": "empty"
}
```

> 413 Response

```json
{
  "error": "Batch size error",
  "error_type": "validation"
}
```

> 422 Response

```json
{
  "error": "Tokenization error",
  "error_type": "tokenizer"
}
```

> 424 Response

```json
{
  "error": "Inference failed",
  "error_type": "backend"
}
```

> 429 Response

```json
{
  "error": "Model is overloaded",
  "error_type": "overloaded"
}
```

<h3 id="get-predictions-returns-a-424-status-code-if-the-model-is-not-a-sequence-classification-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Predictions|[PredictResponse](#schemapredictresponse)|
|400|Bad Request|Batch is empty|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|Batch size error|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Tokenization error|[ErrorResponse](#schemaerrorresponse)|
|424|Failed Dependency|Prediction Error|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Model is overloaded|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Ranks. Returns a 424 status code if the model is not a Sequence Classification model with

<a id="opIdrerank"></a>

> Code samples

```bash
curl http://localhost:8080/rerank \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": "What is Deep Learning?",
    "raw_scores": "false",
    "return_text": "false",
    "texts": [
      "Deep Learning is ..."
    ],
    "truncate": "false",
    "truncation_direction": "right"
  }'
```

`POST /rerank`

a single class.

> Body parameter

```json
{
  "query": "What is Deep Learning?",
  "raw_scores": "false",
  "return_text": "false",
  "texts": [
    "Deep Learning is ..."
  ],
  "truncate": "false",
  "truncation_direction": "right"
}
```

<h3 id="get-ranks-returns-a-424-status-code-if-the-model-is-not-a-sequence-classification-model-with-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RerankRequest](#schemarerankrequest)|true|none|
|» query|body|string|true|none|
|» raw_scores|body|boolean|false|none|
|» return_text|body|boolean|false|none|
|» texts|body|[string]|true|none|
|» truncate|body|boolean \| null|false|none|
|» truncation_direction|body|object|false|none|

> Example responses

> 200 Response

```json
[
  {
    "index": "0",
    "score": "1.0",
    "text": "Deep Learning is ..."
  }
]
```

> 400 Response

```json
{
  "error": "Batch is empty",
  "error_type": "empty"
}
```

> 413 Response

```json
{
  "error": "Batch size error",
  "error_type": "validation"
}
```

> 422 Response

```json
{
  "error": "Tokenization error",
  "error_type": "tokenizer"
}
```

> 424 Response

```json
{
  "error": "Inference failed",
  "error_type": "backend"
}
```

> 429 Response

```json
{
  "error": "Model is overloaded",
  "error_type": "overloaded"
}
```

<h3 id="get-ranks-returns-a-424-status-code-if-the-model-is-not-a-sequence-classification-model-with-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ranks|[RerankResponse](#schemarerankresponse)|
|400|Bad Request|Batch is empty|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|Batch size error|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Tokenization error|[ErrorResponse](#schemaerrorresponse)|
|424|Failed Dependency|Rerank Error|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Model is overloaded|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Sentence Similarity. Returns a 424 status code if the model is not an embedding model.

<a id="opIdsimilarity"></a>

> Code samples

```bash
curl http://localhost:8080/similarity \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "inputs": {
      "sentences": [
        "What is Machine Learning?"
      ],
      "source_sentence": "What is Deep Learning?"
    },
    "parameters": "null"
  }'
```

`POST /similarity`

> Body parameter

```json
{
  "inputs": {
    "sentences": [
      "What is Machine Learning?"
    ],
    "source_sentence": "What is Deep Learning?"
  },
  "parameters": "null"
}
```

<h3 id="get-sentence-similarity-returns-a-424-status-code-if-the-model-is-not-an-embedding-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SimilarityRequest](#schemasimilarityrequest)|true|none|
|» inputs|body|[SimilarityInput](#schemasimilarityinput)|true|none|
|» parameters|body|object \| null|false|none|
|» » prompt_name|body|string \| null|false|The name of the prompt that should be used by for encoding. If not set, no prompt<br>will be applied.<br><br>Must be a key in the `sentence-transformers` configuration `prompts` dictionary.<br><br>For example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},<br>then the sentence "What is the capital of France?" will be encoded as<br>"query: What is the capital of France?" because the prompt text will be prepended before<br>any text to encode.|
|» » truncate|body|boolean \| null|false|none|
|» » truncation_direction|body|object|false|none|

> Example responses

> 200 Response

```json
[
  0,
  1,
  0.5
]
```

> 400 Response

```json
{
  "error": "Batch is empty",
  "error_type": "empty"
}
```

> 413 Response

```json
{
  "error": "Batch size error",
  "error_type": "validation"
}
```

> 422 Response

```json
{
  "error": "Tokenization error",
  "error_type": "tokenizer"
}
```

> 424 Response

```json
{
  "error": "Inference failed",
  "error_type": "backend"
}
```

> 429 Response

```json
{
  "error": "Model is overloaded",
  "error_type": "overloaded"
}
```

<h3 id="get-sentence-similarity-returns-a-424-status-code-if-the-model-is-not-an-embedding-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sentence Similarity|[SimilarityResponse](#schemasimilarityresponse)|
|400|Bad Request|Batch is empty|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|Batch size error|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Tokenization error|[ErrorResponse](#schemaerrorresponse)|
|424|Failed Dependency|Embedding Error|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Model is overloaded|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Tokenize inputs

<a id="opIdtokenize"></a>

> Code samples

```bash
curl http://localhost:8080/tokenize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "add_special_tokens": "true",
    "inputs": "string",
    "prompt_name": "null"
  }'
```

`POST /tokenize`

> Body parameter

```json
{
  "add_special_tokens": "true",
  "inputs": "string",
  "prompt_name": "null"
}
```

<h3 id="tokenize-inputs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TokenizeRequest](#schematokenizerequest)|true|none|
|» add_special_tokens|body|boolean|false|none|
|» inputs|body|[TokenizeInput](#schematokenizeinput)|true|none|
|» prompt_name|body|string \| null|false|The name of the prompt that should be used by for encoding. If not set, no prompt<br>will be applied.<br><br>Must be a key in the `sentence-transformers` configuration `prompts` dictionary.<br><br>For example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},<br>then the sentence "What is the capital of France?" will be encoded as<br>"query: What is the capital of France?" because the prompt text will be prepended before<br>any text to encode.|

> Example responses

> 200 Response

```json
[
  [
    {
      "id": 0,
      "special": false,
      "start": 0,
      "stop": 2,
      "text": "test"
    }
  ]
]
```

> 400 Response

```json
{
  "error": "Batch is empty",
  "error_type": "empty"
}
```

> 413 Response

```json
{
  "error": "Batch size error",
  "error_type": "validation"
}
```

> 422 Response

```json
{
  "error": "Tokenization error",
  "error_type": "tokenizer"
}
```

<h3 id="tokenize-inputs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tokenized ids|[TokenizeResponse](#schematokenizeresponse)|
|400|Bad Request|Batch is empty|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|Batch size error|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Tokenization error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## OpenAI compatible route. Returns a 424 status code if the model is not an embedding model.

<a id="opIdopenai_embed"></a>

> Code samples

```bash
curl http://localhost:8080/v1/embeddings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dimensions": "null",
    "encoding_format": "float",
    "input": "string",
    "model": "null",
    "user": "null"
  }'
```

`POST /v1/embeddings`

> Body parameter

```json
{
  "dimensions": "null",
  "encoding_format": "float",
  "input": "string",
  "model": "null",
  "user": "null"
}
```

<h3 id="openai-compatible-route-returns-a-424-status-code-if-the-model-is-not-an-embedding-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OpenAICompatRequest](#schemaopenaicompatrequest)|true|none|
|» dimensions|body|integer \| null|false|none|
|» encoding_format|body|object|false|none|
|» input|body|[Input](#schemainput)|true|none|
|» model|body|string \| null|false|none|
|» user|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "embedding": [
        0
      ],
      "index": "0",
      "object": "embedding"
    }
  ],
  "model": "thenlper/gte-base",
  "object": "list",
  "usage": {
    "prompt_tokens": "512",
    "total_tokens": "512"
  }
}
```

> 400 Response

```json
{
  "message": "Batch is empty",
  "type": "empty"
}
```

> 413 Response

```json
{
  "message": "Batch size error",
  "type": "validation"
}
```

> 422 Response

```json
{
  "message": "Tokenization error",
  "type": "tokenizer"
}
```

> 424 Response

```json
{
  "message": "Inference failed",
  "type": "backend"
}
```

> 429 Response

```json
{
  "message": "Model is overloaded",
  "type": "overloaded"
}
```

<h3 id="openai-compatible-route-returns-a-424-status-code-if-the-model-is-not-an-embedding-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Embeddings|[OpenAICompatResponse](#schemaopenaicompatresponse)|
|400|Bad Request|Batch is empty|[OpenAICompatErrorResponse](#schemaopenaicompaterrorresponse)|
|413|Payload Too Large|Batch size error|[OpenAICompatErrorResponse](#schemaopenaicompaterrorresponse)|
|422|Unprocessable Entity|Tokenization error|[OpenAICompatErrorResponse](#schemaopenaicompaterrorresponse)|
|424|Failed Dependency|Embedding Error|[OpenAICompatErrorResponse](#schemaopenaicompaterrorresponse)|
|429|Too Many Requests|Model is overloaded|[OpenAICompatErrorResponse](#schemaopenaicompaterrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ClassifierModel">ClassifierModel</h2>
<!-- backwards compatibility -->
<a id="schemaclassifiermodel"></a>
<a id="schema_ClassifierModel"></a>
<a id="tocSclassifiermodel"></a>
<a id="tocsclassifiermodel"></a>

```json
{
  "id2label": {
    "0": "LABEL"
  },
  "label2id": {
    "LABEL": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id2label|object|true|none|none|
|label2id|object|true|none|none|

<h2 id="tocS_DecodeRequest">DecodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadecoderequest"></a>
<a id="schema_DecodeRequest"></a>
<a id="tocSdecoderequest"></a>
<a id="tocsdecoderequest"></a>

```json
{
  "ids": [
    0
  ],
  "skip_special_tokens": "true"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[InputIds](#schemainputids)|true|none|none|
|skip_special_tokens|boolean|false|none|none|

<h2 id="tocS_DecodeResponse">DecodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadecoderesponse"></a>
<a id="schema_DecodeResponse"></a>
<a id="tocSdecoderesponse"></a>
<a id="tocsdecoderesponse"></a>

```json
[
  "test"
]
```

<h2 id="tocS_EmbedAllRequest">EmbedAllRequest</h2>
<!-- backwards compatibility -->
<a id="schemaembedallrequest"></a>
<a id="schema_EmbedAllRequest"></a>
<a id="tocSembedallrequest"></a>
<a id="tocsembedallrequest"></a>

```json
{
  "inputs": "string",
  "prompt_name": "null",
  "truncate": "false",
  "truncation_direction": "right"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[Input](#schemainput)|true|none|none|
|prompt_name|string \| null|false|none|The name of the prompt that should be used by for encoding. If not set, no prompt<br>will be applied.<br><br>Must be a key in the `sentence-transformers` configuration `prompts` dictionary.<br><br>For example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},<br>then the sentence "What is the capital of France?" will be encoded as<br>"query: What is the capital of France?" because the prompt text will be prepended before<br>any text to encode.|
|truncate|boolean \| null|false|none|none|
|truncation_direction|object|false|none|none|

<h2 id="tocS_EmbedAllResponse">EmbedAllResponse</h2>
<!-- backwards compatibility -->
<a id="schemaembedallresponse"></a>
<a id="schema_EmbedAllResponse"></a>
<a id="tocSembedallresponse"></a>
<a id="tocsembedallresponse"></a>

```json
[
  [
    [
      0,
      1,
      2
    ]
  ]
]
```

<h2 id="tocS_EmbedRequest">EmbedRequest</h2>
<!-- backwards compatibility -->
<a id="schemaembedrequest"></a>
<a id="schema_EmbedRequest"></a>
<a id="tocSembedrequest"></a>
<a id="tocsembedrequest"></a>

```json
{
  "dimensions": "null",
  "inputs": "string",
  "normalize": "true",
  "prompt_name": "null",
  "truncate": "false",
  "truncation_direction": "right"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|integer \| null|false|none|The number of dimensions that the output embeddings should have. If not set, the original<br>shape of the representation will be returned instead.|
|inputs|[Input](#schemainput)|true|none|none|
|normalize|boolean|false|none|none|
|prompt_name|string \| null|false|none|The name of the prompt that should be used by for encoding. If not set, no prompt<br>will be applied.<br><br>Must be a key in the `sentence-transformers` configuration `prompts` dictionary.<br><br>For example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},<br>then the sentence "What is the capital of France?" will be encoded as<br>"query: What is the capital of France?" because the prompt text will be prepended before<br>any text to encode.|
|truncate|boolean \| null|false|none|none|
|truncation_direction|object|false|none|none|

<h2 id="tocS_EmbedResponse">EmbedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaembedresponse"></a>
<a id="schema_EmbedResponse"></a>
<a id="tocSembedresponse"></a>
<a id="tocsembedresponse"></a>

```json
[
  [
    0,
    1,
    2
  ]
]
```

<h2 id="tocS_EmbedSparseRequest">EmbedSparseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaembedsparserequest"></a>
<a id="schema_EmbedSparseRequest"></a>
<a id="tocSembedsparserequest"></a>
<a id="tocsembedsparserequest"></a>

```json
{
  "inputs": "string",
  "prompt_name": "null",
  "truncate": "false",
  "truncation_direction": "right"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[Input](#schemainput)|true|none|none|
|prompt_name|string \| null|false|none|The name of the prompt that should be used by for encoding. If not set, no prompt<br>will be applied.<br><br>Must be a key in the `sentence-transformers` configuration `prompts` dictionary.<br><br>For example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},<br>then the sentence "What is the capital of France?" will be encoded as<br>"query: What is the capital of France?" because the prompt text will be prepended before<br>any text to encode.|
|truncate|boolean \| null|false|none|none|
|truncation_direction|object|false|none|none|

<h2 id="tocS_EmbedSparseResponse">EmbedSparseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaembedsparseresponse"></a>
<a id="schema_EmbedSparseResponse"></a>
<a id="tocSembedsparseresponse"></a>
<a id="tocsembedsparseresponse"></a>

```json
[
  [
    {
      "index": 0,
      "value": 0
    }
  ]
]
```

<h2 id="tocS_Embedding">Embedding</h2>
<!-- backwards compatibility -->
<a id="schemaembedding"></a>
<a id="schema_Embedding"></a>
<a id="tocSembedding"></a>
<a id="tocsembedding"></a>

```json
[
  0
]
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[number(float)]|false|none|none|
|*oneOf*|string|false|none|none|

<h2 id="tocS_EmbeddingModel">EmbeddingModel</h2>
<!-- backwards compatibility -->
<a id="schemaembeddingmodel"></a>
<a id="schema_EmbeddingModel"></a>
<a id="tocSembeddingmodel"></a>
<a id="tocsembeddingmodel"></a>

```json
{
  "pooling": "cls"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pooling|string|true|none|none|

<h2 id="tocS_EncodingFormat">EncodingFormat</h2>
<!-- backwards compatibility -->
<a id="schemaencodingformat"></a>
<a id="schema_EncodingFormat"></a>
<a id="tocSencodingformat"></a>
<a id="tocsencodingformat"></a>

```json
"float"
```

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": "string",
  "error_type": "Unhealthy"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|error_type|[ErrorType](#schemaerrortype)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error_type|Unhealthy|
|error_type|Backend|
|error_type|Overloaded|
|error_type|Validation|
|error_type|Tokenizer|
|error_type|Empty|

<h2 id="tocS_ErrorType">ErrorType</h2>
<!-- backwards compatibility -->
<a id="schemaerrortype"></a>
<a id="schema_ErrorType"></a>
<a id="tocSerrortype"></a>
<a id="tocserrortype"></a>

```json
"Unhealthy"
```

<h2 id="tocS_Info">Info</h2>
<!-- backwards compatibility -->
<a id="schemainfo"></a>
<a id="schema_Info"></a>
<a id="tocSinfo"></a>
<a id="tocsinfo"></a>

```json
{
  "auto_truncate": true,
  "docker_label": "null",
  "max_batch_requests": "null",
  "max_batch_tokens": "2048",
  "max_client_batch_size": "32",
  "max_concurrent_requests": "128",
  "max_input_length": "512",
  "model_dtype": "float16",
  "model_id": "thenlper/gte-base",
  "model_sha": "fca14538aa9956a46526bd1d0d11d69e19b5a101",
  "model_type": {
    "classifier": {
      "id2label": {
        "0": "LABEL"
      },
      "label2id": {
        "LABEL": 0
      }
    }
  },
  "served_model_name": "thenlper/gte-base",
  "sha": "null",
  "tokenization_workers": "4",
  "version": "0.5.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_truncate|boolean|true|none|none|
|docker_label|string \| null|false|none|none|
|max_batch_requests|integer \| null|false|none|none|
|max_batch_tokens|integer|true|none|none|
|max_client_batch_size|integer|true|none|none|
|max_concurrent_requests|integer|true|none|Router Parameters|
|max_input_length|integer|true|none|none|
|model_dtype|string|true|none|none|
|model_id|string|true|none|Model info|
|model_sha|string \| null|false|none|none|
|model_type|[ModelType](#schemamodeltype)|true|none|none|
|served_model_name|string|true|none|none|
|sha|string \| null|false|none|none|
|tokenization_workers|integer|true|none|none|
|version|string|true|none|Router Info|

<h2 id="tocS_Input">Input</h2>
<!-- backwards compatibility -->
<a id="schemainput"></a>
<a id="schema_Input"></a>
<a id="tocSinput"></a>
<a id="tocsinput"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[InputType](#schemainputtype)|false|none|none|
|*oneOf*|[[InputType](#schemainputtype)]|false|none|none|

<h2 id="tocS_InputIds">InputIds</h2>
<!-- backwards compatibility -->
<a id="schemainputids"></a>
<a id="schema_InputIds"></a>
<a id="tocSinputids"></a>
<a id="tocsinputids"></a>

```json
[
  0
]
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[integer(int32)]|false|none|none|
|*oneOf*|[[integer(int32)]]|false|none|none|

<h2 id="tocS_InputType">InputType</h2>
<!-- backwards compatibility -->
<a id="schemainputtype"></a>
<a id="schema_InputType"></a>
<a id="tocSinputtype"></a>
<a id="tocsinputtype"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[integer(int32)]|false|none|none|

<h2 id="tocS_ModelType">ModelType</h2>
<!-- backwards compatibility -->
<a id="schemamodeltype"></a>
<a id="schema_ModelType"></a>
<a id="tocSmodeltype"></a>
<a id="tocsmodeltype"></a>

```json
{
  "classifier": {
    "id2label": {
      "0": "LABEL"
    },
    "label2id": {
      "LABEL": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|classifier|[ClassifierModel](#schemaclassifiermodel)|true|none|none|
|*oneOf*|object|false|none|none|
|embedding|[EmbeddingModel](#schemaembeddingmodel)|true|none|none|
|*oneOf*|object|false|none|none|
|reranker|[ClassifierModel](#schemaclassifiermodel)|true|none|none|

<h2 id="tocS_OpenAICompatEmbedding">OpenAICompatEmbedding</h2>
<!-- backwards compatibility -->
<a id="schemaopenaicompatembedding"></a>
<a id="schema_OpenAICompatEmbedding"></a>
<a id="tocSopenaicompatembedding"></a>
<a id="tocsopenaicompatembedding"></a>

```json
{
  "embedding": [
    0
  ],
  "index": "0",
  "object": "embedding"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embedding|[Embedding](#schemaembedding)|true|none|none|
|index|integer|true|none|none|
|object|string|true|none|none|

<h2 id="tocS_OpenAICompatErrorResponse">OpenAICompatErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaopenaicompaterrorresponse"></a>
<a id="schema_OpenAICompatErrorResponse"></a>
<a id="tocSopenaicompaterrorresponse"></a>
<a id="tocsopenaicompaterrorresponse"></a>

```json
{
  "code": 0,
  "error_type": "Unhealthy",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|error_type|[ErrorType](#schemaerrortype)|true|none|none|
|message|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error_type|Unhealthy|
|error_type|Backend|
|error_type|Overloaded|
|error_type|Validation|
|error_type|Tokenizer|
|error_type|Empty|

<h2 id="tocS_OpenAICompatRequest">OpenAICompatRequest</h2>
<!-- backwards compatibility -->
<a id="schemaopenaicompatrequest"></a>
<a id="schema_OpenAICompatRequest"></a>
<a id="tocSopenaicompatrequest"></a>
<a id="tocsopenaicompatrequest"></a>

```json
{
  "dimensions": "null",
  "encoding_format": "float",
  "input": "string",
  "model": "null",
  "user": "null"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|integer \| null|false|none|none|
|encoding_format|object|false|none|none|
|input|[Input](#schemainput)|true|none|none|
|model|string \| null|false|none|none|
|user|string \| null|false|none|none|

<h2 id="tocS_OpenAICompatResponse">OpenAICompatResponse</h2>
<!-- backwards compatibility -->
<a id="schemaopenaicompatresponse"></a>
<a id="schema_OpenAICompatResponse"></a>
<a id="tocSopenaicompatresponse"></a>
<a id="tocsopenaicompatresponse"></a>

```json
{
  "data": [
    {
      "embedding": [
        0
      ],
      "index": "0",
      "object": "embedding"
    }
  ],
  "model": "thenlper/gte-base",
  "object": "list",
  "usage": {
    "prompt_tokens": "512",
    "total_tokens": "512"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[OpenAICompatEmbedding](#schemaopenaicompatembedding)]|true|none|none|
|model|string|true|none|none|
|object|string|true|none|none|
|usage|[OpenAICompatUsage](#schemaopenaicompatusage)|true|none|none|

<h2 id="tocS_OpenAICompatUsage">OpenAICompatUsage</h2>
<!-- backwards compatibility -->
<a id="schemaopenaicompatusage"></a>
<a id="schema_OpenAICompatUsage"></a>
<a id="tocSopenaicompatusage"></a>
<a id="tocsopenaicompatusage"></a>

```json
{
  "prompt_tokens": "512",
  "total_tokens": "512"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prompt_tokens|integer|true|none|none|
|total_tokens|integer|true|none|none|

<h2 id="tocS_PredictInput">PredictInput</h2>
<!-- backwards compatibility -->
<a id="schemapredictinput"></a>
<a id="schema_PredictInput"></a>
<a id="tocSpredictinput"></a>
<a id="tocspredictinput"></a>

```json
"What is Deep Learning?"
```

Model input. Can be either a single string, a pair of strings or a batch of mixed single and pairs of strings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|A single string|
|*oneOf*|[string]|false|none|A pair of strings|
|*oneOf*|[[string]]|false|none|A batch|

<h2 id="tocS_PredictRequest">PredictRequest</h2>
<!-- backwards compatibility -->
<a id="schemapredictrequest"></a>
<a id="schema_PredictRequest"></a>
<a id="tocSpredictrequest"></a>
<a id="tocspredictrequest"></a>

```json
{
  "inputs": "What is Deep Learning?",
  "raw_scores": "false",
  "truncate": "false",
  "truncation_direction": "right"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[PredictInput](#schemapredictinput)|true|none|Model input. Can be either a single string, a pair of strings or a batch of mixed single and pairs of strings.|
|raw_scores|boolean|false|none|none|
|truncate|boolean \| null|false|none|none|
|truncation_direction|object|false|none|none|

<h2 id="tocS_PredictResponse">PredictResponse</h2>
<!-- backwards compatibility -->
<a id="schemapredictresponse"></a>
<a id="schema_PredictResponse"></a>
<a id="tocSpredictresponse"></a>
<a id="tocspredictresponse"></a>

```json
[
  {
    "label": "admiration",
    "score": "0.5"
  }
]
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[[Prediction](#schemaprediction)]|false|none|none|
|*oneOf*|[[[Prediction](#schemaprediction)]]|false|none|none|

<h2 id="tocS_Prediction">Prediction</h2>
<!-- backwards compatibility -->
<a id="schemaprediction"></a>
<a id="schema_Prediction"></a>
<a id="tocSprediction"></a>
<a id="tocsprediction"></a>

```json
{
  "label": "admiration",
  "score": "0.5"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|score|number(float)|true|none|none|

<h2 id="tocS_Rank">Rank</h2>
<!-- backwards compatibility -->
<a id="schemarank"></a>
<a id="schema_Rank"></a>
<a id="tocSrank"></a>
<a id="tocsrank"></a>

```json
{
  "index": "0",
  "score": "1.0",
  "text": "Deep Learning is ..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer|true|none|none|
|score|number(float)|true|none|none|
|text|string \| null|false|none|none|

<h2 id="tocS_RerankRequest">RerankRequest</h2>
<!-- backwards compatibility -->
<a id="schemarerankrequest"></a>
<a id="schema_RerankRequest"></a>
<a id="tocSrerankrequest"></a>
<a id="tocsrerankrequest"></a>

```json
{
  "query": "What is Deep Learning?",
  "raw_scores": "false",
  "return_text": "false",
  "texts": [
    "Deep Learning is ..."
  ],
  "truncate": "false",
  "truncation_direction": "right"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|none|
|raw_scores|boolean|false|none|none|
|return_text|boolean|false|none|none|
|texts|[string]|true|none|none|
|truncate|boolean \| null|false|none|none|
|truncation_direction|object|false|none|none|

<h2 id="tocS_RerankResponse">RerankResponse</h2>
<!-- backwards compatibility -->
<a id="schemarerankresponse"></a>
<a id="schema_RerankResponse"></a>
<a id="tocSrerankresponse"></a>
<a id="tocsrerankresponse"></a>

```json
[
  {
    "index": "0",
    "score": "1.0",
    "text": "Deep Learning is ..."
  }
]
```

<h2 id="tocS_SimilarityInput">SimilarityInput</h2>
<!-- backwards compatibility -->
<a id="schemasimilarityinput"></a>
<a id="schema_SimilarityInput"></a>
<a id="tocSsimilarityinput"></a>
<a id="tocssimilarityinput"></a>

```json
{
  "sentences": [
    "What is Machine Learning?"
  ],
  "source_sentence": "What is Deep Learning?"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentences|[string]|true|none|A list of strings which will be compared against the source_sentence.|
|source_sentence|string|true|none|The string that you wish to compare the other strings with. This can be a phrase, sentence,<br>or longer passage, depending on the model being used.|

<h2 id="tocS_SimilarityParameters">SimilarityParameters</h2>
<!-- backwards compatibility -->
<a id="schemasimilarityparameters"></a>
<a id="schema_SimilarityParameters"></a>
<a id="tocSsimilarityparameters"></a>
<a id="tocssimilarityparameters"></a>

```json
{
  "prompt_name": "null",
  "truncate": "false",
  "truncation_direction": "right"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prompt_name|string \| null|false|none|The name of the prompt that should be used by for encoding. If not set, no prompt<br>will be applied.<br><br>Must be a key in the `sentence-transformers` configuration `prompts` dictionary.<br><br>For example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},<br>then the sentence "What is the capital of France?" will be encoded as<br>"query: What is the capital of France?" because the prompt text will be prepended before<br>any text to encode.|
|truncate|boolean \| null|false|none|none|
|truncation_direction|object|false|none|none|

<h2 id="tocS_SimilarityRequest">SimilarityRequest</h2>
<!-- backwards compatibility -->
<a id="schemasimilarityrequest"></a>
<a id="schema_SimilarityRequest"></a>
<a id="tocSsimilarityrequest"></a>
<a id="tocssimilarityrequest"></a>

```json
{
  "inputs": {
    "sentences": [
      "What is Machine Learning?"
    ],
    "source_sentence": "What is Deep Learning?"
  },
  "parameters": "null"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[SimilarityInput](#schemasimilarityinput)|true|none|none|
|parameters|object \| null|false|none|none|

<h2 id="tocS_SimilarityResponse">SimilarityResponse</h2>
<!-- backwards compatibility -->
<a id="schemasimilarityresponse"></a>
<a id="schema_SimilarityResponse"></a>
<a id="tocSsimilarityresponse"></a>
<a id="tocssimilarityresponse"></a>

```json
[
  0,
  1,
  0.5
]
```

<h2 id="tocS_SimpleToken">SimpleToken</h2>
<!-- backwards compatibility -->
<a id="schemasimpletoken"></a>
<a id="schema_SimpleToken"></a>
<a id="tocSsimpletoken"></a>
<a id="tocssimpletoken"></a>

```json
{
  "id": 0,
  "special": "false",
  "start": 0,
  "stop": 2,
  "text": "test"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|special|boolean|true|none|none|
|start|integer \| null|false|none|none|
|stop|integer \| null|false|none|none|
|text|string|true|none|none|

<h2 id="tocS_SparseValue">SparseValue</h2>
<!-- backwards compatibility -->
<a id="schemasparsevalue"></a>
<a id="schema_SparseValue"></a>
<a id="tocSsparsevalue"></a>
<a id="tocssparsevalue"></a>

```json
{
  "index": 0,
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer|true|none|none|
|value|number(float)|true|none|none|

<h2 id="tocS_TokenizeInput">TokenizeInput</h2>
<!-- backwards compatibility -->
<a id="schematokenizeinput"></a>
<a id="schema_TokenizeInput"></a>
<a id="tocStokenizeinput"></a>
<a id="tocstokenizeinput"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_TokenizeRequest">TokenizeRequest</h2>
<!-- backwards compatibility -->
<a id="schematokenizerequest"></a>
<a id="schema_TokenizeRequest"></a>
<a id="tocStokenizerequest"></a>
<a id="tocstokenizerequest"></a>

```json
{
  "add_special_tokens": "true",
  "inputs": "string",
  "prompt_name": "null"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_special_tokens|boolean|false|none|none|
|inputs|[TokenizeInput](#schematokenizeinput)|true|none|none|
|prompt_name|string \| null|false|none|The name of the prompt that should be used by for encoding. If not set, no prompt<br>will be applied.<br><br>Must be a key in the `sentence-transformers` configuration `prompts` dictionary.<br><br>For example if ``prompt_name`` is "query" and the ``prompts`` is {"query": "query: ", ...},<br>then the sentence "What is the capital of France?" will be encoded as<br>"query: What is the capital of France?" because the prompt text will be prepended before<br>any text to encode.|

<h2 id="tocS_TokenizeResponse">TokenizeResponse</h2>
<!-- backwards compatibility -->
<a id="schematokenizeresponse"></a>
<a id="schema_TokenizeResponse"></a>
<a id="tocStokenizeresponse"></a>
<a id="tocstokenizeresponse"></a>

```json
[
  [
    {
      "id": 0,
      "special": false,
      "start": 0,
      "stop": 2,
      "text": "test"
    }
  ]
]
```

<h2 id="tocS_TruncationDirection">TruncationDirection</h2>
<!-- backwards compatibility -->
<a id="schematruncationdirection"></a>
<a id="schema_TruncationDirection"></a>
<a id="tocStruncationdirection"></a>
<a id="tocstruncationdirection"></a>

```json
"Left"
```
