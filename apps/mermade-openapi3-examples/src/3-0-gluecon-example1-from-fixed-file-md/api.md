<h1 id="api-to-upload-a-file">API to upload a file v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="api-to-upload-a-file-default">Default</h1>

## put/files/{filename}

> Code samples

```bash
curl https://example.com/files/string \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  --data-binary '@/path/to/file'
```

`PUT /files/{filename}`

<h3 id="putfilesfilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|none|
|body|body|string(binary)|false|none|

<h3 id="putfilesfilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|OK|None|

<aside class="success">
This operation does not require authentication
</aside>
