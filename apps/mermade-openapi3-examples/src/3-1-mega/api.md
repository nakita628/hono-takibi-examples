<h1 id="my-api">My API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

My API's summary

License: Apache 2.0

# Authentication

- Mutual TLS authentication.

<h1 id="my-api-default">Default</h1>

## get/

> Code samples

```bash
curl https://example.com/
```

`GET /`

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="my-api-webhooks">Webhooks</h1>

## postmyWebhook

`POST myWebhook`

> Body parameter

```json
{
  "type": "string",
  "int": 1,
  "none": null,
  "arr": [],
  "either": "string"
}
```

<h3 id="postmywebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» type|body|string|false|none|
|» int|body|integer|false|none|
|» none|body|null|false|none|
|» arr|body|array|false|none|
|» either|body|string \| null|false|none|

<aside class="success">
This operation does not require authentication
</aside>
