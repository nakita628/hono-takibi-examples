<h1 id="neutrino-api">Neutrino API v3.6.3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The general-purpose API

Base URLs:

* <a href="https://neutrinoapi.net">https://neutrinoapi.net</a>

Email: <a href="mailto:ops@neutrinoapi.com">Neutrino API</a> 
Web: <a href="https://www.neutrinoapi.com/">Neutrino API</a> 

# Authentication

* API Key (api-key)
    - Parameter Name: **api-key**, in: header. One of your API keys

* API Key (user-id)
    - Parameter Name: **user-id**, in: header. Your user ID

<h1 id="neutrino-api-imaging">Imaging</h1>

## HTML Render

<a id="opIdHTMLRender"></a>

> Code samples

```bash
curl https://example.com/html-render \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}" \
  -d 'content=string&css=string&delay=0&footer=string&format=PDF&grayscale=false&header=string&ignore-certificate-errors=false&image-height=0&image-width=1024&landscape=false&margin=0&margin-bottom=0&margin-left=0&margin-right=0&margin-top=0&page-height=0&page-size=A4&page-width=0&timeout=300&title=string&zoom=1'
```

`POST /html-render`

Render HTML content to PDF, JPG or PNG

> Body parameter

```yaml
content: string
css: string
delay: 0
footer: string
format: PDF
grayscale: false
header: string
ignore-certificate-errors: false
image-height: 0
image-width: 1024
landscape: false
margin: 0
margin-bottom: 0
margin-left: 0
margin-right: 0
margin-top: 0
page-height: 0
page-size: A4
page-width: 0
timeout: 300
title: string
zoom: 1
```

<h3 id="html-render-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» content|body|string|true|The HTML content. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string|
|» css|body|string|false|Inject custom CSS into the HTML. e.g. 'body { background-color: red;}'|
|» delay|body|integer(int32)|false|Number of seconds to wait before rendering the page (can be useful for pages with animations etc)|
|» footer|body|string|false|The footer HTML to insert into each page. The following dynamic tags are supported: {date}, {title}, {url}, {pageNumber}, {totalPages}|
|» format|body|string|false|Which format to output, available options are: PDF, PNG, JPG|
|» grayscale|body|boolean|false|Render the final document in grayscale|
|» header|body|string|false|The header HTML to insert into each page. The following dynamic tags are supported: {date}, {title}, {url}, {pageNumber}, {totalPages}|
|» ignore-certificate-errors|body|boolean|false|Ignore any TLS/SSL certificate errors|
|» image-height|body|integer(int32)|false|If rendering to an image format (PNG or JPG) use this image height (in pixels). The default is automatic which dynamically sets the image height based on the content|
|» image-width|body|integer(int32)|false|If rendering to an image format (PNG or JPG) use this image width (in pixels)|
|» landscape|body|boolean|false|Set the document to landscape orientation|
|» margin|body|number(double)|false|The document margin (in mm)|
|» margin-bottom|body|number(double)|false|The document bottom margin (in mm)|
|» margin-left|body|number(double)|false|The document left margin (in mm)|
|» margin-right|body|number(double)|false|The document right margin (in mm)|
|» margin-top|body|number(double)|false|The document top margin (in mm)|
|» page-height|body|number(double)|false|Set the PDF page height explicitly (in mm)|
|» page-size|body|string|false|Set the document page size, can be one of: A0 - A9, B0 - B10, Comm10E, DLE or Letter|
|» page-width|body|number(double)|false|Set the PDF page width explicitly (in mm)|
|» timeout|body|integer(int32)|false|Timeout in seconds. Give up if still trying to load the HTML content after this number of seconds|
|» title|body|string|false|The document title|
|» zoom|body|number(double)|false|Set the zoom factor when rendering the page (2.0 for double size, 0.5 for half size)|

> Example responses

> 200 Response

```json
""
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="html-render-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## Image Resize

<a id="opIdImageResize"></a>

> Code samples

```bash
curl https://example.com/image-resize \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}" \
  -d 'bg-color=transparent&format=png&height=0&image-url=string&resize-mode=scale&width=0'
```

`POST /image-resize`

Resize an image and output as either JPEG or PNG

> Body parameter

```yaml
bg-color: transparent
format: png
height: 0
image-url: string
resize-mode: scale
width: 0
```

<h3 id="image-resize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» bg-color|body|string|false|The image background color in hexadecimal notation (e.g. #0000ff). For PNG output the special value of 'transparent' can also be used. For JPG output the default is black (#000000)|
|» format|body|string|false|The output image format, can be either png or jpg|
|» height|body|integer(int32)|false|The height to resize to (in px). If you don't set this field then the height will be automatic based on the requested width and image aspect ratio|
|» image-url|body|string|true|The URL or Base64 encoded Data URL for the source image. You can also upload an image file directly using multipart/form-data|
|» resize-mode|body|string|false|The resize mode to use, we support 3 main resizing modes: <ul> <li><b>scale</b><br>Resize to within the width and height specified while preserving aspect ratio. In this mode the width or height will be automatically adjusted to fit the aspect ratio</li> <li><b>pad</b><br>Resize to exactly the width and height specified while preserving aspect ratio and pad any space left over. Any padded space will be filled in with the 'bg-color' value</li> <li><b>crop</b><br>Resize to exactly the width and height specified while preserving aspect ratio and crop any space which fall outside the area. The cropping window is centered on the original image</li> </ul>|
|» width|body|integer(int32)|true|The width to resize to (in px)|

> Example responses

> 200 Response

```json
""
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="image-resize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## Image Watermark

<a id="opIdImageWatermark"></a>

> Code samples

```bash
curl https://example.com/image-watermark \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}" \
  -d 'bg-color=transparent&format=png&height=0&image-url=string&opacity=50&position=center&resize-mode=scale&watermark-url=string&width=0'
```

`POST /image-watermark`

Watermark one image with another image

> Body parameter

```yaml
bg-color: transparent
format: png
height: 0
image-url: string
opacity: 50
position: center
resize-mode: scale
watermark-url: string
width: 0
```

<h3 id="image-watermark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» bg-color|body|string|false|The image background color in hexadecimal notation (e.g. #0000ff). For PNG output the special value of 'transparent' can also be used. For JPG output the default is black (#000000)|
|» format|body|string|false|The output image format, can be either png or jpg|
|» height|body|integer(int32)|false|If set resize the resulting image to this height (in px)|
|» image-url|body|string|true|The URL or Base64 encoded Data URL for the source image. You can also upload an image file directly using multipart/form-data|
|» opacity|body|integer(int32)|false|The opacity of the watermark (0 to 100)|
|» position|body|string|false|The position of the watermark image, possible values are: <br>center, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right|
|» resize-mode|body|string|false|The resize mode to use, we support 3 main resizing modes: <ul> <li><b>scale</b><br>Resize to within the width and height specified while preserving aspect ratio. In this mode the width or height will be automatically adjusted to fit the aspect ratio</li> <li><b>pad</b><br>Resize to exactly the width and height specified while preserving aspect ratio and pad any space left over. Any padded space will be filled in with the 'bg-color' value</li> <li><b>crop</b><br>Resize to exactly the width and height specified while preserving aspect ratio and crop any space which fall outside the area. The cropping window is centered on the original image</li> </ul>|
|» watermark-url|body|string|true|The URL or Base64 encoded Data URL for the watermark image. You can also upload an image file directly using multipart/form-data|
|» width|body|integer(int32)|false|If set resize the resulting image to this width (in px)|

> Example responses

> 200 Response

```json
""
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="image-watermark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## QR Code

<a id="opIdQRCode"></a>

> Code samples

```bash
curl https://example.com/qr-code \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}" \
  -d 'bg-color=%23ffffff&content=string&fg-color=%23000000&height=256&width=256'
```

`POST /qr-code`

Generate a QR code as a PNG image

> Body parameter

```yaml
bg-color: "#ffffff"
content: string
fg-color: "#000000"
height: 256
width: 256
```

<h3 id="qr-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» bg-color|body|string|false|The QR code background color|
|» content|body|string|true|The content to encode into the QR code (e.g. a URL or a phone number)|
|» fg-color|body|string|false|The QR code foreground color|
|» height|body|integer(int32)|false|The height of the QR code (in px)|
|» width|body|integer(int32)|false|The width of the QR code (in px)|

> Example responses

> 200 Response

```json
""
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="qr-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

<h1 id="neutrino-api-telephony">Telephony</h1>

## HLR Lookup

<a id="opIdHLRLookup"></a>

> Code samples

```bash
curl 'https://example.com/hlr-lookup?number=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /hlr-lookup`

Connect to the global mobile cellular network and retrieve the status of a mobile device

<h3 id="hlr-lookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|string|true|A phone number|
|country-code|query|string|false|ISO 2-letter country code, assume numbers are based in this country. <br>If not set numbers are assumed to be in international format (with or without the leading + sign)|

> Example responses

> 200 Response

```json
{
  "country": "string",
  "country-code": "string",
  "country-code3": "string",
  "currency-code": "string",
  "current-network": "string",
  "hlr-status": "string",
  "hlr-valid": true,
  "imsi": "string",
  "international-calling-code": "string",
  "international-number": "string",
  "is-mobile": true,
  "is-ported": true,
  "is-roaming": true,
  "local-number": "string",
  "location": "string",
  "mcc": "string",
  "mnc": "string",
  "msc": "string",
  "msin": "string",
  "number-type": "string",
  "number-valid": true,
  "origin-network": "string",
  "ported-network": "string",
  "roaming-country-code": "string"
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="hlr-lookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[HLRLookupResponse](#schemahlrlookupresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## Phone Playback

<a id="opIdPhonePlayback"></a>

> Code samples

```bash
curl https://example.com/phone-playback \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}" \
  -d 'audio-url=string&limit=3&limit-ttl=1&number=string'
