<h1 id="api-v1">API v1 v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

DocSpring is a service that helps you fill out and sign PDF templates.

Base URLs:

* <a href="https://api.docspring.com/api/v1">https://api.docspring.com/api/v1</a>

# Authentication

- HTTP Authentication, scheme: basic Username: API Token ID, Password: API Token Secret

<h1 id="api-v1-pdf">PDF</h1>

## Test Authentication

<a id="opIdtestAuthentication"></a>

> Code samples

```bash
curl https://example.com/authentication \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /authentication`

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

<h3 id="test-authentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|authentication succeeded|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|

<h3 id="test-authentication-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Get a list of all combined submissions

<a id="opIdlistCombinedSubmissions"></a>

> Code samples

```bash
curl https://example.com/combined_submissions \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /combined_submissions`

<h3 id="get-a-list-of-all-combined-submissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Default: 1|
|per_page|query|integer|false|Default: 50|

> Example responses

> 200 Response

```json
[
  {
    "actions": [],
    "download_url": null,
    "error_message": null,
    "expired": false,
    "expires_at": null,
    "expires_in": null,
    "id": "com_000000000000000001",
    "metadata": {},
    "password": null,
    "pdf_hash": null,
    "processed_at": null,
    "source_pdfs": [],
    "state": "pending",
    "submission_ids": []
  },
  {
    "actions": [],
    "download_url": "https://example.com/combined_submissions/combined_submission.pdf",
    "error_message": null,
    "expired": false,
    "expires_at": null,
    "expires_in": null,
    "id": "com_000000000000000002",
    "metadata": {},
    "password": null,
    "pdf_hash": null,
    "processed_at": "2023-01-05T14:00:00Z",
    "source_pdfs": [],
    "state": "processed",
    "submission_ids": []
  },
  {
    "actions": [],
    "download_url": null,
    "error_message": "Something went wrong",
    "expired": false,
    "expires_at": null,
    "expires_in": 123,
    "id": "com_000000000000000003",
    "metadata": {},
    "password": null,
    "pdf_hash": null,
    "processed_at": null,
    "source_pdfs": [],
    "state": "error",
    "submission_ids": []
  },
  {
    "actions": [],
    "download_url": null,
    "error_message": null,
    "expired": true,
    "expires_at": "2023-01-05T14:05:00Z",
    "expires_in": 345,
    "id": "com_000000000000000004",
    "metadata": {},
    "password": null,
    "pdf_hash": null,
    "processed_at": "2023-01-05T14:00:00Z",
    "source_pdfs": [],
    "state": "processed",
    "submission_ids": []
  }
]
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

<h3 id="get-a-list-of-all-combined-submissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|enumerate all combined submissions|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|

<h3 id="get-a-list-of-all-combined-submissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» actions|[[combined_submission_action](#schemacombined_submission_action)]|false|none|none|
|» download_url|string \| null|false|none|none|
|» error_message|string \| null|false|none|none|
|» expired|boolean|true|none|none|
|» expires_at|string \| null|false|none|none|
|» expires_in|integer \| null|false|none|none|
|» id|string|true|none|none|
|» metadata|object|false|none|none|
|» password|string \| null|false|none|none|
|» pdf_hash|string \| null|false|none|none|
|» source_pdfs|[object]|true|none|none|
|» » *oneOf*|object|false|none|none|
|» » id|string|true|none|none|
|» » type|string|true|none|none|
|» » *oneOf*|object|false|none|none|
|» » type|string|true|none|none|
|» » url|string(uri)|true|none|none|
|» state|string|true|none|none|
|» submission_ids|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|submission|
|» » type|combined_submission|
|» » type|template|
|» » type|custom_file|
|» » type|url|
|» state|pending|
|» state|processed|
|» state|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Merge generated PDFs together

<a id="opIdcombineSubmissions"></a>

> Code samples

```bash
curl https://example.com/combined_submissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "expires_in": 300,
    "metadata": {
      "bar": "baz",
      "foo": 123
    },
    "password": "p@ssword",
    "submission_ids": [
      "sub_000000000000000001",
      "sub_000000000000000002"
    ]
  }'
```

`POST /combined_submissions`

> Body parameter

```json
{
  "expires_in": 300,
  "metadata": {
    "bar": "baz",
    "foo": 123
  },
  "password": "p@ssword",
  "submission_ids": [
    "sub_000000000000000001",
    "sub_000000000000000002"
  ]
}
```

<h3 id="merge-generated-pdfs-together-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» expires_in|body|integer|false|none|
|» metadata|body|object|false|none|
|» password|body|string|false|none|
|» submission_ids|body|[string]|true|none|
|» test|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "combined_submission": {
    "actions": [],
    "download_url": null,
    "error_message": null,
    "expired": false,
    "expires_at": null,
    "expires_in": 300,
    "id": "com_000000000000000001",
    "metadata": {
      "bar": "baz",
      "foo": 123
    },
    "password": "p@ssword",
    "pdf_hash": null,
    "processed_at": null,
    "source_pdfs": [],
    "state": "pending",
    "submission_ids": [
      "sub_000000000000000001",
      "sub_000000000000000002"
    ]
  },
  "status": "success"
}
```

> 400 Response

```json
{
  "error": "There was a problem with the JSON you submitted: unexpected character at line 1, column 37 in '{ \"submission_ids\": [\"123\", \"345\"], metadata: { \"user_id\": \"@#)(*%$)@(#*%@&%\" }}",
  "status": "error"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 422 Response

```json
{
  "errors": [
    "source_pdfs: Could not find Submission with ID: MISSING_ID"
  ],
  "status": "error"
}
```

<h3 id="merge-generated-pdfs-together-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|combined submission created|Inline|
|400|Bad Request|invalid JSON|[error](#schemaerror)|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|422|Unprocessable Entity|invalid request|[invalid_request](#schemainvalid_request)|

<h3 id="merge-generated-pdfs-together-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|combined_submission|object|true|none|none|
|» actions|[[combined_submission_action](#schemacombined_submission_action)]|false|none|none|
|» download_url|string \| null|false|none|none|
|» error_message|string \| null|false|none|none|
|» expired|boolean|true|none|none|
|» expires_at|string \| null|false|none|none|
|» expires_in|integer \| null|false|none|none|
|» id|string|true|none|none|
|» metadata|object|false|none|none|
|» password|string \| null|false|none|none|
|» pdf_hash|string \| null|false|none|none|
|» source_pdfs|[object]|true|none|none|
|» » *oneOf*|object|false|none|none|
|» » id|string|true|none|none|
|» » type|string|true|none|none|
|» » *oneOf*|object|false|none|none|
|» » type|string|true|none|none|
|» » url|string(uri)|true|none|none|
|» state|string|true|none|none|
|» submission_ids|[string]|true|none|none|
|errors|[string]|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|submission|
|» » type|combined_submission|
|» » type|template|
|» » type|custom_file|
|» » type|url|
|» state|pending|
|» state|processed|
|» state|error|
|status|success|
|status|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Check the status of a combined submission (merged PDFs)

<a id="opIdgetCombinedSubmission"></a>

> Code samples

```bash
curl https://example.com/combined_submissions/com_000000000000000001 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /combined_submissions/{combined_submission_id}`

<h3 id="check-the-status-of-a-combined-submission-merged-pdfs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|combined_submission_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "action_category": "file_upload",
      "action_type": "aws_s3_upload",
      "id": "csa_000000000000000001",
      "integration_id": "aci_000000000000000001",
      "result_data": {
        "s3_bucket": "docspring-custom-s3-test",
        "s3_key": "acc_1234/2018/combined_submissions/20181005090010-com_1234.pdf",
        "s3_region": "us-east-1",
        "s3_url": "https://docspring-custom-s3-test.s3.amazonaws.com/acc_1234/2018/combined_submissions/20181005090010-com_1234.pdf"
      },
      "state": "processed"
    }
  ],
  "download_url": "https://example.com/combined_submissions/combined_submission.pdf",
  "error_message": null,
  "expired": false,
  "expires_at": "2018-10-20T13:05:00Z",
  "expires_in": 300,
  "id": "com_000000000000000001",
  "metadata": {
    "qux": "abc",
    "user_id": 42
  },
  "password": "p@ssword",
  "pdf_hash": "12342342471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
  "processed_at": "2020-05-14T02:00:00Z",
  "source_pdfs": [],
  "state": "processed",
  "submission_ids": [
    "sub_000000000000000001",
    "sub_000000000000000002"
  ]
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 404 Response

```json
{
  "error": "Combined submission not found.",
  "status": "error"
}
```

<h3 id="check-the-status-of-a-combined-submission-merged-pdfs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|processed combined submission found|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|404|Not Found|combined submission not found|[error](#schemaerror)|

<h3 id="check-the-status-of-a-combined-submission-merged-pdfs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[combined_submission_action](#schemacombined_submission_action)]|false|none|none|
|download_url|string \| null|false|none|none|
|error_message|string \| null|false|none|none|
|expired|boolean|true|none|none|
|expires_at|string \| null|false|none|none|
|expires_in|integer \| null|false|none|none|
|id|string|true|none|none|
|metadata|object|false|none|none|
|password|string \| null|false|none|none|
|pdf_hash|string \| null|false|none|none|
|source_pdfs|[object]|true|none|none|
|» *oneOf*|object|false|none|none|
|» id|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» type|string|true|none|none|
|» url|string(uri)|true|none|none|
|state|string|true|none|none|
|submission_ids|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|submission|
|» type|combined_submission|
|» type|template|
|» type|custom_file|
|» type|url|
|state|pending|
|state|processed|
|state|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Expire a combined submission

<a id="opIdexpireCombinedSubmission"></a>

> Code samples

```bash
curl https://example.com/combined_submissions/com_000000000000000001 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /combined_submissions/{combined_submission_id}`

<h3 id="expire-a-combined-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|combined_submission_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "action_category": "file_upload",
      "action_type": "aws_s3_upload",
      "id": "csa_000000000000000001",
      "integration_id": "aci_000000000000000001",
      "result_data": {
        "s3_bucket": "docspring-custom-s3-test",
        "s3_key": "acc_1234/2018/combined_submissions/20181005090010-com_1234.pdf",
        "s3_region": "us-east-1",
        "s3_url": "https://docspring-custom-s3-test.s3.amazonaws.com/acc_1234/2018/combined_submissions/20181005090010-com_1234.pdf"
      },
      "state": "processed"
    }
  ],
  "download_url": null,
  "error_message": null,
  "expired": true,
  "expires_at": "2018-10-20T13:00:00Z",
  "expires_in": 300,
  "id": "com_000000000000000001",
  "metadata": {
    "qux": "abc",
    "user_id": 42
  },
  "password": "p@ssword",
  "pdf_hash": "12342342471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
  "processed_at": "2020-05-14T02:00:00Z",
  "source_pdfs": [],
  "state": "processed",
  "submission_ids": [
    "sub_000000000000000001",
    "sub_000000000000000002"
  ]
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "You must use a live API token to expire a combined submission.",
  "status": "error"
}
```

> 404 Response

```json
{
  "error": "Combined submission not found.",
  "status": "error"
}
```

<h3 id="expire-a-combined-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|submission was expired|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|403|Forbidden|test API token used|[error](#schemaerror)|
|404|Not Found|combined submission not found|[error](#schemaerror)|

<h3 id="expire-a-combined-submission-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[combined_submission_action](#schemacombined_submission_action)]|false|none|none|
|download_url|string \| null|false|none|none|
|error_message|string \| null|false|none|none|
|expired|boolean|true|none|none|
|expires_at|string \| null|false|none|none|
|expires_in|integer \| null|false|none|none|
|id|string|true|none|none|
|metadata|object|false|none|none|
|password|string \| null|false|none|none|
|pdf_hash|string \| null|false|none|none|
|source_pdfs|[object]|true|none|none|
|» *oneOf*|object|false|none|none|
|» id|string|true|none|none|
|» type|string|true|none|none|
|» *oneOf*|object|false|none|none|
|» type|string|true|none|none|
|» url|string(uri)|true|none|none|
|state|string|true|none|none|
|submission_ids|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|submission|
|» type|combined_submission|
|» type|template|
|» type|custom_file|
|» type|url|
|state|pending|
|state|processed|
|state|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Merge submission PDFs, template PDFs, or custom files

<a id="opIdcombinePdfs"></a>

> Code samples

```bash
curl 'https://example.com/combined_submissions?v=2' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "delete_custom_files": true,
    "expires_in": 300,
    "metadata": {
      "bar": "baz",
      "foo": 123
    },
    "source_pdfs": [
      {
        "id": "sub_000000000000000001",
        "type": "submission"
      },
      {
        "id": "tpl_000000000000000001",
        "type": "template"
      },
      {
        "id": "sub_000000000000000002",
        "type": "submission"
      },
      {
        "id": "cfi_0000000000000000000000001",
        "type": "custom_file"
      },
      {
        "id": "com_000000000000000001",
        "type": "combined_submission"
      },
      {
        "type": "url",
        "url": "http://example.com/test-pdf.pdf"
      }
    ]
  }'
