<h1 id="benefits-intake">Benefits Intake v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Benefits Intake API allows authorized third-party systems used by Veteran Service Organizations (VSOs), agencies, and Veterans to digitally submit VA benefits claim documents directly to the Veterans Benefits Administration's (VBA) claims intake process. This API handles documents related to the following benefit claim types: 

* Compensation
* Pension/Survivors Benefits
* Education
* Fiduciary
* Insurance
* Veteran Readiness & Employment (VRE)
* Board of Veteran Appeals (BVA)

This API also provides submission status updates until documents are successfully established for VBA claim processing, eliminating the need for users to switch between systems to manually check whether documents have been successfully uploaded.

## Background 
This API provides a secure, efficient, and tracked alternative to mail or fax for VA benefit claim document submissions. Documents are uploaded directly to the VBA so they can be processed as quickly as possible.

## Technical overview
The Benefits Intake API first provides an upload location and unique submission identifier, and then accepts a payload consisting of a document in PDF format, zero or more optional attachments in PDF format, and some JSON metadata. 

The metadata describes the document and attachments, and identifies the person for whom it is being submitted. This payload is encoded as binary multipart/form-data (not base64). The unique identifier supplied with the payload can subsequently be used to request the processing status of the uploaded document package.

To avoid errors and processing delays, API consumers are encouraged to validate the `zipcode`,`fileNumber`, `veteranFirstName`, `veteranLastName` and `businessLine` fields before submission according to their description in the DocumentUploadMetadata model and use the 'businessLine' attribute for the most efficient processing. Additionally, please ensure no PDF user passwords are used in submitted PDFs. 

### Attachment & file size limits
There is no limit on the number of files a payload can contain, but size limits do apply.

* Uploaded documents cannot be larger than 21" x 21"
* The entire payload cannot exceed 5 GB
* No single file in a payload can exceed 100 MB

### Date of receipt
The date that documents are successfully submitted through the Benefits Intake API is used as the official VA date of receipt. However, note that until a document status of `received`, `processing`, `success`, or `vbms` is returned, a client cannot consider the document received by VA. 

A status of `received` means that the document package has been transmitted, but may not be validated. Any errors with the document package, such as unreadable PDFs or a Veteran not found, will cause the status to change to `error`.

If the document status is `error`, VA has not received the submission and cannot honor the submission date as the date of receipt.

