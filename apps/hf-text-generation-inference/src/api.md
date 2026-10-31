<h1 id="text-generation-inference">Text Generation Inference v3.3.6-dev0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Text Generation Webserver

License: <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a>

<h1 id="text-generation-inference-text-generation-inference">Text Generation Inference</h1>

Hugging Face Text Generation Inference API

## Generate tokens if `stream == false` or a stream of token if `stream == true`

<a id="opIdcompat_generate"></a>

> Code samples

```bash
curl http://localhost:8080/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "inputs": "My name is Olivier and I",
    "parameters": {
      "adapter_id": "null",
      "best_of": 1,
      "decoder_input_details": "false",
      "details": "true",
      "do_sample": true,
      "frequency_penalty": 0.1,
      "grammar": "null",
      "max_new_tokens": "20",
      "repetition_penalty": 1.03,
      "return_full_text": false,
      "seed": "null",
      "stop": [
        "photographer"
      ],
      "temperature": 0.5,
      "top_k": 10,
      "top_n_tokens": 5,
      "top_p": 0.95,
      "truncate": "null",
      "typical_p": 0.95,
      "watermark": true
    },
    "stream": "false"
  }'
```

`POST /`

> Body parameter

```json
{
  "inputs": "My name is Olivier and I",
  "parameters": {
    "adapter_id": "null",
    "best_of": 1,
    "decoder_input_details": "false",
    "details": "true",
    "do_sample": true,
    "frequency_penalty": 0.1,
    "grammar": "null",
    "max_new_tokens": "20",
    "repetition_penalty": 1.03,
    "return_full_text": false,
    "seed": "null",
    "stop": [
      "photographer"
    ],
    "temperature": 0.5,
    "top_k": 10,
    "top_n_tokens": 5,
    "top_p": 0.95,
    "truncate": "null",
    "typical_p": 0.95,
    "watermark": true
  },
  "stream": "false"
}
```

<h3 id="generate-tokens-if-stream-false-or-a-stream-of-token-if-stream-true-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CompatGenerateRequest](#schemacompatgeneraterequest)|true|none|
|» inputs|body|string|true|none|
|» parameters|body|[GenerateParameters](#schemagenerateparameters)|false|none|
|» stream|body|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "details": {
      "best_of_sequences": [
        {
          "finish_reason": "Length",
          "generated_text": "test",
          "generated_tokens": 1,
          "prefill": [
            {
              "id": 0,
              "logprob": -0.34,
              "text": "test"
            }
          ],
          "seed": 42,
          "tokens": [
            {
              "id": 0,
              "logprob": -0.34,
              "special": "false",
              "text": "test"
            }
          ],
          "top_tokens": [
            [
              {
                "id": 0,
                "logprob": -0.34,
                "special": "false",
                "text": "test"
              }
            ]
          ]
        }
      ],
      "finish_reason": "Length",
      "generated_tokens": 1,
      "prefill": [
        {
          "id": 0,
          "logprob": -0.34,
          "text": "test"
        }
      ],
      "seed": 42,
      "tokens": [
        {
          "id": 0,
          "logprob": -0.34,
          "special": "false",
          "text": "test"
        }
      ],
      "top_tokens": [
        [
          {
            "id": 0,
            "logprob": -0.34,
            "special": "false",
            "text": "test"
          }
        ]
      ]
    },
    "generated_text": "test"
  }
]
```

> 422 Response

```json
{
  "error": "Input validation error",
  "error_type": "validation"
}
```

> 424 Response

```json
{
  "error": "Request failed during generation",
  "error_type": "generation"
}
```

> 429 Response

```json
{
  "error": "Model is overloaded",
  "error_type": "overloaded"
}
```

> 500 Response

```json
{
  "error": "Incomplete generation",
  "error_type": "incomplete_generation"
}
```

<h3 id="generate-tokens-if-stream-false-or-a-stream-of-token-if-stream-true-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generated Text|Inline|
|422|Unprocessable Entity|Input validation error|[ErrorResponse](#schemaerrorresponse)|
|424|Failed Dependency|Generation Error|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Model is overloaded|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Incomplete generation|[ErrorResponse](#schemaerrorresponse)|

<h3 id="generate-tokens-if-stream-false-or-a-stream-of-token-if-stream-true-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GenerateResponse](#schemagenerateresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Template and tokenize ChatRequest

<a id="opIdget_chat_tokenize"></a>

> Code samples

```bash
curl http://localhost:8080/chat_tokenize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "frequency_penalty": "1.0",
    "logit_bias": [
      0
    ],
    "logprobs": "false",
    "max_tokens": "32",
    "messages": "[{\"role\": \"user\", \"content\": \"What is Deep Learning?\"}]",
    "model": "mistralai/Mistral-7B-Instruct-v0.2",
    "n": "2",
    "presence_penalty": 0.1,
    "response_format": "null",
    "seed": 42,
    "stop": "null",
    "stream": true,
    "stream_options": {
      "include_usage": "true"
    },
    "temperature": 1,
    "tool_choice": "auto",
    "tool_prompt": "Given the functions available, please respond with a JSON for a function call with its proper arguments that best answers the given prompt. Respond in the format {name: function name, parameters: dictionary of argument name and its value}.Do not use variables.",
    "tools": "null",
    "top_logprobs": "5",
    "top_p": 0.95
  }'
```

`POST /chat_tokenize`

> Body parameter

```json
{
  "frequency_penalty": "1.0",
  "logit_bias": [
    0
  ],
  "logprobs": "false",
  "max_tokens": "32",
  "messages": "[{\"role\": \"user\", \"content\": \"What is Deep Learning?\"}]",
  "model": "mistralai/Mistral-7B-Instruct-v0.2",
  "n": "2",
  "presence_penalty": 0.1,
  "response_format": "null",
  "seed": 42,
  "stop": "null",
  "stream": true,
  "stream_options": {
    "include_usage": "true"
  },
  "temperature": 1,
  "tool_choice": "auto",
  "tool_prompt": "Given the functions available, please respond with a JSON for a function call with its proper arguments that best answers the given prompt. Respond in the format {name: function name, parameters: dictionary of argument name and its value}.Do not use variables.",
  "tools": "null",
  "top_logprobs": "5",
  "top_p": 0.95
}
```

<h3 id="template-and-tokenize-chatrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChatRequest](#schemachatrequest)|true|none|
|» frequency_penalty|body|number(float) \| null|false|Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far,<br>decreasing the model's likelihood to repeat the same line verbatim.|
|» logit_bias|body|[number(float)]|false|UNUSED<br>Modify the likelihood of specified tokens appearing in the completion. Accepts a JSON object that maps tokens<br>(specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically,<br>the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model,<br>but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should<br>result in a ban or exclusive selection of the relevant token.|
|» logprobs|body|boolean \| null|false|Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each<br>output token returned in the content of message.|
|» max_tokens|body|integer(int32) \| null|false|The maximum number of tokens that can be generated in the chat completion.|
|» messages|body|[[Message](#schemamessage)]|true|A list of messages comprising the conversation so far.|
|» model|body|string \| null|false|[UNUSED] ID of the model to use. See the model endpoint compatibility table for details on which models work with the Chat API.|
|» n|body|integer(int32) \| null|false|UNUSED<br>How many chat completion choices to generate for each input message. Note that you will be charged based on the<br>number of generated tokens across all of the choices. Keep n as 1 to minimize costs.|
|» presence_penalty|body|number(float) \| null|false|Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far,<br>increasing the model's likelihood to talk about new topics|
|» response_format|body|object \| null|false|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » value|body|object|true|A string that represents a [JSON Schema](https://json-schema.org/).<br><br>JSON Schema is a declarative language that allows to annotate JSON documents<br>with types and descriptions.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » value|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » value|body|[JsonSchemaConfig](#schemajsonschemaconfig)|true|none|
|» seed|body|integer(int64) \| null|false|none|
|» stop|body|[string]|false|Up to 4 sequences where the API will stop generating further tokens.|
|» stream|body|boolean|false|none|
|» stream_options|body|object \| null|false|none|
|» » include_usage|body|boolean|false|If set, an additional chunk will be streamed before the data: [DONE] message. The usage field on this chunk shows the token usage statistics for the entire request, and the choices field will always be an empty array. All other chunks will also include a usage field, but with a null value.|
|» temperature|body|number(float) \| null|false|What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while<br>lower values like 0.2 will make it more focused and deterministic.<br><br>We generally recommend altering this or `top_p` but not both.|
|» tool_choice|body|object \| null|false|none|
|» » *oneOf*|body|string|false|Means the model can pick between generating a message or calling one or more tools.|
|» » *oneOf*|body|string|false|Means the model will not call any tool and instead generates a message.|
|» » *oneOf*|body|string|false|Means the model must call one or more tools.|
|» » *oneOf*|body|object|false|none|
|» » function|body|[FunctionName](#schemafunctionname)|true|none|
|» tool_prompt|body|string \| null|false|A prompt to be appended before the tools|
|» tools|body|[[Tool](#schematool)]|false|A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of<br>functions the model may generate JSON inputs for.|
|» top_logprobs|body|integer(int32) \| null|false|An integer between 0 and 5 specifying the number of most likely tokens to return at each token position, each with<br>an associated log probability. logprobs must be set to true if this parameter is used.|
|» top_p|body|number(float) \| null|false|An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the<br>tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|json|
|» » type|regex|
|» » type|json_schema|
|» » *oneOf*|auto|
|» » *oneOf*|none|
|» » *oneOf*|required|

> Example responses

> 200 Response

```json
{
  "templated_text": "string",
  "tokenize_response": [
    {
      "id": 0,
      "start": 0,
      "stop": 2,
      "text": "test"
    }
  ]
}
```

> 404 Response

```json
{
  "error": "string",
  "error_type": "string"
}
```

<h3 id="template-and-tokenize-chatrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Templated and tokenized ChatRequest|[ChatTokenizeResponse](#schemachattokenizeresponse)|
|404|Not Found|Failed to tokenize ChatRequest|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate tokens

<a id="opIdgenerate"></a>

> Code samples

```bash
curl http://localhost:8080/generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "inputs": "My name is Olivier and I",
    "parameters": {
      "adapter_id": "null",
      "best_of": 1,
      "decoder_input_details": "false",
      "details": "true",
      "do_sample": true,
      "frequency_penalty": 0.1,
      "grammar": "null",
      "max_new_tokens": "20",
      "repetition_penalty": 1.03,
      "return_full_text": false,
      "seed": "null",
      "stop": [
        "photographer"
      ],
      "temperature": 0.5,
      "top_k": 10,
      "top_n_tokens": 5,
      "top_p": 0.95,
      "truncate": "null",
      "typical_p": 0.95,
      "watermark": true
    }
  }'
