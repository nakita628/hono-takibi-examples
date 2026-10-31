<h1 id="pdfbrokerio-api">PdfBroker.io API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

PdfBroker.io is an api for creating pdf files from Xsl-Fo or Html and other useful pdf utilities.

<a href="https://www.pdfbroker.io/terms">Terms of service</a>
Email: <a href="mailto:support@pdfbroker.io">PdfBroker.io Support</a> 
Web: <a href="https://www.pdfbroker.io/docs">PdfBroker.io Support</a> 

# Authentication

- oAuth2 authentication.

    - Flow: clientCredentials
    - Token URL = [https://login.pdfbroker.io/connect/token](https://login.pdfbroker.io/connect/token)

|Scope|Scope Description|
|---|---|
|pdfbroker|Scope to access the PdfBroker API.|

<h1 id="pdfbrokerio-api-pdf">Pdf</h1>

## Basic method to verify api is up and running

> Code samples

```bash
curl https://example.com/api/pdf \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/pdf`

> Example responses

> 400 Response

```json
"{\r\n  \"description\": \"Always empty in the public response, used for internal error transport to logs\",\r\n  \"statusCode\": 400,\r\n  \"errorMessage\": \"The error message provided to client\"\r\n}"
```

<h3 id="basic-method-to-verify-api-is-up-and-running-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|If any error occurs parsing input|[ErrorResponseDto](#schemaerrorresponsedto)|
|415|Unsupported Media Type|If content-type of request is not set to multipart/form-data or application/json|None|
|429|Too Many Requests|If you reach the monthly request limit for your subscription plan|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: pdfbroker )
</aside>

## Concatenate multiple pdf files into single pdf file..

> Code samples

```bash
curl https://example.com/api/pdf/pdfconcat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '"{\r\n  \"pdfDocumentsAsBase64String\": [\r\n    \"<Encode your pdf documents as Base64 encoded string>\",\r\n    \"<Encode your pdf documents as Base64 encoded string>\"\r\n  ]\r\n}"'
```

`POST /api/pdf/pdfconcat`

> Body parameter

```json
"{\r\n  \"pdfDocumentsAsBase64String\": [\r\n    \"<Encode your pdf documents as Base64 encoded string>\",\r\n    \"<Encode your pdf documents as Base64 encoded string>\"\r\n  ]\r\n}"
```

<h3 id="concatenate-multiple-pdf-files-into-single-pdf-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PdfConcatenationRequestDto](#schemapdfconcatenationrequestdto)|false|PdfConcat Request. Add two or more pdf files and concatenate pages into single pdf document.|
|» PdfDocumentsAsBase64String|body|[string]|false|The list of Pdf documents encoded as Base64 strings.|

> Example responses

> 200 Response

```json
"{\r\n  \"pdfFileBase64String\": \"Base64 encoded pdf file content\",\r\n  \"errorMessage\": \"If any error occured, info will be provided here\"\r\n}"
```

> 400 Response

```json
"{\r\n  \"description\": \"Always empty in the public response, used for internal error transport to logs\",\r\n  \"statusCode\": 400,\r\n  \"errorMessage\": \"The error message provided to client\"\r\n}"
```

<h3 id="concatenate-multiple-pdf-files-into-single-pdf-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json|[PdfResponseDto](#schemapdfresponsedto)|
|400|Bad Request|If any error occurs parsing input|[ErrorResponseDto](#schemaerrorresponsedto)|
|415|Unsupported Media Type|If content-type of request is not set to multipart/form-data or application/json|None|
|429|Too Many Requests|If you reach the monthly request limit for your subscription plan|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: pdfbroker )
</aside>

## Generate an image of to provided pdf file

> Code samples

```bash
curl https://example.com/api/pdf/pdftoimage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '"{\r\n  \"pdfFileBase64String\": \"<Encode your existing PDF document as Base64 encoded string>\",\r\n  \"options\": {\r\n    \"pageNumber\": 1,\r\n    \"imageFormat\": \"image/jpeg\",\r\n    \"horizontalResolution\": 96.0,\r\n    \"verticalResolution\": 96.0,\r\n    \"width\": 0,\r\n    \"height\": 0,\r\n    \"transparent\": false,\r\n    \"jpegQuality\": 90,\r\n    \"pngCompressionLevel\": 6\r\n  }\r\n}"'
```

`POST /api/pdf/pdftoimage`

> Body parameter

