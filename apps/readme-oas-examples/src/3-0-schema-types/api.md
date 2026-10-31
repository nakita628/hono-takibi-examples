<h1 id="support-for-different-schema-types">Support for different schema types v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Additionally some support for features that schema types may individually support.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schemaObject

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="support-for-different-schema-types-strings">Strings</h1>

Showcasing handling and support for `type: string` schemas.

## `format` data types

<a id="opIdstring_formatSupport"></a>

> Code samples

```bash
curl https://example.com/anything/strings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "binary": "string",
    "binary (with default)": "data:text/plain;name=file1.txt;base64,dGVzdDE=",
    "blob": "This is some example content for this parameter.",
    "date": "1970-01-01",
    "date (with pattern)": "1970-01-01",
    "date-time": "1970-01-01T00:00:00Z",
    "html": "string",
    "json": "string",
    "string": "string",
    "password": "password",
    "password (minLength: 5, maxLength: 20)": "password",
    "url": "http://example.com",
    "unknown-format": "string"
  }'
```

`PUT /anything/strings`

Handling of `format` data types on `type: string` schemas.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

> Body parameter

```json
{
  "binary": "string",
  "binary (with default)": "data:text/plain;name=file1.txt;base64,dGVzdDE=",
  "blob": "This is some example content for this parameter.",
  "date": "1970-01-01",
  "date (with pattern)": "1970-01-01",
  "date-time": "1970-01-01T00:00:00Z",
  "html": "string",
  "json": "string",
  "string": "string",
  "password": "password",
  "password (minLength: 5, maxLength: 20)": "password",
  "url": "http://example.com",
  "unknown-format": "string"
}
```

<h3 id="format-data-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» binary|body|string(binary)|false|none|
|» binary (with default)|body|string(binary)|true|none|
|» blob|body|string(blob)|false|Strings with `format: blob` should render a `<textarea>`.|
|» date|body|string(date)|false|none|
|» date (with pattern)|body|string(date)|false|This accepts a pattern of matching `(\d{4})-(\d{2})-(\d{2})`|
|» date-time|body|string(date-time)|false|Unsupported due to the varying ways that `date-time` is utilized in API definitions for representing dates, the [lack of wide browser support for the input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Browser_compatibility), and that it's not [RFC 3339](https://tools.ietf.org/html/rfc3339) compliant.|
|» html|body|string(html)|false|Strings with `format: html` should render a `<textarea>`.|
|» json|body|string(json)|false|This is a special ReadMe data type to render a `<textarea>` to be parsed as JSON|
|» string|body|string(string)|false|none|
|» password|body|string(password)|false|none|
|» password (minLength: 5, maxLength: 20)|body|string(password)|false|This `format: password` input has a `minLength` and `maxLength` configured.|
|» url|body|string(url)|false|none|
|» unknown-format|body|string(unknown-format)|false|none|

<h3 id="format-data-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## String support

<a id="opIdstring_schemaSupport"></a>

> Code samples

```bash
curl https://example.com/anything/strings \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "stock": "string",
    "description (markdown)": "string",
    "title": "string",
    "required": "string",
    "default": "default value",
    "default (null)": null,
    "default (required)": "default value",
    "nullable": "string",
    "enum": "available",
    "enum (with default)": "available",
    "enum (with default and required)": "available",
    "enum (with empty option)": "",
    "enum (with empty option and empty default)": ""
  }'
```

`POST /anything/strings`

Support and handling of `type: string` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Body parameter

```json
{
  "stock": "string",
  "description (markdown)": "string",
  "title": "string",
  "required": "string",
  "default": "default value",
  "default (null)": null,
  "default (required)": "default value",
  "nullable": "string",
  "enum": "available",
  "enum (with default)": "available",
  "enum (with default and required)": "available",
  "enum (with empty option)": "",
  "enum (with empty option and empty default)": ""
}
```

