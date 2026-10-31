<h1 id="servers-everywhere">Servers Everywhere v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.example.com">https://api.example.com</a>

<h1 id="servers-everywhere-default">Default</h1>

## get/passports/{id}

> Code samples

```bash
curl https://example.com/passports/string
```

`GET /passports/{id}`

<h3 id="getpassportsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getpassportsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/passports/{id}

> Code samples

```bash
curl https://example.com/passports/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -d 'null'
```

`POST /passports/{id}`

> Body parameter

```json
null
```

<h3 id="postpassportsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|none|

<h3 id="postpassportsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/images/{filename}

> Code samples

```bash
curl https://example.com/images/string
```

`GET /images/{filename}`

<h3 id="getimagesfilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|none|

<h3 id="getimagesfilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## put/images/{filename}

> Code samples

```bash
curl https://example.com/images/string \
  -X PUT
```

`PUT /images/{filename}`

<h3 id="putimagesfilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|none|

<h3 id="putimagesfilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete/images/{filename}

> Code samples

```bash
curl https://example.com/images/string \
  -X DELETE
```

`DELETE /images/{filename}`

<h3 id="deleteimagesfilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|none|

<h3 id="deleteimagesfilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|None|

<aside class="success">
This operation does not require authentication
</aside>
