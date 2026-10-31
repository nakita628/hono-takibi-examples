<h1 id="readonly-and-writeonly-visibility-support">readOnly and writeOnly visibility support v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-20

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="readonly-and-writeonly-visibility-support-default">Default</h1>

## post/

> Code samples

```bash
curl https://example.com/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "propWithWriteOnly": "string"
  }'
```

`POST /`

This operation has a `requestBody` with a `readOnly` and a `writeOnly` property, as well as a response with the same. `writeOnly` properties should show up in the form and `readOnly` properties should show up in response examples.

> Body parameter

```json
{
  "id": "string",
  "propWithWriteOnly": "string"
}
```

<h3 id="post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» id|body|string|false|none|
|» propWithWriteOnly|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "propWithReadOnly": "string"
}
```

<h3 id="post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="post-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|propWithReadOnly|string|false|read-only|none|

<aside class="success">
This operation does not require authentication
</aside>