<h3 id="string-support-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» stock|body|string|false|none|
|» description (markdown)|body|string|false|This is a string with a **markdown** description: [link](ref:action-object)|
|» title|body|string|false|none|
|» required|body|string|true|This string should be required.|
|» default|body|string|false|This string has a `default` of `default value`.|
|» default (null)|body|string|false|This string has a `default` of `null`.|
|» default (required)|body|string|true|This string has a `default` of `default value` and is required.|
|» nullable|body|string \| null|false|This string has is `nullable`.|
|» enum|body|string|false|none|
|» enum (with default)|body|string|false|This enum has a `default` of `available`.|
|» enum (with default and required)|body|string|false|This enum has a `default` of `available` and is required.|
|» enum (with empty option)|body|string|false|This enum has a an empty string (`""`) as one of its available options.|
|» enum (with empty option and empty default)|body|string|false|This enum has a an empty string (`""`) as its only available option, and that same value is set as its `default`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» enum|available|
|» enum|pending|
|» enum|sold|
|» enum (with default)|available|
|» enum (with default)|pending|
|» enum (with default)|sold|
|» enum (with default and required)|available|
|» enum (with default and required)|pending|
|» enum (with default and required)|sold|
|» enum (with empty option)|""|
|» enum (with empty option)|available|
|» enum (with empty option)|pending|
|» enum (with empty option)|sold|
|» enum (with empty option and empty default)|""|

<h3 id="string-support-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Top-level payloads

<a id="opIdstring_topLevel"></a>

> Code samples

```bash
curl https://example.com/anything/strings/top-level-payloads \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"string"'
```

`POST /anything/strings/top-level-payloads`

Handling of a `requestBody` payload that's a single `type: string`.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

> Body parameter

```json
"string"
```

<h3 id="top-level-payloads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|none|

<h3 id="top-level-payloads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Top-level payloads (JSON)

<a id="opIdstring_topLevelJSON"></a>

> Code samples

```bash
curl https://example.com/anything/strings/top-level-payloads \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '"string"'
```

`PATCH /anything/strings/top-level-payloads`

Handling of a `requestBody` payload that's a single `type: string` but `format: json`.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

> Body parameter

```json
"string"
```

<h3 id="top-level-payloads-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string(json)|false|none|

<h3 id="top-level-payloads-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-different-schema-types-numbers">Numbers</h1>

Showcasing handling and support for `type: integer` and `type: number` schemas.

## `format` data types

<a id="opIdnumber_formatSupport"></a>

> Code samples

```bash
curl https://example.com/anything/numbers \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "integer (format: int8)": 0,
    "integer (format: uint8)": 0,
    "integer (format: int16)": 0,
    "integer (format: uint16)": 0,
    "integer (format: int32)": 0,
    "integer (format: int32, multipleOf: 2)": 0,
    "integer (format: uint32)": 0,
    "integer (format: int64)": 0,
    "integer (format: uint64)": 0,
    "number (format: float)": 0,
    "number (format: double)": 0
  }'
```

`PUT /anything/numbers`

Handling `format` data types on `type: integer` and `type: number` schemas.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

> Body parameter

```json
{
  "integer (format: int8)": 0,
  "integer (format: uint8)": 0,
  "integer (format: int16)": 0,
  "integer (format: uint16)": 0,
  "integer (format: int32)": 0,
  "integer (format: int32, multipleOf: 2)": 0,
  "integer (format: uint32)": 0,
  "integer (format: int64)": 0,
  "integer (format: uint64)": 0,
  "number (format: float)": 0,
  "number (format: double)": 0
}
```

<h3 id="format-data-types-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» integer (format: int8)|body|integer(int8)|false|none|
|» integer (format: uint8)|body|integer(uint8)|false|none|
|» integer (format: int16)|body|integer(int16)|false|none|
|» integer (format: uint16)|body|integer(uint16)|false|none|
|» integer (format: int32)|body|integer(int32)|false|none|
|» integer (format: int32, multipleOf: 2)|body|integer(int32)|false|This `integer` input has `multipleOf: 2` set on itself to control the increment/decrement value set.|
|» integer (format: uint32)|body|integer(uint32)|false|none|
|» integer (format: int64)|body|integer(int64)|false|none|
|» integer (format: uint64)|body|integer(uint64)|false|none|
|» number (format: float)|body|number(float)|false|none|
|» number (format: double)|body|number(double)|false|none|

