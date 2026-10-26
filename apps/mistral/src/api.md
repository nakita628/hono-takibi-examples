<h1 id="mistral-ai-api">Mistral AI API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Our Chat Completion and Embeddings APIs specification. Create your account on [La Plateforme](https://console.mistral.ai) to get access and read the [docs](https://docs.mistral.ai) to learn how to use it.

Base URLs:

* <a href="https://api.mistral.ai">https://api.mistral.ai</a> - Production server

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="mistral-ai-api-chat">chat</h1>

Chat Completion API.

## Chat Completion

<a id="opIdchat_completion_v1_chat_completions_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/chat/completions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "model": "mistral-large-latest",
    "temperature": 0,
    "top_p": 1,
    "max_tokens": 0,
    "stream": false,
    "stop": "string",
    "random_seed": 0,
    "metadata": {},
    "messages": [
      {
        "role": "user",
        "content": "Who is the best French painter? Answer in one short sentence."
      }
    ],
    "response_format": {
      "type": "text"
    },
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "string",
          "description": "",
          "strict": false,
          "parameters": {}
        }
      }
    ],
    "tool_choice": "auto",
    "presence_penalty": 0,
    "frequency_penalty": 0,
    "n": 1,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "parallel_tool_calls": true,
    "prompt_mode": "reasoning",
    "reasoning_effort": "high",
    "guardrails": null,
    "prompt_cache_key": "string",
    "safe_prompt": false
  }'
```

`POST /v1/chat/completions`

> Body parameter

```json
{
  "model": "mistral-large-latest",
  "temperature": 0,
  "top_p": 1,
  "max_tokens": 0,
  "stream": false,
  "stop": "string",
  "random_seed": 0,
  "metadata": {},
  "messages": [
    {
      "role": "user",
      "content": "Who is the best French painter? Answer in one short sentence."
    }
  ],
  "response_format": {
    "type": "text"
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "tool_choice": "auto",
  "presence_penalty": 0,
  "frequency_penalty": 0,
  "n": 1,
  "prediction": {
    "type": "content",
    "content": ""
  },
  "parallel_tool_calls": true,
  "prompt_mode": "reasoning",
  "reasoning_effort": "high",
  "guardrails": null,
  "prompt_cache_key": "string",
  "safe_prompt": false
}
```

<h3 id="chat-completion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChatCompletionRequest](#schemachatcompletionrequest)|true|none|
|» model|body|string|true|ID of the model to use. You can use the [List Available Models](/api/#tag/models/operation/list_models_v1_models_get) API to see all of your available models, or see our [Model overview](/models) for model descriptions.|
|» temperature|body|number \| null|false|What sampling temperature to use, we recommend between 0.0 and 0.7. Higher values like 0.7 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both. The default value varies depending on the model you are targeting. Call the `/models` endpoint to retrieve the appropriate value.|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» top_p|body|number|false|Nucleus sampling, where the model considers the results of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or `temperature` but not both.|
|» max_tokens|body|integer \| null|false|The maximum number of tokens to generate in the completion. The token count of your prompt plus `max_tokens` cannot exceed the model's context length.|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|boolean|false|Whether to stream back partial progress. If set, tokens will be sent as data-only server-side events as they become available, with the stream terminated by a data: [DONE] message. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|» stop|body|string \| [string]|false|Stop generation if this token is detected. Or if one of these tokens is detected when providing an array|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|[string]|false|none|
|» random_seed|body|integer \| null|false|The seed to use for random sampling. If set, different calls will generate deterministic results.|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» messages|body|[[SystemMessage](#schemasystemmessage) \| [UserMessage](#schemausermessage) \| [AssistantMessage](#schemaassistantmessage) \| [ToolMessage](#schematoolmessage)]|true|The prompt(s) to generate completions for, encoded as a list of dict with role and content.|
|» » *oneOf*|body|[SystemMessage](#schemasystemmessage)|false|none|
|» » *oneOf*|body|[UserMessage](#schemausermessage)|false|none|
|» » *oneOf*|body|[AssistantMessage](#schemaassistantmessage)|false|none|
|» » *oneOf*|body|[ToolMessage](#schematoolmessage)|false|none|
|» response_format|body|[ResponseFormat](#schemaresponseformat)|false|Specify the format that the model must output. By default it will use `{ "type": "text" }`. Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is in JSON. When using JSON mode you MUST also instruct the model to produce JSON yourself with a system or a user message. Setting to `{ "type": "json_schema" }` enables JSON schema mode, which guarantees the message the model generates is in JSON and follows the schema you provide.|
|» tools|body|[[Tool](#schematool)] \| null|false|A list of tools the model may call. Use this to provide a list of functions the model may generate JSON inputs for.|
|» » *anyOf*|body|[[Tool](#schematool)]|false|none|
|» » *anyOf*|body|null|false|none|
|» tool_choice|body|[ToolChoice](#schematoolchoice) \| [ToolChoiceEnum](#schematoolchoiceenum)|false|Controls which (if any) tool is called by the model. `none` means the model will not call any tool and instead generates a message. `auto` means the model can pick between generating a message or calling one or more tools. `any` or `required` means the model must call one or more tools. Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.|
|» » *anyOf*|body|[ToolChoice](#schematoolchoice)|false|ToolChoice is either a ToolChoiceEnum or a ToolChoice|
|» » *anyOf*|body|[ToolChoiceEnum](#schematoolchoiceenum)|false|none|
|» presence_penalty|body|number|false|The `presence_penalty` determines how much the model penalizes the repetition of words or phrases. A higher presence penalty encourages the model to use a wider variety of words and phrases, making the output more diverse and creative.|
|» frequency_penalty|body|number|false|The `frequency_penalty` penalizes the repetition of words based on their frequency in the generated text. A higher frequency penalty discourages the model from repeating words that have already appeared frequently in the output, promoting diversity and reducing repetition.|
|» n|body|integer \| null|false|Number of completions to return for each request, input tokens are only billed once.|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» prediction|body|[Prediction](#schemaprediction)|false|Enable users to specify expected results, optimizing response times by leveraging known or predictable content. This approach is especially effective for updating text documents or code files with minimal changes, reducing latency while maintaining high-quality results.|
|» parallel_tool_calls|body|boolean|false|Whether to enable parallel function calling during tool use, when enabled the model can call multiple tools in parallel.|
|» prompt_mode|body|[MistralPromptMode](#schemamistralpromptmode) \| null|false|Allows toggling between the reasoning mode and no system prompt. When set to `reasoning` the system prompt for reasoning models will be used. **Deprecated for reasoning models - use `reasoning_effort` parameter instead.**|
|» » *anyOf*|body|[MistralPromptMode](#schemamistralpromptmode)|false|Available options to the prompt_mode argument on the chat completion endpoint.<br>Values represent high-level intent. Assignment to actual SPs is handled internally.<br>System prompt may include knowledge cutoff date, model capabilities, tone to use, safety guidelines, etc.|
|» » *anyOf*|body|null|false|none|
|» reasoning_effort|body|string|false|Controls the reasoning effort level for reasoning models. "high" enables comprehensive reasoning traces, "none" disables reasoning effort.|
|» guardrails|body|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|A list of guardrail configurations to apply to this request. Each guardrail specifies a moderation type, categories with thresholds to evaluate, and an action to take on violation.|
|» » *anyOf*|body|[[GuardrailConfig](#schemaguardrailconfig)]|false|none|
|» » *anyOf*|body|null|false|none|
|» prompt_cache_key|body|string \| null|false|A cache key to enable prompt caching. When provided, the API will attempt to reuse previously computed tokens for requests sharing the same prefix (e.g. multi-turn conversations or requests with a similar system prompt). Cached tokens are billed at 10% of the standard input token price.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» safe_prompt|body|boolean|false|Whether to inject a safety prompt before all conversations.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|auto|
|» » *anyOf*|none|
|» » *anyOf*|any|
|» » *anyOf*|required|
|» » *anyOf*|reasoning|
|» reasoning_effort|high|
|» reasoning_effort|none|

> Example responses

> 200 Response

```json
{
  "id": "cmpl-e5cc70bb28c444948073e77776eb30ef",
  "object": "chat.completion",
  "model": "mistral-small-latest",
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_audio_seconds": 0,
    "num_cached_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "prompt_token_details": {
      "cached_tokens": 0
    }
  },
  "created": 1702256327,
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "string",
        "tool_calls": [
          {
            "id": "null",
            "type": "function",
            "function": {
              "name": "string",
              "arguments": {}
            },
            "index": 0
          }
        ],
        "prefix": false
      },
      "finish_reason": "stop"
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

<h3 id="chat-completion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ChatCompletionResponse](#schemachatcompletionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-fim">fim</h1>

Fill-in-the-middle API.

## Fim Completion

<a id="opIdfim_completion_v1_fim_completions_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/fim/completions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "model": "codestral-latest",
    "temperature": 0,
    "top_p": 1,
    "max_tokens": 0,
    "stream": false,
    "stop": "string",
    "random_seed": 0,
    "metadata": {},
    "prompt": "def",
    "suffix": "return a+b",
    "min_tokens": 0,
    "prompt_cache_key": "string"
  }'
```

`POST /v1/fim/completions`

FIM completion.

> Body parameter

```json
{
  "model": "codestral-latest",
  "temperature": 0,
  "top_p": 1,
  "max_tokens": 0,
  "stream": false,
  "stop": "string",
  "random_seed": 0,
  "metadata": {},
  "prompt": "def",
  "suffix": "return a+b",
  "min_tokens": 0,
  "prompt_cache_key": "string"
}
```

<h3 id="fim-completion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FIMCompletionRequest](#schemafimcompletionrequest)|true|none|
|» model|body|string|true|ID of the model with FIM to use.|
|» temperature|body|number \| null|false|What sampling temperature to use, we recommend between 0.0 and 0.7. Higher values like 0.7 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both. The default value varies depending on the model you are targeting. Call the `/models` endpoint to retrieve the appropriate value.|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» top_p|body|number|false|Nucleus sampling, where the model considers the results of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or `temperature` but not both.|
|» max_tokens|body|integer \| null|false|The maximum number of tokens to generate in the completion. The token count of your prompt plus `max_tokens` cannot exceed the model's context length.|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|boolean|false|Whether to stream back partial progress. If set, tokens will be sent as data-only server-side events as they become available, with the stream terminated by a data: [DONE] message. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|» stop|body|string \| [string]|false|Stop generation if this token is detected. Or if one of these tokens is detected when providing an array|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|[string]|false|none|
|» random_seed|body|integer \| null|false|The seed to use for random sampling. If set, different calls will generate deterministic results.|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» prompt|body|string|true|The text/code to complete.|
|» suffix|body|string \| null|false|Optional text/code that adds more context for the model. When given a `prompt` and a `suffix` the model will fill what is between them. When `suffix` is not provided, the model will simply execute completion starting with `prompt`.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» min_tokens|body|integer \| null|false|The minimum number of tokens to generate in the completion.|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» prompt_cache_key|body|string \| null|false|A cache key to enable prompt caching. When provided, the API will attempt to reuse previously computed tokens for requests sharing the same prefix (e.g. multi-turn conversations or requests with a similar system prompt). Cached tokens are billed at 10% of the standard input token price.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "447e3e0d457e42e98248b5d2ef52a2a3",
  "object": "chat.completion",
  "model": "codestral-2508",
  "usage": {
    "prompt_tokens": 8,
    "completion_tokens": 91,
    "total_tokens": 99
  },
  "created": 1759496862,
  "choices": [
    {
      "index": 0,
      "message": {
        "content": "add_numbers(a: int, b: int) -> int:\n    \"\"\"\n    You are given two integers `a` and `b`. Your task is to write a function that\n    returns the sum of these two integers. The function should be implemented in a\n    way that it can handle very large integers (up to 10^18). As a reminder, your\n    code has to be in python\n    \"\"\"\n",
        "tool_calls": null,
        "prefix": false,
        "role": "assistant"
      },
      "finish_reason": "stop"
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

<h3 id="fim-completion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[FIMCompletionResponse](#schemafimcompletionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-embeddings">embeddings</h1>

Embeddings API.

## Embeddings

<a id="opIdembeddings_v1_embeddings_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/embeddings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "model": "mistral-embed",
    "metadata": {},
    "input": [
      "Embed this sentence.",
      "As well as this one."
    ],
    "output_dimension": 1,
    "output_dtype": "float",
    "encoding_format": "float"
  }'
```

`POST /v1/embeddings`

Embeddings

> Body parameter

```json
{
  "model": "mistral-embed",
  "metadata": {},
  "input": [
    "Embed this sentence.",
    "As well as this one."
  ],
  "output_dimension": 1,
  "output_dtype": "float",
  "encoding_format": "float"
}
```

<h3 id="embeddings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmbeddingRequest](#schemaembeddingrequest)|true|none|
|» model|body|string|true|ID of the model to use.|
|» metadata|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» input|body|string \| [string]|true|Text to embed.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|[string]|false|none|
|» output_dimension|body|integer \| null|false|The dimension of the output embeddings when feature available. If not provided, a default output dimension will be used.|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» output_dtype|body|[EmbeddingDtype](#schemaembeddingdtype)|false|The data type of the output embeddings when feature available. If not provided, a default output data type will be used.|
|» encoding_format|body|[EncodingFormat](#schemaencodingformat)|false|The format of embeddings in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» output_dtype|float|
|» output_dtype|int8|
|» output_dtype|uint8|
|» output_dtype|binary|
|» output_dtype|ubinary|
|» encoding_format|float|
|» encoding_format|base64|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "embedding": [
        -0.016632080078125,
        0.0701904296875,
        0.03143310546875,
        0.01309967041015625,
        0.0202789306640625
      ],
      "index": 0,
      "object": "embedding"
    },
    {
      "embedding": [
        -0.0230560302734375,
        0.039337158203125,
        0.0521240234375,
        -0.0184783935546875,
        0.034271240234375
      ],
      "index": 1,
      "object": "embedding"
    }
  ],
  "model": "mistral-embed",
  "object": "list",
  "usage": {
    "prompt_tokens": 15,
    "completion_tokens": 0,
    "total_tokens": 15,
    "prompt_audio_seconds": null
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

<h3 id="embeddings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[EmbeddingResponse](#schemaembeddingresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-classifiers">classifiers</h1>

Classifiers API.

## Moderations

<a id="opIdmoderations_v1_moderations_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/moderations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "model": "mistral-moderation-latest",
    "metadata": {},
    "input": "string"
  }'
```

`POST /v1/moderations`

> Body parameter

```json
{
  "model": "mistral-moderation-latest",
  "metadata": {},
  "input": "string"
}
```

<h3 id="moderations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClassificationRequest](#schemaclassificationrequest)|true|none|
|» model|body|string|true|ID of the model to use.|
|» metadata|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» input|body|string \| [string]|true|Text to classify.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "id": "4d71ae510af942108ef7344f903e2b88",
  "model": "mistral-moderation-latest",
  "results": [
    {
      "categories": {
        "sexual": false,
        "hate_and_discrimination": false,
        "violence_and_threats": false,
        "dangerous_and_criminal_content": false,
        "selfharm": false,
        "health": false,
        "financial": false,
        "law": false,
        "pii": false
      },
      "category_scores": {
        "sexual": 0.0011335690505802631,
        "hate_and_discrimination": 0.0030753696337342262,
        "violence_and_threats": 0.0003569706459529698,
        "dangerous_and_criminal_content": 0.002251847181469202,
        "selfharm": 0.00017952796770259738,
        "health": 0.0002780309587251395,
        "financial": 0.00008481103577651083,
        "law": 0.00004539786823443137,
        "pii": 0.0023967307060956955
      }
    },
    {
      "categories": {
        "sexual": false,
        "hate_and_discrimination": false,
        "violence_and_threats": false,
        "dangerous_and_criminal_content": false,
        "selfharm": false,
        "health": false,
        "financial": false,
        "law": false,
        "pii": false
      },
      "category_scores": {
        "sexual": 0.000626334105618298,
        "hate_and_discrimination": 0.0013670255430042744,
        "violence_and_threats": 0.0002611903182696551,
        "dangerous_and_criminal_content": 0.0030753696337342262,
        "selfharm": 0.00010889690747717395,
        "health": 0.00015843621804378927,
        "financial": 0.000191104321856983,
        "law": 0.00004006369272246957,
        "pii": 0.0035936026833951473
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

<h3 id="moderations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ModerationResponse](#schemamoderationresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Chat Moderations

<a id="opIdchat_moderations_v1_chat_moderations_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/chat/moderations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "input": [
      {
        "role": "system",
        "content": "string"
      }
    ],
    "model": "string"
  }'
```

`POST /v1/chat/moderations`

> Body parameter

```json
{
  "input": [
    {
      "role": "system",
      "content": "string"
    }
  ],
  "model": "string"
}
```

<h3 id="chat-moderations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChatModerationRequest](#schemachatmoderationrequest)|true|none|
|» input|body|[[SystemMessage](#schemasystemmessage) \| [UserMessage](#schemausermessage) \| [AssistantMessage](#schemaassistantmessage) \| [ToolMessage](#schematoolmessage)] \| [[[SystemMessage](#schemasystemmessage) \| [UserMessage](#schemausermessage) \| [AssistantMessage](#schemaassistantmessage) \| [ToolMessage](#schematoolmessage)]]|true|Chat to classify|
|» » *anyOf*|body|[[SystemMessage](#schemasystemmessage) \| [UserMessage](#schemausermessage) \| [AssistantMessage](#schemaassistantmessage) \| [ToolMessage](#schematoolmessage)]|false|none|
|» *oneOf*|body|[SystemMessage](#schemasystemmessage)|false|none|
|» *oneOf*|body|[UserMessage](#schemausermessage)|false|none|
|» *oneOf*|body|[AssistantMessage](#schemaassistantmessage)|false|none|
|» *oneOf*|body|[ToolMessage](#schematoolmessage)|false|none|
|» » *anyOf*|body|[[[SystemMessage](#schemasystemmessage) \| [UserMessage](#schemausermessage) \| [AssistantMessage](#schemaassistantmessage) \| [ToolMessage](#schematoolmessage)]]|false|none|
|» model|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "352bce1a55814127a3b0bc4fb8f02a35",
  "model": "mistral-moderation-latest",
  "results": [
    {
      "categories": {
        "sexual": false,
        "hate_and_discrimination": false,
        "violence_and_threats": false,
        "dangerous_and_criminal_content": false,
        "selfharm": false,
        "health": false,
        "financial": false,
        "law": false,
        "pii": false
      },
      "category_scores": {
        "sexual": 0.0010322310263291001,
        "hate_and_discrimination": 0.001597845577634871,
        "violence_and_threats": 0.00020342698553577065,
        "dangerous_and_criminal_content": 0.0029810327105224133,
        "selfharm": 0.00017952796770259738,
        "health": 0.0002959570847451687,
        "financial": 0.000079673009167891,
        "law": 0.00004539786823443137,
        "pii": 0.004198795650154352
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

<h3 id="chat-moderations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ModerationResponse](#schemamoderationresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Classifications

<a id="opIdclassifications_v1_classifications_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/classifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "model": "mistral-moderation-latest",
    "metadata": {},
    "input": "string"
  }'
```

`POST /v1/classifications`

> Body parameter

```json
{
  "model": "mistral-moderation-latest",
  "metadata": {},
  "input": "string"
}
```

<h3 id="classifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClassificationRequest](#schemaclassificationrequest)|true|none|
|» model|body|string|true|ID of the model to use.|
|» metadata|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» input|body|string \| [string]|true|Text to classify.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "id": "mod-e5cc70bb28c444948073e77776eb30ef",
  "model": "string",
  "results": [
    {
      "property1": {
        "scores": {
          "property1": 0,
          "property2": 0
        }
      },
      "property2": {
        "scores": {
          "property1": 0,
          "property2": 0
        }
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

<h3 id="classifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ClassificationResponse](#schemaclassificationresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Chat Classifications

<a id="opIdchat_classifications_v1_chat_classifications_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/chat/classifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "model": "string",
    "input": {
      "messages": [
        {
          "role": "system",
          "content": "string"
        }
      ]
    }
  }'
```

`POST /v1/chat/classifications`

> Body parameter

```json
{
  "model": "string",
  "input": {
    "messages": [
      {
        "role": "system",
        "content": "string"
      }
    ]
  }
}
```

<h3 id="chat-classifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChatClassificationRequest](#schemachatclassificationrequest)|true|none|
|» model|body|string|true|none|
|» input|body|[ChatClassificationRequestInputs](#schemachatclassificationrequestinputs)|true|Chat to classify|

> Example responses

> 200 Response

```json
{
  "id": "mod-e5cc70bb28c444948073e77776eb30ef",
  "model": "string",
  "results": [
    {
      "property1": {
        "scores": {
          "property1": 0,
          "property2": 0
        }
      },
      "property2": {
        "scores": {
          "property1": 0,
          "property2": 0
        }
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

<h3 id="chat-classifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ClassificationResponse](#schemaclassificationresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-files">files</h1>

Files API

## List Files

<a id="opIdfiles_api_routes_list_files"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/files`

Returns a list of files that belong to the user's organization.

<h3 id="list-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|page_size|query|integer|false|none|
|include_total|query|boolean|false|none|
|sample_type|query|[[SampleType](#schemasampletype)] \| null|false|none|
|source|query|[[Source](#schemasource)] \| null|false|none|
|search|query|string \| null|false|none|
|purpose|query|[FilePurpose](#schemafilepurpose) \| null|false|none|
|mimetypes|query|[string] \| null|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "<your_file_id>",
      "object": "file",
      "bytes": null,
      "created_at": 1759491994,
      "filename": "<your_file_name>",
      "purpose": "batch",
      "sample_type": "batch_result",
      "source": "mistral",
      "num_lines": 2,
      "mimetype": "application/jsonl",
      "signature": null
    },
    {
      "id": "<your_file_id>",
      "object": "file",
      "bytes": null,
      "created_at": 1759491994,
      "filename": "<your_file_name>",
      "purpose": "batch",
      "sample_type": "batch_result",
      "source": "mistral",
      "num_lines": 2,
      "mimetype": "application/jsonl",
      "signature": null
    }
  ],
  "object": "list",
  "total": 2
}
```

<h3 id="list-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListFilesOut](#schemalistfilesout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Upload File

<a id="opIdfiles_api_routes_upload_file"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/files \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'expiry=0' \
  -F 'visibility=workspace' \
  -F 'purpose=fine-tune' \
  -F 'file=@/path/to/file'
```

`POST /v1/files`

Upload a file that can be used across various endpoints.

The size of individual files can be a maximum of 512 MB. The Fine-tuning API only supports .jsonl files.

Please contact us if you need to increase these storage limits.

> Body parameter

```yaml
expiry: 0
visibility: workspace
purpose: fine-tune
file: string
```

<h3 id="upload-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» expiry|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» visibility|body|object|false|none|
|» purpose|body|[FilePurpose](#schemafilepurpose)|false|none|
|» file|body|[File](#schemafile)|true|The File object (not file name) to be uploaded.<br> To upload a file and specify a custom file name you should format your request as such:<br> ```bash<br> file=@path/to/your/file.jsonl;filename=custom_name.jsonl<br> ```<br> Otherwise, you can just keep the original file name:<br> ```bash<br> file=@path/to/your/file.jsonl<br> ```|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» purpose|fine-tune|
|» purpose|batch|
|» purpose|ocr|

> Example responses

> 200 Response

```json
{
  "id": "e85980c9-409e-4a46-9304-36588f6292b0",
  "object": "file",
  "bytes": null,
  "created_at": 1759500189,
  "filename": "example.file.jsonl",
  "purpose": "fine-tune",
  "sample_type": "instruct",
  "source": "upload",
  "num_lines": 2,
  "mimetype": "application/jsonl",
  "signature": "d4821d2de1917341"
}
```

<h3 id="upload-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UploadFileOut](#schemauploadfileout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Retrieve File

<a id="opIdfiles_api_routes_retrieve_file"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/files/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/files/{file_id}`

Returns information about a specific file.

<h3 id="retrieve-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "e85980c9-409e-4a46-9304-36588f6292b0",
  "object": "file",
  "bytes": null,
  "created_at": 1759500189,
  "filename": "example.file.jsonl",
  "purpose": "fine-tune",
  "sample_type": "instruct",
  "source": "upload",
  "deleted": false,
  "num_lines": 2,
  "mimetype": "application/jsonl",
  "signature": "d4821d2de1917341"
}
```

<h3 id="retrieve-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RetrieveFileOut](#schemaretrievefileout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete File

<a id="opIdfiles_api_routes_delete_file"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/files/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/files/{file_id}`

Delete a file.

<h3 id="delete-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "e85980c9-409e-4a46-9304-36588f6292b0",
  "object": "file",
  "deleted": true
}
```

<h3 id="delete-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DeleteFileOut](#schemadeletefileout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Download File

<a id="opIdfiles_api_routes_download_file"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/files/497f6eca-6276-4993-bfeb-53cbbbba6f08/content \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/files/{file_id}/content`

Download a file

<h3 id="download-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string(uuid)|true|none|

<h3 id="download-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Signed Url

<a id="opIdfiles_api_routes_get_signed_url"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/files/497f6eca-6276-4993-bfeb-53cbbbba6f08/url \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/files/{file_id}/url`

<h3 id="get-signed-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string(uuid)|true|none|
|expiry|query|integer|false|Number of hours before the url becomes invalid. Defaults to 24h|

> Example responses

> 200 Response

```json
{
  "url": "https://mistralaifilesapiprodswe.blob.core.windows.net/fine-tune/.../.../e85980c9409e4a46930436588f6292b0.jsonl?se=2025-10-04T14%3A16%3A17Z&sp=r&sv=2025-01-05&sr=b&sig=..."
}
```

<h3 id="get-signed-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FileSignedURL](#schemafilesignedurl)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-deprecatedagents">deprecated.agents</h1>

(deprecated) Agents completion API

## Agents Completion

<a id="opIdagents_completion_v1_agents_completions_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/agents/completions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "max_tokens": 0,
    "stream": false,
    "stop": "string",
    "random_seed": 0,
    "metadata": {},
    "messages": [
      {
        "role": "user",
        "content": "Who is the best French painter? Answer in one short sentence."
      }
    ],
    "response_format": {
      "type": "text"
    },
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "string",
          "description": "",
          "strict": false,
          "parameters": {}
        }
      }
    ],
    "tool_choice": "auto",
    "presence_penalty": 0,
    "frequency_penalty": 0,
    "n": 1,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "parallel_tool_calls": true,
    "prompt_mode": "reasoning",
    "reasoning_effort": "high",
    "prompt_cache_key": "string",
    "agent_id": "string"
  }'
```

`POST /v1/agents/completions`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "max_tokens": 0,
  "stream": false,
  "stop": "string",
  "random_seed": 0,
  "metadata": {},
  "messages": [
    {
      "role": "user",
      "content": "Who is the best French painter? Answer in one short sentence."
    }
  ],
  "response_format": {
    "type": "text"
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "tool_choice": "auto",
  "presence_penalty": 0,
  "frequency_penalty": 0,
  "n": 1,
  "prediction": {
    "type": "content",
    "content": ""
  },
  "parallel_tool_calls": true,
  "prompt_mode": "reasoning",
  "reasoning_effort": "high",
  "prompt_cache_key": "string",
  "agent_id": "string"
}
```

<h3 id="agents-completion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AgentsCompletionRequest](#schemaagentscompletionrequest)|true|none|
|» max_tokens|body|integer \| null|false|The maximum number of tokens to generate in the completion. The token count of your prompt plus `max_tokens` cannot exceed the model's context length.|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|boolean|false|Whether to stream back partial progress. If set, tokens will be sent as data-only server-side events as they become available, with the stream terminated by a data: [DONE] message. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|» stop|body|string \| [string]|false|Stop generation if this token is detected. Or if one of these tokens is detected when providing an array|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|[string]|false|none|
|» random_seed|body|integer \| null|false|The seed to use for random sampling. If set, different calls will generate deterministic results.|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» messages|body|[[SystemMessage](#schemasystemmessage) \| [UserMessage](#schemausermessage) \| [AssistantMessage](#schemaassistantmessage) \| [ToolMessage](#schematoolmessage)]|true|The prompt(s) to generate completions for, encoded as a list of dict with role and content.|
|» » *oneOf*|body|[SystemMessage](#schemasystemmessage)|false|none|
|» » *oneOf*|body|[UserMessage](#schemausermessage)|false|none|
|» » *oneOf*|body|[AssistantMessage](#schemaassistantmessage)|false|none|
|» » *oneOf*|body|[ToolMessage](#schematoolmessage)|false|none|
|» response_format|body|[ResponseFormat](#schemaresponseformat)|false|Specify the format that the model must output. By default it will use `{ "type": "text" }`. Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is in JSON. When using JSON mode you MUST also instruct the model to produce JSON yourself with a system or a user message. Setting to `{ "type": "json_schema" }` enables JSON schema mode, which guarantees the message the model generates is in JSON and follows the schema you provide.|
|» tools|body|[[Tool](#schematool)] \| null|false|none|
|» » *anyOf*|body|[[Tool](#schematool)]|false|none|
|» » *anyOf*|body|null|false|none|
|» tool_choice|body|[ToolChoice](#schematoolchoice) \| [ToolChoiceEnum](#schematoolchoiceenum)|false|none|
|» » *anyOf*|body|[ToolChoice](#schematoolchoice)|false|ToolChoice is either a ToolChoiceEnum or a ToolChoice|
|» » *anyOf*|body|[ToolChoiceEnum](#schematoolchoiceenum)|false|none|
|» presence_penalty|body|number|false|The `presence_penalty` determines how much the model penalizes the repetition of words or phrases. A higher presence penalty encourages the model to use a wider variety of words and phrases, making the output more diverse and creative.|
|» frequency_penalty|body|number|false|The `frequency_penalty` penalizes the repetition of words based on their frequency in the generated text. A higher frequency penalty discourages the model from repeating words that have already appeared frequently in the output, promoting diversity and reducing repetition.|
|» n|body|integer \| null|false|Number of completions to return for each request, input tokens are only billed once.|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» prediction|body|[Prediction](#schemaprediction)|false|Enable users to specify expected results, optimizing response times by leveraging known or predictable content. This approach is especially effective for updating text documents or code files with minimal changes, reducing latency while maintaining high-quality results.|
|» parallel_tool_calls|body|boolean|false|none|
|» prompt_mode|body|[MistralPromptMode](#schemamistralpromptmode) \| null|false|Allows toggling between the reasoning mode and no system prompt. When set to `reasoning` the system prompt for reasoning models will be used. **Deprecated for reasoning models - use `reasoning_effort` parameter instead.**|
|» » *anyOf*|body|[MistralPromptMode](#schemamistralpromptmode)|false|Available options to the prompt_mode argument on the chat completion endpoint.<br>Values represent high-level intent. Assignment to actual SPs is handled internally.<br>System prompt may include knowledge cutoff date, model capabilities, tone to use, safety guidelines, etc.|
|» » *anyOf*|body|null|false|none|
|» reasoning_effort|body|string|false|Controls the reasoning effort level for reasoning models. "high" enables comprehensive reasoning traces, "none" disables reasoning effort.|
|» prompt_cache_key|body|string \| null|false|A cache key to enable prompt caching. When provided, the API will attempt to reuse previously computed tokens for requests sharing the same prefix (e.g. multi-turn conversations or requests with a similar system prompt). Cached tokens are billed at 10% of the standard input token price.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» agent_id|body|string|true|The ID of the agent to use for this completion.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|auto|
|» » *anyOf*|none|
|» » *anyOf*|any|
|» » *anyOf*|required|
|» » *anyOf*|reasoning|
|» reasoning_effort|high|
|» reasoning_effort|none|

> Example responses

> 200 Response

```json
{
  "id": "cf79f7daaee244b1a0ae5c7b1444424a",
  "object": "chat.completion",
  "model": "mistral-medium-latest",
  "usage": {
    "prompt_tokens": 24,
    "completion_tokens": 27,
    "total_tokens": 51,
    "prompt_audio_seconds": {}
  },
  "created": 1759500534,
  "choices": [
    {
      "index": 0,
      "message": {
        "content": "Arrr, the scallywag Claude Monet be the finest French painter to ever splash colors on a canvas, savvy?",
        "tool_calls": null,
        "prefix": false,
        "role": "assistant"
      },
      "finish_reason": "stop"
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

<h3 id="agents-completion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ChatCompletionResponse](#schemachatcompletionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-deprecatedfine-tuning">deprecated.fine-tuning</h1>

(deprecated) Fine-tuning API

## Get Fine Tuning Jobs

<a id="opIdjobs_api_routes_fine_tuning_get_fine_tuning_jobs"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/fine_tuning/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/fine_tuning/jobs`

Get a list of fine-tuning jobs for your organization and user.

<h3 id="get-fine-tuning-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|The page number of the results to be returned.|
|page_size|query|integer|false|The number of items to return per page.|
|model|query|string \| null|false|The model name used for fine-tuning to filter on. When set, the other results are not displayed.|
|created_after|query|string(date-time) \| null|false|The date/time to filter on. When set, the results for previous creation times are not displayed.|
|created_before|query|string(date-time) \| null|false|none|
|created_by_me|query|boolean|false|When set, only return results for jobs created by the API caller. Other results are not displayed.|
|status|query|string \| null|false|The current job state to filter on. When set, the other results are not displayed.|
|wandb_project|query|string \| null|false|The Weights and Biases project to filter on. When set, the other results are not displayed.|
|wandb_name|query|string \| null|false|The Weight and Biases run name to filter on. When set, the other results are not displayed.|
|suffix|query|string \| null|false|The model suffix to filter on. When set, the other results are not displayed.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "object": "list",
  "total": 0
}
```

<h3 id="get-fine-tuning-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[JobsOut](#schemajobsout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create Fine Tuning Job

<a id="opIdjobs_api_routes_fine_tuning_create_fine_tuning_job"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/fine_tuning/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "model": "string",
    "training_files": [],
    "validation_files": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "suffix": "string",
    "integrations": [
      {
        "type": "wandb",
        "project": "string",
        "name": "string",
        "api_key": "stringstringstringstringstringstringstri",
        "run_name": "string"
      }
    ],
    "auto_start": true,
    "invalid_sample_skip_percentage": 0,
    "job_type": "completion",
    "hyperparameters": {
      "training_steps": 1,
      "learning_rate": 0.0001,
      "weight_decay": 0.1,
      "warmup_fraction": 0.05,
      "epochs": 0.1,
      "seq_len": 100,
      "fim_ratio": 0.9
    },
    "repositories": [
      {
        "type": "github",
        "name": "string",
        "owner": "string",
        "ref": "string",
        "weight": 1,
        "token": "string"
      }
    ],
    "classifier_targets": [
      {
        "name": "string",
        "labels": [
          "string"
        ],
        "weight": 1,
        "loss_function": "single_class"
      }
    ]
  }'
```

`POST /v1/fine_tuning/jobs`

Create a new fine-tuning job, it will be queued for processing.

> Body parameter

```json
{
  "model": "string",
  "training_files": [],
  "validation_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "suffix": "string",
  "integrations": [
    {
      "type": "wandb",
      "project": "string",
      "name": "string",
      "api_key": "stringstringstringstringstringstringstri",
      "run_name": "string"
    }
  ],
  "auto_start": true,
  "invalid_sample_skip_percentage": 0,
  "job_type": "completion",
  "hyperparameters": {
    "training_steps": 1,
    "learning_rate": 0.0001,
    "weight_decay": 0.1,
    "warmup_fraction": 0.05,
    "epochs": 0.1,
    "seq_len": 100,
    "fim_ratio": 0.9
  },
  "repositories": [
    {
      "type": "github",
      "name": "string",
      "owner": "string",
      "ref": "string",
      "weight": 1,
      "token": "string"
    }
  ],
  "classifier_targets": [
    {
      "name": "string",
      "labels": [
        "string"
      ],
      "weight": 1,
      "loss_function": "single_class"
    }
  ]
}
```

<h3 id="create-fine-tuning-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dry_run|query|boolean \| null|false|* If `true` the job is not spawned, instead the query returns a handful of useful metadata<br>  for the user to perform sanity checks (see `LegacyJobMetadataOut` response).<br>* Otherwise, the job is started and the query returns the job ID along with some of the<br>  input parameters (see `JobOut` response).<br>|
|body|body|[JobIn](#schemajobin)|true|none|
|» model|body|string|true|none|
|» training_files|body|[[TrainingFile](#schematrainingfile)]|false|none|
|» validation_files|body|[string(uuid)] \| null|false|A list containing the IDs of uploaded files that contain validation data. If you provide these files, the data is used to generate validation metrics periodically during fine-tuning. These metrics can be viewed in `checkpoints` when getting the status of a running fine-tuning job. The same data should not be present in both train and validation files.|
|» » *anyOf*|body|[string(uuid)]|false|none|
|» » *anyOf*|body|null|false|none|
|» suffix|body|string \| null|false|A string that will be added to your fine-tuning model name. For example, a suffix of "my-great-model" would produce a model name like `ft:open-mistral-7b:my-great-model:xxx...`|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» integrations|body|[[WandbIntegration](#schemawandbintegration)] \| null|false|A list of integrations to enable for your fine-tuning job.|
|» » *anyOf*|body|[[WandbIntegration](#schemawandbintegration)]|false|none|
|» *oneOf*|body|[WandbIntegration](#schemawandbintegration)|false|none|
|» » *anyOf*|body|null|false|none|
|» auto_start|body|boolean|false|This field will be required in a future release.|
|» invalid_sample_skip_percentage|body|number|false|none|
|» job_type|body|[FineTuneableModelType](#schemafinetuneablemodeltype) \| null|false|none|
|» » *anyOf*|body|[FineTuneableModelType](#schemafinetuneablemodeltype)|false|none|
|» » *anyOf*|body|null|false|none|
|» hyperparameters|body|[CompletionTrainingParametersIn](#schemacompletiontrainingparametersin) \| [ClassifierTrainingParametersIn](#schemaclassifiertrainingparametersin)|true|none|
|» » *anyOf*|body|[CompletionTrainingParametersIn](#schemacompletiontrainingparametersin)|false|The fine-tuning hyperparameter settings used in a fine-tune job.|
|» » *anyOf*|body|[ClassifierTrainingParametersIn](#schemaclassifiertrainingparametersin)|false|The fine-tuning hyperparameter settings used in a classifier fine-tune job.|
|» repositories|body|[[GithubRepositoryIn](#schemagithubrepositoryin)] \| null|false|none|
|» » *anyOf*|body|[[GithubRepositoryIn](#schemagithubrepositoryin)]|false|none|
|» *oneOf*|body|[GithubRepositoryIn](#schemagithubrepositoryin)|false|none|
|» » *anyOf*|body|null|false|none|
|» classifier_targets|body|[[ClassifierTargetIn](#schemaclassifiertargetin)] \| null|false|none|
|» » *anyOf*|body|[[ClassifierTargetIn](#schemaclassifiertargetin)]|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|completion|
|» » *anyOf*|classifier|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "auto_start": true,
  "model": "string",
  "status": "QUEUED",
  "created_at": 0,
  "modified_at": 0,
  "training_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "validation_files": [],
  "object": "job",
  "fine_tuned_model": "string",
  "suffix": "string",
  "integrations": [
    {
      "type": "wandb",
      "project": "string",
      "name": "string",
      "run_name": "string",
      "url": "string"
    }
  ],
  "trained_tokens": 0,
  "metadata": {
    "expected_duration_seconds": 0,
    "cost": 0,
    "cost_currency": "string",
    "train_tokens_per_step": 0,
    "train_tokens": 0,
    "data_tokens": 0,
    "estimated_start_time": 0
  },
  "job_type": "completion",
  "hyperparameters": {
    "training_steps": 1,
    "learning_rate": 0.0001,
    "weight_decay": 0.1,
    "warmup_fraction": 0.05,
    "epochs": 0.1,
    "seq_len": 100,
    "fim_ratio": 0.9
  },
  "repositories": []
}
```

<h3 id="create-fine-tuning-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-fine-tuning-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[CompletionJobOut](#schemacompletionjobout) \| [ClassifierJobOut](#schemaclassifierjobout)|false|none|none|
|*oneOf*|[CompletionJobOut](#schemacompletionjobout)|false|none|none|
|*oneOf*|[ClassifierJobOut](#schemaclassifierjobout)|false|none|none|
|*anyOf*|[LegacyJobMetadataOut](#schemalegacyjobmetadataout)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Fine Tuning Job

<a id="opIdjobs_api_routes_fine_tuning_get_fine_tuning_job"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/fine_tuning/jobs/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/fine_tuning/jobs/{job_id}`

Get a fine-tuned job details by its UUID.

<h3 id="get-fine-tuning-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string(uuid)|true|The ID of the job to analyse.|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "auto_start": true,
  "model": "string",
  "status": "QUEUED",
  "created_at": 0,
  "modified_at": 0,
  "training_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "validation_files": [],
  "object": "job",
  "fine_tuned_model": "string",
  "suffix": "string",
  "integrations": [
    {
      "type": "wandb",
      "project": "string",
      "name": "string",
      "run_name": "string",
      "url": "string"
    }
  ],
  "trained_tokens": 0,
  "metadata": {
    "expected_duration_seconds": 0,
    "cost": 0,
    "cost_currency": "string",
    "train_tokens_per_step": 0,
    "train_tokens": 0,
    "data_tokens": 0,
    "estimated_start_time": 0
  },
  "job_type": "completion",
  "hyperparameters": {
    "training_steps": 1,
    "learning_rate": 0.0001,
    "weight_decay": 0.1,
    "warmup_fraction": 0.05,
    "epochs": 0.1,
    "seq_len": 100,
    "fim_ratio": 0.9
  },
  "repositories": [],
  "events": [],
  "checkpoints": []
}
```

<h3 id="get-fine-tuning-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-fine-tuning-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CompletionDetailedJobOut](#schemacompletiondetailedjobout)|false|none|none|
|*oneOf*|[ClassifierDetailedJobOut](#schemaclassifierdetailedjobout)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Cancel Fine Tuning Job

<a id="opIdjobs_api_routes_fine_tuning_cancel_fine_tuning_job"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/fine_tuning/jobs/497f6eca-6276-4993-bfeb-53cbbbba6f08/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/fine_tuning/jobs/{job_id}/cancel`

Request the cancellation of a fine tuning job.

<h3 id="cancel-fine-tuning-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string(uuid)|true|The ID of the job to cancel.|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "auto_start": true,
  "model": "string",
  "status": "QUEUED",
  "created_at": 0,
  "modified_at": 0,
  "training_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "validation_files": [],
  "object": "job",
  "fine_tuned_model": "string",
  "suffix": "string",
  "integrations": [
    {
      "type": "wandb",
      "project": "string",
      "name": "string",
      "run_name": "string",
      "url": "string"
    }
  ],
  "trained_tokens": 0,
  "metadata": {
    "expected_duration_seconds": 0,
    "cost": 0,
    "cost_currency": "string",
    "train_tokens_per_step": 0,
    "train_tokens": 0,
    "data_tokens": 0,
    "estimated_start_time": 0
  },
  "job_type": "completion",
  "hyperparameters": {
    "training_steps": 1,
    "learning_rate": 0.0001,
    "weight_decay": 0.1,
    "warmup_fraction": 0.05,
    "epochs": 0.1,
    "seq_len": 100,
    "fim_ratio": 0.9
  },
  "repositories": [],
  "events": [],
  "checkpoints": []
}
```

<h3 id="cancel-fine-tuning-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="cancel-fine-tuning-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CompletionDetailedJobOut](#schemacompletiondetailedjobout)|false|none|none|
|*oneOf*|[ClassifierDetailedJobOut](#schemaclassifierdetailedjobout)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Start Fine Tuning Job

<a id="opIdjobs_api_routes_fine_tuning_start_fine_tuning_job"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/fine_tuning/jobs/497f6eca-6276-4993-bfeb-53cbbbba6f08/start \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/fine_tuning/jobs/{job_id}/start`

Request the start of a validated fine tuning job.

<h3 id="start-fine-tuning-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "auto_start": true,
  "model": "string",
  "status": "QUEUED",
  "created_at": 0,
  "modified_at": 0,
  "training_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "validation_files": [],
  "object": "job",
  "fine_tuned_model": "string",
  "suffix": "string",
  "integrations": [
    {
      "type": "wandb",
      "project": "string",
      "name": "string",
      "run_name": "string",
      "url": "string"
    }
  ],
  "trained_tokens": 0,
  "metadata": {
    "expected_duration_seconds": 0,
    "cost": 0,
    "cost_currency": "string",
    "train_tokens_per_step": 0,
    "train_tokens": 0,
    "data_tokens": 0,
    "estimated_start_time": 0
  },
  "job_type": "completion",
  "hyperparameters": {
    "training_steps": 1,
    "learning_rate": 0.0001,
    "weight_decay": 0.1,
    "warmup_fraction": 0.05,
    "epochs": 0.1,
    "seq_len": 100,
    "fim_ratio": 0.9
  },
  "repositories": [],
  "events": [],
  "checkpoints": []
}
```

<h3 id="start-fine-tuning-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="start-fine-tuning-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CompletionDetailedJobOut](#schemacompletiondetailedjobout)|false|none|none|
|*oneOf*|[ClassifierDetailedJobOut](#schemaclassifierdetailedjobout)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-models">models</h1>

Model Management API

## List Models

<a id="opIdlist_models_v1_models_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/models`

List all models available to the user.

<h3 id="list-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|query|string \| null|false|none|
|model|query|string \| null|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "<model_id>",
    "capabilities": {
      "completion_chat": true,
      "completion_fim": false,
      "function_calling": false,
      "fine_tuning": false,
      "vision": false,
      "classification": false
    },
    "job": "<job_id>",
    "root": "open-mistral-7b",
    "object": "model",
    "created": 1756746619,
    "owned_by": "<owner_id>",
    "name": null,
    "description": null,
    "max_context_length": 32768,
    "aliases": [],
    "deprecation": null,
    "deprecation_replacement_model": null,
    "default_model_temperature": null,
    "TYPE": "fine-tuned",
    "archived": false
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

<h3 id="list-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ModelList](#schemamodellist)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Retrieve Model

<a id="opIdretrieve_model_v1_models__model_id__get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/models/ft%3Aopen-mistral-7b%3A587a6b29%3A20240514%3A7e773925 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/models/{model_id}`

Retrieve information about a model.

<h3 id="retrieve-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_id|path|string|true|The ID of the model to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "<your_model_id>",
  "capabilities": {
    "completion_chat": true,
    "completion_fim": false,
    "function_calling": false,
    "fine_tuning": false,
    "vision": false,
    "classification": false
  },
  "job": "<job_id>",
  "root": "open-mistral-7b",
  "object": "model",
  "created": 1756746619,
  "owned_by": "<owner_id>",
  "name": null,
  "description": null,
  "max_context_length": 32768,
  "aliases": [],
  "deprecation": null,
  "deprecation_replacement_model": null,
  "default_model_temperature": null,
  "TYPE": "fine-tuned",
  "archived": false
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

<h3 id="retrieve-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="retrieve-model-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[BaseModelCard](#schemabasemodelcard)|false|none|none|
|*oneOf*|[FTModelCard](#schemaftmodelcard)|false|none|Extra fields for fine-tuned models.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete Model

<a id="opIddelete_model_v1_models__model_id__delete"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/models/ft%3Aopen-mistral-7b%3A587a6b29%3A20240514%3A7e773925 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/models/{model_id}`

Delete a fine-tuned model.

<h3 id="delete-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_id|path|string|true|The ID of the model to delete.|

> Example responses

> 200 Response

```json
{
  "id": "ft:open-mistral-7b:587a6b29:20240514:7e773925",
  "object": "model",
  "deleted": true
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

<h3 id="delete-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DeleteModelOut](#schemadeletemodelout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Update Fine Tuned Model

<a id="opIdjobs_api_routes_fine_tuning_update_fine_tuned_model"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/fine_tuning/models/ft%3Aopen-mistral-7b%3A587a6b29%3A20240514%3A7e773925 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string"
  }'
```

`PATCH /v1/fine_tuning/models/{model_id}`

Update a model name or description.

> Body parameter

```json
{
  "name": "string",
  "description": "string"
}
```

<h3 id="update-fine-tuned-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_id|path|string|true|The ID of the model to update.|
|body|body|[UpdateFTModelIn](#schemaupdateftmodelin)|true|none|
|» name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "model",
  "created": 0,
  "owned_by": "string",
  "workspace_id": "string",
  "root": "string",
  "root_version": "string",
  "archived": true,
  "name": "string",
  "description": "string",
  "capabilities": {
    "completion_chat": true,
    "completion_fim": false,
    "function_calling": false,
    "fine_tuning": false,
    "classification": false
  },
  "max_context_length": 32768,
  "aliases": [],
  "job": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "model_type": "completion"
}
```

<h3 id="update-fine-tuned-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-fine-tuned-model-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CompletionFTModelOut](#schemacompletionftmodelout)|false|none|none|
|*oneOf*|[ClassifierFTModelOut](#schemaclassifierftmodelout)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Archive Fine Tuned Model

<a id="opIdjobs_api_routes_fine_tuning_archive_fine_tuned_model"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/fine_tuning/models/ft%3Aopen-mistral-7b%3A587a6b29%3A20240514%3A7e773925/archive \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/fine_tuning/models/{model_id}/archive`

Archive a fine-tuned model.

<h3 id="archive-fine-tuned-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_id|path|string|true|The ID of the model to archive.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "model",
  "archived": true
}
```

<h3 id="archive-fine-tuned-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ArchiveFTModelOut](#schemaarchiveftmodelout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Unarchive Fine Tuned Model

<a id="opIdjobs_api_routes_fine_tuning_unarchive_fine_tuned_model"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/fine_tuning/models/ft%3Aopen-mistral-7b%3A587a6b29%3A20240514%3A7e773925/archive \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/fine_tuning/models/{model_id}/archive`

Un-archive a fine-tuned model.

<h3 id="unarchive-fine-tuned-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_id|path|string|true|The ID of the model to unarchive.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "model",
  "archived": false
}
```

<h3 id="unarchive-fine-tuned-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UnarchiveFTModelOut](#schemaunarchiveftmodelout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-batch">batch</h1>

Batch API

## Get Batch Jobs

<a id="opIdjobs_api_routes_batch_get_batch_jobs"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/batch/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/batch/jobs`

Get a list of batch jobs for your organization and user.

<h3 id="get-batch-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|page_size|query|integer|false|none|
|model|query|string \| null|false|none|
|agent_id|query|string \| null|false|none|
|metadata|query|object \| null|false|none|
|created_after|query|string(date-time) \| null|false|none|
|created_by_me|query|boolean|false|none|
|status|query|[[BatchJobStatus](#schemabatchjobstatus)] \| null|false|none|
|order_by|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order_by|created|
|order_by|-created|

> Example responses

> 200 Response

```json
{
  "data": [],
  "object": "list",
  "total": 0
}
```

<h3 id="get-batch-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BatchJobsOut](#schemabatchjobsout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create Batch Job

<a id="opIdjobs_api_routes_batch_create_batch_job"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/batch/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "input_files": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "requests": [
      {
        "custom_id": "string",
        "body": {}
      }
    ],
    "endpoint": "/v1/chat/completions",
    "model": "mistral-small-latest",
    "agent_id": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "timeout_hours": 24
  }'
```

`POST /v1/batch/jobs`

Create a new batch job, it will be queued for processing.

> Body parameter

```json
{
  "input_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "requests": [
    {
      "custom_id": "string",
      "body": {}
    }
  ],
  "endpoint": "/v1/chat/completions",
  "model": "mistral-small-latest",
  "agent_id": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "timeout_hours": 24
}
```

<h3 id="create-batch-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchJobIn](#schemabatchjobin)|true|none|
|» input_files|body|[string(uuid)] \| null|false|The list of input files to be used for batch inference, these files should be `jsonl` files, containing the input data corresponding to the bory request for the batch inference in a "body" field. An example of such file is the following: ```json {"custom_id": "0", "body": {"max_tokens": 100, "messages": [{"role": "user", "content": "What is the best French cheese?"}]}} {"custom_id": "1", "body": {"max_tokens": 100, "messages": [{"role": "user", "content": "What is the best French wine?"}]}} ```|
|» » *anyOf*|body|[string(uuid)]|false|none|
|» » *anyOf*|body|null|false|none|
|» requests|body|[[BatchRequest](#schemabatchrequest)] \| null|false|none|
|» » *anyOf*|body|[[BatchRequest](#schemabatchrequest)]|false|none|
|» » *anyOf*|body|null|false|none|
|» endpoint|body|[ApiEndpoint](#schemaapiendpoint)|true|The endpoint to be used for batch inference.|
|» model|body|string \| null|false|The model to be used for batch inference.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» agent_id|body|string \| null|false|In case you want to use a specific agent from the **deprecated** agents api for batch inference, you can specify the agent ID here.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|object \| null|false|The metadata of your choice to be associated with the batch inference job.|
|» » *anyOf*|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» timeout_hours|body|integer|false|The timeout in hours for the batch inference job.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» endpoint|/v1/chat/completions|
|» endpoint|/v1/embeddings|
|» endpoint|/v1/fim/completions|
|» endpoint|/v1/moderations|
|» endpoint|/v1/chat/moderations|
|» endpoint|/v1/ocr|
|» endpoint|/v1/classifications|
|» endpoint|/v1/chat/classifications|
|» endpoint|/v1/conversations|
|» endpoint|/v1/audio/transcriptions|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "batch",
  "input_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "metadata": {},
  "endpoint": "string",
  "model": "string",
  "agent_id": "string",
  "output_file": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "error_file": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "errors": [
    {
      "message": "string",
      "count": 1
    }
  ],
  "outputs": [
    {}
  ],
  "status": "QUEUED",
  "created_at": 0,
  "total_requests": 0,
  "completed_requests": 0,
  "succeeded_requests": 0,
  "failed_requests": 0,
  "started_at": 0,
  "completed_at": 0
}
```

<h3 id="create-batch-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BatchJobOut](#schemabatchjobout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Batch Job

<a id="opIdjobs_api_routes_batch_get_batch_job"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/batch/jobs/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/batch/jobs/{job_id}`

Get a batch job details by its UUID.

Args:
    inline: If True, return results inline in the response.

<h3 id="get-batch-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string(uuid)|true|none|
|inline|query|boolean \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "batch",
  "input_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "metadata": {},
  "endpoint": "string",
  "model": "string",
  "agent_id": "string",
  "output_file": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "error_file": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "errors": [
    {
      "message": "string",
      "count": 1
    }
  ],
  "outputs": [
    {}
  ],
  "status": "QUEUED",
  "created_at": 0,
  "total_requests": 0,
  "completed_requests": 0,
  "succeeded_requests": 0,
  "failed_requests": 0,
  "started_at": 0,
  "completed_at": 0
}
```

<h3 id="get-batch-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BatchJobOut](#schemabatchjobout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Cancel Batch Job

<a id="opIdjobs_api_routes_batch_cancel_batch_job"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/batch/jobs/497f6eca-6276-4993-bfeb-53cbbbba6f08/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/batch/jobs/{job_id}/cancel`

Request the cancellation of a batch job.

<h3 id="cancel-batch-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "batch",
  "input_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "metadata": {},
  "endpoint": "string",
  "model": "string",
  "agent_id": "string",
  "output_file": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "error_file": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "errors": [
    {
      "message": "string",
      "count": 1
    }
  ],
  "outputs": [
    {}
  ],
  "status": "QUEUED",
  "created_at": 0,
  "total_requests": 0,
  "completed_requests": 0,
  "succeeded_requests": 0,
  "failed_requests": 0,
  "started_at": 0,
  "completed_at": 0
}
```

<h3 id="cancel-batch-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BatchJobOut](#schemabatchjobout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-ocr">ocr</h1>

OCR API

## OCR

<a id="opIdocr_v1_ocr_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/ocr \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "model": "string",
    "id": "string",
    "document": {
      "type": "file",
      "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "pages": "string",
    "include_image_base64": true,
    "image_limit": 0,
    "image_min_size": 0,
    "bbox_annotation_format": {
      "type": "text"
    },
    "document_annotation_format": {
      "type": "text"
    },
    "document_annotation_prompt": "string",
    "table_format": "markdown",
    "extract_header": false,
    "extract_footer": false,
    "include_blocks": false,
    "confidence_scores_granularity": "word"
  }'
```

`POST /v1/ocr`

> Body parameter

```json
{
  "model": "string",
  "id": "string",
  "document": {
    "type": "file",
    "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "pages": "string",
  "include_image_base64": true,
  "image_limit": 0,
  "image_min_size": 0,
  "bbox_annotation_format": {
    "type": "text"
  },
  "document_annotation_format": {
    "type": "text"
  },
  "document_annotation_prompt": "string",
  "table_format": "markdown",
  "extract_header": false,
  "extract_footer": false,
  "include_blocks": false,
  "confidence_scores_granularity": "word"
}
```

<h3 id="ocr-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OCRRequest](#schemaocrrequest)|true|none|
|» model|body|string \| null|true|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» id|body|string|false|none|
|» document|body|[FileChunk](#schemafilechunk) \| [DocumentURLChunk](#schemadocumenturlchunk) \| [ImageURLChunk](#schemaimageurlchunk)|true|Document to run OCR on|
|» » *anyOf*|body|[FileChunk](#schemafilechunk)|false|none|
|» » *anyOf*|body|[DocumentURLChunk](#schemadocumenturlchunk)|false|none|
|» » *anyOf*|body|[ImageURLChunk](#schemaimageurlchunk)|false|{"type":"image_url","image_url":{"url":"data:image/png;base64,iVBORw0|
|» pages|body|string \| [integer] \| null|false|Specific pages to process. Accepts a list of integers or a string of comma-separated numbers and ranges (e.g. '0,1,2' or '0-5' or '0,2-4'). Page numbers start from 0.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|[integer]|false|none|
|» » *anyOf*|body|null|false|none|
|» include_image_base64|body|boolean \| null|false|Include image URLs in response|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» image_limit|body|integer \| null|false|Max images to extract|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» image_min_size|body|integer \| null|false|Minimum height and width of image to extract|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» bbox_annotation_format|body|[ResponseFormat](#schemaresponseformat) \| null|false|Structured output class for extracting useful information from each extracted bounding box / image from document. Only json_schema is valid for this field|
|» » *anyOf*|body|[ResponseFormat](#schemaresponseformat)|false|Specify the format that the model must output. By default it will use `{ "type": "text" }`. Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is in JSON. When using JSON mode you MUST also instruct the model to produce JSON yourself with a system or a user message. Setting to `{ "type": "json_schema" }` enables JSON schema mode, which guarantees the message the model generates is in JSON and follows the schema you provide.|
|» » *anyOf*|body|null|false|none|
|» document_annotation_format|body|[ResponseFormat](#schemaresponseformat) \| null|false|Structured output class for extracting useful information from the entire document. Only json_schema is valid for this field|
|» » *anyOf*|body|[ResponseFormat](#schemaresponseformat)|false|Specify the format that the model must output. By default it will use `{ "type": "text" }`. Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is in JSON. When using JSON mode you MUST also instruct the model to produce JSON yourself with a system or a user message. Setting to `{ "type": "json_schema" }` enables JSON schema mode, which guarantees the message the model generates is in JSON and follows the schema you provide.|
|» » *anyOf*|body|null|false|none|
|» document_annotation_prompt|body|string \| null|false|Optional prompt to guide the model in extracting structured output from the entire document. A document_annotation_format must be provided.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» table_format|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» extract_header|body|boolean|false|none|
|» extract_footer|body|boolean|false|none|
|» include_blocks|body|boolean|false|Return paragraph-level bounding boxes for all content blocks in the response|
|» confidence_scores_granularity|body|string \| null|false|Granularity for confidence scores: 'word' (per-word scores) or 'page' (aggregate only). Defaults to None (no confidence scores) to keep response payload small.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|markdown|
|» » *anyOf*|html|
|» » *anyOf*|word|
|» » *anyOf*|page|

> Example responses

> 200 Response

```json
{
  "pages": [
    {
      "index": 1,
      "markdown": "# LEVERAGING UNLABELED DATA TO PREDICT OUT-OF-DISTRIBUTION PERFORMANCE\nSaurabh Garg*<br> Carnegie Mellon University<br> sgarg2@andrew.cmu.edu<br> Sivaraman Balakrishnan<br> Carnegie Mellon University<br> sbalakri@andrew.cmu.edu<br> Zachary C. Lipton<br> Carnegie Mellon University<br> zlipton@andrew.cmu.edu\n## Behnam Neyshabur\nGoogle Research, Blueshift team<br> neyshabur@google.com\nHanie Sedghi<br> Google Research, Brain team<br> hsedghi@google.com\n#### Abstract\nReal-world machine learning deployments are characterized by mismatches between the source (training) and target (test) distributions that may cause performance drops. In this work, we investigate methods for predicting the target domain accuracy using only labeled source data and unlabeled target data. We propose Average Thresholded Confidence (ATC), a practical method that learns a threshold on the model's confidence, predicting accuracy as the fraction of unlabeled examples for which model confidence exceeds that threshold. ATC outperforms previous methods across several model architectures, types of distribution shifts (e.g., due to synthetic corruptions, dataset reproduction, or novel subpopulations), and datasets (WILDS, ImageNet, BREEDS, CIFAR, and MNIST). In our experiments, ATC estimates target performance $2-4 \\times$ more accurately than prior methods. We also explore the theoretical foundations of the problem, proving that, in general, identifying the accuracy is just as hard as identifying the optimal predictor and thus, the efficacy of any method rests upon (perhaps unstated) assumptions on the nature of the shift. Finally, analyzing our method on some toy distributions, we provide insights concerning when it works ${ }^{1}$.\n## 1 INTRODUCTION\nMachine learning models deployed in the real world typically encounter examples from previously unseen distributions. While the IID assumption enables us to evaluate models using held-out data from the source distribution (from which training data is sampled), this estimate is no longer valid in presence of a distribution shift. Moreover, under such shifts, model accuracy tends to degrade (Szegedy et al., 2014; Recht et al., 2019; Koh et al., 2021). Commonly, the only data available to the practitioner are a labeled training set (source) and unlabeled deployment-time data which makes the problem more difficult. In this setting, detecting shifts in the distribution of covariates is known to be possible (but difficult) in theory (Ramdas et al., 2015), and in practice (Rabanser et al., 2018). However, producing an optimal predictor using only labeled source and unlabeled target data is well-known to be impossible absent further assumptions (Ben-David et al., 2010; Lipton et al., 2018).\nTwo vital questions that remain are: (i) the precise conditions under which we can estimate a classifier's target-domain accuracy; and (ii) which methods are most practically useful. To begin, the straightforward way to assess the performance of a model under distribution shift would be to collect labeled (target domain) examples and then to evaluate the model on that data. However, collecting fresh labeled data from the target distribution is prohibitively expensive and time-consuming, especially if the target distribution is non-stationary. Hence, instead of using labeled data, we aim to use unlabeled data from the target distribution, that is comparatively abundant, to predict model performance. Note that in this work, our focus is not to improve performance on the target but, rather, to estimate the accuracy on the target for a given classifier.\n[^0]: Work done in part while Saurabh Garg was interning at Google ${ }^{1}$ Code is available at [https://github.com/saurabhgarg1996/ATC_code](https://github.com/saurabhgarg1996/ATC_code).\n",
      "images": [],
      "dimensions": {
        "dpi": 200,
        "height": 2200,
        "width": 1700
      }
    },
    {
      "index": 2,
      "markdown": "![img-0.jpeg](img-0.jpeg)\nFigure 1: Illustration of our proposed method ATC. Left: using source domain validation data, we identify a threshold on a score (e.g. negative entropy) computed on model confidence such that fraction of examples above the threshold matches the validation set accuracy. ATC estimates accuracy on unlabeled target data as the fraction of examples with the score above the threshold. Interestingly, this threshold yields accurate estimates on a wide set of target distributions resulting from natural and synthetic shifts. Right: Efficacy of ATC over previously proposed approaches on our testbed with a post-hoc calibrated model. To obtain errors on the same scale, we rescale all errors with Average Confidence (AC) error. Lower estimation error is better. See Table 1 for exact numbers and comparison on various types of distribution shift. See Sec. 5 for details on our testbed.\nRecently, numerous methods have been proposed for this purpose (Deng & Zheng, 2021; Chen et al., 2021b; Jiang et al., 2021; Deng et al., 2021; Guillory et al., 2021). These methods either require calibration on the target domain to yield consistent estimates (Jiang et al., 2021; Guillory et al., 2021) or additional labeled data from several target domains to learn a linear regression function on a distributional distance that then predicts model performance (Deng et al., 2021; Deng & Zheng, 2021; Guillory et al., 2021). However, methods that require calibration on the target domain typically yield poor estimates since deep models trained and calibrated on source data are not, in general, calibrated on a (previously unseen) target domain (Ovadia et al., 2019). Besides, methods that leverage labeled data from target domains rely on the fact that unseen target domains exhibit strong linear correlation with seen target domains on the underlying distance measure and, hence, can be rendered ineffective when such target domains with labeled data are unavailable (in Sec. 5.1 we demonstrate such a failure on a real-world distribution shift problem). Therefore, throughout the paper, we assume access to labeled source data and only unlabeled data from target domain(s).\nIn this work, we first show that absent assumptions on the source classifier or the nature of the shift, no method of estimating accuracy will work generally (even in non-contrived settings). To estimate accuracy on target domain perfectly, we highlight that even given perfect knowledge of the labeled source distribution (i.e., $p_{s}(x, y)$ ) and unlabeled target distribution (i.e., $p_{t}(x)$ ), we need restrictions on the nature of the shift such that we can uniquely identify the target conditional $p_{t}(y \\mid x)$. Thus, in general, identifying the accuracy of the classifier is as hard as identifying the optimal predictor.\nSecond, motivated by the superiority of methods that use maximum softmax probability (or logit) of a model for Out-Of-Distribution (OOD) detection (Hendrycks & Gimpel, 2016; Hendrycks et al., 2019), we propose a simple method that leverages softmax probability to predict model performance. Our method, Average Thresholded Confidence (ATC), learns a threshold on a score (e.g., maximum confidence or negative entropy) of model confidence on validation source data and predicts target domain accuracy as the fraction of unlabeled target points that receive a score above that threshold. ATC selects a threshold on validation source data such that the fraction of source examples that receive the score above the threshold match the accuracy of those examples. Our primary contribution in ATC is the proposal of obtaining the threshold and observing its efficacy on (practical) accuracy estimation. Importantly, our work takes a step forward in positively answering the question raised in Deng & Zheng (2021); Deng et al. (2021) about a practical strategy to select a threshold that enables accuracy prediction with thresholded model confidence.\n",
      "images": [
        {
          "id": "img-0.jpeg",
          "top_left_x": 292,
          "top_left_y": 217,
          "bottom_right_x": 1405,
          "bottom_right_y": 649,
          "image_base64": "..."
        }
      ],
      "dimensions": {
        "dpi": 200,
        "height": 2200,
        "width": 1700
      }
    },
    {
      "index": 3,
      "markdown": "...",
      "images": [],
      "dimensions": {}
    },
    {
      "index": 27,
      "markdown": "![img-8.jpeg](img-8.jpeg)\nFigure 9: Scatter plot of predicted accuracy versus (true) OOD accuracy for vision datasets except MNIST with a ResNet50 model. Results reported by aggregating MAE numbers over 4 different seeds.\n",
      "images": [
        {
          "id": "img-8.jpeg",
          "top_left_x": 290,
          "top_left_y": 226,
          "bottom_right_x": 1405,
          "bottom_right_y": 1834,
          "image_base64": "..."
        }
      ],
      "dimensions": {
        "dpi": 200,
        "height": 2200,
        "width": 1700
      }
    },
    {
      "index": 28,
      "markdown": "| Dataset | Shift | IM |  | AC |  | DOC |  | GDE | ATC-MC (Ours) |  | ATC-NE (Ours) |  | | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | |  |  | Pre T | Post T | Pre T | Post T | Pre T | Post T | Post T | Pre T | Post T | Pre T | Post T | | CIFAR10 | Natural | 6.60 | 5.74 | 9.88 | 6.89 | 7.25 | 6.07 | 4.77 | 3.21 | 3.02 | 2.99 | 2.85 | |  |  | (0.35) | (0.30) | (0.16) | (0.13) | (0.15) | (0.16) | (0.13) | (0.49) | (0.40) | (0.37) | (0.29) | |  | Synthetic | 12.33 | 10.20 | 16.50 | 11.91 | 13.87 | 11.08 | 6.55 | 4.65 | 4.25 | 4.21 | 3.87 | |  |  | (0.51) | (0.48) | (0.26) | (0.17) | (0.18) | (0.17) | (0.35) | (0.55) | (0.55) | (0.55) | (0.75) | | CIFAR100 | Synthetic | 13.69 | 11.51 | 23.61 | 13.10 | 14.60 | 10.14 | 9.85 | 5.50 | 4.75 | 4.72 | 4.94 | |  |  | (0.55) | (0.41) | (1.16) | (0.80) | (0.77) | (0.64) | (0.57) | (0.70) | (0.73) | (0.74) | (0.74) | | ImageNet200 | Natural | 12.37 | 8.19 | 22.07 | 8.61 | 15.17 | 7.81 | 5.13 | 4.37 | 2.04 | 3.79 | 1.45 | |  |  | (0.25) | (0.33) | (0.08) | (0.25) | (0.11) | (0.29) | (0.08) | (0.39) | (0.24) | (0.30) | (0.27) | |  | Synthetic | 19.86 | 12.94 | 32.44 | 13.35 | 25.02 | 12.38 | 5.41 | 5.93 | 3.09 | 5.00 | 2.68 | |  |  | (1.38) | (1.81) | (1.00) | (1.30) | (1.10) | (1.38) | (0.89) | (1.38) | (0.87) | (1.28) | (0.45) | | ImageNet | Natural | 7.77 | 6.50 | 18.13 | 6.02 | 8.13 | 5.76 | 6.23 | 3.88 | 2.17 | 2.06 | 0.80 | |  |  | (0.27) | (0.33) | (0.23) | (0.34) | (0.27) | (0.37) | (0.41) | (0.53) | (0.62) | (0.54) | (0.44) | |  | Synthetic | 13.39 | 10.12 | 24.62 | 8.51 | 13.55 | 7.90 | 6.32 | 3.34 | 2.53 | 2.61 | 4.89 | |  |  | (0.53) | (0.63) | (0.64) | (0.71) | (0.61) | (0.72) | (0.33) | (0.53) | (0.36) | (0.33) | (0.83) | | FMoW-WILDS | Natural | 5.53 | 4.31 | 33.53 | 12.84 | 5.94 | 4.45 | 5.74 | 3.06 | 2.70 | 3.02 | 2.72 | |  |  | (0.33) | (0.63) | (0.13) | (12.06) | (0.36) | (0.77) | (0.55) | (0.36) | (0.54) | (0.35) | (0.44) | | RxRx1-WILDS | Natural | 5.80 | 5.72 | 7.90 | 4.84 | 5.98 | 5.98 | 6.03 | 4.66 | 4.56 | 4.41 | 4.47 | |  |  | (0.17) | (0.15) | (0.24) | (0.09) | (0.15) | (0.13) | (0.08) | (0.38) | (0.38) | (0.31) | (0.26) | | Amazon-WILDS | Natural | 2.40 | 2.29 | 8.01 | 2.38 | 2.40 | 2.28 | 17.87 | 1.65 | 1.62 | 1.60 | 1.59 | |  |  | (0.08) | (0.09) | (0.53) | (0.17) | (0.09) | (0.09) | (0.18) | (0.06) | (0.05) | (0.14) | (0.15) | | CivilCom.-WILDS | Natural | 12.64 | 10.80 | 16.76 | 11.03 | 13.31 | 10.99 | 16.65 |  | 7.14 |  |  | |  |  | (0.52) | (0.48) | (0.53) | (0.49) | (0.52) | (0.49) | (0.25) |  | (0.41) |  |  | | MNIST | Natural | 18.48 | 15.99 | 21.17 | 14.81 | 20.19 | 14.56 | 24.42 | 5.02 | 2.40 | 3.14 | 3.50 | |  |  | (0.45) | (1.53) | (0.24) | (3.89) | (0.23) | (3.47) | (0.41) | (0.44) | (1.83) | (0.49) | (0.17) | | ENTITY-13 | Same | 16.23 | 11.14 | 24.97 | 10.88 | 19.08 | 10.47 | 10.71 | 5.39 | 3.88 | 4.58 | 4.19 | |  |  | (0.77) | (0.65) | (0.70) | (0.77) | (0.65) | (0.72) | (0.74) | (0.92) | (0.61) | (0.85) | (0.16) | |  | Novel | 28.53 | 22.02 | 38.33 | 21.64 | 32.43 | 21.22 | 20.61 | 13.58 | 10.28 | 12.25 | 6.63 | |  |  | (0.82) | (0.68) | (0.75) | (0.86) | (0.69) | (0.80) | (0.60) | (1.15) | (1.34) | (1.21) | (0.93) | | ENTITY-30 | Same | 18.59 | 14.46 | 28.82 | 14.30 | 21.63 | 13.46 | 12.92 | 9.12 | 7.75 | 8.15 | 7.64 | |  |  | (0.51) | (0.52) | (0.43) | (0.71) | (0.37) | (0.59) | (0.14) | (0.62) | (0.72) | (0.68) | (0.88) | |  | Novel | 32.34 | 26.85 | 44.02 | 26.27 | 36.82 | 25.42 | 23.16 | 17.75 | 14.30 | 15.60 | 10.57 | |  |  | (0.60) | (0.58) | (0.56) | (0.79) | (0.47) | (0.68) | (0.12) | (0.76) | (0.85) | (0.86) | (0.86) | | NONLIVING-26 | Same | 18.66 | 17.17 | 26.39 | 16.14 | 19.86 | 15.58 | 16.63 | 10.87 | 10.24 | 10.07 | 10.26 | |  |  | (0.76) | (0.74) | (0.82) | (0.81) | (0.67) | (0.76) | (0.45) | (0.98) | (0.83) | (0.92) | (1.18) | |  | Novel | 33.43 | 31.53 | 41.66 | 29.87 | 35.13 | 29.31 | 29.56 | 21.70 | 20.12 | 19.08 | 18.26 | |  |  | (0.67) | (0.65) | (0.67) | (0.71) | (0.54) | (0.64) | (0.21) | (0.86) | (0.75) | (0.82) | (1.12) | | LIVING-17 | Same | 12.63 | 11.05 | 18.32 | 10.46 | 14.43 | 10.14 | 9.87 | 4.57 | 3.95 | 3.81 | 4.21 | |  |  | (1.25) | (1.20) | (1.01) | (1.12) | (1.11) | (1.16) | (0.61) | (0.71) | (0.48) | (0.22) | (0.53) | |  | Novel | 29.03 | 26.96 | 35.67 | 26.11 | 31.73 | 25.73 | 23.53 | 16.15 | 14.49 | 12.97 | 11.39 | |  |  | (1.44) | (1.38) | (1.09) | (1.27) | (1.19) | (1.35) | (0.52) | (1.36) | (1.46) | (1.52) | (1.72) |\nTable 3: Mean Absolute estimation Error (MAE) results for different datasets in our setup grouped by the nature of shift. 'Same' refers to same subpopulation shifts and 'Novel' refers novel subpopulation shifts. We include details about the target sets considered in each shift in Table 2. Post T denotes use of TS calibration on source. For language datasets, we use DistilBERT-base-uncased, for vision dataset we report results with DenseNet model with the exception of MNIST where we use FCN. Across all datasets, we observe that ATC achieves superior performance (lower MAE is better). For GDE post T and pre T estimates match since TS doesn't alter the argmax prediction. Results reported by aggregating MAE numbers over 4 different seeds. Values in parenthesis (i.e., $(\\cdot)$ ) denote standard deviation values.\n",
      "images": [],
      "dimensions": {
        "dpi": 200,
        "height": 2200,
        "width": 1700
      }
    },
    {
      "index": 29,
      "markdown": "| Dataset | Shift | IM |  | AC |  | DOC |  | GDE | ATC-MC (Ours) |  | ATC-NE (Ours) |  | | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | |  |  | Pre T | Post T | Pre T | Post T | Pre T | Post T | Post T | Pre T | Post T | Pre T | Post T | | CIFAR10 | Natural | 7.14 | 6.20 | 10.25 | 7.06 | 7.68 | 6.35 | 5.74 | 4.02 | 3.85 | 3.76 | 3.38 | |  |  | (0.14) | (0.11) | (0.31) | (0.33) | (0.28) | (0.27) | (0.25) | (0.38) | (0.30) | (0.33) | (0.32) | |  | Synthetic | 12.62 | 10.75 | 16.50 | 11.91 | 13.93 | 11.20 | 7.97 | 5.66 | 5.03 | 4.87 | 3.63 | |  |  | (0.76) | (0.71) | (0.28) | (0.24) | (0.29) | (0.28) | (0.13) | (0.64) | (0.71) | (0.71) | (0.62) | | CIFAR100 | Synthetic | 12.77 | 12.34 | 16.89 | 12.73 | 11.18 | 9.63 | 12.00 | 5.61 | 5.55 | 5.65 | 5.76 | |  |  | (0.43) | (0.68) | (0.20) | (2.59) | (0.35) | (1.25) | (0.48) | (0.51) | (0.55) | (0.35) | (0.27) | | ImageNet200 | Natural | 12.63 | 7.99 | 23.08 | 7.22 | 15.40 | 6.33 | 5.00 | 4.60 | 1.80 | 4.06 | 1.38 | |  |  | (0.59) | (0.47) | (0.31) | (0.22) | (0.42) | (0.24) | (0.36) | (0.63) | (0.17) | (0.69) | (0.29) | |  | Synthetic | 20.17 | 11.74 | 33.69 | 9.51 | 25.49 | 8.61 | 4.19 | 5.37 | 2.78 | 4.53 | 3.58 | |  |  | (0.74) | (0.80) | (0.73) | (0.51) | (0.66) | (0.50) | (0.14) | (0.88) | (0.23) | (0.79) | (0.33) | | ImageNet | Natural | 8.09 | 6.42 | 21.66 | 5.91 | 8.53 | 5.21 | 5.90 | 3.93 | 1.89 | 2.45 | 0.73 | |  |  | (0.25) | (0.28) | (0.38) | (0.22) | (0.26) | (0.25) | (0.44) | (0.26) | (0.21) | (0.16) | (0.10) | |  | Synthetic | 13.93 | 9.90 | 28.05 | 7.56 | 13.82 | 6.19 | 6.70 | 3.33 | 2.55 | 2.12 | 5.06 | |  |  | (0.14) | (0.23) | (0.39) | (0.13) | (0.31) | (0.07) | (0.52) | (0.25) | (0.25) | (0.31) | (0.27) | | FMoW-WILDS | Natural | 5.15 | 3.55 | 34.64 | 5.03 | 5.58 | 3.46 | 5.08 | 2.59 | 2.33 | 2.52 | 2.22 | |  |  | (0.19) | (0.41) | (0.22) | (0.29) | (0.17) | (0.37) | (0.46) | (0.32) | (0.28) | (0.25) | (0.30) | | RxRx1-WILDS | Natural | 6.17 | 6.11 | 21.05 | 5.21 | 6.54 | 6.27 | 6.82 | 5.30 | 5.20 | 5.19 | 5.63 | |  |  | (0.20) | (0.24) | (0.31) | (0.18) | (0.21) | (0.20) | (0.31) | (0.30) | (0.44) | (0.43) | (0.55) | | Entity-13 | Same | 18.32 | 14.38 | 27.79 | 13.56 | 20.50 | 13.22 | 16.09 | 9.35 | 7.50 | 7.80 | 6.94 | |  |  | (0.29) | (0.53) | (1.18) | (0.58) | (0.47) | (0.58) | (0.84) | (0.79) | (0.65) | (0.62) | (0.71) | |  | Novel | 28.82 | 24.03 | 38.97 | 22.96 | 31.66 | 22.61 | 25.26 | 17.11 | 13.96 | 14.75 | 9.94 | |  |  | (0.30) | (0.55) | (1.32) | (0.59) | (0.54) | (0.58) | (1.08) | (0.93) | (0.64) | (0.78) |  | | Entity-30 | Same | 16.91 | 14.61 | 26.84 | 14.37 | 18.60 | 13.11 | 13.74 | 8.54 | 7.94 | 7.77 | 8.04 | |  |  | (1.33) | (1.11) | (2.15) | (1.34) | (1.69) | (1.30) | (1.07) | (1.47) | (1.38) | (1.44) | (1.51) | |  | Novel | 28.66 | 25.83 | 39.21 | 25.03 | 30.95 | 23.73 | 23.15 | 15.57 | 13.24 | 12.44 | 11.05 | |  |  | (1.16) | (0.88) | (2.03) | (1.11) | (1.64) | (1.11) | (0.51) | (1.44) | (1.15) | (1.26) | (1.13) | | NonLIVING-26 | Same | 17.43 | 15.95 | 27.70 | 15.40 | 18.06 | 14.58 | 16.99 | 10.79 | 10.13 | 10.05 | 10.29 | |  |  | (0.90) | (0.86) | (0.90) | (0.69) | (1.00) | (0.78) | (1.25) | (0.62) | (0.32) | (0.46) | (0.79) | |  | Novel | 29.51 | 27.75 | 40.02 | 26.77 | 30.36 | 25.93 | 27.70 | 19.64 | 17.75 | 16.90 | 15.69 | |  |  | (0.86) | (0.82) | (0.76) | (0.82) | (0.95) | (0.80) | (1.42) | (0.68) | (0.53) | (0.60) | (0.83) | | LIVING-17 | Same | 14.28 | 12.21 | 23.46 | 11.16 | 15.22 | 10.78 | 10.49 | 4.92 | 4.23 | 4.19 | 4.73 | |  |  | (0.96) | (0.93) | (1.16) | (0.90) | (0.96) | (0.99) | (0.97) | (0.57) | (0.42) | (0.35) | (0.24) | |  | Novel | 28.91 | 26.35 | 38.62 | 24.91 | 30.32 | 24.52 | 22.49 | 15.42 | 13.02 | 12.29 | 10.34 | |  |  | (0.66) | (0.73) | (1.01) | (0.61) | (0.59) | (0.74) | (0.85) | (0.59) | (0.53) | (0.73) | (0.62) |\nTable 4: Mean Absolute estimation Error (MAE) results for different datasets in our setup grouped by the nature of shift for ResNet model. 'Same' refers to same subpopulation shifts and 'Novel' refers novel subpopulation shifts. We include details about the target sets considered in each shift in Table 2. Post T denotes use of TS calibration on source. Across all datasets, we observe that ATC achieves superior performance (lower MAE is better). For GDE post T and pre T estimates match since TS doesn't alter the argmax prediction. Results reported by aggregating MAE numbers over 4 different seeds. Values in parenthesis (i.e., $(\\cdot)$ ) denote standard deviation values.\n",
      "images": [],
      "dimensions": {
        "dpi": 200,
        "height": 2200,
        "width": 1700
      }
    }
  ],
  "model": "mistral-ocr-2503-completion",
  "usage_info": {
    "pages_processed": 29,
    "doc_size_bytes": null
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

<h3 id="ocr-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OCRResponse](#schemaocrresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-audiotranscriptions">audio.transcriptions</h1>

API for audio transcription.

## Create Transcription

<a id="opIdaudio_api_v1_transcriptions_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/audio/transcriptions \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'model=voxtral-mini-latest' \
  -F 'file=' \
  -F 'file_url=' \
  -F 'file_id=' \
  -F 'language=' \
  -F 'temperature=' \
  -F 'stream=false' \
  -F 'diarize=false' \
  -F 'context_bias=[]' \
  -F 'timestamp_granularities=["segment"]'
```

`POST /v1/audio/transcriptions`

> Body parameter

```yaml
model: voxtral-mini-latest
file: null
file_url: null
file_id: null
language: null
temperature: null
stream: false
diarize: false
context_bias: []
timestamp_granularities:
  - segment
```

<h3 id="create-transcription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AudioTranscriptionRequest](#schemaaudiotranscriptionrequest)|true|none|
|» model|body|string|true|ID of the model to be used.|
|» file|body|[File](#schemafile) \| null|false|none|
|» » *anyOf*|body|[File](#schemafile)|false|The File object (not file name) to be uploaded.<br> To upload a file and specify a custom file name you should format your request as such:<br> ```bash<br> file=@path/to/your/file.jsonl;filename=custom_name.jsonl<br> ```<br> Otherwise, you can just keep the original file name:<br> ```bash<br> file=@path/to/your/file.jsonl<br> ```|
|» » *anyOf*|body|null|false|none|
|» file_url|body|string(uri) \| null|false|Url of a file to be transcribed|
|» » *anyOf*|body|string(uri)|false|none|
|» » *anyOf*|body|null|false|none|
|» file_id|body|string \| null|false|ID of a file uploaded to /v1/files|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» language|body|string \| null|false|Language of the audio, e.g. 'en'. Providing the language can boost accuracy.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» temperature|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|boolean|false|none|
|» diarize|body|boolean|false|none|
|» context_bias|body|[string]|false|none|
|» timestamp_granularities|body|[[TimestampGranularity](#schematimestampgranularity)]|false|Granularities of timestamps to include in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» timestamp_granularities|segment|
|» timestamp_granularities|word|

> Example responses

> 200 Response

```json
{
  "model": "voxtral-mini-2507",
  "text": "This week, I traveled to Chicago to deliver my final farewell address to the nation, following in the tradition of presidents before me. It was an opportunity to say thank you. Whether we've seen eye to eye or rarely agreed at all, my conversations with you, the American people, in living rooms, in schools, at farms and on factory floors, at diners and on distant military outposts, All these conversations are what have kept me honest, kept me inspired, and kept me going. Every day, I learned from you. You made me a better President, and you made me a better man.\nOver the course of these eight years, I've seen the goodness, the resilience, and the hope of the American people. I've seen neighbors looking out for each other as we rescued our economy from the worst crisis of our lifetimes. I've hugged cancer survivors who finally know the security of affordable health care. I've seen communities like Joplin rebuild from disaster, and cities like Boston show the world that no terrorist will ever break the American spirit. I've seen the hopeful faces of young graduates and our newest military officers. I've mourned with grieving families searching for answers. And I found grace in a Charleston church. I've seen our scientists help a paralyzed man regain his sense of touch, and our wounded warriors walk again. I've seen our doctors and volunteers rebuild after earthquakes and stop pandemics in their tracks. I've learned from students who are building robots and curing diseases, and who will change the world in ways we can't even imagine. I've seen the youngest of children remind us of our obligations to care for our refugees, to work in peace, and above all, to look out for each other.\nThat's what's possible when we come together in the slow, hard, sometimes frustrating, but always vital work of self-government. But we can't take our democracy for granted. All of us, regardless of party, should throw ourselves into the work of citizenship. Not just when there is an election. Not just when our own narrow interest is at stake. But over the full span of a lifetime. If you're tired of arguing with strangers on the Internet, try to talk with one in real life. If something needs fixing, lace up your shoes and do some organizing. If you're disappointed by your elected officials, then grab a clipboard, get some signatures, and run for office yourself.\nOur success depends on our participation, regardless of which way the pendulum of power swings. It falls on each of us to be guardians of our democracy, to embrace the joyous task we've been given to continually try to improve this great nation of ours. Because for all our outward differences, we all share the same proud title – citizen.\nIt has been the honor of my life to serve you as President. Eight years later, I am even more optimistic about our country's promise. And I look forward to working along your side as a citizen for all my days that remain.\nThanks, everybody. God bless you. And God bless the United States of America.\n",
  "language": "en",
  "segments": [],
  "usage": {
    "prompt_audio_seconds": 203,
    "prompt_tokens": 4,
    "total_tokens": 3264,
    "completion_tokens": 635
  }
}
```

<h3 id="create-transcription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TranscriptionResponse](#schematranscriptionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create Streaming Transcription (SSE)

<a id="opIdaudio_api_v1_transcriptions_post_stream"></a>

> Code samples

```bash
curl 'https://api.mistral.ai/v1/audio/transcriptions#stream' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'model=string' \
  -F 'file=' \
  -F 'file_url=' \
  -F 'file_id=' \
  -F 'language=' \
  -F 'temperature=' \
  -F 'stream=true' \
  -F 'diarize=false' \
  -F 'context_bias=[]' \
  -F 'timestamp_granularities=["segment"]'
```

`POST /v1/audio/transcriptions#stream`

> Body parameter

```yaml
model: string
file: null
file_url: null
file_id: null
language: null
temperature: null
stream: true
diarize: false
context_bias: []
timestamp_granularities:
  - segment
```

<h3 id="create-streaming-transcription-sse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AudioTranscriptionRequestStream](#schemaaudiotranscriptionrequeststream)|true|none|
|» model|body|string|true|none|
|» file|body|[File](#schemafile) \| null|false|none|
|» » *anyOf*|body|[File](#schemafile)|false|The File object (not file name) to be uploaded.<br> To upload a file and specify a custom file name you should format your request as such:<br> ```bash<br> file=@path/to/your/file.jsonl;filename=custom_name.jsonl<br> ```<br> Otherwise, you can just keep the original file name:<br> ```bash<br> file=@path/to/your/file.jsonl<br> ```|
|» » *anyOf*|body|null|false|none|
|» file_url|body|string(uri) \| null|false|Url of a file to be transcribed|
|» » *anyOf*|body|string(uri)|false|none|
|» » *anyOf*|body|null|false|none|
|» file_id|body|string \| null|false|ID of a file uploaded to /v1/files|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» language|body|string \| null|false|Language of the audio, e.g. 'en'. Providing the language can boost accuracy.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» temperature|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|boolean|false|none|
|» diarize|body|boolean|false|none|
|» context_bias|body|[string]|false|none|
|» timestamp_granularities|body|[[TimestampGranularity](#schematimestampgranularity)]|false|Granularities of timestamps to include in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» timestamp_granularities|segment|
|» timestamp_granularities|word|

<h3 id="create-streaming-transcription-sse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stream of transcription events|[TranscriptionStreamEvents](#schematranscriptionstreamevents)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-audiospeech">audio.speech</h1>

API for text-to-speech generation.

## Speech

<a id="opIdspeech_v1_audio_speech_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/audio/speech \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "model": "string",
    "stream": false,
    "voice_id": "string",
    "ref_audio": "string",
    "input": "string",
    "response_format": "pcm"
  }'
```

`POST /v1/audio/speech`

Generate speech from text using a saved voice or a reference audio clip.

> Body parameter

```json
{
  "model": "string",
  "stream": false,
  "voice_id": "string",
  "ref_audio": "string",
  "input": "string",
  "response_format": "pcm"
}
```

<h3 id="speech-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SpeechRequest](#schemaspeechrequest)|true|none|
|» model|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|boolean|false|none|
|» voice_id|body|string \| null|false|The preset or custom voice to use for generating the speech.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» ref_audio|body|string \| null|false|The base64-encoded audio reference for zero-shot voice cloning.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» input|body|string|true|Text to generate speech from.|
|» response_format|body|[SpeechOutputFormat](#schemaspeechoutputformat)|false|Output audio format. Defaults to mp3.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» response_format|pcm|
|» response_format|wav|
|» response_format|mp3|
|» response_format|flac|
|» response_format|opus|

> Example responses

> 200 Response

```json
{
  "audio_data": "string"
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

<h3 id="speech-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Speech audio data.|[SpeechResponse](#schemaspeechresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-audiovoices">audio.voices</h1>

API for managing custom voice profiles.

## List all voices

<a id="opIdlist_voices_v1_audio_voices_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/audio/voices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/audio/voices`

List all voices (excluding sample data)

<h3 id="list-all-voices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of voices to return|
|offset|query|integer|false|Offset for pagination|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "name": "string",
      "slug": "string",
      "languages": [],
      "gender": "string",
      "age": 0,
      "tags": [
        "string"
      ],
      "color": "string",
      "retention_notice": 30,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "1970-01-01T00:00:00Z",
      "user_id": "string"
    }
  ],
  "total": 0,
  "page": 0,
  "page_size": 0,
  "total_pages": 0
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

<h3 id="list-all-voices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VoiceListResponse](#schemavoicelistresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create a new voice

<a id="opIdcreate_voice_v1_audio_voices_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/audio/voices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "slug": "string",
    "languages": [],
    "gender": "string",
    "age": 0,
    "tags": [
      "string"
    ],
    "color": "string",
    "retention_notice": 30,
    "sample_audio": "string",
    "sample_filename": "string"
  }'
```

`POST /v1/audio/voices`

Create a new voice with a base64-encoded audio sample

> Body parameter

```json
{
  "name": "string",
  "slug": "string",
  "languages": [],
  "gender": "string",
  "age": 0,
  "tags": [
    "string"
  ],
  "color": "string",
  "retention_notice": 30,
  "sample_audio": "string",
  "sample_filename": "string"
}
```

<h3 id="create-a-new-voice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VoiceCreateRequest](#schemavoicecreaterequest)|true|none|
|» name|body|string|true|none|
|» slug|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» languages|body|[string]|false|none|
|» gender|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» age|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» tags|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» color|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» retention_notice|body|integer|false|none|
|» sample_audio|body|string|true|Base64-encoded audio file|
|» sample_filename|body|string \| null|false|Original filename for extension detection|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "slug": "string",
  "languages": [],
  "gender": "string",
  "age": 0,
  "tags": [
    "string"
  ],
  "color": "string",
  "retention_notice": 30,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
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

<h3 id="create-a-new-voice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VoiceResponse](#schemavoiceresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get voice details

<a id="opIdget_voice_v1_audio_voices__voice_id__get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/audio/voices/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/audio/voices/{voice_id}`

Get voice details (excluding sample)

<h3 id="get-voice-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voice_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "slug": "string",
  "languages": [],
  "gender": "string",
  "age": 0,
  "tags": [
    "string"
  ],
  "color": "string",
  "retention_notice": 30,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
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

<h3 id="get-voice-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VoiceResponse](#schemavoiceresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete a custom voice

<a id="opIddelete_voice_v1_audio_voices__voice_id__delete"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/audio/voices/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/audio/voices/{voice_id}`

Delete a custom voice

<h3 id="delete-a-custom-voice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voice_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "slug": "string",
  "languages": [],
  "gender": "string",
  "age": 0,
  "tags": [
    "string"
  ],
  "color": "string",
  "retention_notice": 30,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
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

<h3 id="delete-a-custom-voice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VoiceResponse](#schemavoiceresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Update voice metadata

<a id="opIdupdate_voice_v1_audio_voices__voice_id__patch"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/audio/voices/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "languages": [
      "string"
    ],
    "gender": "string",
    "age": 0,
    "tags": [
      "string"
    ]
  }'
```

`PATCH /v1/audio/voices/{voice_id}`

Update voice metadata (name, gender, languages, age, tags).

> Body parameter

```json
{
  "name": "string",
  "languages": [
    "string"
  ],
  "gender": "string",
  "age": 0,
  "tags": [
    "string"
  ]
}
```

<h3 id="update-voice-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voice_id|path|string(uuid)|true|none|
|body|body|[VoiceUpdateRequest](#schemavoiceupdaterequest)|true|none|
|» name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» languages|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» gender|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» age|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» tags|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "slug": "string",
  "languages": [],
  "gender": "string",
  "age": 0,
  "tags": [
    "string"
  ],
  "color": "string",
  "retention_notice": 30,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
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

<h3 id="update-voice-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VoiceResponse](#schemavoiceresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get voice sample audio

<a id="opIdget_voice_sample_audio_v1_audio_voices__voice_id__sample_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/audio/voices/string/sample \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/audio/voices/{voice_id}/sample`

Get the audio sample for a voice

<h3 id="get-voice-sample-audio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|voice_id|path|string|true|none|

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

<h3 id="get-voice-sample-audio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaagents">beta.agents</h1>

(beta) Agents API

## List agent entities.

<a id="opIdagents_api_v1_agents_list"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/agents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/agents`

<aside class="warning">
This operation is deprecated
</aside>

Retrieve a list of agent entities sorted by creation time. Deprecated: some features such as agent sharing are not supported by this endpoint. Use the cursor-paginated `GET /v1/agents/pages` instead.

<h3 id="list-agent-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number (0-indexed)|
|page_size|query|integer|false|Number of agents per page|
|deployment_chat|query|boolean \| null|false|none|
|sources|query|[[RequestSource](#schemarequestsource)] \| null|false|none|
|name|query|string \| null|false|Filter by agent name|
|search|query|string \| null|false|Search agents by name or ID|
|id|query|string \| null|false|none|
|metadata|query|object \| null|false|none|

> Example responses

> 200 Response

```json
[
  {
    "instructions": "string",
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "string",
          "description": "",
          "strict": false,
          "parameters": {}
        }
      }
    ],
    "completion_args": {
      "stop": "string",
      "presence_penalty": -2,
      "frequency_penalty": -2,
      "temperature": 0,
      "top_p": 0,
      "max_tokens": 0,
      "random_seed": 0,
      "prediction": {
        "type": "content",
        "content": ""
      },
      "response_format": {
        "type": "text"
      },
      "tool_choice": "auto",
      "reasoning_effort": "high"
    },
    "guardrails": [
      {
        "block_on_error": false,
        "moderation_llm_v1": {
          "model_name": "mistral-moderation-2411",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous_and_criminal_content": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        },
        "moderation_llm_v2": {
          "model_name": "mistral-moderation-2603",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous": 0,
            "criminal": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0,
            "jailbreaking": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        }
      }
    ],
    "model": "string",
    "name": "string",
    "description": "string",
    "handoffs": [
      "string"
    ],
    "metadata": {},
    "object": "agent",
    "id": "string",
    "version": 0,
    "versions": [
      0
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deployment_chat": true,
    "source": "string",
    "version_message": "string"
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

<h3 id="list-agent-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="list-agent-entities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Agent](#schemaagent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create a agent that can be used within a conversation.

<a id="opIdagents_api_v1_agents_create"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/agents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "instructions": "string",
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "string",
          "description": "",
          "strict": false,
          "parameters": {}
        }
      }
    ],
    "completion_args": {
      "stop": "string",
      "presence_penalty": -2,
      "frequency_penalty": -2,
      "temperature": 0,
      "top_p": 0,
      "max_tokens": 0,
      "random_seed": 0,
      "prediction": {
        "type": "content",
        "content": ""
      },
      "response_format": {
        "type": "text"
      },
      "tool_choice": "auto",
      "reasoning_effort": "high"
    },
    "guardrails": [
      {
        "block_on_error": false,
        "moderation_llm_v1": {
          "model_name": "mistral-moderation-2411",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous_and_criminal_content": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        },
        "moderation_llm_v2": {
          "model_name": "mistral-moderation-2603",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous": 0,
            "criminal": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0,
            "jailbreaking": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        }
      }
    ],
    "model": "string",
    "name": "string",
    "description": "string",
    "handoffs": [
      "string"
    ],
    "metadata": {},
    "version_message": "string"
  }'
```

`POST /v1/agents`

Create a new agent giving it instructions, tools, description. The agent is then available to be used as a regular assistant in a conversation or as part of an agent pool from which it can be used.

> Body parameter

```json
{
  "instructions": "string",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "model": "string",
  "name": "string",
  "description": "string",
  "handoffs": [
    "string"
  ],
  "metadata": {},
  "version_message": "string"
}
```

<h3 id="create-a-agent-that-can-be-used-within-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AgentCreationRequest](#schemaagentcreationrequest)|true|none|
|» instructions|body|string \| null|false|Instruction prompt the model will follow during the conversation.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» tools|body|[[FunctionTool](#schemafunctiontool) \| [WebSearchTool](#schemawebsearchtool) \| [WebSearchPremiumTool](#schemawebsearchpremiumtool) \| [CodeInterpreterTool](#schemacodeinterpretertool) \| [ImageGenerationTool](#schemaimagegenerationtool) \| [DocumentLibraryTool](#schemadocumentlibrarytool) \| [CustomConnector](#schemacustomconnector)]|false|List of tools which are available to the model during the conversation.|
|» » *oneOf*|body|[FunctionTool](#schemafunctiontool)|false|none|
|» » *oneOf*|body|[WebSearchTool](#schemawebsearchtool)|false|none|
|» » *oneOf*|body|[WebSearchPremiumTool](#schemawebsearchpremiumtool)|false|none|
|» » *oneOf*|body|[CodeInterpreterTool](#schemacodeinterpretertool)|false|none|
|» » *oneOf*|body|[ImageGenerationTool](#schemaimagegenerationtool)|false|none|
|» » *oneOf*|body|[DocumentLibraryTool](#schemadocumentlibrarytool)|false|none|
|» » *oneOf*|body|[CustomConnector](#schemacustomconnector)|false|none|
|» completion_args|body|[CompletionArgs](#schemacompletionargs)|false|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|» guardrails|body|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|
|» » *anyOf*|body|[[GuardrailConfig](#schemaguardrailconfig)]|false|none|
|» » *anyOf*|body|null|false|none|
|» model|body|string|true|none|
|» name|body|string|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» handoffs|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|[MetadataDict](#schemametadatadict) \| null|false|none|
|» » *anyOf*|body|[MetadataDict](#schemametadatadict)|false|Custom type for metadata with embedded validation.|
|» » *anyOf*|body|null|false|none|
|» version_message|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "instructions": "string",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "model": "string",
  "name": "string",
  "description": "string",
  "handoffs": [
    "string"
  ],
  "metadata": {},
  "object": "agent",
  "id": "string",
  "version": 0,
  "versions": [
    0
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deployment_chat": true,
  "source": "string",
  "version_message": "string"
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

<h3 id="create-a-agent-that-can-be-used-within-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Agent](#schemaagent)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Retrieve an agent entity.

<a id="opIdagents_api_v1_agents_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/agents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/agents/{agent_id}`

Given an agent, retrieve an agent entity with its attributes. The agent_version parameter can be an integer version number or a string alias.

<h3 id="retrieve-an-agent-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|string|true|none|
|agent_version|query|integer \| string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "instructions": "string",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "model": "string",
  "name": "string",
  "description": "string",
  "handoffs": [
    "string"
  ],
  "metadata": {},
  "object": "agent",
  "id": "string",
  "version": 0,
  "versions": [
    0
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deployment_chat": true,
  "source": "string",
  "version_message": "string"
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

<h3 id="retrieve-an-agent-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Agent](#schemaagent)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete an agent entity.

<a id="opIdagents_api_v1_agents_delete"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/agents/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/agents/{agent_id}`

<h3 id="delete-an-agent-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|string|true|none|

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

<h3 id="delete-an-agent-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Update an agent entity.

<a id="opIdagents_api_v1_agents_update"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/agents/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "instructions": "string",
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "string",
          "description": "",
          "strict": false,
          "parameters": {}
        }
      }
    ],
    "completion_args": {
      "stop": "string",
      "presence_penalty": -2,
      "frequency_penalty": -2,
      "temperature": 0,
      "top_p": 0,
      "max_tokens": 0,
      "random_seed": 0,
      "prediction": {
        "type": "content",
        "content": ""
      },
      "response_format": {
        "type": "text"
      },
      "tool_choice": "auto",
      "reasoning_effort": "high"
    },
    "guardrails": [
      {
        "block_on_error": false,
        "moderation_llm_v1": {
          "model_name": "mistral-moderation-2411",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous_and_criminal_content": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        },
        "moderation_llm_v2": {
          "model_name": "mistral-moderation-2603",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous": 0,
            "criminal": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0,
            "jailbreaking": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        }
      }
    ],
    "model": "string",
    "name": "string",
    "description": "string",
    "handoffs": [
      "string"
    ],
    "deployment_chat": true,
    "metadata": {},
    "version_message": "string"
  }'
```

`PATCH /v1/agents/{agent_id}`

Update an agent attributes and create a new version.

> Body parameter

```json
{
  "instructions": "string",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "model": "string",
  "name": "string",
  "description": "string",
  "handoffs": [
    "string"
  ],
  "deployment_chat": true,
  "metadata": {},
  "version_message": "string"
}
```

<h3 id="update-an-agent-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|string|true|none|
|body|body|[AgentUpdateRequest](#schemaagentupdaterequest)|true|none|
|» instructions|body|string \| null|false|Instruction prompt the model will follow during the conversation.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» tools|body|[[FunctionTool](#schemafunctiontool) \| [WebSearchTool](#schemawebsearchtool) \| [WebSearchPremiumTool](#schemawebsearchpremiumtool) \| [CodeInterpreterTool](#schemacodeinterpretertool) \| [ImageGenerationTool](#schemaimagegenerationtool) \| [DocumentLibraryTool](#schemadocumentlibrarytool) \| [CustomConnector](#schemacustomconnector)]|false|List of tools which are available to the model during the conversation.|
|» » *oneOf*|body|[FunctionTool](#schemafunctiontool)|false|none|
|» » *oneOf*|body|[WebSearchTool](#schemawebsearchtool)|false|none|
|» » *oneOf*|body|[WebSearchPremiumTool](#schemawebsearchpremiumtool)|false|none|
|» » *oneOf*|body|[CodeInterpreterTool](#schemacodeinterpretertool)|false|none|
|» » *oneOf*|body|[ImageGenerationTool](#schemaimagegenerationtool)|false|none|
|» » *oneOf*|body|[DocumentLibraryTool](#schemadocumentlibrarytool)|false|none|
|» » *oneOf*|body|[CustomConnector](#schemacustomconnector)|false|none|
|» completion_args|body|[CompletionArgs](#schemacompletionargs)|false|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|» guardrails|body|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|
|» » *anyOf*|body|[[GuardrailConfig](#schemaguardrailconfig)]|false|none|
|» » *anyOf*|body|null|false|none|
|» model|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» handoffs|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» deployment_chat|body|boolean \| null|false|none|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|[MetadataDict](#schemametadatadict) \| null|false|none|
|» » *anyOf*|body|[MetadataDict](#schemametadatadict)|false|Custom type for metadata with embedded validation.|
|» » *anyOf*|body|null|false|none|
|» version_message|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "instructions": "string",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "model": "string",
  "name": "string",
  "description": "string",
  "handoffs": [
    "string"
  ],
  "metadata": {},
  "object": "agent",
  "id": "string",
  "version": 0,
  "versions": [
    0
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deployment_chat": true,
  "source": "string",
  "version_message": "string"
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

<h3 id="update-an-agent-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Agent](#schemaagent)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## List agent entities, cursor-paginated.

<a id="opIdagents_api_v1_agents_list_pages"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/agents/pages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/agents/pages`

Retrieve a page of agent entities. Unlike the deprecated `GET /v1/agents`, this endpoint paginates by opaque cursor and honors per-agent sharing, returning only agents the caller is authorized to see.

<h3 id="list-agent-entities-cursor-paginated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer|false|Number of agents per page|
|deployment_chat|query|boolean \| null|false|none|
|sources|query|[[RequestSource](#schemarequestsource)] \| null|false|none|
|name|query|string \| null|false|Filter by agent name|
|search|query|string \| null|false|Search agents by name or ID|
|id|query|string \| null|false|none|
|metadata|query|object \| null|false|none|
|page_token|query|string \| null|false|Opaque cursor from a previous response's next_page_token. When set, results page forward from the cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "data": [
    {
      "instructions": "string",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "",
            "strict": false,
            "parameters": {}
          }
        }
      ],
      "completion_args": {
        "stop": "string",
        "presence_penalty": -2,
        "frequency_penalty": -2,
        "temperature": 0,
        "top_p": 0,
        "max_tokens": 0,
        "random_seed": 0,
        "prediction": {
          "type": "content",
          "content": ""
        },
        "response_format": {
          "type": "text"
        },
        "tool_choice": "auto",
        "reasoning_effort": "high"
      },
      "guardrails": [
        {
          "block_on_error": false,
          "moderation_llm_v1": {
            "model_name": "mistral-moderation-2411",
            "custom_category_thresholds": {
              "sexual": 0,
              "hate_and_discrimination": 0,
              "violence_and_threats": 0,
              "dangerous_and_criminal_content": 0,
              "selfharm": 0,
              "health": 0,
              "financial": 0,
              "law": 0,
              "pii": 0
            },
            "ignore_other_categories": false,
            "action": "none"
          },
          "moderation_llm_v2": {
            "model_name": "mistral-moderation-2603",
            "custom_category_thresholds": {
              "sexual": 0,
              "hate_and_discrimination": 0,
              "violence_and_threats": 0,
              "dangerous": 0,
              "criminal": 0,
              "selfharm": 0,
              "health": 0,
              "financial": 0,
              "law": 0,
              "pii": 0,
              "jailbreaking": 0
            },
            "ignore_other_categories": false,
            "action": "none"
          }
        }
      ],
      "model": "string",
      "name": "string",
      "description": "string",
      "handoffs": [
        "string"
      ],
      "metadata": {},
      "object": "agent",
      "id": "string",
      "version": 0,
      "versions": [
        0
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "deployment_chat": true,
      "source": "string",
      "version_message": "string"
    }
  ],
  "next_page_token": "string"
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

<h3 id="list-agent-entities-cursor-paginated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AgentListPage](#schemaagentlistpage)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Update an agent version.

<a id="opIdagents_api_v1_agents_update_version"></a>

> Code samples

```bash
curl 'https://api.mistral.ai/v1/agents/string/version?version=0' \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /v1/agents/{agent_id}/version`

Switch the version of an agent.

<h3 id="update-an-agent-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|string|true|none|
|version|query|integer|true|none|

> Example responses

> 200 Response

```json
{
  "instructions": "string",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "model": "string",
  "name": "string",
  "description": "string",
  "handoffs": [
    "string"
  ],
  "metadata": {},
  "object": "agent",
  "id": "string",
  "version": 0,
  "versions": [
    0
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deployment_chat": true,
  "source": "string",
  "version_message": "string"
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

<h3 id="update-an-agent-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Agent](#schemaagent)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## List all versions of an agent.

<a id="opIdagents_api_v1_agents_list_versions"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/agents/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/agents/{agent_id}/versions`

Retrieve all versions for a specific agent with full agent context. Supports pagination.

<h3 id="list-all-versions-of-an-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|string|true|none|
|page|query|integer|false|Page number (0-indexed)|
|page_size|query|integer|false|Number of versions per page|

> Example responses

> 200 Response

```json
[
  {
    "instructions": "string",
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "string",
          "description": "",
          "strict": false,
          "parameters": {}
        }
      }
    ],
    "completion_args": {
      "stop": "string",
      "presence_penalty": -2,
      "frequency_penalty": -2,
      "temperature": 0,
      "top_p": 0,
      "max_tokens": 0,
      "random_seed": 0,
      "prediction": {
        "type": "content",
        "content": ""
      },
      "response_format": {
        "type": "text"
      },
      "tool_choice": "auto",
      "reasoning_effort": "high"
    },
    "guardrails": [
      {
        "block_on_error": false,
        "moderation_llm_v1": {
          "model_name": "mistral-moderation-2411",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous_and_criminal_content": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        },
        "moderation_llm_v2": {
          "model_name": "mistral-moderation-2603",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous": 0,
            "criminal": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0,
            "jailbreaking": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        }
      }
    ],
    "model": "string",
    "name": "string",
    "description": "string",
    "handoffs": [
      "string"
    ],
    "metadata": {},
    "object": "agent",
    "id": "string",
    "version": 0,
    "versions": [
      0
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deployment_chat": true,
    "source": "string",
    "version_message": "string"
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

<h3 id="list-all-versions-of-an-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="list-all-versions-of-an-agent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Agent](#schemaagent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Retrieve a specific version of an agent.

<a id="opIdagents_api_v1_agents_get_version"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/agents/string/versions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/agents/{agent_id}/versions/{version}`

Get a specific agent version by version number.

<h3 id="retrieve-a-specific-version-of-an-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|string|true|none|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "instructions": "string",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "model": "string",
  "name": "string",
  "description": "string",
  "handoffs": [
    "string"
  ],
  "metadata": {},
  "object": "agent",
  "id": "string",
  "version": 0,
  "versions": [
    0
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deployment_chat": true,
  "source": "string",
  "version_message": "string"
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

<h3 id="retrieve-a-specific-version-of-an-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Agent](#schemaagent)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## List all aliases for an agent.

<a id="opIdagents_api_v1_agents_list_version_aliases"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/agents/string/aliases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/agents/{agent_id}/aliases`

Retrieve all version aliases for a specific agent.

<h3 id="list-all-aliases-for-an-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "alias": "string",
    "version": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
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

<h3 id="list-all-aliases-for-an-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="list-all-aliases-for-an-agent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AgentAliasResponse](#schemaagentaliasresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create or update an agent version alias.

<a id="opIdagents_api_v1_agents_create_or_update_alias"></a>

> Code samples

```bash
curl 'https://api.mistral.ai/v1/agents/string/aliases?alias=string&version=0' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/agents/{agent_id}/aliases`

Create a new alias or update an existing alias to point to a specific version. Aliases are unique per agent and can be reassigned to different versions.

<h3 id="create-or-update-an-agent-version-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|string|true|none|
|alias|query|string|true|none|
|version|query|integer|true|none|

> Example responses

> 200 Response

```json
{
  "alias": "string",
  "version": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
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

<h3 id="create-or-update-an-agent-version-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AgentAliasResponse](#schemaagentaliasresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete an agent version alias.

<a id="opIdagents_api_v1_agents_delete_alias"></a>

> Code samples

```bash
curl 'https://api.mistral.ai/v1/agents/string/aliases?alias=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/agents/{agent_id}/aliases`

Delete an existing alias for an agent.

<h3 id="delete-an-agent-version-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|string|true|none|
|alias|query|string|true|none|

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

<h3 id="delete-an-agent-version-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaconversations">beta.conversations</h1>

(beta) Conversations API

## List all created conversations.

<a id="opIdagents_api_v1_conversations_list"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/conversations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/conversations`

Retrieve a list of conversation entities sorted by creation time.

<h3 id="list-all-created-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|page_size|query|integer|false|none|
|metadata|query|object \| null|false|none|

> Example responses

> 200 Response

```json
[
  {
    "instructions": "string",
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "string",
          "description": "",
          "strict": false,
          "parameters": {}
        }
      }
    ],
    "completion_args": {
      "stop": "string",
      "presence_penalty": -2,
      "frequency_penalty": -2,
      "temperature": 0,
      "top_p": 0,
      "max_tokens": 0,
      "random_seed": 0,
      "prediction": {
        "type": "content",
        "content": ""
      },
      "response_format": {
        "type": "text"
      },
      "tool_choice": "auto",
      "reasoning_effort": "high"
    },
    "guardrails": [
      {
        "block_on_error": false,
        "moderation_llm_v1": {
          "model_name": "mistral-moderation-2411",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous_and_criminal_content": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        },
        "moderation_llm_v2": {
          "model_name": "mistral-moderation-2603",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous": 0,
            "criminal": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0,
            "jailbreaking": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        }
      }
    ],
    "name": "string",
    "description": "string",
    "metadata": {},
    "object": "conversation",
    "id": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "model": "string"
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

<h3 id="list-all-created-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="list-all-created-conversations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ModelConversation](#schemamodelconversation) \| [AgentConversation](#schemaagentconversation)]|false|none|none|
|» *anyOf*|[ModelConversation](#schemamodelconversation)|false|none|none|
|» *anyOf*|[AgentConversation](#schemaagentconversation)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create a conversation and append entries to it.

<a id="opIdagents_api_v1_conversations_start"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/conversations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inputs": "string",
    "stream": false,
    "store": null,
    "handoff_execution": null,
    "instructions": null,
    "tools": null,
    "completion_args": null,
    "guardrails": null,
    "name": null,
    "description": null,
    "metadata": null,
    "agent_id": null,
    "agent_version": null,
    "model": null
  }'
```

`POST /v1/conversations`

Create a new conversation, using a base model or an agent and append entries. Completion and tool executions are run and the response is appended to the conversation.Use the returned conversation_id to continue the conversation.

> Body parameter

```json
{
  "inputs": "string",
  "stream": false,
  "store": null,
  "handoff_execution": null,
  "instructions": null,
  "tools": null,
  "completion_args": null,
  "guardrails": null,
  "name": null,
  "description": null,
  "metadata": null,
  "agent_id": null,
  "agent_version": null,
  "model": null
}
```

<h3 id="create-a-conversation-and-append-entries-to-it-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConversationRequest](#schemaconversationrequest)|true|none|
|» inputs|body|[ConversationInputs](#schemaconversationinputs)|true|none|
|» stream|body|boolean \| null|false|none|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» store|body|boolean \| null|false|none|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» handoff_execution|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» instructions|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» tools|body|[[FunctionTool](#schemafunctiontool) \| [WebSearchTool](#schemawebsearchtool) \| [WebSearchPremiumTool](#schemawebsearchpremiumtool) \| [CodeInterpreterTool](#schemacodeinterpretertool) \| [ImageGenerationTool](#schemaimagegenerationtool) \| [DocumentLibraryTool](#schemadocumentlibrarytool) \| [CustomConnector](#schemacustomconnector)] \| null|false|none|
|» » *anyOf*|body|[[FunctionTool](#schemafunctiontool) \| [WebSearchTool](#schemawebsearchtool) \| [WebSearchPremiumTool](#schemawebsearchpremiumtool) \| [CodeInterpreterTool](#schemacodeinterpretertool) \| [ImageGenerationTool](#schemaimagegenerationtool) \| [DocumentLibraryTool](#schemadocumentlibrarytool) \| [CustomConnector](#schemacustomconnector)]|false|none|
|» *oneOf*|body|[FunctionTool](#schemafunctiontool)|false|none|
|» *oneOf*|body|[WebSearchTool](#schemawebsearchtool)|false|none|
|» *oneOf*|body|[WebSearchPremiumTool](#schemawebsearchpremiumtool)|false|none|
|» *oneOf*|body|[CodeInterpreterTool](#schemacodeinterpretertool)|false|none|
|» *oneOf*|body|[ImageGenerationTool](#schemaimagegenerationtool)|false|none|
|» *oneOf*|body|[DocumentLibraryTool](#schemadocumentlibrarytool)|false|none|
|» *oneOf*|body|[CustomConnector](#schemacustomconnector)|false|none|
|» » *anyOf*|body|null|false|none|
|» completion_args|body|[CompletionArgs](#schemacompletionargs) \| null|false|none|
|» » *anyOf*|body|[CompletionArgs](#schemacompletionargs)|false|White-listed arguments from the completion API|
|» » *anyOf*|body|null|false|none|
|» guardrails|body|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|
|» » *anyOf*|body|[[GuardrailConfig](#schemaguardrailconfig)]|false|none|
|» » *anyOf*|body|null|false|none|
|» name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|[MetadataDict](#schemametadatadict) \| null|false|none|
|» » *anyOf*|body|[MetadataDict](#schemametadatadict)|false|Custom type for metadata with embedded validation.|
|» » *anyOf*|body|null|false|none|
|» agent_id|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» agent_version|body|string \| integer \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» model|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|client|
|» » *anyOf*|server|
|» stream|false|

> Example responses

> 200 Response

```json
{
  "object": "conversation.response",
  "conversation_id": "string",
  "outputs": [
    {
      "object": "entry",
      "type": "message.output",
      "created_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "agent_id": "string",
      "model": "string",
      "id": "string",
      "role": "assistant",
      "content": "string"
    }
  ],
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "connector_tokens": null,
    "connectors": null
  },
  "guardrails": null
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

<h3 id="create-a-conversation-and-append-entries-to-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ConversationResponse](#schemaconversationresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Retrieve a conversation information.

<a id="opIdagents_api_v1_conversations_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/conversations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/conversations/{conversation_id}`

Given a conversation_id retrieve a conversation entity with its attributes.

<h3 id="retrieve-a-conversation-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|ID of the conversation from which we are fetching metadata.|

> Example responses

> 200 Response

```json
{
  "instructions": "string",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "name": "string",
  "description": "string",
  "metadata": {},
  "object": "conversation",
  "id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "model": "string"
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

<h3 id="retrieve-a-conversation-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="retrieve-a-conversation-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[ModelConversation](#schemamodelconversation)|false|none|none|
|*anyOf*|[AgentConversation](#schemaagentconversation)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Append new entries to an existing conversation.

<a id="opIdagents_api_v1_conversations_append"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/conversations/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inputs": "string",
    "stream": false,
    "store": true,
    "handoff_execution": "server",
    "completion_args": {
      "stop": "string",
      "presence_penalty": -2,
      "frequency_penalty": -2,
      "temperature": 0,
      "top_p": 0,
      "max_tokens": 0,
      "random_seed": 0,
      "prediction": {
        "type": "content",
        "content": ""
      },
      "response_format": {
        "type": "text"
      },
      "tool_choice": "auto",
      "reasoning_effort": "high"
    },
    "tool_confirmations": [
      {
        "tool_call_id": "string",
        "confirmation": "allow"
      }
    ]
  }'
```

`POST /v1/conversations/{conversation_id}`

Run completion on the history of the conversation and the user entries. Return the new created entries.

> Body parameter

```json
{
  "inputs": "string",
  "stream": false,
  "store": true,
  "handoff_execution": "server",
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "tool_confirmations": [
    {
      "tool_call_id": "string",
      "confirmation": "allow"
    }
  ]
}
```

<h3 id="append-new-entries-to-an-existing-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|ID of the conversation to which we append entries.|
|body|body|[ConversationAppendRequest](#schemaconversationappendrequest)|true|none|
|» inputs|body|[ConversationInputs](#schemaconversationinputs)|false|none|
|» stream|body|boolean|false|Whether to stream back partial progress. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|» store|body|boolean|false|Whether to store the results into our servers or not.|
|» handoff_execution|body|string|false|none|
|» completion_args|body|[CompletionArgs](#schemacompletionargs)|false|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|» tool_confirmations|body|[[ToolCallConfirmation](#schematoolcallconfirmation)] \| null|false|none|
|» » *anyOf*|body|[[ToolCallConfirmation](#schematoolcallconfirmation)]|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» handoff_execution|client|
|» handoff_execution|server|
|» stream|false|

> Example responses

> 200 Response

```json
{
  "object": "conversation.response",
  "conversation_id": "string",
  "outputs": [
    {
      "object": "entry",
      "type": "message.output",
      "created_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "agent_id": "string",
      "model": "string",
      "id": "string",
      "role": "assistant",
      "content": "string"
    }
  ],
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "connector_tokens": null,
    "connectors": null
  },
  "guardrails": null
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

<h3 id="append-new-entries-to-an-existing-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ConversationResponse](#schemaconversationresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete a conversation.

<a id="opIdagents_api_v1_conversations_delete"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/conversations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/conversations/{conversation_id}`

Delete a conversation given a conversation_id.

<h3 id="delete-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|ID of the conversation from which we are fetching metadata.|

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

<h3 id="delete-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Retrieve all entries in a conversation.

<a id="opIdagents_api_v1_conversations_history"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/conversations/string/history \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/conversations/{conversation_id}/history`

Given a conversation_id retrieve all the entries belonging to that conversation. The entries are sorted in the order they were appended, those can be messages, connectors or function_call.

<h3 id="retrieve-all-entries-in-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|ID of the conversation from which we are fetching entries.|

> Example responses

> 200 Response

```json
{
  "object": "conversation.history",
  "conversation_id": "string",
  "entries": [
    {
      "object": "entry",
      "type": "message.input",
      "created_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "role": "assistant",
      "content": "string",
      "prefix": false
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

<h3 id="retrieve-all-entries-in-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ConversationHistory](#schemaconversationhistory)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Retrieve all messages in a conversation.

<a id="opIdagents_api_v1_conversations_messages"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/conversations/string/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/conversations/{conversation_id}/messages`

Given a conversation_id retrieve all the messages belonging to that conversation. This is similar to retrieving all entries except we filter the messages only.

<h3 id="retrieve-all-messages-in-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|ID of the conversation from which we are fetching messages.|

> Example responses

> 200 Response

```json
{
  "object": "conversation.messages",
  "conversation_id": "string",
  "messages": [
    {
      "object": "entry",
      "type": "message.input",
      "created_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "role": "assistant",
      "content": "string",
      "prefix": false
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

<h3 id="retrieve-all-messages-in-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ConversationMessages](#schemaconversationmessages)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Restart a conversation starting from a given entry.

<a id="opIdagents_api_v1_conversations_restart"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/conversations/string/restart \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inputs": "string",
    "stream": false,
    "store": true,
    "handoff_execution": "server",
    "completion_args": {
      "stop": "string",
      "presence_penalty": -2,
      "frequency_penalty": -2,
      "temperature": 0,
      "top_p": 0,
      "max_tokens": 0,
      "random_seed": 0,
      "prediction": {
        "type": "content",
        "content": ""
      },
      "response_format": {
        "type": "text"
      },
      "tool_choice": "auto",
      "reasoning_effort": "high"
    },
    "guardrails": [
      {
        "block_on_error": false,
        "moderation_llm_v1": {
          "model_name": "mistral-moderation-2411",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous_and_criminal_content": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        },
        "moderation_llm_v2": {
          "model_name": "mistral-moderation-2603",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous": 0,
            "criminal": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0,
            "jailbreaking": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        }
      }
    ],
    "metadata": {},
    "from_entry_id": "string",
    "agent_version": "string"
  }'
```

`POST /v1/conversations/{conversation_id}/restart`

Given a conversation_id and an id, recreate a conversation from this point and run completion. A new conversation is returned with the new entries returned.

> Body parameter

```json
{
  "inputs": "string",
  "stream": false,
  "store": true,
  "handoff_execution": "server",
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "metadata": {},
  "from_entry_id": "string",
  "agent_version": "string"
}
```

<h3 id="restart-a-conversation-starting-from-a-given-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|ID of the original conversation which is being restarted.|
|body|body|[ConversationRestartRequest](#schemaconversationrestartrequest)|true|none|
|» inputs|body|[ConversationInputs](#schemaconversationinputs)|false|none|
|» stream|body|boolean|false|Whether to stream back partial progress. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|» store|body|boolean|false|Whether to store the results into our servers or not.|
|» handoff_execution|body|string|false|none|
|» completion_args|body|[CompletionArgs](#schemacompletionargs)|false|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|» guardrails|body|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|
|» » *anyOf*|body|[[GuardrailConfig](#schemaguardrailconfig)]|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|[MetadataDict](#schemametadatadict) \| null|false|Custom metadata for the conversation.|
|» » *anyOf*|body|[MetadataDict](#schemametadatadict)|false|Custom type for metadata with embedded validation.|
|» » *anyOf*|body|null|false|none|
|» from_entry_id|body|string|true|none|
|» agent_version|body|string \| integer \| null|false|Specific version of the agent to use when restarting. If not provided, uses the current version.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» handoff_execution|client|
|» handoff_execution|server|
|» stream|false|

> Example responses

> 200 Response

```json
{
  "object": "conversation.response",
  "conversation_id": "string",
  "outputs": [
    {
      "object": "entry",
      "type": "message.output",
      "created_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "agent_id": "string",
      "model": "string",
      "id": "string",
      "role": "assistant",
      "content": "string"
    }
  ],
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "connector_tokens": null,
    "connectors": null
  },
  "guardrails": null
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

<h3 id="restart-a-conversation-starting-from-a-given-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ConversationResponse](#schemaconversationresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create a conversation and append entries to it.

<a id="opIdagents_api_v1_conversations_start_stream"></a>

> Code samples

```bash
curl 'https://api.mistral.ai/v1/conversations#stream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inputs": "string",
    "stream": true,
    "store": null,
    "handoff_execution": null,
    "instructions": null,
    "tools": null,
    "completion_args": null,
    "guardrails": null,
    "name": null,
    "description": null,
    "metadata": null,
    "agent_id": null,
    "agent_version": null,
    "model": null
  }'
```

`POST /v1/conversations#stream`

Create a new conversation, using a base model or an agent and append entries. Completion and tool executions are run and the response is appended to the conversation.Use the returned conversation_id to continue the conversation.

> Body parameter

```json
{
  "inputs": "string",
  "stream": true,
  "store": null,
  "handoff_execution": null,
  "instructions": null,
  "tools": null,
  "completion_args": null,
  "guardrails": null,
  "name": null,
  "description": null,
  "metadata": null,
  "agent_id": null,
  "agent_version": null,
  "model": null
}
```

<h3 id="create-a-conversation-and-append-entries-to-it-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConversationStreamRequest](#schemaconversationstreamrequest)|true|none|
|» inputs|body|[ConversationInputs](#schemaconversationinputs)|true|none|
|» stream|body|boolean \| null|false|none|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» store|body|boolean \| null|false|none|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» handoff_execution|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» instructions|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» tools|body|[[FunctionTool](#schemafunctiontool) \| [WebSearchTool](#schemawebsearchtool) \| [WebSearchPremiumTool](#schemawebsearchpremiumtool) \| [CodeInterpreterTool](#schemacodeinterpretertool) \| [ImageGenerationTool](#schemaimagegenerationtool) \| [DocumentLibraryTool](#schemadocumentlibrarytool) \| [CustomConnector](#schemacustomconnector)] \| null|false|none|
|» » *anyOf*|body|[[FunctionTool](#schemafunctiontool) \| [WebSearchTool](#schemawebsearchtool) \| [WebSearchPremiumTool](#schemawebsearchpremiumtool) \| [CodeInterpreterTool](#schemacodeinterpretertool) \| [ImageGenerationTool](#schemaimagegenerationtool) \| [DocumentLibraryTool](#schemadocumentlibrarytool) \| [CustomConnector](#schemacustomconnector)]|false|none|
|» *oneOf*|body|[FunctionTool](#schemafunctiontool)|false|none|
|» *oneOf*|body|[WebSearchTool](#schemawebsearchtool)|false|none|
|» *oneOf*|body|[WebSearchPremiumTool](#schemawebsearchpremiumtool)|false|none|
|» *oneOf*|body|[CodeInterpreterTool](#schemacodeinterpretertool)|false|none|
|» *oneOf*|body|[ImageGenerationTool](#schemaimagegenerationtool)|false|none|
|» *oneOf*|body|[DocumentLibraryTool](#schemadocumentlibrarytool)|false|none|
|» *oneOf*|body|[CustomConnector](#schemacustomconnector)|false|none|
|» » *anyOf*|body|null|false|none|
|» completion_args|body|[CompletionArgs](#schemacompletionargs) \| null|false|none|
|» » *anyOf*|body|[CompletionArgs](#schemacompletionargs)|false|White-listed arguments from the completion API|
|» » *anyOf*|body|null|false|none|
|» guardrails|body|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|
|» » *anyOf*|body|[[GuardrailConfig](#schemaguardrailconfig)]|false|none|
|» » *anyOf*|body|null|false|none|
|» name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|[MetadataDict](#schemametadatadict) \| null|false|none|
|» » *anyOf*|body|[MetadataDict](#schemametadatadict)|false|Custom type for metadata with embedded validation.|
|» » *anyOf*|body|null|false|none|
|» agent_id|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» agent_version|body|string \| integer \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» model|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|client|
|» » *anyOf*|server|
|» stream|true|

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

<h3 id="create-a-conversation-and-append-entries-to-it-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ConversationEvents](#schemaconversationevents)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Append new entries to an existing conversation.

<a id="opIdagents_api_v1_conversations_append_stream"></a>

> Code samples

```bash
curl 'https://api.mistral.ai/v1/conversations/string#stream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inputs": "string",
    "stream": true,
    "store": true,
    "handoff_execution": "server",
    "completion_args": {
      "stop": "string",
      "presence_penalty": -2,
      "frequency_penalty": -2,
      "temperature": 0,
      "top_p": 0,
      "max_tokens": 0,
      "random_seed": 0,
      "prediction": {
        "type": "content",
        "content": ""
      },
      "response_format": {
        "type": "text"
      },
      "tool_choice": "auto",
      "reasoning_effort": "high"
    },
    "tool_confirmations": [
      {
        "tool_call_id": "string",
        "confirmation": "allow"
      }
    ]
  }'
```

`POST /v1/conversations/{conversation_id}#stream`

Run completion on the history of the conversation and the user entries. Return the new created entries.

> Body parameter

```json
{
  "inputs": "string",
  "stream": true,
  "store": true,
  "handoff_execution": "server",
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "tool_confirmations": [
    {
      "tool_call_id": "string",
      "confirmation": "allow"
    }
  ]
}
```

<h3 id="append-new-entries-to-an-existing-conversation-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|ID of the conversation to which we append entries.|
|body|body|[ConversationAppendStreamRequest](#schemaconversationappendstreamrequest)|true|none|
|» inputs|body|[ConversationInputs](#schemaconversationinputs)|false|none|
|» stream|body|boolean|false|Whether to stream back partial progress. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|» store|body|boolean|false|Whether to store the results into our servers or not.|
|» handoff_execution|body|string|false|none|
|» completion_args|body|[CompletionArgs](#schemacompletionargs)|false|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|» tool_confirmations|body|[[ToolCallConfirmation](#schematoolcallconfirmation)] \| null|false|none|
|» » *anyOf*|body|[[ToolCallConfirmation](#schematoolcallconfirmation)]|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» handoff_execution|client|
|» handoff_execution|server|
|» stream|true|

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

<h3 id="append-new-entries-to-an-existing-conversation-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ConversationEvents](#schemaconversationevents)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Restart a conversation starting from a given entry.

<a id="opIdagents_api_v1_conversations_restart_stream"></a>

> Code samples

```bash
curl 'https://api.mistral.ai/v1/conversations/string/restart#stream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inputs": "string",
    "stream": true,
    "store": true,
    "handoff_execution": "server",
    "completion_args": {
      "stop": "string",
      "presence_penalty": -2,
      "frequency_penalty": -2,
      "temperature": 0,
      "top_p": 0,
      "max_tokens": 0,
      "random_seed": 0,
      "prediction": {
        "type": "content",
        "content": ""
      },
      "response_format": {
        "type": "text"
      },
      "tool_choice": "auto",
      "reasoning_effort": "high"
    },
    "guardrails": [
      {
        "block_on_error": false,
        "moderation_llm_v1": {
          "model_name": "mistral-moderation-2411",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous_and_criminal_content": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        },
        "moderation_llm_v2": {
          "model_name": "mistral-moderation-2603",
          "custom_category_thresholds": {
            "sexual": 0,
            "hate_and_discrimination": 0,
            "violence_and_threats": 0,
            "dangerous": 0,
            "criminal": 0,
            "selfharm": 0,
            "health": 0,
            "financial": 0,
            "law": 0,
            "pii": 0,
            "jailbreaking": 0
          },
          "ignore_other_categories": false,
          "action": "none"
        }
      }
    ],
    "metadata": {},
    "from_entry_id": "string",
    "agent_version": "string"
  }'
```

`POST /v1/conversations/{conversation_id}/restart#stream`

Given a conversation_id and an id, recreate a conversation from this point and run completion. A new conversation is returned with the new entries returned.

> Body parameter

```json
{
  "inputs": "string",
  "stream": true,
  "store": true,
  "handoff_execution": "server",
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "metadata": {},
  "from_entry_id": "string",
  "agent_version": "string"
}
```

<h3 id="restart-a-conversation-starting-from-a-given-entry-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|ID of the original conversation which is being restarted.|
|body|body|[ConversationRestartStreamRequest](#schemaconversationrestartstreamrequest)|true|none|
|» inputs|body|[ConversationInputs](#schemaconversationinputs)|false|none|
|» stream|body|boolean|false|Whether to stream back partial progress. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|» store|body|boolean|false|Whether to store the results into our servers or not.|
|» handoff_execution|body|string|false|none|
|» completion_args|body|[CompletionArgs](#schemacompletionargs)|false|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|» guardrails|body|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|
|» » *anyOf*|body|[[GuardrailConfig](#schemaguardrailconfig)]|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|[MetadataDict](#schemametadatadict) \| null|false|Custom metadata for the conversation.|
|» » *anyOf*|body|[MetadataDict](#schemametadatadict)|false|Custom type for metadata with embedded validation.|
|» » *anyOf*|body|null|false|none|
|» from_entry_id|body|string|true|none|
|» agent_version|body|string \| integer \| null|false|Specific version of the agent to use when restarting. If not provided, uses the current version.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» handoff_execution|client|
|» handoff_execution|server|
|» stream|true|

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

<h3 id="restart-a-conversation-starting-from-a-given-entry-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ConversationEvents](#schemaconversationevents)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betalibraries">beta.libraries</h1>

(beta) Libraries API to create and manage libraries - index your documents to enhance agent capabilities.

## List all libraries you have access to.

<a id="opIdlibraries_list_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/libraries`

List all libraries that you have created or have been shared with you.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "owner_type": "string",
      "total_size": 0,
      "nb_documents": 0,
      "chunk_size": 0,
      "emoji": "string",
      "description": "string",
      "generated_description": "string",
      "explicit_user_members_count": 0,
      "explicit_workspace_members_count": 0,
      "org_sharing_role": "string",
      "generated_name": "string"
    }
  ]
}
```

<h3 id="list-all-libraries-you-have-access-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListLibraryOut](#schemalistlibraryout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create a new Library.

<a id="opIdlibraries_create_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "chunk_size": 0
  }'
```

`POST /v1/libraries`

Create a new Library, you will be marked as the owner and only you will have the possibility to share it with others. When first created this will only be accessible by you.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "chunk_size": 0
}
```

<h3 id="create-a-new-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LibraryIn](#schemalibraryin)|true|none|
|» name|body|string|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» chunk_size|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "owner_type": "string",
  "total_size": 0,
  "nb_documents": 0,
  "chunk_size": 0,
  "emoji": "string",
  "description": "string",
  "generated_description": "string",
  "explicit_user_members_count": 0,
  "explicit_workspace_members_count": 0,
  "org_sharing_role": "string",
  "generated_name": "string"
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

<h3 id="create-a-new-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[LibraryOut](#schemalibraryout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Detailed information about a specific Library.

<a id="opIdlibraries_get_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/libraries/{library_id}`

Given a library id, details information about that Library.

<h3 id="detailed-information-about-a-specific-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "owner_type": "string",
  "total_size": 0,
  "nb_documents": 0,
  "chunk_size": 0,
  "emoji": "string",
  "description": "string",
  "generated_description": "string",
  "explicit_user_members_count": 0,
  "explicit_workspace_members_count": 0,
  "org_sharing_role": "string",
  "generated_name": "string"
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

<h3 id="detailed-information-about-a-specific-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[LibraryOut](#schemalibraryout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Update a library.

<a id="opIdlibraries_update_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string"
  }'
```

`PUT /v1/libraries/{library_id}`

Given a library id, you can update the name and description.

> Body parameter

```json
{
  "name": "string",
  "description": "string"
}
```

<h3 id="update-a-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|
|body|body|[LibraryInUpdate](#schemalibraryinupdate)|true|none|
|» name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "owner_type": "string",
  "total_size": 0,
  "nb_documents": 0,
  "chunk_size": 0,
  "emoji": "string",
  "description": "string",
  "generated_description": "string",
  "explicit_user_members_count": 0,
  "explicit_workspace_members_count": 0,
  "org_sharing_role": "string",
  "generated_name": "string"
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

<h3 id="update-a-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[LibraryOut](#schemalibraryout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete a library and all of it's document.

<a id="opIdlibraries_delete_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/libraries/{library_id}`

Given a library id, deletes it together with all documents that have been uploaded to that library.

<h3 id="delete-a-library-and-all-of-its-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "owner_type": "string",
  "total_size": 0,
  "nb_documents": 0,
  "chunk_size": 0,
  "emoji": "string",
  "description": "string",
  "generated_description": "string",
  "explicit_user_members_count": 0,
  "explicit_workspace_members_count": 0,
  "org_sharing_role": "string",
  "generated_name": "string"
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

<h3 id="delete-a-library-and-all-of-its-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[LibraryOut](#schemalibraryout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betalibrariesdocuments">beta.libraries.documents</h1>

(beta) Libraries API - manage documents in a library.

## List documents in a given library.

<a id="opIdlibraries_documents_list_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08/documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/libraries/{library_id}/documents`

Given a library, lists the document that have been uploaded to that library.

<h3 id="list-documents-in-a-given-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|
|search|query|string \| null|false|none|
|page_size|query|integer|false|none|
|page|query|integer|false|none|
|filters_attributes|query|string \| null|false|none|
|sort_by|query|string|false|none|
|sort_order|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "total_items": 0,
    "total_pages": 0,
    "current_page": 0,
    "page_size": 0,
    "has_more": true
  },
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "library_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "hash": "string",
      "mime_type": "string",
      "extension": "string",
      "size": 0,
      "name": "string",
      "summary": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "last_processed_at": "1970-01-01T00:00:00Z",
      "number_of_pages": 0,
      "process_status": "self_managed",
      "uploaded_by_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "uploaded_by_type": "string",
      "tokens_processing_main_content": 0,
      "tokens_processing_summary": 0,
      "url": "string",
      "attributes": {},
      "processing_status": "string",
      "tokens_processing_total": 0
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

<h3 id="list-documents-in-a-given-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListDocumentOut](#schemalistdocumentout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Upload a new document.

<a id="opIdlibraries_documents_upload_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08/documents \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file'
```

`POST /v1/libraries/{library_id}/documents`

Given a library, upload a new document to that library. It is queued for processing, it status will change it has been processed. The processing has to be completed in order be discoverable for the library search

> Body parameter

```yaml
file: string
```

<h3 id="upload-a-new-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|
|body|body|object|true|none|
|» file|body|[File](#schemafile)|true|The File object (not file name) to be uploaded.<br> To upload a file and specify a custom file name you should format your request as such:<br> ```bash<br> file=@path/to/your/file.jsonl;filename=custom_name.jsonl<br> ```<br> Otherwise, you can just keep the original file name:<br> ```bash<br> file=@path/to/your/file.jsonl<br> ```|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "library_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hash": "string",
  "mime_type": "string",
  "extension": "string",
  "size": 0,
  "name": "string",
  "summary": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "last_processed_at": "1970-01-01T00:00:00Z",
  "number_of_pages": 0,
  "process_status": "self_managed",
  "uploaded_by_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "uploaded_by_type": "string",
  "tokens_processing_main_content": 0,
  "tokens_processing_summary": 0,
  "url": "string",
  "attributes": {},
  "processing_status": "string",
  "tokens_processing_total": 0
}
```

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "library_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hash": "string",
  "mime_type": "string",
  "extension": "string",
  "size": 0,
  "name": "string",
  "summary": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "last_processed_at": "1970-01-01T00:00:00Z",
  "number_of_pages": 0,
  "process_status": "self_managed",
  "uploaded_by_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "uploaded_by_type": "string",
  "tokens_processing_main_content": 0,
  "tokens_processing_summary": 0,
  "url": "string",
  "attributes": {},
  "processing_status": "string",
  "tokens_processing_total": 0
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

<h3 id="upload-a-new-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A document with the same hash was found in this library. Returns the existing document.|[DocumentOut](#schemadocumentout)|
|201|Created|Upload successful, returns the created document information's.|[DocumentOut](#schemadocumentout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Retrieve the metadata of a specific document.

<a id="opIdlibraries_documents_get_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08/documents/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/libraries/{library_id}/documents/{document_id}`

Given a library and a document in this library, you can retrieve the metadata of that document.

<h3 id="retrieve-the-metadata-of-a-specific-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|
|document_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "library_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hash": "string",
  "mime_type": "string",
  "extension": "string",
  "size": 0,
  "name": "string",
  "summary": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "last_processed_at": "1970-01-01T00:00:00Z",
  "number_of_pages": 0,
  "process_status": "self_managed",
  "uploaded_by_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "uploaded_by_type": "string",
  "tokens_processing_main_content": 0,
  "tokens_processing_summary": 0,
  "url": "string",
  "attributes": {},
  "processing_status": "string",
  "tokens_processing_total": 0
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

<h3 id="retrieve-the-metadata-of-a-specific-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DocumentOut](#schemadocumentout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Update the metadata of a specific document.

<a id="opIdlibraries_documents_update_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08/documents/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "attributes": {
      "property1": true,
      "property2": true
    }
  }'
```

`PUT /v1/libraries/{library_id}/documents/{document_id}`

Given a library and a document in that library, update the name of that document.

> Body parameter

```json
{
  "name": "string",
  "attributes": {
    "property1": true,
    "property2": true
  }
}
```

<h3 id="update-the-metadata-of-a-specific-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|
|document_id|path|string(uuid)|true|none|
|body|body|[DocumentUpdateIn](#schemadocumentupdatein)|true|none|
|» name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» attributes|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » **additionalProperties**|body|boolean \| string \| integer \| number \| string(date-time) \| [string] \| [integer] \| [number] \| [boolean]|false|none|
|» » » *anyOf*|body|boolean|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|integer|false|none|
|» » » *anyOf*|body|number|false|none|
|» » » *anyOf*|body|string(date-time)|false|none|
|» » » *anyOf*|body|[string]|false|none|
|» » » *anyOf*|body|[integer]|false|none|
|» » » *anyOf*|body|[number]|false|none|
|» » » *anyOf*|body|[boolean]|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "library_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hash": "string",
  "mime_type": "string",
  "extension": "string",
  "size": 0,
  "name": "string",
  "summary": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "last_processed_at": "1970-01-01T00:00:00Z",
  "number_of_pages": 0,
  "process_status": "self_managed",
  "uploaded_by_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "uploaded_by_type": "string",
  "tokens_processing_main_content": 0,
  "tokens_processing_summary": 0,
  "url": "string",
  "attributes": {},
  "processing_status": "string",
  "tokens_processing_total": 0
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

<h3 id="update-the-metadata-of-a-specific-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DocumentOut](#schemadocumentout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete a document.

<a id="opIdlibraries_documents_delete_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08/documents/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/libraries/{library_id}/documents/{document_id}`

Given a library and a document in that library, delete that document. The document will be deleted from the library and the search index.

<h3 id="delete-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|
|document_id|path|string(uuid)|true|none|

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

<h3 id="delete-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Retrieve the text content of a specific document.

<a id="opIdlibraries_documents_get_text_content_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08/documents/497f6eca-6276-4993-bfeb-53cbbbba6f08/text_content \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/libraries/{library_id}/documents/{document_id}/text_content`

Given a library and a document in that library, you can retrieve the text content of that document if it exists. For documents like pdf, docx and pptx the text content results from our processing using Mistral OCR.

<h3 id="retrieve-the-text-content-of-a-specific-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|
|document_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "text": "string"
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

<h3 id="retrieve-the-text-content-of-a-specific-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DocumentTextContent](#schemadocumenttextcontent)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Retrieve the processing status of a specific document.

<a id="opIdlibraries_documents_get_status_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08/documents/497f6eca-6276-4993-bfeb-53cbbbba6f08/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/libraries/{library_id}/documents/{document_id}/status`

Given a library and a document in that library, retrieve the processing status of that document.

<h3 id="retrieve-the-processing-status-of-a-specific-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|
|document_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "document_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_status": "self_managed",
  "processing_status": "string"
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

<h3 id="retrieve-the-processing-status-of-a-specific-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ProcessingStatusOut](#schemaprocessingstatusout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Retrieve the signed URL of a specific document.

<a id="opIdlibraries_documents_get_signed_url_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08/documents/497f6eca-6276-4993-bfeb-53cbbbba6f08/signed-url \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/libraries/{library_id}/documents/{document_id}/signed-url`

Given a library and a document in that library, retrieve the signed URL of a specific document.The url will expire after 30 minutes and can be accessed by anyone with the link.

<h3 id="retrieve-the-signed-url-of-a-specific-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|
|document_id|path|string(uuid)|true|none|

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

<h3 id="retrieve-the-signed-url-of-a-specific-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Retrieve the signed URL of text extracted from a given document.

<a id="opIdlibraries_documents_get_extracted_text_signed_url_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08/documents/497f6eca-6276-4993-bfeb-53cbbbba6f08/extracted-text-signed-url \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/libraries/{library_id}/documents/{document_id}/extracted-text-signed-url`

Given a library and a document in that library, retrieve the signed URL of text extracted. For documents that are sent to the OCR this returns the result of the OCR queries.

<h3 id="retrieve-the-signed-url-of-text-extracted-from-a-given-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|
|document_id|path|string(uuid)|true|none|

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

<h3 id="retrieve-the-signed-url-of-text-extracted-from-a-given-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Reprocess a document.

<a id="opIdlibraries_documents_reprocess_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08/documents/497f6eca-6276-4993-bfeb-53cbbbba6f08/reprocess \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/libraries/{library_id}/documents/{document_id}/reprocess`

Given a library and a document in that library, reprocess that document, it will be billed again.

<h3 id="reprocess-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|
|document_id|path|string(uuid)|true|none|

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

<h3 id="reprocess-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betalibrariesaccesses">beta.libraries.accesses</h1>

(beta) Libraries API - manage access to a library.

## List all of the access to this library.

<a id="opIdlibraries_share_list_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08/share \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/libraries/{library_id}/share`

Given a library, list all of the Entity that have access and to what level.

<h3 id="list-all-of-the-access-to-this-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "library_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "role": "string",
      "share_with_type": "string",
      "share_with_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
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

<h3 id="list-all-of-the-access-to-this-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListSharingOut](#schemalistsharingout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create or update an access level.

<a id="opIdlibraries_share_create_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08/share \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "level": "Viewer",
    "share_with_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "share_with_type": "User"
  }'
```

`PUT /v1/libraries/{library_id}/share`

Given a library id, you can create or update the access level of an entity. You have to be owner of the library to share a library. An owner cannot change their own role. A library cannot be shared outside of the organization.

> Body parameter

```json
{
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "level": "Viewer",
  "share_with_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "share_with_type": "User"
}
```

<h3 id="create-or-update-an-access-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|
|body|body|[SharingIn](#schemasharingin)|true|none|
|» org_id|body|string(uuid) \| null|false|none|
|» » *anyOf*|body|string(uuid)|false|none|
|» » *anyOf*|body|null|false|none|
|» level|body|[ShareEnum](#schemashareenum)|true|none|
|» share_with_uuid|body|string(uuid)|true|The id of the entity (user, workspace or organization) to share with|
|» share_with_type|body|[EntityType](#schemaentitytype)|true|The type of entity, used to share a library.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» level|Viewer|
|» level|Editor|
|» share_with_type|User|
|» share_with_type|Workspace|
|» share_with_type|Org|

> Example responses

> 200 Response

```json
{
  "library_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "role": "string",
  "share_with_type": "string",
  "share_with_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
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

<h3 id="create-or-update-an-access-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SharingOut](#schemasharingout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete an access level.

<a id="opIdlibraries_share_delete_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/libraries/497f6eca-6276-4993-bfeb-53cbbbba6f08/share \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "share_with_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "share_with_type": "User"
  }'
```

`DELETE /v1/libraries/{library_id}/share`

Given a library id, you can delete the access level of an entity. An owner cannot delete it's own access. You have to be the owner of the library to delete an acces other than yours.

> Body parameter

```json
{
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "share_with_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "share_with_type": "User"
}
```

<h3 id="delete-an-access-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|path|string(uuid)|true|none|
|body|body|[SharingDelete](#schemasharingdelete)|true|none|
|» org_id|body|string(uuid) \| null|false|none|
|» » *anyOf*|body|string(uuid)|false|none|
|» » *anyOf*|body|null|false|none|
|» share_with_uuid|body|string(uuid)|true|The id of the entity (user, workspace or organization) to share with|
|» share_with_type|body|[EntityType](#schemaentitytype)|true|The type of entity, used to share a library.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» share_with_type|User|
|» share_with_type|Workspace|
|» share_with_type|Org|

> Example responses

> 200 Response

```json
{
  "library_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "role": "string",
  "share_with_type": "string",
  "share_with_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
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

<h3 id="delete-an-access-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SharingOut](#schemasharingout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaobservabilitychatcompletionevents">beta.observability.chat_completion_events</h1>

(beta) Search, retrieve, and analyze chat completion events.

## Get Chat Completion Events

<a id="opIdget_chat_completion_events_v1_observability_chat_completion_events_search_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/chat-completion-events/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "search_params": {
      "filters": {
        "AND": [
          {}
        ],
        "OR": [
          {}
        ]
      }
    },
    "extra_fields": [
      "string"
    ]
  }'
```

`POST /v1/observability/chat-completion-events/search`

> Body parameter

```json
{
  "search_params": {
    "filters": {
      "AND": [
        {}
      ],
      "OR": [
        {}
      ]
    }
  },
  "extra_fields": [
    "string"
  ]
}
```

<h3 id="get-chat-completion-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer|false|none|
|cursor|query|string \| null|false|none|
|body|body|[GetChatCompletionEventsInSchema](#schemagetchatcompletioneventsinschema)|true|none|
|» search_params|body|[FilterPayload](#schemafilterpayload)|true|none|
|» extra_fields|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "completion_events": {
    "results": [
      {
        "event_id": "string",
        "correlation_id": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "extra_fields": {
          "property1": true,
          "property2": true
        },
        "nb_input_tokens": 0,
        "nb_output_tokens": 0
      }
    ],
    "next": "string",
    "cursor": "string"
  }
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-chat-completion-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ChatCompletionEvents](#schemachatcompletionevents)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Alternative to /search that returns only the IDs and that can return many IDs at once

<a id="opIdget_chat_completion_event_ids_v1_observability_chat_completion_events_search_ids_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/chat-completion-events/search-ids \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "search_params": {
      "filters": {
        "AND": [
          {}
        ],
        "OR": [
          {}
        ]
      }
    },
    "extra_fields": [
      "string"
    ]
  }'
```

`POST /v1/observability/chat-completion-events/search-ids`

> Body parameter

```json
{
  "search_params": {
    "filters": {
      "AND": [
        {}
      ],
      "OR": [
        {}
      ]
    }
  },
  "extra_fields": [
    "string"
  ]
}
```

<h3 id="alternative-to-search-that-returns-only-the-ids-and-that-can-return-many-ids-at-once-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetChatCompletionEventIdsInSchema](#schemagetchatcompletioneventidsinschema)|true|none|
|» search_params|body|[FilterPayload](#schemafilterpayload)|true|none|
|» extra_fields|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "completion_event_ids": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="alternative-to-search-that-returns-only-the-ids-and-that-can-return-many-ids-at-once-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ChatCompletionEventIds](#schemachatcompletioneventids)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Chat Completion Event

<a id="opIdget_chat_completion_event_v1_observability_chat_completion_events__event_id__get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/chat-completion-events/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/chat-completion-events/{event_id}`

<h3 id="get-chat-completion-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "event_id": "string",
  "correlation_id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "extra_fields": {
    "property1": true,
    "property2": true
  },
  "nb_input_tokens": 0,
  "nb_output_tokens": 0,
  "enabled_tools": [
    {}
  ],
  "request_messages": [
    {}
  ],
  "response_messages": [
    {}
  ],
  "nb_messages": 0,
  "chat_transcription_events": [
    {
      "audio_url": "string",
      "model": "string",
      "response_message": {}
    }
  ]
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-chat-completion-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ChatCompletionEvent](#schemachatcompletionevent)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Similar Chat Completion Events

<a id="opIdget_similar_chat_completion_events_v1_observability_chat_completion_events__event_id__similar_events_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/chat-completion-events/497f6eca-6276-4993-bfeb-53cbbbba6f08/similar-events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/chat-completion-events/{event_id}/similar-events`

<h3 id="get-similar-chat-completion-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "completion_events": {
    "results": [
      {
        "event_id": "string",
        "correlation_id": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "extra_fields": {
          "property1": true,
          "property2": true
        },
        "nb_input_tokens": 0,
        "nb_output_tokens": 0
      }
    ],
    "next": "string",
    "cursor": "string"
  }
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-similar-chat-completion-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ChatCompletionEvents](#schemachatcompletionevents)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Run Judge on an event based on the given options

<a id="opIdjudge_chat_completion_event_v1_observability_chat_completion_events__event_id__live_judging_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/chat-completion-events/497f6eca-6276-4993-bfeb-53cbbbba6f08/live-judging \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "judge_definition": {
      "name": "string",
      "description": "string",
      "model_name": "string",
      "output": {
        "type": "CLASSIFICATION",
        "options": [
          {
            "value": "string",
            "description": "string"
          }
        ]
      },
      "instructions": "string",
      "tools": [
        "string"
      ]
    }
  }'
```

`POST /v1/observability/chat-completion-events/{event_id}/live-judging`

> Body parameter

```json
{
  "judge_definition": {
    "name": "string",
    "description": "string",
    "model_name": "string",
    "output": {
      "type": "CLASSIFICATION",
      "options": [
        {
          "value": "string",
          "description": "string"
        }
      ]
    },
    "instructions": "string",
    "tools": [
      "string"
    ]
  }
}
```

<h3 id="run-judge-on-an-event-based-on-the-given-options-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string(uuid)|true|none|
|body|body|[PostChatCompletionEventJudgingInSchema](#schemapostchatcompletioneventjudginginschema)|true|none|
|» judge_definition|body|[PostJudgeInSchema](#schemapostjudgeinschema)|true|none|

> Example responses

> 200 Response

```json
{
  "analysis": "string",
  "answer": "string"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="run-judge-on-an-event-based-on-the-given-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[JudgeOutput](#schemajudgeoutput)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaobservabilitychatcompletioneventsfields">beta.observability.chat_completion_events.fields</h1>

(beta) List and inspect filterable fields for chat completion events.

## Get Chat Completion Fields

<a id="opIdget_chat_completion_fields_v1_observability_chat_completion_fields_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/chat-completion-fields \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/chat-completion-fields`

> Example responses

> 200 Response

```json
{
  "field_definitions": [
    {
      "name": "string",
      "label": "string",
      "type": "ENUM",
      "group": "string",
      "supported_operators": [
        "lt"
      ]
    }
  ],
  "field_groups": [
    {
      "name": "string",
      "label": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-chat-completion-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ChatCompletionFields](#schemachatcompletionfields)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Chat Completion Field Options

<a id="opIdget_chat_completion_field_options_v1_observability_chat_completion_fields__field_name__options_get"></a>

> Code samples

```bash
curl 'https://api.mistral.ai/v1/observability/chat-completion-fields/string/options?operator=lt' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/chat-completion-fields/{field_name}/options`

<h3 id="get-chat-completion-field-options-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|field_name|path|string|true|none|
|operator|query|string|true|The operator to use for filtering options|

#### Enumerated Values

|Parameter|Value|
|---|---|
|operator|lt|
|operator|lte|
|operator|gt|
|operator|gte|
|operator|startswith|
|operator|istartswith|
|operator|endswith|
|operator|iendswith|
|operator|contains|
|operator|icontains|
|operator|matches|
|operator|notcontains|
|operator|inotcontains|
|operator|eq|
|operator|neq|
|operator|isnull|
|operator|includes|
|operator|excludes|
|operator|len_eq|

> Example responses

> 200 Response

```json
{
  "options": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-chat-completion-field-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ChatCompletionFieldOptions](#schemachatcompletionfieldoptions)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Chat Completion Field Options Counts

<a id="opIdget_chat_completion_field_options_counts_v1_observability_chat_completion_fields__field_name__options_counts_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/chat-completion-fields/string/options-counts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filter_params": {
      "filters": {
        "AND": [
          {}
        ],
        "OR": [
          {}
        ]
      }
    }
  }'
```

`POST /v1/observability/chat-completion-fields/{field_name}/options-counts`

> Body parameter

```json
{
  "filter_params": {
    "filters": {
      "AND": [
        {}
      ],
      "OR": [
        {}
      ]
    }
  }
}
```

<h3 id="get-chat-completion-field-options-counts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|field_name|path|string|true|none|
|body|body|[FieldOptionCountsInSchema](#schemafieldoptioncountsinschema)|true|none|
|» filter_params|body|[FilterPayload](#schemafilterpayload) \| null|false|none|
|» » *anyOf*|body|[FilterPayload](#schemafilterpayload)|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "counts": [
    {
      "value": "string",
      "count": 0
    }
  ]
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-chat-completion-field-options-counts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[FieldOptionCounts](#schemafieldoptioncounts)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaobservabilityjudges">beta.observability.judges</h1>

(beta) Create, update, and manage judges for evaluating chat completions.

## Get judges with optional filtering and search

<a id="opIdget_judges_v1_observability_judges_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/judges \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/judges`

<h3 id="get-judges-with-optional-filtering-and-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type_filter|query|[[JudgeOutputType](#schemajudgeoutputtype)] \| null|false|Filter by judge output types|
|model_filter|query|[string] \| null|false|Filter by model names|
|page_size|query|integer|false|none|
|page|query|integer|false|none|
|q|query|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "judges": {
    "results": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "deleted_at": "1970-01-01T00:00:00Z",
        "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "description": "string",
        "model_name": "string",
        "output": {
          "type": "CLASSIFICATION",
          "options": [
            {
              "value": "string",
              "description": "string"
            }
          ]
        },
        "instructions": "string",
        "tools": [
          "string"
        ],
        "up_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "down_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "base_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "count": 0,
    "next": "string",
    "previous": "string"
  }
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-judges-with-optional-filtering-and-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[JudgePreviews](#schemajudgepreviews)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create a new judge

<a id="opIdcreate_judge_v1_observability_judges_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/judges \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "model_name": "string",
    "output": {
      "type": "CLASSIFICATION",
      "options": [
        {
          "value": "string",
          "description": "string"
        }
      ]
    },
    "instructions": "string",
    "tools": [
      "string"
    ]
  }'
```

`POST /v1/observability/judges`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "model_name": "string",
  "output": {
    "type": "CLASSIFICATION",
    "options": [
      {
        "value": "string",
        "description": "string"
      }
    ]
  },
  "instructions": "string",
  "tools": [
    "string"
  ]
}
```

<h3 id="create-a-new-judge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PostJudgeInSchema](#schemapostjudgeinschema)|true|none|
|» name|body|string|true|none|
|» description|body|string|true|none|
|» model_name|body|string|true|none|
|» output|body|[JudgeClassificationOutput](#schemajudgeclassificationoutput) \| [JudgeRegressionOutput](#schemajudgeregressionoutput)|true|none|
|» » *oneOf*|body|[JudgeClassificationOutput](#schemajudgeclassificationoutput)|false|none|
|» » *oneOf*|body|[JudgeRegressionOutput](#schemajudgeregressionoutput)|false|none|
|» instructions|body|string|true|none|
|» tools|body|[string]|true|none|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "description": "string",
  "model_name": "string",
  "output": {
    "type": "CLASSIFICATION",
    "options": [
      {
        "value": "string",
        "description": "string"
      }
    ]
  },
  "instructions": "string",
  "tools": [
    "string"
  ],
  "up_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "down_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "base_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="create-a-new-judge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[JudgePreview](#schemajudgepreview)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get judge by id

<a id="opIdget_judge_by_id_v1_observability_judges__judge_id__get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/judges/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/judges/{judge_id}`

<h3 id="get-judge-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|judge_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "description": "string",
  "model_name": "string",
  "output": {
    "type": "CLASSIFICATION",
    "options": [
      {
        "value": "string",
        "description": "string"
      }
    ]
  },
  "instructions": "string",
  "tools": [
    "string"
  ],
  "up_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "down_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "base_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-judge-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[JudgePreview](#schemajudgepreview)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Update a judge

<a id="opIdupdate_judge_v1_observability_judges__judge_id__put"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/judges/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "model_name": "string",
    "output": {
      "type": "CLASSIFICATION",
      "options": [
        {
          "value": "string",
          "description": "string"
        }
      ]
    },
    "instructions": "string",
    "tools": [
      "string"
    ]
  }'
```

`PUT /v1/observability/judges/{judge_id}`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "model_name": "string",
  "output": {
    "type": "CLASSIFICATION",
    "options": [
      {
        "value": "string",
        "description": "string"
      }
    ]
  },
  "instructions": "string",
  "tools": [
    "string"
  ]
}
```

<h3 id="update-a-judge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|judge_id|path|string(uuid)|true|none|
|body|body|[PutJudgeInSchema](#schemaputjudgeinschema)|true|none|
|» name|body|string|true|none|
|» description|body|string|true|none|
|» model_name|body|string|true|none|
|» output|body|[JudgeClassificationOutput](#schemajudgeclassificationoutput) \| [JudgeRegressionOutput](#schemajudgeregressionoutput)|true|none|
|» » *oneOf*|body|[JudgeClassificationOutput](#schemajudgeclassificationoutput)|false|none|
|» » *oneOf*|body|[JudgeRegressionOutput](#schemajudgeregressionoutput)|false|none|
|» instructions|body|string|true|none|
|» tools|body|[string]|true|none|

> Example responses

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="update-a-judge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete a judge

<a id="opIddelete_judge_v1_observability_judges__judge_id__delete"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/judges/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/observability/judges/{judge_id}`

<h3 id="delete-a-judge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|judge_id|path|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="delete-a-judge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Run a saved judge on a conversation

<a id="opIdjudge_conversation_v1_observability_judges__judge_id__live_judging_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/judges/497f6eca-6276-4993-bfeb-53cbbbba6f08/live-judging \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "messages": [
      {}
    ],
    "properties": {}
  }'
```

`POST /v1/observability/judges/{judge_id}/live-judging`

> Body parameter

```json
{
  "messages": [
    {}
  ],
  "properties": {}
}
```

<h3 id="run-a-saved-judge-on-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|judge_id|path|string(uuid)|true|none|
|body|body|[JudgeConversationRequest](#schemajudgeconversationrequest)|true|none|
|» messages|body|[object]|true|none|
|» properties|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "analysis": "string",
  "answer": "string"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="run-a-saved-judge-on-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[JudgeOutput](#schemajudgeoutput)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaobservabilitycampaigns">beta.observability.campaigns</h1>

(beta) Create and manage evaluation campaigns.

## Get all campaigns

<a id="opIdget_campaigns_v1_observability_campaigns_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/campaigns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/campaigns`

<h3 id="get-all-campaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer|false|none|
|page|query|integer|false|none|
|q|query|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "campaigns": {
    "results": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "deleted_at": "1970-01-01T00:00:00Z",
        "name": "string",
        "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "description": "string",
        "max_nb_events": 0,
        "search_params": {
          "filters": {
            "AND": [
              {}
            ],
            "OR": [
              {}
            ]
          }
        },
        "judge": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "created_at": "1970-01-01T00:00:00Z",
          "updated_at": "1970-01-01T00:00:00Z",
          "deleted_at": "1970-01-01T00:00:00Z",
          "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "description": "string",
          "model_name": "string",
          "output": {
            "type": "CLASSIFICATION",
            "options": [
              {
                "value": "string",
                "description": "string"
              }
            ]
          },
          "instructions": "string",
          "tools": [
            "string"
          ],
          "up_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "down_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "base_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      }
    ],
    "count": 0,
    "next": "string",
    "previous": "string"
  }
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-all-campaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[CampaignPreviews](#schemacampaignpreviews)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create and start a new campaign

<a id="opIdcreate_campaign_v1_observability_campaigns_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/campaigns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "search_params": {
      "filters": {
        "AND": [
          {}
        ],
        "OR": [
          {}
        ]
      }
    },
    "judge_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "description": "string",
    "max_nb_events": 1
  }'
```

`POST /v1/observability/campaigns`

> Body parameter

```json
{
  "search_params": {
    "filters": {
      "AND": [
        {}
      ],
      "OR": [
        {}
      ]
    }
  },
  "judge_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "description": "string",
  "max_nb_events": 1
}
```

<h3 id="create-and-start-a-new-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PostCampaignInSchema](#schemapostcampaigninschema)|true|none|
|» search_params|body|[FilterPayload](#schemafilterpayload)|true|none|
|» judge_id|body|string(uuid)|true|none|
|» name|body|string|true|none|
|» description|body|string|true|none|
|» max_nb_events|body|integer|true|none|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "description": "string",
  "max_nb_events": 0,
  "search_params": {
    "filters": {
      "AND": [
        {}
      ],
      "OR": [
        {}
      ]
    }
  },
  "judge": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "description": "string",
    "model_name": "string",
    "output": {
      "type": "CLASSIFICATION",
      "options": [
        {
          "value": "string",
          "description": "string"
        }
      ]
    },
    "instructions": "string",
    "tools": [
      "string"
    ],
    "up_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "down_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "base_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="create-and-start-a-new-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[CampaignPreview](#schemacampaignpreview)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get campaign by id

<a id="opIdget_campaign_by_id_v1_observability_campaigns__campaign_id__get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/campaigns/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/campaigns/{campaign_id}`

<h3 id="get-campaign-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "description": "string",
  "max_nb_events": 0,
  "search_params": {
    "filters": {
      "AND": [
        {}
      ],
      "OR": [
        {}
      ]
    }
  },
  "judge": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "description": "string",
    "model_name": "string",
    "output": {
      "type": "CLASSIFICATION",
      "options": [
        {
          "value": "string",
          "description": "string"
        }
      ]
    },
    "instructions": "string",
    "tools": [
      "string"
    ],
    "up_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "down_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "base_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-campaign-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[CampaignPreview](#schemacampaignpreview)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete a campaign

<a id="opIddelete_campaign_v1_observability_campaigns__campaign_id__delete"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/campaigns/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/observability/campaigns/{campaign_id}`

<h3 id="delete-a-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="delete-a-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get campaign status by campaign id

<a id="opIdget_campaign_status_by_id_v1_observability_campaigns__campaign_id__status_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/campaigns/497f6eca-6276-4993-bfeb-53cbbbba6f08/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/campaigns/{campaign_id}/status`

<h3 id="get-campaign-status-by-campaign-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "status": "RUNNING"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-campaign-status-by-campaign-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[CampaignStatus](#schemacampaignstatus)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get event ids that were selected by the given campaign

<a id="opIdget_campaign_selected_events_v1_observability_campaigns__campaign_id__selected_events_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/campaigns/497f6eca-6276-4993-bfeb-53cbbbba6f08/selected-events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/campaigns/{campaign_id}/selected-events`

<h3 id="get-event-ids-that-were-selected-by-the-given-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|string(uuid)|true|none|
|page_size|query|integer|false|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "completion_events": {
    "results": [
      {
        "event_id": "string",
        "correlation_id": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "extra_fields": {
          "property1": true,
          "property2": true
        },
        "nb_input_tokens": 0,
        "nb_output_tokens": 0
      }
    ],
    "count": 0,
    "next": "string",
    "previous": "string"
  }
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-event-ids-that-were-selected-by-the-given-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[CampaignSelectedEvents](#schemacampaignselectedevents)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaobservabilitydatasets">beta.observability.datasets</h1>

(beta) Create, update, import, and export datasets.

## List existing datasets

<a id="opIdget_datasets_v1_observability_datasets_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/datasets`

<h3 id="list-existing-datasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer|false|none|
|page|query|integer|false|none|
|q|query|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "datasets": {
    "results": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "deleted_at": "1970-01-01T00:00:00Z",
        "name": "string",
        "description": "string",
        "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "count": 0,
    "next": "string",
    "previous": "string"
  }
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="list-existing-datasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatasetPreviews](#schemadatasetpreviews)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create a new empty dataset

<a id="opIdcreate_dataset_v1_observability_datasets_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string"
  }'
```

`POST /v1/observability/datasets`

> Body parameter

```json
{
  "name": "string",
  "description": "string"
}
```

<h3 id="create-a-new-empty-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PostDatasetInSchema](#schemapostdatasetinschema)|true|none|
|» name|body|string|true|none|
|» description|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "description": "string",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="create-a-new-empty-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[Dataset](#schemadataset)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get dataset by id

<a id="opIdget_dataset_by_id_v1_observability_datasets__dataset_id__get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/datasets/{dataset_id}`

<h3 id="get-dataset-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "description": "string",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-dataset-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatasetPreview](#schemadatasetpreview)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete a dataset

<a id="opIddelete_dataset_v1_observability_datasets__dataset_id__delete"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/observability/datasets/{dataset_id}`

<h3 id="delete-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="delete-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Patch dataset

<a id="opIdupdate_dataset_v1_observability_datasets__dataset_id__patch"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string"
  }'
```

`PATCH /v1/observability/datasets/{dataset_id}`

> Body parameter

```json
{
  "name": "string",
  "description": "string"
}
```

<h3 id="patch-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string(uuid)|true|none|
|body|body|[PatchDatasetInSchema](#schemapatchdatasetinschema)|true|none|
|» name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "description": "string",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="patch-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatasetPreview](#schemadatasetpreview)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## List existing records in the dataset

<a id="opIdget_dataset_records_v1_observability_datasets__dataset_id__records_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets/497f6eca-6276-4993-bfeb-53cbbbba6f08/records \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/datasets/{dataset_id}/records`

<h3 id="list-existing-records-in-the-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string(uuid)|true|none|
|page_size|query|integer|false|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "records": {
    "results": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "deleted_at": "1970-01-01T00:00:00Z",
        "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "payload": {
          "messages": [
            {}
          ]
        },
        "properties": {},
        "source": "EXPLORER"
      }
    ],
    "count": 0,
    "next": "string",
    "previous": "string"
  }
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="list-existing-records-in-the-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatasetRecords](#schemadatasetrecords)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Add a conversation to the dataset

<a id="opIdcreate_dataset_record_v1_observability_datasets__dataset_id__records_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets/497f6eca-6276-4993-bfeb-53cbbbba6f08/records \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payload": {
      "messages": [
        {}
      ]
    },
    "properties": {}
  }'
```

`POST /v1/observability/datasets/{dataset_id}/records`

> Body parameter

```json
{
  "payload": {
    "messages": [
      {}
    ]
  },
  "properties": {}
}
```

<h3 id="add-a-conversation-to-the-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string(uuid)|true|none|
|body|body|[PostDatasetRecordInSchema](#schemapostdatasetrecordinschema)|true|none|
|» payload|body|[ConversationPayload](#schemaconversationpayload)|true|none|
|» properties|body|object|true|none|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payload": {
    "messages": [
      {}
    ]
  },
  "properties": {},
  "source": "EXPLORER"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="add-a-conversation-to-the-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[DatasetRecord](#schemadatasetrecord)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Populate the dataset with a campaign

<a id="opIdpost_dataset_records_from_campaign_v1_observability_datasets__dataset_id__imports_from_campaign_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets/497f6eca-6276-4993-bfeb-53cbbbba6f08/imports/from-campaign \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "campaign_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/observability/datasets/{dataset_id}/imports/from-campaign`

> Body parameter

```json
{
  "campaign_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="populate-the-dataset-with-a-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string(uuid)|true|none|
|body|body|[PostDatasetImportFromCampaignInSchema](#schemapostdatasetimportfromcampaigninschema)|true|none|
|» campaign_id|body|string(uuid)|true|none|

> Example responses

> 202 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "creator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "RUNNING",
  "progress": 0,
  "message": "string"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="populate-the-dataset-with-a-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful Response|[DatasetImportTask](#schemadatasetimporttask)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Populate the dataset with samples from the explorer

<a id="opIdpost_dataset_records_from_explorer_v1_observability_datasets__dataset_id__imports_from_explorer_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets/497f6eca-6276-4993-bfeb-53cbbbba6f08/imports/from-explorer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "completion_event_ids": [
      "string"
    ]
  }'
```

`POST /v1/observability/datasets/{dataset_id}/imports/from-explorer`

> Body parameter

```json
{
  "completion_event_ids": [
    "string"
  ]
}
```

<h3 id="populate-the-dataset-with-samples-from-the-explorer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string(uuid)|true|none|
|body|body|[PostDatasetImportFromExplorerInSchema](#schemapostdatasetimportfromexplorerinschema)|true|none|
|» completion_event_ids|body|[string]|true|none|

> Example responses

> 202 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "creator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "RUNNING",
  "progress": 0,
  "message": "string"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="populate-the-dataset-with-samples-from-the-explorer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful Response|[DatasetImportTask](#schemadatasetimporttask)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Populate the dataset with samples from an uploaded file

<a id="opIdpost_dataset_records_from_file_v1_observability_datasets__dataset_id__imports_from_file_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets/497f6eca-6276-4993-bfeb-53cbbbba6f08/imports/from-file \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "file_id": "string"
  }'
```

`POST /v1/observability/datasets/{dataset_id}/imports/from-file`

> Body parameter

```json
{
  "file_id": "string"
}
```

<h3 id="populate-the-dataset-with-samples-from-an-uploaded-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string(uuid)|true|none|
|body|body|[PostDatasetImportFromFileInSchema](#schemapostdatasetimportfromfileinschema)|true|none|
|» file_id|body|string|true|none|

> Example responses

> 202 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "creator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "RUNNING",
  "progress": 0,
  "message": "string"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="populate-the-dataset-with-samples-from-an-uploaded-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful Response|[DatasetImportTask](#schemadatasetimporttask)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Populate the dataset with samples from the playground

<a id="opIdpost_dataset_records_from_playground_v1_observability_datasets__dataset_id__imports_from_playground_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets/497f6eca-6276-4993-bfeb-53cbbbba6f08/imports/from-playground \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "conversation_ids": [
      "string"
    ]
  }'
```

`POST /v1/observability/datasets/{dataset_id}/imports/from-playground`

> Body parameter

```json
{
  "conversation_ids": [
    "string"
  ]
}
```

<h3 id="populate-the-dataset-with-samples-from-the-playground-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string(uuid)|true|none|
|body|body|[PostDatasetImportFromPlaygroundInSchema](#schemapostdatasetimportfromplaygroundinschema)|true|none|
|» conversation_ids|body|[string]|true|none|

> Example responses

> 202 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "creator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "RUNNING",
  "progress": 0,
  "message": "string"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="populate-the-dataset-with-samples-from-the-playground-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful Response|[DatasetImportTask](#schemadatasetimporttask)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Populate the dataset with samples from another dataset

<a id="opIdpost_dataset_records_from_dataset_v1_observability_datasets__dataset_id__imports_from_dataset_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets/497f6eca-6276-4993-bfeb-53cbbbba6f08/imports/from-dataset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataset_record_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }'
```

`POST /v1/observability/datasets/{dataset_id}/imports/from-dataset`

> Body parameter

```json
{
  "dataset_record_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

<h3 id="populate-the-dataset-with-samples-from-another-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string(uuid)|true|none|
|body|body|[PostDatasetImportFromDatasetInSchema](#schemapostdatasetimportfromdatasetinschema)|true|none|
|» dataset_record_ids|body|[string(uuid)]|true|none|

> Example responses

> 202 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "creator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "RUNNING",
  "progress": 0,
  "message": "string"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="populate-the-dataset-with-samples-from-another-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful Response|[DatasetImportTask](#schemadatasetimporttask)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Export to the Files API and retrieve presigned URL to download the resulting JSONL file

<a id="opIdexport_dataset_to_jsonl_v1_observability_datasets__dataset_id__exports_to_jsonl_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets/497f6eca-6276-4993-bfeb-53cbbbba6f08/exports/to-jsonl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/datasets/{dataset_id}/exports/to-jsonl`

<h3 id="export-to-the-files-api-and-retrieve-presigned-url-to-download-the-resulting-jsonl-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "file_url": "string"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="export-to-the-files-api-and-retrieve-presigned-url-to-download-the-resulting-jsonl-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatasetExport](#schemadatasetexport)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get status of a dataset import task

<a id="opIdget_dataset_import_task_v1_observability_datasets__dataset_id__tasks__task_id__get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets/497f6eca-6276-4993-bfeb-53cbbbba6f08/tasks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/datasets/{dataset_id}/tasks/{task_id}`

<h3 id="get-status-of-a-dataset-import-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string(uuid)|true|none|
|task_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "creator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "RUNNING",
  "progress": 0,
  "message": "string"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-status-of-a-dataset-import-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatasetImportTask](#schemadatasetimporttask)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## List import tasks for the given dataset

<a id="opIdget_dataset_import_tasks_v1_observability_datasets__dataset_id__tasks_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/datasets/497f6eca-6276-4993-bfeb-53cbbbba6f08/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/datasets/{dataset_id}/tasks`

<h3 id="list-import-tasks-for-the-given-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string(uuid)|true|none|
|page_size|query|integer|false|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "tasks": {
    "results": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "deleted_at": "1970-01-01T00:00:00Z",
        "creator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "RUNNING",
        "progress": 0,
        "message": "string"
      }
    ],
    "count": 0,
    "next": "string",
    "previous": "string"
  }
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="list-import-tasks-for-the-given-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatasetImportTasks](#schemadatasetimporttasks)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaobservabilitydatasetsrecords">beta.observability.datasets.records</h1>

(beta) Manage individual records within datasets.

## Get the content of a given conversation from a dataset

<a id="opIdget_dataset_record_v1_observability_dataset_records__dataset_record_id__get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/dataset-records/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/observability/dataset-records/{dataset_record_id}`

<h3 id="get-the-content-of-a-given-conversation-from-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_record_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payload": {
    "messages": [
      {}
    ]
  },
  "properties": {},
  "source": "EXPLORER"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="get-the-content-of-a-given-conversation-from-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DatasetRecord](#schemadatasetrecord)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete a record from a dataset

<a id="opIddelete_dataset_record_v1_observability_dataset_records__dataset_record_id__delete"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/dataset-records/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/observability/dataset-records/{dataset_record_id}`

<h3 id="delete-a-record-from-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_record_id|path|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="delete-a-record-from-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete multiple records from datasets

<a id="opIddelete_dataset_records_v1_observability_dataset_records_bulk_delete_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/dataset-records/bulk-delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataset_record_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }'
```

`POST /v1/observability/dataset-records/bulk-delete`

> Body parameter

```json
{
  "dataset_record_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

<h3 id="delete-multiple-records-from-datasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteDatasetRecordsInSchema](#schemadeletedatasetrecordsinschema)|true|none|
|» dataset_record_ids|body|[string(uuid)]|true|none|

> Example responses

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="delete-multiple-records-from-datasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Run Judge on a dataset record based on the given options

<a id="opIdjudge_dataset_record_v1_observability_dataset_records__dataset_record_id__live_judging_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/dataset-records/497f6eca-6276-4993-bfeb-53cbbbba6f08/live-judging \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "judge_definition": {
      "name": "string",
      "description": "string",
      "model_name": "string",
      "output": {
        "type": "CLASSIFICATION",
        "options": [
          {
            "value": "string",
            "description": "string"
          }
        ]
      },
      "instructions": "string",
      "tools": [
        "string"
      ]
    }
  }'
```

`POST /v1/observability/dataset-records/{dataset_record_id}/live-judging`

> Body parameter

```json
{
  "judge_definition": {
    "name": "string",
    "description": "string",
    "model_name": "string",
    "output": {
      "type": "CLASSIFICATION",
      "options": [
        {
          "value": "string",
          "description": "string"
        }
      ]
    },
    "instructions": "string",
    "tools": [
      "string"
    ]
  }
}
```

<h3 id="run-judge-on-a-dataset-record-based-on-the-given-options-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_record_id|path|string(uuid)|true|none|
|body|body|[PostDatasetRecordJudgingInSchema](#schemapostdatasetrecordjudginginschema)|true|none|
|» judge_definition|body|[PostJudgeInSchema](#schemapostjudgeinschema)|true|none|

> Example responses

> 200 Response

```json
{
  "analysis": "string",
  "answer": "string"
}
```

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="run-judge-on-a-dataset-record-based-on-the-given-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[JudgeOutput](#schemajudgeoutput)|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Update a dataset record conversation payload

<a id="opIdupdate_dataset_record_payload_v1_observability_dataset_records__dataset_record_id__payload_put"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/dataset-records/497f6eca-6276-4993-bfeb-53cbbbba6f08/payload \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payload": {
      "messages": [
        {}
      ]
    }
  }'
```

`PUT /v1/observability/dataset-records/{dataset_record_id}/payload`

> Body parameter

```json
{
  "payload": {
    "messages": [
      {}
    ]
  }
}
```

<h3 id="update-a-dataset-record-conversation-payload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_record_id|path|string(uuid)|true|none|
|body|body|[PutDatasetRecordPayloadInSchema](#schemaputdatasetrecordpayloadinschema)|true|none|
|» payload|body|[ConversationPayload](#schemaconversationpayload)|true|none|

> Example responses

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="update-a-dataset-record-conversation-payload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Update conversation properties

<a id="opIdupdate_dataset_record_properties_v1_observability_dataset_records__dataset_record_id__properties_put"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/observability/dataset-records/497f6eca-6276-4993-bfeb-53cbbbba6f08/properties \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "properties": {}
  }'
```

`PUT /v1/observability/dataset-records/{dataset_record_id}/properties`

> Body parameter

```json
{
  "properties": {}
}
```

<h3 id="update-conversation-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_record_id|path|string(uuid)|true|none|
|body|body|[PutDatasetRecordPropertiesInSchema](#schemaputdatasetrecordpropertiesinschema)|true|none|
|» properties|body|object|true|none|

> Example responses

> 400 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 404 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 408 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 409 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

> 422 Response

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

<h3 id="update-conversation-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request - Invalid request parameters or data|[ObservabilityError](#schemaobservabilityerror)|
|404|Not Found|Not Found - Resource does not exist|[ObservabilityError](#schemaobservabilityerror)|
|408|Request Timeout|Request Timeout - Operation timed out|[ObservabilityError](#schemaobservabilityerror)|
|409|Conflict|Conflict - Resource conflict|[ObservabilityError](#schemaobservabilityerror)|
|422|Unprocessable Entity|Unprocessable Entity - Validation error|[ObservabilityError](#schemaobservabilityerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaworkflows">beta.workflows</h1>

Workflow management API.

## Get Workflow Registrations

<a id="opIdget_workflow_registrations_v1_workflows_registrations_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/registrations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/registrations`

<h3 id="get-workflow-registrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|query|string(uuid) \| null|false|The workflow ID to filter by|
|task_queue|query|string \| null|false|The task queue to filter by|
|active_only|query|boolean|false|Whether to only return active workflows versions|
|include_shared|query|boolean|false|Whether to include shared workflow versions|
|workflow_search|query|string \| null|false|The workflow name to filter by|
|archived|query|boolean \| null|false|Filter by archived state. False=exclude archived, True=only archived, None=include all|
|with_workflow|query|boolean|false|Whether to include the workflow definition|
|available_in_chat_assistant|query|boolean \| null|false|Whether to only return workflows compatible with chat assistant|
|limit|query|integer|false|The maximum number of workflows versions to return|
|cursor|query|string(uuid) \| null|false|The cursor for pagination|

> Example responses

> 200 Response

```json
{
  "workflow_registrations": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_queue": "string",
      "definition": {
        "input_schema": {},
        "output_schema": {},
        "signals": [
          {
            "name": "string",
            "description": "string",
            "input_schema": {}
          }
        ],
        "queries": [
          {
            "name": "string",
            "description": "string",
            "input_schema": {},
            "output_schema": {}
          }
        ],
        "updates": [
          {
            "name": "string",
            "description": "string",
            "input_schema": {},
            "output_schema": {}
          }
        ],
        "enforce_determinism": false,
        "execution_timeout": 0
      },
      "workflow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "workflow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "display_name": "string",
        "type": "code",
        "description": "string",
        "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "shared_namespace": "string",
        "available_in_chat_assistant": false,
        "is_technical": false,
        "archived": false
      },
      "compatible_with_chat_assistant": false
    }
  ],
  "next_cursor": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workflow_versions": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_queue": "string",
      "definition": {
        "input_schema": {},
        "output_schema": {},
        "signals": [
          {
            "name": "string",
            "description": "string",
            "input_schema": {}
          }
        ],
        "queries": [
          {
            "name": "string",
            "description": "string",
            "input_schema": {},
            "output_schema": {}
          }
        ],
        "updates": [
          {
            "name": "string",
            "description": "string",
            "input_schema": {},
            "output_schema": {}
          }
        ],
        "enforce_determinism": false,
        "execution_timeout": 0
      },
      "workflow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "workflow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "display_name": "string",
        "type": "code",
        "description": "string",
        "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "shared_namespace": "string",
        "available_in_chat_assistant": false,
        "is_technical": false,
        "archived": false
      },
      "compatible_with_chat_assistant": false
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

<h3 id="get-workflow-registrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowRegistrationListResponse](#schemaworkflowregistrationlistresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Execute Workflow

<a id="opIdexecute_workflow_v1_workflows__workflow_identifier__execute_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/string/execute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "execution_id": "string",
    "input": {},
    "encoded_input": {
      "b64payload": "string",
      "encoding_options": [],
      "empty": false
    },
    "wait_for_result": false,
    "timeout_seconds": 0,
    "custom_tracing_attributes": {
      "property1": "string",
      "property2": "string"
    },
    "task_queue": "string",
    "deployment_name": "string"
  }'
```

`POST /v1/workflows/{workflow_identifier}/execute`

> Body parameter

```json
{
  "execution_id": "string",
  "input": {},
  "encoded_input": {
    "b64payload": "string",
    "encoding_options": [],
    "empty": false
  },
  "wait_for_result": false,
  "timeout_seconds": 0,
  "custom_tracing_attributes": {
    "property1": "string",
    "property2": "string"
  },
  "task_queue": "string",
  "deployment_name": "string"
}
```

<h3 id="execute-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_identifier|path|string|true|none|
|body|body|[WorkflowExecutionRequest](#schemaworkflowexecutionrequest)|true|none|
|» execution_id|body|string \| null|false|Allows you to specify a custom execution ID. If not provided, a random ID will be generated.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» input|body|object \| null|false|The input to the workflow. This should be a dictionary that matches the workflow's input schema.|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» encoded_input|body|[NetworkEncodedInput](#schemanetworkencodedinput) \| null|false|Encoded input to the workflow, used when payload encoding is enabled.|
|» » *anyOf*|body|[NetworkEncodedInput](#schemanetworkencodedinput)|false|none|
|» » *anyOf*|body|null|false|none|
|» wait_for_result|body|boolean|false|If true, wait for the workflow to complete and return the result directly.|
|» timeout_seconds|body|number \| null|false|Maximum time to wait for completion when wait_for_result is true.|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» custom_tracing_attributes|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» task_queue|body|string \| null|false|**Deprecated.** Deprecated. Use deployment_name instead.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» deployment_name|body|string \| null|false|Name of the deployment to route this execution to|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "workflow_name": "string",
  "execution_id": "string",
  "parent_execution_id": "string",
  "root_execution_id": "string",
  "status": "RUNNING",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "total_duration_ms": 0,
  "result": null
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

<h3 id="execute-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="execute-workflow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[WorkflowExecutionResponse](#schemaworkflowexecutionresponse)|false|none|none|
|*anyOf*|[WorkflowExecutionSyncResponse](#schemaworkflowexecutionsyncresponse)|false|none|Response model for synchronous workflow execution|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Execute Workflow Registration

<a id="opIdexecute_workflow_registration_v1_workflows_registrations__workflow_registration_id__execute_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/registrations/497f6eca-6276-4993-bfeb-53cbbbba6f08/execute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "execution_id": "string",
    "input": {},
    "encoded_input": {
      "b64payload": "string",
      "encoding_options": [],
      "empty": false
    },
    "wait_for_result": false,
    "timeout_seconds": 0,
    "custom_tracing_attributes": {
      "property1": "string",
      "property2": "string"
    },
    "task_queue": "string",
    "deployment_name": "string"
  }'
```

`POST /v1/workflows/registrations/{workflow_registration_id}/execute`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "execution_id": "string",
  "input": {},
  "encoded_input": {
    "b64payload": "string",
    "encoding_options": [],
    "empty": false
  },
  "wait_for_result": false,
  "timeout_seconds": 0,
  "custom_tracing_attributes": {
    "property1": "string",
    "property2": "string"
  },
  "task_queue": "string",
  "deployment_name": "string"
}
```

<h3 id="execute-workflow-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_registration_id|path|string(uuid)|true|none|
|body|body|[WorkflowExecutionRequest](#schemaworkflowexecutionrequest)|true|none|
|» execution_id|body|string \| null|false|Allows you to specify a custom execution ID. If not provided, a random ID will be generated.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» input|body|object \| null|false|The input to the workflow. This should be a dictionary that matches the workflow's input schema.|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» encoded_input|body|[NetworkEncodedInput](#schemanetworkencodedinput) \| null|false|Encoded input to the workflow, used when payload encoding is enabled.|
|» » *anyOf*|body|[NetworkEncodedInput](#schemanetworkencodedinput)|false|none|
|» » *anyOf*|body|null|false|none|
|» wait_for_result|body|boolean|false|If true, wait for the workflow to complete and return the result directly.|
|» timeout_seconds|body|number \| null|false|Maximum time to wait for completion when wait_for_result is true.|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» custom_tracing_attributes|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» task_queue|body|string \| null|false|**Deprecated.** Deprecated. Use deployment_name instead.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» deployment_name|body|string \| null|false|Name of the deployment to route this execution to|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "workflow_name": "string",
  "execution_id": "string",
  "parent_execution_id": "string",
  "root_execution_id": "string",
  "status": "RUNNING",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "total_duration_ms": 0,
  "result": null
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

<h3 id="execute-workflow-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="execute-workflow-registration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[WorkflowExecutionResponse](#schemaworkflowexecutionresponse)|false|none|none|
|*anyOf*|[WorkflowExecutionSyncResponse](#schemaworkflowexecutionsyncresponse)|false|none|Response model for synchronous workflow execution|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Workflow

<a id="opIdget_workflow_v1_workflows__workflow_identifier__get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/{workflow_identifier}`

<h3 id="get-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_identifier|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "workflow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "display_name": "string",
    "type": "code",
    "description": "string",
    "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shared_namespace": "string",
    "available_in_chat_assistant": false,
    "is_technical": false,
    "archived": false,
    "active": true
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

<h3 id="get-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowGetResponse](#schemaworkflowgetresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Update Workflow

<a id="opIdupdate_workflow_v1_workflows__workflow_identifier__put"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "display_name": "string",
    "description": "string",
    "available_in_chat_assistant": true
  }'
```

`PUT /v1/workflows/{workflow_identifier}`

> Body parameter

```json
{
  "display_name": "string",
  "description": "string",
  "available_in_chat_assistant": true
}
```

<h3 id="update-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_identifier|path|string|true|none|
|body|body|[WorkflowUpdateRequest](#schemaworkflowupdaterequest)|true|none|
|» display_name|body|string \| null|false|New display name value|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|New description value|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» available_in_chat_assistant|body|boolean \| null|false|Whether to make the workflow available in the chat assistant|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "workflow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "display_name": "string",
    "type": "code",
    "description": "string",
    "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shared_namespace": "string",
    "available_in_chat_assistant": false,
    "is_technical": false,
    "archived": false
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

<h3 id="update-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowUpdateResponse](#schemaworkflowupdateresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Workflow Registration

<a id="opIdget_workflow_registration_v1_workflows_registrations__workflow_registration_id__get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/registrations/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/registrations/{workflow_registration_id}`

<h3 id="get-workflow-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_registration_id|path|string(uuid)|true|none|
|with_workflow|query|boolean|false|Whether to include the workflow definition|
|include_shared|query|boolean|false|Whether to include shared workflow versions|

> Example responses

> 200 Response

```json
{
  "workflow_registration": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "task_queue": "string",
    "definition": {
      "input_schema": {},
      "output_schema": {},
      "signals": [
        {
          "name": "string",
          "description": "string",
          "input_schema": {}
        }
      ],
      "queries": [
        {
          "name": "string",
          "description": "string",
          "input_schema": {},
          "output_schema": {}
        }
      ],
      "updates": [
        {
          "name": "string",
          "description": "string",
          "input_schema": {},
          "output_schema": {}
        }
      ],
      "enforce_determinism": false,
      "execution_timeout": 0
    },
    "workflow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workflow": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "display_name": "string",
      "type": "code",
      "description": "string",
      "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "shared_namespace": "string",
      "available_in_chat_assistant": false,
      "is_technical": false,
      "archived": false
    },
    "compatible_with_chat_assistant": false,
    "active": true
  },
  "workflow_version": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "task_queue": "string",
    "definition": {
      "input_schema": {},
      "output_schema": {},
      "signals": [
        {
          "name": "string",
          "description": "string",
          "input_schema": {}
        }
      ],
      "queries": [
        {
          "name": "string",
          "description": "string",
          "input_schema": {},
          "output_schema": {}
        }
      ],
      "updates": [
        {
          "name": "string",
          "description": "string",
          "input_schema": {},
          "output_schema": {}
        }
      ],
      "enforce_determinism": false,
      "execution_timeout": 0
    },
    "workflow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workflow": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "display_name": "string",
      "type": "code",
      "description": "string",
      "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "shared_namespace": "string",
      "available_in_chat_assistant": false,
      "is_technical": false,
      "archived": false
    },
    "compatible_with_chat_assistant": false,
    "active": true
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

<h3 id="get-workflow-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowRegistrationGetResponse](#schemaworkflowregistrationgetresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Archive Workflow

<a id="opIdarchive_workflow_v1_workflows__workflow_identifier__archive_put"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/string/archive \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/workflows/{workflow_identifier}/archive`

<h3 id="archive-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_identifier|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "workflow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "display_name": "string",
    "type": "code",
    "description": "string",
    "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shared_namespace": "string",
    "available_in_chat_assistant": false,
    "is_technical": false,
    "archived": false
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

<h3 id="archive-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowArchiveResponse](#schemaworkflowarchiveresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Unarchive Workflow

<a id="opIdunarchive_workflow_v1_workflows__workflow_identifier__unarchive_put"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/string/unarchive \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/workflows/{workflow_identifier}/unarchive`

<h3 id="unarchive-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_identifier|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "workflow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "display_name": "string",
    "type": "code",
    "description": "string",
    "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shared_namespace": "string",
    "available_in_chat_assistant": false,
    "is_technical": false,
    "archived": false
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

<h3 id="unarchive-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowUnarchiveResponse](#schemaworkflowunarchiveresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaworkflowsexecutions">beta.workflows.executions</h1>

Trigger, monitor, and control workflow executions.

## Get Workflow Execution

<a id="opIdget_workflow_execution_v1_workflows_executions__execution_id__get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/executions/{execution_id}`

<h3 id="get-workflow-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|execution_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "workflow_name": "string",
  "execution_id": "string",
  "parent_execution_id": "string",
  "root_execution_id": "string",
  "status": "RUNNING",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "total_duration_ms": 0,
  "result": null
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

<h3 id="get-workflow-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowExecutionResponse](#schemaworkflowexecutionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Workflow Execution History

<a id="opIdget_workflow_execution_history_v1_workflows_executions__execution_id__history_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/string/history \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/executions/{execution_id}/history`

<h3 id="get-workflow-execution-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|execution_id|path|string|true|none|
|decode_payloads|query|boolean|false|none|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-workflow-execution-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Signal Workflow Execution

<a id="opIdsignal_workflow_execution_v1_workflows_executions__execution_id__signals_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/string/signals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "input": {
      "b64payload": "string",
      "encoding_options": [],
      "empty": false
    }
  }'
```

`POST /v1/workflows/executions/{execution_id}/signals`

> Body parameter

```json
{
  "name": "string",
  "input": {
    "b64payload": "string",
    "encoding_options": [],
    "empty": false
  }
}
```

<h3 id="signal-workflow-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|execution_id|path|string|true|none|
|body|body|[SignalInvocationBody](#schemasignalinvocationbody)|true|none|
|» name|body|string|true|The name of the signal to send|
|» input|body|[NetworkEncodedInput](#schemanetworkencodedinput) \| object \| null|false|Input data for the signal, matching its schema|
|» » *anyOf*|body|[NetworkEncodedInput](#schemanetworkencodedinput)|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 202 Response

```json
{
  "message": "Signal accepted"
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

<h3 id="signal-workflow-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful Response|[SignalWorkflowResponse](#schemasignalworkflowresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Query Workflow Execution

<a id="opIdquery_workflow_execution_v1_workflows_executions__execution_id__queries_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/string/queries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "input": {
      "b64payload": "string",
      "encoding_options": [],
      "empty": false
    }
  }'
```

`POST /v1/workflows/executions/{execution_id}/queries`

> Body parameter

```json
{
  "name": "string",
  "input": {
    "b64payload": "string",
    "encoding_options": [],
    "empty": false
  }
}
```

<h3 id="query-workflow-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|execution_id|path|string|true|none|
|body|body|[QueryInvocationBody](#schemaqueryinvocationbody)|true|none|
|» name|body|string|true|The name of the query to request|
|» input|body|[NetworkEncodedInput](#schemanetworkencodedinput) \| object \| null|false|Input data for the query, matching its schema|
|» » *anyOf*|body|[NetworkEncodedInput](#schemanetworkencodedinput)|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "query_name": "string",
  "result": null
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

<h3 id="query-workflow-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[QueryWorkflowResponse](#schemaqueryworkflowresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Terminate Workflow Execution

<a id="opIdterminate_workflow_execution_v1_workflows_executions__execution_id__terminate_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/string/terminate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/workflows/executions/{execution_id}/terminate`

<h3 id="terminate-workflow-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|execution_id|path|string|true|none|

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

<h3 id="terminate-workflow-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Batch Terminate Workflow Executions

<a id="opIdbatch_terminate_workflow_executions_v1_workflows_executions_terminate_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/terminate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "execution_ids": [
      "string"
    ]
  }'
```

`POST /v1/workflows/executions/terminate`

> Body parameter

```json
{
  "execution_ids": [
    "string"
  ]
}
```

<h3 id="batch-terminate-workflow-executions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchExecutionBody](#schemabatchexecutionbody)|true|none|
|» execution_ids|body|[string]|true|List of execution IDs to process|

> Example responses

> 200 Response

```json
{
  "results": {
    "property1": {
      "status": "string",
      "error": "string"
    },
    "property2": {
      "status": "string",
      "error": "string"
    }
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

<h3 id="batch-terminate-workflow-executions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BatchExecutionResponse](#schemabatchexecutionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Cancel Workflow Execution

<a id="opIdcancel_workflow_execution_v1_workflows_executions__execution_id__cancel_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/workflows/executions/{execution_id}/cancel`

<h3 id="cancel-workflow-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|execution_id|path|string|true|none|

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

<h3 id="cancel-workflow-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Batch Cancel Workflow Executions

<a id="opIdbatch_cancel_workflow_executions_v1_workflows_executions_cancel_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "execution_ids": [
      "string"
    ]
  }'
```

`POST /v1/workflows/executions/cancel`

> Body parameter

```json
{
  "execution_ids": [
    "string"
  ]
}
```

<h3 id="batch-cancel-workflow-executions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchExecutionBody](#schemabatchexecutionbody)|true|none|
|» execution_ids|body|[string]|true|List of execution IDs to process|

> Example responses

> 200 Response

```json
{
  "results": {
    "property1": {
      "status": "string",
      "error": "string"
    },
    "property2": {
      "status": "string",
      "error": "string"
    }
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

<h3 id="batch-cancel-workflow-executions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BatchExecutionResponse](#schemabatchexecutionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Reset Workflow

<a id="opIdreset_workflow_v1_workflows_executions__execution_id__reset_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/string/reset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "event_id": 0,
    "reason": "string",
    "exclude_signals": false,
    "exclude_updates": false
  }'
```

`POST /v1/workflows/executions/{execution_id}/reset`

> Body parameter

```json
{
  "event_id": 0,
  "reason": "string",
  "exclude_signals": false,
  "exclude_updates": false
}
```

<h3 id="reset-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|execution_id|path|string|true|none|
|body|body|[ResetInvocationBody](#schemaresetinvocationbody)|true|none|
|» event_id|body|integer|true|The event ID to reset the workflow execution to|
|» reason|body|string \| null|false|Reason for resetting the workflow execution|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» exclude_signals|body|boolean|false|Whether to exclude signals that happened after the reset point|
|» exclude_updates|body|boolean|false|Whether to exclude updates that happened after the reset point|

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

<h3 id="reset-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Update Workflow Execution

<a id="opIdupdate_workflow_execution_v1_workflows_executions__execution_id__updates_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/string/updates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "input": {
      "b64payload": "string",
      "encoding_options": [],
      "empty": false
    }
  }'
```

`POST /v1/workflows/executions/{execution_id}/updates`

> Body parameter

```json
{
  "name": "string",
  "input": {
    "b64payload": "string",
    "encoding_options": [],
    "empty": false
  }
}
```

<h3 id="update-workflow-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|execution_id|path|string|true|none|
|body|body|[UpdateInvocationBody](#schemaupdateinvocationbody)|true|none|
|» name|body|string|true|The name of the update to request|
|» input|body|[NetworkEncodedInput](#schemanetworkencodedinput) \| object \| null|false|Input data for the update, matching its schema|
|» » *anyOf*|body|[NetworkEncodedInput](#schemanetworkencodedinput)|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "update_name": "string",
  "result": null
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

<h3 id="update-workflow-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[UpdateWorkflowResponse](#schemaupdateworkflowresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Workflow Execution Trace Otel

<a id="opIdget_workflow_execution_trace_otel"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/string/trace/otel \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/executions/{execution_id}/trace/otel`

<h3 id="get-workflow-execution-trace-otel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|execution_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "workflow_name": "string",
  "execution_id": "string",
  "parent_execution_id": "string",
  "root_execution_id": "string",
  "status": "RUNNING",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "total_duration_ms": 0,
  "result": null,
  "data_source": "string",
  "otel_trace_id": "string",
  "otel_trace_data": {
    "batches": [
      {
        "resource": {
          "attributes": [
            {
              "key": "string",
              "value": {
                "stringValue": "string"
              }
            }
          ]
        },
        "scopeSpans": [
          {
            "scope": {
              "name": "string"
            },
            "spans": [
              {
                "traceId": "string",
                "spanId": "string",
                "parentSpanId": "string",
                "name": "string",
                "kind": "SPAN_KIND_INTERNAL",
                "startTimeUnixNano": "string",
                "endTimeUnixNano": "string",
                "attributes": [
                  {
                    "key": "string",
                    "value": {
                      "stringValue": "string"
                    }
                  }
                ],
                "events": [
                  {
                    "name": "string",
                    "timeUnixNano": "string",
                    "attributes": [
                      {
                        "key": "string",
                        "value": {
                          "stringValue": "string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
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

<h3 id="get-workflow-execution-trace-otel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowExecutionTraceOTelResponse](#schemaworkflowexecutiontraceotelresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Workflow Execution Trace Summary

<a id="opIdget_workflow_execution_trace_summary"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/string/trace/summary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/executions/{execution_id}/trace/summary`

<h3 id="get-workflow-execution-trace-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|execution_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "workflow_name": "string",
  "execution_id": "string",
  "parent_execution_id": "string",
  "root_execution_id": "string",
  "status": "RUNNING",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "total_duration_ms": 0,
  "result": null,
  "span_tree": {
    "span_id": "string",
    "name": "string",
    "start_time_unix_nano": 0,
    "end_time_unix_nano": 0,
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "events": [
      {
        "type": "EVENT",
        "name": "string",
        "id": "string",
        "timestamp_unix_nano": 0,
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "internal": false
      }
    ],
    "children": [
      {}
    ]
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

<h3 id="get-workflow-execution-trace-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowExecutionTraceSummaryResponse](#schemaworkflowexecutiontracesummaryresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Workflow Execution Trace Events

<a id="opIdget_workflow_execution_trace_events"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/string/trace/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/executions/{execution_id}/trace/events`

<h3 id="get-workflow-execution-trace-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|execution_id|path|string|true|none|
|merge_same_id_events|query|boolean|false|none|
|include_internal_events|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "workflow_name": "string",
  "execution_id": "string",
  "parent_execution_id": "string",
  "root_execution_id": "string",
  "status": "RUNNING",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "total_duration_ms": 0,
  "result": null,
  "events": [
    {
      "type": "EVENT",
      "name": "string",
      "id": "string",
      "timestamp_unix_nano": 0,
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "internal": false
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

<h3 id="get-workflow-execution-trace-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowExecutionTraceEventsResponse](#schemaworkflowexecutiontraceeventsresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Stream

<a id="opIdstream_v1_workflows_executions__execution_id__stream_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/executions/string/stream \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/executions/{execution_id}/stream`

<h3 id="stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|execution_id|path|string|true|none|
|event_source|query|[EventSource](#schemaeventsource) \| null|false|none|
|last_event_id|query|string \| null|false|none|

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

<h3 id="stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stream of Server-Sent Events (SSE)|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="stream-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|string|false|none|none|
|data|[StreamEventSsePayload](#schemastreameventssepayload)|false|none|none|
|id|string|false|none|none|
|retry|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaworkflowsruns">beta.workflows.runs</h1>

List and inspect individual workflow runs.

## List Runs

<a id="opIdlist_runs_v1_workflows_runs_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/runs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/runs`

<h3 id="list-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_identifier|query|string \| null|false|Filter by workflow name or id|
|search|query|string \| null|false|Search by workflow name, display name or id|
|status|query|[WorkflowExecutionStatus](#schemaworkflowexecutionstatus) \| [[WorkflowExecutionStatus](#schemaworkflowexecutionstatus)] \| null|false|Filter by workflow status|
|page_size|query|integer|false|Number of items per page|
|next_page_token|query|string \| null|false|Token for the next page of results|

> Example responses

> 200 Response

```json
{
  "executions": [
    {
      "workflow_name": "string",
      "execution_id": "string",
      "parent_execution_id": "string",
      "root_execution_id": "string",
      "status": "RUNNING",
      "start_time": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z",
      "total_duration_ms": 0
    }
  ],
  "next_page_token": "string"
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

<h3 id="list-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowExecutionListResponse](#schemaworkflowexecutionlistresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Run

<a id="opIdget_run_v1_workflows_runs__run_id__get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/runs/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/runs/{run_id}`

<h3 id="get-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|run_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "workflow_name": "string",
  "execution_id": "string",
  "parent_execution_id": "string",
  "root_execution_id": "string",
  "status": "RUNNING",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "total_duration_ms": 0,
  "result": null
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

<h3 id="get-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowExecutionResponse](#schemaworkflowexecutionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Run History

<a id="opIdget_run_history_v1_workflows_runs__run_id__history_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/runs/497f6eca-6276-4993-bfeb-53cbbbba6f08/history \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/runs/{run_id}/history`

<h3 id="get-run-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|run_id|path|string(uuid)|true|none|
|decode_payloads|query|boolean|false|none|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-run-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaworkflowsschedules">beta.workflows.schedules</h1>

Create and manage workflow schedules.

## Get Schedules

<a id="opIdget_schedules_v1_workflows_schedules_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/schedules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/schedules`

> Example responses

> 200 Response

```json
{
  "schedules": [
    {
      "input": null,
      "calendars": [
        {
          "second": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "minute": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "hour": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "day_of_month": [
            {
              "start": 1,
              "end": 31,
              "step": 0
            }
          ],
          "month": [
            {
              "start": 1,
              "end": 12,
              "step": 0
            }
          ],
          "year": [],
          "day_of_week": [
            {
              "start": 0,
              "end": 6,
              "step": 0
            }
          ],
          "comment": "string"
        }
      ],
      "intervals": [
        {
          "every": "string",
          "offset": "string"
        }
      ],
      "cron_expressions": [
        "string"
      ],
      "skip": [
        {
          "second": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "minute": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "hour": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "day_of_month": [
            {
              "start": 1,
              "end": 31,
              "step": 0
            }
          ],
          "month": [
            {
              "start": 1,
              "end": 12,
              "step": 0
            }
          ],
          "year": [],
          "day_of_week": [
            {
              "start": 0,
              "end": 6,
              "step": 0
            }
          ],
          "comment": "string"
        }
      ],
      "start_at": "1970-01-01T00:00:00Z",
      "end_at": "1970-01-01T00:00:00Z",
      "jitter": "string",
      "time_zone_name": "string",
      "policy": {
        "catchup_window_seconds": 31536000,
        "overlap": 1,
        "pause_on_failure": false
      },
      "schedule_id": "string"
    }
  ]
}
```

<h3 id="get-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowScheduleListResponse](#schemaworkflowschedulelistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Schedule Workflow

<a id="opIdschedule_workflow_v1_workflows_schedules_post"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/schedules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "schedule": {
      "input": null,
      "calendars": [
        {
          "second": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "minute": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "hour": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "day_of_month": [
            {
              "start": 1,
              "end": 31,
              "step": 0
            }
          ],
          "month": [
            {
              "start": 1,
              "end": 12,
              "step": 0
            }
          ],
          "year": [],
          "day_of_week": [
            {
              "start": 0,
              "end": 6,
              "step": 0
            }
          ],
          "comment": "string"
        }
      ],
      "intervals": [
        {
          "every": "string",
          "offset": "string"
        }
      ],
      "cron_expressions": [
        "string"
      ],
      "skip": [
        {
          "second": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "minute": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "hour": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "day_of_month": [
            {
              "start": 1,
              "end": 31,
              "step": 0
            }
          ],
          "month": [
            {
              "start": 1,
              "end": 12,
              "step": 0
            }
          ],
          "year": [],
          "day_of_week": [
            {
              "start": 0,
              "end": 6,
              "step": 0
            }
          ],
          "comment": "string"
        }
      ],
      "start_at": "1970-01-01T00:00:00Z",
      "end_at": "1970-01-01T00:00:00Z",
      "jitter": "string",
      "time_zone_name": "string",
      "policy": {
        "catchup_window_seconds": 31536000,
        "overlap": 1,
        "pause_on_failure": false
      },
      "schedule_id": "string"
    },
    "workflow_registration_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workflow_version_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workflow_identifier": "string",
    "workflow_task_queue": "string",
    "schedule_id": "string",
    "deployment_name": "string"
  }'
```

`POST /v1/workflows/schedules`

> Body parameter

```json
{
  "schedule": {
    "input": null,
    "calendars": [
      {
        "second": [
          {
            "start": 0,
            "end": 0,
            "step": 0
          }
        ],
        "minute": [
          {
            "start": 0,
            "end": 0,
            "step": 0
          }
        ],
        "hour": [
          {
            "start": 0,
            "end": 0,
            "step": 0
          }
        ],
        "day_of_month": [
          {
            "start": 1,
            "end": 31,
            "step": 0
          }
        ],
        "month": [
          {
            "start": 1,
            "end": 12,
            "step": 0
          }
        ],
        "year": [],
        "day_of_week": [
          {
            "start": 0,
            "end": 6,
            "step": 0
          }
        ],
        "comment": "string"
      }
    ],
    "intervals": [
      {
        "every": "string",
        "offset": "string"
      }
    ],
    "cron_expressions": [
      "string"
    ],
    "skip": [
      {
        "second": [
          {
            "start": 0,
            "end": 0,
            "step": 0
          }
        ],
        "minute": [
          {
            "start": 0,
            "end": 0,
            "step": 0
          }
        ],
        "hour": [
          {
            "start": 0,
            "end": 0,
            "step": 0
          }
        ],
        "day_of_month": [
          {
            "start": 1,
            "end": 31,
            "step": 0
          }
        ],
        "month": [
          {
            "start": 1,
            "end": 12,
            "step": 0
          }
        ],
        "year": [],
        "day_of_week": [
          {
            "start": 0,
            "end": 6,
            "step": 0
          }
        ],
        "comment": "string"
      }
    ],
    "start_at": "1970-01-01T00:00:00Z",
    "end_at": "1970-01-01T00:00:00Z",
    "jitter": "string",
    "time_zone_name": "string",
    "policy": {
      "catchup_window_seconds": 31536000,
      "overlap": 1,
      "pause_on_failure": false
    },
    "schedule_id": "string"
  },
  "workflow_registration_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workflow_version_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workflow_identifier": "string",
  "workflow_task_queue": "string",
  "schedule_id": "string",
  "deployment_name": "string"
}
```

<h3 id="schedule-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WorkflowScheduleRequest](#schemaworkflowschedulerequest)|true|none|
|» schedule|body|[ScheduleDefinition](#schemascheduledefinition)|true|The schedule definition|
|» workflow_registration_id|body|string(uuid) \| null|false|The ID of the workflow registration to schedule|
|» » *anyOf*|body|string(uuid)|false|none|
|» » *anyOf*|body|null|false|none|
|» workflow_version_id|body|string(uuid) \| null|false|Deprecated: use workflow_registration_id|
|» » *anyOf*|body|string(uuid)|false|none|
|» » *anyOf*|body|null|false|none|
|» workflow_identifier|body|string \| null|false|The name or ID of the workflow to schedule|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» workflow_task_queue|body|string \| null|false|**Deprecated.** Deprecated. Use deployment_name instead.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» schedule_id|body|string \| null|false|Allows you to specify a custom schedule ID. If not provided, a random ID will be generated.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» deployment_name|body|string \| null|false|Name of the deployment to route this schedule to|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 201 Response

```json
{
  "schedule_id": "string"
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

<h3 id="schedule-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[WorkflowScheduleResponse](#schemaworkflowscheduleresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Unschedule Workflow

<a id="opIdunschedule_workflow_v1_workflows_schedules__schedule_id__delete"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/schedules/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/workflows/schedules/{schedule_id}`

<h3 id="unschedule-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schedule_id|path|string|true|none|

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

<h3 id="unschedule-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaworkflowsdeployments">beta.workflows.deployments</h1>

List and inspect worker deployments.

## List Deployments

<a id="opIdlist_deployments_v1_workflows_deployments_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/deployments`

<h3 id="list-deployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|active_only|query|boolean|false|none|
|workflow_name|query|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "deployments": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "is_active": true,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
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

<h3 id="list-deployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DeploymentListResponse](#schemadeploymentlistresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Deployment

<a id="opIdget_deployment_v1_workflows_deployments__name__get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/deployments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/deployments/{name}`

<h3 id="get-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "is_active": true,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "workers": [
    {
      "name": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
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

<h3 id="get-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DeploymentDetailResponse](#schemadeploymentdetailresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaworkflowsevents">beta.workflows.events</h1>

Stream and list workflow execution events.

## Get Stream Events

<a id="opIdget_stream_events_v1_workflows_events_stream_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/events/stream \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/events/stream`

<h3 id="get-stream-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|false|none|
|activity_name|query|string|false|none|
|activity_id|query|string|false|none|
|workflow_name|query|string|false|none|
|workflow_exec_id|query|string|false|none|
|root_workflow_exec_id|query|string|false|none|
|parent_workflow_exec_id|query|string|false|none|
|stream|query|string|false|none|
|start_seq|query|integer|false|none|
|metadata_filters|query|object \| null|false|none|
|workflow_event_types|query|[[WorkflowEventType](#schemaworkfloweventtype)] \| null|false|none|
|last-event-id|header|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|activity|
|scope|workflow|
|scope|*|

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

<h3 id="get-stream-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stream of Server-Sent Events (SSE)|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-stream-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|string|false|none|none|
|data|[StreamEventSsePayload](#schemastreameventssepayload)|false|none|none|
|id|string|false|none|none|
|retry|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get Workflow Events

<a id="opIdget_workflow_events_v1_workflows_events_list_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/events/list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/events/list`

<h3 id="get-workflow-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|root_workflow_exec_id|query|string \| null|false|Execution ID of the root workflow that initiated this execution chain.|
|workflow_exec_id|query|string \| null|false|Execution ID of the workflow that emitted this event.|
|workflow_run_id|query|string \| null|false|Run ID of the workflow that emitted this event.|
|limit|query|integer|false|Maximum number of events to return.|
|cursor|query|string \| null|false|Cursor for pagination.|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "event_id": "string",
      "event_timestamp": 0,
      "root_workflow_exec_id": "string",
      "parent_workflow_exec_id": "string",
      "workflow_exec_id": "string",
      "workflow_run_id": "string",
      "workflow_name": "string",
      "event_type": "WORKFLOW_EXECUTION_STARTED",
      "attributes": {
        "task_id": "string",
        "workflow_name": "string",
        "input": {
          "type": "json",
          "value": null
        }
      }
    }
  ],
  "next_cursor": "string"
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

<h3 id="get-workflow-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListWorkflowEventResponse](#schemalistworkfloweventresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaworkflowsmetrics">beta.workflows.metrics</h1>

Get performance metrics for workflows.

## Get Workflow Metrics

<a id="opIdget_workflow_metrics_v1_workflows__workflow_name__metrics_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/string/metrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/{workflow_name}/metrics`

Get comprehensive metrics for a specific workflow.

Args:
    workflow_name: The name of the workflow type to get metrics for
    start_time: Optional start time filter (ISO 8601 format)
    end_time: Optional end time filter (ISO 8601 format)

Returns:
    WorkflowMetrics: Dictionary containing metrics:
        - execution_count: Total number of executions
        - success_count: Number of successful executions
        - error_count: Number of failed/terminated executions
        - average_latency_ms: Average execution duration in milliseconds
        - retry_rate: Proportion of workflows with retries
        - latency_over_time: Time-series data of execution durations

Example:
    GET /v1/workflows/MyWorkflow/metrics
    GET /v1/workflows/MyWorkflow/metrics?start_time=2025-01-01T00:00:00Z
    GET /v1/workflows/MyWorkflow/metrics?start_time=2025-01-01T00:00:00Z&end_time=2025-12-31T23:59:59Z

<h3 id="get-workflow-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_name|path|string|true|none|
|start_time|query|string(date-time) \| null|false|Filter workflows started after this time (ISO 8601)|
|end_time|query|string(date-time) \| null|false|Filter workflows started before this time (ISO 8601)|

> Example responses

> 200 Response

```json
{
  "execution_count": {
    "value": 0
  },
  "success_count": {
    "value": 0
  },
  "error_count": {
    "value": 0
  },
  "average_latency_ms": {
    "value": 0
  },
  "latency_over_time": {
    "value": [
      [
        0,
        0
      ]
    ]
  },
  "retry_rate": {
    "value": 0
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

<h3 id="get-workflow-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkflowMetrics](#schemaworkflowmetrics)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaworkflowsworkers">beta.workflows.workers</h1>

Worker connection info.

## Get Worker Info

<a id="opIdget_worker_info_v1_workflows_workers_whoami_get"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/workflows/workers/whoami \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflows/workers/whoami`

> Example responses

> 200 Response

```json
{
  "scheduler_url": "string",
  "namespace": "string",
  "tls": false
}
```

<h3 id="get-worker-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[WorkerInfo](#schemaworkerinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

<h1 id="mistral-ai-api-betaconnectors">beta.connectors</h1>

(beta) Connectors

## List all connectors.

<a id="opIdconnector_list_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/connectors`

List all your custom connectors with keyset pagination and filters.

<h3 id="list-all-connectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query_filters|query|[ConnectorsQueryFilters](#schemaconnectorsqueryfilters)|false|none|
|cursor|query|string \| null|false|none|
|page_size|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "description": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "modified_at": "1970-01-01T00:00:00Z",
      "server": "string",
      "auth_type": "string",
      "tools": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "system_prompt": "string",
          "locale": {
            "name": {
              "property1": "string",
              "property2": "string"
            },
            "description": {
              "property1": "string",
              "property2": "string"
            },
            "usage_sentence": {
              "property1": "string",
              "property2": "string"
            }
          },
          "jsonschema": {},
          "execution_config": {
            "type": "string"
          },
          "visibility": "shared_global",
          "created_at": "1970-01-01T00:00:00Z",
          "modified_at": "1970-01-01T00:00:00Z",
          "active": true
        }
      ]
    }
  ],
  "pagination": {
    "next_cursor": "string",
    "page_size": 0
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

<h3 id="list-all-connectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PaginatedConnectors](#schemapaginatedconnectors)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create a new connector.

<a id="opIdconnector_create_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "icon_url": "string",
    "visibility": "shared_global",
    "server": "http://example.com",
    "headers": {},
    "auth_data": {
      "client_id": "string",
      "client_secret": "string"
    },
    "system_prompt": "string"
  }'
```

`POST /v1/connectors`

Create a new MCP connector. You can customize its visibility, url and auth type.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "icon_url": "string",
  "visibility": "shared_global",
  "server": "http://example.com",
  "headers": {},
  "auth_data": {
    "client_id": "string",
    "client_secret": "string"
  },
  "system_prompt": "string"
}
```

<h3 id="create-a-new-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectorMCPCreate](#schemaconnectormcpcreate)|true|none|
|» name|body|string|true|The name of the connector. Should be 64 char length maximum, alphanumeric, only underscores/dashes.|
|» description|body|string|true|The description of the connector.|
|» icon_url|body|string \| null|false|The optional url of the icon you want to associate to the connector.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» visibility|body|[ResourceVisibility](#schemaresourcevisibility)|false|Visibility of the connector. Use 'shared_workspace' for workspace scoped connectors, or 'private' for private connectors.|
|» server|body|string(uri)|true|The url of the MCP server.|
|» headers|body|object \| null|false|Optional organization-level headers to be sent with the request to the mcp server.|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» auth_data|body|[AuthData](#schemaauthdata) \| null|false|Optional additional authentication data for the connector.|
|» » *anyOf*|body|[AuthData](#schemaauthdata)|false|none|
|» » *anyOf*|body|null|false|none|
|» system_prompt|body|string \| null|false|Optional system prompt for the connector.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» visibility|shared_global|
|» visibility|shared_org|
|» visibility|shared_workspace|
|» visibility|private|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "description": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "modified_at": "1970-01-01T00:00:00Z",
  "server": "string",
  "auth_type": "string",
  "tools": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "system_prompt": "string",
      "locale": {
        "name": {
          "property1": "string",
          "property2": "string"
        },
        "description": {
          "property1": "string",
          "property2": "string"
        },
        "usage_sentence": {
          "property1": "string",
          "property2": "string"
        }
      },
      "jsonschema": {},
      "execution_config": {
        "type": "string"
      },
      "visibility": "shared_global",
      "created_at": "1970-01-01T00:00:00Z",
      "modified_at": "1970-01-01T00:00:00Z",
      "active": true
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

<h3 id="create-a-new-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[Connector](#schemaconnector)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get the auth URL for a connector.

<a id="opIdconnector_get_auth_url_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors/string/auth_url \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/connectors/{connector_id_or_name}/auth_url`

Get the OAuth2 authorization URL for a connector to initiate user authentication.

<h3 id="get-the-auth-url-for-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_return_url|query|string \| null|false|none|
|credentials_name|query|string \| null|false|none|
|connector_id_or_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "auth_url": "string",
  "ttl": 0
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

<h3 id="get-the-auth-url-for-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AuthUrlResponse](#schemaauthurlresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Call Connector Tool

<a id="opIdconnector_call_tool_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors/string/tools/string/call \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "arguments": {}
  }'
```

`POST /v1/connectors/{connector_id_or_name}/tools/{tool_name}/call`

Call a tool on an MCP connector.

> Body parameter

```json
{
  "arguments": {}
}
```

<h3 id="call-connector-tool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tool_name|path|string|true|none|
|credentials_name|query|string \| null|false|none|
|connector_id_or_name|path|string|true|none|
|body|body|[MCPToolCallRequest](#schemamcptoolcallrequest)|true|none|
|» arguments|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "type": "text",
      "text": "string",
      "annotations": {
        "audience": [
          "user"
        ],
        "priority": 0
      },
      "_meta": {}
    }
  ],
  "metadata": {
    "mcp_meta": {
      "isError": false,
      "structuredContent": {},
      "_meta": {}
    }
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

<h3 id="call-connector-tool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[MCPToolCallResponse](#schemamcptoolcallresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## List tools for a connector.

<a id="opIdconnector_list_tools_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors/string/tools \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/connectors/{connector_id_or_name}/tools`

List all tools available for an MCP connector.

<h3 id="list-tools-for-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|page_size|query|integer|false|none|
|refresh|query|boolean|false|none|
|pretty|query|boolean|false|Return a simplified payload with only name, description, annotations, and a compact inputSchema.|
|credentials_name|query|string \| null|false|none|
|connector_id_or_name|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "system_prompt": "string",
    "locale": {
      "name": {
        "property1": "string",
        "property2": "string"
      },
      "description": {
        "property1": "string",
        "property2": "string"
      },
      "usage_sentence": {
        "property1": "string",
        "property2": "string"
      }
    },
    "jsonschema": {},
    "execution_config": {
      "type": "string"
    },
    "visibility": "shared_global",
    "created_at": "1970-01-01T00:00:00Z",
    "modified_at": "1970-01-01T00:00:00Z",
    "active": true
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

<h3 id="list-tools-for-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="list-tools-for-a-connector-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[[integrations__schemas__api__tool__Tool](#schemaintegrations__schemas__api__tool__tool)]|false|none|none|
|*anonymous*|[[integrations__schemas__api__tool__Tool](#schemaintegrations__schemas__api__tool__tool)]|false|none|none|
|*anyOf*|[[MCPTool](#schemamcptool)]|false|none|none|
|*anonymous*|[[MCPTool](#schemamcptool)]|false|none|none|
|*anyOf*|[object]|false|none|none|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get authentication methods for a connector.

<a id="opIdconnector_get_authentication_methods_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors/string/authentication_methods \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/connectors/{connector_id_or_name}/authentication_methods`

Get the authentication schema for a connector. Returns the list of supported authentication methods and their required headers.

<h3 id="get-authentication-methods-for-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connector_id_or_name|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "method_type": "oauth2",
    "headers": [
      {
        "name": "string",
        "is_required": true,
        "is_secret": true
      }
    ]
  }
]
```

<h3 id="get-authentication-methods-for-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<h3 id="get-authentication-methods-for-a-connector-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PublicAuthenticationMethod](#schemapublicauthenticationmethod)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## List organization credentials for a connector.

<a id="opIdconnector_list_organization_credentials_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors/string/organization/credentials \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/connectors/{connector_id_or_name}/organization/credentials`

List all credentials configured at the organization level for a given connector.

<h3 id="list-organization-credentials-for-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|auth_type|query|[OutboundAuthenticationType](#schemaoutboundauthenticationtype) \| null|false|none|
|fetch_default|query|boolean|false|none|
|connector_id_or_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "credentials": [
    {
      "name": "string",
      "authentication_type": "oauth2",
      "is_default": false
    }
  ],
  "connector_preset_credentials_for_auth": []
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

<h3 id="list-organization-credentials-for-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[CredentialsResponse](#schemacredentialsresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create or update organization credentials for a connector.

<a id="opIdconnector_create_or_update_organization_credentials_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors/string/organization/credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "is_default": true,
    "credentials": {
      "oauth": {
        "access_token": "string",
        "token_type": "Bearer",
        "expires_in": 0,
        "scope": "string",
        "refresh_token": "string",
        "expires_at": "1970-01-01T00:00:00Z"
      },
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "bearer_token": "string"
    }
  }'
```

`POST /v1/connectors/{connector_id_or_name}/organization/credentials`

Create or update credentials at the organization level for a given connector.

> Body parameter

```json
{
  "name": "string",
  "is_default": true,
  "credentials": {
    "oauth": {
      "access_token": "string",
      "token_type": "Bearer",
      "expires_in": 0,
      "scope": "string",
      "refresh_token": "string",
      "expires_at": "1970-01-01T00:00:00Z"
    },
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "bearer_token": "string"
  }
}
```

<h3 id="create-or-update-organization-credentials-for-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connector_id_or_name|path|string|true|none|
|body|body|[CredentialsCreateOrUpdate](#schemacredentialscreateorupdate)|true|none|
|» name|body|string|true|Name of the credentials. Use this name to access or modify your credentials.|
|» is_default|body|boolean \| null|false|Controls whether this credential is the default for its auth method. On creation: if no credential exists yet for this auth method, the credential is automatically set as default when is_default is true or omitted; setting is_default to false is rejected because a default must exist. If other credentials already exist, setting is_default to true promotes this credential (demoting the previous default); false or omitted creates it as non-default. On update: true promotes this credential, false is rejected if it is currently the default (promote another credential first), omitted leaves the default status unchanged.|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» credentials|body|[ConnectionCredentials](#schemaconnectioncredentials) \| null|false|The credential data (headers, bearer_token).|
|» » *anyOf*|body|[ConnectionCredentials](#schemaconnectioncredentials)|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
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

<h3 id="create-or-update-organization-credentials-for-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[MessageResponse](#schemamessageresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## List workspace credentials for a connector.

<a id="opIdconnector_list_workspace_credentials_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors/string/workspace/credentials \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/connectors/{connector_id_or_name}/workspace/credentials`

List all credentials configured at the workspace level for a given connector.

<h3 id="list-workspace-credentials-for-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|auth_type|query|[OutboundAuthenticationType](#schemaoutboundauthenticationtype) \| null|false|none|
|fetch_default|query|boolean|false|none|
|connector_id_or_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "credentials": [
    {
      "name": "string",
      "authentication_type": "oauth2",
      "is_default": false
    }
  ],
  "connector_preset_credentials_for_auth": []
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

<h3 id="list-workspace-credentials-for-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[CredentialsResponse](#schemacredentialsresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create or update workspace credentials for a connector.

<a id="opIdconnector_create_or_update_workspace_credentials_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors/string/workspace/credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "is_default": true,
    "credentials": {
      "oauth": {
        "access_token": "string",
        "token_type": "Bearer",
        "expires_in": 0,
        "scope": "string",
        "refresh_token": "string",
        "expires_at": "1970-01-01T00:00:00Z"
      },
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "bearer_token": "string"
    }
  }'
```

`POST /v1/connectors/{connector_id_or_name}/workspace/credentials`

Create or update credentials at the workspace level for a given connector.

> Body parameter

```json
{
  "name": "string",
  "is_default": true,
  "credentials": {
    "oauth": {
      "access_token": "string",
      "token_type": "Bearer",
      "expires_in": 0,
      "scope": "string",
      "refresh_token": "string",
      "expires_at": "1970-01-01T00:00:00Z"
    },
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "bearer_token": "string"
  }
}
```

<h3 id="create-or-update-workspace-credentials-for-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connector_id_or_name|path|string|true|none|
|body|body|[CredentialsCreateOrUpdate](#schemacredentialscreateorupdate)|true|none|
|» name|body|string|true|Name of the credentials. Use this name to access or modify your credentials.|
|» is_default|body|boolean \| null|false|Controls whether this credential is the default for its auth method. On creation: if no credential exists yet for this auth method, the credential is automatically set as default when is_default is true or omitted; setting is_default to false is rejected because a default must exist. If other credentials already exist, setting is_default to true promotes this credential (demoting the previous default); false or omitted creates it as non-default. On update: true promotes this credential, false is rejected if it is currently the default (promote another credential first), omitted leaves the default status unchanged.|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» credentials|body|[ConnectionCredentials](#schemaconnectioncredentials) \| null|false|The credential data (headers, bearer_token).|
|» » *anyOf*|body|[ConnectionCredentials](#schemaconnectioncredentials)|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
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

<h3 id="create-or-update-workspace-credentials-for-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[MessageResponse](#schemamessageresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## List user credentials for a connector.

<a id="opIdconnector_list_user_credentials_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors/string/user/credentials \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/connectors/{connector_id_or_name}/user/credentials`

List all credentials configured at the user level for a given connector.

<h3 id="list-user-credentials-for-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|auth_type|query|[OutboundAuthenticationType](#schemaoutboundauthenticationtype) \| null|false|none|
|fetch_default|query|boolean|false|none|
|connector_id_or_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "credentials": [
    {
      "name": "string",
      "authentication_type": "oauth2",
      "is_default": false
    }
  ],
  "connector_preset_credentials_for_auth": []
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

<h3 id="list-user-credentials-for-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[CredentialsResponse](#schemacredentialsresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Create or update user credentials for a connector.

<a id="opIdconnector_create_or_update_user_credentials_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors/string/user/credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "is_default": true,
    "credentials": {
      "oauth": {
        "access_token": "string",
        "token_type": "Bearer",
        "expires_in": 0,
        "scope": "string",
        "refresh_token": "string",
        "expires_at": "1970-01-01T00:00:00Z"
      },
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "bearer_token": "string"
    }
  }'
```

`POST /v1/connectors/{connector_id_or_name}/user/credentials`

Create or update credentials at the user level for a given connector.

> Body parameter

```json
{
  "name": "string",
  "is_default": true,
  "credentials": {
    "oauth": {
      "access_token": "string",
      "token_type": "Bearer",
      "expires_in": 0,
      "scope": "string",
      "refresh_token": "string",
      "expires_at": "1970-01-01T00:00:00Z"
    },
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "bearer_token": "string"
  }
}
```

<h3 id="create-or-update-user-credentials-for-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connector_id_or_name|path|string|true|none|
|body|body|[CredentialsCreateOrUpdate](#schemacredentialscreateorupdate)|true|none|
|» name|body|string|true|Name of the credentials. Use this name to access or modify your credentials.|
|» is_default|body|boolean \| null|false|Controls whether this credential is the default for its auth method. On creation: if no credential exists yet for this auth method, the credential is automatically set as default when is_default is true or omitted; setting is_default to false is rejected because a default must exist. If other credentials already exist, setting is_default to true promotes this credential (demoting the previous default); false or omitted creates it as non-default. On update: true promotes this credential, false is rejected if it is currently the default (promote another credential first), omitted leaves the default status unchanged.|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» credentials|body|[ConnectionCredentials](#schemaconnectioncredentials) \| null|false|The credential data (headers, bearer_token).|
|» » *anyOf*|body|[ConnectionCredentials](#schemaconnectioncredentials)|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
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

<h3 id="create-or-update-user-credentials-for-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[MessageResponse](#schemamessageresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete organization credentials for a connector.

<a id="opIdconnector_delete_organization_credentials_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors/string/organization/credentials/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/connectors/{connector_id_or_name}/organization/credentials/{credentials_name}`

Delete credentials at the organization level for a given connector.

<h3 id="delete-organization-credentials-for-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|credentials_name|path|string|true|none|
|connector_id_or_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
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

<h3 id="delete-organization-credentials-for-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[MessageResponse](#schemamessageresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete workspace credentials for a connector.

<a id="opIdconnector_delete_workspace_credentials_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors/string/workspace/credentials/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/connectors/{connector_id_or_name}/workspace/credentials/{credentials_name}`

Delete credentials at the workspace level for a given connector.

<h3 id="delete-workspace-credentials-for-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|credentials_name|path|string|true|none|
|connector_id_or_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
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

<h3 id="delete-workspace-credentials-for-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[MessageResponse](#schemamessageresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete user credentials for a connector.

<a id="opIdconnector_delete_user_credentials_v1"></a>

> Code samples

```bash
curl https://api.mistral.ai/v1/connectors/string/user/credentials/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/connectors/{connector_id_or_name}/user/credentials/{credentials_name}`

Delete credentials at the user level for a given connector.

<h3 id="delete-user-credentials-for-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|credentials_name|path|string|true|none|
|connector_id_or_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
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

<h3 id="delete-user-credentials-for-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[MessageResponse](#schemamessageresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Get a connector.

<a id="opIdconnector_get_v1"></a>

> Code samples

```bash
curl 'https://api.mistral.ai/v1/connectors/string#idOrName' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/connectors/{connector_id_or_name}#idOrName`

Get a connector by its ID or name.

<h3 id="get-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fetch_customer_data|query|boolean|false|Fetch the customer data associated with the connector (e.g. customer secrets / config).|
|fetch_connection_secrets|query|boolean|false|Fetch the general connection secrets associated with the connector.|
|connector_id_or_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "description": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "modified_at": "1970-01-01T00:00:00Z",
  "server": "string",
  "auth_type": "string",
  "tools": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "system_prompt": "string",
      "locale": {
        "name": {
          "property1": "string",
          "property2": "string"
        },
        "description": {
          "property1": "string",
          "property2": "string"
        },
        "usage_sentence": {
          "property1": "string",
          "property2": "string"
        }
      },
      "jsonschema": {},
      "execution_config": {
        "type": "string"
      },
      "visibility": "shared_global",
      "created_at": "1970-01-01T00:00:00Z",
      "modified_at": "1970-01-01T00:00:00Z",
      "active": true
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

<h3 id="get-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Connector](#schemaconnector)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Delete a connector.

<a id="opIdconnector_delete_v1"></a>

> Code samples

```bash
curl 'https://api.mistral.ai/v1/connectors/497f6eca-6276-4993-bfeb-53cbbbba6f08#id' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/connectors/{connector_id}#id`

Delete a connector by its ID.

<h3 id="delete-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connector_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
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

<h3 id="delete-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[MessageResponse](#schemamessageresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

## Update a connector.

<a id="opIdconnector_update_v1"></a>

> Code samples

```bash
curl 'https://api.mistral.ai/v1/connectors/497f6eca-6276-4993-bfeb-53cbbbba6f08#id' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "icon_url": "string",
    "system_prompt": "string",
    "connection_config": {},
    "connection_secrets": {},
    "server": "http://example.com",
    "headers": {},
    "auth_data": {
      "client_id": "string",
      "client_secret": "string"
    }
  }'
```

`PATCH /v1/connectors/{connector_id}#id`

Update a connector by its ID.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "icon_url": "string",
  "system_prompt": "string",
  "connection_config": {},
  "connection_secrets": {},
  "server": "http://example.com",
  "headers": {},
  "auth_data": {
    "client_id": "string",
    "client_secret": "string"
  }
}
```

<h3 id="update-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connector_id|path|string(uuid)|true|none|
|body|body|[ConnectorMCPUpdate](#schemaconnectormcpupdate)|true|none|
|» name|body|string \| null|false|The name of the connector.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|The description of the connector.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» icon_url|body|string \| null|false|The optional url of the icon you want to associate to the connector.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» system_prompt|body|string \| null|false|Optional system prompt for the connector.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» connection_config|body|object \| null|false|Optional new connection config.|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» connection_secrets|body|object \| null|false|Optional new connection secrets|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» server|body|string(uri) \| null|false|New server url for your mcp connector.|
|» » *anyOf*|body|string(uri)|false|none|
|» » *anyOf*|body|null|false|none|
|» headers|body|object \| null|false|New headers for your mcp connector.|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» auth_data|body|[AuthData](#schemaauthdata) \| null|false|New authentication data for your mcp connector.|
|» » *anyOf*|body|[AuthData](#schemaauthdata)|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "description": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "modified_at": "1970-01-01T00:00:00Z",
  "server": "string",
  "auth_type": "string",
  "tools": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "system_prompt": "string",
      "locale": {
        "name": {
          "property1": "string",
          "property2": "string"
        },
        "description": {
          "property1": "string",
          "property2": "string"
        },
        "usage_sentence": {
          "property1": "string",
          "property2": "string"
        }
      },
      "jsonschema": {},
      "execution_config": {
        "type": "string"
      },
      "visibility": "shared_global",
      "created_at": "1970-01-01T00:00:00Z",
      "modified_at": "1970-01-01T00:00:00Z",
      "active": true
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

<h3 id="update-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Connector](#schemaconnector)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKey
</aside>

# Schemas

<h2 id="tocS_BaseModelCard">BaseModelCard</h2>
<!-- backwards compatibility -->
<a id="schemabasemodelcard"></a>
<a id="schema_BaseModelCard"></a>
<a id="tocSbasemodelcard"></a>
<a id="tocsbasemodelcard"></a>

```json
{
  "id": "string",
  "object": "model",
  "created": 0,
  "owned_by": "mistralai",
  "capabilities": {
    "completion_chat": false,
    "function_calling": false,
    "completion_fim": false,
    "fine_tuning": false,
    "vision": false,
    "ocr": false,
    "classification": false,
    "moderation": false,
    "audio": false,
    "audio_transcription": false
  },
  "name": "string",
  "description": "string",
  "max_context_length": 32768,
  "aliases": [],
  "deprecation": "1970-01-01T00:00:00Z",
  "deprecation_replacement_model": "string",
  "default_model_temperature": 0,
  "type": "base"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|object|string|false|none|none|
|created|integer|false|none|none|
|owned_by|string|false|none|none|
|capabilities|[ModelCapabilities](#schemamodelcapabilities)|true|none|none|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|
|max_context_length|integer|false|none|none|
|aliases|[string]|false|none|none|
|deprecation|string(date-time) \| null|false|none|none|
|deprecation_replacement_model|string \| null|false|none|none|
|default_model_temperature|number \| null|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_DeleteModelOut">DeleteModelOut</h2>
<!-- backwards compatibility -->
<a id="schemadeletemodelout"></a>
<a id="schema_DeleteModelOut"></a>
<a id="tocSdeletemodelout"></a>
<a id="tocsdeletemodelout"></a>

```json
{
  "id": "ft:open-mistral-7b:587a6b29:20240514:7e773925",
  "object": "model",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the deleted model.|
|object|string|false|none|The object type that was deleted|
|deleted|boolean|false|none|The deletion status|

<h2 id="tocS_FTModelCard">FTModelCard</h2>
<!-- backwards compatibility -->
<a id="schemaftmodelcard"></a>
<a id="schema_FTModelCard"></a>
<a id="tocSftmodelcard"></a>
<a id="tocsftmodelcard"></a>

```json
{
  "id": "string",
  "object": "model",
  "created": 0,
  "owned_by": "mistralai",
  "capabilities": {
    "completion_chat": false,
    "function_calling": false,
    "completion_fim": false,
    "fine_tuning": false,
    "vision": false,
    "ocr": false,
    "classification": false,
    "moderation": false,
    "audio": false,
    "audio_transcription": false
  },
  "name": "string",
  "description": "string",
  "max_context_length": 32768,
  "aliases": [],
  "deprecation": "1970-01-01T00:00:00Z",
  "deprecation_replacement_model": "string",
  "default_model_temperature": 0,
  "type": "fine-tuned",
  "job": "string",
  "root": "string",
  "archived": false
}
```

Extra fields for fine-tuned models.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|object|string|false|none|none|
|created|integer|false|none|none|
|owned_by|string|false|none|none|
|capabilities|[ModelCapabilities](#schemamodelcapabilities)|true|none|none|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|
|max_context_length|integer|false|none|none|
|aliases|[string]|false|none|none|
|deprecation|string(date-time) \| null|false|none|none|
|deprecation_replacement_model|string \| null|false|none|none|
|default_model_temperature|number \| null|false|none|none|
|type|string|false|none|none|
|job|string|true|none|none|
|root|string|true|none|none|
|archived|boolean|false|none|none|

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

<h2 id="tocS_ModelCapabilities">ModelCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemamodelcapabilities"></a>
<a id="schema_ModelCapabilities"></a>
<a id="tocSmodelcapabilities"></a>
<a id="tocsmodelcapabilities"></a>

```json
{
  "completion_chat": false,
  "function_calling": false,
  "completion_fim": false,
  "fine_tuning": false,
  "vision": false,
  "ocr": false,
  "classification": false,
  "moderation": false,
  "audio": false,
  "audio_transcription": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion_chat|boolean|false|none|none|
|function_calling|boolean|false|none|none|
|completion_fim|boolean|false|none|none|
|fine_tuning|boolean|false|none|none|
|vision|boolean|false|none|none|
|ocr|boolean|false|none|none|
|classification|boolean|false|none|none|
|moderation|boolean|false|none|none|
|audio|boolean|false|none|none|
|audio_transcription|boolean|false|none|none|

<h2 id="tocS_ModelList">ModelList</h2>
<!-- backwards compatibility -->
<a id="schemamodellist"></a>
<a id="schema_ModelList"></a>
<a id="tocSmodellist"></a>
<a id="tocsmodellist"></a>

```json
{
  "object": "list",
  "data": [
    {
      "id": "string",
      "object": "model",
      "created": 0,
      "owned_by": "mistralai",
      "capabilities": {
        "completion_chat": false,
        "function_calling": false,
        "completion_fim": false,
        "fine_tuning": false,
        "vision": false,
        "ocr": false,
        "classification": false,
        "moderation": false,
        "audio": false,
        "audio_transcription": false
      },
      "name": "string",
      "description": "string",
      "max_context_length": 32768,
      "aliases": [],
      "deprecation": "1970-01-01T00:00:00Z",
      "deprecation_replacement_model": "string",
      "default_model_temperature": 0,
      "type": "base"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|data|[[BaseModelCard](#schemabasemodelcard) \| [FTModelCard](#schemaftmodelcard)]|false|none|none|

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

<h2 id="tocS_APIKeyAuth">APIKeyAuth</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyauth"></a>
<a id="schema_APIKeyAuth"></a>
<a id="tocSapikeyauth"></a>
<a id="tocsapikeyauth"></a>

```json
{
  "type": "api-key",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|api-key|

<h2 id="tocS_Agent">Agent</h2>
<!-- backwards compatibility -->
<a id="schemaagent"></a>
<a id="schema_Agent"></a>
<a id="tocSagent"></a>
<a id="tocsagent"></a>

```json
{
  "instructions": "string",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "model": "string",
  "name": "string",
  "description": "string",
  "handoffs": [
    "string"
  ],
  "metadata": {},
  "object": "agent",
  "id": "string",
  "version": 0,
  "versions": [
    0
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deployment_chat": true,
  "source": "string",
  "version_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instructions|string \| null|false|none|Instruction prompt the model will follow during the conversation.|
|tools|[[FunctionTool](#schemafunctiontool) \| [WebSearchTool](#schemawebsearchtool) \| [WebSearchPremiumTool](#schemawebsearchpremiumtool) \| [CodeInterpreterTool](#schemacodeinterpretertool) \| [ImageGenerationTool](#schemaimagegenerationtool) \| [DocumentLibraryTool](#schemadocumentlibrarytool) \| [CustomConnector](#schemacustomconnector)]|false|none|List of tools which are available to the model during the conversation.|
|completion_args|[CompletionArgs](#schemacompletionargs)|false|none|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|guardrails|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|none|
|model|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|handoffs|[string] \| null|false|none|none|
|metadata|[MetadataDict](#schemametadatadict) \| null|false|none|none|
|object|string|false|none|none|
|id|string|true|none|none|
|version|integer|true|none|none|
|versions|[integer]|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|deployment_chat|boolean|true|none|none|
|source|string|true|none|none|
|version_message|string \| null|false|none|none|

<h2 id="tocS_AgentListPage">AgentListPage</h2>
<!-- backwards compatibility -->
<a id="schemaagentlistpage"></a>
<a id="schema_AgentListPage"></a>
<a id="tocSagentlistpage"></a>
<a id="tocsagentlistpage"></a>

```json
{
  "object": "list",
  "data": [
    {
      "instructions": "string",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "",
            "strict": false,
            "parameters": {}
          }
        }
      ],
      "completion_args": {
        "stop": "string",
        "presence_penalty": -2,
        "frequency_penalty": -2,
        "temperature": 0,
        "top_p": 0,
        "max_tokens": 0,
        "random_seed": 0,
        "prediction": {
          "type": "content",
          "content": ""
        },
        "response_format": {
          "type": "text"
        },
        "tool_choice": "auto",
        "reasoning_effort": "high"
      },
      "guardrails": [
        {
          "block_on_error": false,
          "moderation_llm_v1": {
            "model_name": "mistral-moderation-2411",
            "custom_category_thresholds": {
              "sexual": 0,
              "hate_and_discrimination": 0,
              "violence_and_threats": 0,
              "dangerous_and_criminal_content": 0,
              "selfharm": 0,
              "health": 0,
              "financial": 0,
              "law": 0,
              "pii": 0
            },
            "ignore_other_categories": false,
            "action": "none"
          },
          "moderation_llm_v2": {
            "model_name": "mistral-moderation-2603",
            "custom_category_thresholds": {
              "sexual": 0,
              "hate_and_discrimination": 0,
              "violence_and_threats": 0,
              "dangerous": 0,
              "criminal": 0,
              "selfharm": 0,
              "health": 0,
              "financial": 0,
              "law": 0,
              "pii": 0,
              "jailbreaking": 0
            },
            "ignore_other_categories": false,
            "action": "none"
          }
        }
      ],
      "model": "string",
      "name": "string",
      "description": "string",
      "handoffs": [
        "string"
      ],
      "metadata": {},
      "object": "agent",
      "id": "string",
      "version": 0,
      "versions": [
        0
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "deployment_chat": true,
      "source": "string",
      "version_message": "string"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|data|[[Agent](#schemaagent)]|true|none|none|
|next_page_token|string \| null|false|none|none|

<h2 id="tocS_AgentAliasResponse">AgentAliasResponse</h2>
<!-- backwards compatibility -->
<a id="schemaagentaliasresponse"></a>
<a id="schema_AgentAliasResponse"></a>
<a id="tocSagentaliasresponse"></a>
<a id="tocsagentaliasresponse"></a>

```json
{
  "alias": "string",
  "version": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|true|none|none|
|version|integer|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|

<h2 id="tocS_AgentConversation">AgentConversation</h2>
<!-- backwards compatibility -->
<a id="schemaagentconversation"></a>
<a id="schema_AgentConversation"></a>
<a id="tocSagentconversation"></a>
<a id="tocsagentconversation"></a>

```json
{
  "name": "string",
  "description": "string",
  "metadata": {},
  "object": "conversation",
  "id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "agent_id": "string",
  "agent_version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Name given to the conversation.|
|description|string \| null|false|none|Description of the what the conversation is about.|
|metadata|[MetadataDict](#schemametadatadict) \| null|false|none|Custom metadata for the conversation.|
|object|string|false|none|none|
|id|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|agent_id|string|true|none|none|
|agent_version|string \| integer \| null|false|none|none|

<h2 id="tocS_AgentCreationRequest">AgentCreationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaagentcreationrequest"></a>
<a id="schema_AgentCreationRequest"></a>
<a id="tocSagentcreationrequest"></a>
<a id="tocsagentcreationrequest"></a>

```json
{
  "instructions": "string",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "model": "string",
  "name": "string",
  "description": "string",
  "handoffs": [
    "string"
  ],
  "metadata": {},
  "version_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instructions|string \| null|false|none|Instruction prompt the model will follow during the conversation.|
|tools|[[FunctionTool](#schemafunctiontool) \| [WebSearchTool](#schemawebsearchtool) \| [WebSearchPremiumTool](#schemawebsearchpremiumtool) \| [CodeInterpreterTool](#schemacodeinterpretertool) \| [ImageGenerationTool](#schemaimagegenerationtool) \| [DocumentLibraryTool](#schemadocumentlibrarytool) \| [CustomConnector](#schemacustomconnector)]|false|none|List of tools which are available to the model during the conversation.|
|completion_args|[CompletionArgs](#schemacompletionargs)|false|none|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|guardrails|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|none|
|model|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|handoffs|[string] \| null|false|none|none|
|metadata|[MetadataDict](#schemametadatadict) \| null|false|none|none|
|version_message|string \| null|false|none|none|

<h2 id="tocS_AgentHandoffEntry">AgentHandoffEntry</h2>
<!-- backwards compatibility -->
<a id="schemaagenthandoffentry"></a>
<a id="schema_AgentHandoffEntry"></a>
<a id="tocSagenthandoffentry"></a>
<a id="tocsagenthandoffentry"></a>

```json
{
  "object": "entry",
  "type": "agent.handoff",
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "previous_agent_id": "string",
  "previous_agent_name": "string",
  "next_agent_id": "string",
  "next_agent_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|completed_at|string(date-time) \| null|false|none|none|
|id|string|false|none|none|
|previous_agent_id|string|true|none|none|
|previous_agent_name|string|true|none|none|
|next_agent_id|string|true|none|none|
|next_agent_name|string|true|none|none|

<h2 id="tocS_AgentUpdateRequest">AgentUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaagentupdaterequest"></a>
<a id="schema_AgentUpdateRequest"></a>
<a id="tocSagentupdaterequest"></a>
<a id="tocsagentupdaterequest"></a>

```json
{
  "instructions": "string",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "model": "string",
  "name": "string",
  "description": "string",
  "handoffs": [
    "string"
  ],
  "deployment_chat": true,
  "metadata": {},
  "version_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instructions|string \| null|false|none|Instruction prompt the model will follow during the conversation.|
|tools|[[FunctionTool](#schemafunctiontool) \| [WebSearchTool](#schemawebsearchtool) \| [WebSearchPremiumTool](#schemawebsearchpremiumtool) \| [CodeInterpreterTool](#schemacodeinterpretertool) \| [ImageGenerationTool](#schemaimagegenerationtool) \| [DocumentLibraryTool](#schemadocumentlibrarytool) \| [CustomConnector](#schemacustomconnector)]|false|none|List of tools which are available to the model during the conversation.|
|completion_args|[CompletionArgs](#schemacompletionargs)|false|none|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|guardrails|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|none|
|model|string \| null|false|none|none|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|
|handoffs|[string] \| null|false|none|none|
|deployment_chat|boolean \| null|false|none|none|
|metadata|[MetadataDict](#schemametadatadict) \| null|false|none|none|
|version_message|string \| null|false|none|none|

<h2 id="tocS_BuiltInConnectors">BuiltInConnectors</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinconnectors"></a>
<a id="schema_BuiltInConnectors"></a>
<a id="tocSbuiltinconnectors"></a>
<a id="tocsbuiltinconnectors"></a>

```json
"web_search"
```

<h2 id="tocS_CodeInterpreterTool">CodeInterpreterTool</h2>
<!-- backwards compatibility -->
<a id="schemacodeinterpretertool"></a>
<a id="schema_CodeInterpreterTool"></a>
<a id="tocScodeinterpretertool"></a>
<a id="tocscodeinterpretertool"></a>

```json
{
  "tool_configuration": {
    "exclude": [
      "string"
    ],
    "include": [
      "string"
    ],
    "requires_confirmation": [
      "string"
    ]
  },
  "type": "code_interpreter"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tool_configuration|[ToolConfiguration](#schematoolconfiguration) \| null|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|code_interpreter|

<h2 id="tocS_CompletionArgs">CompletionArgs</h2>
<!-- backwards compatibility -->
<a id="schemacompletionargs"></a>
<a id="schema_CompletionArgs"></a>
<a id="tocScompletionargs"></a>
<a id="tocscompletionargs"></a>

```json
{
  "stop": "string",
  "presence_penalty": -2,
  "frequency_penalty": -2,
  "temperature": 0,
  "top_p": 0,
  "max_tokens": 0,
  "random_seed": 0,
  "prediction": {
    "type": "content",
    "content": ""
  },
  "response_format": {
    "type": "text"
  },
  "tool_choice": "auto",
  "reasoning_effort": "high"
}
```

White-listed arguments from the completion API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stop|[CompletionArgsStop](#schemacompletionargsstop)|false|none|none|
|presence_penalty|number \| null|false|none|none|
|frequency_penalty|number \| null|false|none|none|
|temperature|number \| null|false|none|none|
|top_p|number \| null|false|none|none|
|max_tokens|integer \| null|false|none|none|
|random_seed|integer \| null|false|none|none|
|prediction|[Prediction](#schemaprediction) \| null|false|none|none|
|response_format|[ResponseFormat](#schemaresponseformat) \| null|false|none|none|
|tool_choice|[ToolChoiceEnum](#schematoolchoiceenum)|false|none|none|
|reasoning_effort|string \| null|false|none|Controls the reasoning effort level for reasoning models. "high" enables comprehensive reasoning traces, "none" disables reasoning effort.|

#### Enumerated Values

|Property|Value|
|---|---|
|tool_choice|auto|
|tool_choice|none|
|tool_choice|any|
|tool_choice|required|

<h2 id="tocS_ConversationAppendRequest">ConversationAppendRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconversationappendrequest"></a>
<a id="schema_ConversationAppendRequest"></a>
<a id="tocSconversationappendrequest"></a>
<a id="tocsconversationappendrequest"></a>

```json
{
  "inputs": "string",
  "stream": false,
  "store": true,
  "handoff_execution": "server",
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "tool_confirmations": [
    {
      "tool_call_id": "string",
      "confirmation": "allow"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[ConversationInputs](#schemaconversationinputs)|false|none|none|
|stream|boolean|false|none|Whether to stream back partial progress. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|store|boolean|false|none|Whether to store the results into our servers or not.|
|handoff_execution|string|false|none|none|
|completion_args|[CompletionArgs](#schemacompletionargs)|false|none|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|tool_confirmations|[[ToolCallConfirmation](#schematoolcallconfirmation)] \| null|false|none|none|
|stream|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|handoff_execution|client|
|handoff_execution|server|
|stream|false|

<h2 id="tocS_ConversationHistory">ConversationHistory</h2>
<!-- backwards compatibility -->
<a id="schemaconversationhistory"></a>
<a id="schema_ConversationHistory"></a>
<a id="tocSconversationhistory"></a>
<a id="tocsconversationhistory"></a>

```json
{
  "object": "conversation.history",
  "conversation_id": "string",
  "entries": [
    {
      "object": "entry",
      "type": "message.input",
      "created_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "role": "assistant",
      "content": "string",
      "prefix": false
    }
  ]
}
```

Retrieve all entries in a conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|conversation_id|string|true|none|none|
|entries|[[MessageInputEntry](#schemamessageinputentry) \| [MessageOutputEntry](#schemamessageoutputentry) \| [FunctionResultEntry](#schemafunctionresultentry) \| [FunctionCallEntry](#schemafunctioncallentry) \| [ToolExecutionEntry](#schematoolexecutionentry) \| [AgentHandoffEntry](#schemaagenthandoffentry)]|true|none|none|

<h2 id="tocS_ConversationMessages">ConversationMessages</h2>
<!-- backwards compatibility -->
<a id="schemaconversationmessages"></a>
<a id="schema_ConversationMessages"></a>
<a id="tocSconversationmessages"></a>
<a id="tocsconversationmessages"></a>

```json
{
  "object": "conversation.messages",
  "conversation_id": "string",
  "messages": [
    {
      "object": "entry",
      "type": "message.input",
      "created_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "role": "assistant",
      "content": "string",
      "prefix": false
    }
  ]
}
```

Similar to the conversation history but only keep the messages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|conversation_id|string|true|none|none|
|messages|[MessageEntries](#schemamessageentries)|true|none|none|

<h2 id="tocS_ConversationRestartRequest">ConversationRestartRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrestartrequest"></a>
<a id="schema_ConversationRestartRequest"></a>
<a id="tocSconversationrestartrequest"></a>
<a id="tocsconversationrestartrequest"></a>

```json
{
  "inputs": "string",
  "stream": false,
  "store": true,
  "handoff_execution": "server",
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "metadata": {},
  "from_entry_id": "string",
  "agent_version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[ConversationInputs](#schemaconversationinputs)|false|none|none|
|stream|boolean|false|none|Whether to stream back partial progress. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|store|boolean|false|none|Whether to store the results into our servers or not.|
|handoff_execution|string|false|none|none|
|completion_args|[CompletionArgs](#schemacompletionargs)|false|none|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|guardrails|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|none|
|metadata|[MetadataDict](#schemametadatadict) \| null|false|none|Custom metadata for the conversation.|
|from_entry_id|string|true|none|none|
|agent_version|string \| integer \| null|false|none|Specific version of the agent to use when restarting. If not provided, uses the current version.|
|stream|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|handoff_execution|client|
|handoff_execution|server|
|stream|false|

<h2 id="tocS_CustomConnector">CustomConnector</h2>
<!-- backwards compatibility -->
<a id="schemacustomconnector"></a>
<a id="schema_CustomConnector"></a>
<a id="tocScustomconnector"></a>
<a id="tocscustomconnector"></a>

```json
{
  "type": "connector",
  "connector_id": "string",
  "authorization": {
    "type": "oauth2-token",
    "value": "string"
  },
  "tool_configuration": {
    "exclude": [
      "string"
    ],
    "include": [
      "string"
    ],
    "requires_confirmation": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|connector_id|string|true|none|none|
|authorization|[OAuth2TokenAuth](#schemaoauth2tokenauth) \| [APIKeyAuth](#schemaapikeyauth) \| null|false|none|none|
|tool_configuration|[ToolConfiguration](#schematoolconfiguration) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|connector|

<h2 id="tocS_DocumentLibraryTool">DocumentLibraryTool</h2>
<!-- backwards compatibility -->
<a id="schemadocumentlibrarytool"></a>
<a id="schema_DocumentLibraryTool"></a>
<a id="tocSdocumentlibrarytool"></a>
<a id="tocsdocumentlibrarytool"></a>

```json
{
  "tool_configuration": {
    "exclude": [
      "string"
    ],
    "include": [
      "string"
    ],
    "requires_confirmation": [
      "string"
    ]
  },
  "type": "document_library",
  "library_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tool_configuration|[ToolConfiguration](#schematoolconfiguration) \| null|false|none|none|
|type|string|false|none|none|
|library_ids|[string]|true|none|Ids of the library in which to search.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|document_library|

<h2 id="tocS_DocumentURLChunk">DocumentURLChunk</h2>
<!-- backwards compatibility -->
<a id="schemadocumenturlchunk"></a>
<a id="schema_DocumentURLChunk"></a>
<a id="tocSdocumenturlchunk"></a>
<a id="tocsdocumenturlchunk"></a>

```json
{
  "type": "document_url",
  "document_url": "string",
  "document_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|document_url|string|true|none|none|
|document_name|string \| null|false|none|The filename of the document|

<h2 id="tocS_Function">Function</h2>
<!-- backwards compatibility -->
<a id="schemafunction"></a>
<a id="schema_Function"></a>
<a id="tocSfunction"></a>
<a id="tocsfunction"></a>

```json
{
  "name": "string",
  "description": "",
  "strict": false,
  "parameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|false|none|none|
|strict|boolean|false|none|none|
|parameters|object|true|none|none|

<h2 id="tocS_FunctionCallEntry">FunctionCallEntry</h2>
<!-- backwards compatibility -->
<a id="schemafunctioncallentry"></a>
<a id="schema_FunctionCallEntry"></a>
<a id="tocSfunctioncallentry"></a>
<a id="tocsfunctioncallentry"></a>

```json
{
  "object": "entry",
  "type": "function.call",
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "agent_id": "string",
  "model": "string",
  "id": "string",
  "tool_call_id": "string",
  "name": "string",
  "arguments": {},
  "confirmation_status": "pending"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|completed_at|string(date-time) \| null|false|none|none|
|agent_id|string \| null|false|none|none|
|model|string \| null|false|none|none|
|id|string|false|none|none|
|tool_call_id|string|true|none|none|
|name|string|true|none|none|
|arguments|[FunctionCallEntryArguments](#schemafunctioncallentryarguments)|true|none|none|
|confirmation_status|string \| null|false|none|none|

<h2 id="tocS_FunctionResultEntry">FunctionResultEntry</h2>
<!-- backwards compatibility -->
<a id="schemafunctionresultentry"></a>
<a id="schema_FunctionResultEntry"></a>
<a id="tocSfunctionresultentry"></a>
<a id="tocsfunctionresultentry"></a>

```json
{
  "object": "entry",
  "type": "function.result",
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "tool_call_id": "string",
  "result": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|completed_at|string(date-time) \| null|false|none|none|
|id|string|false|none|none|
|tool_call_id|string|true|none|none|
|result|string|true|none|none|

<h2 id="tocS_FunctionTool">FunctionTool</h2>
<!-- backwards compatibility -->
<a id="schemafunctiontool"></a>
<a id="schema_FunctionTool"></a>
<a id="tocSfunctiontool"></a>
<a id="tocsfunctiontool"></a>

```json
{
  "type": "function",
  "function": {
    "name": "string",
    "description": "",
    "strict": false,
    "parameters": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|function|[Function](#schemafunction)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|function|

<h2 id="tocS_GuardrailConfig">GuardrailConfig</h2>
<!-- backwards compatibility -->
<a id="schemaguardrailconfig"></a>
<a id="schema_GuardrailConfig"></a>
<a id="tocSguardrailconfig"></a>
<a id="tocsguardrailconfig"></a>

```json
{
  "block_on_error": false,
  "moderation_llm_v1": {
    "model_name": "mistral-moderation-2411",
    "custom_category_thresholds": {
      "sexual": 0,
      "hate_and_discrimination": 0,
      "violence_and_threats": 0,
      "dangerous_and_criminal_content": 0,
      "selfharm": 0,
      "health": 0,
      "financial": 0,
      "law": 0,
      "pii": 0
    },
    "ignore_other_categories": false,
    "action": "none"
  },
  "moderation_llm_v2": {
    "model_name": "mistral-moderation-2603",
    "custom_category_thresholds": {
      "sexual": 0,
      "hate_and_discrimination": 0,
      "violence_and_threats": 0,
      "dangerous": 0,
      "criminal": 0,
      "selfharm": 0,
      "health": 0,
      "financial": 0,
      "law": 0,
      "pii": 0,
      "jailbreaking": 0
    },
    "ignore_other_categories": false,
    "action": "none"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block_on_error|boolean|false|none|If true, return HTTP 403 and block request in the event of a server-side error|
|moderation_llm_v1|[ModerationLLMV1Config](#schemamoderationllmv1config) \| null|false|none|none|
|moderation_llm_v2|[ModerationLLMV2Config](#schemamoderationllmv2config) \| null|false|none|none|

<h2 id="tocS_ImageDetail">ImageDetail</h2>
<!-- backwards compatibility -->
<a id="schemaimagedetail"></a>
<a id="schema_ImageDetail"></a>
<a id="tocSimagedetail"></a>
<a id="tocsimagedetail"></a>

```json
"low"
```

<h2 id="tocS_ImageGenerationTool">ImageGenerationTool</h2>
<!-- backwards compatibility -->
<a id="schemaimagegenerationtool"></a>
<a id="schema_ImageGenerationTool"></a>
<a id="tocSimagegenerationtool"></a>
<a id="tocsimagegenerationtool"></a>

```json
{
  "tool_configuration": {
    "exclude": [
      "string"
    ],
    "include": [
      "string"
    ],
    "requires_confirmation": [
      "string"
    ]
  },
  "type": "image_generation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tool_configuration|[ToolConfiguration](#schematoolconfiguration) \| null|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image_generation|

<h2 id="tocS_ImageURL">ImageURL</h2>
<!-- backwards compatibility -->
<a id="schemaimageurl"></a>
<a id="schema_ImageURL"></a>
<a id="tocSimageurl"></a>
<a id="tocsimageurl"></a>

```json
{
  "url": "string",
  "detail": "low"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|
|detail|[ImageDetail](#schemaimagedetail) \| null|false|none|none|

<h2 id="tocS_ImageURLChunk">ImageURLChunk</h2>
<!-- backwards compatibility -->
<a id="schemaimageurlchunk"></a>
<a id="schema_ImageURLChunk"></a>
<a id="tocSimageurlchunk"></a>
<a id="tocsimageurlchunk"></a>

```json
{
  "type": "image_url",
  "image_url": {
    "url": "string",
    "detail": "low"
  }
}
```

{"type":"image_url","image_url":{"url":"data:image/png;base64,iVBORw0

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|image_url|[ImageURL](#schemaimageurl) \| string|true|none|none|

<h2 id="tocS_JsonSchema">JsonSchema</h2>
<!-- backwards compatibility -->
<a id="schemajsonschema"></a>
<a id="schema_JsonSchema"></a>
<a id="tocSjsonschema"></a>
<a id="tocsjsonschema"></a>

```json
{
  "name": "string",
  "description": "string",
  "schema": {},
  "strict": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|schema|object|true|none|none|
|strict|boolean|false|none|none|

<h2 id="tocS_MessageInputEntry">MessageInputEntry</h2>
<!-- backwards compatibility -->
<a id="schemamessageinputentry"></a>
<a id="schema_MessageInputEntry"></a>
<a id="tocSmessageinputentry"></a>
<a id="tocsmessageinputentry"></a>

```json
{
  "object": "entry",
  "type": "message.input",
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "role": "assistant",
  "content": "string",
  "prefix": false
}
```

Representation of an input message inside the conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|completed_at|string(date-time) \| null|false|none|none|
|id|string|false|none|none|
|role|string|true|none|none|
|content|string \| [MessageInputContentChunks](#schemamessageinputcontentchunks)|true|none|none|
|prefix|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|assistant|
|role|user|

<h2 id="tocS_MessageOutputEntry">MessageOutputEntry</h2>
<!-- backwards compatibility -->
<a id="schemamessageoutputentry"></a>
<a id="schema_MessageOutputEntry"></a>
<a id="tocSmessageoutputentry"></a>
<a id="tocsmessageoutputentry"></a>

```json
{
  "object": "entry",
  "type": "message.output",
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "agent_id": "string",
  "model": "string",
  "id": "string",
  "role": "assistant",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|completed_at|string(date-time) \| null|false|none|none|
|agent_id|string \| null|false|none|none|
|model|string \| null|false|none|none|
|id|string|false|none|none|
|role|string|false|none|none|
|content|string \| [MessageOutputContentChunks](#schemamessageoutputcontentchunks)|true|none|none|

<h2 id="tocS_MetadataDict">MetadataDict</h2>
<!-- backwards compatibility -->
<a id="schemametadatadict"></a>
<a id="schema_MetadataDict"></a>
<a id="tocSmetadatadict"></a>
<a id="tocsmetadatadict"></a>

```json
{}
```

Custom type for metadata with embedded validation.

<h2 id="tocS_ModelConversation">ModelConversation</h2>
<!-- backwards compatibility -->
<a id="schemamodelconversation"></a>
<a id="schema_ModelConversation"></a>
<a id="tocSmodelconversation"></a>
<a id="tocsmodelconversation"></a>

```json
{
  "instructions": "string",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "name": "string",
  "description": "string",
  "metadata": {},
  "object": "conversation",
  "id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "model": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instructions|string \| null|false|none|Instruction prompt the model will follow during the conversation.|
|tools|[[FunctionTool](#schemafunctiontool) \| [WebSearchTool](#schemawebsearchtool) \| [WebSearchPremiumTool](#schemawebsearchpremiumtool) \| [CodeInterpreterTool](#schemacodeinterpretertool) \| [ImageGenerationTool](#schemaimagegenerationtool) \| [DocumentLibraryTool](#schemadocumentlibrarytool) \| [CustomConnector](#schemacustomconnector)]|false|none|List of tools which are available to the model during the conversation.|
|completion_args|[CompletionArgs](#schemacompletionargs)|false|none|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|guardrails|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|none|
|name|string \| null|false|none|Name given to the conversation.|
|description|string \| null|false|none|Description of the what the conversation is about.|
|metadata|[MetadataDict](#schemametadatadict) \| null|false|none|Custom metadata for the conversation.|
|object|string|false|none|none|
|id|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|model|string|true|none|none|

<h2 id="tocS_ModerationLLMAction">ModerationLLMAction</h2>
<!-- backwards compatibility -->
<a id="schemamoderationllmaction"></a>
<a id="schema_ModerationLLMAction"></a>
<a id="tocSmoderationllmaction"></a>
<a id="tocsmoderationllmaction"></a>

```json
"none"
```

<h2 id="tocS_ModerationLLMV1CategoryThresholds">ModerationLLMV1CategoryThresholds</h2>
<!-- backwards compatibility -->
<a id="schemamoderationllmv1categorythresholds"></a>
<a id="schema_ModerationLLMV1CategoryThresholds"></a>
<a id="tocSmoderationllmv1categorythresholds"></a>
<a id="tocsmoderationllmv1categorythresholds"></a>

```json
{
  "sexual": 0,
  "hate_and_discrimination": 0,
  "violence_and_threats": 0,
  "dangerous_and_criminal_content": 0,
  "selfharm": 0,
  "health": 0,
  "financial": 0,
  "law": 0,
  "pii": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sexual|number \| null|false|none|none|
|hate_and_discrimination|number \| null|false|none|none|
|violence_and_threats|number \| null|false|none|none|
|dangerous_and_criminal_content|number \| null|false|none|none|
|selfharm|number \| null|false|none|none|
|health|number \| null|false|none|none|
|financial|number \| null|false|none|none|
|law|number \| null|false|none|none|
|pii|number \| null|false|none|none|

<h2 id="tocS_ModerationLLMV1Config">ModerationLLMV1Config</h2>
<!-- backwards compatibility -->
<a id="schemamoderationllmv1config"></a>
<a id="schema_ModerationLLMV1Config"></a>
<a id="tocSmoderationllmv1config"></a>
<a id="tocsmoderationllmv1config"></a>

```json
{
  "model_name": "mistral-moderation-2411",
  "custom_category_thresholds": {
    "sexual": 0,
    "hate_and_discrimination": 0,
    "violence_and_threats": 0,
    "dangerous_and_criminal_content": 0,
    "selfharm": 0,
    "health": 0,
    "financial": 0,
    "law": 0,
    "pii": 0
  },
  "ignore_other_categories": false,
  "action": "none"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_name|string|false|none|Override model name. Should be omitted in general.|
|custom_category_thresholds|[ModerationLLMV1CategoryThresholds](#schemamoderationllmv1categorythresholds) \| null|false|none|none|
|ignore_other_categories|boolean|false|none|If true, only evaluate categories in custom_category_thresholds; others are ignored.|
|action|[ModerationLLMAction](#schemamoderationllmaction)|false|none|Action to take if any score is above the threshold for any category.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|none|
|action|block|

<h2 id="tocS_ModerationLLMV2CategoryThresholds">ModerationLLMV2CategoryThresholds</h2>
<!-- backwards compatibility -->
<a id="schemamoderationllmv2categorythresholds"></a>
<a id="schema_ModerationLLMV2CategoryThresholds"></a>
<a id="tocSmoderationllmv2categorythresholds"></a>
<a id="tocsmoderationllmv2categorythresholds"></a>

```json
{
  "sexual": 0,
  "hate_and_discrimination": 0,
  "violence_and_threats": 0,
  "dangerous": 0,
  "criminal": 0,
  "selfharm": 0,
  "health": 0,
  "financial": 0,
  "law": 0,
  "pii": 0,
  "jailbreaking": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sexual|number \| null|false|none|none|
|hate_and_discrimination|number \| null|false|none|none|
|violence_and_threats|number \| null|false|none|none|
|dangerous|number \| null|false|none|none|
|criminal|number \| null|false|none|none|
|selfharm|number \| null|false|none|none|
|health|number \| null|false|none|none|
|financial|number \| null|false|none|none|
|law|number \| null|false|none|none|
|pii|number \| null|false|none|none|
|jailbreaking|number \| null|false|none|none|

<h2 id="tocS_ModerationLLMV2Config">ModerationLLMV2Config</h2>
<!-- backwards compatibility -->
<a id="schemamoderationllmv2config"></a>
<a id="schema_ModerationLLMV2Config"></a>
<a id="tocSmoderationllmv2config"></a>
<a id="tocsmoderationllmv2config"></a>

```json
{
  "model_name": "mistral-moderation-2603",
  "custom_category_thresholds": {
    "sexual": 0,
    "hate_and_discrimination": 0,
    "violence_and_threats": 0,
    "dangerous": 0,
    "criminal": 0,
    "selfharm": 0,
    "health": 0,
    "financial": 0,
    "law": 0,
    "pii": 0,
    "jailbreaking": 0
  },
  "ignore_other_categories": false,
  "action": "none"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_name|string|false|none|Override model name. Should be omitted in general.|
|custom_category_thresholds|[ModerationLLMV2CategoryThresholds](#schemamoderationllmv2categorythresholds) \| null|false|none|none|
|ignore_other_categories|boolean|false|none|If true, only evaluate categories in custom_category_thresholds; others are ignored.|
|action|[ModerationLLMAction](#schemamoderationllmaction)|false|none|Action to take if any score is above the threshold for any category.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|none|
|action|block|

<h2 id="tocS_OAuth2TokenAuth">OAuth2TokenAuth</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2tokenauth"></a>
<a id="schema_OAuth2TokenAuth"></a>
<a id="tocSoauth2tokenauth"></a>
<a id="tocsoauth2tokenauth"></a>

```json
{
  "type": "oauth2-token",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|oauth2-token|

<h2 id="tocS_Prediction">Prediction</h2>
<!-- backwards compatibility -->
<a id="schemaprediction"></a>
<a id="schema_Prediction"></a>
<a id="tocSprediction"></a>
<a id="tocsprediction"></a>

```json
{
  "type": "content",
  "content": ""
}
```

Enable users to specify an expected completion, optimizing response times by leveraging known or predictable content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|content|string|false|none|none|

<h2 id="tocS_RequestSource">RequestSource</h2>
<!-- backwards compatibility -->
<a id="schemarequestsource"></a>
<a id="schema_RequestSource"></a>
<a id="tocSrequestsource"></a>
<a id="tocsrequestsource"></a>

```json
"api"
```

<h2 id="tocS_ResponseFormat">ResponseFormat</h2>
<!-- backwards compatibility -->
<a id="schemaresponseformat"></a>
<a id="schema_ResponseFormat"></a>
<a id="tocSresponseformat"></a>
<a id="tocsresponseformat"></a>

```json
{
  "type": "text"
}
```

Specify the format that the model must output. By default it will use `{ "type": "text" }`. Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is in JSON. When using JSON mode you MUST also instruct the model to produce JSON yourself with a system or a user message. Setting to `{ "type": "json_schema" }` enables JSON schema mode, which guarantees the message the model generates is in JSON and follows the schema you provide.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ResponseFormats](#schemaresponseformats)|false|none|none|
|json_schema|[JsonSchema](#schemajsonschema) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|json_object|
|type|json_schema|

<h2 id="tocS_ResponseFormats">ResponseFormats</h2>
<!-- backwards compatibility -->
<a id="schemaresponseformats"></a>
<a id="schema_ResponseFormats"></a>
<a id="tocSresponseformats"></a>
<a id="tocsresponseformats"></a>

```json
"text"
```

<h2 id="tocS_TextChunk">TextChunk</h2>
<!-- backwards compatibility -->
<a id="schematextchunk"></a>
<a id="schema_TextChunk"></a>
<a id="tocStextchunk"></a>
<a id="tocstextchunk"></a>

```json
{
  "type": "text",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|text|string|true|none|none|

<h2 id="tocS_ThinkChunk">ThinkChunk</h2>
<!-- backwards compatibility -->
<a id="schemathinkchunk"></a>
<a id="schema_ThinkChunk"></a>
<a id="tocSthinkchunk"></a>
<a id="tocsthinkchunk"></a>

```json
{
  "type": "thinking",
  "thinking": [
    {
      "type": "text",
      "text": "string"
    }
  ],
  "closed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|thinking|[[TextChunk](#schematextchunk) \| [ToolReferenceChunk](#schematoolreferencechunk) \| [ReferenceChunk](#schemareferencechunk)]|true|none|none|
|closed|boolean|false|none|Whether the thinking chunk is closed or not. Currently only used for prefixing.|

<h2 id="tocS_ToolCallConfirmation">ToolCallConfirmation</h2>
<!-- backwards compatibility -->
<a id="schematoolcallconfirmation"></a>
<a id="schema_ToolCallConfirmation"></a>
<a id="tocStoolcallconfirmation"></a>
<a id="tocstoolcallconfirmation"></a>

```json
{
  "tool_call_id": "string",
  "confirmation": "allow"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tool_call_id|string|true|none|none|
|confirmation|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|confirmation|allow|
|confirmation|deny|

<h2 id="tocS_ToolChoiceEnum">ToolChoiceEnum</h2>
<!-- backwards compatibility -->
<a id="schematoolchoiceenum"></a>
<a id="schema_ToolChoiceEnum"></a>
<a id="tocStoolchoiceenum"></a>
<a id="tocstoolchoiceenum"></a>

```json
"auto"
```

<h2 id="tocS_ToolConfiguration">ToolConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematoolconfiguration"></a>
<a id="schema_ToolConfiguration"></a>
<a id="tocStoolconfiguration"></a>
<a id="tocstoolconfiguration"></a>

```json
{
  "exclude": [
    "string"
  ],
  "include": [
    "string"
  ],
  "requires_confirmation": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclude|[string] \| null|false|none|none|
|include|[string] \| null|false|none|none|
|requires_confirmation|[string] \| null|false|none|none|

<h2 id="tocS_ToolExecutionEntry">ToolExecutionEntry</h2>
<!-- backwards compatibility -->
<a id="schematoolexecutionentry"></a>
<a id="schema_ToolExecutionEntry"></a>
<a id="tocStoolexecutionentry"></a>
<a id="tocstoolexecutionentry"></a>

```json
{
  "object": "entry",
  "type": "tool.execution",
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "agent_id": "string",
  "model": "string",
  "id": "string",
  "name": "web_search",
  "arguments": "string",
  "info": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|completed_at|string(date-time) \| null|false|none|none|
|agent_id|string \| null|false|none|none|
|model|string \| null|false|none|none|
|id|string|false|none|none|
|name|[BuiltInConnectors](#schemabuiltinconnectors) \| string|true|none|none|
|arguments|string|true|none|none|
|info|[ToolExecutionInfo](#schematoolexecutioninfo)|false|none|none|

<h2 id="tocS_ToolFileChunk">ToolFileChunk</h2>
<!-- backwards compatibility -->
<a id="schematoolfilechunk"></a>
<a id="schema_ToolFileChunk"></a>
<a id="tocStoolfilechunk"></a>
<a id="tocstoolfilechunk"></a>

```json
{
  "type": "tool_file",
  "tool": "web_search",
  "file_id": "string",
  "file_name": "string",
  "file_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|tool|[BuiltInConnectors](#schemabuiltinconnectors) \| string|true|none|none|
|file_id|string|true|none|none|
|file_name|string \| null|false|none|none|
|file_type|string \| null|false|none|none|

<h2 id="tocS_ToolReferenceChunk">ToolReferenceChunk</h2>
<!-- backwards compatibility -->
<a id="schematoolreferencechunk"></a>
<a id="schema_ToolReferenceChunk"></a>
<a id="tocStoolreferencechunk"></a>
<a id="tocstoolreferencechunk"></a>

```json
{
  "type": "tool_reference",
  "tool": "web_search",
  "title": "string",
  "url": "string",
  "favicon": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|tool|[BuiltInConnectors](#schemabuiltinconnectors) \| string|true|none|none|
|title|string|true|none|none|
|url|string \| null|false|none|none|
|favicon|string \| null|false|none|none|
|description|string \| null|false|none|none|

<h2 id="tocS_WebSearchPremiumTool">WebSearchPremiumTool</h2>
<!-- backwards compatibility -->
<a id="schemawebsearchpremiumtool"></a>
<a id="schema_WebSearchPremiumTool"></a>
<a id="tocSwebsearchpremiumtool"></a>
<a id="tocswebsearchpremiumtool"></a>

```json
{
  "tool_configuration": {
    "exclude": [
      "string"
    ],
    "include": [
      "string"
    ],
    "requires_confirmation": [
      "string"
    ]
  },
  "type": "web_search_premium"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tool_configuration|[ToolConfiguration](#schematoolconfiguration) \| null|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|web_search_premium|

<h2 id="tocS_WebSearchTool">WebSearchTool</h2>
<!-- backwards compatibility -->
<a id="schemawebsearchtool"></a>
<a id="schema_WebSearchTool"></a>
<a id="tocSwebsearchtool"></a>
<a id="tocswebsearchtool"></a>

```json
{
  "tool_configuration": {
    "exclude": [
      "string"
    ],
    "include": [
      "string"
    ],
    "requires_confirmation": [
      "string"
    ]
  },
  "type": "web_search"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tool_configuration|[ToolConfiguration](#schematoolconfiguration) \| null|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|web_search|

<h2 id="tocS_ConversationUsageInfo">ConversationUsageInfo</h2>
<!-- backwards compatibility -->
<a id="schemaconversationusageinfo"></a>
<a id="schema_ConversationUsageInfo"></a>
<a id="tocSconversationusageinfo"></a>
<a id="tocsconversationusageinfo"></a>

```json
{
  "prompt_tokens": 0,
  "completion_tokens": 0,
  "total_tokens": 0,
  "connector_tokens": null,
  "connectors": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prompt_tokens|integer|false|none|none|
|completion_tokens|integer|false|none|none|
|total_tokens|integer|false|none|none|
|connector_tokens|integer \| null|false|none|none|
|connectors|object \| null|false|none|none|

<h2 id="tocS_ConversationResponse">ConversationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconversationresponse"></a>
<a id="schema_ConversationResponse"></a>
<a id="tocSconversationresponse"></a>
<a id="tocsconversationresponse"></a>

```json
{
  "object": "conversation.response",
  "conversation_id": "string",
  "outputs": [
    {
      "object": "entry",
      "type": "message.output",
      "created_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "agent_id": "string",
      "model": "string",
      "id": "string",
      "role": "assistant",
      "content": "string"
    }
  ],
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "connector_tokens": null,
    "connectors": null
  },
  "guardrails": null
}
```

The response after appending new entries to the conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|conversation_id|string|true|none|none|
|outputs|[[MessageOutputEntry](#schemamessageoutputentry) \| [ToolExecutionEntry](#schematoolexecutionentry) \| [FunctionCallEntry](#schemafunctioncallentry) \| [AgentHandoffEntry](#schemaagenthandoffentry)]|true|none|none|
|usage|[ConversationUsageInfo](#schemaconversationusageinfo)|true|none|none|
|guardrails|[object] \| null|false|none|none|

<h2 id="tocS_ConversationRequest">ConversationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrequest"></a>
<a id="schema_ConversationRequest"></a>
<a id="tocSconversationrequest"></a>
<a id="tocsconversationrequest"></a>

```json
{
  "inputs": "string",
  "stream": false,
  "store": null,
  "handoff_execution": null,
  "instructions": null,
  "tools": null,
  "completion_args": null,
  "guardrails": null,
  "name": null,
  "description": null,
  "metadata": null,
  "agent_id": null,
  "agent_version": null,
  "model": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[ConversationInputs](#schemaconversationinputs)|true|none|none|
|stream|boolean \| null|false|none|none|
|store|boolean \| null|false|none|none|
|handoff_execution|string \| null|false|none|none|
|instructions|string \| null|false|none|none|
|tools|[[FunctionTool](#schemafunctiontool) \| [WebSearchTool](#schemawebsearchtool) \| [WebSearchPremiumTool](#schemawebsearchpremiumtool) \| [CodeInterpreterTool](#schemacodeinterpretertool) \| [ImageGenerationTool](#schemaimagegenerationtool) \| [DocumentLibraryTool](#schemadocumentlibrarytool) \| [CustomConnector](#schemacustomconnector)] \| null|false|none|none|
|completion_args|[CompletionArgs](#schemacompletionargs) \| null|false|none|none|
|guardrails|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|none|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|
|metadata|[MetadataDict](#schemametadatadict) \| null|false|none|none|
|agent_id|string \| null|false|none|none|
|agent_version|string \| integer \| null|false|none|none|
|model|string \| null|false|none|none|
|stream|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|stream|false|

<h2 id="tocS_AgentHandoffDoneEvent">AgentHandoffDoneEvent</h2>
<!-- backwards compatibility -->
<a id="schemaagenthandoffdoneevent"></a>
<a id="schema_AgentHandoffDoneEvent"></a>
<a id="tocSagenthandoffdoneevent"></a>
<a id="tocsagenthandoffdoneevent"></a>

```json
{
  "type": "agent.handoff.done",
  "created_at": "1970-01-01T00:00:00Z",
  "output_index": 0,
  "id": "string",
  "next_agent_id": "string",
  "next_agent_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|output_index|integer|false|none|none|
|id|string|true|none|none|
|next_agent_id|string|true|none|none|
|next_agent_name|string|true|none|none|

<h2 id="tocS_AgentHandoffStartedEvent">AgentHandoffStartedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaagenthandoffstartedevent"></a>
<a id="schema_AgentHandoffStartedEvent"></a>
<a id="tocSagenthandoffstartedevent"></a>
<a id="tocsagenthandoffstartedevent"></a>

```json
{
  "type": "agent.handoff.started",
  "created_at": "1970-01-01T00:00:00Z",
  "output_index": 0,
  "id": "string",
  "previous_agent_id": "string",
  "previous_agent_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|output_index|integer|false|none|none|
|id|string|true|none|none|
|previous_agent_id|string|true|none|none|
|previous_agent_name|string|true|none|none|

<h2 id="tocS_FunctionCallEvent">FunctionCallEvent</h2>
<!-- backwards compatibility -->
<a id="schemafunctioncallevent"></a>
<a id="schema_FunctionCallEvent"></a>
<a id="tocSfunctioncallevent"></a>
<a id="tocsfunctioncallevent"></a>

```json
{
  "type": "function.call.delta",
  "created_at": "1970-01-01T00:00:00Z",
  "output_index": 0,
  "id": "string",
  "model": null,
  "agent_id": null,
  "name": "string",
  "tool_call_id": "string",
  "arguments": "string",
  "confirmation_status": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|output_index|integer|false|none|none|
|id|string|true|none|none|
|model|string \| null|false|none|none|
|agent_id|string \| null|false|none|none|
|name|string|true|none|none|
|tool_call_id|string|true|none|none|
|arguments|string|true|none|none|
|confirmation_status|string \| null|false|none|none|

<h2 id="tocS_MessageOutputEvent">MessageOutputEvent</h2>
<!-- backwards compatibility -->
<a id="schemamessageoutputevent"></a>
<a id="schema_MessageOutputEvent"></a>
<a id="tocSmessageoutputevent"></a>
<a id="tocsmessageoutputevent"></a>

```json
{
  "type": "message.output.delta",
  "created_at": "1970-01-01T00:00:00Z",
  "output_index": 0,
  "id": "string",
  "content_index": 0,
  "model": null,
  "agent_id": null,
  "role": "assistant",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|output_index|integer|false|none|none|
|id|string|true|none|none|
|content_index|integer|false|none|none|
|model|string \| null|false|none|none|
|agent_id|string \| null|false|none|none|
|role|string|false|none|none|
|content|string \| [OutputContentChunks](#schemaoutputcontentchunks)|true|none|none|

<h2 id="tocS_ResponseDoneEvent">ResponseDoneEvent</h2>
<!-- backwards compatibility -->
<a id="schemaresponsedoneevent"></a>
<a id="schema_ResponseDoneEvent"></a>
<a id="tocSresponsedoneevent"></a>
<a id="tocsresponsedoneevent"></a>

```json
{
  "type": "conversation.response.done",
  "created_at": "1970-01-01T00:00:00Z",
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "connector_tokens": null,
    "connectors": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|usage|[ConversationUsageInfo](#schemaconversationusageinfo)|true|none|none|

<h2 id="tocS_ResponseErrorEvent">ResponseErrorEvent</h2>
<!-- backwards compatibility -->
<a id="schemaresponseerrorevent"></a>
<a id="schema_ResponseErrorEvent"></a>
<a id="tocSresponseerrorevent"></a>
<a id="tocsresponseerrorevent"></a>

```json
{
  "type": "conversation.response.error",
  "created_at": "1970-01-01T00:00:00Z",
  "message": "string",
  "code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|message|string|true|none|none|
|code|integer|true|none|none|

<h2 id="tocS_ResponseStartedEvent">ResponseStartedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaresponsestartedevent"></a>
<a id="schema_ResponseStartedEvent"></a>
<a id="tocSresponsestartedevent"></a>
<a id="tocsresponsestartedevent"></a>

```json
{
  "type": "conversation.response.started",
  "created_at": "1970-01-01T00:00:00Z",
  "conversation_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|conversation_id|string|true|none|none|

<h2 id="tocS_SSETypes">SSETypes</h2>
<!-- backwards compatibility -->
<a id="schemassetypes"></a>
<a id="schema_SSETypes"></a>
<a id="tocSssetypes"></a>
<a id="tocsssetypes"></a>

```json
"conversation.response.started"
```

Server side events sent when streaming a conversation response.

<h2 id="tocS_ToolExecutionDeltaEvent">ToolExecutionDeltaEvent</h2>
<!-- backwards compatibility -->
<a id="schematoolexecutiondeltaevent"></a>
<a id="schema_ToolExecutionDeltaEvent"></a>
<a id="tocStoolexecutiondeltaevent"></a>
<a id="tocstoolexecutiondeltaevent"></a>

```json
{
  "type": "tool.execution.delta",
  "created_at": "1970-01-01T00:00:00Z",
  "output_index": 0,
  "id": "string",
  "name": "web_search",
  "arguments": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|output_index|integer|false|none|none|
|id|string|true|none|none|
|name|[BuiltInConnectors](#schemabuiltinconnectors) \| string|true|none|none|
|arguments|string|true|none|none|

<h2 id="tocS_ToolExecutionDoneEvent">ToolExecutionDoneEvent</h2>
<!-- backwards compatibility -->
<a id="schematoolexecutiondoneevent"></a>
<a id="schema_ToolExecutionDoneEvent"></a>
<a id="tocStoolexecutiondoneevent"></a>
<a id="tocstoolexecutiondoneevent"></a>

```json
{
  "type": "tool.execution.done",
  "created_at": "1970-01-01T00:00:00Z",
  "output_index": 0,
  "id": "string",
  "name": "web_search",
  "info": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|output_index|integer|false|none|none|
|id|string|true|none|none|
|name|[BuiltInConnectors](#schemabuiltinconnectors) \| string|true|none|none|
|info|[ToolExecutionInfo](#schematoolexecutioninfo)|false|none|none|

<h2 id="tocS_ToolExecutionStartedEvent">ToolExecutionStartedEvent</h2>
<!-- backwards compatibility -->
<a id="schematoolexecutionstartedevent"></a>
<a id="schema_ToolExecutionStartedEvent"></a>
<a id="tocStoolexecutionstartedevent"></a>
<a id="tocstoolexecutionstartedevent"></a>

```json
{
  "type": "tool.execution.started",
  "created_at": "1970-01-01T00:00:00Z",
  "output_index": 0,
  "id": "string",
  "model": null,
  "agent_id": null,
  "name": "web_search",
  "arguments": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|output_index|integer|false|none|none|
|id|string|true|none|none|
|model|string \| null|false|none|none|
|agent_id|string \| null|false|none|none|
|name|[BuiltInConnectors](#schemabuiltinconnectors) \| string|true|none|none|
|arguments|string|true|none|none|

<h2 id="tocS_ConversationEvents">ConversationEvents</h2>
<!-- backwards compatibility -->
<a id="schemaconversationevents"></a>
<a id="schema_ConversationEvents"></a>
<a id="tocSconversationevents"></a>
<a id="tocsconversationevents"></a>

```json
{
  "event": "conversation.response.started",
  "data": {
    "type": "conversation.response.started",
    "created_at": "1970-01-01T00:00:00Z",
    "conversation_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[SSETypes](#schemassetypes)|true|none|Server side events sent when streaming a conversation response.|
|data|[ResponseStartedEvent](#schemaresponsestartedevent) \| [ResponseDoneEvent](#schemaresponsedoneevent) \| [ResponseErrorEvent](#schemaresponseerrorevent) \| [ToolExecutionStartedEvent](#schematoolexecutionstartedevent) \| [ToolExecutionDeltaEvent](#schematoolexecutiondeltaevent) \| [ToolExecutionDoneEvent](#schematoolexecutiondoneevent) \| [MessageOutputEvent](#schemamessageoutputevent) \| [FunctionCallEvent](#schemafunctioncallevent) \| [AgentHandoffStartedEvent](#schemaagenthandoffstartedevent) \| [AgentHandoffDoneEvent](#schemaagenthandoffdoneevent)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event|conversation.response.started|
|event|conversation.response.done|
|event|conversation.response.error|
|event|message.output.delta|
|event|tool.execution.started|
|event|tool.execution.delta|
|event|tool.execution.done|
|event|agent.handoff.started|
|event|agent.handoff.done|
|event|function.call.delta|

<h2 id="tocS_MessageInputContentChunks">MessageInputContentChunks</h2>
<!-- backwards compatibility -->
<a id="schemamessageinputcontentchunks"></a>
<a id="schema_MessageInputContentChunks"></a>
<a id="tocSmessageinputcontentchunks"></a>
<a id="tocsmessageinputcontentchunks"></a>

```json
[
  {
    "type": "text",
    "text": "string"
  }
]
```

<h2 id="tocS_MessageOutputContentChunks">MessageOutputContentChunks</h2>
<!-- backwards compatibility -->
<a id="schemamessageoutputcontentchunks"></a>
<a id="schema_MessageOutputContentChunks"></a>
<a id="tocSmessageoutputcontentchunks"></a>
<a id="tocsmessageoutputcontentchunks"></a>

```json
[
  {
    "type": "text",
    "text": "string"
  }
]
```

<h2 id="tocS_OutputContentChunks">OutputContentChunks</h2>
<!-- backwards compatibility -->
<a id="schemaoutputcontentchunks"></a>
<a id="schema_OutputContentChunks"></a>
<a id="tocSoutputcontentchunks"></a>
<a id="tocsoutputcontentchunks"></a>

```json
{
  "type": "text",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[TextChunk](#schematextchunk)|false|none|none|
|*anyOf*|[ImageURLChunk](#schemaimageurlchunk)|false|none|{"type":"image_url","image_url":{"url":"data:image/png;base64,iVBORw0|
|*anyOf*|[ToolFileChunk](#schematoolfilechunk)|false|none|none|
|*anyOf*|[DocumentURLChunk](#schemadocumenturlchunk)|false|none|none|
|*anyOf*|[ThinkChunk](#schemathinkchunk)|false|none|none|
|*anyOf*|[ToolReferenceChunk](#schematoolreferencechunk)|false|none|none|

<h2 id="tocS_MessageEntries">MessageEntries</h2>
<!-- backwards compatibility -->
<a id="schemamessageentries"></a>
<a id="schema_MessageEntries"></a>
<a id="tocSmessageentries"></a>
<a id="tocsmessageentries"></a>

```json
[
  {
    "object": "entry",
    "type": "message.input",
    "created_at": "1970-01-01T00:00:00Z",
    "completed_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "role": "assistant",
    "content": "string",
    "prefix": false
  }
]
```

<h2 id="tocS_InputEntries">InputEntries</h2>
<!-- backwards compatibility -->
<a id="schemainputentries"></a>
<a id="schema_InputEntries"></a>
<a id="tocSinputentries"></a>
<a id="tocsinputentries"></a>

```json
[
  {
    "object": "entry",
    "type": "message.input",
    "created_at": "1970-01-01T00:00:00Z",
    "completed_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "role": "assistant",
    "content": "string",
    "prefix": false
  }
]
```

<h2 id="tocS_CompletionArgsStop">CompletionArgsStop</h2>
<!-- backwards compatibility -->
<a id="schemacompletionargsstop"></a>
<a id="schema_CompletionArgsStop"></a>
<a id="tocScompletionargsstop"></a>
<a id="tocscompletionargsstop"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string|false|none|none|
|*anyOf*|[string]|false|none|none|
|*anyOf*|null|false|none|none|

<h2 id="tocS_FunctionCallEntryArguments">FunctionCallEntryArguments</h2>
<!-- backwards compatibility -->
<a id="schemafunctioncallentryarguments"></a>
<a id="schema_FunctionCallEntryArguments"></a>
<a id="tocSfunctioncallentryarguments"></a>
<a id="tocsfunctioncallentryarguments"></a>

```json
{}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|*anyOf*|string|false|none|none|

<h2 id="tocS_ConversationInputs">ConversationInputs</h2>
<!-- backwards compatibility -->
<a id="schemaconversationinputs"></a>
<a id="schema_ConversationInputs"></a>
<a id="tocSconversationinputs"></a>
<a id="tocsconversationinputs"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string|false|none|none|
|*anyOf*|[InputEntries](#schemainputentries)|false|none|none|

<h2 id="tocS_ToolExecutionInfo">ToolExecutionInfo</h2>
<!-- backwards compatibility -->
<a id="schematoolexecutioninfo"></a>
<a id="schema_ToolExecutionInfo"></a>
<a id="tocStoolexecutioninfo"></a>
<a id="tocstoolexecutioninfo"></a>

```json
{}
```

<h2 id="tocS_ConversationRequestBase">ConversationRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrequestbase"></a>
<a id="schema_ConversationRequestBase"></a>
<a id="tocSconversationrequestbase"></a>
<a id="tocsconversationrequestbase"></a>

```json
{
  "inputs": "string",
  "stream": null,
  "store": null,
  "handoff_execution": null,
  "instructions": null,
  "tools": null,
  "completion_args": null,
  "guardrails": null,
  "name": null,
  "description": null,
  "metadata": null,
  "agent_id": null,
  "agent_version": null,
  "model": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[ConversationInputs](#schemaconversationinputs)|true|none|none|
|stream|boolean \| null|false|none|none|
|store|boolean \| null|false|none|none|
|handoff_execution|string \| null|false|none|none|
|instructions|string \| null|false|none|none|
|tools|[[FunctionTool](#schemafunctiontool) \| [WebSearchTool](#schemawebsearchtool) \| [WebSearchPremiumTool](#schemawebsearchpremiumtool) \| [CodeInterpreterTool](#schemacodeinterpretertool) \| [ImageGenerationTool](#schemaimagegenerationtool) \| [DocumentLibraryTool](#schemadocumentlibrarytool) \| [CustomConnector](#schemacustomconnector)] \| null|false|none|none|
|completion_args|[CompletionArgs](#schemacompletionargs) \| null|false|none|none|
|guardrails|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|none|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|
|metadata|[MetadataDict](#schemametadatadict) \| null|false|none|none|
|agent_id|string \| null|false|none|none|
|agent_version|string \| integer \| null|false|none|none|
|model|string \| null|false|none|none|

<h2 id="tocS_ConversationStreamRequest">ConversationStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconversationstreamrequest"></a>
<a id="schema_ConversationStreamRequest"></a>
<a id="tocSconversationstreamrequest"></a>
<a id="tocsconversationstreamrequest"></a>

```json
{
  "inputs": "string",
  "stream": true,
  "store": null,
  "handoff_execution": null,
  "instructions": null,
  "tools": null,
  "completion_args": null,
  "guardrails": null,
  "name": null,
  "description": null,
  "metadata": null,
  "agent_id": null,
  "agent_version": null,
  "model": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[ConversationInputs](#schemaconversationinputs)|true|none|none|
|stream|boolean \| null|false|none|none|
|store|boolean \| null|false|none|none|
|handoff_execution|string \| null|false|none|none|
|instructions|string \| null|false|none|none|
|tools|[[FunctionTool](#schemafunctiontool) \| [WebSearchTool](#schemawebsearchtool) \| [WebSearchPremiumTool](#schemawebsearchpremiumtool) \| [CodeInterpreterTool](#schemacodeinterpretertool) \| [ImageGenerationTool](#schemaimagegenerationtool) \| [DocumentLibraryTool](#schemadocumentlibrarytool) \| [CustomConnector](#schemacustomconnector)] \| null|false|none|none|
|completion_args|[CompletionArgs](#schemacompletionargs) \| null|false|none|none|
|guardrails|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|none|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|
|metadata|[MetadataDict](#schemametadatadict) \| null|false|none|none|
|agent_id|string \| null|false|none|none|
|agent_version|string \| integer \| null|false|none|none|
|model|string \| null|false|none|none|
|stream|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|stream|true|

<h2 id="tocS_ConversationAppendRequestBase">ConversationAppendRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemaconversationappendrequestbase"></a>
<a id="schema_ConversationAppendRequestBase"></a>
<a id="tocSconversationappendrequestbase"></a>
<a id="tocsconversationappendrequestbase"></a>

```json
{
  "inputs": "string",
  "stream": false,
  "store": true,
  "handoff_execution": "server",
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "tool_confirmations": [
    {
      "tool_call_id": "string",
      "confirmation": "allow"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[ConversationInputs](#schemaconversationinputs)|false|none|none|
|stream|boolean|false|none|Whether to stream back partial progress. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|store|boolean|false|none|Whether to store the results into our servers or not.|
|handoff_execution|string|false|none|none|
|completion_args|[CompletionArgs](#schemacompletionargs)|false|none|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|tool_confirmations|[[ToolCallConfirmation](#schematoolcallconfirmation)] \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|handoff_execution|client|
|handoff_execution|server|

<h2 id="tocS_ConversationAppendStreamRequest">ConversationAppendStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconversationappendstreamrequest"></a>
<a id="schema_ConversationAppendStreamRequest"></a>
<a id="tocSconversationappendstreamrequest"></a>
<a id="tocsconversationappendstreamrequest"></a>

```json
{
  "inputs": "string",
  "stream": true,
  "store": true,
  "handoff_execution": "server",
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "tool_confirmations": [
    {
      "tool_call_id": "string",
      "confirmation": "allow"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[ConversationInputs](#schemaconversationinputs)|false|none|none|
|stream|boolean|false|none|Whether to stream back partial progress. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|store|boolean|false|none|Whether to store the results into our servers or not.|
|handoff_execution|string|false|none|none|
|completion_args|[CompletionArgs](#schemacompletionargs)|false|none|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|tool_confirmations|[[ToolCallConfirmation](#schematoolcallconfirmation)] \| null|false|none|none|
|stream|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|handoff_execution|client|
|handoff_execution|server|
|stream|true|

<h2 id="tocS_ConversationRestartRequestBase">ConversationRestartRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrestartrequestbase"></a>
<a id="schema_ConversationRestartRequestBase"></a>
<a id="tocSconversationrestartrequestbase"></a>
<a id="tocsconversationrestartrequestbase"></a>

```json
{
  "inputs": "string",
  "stream": false,
  "store": true,
  "handoff_execution": "server",
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "metadata": {},
  "from_entry_id": "string",
  "agent_version": "string"
}
```

Request to restart a new conversation from a given entry in the conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[ConversationInputs](#schemaconversationinputs)|false|none|none|
|stream|boolean|false|none|Whether to stream back partial progress. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|store|boolean|false|none|Whether to store the results into our servers or not.|
|handoff_execution|string|false|none|none|
|completion_args|[CompletionArgs](#schemacompletionargs)|false|none|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|guardrails|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|none|
|metadata|[MetadataDict](#schemametadatadict) \| null|false|none|Custom metadata for the conversation.|
|from_entry_id|string|true|none|none|
|agent_version|string \| integer \| null|false|none|Specific version of the agent to use when restarting. If not provided, uses the current version.|

#### Enumerated Values

|Property|Value|
|---|---|
|handoff_execution|client|
|handoff_execution|server|

<h2 id="tocS_ConversationRestartStreamRequest">ConversationRestartStreamRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrestartstreamrequest"></a>
<a id="schema_ConversationRestartStreamRequest"></a>
<a id="tocSconversationrestartstreamrequest"></a>
<a id="tocsconversationrestartstreamrequest"></a>

```json
{
  "inputs": "string",
  "stream": true,
  "store": true,
  "handoff_execution": "server",
  "completion_args": {
    "stop": "string",
    "presence_penalty": -2,
    "frequency_penalty": -2,
    "temperature": 0,
    "top_p": 0,
    "max_tokens": 0,
    "random_seed": 0,
    "prediction": {
      "type": "content",
      "content": ""
    },
    "response_format": {
      "type": "text"
    },
    "tool_choice": "auto",
    "reasoning_effort": "high"
  },
  "guardrails": [
    {
      "block_on_error": false,
      "moderation_llm_v1": {
        "model_name": "mistral-moderation-2411",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous_and_criminal_content": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      },
      "moderation_llm_v2": {
        "model_name": "mistral-moderation-2603",
        "custom_category_thresholds": {
          "sexual": 0,
          "hate_and_discrimination": 0,
          "violence_and_threats": 0,
          "dangerous": 0,
          "criminal": 0,
          "selfharm": 0,
          "health": 0,
          "financial": 0,
          "law": 0,
          "pii": 0,
          "jailbreaking": 0
        },
        "ignore_other_categories": false,
        "action": "none"
      }
    }
  ],
  "metadata": {},
  "from_entry_id": "string",
  "agent_version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[ConversationInputs](#schemaconversationinputs)|false|none|none|
|stream|boolean|false|none|Whether to stream back partial progress. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|store|boolean|false|none|Whether to store the results into our servers or not.|
|handoff_execution|string|false|none|none|
|completion_args|[CompletionArgs](#schemacompletionargs)|false|none|Completion arguments that will be used to generate assistant responses. Can be overridden at each message request.|
|guardrails|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|none|
|metadata|[MetadataDict](#schemametadatadict) \| null|false|none|Custom metadata for the conversation.|
|from_entry_id|string|true|none|none|
|agent_version|string \| integer \| null|false|none|Specific version of the agent to use when restarting. If not provided, uses the current version.|
|stream|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|handoff_execution|client|
|handoff_execution|server|
|stream|true|

<h2 id="tocS_ReferenceChunk">ReferenceChunk</h2>
<!-- backwards compatibility -->
<a id="schemareferencechunk"></a>
<a id="schema_ReferenceChunk"></a>
<a id="tocSreferencechunk"></a>
<a id="tocsreferencechunk"></a>

```json
{
  "type": "reference",
  "reference_ids": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|reference_ids|[integer]|true|none|none|

<h2 id="tocS_FilePurpose">FilePurpose</h2>
<!-- backwards compatibility -->
<a id="schemafilepurpose"></a>
<a id="schema_FilePurpose"></a>
<a id="tocSfilepurpose"></a>
<a id="tocsfilepurpose"></a>

```json
"fine-tune"
```

<h2 id="tocS_FileVisibility">FileVisibility</h2>
<!-- backwards compatibility -->
<a id="schemafilevisibility"></a>
<a id="schema_FileVisibility"></a>
<a id="tocSfilevisibility"></a>
<a id="tocsfilevisibility"></a>

```json
"workspace"
```

<h2 id="tocS_SampleType">SampleType</h2>
<!-- backwards compatibility -->
<a id="schemasampletype"></a>
<a id="schema_SampleType"></a>
<a id="tocSsampletype"></a>
<a id="tocssampletype"></a>

```json
"pretrain"
```

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
"upload"
```

<h2 id="tocS_UploadFileOut">UploadFileOut</h2>
<!-- backwards compatibility -->
<a id="schemauploadfileout"></a>
<a id="schema_UploadFileOut"></a>
<a id="tocSuploadfileout"></a>
<a id="tocsuploadfileout"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f09",
  "object": "file",
  "bytes": 13000,
  "created_at": 1716963433,
  "filename": "files_upload.jsonl",
  "purpose": "fine-tune",
  "sample_type": "pretrain",
  "num_lines": 0,
  "mimetype": "string",
  "source": "upload",
  "signature": "string",
  "expires_at": 0,
  "visibility": "workspace"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique identifier of the file.|
|object|string|true|none|The object type, which is always "file".|
|bytes|integer|true|none|The size of the file, in bytes.|
|created_at|integer|true|none|The UNIX timestamp (in seconds) of the event.|
|filename|string|true|none|The name of the uploaded file.|
|purpose|[FilePurpose](#schemafilepurpose)|true|none|The intended purpose of the uploaded file, currently supports fine-tuning (`fine-tune`), OCR (`ocr`), Audio/Transcription (`audio`) and batch inference (`batch`).|
|sample_type|[SampleType](#schemasampletype)|true|none|none|
|num_lines|integer \| null|false|none|none|
|mimetype|string \| null|false|none|none|
|source|[Source](#schemasource)|true|none|none|
|signature|string \| null|false|none|none|
|expires_at|integer \| null|false|none|none|
|visibility|[FileVisibility](#schemafilevisibility) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|fine-tune|
|purpose|batch|
|purpose|ocr|
|sample_type|pretrain|
|sample_type|instruct|
|sample_type|batch_request|
|sample_type|batch_result|
|sample_type|batch_error|
|source|upload|
|source|repository|
|source|mistral|

<h2 id="tocS_FileSchema">FileSchema</h2>
<!-- backwards compatibility -->
<a id="schemafileschema"></a>
<a id="schema_FileSchema"></a>
<a id="tocSfileschema"></a>
<a id="tocsfileschema"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f09",
  "object": "file",
  "bytes": 13000,
  "created_at": 1716963433,
  "filename": "files_upload.jsonl",
  "purpose": "fine-tune",
  "sample_type": "pretrain",
  "num_lines": 0,
  "mimetype": "string",
  "source": "upload",
  "signature": "string",
  "expires_at": 0,
  "visibility": "workspace"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique identifier of the file.|
|object|string|true|none|The object type, which is always "file".|
|bytes|integer|true|none|The size of the file, in bytes.|
|created_at|integer|true|none|The UNIX timestamp (in seconds) of the event.|
|filename|string|true|none|The name of the uploaded file.|
|purpose|[FilePurpose](#schemafilepurpose)|true|none|The intended purpose of the uploaded file, currently supports fine-tuning (`fine-tune`), OCR (`ocr`), Audio/Transcription (`audio`) and batch inference (`batch`).|
|sample_type|[SampleType](#schemasampletype)|true|none|none|
|num_lines|integer \| null|false|none|none|
|mimetype|string \| null|false|none|none|
|source|[Source](#schemasource)|true|none|none|
|signature|string \| null|false|none|none|
|expires_at|integer \| null|false|none|none|
|visibility|[FileVisibility](#schemafilevisibility) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|fine-tune|
|purpose|batch|
|purpose|ocr|
|sample_type|pretrain|
|sample_type|instruct|
|sample_type|batch_request|
|sample_type|batch_result|
|sample_type|batch_error|
|source|upload|
|source|repository|
|source|mistral|

<h2 id="tocS_ListFilesOut">ListFilesOut</h2>
<!-- backwards compatibility -->
<a id="schemalistfilesout"></a>
<a id="schema_ListFilesOut"></a>
<a id="tocSlistfilesout"></a>
<a id="tocslistfilesout"></a>

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f09",
      "object": "file",
      "bytes": 13000,
      "created_at": 1716963433,
      "filename": "files_upload.jsonl",
      "purpose": "fine-tune",
      "sample_type": "pretrain",
      "num_lines": 0,
      "mimetype": "string",
      "source": "upload",
      "signature": "string",
      "expires_at": 0,
      "visibility": "workspace"
    }
  ],
  "object": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[FileSchema](#schemafileschema)]|true|none|none|
|object|string|true|none|none|
|total|integer \| null|false|none|none|

<h2 id="tocS_RetrieveFileOut">RetrieveFileOut</h2>
<!-- backwards compatibility -->
<a id="schemaretrievefileout"></a>
<a id="schema_RetrieveFileOut"></a>
<a id="tocSretrievefileout"></a>
<a id="tocsretrievefileout"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f09",
  "object": "file",
  "bytes": 13000,
  "created_at": 1716963433,
  "filename": "files_upload.jsonl",
  "purpose": "fine-tune",
  "sample_type": "pretrain",
  "num_lines": 0,
  "mimetype": "string",
  "source": "upload",
  "signature": "string",
  "expires_at": 0,
  "visibility": "workspace",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The unique identifier of the file.|
|object|string|true|none|The object type, which is always "file".|
|bytes|integer|true|none|The size of the file, in bytes.|
|created_at|integer|true|none|The UNIX timestamp (in seconds) of the event.|
|filename|string|true|none|The name of the uploaded file.|
|purpose|[FilePurpose](#schemafilepurpose)|true|none|The intended purpose of the uploaded file, currently supports fine-tuning (`fine-tune`), OCR (`ocr`), Audio/Transcription (`audio`) and batch inference (`batch`).|
|sample_type|[SampleType](#schemasampletype)|true|none|none|
|num_lines|integer \| null|false|none|none|
|mimetype|string \| null|false|none|none|
|source|[Source](#schemasource)|true|none|none|
|signature|string \| null|false|none|none|
|expires_at|integer \| null|false|none|none|
|visibility|[FileVisibility](#schemafilevisibility) \| null|false|none|none|
|deleted|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|fine-tune|
|purpose|batch|
|purpose|ocr|
|sample_type|pretrain|
|sample_type|instruct|
|sample_type|batch_request|
|sample_type|batch_result|
|sample_type|batch_error|
|source|upload|
|source|repository|
|source|mistral|

<h2 id="tocS_DeleteFileOut">DeleteFileOut</h2>
<!-- backwards compatibility -->
<a id="schemadeletefileout"></a>
<a id="schema_DeleteFileOut"></a>
<a id="tocSdeletefileout"></a>
<a id="tocsdeletefileout"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f09",
  "object": "file",
  "deleted": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the deleted file.|
|object|string|true|none|The object type that was deleted|
|deleted|boolean|true|none|The deletion status.|

<h2 id="tocS_FileSignedURL">FileSignedURL</h2>
<!-- backwards compatibility -->
<a id="schemafilesignedurl"></a>
<a id="schema_FileSignedURL"></a>
<a id="tocSfilesignedurl"></a>
<a id="tocsfilesignedurl"></a>

```json
{
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|

<h2 id="tocS_FineTuneableModelType">FineTuneableModelType</h2>
<!-- backwards compatibility -->
<a id="schemafinetuneablemodeltype"></a>
<a id="schema_FineTuneableModelType"></a>
<a id="tocSfinetuneablemodeltype"></a>
<a id="tocsfinetuneablemodeltype"></a>

```json
"completion"
```

<h2 id="tocS_ClassifierJobOut">ClassifierJobOut</h2>
<!-- backwards compatibility -->
<a id="schemaclassifierjobout"></a>
<a id="schema_ClassifierJobOut"></a>
<a id="tocSclassifierjobout"></a>
<a id="tocsclassifierjobout"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "auto_start": true,
  "model": "string",
  "status": "QUEUED",
  "created_at": 0,
  "modified_at": 0,
  "training_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "validation_files": [],
  "object": "job",
  "fine_tuned_model": "string",
  "suffix": "string",
  "integrations": [
    {
      "type": "wandb",
      "project": "string",
      "name": "string",
      "run_name": "string",
      "url": "string"
    }
  ],
  "trained_tokens": 0,
  "metadata": {
    "expected_duration_seconds": 0,
    "cost": 0,
    "cost_currency": "string",
    "train_tokens_per_step": 0,
    "train_tokens": 0,
    "data_tokens": 0,
    "estimated_start_time": 0
  },
  "job_type": "classifier",
  "hyperparameters": {
    "training_steps": 1,
    "learning_rate": 0.0001,
    "weight_decay": 0.1,
    "warmup_fraction": 0.05,
    "epochs": 0.1,
    "seq_len": 100
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the job.|
|auto_start|boolean|true|none|none|
|model|string|true|none|none|
|status|string|true|none|The current status of the fine-tuning job.|
|created_at|integer|true|none|The UNIX timestamp (in seconds) for when the fine-tuning job was created.|
|modified_at|integer|true|none|The UNIX timestamp (in seconds) for when the fine-tuning job was last modified.|
|training_files|[string(uuid)]|true|none|A list containing the IDs of uploaded files that contain training data.|
|validation_files|[string(uuid)] \| null|false|none|A list containing the IDs of uploaded files that contain validation data.|
|object|string|false|none|The object type of the fine-tuning job.|
|fine_tuned_model|string \| null|false|none|The name of the fine-tuned model that is being created. The value will be `null` if the fine-tuning job is still running.|
|suffix|string \| null|false|none|Optional text/code that adds more context for the model. When given a `prompt` and a `suffix` the model will fill what is between them. When `suffix` is not provided, the model will simply execute completion starting with `prompt`.|
|integrations|[[WandbIntegrationOut](#schemawandbintegrationout)] \| null|false|none|A list of integrations enabled for your fine-tuning job.|
|trained_tokens|integer \| null|false|none|Total number of tokens trained.|
|metadata|[JobMetadataOut](#schemajobmetadataout) \| null|false|none|none|
|job_type|string|false|none|The type of job (`FT` for fine-tuning).|
|hyperparameters|[ClassifierTrainingParameters](#schemaclassifiertrainingparameters)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|QUEUED|
|status|STARTED|
|status|VALIDATING|
|status|VALIDATED|
|status|RUNNING|
|status|FAILED_VALIDATION|
|status|FAILED|
|status|SUCCESS|
|status|CANCELLED|
|status|CANCELLATION_REQUESTED|

<h2 id="tocS_ClassifierTrainingParameters">ClassifierTrainingParameters</h2>
<!-- backwards compatibility -->
<a id="schemaclassifiertrainingparameters"></a>
<a id="schema_ClassifierTrainingParameters"></a>
<a id="tocSclassifiertrainingparameters"></a>
<a id="tocsclassifiertrainingparameters"></a>

```json
{
  "training_steps": 1,
  "learning_rate": 0.0001,
  "weight_decay": 0.1,
  "warmup_fraction": 0.05,
  "epochs": 0.1,
  "seq_len": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|training_steps|integer \| null|false|none|none|
|learning_rate|number|false|none|none|
|weight_decay|number \| null|false|none|none|
|warmup_fraction|number \| null|false|none|none|
|epochs|number \| null|false|none|none|
|seq_len|integer \| null|false|none|none|

<h2 id="tocS_CompletionJobOut">CompletionJobOut</h2>
<!-- backwards compatibility -->
<a id="schemacompletionjobout"></a>
<a id="schema_CompletionJobOut"></a>
<a id="tocScompletionjobout"></a>
<a id="tocscompletionjobout"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "auto_start": true,
  "model": "string",
  "status": "QUEUED",
  "created_at": 0,
  "modified_at": 0,
  "training_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "validation_files": [],
  "object": "job",
  "fine_tuned_model": "string",
  "suffix": "string",
  "integrations": [
    {
      "type": "wandb",
      "project": "string",
      "name": "string",
      "run_name": "string",
      "url": "string"
    }
  ],
  "trained_tokens": 0,
  "metadata": {
    "expected_duration_seconds": 0,
    "cost": 0,
    "cost_currency": "string",
    "train_tokens_per_step": 0,
    "train_tokens": 0,
    "data_tokens": 0,
    "estimated_start_time": 0
  },
  "job_type": "completion",
  "hyperparameters": {
    "training_steps": 1,
    "learning_rate": 0.0001,
    "weight_decay": 0.1,
    "warmup_fraction": 0.05,
    "epochs": 0.1,
    "seq_len": 100,
    "fim_ratio": 0.9
  },
  "repositories": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the job.|
|auto_start|boolean|true|none|none|
|model|string|true|none|none|
|status|string|true|none|The current status of the fine-tuning job.|
|created_at|integer|true|none|The UNIX timestamp (in seconds) for when the fine-tuning job was created.|
|modified_at|integer|true|none|The UNIX timestamp (in seconds) for when the fine-tuning job was last modified.|
|training_files|[string(uuid)]|true|none|A list containing the IDs of uploaded files that contain training data.|
|validation_files|[string(uuid)] \| null|false|none|A list containing the IDs of uploaded files that contain validation data.|
|object|string|false|none|The object type of the fine-tuning job.|
|fine_tuned_model|string \| null|false|none|The name of the fine-tuned model that is being created. The value will be `null` if the fine-tuning job is still running.|
|suffix|string \| null|false|none|Optional text/code that adds more context for the model. When given a `prompt` and a `suffix` the model will fill what is between them. When `suffix` is not provided, the model will simply execute completion starting with `prompt`.|
|integrations|[[WandbIntegrationOut](#schemawandbintegrationout)] \| null|false|none|A list of integrations enabled for your fine-tuning job.|
|trained_tokens|integer \| null|false|none|Total number of tokens trained.|
|metadata|[JobMetadataOut](#schemajobmetadataout) \| null|false|none|none|
|job_type|string|false|none|The type of job (`FT` for fine-tuning).|
|hyperparameters|[CompletionTrainingParameters](#schemacompletiontrainingparameters)|true|none|none|
|repositories|[[GithubRepositoryOut](#schemagithubrepositoryout)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|QUEUED|
|status|STARTED|
|status|VALIDATING|
|status|VALIDATED|
|status|RUNNING|
|status|FAILED_VALIDATION|
|status|FAILED|
|status|SUCCESS|
|status|CANCELLED|
|status|CANCELLATION_REQUESTED|

<h2 id="tocS_CompletionTrainingParameters">CompletionTrainingParameters</h2>
<!-- backwards compatibility -->
<a id="schemacompletiontrainingparameters"></a>
<a id="schema_CompletionTrainingParameters"></a>
<a id="tocScompletiontrainingparameters"></a>
<a id="tocscompletiontrainingparameters"></a>

```json
{
  "training_steps": 1,
  "learning_rate": 0.0001,
  "weight_decay": 0.1,
  "warmup_fraction": 0.05,
  "epochs": 0.1,
  "seq_len": 100,
  "fim_ratio": 0.9
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|training_steps|integer \| null|false|none|none|
|learning_rate|number|false|none|none|
|weight_decay|number \| null|false|none|none|
|warmup_fraction|number \| null|false|none|none|
|epochs|number \| null|false|none|none|
|seq_len|integer \| null|false|none|none|
|fim_ratio|number \| null|false|none|none|

<h2 id="tocS_GithubRepositoryOut">GithubRepositoryOut</h2>
<!-- backwards compatibility -->
<a id="schemagithubrepositoryout"></a>
<a id="schema_GithubRepositoryOut"></a>
<a id="tocSgithubrepositoryout"></a>
<a id="tocsgithubrepositoryout"></a>

```json
{
  "type": "github",
  "name": "string",
  "owner": "string",
  "ref": "string",
  "weight": 1,
  "commit_id": "stringstringstringstringstringstringstri"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|name|string|true|none|none|
|owner|string|true|none|none|
|ref|string \| null|false|none|none|
|weight|number|false|none|none|
|commit_id|string|true|none|none|

<h2 id="tocS_JobMetadataOut">JobMetadataOut</h2>
<!-- backwards compatibility -->
<a id="schemajobmetadataout"></a>
<a id="schema_JobMetadataOut"></a>
<a id="tocSjobmetadataout"></a>
<a id="tocsjobmetadataout"></a>

```json
{
  "expected_duration_seconds": 0,
  "cost": 0,
  "cost_currency": "string",
  "train_tokens_per_step": 0,
  "train_tokens": 0,
  "data_tokens": 0,
  "estimated_start_time": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expected_duration_seconds|integer \| null|false|none|none|
|cost|number \| null|false|none|none|
|cost_currency|string \| null|false|none|none|
|train_tokens_per_step|integer \| null|false|none|none|
|train_tokens|integer \| null|false|none|none|
|data_tokens|integer \| null|false|none|none|
|estimated_start_time|integer \| null|false|none|none|

<h2 id="tocS_JobsOut">JobsOut</h2>
<!-- backwards compatibility -->
<a id="schemajobsout"></a>
<a id="schema_JobsOut"></a>
<a id="tocSjobsout"></a>
<a id="tocsjobsout"></a>

```json
{
  "data": [],
  "object": "list",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CompletionJobOut](#schemacompletionjobout) \| [ClassifierJobOut](#schemaclassifierjobout)]|false|none|none|
|object|string|false|none|none|
|total|integer|true|none|none|

<h2 id="tocS_WandbIntegrationOut">WandbIntegrationOut</h2>
<!-- backwards compatibility -->
<a id="schemawandbintegrationout"></a>
<a id="schema_WandbIntegrationOut"></a>
<a id="tocSwandbintegrationout"></a>
<a id="tocswandbintegrationout"></a>

```json
{
  "type": "wandb",
  "project": "string",
  "name": "string",
  "run_name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|project|string|true|none|The name of the project that the new run will be created under.|
|name|string \| null|false|none|A display name to set for the run. If not set, will use the job ID as the name.|
|run_name|string \| null|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_LegacyJobMetadataOut">LegacyJobMetadataOut</h2>
<!-- backwards compatibility -->
<a id="schemalegacyjobmetadataout"></a>
<a id="schema_LegacyJobMetadataOut"></a>
<a id="tocSlegacyjobmetadataout"></a>
<a id="tocslegacyjobmetadataout"></a>

```json
{
  "expected_duration_seconds": 220,
  "cost": 10,
  "cost_currency": "EUR",
  "train_tokens_per_step": 131072,
  "train_tokens": 1310720,
  "data_tokens": 305375,
  "estimated_start_time": 0,
  "deprecated": true,
  "details": "string",
  "epochs": 4.2922,
  "training_steps": 10,
  "object": "job.metadata"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expected_duration_seconds|integer \| null|false|none|The approximated time (in seconds) for the fine-tuning process to complete.|
|cost|number \| null|false|none|The cost of the fine-tuning job.|
|cost_currency|string \| null|false|none|The currency used for the fine-tuning job cost.|
|train_tokens_per_step|integer \| null|false|none|The number of tokens consumed by one training step.|
|train_tokens|integer \| null|false|none|The total number of tokens used during the fine-tuning process.|
|data_tokens|integer \| null|false|none|The total number of tokens in the training dataset.|
|estimated_start_time|integer \| null|false|none|none|
|deprecated|boolean|false|none|none|
|details|string|true|none|none|
|epochs|number \| null|false|none|The number of complete passes through the entire training dataset.|
|training_steps|integer \| null|false|none|The number of training steps to perform. A training step refers to a single update of the model weights during the fine-tuning process. This update is typically calculated using a batch of samples from the training dataset.|
|object|string|false|none|none|

<h2 id="tocS_ClassifierTargetIn">ClassifierTargetIn</h2>
<!-- backwards compatibility -->
<a id="schemaclassifiertargetin"></a>
<a id="schema_ClassifierTargetIn"></a>
<a id="tocSclassifiertargetin"></a>
<a id="tocsclassifiertargetin"></a>

```json
{
  "name": "string",
  "labels": [
    "string"
  ],
  "weight": 1,
  "loss_function": "single_class"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|labels|[string]|true|none|none|
|weight|number|false|none|none|
|loss_function|[FTClassifierLossFunction](#schemaftclassifierlossfunction) \| null|false|none|none|

<h2 id="tocS_ClassifierTrainingParametersIn">ClassifierTrainingParametersIn</h2>
<!-- backwards compatibility -->
<a id="schemaclassifiertrainingparametersin"></a>
<a id="schema_ClassifierTrainingParametersIn"></a>
<a id="tocSclassifiertrainingparametersin"></a>
<a id="tocsclassifiertrainingparametersin"></a>

```json
{
  "training_steps": 1,
  "learning_rate": 0.0001,
  "weight_decay": 0.1,
  "warmup_fraction": 0.05,
  "epochs": 0.1,
  "seq_len": 100
}
```

The fine-tuning hyperparameter settings used in a classifier fine-tune job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|training_steps|integer \| null|false|none|The number of training steps to perform. A training step refers to a single update of the model weights during the fine-tuning process. This update is typically calculated using a batch of samples from the training dataset.|
|learning_rate|number|false|none|A parameter describing how much to adjust the pre-trained model's weights in response to the estimated error each time the weights are updated during the fine-tuning process.|
|weight_decay|number \| null|false|none|(Advanced Usage) Weight decay adds a term to the loss function that is proportional to the sum of the squared weights. This term reduces the magnitude of the weights and prevents them from growing too large.|
|warmup_fraction|number \| null|false|none|(Advanced Usage) A parameter that specifies the percentage of the total training steps at which the learning rate warm-up phase ends. During this phase, the learning rate gradually increases from a small value to the initial learning rate, helping to stabilize the training process and improve convergence. Similar to `pct_start` in [mistral-finetune](https://github.com/mistralai/mistral-finetune)|
|epochs|number \| null|false|none|none|
|seq_len|integer \| null|false|none|none|

<h2 id="tocS_CompletionTrainingParametersIn">CompletionTrainingParametersIn</h2>
<!-- backwards compatibility -->
<a id="schemacompletiontrainingparametersin"></a>
<a id="schema_CompletionTrainingParametersIn"></a>
<a id="tocScompletiontrainingparametersin"></a>
<a id="tocscompletiontrainingparametersin"></a>

```json
{
  "training_steps": 1,
  "learning_rate": 0.0001,
  "weight_decay": 0.1,
  "warmup_fraction": 0.05,
  "epochs": 0.1,
  "seq_len": 100,
  "fim_ratio": 0.9
}
```

The fine-tuning hyperparameter settings used in a fine-tune job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|training_steps|integer \| null|false|none|The number of training steps to perform. A training step refers to a single update of the model weights during the fine-tuning process. This update is typically calculated using a batch of samples from the training dataset.|
|learning_rate|number|false|none|A parameter describing how much to adjust the pre-trained model's weights in response to the estimated error each time the weights are updated during the fine-tuning process.|
|weight_decay|number \| null|false|none|(Advanced Usage) Weight decay adds a term to the loss function that is proportional to the sum of the squared weights. This term reduces the magnitude of the weights and prevents them from growing too large.|
|warmup_fraction|number \| null|false|none|(Advanced Usage) A parameter that specifies the percentage of the total training steps at which the learning rate warm-up phase ends. During this phase, the learning rate gradually increases from a small value to the initial learning rate, helping to stabilize the training process and improve convergence. Similar to `pct_start` in [mistral-finetune](https://github.com/mistralai/mistral-finetune)|
|epochs|number \| null|false|none|none|
|seq_len|integer \| null|false|none|none|
|fim_ratio|number \| null|false|none|none|

<h2 id="tocS_FTClassifierLossFunction">FTClassifierLossFunction</h2>
<!-- backwards compatibility -->
<a id="schemaftclassifierlossfunction"></a>
<a id="schema_FTClassifierLossFunction"></a>
<a id="tocSftclassifierlossfunction"></a>
<a id="tocsftclassifierlossfunction"></a>

```json
"single_class"
```

<h2 id="tocS_GithubRepositoryIn">GithubRepositoryIn</h2>
<!-- backwards compatibility -->
<a id="schemagithubrepositoryin"></a>
<a id="schema_GithubRepositoryIn"></a>
<a id="tocSgithubrepositoryin"></a>
<a id="tocsgithubrepositoryin"></a>

```json
{
  "type": "github",
  "name": "string",
  "owner": "string",
  "ref": "string",
  "weight": 1,
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|name|string|true|none|none|
|owner|string|true|none|none|
|ref|string \| null|false|none|none|
|weight|number|false|none|none|
|token|string|true|none|none|

<h2 id="tocS_JobIn">JobIn</h2>
<!-- backwards compatibility -->
<a id="schemajobin"></a>
<a id="schema_JobIn"></a>
<a id="tocSjobin"></a>
<a id="tocsjobin"></a>

```json
{
  "model": "string",
  "training_files": [],
  "validation_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "suffix": "string",
  "integrations": [
    {
      "type": "wandb",
      "project": "string",
      "name": "string",
      "api_key": "stringstringstringstringstringstringstri",
      "run_name": "string"
    }
  ],
  "auto_start": true,
  "invalid_sample_skip_percentage": 0,
  "job_type": "completion",
  "hyperparameters": {
    "training_steps": 1,
    "learning_rate": 0.0001,
    "weight_decay": 0.1,
    "warmup_fraction": 0.05,
    "epochs": 0.1,
    "seq_len": 100,
    "fim_ratio": 0.9
  },
  "repositories": [
    {
      "type": "github",
      "name": "string",
      "owner": "string",
      "ref": "string",
      "weight": 1,
      "token": "string"
    }
  ],
  "classifier_targets": [
    {
      "name": "string",
      "labels": [
        "string"
      ],
      "weight": 1,
      "loss_function": "single_class"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|none|
|training_files|[[TrainingFile](#schematrainingfile)]|false|none|none|
|validation_files|[string(uuid)] \| null|false|none|A list containing the IDs of uploaded files that contain validation data. If you provide these files, the data is used to generate validation metrics periodically during fine-tuning. These metrics can be viewed in `checkpoints` when getting the status of a running fine-tuning job. The same data should not be present in both train and validation files.|
|suffix|string \| null|false|none|A string that will be added to your fine-tuning model name. For example, a suffix of "my-great-model" would produce a model name like `ft:open-mistral-7b:my-great-model:xxx...`|
|integrations|[[WandbIntegration](#schemawandbintegration)] \| null|false|none|A list of integrations to enable for your fine-tuning job.|
|auto_start|boolean|false|none|This field will be required in a future release.|
|invalid_sample_skip_percentage|number|false|none|none|
|job_type|[FineTuneableModelType](#schemafinetuneablemodeltype) \| null|false|none|none|
|hyperparameters|[CompletionTrainingParametersIn](#schemacompletiontrainingparametersin) \| [ClassifierTrainingParametersIn](#schemaclassifiertrainingparametersin)|true|none|none|
|repositories|[[GithubRepositoryIn](#schemagithubrepositoryin)] \| null|false|none|none|
|classifier_targets|[[ClassifierTargetIn](#schemaclassifiertargetin)] \| null|false|none|none|

<h2 id="tocS_TrainingFile">TrainingFile</h2>
<!-- backwards compatibility -->
<a id="schematrainingfile"></a>
<a id="schema_TrainingFile"></a>
<a id="tocStrainingfile"></a>
<a id="tocstrainingfile"></a>

```json
{
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "weight": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_id|string(uuid)|true|none|none|
|weight|number|false|none|none|

<h2 id="tocS_WandbIntegration">WandbIntegration</h2>
<!-- backwards compatibility -->
<a id="schemawandbintegration"></a>
<a id="schema_WandbIntegration"></a>
<a id="tocSwandbintegration"></a>
<a id="tocswandbintegration"></a>

```json
{
  "type": "wandb",
  "project": "string",
  "name": "string",
  "api_key": "stringstringstringstringstringstringstri",
  "run_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|project|string|true|none|The name of the project that the new run will be created under.|
|name|string \| null|false|none|A display name to set for the run. If not set, will use the job ID as the name.|
|api_key|string|true|none|The WandB API key to use for authentication.|
|run_name|string \| null|false|none|none|

<h2 id="tocS_CheckpointOut">CheckpointOut</h2>
<!-- backwards compatibility -->
<a id="schemacheckpointout"></a>
<a id="schema_CheckpointOut"></a>
<a id="tocScheckpointout"></a>
<a id="tocscheckpointout"></a>

```json
{
  "metrics": {
    "train_loss": 0,
    "valid_loss": 0,
    "valid_mean_token_accuracy": 0
  },
  "step_number": 0,
  "created_at": 1716963433
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|[MetricOut](#schemametricout)|true|none|Metrics at the step number during the fine-tuning job. Use these metrics to assess if the training is going smoothly (loss should decrease, token accuracy should increase).|
|step_number|integer|true|none|The step number that the checkpoint was created at.|
|created_at|integer|true|none|The UNIX timestamp (in seconds) for when the checkpoint was created.|

<h2 id="tocS_ClassifierDetailedJobOut">ClassifierDetailedJobOut</h2>
<!-- backwards compatibility -->
<a id="schemaclassifierdetailedjobout"></a>
<a id="schema_ClassifierDetailedJobOut"></a>
<a id="tocSclassifierdetailedjobout"></a>
<a id="tocsclassifierdetailedjobout"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "auto_start": true,
  "model": "string",
  "status": "QUEUED",
  "created_at": 0,
  "modified_at": 0,
  "training_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "validation_files": [],
  "object": "job",
  "fine_tuned_model": "string",
  "suffix": "string",
  "integrations": [
    {
      "type": "wandb",
      "project": "string",
      "name": "string",
      "run_name": "string",
      "url": "string"
    }
  ],
  "trained_tokens": 0,
  "metadata": {
    "expected_duration_seconds": 0,
    "cost": 0,
    "cost_currency": "string",
    "train_tokens_per_step": 0,
    "train_tokens": 0,
    "data_tokens": 0,
    "estimated_start_time": 0
  },
  "job_type": "classifier",
  "hyperparameters": {
    "training_steps": 1,
    "learning_rate": 0.0001,
    "weight_decay": 0.1,
    "warmup_fraction": 0.05,
    "epochs": 0.1,
    "seq_len": 100
  },
  "events": [],
  "checkpoints": [],
  "classifier_targets": [
    {
      "name": "string",
      "labels": [
        "string"
      ],
      "weight": 0,
      "loss_function": "single_class"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|auto_start|boolean|true|none|none|
|model|string|true|none|none|
|status|string|true|none|none|
|created_at|integer|true|none|none|
|modified_at|integer|true|none|none|
|training_files|[string(uuid)]|true|none|none|
|validation_files|[string(uuid)] \| null|false|none|none|
|object|string|false|none|none|
|fine_tuned_model|string \| null|false|none|none|
|suffix|string \| null|false|none|none|
|integrations|[[WandbIntegrationOut](#schemawandbintegrationout)] \| null|false|none|none|
|trained_tokens|integer \| null|false|none|none|
|metadata|[JobMetadataOut](#schemajobmetadataout) \| null|false|none|none|
|job_type|string|false|none|none|
|hyperparameters|[ClassifierTrainingParameters](#schemaclassifiertrainingparameters)|true|none|none|
|events|[[EventOut](#schemaeventout)]|false|none|Event items are created every time the status of a fine-tuning job changes. The timestamped list of all events is accessible here.|
|checkpoints|[[CheckpointOut](#schemacheckpointout)]|false|none|none|
|classifier_targets|[[ClassifierTargetOut](#schemaclassifiertargetout)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|QUEUED|
|status|STARTED|
|status|VALIDATING|
|status|VALIDATED|
|status|RUNNING|
|status|FAILED_VALIDATION|
|status|FAILED|
|status|SUCCESS|
|status|CANCELLED|
|status|CANCELLATION_REQUESTED|

<h2 id="tocS_ClassifierTargetOut">ClassifierTargetOut</h2>
<!-- backwards compatibility -->
<a id="schemaclassifiertargetout"></a>
<a id="schema_ClassifierTargetOut"></a>
<a id="tocSclassifiertargetout"></a>
<a id="tocsclassifiertargetout"></a>

```json
{
  "name": "string",
  "labels": [
    "string"
  ],
  "weight": 0,
  "loss_function": "single_class"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|labels|[string]|true|none|none|
|weight|number|true|none|none|
|loss_function|[FTClassifierLossFunction](#schemaftclassifierlossfunction)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|loss_function|single_class|
|loss_function|multi_class|

<h2 id="tocS_CompletionDetailedJobOut">CompletionDetailedJobOut</h2>
<!-- backwards compatibility -->
<a id="schemacompletiondetailedjobout"></a>
<a id="schema_CompletionDetailedJobOut"></a>
<a id="tocScompletiondetailedjobout"></a>
<a id="tocscompletiondetailedjobout"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "auto_start": true,
  "model": "string",
  "status": "QUEUED",
  "created_at": 0,
  "modified_at": 0,
  "training_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "validation_files": [],
  "object": "job",
  "fine_tuned_model": "string",
  "suffix": "string",
  "integrations": [
    {
      "type": "wandb",
      "project": "string",
      "name": "string",
      "run_name": "string",
      "url": "string"
    }
  ],
  "trained_tokens": 0,
  "metadata": {
    "expected_duration_seconds": 0,
    "cost": 0,
    "cost_currency": "string",
    "train_tokens_per_step": 0,
    "train_tokens": 0,
    "data_tokens": 0,
    "estimated_start_time": 0
  },
  "job_type": "completion",
  "hyperparameters": {
    "training_steps": 1,
    "learning_rate": 0.0001,
    "weight_decay": 0.1,
    "warmup_fraction": 0.05,
    "epochs": 0.1,
    "seq_len": 100,
    "fim_ratio": 0.9
  },
  "repositories": [],
  "events": [],
  "checkpoints": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|auto_start|boolean|true|none|none|
|model|string|true|none|none|
|status|string|true|none|none|
|created_at|integer|true|none|none|
|modified_at|integer|true|none|none|
|training_files|[string(uuid)]|true|none|none|
|validation_files|[string(uuid)] \| null|false|none|none|
|object|string|false|none|none|
|fine_tuned_model|string \| null|false|none|none|
|suffix|string \| null|false|none|none|
|integrations|[[WandbIntegrationOut](#schemawandbintegrationout)] \| null|false|none|none|
|trained_tokens|integer \| null|false|none|none|
|metadata|[JobMetadataOut](#schemajobmetadataout) \| null|false|none|none|
|job_type|string|false|none|none|
|hyperparameters|[CompletionTrainingParameters](#schemacompletiontrainingparameters)|true|none|none|
|repositories|[[GithubRepositoryOut](#schemagithubrepositoryout)]|false|none|none|
|events|[[EventOut](#schemaeventout)]|false|none|Event items are created every time the status of a fine-tuning job changes. The timestamped list of all events is accessible here.|
|checkpoints|[[CheckpointOut](#schemacheckpointout)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|QUEUED|
|status|STARTED|
|status|VALIDATING|
|status|VALIDATED|
|status|RUNNING|
|status|FAILED_VALIDATION|
|status|FAILED|
|status|SUCCESS|
|status|CANCELLED|
|status|CANCELLATION_REQUESTED|

<h2 id="tocS_EventOut">EventOut</h2>
<!-- backwards compatibility -->
<a id="schemaeventout"></a>
<a id="schema_EventOut"></a>
<a id="tocSeventout"></a>
<a id="tocseventout"></a>

```json
{
  "name": "string",
  "data": {},
  "created_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the event.|
|data|object \| null|false|none|none|
|created_at|integer|true|none|The UNIX timestamp (in seconds) of the event.|

<h2 id="tocS_MetricOut">MetricOut</h2>
<!-- backwards compatibility -->
<a id="schemametricout"></a>
<a id="schema_MetricOut"></a>
<a id="tocSmetricout"></a>
<a id="tocsmetricout"></a>

```json
{
  "train_loss": 0,
  "valid_loss": 0,
  "valid_mean_token_accuracy": 0
}
```

Metrics at the step number during the fine-tuning job. Use these metrics to assess if the training is going smoothly (loss should decrease, token accuracy should increase).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|train_loss|number \| null|false|none|none|
|valid_loss|number \| null|false|none|none|
|valid_mean_token_accuracy|number \| null|false|none|none|

<h2 id="tocS_ClassifierFTModelOut">ClassifierFTModelOut</h2>
<!-- backwards compatibility -->
<a id="schemaclassifierftmodelout"></a>
<a id="schema_ClassifierFTModelOut"></a>
<a id="tocSclassifierftmodelout"></a>
<a id="tocsclassifierftmodelout"></a>

```json
{
  "id": "string",
  "object": "model",
  "created": 0,
  "owned_by": "string",
  "workspace_id": "string",
  "root": "string",
  "root_version": "string",
  "archived": true,
  "name": "string",
  "description": "string",
  "capabilities": {
    "completion_chat": true,
    "completion_fim": false,
    "function_calling": false,
    "fine_tuning": false,
    "classification": false
  },
  "max_context_length": 32768,
  "aliases": [],
  "job": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "classifier_targets": [
    {
      "name": "string",
      "labels": [
        "string"
      ],
      "weight": 0,
      "loss_function": "single_class"
    }
  ],
  "model_type": "classifier"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|object|string|false|none|none|
|created|integer|true|none|none|
|owned_by|string|true|none|none|
|workspace_id|string|true|none|none|
|root|string|true|none|none|
|root_version|string|true|none|none|
|archived|boolean|true|none|none|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|
|capabilities|[FTModelCapabilitiesOut](#schemaftmodelcapabilitiesout)|true|none|none|
|max_context_length|integer|false|none|none|
|aliases|[string]|false|none|none|
|job|string(uuid)|true|none|none|
|classifier_targets|[[ClassifierTargetOut](#schemaclassifiertargetout)]|true|none|none|
|model_type|string|false|none|none|

<h2 id="tocS_CompletionFTModelOut">CompletionFTModelOut</h2>
<!-- backwards compatibility -->
<a id="schemacompletionftmodelout"></a>
<a id="schema_CompletionFTModelOut"></a>
<a id="tocScompletionftmodelout"></a>
<a id="tocscompletionftmodelout"></a>

```json
{
  "id": "string",
  "object": "model",
  "created": 0,
  "owned_by": "string",
  "workspace_id": "string",
  "root": "string",
  "root_version": "string",
  "archived": true,
  "name": "string",
  "description": "string",
  "capabilities": {
    "completion_chat": true,
    "completion_fim": false,
    "function_calling": false,
    "fine_tuning": false,
    "classification": false
  },
  "max_context_length": 32768,
  "aliases": [],
  "job": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "model_type": "completion"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|object|string|false|none|none|
|created|integer|true|none|none|
|owned_by|string|true|none|none|
|workspace_id|string|true|none|none|
|root|string|true|none|none|
|root_version|string|true|none|none|
|archived|boolean|true|none|none|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|
|capabilities|[FTModelCapabilitiesOut](#schemaftmodelcapabilitiesout)|true|none|none|
|max_context_length|integer|false|none|none|
|aliases|[string]|false|none|none|
|job|string(uuid)|true|none|none|
|model_type|string|false|none|none|

<h2 id="tocS_FTModelCapabilitiesOut">FTModelCapabilitiesOut</h2>
<!-- backwards compatibility -->
<a id="schemaftmodelcapabilitiesout"></a>
<a id="schema_FTModelCapabilitiesOut"></a>
<a id="tocSftmodelcapabilitiesout"></a>
<a id="tocsftmodelcapabilitiesout"></a>

```json
{
  "completion_chat": true,
  "completion_fim": false,
  "function_calling": false,
  "fine_tuning": false,
  "classification": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion_chat|boolean|false|none|none|
|completion_fim|boolean|false|none|none|
|function_calling|boolean|false|none|none|
|fine_tuning|boolean|false|none|none|
|classification|boolean|false|none|none|

<h2 id="tocS_UpdateFTModelIn">UpdateFTModelIn</h2>
<!-- backwards compatibility -->
<a id="schemaupdateftmodelin"></a>
<a id="schema_UpdateFTModelIn"></a>
<a id="tocSupdateftmodelin"></a>
<a id="tocsupdateftmodelin"></a>

```json
{
  "name": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|

<h2 id="tocS_ArchiveFTModelOut">ArchiveFTModelOut</h2>
<!-- backwards compatibility -->
<a id="schemaarchiveftmodelout"></a>
<a id="schema_ArchiveFTModelOut"></a>
<a id="tocSarchiveftmodelout"></a>
<a id="tocsarchiveftmodelout"></a>

```json
{
  "id": "string",
  "object": "model",
  "archived": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|object|string|false|none|none|
|archived|boolean|false|none|none|

<h2 id="tocS_UnarchiveFTModelOut">UnarchiveFTModelOut</h2>
<!-- backwards compatibility -->
<a id="schemaunarchiveftmodelout"></a>
<a id="schema_UnarchiveFTModelOut"></a>
<a id="tocSunarchiveftmodelout"></a>
<a id="tocsunarchiveftmodelout"></a>

```json
{
  "id": "string",
  "object": "model",
  "archived": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|object|string|false|none|none|
|archived|boolean|false|none|none|

<h2 id="tocS_BatchJobStatus">BatchJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemabatchjobstatus"></a>
<a id="schema_BatchJobStatus"></a>
<a id="tocSbatchjobstatus"></a>
<a id="tocsbatchjobstatus"></a>

```json
"QUEUED"
```

<h2 id="tocS_BatchError">BatchError</h2>
<!-- backwards compatibility -->
<a id="schemabatcherror"></a>
<a id="schema_BatchError"></a>
<a id="tocSbatcherror"></a>
<a id="tocsbatcherror"></a>

```json
{
  "message": "string",
  "count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|count|integer|false|none|none|

<h2 id="tocS_BatchJobOut">BatchJobOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchjobout"></a>
<a id="schema_BatchJobOut"></a>
<a id="tocSbatchjobout"></a>
<a id="tocsbatchjobout"></a>

```json
{
  "id": "string",
  "object": "batch",
  "input_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "metadata": {},
  "endpoint": "string",
  "model": "string",
  "agent_id": "string",
  "output_file": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "error_file": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "errors": [
    {
      "message": "string",
      "count": 1
    }
  ],
  "outputs": [
    {}
  ],
  "status": "QUEUED",
  "created_at": 0,
  "total_requests": 0,
  "completed_requests": 0,
  "succeeded_requests": 0,
  "failed_requests": 0,
  "started_at": 0,
  "completed_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|object|string|false|none|none|
|input_files|[string(uuid)]|true|none|none|
|metadata|object \| null|false|none|none|
|endpoint|string|true|none|none|
|model|string \| null|false|none|none|
|agent_id|string \| null|false|none|none|
|output_file|string(uuid) \| null|false|none|none|
|error_file|string(uuid) \| null|false|none|none|
|errors|[[BatchError](#schemabatcherror)]|true|none|none|
|outputs|[object] \| null|false|none|none|
|status|[BatchJobStatus](#schemabatchjobstatus)|true|none|none|
|created_at|integer|true|none|none|
|total_requests|integer|true|none|none|
|completed_requests|integer|true|none|none|
|succeeded_requests|integer|true|none|none|
|failed_requests|integer|true|none|none|
|started_at|integer \| null|false|none|none|
|completed_at|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|QUEUED|
|status|RUNNING|
|status|SUCCESS|
|status|FAILED|
|status|TIMEOUT_EXCEEDED|
|status|CANCELLATION_REQUESTED|
|status|CANCELLED|

<h2 id="tocS_BatchJobsOut">BatchJobsOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchjobsout"></a>
<a id="schema_BatchJobsOut"></a>
<a id="tocSbatchjobsout"></a>
<a id="tocsbatchjobsout"></a>

```json
{
  "data": [],
  "object": "list",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BatchJobOut](#schemabatchjobout)]|false|none|none|
|object|string|false|none|none|
|total|integer|true|none|none|

<h2 id="tocS_ApiEndpoint">ApiEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaapiendpoint"></a>
<a id="schema_ApiEndpoint"></a>
<a id="tocSapiendpoint"></a>
<a id="tocsapiendpoint"></a>

```json
"/v1/chat/completions"
```

<h2 id="tocS_BatchJobIn">BatchJobIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchjobin"></a>
<a id="schema_BatchJobIn"></a>
<a id="tocSbatchjobin"></a>
<a id="tocsbatchjobin"></a>

```json
{
  "input_files": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "requests": [
    {
      "custom_id": "string",
      "body": {}
    }
  ],
  "endpoint": "/v1/chat/completions",
  "model": "mistral-small-latest",
  "agent_id": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "timeout_hours": 24
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input_files|[string(uuid)] \| null|false|none|The list of input files to be used for batch inference, these files should be `jsonl` files, containing the input data corresponding to the bory request for the batch inference in a "body" field. An example of such file is the following: ```json {"custom_id": "0", "body": {"max_tokens": 100, "messages": [{"role": "user", "content": "What is the best French cheese?"}]}} {"custom_id": "1", "body": {"max_tokens": 100, "messages": [{"role": "user", "content": "What is the best French wine?"}]}} ```|
|requests|[[BatchRequest](#schemabatchrequest)] \| null|false|none|none|
|endpoint|[ApiEndpoint](#schemaapiendpoint)|true|none|The endpoint to be used for batch inference.|
|model|string \| null|false|none|The model to be used for batch inference.|
|agent_id|string \| null|false|none|In case you want to use a specific agent from the **deprecated** agents api for batch inference, you can specify the agent ID here.|
|metadata|object \| null|false|none|The metadata of your choice to be associated with the batch inference job.|
|timeout_hours|integer|false|none|The timeout in hours for the batch inference job.|

#### Enumerated Values

|Property|Value|
|---|---|
|endpoint|/v1/chat/completions|
|endpoint|/v1/embeddings|
|endpoint|/v1/fim/completions|
|endpoint|/v1/moderations|
|endpoint|/v1/chat/moderations|
|endpoint|/v1/ocr|
|endpoint|/v1/classifications|
|endpoint|/v1/chat/classifications|
|endpoint|/v1/conversations|
|endpoint|/v1/audio/transcriptions|

<h2 id="tocS_BatchRequest">BatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchrequest"></a>
<a id="schema_BatchRequest"></a>
<a id="tocSbatchrequest"></a>
<a id="tocsbatchrequest"></a>

```json
{
  "custom_id": "string",
  "body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_id|string \| null|false|none|none|
|body|object|true|none|none|

<h2 id="tocS_AssistantMessage">AssistantMessage</h2>
<!-- backwards compatibility -->
<a id="schemaassistantmessage"></a>
<a id="schema_AssistantMessage"></a>
<a id="tocSassistantmessage"></a>
<a id="tocsassistantmessage"></a>

```json
{
  "role": "assistant",
  "content": "string",
  "tool_calls": [
    {
      "id": "null",
      "type": "function",
      "function": {
        "name": "string",
        "arguments": {}
      },
      "index": 0
    }
  ],
  "prefix": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|false|none|none|
|content|string \| null \| [[ContentChunk](#schemacontentchunk)]|false|none|none|
|tool_calls|[[ToolCall](#schematoolcall)] \| null|false|none|none|
|prefix|boolean|false|none|Set this to `true` when adding an assistant message as prefix to condition the model response. The role of the prefix message is to force the model to start its answer by the content of the message.|

<h2 id="tocS_AudioChunk">AudioChunk</h2>
<!-- backwards compatibility -->
<a id="schemaaudiochunk"></a>
<a id="schema_AudioChunk"></a>
<a id="tocSaudiochunk"></a>
<a id="tocsaudiochunk"></a>

```json
{
  "type": "input_audio",
  "input_audio": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|input_audio|string \| string(binary)|true|none|none|

<h2 id="tocS_ChatCompletionRequest">ChatCompletionRequest</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionrequest"></a>
<a id="schema_ChatCompletionRequest"></a>
<a id="tocSchatcompletionrequest"></a>
<a id="tocschatcompletionrequest"></a>

```json
{
  "model": "mistral-large-latest",
  "temperature": 0,
  "top_p": 1,
  "max_tokens": 0,
  "stream": false,
  "stop": "string",
  "random_seed": 0,
  "metadata": {},
  "messages": [
    {
      "role": "user",
      "content": "Who is the best French painter? Answer in one short sentence."
    }
  ],
  "response_format": {
    "type": "text"
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "tool_choice": "auto",
  "presence_penalty": 0,
  "frequency_penalty": 0,
  "n": 1,
  "prediction": {
    "type": "content",
    "content": ""
  },
  "parallel_tool_calls": true,
  "prompt_mode": "reasoning",
  "reasoning_effort": "high",
  "guardrails": null,
  "prompt_cache_key": "string",
  "safe_prompt": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|ID of the model to use. You can use the [List Available Models](/api/#tag/models/operation/list_models_v1_models_get) API to see all of your available models, or see our [Model overview](/models) for model descriptions.|
|temperature|number \| null|false|none|What sampling temperature to use, we recommend between 0.0 and 0.7. Higher values like 0.7 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both. The default value varies depending on the model you are targeting. Call the `/models` endpoint to retrieve the appropriate value.|
|top_p|number|false|none|Nucleus sampling, where the model considers the results of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or `temperature` but not both.|
|max_tokens|integer \| null|false|none|The maximum number of tokens to generate in the completion. The token count of your prompt plus `max_tokens` cannot exceed the model's context length.|
|stream|boolean|false|none|Whether to stream back partial progress. If set, tokens will be sent as data-only server-side events as they become available, with the stream terminated by a data: [DONE] message. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|stop|string \| [string]|false|none|Stop generation if this token is detected. Or if one of these tokens is detected when providing an array|
|random_seed|integer \| null|false|none|The seed to use for random sampling. If set, different calls will generate deterministic results.|
|metadata|object \| null|false|none|none|
|messages|[[SystemMessage](#schemasystemmessage) \| [UserMessage](#schemausermessage) \| [AssistantMessage](#schemaassistantmessage) \| [ToolMessage](#schematoolmessage)]|true|none|The prompt(s) to generate completions for, encoded as a list of dict with role and content.|
|response_format|[ResponseFormat](#schemaresponseformat)|false|none|Specify the format that the model must output. By default it will use `{ "type": "text" }`. Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is in JSON. When using JSON mode you MUST also instruct the model to produce JSON yourself with a system or a user message. Setting to `{ "type": "json_schema" }` enables JSON schema mode, which guarantees the message the model generates is in JSON and follows the schema you provide.|
|tools|[[Tool](#schematool)] \| null|false|none|A list of tools the model may call. Use this to provide a list of functions the model may generate JSON inputs for.|
|tool_choice|[ToolChoice](#schematoolchoice) \| [ToolChoiceEnum](#schematoolchoiceenum)|false|none|Controls which (if any) tool is called by the model. `none` means the model will not call any tool and instead generates a message. `auto` means the model can pick between generating a message or calling one or more tools. `any` or `required` means the model must call one or more tools. Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.|
|presence_penalty|number|false|none|The `presence_penalty` determines how much the model penalizes the repetition of words or phrases. A higher presence penalty encourages the model to use a wider variety of words and phrases, making the output more diverse and creative.|
|frequency_penalty|number|false|none|The `frequency_penalty` penalizes the repetition of words based on their frequency in the generated text. A higher frequency penalty discourages the model from repeating words that have already appeared frequently in the output, promoting diversity and reducing repetition.|
|n|integer \| null|false|none|Number of completions to return for each request, input tokens are only billed once.|
|prediction|[Prediction](#schemaprediction)|false|none|Enable users to specify expected results, optimizing response times by leveraging known or predictable content. This approach is especially effective for updating text documents or code files with minimal changes, reducing latency while maintaining high-quality results.|
|parallel_tool_calls|boolean|false|none|Whether to enable parallel function calling during tool use, when enabled the model can call multiple tools in parallel.|
|prompt_mode|[MistralPromptMode](#schemamistralpromptmode) \| null|false|none|Allows toggling between the reasoning mode and no system prompt. When set to `reasoning` the system prompt for reasoning models will be used. **Deprecated for reasoning models - use `reasoning_effort` parameter instead.**|
|reasoning_effort|string|false|none|Controls the reasoning effort level for reasoning models. "high" enables comprehensive reasoning traces, "none" disables reasoning effort.|
|guardrails|[[GuardrailConfig](#schemaguardrailconfig)] \| null|false|none|A list of guardrail configurations to apply to this request. Each guardrail specifies a moderation type, categories with thresholds to evaluate, and an action to take on violation.|
|prompt_cache_key|string \| null|false|none|A cache key to enable prompt caching. When provided, the API will attempt to reuse previously computed tokens for requests sharing the same prefix (e.g. multi-turn conversations or requests with a similar system prompt). Cached tokens are billed at 10% of the standard input token price.|
|safe_prompt|boolean|false|none|Whether to inject a safety prompt before all conversations.|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|high|
|reasoning_effort|none|

<h2 id="tocS_ChatModerationRequest">ChatModerationRequest</h2>
<!-- backwards compatibility -->
<a id="schemachatmoderationrequest"></a>
<a id="schema_ChatModerationRequest"></a>
<a id="tocSchatmoderationrequest"></a>
<a id="tocschatmoderationrequest"></a>

```json
{
  "input": [
    {
      "role": "system",
      "content": "string"
    }
  ],
  "model": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[[SystemMessage](#schemasystemmessage) \| [UserMessage](#schemausermessage) \| [AssistantMessage](#schemaassistantmessage) \| [ToolMessage](#schematoolmessage)] \| [[[SystemMessage](#schemasystemmessage) \| [UserMessage](#schemausermessage) \| [AssistantMessage](#schemaassistantmessage) \| [ToolMessage](#schematoolmessage)]]|true|none|Chat to classify|
|model|string|true|none|none|

<h2 id="tocS_ClassificationRequest">ClassificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationrequest"></a>
<a id="schema_ClassificationRequest"></a>
<a id="tocSclassificationrequest"></a>
<a id="tocsclassificationrequest"></a>

```json
{
  "model": "mistral-moderation-latest",
  "metadata": {},
  "input": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|ID of the model to use.|
|metadata|object \| null|false|none|none|
|input|string \| [string]|true|none|Text to classify.|

<h2 id="tocS_EmbeddingDtype">EmbeddingDtype</h2>
<!-- backwards compatibility -->
<a id="schemaembeddingdtype"></a>
<a id="schema_EmbeddingDtype"></a>
<a id="tocSembeddingdtype"></a>
<a id="tocsembeddingdtype"></a>

```json
"float"
```

<h2 id="tocS_EmbeddingRequest">EmbeddingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaembeddingrequest"></a>
<a id="schema_EmbeddingRequest"></a>
<a id="tocSembeddingrequest"></a>
<a id="tocsembeddingrequest"></a>

```json
{
  "model": "mistral-embed",
  "metadata": {},
  "input": [
    "Embed this sentence.",
    "As well as this one."
  ],
  "output_dimension": 1,
  "output_dtype": "float",
  "encoding_format": "float"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|ID of the model to use.|
|metadata|object \| null|false|none|none|
|input|string \| [string]|true|none|Text to embed.|
|output_dimension|integer \| null|false|none|The dimension of the output embeddings when feature available. If not provided, a default output dimension will be used.|
|output_dtype|[EmbeddingDtype](#schemaembeddingdtype)|false|none|The data type of the output embeddings when feature available. If not provided, a default output data type will be used.|
|encoding_format|[EncodingFormat](#schemaencodingformat)|false|none|The format of embeddings in the response.|

#### Enumerated Values

|Property|Value|
|---|---|
|output_dtype|float|
|output_dtype|int8|
|output_dtype|uint8|
|output_dtype|binary|
|output_dtype|ubinary|
|encoding_format|float|
|encoding_format|base64|

<h2 id="tocS_EncodingFormat">EncodingFormat</h2>
<!-- backwards compatibility -->
<a id="schemaencodingformat"></a>
<a id="schema_EncodingFormat"></a>
<a id="tocSencodingformat"></a>
<a id="tocsencodingformat"></a>

```json
"float"
```

<h2 id="tocS_FIMCompletionRequest">FIMCompletionRequest</h2>
<!-- backwards compatibility -->
<a id="schemafimcompletionrequest"></a>
<a id="schema_FIMCompletionRequest"></a>
<a id="tocSfimcompletionrequest"></a>
<a id="tocsfimcompletionrequest"></a>

```json
{
  "model": "codestral-latest",
  "temperature": 0,
  "top_p": 1,
  "max_tokens": 0,
  "stream": false,
  "stop": "string",
  "random_seed": 0,
  "metadata": {},
  "prompt": "def",
  "suffix": "return a+b",
  "min_tokens": 0,
  "prompt_cache_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|ID of the model with FIM to use.|
|temperature|number \| null|false|none|What sampling temperature to use, we recommend between 0.0 and 0.7. Higher values like 0.7 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both. The default value varies depending on the model you are targeting. Call the `/models` endpoint to retrieve the appropriate value.|
|top_p|number|false|none|Nucleus sampling, where the model considers the results of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or `temperature` but not both.|
|max_tokens|integer \| null|false|none|The maximum number of tokens to generate in the completion. The token count of your prompt plus `max_tokens` cannot exceed the model's context length.|
|stream|boolean|false|none|Whether to stream back partial progress. If set, tokens will be sent as data-only server-side events as they become available, with the stream terminated by a data: [DONE] message. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|stop|string \| [string]|false|none|Stop generation if this token is detected. Or if one of these tokens is detected when providing an array|
|random_seed|integer \| null|false|none|The seed to use for random sampling. If set, different calls will generate deterministic results.|
|metadata|object \| null|false|none|none|
|prompt|string|true|none|The text/code to complete.|
|suffix|string \| null|false|none|Optional text/code that adds more context for the model. When given a `prompt` and a `suffix` the model will fill what is between them. When `suffix` is not provided, the model will simply execute completion starting with `prompt`.|
|min_tokens|integer \| null|false|none|The minimum number of tokens to generate in the completion.|
|prompt_cache_key|string \| null|false|none|A cache key to enable prompt caching. When provided, the API will attempt to reuse previously computed tokens for requests sharing the same prefix (e.g. multi-turn conversations or requests with a similar system prompt). Cached tokens are billed at 10% of the standard input token price.|

<h2 id="tocS_FileChunk">FileChunk</h2>
<!-- backwards compatibility -->
<a id="schemafilechunk"></a>
<a id="schema_FileChunk"></a>
<a id="tocSfilechunk"></a>
<a id="tocsfilechunk"></a>

```json
{
  "type": "file",
  "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|file_id|string(uuid)|true|none|none|

<h2 id="tocS_FunctionCall">FunctionCall</h2>
<!-- backwards compatibility -->
<a id="schemafunctioncall"></a>
<a id="schema_FunctionCall"></a>
<a id="tocSfunctioncall"></a>
<a id="tocsfunctioncall"></a>

```json
{
  "name": "string",
  "arguments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|arguments|object \| string|true|none|none|

<h2 id="tocS_FunctionName">FunctionName</h2>
<!-- backwards compatibility -->
<a id="schemafunctionname"></a>
<a id="schema_FunctionName"></a>
<a id="tocSfunctionname"></a>
<a id="tocsfunctionname"></a>

```json
{
  "name": "string"
}
```

this restriction of `Function` is used to select a specific function to call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_InstructRequest">InstructRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstructrequest"></a>
<a id="schema_InstructRequest"></a>
<a id="tocSinstructrequest"></a>
<a id="tocsinstructrequest"></a>

```json
{
  "messages": [
    {
      "role": "system",
      "content": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[SystemMessage](#schemasystemmessage) \| [UserMessage](#schemausermessage) \| [AssistantMessage](#schemaassistantmessage) \| [ToolMessage](#schematoolmessage)]|true|none|none|

<h2 id="tocS_MistralPromptMode">MistralPromptMode</h2>
<!-- backwards compatibility -->
<a id="schemamistralpromptmode"></a>
<a id="schema_MistralPromptMode"></a>
<a id="tocSmistralpromptmode"></a>
<a id="tocsmistralpromptmode"></a>

```json
"reasoning"
```

Available options to the prompt_mode argument on the chat completion endpoint.
Values represent high-level intent. Assignment to actual SPs is handled internally.
System prompt may include knowledge cutoff date, model capabilities, tone to use, safety guidelines, etc.

<h2 id="tocS_OCRAsideTextBlock">OCRAsideTextBlock</h2>
<!-- backwards compatibility -->
<a id="schemaocrasidetextblock"></a>
<a id="schema_OCRAsideTextBlock"></a>
<a id="tocSocrasidetextblock"></a>
<a id="tocsocrasidetextblock"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "content": "string",
  "type": "aside_text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|none|
|top_left_y|integer|true|none|none|
|bottom_right_x|integer|true|none|none|
|bottom_right_y|integer|true|none|none|
|content|string|true|none|Text/markdown/html content of this block|
|type|string|false|none|none|

<h2 id="tocS_OCRCaptionBlock">OCRCaptionBlock</h2>
<!-- backwards compatibility -->
<a id="schemaocrcaptionblock"></a>
<a id="schema_OCRCaptionBlock"></a>
<a id="tocSocrcaptionblock"></a>
<a id="tocsocrcaptionblock"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "content": "string",
  "type": "caption"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|none|
|top_left_y|integer|true|none|none|
|bottom_right_x|integer|true|none|none|
|bottom_right_y|integer|true|none|none|
|content|string|true|none|Text/markdown/html content of this block|
|type|string|false|none|none|

<h2 id="tocS_OCRCodeBlock">OCRCodeBlock</h2>
<!-- backwards compatibility -->
<a id="schemaocrcodeblock"></a>
<a id="schema_OCRCodeBlock"></a>
<a id="tocSocrcodeblock"></a>
<a id="tocsocrcodeblock"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "content": "string",
  "type": "code"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|none|
|top_left_y|integer|true|none|none|
|bottom_right_x|integer|true|none|none|
|bottom_right_y|integer|true|none|none|
|content|string|true|none|Text/markdown/html content of this block|
|type|string|false|none|none|

<h2 id="tocS_OCRConfidenceScore">OCRConfidenceScore</h2>
<!-- backwards compatibility -->
<a id="schemaocrconfidencescore"></a>
<a id="schema_OCRConfidenceScore"></a>
<a id="tocSocrconfidencescore"></a>
<a id="tocsocrconfidencescore"></a>

```json
{
  "text": "string",
  "confidence": 0,
  "start_index": 0
}
```

Confidence score for a token or word in OCR output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The word or text segment|
|confidence|number|true|none|Confidence score (0-1)|
|start_index|integer|true|none|Start index of the text in the page markdown string|

<h2 id="tocS_OCREquationBlock">OCREquationBlock</h2>
<!-- backwards compatibility -->
<a id="schemaocrequationblock"></a>
<a id="schema_OCREquationBlock"></a>
<a id="tocSocrequationblock"></a>
<a id="tocsocrequationblock"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "content": "string",
  "type": "equation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|none|
|top_left_y|integer|true|none|none|
|bottom_right_x|integer|true|none|none|
|bottom_right_y|integer|true|none|none|
|content|string|true|none|Text/markdown/html content of this block|
|type|string|false|none|none|

<h2 id="tocS_OCRFooterBlock">OCRFooterBlock</h2>
<!-- backwards compatibility -->
<a id="schemaocrfooterblock"></a>
<a id="schema_OCRFooterBlock"></a>
<a id="tocSocrfooterblock"></a>
<a id="tocsocrfooterblock"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "content": "string",
  "type": "footer"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|none|
|top_left_y|integer|true|none|none|
|bottom_right_x|integer|true|none|none|
|bottom_right_y|integer|true|none|none|
|content|string|true|none|Text/markdown/html content of this block|
|type|string|false|none|none|

<h2 id="tocS_OCRHeaderBlock">OCRHeaderBlock</h2>
<!-- backwards compatibility -->
<a id="schemaocrheaderblock"></a>
<a id="schema_OCRHeaderBlock"></a>
<a id="tocSocrheaderblock"></a>
<a id="tocsocrheaderblock"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "content": "string",
  "type": "header"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|none|
|top_left_y|integer|true|none|none|
|bottom_right_x|integer|true|none|none|
|bottom_right_y|integer|true|none|none|
|content|string|true|none|Text/markdown/html content of this block|
|type|string|false|none|none|

<h2 id="tocS_OCRImageBlock">OCRImageBlock</h2>
<!-- backwards compatibility -->
<a id="schemaocrimageblock"></a>
<a id="schema_OCRImageBlock"></a>
<a id="tocSocrimageblock"></a>
<a id="tocsocrimageblock"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "content": "string",
  "type": "image",
  "image_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|none|
|top_left_y|integer|true|none|none|
|bottom_right_x|integer|true|none|none|
|bottom_right_y|integer|true|none|none|
|content|string|true|none|Text/markdown/html content of this block|
|type|string|false|none|none|
|image_id|string|true|none|References the corresponding entry in OCRPageObject.images|

<h2 id="tocS_OCRImageObject">OCRImageObject</h2>
<!-- backwards compatibility -->
<a id="schemaocrimageobject"></a>
<a id="schema_OCRImageObject"></a>
<a id="tocSocrimageobject"></a>
<a id="tocsocrimageobject"></a>

```json
{
  "id": "string",
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "image_base64": "string",
  "image_annotation": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Image ID for extracted image in a page|
|top_left_x|integer \| null|true|none|X coordinate of top-left corner of the extracted image|
|top_left_y|integer \| null|true|none|Y coordinate of top-left corner of the extracted image|
|bottom_right_x|integer \| null|true|none|X coordinate of bottom-right corner of the extracted image|
|bottom_right_y|integer \| null|true|none|Y coordinate of bottom-right corner of the extracted image|
|image_base64|string \| null|false|none|Base64 string of the extracted image|
|image_annotation|string \| null|false|none|Annotation of the extracted image in json str|

<h2 id="tocS_OCRListBlock">OCRListBlock</h2>
<!-- backwards compatibility -->
<a id="schemaocrlistblock"></a>
<a id="schema_OCRListBlock"></a>
<a id="tocSocrlistblock"></a>
<a id="tocsocrlistblock"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "content": "string",
  "type": "list"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|none|
|top_left_y|integer|true|none|none|
|bottom_right_x|integer|true|none|none|
|bottom_right_y|integer|true|none|none|
|content|string|true|none|Text/markdown/html content of this block|
|type|string|false|none|none|

<h2 id="tocS_OCRPageConfidenceScores">OCRPageConfidenceScores</h2>
<!-- backwards compatibility -->
<a id="schemaocrpageconfidencescores"></a>
<a id="schema_OCRPageConfidenceScores"></a>
<a id="tocSocrpageconfidencescores"></a>
<a id="tocsocrpageconfidencescores"></a>

```json
{
  "word_confidence_scores": [
    {
      "text": "string",
      "confidence": 0,
      "start_index": 0
    }
  ],
  "average_page_confidence_score": 0,
  "minimum_page_confidence_score": 0
}
```

Confidence scores for an OCR page at various granularities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|word_confidence_scores|[[OCRConfidenceScore](#schemaocrconfidencescore)]|false|none|Word-level confidence scores (populated only for 'word' granularity)|
|average_page_confidence_score|number|true|none|Average confidence score for the page|
|minimum_page_confidence_score|number|true|none|Minimum confidence score for the page|

<h2 id="tocS_OCRPageDimensions">OCRPageDimensions</h2>
<!-- backwards compatibility -->
<a id="schemaocrpagedimensions"></a>
<a id="schema_OCRPageDimensions"></a>
<a id="tocSocrpagedimensions"></a>
<a id="tocsocrpagedimensions"></a>

```json
{
  "dpi": 0,
  "height": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dpi|integer|true|none|Dots per inch of the page-image|
|height|integer|true|none|Height of the image in pixels|
|width|integer|true|none|Width of the image in pixels|

<h2 id="tocS_OCRPageObject">OCRPageObject</h2>
<!-- backwards compatibility -->
<a id="schemaocrpageobject"></a>
<a id="schema_OCRPageObject"></a>
<a id="tocSocrpageobject"></a>
<a id="tocsocrpageobject"></a>

```json
{
  "index": 0,
  "markdown": "string",
  "images": [
    {
      "id": "string",
      "top_left_x": 0,
      "top_left_y": 0,
      "bottom_right_x": 0,
      "bottom_right_y": 0,
      "image_base64": "string",
      "image_annotation": "string"
    }
  ],
  "tables": [
    {
      "id": "string",
      "content": "string",
      "format": "markdown",
      "word_confidence_scores": [
        {
          "text": "string",
          "confidence": 0,
          "start_index": 0
        }
      ]
    }
  ],
  "hyperlinks": [
    "string"
  ],
  "header": "string",
  "footer": "string",
  "dimensions": {
    "dpi": 0,
    "height": 0,
    "width": 0
  },
  "confidence_scores": {
    "word_confidence_scores": [
      {
        "text": "string",
        "confidence": 0,
        "start_index": 0
      }
    ],
    "average_page_confidence_score": 0,
    "minimum_page_confidence_score": 0
  },
  "blocks": [
    {
      "top_left_x": 0,
      "top_left_y": 0,
      "bottom_right_x": 0,
      "bottom_right_y": 0,
      "content": "string",
      "type": "text"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer|true|none|The page index in a pdf document starting from 0|
|markdown|string|true|none|The markdown string response of the page|
|images|[[OCRImageObject](#schemaocrimageobject)]|true|none|List of all extracted images in the page|
|tables|[[OCRTableObject](#schemaocrtableobject)]|false|none|List of all extracted tables in the page|
|hyperlinks|[string]|false|none|List of all hyperlinks in the page|
|header|string \| null|false|none|Header of the page|
|footer|string \| null|false|none|Footer of the page|
|dimensions|[OCRPageDimensions](#schemaocrpagedimensions) \| null|true|none|The dimensions of the PDF Page's screenshot image|
|confidence_scores|[OCRPageConfidenceScores](#schemaocrpageconfidencescores) \| null|false|none|Confidence scores for the OCR page (populated when confidence_scores_granularity is set)|
|blocks|[[OCRTextBlock](#schemaocrtextblock) \| [OCRListBlock](#schemaocrlistblock) \| [OCRImageBlock](#schemaocrimageblock) \| [OCRTableBlock](#schemaocrtableblock) \| [OCRTitleBlock](#schemaocrtitleblock) \| [OCREquationBlock](#schemaocrequationblock) \| [OCRCaptionBlock](#schemaocrcaptionblock) \| [OCRCodeBlock](#schemaocrcodeblock) \| [OCRReferencesBlock](#schemaocrreferencesblock) \| [OCRAsideTextBlock](#schemaocrasidetextblock) \| [OCRHeaderBlock](#schemaocrheaderblock) \| [OCRFooterBlock](#schemaocrfooterblock) \| [OCRSignatureBlock](#schemaocrsignatureblock)] \| null|false|none|Paragraph-level bounding boxes for all content blocks in reading order (populated when include_blocks is True)|

<h2 id="tocS_OCRReferencesBlock">OCRReferencesBlock</h2>
<!-- backwards compatibility -->
<a id="schemaocrreferencesblock"></a>
<a id="schema_OCRReferencesBlock"></a>
<a id="tocSocrreferencesblock"></a>
<a id="tocsocrreferencesblock"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "content": "string",
  "type": "references"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|none|
|top_left_y|integer|true|none|none|
|bottom_right_x|integer|true|none|none|
|bottom_right_y|integer|true|none|none|
|content|string|true|none|Text/markdown/html content of this block|
|type|string|false|none|none|

<h2 id="tocS_OCRRequest">OCRRequest</h2>
<!-- backwards compatibility -->
<a id="schemaocrrequest"></a>
<a id="schema_OCRRequest"></a>
<a id="tocSocrrequest"></a>
<a id="tocsocrrequest"></a>

```json
{
  "model": "string",
  "id": "string",
  "document": {
    "type": "file",
    "file_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "pages": "string",
  "include_image_base64": true,
  "image_limit": 0,
  "image_min_size": 0,
  "bbox_annotation_format": {
    "type": "text"
  },
  "document_annotation_format": {
    "type": "text"
  },
  "document_annotation_prompt": "string",
  "table_format": "markdown",
  "extract_header": false,
  "extract_footer": false,
  "include_blocks": false,
  "confidence_scores_granularity": "word"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string \| null|true|none|none|
|id|string|false|none|none|
|document|[FileChunk](#schemafilechunk) \| [DocumentURLChunk](#schemadocumenturlchunk) \| [ImageURLChunk](#schemaimageurlchunk)|true|none|Document to run OCR on|
|pages|string \| [integer] \| null|false|none|Specific pages to process. Accepts a list of integers or a string of comma-separated numbers and ranges (e.g. '0,1,2' or '0-5' or '0,2-4'). Page numbers start from 0.|
|include_image_base64|boolean \| null|false|none|Include image URLs in response|
|image_limit|integer \| null|false|none|Max images to extract|
|image_min_size|integer \| null|false|none|Minimum height and width of image to extract|
|bbox_annotation_format|[ResponseFormat](#schemaresponseformat) \| null|false|none|Structured output class for extracting useful information from each extracted bounding box / image from document. Only json_schema is valid for this field|
|document_annotation_format|[ResponseFormat](#schemaresponseformat) \| null|false|none|Structured output class for extracting useful information from the entire document. Only json_schema is valid for this field|
|document_annotation_prompt|string \| null|false|none|Optional prompt to guide the model in extracting structured output from the entire document. A document_annotation_format must be provided.|
|table_format|string \| null|false|none|none|
|extract_header|boolean|false|none|none|
|extract_footer|boolean|false|none|none|
|include_blocks|boolean|false|none|Return paragraph-level bounding boxes for all content blocks in the response|
|confidence_scores_granularity|string \| null|false|none|Granularity for confidence scores: 'word' (per-word scores) or 'page' (aggregate only). Defaults to None (no confidence scores) to keep response payload small.|

<h2 id="tocS_OCRResponse">OCRResponse</h2>
<!-- backwards compatibility -->
<a id="schemaocrresponse"></a>
<a id="schema_OCRResponse"></a>
<a id="tocSocrresponse"></a>
<a id="tocsocrresponse"></a>

```json
{
  "pages": [
    {
      "index": 0,
      "markdown": "string",
      "images": [
        {
          "id": "string",
          "top_left_x": 0,
          "top_left_y": 0,
          "bottom_right_x": 0,
          "bottom_right_y": 0,
          "image_base64": "string",
          "image_annotation": "string"
        }
      ],
      "tables": [
        {
          "id": "string",
          "content": "string",
          "format": "markdown",
          "word_confidence_scores": [
            {
              "text": "string",
              "confidence": 0,
              "start_index": 0
            }
          ]
        }
      ],
      "hyperlinks": [
        "string"
      ],
      "header": "string",
      "footer": "string",
      "dimensions": {
        "dpi": 0,
        "height": 0,
        "width": 0
      },
      "confidence_scores": {
        "word_confidence_scores": [
          {
            "text": "string",
            "confidence": 0,
            "start_index": 0
          }
        ],
        "average_page_confidence_score": 0,
        "minimum_page_confidence_score": 0
      },
      "blocks": [
        {
          "top_left_x": 0,
          "top_left_y": 0,
          "bottom_right_x": 0,
          "bottom_right_y": 0,
          "content": "string",
          "type": "text"
        }
      ]
    }
  ],
  "model": "string",
  "document_annotation": "string",
  "usage_info": {
    "pages_processed": 0,
    "doc_size_bytes": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pages|[[OCRPageObject](#schemaocrpageobject)]|true|none|List of OCR info for pages.|
|model|string|true|none|The model used to generate the OCR.|
|document_annotation|string \| null|false|none|Formatted response in the request_format if provided in json str|
|usage_info|[OCRUsageInfo](#schemaocrusageinfo)|true|none|Usage info for the OCR request.|

<h2 id="tocS_OCRSignatureBlock">OCRSignatureBlock</h2>
<!-- backwards compatibility -->
<a id="schemaocrsignatureblock"></a>
<a id="schema_OCRSignatureBlock"></a>
<a id="tocSocrsignatureblock"></a>
<a id="tocsocrsignatureblock"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "content": "string",
  "type": "signature"
}
```

Signature region. ``content`` is the transcribed name when legible, else ``""``.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|none|
|top_left_y|integer|true|none|none|
|bottom_right_x|integer|true|none|none|
|bottom_right_y|integer|true|none|none|
|content|string|true|none|Text/markdown/html content of this block|
|type|string|false|none|none|

<h2 id="tocS_OCRTableBlock">OCRTableBlock</h2>
<!-- backwards compatibility -->
<a id="schemaocrtableblock"></a>
<a id="schema_OCRTableBlock"></a>
<a id="tocSocrtableblock"></a>
<a id="tocsocrtableblock"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "content": "string",
  "type": "table",
  "table_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|none|
|top_left_y|integer|true|none|none|
|bottom_right_x|integer|true|none|none|
|bottom_right_y|integer|true|none|none|
|content|string|true|none|Text/markdown/html content of this block|
|type|string|false|none|none|
|table_id|string \| null|false|none|References the corresponding entry in OCRPageObject.tables, when tables are extracted|

<h2 id="tocS_OCRTableObject">OCRTableObject</h2>
<!-- backwards compatibility -->
<a id="schemaocrtableobject"></a>
<a id="schema_OCRTableObject"></a>
<a id="tocSocrtableobject"></a>
<a id="tocsocrtableobject"></a>

```json
{
  "id": "string",
  "content": "string",
  "format": "markdown",
  "word_confidence_scores": [
    {
      "text": "string",
      "confidence": 0,
      "start_index": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Table ID for extracted table in a page|
|content|string|true|none|Content of the table in the given format|
|format|string|true|none|Format of the table|
|word_confidence_scores|[[OCRConfidenceScore](#schemaocrconfidencescore)] \| null|false|none|Per-word confidence scores for the table content. Returned when confidence_scores_granularity is set to 'word'.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|markdown|
|format|html|

<h2 id="tocS_OCRTextBlock">OCRTextBlock</h2>
<!-- backwards compatibility -->
<a id="schemaocrtextblock"></a>
<a id="schema_OCRTextBlock"></a>
<a id="tocSocrtextblock"></a>
<a id="tocsocrtextblock"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "content": "string",
  "type": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|none|
|top_left_y|integer|true|none|none|
|bottom_right_x|integer|true|none|none|
|bottom_right_y|integer|true|none|none|
|content|string|true|none|Text/markdown/html content of this block|
|type|string|false|none|none|

<h2 id="tocS_OCRTitleBlock">OCRTitleBlock</h2>
<!-- backwards compatibility -->
<a id="schemaocrtitleblock"></a>
<a id="schema_OCRTitleBlock"></a>
<a id="tocSocrtitleblock"></a>
<a id="tocsocrtitleblock"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0,
  "content": "string",
  "type": "title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|none|
|top_left_y|integer|true|none|none|
|bottom_right_x|integer|true|none|none|
|bottom_right_y|integer|true|none|none|
|content|string|true|none|Text/markdown/html content of this block|
|type|string|false|none|none|

<h2 id="tocS_OCRUsageInfo">OCRUsageInfo</h2>
<!-- backwards compatibility -->
<a id="schemaocrusageinfo"></a>
<a id="schema_OCRUsageInfo"></a>
<a id="tocSocrusageinfo"></a>
<a id="tocsocrusageinfo"></a>

```json
{
  "pages_processed": 0,
  "doc_size_bytes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pages_processed|integer|true|none|Number of pages processed|
|doc_size_bytes|integer \| null|false|none|Document size in bytes|

<h2 id="tocS_SystemMessage">SystemMessage</h2>
<!-- backwards compatibility -->
<a id="schemasystemmessage"></a>
<a id="schema_SystemMessage"></a>
<a id="tocSsystemmessage"></a>
<a id="tocssystemmessage"></a>

```json
{
  "role": "system",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|false|none|none|
|content|string \| [[SystemMessageContentChunks](#schemasystemmessagecontentchunks)]|true|none|none|

<h2 id="tocS_Tool">Tool</h2>
<!-- backwards compatibility -->
<a id="schematool"></a>
<a id="schema_Tool"></a>
<a id="tocStool"></a>
<a id="tocstool"></a>

```json
{
  "type": "function",
  "function": {
    "name": "string",
    "description": "",
    "strict": false,
    "parameters": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ToolTypes](#schematooltypes)|false|none|none|
|function|[Function](#schemafunction)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|function|

<h2 id="tocS_ToolCall">ToolCall</h2>
<!-- backwards compatibility -->
<a id="schematoolcall"></a>
<a id="schema_ToolCall"></a>
<a id="tocStoolcall"></a>
<a id="tocstoolcall"></a>

```json
{
  "id": "null",
  "type": "function",
  "function": {
    "name": "string",
    "arguments": {}
  },
  "index": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|type|[ToolTypes](#schematooltypes)|false|none|none|
|function|[FunctionCall](#schemafunctioncall)|true|none|none|
|index|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|function|

<h2 id="tocS_ToolChoice">ToolChoice</h2>
<!-- backwards compatibility -->
<a id="schematoolchoice"></a>
<a id="schema_ToolChoice"></a>
<a id="tocStoolchoice"></a>
<a id="tocstoolchoice"></a>

```json
{
  "type": "function",
  "function": {
    "name": "string"
  }
}
```

ToolChoice is either a ToolChoiceEnum or a ToolChoice

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ToolTypes](#schematooltypes)|false|none|none|
|function|[FunctionName](#schemafunctionname)|true|none|this restriction of `Function` is used to select a specific function to call|

#### Enumerated Values

|Property|Value|
|---|---|
|type|function|

<h2 id="tocS_ToolMessage">ToolMessage</h2>
<!-- backwards compatibility -->
<a id="schematoolmessage"></a>
<a id="schema_ToolMessage"></a>
<a id="tocStoolmessage"></a>
<a id="tocstoolmessage"></a>

```json
{
  "role": "tool",
  "content": "string",
  "tool_call_id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|false|none|none|
|content|string \| null \| [[ContentChunk](#schemacontentchunk)]|true|none|none|
|tool_call_id|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_ToolTypes">ToolTypes</h2>
<!-- backwards compatibility -->
<a id="schematooltypes"></a>
<a id="schema_ToolTypes"></a>
<a id="tocStooltypes"></a>
<a id="tocstooltypes"></a>

```json
"function"
```

<h2 id="tocS_TranscriptionResponse">TranscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionresponse"></a>
<a id="schema_TranscriptionResponse"></a>
<a id="tocStranscriptionresponse"></a>
<a id="tocstranscriptionresponse"></a>

```json
{
  "model": "string",
  "text": "string",
  "language": "string",
  "segments": [
    {
      "type": "transcription_segment",
      "text": "string",
      "start": 0,
      "end": 0,
      "score": 0,
      "speaker_id": "string"
    }
  ],
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_audio_seconds": 0,
    "num_cached_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "prompt_token_details": {
      "cached_tokens": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|none|
|text|string|true|none|none|
|language|string \| null|true|none|none|
|segments|[[TranscriptionSegmentChunk](#schematranscriptionsegmentchunk)]|false|none|none|
|usage|[UsageInfo](#schemausageinfo)|true|none|none|

<h2 id="tocS_TranscriptionSegmentChunk">TranscriptionSegmentChunk</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionsegmentchunk"></a>
<a id="schema_TranscriptionSegmentChunk"></a>
<a id="tocStranscriptionsegmentchunk"></a>
<a id="tocstranscriptionsegmentchunk"></a>

```json
{
  "type": "transcription_segment",
  "text": "string",
  "start": 0,
  "end": 0,
  "score": 0,
  "speaker_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|text|string|true|none|none|
|start|number|true|none|none|
|end|number|true|none|none|
|score|number \| null|false|none|none|
|speaker_id|string \| null|false|none|none|

<h2 id="tocS_PromptTokensDetails">PromptTokensDetails</h2>
<!-- backwards compatibility -->
<a id="schemaprompttokensdetails"></a>
<a id="schema_PromptTokensDetails"></a>
<a id="tocSprompttokensdetails"></a>
<a id="tocsprompttokensdetails"></a>

```json
{
  "cached_tokens": 0
}
```

Token usage details for the prompt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cached_tokens|integer|false|none|none|

<h2 id="tocS_UsageInfo">UsageInfo</h2>
<!-- backwards compatibility -->
<a id="schemausageinfo"></a>
<a id="schema_UsageInfo"></a>
<a id="tocSusageinfo"></a>
<a id="tocsusageinfo"></a>

```json
{
  "prompt_tokens": 0,
  "completion_tokens": 0,
  "total_tokens": 0,
  "prompt_audio_seconds": 0,
  "num_cached_tokens": 0,
  "prompt_tokens_details": {
    "cached_tokens": 0
  },
  "prompt_token_details": {
    "cached_tokens": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prompt_tokens|integer|true|none|none|
|completion_tokens|integer|true|none|none|
|total_tokens|integer|true|none|none|
|prompt_audio_seconds|integer \| null|false|none|none|
|num_cached_tokens|integer \| null|false|none|none|
|prompt_tokens_details|[PromptTokensDetails](#schemaprompttokensdetails) \| null|false|none|none|
|prompt_token_details|[PromptTokensDetails](#schemaprompttokensdetails) \| null|false|none|none|

<h2 id="tocS_SpeechRequest">SpeechRequest</h2>
<!-- backwards compatibility -->
<a id="schemaspeechrequest"></a>
<a id="schema_SpeechRequest"></a>
<a id="tocSspeechrequest"></a>
<a id="tocsspeechrequest"></a>

```json
{
  "model": "string",
  "stream": false,
  "voice_id": "string",
  "ref_audio": "string",
  "input": "string",
  "response_format": "pcm"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string \| null|false|none|none|
|stream|boolean|false|none|none|
|voice_id|string \| null|false|none|The preset or custom voice to use for generating the speech.|
|ref_audio|string \| null|false|none|The base64-encoded audio reference for zero-shot voice cloning.|
|input|string|true|none|Text to generate speech from.|
|response_format|[SpeechOutputFormat](#schemaspeechoutputformat)|false|none|Output audio format. Defaults to mp3.|

#### Enumerated Values

|Property|Value|
|---|---|
|response_format|pcm|
|response_format|wav|
|response_format|mp3|
|response_format|flac|
|response_format|opus|

<h2 id="tocS_SpeechOutputFormat">SpeechOutputFormat</h2>
<!-- backwards compatibility -->
<a id="schemaspeechoutputformat"></a>
<a id="schema_SpeechOutputFormat"></a>
<a id="tocSspeechoutputformat"></a>
<a id="tocsspeechoutputformat"></a>

```json
"pcm"
```

<h2 id="tocS_SpeechResponse">SpeechResponse</h2>
<!-- backwards compatibility -->
<a id="schemaspeechresponse"></a>
<a id="schema_SpeechResponse"></a>
<a id="tocSspeechresponse"></a>
<a id="tocsspeechresponse"></a>

```json
{
  "audio_data": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_data|string|true|none|Base64 encoded audio data|

<h2 id="tocS_SpeechStreamAudioDelta">SpeechStreamAudioDelta</h2>
<!-- backwards compatibility -->
<a id="schemaspeechstreamaudiodelta"></a>
<a id="schema_SpeechStreamAudioDelta"></a>
<a id="tocSspeechstreamaudiodelta"></a>
<a id="tocsspeechstreamaudiodelta"></a>

```json
{
  "type": "speech.audio.delta",
  "audio_data": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|audio_data|string|true|none|none|

<h2 id="tocS_SpeechStreamDone">SpeechStreamDone</h2>
<!-- backwards compatibility -->
<a id="schemaspeechstreamdone"></a>
<a id="schema_SpeechStreamDone"></a>
<a id="tocSspeechstreamdone"></a>
<a id="tocsspeechstreamdone"></a>

```json
{
  "type": "speech.audio.done",
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_audio_seconds": 0,
    "num_cached_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "prompt_token_details": {
      "cached_tokens": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|usage|[UsageInfo](#schemausageinfo)|true|none|none|

<h2 id="tocS_SpeechStreamEvents">SpeechStreamEvents</h2>
<!-- backwards compatibility -->
<a id="schemaspeechstreamevents"></a>
<a id="schema_SpeechStreamEvents"></a>
<a id="tocSspeechstreamevents"></a>
<a id="tocsspeechstreamevents"></a>

```json
{
  "event": "speech.audio.delta",
  "data": {
    "type": "speech.audio.delta",
    "audio_data": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|string|true|none|none|
|data|[SpeechStreamAudioDelta](#schemaspeechstreamaudiodelta) \| [SpeechStreamDone](#schemaspeechstreamdone)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event|speech.audio.delta|
|event|speech.audio.done|

<h2 id="tocS_VoiceCreateRequest">VoiceCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemavoicecreaterequest"></a>
<a id="schema_VoiceCreateRequest"></a>
<a id="tocSvoicecreaterequest"></a>
<a id="tocsvoicecreaterequest"></a>

```json
{
  "name": "string",
  "slug": "string",
  "languages": [],
  "gender": "string",
  "age": 0,
  "tags": [
    "string"
  ],
  "color": "string",
  "retention_notice": 30,
  "sample_audio": "string",
  "sample_filename": "string"
}
```

Request model for creating a new voice with base64 audio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|slug|string \| null|false|none|none|
|languages|[string]|false|none|none|
|gender|string \| null|false|none|none|
|age|integer \| null|false|none|none|
|tags|[string] \| null|false|none|none|
|color|string \| null|false|none|none|
|retention_notice|integer|false|none|none|
|sample_audio|string|true|none|Base64-encoded audio file|
|sample_filename|string \| null|false|none|Original filename for extension detection|

<h2 id="tocS_VoiceListResponse">VoiceListResponse</h2>
<!-- backwards compatibility -->
<a id="schemavoicelistresponse"></a>
<a id="schema_VoiceListResponse"></a>
<a id="tocSvoicelistresponse"></a>
<a id="tocsvoicelistresponse"></a>

```json
{
  "items": [
    {
      "name": "string",
      "slug": "string",
      "languages": [],
      "gender": "string",
      "age": 0,
      "tags": [
        "string"
      ],
      "color": "string",
      "retention_notice": 30,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "1970-01-01T00:00:00Z",
      "user_id": "string"
    }
  ],
  "total": 0,
  "page": 0,
  "page_size": 0,
  "total_pages": 0
}
```

Schema for voice list response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[VoiceResponse](#schemavoiceresponse)]|true|none|none|
|total|integer|true|none|none|
|page|integer|true|none|none|
|page_size|integer|true|none|none|
|total_pages|integer|true|none|none|

<h2 id="tocS_VoiceResponse">VoiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemavoiceresponse"></a>
<a id="schema_VoiceResponse"></a>
<a id="tocSvoiceresponse"></a>
<a id="tocsvoiceresponse"></a>

```json
{
  "name": "string",
  "slug": "string",
  "languages": [],
  "gender": "string",
  "age": 0,
  "tags": [
    "string"
  ],
  "color": "string",
  "retention_notice": 30,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "user_id": "string"
}
```

Schema for voice response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|slug|string \| null|false|none|none|
|languages|[string]|false|none|none|
|gender|string \| null|false|none|none|
|age|integer \| null|false|none|none|
|tags|[string] \| null|false|none|none|
|color|string \| null|false|none|none|
|retention_notice|integer|false|none|none|
|id|string(uuid)|true|none|none|
|created_at|string(date-time)|true|none|none|
|user_id|string \| null|true|none|none|

<h2 id="tocS_VoiceUpdateRequest">VoiceUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemavoiceupdaterequest"></a>
<a id="schema_VoiceUpdateRequest"></a>
<a id="tocSvoiceupdaterequest"></a>
<a id="tocsvoiceupdaterequest"></a>

```json
{
  "name": "string",
  "languages": [
    "string"
  ],
  "gender": "string",
  "age": 0,
  "tags": [
    "string"
  ]
}
```

Request model for partially updating voice metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|languages|[string] \| null|false|none|none|
|gender|string \| null|false|none|none|
|age|integer \| null|false|none|none|
|tags|[string] \| null|false|none|none|

<h2 id="tocS_UserMessage">UserMessage</h2>
<!-- backwards compatibility -->
<a id="schemausermessage"></a>
<a id="schema_UserMessage"></a>
<a id="tocSusermessage"></a>
<a id="tocsusermessage"></a>

```json
{
  "role": "user",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|false|none|none|
|content|string \| null \| [[ContentChunk](#schemacontentchunk)]|true|none|none|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
"string"
```

The File object (not file name) to be uploaded.
 To upload a file and specify a custom file name you should format your request as such:
 ```bash
 file=@path/to/your/file.jsonl;filename=custom_name.jsonl
 ```
 Otherwise, you can just keep the original file name:
 ```bash
 file=@path/to/your/file.jsonl
 ```

<h2 id="tocS_TimestampGranularity">TimestampGranularity</h2>
<!-- backwards compatibility -->
<a id="schematimestampgranularity"></a>
<a id="schema_TimestampGranularity"></a>
<a id="tocStimestampgranularity"></a>
<a id="tocstimestampgranularity"></a>

```json
"segment"
```

<h2 id="tocS_AudioTranscriptionRequest">AudioTranscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaudiotranscriptionrequest"></a>
<a id="schema_AudioTranscriptionRequest"></a>
<a id="tocSaudiotranscriptionrequest"></a>
<a id="tocsaudiotranscriptionrequest"></a>

```json
{
  "model": "voxtral-mini-latest",
  "file": null,
  "file_url": null,
  "file_id": null,
  "language": null,
  "temperature": null,
  "stream": false,
  "diarize": false,
  "context_bias": [],
  "timestamp_granularities": [
    "segment"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|ID of the model to be used.|
|file|[File](#schemafile) \| null|false|none|none|
|file_url|string(uri) \| null|false|none|Url of a file to be transcribed|
|file_id|string \| null|false|none|ID of a file uploaded to /v1/files|
|language|string \| null|false|none|Language of the audio, e.g. 'en'. Providing the language can boost accuracy.|
|temperature|number \| null|false|none|none|
|stream|boolean|false|none|none|
|diarize|boolean|false|none|none|
|context_bias|[string]|false|none|none|
|timestamp_granularities|[[TimestampGranularity](#schematimestampgranularity)]|false|none|Granularities of timestamps to include in the response.|

#### Enumerated Values

|Property|Value|
|---|---|
|timestamp_granularities|segment|
|timestamp_granularities|word|

<h2 id="tocS_AudioTranscriptionRequestStream">AudioTranscriptionRequestStream</h2>
<!-- backwards compatibility -->
<a id="schemaaudiotranscriptionrequeststream"></a>
<a id="schema_AudioTranscriptionRequestStream"></a>
<a id="tocSaudiotranscriptionrequeststream"></a>
<a id="tocsaudiotranscriptionrequeststream"></a>

```json
{
  "model": "string",
  "file": null,
  "file_url": null,
  "file_id": null,
  "language": null,
  "temperature": null,
  "stream": true,
  "diarize": false,
  "context_bias": [],
  "timestamp_granularities": [
    "segment"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|none|
|file|[File](#schemafile) \| null|false|none|none|
|file_url|string(uri) \| null|false|none|Url of a file to be transcribed|
|file_id|string \| null|false|none|ID of a file uploaded to /v1/files|
|language|string \| null|false|none|Language of the audio, e.g. 'en'. Providing the language can boost accuracy.|
|temperature|number \| null|false|none|none|
|stream|boolean|false|none|none|
|diarize|boolean|false|none|none|
|context_bias|[string]|false|none|none|
|timestamp_granularities|[[TimestampGranularity](#schematimestampgranularity)]|false|none|Granularities of timestamps to include in the response.|

#### Enumerated Values

|Property|Value|
|---|---|
|timestamp_granularities|segment|
|timestamp_granularities|word|

<h2 id="tocS_TranscriptionStreamLanguage">TranscriptionStreamLanguage</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionstreamlanguage"></a>
<a id="schema_TranscriptionStreamLanguage"></a>
<a id="tocStranscriptionstreamlanguage"></a>
<a id="tocstranscriptionstreamlanguage"></a>

```json
{
  "type": "transcription.language",
  "audio_language": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|audio_language|string|true|none|none|

<h2 id="tocS_TranscriptionStreamSegmentDelta">TranscriptionStreamSegmentDelta</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionstreamsegmentdelta"></a>
<a id="schema_TranscriptionStreamSegmentDelta"></a>
<a id="tocStranscriptionstreamsegmentdelta"></a>
<a id="tocstranscriptionstreamsegmentdelta"></a>

```json
{
  "type": "transcription.segment",
  "text": "string",
  "start": 0,
  "end": 0,
  "speaker_id": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|text|string|true|none|none|
|start|number|true|none|none|
|end|number|true|none|none|
|speaker_id|string \| null|false|none|none|

<h2 id="tocS_TranscriptionStreamTextDelta">TranscriptionStreamTextDelta</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionstreamtextdelta"></a>
<a id="schema_TranscriptionStreamTextDelta"></a>
<a id="tocStranscriptionstreamtextdelta"></a>
<a id="tocstranscriptionstreamtextdelta"></a>

```json
{
  "type": "transcription.text.delta",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|text|string|true|none|none|

<h2 id="tocS_TranscriptionStreamDone">TranscriptionStreamDone</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionstreamdone"></a>
<a id="schema_TranscriptionStreamDone"></a>
<a id="tocStranscriptionstreamdone"></a>
<a id="tocstranscriptionstreamdone"></a>

```json
{
  "model": "string",
  "text": "string",
  "language": "string",
  "segments": [
    {
      "type": "transcription_segment",
      "text": "string",
      "start": 0,
      "end": 0,
      "score": 0,
      "speaker_id": "string"
    }
  ],
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_audio_seconds": 0,
    "num_cached_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "prompt_token_details": {
      "cached_tokens": 0
    }
  },
  "type": "transcription.done"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|none|
|text|string|true|none|none|
|language|string \| null|true|none|none|
|segments|[[TranscriptionSegmentChunk](#schematranscriptionsegmentchunk)]|false|none|none|
|usage|[UsageInfo](#schemausageinfo)|true|none|none|
|type|string|false|none|none|

<h2 id="tocS_TranscriptionStreamEvents">TranscriptionStreamEvents</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionstreamevents"></a>
<a id="schema_TranscriptionStreamEvents"></a>
<a id="tocStranscriptionstreamevents"></a>
<a id="tocstranscriptionstreamevents"></a>

```json
{
  "event": "transcription.language",
  "data": {
    "type": "transcription.text.delta",
    "text": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[TranscriptionStreamEventTypes](#schematranscriptionstreameventtypes)|true|none|none|
|data|[TranscriptionStreamTextDelta](#schematranscriptionstreamtextdelta) \| [TranscriptionStreamLanguage](#schematranscriptionstreamlanguage) \| [TranscriptionStreamSegmentDelta](#schematranscriptionstreamsegmentdelta) \| [TranscriptionStreamDone](#schematranscriptionstreamdone)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event|transcription.language|
|event|transcription.segment|
|event|transcription.text.delta|
|event|transcription.done|

<h2 id="tocS_TranscriptionStreamEventTypes">TranscriptionStreamEventTypes</h2>
<!-- backwards compatibility -->
<a id="schematranscriptionstreameventtypes"></a>
<a id="schema_TranscriptionStreamEventTypes"></a>
<a id="tocStranscriptionstreameventtypes"></a>
<a id="tocstranscriptionstreameventtypes"></a>

```json
"transcription.language"
```

<h2 id="tocS_RealtimeTranscriptionClientMessage">RealtimeTranscriptionClientMessage</h2>
<!-- backwards compatibility -->
<a id="schemarealtimetranscriptionclientmessage"></a>
<a id="schema_RealtimeTranscriptionClientMessage"></a>
<a id="tocSrealtimetranscriptionclientmessage"></a>
<a id="tocsrealtimetranscriptionclientmessage"></a>

```json
{
  "type": "session.update",
  "session": {
    "audio_format": null,
    "target_streaming_delay_ms": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[RealtimeTranscriptionSessionUpdateMessage](#schemarealtimetranscriptionsessionupdatemessage)|false|none|none|
|*oneOf*|[RealtimeTranscriptionInputAudioAppend](#schemarealtimetranscriptioninputaudioappend)|false|none|none|
|*oneOf*|[RealtimeTranscriptionInputAudioFlush](#schemarealtimetranscriptioninputaudioflush)|false|none|none|
|*oneOf*|[RealtimeTranscriptionInputAudioEnd](#schemarealtimetranscriptioninputaudioend)|false|none|none|

<h2 id="tocS_AudioEncoding">AudioEncoding</h2>
<!-- backwards compatibility -->
<a id="schemaaudioencoding"></a>
<a id="schema_AudioEncoding"></a>
<a id="tocSaudioencoding"></a>
<a id="tocsaudioencoding"></a>

```json
"pcm_s16le"
```

<h2 id="tocS_AudioFormat">AudioFormat</h2>
<!-- backwards compatibility -->
<a id="schemaaudioformat"></a>
<a id="schema_AudioFormat"></a>
<a id="tocSaudioformat"></a>
<a id="tocsaudioformat"></a>

```json
{
  "encoding": "pcm_s16le",
  "sample_rate": 8000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|[AudioEncoding](#schemaaudioencoding)|true|none|none|
|sample_rate|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding|pcm_s16le|
|encoding|pcm_s32le|
|encoding|pcm_f16le|
|encoding|pcm_f32le|
|encoding|pcm_mulaw|
|encoding|pcm_alaw|

<h2 id="tocS_RealtimeTranscriptionInputAudioAppend">RealtimeTranscriptionInputAudioAppend</h2>
<!-- backwards compatibility -->
<a id="schemarealtimetranscriptioninputaudioappend"></a>
<a id="schema_RealtimeTranscriptionInputAudioAppend"></a>
<a id="tocSrealtimetranscriptioninputaudioappend"></a>
<a id="tocsrealtimetranscriptioninputaudioappend"></a>

```json
{
  "type": "input_audio.append",
  "audio": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|audio|string(base64)|true|none|Base64-encoded raw PCM bytes matching the current audio_format. Max decoded size: 262144 bytes.|

<h2 id="tocS_RealtimeTranscriptionInputAudioEnd">RealtimeTranscriptionInputAudioEnd</h2>
<!-- backwards compatibility -->
<a id="schemarealtimetranscriptioninputaudioend"></a>
<a id="schema_RealtimeTranscriptionInputAudioEnd"></a>
<a id="tocSrealtimetranscriptioninputaudioend"></a>
<a id="tocsrealtimetranscriptioninputaudioend"></a>

```json
{
  "type": "input_audio.end"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|

<h2 id="tocS_RealtimeTranscriptionInputAudioFlush">RealtimeTranscriptionInputAudioFlush</h2>
<!-- backwards compatibility -->
<a id="schemarealtimetranscriptioninputaudioflush"></a>
<a id="schema_RealtimeTranscriptionInputAudioFlush"></a>
<a id="tocSrealtimetranscriptioninputaudioflush"></a>
<a id="tocsrealtimetranscriptioninputaudioflush"></a>

```json
{
  "type": "input_audio.flush"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|

<h2 id="tocS_RealtimeTranscriptionSessionUpdateMessage">RealtimeTranscriptionSessionUpdateMessage</h2>
<!-- backwards compatibility -->
<a id="schemarealtimetranscriptionsessionupdatemessage"></a>
<a id="schema_RealtimeTranscriptionSessionUpdateMessage"></a>
<a id="tocSrealtimetranscriptionsessionupdatemessage"></a>
<a id="tocsrealtimetranscriptionsessionupdatemessage"></a>

```json
{
  "type": "session.update",
  "session": {
    "audio_format": null,
    "target_streaming_delay_ms": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|session|[RealtimeTranscriptionSessionUpdatePayload](#schemarealtimetranscriptionsessionupdatepayload)|true|none|none|

<h2 id="tocS_RealtimeTranscriptionSessionUpdatePayload">RealtimeTranscriptionSessionUpdatePayload</h2>
<!-- backwards compatibility -->
<a id="schemarealtimetranscriptionsessionupdatepayload"></a>
<a id="schema_RealtimeTranscriptionSessionUpdatePayload"></a>
<a id="tocSrealtimetranscriptionsessionupdatepayload"></a>
<a id="tocsrealtimetranscriptionsessionupdatepayload"></a>

```json
{
  "audio_format": null,
  "target_streaming_delay_ms": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_format|[AudioFormat](#schemaaudioformat) \| null|false|none|Set before sending audio. Audio format updates are rejected after audio starts.|
|target_streaming_delay_ms|integer \| null|false|none|Set before sending audio. Streaming delay updates are rejected after audio starts.|

<h2 id="tocS_AgentsCompletionRequest">AgentsCompletionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaagentscompletionrequest"></a>
<a id="schema_AgentsCompletionRequest"></a>
<a id="tocSagentscompletionrequest"></a>
<a id="tocsagentscompletionrequest"></a>

```json
{
  "max_tokens": 0,
  "stream": false,
  "stop": "string",
  "random_seed": 0,
  "metadata": {},
  "messages": [
    {
      "role": "user",
      "content": "Who is the best French painter? Answer in one short sentence."
    }
  ],
  "response_format": {
    "type": "text"
  },
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "",
        "strict": false,
        "parameters": {}
      }
    }
  ],
  "tool_choice": "auto",
  "presence_penalty": 0,
  "frequency_penalty": 0,
  "n": 1,
  "prediction": {
    "type": "content",
    "content": ""
  },
  "parallel_tool_calls": true,
  "prompt_mode": "reasoning",
  "reasoning_effort": "high",
  "prompt_cache_key": "string",
  "agent_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_tokens|integer \| null|false|none|The maximum number of tokens to generate in the completion. The token count of your prompt plus `max_tokens` cannot exceed the model's context length.|
|stream|boolean|false|none|Whether to stream back partial progress. If set, tokens will be sent as data-only server-side events as they become available, with the stream terminated by a data: [DONE] message. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.|
|stop|string \| [string]|false|none|Stop generation if this token is detected. Or if one of these tokens is detected when providing an array|
|random_seed|integer \| null|false|none|The seed to use for random sampling. If set, different calls will generate deterministic results.|
|metadata|object \| null|false|none|none|
|messages|[[SystemMessage](#schemasystemmessage) \| [UserMessage](#schemausermessage) \| [AssistantMessage](#schemaassistantmessage) \| [ToolMessage](#schematoolmessage)]|true|none|The prompt(s) to generate completions for, encoded as a list of dict with role and content.|
|response_format|[ResponseFormat](#schemaresponseformat)|false|none|Specify the format that the model must output. By default it will use `{ "type": "text" }`. Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is in JSON. When using JSON mode you MUST also instruct the model to produce JSON yourself with a system or a user message. Setting to `{ "type": "json_schema" }` enables JSON schema mode, which guarantees the message the model generates is in JSON and follows the schema you provide.|
|tools|[[Tool](#schematool)] \| null|false|none|none|
|tool_choice|[ToolChoice](#schematoolchoice) \| [ToolChoiceEnum](#schematoolchoiceenum)|false|none|none|
|presence_penalty|number|false|none|The `presence_penalty` determines how much the model penalizes the repetition of words or phrases. A higher presence penalty encourages the model to use a wider variety of words and phrases, making the output more diverse and creative.|
|frequency_penalty|number|false|none|The `frequency_penalty` penalizes the repetition of words based on their frequency in the generated text. A higher frequency penalty discourages the model from repeating words that have already appeared frequently in the output, promoting diversity and reducing repetition.|
|n|integer \| null|false|none|Number of completions to return for each request, input tokens are only billed once.|
|prediction|[Prediction](#schemaprediction)|false|none|Enable users to specify expected results, optimizing response times by leveraging known or predictable content. This approach is especially effective for updating text documents or code files with minimal changes, reducing latency while maintaining high-quality results.|
|parallel_tool_calls|boolean|false|none|none|
|prompt_mode|[MistralPromptMode](#schemamistralpromptmode) \| null|false|none|Allows toggling between the reasoning mode and no system prompt. When set to `reasoning` the system prompt for reasoning models will be used. **Deprecated for reasoning models - use `reasoning_effort` parameter instead.**|
|reasoning_effort|string|false|none|Controls the reasoning effort level for reasoning models. "high" enables comprehensive reasoning traces, "none" disables reasoning effort.|
|prompt_cache_key|string \| null|false|none|A cache key to enable prompt caching. When provided, the API will attempt to reuse previously computed tokens for requests sharing the same prefix (e.g. multi-turn conversations or requests with a similar system prompt). Cached tokens are billed at 10% of the standard input token price.|
|agent_id|string|true|none|The ID of the agent to use for this completion.|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|high|
|reasoning_effort|none|

<h2 id="tocS_ChatClassificationRequest">ChatClassificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemachatclassificationrequest"></a>
<a id="schema_ChatClassificationRequest"></a>
<a id="tocSchatclassificationrequest"></a>
<a id="tocschatclassificationrequest"></a>

```json
{
  "model": "string",
  "input": {
    "messages": [
      {
        "role": "system",
        "content": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|none|
|input|[ChatClassificationRequestInputs](#schemachatclassificationrequestinputs)|true|none|Chat to classify|

<h2 id="tocS_ChatClassificationRequestInputs">ChatClassificationRequestInputs</h2>
<!-- backwards compatibility -->
<a id="schemachatclassificationrequestinputs"></a>
<a id="schema_ChatClassificationRequestInputs"></a>
<a id="tocSchatclassificationrequestinputs"></a>
<a id="tocschatclassificationrequestinputs"></a>

```json
{
  "messages": [
    {
      "role": "system",
      "content": "string"
    }
  ]
}
```

Chat to classify

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[InstructRequest](#schemainstructrequest)|false|none|none|
|*anyOf*|[[InstructRequest](#schemainstructrequest)]|false|none|none|

<h2 id="tocS_ClassificationResponse">ClassificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationresponse"></a>
<a id="schema_ClassificationResponse"></a>
<a id="tocSclassificationresponse"></a>
<a id="tocsclassificationresponse"></a>

```json
{
  "id": "mod-e5cc70bb28c444948073e77776eb30ef",
  "model": "string",
  "results": [
    {
      "property1": {
        "scores": {
          "property1": 0,
          "property2": 0
        }
      },
      "property2": {
        "scores": {
          "property1": 0,
          "property2": 0
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|model|string|true|none|none|
|results|[object]|true|none|none|

<h2 id="tocS_ClassificationTargetResult">ClassificationTargetResult</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationtargetresult"></a>
<a id="schema_ClassificationTargetResult"></a>
<a id="tocSclassificationtargetresult"></a>
<a id="tocsclassificationtargetresult"></a>

```json
{
  "scores": {
    "property1": 0,
    "property2": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scores|object|true|none|none|

<h2 id="tocS_ContentChunk">ContentChunk</h2>
<!-- backwards compatibility -->
<a id="schemacontentchunk"></a>
<a id="schema_ContentChunk"></a>
<a id="tocScontentchunk"></a>
<a id="tocscontentchunk"></a>

```json
{
  "type": "text",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[TextChunk](#schematextchunk)|false|none|none|
|*oneOf*|[ImageURLChunk](#schemaimageurlchunk)|false|none|{"type":"image_url","image_url":{"url":"data:image/png;base64,iVBORw0|
|*oneOf*|[DocumentURLChunk](#schemadocumenturlchunk)|false|none|none|
|*oneOf*|[ReferenceChunk](#schemareferencechunk)|false|none|none|
|*oneOf*|[FileChunk](#schemafilechunk)|false|none|none|
|*oneOf*|[ThinkChunk](#schemathinkchunk)|false|none|none|
|*oneOf*|[AudioChunk](#schemaaudiochunk)|false|none|none|

<h2 id="tocS_ModerationResponse">ModerationResponse</h2>
<!-- backwards compatibility -->
<a id="schemamoderationresponse"></a>
<a id="schema_ModerationResponse"></a>
<a id="tocSmoderationresponse"></a>
<a id="tocsmoderationresponse"></a>

```json
{
  "id": "mod-e5cc70bb28c444948073e77776eb30ef",
  "model": "string",
  "results": [
    {
      "categories": {
        "property1": true,
        "property2": true
      },
      "category_scores": {
        "property1": 0,
        "property2": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|model|string|true|none|none|
|results|[[ModerationObject](#schemamoderationobject)]|true|none|none|

<h2 id="tocS_ModerationObject">ModerationObject</h2>
<!-- backwards compatibility -->
<a id="schemamoderationobject"></a>
<a id="schema_ModerationObject"></a>
<a id="tocSmoderationobject"></a>
<a id="tocsmoderationobject"></a>

```json
{
  "categories": {
    "property1": true,
    "property2": true
  },
  "category_scores": {
    "property1": 0,
    "property2": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|object|false|none|Moderation result thresholds|
|category_scores|object|false|none|Moderation result|

<h2 id="tocS_SystemMessageContentChunks">SystemMessageContentChunks</h2>
<!-- backwards compatibility -->
<a id="schemasystemmessagecontentchunks"></a>
<a id="schema_SystemMessageContentChunks"></a>
<a id="tocSsystemmessagecontentchunks"></a>
<a id="tocssystemmessagecontentchunks"></a>

```json
{
  "type": "text",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[TextChunk](#schematextchunk)|false|none|none|
|*oneOf*|[ThinkChunk](#schemathinkchunk)|false|none|none|

<h2 id="tocS_DocumentOut">DocumentOut</h2>
<!-- backwards compatibility -->
<a id="schemadocumentout"></a>
<a id="schema_DocumentOut"></a>
<a id="tocSdocumentout"></a>
<a id="tocsdocumentout"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "library_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "hash": "string",
  "mime_type": "string",
  "extension": "string",
  "size": 0,
  "name": "string",
  "summary": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "last_processed_at": "1970-01-01T00:00:00Z",
  "number_of_pages": 0,
  "process_status": "self_managed",
  "uploaded_by_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "uploaded_by_type": "string",
  "tokens_processing_main_content": 0,
  "tokens_processing_summary": 0,
  "url": "string",
  "attributes": {},
  "processing_status": "string",
  "tokens_processing_total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|library_id|string(uuid)|true|none|none|
|hash|string \| null|true|none|none|
|mime_type|string \| null|true|none|none|
|extension|string \| null|true|none|none|
|size|integer \| null|true|none|none|
|name|string|true|none|none|
|summary|string \| null|false|none|none|
|created_at|string(date-time)|true|none|none|
|last_processed_at|string(date-time) \| null|false|none|none|
|number_of_pages|integer \| null|false|none|none|
|process_status|[ProcessStatus](#schemaprocessstatus)|true|none|none|
|uploaded_by_id|string(uuid) \| null|true|none|none|
|uploaded_by_type|string|true|none|none|
|tokens_processing_main_content|integer \| null|false|none|none|
|tokens_processing_summary|integer \| null|false|none|none|
|url|string \| null|false|none|none|
|attributes|object \| null|false|none|none|
|processing_status|string|true|read-only|none|
|tokens_processing_total|integer|true|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|process_status|self_managed|
|process_status|missing_content|
|process_status|noop|
|process_status|done|
|process_status|todo|
|process_status|in_progress|
|process_status|error|
|process_status|waiting_for_capacity|

<h2 id="tocS_DocumentTextContent">DocumentTextContent</h2>
<!-- backwards compatibility -->
<a id="schemadocumenttextcontent"></a>
<a id="schema_DocumentTextContent"></a>
<a id="tocSdocumenttextcontent"></a>
<a id="tocsdocumenttextcontent"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|none|

<h2 id="tocS_DocumentUpdateIn">DocumentUpdateIn</h2>
<!-- backwards compatibility -->
<a id="schemadocumentupdatein"></a>
<a id="schema_DocumentUpdateIn"></a>
<a id="tocSdocumentupdatein"></a>
<a id="tocsdocumentupdatein"></a>

```json
{
  "name": "string",
  "attributes": {
    "property1": true,
    "property2": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|attributes|object \| null|false|none|none|

<h2 id="tocS_FilterCondition">FilterCondition</h2>
<!-- backwards compatibility -->
<a id="schemafiltercondition"></a>
<a id="schema_FilterCondition"></a>
<a id="tocSfiltercondition"></a>
<a id="tocsfiltercondition"></a>

```json
{
  "field": "string",
  "op": "lt",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|none|
|op|string|true|none|none|
|value|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|op|lt|
|op|lte|
|op|gt|
|op|gte|
|op|startswith|
|op|istartswith|
|op|endswith|
|op|iendswith|
|op|contains|
|op|icontains|
|op|matches|
|op|notcontains|
|op|inotcontains|
|op|eq|
|op|neq|
|op|isnull|
|op|includes|
|op|excludes|
|op|len_eq|

<h2 id="tocS_FilterGroup">FilterGroup</h2>
<!-- backwards compatibility -->
<a id="schemafiltergroup"></a>
<a id="schema_FilterGroup"></a>
<a id="tocSfiltergroup"></a>
<a id="tocsfiltergroup"></a>

```json
{
  "AND": [
    {
      "AND": [
        {}
      ],
      "OR": [
        {}
      ]
    }
  ],
  "OR": [
    {
      "AND": [
        {}
      ],
      "OR": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AND|[[FilterGroup](#schemafiltergroup) \| [FilterCondition](#schemafiltercondition)] \| null|false|none|none|
|OR|[[FilterGroup](#schemafiltergroup) \| [FilterCondition](#schemafiltercondition)] \| null|false|none|none|

<h2 id="tocS_LibraryIn">LibraryIn</h2>
<!-- backwards compatibility -->
<a id="schemalibraryin"></a>
<a id="schema_LibraryIn"></a>
<a id="tocSlibraryin"></a>
<a id="tocslibraryin"></a>

```json
{
  "name": "string",
  "description": "string",
  "chunk_size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|chunk_size|integer \| null|false|none|none|

<h2 id="tocS_LibraryInUpdate">LibraryInUpdate</h2>
<!-- backwards compatibility -->
<a id="schemalibraryinupdate"></a>
<a id="schema_LibraryInUpdate"></a>
<a id="tocSlibraryinupdate"></a>
<a id="tocslibraryinupdate"></a>

```json
{
  "name": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|

<h2 id="tocS_LibraryOut">LibraryOut</h2>
<!-- backwards compatibility -->
<a id="schemalibraryout"></a>
<a id="schema_LibraryOut"></a>
<a id="tocSlibraryout"></a>
<a id="tocslibraryout"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "owner_type": "string",
  "total_size": 0,
  "nb_documents": 0,
  "chunk_size": 0,
  "emoji": "string",
  "description": "string",
  "generated_description": "string",
  "explicit_user_members_count": 0,
  "explicit_workspace_members_count": 0,
  "org_sharing_role": "string",
  "generated_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|name|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|owner_id|string(uuid) \| null|true|none|none|
|owner_type|string|true|none|none|
|total_size|integer|true|none|none|
|nb_documents|integer|true|none|none|
|chunk_size|integer \| null|true|none|none|
|emoji|string \| null|false|none|none|
|description|string \| null|false|none|none|
|generated_description|string \| null|false|none|none|
|explicit_user_members_count|integer \| null|false|none|none|
|explicit_workspace_members_count|integer \| null|false|none|none|
|org_sharing_role|string \| null|false|none|none|
|generated_name|string \| null|false|none|Generated Name|

<h2 id="tocS_ListDocumentOut">ListDocumentOut</h2>
<!-- backwards compatibility -->
<a id="schemalistdocumentout"></a>
<a id="schema_ListDocumentOut"></a>
<a id="tocSlistdocumentout"></a>
<a id="tocslistdocumentout"></a>

```json
{
  "pagination": {
    "total_items": 0,
    "total_pages": 0,
    "current_page": 0,
    "page_size": 0,
    "has_more": true
  },
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "library_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "hash": "string",
      "mime_type": "string",
      "extension": "string",
      "size": 0,
      "name": "string",
      "summary": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "last_processed_at": "1970-01-01T00:00:00Z",
      "number_of_pages": 0,
      "process_status": "self_managed",
      "uploaded_by_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "uploaded_by_type": "string",
      "tokens_processing_main_content": 0,
      "tokens_processing_summary": 0,
      "url": "string",
      "attributes": {},
      "processing_status": "string",
      "tokens_processing_total": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[PaginationInfo](#schemapaginationinfo)|true|none|none|
|data|[[DocumentOut](#schemadocumentout)]|true|none|none|

<h2 id="tocS_ListLibraryOut">ListLibraryOut</h2>
<!-- backwards compatibility -->
<a id="schemalistlibraryout"></a>
<a id="schema_ListLibraryOut"></a>
<a id="tocSlistlibraryout"></a>
<a id="tocslistlibraryout"></a>

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "owner_type": "string",
      "total_size": 0,
      "nb_documents": 0,
      "chunk_size": 0,
      "emoji": "string",
      "description": "string",
      "generated_description": "string",
      "explicit_user_members_count": 0,
      "explicit_workspace_members_count": 0,
      "org_sharing_role": "string",
      "generated_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LibraryOut](#schemalibraryout)]|true|none|none|

<h2 id="tocS_ListSharingOut">ListSharingOut</h2>
<!-- backwards compatibility -->
<a id="schemalistsharingout"></a>
<a id="schema_ListSharingOut"></a>
<a id="tocSlistsharingout"></a>
<a id="tocslistsharingout"></a>

```json
{
  "data": [
    {
      "library_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "role": "string",
      "share_with_type": "string",
      "share_with_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SharingOut](#schemasharingout)]|true|none|none|

<h2 id="tocS_PaginationInfo">PaginationInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaginationinfo"></a>
<a id="schema_PaginationInfo"></a>
<a id="tocSpaginationinfo"></a>
<a id="tocspaginationinfo"></a>

```json
{
  "total_items": 0,
  "total_pages": 0,
  "current_page": 0,
  "page_size": 0,
  "has_more": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_items|integer|true|none|none|
|total_pages|integer|true|none|none|
|current_page|integer|true|none|none|
|page_size|integer|true|none|none|
|has_more|boolean|true|none|none|

<h2 id="tocS_ProcessStatus">ProcessStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprocessstatus"></a>
<a id="schema_ProcessStatus"></a>
<a id="tocSprocessstatus"></a>
<a id="tocsprocessstatus"></a>

```json
"self_managed"
```

<h2 id="tocS_ProcessingStatusOut">ProcessingStatusOut</h2>
<!-- backwards compatibility -->
<a id="schemaprocessingstatusout"></a>
<a id="schema_ProcessingStatusOut"></a>
<a id="tocSprocessingstatusout"></a>
<a id="tocsprocessingstatusout"></a>

```json
{
  "document_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_status": "self_managed",
  "processing_status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_id|string(uuid)|true|none|none|
|process_status|[ProcessStatus](#schemaprocessstatus)|true|none|none|
|processing_status|string|true|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|process_status|self_managed|
|process_status|missing_content|
|process_status|noop|
|process_status|done|
|process_status|todo|
|process_status|in_progress|
|process_status|error|
|process_status|waiting_for_capacity|

<h2 id="tocS_ShareEnum">ShareEnum</h2>
<!-- backwards compatibility -->
<a id="schemashareenum"></a>
<a id="schema_ShareEnum"></a>
<a id="tocSshareenum"></a>
<a id="tocsshareenum"></a>

```json
"Viewer"
```

<h2 id="tocS_SharingDelete">SharingDelete</h2>
<!-- backwards compatibility -->
<a id="schemasharingdelete"></a>
<a id="schema_SharingDelete"></a>
<a id="tocSsharingdelete"></a>
<a id="tocssharingdelete"></a>

```json
{
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "share_with_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "share_with_type": "User"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|org_id|string(uuid) \| null|false|none|none|
|share_with_uuid|string(uuid)|true|none|The id of the entity (user, workspace or organization) to share with|
|share_with_type|[EntityType](#schemaentitytype)|true|none|The type of entity, used to share a library.|

#### Enumerated Values

|Property|Value|
|---|---|
|share_with_type|User|
|share_with_type|Workspace|
|share_with_type|Org|

<h2 id="tocS_SharingIn">SharingIn</h2>
<!-- backwards compatibility -->
<a id="schemasharingin"></a>
<a id="schema_SharingIn"></a>
<a id="tocSsharingin"></a>
<a id="tocssharingin"></a>

```json
{
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "level": "Viewer",
  "share_with_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "share_with_type": "User"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|org_id|string(uuid) \| null|false|none|none|
|level|[ShareEnum](#schemashareenum)|true|none|none|
|share_with_uuid|string(uuid)|true|none|The id of the entity (user, workspace or organization) to share with|
|share_with_type|[EntityType](#schemaentitytype)|true|none|The type of entity, used to share a library.|

#### Enumerated Values

|Property|Value|
|---|---|
|level|Viewer|
|level|Editor|
|share_with_type|User|
|share_with_type|Workspace|
|share_with_type|Org|

<h2 id="tocS_SharingOut">SharingOut</h2>
<!-- backwards compatibility -->
<a id="schemasharingout"></a>
<a id="schema_SharingOut"></a>
<a id="tocSsharingout"></a>
<a id="tocssharingout"></a>

```json
{
  "library_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "org_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "role": "string",
  "share_with_type": "string",
  "share_with_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|library_id|string(uuid)|true|none|none|
|user_id|string(uuid) \| null|false|none|none|
|org_id|string(uuid)|true|none|none|
|role|string|true|none|none|
|share_with_type|string|true|none|none|
|share_with_uuid|string(uuid) \| null|true|none|none|

<h2 id="tocS_EntityType">EntityType</h2>
<!-- backwards compatibility -->
<a id="schemaentitytype"></a>
<a id="schema_EntityType"></a>
<a id="tocSentitytype"></a>
<a id="tocsentitytype"></a>

```json
"User"
```

The type of entity, used to share a library.

<h2 id="tocS_BaseFieldDefinition">BaseFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemabasefielddefinition"></a>
<a id="schema_BaseFieldDefinition"></a>
<a id="tocSbasefielddefinition"></a>
<a id="tocsbasefielddefinition"></a>

```json
{
  "name": "string",
  "label": "string",
  "type": "ENUM",
  "group": "string",
  "supported_operators": [
    "lt"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|label|string|true|none|none|
|type|string|true|none|none|
|group|string \| null|false|none|none|
|supported_operators|[string]|true|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ENUM|
|type|TEXT|
|type|INT|
|type|FLOAT|
|type|BOOL|
|type|TIMESTAMP|
|type|ARRAY|
|supported_operators|lt|
|supported_operators|lte|
|supported_operators|gt|
|supported_operators|gte|
|supported_operators|startswith|
|supported_operators|istartswith|
|supported_operators|endswith|
|supported_operators|iendswith|
|supported_operators|contains|
|supported_operators|icontains|
|supported_operators|matches|
|supported_operators|notcontains|
|supported_operators|inotcontains|
|supported_operators|eq|
|supported_operators|neq|
|supported_operators|isnull|
|supported_operators|includes|
|supported_operators|excludes|
|supported_operators|len_eq|

<h2 id="tocS_BaseTaskStatus">BaseTaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemabasetaskstatus"></a>
<a id="schema_BaseTaskStatus"></a>
<a id="tocSbasetaskstatus"></a>
<a id="tocsbasetaskstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_CampaignPreview">CampaignPreview</h2>
<!-- backwards compatibility -->
<a id="schemacampaignpreview"></a>
<a id="schema_CampaignPreview"></a>
<a id="tocScampaignpreview"></a>
<a id="tocscampaignpreview"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "description": "string",
  "max_nb_events": 0,
  "search_params": {
    "filters": {
      "AND": [
        {}
      ],
      "OR": [
        {}
      ]
    }
  },
  "judge": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "description": "string",
    "model_name": "string",
    "output": {
      "type": "CLASSIFICATION",
      "options": [
        {
          "value": "string",
          "description": "string"
        }
      ]
    },
    "instructions": "string",
    "tools": [
      "string"
    ],
    "up_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "down_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "base_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|deleted_at|string(date-time) \| null|true|none|none|
|name|string|true|none|none|
|owner_id|string(uuid)|true|none|none|
|workspace_id|string(uuid)|true|none|none|
|description|string|true|none|none|
|max_nb_events|integer|true|none|none|
|search_params|[FilterPayload](#schemafilterpayload)|true|none|none|
|judge|[JudgePreview](#schemajudgepreview)|true|none|none|

<h2 id="tocS_CampaignPreviews">CampaignPreviews</h2>
<!-- backwards compatibility -->
<a id="schemacampaignpreviews"></a>
<a id="schema_CampaignPreviews"></a>
<a id="tocScampaignpreviews"></a>
<a id="tocscampaignpreviews"></a>

```json
{
  "campaigns": {
    "results": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "deleted_at": "1970-01-01T00:00:00Z",
        "name": "string",
        "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "description": "string",
        "max_nb_events": 0,
        "search_params": {
          "filters": {
            "AND": [
              {}
            ],
            "OR": [
              {}
            ]
          }
        },
        "judge": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "created_at": "1970-01-01T00:00:00Z",
          "updated_at": "1970-01-01T00:00:00Z",
          "deleted_at": "1970-01-01T00:00:00Z",
          "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "description": "string",
          "model_name": "string",
          "output": {
            "type": "CLASSIFICATION",
            "options": [
              {
                "value": "string",
                "description": "string"
              }
            ]
          },
          "instructions": "string",
          "tools": [
            "string"
          ],
          "up_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "down_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "base_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      }
    ],
    "count": 0,
    "next": "string",
    "previous": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaigns|[PaginatedResult_CampaignPreview_](#schemapaginatedresult_campaignpreview_)|true|none|none|

<h2 id="tocS_CampaignSelectedEvents">CampaignSelectedEvents</h2>
<!-- backwards compatibility -->
<a id="schemacampaignselectedevents"></a>
<a id="schema_CampaignSelectedEvents"></a>
<a id="tocScampaignselectedevents"></a>
<a id="tocscampaignselectedevents"></a>

```json
{
  "completion_events": {
    "results": [
      {
        "event_id": "string",
        "correlation_id": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "extra_fields": {
          "property1": true,
          "property2": true
        },
        "nb_input_tokens": 0,
        "nb_output_tokens": 0
      }
    ],
    "count": 0,
    "next": "string",
    "previous": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion_events|[PaginatedResult_ChatCompletionEventPreview_](#schemapaginatedresult_chatcompletioneventpreview_)|true|none|none|

<h2 id="tocS_CampaignStatus">CampaignStatus</h2>
<!-- backwards compatibility -->
<a id="schemacampaignstatus"></a>
<a id="schema_CampaignStatus"></a>
<a id="tocScampaignstatus"></a>
<a id="tocscampaignstatus"></a>

```json
{
  "status": "RUNNING"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[BaseTaskStatus](#schemabasetaskstatus)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|RUNNING|
|status|COMPLETED|
|status|FAILED|
|status|CANCELED|
|status|TERMINATED|
|status|CONTINUED_AS_NEW|
|status|TIMED_OUT|
|status|UNKNOWN|

<h2 id="tocS_ChatCompletionEventIds">ChatCompletionEventIds</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletioneventids"></a>
<a id="schema_ChatCompletionEventIds"></a>
<a id="tocSchatcompletioneventids"></a>
<a id="tocschatcompletioneventids"></a>

```json
{
  "completion_event_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion_event_ids|[string]|true|none|none|

<h2 id="tocS_ChatCompletionEvent">ChatCompletionEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionevent"></a>
<a id="schema_ChatCompletionEvent"></a>
<a id="tocSchatcompletionevent"></a>
<a id="tocschatcompletionevent"></a>

```json
{
  "event_id": "string",
  "correlation_id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "extra_fields": {
    "property1": true,
    "property2": true
  },
  "nb_input_tokens": 0,
  "nb_output_tokens": 0,
  "enabled_tools": [
    {}
  ],
  "request_messages": [
    {}
  ],
  "response_messages": [
    {}
  ],
  "nb_messages": 0,
  "chat_transcription_events": [
    {
      "audio_url": "string",
      "model": "string",
      "response_message": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|none|
|correlation_id|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|extra_fields|object|true|none|none|
|nb_input_tokens|integer|true|none|none|
|nb_output_tokens|integer|true|none|none|
|enabled_tools|[object]|true|none|none|
|request_messages|[object]|true|none|none|
|response_messages|[object]|true|none|none|
|nb_messages|integer|true|none|none|
|chat_transcription_events|[[ChatTranscriptionEvent](#schemachattranscriptionevent)]|true|none|none|

<h2 id="tocS_ChatCompletionEventPreview">ChatCompletionEventPreview</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletioneventpreview"></a>
<a id="schema_ChatCompletionEventPreview"></a>
<a id="tocSchatcompletioneventpreview"></a>
<a id="tocschatcompletioneventpreview"></a>

```json
{
  "event_id": "string",
  "correlation_id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "extra_fields": {
    "property1": true,
    "property2": true
  },
  "nb_input_tokens": 0,
  "nb_output_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|none|
|correlation_id|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|extra_fields|object|true|none|none|
|nb_input_tokens|integer|true|none|none|
|nb_output_tokens|integer|true|none|none|

<h2 id="tocS_ChatCompletionEvents">ChatCompletionEvents</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionevents"></a>
<a id="schema_ChatCompletionEvents"></a>
<a id="tocSchatcompletionevents"></a>
<a id="tocschatcompletionevents"></a>

```json
{
  "completion_events": {
    "results": [
      {
        "event_id": "string",
        "correlation_id": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "extra_fields": {
          "property1": true,
          "property2": true
        },
        "nb_input_tokens": 0,
        "nb_output_tokens": 0
      }
    ],
    "next": "string",
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion_events|[FeedResult_ChatCompletionEventPreview_](#schemafeedresult_chatcompletioneventpreview_)|true|none|none|

<h2 id="tocS_ChatCompletionFieldOptions">ChatCompletionFieldOptions</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionfieldoptions"></a>
<a id="schema_ChatCompletionFieldOptions"></a>
<a id="tocSchatcompletionfieldoptions"></a>
<a id="tocschatcompletionfieldoptions"></a>

```json
{
  "options": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[string \| boolean \| null] \| null|false|none|none|

<h2 id="tocS_ChatCompletionFields">ChatCompletionFields</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionfields"></a>
<a id="schema_ChatCompletionFields"></a>
<a id="tocSchatcompletionfields"></a>
<a id="tocschatcompletionfields"></a>

```json
{
  "field_definitions": [
    {
      "name": "string",
      "label": "string",
      "type": "ENUM",
      "group": "string",
      "supported_operators": [
        "lt"
      ]
    }
  ],
  "field_groups": [
    {
      "name": "string",
      "label": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field_definitions|[[BaseFieldDefinition](#schemabasefielddefinition)]|true|none|none|
|field_groups|[[FieldGroup](#schemafieldgroup)]|true|none|none|

<h2 id="tocS_ChatTranscriptionEvent">ChatTranscriptionEvent</h2>
<!-- backwards compatibility -->
<a id="schemachattranscriptionevent"></a>
<a id="schema_ChatTranscriptionEvent"></a>
<a id="tocSchattranscriptionevent"></a>
<a id="tocschattranscriptionevent"></a>

```json
{
  "audio_url": "string",
  "model": "string",
  "response_message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_url|string|true|none|none|
|model|string|true|none|none|
|response_message|object|true|none|none|

<h2 id="tocS_ConversationPayload">ConversationPayload</h2>
<!-- backwards compatibility -->
<a id="schemaconversationpayload"></a>
<a id="schema_ConversationPayload"></a>
<a id="tocSconversationpayload"></a>
<a id="tocsconversationpayload"></a>

```json
{
  "messages": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|true|none|none|

<h2 id="tocS_ConversationSource">ConversationSource</h2>
<!-- backwards compatibility -->
<a id="schemaconversationsource"></a>
<a id="schema_ConversationSource"></a>
<a id="tocSconversationsource"></a>
<a id="tocsconversationsource"></a>

```json
"EXPLORER"
```

<h2 id="tocS_DatasetExport">DatasetExport</h2>
<!-- backwards compatibility -->
<a id="schemadatasetexport"></a>
<a id="schema_DatasetExport"></a>
<a id="tocSdatasetexport"></a>
<a id="tocsdatasetexport"></a>

```json
{
  "file_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_url|string|true|none|none|

<h2 id="tocS_DatasetImportTask">DatasetImportTask</h2>
<!-- backwards compatibility -->
<a id="schemadatasetimporttask"></a>
<a id="schema_DatasetImportTask"></a>
<a id="tocSdatasetimporttask"></a>
<a id="tocsdatasetimporttask"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "creator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "RUNNING",
  "progress": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|deleted_at|string(date-time) \| null|true|none|none|
|creator_id|string(uuid)|true|none|none|
|dataset_id|string(uuid)|true|none|none|
|workspace_id|string(uuid)|true|none|none|
|status|[BaseTaskStatus](#schemabasetaskstatus)|true|none|none|
|progress|integer \| null|false|none|none|
|message|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|RUNNING|
|status|COMPLETED|
|status|FAILED|
|status|CANCELED|
|status|TERMINATED|
|status|CONTINUED_AS_NEW|
|status|TIMED_OUT|
|status|UNKNOWN|

<h2 id="tocS_DatasetImportTasks">DatasetImportTasks</h2>
<!-- backwards compatibility -->
<a id="schemadatasetimporttasks"></a>
<a id="schema_DatasetImportTasks"></a>
<a id="tocSdatasetimporttasks"></a>
<a id="tocsdatasetimporttasks"></a>

```json
{
  "tasks": {
    "results": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "deleted_at": "1970-01-01T00:00:00Z",
        "creator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "RUNNING",
        "progress": 0,
        "message": "string"
      }
    ],
    "count": 0,
    "next": "string",
    "previous": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tasks|[PaginatedResult_DatasetImportTask_](#schemapaginatedresult_datasetimporttask_)|true|none|none|

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "description": "string",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|deleted_at|string(date-time) \| null|true|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|owner_id|string(uuid)|true|none|none|
|workspace_id|string(uuid)|true|none|none|

<h2 id="tocS_DatasetPreview">DatasetPreview</h2>
<!-- backwards compatibility -->
<a id="schemadatasetpreview"></a>
<a id="schema_DatasetPreview"></a>
<a id="tocSdatasetpreview"></a>
<a id="tocsdatasetpreview"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "description": "string",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|deleted_at|string(date-time) \| null|true|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|owner_id|string(uuid)|true|none|none|
|workspace_id|string(uuid)|true|none|none|

<h2 id="tocS_DatasetPreviews">DatasetPreviews</h2>
<!-- backwards compatibility -->
<a id="schemadatasetpreviews"></a>
<a id="schema_DatasetPreviews"></a>
<a id="tocSdatasetpreviews"></a>
<a id="tocsdatasetpreviews"></a>

```json
{
  "datasets": {
    "results": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "deleted_at": "1970-01-01T00:00:00Z",
        "name": "string",
        "description": "string",
        "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "count": 0,
    "next": "string",
    "previous": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasets|[PaginatedResult_DatasetPreview_](#schemapaginatedresult_datasetpreview_)|true|none|none|

<h2 id="tocS_DatasetRecord">DatasetRecord</h2>
<!-- backwards compatibility -->
<a id="schemadatasetrecord"></a>
<a id="schema_DatasetRecord"></a>
<a id="tocSdatasetrecord"></a>
<a id="tocsdatasetrecord"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payload": {
    "messages": [
      {}
    ]
  },
  "properties": {},
  "source": "EXPLORER"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|deleted_at|string(date-time) \| null|true|none|none|
|dataset_id|string(uuid)|true|none|none|
|payload|[ConversationPayload](#schemaconversationpayload)|true|none|none|
|properties|object|true|none|none|
|source|[ConversationSource](#schemaconversationsource)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|EXPLORER|
|source|UPLOADED_FILE|
|source|DIRECT_INPUT|
|source|PLAYGROUND|

<h2 id="tocS_DatasetRecords">DatasetRecords</h2>
<!-- backwards compatibility -->
<a id="schemadatasetrecords"></a>
<a id="schema_DatasetRecords"></a>
<a id="tocSdatasetrecords"></a>
<a id="tocsdatasetrecords"></a>

```json
{
  "records": {
    "results": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "deleted_at": "1970-01-01T00:00:00Z",
        "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "payload": {
          "messages": [
            {}
          ]
        },
        "properties": {},
        "source": "EXPLORER"
      }
    ],
    "count": 0,
    "next": "string",
    "previous": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|records|[PaginatedResult_DatasetRecord_](#schemapaginatedresult_datasetrecord_)|true|none|none|

<h2 id="tocS_DeleteDatasetRecordsInSchema">DeleteDatasetRecordsInSchema</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetrecordsinschema"></a>
<a id="schema_DeleteDatasetRecordsInSchema"></a>
<a id="tocSdeletedatasetrecordsinschema"></a>
<a id="tocsdeletedatasetrecordsinschema"></a>

```json
{
  "dataset_record_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset_record_ids|[string(uuid)]|true|none|none|

<h2 id="tocS_FeedResult_ChatCompletionEventPreview_">FeedResult_ChatCompletionEventPreview_</h2>
<!-- backwards compatibility -->
<a id="schemafeedresult_chatcompletioneventpreview_"></a>
<a id="schema_FeedResult_ChatCompletionEventPreview_"></a>
<a id="tocSfeedresult_chatcompletioneventpreview_"></a>
<a id="tocsfeedresult_chatcompletioneventpreview_"></a>

```json
{
  "results": [
    {
      "event_id": "string",
      "correlation_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "extra_fields": {
        "property1": true,
        "property2": true
      },
      "nb_input_tokens": 0,
      "nb_output_tokens": 0
    }
  ],
  "next": "string",
  "cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ChatCompletionEventPreview](#schemachatcompletioneventpreview)]|false|none|none|
|next|string \| null|false|none|none|
|cursor|string \| null|false|none|none|

<h2 id="tocS_FieldGroup">FieldGroup</h2>
<!-- backwards compatibility -->
<a id="schemafieldgroup"></a>
<a id="schema_FieldGroup"></a>
<a id="tocSfieldgroup"></a>
<a id="tocsfieldgroup"></a>

```json
{
  "name": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|label|string|true|none|none|

<h2 id="tocS_FieldOptionCountItem">FieldOptionCountItem</h2>
<!-- backwards compatibility -->
<a id="schemafieldoptioncountitem"></a>
<a id="schema_FieldOptionCountItem"></a>
<a id="tocSfieldoptioncountitem"></a>
<a id="tocsfieldoptioncountitem"></a>

```json
{
  "value": "string",
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|
|count|integer|true|none|none|

<h2 id="tocS_FieldOptionCountsInSchema">FieldOptionCountsInSchema</h2>
<!-- backwards compatibility -->
<a id="schemafieldoptioncountsinschema"></a>
<a id="schema_FieldOptionCountsInSchema"></a>
<a id="tocSfieldoptioncountsinschema"></a>
<a id="tocsfieldoptioncountsinschema"></a>

```json
{
  "filter_params": {
    "filters": {
      "AND": [
        {}
      ],
      "OR": [
        {}
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter_params|[FilterPayload](#schemafilterpayload) \| null|false|none|none|

<h2 id="tocS_FieldOptionCounts">FieldOptionCounts</h2>
<!-- backwards compatibility -->
<a id="schemafieldoptioncounts"></a>
<a id="schema_FieldOptionCounts"></a>
<a id="tocSfieldoptioncounts"></a>
<a id="tocsfieldoptioncounts"></a>

```json
{
  "counts": [
    {
      "value": "string",
      "count": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counts|[[FieldOptionCountItem](#schemafieldoptioncountitem)]|true|none|none|

<h2 id="tocS_FilterPayload">FilterPayload</h2>
<!-- backwards compatibility -->
<a id="schemafilterpayload"></a>
<a id="schema_FilterPayload"></a>
<a id="tocSfilterpayload"></a>
<a id="tocsfilterpayload"></a>

```json
{
  "filters": {
    "AND": [
      {}
    ],
    "OR": [
      {}
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[FilterGroup](#schemafiltergroup) \| [FilterCondition](#schemafiltercondition) \| null|true|none|none|

<h2 id="tocS_GetChatCompletionEventIdsInSchema">GetChatCompletionEventIdsInSchema</h2>
<!-- backwards compatibility -->
<a id="schemagetchatcompletioneventidsinschema"></a>
<a id="schema_GetChatCompletionEventIdsInSchema"></a>
<a id="tocSgetchatcompletioneventidsinschema"></a>
<a id="tocsgetchatcompletioneventidsinschema"></a>

```json
{
  "search_params": {
    "filters": {
      "AND": [
        {}
      ],
      "OR": [
        {}
      ]
    }
  },
  "extra_fields": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|search_params|[FilterPayload](#schemafilterpayload)|true|none|none|
|extra_fields|[string] \| null|false|none|none|

<h2 id="tocS_GetChatCompletionEventsInSchema">GetChatCompletionEventsInSchema</h2>
<!-- backwards compatibility -->
<a id="schemagetchatcompletioneventsinschema"></a>
<a id="schema_GetChatCompletionEventsInSchema"></a>
<a id="tocSgetchatcompletioneventsinschema"></a>
<a id="tocsgetchatcompletioneventsinschema"></a>

```json
{
  "search_params": {
    "filters": {
      "AND": [
        {}
      ],
      "OR": [
        {}
      ]
    }
  },
  "extra_fields": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|search_params|[FilterPayload](#schemafilterpayload)|true|none|none|
|extra_fields|[string] \| null|false|none|none|

<h2 id="tocS_JudgeClassificationOutput">JudgeClassificationOutput</h2>
<!-- backwards compatibility -->
<a id="schemajudgeclassificationoutput"></a>
<a id="schema_JudgeClassificationOutput"></a>
<a id="tocSjudgeclassificationoutput"></a>
<a id="tocsjudgeclassificationoutput"></a>

```json
{
  "type": "CLASSIFICATION",
  "options": [
    {
      "value": "string",
      "description": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|options|[[JudgeClassificationOutputOption](#schemajudgeclassificationoutputoption)]|true|none|none|

<h2 id="tocS_JudgeClassificationOutputOption">JudgeClassificationOutputOption</h2>
<!-- backwards compatibility -->
<a id="schemajudgeclassificationoutputoption"></a>
<a id="schema_JudgeClassificationOutputOption"></a>
<a id="tocSjudgeclassificationoutputoption"></a>
<a id="tocsjudgeclassificationoutputoption"></a>

```json
{
  "value": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|
|description|string|true|none|none|

<h2 id="tocS_JudgeOutput">JudgeOutput</h2>
<!-- backwards compatibility -->
<a id="schemajudgeoutput"></a>
<a id="schema_JudgeOutput"></a>
<a id="tocSjudgeoutput"></a>
<a id="tocsjudgeoutput"></a>

```json
{
  "analysis": "string",
  "answer": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysis|string|true|none|none|
|answer|string \| number|true|none|none|

<h2 id="tocS_JudgeOutputType">JudgeOutputType</h2>
<!-- backwards compatibility -->
<a id="schemajudgeoutputtype"></a>
<a id="schema_JudgeOutputType"></a>
<a id="tocSjudgeoutputtype"></a>
<a id="tocsjudgeoutputtype"></a>

```json
"REGRESSION"
```

<h2 id="tocS_JudgePreview">JudgePreview</h2>
<!-- backwards compatibility -->
<a id="schemajudgepreview"></a>
<a id="schema_JudgePreview"></a>
<a id="tocSjudgepreview"></a>
<a id="tocsjudgepreview"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "description": "string",
  "model_name": "string",
  "output": {
    "type": "CLASSIFICATION",
    "options": [
      {
        "value": "string",
        "description": "string"
      }
    ]
  },
  "instructions": "string",
  "tools": [
    "string"
  ],
  "up_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "down_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "base_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|deleted_at|string(date-time) \| null|true|none|none|
|owner_id|string(uuid)|true|none|none|
|workspace_id|string(uuid)|true|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|model_name|string|true|none|none|
|output|[JudgeClassificationOutput](#schemajudgeclassificationoutput) \| [JudgeRegressionOutput](#schemajudgeregressionoutput)|true|none|none|
|instructions|string|true|none|none|
|tools|[string]|true|none|none|
|up_revision|string(uuid) \| null|false|none|none|
|down_revision|string(uuid) \| null|false|none|none|
|base_revision|string(uuid) \| null|false|none|none|

<h2 id="tocS_JudgePreviews">JudgePreviews</h2>
<!-- backwards compatibility -->
<a id="schemajudgepreviews"></a>
<a id="schema_JudgePreviews"></a>
<a id="tocSjudgepreviews"></a>
<a id="tocsjudgepreviews"></a>

```json
{
  "judges": {
    "results": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "deleted_at": "1970-01-01T00:00:00Z",
        "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "description": "string",
        "model_name": "string",
        "output": {
          "type": "CLASSIFICATION",
          "options": [
            {
              "value": "string",
              "description": "string"
            }
          ]
        },
        "instructions": "string",
        "tools": [
          "string"
        ],
        "up_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "down_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "base_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "count": 0,
    "next": "string",
    "previous": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|judges|[PaginatedResult_JudgePreview_](#schemapaginatedresult_judgepreview_)|true|none|none|

<h2 id="tocS_JudgeRegressionOutput">JudgeRegressionOutput</h2>
<!-- backwards compatibility -->
<a id="schemajudgeregressionoutput"></a>
<a id="schema_JudgeRegressionOutput"></a>
<a id="tocSjudgeregressionoutput"></a>
<a id="tocsjudgeregressionoutput"></a>

```json
{
  "type": "REGRESSION",
  "min": 0,
  "min_description": "string",
  "max": 1,
  "max_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|min|number|false|none|none|
|min_description|string|true|none|none|
|max|number|false|none|none|
|max_description|string|true|none|none|

<h2 id="tocS_PaginatedResult_CampaignPreview_">PaginatedResult_CampaignPreview_</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresult_campaignpreview_"></a>
<a id="schema_PaginatedResult_CampaignPreview_"></a>
<a id="tocSpaginatedresult_campaignpreview_"></a>
<a id="tocspaginatedresult_campaignpreview_"></a>

```json
{
  "results": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "deleted_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "description": "string",
      "max_nb_events": 0,
      "search_params": {
        "filters": {
          "AND": [
            {}
          ],
          "OR": [
            {}
          ]
        }
      },
      "judge": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "deleted_at": "1970-01-01T00:00:00Z",
        "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "description": "string",
        "model_name": "string",
        "output": {
          "type": "CLASSIFICATION",
          "options": [
            {
              "value": "string",
              "description": "string"
            }
          ]
        },
        "instructions": "string",
        "tools": [
          "string"
        ],
        "up_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "down_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "base_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    }
  ],
  "count": 0,
  "next": "string",
  "previous": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[CampaignPreview](#schemacampaignpreview)]|false|none|none|
|count|integer|true|none|none|
|next|string \| null|false|none|none|
|previous|string \| null|false|none|none|

<h2 id="tocS_PaginatedResult_ChatCompletionEventPreview_">PaginatedResult_ChatCompletionEventPreview_</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresult_chatcompletioneventpreview_"></a>
<a id="schema_PaginatedResult_ChatCompletionEventPreview_"></a>
<a id="tocSpaginatedresult_chatcompletioneventpreview_"></a>
<a id="tocspaginatedresult_chatcompletioneventpreview_"></a>

```json
{
  "results": [
    {
      "event_id": "string",
      "correlation_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "extra_fields": {
        "property1": true,
        "property2": true
      },
      "nb_input_tokens": 0,
      "nb_output_tokens": 0
    }
  ],
  "count": 0,
  "next": "string",
  "previous": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ChatCompletionEventPreview](#schemachatcompletioneventpreview)]|false|none|none|
|count|integer|true|none|none|
|next|string \| null|false|none|none|
|previous|string \| null|false|none|none|

<h2 id="tocS_PaginatedResult_DatasetImportTask_">PaginatedResult_DatasetImportTask_</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresult_datasetimporttask_"></a>
<a id="schema_PaginatedResult_DatasetImportTask_"></a>
<a id="tocSpaginatedresult_datasetimporttask_"></a>
<a id="tocspaginatedresult_datasetimporttask_"></a>

```json
{
  "results": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "deleted_at": "1970-01-01T00:00:00Z",
      "creator_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "RUNNING",
      "progress": 0,
      "message": "string"
    }
  ],
  "count": 0,
  "next": "string",
  "previous": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[DatasetImportTask](#schemadatasetimporttask)]|false|none|none|
|count|integer|true|none|none|
|next|string \| null|false|none|none|
|previous|string \| null|false|none|none|

<h2 id="tocS_PaginatedResult_DatasetPreview_">PaginatedResult_DatasetPreview_</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresult_datasetpreview_"></a>
<a id="schema_PaginatedResult_DatasetPreview_"></a>
<a id="tocSpaginatedresult_datasetpreview_"></a>
<a id="tocspaginatedresult_datasetpreview_"></a>

```json
{
  "results": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "deleted_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "description": "string",
      "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "count": 0,
  "next": "string",
  "previous": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[DatasetPreview](#schemadatasetpreview)]|false|none|none|
|count|integer|true|none|none|
|next|string \| null|false|none|none|
|previous|string \| null|false|none|none|

<h2 id="tocS_PaginatedResult_DatasetRecord_">PaginatedResult_DatasetRecord_</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresult_datasetrecord_"></a>
<a id="schema_PaginatedResult_DatasetRecord_"></a>
<a id="tocSpaginatedresult_datasetrecord_"></a>
<a id="tocspaginatedresult_datasetrecord_"></a>

```json
{
  "results": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "deleted_at": "1970-01-01T00:00:00Z",
      "dataset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payload": {
        "messages": [
          {}
        ]
      },
      "properties": {},
      "source": "EXPLORER"
    }
  ],
  "count": 0,
  "next": "string",
  "previous": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[DatasetRecord](#schemadatasetrecord)]|false|none|none|
|count|integer|true|none|none|
|next|string \| null|false|none|none|
|previous|string \| null|false|none|none|

<h2 id="tocS_PaginatedResult_JudgePreview_">PaginatedResult_JudgePreview_</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresult_judgepreview_"></a>
<a id="schema_PaginatedResult_JudgePreview_"></a>
<a id="tocSpaginatedresult_judgepreview_"></a>
<a id="tocspaginatedresult_judgepreview_"></a>

```json
{
  "results": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "deleted_at": "1970-01-01T00:00:00Z",
      "owner_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "description": "string",
      "model_name": "string",
      "output": {
        "type": "CLASSIFICATION",
        "options": [
          {
            "value": "string",
            "description": "string"
          }
        ]
      },
      "instructions": "string",
      "tools": [
        "string"
      ],
      "up_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "down_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "base_revision": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "count": 0,
  "next": "string",
  "previous": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[JudgePreview](#schemajudgepreview)]|false|none|none|
|count|integer|true|none|none|
|next|string \| null|false|none|none|
|previous|string \| null|false|none|none|

<h2 id="tocS_PatchDatasetInSchema">PatchDatasetInSchema</h2>
<!-- backwards compatibility -->
<a id="schemapatchdatasetinschema"></a>
<a id="schema_PatchDatasetInSchema"></a>
<a id="tocSpatchdatasetinschema"></a>
<a id="tocspatchdatasetinschema"></a>

```json
{
  "name": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|

<h2 id="tocS_PostCampaignInSchema">PostCampaignInSchema</h2>
<!-- backwards compatibility -->
<a id="schemapostcampaigninschema"></a>
<a id="schema_PostCampaignInSchema"></a>
<a id="tocSpostcampaigninschema"></a>
<a id="tocspostcampaigninschema"></a>

```json
{
  "search_params": {
    "filters": {
      "AND": [
        {}
      ],
      "OR": [
        {}
      ]
    }
  },
  "judge_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "description": "string",
  "max_nb_events": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|search_params|[FilterPayload](#schemafilterpayload)|true|none|none|
|judge_id|string(uuid)|true|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|max_nb_events|integer|true|none|none|

<h2 id="tocS_PostChatCompletionEventJudgingInSchema">PostChatCompletionEventJudgingInSchema</h2>
<!-- backwards compatibility -->
<a id="schemapostchatcompletioneventjudginginschema"></a>
<a id="schema_PostChatCompletionEventJudgingInSchema"></a>
<a id="tocSpostchatcompletioneventjudginginschema"></a>
<a id="tocspostchatcompletioneventjudginginschema"></a>

```json
{
  "judge_definition": {
    "name": "string",
    "description": "string",
    "model_name": "string",
    "output": {
      "type": "CLASSIFICATION",
      "options": [
        {
          "value": "string",
          "description": "string"
        }
      ]
    },
    "instructions": "string",
    "tools": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|judge_definition|[PostJudgeInSchema](#schemapostjudgeinschema)|true|none|none|

<h2 id="tocS_PostDatasetImportFromCampaignInSchema">PostDatasetImportFromCampaignInSchema</h2>
<!-- backwards compatibility -->
<a id="schemapostdatasetimportfromcampaigninschema"></a>
<a id="schema_PostDatasetImportFromCampaignInSchema"></a>
<a id="tocSpostdatasetimportfromcampaigninschema"></a>
<a id="tocspostdatasetimportfromcampaigninschema"></a>

```json
{
  "campaign_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaign_id|string(uuid)|true|none|none|

<h2 id="tocS_PostDatasetImportFromDatasetInSchema">PostDatasetImportFromDatasetInSchema</h2>
<!-- backwards compatibility -->
<a id="schemapostdatasetimportfromdatasetinschema"></a>
<a id="schema_PostDatasetImportFromDatasetInSchema"></a>
<a id="tocSpostdatasetimportfromdatasetinschema"></a>
<a id="tocspostdatasetimportfromdatasetinschema"></a>

```json
{
  "dataset_record_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset_record_ids|[string(uuid)]|true|none|none|

<h2 id="tocS_PostDatasetImportFromExplorerInSchema">PostDatasetImportFromExplorerInSchema</h2>
<!-- backwards compatibility -->
<a id="schemapostdatasetimportfromexplorerinschema"></a>
<a id="schema_PostDatasetImportFromExplorerInSchema"></a>
<a id="tocSpostdatasetimportfromexplorerinschema"></a>
<a id="tocspostdatasetimportfromexplorerinschema"></a>

```json
{
  "completion_event_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion_event_ids|[string]|true|none|none|

<h2 id="tocS_PostDatasetImportFromFileInSchema">PostDatasetImportFromFileInSchema</h2>
<!-- backwards compatibility -->
<a id="schemapostdatasetimportfromfileinschema"></a>
<a id="schema_PostDatasetImportFromFileInSchema"></a>
<a id="tocSpostdatasetimportfromfileinschema"></a>
<a id="tocspostdatasetimportfromfileinschema"></a>

```json
{
  "file_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_id|string|true|none|none|

<h2 id="tocS_PostDatasetImportFromPlaygroundInSchema">PostDatasetImportFromPlaygroundInSchema</h2>
<!-- backwards compatibility -->
<a id="schemapostdatasetimportfromplaygroundinschema"></a>
<a id="schema_PostDatasetImportFromPlaygroundInSchema"></a>
<a id="tocSpostdatasetimportfromplaygroundinschema"></a>
<a id="tocspostdatasetimportfromplaygroundinschema"></a>

```json
{
  "conversation_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversation_ids|[string]|true|none|none|

<h2 id="tocS_PostDatasetInSchema">PostDatasetInSchema</h2>
<!-- backwards compatibility -->
<a id="schemapostdatasetinschema"></a>
<a id="schema_PostDatasetInSchema"></a>
<a id="tocSpostdatasetinschema"></a>
<a id="tocspostdatasetinschema"></a>

```json
{
  "name": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|true|none|none|

<h2 id="tocS_PostDatasetRecordInSchema">PostDatasetRecordInSchema</h2>
<!-- backwards compatibility -->
<a id="schemapostdatasetrecordinschema"></a>
<a id="schema_PostDatasetRecordInSchema"></a>
<a id="tocSpostdatasetrecordinschema"></a>
<a id="tocspostdatasetrecordinschema"></a>

```json
{
  "payload": {
    "messages": [
      {}
    ]
  },
  "properties": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[ConversationPayload](#schemaconversationpayload)|true|none|none|
|properties|object|true|none|none|

<h2 id="tocS_PostDatasetRecordJudgingInSchema">PostDatasetRecordJudgingInSchema</h2>
<!-- backwards compatibility -->
<a id="schemapostdatasetrecordjudginginschema"></a>
<a id="schema_PostDatasetRecordJudgingInSchema"></a>
<a id="tocSpostdatasetrecordjudginginschema"></a>
<a id="tocspostdatasetrecordjudginginschema"></a>

```json
{
  "judge_definition": {
    "name": "string",
    "description": "string",
    "model_name": "string",
    "output": {
      "type": "CLASSIFICATION",
      "options": [
        {
          "value": "string",
          "description": "string"
        }
      ]
    },
    "instructions": "string",
    "tools": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|judge_definition|[PostJudgeInSchema](#schemapostjudgeinschema)|true|none|none|

<h2 id="tocS_PostJudgeInSchema">PostJudgeInSchema</h2>
<!-- backwards compatibility -->
<a id="schemapostjudgeinschema"></a>
<a id="schema_PostJudgeInSchema"></a>
<a id="tocSpostjudgeinschema"></a>
<a id="tocspostjudgeinschema"></a>

```json
{
  "name": "string",
  "description": "string",
  "model_name": "string",
  "output": {
    "type": "CLASSIFICATION",
    "options": [
      {
        "value": "string",
        "description": "string"
      }
    ]
  },
  "instructions": "string",
  "tools": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|true|none|none|
|model_name|string|true|none|none|
|output|[JudgeClassificationOutput](#schemajudgeclassificationoutput) \| [JudgeRegressionOutput](#schemajudgeregressionoutput)|true|none|none|
|instructions|string|true|none|none|
|tools|[string]|true|none|none|

<h2 id="tocS_PutDatasetRecordPayloadInSchema">PutDatasetRecordPayloadInSchema</h2>
<!-- backwards compatibility -->
<a id="schemaputdatasetrecordpayloadinschema"></a>
<a id="schema_PutDatasetRecordPayloadInSchema"></a>
<a id="tocSputdatasetrecordpayloadinschema"></a>
<a id="tocsputdatasetrecordpayloadinschema"></a>

```json
{
  "payload": {
    "messages": [
      {}
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|[ConversationPayload](#schemaconversationpayload)|true|none|none|

<h2 id="tocS_PutDatasetRecordPropertiesInSchema">PutDatasetRecordPropertiesInSchema</h2>
<!-- backwards compatibility -->
<a id="schemaputdatasetrecordpropertiesinschema"></a>
<a id="schema_PutDatasetRecordPropertiesInSchema"></a>
<a id="tocSputdatasetrecordpropertiesinschema"></a>
<a id="tocsputdatasetrecordpropertiesinschema"></a>

```json
{
  "properties": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|object|true|none|none|

<h2 id="tocS_PutJudgeInSchema">PutJudgeInSchema</h2>
<!-- backwards compatibility -->
<a id="schemaputjudgeinschema"></a>
<a id="schema_PutJudgeInSchema"></a>
<a id="tocSputjudgeinschema"></a>
<a id="tocsputjudgeinschema"></a>

```json
{
  "name": "string",
  "description": "string",
  "model_name": "string",
  "output": {
    "type": "CLASSIFICATION",
    "options": [
      {
        "value": "string",
        "description": "string"
      }
    ]
  },
  "instructions": "string",
  "tools": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|true|none|none|
|model_name|string|true|none|none|
|output|[JudgeClassificationOutput](#schemajudgeclassificationoutput) \| [JudgeRegressionOutput](#schemajudgeregressionoutput)|true|none|none|
|instructions|string|true|none|none|
|tools|[string]|true|none|none|

<h2 id="tocS_ObservabilityErrorCode">ObservabilityErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaobservabilityerrorcode"></a>
<a id="schema_ObservabilityErrorCode"></a>
<a id="tocSobservabilityerrorcode"></a>
<a id="tocsobservabilityerrorcode"></a>

```json
"UNKNOWN_ERROR"
```

<h2 id="tocS_ObservabilityErrorDetail">ObservabilityErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaobservabilityerrordetail"></a>
<a id="schema_ObservabilityErrorDetail"></a>
<a id="tocSobservabilityerrordetail"></a>
<a id="tocsobservabilityerrordetail"></a>

```json
{
  "message": "string",
  "error_code": "UNKNOWN_ERROR"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|error_code|[ObservabilityErrorCode](#schemaobservabilityerrorcode) \| null|true|none|none|

<h2 id="tocS_ObservabilityError">ObservabilityError</h2>
<!-- backwards compatibility -->
<a id="schemaobservabilityerror"></a>
<a id="schema_ObservabilityError"></a>
<a id="tocSobservabilityerror"></a>
<a id="tocsobservabilityerror"></a>

```json
{
  "detail": {
    "message": "string",
    "error_code": "UNKNOWN_ERROR"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[ObservabilityErrorDetail](#schemaobservabilityerrordetail)|true|none|none|

<h2 id="tocS_JudgeConversationRequest">JudgeConversationRequest</h2>
<!-- backwards compatibility -->
<a id="schemajudgeconversationrequest"></a>
<a id="schema_JudgeConversationRequest"></a>
<a id="tocSjudgeconversationrequest"></a>
<a id="tocsjudgeconversationrequest"></a>

```json
{
  "messages": [
    {}
  ],
  "properties": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|true|none|none|
|properties|object \| null|false|none|none|

<h2 id="tocS_Annotations">Annotations</h2>
<!-- backwards compatibility -->
<a id="schemaannotations"></a>
<a id="schema_Annotations"></a>
<a id="tocSannotations"></a>
<a id="tocsannotations"></a>

```json
{
  "audience": [
    "user"
  ],
  "priority": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|[string] \| null|false|none|none|
|priority|number \| null|false|none|none|

<h2 id="tocS_AudioContent">AudioContent</h2>
<!-- backwards compatibility -->
<a id="schemaaudiocontent"></a>
<a id="schema_AudioContent"></a>
<a id="tocSaudiocontent"></a>
<a id="tocsaudiocontent"></a>

```json
{
  "type": "audio",
  "data": "string",
  "mimeType": "string",
  "annotations": {
    "audience": [
      "user"
    ],
    "priority": 0
  },
  "_meta": {}
}
```

Audio content for a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|data|string|true|none|none|
|mimeType|string|true|none|none|
|annotations|[Annotations](#schemaannotations) \| null|false|none|none|
|_meta|object \| null|false|none|none|

<h2 id="tocS_AuthData">AuthData</h2>
<!-- backwards compatibility -->
<a id="schemaauthdata"></a>
<a id="schema_AuthData"></a>
<a id="tocSauthdata"></a>
<a id="tocsauthdata"></a>

```json
{
  "client_id": "string",
  "client_secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|none|
|client_secret|string|true|none|none|

<h2 id="tocS_BlobResourceContents">BlobResourceContents</h2>
<!-- backwards compatibility -->
<a id="schemablobresourcecontents"></a>
<a id="schema_BlobResourceContents"></a>
<a id="tocSblobresourcecontents"></a>
<a id="tocsblobresourcecontents"></a>

```json
{
  "uri": "http://example.com",
  "mimeType": "string",
  "_meta": {},
  "blob": "string"
}
```

Binary contents of a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string(uri)|true|none|none|
|mimeType|string \| null|false|none|none|
|_meta|object \| null|false|none|none|
|blob|string|true|none|none|

<h2 id="tocS_Connector">Connector</h2>
<!-- backwards compatibility -->
<a id="schemaconnector"></a>
<a id="schema_Connector"></a>
<a id="tocSconnector"></a>
<a id="tocsconnector"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "description": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "modified_at": "1970-01-01T00:00:00Z",
  "server": "string",
  "auth_type": "string",
  "tools": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "system_prompt": "string",
      "locale": {
        "name": {
          "property1": "string",
          "property2": "string"
        },
        "description": {
          "property1": "string",
          "property2": "string"
        },
        "usage_sentence": {
          "property1": "string",
          "property2": "string"
        }
      },
      "jsonschema": {},
      "execution_config": {
        "type": "string"
      },
      "visibility": "shared_global",
      "created_at": "1970-01-01T00:00:00Z",
      "modified_at": "1970-01-01T00:00:00Z",
      "active": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|modified_at|string(date-time)|true|none|none|
|server|string \| null|false|none|none|
|auth_type|string \| null|false|none|none|
|tools|[[integrations__schemas__api__tool__Tool](#schemaintegrations__schemas__api__tool__tool)] \| null|false|none|none|

<h2 id="tocS_ConnectorMCPCreate">ConnectorMCPCreate</h2>
<!-- backwards compatibility -->
<a id="schemaconnectormcpcreate"></a>
<a id="schema_ConnectorMCPCreate"></a>
<a id="tocSconnectormcpcreate"></a>
<a id="tocsconnectormcpcreate"></a>

```json
{
  "name": "string",
  "description": "string",
  "icon_url": "string",
  "visibility": "shared_global",
  "server": "http://example.com",
  "headers": {},
  "auth_data": {
    "client_id": "string",
    "client_secret": "string"
  },
  "system_prompt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the connector. Should be 64 char length maximum, alphanumeric, only underscores/dashes.|
|description|string|true|none|The description of the connector.|
|icon_url|string \| null|false|none|The optional url of the icon you want to associate to the connector.|
|visibility|[ResourceVisibility](#schemaresourcevisibility)|false|none|Visibility of the connector. Use 'shared_workspace' for workspace scoped connectors, or 'private' for private connectors.|
|server|string(uri)|true|none|The url of the MCP server.|
|headers|object \| null|false|none|Optional organization-level headers to be sent with the request to the mcp server.|
|auth_data|[AuthData](#schemaauthdata) \| null|false|none|Optional additional authentication data for the connector.|
|system_prompt|string \| null|false|none|Optional system prompt for the connector.|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|shared_global|
|visibility|shared_org|
|visibility|shared_workspace|
|visibility|private|

<h2 id="tocS_ConnectorMCPUpdate">ConnectorMCPUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaconnectormcpupdate"></a>
<a id="schema_ConnectorMCPUpdate"></a>
<a id="tocSconnectormcpupdate"></a>
<a id="tocsconnectormcpupdate"></a>

```json
{
  "name": "string",
  "description": "string",
  "icon_url": "string",
  "system_prompt": "string",
  "connection_config": {},
  "connection_secrets": {},
  "server": "http://example.com",
  "headers": {},
  "auth_data": {
    "client_id": "string",
    "client_secret": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|The name of the connector.|
|description|string \| null|false|none|The description of the connector.|
|icon_url|string \| null|false|none|The optional url of the icon you want to associate to the connector.|
|system_prompt|string \| null|false|none|Optional system prompt for the connector.|
|connection_config|object \| null|false|none|Optional new connection config.|
|connection_secrets|object \| null|false|none|Optional new connection secrets|
|server|string(uri) \| null|false|none|New server url for your mcp connector.|
|headers|object \| null|false|none|New headers for your mcp connector.|
|auth_data|[AuthData](#schemaauthdata) \| null|false|none|New authentication data for your mcp connector.|

<h2 id="tocS_ConnectorSupportedLanguage">ConnectorSupportedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorsupportedlanguage"></a>
<a id="schema_ConnectorSupportedLanguage"></a>
<a id="tocSconnectorsupportedlanguage"></a>
<a id="tocsconnectorsupportedlanguage"></a>

```json
"en"
```

<h2 id="tocS_ConnectorsQueryFilters">ConnectorsQueryFilters</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorsqueryfilters"></a>
<a id="schema_ConnectorsQueryFilters"></a>
<a id="tocSconnectorsqueryfilters"></a>
<a id="tocsconnectorsqueryfilters"></a>

```json
{
  "active": true,
  "fetch_connection_secrets": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean \| null|false|none|Filter for active connectors for a given user, workspace and organization.|
|fetch_connection_secrets|boolean|false|none|Fetch connection secrets.|

<h2 id="tocS_EmbeddedResource">EmbeddedResource</h2>
<!-- backwards compatibility -->
<a id="schemaembeddedresource"></a>
<a id="schema_EmbeddedResource"></a>
<a id="tocSembeddedresource"></a>
<a id="tocsembeddedresource"></a>

```json
{
  "type": "resource",
  "resource": {
    "uri": "http://example.com",
    "mimeType": "string",
    "_meta": {},
    "text": "string"
  },
  "annotations": {
    "audience": [
      "user"
    ],
    "priority": 0
  },
  "_meta": {}
}
```

The contents of a resource, embedded into a prompt or tool call result.

It is up to the client how best to render embedded resources for the benefit
of the LLM and/or the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|resource|[TextResourceContents](#schematextresourcecontents) \| [BlobResourceContents](#schemablobresourcecontents)|true|none|none|
|annotations|[Annotations](#schemaannotations) \| null|false|none|none|
|_meta|object \| null|false|none|none|

<h2 id="tocS_ExecutionConfig">ExecutionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionconfig"></a>
<a id="schema_ExecutionConfig"></a>
<a id="tocSexecutionconfig"></a>
<a id="tocsexecutionconfig"></a>

```json
{
  "type": "string"
}
```

Not typed since mcp config can changed / not stable
we allow all extra fields and this is a dict
TODO: once mcp is stable, we need to type this

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_ImageContent">ImageContent</h2>
<!-- backwards compatibility -->
<a id="schemaimagecontent"></a>
<a id="schema_ImageContent"></a>
<a id="tocSimagecontent"></a>
<a id="tocsimagecontent"></a>

```json
{
  "type": "image",
  "data": "string",
  "mimeType": "string",
  "annotations": {
    "audience": [
      "user"
    ],
    "priority": 0
  },
  "_meta": {}
}
```

Image content for a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|data|string|true|none|none|
|mimeType|string|true|none|none|
|annotations|[Annotations](#schemaannotations) \| null|false|none|none|
|_meta|object \| null|false|none|none|

<h2 id="tocS_MCPResultMetadata">MCPResultMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamcpresultmetadata"></a>
<a id="schema_MCPResultMetadata"></a>
<a id="tocSmcpresultmetadata"></a>
<a id="tocsmcpresultmetadata"></a>

```json
{
  "isError": false,
  "structuredContent": {},
  "_meta": {}
}
```

MCP-specific result metadata (isError, structuredContent, _meta).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isError|boolean|false|none|none|
|structuredContent|object \| null|false|none|none|
|_meta|object \| null|false|none|none|

<h2 id="tocS_MCPToolCallMetadata">MCPToolCallMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamcptoolcallmetadata"></a>
<a id="schema_MCPToolCallMetadata"></a>
<a id="tocSmcptoolcallmetadata"></a>
<a id="tocsmcptoolcallmetadata"></a>

```json
{
  "mcp_meta": {
    "isError": false,
    "structuredContent": {},
    "_meta": {}
  }
}
```

Metadata wrapper for MCP tool call responses.

Nests MCP-specific fields under `mcp_meta` to avoid collisions with other
metadata keys (e.g. `tool_call_result`) in Harmattan's streaming deltas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mcp_meta|[MCPResultMetadata](#schemamcpresultmetadata) \| null|false|none|none|

<h2 id="tocS_MCPToolCallRequest">MCPToolCallRequest</h2>
<!-- backwards compatibility -->
<a id="schemamcptoolcallrequest"></a>
<a id="schema_MCPToolCallRequest"></a>
<a id="tocSmcptoolcallrequest"></a>
<a id="tocsmcptoolcallrequest"></a>

```json
{
  "arguments": {}
}
```

Request body for calling an MCP tool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arguments|object|false|none|none|

<h2 id="tocS_MCPToolCallResponse">MCPToolCallResponse</h2>
<!-- backwards compatibility -->
<a id="schemamcptoolcallresponse"></a>
<a id="schema_MCPToolCallResponse"></a>
<a id="tocSmcptoolcallresponse"></a>
<a id="tocsmcptoolcallresponse"></a>

```json
{
  "content": [
    {
      "type": "text",
      "text": "string",
      "annotations": {
        "audience": [
          "user"
        ],
        "priority": 0
      },
      "_meta": {}
    }
  ],
  "metadata": {
    "mcp_meta": {
      "isError": false,
      "structuredContent": {},
      "_meta": {}
    }
  }
}
```

Response from calling an MCP tool.

We override mcp_types.CallToolResult because:
- Models only support `content`, not `structuredContent` at top level
- Downstream consumers (le-chat, etc.) need structuredContent/isError/_meta via metadata

SYNC: Keep in sync with Harmattan (orchestrator) for harmonized tool result processing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[TextContent](#schematextcontent) \| [ImageContent](#schemaimagecontent) \| [AudioContent](#schemaaudiocontent) \| [ResourceLink](#schemaresourcelink) \| [EmbeddedResource](#schemaembeddedresource)]|true|none|none|
|metadata|[MCPToolCallMetadata](#schemamcptoolcallmetadata) \| null|false|none|none|

<h2 id="tocS_MessageResponse">MessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessageresponse"></a>
<a id="schema_MessageResponse"></a>
<a id="tocSmessageresponse"></a>
<a id="tocsmessageresponse"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_PaginationResponse">PaginationResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginationresponse"></a>
<a id="schema_PaginationResponse"></a>
<a id="tocSpaginationresponse"></a>
<a id="tocspaginationresponse"></a>

```json
{
  "next_cursor": "string",
  "page_size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_cursor|string \| null|false|none|none|
|page_size|integer|true|none|none|

<h2 id="tocS_ResourceLink">ResourceLink</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelink"></a>
<a id="schema_ResourceLink"></a>
<a id="tocSresourcelink"></a>
<a id="tocsresourcelink"></a>

```json
{
  "name": "string",
  "title": "string",
  "uri": "http://example.com",
  "description": "string",
  "mimeType": "string",
  "size": 0,
  "icons": [
    {
      "src": "string",
      "mimeType": "string",
      "sizes": [
        "string"
      ]
    }
  ],
  "annotations": {
    "audience": [
      "user"
    ],
    "priority": 0
  },
  "_meta": {},
  "type": "resource_link"
}
```

A resource that the server is capable of reading, included in a prompt or tool call result.

Note: resource links returned by tools are not guaranteed to appear in the results of `resources/list` requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|title|string \| null|false|none|none|
|uri|string(uri)|true|none|none|
|description|string \| null|false|none|none|
|mimeType|string \| null|false|none|none|
|size|integer \| null|false|none|none|
|icons|[[MCPServerIcon](#schemamcpservericon)] \| null|false|none|none|
|annotations|[Annotations](#schemaannotations) \| null|false|none|none|
|_meta|object \| null|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_ResourceVisibility">ResourceVisibility</h2>
<!-- backwards compatibility -->
<a id="schemaresourcevisibility"></a>
<a id="schema_ResourceVisibility"></a>
<a id="tocSresourcevisibility"></a>
<a id="tocsresourcevisibility"></a>

```json
"shared_global"
```

<h2 id="tocS_TextContent">TextContent</h2>
<!-- backwards compatibility -->
<a id="schematextcontent"></a>
<a id="schema_TextContent"></a>
<a id="tocStextcontent"></a>
<a id="tocstextcontent"></a>

```json
{
  "type": "text",
  "text": "string",
  "annotations": {
    "audience": [
      "user"
    ],
    "priority": 0
  },
  "_meta": {}
}
```

Text content for a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|text|string|true|none|none|
|annotations|[Annotations](#schemaannotations) \| null|false|none|none|
|_meta|object \| null|false|none|none|

<h2 id="tocS_TextResourceContents">TextResourceContents</h2>
<!-- backwards compatibility -->
<a id="schematextresourcecontents"></a>
<a id="schema_TextResourceContents"></a>
<a id="tocStextresourcecontents"></a>
<a id="tocstextresourcecontents"></a>

```json
{
  "uri": "http://example.com",
  "mimeType": "string",
  "_meta": {},
  "text": "string"
}
```

Text contents of a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string(uri)|true|none|none|
|mimeType|string \| null|false|none|none|
|_meta|object \| null|false|none|none|
|text|string|true|none|none|

<h2 id="tocS_integrations__schemas__api__tool__Tool">integrations__schemas__api__tool__Tool</h2>
<!-- backwards compatibility -->
<a id="schemaintegrations__schemas__api__tool__tool"></a>
<a id="schema_integrations__schemas__api__tool__Tool"></a>
<a id="tocSintegrations__schemas__api__tool__tool"></a>
<a id="tocsintegrations__schemas__api__tool__tool"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "system_prompt": "string",
  "locale": {
    "name": {
      "property1": "string",
      "property2": "string"
    },
    "description": {
      "property1": "string",
      "property2": "string"
    },
    "usage_sentence": {
      "property1": "string",
      "property2": "string"
    }
  },
  "jsonschema": {},
  "execution_config": {
    "type": "string"
  },
  "visibility": "shared_global",
  "created_at": "1970-01-01T00:00:00Z",
  "modified_at": "1970-01-01T00:00:00Z",
  "active": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|system_prompt|string \| null|false|none|none|
|locale|[integrations__schemas__turbine__ToolLocale](#schemaintegrations__schemas__turbine__toollocale) \| null|false|none|none|
|jsonschema|object \| null|false|none|none|
|execution_config|[ExecutionConfig](#schemaexecutionconfig) \| null|true|none|none|
|visibility|[ResourceVisibility](#schemaresourcevisibility)|true|none|none|
|created_at|string(date-time)|true|none|none|
|modified_at|string(date-time)|true|none|none|
|active|boolean \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|shared_global|
|visibility|shared_org|
|visibility|shared_workspace|
|visibility|private|

<h2 id="tocS_integrations__schemas__turbine__ToolLocale">integrations__schemas__turbine__ToolLocale</h2>
<!-- backwards compatibility -->
<a id="schemaintegrations__schemas__turbine__toollocale"></a>
<a id="schema_integrations__schemas__turbine__ToolLocale"></a>
<a id="tocSintegrations__schemas__turbine__toollocale"></a>
<a id="tocsintegrations__schemas__turbine__toollocale"></a>

```json
{
  "name": {
    "property1": "string",
    "property2": "string"
  },
  "description": {
    "property1": "string",
    "property2": "string"
  },
  "usage_sentence": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|true|none|none|
|usage_sentence|object|true|none|none|

<h2 id="tocS_PaginatedConnectors">PaginatedConnectors</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedconnectors"></a>
<a id="schema_PaginatedConnectors"></a>
<a id="tocSpaginatedconnectors"></a>
<a id="tocspaginatedconnectors"></a>

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "description": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "modified_at": "1970-01-01T00:00:00Z",
      "server": "string",
      "auth_type": "string",
      "tools": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "system_prompt": "string",
          "locale": {
            "name": {
              "property1": "string",
              "property2": "string"
            },
            "description": {
              "property1": "string",
              "property2": "string"
            },
            "usage_sentence": {
              "property1": "string",
              "property2": "string"
            }
          },
          "jsonschema": {},
          "execution_config": {
            "type": "string"
          },
          "visibility": "shared_global",
          "created_at": "1970-01-01T00:00:00Z",
          "modified_at": "1970-01-01T00:00:00Z",
          "active": true
        }
      ]
    }
  ],
  "pagination": {
    "next_cursor": "string",
    "page_size": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Connector](#schemaconnector)]|true|none|none|
|pagination|[PaginationResponse](#schemapaginationresponse)|true|none|none|

<h2 id="tocS_MCPServerIcon">MCPServerIcon</h2>
<!-- backwards compatibility -->
<a id="schemamcpservericon"></a>
<a id="schema_MCPServerIcon"></a>
<a id="tocSmcpservericon"></a>
<a id="tocsmcpservericon"></a>

```json
{
  "src": "string",
  "mimeType": "string",
  "sizes": [
    "string"
  ]
}
```

An icon for display in user interfaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|src|string|true|none|none|
|mimeType|string \| null|false|none|none|
|sizes|[string] \| null|false|none|none|

<h2 id="tocS_CompletionEvent">CompletionEvent</h2>
<!-- backwards compatibility -->
<a id="schemacompletionevent"></a>
<a id="schema_CompletionEvent"></a>
<a id="tocScompletionevent"></a>
<a id="tocscompletionevent"></a>

```json
{
  "data": {
    "id": "string",
    "object": "string",
    "created": 0,
    "model": "string",
    "usage": {
      "prompt_tokens": 0,
      "completion_tokens": 0,
      "total_tokens": 0,
      "prompt_audio_seconds": 0,
      "num_cached_tokens": 0,
      "prompt_tokens_details": {
        "cached_tokens": 0
      },
      "prompt_token_details": {
        "cached_tokens": 0
      }
    },
    "choices": [
      {
        "index": 0,
        "delta": {
          "role": "string",
          "content": "string",
          "tool_calls": [
            {
              "id": "null",
              "type": "function",
              "function": {
                "name": "string",
                "arguments": {}
              },
              "index": 0
            }
          ]
        },
        "finish_reason": "stop"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CompletionChunk](#schemacompletionchunk)|true|none|none|

<h2 id="tocS_CompletionChunk">CompletionChunk</h2>
<!-- backwards compatibility -->
<a id="schemacompletionchunk"></a>
<a id="schema_CompletionChunk"></a>
<a id="tocScompletionchunk"></a>
<a id="tocscompletionchunk"></a>

```json
{
  "id": "string",
  "object": "string",
  "created": 0,
  "model": "string",
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_audio_seconds": 0,
    "num_cached_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "prompt_token_details": {
      "cached_tokens": 0
    }
  },
  "choices": [
    {
      "index": 0,
      "delta": {
        "role": "string",
        "content": "string",
        "tool_calls": [
          {
            "id": "null",
            "type": "function",
            "function": {
              "name": "string",
              "arguments": {}
            },
            "index": 0
          }
        ]
      },
      "finish_reason": "stop"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|object|string|false|none|none|
|created|integer|false|none|none|
|model|string|true|none|none|
|usage|[UsageInfo](#schemausageinfo)|false|none|none|
|choices|[[CompletionResponseStreamChoice](#schemacompletionresponsestreamchoice)]|true|none|none|

<h2 id="tocS_CompletionResponseStreamChoice">CompletionResponseStreamChoice</h2>
<!-- backwards compatibility -->
<a id="schemacompletionresponsestreamchoice"></a>
<a id="schema_CompletionResponseStreamChoice"></a>
<a id="tocScompletionresponsestreamchoice"></a>
<a id="tocscompletionresponsestreamchoice"></a>

```json
{
  "index": 0,
  "delta": {
    "role": "string",
    "content": "string",
    "tool_calls": [
      {
        "id": "null",
        "type": "function",
        "function": {
          "name": "string",
          "arguments": {}
        },
        "index": 0
      }
    ]
  },
  "finish_reason": "stop"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer|true|none|none|
|delta|[DeltaMessage](#schemadeltamessage)|true|none|none|
|finish_reason|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|finish_reason|stop|
|finish_reason|length|
|finish_reason|error|
|finish_reason|tool_calls|
|finish_reason|null|

<h2 id="tocS_ResponseBase">ResponseBase</h2>
<!-- backwards compatibility -->
<a id="schemaresponsebase"></a>
<a id="schema_ResponseBase"></a>
<a id="tocSresponsebase"></a>
<a id="tocsresponsebase"></a>

```json
{
  "id": "cmpl-e5cc70bb28c444948073e77776eb30ef",
  "object": "chat.completion",
  "model": "mistral-small-latest",
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_audio_seconds": 0,
    "num_cached_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "prompt_token_details": {
      "cached_tokens": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|object|string|false|none|none|
|model|string|false|none|none|
|usage|[UsageInfo](#schemausageinfo)|false|none|none|

<h2 id="tocS_ChatCompletionChoice">ChatCompletionChoice</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionchoice"></a>
<a id="schema_ChatCompletionChoice"></a>
<a id="tocSchatcompletionchoice"></a>
<a id="tocschatcompletionchoice"></a>

```json
{
  "index": 0,
  "message": {
    "role": "assistant",
    "content": "string",
    "tool_calls": [
      {
        "id": "null",
        "type": "function",
        "function": {
          "name": "string",
          "arguments": {}
        },
        "index": 0
      }
    ],
    "prefix": false
  },
  "finish_reason": "stop"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer|true|none|none|
|message|[AssistantMessage](#schemaassistantmessage)|true|none|none|
|finish_reason|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|finish_reason|stop|
|finish_reason|length|
|finish_reason|model_length|
|finish_reason|error|
|finish_reason|tool_calls|

<h2 id="tocS_DeltaMessage">DeltaMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeltamessage"></a>
<a id="schema_DeltaMessage"></a>
<a id="tocSdeltamessage"></a>
<a id="tocsdeltamessage"></a>

```json
{
  "role": "string",
  "content": "string",
  "tool_calls": [
    {
      "id": "null",
      "type": "function",
      "function": {
        "name": "string",
        "arguments": {}
      },
      "index": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string \| null|false|none|none|
|content|string \| null \| [[ContentChunk](#schemacontentchunk)]|false|none|none|
|tool_calls|null \| [[ToolCall](#schematoolcall)]|false|none|none|

<h2 id="tocS_ChatCompletionResponseBase">ChatCompletionResponseBase</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionresponsebase"></a>
<a id="schema_ChatCompletionResponseBase"></a>
<a id="tocSchatcompletionresponsebase"></a>
<a id="tocschatcompletionresponsebase"></a>

```json
{
  "id": "cmpl-e5cc70bb28c444948073e77776eb30ef",
  "object": "chat.completion",
  "model": "mistral-small-latest",
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_audio_seconds": 0,
    "num_cached_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "prompt_token_details": {
      "cached_tokens": 0
    }
  },
  "created": 1702256327
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|object|string|false|none|none|
|model|string|false|none|none|
|usage|[UsageInfo](#schemausageinfo)|false|none|none|
|created|integer|false|none|none|

<h2 id="tocS_ChatCompletionResponse">ChatCompletionResponse</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionresponse"></a>
<a id="schema_ChatCompletionResponse"></a>
<a id="tocSchatcompletionresponse"></a>
<a id="tocschatcompletionresponse"></a>

```json
{
  "id": "cmpl-e5cc70bb28c444948073e77776eb30ef",
  "object": "chat.completion",
  "model": "mistral-small-latest",
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_audio_seconds": 0,
    "num_cached_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "prompt_token_details": {
      "cached_tokens": 0
    }
  },
  "created": 1702256327,
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "string",
        "tool_calls": [
          {
            "id": "null",
            "type": "function",
            "function": {
              "name": "string",
              "arguments": {}
            },
            "index": 0
          }
        ],
        "prefix": false
      },
      "finish_reason": "stop"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|object|string|true|none|none|
|model|string|true|none|none|
|usage|[UsageInfo](#schemausageinfo)|true|none|none|
|created|integer|true|none|none|
|choices|[[ChatCompletionChoice](#schemachatcompletionchoice)]|true|none|none|

<h2 id="tocS_FIMCompletionResponse">FIMCompletionResponse</h2>
<!-- backwards compatibility -->
<a id="schemafimcompletionresponse"></a>
<a id="schema_FIMCompletionResponse"></a>
<a id="tocSfimcompletionresponse"></a>
<a id="tocsfimcompletionresponse"></a>

```json
{
  "id": "cmpl-e5cc70bb28c444948073e77776eb30ef",
  "object": "chat.completion",
  "model": "codestral-latest",
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_audio_seconds": 0,
    "num_cached_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "prompt_token_details": {
      "cached_tokens": 0
    }
  },
  "created": 1702256327,
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "string",
        "tool_calls": [
          {
            "id": "null",
            "type": "function",
            "function": {
              "name": "string",
              "arguments": {}
            },
            "index": 0
          }
        ],
        "prefix": false
      },
      "finish_reason": "stop"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|object|string|true|none|none|
|model|string|true|none|none|
|usage|[UsageInfo](#schemausageinfo)|true|none|none|
|created|integer|true|none|none|
|choices|[[ChatCompletionChoice](#schemachatcompletionchoice)]|true|none|none|
|model|string|true|none|none|

<h2 id="tocS_EmbeddingResponseData">EmbeddingResponseData</h2>
<!-- backwards compatibility -->
<a id="schemaembeddingresponsedata"></a>
<a id="schema_EmbeddingResponseData"></a>
<a id="tocSembeddingresponsedata"></a>
<a id="tocsembeddingresponsedata"></a>

```json
{
  "object": "embedding",
  "embedding": [
    0.1,
    0.2,
    0.3
  ],
  "index": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|embedding|[number]|false|none|none|
|index|integer|false|none|none|

<h2 id="tocS_EmbeddingResponse">EmbeddingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaembeddingresponse"></a>
<a id="schema_EmbeddingResponse"></a>
<a id="tocSembeddingresponse"></a>
<a id="tocsembeddingresponse"></a>

```json
{
  "id": "cmpl-e5cc70bb28c444948073e77776eb30ef",
  "object": "chat.completion",
  "model": "mistral-small-latest",
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_audio_seconds": 0,
    "num_cached_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "prompt_token_details": {
      "cached_tokens": 0
    }
  },
  "data": [
    {
      "object": "embedding",
      "embedding": [
        0.1,
        0.2,
        0.3
      ],
      "index": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|object|string|true|none|none|
|model|string|true|none|none|
|usage|[UsageInfo](#schemausageinfo)|true|none|none|
|data|[[EmbeddingResponseData](#schemaembeddingresponsedata)]|true|none|none|

<h2 id="tocS_ActivityTaskCompletedResponse">ActivityTaskCompletedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskcompletedresponse"></a>
<a id="schema_ActivityTaskCompletedResponse"></a>
<a id="tocSactivitytaskcompletedresponse"></a>
<a id="tocsactivitytaskcompletedresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "ACTIVITY_TASK_COMPLETED",
  "attributes": {
    "task_id": "string",
    "activity_name": "string",
    "result": {
      "type": "json",
      "value": null
    }
  }
}
```

Emitted when an activity task completes successfully.

Contains timing information about the successful execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[ActivityTaskCompletedAttributesResponse](#schemaactivitytaskcompletedattributesresponse)|true|none|Event-specific attributes.|

<h2 id="tocS_ActivityTaskCompletedAttributesResponse">ActivityTaskCompletedAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskcompletedattributesresponse"></a>
<a id="schema_ActivityTaskCompletedAttributesResponse"></a>
<a id="tocSactivitytaskcompletedattributesresponse"></a>
<a id="tocsactivitytaskcompletedattributesresponse"></a>

```json
{
  "task_id": "string",
  "activity_name": "string",
  "result": {
    "type": "json",
    "value": null
  }
}
```

Attributes for activity task completed events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string|true|none|Unique identifier for the activity task within the workflow.|
|activity_name|string|true|none|The registered name of the activity being executed.|
|result|[JSONPayloadResponse](#schemajsonpayloadresponse)|true|none|The result returned by the activity.|

<h2 id="tocS_ActivityTaskFailedResponse">ActivityTaskFailedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskfailedresponse"></a>
<a id="schema_ActivityTaskFailedResponse"></a>
<a id="tocSactivitytaskfailedresponse"></a>
<a id="tocsactivitytaskfailedresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "ACTIVITY_TASK_FAILED",
  "attributes": {
    "task_id": "string",
    "activity_name": "string",
    "attempt": 0,
    "failure": {
      "message": "string"
    }
  }
}
```

Emitted when an activity task fails after exhausting all retry attempts.

This is a terminal event indicating the activity could not complete successfully.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[ActivityTaskFailedAttributes](#schemaactivitytaskfailedattributes)|true|none|Event-specific attributes.|

<h2 id="tocS_ActivityTaskFailedAttributes">ActivityTaskFailedAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskfailedattributes"></a>
<a id="schema_ActivityTaskFailedAttributes"></a>
<a id="tocSactivitytaskfailedattributes"></a>
<a id="tocsactivitytaskfailedattributes"></a>

```json
{
  "task_id": "string",
  "activity_name": "string",
  "attempt": 0,
  "failure": {
    "message": "string"
  }
}
```

Attributes for activity task failed events (final failure after all retries).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string|true|none|Unique identifier for the activity task within the workflow.|
|activity_name|string|true|none|The registered name of the activity being executed.|
|attempt|integer|true|none|The final attempt number that failed (1-indexed).|
|failure|[Failure](#schemafailure)|true|none|Details about the failure that caused the activity to fail.|

<h2 id="tocS_ActivityTaskRetryingResponse">ActivityTaskRetryingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskretryingresponse"></a>
<a id="schema_ActivityTaskRetryingResponse"></a>
<a id="tocSactivitytaskretryingresponse"></a>
<a id="tocsactivitytaskretryingresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "ACTIVITY_TASK_RETRYING",
  "attributes": {
    "task_id": "string",
    "activity_name": "string",
    "attempt": 0,
    "failure": {
      "message": "string"
    }
  }
}
```

Emitted when an activity task fails and will be retried.

Contains information about the failed attempt and the error that occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[ActivityTaskRetryingAttributes](#schemaactivitytaskretryingattributes)|true|none|Event-specific attributes.|

<h2 id="tocS_ActivityTaskRetryingAttributes">ActivityTaskRetryingAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskretryingattributes"></a>
<a id="schema_ActivityTaskRetryingAttributes"></a>
<a id="tocSactivitytaskretryingattributes"></a>
<a id="tocsactivitytaskretryingattributes"></a>

```json
{
  "task_id": "string",
  "activity_name": "string",
  "attempt": 0,
  "failure": {
    "message": "string"
  }
}
```

Attributes for activity task retrying events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string|true|none|Unique identifier for the activity task within the workflow.|
|activity_name|string|true|none|The registered name of the activity being executed.|
|attempt|integer|true|none|The attempt number that failed (1-indexed).|
|failure|[Failure](#schemafailure)|true|none|Details about the failure that caused the retry.|

<h2 id="tocS_ActivityTaskStartedResponse">ActivityTaskStartedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskstartedresponse"></a>
<a id="schema_ActivityTaskStartedResponse"></a>
<a id="tocSactivitytaskstartedresponse"></a>
<a id="tocsactivitytaskstartedresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "ACTIVITY_TASK_STARTED",
  "attributes": {
    "task_id": "string",
    "activity_name": "string",
    "input": {
      "type": "json",
      "value": null
    }
  }
}
```

Emitted when an activity task begins execution.

This is the first event for an activity, emitted on the first attempt only.
Subsequent retry attempts emit ACTIVITY_TASK_RETRYING instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[ActivityTaskStartedAttributesResponse](#schemaactivitytaskstartedattributesresponse)|true|none|Event-specific attributes.|

<h2 id="tocS_ActivityTaskStartedAttributesResponse">ActivityTaskStartedAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytaskstartedattributesresponse"></a>
<a id="schema_ActivityTaskStartedAttributesResponse"></a>
<a id="tocSactivitytaskstartedattributesresponse"></a>
<a id="tocsactivitytaskstartedattributesresponse"></a>

```json
{
  "task_id": "string",
  "activity_name": "string",
  "input": {
    "type": "json",
    "value": null
  }
}
```

Attributes for activity task started events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string|true|none|Unique identifier for the activity task within the workflow.|
|activity_name|string|true|none|The registered name of the activity being executed.|
|input|[JSONPayloadResponse](#schemajsonpayloadresponse)|true|none|The input arguments passed to the activity.|

<h2 id="tocS_BatchExecutionBody">BatchExecutionBody</h2>
<!-- backwards compatibility -->
<a id="schemabatchexecutionbody"></a>
<a id="schema_BatchExecutionBody"></a>
<a id="tocSbatchexecutionbody"></a>
<a id="tocsbatchexecutionbody"></a>

```json
{
  "execution_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|execution_ids|[string]|true|none|List of execution IDs to process|

<h2 id="tocS_BatchExecutionResponse">BatchExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchexecutionresponse"></a>
<a id="schema_BatchExecutionResponse"></a>
<a id="tocSbatchexecutionresponse"></a>
<a id="tocsbatchexecutionresponse"></a>

```json
{
  "results": {
    "property1": {
      "status": "string",
      "error": "string"
    },
    "property2": {
      "status": "string",
      "error": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|false|none|Mapping of execution_id to result with status and optional error message|

<h2 id="tocS_BatchExecutionResult">BatchExecutionResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchexecutionresult"></a>
<a id="schema_BatchExecutionResult"></a>
<a id="tocSbatchexecutionresult"></a>
<a id="tocsbatchexecutionresult"></a>

```json
{
  "status": "string",
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the operation (success/failure)|
|error|string \| null|false|none|Error message if operation failed|

<h2 id="tocS_CustomTaskCanceledResponse">CustomTaskCanceledResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomtaskcanceledresponse"></a>
<a id="schema_CustomTaskCanceledResponse"></a>
<a id="tocScustomtaskcanceledresponse"></a>
<a id="tocscustomtaskcanceledresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "CUSTOM_TASK_CANCELED",
  "attributes": {
    "custom_task_id": "string",
    "custom_task_type": "string",
    "reason": "string"
  }
}
```

Emitted when a custom task is canceled.

Indicates the task was explicitly stopped before completion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[CustomTaskCanceledAttributes](#schemacustomtaskcanceledattributes)|true|none|Event-specific attributes.|

<h2 id="tocS_CustomTaskCanceledAttributes">CustomTaskCanceledAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacustomtaskcanceledattributes"></a>
<a id="schema_CustomTaskCanceledAttributes"></a>
<a id="tocScustomtaskcanceledattributes"></a>
<a id="tocscustomtaskcanceledattributes"></a>

```json
{
  "custom_task_id": "string",
  "custom_task_type": "string",
  "reason": "string"
}
```

Attributes for custom task canceled events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_task_id|string|true|none|Unique identifier for the custom task within the workflow.|
|custom_task_type|string|true|none|The type/category of the custom task (e.g., 'llm_call', 'api_request').|
|reason|string \| null|false|none|Optional reason provided for the cancellation.|

<h2 id="tocS_CustomTaskCompletedResponse">CustomTaskCompletedResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomtaskcompletedresponse"></a>
<a id="schema_CustomTaskCompletedResponse"></a>
<a id="tocScustomtaskcompletedresponse"></a>
<a id="tocscustomtaskcompletedresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "CUSTOM_TASK_COMPLETED",
  "attributes": {
    "custom_task_id": "string",
    "custom_task_type": "string",
    "payload": {
      "type": "json",
      "value": null
    }
  }
}
```

Emitted when a custom task completes successfully.

Contains the final result of the task execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[CustomTaskCompletedAttributesResponse](#schemacustomtaskcompletedattributesresponse)|true|none|Event-specific attributes.|

<h2 id="tocS_CustomTaskCompletedAttributesResponse">CustomTaskCompletedAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomtaskcompletedattributesresponse"></a>
<a id="schema_CustomTaskCompletedAttributesResponse"></a>
<a id="tocScustomtaskcompletedattributesresponse"></a>
<a id="tocscustomtaskcompletedattributesresponse"></a>

```json
{
  "custom_task_id": "string",
  "custom_task_type": "string",
  "payload": {
    "type": "json",
    "value": null
  }
}
```

Attributes for custom task completed events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_task_id|string|true|none|Unique identifier for the custom task within the workflow.|
|custom_task_type|string|true|none|The type/category of the custom task (e.g., 'llm_call', 'api_request').|
|payload|[JSONPayloadResponse](#schemajsonpayloadresponse)|true|none|The final result of the custom task.|

<h2 id="tocS_CustomTaskFailedResponse">CustomTaskFailedResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomtaskfailedresponse"></a>
<a id="schema_CustomTaskFailedResponse"></a>
<a id="tocScustomtaskfailedresponse"></a>
<a id="tocscustomtaskfailedresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "CUSTOM_TASK_FAILED",
  "attributes": {
    "custom_task_id": "string",
    "custom_task_type": "string",
    "failure": {
      "message": "string"
    }
  }
}
```

Emitted when a custom task fails.

Contains details about the failure for debugging and error handling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[CustomTaskFailedAttributes](#schemacustomtaskfailedattributes)|true|none|Event-specific attributes.|

<h2 id="tocS_CustomTaskFailedAttributes">CustomTaskFailedAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacustomtaskfailedattributes"></a>
<a id="schema_CustomTaskFailedAttributes"></a>
<a id="tocScustomtaskfailedattributes"></a>
<a id="tocscustomtaskfailedattributes"></a>

```json
{
  "custom_task_id": "string",
  "custom_task_type": "string",
  "failure": {
    "message": "string"
  }
}
```

Attributes for custom task failed events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_task_id|string|true|none|Unique identifier for the custom task within the workflow.|
|custom_task_type|string|true|none|The type/category of the custom task (e.g., 'llm_call', 'api_request').|
|failure|[Failure](#schemafailure)|true|none|Details about the failure that caused the task to fail.|

<h2 id="tocS_CustomTaskInProgressResponse">CustomTaskInProgressResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomtaskinprogressresponse"></a>
<a id="schema_CustomTaskInProgressResponse"></a>
<a id="tocScustomtaskinprogressresponse"></a>
<a id="tocscustomtaskinprogressresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "CUSTOM_TASK_IN_PROGRESS",
  "attributes": {
    "custom_task_id": "string",
    "custom_task_type": "string",
    "payload": {
      "type": "json",
      "value": null
    }
  }
}
```

Emitted during custom task execution to report progress.

This event supports streaming updates via JSON or JSON Patch payloads,
enabling real-time progress tracking for long-running tasks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[CustomTaskInProgressAttributesResponse](#schemacustomtaskinprogressattributesresponse)|true|none|Event-specific attributes.|

<h2 id="tocS_CustomTaskInProgressAttributesResponse">CustomTaskInProgressAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomtaskinprogressattributesresponse"></a>
<a id="schema_CustomTaskInProgressAttributesResponse"></a>
<a id="tocScustomtaskinprogressattributesresponse"></a>
<a id="tocscustomtaskinprogressattributesresponse"></a>

```json
{
  "custom_task_id": "string",
  "custom_task_type": "string",
  "payload": {
    "type": "json",
    "value": null
  }
}
```

Attributes for custom task in-progress events with streaming updates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_task_id|string|true|none|Unique identifier for the custom task within the workflow.|
|custom_task_type|string|true|none|The type/category of the custom task (e.g., 'llm_call', 'api_request').|
|payload|[JSONPayloadResponse](#schemajsonpayloadresponse) \| [JSONPatchPayloadResponse](#schemajsonpatchpayloadresponse)|true|none|The current state or incremental update for the task.|

<h2 id="tocS_CustomTaskStartedResponse">CustomTaskStartedResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomtaskstartedresponse"></a>
<a id="schema_CustomTaskStartedResponse"></a>
<a id="tocScustomtaskstartedresponse"></a>
<a id="tocscustomtaskstartedresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "CUSTOM_TASK_STARTED",
  "attributes": {
    "custom_task_id": "string",
    "custom_task_type": "string",
    "payload": {
      "type": "json",
      "value": null
    }
  }
}
```

Emitted when a custom task begins execution.

Custom tasks represent user-defined units of work within a workflow,
such as LLM calls, API requests, or data processing steps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[CustomTaskStartedAttributesResponse](#schemacustomtaskstartedattributesresponse)|true|none|Event-specific attributes.|

<h2 id="tocS_CustomTaskStartedAttributesResponse">CustomTaskStartedAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomtaskstartedattributesresponse"></a>
<a id="schema_CustomTaskStartedAttributesResponse"></a>
<a id="tocScustomtaskstartedattributesresponse"></a>
<a id="tocscustomtaskstartedattributesresponse"></a>

```json
{
  "custom_task_id": "string",
  "custom_task_type": "string",
  "payload": {
    "type": "json",
    "value": null
  }
}
```

Attributes for custom task started events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_task_id|string|true|none|Unique identifier for the custom task within the workflow.|
|custom_task_type|string|true|none|The type/category of the custom task (e.g., 'llm_call', 'api_request').|
|payload|[JSONPayloadResponse](#schemajsonpayloadresponse)|false|none|The initial state or payload for the custom task.|

<h2 id="tocS_CustomTaskTimedOutResponse">CustomTaskTimedOutResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomtasktimedoutresponse"></a>
<a id="schema_CustomTaskTimedOutResponse"></a>
<a id="tocScustomtasktimedoutresponse"></a>
<a id="tocscustomtasktimedoutresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "CUSTOM_TASK_TIMED_OUT",
  "attributes": {
    "custom_task_id": "string",
    "custom_task_type": "string",
    "timeout_type": "string"
  }
}
```

Emitted when a custom task exceeds its timeout.

Indicates the task did not complete within its configured time limit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[CustomTaskTimedOutAttributes](#schemacustomtasktimedoutattributes)|true|none|Event-specific attributes.|

<h2 id="tocS_CustomTaskTimedOutAttributes">CustomTaskTimedOutAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacustomtasktimedoutattributes"></a>
<a id="schema_CustomTaskTimedOutAttributes"></a>
<a id="tocScustomtasktimedoutattributes"></a>
<a id="tocscustomtasktimedoutattributes"></a>

```json
{
  "custom_task_id": "string",
  "custom_task_type": "string",
  "timeout_type": "string"
}
```

Attributes for custom task timed out events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_task_id|string|true|none|Unique identifier for the custom task within the workflow.|
|custom_task_type|string|true|none|The type/category of the custom task (e.g., 'llm_call', 'api_request').|
|timeout_type|string \| null|false|none|The type of timeout that occurred.|

<h2 id="tocS_DeploymentDetailResponse">DeploymentDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentdetailresponse"></a>
<a id="schema_DeploymentDetailResponse"></a>
<a id="tocSdeploymentdetailresponse"></a>
<a id="tocsdeploymentdetailresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "is_active": true,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "workers": [
    {
      "name": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Unique identifier of the deployment|
|name|string|true|none|Deployment name|
|is_active|boolean|true|none|Whether at least one worker is currently live|
|created_at|string(date-time)|true|none|When the deployment was first registered|
|updated_at|string(date-time)|true|none|When the deployment was last updated|
|workers|[[DeploymentWorkerResponse](#schemadeploymentworkerresponse)]|true|none|Workers registered for the deployment|

<h2 id="tocS_DeploymentListResponse">DeploymentListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentlistresponse"></a>
<a id="schema_DeploymentListResponse"></a>
<a id="tocSdeploymentlistresponse"></a>
<a id="tocsdeploymentlistresponse"></a>

```json
{
  "deployments": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "is_active": true,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployments|[[DeploymentResponse](#schemadeploymentresponse)]|true|none|List of deployments|

<h2 id="tocS_DeploymentResponse">DeploymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentresponse"></a>
<a id="schema_DeploymentResponse"></a>
<a id="tocSdeploymentresponse"></a>
<a id="tocsdeploymentresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "is_active": true,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Unique identifier of the deployment|
|name|string|true|none|Deployment name|
|is_active|boolean|true|none|Whether at least one worker is currently live|
|created_at|string(date-time)|true|none|When the deployment was first registered|
|updated_at|string(date-time)|true|none|When the deployment was last updated|

<h2 id="tocS_DeploymentWorkerResponse">DeploymentWorkerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentworkerresponse"></a>
<a id="schema_DeploymentWorkerResponse"></a>
<a id="tocSdeploymentworkerresponse"></a>
<a id="tocsdeploymentworkerresponse"></a>

```json
{
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Worker name|
|created_at|string(date-time)|true|none|When the worker first registered|
|updated_at|string(date-time)|true|none|When the worker last registered|

<h2 id="tocS_EncodedPayloadOptions">EncodedPayloadOptions</h2>
<!-- backwards compatibility -->
<a id="schemaencodedpayloadoptions"></a>
<a id="schema_EncodedPayloadOptions"></a>
<a id="tocSencodedpayloadoptions"></a>
<a id="tocsencodedpayloadoptions"></a>

```json
"offloaded"
```

<h2 id="tocS_EventProgressStatus">EventProgressStatus</h2>
<!-- backwards compatibility -->
<a id="schemaeventprogressstatus"></a>
<a id="schema_EventProgressStatus"></a>
<a id="tocSeventprogressstatus"></a>
<a id="tocseventprogressstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_EventSource">EventSource</h2>
<!-- backwards compatibility -->
<a id="schemaeventsource"></a>
<a id="schema_EventSource"></a>
<a id="tocSeventsource"></a>
<a id="tocseventsource"></a>

```json
"DATABASE"
```

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"EVENT"
```

<h2 id="tocS_Failure">Failure</h2>
<!-- backwards compatibility -->
<a id="schemafailure"></a>
<a id="schema_Failure"></a>
<a id="tocSfailure"></a>
<a id="tocsfailure"></a>

```json
{
  "message": "string"
}
```

Represents an error or exception that occurred during execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable description of the failure.|

<h2 id="tocS_JSONPatchAdd">JSONPatchAdd</h2>
<!-- backwards compatibility -->
<a id="schemajsonpatchadd"></a>
<a id="schema_JSONPatchAdd"></a>
<a id="tocSjsonpatchadd"></a>
<a id="tocsjsonpatchadd"></a>

```json
{
  "path": "string",
  "value": null,
  "op": "add"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|A JSON Pointer (RFC 6901) identifying the target location within the document. Can be a string path (e.g., '/foo/bar'), '/', '', or an empty list [] for root-level operations.|
|value|object|true|none|The value to use for the operation|
|op|string|true|none|Add operation |

<h2 id="tocS_JSONPatchAppend">JSONPatchAppend</h2>
<!-- backwards compatibility -->
<a id="schemajsonpatchappend"></a>
<a id="schema_JSONPatchAppend"></a>
<a id="tocSjsonpatchappend"></a>
<a id="tocsjsonpatchappend"></a>

```json
{
  "path": "string",
  "value": "string",
  "op": "append"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|A JSON Pointer (RFC 6901) identifying the target location within the document. Can be a string path (e.g., '/foo/bar'), '/', '', or an empty list [] for root-level operations.|
|value|string|true|none|The value to use for the operation. A string to append to the existing value|
|op|string|true|none|'append' is an extension for efficient string concatenation in streaming scenarios.|

<h2 id="tocS_JSONPatchPayloadResponse">JSONPatchPayloadResponse</h2>
<!-- backwards compatibility -->
<a id="schemajsonpatchpayloadresponse"></a>
<a id="schema_JSONPatchPayloadResponse"></a>
<a id="tocSjsonpatchpayloadresponse"></a>
<a id="tocsjsonpatchpayloadresponse"></a>

```json
{
  "type": "json_patch",
  "value": [
    {
      "path": "string",
      "value": "string",
      "op": "append"
    }
  ]
}
```

A payload containing a list of JSON Patch operations.

Used for streaming incremental updates to workflow state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Discriminator indicating this is a JSON Patch payload.|
|value|[[JSONPatchAppend](#schemajsonpatchappend) \| [JSONPatchAdd](#schemajsonpatchadd) \| [JSONPatchReplace](#schemajsonpatchreplace) \| [JSONPatchRemove](#schemajsonpatchremove)]|true|none|The list of JSON Patch operations to apply in order.|

<h2 id="tocS_JSONPatchRemove">JSONPatchRemove</h2>
<!-- backwards compatibility -->
<a id="schemajsonpatchremove"></a>
<a id="schema_JSONPatchRemove"></a>
<a id="tocSjsonpatchremove"></a>
<a id="tocsjsonpatchremove"></a>

```json
{
  "path": "string",
  "value": null,
  "op": "remove"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|A JSON Pointer (RFC 6901) identifying the target location within the document. Can be a string path (e.g., '/foo/bar'), '/', '', or an empty list [] for root-level operations.|
|value|object|true|none|The value to use for the operation|
|op|string|true|none|Remove operation|

<h2 id="tocS_JSONPatchReplace">JSONPatchReplace</h2>
<!-- backwards compatibility -->
<a id="schemajsonpatchreplace"></a>
<a id="schema_JSONPatchReplace"></a>
<a id="tocSjsonpatchreplace"></a>
<a id="tocsjsonpatchreplace"></a>

```json
{
  "path": "string",
  "value": null,
  "op": "replace"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|A JSON Pointer (RFC 6901) identifying the target location within the document. Can be a string path (e.g., '/foo/bar'), '/', '', or an empty list [] for root-level operations.|
|value|object|true|none|The value to use for the operation|
|op|string|true|none|Replace operation|

<h2 id="tocS_JSONPayloadResponse">JSONPayloadResponse</h2>
<!-- backwards compatibility -->
<a id="schemajsonpayloadresponse"></a>
<a id="schema_JSONPayloadResponse"></a>
<a id="tocSjsonpayloadresponse"></a>
<a id="tocsjsonpayloadresponse"></a>

```json
{
  "type": "json",
  "value": null
}
```

A payload containing arbitrary JSON data.

Used for complete state snapshots or final results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Discriminator indicating this is a raw JSON payload.|
|value|object|true|none|The JSON-serializable payload value.|

<h2 id="tocS_ListWorkflowEventResponse">ListWorkflowEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkfloweventresponse"></a>
<a id="schema_ListWorkflowEventResponse"></a>
<a id="tocSlistworkfloweventresponse"></a>
<a id="tocslistworkfloweventresponse"></a>

```json
{
  "events": [
    {
      "event_id": "string",
      "event_timestamp": 0,
      "root_workflow_exec_id": "string",
      "parent_workflow_exec_id": "string",
      "workflow_exec_id": "string",
      "workflow_run_id": "string",
      "workflow_name": "string",
      "event_type": "WORKFLOW_EXECUTION_STARTED",
      "attributes": {
        "task_id": "string",
        "workflow_name": "string",
        "input": {
          "type": "json",
          "value": null
        }
      }
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[WorkflowExecutionStartedResponse](#schemaworkflowexecutionstartedresponse) \| [WorkflowExecutionCompletedResponse](#schemaworkflowexecutioncompletedresponse) \| [WorkflowExecutionFailedResponse](#schemaworkflowexecutionfailedresponse) \| [WorkflowExecutionCanceledResponse](#schemaworkflowexecutioncanceledresponse) \| [WorkflowExecutionContinuedAsNewResponse](#schemaworkflowexecutioncontinuedasnewresponse) \| [WorkflowTaskTimedOutResponse](#schemaworkflowtasktimedoutresponse) \| [WorkflowTaskFailedResponse](#schemaworkflowtaskfailedresponse) \| [CustomTaskStartedResponse](#schemacustomtaskstartedresponse) \| [CustomTaskInProgressResponse](#schemacustomtaskinprogressresponse) \| [CustomTaskCompletedResponse](#schemacustomtaskcompletedresponse) \| [CustomTaskFailedResponse](#schemacustomtaskfailedresponse) \| [CustomTaskTimedOutResponse](#schemacustomtasktimedoutresponse) \| [CustomTaskCanceledResponse](#schemacustomtaskcanceledresponse) \| [ActivityTaskStartedResponse](#schemaactivitytaskstartedresponse) \| [ActivityTaskCompletedResponse](#schemaactivitytaskcompletedresponse) \| [ActivityTaskRetryingResponse](#schemaactivitytaskretryingresponse) \| [ActivityTaskFailedResponse](#schemaactivitytaskfailedresponse)]|true|none|List of workflow events.|
|next_cursor|string \| null|false|none|Cursor for pagination.|

<h2 id="tocS_NetworkEncodedInput">NetworkEncodedInput</h2>
<!-- backwards compatibility -->
<a id="schemanetworkencodedinput"></a>
<a id="schema_NetworkEncodedInput"></a>
<a id="tocSnetworkencodedinput"></a>
<a id="tocsnetworkencodedinput"></a>

```json
{
  "b64payload": "string",
  "encoding_options": [],
  "empty": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|b64payload|string|true|none|The encoded payload|
|encoding_options|[[EncodedPayloadOptions](#schemaencodedpayloadoptions)]|false|none|The encoding of the payload|
|empty|boolean|false|none|Whether the payload is empty|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding_options|offloaded|
|encoding_options|encrypted|
|encoding_options|encrypted-partial|

<h2 id="tocS_QueryDefinition">QueryDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaquerydefinition"></a>
<a id="schema_QueryDefinition"></a>
<a id="tocSquerydefinition"></a>
<a id="tocsquerydefinition"></a>

```json
{
  "name": "string",
  "description": "string",
  "input_schema": {},
  "output_schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the query|
|description|string \| null|false|none|Description of the query|
|input_schema|object|true|none|Input JSON schema of the query's model|
|output_schema|object \| null|false|none|Output JSON schema of the query's model|

<h2 id="tocS_QueryInvocationBody">QueryInvocationBody</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinvocationbody"></a>
<a id="schema_QueryInvocationBody"></a>
<a id="tocSqueryinvocationbody"></a>
<a id="tocsqueryinvocationbody"></a>

```json
{
  "name": "string",
  "input": {
    "b64payload": "string",
    "encoding_options": [],
    "empty": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the query to request|
|input|[NetworkEncodedInput](#schemanetworkencodedinput) \| object \| null|false|none|Input data for the query, matching its schema|

<h2 id="tocS_QueryWorkflowResponse">QueryWorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueryworkflowresponse"></a>
<a id="schema_QueryWorkflowResponse"></a>
<a id="tocSqueryworkflowresponse"></a>
<a id="tocsqueryworkflowresponse"></a>

```json
{
  "query_name": "string",
  "result": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query_name|string|true|none|none|
|result|object|true|none|The result of the Query workflow call|

<h2 id="tocS_ResetInvocationBody">ResetInvocationBody</h2>
<!-- backwards compatibility -->
<a id="schemaresetinvocationbody"></a>
<a id="schema_ResetInvocationBody"></a>
<a id="tocSresetinvocationbody"></a>
<a id="tocsresetinvocationbody"></a>

```json
{
  "event_id": 0,
  "reason": "string",
  "exclude_signals": false,
  "exclude_updates": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|integer|true|none|The event ID to reset the workflow execution to|
|reason|string \| null|false|none|Reason for resetting the workflow execution|
|exclude_signals|boolean|false|none|Whether to exclude signals that happened after the reset point|
|exclude_updates|boolean|false|none|Whether to exclude updates that happened after the reset point|

<h2 id="tocS_ScalarMetric">ScalarMetric</h2>
<!-- backwards compatibility -->
<a id="schemascalarmetric"></a>
<a id="schema_ScalarMetric"></a>
<a id="tocSscalarmetric"></a>
<a id="tocsscalarmetric"></a>

```json
{
  "value": 0
}
```

Scalar metric with a single value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer \| number|true|none|none|

<h2 id="tocS_ScheduleCalendar">ScheduleCalendar</h2>
<!-- backwards compatibility -->
<a id="schemaschedulecalendar"></a>
<a id="schema_ScheduleCalendar"></a>
<a id="tocSschedulecalendar"></a>
<a id="tocsschedulecalendar"></a>

```json
{
  "second": [
    {
      "start": 0,
      "end": 0,
      "step": 0
    }
  ],
  "minute": [
    {
      "start": 0,
      "end": 0,
      "step": 0
    }
  ],
  "hour": [
    {
      "start": 0,
      "end": 0,
      "step": 0
    }
  ],
  "day_of_month": [
    {
      "start": 1,
      "end": 31,
      "step": 0
    }
  ],
  "month": [
    {
      "start": 1,
      "end": 12,
      "step": 0
    }
  ],
  "year": [],
  "day_of_week": [
    {
      "start": 0,
      "end": 6,
      "step": 0
    }
  ],
  "comment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|second|[[ScheduleRange](#schemaschedulerange)]|false|none|none|
|minute|[[ScheduleRange](#schemaschedulerange)]|false|none|none|
|hour|[[ScheduleRange](#schemaschedulerange)]|false|none|none|
|day_of_month|[[ScheduleRange](#schemaschedulerange)]|false|none|none|
|month|[[ScheduleRange](#schemaschedulerange)]|false|none|none|
|year|[[ScheduleRange](#schemaschedulerange)]|false|none|none|
|day_of_week|[[ScheduleRange](#schemaschedulerange)]|false|none|none|
|comment|string \| null|false|none|none|

<h2 id="tocS_ScheduleDefinition">ScheduleDefinition</h2>
<!-- backwards compatibility -->
<a id="schemascheduledefinition"></a>
<a id="schema_ScheduleDefinition"></a>
<a id="tocSscheduledefinition"></a>
<a id="tocsscheduledefinition"></a>

```json
{
  "input": null,
  "calendars": [
    {
      "second": [
        {
          "start": 0,
          "end": 0,
          "step": 0
        }
      ],
      "minute": [
        {
          "start": 0,
          "end": 0,
          "step": 0
        }
      ],
      "hour": [
        {
          "start": 0,
          "end": 0,
          "step": 0
        }
      ],
      "day_of_month": [
        {
          "start": 1,
          "end": 31,
          "step": 0
        }
      ],
      "month": [
        {
          "start": 1,
          "end": 12,
          "step": 0
        }
      ],
      "year": [],
      "day_of_week": [
        {
          "start": 0,
          "end": 6,
          "step": 0
        }
      ],
      "comment": "string"
    }
  ],
  "intervals": [
    {
      "every": "string",
      "offset": "string"
    }
  ],
  "cron_expressions": [
    "string"
  ],
  "skip": [
    {
      "second": [
        {
          "start": 0,
          "end": 0,
          "step": 0
        }
      ],
      "minute": [
        {
          "start": 0,
          "end": 0,
          "step": 0
        }
      ],
      "hour": [
        {
          "start": 0,
          "end": 0,
          "step": 0
        }
      ],
      "day_of_month": [
        {
          "start": 1,
          "end": 31,
          "step": 0
        }
      ],
      "month": [
        {
          "start": 1,
          "end": 12,
          "step": 0
        }
      ],
      "year": [],
      "day_of_week": [
        {
          "start": 0,
          "end": 6,
          "step": 0
        }
      ],
      "comment": "string"
    }
  ],
  "start_at": "1970-01-01T00:00:00Z",
  "end_at": "1970-01-01T00:00:00Z",
  "jitter": "string",
  "time_zone_name": "string",
  "policy": {
    "catchup_window_seconds": 31536000,
    "overlap": 1,
    "pause_on_failure": false
  },
  "schedule_id": "string"
}
```

Specification of the times scheduled actions may occur.

The times are the union of :py:attr:`calendars`, :py:attr:`intervals`, and
:py:attr:`cron_expressions` excluding anything in :py:attr:`skip`.

Used for input where schedule_id is optional (can be provided or auto-generated).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|object|true|none|Input to provide to the workflow when starting it.|
|calendars|[[ScheduleCalendar](#schemaschedulecalendar)]|false|none|Calendar-based specification of times.|
|intervals|[[ScheduleInterval](#schemascheduleinterval)]|false|none|Interval-based specification of times.|
|cron_expressions|[string]|false|none|Cron-based specification of times.|
|skip|[[ScheduleCalendar](#schemaschedulecalendar)]|false|none|Set of calendar times to skip.|
|start_at|string(date-time) \| null|false|none|Time after which the first action may be run.|
|end_at|string(date-time) \| null|false|none|Time after which no more actions will be run.|
|jitter|string(duration) \| null|false|none|Jitter to apply each action.<br><br>An action's scheduled time will be incremented by a random value between 0<br>and this value if present (but not past the next schedule).<br>|
|time_zone_name|string \| null|false|none|IANA time zone name, for example ``US/Central``.|
|policy|[SchedulePolicy](#schemaschedulepolicy)|false|none|Policy for the schedule.|
|schedule_id|string \| null|false|none|Unique identifier for the schedule.|

<h2 id="tocS_ScheduleDefinitionOutput">ScheduleDefinitionOutput</h2>
<!-- backwards compatibility -->
<a id="schemascheduledefinitionoutput"></a>
<a id="schema_ScheduleDefinitionOutput"></a>
<a id="tocSscheduledefinitionoutput"></a>
<a id="tocsscheduledefinitionoutput"></a>

```json
{
  "input": null,
  "calendars": [
    {
      "second": [
        {
          "start": 0,
          "end": 0,
          "step": 0
        }
      ],
      "minute": [
        {
          "start": 0,
          "end": 0,
          "step": 0
        }
      ],
      "hour": [
        {
          "start": 0,
          "end": 0,
          "step": 0
        }
      ],
      "day_of_month": [
        {
          "start": 1,
          "end": 31,
          "step": 0
        }
      ],
      "month": [
        {
          "start": 1,
          "end": 12,
          "step": 0
        }
      ],
      "year": [],
      "day_of_week": [
        {
          "start": 0,
          "end": 6,
          "step": 0
        }
      ],
      "comment": "string"
    }
  ],
  "intervals": [
    {
      "every": "string",
      "offset": "string"
    }
  ],
  "cron_expressions": [
    "string"
  ],
  "skip": [
    {
      "second": [
        {
          "start": 0,
          "end": 0,
          "step": 0
        }
      ],
      "minute": [
        {
          "start": 0,
          "end": 0,
          "step": 0
        }
      ],
      "hour": [
        {
          "start": 0,
          "end": 0,
          "step": 0
        }
      ],
      "day_of_month": [
        {
          "start": 1,
          "end": 31,
          "step": 0
        }
      ],
      "month": [
        {
          "start": 1,
          "end": 12,
          "step": 0
        }
      ],
      "year": [],
      "day_of_week": [
        {
          "start": 0,
          "end": 6,
          "step": 0
        }
      ],
      "comment": "string"
    }
  ],
  "start_at": "1970-01-01T00:00:00Z",
  "end_at": "1970-01-01T00:00:00Z",
  "jitter": "string",
  "time_zone_name": "string",
  "policy": {
    "catchup_window_seconds": 31536000,
    "overlap": 1,
    "pause_on_failure": false
  },
  "schedule_id": "string"
}
```

Output representation of a schedule with required schedule_id.

Used when returning schedules from the API where schedule_id is always present.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|object|true|none|Input to provide to the workflow when starting it.|
|calendars|[[ScheduleCalendar](#schemaschedulecalendar)]|false|none|Calendar-based specification of times.|
|intervals|[[ScheduleInterval](#schemascheduleinterval)]|false|none|Interval-based specification of times.|
|cron_expressions|[string]|false|none|Cron-based specification of times.|
|skip|[[ScheduleCalendar](#schemaschedulecalendar)]|false|none|Set of calendar times to skip.|
|start_at|string(date-time) \| null|false|none|Time after which the first action may be run.|
|end_at|string(date-time) \| null|false|none|Time after which no more actions will be run.|
|jitter|string(duration) \| null|false|none|Jitter to apply each action.<br><br>An action's scheduled time will be incremented by a random value between 0<br>and this value if present (but not past the next schedule).<br>|
|time_zone_name|string \| null|false|none|IANA time zone name, for example ``US/Central``.|
|policy|[SchedulePolicy](#schemaschedulepolicy)|false|none|Policy for the schedule.|
|schedule_id|string|true|none|Unique identifier for the schedule.|

<h2 id="tocS_ScheduleInterval">ScheduleInterval</h2>
<!-- backwards compatibility -->
<a id="schemascheduleinterval"></a>
<a id="schema_ScheduleInterval"></a>
<a id="tocSscheduleinterval"></a>
<a id="tocsscheduleinterval"></a>

```json
{
  "every": "string",
  "offset": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|every|string(duration)|true|none|none|
|offset|string(duration) \| null|false|none|none|

<h2 id="tocS_ScheduleOverlapPolicy">ScheduleOverlapPolicy</h2>
<!-- backwards compatibility -->
<a id="schemascheduleoverlappolicy"></a>
<a id="schema_ScheduleOverlapPolicy"></a>
<a id="tocSscheduleoverlappolicy"></a>
<a id="tocsscheduleoverlappolicy"></a>

```json
1
```

Controls what happens when a workflow would be started by a schedule but
one is already running.

<h2 id="tocS_SchedulePolicy">SchedulePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaschedulepolicy"></a>
<a id="schema_SchedulePolicy"></a>
<a id="tocSschedulepolicy"></a>
<a id="tocsschedulepolicy"></a>

```json
{
  "catchup_window_seconds": 31536000,
  "overlap": 1,
  "pause_on_failure": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catchup_window_seconds|integer|false|none|After a Temporal server is unavailable, amount of time in seconds in the past to execute missed actions.|
|overlap|[ScheduleOverlapPolicy](#schemascheduleoverlappolicy)|false|none|Policy controlling what to do when a workflow is already running.|
|pause_on_failure|boolean|false|none|Whether to pause the schedule after a workflow failure.|

#### Enumerated Values

|Property|Value|
|---|---|
|overlap|1|
|overlap|2|
|overlap|3|
|overlap|4|
|overlap|5|
|overlap|6|

<h2 id="tocS_ScheduleRange">ScheduleRange</h2>
<!-- backwards compatibility -->
<a id="schemaschedulerange"></a>
<a id="schema_ScheduleRange"></a>
<a id="tocSschedulerange"></a>
<a id="tocsschedulerange"></a>

```json
{
  "start": 0,
  "end": 0,
  "step": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|integer|true|none|none|
|end|integer|false|none|none|
|step|integer|false|none|none|

<h2 id="tocS_SignalDefinition">SignalDefinition</h2>
<!-- backwards compatibility -->
<a id="schemasignaldefinition"></a>
<a id="schema_SignalDefinition"></a>
<a id="tocSsignaldefinition"></a>
<a id="tocssignaldefinition"></a>

```json
{
  "name": "string",
  "description": "string",
  "input_schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the signal|
|description|string \| null|false|none|Description of the signal|
|input_schema|object|true|none|Input JSON schema of the signal's model|

<h2 id="tocS_SignalInvocationBody">SignalInvocationBody</h2>
<!-- backwards compatibility -->
<a id="schemasignalinvocationbody"></a>
<a id="schema_SignalInvocationBody"></a>
<a id="tocSsignalinvocationbody"></a>
<a id="tocssignalinvocationbody"></a>

```json
{
  "name": "string",
  "input": {
    "b64payload": "string",
    "encoding_options": [],
    "empty": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the signal to send|
|input|[NetworkEncodedInput](#schemanetworkencodedinput) \| object \| null|false|none|Input data for the signal, matching its schema|

<h2 id="tocS_SignalWorkflowResponse">SignalWorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemasignalworkflowresponse"></a>
<a id="schema_SignalWorkflowResponse"></a>
<a id="tocSsignalworkflowresponse"></a>
<a id="tocssignalworkflowresponse"></a>

```json
{
  "message": "Signal accepted"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_StreamEventSsePayload">StreamEventSsePayload</h2>
<!-- backwards compatibility -->
<a id="schemastreameventssepayload"></a>
<a id="schema_StreamEventSsePayload"></a>
<a id="tocSstreameventssepayload"></a>
<a id="tocsstreameventssepayload"></a>

```json
{
  "stream": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "data": {
    "event_id": "string",
    "event_timestamp": 0,
    "root_workflow_exec_id": "string",
    "parent_workflow_exec_id": "string",
    "workflow_exec_id": "string",
    "workflow_run_id": "string",
    "workflow_name": "string",
    "event_type": "WORKFLOW_EXECUTION_STARTED",
    "attributes": {
      "task_id": "string",
      "workflow_name": "string",
      "input": {
        "type": "json",
        "value": null
      }
    }
  },
  "workflow_context": {
    "namespace": "string",
    "workflow_name": "string",
    "workflow_exec_id": "string",
    "parent_workflow_exec_id": "string",
    "root_workflow_exec_id": "string"
  },
  "metadata": {},
  "broker_sequence": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stream|string|true|none|none|
|timestamp|string(date-time)|false|none|none|
|data|[WorkflowExecutionStartedResponse](#schemaworkflowexecutionstartedresponse) \| [WorkflowExecutionCompletedResponse](#schemaworkflowexecutioncompletedresponse) \| [WorkflowExecutionFailedResponse](#schemaworkflowexecutionfailedresponse) \| [WorkflowExecutionCanceledResponse](#schemaworkflowexecutioncanceledresponse) \| [WorkflowExecutionContinuedAsNewResponse](#schemaworkflowexecutioncontinuedasnewresponse) \| [WorkflowTaskTimedOutResponse](#schemaworkflowtasktimedoutresponse) \| [WorkflowTaskFailedResponse](#schemaworkflowtaskfailedresponse) \| [CustomTaskStartedResponse](#schemacustomtaskstartedresponse) \| [CustomTaskInProgressResponse](#schemacustomtaskinprogressresponse) \| [CustomTaskCompletedResponse](#schemacustomtaskcompletedresponse) \| [CustomTaskFailedResponse](#schemacustomtaskfailedresponse) \| [CustomTaskTimedOutResponse](#schemacustomtasktimedoutresponse) \| [CustomTaskCanceledResponse](#schemacustomtaskcanceledresponse) \| [ActivityTaskStartedResponse](#schemaactivitytaskstartedresponse) \| [ActivityTaskCompletedResponse](#schemaactivitytaskcompletedresponse) \| [ActivityTaskRetryingResponse](#schemaactivitytaskretryingresponse) \| [ActivityTaskFailedResponse](#schemaactivitytaskfailedresponse)|true|none|none|
|workflow_context|[StreamEventWorkflowContext](#schemastreameventworkflowcontext)|true|none|none|
|metadata|object|false|none|none|
|broker_sequence|integer|true|none|none|

<h2 id="tocS_StreamEventWorkflowContext">StreamEventWorkflowContext</h2>
<!-- backwards compatibility -->
<a id="schemastreameventworkflowcontext"></a>
<a id="schema_StreamEventWorkflowContext"></a>
<a id="tocSstreameventworkflowcontext"></a>
<a id="tocsstreameventworkflowcontext"></a>

```json
{
  "namespace": "string",
  "workflow_name": "string",
  "workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "root_workflow_exec_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|string|true|none|none|
|workflow_name|string|true|none|none|
|workflow_exec_id|string|true|none|none|
|parent_workflow_exec_id|string \| null|false|none|none|
|root_workflow_exec_id|string \| null|false|none|none|

<h2 id="tocS_TempoGetTraceResponse">TempoGetTraceResponse</h2>
<!-- backwards compatibility -->
<a id="schematempogettraceresponse"></a>
<a id="schema_TempoGetTraceResponse"></a>
<a id="tocStempogettraceresponse"></a>
<a id="tocstempogettraceresponse"></a>

```json
{
  "batches": [
    {
      "resource": {
        "attributes": [
          {
            "key": "string",
            "value": {
              "stringValue": "string"
            }
          }
        ]
      },
      "scopeSpans": [
        {
          "scope": {
            "name": "string"
          },
          "spans": [
            {
              "traceId": "string",
              "spanId": "string",
              "parentSpanId": "string",
              "name": "string",
              "kind": "SPAN_KIND_INTERNAL",
              "startTimeUnixNano": "string",
              "endTimeUnixNano": "string",
              "attributes": [
                {
                  "key": "string",
                  "value": {
                    "stringValue": "string"
                  }
                }
              ],
              "events": [
                {
                  "name": "string",
                  "timeUnixNano": "string",
                  "attributes": [
                    {
                      "key": "string",
                      "value": {
                        "stringValue": "string"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

Trace response in OpenTelemetry format.

This is the unified trace format used across all trace providers (Tempo, ClickHouse, etc.).
Regardless of the underlying backend, all trace data is normalized to this Tempo-compatible
OpenTelemetry format to ensure consistency in the API response structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batches|[[TempoTraceBatch](#schematempotracebatch)]|false|none|The batches of the trace|

<h2 id="tocS_TempoTraceAttribute">TempoTraceAttribute</h2>
<!-- backwards compatibility -->
<a id="schematempotraceattribute"></a>
<a id="schema_TempoTraceAttribute"></a>
<a id="tocStempotraceattribute"></a>
<a id="tocstempotraceattribute"></a>

```json
{
  "key": "string",
  "value": {
    "stringValue": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The key of the attribute|
|value|[TempoTraceAttributeStringValue](#schematempotraceattributestringvalue) \| [TempoTraceAttributeIntValue](#schematempotraceattributeintvalue) \| [TempoTraceAttributeBoolValue](#schematempotraceattributeboolvalue)|true|none|The value of the attribute|

<h2 id="tocS_TempoTraceAttributeBoolValue">TempoTraceAttributeBoolValue</h2>
<!-- backwards compatibility -->
<a id="schematempotraceattributeboolvalue"></a>
<a id="schema_TempoTraceAttributeBoolValue"></a>
<a id="tocStempotraceattributeboolvalue"></a>
<a id="tocstempotraceattributeboolvalue"></a>

```json
{
  "boolValue": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boolValue|boolean|true|none|The boolean value of the attribute|

<h2 id="tocS_TempoTraceAttributeIntValue">TempoTraceAttributeIntValue</h2>
<!-- backwards compatibility -->
<a id="schematempotraceattributeintvalue"></a>
<a id="schema_TempoTraceAttributeIntValue"></a>
<a id="tocStempotraceattributeintvalue"></a>
<a id="tocstempotraceattributeintvalue"></a>

```json
{
  "intValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intValue|string|true|none|The integer value of the attribute|

<h2 id="tocS_TempoTraceAttributeStringValue">TempoTraceAttributeStringValue</h2>
<!-- backwards compatibility -->
<a id="schematempotraceattributestringvalue"></a>
<a id="schema_TempoTraceAttributeStringValue"></a>
<a id="tocStempotraceattributestringvalue"></a>
<a id="tocstempotraceattributestringvalue"></a>

```json
{
  "stringValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stringValue|string|true|none|The string value of the attribute|

<h2 id="tocS_TempoTraceBatch">TempoTraceBatch</h2>
<!-- backwards compatibility -->
<a id="schematempotracebatch"></a>
<a id="schema_TempoTraceBatch"></a>
<a id="tocStempotracebatch"></a>
<a id="tocstempotracebatch"></a>

```json
{
  "resource": {
    "attributes": [
      {
        "key": "string",
        "value": {
          "stringValue": "string"
        }
      }
    ]
  },
  "scopeSpans": [
    {
      "scope": {
        "name": "string"
      },
      "spans": [
        {
          "traceId": "string",
          "spanId": "string",
          "parentSpanId": "string",
          "name": "string",
          "kind": "SPAN_KIND_INTERNAL",
          "startTimeUnixNano": "string",
          "endTimeUnixNano": "string",
          "attributes": [
            {
              "key": "string",
              "value": {
                "stringValue": "string"
              }
            }
          ],
          "events": [
            {
              "name": "string",
              "timeUnixNano": "string",
              "attributes": [
                {
                  "key": "string",
                  "value": {
                    "stringValue": "string"
                  }
                }
              ]
            }
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
|resource|[TempoTraceResource](#schematempotraceresource)|true|none|The resource of the batch|
|scopeSpans|[[TempoTraceScopeSpan](#schematempotracescopespan)]|false|none|The spans of the scope|

<h2 id="tocS_TempoTraceEvent">TempoTraceEvent</h2>
<!-- backwards compatibility -->
<a id="schematempotraceevent"></a>
<a id="schema_TempoTraceEvent"></a>
<a id="tocStempotraceevent"></a>
<a id="tocstempotraceevent"></a>

```json
{
  "name": "string",
  "timeUnixNano": "string",
  "attributes": [
    {
      "key": "string",
      "value": {
        "stringValue": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the event|
|timeUnixNano|string|true|none|The time of the event in Unix nano|
|attributes|[[TempoTraceAttribute](#schematempotraceattribute)]|false|none|The attributes of the event|

<h2 id="tocS_TempoTraceResource">TempoTraceResource</h2>
<!-- backwards compatibility -->
<a id="schematempotraceresource"></a>
<a id="schema_TempoTraceResource"></a>
<a id="tocStempotraceresource"></a>
<a id="tocstempotraceresource"></a>

```json
{
  "attributes": [
    {
      "key": "string",
      "value": {
        "stringValue": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[TempoTraceAttribute](#schematempotraceattribute)]|false|none|The attributes of the resource|

<h2 id="tocS_TempoTraceScope">TempoTraceScope</h2>
<!-- backwards compatibility -->
<a id="schematempotracescope"></a>
<a id="schema_TempoTraceScope"></a>
<a id="tocStempotracescope"></a>
<a id="tocstempotracescope"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the span|

<h2 id="tocS_TempoTraceScopeKind">TempoTraceScopeKind</h2>
<!-- backwards compatibility -->
<a id="schematempotracescopekind"></a>
<a id="schema_TempoTraceScopeKind"></a>
<a id="tocStempotracescopekind"></a>
<a id="tocstempotracescopekind"></a>

```json
"SPAN_KIND_INTERNAL"
```

<h2 id="tocS_TempoTraceScopeSpan">TempoTraceScopeSpan</h2>
<!-- backwards compatibility -->
<a id="schematempotracescopespan"></a>
<a id="schema_TempoTraceScopeSpan"></a>
<a id="tocStempotracescopespan"></a>
<a id="tocstempotracescopespan"></a>

```json
{
  "scope": {
    "name": "string"
  },
  "spans": [
    {
      "traceId": "string",
      "spanId": "string",
      "parentSpanId": "string",
      "name": "string",
      "kind": "SPAN_KIND_INTERNAL",
      "startTimeUnixNano": "string",
      "endTimeUnixNano": "string",
      "attributes": [
        {
          "key": "string",
          "value": {
            "stringValue": "string"
          }
        }
      ],
      "events": [
        {
          "name": "string",
          "timeUnixNano": "string",
          "attributes": [
            {
              "key": "string",
              "value": {
                "stringValue": "string"
              }
            }
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
|scope|[TempoTraceScope](#schematempotracescope)|true|none|The scope of the span|
|spans|[[TempoTraceSpan](#schematempotracespan)]|false|none|The spans of the scope|

<h2 id="tocS_TempoTraceSpan">TempoTraceSpan</h2>
<!-- backwards compatibility -->
<a id="schematempotracespan"></a>
<a id="schema_TempoTraceSpan"></a>
<a id="tocStempotracespan"></a>
<a id="tocstempotracespan"></a>

```json
{
  "traceId": "string",
  "spanId": "string",
  "parentSpanId": "string",
  "name": "string",
  "kind": "SPAN_KIND_INTERNAL",
  "startTimeUnixNano": "string",
  "endTimeUnixNano": "string",
  "attributes": [
    {
      "key": "string",
      "value": {
        "stringValue": "string"
      }
    }
  ],
  "events": [
    {
      "name": "string",
      "timeUnixNano": "string",
      "attributes": [
        {
          "key": "string",
          "value": {
            "stringValue": "string"
          }
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|traceId|string|true|none|The trace ID of the scope|
|spanId|string|true|none|The span ID of the scope|
|parentSpanId|string \| null|false|none|The parent span ID of the scope|
|name|string|true|none|The name of the scope|
|kind|[TempoTraceScopeKind](#schematempotracescopekind)|true|none|The kind of the scope|
|startTimeUnixNano|string|true|none|The start time of the scope in Unix nano|
|endTimeUnixNano|string|true|none|The end time of the scope in Unix nano|
|attributes|[[TempoTraceAttribute](#schematempotraceattribute)]|false|none|The attributes of the scope|
|events|[[TempoTraceEvent](#schematempotraceevent)]|false|none|The events of the scope|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|SPAN_KIND_INTERNAL|
|kind|SPAN_KIND_SERVER|
|kind|SPAN_KIND_CLIENT|

<h2 id="tocS_TimeSeriesMetric">TimeSeriesMetric</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesmetric"></a>
<a id="schema_TimeSeriesMetric"></a>
<a id="tocStimeseriesmetric"></a>
<a id="tocstimeseriesmetric"></a>

```json
{
  "value": [
    [
      0,
      0
    ]
  ]
}
```

Time-series metric with timestamp-value pairs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[[integer, integer \| number]]|true|none|none|

<h2 id="tocS_UpdateDefinition">UpdateDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedefinition"></a>
<a id="schema_UpdateDefinition"></a>
<a id="tocSupdatedefinition"></a>
<a id="tocsupdatedefinition"></a>

```json
{
  "name": "string",
  "description": "string",
  "input_schema": {},
  "output_schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the update|
|description|string \| null|false|none|Description of the update|
|input_schema|object|true|none|Input JSON schema of the update's model|
|output_schema|object \| null|false|none|Output JSON schema of the update's model|

<h2 id="tocS_UpdateInvocationBody">UpdateInvocationBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinvocationbody"></a>
<a id="schema_UpdateInvocationBody"></a>
<a id="tocSupdateinvocationbody"></a>
<a id="tocsupdateinvocationbody"></a>

```json
{
  "name": "string",
  "input": {
    "b64payload": "string",
    "encoding_options": [],
    "empty": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the update to request|
|input|[NetworkEncodedInput](#schemanetworkencodedinput) \| object \| null|false|none|Input data for the update, matching its schema|

<h2 id="tocS_UpdateWorkflowResponse">UpdateWorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkflowresponse"></a>
<a id="schema_UpdateWorkflowResponse"></a>
<a id="tocSupdateworkflowresponse"></a>
<a id="tocsupdateworkflowresponse"></a>

```json
{
  "update_name": "string",
  "result": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update_name|string|true|none|none|
|result|object|true|none|The result of the Update workflow call|

<h2 id="tocS_WorkerInfo">WorkerInfo</h2>
<!-- backwards compatibility -->
<a id="schemaworkerinfo"></a>
<a id="schema_WorkerInfo"></a>
<a id="tocSworkerinfo"></a>
<a id="tocsworkerinfo"></a>

```json
{
  "scheduler_url": "string",
  "namespace": "string",
  "tls": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduler_url|string|true|none|none|
|namespace|string|true|none|none|
|tls|boolean|false|none|none|

<h2 id="tocS_Workflow">Workflow</h2>
<!-- backwards compatibility -->
<a id="schemaworkflow"></a>
<a id="schema_Workflow"></a>
<a id="tocSworkflow"></a>
<a id="tocsworkflow"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "display_name": "string",
  "type": "code",
  "description": "string",
  "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "shared_namespace": "string",
  "available_in_chat_assistant": false,
  "is_technical": false,
  "archived": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Unique identifier of the workflow|
|name|string|true|none|Name of the workflow|
|display_name|string|true|none|Display name of the workflow|
|type|[WorkflowType](#schemaworkflowtype)|true|none|Type of the workflow|
|description|string \| null|false|none|Description of the workflow|
|customer_id|string(uuid)|true|none|Customer ID of the workflow|
|workspace_id|string(uuid)|true|none|Workspace ID of the workflow|
|shared_namespace|string \| null|false|none|Reserved namespace for shared workflows (e.g., 'shared:my-shared-workflow')|
|available_in_chat_assistant|boolean|false|none|Whether the workflow is available in chat assistant|
|is_technical|boolean|false|none|Whether the workflow is technical (e.g. SDK-managed)|
|archived|boolean|false|none|Whether the workflow is archived|

#### Enumerated Values

|Property|Value|
|---|---|
|type|code|

<h2 id="tocS_WorkflowArchiveResponse">WorkflowArchiveResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowarchiveresponse"></a>
<a id="schema_WorkflowArchiveResponse"></a>
<a id="tocSworkflowarchiveresponse"></a>
<a id="tocsworkflowarchiveresponse"></a>

```json
{
  "workflow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "display_name": "string",
    "type": "code",
    "description": "string",
    "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shared_namespace": "string",
    "available_in_chat_assistant": false,
    "is_technical": false,
    "archived": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow|[Workflow](#schemaworkflow)|true|none|The workflow spec|

<h2 id="tocS_WorkflowBasicDefinition">WorkflowBasicDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowbasicdefinition"></a>
<a id="schema_WorkflowBasicDefinition"></a>
<a id="tocSworkflowbasicdefinition"></a>
<a id="tocsworkflowbasicdefinition"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "display_name": "string",
  "description": "string",
  "metadata": {
    "shared_namespace": "string"
  },
  "archived": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|name|string|true|none|The name of the workflow|
|display_name|string|true|none|The display name of the workflow|
|description|string \| null|false|none|A description of the workflow|
|metadata|[WorkflowMetadata](#schemaworkflowmetadata)|false|none|Workflow metadata|
|archived|boolean|true|none|Whether the workflow is archived|

<h2 id="tocS_WorkflowCodeDefinition">WorkflowCodeDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowcodedefinition"></a>
<a id="schema_WorkflowCodeDefinition"></a>
<a id="tocSworkflowcodedefinition"></a>
<a id="tocsworkflowcodedefinition"></a>

```json
{
  "input_schema": {},
  "output_schema": {},
  "signals": [
    {
      "name": "string",
      "description": "string",
      "input_schema": {}
    }
  ],
  "queries": [
    {
      "name": "string",
      "description": "string",
      "input_schema": {},
      "output_schema": {}
    }
  ],
  "updates": [
    {
      "name": "string",
      "description": "string",
      "input_schema": {},
      "output_schema": {}
    }
  ],
  "enforce_determinism": false,
  "execution_timeout": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input_schema|object|true|none|Input schema of the workflow's run method|
|output_schema|object \| null|false|none|Output schema of the workflow's run method|
|signals|[[SignalDefinition](#schemasignaldefinition)]|false|none|Signal handlers defined by the workflow|
|queries|[[QueryDefinition](#schemaquerydefinition)]|false|none|Query handlers defined by the workflow|
|updates|[[UpdateDefinition](#schemaupdatedefinition)]|false|none|Update handlers defined by the workflow|
|enforce_determinism|boolean|false|none|Whether the workflow enforces deterministic execution|
|execution_timeout|number|false|none|Maximum total execution time including retries and continue-as-new|

<h2 id="tocS_WorkflowEventType">WorkflowEventType</h2>
<!-- backwards compatibility -->
<a id="schemaworkfloweventtype"></a>
<a id="schema_WorkflowEventType"></a>
<a id="tocSworkfloweventtype"></a>
<a id="tocsworkfloweventtype"></a>

```json
"WORKFLOW_EXECUTION_STARTED"
```

<h2 id="tocS_WorkflowExecutionCanceledResponse">WorkflowExecutionCanceledResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioncanceledresponse"></a>
<a id="schema_WorkflowExecutionCanceledResponse"></a>
<a id="tocSworkflowexecutioncanceledresponse"></a>
<a id="tocsworkflowexecutioncanceledresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "WORKFLOW_EXECUTION_CANCELED",
  "attributes": {
    "task_id": "string",
    "reason": "string"
  }
}
```

Emitted when a workflow execution is canceled.

This is a terminal event indicating the workflow was explicitly canceled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[WorkflowExecutionCanceledAttributes](#schemaworkflowexecutioncanceledattributes)|true|none|Event-specific attributes.|

<h2 id="tocS_WorkflowExecutionCanceledAttributes">WorkflowExecutionCanceledAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioncanceledattributes"></a>
<a id="schema_WorkflowExecutionCanceledAttributes"></a>
<a id="tocSworkflowexecutioncanceledattributes"></a>
<a id="tocsworkflowexecutioncanceledattributes"></a>

```json
{
  "task_id": "string",
  "reason": "string"
}
```

Attributes for workflow execution canceled events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string|true|none|Unique identifier for the task within the workflow execution.|
|reason|string \| null|false|none|Optional reason provided for the cancellation.|

<h2 id="tocS_WorkflowExecutionCompletedResponse">WorkflowExecutionCompletedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioncompletedresponse"></a>
<a id="schema_WorkflowExecutionCompletedResponse"></a>
<a id="tocSworkflowexecutioncompletedresponse"></a>
<a id="tocsworkflowexecutioncompletedresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "WORKFLOW_EXECUTION_COMPLETED",
  "attributes": {
    "task_id": "string",
    "result": {
      "type": "json",
      "value": null
    }
  }
}
```

Emitted when a workflow execution completes successfully.

This is a terminal event indicating the workflow finished without errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[WorkflowExecutionCompletedAttributesResponse](#schemaworkflowexecutioncompletedattributesresponse)|true|none|Event-specific attributes.|

<h2 id="tocS_WorkflowExecutionCompletedAttributesResponse">WorkflowExecutionCompletedAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioncompletedattributesresponse"></a>
<a id="schema_WorkflowExecutionCompletedAttributesResponse"></a>
<a id="tocSworkflowexecutioncompletedattributesresponse"></a>
<a id="tocsworkflowexecutioncompletedattributesresponse"></a>

```json
{
  "task_id": "string",
  "result": {
    "type": "json",
    "value": null
  }
}
```

Attributes for workflow execution completed events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string|true|none|Unique identifier for the task within the workflow execution.|
|result|[JSONPayloadResponse](#schemajsonpayloadresponse)|true|none|The final result returned by the workflow.|

<h2 id="tocS_WorkflowExecutionContinuedAsNewResponse">WorkflowExecutionContinuedAsNewResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioncontinuedasnewresponse"></a>
<a id="schema_WorkflowExecutionContinuedAsNewResponse"></a>
<a id="tocSworkflowexecutioncontinuedasnewresponse"></a>
<a id="tocsworkflowexecutioncontinuedasnewresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "WORKFLOW_EXECUTION_CONTINUED_AS_NEW",
  "attributes": {
    "task_id": "string",
    "new_execution_run_id": "string",
    "workflow_name": "string",
    "input": {
      "type": "json",
      "value": null
    }
  }
}
```

Emitted when a workflow continues as a new execution.

This occurs when a workflow uses continue-as-new to reset its history
while maintaining logical continuity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[WorkflowExecutionContinuedAsNewAttributesResponse](#schemaworkflowexecutioncontinuedasnewattributesresponse)|true|none|Event-specific attributes.|

<h2 id="tocS_WorkflowExecutionContinuedAsNewAttributesResponse">WorkflowExecutionContinuedAsNewAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutioncontinuedasnewattributesresponse"></a>
<a id="schema_WorkflowExecutionContinuedAsNewAttributesResponse"></a>
<a id="tocSworkflowexecutioncontinuedasnewattributesresponse"></a>
<a id="tocsworkflowexecutioncontinuedasnewattributesresponse"></a>

```json
{
  "task_id": "string",
  "new_execution_run_id": "string",
  "workflow_name": "string",
  "input": {
    "type": "json",
    "value": null
  }
}
```

Attributes for workflow execution continued-as-new events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string|true|none|Unique identifier for the task within the workflow execution.|
|new_execution_run_id|string|true|none|The run ID of the new workflow execution that continues this workflow.|
|workflow_name|string|true|none|The registered name of the continued workflow.|
|input|[JSONPayloadResponse](#schemajsonpayloadresponse)|true|none|The input arguments passed to the new workflow execution.|

<h2 id="tocS_WorkflowExecutionFailedResponse">WorkflowExecutionFailedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionfailedresponse"></a>
<a id="schema_WorkflowExecutionFailedResponse"></a>
<a id="tocSworkflowexecutionfailedresponse"></a>
<a id="tocsworkflowexecutionfailedresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "WORKFLOW_EXECUTION_FAILED",
  "attributes": {
    "task_id": "string",
    "failure": {
      "message": "string"
    }
  }
}
```

Emitted when a workflow execution fails due to an unhandled exception.

This is a terminal event indicating the workflow ended with an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[WorkflowExecutionFailedAttributes](#schemaworkflowexecutionfailedattributes)|true|none|Event-specific attributes.|

<h2 id="tocS_WorkflowExecutionFailedAttributes">WorkflowExecutionFailedAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionfailedattributes"></a>
<a id="schema_WorkflowExecutionFailedAttributes"></a>
<a id="tocSworkflowexecutionfailedattributes"></a>
<a id="tocsworkflowexecutionfailedattributes"></a>

```json
{
  "task_id": "string",
  "failure": {
    "message": "string"
  }
}
```

Attributes for workflow execution failed events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string|true|none|Unique identifier for the task within the workflow execution.|
|failure|[Failure](#schemafailure)|true|none|Details about the failure that caused the workflow to fail.|

<h2 id="tocS_WorkflowExecutionListResponse">WorkflowExecutionListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionlistresponse"></a>
<a id="schema_WorkflowExecutionListResponse"></a>
<a id="tocSworkflowexecutionlistresponse"></a>
<a id="tocsworkflowexecutionlistresponse"></a>

```json
{
  "executions": [
    {
      "workflow_name": "string",
      "execution_id": "string",
      "parent_execution_id": "string",
      "root_execution_id": "string",
      "status": "RUNNING",
      "start_time": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z",
      "total_duration_ms": 0
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executions|[[WorkflowExecutionWithoutResultResponse](#schemaworkflowexecutionwithoutresultresponse)]|true|none|A list of workflow executions|
|next_page_token|string \| null|false|none|Token to use for fetching the next page of results. Null if this is the last page.|

<h2 id="tocS_WorkflowExecutionProgressTraceEvent">WorkflowExecutionProgressTraceEvent</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionprogresstraceevent"></a>
<a id="schema_WorkflowExecutionProgressTraceEvent"></a>
<a id="tocSworkflowexecutionprogresstraceevent"></a>
<a id="tocsworkflowexecutionprogresstraceevent"></a>

```json
{
  "type": "EVENT",
  "name": "string",
  "id": "string",
  "timestamp_unix_nano": 0,
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "internal": false,
  "status": "RUNNING",
  "start_time_unix_ms": 0,
  "end_time_unix_ms": 0,
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[EventType](#schemaeventtype)|false|none|none|
|name|string|true|none|Name of the event|
|id|string|true|none|The ID of the event|
|timestamp_unix_nano|integer|true|none|The timestamp of the event in nanoseconds since the Unix epoch|
|attributes|object|true|none|The attributes of the event|
|internal|boolean|false|none|Whether the event is internal|
|status|[EventProgressStatus](#schemaeventprogressstatus)|false|none|The progress message|
|start_time_unix_ms|integer|true|none|The start time of the event in milliseconds since the Unix epoch|
|end_time_unix_ms|integer \| null|false|none|The end time of the event in milliseconds since the Unix epoch|
|error|string \| null|false|none|The error message, if any|

#### Enumerated Values

|Property|Value|
|---|---|
|type|EVENT|
|type|EVENT_PROGRESS|
|status|RUNNING|
|status|COMPLETED|
|status|FAILED|

<h2 id="tocS_WorkflowExecutionRequest">WorkflowExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionrequest"></a>
<a id="schema_WorkflowExecutionRequest"></a>
<a id="tocSworkflowexecutionrequest"></a>
<a id="tocsworkflowexecutionrequest"></a>

```json
{
  "execution_id": "string",
  "input": {},
  "encoded_input": {
    "b64payload": "string",
    "encoding_options": [],
    "empty": false
  },
  "wait_for_result": false,
  "timeout_seconds": 0,
  "custom_tracing_attributes": {
    "property1": "string",
    "property2": "string"
  },
  "task_queue": "string",
  "deployment_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|execution_id|string \| null|false|none|Allows you to specify a custom execution ID. If not provided, a random ID will be generated.|
|input|object \| null|false|none|The input to the workflow. This should be a dictionary that matches the workflow's input schema.|
|encoded_input|[NetworkEncodedInput](#schemanetworkencodedinput) \| null|false|none|Encoded input to the workflow, used when payload encoding is enabled.|
|wait_for_result|boolean|false|none|If true, wait for the workflow to complete and return the result directly.|
|timeout_seconds|number \| null|false|none|Maximum time to wait for completion when wait_for_result is true.|
|custom_tracing_attributes|object \| null|false|none|none|
|task_queue|string \| null|false|none|**Deprecated.** Deprecated. Use deployment_name instead.|
|deployment_name|string \| null|false|none|Name of the deployment to route this execution to|

<h2 id="tocS_WorkflowExecutionResponse">WorkflowExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionresponse"></a>
<a id="schema_WorkflowExecutionResponse"></a>
<a id="tocSworkflowexecutionresponse"></a>
<a id="tocsworkflowexecutionresponse"></a>

```json
{
  "workflow_name": "string",
  "execution_id": "string",
  "parent_execution_id": "string",
  "root_execution_id": "string",
  "status": "RUNNING",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "total_duration_ms": 0,
  "result": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_name|string|true|none|The name of the workflow|
|execution_id|string|true|none|The ID of the workflow execution|
|parent_execution_id|string \| null|false|none|The parent execution ID of the workflow execution|
|root_execution_id|string|true|none|The root execution ID of the workflow execution|
|status|[WorkflowExecutionStatus](#schemaworkflowexecutionstatus) \| null|true|none|The status of the workflow execution|
|start_time|string(date-time)|true|none|The start time of the workflow execution|
|end_time|string(date-time) \| null|true|none|The end time of the workflow execution, if available|
|total_duration_ms|integer \| null|false|none|The total duration of the trace in milliseconds|
|result|object \| null|true|none|The result of the workflow execution, if available|

<h2 id="tocS_WorkflowExecutionStartedResponse">WorkflowExecutionStartedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionstartedresponse"></a>
<a id="schema_WorkflowExecutionStartedResponse"></a>
<a id="tocSworkflowexecutionstartedresponse"></a>
<a id="tocsworkflowexecutionstartedresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "WORKFLOW_EXECUTION_STARTED",
  "attributes": {
    "task_id": "string",
    "workflow_name": "string",
    "input": {
      "type": "json",
      "value": null
    }
  }
}
```

Emitted when a workflow execution begins.

This is the first event in any workflow execution lifecycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[WorkflowExecutionStartedAttributesResponse](#schemaworkflowexecutionstartedattributesresponse)|true|none|Event-specific attributes.|

<h2 id="tocS_WorkflowExecutionStartedAttributesResponse">WorkflowExecutionStartedAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionstartedattributesresponse"></a>
<a id="schema_WorkflowExecutionStartedAttributesResponse"></a>
<a id="tocSworkflowexecutionstartedattributesresponse"></a>
<a id="tocsworkflowexecutionstartedattributesresponse"></a>

```json
{
  "task_id": "string",
  "workflow_name": "string",
  "input": {
    "type": "json",
    "value": null
  }
}
```

Attributes for workflow execution started events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string|true|none|Unique identifier for the task within the workflow execution.|
|workflow_name|string|true|none|The registered name of the workflow being executed.|
|input|[JSONPayloadResponse](#schemajsonpayloadresponse)|true|none|The input arguments passed to the workflow.|

<h2 id="tocS_WorkflowExecutionStatus">WorkflowExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionstatus"></a>
<a id="schema_WorkflowExecutionStatus"></a>
<a id="tocSworkflowexecutionstatus"></a>
<a id="tocsworkflowexecutionstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_WorkflowExecutionSyncResponse">WorkflowExecutionSyncResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionsyncresponse"></a>
<a id="schema_WorkflowExecutionSyncResponse"></a>
<a id="tocSworkflowexecutionsyncresponse"></a>
<a id="tocsworkflowexecutionsyncresponse"></a>

```json
{
  "workflow_name": "string",
  "execution_id": "string",
  "result": null
}
```

Response model for synchronous workflow execution

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_name|string|true|none|Name of the workflow that was executed|
|execution_id|string|true|none|ID of the workflow execution|
|result|object|true|none|The result of the workflow execution|

<h2 id="tocS_WorkflowExecutionTraceEvent">WorkflowExecutionTraceEvent</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutiontraceevent"></a>
<a id="schema_WorkflowExecutionTraceEvent"></a>
<a id="tocSworkflowexecutiontraceevent"></a>
<a id="tocsworkflowexecutiontraceevent"></a>

```json
{
  "type": "EVENT",
  "name": "string",
  "id": "string",
  "timestamp_unix_nano": 0,
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "internal": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[EventType](#schemaeventtype)|false|none|none|
|name|string|true|none|Name of the event|
|id|string|true|none|The ID of the event|
|timestamp_unix_nano|integer|true|none|The timestamp of the event in nanoseconds since the Unix epoch|
|attributes|object|true|none|The attributes of the event|
|internal|boolean|false|none|Whether the event is internal|

#### Enumerated Values

|Property|Value|
|---|---|
|type|EVENT|
|type|EVENT_PROGRESS|

<h2 id="tocS_WorkflowExecutionTraceEventsResponse">WorkflowExecutionTraceEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutiontraceeventsresponse"></a>
<a id="schema_WorkflowExecutionTraceEventsResponse"></a>
<a id="tocSworkflowexecutiontraceeventsresponse"></a>
<a id="tocsworkflowexecutiontraceeventsresponse"></a>

```json
{
  "workflow_name": "string",
  "execution_id": "string",
  "parent_execution_id": "string",
  "root_execution_id": "string",
  "status": "RUNNING",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "total_duration_ms": 0,
  "result": null,
  "events": [
    {
      "type": "EVENT",
      "name": "string",
      "id": "string",
      "timestamp_unix_nano": 0,
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "internal": false
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_name|string|true|none|The name of the workflow|
|execution_id|string|true|none|The ID of the workflow execution|
|parent_execution_id|string \| null|false|none|The parent execution ID of the workflow execution|
|root_execution_id|string|true|none|The root execution ID of the workflow execution|
|status|[WorkflowExecutionStatus](#schemaworkflowexecutionstatus) \| null|true|none|The status of the workflow execution|
|start_time|string(date-time)|true|none|The start time of the workflow execution|
|end_time|string(date-time) \| null|true|none|The end time of the workflow execution, if available|
|total_duration_ms|integer \| null|false|none|The total duration of the trace in milliseconds|
|result|object \| null|true|none|The result of the workflow execution, if available|
|events|[[WorkflowExecutionTraceEvent](#schemaworkflowexecutiontraceevent) \| [WorkflowExecutionProgressTraceEvent](#schemaworkflowexecutionprogresstraceevent)]|false|none|The events of the workflow execution|

<h2 id="tocS_WorkflowExecutionTraceOTelResponse">WorkflowExecutionTraceOTelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutiontraceotelresponse"></a>
<a id="schema_WorkflowExecutionTraceOTelResponse"></a>
<a id="tocSworkflowexecutiontraceotelresponse"></a>
<a id="tocsworkflowexecutiontraceotelresponse"></a>

```json
{
  "workflow_name": "string",
  "execution_id": "string",
  "parent_execution_id": "string",
  "root_execution_id": "string",
  "status": "RUNNING",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "total_duration_ms": 0,
  "result": null,
  "data_source": "string",
  "otel_trace_id": "string",
  "otel_trace_data": {
    "batches": [
      {
        "resource": {
          "attributes": [
            {
              "key": "string",
              "value": {
                "stringValue": "string"
              }
            }
          ]
        },
        "scopeSpans": [
          {
            "scope": {
              "name": "string"
            },
            "spans": [
              {
                "traceId": "string",
                "spanId": "string",
                "parentSpanId": "string",
                "name": "string",
                "kind": "SPAN_KIND_INTERNAL",
                "startTimeUnixNano": "string",
                "endTimeUnixNano": "string",
                "attributes": [
                  {
                    "key": "string",
                    "value": {
                      "stringValue": "string"
                    }
                  }
                ],
                "events": [
                  {
                    "name": "string",
                    "timeUnixNano": "string",
                    "attributes": [
                      {
                        "key": "string",
                        "value": {
                          "stringValue": "string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_name|string|true|none|The name of the workflow|
|execution_id|string|true|none|The ID of the workflow execution|
|parent_execution_id|string \| null|false|none|The parent execution ID of the workflow execution|
|root_execution_id|string|true|none|The root execution ID of the workflow execution|
|status|[WorkflowExecutionStatus](#schemaworkflowexecutionstatus) \| null|true|none|The status of the workflow execution|
|start_time|string(date-time)|true|none|The start time of the workflow execution|
|end_time|string(date-time) \| null|true|none|The end time of the workflow execution, if available|
|total_duration_ms|integer \| null|false|none|The total duration of the trace in milliseconds|
|result|object \| null|true|none|The result of the workflow execution, if available|
|data_source|string|true|none|The data source of the trace|
|otel_trace_id|string \| null|false|none|The ID of the trace|
|otel_trace_data|[TempoGetTraceResponse](#schematempogettraceresponse) \| null|false|none|The raw OpenTelemetry trace data|

<h2 id="tocS_WorkflowExecutionTraceSummaryAttributesValues">WorkflowExecutionTraceSummaryAttributesValues</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutiontracesummaryattributesvalues"></a>
<a id="schema_WorkflowExecutionTraceSummaryAttributesValues"></a>
<a id="tocSworkflowexecutiontracesummaryattributesvalues"></a>
<a id="tocsworkflowexecutiontracesummaryattributesvalues"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string|false|none|none|
|*anyOf*|integer|false|none|none|
|*anyOf*|number|false|none|none|
|*anyOf*|boolean|false|none|none|
|*anyOf*|null|false|none|none|

<h2 id="tocS_WorkflowExecutionTraceSummaryResponse">WorkflowExecutionTraceSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutiontracesummaryresponse"></a>
<a id="schema_WorkflowExecutionTraceSummaryResponse"></a>
<a id="tocSworkflowexecutiontracesummaryresponse"></a>
<a id="tocsworkflowexecutiontracesummaryresponse"></a>

```json
{
  "workflow_name": "string",
  "execution_id": "string",
  "parent_execution_id": "string",
  "root_execution_id": "string",
  "status": "RUNNING",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "total_duration_ms": 0,
  "result": null,
  "span_tree": {
    "span_id": "string",
    "name": "string",
    "start_time_unix_nano": 0,
    "end_time_unix_nano": 0,
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "events": [
      {
        "type": "EVENT",
        "name": "string",
        "id": "string",
        "timestamp_unix_nano": 0,
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "internal": false
      }
    ],
    "children": [
      {}
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_name|string|true|none|The name of the workflow|
|execution_id|string|true|none|The ID of the workflow execution|
|parent_execution_id|string \| null|false|none|The parent execution ID of the workflow execution|
|root_execution_id|string|true|none|The root execution ID of the workflow execution|
|status|[WorkflowExecutionStatus](#schemaworkflowexecutionstatus) \| null|true|none|The status of the workflow execution|
|start_time|string(date-time)|true|none|The start time of the workflow execution|
|end_time|string(date-time) \| null|true|none|The end time of the workflow execution, if available|
|total_duration_ms|integer \| null|false|none|The total duration of the trace in milliseconds|
|result|object \| null|true|none|The result of the workflow execution, if available|
|span_tree|[WorkflowExecutionTraceSummarySpan](#schemaworkflowexecutiontracesummaryspan) \| null|false|none|The root span of the trace|

<h2 id="tocS_WorkflowExecutionTraceSummarySpan">WorkflowExecutionTraceSummarySpan</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutiontracesummaryspan"></a>
<a id="schema_WorkflowExecutionTraceSummarySpan"></a>
<a id="tocSworkflowexecutiontracesummaryspan"></a>
<a id="tocsworkflowexecutiontracesummaryspan"></a>

```json
{
  "span_id": "string",
  "name": "string",
  "start_time_unix_nano": 0,
  "end_time_unix_nano": 0,
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "events": [
    {
      "type": "EVENT",
      "name": "string",
      "id": "string",
      "timestamp_unix_nano": 0,
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "internal": false
    }
  ],
  "children": [
    {
      "span_id": "string",
      "name": "string",
      "start_time_unix_nano": 0,
      "end_time_unix_nano": 0,
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "events": [
        {
          "type": "EVENT",
          "name": "string",
          "id": "string",
          "timestamp_unix_nano": 0,
          "attributes": {
            "property1": "string",
            "property2": "string"
          },
          "internal": false
        }
      ],
      "children": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|span_id|string|true|none|The ID of the span|
|name|string|true|none|The name of the span|
|start_time_unix_nano|integer|true|none|The start time of the span in nanoseconds since the Unix epoch|
|end_time_unix_nano|integer \| null|true|none|The end time of the span in nanoseconds since the Unix epoch|
|attributes|object|true|none|The attributes of the span|
|events|[[WorkflowExecutionTraceEvent](#schemaworkflowexecutiontraceevent)]|true|none|The events of the span|
|children|[[WorkflowExecutionTraceSummarySpan](#schemaworkflowexecutiontracesummaryspan)]|false|none|The child spans of the span|

<h2 id="tocS_WorkflowExecutionWithoutResultResponse">WorkflowExecutionWithoutResultResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionwithoutresultresponse"></a>
<a id="schema_WorkflowExecutionWithoutResultResponse"></a>
<a id="tocSworkflowexecutionwithoutresultresponse"></a>
<a id="tocsworkflowexecutionwithoutresultresponse"></a>

```json
{
  "workflow_name": "string",
  "execution_id": "string",
  "parent_execution_id": "string",
  "root_execution_id": "string",
  "status": "RUNNING",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "total_duration_ms": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_name|string|true|none|The name of the workflow|
|execution_id|string|true|none|The ID of the workflow execution|
|parent_execution_id|string \| null|false|none|The parent execution ID of the workflow execution|
|root_execution_id|string|true|none|The root execution ID of the workflow execution|
|status|[WorkflowExecutionStatus](#schemaworkflowexecutionstatus) \| null|true|none|The status of the workflow execution|
|start_time|string(date-time)|true|none|The start time of the workflow execution|
|end_time|string(date-time) \| null|true|none|The end time of the workflow execution, if available|
|total_duration_ms|integer \| null|false|none|The total duration of the trace in milliseconds|

<h2 id="tocS_WorkflowGetResponse">WorkflowGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowgetresponse"></a>
<a id="schema_WorkflowGetResponse"></a>
<a id="tocSworkflowgetresponse"></a>
<a id="tocsworkflowgetresponse"></a>

```json
{
  "workflow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "display_name": "string",
    "type": "code",
    "description": "string",
    "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shared_namespace": "string",
    "available_in_chat_assistant": false,
    "is_technical": false,
    "archived": false,
    "active": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow|[WorkflowWithWorkerStatus](#schemaworkflowwithworkerstatus)|true|none|The workflow spec|

<h2 id="tocS_WorkflowListResponse">WorkflowListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowlistresponse"></a>
<a id="schema_WorkflowListResponse"></a>
<a id="tocSworkflowlistresponse"></a>
<a id="tocsworkflowlistresponse"></a>

```json
{
  "workflows": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "display_name": "string",
      "description": "string",
      "metadata": {
        "shared_namespace": "string"
      },
      "archived": true
    }
  ],
  "next_cursor": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflows|[[WorkflowBasicDefinition](#schemaworkflowbasicdefinition)]|false|none|A list of workflows|
|next_cursor|string(uuid) \| null|true|none|none|

<h2 id="tocS_WorkflowMetadata">WorkflowMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowmetadata"></a>
<a id="schema_WorkflowMetadata"></a>
<a id="tocSworkflowmetadata"></a>
<a id="tocsworkflowmetadata"></a>

```json
{
  "shared_namespace": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shared_namespace|string \| null|false|none|Namespace for shared workflows, None if user-owned|

<h2 id="tocS_WorkflowMetrics">WorkflowMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowmetrics"></a>
<a id="schema_WorkflowMetrics"></a>
<a id="tocSworkflowmetrics"></a>
<a id="tocsworkflowmetrics"></a>

```json
{
  "execution_count": {
    "value": 0
  },
  "success_count": {
    "value": 0
  },
  "error_count": {
    "value": 0
  },
  "average_latency_ms": {
    "value": 0
  },
  "latency_over_time": {
    "value": [
      [
        0,
        0
      ]
    ]
  },
  "retry_rate": {
    "value": 0
  }
}
```

Complete metrics for a specific workflow.

This type combines all metric categories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|execution_count|[ScalarMetric](#schemascalarmetric)|true|none|Scalar metric with a single value.|
|success_count|[ScalarMetric](#schemascalarmetric)|true|none|Scalar metric with a single value.|
|error_count|[ScalarMetric](#schemascalarmetric)|true|none|Scalar metric with a single value.|
|average_latency_ms|[ScalarMetric](#schemascalarmetric)|true|none|Scalar metric with a single value.|
|latency_over_time|[TimeSeriesMetric](#schematimeseriesmetric)|true|none|Time-series metric with timestamp-value pairs.|
|retry_rate|[ScalarMetric](#schemascalarmetric)|true|none|Scalar metric with a single value.|

<h2 id="tocS_WorkflowRegistration">WorkflowRegistration</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowregistration"></a>
<a id="schema_WorkflowRegistration"></a>
<a id="tocSworkflowregistration"></a>
<a id="tocsworkflowregistration"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "task_queue": "string",
  "definition": {
    "input_schema": {},
    "output_schema": {},
    "signals": [
      {
        "name": "string",
        "description": "string",
        "input_schema": {}
      }
    ],
    "queries": [
      {
        "name": "string",
        "description": "string",
        "input_schema": {},
        "output_schema": {}
      }
    ],
    "updates": [
      {
        "name": "string",
        "description": "string",
        "input_schema": {},
        "output_schema": {}
      }
    ],
    "enforce_determinism": false,
    "execution_timeout": 0
  },
  "workflow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workflow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "display_name": "string",
    "type": "code",
    "description": "string",
    "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shared_namespace": "string",
    "available_in_chat_assistant": false,
    "is_technical": false,
    "archived": false
  },
  "compatible_with_chat_assistant": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Unique identifier of the workflow registration|
|task_queue|string|true|none|Project name of the workflow|
|definition|[WorkflowCodeDefinition](#schemaworkflowcodedefinition)|true|none|none|
|workflow_id|string(uuid)|true|none|Workflow ID of the workflow|
|workflow|[Workflow](#schemaworkflow) \| null|false|none|Workflow of the workflow registration|
|compatible_with_chat_assistant|boolean|false|none|Whether the workflow is compatible with chat assistant|

<h2 id="tocS_WorkflowRegistrationGetResponse">WorkflowRegistrationGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowregistrationgetresponse"></a>
<a id="schema_WorkflowRegistrationGetResponse"></a>
<a id="tocSworkflowregistrationgetresponse"></a>
<a id="tocsworkflowregistrationgetresponse"></a>

```json
{
  "workflow_registration": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "task_queue": "string",
    "definition": {
      "input_schema": {},
      "output_schema": {},
      "signals": [
        {
          "name": "string",
          "description": "string",
          "input_schema": {}
        }
      ],
      "queries": [
        {
          "name": "string",
          "description": "string",
          "input_schema": {},
          "output_schema": {}
        }
      ],
      "updates": [
        {
          "name": "string",
          "description": "string",
          "input_schema": {},
          "output_schema": {}
        }
      ],
      "enforce_determinism": false,
      "execution_timeout": 0
    },
    "workflow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workflow": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "display_name": "string",
      "type": "code",
      "description": "string",
      "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "shared_namespace": "string",
      "available_in_chat_assistant": false,
      "is_technical": false,
      "archived": false
    },
    "compatible_with_chat_assistant": false,
    "active": true
  },
  "workflow_version": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "task_queue": "string",
    "definition": {
      "input_schema": {},
      "output_schema": {},
      "signals": [
        {
          "name": "string",
          "description": "string",
          "input_schema": {}
        }
      ],
      "queries": [
        {
          "name": "string",
          "description": "string",
          "input_schema": {},
          "output_schema": {}
        }
      ],
      "updates": [
        {
          "name": "string",
          "description": "string",
          "input_schema": {},
          "output_schema": {}
        }
      ],
      "enforce_determinism": false,
      "execution_timeout": 0
    },
    "workflow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workflow": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "display_name": "string",
      "type": "code",
      "description": "string",
      "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "shared_namespace": "string",
      "available_in_chat_assistant": false,
      "is_technical": false,
      "archived": false
    },
    "compatible_with_chat_assistant": false,
    "active": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_registration|[WorkflowRegistrationWithWorkerStatus](#schemaworkflowregistrationwithworkerstatus)|true|none|The workflow registration|
|workflow_version|[WorkflowRegistrationWithWorkerStatus](#schemaworkflowregistrationwithworkerstatus)|true|none|Deprecated: use workflow_registration|

<h2 id="tocS_WorkflowRegistrationListResponse">WorkflowRegistrationListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowregistrationlistresponse"></a>
<a id="schema_WorkflowRegistrationListResponse"></a>
<a id="tocSworkflowregistrationlistresponse"></a>
<a id="tocsworkflowregistrationlistresponse"></a>

```json
{
  "workflow_registrations": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_queue": "string",
      "definition": {
        "input_schema": {},
        "output_schema": {},
        "signals": [
          {
            "name": "string",
            "description": "string",
            "input_schema": {}
          }
        ],
        "queries": [
          {
            "name": "string",
            "description": "string",
            "input_schema": {},
            "output_schema": {}
          }
        ],
        "updates": [
          {
            "name": "string",
            "description": "string",
            "input_schema": {},
            "output_schema": {}
          }
        ],
        "enforce_determinism": false,
        "execution_timeout": 0
      },
      "workflow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "workflow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "display_name": "string",
        "type": "code",
        "description": "string",
        "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "shared_namespace": "string",
        "available_in_chat_assistant": false,
        "is_technical": false,
        "archived": false
      },
      "compatible_with_chat_assistant": false
    }
  ],
  "next_cursor": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workflow_versions": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_queue": "string",
      "definition": {
        "input_schema": {},
        "output_schema": {},
        "signals": [
          {
            "name": "string",
            "description": "string",
            "input_schema": {}
          }
        ],
        "queries": [
          {
            "name": "string",
            "description": "string",
            "input_schema": {},
            "output_schema": {}
          }
        ],
        "updates": [
          {
            "name": "string",
            "description": "string",
            "input_schema": {},
            "output_schema": {}
          }
        ],
        "enforce_determinism": false,
        "execution_timeout": 0
      },
      "workflow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "workflow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "display_name": "string",
        "type": "code",
        "description": "string",
        "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "shared_namespace": "string",
        "available_in_chat_assistant": false,
        "is_technical": false,
        "archived": false
      },
      "compatible_with_chat_assistant": false
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_registrations|[[WorkflowRegistration](#schemaworkflowregistration)]|true|none|A list of workflow registrations|
|next_cursor|string(uuid) \| null|true|none|none|
|workflow_versions|[[WorkflowRegistration](#schemaworkflowregistration)]|true|read-only|Deprecated: use workflow_registrations|

<h2 id="tocS_WorkflowRegistrationWithWorkerStatus">WorkflowRegistrationWithWorkerStatus</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowregistrationwithworkerstatus"></a>
<a id="schema_WorkflowRegistrationWithWorkerStatus"></a>
<a id="tocSworkflowregistrationwithworkerstatus"></a>
<a id="tocsworkflowregistrationwithworkerstatus"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "task_queue": "string",
  "definition": {
    "input_schema": {},
    "output_schema": {},
    "signals": [
      {
        "name": "string",
        "description": "string",
        "input_schema": {}
      }
    ],
    "queries": [
      {
        "name": "string",
        "description": "string",
        "input_schema": {},
        "output_schema": {}
      }
    ],
    "updates": [
      {
        "name": "string",
        "description": "string",
        "input_schema": {},
        "output_schema": {}
      }
    ],
    "enforce_determinism": false,
    "execution_timeout": 0
  },
  "workflow_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workflow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "display_name": "string",
    "type": "code",
    "description": "string",
    "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shared_namespace": "string",
    "available_in_chat_assistant": false,
    "is_technical": false,
    "archived": false
  },
  "compatible_with_chat_assistant": false,
  "active": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Unique identifier of the workflow registration|
|task_queue|string|true|none|Project name of the workflow|
|definition|[WorkflowCodeDefinition](#schemaworkflowcodedefinition)|true|none|none|
|workflow_id|string(uuid)|true|none|Workflow ID of the workflow|
|workflow|[Workflow](#schemaworkflow) \| null|false|none|Workflow of the workflow registration|
|compatible_with_chat_assistant|boolean|false|none|Whether the workflow is compatible with chat assistant|
|active|boolean|true|none|Whether the workflow registration is active|

<h2 id="tocS_WorkflowScheduleListResponse">WorkflowScheduleListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowschedulelistresponse"></a>
<a id="schema_WorkflowScheduleListResponse"></a>
<a id="tocSworkflowschedulelistresponse"></a>
<a id="tocsworkflowschedulelistresponse"></a>

```json
{
  "schedules": [
    {
      "input": null,
      "calendars": [
        {
          "second": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "minute": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "hour": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "day_of_month": [
            {
              "start": 1,
              "end": 31,
              "step": 0
            }
          ],
          "month": [
            {
              "start": 1,
              "end": 12,
              "step": 0
            }
          ],
          "year": [],
          "day_of_week": [
            {
              "start": 0,
              "end": 6,
              "step": 0
            }
          ],
          "comment": "string"
        }
      ],
      "intervals": [
        {
          "every": "string",
          "offset": "string"
        }
      ],
      "cron_expressions": [
        "string"
      ],
      "skip": [
        {
          "second": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "minute": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "hour": [
            {
              "start": 0,
              "end": 0,
              "step": 0
            }
          ],
          "day_of_month": [
            {
              "start": 1,
              "end": 31,
              "step": 0
            }
          ],
          "month": [
            {
              "start": 1,
              "end": 12,
              "step": 0
            }
          ],
          "year": [],
          "day_of_week": [
            {
              "start": 0,
              "end": 6,
              "step": 0
            }
          ],
          "comment": "string"
        }
      ],
      "start_at": "1970-01-01T00:00:00Z",
      "end_at": "1970-01-01T00:00:00Z",
      "jitter": "string",
      "time_zone_name": "string",
      "policy": {
        "catchup_window_seconds": 31536000,
        "overlap": 1,
        "pause_on_failure": false
      },
      "schedule_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedules|[[ScheduleDefinitionOutput](#schemascheduledefinitionoutput)]|true|none|A list of workflow schedules|

<h2 id="tocS_WorkflowScheduleRequest">WorkflowScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowschedulerequest"></a>
<a id="schema_WorkflowScheduleRequest"></a>
<a id="tocSworkflowschedulerequest"></a>
<a id="tocsworkflowschedulerequest"></a>

```json
{
  "schedule": {
    "input": null,
    "calendars": [
      {
        "second": [
          {
            "start": 0,
            "end": 0,
            "step": 0
          }
        ],
        "minute": [
          {
            "start": 0,
            "end": 0,
            "step": 0
          }
        ],
        "hour": [
          {
            "start": 0,
            "end": 0,
            "step": 0
          }
        ],
        "day_of_month": [
          {
            "start": 1,
            "end": 31,
            "step": 0
          }
        ],
        "month": [
          {
            "start": 1,
            "end": 12,
            "step": 0
          }
        ],
        "year": [],
        "day_of_week": [
          {
            "start": 0,
            "end": 6,
            "step": 0
          }
        ],
        "comment": "string"
      }
    ],
    "intervals": [
      {
        "every": "string",
        "offset": "string"
      }
    ],
    "cron_expressions": [
      "string"
    ],
    "skip": [
      {
        "second": [
          {
            "start": 0,
            "end": 0,
            "step": 0
          }
        ],
        "minute": [
          {
            "start": 0,
            "end": 0,
            "step": 0
          }
        ],
        "hour": [
          {
            "start": 0,
            "end": 0,
            "step": 0
          }
        ],
        "day_of_month": [
          {
            "start": 1,
            "end": 31,
            "step": 0
          }
        ],
        "month": [
          {
            "start": 1,
            "end": 12,
            "step": 0
          }
        ],
        "year": [],
        "day_of_week": [
          {
            "start": 0,
            "end": 6,
            "step": 0
          }
        ],
        "comment": "string"
      }
    ],
    "start_at": "1970-01-01T00:00:00Z",
    "end_at": "1970-01-01T00:00:00Z",
    "jitter": "string",
    "time_zone_name": "string",
    "policy": {
      "catchup_window_seconds": 31536000,
      "overlap": 1,
      "pause_on_failure": false
    },
    "schedule_id": "string"
  },
  "workflow_registration_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workflow_version_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workflow_identifier": "string",
  "workflow_task_queue": "string",
  "schedule_id": "string",
  "deployment_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|[ScheduleDefinition](#schemascheduledefinition)|true|none|The schedule definition|
|workflow_registration_id|string(uuid) \| null|false|none|The ID of the workflow registration to schedule|
|workflow_version_id|string(uuid) \| null|false|none|Deprecated: use workflow_registration_id|
|workflow_identifier|string \| null|false|none|The name or ID of the workflow to schedule|
|workflow_task_queue|string \| null|false|none|**Deprecated.** Deprecated. Use deployment_name instead.|
|schedule_id|string \| null|false|none|Allows you to specify a custom schedule ID. If not provided, a random ID will be generated.|
|deployment_name|string \| null|false|none|Name of the deployment to route this schedule to|

<h2 id="tocS_WorkflowScheduleResponse">WorkflowScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowscheduleresponse"></a>
<a id="schema_WorkflowScheduleResponse"></a>
<a id="tocSworkflowscheduleresponse"></a>
<a id="tocsworkflowscheduleresponse"></a>

```json
{
  "schedule_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule_id|string|true|none|The ID of the schedule|

<h2 id="tocS_WorkflowTaskFailedResponse">WorkflowTaskFailedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtaskfailedresponse"></a>
<a id="schema_WorkflowTaskFailedResponse"></a>
<a id="tocSworkflowtaskfailedresponse"></a>
<a id="tocsworkflowtaskfailedresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "WORKFLOW_TASK_FAILED",
  "attributes": {
    "task_id": "string",
    "failure": {
      "message": "string"
    }
  }
}
```

Emitted when a workflow task fails.

This indicates an error occurred during workflow task execution,
which may trigger a retry depending on configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[WorkflowTaskFailedAttributes](#schemaworkflowtaskfailedattributes)|true|none|Event-specific attributes.|

<h2 id="tocS_WorkflowTaskFailedAttributes">WorkflowTaskFailedAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtaskfailedattributes"></a>
<a id="schema_WorkflowTaskFailedAttributes"></a>
<a id="tocSworkflowtaskfailedattributes"></a>
<a id="tocsworkflowtaskfailedattributes"></a>

```json
{
  "task_id": "string",
  "failure": {
    "message": "string"
  }
}
```

Attributes for workflow task failed events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string|true|none|Unique identifier for the task within the workflow execution.|
|failure|[Failure](#schemafailure)|true|none|Details about the failure that caused the task to fail.|

<h2 id="tocS_WorkflowTaskTimedOutResponse">WorkflowTaskTimedOutResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtasktimedoutresponse"></a>
<a id="schema_WorkflowTaskTimedOutResponse"></a>
<a id="tocSworkflowtasktimedoutresponse"></a>
<a id="tocsworkflowtasktimedoutresponse"></a>

```json
{
  "event_id": "string",
  "event_timestamp": 0,
  "root_workflow_exec_id": "string",
  "parent_workflow_exec_id": "string",
  "workflow_exec_id": "string",
  "workflow_run_id": "string",
  "workflow_name": "string",
  "event_type": "WORKFLOW_TASK_TIMED_OUT",
  "attributes": {
    "task_id": "string",
    "timeout_type": "string"
  }
}
```

Emitted when a workflow task times out.

This indicates the workflow task (a unit of workflow execution) exceeded
its configured timeout.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|Unique identifier for this event instance.|
|event_timestamp|integer|true|none|Unix timestamp in nanoseconds when the event was created.|
|root_workflow_exec_id|string|true|none|Execution ID of the root workflow that initiated this execution chain.|
|parent_workflow_exec_id|string \| null|true|none|Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.|
|workflow_exec_id|string|true|none|Execution ID of the workflow that emitted this event.|
|workflow_run_id|string|true|none|Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.|
|workflow_name|string|true|none|The registered name of the workflow that emitted this event.|
|event_type|string|true|none|Event type discriminator.|
|attributes|[WorkflowTaskTimedOutAttributes](#schemaworkflowtasktimedoutattributes)|true|none|Event-specific attributes.|

<h2 id="tocS_WorkflowTaskTimedOutAttributes">WorkflowTaskTimedOutAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtasktimedoutattributes"></a>
<a id="schema_WorkflowTaskTimedOutAttributes"></a>
<a id="tocSworkflowtasktimedoutattributes"></a>
<a id="tocsworkflowtasktimedoutattributes"></a>

```json
{
  "task_id": "string",
  "timeout_type": "string"
}
```

Attributes for workflow task timed out events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string|true|none|Unique identifier for the task within the workflow execution.|
|timeout_type|string \| null|false|none|The type of timeout that occurred (e.g., 'START_TO_CLOSE', 'SCHEDULE_TO_START').|

<h2 id="tocS_WorkflowType">WorkflowType</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtype"></a>
<a id="schema_WorkflowType"></a>
<a id="tocSworkflowtype"></a>
<a id="tocsworkflowtype"></a>

```json
"code"
```

<h2 id="tocS_WorkflowUnarchiveResponse">WorkflowUnarchiveResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowunarchiveresponse"></a>
<a id="schema_WorkflowUnarchiveResponse"></a>
<a id="tocSworkflowunarchiveresponse"></a>
<a id="tocsworkflowunarchiveresponse"></a>

```json
{
  "workflow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "display_name": "string",
    "type": "code",
    "description": "string",
    "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shared_namespace": "string",
    "available_in_chat_assistant": false,
    "is_technical": false,
    "archived": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow|[Workflow](#schemaworkflow)|true|none|The workflow spec|

<h2 id="tocS_WorkflowUpdateRequest">WorkflowUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowupdaterequest"></a>
<a id="schema_WorkflowUpdateRequest"></a>
<a id="tocSworkflowupdaterequest"></a>
<a id="tocsworkflowupdaterequest"></a>

```json
{
  "display_name": "string",
  "description": "string",
  "available_in_chat_assistant": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string \| null|false|none|New display name value|
|description|string \| null|false|none|New description value|
|available_in_chat_assistant|boolean \| null|false|none|Whether to make the workflow available in the chat assistant|

<h2 id="tocS_WorkflowUpdateResponse">WorkflowUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowupdateresponse"></a>
<a id="schema_WorkflowUpdateResponse"></a>
<a id="tocSworkflowupdateresponse"></a>
<a id="tocsworkflowupdateresponse"></a>

```json
{
  "workflow": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "display_name": "string",
    "type": "code",
    "description": "string",
    "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "shared_namespace": "string",
    "available_in_chat_assistant": false,
    "is_technical": false,
    "archived": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow|[Workflow](#schemaworkflow)|true|none|Updated workflow|

<h2 id="tocS_WorkflowWithWorkerStatus">WorkflowWithWorkerStatus</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowwithworkerstatus"></a>
<a id="schema_WorkflowWithWorkerStatus"></a>
<a id="tocSworkflowwithworkerstatus"></a>
<a id="tocsworkflowwithworkerstatus"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "display_name": "string",
  "type": "code",
  "description": "string",
  "customer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "workspace_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "shared_namespace": "string",
  "available_in_chat_assistant": false,
  "is_technical": false,
  "archived": false,
  "active": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Unique identifier of the workflow|
|name|string|true|none|Name of the workflow|
|display_name|string|true|none|Display name of the workflow|
|type|[WorkflowType](#schemaworkflowtype)|true|none|Type of the workflow|
|description|string \| null|false|none|Description of the workflow|
|customer_id|string(uuid)|true|none|Customer ID of the workflow|
|workspace_id|string(uuid)|true|none|Workspace ID of the workflow|
|shared_namespace|string \| null|false|none|Reserved namespace for shared workflows (e.g., 'shared:my-shared-workflow')|
|available_in_chat_assistant|boolean|false|none|Whether the workflow is available in chat assistant|
|is_technical|boolean|false|none|Whether the workflow is technical (e.g. SDK-managed)|
|archived|boolean|false|none|Whether the workflow is archived|
|active|boolean|true|none|Whether the workflow is active|

#### Enumerated Values

|Property|Value|
|---|---|
|type|code|

<h2 id="tocS_AuthUrlResponse">AuthUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthurlresponse"></a>
<a id="schema_AuthUrlResponse"></a>
<a id="tocSauthurlresponse"></a>
<a id="tocsauthurlresponse"></a>

```json
{
  "auth_url": "string",
  "ttl": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_url|string|true|none|none|
|ttl|integer|true|none|none|

<h2 id="tocS_AuthenticationConfiguration">AuthenticationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationconfiguration"></a>
<a id="schema_AuthenticationConfiguration"></a>
<a id="tocSauthenticationconfiguration"></a>
<a id="tocsauthenticationconfiguration"></a>

```json
{
  "name": "string",
  "authentication_type": "oauth2",
  "is_default": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|authentication_type|[OutboundAuthenticationType](#schemaoutboundauthenticationtype)|true|none|none|
|is_default|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authentication_type|oauth2|
|authentication_type|bearer|
|authentication_type|none|

<h2 id="tocS_ConnectionCredentials">ConnectionCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaconnectioncredentials"></a>
<a id="schema_ConnectionCredentials"></a>
<a id="tocSconnectioncredentials"></a>
<a id="tocsconnectioncredentials"></a>

```json
{
  "oauth": {
    "access_token": "string",
    "token_type": "Bearer",
    "expires_in": 0,
    "scope": "string",
    "refresh_token": "string",
    "expires_at": "1970-01-01T00:00:00Z"
  },
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "bearer_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oauth|[OAuth2Token](#schemaoauth2token) \| null|false|none|none|
|headers|object \| null|false|none|none|
|bearer_token|string \| null|false|none|none|

<h2 id="tocS_ConnectorAuthenticationHeader">ConnectorAuthenticationHeader</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorauthenticationheader"></a>
<a id="schema_ConnectorAuthenticationHeader"></a>
<a id="tocSconnectorauthenticationheader"></a>
<a id="tocsconnectorauthenticationheader"></a>

```json
{
  "name": "string",
  "is_required": true,
  "is_secret": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|is_required|boolean|false|none|none|
|is_secret|boolean|false|none|none|

<h2 id="tocS_CredentialsCreateOrUpdate">CredentialsCreateOrUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacredentialscreateorupdate"></a>
<a id="schema_CredentialsCreateOrUpdate"></a>
<a id="tocScredentialscreateorupdate"></a>
<a id="tocscredentialscreateorupdate"></a>

```json
{
  "name": "string",
  "is_default": true,
  "credentials": {
    "oauth": {
      "access_token": "string",
      "token_type": "Bearer",
      "expires_in": 0,
      "scope": "string",
      "refresh_token": "string",
      "expires_at": "1970-01-01T00:00:00Z"
    },
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "bearer_token": "string"
  }
}
```

Request to create or update non-OAuth2 credentials for a connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the credentials. Use this name to access or modify your credentials.|
|is_default|boolean \| null|false|none|Controls whether this credential is the default for its auth method. On creation: if no credential exists yet for this auth method, the credential is automatically set as default when is_default is true or omitted; setting is_default to false is rejected because a default must exist. If other credentials already exist, setting is_default to true promotes this credential (demoting the previous default); false or omitted creates it as non-default. On update: true promotes this credential, false is rejected if it is currently the default (promote another credential first), omitted leaves the default status unchanged.|
|credentials|[ConnectionCredentials](#schemaconnectioncredentials) \| null|false|none|The credential data (headers, bearer_token).|

<h2 id="tocS_CredentialsResponse">CredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacredentialsresponse"></a>
<a id="schema_CredentialsResponse"></a>
<a id="tocScredentialsresponse"></a>
<a id="tocscredentialsresponse"></a>

```json
{
  "credentials": [
    {
      "name": "string",
      "authentication_type": "oauth2",
      "is_default": false
    }
  ],
  "connector_preset_credentials_for_auth": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|[[AuthenticationConfiguration](#schemaauthenticationconfiguration)]|true|none|none|
|connector_preset_credentials_for_auth|[[OutboundAuthenticationType](#schemaoutboundauthenticationtype)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|connector_preset_credentials_for_auth|oauth2|
|connector_preset_credentials_for_auth|bearer|
|connector_preset_credentials_for_auth|none|

<h2 id="tocS_MCPSupportedLanguage">MCPSupportedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemamcpsupportedlanguage"></a>
<a id="schema_MCPSupportedLanguage"></a>
<a id="tocSmcpsupportedlanguage"></a>
<a id="tocsmcpsupportedlanguage"></a>

```json
"en"
```

<h2 id="tocS_MCPTool">MCPTool</h2>
<!-- backwards compatibility -->
<a id="schemamcptool"></a>
<a id="schema_MCPTool"></a>
<a id="tocSmcptool"></a>
<a id="tocsmcptool"></a>

```json
{
  "name": "string",
  "title": "string",
  "description": "string",
  "inputSchema": {},
  "outputSchema": {},
  "icons": [
    {
      "src": "string",
      "mimeType": "string",
      "sizes": [
        "string"
      ]
    }
  ],
  "annotations": {
    "title": "string",
    "readOnlyHint": true,
    "destructiveHint": true,
    "idempotentHint": true,
    "openWorldHint": true
  },
  "_meta": {
    "ui": {
      "resourceUri": "string",
      "visibility": [
        "model"
      ]
    },
    "ai.mistral/turbine": {
      "locale": {
        "name": {
          "property1": "string",
          "property2": "string"
        },
        "description": {
          "property1": "string",
          "property2": "string"
        },
        "usage_sentence": {
          "property1": "string",
          "property2": "string"
        },
        "working_description": {
          "property1": "string",
          "property2": "string"
        },
        "done_description": {
          "property1": "string",
          "property2": "string"
        }
      },
      "tool_type": "rag",
      "timeout": 0,
      "private_execution": true
    }
  },
  "execution": {
    "taskSupport": "forbidden"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|title|string \| null|false|none|none|
|description|string \| null|false|none|none|
|inputSchema|object|true|none|none|
|outputSchema|object \| null|false|none|none|
|icons|[[MCPServerIcon](#schemamcpservericon)] \| null|false|none|none|
|annotations|[ToolAnnotations](#schematoolannotations) \| null|false|none|none|
|_meta|[MCPToolMeta](#schemamcptoolmeta) \| null|false|none|none|
|execution|[ToolExecution](#schematoolexecution) \| null|false|none|none|

<h2 id="tocS_MCPToolMeta">MCPToolMeta</h2>
<!-- backwards compatibility -->
<a id="schemamcptoolmeta"></a>
<a id="schema_MCPToolMeta"></a>
<a id="tocSmcptoolmeta"></a>
<a id="tocsmcptoolmeta"></a>

```json
{
  "ui": {
    "resourceUri": "string",
    "visibility": [
      "model"
    ]
  },
  "ai.mistral/turbine": {
    "locale": {
      "name": {
        "property1": "string",
        "property2": "string"
      },
      "description": {
        "property1": "string",
        "property2": "string"
      },
      "usage_sentence": {
        "property1": "string",
        "property2": "string"
      },
      "working_description": {
        "property1": "string",
        "property2": "string"
      },
      "done_description": {
        "property1": "string",
        "property2": "string"
      }
    },
    "tool_type": "rag",
    "timeout": 0,
    "private_execution": true
  }
}
```

Typed _meta for MCP tools.

Only the 'ui' field is typed. Other fields are allowed via extra="allow".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ui|[MCPUIToolMeta](#schemamcpuitoolmeta) \| null|false|none|none|
|ai.mistral/turbine|[TurbineToolMeta](#schematurbinetoolmeta) \| null|false|none|none|

<h2 id="tocS_MCPUIToolMeta">MCPUIToolMeta</h2>
<!-- backwards compatibility -->
<a id="schemamcpuitoolmeta"></a>
<a id="schema_MCPUIToolMeta"></a>
<a id="tocSmcpuitoolmeta"></a>
<a id="tocsmcpuitoolmeta"></a>

```json
{
  "resourceUri": "string",
  "visibility": [
    "model"
  ]
}
```

UI metadata for tools that reference UI resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceUri|string \| null|false|none|none|
|visibility|[string] \| null|false|none|none|

<h2 id="tocS_OAuth2Token">OAuth2Token</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2token"></a>
<a id="schema_OAuth2Token"></a>
<a id="tocSoauth2token"></a>
<a id="tocsoauth2token"></a>

```json
{
  "access_token": "string",
  "token_type": "Bearer",
  "expires_in": 0,
  "scope": "string",
  "refresh_token": "string",
  "expires_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|none|
|token_type|string|false|none|none|
|expires_in|integer \| null|false|none|none|
|scope|string \| null|false|none|none|
|refresh_token|string \| null|false|none|none|
|expires_at|string(date-time) \| null|false|none|none|

<h2 id="tocS_OutboundAuthenticationType">OutboundAuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundauthenticationtype"></a>
<a id="schema_OutboundAuthenticationType"></a>
<a id="tocSoutboundauthenticationtype"></a>
<a id="tocsoutboundauthenticationtype"></a>

```json
"oauth2"
```

<h2 id="tocS_PublicAuthenticationMethod">PublicAuthenticationMethod</h2>
<!-- backwards compatibility -->
<a id="schemapublicauthenticationmethod"></a>
<a id="schema_PublicAuthenticationMethod"></a>
<a id="tocSpublicauthenticationmethod"></a>
<a id="tocspublicauthenticationmethod"></a>

```json
{
  "method_type": "oauth2",
  "headers": [
    {
      "name": "string",
      "is_required": true,
      "is_secret": true
    }
  ]
}
```

Public view of an authentication method, without secrets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method_type|[OutboundAuthenticationType](#schemaoutboundauthenticationtype)|true|none|none|
|headers|[[ConnectorAuthenticationHeader](#schemaconnectorauthenticationheader)] \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method_type|oauth2|
|method_type|bearer|
|method_type|none|

<h2 id="tocS_ToolAnnotations">ToolAnnotations</h2>
<!-- backwards compatibility -->
<a id="schematoolannotations"></a>
<a id="schema_ToolAnnotations"></a>
<a id="tocStoolannotations"></a>
<a id="tocstoolannotations"></a>

```json
{
  "title": "string",
  "readOnlyHint": true,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": true
}
```

Additional properties describing a Tool to clients.

NOTE: all properties in ToolAnnotations are **hints**.
They are not guaranteed to provide a faithful description of
tool behavior (including descriptive properties like `title`).

Clients should never make tool use decisions based on ToolAnnotations
received from untrusted servers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string \| null|false|none|none|
|readOnlyHint|boolean \| null|false|none|none|
|destructiveHint|boolean \| null|false|none|none|
|idempotentHint|boolean \| null|false|none|none|
|openWorldHint|boolean \| null|false|none|none|

<h2 id="tocS_ToolExecution">ToolExecution</h2>
<!-- backwards compatibility -->
<a id="schematoolexecution"></a>
<a id="schema_ToolExecution"></a>
<a id="tocStoolexecution"></a>
<a id="tocstoolexecution"></a>

```json
{
  "taskSupport": "forbidden"
}
```

Execution-related properties for a tool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskSupport|string \| null|false|none|none|

<h2 id="tocS_ToolType">ToolType</h2>
<!-- backwards compatibility -->
<a id="schematooltype"></a>
<a id="schema_ToolType"></a>
<a id="tocStooltype"></a>
<a id="tocstooltype"></a>

```json
"rag"
```

<h2 id="tocS_TurbineToolLocale">TurbineToolLocale</h2>
<!-- backwards compatibility -->
<a id="schematurbinetoollocale"></a>
<a id="schema_TurbineToolLocale"></a>
<a id="tocSturbinetoollocale"></a>
<a id="tocsturbinetoollocale"></a>

```json
{
  "name": {
    "property1": "string",
    "property2": "string"
  },
  "description": {
    "property1": "string",
    "property2": "string"
  },
  "usage_sentence": {
    "property1": "string",
    "property2": "string"
  },
  "working_description": {
    "property1": "string",
    "property2": "string"
  },
  "done_description": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object \| null|false|none|none|
|description|object \| null|false|none|none|
|usage_sentence|object \| null|false|none|none|
|working_description|object \| null|false|none|none|
|done_description|object \| null|false|none|none|

<h2 id="tocS_TurbineToolMeta">TurbineToolMeta</h2>
<!-- backwards compatibility -->
<a id="schematurbinetoolmeta"></a>
<a id="schema_TurbineToolMeta"></a>
<a id="tocSturbinetoolmeta"></a>
<a id="tocsturbinetoolmeta"></a>

```json
{
  "locale": {
    "name": {
      "property1": "string",
      "property2": "string"
    },
    "description": {
      "property1": "string",
      "property2": "string"
    },
    "usage_sentence": {
      "property1": "string",
      "property2": "string"
    },
    "working_description": {
      "property1": "string",
      "property2": "string"
    },
    "done_description": {
      "property1": "string",
      "property2": "string"
    }
  },
  "tool_type": "rag",
  "timeout": 0,
  "private_execution": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locale|[TurbineToolLocale](#schematurbinetoollocale) \| null|false|none|none|
|tool_type|[ToolType](#schematooltype) \| null|false|none|none|
|timeout|number \| null|false|none|none|
|private_execution|boolean \| null|false|none|none|