```

`POST /combined_submissions?v=2`

> Body parameter

```json
{
  "delete_custom_files": true,
  "expires_in": 300,
  "metadata": {
    "bar": "baz",
    "foo": 123
  },
  "source_pdfs": [
    {
      "id": "sub_000000000000000001",
      "type": "submission"
    },
    {
      "id": "tpl_000000000000000001",
      "type": "template"
    },
    {
      "id": "sub_000000000000000002",
      "type": "submission"
    },
    {
      "id": "cfi_0000000000000000000000001",
      "type": "custom_file"
    },
    {
      "id": "com_000000000000000001",
      "type": "combined_submission"
    },
    {
      "type": "url",
      "url": "http://example.com/test-pdf.pdf"
    }
  ]
}
```

<h3 id="merge-submission-pdfs-template-pdfs-or-custom-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» delete_custom_files|body|boolean|false|none|
|» expires_in|body|integer|false|none|
|» metadata|body|object|false|none|
|» password|body|string|false|none|
|» source_pdfs|body|[object]|true|none|
|» » *oneOf*|body|object|false|none|
|» » id|body|string|true|none|
|» » type|body|string|true|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|true|none|
|» » url|body|string(uri)|true|none|
|» test|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|submission|
|» » type|combined_submission|
|» » type|template|
|» » type|custom_file|
|» » type|url|

> Example responses

> 201 Response

```json
{
  "combined_submission": {
    "actions": [
      {
        "action_category": "file_upload",
        "action_type": "aws_s3_upload",
        "id": "csa_000000000000000002",
        "integration_id": "aci_000000000000000001",
        "result_data": {
          "s3_bucket": "docspring-custom-s3-test",
          "s3_key": "acc_1234/2018/combined_submissions/20181005090010-com_1234.pdf",
          "s3_region": "us-east-1",
          "s3_url": "https://docspring-custom-s3-test.s3.amazonaws.com/acc_1234/2018/combined_submissions/20181005090010-com_1234.pdf"
        },
        "state": "processed"
      }
    ],
    "download_url": null,
    "error_message": null,
    "expired": false,
    "expires_at": null,
    "expires_in": 300,
    "id": "com_000000000000000002",
    "metadata": {
      "bar": "baz",
      "foo": 123
    },
    "password": null,
    "pdf_hash": null,
    "processed_at": null,
    "source_pdfs": [
      {
        "id": "sub_000000000000000001",
        "type": "submission"
      },
      {
        "id": "tpl_000000000000000001",
        "type": "template"
      },
      {
        "id": "sub_000000000000000002",
        "type": "submission"
      },
      {
        "id": "cfi_0000000000000000000000001",
        "type": "custom_file"
      },
      {
        "id": "com_000000000000000001",
        "type": "combined_submission"
      },
      {
        "type": "url",
        "url": "http://example.com/test-pdf.pdf"
      }
    ],
    "state": "pending",
    "submission_ids": [
      "sub_000000000000000001",
      "sub_000000000000000002"
    ]
  },
  "status": "success"
}
```

> 400 Response

```json
{
  "error": "There was a problem with the JSON you submitted: unexpected character at line 1, column 34 in '{ \"source_pdfs\": [\"123\", \"345\"], metadata: { \"user_id\": \"@#*&%)(@*#%&(@#!\" }}",
  "status": "error"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 422 Response

```json
{
  "errors": [
    "source_pdfs: Could not find Submission with ID: MISSING_SUBMISSION_ID",
    "source_pdfs: Template document is not processed: tpl_000000000000000001 (state: pending)",
    "source_pdfs: Could not find Template with ID: MISSING_TEMPLATE_ID",
    "source_pdfs: Could not find Custom File with ID: MISSING_CUSTOM_FILE_ID",
    "source_pdfs: Could not find Combined Submission with ID: MISSING_COMBINED_SUBMISSION_ID"
  ],
  "status": "error"
}
```

<h3 id="merge-submission-pdfs-template-pdfs-or-custom-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|combined submission created|Inline|
|400|Bad Request|invalid JSON|[error](#schemaerror)|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|422|Unprocessable Entity|invalid request|[invalid_request](#schemainvalid_request)|

<h3 id="merge-submission-pdfs-template-pdfs-or-custom-files-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|combined_submission|object|true|none|none|
|» actions|[[combined_submission_action](#schemacombined_submission_action)]|false|none|none|
|» download_url|string \| null|false|none|none|
|» error_message|string \| null|false|none|none|
|» expired|boolean|true|none|none|
|» expires_at|string \| null|false|none|none|
|» expires_in|integer \| null|false|none|none|
|» id|string|true|none|none|
|» metadata|object|false|none|none|
|» password|string \| null|false|none|none|
|» pdf_hash|string \| null|false|none|none|
|» source_pdfs|[object]|true|none|none|
|» » *oneOf*|object|false|none|none|
|» » id|string|true|none|none|
|» » type|string|true|none|none|
|» » *oneOf*|object|false|none|none|
|» » type|string|true|none|none|
|» » url|string(uri)|true|none|none|
|» state|string|true|none|none|
|» submission_ids|[string]|true|none|none|
|errors|[string]|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|submission|
|» » type|combined_submission|
|» » type|template|
|» » type|custom_file|
|» » type|url|
|» state|pending|
|» state|processed|
|» state|error|
|status|success|
|status|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Create a new custom file from a cached presign upload

<a id="opIdcreateCustomFileFromUpload"></a>

> Code samples

```bash
curl https://example.com/custom_files \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "cache_id": "00000000000000001.pdf"
  }'
```

`POST /custom_files`

> Body parameter

```json
{
  "cache_id": "00000000000000001.pdf"
}
```

<h3 id="create-a-new-custom-file-from-a-cached-presign-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» cache_id|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "custom_file": {
    "id": "cfi_000000000000000001",
    "url": "/uploads/test/store/acc_000000000000000001/custom_files/cfi_000000000000000001.pdf"
  },
  "status": "success"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

<h3 id="create-a-new-custom-file-from-a-cached-presign-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|returns the custom file|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|

<h3 id="create-a-new-custom-file-from-a-cached-presign-upload-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_file|object|true|none|none|
|» id|string|true|none|none|
|» url|string|true|none|none|
|errors|[string]|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Look up a submission data request

<a id="opIdgetDataRequest"></a>

> Code samples

```bash
curl https://example.com/data_requests/drq_000000000000000001 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /data_requests/{data_request_id}`

<h3 id="look-up-a-submission-data-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|data_request_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "auth_phone_number_hash": "fdcc3985b0698d655137019b1e776171081369f0aad125b8c7f57af2b8225490",
  "auth_provider": null,
  "auth_second_factor_type": "phone_number",
  "auth_session_id_hash": null,
  "auth_session_started_at": "2018-10-23T13:00:00Z",
  "auth_type": "password",
  "auth_user_id_hash": "8ae0e445664ca53407906db8638d8ba07a2383f656383a4427bed1ab645ca29a",
  "auth_username_hash": "b7c141423f7030a6a771563ee0731192ea871146653a3d0cf8f8b78ca8f9699b",
  "completed_at": null,
  "data": {
    "last_name": "Smithers"
  },
  "email": "jdoe@example.com",
  "fields": [
    "last_name"
  ],
  "id": "drq_000000000000000001",
  "ip_address": "1.1.1.1",
  "metadata": {
    "user_id": 42
  },
  "name": "John Doe",
  "order": 1,
  "sort_order": 0,
  "state": "pending",
  "submission_id": "sub_000000000000000001",
  "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36",
  "viewed_at": null
}
```

> 401 Response

```json
{
  "error": "Invalid API token secret"
}
```

> 404 Response

```json
{
  "error": "Data request not found.",
  "status": "error"
}
```

<h3 id="look-up-a-submission-data-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|completed submission data request found|[submission_data_request](#schemasubmission_data_request)|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|404|Not Found|submission data request not found|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Update a submission data request

<a id="opIdupdateDataRequest"></a>

> Code samples

```bash
curl https://example.com/data_requests/drq_000000000000000001 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "auth_provider": "google",
    "auth_session_id_hash": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
    "auth_session_started_at": "2018-10-23 09:00:00 -0400",
    "auth_type": "oauth",
    "metadata": {
      "user_id": 123
    }
  }'
```

`PUT /data_requests/{data_request_id}`

> Body parameter

```json
{
  "auth_provider": "google",
  "auth_session_id_hash": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
  "auth_session_started_at": "2018-10-23 09:00:00 -0400",
  "auth_type": "oauth",
  "metadata": {
    "user_id": 123
  }
}
```

<h3 id="update-a-submission-data-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|data_request_id|path|string|true|none|
|body|body|object|true|none|
|» auth_phone_number_hash|body|string \| null|false|none|
|» auth_provider|body|string \| null|false|none|
|» auth_second_factor_type|body|string|false|none|
|» auth_session_id_hash|body|string \| null|false|none|
|» auth_session_started_at|body|string \| null|false|none|
|» auth_type|body|string|false|none|
|» auth_user_id_hash|body|string \| null|false|none|
|» auth_username_hash|body|string \| null|false|none|
|» email|body|string \| null|false|none|
|» fields|body|[string]|false|none|
|» metadata|body|object|false|none|
|» name|body|string \| null|false|none|
|» order|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» auth_second_factor_type|none|
|» auth_second_factor_type|phone_number|
|» auth_second_factor_type|totp|
|» auth_second_factor_type|mobile_push|
|» auth_second_factor_type|security_key|
|» auth_second_factor_type|fingerprint|
|» auth_type|none|
|» auth_type|password|
|» auth_type|oauth|
|» auth_type|email_link|
|» auth_type|phone_number|
|» auth_type|ldap|
|» auth_type|saml|

> Example responses

> 200 Response

```json
{
  "data_request": {
    "auth_phone_number_hash": null,
    "auth_provider": "google",
    "auth_second_factor_type": "none",
    "auth_session_id_hash": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
    "auth_session_started_at": "2018-10-23T13:00:00Z",
    "auth_type": "oauth",
    "auth_user_id_hash": null,
    "auth_username_hash": null,
    "completed_at": null,
    "data": {
      "last_name": "Smithers"
    },
    "email": "jdoe@example.com",
    "fields": [
      "last_name"
    ],
    "id": "drq_000000000000000001",
    "ip_address": "1.1.1.1",
    "metadata": {
      "user_id": 123
    },
    "name": "John Doe",
    "order": 1,
    "sort_order": 0,
    "state": "pending",
    "submission_id": "sub_000000000000000001",
    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36",
    "viewed_at": null
  },
  "status": "success"
}
```

> 401 Response

```json
{
  "error": "Invalid API token secret"
}
```

> 404 Response

```json
{
  "error": "Data request not found.",
  "status": "error"
}
```

> 422 Response

```json
{
  "errors": [
    "Data requests cannot be updated after they have been completed."
  ],
  "status": "error"
}
```

<h3 id="update-a-submission-data-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|submission data request updated|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|404|Not Found|submission data request not found|[error](#schemaerror)|
|422|Unprocessable Entity|invalid request|[invalid_request](#schemainvalid_request)|

<h3 id="update-a-submission-data-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_request|[submission_data_request](#schemasubmission_data_request)|true|none|none|
|errors|[string]|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Creates a new data request token for form authentication

<a id="opIdcreateDataRequestToken"></a>

> Code samples

```bash
curl https://example.com/data_requests/drq_000000000000000001/tokens \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /data_requests/{data_request_id}/tokens`

<h3 id="creates-a-new-data-request-token-for-form-authentication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|data_request_id|path|string|true|none|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "token": {
    "data_request_url": "http://app.docspring.local/data_requests/drq_000000000000000001?token_id=000000000000000001&token_secret=ABCDEF01234567890",
    "expires_at": "2018-10-20T14:00:00Z",
    "id": "000000000000000001",
    "secret": "ABCDEF01234567890"
  }
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

<h3 id="creates-a-new-data-request-token-for-form-authentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|token created|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|

<h3 id="creates-a-new-data-request-token-for-form-authentication-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[string]|false|none|none|
|status|string|true|none|none|
|token|object|true|none|none|
|» data_request_url|string|true|none|none|
|» expires_at|string|true|none|none|
|» id|string|true|none|none|
|» secret|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Get a list of all folders

<a id="opIdlistFolders"></a>

> Code samples

```bash
curl https://example.com/folders/ \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /folders/`

<h3 id="get-a-list-of-all-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent_folder_id|query|string|false|Filter By Folder Id|

> Example responses

> 200 Response

```json
[
  {
    "id": "fld_000000000000000003",
    "name": "nested folder 1",
    "parent_folder_id": "fld_000000000000000002",
    "path": "/Folder 2"
  },
  {
    "id": "fld_000000000000000002",
    "name": "Folder 2",
    "parent_folder_id": null,
    "path": "/"
  },
  {
    "id": "fld_000000000000000001",
    "name": "Folder 1",
    "parent_folder_id": null,
    "path": "/"
  }
]
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

<h3 id="get-a-list-of-all-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|enumerate all folders|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|

<h3 id="get-a-list-of-all-folders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string|false|none|none|
|» name|string|false|none|none|
|» parent_folder_id|string \| null|false|none|none|
|» path|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Create a folder

<a id="opIdcreateFolder"></a>

> Code samples

```bash
curl https://example.com/folders/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "folder": {
      "name": "Folder 3"
    }
  }'
```

`POST /folders/`

> Body parameter

```json
{
  "folder": {
    "name": "Folder 3"
  }
}
```

<h3 id="create-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» folder|body|object|true|none|
|» » name|body|string|true|none|
|» » parent_folder_id|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "fld_0000000000000000n1",
  "name": "Folder 3",
  "parent_folder_id": null,
  "path": "/"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 404 Response

```json
{
  "error": "string",
  "status": "error"
}
```

> 422 Response

```json
{
  "id": "string",
  "name": "string",
  "parent_folder_id": "string",
  "path": "string"
}
```

<h3 id="create-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|folder created inside another folder|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|404|Not Found|parent folder doesnt exist|[error](#schemaerror)|
|422|Unprocessable Entity|name already exist|Inline|

<h3 id="create-a-folder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|parent_folder_id|string \| null|false|none|none|
|path|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|parent_folder_id|string \| null|false|none|none|
|path|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Delete a folder

<a id="opIddeleteFolder"></a>

> Code samples

```bash
curl https://example.com/folders/fld_000000000000000001 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /folders/{folder_id}`