```json
"{\r\n  \"pdfFileBase64String\": \"<Encode your existing PDF document as Base64 encoded string>\",\r\n  \"options\": {\r\n    \"pageNumber\": 1,\r\n    \"imageFormat\": \"image/jpeg\",\r\n    \"horizontalResolution\": 96.0,\r\n    \"verticalResolution\": 96.0,\r\n    \"width\": 0,\r\n    \"height\": 0,\r\n    \"transparent\": false,\r\n    \"jpegQuality\": 90,\r\n    \"pngCompressionLevel\": 6\r\n  }\r\n}"
```

<h3 id="generate-an-image-of-to-provided-pdf-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PdfToImageRequestDto](#schemapdftoimagerequestdto)|false|PdfToImage Request. Create an image of a page in an existing pdf document.|
|» Options|body|[PdfToImageOptions](#schemapdftoimageoptions)|false|none|
|» PdfFileBase64String|body|string \| null|false|The pdf file to generate image from, as Base64 encoded string.|

> Example responses

> 200 Response

```json
"{\r\n  \"imageBase64String\": \"Image file base64 encoded. This is a complete data uri, including media type that can be used directly as src on a img-tag e.g.\",\r\n  \"errorMessage\": \"If any error occurred, information will be provided here\"\r\n}"
```

> 400 Response

```json
"{\r\n  \"description\": \"Always empty in the public response, used for internal error transport to logs\",\r\n  \"statusCode\": 400,\r\n  \"errorMessage\": \"The error message provided to client\"\r\n}"
```

<h3 id="generate-an-image-of-to-provided-pdf-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generate an image of the provided pdf file. Either the image file directly or serialized as Json if Accept-header is set to application/json|[ImageResponseDto](#schemaimageresponsedto)|
|400|Bad Request|If any error occurs parsing input|[ErrorResponseDto](#schemaerrorresponsedto)|
|415|Unsupported Media Type|If content-type of request is not set to multipart/form-data or application/json|None|
|429|Too Many Requests|If you reach the monthly request limit for your subscription plan|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: pdfbroker )
</aside>

## Write text on a page in a pdf document.

> Code samples

```bash
curl https://example.com/api/pdf/pdfwritestring \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '"{\r\n  \"pdfFileBase64String\": \"<Encode your existing PDF document as Base64 encoded string>\",\r\n  \"options\": {\r\n    \"text\": \"This is test string\",\r\n    \"textColor\": {\r\n      \"r\": 33,\r\n      \"g\": 34,\r\n      \"b\": 35\r\n    },\r\n    \"font\": {\r\n      \"name\": \"Arial\",\r\n      \"size\": 24.0,\r\n      \"style\": 1\r\n    },\r\n    \"pageNumber\": 3,\r\n    \"xPosition\": 40.0,\r\n    \"yPosition\": -200.0,\r\n    \"xOrigin\": 1,\r\n    \"yOrigin\": 2\r\n  },\r\n  \"fontFileBase64String\": \"<Attach your own TrueTypeFont file if necessary to style text, encoded as Base64 encoded string>\"\r\n}"'
```

`POST /api/pdf/pdfwritestring`

> Body parameter

```json
"{\r\n  \"pdfFileBase64String\": \"<Encode your existing PDF document as Base64 encoded string>\",\r\n  \"options\": {\r\n    \"text\": \"This is test string\",\r\n    \"textColor\": {\r\n      \"r\": 33,\r\n      \"g\": 34,\r\n      \"b\": 35\r\n    },\r\n    \"font\": {\r\n      \"name\": \"Arial\",\r\n      \"size\": 24.0,\r\n      \"style\": 1\r\n    },\r\n    \"pageNumber\": 3,\r\n    \"xPosition\": 40.0,\r\n    \"yPosition\": -200.0,\r\n    \"xOrigin\": 1,\r\n    \"yOrigin\": 2\r\n  },\r\n  \"fontFileBase64String\": \"<Attach your own TrueTypeFont file if necessary to style text, encoded as Base64 encoded string>\"\r\n}"
```

<h3 id="write-text-on-a-page-in-a-pdf-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PdfWriteStringRequestDto](#schemapdfwritestringrequestdto)|false|PdfWriteString Request. Write string on page in pdf document|
|» FontFileBase64String|body|string \| null|false|System fonts are available, but you can provide your own font file to be embedded in the pdf document. Send font as Base64 encoded string.|
|» Options|body|[PdfWriteStringOptions](#schemapdfwritestringoptions)|false|Options for writing string in pdf page;|
|» PdfFileBase64String|body|string \| null|false|The pdf file to add text to, as Base64 encoded string.|

> Example responses

> 200 Response

```json
"{\r\n  \"pdfFileBase64String\": \"Base64 encoded pdf file content\",\r\n  \"errorMessage\": \"If any error occured, info will be provided here\"\r\n}"
```

> 400 Response

```json
"{\r\n  \"description\": \"Always empty in the public response, used for internal error transport to logs\",\r\n  \"statusCode\": 400,\r\n  \"errorMessage\": \"The error message provided to client\"\r\n}"
```

<h3 id="write-text-on-a-page-in-a-pdf-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json|[PdfResponseDto](#schemapdfresponsedto)|
|400|Bad Request|If any error occurs parsing input|[ErrorResponseDto](#schemaerrorresponsedto)|
|415|Unsupported Media Type|If content-type of request is not set to multipart/form-data or application/json|None|
|429|Too Many Requests|If you reach the monthly request limit for your subscription plan|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: pdfbroker )
</aside>

## Generate pdf file from url using the excellent tool wkhtmltopdf.

> Code samples

```bash
curl https://example.com/api/pdf/wkhtmltopdf \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '"{\r\n  \"url\": \"https://www.pdfbroker.io\",\r\n  \"htmlBase64String\": null,\r\n  \"wkHtmlToPdfArguments\": {\r\n    \"grayscale\": \"\",\r\n    \"viewport-size\": \"1280x1024\"\r\n  },\r\n  \"resources\": null\r\n}"'
```

`POST /api/pdf/wkhtmltopdf`

> Body parameter

```json
"{\r\n  \"url\": \"https://www.pdfbroker.io\",\r\n  \"htmlBase64String\": null,\r\n  \"wkHtmlToPdfArguments\": {\r\n    \"grayscale\": \"\",\r\n    \"viewport-size\": \"1280x1024\"\r\n  },\r\n  \"resources\": null\r\n}"
```

<h3 id="generate-pdf-file-from-url-using-the-excellent-tool-wkhtmltopdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WkHtmlToPdfRequestDto](#schemawkhtmltopdfrequestdto)|false|WkHtmlToPdf Request. Generate pdf from html, either from url or base64 encoded html string|
|» HtmlBase64String|body|string \| null|false|Base64 encoded string with html. If property Url is set, it will be used, not HtmlBase64String.|
|» Resources|body|object \| null|false|This is a set of key-value pairs of digital resources like images that is referenced in the HtmlBase64String document. It uses the filename including relative path as key and the data is provided as a Base64 encoded string.|
|» » **additionalProperties**|body|string|false|none|
|» Url|body|string \| null|false|The url to generate pdf from. Url has precedence over HtmlBase64String value if both are set.|
|» WkHtmlToPdfArguments|body|object \| null|false|Command line arguments passed to wkhtmltopdf.|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
"{\r\n  \"pdfFileBase64String\": \"Base64 encoded pdf file content\",\r\n  \"errorMessage\": \"If any error occured, info will be provided here\"\r\n}"
```

> 400 Response

```json
"{\r\n  \"description\": \"Always empty in the public response, used for internal error transport to logs\",\r\n  \"statusCode\": 400,\r\n  \"errorMessage\": \"The error message provided to client\"\r\n}"
```

<h3 id="generate-pdf-file-from-url-using-the-excellent-tool-wkhtmltopdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json|[PdfResponseDto](#schemapdfresponsedto)|
|400|Bad Request|If any error occurs executing request|[ErrorResponseDto](#schemaerrorresponsedto)|
|415|Unsupported Media Type|If content-type of request is not set to application/json|None|
|429|Too Many Requests|If you reach the monthly request limit for your subscription plan|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: pdfbroker )
</aside>

## Create pdf-file from complete XSL-FO document.

> Code samples

```bash
curl https://example.com/api/pdf/xslfo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '"{\r\n  \"foDocumentBase64String\": \"<Encode your XSL-FO document as Base64 encoded string>\",\r\n  \"resources\": {\r\n    \"<Use file name as key, i.e '\''logo.png'\'', which is set as src on fo:external-graphic elements>\": \"<Convert your images to Base64 encoded string>\"\r\n  },\r\n  \"metadata\": {\r\n    \"title\": \"Pdf title metadata can be set with metadata object\",\r\n    \"author\": null,\r\n    \"subject\": null,\r\n    \"keywords\": [\r\n      \"pdf\",\r\n      \"api\"\r\n    ],\r\n    \"enableAdd\": true,\r\n    \"enableCopy\": true,\r\n    \"enableModify\": true,\r\n    \"enablePrinting\": true,\r\n    \"ownerPassword\": null,\r\n    \"userPassword\": null\r\n  }\r\n}"'
```

`POST /api/pdf/xslfo`

> Body parameter

```json
"{\r\n  \"foDocumentBase64String\": \"<Encode your XSL-FO document as Base64 encoded string>\",\r\n  \"resources\": {\r\n    \"<Use file name as key, i.e 'logo.png', which is set as src on fo:external-graphic elements>\": \"<Convert your images to Base64 encoded string>\"\r\n  },\r\n  \"metadata\": {\r\n    \"title\": \"Pdf title metadata can be set with metadata object\",\r\n    \"author\": null,\r\n    \"subject\": null,\r\n    \"keywords\": [\r\n      \"pdf\",\r\n      \"api\"\r\n    ],\r\n    \"enableAdd\": true,\r\n    \"enableCopy\": true,\r\n    \"enableModify\": true,\r\n    \"enablePrinting\": true,\r\n    \"ownerPassword\": null,\r\n    \"userPassword\": null\r\n  }\r\n}"
```

<h3 id="create-pdf-file-from-complete-xsl-fo-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FoRequestDto](#schemaforequestdto)|false|XSL-FO Request, the basic XSL-FO request. Post your XSL-FO document and digital resources, either as 'multipart/form-data' or 'application/json'|
|» FoDocumentBase64String|body|string \| null|false|This is the complete XSL-FO document provided using Base64 encoding.|
|» Metadata|body|[PdfMetadataDto](#schemapdfmetadatadto)|false|Enter meta data for pdf document|
|» Resources|body|object \| null|false|This is a set of key-value pairs of digital resources like images that is referenced in the XSL-FO document. It uses the filename as key and the data is provided as a Base64 encoded string.|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
"{\r\n  \"pdfFileBase64String\": \"Base64 encoded pdf file content\",\r\n  \"errorMessage\": \"If any error occured, info will be provided here\"\r\n}"
```

> 400 Response

```json
"{\r\n  \"description\": \"Always empty in the public response, used for internal error transport to logs\",\r\n  \"statusCode\": 400,\r\n  \"errorMessage\": \"The error message provided to client\"\r\n}"
```

<h3 id="create-pdf-file-from-complete-xsl-fo-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json|[PdfResponseDto](#schemapdfresponsedto)|
|400|Bad Request|If any error occurs parsing input|[ErrorResponseDto](#schemaerrorresponsedto)|
|415|Unsupported Media Type|If content-type of request is not set to multipart/form-data or application/json|None|
|429|Too Many Requests|If you reach the monthly request limit for your subscription plan|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: pdfbroker )
</aside>

## Create pdf-file from transforming xml document with Xsl-Fo transform document.

> Code samples

```bash
curl https://example.com/api/pdf/xslfowithtransform \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '"{\r\n  \"xmlDataDocumentBase64String\": \"<This is the document which contains your data that the XSL-FO transform will be applied on. Send as Base64 encoded string>\",\r\n  \"foDocumentBase64String\": \"<Encode your XSL-FO transform document as Base64 encoded string>\",\r\n  \"resources\": {\r\n    \"<Use file name as key, i.e '\''logo.png'\'', which is set as src on fo:external-graphic elements>\": \"<Convert your images to Base64 encoded string>\"\r\n  },\r\n  \"metadata\": null\r\n}"'
```

`POST /api/pdf/xslfowithtransform`

> Body parameter

```json
"{\r\n  \"xmlDataDocumentBase64String\": \"<This is the document which contains your data that the XSL-FO transform will be applied on. Send as Base64 encoded string>\",\r\n  \"foDocumentBase64String\": \"<Encode your XSL-FO transform document as Base64 encoded string>\",\r\n  \"resources\": {\r\n    \"<Use file name as key, i.e 'logo.png', which is set as src on fo:external-graphic elements>\": \"<Convert your images to Base64 encoded string>\"\r\n  },\r\n  \"metadata\": null\r\n}"
```

<h3 id="create-pdf-file-from-transforming-xml-document-with-xsl-fo-transform-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FoTransformRequestDto](#schemafotransformrequestdto)|false|XSL-FO Transform Request. The XSL-FO is transformed on the supplied xml data document. Post your XSL-FO transform document and xml data document aloing with your digital resources, either as 'multipart/form-data' or 'application/json'|
|» FoDocumentBase64String|body|string \| null|false|This is the complete XSL-FO document provided using Base64 encoding.|
|» Metadata|body|[PdfMetadataDto](#schemapdfmetadatadto)|false|Enter meta data for pdf document|
|» Resources|body|object \| null|false|This is a set of key-value pairs of digital resources like images that is referenced in the XSL-FO document. It uses the filename as key and the data is provided as a Base64 encoded string.|
|» » **additionalProperties**|body|string|false|none|
|» XmlDataDocumentBase64String|body|string \| null|false|This is xml data document on which the XSL-FO transform document is applied. Provided using Base64 encoding.|

> Example responses

> 200 Response

```json
"{\r\n  \"pdfFileBase64String\": \"Base64 encoded pdf file content\",\r\n  \"errorMessage\": \"If any error occured, info will be provided here\"\r\n}"
```

> 400 Response

```json
"{\r\n  \"description\": \"Always empty in the public response, used for internal error transport to logs\",\r\n  \"statusCode\": 400,\r\n  \"errorMessage\": \"The error message provided to client\"\r\n}"
```

<h3 id="create-pdf-file-from-transforming-xml-document-with-xsl-fo-transform-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json|[PdfResponseDto](#schemapdfresponsedto)|
|400|Bad Request|If any error occurs parsing input|[ErrorResponseDto](#schemaerrorresponsedto)|
|415|Unsupported Media Type|If content-type of request is not set to multipart/form-data or application/json|None|
|429|Too Many Requests|If you reach the monthly request limit for your subscription plan|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: pdfbroker )
</aside>

# Schemas

<h2 id="tocS_ColorDto">ColorDto</h2>
<!-- backwards compatibility -->
<a id="schemacolordto"></a>
<a id="schema_ColorDto"></a>
<a id="tocScolordto"></a>
<a id="tocscolordto"></a>

```json
{
  "B": 0,
  "G": 0,
  "R": 0
}
```

Set color

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|B|integer(int32)|false|read-only|Get or sets B value of RGB color|
|G|integer(int32)|false|read-only|Get or sets G value of RGB color|
|R|integer(int32)|false|read-only|Get or sets R value of RGB color|

<h2 id="tocS_ErrorResponseDto">ErrorResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponsedto"></a>
<a id="schema_ErrorResponseDto"></a>
<a id="tocSerrorresponsedto"></a>
<a id="tocserrorresponsedto"></a>

```json
{
  "Description": "string",
  "ErrorMessage": "string",
  "StatusCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string \| null|false|none|none|
|ErrorMessage|string \| null|false|none|If any error occurs the message will be displayed in here|
|StatusCode|integer(int32)|false|none|none|

<h2 id="tocS_FoRequestDto">FoRequestDto</h2>
<!-- backwards compatibility -->
<a id="schemaforequestdto"></a>
<a id="schema_FoRequestDto"></a>
<a id="tocSforequestdto"></a>
<a id="tocsforequestdto"></a>

```json
{
  "FoDocumentBase64String": "string",
  "Metadata": {
    "Author": "string",
    "EnableAdd": true,
    "EnableCopy": true,
    "EnableModify": true,
    "EnablePrinting": true,
    "Keywords": [
      "string"
    ],
    "OwnerPassword": "string",
    "Subject": "string",
    "Title": "string",
    "UserPassword": "string"
  },
  "Resources": {
    "property1": "string",
    "property2": "string"
  }
}
```

The basic request with the XSL-FO document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FoDocumentBase64String|string \| null|false|none|This is the complete XSL-FO document provided using Base64 encoding.|
|Metadata|[PdfMetadataDto](#schemapdfmetadatadto)|false|none|Enter meta data for pdf document|
|Resources|object \| null|false|none|This is a set of key-value pairs of digital resources like images that is referenced in the XSL-FO document. It uses the filename as key and the data is provided as a Base64 encoded string.|

<h2 id="tocS_FoTransformRequestDto">FoTransformRequestDto</h2>
<!-- backwards compatibility -->
<a id="schemafotransformrequestdto"></a>
<a id="schema_FoTransformRequestDto"></a>
<a id="tocSfotransformrequestdto"></a>
<a id="tocsfotransformrequestdto"></a>

```json
{
  "FoDocumentBase64String": "string",
  "Metadata": {
    "Author": "string",
    "EnableAdd": true,
    "EnableCopy": true,
    "EnableModify": true,
    "EnablePrinting": true,
    "Keywords": [
      "string"
    ],
    "OwnerPassword": "string",
    "Subject": "string",
    "Title": "string",
    "UserPassword": "string"
  },
  "Resources": {
    "property1": "string",
    "property2": "string"
  },
  "XmlDataDocumentBase64String": "string"
}
```

The XSL-FO transform document and xml data document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FoDocumentBase64String|string \| null|false|none|This is the complete XSL-FO document provided using Base64 encoding.|
|Metadata|[PdfMetadataDto](#schemapdfmetadatadto)|false|none|Enter meta data for pdf document|
|Resources|object \| null|false|none|This is a set of key-value pairs of digital resources like images that is referenced in the XSL-FO document. It uses the filename as key and the data is provided as a Base64 encoded string.|
|XmlDataDocumentBase64String|string \| null|false|none|This is xml data document on which the XSL-FO transform document is applied. Provided using Base64 encoding.|

<h2 id="tocS_FontDto">FontDto</h2>
<!-- backwards compatibility -->
<a id="schemafontdto"></a>
<a id="schema_FontDto"></a>
<a id="tocSfontdto"></a>
<a id="tocsfontdto"></a>

```json
{
  "Name": "string",
  "Size": 0,
  "Style": 0
}
```

The Font dto object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string \| null|false|read-only|Gets the name of the font|
|Size|number(float)|false|read-only|Gets the size of the font|
|Style|[FontStyle](#schemafontstyle)|false|none|Font style enum representing Regular, Bold, Italic, BoldItalic|

#### Enumerated Values

|Property|Value|
|---|---|
|Style|0|
|Style|1|
|Style|2|
|Style|3|

<h2 id="tocS_FontStyle">FontStyle</h2>
<!-- backwards compatibility -->
<a id="schemafontstyle"></a>
<a id="schema_FontStyle"></a>
<a id="tocSfontstyle"></a>
<a id="tocsfontstyle"></a>

```json
0
```

Font style enum representing Regular, Bold, Italic, BoldItalic

<h2 id="tocS_ImageResponseDto">ImageResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaimageresponsedto"></a>
<a id="schema_ImageResponseDto"></a>
<a id="tocSimageresponsedto"></a>
<a id="tocsimageresponsedto"></a>

```json
{
  "ErrorMessage": "string",
  "ImageBase64String": "string"
}
```

When setting the Accept-header in the request to "application/json" the image file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it's better to use Accept-header "image/jpeg", "image/png" or "image/gif".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorMessage|string \| null|false|none|If any error occurs the message will be displayed in here|
|ImageBase64String|string \| null|false|none|The Base64 encoded string that is the image file. This is a complete data uri, including media type that can be used directly as src on a img-tag e.g.|

<h2 id="tocS_PdfConcatenationRequestDto">PdfConcatenationRequestDto</h2>
<!-- backwards compatibility -->
<a id="schemapdfconcatenationrequestdto"></a>
<a id="schema_PdfConcatenationRequestDto"></a>
<a id="tocSpdfconcatenationrequestdto"></a>
<a id="tocspdfconcatenationrequestdto"></a>

```json
{
  "PdfDocumentsAsBase64String": [
    "string"
  ]
}
```

Request to concatenate a list of Pdf documents to a single Pdf document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PdfDocumentsAsBase64String|[string]|false|none|The list of Pdf documents encoded as Base64 strings.|

<h2 id="tocS_PdfMetadataDto">PdfMetadataDto</h2>
<!-- backwards compatibility -->
<a id="schemapdfmetadatadto"></a>
<a id="schema_PdfMetadataDto"></a>
<a id="tocSpdfmetadatadto"></a>
<a id="tocspdfmetadatadto"></a>

```json
{
  "Author": "string",
  "EnableAdd": true,
  "EnableCopy": true,
  "EnableModify": true,
  "EnablePrinting": true,
  "Keywords": [
    "string"
  ],
  "OwnerPassword": "string",
  "Subject": "string",
  "Title": "string",
  "UserPassword": "string"
}
```

Enter meta data for pdf document

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string \| null|false|none|Pdf document author|
|EnableAdd|boolean|false|none|Enables or disables adding or modifying text annotations and interactive<br>form fields.|
|EnableCopy|boolean|false|none|Enables or disables copying of text and graphics.|
|EnableModify|boolean|false|none|Enables or disables modifying document contents (other than text annotations and <br>interactive form fields).|
|EnablePrinting|boolean|false|none|Enables or disables printing.|
|Keywords|[string]|false|none|Pdf document keywords|
|OwnerPassword|string \| null|false|none|Specifies the owner password that will protect full access to any generated PDF documents.|
|Subject|string \| null|false|none|Pdf document subject|
|Title|string \| null|false|none|Pdf document title|
|UserPassword|string \| null|false|none|Specifies the user password that will protect access to any generated PDF documents.|

<h2 id="tocS_PdfResponseDto">PdfResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemapdfresponsedto"></a>
<a id="schema_PdfResponseDto"></a>
<a id="tocSpdfresponsedto"></a>
<a id="tocspdfresponsedto"></a>

```json
{
  "ErrorMessage": "string",
  "PdfFileBase64String": "string"
}
```

When setting the Accept-header in the request to "application/json" the content of the pdf file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it's better to use Accept-header "application/pdf".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorMessage|string \| null|false|none|If any error occurs the message will be displayed in here|
|PdfFileBase64String|string \| null|false|none|The Base64 encoded string that is the pdf file.|

<h2 id="tocS_PdfToImageOptions">PdfToImageOptions</h2>
<!-- backwards compatibility -->
<a id="schemapdftoimageoptions"></a>
<a id="schema_PdfToImageOptions"></a>
<a id="tocSpdftoimageoptions"></a>
<a id="tocspdftoimageoptions"></a>

```json
{
  "Height": 0,
  "HorizontalResolution": 0,
  "ImageFormat": "string",
  "JpegQuality": 0,
  "PageNumber": 0,
  "PngCompressionLevel": 0,
  "Transparent": true,
  "VerticalResolution": 0,
  "Width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Height|integer(int32)|false|none|Set the height of the output image, default value is width of source document. To scale height, and keeping proportions, do not set width;|
|HorizontalResolution|number(double)|false|none|Set the horizontal resolution, default is 96 dpi;|
|ImageFormat|string \| null|false|none|Valid options are "image/jpeg", "image/png" or "image/gif". Default is "image/png"|
|JpegQuality|integer(int32)|false|none|Sets the quality of jpeg images, range 0 to 100, default is 75|
|PageNumber|integer(int32)|false|none|Which page of the pdf file to generate image from, default is first page|
|PngCompressionLevel|integer(int32)|false|none|Sets the png compression level, range 1 - 9, default is 6|
|Transparent|boolean|false|none|Keep the background of the image transparent. This setting is not available in JPEG-files, since transparency is not supported in the JPEG format.|
|VerticalResolution|number(double)|false|none|Set the vertical resolution, default is 96 dpi;|
|Width|integer(int32)|false|none|Set the width of the output image, default value is width of source document. To scale width, and keeping proportions, do not set height;|

<h2 id="tocS_PdfToImageRequestDto">PdfToImageRequestDto</h2>
<!-- backwards compatibility -->
<a id="schemapdftoimagerequestdto"></a>
<a id="schema_PdfToImageRequestDto"></a>
<a id="tocSpdftoimagerequestdto"></a>
<a id="tocspdftoimagerequestdto"></a>

```json
{
  "Options": {
    "Height": 0,
    "HorizontalResolution": 0,
    "ImageFormat": "string",
    "JpegQuality": 0,
    "PageNumber": 0,
    "PngCompressionLevel": 0,
    "Transparent": true,
    "VerticalResolution": 0,
    "Width": 0
  },
  "PdfFileBase64String": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|[PdfToImageOptions](#schemapdftoimageoptions)|false|none|none|
|PdfFileBase64String|string \| null|false|none|The pdf file to generate image from, as Base64 encoded string.|

<h2 id="tocS_PdfWriteStringOptions">PdfWriteStringOptions</h2>
<!-- backwards compatibility -->
<a id="schemapdfwritestringoptions"></a>
<a id="schema_PdfWriteStringOptions"></a>
<a id="tocSpdfwritestringoptions"></a>
<a id="tocspdfwritestringoptions"></a>

```json
{
  "Font": {
    "Name": "string",
    "Size": 0,
    "Style": 0
  },
  "PageNumber": 0,
  "Text": "string",
  "TextColor": {
    "B": 0,
    "G": 0,
    "R": 0
  },
  "XOrigin": 0,
  "XPosition": 0,
  "YOrigin": 0,
  "YPosition": 0
}
```

Options for writing string in pdf page;

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Font|[FontDto](#schemafontdto)|false|none|The Font dto object|
|PageNumber|integer(int32)|false|none|Get or set which page in the pdf to write on, default is first page.|
|Text|string \| null|false|none|The text to write in the pdf|
|TextColor|[ColorDto](#schemacolordto)|false|none|Set color|
|XOrigin|[XOriginPoint](#schemaxoriginpoint)|false|none|none|
|XPosition|number(float)|false|none|Get or set the X axis position on where to write string, in reference to XOrigin.|
|YOrigin|[YOriginPoint](#schemayoriginpoint)|false|none|none|
|YPosition|number(float)|false|none|Get or set the Y axis position on where to write string, in reference to YOrigin.|

#### Enumerated Values

|Property|Value|
|---|---|
|XOrigin|0|
|XOrigin|1|
|XOrigin|2|
|YOrigin|0|
|YOrigin|1|
|YOrigin|2|

<h2 id="tocS_PdfWriteStringRequestDto">PdfWriteStringRequestDto</h2>
<!-- backwards compatibility -->
<a id="schemapdfwritestringrequestdto"></a>
<a id="schema_PdfWriteStringRequestDto"></a>
<a id="tocSpdfwritestringrequestdto"></a>
<a id="tocspdfwritestringrequestdto"></a>

```json
{
  "FontFileBase64String": "string",
  "Options": {
    "Font": {
      "Name": "string",
      "Size": 0,
      "Style": 0
    },
    "PageNumber": 0,
    "Text": "string",
    "TextColor": {
      "B": 0,
      "G": 0,
      "R": 0
    },
    "XOrigin": 0,
    "XPosition": 0,
    "YOrigin": 0,
    "YPosition": 0
  },
  "PdfFileBase64String": "string"
}
```

The request dto object to write a string on pdf page

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FontFileBase64String|string \| null|false|none|System fonts are available, but you can provide your own font file to be embedded in the pdf document. Send font as Base64 encoded string.|
|Options|[PdfWriteStringOptions](#schemapdfwritestringoptions)|false|none|Options for writing string in pdf page;|
|PdfFileBase64String|string \| null|false|none|The pdf file to add text to, as Base64 encoded string.|

<h2 id="tocS_WkHtmlToPdfRequestDto">WkHtmlToPdfRequestDto</h2>
<!-- backwards compatibility -->
<a id="schemawkhtmltopdfrequestdto"></a>
<a id="schema_WkHtmlToPdfRequestDto"></a>
<a id="tocSwkhtmltopdfrequestdto"></a>
<a id="tocswkhtmltopdfrequestdto"></a>

```json
{
  "HtmlBase64String": "string",
  "Resources": {
    "property1": "string",
    "property2": "string"
  },
  "Url": "string",
  "WkHtmlToPdfArguments": {
    "property1": "string",
    "property2": "string"
  }
}
```

WkHtmlToPdfRequestDto is the data transfer object for generating a pdf using wkhtmltopdf;

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HtmlBase64String|string \| null|false|none|Base64 encoded string with html. If property Url is set, it will be used, not HtmlBase64String.|
|Resources|object \| null|false|none|This is a set of key-value pairs of digital resources like images that is referenced in the HtmlBase64String document. It uses the filename including relative path as key and the data is provided as a Base64 encoded string.|
|Url|string \| null|false|none|The url to generate pdf from. Url has precedence over HtmlBase64String value if both are set.|
|WkHtmlToPdfArguments|object \| null|false|none|Command line arguments passed to wkhtmltopdf.|

<h2 id="tocS_XOriginPoint">XOriginPoint</h2>
<!-- backwards compatibility -->
<a id="schemaxoriginpoint"></a>
<a id="schema_XOriginPoint"></a>
<a id="tocSxoriginpoint"></a>
<a id="tocsxoriginpoint"></a>

```json
0
```

<h2 id="tocS_YOriginPoint">YOriginPoint</h2>
<!-- backwards compatibility -->
<a id="schemayoriginpoint"></a>
<a id="schema_YOriginPoint"></a>
<a id="tocSyoriginpoint"></a>
<a id="tocsyoriginpoint"></a>

```json
0
```
