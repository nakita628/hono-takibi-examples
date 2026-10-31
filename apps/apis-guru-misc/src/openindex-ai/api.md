<h1 id="openindex-retrieval-plugin-api">OpenIndex Retrieval Plugin API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A retrieval API for querying and filtering documents based on natural language queries and metadata

Base URLs:

* <a href="https://api.apis.guru/sub">https://api.apis.guru/sub</a>

* <a href="https://retriever.openindex.ai">https://retriever.openindex.ai</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="openindex-retrieval-plugin-api-default">Default</h1>

## Query

<a id="opIdquery_query_post"></a>

> Code samples

```bash
curl https://example.com/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "namespace": "string",
    "queries": [
      {
        "filter": {
          "author": "string",
          "collection_id": "string",
          "document_id": "string",
          "end_date": "string",
          "keywords": [
            "string"
          ],
          "language": "string",
          "source": "email",
          "source_id": "string",
          "start_date": "string",
          "time_period": "string",
          "user_id": "string"
        },
        "query": "string",
        "top_k": 3
      }
    ]
  }'
```

`POST /query`

Accepts search query objects array each with query and optional filter. Break down complex questions into sub-questions. Refine results by criteria, e.g. time / source, don't do this often. Split queries if ResponseTooLargeError occurs.

> Body parameter

```json
{
  "namespace": "string",
  "queries": [
    {
      "filter": {
        "author": "string",
        "collection_id": "string",
        "document_id": "string",
        "end_date": "string",
        "keywords": [
          "string"
        ],
        "language": "string",
        "source": "email",
        "source_id": "string",
        "start_date": "string",
        "time_period": "string",
        "user_id": "string"
      },
      "query": "string",
      "top_k": 3
    }
  ]
}
```

