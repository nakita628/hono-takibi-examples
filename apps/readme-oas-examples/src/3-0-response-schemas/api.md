<h1 id="responses-with-various-schema-formats">Responses with various schema formats v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schema-object

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="responses-with-various-schema-formats-default">Default</h1>

## Array of primitives

> Code samples

```bash
curl https://example.com/anything/array-of-primitives \
  -H 'Accept: application/json'
```

`GET /anything/array-of-primitives`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="array-of-primitives-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="array-of-primitives-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Object (also demonstrates readonly/writeonly)

> Code samples

```bash
curl https://example.com/anything/object \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "primitive": "string",
    "write-only": "string",
    "object": {
      "primitive": true
    },
    "array": [
      {
        "primitive": true
      }
    ],
    "pets": [
      {
        "id": 0,
        "name": "doggie",
        "name2": "doggie",
        "name3": "doggie",
        "name4": "doggie",
        "name5": "doggie",
        "name6": "doggie",
        "name7": "doggie",
        "name8": "doggie",
        "name9": "doggie",
        "name10": "doggie",
        "name11": "doggie",
        "name12": "doggie",
        "name13": "doggie",
        "name14": "doggie",
        "name15": "doggie",
        "name16": "doggie",
        "name17": "doggie",
        "name18": "doggie",
        "name19": "doggie",
        "photoUrls": [
          "string"
        ],
        "status": "available"
      }
    ]
  }'
```

`GET /anything/object`

> Body parameter

```json
{
  "primitive": "string",
  "write-only": "string",
  "object": {
    "primitive": true
  },
  "array": [
    {
      "primitive": true
    }
  ],
  "pets": [
    {
      "id": 0,
      "name": "doggie",
      "name2": "doggie",
      "name3": "doggie",
      "name4": "doggie",
      "name5": "doggie",
      "name6": "doggie",
      "name7": "doggie",
      "name8": "doggie",
      "name9": "doggie",
      "name10": "doggie",
      "name11": "doggie",
      "name12": "doggie",
      "name13": "doggie",
      "name14": "doggie",
      "name15": "doggie",
      "name16": "doggie",
      "name17": "doggie",
      "name18": "doggie",
      "name19": "doggie",
      "photoUrls": [
        "string"
      ],
      "status": "available"
    }
  ]
}
```