```

`POST /generate`

> Body parameter

```json
{
  "inputs": "My name is Olivier and I",
  "parameters": {
    "adapter_id": "null",
    "best_of": 1,
    "decoder_input_details": "false",
    "details": "true",
    "do_sample": true,
    "frequency_penalty": 0.1,
    "grammar": "null",
    "max_new_tokens": "20",
    "repetition_penalty": 1.03,
    "return_full_text": false,
    "seed": "null",
    "stop": [
      "photographer"
    ],
    "temperature": 0.5,
    "top_k": 10,
    "top_n_tokens": 5,
    "top_p": 0.95,
    "truncate": "null",
    "typical_p": 0.95,
    "watermark": true
  }
}
```

<h3 id="generate-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenerateRequest](#schemageneraterequest)|true|none|
|» inputs|body|string|true|none|
|» parameters|body|[GenerateParameters](#schemagenerateparameters)|false|none|

> Example responses

> 200 Response

```json
{
  "details": {
    "best_of_sequences": [
      {
        "finish_reason": "Length",
        "generated_text": "test",
        "generated_tokens": 1,
        "prefill": [
          {
            "id": 0,
            "logprob": -0.34,
            "text": "test"
          }
        ],
        "seed": 42,
        "tokens": [
          {
            "id": 0,
            "logprob": -0.34,
            "special": "false",
            "text": "test"
          }
        ],
        "top_tokens": [
          [
            {
              "id": 0,
              "logprob": -0.34,
              "special": "false",
              "text": "test"
            }
          ]
        ]
      }
    ],
    "finish_reason": "Length",
    "generated_tokens": 1,
    "prefill": [
      {
        "id": 0,
        "logprob": -0.34,
        "text": "test"
      }
    ],
    "seed": 42,
    "tokens": [
      {
        "id": 0,
        "logprob": -0.34,
        "special": "false",
        "text": "test"
      }
    ],
    "top_tokens": [
      [
        {
          "id": 0,
          "logprob": -0.34,
          "special": "false",
          "text": "test"
        }
      ]
    ]
  },
  "generated_text": "test"
}
```

> 422 Response

```json
{
  "error": "Input validation error",
  "error_type": "validation"
}
```

> 424 Response

```json
{
  "error": "Request failed during generation",
  "error_type": "generation"
}
```

> 429 Response

```json
{
  "error": "Model is overloaded",
  "error_type": "overloaded"
}
```

> 500 Response

```json
{
  "error": "Incomplete generation",
  "error_type": "incomplete_generation"
}
```

<h3 id="generate-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generated Text|[GenerateResponse](#schemagenerateresponse)|
|422|Unprocessable Entity|Input validation error|[ErrorResponse](#schemaerrorresponse)|
|424|Failed Dependency|Generation Error|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Model is overloaded|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Incomplete generation|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a stream of token using Server-Sent Events

<a id="opIdgenerate_stream"></a>

> Code samples

```bash
curl http://localhost:8080/generate_stream \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "inputs": "My name is Olivier and I",
    "parameters": {
      "adapter_id": "null",
      "best_of": 1,
      "decoder_input_details": "false",
      "details": "true",
      "do_sample": true,
      "frequency_penalty": 0.1,
      "grammar": "null",
      "max_new_tokens": "20",
      "repetition_penalty": 1.03,
      "return_full_text": false,
      "seed": "null",
      "stop": [
        "photographer"
      ],
      "temperature": 0.5,
      "top_k": 10,
      "top_n_tokens": 5,
      "top_p": 0.95,
      "truncate": "null",
      "typical_p": 0.95,
      "watermark": true
    }
  }'
```

`POST /generate_stream`

> Body parameter

```json
{
  "inputs": "My name is Olivier and I",
  "parameters": {
    "adapter_id": "null",
    "best_of": 1,
    "decoder_input_details": "false",
    "details": "true",
    "do_sample": true,
    "frequency_penalty": 0.1,
    "grammar": "null",
    "max_new_tokens": "20",
    "repetition_penalty": 1.03,
    "return_full_text": false,
    "seed": "null",
    "stop": [
      "photographer"
    ],
    "temperature": 0.5,
    "top_k": 10,
    "top_n_tokens": 5,
    "top_p": 0.95,
    "truncate": "null",
    "typical_p": 0.95,
    "watermark": true
  }
}
```

<h3 id="generate-a-stream-of-token-using-server-sent-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenerateRequest](#schemageneraterequest)|true|none|
|» inputs|body|string|true|none|
|» parameters|body|[GenerateParameters](#schemagenerateparameters)|false|none|

> Example responses

> 422 Response

```json
{
  "error": "Input validation error",
  "error_type": "validation"
}
```

> 424 Response

```json
{
  "error": "Request failed during generation",
  "error_type": "generation"
}
```

> 429 Response

```json
{
  "error": "Model is overloaded",
  "error_type": "overloaded"
}
```

> 500 Response

```json
{
  "error": "Incomplete generation",
  "error_type": "incomplete_generation"
}
```

<h3 id="generate-a-stream-of-token-using-server-sent-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generated Text|[StreamResponse](#schemastreamresponse)|
|422|Unprocessable Entity|Input validation error|[ErrorResponse](#schemaerrorresponse)|
|424|Failed Dependency|Generation Error|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Model is overloaded|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Incomplete generation|[ErrorResponse](#schemaerrorresponse)|

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
  "error_type": "healthcheck"
}
```

<h3 id="health-check-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Everything is working fine|None|
|503|Service Unavailable|Text generation inference is down|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Text Generation Inference endpoint info

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
  "docker_label": "null",
  "max_best_of": "2",
  "max_client_batch_size": "32",
  "max_concurrent_requests": "128",
  "max_input_tokens": "1024",
  "max_stop_sequences": "4",
  "max_total_tokens": "2048",
  "model_id": "bigscience/blomm-560m",
  "model_pipeline_tag": "text-generation",
  "model_sha": "e985a63cdc139290c5f700ff1929f0b5942cced2",
  "router": "text-generation-router",
  "sha": "null",
  "validation_workers": "2",
  "version": "0.5.0"
}
```

<h3 id="text-generation-inference-endpoint-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Served model info|[Info](#schemainfo)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate tokens from Sagemaker request

<a id="opIdsagemaker_compatibility"></a>

> Code samples

```bash
curl http://localhost:8080/invocations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "inputs": "My name is Olivier and I",
    "parameters": {
      "adapter_id": "null",
      "best_of": 1,
      "decoder_input_details": "false",
      "details": "true",
      "do_sample": true,
      "frequency_penalty": 0.1,
      "grammar": "null",
      "max_new_tokens": "20",
      "repetition_penalty": 1.03,
      "return_full_text": false,
      "seed": "null",
      "stop": [
        "photographer"
      ],
      "temperature": 0.5,
      "top_k": 10,
      "top_n_tokens": 5,
      "top_p": 0.95,
      "truncate": "null",
      "typical_p": 0.95,
      "watermark": true
    },
    "stream": "false"
  }'