<h3 id="delete-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "fld_000000000000000001",
  "name": "Folder 1",
  "parent_folder_id": null,
  "path": "/"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 404 Response

```json
{
  "error": "string",
  "status": "error"
}
```

> 422 Response

```json
{
  "error": "string",
  "status": "error"
}
```

<h3 id="delete-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|folder is empty|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|404|Not Found|folder doesnt exist|[error](#schemaerror)|
|422|Unprocessable Entity|folder has contents|[error](#schemaerror)|

<h3 id="delete-a-folder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|parent_folder_id|string \| null|false|none|none|
|path|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Move a folder

<a id="opIdmoveFolderToFolder"></a>

> Code samples

```bash
curl https://example.com/folders/fld_000000000000000001/move \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "parent_folder_id": "fld_000000000000000002"
  }'
```

`POST /folders/{folder_id}/move`

> Body parameter

```json
{
  "parent_folder_id": "fld_000000000000000002"
}
```

<h3 id="move-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder_id|path|string|true|none|
|body|body|object|true|none|
|» parent_folder_id|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "fld_000000000000000001",
  "name": "Folder 1",
  "parent_folder_id": "fld_000000000000000002",
  "path": "/Folder 2"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 404 Response

```json
{
  "error": "string",
  "status": "error"
}
```

<h3 id="move-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|move to root folder|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|404|Not Found|parent folder doesnt exist|[error](#schemaerror)|

<h3 id="move-a-folder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|parent_folder_id|string \| null|false|none|none|
|path|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Rename a folder

<a id="opIdrenameFolder"></a>

> Code samples

```bash
curl https://example.com/folders/fld_000000000000000001/rename \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "Folder 3"
  }'
```

`POST /folders/{folder_id}/rename`

> Body parameter

```json
{
  "name": "Folder 3"
}
```

<h3 id="rename-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder_id|path|string|true|none|
|body|body|object|true|none|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "fld_000000000000000001",
  "name": "Folder 3",
  "parent_folder_id": null,
  "path": "/"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

<h3 id="rename-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful rename|None|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|404|Not Found|folder doesnt belong to me|None|
|422|Unprocessable Entity|name already exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## List all submissions

<a id="opIdlistSubmissions"></a>

> Code samples

```bash
curl https://example.com/submissions \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /submissions`

<h3 id="list-all-submissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|number|false|none|
|created_after|query|string|false|none|
|created_before|query|string|false|none|
|type|query|string|false|none|
|include_data|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "limit": 3,
  "next_cursor": "sub_list_000003",
  "submissions": [
    {
      "actions": [],
      "batch_id": null,
      "data": {
        "first_name": "John C. D. Rom Laserdisk F. Scott Fitzgerald",
        "last_name": "Smith",
        "phone_number": "+11234567890"
      },
      "data_requests": [],
      "download_url": "https://example.com/submissions/submission.pdf",
      "editable": false,
      "expired": false,
      "expires_at": "2020-10-27T13:00:00Z",
      "id": "sub_list_000001",
      "json_schema_errors": [],
      "metadata": {
        "qux": "abc",
        "user_id": 42
      },
      "password": null,
      "pdf_hash": "bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
      "permanent_download_url": "http://app.docspring.local/submissions/sub_list_000001/download",
      "processed_at": "2020-05-14T02:00:00Z",
      "referrer": null,
      "source": "api",
      "state": "processed",
      "template_id": "tpl_000000000000000001",
      "test": true,
      "truncated_text": {
        "first_name": [
          "F. Scott Fitzgerald"
        ]
      }
    },
    {
      "actions": [],
      "batch_id": null,
      "data": {
        "first_name": "John C. D. Rom Laserdisk F. Scott Fitzgerald",
        "last_name": "Smith",
        "phone_number": "+11234567890"
      },
      "data_requests": [],
      "download_url": "https://example.com/submissions/submission.pdf",
      "editable": false,
      "expired": false,
      "expires_at": "2020-10-27T13:00:00Z",
      "id": "sub_list_000002",
      "json_schema_errors": [],
      "metadata": {
        "qux": "abc",
        "user_id": 42
      },
      "password": null,
      "pdf_hash": "bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
      "permanent_download_url": "http://app.docspring.local/submissions/sub_list_000002/download",
      "processed_at": "2020-05-14T02:00:00Z",
      "referrer": null,
      "source": "api",
      "state": "processed",
      "template_id": "tpl_000000000000000001",
      "test": true,
      "truncated_text": {
        "first_name": [
          "F. Scott Fitzgerald"
        ]
      }
    },
    {
      "actions": [],
      "batch_id": null,
      "data": {
        "first_name": "John C. D. Rom Laserdisk F. Scott Fitzgerald",
        "last_name": "Smith",
        "phone_number": "+11234567890"
      },
      "data_requests": [],
      "download_url": "https://example.com/submissions/submission.pdf",
      "editable": false,
      "expired": false,
      "expires_at": "2020-10-27T13:00:00Z",
      "id": "sub_list_000003",
      "json_schema_errors": [],
      "metadata": {
        "qux": "abc",
        "user_id": 42
      },
      "password": null,
      "pdf_hash": "bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
      "permanent_download_url": "http://app.docspring.local/submissions/sub_list_000003/download",
      "processed_at": "2020-05-14T02:00:00Z",
      "referrer": null,
      "source": "api",
      "state": "processed",
      "template_id": "tpl_000000000000000001",
      "test": true,
      "truncated_text": {
        "first_name": [
          "F. Scott Fitzgerald"
        ]
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error": "Invalid submission type: 'foo'",
  "status": "error"
}
```

> 401 Response

```json
{
  "error": "Invalid API token secret"
}
```

<h3 id="list-all-submissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|listing submissions|Inline|
|400|Bad Request|invalid type|[error](#schemaerror)|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|

<h3 id="list-all-submissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|number|true|none|none|
|next_cursor|string \| null|true|none|none|
|submissions|[[submission](#schemasubmission)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Generates multiple PDFs

<a id="opIdbatchGeneratePdfs"></a>

> Code samples

```bash
curl https://example.com/submissions/batches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "metadata": {
      "job_id": 54321
    },
    "submissions": [
      {
        "data": {
          "first_name": "Johnny",
          "last_name": "Smith"
        },
        "metadata": {
          "submission_number": 1
        },
        "template_id": "tpl_000000000000000001",
        "test": false
      },
      {
        "data": {
          "first_name": "Jane",
          "last_name": "Doe"
        },
        "metadata": {
          "submission_number": 2
        },
        "template_id": "tpl_000000000000000001"
      }
    ],
    "template_id": null,
    "test": true
  }'
```

`POST /submissions/batches`

> Body parameter

```json
{
  "metadata": {
    "job_id": 54321
  },
  "submissions": [
    {
      "data": {
        "first_name": "Johnny",
        "last_name": "Smith"
      },
      "metadata": {
        "submission_number": 1
      },
      "template_id": "tpl_000000000000000001",
      "test": false
    },
    {
      "data": {
        "first_name": "Jane",
        "last_name": "Doe"
      },
      "metadata": {
        "submission_number": 2
      },
      "template_id": "tpl_000000000000000001"
    }
  ],
  "template_id": null,
  "test": true
}
```

<h3 id="generates-multiple-pdfs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» metadata|body|object|false|none|
|» submissions|body|[object]|true|none|
|» » css|body|string|false|none|
|» » data|body|object|true|none|
|» » html|body|string|false|none|
|» » metadata|body|object|false|none|
|» » template_id|body|string \| null|true|none|
|» » test|body|boolean|false|none|
|» template_id|body|string \| null|false|none|
|» test|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "status": "error",
  "submission_batch": {
    "completion_percentage": 100,
    "error_count": 1,
    "id": "sbb_000000000000000001",
    "metadata": {
      "job_id": 54321
    },
    "pending_count": 0,
    "processed_at": null,
    "state": "error",
    "total_count": 2
  },
  "submissions": [
    {
      "status": "valid_but_not_saved"
    },
    {
      "errors": [
        "Your submission data did not contain a required property of 'first_name'"
      ],
      "status": "error",
      "submission": {
        "actions": [],
        "batch_id": "sbb_000000000000000001",
        "data_requests": [],
        "download_url": null,
        "editable": null,
        "expired": false,
        "expires_at": null,
        "id": "sub_000000000000000001",
        "json_schema_errors": [
          "Your submission data did not contain a required property of 'first_name'"
        ],
        "metadata": {
          "submission_number": 2
        },
        "password": null,
        "pdf_hash": null,
        "permanent_download_url": null,
        "processed_at": null,
        "state": "invalid_data",
        "template_id": "tpl_000000000000000001",
        "test": true,
        "truncated_text": {}
      }
    }
  ]
}
```

> 201 Response

```json
{
  "status": "success",
  "submission_batch": {
    "completion_percentage": 0,
    "error_count": 0,
    "id": "sbb_000000000000000001",
    "metadata": {
      "job_id": 54321
    },
    "pending_count": 2,
    "processed_at": null,
    "state": "pending",
    "total_count": 2
  },
  "submissions": [
    {
      "status": "success",
      "submission": {
        "actions": [],
        "batch_id": "sbb_000000000000000001",
        "data_requests": [],
        "download_url": null,
        "editable": null,
        "expired": false,
        "expires_at": null,
        "id": "sub_000000000000000001",
        "json_schema_errors": [],
        "metadata": {
          "submission_number": 1
        },
        "password": null,
        "pdf_hash": null,
        "permanent_download_url": null,
        "processed_at": null,
        "state": "pending",
        "template_id": "tpl_000000000000000001",
        "test": false,
        "truncated_text": {}
      }
    },
    {
      "status": "success",
      "submission": {
        "actions": [],
        "batch_id": "sbb_000000000000000001",
        "data_requests": [],
        "download_url": null,
        "editable": null,
        "expired": false,
        "expires_at": null,
        "id": "sub_000000000000000002",
        "json_schema_errors": [],
        "metadata": {
          "submission_number": 2
        },
        "password": null,
        "pdf_hash": null,
        "permanent_download_url": null,
        "processed_at": null,
        "state": "pending",
        "template_id": "tpl_000000000000000001",
        "test": true,
        "truncated_text": {}
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error": "There was a problem with the JSON you submitted: unexpected character at line 1, column 25 in '{ \"first_name\": \"John\", last_name: \"Smith\" }",
  "status": "error"
}
```

> 401 Response

```json
{
  "error": "Invalid API token secret"
}
```

<h3 id="generates-multiple-pdfs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|some PDFs with invalid data|Inline|
|201|Created|submissions created|Inline|
|400|Bad Request|invalid JSON|[error](#schemaerror)|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|

<h3 id="generates-multiple-pdfs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errors|[string]|false|none|none|
|status|string|true|none|none|
|submission_batch|object|true|none|none|
|» completion_percentage|integer|true|none|none|
|» error_count|integer|true|none|none|
|» id|string|true|none|none|
|» metadata|object|true|none|none|
|» pending_count|integer|true|none|none|
|» processed_at|string \| null|true|none|none|
|» state|string|true|none|none|
|» submissions|[[submission](#schemasubmission)]|false|none|none|
|» total_count|integer|true|none|none|
|submissions|[object]|true|none|none|
|» errors|[string]|false|none|none|
|» status|string|true|none|none|
|» submission|[submission](#schemasubmission)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|
|» state|pending|
|» state|processed|
|» state|error|
|» status|success|
|» status|error|
|» status|valid_but_not_saved|

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errors|[string]|false|none|none|
|status|string|true|none|none|
|submission_batch|object|true|none|none|
|» completion_percentage|integer|true|none|none|
|» error_count|integer|true|none|none|
|» id|string|true|none|none|
|» metadata|object|true|none|none|
|» pending_count|integer|true|none|none|
|» processed_at|string \| null|true|none|none|
|» state|string|true|none|none|
|» submissions|[[submission](#schemasubmission)]|false|none|none|
|» total_count|integer|true|none|none|
|submissions|[object]|true|none|none|
|» errors|[string]|false|none|none|
|» status|string|true|none|none|
|» submission|[submission](#schemasubmission)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|
|» state|pending|
|» state|processed|
|» state|error|
|» status|success|
|» status|error|
|» status|valid_but_not_saved|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Check the status of a submission batch job

<a id="opIdgetSubmissionBatch"></a>

> Code samples

```bash
curl https://example.com/submissions/batches/sbb_000000000000000001 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /submissions/batches/{submission_batch_id}`

<h3 id="check-the-status-of-a-submission-batch-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|submission_batch_id|path|string|true|none|
|include_submissions|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "completion_percentage": 100,
  "error_count": 2,
  "id": "sbb_000000000000000001",
  "metadata": {
    "qux": "abc"
  },
  "pending_count": 0,
  "processed_at": null,
  "state": "error",
  "submissions": [
    {
      "actions": [],
      "batch_id": "sbb_000000000000000001",
      "data_requests": [],
      "download_url": "https://example.com/submissions/submission.pdf",
      "editable": false,
      "expired": false,
      "expires_at": null,
      "id": "sub_000000000000000001",
      "json_schema_errors": [],
      "metadata": {},
      "password": null,
      "pdf_hash": "bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
      "permanent_download_url": "http://app.docspring.local/submissions/sub_000000000000000001/download",
      "processed_at": null,
      "state": "processed",
      "template_id": "tpl_000000000000000001",
      "test": false,
      "truncated_text": {}
    },
    {
      "actions": [],
      "batch_id": "sbb_000000000000000001",
      "data_requests": [],
      "download_url": "https://example.com/submissions/submission.pdf",
      "editable": false,
      "expired": false,
      "expires_at": null,
      "id": "sub_000000000000000002",
      "json_schema_errors": [],
      "metadata": {},
      "password": null,
      "pdf_hash": "bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
      "permanent_download_url": "http://app.docspring.local/submissions/sub_000000000000000002/download",
      "processed_at": null,
      "state": "processed",
      "template_id": "tpl_000000000000000001",
      "test": false,
      "truncated_text": {}
    }
  ],
  "total_count": 10
}
```

> 401 Response

```json
{
  "error": "Invalid API token secret"
}
```

> 404 Response

```json
{
  "error": "Submission batch not found.",
  "status": "error"
}
```

<h3 id="check-the-status-of-a-submission-batch-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|processed submission batch found|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|404|Not Found|submission batch not found|[error](#schemaerror)|

<h3 id="check-the-status-of-a-submission-batch-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion_percentage|integer|true|none|none|
|error_count|integer|true|none|none|
|id|string|true|none|none|
|metadata|object|true|none|none|
|pending_count|integer|true|none|none|
|processed_at|string \| null|true|none|none|
|state|string|true|none|none|
|submissions|[[submission](#schemasubmission)]|false|none|none|
|total_count|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|processed|
|state|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Check the status of a PDF

<a id="opIdgetSubmission"></a>

> Code samples

```bash
curl https://example.com/submissions/sub_000000000000000001 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /submissions/{submission_id}`

<h3 id="check-the-status-of-a-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|submission_id|path|string|true|none|
|include_data|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "action_category": "file_upload",
      "action_type": "aws_s3_upload",
      "id": "sba_000000000000000001",
      "integration_id": "aci_000000000000000001",
      "result_data": {
        "s3_bucket": "docspring-custom-s3-test",
        "s3_key": "templates/tpl_eGc5CmFbPnCCmerqsx/sub_gzYpKDYFqEHxzca4kK.pdf",
        "s3_region": "us-east-1",
        "s3_url": "https://docspring-custom-s3-test.s3.amazonaws.com/templates/tpl_eGc5CmFbPnCCmerqsx/sub_gzYpKDYFqEHxzca4kK.pdf"
      },
      "state": "processed"
    }
  ],
  "batch_id": null,
  "data": {
    "first_name": "John C. D. Rom Laserdisk F. Scott Fitzgerald",
    "last_name": "Smith",
    "phone_number": "+11234567890"
  },
  "data_requests": [],
  "download_url": "https://example.com/submissions/submission.pdf",
  "editable": false,
  "expired": false,
  "expires_at": "2018-10-27T13:00:00Z",
  "id": "sub_000000000000000001",
  "json_schema_errors": [],
  "metadata": {
    "qux": "abc",
    "user_id": 42
  },
  "password": null,
  "pdf_hash": "bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
  "permanent_download_url": "http://app.docspring.local/submissions/sub_000000000000000001/download",
  "processed_at": "2020-05-14T02:00:00Z",
  "referrer": null,
  "source": "api",
  "state": "processed",
  "template_id": "tpl_000000000000000001",
  "test": true,
  "truncated_text": {
    "first_name": [
      "F. Scott Fitzgerald"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "Unauthorized",
  "status": "error"
}
```

> 404 Response

```json
{
  "error": "Submission not found.",
  "status": "error"
}
```

<h3 id="check-the-status-of-a-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|processed submission found|[submission](#schemasubmission)|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|404|Not Found|submission not found|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Expire a PDF submission

<a id="opIdexpireSubmission"></a>

> Code samples

```bash
curl https://example.com/submissions/sub_000000000000000001 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /submissions/{submission_id}`

<h3 id="expire-a-pdf-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|submission_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "action_category": "file_upload",
      "action_type": "aws_s3_upload",
      "id": "sba_000000000000000001",
      "integration_id": "aci_000000000000000001",
      "result_data": {
        "s3_bucket": "docspring-custom-s3-test",
        "s3_key": "templates/tpl_eGc5CmFbPnCCmerqsx/sub_gzYpKDYFqEHxzca4kK.pdf",
        "s3_region": "us-east-1",
        "s3_url": "https://docspring-custom-s3-test.s3.amazonaws.com/templates/tpl_eGc5CmFbPnCCmerqsx/sub_gzYpKDYFqEHxzca4kK.pdf"
      },
      "state": "processed"
    }
  ],
  "batch_id": null,
  "data_requests": [],
  "download_url": null,
  "editable": false,
  "expired": true,
  "expires_at": "2018-10-20T13:00:00Z",
  "id": "sub_000000000000000001",
  "json_schema_errors": [],
  "metadata": {
    "qux": "abc",
    "user_id": 42
  },
  "password": null,
  "pdf_hash": "bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
  "permanent_download_url": null,
  "processed_at": "2020-05-14T02:00:00Z",
  "state": "processed",
  "template_id": "tpl_000000000000000001",
  "test": true,
  "truncated_text": {
    "first_name": [
      "F. Scott Fitzgerald"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "Invalid API token secret"
}
```

> 403 Response

```json
{
  "error": "You must use a live API token to expire a submission.",
  "status": "error"
}
```

> 404 Response

```json
{
  "error": "Submission not found.",
  "status": "error"
}
```

<h3 id="expire-a-pdf-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|submission was expired|[submission](#schemasubmission)|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|403|Forbidden|test API token used|[error](#schemaerror)|
|404|Not Found|submission not found|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Get a list of all templates

<a id="opIdlistTemplates"></a>

> Code samples

```bash
curl https://example.com/templates \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /templates`

<h3 id="get-a-list-of-all-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Search By Name|
|parent_folder_id|query|string|false|Filter By Folder Id|
|page|query|integer|false|Default: 1|
|per_page|query|integer|false|Default: 50|

> Example responses

> 200 Response

```json
[
  {
    "allow_additional_properties": false,
    "description": null,
    "document_filename": "test-document.pdf",
    "document_processed": true,
    "document_state": "pending",
    "document_url": "/uploads/test/store/templates/test/test-document.pdf",
    "editable_submissions": false,
    "expiration_interval": "days",
    "expire_after": 7,
    "expire_submissions": true,
    "id": "tpl_000000000000000011",
    "locked": false,
    "name": "Sub Template 1",
    "page_count": 3,
    "page_dimensions": [
      [
        612,
        792
      ],
      [
        792,
        612
      ],
      [
        612,
        792
      ]
    ],
    "parent_folder_id": "fld_000000000000000001",
    "path": "/Folder",
    "permanent_document_url": "http://app.docspring.local/templates/tpl_000000000000000011/original_pdf?token=123456789abcdef",
    "public_submissions": false,
    "public_web_form": false,
    "redirect_url": null,
    "slack_webhook_url": null,
    "template_type": "pdf",
    "webhook_url": null
  },
  {
    "allow_additional_properties": false,
    "description": null,
    "document_filename": null,
    "document_processed": false,
    "document_state": "pending",
    "document_url": null,
    "editable_submissions": false,
    "expiration_interval": "days",
    "expire_after": 7,
    "expire_submissions": true,
    "id": "tpl_000000000000000003",
    "locked": false,
    "name": "Template 3",
    "page_count": 1,
    "page_dimensions": null,
    "parent_folder_id": null,
    "path": "/",
    "permanent_document_url": null,
    "public_submissions": false,
    "public_web_form": false,
    "redirect_url": null,
    "slack_webhook_url": null,
    "template_type": "html",
    "webhook_url": null
  },
  {
    "allow_additional_properties": false,
    "description": null,
    "document_filename": "test-document.pdf",
    "document_processed": true,
    "document_state": "pending",
    "document_url": "/uploads/test/store/templates/test/test-document.pdf",
    "editable_submissions": false,
    "expiration_interval": "days",
    "expire_after": 7,
    "expire_submissions": true,
    "id": "tpl_000000000000000002",
    "locked": false,
    "name": "Template 2",
    "page_count": 3,
    "page_dimensions": [
      [
        612,
        792
      ],
      [
        792,
        612
      ],
      [
        612,
        792
      ]
    ],
    "parent_folder_id": null,
    "path": "/",
    "permanent_document_url": "http://app.docspring.local/templates/tpl_000000000000000002/original_pdf?token=123456789abcdef",
    "public_submissions": false,
    "public_web_form": false,
    "redirect_url": null,
    "slack_webhook_url": null,
    "template_type": "pdf",
    "webhook_url": null
  },
  {
    "allow_additional_properties": false,
    "description": null,
    "document_filename": "blank_pdf.pdf",
    "document_processed": true,
    "document_state": "processed",
    "document_url": "/uploads/test/store/acc_000000000000000001/templates/tpl_000000000000000001/document/original-0000000000.pdf",
    "editable_submissions": false,
    "expiration_interval": "days",
    "expire_after": 7,
    "expire_submissions": true,
    "id": "tpl_000000000000000001",
    "locked": false,
    "name": "Template 1",
    "page_count": 1,
    "page_dimensions": [
      [
        612,
        792
      ]
    ],
    "parent_folder_id": null,
    "path": "/",
    "permanent_document_url": "http://app.docspring.local/templates/tpl_000000000000000001/original_pdf?token=123456789abcdef",
    "public_submissions": false,
    "public_web_form": false,
    "redirect_url": null,
    "slack_webhook_url": null,
    "template_type": "pdf",
    "webhook_url": null
  }
]
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 404 Response

```json
{
  "error": "string",
  "status": "error"
}
```

<h3 id="get-a-list-of-all-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|enumerate all templates|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|404|Not Found|filter templates by invalid folder id|[error](#schemaerror)|

<h3 id="get-a-list-of-all-templates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» allow_additional_properties|boolean|true|none|none|
|» description|string \| null|true|none|none|
|» document_url|string \| null|true|none|none|
|» editable_submissions|boolean|true|none|none|
|» expiration_interval|string|true|none|none|
|» expire_after|number|true|none|none|
|» expire_submissions|boolean|true|none|none|
|» id|string|true|none|none|
|» locked|boolean|true|none|none|
|» name|string \| null|true|none|none|
|» page_dimensions|[[number]]|true|none|none|
|» parent_folder_id|string \| null|true|none|none|
|» path|string|true|none|none|
|» permanent_document_url|string \| null|true|none|none|
|» public_submissions|boolean|true|none|none|
|» public_web_form|boolean|true|none|none|
|» redirect_url|string \| null|true|none|none|
|» slack_webhook_url|string \| null|true|none|none|
|» template_type|string|true|none|none|
|» webhook_url|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» expiration_interval|minutes|
|» expiration_interval|hours|
|» expiration_interval|days|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Create a new PDF template with a form POST file upload

<a id="opIdcreatePDFTemplate"></a>

> Code samples

```bash
curl https://example.com/templates \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'template[document]=@/path/to/file' \
  -F 'template[name]=Test Template' \
  -F 'template[parent_folder_id]=fld_000000000000000001'
```

`POST /templates`

> Body parameter

```yaml
"template[document]": "<Uploaded File>"
"template[name]": Test Template
"template[parent_folder_id]": fld_000000000000000001
```

<h3 id="create-a-new-pdf-template-with-a-form-post-file-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» template[document]|body|string(binary)|true|none|
|» template[name]|body|string|true|none|
|» template[parent_folder_id]|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "allow_additional_properties": false,
  "description": null,
  "document_filename": "fw8ben.pdf",
  "document_processed": false,
  "document_state": "pending",
  "document_url": "/cache/cached_upload.pdf",
  "editable_submissions": false,
  "expiration_interval": "days",
  "expire_after": 7,
  "expire_submissions": false,
  "id": "tpl_000000000000000004",
  "locked": false,
  "name": "Test Template",
  "page_count": 0,
  "page_dimensions": null,
  "parent_folder_id": "fld_000000000000000001",
  "path": "/Folder",
  "permanent_document_url": null,
  "public_submissions": false,
  "public_web_form": false,
  "redirect_url": null,
  "slack_webhook_url": null,
  "template_type": "pdf",
  "webhook_url": null
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

<h3 id="create-a-new-pdf-template-with-a-form-post-file-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|returns a pending template|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|

<h3 id="create-a-new-pdf-template-with-a-form-post-file-upload-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_additional_properties|boolean|true|none|none|
|description|string \| null|true|none|none|
|editable_submissions|boolean|true|none|none|
|expiration_interval|string|false|none|none|
|expire_after|number|false|none|none|
|expire_submissions|boolean|true|none|none|
|id|string|true|none|none|
|locked|boolean|true|none|none|
|name|string \| null|true|none|none|
|parent_folder_id|string \| null|false|none|none|
|path|string|false|none|none|
|public_submissions|boolean|true|none|none|
|public_web_form|boolean|true|none|none|
|redirect_url|string \| null|true|none|none|
|slack_webhook_url|string \| null|true|none|none|
|template_type|string|true|none|none|
|webhook_url|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|expiration_interval|minutes|
|expiration_interval|hours|
|expiration_interval|days|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Check the status of an uploaded template

<a id="opIdgetTemplate"></a>

> Code samples

```bash
curl https://example.com/templates/tpl_000000000000000001 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /templates/{template_id}`

<h3 id="check-the-status-of-an-uploaded-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "allow_additional_properties": false,
  "description": null,
  "document_filename": "blank_pdf.pdf",
  "document_processed": true,
  "document_state": "processed",
  "document_url": "/uploads/test/store/acc_000000000000000001/templates/tpl_000000000000000001/document/original-0000000000.pdf",
  "editable_submissions": false,
  "expiration_interval": "days",
  "expire_after": 7,
  "expire_submissions": true,
  "id": "tpl_000000000000000001",
  "locked": false,
  "name": "Template 1",
  "page_count": 1,
  "page_dimensions": [
    [
      612,
      792
    ]
  ],
  "parent_folder_id": null,
  "path": "/",
  "permanent_document_url": "http://app.docspring.local/templates/tpl_000000000000000001/original_pdf?token=123456789abcdef",
  "public_submissions": false,
  "public_web_form": false,
  "redirect_url": null,
  "slack_webhook_url": null,
  "template_type": "pdf",
  "webhook_url": null
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 404 Response

```json
{
  "error": "Template not found.",
  "status": "error"
}
```

<h3 id="check-the-status-of-an-uploaded-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|template found|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|404|Not Found|template not found|[error](#schemaerror)|

<h3 id="check-the-status-of-an-uploaded-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_additional_properties|boolean|true|none|none|
|description|string \| null|true|none|none|
|document_url|string \| null|true|none|none|
|editable_submissions|boolean|true|none|none|
|expiration_interval|string|true|none|none|
|expire_after|number|true|none|none|
|expire_submissions|boolean|true|none|none|
|id|string|true|none|none|
|locked|boolean|true|none|none|
|name|string \| null|true|none|none|
|page_dimensions|[[number]]|true|none|none|
|parent_folder_id|string \| null|true|none|none|
|path|string|true|none|none|
|permanent_document_url|string \| null|true|none|none|
|public_submissions|boolean|true|none|none|
|public_web_form|boolean|true|none|none|
|redirect_url|string \| null|true|none|none|
|slack_webhook_url|string \| null|true|none|none|
|template_type|string|true|none|none|
|webhook_url|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|expiration_interval|minutes|
|expiration_interval|hours|
|expiration_interval|days|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Update a Template

<a id="opIdupdateTemplate"></a>

> Code samples

```bash
curl https://example.com/templates/tpl_000000000000000003 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "template": {
      "footer_html": "updated footer",
      "header_html": "updated header",
      "html": "updated html",
      "scss": "updated scss"
    }
  }'
```

`PUT /templates/{template_id}`

> Body parameter

```json
{
  "template": {
    "footer_html": "updated footer",
    "header_html": "updated header",
    "html": "updated html",
    "scss": "updated scss"
  }
}
```

<h3 id="update-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|none|
|body|body|object|true|none|
|» template|body|object|true|none|
|» » allow_additional_properties|body|boolean|false|none|
|» » description|body|string \| null|false|none|
|» » editable_submissions|body|boolean|false|none|
|» » expiration_interval|body|string|false|none|
|» » expire_after|body|number|false|none|
|» » expire_submissions|body|boolean|false|none|
|» » footer_html|body|string \| null|false|none|
|» » header_html|body|string \| null|false|none|
|» » html|body|string \| null|false|none|
|» » name|body|string \| null|false|none|
|» » public_submissions|body|boolean|false|none|
|» » public_web_form|body|boolean|false|none|
|» » redirect_url|body|string \| null|false|none|
|» » scss|body|string \| null|false|none|
|» » slack_webhook_url|body|string \| null|false|none|
|» » webhook_url|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » expiration_interval|minutes|
|» » expiration_interval|hours|
|» » expiration_interval|days|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

<h3 id="update-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|update template success|Inline|

<h3 id="update-a-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[string]|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Add new fields to a Template

<a id="opIdaddFieldsToTemplate"></a>

> Code samples

```bash
curl https://example.com/templates/tpl_000000000000000002/add_fields \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "fields": [
      {
        "name": "new_field1",
        "page": 1
      },
      {
        "default": "default text",
        "displayType": "text",
        "name": "new_field2",
        "overflow": "truncate",
        "page": 1,
        "rotation": 10,
        "type": "string"
      },
      {
        "displayType": "text",
        "integer": true,
        "name": "new_field3",
        "page": 2,
        "rotation": 0,
        "type": "number"
      },
      {
        "displayType": "text",
        "integer": true,
        "name": "new_field4",
        "page": 3,
        "rotation": 0,
        "type": "number"
      },
      {
        "displayType": "text",
        "height": 50,
        "id": 99,
        "integer": true,
        "name": "new_field5",
        "page": 2,
        "rotation": 0,
        "type": "number",
        "width": 150,
        "x": 20,
        "y": 60
      },
      {
        "description": "updated description for existing field",
        "displayType": "text",
        "height": 50,
        "integer": true,
        "maximum": 100,
        "minimum": 10,
        "name": "first_name",
        "page": 1,
        "rotation": 0,
        "type": "number",
        "width": 150,
        "x": 40,
        "y": 60
      }
    ]
  }'
```

`PUT /templates/{template_id}/add_fields`

> Body parameter

```json
{
  "fields": [
    {
      "name": "new_field1",
      "page": 1
    },
    {
      "default": "default text",
      "displayType": "text",
      "name": "new_field2",
      "overflow": "truncate",
      "page": 1,
      "rotation": 10,
      "type": "string"
    },
    {
      "displayType": "text",
      "integer": true,
      "name": "new_field3",
      "page": 2,
      "rotation": 0,
      "type": "number"
    },
    {
      "displayType": "text",
      "integer": true,
      "name": "new_field4",
      "page": 3,
      "rotation": 0,
      "type": "number"
    },
    {
      "displayType": "text",
      "height": 50,
      "id": 99,
      "integer": true,
      "name": "new_field5",
      "page": 2,
      "rotation": 0,
      "type": "number",
      "width": 150,
      "x": 20,
      "y": 60
    },
    {
      "description": "updated description for existing field",
      "displayType": "text",
      "height": 50,
      "integer": true,
      "maximum": 100,
      "minimum": 10,
      "name": "first_name",
      "page": 1,
      "rotation": 0,
      "type": "number",
      "width": 150,
      "x": 40,
      "y": 60
    }
  ]
}
```

<h3 id="add-new-fields-to-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|none|
|body|body|object|true|none|
|» fields|body|[object]|true|none|
|» » alignment|body|string|false|none|
|» » autoCalculateMaxLength|body|boolean|false|none|
|» » backgroundColor|body|string|false|none|
|» » backgroundColorFieldName|body|string|false|none|
|» » backgroundColorFieldRequired|body|boolean|false|none|
|» » barcodeSymbology|body|string|false|none|
|» » bold|body|boolean|false|none|
|» » characterSpacing|body|number|false|none|
|» » checkCharacter|body|string|false|none|
|» » checkColor|body|string|false|none|
|» » checkColorFieldName|body|string|false|none|
|» » checkColorFieldRequired|body|boolean|false|none|
|» » color|body|string|false|none|
|» » colorFieldName|body|string|false|none|
|» » colorFieldRequired|body|boolean|false|none|
|» » comb|body|boolean|false|none|
|» » combNumberOfCells|body|number|false|none|
|» » combValueOffset|body|number|false|none|
|» » combinedFieldFormat|body|string|false|none|
|» » combinedFieldNames|body|string|false|none|
|» » combinedFieldSeparator|body|string|false|none|
|» » combinedFieldType|body|string|false|none|
|» » condition|body|string|false|none|
|» » currency|body|boolean|false|none|
|» » dateTimeFormat|body|string|false|none|
|» » decimalPlaces|body|number|false|none|
|» » default|body|string|false|none|
|» » description|body|string|false|none|
|» » displayType|body|string|false|none|
|» » exclusiveMaximum|body|boolean|false|none|
|» » exclusiveMinimum|body|boolean|false|none|
|» » falseText|body|string|false|none|
|» » fontSize|body|number|false|none|
|» » height|body|number|false|none|
|» » hidden|body|boolean|false|none|
|» » id|body|number|false|none|
|» » imageGravity|body|string|false|none|
|» » imageScaleType|body|string|false|none|
|» » includeTime|body|boolean|false|none|
|» » integer|body|boolean|false|none|
|» » invertBooleanCondition|body|boolean|false|none|
|» » maxLength|body|number|false|none|
|» » maximum|body|number|false|none|
|» » metadata|body|string|false|none|
|» » minLength|body|number|false|none|
|» » minimum|body|number|false|none|
|» » multiline|body|boolean|false|none|
|» » multilineLines|body|number|false|none|
|» » name|body|string|true|none|
|» » numberConditionRangeExclusiveMax|body|boolean|false|none|
|» » numberConditionRangeExclusiveMin|body|boolean|false|none|
|» » numberConditionRangeMax|body|number|false|none|
|» » numberConditionRangeMin|body|number|false|none|
|» » numberConditionType|body|string|false|none|
|» » opacity|body|number|false|none|
|» » optionList|body|string|false|none|
|» » overflow|body|string|false|none|
|» » page|body|number|true|none|
|» » placeholder|body|string|false|none|
|» » qrcodeColor|body|string|false|none|
|» » qrcodeColorFieldName|body|string|false|none|
|» » qrcodeColorFieldRequired|body|boolean|false|none|
|» » required|body|boolean|false|none|
|» » rotation|body|number|false|none|
|» » shapeBorderColor|body|string|false|none|
|» » shapeBorderColorFieldName|body|string|false|none|
|» » shapeBorderColorFieldRequired|body|boolean|false|none|
|» » shapeBorderWidth|body|number|false|none|
|» » shapeFillColor|body|string|false|none|
|» » shapeFillColorFieldName|body|string|false|none|
|» » shapeFillColorFieldRequired|body|boolean|false|none|
|» » shapeType|body|string|false|none|
|» » signatureAllowDraw|body|boolean|false|none|
|» » signatureAllowType|body|boolean|false|none|
|» » static|body|boolean|false|none|
|» » strikethrough|body|boolean|false|none|
|» » stringConditionType|body|string|false|none|
|» » title|body|string|false|none|
|» » trueText|body|string|false|none|
|» » type|body|string|false|none|
|» » typeface|body|string|false|none|
|» » uppercase|body|boolean|false|none|
|» » vAlignment|body|string|false|none|
|» » width|body|number|false|none|
|» » x|body|number|false|none|
|» » y|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » alignment|left|
|» » alignment|center|
|» » alignment|right|
|» » checkCharacter|&#10003;|
|» » checkCharacter|&#10004;|
|» » checkCharacter|&#10006;|
|» » checkCharacter|&#10007;|
|» » checkCharacter|&#10008;|
|» » displayType|text|
|» » displayType|check|
|» » displayType|qrcode|
|» » displayType|barcode|
|» » displayType|image|
|» » displayType|shape|
|» » imageGravity|NorthWest|
|» » imageGravity|North|
|» » imageGravity|NorthEast|
|» » imageGravity|West|
|» » imageGravity|Center|
|» » imageGravity|East|
|» » imageGravity|SouthWest|
|» » imageGravity|South|
|» » imageGravity|SouthEast|
|» » imageScaleType|fit|
|» » imageScaleType|fill|
|» » imageScaleType|stretch|
|» » numberConditionType|equals|
|» » numberConditionType|range|
|» » numberConditionType|gte|
|» » numberConditionType|gt|
|» » numberConditionType|lte|
|» » numberConditionType|lt|
|» » overflow|shrink_to_fit|
|» » overflow|truncate|
|» » shapeType|square|
|» » shapeType|rectangle|
|» » shapeType|circle|
|» » shapeType|ellipse|
|» » stringConditionType|equals|
|» » stringConditionType|contains|
|» » stringConditionType|starts_with|
|» » stringConditionType|ends_with|
|» » stringConditionType|regex|
|» » type|string|
|» » type|number|
|» » type|boolean|
|» » type|date|
|» » type|address|
|» » type|country|
|» » type|email|
|» » type|url|
|» » type|image|
|» » type|signature|
|» » type|barcode|
|» » type|combined|
|» » vAlignment|bottom|
|» » vAlignment|center|
|» » vAlignment|top|

> Example responses

> 200 Response

```json
{
  "new_field_ids": [
    4,
    5,
    6,
    7,
    99,
    8
  ],
  "status": "success"
}
```

> 422 Response

```json
{
  "errors": [
    "The property '#/fields/0' did not contain a required property of 'page'",
    "The property '#/fields/1/page' did not have a minimum value of 1, inclusively",
    "The property '#/fields/5' contains additional properties [\"unknown_property\"] outside of the schema when none are allowed",
    "The property '#/fields/6/displayType' value \"unknown display type\" did not match one of the following values: text, check, qrcode, barcode, image, shape",
    "The property '#/fields/6/type' value \"unknown type\" did not match one of the following values: string, number, boolean, date, address, country, email, url, image, signature, barcode, combined",
    "The property '#/fields/6' did not contain a required property of 'page'",
    "The property '#/fields/7/width' of type string did not match the following type: number",
    "The property '#/fields/8/height' did not have a minimum value of 0, inclusively",
    "The property '#/fields/8/width' did not have a minimum value of 0, inclusively",
    "The property '#/fields/8/x' did not have a minimum value of 0, inclusively",
    "The property '#/fields/8/y' did not have a minimum value of 0, inclusively",
    "The property '#/fields/2/id' value \"1\" is already taken by another field",
    "The property '#/fields/2/page' value \"5\" did not have a maximum value of 3, inclusively (Template has 3 pages)",
    "The property '#/fields/3/page' value \"4\" did not have a maximum value of 3, inclusively (Template has 3 pages)"
  ],
  "status": "error"
}
```

<h3 id="add-new-fields-to-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|add fields success|Inline|
|422|Unprocessable Entity|add fields error|Inline|

<h3 id="add-new-fields-to-a-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[string]|false|none|none|
|new_field_ids|[integer]|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[string]|false|none|none|
|new_field_ids|[integer]|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Copy a Template

<a id="opIdcopyTemplate"></a>

> Code samples

```bash
curl https://example.com/templates/tpl_000000000000000001/copy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "Copied Template Name",
    "parent_folder_id": "fld_000000000000000001"
  }'
```

`POST /templates/{template_id}/copy`

> Body parameter

```json
{
  "name": "Copied Template Name",
  "parent_folder_id": "fld_000000000000000001"
}
```

<h3 id="copy-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|none|
|body|body|object|false|none|
|» name|body|string|false|none|
|» parent_folder_id|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "allow_additional_properties": false,
  "description": null,
  "document_filename": "blank_pdf.pdf",
  "document_processed": true,
  "document_state": "processed",
  "document_url": "/uploads/test/store/acc_000000000000000001/templates/tpl_00000000000000new1/document/original-0000000000.pdf",
  "editable_submissions": false,
  "expiration_interval": "days",
  "expire_after": 7,
  "expire_submissions": true,
  "id": "tpl_00000000000000new1",
  "locked": false,
  "name": "Copied Template Name",
  "page_count": 1,
  "page_dimensions": [
    [
      612,
      792
    ]
  ],
  "parent_folder_id": "fld_000000000000000001",
  "path": "/Folder",
  "permanent_document_url": "http://app.docspring.local/templates/tpl_00000000000000new1/original_pdf?token=123456789abcdef",
  "public_submissions": false,
  "public_web_form": false,
  "redirect_url": null,
  "slack_webhook_url": null,
  "template_type": "pdf",
  "webhook_url": null
}
```

> 404 Response

```json
{
  "error": "Could not find parent folder MISSING_ID",
  "status": "error"
}
```

<h3 id="copy-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|copy template success|Inline|
|404|Not Found|folder not found|[error](#schemaerror)|

<h3 id="copy-a-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_additional_properties|boolean|true|none|none|
|description|string \| null|true|none|none|
|document_url|string \| null|true|none|none|
|editable_submissions|boolean|true|none|none|
|expiration_interval|string|true|none|none|
|expire_after|number|true|none|none|
|expire_submissions|boolean|true|none|none|
|id|string|true|none|none|
|locked|boolean|true|none|none|
|name|string \| null|true|none|none|
|page_dimensions|[[number]]|true|none|none|
|parent_folder_id|string \| null|true|none|none|
|path|string|true|none|none|
|permanent_document_url|string \| null|true|none|none|
|public_submissions|boolean|true|none|none|
|public_web_form|boolean|true|none|none|
|redirect_url|string \| null|true|none|none|
|slack_webhook_url|string \| null|true|none|none|
|template_type|string|true|none|none|
|webhook_url|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|expiration_interval|minutes|
|expiration_interval|hours|
|expiration_interval|days|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Move Template to folder

<a id="opIdmoveTemplateToFolder"></a>

> Code samples

```bash
curl https://example.com/templates/tpl_000000000000000001/move \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "parent_folder_id": "fld_000000000000000001"
  }'
```

`POST /templates/{template_id}/move`

> Body parameter

```json
{
  "parent_folder_id": "fld_000000000000000001"
}
```

<h3 id="move-template-to-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|none|
|body|body|object|true|none|
|» parent_folder_id|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "allow_additional_properties": false,
  "description": null,
  "document_filename": "blank_pdf.pdf",
  "document_processed": true,
  "document_state": "processed",
  "document_url": "/uploads/test/store/acc_000000000000000001/templates/tpl_000000000000000001/document/original-0000000000.pdf",
  "editable_submissions": false,
  "expiration_interval": "days",
  "expire_after": 7,
  "expire_submissions": true,
  "id": "tpl_000000000000000001",
  "locked": false,
  "name": "Template 1",
  "page_count": 1,
  "page_dimensions": [
    [
      612,
      792
    ]
  ],
  "parent_folder_id": "fld_000000000000000001",
  "path": "/Folder",
  "permanent_document_url": "http://app.docspring.local/templates/tpl_000000000000000001/original_pdf?token=123456789abcdef",
  "public_submissions": false,
  "public_web_form": false,
  "redirect_url": null,
  "slack_webhook_url": null,
  "template_type": "pdf",
  "webhook_url": null
}
```

> 404 Response

```json
{
  "error": "Could not find parent folder MISSING_ID",
  "status": "error"
}
```

<h3 id="move-template-to-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|move template success|Inline|
|404|Not Found|folder not found|[error](#schemaerror)|

<h3 id="move-template-to-folder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_additional_properties|boolean|true|none|none|
|description|string \| null|true|none|none|
|document_url|string \| null|true|none|none|
|editable_submissions|boolean|true|none|none|
|expiration_interval|string|true|none|none|
|expire_after|number|true|none|none|
|expire_submissions|boolean|true|none|none|
|id|string|true|none|none|
|locked|boolean|true|none|none|
|name|string \| null|true|none|none|
|page_dimensions|[[number]]|true|none|none|
|parent_folder_id|string \| null|true|none|none|
|path|string|true|none|none|
|permanent_document_url|string \| null|true|none|none|
|public_submissions|boolean|true|none|none|
|public_web_form|boolean|true|none|none|
|redirect_url|string \| null|true|none|none|
|slack_webhook_url|string \| null|true|none|none|
|template_type|string|true|none|none|
|webhook_url|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|expiration_interval|minutes|
|expiration_interval|hours|
|expiration_interval|days|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Fetch the JSON schema for a template

<a id="opIdgetTemplateSchema"></a>

> Code samples

```bash
curl https://example.com/templates/tpl_000000000000000001/schema \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /templates/{template_id}/schema`

<h3 id="fetch-the-json-schema-for-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "definitions": {},
  "description": "JSON Schema generated by DocSpring.com",
  "id": "https://api.docspring.com/api/v1/templates/tpl_000000000000000001/schema.json",
  "properties": {
    "first_name": {
      "title": "First Name",
      "type": "string"
    },
    "last_name": {
      "title": "Last Name",
      "type": "string"
    },
    "phone_number": {
      "title": "Phone Number",
      "type": [
        "string",
        "null"
      ]
    }
  },
  "required": [
    "first_name",
    "last_name"
  ],
  "title": "Template 1",
  "type": "object"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 404 Response

```json
{
  "error": "Template not found.",
  "status": "error"
}
```

<h3 id="fetch-the-json-schema-for-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|template found|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|404|Not Found|template not found|[error](#schemaerror)|

<h3 id="fetch-the-json-schema-for-a-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$schema|string(uri)|false|none|none|
|additionalProperties|boolean|false|none|none|
|definitions|object|false|none|none|
|description|string|false|none|none|
|id|string(uri-reference)|false|none|none|
|properties|object|false|none|none|
|required|[object]|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## List all submissions for a given template

> Code samples

```bash
curl https://example.com/templates/tpl_000000000000000002/submissions \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /templates/{template_id}/submissions`

<h3 id="list-all-submissions-for-a-given-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|none|
|cursor|query|string|false|none|
|limit|query|number|false|none|
|created_after|query|string|false|none|
|created_before|query|string|false|none|
|type|query|string|false|none|
|include_data|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "limit": 50,
  "next_cursor": "sub_list_000014",
  "submissions": [
    {
      "actions": [],
      "batch_id": null,
      "data": {
        "first_name": "John C. D. Rom Laserdisk F. Scott Fitzgerald",
        "last_name": "Smith",
        "phone_number": "+11234567890"
      },
      "data_requests": [],
      "download_url": "https://example.com/submissions/submission.pdf",
      "editable": false,
      "expired": false,
      "expires_at": "2020-10-27T13:00:00Z",
      "id": "sub_list_000011",
      "json_schema_errors": [],
      "metadata": {
        "qux": "abc",
        "user_id": 42
      },
      "password": null,
      "pdf_hash": "bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
      "permanent_download_url": "http://app.docspring.local/submissions/sub_list_000011/download",
      "processed_at": "2020-05-14T02:00:00Z",
      "referrer": null,
      "source": "api",
      "state": "processed",
      "template_id": "tpl_000000000000000002",
      "test": false,
      "truncated_text": {
        "first_name": [
          "F. Scott Fitzgerald"
        ]
      }
    },
    {
      "actions": [],
      "batch_id": null,
      "data": {
        "first_name": "John C. D. Rom Laserdisk F. Scott Fitzgerald",
        "last_name": "Smith",
        "phone_number": "+11234567890"
      },
      "data_requests": [],
      "download_url": "https://example.com/submissions/submission.pdf",
      "editable": false,
      "expired": false,
      "expires_at": "2020-10-27T13:00:00Z",
      "id": "sub_list_000012",
      "json_schema_errors": [],
      "metadata": {
        "qux": "abc",
        "user_id": 42
      },
      "password": null,
      "pdf_hash": "bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
      "permanent_download_url": "http://app.docspring.local/submissions/sub_list_000012/download",
      "processed_at": "2020-05-14T02:00:00Z",
      "referrer": null,
      "source": "api",
      "state": "processed",
      "template_id": "tpl_000000000000000002",
      "test": false,
      "truncated_text": {
        "first_name": [
          "F. Scott Fitzgerald"
        ]
      }
    },
    {
      "actions": [],
      "batch_id": null,
      "data": {
        "first_name": "John C. D. Rom Laserdisk F. Scott Fitzgerald",
        "last_name": "Smith",
        "phone_number": "+11234567890"
      },
      "data_requests": [],
      "download_url": "https://example.com/submissions/submission.pdf",
      "editable": false,
      "expired": false,
      "expires_at": "2020-10-27T13:00:00Z",
      "id": "sub_list_000013",
      "json_schema_errors": [],
      "metadata": {
        "qux": "abc",
        "user_id": 42
      },
      "password": null,
      "pdf_hash": "bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
      "permanent_download_url": "http://app.docspring.local/submissions/sub_list_000013/download",
      "processed_at": "2020-05-14T02:00:00Z",
      "referrer": null,
      "source": "api",
      "state": "processed",
      "template_id": "tpl_000000000000000002",
      "test": false,
      "truncated_text": {
        "first_name": [
          "F. Scott Fitzgerald"
        ]
      }
    },
    {
      "actions": [],
      "batch_id": null,
      "data": {
        "first_name": "John C. D. Rom Laserdisk F. Scott Fitzgerald",
        "last_name": "Smith",
        "phone_number": "+11234567890"
      },
      "data_requests": [],
      "download_url": "https://example.com/submissions/submission.pdf",
      "editable": false,
      "expired": false,
      "expires_at": "2020-10-27T13:00:00Z",
      "id": "sub_list_000014",
      "json_schema_errors": [],
      "metadata": {
        "qux": "abc",
        "user_id": 42
      },
      "password": null,
      "pdf_hash": "bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
      "permanent_download_url": "http://app.docspring.local/submissions/sub_list_000014/download",
      "processed_at": "2020-05-14T02:00:00Z",
      "referrer": null,
      "source": "api",
      "state": "processed",
      "template_id": "tpl_000000000000000002",
      "test": false,
      "truncated_text": {
        "first_name": [
          "F. Scott Fitzgerald"
        ]
      }
    }
  ]
}
```

> 404 Response

```json
{
  "error": "string",
  "status": "error"
}
```

<h3 id="list-all-submissions-for-a-given-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|listing submissions|Inline|
|404|Not Found|invalid template id|[error](#schemaerror)|

<h3 id="list-all-submissions-for-a-given-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|number|true|none|none|
|next_cursor|string \| null|true|none|none|
|submissions|[[submission](#schemasubmission)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Generates a new PDF

<a id="opIdgeneratePDF"></a>

> Code samples

```bash
curl https://example.com/templates/tpl_000000000000000001/submissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "data": {
      "first_name": "John",
      "last_name": "Smith",
      "phone_number": "+11234567890"
    },
    "expires_in": 300,
    "metadata": {
      "bar": "baz",
      "foo": 123
    }
  }'
```

`POST /templates/{template_id}/submissions`

> Body parameter

```json
{
  "data": {
    "first_name": "John",
    "last_name": "Smith",
    "phone_number": "+11234567890"
  },
  "expires_in": 300,
  "metadata": {
    "bar": "baz",
    "foo": 123
  }
}
```

<h3 id="generates-a-new-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|none|
|body|body|object|true|none|
|» css|body|string|false|none|
|» data|body|object|true|none|
|» data_requests|body|[object]|false|none|
|» » auth_phone_number_hash|body|string \| null|false|none|
|» » auth_provider|body|string \| null|false|none|
|» » auth_second_factor_type|body|string|false|none|
|» » auth_session_id_hash|body|string \| null|false|none|
|» » auth_session_started_at|body|string \| null|false|none|
|» » auth_type|body|string|true|none|
|» » auth_user_id_hash|body|string \| null|false|none|
|» » auth_username_hash|body|string \| null|false|none|
|» » email|body|string \| null|true|none|
|» » fields|body|[string]|false|none|
|» » metadata|body|object|false|none|
|» » name|body|string \| null|false|none|
|» » order|body|integer|false|none|
|» expires_in|body|integer|false|none|
|» field_overrides|body|object|false|none|
|» html|body|string|false|none|
|» metadata|body|object|false|none|
|» password|body|string|false|none|
|» test|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » auth_second_factor_type|none|
|» » auth_second_factor_type|phone_number|
|» » auth_second_factor_type|totp|
|» » auth_second_factor_type|mobile_push|
|» » auth_second_factor_type|security_key|
|» » auth_second_factor_type|fingerprint|
|» » auth_type|none|
|» » auth_type|password|
|» » auth_type|oauth|
|» » auth_type|email_link|
|» » auth_type|phone_number|
|» » auth_type|ldap|
|» » auth_type|saml|

> Example responses

> 201 Response

```json
{
  "status": "success",
  "submission": {
    "actions": [],
    "batch_id": null,
    "data_requests": [],
    "download_url": null,
    "editable": null,
    "expired": false,
    "expires_at": null,
    "id": "sub_000000000000000001",
    "json_schema_errors": [],
    "metadata": {
      "bar": "baz",
      "foo": 123
    },
    "password": null,
    "pdf_hash": null,
    "permanent_download_url": null,
    "processed_at": null,
    "state": "pending",
    "template_id": "tpl_000000000000000001",
    "test": false,
    "truncated_text": {}
  }
}
```

> 400 Response

```json
{
  "error": "There was a problem with the JSON you submitted: unexpected character at line 1, column 25 in '{ \"first_name\": \"John\", last_name: \"Smith\" }",
  "status": "error"
}
```

> 401 Response

```json
{
  "error": "Invalid API token secret",
  "status": "error"
}
```

> 422 Response

```json
{
  "errors": [
    "Your submission data did not contain a required property of 'last_name'"
  ],
  "status": "error",
  "submission": {
    "actions": [],
    "batch_id": null,
    "data_requests": [],
    "download_url": null,
    "editable": null,
    "expired": false,
    "expires_at": null,
    "id": "sub_000000000000000001",
    "json_schema_errors": [
      "Your submission data did not contain a required property of 'last_name'"
    ],
    "metadata": {
      "bar": "baz",
      "foo": 123
    },
    "password": null,
    "pdf_hash": null,
    "permanent_download_url": null,
    "processed_at": null,
    "state": "invalid_data",
    "template_id": "tpl_000000000000000001",
    "test": false,
    "truncated_text": {}
  }
}
```

<h3 id="generates-a-new-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|submission created|Inline|
|400|Bad Request|invalid JSON|[error](#schemaerror)|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|422|Unprocessable Entity|invalid request|[invalid_request](#schemainvalid_request)|

<h3 id="generates-a-new-pdf-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[string]|false|none|none|
|status|string|true|none|none|
|submission|[submission](#schemasubmission)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Generates multiple PDFs

<a id="opIdbatchGeneratePdfV1"></a>

> Code samples

```bash
curl https://example.com/templates/tpl_000000000000000001/submissions/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "data": {
        "first_name": "Johnny",
        "last_name": "Smith"
      },
      "metadata": {
        "submission_number": 1
      }
    },
    {
      "data": {
        "first_name": "Jane",
        "last_name": "Doe"
      },
      "metadata": {
        "submission_number": 2
      }
    }
  ]'
