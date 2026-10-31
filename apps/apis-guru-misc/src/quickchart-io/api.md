<h1 id="quickchart-api">QuickChart API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API to generate charts and QR codes using QuickChart services.

Base URLs:

* <a href="https://quickchart.io">https://quickchart.io</a>

<h1 id="quickchart-api-default">Default</h1>

## Generate a chart (GET)

> Code samples

```bash
curl https://example.com/chart
```

`GET /chart`

Generate a chart based on the provided parameters.

<h3 id="generate-a-chart-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chart|query|string|false|The chart configuration in Chart.js format (JSON or Javascript).|
|width|query|integer|false|The width of the chart in pixels.|
|height|query|integer|false|The height of the chart in pixels.|
|format|query|string|false|The output format of the chart, e.g., 'png', 'jpg', 'svg', or 'webp'.|
|backgroundColor|query|string|false|The background color of the chart.|

<h3 id="generate-a-chart-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A generated chart image.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a chart (POST)

> Code samples

```bash
curl https://example.com/chart \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "backgroundColor": "string",
    "chart": {},
    "format": "string",
    "height": 0,
    "width": 0
  }'
```

`POST /chart`

Generate a chart based on the provided configuration in the request body.

> Body parameter

```json
{
  "backgroundColor": "string",
  "chart": {},
  "format": "string",
  "height": 0,
  "width": 0
}
```

<h3 id="generate-a-chart-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» backgroundColor|body|string|false|The background color of the chart.|
|» chart|body|object|false|The chart configuration in JSON format.|
|» format|body|string|false|The output format of the chart, e.g., 'png', 'jpg', 'svg', or 'webp'.|
|» height|body|integer|false|The height of the chart in pixels.|
|» width|body|integer|false|The width of the chart in pixels.|

<h3 id="generate-a-chart-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A generated chart image.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a QR code (GET)

> Code samples

```bash
curl https://example.com/qr
```

`GET /qr`

Generate a QR code based on the provided parameters.

<h3 id="generate-a-qr-code-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|The text to be encoded in the QR code.|
|width|query|integer|false|The width of the QR code in pixels.|
|height|query|integer|false|The height of the QR code in pixels.|
|format|query|string|false|The output format of the QR code, e.g., 'png' or 'svg'.|
|margin|query|integer|false|The margin around the QR code in pixels.|

<h3 id="generate-a-qr-code-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A generated QR code image.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a QR code (POST)

> Code samples

```bash
curl https://example.com/qr \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "format": "string",
    "height": 0,
    "margin": 0,
    "text": "string",
    "width": 0
  }'
```

`POST /qr`

Generate a QR code based on the provided configuration in the request body.

> Body parameter

```json
{
  "format": "string",
  "height": 0,
  "margin": 0,
  "text": "string",
  "width": 0
}
```

<h3 id="generate-a-qr-code-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» format|body|string|false|The output format of the QR code, e.g., 'png' or 'svg'.|
|» height|body|integer|false|The height of the QR code in pixels.|
|» margin|body|integer|false|The margin around the QR code in pixels.|
|» text|body|string|false|The text to be encoded in the QR code.|
|» width|body|integer|false|The width of the QR code in pixels.|

<h3 id="generate-a-qr-code-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A generated QR code image.|Inline|

<aside class="success">
This operation does not require authentication
</aside>
