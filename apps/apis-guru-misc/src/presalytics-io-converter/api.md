<h1 id="doc-converter">Doc Converter v0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This api converts file formats of OpenXml and OpenOffice documents formats to vector files (e.g., svg)

Base URLs:

* <a href="https://api.presalytics.io/doc-converter/">https://api.presalytics.io/doc-converter/</a> - Base server

Email: <a href="mailto:kevin@presalytics.io">Presalytics.io</a> 
Web: <a href="http://presalytics.io">Presalytics.io</a> 
License: AGPL

<h1 id="doc-converter-default">Default</h1>

## converts pptx file to svg image

<a id="opIdsvgconvert"></a>

> Code samples

```bash
curl https://example.com/svgconvert \
  -X POST \
  -H 'Accept: application/json' \
  -F 'file=@/path/to/file'
```

`POST /svgconvert`

> Body parameter

```yaml
file: string
```

<h3 id="converts-pptx-file-to-svg-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Fizepath to pptx file|
|» file|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "blob_name": "string",
  "blob_url": "string"
}
```

<h3 id="converts-pptx-file-to-svg-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Url of svg file|Inline|
|400|Bad Request|Bad Request.|None|
|415|Unsupported Media Type|Invalid file type|None|

<h3 id="converts-pptx-file-to-svg-image-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blob_name|string|false|none|none|
|blob_url|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
