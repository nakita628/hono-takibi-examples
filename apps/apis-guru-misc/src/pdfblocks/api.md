<h1 id="pdf-blocks-api">PDF Blocks API v1.5.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

PDF Blocks is a secure, reliable, and fast API to work with PDF documents. Actions include: Merge PDF documents, add or remove passwords, add watermarks, remove, extract, reverse, and rotate pages, and more.

Base URLs:

* <a href="https://api.pdfblocks.com">https://api.pdfblocks.com</a> - Global endpoint (default).

* <a href="https://eu.api.pdfblocks.com">https://eu.api.pdfblocks.com</a> - European-only endpoint.

<a href="https://www.pdfblocks.com/terms">Terms of service</a>
Email: <a href="mailto:support@pdfblocks.com">PDF Blocks Support</a> 
Web: <a href="https://www.pdfblocks.com/support">PDF Blocks Support</a> 

<a href="https://www.pdfblocks.com/docs/api/v1">Documentation and examples</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **X-Api-Key**, in: header. Find your API key in [your dashboard](https://dashboard.pdfblocks.com/users/sign_in), or [get a free API key](https://www.pdfblocks.com/try-free).

<h1 id="pdf-blocks-api-default">Default</h1>

## Add a password to a PDF

<a id="opIdaddPasswordV1"></a>

> Code samples

```bash
curl https://example.com/v1/add_password \
  -X POST \
  -H 'Accept: application/problem+json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'encryption_algorithm=AES-128' \
  -F 'file=@/path/to/file' \
  -F 'password=pa$$word'
```

`POST /v1/add_password`

Protect a PDF document with a password. Encrypt the PDF document to prevent unauthorized access.

<a href="https://www.pdfblocks.com/docs/api/v1/add-password">Documentation and examples</a>

> Body parameter

```yaml
encryption_algorithm: AES-128
file: string
password: "pa$$word"
```

<h3 id="add-a-password-to-a-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» encryption_algorithm|body|string|false|The algorithm used to encrypt the PDF document.|
|» file|body|string(binary)|true|The input PDF document|
|» password|body|string|true|The password required to open the file.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encryption_algorithm|AES-128|
|» encryption_algorithm|AES-256|

> Example responses

> 4XX Response

```json
{
  "errors": {
    "file": [
      "Could not parse the PDF document. The file may be invalid or corrupt."
    ]
  },
  "status": 400,
  "title": "One or more validation errors occurred.",
  "type": "https://www.pdfblocks.com/docs/api/v1/error/400"
}
```

<h3 id="add-a-password-to-a-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document was processed succesfully.|Inline|
|4XX|Client Error|Error|Inline|

<h3 id="add-a-password-to-a-pdf-responseschema">Response Schema</h3>

Status Code **4XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string(url)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Add restrictions to a PDF

<a id="opIdaddRestrictionsV1"></a>

> Code samples

```bash
curl https://example.com/v1/add_restrictions \
  -X POST \
  -H 'Accept: application/problem+json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'allow_accessibility=true' \
  -F 'allow_assemble_document=true' \
  -F 'allow_change_content=true' \
  -F 'allow_comment_and_fill_form=true' \
  -F 'allow_copy_content=true' \
  -F 'allow_fill_form=true' \
  -F 'allow_print=true' \
  -F 'allow_print_high_resolution=true' \
  -F 'encryption_algorithm=AES-128' \
  -F 'file=@/path/to/file' \
  -F 'owner_password=pa$$word' \
  -F 'user_password=pa$$word'
```

`POST /v1/add_restrictions`

Add restrictions to prevent copying, printing, and modifying a PDF document.

<a href="https://www.pdfblocks.com/docs/api/v1/add-restrictions">Documentation and examples</a>

> Body parameter

```yaml
allow_accessibility: true
allow_assemble_document: true
allow_change_content: true
allow_comment_and_fill_form: true
allow_copy_content: true
allow_fill_form: true
allow_print: true
allow_print_high_resolution: true
encryption_algorithm: AES-128
file: string
owner_password: "pa$$word"
user_password: "pa$$word"
```

<h3 id="add-restrictions-to-a-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» allow_accessibility|body|boolean|false|If false, accessibility programs can't read the text or images of the document.|
|» allow_assemble_document|body|boolean|false|If false, the user can't assemble or manipulate the document.|
|» allow_change_content|body|boolean|false|If false, the user can't change the content of the document.|
|» allow_comment_and_fill_form|body|boolean|false|If false, the user can't add, edit or modify annotations or fill form fields.|
|» allow_copy_content|body|boolean|false|If false, the user can't copy text and images to the clipboard.|
|» allow_fill_form|body|boolean|false|If false, the user can't fill forms fields.|
|» allow_print|body|boolean|false|If false, the user can't print the document.|
|» allow_print_high_resolution|body|boolean|false|If false, the user can't print the document in high resolution.|
|» encryption_algorithm|body|string|false|The algorithm used to encrypt the PDF document.|
|» file|body|string(binary)|true|The input PDF document|
|» owner_password|body|string|true|The password required to open and change permissions of the PDF document.|
|» user_password|body|string|false|The password required to open the PDF document. If the `user_password` is not set, the user will be able to open the document without a password.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encryption_algorithm|AES-128|
|» encryption_algorithm|AES-256|

> Example responses

> 4XX Response

```json
{
  "errors": {
    "file": [
      "Could not parse the PDF document. The file may be invalid or corrupt."
    ]
  },
  "status": 400,
  "title": "One or more validation errors occurred.",
  "type": "https://www.pdfblocks.com/docs/api/v1/error/400"
}
```

<h3 id="add-restrictions-to-a-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document was processed succesfully.|Inline|
|4XX|Client Error|Error|Inline|

<h3 id="add-restrictions-to-a-pdf-responseschema">Response Schema</h3>

Status Code **4XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string(url)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Add an image watermark to a PDF

<a id="opIdaddImageWatermarkV1"></a>

> Code samples

```bash
curl https://example.com/v1/add_watermark/image \
  -X POST \
  -H 'Accept: application/problem+json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'file=@/path/to/file' \
  -F 'image=@/path/to/file' \
  -F 'margin=1' \
  -F 'transparency=50'
```

`POST /v1/add_watermark/image`

Add an image watermark to each page of a PDF document.

<a href="https://www.pdfblocks.com/docs/api/v1/add-watermark-image">Documentation and examples</a>

> Body parameter

```yaml
file: string
image: string
margin: 1
transparency: 50
```

<h3 id="add-an-image-watermark-to-a-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|The input PDF document|
|» image|body|string(binary)|true|The image to add as a watermark. The format of the image can be either PNG or JPEG.|
|» margin|body|number(float)|false|The distance in inches from the border of the page to the image watermark.|
|» transparency|body|integer(int32)|false|The transparency level for the image watermark from 0 (opaque) to 100 (transparent).|

> Example responses

> 4XX Response

```json
{
  "errors": {
    "file": [
      "Could not parse the PDF document. The file may be invalid or corrupt."
    ]
  },
  "status": 400,
  "title": "One or more validation errors occurred.",
  "type": "https://www.pdfblocks.com/docs/api/v1/error/400"
}
```

<h3 id="add-an-image-watermark-to-a-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document was processed succesfully.|Inline|
|4XX|Client Error|Error|Inline|

<h3 id="add-an-image-watermark-to-a-pdf-responseschema">Response Schema</h3>

Status Code **4XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string(url)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Add a text watermark to a PDF

<a id="opIdaddTextWatermarkV1"></a>

> Code samples

```bash
curl https://example.com/v1/add_watermark/text \
  -X POST \
  -H 'Accept: application/problem+json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'color=Gray' \
  -F 'file=@/path/to/file' \
  -F 'line_1=Jane Doe' \
  -F 'line_2=ACME, Inc' \
  -F 'line_3=Confidential' \
  -F 'margin=1' \
  -F 'template=1001' \
  -F 'transparency=75'
```

`POST /v1/add_watermark/text`

Add a text watermark to each page of a PDF document. Choose from several watermark templates.

<a href="https://www.pdfblocks.com/docs/api/v1/add-watermark-text">Documentation and examples</a>

> Body parameter

```yaml
color: Gray
file: string
line_1: Jane Doe
line_2: "ACME, Inc"
line_3: Confidential
margin: 1
template: 1001
transparency: 75
```

<h3 id="add-a-text-watermark-to-a-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» color|body|string|false|The color of the text watermark.|
|» file|body|string(binary)|true|The input PDF document|
|» line_1|body|string|true|The first line of text of the watermark.|
|» line_2|body|string|false|The second line of text of the watermark.|
|» line_3|body|string|false|The third line of text of the watermark.|
|» margin|body|number(float)|false|The distance in inches from the border of the page to the text watermark.|
|» template|body|integer(int32)|false|The [id of the text watermark template](https://www.pdfblocks.com/docs/api/v1/text-watermark-templates.pdf).|
|» transparency|body|integer(int32)|false|The transparency level for the text watermark from 0 (opaque) to 100 (transparent).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» color|Red|
|» color|Blue|
|» color|Gray|
|» color|Black|

> Example responses

> 4XX Response

```json
{
  "errors": {
    "file": [
      "Could not parse the PDF document. The file may be invalid or corrupt."
    ]
  },
  "status": 400,
  "title": "One or more validation errors occurred.",
  "type": "https://www.pdfblocks.com/docs/api/v1/error/400"
}
```

<h3 id="add-a-text-watermark-to-a-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document was processed succesfully.|Inline|
|4XX|Client Error|Error|Inline|

<h3 id="add-a-text-watermark-to-a-pdf-responseschema">Response Schema</h3>

Status Code **4XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string(url)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Extract pages from a PDF

<a id="opIdextractPagesV1"></a>

> Code samples

```bash
curl https://example.com/v1/extract_pages \
  -X POST \
  -H 'Accept: application/problem+json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'file=@/path/to/file' \
  -F 'first_page=1' \
  -F 'last_page=1'
```

`POST /v1/extract_pages`

Extract one or more pages from a PDF document.

<a href="https://www.pdfblocks.com/docs/api/v1/extract-pages">Documentation and examples</a>

> Body parameter

```yaml
file: string
first_page: 1
last_page: 1
```

<h3 id="extract-pages-from-a-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|The input PDF document|
|» first_page|body|integer(int32)|false|The first page of the range to extract. If empty, it defaults to the first page of the PDF document.|
|» last_page|body|integer(int32)|false|The last page of the range to extract. If empty, it defaults to the last page of the PDF document.|

> Example responses

> 4XX Response

```json
{
  "errors": {
    "file": [
      "Could not parse the PDF document. The file may be invalid or corrupt."
    ]
  },
  "status": 400,
  "title": "One or more validation errors occurred.",
  "type": "https://www.pdfblocks.com/docs/api/v1/error/400"
}
```

<h3 id="extract-pages-from-a-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document was processed succesfully.|Inline|
|4XX|Client Error|Error|Inline|

<h3 id="extract-pages-from-a-pdf-responseschema">Response Schema</h3>

Status Code **4XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string(url)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Merge PDF documents

<a id="opIdmergeDocumentsV1"></a>

> Code samples

```bash
curl https://example.com/v1/merge_documents \
  -X POST \
  -H 'Accept: application/problem+json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'file=["string"]'
```

`POST /v1/merge_documents`

Combine multiple PDF documents into a single PDF document.

<a href="https://www.pdfblocks.com/docs/api/v1/merge-documents">Documentation and examples</a>

> Body parameter

```yaml
file:
  - string
```

<h3 id="merge-pdf-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|[string(binary)]|false|The array of PDF documents. PDF documents will be merged in the same order they are inserted into this array.|

> Example responses

> 4XX Response

```json
{
  "errors": {
    "file": [
      "Could not parse the PDF document. The file may be invalid or corrupt."
    ]
  },
  "status": 400,
  "title": "One or more validation errors occurred.",
  "type": "https://www.pdfblocks.com/docs/api/v1/error/400"
}
```

<h3 id="merge-pdf-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document was processed succesfully.|Inline|
|4XX|Client Error|Error|Inline|

<h3 id="merge-pdf-documents-responseschema">Response Schema</h3>

Status Code **4XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string(url)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Remove pages from a PDF

<a id="opIdremovePagesV1"></a>

> Code samples

```bash
curl https://example.com/v1/remove_pages \
  -X POST \
  -H 'Accept: application/problem+json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'file=@/path/to/file' \
  -F 'first_page=1' \
  -F 'last_page=1'
```

`POST /v1/remove_pages`

Remove one or more pages from a PDF document.

<a href="https://www.pdfblocks.com/docs/api/v1/remove-pages">Documentation and examples</a>

> Body parameter

```yaml
file: string
first_page: 1
last_page: 1
```

<h3 id="remove-pages-from-a-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|The input PDF document|
|» first_page|body|integer(int32)|false|The first page of the range to remove from the PDF document. If empty, it defaults to the first page of the document.|
|» last_page|body|integer(int32)|false|The last page of the range to remove from the PDF document. If empty, it defaults to the last page of the document.|

> Example responses

> 4XX Response

```json
{
  "errors": {
    "file": [
      "Could not parse the PDF document. The file may be invalid or corrupt."
    ]
  },
  "status": 400,
  "title": "One or more validation errors occurred.",
  "type": "https://www.pdfblocks.com/docs/api/v1/error/400"
}
```

<h3 id="remove-pages-from-a-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document was processed succesfully.|Inline|
|4XX|Client Error|Error|Inline|

<h3 id="remove-pages-from-a-pdf-responseschema">Response Schema</h3>

Status Code **4XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string(url)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Remove the password from a PDF

<a id="opIdremovePasswordV1"></a>

> Code samples

```bash
curl https://example.com/v1/remove_password \
  -X POST \
  -H 'Accept: application/problem+json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'file=@/path/to/file' \
  -F 'password=pa$$word'
```

`POST /v1/remove_password`

Remove the password from an encrypted PDF document. The PDF document will no longer require a password to open.

<a href="https://www.pdfblocks.com/docs/api/v1/remove-password">Documentation and examples</a>

> Body parameter

```yaml
file: string
password: "pa$$word"
```

<h3 id="remove-the-password-from-a-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|The input PDF document|
|» password|body|string|true|The password required to open the file.|

> Example responses

> 4XX Response

```json
{
  "errors": {
    "file": [
      "Could not parse the PDF document. The file may be invalid or corrupt."
    ]
  },
  "status": 400,
  "title": "One or more validation errors occurred.",
  "type": "https://www.pdfblocks.com/docs/api/v1/error/400"
}
```

<h3 id="remove-the-password-from-a-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document was processed succesfully.|Inline|
|4XX|Client Error|Error|Inline|

<h3 id="remove-the-password-from-a-pdf-responseschema">Response Schema</h3>

Status Code **4XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string(url)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Remove the restrictions from a PDF

<a id="opIdremoveRestrictionsV1"></a>

> Code samples

```bash
curl https://example.com/v1/remove_restrictions \
  -X POST \
  -H 'Accept: application/problem+json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /v1/remove_restrictions`

Remove all the restrictions from a PDF document.

<a href="https://www.pdfblocks.com/docs/api/v1/remove-restrictions">Documentation and examples</a>

> Body parameter

```yaml
file: string
```

<h3 id="remove-the-restrictions-from-a-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|The input PDF document|

> Example responses

> 4XX Response

```json
{
  "errors": {
    "file": [
      "Could not parse the PDF document. The file may be invalid or corrupt."
    ]
  },
  "status": 400,
  "title": "One or more validation errors occurred.",
  "type": "https://www.pdfblocks.com/docs/api/v1/error/400"
}
```

<h3 id="remove-the-restrictions-from-a-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document was processed succesfully.|Inline|
|4XX|Client Error|Error|Inline|

<h3 id="remove-the-restrictions-from-a-pdf-responseschema">Response Schema</h3>

Status Code **4XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string(url)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Remove the signatures from a PDF

<a id="opIdremoveSignaturesV1"></a>

> Code samples

```bash
curl https://example.com/v1/remove_signatures \
  -X POST \
  -H 'Accept: application/problem+json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /v1/remove_signatures`

Remove the cryptographic signatures and timestamps from a PDF document.

<a href="https://www.pdfblocks.com/docs/api/v1/remove-signatures">Documentation and examples</a>

> Body parameter

```yaml
file: string
```

<h3 id="remove-the-signatures-from-a-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|The input PDF document|

> Example responses

> 4XX Response

```json
{
  "errors": {
    "file": [
      "Could not parse the PDF document. The file may be invalid or corrupt."
    ]
  },
  "status": 400,
  "title": "One or more validation errors occurred.",
  "type": "https://www.pdfblocks.com/docs/api/v1/error/400"
}
```

<h3 id="remove-the-signatures-from-a-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document was processed succesfully.|Inline|
|4XX|Client Error|Error|Inline|

<h3 id="remove-the-signatures-from-a-pdf-responseschema">Response Schema</h3>

Status Code **4XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string(url)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Reverse the pages of a PDF

<a id="opIdreversePagesV1"></a>

> Code samples

```bash
curl https://example.com/v1/reverse_pages \
  -X POST \
  -H 'Accept: application/problem+json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /v1/reverse_pages`

Reverse the order of the pages of a PDF document.

<a href="https://www.pdfblocks.com/docs/api/v1/reverse-pages">Documentation and examples</a>

> Body parameter

```yaml
file: string
```

<h3 id="reverse-the-pages-of-a-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|The input PDF document|

> Example responses

> 4XX Response

```json
{
  "errors": {
    "file": [
      "Could not parse the PDF document. The file may be invalid or corrupt."
    ]
  },
  "status": 400,
  "title": "One or more validation errors occurred.",
  "type": "https://www.pdfblocks.com/docs/api/v1/error/400"
}
```

<h3 id="reverse-the-pages-of-a-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document was processed succesfully.|Inline|
|4XX|Client Error|Error|Inline|

<h3 id="reverse-the-pages-of-a-pdf-responseschema">Response Schema</h3>

Status Code **4XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string(url)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## Rotate pages in a PDF

<a id="opIdrotatePagesV1"></a>

> Code samples

```bash
curl https://example.com/v1/rotate_pages \
  -X POST \
  -H 'Accept: application/problem+json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'angle=90' \
  -F 'file=@/path/to/file' \
  -F 'first_page=1' \
  -F 'last_page=1'
```

`POST /v1/rotate_pages`

Rotate one or more pages in a PDF document.

<a href="https://www.pdfblocks.com/docs/api/v1/rotate-pages">Documentation and examples</a>

> Body parameter

```yaml
angle: 90
file: string
first_page: 1
last_page: 1
```

<h3 id="rotate-pages-in-a-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» angle|body|integer(int32)|true|The angle of rotation of the pages. Positive angles rotate the pages clockwise. Negative angles rotate the pages counter-clockwise.|
|» file|body|string(binary)|true|The input PDF document|
|» first_page|body|integer(int32)|false|The first page of the range to rotate in the PDF document. If empty, it defaults to the first page of the document.|
|» last_page|body|integer(int32)|false|The last page of the range to rotate in the PDF document. If empty, it defaults to the last page of the document.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» angle|0|
|» angle|90|
|» angle|180|
|» angle|270|
|» angle|-90|
|» angle|-180|
|» angle|-270|

> Example responses

> 4XX Response

```json
{
  "errors": {
    "file": [
      "Could not parse the PDF document. The file may be invalid or corrupt."
    ]
  },
  "status": 400,
  "title": "One or more validation errors occurred.",
  "type": "https://www.pdfblocks.com/docs/api/v1/error/400"
}
```

<h3 id="rotate-pages-in-a-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document was processed succesfully.|Inline|
|4XX|Client Error|Error|Inline|

<h3 id="rotate-pages-in-a-pdf-responseschema">Response Schema</h3>

Status Code **4XX**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string(url)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>