### Authentication and Authorization
API requests are authorized through a symmetric API token, provided in an HTTP header with name 'apikey'. [Request an API key.](https://developer.va.gov/apply)

### Testing in the sandbox environment
In the sandbox environment, the final status of a submission is `received` and submissions do not actually progress to the central mail repository or VBMS. 

Progress beyond the `received` status can be simulated for testing. We allow passing in a `Status-Override` header on the `/uploads/{id}` endpoint so that you can change the status of your submission to simulate the various scenarios. 

The available statuses are `pending`, `uploaded`, `received`, `processing`, `success`, `vbms`, and `error`. The meaning of the various statuses is listed below in Models under DocumentUploadStatusAttributes.

### Test data
We use mock test data in the sandbox environment. Data is not sent upstream and it is not necessary to align submitted test data with any other systems' data.

### Validating documents
Use the POST `/uploads/validate_document` endpoint to make sure your documents will pass system file requirements and
validations before you send them through the submissions process. This step is optional but decreases the likelihood
of individual document errors during the submission process.

Validations performed:
* Document is a valid PDF (Note: `Content-Type` header value must be "application/pdf")
* Document does not have a user password (an owner password is acceptable)
* File size does not exceed 100 MB
* Page size does not exceed 21" x 21"

### Upload operation
Allows a client to upload a multi-part document package (form + attachments + metadata).

1. Client Request: POST https://sandbox-api.va.gov/services/vba_documents/v1/
    * No request body or parameters required

2. Service Response: A JSON API object with the following attributes:
    * `guid`: An identifier used for subsequent status requests
    * `location`: A URL to which the actual document package payload can be submitted in the next step. The URL is specific to this upload request, and should not be re-used for subsequent uploads. The URL is valid for 900 seconds (15 minutes) from the time of this response. If the location is not used within 15 minutes, the GUID will expire. Once expired, status checks on the GUID will return a status of `expired`.
        * Note: If, after you've submitted a document, the status hasn't changed to `uploaded` before 15 minutes has elapsed, we recommend retrying the upload in order to make sure the document properly reaches our servers. If the upload continues to fail, try encoding the payload as Base64 (See below).

 3. Client Request: PUT to the location URL returned in Step 2.
    * Request body should be encoded as binary multipart/form-data (base64 also available - see details below), equivalent to that generated by an HTML form submission or using "curl -F…". The format is described in more detail below.
    * No `apikey` authorization header is required for this request, as authorization is embedded in the signed location URL.

4. Service Response: The HTTP status indicates whether the upload was successful.
    * Additionally, the response includes an ETag header containing an MD5 hash of the submitted payload. This can be compared to the submitted payload to ensure data integrity of the upload.

### Status caching
Due to current system limitations, data for the `/uploads/report` endpoint is cached for one hour.

A request to the `/uploads/{id}` endpoint will return a real-time status for that GUID, and update its status in `/uploads/report`.

The `updated_at` field indicates the last time the status for a given GUID was updated.

### Document Submission Statuses
**Important note:** a submission has not been received by VA until it has a status of Received, Processing, Success, 
or VBMS. Detailed descriptions of what each status means are found in this table.

| Status        | What it means |
| ---           |     ---     |
| **Pending**   | Initial status.<br /><br />Indicates no document package has been uploaded yet.<br /><br />Date of Receipt is not yet established with this status |
| **Uploaded**  | Indicates document package has been successfully uploaded (PUT) from your system to the API server but has not yet been validated.<br /><br />Date of Receipt is not yet established with this status. Any errors with the document package, such as having an unreadable PDF, may cause an Error status. |
| **Received**  | Indicates document package has been received upstream of the API and is awaiting Processing.<br /><br />The VA Date of Receipt is set when this status is achieved.<br /><br />This is the final status in the sandbox environment unless further progress is simulated. |
| **Processing**| Indicates the document package is being validated, processed, and made ready to route and work. |
| **Success**   | Indicates the document package has been successfully received within VA's mail handling system.<br /><br />Success is the final status for a small percentage of submitted packages with claim types, Veteran types, or exception processes that are not worked in VBMS. Most submissions reach a Success status within 1 business day. A small portion will take longer; however, some submissions may take up to 2 weeks to reach a Success status. |
| **VBMS**      | Indicates this document package was successfully uploaded into a Veteran's eFolder within VBMS.<br /><br />On average, submissions reach VBMS status within 3 business days; however, processing times vary and some submissions may remain in a Success status for several weeks before reaching a VBMS status.<br /><br />Some document packages are worked in VA systems other than VBMS. For these submissions, Success is the final status. |
| **Error**     | Indicates that there was an error. Refer to the error code and message for further information. |
| **Expired**   | After a POST request, there is a 15-minute window during which documents must be uploaded via a PUT request.<br /><br />An Expired status means the documents were not successfully uploaded within this 15-minute window. We recommend coding to retry unsuccessful uploads within 15 minutes using the same submission in case of connection issues. |

### Optional Base64 encoding

Base64 is an encoding scheme that converts binary data into text format, so that encoded textual data can be easily transported over networks uncorrupted and without data loss. 

Base64 can be used to encode binary multipart/form-data it in its entirety.  Note that the whole payload must be encoded, not individual parts/attachments.

After encoding your payload, you'll be required to preface your base64 string with `data:multipart/form-data;base64,` in order to allow our system to distinguish the file type. Your final string payload would look something like `data:multipart/form-data;base64,(encryption string)==` and close with the standard == marker.  Note that the multipart boundaries i.e. -----WebKitFormBoundaryVfOwzCyvug0JmWYo and ending ------WebKitFormBoundaryVfOwzCyvug0JmWYo- must also be included.

### Consumer onboarding process
When you're ready to move to production, [request a production API key.](https://developer.va.gov/go-live)

Base URLs:

* <a href="https://sandbox-api.va.gov/services/vba_documents/v1">https://sandbox-api.va.gov/services/vba_documents/v1</a> - VA.gov API sandbox environment

* <a href="https://api.va.gov/services/vba_documents/v1">https://api.va.gov/services/vba_documents/v1</a> - VA.gov API production environment

# Authentication

* API Key (apikey)
    - Parameter Name: **apikey**, in: header.

<h1 id="benefits-intake-vba-documents">VBA Documents</h1>

VA Benefits document upload functionality

## Accepts document upload.

<a id="opIdputBenefitsDocumentUpload"></a>

> Code samples

```bash
curl https://example.com/path \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /path`

Accepts document metadata, document binary, and attachment binaries. Full URL, including
query parameters, provided from POST `/document_uploads`.

## Example Payload

The following demonstrates a (redacted) multipart payload suitable for submitting to the PUT
endpoint. Most programming languages should have provisions for assembling a multipart
payload like this without having to do so manually.

```
--17de1ed8f01442b2a2d7a93506314b76
Content-Disposition: form-data; name="metadata"
Content-Type: application/json

{"veteranFirstName": "Jane",
"veteranLastName": "Doe",
"fileNumber": "012345678",
"zipCode": "97202",
"source": "MyVSO",
"docType": "21-22"
"businessLine": "CMP"}
--17de1ed8f01442b2a2d7a93506314b76
Content-Disposition: form-data; name="content"
Content-Type: application/pdf

<Binary PDF contents>
--17de1ed8f01442b2a2d7a93506314b76
Content-Disposition: form-data; name="attachment1"
Content-Type: application/pdf

<Binary PDF attachment contents>
--17de1ed8f01442b2a2d7a93506314b76--
```

This PUT request would have an overall HTTP Content-Type header:

```
Content-Type: multipart/form-data; boundary=17de1ed8f01442b2a2d7a93506314b76
```

Note that the Content-Disposition parameter "name" in each part must be the expected values
"metadata", "content", "attachment1"..."attachmentN". The attachment attributes must be named 
exactly as they are listed here (case sensitive), for example: "attachment_1" or "Attachment2"
are invalid.

This is an example curl command:

```
curl -v -L -X PUT '<Location from \uploads>' -F 'metadata="{\"veteranFirstName\": \"Jane\",\"veteranLastName\": \"Doe\",\"fileNumber\": \"012345678\",\"zipCode\": \"97202\",\"source\": \"MyVSO\",\"docType\": \"21-22\",\"businessLine\": \"CMP\"}";type=application/json' -F 'content=@"content.pdf"' -F 'attachment1=@"file1.pdf"' -F 'attachment2=@"another_file.pdf"'
```


<h3 id="accepts-document-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-MD5|header|string(md5)|false|Base64-encoded 128-bit MD5 digest of the message. Use for integrity control|

> Example responses

> 401 Response

```json
{
  "Message": "Unauthorized Request"
}
```

> 422 Response

```json
{
  "errors": [
    {
      "detail": "DOC104 - Upload rejected by upstream system. Processing failed and upload must be resubmitted",
      "status": "422"
    }
  ]
}
```

> 429 Response

```json
{
  "Message": "API rate limit exceeded"
}
```

> 500 Response

```json
{
  "code": 500,
  "detail": "Internal server error",
  "status": 500,
  "title": "Internal server error"
}
```

<h3 id="accepts-document-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document upload staged|None|
|401|Unauthorized|Unauthorized request|Inline|
|403|Forbidden|Document upload failed|[DocumentUploadFailure](#schemadocumentuploadfailure)|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="accepts-document-upload-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Error detail|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[ErrorModel](#schemaerrormodel)]|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|message|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|detail|string|false|none|Human readable error detail. Only present if status = "error"|
|status|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|title|string|false|none|Human readable title description.|

<aside class="success">
This operation does not require authentication
</aside>

## Get a location for subsequent document upload PUT request

<a id="opIdpostBenefitsDocumentUpload"></a>

> Code samples

```bash
curl https://example.com/uploads \
  -X POST \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`POST /uploads`

> Example responses

> 202 Response

```json
{
  "data": {
    "attributes": {
      "code": "string",
      "detail": "string",
      "guid": "6d8433c1-cd55-4c24-affd-f592287a7572",
      "location": "https://sandbox-api.va.gov/services_user_content/vba_documents/{idpath}",
      "status": "pending",
      "updated_at": "2018-07-30T17:31:15.958Z",
      "uploaded_pdf": "null"
    },
    "id": "6d8433c1-cd55-4c24-affd-f592287a7572",
    "type": "document_upload"
  }
}
```

> 401 Response

```json
{
  "Message": "Unauthorized Request"
}
```

> 403 Response

```json
{
  "Message": "Invalid authentication credentials"
}
```

> 422 Response

```json
{
  "errors": [
    {
      "detail": "DOC104 - Upload rejected by upstream system. Processing failed and upload must be resubmitted",
      "status": "422"
    }
  ]
}
```

> 429 Response

```json
{
  "Message": "API rate limit exceeded"
}
```

> 500 Response

```json
{
  "code": 500,
  "detail": "Internal server error",
  "status": 500,
  "title": "Internal server error"
}
```

<h3 id="get-a-location-for-subsequent-document-upload-put-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted. Location generated|Inline|
|401|Unauthorized|Unauthorized request|Inline|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="get-a-location-for-subsequent-document-upload-put-request-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DocumentUploadPath](#schemadocumentuploadpath)|true|none|Status record for a previously initiated document submission.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Error detail|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Error detail|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[ErrorModel](#schemaerrormodel)]|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|message|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|detail|string|false|none|Human readable error detail. Only present if status = "error"|
|status|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|title|string|false|none|Human readable title description.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Get a bulk status report for a list of previous uploads

<a id="opIdgetBenefitsDocumentUploadStatusReport"></a>

> Code samples

```bash
curl https://example.com/uploads/report \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -d '{
    "ids": [
      "6d8433c1-cd55-4c24-affd-f592287a7572"
    ]
  }'
```

`POST /uploads/report`

> Body parameter

```json
{
  "ids": [
    "6d8433c1-cd55-4c24-affd-f592287a7572"
  ]
}
```

<h3 id="get-a-bulk-status-report-for-a-list-of-previous-uploads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DocumentUploadStatusGuidList](#schemadocumentuploadstatusguidlist)|true|List of GUIDs for which to retrieve current status|
|» ids|body|[string(uuid)]|true|List of IDs for previous document upload submissions|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "code": "string",
        "detail": "string",
        "guid": "6d8433c1-cd55-4c24-affd-f592287a7572",
        "message": "string",
        "status": "received",
        "updated_at": "2018-07-30T17:31:15.958Z",
        "uploaded_pdf": {
          "content": {
            "attachments": [
              {
                "dimensions": {
                  "height": "11.0",
                  "oversized_pdf": "false",
                  "width": "8.5"
                },
                "page_count": "2"
              }
            ],
            "dimensions": {
              "height": "11.0",
              "oversized_pdf": "false",
              "width": "8.5"
            },
            "page_count": "1"
          },
          "total_documents": "2",
          "total_pages": "3"
        }
      },
      "id": "6d8433c1-cd55-4c24-affd-f592287a7572",
      "type": "document_upload"
    }
  ]
}
```

> 401 Response

```json
{
  "Message": "Unauthorized Request"
}
```

> 403 Response

```json
{
  "Message": "Invalid authentication credentials"
}
```

> 422 Response

```json
{
  "errors": [
    {
      "detail": "DOC104 - Upload rejected by upstream system. Processing failed and upload must be resubmitted",
      "status": "422"
    }
  ]
}
```

> 429 Response

```json
{
  "Message": "API rate limit exceeded"
}
```

> 500 Response

```json
{
  "code": 500,
  "detail": "Internal server error",
  "status": 500,
  "title": "Internal server error"
}
```

<h3 id="get-a-bulk-status-report-for-a-list-of-previous-uploads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload status report retrieved successfully|Inline|
|400|Bad Request|Bad Request - invalid or missing list of guids|None|
|401|Unauthorized|Unauthorized request|Inline|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="get-a-bulk-status-report-for-a-list-of-previous-uploads-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DocumentUploadStatusReport](#schemadocumentuploadstatusreport)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Error detail|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Error detail|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[ErrorModel](#schemaerrormodel)]|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|message|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|detail|string|false|none|Human readable error detail. Only present if status = "error"|
|status|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|title|string|false|none|Human readable title description.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Validate an individual document against system file requirements

<a id="opIdpostBenefitsDocumentUploadValidateDocument"></a>

> Code samples

```bash
curl https://example.com/uploads/validate_document \
  -X POST \
  -H 'Accept: application/json'
```

`POST /uploads/validate_document`

Using this endpoint will decrease the likelihood of errors associated with individual documents during
the submission process. Validations performed:
* Document is a valid PDF (Note: `Content-Type` header value must be "application/pdf")
* Document does not have a user password (an owner password is acceptable)
* File size does not exceed 100 MB
* Page size does not exceed 21" x 21"

Each PDF document is sent as a direct file upload. The request body should contain nothing other than the document in
binary format. Binary multipart/form-data encoding is not supported. This endpoint does NOT validate metadata in JSON
format.

This endpoint does NOT initiate the claims intake process or submit data to that process. After using this endpoint,
individual PDF documents can be combined and submitted as a payload using PUT `/path`.

A `200` response confirms that the individual document provided passes the system requirements.

A `422` response indicates one or more problems with the document that should be resolved before submitting it in the
full document submission payload.


> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "status": "valid"
    },
    "type": "documentValidation"
  }
}
```

> 401 Response

```json
{
  "Message": "Unauthorized Request"
}
```

> 403 Response

```json
{
  "Message": "Invalid authentication credentials"
}
```

> 422 Response

```json
{
  "errors": [
    {
      "detail": "Document is locked with a user password",
      "status": "422",
      "title": "Document failed validation"
    }
  ]
}
```

> 429 Response

```json
{
  "Message": "API rate limit exceeded"
}
```

> 500 Response

```json
{
  "code": 500,
  "detail": "Internal server error",
  "status": 500,
  "title": "Internal server error"
}
```

<h3 id="validate-an-individual-document-against-system-file-requirements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document passed system requirements|Inline|
|401|Unauthorized|Unauthorized request|Inline|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Document did NOT pass system requirements|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="validate-an-individual-document-against-system-file-requirements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» attributes|object|false|none|none|
|» » status|string|false|none|none|
|» type|string|false|none|schema type|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Error detail|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Error detail|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[DocumentValidationErrorModel](#schemadocumentvalidationerrormodel)]|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|message|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|detail|string|false|none|Human readable error detail. Only present if status = "error"|
|status|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|title|string|false|none|Human readable title description.|

<aside class="success">
This operation does not require authentication
</aside>

## Get status for a previous benefits document upload

<a id="opIdgetBenefitsDocumentUploadStatus"></a>

> Code samples

```bash
curl https://example.com/uploads/6d8433c1-cd55-4c24-affd-f592287a7572 \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /uploads/{id}`

