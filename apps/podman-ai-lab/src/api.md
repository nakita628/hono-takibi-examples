<h1 id="podman-desktop-ai-lab-api">Podman Desktop AI Lab API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for interacting with the Podman Desktop AI Lab service.

Base URLs:

* <a href="http://127.0.0.1:10434">http://127.0.0.1:10434</a> - Podman Desktop AI Lab API server

<h1 id="podman-desktop-ai-lab-api-server">server</h1>

Server information

## Return the Podman Desktop AI Lab API server version

<a id="opIdgetServerVersion"></a>

> Code samples

```bash
curl http://localhost:10434/api/version \
  -H 'Accept: application/json'
```

`GET /api/version`

Return the Podman Desktop AI Lab API server version

> Example responses

> 200 Response

```json
{
  "version": "string"
}
```

<h3 id="return-the-podman-desktop-ai-lab-api-server-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Podman Desktop AI Lab API server version was successfully fetched|Inline|

<h3 id="return-the-podman-desktop-ai-lab-api-server-version-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="podman-desktop-ai-lab-api-models">models</h1>

## List models that are available locally

<a id="opIdgetModels"></a>

> Code samples

```bash
curl http://localhost:10434/api/tags \
  -H 'Accept: application/json'
```

`GET /api/tags`

List models that are available locally

> Example responses

> 200 Response

```json
{
  "models": [
    {
      "name": "string",
      "model": "string",
      "modified_at": "1970-01-01T00:00:00Z",
      "size": 0,
      "digest": "string",
      "details": {
        "parent_model": "string",
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

<h3 id="list-models-that-are-available-locally-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The models were successfully fetched|[ListResponse](#schemalistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Download a model from the Podman AI Lab Catalog.

<a id="opIdpullModel"></a>

> Code samples

```bash
curl http://localhost:10434/api/pull \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "ibm-granite/granite-4.0-micro-GGUF",
    "insecure": true,
    "stream": true
  }'
```

`POST /api/pull`

Download a model from the Podman AI Lab catalog.


> Body parameter

```json
{
  "model": "ibm-granite/granite-4.0-micro-GGUF",
  "insecure": true,
  "stream": true
}
```

<h3 id="download-a-model-from-the-podman-ai-lab-catalog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PullRequest](#schemapullrequest)|true|Request to pull a model|
|» model|body|string|true|The name of the model to pull|
|» insecure|body|boolean|false|allow insecure connections to the catalog.<br>|
|» stream|body|boolean|false|If false the response will be returned as a single response object,<br>rather than a stream of objects<br>|

<h3 id="download-a-model-from-the-podman-ai-lab-catalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Model was successfully pulled|[ProgressResponse](#schemaprogressresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Show information about a model including details, modelfile, template, parameters, license, and system prompt.

<a id="opIdshowModel"></a>

> Code samples

```bash
curl http://localhost:10434/api/show \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": "string"
  }'
```

`POST /api/show`

Not implemented, returns an empty object - Show information about a model including details, modelfile, template, 
parameters, license, and system prompt.


> Body parameter

```json
{
  "model": "string"
}
```

<h3 id="show-information-about-a-model-including-details-modelfile-template-parameters-license-and-system-prompt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ShowRequest](#schemashowrequest)|true|Request to show a model|
|» model|body|string|true|The name of the model to show|

> Example responses

> 200 Response

```json
{
  "license": "string",
  "modelfile": "string",
  "parameters": "string",
  "template": "string",
  "system": "string",
  "details": {
    "parent_model": "string",
    "format": "string",
    "family": "string",
    "families": [
      "string"
    ],
    "parameter_size": "string",
    "quantization_level": "string"
  },
  "messages": [
    {
      "role": "string",
      "content": "string",
      "images": [
        "string"
      ]
    }
  ]
}
```

<h3 id="show-information-about-a-model-including-details-modelfile-template-parameters-license-and-system-prompt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The model's information was successfully fetched|[ShowResponse](#schemashowresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List running models

<a id="opIdgetRunningModels"></a>

> Code samples

```bash
curl http://localhost:10434/api/ps \
  -H 'Accept: application/json'