```

`POST /templates/{template_id}/submissions/batch`

> Body parameter

```json
[
  {
    "data": {
      "first_name": "Johnny",
      "last_name": "Smith"
    },
    "metadata": {
      "submission_number": 1
    }
  },
  {
    "data": {
      "first_name": "Jane",
      "last_name": "Doe"
    },
    "metadata": {
      "submission_number": 2
    }
  }
]
```

<h3 id="generates-multiple-pdfs-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|none|
|body|body|[object]|true|none|

> Example responses

> 201 Response

```json
[
  {
    "status": "success",
    "submission": {
      "actions": [],
      "batch_id": null,
      "data_requests": [],
      "download_url": null,
      "editable": null,
      "expired": false,
      "expires_at": null,
      "id": "sub_000000000000000001",
      "json_schema_errors": [],
      "metadata": {
        "submission_number": 1
      },
      "password": null,
      "pdf_hash": null,
      "permanent_download_url": null,
      "processed_at": null,
      "state": "pending",
      "template_id": "tpl_000000000000000001",
      "test": false,
      "truncated_text": {}
    }
  },
  {
    "status": "success",
    "submission": {
      "actions": [],
      "batch_id": null,
      "data_requests": [],
      "download_url": null,
      "editable": null,
      "expired": false,
      "expires_at": null,
      "id": "sub_000000000000000002",
      "json_schema_errors": [],
      "metadata": {
        "submission_number": 2
      },
      "password": null,
      "pdf_hash": null,
      "permanent_download_url": null,
      "processed_at": null,
      "state": "pending",
      "template_id": "tpl_000000000000000001",
      "test": false,
      "truncated_text": {}
    }
  }
]
```

> 400 Response

```json
{
  "error": "There was a problem with the JSON you submitted: unexpected character at line 1, column 25 in '{ \"first_name\": \"John\", last_name: \"Smith\" }",
  "status": "error"
}
```

> 401 Response

```json
{
  "error": "Invalid API token secret"
}
```

> 422 Response

```json
[
  {
    "errors": [
      "Your submission data did not contain a required property of 'last_name'"
    ],
    "status": "error",
    "submission": {
      "actions": [],
      "batch_id": null,
      "data_requests": [],
      "download_url": null,
      "editable": null,
      "expired": false,
      "expires_at": null,
      "id": "sub_000000000000000001",
      "json_schema_errors": [
        "Your submission data did not contain a required property of 'last_name'"
      ],
      "metadata": {
        "submission_number": 1
      },
      "password": null,
      "pdf_hash": null,
      "permanent_download_url": null,
      "processed_at": null,
      "state": "invalid_data",
      "template_id": "tpl_000000000000000001",
      "test": false,
      "truncated_text": {}
    }
  },
  {
    "errors": [
      "Your submission data did not contain a required property of 'first_name'"
    ],
    "status": "error",
    "submission": {
      "actions": [],
      "batch_id": null,
      "data_requests": [],
      "download_url": null,
      "editable": null,
      "expired": false,
      "expires_at": null,
      "id": "sub_000000000000000002",
      "json_schema_errors": [
        "Your submission data did not contain a required property of 'first_name'"
      ],
      "metadata": {
        "submission_number": 2
      },
      "password": null,
      "pdf_hash": null,
      "permanent_download_url": null,
      "processed_at": null,
      "state": "invalid_data",
      "template_id": "tpl_000000000000000001",
      "test": false,
      "truncated_text": {}
    }
  }
]
```

<h3 id="generates-multiple-pdfs-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|submissions created|Inline|
|400|Bad Request|invalid JSON|[error](#schemaerror)|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|422|Unprocessable Entity|invalid requests|Inline|

<h3 id="generates-multiple-pdfs-1-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» errors|[string]|false|none|none|
|» status|string|true|none|none|
|» submission|[submission](#schemasubmission)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|success|
|» status|error|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[invalid_request](#schemainvalid_request)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Fetch the full template attributes

<a id="opIdgetFullTemplate"></a>

> Code samples

```bash
curl 'https://example.com/templates/tpl_000000000000000001?full=true' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /templates/{template_id}?full=true`

<h3 id="fetch-the-full-template-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "allow_additional_properties": false,
  "defaults": {
    "characterSpacing": 0,
    "checkColor": "444444",
    "color": "444444",
    "dateFormat": "%m/%d/%Y",
    "dateTimeFormat": "%m/%d/%Y %H:%M:%S",
    "fontSize": 11,
    "opacity": 1,
    "shapeBorderColor": "4A90E2",
    "typeface": "Helvetica"
  },
  "demo": false,
  "description": null,
  "document_filename": "blank_pdf.pdf",
  "document_md5": "1c32d785398e3a7eaab0e9b876903cc6",
  "document_parse_error": false,
  "document_processed": true,
  "document_state": "processed",
  "document_url": "/uploads/test/store/acc_000000000000000001/templates/tpl_000000000000000001/document/original-0000000000.pdf",
  "editable_submissions": false,
  "embed_domains": null,
  "encrypt_pdfs": false,
  "encrypt_pdfs_password": null,
  "expiration_interval": "days",
  "expire_after": 7,
  "expire_submissions": true,
  "field_order": [
    [
      1,
      2,
      3
    ]
  ],
  "fields": {
    "1": {
      "displayType": "text",
      "height": 80,
      "name": "first_name",
      "width": 200,
      "x": 0,
      "y": 0
    },
    "2": {
      "displayType": "text",
      "height": 80,
      "name": "last_name",
      "width": 200,
      "x": 0,
      "y": 100
    },
    "3": {
      "displayType": "text",
      "height": 80,
      "name": "phone_number",
      "width": 200,
      "x": 0,
      "y": 200
    }
  },
  "first_template": false,
  "footer_html": null,
  "header_html": null,
  "html": null,
  "html_engine_options": {
    "format": "Letter",
    "landscape": false,
    "marginBottom": "1in",
    "marginLeft": "1in",
    "marginRight": "1in",
    "marginTop": "1in",
    "scale": 1
  },
  "id": "tpl_000000000000000001",
  "locked": false,
  "name": "Template 1",
  "page_count": 1,
  "page_dimensions": [
    [
      612,
      792
    ]
  ],
  "parent_folder_id": null,
  "path": "/",
  "permanent_document_url": "http://app.docspring.local/templates/tpl_000000000000000001/original_pdf?token=123456789abcdef",
  "public_submissions": false,
  "public_web_form": false,
  "redirect_url": null,
  "scss": null,
  "shared_field_data": {
    "first_name": {
      "fieldCount": 1,
      "name": "first_name",
      "required": true,
      "type": "string"
    },
    "last_name": {
      "fieldCount": 1,
      "name": "last_name",
      "required": true,
      "type": "string"
    },
    "phone_number": {
      "fieldCount": 1,
      "name": "phone_number",
      "required": false,
      "type": "string"
    }
  },
  "slack_webhook_url": null,
  "template_type": "pdf",
  "webhook_url": null
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 404 Response

```json
{
  "error": "Template not found.",
  "status": "error"
}
```

<h3 id="fetch-the-full-template-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|template found|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|
|404|Not Found|template not found|[error](#schemaerror)|

<h3 id="fetch-the-full-template-attributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_additional_properties|boolean|true|none|none|
|defaults|object|true|none|none|
|» color|string \| null|true|none|none|
|» fontSize|number|true|none|none|
|» typeface|string|true|none|none|
|demo|boolean|true|none|none|
|description|string \| null|true|none|none|
|document_filename|string \| null|true|none|none|
|document_md5|string \| null|true|none|none|
|document_parse_error|boolean|true|none|none|
|document_processed|boolean|true|none|none|
|document_state|string|true|none|none|
|document_url|string \| null|true|none|none|
|editable_submissions|boolean|true|none|none|
|embed_domains|[string]|true|none|none|
|encrypt_pdfs|boolean|true|none|none|
|encrypt_pdfs_password|string \| null|true|none|none|
|expiration_interval|string|true|none|none|
|expire_after|number|true|none|none|
|expire_submissions|boolean|true|none|none|
|field_order|[[number]]|true|none|none|
|fields|object|true|none|none|
|first_template|boolean|true|none|none|
|footer_html|string \| null|true|none|none|
|header_html|string \| null|true|none|none|
|html|string \| null|true|none|none|
|id|string|true|none|none|
|locked|boolean|true|none|none|
|name|string \| null|true|none|none|
|page_count|number|true|none|none|
|page_dimensions|[[number]]|true|none|none|
|parent_folder_id|string \| null|true|none|none|
|path|string|true|none|none|
|permanent_document_url|string \| null|true|none|none|
|public_submissions|boolean|true|none|none|
|public_web_form|boolean|true|none|none|
|redirect_url|string \| null|true|none|none|
|scss|string \| null|true|none|none|
|shared_field_data|object|true|none|none|
|slack_webhook_url|string \| null|true|none|none|
|template_type|string|true|none|none|
|webhook_url|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|expiration_interval|minutes|
|expiration_interval|hours|
|expiration_interval|days|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Create a new PDF template from a cached presign upload

<a id="opIdcreatePDFTemplateFromUpload"></a>

> Code samples

```bash
curl 'https://example.com/templates?desc=cached_upload' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "template": {
      "document": {
        "id": "b6903dbfb15c13bbad1444c35064df9e",
        "metadata": {
          "filename": "fw8ben-presigned.pdf",
          "mime_type": "application/pdf",
          "size": 5885
        },
        "storage": "cache"
      },
      "name": "Test Template Presigned"
    }
  }'
