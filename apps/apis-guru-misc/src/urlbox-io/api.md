<h1 id="urlbox-api">Urlbox API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A plugin that allows the user to capture screenshots of a web page from a URL or HTML using ChatGPT.

Base URLs:

* <a href="https://api.urlbox.io">https://api.urlbox.io</a>

# Authentication

- HTTP Authentication, scheme: bearer The Urlbox API uses your secret API key to authenticate. To find your secret key, login to the Urlbox dashboard at https://urlbox.io/dashboard.

<h1 id="urlbox-api-default">Default</h1>

## Render a URL as an image or video

<a id="opIdrenderSync"></a>

> Code samples

```bash
curl https://example.com/v1/render/sync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "block_ads": true,
    "click_accept": true,
    "delay": "string",
    "format": "png",
    "full_page": true,
    "gpu": true,
    "height": 0,
    "hide_cookie_banners": true,
    "html": "string",
    "metadata": true,
    "retina": true,
    "selector": "string",
    "thumb_height": 0,
    "thumb_width": 0,
    "url": "string",
    "wait_for": "string",
    "wait_to_leave": "string",
    "wait_until": "requestsfinished",
    "width": 0
  }'
```

`POST /v1/render/sync`

> Body parameter

```json
{
  "block_ads": true,
  "click_accept": true,
  "delay": "string",
  "format": "png",
  "full_page": true,
  "gpu": true,
  "height": 0,
  "hide_cookie_banners": true,
  "html": "string",
  "metadata": true,
  "retina": true,
  "selector": "string",
  "thumb_height": 0,
  "thumb_width": 0,
  "url": "string",
  "wait_for": "string",
  "wait_to_leave": "string",
  "wait_until": "requestsfinished",
  "width": 0
}
```

<h3 id="render-a-url-as-an-image-or-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RenderRequest](#schemarenderrequest)|true|none|
|» block_ads|body|boolean|false|Whether to block ads on the rendered page|
|» click_accept|body|boolean|false|Whether to automatically click accept buttons on the rendered page|
|» delay|body|string|false|The amount of milliseconds to delay before taking a screenshot|
|» format|body|string|false|The format of the rendered output|
|» full_page|body|boolean|false|Whether to capture the full page|
|» gpu|body|boolean|false|Whether to enable GPU rendering|
|» height|body|integer|false|The viewport height of the rendered output|
|» hide_cookie_banners|body|boolean|false|Whether to hide cookie banners on the rendered page|
|» html|body|string|false|The raw HTML to render as an image or video|
|» metadata|body|boolean|false|Whether to return metadata about the URL|
|» retina|body|boolean|false|Whether to render the image in retina quality|
|» selector|body|string|false|The CSS selector of an element you would like to capture|
|» thumb_height|body|integer|false|The height of the thumbnail image|
|» thumb_width|body|integer|false|The width of the thumbnail image|
|» url|body|string|false|The URL to render as an image or video|
|» wait_for|body|string|false|CSS selector of an element to wait to be present in the web page before rendering|
|» wait_to_leave|body|string|false|CSS selector of an element, such as a loading spinner, to wait to leave the web page before rendering|
|» wait_until|body|string|false|When|
|» width|body|integer|false|The viewport width of the rendered output|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|png|
|» format|jpg|
|» format|pdf|
|» format|svg|
|» format|mp4|
|» format|webp|
|» format|webm|
|» format|html|
|» wait_until|requestsfinished|
|» wait_until|mostrequestsfinished|
|» wait_until|loaded|
|» wait_until|domloaded|

> Example responses

> 200 Response

```json
{
  "renderUrl": "http://example.com",
  "size": 0
}
```

> 307 Response

```json
{
  "location": "https://api.urlbox.io/v1/redirect/BQxxwO98uwkSsuJf/1dca9bae-c49d-42d3-8282-89450afb7e73/1",
  "message": "Please follow the redirect to continue your long running request"
}
```

> 400 Response

```json
{
  "error": {
    "code": "ApiKeyNotFound",
    "message": "Api Key does not exist"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "ApiKeyNotFound",
    "message": "Api Key does not exist"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "ApiKeyNotFound",
    "message": "Something went wrong rendering that"
  }
}
```

