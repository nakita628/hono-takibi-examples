<h1 id="barcode-api">Barcode API v1.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Generate Barcode images for a given barcode number. You can decode Barcode images and get the barcodes in a numberic form as well. Many industry standard barcode types are supported. The best and complete Barcode API on the cloud. [Click here to subscribe](http://fungenerators.com/api/barcode/)

Base URLs:

* <a href="http://api.fungenerators.com">http://api.fungenerators.com</a>

* <a href="https://api.fungenerators.com">https://api.fungenerators.com</a>

<a href="https://fungenerators.com/terms">Terms of service</a>
Web: <a href="http://fungenerators.com/api/barcode/">Fun Generators</a> 

# Authentication

* API Key (X-Fungenerators-Api-Secret)
    - Parameter Name: **X-Fungenerators-Api-Secret**, in: header.

<h1 id="barcode-api-barcode">Barcode</h1>

Barcode API

<a href="http://fungenerators.com/api/barcode/">Find out more</a>

## post/barcode/decode

> Code samples

```bash
curl https://example.com/barcode/decode \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}" \
  -d 'barimage=string'
```

`POST /barcode/decode`

Decode a Barcode image and return the cotents if successful

> Body parameter

```yaml
barimage: string
```

<h3 id="postbarcodedecode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» barimage|body|string(binary)|true|Barcode image to decode and get the content value|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"contents\": [\n      {\n               \"value\": 234567,\n               \"format\": 'C39',\n               \"content_type\": \"number\"\n      }\n  ]\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}              "
```

<h3 id="postbarcodedecode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## get/barcode/decode/types

> Code samples

```bash
curl https://example.com/barcode/decode/types \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /barcode/decode/types`

Get the supported barcode types for the decoding process.

> Example responses

> 200 Response

```json
"{\n  \"success\": {\"total\":28},\n  \"contents\": \n  {\n     \"types\":\n     {\n       \"C39\":\"Code 39\",\n       \"C39CKSUM\":\"Code 39 with Checksum\",\n       \"C39E\":\"Extended Code 39\",\n       \"C39ECKSUM\":\"Extended Code 39 With Checksum\",\n       \"C93\":\"Code 93\",\n       \"I25\":\"Interleaved 2 of 5\",\n       \"I25CKSUM\":\"Interleaved 2 of 5 with Checksum\",\n       \"C128\":\"Code 128 (Standard)\",\n       \"C128A\":\"Code 128-A\",\n       \"C128B\":\"Code 128-B\",\n       \"C128C\":\"Code 128-C\",\n       \"CODABAR\":\"CODABAR\"\n       \n     }\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                    "
```

<h3 id="getbarcodedecodetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## get/barcode/encode

> Code samples

```bash
curl 'https://example.com/barcode/encode?number=string' \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /barcode/encode`

Get a Bar Code image for the given barcode number

<h3 id="getbarcodeencode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|string(string)|true|Barcode number|
|barcodeformat|query|string(string)|false|Barcode format default C39. Valid values are the keys to those returned from /barcode/encode/types.|
|outputformat|query|string(string)|false|Output image format. Must be one of png/html/jpg/svg|
|widthfactor|query|integer(integer)|false|Width factor of the image|
|totalheight|query|integer(integer)|false|Total height of the image|

> Example responses

> 200 Response

```json
"{\n    \"success\": {\n        \"total\": 1\n    },\n    \"contents\": [\n        {\n            \"encoding\": \"base64\",\n            \"format\": \"png\",\n            \"content\": \"\",\n        }\n    ]\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                    "
```

<h3 id="getbarcodeencode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>

## get/barcode/encode/types

> Code samples

```bash
curl https://example.com/barcode/encode/types \
  -H 'Accept: application/json' \
  -H "X-Fungenerators-Api-Secret: ${API_KEY}"
```

`GET /barcode/encode/types`

Get the supported barcode types for encoding / image generation.

> Example responses

> 200 Response

```json
"{\n  \"success\": {\"total\":28},\n  \"contents\": {\"types\":\n       {\n          \"C39\":\"Code 39\",\n          \"C39CKSUM\":\"Code 39 with Checksum\",\n          \"C39E\":\"Extended Code 39\",\n          \"C39ECKSUM\":\"Extended Code 39 With Checksum\",\n          \"C93\":\"Code 93\",\n          \"S25\":\"Standard 2 of 5\",\n          \"S25CKSUM\":\"Standard 2 of 5 with Checksum\",\n          \"I25\":\"Interleaved 2 of 5\",\n          \"I25CKSUM\":\"Interleaved 2 of 5 with Checksum\",\n          \"UPCA\":\"UPC-A\",\n          \"UPCE\":\"UPC-E\",\n          \"C128\":\"Code 128 (Standard)\",\n          \"C128A\":\"Code 128-A\",\n          \"C128B\":\"Code 128-B\",\n          \"C128C\":\"Code 128-C\",\n          \"EAN8\":\"EAN-8\",\n          \"EAN13\":\"EAN-13\",\n          \"MSI\":\"MSI Plessey\",\n          \"MSICKSUM\":\"MSI with Checksum\",\n          \"POSTNET\":\"POSTNET\",\n          \"PLANET\":\"PLANET\",\n          \"RMS4CC\":\"RMS4CC \\/ CBC\",\n          \"KIX\":\"KIX\",\n          \"IMB\":\"IMB\",\n          \"CODABAR\":\"CODABAR\",\n          \"CODE11\":\"Code 11\",\n          \"PHARMA\":\"Pharma One-Track\",\n          \"PHARMA2T\":\"Pharma Two-Track\"\n       }\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getbarcodeencodetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200  response|None|
|401|Unauthorized|401  response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Fungenerators-Api-Secret
</aside>