<h3 id="format-data-types-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Number support

<a id="opIdnumber_schemaSupport"></a>

> Code samples

```bash
curl https://example.com/anything/numbers \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "integer (stock)": 0,
    "integer (markdown description)": 0,
    "integer (title)": 0,
    "integer (required)": 0,
    "integer (default)": 1234,
    "integer (default null)": null,
    "integer (default, required)": 1234,
    "integer (nullable)": 0,
    "integer (minimum / maximum)": 100,
    "number (stock)": 0,
    "number (markdown description)": 0,
    "number (title)": 0,
    "number (required)": 0,
    "number (default)": 12.34,
    "number (default null)": null,
    "number (default, required)": 12.34,
    "number (nullable)": 0
  }'
```

`POST /anything/numbers`

Support and handling of `type: integer` and `type: number` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Body parameter

```json
{
  "integer (stock)": 0,
  "integer (markdown description)": 0,
  "integer (title)": 0,
  "integer (required)": 0,
  "integer (default)": 1234,
  "integer (default null)": null,
  "integer (default, required)": 1234,
  "integer (nullable)": 0,
  "integer (minimum / maximum)": 100,
  "number (stock)": 0,
  "number (markdown description)": 0,
  "number (title)": 0,
  "number (required)": 0,
  "number (default)": 12.34,
  "number (default null)": null,
  "number (default, required)": 12.34,
  "number (nullable)": 0
}
```

<h3 id="number-support-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» integer (stock)|body|integer|false|none|
|» integer (markdown description)|body|integer|false|This is an `integer` with a **markdown** description: [link](ref:action-object)|
|» integer (title)|body|integer|false|none|
|» integer (required)|body|integer|true|This integer should be required.|
|» integer (default)|body|integer|false|This integer has a `default` of `1234`.|
|» integer (default null)|body|integer|false|This integer has a `default` of `null`.|
|» integer (default, required)|body|integer|true|This integer has a `default` of `1234` and is required.|
|» integer (nullable)|body|integer \| null|false|This integer is `nullable`.|
|» integer (minimum / maximum)|body|integer|false|This integer has a `minimum` of `100` and `maximum` of `999`.|
|» number (stock)|body|number|false|none|
|» number (markdown description)|body|number|false|This is a `number` with a **markdown** description: [link](ref:action-object)|
|» number (title)|body|number|false|none|
|» number (required)|body|number|true|This number should be required.|
|» number (default)|body|number|false|This number has a `default` of `12.34`.|
|» number (default null)|body|number|false|This number has a `default` of `null`.|
|» number (default, required)|body|number|true|This number has a `default` of `12.34` and is required.|
|» number (nullable)|body|number \| null|false|This number is `nullable`..|

<h3 id="number-support-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Top-level payloads

<a id="opIdnumber_topLevel"></a>

> Code samples

```bash
curl https://example.com/anything/numbers \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '0'
```

`PATCH /anything/numbers`

Handling of a `requestBody` payload that's a single `type: integer`.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

> Body parameter

```json
0
```

<h3 id="top-level-payloads-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|integer(int64)|false|none|

<h3 id="top-level-payloads-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-different-schema-types-booleans">Booleans</h1>

Showcasing handling and support for `type: boolean` schemas.

## Boolean support

<a id="opIdboolean_schemaSupport"></a>

> Code samples

```bash
curl https://example.com/anything/booleans \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "stock": true,
    "description (markdown)": true,
    "title": true,
    "required": true,
    "default": false,
    "default (required)": false,
    "inferred from enum": true
  }'
```

`POST /anything/booleans`

Support and handling of `type: boolean` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Body parameter

```json
{
  "stock": true,
  "description (markdown)": true,
  "title": true,
  "required": true,
  "default": false,
  "default (required)": false,
  "inferred from enum": true
}
```

