<h1 id="perfectpdf-api">perfectpdf api v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The perfectpdf api does one thing, perfectly: it converts html to pdf. The perfectpdf api uses headless Google Chrome to provide a low cost, high quality, simple to use service.

Base URLs:

* <a href="https://services.scideas.net">https://services.scideas.net</a>

<a href="https://scideas.net/terms">Terms of service</a>
Email: <a href="mailto:software@scideas.net">scideas software</a> 
Web: <a href="https://scideas.net">scideas software</a> 

<a href="https://services.scideas.net/perfectpdf">External documentation</a>

<h1 id="perfectpdf-api-default">Default</h1>

## Returns PDF document.

> Code samples

```bash
curl https://example.com/perfectpdf/api \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "api_key": "abc123",
    "html": "<!doctype html><html><head><meta charset=\"UTF-8\"><title>my title</title><script src=\"script.js\"></script></head><body><div>My PDF</div></body></html>"
  }'
```

`POST /perfectpdf/api`

> Body parameter

```json
{
  "api_key": "abc123",
  "html": "<!doctype html><html><head><meta charset=\"UTF-8\"><title>my title</title><script src=\"script.js\"></script></head><body><div>My PDF</div></body></html>"
}
```

<h3 id="returns-pdf-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[perfectpdf_api_body](#schemaperfectpdf_api_body)|true|none|
|» api_key|body|string|true|api key|
|» html|body|string|true|html/css markup|

<h3 id="returns-pdf-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Either a PDF document or an error message|[inline_response_200](#schemainline_response_200)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
"Error: html empty"
```

an error message

<h2 id="tocS_inline_response_200">inline_response_200</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200"></a>
<a id="schema_inline_response_200"></a>
<a id="tocSinline_response_200"></a>
<a id="tocsinline_response_200"></a>

```json
"Error: html empty"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error](#schemaerror)|false|none|an error message|
|*oneOf*|[result](#schemaresult)|false|none|PDF document|

<h2 id="tocS_perfectpdf_api_body">perfectpdf_api_body</h2>
<!-- backwards compatibility -->
<a id="schemaperfectpdf_api_body"></a>
<a id="schema_perfectpdf_api_body"></a>
<a id="tocSperfectpdf_api_body"></a>
<a id="tocsperfectpdf_api_body"></a>

```json
{
  "api_key": "abc123",
  "html": "<!doctype html><html><head><meta charset=\"UTF-8\"><title>my title</title><script src=\"script.js\"></script></head><body><div>My PDF</div></body></html>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|true|none|api key|
|html|string|true|none|html/css markup|

<h2 id="tocS_result">result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
"string"
```

PDF document