```

`POST /invocations`

> Body parameter

```json
{
  "inputs": "My name is Olivier and I",
  "parameters": {
    "adapter_id": "null",
    "best_of": 1,
    "decoder_input_details": "false",
    "details": "true",
    "do_sample": true,
    "frequency_penalty": 0.1,
    "grammar": "null",
    "max_new_tokens": "20",
    "repetition_penalty": 1.03,
    "return_full_text": false,
    "seed": "null",
    "stop": [
      "photographer"
    ],
    "temperature": 0.5,
    "top_k": 10,
    "top_n_tokens": 5,
    "top_p": 0.95,
    "truncate": "null",
    "typical_p": 0.95,
    "watermark": true
  },
  "stream": "false"
}
```

<h3 id="generate-tokens-from-sagemaker-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SagemakerRequest](#schemasagemakerrequest)|true|none|
|» *oneOf*|body|[CompatGenerateRequest](#schemacompatgeneraterequest)|false|none|
|» *oneOf*|body|[ChatRequest](#schemachatrequest)|false|none|
|» *oneOf*|body|[CompletionRequest](#schemacompletionrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "details": {
    "best_of_sequences": [
      {
        "finish_reason": "Length",
        "generated_text": "test",
        "generated_tokens": 1,
        "prefill": [
          {
            "id": 0,
            "logprob": -0.34,
            "text": "test"
          }
        ],
        "seed": 42,
        "tokens": [
          {
            "id": 0,
            "logprob": -0.34,
            "special": "false",
            "text": "test"
          }
        ],
        "top_tokens": [
          [
            {
              "id": 0,
              "logprob": -0.34,
              "special": "false",
              "text": "test"
            }
          ]
        ]
      }
    ],
    "finish_reason": "Length",
    "generated_tokens": 1,
    "prefill": [
      {
        "id": 0,
        "logprob": -0.34,
        "text": "test"
      }
    ],
    "seed": 42,
    "tokens": [
      {
        "id": 0,
        "logprob": -0.34,
        "special": "false",
        "text": "test"
      }
    ],
    "top_tokens": [
      [
        {
          "id": 0,
          "logprob": -0.34,
          "special": "false",
          "text": "test"
        }
      ]
    ]
  },
  "generated_text": "test"
}
```

> 422 Response

```json
{
  "error": "Input validation error",
  "error_type": "validation"
}
```

> 424 Response

```json
{
  "error": "Request failed during generation",
  "error_type": "generation"
}
```

> 429 Response

```json
{
  "error": "Model is overloaded",
  "error_type": "overloaded"
}
```

> 500 Response

```json
{
  "error": "Incomplete generation",
  "error_type": "incomplete_generation"
}
```

<h3 id="generate-tokens-from-sagemaker-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generated Chat Completion|[SagemakerResponse](#schemasagemakerresponse)|
|422|Unprocessable Entity|Input validation error|[ErrorResponse](#schemaerrorresponse)|
|424|Failed Dependency|Generation Error|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Model is overloaded|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Incomplete generation|[ErrorResponse](#schemaerrorresponse)|

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

## Tokenize inputs

<a id="opIdtokenize"></a>

> Code samples

```bash
curl http://localhost:8080/tokenize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "inputs": "My name is Olivier and I",
    "parameters": {
      "adapter_id": "null",
      "best_of": 1,
      "decoder_input_details": "false",
      "details": "true",
      "do_sample": true,
      "frequency_penalty": 0.1,
      "grammar": "null",
      "max_new_tokens": "20",
      "repetition_penalty": 1.03,
      "return_full_text": false,
      "seed": "null",
      "stop": [
        "photographer"
      ],
      "temperature": 0.5,
      "top_k": 10,
      "top_n_tokens": 5,
      "top_p": 0.95,
      "truncate": "null",
      "typical_p": 0.95,
      "watermark": true
    }
  }'
```

`POST /tokenize`

> Body parameter

```json
{
  "inputs": "My name is Olivier and I",
  "parameters": {
    "adapter_id": "null",
    "best_of": 1,
    "decoder_input_details": "false",
    "details": "true",
    "do_sample": true,
    "frequency_penalty": 0.1,
    "grammar": "null",
    "max_new_tokens": "20",
    "repetition_penalty": 1.03,
    "return_full_text": false,
    "seed": "null",
    "stop": [
      "photographer"
    ],
    "temperature": 0.5,
    "top_k": 10,
    "top_n_tokens": 5,
    "top_p": 0.95,
    "truncate": "null",
    "typical_p": 0.95,
    "watermark": true
  }
}
```

<h3 id="tokenize-inputs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenerateRequest](#schemageneraterequest)|true|none|
|» inputs|body|string|true|none|
|» parameters|body|[GenerateParameters](#schemagenerateparameters)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "start": 0,
    "stop": 2,
    "text": "test"
  }
]
```

> 404 Response

```json
{
  "error": "No fast tokenizer available"
}
```

<h3 id="tokenize-inputs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tokenized ids|[TokenizeResponse](#schematokenizeresponse)|
|404|Not Found|No tokenizer found|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate tokens

<a id="opIdchat_completions"></a>

> Code samples

```bash
curl http://localhost:8080/v1/chat/completions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "frequency_penalty": "1.0",
    "logit_bias": [
      0
    ],
    "logprobs": "false",
    "max_tokens": "32",
    "messages": "[{\"role\": \"user\", \"content\": \"What is Deep Learning?\"}]",
    "model": "mistralai/Mistral-7B-Instruct-v0.2",
    "n": "2",
    "presence_penalty": 0.1,
    "response_format": "null",
    "seed": 42,
    "stop": "null",
    "stream": true,
    "stream_options": {
      "include_usage": "true"
    },
    "temperature": 1,
    "tool_choice": "auto",
    "tool_prompt": "Given the functions available, please respond with a JSON for a function call with its proper arguments that best answers the given prompt. Respond in the format {name: function name, parameters: dictionary of argument name and its value}.Do not use variables.",
    "tools": "null",
    "top_logprobs": "5",
    "top_p": 0.95
  }'
```

`POST /v1/chat/completions`

> Body parameter

```json
{
  "frequency_penalty": "1.0",
  "logit_bias": [
    0
  ],
  "logprobs": "false",
  "max_tokens": "32",
  "messages": "[{\"role\": \"user\", \"content\": \"What is Deep Learning?\"}]",
  "model": "mistralai/Mistral-7B-Instruct-v0.2",
  "n": "2",
  "presence_penalty": 0.1,
  "response_format": "null",
  "seed": 42,
  "stop": "null",
  "stream": true,
  "stream_options": {
    "include_usage": "true"
  },
  "temperature": 1,
  "tool_choice": "auto",
  "tool_prompt": "Given the functions available, please respond with a JSON for a function call with its proper arguments that best answers the given prompt. Respond in the format {name: function name, parameters: dictionary of argument name and its value}.Do not use variables.",
  "tools": "null",
  "top_logprobs": "5",
  "top_p": 0.95
}
```

<h3 id="generate-tokens-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChatRequest](#schemachatrequest)|true|none|
|» frequency_penalty|body|number(float) \| null|false|Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far,<br>decreasing the model's likelihood to repeat the same line verbatim.|
|» logit_bias|body|[number(float)]|false|UNUSED<br>Modify the likelihood of specified tokens appearing in the completion. Accepts a JSON object that maps tokens<br>(specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically,<br>the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model,<br>but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should<br>result in a ban or exclusive selection of the relevant token.|
|» logprobs|body|boolean \| null|false|Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each<br>output token returned in the content of message.|
|» max_tokens|body|integer(int32) \| null|false|The maximum number of tokens that can be generated in the chat completion.|
|» messages|body|[[Message](#schemamessage)]|true|A list of messages comprising the conversation so far.|
|» model|body|string \| null|false|[UNUSED] ID of the model to use. See the model endpoint compatibility table for details on which models work with the Chat API.|
|» n|body|integer(int32) \| null|false|UNUSED<br>How many chat completion choices to generate for each input message. Note that you will be charged based on the<br>number of generated tokens across all of the choices. Keep n as 1 to minimize costs.|
|» presence_penalty|body|number(float) \| null|false|Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far,<br>increasing the model's likelihood to talk about new topics|
|» response_format|body|object \| null|false|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » value|body|object|true|A string that represents a [JSON Schema](https://json-schema.org/).<br><br>JSON Schema is a declarative language that allows to annotate JSON documents<br>with types and descriptions.|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » value|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » value|body|[JsonSchemaConfig](#schemajsonschemaconfig)|true|none|
|» seed|body|integer(int64) \| null|false|none|
|» stop|body|[string]|false|Up to 4 sequences where the API will stop generating further tokens.|
|» stream|body|boolean|false|none|
|» stream_options|body|object \| null|false|none|
|» » include_usage|body|boolean|false|If set, an additional chunk will be streamed before the data: [DONE] message. The usage field on this chunk shows the token usage statistics for the entire request, and the choices field will always be an empty array. All other chunks will also include a usage field, but with a null value.|
|» temperature|body|number(float) \| null|false|What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while<br>lower values like 0.2 will make it more focused and deterministic.<br><br>We generally recommend altering this or `top_p` but not both.|
|» tool_choice|body|object \| null|false|none|
|» » *oneOf*|body|string|false|Means the model can pick between generating a message or calling one or more tools.|
|» » *oneOf*|body|string|false|Means the model will not call any tool and instead generates a message.|
|» » *oneOf*|body|string|false|Means the model must call one or more tools.|
|» » *oneOf*|body|object|false|none|
|» » function|body|[FunctionName](#schemafunctionname)|true|none|
|» tool_prompt|body|string \| null|false|A prompt to be appended before the tools|
|» tools|body|[[Tool](#schematool)]|false|A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of<br>functions the model may generate JSON inputs for.|
|» top_logprobs|body|integer(int32) \| null|false|An integer between 0 and 5 specifying the number of most likely tokens to return at each token position, each with<br>an associated log probability. logprobs must be set to true if this parameter is used.|
|» top_p|body|number(float) \| null|false|An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the<br>tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|json|
|» » type|regex|
|» » type|json_schema|
|» » *oneOf*|auto|
|» » *oneOf*|none|
|» » *oneOf*|required|

> Example responses

> 200 Response

```json
{
  "choices": [
    {
      "finish_reason": "string",
      "index": 0,
      "logprobs": {
        "content": [
          {
            "logprob": 0,
            "token": "string",
            "top_logprobs": [
              {
                "logprob": 0,
                "token": "string"
              }
            ]
          }
        ]
      },
      "message": {
        "content": "My name is David and I",
        "role": "user",
        "tool_call_id": "string"
      }
    }
  ],
  "created": "1706270835",
  "id": "string",
  "model": "mistralai/Mistral-7B-Instruct-v0.2",
  "system_fingerprint": "string",
  "usage": {
    "completion_tokens": 0,
    "prompt_tokens": 0,
    "total_tokens": 0
  }
}
```

> 422 Response

```json
{
  "error": "Input validation error",
  "error_type": "validation"
}
```

> 424 Response

```json
{
  "error": "Request failed during generation",
  "error_type": "generation"
}
```

> 429 Response

```json
{
  "error": "Model is overloaded",
  "error_type": "overloaded"
}
```

> 500 Response

```json
{
  "error": "Incomplete generation",
  "error_type": "incomplete_generation"
}
```

<h3 id="generate-tokens-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generated Chat Completion|[ChatCompletion](#schemachatcompletion)|
|422|Unprocessable Entity|Input validation error|[ErrorResponse](#schemaerrorresponse)|
|424|Failed Dependency|Generation Error|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Model is overloaded|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Incomplete generation|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate tokens

<a id="opIdcompletions"></a>

> Code samples

```bash
curl http://localhost:8080/v1/completions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "frequency_penalty": "1.0",
    "max_tokens": "32",
    "model": "mistralai/Mistral-7B-Instruct-v0.2",
    "prompt": [
      "string"
    ],
    "repetition_penalty": 0,
    "seed": 42,
    "stop": "null",
    "stream": true,
    "suffix": "string",
    "temperature": 1,
    "top_p": 0.95
  }'
