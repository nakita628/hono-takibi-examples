<h1 id="nlpcloud">NLPCloud v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="nlpcloud-default">Default</h1>

## Read Root

<a id="opIdread_root_v1_en_core_web_sm__get"></a>

> Code samples

```bash
curl https://example.com/v1/en_core_web_sm/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/en_core_web_sm/`

> Example responses

> 200 Response

```json
null
```

<h3 id="read-root-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Read Dependencies

<a id="opIdread_dependencies_v1_en_core_web_sm_dependencies_post"></a>

> Code samples

```bash
curl https://example.com/v1/en_core_web_sm/dependencies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "text": "string"
  }'
```

`POST /v1/en_core_web_sm/dependencies`

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="read-dependencies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserRequestIn](#schemauserrequestin)|true|none|
|» text|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "arcs": [
    {
      "dir": "string",
      "end": 0,
      "label": "string",
      "start": 0,
      "text": "string"
    }
  ],
  "words": [
    {
      "tag": "string",
      "text": "string"
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

<h3 id="read-dependencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DependenciesOut](#schemadependenciesout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Read Entities

<a id="opIdread_entities_v1_en_core_web_sm_entities_post"></a>

> Code samples

```bash
curl https://example.com/v1/en_core_web_sm/entities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "text": "string"
  }'
```

`POST /v1/en_core_web_sm/entities`

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="read-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserRequestIn](#schemauserrequestin)|true|none|
|» text|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "end": 0,
      "start": 0,
      "text": "string",
      "type": "string"
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

<h3 id="read-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[EntitiesOut](#schemaentitiesout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Read Sentence Dependencies

<a id="opIdread_sentence_dependencies_v1_en_core_web_sm_sentence_dependencies_post"></a>

> Code samples

```bash
curl https://example.com/v1/en_core_web_sm/sentence-dependencies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "text": "string"
  }'
```

`POST /v1/en_core_web_sm/sentence-dependencies`

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="read-sentence-dependencies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserRequestIn](#schemauserrequestin)|true|none|
|» text|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "sentence_dependencies": [
    {
      "dependencies": {
        "arcs": [
          {
            "dir": "string",
            "end": 0,
            "label": "string",
            "start": 0,
            "text": "string"
          }
        ],
        "words": [
          {
            "tag": "string",
            "text": "string"
          }
        ]
      },
      "sentence": "string"
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

<h3 id="read-sentence-dependencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SentenceDependenciesOut](#schemasentencedependenciesout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Read Version

<a id="opIdread_version_v1_en_core_web_sm_version_get"></a>

> Code samples

```bash
curl https://example.com/v1/en_core_web_sm/version \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/en_core_web_sm/version`

> Example responses

> 200 Response

```json
{
  "spacy": "string"
}
```

<h3 id="read-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VersionOut](#schemaversionout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_Arc">Arc</h2>
<!-- backwards compatibility -->
<a id="schemaarc"></a>
<a id="schema_Arc"></a>
<a id="tocSarc"></a>
<a id="tocsarc"></a>

```json
{
  "dir": "string",
  "end": 0,
  "label": "string",
  "start": 0,
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dir|string|true|none|none|
|end|integer|true|none|none|
|label|string|true|none|none|
|start|integer|true|none|none|
|text|string|true|none|none|

<h2 id="tocS_DependenciesOut">DependenciesOut</h2>
<!-- backwards compatibility -->
<a id="schemadependenciesout"></a>
<a id="schema_DependenciesOut"></a>
<a id="tocSdependenciesout"></a>
<a id="tocsdependenciesout"></a>

```json
{
  "arcs": [
    {
      "dir": "string",
      "end": 0,
      "label": "string",
      "start": 0,
      "text": "string"
    }
  ],
  "words": [
    {
      "tag": "string",
      "text": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arcs|[[Arc](#schemaarc)]|true|none|none|
|words|[[Word](#schemaword)]|true|none|none|

<h2 id="tocS_EntitiesOut">EntitiesOut</h2>
<!-- backwards compatibility -->
<a id="schemaentitiesout"></a>
<a id="schema_EntitiesOut"></a>
<a id="tocSentitiesout"></a>
<a id="tocsentitiesout"></a>

```json
{
  "entities": [
    {
      "end": 0,
      "start": 0,
      "text": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[EntityOut](#schemaentityout)]|true|none|none|

<h2 id="tocS_EntityOut">EntityOut</h2>
<!-- backwards compatibility -->
<a id="schemaentityout"></a>
<a id="schema_EntityOut"></a>
<a id="tocSentityout"></a>
<a id="tocsentityout"></a>

```json
{
  "end": 0,
  "start": 0,
  "text": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer|true|none|none|
|start|integer|true|none|none|
|text|string|true|none|none|
|type|string|true|none|none|

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

<h2 id="tocS_SentenceDependenciesOut">SentenceDependenciesOut</h2>
<!-- backwards compatibility -->
<a id="schemasentencedependenciesout"></a>
<a id="schema_SentenceDependenciesOut"></a>
<a id="tocSsentencedependenciesout"></a>
<a id="tocssentencedependenciesout"></a>

```json
{
  "sentence_dependencies": [
    {
      "dependencies": {
        "arcs": [
          {
            "dir": "string",
            "end": 0,
            "label": "string",
            "start": 0,
            "text": "string"
          }
        ],
        "words": [
          {
            "tag": "string",
            "text": "string"
          }
        ]
      },
      "sentence": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentence_dependencies|[[SentenceDependencyOut](#schemasentencedependencyout)]|true|none|none|

<h2 id="tocS_SentenceDependencyOut">SentenceDependencyOut</h2>
<!-- backwards compatibility -->
<a id="schemasentencedependencyout"></a>
<a id="schema_SentenceDependencyOut"></a>
<a id="tocSsentencedependencyout"></a>
<a id="tocssentencedependencyout"></a>

```json
{
  "dependencies": {
    "arcs": [
      {
        "dir": "string",
        "end": 0,
        "label": "string",
        "start": 0,
        "text": "string"
      }
    ],
    "words": [
      {
        "tag": "string",
        "text": "string"
      }
    ]
  },
  "sentence": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dependencies|[DependenciesOut](#schemadependenciesout)|true|none|none|
|sentence|string|true|none|none|

<h2 id="tocS_UserRequestIn">UserRequestIn</h2>
<!-- backwards compatibility -->
<a id="schemauserrequestin"></a>
<a id="schema_UserRequestIn"></a>
<a id="tocSuserrequestin"></a>
<a id="tocsuserrequestin"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|none|

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
|loc|[string]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_VersionOut">VersionOut</h2>
<!-- backwards compatibility -->
<a id="schemaversionout"></a>
<a id="schema_VersionOut"></a>
<a id="tocSversionout"></a>
<a id="tocsversionout"></a>

```json
{
  "spacy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spacy|string|true|none|none|

<h2 id="tocS_Word">Word</h2>
<!-- backwards compatibility -->
<a id="schemaword"></a>
<a id="schema_Word"></a>
<a id="tocSword"></a>
<a id="tocsword"></a>

```json
{
  "tag": "string",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|true|none|none|
|text|string|true|none|none|