```

`GET /api/ps`

List running models

> Example responses

> 200 Response

```json
{
  "models": [
    {
      "name": "string",
      "model": "string",
      "size": 0,
      "digest": "string",
      "details": {
        "parent_model": "string",
        "format": "string",
        "family": "string",
        "families": [
          "string"
        ],
        "parameter_size": "string",
        "quantization_level": "string"
      },
      "expires_at": "1970-01-01T00:00:00Z",
      "size_vram": 0
    }
  ]
}
```

<h3 id="list-running-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of running models was successfully fetched|[ProcessResponse](#schemaprocessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="podman-desktop-ai-lab-api-generate">generate</h1>

## Generate a response for a given prompt with a provided model. This is a streaming endpoint, so there will be a series of responses. The final response object will include statistics and additional data from the request.

<a id="opIdgenerateResponse"></a>

> Code samples

```bash
curl http://localhost:10434/api/generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": "string",
    "prompt": "string",
    "suffix": "string",
    "images": [
      "string"
    ],
    "format": "string",
    "system": "string",
    "template": "string",
    "context": [],
    "stream": true,
    "raw": true,
    "keep_alive": "5m"
  }'
```

`POST /api/generate`

Generate a response for a given prompt with a provided model. This is 
a streaming endpoint, so there will be a series of responses. The 
final response object will include statistics and additional data from 
the request.


> Body parameter

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
  "template": "string",
  "context": [],
  "stream": true,
  "raw": true,
  "keep_alive": "5m"
}
```