```

`POST /v1/completions`

> Body parameter

```json
{
  "frequency_penalty": "1.0",
  "max_tokens": "32",
  "model": "mistralai/Mistral-7B-Instruct-v0.2",
  "prompt": [
    "string"
  ],
  "repetition_penalty": 0,
  "seed": 42,
  "stop": "null",
  "stream": true,
  "suffix": "string",
  "temperature": 1,
  "top_p": 0.95
}
```

<h3 id="generate-tokens-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CompletionRequest](#schemacompletionrequest)|true|none|
|» frequency_penalty|body|number(float) \| null|false|Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far,<br>decreasing the model's likelihood to repeat the same line verbatim.|
|» max_tokens|body|integer(int32) \| null|false|The maximum number of tokens that can be generated in the chat completion.|
|» model|body|string \| null|false|UNUSED<br>ID of the model to use. See the model endpoint compatibility table for details on which models work with the Chat API.|
|» prompt|body|[Prompt](#schemaprompt)|true|none|
|» repetition_penalty|body|number(float) \| null|false|none|
|» seed|body|integer(int64) \| null|false|none|
|» stop|body|[string]|false|Up to 4 sequences where the API will stop generating further tokens.|
|» stream|body|boolean|false|none|
|» suffix|body|string \| null|false|The text to append to the prompt. This is useful for completing sentences or generating a paragraph of text.<br>please see the completion_template field in the model's tokenizer_config.json file for completion template.|
|» temperature|body|number(float) \| null|false|What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while<br>lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both.|
|» top_p|body|number(float) \| null|false|An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the<br>tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.|

> Example responses

> 200 Response

```json
{
  "choices": [
    {
      "finish_reason": "string",
      "index": 0,
      "logprobs": [
        0
      ],
      "text": "string"
    }
  ],
  "created": "1706270835",
  "id": "string",
  "model": "mistralai/Mistral-7B-Instruct-v0.2",
  "system_fingerprint": "string",
  "usage": {
    "completion_tokens": 0,
    "prompt_tokens": 0,
    "total_tokens": 0
  }
}
```

> 422 Response

```json
{
  "error": "Input validation error",
  "error_type": "validation"
}
```

> 424 Response

```json
{
  "error": "Request failed during generation",
  "error_type": "generation"
}
```

> 429 Response

```json
{
  "error": "Model is overloaded",
  "error_type": "overloaded"
}
```

> 500 Response

```json
{
  "error": "Incomplete generation",
  "error_type": "incomplete_generation"
}
```

<h3 id="generate-tokens-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generated Chat Completion|[CompletionFinal](#schemacompletionfinal)|
|422|Unprocessable Entity|Input validation error|[ErrorResponse](#schemaerrorresponse)|
|424|Failed Dependency|Generation Error|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Model is overloaded|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Incomplete generation|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get model info

<a id="opIdopenai_get_model_info"></a>

> Code samples

```bash
curl http://localhost:8080/v1/models \
  -H 'Accept: application/json'
