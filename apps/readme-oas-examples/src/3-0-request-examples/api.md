<h1 id="support-for-request-body-and-parameter-examples">Support for request body and parameter examples v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#requestBodyObject

Base URLs:

* <a href="https://httpbin.org/anything">https://httpbin.org/anything</a>

<h1 id="support-for-request-body-and-parameter-examples-multiple-examples">Multiple examples</h1>

## Within `examples` (parameters)

> Code samples

```bash
curl https://example.com/parameterExamples/param1-example/param2-example \
  -H 'Accept: application/json'
```

`GET /parameterExamples/{param1}/{param2}`

This operation has several parameters with examples alongside separately maintained example within `examples` at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

<h3 id="within-examples-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|param1|path|string|true|none|
|param2|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "summary": "example summary (response)",
  "description": "a lengthier example description (response)",
  "id": 1234,
  "email": "test+response@example.com",
  "name": "Test user name (response)"
}
```

> 400 Response

```text
<?xml version="1.0" encoding="UTF-8"?><note><body>Invalid user!</body></note>
```

> default Response

```json
{
  "id": 1234,
  "email": "test@example.com",
  "name": "Test user name"
}
```

<h3 id="within-examples-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[user](#schemauser)|
|400|Bad Request|Validation failed|None|
|default|Default|OK|[user](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## Within `examples` (mixed)

> Code samples

```bash
curl https://example.com/parameterExamples/param1-example/param2-example \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'param5: param5-example' \
  -d '{
    "id": 1234,
    "email": "test@example.com",
    "name": "Test user name"
  }'
```

`PATCH /parameterExamples/{param1}/{param2}`

This operation has parameter and body examples alongside separately maintained example within `examples` at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

> Body parameter

```json
{
  "id": 1234,
  "email": "test@example.com",
  "name": "Test user name"
}
```

<h3 id="within-examples-mixed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|param1|path|string|true|none|
|param2|path|string|true|none|
|param3|query|string|false|none|
|param4|query|string|false|none|
|param5|header|string|true|none|
|param6|header|string|false|none|
|body|body|[user](#schemauser)|true|none|
|» id|body|number|false|none|
|» email|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "summary": "example summary (response)",
  "description": "a lengthier example description (response)",
  "id": 1234,
  "email": "test+response@example.com",
  "name": "Test user name (response)"
}
```

> 400 Response

```text
<?xml version="1.0" encoding="UTF-8"?><note><body>Invalid user!</body></note>
```

> default Response

```json
{
  "id": 1234,
  "email": "test@example.com",
  "name": "Test user name"
}
```

<h3 id="within-examples-mixed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[user](#schemauser)|
|400|Bad Request|Validation failed|None|
|default|Default|OK|[user](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## Within `examples` (body)

> Code samples

```bash
curl https://example.com/requestBody \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 1234,
    "email": "test@example.com",
    "name": "Test user name"
  }'
```

`POST /requestBody`

This operation has a `requestBody` with separately maintained examples within `examples` at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

> Body parameter

```json
{
  "id": 1234,
  "email": "test@example.com",
  "name": "Test user name"
}
```

<h3 id="within-examples-body-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[user](#schemauser)|true|none|
|» id|body|number|false|none|
|» email|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 1234,
  "email": "test+response@example.com",
  "name": "Test user name (response)"
}
```

> 400 Response

```text
<?xml version="1.0" encoding="UTF-8"?><note><body>Invalid user!</body></note>
```

> default Response

```json
{
  "id": 1234,
  "email": "test@example.com",
  "name": "Test user name"
}
```

<h3 id="within-examples-body-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[user](#schemauser)|
|400|Bad Request|Validation failed|None|
|default|Default|OK|[user](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## Stringified JSON arrays in an `examples` value

> Code samples

```bash
curl https://example.com/requestBody-primitive-example \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"[\n  {\n    \"name\": \"Fluffy\",\n    \"petType\": \"Cat\"\n  }\n]"'
```

`PUT /requestBody-primitive-example`

This operation has a `requestBody` with separately maintained example within `examples` at the Media Type Object level containing a stringified JSON array.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

> Body parameter

```json
"[\n  {\n    \"name\": \"Fluffy\",\n    \"petType\": \"Cat\"\n  }\n]"
```

<h3 id="stringified-json-arrays-in-an-examples-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[pets](#schemapets)|true|none|

> Example responses

> 200 Response

```json
"[\n  {\n    \"name\": \"Fluffy\",\n    \"petType\": \"Cat\"\n  }\n]"
```

<h3 id="stringified-json-arrays-in-an-examples-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[pets](#schemapets)|

<aside class="success">
This operation does not require authentication
</aside>

## Stringified JSON object in an `examples` value

> Code samples

```bash
curl https://example.com/requestBody-primitive-example \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"{\n  \"name\": \"Fluffy\",\n  \"petType\": \"Cat\"\n}"'
```

`PATCH /requestBody-primitive-example`

This operation has a `requestBody` with separately maintained example within `examples` at the Media Type Object level containing stringified JSON object.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

> Body parameter

```json
"{\n  \"name\": \"Fluffy\",\n  \"petType\": \"Cat\"\n}"
```

<h3 id="stringified-json-object-in-an-examples-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[pet](#schemapet)|true|none|
|» name|body|string|false|none|
|» petType|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» petType|Cat|
|» petType|Dog|

> Example responses

> 200 Response

```json
"{\n  \"name\": \"Fluffy\",\n  \"petType\": \"Cat\"\n}"
```

<h3 id="stringified-json-object-in-an-examples-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[pet](#schemapet)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-request-body-and-parameter-examples-single-example">Single example</h1>

## Within `example`

> Code samples

```bash
curl https://example.com/parameterExamples/param1-example/param2-example \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 12343354,
    "email": "test@example.com",
    "name": "Test user name"
  }'