<h3 id="query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QueryRequest](#schemaqueryrequest)|true|none|
|» namespace|body|string|false|none|
|» queries|body|[[Query](#schemaquery)]|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "query": "string",
      "results": [
        {
          "embedding": [
            0
          ],
          "id": "string",
          "metadata": {
            "author": "string",
            "collection_id": "string",
            "created_at": "string",
            "document_id": "string",
            "keywords": [
              "string"
            ],
            "language": "string",
            "source": "email",
            "source_id": "string",
            "time_period": "string",
            "updated_at": "string",
            "url": "string",
            "user_id": "string"
          },
          "score": 0,
          "text": "string"
        }
      ]
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

<h3 id="query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[QueryResponse](#schemaqueryresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HTTPBearer
</aside>

# Schemas

<h2 id="tocS_DocumentChunkMetadata">DocumentChunkMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadocumentchunkmetadata"></a>
<a id="schema_DocumentChunkMetadata"></a>
<a id="tocSdocumentchunkmetadata"></a>
<a id="tocsdocumentchunkmetadata"></a>

```json
{
  "author": "string",
  "collection_id": "string",
  "created_at": "string",
  "document_id": "string",
  "keywords": [
    "string"
  ],
  "language": "string",
  "source": "email",
  "source_id": "string",
  "time_period": "string",
  "updated_at": "string",
  "url": "string",
  "user_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|none|
|collection_id|string|false|none|none|
|created_at|string|false|none|none|
|document_id|string|false|none|none|
|keywords|[string]|false|none|none|
|language|string|false|none|none|
|source|[Source](#schemasource)|false|none|An enumeration.|
|source_id|string|false|none|none|
|time_period|string|false|none|none|
|updated_at|string|false|none|none|
|url|string|false|none|none|
|user_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|email|
|source|web|
|source|file|
|source|chat|

<h2 id="tocS_DocumentChunkWithScore">DocumentChunkWithScore</h2>
<!-- backwards compatibility -->
<a id="schemadocumentchunkwithscore"></a>
<a id="schema_DocumentChunkWithScore"></a>
<a id="tocSdocumentchunkwithscore"></a>
<a id="tocsdocumentchunkwithscore"></a>

```json
{
  "embedding": [
    0
  ],
  "id": "string",
  "metadata": {
    "author": "string",
    "collection_id": "string",
    "created_at": "string",
    "document_id": "string",
    "keywords": [
      "string"
    ],
    "language": "string",
    "source": "email",
    "source_id": "string",
    "time_period": "string",
    "updated_at": "string",
    "url": "string",
    "user_id": "string"
  },
  "score": 0,
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embedding|[number]|false|none|none|
|id|string|false|none|none|
|metadata|[DocumentChunkMetadata](#schemadocumentchunkmetadata)|true|none|none|
|score|number|true|none|none|
|text|string|true|none|none|

<h2 id="tocS_DocumentMetadataFilter">DocumentMetadataFilter</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmetadatafilter"></a>
<a id="schema_DocumentMetadataFilter"></a>
<a id="tocSdocumentmetadatafilter"></a>
<a id="tocsdocumentmetadatafilter"></a>

```json
{
  "author": "string",
  "collection_id": "string",
  "document_id": "string",
  "end_date": "string",
  "keywords": [
    "string"
  ],
  "language": "string",
  "source": "email",
  "source_id": "string",
  "start_date": "string",
  "time_period": "string",
  "user_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|none|
|collection_id|string|false|none|none|
|document_id|string|false|none|none|
|end_date|string|false|none|none|
|keywords|[string]|false|none|none|
|language|string|false|none|none|
|source|[Source](#schemasource)|false|none|An enumeration.|
|source_id|string|false|none|none|
|start_date|string|false|none|none|
|time_period|string|false|none|none|
|user_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|email|
|source|web|
|source|file|
|source|chat|

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

<h2 id="tocS_Query">Query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_Query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
{
  "filter": {
    "author": "string",
    "collection_id": "string",
    "document_id": "string",
    "end_date": "string",
    "keywords": [
      "string"
    ],
    "language": "string",
    "source": "email",
    "source_id": "string",
    "start_date": "string",
    "time_period": "string",
    "user_id": "string"
  },
  "query": "string",
  "top_k": 3
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[DocumentMetadataFilter](#schemadocumentmetadatafilter)|false|none|none|
|query|string|true|none|none|
|top_k|integer|false|none|none|

<h2 id="tocS_QueryRequest">QueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrequest"></a>
<a id="schema_QueryRequest"></a>
<a id="tocSqueryrequest"></a>
<a id="tocsqueryrequest"></a>

```json
{
  "namespace": "string",
  "queries": [
    {
      "filter": {
        "author": "string",
        "collection_id": "string",
        "document_id": "string",
        "end_date": "string",
        "keywords": [
          "string"
        ],
        "language": "string",
        "source": "email",
        "source_id": "string",
        "start_date": "string",
        "time_period": "string",
        "user_id": "string"
      },
      "query": "string",
      "top_k": 3
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|string|false|none|none|
|queries|[[Query](#schemaquery)]|true|none|none|

<h2 id="tocS_QueryResponse">QueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresponse"></a>
<a id="schema_QueryResponse"></a>
<a id="tocSqueryresponse"></a>
<a id="tocsqueryresponse"></a>

```json
{
  "results": [
    {
      "query": "string",
      "results": [
        {
          "embedding": [
            0
          ],
          "id": "string",
          "metadata": {
            "author": "string",
            "collection_id": "string",
            "created_at": "string",
            "document_id": "string",
            "keywords": [
              "string"
            ],
            "language": "string",
            "source": "email",
            "source_id": "string",
            "time_period": "string",
            "updated_at": "string",
            "url": "string",
            "user_id": "string"
          },
          "score": 0,
          "text": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[QueryResult](#schemaqueryresult)]|true|none|none|

<h2 id="tocS_QueryResult">QueryResult</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresult"></a>
<a id="schema_QueryResult"></a>
<a id="tocSqueryresult"></a>
<a id="tocsqueryresult"></a>

```json
{
  "query": "string",
  "results": [
    {
      "embedding": [
        0
      ],
      "id": "string",
      "metadata": {
        "author": "string",
        "collection_id": "string",
        "created_at": "string",
        "document_id": "string",
        "keywords": [
          "string"
        ],
        "language": "string",
        "source": "email",
        "source_id": "string",
        "time_period": "string",
        "updated_at": "string",
        "url": "string",
        "user_id": "string"
      },
      "score": 0,
      "text": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|none|
|results|[[DocumentChunkWithScore](#schemadocumentchunkwithscore)]|true|none|none|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
"email"
```

An enumeration.

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
