<h1 id="example-of-html-forms">Example of HTML forms v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="example-of-html-forms-default">Default</h1>

## post/submit

> Code samples

```bash
curl https://example.com/submit \
  -X POST \
  -H 'Content-Type: application/x-www-urlencoded-form' \
  -d '{"street":"string","city":"string","province":"string","country":"string","postcode":"string","tags":["string"]}'
```

`POST /submit`

> Body parameter

```json
{
  "street": "string",
  "city": "string",
  "province": "string",
  "country": "string",
  "postcode": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="postsubmit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» street|body|string|false|none|
|» city|body|string|false|none|
|» province|body|string|false|none|
|» country|body|string|false|none|
|» postcode|body|string|false|none|
|» tags|body|[string]|false|none|

<h3 id="postsubmit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Great Success!|None|

<aside class="success">
This operation does not require authentication
</aside>
