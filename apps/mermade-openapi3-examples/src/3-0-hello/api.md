<h1 id="hello-world">Hello World v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="hello-world-default">Default</h1>

## get/hello

> Code samples

```bash
curl 'https://example.com/hello?name=string' \
  -H 'Accept: application/json'
```

`GET /hello`

<h3 id="gethello-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="gethello-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>
