<h1 id="api2pdf---pdf-generation-powered-by-aws-lambda">Api2Pdf - PDF Generation, Powered by AWS Lambda v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


# Introduction
[Api2Pdf](https://www.api2pdf.com) is a powerful PDF generation API with no rate limits or file size constraints. Api2Pdf runs on AWS Lambda, a serverless architecture powered by Amazon to scale to millions of requests while being up to 90% cheaper than alternatives. **Supports wkhtmltopdf, Headless Chrome, LibreOffice, and PDF Merge.** You can also generate barcodes with ZXING (Zebra Crossing).
# SDKs & Client Libraries
We've made a number of open source libraries available for the API
- Python: [https://github.com/api2pdf/api2pdf.python](https://github.com/api2pdf/api2pdf.python)
- .NET: [https://github.com/api2pdf/api2pdf.dotnet](https://github.com/api2pdf/api2pdf.dotnet)
- Nodejs: [https://github.com/api2pdf/api2pdf.node](https://github.com/api2pdf/api2pdf.node)
- PHP: [https://github.com/Api2Pdf/api2pdf.php](https://github.com/Api2Pdf/api2pdf.php)
- Ruby: (Coming soon)
# Authorization
Create an account at [portal.api2pdf.com](https://portal.api2pdf.com/register) to get an API key.

**Authorize your API calls**
- GET requests, include apikey=YOUR-API-KEY as a query string parameter
- POST requests, add **Authorization** to your header.
``` Authorization: YOUR-API-KEY ```

# Quickstart
If you are looking for just a quick call to grab PDFs of a URL, you can do a GET request like:
``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ```

For more advanced usage and settings, see the API specification below.

Base URLs:

* <a href="https://v2018.api2pdf.com">https://v2018.api2pdf.com</a> - Api2Pdf.com API

Email: <a href="mailto:support@api2pdf.com">Support</a> 
License: <a href="https://creativecommons.org/licenses/by/4.0/legalcode">Creative Commons</a>

<a href="https://www.api2pdf.com">Find out more about Api2Pdf</a>

# Authentication

* API Key (HeaderApiKey)
    - Parameter Name: **Authorization**, in: header.

* API Key (QueryApiKey)
    - Parameter Name: **apikey**, in: query.

<h1 id="api2pdf---pdf-generation-powered-by-aws-lambda-headless-chrome">Headless Chrome</h1>

## Convert raw HTML to PDF

<a id="opIdchromeFromHtmlPost"></a>

> Code samples

```bash
curl https://example.com/chrome/html \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fileName": "test.pdf",
    "html": "<p>Hello World</p>",
    "inlinePdf": true,
    "options": {
      "landscape": "true",
      "printBackground": false
    }
  }'
```

`POST /chrome/html`

Convert HTML to a PDF using Headless Chrome on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

> Body parameter

```json
{
  "fileName": "test.pdf",
  "html": "<p>Hello World</p>",
  "inlinePdf": true,
  "options": {
    "landscape": "true",
    "printBackground": false
  }
}
```

<h3 id="convert-raw-html-to-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChromeHtmlToPdfRequest](#schemachromehtmltopdfrequest)|false|A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:<br>- `html` *(string, required)* - raw HTML to convert to PDF<br>- `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.<br>- `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.<br>- `options` *(object, optional)* - Include advanced Headless Chrome options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-headless-chrome/).|
|» fileName|body|string|false|none|
|» html|body|string(html)|true|none|
|» inlinePdf|body|boolean|false|none|
|» options|body|[ChromeAdvancedOptions](#schemachromeadvancedoptions)|false|none|

> Example responses

> 200 Response

```json
{
  "cost": 0.0007979,
  "mbIn": 0.06463,
  "mbOut": 0.73327,
  "pdf": "https://link-to-your-pdf",
  "success": true
}
```

> 401 Response

```json
{
  "reason": "Source website could not be found",
  "success": false
}
```

<h3 id="convert-raw-html-to-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the url to the PDF and other meta data|[ApiResponseSuccess](#schemaapiresponsesuccess)|
|401|Unauthorized|Failed to generate PDF|[ApiResponseFailure](#schemaapiresponsefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HeaderApiKey
</aside>

## Convert URL to PDF

<a id="opIdchromeFromUrlGET"></a>

> Code samples

```bash
curl "https://example.com/chrome/url?url=string&apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /chrome/url`

Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ``` 

<h3 id="convert-url-to-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|Url of the page to convert to PDF. Must start with http:// or https://.|
|output|query|string|false|Specify output=json to receive a JSON output. Defaults to PDF file.|

> Example responses

> 200 Response

```json
{
  "cost": 0.0007979,
  "mbIn": 0.06463,
  "mbOut": 0.73327,
  "pdf": "https://link-to-your-pdf",
  "success": true
}
```

> 401 Response

```json
{
  "reason": "Source website could not be found",
  "success": false
}
```

<h3 id="convert-url-to-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A PDF file or a JSON object depending on the `output` query parameter|[ApiResponseSuccess](#schemaapiresponsesuccess)|
|401|Unauthorized|Failed to generate PDF|[ApiResponseFailure](#schemaapiresponsefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
QueryApiKey
</aside>

## Convert URL to PDF

<a id="opIdchromeFromUrlPost"></a>

> Code samples

```bash
curl https://example.com/chrome/url \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fileName": "test.pdf",
    "inlinePdf": true,
    "options": {
      "landscape": "true",
      "printBackground": false
    },
    "url": "https://www.github.com"
  }'
```

`POST /chrome/url`

Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

> Body parameter

```json
{
  "fileName": "test.pdf",
  "inlinePdf": true,
  "options": {
    "landscape": "true",
    "printBackground": false
  },
  "url": "https://www.github.com"
}
```

<h3 id="convert-url-to-pdf-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChromeUrlToPdfRequest](#schemachromeurltopdfrequest)|false|A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:<br>- `url` *(string, required)* - Url to the web page to convert to PDF<br>- `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.<br>- `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.<br>- `options` *(object, optional)* - Include advanced Headless Chrome options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-headless-chrome/).|
|» fileName|body|string|false|none|
|» inlinePdf|body|boolean|false|none|
|» options|body|[ChromeAdvancedOptions](#schemachromeadvancedoptions)|false|none|
|» url|body|string(url)|true|none|

> Example responses

> 200 Response

```json
{
  "cost": 0.0007979,
  "mbIn": 0.06463,
  "mbOut": 0.73327,
  "pdf": "https://link-to-your-pdf",
  "success": true
}
```

> 401 Response

```json
{
  "reason": "Source website could not be found",
  "success": false
}
```

<h3 id="convert-url-to-pdf-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the url to the PDF and other meta data|[ApiResponseSuccess](#schemaapiresponsesuccess)|
|401|Unauthorized|Failed to generate PDF|[ApiResponseFailure](#schemaapiresponsefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HeaderApiKey
</aside>

<h1 id="api2pdf---pdf-generation-powered-by-aws-lambda-libreoffice">LibreOffice</h1>

## Convert office document or image to PDF

<a id="opIdlibreConvertPost"></a>

> Code samples

```bash
curl https://example.com/libreoffice/convert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fileName": "test.pdf",
    "inlinePdf": true,
    "url": "https://www.api2pdf.com/wp-content/themes/api2pdf/assets/samples/sample-word-doc.docx"
  }'
```

`POST /libreoffice/convert`

Convert an office document (Word, Excel, Powerpoint) or an image (jpg, gif, png) to a PDF using LibreOffice on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

> Body parameter

```json
{
  "fileName": "test.pdf",
  "inlinePdf": true,
  "url": "https://www.api2pdf.com/wp-content/themes/api2pdf/assets/samples/sample-word-doc.docx"
}
```

<h3 id="convert-office-document-or-image-to-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LibreOfficeConvertRequest](#schemalibreofficeconvertrequest)|false|A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:<br>- `url` *(string, required)* - A direct URL to the file. Api2Pdf will consume the file at that URL and then convert it.<br>- `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.<br>- `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified. |
|» fileName|body|string|false|none|
|» inlinePdf|body|boolean|false|none|
|» url|body|string(url)|true|none|

> Example responses

> 200 Response

```json
{
  "cost": 0.0007979,
  "mbIn": 0.06463,
  "mbOut": 0.73327,
  "pdf": "https://link-to-your-pdf",
  "success": true
}
```

> 401 Response

```json
{
  "reason": "Source website could not be found",
  "success": false
}
```

<h3 id="convert-office-document-or-image-to-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the url to the PDF and other meta data|[ApiResponseSuccess](#schemaapiresponsesuccess)|
|401|Unauthorized|Failed to generate PDF|[ApiResponseFailure](#schemaapiresponsefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HeaderApiKey
</aside>

<h1 id="api2pdf---pdf-generation-powered-by-aws-lambda-merge-combine-pdfs">Merge / Combine Pdfs</h1>

## Merge multiple PDFs together

<a id="opIdmergePost"></a>

> Code samples

```bash
curl https://example.com/merge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fileName": "test.pdf",
    "inlinePdf": true,
    "urls": [
      "link-to-pdf1",
      "link-to-pdf2",
      "link-to-pdf3"
    ]
  }'
```

`POST /merge`

Merge two or more PDFs together on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

> Body parameter

```json
{
  "fileName": "test.pdf",
  "inlinePdf": true,
  "urls": [
    "link-to-pdf1",
    "link-to-pdf2",
    "link-to-pdf3"
  ]
}
```

<h3 id="merge-multiple-pdfs-together-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MergeRequest](#schemamergerequest)|false|A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:<br>- `urls` *(array of urls, required)* - A JSON array of direct URLs to PDFs. Api2Pdf will consume the PDF files in the list and then merge them all together..<br>- `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.<br>- `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified. |
|» fileName|body|string|false|none|
|» inlinePdf|body|boolean|false|none|
|» urls|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "cost": 0.0007979,
  "mbIn": 0.06463,
  "mbOut": 0.73327,
  "pdf": "https://link-to-your-pdf",
  "success": true
}
```

> 401 Response

```json
{
  "reason": "Source website could not be found",
  "success": false
}
```

<h3 id="merge-multiple-pdfs-together-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the url to the PDF and other meta data|[ApiResponseSuccess](#schemaapiresponsesuccess)|
|401|Unauthorized|Failed to generate PDF|[ApiResponseFailure](#schemaapiresponsefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HeaderApiKey
</aside>

<h1 id="api2pdf---pdf-generation-powered-by-aws-lambda-wkhtmltopdf">wkhtmltopdf</h1>

## Convert raw HTML to PDF

<a id="opIdwkhtmltopdfFromHtmlPost"></a>

> Code samples

```bash
curl https://example.com/wkhtmltopdf/html \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fileName": "test.pdf",
    "html": "<p>Hello World</p>",
    "inlinePdf": true,
    "options": {
      "orientation": "landscape",
      "pageSize": "A4"
    }
  }'
```

`POST /wkhtmltopdf/html`

Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

> Body parameter

```json
{
  "fileName": "test.pdf",
  "html": "<p>Hello World</p>",
  "inlinePdf": true,
  "options": {
    "orientation": "landscape",
    "pageSize": "A4"
  }
}
```

<h3 id="convert-raw-html-to-pdf-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WkHtmlToPdfHtmlToPdfRequest](#schemawkhtmltopdfhtmltopdfrequest)|false|A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:<br>- `html` *(string, required)* - raw HTML to convert to PDF<br>- `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.<br>- `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.<br>- `options` *(object, optional)* - Include advanced WkHtmlToPdf options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-wkhtmltopdf/).|
|» fileName|body|string|false|none|
|» html|body|string(html)|true|none|
|» inlinePdf|body|boolean|false|none|
|» options|body|[WkHtmlToPdfAdvancedOptions](#schemawkhtmltopdfadvancedoptions)|false|none|

> Example responses

> 200 Response

```json
{
  "cost": 0.0007979,
  "mbIn": 0.06463,
  "mbOut": 0.73327,
  "pdf": "https://link-to-your-pdf",
  "success": true
}
```

> 401 Response

```json
{
  "reason": "Source website could not be found",
  "success": false
}
```

<h3 id="convert-raw-html-to-pdf-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the url to the PDF and other meta data|[ApiResponseSuccess](#schemaapiresponsesuccess)|
|401|Unauthorized|Failed to generate PDF|[ApiResponseFailure](#schemaapiresponsefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HeaderApiKey
</aside>

## Convert URL to PDF

<a id="opIdwkhtmltopdfFromUrlGET"></a>

> Code samples

```bash
curl "https://example.com/wkhtmltopdf/url?url=string&apikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /wkhtmltopdf/url`

Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ``` 

<h3 id="convert-url-to-pdf-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|Url of the page to convert to PDF. Must start with http:// or https://.|
|output|query|string|false|Specify output=json to receive a JSON output. Defaults to PDF file.|

> Example responses

> 200 Response

```json
{
  "cost": 0.0007979,
  "mbIn": 0.06463,
  "mbOut": 0.73327,
  "pdf": "https://link-to-your-pdf",
  "success": true
}
```

> 401 Response

```json
{
  "reason": "Source website could not be found",
  "success": false
}
```

<h3 id="convert-url-to-pdf-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A PDF file or a JSON object depending on the `output` query parameter|[ApiResponseSuccess](#schemaapiresponsesuccess)|
|401|Unauthorized|Failed to generate PDF|[ApiResponseFailure](#schemaapiresponsefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
QueryApiKey
</aside>

## Convert URL to PDF

<a id="opIdwkhtmltopdfFromUrlPost"></a>

> Code samples

```bash
curl https://example.com/wkhtmltopdf/url \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fileName": "test.pdf",
    "inlinePdf": true,
    "options": {
      "orientation": "landscape",
      "pageSize": "A4"
    },
    "url": "https://www.github.com"
  }'
```

`POST /wkhtmltopdf/url`

Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

> Body parameter

```json
{
  "fileName": "test.pdf",
  "inlinePdf": true,
  "options": {
    "orientation": "landscape",
    "pageSize": "A4"
  },
  "url": "https://www.github.com"
}
```

<h3 id="convert-url-to-pdf-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WkHtmlToPdfUrlToPdfRequest](#schemawkhtmltopdfurltopdfrequest)|false|A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:<br>- `url` *(string, required)* - Url to the web page to convert to PDF<br>- `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.<br>- `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.<br>- `options` *(object, optional)* - Include advanced WkHtmlToPdf options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-wkhtmltopdf/).|
|» fileName|body|string|false|none|
|» inlinePdf|body|boolean|false|none|
|» options|body|[WkHtmlToPdfAdvancedOptions](#schemawkhtmltopdfadvancedoptions)|false|none|
|» url|body|string(url)|true|none|

> Example responses

> 200 Response

```json
{
  "cost": 0.0007979,
  "mbIn": 0.06463,
  "mbOut": 0.73327,
  "pdf": "https://link-to-your-pdf",
  "success": true
}
```

> 401 Response

```json
{
  "reason": "Source website could not be found",
  "success": false
}
```

<h3 id="convert-url-to-pdf-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the url to the PDF and other meta data|[ApiResponseSuccess](#schemaapiresponsesuccess)|
|401|Unauthorized|Failed to generate PDF|[ApiResponseFailure](#schemaapiresponsefailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
HeaderApiKey
</aside>

<h1 id="api2pdf---pdf-generation-powered-by-aws-lambda-zxing-zebra-crossing-bar-codes">ZXING (Zebra Crossing) Bar Codes</h1>

## Generate bar codes and QR codes with ZXING.

<a id="opIdzebraGET"></a>

> Code samples

```bash
curl "https://example.com/zebra?format=string&value=string&apikey=${API_KEY}"
```

`GET /zebra`

See full list of options and documentation [here](https://www.api2pdf.com/documentation/advanced-options-zxing-zebra-crossing-barcodes/)
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/zebra?format={format}&apikey={YourApiKey}&value={YourText} ``` 

<h3 id="generate-bar-codes-and-qr-codes-with-zxing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|true|Most common is CODE_39 or QR_CODE|
|value|query|string|true|Specify the text value you want to convert|
|showlabel|query|boolean|false|Show label of text below barcode|
|height|query|integer|false|Height of the barcode generated image|
|width|query|integer|false|Width of the barcode generated image|

<h3 id="generate-bar-codes-and-qr-codes-with-zxing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An image of the generated barcode or QR code|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
QueryApiKey
</aside>

# Schemas

<h2 id="tocS_ApiResponseFailure">ApiResponseFailure</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponsefailure"></a>
<a id="schema_ApiResponseFailure"></a>
<a id="tocSapiresponsefailure"></a>
<a id="tocsapiresponsefailure"></a>

```json
{
  "reason": "Source website could not be found",
  "success": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason for the PDF generation failure|
|success|boolean|false|none|Will be false if the operation failed|

<h2 id="tocS_ApiResponseSuccess">ApiResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponsesuccess"></a>
<a id="schema_ApiResponseSuccess"></a>
<a id="tocSapiresponsesuccess"></a>
<a id="tocsapiresponsesuccess"></a>

```json
{
  "cost": 0.0007979,
  "mbIn": 0.06463,
  "mbOut": 0.73327,
  "pdf": "https://link-to-your-pdf",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|number|false|none|Cost of the operation (mbIn + mbOut) * $.001|
|mbIn|number|false|none|The amount of megabytes of bandwidth used to process the pdf|
|mbOut|number|false|none|The amount of megabytes of bandwidth generated from the resulting pdf|
|pdf|string|false|none|A url to the PDF that will exist only for 24 hours|
|success|boolean|false|none|Will be true if the operation suceeded|

<h2 id="tocS_ChromeAdvancedOptions">ChromeAdvancedOptions</h2>
<!-- backwards compatibility -->
<a id="schemachromeadvancedoptions"></a>
<a id="schema_ChromeAdvancedOptions"></a>
<a id="tocSchromeadvancedoptions"></a>
<a id="tocschromeadvancedoptions"></a>

```json
{
  "landscape": "true",
  "printBackground": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|landscape|string|false|none|none|
|printBackground|boolean|false|none|none|

<h2 id="tocS_ChromeHtmlToPdfRequest">ChromeHtmlToPdfRequest</h2>
<!-- backwards compatibility -->
<a id="schemachromehtmltopdfrequest"></a>
<a id="schema_ChromeHtmlToPdfRequest"></a>
<a id="tocSchromehtmltopdfrequest"></a>
<a id="tocschromehtmltopdfrequest"></a>

```json
{
  "fileName": "test.pdf",
  "html": "<p>Hello World</p>",
  "inlinePdf": true,
  "options": {
    "landscape": "true",
    "printBackground": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileName|string|false|none|none|
|html|string(html)|true|none|none|
|inlinePdf|boolean|false|none|none|
|options|[ChromeAdvancedOptions](#schemachromeadvancedoptions)|false|none|none|

<h2 id="tocS_ChromeUrlToPdfRequest">ChromeUrlToPdfRequest</h2>
<!-- backwards compatibility -->
<a id="schemachromeurltopdfrequest"></a>
<a id="schema_ChromeUrlToPdfRequest"></a>
<a id="tocSchromeurltopdfrequest"></a>
<a id="tocschromeurltopdfrequest"></a>

```json
{
  "fileName": "test.pdf",
  "inlinePdf": true,
  "options": {
    "landscape": "true",
    "printBackground": false
  },
  "url": "https://www.github.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileName|string|false|none|none|
|inlinePdf|boolean|false|none|none|
|options|[ChromeAdvancedOptions](#schemachromeadvancedoptions)|false|none|none|
|url|string(url)|true|none|none|

<h2 id="tocS_LibreOfficeConvertRequest">LibreOfficeConvertRequest</h2>
<!-- backwards compatibility -->
<a id="schemalibreofficeconvertrequest"></a>
<a id="schema_LibreOfficeConvertRequest"></a>
<a id="tocSlibreofficeconvertrequest"></a>
<a id="tocslibreofficeconvertrequest"></a>

```json
{
  "fileName": "test.pdf",
  "inlinePdf": true,
  "url": "https://www.api2pdf.com/wp-content/themes/api2pdf/assets/samples/sample-word-doc.docx"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileName|string|false|none|none|
|inlinePdf|boolean|false|none|none|
|url|string(url)|true|none|none|

<h2 id="tocS_MergeRequest">MergeRequest</h2>
<!-- backwards compatibility -->
<a id="schemamergerequest"></a>
<a id="schema_MergeRequest"></a>
<a id="tocSmergerequest"></a>
<a id="tocsmergerequest"></a>

```json
{
  "fileName": "test.pdf",
  "inlinePdf": true,
  "urls": [
    "link-to-pdf1",
    "link-to-pdf2",
    "link-to-pdf3"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileName|string|false|none|none|
|inlinePdf|boolean|false|none|none|
|urls|[string]|true|none|none|

<h2 id="tocS_WkHtmlToPdfAdvancedOptions">WkHtmlToPdfAdvancedOptions</h2>
<!-- backwards compatibility -->
<a id="schemawkhtmltopdfadvancedoptions"></a>
<a id="schema_WkHtmlToPdfAdvancedOptions"></a>
<a id="tocSwkhtmltopdfadvancedoptions"></a>
<a id="tocswkhtmltopdfadvancedoptions"></a>

```json
{
  "orientation": "landscape",
  "pageSize": "A4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orientation|string|false|none|none|
|pageSize|string|false|none|none|

<h2 id="tocS_WkHtmlToPdfHtmlToPdfRequest">WkHtmlToPdfHtmlToPdfRequest</h2>
<!-- backwards compatibility -->
<a id="schemawkhtmltopdfhtmltopdfrequest"></a>
<a id="schema_WkHtmlToPdfHtmlToPdfRequest"></a>
<a id="tocSwkhtmltopdfhtmltopdfrequest"></a>
<a id="tocswkhtmltopdfhtmltopdfrequest"></a>

```json
{
  "fileName": "test.pdf",
  "html": "<p>Hello World</p>",
  "inlinePdf": true,
  "options": {
    "orientation": "landscape",
    "pageSize": "A4"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileName|string|false|none|none|
|html|string(html)|true|none|none|
|inlinePdf|boolean|false|none|none|
|options|[WkHtmlToPdfAdvancedOptions](#schemawkhtmltopdfadvancedoptions)|false|none|none|

<h2 id="tocS_WkHtmlToPdfUrlToPdfRequest">WkHtmlToPdfUrlToPdfRequest</h2>
<!-- backwards compatibility -->
<a id="schemawkhtmltopdfurltopdfrequest"></a>
<a id="schema_WkHtmlToPdfUrlToPdfRequest"></a>
<a id="tocSwkhtmltopdfurltopdfrequest"></a>
<a id="tocswkhtmltopdfurltopdfrequest"></a>

```json
{
  "fileName": "test.pdf",
  "inlinePdf": true,
  "options": {
    "orientation": "landscape",
    "pageSize": "A4"
  },
  "url": "https://www.github.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileName|string|false|none|none|
|inlinePdf|boolean|false|none|none|
|options|[WkHtmlToPdfAdvancedOptions](#schemawkhtmltopdfadvancedoptions)|false|none|none|
|url|string(url)|true|none|none|
