<h1 id="support-for-additionalproperties-declarations">Support for `additionalProperties` declarations v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schema-object

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="support-for-additionalproperties-declarations-default">Default</h1>

## Should allow additionalProperties in JSON schema

> Code samples

```bash
curl https://example.com/post \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "object with `additionalProperties: true`": {},
    "object with `additionalProperties: false` and no other properties": {},
    "object with `additionalProperties: { type: integer }`": {
      "property1": 0,
      "property2": 0
    },
    "object with `additionalProperties: { type: object, properties: ... }`": {
      "property1": {
        "code": 0,
        "text": "string"
      },
      "property2": {
        "code": 0,
        "text": "string"
      }
    },
    "object with `additionalProperties: { type: object, properties: ... }` and custom title": {
      "property1": {
        "code": 0,
        "text": "string"
      },
      "property2": {
        "code": 0,
        "text": "string"
      }
    },
    "object with `additionalProperties: { type: array, items: { type: integer } }`": {
      "property1": [
        0
      ],
      "property2": [
        0
      ]
    },
    "object with `additionalProperties: $ref, simple`": {
      "property1": 0,
      "property2": 0
    },
    "object with `additionalProperties: $ref, with $ref`": {
      "property1": {
        "code": 0,
        "text": "string",
        "array": [
          0
        ]
      },
      "property2": {
        "code": 0,
        "text": "string",
        "array": [
          0
        ]
      }
    },
    "object with `additionalPropeties` within an allOf": {
      "primitiveProperty": "string",
      "alt_primitiveProperty": "string"
    }
  }'
```

`POST /post`

> Body parameter

```json
{
  "object with `additionalProperties: true`": {},
  "object with `additionalProperties: false` and no other properties": {},
  "object with `additionalProperties: { type: integer }`": {
    "property1": 0,
    "property2": 0
  },
  "object with `additionalProperties: { type: object, properties: ... }`": {
    "property1": {
      "code": 0,
      "text": "string"
    },
    "property2": {
      "code": 0,
      "text": "string"
    }
  },
  "object with `additionalProperties: { type: object, properties: ... }` and custom title": {
    "property1": {
      "code": 0,
      "text": "string"
    },
    "property2": {
      "code": 0,
      "text": "string"
    }
  },
  "object with `additionalProperties: { type: array, items: { type: integer } }`": {
    "property1": [
      0
    ],
    "property2": [
      0
    ]
  },
  "object with `additionalProperties: $ref, simple`": {
    "property1": 0,
    "property2": 0
  },
  "object with `additionalProperties: $ref, with $ref`": {
    "property1": {
      "code": 0,
      "text": "string",
      "array": [
        0
      ]
    },
    "property2": {
      "code": 0,
      "text": "string",
      "array": [
        0
      ]
    }
  },
  "object with `additionalPropeties` within an allOf": {
    "primitiveProperty": "string",
    "alt_primitiveProperty": "string"
  }
}
```

<h3 id="should-allow-additionalproperties-in-json-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» object with `additionalProperties: true`|body|object|false|none|
|» object with `additionalProperties: false` and no other properties|body|object|false|none|
|» object with `additionalProperties: { type: integer }`|body|object|false|none|
|» » **additionalProperties**|body|integer|false|none|
|» object with `additionalProperties: { type: object, properties: ... }`|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» » » code|body|integer|false|none|
|» » » text|body|string|false|none|
|» object with `additionalProperties: { type: object, properties: ... }` and custom title|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» » » code|body|integer|false|none|
|» » » text|body|string|false|none|
|» object with `additionalProperties: { type: array, items: { type: integer } }`|body|object|false|none|
|» » **additionalProperties**|body|[integer]|false|none|
|» object with `additionalProperties: $ref, simple`|body|object|false|none|
|» » **additionalProperties**|body|[ref](#schemaref)|false|none|
|» object with `additionalProperties: $ref, with $ref`|body|object|false|none|
|» » **additionalProperties**|body|[ref-with-ref](#schemaref-with-ref)|false|none|
|» object with `additionalPropeties` within an allOf|body|object|false|Technically this is not valid to the spec. The `additionalProperties` rejections should cancel out each others new field but we indicate we want this to work by enabling [json-schema-merge-allof](https://npm.im/json-schema-merge-allof)'s `ignoreAdditionalProperties` option|
|» » primitiveProperty|body|string|false|none|
|» » alt_primitiveProperty|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "object with `additionalProperties: true`": {},
  "object with `additionalProperties: { type: integer }`": {
    "property1": 0,
    "property2": 0
  },
  "object with `additionalProperties: { type: object, properties: ... }`": {
    "property1": {
      "code": 0,
      "text": "string"
    },
    "property2": {
      "code": 0,
      "text": "string"
    }
  },
  "object with `additionalProperties: { type: object, properties: ... }` and custom title": {
    "property1": {
      "code": 0,
      "text": "string"
    },
    "property2": {
      "code": 0,
      "text": "string"
    }
  },
  "object with `additionalProperties: { type: array, items: { type: integer } }`": {
    "property1": [
      0
    ],
    "property2": [
      0
    ]
  },
  "object with `additionalProperties: $ref, simple`": {
    "property1": 0,
    "property2": 0
  },
  "object with `additionalProperties: $ref, with $ref`": {
    "property1": {
      "code": 0,
      "text": "string",
      "array": [
        0
      ]
    },
    "property2": {
      "code": 0,
      "text": "string",
      "array": [
        0
      ]
    }
  }
}
```

<h3 id="should-allow-additionalproperties-in-json-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="should-allow-additionalproperties-in-json-schema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object with `additionalProperties: true`|object|false|none|none|
|object with `additionalProperties: { type: integer }`|object|false|none|none|
|» **additionalProperties**|integer|false|none|none|
|object with `additionalProperties: { type: object, properties: ... }`|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» » code|integer|false|none|none|
|» » text|string|false|none|none|
|object with `additionalProperties: { type: object, properties: ... }` and custom title|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» » code|integer|false|none|none|
|» » text|string|false|none|none|
|object with `additionalProperties: { type: array, items: { type: integer } }`|object|false|none|none|
|» **additionalProperties**|[integer]|false|none|none|
|object with `additionalProperties: $ref, simple`|object|false|none|none|
|» **additionalProperties**|[ref](#schemaref)|false|none|none|
|object with `additionalProperties: $ref, with $ref`|object|false|none|none|
|» **additionalProperties**|[ref-with-ref](#schemaref-with-ref)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ref">ref</h2>
<!-- backwards compatibility -->
<a id="schemaref"></a>
<a id="schema_ref"></a>
<a id="tocSref"></a>
<a id="tocsref"></a>

```json
0
```

<h2 id="tocS_ref-with-ref">ref-with-ref</h2>
<!-- backwards compatibility -->
<a id="schemaref-with-ref"></a>
<a id="schema_ref-with-ref"></a>
<a id="tocSref-with-ref"></a>
<a id="tocsref-with-ref"></a>

```json
{
  "code": 0,
  "text": "string",
  "array": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|text|string|false|none|none|
|array|[[ref](#schemaref)]|false|none|none|