```

`POST /phone-playback`

Make an automated call to any valid phone number and playback an audio message

> Body parameter

```yaml
audio-url: string
limit: 3
limit-ttl: 1
number: string
```

<h3 id="phone-playback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» audio-url|body|string|true|A URL to a valid audio file. Accepted audio formats are: <ul> <li>MP3</li> <li>WAV</li> <li>OGG</li> </ul>You can use the following MP3 URL for testing: <br>https://www.neutrinoapi.com/test-files/test1.mp3|
|» limit|body|integer(int32)|false|Limit the total number of calls allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned|
|» limit-ttl|body|integer(int32)|false|Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days)|
|» number|body|string|true|The phone number to call. Must be in valid international format|

> Example responses

> 200 Response

```json
{
  "calling": true,
  "number-valid": true
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="phone-playback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PhonePlaybackResponse](#schemaphoneplaybackresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## Phone Verify

<a id="opIdPhoneVerify"></a>

> Code samples

```bash
curl https://example.com/phone-verify \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}" \
  -d 'code-length=6&country-code=string&language-code=en&limit=3&limit-ttl=1&number=string&playback-delay=800&security-code=0'
```

`POST /phone-verify`

Make an automated call to any valid phone number and playback a unique security code

> Body parameter

```yaml
code-length: 6
country-code: string
language-code: en
limit: 3
limit-ttl: 1
number: string
playback-delay: 800
security-code: 0
```

<h3 id="phone-verify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» code-length|body|integer(int32)|false|The number of digits to use in the security code (between 4 and 12)|
|» country-code|body|string|false|ISO 2-letter country code, assume numbers are based in this country. <br>If not set numbers are assumed to be in international format (with or without the leading + sign)|
|» language-code|body|string|false|The language to playback the verification code in, available languages are: <ul> <li>de - German</li> <li>en - English</li> <li>es - Spanish</li> <li>fr - French</li> <li>it - Italian</li> <li>pt - Portuguese</li> <li>ru - Russian</li> </ul>|
|» limit|body|integer(int32)|false|Limit the total number of calls allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned|
|» limit-ttl|body|integer(int32)|false|Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days)|
|» number|body|string|true|The phone number to send the verification code to|
|» playback-delay|body|integer(int32)|false|The delay in milliseconds between the playback of each security code|
|» security-code|body|integer(int32)|false|Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code|

> Example responses

> 200 Response

```json
{
  "calling": true,
  "number-valid": true,
  "security-code": "string"
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="phone-verify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PhoneVerifyResponse](#schemaphoneverifyresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## SMS Verify

<a id="opIdSMSVerify"></a>

> Code samples

```bash
curl https://example.com/sms-verify \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}" \
  -d 'code-length=5&country-code=string&language-code=en&limit=10&limit-ttl=1&number=string&security-code=0'
