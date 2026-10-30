<h1 id="ollama-api">Ollama API v0.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

OpenAPI specification for the Ollama HTTP API

Base URLs:

* <a href="http://localhost:11434">http://localhost:11434</a> - Ollama

License: <a href="https://opensource.org/licenses/MIT">MIT</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="ollama-api-default">Default</h1>

## Answer typed questions

<a id="opIdsystemone"></a>

> Code samples

```bash
curl http://localhost:11434/v1/systemone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": "nimble",
    "state": "Our checkout has returned 500 errors since 9am.",
    "questions": {
      "label": {
        "type": "choice",
        "instructions": "Which label fits this ticket?",
        "criteria": {
          "billing": "Payments and refunds",
          "bug": "Software errors",
          "account": "Login and account access"
        }
      }
    }
  }'
```

`POST /v1/systemone`

Answer choice, yes/no, and scoring questions with a System One model, locally or in Ollama's cloud. Requires Ollama v0.35.0 or later, or v0.40.5 or later for cloud models. See the [decision guide](/capabilities/decision) for examples.


> Body parameter

```json
{
  "model": "nimble",
  "state": "Our checkout has returned 500 errors since 9am.",
  "questions": {
    "label": {
      "type": "choice",
      "instructions": "Which label fits this ticket?",
      "criteria": {
        "billing": "Payments and refunds",
        "bug": "Software errors",
        "account": "Login and account access"
      }
    }
  }
}
```

