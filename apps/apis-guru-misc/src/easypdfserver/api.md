<h1 id="easypdfserver">EasyPDFServer v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for converting HTML to PDF.

Base URLs:

* <a href="https://api.easypdfserver.com">https://api.easypdfserver.com</a> - Main (production) server

<h1 id="easypdfserver-default">Default</h1>

## Generate a PDF from HTML or URL.

> Code samples

```bash
curl https://example.com/make-pdf \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "html": "string",
    "key": "string",
    "url": "string"
  }'
```

`POST /make-pdf`

> Body parameter

```json
{
  "html": "string",
  "key": "string",
  "url": "string"
}
```

<h3 id="generate-a-pdf-from-html-or-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Pass the API key from easypdfserver.com and either HTML or URL to generate your PDF.|
|» html|body|string|false|none|
|» key|body|string|true|none|
|» url|body|string|false|none|

<h3 id="generate-a-pdf-from-html-or-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Your PDF file|Inline|

<aside class="success">
This operation does not require authentication
</aside>
