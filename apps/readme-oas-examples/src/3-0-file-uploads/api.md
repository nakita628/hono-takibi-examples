<h1 id="file-uploading-support">File uploading support v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#considerations-for-file-uploads

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="file-uploading-support-imagepng">image/png</h1>

## `image/png` uploads

> Code samples

```bash
curl https://example.com/anything/image-png \
  -X POST \
  -H 'Content-Type: image/png' \
  --data-binary '@/path/to/file'
```

`POST /anything/image-png`

Support for a `requestBody` with an `image/png` media type to upload a single image binary.

https://swagger.io/docs/specification/describing-request-body/file-upload/

<h3 id="imagepng-uploads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string(binary)|false|none|

<h3 id="imagepng-uploads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="file-uploading-support-multipartform-data">multipart/form-data</h1>

## Multiple files

> Code samples

```bash
curl https://example.com/anything/multipart-formdata \
  -X PUT \
  -F 'filename=["string"]'
```

`PUT /anything/multipart-formdata`

Support for a `requestBody` with a `multipart/form-data` containing multiple files.

https://swagger.io/docs/specification/describing-request-body/file-upload/

> Body parameter

```yaml
filename:
  - string
```

<h3 id="multiple-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» filename|body|[string(binary)]|false|none|

<h3 id="multiple-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Single file

> Code samples

```bash
curl https://example.com/anything/multipart-formdata \
  -X POST \
  -F 'orderId=0' \
  -F 'userId=0' \
  -F 'documentFile=@/path/to/file'
```

`POST /anything/multipart-formdata`

Support for a `requestBody` with a `multipart/form-data` media type.

https://swagger.io/docs/specification/describing-request-body/file-upload/

> Body parameter

```yaml
orderId: 0
userId: 0
documentFile: string
```

<h3 id="single-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» orderId|body|integer|false|none|
|» userId|body|integer|false|none|
|» documentFile|body|string(binary)|false|none|

<h3 id="single-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>