<h3 id="answer-typed-questions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SystemOneRequest](#schemasystemonerequest)|true|none|
|» model|body|string|true|Model trained for System One, such as nimble, or clef:cloud for Ollama's cloud.|
|» state|body|[SystemOneContent](#schemasystemonecontent)|true|A nonempty string, or an object or array serialized as JSON text. Not interpreted as chat messages or multimodal input.|
|» images|body|[string(byte)]|false|Base64-encoded images shared by all questions, in request order. Requires a model with vision, such as Clef. Models with audio input also accept WAV clips here. URLs and data URLs are not supported.|
|» questions|body|object|true|Named questions about the shared state. Answers are not passed to later questions. Cloud models accept names of up to 100 ASCII letters, digits, `_`, `.`, or `-`.|
|» » **additionalProperties**|body|[SystemOneChoiceQuestion](#schemasystemonechoicequestion) \| [SystemOneNoulQuestion](#schemasystemonenoulquestion) \| [SystemOneScoreQuestion](#schemasystemonescorequestion)|false|none|
|» » » *oneOf*|body|[SystemOneChoiceQuestion](#schemasystemonechoicequestion)|false|none|
|» » » *oneOf*|body|[SystemOneNoulQuestion](#schemasystemonenoulquestion)|false|none|
|» » » *oneOf*|body|[SystemOneScoreQuestion](#schemasystemonescorequestion)|false|none|
|» keep_alive|body|string \| number|false|How long to keep the model loaded after the request, as a duration string (such as 5m) or seconds. Zero unloads after the request; a negative value keeps it loaded. Defaults to the server's keep-alive setting (5m unless configured otherwise).|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "model": "nimble",
  "answers": {
    "label": {
      "type": "choice",
      "choice": "bug",
      "probabilities": {
        "billing": 0.0125,
        "bug": 0.9781,
        "account": 0.0093
      },
      "confidence": 0.8906
    }
  },
  "usage": {
    "input_tokens": 174,
    "output_tokens": 1
  }
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 401 Response

```json
{
  "error": "string"
}
```

> 402 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

> 413 Response

```json
{
  "error": "text and schema must not exceed 64 KiB"
}
```

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="answer-typed-questions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Answers and token usage for all questions. Example probabilities and confidence are rounded to four decimal places; results and usage can vary with the model and server configuration.|[SystemOneResponse](#schemasystemoneresponse)|
|400|Bad Request|Invalid request, unsupported model or runner, or a rendered prompt that exceeds the loaded context or a cloud model's token limit.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|A cloud model was requested without signing in, or with an invalid API key. Through a local server, the response includes a `signin_url`.|[ErrorResponse](#schemaerrorresponse)|
|402|Payment Required|The cloud model isn't included in the Free plan. Add usage credits or upgrade. Also returned when a payment fails.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Model not found. Download a local model before making a request.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|Local text and schema exceed 64 KiB or the request exceeds 32 MiB, or a cloud request exceeds 13 MiB or the model's context window.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Model loading, rendering, or scoring failed.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearerAuth
</aside>

## Generate a response

<a id="opIdgenerate"></a>

> Code samples

```bash
curl http://localhost:11434/api/generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": "gemma4",
    "prompt": "Why is the sky blue?"
  }'
```

`POST /api/generate`

Generates a response for the provided prompt

> Body parameter

```json
{
  "model": "gemma4",
  "prompt": "Why is the sky blue?"
}
```

<h3 id="generate-a-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenerateRequest](#schemageneraterequest)|true|none|
|» model|body|string|true|Model name|
|» prompt|body|string|false|Text for the model to generate a response from|
|» suffix|body|string|false|Used for fill-in-the-middle models, text that appears after the user prompt and before the model response|
|» images|body|[string]|false|none|
|» format|body|string \| object|false|Structured output format for the model to generate a response from. Supports either the string `"json"` or a JSON schema object.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|object|false|none|
|» system|body|string|false|System prompt for the model to generate a response from|
|» stream|body|boolean|false|When true, returns a stream of partial responses|
|» think|body|[ThinkValue](#schemathinkvalue)|false|Controls a model's thinking output. Use `/api/show` to discover the supported values and default for the selected model. `true` requests thinking, `false` requests no thinking output, and `null` uses the model default. String values are model-defined; supported names must match `/api/show` exactly. Numbers are not supported.|
|» raw|body|boolean|false|When true, returns the raw response from the model without any prompt templating|
|» keep_alive|body|string \| number|false|Model keep-alive duration (for example `5m` or `0` to unload immediately)|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|number|false|none|
|» options|body|[ModelOptions](#schemamodeloptions)|false|Runtime options that control text generation|
|» logprobs|body|boolean|false|Whether to return log probabilities of the output tokens|
|» top_logprobs|body|integer|false|Number of most likely tokens to return at each token position when logprobs are enabled|

> Example responses

> 200 Response

```json
{
  "model": "gemma4",
  "created_at": "2025-10-17T23:14:07.414671Z",
  "response": "Hello! How can I help you today?",
  "done": true,
  "done_reason": "stop",
  "total_duration": 174560334,
  "load_duration": 101397084,
  "prompt_eval_count": 11,
  "prompt_eval_duration": 13074791,
  "eval_count": 18,
  "eval_duration": 52479709
}
```

<h3 id="generate-a-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generation responses|[GenerateResponse](#schemagenerateresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a chat message

<a id="opIdchat"></a>

> Code samples

```bash
curl http://localhost:11434/api/chat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": "string",
    "messages": [
      {
        "role": "system",
        "content": "string",
        "images": [
          "string"
        ],
        "tool_calls": [
          {
            "function": {
              "name": "string",
              "description": "string",
              "arguments": {}
            }
          }
        ]
      }
    ],
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "string",
          "description": "string",
          "parameters": {}
        }
      }
    ],
    "format": "json",
    "options": {
      "seed": 0,
      "temperature": 0,
      "top_k": 0,
      "top_p": 0,
      "min_p": 0,
      "stop": "string",
      "num_ctx": 0,
      "num_predict": 0
    },
    "stream": true,
    "think": true,
    "keep_alive": "string",
    "logprobs": true,
    "top_logprobs": 0
  }'
```

`POST /api/chat`

Generate the next chat message in a conversation between a user and an assistant.

> Body parameter

```json
{
  "model": "string",
  "messages": [
    {
      "role": "system",
      "content": "string",
      "images": [
        "string"
      ],
      "tool_calls": [
        {
          "function": {
            "name": "string",
            "description": "string",
            "arguments": {}
          }
        }
      ]
    }
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "string",
        "parameters": {}
      }
    }
  ],
  "format": "json",
  "options": {
    "seed": 0,
    "temperature": 0,
    "top_k": 0,
    "top_p": 0,
    "min_p": 0,
    "stop": "string",
    "num_ctx": 0,
    "num_predict": 0
  },
  "stream": true,
  "think": true,
  "keep_alive": "string",
  "logprobs": true,
  "top_logprobs": 0
}
```

<h3 id="generate-a-chat-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChatRequest](#schemachatrequest)|true|none|
|» model|body|string|true|Model name|
|» messages|body|[[ChatMessage](#schemachatmessage)]|true|Chat history as an array of message objects (each with a role and content)|
|» tools|body|[[ToolDefinition](#schematooldefinition)]|false|Optional list of function tools the model may call during the chat|
|» format|body|string \| object|false|Format to return a response in. Can be `json` or a JSON schema|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|object|false|none|
|» options|body|[ModelOptions](#schemamodeloptions)|false|Runtime options that control text generation|
|» stream|body|boolean|false|none|
|» think|body|[ThinkValue](#schemathinkvalue)|false|Controls a model's thinking output. Use `/api/show` to discover the supported values and default for the selected model. `true` requests thinking, `false` requests no thinking output, and `null` uses the model default. String values are model-defined; supported names must match `/api/show` exactly. Numbers are not supported.|
|» keep_alive|body|string \| number|false|Model keep-alive duration (for example `5m` or `0` to unload immediately)|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|number|false|none|
|» logprobs|body|boolean|false|Whether to return log probabilities of the output tokens|
|» top_logprobs|body|integer|false|Number of most likely tokens to return at each token position when logprobs are enabled|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *oneOf*|json|

> Example responses

> 200 Response

```json
{
  "model": "gemma4",
  "created_at": "2025-10-17T23:14:07.414671Z",
  "message": {
    "role": "assistant",
    "content": "Hello! How can I help you today?"
  },
  "done": true,
  "done_reason": "stop",
  "total_duration": 174560334,
  "load_duration": 101397084,
  "prompt_eval_count": 11,
  "prompt_eval_duration": 13074791,
  "eval_count": 18,
  "eval_duration": 52479709
}
```

<h3 id="generate-a-chat-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Chat response|[ChatResponse](#schemachatresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate embeddings

<a id="opIdembed"></a>

> Code samples

```bash
curl http://localhost:11434/api/embed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": "embeddinggemma",
    "input": "Generate embeddings for this text"
  }'
```

`POST /api/embed`

Creates vector embeddings representing the input text

> Body parameter

```json
{
  "model": "embeddinggemma",
  "input": "Generate embeddings for this text"
}
```

<h3 id="generate-embeddings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmbedRequest](#schemaembedrequest)|true|none|
|» model|body|string|true|Model name|
|» input|body|string \| [string]|true|Text or array of texts to generate embeddings for|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» truncate|body|boolean|false|If true, truncate inputs that exceed the context window. If false, returns an error.|
|» dimensions|body|integer|false|Number of dimensions to generate embeddings for|
|» keep_alive|body|string|false|Model keep-alive duration|
|» options|body|[ModelOptions](#schemamodeloptions)|false|Runtime options that control text generation|

> Example responses

> 200 Response

```json
{
  "model": "embeddinggemma",
  "embeddings": [
    [
      0.010071029,
      -0.0017594862,
      0.05007221,
      0.04692972,
      0.054916814,
      0.008599704,
      0.105441414,
      -0.025878139,
      0.12958129,
      0.031952348
    ]
  ],
  "total_duration": 14143917,
  "load_duration": 1019500,
  "prompt_eval_count": 8
}
```

<h3 id="generate-embeddings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vector embeddings for the input text|[EmbedResponse](#schemaembedresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List models

<a id="opIdlist"></a>

> Code samples

```bash
curl http://localhost:11434/api/tags \
  -H 'Accept: application/json'
```

`GET /api/tags`

Fetch a list of models and their details

> Example responses

> 200 Response

```json
{
  "models": [
    {
      "name": "gemma4",
      "model": "gemma4",
      "modified_at": "2025-10-03T23:34:03.409490317-07:00",
      "size": 9608350245,
      "digest": "c6eb396dbd5992bbe3f5cdb947e8bbc0ee413d7c17e2beaae69f5d569cf982eb",
      "details": {
        "format": "gguf",
        "family": "gemma4",
        "families": [
          "gemma4"
        ],
        "parameter_size": "8.0B",
        "quantization_level": "Q4_K_M"
      }
    }
  ]
}
```

<h3 id="list-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List available models|[ListResponse](#schemalistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List running models

<a id="opIdps"></a>

> Code samples

```bash
curl http://localhost:11434/api/ps \
  -H 'Accept: application/json'
```

`GET /api/ps`

Retrieve a list of models that are currently running

> Example responses

> 200 Response

```json
{
  "models": [
    {
      "name": "gemma4",
      "model": "gemma4",
      "size": 6591830464,
      "digest": "c6eb396dbd5992bbe3f5cdb947e8bbc0ee413d7c17e2beaae69f5d569cf982eb",
      "details": {
        "parent_model": "",
        "format": "gguf",
        "family": "gemma4",
        "families": [
          "gemma4"
        ],
        "parameter_size": "8.0B",
        "quantization_level": "Q4_K_M"
      },
      "expires_at": "2025-10-17T16:47:07.93355-07:00",
      "size_vram": 5333539264,
      "context_length": 4096
    }
  ]
}
```

<h3 id="list-running-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Models currently loaded into memory|[PsResponse](#schemapsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Show model details

<a id="opIdshow"></a>

> Code samples

```bash
curl http://localhost:11434/api/show \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": "gemma4"
  }'
```

`POST /api/show`

> Body parameter

```json
{
  "model": "gemma4"
}
```

<h3 id="show-model-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ShowRequest](#schemashowrequest)|true|none|
|» model|body|string|true|Model name to show|
|» verbose|body|boolean|false|If true, includes large verbose fields in the response.|

> Example responses

> 200 Response

```json
{
  "parameters": "temperature 0.7\nnum_ctx 2048",
  "license": "Gemma Terms of Use \n\nLast modified: February 21, 2024...",
  "capabilities": [
    "completion",
    "thinking",
    "vision"
  ],
  "thinking": {
    "values": [
      false,
      true
    ],
    "default": true
  },
  "modified_at": "2025-08-14T15:49:43.634137516-07:00",
  "details": {
    "parent_model": "",
    "format": "gguf",
    "family": "gemma4",
    "families": [
      "gemma4"
    ],
    "parameter_size": "8.0B",
    "quantization_level": "Q4_K_M"
  },
  "model_info": {
    "gemma4.attention.head_count": 8,
    "gemma4.attention.head_count_kv": 2,
    "gemma4.attention.key_length": 512,
    "gemma4.attention.key_length_swa": 256,
    "gemma4.attention.layer_norm_rms_epsilon": 0.000001,
    "gemma4.attention.shared_kv_layers": 18,
    "gemma4.attention.sliding_window": 512,
    "gemma4.attention.value_length": 512,
    "gemma4.attention.value_length_swa": 256,
    "gemma4.audio.attention.head_count": 8,
    "gemma4.audio.attention.layer_norm_epsilon": 0.000001,
    "gemma4.audio.block_count": 12,
    "gemma4.audio.conv_kernel_size": 5,
    "gemma4.audio.embedding_length": 1024,
    "gemma4.audio.feed_forward_length": 4096,
    "gemma4.block_count": 42,
    "gemma4.context_length": 131072,
    "gemma4.embedding_length": 2560,
    "gemma4.embedding_length_per_layer_input": 256,
    "gemma4.feed_forward_length": 10240,
    "gemma4.final_logit_softcapping": 30,
    "gemma4.rope.dimension_count": 512,
    "gemma4.rope.dimension_count_swa": 256,
    "gemma4.rope.freq_base": 1000000,
    "gemma4.rope.freq_base_swa": 10000,
    "gemma4.vision.attention.head_count": 12,
    "gemma4.vision.attention.layer_norm_epsilon": 0.000001,
    "gemma4.vision.block_count": 16,
    "gemma4.vision.embedding_length": 768,
    "gemma4.vision.feed_forward_length": 3072,
    "gemma4.vision.num_channels": 3,
    "gemma4.vision.patch_size": 16,
    "gemma4.vision.projector.scale_factor": 3,
    "general.architecture": "gemma4",
    "general.file_type": 15,
    "general.quantization_version": 2,
    "tokenizer.ggml.add_bos_token": false,
    "tokenizer.ggml.add_eos_token": false,
    "tokenizer.ggml.add_mask_token": false,
    "tokenizer.ggml.add_padding_token": false,
    "tokenizer.ggml.add_unknown_token": false,
    "tokenizer.ggml.bos_token_id": 2,
    "tokenizer.ggml.eos_token_id": 1,
    "tokenizer.ggml.eos_token_ids": [
      1,
      106,
      50
    ],
    "tokenizer.ggml.mask_token_id": 4,
    "tokenizer.ggml.merges": null,
    "tokenizer.ggml.model": "llama",
    "tokenizer.ggml.padding_token_id": 0,
    "tokenizer.ggml.pre": "gemma4",
    "tokenizer.ggml.scores": null,
    "tokenizer.ggml.token_type": null,
    "tokenizer.ggml.tokens": null,
    "tokenizer.ggml.unknown_token_id": 3
  }
}
```

<h3 id="show-model-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Model information|[ShowResponse](#schemashowresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a model

<a id="opIdcreate"></a>

> Code samples

```bash
curl http://localhost:11434/api/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": "mario",
    "from": "gemma4",
    "system": "You are Mario from Super Mario Bros."
  }'
```

`POST /api/create`

> Body parameter

```json
{
  "model": "mario",
  "from": "gemma4",
  "system": "You are Mario from Super Mario Bros."
}
```

<h3 id="create-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateRequest](#schemacreaterequest)|true|none|
|» model|body|string|true|Name for the model to create|
|» from|body|string|false|Existing model to create from|
|» template|body|string|false|Prompt template to use for the model|
|» renderer|body|string|false|Name of the renderer for the model|
|» parser|body|string|false|Name of the parser for the model|
|» files|body|object|false|Source file names mapped to their SHA-256 digests. Split GGUF models must include each shard under its original split filename.|
|» » **additionalProperties**|body|string|false|none|
|» draft_files|body|object|false|Draft source file names mapped to their SHA-256 digests|
|» » **additionalProperties**|body|string|false|none|
|» license|body|string \| [string]|false|License string or list of licenses for the model|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» system|body|string|false|System prompt to embed in the model|
|» parameters|body|object|false|Key-value parameters for the model|
|» messages|body|[[ChatMessage](#schemachatmessage)]|false|Message history to use for the model|
|» quantize|body|string|false|Quantization level to apply during import (e.g. `nvfp4`)|
|» draft_quantize|body|string|false|Quantization level to apply to draft weights during import|
|» requires|body|string|false|Minimum Ollama version required by the model|
|» capabilities|body|[string]|false|Capabilities to add without removing inherited or inferred capabilities (e.g. `decision` for compatible decision models)|
|» stream|body|boolean|false|Stream status updates|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="create-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stream of create status updates|[StatusResponse](#schemastatusresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Push a blob

<a id="opIdcreateBlob"></a>

> Code samples

```bash
curl http://localhost:11434/api/blobs/string \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  --data-binary '@/path/to/file'
```

`POST /api/blobs/{digest}`

<h3 id="push-a-blob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|digest|path|string|true|SHA256 digest identifier, prefixed with `sha256:`|
|body|body|string(binary)|true|none|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="push-a-blob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Blob already exists|None|
|201|Created|Blob created|None|
|400|Bad Request|Invalid digest or blob content|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Failed to write blob|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Check if a blob exists

<a id="opIdheadBlob"></a>

> Code samples

```bash
curl http://localhost:11434/api/blobs/string \
  -X HEAD \
  -H 'Accept: application/json'
```

`HEAD /api/blobs/{digest}`

<h3 id="check-if-a-blob-exists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|digest|path|string|true|SHA256 digest identifier, prefixed with `sha256:`|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="check-if-a-blob-exists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Blob exists|None|
|400|Bad Request|Invalid digest|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Blob not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Failed to inspect blob|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Copy a model

<a id="opIdcopy"></a>

> Code samples

```bash
curl http://localhost:11434/api/copy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "source": "gemma4",
    "destination": "gemma4-backup"
  }'
```

`POST /api/copy`

> Body parameter

```json
{
  "source": "gemma4",
  "destination": "gemma4-backup"
}
```

<h3 id="copy-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CopyRequest](#schemacopyrequest)|true|none|
|» source|body|string|true|Existing model name to copy from|
|» destination|body|string|true|New model name to create|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="copy-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Model successfully copied|[StatusResponse](#schemastatusresponse)|
|400|Bad Request|Model could not be copied|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Source model not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Pull a model

<a id="opIdpull"></a>

> Code samples

```bash
curl http://localhost:11434/api/pull \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": "gemma4"
  }'
```

`POST /api/pull`

> Body parameter

```json
{
  "model": "gemma4"
}
```

<h3 id="pull-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PullRequest](#schemapullrequest)|true|none|
|» model|body|string|true|Name of the model to download|
|» insecure|body|boolean|false|Allow downloading over insecure connections|
|» stream|body|boolean|false|Stream progress updates|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="pull-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pull status updates.|[StatusResponse](#schemastatusresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Push a model

<a id="opIdpush"></a>

> Code samples

```bash
curl http://localhost:11434/api/push \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": "my-username/my-model"
  }'
```

`POST /api/push`

> Body parameter

```json
{
  "model": "my-username/my-model"
}
```

<h3 id="push-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PushRequest](#schemapushrequest)|true|none|
|» model|body|string|true|Name of the model to publish|
|» insecure|body|boolean|false|Allow publishing over insecure connections|
|» stream|body|boolean|false|Stream progress updates|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="push-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Push status updates.|[StatusResponse](#schemastatusresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a model

<a id="opIddelete"></a>

> Code samples

```bash
curl http://localhost:11434/api/delete \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "gemma4"
  }'
```

`DELETE /api/delete`

> Body parameter

```json
{
  "model": "gemma4"
}
```

<h3 id="delete-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteRequest](#schemadeleterequest)|true|none|
|» model|body|string|true|Model name to delete|

<h3 id="delete-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Model successfully deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get version

<a id="opIdversion"></a>

> Code samples

```bash
curl http://localhost:11434/api/version \
  -H 'Accept: application/json'
```

`GET /api/version`

Retrieve the version of the Ollama

> Example responses

> 200 Response

```json
{
  "version": "0.12.6"
}
```

<h3 id="get-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Version information|[VersionResponse](#schemaversionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Cloud usage

<a id="opIdusage"></a>

> Code samples

```bash
curl http://localhost:11434/api/usage \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/usage`

Usage statistics for cloud inference, web search, and web fetch.

<h3 id="cloud-usage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|range|query|string|false|Completed UTC hours or days to include, plus the current partial hour or day.|
|scope|query|string|false|Your requests, or your team's requests. Team scope requires being a team admin.|
|group_by|query|string|false|How to group usage within totals and buckets. Supported values: model.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|range|24h|
|range|7d|
|range|30d|
|scope|self|
|scope|team|
|group_by|model|

> Example responses

> 200 Response

```json
{
  "range": "24h",
  "scope": "self",
  "granularity": "hour",
  "group_by": "model",
  "from": "1970-01-01T00:00:00Z",
  "until": "1970-01-01T00:00:00Z",
  "totals": {
    "request_count": 0,
    "usage_usd": 0,
    "input_tokens": 0,
    "cached_input_tokens": 0,
    "output_tokens": 0,
    "groups": [
      {
        "request_count": 0,
        "usage_usd": 0,
        "input_tokens": 0,
        "cached_input_tokens": 0,
        "output_tokens": 0,
        "model": "string"
      }
    ],
    "remainder": {
      "request_count": 0,
      "usage_usd": 0,
      "input_tokens": 0,
      "cached_input_tokens": 0,
      "output_tokens": 0
    }
  },
  "buckets": [
    {
      "request_count": 0,
      "usage_usd": 0,
      "input_tokens": 0,
      "cached_input_tokens": 0,
      "output_tokens": 0,
      "groups": [
        {
          "request_count": 0,
          "usage_usd": 0,
          "input_tokens": 0,
          "cached_input_tokens": 0,
          "output_tokens": 0,
          "model": "string"
        }
      ],
      "remainder": {
        "request_count": 0,
        "usage_usd": 0,
        "input_tokens": 0,
        "cached_input_tokens": 0,
        "output_tokens": 0
      },
      "from": "1970-01-01T00:00:00Z",
      "until": "1970-01-01T00:00:00Z",
      "partial": true
    }
  ]
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 401 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 429 Response

```json
{
  "error": "string"
}
```

> 503 Response

```json
{
  "error": "string"
}
```

<h3 id="cloud-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Usage for the selected range and scope.|[UsageResponse](#schemausageresponse)|
|400|Bad Request|Invalid query parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Invalid credentials.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Account suspended or team scope requested without team admin access.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests.|[ErrorResponse](#schemaerrorresponse)|
|503|Service Unavailable|Usage reporting is temporarily unavailable.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds to wait before retrying.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Balance

<a id="opIdbalance"></a>

> Code samples

```bash
curl http://localhost:11434/api/balance \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/balance`

Check your remaining usage credits.

> Example responses

> 200 Response

```json
{
  "included": {
    "balance_usd": 0,
    "allowance_usd": 0,
    "period": {
      "from": "1970-01-01T00:00:00Z",
      "until": "1970-01-01T00:00:00Z"
    }
  },
  "purchased": {
    "balance_usd": 0
  }
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 401 Response

```json
{
  "error": "string"
}
```

> 403 Response

```json
{
  "error": "string"
}
```

> 429 Response

```json
{
  "error": "string"
}
```

> 503 Response

```json
{
  "error": "string"
}
```

<h3 id="balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current included and purchased balances.|[BalanceResponse](#schemabalanceresponse)|
|400|Bad Request|Invalid query parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Invalid credentials.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Account suspended.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests.|[ErrorResponse](#schemaerrorresponse)|
|503|Service Unavailable|Balance reporting is temporarily unavailable.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds to wait before retrying.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_ModelOptions">ModelOptions</h2>
<!-- backwards compatibility -->
<a id="schemamodeloptions"></a>
<a id="schema_ModelOptions"></a>
<a id="tocSmodeloptions"></a>
<a id="tocsmodeloptions"></a>

```json
{
  "seed": 0,
  "temperature": 0,
  "top_k": 0,
  "top_p": 0,
  "min_p": 0,
  "stop": "string",
  "num_ctx": 0,
  "num_predict": 0
}
```

Runtime options that control text generation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seed|integer|false|none|Random seed used for reproducible outputs|
|temperature|number(float)|false|none|Controls randomness in generation (higher = more random)|
|top_k|integer|false|none|Limits next token selection to the K most likely|
|top_p|number(float)|false|none|Cumulative probability threshold for nucleus sampling|
|min_p|number(float)|false|none|Minimum probability threshold for token selection|
|stop|string \| [string]|false|none|Stop sequences that will halt generation|
|num_ctx|integer|false|none|Context length size (number of tokens)|
|num_predict|integer|false|none|Maximum number of tokens to generate|

<h2 id="tocS_GenerateRequest">GenerateRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneraterequest"></a>
<a id="schema_GenerateRequest"></a>
<a id="tocSgeneraterequest"></a>
<a id="tocsgeneraterequest"></a>

```json
{
  "model": "string",
  "prompt": "string",
  "suffix": "string",
  "images": [
    "string"
  ],
  "format": "string",
  "system": "string",
  "stream": true,
  "think": true,
  "raw": true,
  "keep_alive": "string",
  "options": {
    "seed": 0,
    "temperature": 0,
    "top_k": 0,
    "top_p": 0,
    "min_p": 0,
    "stop": "string",
    "num_ctx": 0,
    "num_predict": 0
  },
  "logprobs": true,
  "top_logprobs": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|Model name|
|prompt|string|false|none|Text for the model to generate a response from|
|suffix|string|false|none|Used for fill-in-the-middle models, text that appears after the user prompt and before the model response|
|images|[string]|false|none|none|
|format|string \| object|false|none|Structured output format for the model to generate a response from. Supports either the string `"json"` or a JSON schema object.|
|system|string|false|none|System prompt for the model to generate a response from|
|stream|boolean|false|none|When true, returns a stream of partial responses|
|think|[ThinkValue](#schemathinkvalue)|false|none|Controls a model's thinking output. Use `/api/show` to discover the supported values and default for the selected model. `true` requests thinking, `false` requests no thinking output, and `null` uses the model default. String values are model-defined; supported names must match `/api/show` exactly. Numbers are not supported.|
|raw|boolean|false|none|When true, returns the raw response from the model without any prompt templating|
|keep_alive|string \| number|false|none|Model keep-alive duration (for example `5m` or `0` to unload immediately)|
|options|[ModelOptions](#schemamodeloptions)|false|none|Runtime options that control text generation|
|logprobs|boolean|false|none|Whether to return log probabilities of the output tokens|
|top_logprobs|integer|false|none|Number of most likely tokens to return at each token position when logprobs are enabled|

<h2 id="tocS_GenerateResponse">GenerateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateresponse"></a>
<a id="schema_GenerateResponse"></a>
<a id="tocSgenerateresponse"></a>
<a id="tocsgenerateresponse"></a>

```json
{
  "model": "string",
  "created_at": "string",
  "response": "string",
  "thinking": "string",
  "done": true,
  "done_reason": "string",
  "total_duration": 0,
  "load_duration": 0,
  "prompt_eval_count": 0,
  "prompt_eval_cached_count": 0,
  "prompt_eval_duration": 0,
  "eval_count": 0,
  "eval_duration": 0,
  "logprobs": [
    {
      "token": "string",
      "logprob": 0,
      "bytes": [
        0
      ],
      "top_logprobs": [
        {
          "token": "string",
          "logprob": 0,
          "bytes": [
            0
          ]
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|Model name|
|created_at|string|false|none|ISO 8601 timestamp of response creation|
|response|string|false|none|The model's generated text response|
|thinking|string|false|none|The model's generated thinking output|
|done|boolean|false|none|Indicates whether generation has finished|
|done_reason|string|false|none|Reason the generation stopped|
|total_duration|integer|false|none|Time spent generating the response in nanoseconds|
|load_duration|integer|false|none|Time spent loading the model in nanoseconds|
|prompt_eval_count|integer|false|none|Number of input tokens in the prompt|
|prompt_eval_cached_count|integer|false|none|Number of prompt tokens read from the cache|
|prompt_eval_duration|integer|false|none|Time spent evaluating uncached prompt tokens in nanoseconds|
|eval_count|integer|false|none|Number of output tokens generated in the response|
|eval_duration|integer|false|none|Time spent generating tokens in nanoseconds|
|logprobs|[[Logprob](#schemalogprob)]|false|none|Log probability information for the generated tokens when logprobs are enabled|

<h2 id="tocS_GenerateStreamEvent">GenerateStreamEvent</h2>
<!-- backwards compatibility -->
<a id="schemageneratestreamevent"></a>
<a id="schema_GenerateStreamEvent"></a>
<a id="tocSgeneratestreamevent"></a>
<a id="tocsgeneratestreamevent"></a>

```json
{
  "model": "string",
  "created_at": "string",
  "response": "string",
  "thinking": "string",
  "done": true,
  "done_reason": "string",
  "total_duration": 0,
  "load_duration": 0,
  "prompt_eval_count": 0,
  "prompt_eval_cached_count": 0,
  "prompt_eval_duration": 0,
  "eval_count": 0,
  "eval_duration": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|Model name|
|created_at|string|false|none|ISO 8601 timestamp of response creation|
|response|string|false|none|The model's generated text response for this chunk|
|thinking|string|false|none|The model's generated thinking output for this chunk|
|done|boolean|false|none|Indicates whether the stream has finished|
|done_reason|string|false|none|Reason streaming finished|
|total_duration|integer|false|none|Time spent generating the response in nanoseconds|
|load_duration|integer|false|none|Time spent loading the model in nanoseconds|
|prompt_eval_count|integer|false|none|Number of input tokens in the prompt|
|prompt_eval_cached_count|integer|false|none|Number of prompt tokens read from the cache|
|prompt_eval_duration|integer|false|none|Time spent evaluating uncached prompt tokens in nanoseconds|
|eval_count|integer|false|none|Number of output tokens generated in the response|
|eval_duration|integer|false|none|Time spent generating tokens in nanoseconds|

<h2 id="tocS_ChatMessage">ChatMessage</h2>
<!-- backwards compatibility -->
<a id="schemachatmessage"></a>
<a id="schema_ChatMessage"></a>
<a id="tocSchatmessage"></a>
<a id="tocschatmessage"></a>

```json
{
  "role": "system",
  "content": "string",
  "images": [
    "string"
  ],
  "tool_calls": [
    {
      "function": {
        "name": "string",
        "description": "string",
        "arguments": {}
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|Author of the message.|
|content|string|true|none|Message text content|
|images|[string]|false|none|Optional list of inline images for multimodal models|
|tool_calls|[[ToolCall](#schematoolcall)]|false|none|Tool call requests produced by the model|

#### Enumerated Values

|Property|Value|
|---|---|
|role|system|
|role|user|
|role|assistant|
|role|tool|

<h2 id="tocS_ToolCall">ToolCall</h2>
<!-- backwards compatibility -->
<a id="schematoolcall"></a>
<a id="schema_ToolCall"></a>
<a id="tocStoolcall"></a>
<a id="tocstoolcall"></a>

```json
{
  "function": {
    "name": "string",
    "description": "string",
    "arguments": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|function|object|false|none|none|

<h2 id="tocS_ToolDefinition">ToolDefinition</h2>
<!-- backwards compatibility -->
<a id="schematooldefinition"></a>
<a id="schema_ToolDefinition"></a>
<a id="tocStooldefinition"></a>
<a id="tocstooldefinition"></a>

```json
{
  "type": "function",
  "function": {
    "name": "string",
    "description": "string",
    "parameters": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of tool (always `function`)|
|function|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|function|

<h2 id="tocS_ChatRequest">ChatRequest</h2>
<!-- backwards compatibility -->
<a id="schemachatrequest"></a>
<a id="schema_ChatRequest"></a>
<a id="tocSchatrequest"></a>
<a id="tocschatrequest"></a>

```json
{
  "model": "string",
  "messages": [
    {
      "role": "system",
      "content": "string",
      "images": [
        "string"
      ],
      "tool_calls": [
        {
          "function": {
            "name": "string",
            "description": "string",
            "arguments": {}
          }
        }
      ]
    }
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "string",
        "parameters": {}
      }
    }
  ],
  "format": "json",
  "options": {
    "seed": 0,
    "temperature": 0,
    "top_k": 0,
    "top_p": 0,
    "min_p": 0,
    "stop": "string",
    "num_ctx": 0,
    "num_predict": 0
  },
  "stream": true,
  "think": true,
  "keep_alive": "string",
  "logprobs": true,
  "top_logprobs": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|Model name|
|messages|[[ChatMessage](#schemachatmessage)]|true|none|Chat history as an array of message objects (each with a role and content)|
|tools|[[ToolDefinition](#schematooldefinition)]|false|none|Optional list of function tools the model may call during the chat|
|format|string \| object|false|none|Format to return a response in. Can be `json` or a JSON schema|
|options|[ModelOptions](#schemamodeloptions)|false|none|Runtime options that control text generation|
|stream|boolean|false|none|none|
|think|[ThinkValue](#schemathinkvalue)|false|none|Controls a model's thinking output. Use `/api/show` to discover the supported values and default for the selected model. `true` requests thinking, `false` requests no thinking output, and `null` uses the model default. String values are model-defined; supported names must match `/api/show` exactly. Numbers are not supported.|
|keep_alive|string \| number|false|none|Model keep-alive duration (for example `5m` or `0` to unload immediately)|
|logprobs|boolean|false|none|Whether to return log probabilities of the output tokens|
|top_logprobs|integer|false|none|Number of most likely tokens to return at each token position when logprobs are enabled|

<h2 id="tocS_ChatResponse">ChatResponse</h2>
<!-- backwards compatibility -->
<a id="schemachatresponse"></a>
<a id="schema_ChatResponse"></a>
<a id="tocSchatresponse"></a>
<a id="tocschatresponse"></a>

```json
{
  "model": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "message": {
    "role": "assistant",
    "content": "string",
    "thinking": "string",
    "tool_calls": [
      {
        "function": {
          "name": "string",
          "description": "string",
          "arguments": {}
        }
      }
    ],
    "images": [
      "string"
    ]
  },
  "done": true,
  "done_reason": "string",
  "total_duration": 0,
  "load_duration": 0,
  "prompt_eval_count": 0,
  "prompt_eval_cached_count": 0,
  "prompt_eval_duration": 0,
  "eval_count": 0,
  "eval_duration": 0,
  "logprobs": [
    {
      "token": "string",
      "logprob": 0,
      "bytes": [
        0
      ],
      "top_logprobs": [
        {
          "token": "string",
          "logprob": 0,
          "bytes": [
            0
          ]
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|Model name used to generate this message|
|created_at|string(date-time)|false|none|Timestamp of response creation (ISO 8601)|
|message|object|false|none|none|
|done|boolean|false|none|Indicates whether the chat response has finished|
|done_reason|string|false|none|Reason the response finished|
|total_duration|integer|false|none|Total time spent generating in nanoseconds|
|load_duration|integer|false|none|Time spent loading the model in nanoseconds|
|prompt_eval_count|integer|false|none|Number of tokens in the prompt|
|prompt_eval_cached_count|integer|false|none|Number of prompt tokens read from the cache|
|prompt_eval_duration|integer|false|none|Time spent evaluating uncached prompt tokens in nanoseconds|
|eval_count|integer|false|none|Number of tokens generated in the response|
|eval_duration|integer|false|none|Time spent generating tokens in nanoseconds|
|logprobs|[[Logprob](#schemalogprob)]|false|none|Log probability information for the generated tokens when logprobs are enabled|

<h2 id="tocS_ChatStreamEvent">ChatStreamEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatstreamevent"></a>
<a id="schema_ChatStreamEvent"></a>
<a id="tocSchatstreamevent"></a>
<a id="tocschatstreamevent"></a>

```json
{
  "model": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "message": {
    "role": "string",
    "content": "string",
    "thinking": "string",
    "tool_calls": [
      {
        "function": {
          "name": "string",
          "description": "string",
          "arguments": {}
        }
      }
    ],
    "images": [
      "string"
    ]
  },
  "done": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|Model name used for this stream event|
|created_at|string(date-time)|false|none|When this chunk was created (ISO 8601)|
|message|object|false|none|none|
|done|boolean|false|none|True for the final event in the stream|

<h2 id="tocS_ThinkValue">ThinkValue</h2>
<!-- backwards compatibility -->
<a id="schemathinkvalue"></a>
<a id="schema_ThinkValue"></a>
<a id="tocSthinkvalue"></a>
<a id="tocsthinkvalue"></a>

```json
true
```

Controls a model's thinking output. Use `/api/show` to discover the supported values and default for the selected model. `true` requests thinking, `false` requests no thinking output, and `null` uses the model default. String values are model-defined; supported names must match `/api/show` exactly. Numbers are not supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|boolean|false|none|none|
|*oneOf*|string|false|none|none|
|*oneOf*|null|false|none|none|

<h2 id="tocS_Thinking">Thinking</h2>
<!-- backwards compatibility -->
<a id="schemathinking"></a>
<a id="schema_Thinking"></a>
<a id="tocSthinking"></a>
<a id="tocsthinking"></a>

```json
{
  "values": [
    true
  ],
  "default": true
}
```

Thinking controls advertised by a model. Models without thinking metadata omit this field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[boolean \| string]|true|none|Values explicitly supported by the model's `think` request field. Booleans represent on/off controls and strings represent model-defined levels. An array containing only `false` identifies a model without thinking support.|
|default|boolean \| string|true|none|Value used when `think` is not set. For models that use this metadata for named thinking levels, unsupported names resolve to this default.|

<h2 id="tocS_StatusEvent">StatusEvent</h2>
<!-- backwards compatibility -->
<a id="schemastatusevent"></a>
<a id="schema_StatusEvent"></a>
<a id="tocSstatusevent"></a>
<a id="tocsstatusevent"></a>

```json
{
  "status": "string",
  "digest": "string",
  "total": 0,
  "completed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Human-readable status message|
|digest|string|false|none|Content digest associated with the status, if applicable|
|total|integer|false|none|Total number of bytes expected for the operation|
|completed|integer|false|none|Number of bytes transferred so far|

<h2 id="tocS_StatusResponse">StatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatusresponse"></a>
<a id="schema_StatusResponse"></a>
<a id="tocSstatusresponse"></a>
<a id="tocsstatusresponse"></a>

```json
{
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Current status message|

<h2 id="tocS_EmbedRequest">EmbedRequest</h2>
<!-- backwards compatibility -->
<a id="schemaembedrequest"></a>
<a id="schema_EmbedRequest"></a>
<a id="tocSembedrequest"></a>
<a id="tocsembedrequest"></a>

```json
{
  "model": "string",
  "input": "string",
  "truncate": true,
  "dimensions": 0,
  "keep_alive": "string",
  "options": {
    "seed": 0,
    "temperature": 0,
    "top_k": 0,
    "top_p": 0,
    "min_p": 0,
    "stop": "string",
    "num_ctx": 0,
    "num_predict": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|Model name|
|input|string \| [string]|true|none|Text or array of texts to generate embeddings for|
|truncate|boolean|false|none|If true, truncate inputs that exceed the context window. If false, returns an error.|
|dimensions|integer|false|none|Number of dimensions to generate embeddings for|
|keep_alive|string|false|none|Model keep-alive duration|
|options|[ModelOptions](#schemamodeloptions)|false|none|Runtime options that control text generation|

<h2 id="tocS_EmbedResponse">EmbedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaembedresponse"></a>
<a id="schema_EmbedResponse"></a>
<a id="tocSembedresponse"></a>
<a id="tocsembedresponse"></a>

```json
{
  "model": "string",
  "embeddings": [
    [
      0
    ]
  ],
  "total_duration": 0,
  "load_duration": 0,
  "prompt_eval_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|Model that produced the embeddings|
|embeddings|[[number]]|false|none|Array of vector embeddings|
|total_duration|integer|false|none|Total time spent generating in nanoseconds|
|load_duration|integer|false|none|Load time in nanoseconds|
|prompt_eval_count|integer|false|none|Number of input tokens processed to generate embeddings|

<h2 id="tocS_CreateRequest">CreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterequest"></a>
<a id="schema_CreateRequest"></a>
<a id="tocScreaterequest"></a>
<a id="tocscreaterequest"></a>

```json
{
  "model": "string",
  "from": "string",
  "template": "string",
  "renderer": "string",
  "parser": "string",
  "files": {
    "property1": "string",
    "property2": "string"
  },
  "draft_files": {
    "property1": "string",
    "property2": "string"
  },
  "license": "string",
  "system": "string",
  "parameters": {},
  "messages": [
    {
      "role": "system",
      "content": "string",
      "images": [
        "string"
      ],
      "tool_calls": [
        {
          "function": {
            "name": "string",
            "description": "string",
            "arguments": {}
          }
        }
      ]
    }
  ],
  "quantize": "string",
  "draft_quantize": "string",
  "requires": "string",
  "capabilities": [
    "string"
  ],
  "stream": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|Name for the model to create|
|from|string|false|none|Existing model to create from|
|template|string|false|none|Prompt template to use for the model|
|renderer|string|false|none|Name of the renderer for the model|
|parser|string|false|none|Name of the parser for the model|
|files|object|false|none|Source file names mapped to their SHA-256 digests. Split GGUF models must include each shard under its original split filename.|
|draft_files|object|false|none|Draft source file names mapped to their SHA-256 digests|
|license|string \| [string]|false|none|License string or list of licenses for the model|
|system|string|false|none|System prompt to embed in the model|
|parameters|object|false|none|Key-value parameters for the model|
|messages|[[ChatMessage](#schemachatmessage)]|false|none|Message history to use for the model|
|quantize|string|false|none|Quantization level to apply during import (e.g. `nvfp4`)|
|draft_quantize|string|false|none|Quantization level to apply to draft weights during import|
|requires|string|false|none|Minimum Ollama version required by the model|
|capabilities|[string]|false|none|Capabilities to add without removing inherited or inferred capabilities (e.g. `decision` for compatible decision models)|
|stream|boolean|false|none|Stream status updates|

<h2 id="tocS_CopyRequest">CopyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacopyrequest"></a>
<a id="schema_CopyRequest"></a>
<a id="tocScopyrequest"></a>
<a id="tocscopyrequest"></a>

```json
{
  "source": "string",
  "destination": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string|true|none|Existing model name to copy from|
|destination|string|true|none|New model name to create|

<h2 id="tocS_DeleteRequest">DeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterequest"></a>
<a id="schema_DeleteRequest"></a>
<a id="tocSdeleterequest"></a>
<a id="tocsdeleterequest"></a>

```json
{
  "model": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|Model name to delete|

<h2 id="tocS_PullRequest">PullRequest</h2>
<!-- backwards compatibility -->
<a id="schemapullrequest"></a>
<a id="schema_PullRequest"></a>
<a id="tocSpullrequest"></a>
<a id="tocspullrequest"></a>

```json
{
  "model": "string",
  "insecure": true,
  "stream": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|Name of the model to download|
|insecure|boolean|false|none|Allow downloading over insecure connections|
|stream|boolean|false|none|Stream progress updates|

<h2 id="tocS_PushRequest">PushRequest</h2>
<!-- backwards compatibility -->
<a id="schemapushrequest"></a>
<a id="schema_PushRequest"></a>
<a id="tocSpushrequest"></a>
<a id="tocspushrequest"></a>

```json
{
  "model": "string",
  "insecure": true,
  "stream": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|Name of the model to publish|
|insecure|boolean|false|none|Allow publishing over insecure connections|
|stream|boolean|false|none|Stream progress updates|

<h2 id="tocS_ShowRequest">ShowRequest</h2>
<!-- backwards compatibility -->
<a id="schemashowrequest"></a>
<a id="schema_ShowRequest"></a>
<a id="tocSshowrequest"></a>
<a id="tocsshowrequest"></a>

```json
{
  "model": "string",
  "verbose": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|Model name to show|
|verbose|boolean|false|none|If true, includes large verbose fields in the response.|

<h2 id="tocS_ShowResponse">ShowResponse</h2>
<!-- backwards compatibility -->
<a id="schemashowresponse"></a>
<a id="schema_ShowResponse"></a>
<a id="tocSshowresponse"></a>
<a id="tocsshowresponse"></a>

```json
{
  "thinking": {
    "values": [
      true
    ],
    "default": true
  },
  "parameters": "string",
  "license": "string",
  "modified_at": "string",
  "details": {},
  "template": "string",
  "renderer": "string",
  "parser": "string",
  "template_source": "string",
  "capabilities": [
    "string"
  ],
  "model_info": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thinking|[Thinking](#schemathinking)|false|none|Thinking controls advertised by a model. Models without thinking metadata omit this field.|
|parameters|string|false|none|Model parameter settings serialized as text|
|license|string|false|none|The license of the model|
|modified_at|string|false|none|Last modified timestamp in ISO 8601 format|
|details|object|false|none|High-level model details|
|template|string|false|none|The template used by the model to render prompts|
|renderer|string|false|none|The effective chat renderer of the model (aliases resolved), when one is set|
|parser|string|false|none|The output parser configured on the model, when one is set|
|template_source|string|false|none|Where the chat prompt actually comes from; one of `renderer_parser`, `renderer`, `parser` (a Go renderer runs and any packaged template is inert), `harmony`, `go_template`, `gguf_chat_template` (the runner renders the GGUF's embedded jinja), or `none`|
|capabilities|[string]|false|none|List of supported features|
|model_info|object|false|none|Additional model metadata|

<h2 id="tocS_ModelSummary">ModelSummary</h2>
<!-- backwards compatibility -->
<a id="schemamodelsummary"></a>
<a id="schema_ModelSummary"></a>
<a id="tocSmodelsummary"></a>
<a id="tocsmodelsummary"></a>

```json
{
  "name": "string",
  "model": "string",
  "remote_model": "string",
  "remote_host": "string",
  "modified_at": "string",
  "size": 0,
  "digest": "string",
  "details": {
    "format": "string",
    "family": "string",
    "families": [
      "string"
    ],
    "parameter_size": "string",
    "quantization_level": "string"
  }
}
```

Summary information for a locally available model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Model name|
|model|string|false|none|Model name|
|remote_model|string|false|none|Name of the upstream model, if the model is remote|
|remote_host|string|false|none|URL of the upstream Ollama host, if the model is remote|
|modified_at|string|false|none|Last modified timestamp in ISO 8601 format|
|size|integer|false|none|Total size of the model on disk in bytes|
|digest|string|false|none|SHA256 digest identifier of the model contents|
|details|object|false|none|Additional information about the model's format and family|

<h2 id="tocS_ListResponse">ListResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresponse"></a>
<a id="schema_ListResponse"></a>
<a id="tocSlistresponse"></a>
<a id="tocslistresponse"></a>

```json
{
  "models": [
    {
      "name": "string",
      "model": "string",
      "remote_model": "string",
      "remote_host": "string",
      "modified_at": "string",
      "size": 0,
      "digest": "string",
      "details": {
        "format": "string",
        "family": "string",
        "families": [
          "string"
        ],
        "parameter_size": "string",
        "quantization_level": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[[ModelSummary](#schemamodelsummary)]|false|none|none|

<h2 id="tocS_Ps">Ps</h2>
<!-- backwards compatibility -->
<a id="schemaps"></a>
<a id="schema_Ps"></a>
<a id="tocSps"></a>
<a id="tocsps"></a>

```json
{
  "name": "string",
  "model": "string",
  "size": 0,
  "digest": "string",
  "details": {},
  "expires_at": "string",
  "size_vram": 0,
  "context_length": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the running model|
|model|string|false|none|Name of the running model|
|size|integer|false|none|Size of the model in bytes|
|digest|string|false|none|SHA256 digest of the model|
|details|object|false|none|Model details such as format and family|
|expires_at|string|false|none|Time when the model will be unloaded|
|size_vram|integer|false|none|VRAM usage in bytes|
|context_length|integer|false|none|Context length for the running model|

<h2 id="tocS_PsResponse">PsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapsresponse"></a>
<a id="schema_PsResponse"></a>
<a id="tocSpsresponse"></a>
<a id="tocspsresponse"></a>

```json
{
  "models": [
    {
      "name": "string",
      "model": "string",
      "size": 0,
      "digest": "string",
      "details": {},
      "expires_at": "string",
      "size_vram": 0,
      "context_length": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[[Ps](#schemaps)]|false|none|Currently running models|

<h2 id="tocS_WebSearchRequest">WebSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemawebsearchrequest"></a>
<a id="schema_WebSearchRequest"></a>
<a id="tocSwebsearchrequest"></a>
<a id="tocswebsearchrequest"></a>

```json
{
  "query": "string",
  "max_results": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Search query string|
|max_results|integer|false|none|Maximum number of results to return|

<h2 id="tocS_WebSearchResult">WebSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemawebsearchresult"></a>
<a id="schema_WebSearchResult"></a>
<a id="tocSwebsearchresult"></a>
<a id="tocswebsearchresult"></a>

```json
{
  "title": "string",
  "url": "http://example.com",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|Page title of the result|
|url|string(uri)|false|none|Resolved URL for the result|
|content|string|false|none|Extracted text content snippet|

<h2 id="tocS_WebSearchResponse">WebSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebsearchresponse"></a>
<a id="schema_WebSearchResponse"></a>
<a id="tocSwebsearchresponse"></a>
<a id="tocswebsearchresponse"></a>

```json
{
  "results": [
    {
      "title": "string",
      "url": "http://example.com",
      "content": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[WebSearchResult](#schemawebsearchresult)]|false|none|Array of matching search results|

<h2 id="tocS_WebFetchRequest">WebFetchRequest</h2>
<!-- backwards compatibility -->
<a id="schemawebfetchrequest"></a>
<a id="schema_WebFetchRequest"></a>
<a id="tocSwebfetchrequest"></a>
<a id="tocswebfetchrequest"></a>

```json
{
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|The URL to fetch|

<h2 id="tocS_WebFetchResponse">WebFetchResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebfetchresponse"></a>
<a id="schema_WebFetchResponse"></a>
<a id="tocSwebfetchresponse"></a>
<a id="tocswebfetchresponse"></a>

```json
{
  "title": "string",
  "content": "string",
  "links": [
    "http://example.com"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|Title of the fetched page|
|content|string|false|none|Extracted page content|
|links|[string(uri)]|false|none|Links found on the page|

<h2 id="tocS_VersionResponse">VersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaversionresponse"></a>
<a id="schema_VersionResponse"></a>
<a id="tocSversionresponse"></a>
<a id="tocsversionresponse"></a>

```json
{
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|Version of Ollama|

<h2 id="tocS_TokenLogprob">TokenLogprob</h2>
<!-- backwards compatibility -->
<a id="schematokenlogprob"></a>
<a id="schema_TokenLogprob"></a>
<a id="tocStokenlogprob"></a>
<a id="tocstokenlogprob"></a>

```json
{
  "token": "string",
  "logprob": 0,
  "bytes": [
    0
  ]
}
```

Log probability information for a single token alternative

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|The text representation of the token|
|logprob|number|false|none|The log probability of this token|
|bytes|[integer]|false|none|The raw byte representation of the token|

<h2 id="tocS_Logprob">Logprob</h2>
<!-- backwards compatibility -->
<a id="schemalogprob"></a>
<a id="schema_Logprob"></a>
<a id="tocSlogprob"></a>
<a id="tocslogprob"></a>

```json
{
  "token": "string",
  "logprob": 0,
  "bytes": [
    0
  ],
  "top_logprobs": [
    {
      "token": "string",
      "logprob": 0,
      "bytes": [
        0
      ]
    }
  ]
}
```

Log probability information for a generated token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|The text representation of the token|
|logprob|number|false|none|The log probability of this token|
|bytes|[integer]|false|none|The raw byte representation of the token|
|top_logprobs|[[TokenLogprob](#schematokenlogprob)]|false|none|Most likely tokens and their log probabilities at this position|

<h2 id="tocS_SystemOneContent">SystemOneContent</h2>
<!-- backwards compatibility -->
<a id="schemasystemonecontent"></a>
<a id="schema_SystemOneContent"></a>
<a id="tocSsystemonecontent"></a>
<a id="tocssystemonecontent"></a>

```json
"string"
```

A nonempty string, or an object or array serialized as JSON text. Not interpreted as chat messages or multimodal input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|object|false|none|none|
|*oneOf*|[object]|false|none|none|

<h2 id="tocS_SystemOneChoiceQuestion">SystemOneChoiceQuestion</h2>
<!-- backwards compatibility -->
<a id="schemasystemonechoicequestion"></a>
<a id="schema_SystemOneChoiceQuestion"></a>
<a id="tocSsystemonechoicequestion"></a>
<a id="tocssystemonechoicequestion"></a>

```json
{
  "type": "choice",
  "instructions": "string",
  "criteria": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|instructions|[SystemOneContent](#schemasystemonecontent)|true|none|A nonempty string, or an object or array serialized as JSON text. Not interpreted as chat messages or multimodal input.|
|criteria|object|true|none|Option keys mapped to descriptions, or null for a bare label. Keys must not be blank; ties follow the model's option order. The option limit depends on the model.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|choice|

<h2 id="tocS_SystemOneNoulQuestion">SystemOneNoulQuestion</h2>
<!-- backwards compatibility -->
<a id="schemasystemonenoulquestion"></a>
<a id="schema_SystemOneNoulQuestion"></a>
<a id="tocSsystemonenoulquestion"></a>
<a id="tocssystemonenoulquestion"></a>

```json
{
  "type": "noul",
  "instructions": "string",
  "criteria": {
    "false": "string",
    "true": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|instructions|[SystemOneContent](#schemasystemonecontent)|true|none|A nonempty string, or an object or array serialized as JSON text. Not interpreted as chat messages or multimodal input.|
|criteria|object|false|none|Optional descriptions for the two outcomes. Omitted entries use model-specific defaults.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|noul|

<h2 id="tocS_SystemOneScoreQuestion">SystemOneScoreQuestion</h2>
<!-- backwards compatibility -->
<a id="schemasystemonescorequestion"></a>
<a id="schema_SystemOneScoreQuestion"></a>
<a id="tocSsystemonescorequestion"></a>
<a id="tocssystemonescorequestion"></a>

```json
{
  "type": "score",
  "instructions": "string",
  "criteria": [
    "string",
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|instructions|[SystemOneContent](#schemasystemonecontent)|true|none|A nonempty string, or an object or array serialized as JSON text. Not interpreted as chat messages or multimodal input.|
|criteria|[string]|true|none|Descriptions ordered from the lowest score (index 0) to the highest. Defines a scale from 0 to the number of criteria minus 1.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|score|

<h2 id="tocS_SystemOneRequest">SystemOneRequest</h2>
<!-- backwards compatibility -->
<a id="schemasystemonerequest"></a>
<a id="schema_SystemOneRequest"></a>
<a id="tocSsystemonerequest"></a>
<a id="tocssystemonerequest"></a>

```json
{
  "model": "string",
  "state": "string",
  "images": [
    "string"
  ],
  "questions": {
    "property1": {
      "type": "choice",
      "instructions": "string",
      "criteria": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "type": "choice",
      "instructions": "string",
      "criteria": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "keep_alive": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|Model trained for System One, such as nimble, or clef:cloud for Ollama's cloud.|
|state|[SystemOneContent](#schemasystemonecontent)|true|none|A nonempty string, or an object or array serialized as JSON text. Not interpreted as chat messages or multimodal input.|
|images|[string(byte)]|false|none|Base64-encoded images shared by all questions, in request order. Requires a model with vision, such as Clef. Models with audio input also accept WAV clips here. URLs and data URLs are not supported.|
|questions|object|true|none|Named questions about the shared state. Answers are not passed to later questions. Cloud models accept names of up to 100 ASCII letters, digits, `_`, `.`, or `-`.|
|keep_alive|string \| number|false|none|How long to keep the model loaded after the request, as a duration string (such as 5m) or seconds. Zero unloads after the request; a negative value keeps it loaded. Defaults to the server's keep-alive setting (5m unless configured otherwise).|

<h2 id="tocS_SystemOneProbabilities">SystemOneProbabilities</h2>
<!-- backwards compatibility -->
<a id="schemasystemoneprobabilities"></a>
<a id="schema_SystemOneProbabilities"></a>
<a id="tocSsystemoneprobabilities"></a>
<a id="tocssystemoneprobabilities"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

Probabilities normalized over the supplied candidates, summing to 1 subject to floating-point precision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|number|false|none|none|

<h2 id="tocS_SystemOneConfidence">SystemOneConfidence</h2>
<!-- backwards compatibility -->
<a id="schemasystemoneconfidence"></a>
<a id="schema_SystemOneConfidence"></a>
<a id="tocSsystemoneconfidence"></a>
<a id="tocssystemoneconfidence"></a>

```json
0
```

Distribution concentration, calculated as 1 - H(p) / ln(N), where H(p) is entropy and N is the candidate count. Zero means uniform probabilities; values near 1 mean one candidate dominates. Not calibrated correctness.

<h2 id="tocS_SystemOneChoiceAnswer">SystemOneChoiceAnswer</h2>
<!-- backwards compatibility -->
<a id="schemasystemonechoiceanswer"></a>
<a id="schema_SystemOneChoiceAnswer"></a>
<a id="tocSsystemonechoiceanswer"></a>
<a id="tocssystemonechoiceanswer"></a>

```json
{
  "type": "choice",
  "choice": "string",
  "probabilities": {
    "property1": 0,
    "property2": 0
  },
  "confidence": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|choice|string|true|none|Option key with the highest probability. Ties follow the model's option order.|
|probabilities|[SystemOneProbabilities](#schemasystemoneprobabilities)|true|none|Probabilities normalized over the supplied candidates, summing to 1 subject to floating-point precision.|
|confidence|[SystemOneConfidence](#schemasystemoneconfidence)|true|none|Distribution concentration, calculated as 1 - H(p) / ln(N), where H(p) is entropy and N is the candidate count. Zero means uniform probabilities; values near 1 mean one candidate dominates. Not calibrated correctness.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|choice|

<h2 id="tocS_SystemOneNoulAnswer">SystemOneNoulAnswer</h2>
<!-- backwards compatibility -->
<a id="schemasystemonenoulanswer"></a>
<a id="schema_SystemOneNoulAnswer"></a>
<a id="tocSsystemonenoulanswer"></a>
<a id="tocssystemonenoulanswer"></a>

```json
{
  "type": "noul",
  "noul": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|noul|number|true|none|Probability of true among the false and true candidates. This is a number, not a Boolean.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|noul|

<h2 id="tocS_SystemOneScoreAnswer">SystemOneScoreAnswer</h2>
<!-- backwards compatibility -->
<a id="schemasystemonescoreanswer"></a>
<a id="schema_SystemOneScoreAnswer"></a>
<a id="tocSsystemonescoreanswer"></a>
<a id="tocssystemonescoreanswer"></a>

```json
{
  "type": "score",
  "score": 0,
  "legend": {
    "property1": "string",
    "property2": "string"
  },
  "probabilities": {
    "property1": 0,
    "property2": 0
  },
  "confidence": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|score|number|true|none|Probability-weighted average of the zero-based criterion indices, from 0 to the number of criteria minus 1. Not rounded to a level or normalized to 0–1.|
|legend|object|true|none|Zero-based indices as string keys mapped to the criterion descriptions.|
|probabilities|[SystemOneProbabilities](#schemasystemoneprobabilities)|true|none|Probabilities keyed by zero-based criterion indices as strings.|
|confidence|[SystemOneConfidence](#schemasystemoneconfidence)|true|none|Distribution concentration, calculated as 1 - H(p) / ln(N), where H(p) is entropy and N is the candidate count. Zero means uniform probabilities; values near 1 mean one candidate dominates. Not calibrated correctness.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|score|

<h2 id="tocS_SystemOneResponse">SystemOneResponse</h2>
<!-- backwards compatibility -->
<a id="schemasystemoneresponse"></a>
<a id="schema_SystemOneResponse"></a>
<a id="tocSsystemoneresponse"></a>
<a id="tocssystemoneresponse"></a>

```json
{
  "model": "string",
  "answers": {
    "property1": {
      "type": "choice",
      "choice": "string",
      "probabilities": {
        "property1": 0,
        "property2": 0
      },
      "confidence": 0
    },
    "property2": {
      "type": "choice",
      "choice": "string",
      "probabilities": {
        "property1": 0,
        "property2": 0
      },
      "confidence": 0
    }
  },
  "usage": {
    "input_tokens": 0,
    "output_tokens": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|Model name from the request.|
|answers|object|true|none|Answers keyed by the question names in the request.|
|usage|object|true|none|none|

<h2 id="tocS_UsageMetrics">UsageMetrics</h2>
<!-- backwards compatibility -->
<a id="schemausagemetrics"></a>
<a id="schema_UsageMetrics"></a>
<a id="tocSusagemetrics"></a>
<a id="tocsusagemetrics"></a>

```json
{
  "request_count": 0,
  "usage_usd": 0,
  "input_tokens": 0,
  "cached_input_tokens": 0,
  "output_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_count|integer|true|none|Number of recorded requests.|
|usage_usd|number|false|none|Total value of the requests in USD, including usage covered by your plan and usage paid from purchased credits.|
|input_tokens|integer|false|none|Recorded input tokens, including cached input tokens.|
|cached_input_tokens|integer|false|none|Recorded input tokens read from cache, already included in input_tokens.|
|output_tokens|integer|false|none|Recorded output tokens.|

<h2 id="tocS_UsageGroup">UsageGroup</h2>
<!-- backwards compatibility -->
<a id="schemausagegroup"></a>
<a id="schema_UsageGroup"></a>
<a id="tocSusagegroup"></a>
<a id="tocsusagegroup"></a>

```json
{
  "request_count": 0,
  "usage_usd": 0,
  "input_tokens": 0,
  "cached_input_tokens": 0,
  "output_tokens": 0,
  "model": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_count|integer|true|none|Number of recorded requests.|
|usage_usd|number|false|none|Total value of the requests in USD, including usage covered by your plan and usage paid from purchased credits.|
|input_tokens|integer|false|none|Recorded input tokens, including cached input tokens.|
|cached_input_tokens|integer|false|none|Recorded input tokens read from cache, already included in input_tokens.|
|output_tokens|integer|false|none|Recorded output tokens.|
|model|string|true|none|Model name.|

<h2 id="tocS_UsageSummary">UsageSummary</h2>
<!-- backwards compatibility -->
<a id="schemausagesummary"></a>
<a id="schema_UsageSummary"></a>
<a id="tocSusagesummary"></a>
<a id="tocsusagesummary"></a>

```json
{
  "request_count": 0,
  "usage_usd": 0,
  "input_tokens": 0,
  "cached_input_tokens": 0,
  "output_tokens": 0,
  "groups": [
    {
      "request_count": 0,
      "usage_usd": 0,
      "input_tokens": 0,
      "cached_input_tokens": 0,
      "output_tokens": 0,
      "model": "string"
    }
  ],
  "remainder": {
    "request_count": 0,
    "usage_usd": 0,
    "input_tokens": 0,
    "cached_input_tokens": 0,
    "output_tokens": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_count|integer|true|none|Number of recorded requests.|
|usage_usd|number|false|none|Total value of the requests in USD, including usage covered by your plan and usage paid from purchased credits.|
|input_tokens|integer|false|none|Recorded input tokens, including cached input tokens.|
|cached_input_tokens|integer|false|none|Recorded input tokens read from cache, already included in input_tokens.|
|output_tokens|integer|false|none|Recorded output tokens.|
|groups|[[UsageGroup](#schemausagegroup)]|false|none|Present when group_by is requested. Currently returns up to 10 groups selected across the entire range, ranked by usage_usd or by request_count when the range includes legacy requests. Groups use the same order in every bucket; groups without requests in a bucket are omitted.|
|remainder|[UsageMetrics](#schemausagemetrics)|false|none|Combined usage from groups outside the current limit. Omitted when there are no requests from additional groups.|

<h2 id="tocS_UsageBucket">UsageBucket</h2>
<!-- backwards compatibility -->
<a id="schemausagebucket"></a>
<a id="schema_UsageBucket"></a>
<a id="tocSusagebucket"></a>
<a id="tocsusagebucket"></a>

```json
{
  "request_count": 0,
  "usage_usd": 0,
  "input_tokens": 0,
  "cached_input_tokens": 0,
  "output_tokens": 0,
  "groups": [
    {
      "request_count": 0,
      "usage_usd": 0,
      "input_tokens": 0,
      "cached_input_tokens": 0,
      "output_tokens": 0,
      "model": "string"
    }
  ],
  "remainder": {
    "request_count": 0,
    "usage_usd": 0,
    "input_tokens": 0,
    "cached_input_tokens": 0,
    "output_tokens": 0
  },
  "from": "1970-01-01T00:00:00Z",
  "until": "1970-01-01T00:00:00Z",
  "partial": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_count|integer|true|none|Number of recorded requests.|
|usage_usd|number|false|none|Total value of the requests in USD, including usage covered by your plan and usage paid from purchased credits.|
|input_tokens|integer|false|none|Recorded input tokens, including cached input tokens.|
|cached_input_tokens|integer|false|none|Recorded input tokens read from cache, already included in input_tokens.|
|output_tokens|integer|false|none|Recorded output tokens.|
|groups|[[UsageGroup](#schemausagegroup)]|false|none|Present when group_by is requested. Currently returns up to 10 groups selected across the entire range, ranked by usage_usd or by request_count when the range includes legacy requests. Groups use the same order in every bucket; groups without requests in a bucket are omitted.|
|remainder|[UsageMetrics](#schemausagemetrics)|false|none|Combined usage from groups outside the current limit. Omitted when there are no requests from additional groups.|
|from|string(date-time)|true|none|Start of the bucket in UTC, inclusive.|
|until|string(date-time)|true|none|End of the bucket in UTC, exclusive.|
|partial|boolean|false|none|Present and true for the current hour or day, which is still in progress.|

<h2 id="tocS_UsageResponse">UsageResponse</h2>
<!-- backwards compatibility -->
<a id="schemausageresponse"></a>
<a id="schema_UsageResponse"></a>
<a id="tocSusageresponse"></a>
<a id="tocsusageresponse"></a>

```json
{
  "range": "24h",
  "scope": "self",
  "granularity": "hour",
  "group_by": "model",
  "from": "1970-01-01T00:00:00Z",
  "until": "1970-01-01T00:00:00Z",
  "totals": {
    "request_count": 0,
    "usage_usd": 0,
    "input_tokens": 0,
    "cached_input_tokens": 0,
    "output_tokens": 0,
    "groups": [
      {
        "request_count": 0,
        "usage_usd": 0,
        "input_tokens": 0,
        "cached_input_tokens": 0,
        "output_tokens": 0,
        "model": "string"
      }
    ],
    "remainder": {
      "request_count": 0,
      "usage_usd": 0,
      "input_tokens": 0,
      "cached_input_tokens": 0,
      "output_tokens": 0
    }
  },
  "buckets": [
    {
      "request_count": 0,
      "usage_usd": 0,
      "input_tokens": 0,
      "cached_input_tokens": 0,
      "output_tokens": 0,
      "groups": [
        {
          "request_count": 0,
          "usage_usd": 0,
          "input_tokens": 0,
          "cached_input_tokens": 0,
          "output_tokens": 0,
          "model": "string"
        }
      ],
      "remainder": {
        "request_count": 0,
        "usage_usd": 0,
        "input_tokens": 0,
        "cached_input_tokens": 0,
        "output_tokens": 0
      },
      "from": "1970-01-01T00:00:00Z",
      "until": "1970-01-01T00:00:00Z",
      "partial": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|range|string|true|none|Selected time range.|
|scope|string|true|none|Selected usage scope.|
|granularity|string|true|none|Set automatically: hour for 24h, day for 7d and 30d.|
|group_by|string|false|none|Selected grouping. Present when group_by is requested.|
|from|string(date-time)|true|none|Start of the range in UTC, inclusive.|
|until|string(date-time)|true|none|End of the range in UTC, exclusive.|
|totals|[UsageSummary](#schemausagesummary)|true|none|Usage across the entire range, including groups in the remainder.|
|buckets|[[UsageBucket](#schemausagebucket)]|true|none|Usage in chronological order, including buckets with no recorded requests.|

#### Enumerated Values

|Property|Value|
|---|---|
|range|24h|
|range|7d|
|range|30d|
|scope|self|
|scope|team|
|granularity|hour|
|granularity|day|
|group_by|model|

<h2 id="tocS_IncludedBalance">IncludedBalance</h2>
<!-- backwards compatibility -->
<a id="schemaincludedbalance"></a>
<a id="schema_IncludedBalance"></a>
<a id="tocSincludedbalance"></a>
<a id="tocsincludedbalance"></a>

```json
{
  "balance_usd": 0,
  "allowance_usd": 0,
  "period": {
    "from": "1970-01-01T00:00:00Z",
    "until": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance_usd|number|true|none|Remaining included credits in USD.|
|allowance_usd|number|true|none|Included credits available for the full period in USD.|
|period|object|true|none|none|

<h2 id="tocS_LegacyBalanceLimit">LegacyBalanceLimit</h2>
<!-- backwards compatibility -->
<a id="schemalegacybalancelimit"></a>
<a id="schema_LegacyBalanceLimit"></a>
<a id="tocSlegacybalancelimit"></a>
<a id="tocslegacybalancelimit"></a>

```json
{
  "remaining_percent": 0,
  "resets_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remaining_percent|number|true|none|Percentage of the limit remaining.|
|resets_at|string(date-time)|true|none|Next reset time in UTC.|

<h2 id="tocS_LegacyIncludedBalance">LegacyIncludedBalance</h2>
<!-- backwards compatibility -->
<a id="schemalegacyincludedbalance"></a>
<a id="schema_LegacyIncludedBalance"></a>
<a id="tocSlegacyincludedbalance"></a>
<a id="tocslegacyincludedbalance"></a>

```json
{
  "session": {
    "remaining_percent": 0,
    "resets_at": "1970-01-01T00:00:00Z"
  },
  "weekly": {
    "remaining_percent": 0,
    "resets_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session|[LegacyBalanceLimit](#schemalegacybalancelimit)|true|none|none|
|weekly|[LegacyBalanceLimit](#schemalegacybalancelimit)|true|none|none|

<h2 id="tocS_BalanceResponse">BalanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemabalanceresponse"></a>
<a id="schema_BalanceResponse"></a>
<a id="tocSbalanceresponse"></a>
<a id="tocsbalanceresponse"></a>

```json
{
  "included": {
    "balance_usd": 0,
    "allowance_usd": 0,
    "period": {
      "from": "1970-01-01T00:00:00Z",
      "until": "1970-01-01T00:00:00Z"
    }
  },
  "purchased": {
    "balance_usd": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|included|[IncludedBalance](#schemaincludedbalance) \| [LegacyIncludedBalance](#schemalegacyincludedbalance)|true|none|none|
|purchased|object|true|none|none|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message describing what went wrong|