<h3 id="get-status-for-a-previous-benefits-document-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|ID as returned by a previous create upload request|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "code": "string",
      "detail": "string",
      "guid": "6d8433c1-cd55-4c24-affd-f592287a7572",
      "message": "string",
      "status": "received",
      "updated_at": "2018-07-30T17:31:15.958Z",
      "uploaded_pdf": {
        "content": {
          "attachments": [
            {
              "dimensions": {
                "height": "11.0",
                "oversized_pdf": "false",
                "width": "8.5"
              },
              "page_count": "2"
            }
          ],
          "dimensions": {
            "height": "11.0",
            "oversized_pdf": "false",
            "width": "8.5"
          },
          "page_count": "1"
        },
        "total_documents": "2",
        "total_pages": "3"
      }
    },
    "id": "6d8433c1-cd55-4c24-affd-f592287a7572",
    "type": "document_upload"
  }
}
```

> 401 Response

```json
{
  "Message": "Unauthorized Request"
}
```

> 403 Response

```json
{
  "Message": "Invalid authentication credentials"
}
```

> 404 Response

```json
{
  "code": 404,
  "detail": "The record identified by {{id}} could not be found",
  "status": 404,
  "title": "Record not found"
}
```

> 429 Response

```json
{
  "Message": "API rate limit exceeded"
}
```

> 500 Response

```json
{
  "code": 500,
  "detail": "Internal server error",
  "status": 500,
  "title": "Internal server error"
}
```

<h3 id="get-status-for-a-previous-benefits-document-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload status retrieved successfully|Inline|
|401|Unauthorized|Unauthorized request|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="get-status-for-a-previous-benefits-document-upload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DocumentUploadStatus](#schemadocumentuploadstatus)|true|none|Status record for a previously initiated document submission.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Error detail|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Error detail|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|detail|string|false|none|Human readable error detail. Only present if status = "error"|
|status|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|title|string|false|none|Human readable title description.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|message|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|detail|string|false|none|Human readable error detail. Only present if status = "error"|
|status|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|title|string|false|none|Human readable title description.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Download zip of &quot;what the server sees&quot;

<a id="opIdgetBenefitsDocumentUploadDownload"></a>

> Code samples

```bash
curl https://example.com/uploads/6d8433c1-cd55-4c24-affd-f592287a7572/download \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /uploads/{id}/download`

