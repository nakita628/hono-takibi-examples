<h1 id="thing-api-alasdairhurst-on-github">Thing API (@alasdairhurst on GitHub) v0.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/apigee-127/sway/pull/220#issuecomment-587568565

Base URLs:

* <a href="http://localhost:8080/test">http://localhost:8080/test</a>

* <a href="https://localhost:8080/test">https://localhost:8080/test</a>

* <a href="ws://localhost:8080/test">ws://localhost:8080/test</a>

* <a href="wss://localhost:8080/test">wss://localhost:8080/test</a>

Email: <a href="mailto:foo@bar.com">Axway Person</a> 
Web: <a href="http://www.axway.com">Axway Person</a> 
License: <a href="http://www.axway.com">FREE</a>

<h1 id="thing-api-alasdairhurst-on-github-default">Default</h1>

## get/thingyref

> Code samples

```bash
curl https://example.com/thingyref
```

`GET /thingyref`

this is a method used by a path which isn't 'x-not-a-path-but-used-in-ref'

<h3 id="getthingyref-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|too lazy to make a 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/thing

> Code samples

```bash
curl 'https://example.com/thing?apiKey=string'
```

`GET /thing`

has no operation id, no parameters

<h3 id="getthing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|query|string|true|none|

<h3 id="getthing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|too lazy to make a 200|None|

<aside class="success">
This operation does not require authentication
</aside>

## uploadThing

<a id="opIduploadThing"></a>

> Code samples

```bash
curl 'https://example.com/thing?apiKey=string' \
  -X PUT \
  -F 'thing=@/path/to/file'
```

`PUT /thing`

> Body parameter

```yaml
thing: string
```

<h3 id="uploadthing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|query|string|true|none|
|body|body|object|false|none|
|» thing|body|string(binary)|true|file to upload|

<h3 id="uploadthing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Updated|None|

<aside class="success">
This operation does not require authentication
</aside>

## upsert

<a id="opIdupsert"></a>

> Code samples

```bash
curl 'https://example.com/thing?apiKey=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string"
  }'
```

`POST /thing`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="upsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|query|string|true|none|
|body|body|[wannaBeThing](#schemawannabething)|false|none|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "Puma",
  "id": "Dog"
}
```

> 400 Response

```json
{
  "messages": [
    "string"
  ]
}
```

> 500 Response

```json
{
  "message": "string",
  "location": {
    "latitude": 0,
    "longitude": 0
  }
}
```

> 501 Response

```json
{}
```

> default Response

```json
{
  "message": "string",
  "location": {
    "latitude": 0,
    "longitude": 0
  }
}
```

<h3 id="upsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|[thing](#schemathing)|
|201|Created|Created|None|
|204|No Content|Updated no content|None|
|400|Bad Request|Bad request|[error](#schemaerror)|
|500|Internal Server Error|Server error|[serverError](#schemaservererror)|
|501|Not Implemented|Inline schema|Inline|
|default|Default|Server error|[serverError](#schemaservererror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Location|string||Location of new resource|
|201|Location|string||Location of new resource|

<aside class="success">
This operation does not require authentication
</aside>

## patch/thing

> Code samples

```bash
curl https://example.com/thing \
  -X PATCH
```

`PATCH /thing`

updates name

<h3 id="patchthing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|
|apiKey|query|number|false|Overrides the path item parameters|

<h3 id="patchthing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|done|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="thing-api-alasdairhurst-on-github-foo">foo</h1>

## interesting endpoint which deletes something for the sake of it.

<a id="opIddeleteNameUnique"></a>

> Code samples

```bash
curl 'https://example.com/thing?apiKey=string' \
  -X DELETE
```

`DELETE /thing`

deletes name

<a href="http://www.axway.com">foo</a>

<h3 id="interesting-endpoint-which-deletes-something-for-the-sake-of-it-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string(password)|false|none|
|fooArr|query|[[string]]|false|an array of array of strings no bigger than 10 characters beginning with h y or m|
|barInt|query|integer|false|an integer which is a multiple of 5 but bigger than 5 and no bigger than 100|
|apiKey|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|name|foo|
|name|bar|
|name|baz|

<h3 id="interesting-endpoint-which-deletes-something-for-the-sake-of-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|done|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_geo">geo</h2>
<!-- backwards compatibility -->
<a id="schemageo"></a>
<a id="schema_geo"></a>
<a id="tocSgeo"></a>
<a id="tocsgeo"></a>

```json
{
  "latitude": 0,
  "longitude": 0
}
```

A geographical coordinate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number|false|none|none|
|longitude|number|false|none|none|

<h2 id="tocS_wannaBeThing">wannaBeThing</h2>
<!-- backwards compatibility -->
<a id="schemawannabething"></a>
<a id="schema_wannaBeThing"></a>
<a id="tocSwannabething"></a>
<a id="tocswannabething"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_thing">thing</h2>
<!-- backwards compatibility -->
<a id="schemathing"></a>
<a id="schema_thing"></a>
<a id="tocSthing"></a>
<a id="tocsthing"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_serverError">serverError</h2>
<!-- backwards compatibility -->
<a id="schemaservererror"></a>
<a id="schema_serverError"></a>
<a id="tocSservererror"></a>
<a id="tocsservererror"></a>

```json
{
  "message": "string",
  "location": {
    "latitude": 0,
    "longitude": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|location|[geo](#schemageo)|false|none|A geographical coordinate|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "messages": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[string]|true|none|none|