<h3 id="boolean-support-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» stock|body|boolean|false|none|
|» description (markdown)|body|boolean|false|This is a `boolean` with a **markdown** description: [link](ref:action-object)|
|» title|body|boolean|false|none|
|» required|body|boolean|true|This boolean should be required.|
|» default|body|boolean|false|This boolean has a `default` of `false`.|
|» default (required)|body|boolean|true|This boolean has a `default` of `false`.|
|» inferred from enum|body|boolean|false|Though this is missing a `type` declaration it should be treated as `boolean` because it contains an enum of `true` and `false`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» inferred from enum|true|
|» inferred from enum|false|

<h3 id="boolean-support-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Top-level payloads

<a id="opIdboolean_topLevel"></a>

> Code samples

```bash
curl https://example.com/anything/booleans \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d 'true'
```

`PATCH /anything/booleans`

Handling of a `requestBody` payload that's a single `type: boolean`.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

> Body parameter

```json
true
```

<h3 id="top-level-payloads-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|boolean|false|none|

<h3 id="top-level-payloads-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-different-schema-types-arrays">Arrays</h1>

Showcasing handling and support for `type: array` schemas.

## Array support

<a id="opIdarray_schemaSupport"></a>

> Code samples

```bash
curl https://example.com/anything/arrays \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "stock": [
      null
    ],
    "with markdown description": [
      null
    ],
    "with title": [
      null
    ],
    "array<any>": [
      null
    ],
    "array<any> (but no `items` property)": [],
    "array<string>": [
      "string"
    ],
    "array<string> (with overall `null` default)": null,
    "array<string> (loaded via a $ref)": [
      "available"
    ],
    "array<integer>": [
      0
    ],
    "array<number>": [
      0
    ],
    "array<boolean>": [
      true
    ],
    "array<object>": [
      {
        "string": "string",
        "integer": 0,
        "number": 0,
        "boolean": true
      }
    ],
    "array<object> (additionalProperties)": [
      {}
    ],
    "array<array<object>>": [
      [
        {
          "string": "string"
        }
      ]
    ]
  }'
```

`POST /anything/arrays`

Support and handling of `type: array` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Body parameter

```json
{
  "stock": [
    null
  ],
  "with markdown description": [
    null
  ],
  "with title": [
    null
  ],
  "array<any>": [
    null
  ],
  "array<any> (but no `items` property)": [],
  "array<string>": [
    "string"
  ],
  "array<string> (with overall `null` default)": null,
  "array<string> (loaded via a $ref)": [
    "available"
  ],
  "array<integer>": [
    0
  ],
  "array<number>": [
    0
  ],
  "array<boolean>": [
    true
  ],
  "array<object>": [
    {
      "string": "string",
      "integer": 0,
      "number": 0,
      "boolean": true
    }
  ],
  "array<object> (additionalProperties)": [
    {}
  ],
  "array<array<object>>": [
    [
      {
        "string": "string"
      }
    ]
  ]
}
```