```

`PUT /parameterExamples/{param1}/{param2}`

This operation has a param example and `requestBody` with separately maintained example within a simple `example` object at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

> Body parameter

```json
{
  "id": 12343354,
  "email": "test@example.com",
  "name": "Test user name"
}
```

<h3 id="within-example-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|param1|path|string|true|none|
|param2|path|string|true|none|
|body|body|[user](#schemauser)|true|none|
|» id|body|number|false|none|
|» email|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 12343354,
  "email": "test@example.com",
  "name": "Test user name"
}
```

<h3 id="within-example-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[user](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## `$ref` within `example`

> Code samples

```bash
curl https://example.com/requestBody \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "$ref": "#/components/examples/user/value"
  }'
```

`PUT /requestBody`

This operation has a `requestBody` with separately maintained example within a `$ref` in a simple `example` object at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

> Body parameter

```json
{
  "$ref": "#/components/examples/user/value"
}
```

<h3 id="ref-within-example-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[user](#schemauser)|true|none|
|» id|body|number|false|none|
|» email|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/examples/user/value"
}
```

<h3 id="ref-within-example-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[user](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## Within `example`

> Code samples

```bash
curl https://example.com/requestBody \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 12343354,
    "email": "test@example.com",
    "name": "Test user name"
  }'
```

`PATCH /requestBody`

This operation has a `requestBody` with separately maintained example within a simple `example` object at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

> Body parameter

```json
{
  "id": 12343354,
  "email": "test@example.com",
  "name": "Test user name"
}
```

<h3 id="within-example-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[user](#schemauser)|true|none|
|» id|body|number|false|none|
|» email|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 12343354,
  "email": "test@example.com",
  "name": "Test user name"
}
```

<h3 id="within-example-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[user](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## Primitive `example`

> Code samples

```bash
curl https://example.com/requestBody-primitive-example \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"column1,column2,column3,column4"'
```

`POST /requestBody-primitive-example`

This operation has a `requestBody` with separately maintained **primitive** example within a simple `example` object at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

> Body parameter

```json
"column1,column2,column3,column4"
```

<h3 id="primitive-example-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
"column1,column2,column3,column4"
```

<h3 id="primitive-example-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-request-body-and-parameter-examples-multiple-media-types">Multiple media types</h1>

## Within `examples`

> Code samples

```bash
curl https://example.com/requestBody-multi-media-types \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "Fluffy",
    "petType": "Cat"
  }'
```

`POST /requestBody-multi-media-types`

This operation has a `requestBody` containing multiple media types with each containing a separately maintained example within `examples` at the Media Type Object level.

📚 OpenAPI specification references:

* [3.0.3 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#mediaTypeObject)

* [3.1.0 Media Type Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#mediaTypeObject)

> Body parameter

```json
{
  "name": "Fluffy",
  "petType": "Cat"
}
```

> Example responses

> 200 Response

```json
{
  "name": "Fluffy",
  "petType": "Cat"
}
```

> 400 Response

```text
<?xml version="1.0" encoding="UTF-8"?><note><body>Invalid pet!</body></note>
```

<h3 id="within-examples-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Validation failed|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-request-body-and-parameter-examples-default">Default</h1>

## Demo handling of formData

<a id="opIddemoFormData"></a>

> Code samples

```bash
curl https://example.com/requestBody-form-data-example \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'client_id=id123&client_secret=secret456&scope=789'
```

`POST /requestBody-form-data-example`

> Body parameter

```yaml
client_id: id123
client_secret: secret456
scope: 789
```

<h3 id="demo-handling-of-formdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|true|none|
|» client_secret|body|string|true|none|
|» scope|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "access_token": 123,
  "token_type": "type456",
  "expires_in": 789
}
```

<h3 id="demo-handling-of-formdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Token|[Token](#schematoken)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_pet">pet</h2>
<!-- backwards compatibility -->
<a id="schemapet"></a>
<a id="schema_pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "name": "string",
  "petType": "Cat"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|petType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|petType|Cat|
|petType|Dog|

<h2 id="tocS_pets">pets</h2>
<!-- backwards compatibility -->
<a id="schemapets"></a>
<a id="schema_pets"></a>
<a id="tocSpets"></a>
<a id="tocspets"></a>

```json
[
  {
    "name": "string",
    "petType": "Cat"
  }
]
```

<h2 id="tocS_tag">tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_tag"></a>
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

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "access_token": 0,
  "token_type": "string",
  "expires_in": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|integer(int32)|true|none|none|
|token_type|string|true|none|none|
|expires_in|integer(int32)|true|none|none|

<h2 id="tocS_user">user</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": 0,
  "email": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|email|string|false|none|none|
|name|string|false|none|none|
