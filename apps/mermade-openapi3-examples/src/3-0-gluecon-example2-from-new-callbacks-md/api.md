<h1 id="example-of-links-with-callbacks">Example of links with callbacks v0.9.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="example-of-links-with-callbacks-default">Default</h1>

## post/hooks

> Code samples

```bash
curl https://example.com/hooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "callback-url": "https://consumer.com/hookcallback"
  }'
```

`POST /hooks`

> Body parameter

```json
{
  "callback-url": "https://consumer.com/hookcallback"
}
```

> Example responses

> 201 Response

```json
{
  "hookId": "23432-32432-45454-97980"
}
```

<h3 id="posthooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully subscribed|None|

<h3 id="posthooks-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|hookEvent|$request.body#/callback-url|POST|none|

<aside class="success">
This operation does not require authentication
</aside>

## cancelHookCallback

<a id="opIdcancelHookCallback"></a>

> Code samples

```bash
curl https://example.com/hooks/string \
  -X DELETE
```

`DELETE /hooks/{id}`

<h3 id="cancelhookcallback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="cancelhookcallback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully cancelled callback|None|

<aside class="success">
This operation does not require authentication
</aside>