```

`POST /templates?desc=cached_upload`

> Body parameter

```json
{
  "template": {
    "document": {
      "id": "b6903dbfb15c13bbad1444c35064df9e",
      "metadata": {
        "filename": "fw8ben-presigned.pdf",
        "mime_type": "application/pdf",
        "size": 5885
      },
      "storage": "cache"
    },
    "name": "Test Template Presigned"
  }
}
```

<h3 id="create-a-new-pdf-template-from-a-cached-presign-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» template|body|object|true|none|
|» » allow_additional_properties|body|boolean|false|none|
|» » description|body|string \| null|false|none|
|» » document|body|object|false|none|
|» » » id|body|string|true|none|
|» » » metadata|body|object|true|none|
|» » » » filename|body|string|true|none|
|» » » » mime_type|body|string|true|none|
|» » » » size|body|integer|true|none|
|» » » storage|body|string|true|none|
|» » editable_submissions|body|boolean|false|none|
|» » expiration_interval|body|string|false|none|
|» » expire_after|body|number|false|none|
|» » expire_submissions|body|boolean|false|none|
|» » footer_html|body|string \| null|false|none|
|» » header_html|body|string \| null|false|none|
|» » html|body|string \| null|false|none|
|» » name|body|string \| null|true|none|
|» » public_submissions|body|boolean|false|none|
|» » public_web_form|body|boolean|false|none|
|» » redirect_url|body|string \| null|false|none|
|» » scss|body|string \| null|false|none|
|» » slack_webhook_url|body|string \| null|false|none|
|» » template_type|body|string|false|none|
|» » webhook_url|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » » mime_type|application/pdf|
|» » » storage|cache|
|» » expiration_interval|minutes|
|» » expiration_interval|hours|
|» » expiration_interval|days|
|» » template_type|pdf|
|» » template_type|html|

> Example responses

> 201 Response

```json
{
  "allow_additional_properties": false,
  "description": null,
  "document_filename": "fw8ben-presigned.pdf",
  "document_processed": false,
  "document_state": "pending",
  "document_url": "/uploads/test/cache/b6903dbfb15c13bbad1444c35064df9e",
  "editable_submissions": false,
  "expiration_interval": "days",
  "expire_after": 7,
  "expire_submissions": false,
  "id": "tpl_000000000000000004",
  "locked": false,
  "name": "Test Template Presigned",
  "page_count": 0,
  "page_dimensions": null,
  "parent_folder_id": null,
  "path": "/",
  "permanent_document_url": null,
  "public_submissions": false,
  "public_web_form": false,
  "redirect_url": null,
  "slack_webhook_url": null,
  "template_type": "pdf",
  "webhook_url": null
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

<h3 id="create-a-new-pdf-template-from-a-cached-presign-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|returns a pending template|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|

<h3 id="create-a-new-pdf-template-from-a-cached-presign-upload-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_additional_properties|boolean|true|none|none|
|description|string \| null|true|none|none|
|editable_submissions|boolean|true|none|none|
|expiration_interval|string|false|none|none|
|expire_after|number|false|none|none|
|expire_submissions|boolean|true|none|none|
|id|string|true|none|none|
|locked|boolean|true|none|none|
|name|string \| null|true|none|none|
|parent_folder_id|string \| null|false|none|none|
|path|string|false|none|none|
|public_submissions|boolean|true|none|none|
|public_web_form|boolean|true|none|none|
|redirect_url|string \| null|true|none|none|
|slack_webhook_url|string \| null|true|none|none|
|template_type|string|true|none|none|
|webhook_url|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|expiration_interval|minutes|
|expiration_interval|hours|
|expiration_interval|days|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Create a new HTML template

<a id="opIdcreateHTMLTemplate"></a>

> Code samples

```bash
curl 'https://example.com/templates?desc=html' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "template": {
      "description": "HTML template created via API",
      "footer_html": "Test Footer",
      "header_html": "Test Header",
      "html": "<html><body><p>Test Content</p></body></html>",
      "name": "Test HTML Template",
      "scss": "body { color: #444; }",
      "template_type": "html"
    }
  }'
```

`POST /templates?desc=html`

> Body parameter

```json
{
  "template": {
    "description": "HTML template created via API",
    "footer_html": "Test Footer",
    "header_html": "Test Header",
    "html": "<html><body><p>Test Content</p></body></html>",
    "name": "Test HTML Template",
    "scss": "body { color: #444; }",
    "template_type": "html"
  }
}
```

<h3 id="create-a-new-html-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» template|body|object|true|none|
|» » allow_additional_properties|body|boolean|false|none|
|» » description|body|string \| null|false|none|
|» » editable_submissions|body|boolean|false|none|
|» » expiration_interval|body|string|false|none|
|» » expire_after|body|number|false|none|
|» » expire_submissions|body|boolean|false|none|
|» » footer_html|body|string \| null|false|none|
|» » header_html|body|string \| null|false|none|
|» » html|body|string \| null|false|none|
|» » name|body|string \| null|true|none|
|» » public_submissions|body|boolean|false|none|
|» » public_web_form|body|boolean|false|none|
|» » redirect_url|body|string \| null|false|none|
|» » scss|body|string \| null|false|none|
|» » slack_webhook_url|body|string \| null|false|none|
|» » template_type|body|string|false|none|
|» » webhook_url|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » expiration_interval|minutes|
|» » expiration_interval|hours|
|» » expiration_interval|days|
|» » template_type|pdf|
|» » template_type|html|

> Example responses

> 201 Response

```json
{
  "allow_additional_properties": false,
  "description": "HTML template created via API",
  "document_filename": null,
  "document_processed": false,
  "document_state": "pending",
  "document_url": null,
  "editable_submissions": false,
  "expiration_interval": "days",
  "expire_after": 7,
  "expire_submissions": false,
  "id": "tpl_000000000000000004",
  "locked": false,
  "name": "Test HTML Template",
  "page_count": 1,
  "page_dimensions": null,
  "parent_folder_id": null,
  "path": "/",
  "permanent_document_url": null,
  "public_submissions": false,
  "public_web_form": false,
  "redirect_url": null,
  "slack_webhook_url": null,
  "template_type": "html",
  "webhook_url": null
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

<h3 id="create-a-new-html-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|returns a created template|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|

<h3 id="create-a-new-html-template-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_additional_properties|boolean|true|none|none|
|description|string \| null|true|none|none|
|editable_submissions|boolean|true|none|none|
|expiration_interval|string|false|none|none|
|expire_after|number|false|none|none|
|expire_submissions|boolean|true|none|none|
|id|string|true|none|none|
|locked|boolean|true|none|none|
|name|string \| null|true|none|none|
|parent_folder_id|string \| null|false|none|none|
|path|string|false|none|none|
|public_submissions|boolean|true|none|none|
|public_web_form|boolean|true|none|none|
|redirect_url|string \| null|true|none|none|
|slack_webhook_url|string \| null|true|none|none|
|template_type|string|true|none|none|
|webhook_url|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|expiration_interval|minutes|
|expiration_interval|hours|
|expiration_interval|days|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

## Get a presigned URL so that you can upload a file to our AWS S3 bucket

<a id="opIdgetPresignUrl"></a>

> Code samples

```bash
curl https://example.com/uploads/presign \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /uploads/presign`

> Example responses

> 200 Response

```json
{
  "fields": {
    "key": "ed9424dccf185f3835df4e9e1da0ca0b",
    "policy": "eyJleHBpcmF0aW9uIjoiMjAxOS0xMC0wNVQxNDowMDowMFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJ0ZXN0LWJ1Y2tldCJ9LHsia2V5IjoiZWQ5NDI0ZGNjZjE4NWYzODM1ZGY0ZTllMWRhMGNhMGIifSx7IngtYW16LWNyZWRlbnRpYWwiOiIxMjM0NTY3ODkvMjAxOTEwMDUvdXMtZWFzdC0xL3MzL2F3czRfcmVxdWVzdCJ9LHsieC1hbXotYWxnb3JpdGhtIjoiQVdTNC1ITUFDLVNIQTI1NiJ9LHsieC1hbXotZGF0ZSI6IjIwMTkxMDA1VDEzMDAwMFoifV19",
    "x-amz-algorithm": "AWS4-HMAC-SHA256",
    "x-amz-credential": "123456789/20191005/us-east-1/s3/aws4_request",
    "x-amz-date": "20191005T130000Z",
    "x-amz-signature": "6b715e441bd7ea5beec87f8415230a600be6dfd76b8f89103137618dca959fac"
  },
  "headers": {},
  "method": "post",
  "url": "https://test-bucket.s3.amazonaws.com"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

<h3 id="get-a-presigned-url-so-that-you-can-upload-a-file-to-our-aws-s3-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|presign URL generated|Inline|
|401|Unauthorized|authentication failed|[authentication_error](#schemaauthentication_error)|

<h3 id="get-a-presigned-url-so-that-you-can-upload-a-file-to-our-aws-s3-bucket-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|object|true|none|none|
|» key|string|true|none|none|
|» policy|string|true|none|none|
|» x-amz-algorithm|string|true|none|none|
|» x-amz-credential|string|true|none|none|
|» x-amz-date|string|true|none|none|
|» x-amz-signature|string|true|none|none|
|headers|object|true|none|none|
|method|string|false|none|none|
|url|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|post|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_token_basic
</aside>

# Schemas

<h2 id="tocS_authentication_error">authentication_error</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication_error"></a>
<a id="schema_authentication_error"></a>
<a id="tocSauthentication_error"></a>
<a id="tocsauthentication_error"></a>

```json
{
  "error": "string",
  "status": "error"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|error|

<h2 id="tocS_combined_submission_action">combined_submission_action</h2>
<!-- backwards compatibility -->
<a id="schemacombined_submission_action"></a>
<a id="schema_combined_submission_action"></a>
<a id="tocScombined_submission_action"></a>
<a id="tocscombined_submission_action"></a>

```json
{
  "action_category": "notification",
  "action_type": "webhook",
  "id": "string",
  "integration_id": "string",
  "result_data": {},
  "state": "pending"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action_category|string|true|none|none|
|action_type|string|true|none|none|
|id|string|true|none|none|
|integration_id|string \| null|true|none|none|
|result_data|object|true|none|none|
|state|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action_category|notification|
|action_category|file_upload|
|action_type|webhook|
|action_type|slack_webhook|
|action_type|email|
|action_type|aws_s3_upload|
|state|pending|
|state|processed|
|state|failed|
|state|error|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": "string",
  "status": "error"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|error|

<h2 id="tocS_invalid_request">invalid_request</h2>
<!-- backwards compatibility -->
<a id="schemainvalid_request"></a>
<a id="schema_invalid_request"></a>
<a id="tocSinvalid_request"></a>
<a id="tocsinvalid_request"></a>

```json
{
  "errors": [
    "string"
  ],
  "status": "error"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[string]|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|error|

<h2 id="tocS_submission">submission</h2>
<!-- backwards compatibility -->
<a id="schemasubmission"></a>
<a id="schema_submission"></a>
<a id="tocSsubmission"></a>
<a id="tocssubmission"></a>

```json
{
  "actions": [
    {
      "action_category": "notification",
      "action_type": "webhook",
      "id": "string",
      "integration_id": "string",
      "result_data": {},
      "state": "pending"
    }
  ],
  "batch_id": "string",
  "data": {},
  "data_requests": [
    {
      "auth_phone_number_hash": "string",
      "auth_provider": "string",
      "auth_second_factor_type": "none",
      "auth_session_id_hash": "string",
      "auth_session_started_at": "string",
      "auth_type": "none",
      "auth_user_id_hash": "string",
      "auth_username_hash": "string",
      "completed_at": "string",
      "email": "string",
      "fields": [
        "string"
      ],
      "id": "string",
      "ip_address": "string",
      "metadata": {},
      "name": "string",
      "order": 0,
      "sort_order": 0,
      "state": "pending",
      "submission_id": "string",
      "user_agent": "string",
      "viewed_at": "string"
    }
  ],
  "download_url": "string",
  "editable": true,
  "expired": true,
  "expires_at": "string",
  "id": "string",
  "metadata": {},
  "pdf_hash": "string",
  "permanent_download_url": "string",
  "processed_at": "string",
  "referrer": "string",
  "source": "string",
  "state": "pending",
  "template_id": "string",
  "test": true,
  "truncated_text": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[submission_action](#schemasubmission_action)]|false|none|none|
|batch_id|string \| null|false|none|none|
|data|object \| null|false|none|none|
|data_requests|[[submission_data_request](#schemasubmission_data_request)]|false|none|none|
|download_url|string \| null|false|none|none|
|editable|boolean \| null|false|none|none|
|expired|boolean|true|none|none|
|expires_at|string \| null|false|none|none|
|id|string|true|none|none|
|metadata|object|false|none|none|
|pdf_hash|string \| null|false|none|none|
|permanent_download_url|string \| null|false|none|none|
|processed_at|string \| null|false|none|none|
|referrer|string \| null|false|none|none|
|source|string \| null|false|none|none|
|state|string|true|none|none|
|template_id|string|false|none|none|
|test|boolean|true|none|none|
|truncated_text|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|processed|
|state|invalid_data|
|state|error|
|state|image_download_failed|
|state|image_processing_failed|
|state|waiting_for_data_requests|
|state|syntax_error|
|state|account_suspended|
|state|license_revoked|
|state|accidental|

<h2 id="tocS_submission_action">submission_action</h2>
<!-- backwards compatibility -->
<a id="schemasubmission_action"></a>
<a id="schema_submission_action"></a>
<a id="tocSsubmission_action"></a>
<a id="tocssubmission_action"></a>

```json
{
  "action_category": "notification",
  "action_type": "webhook",
  "id": "string",
  "integration_id": "string",
  "result_data": {},
  "state": "pending"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action_category|string|true|none|none|
|action_type|string|true|none|none|
|id|string|true|none|none|
|integration_id|string \| null|true|none|none|
|result_data|object|true|none|none|
|state|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action_category|notification|
|action_category|file_upload|
|action_type|webhook|
|action_type|slack_webhook|
|action_type|email|
|action_type|aws_s3_upload|
|state|pending|
|state|processed|
|state|failed|
|state|error|

<h2 id="tocS_submission_data_request">submission_data_request</h2>
<!-- backwards compatibility -->
<a id="schemasubmission_data_request"></a>
<a id="schema_submission_data_request"></a>
<a id="tocSsubmission_data_request"></a>
<a id="tocssubmission_data_request"></a>

```json
{
  "auth_phone_number_hash": "string",
  "auth_provider": "string",
  "auth_second_factor_type": "none",
  "auth_session_id_hash": "string",
  "auth_session_started_at": "string",
  "auth_type": "none",
  "auth_user_id_hash": "string",
  "auth_username_hash": "string",
  "completed_at": "string",
  "email": "string",
  "fields": [
    "string"
  ],
  "id": "string",
  "ip_address": "string",
  "metadata": {},
  "name": "string",
  "order": 0,
  "sort_order": 0,
  "state": "pending",
  "submission_id": "string",
  "user_agent": "string",
  "viewed_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_phone_number_hash|string \| null|false|none|none|
|auth_provider|string \| null|false|none|none|
|auth_second_factor_type|string|false|none|none|
|auth_session_id_hash|string \| null|false|none|none|
|auth_session_started_at|string \| null|false|none|none|
|auth_type|string|false|none|none|
|auth_user_id_hash|string \| null|false|none|none|
|auth_username_hash|string \| null|false|none|none|
|completed_at|string \| null|false|none|none|
|email|string \| null|true|none|none|
|fields|[string]|true|none|none|
|id|string|true|none|none|
|ip_address|string \| null|false|none|none|
|metadata|object|true|none|none|
|name|string \| null|true|none|none|
|order|integer|true|none|none|
|sort_order|integer|true|none|none|
|state|string|true|none|none|
|submission_id|string|false|none|none|
|user_agent|string \| null|false|none|none|
|viewed_at|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_second_factor_type|none|
|auth_second_factor_type|phone_number|
|auth_second_factor_type|totp|
|auth_second_factor_type|mobile_push|
|auth_second_factor_type|security_key|
|auth_second_factor_type|fingerprint|
|auth_type|none|
|auth_type|password|
|auth_type|oauth|
|auth_type|email_link|
|auth_type|phone_number|
|auth_type|ldap|
|auth_type|saml|
|state|pending|
|state|completed|
