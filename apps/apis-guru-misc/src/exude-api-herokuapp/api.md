<h1 id="exude-api-service">Exude API Service v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Exude API is an Open Source project, It is used for the primary ways for filtering the stopping, stemming words from the text data. This API is in a very basic level of development need to work on for later changes.

Base URLs:

* <a href="https://exude-api.herokuapp.com">https://exude-api.herokuapp.com</a> - Use Heruko deployment for testing/development

* <a href="http://localhost:8080">http://localhost:8080</a> - Use docker container and deploy on the production environment or locally developmenet

<a href="http://uttesh.com/apis/terms/">Terms of service</a>

<h1 id="exude-api-service-exude">exude</h1>

## Filter the stopping words from the provided input data or links

<a id="opIdfilterStoppings"></a>

> Code samples

```bash
curl https://example.com/exude/stopping/data \
  -X POST \
  -H 'Accept: application/json' \
  -F 'data=string' \
  -F 'links=["string"]'
```

`POST /exude/{type}/data`

> Body parameter

```yaml
data: string
links:
  - string
```

<h3 id="filter-the-stopping-words-from-the-provided-input-data-or-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|provide the type of filtering required stopping/swear|
|body|body|[ExudeBean](#schemaexudebean)|true|Filter the stopping words from the provided input data or links|
|» data|body|string|false|none|
|» links|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "data": "string"
}
```

<h3 id="filter-the-stopping-words-from-the-provided-input-data-or-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Exude response|[ExudeResponseBean](#schemaexuderesponsebean)|

<aside class="success">
This operation does not require authentication
</aside>

## Filter the stopping words from the provided input file

<a id="opIdfilterFileDataStoppings"></a>

> Code samples

```bash
curl https://example.com/exude/string/file \
  -X POST \
  -H 'Accept: application/json' \
  -F 'file=@/path/to/file'
```

`POST /exude/{type}/file`

> Body parameter

```yaml
file: string
```

<h3 id="filter-the-stopping-words-from-the-provided-input-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|provide the type of filtering required stopping/swear|
|body|body|object|true|Filter the stopping words from the provided input file|
|» file|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "data": "string"
}
```

<h3 id="filter-the-stopping-words-from-the-provided-input-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|model response|[ExudeResponseBean](#schemaexuderesponsebean)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ExudeBean">ExudeBean</h2>
<!-- backwards compatibility -->
<a id="schemaexudebean"></a>
<a id="schema_ExudeBean"></a>
<a id="tocSexudebean"></a>
<a id="tocsexudebean"></a>

```json
{
  "data": "string",
  "links": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
|links|[string]|false|none|none|

<h2 id="tocS_ExudeResponseBean">ExudeResponseBean</h2>
<!-- backwards compatibility -->
<a id="schemaexuderesponsebean"></a>
<a id="schema_ExudeResponseBean"></a>
<a id="tocSexuderesponsebean"></a>
<a id="tocsexuderesponsebean"></a>

```json
{
  "data": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