<h3 id="object-also-demonstrates-readonlywriteonly-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Object](#schemaobject)|false|none|
|» primitive|body|string|false|none|
|» write-only|body|string|false|none|
|» object|body|object|false|none|
|» » primitive|body|boolean|false|none|
|» array|body|[object]|false|none|
|» » primitive|body|boolean|false|none|
|» pets|body|[[Pet](#schemapet)]|false|none|

> Example responses

> 200 Response

```json
{
  "primitive": "string",
  "read-only": "string",
  "object": {
    "primitive": true
  },
  "array": [
    {
      "primitive": true
    }
  ],
  "pets": [
    {
      "id": 0,
      "name": "doggie",
      "name2": "doggie",
      "name3": "doggie",
      "name4": "doggie",
      "name5": "doggie",
      "name6": "doggie",
      "name7": "doggie",
      "name8": "doggie",
      "name9": "doggie",
      "name10": "doggie",
      "name11": "doggie",
      "name12": "doggie",
      "name13": "doggie",
      "name14": "doggie",
      "name15": "doggie",
      "name16": "doggie",
      "name17": "doggie",
      "name18": "doggie",
      "name19": "doggie",
      "photoUrls": [
        "string"
      ],
      "status": "available"
    }
  ]
}
```

<h3 id="object-also-demonstrates-readonlywriteonly-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

## Markdown

> Code samples

```bash
curl https://example.com/anything/markdown \
  -H 'Accept: application/json'
```

`GET /anything/markdown`

> Example responses

> 200 Response

```json
{
  "primitive": "string",
  "read-only": "string",
  "object": {
    "primitive": true
  },
  "array": [
    {
      "primitive": true
    }
  ],
  "pets": [
    {
      "id": 0,
      "name": "doggie",
      "name2": "doggie",
      "name3": "doggie",
      "name4": "doggie",
      "name5": "doggie",
      "name6": "doggie",
      "name7": "doggie",
      "name8": "doggie",
      "name9": "doggie",
      "name10": "doggie",
      "name11": "doggie",
      "name12": "doggie",
      "name13": "doggie",
      "name14": "doggie",
      "name15": "doggie",
      "name16": "doggie",
      "name17": "doggie",
      "name18": "doggie",
      "name19": "doggie",
      "photoUrls": [
        "string"
      ],
      "status": "available"
    }
  ]
}
```

> 400 Response

```json
{
  "primitive": "string",
  "read-only": "string",
  "object": {
    "primitive": true
  },
  "array": [
    {
      "primitive": true
    }
  ],
  "pets": [
    {
      "id": 0,
      "name": "doggie",
      "name2": "doggie",
      "name3": "doggie",
      "name4": "doggie",
      "name5": "doggie",
      "name6": "doggie",
      "name7": "doggie",
      "name8": "doggie",
      "name9": "doggie",
      "name10": "doggie",
      "name11": "doggie",
      "name12": "doggie",
      "name13": "doggie",
      "name14": "doggie",
      "name15": "doggie",
      "name16": "doggie",
      "name17": "doggie",
      "name18": "doggie",
      "name19": "doggie",
      "photoUrls": [
        "string"
      ],
      "status": "available"
    }
  ]
}
```

<h3 id="markdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Test<br> - Bullet one<br> - Bullet two<br> *italics*|[Object](#schemaobject)|
|400|Bad Request|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

## Array of objects

> Code samples

```bash
curl https://example.com/anything/array-of-objects \
  -H 'Accept: application/json'
```

`GET /anything/array-of-objects`

> Example responses

> 200 Response

```json
[
  {
    "primitive": "string",
    "read-only": "string",
    "object": {
      "primitive": true
    },
    "array": [
      {
        "primitive": true
      }
    ],
    "pets": [
      {
        "id": 0,
        "name": "doggie",
        "name2": "doggie",
        "name3": "doggie",
        "name4": "doggie",
        "name5": "doggie",
        "name6": "doggie",
        "name7": "doggie",
        "name8": "doggie",
        "name9": "doggie",
        "name10": "doggie",
        "name11": "doggie",
        "name12": "doggie",
        "name13": "doggie",
        "name14": "doggie",
        "name15": "doggie",
        "name16": "doggie",
        "name17": "doggie",
        "name18": "doggie",
        "name19": "doggie",
        "photoUrls": [
          "string"
        ],
        "status": "available"
      }
    ]
  }
]
```

<h3 id="array-of-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="array-of-objects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Object](#schemaobject)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Polymorphism

> Code samples

```bash
curl https://example.com/anything/polymorphism \
  -H 'Accept: application/json'
```

`GET /anything/polymorphism`

> Example responses

> 200 Response

```json
"string"
```

<h3 id="polymorphism-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="polymorphism-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[Pet](#schemapet)|false|none|none|
|*oneOf*|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Recursive $ref lookup

> Code samples

```bash
curl https://example.com/anything/recursive \
  -H 'Accept: application/json'
```

`GET /anything/recursive`

> Example responses

> 200 Response

```json
[
  {
    "children": [
      {}
    ]
  }
]
```

<h3 id="recursive-ref-lookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="recursive-ref-lookup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Node](#schemanode)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns as JSON, but is actually a simple string

> Code samples

```bash
curl https://example.com/anything/returns-as-json-but-is-actually-string \
  -H 'Accept: application/json'
```

`GET /anything/returns-as-json-but-is-actually-string`

This example is to ensure that we don't hard fail out on attempting to parse a non-JSON string as JSON, and instead fallback to the standard syntax highlighter.

> Example responses

> 200 Response

```json
"96fab4bb-ff68-43e2-94d8-7046f3173d9c"
```

<h3 id="returns-as-json-but-is-actually-a-simple-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Object

> Code samples

```bash
curl https://example.com/multiple-responses/object \
  -H 'Accept: application/json'
```

`GET /multiple-responses/object`

> Example responses

> 200 Response

```json
{
  "hello": "string",
  "there": "string"
}
```

> 400 Response

```json
{
  "obi": "string",
  "wan": "string"
}
```

<h3 id="object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|A 400 error response|Inline|

<h3 id="object-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hello|string|false|none|none|
|there|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|obi|string|false|none|none|
|wan|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "children": [
    {
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
|children|[[Node](#schemanode)]|false|none|none|

<h2 id="tocS_Object">Object</h2>
<!-- backwards compatibility -->
<a id="schemaobject"></a>
<a id="schema_Object"></a>
<a id="tocSobject"></a>
<a id="tocsobject"></a>

```json
{
  "primitive": "string",
  "read-only": "string",
  "write-only": "string",
  "object": {
    "primitive": true
  },
  "array": [
    {
      "primitive": true
    }
  ],
  "pets": [
    {
      "id": 0,
      "name": "doggie",
      "name2": "doggie",
      "name3": "doggie",
      "name4": "doggie",
      "name5": "doggie",
      "name6": "doggie",
      "name7": "doggie",
      "name8": "doggie",
      "name9": "doggie",
      "name10": "doggie",
      "name11": "doggie",
      "name12": "doggie",
      "name13": "doggie",
      "name14": "doggie",
      "name15": "doggie",
      "name16": "doggie",
      "name17": "doggie",
      "name18": "doggie",
      "name19": "doggie",
      "photoUrls": [
        "string"
      ],
      "status": "available"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primitive|string|false|none|none|
|read-only|string|false|read-only|none|
|write-only|string|false|write-only|none|
|object|object|false|none|none|
|array|[object]|false|none|none|
|pets|[[Pet](#schemapet)]|false|none|none|

<h2 id="tocS_Pet">Pet</h2>
<!-- backwards compatibility -->
<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "id": 0,
  "name": "doggie",
  "name2": "doggie",
  "name3": "doggie",
  "name4": "doggie",
  "name5": "doggie",
  "name6": "doggie",
  "name7": "doggie",
  "name8": "doggie",
  "name9": "doggie",
  "name10": "doggie",
  "name11": "doggie",
  "name12": "doggie",
  "name13": "doggie",
  "name14": "doggie",
  "name15": "doggie",
  "name16": "doggie",
  "name17": "doggie",
  "name18": "doggie",
  "name19": "doggie",
  "photoUrls": [
    "string"
  ],
  "status": "available"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|true|none|none|
|name2|string|false|none|none|
|name3|string|false|none|none|
|name4|string|false|none|none|
|name5|string|false|none|none|
|name6|string|false|none|none|
|name7|string|false|none|none|
|name8|string|false|none|none|
|name9|string|false|none|none|
|name10|string|false|none|none|
|name11|string|false|none|none|
|name12|string|false|none|none|
|name13|string|false|none|none|
|name14|string|false|none|none|
|name15|string|false|none|none|
|name16|string|false|none|none|
|name17|string|false|none|none|
|name18|string|false|none|none|
|name19|string|false|none|none|
|photoUrls|[string]|true|none|none|
|status|string|false|none|pet status in the store|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|
