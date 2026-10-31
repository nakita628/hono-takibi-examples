<h1 id="support-for-different-implementations-of-enum">Support for different implementations of `enum` v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#schemaObject

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="support-for-different-implementations-of-enum-enums">Enums</h1>

Showcasing enum handling and support

## Number enum support

<a id="opIdnumber_enumSupport"></a>

> Code samples

```bash
curl https://example.com/anything/strings \
  -H 'Content-Type: application/json' \
  -d '{
    "enum": 0,
    "enum *required": 0,
    "enum (with default)": 1,
    "enum (with default) *required": 2,
    "enum (with example)": 1,
    "enum (with example) *required": 1,
    "enum (with empty option)": "",
    "enum (with duplicate options)": ""
  }'
```

`GET /anything/strings`

Support and handling of enums on `type: number` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Body parameter

```json
{
  "enum": 0,
  "enum *required": 0,
  "enum (with default)": 1,
  "enum (with default) *required": 2,
  "enum (with example)": 1,
  "enum (with example) *required": 1,
  "enum (with empty option)": "",
  "enum (with duplicate options)": ""
}
```

<h3 id="number-enum-support-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» enum|body|number|false|A regular ol' enum|
|» enum *required|body|number|true|A regular ol' enum|
|» enum (with default)|body|number|false|This enum has a `default` of `1`.|
|» enum (with default) *required|body|number|true|A required enum with a default (if a field is required it should probably always have a default, eh?)|
|» enum (with example)|body|number|false|This enum has a `example` of `1`.|
|» enum (with example) *required|body|number|true|This enum has a `example` of `1` and is required.|
|» enum (with empty option)|body|number|false|This enum has an empty string (`""`) as one of its available options.|
|» enum (with duplicate options)|body|number|false|This enum has multiple duplicate options, they should get deduped in the UI|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» enum|0|
|» enum|1|
|» enum|2|
|» enum *required|0|
|» enum *required|1|
|» enum *required|2|
|» enum (with default)|0|
|» enum (with default)|1|
|» enum (with default)|2|
|» enum (with default) *required|0|
|» enum (with default) *required|1|
|» enum (with default) *required|2|
|» enum (with example)|0|
|» enum (with example)|1|
|» enum (with example)|2|
|» enum (with example) *required|0|
|» enum (with example) *required|1|
|» enum (with example) *required|2|
|» enum (with empty option)|""|
|» enum (with empty option)|0|
|» enum (with empty option)|1|
|» enum (with empty option)|2|
|» enum (with duplicate options)|""|
|» enum (with duplicate options)|""|
|» enum (with duplicate options)|0|
|» enum (with duplicate options)|2|
|» enum (with duplicate options)|2|

<h3 id="number-enum-support-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Boolean enum support

<a id="opIdboolean_enumSupport"></a>

> Code samples

```bash
curl https://example.com/anything/strings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "enum": true,
    "enum *required": true,
    "enum (with default)": false,
    "enum (with default) *required": true
  }'
```

`PUT /anything/strings`

Support and handling of enums on `type: boolean` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Body parameter

```json
{
  "enum": true,
  "enum *required": true,
  "enum (with default)": false,
  "enum (with default) *required": true
}
```

<h3 id="boolean-enum-support-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» enum|body|boolean|false|A regular ol' enum|
|» enum *required|body|boolean|true|A regular ol' enum|
|» enum (with default)|body|boolean|false|This enum has a `default` of `false`.|
|» enum (with default) *required|body|boolean|true|A required enum with a default (if a field is required it should probably always have a default, eh?)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» enum|true|
|» enum|false|
|» enum *required|true|
|» enum *required|false|
|» enum (with default)|true|
|» enum (with default)|false|
|» enum (with default) *required|true|
|» enum (with default) *required|false|

<h3 id="boolean-enum-support-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## String enum support

<a id="opIdstring_enumSupport"></a>

> Code samples

```bash
curl https://example.com/anything/strings \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "enum": "available",
    "enum *required": "available",
    "enum (with default)": "available",
    "enum (with default) *required": "available",
    "enum (with example)": "pending",
    "enum (with example) *required": "pending",
    "enum (with non-value example)": "Choose...",
    "enum (with non-value example) *required": "Choose...",
    "enum (with empty option)": "",
    "enum (with duplicate options)": "",
    "enum (with empty option and empty default)": ""
  }'
```

`POST /anything/strings`

Support and handling of enums on `type: string` schemas.

📚 OpenAPI specification references:

* [3.0.3 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#schemaObject)

* [3.1.0 Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject)

> Body parameter

```json
{
  "enum": "available",
  "enum *required": "available",
  "enum (with default)": "available",
  "enum (with default) *required": "available",
  "enum (with example)": "pending",
  "enum (with example) *required": "pending",
  "enum (with non-value example)": "Choose...",
  "enum (with non-value example) *required": "Choose...",
  "enum (with empty option)": "",
  "enum (with duplicate options)": "",
  "enum (with empty option and empty default)": ""
}
```

<h3 id="string-enum-support-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» enum|body|string|false|A regular ol' enum|
|» enum *required|body|string|true|A regular ol' enum|
|» enum (with default)|body|string|false|This enum has a `default` of `available`.|
|» enum (with default) *required|body|string|true|A required enum with a default (if a field is required it should probably always have a default, eh?)|
|» enum (with example)|body|string|false|This enum has a `example` of `pending`.|
|» enum (with example) *required|body|string|true|This enum has a `example` of `pending` and is required.|
|» enum (with non-value example)|body|string|false|This enum has an example that isn't part of the enum, so the option does not get hidden|
|» enum (with non-value example) *required|body|string|true|This enum has an example that isn't part of the enum, so the option does not get hidden|
|» enum (with empty option)|body|string|false|This enum has an empty string (`""`) as one of its available options.|
|» enum (with duplicate options)|body|string|false|This enum has multiple duplicate options, they should get deduped in the UI|
|» enum (with empty option and empty default)|body|string|false|This enum has a an empty string (`""`) as its only available option, and that same value is set as its `default`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» enum|available|
|» enum|pending|
|» enum|sold|
|» enum *required|available|
|» enum *required|pending|
|» enum *required|sold|
|» enum (with default)|available|
|» enum (with default)|pending|
|» enum (with default)|sold|
|» enum (with default) *required|available|
|» enum (with default) *required|pending|
|» enum (with default) *required|sold|
|» enum (with example)|available|
|» enum (with example)|pending|
|» enum (with example)|sold|
|» enum (with example) *required|available|
|» enum (with example) *required|pending|
|» enum (with example) *required|sold|
|» enum (with non-value example)|available|
|» enum (with non-value example)|pending|
|» enum (with non-value example)|sold|
|» enum (with non-value example) *required|available|
|» enum (with non-value example) *required|pending|
|» enum (with non-value example) *required|sold|
|» enum (with empty option)|""|
|» enum (with empty option)|available|
|» enum (with empty option)|pending|
|» enum (with empty option)|sold|
|» enum (with duplicate options)|""|
|» enum (with duplicate options)|""|
|» enum (with duplicate options)|available|
|» enum (with duplicate options)|available|
|» enum (with empty option and empty default)|""|

<h3 id="string-enum-support-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>
