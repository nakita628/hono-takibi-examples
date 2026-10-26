<h1 id="document-collector-api">Document Collector API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Document Collector API enables merchants to upload supporting documentation required for payment processing. Currently, it supports uploading cross-border invoices in PDF format for transactions processed in INR, as required under the Reserve Bank of India (RBI) guidelines for cross-border payments.

## Authentication
Your Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:

```
curl
-H "Content-Type: multipart/form-data" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

Alternatively, you can use the username and password to connect to the API using basic authentication. For example:

```
curl
-H "Content-Type: multipart/form-data" \
-U "ws@Company.YOUR_COMPANY":"YOUR_WS_PASSWORD" \
...
```

## Versioning
The Document Collector API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://document-collector-test.adyen.com/v1/crossBorderInvoices
```

## Going live
When going live, your Adyen contact will provide your API credential for the live environment. You can then use the username and password to send requests to `https://document-collector-live.adyen.com/v1`.

Base URLs:

* <a href="https://document-collector-test.adyen.com/v1">https://document-collector-test.adyen.com/v1</a> - Test Environment

* <a href="https://document-collector-live.adyen.com/v1">https://document-collector-live.adyen.com/v1</a> - Live Environment

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="document-collector-api-documents">Documents</h1>

## Upload a document

<a id="opIdpost-crossBorderInvoices"></a>

> Code samples

```bash
curl https://document-collector-test.adyen.com/v1/crossBorderInvoices \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -F 'file=@/path/to/file' \
  -F 'context=paCbInvoice' \
  -F 'merchantAccount=YourMerchantAccount'
```

`POST /crossBorderInvoices`

Uploads a document for a merchant account.

> Body parameter

```yaml
file: "(binary PDF named {pspReference}.pdf)"
context: paCbInvoice
merchantAccount: YourMerchantAccount
```

<h3 id="upload-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DocumentUploadRequest](#schemadocumentuploadrequest)|false|none|
|» context|body|[DocumentContext](#schemadocumentcontext)|true|The document context indicating the type of document being uploaded.<br> Possible values: **paCbInvoice**.|
|» file|body|string(binary)|true|The PDF file to upload. Filename must be {pspReference}.pdf|
|» merchantAccount|body|string|true|The merchant account that the document belongs to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» context|paCbInvoice|

> Example responses

> 201 Response

```json
{
  "pspReference": "QRMJC25GDZRKDM92",
  "merchantAccount": "YourMerchantAccount",
  "context": "paCbInvoice",
  "fileName": "QRMJC25GDZRKDM92.pdf"
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/invalid-request",
  "title": "Bad Request",
  "status": 400,
  "errorCode": "00_400"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/forbidden",
  "title": "Forbidden",
  "detail": "Caller does not have access to the requested account",
  "status": 403,
  "errorCode": "00_403"
}
```

> 422 Response

```json
{
  "type": "https://docs.adyen.com/errors/validation",
  "title": "The request is missing required fields or contains invalid data.",
  "status": 422,
  "errorCode": "29_001",
  "invalidFields": [
    {
      "name": "file",
      "value": "",
      "message": "File must be a PDF named {pspReference}.pdf"
    }
  ]
}
```

> 500 Response

```json
{
  "type": "https://docs.adyen.com/errors/internal-server-error",
  "title": "Internal Server Error",
  "status": 500,
  "errorCode": "00_500"
}
```

<h3 id="upload-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Document uploaded successfully.|[DocumentUploadResponse](#schemadocumentuploadresponse)|
|400|Bad Request|Bad request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity. The request contains invalid fields.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal server error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BasicAuth
</aside>

# Schemas

<h2 id="tocS_DefaultErrorResponseEntity">DefaultErrorResponseEntity</h2>
<!-- backwards compatibility -->
<a id="schemadefaulterrorresponseentity"></a>
<a id="schema_DefaultErrorResponseEntity"></a>
<a id="tocSdefaulterrorresponseentity"></a>
<a id="tocsdefaulterrorresponseentity"></a>

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

Standardized error response following RFC-7807 format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this occurrence of the problem.|
|errorCode|string|false|none|Unique business error code.|
|instance|string|false|none|A URI that identifies the specific occurrence of the problem if applicable.|
|invalidFields|[[InvalidField](#schemainvalidfield)]|false|none|Array of fields with validation errors when applicable.|
|requestId|string|false|none|The unique reference for the request.|
|status|integer(int32)|false|none|The HTTP status code.|
|title|string|false|none|A short, human-readable summary of the problem type.|
|type|string|false|none|A URI that identifies the validation error type. It points to human-readable documentation for the problem type.|

<h2 id="tocS_DocumentContext">DocumentContext</h2>
<!-- backwards compatibility -->
<a id="schemadocumentcontext"></a>
<a id="schema_DocumentContext"></a>
<a id="tocSdocumentcontext"></a>
<a id="tocsdocumentcontext"></a>

```json
"paCbInvoice"
```

The document context indicating the type of document being uploaded.
 Possible values: **paCbInvoice**.

<h2 id="tocS_DocumentUploadRequest">DocumentUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadrequest"></a>
<a id="schema_DocumentUploadRequest"></a>
<a id="tocSdocumentuploadrequest"></a>
<a id="tocsdocumentuploadrequest"></a>

```json
{
  "context": "paCbInvoice",
  "file": "string",
  "merchantAccount": "YourMerchantAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[DocumentContext](#schemadocumentcontext)|true|none|The document context indicating the type of document being uploaded.<br> Possible values: **paCbInvoice**.|
|file|string(binary)|true|none|The PDF file to upload. Filename must be {pspReference}.pdf|
|merchantAccount|string|true|none|The merchant account that the document belongs to.|

#### Enumerated Values

|Property|Value|
|---|---|
|context|paCbInvoice|

<h2 id="tocS_DocumentUploadResponse">DocumentUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadresponse"></a>
<a id="schema_DocumentUploadResponse"></a>
<a id="tocSdocumentuploadresponse"></a>
<a id="tocsdocumentuploadresponse"></a>

```json
{
  "context": "paCbInvoice",
  "fileName": "QRMJC25GDZRKDM92.pdf",
  "merchantAccount": "YourMerchantAccount",
  "pspReference": "QRMJC25GDZRKDM92"
}
```

The uploaded document resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|string|false|none|The document context indicating the type of document.|
|fileName|string|false|none|The name of the uploaded file.|
|merchantAccount|string|false|none|The merchant account that the document belongs to.|
|pspReference|string|false|none|The PSP reference extracted from the filename.|

<h2 id="tocS_InvalidField">InvalidField</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfield"></a>
<a id="schema_InvalidField"></a>
<a id="tocSinvalidfield"></a>
<a id="tocsinvalidfield"></a>

```json
{
  "message": "string",
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Description of the validation error.|
|name|string|true|none|The field that has an invalid value.|
|value|string|true|none|The invalid value.|
