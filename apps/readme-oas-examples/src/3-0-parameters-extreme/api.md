<h1 id="extreme-parameter-cases">Extreme parameter cases v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#parameter-object

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="extreme-parameter-cases-default">Default</h1>

## Utilizes all available parameter types.

> Code samples

```bash
curl https://example.com/anything/all-param-types/0/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "id": 0,
    "name": "string",
    "status": "available"
  }'
```

`POST /anything/all-param-types/{id}/{id2}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "status": "available"
}
```

<h3 id="utilizes-all-available-parameter-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Path ID|
|id2|path|integer(int64)|true|Another path ID|
|cookieString|cookie|string|false|Cookie value that accepts a string|
|cookieInt|cookie|integer|false|Cookie that accepts an integer|
|queryParam|query|string|false|Query string parameter|
|queryParam2|query|string|false|Another query string parameter|
|x-header-value|header|string|false|Custom header|
|x-header-data|header|string|false|Another custom header|
|body|body|[Pet](#schemapet)|true|Pet object that needs to be added to the store|
|» id|body|integer(int64)|false|none|
|» name|body|string|false|none|
|» status|body|string|false|An enum with available options|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|available|
|» status|pending|
|» status|sold|

<h3 id="utilizes-all-available-parameter-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Pet">Pet</h2>
<!-- backwards compatibility -->
<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "id": 0,
  "name": "string",
  "status": "available"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|status|string|false|none|An enum with available options|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|