```

`POST /sms-verify`

Send a unique security code to any mobile device via SMS

> Body parameter

```yaml
code-length: 5
country-code: string
language-code: en
limit: 10
limit-ttl: 1
number: string
security-code: 0
```

<h3 id="sms-verify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» code-length|body|integer(int32)|false|The number of digits to use in the security code (must be between 4 and 12)|
|» country-code|body|string|false|ISO 2-letter country code, assume numbers are based in this country. <br>If not set numbers are assumed to be in international format (with or without the leading + sign)|
|» language-code|body|string|false|The language to send the verification code in, available languages are: <ul> <li>de - German</li> <li>en - English</li> <li>es - Spanish</li> <li>fr - French</li> <li>it - Italian</li> <li>pt - Portuguese</li> <li>ru - Russian</li> </ul>|
|» limit|body|integer(int32)|false|Limit the total number of SMS allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned|
|» limit-ttl|body|integer(int32)|false|Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days)|
|» number|body|string|true|The phone number to send a verification code to|
|» security-code|body|integer(int32)|false|Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code|

> Example responses

> 200 Response

```json
{
  "number-valid": true,
  "security-code": "string",
  "sent": true
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="sms-verify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SMSVerifyResponse](#schemasmsverifyresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## Verify Security Code

<a id="opIdVerifySecurityCode"></a>

> Code samples

```bash
curl 'https://example.com/verify-security-code?security-code=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /verify-security-code`

Check if a security code sent via SMS Verify or Phone Verify is valid

<h3 id="verify-security-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|security-code|query|string|true|The security code to verify|
|limit-by|query|string|false|If set then enable additional brute-force protection by limiting the number of attempts by the supplied value. This can be set to any unique identifier you would like to limit by, for example a hash of the users email, phone number or IP address. Requests to this API will be ignored after approximately 10 failed verification attempts|

> Example responses

> 200 Response

```json
{
  "verified": true
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="verify-security-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VerifySecurityCodeResponse](#schemaverifysecuritycoderesponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

<h1 id="neutrino-api-data-tools">Data Tools</h1>

## Bad Word Filter

<a id="opIdBadWordFilter"></a>

> Code samples

```bash
curl https://example.com/bad-word-filter \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}" \
  -d 'catalog=strict&censor-character=string&content=string'
```

`POST /bad-word-filter`

Detect bad words, swear words and profanity in a given text

> Body parameter

```yaml
catalog: strict
censor-character: string
content: string
```

<h3 id="bad-word-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» catalog|body|string|false|Which catalog of bad words to use, we currently maintain two bad word catalogs: <br> <ul> <li>strict - the largest database of bad words which includes profanity, obscenity, sexual, rude, cuss, dirty, swear and objectionable words and phrases. This catalog is suitable for environments of all ages including educational or children's content</li> <li>obscene - like the strict catalog but does not include any mild profanities, idiomatic phrases or words which are considered formal terminology. This catalog is suitable for adult environments where certain types of bad words are considered OK</li> </ul>|
|» censor-character|body|string|false|The character to use to censor out the bad words found|
|» content|body|string|true|The content to scan. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string|

> Example responses

> 200 Response

```json
{
  "bad-words-list": [
    "string"
  ],
  "bad-words-total": 0,
  "censored-content": "string",
  "is-bad": true
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="bad-word-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BadWordFilterResponse](#schemabadwordfilterresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## Email Validate

<a id="opIdEmailValidate"></a>

> Code samples

```bash
curl 'https://example.com/email-validate?email=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /email-validate`

Parse, validate and clean an email address

<h3 id="email-validate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|An email address|
|fix-typos|query|boolean|false|Automatically attempt to fix typos in the address|

> Example responses

> 200 Response

```json
{
  "domain": "string",
  "domain-error": true,
  "email": "string",
  "is-disposable": true,
  "is-freemail": true,
  "is-personal": true,
  "provider": "string",
  "syntax-error": true,
  "typos-fixed": true,
  "valid": true
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="email-validate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EmailValidateResponse](#schemaemailvalidateresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## Phone Validate

<a id="opIdPhoneValidate"></a>

> Code samples

```bash
curl 'https://example.com/phone-validate?number=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /phone-validate`

Parse, validate and get location information about a phone number

<h3 id="phone-validate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|string|true|A phone number. This can be in international format (E.164) or local format. If passing local format you must also set either the 'country-code' OR 'ip' options as well|
|country-code|query|string|false|ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)|
|ip|query|string|false|Pass in a users IP address and we will assume numbers are based in the country of the IP address|

> Example responses

> 200 Response

```json
{
  "country": "string",
  "country-code": "string",
  "country-code3": "string",
  "currency-code": "string",
  "international-calling-code": "string",
  "international-number": "string",
  "is-mobile": true,
  "local-number": "string",
  "location": "string",
  "prefix-network": "string",
  "type": "string",
  "valid": true
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="phone-validate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PhoneValidateResponse](#schemaphonevalidateresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## UA Lookup

<a id="opIdUALookup"></a>

> Code samples

```bash
curl 'https://example.com/ua-lookup?ua=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /ua-lookup`

Parse, validate and get detailed user-agent information from a user agent string or from client hints

<h3 id="ua-lookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ua|query|string|true|The user-agent string to lookup. For client hints use the 'UA' header or the JSON data directly from 'navigator.userAgentData.brands' or 'navigator.userAgentData.getHighEntropyValues()'|
|ua-version|query|string|false|For client hints this corresponds to the 'UA-Full-Version' header or 'uaFullVersion' from NavigatorUAData|
|ua-platform|query|string|false|For client hints this corresponds to the 'UA-Platform' header or 'platform' from NavigatorUAData|
|ua-platform-version|query|string|false|For client hints this corresponds to the 'UA-Platform-Version' header or 'platformVersion' from NavigatorUAData|
|ua-mobile|query|string|false|For client hints this corresponds to the 'UA-Mobile' header or 'mobile' from NavigatorUAData|
|device-model|query|string|false|For client hints this corresponds to the 'UA-Model' header or 'model' from NavigatorUAData. <br>You can also use this parameter to lookup a device directly by its model name, model code or hardware code, on android you can get the model name from: https://developer.android.com/reference/android/os/Build.html#MODEL|
|device-brand|query|string|false|This parameter is only used in combination with 'device-model' when doing direct device lookups without any user-agent data. Set this to the brand or manufacturer name, this is required for accurate device detection with ambiguous model names. On android you can get the device brand from: https://developer.android.com/reference/android/os/Build#MANUFACTURER|

> Example responses

> 200 Response

```json
{
  "browser-engine": "string",
  "browser-release": "string",
  "device-brand": "string",
  "device-height-px": 0,
  "device-model": "string",
  "device-model-code": "string",
  "device-pixel-ratio": 0,
  "device-ppi": 0,
  "device-price": 0,
  "device-release": "string",
  "device-resolution": "string",
  "device-width-px": 0,
  "is-mobile": true,
  "is-webview": true,
  "name": "string",
  "os": "string",
  "os-family": "string",
  "os-version": "string",
  "os-version-major": "string",
  "type": "string",
  "ua": "string",
  "version": "string",
  "version-major": "string"
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="ua-lookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UALookupResponse](#schemaualookupresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

<h1 id="neutrino-api-security-and-networking">Security and Networking</h1>

## Email Verify

<a id="opIdEmailVerify"></a>

> Code samples

```bash
curl 'https://example.com/email-verify?email=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /email-verify`

SMTP based email address verification

<h3 id="email-verify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|An email address|
|fix-typos|query|boolean|false|Automatically attempt to fix typos in the address|

> Example responses

> 200 Response

```json
{
  "domain": "string",
  "domain-error": true,
  "email": "string",
  "is-catch-all": true,
  "is-deferred": true,
  "is-disposable": true,
  "is-freemail": true,
  "is-personal": true,
  "provider": "string",
  "smtp-response": "string",
  "smtp-status": "string",
  "syntax-error": true,
  "typos-fixed": true,
  "valid": true,
  "verified": true
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="email-verify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EmailVerifyResponse](#schemaemailverifyresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## Host Reputation

<a id="opIdHostReputation"></a>

> Code samples

```bash
curl 'https://example.com/host-reputation?host=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /host-reputation`

Check the reputation of an IP address, domain name or URL against a comprehensive list of blacklists and blocklists

<h3 id="host-reputation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|host|query|string|true|An IP address, domain name, FQDN or URL. <br>If you supply a domain/URL it will be checked against the URI DNSBL lists|
|list-rating|query|integer(int32)|false|Only check lists with this rating or better|
|zones|query|string|false|Only check these DNSBL zones/hosts. Multiple zones can be supplied as comma-separated values|

> Example responses

> 200 Response

```json
{
  "host": "string",
  "is-listed": true,
  "list-count": 0,
  "lists": [
    {
      "is-listed": true,
      "list-host": "string",
      "list-name": "string",
      "list-rating": 0,
      "response-time": 0,
      "return-code": "string",
      "txt-record": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="host-reputation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[HostReputationResponse](#schemahostreputationresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## IP Blocklist

<a id="opIdIPBlocklist"></a>

> Code samples

```bash
curl 'https://example.com/ip-blocklist?ip=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /ip-blocklist`

The IP Blocklist API will detect potentially malicious or dangerous IP addresses

<h3 id="ip-blocklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|query|string|true|An IPv4 or IPv6 address. Accepts standard IP notation (with or without port number), CIDR notation and IPv6 compressed notation. If multiple IPs are passed using comma-separated values the first non-bogon address on the list will be checked|
|vpn-lookup|query|boolean|false|Include public VPN provider IP addresses. <br><b>NOTE</b>: For more advanced VPN detection including the ability to identify private and stealth VPNs use the <a href="https://www.neutrinoapi.com/api/ip-probe/">IP Probe API</a>|

> Example responses

> 200 Response

```json
{
  "blocklists": [
    "string"
  ],
  "cidr": "string",
  "ip": "string",
  "is-bot": true,
  "is-dshield": true,
  "is-exploit-bot": true,
  "is-hijacked": true,
  "is-listed": true,
  "is-malware": true,
  "is-proxy": true,
  "is-spam-bot": true,
  "is-spider": true,
  "is-spyware": true,
  "is-tor": true,
  "is-vpn": true,
  "last-seen": 0,
  "list-count": 0,
  "sensors": [
    {
      "blocklist": "string",
      "description": "string",
      "id": 0
    }
  ]
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="ip-blocklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IPBlocklistResponse](#schemaipblocklistresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## IP Blocklist Download

<a id="opIdIPBlocklistDownload"></a>

> Code samples

```bash
curl https://example.com/ip-blocklist-download \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /ip-blocklist-download`

This API is a direct feed to our IP blocklist data

<h3 id="ip-blocklist-download-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|The data format. Can be either CSV or TXT|
|include-vpn|query|boolean|false|Include public VPN provider addresses, this option is only available for Tier 3 or higher accounts. Adds any IPs which are solely listed as VPN providers, IPs that are listed on multiple sensors will still be included without enabling this option. <br><b>WARNING</b>: This adds at least an additional 8 million IP addresses to the download if not using CIDR notation|
|cidr|query|boolean|false|Output IPs using CIDR notation. This option should be preferred but is off by default for backwards compatibility|
|ip6|query|boolean|false|Output the IPv6 version of the blocklist, the default is to output IPv4 only. Note that this option enables CIDR notation too as this is the only notation currently supported for IPv6|

> Example responses

> 200 Response

```json
""
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="ip-blocklist-download-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## IP Probe

<a id="opIdIPProbe"></a>

> Code samples

```bash
curl 'https://example.com/ip-probe?ip=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /ip-probe`

Execute a realtime network probe against an IPv4 or IPv6 address

<h3 id="ip-probe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|query|string|true|IPv4 or IPv6 address|

> Example responses

> 200 Response

```json
{
  "as-age": 0,
  "as-cidr": "string",
  "as-country-code": "string",
  "as-country-code3": "string",
  "as-description": "string",
  "as-domains": [
    "string"
  ],
  "asn": "string",
  "city": "string",
  "continent-code": "string",
  "country": "string",
  "country-code": "string",
  "country-code3": "string",
  "currency-code": "string",
  "host-domain": "string",
  "hostname": "string",
  "ip": "string",
  "is-bogon": true,
  "is-hosting": true,
  "is-isp": true,
  "is-proxy": true,
  "is-v4-mapped": true,
  "is-v6": true,
  "is-vpn": true,
  "provider-description": "string",
  "provider-domain": "string",
  "provider-type": "string",
  "provider-website": "string",
  "region": "string",
  "region-code": "string",
  "valid": true,
  "vpn-domain": "string"
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="ip-probe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IPProbeResponse](#schemaipproberesponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

<h1 id="neutrino-api-geolocation">Geolocation</h1>

## Geocode Address

<a id="opIdGeocodeAddress"></a>

> Code samples

```bash
curl https://example.com/geocode-address \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /geocode-address`

Geocode an address, partial address or just the name of a place

<h3 id="geocode-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|query|string|false|The full address, partial address or name of a place to try and locate. Comma separated address components are preferred.|
|house-number|query|string|false|The house/building number to locate|
|street|query|string|false|The street/road name to locate|
|city|query|string|false|The city/town name to locate|
|county|query|string|false|The county/region name to locate|
|state|query|string|false|The state name to locate|
|postal-code|query|string|false|The postal code to locate|
|country-code|query|string|false|Limit result to this country (the default is no country bias)|
|language-code|query|string|false|The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru, zh</li> </ul>|
|fuzzy-search|query|boolean|false|If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. This option is recommended for processing user input or implementing auto-complete. We use a combination of approximate string matching and data cleansing to find possible location matches|

> Example responses

> 200 Response

```json
{
  "found": 0,
  "locations": [
    {
      "address": "string",
      "address-components": {
        "property1": "string",
        "property2": "string"
      },
      "city": "string",
      "country": "string",
      "country-code": "string",
      "country-code3": "string",
      "currency-code": "string",
      "latitude": 0,
      "location-tags": [
        "string"
      ],
      "location-type": "string",
      "longitude": 0,
      "postal-address": "string",
      "postal-code": "string",
      "region-code": "string",
      "state": "string",
      "timezone": {
        "property1": {
          "abbr": "EDT",
          "date": "2021-01-01",
          "id": "America/New_York",
          "name": "Eastern Daylight Time",
          "offset": "string",
          "time": "12:30:00.00"
        },
        "property2": {
          "abbr": "EDT",
          "date": "2021-01-01",
          "id": "America/New_York",
          "name": "Eastern Daylight Time",
          "offset": "string",
          "time": "12:30:00.00"
        }
      }
    }
  ]
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="geocode-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GeocodeAddressResponse](#schemageocodeaddressresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## Geocode Reverse

<a id="opIdGeocodeReverse"></a>

> Code samples

```bash
curl 'https://example.com/geocode-reverse?latitude=string&longitude=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /geocode-reverse`

Convert a geographic coordinate (latitude and longitude) into a real world address

<h3 id="geocode-reverse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|query|string|true|The location latitude in decimal degrees format|
|longitude|query|string|true|The location longitude in decimal degrees format|
|language-code|query|string|false|The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru</li> </ul>|
|zoom|query|string|false|The zoom level to respond with: <br> <ul> <li>address - the most precise address available</li> <li>street - the street level</li> <li>city - the city level</li> <li>state - the state level</li> <li>country - the country level</li> </ul>|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "address-components": {
    "property1": "string",
    "property2": "string"
  },
  "city": "string",
  "country": "string",
  "country-code": "string",
  "country-code3": "string",
  "currency-code": "string",
  "found": true,
  "latitude": 0,
  "location-tags": [
    "string"
  ],
  "location-type": "string",
  "longitude": 0,
  "postal-address": "string",
  "postal-code": "string",
  "region-code": "string",
  "state": "string",
  "timezone": {
    "property1": {
      "abbr": "EDT",
      "date": "2021-01-01",
      "id": "America/New_York",
      "name": "Eastern Daylight Time",
      "offset": "string",
      "time": "12:30:00.00"
    },
    "property2": {
      "abbr": "EDT",
      "date": "2021-01-01",
      "id": "America/New_York",
      "name": "Eastern Daylight Time",
      "offset": "string",
      "time": "12:30:00.00"
    }
  }
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="geocode-reverse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GeocodeReverseResponse](#schemageocodereverseresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## IP Info

<a id="opIdIPInfo"></a>

> Code samples

```bash
curl 'https://example.com/ip-info?ip=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /ip-info`

Get location information about an IP address and do reverse DNS (PTR) lookups

<h3 id="ip-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|query|string|true|IPv4 or IPv6 address|
|reverse-lookup|query|boolean|false|Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it|

> Example responses

> 200 Response

```json
{
  "city": "string",
  "continent-code": "string",
  "country": "string",
  "country-code": "string",
  "country-code3": "string",
  "currency-code": "string",
  "host-domain": "string",
  "hostname": "string",
  "ip": "string",
  "is-bogon": true,
  "is-v4-mapped": true,
  "is-v6": true,
  "latitude": 0,
  "longitude": 0,
  "region": "string",
  "region-code": "string",
  "timezone": {
    "property1": {
      "abbr": "EDT",
      "date": "2021-01-01",
      "id": "America/New_York",
      "name": "Eastern Daylight Time",
      "offset": "string",
      "time": "12:30:00.00"
    },
    "property2": {
      "abbr": "EDT",
      "date": "2021-01-01",
      "id": "America/New_York",
      "name": "Eastern Daylight Time",
      "offset": "string",
      "time": "12:30:00.00"
    }
  },
  "valid": true
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="ip-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IPInfoResponse](#schemaipinforesponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

<h1 id="neutrino-api-e-commerce">E-commerce</h1>

## BIN List Download

<a id="opIdBINListDownload"></a>

> Code samples

```bash
curl https://example.com/bin-list-download \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /bin-list-download`

Download our entire BIN database for direct use on your own systems

<h3 id="bin-list-download-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include-iso3|query|boolean|false|Include ISO 3-letter country codes and ISO 3-letter currency codes in the data. These will be added to columns 10 and 11 respectively|
|include-8digit|query|boolean|false|Include 8-digit and higher BIN codes. This option includes all 6-digit BINs and all 8-digit and higher BINs (including some 9, 10 and 11 digit BINs where available)|

> Example responses

> 200 Response

```json
""
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="bin-list-download-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## BIN Lookup

<a id="opIdBINLookup"></a>

> Code samples

```bash
curl 'https://example.com/bin-lookup?bin-number=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /bin-lookup`

Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup

<h3 id="bin-lookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bin-number|query|string|true|The BIN or IIN number. This is the first 6, 8 or 10 digits of a card number, use 8 (or more) digits for the highest level of accuracy|
|customer-ip|query|string|false|Pass in the customers IP address and we will return some extra information about them|

> Example responses

> 200 Response

```json
{
  "bin-number": "string",
  "card-brand": "string",
  "card-category": "string",
  "card-type": "string",
  "country": "string",
  "country-code": "string",
  "country-code3": "string",
  "currency-code": "string",
  "ip-blocklisted": true,
  "ip-blocklists": [
    "string"
  ],
  "ip-city": "string",
  "ip-country": "string",
  "ip-country-code": "string",
  "ip-country-code3": "string",
  "ip-matches-bin": true,
  "ip-region": "string",
  "is-commercial": true,
  "is-prepaid": true,
  "issuer": "string",
  "issuer-phone": "string",
  "issuer-website": "string",
  "valid": true
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="bin-lookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BINLookupResponse](#schemabinlookupresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## Convert

<a id="opIdConvert"></a>

> Code samples

```bash
curl 'https://example.com/convert?from-value=string&from-type=string&to-type=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /convert`

A currency and unit conversion tool

<h3 id="convert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from-value|query|string|true|The value to convert from (e.g. 10.95)|
|from-type|query|string|true|The type of the value to convert from (e.g. USD)|
|to-type|query|string|true|The type to convert to (e.g. EUR)|

> Example responses

> 200 Response

```json
{
  "from-type": "string",
  "from-value": "string",
  "result": "string",
  "result-float": 0,
  "to-type": "string",
  "valid": true
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="convert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConvertResponse](#schemaconvertresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

<h1 id="neutrino-api-www">WWW</h1>

## Browser Bot

<a id="opIdBrowserBot"></a>

> Code samples

```bash
curl https://example.com/browser-bot \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}" \
  -d 'delay=3&exec=%5B%5D&ignore-certificate-errors=false&selector=string&timeout=30&url=string&user-agent=string'
```

`POST /browser-bot`

Browser bot can extract content, interact with keyboard and mouse events, and execute JavaScript on a website

> Body parameter

```yaml
delay: 3
exec: "[]"
ignore-certificate-errors: false
selector: string
timeout: 30
url: string
user-agent: string
```

<h3 id="browser-bot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» delay|body|integer(int32)|false|Delay in seconds to wait before capturing any page data, executing selectors or JavaScript|
|» exec|body|[string]|false|Execute JavaScript on the website. This parameter accepts JavaScript as either a string containing JavaScript or for sending multiple separate statements a JSON array or POST array can also be used. If a statement returns any value it will be returned in the 'exec-results' response. You can also use the following specially defined user interaction functions: <br> <br> <div> sleep(seconds); Just wait/sleep for the specified number of seconds. <br>click('selector'); Click on the first element matching the given selector. <br>focus('selector'); Focus on the first element matching the given selector. <br>keys('characters'); Send the specified keyboard characters. Use click() or focus() first to send keys to a specific element. <br>enter(); Send the Enter key. <br>tab(); Send the Tab key. <br> </div>|
|» ignore-certificate-errors|body|boolean|false|Ignore any TLS/SSL certificate errors and load the page anyway|
|» selector|body|string|false|Extract content from the page DOM using this selector. Commonly known as a CSS selector, you can find a good reference <a href="https://www.w3schools.com/cssref/css_selectors.asp">here</a>|
|» timeout|body|integer(int32)|false|Timeout in seconds. Give up if still trying to load the page after this number of seconds|
|» url|body|string|true|The URL to load|
|» user-agent|body|string|false|Override the browsers default user-agent string with this one|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "elements": [
    "string"
  ],
  "error-message": "string",
  "exec-results": [
    "string"
  ],
  "http-redirect-url": "string",
  "http-status-code": 0,
  "http-status-message": "string",
  "is-error": true,
  "is-http-ok": true,
  "is-http-redirect": true,
  "is-secure": true,
  "is-timeout": true,
  "language-code": "string",
  "load-time": 0,
  "mime-type": "string",
  "response-headers": {
    "property1": "string",
    "property2": "string"
  },
  "security-details": {
    "property1": "string",
    "property2": "string"
  },
  "server-ip": "string",
  "title": "string",
  "url": "string"
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="browser-bot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BrowserBotResponse](#schemabrowserbotresponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## HTML Clean

<a id="opIdHTMLClean"></a>

> Code samples

```bash
curl https://example.com/html-clean \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}" \
  -d 'content=string&output-type=string'
```

`POST /html-clean`

Clean and sanitize untrusted HTML

> Body parameter

```yaml
content: string
output-type: string
```

<h3 id="html-clean-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» content|body|string|true|The HTML content. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string|
|» output-type|body|string|true|The level of sanitization, possible values are: <br><b>plain-text</b>: reduce the content to plain text only (no HTML tags at all) <br><b>simple-text</b>: allow only very basic text formatting tags like b, em, i, strong, u <br><b>basic-html</b>: allow advanced text formatting and hyper links <br><b>basic-html-with-images</b>: same as basic html but also allows image tags <br><b>advanced-html</b>: same as basic html with images but also allows many more common HTML tags like table, ul, dl, pre <br>|

> Example responses

> 200 Response

```json
""
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="html-clean-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

## URL Info

<a id="opIdURLInfo"></a>

> Code samples

```bash
curl 'https://example.com/url-info?url=string' \
  -H 'Accept: application/json' \
  -H "api-key: ${API_KEY}" \
  -H "user-id: ${API_KEY}"
```

`GET /url-info`

Parse, analyze and retrieve content from the supplied URL

<h3 id="url-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|The URL to probe|
|fetch-content|query|boolean|false|If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content (e.g. with the HTML Extract or HTML Clean APIs)|
|ignore-certificate-errors|query|boolean|false|Ignore any TLS/SSL certificate errors and load the URL anyway|
|timeout|query|integer(int32)|false|Timeout in seconds. Give up if still trying to load the URL after this number of seconds|
|retry|query|integer(int32)|false|If the request fails for any reason try again this many times|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "content-encoding": "string",
  "content-size": 0,
  "content-type": "string",
  "http-ok": true,
  "http-redirect": true,
  "http-status": 0,
  "http-status-message": 0,
  "is-error": true,
  "is-timeout": true,
  "language-code": "string",
  "load-time": 0,
  "query": {
    "property1": "string",
    "property2": "string"
  },
  "real": true,
  "server-city": "string",
  "server-country": "string",
  "server-country-code": "string",
  "server-hostname": "string",
  "server-ip": "string",
  "server-name": "string",
  "server-region": "string",
  "title": "string",
  "url": "string",
  "url-path": "string",
  "url-port": 0,
  "url-protocol": "string",
  "valid": true
}
```

> 400 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 403 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> 500 Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

> default Response

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

<h3 id="url-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[URLInfoResponse](#schemaurlinforesponse)|
|400|Bad Request|Your API request has been rejected. Check error code for details|[APIError](#schemaapierror)|
|403|Forbidden|You have failed to authenticate|[APIError](#schemaapierror)|
|500|Internal Server Error|We messed up, sorry! Your request has caused a fatal exception|[APIError](#schemaapierror)|
|default|Default|We messed up, sorry! Your request has caused an error|[APIError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key & user-id
</aside>

# Schemas

<h2 id="tocS_APIError">APIError</h2>
<!-- backwards compatibility -->
<a id="schemaapierror"></a>
<a id="schema_APIError"></a>
<a id="tocSapierror"></a>
<a id="tocsapierror"></a>

```json
{
  "apiError": 0,
  "apiErrorMsg": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiError|integer(int32)|true|none|API error code. If set and > 0 then an API error has occurred your request could not be completed|
|apiErrorMsg|string|true|none|API error message|

<h2 id="tocS_BINLookupResponse">BINLookupResponse</h2>
<!-- backwards compatibility -->
<a id="schemabinlookupresponse"></a>
<a id="schema_BINLookupResponse"></a>
<a id="tocSbinlookupresponse"></a>
<a id="tocsbinlookupresponse"></a>

```json
{
  "bin-number": "string",
  "card-brand": "string",
  "card-category": "string",
  "card-type": "string",
  "country": "string",
  "country-code": "string",
  "country-code3": "string",
  "currency-code": "string",
  "ip-blocklisted": true,
  "ip-blocklists": [
    "string"
  ],
  "ip-city": "string",
  "ip-country": "string",
  "ip-country-code": "string",
  "ip-country-code3": "string",
  "ip-matches-bin": true,
  "ip-region": "string",
  "is-commercial": true,
  "is-prepaid": true,
  "issuer": "string",
  "issuer-phone": "string",
  "issuer-website": "string",
  "valid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bin-number|string|true|none|The BIN or IIN number|
|card-brand|string|true|none|The card brand (e.g. Visa or Mastercard)|
|card-category|string|true|none|The card category. There are many different card categories the most common card categories are: CLASSIC, BUSINESS, CORPORATE, PLATINUM, PREPAID|
|card-type|string|true|none|The card type, will always be one of: DEBIT, CREDIT, CHARGE CARD|
|country|string|true|none|The full country name of the issuer|
|country-code|string|true|none|The ISO 2-letter country code of the issuer|
|country-code3|string|true|none|The ISO 3-letter country code of the issuer|
|currency-code|string|true|none|ISO 4217 currency code associated with the country of the issuer|
|ip-blocklisted|boolean|true|none|True if the customers IP is listed on one of our blocklists, see the <a href="http://www.neutrinoapi.com/api/ip-blocklist/">IP Blocklist API</a>|
|ip-blocklists|[string]|true|none|An array of strings indicating which blocklists this IP is listed on|
|ip-city|string|true|none|The city of the customers IP (if detectable)|
|ip-country|string|true|none|The country of the customers IP|
|ip-country-code|string|true|none|The ISO 2-letter country code of the customers IP|
|ip-country-code3|string|true|none|The ISO 3-letter country code of the customers IP|
|ip-matches-bin|boolean|true|none|True if the customers IP country matches the BIN country|
|ip-region|string|true|none|The region of the customers IP (if detectable)|
|is-commercial|boolean|true|none|Is this a commercial/business use card|
|is-prepaid|boolean|true|none|Is this a prepaid or prepaid reloadable card|
|issuer|string|true|none|The card issuer|
|issuer-phone|string|true|none|The card issuers phone number|
|issuer-website|string|true|none|The card issuers website|
|valid|boolean|true|none|Is this a valid BIN or IIN number|

<h2 id="tocS_BadWordFilterResponse">BadWordFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemabadwordfilterresponse"></a>
<a id="schema_BadWordFilterResponse"></a>
<a id="tocSbadwordfilterresponse"></a>
<a id="tocsbadwordfilterresponse"></a>

```json
{
  "bad-words-list": [
    "string"
  ],
  "bad-words-total": 0,
  "censored-content": "string",
  "is-bad": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bad-words-list|[string]|true|none|An array of the bad words found|
|bad-words-total|integer(int32)|true|none|Total number of bad words detected|
|censored-content|string|true|none|The censored content (only set if censor-character has been set)|
|is-bad|boolean|true|none|Does the text contain bad words|

<h2 id="tocS_Blacklist">Blacklist</h2>
<!-- backwards compatibility -->
<a id="schemablacklist"></a>
<a id="schema_Blacklist"></a>
<a id="tocSblacklist"></a>
<a id="tocsblacklist"></a>

```json
{
  "is-listed": true,
  "list-host": "string",
  "list-name": "string",
  "list-rating": 0,
  "response-time": 0,
  "return-code": "string",
  "txt-record": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is-listed|boolean|true|none|True if the host is currently black-listed|
|list-host|string|true|none|The hostname of the DNSBL|
|list-name|string|true|none|The name of the DNSBL|
|list-rating|integer(int32)|true|none|The list rating [1-3] with 1 being the best rating and 3 the lowest rating|
|response-time|integer(int32)|true|none|The DNSBL server response time in milliseconds|
|return-code|string|true|none|The specific return code for this listing (only set if listed)|
|txt-record|string|true|none|The TXT record returned for this listing (only set if listed)|

<h2 id="tocS_BlocklistSensor">BlocklistSensor</h2>
<!-- backwards compatibility -->
<a id="schemablocklistsensor"></a>
<a id="schema_BlocklistSensor"></a>
<a id="tocSblocklistsensor"></a>
<a id="tocsblocklistsensor"></a>

```json
{
  "blocklist": "string",
  "description": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocklist|string|true|none|The primary blocklist category this sensor belongs to|
|description|string|true|none|Contains details about the sensor source and what type of malicious activity was detected|
|id|integer(int32)|true|none|The sensor ID. This is a permanent and unique ID for each sensor|

<h2 id="tocS_BrowserBotResponse">BrowserBotResponse</h2>
<!-- backwards compatibility -->
<a id="schemabrowserbotresponse"></a>
<a id="schema_BrowserBotResponse"></a>
<a id="tocSbrowserbotresponse"></a>
<a id="tocsbrowserbotresponse"></a>

```json
{
  "content": "string",
  "elements": [
    "string"
  ],
  "error-message": "string",
  "exec-results": [
    "string"
  ],
  "http-redirect-url": "string",
  "http-status-code": 0,
  "http-status-message": "string",
  "is-error": true,
  "is-http-ok": true,
  "is-http-redirect": true,
  "is-secure": true,
  "is-timeout": true,
  "language-code": "string",
  "load-time": 0,
  "mime-type": "string",
  "response-headers": {
    "property1": "string",
    "property2": "string"
  },
  "security-details": {
    "property1": "string",
    "property2": "string"
  },
  "server-ip": "string",
  "title": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|The complete raw, decompressed and decoded page content. Usually will be either HTML, JSON or XML|
|elements|[string]|true|none|Array containing all the elements matching the supplied selector. <br>Each element object will contain the text content, HTML content and all current element attributes|
|error-message|string|true|none|Contains the error message if an error has occurred ('is-error' will be true)|
|exec-results|[string]|true|none|If you executed any JavaScript this array holds the results as objects|
|http-redirect-url|string|true|none|The redirected URL if the URL responded with an HTTP redirect|
|http-status-code|integer(int32)|true|none|The HTTP status code the URL returned|
|http-status-message|string|true|none|The HTTP status message the URL returned|
|is-error|boolean|true|none|True if an error has occurred loading the page. Check the 'error-message' field for details|
|is-http-ok|boolean|true|none|True if the HTTP status is OK (200)|
|is-http-redirect|boolean|true|none|True if the URL responded with an HTTP redirect|
|is-secure|boolean|true|none|True if the page is secured using TLS/SSL|
|is-timeout|boolean|true|none|True if a timeout occurred while loading the page. You can set the timeout with the request parameter 'timeout'|
|language-code|string|true|none|The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers|
|load-time|number(double)|true|none|The number of seconds taken to load the page (from initial request until DOM ready)|
|mime-type|string|true|none|The document MIME type|
|response-headers|object|true|none|Map containing all the HTTP response headers the URL responded with|
|security-details|object|true|none|Map containing details of the TLS/SSL setup|
|server-ip|string|true|none|The HTTP servers IP address|
|title|string|true|none|The document title|
|url|string|true|none|The page URL|

<h2 id="tocS_ConvertResponse">ConvertResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconvertresponse"></a>
<a id="schema_ConvertResponse"></a>
<a id="tocSconvertresponse"></a>
<a id="tocsconvertresponse"></a>

```json
{
  "from-type": "string",
  "from-value": "string",
  "result": "string",
  "result-float": 0,
  "to-type": "string",
  "valid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from-type|string|true|none|The type of the value being converted from|
|from-value|string|true|none|The value being converted from|
|result|string|true|none|The result of the conversion in string format|
|result-float|number(double)|true|none|The result of the conversion as a floating-point number|
|to-type|string|true|none|The type being converted to|
|valid|boolean|true|none|True if the conversion was successful and produced a valid result|

<h2 id="tocS_EmailValidateResponse">EmailValidateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemailvalidateresponse"></a>
<a id="schema_EmailValidateResponse"></a>
<a id="tocSemailvalidateresponse"></a>
<a id="tocsemailvalidateresponse"></a>

```json
{
  "domain": "string",
  "domain-error": true,
  "email": "string",
  "is-disposable": true,
  "is-freemail": true,
  "is-personal": true,
  "provider": "string",
  "syntax-error": true,
  "typos-fixed": true,
  "valid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|The email domain|
|domain-error|boolean|true|none|True if this address has a domain error (e.g. no valid mail server records)|
|email|string|true|none|The email address. If you have used the fix-typos option then this will be the fixed address|
|is-disposable|boolean|true|none|True if this address is a disposable, temporary or darknet related email address|
|is-freemail|boolean|true|none|True if this address is a free-mail address|
|is-personal|boolean|true|none|True if this address belongs to a person. False if this is a role based address, e.g. admin@, help@, office@, etc.|
|provider|string|true|none|The email service provider domain|
|syntax-error|boolean|true|none|True if this address has a syntax error|
|typos-fixed|boolean|true|none|True if typos have been fixed|
|valid|boolean|true|none|Is this a valid email|

<h2 id="tocS_EmailVerifyResponse">EmailVerifyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemailverifyresponse"></a>
<a id="schema_EmailVerifyResponse"></a>
<a id="tocSemailverifyresponse"></a>
<a id="tocsemailverifyresponse"></a>

```json
{
  "domain": "string",
  "domain-error": true,
  "email": "string",
  "is-catch-all": true,
  "is-deferred": true,
  "is-disposable": true,
  "is-freemail": true,
  "is-personal": true,
  "provider": "string",
  "smtp-response": "string",
  "smtp-status": "string",
  "syntax-error": true,
  "typos-fixed": true,
  "valid": true,
  "verified": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|The email domain|
|domain-error|boolean|true|none|True if this address has a domain error (e.g. no valid mail server records)|
|email|string|true|none|The email address. If you have used the fix-typos option then this will be the fixed address|
|is-catch-all|boolean|true|none|True if this email domain has a catch-all policy (it will accept mail for any username)|
|is-deferred|boolean|true|none|True if the mail server responded with a temporary failure (either a 4xx response code or unresponsive server). You can retry this address later, we recommend waiting at least 15 minutes before retrying|
|is-disposable|boolean|true|none|True if this address is a disposable, temporary or darknet related email address|
|is-freemail|boolean|true|none|True if this address is a free-mail address|
|is-personal|boolean|true|none|True if this address is for a person. False if this is a role based address, e.g. admin@, help@, office@, etc.|
|provider|string|true|none|The email service provider domain|
|smtp-response|string|true|none|The raw SMTP response message received during verification|
|smtp-status|string|true|none|The SMTP verification status for the address: <br> <ul> <li>ok - SMTP verification was successful, this is a real address that can receive mail</li> <li>invalid - this is not a valid email address (has either a domain or syntax error)</li> <li>absent - this address is not registered with the email service provider</li> <li>unresponsive - the mail server(s) for this address timed-out or refused to open an SMTP connection</li> <li>unknown - sorry, we could not reliably determine the real status of this address (this address may or may not exist)</li> </ul>|
|syntax-error|boolean|true|none|True if this address has a syntax error|
|typos-fixed|boolean|true|none|True if typos have been fixed|
|valid|boolean|true|none|Is this a valid email address (syntax and domain is valid)|
|verified|boolean|true|none|True if this address has passed SMTP verification. Check the smtp-status and smtp-response fields for specific verification details|

<h2 id="tocS_GeocodeAddressResponse">GeocodeAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemageocodeaddressresponse"></a>
<a id="schema_GeocodeAddressResponse"></a>
<a id="tocSgeocodeaddressresponse"></a>
<a id="tocsgeocodeaddressresponse"></a>

```json
{
  "found": 0,
  "locations": [
    {
      "address": "string",
      "address-components": {
        "property1": "string",
        "property2": "string"
      },
      "city": "string",
      "country": "string",
      "country-code": "string",
      "country-code3": "string",
      "currency-code": "string",
      "latitude": 0,
      "location-tags": [
        "string"
      ],
      "location-type": "string",
      "longitude": 0,
      "postal-address": "string",
      "postal-code": "string",
      "region-code": "string",
      "state": "string",
      "timezone": {
        "property1": {
          "abbr": "EDT",
          "date": "2021-01-01",
          "id": "America/New_York",
          "name": "Eastern Daylight Time",
          "offset": "string",
          "time": "12:30:00.00"
        },
        "property2": {
          "abbr": "EDT",
          "date": "2021-01-01",
          "id": "America/New_York",
          "name": "Eastern Daylight Time",
          "offset": "string",
          "time": "12:30:00.00"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|found|integer(int32)|true|none|The number of possible matching locations found|
|locations|[[Location](#schemalocation)]|true|none|Array of matching location objects|

<h2 id="tocS_GeocodeReverseResponse">GeocodeReverseResponse</h2>
<!-- backwards compatibility -->
<a id="schemageocodereverseresponse"></a>
<a id="schema_GeocodeReverseResponse"></a>
<a id="tocSgeocodereverseresponse"></a>
<a id="tocsgeocodereverseresponse"></a>

```json
{
  "address": "string",
  "address-components": {
    "property1": "string",
    "property2": "string"
  },
  "city": "string",
  "country": "string",
  "country-code": "string",
  "country-code3": "string",
  "currency-code": "string",
  "found": true,
  "latitude": 0,
  "location-tags": [
    "string"
  ],
  "location-type": "string",
  "longitude": 0,
  "postal-address": "string",
  "postal-code": "string",
  "region-code": "string",
  "state": "string",
  "timezone": {
    "property1": {
      "abbr": "EDT",
      "date": "2021-01-01",
      "id": "America/New_York",
      "name": "Eastern Daylight Time",
      "offset": "string",
      "time": "12:30:00.00"
    },
    "property2": {
      "abbr": "EDT",
      "date": "2021-01-01",
      "id": "America/New_York",
      "name": "Eastern Daylight Time",
      "offset": "string",
      "time": "12:30:00.00"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|The complete address using comma-separated values|
|address-components|object|true|none|The components which make up the address such as road, city, state, etc|
|city|string|true|none|The city of the location|
|country|string|true|none|The country of the location|
|country-code|string|true|none|The ISO 2-letter country code of the location|
|country-code3|string|true|none|The ISO 3-letter country code of the location|
|currency-code|string|true|none|ISO 4217 currency code associated with the country|
|found|boolean|true|none|True if these coordinates map to a real location|
|latitude|number(double)|true|none|The location latitude|
|location-tags|[string]|true|none|Array of strings containing any location tags associated with the address. Tags are additional pieces of metadata about a specific location, there are thousands of different tags. Some examples of tags: shop, office, cafe, bank, pub|
|location-type|string|true|none|The detected location type ordered roughly from most to least precise, possible values are: <br> <ul> <li>address - indicates a precise street address</li> <li>street - accurate to the street level but may not point to the exact location of the house/building number</li> <li>city - accurate to the city level, this includes villages, towns, suburbs, etc</li> <li>postal-code - indicates a postal code area (no house or street information present)</li> <li>railway - location is part of a rail network such as a station or railway track</li> <li>natural - indicates a natural feature, for example a mountain peak or a waterway</li> <li>island - location is an island or archipelago</li> <li>administrative - indicates an administrative boundary such as a country, state or province</li> </ul>|
|longitude|number(double)|true|none|The location longitude|
|postal-address|string|true|none|The formatted address using local standards suitable for printing on an envelope|
|postal-code|string|true|none|The postal code for the location|
|region-code|string|true|none|The ISO 3166-2 region code for the location|
|state|string|true|none|The state of the location|
|timezone|object|true|none|Map containing timezone details for the location|

<h2 id="tocS_HLRLookupResponse">HLRLookupResponse</h2>
<!-- backwards compatibility -->
<a id="schemahlrlookupresponse"></a>
<a id="schema_HLRLookupResponse"></a>
<a id="tocShlrlookupresponse"></a>
<a id="tocshlrlookupresponse"></a>

```json
{
  "country": "string",
  "country-code": "string",
  "country-code3": "string",
  "currency-code": "string",
  "current-network": "string",
  "hlr-status": "string",
  "hlr-valid": true,
  "imsi": "string",
  "international-calling-code": "string",
  "international-number": "string",
  "is-mobile": true,
  "is-ported": true,
  "is-roaming": true,
  "local-number": "string",
  "location": "string",
  "mcc": "string",
  "mnc": "string",
  "msc": "string",
  "msin": "string",
  "number-type": "string",
  "number-valid": true,
  "origin-network": "string",
  "ported-network": "string",
  "roaming-country-code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|The phone number country|
|country-code|string|true|none|The number location as an ISO 2-letter country code|
|country-code3|string|true|none|The number location as an ISO 3-letter country code|
|currency-code|string|true|none|ISO 4217 currency code associated with the country|
|current-network|string|true|none|The currently used network/carrier name|
|hlr-status|string|true|none|The HLR lookup status, possible values are: <br> <ul> <li>ok - the HLR lookup was successful and the device is connected</li> <li>absent - the number was once registered but the device has been switched off or out of network range for some time</li> <li>unknown - the number is not known by the mobile network</li> <li>invalid - the number is not a valid mobile MSISDN number</li> <li>fixed-line - the number is a registered fixed-line not mobile</li> <li>voip - the number has been detected as a VOIP line</li> <li>failed - the HLR lookup has failed, we could not determine the real status of this number</li> </ul>|
|hlr-valid|boolean|true|none|Was the HLR lookup successful. If true then this is a working and registered cell-phone or mobile device (SMS and phone calls will be delivered)|
|imsi|string|true|none|The mobile IMSI number (International Mobile Subscriber Identity)|
|international-calling-code|string|true|none|The international calling code|
|international-number|string|true|none|The number represented in full international format|
|is-mobile|boolean|true|none|True if this is a mobile number (only true with 100% certainty, if the number type is unknown this value will be false)|
|is-ported|boolean|true|none|Has this number been ported to another network|
|is-roaming|boolean|true|none|Is this number currently roaming from its origin country|
|local-number|string|true|none|The number represented in local dialing format|
|location|string|true|none|The number location. Could be a city, region or country depending on the type of number|
|mcc|string|true|none|The mobile MCC number (Mobile Country Code)|
|mnc|string|true|none|The mobile MNC number (Mobile Network Code)|
|msc|string|true|none|The mobile MSC number (Mobile Switching Center)|
|msin|string|true|none|The mobile MSIN number (Mobile Subscription Identification Number)|
|number-type|string|true|none|The number type, possible values are: <br> <ul> <li>mobile</li> <li>fixed-line</li> <li>premium-rate</li> <li>toll-free</li> <li>voip</li> <li>unknown</li> </ul>|
|number-valid|boolean|true|none|True if this a valid phone number|
|origin-network|string|true|none|The origin network/carrier name|
|ported-network|string|true|none|The ported to network/carrier name (only set if the number has been ported)|
|roaming-country-code|string|true|none|If the number is currently roaming, the ISO 2-letter country code of the roaming in country|

<h2 id="tocS_HostReputationResponse">HostReputationResponse</h2>
<!-- backwards compatibility -->
<a id="schemahostreputationresponse"></a>
<a id="schema_HostReputationResponse"></a>
<a id="tocShostreputationresponse"></a>
<a id="tocshostreputationresponse"></a>

```json
{
  "host": "string",
  "is-listed": true,
  "list-count": 0,
  "lists": [
    {
      "is-listed": true,
      "list-host": "string",
      "list-name": "string",
      "list-rating": 0,
      "response-time": 0,
      "return-code": "string",
      "txt-record": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|true|none|The IP address or host name|
|is-listed|boolean|true|none|Is this host blacklisted|
|list-count|integer(int32)|true|none|The number of DNSBLs the host is listed on|
|lists|[[Blacklist](#schemablacklist)]|true|none|Array of objects for each DNSBL checked|

<h2 id="tocS_IPBlocklistResponse">IPBlocklistResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipblocklistresponse"></a>
<a id="schema_IPBlocklistResponse"></a>
<a id="tocSipblocklistresponse"></a>
<a id="tocsipblocklistresponse"></a>

```json
{
  "blocklists": [
    "string"
  ],
  "cidr": "string",
  "ip": "string",
  "is-bot": true,
  "is-dshield": true,
  "is-exploit-bot": true,
  "is-hijacked": true,
  "is-listed": true,
  "is-malware": true,
  "is-proxy": true,
  "is-spam-bot": true,
  "is-spider": true,
  "is-spyware": true,
  "is-tor": true,
  "is-vpn": true,
  "last-seen": 0,
  "list-count": 0,
  "sensors": [
    {
      "blocklist": "string",
      "description": "string",
      "id": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocklists|[string]|true|none|An array of strings indicating which blocklist categories this IP is listed on|
|cidr|string|true|none|The CIDR address for this listing (only set if the IP is listed)|
|ip|string|true|none|The IP address|
|is-bot|boolean|true|none|IP is hosting a malicious bot or is part of a botnet. This is a broad category which includes brute-force crackers|
|is-dshield|boolean|true|none|IP has been flagged as a significant attack source by DShield (dshield.org)|
|is-exploit-bot|boolean|true|none|IP is hosting an exploit finding bot or is running exploit scanning software|
|is-hijacked|boolean|true|none|IP is part of a hijacked netblock or a netblock controlled by a criminal organization|
|is-listed|boolean|true|none|Is this IP on a blocklist|
|is-malware|boolean|true|none|IP is involved in distributing or is running malware|
|is-proxy|boolean|true|none|IP has been detected as an anonymous web proxy or anonymous HTTP proxy|
|is-spam-bot|boolean|true|none|IP address is hosting a spam bot, comment spamming or any other spamming type software|
|is-spider|boolean|true|none|IP is running a hostile web spider / web crawler|
|is-spyware|boolean|true|none|IP is involved in distributing or is running spyware|
|is-tor|boolean|true|none|IP is a Tor node or running a Tor related service|
|is-vpn|boolean|true|none|IP belongs to a public VPN provider (only set if the 'vpn-lookup' option is enabled)|
|last-seen|integer(int32)|true|none|The unix time when this IP was last seen on any blocklist. IPs are automatically removed after 7 days therefor this value will never be older than 7 days|
|list-count|integer(int32)|true|none|The number of blocklists the IP is listed on|
|sensors|[[BlocklistSensor](#schemablocklistsensor)]|true|none|An array of objects containing details on which specific sensors detected the IP|

<h2 id="tocS_IPInfoResponse">IPInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipinforesponse"></a>
<a id="schema_IPInfoResponse"></a>
<a id="tocSipinforesponse"></a>
<a id="tocsipinforesponse"></a>

```json
{
  "city": "string",
  "continent-code": "string",
  "country": "string",
  "country-code": "string",
  "country-code3": "string",
  "currency-code": "string",
  "host-domain": "string",
  "hostname": "string",
  "ip": "string",
  "is-bogon": true,
  "is-v4-mapped": true,
  "is-v6": true,
  "latitude": 0,
  "longitude": 0,
  "region": "string",
  "region-code": "string",
  "timezone": {
    "property1": {
      "abbr": "EDT",
      "date": "2021-01-01",
      "id": "America/New_York",
      "name": "Eastern Daylight Time",
      "offset": "string",
      "time": "12:30:00.00"
    },
    "property2": {
      "abbr": "EDT",
      "date": "2021-01-01",
      "id": "America/New_York",
      "name": "Eastern Daylight Time",
      "offset": "string",
      "time": "12:30:00.00"
    }
  },
  "valid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|Name of the city (if detectable)|
|continent-code|string|true|none|ISO 2-letter continent code|
|country|string|true|none|Full country name|
|country-code|string|true|none|ISO 2-letter country code|
|country-code3|string|true|none|ISO 3-letter country code|
|currency-code|string|true|none|ISO 4217 currency code associated with the country|
|host-domain|string|true|none|The IPs host domain (only set if reverse-lookup has been used)|
|hostname|string|true|none|The IPs full hostname (only set if reverse-lookup has been used)|
|ip|string|true|none|The IP address|
|is-bogon|boolean|true|none|True if this is a bogon IP address such as a private network, local network or reserved address|
|is-v4-mapped|boolean|true|none|True if this is a <a href="https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses">IPv4 mapped IPv6 address</a>|
|is-v6|boolean|true|none|True if this is a IPv6 address. False if IPv4|
|latitude|number(double)|true|none|Location latitude|
|longitude|number(double)|true|none|Location longitude|
|region|string|true|none|Name of the region (if detectable)|
|region-code|string|true|none|ISO 3166-2 region code (if detectable)|
|timezone|object|true|none|Map containing timezone details for the location|
|valid|boolean|true|none|True if this is a valid IPv4 or IPv6 address|

<h2 id="tocS_IPProbeResponse">IPProbeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipproberesponse"></a>
<a id="schema_IPProbeResponse"></a>
<a id="tocSipproberesponse"></a>
<a id="tocsipproberesponse"></a>

```json
{
  "as-age": 0,
  "as-cidr": "string",
  "as-country-code": "string",
  "as-country-code3": "string",
  "as-description": "string",
  "as-domains": [
    "string"
  ],
  "asn": "string",
  "city": "string",
  "continent-code": "string",
  "country": "string",
  "country-code": "string",
  "country-code3": "string",
  "currency-code": "string",
  "host-domain": "string",
  "hostname": "string",
  "ip": "string",
  "is-bogon": true,
  "is-hosting": true,
  "is-isp": true,
  "is-proxy": true,
  "is-v4-mapped": true,
  "is-v6": true,
  "is-vpn": true,
  "provider-description": "string",
  "provider-domain": "string",
  "provider-type": "string",
  "provider-website": "string",
  "region": "string",
  "region-code": "string",
  "valid": true,
  "vpn-domain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|as-age|integer(int32)|true|none|The age of the autonomous system (AS) in number of years since registration|
|as-cidr|string|true|none|The autonomous system (AS) CIDR range|
|as-country-code|string|true|none|The autonomous system (AS) ISO 2-letter country code|
|as-country-code3|string|true|none|The autonomous system (AS) ISO 3-letter country code|
|as-description|string|true|none|The autonomous system (AS) description / company name|
|as-domains|[string]|true|none|Array of all the domains associated with the autonomous system (AS)|
|asn|string|true|none|The autonomous system (AS) number|
|city|string|true|none|Full city name (if detectable)|
|continent-code|string|true|none|ISO 2-letter continent code|
|country|string|true|none|Full country name|
|country-code|string|true|none|ISO 2-letter country code|
|country-code3|string|true|none|ISO 3-letter country code|
|currency-code|string|true|none|ISO 4217 currency code associated with the country|
|host-domain|string|true|none|The IPs host domain|
|hostname|string|true|none|The IPs full hostname (PTR)|
|ip|string|true|none|The IP address|
|is-bogon|boolean|true|none|True if this is a bogon IP address such as a private network, local network or reserved address|
|is-hosting|boolean|true|none|True if this IP belongs to a hosting company. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types|
|is-isp|boolean|true|none|True if this IP belongs to an internet service provider. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types|
|is-proxy|boolean|true|none|True if this IP ia a proxy|
|is-v4-mapped|boolean|true|none|True if this is a <a href="https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses">IPv4 mapped IPv6 address</a>|
|is-v6|boolean|true|none|True if this is a IPv6 address. False if IPv4|
|is-vpn|boolean|true|none|True if this IP ia a VPN|
|provider-description|string|true|none|A description of the provider (usually extracted from the providers website)|
|provider-domain|string|true|none|The domain name of the provider|
|provider-type|string|true|none|The detected provider type, possible values are: <br> <ul> <li>isp - IP belongs to an internet service provider. This includes both mobile, home and business internet providers</li> <li>hosting - IP belongs to a hosting company. This includes website hosting, cloud computing platforms and colocation facilities</li> <li>vpn - IP belongs to a VPN provider</li> <li>proxy - IP belongs to a proxy service. This includes HTTP/SOCKS proxies and browser based proxies</li> <li>university - IP belongs to a university/college/campus</li> <li>government - IP belongs to a government department. This includes military facilities</li> <li>commercial - IP belongs to a commercial entity such as a corporate headquarters or company office</li> <li>unknown - could not identify the provider type</li> </ul>|
|provider-website|string|true|none|The website URL for the provider|
|region|string|true|none|Full region name (if detectable)|
|region-code|string|true|none|ISO 3166-2 region code (if detectable)|
|valid|boolean|true|none|True if this is a valid IPv4 or IPv6 address|
|vpn-domain|string|true|none|The domain of the VPN provider (may be empty if the VPN domain is not detectable)|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "address": "string",
  "address-components": {
    "property1": "string",
    "property2": "string"
  },
  "city": "string",
  "country": "string",
  "country-code": "string",
  "country-code3": "string",
  "currency-code": "string",
  "latitude": 0,
  "location-tags": [
    "string"
  ],
  "location-type": "string",
  "longitude": 0,
  "postal-address": "string",
  "postal-code": "string",
  "region-code": "string",
  "state": "string",
  "timezone": {
    "property1": {
      "abbr": "EDT",
      "date": "2021-01-01",
      "id": "America/New_York",
      "name": "Eastern Daylight Time",
      "offset": "string",
      "time": "12:30:00.00"
    },
    "property2": {
      "abbr": "EDT",
      "date": "2021-01-01",
      "id": "America/New_York",
      "name": "Eastern Daylight Time",
      "offset": "string",
      "time": "12:30:00.00"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|The complete address using comma-separated values|
|address-components|object|true|none|The components which make up the address such as road, city, state, etc|
|city|string|true|none|The city of the location|
|country|string|true|none|The country of the location|
|country-code|string|true|none|The ISO 2-letter country code of the location|
|country-code3|string|true|none|The ISO 3-letter country code of the location|
|currency-code|string|true|none|ISO 4217 currency code associated with the country|
|latitude|number(double)|true|none|The location latitude|
|location-tags|[string]|true|none|Array of strings containing any location tags associated with the address. Tags are additional pieces of metadata about a specific location, there are thousands of different tags. Some examples of tags: shop, office, cafe, bank, pub|
|location-type|string|true|none|The detected location type ordered roughly from most to least precise, possible values are: <br> <ul> <li>address - indicates a precise street address</li> <li>street - accurate to the street level but may not point to the exact location of the house/building number</li> <li>city - accurate to the city level, this includes villages, towns, suburbs, etc</li> <li>postal-code - indicates a postal code area (no house or street information present)</li> <li>railway - location is part of a rail network such as a station or railway track</li> <li>natural - indicates a natural feature, for example a mountain peak or a waterway</li> <li>island - location is an island or archipelago</li> <li>administrative - indicates an administrative boundary such as a country, state or province</li> </ul>|
|longitude|number(double)|true|none|The location longitude|
|postal-address|string|true|none|The formatted address using local standards suitable for printing on an envelope|
|postal-code|string|true|none|The postal code for the location|
|region-code|string|true|none|The ISO 3166-2 region code for the location|
|state|string|true|none|The state of the location|
|timezone|object|true|none|Map containing timezone details for the location|

<h2 id="tocS_PhonePlaybackResponse">PhonePlaybackResponse</h2>
<!-- backwards compatibility -->
<a id="schemaphoneplaybackresponse"></a>
<a id="schema_PhonePlaybackResponse"></a>
<a id="tocSphoneplaybackresponse"></a>
<a id="tocsphoneplaybackresponse"></a>

```json
{
  "calling": true,
  "number-valid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calling|boolean|true|none|True if the call is being made now|
|number-valid|boolean|true|none|True if this a valid phone number|

<h2 id="tocS_PhoneValidateResponse">PhoneValidateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaphonevalidateresponse"></a>
<a id="schema_PhoneValidateResponse"></a>
<a id="tocSphonevalidateresponse"></a>
<a id="tocsphonevalidateresponse"></a>

```json
{
  "country": "string",
  "country-code": "string",
  "country-code3": "string",
  "currency-code": "string",
  "international-calling-code": "string",
  "international-number": "string",
  "is-mobile": true,
  "local-number": "string",
  "location": "string",
  "prefix-network": "string",
  "type": "string",
  "valid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|The phone number country|
|country-code|string|true|none|The phone number country as an ISO 2-letter country code|
|country-code3|string|true|none|The phone number country as an ISO 3-letter country code|
|currency-code|string|true|none|ISO 4217 currency code associated with the country|
|international-calling-code|string|true|none|The international calling code|
|international-number|string|true|none|The number represented in full international format (E.164)|
|is-mobile|boolean|true|none|True if this is a mobile number. If the number type is unknown this value will be false|
|local-number|string|true|none|The number represented in local dialing format|
|location|string|true|none|The phone number location. Could be the city, region or country depending on the type of number|
|prefix-network|string|true|none|The network/carrier who owns the prefix (this only works for some countries, use HLR lookup for global network detection)|
|type|string|true|none|The number type based on the number prefix. <br>Possible values are: <br> <ul> <li>mobile</li> <li>fixed-line</li> <li>premium-rate</li> <li>toll-free</li> <li>voip</li> <li>unknown (use HLR lookup)</li> </ul>|
|valid|boolean|true|none|Is this a valid phone number|

<h2 id="tocS_PhoneVerifyResponse">PhoneVerifyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaphoneverifyresponse"></a>
<a id="schema_PhoneVerifyResponse"></a>
<a id="tocSphoneverifyresponse"></a>
<a id="tocsphoneverifyresponse"></a>

```json
{
  "calling": true,
  "number-valid": true,
  "security-code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calling|boolean|true|none|True if the call is being made now|
|number-valid|boolean|true|none|True if this a valid phone number|
|security-code|string|true|none|The security code generated, you can save this code to perform your own verification or you can use the <a href="https://www.neutrinoapi.com/api/verify-security-code/">Verify Security Code API</a>|

<h2 id="tocS_SMSVerifyResponse">SMSVerifyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasmsverifyresponse"></a>
<a id="schema_SMSVerifyResponse"></a>
<a id="tocSsmsverifyresponse"></a>
<a id="tocssmsverifyresponse"></a>

```json
{
  "number-valid": true,
  "security-code": "string",
  "sent": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number-valid|boolean|true|none|True if this a valid phone number|
|security-code|string|true|none|The security code generated, you can save this code to perform your own verification or you can use the <a href="https://www.neutrinoapi.com/api/verify-security-code/">Verify Security Code API</a>|
|sent|boolean|true|none|True if the SMS has been sent|

<h2 id="tocS_Timezone">Timezone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_Timezone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
{
  "abbr": "EDT",
  "date": "2021-01-01",
  "id": "America/New_York",
  "name": "Eastern Daylight Time",
  "offset": "string",
  "time": "12:30:00.00"
}
```

Map containing timezone details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abbr|string|true|none|The time zone abbreviation|
|date|string|true|none|The current date at the time zone (ISO 8601 format 'YYYY-MM-DD')|
|id|string|true|none|The time zone ID as per the IANA time zone database (tzdata)|
|name|string|true|none|The full time zone name|
|offset|string|true|none|The UTC offset for the time zone (ISO 8601 format '±hh:mm')|
|time|string|true|none|The current time at the time zone (ISO 8601 format 'hh:mm:ss.sss')|

<h2 id="tocS_UALookupResponse">UALookupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaualookupresponse"></a>
<a id="schema_UALookupResponse"></a>
<a id="tocSualookupresponse"></a>
<a id="tocsualookupresponse"></a>

```json
{
  "browser-engine": "string",
  "browser-release": "string",
  "device-brand": "string",
  "device-height-px": 0,
  "device-model": "string",
  "device-model-code": "string",
  "device-pixel-ratio": 0,
  "device-ppi": 0,
  "device-price": 0,
  "device-release": "string",
  "device-resolution": "string",
  "device-width-px": 0,
  "is-mobile": true,
  "is-webview": true,
  "name": "string",
  "os": "string",
  "os-family": "string",
  "os-version": "string",
  "os-version-major": "string",
  "type": "string",
  "ua": "string",
  "version": "string",
  "version-major": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|browser-engine|string|true|none|If the client is a web browser which underlying browser engine does it use|
|browser-release|string|true|none|If the client is a web browser which year was this browser version released|
|device-brand|string|true|none|The device brand / manufacturer|
|device-height-px|number(double)|true|none|The device display height in CSS 'px'|
|device-model|string|true|none|The device model|
|device-model-code|string|true|none|The device model code|
|device-pixel-ratio|number(double)|true|none|The device display pixel ratio (the ratio of the resolution in physical pixels to the resolution in CSS pixels)|
|device-ppi|number(double)|true|none|The device display PPI (pixels per inch)|
|device-price|number(double)|true|none|The average device price on release in USD|
|device-release|string|true|none|The year when this device model was released|
|device-resolution|string|true|none|The device display resolution in physical pixels (e.g. 720x1280)|
|device-width-px|number(double)|true|none|The device display width in CSS 'px'|
|is-mobile|boolean|true|none|Is this a mobile device (e.g. a phone or tablet)|
|is-webview|boolean|true|none|Is this a WebView / embedded software client|
|name|string|true|none|The client software name|
|os|string|true|none|The full operating system name|
|os-family|string|true|none|The operating system family. The major OS families are: Android, Windows, macOS, iOS, Linux|
|os-version|string|true|none|The operating system full version|
|os-version-major|string|true|none|The operating system major version|
|type|string|true|none|The user agent type, possible values are: <br> <ul> <li>desktop</li> <li>phone</li> <li>tablet</li> <li>wearable</li> <li>tv</li> <li>console</li> <li>email</li> <li>library</li> <li>robot</li> <li>unknown</li> </ul>|
|ua|string|true|none|The user agent string|
|version|string|true|none|The client software full version|
|version-major|string|true|none|The client software major version|

<h2 id="tocS_URLInfoResponse">URLInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaurlinforesponse"></a>
<a id="schema_URLInfoResponse"></a>
<a id="tocSurlinforesponse"></a>
<a id="tocsurlinforesponse"></a>

```json
{
  "content": "string",
  "content-encoding": "string",
  "content-size": 0,
  "content-type": "string",
  "http-ok": true,
  "http-redirect": true,
  "http-status": 0,
  "http-status-message": 0,
  "is-error": true,
  "is-timeout": true,
  "language-code": "string",
  "load-time": 0,
  "query": {
    "property1": "string",
    "property2": "string"
  },
  "real": true,
  "server-city": "string",
  "server-country": "string",
  "server-country-code": "string",
  "server-hostname": "string",
  "server-ip": "string",
  "server-name": "string",
  "server-region": "string",
  "title": "string",
  "url": "string",
  "url-path": "string",
  "url-port": 0,
  "url-protocol": "string",
  "valid": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|The actual content this URL responded with. Only set if the 'fetch-content' option was used|
|content-encoding|string|true|none|The encoding format the URL uses|
|content-size|integer(int32)|true|none|The size of the URL content in bytes|
|content-type|string|true|none|The content-type this URL serves|
|http-ok|boolean|true|none|True if this URL responded with an HTTP OK (200) status|
|http-redirect|boolean|true|none|True if this URL responded with an HTTP redirect|
|http-status|integer(int32)|true|none|The HTTP status code this URL responded with. An HTTP status of 0 indicates a network level issue|
|http-status-message|integer(int32)|true|none|The HTTP status message assoicated with the status code|
|is-error|boolean|true|none|True if an error occurred while loading the URL. This includes network errors, TLS errors and timeouts|
|is-timeout|boolean|true|none|True if a timeout occurred while loading the URL. You can set the timeout with the request parameter 'timeout'|
|language-code|string|true|none|The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers|
|load-time|number(double)|true|none|The time taken to load the URL content in seconds|
|query|object|true|none|A key-value map of the URL query paramaters|
|real|boolean|true|none|Is this URL actually serving real content|
|server-city|string|true|none|The servers IP geo-location: full city name (if detectable)|
|server-country|string|true|none|The servers IP geo-location: full country name|
|server-country-code|string|true|none|The servers IP geo-location: ISO 2-letter country code|
|server-hostname|string|true|none|The servers hostname (PTR record)|
|server-ip|string|true|none|The IP address of the server hosting this URL|
|server-name|string|true|none|The name of the server software hosting this URL|
|server-region|string|true|none|The servers IP geo-location: full region name (if detectable)|
|title|string|true|none|The document title|
|url|string|true|none|The fully qualified URL. This may be different to the URL requested if http-redirect is true|
|url-path|string|true|none|The URL path|
|url-port|integer(int32)|true|none|The URL port|
|url-protocol|string|true|none|The URL protocol, usually http or https|
|valid|boolean|true|none|Is this a valid well-formed URL|

<h2 id="tocS_VerifySecurityCodeResponse">VerifySecurityCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifysecuritycoderesponse"></a>
<a id="schema_VerifySecurityCodeResponse"></a>
<a id="tocSverifysecuritycoderesponse"></a>
<a id="tocsverifysecuritycoderesponse"></a>

```json
{
  "verified": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verified|boolean|true|none|True if the code is valid|
