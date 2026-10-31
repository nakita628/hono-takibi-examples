<h1 id="background-removal-api">Background Removal API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Remove the background of any image

Base URLs:

* <a href="https://api.remove.bg/v1.0">https://api.remove.bg/v1.0</a>

# Authentication

* API Key (APIKeyHeader)
    - Parameter Name: **X-API-Key**, in: header.

<h1 id="background-removal-api-fetch-account-info">Fetch account info</h1>

## Fetch credit balance and free API calls.

> Code samples

```bash
curl https://example.com/account \
  -H "X-API-Key: ${API_KEY}"
```

`GET /account`

Get the current credit balance and number of free API calls.

Notes:

* Balance changes may be delayed by several seconds. To locally keep track of your credit balance, you should therefore only call this endpoint initially (or e.g. when the user manually triggers a refresh), then use the `X-Credits-Charged` response header returned with each image processing response to adjust the local balance.

* The "*sizes*" field is always "all", is deprecated and will soon be removed.


<h3 id="fetch-credit-balance-and-free-api-calls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|403|Forbidden|Error: Authentication failed|[AuthFailed](#schemaauthfailed)|
|429|Too Many Requests|Error: Rate limit exceeded|[RateLimit](#schemaratelimit)|

<h3 id="fetch-credit-balance-and-free-api-calls-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» attributes|object|false|none|none|
|» » api|object|false|none|none|
|» » » free_calls|integer|false|none|none|
|» » » sizes|string|false|none|none|
|» » credits|object|false|none|none|
|» » » enterprise|number(float)|false|none|none|
|» » » payg|number(float)|false|none|none|
|» » » subscription|number(float)|false|none|none|
|» » » total|number(float)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>

<h1 id="background-removal-api-improvement-program">Improvement Program</h1>

## post/improve

> Code samples

```bash
curl https://example.com/improve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "image_file_b64": "",
    "image_filename": "car.jpg",
    "image_url": "https://www.remove.bg/example-hd.jpg",
    "tag": "batch_1_2020"
  }'
```

`POST /improve`

Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.


> Body parameter

```json
{
  "image_file_b64": "",
  "image_filename": "car.jpg",
  "image_url": "https://www.remove.bg/example-hd.jpg",
  "tag": "batch_1_2020"
}
```

<h3 id="postimprove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImprovementProgramJson](#schemaimprovementprogramjson)|true|none|
|» image_file_b64|body|string|false|Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)|
|» image_filename|body|string|false|Filename of the image, if not provided it will be autodetected form the submitted data.|
|» image_url|body|string|false|Source image URL. (If this parameter is present, the other image source parameters must be empty.)|
|» tag|body|string|false|Images with the same tag are grouped together.|

