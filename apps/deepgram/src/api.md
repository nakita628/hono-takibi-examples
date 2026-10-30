<h1 id="rest-api">REST API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://agent.deepgram.com">https://agent.deepgram.com</a> - Production

* <a href="https://api.deepgram.com">https://api.deepgram.com</a> - Base

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **Authorization**, in: header. Use `Authorization: Token <API_KEY>`
Example: `Authorization: Token 12345abcdef`

- HTTP Authentication, scheme: bearer Use `Authorization: Bearer <JWT>`
Example: `Authorization: Bearer eyJhbGciOiJ...`

<h1 id="rest-api-models">models</h1>

## List Agent Think Models

<a id="opIdmodels_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/agent/settings/think/models \
  -H 'Accept: application/json'
```

`GET /v1/agent/settings/think/models`

Retrieves the available think models that can be used for AI agent processing

> Example responses

> 200 Response

```json
{
  "models": [
    {
      "id": "gpt-5",
      "name": "string",
      "provider": null
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-agent-think-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of available think models|[AgentThinkModelsV1Response](#schemaagentthinkmodelsv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List Project Models

<a id="opIdmodels_list_2"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/models \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/models`

Returns metadata on all the latest models that a specific project has access to, including non-public models

<h3 id="list-project-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|include_outdated|query|boolean|false|returns non-latest versions of models|

> Example responses

> 200 Response

```json
{
  "stt": [
    {
      "name": "string",
      "canonical_name": "string",
      "architecture": "string",
      "languages": [
        "string"
      ],
      "version": "string",
      "uuid": "string",
      "batch": true,
      "streaming": true,
      "formatted_output": true
    }
  ],
  "tts": [
    {
      "name": "string",
      "canonical_name": "string",
      "architecture": "string",
      "languages": [
        "string"
      ],
      "version": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "metadata": {
        "accent": "string",
        "age": "string",
        "color": "string",
        "image": "http://example.com",
        "sample": "http://example.com",
        "tags": [
          "string"
        ],
        "use_cases": [
          "string"
        ]
      }
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-project-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of models|[ListModelsV1Response](#schemalistmodelsv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get a Project Model

<a id="opIdmodels_get"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/models/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/models/{model_id}`

Returns metadata for a specific model

<h3 id="get-a-project-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|model_id|path|string|true|The specific UUID of the model|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "canonical_name": "string",
  "architecture": "string",
  "languages": [
    "string"
  ],
  "version": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "batch": true,
  "streaming": true,
  "formatted_output": true
}
```

> 400 Response

```json
"string"
```

<h3 id="get-a-project-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A model object that can be either STT or TTS|[GetModelV1Response](#schemagetmodelv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List Models

<a id="opIdmodels_list_3"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/models \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/models`

Returns metadata on all the latest public models. To retrieve custom models, use Get Project Models.

<h3 id="list-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_outdated|query|boolean|false|returns non-latest versions of models|

> Example responses

> 200 Response

```json
{
  "stt": [
    {
      "name": "string",
      "canonical_name": "string",
      "architecture": "string",
      "languages": [
        "string"
      ],
      "version": "string",
      "uuid": "string",
      "batch": true,
      "streaming": true,
      "formatted_output": true
    }
  ],
  "tts": [
    {
      "name": "string",
      "canonical_name": "string",
      "architecture": "string",
      "languages": [
        "string"
      ],
      "version": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "metadata": {
        "accent": "string",
        "age": "string",
        "color": "string",
        "image": "http://example.com",
        "sample": "http://example.com",
        "tags": [
          "string"
        ],
        "use_cases": [
          "string"
        ]
      }
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of models|[ListModelsV1Response](#schemalistmodelsv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get a specific Model

<a id="opIdmodels_get_2"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/models/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/models/{model_id}`

Returns metadata for a specific public model

<h3 id="get-a-specific-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model_id|path|string|true|The specific UUID of the model|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "canonical_name": "string",
  "architecture": "string",
  "languages": [
    "string"
  ],
  "version": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "batch": true,
  "streaming": true,
  "formatted_output": true
}
```

> 400 Response

```json
"string"
```

<h3 id="get-a-specific-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A model object that can be either STT or TTS|[GetModelV1Response](#schemagetmodelv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-configurations">configurations</h1>

## List Agent Configurations

<a id="opIdconfigurations_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/agents \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/agents`

Returns all agent configurations for the specified project. Configurations are returned in their uninterpolated form—template variable placeholders appear as-is rather than with their substituted values.

<h3 id="list-agent-configurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|

> Example responses

> 200 Response

```json
{
  "agents": [
    {
      "agent_id": "string",
      "config": {},
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-agent-configurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of agent configurations|[ListAgentConfigurationsV1Response](#schemalistagentconfigurationsv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create an Agent Configuration

<a id="opIdconfigurations_create"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/agents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "config": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "api_version": 1
  }'
```

`POST /v1/projects/{project_id}/agents`

Creates a new reusable agent configuration. The `config` field must be a valid JSON string representing the `agent` block of a Settings message. The returned `agent_id` can be passed in place of the full `agent` object in future Settings messages.

> Body parameter

```json
{
  "config": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "api_version": 1
}
```

<h3 id="create-an-agent-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|body|body|[CreateAgentConfigurationV1Request](#schemacreateagentconfigurationv1request)|false|Agent configuration details|
|» config|body|string|true|A valid JSON string representing the agent block of a Settings message|
|» metadata|body|object|false|A map of arbitrary key-value pairs for labeling or organizing the agent configuration|
|» » **additionalProperties**|body|string|false|none|
|» api_version|body|integer|false|API version. Defaults to 1|

> Example responses

> 200 Response

```json
{
  "agent_id": "string",
  "config": {},
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 400 Response

```json
"string"
```

<h3 id="create-an-agent-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent configuration created successfully|[CreateAgentConfigurationV1Response](#schemacreateagentconfigurationv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get an Agent Configuration

<a id="opIdconfigurations_get"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/agents/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/agents/{agent_id}`

Returns the specified agent configuration in its uninterpolated form

<h3 id="get-an-agent-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|agent_id|path|string|true|The unique identifier of the agent configuration|

> Example responses

> 200 Response

```json
{
  "agent_id": "string",
  "config": {},
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
"string"
```

<h3 id="get-an-agent-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An agent configuration|[AgentConfigurationV1](#schemaagentconfigurationv1)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update Agent Metadata

<a id="opIdconfigurations_update"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/agents/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /v1/projects/{project_id}/agents/{agent_id}`

Updates the metadata associated with an agent configuration. The config itself is immutable—to change the configuration, delete the existing agent and create a new one.

> Body parameter

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="update-agent-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|agent_id|path|string|true|The unique identifier of the agent configuration|
|body|body|[UpdateAgentMetadataV1Request](#schemaupdateagentmetadatav1request)|false|Updated metadata for the agent configuration|
|» metadata|body|object|true|A map of string key-value pairs to associate with this agent configuration|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "agent_id": "string",
  "config": {},
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
"string"
```

<h3 id="update-agent-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent configuration updated|[AgentConfigurationV1](#schemaagentconfigurationv1)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete an Agent Configuration

<a id="opIdconfigurations_delete"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/agents/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/projects/{project_id}/agents/{agent_id}`

Deletes the specified agent configuration. Deleting an agent configuration can cause a production outage if your service references this agent UUID. Migrate all active sessions to a new configuration before deleting.

<h3 id="delete-an-agent-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|agent_id|path|string|true|The unique identifier of the agent configuration|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
"string"
```

<h3 id="delete-an-agent-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent configuration deleted|[DeleteAgentConfigurationV1Response](#schemadeleteagentconfigurationv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-variables">variables</h1>

## List Agent Variables

<a id="opIdvariables_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/agent-variables \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/agent-variables`

Returns all template variables for the specified project

<h3 id="list-agent-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|

> Example responses

> 200 Response

```json
{
  "variables": [
    {
      "variable_id": "string",
      "key": "string",
      "value": null,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-agent-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of agent variables|[ListAgentVariablesV1Response](#schemalistagentvariablesv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create an Agent Variable

<a id="opIdvariables_create"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/agent-variables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "key": "string",
    "value": null,
    "api_version": 1
  }'
```

`POST /v1/projects/{project_id}/agent-variables`

Creates a new template variable. Variables follow the `DG_<VARIABLE_NAME>` naming format and can substitute any JSON value in an agent configuration.

> Body parameter

```json
{
  "key": "string",
  "value": null,
  "api_version": 1
}
```

<h3 id="create-an-agent-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|body|body|[CreateAgentVariableV1Request](#schemacreateagentvariablev1request)|false|Agent variable details|
|» key|body|string|true|The variable name, following the DG_<VARIABLE_NAME> format|
|» value|body|object|true|The value to substitute. Can be any valid JSON type (string, number, boolean, object, or array)|
|» api_version|body|integer|false|API version. Defaults to 1|

> Example responses

> 200 Response

```json
{
  "variable_id": "string",
  "key": "string",
  "value": null,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
"string"
```

<h3 id="create-an-agent-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent variable created successfully|[AgentVariableV1](#schemaagentvariablev1)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get an Agent Variable

<a id="opIdvariables_get"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/agent-variables/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/agent-variables/{variable_id}`

Returns the specified template variable

<h3 id="get-an-agent-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|variable_id|path|string|true|The unique identifier of the agent variable|

> Example responses

> 200 Response

```json
{
  "variable_id": "string",
  "key": "string",
  "value": null,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
"string"
```

<h3 id="get-an-agent-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An agent variable|[AgentVariableV1](#schemaagentvariablev1)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete an Agent Variable

<a id="opIdvariables_delete"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/agent-variables/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/projects/{project_id}/agent-variables/{variable_id}`

Deletes the specified template variable

<h3 id="delete-an-agent-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|variable_id|path|string|true|The unique identifier of the agent variable|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
"string"
```

<h3 id="delete-an-agent-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent variable deleted|[DeleteAgentVariableV1Response](#schemadeleteagentvariablev1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update an Agent Variable

<a id="opIdvariables_update"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/agent-variables/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "value": null
  }'
```

`PATCH /v1/projects/{project_id}/agent-variables/{variable_id}`

Updates the value of an existing template variable

> Body parameter

```json
{
  "value": null
}
```

<h3 id="update-an-agent-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|variable_id|path|string|true|The unique identifier of the agent variable|
|body|body|[UpdateAgentVariableV1Request](#schemaupdateagentvariablev1request)|false|Updated value for the agent variable|
|» value|body|object|true|The new value to substitute|

> Example responses

> 200 Response

```json
{
  "variable_id": "string",
  "key": "string",
  "value": null,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
"string"
```

<h3 id="update-an-agent-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Agent variable updated|[AgentVariableV1](#schemaagentvariablev1)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-media">media</h1>

## Transcribe and analyze pre-recorded audio and video

<a id="opIdmedia_transcribe"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/listen \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "url": "http://example.com"
  }'
```

`POST /v1/listen`

Transcribe audio and video using Deepgram's speech-to-text REST API

> Body parameter

```json
{
  "url": "http://example.com"
}
```

<h3 id="transcribe-and-analyze-pre-recorded-audio-and-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|callback|query|string|false|URL to which we'll make the callback request|
|callback_method|query|[V1ListenPostParametersCallbackMethod](#schemav1listenpostparameterscallbackmethod)|false|HTTP method by which the callback request will be made|
|extra|query|[V1ListenPostParametersExtra](#schemav1listenpostparametersextra)|false|Arbitrary key-value pairs that are attached to the API response for usage in downstream processing|
|sentiment|query|boolean|false|Recognizes the sentiment throughout a transcript or text|
|summarize|query|[V1ListenPostParametersSummarize](#schemav1listenpostparameterssummarize)|false|Summarize content. For Listen API, supports string version option. For Read API, accepts boolean only.|
|tag|query|[V1ListenPostParametersTag](#schemav1listenpostparameterstag)|false|Label your requests for the purpose of identification during usage reporting|
|topics|query|boolean|false|Detect topics throughout a transcript or text|
|custom_topic|query|[V1ListenPostParametersCustomTopic](#schemav1listenpostparameterscustomtopic)|false|Custom topics you want the model to detect within your input audio or text if present Submit up to `100`.|
|custom_topic_mode|query|[V1ListenPostParametersCustomTopicMode](#schemav1listenpostparameterscustomtopicmode)|false|Sets how the model will interpret strings submitted to the `custom_topic` param. When `strict`, the model will only return topics submitted using the `custom_topic` param. When `extended`, the model will return its own detected topics in addition to those submitted using the `custom_topic` param|
|intents|query|boolean|false|Recognizes speaker intent throughout a transcript or text|
|custom_intent|query|[V1ListenPostParametersCustomIntent](#schemav1listenpostparameterscustomintent)|false|Custom intents you want the model to detect within your input audio if present|
|custom_intent_mode|query|[V1ListenPostParametersCustomIntentMode](#schemav1listenpostparameterscustomintentmode)|false|Sets how the model will interpret intents submitted to the `custom_intent` param. When `strict`, the model will only return intents submitted using the `custom_intent` param. When `extended`, the model will return its own detected intents in the `custom_intent` param.|
|detect_entities|query|boolean|false|Identifies and extracts key entities from content in submitted audio|
|detect_language|query|[V1ListenPostParametersDetectLanguage](#schemav1listenpostparametersdetectlanguage)|false|Identifies the dominant language spoken in submitted audio|
|diarize|query|boolean|false|**Deprecated.** Deprecated: use `diarize_model` instead. Recognize speaker changes. Each word in the transcript will be assigned a speaker number starting at 0.|
|diarize_model|query|[V1ListenPostParametersDiarizeModel](#schemav1listenpostparametersdiarizemodel)|false|Select and enable a specific diarization model version. Specifying this parameter enables diarization and selects the model — you do not need to also set the deprecated `diarize=true` parameter. For batch, supported values are `latest` (currently v2), `v1`, and `v2`. For streaming, supported values are `latest` (currently v1) and `v1`; `v2` returns a validation error on streaming requests.|
|dictation|query|boolean|false|Dictation mode for controlling formatting with dictated speech|
|encoding|query|[V1ListenPostParametersEncoding](#schemav1listenpostparametersencoding)|false|Specify the expected encoding of your submitted audio|
|filler_words|query|boolean|false|Filler Words can help transcribe interruptions in your audio, like "uh" and "um"|
|keyterm|query|[string]|false|Key term prompting improves recognition of specialized terminology and brands. Only compatible with Nova-3.<br><br>`keyterm` accepts plain terms only. Unlike the legacy `keywords` feature, it does not support weights or intensifiers. Appending one (for example, `keyterm=term:0.15`) is not rejected—the weight is silently ignored and the entire value is treated as a literal keyterm.<br><br>To boost multiple separate keyterms, repeat the `keyterm` parameter (for example, `keyterm=term1&keyterm=term2`). To boost one multi-word phrase as a single keyterm, join the words with `%20` or `+` (for example, `keyterm=customer%20service`). Do not separate keyterms with commas, semicolons, or line breaks.<br>|
|keywords|query|[V1ListenPostParametersKeywords](#schemav1listenpostparameterskeywords)|false|Keywords can boost or suppress specialized terminology and brands. `keywords` is not supported with Nova-3 models; use `keyterm` instead.|
|language|query|string|false|The [BCP-47 language tag](https://tools.ietf.org/html/bcp47) that hints at the primary spoken language. Depending on the Model and API endpoint you choose only certain languages are available|
|language_hint|query|[V1ListenPostParametersLanguageHint](#schemav1listenpostparameterslanguagehint)|false|Biases language detection toward one or more languages on Nova-3 multilingual (`model=nova-3&language=multi`); ignored with any other `language`. Repeat the parameter to pass several codes, for example `language_hint=en&language_hint=es`. A code that is not in the [Nova-3 multilingual list](/docs/models-languages-overview#nova-3) fails the request with HTTP 400. See [Nova-3 Language Prompting](/docs/nova-3-language-prompting).<br>|
|measurements|query|boolean|false|Spoken measurements will be converted to their corresponding abbreviations|
|model|query|[V1ListenPostParametersModel](#schemav1listenpostparametersmodel)|false|AI model used to process submitted audio|
|multichannel|query|boolean|false|Transcribe each audio channel independently|
|numerals|query|boolean|false|Numerals converts numbers from written format to numerical format|
|paragraphs|query|boolean|false|Splits audio into paragraphs to improve transcript readability|
|profanity_filter|query|boolean|false|Profanity Filter looks for recognized profanity and converts it to the nearest recognized non-profane word or removes it from the transcript completely|
|punctuate|query|boolean|false|Add punctuation and capitalization to the transcript|
|redact|query|[V1ListenPostParametersRedact](#schemav1listenpostparametersredact)|false|Redaction removes sensitive information from your transcripts|
|replace|query|[V1ListenPostParametersReplace](#schemav1listenpostparametersreplace)|false|Search for terms or phrases in submitted audio and replaces them|
|search|query|[V1ListenPostParametersSearch](#schemav1listenpostparameterssearch)|false|Search for terms or phrases in submitted audio|
|smart_format|query|boolean|false|Apply formatting to transcript output. When set to true, additional formatting will be applied to transcripts to improve readability|
|utterances|query|boolean|false|Segments speech into meaningful semantic units|
|utt_split|query|number(double)|false|Seconds to wait before detecting a pause between words in submitted audio|
|version|query|[V1ListenPostParametersVersion](#schemav1listenpostparametersversion)|false|Version of an AI model to use|
|mip_opt_out|query|boolean|false|Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip|
|body|body|[ListenV1RequestUrl](#schemalistenv1requesturl)|false|Transcribe an audio or video file|
|» url|body|string(uri)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|callback_method|POST|
|callback_method|PUT|
|custom_topic_mode|extended|
|custom_topic_mode|strict|
|custom_intent_mode|extended|
|custom_intent_mode|strict|
|diarize_model|latest|
|diarize_model|v1|
|diarize_model|v2|
|encoding|linear16|
|encoding|flac|
|encoding|mulaw|
|encoding|amr-nb|
|encoding|amr-wb|
|encoding|opus|
|encoding|speex|
|encoding|g729|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "transaction_key": "deprecated",
    "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sha256": "string",
    "created": "1970-01-01T00:00:00Z",
    "duration": 0,
    "channels": 0,
    "models": [
      "string"
    ],
    "model_info": {},
    "diarize_info": {
      "model_uuid": "string",
      "arch": "string"
    },
    "summary_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "sentiment_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "topics_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "intents_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "tags": [
      "string"
    ]
  },
  "results": {
    "channels": [
      {
        "search": [
          {
            "query": "string",
            "hits": [
              {
                "confidence": "string",
                "start": "string",
                "end": "string",
                "snippet": "string"
              }
            ]
          }
        ],
        "alternatives": [
          {
            "transcript": "string",
            "confidence": "string",
            "languages": [
              "string"
            ],
            "languages_hinted": [
              "string"
            ],
            "words": [
              {
                "word": "string",
                "start": "string",
                "end": "string",
                "confidence": "string",
                "language": "string",
                "speaker": 0,
                "speaker_confidence": "string"
              }
            ],
            "paragraphs": {
              "transcript": "string",
              "paragraphs": [
                {
                  "sentences": [
                    {
                      "text": "string",
                      "start": "string",
                      "end": "string"
                    }
                  ],
                  "speaker": 0,
                  "num_words": 0,
                  "start": "string",
                  "end": "string"
                }
              ]
            },
            "entities": [
              {
                "label": "string",
                "value": "string",
                "raw_value": "string",
                "confidence": "string",
                "start_word": "string",
                "end_word": "string"
              }
            ],
            "summaries": [
              {
                "summary": "string",
                "start_word": "string",
                "end_word": "string"
              }
            ],
            "topics": [
              {
                "text": "string",
                "start_word": "string",
                "end_word": "string",
                "topics": [
                  "string"
                ]
              }
            ]
          }
        ],
        "detected_language": "string"
      }
    ],
    "utterances": [
      {
        "start": "string",
        "end": "string",
        "confidence": "string",
        "channel": 0,
        "transcript": "string",
        "languages": [
          "string"
        ],
        "words": [
          {
            "word": "string",
            "start": "string",
            "end": "string",
            "confidence": "string",
            "language": "string",
            "speaker": 0,
            "speaker_confidence": "string",
            "punctuated_word": "string"
          }
        ],
        "speaker": 0,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "summary": {
      "result": "string",
      "short": "string"
    },
    "topics": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "topics": [
            {
              "topic": "string",
              "confidence_score": "string"
            }
          ]
        }
      ]
    },
    "intents": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "intents": [
            {
              "intent": "string",
              "confidence_score": "string"
            }
          ]
        }
      ]
    },
    "sentiments": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "sentiment": "string",
          "sentiment_score": 0
        }
      ],
      "average": {
        "sentiment": "string",
        "sentiment_score": 0
      }
    }
  }
}
```

> 400 Response

```json
{
  "metadata": {
    "transaction_key": "deprecated",
    "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sha256": "string",
    "created": "1970-01-01T00:00:00Z",
    "duration": 0,
    "channels": 0,
    "models": [
      "string"
    ],
    "model_info": {},
    "diarize_info": {
      "model_uuid": "string",
      "arch": "string"
    },
    "summary_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "sentiment_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "topics_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "intents_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "tags": [
      "string"
    ]
  },
  "results": {
    "channels": [
      {
        "search": [
          {
            "query": "string",
            "hits": [
              {
                "confidence": "string",
                "start": "string",
                "end": "string",
                "snippet": "string"
              }
            ]
          }
        ],
        "alternatives": [
          {
            "transcript": "string",
            "confidence": "string",
            "languages": [
              "string"
            ],
            "languages_hinted": [
              "string"
            ],
            "words": [
              {
                "word": "string",
                "start": "string",
                "end": "string",
                "confidence": "string",
                "language": "string",
                "speaker": 0,
                "speaker_confidence": "string"
              }
            ],
            "paragraphs": {
              "transcript": "string",
              "paragraphs": [
                {
                  "sentences": [
                    {
                      "text": "string",
                      "start": "string",
                      "end": "string"
                    }
                  ],
                  "speaker": 0,
                  "num_words": 0,
                  "start": "string",
                  "end": "string"
                }
              ]
            },
            "entities": [
              {
                "label": "string",
                "value": "string",
                "raw_value": "string",
                "confidence": "string",
                "start_word": "string",
                "end_word": "string"
              }
            ],
            "summaries": [
              {
                "summary": "string",
                "start_word": "string",
                "end_word": "string"
              }
            ],
            "topics": [
              {
                "text": "string",
                "start_word": "string",
                "end_word": "string",
                "topics": [
                  "string"
                ]
              }
            ]
          }
        ],
        "detected_language": "string"
      }
    ],
    "utterances": [
      {
        "start": "string",
        "end": "string",
        "confidence": "string",
        "channel": 0,
        "transcript": "string",
        "languages": [
          "string"
        ],
        "words": [
          {
            "word": "string",
            "start": "string",
            "end": "string",
            "confidence": "string",
            "language": "string",
            "speaker": 0,
            "speaker_confidence": "string",
            "punctuated_word": "string"
          }
        ],
        "speaker": 0,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "summary": {
      "result": "string",
      "short": "string"
    },
    "topics": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "topics": [
            {
              "topic": "string",
              "confidence_score": "string"
            }
          ]
        }
      ]
    },
    "intents": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "intents": [
            {
              "intent": "string",
              "confidence_score": "string"
            }
          ]
        }
      ]
    },
    "sentiments": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "sentiment": "string",
          "sentiment_score": 0
        }
      ],
      "average": {
        "sentiment": "string",
        "sentiment_score": 0
      }
    }
  }
}
```

<h3 id="transcribe-and-analyze-pre-recorded-audio-and-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns either transcription results, or a request_id when using a callback.|[listen_v1_media_transcribe_Response_200](#schemalisten_v1_media_transcribe_response_200)|
|400|Bad Request|Invalid Request|[ListenV1Response](#schemalistenv1response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-audio">audio</h1>

## Text to Speech transformation

<a id="opIdaudio_generate"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/speak \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "text": "string"
  }'
```

`POST /v1/speak`

Convert text into natural-sounding speech using Deepgram's TTS REST API

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="text-to-speech-transformation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|callback|query|string|false|URL to which we'll make the callback request|
|callback_method|query|[V1SpeakPostParametersCallbackMethod](#schemav1speakpostparameterscallbackmethod)|false|HTTP method by which the callback request will be made|
|mip_opt_out|query|boolean|false|Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip|
|tag|query|[V1SpeakPostParametersTag](#schemav1speakpostparameterstag)|false|Label your requests for the purpose of identification during usage reporting|
|bit_rate|query|[V1SpeakPostParametersBitRate](#schemav1speakpostparametersbitrate)|false|The bitrate of the audio in bits per second. Choose from predefined ranges or specific values based on the encoding type.|
|container|query|[V1SpeakPostParametersContainer](#schemav1speakpostparameterscontainer)|false|Container specifies the file format wrapper for the output audio. The available options depend on the encoding type.|
|encoding|query|[V1SpeakPostParametersEncoding](#schemav1speakpostparametersencoding)|false|Encoding allows you to specify the expected encoding of your audio output|
|model|query|[V1SpeakPostParametersModel](#schemav1speakpostparametersmodel)|false|AI model used to process submitted text|
|sample_rate|query|[V1SpeakPostParametersSampleRate](#schemav1speakpostparameterssamplerate)|false|Sample Rate specifies the sample rate for the output audio. Based on the encoding, different sample rates are supported. For some encodings, the sample rate is not configurable|
|speed|query|number(double)|false|Speaking rate multiplier that adjusts the pace of generated speech while preserving natural prosody and voice quality. Not yet supported in all languages.|
|body|body|[SpeakV1Request](#schemaspeakv1request)|false|Transform text to speech|
|» text|body|string|true|The text content to be converted to speech|

#### Enumerated Values

|Parameter|Value|
|---|---|
|callback_method|POST|
|callback_method|PUT|
|model|aura-angus-en|
|model|aura-arcas-en|
|model|aura-asteria-en|
|model|aura-athena-en|
|model|aura-helios-en|
|model|aura-hera-en|
|model|aura-luna-en|
|model|aura-orion-en|
|model|aura-orpheus-en|
|model|aura-perseus-en|
|model|aura-stella-en|
|model|aura-zeus-en|
|model|aura-2-amalthea-en|
|model|aura-2-andromeda-en|
|model|aura-2-apollo-en|
|model|aura-2-arcas-en|
|model|aura-2-aries-en|
|model|aura-2-asteria-en|
|model|aura-2-athena-en|
|model|aura-2-atlas-en|
|model|aura-2-aurora-en|
|model|aura-2-callista-en|
|model|aura-2-cora-en|
|model|aura-2-cordelia-en|
|model|aura-2-delia-en|
|model|aura-2-draco-en|
|model|aura-2-electra-en|
|model|aura-2-harmonia-en|
|model|aura-2-helena-en|
|model|aura-2-hera-en|
|model|aura-2-hermes-en|
|model|aura-2-hyperion-en|
|model|aura-2-iris-en|
|model|aura-2-janus-en|
|model|aura-2-juno-en|
|model|aura-2-jupiter-en|
|model|aura-2-luna-en|
|model|aura-2-mars-en|
|model|aura-2-minerva-en|
|model|aura-2-neptune-en|
|model|aura-2-odysseus-en|
|model|aura-2-ophelia-en|
|model|aura-2-orion-en|
|model|aura-2-orpheus-en|
|model|aura-2-pandora-en|
|model|aura-2-phoebe-en|
|model|aura-2-pluto-en|
|model|aura-2-saturn-en|
|model|aura-2-selene-en|
|model|aura-2-thalia-en|
|model|aura-2-theia-en|
|model|aura-2-vesta-en|
|model|aura-2-zeus-en|
|model|aura-2-agustina-es|
|model|aura-2-alvaro-es|
|model|aura-2-antonia-es|
|model|aura-2-aquila-es|
|model|aura-2-carina-es|
|model|aura-2-celeste-es|
|model|aura-2-diana-es|
|model|aura-2-estrella-es|
|model|aura-2-gloria-es|
|model|aura-2-javier-es|
|model|aura-2-luciano-es|
|model|aura-2-nestor-es|
|model|aura-2-olivia-es|
|model|aura-2-selena-es|
|model|aura-2-silvia-es|
|model|aura-2-sirio-es|
|model|aura-2-valerio-es|
|model|aura-2-aurelia-de|
|model|aura-2-elara-de|
|model|aura-2-fabian-de|
|model|aura-2-julius-de|
|model|aura-2-kara-de|
|model|aura-2-lara-de|
|model|aura-2-viktoria-de|
|model|aura-2-beatrix-nl|
|model|aura-2-cornelia-nl|
|model|aura-2-daphne-nl|
|model|aura-2-hestia-nl|
|model|aura-2-lars-nl|
|model|aura-2-leda-nl|
|model|aura-2-rhea-nl|
|model|aura-2-roman-nl|
|model|aura-2-sander-nl|
|model|aura-2-agathe-fr|
|model|aura-2-hector-fr|
|model|aura-2-cesare-it|
|model|aura-2-cinzia-it|
|model|aura-2-demetra-it|
|model|aura-2-dionisio-it|
|model|aura-2-elio-it|
|model|aura-2-flavio-it|
|model|aura-2-livia-it|
|model|aura-2-maia-it|
|model|aura-2-melia-it|
|model|aura-2-ama-ja|
|model|aura-2-ebisu-ja|
|model|aura-2-fujin-ja|
|model|aura-2-izanami-ja|
|model|aura-2-uzume-ja|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
"string"
```

<h3 id="text-to-speech-transformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful text-to-speech transformation|[speak_v1_audio_generate_Response_200](#schemaspeak_v1_audio_generate_response_200)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Flux Text to Speech (batch)

<a id="opIdaudio_generate_2"></a>

> Code samples

```bash
curl 'https://api.deepgram.com/v2/speak?model=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "text": "string"
  }'
```

`POST /v2/speak`

Synthesize a complete block of text into a single audio response using Deepgram's Flux TTS batch (REST) API. Use this for pre-rendering fixed audio (IVR prompts, notifications, narration) where the whole text is known up front and you don't need incremental playback or interruption.

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="flux-text-to-speech-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|callback|query|string|false|URL to which we'll make the callback request|
|callback_method|query|[V2SpeakPostParametersCallbackMethod](#schemav2speakpostparameterscallbackmethod)|false|HTTP method by which the callback request will be made|
|mip_opt_out|query|boolean|false|Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip|
|tag|query|[V2SpeakPostParametersTag](#schemav2speakpostparameterstag)|false|Label your requests for the purpose of identification during usage reporting|
|bit_rate|query|[V2SpeakPostParametersBitRate](#schemav2speakpostparametersbitrate)|false|The bitrate of the audio in bits per second. Choose from predefined ranges or specific values based on the encoding type.|
|container|query|[V2SpeakPostParametersContainer](#schemav2speakpostparameterscontainer)|false|Container specifies the file format wrapper for the output audio. The available options depend on the encoding type.|
|encoding|query|[V2SpeakPostParametersEncoding](#schemav2speakpostparametersencoding)|false|Encoding allows you to specify the expected encoding of your audio output|
|expressivity|query|[V2SpeakPostParametersExpressivity](#schemav2speakpostparametersexpressivity)|false|Expressive range of the generated speech, on a calm-to-animated axis. Accepted values: `-2`, `-1`, `0`, `1`, `2`. `0` (the default) is the voice's tuned delivery and the production-validated setting, with `-2` the calm end of the range and `2` the animated end. Supported on all Flux voices; applies to the whole request. Beta: behavior may change in future model versions, and non-default values increase the risk of hallucinations and pronunciation errors; audition before shipping. An invalid value is rejected with a `400` — `EXPRESSIVITY_OUT_OF_RANGE` for a value outside the range, `EXPRESSIVITY_INCREMENT_INVALID` for a fractional value. See [Expressivity](/docs/tts-expressivity).|
|model|query|string|true|Flux TTS model used to synthesize the submitted text, in the form `flux-{voice}-{language}` (for example, `flux-alexis-en`). Required; unlike the v1 (Aura) endpoint there is no default and only flux models are accepted.|
|sample_rate|query|[V2SpeakPostParametersSampleRate](#schemav2speakpostparameterssamplerate)|false|Sample Rate specifies the sample rate for the output audio. Based on the encoding, different sample rates are supported. For some encodings, the sample rate is not configurable|
|speed|query|number(double)|false|Speaking rate multiplier that adjusts the pace of generated speech while preserving natural prosody and voice quality. Accepted values run `0.5` to `1.5` in `0.05` increments. Not yet supported in all languages. When the text contains an inline pause marker, speed is capped at `1.15` (`PAUSE_SPEED_CAP_EXCEEDED` above that). A value other than `1.0` cannot be combined with inline pronunciation controls (`CONTROL_COMBINATION_INVALID`).|
|priority|query|[V2SpeakPostParametersPriority](#schemav2speakpostparameterspriority)|false|Processing priority for asynchronous (callback) requests. The only supported value is low.|
|body|body|[SpeakV2Request](#schemaspeakv2request)|false|Transform text to speech|
|» text|body|string|true|The text content to be converted to speech. For English, German, Dutch, French, Hindi, Italian, Japanese, Portuguese, Russian and Spanish, the server normalizes the text (numbers, dates, abbreviations) before synthesis; the other languages are in Early Access without text normalization, so write numbers and dates out in words. May contain inline pause controls (`\{pause:500ms\}`, 500-3000 ms in 100 ms steps, at most 8 per request) and inline pronunciation controls (`\{"word": "...", "pronounce": "<IPA>"\}`, Early Access). Pronunciation cannot be combined with pause or with a `speed` other than `1.0`, and `speed` is capped at `1.15` when a pause is present. See [Speed, Pause, Pronunciation](/docs/tts-voice-controls).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|callback_method|POST|
|callback_method|PUT|
|expressivity|-2|
|expressivity|-1|
|expressivity|0|
|expressivity|1|
|expressivity|2|
|priority|low|

> Example responses

> 200 Response

```json
{
  "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
"string"
```

<h3 id="flux-text-to-speech-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the synthesized audio in the requested encoding as a binary stream. When a `callback` URL is supplied, the request is processed asynchronously and the response body is instead a JSON acknowledgement (Content-Type `application/json`) of the form {"request_id": "..."}, with the audio delivered to the callback URL. Because this endpoint is typed as a binary audio stream, SDK callers that set `callback` receive this JSON acknowledgement through the audio byte iterator as raw bytes and must join the chunks and parse `request_id` themselves.|[SpeakV2AcceptedResponse](#schemaspeakv2acceptedresponse)|
|400|Bad Request|Invalid Request. Inline control violations return a structured error whose `err_code` names the rule: `CONTROL_COMBINATION_INVALID` (pronunciation combined with speed or pause, or all three together), `PAUSE_SPEED_CAP_EXCEEDED` (a pause marker with `speed` above `1.15`), `BREAK_OUT_OF_RANGE` (a pause outside 500-3000 ms), `BREAK_INCREMENT_INVALID` (a pause off the 100 ms grid), `BREAKS_LIMIT_EXCEEDED` (more than 8 pause markers, or two pauses with no text between them), `BREAK_SYNTAX_INVALID` (a malformed pause marker, such as a simple marker without backslashes or an escaped structured marker), plus the existing pronunciation and speed codes. A `speed` of `1.0` does not count as a speed control for the combination rules. See [Speed, Pause, Pronunciation](/docs/tts-voice-controls).|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-text">text</h1>

## Analyze text content

<a id="opIdtext_analyze"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "url": "http://example.com"
  }'
```

`POST /v1/read`

Analyze text content using Deepgrams text analysis API

> Body parameter

```json
{
  "url": "http://example.com"
}
```

<h3 id="analyze-text-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|callback|query|string|false|URL to which we'll make the callback request|
|callback_method|query|[V1ReadPostParametersCallbackMethod](#schemav1readpostparameterscallbackmethod)|false|HTTP method by which the callback request will be made|
|sentiment|query|boolean|false|Recognizes the sentiment throughout a transcript or text|
|summarize|query|[V1ReadPostParametersSummarize](#schemav1readpostparameterssummarize)|false|Summarize content. For Listen API, supports string version option. For Read API, accepts boolean only.|
|tag|query|[V1ReadPostParametersTag](#schemav1readpostparameterstag)|false|Label your requests for the purpose of identification during usage reporting|
|topics|query|boolean|false|Detect topics throughout a transcript or text|
|custom_topic|query|[V1ReadPostParametersCustomTopic](#schemav1readpostparameterscustomtopic)|false|Custom topics you want the model to detect within your input audio or text if present Submit up to `100`.|
|custom_topic_mode|query|[V1ReadPostParametersCustomTopicMode](#schemav1readpostparameterscustomtopicmode)|false|Sets how the model will interpret strings submitted to the `custom_topic` param. When `strict`, the model will only return topics submitted using the `custom_topic` param. When `extended`, the model will return its own detected topics in addition to those submitted using the `custom_topic` param|
|intents|query|boolean|false|Recognizes speaker intent throughout a transcript or text|
|custom_intent|query|[V1ReadPostParametersCustomIntent](#schemav1readpostparameterscustomintent)|false|Custom intents you want the model to detect within your input audio if present|
|custom_intent_mode|query|[V1ReadPostParametersCustomIntentMode](#schemav1readpostparameterscustomintentmode)|false|Sets how the model will interpret intents submitted to the `custom_intent` param. When `strict`, the model will only return intents submitted using the `custom_intent` param. When `extended`, the model will return its own detected intents in the `custom_intent` param.|
|language|query|string|false|The [BCP-47 language tag](https://tools.ietf.org/html/bcp47) that hints at the primary spoken language. Depending on the Model and API endpoint you choose only certain languages are available|
|body|body|[ReadV1Request](#schemareadv1request)|false|Analyze a text file|
|» *oneOf*|body|[ReadV1RequestUrl](#schemareadv1requesturl)|false|none|
|» *oneOf*|body|[ReadV1RequestText](#schemareadv1requesttext)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|callback_method|POST|
|callback_method|PUT|
|custom_topic_mode|extended|
|custom_topic_mode|strict|
|custom_intent_mode|extended|
|custom_intent_mode|strict|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "metadata": {
      "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created": "1970-01-01T00:00:00Z",
      "language": "string",
      "summary_info": {
        "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "input_tokens": 0,
        "output_tokens": 0
      },
      "sentiment_info": {
        "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "input_tokens": 0,
        "output_tokens": 0
      },
      "topics_info": {
        "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "input_tokens": 0,
        "output_tokens": 0
      },
      "intents_info": {
        "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "input_tokens": 0,
        "output_tokens": 0
      }
    }
  },
  "results": {
    "summary": {
      "results": {
        "summary": {
          "text": "string"
        }
      }
    },
    "topics": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "topics": [
            {
              "topic": "string",
              "confidence_score": "string"
            }
          ]
        }
      ]
    },
    "intents": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "intents": [
            {
              "intent": "string",
              "confidence_score": "string"
            }
          ]
        }
      ]
    },
    "sentiments": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "sentiment": "string",
          "sentiment_score": 0
        }
      ],
      "average": {
        "sentiment": "string",
        "sentiment_score": 0
      }
    }
  }
}
```

> 400 Response

```json
"string"
```

<h3 id="analyze-text-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful text analysis|[ReadV1Response](#schemareadv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-projects">projects</h1>

## List Projects

<a id="opIdprojects_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects`

Retrieves basic information about the projects associated with the API key

> Example responses

> 200 Response

```json
{
  "projects": [
    {
      "project_id": "string",
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of projects|[ListProjectsV1Response](#schemalistprojectsv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get a Project

<a id="opIdprojects_get"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}`

Retrieves information about the specified project

<h3 id="get-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|limit|query|number(double)|false|Number of results to return per page. Default 10. Range [1,1000]|
|page|query|number(double)|false|Navigate and return the results to retrieve specific portions of information of the response|

> Example responses

> 200 Response

```json
{
  "project_id": "string",
  "mip_opt_out": true,
  "name": "string"
}
```

> 400 Response

```json
"string"
```

<h3 id="get-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A project|[GetProjectV1Response](#schemagetprojectv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a Project

<a id="opIdprojects_delete"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/projects/{project_id}`

Deletes the specified project

<h3 id="delete-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
"string"
```

<h3 id="delete-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A project|[DeleteProjectV1Response](#schemadeleteprojectv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update a Project

<a id="opIdprojects_update"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /v1/projects/{project_id}`

Updates the name or other properties of an existing project

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|body|body|[UpdateProjectV1Request](#schemaupdateprojectv1request)|false|The name of the project|
|» name|body|string|false|The name of the project|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
"string"
```

<h3 id="update-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A project|[UpdateProjectV1Response](#schemaupdateprojectv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Leave a Project

<a id="opIdprojects_leave"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/leave \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/projects/{project_id}/leave`

Removes the authenticated account from the specific project

<h3 id="leave-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
"string"
```

<h3 id="leave-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully removed account from project|[LeaveProjectV1Response](#schemaleaveprojectv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-keys">keys</h1>

## List Project Keys

<a id="opIdkeys_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/keys \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/keys`

Retrieves all API keys associated with the specified project

<h3 id="list-project-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|status|query|[V1ProjectsProjectIdKeysGetParametersStatus](#schemav1projectsprojectidkeysgetparametersstatus)|false|Only return keys with a specific status|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|active|
|status|expired|

> Example responses

> 200 Response

```json
{
  "api_keys": [
    {
      "member": {
        "member_id": "string",
        "email": "string"
      },
      "api_key": {
        "api_key_id": "string",
        "comment": "string",
        "scopes": [
          "string"
        ],
        "created": "1970-01-01T00:00:00Z"
      }
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-project-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of API keys|[ListProjectKeysV1Response](#schemalistprojectkeysv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a Project Key

<a id="opIdkeys_create"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d 'null'
```

`POST /v1/projects/{project_id}/keys`

Creates a new API key with specified settings for the project

> Body parameter

```json
null
```

<h3 id="create-a-project-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|body|body|[CreateKeyV1Request](#schemacreatekeyv1request)|false|API key settings|
|» *oneOf*|body|object|false|Any type|
|» *oneOf*|body|object|false|Any type|

> Example responses

> 200 Response

```json
{
  "api_key_id": "string",
  "key": "string",
  "comment": "string",
  "scopes": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "expiration_date": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
"string"
```

<h3 id="create-a-project-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API key created successfully|[CreateKeyV1Response](#schemacreatekeyv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get a Project Key

<a id="opIdkeys_get"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/keys/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/keys/{key_id}`

Retrieves information about a specified API key

<h3 id="get-a-project-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|key_id|path|string|true|The unique identifier of the API key|

> Example responses

> 200 Response

```json
{
  "item": {
    "member": {
      "member_id": "string",
      "email": "string",
      "first_name": "string",
      "last_name": "string",
      "api_key": {
        "api_key_id": "string",
        "comment": "string",
        "scopes": [
          "string"
        ],
        "tags": [
          "string"
        ],
        "expiration_date": "1970-01-01T00:00:00Z",
        "created": "1970-01-01T00:00:00Z"
      }
    }
  }
}
```

> 400 Response

```json
"string"
```

<h3 id="get-a-project-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A specific API key|[GetProjectKeyV1Response](#schemagetprojectkeyv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a Project Key

<a id="opIdkeys_delete"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/keys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/projects/{project_id}/keys/{key_id}`

Deletes an API key for a specific project

<h3 id="delete-a-project-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|key_id|path|string|true|The unique identifier of the API key|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
"string"
```

<h3 id="delete-a-project-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API key deleted|[DeleteProjectKeyV1Response](#schemadeleteprojectkeyv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-members">members</h1>

## List Project Members

<a id="opIdmembers_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/members \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/members`

Retrieves a list of members for a given project

<h3 id="list-project-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|

> Example responses

> 200 Response

```json
{
  "members": [
    {
      "member_id": "string",
      "scopes": [
        "string"
      ],
      "email": "string",
      "first_name": "string",
      "last_name": "string"
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-project-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of members for a given project|[ListProjectMembersV1Response](#schemalistprojectmembersv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a Project Member

<a id="opIdmembers_delete"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/members/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/projects/{project_id}/members/{member_id}`

Removes a member from the project using their unique member ID

<h3 id="delete-a-project-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|member_id|path|string|true|The unique identifier of the Member|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
"string"
```

<h3 id="delete-a-project-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete the specific member from the project|[DeleteProjectMemberV1Response](#schemadeleteprojectmemberv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-scopes">scopes</h1>

## List Project Member Scopes

<a id="opIdscopes_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/members/string/scopes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/members/{member_id}/scopes`

Retrieves a list of scopes for a specific member

<h3 id="list-project-member-scopes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|member_id|path|string|true|The unique identifier of the Member|

> Example responses

> 200 Response

```json
{
  "scopes": [
    "string"
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-project-member-scopes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of scopes for a specific member|[ListProjectMemberScopesV1Response](#schemalistprojectmemberscopesv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update Project Member Scopes

<a id="opIdscopes_update"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/members/string/scopes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "scope": "string"
  }'
```

`PUT /v1/projects/{project_id}/members/{member_id}/scopes`

Updates the scopes for a specific member

> Body parameter

```json
{
  "scope": "string"
}
```

<h3 id="update-project-member-scopes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|member_id|path|string|true|The unique identifier of the Member|
|body|body|[UpdateProjectMemberScopesV1Request](#schemaupdateprojectmemberscopesv1request)|false|A scope to update|
|» scope|body|string|true|A scope to update|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
"string"
```

<h3 id="update-project-member-scopes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated the scopes for a specific member|[UpdateProjectMemberScopesV1Response](#schemaupdateprojectmemberscopesv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-invites">invites</h1>

## List Project Invites

<a id="opIdinvites_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/invites \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/invites`

Generates a list of invites for a specific project

<h3 id="list-project-invites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|

> Example responses

> 200 Response

```json
{
  "invites": [
    {
      "email": "string",
      "scope": "string"
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-project-invites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of invites for a specific project|[ListProjectInvitesV1Response](#schemalistprojectinvitesv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a Project Invite

<a id="opIdinvites_create"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/invites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "string",
    "scope": "string"
  }'
```

`POST /v1/projects/{project_id}/invites`

Generates an invite for a specific project

> Body parameter

```json
{
  "email": "string",
  "scope": "string"
}
```

<h3 id="create-a-project-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|body|body|[CreateProjectInviteV1Request](#schemacreateprojectinvitev1request)|false|email to invite to the project|
|» email|body|string|true|The email address of the invitee|
|» scope|body|string|true|The scope of the invitee|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
"string"
```

<h3 id="create-a-project-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The invite was successfully generated|[CreateProjectInviteV1Response](#schemacreateprojectinvitev1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a Project Invite

<a id="opIdinvites_delete"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/invites/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/projects/{project_id}/invites/{email}`

Deletes an invite for a specific project

<h3 id="delete-a-project-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|email|path|string|true|The email address of the member|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
"string"
```

<h3 id="delete-a-project-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The invite was successfully deleted|[DeleteProjectInviteV1Response](#schemadeleteprojectinvitev1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-requests">requests</h1>

## List Project Requests

<a id="opIdrequests_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/requests \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/requests`

Generates a list of requests for a specific project

<h3 id="list-project-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|start|query|string(date-time)|false|Start date of the requested date range. Formats accepted are YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS, or YYYY-MM-DDTHH:MM:SS+HH:MM|
|end|query|string(date-time)|false|End date of the requested date range. Formats accepted are YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS, or YYYY-MM-DDTHH:MM:SS+HH:MM|
|limit|query|number(double)|false|Number of results to return per page. Default 10. Range [1,1000]|
|page|query|number(double)|false|Navigate and return the results to retrieve specific portions of information of the response|
|accessor|query|string|false|Filter for requests where a specific accessor was used|
|request_id|query|string|false|Filter for a specific request id|
|deployment|query|[V1ProjectsProjectIdRequestsGetParametersDeployment](#schemav1projectsprojectidrequestsgetparametersdeployment)|false|Filter for requests where a specific deployment was used|
|endpoint|query|[V1ProjectsProjectIdRequestsGetParametersEndpoint](#schemav1projectsprojectidrequestsgetparametersendpoint)|false|Filter for requests where a specific endpoint was used|
|method|query|[V1ProjectsProjectIdRequestsGetParametersMethod](#schemav1projectsprojectidrequestsgetparametersmethod)|false|Filter for requests where a specific method was used|
|status|query|[V1ProjectsProjectIdRequestsGetParametersStatus](#schemav1projectsprojectidrequestsgetparametersstatus)|false|Filter for requests that succeeded (status code < 300) or failed (status code >=400)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|deployment|hosted|
|deployment|beta|
|deployment|self-hosted|
|endpoint|listen|
|endpoint|read|
|endpoint|speak|
|endpoint|agent|
|method|sync|
|method|async|
|method|streaming|
|status|succeeded|
|status|failed|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "limit": 0,
  "requests": [
    {
      "request_id": "string",
      "project_uuid": "string",
      "created": "1970-01-01T00:00:00Z",
      "path": "string",
      "api_key_id": "string",
      "response": {},
      "code": 0,
      "deployment": "string",
      "callback": "string"
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-project-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of requests for a specific project|[ListProjectRequestsV1Response](#schemalistprojectrequestsv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get a Project Request

<a id="opIdrequests_get"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/requests/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/requests/{request_id}`

Retrieves a specific request for a specific project

<h3 id="get-a-project-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|request_id|path|string|true|The unique identifier of the request|

> Example responses

> 200 Response

```json
{
  "request": {
    "request_id": "string",
    "project_uuid": "string",
    "created": "1970-01-01T00:00:00Z",
    "path": "string",
    "api_key_id": "string",
    "response": {},
    "code": 0,
    "deployment": "string",
    "callback": "string"
  }
}
```

> 400 Response

```json
"string"
```

<h3 id="get-a-project-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A specific request for a specific project|[GetProjectRequestV1Response](#schemagetprojectrequestv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-usage">usage</h1>

## Get Project Usage

<a id="opIdusage_get"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/usage \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/usage`

<aside class="warning">
This operation is deprecated
</aside>

Retrieves the usage for a specific project. Use Get Project Usage Breakdown for a more comprehensive usage summary.

<h3 id="get-project-usage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|start|query|string(date)|false|Start date of the requested date range. Format accepted is YYYY-MM-DD|
|end|query|string(date)|false|End date of the requested date range. Format accepted is YYYY-MM-DD|
|accessor|query|string|false|Filter for requests where a specific accessor was used|
|alternatives|query|boolean|false|Filter for requests where alternatives were used|
|callback_method|query|boolean|false|Filter for requests where callback method was used|
|callback|query|boolean|false|Filter for requests where callback was used|
|channels|query|boolean|false|Filter for requests where channels were used|
|custom_intent_mode|query|boolean|false|Filter for requests where custom intent mode was used|
|custom_intent|query|boolean|false|Filter for requests where custom intent was used|
|custom_topic_mode|query|boolean|false|Filter for requests where custom topic mode was used|
|custom_topic|query|boolean|false|Filter for requests where custom topic was used|
|deployment|query|[V1ProjectsProjectIdUsageGetParametersDeployment](#schemav1projectsprojectidusagegetparametersdeployment)|false|Filter for requests where a specific deployment was used|
|detect_entities|query|boolean|false|Filter for requests where detect entities was used|
|detect_language|query|boolean|false|Filter for requests where detect language was used|
|diarize|query|boolean|false|Filter for requests where diarize was used|
|dictation|query|boolean|false|Filter for requests where dictation was used|
|encoding|query|boolean|false|Filter for requests where encoding was used|
|endpoint|query|[V1ProjectsProjectIdUsageGetParametersEndpoint](#schemav1projectsprojectidusagegetparametersendpoint)|false|Filter for requests where a specific endpoint was used|
|extra|query|boolean|false|Filter for requests where extra was used|
|filler_words|query|boolean|false|Filter for requests where filler words was used|
|intents|query|boolean|false|Filter for requests where intents was used|
|keyterm|query|boolean|false|Filter for requests where keyterm was used|
|keywords|query|boolean|false|Filter for requests where keywords was used|
|language|query|boolean|false|Filter for requests where language was used|
|measurements|query|boolean|false|Filter for requests where measurements were used|
|method|query|[V1ProjectsProjectIdUsageGetParametersMethod](#schemav1projectsprojectidusagegetparametersmethod)|false|Filter for requests where a specific method was used|
|model|query|string|false|Filter for requests where a specific model uuid was used|
|multichannel|query|boolean|false|Filter for requests where multichannel was used|
|numerals|query|boolean|false|Filter for requests where numerals were used|
|paragraphs|query|boolean|false|Filter for requests where paragraphs were used|
|profanity_filter|query|boolean|false|Filter for requests where profanity filter was used|
|punctuate|query|boolean|false|Filter for requests where punctuate was used|
|redact|query|boolean|false|Filter for requests where redact was used|
|replace|query|boolean|false|Filter for requests where replace was used|
|sample_rate|query|boolean|false|Filter for requests where sample rate was used|
|search|query|boolean|false|Filter for requests where search was used|
|sentiment|query|boolean|false|Filter for requests where sentiment was used|
|smart_format|query|boolean|false|Filter for requests where smart format was used|
|summarize|query|boolean|false|Filter for requests where summarize was used|
|tag|query|string|false|Filter for requests where a specific tag was used|
|topics|query|boolean|false|Filter for requests where topics was used|
|utt_split|query|boolean|false|Filter for requests where utt split was used|
|utterances|query|boolean|false|Filter for requests where utterances was used|
|version|query|boolean|false|Filter for requests where version was used|

#### Enumerated Values

|Parameter|Value|
|---|---|
|deployment|hosted|
|deployment|beta|
|deployment|self-hosted|
|endpoint|listen|
|endpoint|read|
|endpoint|speak|
|endpoint|agent|
|method|sync|
|method|async|
|method|streaming|

> Example responses

> 200 Response

```json
{
  "start": "1970-01-01",
  "end": "1970-01-01",
  "resolution": {
    "units": "string",
    "amount": 0
  }
}
```

> 400 Response

```json
"string"
```

<h3 id="get-project-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A specific request for a specific project|[UsageV1Response](#schemausagev1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-fields">fields</h1>

## List Project Usage Fields

<a id="opIdfields_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/usage/fields \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/usage/fields`

Lists the features, models, tags, languages, and processing method used for requests in the specified project

<h3 id="list-project-usage-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|start|query|string(date)|false|Start date of the requested date range. Format accepted is YYYY-MM-DD|
|end|query|string(date)|false|End date of the requested date range. Format accepted is YYYY-MM-DD|

> Example responses

> 200 Response

```json
{
  "tags": [
    "string"
  ],
  "models": [
    {
      "name": "string",
      "language": "string",
      "version": "string",
      "model_id": "string"
    }
  ],
  "processing_methods": [
    "string"
  ],
  "features": [
    "string"
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-project-usage-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of fields for a specific project|[UsageFieldsV1Response](#schemausagefieldsv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List Project Billing Fields

<a id="opIdfields_list_2"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/billing/fields \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/billing/fields`

Lists the accessors, deployment types, tags, and line items used for billing data in the specified time period. Use this endpoint if you want to filter your results from the Billing Breakdown endpoint and want to know what filters are available.

<h3 id="list-project-billing-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|start|query|string(date)|false|Start date of the requested date range. Format accepted is YYYY-MM-DD|
|end|query|string(date)|false|End date of the requested date range. Format accepted is YYYY-MM-DD|

> Example responses

> 200 Response

```json
{
  "accessors": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "deployments": [
    "hosted"
  ],
  "tags": [
    "string"
  ],
  "line_items": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 400 Response

```json
"string"
```

<h3 id="list-project-billing-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of billing fields for a specific project|[ListBillingFieldsV1Response](#schemalistbillingfieldsv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-breakdown">breakdown</h1>

## Get Project Usage Breakdown

<a id="opIdbreakdown_get"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/usage/breakdown \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/usage/breakdown`

Retrieves the usage breakdown for a specific project, with various filter options by API feature or by groupings. Setting a feature (e.g. diarize) to true includes requests that used that feature, while false excludes requests that used it. Multiple true filters are combined with OR logic, while false filters use AND logic.

<h3 id="get-project-usage-breakdown-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|start|query|string(date)|false|Start date of the requested date range. Format accepted is YYYY-MM-DD|
|end|query|string(date)|false|End date of the requested date range. Format accepted is YYYY-MM-DD|
|grouping|query|[V1ProjectsProjectIdUsageBreakdownGetParametersGrouping](#schemav1projectsprojectidusagebreakdowngetparametersgrouping)|false|Common usage grouping parameters|
|accessor|query|string|false|Filter for requests where a specific accessor was used|
|alternatives|query|boolean|false|Filter for requests where alternatives were used|
|callback_method|query|boolean|false|Filter for requests where callback method was used|
|callback|query|boolean|false|Filter for requests where callback was used|
|channels|query|boolean|false|Filter for requests where channels were used|
|custom_intent_mode|query|boolean|false|Filter for requests where custom intent mode was used|
|custom_intent|query|boolean|false|Filter for requests where custom intent was used|
|custom_topic_mode|query|boolean|false|Filter for requests where custom topic mode was used|
|custom_topic|query|boolean|false|Filter for requests where custom topic was used|
|deployment|query|[V1ProjectsProjectIdUsageBreakdownGetParametersDeployment](#schemav1projectsprojectidusagebreakdowngetparametersdeployment)|false|Filter for requests where a specific deployment was used|
|detect_entities|query|boolean|false|Filter for requests where detect entities was used|
|detect_language|query|boolean|false|Filter for requests where detect language was used|
|diarize|query|boolean|false|Filter for requests where diarize was used|
|dictation|query|boolean|false|Filter for requests where dictation was used|
|encoding|query|boolean|false|Filter for requests where encoding was used|
|endpoint|query|[V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint](#schemav1projectsprojectidusagebreakdowngetparametersendpoint)|false|Filter for requests where a specific endpoint was used|
|extra|query|boolean|false|Filter for requests where extra was used|
|filler_words|query|boolean|false|Filter for requests where filler words was used|
|intents|query|boolean|false|Filter for requests where intents was used|
|keyterm|query|boolean|false|Filter for requests where keyterm was used|
|keywords|query|boolean|false|Filter for requests where keywords was used|
|language|query|boolean|false|Filter for requests where language was used|
|measurements|query|boolean|false|Filter for requests where measurements were used|
|method|query|[V1ProjectsProjectIdUsageBreakdownGetParametersMethod](#schemav1projectsprojectidusagebreakdowngetparametersmethod)|false|Filter for requests where a specific method was used|
|model|query|string|false|Filter for requests where a specific model uuid was used|
|multichannel|query|boolean|false|Filter for requests where multichannel was used|
|numerals|query|boolean|false|Filter for requests where numerals were used|
|paragraphs|query|boolean|false|Filter for requests where paragraphs were used|
|profanity_filter|query|boolean|false|Filter for requests where profanity filter was used|
|punctuate|query|boolean|false|Filter for requests where punctuate was used|
|redact|query|boolean|false|Filter for requests where redact was used|
|replace|query|boolean|false|Filter for requests where replace was used|
|sample_rate|query|boolean|false|Filter for requests where sample rate was used|
|search|query|boolean|false|Filter for requests where search was used|
|sentiment|query|boolean|false|Filter for requests where sentiment was used|
|smart_format|query|boolean|false|Filter for requests where smart format was used|
|summarize|query|boolean|false|Filter for requests where summarize was used|
|tag|query|string|false|Filter for requests where a specific tag was used|
|topics|query|boolean|false|Filter for requests where topics was used|
|utt_split|query|boolean|false|Filter for requests where utt split was used|
|utterances|query|boolean|false|Filter for requests where utterances was used|
|version|query|boolean|false|Filter for requests where version was used|

#### Enumerated Values

|Parameter|Value|
|---|---|
|grouping|accessor|
|grouping|endpoint|
|grouping|feature_set|
|grouping|models|
|grouping|method|
|grouping|tags|
|grouping|deployment|
|deployment|hosted|
|deployment|beta|
|deployment|self-hosted|
|endpoint|listen|
|endpoint|read|
|endpoint|speak|
|endpoint|agent|
|method|sync|
|method|async|
|method|streaming|

> Example responses

> 200 Response

```json
{
  "start": "1970-01-01",
  "end": "1970-01-01",
  "resolution": {
    "units": "string",
    "amount": 0
  },
  "results": [
    {
      "hours": "string",
      "total_hours": "string",
      "agent_hours": "string",
      "tokens_in": 0,
      "tokens_out": 0,
      "tts_characters": 0,
      "requests": 0,
      "grouping": {
        "start": "1970-01-01",
        "end": "1970-01-01",
        "accessor": "string",
        "endpoint": "string",
        "feature_set": "string",
        "models": [
          "string"
        ],
        "method": "string",
        "tags": [
          "string"
        ],
        "deployment": "string"
      }
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="get-project-usage-breakdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Usage breakdown response|[UsageBreakdownV1Response](#schemausagebreakdownv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Project Billing Breakdown

<a id="opIdbreakdown_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/billing/breakdown \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/billing/breakdown`

Retrieves the billing summary for a specific project, with various filter options or by grouping options.

<h3 id="get-project-billing-breakdown-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|start|query|string(date)|false|Start date of the requested date range. Format accepted is YYYY-MM-DD|
|end|query|string(date)|false|End date of the requested date range. Format accepted is YYYY-MM-DD|
|accessor|query|string|false|Filter for requests where a specific accessor was used|
|deployment|query|[V1ProjectsProjectIdBillingBreakdownGetParametersDeployment](#schemav1projectsprojectidbillingbreakdowngetparametersdeployment)|false|Filter for requests where a specific deployment was used|
|tag|query|string|false|Filter for requests where a specific tag was used|
|line_item|query|string|false|Filter requests by line item (e.g. streaming::nova-3)|
|grouping|query|[[V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems](#schemav1projectsprojectidbillingbreakdowngetparametersgroupingschemaitems)]|false|Group billing breakdown by one or more dimensions (accessor, deployment, line_item, tags)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|deployment|hosted|
|deployment|beta|
|deployment|self-hosted|
|grouping|accessor|
|grouping|deployment|
|grouping|line_item|
|grouping|tags|

> Example responses

> 200 Response

```json
{
  "start": "1970-01-01",
  "end": "1970-01-01",
  "resolution": {
    "units": "string",
    "amount": 0
  },
  "results": [
    {
      "dollars": "string",
      "grouping": {
        "start": "1970-01-01",
        "end": "1970-01-01",
        "accessor": "string",
        "deployment": "string",
        "line_item": "string",
        "tags": [
          "string"
        ]
      }
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="get-project-billing-breakdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Billing breakdown response|[BillingBreakdownV1Response](#schemabillingbreakdownv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-balances">balances</h1>

## Get Project Balances

<a id="opIdbalances_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/balances \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/balances`

Generates a list of outstanding balances for the specified project

<h3 id="get-project-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|

> Example responses

> 200 Response

```json
{
  "balances": [
    {
      "balance_id": "string",
      "amount": 0,
      "units": "string",
      "purchase_order_id": "string"
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="get-project-balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of outstanding balances|[ListProjectBalancesV1Response](#schemalistprojectbalancesv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get a Project Balance

<a id="opIdbalances_get"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/balances/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/balances/{balance_id}`

Retrieves details about the specified balance

<h3 id="get-a-project-balance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|balance_id|path|string|true|The unique identifier of the balance|

> Example responses

> 200 Response

```json
{
  "balance_id": "string",
  "amount": 0,
  "units": "string",
  "purchase_order_id": "string"
}
```

> 400 Response

```json
"string"
```

<h3 id="get-a-project-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A specific balance|[GetProjectBalanceV1Response](#schemagetprojectbalancev1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-purchases">purchases</h1>

## List Project Purchases

<a id="opIdpurchases_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/purchases \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/purchases`

Returns the original purchased amount on an order transaction

<h3 id="list-project-purchases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|limit|query|number(double)|false|Number of results to return per page. Default 10. Range [1,1000]|

> Example responses

> 200 Response

```json
{
  "orders": [
    {
      "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "expiration": "1970-01-01T00:00:00Z",
      "created": "1970-01-01T00:00:00Z",
      "amount": "string",
      "units": "string",
      "order_type": "string"
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-project-purchases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of purchases for a specific project|[ListProjectPurchasesV1Response](#schemalistprojectpurchasesv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-distributioncredentials">distributionCredentials</h1>

## List Project Self-Hosted Distribution Credentials

<a id="opIddistributionCredentials_list"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/self-hosted/distribution/credentials \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/self-hosted/distribution/credentials`

Lists sets of distribution credentials for the specified project

<h3 id="list-project-self-hosted-distribution-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|

> Example responses

> 200 Response

```json
{
  "distribution_credentials": [
    {
      "member": {
        "member_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": "user@example.com"
      },
      "distribution_credentials": {
        "distribution_credentials_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "provider": "string",
        "comment": "string",
        "scopes": [
          "string"
        ],
        "created": "1970-01-01T00:00:00Z"
      }
    }
  ]
}
```

> 400 Response

```json
"string"
```

<h3 id="list-project-self-hosted-distribution-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of distribution credentials for a specific project|[ListProjectDistributionCredentialsV1Response](#schemalistprojectdistributioncredentialsv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a Project Self-Hosted Distribution Credential

<a id="opIddistributionCredentials_create"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/self-hosted/distribution/credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "comment": "string"
  }'
```

`POST /v1/projects/{project_id}/self-hosted/distribution/credentials`

Creates a set of distribution credentials for the specified project

> Body parameter

```json
{
  "comment": "string"
}
```

<h3 id="create-a-project-self-hosted-distribution-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|scopes|query|[[V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems](#schemav1projectsprojectidselfhosteddistributioncredentialspostparametersscopesschemaitems)]|false|List of permission scopes for the credentials|
|provider|query|[V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider](#schemav1projectsprojectidselfhosteddistributioncredentialspostparametersprovider)|false|The provider of the distribution service|
|body|body|[CreateProjectDistributionCredentialsV1Request](#schemacreateprojectdistributioncredentialsv1request)|false|The set of distribution credentials to create|
|» comment|body|string|false|Optional comment about the credentials|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scopes|self-hosted:products|
|scopes|self-hosted:product:api|
|scopes|self-hosted:product:engine|
|scopes|self-hosted:product:license-proxy|
|scopes|self-hosted:product:dgtools|
|scopes|self-hosted:product:billing|
|scopes|self-hosted:product:hotpepper|
|scopes|self-hosted:product:metrics-server|
|provider|quay|

> Example responses

> 200 Response

```json
{
  "member": {
    "member_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com"
  },
  "distribution_credentials": {
    "distribution_credentials_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "provider": "string",
    "comment": "string",
    "scopes": [
      "string"
    ],
    "created": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
"string"
```

<h3 id="create-a-project-self-hosted-distribution-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Single distribution credential|[CreateProjectDistributionCredentialsV1Response](#schemacreateprojectdistributioncredentialsv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get a Project Self-Hosted Distribution Credential

<a id="opIddistributionCredentials_get"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/self-hosted/distribution/credentials/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}`

Returns a set of distribution credentials for the specified project

<h3 id="get-a-project-self-hosted-distribution-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|distribution_credentials_id|path|string|true|The UUID of the distribution credentials|

> Example responses

> 200 Response

```json
{
  "member": {
    "member_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com"
  },
  "distribution_credentials": {
    "distribution_credentials_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "provider": "string",
    "comment": "string",
    "scopes": [
      "string"
    ],
    "created": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
"string"
```

<h3 id="get-a-project-self-hosted-distribution-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Single distribution credential|[GetProjectDistributionCredentialsV1Response](#schemagetprojectdistributioncredentialsv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete a Project Self-Hosted Distribution Credential

<a id="opIddistributionCredentials_delete"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/projects/string/self-hosted/distribution/credentials/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}`

Deletes a set of distribution credentials for the specified project

<h3 id="delete-a-project-self-hosted-distribution-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The unique identifier of the project|
|distribution_credentials_id|path|string|true|The UUID of the distribution credentials|

> Example responses

> 200 Response

```json
{
  "member": {
    "member_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com"
  },
  "distribution_credentials": {
    "distribution_credentials_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "provider": "string",
    "comment": "string",
    "scopes": [
      "string"
    ],
    "created": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
"string"
```

<h3 id="delete-a-project-self-hosted-distribution-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Single distribution credential|[GetProjectDistributionCredentialsV1Response](#schemagetprojectdistributioncredentialsv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="rest-api-tokens">tokens</h1>

## Token-based Authentication

<a id="opIdtokens_grant"></a>

> Code samples

```bash
curl https://api.deepgram.com/v1/auth/grant \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ttl_seconds": 1
  }'
```

`POST /v1/auth/grant`

Generates a temporary JSON Web Token (JWT) with a 30-second (by default) TTL and usage::write permission for core voice APIs, requiring an API key with Member or higher authorization. Tokens created with this endpoint will not work with the Manage APIs.

> Body parameter

```json
{
  "ttl_seconds": 1
}
```

<h3 id="token-based-authentication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GrantV1Request](#schemagrantv1request)|false|Time to live settings|
|» ttl_seconds|body|number(double)|false|Time to live in seconds for the token. Defaults to 30 seconds.|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "expires_in": 0
}
```

> 400 Response

```json
"string"
```

<h3 id="token-based-authentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Grant response|[GrantV1Response](#schemagrantv1response)|
|400|Bad Request|Invalid Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_AgentThinkModelsV1ResponseModelsItemsOneOf0Id">AgentThinkModelsV1ResponseModelsItemsOneOf0Id</h2>
<!-- backwards compatibility -->
<a id="schemaagentthinkmodelsv1responsemodelsitemsoneof0id"></a>
<a id="schema_AgentThinkModelsV1ResponseModelsItemsOneOf0Id"></a>
<a id="tocSagentthinkmodelsv1responsemodelsitemsoneof0id"></a>
<a id="tocsagentthinkmodelsv1responsemodelsitemsoneof0id"></a>

```json
"gpt-5"
```

The unique identifier of the OpenAI model

<h2 id="tocS_AgentThinkModelsV1ResponseModelsItems0">AgentThinkModelsV1ResponseModelsItems0</h2>
<!-- backwards compatibility -->
<a id="schemaagentthinkmodelsv1responsemodelsitems0"></a>
<a id="schema_AgentThinkModelsV1ResponseModelsItems0"></a>
<a id="tocSagentthinkmodelsv1responsemodelsitems0"></a>
<a id="tocsagentthinkmodelsv1responsemodelsitems0"></a>

```json
{
  "id": "gpt-5",
  "name": "string",
  "provider": null
}
```

OpenAI models

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[AgentThinkModelsV1ResponseModelsItemsOneOf0Id](#schemaagentthinkmodelsv1responsemodelsitemsoneof0id)|true|none|The unique identifier of the OpenAI model|
|name|string|true|none|The display name of the model|
|provider|object|true|none|The provider of the model|

#### Enumerated Values

|Property|Value|
|---|---|
|id|gpt-5|
|id|gpt-5-mini|
|id|gpt-5-nano|
|id|gpt-4.1|
|id|gpt-4.1-mini|
|id|gpt-4.1-nano|
|id|gpt-4o|
|id|gpt-4o-mini|

<h2 id="tocS_AgentThinkModelsV1ResponseModelsItemsOneOf1Id">AgentThinkModelsV1ResponseModelsItemsOneOf1Id</h2>
<!-- backwards compatibility -->
<a id="schemaagentthinkmodelsv1responsemodelsitemsoneof1id"></a>
<a id="schema_AgentThinkModelsV1ResponseModelsItemsOneOf1Id"></a>
<a id="tocSagentthinkmodelsv1responsemodelsitemsoneof1id"></a>
<a id="tocsagentthinkmodelsv1responsemodelsitemsoneof1id"></a>

```json
"claude-3-5-haiku-latest"
```

The unique identifier of the Anthropic model

<h2 id="tocS_AgentThinkModelsV1ResponseModelsItems1">AgentThinkModelsV1ResponseModelsItems1</h2>
<!-- backwards compatibility -->
<a id="schemaagentthinkmodelsv1responsemodelsitems1"></a>
<a id="schema_AgentThinkModelsV1ResponseModelsItems1"></a>
<a id="tocSagentthinkmodelsv1responsemodelsitems1"></a>
<a id="tocsagentthinkmodelsv1responsemodelsitems1"></a>

```json
{
  "id": "claude-3-5-haiku-latest",
  "name": "string",
  "provider": null
}
```

Anthropic models

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[AgentThinkModelsV1ResponseModelsItemsOneOf1Id](#schemaagentthinkmodelsv1responsemodelsitemsoneof1id)|true|none|The unique identifier of the Anthropic model|
|name|string|true|none|The display name of the model|
|provider|object|true|none|The provider of the model|

#### Enumerated Values

|Property|Value|
|---|---|
|id|claude-3-5-haiku-latest|
|id|claude-sonnet-4-20250514|

<h2 id="tocS_AgentThinkModelsV1ResponseModelsItemsOneOf2Id">AgentThinkModelsV1ResponseModelsItemsOneOf2Id</h2>
<!-- backwards compatibility -->
<a id="schemaagentthinkmodelsv1responsemodelsitemsoneof2id"></a>
<a id="schema_AgentThinkModelsV1ResponseModelsItemsOneOf2Id"></a>
<a id="tocSagentthinkmodelsv1responsemodelsitemsoneof2id"></a>
<a id="tocsagentthinkmodelsv1responsemodelsitemsoneof2id"></a>

```json
"gemini-2.5-flash"
```

The unique identifier of the Google model

<h2 id="tocS_AgentThinkModelsV1ResponseModelsItems2">AgentThinkModelsV1ResponseModelsItems2</h2>
<!-- backwards compatibility -->
<a id="schemaagentthinkmodelsv1responsemodelsitems2"></a>
<a id="schema_AgentThinkModelsV1ResponseModelsItems2"></a>
<a id="tocSagentthinkmodelsv1responsemodelsitems2"></a>
<a id="tocsagentthinkmodelsv1responsemodelsitems2"></a>

```json
{
  "id": "gemini-2.5-flash",
  "name": "string",
  "provider": null
}
```

Google models

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[AgentThinkModelsV1ResponseModelsItemsOneOf2Id](#schemaagentthinkmodelsv1responsemodelsitemsoneof2id)|true|none|The unique identifier of the Google model|
|name|string|true|none|The display name of the model|
|provider|object|true|none|The provider of the model|

#### Enumerated Values

|Property|Value|
|---|---|
|id|gemini-2.5-flash|
|id|gemini-2.0-flash|
|id|gemini-2.0-flash-lite|

<h2 id="tocS_AgentThinkModelsV1ResponseModelsItemsOneOf3Id">AgentThinkModelsV1ResponseModelsItemsOneOf3Id</h2>
<!-- backwards compatibility -->
<a id="schemaagentthinkmodelsv1responsemodelsitemsoneof3id"></a>
<a id="schema_AgentThinkModelsV1ResponseModelsItemsOneOf3Id"></a>
<a id="tocSagentthinkmodelsv1responsemodelsitemsoneof3id"></a>
<a id="tocsagentthinkmodelsv1responsemodelsitemsoneof3id"></a>

```json
"openai/gpt-oss-20b"
```

The unique identifier of the Groq model

<h2 id="tocS_AgentThinkModelsV1ResponseModelsItems3">AgentThinkModelsV1ResponseModelsItems3</h2>
<!-- backwards compatibility -->
<a id="schemaagentthinkmodelsv1responsemodelsitems3"></a>
<a id="schema_AgentThinkModelsV1ResponseModelsItems3"></a>
<a id="tocSagentthinkmodelsv1responsemodelsitems3"></a>
<a id="tocsagentthinkmodelsv1responsemodelsitems3"></a>

```json
{
  "id": "openai/gpt-oss-20b",
  "name": "string",
  "provider": null
}
```

Groq models

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[AgentThinkModelsV1ResponseModelsItemsOneOf3Id](#schemaagentthinkmodelsv1responsemodelsitemsoneof3id)|true|none|The unique identifier of the Groq model|
|name|string|true|none|The display name of the model|
|provider|object|true|none|The provider of the model|

#### Enumerated Values

|Property|Value|
|---|---|
|id|openai/gpt-oss-20b|

<h2 id="tocS_AgentThinkModelsV1ResponseModelsItems4">AgentThinkModelsV1ResponseModelsItems4</h2>
<!-- backwards compatibility -->
<a id="schemaagentthinkmodelsv1responsemodelsitems4"></a>
<a id="schema_AgentThinkModelsV1ResponseModelsItems4"></a>
<a id="tocSagentthinkmodelsv1responsemodelsitems4"></a>
<a id="tocsagentthinkmodelsv1responsemodelsitems4"></a>

```json
{
  "id": "string",
  "name": "string",
  "provider": null
}
```

AWS Bedrock models (custom models accepted)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the AWS Bedrock model (any model string accepted for BYO LLMs)|
|name|string|true|none|The display name of the model|
|provider|object|true|none|The provider of the model|

<h2 id="tocS_AgentThinkModelsV1ResponseModelsItems">AgentThinkModelsV1ResponseModelsItems</h2>
<!-- backwards compatibility -->
<a id="schemaagentthinkmodelsv1responsemodelsitems"></a>
<a id="schema_AgentThinkModelsV1ResponseModelsItems"></a>
<a id="tocSagentthinkmodelsv1responsemodelsitems"></a>
<a id="tocsagentthinkmodelsv1responsemodelsitems"></a>

```json
{
  "id": "gpt-5",
  "name": "string",
  "provider": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AgentThinkModelsV1ResponseModelsItems0](#schemaagentthinkmodelsv1responsemodelsitems0)|false|none|OpenAI models|
|*oneOf*|[AgentThinkModelsV1ResponseModelsItems1](#schemaagentthinkmodelsv1responsemodelsitems1)|false|none|Anthropic models|
|*oneOf*|[AgentThinkModelsV1ResponseModelsItems2](#schemaagentthinkmodelsv1responsemodelsitems2)|false|none|Google models|
|*oneOf*|[AgentThinkModelsV1ResponseModelsItems3](#schemaagentthinkmodelsv1responsemodelsitems3)|false|none|Groq models|
|*oneOf*|[AgentThinkModelsV1ResponseModelsItems4](#schemaagentthinkmodelsv1responsemodelsitems4)|false|none|AWS Bedrock models (custom models accepted)|

<h2 id="tocS_AgentThinkModelsV1Response">AgentThinkModelsV1Response</h2>
<!-- backwards compatibility -->
<a id="schemaagentthinkmodelsv1response"></a>
<a id="schema_AgentThinkModelsV1Response"></a>
<a id="tocSagentthinkmodelsv1response"></a>
<a id="tocsagentthinkmodelsv1response"></a>

```json
{
  "models": [
    {
      "id": "gpt-5",
      "name": "string",
      "provider": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[[AgentThinkModelsV1ResponseModelsItems](#schemaagentthinkmodelsv1responsemodelsitems)]|true|none|none|

<h2 id="tocS_ErrorResponseTextError">ErrorResponseTextError</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponsetexterror"></a>
<a id="schema_ErrorResponseTextError"></a>
<a id="tocSerrorresponsetexterror"></a>
<a id="tocserrorresponsetexterror"></a>

```json
"string"
```

<h2 id="tocS_ErrorResponseLegacyError">ErrorResponseLegacyError</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponselegacyerror"></a>
<a id="schema_ErrorResponseLegacyError"></a>
<a id="tocSerrorresponselegacyerror"></a>
<a id="tocserrorresponselegacyerror"></a>

```json
{
  "err_code": "string",
  "err_msg": "string",
  "request_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|err_code|string|false|none|The error code|
|err_msg|string|false|none|The error message|
|request_id|string|false|none|The request ID|

<h2 id="tocS_ErrorResponseModernError">ErrorResponseModernError</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponsemodernerror"></a>
<a id="schema_ErrorResponseModernError"></a>
<a id="tocSerrorresponsemodernerror"></a>
<a id="tocserrorresponsemodernerror"></a>

```json
{
  "category": "string",
  "message": "string",
  "details": "string",
  "request_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The category of the error|
|message|string|false|none|A message about the error|
|details|string|false|none|A description of the error|
|request_id|string|false|none|The unique identifier of the request|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponseTextError](#schemaerrorresponsetexterror)|false|none|none|
|*oneOf*|[ErrorResponseLegacyError](#schemaerrorresponselegacyerror)|false|none|none|
|*oneOf*|[ErrorResponseModernError](#schemaerrorresponsemodernerror)|false|none|none|

<h2 id="tocS_CreateAgentConfigurationV1Request">CreateAgentConfigurationV1Request</h2>
<!-- backwards compatibility -->
<a id="schemacreateagentconfigurationv1request"></a>
<a id="schema_CreateAgentConfigurationV1Request"></a>
<a id="tocScreateagentconfigurationv1request"></a>
<a id="tocscreateagentconfigurationv1request"></a>

```json
{
  "config": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "api_version": 1
}
```

Request body for creating an agent configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|string|true|none|A valid JSON string representing the agent block of a Settings message|
|metadata|object|false|none|A map of arbitrary key-value pairs for labeling or organizing the agent configuration|
|api_version|integer|false|none|API version. Defaults to 1|

<h2 id="tocS_CreateAgentConfigurationV1ResponseConfig">CreateAgentConfigurationV1ResponseConfig</h2>
<!-- backwards compatibility -->
<a id="schemacreateagentconfigurationv1responseconfig"></a>
<a id="schema_CreateAgentConfigurationV1ResponseConfig"></a>
<a id="tocScreateagentconfigurationv1responseconfig"></a>
<a id="tocscreateagentconfigurationv1responseconfig"></a>

```json
{}
```

The parsed agent configuration object

<h2 id="tocS_CreateAgentConfigurationV1Response">CreateAgentConfigurationV1Response</h2>
<!-- backwards compatibility -->
<a id="schemacreateagentconfigurationv1response"></a>
<a id="schema_CreateAgentConfigurationV1Response"></a>
<a id="tocScreateagentconfigurationv1response"></a>
<a id="tocscreateagentconfigurationv1response"></a>

```json
{
  "agent_id": "string",
  "config": {},
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent_id|string|true|none|The unique identifier of the newly created agent configuration|
|config|[CreateAgentConfigurationV1ResponseConfig](#schemacreateagentconfigurationv1responseconfig)|true|none|The parsed agent configuration object|
|metadata|object|false|none|Metadata associated with the agent configuration|

<h2 id="tocS_AgentConfigurationV1Config">AgentConfigurationV1Config</h2>
<!-- backwards compatibility -->
<a id="schemaagentconfigurationv1config"></a>
<a id="schema_AgentConfigurationV1Config"></a>
<a id="tocSagentconfigurationv1config"></a>
<a id="tocsagentconfigurationv1config"></a>

```json
{}
```

The agent configuration object

<h2 id="tocS_AgentConfigurationV1">AgentConfigurationV1</h2>
<!-- backwards compatibility -->
<a id="schemaagentconfigurationv1"></a>
<a id="schema_AgentConfigurationV1"></a>
<a id="tocSagentconfigurationv1"></a>
<a id="tocsagentconfigurationv1"></a>

```json
{
  "agent_id": "string",
  "config": {},
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

A reusable agent configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent_id|string|true|none|The unique identifier of the agent configuration|
|config|[AgentConfigurationV1Config](#schemaagentconfigurationv1config)|true|none|The agent configuration object|
|metadata|object|false|none|A map of arbitrary key-value pairs for labeling or organizing the agent configuration|
|created_at|string(date-time)|false|none|Timestamp when the configuration was created|
|updated_at|string(date-time)|false|none|Timestamp when the configuration was last updated|

<h2 id="tocS_ListAgentConfigurationsV1Response">ListAgentConfigurationsV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistagentconfigurationsv1response"></a>
<a id="schema_ListAgentConfigurationsV1Response"></a>
<a id="tocSlistagentconfigurationsv1response"></a>
<a id="tocslistagentconfigurationsv1response"></a>

```json
{
  "agents": [
    {
      "agent_id": "string",
      "config": {},
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agents|[[AgentConfigurationV1](#schemaagentconfigurationv1)]|false|none|A list of agent configurations for the project|

<h2 id="tocS_UpdateAgentMetadataV1Request">UpdateAgentMetadataV1Request</h2>
<!-- backwards compatibility -->
<a id="schemaupdateagentmetadatav1request"></a>
<a id="schema_UpdateAgentMetadataV1Request"></a>
<a id="tocSupdateagentmetadatav1request"></a>
<a id="tocsupdateagentmetadatav1request"></a>

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Request body for updating agent configuration metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|true|none|A map of string key-value pairs to associate with this agent configuration|

<h2 id="tocS_DeleteAgentConfigurationV1Response">DeleteAgentConfigurationV1Response</h2>
<!-- backwards compatibility -->
<a id="schemadeleteagentconfigurationv1response"></a>
<a id="schema_DeleteAgentConfigurationV1Response"></a>
<a id="tocSdeleteagentconfigurationv1response"></a>
<a id="tocsdeleteagentconfigurationv1response"></a>

```json
{}
```

Confirmation that the agent configuration was deleted

<h2 id="tocS_CreateAgentVariableV1Request">CreateAgentVariableV1Request</h2>
<!-- backwards compatibility -->
<a id="schemacreateagentvariablev1request"></a>
<a id="schema_CreateAgentVariableV1Request"></a>
<a id="tocScreateagentvariablev1request"></a>
<a id="tocscreateagentvariablev1request"></a>

```json
{
  "key": "string",
  "value": null,
  "api_version": 1
}
```

Request body for creating an agent variable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The variable name, following the DG_<VARIABLE_NAME> format|
|value|object|true|none|The value to substitute. Can be any valid JSON type (string, number, boolean, object, or array)|
|api_version|integer|false|none|API version. Defaults to 1|

<h2 id="tocS_AgentVariableV1">AgentVariableV1</h2>
<!-- backwards compatibility -->
<a id="schemaagentvariablev1"></a>
<a id="schema_AgentVariableV1"></a>
<a id="tocSagentvariablev1"></a>
<a id="tocsagentvariablev1"></a>

```json
{
  "variable_id": "string",
  "key": "string",
  "value": null,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

A template variable for agent configurations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variable_id|string|true|none|The unique identifier of the variable|
|key|string|true|none|The variable name, following the DG_<VARIABLE_NAME> format|
|value|object|true|none|The value to substitute. Can be any valid JSON type|
|created_at|string(date-time)|false|none|Timestamp when the variable was created|
|updated_at|string(date-time)|false|none|Timestamp when the variable was last updated|

<h2 id="tocS_ListAgentVariablesV1Response">ListAgentVariablesV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistagentvariablesv1response"></a>
<a id="schema_ListAgentVariablesV1Response"></a>
<a id="tocSlistagentvariablesv1response"></a>
<a id="tocslistagentvariablesv1response"></a>

```json
{
  "variables": [
    {
      "variable_id": "string",
      "key": "string",
      "value": null,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variables|[[AgentVariableV1](#schemaagentvariablev1)]|false|none|A list of agent variables for the project|

<h2 id="tocS_UpdateAgentVariableV1Request">UpdateAgentVariableV1Request</h2>
<!-- backwards compatibility -->
<a id="schemaupdateagentvariablev1request"></a>
<a id="schema_UpdateAgentVariableV1Request"></a>
<a id="tocSupdateagentvariablev1request"></a>
<a id="tocsupdateagentvariablev1request"></a>

```json
{
  "value": null
}
```

Request body for updating an agent variable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|The new value to substitute|

<h2 id="tocS_DeleteAgentVariableV1Response">DeleteAgentVariableV1Response</h2>
<!-- backwards compatibility -->
<a id="schemadeleteagentvariablev1response"></a>
<a id="schema_DeleteAgentVariableV1Response"></a>
<a id="tocSdeleteagentvariablev1response"></a>
<a id="tocsdeleteagentvariablev1response"></a>

```json
{}
```

Confirmation that the agent variable was deleted

<h2 id="tocS_V1ListenPostParametersCallbackMethod">V1ListenPostParametersCallbackMethod</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparameterscallbackmethod"></a>
<a id="schema_V1ListenPostParametersCallbackMethod"></a>
<a id="tocSv1listenpostparameterscallbackmethod"></a>
<a id="tocsv1listenpostparameterscallbackmethod"></a>

```json
"POST"
```

<h2 id="tocS_V1ListenPostParametersExtra">V1ListenPostParametersExtra</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparametersextra"></a>
<a id="schema_V1ListenPostParametersExtra"></a>
<a id="tocSv1listenpostparametersextra"></a>
<a id="tocsv1listenpostparametersextra"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V1ListenPostParametersSummarize0">V1ListenPostParametersSummarize0</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparameterssummarize0"></a>
<a id="schema_V1ListenPostParametersSummarize0"></a>
<a id="tocSv1listenpostparameterssummarize0"></a>
<a id="tocsv1listenpostparameterssummarize0"></a>

```json
"v2"
```

<h2 id="tocS_V1ListenPostParametersSummarize">V1ListenPostParametersSummarize</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparameterssummarize"></a>
<a id="schema_V1ListenPostParametersSummarize"></a>
<a id="tocSv1listenpostparameterssummarize"></a>
<a id="tocsv1listenpostparameterssummarize"></a>

```json
"v2"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[V1ListenPostParametersSummarize0](#schemav1listenpostparameterssummarize0)|false|none|none|
|*oneOf*|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|v2|

<h2 id="tocS_V1ListenPostParametersTag">V1ListenPostParametersTag</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparameterstag"></a>
<a id="schema_V1ListenPostParametersTag"></a>
<a id="tocSv1listenpostparameterstag"></a>
<a id="tocsv1listenpostparameterstag"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V1ListenPostParametersCustomTopic">V1ListenPostParametersCustomTopic</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparameterscustomtopic"></a>
<a id="schema_V1ListenPostParametersCustomTopic"></a>
<a id="tocSv1listenpostparameterscustomtopic"></a>
<a id="tocsv1listenpostparameterscustomtopic"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V1ListenPostParametersCustomTopicMode">V1ListenPostParametersCustomTopicMode</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparameterscustomtopicmode"></a>
<a id="schema_V1ListenPostParametersCustomTopicMode"></a>
<a id="tocSv1listenpostparameterscustomtopicmode"></a>
<a id="tocsv1listenpostparameterscustomtopicmode"></a>

```json
"extended"
```

<h2 id="tocS_V1ListenPostParametersCustomIntent">V1ListenPostParametersCustomIntent</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparameterscustomintent"></a>
<a id="schema_V1ListenPostParametersCustomIntent"></a>
<a id="tocSv1listenpostparameterscustomintent"></a>
<a id="tocsv1listenpostparameterscustomintent"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V1ListenPostParametersCustomIntentMode">V1ListenPostParametersCustomIntentMode</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparameterscustomintentmode"></a>
<a id="schema_V1ListenPostParametersCustomIntentMode"></a>
<a id="tocSv1listenpostparameterscustomintentmode"></a>
<a id="tocsv1listenpostparameterscustomintentmode"></a>

```json
"extended"
```

<h2 id="tocS_V1ListenPostParametersDetectLanguage">V1ListenPostParametersDetectLanguage</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparametersdetectlanguage"></a>
<a id="schema_V1ListenPostParametersDetectLanguage"></a>
<a id="tocSv1listenpostparametersdetectlanguage"></a>
<a id="tocsv1listenpostparametersdetectlanguage"></a>

```json
false
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|boolean|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V1ListenPostParametersDiarizeModel">V1ListenPostParametersDiarizeModel</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparametersdiarizemodel"></a>
<a id="schema_V1ListenPostParametersDiarizeModel"></a>
<a id="tocSv1listenpostparametersdiarizemodel"></a>
<a id="tocsv1listenpostparametersdiarizemodel"></a>

```json
"latest"
```

<h2 id="tocS_V1ListenPostParametersEncoding">V1ListenPostParametersEncoding</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparametersencoding"></a>
<a id="schema_V1ListenPostParametersEncoding"></a>
<a id="tocSv1listenpostparametersencoding"></a>
<a id="tocsv1listenpostparametersencoding"></a>

```json
"linear16"
```

<h2 id="tocS_V1ListenPostParametersKeywords">V1ListenPostParametersKeywords</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparameterskeywords"></a>
<a id="schema_V1ListenPostParametersKeywords"></a>
<a id="tocSv1listenpostparameterskeywords"></a>
<a id="tocsv1listenpostparameterskeywords"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V1ListenPostParametersLanguageHint">V1ListenPostParametersLanguageHint</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparameterslanguagehint"></a>
<a id="schema_V1ListenPostParametersLanguageHint"></a>
<a id="tocSv1listenpostparameterslanguagehint"></a>
<a id="tocsv1listenpostparameterslanguagehint"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V1ListenPostParametersModel0">V1ListenPostParametersModel0</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparametersmodel0"></a>
<a id="schema_V1ListenPostParametersModel0"></a>
<a id="tocSv1listenpostparametersmodel0"></a>
<a id="tocsv1listenpostparametersmodel0"></a>

```json
"nova-3"
```

Our public models available to all accounts

<h2 id="tocS_V1ListenPostParametersModel">V1ListenPostParametersModel</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparametersmodel"></a>
<a id="schema_V1ListenPostParametersModel"></a>
<a id="tocSv1listenpostparametersmodel"></a>
<a id="tocsv1listenpostparametersmodel"></a>

```json
"nova-3"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[V1ListenPostParametersModel0](#schemav1listenpostparametersmodel0)|false|none|Our public models available to all accounts|
|*oneOf*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|nova-3|
|*oneOf*|nova-3-general|
|*oneOf*|nova-3-medical|
|*oneOf*|nova-2|
|*oneOf*|nova-2-general|
|*oneOf*|nova-2-meeting|
|*oneOf*|nova-2-finance|
|*oneOf*|nova-2-conversationalai|
|*oneOf*|nova-2-voicemail|
|*oneOf*|nova-2-video|
|*oneOf*|nova-2-medical|
|*oneOf*|nova-2-drivethru|
|*oneOf*|nova-2-automotive|
|*oneOf*|nova|
|*oneOf*|nova-general|
|*oneOf*|nova-phonecall|
|*oneOf*|nova-medical|
|*oneOf*|enhanced|
|*oneOf*|enhanced-general|
|*oneOf*|enhanced-meeting|
|*oneOf*|enhanced-phonecall|
|*oneOf*|enhanced-finance|
|*oneOf*|base|
|*oneOf*|meeting|
|*oneOf*|phonecall|
|*oneOf*|finance|
|*oneOf*|conversationalai|
|*oneOf*|voicemail|
|*oneOf*|video|

<h2 id="tocS_V1ListenPostParametersRedactSchemaOneOf1Items">V1ListenPostParametersRedactSchemaOneOf1Items</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparametersredactschemaoneof1items"></a>
<a id="schema_V1ListenPostParametersRedactSchemaOneOf1Items"></a>
<a id="tocSv1listenpostparametersredactschemaoneof1items"></a>
<a id="tocsv1listenpostparametersredactschemaoneof1items"></a>

```json
"pci"
```

<h2 id="tocS_V1ListenPostParametersRedact1">V1ListenPostParametersRedact1</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparametersredact1"></a>
<a id="schema_V1ListenPostParametersRedact1"></a>
<a id="tocSv1listenpostparametersredact1"></a>
<a id="tocsv1listenpostparametersredact1"></a>

```json
[
  "pci"
]
```

<h2 id="tocS_V1ListenPostParametersRedact">V1ListenPostParametersRedact</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparametersredact"></a>
<a id="schema_V1ListenPostParametersRedact"></a>
<a id="tocSv1listenpostparametersredact"></a>
<a id="tocsv1listenpostparametersredact"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[V1ListenPostParametersRedact1](#schemav1listenpostparametersredact1)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|pci|
|*oneOf*|pii|
|*oneOf*|numbers|

<h2 id="tocS_V1ListenPostParametersReplace">V1ListenPostParametersReplace</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparametersreplace"></a>
<a id="schema_V1ListenPostParametersReplace"></a>
<a id="tocSv1listenpostparametersreplace"></a>
<a id="tocsv1listenpostparametersreplace"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V1ListenPostParametersSearch">V1ListenPostParametersSearch</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparameterssearch"></a>
<a id="schema_V1ListenPostParametersSearch"></a>
<a id="tocSv1listenpostparameterssearch"></a>
<a id="tocsv1listenpostparameterssearch"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V1ListenPostParametersVersion0">V1ListenPostParametersVersion0</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparametersversion0"></a>
<a id="schema_V1ListenPostParametersVersion0"></a>
<a id="tocSv1listenpostparametersversion0"></a>
<a id="tocsv1listenpostparametersversion0"></a>

```json
"latest"
```

Use the latest version of a model

<h2 id="tocS_V1ListenPostParametersVersion">V1ListenPostParametersVersion</h2>
<!-- backwards compatibility -->
<a id="schemav1listenpostparametersversion"></a>
<a id="schema_V1ListenPostParametersVersion"></a>
<a id="tocSv1listenpostparametersversion"></a>
<a id="tocsv1listenpostparametersversion"></a>

```json
"latest"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[V1ListenPostParametersVersion0](#schemav1listenpostparametersversion0)|false|none|Use the latest version of a model|
|*oneOf*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|latest|

<h2 id="tocS_ListenV1RequestUrl">ListenV1RequestUrl</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1requesturl"></a>
<a id="schema_ListenV1RequestUrl"></a>
<a id="tocSlistenv1requesturl"></a>
<a id="tocslistenv1requesturl"></a>

```json
{
  "url": "http://example.com"
}
```

Audio file URL to transcribe

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|none|

<h2 id="tocS_ListenV1ResponseMetadataModelInfo">ListenV1ResponseMetadataModelInfo</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responsemetadatamodelinfo"></a>
<a id="schema_ListenV1ResponseMetadataModelInfo"></a>
<a id="tocSlistenv1responsemetadatamodelinfo"></a>
<a id="tocslistenv1responsemetadatamodelinfo"></a>

```json
{}
```

<h2 id="tocS_ListenV1ResponseMetadataDiarizeInfo">ListenV1ResponseMetadataDiarizeInfo</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responsemetadatadiarizeinfo"></a>
<a id="schema_ListenV1ResponseMetadataDiarizeInfo"></a>
<a id="tocSlistenv1responsemetadatadiarizeinfo"></a>
<a id="tocslistenv1responsemetadatadiarizeinfo"></a>

```json
{
  "model_uuid": "string",
  "arch": "string"
}
```

The diarizer that produced the speaker labels. Present only when a diarizer ran.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_uuid|string|true|none|The diarizer model UUID|
|arch|string|true|none|The diarizer arch, such as `v1` or `v2`|

<h2 id="tocS_ListenV1ResponseMetadataSummaryInfo">ListenV1ResponseMetadataSummaryInfo</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responsemetadatasummaryinfo"></a>
<a id="schema_ListenV1ResponseMetadataSummaryInfo"></a>
<a id="tocSlistenv1responsemetadatasummaryinfo"></a>
<a id="tocslistenv1responsemetadatasummaryinfo"></a>

```json
{
  "model_uuid": "string",
  "input_tokens": 0,
  "output_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_uuid|string|false|none|none|
|input_tokens|integer|false|none|none|
|output_tokens|integer|false|none|none|

<h2 id="tocS_ListenV1ResponseMetadataSentimentInfo">ListenV1ResponseMetadataSentimentInfo</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responsemetadatasentimentinfo"></a>
<a id="schema_ListenV1ResponseMetadataSentimentInfo"></a>
<a id="tocSlistenv1responsemetadatasentimentinfo"></a>
<a id="tocslistenv1responsemetadatasentimentinfo"></a>

```json
{
  "model_uuid": "string",
  "input_tokens": 0,
  "output_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_uuid|string|false|none|none|
|input_tokens|integer|false|none|none|
|output_tokens|integer|false|none|none|

<h2 id="tocS_ListenV1ResponseMetadataTopicsInfo">ListenV1ResponseMetadataTopicsInfo</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responsemetadatatopicsinfo"></a>
<a id="schema_ListenV1ResponseMetadataTopicsInfo"></a>
<a id="tocSlistenv1responsemetadatatopicsinfo"></a>
<a id="tocslistenv1responsemetadatatopicsinfo"></a>

```json
{
  "model_uuid": "string",
  "input_tokens": 0,
  "output_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_uuid|string|false|none|none|
|input_tokens|integer|false|none|none|
|output_tokens|integer|false|none|none|

<h2 id="tocS_ListenV1ResponseMetadataIntentsInfo">ListenV1ResponseMetadataIntentsInfo</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responsemetadataintentsinfo"></a>
<a id="schema_ListenV1ResponseMetadataIntentsInfo"></a>
<a id="tocSlistenv1responsemetadataintentsinfo"></a>
<a id="tocslistenv1responsemetadataintentsinfo"></a>

```json
{
  "model_uuid": "string",
  "input_tokens": 0,
  "output_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_uuid|string|false|none|none|
|input_tokens|integer|false|none|none|
|output_tokens|integer|false|none|none|

<h2 id="tocS_ListenV1ResponseMetadata">ListenV1ResponseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responsemetadata"></a>
<a id="schema_ListenV1ResponseMetadata"></a>
<a id="tocSlistenv1responsemetadata"></a>
<a id="tocslistenv1responsemetadata"></a>

```json
{
  "transaction_key": "deprecated",
  "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sha256": "string",
  "created": "1970-01-01T00:00:00Z",
  "duration": 0,
  "channels": 0,
  "models": [
    "string"
  ],
  "model_info": {},
  "diarize_info": {
    "model_uuid": "string",
    "arch": "string"
  },
  "summary_info": {
    "model_uuid": "string",
    "input_tokens": 0,
    "output_tokens": 0
  },
  "sentiment_info": {
    "model_uuid": "string",
    "input_tokens": 0,
    "output_tokens": 0
  },
  "topics_info": {
    "model_uuid": "string",
    "input_tokens": 0,
    "output_tokens": 0
  },
  "intents_info": {
    "model_uuid": "string",
    "input_tokens": 0,
    "output_tokens": 0
  },
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction_key|string|false|none|**Deprecated.**|
|request_id|string(uuid)|true|none|none|
|sha256|string|true|none|none|
|created|string(date-time)|true|none|none|
|duration|number(double)|true|none|none|
|channels|integer|true|none|none|
|models|[string]|true|none|none|
|model_info|[ListenV1ResponseMetadataModelInfo](#schemalistenv1responsemetadatamodelinfo)|true|none|none|
|diarize_info|[ListenV1ResponseMetadataDiarizeInfo](#schemalistenv1responsemetadatadiarizeinfo)|false|none|The diarizer that produced the speaker labels. Present only when a diarizer ran.|
|summary_info|[ListenV1ResponseMetadataSummaryInfo](#schemalistenv1responsemetadatasummaryinfo)|false|none|none|
|sentiment_info|[ListenV1ResponseMetadataSentimentInfo](#schemalistenv1responsemetadatasentimentinfo)|false|none|none|
|topics_info|[ListenV1ResponseMetadataTopicsInfo](#schemalistenv1responsemetadatatopicsinfo)|false|none|none|
|intents_info|[ListenV1ResponseMetadataIntentsInfo](#schemalistenv1responsemetadataintentsinfo)|false|none|none|
|tags|[string]|false|none|none|

<h2 id="tocS_ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems">ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultschannelsitemssearchitemshitsitems"></a>
<a id="schema_ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems"></a>
<a id="tocSlistenv1responseresultschannelsitemssearchitemshitsitems"></a>
<a id="tocslistenv1responseresultschannelsitemssearchitemshitsitems"></a>

```json
{
  "confidence": "string",
  "start": "string",
  "end": "string",
  "snippet": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|string|false|none|none|
|start|string|false|none|none|
|end|string|false|none|none|
|snippet|string|false|none|none|

<h2 id="tocS_ListenV1ResponseResultsChannelsItemsSearchItems">ListenV1ResponseResultsChannelsItemsSearchItems</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultschannelsitemssearchitems"></a>
<a id="schema_ListenV1ResponseResultsChannelsItemsSearchItems"></a>
<a id="tocSlistenv1responseresultschannelsitemssearchitems"></a>
<a id="tocslistenv1responseresultschannelsitemssearchitems"></a>

```json
{
  "query": "string",
  "hits": [
    {
      "confidence": "string",
      "start": "string",
      "end": "string",
      "snippet": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|false|none|none|
|hits|[[ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems](#schemalistenv1responseresultschannelsitemssearchitemshitsitems)]|false|none|none|

<h2 id="tocS_ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems">ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultschannelsitemsalternativesitemswordsitems"></a>
<a id="schema_ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems"></a>
<a id="tocSlistenv1responseresultschannelsitemsalternativesitemswordsitems"></a>
<a id="tocslistenv1responseresultschannelsitemsalternativesitemswordsitems"></a>

```json
{
  "word": "string",
  "start": "string",
  "end": "string",
  "confidence": "string",
  "language": "string",
  "speaker": 0,
  "speaker_confidence": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|word|string|false|none|none|
|start|string|false|none|none|
|end|string|false|none|none|
|confidence|string|false|none|none|
|language|string|false|none|[BCP-47](https://tools.ietf.org/html/bcp47) language tag of the word's detected language. Only present when `language=multi`. Can be absent on audio that switches languages.|
|speaker|integer|false|none|The speaker of the word, present when diarization is enabled|
|speaker_confidence|string|false|none|Confidence in the speaker assignment. Returned only for pre-recorded diarization; not available for streaming|

<h2 id="tocS_ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems">ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultschannelsitemsalternativesitemsparagraphsparagraphsitemssentencesitems"></a>
<a id="schema_ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems"></a>
<a id="tocSlistenv1responseresultschannelsitemsalternativesitemsparagraphsparagraphsitemssentencesitems"></a>
<a id="tocslistenv1responseresultschannelsitemsalternativesitemsparagraphsparagraphsitemssentencesitems"></a>

```json
{
  "text": "string",
  "start": "string",
  "end": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|none|
|start|string|false|none|none|
|end|string|false|none|none|

<h2 id="tocS_ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems">ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultschannelsitemsalternativesitemsparagraphsparagraphsitems"></a>
<a id="schema_ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems"></a>
<a id="tocSlistenv1responseresultschannelsitemsalternativesitemsparagraphsparagraphsitems"></a>
<a id="tocslistenv1responseresultschannelsitemsalternativesitemsparagraphsparagraphsitems"></a>

```json
{
  "sentences": [
    {
      "text": "string",
      "start": "string",
      "end": "string"
    }
  ],
  "speaker": 0,
  "num_words": 0,
  "start": "string",
  "end": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentences|[[ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems](#schemalistenv1responseresultschannelsitemsalternativesitemsparagraphsparagraphsitemssentencesitems)]|false|none|none|
|speaker|integer|false|none|none|
|num_words|integer|false|none|none|
|start|string|false|none|none|
|end|string|false|none|none|

<h2 id="tocS_ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs">ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultschannelsitemsalternativesitemsparagraphs"></a>
<a id="schema_ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs"></a>
<a id="tocSlistenv1responseresultschannelsitemsalternativesitemsparagraphs"></a>
<a id="tocslistenv1responseresultschannelsitemsalternativesitemsparagraphs"></a>

```json
{
  "transcript": "string",
  "paragraphs": [
    {
      "sentences": [
        {
          "text": "string",
          "start": "string",
          "end": "string"
        }
      ],
      "speaker": 0,
      "num_words": 0,
      "start": "string",
      "end": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transcript|string|false|none|none|
|paragraphs|[[ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems](#schemalistenv1responseresultschannelsitemsalternativesitemsparagraphsparagraphsitems)]|false|none|none|

<h2 id="tocS_ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems">ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultschannelsitemsalternativesitemsentitiesitems"></a>
<a id="schema_ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems"></a>
<a id="tocSlistenv1responseresultschannelsitemsalternativesitemsentitiesitems"></a>
<a id="tocslistenv1responseresultschannelsitemsalternativesitemsentitiesitems"></a>

```json
{
  "label": "string",
  "value": "string",
  "raw_value": "string",
  "confidence": "string",
  "start_word": "string",
  "end_word": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|none|
|value|string|false|none|none|
|raw_value|string|false|none|none|
|confidence|string|false|none|none|
|start_word|string|false|none|none|
|end_word|string|false|none|none|

<h2 id="tocS_ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems">ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultschannelsitemsalternativesitemssummariesitems"></a>
<a id="schema_ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems"></a>
<a id="tocSlistenv1responseresultschannelsitemsalternativesitemssummariesitems"></a>
<a id="tocslistenv1responseresultschannelsitemsalternativesitemssummariesitems"></a>

```json
{
  "summary": "string",
  "start_word": "string",
  "end_word": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|string|false|none|none|
|start_word|string|false|none|none|
|end_word|string|false|none|none|

<h2 id="tocS_ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems">ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultschannelsitemsalternativesitemstopicsitems"></a>
<a id="schema_ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems"></a>
<a id="tocSlistenv1responseresultschannelsitemsalternativesitemstopicsitems"></a>
<a id="tocslistenv1responseresultschannelsitemsalternativesitemstopicsitems"></a>

```json
{
  "text": "string",
  "start_word": "string",
  "end_word": "string",
  "topics": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|none|
|start_word|string|false|none|none|
|end_word|string|false|none|none|
|topics|[string]|false|none|none|

<h2 id="tocS_ListenV1ResponseResultsChannelsItemsAlternativesItems">ListenV1ResponseResultsChannelsItemsAlternativesItems</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultschannelsitemsalternativesitems"></a>
<a id="schema_ListenV1ResponseResultsChannelsItemsAlternativesItems"></a>
<a id="tocSlistenv1responseresultschannelsitemsalternativesitems"></a>
<a id="tocslistenv1responseresultschannelsitemsalternativesitems"></a>

```json
{
  "transcript": "string",
  "confidence": "string",
  "languages": [
    "string"
  ],
  "languages_hinted": [
    "string"
  ],
  "words": [
    {
      "word": "string",
      "start": "string",
      "end": "string",
      "confidence": "string",
      "language": "string",
      "speaker": 0,
      "speaker_confidence": "string"
    }
  ],
  "paragraphs": {
    "transcript": "string",
    "paragraphs": [
      {
        "sentences": [
          {
            "text": "string",
            "start": "string",
            "end": "string"
          }
        ],
        "speaker": 0,
        "num_words": 0,
        "start": "string",
        "end": "string"
      }
    ]
  },
  "entities": [
    {
      "label": "string",
      "value": "string",
      "raw_value": "string",
      "confidence": "string",
      "start_word": "string",
      "end_word": "string"
    }
  ],
  "summaries": [
    {
      "summary": "string",
      "start_word": "string",
      "end_word": "string"
    }
  ],
  "topics": [
    {
      "text": "string",
      "start_word": "string",
      "end_word": "string",
      "topics": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transcript|string|false|none|none|
|confidence|string|false|none|none|
|languages|[string]|false|none|[BCP-47](https://tools.ietf.org/html/bcp47) language tags of the languages detected in the transcript, sorted by word count in descending order. Only present when `language=multi`. Can be absent on audio that switches languages.|
|languages_hinted|[string]|false|none|The `language_hint` values for the request, normalized: codes are returned in canonical form (`ES` → `es`, `zh-hk` → `zh-HK`), and a regional code the model has no tag for is returned as its base language (`en-GB` → `en`). Returned on every Nova-3 multilingual response (`model=nova-3&language=multi`); an empty array when no `language_hint` was sent.|
|words|[[ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems](#schemalistenv1responseresultschannelsitemsalternativesitemswordsitems)]|false|none|none|
|paragraphs|[ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs](#schemalistenv1responseresultschannelsitemsalternativesitemsparagraphs)|false|none|none|
|entities|[[ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems](#schemalistenv1responseresultschannelsitemsalternativesitemsentitiesitems)]|false|none|none|
|summaries|[[ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems](#schemalistenv1responseresultschannelsitemsalternativesitemssummariesitems)]|false|none|none|
|topics|[[ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems](#schemalistenv1responseresultschannelsitemsalternativesitemstopicsitems)]|false|none|none|

<h2 id="tocS_ListenV1ResponseResultsChannelsItems">ListenV1ResponseResultsChannelsItems</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultschannelsitems"></a>
<a id="schema_ListenV1ResponseResultsChannelsItems"></a>
<a id="tocSlistenv1responseresultschannelsitems"></a>
<a id="tocslistenv1responseresultschannelsitems"></a>

```json
{
  "search": [
    {
      "query": "string",
      "hits": [
        {
          "confidence": "string",
          "start": "string",
          "end": "string",
          "snippet": "string"
        }
      ]
    }
  ],
  "alternatives": [
    {
      "transcript": "string",
      "confidence": "string",
      "languages": [
        "string"
      ],
      "languages_hinted": [
        "string"
      ],
      "words": [
        {
          "word": "string",
          "start": "string",
          "end": "string",
          "confidence": "string",
          "language": "string",
          "speaker": 0,
          "speaker_confidence": "string"
        }
      ],
      "paragraphs": {
        "transcript": "string",
        "paragraphs": [
          {
            "sentences": [
              {
                "text": "string",
                "start": "string",
                "end": "string"
              }
            ],
            "speaker": 0,
            "num_words": 0,
            "start": "string",
            "end": "string"
          }
        ]
      },
      "entities": [
        {
          "label": "string",
          "value": "string",
          "raw_value": "string",
          "confidence": "string",
          "start_word": "string",
          "end_word": "string"
        }
      ],
      "summaries": [
        {
          "summary": "string",
          "start_word": "string",
          "end_word": "string"
        }
      ],
      "topics": [
        {
          "text": "string",
          "start_word": "string",
          "end_word": "string",
          "topics": [
            "string"
          ]
        }
      ]
    }
  ],
  "detected_language": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|search|[[ListenV1ResponseResultsChannelsItemsSearchItems](#schemalistenv1responseresultschannelsitemssearchitems)]|false|none|none|
|alternatives|[[ListenV1ResponseResultsChannelsItemsAlternativesItems](#schemalistenv1responseresultschannelsitemsalternativesitems)]|false|none|none|
|detected_language|string|false|none|none|

<h2 id="tocS_ListenV1ResponseResultsChannels">ListenV1ResponseResultsChannels</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultschannels"></a>
<a id="schema_ListenV1ResponseResultsChannels"></a>
<a id="tocSlistenv1responseresultschannels"></a>
<a id="tocslistenv1responseresultschannels"></a>

```json
[
  {
    "search": [
      {
        "query": "string",
        "hits": [
          {
            "confidence": "string",
            "start": "string",
            "end": "string",
            "snippet": "string"
          }
        ]
      }
    ],
    "alternatives": [
      {
        "transcript": "string",
        "confidence": "string",
        "languages": [
          "string"
        ],
        "languages_hinted": [
          "string"
        ],
        "words": [
          {
            "word": "string",
            "start": "string",
            "end": "string",
            "confidence": "string",
            "language": "string",
            "speaker": 0,
            "speaker_confidence": "string"
          }
        ],
        "paragraphs": {
          "transcript": "string",
          "paragraphs": [
            {
              "sentences": [
                {
                  "text": "string",
                  "start": "string",
                  "end": "string"
                }
              ],
              "speaker": 0,
              "num_words": 0,
              "start": "string",
              "end": "string"
            }
          ]
        },
        "entities": [
          {
            "label": "string",
            "value": "string",
            "raw_value": "string",
            "confidence": "string",
            "start_word": "string",
            "end_word": "string"
          }
        ],
        "summaries": [
          {
            "summary": "string",
            "start_word": "string",
            "end_word": "string"
          }
        ],
        "topics": [
          {
            "text": "string",
            "start_word": "string",
            "end_word": "string",
            "topics": [
              "string"
            ]
          }
        ]
      }
    ],
    "detected_language": "string"
  }
]
```

<h2 id="tocS_ListenV1ResponseResultsUtterancesItemsWordsItems">ListenV1ResponseResultsUtterancesItemsWordsItems</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultsutterancesitemswordsitems"></a>
<a id="schema_ListenV1ResponseResultsUtterancesItemsWordsItems"></a>
<a id="tocSlistenv1responseresultsutterancesitemswordsitems"></a>
<a id="tocslistenv1responseresultsutterancesitemswordsitems"></a>

```json
{
  "word": "string",
  "start": "string",
  "end": "string",
  "confidence": "string",
  "language": "string",
  "speaker": 0,
  "speaker_confidence": "string",
  "punctuated_word": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|word|string|false|none|none|
|start|string|false|none|none|
|end|string|false|none|none|
|confidence|string|false|none|none|
|language|string|false|none|[BCP-47](https://tools.ietf.org/html/bcp47) language tag of the word's detected language. Only present when `language=multi`. Can be absent on audio that switches languages.|
|speaker|integer|false|none|none|
|speaker_confidence|string|false|none|none|
|punctuated_word|string|false|none|none|

<h2 id="tocS_ListenV1ResponseResultsUtterancesItems">ListenV1ResponseResultsUtterancesItems</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultsutterancesitems"></a>
<a id="schema_ListenV1ResponseResultsUtterancesItems"></a>
<a id="tocSlistenv1responseresultsutterancesitems"></a>
<a id="tocslistenv1responseresultsutterancesitems"></a>

```json
{
  "start": "string",
  "end": "string",
  "confidence": "string",
  "channel": 0,
  "transcript": "string",
  "languages": [
    "string"
  ],
  "words": [
    {
      "word": "string",
      "start": "string",
      "end": "string",
      "confidence": "string",
      "language": "string",
      "speaker": 0,
      "speaker_confidence": "string",
      "punctuated_word": "string"
    }
  ],
  "speaker": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string|false|none|none|
|end|string|false|none|none|
|confidence|string|false|none|none|
|channel|integer|false|none|none|
|transcript|string|false|none|none|
|languages|[string]|false|none|[BCP-47](https://tools.ietf.org/html/bcp47) language tags of the languages detected in the utterance, sorted by word count in descending order. Only present when `language=multi`.|
|words|[[ListenV1ResponseResultsUtterancesItemsWordsItems](#schemalistenv1responseresultsutterancesitemswordsitems)]|false|none|none|
|speaker|integer|false|none|none|
|id|string(uuid)|false|none|none|

<h2 id="tocS_ListenV1ResponseResultsUtterances">ListenV1ResponseResultsUtterances</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultsutterances"></a>
<a id="schema_ListenV1ResponseResultsUtterances"></a>
<a id="tocSlistenv1responseresultsutterances"></a>
<a id="tocslistenv1responseresultsutterances"></a>

```json
[
  {
    "start": "string",
    "end": "string",
    "confidence": "string",
    "channel": 0,
    "transcript": "string",
    "languages": [
      "string"
    ],
    "words": [
      {
        "word": "string",
        "start": "string",
        "end": "string",
        "confidence": "string",
        "language": "string",
        "speaker": 0,
        "speaker_confidence": "string",
        "punctuated_word": "string"
      }
    ],
    "speaker": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
]
```

<h2 id="tocS_ListenV1ResponseResultsSummary">ListenV1ResponseResultsSummary</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresultssummary"></a>
<a id="schema_ListenV1ResponseResultsSummary"></a>
<a id="tocSlistenv1responseresultssummary"></a>
<a id="tocslistenv1responseresultssummary"></a>

```json
{
  "result": "string",
  "short": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|false|none|none|
|short|string|false|none|none|

<h2 id="tocS_SharedTopicsSegmentsItemsTopicsItems">SharedTopicsSegmentsItemsTopicsItems</h2>
<!-- backwards compatibility -->
<a id="schemasharedtopicssegmentsitemstopicsitems"></a>
<a id="schema_SharedTopicsSegmentsItemsTopicsItems"></a>
<a id="tocSsharedtopicssegmentsitemstopicsitems"></a>
<a id="tocssharedtopicssegmentsitemstopicsitems"></a>

```json
{
  "topic": "string",
  "confidence_score": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|string|false|none|none|
|confidence_score|string|false|none|none|

<h2 id="tocS_SharedTopicsSegmentsItems">SharedTopicsSegmentsItems</h2>
<!-- backwards compatibility -->
<a id="schemasharedtopicssegmentsitems"></a>
<a id="schema_SharedTopicsSegmentsItems"></a>
<a id="tocSsharedtopicssegmentsitems"></a>
<a id="tocssharedtopicssegmentsitems"></a>

```json
{
  "text": "string",
  "start_word": 0,
  "end_word": 0,
  "topics": [
    {
      "topic": "string",
      "confidence_score": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|none|
|start_word|number(double)|false|none|none|
|end_word|number(double)|false|none|none|
|topics|[[SharedTopicsSegmentsItemsTopicsItems](#schemasharedtopicssegmentsitemstopicsitems)]|false|none|none|

<h2 id="tocS_SharedTopics">SharedTopics</h2>
<!-- backwards compatibility -->
<a id="schemasharedtopics"></a>
<a id="schema_SharedTopics"></a>
<a id="tocSsharedtopics"></a>
<a id="tocssharedtopics"></a>

```json
{
  "segments": [
    {
      "text": "string",
      "start_word": 0,
      "end_word": 0,
      "topics": [
        {
          "topic": "string",
          "confidence_score": "string"
        }
      ]
    }
  ]
}
```

Output whenever `topics=true` is used

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segments|[[SharedTopicsSegmentsItems](#schemasharedtopicssegmentsitems)]|false|none|none|

<h2 id="tocS_SharedIntentsSegmentsItemsIntentsItems">SharedIntentsSegmentsItemsIntentsItems</h2>
<!-- backwards compatibility -->
<a id="schemasharedintentssegmentsitemsintentsitems"></a>
<a id="schema_SharedIntentsSegmentsItemsIntentsItems"></a>
<a id="tocSsharedintentssegmentsitemsintentsitems"></a>
<a id="tocssharedintentssegmentsitemsintentsitems"></a>

```json
{
  "intent": "string",
  "confidence_score": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intent|string|false|none|none|
|confidence_score|string|false|none|none|

<h2 id="tocS_SharedIntentsSegmentsItems">SharedIntentsSegmentsItems</h2>
<!-- backwards compatibility -->
<a id="schemasharedintentssegmentsitems"></a>
<a id="schema_SharedIntentsSegmentsItems"></a>
<a id="tocSsharedintentssegmentsitems"></a>
<a id="tocssharedintentssegmentsitems"></a>

```json
{
  "text": "string",
  "start_word": 0,
  "end_word": 0,
  "intents": [
    {
      "intent": "string",
      "confidence_score": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|none|
|start_word|number(double)|false|none|none|
|end_word|number(double)|false|none|none|
|intents|[[SharedIntentsSegmentsItemsIntentsItems](#schemasharedintentssegmentsitemsintentsitems)]|false|none|none|

<h2 id="tocS_SharedIntents">SharedIntents</h2>
<!-- backwards compatibility -->
<a id="schemasharedintents"></a>
<a id="schema_SharedIntents"></a>
<a id="tocSsharedintents"></a>
<a id="tocssharedintents"></a>

```json
{
  "segments": [
    {
      "text": "string",
      "start_word": 0,
      "end_word": 0,
      "intents": [
        {
          "intent": "string",
          "confidence_score": "string"
        }
      ]
    }
  ]
}
```

Output whenever `intents=true` is used

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segments|[[SharedIntentsSegmentsItems](#schemasharedintentssegmentsitems)]|false|none|none|

<h2 id="tocS_SharedSentimentsSegmentsItems">SharedSentimentsSegmentsItems</h2>
<!-- backwards compatibility -->
<a id="schemasharedsentimentssegmentsitems"></a>
<a id="schema_SharedSentimentsSegmentsItems"></a>
<a id="tocSsharedsentimentssegmentsitems"></a>
<a id="tocssharedsentimentssegmentsitems"></a>

```json
{
  "text": "string",
  "start_word": 0,
  "end_word": 0,
  "sentiment": "string",
  "sentiment_score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|none|
|start_word|number(double)|false|none|none|
|end_word|number(double)|false|none|none|
|sentiment|string|false|none|none|
|sentiment_score|number(double)|false|none|none|

<h2 id="tocS_SharedSentimentsAverage">SharedSentimentsAverage</h2>
<!-- backwards compatibility -->
<a id="schemasharedsentimentsaverage"></a>
<a id="schema_SharedSentimentsAverage"></a>
<a id="tocSsharedsentimentsaverage"></a>
<a id="tocssharedsentimentsaverage"></a>

```json
{
  "sentiment": "string",
  "sentiment_score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentiment|string|false|none|none|
|sentiment_score|number(double)|false|none|none|

<h2 id="tocS_SharedSentiments">SharedSentiments</h2>
<!-- backwards compatibility -->
<a id="schemasharedsentiments"></a>
<a id="schema_SharedSentiments"></a>
<a id="tocSsharedsentiments"></a>
<a id="tocssharedsentiments"></a>

```json
{
  "segments": [
    {
      "text": "string",
      "start_word": 0,
      "end_word": 0,
      "sentiment": "string",
      "sentiment_score": 0
    }
  ],
  "average": {
    "sentiment": "string",
    "sentiment_score": 0
  }
}
```

Output whenever `sentiment=true` is used

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segments|[[SharedSentimentsSegmentsItems](#schemasharedsentimentssegmentsitems)]|false|none|none|
|average|[SharedSentimentsAverage](#schemasharedsentimentsaverage)|false|none|none|

<h2 id="tocS_ListenV1ResponseResults">ListenV1ResponseResults</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1responseresults"></a>
<a id="schema_ListenV1ResponseResults"></a>
<a id="tocSlistenv1responseresults"></a>
<a id="tocslistenv1responseresults"></a>

```json
{
  "channels": [
    {
      "search": [
        {
          "query": "string",
          "hits": [
            {
              "confidence": "string",
              "start": "string",
              "end": "string",
              "snippet": "string"
            }
          ]
        }
      ],
      "alternatives": [
        {
          "transcript": "string",
          "confidence": "string",
          "languages": [
            "string"
          ],
          "languages_hinted": [
            "string"
          ],
          "words": [
            {
              "word": "string",
              "start": "string",
              "end": "string",
              "confidence": "string",
              "language": "string",
              "speaker": 0,
              "speaker_confidence": "string"
            }
          ],
          "paragraphs": {
            "transcript": "string",
            "paragraphs": [
              {
                "sentences": [
                  {
                    "text": "string",
                    "start": "string",
                    "end": "string"
                  }
                ],
                "speaker": 0,
                "num_words": 0,
                "start": "string",
                "end": "string"
              }
            ]
          },
          "entities": [
            {
              "label": "string",
              "value": "string",
              "raw_value": "string",
              "confidence": "string",
              "start_word": "string",
              "end_word": "string"
            }
          ],
          "summaries": [
            {
              "summary": "string",
              "start_word": "string",
              "end_word": "string"
            }
          ],
          "topics": [
            {
              "text": "string",
              "start_word": "string",
              "end_word": "string",
              "topics": [
                "string"
              ]
            }
          ]
        }
      ],
      "detected_language": "string"
    }
  ],
  "utterances": [
    {
      "start": "string",
      "end": "string",
      "confidence": "string",
      "channel": 0,
      "transcript": "string",
      "languages": [
        "string"
      ],
      "words": [
        {
          "word": "string",
          "start": "string",
          "end": "string",
          "confidence": "string",
          "language": "string",
          "speaker": 0,
          "speaker_confidence": "string",
          "punctuated_word": "string"
        }
      ],
      "speaker": 0,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "summary": {
    "result": "string",
    "short": "string"
  },
  "topics": {
    "segments": [
      {
        "text": "string",
        "start_word": 0,
        "end_word": 0,
        "topics": [
          {
            "topic": "string",
            "confidence_score": "string"
          }
        ]
      }
    ]
  },
  "intents": {
    "segments": [
      {
        "text": "string",
        "start_word": 0,
        "end_word": 0,
        "intents": [
          {
            "intent": "string",
            "confidence_score": "string"
          }
        ]
      }
    ]
  },
  "sentiments": {
    "segments": [
      {
        "text": "string",
        "start_word": 0,
        "end_word": 0,
        "sentiment": "string",
        "sentiment_score": 0
      }
    ],
    "average": {
      "sentiment": "string",
      "sentiment_score": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[ListenV1ResponseResultsChannels](#schemalistenv1responseresultschannels)|true|none|none|
|utterances|[ListenV1ResponseResultsUtterances](#schemalistenv1responseresultsutterances)|false|none|none|
|summary|[ListenV1ResponseResultsSummary](#schemalistenv1responseresultssummary)|false|none|none|
|topics|[SharedTopics](#schemasharedtopics)|false|none|Output whenever `topics=true` is used|
|intents|[SharedIntents](#schemasharedintents)|false|none|Output whenever `intents=true` is used|
|sentiments|[SharedSentiments](#schemasharedsentiments)|false|none|Output whenever `sentiment=true` is used|

<h2 id="tocS_ListenV1Response">ListenV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1response"></a>
<a id="schema_ListenV1Response"></a>
<a id="tocSlistenv1response"></a>
<a id="tocslistenv1response"></a>

```json
{
  "metadata": {
    "transaction_key": "deprecated",
    "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sha256": "string",
    "created": "1970-01-01T00:00:00Z",
    "duration": 0,
    "channels": 0,
    "models": [
      "string"
    ],
    "model_info": {},
    "diarize_info": {
      "model_uuid": "string",
      "arch": "string"
    },
    "summary_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "sentiment_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "topics_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "intents_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "tags": [
      "string"
    ]
  },
  "results": {
    "channels": [
      {
        "search": [
          {
            "query": "string",
            "hits": [
              {
                "confidence": "string",
                "start": "string",
                "end": "string",
                "snippet": "string"
              }
            ]
          }
        ],
        "alternatives": [
          {
            "transcript": "string",
            "confidence": "string",
            "languages": [
              "string"
            ],
            "languages_hinted": [
              "string"
            ],
            "words": [
              {
                "word": "string",
                "start": "string",
                "end": "string",
                "confidence": "string",
                "language": "string",
                "speaker": 0,
                "speaker_confidence": "string"
              }
            ],
            "paragraphs": {
              "transcript": "string",
              "paragraphs": [
                {
                  "sentences": [
                    {
                      "text": "string",
                      "start": "string",
                      "end": "string"
                    }
                  ],
                  "speaker": 0,
                  "num_words": 0,
                  "start": "string",
                  "end": "string"
                }
              ]
            },
            "entities": [
              {
                "label": "string",
                "value": "string",
                "raw_value": "string",
                "confidence": "string",
                "start_word": "string",
                "end_word": "string"
              }
            ],
            "summaries": [
              {
                "summary": "string",
                "start_word": "string",
                "end_word": "string"
              }
            ],
            "topics": [
              {
                "text": "string",
                "start_word": "string",
                "end_word": "string",
                "topics": [
                  "string"
                ]
              }
            ]
          }
        ],
        "detected_language": "string"
      }
    ],
    "utterances": [
      {
        "start": "string",
        "end": "string",
        "confidence": "string",
        "channel": 0,
        "transcript": "string",
        "languages": [
          "string"
        ],
        "words": [
          {
            "word": "string",
            "start": "string",
            "end": "string",
            "confidence": "string",
            "language": "string",
            "speaker": 0,
            "speaker_confidence": "string",
            "punctuated_word": "string"
          }
        ],
        "speaker": 0,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "summary": {
      "result": "string",
      "short": "string"
    },
    "topics": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "topics": [
            {
              "topic": "string",
              "confidence_score": "string"
            }
          ]
        }
      ]
    },
    "intents": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "intents": [
            {
              "intent": "string",
              "confidence_score": "string"
            }
          ]
        }
      ]
    },
    "sentiments": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "sentiment": "string",
          "sentiment_score": 0
        }
      ],
      "average": {
        "sentiment": "string",
        "sentiment_score": 0
      }
    }
  }
}
```

The standard transcription response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ListenV1ResponseMetadata](#schemalistenv1responsemetadata)|true|none|none|
|results|[ListenV1ResponseResults](#schemalistenv1responseresults)|true|none|none|

<h2 id="tocS_ListenV1AcceptedResponse">ListenV1AcceptedResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistenv1acceptedresponse"></a>
<a id="schema_ListenV1AcceptedResponse"></a>
<a id="tocSlistenv1acceptedresponse"></a>
<a id="tocslistenv1acceptedresponse"></a>

```json
{
  "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Accepted response for asynchronous transcription requests

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string(uuid)|true|none|Unique identifier for tracking the asynchronous request|

<h2 id="tocS_listen_v1_media_transcribe_Response_200">listen_v1_media_transcribe_Response_200</h2>
<!-- backwards compatibility -->
<a id="schemalisten_v1_media_transcribe_response_200"></a>
<a id="schema_listen_v1_media_transcribe_Response_200"></a>
<a id="tocSlisten_v1_media_transcribe_response_200"></a>
<a id="tocslisten_v1_media_transcribe_response_200"></a>

```json
{
  "metadata": {
    "transaction_key": "deprecated",
    "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "sha256": "string",
    "created": "1970-01-01T00:00:00Z",
    "duration": 0,
    "channels": 0,
    "models": [
      "string"
    ],
    "model_info": {},
    "diarize_info": {
      "model_uuid": "string",
      "arch": "string"
    },
    "summary_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "sentiment_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "topics_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "intents_info": {
      "model_uuid": "string",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "tags": [
      "string"
    ]
  },
  "results": {
    "channels": [
      {
        "search": [
          {
            "query": "string",
            "hits": [
              {
                "confidence": "string",
                "start": "string",
                "end": "string",
                "snippet": "string"
              }
            ]
          }
        ],
        "alternatives": [
          {
            "transcript": "string",
            "confidence": "string",
            "languages": [
              "string"
            ],
            "languages_hinted": [
              "string"
            ],
            "words": [
              {
                "word": "string",
                "start": "string",
                "end": "string",
                "confidence": "string",
                "language": "string",
                "speaker": 0,
                "speaker_confidence": "string"
              }
            ],
            "paragraphs": {
              "transcript": "string",
              "paragraphs": [
                {
                  "sentences": [
                    {
                      "text": "string",
                      "start": "string",
                      "end": "string"
                    }
                  ],
                  "speaker": 0,
                  "num_words": 0,
                  "start": "string",
                  "end": "string"
                }
              ]
            },
            "entities": [
              {
                "label": "string",
                "value": "string",
                "raw_value": "string",
                "confidence": "string",
                "start_word": "string",
                "end_word": "string"
              }
            ],
            "summaries": [
              {
                "summary": "string",
                "start_word": "string",
                "end_word": "string"
              }
            ],
            "topics": [
              {
                "text": "string",
                "start_word": "string",
                "end_word": "string",
                "topics": [
                  "string"
                ]
              }
            ]
          }
        ],
        "detected_language": "string"
      }
    ],
    "utterances": [
      {
        "start": "string",
        "end": "string",
        "confidence": "string",
        "channel": 0,
        "transcript": "string",
        "languages": [
          "string"
        ],
        "words": [
          {
            "word": "string",
            "start": "string",
            "end": "string",
            "confidence": "string",
            "language": "string",
            "speaker": 0,
            "speaker_confidence": "string",
            "punctuated_word": "string"
          }
        ],
        "speaker": 0,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "summary": {
      "result": "string",
      "short": "string"
    },
    "topics": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "topics": [
            {
              "topic": "string",
              "confidence_score": "string"
            }
          ]
        }
      ]
    },
    "intents": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "intents": [
            {
              "intent": "string",
              "confidence_score": "string"
            }
          ]
        }
      ]
    },
    "sentiments": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "sentiment": "string",
          "sentiment_score": 0
        }
      ],
      "average": {
        "sentiment": "string",
        "sentiment_score": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ListenV1Response](#schemalistenv1response)|false|none|The standard transcription response|
|*oneOf*|[ListenV1AcceptedResponse](#schemalistenv1acceptedresponse)|false|none|Accepted response for asynchronous transcription requests|

<h2 id="tocS_V1SpeakPostParametersCallbackMethod">V1SpeakPostParametersCallbackMethod</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterscallbackmethod"></a>
<a id="schema_V1SpeakPostParametersCallbackMethod"></a>
<a id="tocSv1speakpostparameterscallbackmethod"></a>
<a id="tocsv1speakpostparameterscallbackmethod"></a>

```json
"POST"
```

<h2 id="tocS_V1SpeakPostParametersTag">V1SpeakPostParametersTag</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterstag"></a>
<a id="schema_V1SpeakPostParametersTag"></a>
<a id="tocSv1speakpostparameterstag"></a>
<a id="tocsv1speakpostparameterstag"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V1SpeakPostParametersBitRate0">V1SpeakPostParametersBitRate0</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparametersbitrate0"></a>
<a id="schema_V1SpeakPostParametersBitRate0"></a>
<a id="tocSv1speakpostparametersbitrate0"></a>
<a id="tocsv1speakpostparametersbitrate0"></a>

```json
"32000"
```

Encoding - mp3(default). Supported bitrates - 32000, 48000(default) bps.

<h2 id="tocS_V1SpeakPostParametersBitRate">V1SpeakPostParametersBitRate</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparametersbitrate"></a>
<a id="schema_V1SpeakPostParametersBitRate"></a>
<a id="tocSv1speakpostparametersbitrate"></a>
<a id="tocsv1speakpostparametersbitrate"></a>

```json
"32000"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[V1SpeakPostParametersBitRate0](#schemav1speakpostparametersbitrate0)|false|none|Encoding - mp3(default). Supported bitrates - 32000, 48000(default) bps.|
|*oneOf*|number(double)|false|none|none|
|*oneOf*|number(double)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|32000|
|*oneOf*|48000|

<h2 id="tocS_V1SpeakPostParametersContainer0">V1SpeakPostParametersContainer0</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterscontainer0"></a>
<a id="schema_V1SpeakPostParametersContainer0"></a>
<a id="tocSv1speakpostparameterscontainer0"></a>
<a id="tocsv1speakpostparameterscontainer0"></a>

```json
"none"
```

No container.

<h2 id="tocS_V1SpeakPostParametersContainer1">V1SpeakPostParametersContainer1</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterscontainer1"></a>
<a id="schema_V1SpeakPostParametersContainer1"></a>
<a id="tocSv1speakpostparameterscontainer1"></a>
<a id="tocsv1speakpostparameterscontainer1"></a>

```json
"wav"
```

Encoding - linear16. Supported container - wav (default), or no container.

<h2 id="tocS_V1SpeakPostParametersContainer2">V1SpeakPostParametersContainer2</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterscontainer2"></a>
<a id="schema_V1SpeakPostParametersContainer2"></a>
<a id="tocSv1speakpostparameterscontainer2"></a>
<a id="tocsv1speakpostparameterscontainer2"></a>

```json
"wav"
```

Encoding - mulaw. Supported container - wav (default), or no container.

<h2 id="tocS_V1SpeakPostParametersContainer3">V1SpeakPostParametersContainer3</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterscontainer3"></a>
<a id="schema_V1SpeakPostParametersContainer3"></a>
<a id="tocSv1speakpostparameterscontainer3"></a>
<a id="tocsv1speakpostparameterscontainer3"></a>

```json
"wav"
```

Encoding - alaw. Supported container - wav (default), or no container.

<h2 id="tocS_V1SpeakPostParametersContainer4">V1SpeakPostParametersContainer4</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterscontainer4"></a>
<a id="schema_V1SpeakPostParametersContainer4"></a>
<a id="tocSv1speakpostparameterscontainer4"></a>
<a id="tocsv1speakpostparameterscontainer4"></a>

```json
"ogg"
```

Encoding - opus. Supported container - ogg (default).

<h2 id="tocS_V1SpeakPostParametersContainer">V1SpeakPostParametersContainer</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterscontainer"></a>
<a id="schema_V1SpeakPostParametersContainer"></a>
<a id="tocSv1speakpostparameterscontainer"></a>
<a id="tocsv1speakpostparameterscontainer"></a>

```json
"none"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[V1SpeakPostParametersContainer0](#schemav1speakpostparameterscontainer0)|false|none|No container.|
|*oneOf*|[V1SpeakPostParametersContainer1](#schemav1speakpostparameterscontainer1)|false|none|Encoding - linear16. Supported container - wav (default), or no container.|
|*oneOf*|[V1SpeakPostParametersContainer2](#schemav1speakpostparameterscontainer2)|false|none|Encoding - mulaw. Supported container - wav (default), or no container.|
|*oneOf*|[V1SpeakPostParametersContainer3](#schemav1speakpostparameterscontainer3)|false|none|Encoding - alaw. Supported container - wav (default), or no container.|
|*oneOf*|[V1SpeakPostParametersContainer4](#schemav1speakpostparameterscontainer4)|false|none|Encoding - opus. Supported container - ogg (default).|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|none|
|*oneOf*|wav|
|*oneOf*|wav|
|*oneOf*|wav|
|*oneOf*|ogg|

<h2 id="tocS_V1SpeakPostParametersEncoding0">V1SpeakPostParametersEncoding0</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparametersencoding0"></a>
<a id="schema_V1SpeakPostParametersEncoding0"></a>
<a id="tocSv1speakpostparametersencoding0"></a>
<a id="tocsv1speakpostparametersencoding0"></a>

```json
"linear16"
```

Encoding - linear16. Uncompressed, high-quality audio format often used for telephony or audio processing.

<h2 id="tocS_V1SpeakPostParametersEncoding1">V1SpeakPostParametersEncoding1</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparametersencoding1"></a>
<a id="schema_V1SpeakPostParametersEncoding1"></a>
<a id="tocSv1speakpostparametersencoding1"></a>
<a id="tocsv1speakpostparametersencoding1"></a>

```json
"flac"
```

Encoding - flac. Lossless audio format for high-quality compression.

<h2 id="tocS_V1SpeakPostParametersEncoding2">V1SpeakPostParametersEncoding2</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparametersencoding2"></a>
<a id="schema_V1SpeakPostParametersEncoding2"></a>
<a id="tocSv1speakpostparametersencoding2"></a>
<a id="tocsv1speakpostparametersencoding2"></a>

```json
"mulaw"
```

Encoding - mulaw. Compressed audio format commonly used in telephony.

<h2 id="tocS_V1SpeakPostParametersEncoding3">V1SpeakPostParametersEncoding3</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparametersencoding3"></a>
<a id="schema_V1SpeakPostParametersEncoding3"></a>
<a id="tocSv1speakpostparametersencoding3"></a>
<a id="tocsv1speakpostparametersencoding3"></a>

```json
"alaw"
```

Encoding - alaw. Similar to mulaw but used in international telephony.

<h2 id="tocS_V1SpeakPostParametersEncoding4">V1SpeakPostParametersEncoding4</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparametersencoding4"></a>
<a id="schema_V1SpeakPostParametersEncoding4"></a>
<a id="tocSv1speakpostparametersencoding4"></a>
<a id="tocsv1speakpostparametersencoding4"></a>

```json
"mp3"
```

Encoding - mp3. Popular compressed audio format for music and streaming.

<h2 id="tocS_V1SpeakPostParametersEncoding5">V1SpeakPostParametersEncoding5</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparametersencoding5"></a>
<a id="schema_V1SpeakPostParametersEncoding5"></a>
<a id="tocSv1speakpostparametersencoding5"></a>
<a id="tocsv1speakpostparametersencoding5"></a>

```json
"opus"
```

Encoding - opus. High-compression audio format optimized for real-time communications.

<h2 id="tocS_V1SpeakPostParametersEncoding6">V1SpeakPostParametersEncoding6</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparametersencoding6"></a>
<a id="schema_V1SpeakPostParametersEncoding6"></a>
<a id="tocSv1speakpostparametersencoding6"></a>
<a id="tocsv1speakpostparametersencoding6"></a>

```json
"aac"
```

Encoding - aac. Advanced audio format offering better quality at smaller file sizes than mp3.

<h2 id="tocS_V1SpeakPostParametersEncoding">V1SpeakPostParametersEncoding</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparametersencoding"></a>
<a id="schema_V1SpeakPostParametersEncoding"></a>
<a id="tocSv1speakpostparametersencoding"></a>
<a id="tocsv1speakpostparametersencoding"></a>

```json
"linear16"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[V1SpeakPostParametersEncoding0](#schemav1speakpostparametersencoding0)|false|none|Encoding - linear16. Uncompressed, high-quality audio format often used for telephony or audio processing.|
|*oneOf*|[V1SpeakPostParametersEncoding1](#schemav1speakpostparametersencoding1)|false|none|Encoding - flac. Lossless audio format for high-quality compression.|
|*oneOf*|[V1SpeakPostParametersEncoding2](#schemav1speakpostparametersencoding2)|false|none|Encoding - mulaw. Compressed audio format commonly used in telephony.|
|*oneOf*|[V1SpeakPostParametersEncoding3](#schemav1speakpostparametersencoding3)|false|none|Encoding - alaw. Similar to mulaw but used in international telephony.|
|*oneOf*|[V1SpeakPostParametersEncoding4](#schemav1speakpostparametersencoding4)|false|none|Encoding - mp3. Popular compressed audio format for music and streaming.|
|*oneOf*|[V1SpeakPostParametersEncoding5](#schemav1speakpostparametersencoding5)|false|none|Encoding - opus. High-compression audio format optimized for real-time communications.|
|*oneOf*|[V1SpeakPostParametersEncoding6](#schemav1speakpostparametersencoding6)|false|none|Encoding - aac. Advanced audio format offering better quality at smaller file sizes than mp3.|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|linear16|
|*oneOf*|flac|
|*oneOf*|mulaw|
|*oneOf*|alaw|
|*oneOf*|mp3|
|*oneOf*|opus|
|*oneOf*|aac|

<h2 id="tocS_V1SpeakPostParametersModel">V1SpeakPostParametersModel</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparametersmodel"></a>
<a id="schema_V1SpeakPostParametersModel"></a>
<a id="tocSv1speakpostparametersmodel"></a>
<a id="tocsv1speakpostparametersmodel"></a>

```json
"aura-asteria-en"
```

<h2 id="tocS_V1SpeakPostParametersSampleRate0">V1SpeakPostParametersSampleRate0</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterssamplerate0"></a>
<a id="schema_V1SpeakPostParametersSampleRate0"></a>
<a id="tocSv1speakpostparameterssamplerate0"></a>
<a id="tocsv1speakpostparameterssamplerate0"></a>

```json
"8000"
```

Encoding - linear16. Supported sample rates - 8000, 16000, 24000, 32000, 48000 Hz.

<h2 id="tocS_V1SpeakPostParametersSampleRate1">V1SpeakPostParametersSampleRate1</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterssamplerate1"></a>
<a id="schema_V1SpeakPostParametersSampleRate1"></a>
<a id="tocSv1speakpostparameterssamplerate1"></a>
<a id="tocsv1speakpostparameterssamplerate1"></a>

```json
"8000"
```

Encoding - mulaw. Supported sample rates - 8000, 16000 Hz.

<h2 id="tocS_V1SpeakPostParametersSampleRate2">V1SpeakPostParametersSampleRate2</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterssamplerate2"></a>
<a id="schema_V1SpeakPostParametersSampleRate2"></a>
<a id="tocSv1speakpostparameterssamplerate2"></a>
<a id="tocsv1speakpostparameterssamplerate2"></a>

```json
"8000"
```

Encoding - alaw. Supported sample rates - 8000, 16000 Hz.

<h2 id="tocS_V1SpeakPostParametersSampleRate3">V1SpeakPostParametersSampleRate3</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterssamplerate3"></a>
<a id="schema_V1SpeakPostParametersSampleRate3"></a>
<a id="tocSv1speakpostparameterssamplerate3"></a>
<a id="tocsv1speakpostparameterssamplerate3"></a>

```json
"22050"
```

Encoding - mp3. Sample rate is fixed and not configurable (22050 Hz).

<h2 id="tocS_V1SpeakPostParametersSampleRate4">V1SpeakPostParametersSampleRate4</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterssamplerate4"></a>
<a id="schema_V1SpeakPostParametersSampleRate4"></a>
<a id="tocSv1speakpostparameterssamplerate4"></a>
<a id="tocsv1speakpostparameterssamplerate4"></a>

```json
"48000"
```

Encoding - opus. Sample rate is fixed at 48000 Hz.

<h2 id="tocS_V1SpeakPostParametersSampleRate">V1SpeakPostParametersSampleRate</h2>
<!-- backwards compatibility -->
<a id="schemav1speakpostparameterssamplerate"></a>
<a id="schema_V1SpeakPostParametersSampleRate"></a>
<a id="tocSv1speakpostparameterssamplerate"></a>
<a id="tocsv1speakpostparameterssamplerate"></a>

```json
"8000"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[V1SpeakPostParametersSampleRate0](#schemav1speakpostparameterssamplerate0)|false|none|Encoding - linear16. Supported sample rates - 8000, 16000, 24000, 32000, 48000 Hz.|
|*oneOf*|[V1SpeakPostParametersSampleRate1](#schemav1speakpostparameterssamplerate1)|false|none|Encoding - mulaw. Supported sample rates - 8000, 16000 Hz.|
|*oneOf*|[V1SpeakPostParametersSampleRate2](#schemav1speakpostparameterssamplerate2)|false|none|Encoding - alaw. Supported sample rates - 8000, 16000 Hz.|
|*oneOf*|[V1SpeakPostParametersSampleRate3](#schemav1speakpostparameterssamplerate3)|false|none|Encoding - mp3. Sample rate is fixed and not configurable (22050 Hz).|
|*oneOf*|[V1SpeakPostParametersSampleRate4](#schemav1speakpostparameterssamplerate4)|false|none|Encoding - opus. Sample rate is fixed at 48000 Hz.|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|8000|
|*oneOf*|16000|
|*oneOf*|24000|
|*oneOf*|32000|
|*oneOf*|48000|
|*oneOf*|8000|
|*oneOf*|16000|
|*oneOf*|8000|
|*oneOf*|16000|
|*oneOf*|22050|
|*oneOf*|48000|

<h2 id="tocS_SpeakV1Request">SpeakV1Request</h2>
<!-- backwards compatibility -->
<a id="schemaspeakv1request"></a>
<a id="schema_SpeakV1Request"></a>
<a id="tocSspeakv1request"></a>
<a id="tocsspeakv1request"></a>

```json
{
  "text": "string"
}
```

Request body for text-to-speech conversion

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The text content to be converted to speech|

<h2 id="tocS_speak_v1_audio_generate_Response_200">speak_v1_audio_generate_Response_200</h2>
<!-- backwards compatibility -->
<a id="schemaspeak_v1_audio_generate_response_200"></a>
<a id="schema_speak_v1_audio_generate_Response_200"></a>
<a id="tocSspeak_v1_audio_generate_response_200"></a>
<a id="tocsspeak_v1_audio_generate_response_200"></a>

```json
{}
```

Empty response body

<h2 id="tocS_V1ReadPostParametersCallbackMethod">V1ReadPostParametersCallbackMethod</h2>
<!-- backwards compatibility -->
<a id="schemav1readpostparameterscallbackmethod"></a>
<a id="schema_V1ReadPostParametersCallbackMethod"></a>
<a id="tocSv1readpostparameterscallbackmethod"></a>
<a id="tocsv1readpostparameterscallbackmethod"></a>

```json
"POST"
```

<h2 id="tocS_V1ReadPostParametersSummarize0">V1ReadPostParametersSummarize0</h2>
<!-- backwards compatibility -->
<a id="schemav1readpostparameterssummarize0"></a>
<a id="schema_V1ReadPostParametersSummarize0"></a>
<a id="tocSv1readpostparameterssummarize0"></a>
<a id="tocsv1readpostparameterssummarize0"></a>

```json
"v2"
```

<h2 id="tocS_V1ReadPostParametersSummarize">V1ReadPostParametersSummarize</h2>
<!-- backwards compatibility -->
<a id="schemav1readpostparameterssummarize"></a>
<a id="schema_V1ReadPostParametersSummarize"></a>
<a id="tocSv1readpostparameterssummarize"></a>
<a id="tocsv1readpostparameterssummarize"></a>

```json
"v2"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[V1ReadPostParametersSummarize0](#schemav1readpostparameterssummarize0)|false|none|none|
|*oneOf*|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|v2|

<h2 id="tocS_V1ReadPostParametersTag">V1ReadPostParametersTag</h2>
<!-- backwards compatibility -->
<a id="schemav1readpostparameterstag"></a>
<a id="schema_V1ReadPostParametersTag"></a>
<a id="tocSv1readpostparameterstag"></a>
<a id="tocsv1readpostparameterstag"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V1ReadPostParametersCustomTopic">V1ReadPostParametersCustomTopic</h2>
<!-- backwards compatibility -->
<a id="schemav1readpostparameterscustomtopic"></a>
<a id="schema_V1ReadPostParametersCustomTopic"></a>
<a id="tocSv1readpostparameterscustomtopic"></a>
<a id="tocsv1readpostparameterscustomtopic"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V1ReadPostParametersCustomTopicMode">V1ReadPostParametersCustomTopicMode</h2>
<!-- backwards compatibility -->
<a id="schemav1readpostparameterscustomtopicmode"></a>
<a id="schema_V1ReadPostParametersCustomTopicMode"></a>
<a id="tocSv1readpostparameterscustomtopicmode"></a>
<a id="tocsv1readpostparameterscustomtopicmode"></a>

```json
"extended"
```

<h2 id="tocS_V1ReadPostParametersCustomIntent">V1ReadPostParametersCustomIntent</h2>
<!-- backwards compatibility -->
<a id="schemav1readpostparameterscustomintent"></a>
<a id="schema_V1ReadPostParametersCustomIntent"></a>
<a id="tocSv1readpostparameterscustomintent"></a>
<a id="tocsv1readpostparameterscustomintent"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V1ReadPostParametersCustomIntentMode">V1ReadPostParametersCustomIntentMode</h2>
<!-- backwards compatibility -->
<a id="schemav1readpostparameterscustomintentmode"></a>
<a id="schema_V1ReadPostParametersCustomIntentMode"></a>
<a id="tocSv1readpostparameterscustomintentmode"></a>
<a id="tocsv1readpostparameterscustomintentmode"></a>

```json
"extended"
```

<h2 id="tocS_ReadV1RequestUrl">ReadV1RequestUrl</h2>
<!-- backwards compatibility -->
<a id="schemareadv1requesturl"></a>
<a id="schema_ReadV1RequestUrl"></a>
<a id="tocSreadv1requesturl"></a>
<a id="tocsreadv1requesturl"></a>

```json
{
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|A URL pointing to the text source|

<h2 id="tocS_ReadV1RequestText">ReadV1RequestText</h2>
<!-- backwards compatibility -->
<a id="schemareadv1requesttext"></a>
<a id="schema_ReadV1RequestText"></a>
<a id="tocSreadv1requesttext"></a>
<a id="tocsreadv1requesttext"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The plain text to analyze|

<h2 id="tocS_ReadV1Request">ReadV1Request</h2>
<!-- backwards compatibility -->
<a id="schemareadv1request"></a>
<a id="schema_ReadV1Request"></a>
<a id="tocSreadv1request"></a>
<a id="tocsreadv1request"></a>

```json
{
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ReadV1RequestUrl](#schemareadv1requesturl)|false|none|none|
|*oneOf*|[ReadV1RequestText](#schemareadv1requesttext)|false|none|none|

<h2 id="tocS_ReadV1ResponseMetadataMetadataSummaryInfo">ReadV1ResponseMetadataMetadataSummaryInfo</h2>
<!-- backwards compatibility -->
<a id="schemareadv1responsemetadatametadatasummaryinfo"></a>
<a id="schema_ReadV1ResponseMetadataMetadataSummaryInfo"></a>
<a id="tocSreadv1responsemetadatametadatasummaryinfo"></a>
<a id="tocsreadv1responsemetadatametadatasummaryinfo"></a>

```json
{
  "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "input_tokens": 0,
  "output_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_uuid|string(uuid)|false|none|none|
|input_tokens|integer|false|none|none|
|output_tokens|integer|false|none|none|

<h2 id="tocS_ReadV1ResponseMetadataMetadataSentimentInfo">ReadV1ResponseMetadataMetadataSentimentInfo</h2>
<!-- backwards compatibility -->
<a id="schemareadv1responsemetadatametadatasentimentinfo"></a>
<a id="schema_ReadV1ResponseMetadataMetadataSentimentInfo"></a>
<a id="tocSreadv1responsemetadatametadatasentimentinfo"></a>
<a id="tocsreadv1responsemetadatametadatasentimentinfo"></a>

```json
{
  "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "input_tokens": 0,
  "output_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_uuid|string(uuid)|false|none|none|
|input_tokens|integer|false|none|none|
|output_tokens|integer|false|none|none|

<h2 id="tocS_ReadV1ResponseMetadataMetadataTopicsInfo">ReadV1ResponseMetadataMetadataTopicsInfo</h2>
<!-- backwards compatibility -->
<a id="schemareadv1responsemetadatametadatatopicsinfo"></a>
<a id="schema_ReadV1ResponseMetadataMetadataTopicsInfo"></a>
<a id="tocSreadv1responsemetadatametadatatopicsinfo"></a>
<a id="tocsreadv1responsemetadatametadatatopicsinfo"></a>

```json
{
  "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "input_tokens": 0,
  "output_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_uuid|string(uuid)|false|none|none|
|input_tokens|integer|false|none|none|
|output_tokens|integer|false|none|none|

<h2 id="tocS_ReadV1ResponseMetadataMetadataIntentsInfo">ReadV1ResponseMetadataMetadataIntentsInfo</h2>
<!-- backwards compatibility -->
<a id="schemareadv1responsemetadatametadataintentsinfo"></a>
<a id="schema_ReadV1ResponseMetadataMetadataIntentsInfo"></a>
<a id="tocSreadv1responsemetadatametadataintentsinfo"></a>
<a id="tocsreadv1responsemetadatametadataintentsinfo"></a>

```json
{
  "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "input_tokens": 0,
  "output_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_uuid|string(uuid)|false|none|none|
|input_tokens|integer|false|none|none|
|output_tokens|integer|false|none|none|

<h2 id="tocS_ReadV1ResponseMetadataMetadata">ReadV1ResponseMetadataMetadata</h2>
<!-- backwards compatibility -->
<a id="schemareadv1responsemetadatametadata"></a>
<a id="schema_ReadV1ResponseMetadataMetadata"></a>
<a id="tocSreadv1responsemetadatametadata"></a>
<a id="tocsreadv1responsemetadatametadata"></a>

```json
{
  "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created": "1970-01-01T00:00:00Z",
  "language": "string",
  "summary_info": {
    "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "input_tokens": 0,
    "output_tokens": 0
  },
  "sentiment_info": {
    "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "input_tokens": 0,
    "output_tokens": 0
  },
  "topics_info": {
    "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "input_tokens": 0,
    "output_tokens": 0
  },
  "intents_info": {
    "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "input_tokens": 0,
    "output_tokens": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string(uuid)|false|none|none|
|created|string(date-time)|false|none|none|
|language|string|false|none|none|
|summary_info|[ReadV1ResponseMetadataMetadataSummaryInfo](#schemareadv1responsemetadatametadatasummaryinfo)|false|none|none|
|sentiment_info|[ReadV1ResponseMetadataMetadataSentimentInfo](#schemareadv1responsemetadatametadatasentimentinfo)|false|none|none|
|topics_info|[ReadV1ResponseMetadataMetadataTopicsInfo](#schemareadv1responsemetadatametadatatopicsinfo)|false|none|none|
|intents_info|[ReadV1ResponseMetadataMetadataIntentsInfo](#schemareadv1responsemetadatametadataintentsinfo)|false|none|none|

<h2 id="tocS_ReadV1ResponseMetadata">ReadV1ResponseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemareadv1responsemetadata"></a>
<a id="schema_ReadV1ResponseMetadata"></a>
<a id="tocSreadv1responsemetadata"></a>
<a id="tocsreadv1responsemetadata"></a>

```json
{
  "metadata": {
    "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "created": "1970-01-01T00:00:00Z",
    "language": "string",
    "summary_info": {
      "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "sentiment_info": {
      "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "topics_info": {
      "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "input_tokens": 0,
      "output_tokens": 0
    },
    "intents_info": {
      "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "input_tokens": 0,
      "output_tokens": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ReadV1ResponseMetadataMetadata](#schemareadv1responsemetadatametadata)|false|none|none|

<h2 id="tocS_ReadV1ResponseResultsSummaryResultsSummary">ReadV1ResponseResultsSummaryResultsSummary</h2>
<!-- backwards compatibility -->
<a id="schemareadv1responseresultssummaryresultssummary"></a>
<a id="schema_ReadV1ResponseResultsSummaryResultsSummary"></a>
<a id="tocSreadv1responseresultssummaryresultssummary"></a>
<a id="tocsreadv1responseresultssummaryresultssummary"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|none|

<h2 id="tocS_ReadV1ResponseResultsSummaryResults">ReadV1ResponseResultsSummaryResults</h2>
<!-- backwards compatibility -->
<a id="schemareadv1responseresultssummaryresults"></a>
<a id="schema_ReadV1ResponseResultsSummaryResults"></a>
<a id="tocSreadv1responseresultssummaryresults"></a>
<a id="tocsreadv1responseresultssummaryresults"></a>

```json
{
  "summary": {
    "text": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|[ReadV1ResponseResultsSummaryResultsSummary](#schemareadv1responseresultssummaryresultssummary)|false|none|none|

<h2 id="tocS_ReadV1ResponseResultsSummary">ReadV1ResponseResultsSummary</h2>
<!-- backwards compatibility -->
<a id="schemareadv1responseresultssummary"></a>
<a id="schema_ReadV1ResponseResultsSummary"></a>
<a id="tocSreadv1responseresultssummary"></a>
<a id="tocsreadv1responseresultssummary"></a>

```json
{
  "results": {
    "summary": {
      "text": "string"
    }
  }
}
```

Output whenever `summary=true` is used

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[ReadV1ResponseResultsSummaryResults](#schemareadv1responseresultssummaryresults)|false|none|none|

<h2 id="tocS_ReadV1ResponseResults">ReadV1ResponseResults</h2>
<!-- backwards compatibility -->
<a id="schemareadv1responseresults"></a>
<a id="schema_ReadV1ResponseResults"></a>
<a id="tocSreadv1responseresults"></a>
<a id="tocsreadv1responseresults"></a>

```json
{
  "summary": {
    "results": {
      "summary": {
        "text": "string"
      }
    }
  },
  "topics": {
    "segments": [
      {
        "text": "string",
        "start_word": 0,
        "end_word": 0,
        "topics": [
          {
            "topic": "string",
            "confidence_score": "string"
          }
        ]
      }
    ]
  },
  "intents": {
    "segments": [
      {
        "text": "string",
        "start_word": 0,
        "end_word": 0,
        "intents": [
          {
            "intent": "string",
            "confidence_score": "string"
          }
        ]
      }
    ]
  },
  "sentiments": {
    "segments": [
      {
        "text": "string",
        "start_word": 0,
        "end_word": 0,
        "sentiment": "string",
        "sentiment_score": 0
      }
    ],
    "average": {
      "sentiment": "string",
      "sentiment_score": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summary|[ReadV1ResponseResultsSummary](#schemareadv1responseresultssummary)|false|none|Output whenever `summary=true` is used|
|topics|[SharedTopics](#schemasharedtopics)|false|none|Output whenever `topics=true` is used|
|intents|[SharedIntents](#schemasharedintents)|false|none|Output whenever `intents=true` is used|
|sentiments|[SharedSentiments](#schemasharedsentiments)|false|none|Output whenever `sentiment=true` is used|

<h2 id="tocS_ReadV1Response">ReadV1Response</h2>
<!-- backwards compatibility -->
<a id="schemareadv1response"></a>
<a id="schema_ReadV1Response"></a>
<a id="tocSreadv1response"></a>
<a id="tocsreadv1response"></a>

```json
{
  "metadata": {
    "metadata": {
      "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created": "1970-01-01T00:00:00Z",
      "language": "string",
      "summary_info": {
        "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "input_tokens": 0,
        "output_tokens": 0
      },
      "sentiment_info": {
        "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "input_tokens": 0,
        "output_tokens": 0
      },
      "topics_info": {
        "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "input_tokens": 0,
        "output_tokens": 0
      },
      "intents_info": {
        "model_uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "input_tokens": 0,
        "output_tokens": 0
      }
    }
  },
  "results": {
    "summary": {
      "results": {
        "summary": {
          "text": "string"
        }
      }
    },
    "topics": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "topics": [
            {
              "topic": "string",
              "confidence_score": "string"
            }
          ]
        }
      ]
    },
    "intents": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "intents": [
            {
              "intent": "string",
              "confidence_score": "string"
            }
          ]
        }
      ]
    },
    "sentiments": {
      "segments": [
        {
          "text": "string",
          "start_word": 0,
          "end_word": 0,
          "sentiment": "string",
          "sentiment_score": 0
        }
      ],
      "average": {
        "sentiment": "string",
        "sentiment_score": 0
      }
    }
  }
}
```

The standard text response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ReadV1ResponseMetadata](#schemareadv1responsemetadata)|true|none|none|
|results|[ReadV1ResponseResults](#schemareadv1responseresults)|true|none|none|

<h2 id="tocS_ListProjectsV1ResponseProjectsItems">ListProjectsV1ResponseProjectsItems</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsv1responseprojectsitems"></a>
<a id="schema_ListProjectsV1ResponseProjectsItems"></a>
<a id="tocSlistprojectsv1responseprojectsitems"></a>
<a id="tocslistprojectsv1responseprojectsitems"></a>

```json
{
  "project_id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|string|false|none|The unique identifier of the project|
|name|string|false|none|The name of the project|

<h2 id="tocS_ListProjectsV1Response">ListProjectsV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsv1response"></a>
<a id="schema_ListProjectsV1Response"></a>
<a id="tocSlistprojectsv1response"></a>
<a id="tocslistprojectsv1response"></a>

```json
{
  "projects": [
    {
      "project_id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|[[ListProjectsV1ResponseProjectsItems](#schemalistprojectsv1responseprojectsitems)]|false|none|none|

<h2 id="tocS_GetProjectV1Response">GetProjectV1Response</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectv1response"></a>
<a id="schema_GetProjectV1Response"></a>
<a id="tocSgetprojectv1response"></a>
<a id="tocsgetprojectv1response"></a>

```json
{
  "project_id": "string",
  "mip_opt_out": true,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|string|false|none|The unique identifier of the project|
|mip_opt_out|boolean|false|none|Model Improvement Program opt-out|
|name|string|false|none|The name of the project|

<h2 id="tocS_UpdateProjectV1Request">UpdateProjectV1Request</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectv1request"></a>
<a id="schema_UpdateProjectV1Request"></a>
<a id="tocSupdateprojectv1request"></a>
<a id="tocsupdateprojectv1request"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the project|

<h2 id="tocS_UpdateProjectV1Response">UpdateProjectV1Response</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectv1response"></a>
<a id="schema_UpdateProjectV1Response"></a>
<a id="tocSupdateprojectv1response"></a>
<a id="tocsupdateprojectv1response"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|confirmation message|

<h2 id="tocS_DeleteProjectV1Response">DeleteProjectV1Response</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectv1response"></a>
<a id="schema_DeleteProjectV1Response"></a>
<a id="tocSdeleteprojectv1response"></a>
<a id="tocsdeleteprojectv1response"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Confirmation message|

<h2 id="tocS_LeaveProjectV1Response">LeaveProjectV1Response</h2>
<!-- backwards compatibility -->
<a id="schemaleaveprojectv1response"></a>
<a id="schema_LeaveProjectV1Response"></a>
<a id="tocSleaveprojectv1response"></a>
<a id="tocsleaveprojectv1response"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|confirmation message|

<h2 id="tocS_ListModelsV1ResponseSttModels">ListModelsV1ResponseSttModels</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelsv1responsesttmodels"></a>
<a id="schema_ListModelsV1ResponseSttModels"></a>
<a id="tocSlistmodelsv1responsesttmodels"></a>
<a id="tocslistmodelsv1responsesttmodels"></a>

```json
{
  "name": "string",
  "canonical_name": "string",
  "architecture": "string",
  "languages": [
    "string"
  ],
  "version": "string",
  "uuid": "string",
  "batch": true,
  "streaming": true,
  "formatted_output": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|canonical_name|string|false|none|none|
|architecture|string|false|none|none|
|languages|[string]|false|none|none|
|version|string|false|none|none|
|uuid|string|false|none|none|
|batch|boolean|false|none|none|
|streaming|boolean|false|none|none|
|formatted_output|boolean|false|none|none|

<h2 id="tocS_ListModelsV1ResponseTtsModelsMetadata">ListModelsV1ResponseTtsModelsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelsv1responsettsmodelsmetadata"></a>
<a id="schema_ListModelsV1ResponseTtsModelsMetadata"></a>
<a id="tocSlistmodelsv1responsettsmodelsmetadata"></a>
<a id="tocslistmodelsv1responsettsmodelsmetadata"></a>

```json
{
  "accent": "string",
  "age": "string",
  "color": "string",
  "image": "http://example.com",
  "sample": "http://example.com",
  "tags": [
    "string"
  ],
  "use_cases": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accent|string|false|none|none|
|age|string|false|none|none|
|color|string|false|none|none|
|image|string(uri)|false|none|none|
|sample|string(uri)|false|none|none|
|tags|[string]|false|none|none|
|use_cases|[string]|false|none|none|

<h2 id="tocS_ListModelsV1ResponseTtsModels">ListModelsV1ResponseTtsModels</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelsv1responsettsmodels"></a>
<a id="schema_ListModelsV1ResponseTtsModels"></a>
<a id="tocSlistmodelsv1responsettsmodels"></a>
<a id="tocslistmodelsv1responsettsmodels"></a>

```json
{
  "name": "string",
  "canonical_name": "string",
  "architecture": "string",
  "languages": [
    "string"
  ],
  "version": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "metadata": {
    "accent": "string",
    "age": "string",
    "color": "string",
    "image": "http://example.com",
    "sample": "http://example.com",
    "tags": [
      "string"
    ],
    "use_cases": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|canonical_name|string|false|none|none|
|architecture|string|false|none|none|
|languages|[string]|false|none|none|
|version|string|false|none|none|
|uuid|string(uuid)|false|none|none|
|metadata|[ListModelsV1ResponseTtsModelsMetadata](#schemalistmodelsv1responsettsmodelsmetadata)|false|none|none|

<h2 id="tocS_ListModelsV1Response">ListModelsV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelsv1response"></a>
<a id="schema_ListModelsV1Response"></a>
<a id="tocSlistmodelsv1response"></a>
<a id="tocslistmodelsv1response"></a>

```json
{
  "stt": [
    {
      "name": "string",
      "canonical_name": "string",
      "architecture": "string",
      "languages": [
        "string"
      ],
      "version": "string",
      "uuid": "string",
      "batch": true,
      "streaming": true,
      "formatted_output": true
    }
  ],
  "tts": [
    {
      "name": "string",
      "canonical_name": "string",
      "architecture": "string",
      "languages": [
        "string"
      ],
      "version": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "metadata": {
        "accent": "string",
        "age": "string",
        "color": "string",
        "image": "http://example.com",
        "sample": "http://example.com",
        "tags": [
          "string"
        ],
        "use_cases": [
          "string"
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stt|[[ListModelsV1ResponseSttModels](#schemalistmodelsv1responsesttmodels)]|false|none|none|
|tts|[[ListModelsV1ResponseTtsModels](#schemalistmodelsv1responsettsmodels)]|false|none|none|

<h2 id="tocS_GetModelV1Response0">GetModelV1Response0</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelv1response0"></a>
<a id="schema_GetModelV1Response0"></a>
<a id="tocSgetmodelv1response0"></a>
<a id="tocsgetmodelv1response0"></a>

```json
{
  "name": "string",
  "canonical_name": "string",
  "architecture": "string",
  "languages": [
    "string"
  ],
  "version": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "batch": true,
  "streaming": true,
  "formatted_output": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|canonical_name|string|false|none|none|
|architecture|string|false|none|none|
|languages|[string]|false|none|none|
|version|string|false|none|none|
|uuid|string(uuid)|false|none|none|
|batch|boolean|false|none|none|
|streaming|boolean|false|none|none|
|formatted_output|boolean|false|none|none|

<h2 id="tocS_GetModelV1ResponseOneOf1Metadata">GetModelV1ResponseOneOf1Metadata</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelv1responseoneof1metadata"></a>
<a id="schema_GetModelV1ResponseOneOf1Metadata"></a>
<a id="tocSgetmodelv1responseoneof1metadata"></a>
<a id="tocsgetmodelv1responseoneof1metadata"></a>

```json
{
  "accent": "string",
  "age": "string",
  "color": "string",
  "image": "http://example.com",
  "sample": "http://example.com",
  "tags": [
    "string"
  ],
  "use_cases": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accent|string|false|none|none|
|age|string|false|none|none|
|color|string|false|none|none|
|image|string(uri)|false|none|none|
|sample|string(uri)|false|none|none|
|tags|[string]|false|none|none|
|use_cases|[string]|false|none|none|

<h2 id="tocS_GetModelV1Response1">GetModelV1Response1</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelv1response1"></a>
<a id="schema_GetModelV1Response1"></a>
<a id="tocSgetmodelv1response1"></a>
<a id="tocsgetmodelv1response1"></a>

```json
{
  "name": "string",
  "canonical_name": "string",
  "architecture": "string",
  "languages": [
    "string"
  ],
  "version": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "metadata": {
    "accent": "string",
    "age": "string",
    "color": "string",
    "image": "http://example.com",
    "sample": "http://example.com",
    "tags": [
      "string"
    ],
    "use_cases": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|canonical_name|string|false|none|none|
|architecture|string|false|none|none|
|languages|[string]|false|none|none|
|version|string|false|none|none|
|uuid|string(uuid)|false|none|none|
|metadata|[GetModelV1ResponseOneOf1Metadata](#schemagetmodelv1responseoneof1metadata)|false|none|none|

<h2 id="tocS_GetModelV1Response">GetModelV1Response</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelv1response"></a>
<a id="schema_GetModelV1Response"></a>
<a id="tocSgetmodelv1response"></a>
<a id="tocsgetmodelv1response"></a>

```json
{
  "name": "string",
  "canonical_name": "string",
  "architecture": "string",
  "languages": [
    "string"
  ],
  "version": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "batch": true,
  "streaming": true,
  "formatted_output": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[GetModelV1Response0](#schemagetmodelv1response0)|false|none|none|
|*oneOf*|[GetModelV1Response1](#schemagetmodelv1response1)|false|none|none|

<h2 id="tocS_V1ProjectsProjectIdKeysGetParametersStatus">V1ProjectsProjectIdKeysGetParametersStatus</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidkeysgetparametersstatus"></a>
<a id="schema_V1ProjectsProjectIdKeysGetParametersStatus"></a>
<a id="tocSv1projectsprojectidkeysgetparametersstatus"></a>
<a id="tocsv1projectsprojectidkeysgetparametersstatus"></a>

```json
"active"
```

<h2 id="tocS_ListProjectKeysV1ResponseApiKeysItemsMember">ListProjectKeysV1ResponseApiKeysItemsMember</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectkeysv1responseapikeysitemsmember"></a>
<a id="schema_ListProjectKeysV1ResponseApiKeysItemsMember"></a>
<a id="tocSlistprojectkeysv1responseapikeysitemsmember"></a>
<a id="tocslistprojectkeysv1responseapikeysitemsmember"></a>

```json
{
  "member_id": "string",
  "email": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member_id|string|false|none|none|
|email|string|false|none|none|

<h2 id="tocS_ListProjectKeysV1ResponseApiKeysItemsApiKey">ListProjectKeysV1ResponseApiKeysItemsApiKey</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectkeysv1responseapikeysitemsapikey"></a>
<a id="schema_ListProjectKeysV1ResponseApiKeysItemsApiKey"></a>
<a id="tocSlistprojectkeysv1responseapikeysitemsapikey"></a>
<a id="tocslistprojectkeysv1responseapikeysitemsapikey"></a>

```json
{
  "api_key_id": "string",
  "comment": "string",
  "scopes": [
    "string"
  ],
  "created": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key_id|string|false|none|none|
|comment|string|false|none|none|
|scopes|[string]|false|none|none|
|created|string(date-time)|false|none|none|

<h2 id="tocS_ListProjectKeysV1ResponseApiKeysItems">ListProjectKeysV1ResponseApiKeysItems</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectkeysv1responseapikeysitems"></a>
<a id="schema_ListProjectKeysV1ResponseApiKeysItems"></a>
<a id="tocSlistprojectkeysv1responseapikeysitems"></a>
<a id="tocslistprojectkeysv1responseapikeysitems"></a>

```json
{
  "member": {
    "member_id": "string",
    "email": "string"
  },
  "api_key": {
    "api_key_id": "string",
    "comment": "string",
    "scopes": [
      "string"
    ],
    "created": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|[ListProjectKeysV1ResponseApiKeysItemsMember](#schemalistprojectkeysv1responseapikeysitemsmember)|false|none|none|
|api_key|[ListProjectKeysV1ResponseApiKeysItemsApiKey](#schemalistprojectkeysv1responseapikeysitemsapikey)|false|none|none|

<h2 id="tocS_ListProjectKeysV1Response">ListProjectKeysV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectkeysv1response"></a>
<a id="schema_ListProjectKeysV1Response"></a>
<a id="tocSlistprojectkeysv1response"></a>
<a id="tocslistprojectkeysv1response"></a>

```json
{
  "api_keys": [
    {
      "member": {
        "member_id": "string",
        "email": "string"
      },
      "api_key": {
        "api_key_id": "string",
        "comment": "string",
        "scopes": [
          "string"
        ],
        "created": "1970-01-01T00:00:00Z"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_keys|[[ListProjectKeysV1ResponseApiKeysItems](#schemalistprojectkeysv1responseapikeysitems)]|false|none|none|

<h2 id="tocS_CreateKeyV1Request">CreateKeyV1Request</h2>
<!-- backwards compatibility -->
<a id="schemacreatekeyv1request"></a>
<a id="schema_CreateKeyV1Request"></a>
<a id="tocScreatekeyv1request"></a>
<a id="tocscreatekeyv1request"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Any type|
|*oneOf*|object|false|none|Any type|

<h2 id="tocS_CreateKeyV1Response">CreateKeyV1Response</h2>
<!-- backwards compatibility -->
<a id="schemacreatekeyv1response"></a>
<a id="schema_CreateKeyV1Response"></a>
<a id="tocScreatekeyv1response"></a>
<a id="tocscreatekeyv1response"></a>

```json
{
  "api_key_id": "string",
  "key": "string",
  "comment": "string",
  "scopes": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "expiration_date": "1970-01-01T00:00:00Z"
}
```

API key created

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key_id|string|false|none|The unique identifier of the API key|
|key|string|false|none|The API key|
|comment|string|false|none|A comment for the API key|
|scopes|[string]|false|none|The scopes for the API key|
|tags|[string]|false|none|The tags for the API key|
|expiration_date|string(date-time)|false|none|The expiration date of the API key|

<h2 id="tocS_GetProjectKeyV1ResponseItemMemberApiKey">GetProjectKeyV1ResponseItemMemberApiKey</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectkeyv1responseitemmemberapikey"></a>
<a id="schema_GetProjectKeyV1ResponseItemMemberApiKey"></a>
<a id="tocSgetprojectkeyv1responseitemmemberapikey"></a>
<a id="tocsgetprojectkeyv1responseitemmemberapikey"></a>

```json
{
  "api_key_id": "string",
  "comment": "string",
  "scopes": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "expiration_date": "1970-01-01T00:00:00Z",
  "created": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key_id|string|false|none|none|
|comment|string|false|none|none|
|scopes|[string]|false|none|none|
|tags|[string]|false|none|none|
|expiration_date|string(date-time)|false|none|none|
|created|string(date-time)|false|none|none|

<h2 id="tocS_GetProjectKeyV1ResponseItemMember">GetProjectKeyV1ResponseItemMember</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectkeyv1responseitemmember"></a>
<a id="schema_GetProjectKeyV1ResponseItemMember"></a>
<a id="tocSgetprojectkeyv1responseitemmember"></a>
<a id="tocsgetprojectkeyv1responseitemmember"></a>

```json
{
  "member_id": "string",
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "api_key": {
    "api_key_id": "string",
    "comment": "string",
    "scopes": [
      "string"
    ],
    "tags": [
      "string"
    ],
    "expiration_date": "1970-01-01T00:00:00Z",
    "created": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member_id|string|false|none|none|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|api_key|[GetProjectKeyV1ResponseItemMemberApiKey](#schemagetprojectkeyv1responseitemmemberapikey)|false|none|none|

<h2 id="tocS_GetProjectKeyV1ResponseItem">GetProjectKeyV1ResponseItem</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectkeyv1responseitem"></a>
<a id="schema_GetProjectKeyV1ResponseItem"></a>
<a id="tocSgetprojectkeyv1responseitem"></a>
<a id="tocsgetprojectkeyv1responseitem"></a>

```json
{
  "member": {
    "member_id": "string",
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "api_key": {
      "api_key_id": "string",
      "comment": "string",
      "scopes": [
        "string"
      ],
      "tags": [
        "string"
      ],
      "expiration_date": "1970-01-01T00:00:00Z",
      "created": "1970-01-01T00:00:00Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|[GetProjectKeyV1ResponseItemMember](#schemagetprojectkeyv1responseitemmember)|false|none|none|

<h2 id="tocS_GetProjectKeyV1Response">GetProjectKeyV1Response</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectkeyv1response"></a>
<a id="schema_GetProjectKeyV1Response"></a>
<a id="tocSgetprojectkeyv1response"></a>
<a id="tocsgetprojectkeyv1response"></a>

```json
{
  "item": {
    "member": {
      "member_id": "string",
      "email": "string",
      "first_name": "string",
      "last_name": "string",
      "api_key": {
        "api_key_id": "string",
        "comment": "string",
        "scopes": [
          "string"
        ],
        "tags": [
          "string"
        ],
        "expiration_date": "1970-01-01T00:00:00Z",
        "created": "1970-01-01T00:00:00Z"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[GetProjectKeyV1ResponseItem](#schemagetprojectkeyv1responseitem)|false|none|none|

<h2 id="tocS_DeleteProjectKeyV1Response">DeleteProjectKeyV1Response</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectkeyv1response"></a>
<a id="schema_DeleteProjectKeyV1Response"></a>
<a id="tocSdeleteprojectkeyv1response"></a>
<a id="tocsdeleteprojectkeyv1response"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_ListProjectMembersV1ResponseMembersItems">ListProjectMembersV1ResponseMembersItems</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectmembersv1responsemembersitems"></a>
<a id="schema_ListProjectMembersV1ResponseMembersItems"></a>
<a id="tocSlistprojectmembersv1responsemembersitems"></a>
<a id="tocslistprojectmembersv1responsemembersitems"></a>

```json
{
  "member_id": "string",
  "scopes": [
    "string"
  ],
  "email": "string",
  "first_name": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member_id|string|false|none|The unique identifier of the member|
|scopes|[string]|false|none|The API scopes of the member|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|

<h2 id="tocS_ListProjectMembersV1Response">ListProjectMembersV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectmembersv1response"></a>
<a id="schema_ListProjectMembersV1Response"></a>
<a id="tocSlistprojectmembersv1response"></a>
<a id="tocslistprojectmembersv1response"></a>

```json
{
  "members": [
    {
      "member_id": "string",
      "scopes": [
        "string"
      ],
      "email": "string",
      "first_name": "string",
      "last_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[[ListProjectMembersV1ResponseMembersItems](#schemalistprojectmembersv1responsemembersitems)]|false|none|none|

<h2 id="tocS_DeleteProjectMemberV1Response">DeleteProjectMemberV1Response</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectmemberv1response"></a>
<a id="schema_DeleteProjectMemberV1Response"></a>
<a id="tocSdeleteprojectmemberv1response"></a>
<a id="tocsdeleteprojectmemberv1response"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|confirmation message|

<h2 id="tocS_ListProjectMemberScopesV1Response">ListProjectMemberScopesV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectmemberscopesv1response"></a>
<a id="schema_ListProjectMemberScopesV1Response"></a>
<a id="tocSlistprojectmemberscopesv1response"></a>
<a id="tocslistprojectmemberscopesv1response"></a>

```json
{
  "scopes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scopes|[string]|false|none|The API scopes of the member|

<h2 id="tocS_UpdateProjectMemberScopesV1Request">UpdateProjectMemberScopesV1Request</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectmemberscopesv1request"></a>
<a id="schema_UpdateProjectMemberScopesV1Request"></a>
<a id="tocSupdateprojectmemberscopesv1request"></a>
<a id="tocsupdateprojectmemberscopesv1request"></a>

```json
{
  "scope": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|string|true|none|A scope to update|

<h2 id="tocS_UpdateProjectMemberScopesV1Response">UpdateProjectMemberScopesV1Response</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectmemberscopesv1response"></a>
<a id="schema_UpdateProjectMemberScopesV1Response"></a>
<a id="tocSupdateprojectmemberscopesv1response"></a>
<a id="tocsupdateprojectmemberscopesv1response"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|confirmation message|

<h2 id="tocS_ListProjectInvitesV1ResponseInvitesItems">ListProjectInvitesV1ResponseInvitesItems</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectinvitesv1responseinvitesitems"></a>
<a id="schema_ListProjectInvitesV1ResponseInvitesItems"></a>
<a id="tocSlistprojectinvitesv1responseinvitesitems"></a>
<a id="tocslistprojectinvitesv1responseinvitesitems"></a>

```json
{
  "email": "string",
  "scope": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address of the invitee|
|scope|string|false|none|The scope of the invitee|

<h2 id="tocS_ListProjectInvitesV1Response">ListProjectInvitesV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectinvitesv1response"></a>
<a id="schema_ListProjectInvitesV1Response"></a>
<a id="tocSlistprojectinvitesv1response"></a>
<a id="tocslistprojectinvitesv1response"></a>

```json
{
  "invites": [
    {
      "email": "string",
      "scope": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invites|[[ListProjectInvitesV1ResponseInvitesItems](#schemalistprojectinvitesv1responseinvitesitems)]|false|none|none|

<h2 id="tocS_CreateProjectInviteV1Request">CreateProjectInviteV1Request</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectinvitev1request"></a>
<a id="schema_CreateProjectInviteV1Request"></a>
<a id="tocScreateprojectinvitev1request"></a>
<a id="tocscreateprojectinvitev1request"></a>

```json
{
  "email": "string",
  "scope": "string"
}
```

Request body for creating a project invite

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|The email address of the invitee|
|scope|string|true|none|The scope of the invitee|

<h2 id="tocS_CreateProjectInviteV1Response">CreateProjectInviteV1Response</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectinvitev1response"></a>
<a id="schema_CreateProjectInviteV1Response"></a>
<a id="tocScreateprojectinvitev1response"></a>
<a id="tocscreateprojectinvitev1response"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|confirmation message|

<h2 id="tocS_DeleteProjectInviteV1Response">DeleteProjectInviteV1Response</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectinvitev1response"></a>
<a id="schema_DeleteProjectInviteV1Response"></a>
<a id="tocSdeleteprojectinvitev1response"></a>
<a id="tocsdeleteprojectinvitev1response"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|confirmation message|

<h2 id="tocS_V1ProjectsProjectIdRequestsGetParametersDeployment">V1ProjectsProjectIdRequestsGetParametersDeployment</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidrequestsgetparametersdeployment"></a>
<a id="schema_V1ProjectsProjectIdRequestsGetParametersDeployment"></a>
<a id="tocSv1projectsprojectidrequestsgetparametersdeployment"></a>
<a id="tocsv1projectsprojectidrequestsgetparametersdeployment"></a>

```json
"hosted"
```

Deployment type for the requests

<h2 id="tocS_V1ProjectsProjectIdRequestsGetParametersEndpoint">V1ProjectsProjectIdRequestsGetParametersEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidrequestsgetparametersendpoint"></a>
<a id="schema_V1ProjectsProjectIdRequestsGetParametersEndpoint"></a>
<a id="tocSv1projectsprojectidrequestsgetparametersendpoint"></a>
<a id="tocsv1projectsprojectidrequestsgetparametersendpoint"></a>

```json
"listen"
```

<h2 id="tocS_V1ProjectsProjectIdRequestsGetParametersMethod">V1ProjectsProjectIdRequestsGetParametersMethod</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidrequestsgetparametersmethod"></a>
<a id="schema_V1ProjectsProjectIdRequestsGetParametersMethod"></a>
<a id="tocSv1projectsprojectidrequestsgetparametersmethod"></a>
<a id="tocsv1projectsprojectidrequestsgetparametersmethod"></a>

```json
"sync"
```

Method type for the request

<h2 id="tocS_V1ProjectsProjectIdRequestsGetParametersStatus">V1ProjectsProjectIdRequestsGetParametersStatus</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidrequestsgetparametersstatus"></a>
<a id="schema_V1ProjectsProjectIdRequestsGetParametersStatus"></a>
<a id="tocSv1projectsprojectidrequestsgetparametersstatus"></a>
<a id="tocsv1projectsprojectidrequestsgetparametersstatus"></a>

```json
"succeeded"
```

<h2 id="tocS_ProjectRequestResponseResponse">ProjectRequestResponseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprojectrequestresponseresponse"></a>
<a id="schema_ProjectRequestResponseResponse"></a>
<a id="tocSprojectrequestresponseresponse"></a>
<a id="tocsprojectrequestresponseresponse"></a>

```json
{}
```

The response of the request

<h2 id="tocS_ProjectRequestResponse">ProjectRequestResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprojectrequestresponse"></a>
<a id="schema_ProjectRequestResponse"></a>
<a id="tocSprojectrequestresponse"></a>
<a id="tocsprojectrequestresponse"></a>

```json
{
  "request_id": "string",
  "project_uuid": "string",
  "created": "1970-01-01T00:00:00Z",
  "path": "string",
  "api_key_id": "string",
  "response": {},
  "code": 0,
  "deployment": "string",
  "callback": "string"
}
```

A single request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|false|none|The unique identifier of the request|
|project_uuid|string|false|none|The unique identifier of the project|
|created|string(date-time)|false|none|The date and time the request was created|
|path|string|false|none|The API path of the request|
|api_key_id|string|false|none|The unique identifier of the API key|
|response|[ProjectRequestResponseResponse](#schemaprojectrequestresponseresponse)|false|none|The response of the request|
|code|number(double)|false|none|The response code of the request|
|deployment|string|false|none|The deployment type|
|callback|string|false|none|The callback URL for the request|

<h2 id="tocS_ListProjectRequestsV1Response">ListProjectRequestsV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectrequestsv1response"></a>
<a id="schema_ListProjectRequestsV1Response"></a>
<a id="tocSlistprojectrequestsv1response"></a>
<a id="tocslistprojectrequestsv1response"></a>

```json
{
  "page": 0,
  "limit": 0,
  "requests": [
    {
      "request_id": "string",
      "project_uuid": "string",
      "created": "1970-01-01T00:00:00Z",
      "path": "string",
      "api_key_id": "string",
      "response": {},
      "code": 0,
      "deployment": "string",
      "callback": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|number(double)|false|none|The page number of the paginated response|
|limit|number(double)|false|none|The number of results per page|
|requests|[[ProjectRequestResponse](#schemaprojectrequestresponse)]|false|none|none|

<h2 id="tocS_GetProjectRequestV1Response">GetProjectRequestV1Response</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectrequestv1response"></a>
<a id="schema_GetProjectRequestV1Response"></a>
<a id="tocSgetprojectrequestv1response"></a>
<a id="tocsgetprojectrequestv1response"></a>

```json
{
  "request": {
    "request_id": "string",
    "project_uuid": "string",
    "created": "1970-01-01T00:00:00Z",
    "path": "string",
    "api_key_id": "string",
    "response": {},
    "code": 0,
    "deployment": "string",
    "callback": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request|[ProjectRequestResponse](#schemaprojectrequestresponse)|false|none|A single request|

<h2 id="tocS_V1ProjectsProjectIdUsageGetParametersDeployment">V1ProjectsProjectIdUsageGetParametersDeployment</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidusagegetparametersdeployment"></a>
<a id="schema_V1ProjectsProjectIdUsageGetParametersDeployment"></a>
<a id="tocSv1projectsprojectidusagegetparametersdeployment"></a>
<a id="tocsv1projectsprojectidusagegetparametersdeployment"></a>

```json
"hosted"
```

Deployment type for the requests

<h2 id="tocS_V1ProjectsProjectIdUsageGetParametersEndpoint">V1ProjectsProjectIdUsageGetParametersEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidusagegetparametersendpoint"></a>
<a id="schema_V1ProjectsProjectIdUsageGetParametersEndpoint"></a>
<a id="tocSv1projectsprojectidusagegetparametersendpoint"></a>
<a id="tocsv1projectsprojectidusagegetparametersendpoint"></a>

```json
"listen"
```

<h2 id="tocS_V1ProjectsProjectIdUsageGetParametersMethod">V1ProjectsProjectIdUsageGetParametersMethod</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidusagegetparametersmethod"></a>
<a id="schema_V1ProjectsProjectIdUsageGetParametersMethod"></a>
<a id="tocSv1projectsprojectidusagegetparametersmethod"></a>
<a id="tocsv1projectsprojectidusagegetparametersmethod"></a>

```json
"sync"
```

Method type for the request

<h2 id="tocS_UsageV1ResponseResolution">UsageV1ResponseResolution</h2>
<!-- backwards compatibility -->
<a id="schemausagev1responseresolution"></a>
<a id="schema_UsageV1ResponseResolution"></a>
<a id="tocSusagev1responseresolution"></a>
<a id="tocsusagev1responseresolution"></a>

```json
{
  "units": "string",
  "amount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|units|string|false|none|none|
|amount|number(double)|false|none|none|

<h2 id="tocS_UsageV1Response">UsageV1Response</h2>
<!-- backwards compatibility -->
<a id="schemausagev1response"></a>
<a id="schema_UsageV1Response"></a>
<a id="tocSusagev1response"></a>
<a id="tocsusagev1response"></a>

```json
{
  "start": "1970-01-01",
  "end": "1970-01-01",
  "resolution": {
    "units": "string",
    "amount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string(date)|false|none|none|
|end|string(date)|false|none|none|
|resolution|[UsageV1ResponseResolution](#schemausagev1responseresolution)|false|none|none|

<h2 id="tocS_UsageFieldsV1ResponseModelsItems">UsageFieldsV1ResponseModelsItems</h2>
<!-- backwards compatibility -->
<a id="schemausagefieldsv1responsemodelsitems"></a>
<a id="schema_UsageFieldsV1ResponseModelsItems"></a>
<a id="tocSusagefieldsv1responsemodelsitems"></a>
<a id="tocsusagefieldsv1responsemodelsitems"></a>

```json
{
  "name": "string",
  "language": "string",
  "version": "string",
  "model_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the model.|
|language|string|false|none|The language supported by the model (IETF language tag).|
|version|string|false|none|Version identifier of the model, typically with a date and a revision number.|
|model_id|string|false|none|Unique identifier for the model.|

<h2 id="tocS_UsageFieldsV1Response">UsageFieldsV1Response</h2>
<!-- backwards compatibility -->
<a id="schemausagefieldsv1response"></a>
<a id="schema_UsageFieldsV1Response"></a>
<a id="tocSusagefieldsv1response"></a>
<a id="tocsusagefieldsv1response"></a>

```json
{
  "tags": [
    "string"
  ],
  "models": [
    {
      "name": "string",
      "language": "string",
      "version": "string",
      "model_id": "string"
    }
  ],
  "processing_methods": [
    "string"
  ],
  "features": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[string]|false|none|List of tags associated with the project|
|models|[[UsageFieldsV1ResponseModelsItems](#schemausagefieldsv1responsemodelsitems)]|false|none|List of models available for the project.|
|processing_methods|[string]|false|none|Processing methods supported by the API|
|features|[string]|false|none|API features available to the project|

<h2 id="tocS_V1ProjectsProjectIdUsageBreakdownGetParametersGrouping">V1ProjectsProjectIdUsageBreakdownGetParametersGrouping</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidusagebreakdowngetparametersgrouping"></a>
<a id="schema_V1ProjectsProjectIdUsageBreakdownGetParametersGrouping"></a>
<a id="tocSv1projectsprojectidusagebreakdowngetparametersgrouping"></a>
<a id="tocsv1projectsprojectidusagebreakdowngetparametersgrouping"></a>

```json
"accessor"
```

<h2 id="tocS_V1ProjectsProjectIdUsageBreakdownGetParametersDeployment">V1ProjectsProjectIdUsageBreakdownGetParametersDeployment</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidusagebreakdowngetparametersdeployment"></a>
<a id="schema_V1ProjectsProjectIdUsageBreakdownGetParametersDeployment"></a>
<a id="tocSv1projectsprojectidusagebreakdowngetparametersdeployment"></a>
<a id="tocsv1projectsprojectidusagebreakdowngetparametersdeployment"></a>

```json
"hosted"
```

Deployment type for the requests

<h2 id="tocS_V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint">V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidusagebreakdowngetparametersendpoint"></a>
<a id="schema_V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint"></a>
<a id="tocSv1projectsprojectidusagebreakdowngetparametersendpoint"></a>
<a id="tocsv1projectsprojectidusagebreakdowngetparametersendpoint"></a>

```json
"listen"
```

<h2 id="tocS_V1ProjectsProjectIdUsageBreakdownGetParametersMethod">V1ProjectsProjectIdUsageBreakdownGetParametersMethod</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidusagebreakdowngetparametersmethod"></a>
<a id="schema_V1ProjectsProjectIdUsageBreakdownGetParametersMethod"></a>
<a id="tocSv1projectsprojectidusagebreakdowngetparametersmethod"></a>
<a id="tocsv1projectsprojectidusagebreakdowngetparametersmethod"></a>

```json
"sync"
```

Method type for the request

<h2 id="tocS_UsageBreakdownV1ResponseResolution">UsageBreakdownV1ResponseResolution</h2>
<!-- backwards compatibility -->
<a id="schemausagebreakdownv1responseresolution"></a>
<a id="schema_UsageBreakdownV1ResponseResolution"></a>
<a id="tocSusagebreakdownv1responseresolution"></a>
<a id="tocsusagebreakdownv1responseresolution"></a>

```json
{
  "units": "string",
  "amount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|units|string|true|none|Time unit for the resolution|
|amount|number(double)|true|none|Amount of units|

<h2 id="tocS_UsageBreakdownV1ResponseResultsItemsGrouping">UsageBreakdownV1ResponseResultsItemsGrouping</h2>
<!-- backwards compatibility -->
<a id="schemausagebreakdownv1responseresultsitemsgrouping"></a>
<a id="schema_UsageBreakdownV1ResponseResultsItemsGrouping"></a>
<a id="tocSusagebreakdownv1responseresultsitemsgrouping"></a>
<a id="tocsusagebreakdownv1responseresultsitemsgrouping"></a>

```json
{
  "start": "1970-01-01",
  "end": "1970-01-01",
  "accessor": "string",
  "endpoint": "string",
  "feature_set": "string",
  "models": [
    "string"
  ],
  "method": "string",
  "tags": [
    "string"
  ],
  "deployment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string(date)|false|none|Start date for this group|
|end|string(date)|false|none|End date for this group|
|accessor|string \| null|false|none|Optional accessor identifier|
|endpoint|string \| null|false|none|Optional endpoint identifier|
|feature_set|string \| null|false|none|Optional feature set identifier|
|models|[string]|false|none|none|
|method|string \| null|false|none|Optional method identifier|
|tags|[string]|false|none|Optional list of tags, null unless grouped by tags.|
|deployment|string \| null|false|none|Optional deployment identifier|

<h2 id="tocS_UsageBreakdownV1ResponseResultsItems">UsageBreakdownV1ResponseResultsItems</h2>
<!-- backwards compatibility -->
<a id="schemausagebreakdownv1responseresultsitems"></a>
<a id="schema_UsageBreakdownV1ResponseResultsItems"></a>
<a id="tocSusagebreakdownv1responseresultsitems"></a>
<a id="tocsusagebreakdownv1responseresultsitems"></a>

```json
{
  "hours": "string",
  "total_hours": "string",
  "agent_hours": "string",
  "tokens_in": 0,
  "tokens_out": 0,
  "tts_characters": 0,
  "requests": 0,
  "grouping": {
    "start": "1970-01-01",
    "end": "1970-01-01",
    "accessor": "string",
    "endpoint": "string",
    "feature_set": "string",
    "models": [
      "string"
    ],
    "method": "string",
    "tags": [
      "string"
    ],
    "deployment": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|string|true|none|Audio hours processed|
|total_hours|string|true|none|Total hours including all processing|
|agent_hours|string|true|none|Agent hours used|
|tokens_in|number(double)|true|none|Number of input tokens|
|tokens_out|number(double)|true|none|Number of output tokens|
|tts_characters|number(double)|true|none|Number of text-to-speech characters processed|
|requests|number(double)|true|none|Number of requests|
|grouping|[UsageBreakdownV1ResponseResultsItemsGrouping](#schemausagebreakdownv1responseresultsitemsgrouping)|true|none|none|

<h2 id="tocS_UsageBreakdownV1Response">UsageBreakdownV1Response</h2>
<!-- backwards compatibility -->
<a id="schemausagebreakdownv1response"></a>
<a id="schema_UsageBreakdownV1Response"></a>
<a id="tocSusagebreakdownv1response"></a>
<a id="tocsusagebreakdownv1response"></a>

```json
{
  "start": "1970-01-01",
  "end": "1970-01-01",
  "resolution": {
    "units": "string",
    "amount": 0
  },
  "results": [
    {
      "hours": "string",
      "total_hours": "string",
      "agent_hours": "string",
      "tokens_in": 0,
      "tokens_out": 0,
      "tts_characters": 0,
      "requests": 0,
      "grouping": {
        "start": "1970-01-01",
        "end": "1970-01-01",
        "accessor": "string",
        "endpoint": "string",
        "feature_set": "string",
        "models": [
          "string"
        ],
        "method": "string",
        "tags": [
          "string"
        ],
        "deployment": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string(date)|true|none|Start date of the usage period|
|end|string(date)|true|none|End date of the usage period|
|resolution|[UsageBreakdownV1ResponseResolution](#schemausagebreakdownv1responseresolution)|true|none|none|
|results|[[UsageBreakdownV1ResponseResultsItems](#schemausagebreakdownv1responseresultsitems)]|true|none|none|

<h2 id="tocS_ListProjectBalancesV1ResponseBalancesItems">ListProjectBalancesV1ResponseBalancesItems</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectbalancesv1responsebalancesitems"></a>
<a id="schema_ListProjectBalancesV1ResponseBalancesItems"></a>
<a id="tocSlistprojectbalancesv1responsebalancesitems"></a>
<a id="tocslistprojectbalancesv1responsebalancesitems"></a>

```json
{
  "balance_id": "string",
  "amount": 0,
  "units": "string",
  "purchase_order_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance_id|string|false|none|The unique identifier of the balance|
|amount|number(double)|false|none|The amount of the balance|
|units|string|false|none|The units of the balance, such as "USD"|
|purchase_order_id|string|false|none|Description or reference of the purchase|

<h2 id="tocS_ListProjectBalancesV1Response">ListProjectBalancesV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectbalancesv1response"></a>
<a id="schema_ListProjectBalancesV1Response"></a>
<a id="tocSlistprojectbalancesv1response"></a>
<a id="tocslistprojectbalancesv1response"></a>

```json
{
  "balances": [
    {
      "balance_id": "string",
      "amount": 0,
      "units": "string",
      "purchase_order_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balances|[[ListProjectBalancesV1ResponseBalancesItems](#schemalistprojectbalancesv1responsebalancesitems)]|false|none|none|

<h2 id="tocS_GetProjectBalanceV1Response">GetProjectBalanceV1Response</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectbalancev1response"></a>
<a id="schema_GetProjectBalanceV1Response"></a>
<a id="tocSgetprojectbalancev1response"></a>
<a id="tocsgetprojectbalancev1response"></a>

```json
{
  "balance_id": "string",
  "amount": 0,
  "units": "string",
  "purchase_order_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance_id|string|false|none|The unique identifier of the balance|
|amount|number(double)|false|none|The amount of the balance|
|units|string|false|none|The units of the balance, such as "USD"|
|purchase_order_id|string|false|none|Description or reference of the purchase|

<h2 id="tocS_V1ProjectsProjectIdBillingBreakdownGetParametersDeployment">V1ProjectsProjectIdBillingBreakdownGetParametersDeployment</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidbillingbreakdowngetparametersdeployment"></a>
<a id="schema_V1ProjectsProjectIdBillingBreakdownGetParametersDeployment"></a>
<a id="tocSv1projectsprojectidbillingbreakdowngetparametersdeployment"></a>
<a id="tocsv1projectsprojectidbillingbreakdowngetparametersdeployment"></a>

```json
"hosted"
```

Deployment type for the requests

<h2 id="tocS_V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems">V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidbillingbreakdowngetparametersgroupingschemaitems"></a>
<a id="schema_V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems"></a>
<a id="tocSv1projectsprojectidbillingbreakdowngetparametersgroupingschemaitems"></a>
<a id="tocsv1projectsprojectidbillingbreakdowngetparametersgroupingschemaitems"></a>

```json
"accessor"
```

<h2 id="tocS_BillingBreakdownV1ResponseResolution">BillingBreakdownV1ResponseResolution</h2>
<!-- backwards compatibility -->
<a id="schemabillingbreakdownv1responseresolution"></a>
<a id="schema_BillingBreakdownV1ResponseResolution"></a>
<a id="tocSbillingbreakdownv1responseresolution"></a>
<a id="tocsbillingbreakdownv1responseresolution"></a>

```json
{
  "units": "string",
  "amount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|units|string|true|none|Time unit for the resolution|
|amount|number(double)|true|none|Amount of units|

<h2 id="tocS_BillingBreakdownV1ResponseResultsItemsGrouping">BillingBreakdownV1ResponseResultsItemsGrouping</h2>
<!-- backwards compatibility -->
<a id="schemabillingbreakdownv1responseresultsitemsgrouping"></a>
<a id="schema_BillingBreakdownV1ResponseResultsItemsGrouping"></a>
<a id="tocSbillingbreakdownv1responseresultsitemsgrouping"></a>
<a id="tocsbillingbreakdownv1responseresultsitemsgrouping"></a>

```json
{
  "start": "1970-01-01",
  "end": "1970-01-01",
  "accessor": "string",
  "deployment": "string",
  "line_item": "string",
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string(date)|false|none|Start date for this group|
|end|string(date)|false|none|End date for this group|
|accessor|string \| null|false|none|Optional accessor identifier, null unless grouped by accessor.|
|deployment|string \| null|false|none|Optional deployment identifier, null unless grouped by deployment.|
|line_item|string \| null|false|none|Optional line item identifier, null unless grouped by line item.|
|tags|[string]|false|none|Optional list of tags, null unless grouped by tags.|

<h2 id="tocS_BillingBreakdownV1ResponseResultsItems">BillingBreakdownV1ResponseResultsItems</h2>
<!-- backwards compatibility -->
<a id="schemabillingbreakdownv1responseresultsitems"></a>
<a id="schema_BillingBreakdownV1ResponseResultsItems"></a>
<a id="tocSbillingbreakdownv1responseresultsitems"></a>
<a id="tocsbillingbreakdownv1responseresultsitems"></a>

```json
{
  "dollars": "string",
  "grouping": {
    "start": "1970-01-01",
    "end": "1970-01-01",
    "accessor": "string",
    "deployment": "string",
    "line_item": "string",
    "tags": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dollars|string|true|none|USD cost of the billing for this grouping|
|grouping|[BillingBreakdownV1ResponseResultsItemsGrouping](#schemabillingbreakdownv1responseresultsitemsgrouping)|true|none|none|

<h2 id="tocS_BillingBreakdownV1Response">BillingBreakdownV1Response</h2>
<!-- backwards compatibility -->
<a id="schemabillingbreakdownv1response"></a>
<a id="schema_BillingBreakdownV1Response"></a>
<a id="tocSbillingbreakdownv1response"></a>
<a id="tocsbillingbreakdownv1response"></a>

```json
{
  "start": "1970-01-01",
  "end": "1970-01-01",
  "resolution": {
    "units": "string",
    "amount": 0
  },
  "results": [
    {
      "dollars": "string",
      "grouping": {
        "start": "1970-01-01",
        "end": "1970-01-01",
        "accessor": "string",
        "deployment": "string",
        "line_item": "string",
        "tags": [
          "string"
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string(date)|true|none|Start date of the billing summmary period|
|end|string(date)|true|none|End date of the billing summary period|
|resolution|[BillingBreakdownV1ResponseResolution](#schemabillingbreakdownv1responseresolution)|true|none|none|
|results|[[BillingBreakdownV1ResponseResultsItems](#schemabillingbreakdownv1responseresultsitems)]|true|none|none|

<h2 id="tocS_ListBillingFieldsV1ResponseDeploymentsItems">ListBillingFieldsV1ResponseDeploymentsItems</h2>
<!-- backwards compatibility -->
<a id="schemalistbillingfieldsv1responsedeploymentsitems"></a>
<a id="schema_ListBillingFieldsV1ResponseDeploymentsItems"></a>
<a id="tocSlistbillingfieldsv1responsedeploymentsitems"></a>
<a id="tocslistbillingfieldsv1responsedeploymentsitems"></a>

```json
"hosted"
```

<h2 id="tocS_ListBillingFieldsV1Response">ListBillingFieldsV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistbillingfieldsv1response"></a>
<a id="schema_ListBillingFieldsV1Response"></a>
<a id="tocSlistbillingfieldsv1response"></a>
<a id="tocslistbillingfieldsv1response"></a>

```json
{
  "accessors": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "deployments": [
    "hosted"
  ],
  "tags": [
    "string"
  ],
  "line_items": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessors|[string(uuid)]|false|none|List of accessor UUIDs for the time period|
|deployments|[[ListBillingFieldsV1ResponseDeploymentsItems](#schemalistbillingfieldsv1responsedeploymentsitems)]|false|none|List of deployment types for the time period|
|tags|[string]|false|none|List of tags for the time period|
|line_items|object|false|none|Map of line item names to human-readable descriptions for the time period|

#### Enumerated Values

|Property|Value|
|---|---|
|deployments|hosted|
|deployments|beta|
|deployments|self-hosted|
|deployments|dedicated|

<h2 id="tocS_ListProjectPurchasesV1ResponseOrdersItems">ListProjectPurchasesV1ResponseOrdersItems</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectpurchasesv1responseordersitems"></a>
<a id="schema_ListProjectPurchasesV1ResponseOrdersItems"></a>
<a id="tocSlistprojectpurchasesv1responseordersitems"></a>
<a id="tocslistprojectpurchasesv1responseordersitems"></a>

```json
{
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "expiration": "1970-01-01T00:00:00Z",
  "created": "1970-01-01T00:00:00Z",
  "amount": "string",
  "units": "string",
  "order_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order_id|string(uuid)|false|none|none|
|expiration|string(date-time)|false|none|none|
|created|string(date-time)|false|none|none|
|amount|string|false|none|none|
|units|string|false|none|none|
|order_type|string|false|none|none|

<h2 id="tocS_ListProjectPurchasesV1Response">ListProjectPurchasesV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectpurchasesv1response"></a>
<a id="schema_ListProjectPurchasesV1Response"></a>
<a id="tocSlistprojectpurchasesv1response"></a>
<a id="tocslistprojectpurchasesv1response"></a>

```json
{
  "orders": [
    {
      "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "expiration": "1970-01-01T00:00:00Z",
      "created": "1970-01-01T00:00:00Z",
      "amount": "string",
      "units": "string",
      "order_type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orders|[[ListProjectPurchasesV1ResponseOrdersItems](#schemalistprojectpurchasesv1responseordersitems)]|false|none|none|

<h2 id="tocS_ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember">ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectdistributioncredentialsv1responsedistributioncredentialsitemsmember"></a>
<a id="schema_ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember"></a>
<a id="tocSlistprojectdistributioncredentialsv1responsedistributioncredentialsitemsmember"></a>
<a id="tocslistprojectdistributioncredentialsv1responsedistributioncredentialsitemsmember"></a>

```json
{
  "member_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "user@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member_id|string(uuid)|true|none|Unique identifier for the member|
|email|string(email)|true|none|Email address of the member|

<h2 id="tocS_ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials">ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectdistributioncredentialsv1responsedistributioncredentialsitemsdistributioncredentials"></a>
<a id="schema_ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials"></a>
<a id="tocSlistprojectdistributioncredentialsv1responsedistributioncredentialsitemsdistributioncredentials"></a>
<a id="tocslistprojectdistributioncredentialsv1responsedistributioncredentialsitemsdistributioncredentials"></a>

```json
{
  "distribution_credentials_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "provider": "string",
  "comment": "string",
  "scopes": [
    "string"
  ],
  "created": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distribution_credentials_id|string(uuid)|true|none|Unique identifier for the distribution credentials|
|provider|string|true|none|The provider of the distribution service|
|comment|string|false|none|Optional comment about the credentials|
|scopes|[string]|true|none|List of permission scopes for the credentials|
|created|string(date-time)|true|none|Timestamp when the credentials were created|

<h2 id="tocS_ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems">ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectdistributioncredentialsv1responsedistributioncredentialsitems"></a>
<a id="schema_ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems"></a>
<a id="tocSlistprojectdistributioncredentialsv1responsedistributioncredentialsitems"></a>
<a id="tocslistprojectdistributioncredentialsv1responsedistributioncredentialsitems"></a>

```json
{
  "member": {
    "member_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com"
  },
  "distribution_credentials": {
    "distribution_credentials_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "provider": "string",
    "comment": "string",
    "scopes": [
      "string"
    ],
    "created": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|[ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember](#schemalistprojectdistributioncredentialsv1responsedistributioncredentialsitemsmember)|true|none|none|
|distribution_credentials|[ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials](#schemalistprojectdistributioncredentialsv1responsedistributioncredentialsitemsdistributioncredentials)|true|none|none|

<h2 id="tocS_ListProjectDistributionCredentialsV1Response">ListProjectDistributionCredentialsV1Response</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectdistributioncredentialsv1response"></a>
<a id="schema_ListProjectDistributionCredentialsV1Response"></a>
<a id="tocSlistprojectdistributioncredentialsv1response"></a>
<a id="tocslistprojectdistributioncredentialsv1response"></a>

```json
{
  "distribution_credentials": [
    {
      "member": {
        "member_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": "user@example.com"
      },
      "distribution_credentials": {
        "distribution_credentials_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "provider": "string",
        "comment": "string",
        "scopes": [
          "string"
        ],
        "created": "1970-01-01T00:00:00Z"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distribution_credentials|[[ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems](#schemalistprojectdistributioncredentialsv1responsedistributioncredentialsitems)]|false|none|Array of distribution credentials with associated member information|

<h2 id="tocS_V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems">V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidselfhosteddistributioncredentialspostparametersscopesschemaitems"></a>
<a id="schema_V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems"></a>
<a id="tocSv1projectsprojectidselfhosteddistributioncredentialspostparametersscopesschemaitems"></a>
<a id="tocsv1projectsprojectidselfhosteddistributioncredentialspostparametersscopesschemaitems"></a>

```json
"self-hosted:products"
```

<h2 id="tocS_V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider">V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider</h2>
<!-- backwards compatibility -->
<a id="schemav1projectsprojectidselfhosteddistributioncredentialspostparametersprovider"></a>
<a id="schema_V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider"></a>
<a id="tocSv1projectsprojectidselfhosteddistributioncredentialspostparametersprovider"></a>
<a id="tocsv1projectsprojectidselfhosteddistributioncredentialspostparametersprovider"></a>

```json
"quay"
```

<h2 id="tocS_CreateProjectDistributionCredentialsV1Request">CreateProjectDistributionCredentialsV1Request</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectdistributioncredentialsv1request"></a>
<a id="schema_CreateProjectDistributionCredentialsV1Request"></a>
<a id="tocScreateprojectdistributioncredentialsv1request"></a>
<a id="tocscreateprojectdistributioncredentialsv1request"></a>

```json
{
  "comment": "string"
}
```

Request body for creating distribution credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|Optional comment about the credentials|

<h2 id="tocS_CreateProjectDistributionCredentialsV1ResponseMember">CreateProjectDistributionCredentialsV1ResponseMember</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectdistributioncredentialsv1responsemember"></a>
<a id="schema_CreateProjectDistributionCredentialsV1ResponseMember"></a>
<a id="tocScreateprojectdistributioncredentialsv1responsemember"></a>
<a id="tocscreateprojectdistributioncredentialsv1responsemember"></a>

```json
{
  "member_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "user@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member_id|string(uuid)|true|none|Unique identifier for the member|
|email|string(email)|true|none|Email address of the member|

<h2 id="tocS_CreateProjectDistributionCredentialsV1ResponseDistributionCredentials">CreateProjectDistributionCredentialsV1ResponseDistributionCredentials</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectdistributioncredentialsv1responsedistributioncredentials"></a>
<a id="schema_CreateProjectDistributionCredentialsV1ResponseDistributionCredentials"></a>
<a id="tocScreateprojectdistributioncredentialsv1responsedistributioncredentials"></a>
<a id="tocscreateprojectdistributioncredentialsv1responsedistributioncredentials"></a>

```json
{
  "distribution_credentials_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "provider": "string",
  "comment": "string",
  "scopes": [
    "string"
  ],
  "created": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distribution_credentials_id|string(uuid)|true|none|Unique identifier for the distribution credentials|
|provider|string|true|none|The provider of the distribution service|
|comment|string|false|none|Optional comment about the credentials|
|scopes|[string]|true|none|List of permission scopes for the credentials|
|created|string(date-time)|true|none|Timestamp when the credentials were created|

<h2 id="tocS_CreateProjectDistributionCredentialsV1Response">CreateProjectDistributionCredentialsV1Response</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectdistributioncredentialsv1response"></a>
<a id="schema_CreateProjectDistributionCredentialsV1Response"></a>
<a id="tocScreateprojectdistributioncredentialsv1response"></a>
<a id="tocscreateprojectdistributioncredentialsv1response"></a>

```json
{
  "member": {
    "member_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com"
  },
  "distribution_credentials": {
    "distribution_credentials_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "provider": "string",
    "comment": "string",
    "scopes": [
      "string"
    ],
    "created": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|[CreateProjectDistributionCredentialsV1ResponseMember](#schemacreateprojectdistributioncredentialsv1responsemember)|true|none|none|
|distribution_credentials|[CreateProjectDistributionCredentialsV1ResponseDistributionCredentials](#schemacreateprojectdistributioncredentialsv1responsedistributioncredentials)|true|none|none|

<h2 id="tocS_GetProjectDistributionCredentialsV1ResponseMember">GetProjectDistributionCredentialsV1ResponseMember</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectdistributioncredentialsv1responsemember"></a>
<a id="schema_GetProjectDistributionCredentialsV1ResponseMember"></a>
<a id="tocSgetprojectdistributioncredentialsv1responsemember"></a>
<a id="tocsgetprojectdistributioncredentialsv1responsemember"></a>

```json
{
  "member_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "user@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member_id|string(uuid)|true|none|Unique identifier for the member|
|email|string(email)|true|none|Email address of the member|

<h2 id="tocS_GetProjectDistributionCredentialsV1ResponseDistributionCredentials">GetProjectDistributionCredentialsV1ResponseDistributionCredentials</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectdistributioncredentialsv1responsedistributioncredentials"></a>
<a id="schema_GetProjectDistributionCredentialsV1ResponseDistributionCredentials"></a>
<a id="tocSgetprojectdistributioncredentialsv1responsedistributioncredentials"></a>
<a id="tocsgetprojectdistributioncredentialsv1responsedistributioncredentials"></a>

```json
{
  "distribution_credentials_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "provider": "string",
  "comment": "string",
  "scopes": [
    "string"
  ],
  "created": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distribution_credentials_id|string(uuid)|true|none|Unique identifier for the distribution credentials|
|provider|string|true|none|The provider of the distribution service|
|comment|string|false|none|Optional comment about the credentials|
|scopes|[string]|true|none|List of permission scopes for the credentials|
|created|string(date-time)|true|none|Timestamp when the credentials were created|

<h2 id="tocS_GetProjectDistributionCredentialsV1Response">GetProjectDistributionCredentialsV1Response</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectdistributioncredentialsv1response"></a>
<a id="schema_GetProjectDistributionCredentialsV1Response"></a>
<a id="tocSgetprojectdistributioncredentialsv1response"></a>
<a id="tocsgetprojectdistributioncredentialsv1response"></a>

```json
{
  "member": {
    "member_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com"
  },
  "distribution_credentials": {
    "distribution_credentials_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "provider": "string",
    "comment": "string",
    "scopes": [
      "string"
    ],
    "created": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|[GetProjectDistributionCredentialsV1ResponseMember](#schemagetprojectdistributioncredentialsv1responsemember)|true|none|none|
|distribution_credentials|[GetProjectDistributionCredentialsV1ResponseDistributionCredentials](#schemagetprojectdistributioncredentialsv1responsedistributioncredentials)|true|none|none|

<h2 id="tocS_GrantV1Request">GrantV1Request</h2>
<!-- backwards compatibility -->
<a id="schemagrantv1request"></a>
<a id="schema_GrantV1Request"></a>
<a id="tocSgrantv1request"></a>
<a id="tocsgrantv1request"></a>

```json
{
  "ttl_seconds": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ttl_seconds|number(double)|false|none|Time to live in seconds for the token. Defaults to 30 seconds.|

<h2 id="tocS_GrantV1Response">GrantV1Response</h2>
<!-- backwards compatibility -->
<a id="schemagrantv1response"></a>
<a id="schema_GrantV1Response"></a>
<a id="tocSgrantv1response"></a>
<a id="tocsgrantv1response"></a>

```json
{
  "access_token": "string",
  "expires_in": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|JSON Web Token (JWT)|
|expires_in|number(double)|false|none|Time in seconds until the JWT expires|

<h2 id="tocS_V2SpeakPostParametersCallbackMethod">V2SpeakPostParametersCallbackMethod</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterscallbackmethod"></a>
<a id="schema_V2SpeakPostParametersCallbackMethod"></a>
<a id="tocSv2speakpostparameterscallbackmethod"></a>
<a id="tocsv2speakpostparameterscallbackmethod"></a>

```json
"POST"
```

<h2 id="tocS_V2SpeakPostParametersTag">V2SpeakPostParametersTag</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterstag"></a>
<a id="schema_V2SpeakPostParametersTag"></a>
<a id="tocSv2speakpostparameterstag"></a>
<a id="tocsv2speakpostparameterstag"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_V2SpeakPostParametersBitRate0">V2SpeakPostParametersBitRate0</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparametersbitrate0"></a>
<a id="schema_V2SpeakPostParametersBitRate0"></a>
<a id="tocSv2speakpostparametersbitrate0"></a>
<a id="tocsv2speakpostparametersbitrate0"></a>

```json
"8000"
```

Encoding - mp3(default). Supported bitrates - 8000, 16000, 24000, 32000, 40000, 48000(default) bps.

<h2 id="tocS_V2SpeakPostParametersBitRate">V2SpeakPostParametersBitRate</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparametersbitrate"></a>
<a id="schema_V2SpeakPostParametersBitRate"></a>
<a id="tocSv2speakpostparametersbitrate"></a>
<a id="tocsv2speakpostparametersbitrate"></a>

```json
"8000"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[V2SpeakPostParametersBitRate0](#schemav2speakpostparametersbitrate0)|false|none|Encoding - mp3(default). Supported bitrates - 8000, 16000, 24000, 32000, 40000, 48000(default) bps.|
|*oneOf*|integer|false|none|none|
|*oneOf*|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|8000|
|*oneOf*|16000|
|*oneOf*|24000|
|*oneOf*|32000|
|*oneOf*|40000|
|*oneOf*|48000|

<h2 id="tocS_V2SpeakPostParametersContainer0">V2SpeakPostParametersContainer0</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterscontainer0"></a>
<a id="schema_V2SpeakPostParametersContainer0"></a>
<a id="tocSv2speakpostparameterscontainer0"></a>
<a id="tocsv2speakpostparameterscontainer0"></a>

```json
"none"
```

No container.

<h2 id="tocS_V2SpeakPostParametersContainer1">V2SpeakPostParametersContainer1</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterscontainer1"></a>
<a id="schema_V2SpeakPostParametersContainer1"></a>
<a id="tocSv2speakpostparameterscontainer1"></a>
<a id="tocsv2speakpostparameterscontainer1"></a>

```json
"wav"
```

Encoding - linear16. Supported container - wav (default), or no container.

<h2 id="tocS_V2SpeakPostParametersContainer2">V2SpeakPostParametersContainer2</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterscontainer2"></a>
<a id="schema_V2SpeakPostParametersContainer2"></a>
<a id="tocSv2speakpostparameterscontainer2"></a>
<a id="tocsv2speakpostparameterscontainer2"></a>

```json
"wav"
```

Encoding - mulaw. Supported container - wav (default), or no container.

<h2 id="tocS_V2SpeakPostParametersContainer3">V2SpeakPostParametersContainer3</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterscontainer3"></a>
<a id="schema_V2SpeakPostParametersContainer3"></a>
<a id="tocSv2speakpostparameterscontainer3"></a>
<a id="tocsv2speakpostparameterscontainer3"></a>

```json
"wav"
```

Encoding - alaw. Supported container - wav (default), or no container.

<h2 id="tocS_V2SpeakPostParametersContainer4">V2SpeakPostParametersContainer4</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterscontainer4"></a>
<a id="schema_V2SpeakPostParametersContainer4"></a>
<a id="tocSv2speakpostparameterscontainer4"></a>
<a id="tocsv2speakpostparameterscontainer4"></a>

```json
"ogg"
```

Encoding - opus. Supported container - ogg (default).

<h2 id="tocS_V2SpeakPostParametersContainer">V2SpeakPostParametersContainer</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterscontainer"></a>
<a id="schema_V2SpeakPostParametersContainer"></a>
<a id="tocSv2speakpostparameterscontainer"></a>
<a id="tocsv2speakpostparameterscontainer"></a>

```json
"none"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[V2SpeakPostParametersContainer0](#schemav2speakpostparameterscontainer0)|false|none|No container.|
|*oneOf*|[V2SpeakPostParametersContainer1](#schemav2speakpostparameterscontainer1)|false|none|Encoding - linear16. Supported container - wav (default), or no container.|
|*oneOf*|[V2SpeakPostParametersContainer2](#schemav2speakpostparameterscontainer2)|false|none|Encoding - mulaw. Supported container - wav (default), or no container.|
|*oneOf*|[V2SpeakPostParametersContainer3](#schemav2speakpostparameterscontainer3)|false|none|Encoding - alaw. Supported container - wav (default), or no container.|
|*oneOf*|[V2SpeakPostParametersContainer4](#schemav2speakpostparameterscontainer4)|false|none|Encoding - opus. Supported container - ogg (default).|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|none|
|*oneOf*|wav|
|*oneOf*|wav|
|*oneOf*|wav|
|*oneOf*|ogg|

<h2 id="tocS_V2SpeakPostParametersEncoding0">V2SpeakPostParametersEncoding0</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparametersencoding0"></a>
<a id="schema_V2SpeakPostParametersEncoding0"></a>
<a id="tocSv2speakpostparametersencoding0"></a>
<a id="tocsv2speakpostparametersencoding0"></a>

```json
"linear16"
```

Encoding - linear16. Uncompressed, high-quality audio format often used for telephony or audio processing.

<h2 id="tocS_V2SpeakPostParametersEncoding1">V2SpeakPostParametersEncoding1</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparametersencoding1"></a>
<a id="schema_V2SpeakPostParametersEncoding1"></a>
<a id="tocSv2speakpostparametersencoding1"></a>
<a id="tocsv2speakpostparametersencoding1"></a>

```json
"flac"
```

Encoding - flac. Lossless audio format for high-quality compression.

<h2 id="tocS_V2SpeakPostParametersEncoding2">V2SpeakPostParametersEncoding2</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparametersencoding2"></a>
<a id="schema_V2SpeakPostParametersEncoding2"></a>
<a id="tocSv2speakpostparametersencoding2"></a>
<a id="tocsv2speakpostparametersencoding2"></a>

```json
"mulaw"
```

Encoding - mulaw. Compressed audio format commonly used in telephony.

<h2 id="tocS_V2SpeakPostParametersEncoding3">V2SpeakPostParametersEncoding3</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparametersencoding3"></a>
<a id="schema_V2SpeakPostParametersEncoding3"></a>
<a id="tocSv2speakpostparametersencoding3"></a>
<a id="tocsv2speakpostparametersencoding3"></a>

```json
"alaw"
```

Encoding - alaw. Similar to mulaw but used in international telephony.

<h2 id="tocS_V2SpeakPostParametersEncoding4">V2SpeakPostParametersEncoding4</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparametersencoding4"></a>
<a id="schema_V2SpeakPostParametersEncoding4"></a>
<a id="tocSv2speakpostparametersencoding4"></a>
<a id="tocsv2speakpostparametersencoding4"></a>

```json
"mp3"
```

Encoding - mp3. Popular compressed audio format for music and streaming.

<h2 id="tocS_V2SpeakPostParametersEncoding5">V2SpeakPostParametersEncoding5</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparametersencoding5"></a>
<a id="schema_V2SpeakPostParametersEncoding5"></a>
<a id="tocSv2speakpostparametersencoding5"></a>
<a id="tocsv2speakpostparametersencoding5"></a>

```json
"opus"
```

Encoding - opus. High-compression audio format optimized for real-time communications.

<h2 id="tocS_V2SpeakPostParametersEncoding6">V2SpeakPostParametersEncoding6</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparametersencoding6"></a>
<a id="schema_V2SpeakPostParametersEncoding6"></a>
<a id="tocSv2speakpostparametersencoding6"></a>
<a id="tocsv2speakpostparametersencoding6"></a>

```json
"aac"
```

Encoding - aac. Advanced audio format offering better quality at smaller file sizes than mp3.

<h2 id="tocS_V2SpeakPostParametersEncoding">V2SpeakPostParametersEncoding</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparametersencoding"></a>
<a id="schema_V2SpeakPostParametersEncoding"></a>
<a id="tocSv2speakpostparametersencoding"></a>
<a id="tocsv2speakpostparametersencoding"></a>

```json
"linear16"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[V2SpeakPostParametersEncoding0](#schemav2speakpostparametersencoding0)|false|none|Encoding - linear16. Uncompressed, high-quality audio format often used for telephony or audio processing.|
|*oneOf*|[V2SpeakPostParametersEncoding1](#schemav2speakpostparametersencoding1)|false|none|Encoding - flac. Lossless audio format for high-quality compression.|
|*oneOf*|[V2SpeakPostParametersEncoding2](#schemav2speakpostparametersencoding2)|false|none|Encoding - mulaw. Compressed audio format commonly used in telephony.|
|*oneOf*|[V2SpeakPostParametersEncoding3](#schemav2speakpostparametersencoding3)|false|none|Encoding - alaw. Similar to mulaw but used in international telephony.|
|*oneOf*|[V2SpeakPostParametersEncoding4](#schemav2speakpostparametersencoding4)|false|none|Encoding - mp3. Popular compressed audio format for music and streaming.|
|*oneOf*|[V2SpeakPostParametersEncoding5](#schemav2speakpostparametersencoding5)|false|none|Encoding - opus. High-compression audio format optimized for real-time communications.|
|*oneOf*|[V2SpeakPostParametersEncoding6](#schemav2speakpostparametersencoding6)|false|none|Encoding - aac. Advanced audio format offering better quality at smaller file sizes than mp3.|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|linear16|
|*oneOf*|flac|
|*oneOf*|mulaw|
|*oneOf*|alaw|
|*oneOf*|mp3|
|*oneOf*|opus|
|*oneOf*|aac|

<h2 id="tocS_V2SpeakPostParametersExpressivity">V2SpeakPostParametersExpressivity</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparametersexpressivity"></a>
<a id="schema_V2SpeakPostParametersExpressivity"></a>
<a id="tocSv2speakpostparametersexpressivity"></a>
<a id="tocsv2speakpostparametersexpressivity"></a>

```json
"-2"
```

<h2 id="tocS_V2SpeakPostParametersSampleRate0">V2SpeakPostParametersSampleRate0</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterssamplerate0"></a>
<a id="schema_V2SpeakPostParametersSampleRate0"></a>
<a id="tocSv2speakpostparameterssamplerate0"></a>
<a id="tocsv2speakpostparameterssamplerate0"></a>

```json
"8000"
```

Encoding - linear16. Supported sample rates - 8000, 16000, 24000, 32000, 44100, 48000 Hz.

<h2 id="tocS_V2SpeakPostParametersSampleRate1">V2SpeakPostParametersSampleRate1</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterssamplerate1"></a>
<a id="schema_V2SpeakPostParametersSampleRate1"></a>
<a id="tocSv2speakpostparameterssamplerate1"></a>
<a id="tocsv2speakpostparameterssamplerate1"></a>

```json
"8000"
```

Encoding - mulaw. Supported sample rates - 8000, 16000 Hz.

<h2 id="tocS_V2SpeakPostParametersSampleRate2">V2SpeakPostParametersSampleRate2</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterssamplerate2"></a>
<a id="schema_V2SpeakPostParametersSampleRate2"></a>
<a id="tocSv2speakpostparameterssamplerate2"></a>
<a id="tocsv2speakpostparameterssamplerate2"></a>

```json
"8000"
```

Encoding - alaw. Supported sample rates - 8000, 16000 Hz.

<h2 id="tocS_V2SpeakPostParametersSampleRate3">V2SpeakPostParametersSampleRate3</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterssamplerate3"></a>
<a id="schema_V2SpeakPostParametersSampleRate3"></a>
<a id="tocSv2speakpostparameterssamplerate3"></a>
<a id="tocsv2speakpostparameterssamplerate3"></a>

```json
"8000"
```

Encoding - flac. Supported sample rates - 8000, 16000, 22050, 32000, 48000 Hz.

<h2 id="tocS_V2SpeakPostParametersSampleRate">V2SpeakPostParametersSampleRate</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterssamplerate"></a>
<a id="schema_V2SpeakPostParametersSampleRate"></a>
<a id="tocSv2speakpostparameterssamplerate"></a>
<a id="tocsv2speakpostparameterssamplerate"></a>

```json
"8000"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[V2SpeakPostParametersSampleRate0](#schemav2speakpostparameterssamplerate0)|false|none|Encoding - linear16. Supported sample rates - 8000, 16000, 24000, 32000, 44100, 48000 Hz.|
|*oneOf*|[V2SpeakPostParametersSampleRate1](#schemav2speakpostparameterssamplerate1)|false|none|Encoding - mulaw. Supported sample rates - 8000, 16000 Hz.|
|*oneOf*|[V2SpeakPostParametersSampleRate2](#schemav2speakpostparameterssamplerate2)|false|none|Encoding - alaw. Supported sample rates - 8000, 16000 Hz.|
|*oneOf*|[V2SpeakPostParametersSampleRate3](#schemav2speakpostparameterssamplerate3)|false|none|Encoding - flac. Supported sample rates - 8000, 16000, 22050, 32000, 48000 Hz.|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|8000|
|*oneOf*|16000|
|*oneOf*|24000|
|*oneOf*|32000|
|*oneOf*|44100|
|*oneOf*|48000|
|*oneOf*|8000|
|*oneOf*|16000|
|*oneOf*|8000|
|*oneOf*|16000|
|*oneOf*|8000|
|*oneOf*|16000|
|*oneOf*|22050|
|*oneOf*|32000|
|*oneOf*|48000|

<h2 id="tocS_V2SpeakPostParametersPriority">V2SpeakPostParametersPriority</h2>
<!-- backwards compatibility -->
<a id="schemav2speakpostparameterspriority"></a>
<a id="schema_V2SpeakPostParametersPriority"></a>
<a id="tocSv2speakpostparameterspriority"></a>
<a id="tocsv2speakpostparameterspriority"></a>

```json
"low"
```

<h2 id="tocS_SpeakV2Request">SpeakV2Request</h2>
<!-- backwards compatibility -->
<a id="schemaspeakv2request"></a>
<a id="schema_SpeakV2Request"></a>
<a id="tocSspeakv2request"></a>
<a id="tocsspeakv2request"></a>

```json
{
  "text": "string"
}
```

Request body for Flux TTS batch (REST) text-to-speech conversion. The full block of text is synthesized in a single request and returned as one audio response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The text content to be converted to speech. For English, German, Dutch, French, Hindi, Italian, Japanese, Portuguese, Russian and Spanish, the server normalizes the text (numbers, dates, abbreviations) before synthesis; the other languages are in Early Access without text normalization, so write numbers and dates out in words. May contain inline pause controls (`\{pause:500ms\}`, 500-3000 ms in 100 ms steps, at most 8 per request) and inline pronunciation controls (`\{"word": "...", "pronounce": "<IPA>"\}`, Early Access). Pronunciation cannot be combined with pause or with a `speed` other than `1.0`, and `speed` is capped at `1.15` when a pause is present. See [Speed, Pause, Pronunciation](/docs/tts-voice-controls).|

<h2 id="tocS_SpeakV2AcceptedResponse">SpeakV2AcceptedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaspeakv2acceptedresponse"></a>
<a id="schema_SpeakV2AcceptedResponse"></a>
<a id="tocSspeakv2acceptedresponse"></a>
<a id="tocsspeakv2acceptedresponse"></a>

```json
{
  "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Accepted response returned when a callback URL is supplied; the audio is delivered asynchronously to that URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string(uuid)|true|none|Unique identifier for tracking the asynchronous request|