<h3 id="generate-a-response-for-a-given-prompt-with-a-provided-model-this-is-a-streaming-endpoint-so-there-will-be-a-series-of-responses-the-final-response-object-will-include-statistics-and-additional-data-from-the-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenerateRequest](#schemageneraterequest)|true|Request to generate a response|
|» model|body|string|true|The model name|
|» prompt|body|string|false|The prompt to generate a response for|
|» suffix|body|string|false|none|
|» images|body|[string(byte)]|false|A list of base64-encoded images (for multimodal models such as <br>llava)        <br>|
|» format|body|string|false|The format to return a response in. Currently the only accepted <br>value is json<br>|
|» system|body|string|false|System message to (overrides what is defined in the Modelfile)<br>|
|» template|body|string|false|The prompt template to use (overrides what is defined in the <br>Modelfile)<br>|
|» context|body|[integer]|false|The context parameter returned from a previous request to generate, <br>this can be used to keep a short conversational memory<br>|
|» stream|body|boolean|false|If false the response will be returned as a single response object, <br>rather than a stream of objects<br>|
|» raw|body|boolean|false|If true no formatting will be applied to the prompt. You may choose <br>to use the raw parameter if you are specifying a full templated <br>prompt in your request to the API<br>|
|» keep_alive|body|[Duration](#schemaduration)|false|A string representing the duration|

> Example responses

> 200 Response

```json
{
  "model": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "response": "string",
  "done": true,
  "context": [
    0
  ],
  "total_duration": 0,
  "load_duration": 0,
  "prompt_eval_count": 0,
  "prompt_eval_duration": 0,
  "eval_count": 0,
  "eval_duration": 0
}
```

<h3 id="generate-a-response-for-a-given-prompt-with-a-provided-model-this-is-a-streaming-endpoint-so-there-will-be-a-series-of-responses-the-final-response-object-will-include-statistics-and-additional-data-from-the-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A response was successfully generated for the prompt|[GenerateResponse](#schemagenerateresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="podman-desktop-ai-lab-api-chat">chat</h1>

## Generate the next message in a chat with a provided model. This is a streaming endpoint, so there will be a series of responses. Streaming can be disabled using &quot;stream&quot;: false. The final response object will include statistics and additional data from the request.

<a id="opIdgenerateChat"></a>

> Code samples

```bash
curl http://localhost:10434/api/chat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": "string",
    "messages": [
      {
        "role": "string",
        "content": "string",
        "images": [
          "string"
        ]
      }
    ],
    "stream": true,
    "format": "string",
    "keep_alive": "5m",
    "options": {
      "num_keep": 4,
      "seed": -1,
      "num_predict": -1,
      "top_k": 40,
      "top_p": 0.9,
      "tfs_z": 1,
      "typical_p": 1,
      "repeat_last_n": 64,
      "temperature": 0.8,
      "repeat_penalty": 1.1,
      "presence_penalty": 0.8,
      "frequency_penalty": 0.8,
      "mirostat": 0,
      "mirostat_tau": 5.8,
      "mirostat_eta": 0.1,
      "penalize_newline": true,
      "stop": [
        "AI assistant."
      ],
      "numa": false,
      "num_ctx": 2048,
      "num_batch": 512,
      "num_gpu": -1,
      "main_gpu": 0,
      "low_vram": false,
      "f16_kv": true,
      "logits_all": false,
      "vocab_only": false,
      "use_mmap": true,
      "use_mlock": false,
      "num_thread": 0
    }
  }'
```

`POST /api/chat`

Generate the next message in a chat with a provided model. This is a 
streaming endpoint, so there will be a series of responses. Streaming 
can be disabled using "stream": false. The final response object will 
include statistics and additional data from the request.


> Body parameter

```json
{
  "model": "string",
  "messages": [
    {
      "role": "string",
      "content": "string",
      "images": [
        "string"
      ]
    }
  ],
  "stream": true,
  "format": "string",
  "keep_alive": "5m",
  "options": {
    "num_keep": 4,
    "seed": -1,
    "num_predict": -1,
    "top_k": 40,
    "top_p": 0.9,
    "tfs_z": 1,
    "typical_p": 1,
    "repeat_last_n": 64,
    "temperature": 0.8,
    "repeat_penalty": 1.1,
    "presence_penalty": 0.8,
    "frequency_penalty": 0.8,
    "mirostat": 0,
    "mirostat_tau": 5.8,
    "mirostat_eta": 0.1,
    "penalize_newline": true,
    "stop": [
      "AI assistant."
    ],
    "numa": false,
    "num_ctx": 2048,
    "num_batch": 512,
    "num_gpu": -1,
    "main_gpu": 0,
    "low_vram": false,
    "f16_kv": true,
    "logits_all": false,
    "vocab_only": false,
    "use_mmap": true,
    "use_mlock": false,
    "num_thread": 0
  }
}
```

<h3 id="generate-the-next-message-in-a-chat-with-a-provided-model-this-is-a-streaming-endpoint-so-there-will-be-a-series-of-responses-streaming-can-be-disabled-using-stream-false-the-final-response-object-will-include-statistics-and-additional-data-from-the-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChatRequest](#schemachatrequest)|true|Request to generate a response in a chat|
|» model|body|string|false|The model name|
|» messages|body|[[Message](#schemamessage)]|false|Messages of the chat - can be used to keep a chat memory|
|» stream|body|boolean|false|Enable streaming of returned response|
|» format|body|string|false|Format to return the response in (e.g. "json")|
|» keep_alive|body|[Duration](#schemaduration)|false|A string representing the duration|
|» options|body|[Options](#schemaoptions)|false|Advanced model and runner options for generation and chat requests<br>|

> Example responses

> 200 Response

```json
{
  "model": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "message": {
    "role": "string",
    "content": "string",
    "images": [
      "string"
    ]
  },
  "done_reason": "string",
  "done": true,
  "total_duration": 0,
  "load_duration": 0,
  "prompt_eval_count": 0,
  "prompt_eval_duration": 0,
  "eval_count": 0,
  "eval_duration": 0
}
```

<h3 id="generate-the-next-message-in-a-chat-with-a-provided-model-this-is-a-streaming-endpoint-so-there-will-be-a-series-of-responses-streaming-can-be-disabled-using-stream-false-the-final-response-object-will-include-statistics-and-additional-data-from-the-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The next message was successfully generated for the chat|[ChatResponse](#schemachatresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

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
      "modified_at": "1970-01-01T00:00:00Z",
      "size": 0,
      "digest": "string",
      "details": {
        "parent_model": "string",
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

Response from a list request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[[ListModelResponse](#schemalistmodelresponse)]|false|none|none|

<h2 id="tocS_ListModelResponse">ListModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelresponse"></a>
<a id="schema_ListModelResponse"></a>
<a id="tocSlistmodelresponse"></a>
<a id="tocslistmodelresponse"></a>

```json
{
  "name": "string",
  "model": "string",
  "modified_at": "1970-01-01T00:00:00Z",
  "size": 0,
  "digest": "string",
  "details": {
    "parent_model": "string",
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

Response from a list request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|model|string|false|none|none|
|modified_at|string(date-time)|false|none|none|
|size|integer|false|none|none|
|digest|string|false|none|none|
|details|[ModelDetails](#schemamodeldetails)|false|none|Details about a model|

<h2 id="tocS_ProcessResponse">ProcessResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprocessresponse"></a>
<a id="schema_ProcessResponse"></a>
<a id="tocSprocessresponse"></a>
<a id="tocsprocessresponse"></a>

```json
{
  "models": [
    {
      "name": "string",
      "model": "string",
      "size": 0,
      "digest": "string",
      "details": {
        "parent_model": "string",
        "format": "string",
        "family": "string",
        "families": [
          "string"
        ],
        "parameter_size": "string",
        "quantization_level": "string"
      },
      "expires_at": "1970-01-01T00:00:00Z",
      "size_vram": 0
    }
  ]
}
```

Response with a list of running models

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[[ProcessModelResponse](#schemaprocessmodelresponse)]|false|none|none|

<h2 id="tocS_ProcessModelResponse">ProcessModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprocessmodelresponse"></a>
<a id="schema_ProcessModelResponse"></a>
<a id="tocSprocessmodelresponse"></a>
<a id="tocsprocessmodelresponse"></a>

```json
{
  "name": "string",
  "model": "string",
  "size": 0,
  "digest": "string",
  "details": {
    "parent_model": "string",
    "format": "string",
    "family": "string",
    "families": [
      "string"
    ],
    "parameter_size": "string",
    "quantization_level": "string"
  },
  "expires_at": "1970-01-01T00:00:00Z",
  "size_vram": 0
}
```

Running model description

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|model|string|false|none|none|
|size|integer|false|none|none|
|digest|string|false|none|none|
|details|[ModelDetails](#schemamodeldetails)|false|none|Details about a model|
|expires_at|string(date-time)|false|none|none|
|size_vram|integer|false|none|none|

<h2 id="tocS_ModelDetails">ModelDetails</h2>
<!-- backwards compatibility -->
<a id="schemamodeldetails"></a>
<a id="schema_ModelDetails"></a>
<a id="tocSmodeldetails"></a>
<a id="tocsmodeldetails"></a>

```json
{
  "parent_model": "string",
  "format": "string",
  "family": "string",
  "families": [
    "string"
  ],
  "parameter_size": "string",
  "quantization_level": "string"
}
```

Details about a model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent_model|string|false|none|none|
|format|string|false|none|none|
|family|string|false|none|none|
|families|[string]|false|none|none|
|parameter_size|string|false|none|none|
|quantization_level|string|false|none|none|

<h2 id="tocS_PullRequest">PullRequest</h2>
<!-- backwards compatibility -->
<a id="schemapullrequest"></a>
<a id="schema_PullRequest"></a>
<a id="tocSpullrequest"></a>
<a id="tocspullrequest"></a>

```json
{
  "model": "ibm-granite/granite-4.0-micro-GGUF",
  "insecure": true,
  "stream": true
}
```

Request to pull a model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|The name of the model to pull|
|insecure|boolean|false|none|allow insecure connections to the catalog.<br>|
|stream|boolean|false|none|If false the response will be returned as a single response object,<br>rather than a stream of objects<br>|

<h2 id="tocS_ProgressResponse">ProgressResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprogressresponse"></a>
<a id="schema_ProgressResponse"></a>
<a id="tocSprogressresponse"></a>
<a id="tocsprogressresponse"></a>

```json
{
  "status": "string",
  "digest": "string",
  "total": 0,
  "completed": 0
}
```

The response returned from various streaming endpoints

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|The status of the request|
|digest|string|false|none|The SHA256 digest of the blob|
|total|integer|false|none|The total size of the task|
|completed|integer|false|none|The completed size of the task|

<h2 id="tocS_ShowRequest">ShowRequest</h2>
<!-- backwards compatibility -->
<a id="schemashowrequest"></a>
<a id="schema_ShowRequest"></a>
<a id="tocSshowrequest"></a>
<a id="tocsshowrequest"></a>

```json
{
  "model": "string"
}
```

Request to show a model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|The name of the model to show|

<h2 id="tocS_ShowResponse">ShowResponse</h2>
<!-- backwards compatibility -->
<a id="schemashowresponse"></a>
<a id="schema_ShowResponse"></a>
<a id="tocSshowresponse"></a>
<a id="tocsshowresponse"></a>

```json
{
  "license": "string",
  "modelfile": "string",
  "parameters": "string",
  "template": "string",
  "system": "string",
  "details": {
    "parent_model": "string",
    "format": "string",
    "family": "string",
    "families": [
      "string"
    ],
    "parameter_size": "string",
    "quantization_level": "string"
  },
  "messages": [
    {
      "role": "string",
      "content": "string",
      "images": [
        "string"
      ]
    }
  ]
}
```

Response from a show request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|license|string|false|none|The model license|
|modelfile|string|false|none|The modelfile content|
|parameters|string|false|none|The model parameters|
|template|string|false|none|The model template|
|system|string|false|none|The model system message/prompt|
|details|[ModelDetails](#schemamodeldetails)|false|none|Details about a model|
|messages|[[Message](#schemamessage)]|false|none|none|

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
  "template": "string",
  "context": [],
  "stream": true,
  "raw": true,
  "keep_alive": "5m"
}
```

Request to generate a response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|The model name|
|prompt|string|false|none|The prompt to generate a response for|
|suffix|string|false|none|none|
|images|[string(byte)]|false|none|A list of base64-encoded images (for multimodal models such as <br>llava)        <br>|
|format|string|false|none|The format to return a response in. Currently the only accepted <br>value is json<br>|
|system|string|false|none|System message to (overrides what is defined in the Modelfile)<br>|
|template|string|false|none|The prompt template to use (overrides what is defined in the <br>Modelfile)<br>|
|context|[integer]|false|none|The context parameter returned from a previous request to generate, <br>this can be used to keep a short conversational memory<br>|
|stream|boolean|false|none|If false the response will be returned as a single response object, <br>rather than a stream of objects<br>|
|raw|boolean|false|none|If true no formatting will be applied to the prompt. You may choose <br>to use the raw parameter if you are specifying a full templated <br>prompt in your request to the API<br>|
|keep_alive|[Duration](#schemaduration)|false|none|A string representing the duration|

<h2 id="tocS_GenerateResponse">GenerateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateresponse"></a>
<a id="schema_GenerateResponse"></a>
<a id="tocSgenerateresponse"></a>
<a id="tocsgenerateresponse"></a>

```json
{
  "model": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "response": "string",
  "done": true,
  "context": [
    0
  ],
  "total_duration": 0,
  "load_duration": 0,
  "prompt_eval_count": 0,
  "prompt_eval_duration": 0,
  "eval_count": 0,
  "eval_duration": 0
}
```

Response from a generate request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|The model name that generated the response|
|created_at|string(date-time)|false|none|Timestamp of the response|
|response|string|false|none|The textual response itself. When done, empty if the response was <br>streamed, if not streamed, this will contain the full response<br>|
|done|boolean|false|none|Specifies if the response is complete|
|context|[integer]|false|none|When done, encoding of the conversation used in this response<br>|
|total_duration|number|false|none|When done, time spent generating the response|
|load_duration|number|false|none|When done, time spent in nanoseconds loading the model|
|prompt_eval_count|integer|false|none|When done, number of tokens in the prompt|
|prompt_eval_duration|number|false|none|When done, time spent in nanoseconds evaluating the prompt<br>|
|eval_count|integer|false|none|When done, number of tokens in the response|
|eval_duration|number|false|none|When done, time in nanoseconds spent generating the response <br>|

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
      "role": "string",
      "content": "string",
      "images": [
        "string"
      ]
    }
  ],
  "stream": true,
  "format": "string",
  "keep_alive": "5m",
  "options": {
    "num_keep": 4,
    "seed": -1,
    "num_predict": -1,
    "top_k": 40,
    "top_p": 0.9,
    "tfs_z": 1,
    "typical_p": 1,
    "repeat_last_n": 64,
    "temperature": 0.8,
    "repeat_penalty": 1.1,
    "presence_penalty": 0.8,
    "frequency_penalty": 0.8,
    "mirostat": 0,
    "mirostat_tau": 5.8,
    "mirostat_eta": 0.1,
    "penalize_newline": true,
    "stop": [
      "AI assistant."
    ],
    "numa": false,
    "num_ctx": 2048,
    "num_batch": 512,
    "num_gpu": -1,
    "main_gpu": 0,
    "low_vram": false,
    "f16_kv": true,
    "logits_all": false,
    "vocab_only": false,
    "use_mmap": true,
    "use_mlock": false,
    "num_thread": 0
  }
}
```

Request to generate a response in a chat

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|The model name|
|messages|[[Message](#schemamessage)]|false|none|Messages of the chat - can be used to keep a chat memory|
|stream|boolean|false|none|Enable streaming of returned response|
|format|string|false|none|Format to return the response in (e.g. "json")|
|keep_alive|[Duration](#schemaduration)|false|none|A string representing the duration|
|options|[Options](#schemaoptions)|false|none|Advanced model and runner options for generation and chat requests<br>|

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
    "role": "string",
    "content": "string",
    "images": [
      "string"
    ]
  },
  "done_reason": "string",
  "done": true,
  "total_duration": 0,
  "load_duration": 0,
  "prompt_eval_count": 0,
  "prompt_eval_duration": 0,
  "eval_count": 0,
  "eval_duration": 0
}
```

Response from a chat request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|The model name|
|created_at|string(date-time)|false|none|Timestamp of the response|
|message|[Message](#schemamessage)|false|none|A message in a chat|
|done_reason|string|false|none|Reason the model stopped generating text|
|done|boolean|false|none|Specifies if the response is complete|
|total_duration|number|false|none|Total duration of the request|
|load_duration|number|false|none|Load duration of the request|
|prompt_eval_count|integer|false|none|Count of prompt evaluations|
|prompt_eval_duration|number|false|none|Duration of prompt evaluations|
|eval_count|integer|false|none|Count of evaluations|
|eval_duration|number|false|none|Duration of evaluations|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "role": "string",
  "content": "string",
  "images": [
    "string"
  ]
}
```

A message in a chat

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|false|none|none|
|content|string|false|none|none|
|images|[string(byte)]|false|none|none|

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
"5m"
```

A string representing the duration

<h2 id="tocS_Options">Options</h2>
<!-- backwards compatibility -->
<a id="schemaoptions"></a>
<a id="schema_Options"></a>
<a id="tocSoptions"></a>
<a id="tocsoptions"></a>

```json
{
  "num_keep": 4,
  "seed": -1,
  "num_predict": -1,
  "top_k": 40,
  "top_p": 0.9,
  "tfs_z": 1,
  "typical_p": 1,
  "repeat_last_n": 64,
  "temperature": 0.8,
  "repeat_penalty": 1.1,
  "presence_penalty": 0.8,
  "frequency_penalty": 0.8,
  "mirostat": 0,
  "mirostat_tau": 5.8,
  "mirostat_eta": 0.1,
  "penalize_newline": true,
  "stop": [
    "AI assistant."
  ],
  "numa": false,
  "num_ctx": 2048,
  "num_batch": 512,
  "num_gpu": -1,
  "main_gpu": 0,
  "low_vram": false,
  "f16_kv": true,
  "logits_all": false,
  "vocab_only": false,
  "use_mmap": true,
  "use_mlock": false,
  "num_thread": 0
}
```

Advanced model and runner options for generation and chat requests

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_keep|integer|false|none|Specifies the number of tokens from the beginning of <br>the context ot retain when the context limit is reached. <br>(Default: 4)<br>|
|seed|integer|false|none|Sets the random number seed to use for generation. Setting this to <br>a specific number will make the model generate the same text for <br>the same prompt. <br>(Default: 0)<br>|
|num_predict|integer|false|none|Maximum number of tokens to predict when generating text. <br>(Default: 128, -1 = infinite generation, -2 = fill context)<br>|
|top_k|integer|false|none|Reduces the probability of generating nonsense. A higher value <br>(e.g. 100) will give more diverse answers, while a lower value <br>(e.g. 10) will be more conservative. <br>(Default: 40)<br>|
|top_p|number(float)|false|none|Works together with top-k. A higher value (e.g., 0.95) will lead to <br>more diverse text, while a lower value (e.g., 0.5) will generate <br>more focused and conservative text. <br>(Default: 0.9)<br>|
|tfs_z|number(float)|false|none|Tail free sampling is used to reduce the impact of less probable <br>tokens from the output. A higher value (e.g., 2.0) will reduce the <br>impact more, while a value of 1.0 disables this setting. <br>(default: 1)<br>|
|typical_p|number(float)|false|none|Controls the selection of typical words based on their probability <br>distribution. A higher value (e.g., 0.95) focuses on more typical <br>words, reducing the chance of unusual words being selected. <br>(Default: 1.0)<br>|
|repeat_last_n|integer|false|none|Sets how far back for the model to look back to prevent repetition. <br>(Default: 64, 0 = disabled, -1 = num_ctx)<br>|
|temperature|number(float)|false|none|The temperature of the model. Increasing the temperature will make <br>the model answer more creatively. <br>(Default: 0.8)<br>|
|repeat_penalty|number(float)|false|none|Sets how strongly to penalize repetitions. A higher value <br>(e.g., 1.5) will penalize repetitions more strongly, while a lower <br>value (e.g., 0.9) will be more lenient. <br>(Default: 1.1)<br>|
|presence_penalty|number(float)|false|none|Applies a penalty to tokens that have already appeared in the <br>generated text, encouraging the model to introduce new tokens. A <br>higher value increases this penalty, promoting more varied and less <br>repetitive output. <br>(Default: 0.8)<br>|
|frequency_penalty|number(float)|false|none|Penalizes tokens based on their frequency in the generated text so <br>far. A higher value reduces the likelihood of frequent tokens being <br>generated again, promoting more diverse outputs. <br>(Default: 0.8)<br>|
|mirostat|number(float)|false|none|Enable Mirostat sampling for controlling perplexity. <br>(default: 0, 0 = disabled, 1 = Mirostat, 2 = Mirostat 2.0)<br>|
|mirostat_tau|number(float)|false|none|Controls the balance between coherence and diversity of the output.<br>A lower value will result in more focused and coherent text. <br>(Default: 5.0)<br>|
|mirostat_eta|number(float)|false|none|Influences how quickly the algorithm responds to feedback from the <br>generated text. A lower learning rate will result in slower <br>adjustments, while a higher learning rate will make the algorithm <br>more responsive. <br>(Default: 0.1)<br>|
|penalize_newline|boolean|false|none|Determines whether the model should penalize the generation of <br>newlines, which can help control the structure and formatting of <br>the output. <br>(Default: true)<br>|
|stop|[string]|false|none|Sets the stop sequences to use. When this pattern is encountered <br>the LLM will stop generating text and return. Multiple stop patterns <br>may be set by specifying multiple separate stop parameters in a <br>modelfile.<br>|
|numa|boolean|false|none|Indicates whether to use Non-Uniform Memory Access (NUMA) for <br>optimizing memory usage and performance on multi-processor systems. <br>(Default: false)<br>|
|num_ctx|integer|false|none|Sets the size of the context window used to generate the next token. <br>(Default: 2048)<br>|
|num_batch|integer|false|none|Specifies the number of batches for processing. <br>(Default: 512)<br>|
|num_gpu|integer|false|none|Specifies the number of GPUs to use. A value of -1 uses all <br>available GPUs. <br>(Default: -1)<br>|
|main_gpu|integer|false|none|Specifies the primary GPU to use for processing. <br>(Default: 0)<br>|
|low_vram|boolean|false|none|Indicates whether to optimize the model for low VRAM usage. <br>(Default: false)<br>|
|f16_kv|boolean|false|none|Indicates whether to use 16-bit floating point precision for <br>key-value pairs, reducing memory usage. <br>(Default: false)<br>|
|logits_all|boolean|false|none|Specifies whether to output logits for all tokens. <br>(Default: false)<br>|
|vocab_only|boolean|false|none|Indicates whether to only load the vocabulary without the full model. <br>(Default: false)<br>|
|use_mmap|boolean|false|none|Determines whether to use memory-mapped files for loading the model, <br>improving performance on large models. <br>(Default: true)<br>|
|use_mlock|boolean|false|none|Determines whether to use memory locking to prevent swapping the <br>model out of RAM. <br>(Default: false)<br>|
|num_thread|integer|false|none|Specifies the number of threads to use for processing. A value of <br>0 uses all available threads. <br>(Default: 0)<br>|