```

`GET /v1/models`

> Example responses

> 200 Response

```json
{
  "created": 1686935002,
  "id": "gpt2",
  "object": "model",
  "owned_by": "openai"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_type": "string"
}
```

<h3 id="get-model-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Served model info|[ModelInfo](#schemamodelinfo)|
|404|Not Found|Model not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_BestOfSequence">BestOfSequence</h2>
<!-- backwards compatibility -->
<a id="schemabestofsequence"></a>
<a id="schema_BestOfSequence"></a>
<a id="tocSbestofsequence"></a>
<a id="tocsbestofsequence"></a>

```json
{
  "finish_reason": "Length",
  "generated_text": "test",
  "generated_tokens": 1,
  "prefill": [
    {
      "id": 0,
      "logprob": -0.34,
      "text": "test"
    }
  ],
  "seed": 42,
  "tokens": [
    {
      "id": 0,
      "logprob": -0.34,
      "special": "false",
      "text": "test"
    }
  ],
  "top_tokens": [
    [
      {
        "id": 0,
        "logprob": -0.34,
        "special": "false",
        "text": "test"
      }
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finish_reason|[FinishReason](#schemafinishreason)|true|none|none|
|generated_text|string|true|none|none|
|generated_tokens|integer(int32)|true|none|none|
|prefill|[[PrefillToken](#schemaprefilltoken)]|true|none|none|
|seed|integer(int64) \| null|false|none|none|
|tokens|[[Token](#schematoken)]|true|none|none|
|top_tokens|[[[Token](#schematoken)]]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|finish_reason|length|
|finish_reason|eos_token|
|finish_reason|stop_sequence|

<h2 id="tocS_ChatCompletion">ChatCompletion</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletion"></a>
<a id="schema_ChatCompletion"></a>
<a id="tocSchatcompletion"></a>
<a id="tocschatcompletion"></a>

```json
{
  "choices": [
    {
      "finish_reason": "string",
      "index": 0,
      "logprobs": {
        "content": [
          {
            "logprob": 0,
            "token": "string",
            "top_logprobs": [
              {
                "logprob": 0,
                "token": "string"
              }
            ]
          }
        ]
      },
      "message": {
        "content": "My name is David and I",
        "role": "user",
        "tool_call_id": "string"
      }
    }
  ],
  "created": "1706270835",
  "id": "string",
  "model": "mistralai/Mistral-7B-Instruct-v0.2",
  "system_fingerprint": "string",
  "usage": {
    "completion_tokens": 0,
    "prompt_tokens": 0,
    "total_tokens": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|choices|[[ChatCompletionComplete](#schemachatcompletioncomplete)]|true|none|none|
|created|integer(int64)|true|none|none|
|id|string|true|none|none|
|model|string|true|none|none|
|system_fingerprint|string|true|none|none|
|usage|[Usage](#schemausage)|true|none|none|

<h2 id="tocS_ChatCompletionChoice">ChatCompletionChoice</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionchoice"></a>
<a id="schema_ChatCompletionChoice"></a>
<a id="tocSchatcompletionchoice"></a>
<a id="tocschatcompletionchoice"></a>

```json
{
  "delta": {
    "content": "My name is David and I",
    "role": "user",
    "tool_call_id": "string"
  },
  "finish_reason": "string",
  "index": 0,
  "logprobs": {
    "content": [
      {
        "logprob": 0,
        "token": "string",
        "top_logprobs": [
          {
            "logprob": 0,
            "token": "string"
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
|delta|[ChatCompletionDelta](#schemachatcompletiondelta)|true|none|none|
|finish_reason|string \| null|false|none|none|
|index|integer(int32)|true|none|none|
|logprobs|object \| null|false|none|none|

<h2 id="tocS_ChatCompletionChunk">ChatCompletionChunk</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionchunk"></a>
<a id="schema_ChatCompletionChunk"></a>
<a id="tocSchatcompletionchunk"></a>
<a id="tocschatcompletionchunk"></a>

```json
{
  "choices": [
    {
      "delta": {
        "content": "My name is David and I",
        "role": "user",
        "tool_call_id": "string"
      },
      "finish_reason": "string",
      "index": 0,
      "logprobs": {
        "content": [
          {
            "logprob": 0,
            "token": "string",
            "top_logprobs": [
              {
                "logprob": 0,
                "token": "string"
              }
            ]
          }
        ]
      }
    }
  ],
  "created": "1706270978",
  "id": "string",
  "model": "mistralai/Mistral-7B-Instruct-v0.2",
  "system_fingerprint": "string",
  "usage": {
    "completion_tokens": 0,
    "prompt_tokens": 0,
    "total_tokens": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|choices|[[ChatCompletionChoice](#schemachatcompletionchoice)]|true|none|none|
|created|integer(int64)|true|none|none|
|id|string|true|none|none|
|model|string|true|none|none|
|system_fingerprint|string|true|none|none|
|usage|object \| null|false|none|none|

<h2 id="tocS_ChatCompletionComplete">ChatCompletionComplete</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletioncomplete"></a>
<a id="schema_ChatCompletionComplete"></a>
<a id="tocSchatcompletioncomplete"></a>
<a id="tocschatcompletioncomplete"></a>

```json
{
  "finish_reason": "string",
  "index": 0,
  "logprobs": {
    "content": [
      {
        "logprob": 0,
        "token": "string",
        "top_logprobs": [
          {
            "logprob": 0,
            "token": "string"
          }
        ]
      }
    ]
  },
  "message": {
    "content": "My name is David and I",
    "role": "user",
    "tool_call_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finish_reason|string|true|none|none|
|index|integer(int32)|true|none|none|
|logprobs|object \| null|false|none|none|
|message|[OutputMessage](#schemaoutputmessage)|true|none|none|

<h2 id="tocS_ChatCompletionDelta">ChatCompletionDelta</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletiondelta"></a>
<a id="schema_ChatCompletionDelta"></a>
<a id="tocSchatcompletiondelta"></a>
<a id="tocschatcompletiondelta"></a>

```json
{
  "content": "My name is David and I",
  "role": "user",
  "tool_call_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[TextMessage](#schematextmessage)|false|none|none|
|*oneOf*|[ToolCallDelta](#schematoolcalldelta)|false|none|none|

<h2 id="tocS_ChatCompletionLogprob">ChatCompletionLogprob</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionlogprob"></a>
<a id="schema_ChatCompletionLogprob"></a>
<a id="tocSchatcompletionlogprob"></a>
<a id="tocschatcompletionlogprob"></a>

```json
{
  "logprob": 0,
  "token": "string",
  "top_logprobs": [
    {
      "logprob": 0,
      "token": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logprob|number(float)|true|none|none|
|token|string|true|none|none|
|top_logprobs|[[ChatCompletionTopLogprob](#schemachatcompletiontoplogprob)]|true|none|none|

<h2 id="tocS_ChatCompletionLogprobs">ChatCompletionLogprobs</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionlogprobs"></a>
<a id="schema_ChatCompletionLogprobs"></a>
<a id="tocSchatcompletionlogprobs"></a>
<a id="tocschatcompletionlogprobs"></a>

```json
{
  "content": [
    {
      "logprob": 0,
      "token": "string",
      "top_logprobs": [
        {
          "logprob": 0,
          "token": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[ChatCompletionLogprob](#schemachatcompletionlogprob)]|true|none|none|

<h2 id="tocS_ChatCompletionTopLogprob">ChatCompletionTopLogprob</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletiontoplogprob"></a>
<a id="schema_ChatCompletionTopLogprob"></a>
<a id="tocSchatcompletiontoplogprob"></a>
<a id="tocschatcompletiontoplogprob"></a>

```json
{
  "logprob": 0,
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logprob|number(float)|true|none|none|
|token|string|true|none|none|

<h2 id="tocS_ChatRequest">ChatRequest</h2>
<!-- backwards compatibility -->
<a id="schemachatrequest"></a>
<a id="schema_ChatRequest"></a>
<a id="tocSchatrequest"></a>
<a id="tocschatrequest"></a>

```json
{
  "frequency_penalty": "1.0",
  "logit_bias": [
    0
  ],
  "logprobs": "false",
  "max_tokens": "32",
  "messages": "[{\"role\": \"user\", \"content\": \"What is Deep Learning?\"}]",
  "model": "mistralai/Mistral-7B-Instruct-v0.2",
  "n": "2",
  "presence_penalty": 0.1,
  "response_format": "null",
  "seed": 42,
  "stop": "null",
  "stream": true,
  "stream_options": {
    "include_usage": "true"
  },
  "temperature": 1,
  "tool_choice": "auto",
  "tool_prompt": "Given the functions available, please respond with a JSON for a function call with its proper arguments that best answers the given prompt. Respond in the format {name: function name, parameters: dictionary of argument name and its value}.Do not use variables.",
  "tools": "null",
  "top_logprobs": "5",
  "top_p": 0.95
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency_penalty|number(float) \| null|false|none|Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far,<br>decreasing the model's likelihood to repeat the same line verbatim.|
|logit_bias|[number(float)]|false|none|UNUSED<br>Modify the likelihood of specified tokens appearing in the completion. Accepts a JSON object that maps tokens<br>(specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically,<br>the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model,<br>but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should<br>result in a ban or exclusive selection of the relevant token.|
|logprobs|boolean \| null|false|none|Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each<br>output token returned in the content of message.|
|max_tokens|integer(int32) \| null|false|none|The maximum number of tokens that can be generated in the chat completion.|
|messages|[[Message](#schemamessage)]|true|none|A list of messages comprising the conversation so far.|
|model|string \| null|false|none|[UNUSED] ID of the model to use. See the model endpoint compatibility table for details on which models work with the Chat API.|
|n|integer(int32) \| null|false|none|UNUSED<br>How many chat completion choices to generate for each input message. Note that you will be charged based on the<br>number of generated tokens across all of the choices. Keep n as 1 to minimize costs.|
|presence_penalty|number(float) \| null|false|none|Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far,<br>increasing the model's likelihood to talk about new topics|
|response_format|object \| null|false|none|none|
|seed|integer(int64) \| null|false|none|none|
|stop|[string]|false|none|Up to 4 sequences where the API will stop generating further tokens.|
|stream|boolean|false|none|none|
|stream_options|object \| null|false|none|none|
|temperature|number(float) \| null|false|none|What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while<br>lower values like 0.2 will make it more focused and deterministic.<br><br>We generally recommend altering this or `top_p` but not both.|
|tool_choice|object \| null|false|none|none|
|tool_prompt|string \| null|false|none|A prompt to be appended before the tools|
|tools|[[Tool](#schematool)]|false|none|A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of<br>functions the model may generate JSON inputs for.|
|top_logprobs|integer(int32) \| null|false|none|An integer between 0 and 5 specifying the number of most likely tokens to return at each token position, each with<br>an associated log probability. logprobs must be set to true if this parameter is used.|
|top_p|number(float) \| null|false|none|An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the<br>tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.|

<h2 id="tocS_ChatTokenizeResponse">ChatTokenizeResponse</h2>
<!-- backwards compatibility -->
<a id="schemachattokenizeresponse"></a>
<a id="schema_ChatTokenizeResponse"></a>
<a id="tocSchattokenizeresponse"></a>
<a id="tocschattokenizeresponse"></a>

```json
{
  "templated_text": "string",
  "tokenize_response": [
    {
      "id": 0,
      "start": 0,
      "stop": 2,
      "text": "test"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templated_text|string|true|none|none|
|tokenize_response|[TokenizeResponse](#schematokenizeresponse)|true|none|none|

<h2 id="tocS_Chunk">Chunk</h2>
<!-- backwards compatibility -->
<a id="schemachunk"></a>
<a id="schema_Chunk"></a>
<a id="tocSchunk"></a>
<a id="tocschunk"></a>

```json
{
  "choices": [
    {
      "finish_reason": "string",
      "index": 0,
      "logprobs": [
        0
      ],
      "text": "string"
    }
  ],
  "created": 0,
  "id": "string",
  "model": "string",
  "system_fingerprint": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|choices|[[CompletionComplete](#schemacompletioncomplete)]|true|none|none|
|created|integer(int64)|true|none|none|
|id|string|true|none|none|
|model|string|true|none|none|
|system_fingerprint|string|true|none|none|

<h2 id="tocS_CompatGenerateRequest">CompatGenerateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompatgeneraterequest"></a>
<a id="schema_CompatGenerateRequest"></a>
<a id="tocScompatgeneraterequest"></a>
<a id="tocscompatgeneraterequest"></a>

```json
{
  "inputs": "My name is Olivier and I",
  "parameters": {
    "adapter_id": "null",
    "best_of": 1,
    "decoder_input_details": "false",
    "details": "true",
    "do_sample": true,
    "frequency_penalty": 0.1,
    "grammar": "null",
    "max_new_tokens": "20",
    "repetition_penalty": 1.03,
    "return_full_text": false,
    "seed": "null",
    "stop": [
      "photographer"
    ],
    "temperature": 0.5,
    "top_k": 10,
    "top_n_tokens": 5,
    "top_p": 0.95,
    "truncate": "null",
    "typical_p": 0.95,
    "watermark": true
  },
  "stream": "false"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|string|true|none|none|
|parameters|[GenerateParameters](#schemagenerateparameters)|false|none|none|
|stream|boolean|false|none|none|

<h2 id="tocS_Completion">Completion</h2>
<!-- backwards compatibility -->
<a id="schemacompletion"></a>
<a id="schema_Completion"></a>
<a id="tocScompletion"></a>
<a id="tocscompletion"></a>

```json
{
  "choices": [
    {
      "finish_reason": "string",
      "index": 0,
      "logprobs": [
        0
      ],
      "text": "string"
    }
  ],
  "created": 0,
  "id": "string",
  "model": "string",
  "system_fingerprint": "string",
  "object": "text_completion"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|choices|[[CompletionComplete](#schemacompletioncomplete)]|true|none|none|
|created|integer(int64)|true|none|none|
|id|string|true|none|none|
|model|string|true|none|none|
|system_fingerprint|string|true|none|none|
|object|string|true|none|none|
|*oneOf*|object|false|none|none|
|choices|[[CompletionComplete](#schemacompletioncomplete)]|true|none|none|
|created|integer(int64)|true|none|none|
|id|string|true|none|none|
|model|string|true|none|none|
|system_fingerprint|string|true|none|none|
|usage|[Usage](#schemausage)|true|none|none|
|object|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|object|text_completion|
|object|text_completion|

<h2 id="tocS_CompletionComplete">CompletionComplete</h2>
<!-- backwards compatibility -->
<a id="schemacompletioncomplete"></a>
<a id="schema_CompletionComplete"></a>
<a id="tocScompletioncomplete"></a>
<a id="tocscompletioncomplete"></a>

```json
{
  "finish_reason": "string",
  "index": 0,
  "logprobs": [
    0
  ],
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finish_reason|string|true|none|none|
|index|integer(int32)|true|none|none|
|logprobs|[number(float)]|false|none|none|
|text|string|true|none|none|

<h2 id="tocS_CompletionFinal">CompletionFinal</h2>
<!-- backwards compatibility -->
<a id="schemacompletionfinal"></a>
<a id="schema_CompletionFinal"></a>
<a id="tocScompletionfinal"></a>
<a id="tocscompletionfinal"></a>

```json
{
  "choices": [
    {
      "finish_reason": "string",
      "index": 0,
      "logprobs": [
        0
      ],
      "text": "string"
    }
  ],
  "created": "1706270835",
  "id": "string",
  "model": "mistralai/Mistral-7B-Instruct-v0.2",
  "system_fingerprint": "string",
  "usage": {
    "completion_tokens": 0,
    "prompt_tokens": 0,
    "total_tokens": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|choices|[[CompletionComplete](#schemacompletioncomplete)]|true|none|none|
|created|integer(int64)|true|none|none|
|id|string|true|none|none|
|model|string|true|none|none|
|system_fingerprint|string|true|none|none|
|usage|[Usage](#schemausage)|true|none|none|

<h2 id="tocS_CompletionRequest">CompletionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompletionrequest"></a>
<a id="schema_CompletionRequest"></a>
<a id="tocScompletionrequest"></a>
<a id="tocscompletionrequest"></a>

```json
{
  "frequency_penalty": "1.0",
  "max_tokens": "32",
  "model": "mistralai/Mistral-7B-Instruct-v0.2",
  "prompt": [
    "string"
  ],
  "repetition_penalty": 0,
  "seed": 42,
  "stop": "null",
  "stream": true,
  "suffix": "string",
  "temperature": 1,
  "top_p": 0.95
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency_penalty|number(float) \| null|false|none|Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far,<br>decreasing the model's likelihood to repeat the same line verbatim.|
|max_tokens|integer(int32) \| null|false|none|The maximum number of tokens that can be generated in the chat completion.|
|model|string \| null|false|none|UNUSED<br>ID of the model to use. See the model endpoint compatibility table for details on which models work with the Chat API.|
|prompt|[Prompt](#schemaprompt)|true|none|none|
|repetition_penalty|number(float) \| null|false|none|none|
|seed|integer(int64) \| null|false|none|none|
|stop|[string]|false|none|Up to 4 sequences where the API will stop generating further tokens.|
|stream|boolean|false|none|none|
|suffix|string \| null|false|none|The text to append to the prompt. This is useful for completing sentences or generating a paragraph of text.<br>please see the completion_template field in the model's tokenizer_config.json file for completion template.|
|temperature|number(float) \| null|false|none|What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while<br>lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both.|
|top_p|number(float) \| null|false|none|An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the<br>tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.|

<h2 id="tocS_DeltaToolCall">DeltaToolCall</h2>
<!-- backwards compatibility -->
<a id="schemadeltatoolcall"></a>
<a id="schema_DeltaToolCall"></a>
<a id="tocSdeltatoolcall"></a>
<a id="tocsdeltatoolcall"></a>

```json
{
  "function": {
    "arguments": "string",
    "name": "string"
  },
  "id": "string",
  "index": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|function|[Function](#schemafunction)|true|none|none|
|id|string|true|none|none|
|index|integer(int32)|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_Details">Details</h2>
<!-- backwards compatibility -->
<a id="schemadetails"></a>
<a id="schema_Details"></a>
<a id="tocSdetails"></a>
<a id="tocsdetails"></a>

```json
{
  "best_of_sequences": [
    {
      "finish_reason": "Length",
      "generated_text": "test",
      "generated_tokens": 1,
      "prefill": [
        {
          "id": 0,
          "logprob": -0.34,
          "text": "test"
        }
      ],
      "seed": 42,
      "tokens": [
        {
          "id": 0,
          "logprob": -0.34,
          "special": "false",
          "text": "test"
        }
      ],
      "top_tokens": [
        [
          {
            "id": 0,
            "logprob": -0.34,
            "special": "false",
            "text": "test"
          }
        ]
      ]
    }
  ],
  "finish_reason": "Length",
  "generated_tokens": 1,
  "prefill": [
    {
      "id": 0,
      "logprob": -0.34,
      "text": "test"
    }
  ],
  "seed": 42,
  "tokens": [
    {
      "id": 0,
      "logprob": -0.34,
      "special": "false",
      "text": "test"
    }
  ],
  "top_tokens": [
    [
      {
        "id": 0,
        "logprob": -0.34,
        "special": "false",
        "text": "test"
      }
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|best_of_sequences|[[BestOfSequence](#schemabestofsequence)]|false|none|none|
|finish_reason|[FinishReason](#schemafinishreason)|true|none|none|
|generated_tokens|integer(int32)|true|none|none|
|prefill|[[PrefillToken](#schemaprefilltoken)]|true|none|none|
|seed|integer(int64) \| null|false|none|none|
|tokens|[[Token](#schematoken)]|true|none|none|
|top_tokens|[[[Token](#schematoken)]]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|finish_reason|length|
|finish_reason|eos_token|
|finish_reason|stop_sequence|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": "string",
  "error_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|error_type|string|true|none|none|

<h2 id="tocS_FinishReason">FinishReason</h2>
<!-- backwards compatibility -->
<a id="schemafinishreason"></a>
<a id="schema_FinishReason"></a>
<a id="tocSfinishreason"></a>
<a id="tocsfinishreason"></a>

```json
"Length"
```

<h2 id="tocS_Function">Function</h2>
<!-- backwards compatibility -->
<a id="schemafunction"></a>
<a id="schema_Function"></a>
<a id="tocSfunction"></a>
<a id="tocsfunction"></a>

```json
{
  "arguments": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arguments|string|true|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_FunctionDefinition">FunctionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemafunctiondefinition"></a>
<a id="schema_FunctionDefinition"></a>
<a id="tocSfunctiondefinition"></a>
<a id="tocsfunctiondefinition"></a>

```json
{
  "arguments": null,
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arguments|object|true|none|none|
|description|string \| null|false|none|none|
|name|string|true|none|none|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_GenerateParameters">GenerateParameters</h2>
<!-- backwards compatibility -->
<a id="schemagenerateparameters"></a>
<a id="schema_GenerateParameters"></a>
<a id="tocSgenerateparameters"></a>
<a id="tocsgenerateparameters"></a>

```json
{
  "adapter_id": "null",
  "best_of": 1,
  "decoder_input_details": "false",
  "details": "true",
  "do_sample": true,
  "frequency_penalty": 0.1,
  "grammar": "null",
  "max_new_tokens": "20",
  "repetition_penalty": 1.03,
  "return_full_text": false,
  "seed": "null",
  "stop": [
    "photographer"
  ],
  "temperature": 0.5,
  "top_k": 10,
  "top_n_tokens": 5,
  "top_p": 0.95,
  "truncate": "null",
  "typical_p": 0.95,
  "watermark": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adapter_id|string \| null|false|none|Lora adapter id|
|best_of|integer \| null|false|none|Generate best_of sequences and return the one if the highest token logprobs.|
|decoder_input_details|boolean|false|none|Whether to return decoder input token logprobs and ids.|
|details|boolean|false|none|Whether to return generation details.|
|do_sample|boolean|false|none|Activate logits sampling.|
|frequency_penalty|number(float) \| null|false|none|The parameter for frequency penalty. 1.0 means no penalty<br>Penalize new tokens based on their existing frequency in the text so far,<br>decreasing the model's likelihood to repeat the same line verbatim.|
|grammar|object \| null|false|none|none|
|max_new_tokens|integer(int32) \| null|false|none|Maximum number of tokens to generate.|
|repetition_penalty|number(float) \| null|false|none|The parameter for repetition penalty. 1.0 means no penalty.<br>See [this paper](https://arxiv.org/pdf/1909.05858.pdf) for more details.|
|return_full_text|boolean \| null|false|none|Whether to prepend the prompt to the generated text|
|seed|integer(int64) \| null|false|none|Random sampling seed.|
|stop|[string]|false|none|Stop generating tokens if a member of `stop` is generated.|
|temperature|number(float) \| null|false|none|The value used to module the logits distribution.|
|top_k|integer(int32) \| null|false|none|The number of highest probability vocabulary tokens to keep for top-k-filtering.|
|top_n_tokens|integer(int32) \| null|false|none|The number of highest probability vocabulary tokens to keep for top-n-filtering.|
|top_p|number(float) \| null|false|none|Top-p value for nucleus sampling.|
|truncate|integer \| null|false|none|Truncate inputs tokens to the given size.|
|typical_p|number(float) \| null|false|none|Typical Decoding mass<br>See [Typical Decoding for Natural Language Generation](https://arxiv.org/abs/2202.00666) for more information.|
|watermark|boolean|false|none|Watermarking with [A Watermark for Large Language Models](https://arxiv.org/abs/2301.10226).|

<h2 id="tocS_GenerateRequest">GenerateRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneraterequest"></a>
<a id="schema_GenerateRequest"></a>
<a id="tocSgeneraterequest"></a>
<a id="tocsgeneraterequest"></a>

```json
{
  "inputs": "My name is Olivier and I",
  "parameters": {
    "adapter_id": "null",
    "best_of": 1,
    "decoder_input_details": "false",
    "details": "true",
    "do_sample": true,
    "frequency_penalty": 0.1,
    "grammar": "null",
    "max_new_tokens": "20",
    "repetition_penalty": 1.03,
    "return_full_text": false,
    "seed": "null",
    "stop": [
      "photographer"
    ],
    "temperature": 0.5,
    "top_k": 10,
    "top_n_tokens": 5,
    "top_p": 0.95,
    "truncate": "null",
    "typical_p": 0.95,
    "watermark": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|string|true|none|none|
|parameters|[GenerateParameters](#schemagenerateparameters)|false|none|none|

<h2 id="tocS_GenerateResponse">GenerateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateresponse"></a>
<a id="schema_GenerateResponse"></a>
<a id="tocSgenerateresponse"></a>
<a id="tocsgenerateresponse"></a>

```json
{
  "details": {
    "best_of_sequences": [
      {
        "finish_reason": "Length",
        "generated_text": "test",
        "generated_tokens": 1,
        "prefill": [
          {
            "id": 0,
            "logprob": -0.34,
            "text": "test"
          }
        ],
        "seed": 42,
        "tokens": [
          {
            "id": 0,
            "logprob": -0.34,
            "special": "false",
            "text": "test"
          }
        ],
        "top_tokens": [
          [
            {
              "id": 0,
              "logprob": -0.34,
              "special": "false",
              "text": "test"
            }
          ]
        ]
      }
    ],
    "finish_reason": "Length",
    "generated_tokens": 1,
    "prefill": [
      {
        "id": 0,
        "logprob": -0.34,
        "text": "test"
      }
    ],
    "seed": 42,
    "tokens": [
      {
        "id": 0,
        "logprob": -0.34,
        "special": "false",
        "text": "test"
      }
    ],
    "top_tokens": [
      [
        {
          "id": 0,
          "logprob": -0.34,
          "special": "false",
          "text": "test"
        }
      ]
    ]
  },
  "generated_text": "test"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object \| null|false|none|none|
|generated_text|string|true|none|none|

<h2 id="tocS_GrammarType">GrammarType</h2>
<!-- backwards compatibility -->
<a id="schemagrammartype"></a>
<a id="schema_GrammarType"></a>
<a id="tocSgrammartype"></a>
<a id="tocsgrammartype"></a>

```json
{
  "type": "json",
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|value|object|true|none|A string that represents a [JSON Schema](https://json-schema.org/).<br><br>JSON Schema is a declarative language that allows to annotate JSON documents<br>with types and descriptions.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|value|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|value|[JsonSchemaConfig](#schemajsonschemaconfig)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|json|
|type|regex|
|type|json_schema|

<h2 id="tocS_Info">Info</h2>
<!-- backwards compatibility -->
<a id="schemainfo"></a>
<a id="schema_Info"></a>
<a id="tocSinfo"></a>
<a id="tocsinfo"></a>

```json
{
  "docker_label": "null",
  "max_best_of": "2",
  "max_client_batch_size": "32",
  "max_concurrent_requests": "128",
  "max_input_tokens": "1024",
  "max_stop_sequences": "4",
  "max_total_tokens": "2048",
  "model_id": "bigscience/blomm-560m",
  "model_pipeline_tag": "text-generation",
  "model_sha": "e985a63cdc139290c5f700ff1929f0b5942cced2",
  "router": "text-generation-router",
  "sha": "null",
  "validation_workers": "2",
  "version": "0.5.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|docker_label|string \| null|false|none|none|
|max_best_of|integer|true|none|none|
|max_client_batch_size|integer|true|none|none|
|max_concurrent_requests|integer|true|none|Router Parameters|
|max_input_tokens|integer|true|none|none|
|max_stop_sequences|integer|true|none|none|
|max_total_tokens|integer|true|none|none|
|model_id|string|true|none|Model info|
|model_pipeline_tag|string \| null|false|none|none|
|model_sha|string \| null|false|none|none|
|router|string|true|none|Router Info|
|sha|string \| null|false|none|none|
|validation_workers|integer|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_JsonSchemaConfig">JsonSchemaConfig</h2>
<!-- backwards compatibility -->
<a id="schemajsonschemaconfig"></a>
<a id="schema_JsonSchemaConfig"></a>
<a id="tocSjsonschemaconfig"></a>
<a id="tocsjsonschemaconfig"></a>

```json
{
  "name": "string",
  "schema": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Optional name identifier for the schema|
|schema|object|true|none|The actual JSON schema definition|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "content": "string",
  "name": "\"David\"",
  "role": "user"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|content|[MessageContent](#schemamessagecontent)|true|none|none|
|*oneOf*|object|false|none|none|
|tool_calls|[[ToolCall](#schematoolcall)]|true|none|none|
|name|string \| null|false|none|none|
|role|string|true|none|none|

<h2 id="tocS_MessageBody">MessageBody</h2>
<!-- backwards compatibility -->
<a id="schemamessagebody"></a>
<a id="schema_MessageBody"></a>
<a id="tocSmessagebody"></a>
<a id="tocsmessagebody"></a>

```json
{
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|content|[MessageContent](#schemamessagecontent)|true|none|none|
|*oneOf*|object|false|none|none|
|tool_calls|[[ToolCall](#schematoolcall)]|true|none|none|

<h2 id="tocS_MessageChunk">MessageChunk</h2>
<!-- backwards compatibility -->
<a id="schemamessagechunk"></a>
<a id="schema_MessageChunk"></a>
<a id="tocSmessagechunk"></a>
<a id="tocsmessagechunk"></a>

```json
{
  "text": "string",
  "type": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|text|string|true|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|image_url|[Url](#schemaurl)|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|image_url|

<h2 id="tocS_MessageContent">MessageContent</h2>
<!-- backwards compatibility -->
<a id="schemamessagecontent"></a>
<a id="schema_MessageContent"></a>
<a id="tocSmessagecontent"></a>
<a id="tocsmessagecontent"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[[MessageChunk](#schemamessagechunk)]|false|none|none|

<h2 id="tocS_ModelInfo">ModelInfo</h2>
<!-- backwards compatibility -->
<a id="schemamodelinfo"></a>
<a id="schema_ModelInfo"></a>
<a id="tocSmodelinfo"></a>
<a id="tocsmodelinfo"></a>

```json
{
  "created": 1686935002,
  "id": "gpt2",
  "object": "model",
  "owned_by": "openai"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|integer(int64)|true|none|none|
|id|string|true|none|none|
|object|string|true|none|none|
|owned_by|string|true|none|none|

<h2 id="tocS_OutputMessage">OutputMessage</h2>
<!-- backwards compatibility -->
<a id="schemaoutputmessage"></a>
<a id="schema_OutputMessage"></a>
<a id="tocSoutputmessage"></a>
<a id="tocsoutputmessage"></a>

```json
{
  "content": "My name is David and I",
  "role": "user",
  "tool_call_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[TextMessage](#schematextmessage)|false|none|none|
|*oneOf*|[ToolCallMessage](#schematoolcallmessage)|false|none|none|

<h2 id="tocS_PrefillToken">PrefillToken</h2>
<!-- backwards compatibility -->
<a id="schemaprefilltoken"></a>
<a id="schema_PrefillToken"></a>
<a id="tocSprefilltoken"></a>
<a id="tocsprefilltoken"></a>

```json
{
  "id": 0,
  "logprob": -0.34,
  "text": "test"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|logprob|number(float) \| null|true|none|none|
|text|string|true|none|none|

<h2 id="tocS_Prompt">Prompt</h2>
<!-- backwards compatibility -->
<a id="schemaprompt"></a>
<a id="schema_Prompt"></a>
<a id="tocSprompt"></a>
<a id="tocsprompt"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SagemakerRequest">SagemakerRequest</h2>
<!-- backwards compatibility -->
<a id="schemasagemakerrequest"></a>
<a id="schema_SagemakerRequest"></a>
<a id="tocSsagemakerrequest"></a>
<a id="tocssagemakerrequest"></a>

```json
{
  "inputs": "My name is Olivier and I",
  "parameters": {
    "adapter_id": "null",
    "best_of": 1,
    "decoder_input_details": "false",
    "details": "true",
    "do_sample": true,
    "frequency_penalty": 0.1,
    "grammar": "null",
    "max_new_tokens": "20",
    "repetition_penalty": 1.03,
    "return_full_text": false,
    "seed": "null",
    "stop": [
      "photographer"
    ],
    "temperature": 0.5,
    "top_k": 10,
    "top_n_tokens": 5,
    "top_p": 0.95,
    "truncate": "null",
    "typical_p": 0.95,
    "watermark": true
  },
  "stream": "false"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CompatGenerateRequest](#schemacompatgeneraterequest)|false|none|none|
|*oneOf*|[ChatRequest](#schemachatrequest)|false|none|none|
|*oneOf*|[CompletionRequest](#schemacompletionrequest)|false|none|none|

<h2 id="tocS_SagemakerResponse">SagemakerResponse</h2>
<!-- backwards compatibility -->
<a id="schemasagemakerresponse"></a>
<a id="schema_SagemakerResponse"></a>
<a id="tocSsagemakerresponse"></a>
<a id="tocssagemakerresponse"></a>

```json
{
  "details": {
    "best_of_sequences": [
      {
        "finish_reason": "Length",
        "generated_text": "test",
        "generated_tokens": 1,
        "prefill": [
          {
            "id": 0,
            "logprob": -0.34,
            "text": "test"
          }
        ],
        "seed": 42,
        "tokens": [
          {
            "id": 0,
            "logprob": -0.34,
            "special": "false",
            "text": "test"
          }
        ],
        "top_tokens": [
          [
            {
              "id": 0,
              "logprob": -0.34,
              "special": "false",
              "text": "test"
            }
          ]
        ]
      }
    ],
    "finish_reason": "Length",
    "generated_tokens": 1,
    "prefill": [
      {
        "id": 0,
        "logprob": -0.34,
        "text": "test"
      }
    ],
    "seed": 42,
    "tokens": [
      {
        "id": 0,
        "logprob": -0.34,
        "special": "false",
        "text": "test"
      }
    ],
    "top_tokens": [
      [
        {
          "id": 0,
          "logprob": -0.34,
          "special": "false",
          "text": "test"
        }
      ]
    ]
  },
  "generated_text": "test"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[GenerateResponse](#schemagenerateresponse)|false|none|none|
|*oneOf*|[ChatCompletion](#schemachatcompletion)|false|none|none|
|*oneOf*|[CompletionFinal](#schemacompletionfinal)|false|none|none|

<h2 id="tocS_SagemakerStreamResponse">SagemakerStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemasagemakerstreamresponse"></a>
<a id="schema_SagemakerStreamResponse"></a>
<a id="tocSsagemakerstreamresponse"></a>
<a id="tocssagemakerstreamresponse"></a>

```json
{
  "details": "null",
  "generated_text": "test",
  "index": 0,
  "token": {
    "id": 0,
    "logprob": -0.34,
    "special": "false",
    "text": "test"
  },
  "top_tokens": [
    {
      "id": 0,
      "logprob": -0.34,
      "special": "false",
      "text": "test"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[StreamResponse](#schemastreamresponse)|false|none|none|
|*oneOf*|[ChatCompletionChunk](#schemachatcompletionchunk)|false|none|none|
|*oneOf*|[Chunk](#schemachunk)|false|none|none|

<h2 id="tocS_SimpleToken">SimpleToken</h2>
<!-- backwards compatibility -->
<a id="schemasimpletoken"></a>
<a id="schema_SimpleToken"></a>
<a id="tocSsimpletoken"></a>
<a id="tocssimpletoken"></a>

```json
{
  "id": 0,
  "start": 0,
  "stop": 2,
  "text": "test"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|start|integer|true|none|none|
|stop|integer|true|none|none|
|text|string|true|none|none|

<h2 id="tocS_StreamDetails">StreamDetails</h2>
<!-- backwards compatibility -->
<a id="schemastreamdetails"></a>
<a id="schema_StreamDetails"></a>
<a id="tocSstreamdetails"></a>
<a id="tocsstreamdetails"></a>

```json
{
  "finish_reason": "Length",
  "generated_tokens": 1,
  "input_length": 1,
  "seed": 42
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finish_reason|[FinishReason](#schemafinishreason)|true|none|none|
|generated_tokens|integer(int32)|true|none|none|
|input_length|integer(int32)|true|none|none|
|seed|integer(int64) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|finish_reason|length|
|finish_reason|eos_token|
|finish_reason|stop_sequence|

<h2 id="tocS_StreamOptions">StreamOptions</h2>
<!-- backwards compatibility -->
<a id="schemastreamoptions"></a>
<a id="schema_StreamOptions"></a>
<a id="tocSstreamoptions"></a>
<a id="tocsstreamoptions"></a>

```json
{
  "include_usage": "true"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|include_usage|boolean|false|none|If set, an additional chunk will be streamed before the data: [DONE] message. The usage field on this chunk shows the token usage statistics for the entire request, and the choices field will always be an empty array. All other chunks will also include a usage field, but with a null value.|

<h2 id="tocS_StreamResponse">StreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemastreamresponse"></a>
<a id="schema_StreamResponse"></a>
<a id="tocSstreamresponse"></a>
<a id="tocsstreamresponse"></a>

```json
{
  "details": "null",
  "generated_text": "test",
  "index": 0,
  "token": {
    "id": 0,
    "logprob": -0.34,
    "special": "false",
    "text": "test"
  },
  "top_tokens": [
    {
      "id": 0,
      "logprob": -0.34,
      "special": "false",
      "text": "test"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object \| null|false|none|none|
|generated_text|string \| null|false|none|none|
|index|integer(int32)|true|none|none|
|token|[Token](#schematoken)|true|none|none|
|top_tokens|[[Token](#schematoken)]|false|none|none|

<h2 id="tocS_TextMessage">TextMessage</h2>
<!-- backwards compatibility -->
<a id="schematextmessage"></a>
<a id="schema_TextMessage"></a>
<a id="tocStextmessage"></a>
<a id="tocstextmessage"></a>

```json
{
  "content": "My name is David and I",
  "role": "user",
  "tool_call_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|none|
|role|string|true|none|none|
|tool_call_id|string \| null|false|none|none|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "id": 0,
  "logprob": -0.34,
  "special": "false",
  "text": "test"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|logprob|number(float) \| null|true|none|none|
|special|boolean|true|none|none|
|text|string|true|none|none|

<h2 id="tocS_TokenizeResponse">TokenizeResponse</h2>
<!-- backwards compatibility -->
<a id="schematokenizeresponse"></a>
<a id="schema_TokenizeResponse"></a>
<a id="tocStokenizeresponse"></a>
<a id="tocstokenizeresponse"></a>

```json
[
  {
    "id": 0,
    "start": 0,
    "stop": 2,
    "text": "test"
  }
]
```

<h2 id="tocS_Tool">Tool</h2>
<!-- backwards compatibility -->
<a id="schematool"></a>
<a id="schema_Tool"></a>
<a id="tocStool"></a>
<a id="tocstool"></a>

```json
{
  "function": {
    "arguments": null,
    "description": "string",
    "name": "string"
  },
  "type": "function"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|function|[FunctionDefinition](#schemafunctiondefinition)|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_ToolCall">ToolCall</h2>
<!-- backwards compatibility -->
<a id="schematoolcall"></a>
<a id="schema_ToolCall"></a>
<a id="tocStoolcall"></a>
<a id="tocstoolcall"></a>

```json
{
  "function": {
    "arguments": null,
    "description": "string",
    "name": "string"
  },
  "id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|function|[FunctionDefinition](#schemafunctiondefinition)|true|none|none|
|id|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_ToolCallDelta">ToolCallDelta</h2>
<!-- backwards compatibility -->
<a id="schematoolcalldelta"></a>
<a id="schema_ToolCallDelta"></a>
<a id="tocStoolcalldelta"></a>
<a id="tocstoolcalldelta"></a>

```json
{
  "role": "assistant",
  "tool_calls": [
    {
      "function": {
        "arguments": "string",
        "name": "string"
      },
      "id": "string",
      "index": 0,
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|none|
|tool_calls|[[DeltaToolCall](#schemadeltatoolcall)]|true|none|none|

<h2 id="tocS_ToolCallMessage">ToolCallMessage</h2>
<!-- backwards compatibility -->
<a id="schematoolcallmessage"></a>
<a id="schema_ToolCallMessage"></a>
<a id="tocStoolcallmessage"></a>
<a id="tocstoolcallmessage"></a>

```json
{
  "role": "assistant",
  "tool_calls": [
    {
      "function": {
        "arguments": null,
        "description": "string",
        "name": "string"
      },
      "id": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|none|
|tool_calls|[[ToolCall](#schematoolcall)]|true|none|none|

<h2 id="tocS_ToolChoice">ToolChoice</h2>
<!-- backwards compatibility -->
<a id="schematoolchoice"></a>
<a id="schema_ToolChoice"></a>
<a id="tocStoolchoice"></a>
<a id="tocstoolchoice"></a>

```json
"auto"
```

<https://platform.openai.com/docs/guides/function-calling/configuring-function-calling-behavior-using-the-tool_choice-parameter>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Means the model can pick between generating a message or calling one or more tools.|
|*oneOf*|string|false|none|Means the model will not call any tool and instead generates a message.|
|*oneOf*|string|false|none|Means the model must call one or more tools.|
|*oneOf*|object|false|none|none|
|function|[FunctionName](#schemafunctionname)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|auto|
|*oneOf*|none|
|*oneOf*|required|

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
{
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|

<h2 id="tocS_Usage">Usage</h2>
<!-- backwards compatibility -->
<a id="schemausage"></a>
<a id="schema_Usage"></a>
<a id="tocSusage"></a>
<a id="tocsusage"></a>

```json
{
  "completion_tokens": 0,
  "prompt_tokens": 0,
  "total_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion_tokens|integer(int32)|true|none|none|
|prompt_tokens|integer(int32)|true|none|none|
|total_tokens|integer(int32)|true|none|none|
