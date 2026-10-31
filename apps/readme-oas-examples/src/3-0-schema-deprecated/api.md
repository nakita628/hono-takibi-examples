<h1 id="support-for-deprecated-declaration">Support for `deprecated` declaration v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schema-object

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="support-for-deprecated-declaration-default">Default</h1>

## post/anything

> Code samples

```bash
curl 'https://example.com/anything?status=available' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 25,
    "category": {
      "id": 0,
      "name": "string"
    },
    "category_alt": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "https://example.com/photo.png"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "tags_alt": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available",
    "polymorphism": {
      "oneOf": {
        "status": "available"
      },
      "allOf": {
        "status": "available"
      },
      "anyOf": {
        "status": "available"
      }
    }
  }'
```

`POST /anything`

<aside class="warning">
This operation is deprecated
</aside>

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject

> Body parameter

```json
{
  "id": 25,
  "category": {
    "id": 0,
    "name": "string"
  },
  "category_alt": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "https://example.com/photo.png"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "tags_alt": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available",
  "polymorphism": {
    "oneOf": {
      "status": "available"
    },
    "allOf": {
      "status": "available"
    },
    "anyOf": {
      "status": "available"
    }
  }
}
```

<h3 id="postanything-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|This query parameter is explicitly **not** deprecated.|
|filterLegacy|query|string|false|**Deprecated.** This query parameter is deprecated.<br><br>https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object|
|status|query|[string]|true|**Deprecated.**|
|body|body|[Pet](#schemapet)|true|Pet object that needs to be added to the store|
|» id|body|integer(int64)|false|**Deprecated.** This `requestBody` schema property is marked as deprecated.<br><br>https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schema-object|
|» category|body|[Category](#schemacategory)|false|none|
|» category_alt|body|[Category](#schemacategory)|false|**Deprecated.** Though this loads a `$ref` to the `Category` schema, and that contains deprecated properties within itself, this `category_alt` parameter is also deprecated.|
|» name|body|string|true|**Deprecated.**|
|» photoUrls|body|[string]|true|**Deprecated.**|
|» tags|body|[[Tag](#schematag)]|false|**Deprecated.**|
|» tags_alt|body|[[Tag_deprecated](#schematag_deprecated)]|false|Unlike the `tags` parameter, this is **not** deprecated, but the contents within itself are.|
|» status|body|[Status](#schemastatus)|false|**Deprecated.** pet status in the store|
|» polymorphism|body|object|false|none|
|» » oneOf|body|[StatusWrapper](#schemastatuswrapper)|false|**Deprecated.** This is a `oneOf` that's marked as deprecated.|
|» » » *oneOf*|body|[StatusWrapper](#schemastatuswrapper)|false|none|
|» » » *oneOf*|body|[StatusWrapper](#schemastatuswrapper)|false|none|
|» » allOf|body|object|false|**Deprecated.** This is a `allOf` that's marked as deprecated.|
|» » » status|body|[Status](#schemastatus)|false|**Deprecated.** pet status in the store|
|» » » status|body|[Status](#schemastatus)|false|**Deprecated.** pet status in the store|
|» » anyOf|body|[StatusWrapper](#schemastatuswrapper)|false|**Deprecated.** This is a `anyOf` that's marked as deprecated.|
|» » » *anyOf*|body|[StatusWrapper](#schemastatuswrapper)|false|none|
|» » » *anyOf*|body|[StatusWrapper](#schemastatuswrapper)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|active|
|filter|inactive|
|filterLegacy|active|
|filterLegacy|inactive|
|status|available|
|status|pending|
|status|sold|
|» status|available|
|» status|pending|
|» status|sold|
|» » » status|available|
|» » » status|pending|
|» » » status|sold|
|» » » status|available|
|» » » status|pending|
|» » » status|sold|

> Example responses

> 200 Response

```json
[
  {
    "id": 25,
    "category": {
      "id": 0,
      "name": "string"
    },
    "category_alt": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "https://example.com/photo.png"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "tags_alt": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available",
    "polymorphism": {
      "oneOf": {
        "status": "available"
      },
      "allOf": {
        "status": "available"
      },
      "anyOf": {
        "status": "available"
      }
    }
  }
]
```

<h3 id="postanything-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid status value|None|

<h3 id="postanything-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Pet](#schemapet)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|**Deprecated.**|
|name|string|false|none|**Deprecated.**|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Tag_deprecated">Tag_deprecated</h2>
<!-- backwards compatibility -->
<a id="schematag_deprecated"></a>
<a id="schema_Tag_deprecated"></a>
<a id="tocStag_deprecated"></a>
<a id="tocstag_deprecated"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|**Deprecated.**|
|name|string|false|none|**Deprecated.**|

<h2 id="tocS_Pet">Pet</h2>
<!-- backwards compatibility -->
<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "id": 25,
  "category": {
    "id": 0,
    "name": "string"
  },
  "category_alt": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "https://example.com/photo.png"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "tags_alt": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available",
  "polymorphism": {
    "oneOf": {
      "status": "available"
    },
    "allOf": {
      "status": "available"
    },
    "anyOf": {
      "status": "available"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|**Deprecated.** This `requestBody` schema property is marked as deprecated.<br><br>https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schema-object|
|category|[Category](#schemacategory)|false|none|none|
|category_alt|[Category](#schemacategory)|false|none|**Deprecated.** Though this loads a `$ref` to the `Category` schema, and that contains deprecated properties within itself, this `category_alt` parameter is also deprecated.|
|name|string|true|none|**Deprecated.**|
|photoUrls|[string]|true|none|**Deprecated.**|
|tags|[[Tag](#schematag)]|false|none|**Deprecated.**|
|tags_alt|[[Tag_deprecated](#schematag_deprecated)]|false|none|Unlike the `tags` parameter, this is **not** deprecated, but the contents within itself are.|
|status|[Status](#schemastatus)|false|none|**Deprecated.** pet status in the store|
|polymorphism|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"available"
```

pet status in the store

<h2 id="tocS_StatusWrapper">StatusWrapper</h2>
<!-- backwards compatibility -->
<a id="schemastatuswrapper"></a>
<a id="schema_StatusWrapper"></a>
<a id="tocSstatuswrapper"></a>
<a id="tocsstatuswrapper"></a>

```json
{
  "status": "available"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|**Deprecated.** pet status in the store|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|
