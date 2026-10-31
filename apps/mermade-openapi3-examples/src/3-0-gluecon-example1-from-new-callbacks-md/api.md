<h1 id="a-simple-webhook-subscription">A simple webhook subscription v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="a-simple-webhook-subscription-default">Default</h1>

## post/subscribe

> Code samples

```bash
curl https://example.com/subscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "url": "http://example.com"
  }'
```

`POST /subscribe`

> Body parameter

```json
{
  "url": "http://example.com"
}
```

<h3 id="postsubscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» url|body|string(uri)|false|none|

<h3 id="postsubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created subscription to webhook|None|

<h3 id="postsubscribe-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|mainHook|$request.body#/url|POST|none|

<aside class="success">
This operation does not require authentication
</aside>
