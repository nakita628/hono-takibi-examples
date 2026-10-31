<h1 id="example-of-request-body-in-30">Example of request body in 3.0 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="example-of-request-body-in-30-default">Default</h1>

## post/opinions

> Code samples

```bash
curl https://example.com/opinions \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '"string"'
```

`POST /opinions`

> Body parameter

```json
"string"
```

<h3 id="postopinions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|none|

<h3 id="postopinions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>