<h3 id="postimprove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image submitted|[ImprovementProgramJsonResponse](#schemaimprovementprogramjsonresponse)|
|400|Bad Request|Error: Invalid parameters or input file unprocessable|Inline|
|403|Forbidden|Error: Authentication failed|[AuthFailed](#schemaauthfailed)|
|429|Too Many Requests|Error: Rate limit exceeded|[RateLimit](#schemaratelimit)|

<h3 id="postimprove-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|none|
|» title|string|false|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>

<h1 id="background-removal-api-background-removal">Background Removal</h1>

## Remove the background of an image

> Code samples

```bash
curl https://example.com/removebg \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "add_shadow": "false",
    "bg_color": "",
    "bg_image_url": "",
    "channels": "rgba",
    "crop": "false",
    "crop_margin": "0",
    "format": "auto",
    "image_file_b64": "",
    "image_url": "https://www.remove.bg/example-hd.jpg",
    "position": "original",
    "roi": "0% 0% 100% 100%",
    "scale": "original",
    "semitransparency": "true",
    "size": "preview",
    "type": "auto",
    "type_level": 1
  }'
```

`POST /removebg`

Removes the background of a JPG/PNG image.

* File size: up to 12 MB
* Image source: File upload (binary or as base64 encoded string) or download from URL
* Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
* Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.


> Body parameter

```json
{
  "add_shadow": "false",
  "bg_color": "",
  "bg_image_url": "",
  "channels": "rgba",
  "crop": "false",
  "crop_margin": "0",
  "format": "auto",
  "image_file_b64": "",
  "image_url": "https://www.remove.bg/example-hd.jpg",
  "position": "original",
  "roi": "0% 0% 100% 100%",
  "scale": "original",
  "semitransparency": "true",
  "size": "preview",
  "type": "auto",
  "type_level": 1
}
```

<h3 id="remove-the-background-of-an-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RemoveBgJson](#schemaremovebgjson)|true|none|
|» add_shadow|body|boolean|false|Whether to add an artificial shadow to the result (default: false). NOTE: Adding shadows is currently only supported for car photos. Other subjects are returned without shadow, even if set to true (this might change in the future).<br>|
|» bg_color|body|string|false|Adds a solid color background. Can be a hex color code (e.g. 81d4fa, fff) or a color name (e.g. green). For semi-transparency, 4-/8-digit hex codes are also supported (e.g. 81d4fa77). (If this parameter is present, the other bg_ parameters must be empty.)<br>|
|» bg_image_url|body|string|false|Adds a background image from a URL. The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.)|
|» channels|body|string|false|Request either the finalized image ("rgba", default) or an alpha mask ("alpha"). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore "rgba" is recommended.<br>|
|» crop|body|boolean|false|Whether to crop off all empty regions (default: false). Note that cropping has no effect on the amount of charged credits.<br>|
|» crop_margin|body|string|false|Adds a margin around the cropped subject (default: 0). Can be an absolute value (e.g. "30px") or relative to the subject size (e.g. "10%"). Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left). This parameter only has an effect when "crop=true". The maximum margin that can be added on each side is 50% of the subject dimensions or 500 pixels.<br>|
|» format|body|string|false|Result image format:<br>"auto" = Use PNG format if transparent regions exist, otherwise use JPG format (default),<br>"png" = PNG format with alpha transparency,<br>"jpg" = JPG format, no transparency,<br>"zip" = ZIP format, contains color image and alpha matte image, supports transparency (recommended).<br>|
|» image_file_b64|body|string|false|Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)|
|» image_url|body|string|false|Source image URL. (If this parameter is present, the other image source parameters must be empty.)|
|» position|body|string|false|Positions the subject within the image canvas. Can be "original" (default unless "scale" is given), "center" (default when "scale" is given) or a value from "0%" to "100%" (both horizontal and vertical) or two values (horizontal, vertical).<br>|
|» roi|body|string|false|Region of interest: Only contents of this rectangular region can be detected as foreground. Everything outside is considered background and will be removed. The rectangle is defined as two x/y coordinates in the format "x1 y1 x2 y2". The coordinates can be in absolute pixels (suffix 'px') or relative to the width/height of the image (suffix '%'). By default, the whole image is the region of interest ("0% 0% 100% 100%").<br>|
|» scale|body|string|false|Scales the subject relative to the total image size. Can be any value from "10%" to "100%", or "original" (default). Scaling the subject implies "position=center" (unless specified otherwise).<br>|
|» semitransparency|body|boolean|false|Whether to have semi-transparent regions in the result (default: true). NOTE: Semitransparency is currently only supported for car windows (this might change in the future). Other objects are returned without semitransparency, even if set to true.<br>|
|» size|body|string|false|Maximum output image resolution:<br>"preview" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,<br>"full" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),<br>"auto" = Use highest available resolution (based on image size and available credits).<br><br>For backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image. The value "full" is also available under the name "4k" and the value "preview" is aliased as "small" and "regular".<br>|
|» type|body|string|false|Foreground type:<br>"auto" = Automatically detect kind of foreground,<br>"person" = Use person(s) as foreground,<br>"product" = Use product(s) as foreground.<br>"car" = Use car as foreground,<br>|
|» type_level|body|string|false|Classification level of the detected foreground type:<br>"none" = No classification (X-Type Header won't bet set on the response)<br>"1" = Use coarse classification classes: [person, product, animal, car, other]<br>"2" = Use more specific classification classes: [person, product, animal, car, car_interior, car_part, transportation, graphics, other]<br>"latest" = Always use the latest classification classes available<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channels|rgba|
|» channels|alpha|
|» format|auto|
|» format|png|
|» format|jpg|
|» format|zip|
|» size|preview|
|» size|full|
|» size|auto|
|» type|auto|
|» type|person|
|» type|product|
|» type|car|
|» type_level|none|
|» type_level|1|
|» type_level|2|
|» type_level|latest|

> Example responses

> 200 Response

```json
{
  "data": {
    "foreground_height": 100,
    "foreground_left": 0,
    "foreground_top": 0,
    "foreground_width": 100,
    "result_b64": "iVBORw0KGgoAAAANSUhEUgAAAIsAAACFC..."
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "code": "failed_bg_download",
      "title": "Failed to download background image from given image_url: https://unsplash.com/"
    }
  ]
}
```

<h3 id="remove-the-background-of-an-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image background removed|[RemoveBgJsonResponse](#schemaremovebgjsonresponse)|
|400|Bad Request|Error: Invalid parameters or input file unprocessable (no credits charged)|Inline|
|402|Payment Required|Error: Insufficient credits (no credits charged)|Inline|
|403|Forbidden|Error: Authentication failed (no credits charged)|[AuthFailed](#schemaauthfailed)|
|429|Too Many Requests|Error: Rate limit exceeded (no credits charged)|[RateLimit](#schemaratelimit)|

<h3 id="remove-the-background-of-an-image-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|none|
|» code|string|false|none|Error code|
|» detail|string|false|none|Detailed description of the error|
|» title|string|false|none|Error message|

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|none|
|» title|string|false|none|Error message|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Credits-Charged|number|float|Amount of credits charged for this call|
|200|X-Foreground-Height|integer||Height of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.|
|200|X-Foreground-Left|integer||Left position of the foreground image along the horizontal axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.|
|200|X-Foreground-Top|integer||Top position of the foreground image along the vertical axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.|
|200|X-Foreground-Width|integer||Width of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.|
|200|X-Height|integer||Height of the result image|
|200|X-Type|string||Detected foreground type (How specific this classification is depends on the type_level parameter sent in the request)|
|200|X-Width|integer||Width of the result image|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyHeader
</aside>

# Schemas

<h2 id="tocS_AuthFailed">AuthFailed</h2>
<!-- backwards compatibility -->
<a id="schemaauthfailed"></a>
<a id="schema_AuthFailed"></a>
<a id="tocSauthfailed"></a>
<a id="tocsauthfailed"></a>

```json
{
  "errors": [
    {
      "title": "Missing API Key"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|none|

<h2 id="tocS_ImprovementProgramJson">ImprovementProgramJson</h2>
<!-- backwards compatibility -->
<a id="schemaimprovementprogramjson"></a>
<a id="schema_ImprovementProgramJson"></a>
<a id="tocSimprovementprogramjson"></a>
<a id="tocsimprovementprogramjson"></a>

```json
{
  "image_file_b64": "",
  "image_filename": "car.jpg",
  "image_url": "https://www.remove.bg/example-hd.jpg",
  "tag": "batch_1_2020"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image_file_b64|string|false|none|Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)|
|image_filename|string|false|none|Filename of the image, if not provided it will be autodetected form the submitted data.|
|image_url|string|false|none|Source image URL. (If this parameter is present, the other image source parameters must be empty.)|
|tag|string|false|none|Images with the same tag are grouped together.|

<h2 id="tocS_ImprovementProgramJsonResponse">ImprovementProgramJsonResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimprovementprogramjsonresponse"></a>
<a id="schema_ImprovementProgramJsonResponse"></a>
<a id="tocSimprovementprogramjsonresponse"></a>
<a id="tocsimprovementprogramjsonresponse"></a>

```json
{
  "id": "fe09820b-be79-4511-8836-679583529882"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the submitted image|

<h2 id="tocS_ImprovementProgramMultipart">ImprovementProgramMultipart</h2>
<!-- backwards compatibility -->
<a id="schemaimprovementprogrammultipart"></a>
<a id="schema_ImprovementProgramMultipart"></a>
<a id="tocSimprovementprogrammultipart"></a>
<a id="tocsimprovementprogrammultipart"></a>

```json
{
  "image_file": "string",
  "image_file_b64": "",
  "image_filename": "string",
  "image_url": "https://www.remove.bg/example-hd.jpg",
  "tag": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image_file|string(binary)|false|none|Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)|
|image_file_b64|string|false|none|Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)|
|image_filename|string|false|none|Filename of the image, if not provided it will be autodetected form the submitted data.|
|image_url|string|false|none|Source image URL. (If this parameter is present, the other image source parameters must be empty.)|
|tag|string|false|none|Images with the same tag are grouped together.|

<h2 id="tocS_RateLimit">RateLimit</h2>
<!-- backwards compatibility -->
<a id="schemaratelimit"></a>
<a id="schema_RateLimit"></a>
<a id="tocSratelimit"></a>
<a id="tocsratelimit"></a>

```json
{
  "errors": [
    {
      "title": "Rate limit exceeded"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|none|

<h2 id="tocS_RemoveBgJson">RemoveBgJson</h2>
<!-- backwards compatibility -->
<a id="schemaremovebgjson"></a>
<a id="schema_RemoveBgJson"></a>
<a id="tocSremovebgjson"></a>
<a id="tocsremovebgjson"></a>

```json
{
  "add_shadow": "false",
  "bg_color": "",
  "bg_image_url": "",
  "channels": "rgba",
  "crop": "false",
  "crop_margin": "0",
  "format": "auto",
  "image_file_b64": "",
  "image_url": "https://www.remove.bg/example-hd.jpg",
  "position": "original",
  "roi": "0% 0% 100% 100%",
  "scale": "original",
  "semitransparency": "true",
  "size": "preview",
  "type": "auto",
  "type_level": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_shadow|boolean|false|none|Whether to add an artificial shadow to the result (default: false). NOTE: Adding shadows is currently only supported for car photos. Other subjects are returned without shadow, even if set to true (this might change in the future).<br>|
|bg_color|string|false|none|Adds a solid color background. Can be a hex color code (e.g. 81d4fa, fff) or a color name (e.g. green). For semi-transparency, 4-/8-digit hex codes are also supported (e.g. 81d4fa77). (If this parameter is present, the other bg_ parameters must be empty.)<br>|
|bg_image_url|string|false|none|Adds a background image from a URL. The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.)|
|channels|string|false|none|Request either the finalized image ("rgba", default) or an alpha mask ("alpha"). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore "rgba" is recommended.<br>|
|crop|boolean|false|none|Whether to crop off all empty regions (default: false). Note that cropping has no effect on the amount of charged credits.<br>|
|crop_margin|string|false|none|Adds a margin around the cropped subject (default: 0). Can be an absolute value (e.g. "30px") or relative to the subject size (e.g. "10%"). Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left). This parameter only has an effect when "crop=true". The maximum margin that can be added on each side is 50% of the subject dimensions or 500 pixels.<br>|
|format|string|false|none|Result image format:<br>"auto" = Use PNG format if transparent regions exist, otherwise use JPG format (default),<br>"png" = PNG format with alpha transparency,<br>"jpg" = JPG format, no transparency,<br>"zip" = ZIP format, contains color image and alpha matte image, supports transparency (recommended).<br>|
|image_file_b64|string|false|none|Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)|
|image_url|string|false|none|Source image URL. (If this parameter is present, the other image source parameters must be empty.)|
|position|string|false|none|Positions the subject within the image canvas. Can be "original" (default unless "scale" is given), "center" (default when "scale" is given) or a value from "0%" to "100%" (both horizontal and vertical) or two values (horizontal, vertical).<br>|
|roi|string|false|none|Region of interest: Only contents of this rectangular region can be detected as foreground. Everything outside is considered background and will be removed. The rectangle is defined as two x/y coordinates in the format "x1 y1 x2 y2". The coordinates can be in absolute pixels (suffix 'px') or relative to the width/height of the image (suffix '%'). By default, the whole image is the region of interest ("0% 0% 100% 100%").<br>|
|scale|string|false|none|Scales the subject relative to the total image size. Can be any value from "10%" to "100%", or "original" (default). Scaling the subject implies "position=center" (unless specified otherwise).<br>|
|semitransparency|boolean|false|none|Whether to have semi-transparent regions in the result (default: true). NOTE: Semitransparency is currently only supported for car windows (this might change in the future). Other objects are returned without semitransparency, even if set to true.<br>|
|size|string|false|none|Maximum output image resolution:<br>"preview" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,<br>"full" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),<br>"auto" = Use highest available resolution (based on image size and available credits).<br><br>For backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image. The value "full" is also available under the name "4k" and the value "preview" is aliased as "small" and "regular".<br>|
|type|string|false|none|Foreground type:<br>"auto" = Automatically detect kind of foreground,<br>"person" = Use person(s) as foreground,<br>"product" = Use product(s) as foreground.<br>"car" = Use car as foreground,<br>|
|type_level|string|false|none|Classification level of the detected foreground type:<br>"none" = No classification (X-Type Header won't bet set on the response)<br>"1" = Use coarse classification classes: [person, product, animal, car, other]<br>"2" = Use more specific classification classes: [person, product, animal, car, car_interior, car_part, transportation, graphics, other]<br>"latest" = Always use the latest classification classes available<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|channels|rgba|
|channels|alpha|
|format|auto|
|format|png|
|format|jpg|
|format|zip|
|size|preview|
|size|full|
|size|auto|
|type|auto|
|type|person|
|type|product|
|type|car|
|type_level|none|
|type_level|1|
|type_level|2|
|type_level|latest|

<h2 id="tocS_RemoveBgJsonResponse">RemoveBgJsonResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovebgjsonresponse"></a>
<a id="schema_RemoveBgJsonResponse"></a>
<a id="tocSremovebgjsonresponse"></a>
<a id="tocsremovebgjsonresponse"></a>

```json
{
  "data": {
    "foreground_height": 100,
    "foreground_left": 0,
    "foreground_top": 0,
    "foreground_width": 100,
    "result_b64": "iVBORw0KGgoAAAANSUhEUgAAAIsAAACFC..."
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_RemoveBgMultipart">RemoveBgMultipart</h2>
<!-- backwards compatibility -->
<a id="schemaremovebgmultipart"></a>
<a id="schema_RemoveBgMultipart"></a>
<a id="tocSremovebgmultipart"></a>
<a id="tocsremovebgmultipart"></a>

```json
{
  "add_shadow": "false",
  "bg_color": "",
  "bg_image_file": "string",
  "bg_image_url": "",
  "channels": "rgba",
  "crop": "false",
  "crop_margin": "0",
  "format": "auto",
  "image_file": "string",
  "image_file_b64": "",
  "image_url": "https://www.remove.bg/example-hd.jpg",
  "position": "original",
  "roi": "0% 0% 100% 100%",
  "scale": "original",
  "semitransparency": "true",
  "size": "preview",
  "type": "auto",
  "type_level": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_shadow|boolean|false|none|Whether to add an artificial shadow to the result (default: false). NOTE: Adding shadows is currently only supported for car photos. Other subjects are returned without shadow, even if set to true (this might change in the future).<br>|
|bg_color|string|false|none|Adds a solid color background. Can be a hex color code (e.g. 81d4fa, fff) or a color name (e.g. green). For semi-transparency, 4-/8-digit hex codes are also supported (e.g. 81d4fa77). (If this parameter is present, the other bg_ parameters must be empty.)<br>|
|bg_image_file|string(binary)|false|none|Adds a background image from a file (binary). The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.)|
|bg_image_url|string|false|none|Adds a background image from a URL. The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.)|
|channels|string|false|none|Request either the finalized image ("rgba", default) or an alpha mask ("alpha"). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore "rgba" is recommended.<br>|
|crop|boolean|false|none|Whether to crop off all empty regions (default: false). Note that cropping has no effect on the amount of charged credits.<br>|
|crop_margin|string|false|none|Adds a margin around the cropped subject (default: 0). Can be an absolute value (e.g. "30px") or relative to the subject size (e.g. "10%"). Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left). This parameter only has an effect when "crop=true". The maximum margin that can be added on each side is 50% of the subject dimensions or 500 pixels.<br>|
|format|string|false|none|Result image format:<br>"auto" = Use PNG format if transparent regions exist, otherwise use JPG format (default),<br>"png" = PNG format with alpha transparency,<br>"jpg" = JPG format, no transparency,<br>"zip" = ZIP format, contains color image and alpha matte image, supports transparency (recommended).<br>|
|image_file|string(binary)|false|none|Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)|
|image_file_b64|string|false|none|Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)|
|image_url|string|false|none|Source image URL. (If this parameter is present, the other image source parameters must be empty.)|
|position|string|false|none|Positions the subject within the image canvas. Can be "original" (default unless "scale" is given), "center" (default when "scale" is given) or a value from "0%" to "100%" (both horizontal and vertical) or two values (horizontal, vertical).<br>|
|roi|string|false|none|Region of interest: Only contents of this rectangular region can be detected as foreground. Everything outside is considered background and will be removed. The rectangle is defined as two x/y coordinates in the format "x1 y1 x2 y2". The coordinates can be in absolute pixels (suffix 'px') or relative to the width/height of the image (suffix '%'). By default, the whole image is the region of interest ("0% 0% 100% 100%").<br>|
|scale|string|false|none|Scales the subject relative to the total image size. Can be any value from "10%" to "100%", or "original" (default). Scaling the subject implies "position=center" (unless specified otherwise).<br>|
|semitransparency|boolean|false|none|Whether to have semi-transparent regions in the result (default: true). NOTE: Semitransparency is currently only supported for car windows (this might change in the future). Other objects are returned without semitransparency, even if set to true.<br>|
|size|string|false|none|Maximum output image resolution:<br>"preview" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,<br>"full" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),<br>"auto" = Use highest available resolution (based on image size and available credits).<br><br>For backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image. The value "full" is also available under the name "4k" and the value "preview" is aliased as "small" and "regular".<br>|
|type|string|false|none|Foreground type:<br>"auto" = Automatically detect kind of foreground,<br>"person" = Use person(s) as foreground,<br>"product" = Use product(s) as foreground.<br>"car" = Use car as foreground,<br>|
|type_level|string|false|none|Classification level of the detected foreground type:<br>"none" = No classification (X-Type Header won't bet set on the response)<br>"1" = Use coarse classification classes: [person, product, animal, car, other]<br>"2" = Use more specific classification classes: [person, product, animal, car, car_interior, car_part, transportation, graphics, other]<br>"latest" = Always use the latest classification classes available<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|channels|rgba|
|channels|alpha|
|format|auto|
|format|png|
|format|jpg|
|format|zip|
|size|preview|
|size|full|
|size|auto|
|type|auto|
|type|person|
|type|product|
|type|car|
|type_level|none|
|type_level|1|
|type_level|2|
|type_level|latest|
