<h1 id="example-of-multi-part-form">Example of multi-part form v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="example-of-multi-part-form-default">Default</h1>

## post/submit

> Code samples

```bash
curl https://example.com/submit \
  -X POST \
  -H 'Content-Type: multipart/mixed' \
  -d '{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","address":{},"historyMetadata":{},"profileImage":"string"}'
```

`POST /submit`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "address": {},
  "historyMetadata": {},
  "profileImage": "string"
}
```

<h3 id="postsubmit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string(uuid)|false|none|
|» address|body|object|false|none|
|» historyMetadata|body|object|false|metadata in XML format|
|» profileImage|body|string(binary)|false|none|

<h3 id="postsubmit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success!|None|

<aside class="success">
This operation does not require authentication
</aside>