An endpoint that will allow you to see exactly what the server sees. We split apart all submitted docs and metadata and zip the file to make it available to you to help with debugging purposes. Files are deleted after 10 days. Only available in testing environments, not production.

<h3 id="download-zip-of-what-the-server-sees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|ID as returned by a previous create upload request|

> Example responses

> 401 Response

```json
{
  "Message": "Unauthorized Request"
}
```

> 403 Response

```json
{
  "Message": "Invalid authentication credentials"
}
```

> 404 Response

```json
{
  "code": 404,
  "detail": "The record identified by {{id}} could not be found",
  "status": 404,
  "title": "Record not found"
}
```

> 429 Response

```json
{
  "Message": "API rate limit exceeded"
}
```

> 500 Response

```json
{
  "code": 500,
  "detail": "Internal server error",
  "status": 500,
  "title": "Internal server error"
}
```

<h3 id="download-zip-of-what-the-server-sees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Zip file with the contents of your payload as parsed by our server|Inline|
|401|Unauthorized|Unauthorized request|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|429|Too Many Requests|Too many requests|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="download-zip-of-what-the-server-sees-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Error detail|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Error detail|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|detail|string|false|none|Human readable error detail. Only present if status = "error"|
|status|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|title|string|false|none|Human readable title description.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|message|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|detail|string|false|none|Human readable error detail. Only present if status = "error"|
|status|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|title|string|false|none|Human readable title description.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