<h3 id="array-support-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» stock|body|[object]|false|none|
|» with markdown description|body|[object]|false|This is an `array` with a **markdown** description: [link](ref:action-object)|
|» with title|body|[object]|false|none|
|» array<any>|body|[object]|false|none|
|» array<any> (but no `items` property)|body|array|false|Techncally this is a malformed schema, but we support it (for legacy reasons) and repair it to have `items: {}` when we generate JSON Schema for the form.<br><br>Though its supported, not all OpenAPI validators allow it though so our support may regress at some point in the future.|
|» array<string>|body|[string]|false|none|
|» array<string> (with overall `null` default)|body|[string]|false|none|
|» array<string> (loaded via a $ref)|body|[[string_enum](#schemastring_enum)]|false|none|
|» array<integer>|body|[integer(int64)]|false|none|
|» array<number>|body|[number(float)]|false|none|
|» array<boolean>|body|[boolean]|false|none|
|» array<object>|body|[object]|false|none|
|» » string|body|string|false|none|
|» » integer|body|integer|false|none|
|» » number|body|number|false|none|
|» » boolean|body|boolean|false|none|
|» array<object> (additionalProperties)|body|[object]|false|none|
|» array<array<object>>|body|[[object]]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» array<string> (loaded via a $ref)|available|
|» array<string> (loaded via a $ref)|pending|
|» array<string> (loaded via a $ref)|sold|

<h3 id="array-support-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Top-level payloads (objects)

<a id="opIdarray_topLevelObjects"></a>

> Code samples

```bash
curl https://example.com/anything/arrays/top-level-payloads \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "string": "string",
      "integer": 0,
      "number": 0,
      "boolean": true,
      "array": [
        null
      ],
      "object": {}
    }
  ]'
```

`POST /anything/arrays/top-level-payloads`

Handling of a `requestBody` payload that's a `type: array` composed of objects.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

> Body parameter

```json
[
  {
    "string": "string",
    "integer": 0,
    "number": 0,
    "boolean": true,
    "array": [
      null
    ],
    "object": {}
  }
]
```

<h3 id="top-level-payloads-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[object]|false|none|
|» string|body|string|false|none|
|» integer|body|integer|false|none|
|» number|body|number|false|none|
|» boolean|body|boolean|false|none|
|» array|body|[object]|false|none|
|» object|body|object|false|none|

<h3 id="top-level-payloads-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Top-level payloads (primitives)

<a id="opIdarray_topLevelPrimitives"></a>

> Code samples

```bash
curl https://example.com/anything/arrays/top-level-payloads \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '[
    "string"
  ]'
```

`PATCH /anything/arrays/top-level-payloads`

Handling of a `requestBody` payload that's a `type: array` composed of primitives.

📚 OpenAPI specification references:

* [3.0.3 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types)

* [3.1.0 Data Types](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#dataTypes)

> Body parameter

```json
[
  "string"
]
```

<h3 id="top-level-payloads-primitives-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|false|none|

<h3 id="top-level-payloads-primitives-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-different-schema-types-objects">Objects</h1>

Showcasing handling and support for `type: object` schemas.

## Object support

<a id="opIdobject_schemaSupport"></a>

> Code samples

```bash
curl https://example.com/anything/objects \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "object": {
      "string": "string",
      "integer": 0,
      "number": 0,
      "object": {
        "string": "string"
      },
      "array": [
        "string"
      ]
    },
    "object (with `title`)": {
      "string": "string",
      "integer": 0,
      "number": 0,
      "object": {
        "string": "string"
      },
      "array": [
        "string"
      ]
    },
    "object (without an explicit `type`)": {
      "property1": 0,
      "property2": 0
    },
    "object (additionalProperties)": {},
    "object (without `properties`)": {}
  }'
```

`POST /anything/objects`

Support and handling of `type: object` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Body parameter

```json
{
  "object": {
    "string": "string",
    "integer": 0,
    "number": 0,
    "object": {
      "string": "string"
    },
    "array": [
      "string"
    ]
  },
  "object (with `title`)": {
    "string": "string",
    "integer": 0,
    "number": 0,
    "object": {
      "string": "string"
    },
    "array": [
      "string"
    ]
  },
  "object (without an explicit `type`)": {
    "property1": 0,
    "property2": 0
  },
  "object (additionalProperties)": {},
  "object (without `properties`)": {}
}
```

<h3 id="object-support-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» object|body|object|false|none|
|» » string|body|string|false|none|
|» » integer|body|integer|false|none|
|» » number|body|number|false|none|
|» » object|body|object|false|none|
|» » » string|body|string|false|none|
|» » array|body|[string]|false|none|
|» object (with `title`)|body|object|false|none|
|» » string|body|string|false|none|
|» » integer|body|integer|false|none|
|» » number|body|number|false|none|
|» » object|body|object|false|none|
|» » » string|body|string|false|none|
|» » array|body|[string]|false|none|
|» object (without an explicit `type`)|body|object|false|Though this object is missing an explicit `type: object` property it should still be recognized as an object because it has `properties`.|
|» » property1|body|integer(int64)|false|none|
|» » property2|body|integer(int64)|false|none|
|» object (additionalProperties)|body|object|false|none|
|» object (without `properties`)|body|object|false|Because this object is missing a `properties` declaration we should treat it as if `additionalProperties: true` were present on it so the enduser can still use it with the form.|

<h3 id="object-support-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-different-schema-types-circular-references">Circular references</h1>

Showcasing handling and support for circular references (`$ref` pointers).

## Nested circular $ref

<a id="opIdcircular_handling"></a>

> Code samples

```bash
curl https://example.com/anything/circular \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "circular": {
      "string": "string",
      "children": [
        {}
      ]
    }
  }'
```

`POST /anything/circular`

Handling of a nested `$ref` that recursively references itself.

📚 OpenAPI specification references:

* [3.0.3 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#referenceObject)

* [3.1.0 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#referenceObject)

> Body parameter

```json
{
  "circular": {
    "string": "string",
    "children": [
      {}
    ]
  }
}
```

<h3 id="nested-circular-ref-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» circular|body|[Circular](#schemacircular)|false|none|

<h3 id="nested-circular-ref-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Top-level circular $ref

<a id="opIdcircular_topLevel"></a>

> Code samples

```bash
curl https://example.com/anything/circular \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "string": "string",
    "children": [
      {}
    ]
  }'
```

`PATCH /anything/circular`

Handling of a top-level request body `$ref` that recursively references itself.

📚 OpenAPI specification references:

* [3.0.3 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#referenceObject)

* [3.1.0 Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#referenceObject)

> Body parameter

```json
{
  "string": "string",
  "children": [
    {}
  ]
}
```

<h3 id="top-level-circular-ref-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Circular](#schemacircular)|false|none|
|» string|body|string|false|none|
|» children|body|[[Circular](#schemacircular)]|false|none|

<h3 id="top-level-circular-ref-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-different-schema-types-readme-flavors">ReadMe-flavors</h1>

Showcasing handling and support for various ReadMe-flavored schema additions.

## Top-level RAW_BODY (string)

<a id="opIdraw_body_topLevel"></a>

> Code samples

```bash
curl https://example.com/anything/raw_body/top-level-payloads \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "RAW_BODY": "string"
  }'
```

`POST /anything/raw_body/top-level-payloads`

This is a special value on ReadMe to denote a top level property. This can be done better using JSON Schema, but from ReadMe's dash, this is the only way to do it.

<https://docs.readme.com/docs/raw-body-content>

> Body parameter

```json
{
  "RAW_BODY": "string"
}
```

<h3 id="top-level-rawbody-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» RAW_BODY|body|string|false|none|

<h3 id="top-level-rawbody-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Top-level RAW_BODY (JSON)

<a id="opIdraw_body_topLevelJSON"></a>

> Code samples

```bash
curl https://example.com/anything/raw_body/top-level-payloads \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "RAW_BODY": "string"
  }'
```

`PATCH /anything/raw_body/top-level-payloads`

This is a special value on ReadMe to denote a top level property. This can be done better using JSON Schema, but from ReadMe's dash, this is the only way to do it.

<https://docs.readme.com/docs/raw-body-content>

> Body parameter

```json
{
  "RAW_BODY": "string"
}
```

<h3 id="top-level-rawbody-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» RAW_BODY|body|string(json)|false|none|

<h3 id="top-level-rawbody-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-different-schema-types-quirks">Quirks</h1>

Showcasing handling and support for various schema type quirks.

## Missing schema type

<a id="opIdquirks_missingType"></a>

> Code samples

```bash
curl https://example.com/anything/quirks \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "missing type": "default value",
    "missing type (on completely empty schema)": null,
    "implicit array": [
      0
    ],
    "implicit object": {
      "name": "buster"
    }
  }'
```

`POST /anything/quirks`

Handling cases for when `type` is missing from a schema.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Body parameter

```json
{
  "missing type": "default value",
  "missing type (on completely empty schema)": null,
  "implicit array": [
    0
  ],
  "implicit object": {
    "name": "buster"
  }
}
```

<h3 id="missing-schema-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» missing type|body|object|false|Though this request body property is missing a `type` declaration we should stil render a `string` input box so that the user can interact with it.|
|» missing type (on completely empty schema)|body|object|false|none|
|» implicit array|body|[integer]|false|This array property is missing an explicit `type: array` but since it has an `items` declaration we're implicitly treating it as an array.|
|» implicit object|body|object|false|This object property is missing an explicit `type: object` but since it has an `properties` declaration we're implicitly treating it as an object.|
|» » name|body|string|false|none|

<h3 id="missing-schema-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Incompatible allOf schemas on a root requestBody

<a id="opIdquirks_entirelyIncompatibleAllOf"></a>

> Code samples

```bash
curl https://example.com/anything/quirks/polymorphism \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{}'
```

`PUT /anything/quirks/polymorphism`

When an `allOf` sits at the top of a request body schema and it cannot be merged, we're unable to render out anything for an input because there's no usable schema for us.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Body parameter

```json
{}
```

<h3 id="incompatible-allof-schemas-on-a-root-requestbody-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|

<h3 id="incompatible-allof-schemas-on-a-root-requestbody-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Incompatible nested allOf schemas

<a id="opIdquirks_incompatibleNestedAllOf"></a>

> Code samples

```bash
curl https://example.com/anything/quirks/polymorphism \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "incompatible": {},
    "compatible": {
      "name": "buster"
    }
  }'
```

`POST /anything/quirks/polymorphism`

Handling cases for when a nested `allOf` cannot be merged together.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Body parameter

```json
{
  "incompatible": {},
  "compatible": {
    "name": "buster"
  }
}
```

<h3 id="incompatible-nested-allof-schemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» incompatible|body|object|false|This property consists of an `allOf` of a `string` and an `integer` schema. Since these two schemas are incompatible and we're unable to merge them per the `allOf` rules, we instead eliminate the `allOf` and render out a `string` instead.<br><br>This is obviously less than ideal but it assures that the user can still interact with the property.|
|» compatible|body|object|false|Unlike the `incompatible` property above this `allOf` consists of two objects that **can** be merged.|
|» » name|body|string|false|none|
|» » name|body|object|false|none|

<h3 id="incompatible-nested-allof-schemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Incompatible allOf schemas on a root requestBody (with other schema properties)

<a id="opIdquirks_partiallyUsableIncompatibleAllOf"></a>

> Code samples

```bash
curl https://example.com/anything/quirks/polymorphism \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{}'
```

`PATCH /anything/quirks/polymorphism`

Like `quirks_entirelyIncompatibleAllOf`, when we're to merge an `allOf` together we eliminate it, however this schema here has additional properties (`description`) alongside that `allOf` so it's not a wholly empty schema and we can use it. Unfortunately since we don't have any of the real data for the request body to use we treat this as a string input with a `format` of `json` so that the user can input a raw JSON input to make their request with.

Unfortunately in this case we don't support `description` on the root schema so it won't show up, but a large input box still will for the user. Obviously all of this less than ideal as we're losing request body schema data but since the `allOf` present is incompatible it's unusable and this is the best we can do under the circumstances.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Body parameter

```json
{}
```

<h3 id="incompatible-allof-schemas-on-a-root-requestbody-with-other-schema-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|

<h3 id="incompatible-allof-schemas-on-a-root-requestbody-with-other-schema-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_string_enum">string_enum</h2>
<!-- backwards compatibility -->
<a id="schemastring_enum"></a>
<a id="schema_string_enum"></a>
<a id="tocSstring_enum"></a>
<a id="tocsstring_enum"></a>

```json
"available"
```

<h2 id="tocS_Circular">Circular</h2>
<!-- backwards compatibility -->
<a id="schemacircular"></a>
<a id="schema_Circular"></a>
<a id="tocScircular"></a>
<a id="tocscircular"></a>

```json
{
  "string": "string",
  "children": [
    {
      "string": "string",
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
|string|string|false|none|none|
|children|[[Circular](#schemacircular)]|false|none|none|
