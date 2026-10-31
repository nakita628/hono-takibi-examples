<h1 id="swagger2openapi-converter">Swagger2OpenAPI Converter v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Converter and validator for Swagger 2.0 to OpenAPI 3.0.x definitions

Base URLs:

* <a href="https://mermade.org.uk/api/v1">https://mermade.org.uk/api/v1</a>

* <a href="http://mermade.org.uk/api/v1">http://mermade.org.uk/api/v1</a>

<a href="https://opensource.org/licenses/MIT">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/swagger2openapi/issues">Mike Ralphson</a> 
License: <a href="https://opensource.org/licenses/MIT">MIT</a>

<a href="https://github.com/mermade/openapi-webconverter">External documentation</a>

<h1 id="swagger2openapi-converter-metadata">metadata</h1>

Metadata functions

## Get the status of the API

<a id="opIdgetStatus"></a>

> Code samples

```bash
curl https://example.com/status \
  -H 'Accept: application/json'
```

`GET /status`

> Example responses

> 200 Response

```json
null
```

<h3 id="get-the-status-of-the-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|default|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="swagger2openapi-converter-conversion">conversion</h1>

Conversion functions

## Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL

<a id="opIdconvertUrl"></a>

> Code samples

```bash
curl 'https://example.com/convert?url=https%3A%2F%2Fraw.githubusercontent.com%2FMermade%2Fopenapi-webconverter%2Fmaster%2Fcontract%2Fswagger.json' \
  -H 'Accept: application/json'
```

`GET /convert`

<h3 id="convert-a-swagger-20-definition-to-openapi-30x-from-a-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string(uri)|true|The URL to retrieve the OpenAPI 2.0 definition from|

> Example responses

> 200 Response

```json
null
```

<h3 id="convert-a-swagger-20-definition-to-openapi-30x-from-a-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|default|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x

<a id="opIdconvert"></a>

> Code samples

```bash
curl https://example.com/convert \
  -X POST \
  -H 'Accept: application/json' \
  -F 'filename=string' \
  -F 'source=string' \
  -F 'validate=on'
```

`POST /convert`

> Body parameter

```yaml
filename: string
source: string
validate: on
```

<h3 id="convert-a-swagger-20-definition-passed-in-the-body-to-openapi-30x-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» filename|body|string|false|The file to upload and convert|
|» source|body|string|false|The text of a Swagger 2.0 definition to convert|
|» validate|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» validate|on|

> Example responses

> 200 Response

```json
null
```

> 400 Response

```json
null
```

<h3 id="convert-a-swagger-20-definition-passed-in-the-body-to-openapi-30x-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|default|Inline|
|400|Bad Request|Invalid request|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="swagger2openapi-converter-validation">validation</h1>

Validation functions

## Return a redirect to a badge svg file depending on a source definition's validity

<a id="opIdgetBadge"></a>

> Code samples

```bash
curl 'https://example.com/badge?url=https%3A%2F%2Fraw.githubusercontent.com%2FMermade%2Fopenapi-webconverter%2Fmaster%2Fcontract%2Fopenapi.json'
```

`GET /badge`

<h3 id="return-a-redirect-to-a-badge-svg-file-depending-on-a-source-definitions-validity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string(uri)|true|The URL to retrieve the OpenAPI 3.0.x definition from|

<h3 id="return-a-redirect-to-a-badge-svg-file-depending-on-a-source-definitions-validity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|301|Moved Permanently|Moved|None|

<aside class="success">
This operation does not require authentication
</aside>

## Validate an OpenAPI 3.0.x definition

<a id="opIdvalidateUrl"></a>

> Code samples

```bash
curl 'https://example.com/validate?url=https%3A%2F%2Fraw.githubusercontent.com%2FMermade%2Fopenapi-webconverter%2Fmaster%2Fcontract%2Fopenapi.json' \
  -H 'Accept: application/json'
```

`GET /validate`

<h3 id="validate-an-openapi-30x-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string(uri)|true|The URL to retrieve the OpenAPI 3.0.x definition from|

> Example responses

> 200 Response

```json
{
  "openapi": "string"
}
```

<h3 id="validate-an-openapi-30x-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|default|[validationResult](#schemavalidationresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Validate an OpenAPI 3.0.x definition supplied in the body of the request

<a id="opIdvalidate"></a>

> Code samples

```bash
curl https://example.com/validate \
  -X POST \
  -H 'Accept: application/json' \
  -F 'filename=string' \
  -F 'source=string'
```

`POST /validate`

> Body parameter

```yaml
filename: string
source: string
```

<h3 id="validate-an-openapi-30x-definition-supplied-in-the-body-of-the-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» filename|body|string|false|The file to upload and validate|
|» source|body|string|false|The text of an OpenAPI 3.0.x definition to validate|

> Example responses

> 200 Response

```json
{
  "openapi": "string"
}
```

> 400 Response

```json
null
```

<h3 id="validate-an-openapi-30x-definition-supplied-in-the-body-of-the-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|default|[validationResult](#schemavalidationresult)|
|400|Bad Request|Invalid request|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_validationResult">validationResult</h2>
<!-- backwards compatibility -->
<a id="schemavalidationresult"></a>
<a id="schema_validationResult"></a>
<a id="tocSvalidationresult"></a>
<a id="tocsvalidationresult"></a>

```json
{
  "openapi": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|openapi|string|true|none|none|