# Schemas

<h2 id="tocS_DocumentUploadAttributes">DocumentUploadAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadattributes"></a>
<a id="schema_DocumentUploadAttributes"></a>
<a id="tocSdocumentuploadattributes"></a>
<a id="tocsdocumentuploadattributes"></a>

```json
{
  "code": "string",
  "detail": "string",
  "guid": "6d8433c1-cd55-4c24-affd-f592287a7572",
  "location": "https://sandbox-api.va.gov/services_user_content/vba_documents/{idpath}",
  "status": "pending",
  "updated_at": "2018-07-30T17:31:15.958Z",
  "uploaded_pdf": "null"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|detail|string|false|none|Human readable error detail. Only present if status = "error"|
|guid|string(uuid)|true|none|The document upload identifier|
|location|string(uri)|false|none|Location to which to PUT document Payload|
|status|string|true|none|Document upload status.<br>|
|updated_at|string(date-time)|false|none|The last time the submission was updated|
|uploaded_pdf|object|false|none|Only populated after submission starts processing|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|uploaded|
|status|received|
|status|processing|
|status|success|
|status|vbms|
|status|error|

<h2 id="tocS_DocumentUploadFailure">DocumentUploadFailure</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadfailure"></a>
<a id="schema_DocumentUploadFailure"></a>
<a id="tocSdocumentuploadfailure"></a>
<a id="tocsdocumentuploadfailure"></a>

```json
{
  "Code": "SignatureDoesNotMatch",
  "Message": "The request signature we calculated does not match the signature you provided. Check your key and signing method."
}
```

Document upload failed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|Error code|
|Message|string|false|none|Error detail|

<h2 id="tocS_DocumentUploadMetadata">DocumentUploadMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadmetadata"></a>
<a id="schema_DocumentUploadMetadata"></a>
<a id="tocSdocumentuploadmetadata"></a>
<a id="tocsdocumentuploadmetadata"></a>

```json
{
  "businessLine": "CMP",
  "docType": "21-22",
  "fileNumber": "999887777",
  "source": "MyVSO",
  "veteranFirstName": "Jane",
  "veteranLastName": "Doe-Smith",
  "zipCode": "20571"
}
```

Identifying properties about the document payload being submitted

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessLine|string|false|none|Optional parameter (can be missing or empty). The values are:<br><br><br>CMP - Compensation requests such as those related to disability, unemployment, and pandemic claims<br><br><br>PMC - Pension requests including survivor’s pension<br><br><br>INS - Insurance such as life insurance, disability insurance, and other health insurance<br><br><br>EDU - Education benefits, programs, and affiliations<br><br><br>VRE - Veteran Readiness & Employment such as employment questionnaires, employment discrimination, employment verification<br><br><br>BVA - Board of Veteran Appeals<br><br><br>FID - Fiduciary / financial appointee, including family member benefits<br><br><br>OTH - Other (this value if used, will be treated as CMP)<br><br>|
|docType|string|false|none|VBA form number of the document|
|fileNumber|string|true|none|The Veteran's file number is exactly 9 digits with no alpha characters, hyphens, spaces or punctuation. In most cases, this is the Veteran's SSN but may also be an 8 digit BIRL number. If no file number has been established or if it is unknown, the application should use the Veteran's SSN and the file number will be associated with the submission later in the process. Incorrect file numbers can cause delays.|
|source|string|true|none|System, installation, or entity submitting the document|
|veteranFirstName|string|true|none|Veteran first name. Cannot be missing or empty or longer than 50 characters. Only upper/lower case letters, hyphens(-), spaces and forward-slash(/) allowed.|
|veteranLastName|string|true|none|Veteran last name. Cannot be missing or empty or longer than 50 characters. Only upper/lower case letters, hyphens(-), spaces and forward-slash(/) allowed.|
|zipCode|string|true|none|Veteran zip code. Either five digits (XXXXX) or five digits then four digits separated by a hyphen (XXXXX-XXXX). Use '00000' for Veterans with non-US addresses.|

#### Enumerated Values

|Property|Value|
|---|---|
|businessLine|CMP|
|businessLine|PMC|
|businessLine|INS|
|businessLine|EDU|
|businessLine|VRE|
|businessLine|BVA|
|businessLine|FID|
|businessLine|OTH|

<h2 id="tocS_DocumentUploadPath">DocumentUploadPath</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadpath"></a>
<a id="schema_DocumentUploadPath"></a>
<a id="tocSdocumentuploadpath"></a>
<a id="tocsdocumentuploadpath"></a>

```json
{
  "attributes": {
    "code": "string",
    "detail": "string",
    "guid": "6d8433c1-cd55-4c24-affd-f592287a7572",
    "location": "https://sandbox-api.va.gov/services_user_content/vba_documents/{idpath}",
    "status": "pending",
    "updated_at": "2018-07-30T17:31:15.958Z",
    "uploaded_pdf": "null"
  },
  "id": "6d8433c1-cd55-4c24-affd-f592287a7572",
  "type": "document_upload"
}
```

Status record for a previously initiated document submission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[DocumentUploadAttributes](#schemadocumentuploadattributes)|true|none|none|
|id|string(uuid)|true|none|JSON API identifier|
|type|string|true|none|JSON API type specification|

<h2 id="tocS_DocumentUploadStatus">DocumentUploadStatus</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadstatus"></a>
<a id="schema_DocumentUploadStatus"></a>
<a id="tocSdocumentuploadstatus"></a>
<a id="tocsdocumentuploadstatus"></a>

```json
{
  "attributes": {
    "code": "string",
    "detail": "string",
    "guid": "6d8433c1-cd55-4c24-affd-f592287a7572",
    "message": "string",
    "status": "received",
    "updated_at": "2018-07-30T17:31:15.958Z",
    "uploaded_pdf": {
      "content": {
        "attachments": [
          {
            "dimensions": {
              "height": "11.0",
              "oversized_pdf": "false",
              "width": "8.5"
            },
            "page_count": "2"
          }
        ],
        "dimensions": {
          "height": "11.0",
          "oversized_pdf": "false",
          "width": "8.5"
        },
        "page_count": "1"
      },
      "total_documents": "2",
      "total_pages": "3"
    }
  },
  "id": "6d8433c1-cd55-4c24-affd-f592287a7572",
  "type": "document_upload"
}
```

Status record for a previously initiated document submission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[DocumentUploadStatusAttributes](#schemadocumentuploadstatusattributes)|true|none|none|
|id|string(uuid)|true|none|JSON API identifier|
|type|string|true|none|JSON API type specification|

<h2 id="tocS_DocumentUploadStatusAttributes">DocumentUploadStatusAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadstatusattributes"></a>
<a id="schema_DocumentUploadStatusAttributes"></a>
<a id="tocSdocumentuploadstatusattributes"></a>
<a id="tocsdocumentuploadstatusattributes"></a>

```json
{
  "code": "string",
  "detail": "string",
  "guid": "6d8433c1-cd55-4c24-affd-f592287a7572",
  "message": "string",
  "status": "received",
  "updated_at": "2018-07-30T17:31:15.958Z",
  "uploaded_pdf": {
    "content": {
      "attachments": [
        {
          "dimensions": {
            "height": "11.0",
            "oversized_pdf": "false",
            "width": "8.5"
          },
          "page_count": "2"
        }
      ],
      "dimensions": {
        "height": "11.0",
        "oversized_pdf": "false",
        "width": "8.5"
      },
      "page_count": "1"
    },
    "total_documents": "2",
    "total_pages": "3"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|detail|string|false|none|Human readable error detail. Only present if status = "error"|
|guid|string(uuid)|true|none|The document upload identifier|
|message|string|false|none|Human readable error description. Only present if status = "error"|
|status|string|true|none|Document upload status.<br>|
|updated_at|string(date-time)|false|none|The last time the submission was updated|
|uploaded_pdf|[PdfUploadAttributes](#schemapdfuploadattributes)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|uploaded|
|status|received|
|status|processing|
|status|success|
|status|vbms|
|status|error|

<h2 id="tocS_DocumentUploadStatusGuidList">DocumentUploadStatusGuidList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadstatusguidlist"></a>
<a id="schema_DocumentUploadStatusGuidList"></a>
<a id="tocSdocumentuploadstatusguidlist"></a>
<a id="tocsdocumentuploadstatusguidlist"></a>

```json
{
  "ids": [
    "6d8433c1-cd55-4c24-affd-f592287a7572"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string(uuid)]|true|none|List of IDs for previous document upload submissions|

<h2 id="tocS_DocumentUploadStatusReport">DocumentUploadStatusReport</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadstatusreport"></a>
<a id="schema_DocumentUploadStatusReport"></a>
<a id="tocSdocumentuploadstatusreport"></a>
<a id="tocsdocumentuploadstatusreport"></a>

```json
[
  {
    "attributes": {
      "code": "string",
      "detail": "string",
      "guid": "6d8433c1-cd55-4c24-affd-f592287a7572",
      "message": "string",
      "status": "received",
      "updated_at": "2018-07-30T17:31:15.958Z",
      "uploaded_pdf": {
        "content": {
          "attachments": [
            {
              "dimensions": {
                "height": "11.0",
                "oversized_pdf": "false",
                "width": "8.5"
              },
              "page_count": "2"
            }
          ],
          "dimensions": {
            "height": "11.0",
            "oversized_pdf": "false",
            "width": "8.5"
          },
          "page_count": "1"
        },
        "total_documents": "2",
        "total_pages": "3"
      }
    },
    "id": "6d8433c1-cd55-4c24-affd-f592287a7572",
    "type": "document_upload"
  }
]
```

<h2 id="tocS_DocumentUploadSubmission">DocumentUploadSubmission</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadsubmission"></a>
<a id="schema_DocumentUploadSubmission"></a>
<a id="tocSdocumentuploadsubmission"></a>
<a id="tocsdocumentuploadsubmission"></a>

```json
{
  "attributes": {
    "code": "string",
    "detail": "string",
    "guid": "6d8433c1-cd55-4c24-affd-f592287a7572",
    "message": "string",
    "status": "received",
    "updated_at": "2018-07-30T17:31:15.958Z",
    "uploaded_pdf": {
      "content": {
        "attachments": [
          {
            "dimensions": {
              "height": "11.0",
              "oversized_pdf": "false",
              "width": "8.5"
            },
            "page_count": "2"
          }
        ],
        "dimensions": {
          "height": "11.0",
          "oversized_pdf": "false",
          "width": "8.5"
        },
        "page_count": "1"
      },
      "total_documents": "2",
      "total_pages": "3"
    }
  },
  "id": "6d8433c1-cd55-4c24-affd-f592287a7572",
  "type": "document_upload"
}
```

Record of requested document submission. Includes the location to which the document payload is to be uploaded

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[DocumentUploadSubmissionAttributes](#schemadocumentuploadsubmissionattributes)|true|none|none|
|id|string(uuid)|true|none|JSON API Identifier|
|type|string|true|none|JSON API type specification|

<h2 id="tocS_DocumentUploadSubmissionAttributes">DocumentUploadSubmissionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadocumentuploadsubmissionattributes"></a>
<a id="schema_DocumentUploadSubmissionAttributes"></a>
<a id="tocSdocumentuploadsubmissionattributes"></a>
<a id="tocsdocumentuploadsubmissionattributes"></a>

```json
{
  "code": "string",
  "detail": "string",
  "guid": "6d8433c1-cd55-4c24-affd-f592287a7572",
  "message": "string",
  "status": "received",
  "updated_at": "2018-07-30T17:31:15.958Z",
  "uploaded_pdf": {
    "content": {
      "attachments": [
        {
          "dimensions": {
            "height": "11.0",
            "oversized_pdf": "false",
            "width": "8.5"
          },
          "page_count": "2"
        }
      ],
      "dimensions": {
        "height": "11.0",
        "oversized_pdf": "false",
        "width": "8.5"
      },
      "page_count": "1"
    },
    "total_documents": "2",
    "total_pages": "3"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Unambiguous status code. Only present if status = "error"<br><br>* `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.<br>* `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.<br>* `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.<br>* `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.<br>* `DOC105` - Invalid or unknown id<br>* `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.<br>* `DOC107` - Empty payload.<br>* `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.<br>* `DOC201` - Upload server error.<br>* `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.<br>|
|detail|string|false|none|Human readable error detail. Only present if status = "error"|
|guid|string(uuid)|true|none|The document upload identifier|
|message|string|false|none|Human readable error description. Only present if status = "error"|
|status|string|true|none|Document upload status.<br>|
|updated_at|string(date-time)|false|none|The last time the submission was updated|
|uploaded_pdf|[PdfUploadAttributes](#schemapdfuploadattributes)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|uploaded|
|status|received|
|status|processing|
|status|success|
|status|vbms|
|status|error|

<h2 id="tocS_DocumentValidationErrorModel">DocumentValidationErrorModel</h2>
<!-- backwards compatibility -->
<a id="schemadocumentvalidationerrormodel"></a>
<a id="schema_DocumentValidationErrorModel"></a>
<a id="tocSdocumentvalidationerrormodel"></a>
<a id="tocsdocumentvalidationerrormodel"></a>

```json
{
  "detail": "Document is locked with a user password",
  "status": "422",
  "title": "Document failed validation"
}
```

Error returned from the document validation endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Error detail<br><br>Possible values:<br>* Document was not provided<br>* Document is not a PDF<br>* Document exceeds the file size limit of 100 MB<br>* Document exceeds the page size limit of 21 in. x 21 in.<br>* Document is locked with a user password<br>* Document is not a valid PDF<br>|
|status|string|true|none|HTTP error code|
|title|string|true|none|Error title|

<h2 id="tocS_ErrorModel">ErrorModel</h2>
<!-- backwards compatibility -->
<a id="schemaerrormodel"></a>
<a id="schema_ErrorModel"></a>
<a id="tocSerrormodel"></a>
<a id="tocserrormodel"></a>

```json
{
  "detail": "DOC104 - Upload rejected by upstream system. Processing failed and upload must be resubmitted",
  "status": "422"
}
```

Errors with some details for the given request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|A more detailed message about why an error occurred|
|status|integer(int32)|true|none|Standard HTTP Status returned with Error|

<h2 id="tocS_PdfDimensionAttributes">PdfDimensionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemapdfdimensionattributes"></a>
<a id="schema_PdfDimensionAttributes"></a>
<a id="tocSpdfdimensionattributes"></a>
<a id="tocspdfdimensionattributes"></a>

```json
{
  "height": "11.0",
  "oversized_pdf": "false",
  "width": "8.5"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer|true|none|The document height|
|oversized_pdf|boolean|true|none|Indicates if this is an oversized PDF (greater than 21x21)|
|width|integer|true|none|The document width|

<h2 id="tocS_PdfUploadAttributes">PdfUploadAttributes</h2>
<!-- backwards compatibility -->
<a id="schemapdfuploadattributes"></a>
<a id="schema_PdfUploadAttributes"></a>
<a id="tocSpdfuploadattributes"></a>
<a id="tocspdfuploadattributes"></a>

```json
{
  "content": {
    "attachments": [
      {
        "dimensions": {
          "height": "11.0",
          "oversized_pdf": "false",
          "width": "8.5"
        },
        "page_count": "2"
      }
    ],
    "dimensions": {
      "height": "11.0",
      "oversized_pdf": "false",
      "width": "8.5"
    },
    "page_count": "1"
  },
  "total_documents": "2",
  "total_pages": "3"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|true|none|none|
|total_documents|integer|true|none|The total number of documents contained in this upload|
|total_pages|integer|true|none|The total number of pages contained in this upload|