<h3 id="render-a-url-as-an-image-or-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[RenderResponse](#schemarenderresponse)|
|307|Temporary Redirect|Temporary Redirect|[RedirectResponse](#schemaredirectresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-renders-allowed|integer||The number of renders allowed|
|200|x-renders-reset|string||The date and time when the render count will reset|
|200|x-renders-used|integer||The number of renders used|
|200|x-urlbox-acceptedby|string||The server that accepted the request|
|200|x-urlbox-cache-status|string||The cache status of the response|
|200|x-urlbox-cachekey|string||The cache key used by URLBox|
|200|x-urlbox-renderedby|string||The server that rendered the response|
|200|x-urlbox-requestid|string||The request ID assigned by URLBox|
|307|Location|string|uri|none|
|400|x-urlbox-error-message|string||An error message describing the reason the request failed|
|401|x-urlbox-error-message|string||An error message describing the reason the request failed|
|500|x-urlbox-error-message|string||An error message describing the reason the request failed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SecretKey
</aside>

# Schemas

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_RedirectResponse">RedirectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaredirectresponse"></a>
<a id="schema_RedirectResponse"></a>
<a id="tocSredirectresponse"></a>
<a id="tocsredirectresponse"></a>

```json
{
  "location": "http://example.com",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string(uri)|true|none|The URL to follow for the long running request|
|message|string|true|none|A human-readable message indicating the need to follow the redirect|

<h2 id="tocS_RenderRequest">RenderRequest</h2>
<!-- backwards compatibility -->
<a id="schemarenderrequest"></a>
<a id="schema_RenderRequest"></a>
<a id="tocSrenderrequest"></a>
<a id="tocsrenderrequest"></a>

```json
{
  "block_ads": true,
  "click_accept": true,
  "delay": "string",
  "format": "png",
  "full_page": true,
  "gpu": true,
  "height": 0,
  "hide_cookie_banners": true,
  "html": "string",
  "metadata": true,
  "retina": true,
  "selector": "string",
  "thumb_height": 0,
  "thumb_width": 0,
  "url": "string",
  "wait_for": "string",
  "wait_to_leave": "string",
  "wait_until": "requestsfinished",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block_ads|boolean|false|none|Whether to block ads on the rendered page|
|click_accept|boolean|false|none|Whether to automatically click accept buttons on the rendered page|
|delay|string|false|none|The amount of milliseconds to delay before taking a screenshot|
|format|string|false|none|The format of the rendered output|
|full_page|boolean|false|none|Whether to capture the full page|
|gpu|boolean|false|none|Whether to enable GPU rendering|
|height|integer|false|none|The viewport height of the rendered output|
|hide_cookie_banners|boolean|false|none|Whether to hide cookie banners on the rendered page|
|html|string|false|none|The raw HTML to render as an image or video|
|metadata|boolean|false|none|Whether to return metadata about the URL|
|retina|boolean|false|none|Whether to render the image in retina quality|
|selector|string|false|none|The CSS selector of an element you would like to capture|
|thumb_height|integer|false|none|The height of the thumbnail image|
|thumb_width|integer|false|none|The width of the thumbnail image|
|url|string|false|none|The URL to render as an image or video|
|wait_for|string|false|none|CSS selector of an element to wait to be present in the web page before rendering|
|wait_to_leave|string|false|none|CSS selector of an element, such as a loading spinner, to wait to leave the web page before rendering|
|wait_until|string|false|none|When|
|width|integer|false|none|The viewport width of the rendered output|
|*oneOf*|object|false|none|none|
|*oneOf*|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|format|png|
|format|jpg|
|format|pdf|
|format|svg|
|format|mp4|
|format|webp|
|format|webm|
|format|html|
|wait_until|requestsfinished|
|wait_until|mostrequestsfinished|
|wait_until|loaded|
|wait_until|domloaded|

<h2 id="tocS_RenderResponse">RenderResponse</h2>
<!-- backwards compatibility -->
<a id="schemarenderresponse"></a>
<a id="schema_RenderResponse"></a>
<a id="tocSrenderresponse"></a>
<a id="tocsrenderresponse"></a>

```json
{
  "renderUrl": "http://example.com",
  "size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|renderUrl|string(uri)|false|none|The URL where the rendered output is stored|
|size|integer(int64)|false|none|The size of the rendered output in bytes|
