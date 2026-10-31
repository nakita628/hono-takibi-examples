<h1 id="contractfit-api">Contract.fit API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This OpenAPI describes the API exposed by the contract.fit backend.

## Security

### Authentication

All endpoints are protected: you need to make authenticated calls. There are 3 authentication mechanisms:
- HTTP Basic (Username + Password)
- JWT Token
- API-Key

By default you should have an account allowing you to bootstrap your tenant and create users and roles, using Basic Auth or after creating a Token  - see */auth* endpoints.

If you are missing credentials or permissions, please [contact us](https://contract.fit/contact-us).

### Authorization

The security system is RBAC based: users must be granted scoped roles, allowing them to access resources.
Each role grants a defined set of permissions, which can be restricted to a given inbox or document - see */roles* endpoints.

## Upload and Processing

Below is a short description of common use cases of the API.

### Simple Upload

The easiest and simplest way to get started is to use POST /documents : it will make a synchronous upload of your file and wait for the result.

This is a simplified version of POST /documents/{inbox_id} with less arguments and settings; it may not be suitable for real workload as it offers less capabilities.

### Upload to Inbox

The favored endpoint to upload files is POST /documents/{inbox_id}: it is also highly recommended to make async call using sync=false.

**Sync / Async**

For convenience uploads can be synchronous: it will make the request blocks until the document is processed.

It is however discouraged to rely on sync requests, as our service is designed to process documents asynchronously. You might run into timeouts and unprocessed document depending on factors such as server load and number of pending documents.

Asynchronous calls will only schedule the processing and directly return the document ID without waiting: the document will be processed as soon as possible. You can then wait for the processed result using GET */documents/{document_id}*.

### Reprocessing

You can reprocess a document using POST */documents/{document_id}/reprocess* : it will schedule an async processing of the document (note: it is not possible to make a sync reprocessing)

Base URLs:

* <a href="https://api.apis.guru//cfportal.contract-p.fit/api">https://api.apis.guru//cfportal.contract-p.fit/api</a>

# Authentication

- HTTP Authentication, scheme: basic username and password

* API Key (token)
    - Parameter Name: **Authorization**, in: header.

<h1 id="contractfit-api-documents">documents</h1>

File manipulation endpoint

## Upload a new document

<a id="opIdpost_simple_documents_resource"></a>

> Code samples

```bash
curl https://example.com/documents/ \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'experimental=true' \
  -F 'file=@/path/to/file' \
  -F 'inbox_id=string' \
  -F 'key_value_flag=true'
```

`POST /documents/`

This endpoint is a simplified version of the upload document to inbox one - synchronous mode.

The upload file will be upload to the given inbox if provided, else fallback to the **invoice** inbox.
The file will be processed synchronously, ie the request will blocks until the document was processed
*or* until it timeout; in this case the document might **not** be correctly processed.


For a more reliable processing use the /documents/{inbox_id} endpoint in async mode


**Permission required:** upload

> Body parameter

```yaml
experimental: true
file: string
inbox_id: string
key_value_flag: true
```

<h3 id="upload-a-new-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» experimental|body|boolean|false|Use the experimental processing workflow|
|» file|body|string(binary)|true|File to process|
|» inbox_id|body|string|false|Inbox to use. Default to the **invoice** inbox|
|» key_value_flag|body|boolean|false|If true the result will only contains mapping of prediction = value|

<h3 id="upload-a-new-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Generate custom output for documents

<a id="opIdpost_document_custom_output_resource"></a>

> Code samples

```bash
curl https://example.com/documents/custom_output \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "custom": {},
    "excel": {
      "add_automation_blockers": false,
      "add_confidence": false,
      "add_text": true,
      "enable_key_value": false,
      "multiple_value_separator": ";"
    },
    "filter": {
      "end_date": "1970-01-01T00:00:00Z",
      "list": [
        "string"
      ],
      "start_date": "1970-01-01T00:00:00Z",
      "type": "project"
    }
  }'
```

`POST /documents/custom_output`

Using the provided filter on documents, will generate a custom output.

**Note:** only excel output is supported at the moment.

**Permission required:** review

> Body parameter

```json
{
  "custom": {},
  "excel": {
    "add_automation_blockers": false,
    "add_confidence": false,
    "add_text": true,
    "enable_key_value": false,
    "multiple_value_separator": ";"
  },
  "filter": {
    "end_date": "1970-01-01T00:00:00Z",
    "list": [
      "string"
    ],
    "start_date": "1970-01-01T00:00:00Z",
    "type": "project"
  }
}
```

<h3 id="generate-custom-output-for-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomOutputPost](#schemacustomoutputpost)|true|none|
|» custom|body|[CustomAtom](#schemacustomatom)|false|none|
|» excel|body|[ExcelAtom](#schemaexcelatom)|false|none|
|» filter|body|[FilterAtom](#schemafilteratom)|false|none|

<h3 id="generate-custom-output-for-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File Attached|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## post_enrichment_resource

<a id="opIdpost_enrichment_resource"></a>

> Code samples

```bash
curl https://example.com/documents/enrich \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{}'
```

`POST /documents/enrich`

> Body parameter

```json
{}
```

<h3 id="postenrichmentresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EnrichmentModelPost](#schemaenrichmentmodelpost)|true|none|

<h3 id="postenrichmentresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## post_document_data_resource

<a id="opIdpost_document_data_resource"></a>

> Code samples

```bash
curl https://example.com/documents/file_query/document \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "document_ids": [
      "abcdef123456789abcdef123"
    ]
  }'
```

`POST /documents/file_query/{data_type}`

> Body parameter

```json
{
  "document_ids": [
    "abcdef123456789abcdef123"
  ]
}
```

<h3 id="postdocumentdataresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|data_type|path|string|true|Define the data that you want to get out. Possible options: ['document', 'reverse', 'text']|
|body|body|[DocumentIds](#schemadocumentids)|true|none|
|» document_ids|body|[string]|false|none|

<h3 id="postdocumentdataresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Unsupported argument|None|
|403|Forbidden|Permission insufficient|None|
|422|Unprocessable Entity|Document list invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## post_document_query

<a id="opIdpost_document_query"></a>

> Code samples

```bash
curl https://example.com/documents/query/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "filter": {
      "_id": {
        "$oid": "abcdef123456789abcdef123"
      },
      "inbox": {
        "$in": [
          {
            "$oid": "abcdef123456789abcdef123"
          }
        ]
      },
      "timing_fields": {
        "timeFrom": "string",
        "timeTo": "string"
      },
      "timings": {
        "done_time": {
          "$gt": "1970-01-01T00:00:00Z",
          "$gte": "1970-01-01T00:00:00Z",
          "$lt": "1970-01-01T00:00:00Z",
          "$lte": "1970-01-01T00:00:00Z"
        },
        "feedback_time": {
          "$gt": "1970-01-01T00:00:00Z",
          "$gte": "1970-01-01T00:00:00Z",
          "$lt": "1970-01-01T00:00:00Z",
          "$lte": "1970-01-01T00:00:00Z"
        },
        "receive_time": {
          "$gt": "1970-01-01T00:00:00Z",
          "$gte": "1970-01-01T00:00:00Z",
          "$lt": "1970-01-01T00:00:00Z",
          "$lte": "1970-01-01T00:00:00Z"
        },
        "review_start_time": {
          "$gt": "1970-01-01T00:00:00Z",
          "$gte": "1970-01-01T00:00:00Z",
          "$lt": "1970-01-01T00:00:00Z",
          "$lte": "1970-01-01T00:00:00Z"
        },
        "start_time": {
          "$gt": "1970-01-01T00:00:00Z",
          "$gte": "1970-01-01T00:00:00Z",
          "$lt": "1970-01-01T00:00:00Z",
          "$lte": "1970-01-01T00:00:00Z"
        }
      }
    },
    "type": "inbox"
  }'
```

`POST /documents/query/{query_type}`

> Body parameter

```json
{
  "filter": {
    "_id": {
      "$oid": "abcdef123456789abcdef123"
    },
    "inbox": {
      "$in": [
        {
          "$oid": "abcdef123456789abcdef123"
        }
      ]
    },
    "timing_fields": {
      "timeFrom": "string",
      "timeTo": "string"
    },
    "timings": {
      "done_time": {
        "$gt": "1970-01-01T00:00:00Z",
        "$gte": "1970-01-01T00:00:00Z",
        "$lt": "1970-01-01T00:00:00Z",
        "$lte": "1970-01-01T00:00:00Z"
      },
      "feedback_time": {
        "$gt": "1970-01-01T00:00:00Z",
        "$gte": "1970-01-01T00:00:00Z",
        "$lt": "1970-01-01T00:00:00Z",
        "$lte": "1970-01-01T00:00:00Z"
      },
      "receive_time": {
        "$gt": "1970-01-01T00:00:00Z",
        "$gte": "1970-01-01T00:00:00Z",
        "$lt": "1970-01-01T00:00:00Z",
        "$lte": "1970-01-01T00:00:00Z"
      },
      "review_start_time": {
        "$gt": "1970-01-01T00:00:00Z",
        "$gte": "1970-01-01T00:00:00Z",
        "$lt": "1970-01-01T00:00:00Z",
        "$lte": "1970-01-01T00:00:00Z"
      },
      "start_time": {
        "$gt": "1970-01-01T00:00:00Z",
        "$gte": "1970-01-01T00:00:00Z",
        "$lt": "1970-01-01T00:00:00Z",
        "$lte": "1970-01-01T00:00:00Z"
      }
    }
  },
  "type": "inbox"
}
```

<h3 id="postdocumentquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query_type|path|string|true|none|
|body|body|[AggregationPipelinePost](#schemaaggregationpipelinepost)|true|none|
|» filter|body|[FilterModel](#schemafiltermodel)|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|inbox|
|» type|get-todo-count|
|» type|get-todo-escalated-count|
|» type|get-oldest-todo|
|» type|get-oldest-escalated-todo|
|» type|get-finished-me|
|» type|get-finished-team|
|» type|next-document|
|» type|prev-document|
|» type|get-next-uuid|
|» type|avg-time|

<h3 id="postdocumentquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get the document

<a id="opIdget_document_delete_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /documents/{document_id}`

Simple endpoint that will fetch the given document

**Permission required:** review

<h3 id="get-the-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|document_id|path|string|true|none|

<h3 id="get-the-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete the document

<a id="opIddelete_document_delete_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /documents/{document_id}`

how parameter: if how == "FULL", we delete the entire document, including its source files
if how == "SOURCE_FILES", we only remove the (source) files and we set the archived flag. In practice this means
all information in the database (json) remains available, but you can no longer download / visualise the original document.

**WARNING** The removal (of source files and in the database) is permanent


**Permission required:** review

<h3 id="delete-the-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|how|query|string|false|none|
|document_id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|how|FULL|
|how|SOURCE_FILES|

<h3 id="delete-the-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## post_document_compare_versions_resource

<a id="opIdpost_document_compare_versions_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/compare_versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "cmp_version_1": "string",
    "cmp_version_2": "string",
    "name": "string"
  }'
```

`POST /documents/{document_id}/compare_versions`

> Body parameter

```json
{
  "cmp_version_1": "string",
  "cmp_version_2": "string",
  "name": "string"
}
```

<h3 id="postdocumentcompareversionsresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|document_id|path|string|true|none|
|body|body|[VersionCompare](#schemaversioncompare)|true|none|
|» cmp_version_1|body|string|true|none|
|» cmp_version_2|body|string|true|none|
|» name|body|string|true|none|

<h3 id="postdocumentcompareversionsresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get custom output formatted document

<a id="opIdget_document_transform_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/custom_output \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /documents/{document_id}/custom_output`

If you have a custom output configured (this is set by contract.fit team), This allows you to
get the custom output formatted document.


**Permission required:** review

<h3 id="get-custom-output-formatted-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|document_id|path|string|true|none|

<h3 id="get-custom-output-formatted-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|No custom output|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Submit a feedback

<a id="opIdpost_document_submit_eval_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/feedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "annotations": {
      "string": [
        {
          "gold": "string",
          "text": "string",
          "textual_coord": [
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "visual_coord": [
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      ]
    },
    "cmp_version": "string",
    "evaluate": true,
    "lines": {
      "string": [
        {
          "string": {
            "gold": "string",
            "text": "string",
            "textual_coord": [
              0,
              0,
              0,
              0,
              0,
              0
            ],
            "visual_coord": [
              0,
              0,
              0,
              0,
              0,
              0
            ]
          }
        }
      ]
    },
    "name": "string",
    "sections": [
      {
        "confidence": 0,
        "document_type": "string",
        "format": "abcdef123456789abcdef123",
        "page": 0
      }
    ]
  }'
```

`POST /documents/{document_id}/feedback`

Send a feedback for the given document and optionally evaluate.

When a document is to be reviewed, this endpoint is used to send the user feedback.

**Permission required:** submit

> Body parameter

```json
{
  "annotations": {
    "string": [
      {
        "gold": "string",
        "text": "string",
        "textual_coord": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "visual_coord": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ]
  },
  "cmp_version": "string",
  "evaluate": true,
  "lines": {
    "string": [
      {
        "string": {
          "gold": "string",
          "text": "string",
          "textual_coord": [
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "visual_coord": [
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      }
    ]
  },
  "name": "string",
  "sections": [
    {
      "confidence": 0,
      "document_type": "string",
      "format": "abcdef123456789abcdef123",
      "page": 0
    }
  ]
}
```

<h3 id="submit-a-feedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|document_id|path|string|true|none|
|body|body|[VersionPost](#schemaversionpost)|true|none|
|» annotations|body|[annotations](#schemaannotations)|false|none|
|» cmp_version|body|string|false|none|
|» evaluate|body|boolean|false|none|
|» lines|body|[lines](#schemalines)|false|none|
|» name|body|string|false|none|
|» sections|body|[[SectionAtom](#schemasectionatom)]|false|none|

<h3 id="submit-a-feedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get latest version

<a id="opIdget_document_last_version_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/last_version \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /documents/{document_id}/last_version`

Get the latest possible version for this document, optionally with constraints on the source or name

**Permission required:** review

<h3 id="get-latest-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Return a specific named version, default is latest|
|source|query|string|false|human or machine (default either)|
|is_evaluated|query|boolean|false|Do you want to receive unevaluated version (for display, default) or evaluated (for stats)|
|document_id|path|string|true|none|

<h3 id="get-latest-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get document original file

<a id="opIdget_document_original_file_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/original_file \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /documents/{document_id}/original_file`

Return the document original file, as attachment.

**Permission required:** review

<h3 id="get-document-original-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|document_id|path|string|true|none|

<h3 id="get-document-original-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File attached|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## get_document_page_image_resource

<a id="opIdget_document_page_image_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/page/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /documents/{document_id}/page/{page_range}`

<h3 id="getdocumentpageimageresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_range|path|string|true|The number of the page, starting from 0. A range of pages, separated by ":" is also allowed to return a zip file.|
|document_id|path|string|true|none|

<h3 id="getdocumentpageimageresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## get_document_page_image_thumbnail_resource

<a id="opIdget_document_page_image_thumbnail_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/page_thumbnail/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /documents/{document_id}/page_thumbnail/{page_range}`

<h3 id="getdocumentpageimagethumbnailresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|document_id|path|string|true|none|
|page_range|path|string|true|none|

<h3 id="getdocumentpageimagethumbnailresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Process a table-level annotation

<a id="opIdpost_document_process_table_annotation"></a>

> Code samples

```bash
curl https://example.com/documents/string/process_table_annotation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "bottom_right": [
      0,
      0,
      0
    ],
    "columns": [
      {
        "field_name": "string",
        "x_bounds": [
          0,
          0
        ]
      }
    ],
    "first_row_y_bounds": [
      0,
      0
    ],
    "header_bottom_y": 0,
    "name": "string",
    "top_left": [
      0,
      0,
      0
    ]
  }'
```

`POST /documents/{document_id}/process_table_annotation`

A fast and convenient annotation tool that converts a table-level annotation to cell-level feedback.

**Permission required:** review

> Body parameter

```json
{
  "bottom_right": [
    0,
    0,
    0
  ],
  "columns": [
    {
      "field_name": "string",
      "x_bounds": [
        0,
        0
      ]
    }
  ],
  "first_row_y_bounds": [
    0,
    0
  ],
  "header_bottom_y": 0,
  "name": "string",
  "top_left": [
    0,
    0,
    0
  ]
}
```

<h3 id="process-a-table-level-annotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|document_id|path|string|true|none|
|body|body|[TableAnnotationPost](#schematableannotationpost)|true|none|
|» bottom_right|body|[integer]|false|none|
|» columns|body|[[column_bound](#schemacolumn_bound)]|false|none|
|» first_row_y_bounds|body|[integer]|false|none|
|» header_bottom_y|body|integer|false|none|
|» name|body|string|false|none|
|» top_left|body|[integer]|false|none|

<h3 id="process-a-table-level-annotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Schedule document reprocessing

<a id="opIdpost_reprocess_document_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/reprocess \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /documents/{document_id}/reprocess`

This endpoint schedules (async) reprocessing for the given document;
it will call the async processing with the given desired version name,
similar to the async document upload but skipping OCR.
It works asynchronously, so results need to be consulted by a separate call (or webhook)


**Permission required:** upload

<h3 id="schedule-document-reprocessing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|
|reviewer|query|string|false|If human repcrocessing is triggered, the last version will become the passed version. No processing is done.|
|X-Fields|header|string(mask)|false|An optional fields mask|
|document_id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reviewer|Human|
|reviewer|Machine|

> Example responses

> 200 Response

```json
{
  "escalate": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "feedback": {},
  "files": [
    {
      "embedded_attachment": true,
      "filehash": "string",
      "filename": "string",
      "leaf": true,
      "page": 0,
      "page_count": 0
    }
  ],
  "flag_for_review": true,
  "id": "string",
  "inbox": "abcdef123456789abcdef123",
  "last_version": "string",
  "lock": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "meta_information": {},
  "opened_by": [
    {
      "by": "abcdef123456789abcdef123",
      "since": "1970-01-01T00:00:00Z",
      "value": true
    }
  ],
  "original_filename": "string",
  "page_count": 0,
  "prediction": {},
  "reject": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "status_data": {
    "archived": true,
    "data": true,
    "escalate": true,
    "feedback": true,
    "lock": true,
    "ready_accepted": true,
    "ready_attempts": 0,
    "reject": true,
    "reject_accepted": true,
    "reject_attempts": 0,
    "sampling": true,
    "submit_accepted": true,
    "submit_attempts": 0,
    "success": true
  },
  "submitted": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "timings": {
    "done_time": "1970-01-01T00:00:00Z",
    "feedback_time": "1970-01-01T00:00:00Z",
    "processing_period": 0,
    "receive_time": "1970-01-01T00:00:00Z",
    "start_time": "1970-01-01T00:00:00Z",
    "submit_time": "1970-01-01T00:00:00Z"
  },
  "usage_data": {},
  "versions": [
    {}
  ]
}
```

<h3 id="schedule-document-reprocessing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentModelGet](#schemadocumentmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## get_document_reverse_resource

<a id="opIdget_document_reverse_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/reverse/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /documents/{document_id}/reverse/{page_range}`

<h3 id="getdocumentreverseresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_range|path|string|true|The number of the page, starting from 0. A range of pages, separated by ":" is also allowed to return a zip file.|
|document_id|path|string|true|none|

<h3 id="getdocumentreverseresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update document status

<a id="opIdpost_document_status_data_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/status_data \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "escalate": {
      "by": "abcdef123456789abcdef123",
      "since": "1970-01-01T00:00:00Z",
      "value": true
    },
    "last_version": "string",
    "lock": {
      "by": "abcdef123456789abcdef123",
      "since": "1970-01-01T00:00:00Z",
      "value": true
    },
    "opened_by": {
      "by": "abcdef123456789abcdef123",
      "since": "1970-01-01T00:00:00Z",
      "value": true
    },
    "reject": {
      "by": "abcdef123456789abcdef123",
      "since": "1970-01-01T00:00:00Z",
      "value": true
    },
    "status_data": {
      "archived": true,
      "data": true,
      "escalate": true,
      "feedback": true,
      "lock": true,
      "ready_accepted": true,
      "ready_attempts": 0,
      "reject": true,
      "reject_accepted": true,
      "reject_attempts": 0,
      "sampling": true,
      "submit_accepted": true,
      "submit_attempts": 0,
      "success": true
    },
    "submitted": {
      "by": "abcdef123456789abcdef123",
      "since": "1970-01-01T00:00:00Z",
      "value": true
    },
    "timings": {
      "done_time": "1970-01-01T00:00:00Z",
      "feedback_time": "1970-01-01T00:00:00Z",
      "processing_period": 0,
      "receive_time": "1970-01-01T00:00:00Z",
      "start_time": "1970-01-01T00:00:00Z",
      "submit_time": "1970-01-01T00:00:00Z"
    }
  }'
```

`POST /documents/{document_id}/status_data`

Update the given document status data with the request user and date.

Each document defines some status:
- lock
- escalate
- reject
- delete
- archive
- submitted

These fields have 3 attributes:
- status true / false
- since: datetime (UTC)
- by: user ID

By calling this endpoint you can update the given status data with the request user
(the one authenticated) and the current datetime.
**Note** : You cannot pass a user in the request nor a datetime

**Permission required:** review

> Body parameter

```json
{
  "escalate": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "last_version": "string",
  "lock": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "opened_by": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "reject": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "status_data": {
    "archived": true,
    "data": true,
    "escalate": true,
    "feedback": true,
    "lock": true,
    "ready_accepted": true,
    "ready_attempts": 0,
    "reject": true,
    "reject_accepted": true,
    "reject_attempts": 0,
    "sampling": true,
    "submit_accepted": true,
    "submit_attempts": 0,
    "success": true
  },
  "submitted": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "timings": {
    "done_time": "1970-01-01T00:00:00Z",
    "feedback_time": "1970-01-01T00:00:00Z",
    "processing_period": 0,
    "receive_time": "1970-01-01T00:00:00Z",
    "start_time": "1970-01-01T00:00:00Z",
    "submit_time": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="update-document-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|document_id|path|string|true|none|
|body|body|[StatusDataPost](#schemastatusdatapost)|true|none|
|» escalate|body|[StateModelGet](#schemastatemodelget)|false|none|
|» last_version|body|string|false|none|
|» lock|body|[StateModelGet](#schemastatemodelget)|false|none|
|» opened_by|body|[StateModelGet](#schemastatemodelget)|false|none|
|» reject|body|[StateModelGet](#schemastatemodelget)|false|none|
|» status_data|body|[StatusDataModel](#schemastatusdatamodel)|false|none|
|» submitted|body|[StateModelGet](#schemastatemodelget)|false|none|
|» timings|body|[TimingsModelGet](#schematimingsmodelget)|false|none|

> Example responses

> 200 Response

```json
{
  "escalate": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "feedback": {},
  "files": [
    {
      "embedded_attachment": true,
      "filehash": "string",
      "filename": "string",
      "leaf": true,
      "page": 0,
      "page_count": 0
    }
  ],
  "flag_for_review": true,
  "id": "string",
  "inbox": "abcdef123456789abcdef123",
  "last_version": "string",
  "lock": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "meta_information": {},
  "opened_by": [
    {
      "by": "abcdef123456789abcdef123",
      "since": "1970-01-01T00:00:00Z",
      "value": true
    }
  ],
  "original_filename": "string",
  "page_count": 0,
  "prediction": {},
  "reject": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "status_data": {
    "archived": true,
    "data": true,
    "escalate": true,
    "feedback": true,
    "lock": true,
    "ready_accepted": true,
    "ready_attempts": 0,
    "reject": true,
    "reject_accepted": true,
    "reject_attempts": 0,
    "sampling": true,
    "submit_accepted": true,
    "submit_attempts": 0,
    "success": true
  },
  "submitted": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "timings": {
    "done_time": "1970-01-01T00:00:00Z",
    "feedback_time": "1970-01-01T00:00:00Z",
    "processing_period": 0,
    "receive_time": "1970-01-01T00:00:00Z",
    "start_time": "1970-01-01T00:00:00Z",
    "submit_time": "1970-01-01T00:00:00Z"
  },
  "usage_data": {},
  "versions": [
    {}
  ]
}
```

<h3 id="update-document-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentModelGet](#schemadocumentmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get the document text

<a id="opIdget_document_text_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/text \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /documents/{document_id}/text`

Return the optimal text for the document; will either be the OCR text, the native text,
the raw text or a translated version.

To ease the data volume from the DB, we lazy load only the relevant text for the document.

**Permission required:** review

<h3 id="get-the-document-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|document_id|path|string|true|none|

<h3 id="get-the-document-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get the document Workflow

<a id="opIdget_document_workflow_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/workflow \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /documents/{document_id}/workflow`

**WARNING experimental use only**


**Permission required:** upload

<h3 id="get-the-document-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|document_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "graph": {},
  "links": {},
  "nodes": {}
}
```

<h3 id="get-the-document-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WorkflowModel](#schemaworkflowmodel)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Upload a new doc to the inbox

<a id="opIdpost_documents_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'experimental=true' \
  -F 'file=@/path/to/file' \
  -F 'key_value_flag=false' \
  -F 'sync=true'
```

`POST /documents/{inbox_id}`

This endpoint uploads a new file to the given inbox and will process the file.

## Upload mode: sync

When sync=true (default), the call will block and wait for the processing to complete.

If you have a custom output configured (this is set by contract.fit team),
passing mimetype *application/vnd.cf.custom* will allow you to get the custom output formatted result

Since it might yield inconsistent results if a timeout is raised while waiting,
it is recommended to use the **async** mode.

## Upload mode: async

When sync=false, the call will schedule the processing and return without waiting for completion.
It will return the document ID, so that the processed document can be retrieved at a later date.

**Permission required:** upload

> Body parameter

```yaml
experimental: true
file: string
key_value_flag: false
sync: true
```

<h3 id="upload-a-new-doc-to-the-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|none|
|body|body|object|true|none|
|» experimental|body|boolean|false|Use the experimental processing workflow|
|» file|body|string(binary)|true|File to process|
|» key_value_flag|body|boolean|false|If true the result will only contains mapping of prediction = value|
|» sync|body|boolean|false|Flag enable sync or async processing|

<h3 id="upload-a-new-doc-to-the-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|
|415|Unsupported Media Type|Image Recognition Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Copy documents to another inbox

<a id="opIdpatch_document_copy_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/copy_inbox \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "document_ids": [
      "abcdef123456789abcdef123"
    ]
  }'
```

`PATCH /documents/{inbox_id}/copy_inbox`

Copy documents in the provided list to another inbox.

If the destination inbox is the same as the original inbox, the request will be aborted, no duplicates
will be created


**Permission required:** review

> Body parameter

```json
{
  "document_ids": [
    "abcdef123456789abcdef123"
  ]
}
```

<h3 id="copy-documents-to-another-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The uuid of the inbox where the document(s) should be copied to|
|body|body|[DocumentIds](#schemadocumentids)|true|none|
|» document_ids|body|[string]|false|none|

<h3 id="copy-documents-to-another-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Move documents to another inbox

<a id="opIdpatch_document_move_resource"></a>

> Code samples

```bash
curl https://example.com/documents/string/move_inbox \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "document_ids": [
      "abcdef123456789abcdef123"
    ]
  }'
```

`PATCH /documents/{inbox_id}/move_inbox`

Move documents in the provided list to another inbox.

If the destination inbox is the same as the original inbox, the request will be aborted.


**Permission required:** review

> Body parameter

```json
{
  "document_ids": [
    "abcdef123456789abcdef123"
  ]
}
```

<h3 id="move-documents-to-another-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The uuid of the inbox where the document(s) have to be moved|
|body|body|[DocumentIds](#schemadocumentids)|true|none|
|» document_ids|body|[string]|false|none|

<h3 id="move-documents-to-another-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-inboxes">inboxes</h1>

Inbox manipulation endpoint

## Get list of inboxes

<a id="opIdget_inboxes_resource"></a>

> Code samples

```bash
curl https://example.com/inboxes \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /inboxes`

Simply return the list of inboxes

<h3 id="get-list-of-inboxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "project": "abcdef123456789abcdef123",
    "id": "string"
  }
]
```

<h3 id="get-list-of-inboxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-list-of-inboxes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[InboxModelGet](#schemainboxmodelget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Create an inbox

<a id="opIdpost_inboxes_resource"></a>

> Code samples

```bash
curl https://example.com/inboxes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "project": "abcdef123456789abcdef123"
  }'
```

`POST /inboxes`

Create a new inbox in the given **project**

**Permission required:** create_inbox

> Body parameter

```json
{
  "name": "string",
  "project": "abcdef123456789abcdef123"
}
```

<h3 id="create-an-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|body|body|[InboxModelPost](#schemainboxmodelpost)|true|none|
|» name|body|string|true|none|
|» project|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "name": "string",
  "project": "abcdef123456789abcdef123",
  "id": "string"
}
```

<h3 id="create-an-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[InboxModelGet](#schemainboxmodelget)|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Project Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get Inbox attributes

<a id="opIdget_inbox_resource"></a>

> Code samples

```bash
curl https://example.com/inboxes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /inboxes/{inbox_id}`

Get the given inbox attributes

**Permission required:** view_list

<h3 id="get-inbox-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|inbox_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "project": "abcdef123456789abcdef123",
  "id": "string"
}
```

<h3 id="get-inbox-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InboxModelGet](#schemainboxmodelget)|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete an inbox

<a id="opIddelete_inbox_resource"></a>

> Code samples

```bash
curl https://example.com/inboxes/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /inboxes/{inbox_id}`

Delete the given inbox.

**WARNING** This will completely remove the inbox, this is not recoverable

<h3 id="delete-an-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|none|

<h3 id="delete-an-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update inbox

<a id="opIdpatch_inbox_resource"></a>

> Code samples

```bash
curl https://example.com/inboxes/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "project": "abcdef123456789abcdef123"
  }'
```

`PATCH /inboxes/{inbox_id}`

Update the given inbox with the provided arguments

**Permission required:** view_list

> Body parameter

```json
{
  "name": "string",
  "project": "abcdef123456789abcdef123"
}
```

<h3 id="update-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|inbox_id|path|string|true|none|
|body|body|[InboxModelPatch](#schemainboxmodelpatch)|true|none|
|» name|body|string|false|none|
|» project|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "project": "abcdef123456789abcdef123",
  "id": "string"
}
```

<h3 id="update-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InboxModelGet](#schemainboxmodelget)|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## get_inbox_document_versions_resource

<a id="opIdget_inbox_document_versions_resource"></a>

> Code samples

```bash
curl https://example.com/inboxes/string/document_versions \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /inboxes/{inbox_id}/document_versions`

<h3 id="getinboxdocumentversionsresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|none|

<h3 id="getinboxdocumentversionsresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get documents in the inbox

<a id="opIdget_inbox_document_resource"></a>

> Code samples

```bash
curl https://example.com/inboxes/string/documents \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /inboxes/{inbox_id}/documents`

**Permission required:** view_list

<h3 id="get-documents-in-the-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|inbox_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "escalate": {
      "by": "abcdef123456789abcdef123",
      "since": "1970-01-01T00:00:00Z",
      "value": true
    },
    "feedback": {},
    "files": [
      {
        "embedded_attachment": true,
        "filehash": "string",
        "filename": "string",
        "leaf": true,
        "page": 0,
        "page_count": 0
      }
    ],
    "flag_for_review": true,
    "id": "string",
    "inbox": "abcdef123456789abcdef123",
    "last_version": "string",
    "lock": {
      "by": "abcdef123456789abcdef123",
      "since": "1970-01-01T00:00:00Z",
      "value": true
    },
    "meta_information": {},
    "opened_by": [
      {
        "by": "abcdef123456789abcdef123",
        "since": "1970-01-01T00:00:00Z",
        "value": true
      }
    ],
    "original_filename": "string",
    "page_count": 0,
    "prediction": {},
    "reject": {
      "by": "abcdef123456789abcdef123",
      "since": "1970-01-01T00:00:00Z",
      "value": true
    },
    "status_data": {
      "archived": true,
      "data": true,
      "escalate": true,
      "feedback": true,
      "lock": true,
      "ready_accepted": true,
      "ready_attempts": 0,
      "reject": true,
      "reject_accepted": true,
      "reject_attempts": 0,
      "sampling": true,
      "submit_accepted": true,
      "submit_attempts": 0,
      "success": true
    },
    "submitted": {
      "by": "abcdef123456789abcdef123",
      "since": "1970-01-01T00:00:00Z",
      "value": true
    },
    "timings": {
      "done_time": "1970-01-01T00:00:00Z",
      "feedback_time": "1970-01-01T00:00:00Z",
      "processing_period": 0,
      "receive_time": "1970-01-01T00:00:00Z",
      "start_time": "1970-01-01T00:00:00Z",
      "submit_time": "1970-01-01T00:00:00Z"
    },
    "usage_data": {},
    "versions": [
      {}
    ]
  }
]
```

<h3 id="get-documents-in-the-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<h3 id="get-documents-in-the-inbox-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DocumentModelGet](#schemadocumentmodelget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete documents

<a id="opIddelete_inbox_document_resource"></a>

> Code samples

```bash
curl https://example.com/inboxes/string/documents \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /inboxes/{inbox_id}/documents`

in the given inbox.

how parameter: if how == "FULL", we delete the entire document, including its source files
if how == "SOURCE_FILES", we only remove the (source) files and we set the archived flag. In practice this means
all information in the database (json) remains available, but you can no longer download / visualise the original document.

what parameter: if what == "DONE", we will only delete files which have status_data.feedback == True
if what == "ALL" we will delete all files

Start_date and end_date: when specified we will only delete files which are received after (respectively before) the timestamp

**WARNING** This will completely remove the documents, this is **not recoverable**

<h3 id="delete-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|how|query|string|false|none|
|what|query|string|false|none|
|start_date|query|string(date-time)|false|none|
|end_date|query|string(date-time)|false|none|
|inbox_id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|how|FULL|
|how|SOURCE_FILES|
|what|ALL|
|what|DONE|

<h3 id="delete-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get paginated list of documents in the inbox

<a id="opIdget_inbox_paginated_resource"></a>

> Code samples

```bash
curl https://example.com/inboxes/string/paginated \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /inboxes/{inbox_id}/paginated`

**Permission required:** view_list

<h3 id="get-paginated-list-of-documents-in-the-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number to fetch|
|per_page|query|integer|false|Results per page|
|start_receive_date|query|string(date-time)|false|none|
|end_receive_date|query|string(date-time)|false|none|
|order_by|query|string|false|comma seperated list of fields to order by|
|X-Fields|header|string(mask)|false|An optional fields mask|
|inbox_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "page": 0,
    "per_page": 0,
    "results": [
      {
        "escalate": {
          "by": "abcdef123456789abcdef123",
          "since": "1970-01-01T00:00:00Z",
          "value": true
        },
        "feedback": {},
        "files": [
          {
            "embedded_attachment": true,
            "filehash": "string",
            "filename": "string",
            "leaf": true,
            "page": 0,
            "page_count": 0
          }
        ],
        "flag_for_review": true,
        "id": "string",
        "inbox": "abcdef123456789abcdef123",
        "last_version": "string",
        "lock": {
          "by": "abcdef123456789abcdef123",
          "since": "1970-01-01T00:00:00Z",
          "value": true
        },
        "meta_information": {},
        "opened_by": [
          {
            "by": "abcdef123456789abcdef123",
            "since": "1970-01-01T00:00:00Z",
            "value": true
          }
        ],
        "original_filename": "string",
        "page_count": 0,
        "prediction": {},
        "reject": {
          "by": "abcdef123456789abcdef123",
          "since": "1970-01-01T00:00:00Z",
          "value": true
        },
        "status_data": {
          "archived": true,
          "data": true,
          "escalate": true,
          "feedback": true,
          "lock": true,
          "ready_accepted": true,
          "ready_attempts": 0,
          "reject": true,
          "reject_accepted": true,
          "reject_attempts": 0,
          "sampling": true,
          "submit_accepted": true,
          "submit_attempts": 0,
          "success": true
        },
        "submitted": {
          "by": "abcdef123456789abcdef123",
          "since": "1970-01-01T00:00:00Z",
          "value": true
        },
        "timings": {
          "done_time": "1970-01-01T00:00:00Z",
          "feedback_time": "1970-01-01T00:00:00Z",
          "processing_period": 0,
          "receive_time": "1970-01-01T00:00:00Z",
          "start_time": "1970-01-01T00:00:00Z",
          "submit_time": "1970-01-01T00:00:00Z"
        },
        "usage_data": {},
        "versions": [
          {}
        ]
      }
    ],
    "total": 0
  }
]
```

<h3 id="get-paginated-list-of-documents-in-the-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<h3 id="get-paginated-list-of-documents-in-the-inbox-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DocumentModelPaginated](#schemadocumentmodelpaginated)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Schedule inbox reprocessing

<a id="opIdpost_inbox_reprocess_resource"></a>

> Code samples

```bash
curl https://example.com/inboxes/string/reprocess \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'hints=string'
```

`POST /inboxes/{inbox_id}/reprocess`

This endpoint schedule reprocessing for documents in the given inbox; this will call the async processing,
just like async document upload


**Permission required:** upload

> Body parameter

```yaml
hints: string
```

<h3 id="schedule-inbox-reprocessing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|
|reviewer|query|string|false|If human repcrocessing is triggered, the last version will become the passed version. No processing is done.|
|inbox_id|path|string|true|none|
|body|body|object|false|none|
|» hints|body|string|false|Additional hints as a dictionary. Example: {"VAT_number":{"blacklist":"XXXX.XXX.XXX", "whitelist": ["YYYY.YYY.YYY", "ZZZZ.ZZZ.ZZZ"]}}|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reviewer|Human|
|reviewer|Machine|

<h3 id="schedule-inbox-reprocessing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-projects">projects</h1>

Project manipulation endpoint

## Get the list of projects

<a id="opIdget_projects_resource"></a>

> Code samples

```bash
curl https://example.com/projects \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /projects`

Return the list of projects in the organization


**Deprecated**: default_format

<h3 id="get-the-list-of-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Create a project

<a id="opIdpost_projects_resource"></a>

> Code samples

```bash
curl https://example.com/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "default_document_type": "string",
    "default_format": "string",
    "formats": [
      "string"
    ],
    "name": "string",
    "split_into_sections": true,
    "sub_page_splitting": false,
    "timeout": 10
  }'
```

`POST /projects`

Simply create a new project

**Deprecated**: default_format

**Permission required:** create_inbox

> Body parameter

```json
{
  "default_document_type": "string",
  "default_format": "string",
  "formats": [
    "string"
  ],
  "name": "string",
  "split_into_sections": true,
  "sub_page_splitting": false,
  "timeout": 10
}
```

<h3 id="create-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProjectModelPost](#schemaprojectmodelpost)|true|none|
|» default_document_type|body|string|false|This format is chosen as fallback|
|» default_format|body|string|false|This format is chosen as fallback|
|» formats|body|[string]|true|none|
|» name|body|string|true|none|
|» split_into_sections|body|boolean|true|none|
|» sub_page_splitting|body|boolean|true|none|
|» timeout|body|integer|false|none|

<h3 id="create-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Format Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get project attributes

<a id="opIdget_project_resource"></a>

> Code samples

```bash
curl https://example.com/projects/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /projects/{project_id}`

Get the attributes of the given project


**Deprecated**: default_format

<h3 id="get-project-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|none|

<h3 id="get-project-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete project

<a id="opIddelete_project_resource"></a>

> Code samples

```bash
curl https://example.com/projects/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /projects/{project_id}`

Delete the given project.

**WARNING** This will completely remove the project, this is not recoverable

**Permission required:** edit_format_settings

<h3 id="delete-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|none|

<h3 id="delete-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update project

<a id="opIdpatch_project_resource"></a>

> Code samples

```bash
curl https://example.com/projects/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "default_document_type": "string",
    "default_format": "string",
    "formats": [
      "string"
    ],
    "name": "string",
    "split_into_sections": true,
    "sub_page_splitting": true,
    "timeout": 10
  }'
```

`PATCH /projects/{project_id}`

Update the project attributes with the provided arguments


**Deprecated**: default_format

**Permission required:** edit_format_settings

> Body parameter

```json
{
  "default_document_type": "string",
  "default_format": "string",
  "formats": [
    "string"
  ],
  "name": "string",
  "split_into_sections": true,
  "sub_page_splitting": true,
  "timeout": 10
}
```

<h3 id="update-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|none|
|body|body|[ProjectModelPatch](#schemaprojectmodelpatch)|true|none|
|» default_document_type|body|string|false|This format is chosen as fallback|
|» default_format|body|string|false|This format is chosen as fallback|
|» formats|body|[string]|false|none|
|» name|body|string|false|none|
|» split_into_sections|body|boolean|false|none|
|» sub_page_splitting|body|boolean|false|none|
|» timeout|body|integer|false|none|

<h3 id="update-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-formats">formats</h1>

Format manipulation endpoint

## Get lists of format

<a id="opIdget_formats_resource"></a>

> Code samples

```bash
curl https://example.com/formats \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /formats`

Return the formats

**Deprecated**: display_name
**Deprecated**: default_format

<h3 id="get-lists-of-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Create format

<a id="opIdpost_formats_resource"></a>

> Code samples

```bash
curl https://example.com/formats \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "display_name": "string",
    "document_types": [
      {
        "display_name": "string",
        "field_name": "string"
      }
    ],
    "labels": [
      {
        "category": "annotation",
        "count_in_evaluation": true,
        "description": "string",
        "display_name": "string",
        "field_name": "string",
        "formula": "string",
        "initialized": true,
        "is_library": false,
        "mandatory": true,
        "mandatory_if": {},
        "multiple": true,
        "options": [
          {
            "active": true,
            "display_name": "string",
            "name": "string"
          }
        ],
        "scope": "section",
        "type": "string",
        "visible": true,
        "visible_if": {}
      }
    ],
    "name": "string",
    "separators": [],
    "table_types": [
      {
        "collapsed": true,
        "columns": [
          {
            "category": "annotation",
            "count_in_evaluation": true,
            "description": "string",
            "display_name": "string",
            "field_name": "string",
            "formula": "string",
            "initialized": true,
            "is_library": false,
            "mandatory": true,
            "mandatory_if": {},
            "multiple": true,
            "options": [
              {
                "active": true,
                "display_name": "string",
                "name": "string"
              }
            ],
            "scope": "section",
            "type": "string",
            "visible": true,
            "visible_if": {}
          }
        ],
        "contains_line_items": true,
        "initialized": true,
        "label": "string",
        "scope": "section"
      }
    ]
  }'
```

`POST /formats`

Create an new format

**Deprecated**: display_name
**Deprecated**: default_format

**Permission required:** edit_format_settings

> Body parameter

```json
{
  "display_name": "string",
  "document_types": [
    {
      "display_name": "string",
      "field_name": "string"
    }
  ],
  "labels": [
    {
      "category": "annotation",
      "count_in_evaluation": true,
      "description": "string",
      "display_name": "string",
      "field_name": "string",
      "formula": "string",
      "initialized": true,
      "is_library": false,
      "mandatory": true,
      "mandatory_if": {},
      "multiple": true,
      "options": [
        {
          "active": true,
          "display_name": "string",
          "name": "string"
        }
      ],
      "scope": "section",
      "type": "string",
      "visible": true,
      "visible_if": {}
    }
  ],
  "name": "string",
  "separators": [],
  "table_types": [
    {
      "collapsed": true,
      "columns": [
        {
          "category": "annotation",
          "count_in_evaluation": true,
          "description": "string",
          "display_name": "string",
          "field_name": "string",
          "formula": "string",
          "initialized": true,
          "is_library": false,
          "mandatory": true,
          "mandatory_if": {},
          "multiple": true,
          "options": [
            {
              "active": true,
              "display_name": "string",
              "name": "string"
            }
          ],
          "scope": "section",
          "type": "string",
          "visible": true,
          "visible_if": {}
        }
      ],
      "contains_line_items": true,
      "initialized": true,
      "label": "string",
      "scope": "section"
    }
  ]
}
```

<h3 id="create-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FormatModelPost](#schemaformatmodelpost)|true|none|
|» display_name|body|string|false|none|
|» document_types|body|[[DocumentTypeModel](#schemadocumenttypemodel)]|false|none|
|» labels|body|[[LabelModel](#schemalabelmodel)]|true|none|
|» name|body|string|true|none|
|» separators|body|[[SectionModel](#schemasectionmodel)]|false|none|
|» table_types|body|[[TableModel](#schematablemodel)]|false|none|

<h3 id="create-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get supported document_types

<a id="opIdget_formats_doc_types_resource"></a>

> Code samples

```bash
curl https://example.com/formats/document_types \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /formats/document_types`

**Permission required:** edit_format_settings

<h3 id="get-supported-documenttypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
{
  "document_types": [
    {
      "display_name": "string",
      "field_name": "string"
    }
  ]
}
```

<h3 id="get-supported-documenttypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentTypeModelGet](#schemadocumenttypemodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get format attributes

<a id="opIdget_format_resource"></a>

> Code samples

```bash
curl https://example.com/formats/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /formats/{format_id}`

Return the given format attributes

**Deprecated**: display_name
**Deprecated**: default_format

**Permission required:** edit_format_settings / review

<h3 id="get-format-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format_id|path|string|true|none|

<h3 id="get-format-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete the format

<a id="opIddelete_format_resource"></a>

> Code samples

```bash
curl https://example.com/formats/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /formats/{format_id}`

**WARNING** This will completely remove the documents, this is **not recoverable**

**Permission required:** edit_format_settings

<h3 id="delete-the-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format_id|path|string|true|none|

<h3 id="delete-the-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update the format

<a id="opIdpatch_format_resource"></a>

> Code samples

```bash
curl https://example.com/formats/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "display_name": "string",
    "document_types": [
      {
        "display_name": "string",
        "field_name": "string"
      }
    ],
    "labels": [
      {
        "category": "annotation",
        "count_in_evaluation": true,
        "description": "string",
        "display_name": "string",
        "field_name": "string",
        "formula": "string",
        "initialized": true,
        "is_library": false,
        "mandatory": true,
        "mandatory_if": {},
        "multiple": true,
        "options": [
          {
            "active": true,
            "display_name": "string",
            "name": "string"
          }
        ],
        "scope": "section",
        "type": "string",
        "visible": true,
        "visible_if": {}
      }
    ],
    "name": "string",
    "separators": [],
    "table_types": [
      {
        "collapsed": true,
        "columns": [
          {
            "category": "annotation",
            "count_in_evaluation": true,
            "description": "string",
            "display_name": "string",
            "field_name": "string",
            "formula": "string",
            "initialized": true,
            "is_library": false,
            "mandatory": true,
            "mandatory_if": {},
            "multiple": true,
            "options": [
              {
                "active": true,
                "display_name": "string",
                "name": "string"
              }
            ],
            "scope": "section",
            "type": "string",
            "visible": true,
            "visible_if": {}
          }
        ],
        "contains_line_items": true,
        "initialized": true,
        "label": "string",
        "scope": "section"
      }
    ]
  }'
```

`PATCH /formats/{format_id}`

settings with the given attributes

**Deprecated**: display_name
**Deprecated**: default_format

**Permission required:** edit_format_settings

> Body parameter

```json
{
  "display_name": "string",
  "document_types": [
    {
      "display_name": "string",
      "field_name": "string"
    }
  ],
  "labels": [
    {
      "category": "annotation",
      "count_in_evaluation": true,
      "description": "string",
      "display_name": "string",
      "field_name": "string",
      "formula": "string",
      "initialized": true,
      "is_library": false,
      "mandatory": true,
      "mandatory_if": {},
      "multiple": true,
      "options": [
        {
          "active": true,
          "display_name": "string",
          "name": "string"
        }
      ],
      "scope": "section",
      "type": "string",
      "visible": true,
      "visible_if": {}
    }
  ],
  "name": "string",
  "separators": [],
  "table_types": [
    {
      "collapsed": true,
      "columns": [
        {
          "category": "annotation",
          "count_in_evaluation": true,
          "description": "string",
          "display_name": "string",
          "field_name": "string",
          "formula": "string",
          "initialized": true,
          "is_library": false,
          "mandatory": true,
          "mandatory_if": {},
          "multiple": true,
          "options": [
            {
              "active": true,
              "display_name": "string",
              "name": "string"
            }
          ],
          "scope": "section",
          "type": "string",
          "visible": true,
          "visible_if": {}
        }
      ],
      "contains_line_items": true,
      "initialized": true,
      "label": "string",
      "scope": "section"
    }
  ]
}
```

<h3 id="update-the-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|format_id|path|string|true|none|
|body|body|[FormatModelPatch](#schemaformatmodelpatch)|true|none|
|» display_name|body|string|false|none|
|» document_types|body|[[DocumentTypeModel](#schemadocumenttypemodel)]|false|none|
|» labels|body|[[LabelModel](#schemalabelmodel)]|false|none|
|» name|body|string|false|none|
|» separators|body|[[SectionModel](#schemasectionmodel)]|false|none|
|» table_types|body|[[TableModel](#schematablemodel)]|false|none|

> Example responses

> 200 Response

```json
{
  "document_types": [
    {
      "display_name": "string",
      "field_name": "string"
    }
  ],
  "id": "string",
  "labels": [
    {
      "category": "annotation",
      "count_in_evaluation": true,
      "description": "string",
      "display_name": "string",
      "field_name": "string",
      "formula": "string",
      "initialized": true,
      "is_library": false,
      "mandatory": true,
      "mandatory_if": {},
      "multiple": true,
      "options": [
        {
          "active": true,
          "display_name": "string",
          "name": "string"
        }
      ],
      "scope": "section",
      "type": "string",
      "visible": true,
      "visible_if": {}
    }
  ],
  "name": "string",
  "separators": [],
  "table_types": [
    {
      "collapsed": true,
      "columns": [
        {
          "category": "annotation",
          "count_in_evaluation": true,
          "description": "string",
          "display_name": "string",
          "field_name": "string",
          "formula": "string",
          "initialized": true,
          "is_library": false,
          "mandatory": true,
          "mandatory_if": {},
          "multiple": true,
          "options": [
            {
              "active": true,
              "display_name": "string",
              "name": "string"
            }
          ],
          "scope": "section",
          "type": "string",
          "visible": true,
          "visible_if": {}
        }
      ],
      "contains_line_items": true,
      "initialized": true,
      "label": "string",
      "scope": "section"
    }
  ]
}
```

<h3 id="update-the-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FormatModelGet](#schemaformatmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get tags values

<a id="opIdget_format_tag_fields_resource"></a>

> Code samples

```bash
curl https://example.com/formats/string/tag_fields \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /formats/{scope}/tag_fields`

Get the tag fields values bound to the given scope.

Scope can be an inbox or a project


**Permission required:** edit_format_settings / review

<h3 id="get-tags-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|scope|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "tag_fields": {}
}
```

<h3 id="get-tags-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagFieldModelGet](#schematagfieldmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-integrations">integrations</h1>

Integrations manipulation endpoint

## Get all integrations

<a id="opIdget_integration_resources"></a>

> Code samples

```bash
curl https://example.com/integrations/ \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /integrations/`

Return the list of set up integrations

**Permission required:** read_integrations

<h3 id="get-all-integrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Create integration

<a id="opIdpost_integration_resources"></a>

> Code samples

```bash
curl https://example.com/integrations/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "type": "webhook"
  }'
```

`POST /integrations/`

Create a new integration. Each type of integration has its own initialization logic and thus may
yield suitable error codes depending on the underlying issue, such as credentials or connectivity issue.

**Permission required:** edit_integrations

> Body parameter

```json
{
  "type": "webhook"
}
```

<h3 id="create-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IntegrationModelGet](#schemaintegrationmodelget)|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|webhook|
|» type|dropbox|
|» type|office365|
|» type|email|
|» type|imap|
|» type|sftp|
|» type|smtp|
|» type|service_bus|

<h3 id="create-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get integration attributes

<a id="opIdget_integration_resource"></a>

> Code samples

```bash
curl https://example.com/integrations/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /integrations/{integration_id}`

Return the given integration attributes

**Permission required:** read_integrations

<h3 id="get-integration-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|integration_id|path|string|true|none|

<h3 id="get-integration-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete an integration

<a id="opIddelete_integration_resource"></a>

> Code samples

```bash
curl https://example.com/integrations/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /integrations/{integration_id}`

Delete the given integration.

**WARNING** This will completely remove the integration, this is not recoverable

**Permission required:** edit_integrations

<h3 id="delete-an-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|integration_id|path|string|true|none|

<h3 id="delete-an-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update integration

<a id="opIdpatch_integration_resource"></a>

> Code samples

```bash
curl https://example.com/integrations/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "type": "webhook"
  }'
```

`PATCH /integrations/{integration_id}`

Update the given integration attributes

**Permission required:** edit_integrations

> Body parameter

```json
{
  "type": "webhook"
}
```

<h3 id="update-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|integration_id|path|string|true|none|
|body|body|[IntegrationModelGet](#schemaintegrationmodelget)|true|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|webhook|
|» type|dropbox|
|» type|office365|
|» type|email|
|» type|imap|
|» type|sftp|
|» type|smtp|
|» type|service_bus|

<h3 id="update-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## get_email_integration_activation_resource

<a id="opIdget_email_integration_activation_resource"></a>

> Code samples

```bash
curl 'https://example.com/integrations/string/activate?secret=string' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /integrations/{integration_id}/activate`

<h3 id="getemailintegrationactivationresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|secret|query|string|true|none|
|integration_id|path|string|true|none|

<h3 id="getemailintegrationactivationresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-connections">connections</h1>

Connection manipulation endpoint

## Get all Connections

<a id="opIdget_connections_resource"></a>

> Code samples

```bash
curl https://example.com/connections \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /connections`

Return the list of set up connections

**Permission required:** edit_integrations

<h3 id="get-all-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
[
  {
    "event": "document_predict",
    "integration": "abcdef123456789abcdef123",
    "routing": [
      {
        "and_conditions": {},
        "target": "string"
      }
    ],
    "scope": "abcdef123456789abcdef123",
    "what": "original",
    "id": "string"
  }
]
```

<h3 id="get-all-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Permission insufficient|None|

<h3 id="get-all-connections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ConnectionModelGet](#schemaconnectionmodelget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Create connection

<a id="opIdpost_connections_resource"></a>

> Code samples

```bash
curl https://example.com/connections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "event": "document_predict",
    "integration": "abcdef123456789abcdef123",
    "routing": [
      {
        "and_conditions": {},
        "target": "string"
      }
    ],
    "scope": "abcdef123456789abcdef123",
    "what": "original"
  }'
```

`POST /connections`

Create a new connection bound to the given scope (can be a project or inbox)

**Permission required:** edit_integrations

> Body parameter

```json
{
  "event": "document_predict",
  "integration": "abcdef123456789abcdef123",
  "routing": [
    {
      "and_conditions": {},
      "target": "string"
    }
  ],
  "scope": "abcdef123456789abcdef123",
  "what": "original"
}
```

<h3 id="create-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|body|body|[ConnectionModelPost](#schemaconnectionmodelpost)|true|none|
|» event|body|string|true|none|
|» integration|body|string|true|none|
|» routing|body|[[RoutingAtom](#schemaroutingatom)]|false|none|
|» scope|body|string|false|none|
|» what|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» event|document_predict|
|» event|document_evaluate|
|» event|document_text|
|» event|document_split|
|» event|document_delete|
|» what|original|
|» what|reply_to|
|» what|ready|
|» what|submit|

> Example responses

> 201 Response

```json
{
  "event": "document_predict",
  "integration": "abcdef123456789abcdef123",
  "routing": [
    {
      "and_conditions": {},
      "target": "string"
    }
  ],
  "scope": "abcdef123456789abcdef123",
  "what": "original",
  "id": "string"
}
```

<h3 id="create-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[ConnectionModelGet](#schemaconnectionmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get connection

<a id="opIdget_connection_resource"></a>

> Code samples

```bash
curl https://example.com/connections/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /connections/{connection_id}`

Return the connection attributes

**Permission required:** edit_integrations

<h3 id="get-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|connection_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "event": "document_predict",
  "integration": "abcdef123456789abcdef123",
  "routing": [
    {
      "and_conditions": {},
      "target": "string"
    }
  ],
  "scope": "abcdef123456789abcdef123",
  "what": "original",
  "id": "string"
}
```

<h3 id="get-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConnectionModelGet](#schemaconnectionmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete a connection

<a id="opIddelete_connection_resource"></a>

> Code samples

```bash
curl https://example.com/connections/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /connections/{connection_id}`

Delete the given connection.

**WARNING** This will completely remove the connection, this is not recoverable

**Permission required:** edit_integrations

<h3 id="delete-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connection_id|path|string|true|none|

<h3 id="delete-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update connection

<a id="opIdpatch_connection_resource"></a>

> Code samples

```bash
curl https://example.com/connections/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "event": "document_predict",
    "integration": "abcdef123456789abcdef123",
    "routing": [
      {
        "and_conditions": {},
        "target": "string"
      }
    ],
    "scope": "abcdef123456789abcdef123",
    "what": "original"
  }'
```

`PATCH /connections/{connection_id}`

attributes

**Permission required:** edit_integrations

> Body parameter

```json
{
  "event": "document_predict",
  "integration": "abcdef123456789abcdef123",
  "routing": [
    {
      "and_conditions": {},
      "target": "string"
    }
  ],
  "scope": "abcdef123456789abcdef123",
  "what": "original"
}
```

<h3 id="update-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|connection_id|path|string|true|none|
|body|body|[ConnectionModelPost](#schemaconnectionmodelpost)|true|none|
|» event|body|string|true|none|
|» integration|body|string|true|none|
|» routing|body|[[RoutingAtom](#schemaroutingatom)]|false|none|
|» scope|body|string|false|none|
|» what|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» event|document_predict|
|» event|document_evaluate|
|» event|document_text|
|» event|document_split|
|» event|document_delete|
|» what|original|
|» what|reply_to|
|» what|ready|
|» what|submit|

> Example responses

> 200 Response

```json
{
  "event": "document_predict",
  "integration": "abcdef123456789abcdef123",
  "routing": [
    {
      "and_conditions": {},
      "target": "string"
    }
  ],
  "scope": "abcdef123456789abcdef123",
  "what": "original",
  "id": "string"
}
```

<h3 id="update-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConnectionModelGet](#schemaconnectionmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-auth">auth</h1>

User manipulation endpoint

## Login and retrieve a JWT Token

<a id="opIdpost_auth"></a>

> Code samples

```bash
curl https://example.com/auth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "password": "string",
    "username": "string"
  }'
```

`POST /auth`

Login with the provided credentials (POST data) and return a JWT Token for this user.

> Body parameter

```json
{
  "password": "string",
  "username": "string"
}
```

<h3 id="login-and-retrieve-a-jwt-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|body|body|[AuthModel](#schemaauthmodel)|true|none|
|» password|body|string|true|the user password|
|» username|body|string|true|the user username|

> Example responses

> 200 Response

```json
{
  "authentication_token": "string"
}
```

<h3 id="login-and-retrieve-a-jwt-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TokenReplyModel](#schematokenreplymodel)|
|401|Unauthorized|Wrong credentials|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get all API-Key

<a id="opIdget_api_keys_resource"></a>

> Code samples

```bash
curl https://example.com/auth/api-key \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /auth/api-key`

**Permission required:** view_api_keys

<h3 id="get-all-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "expire_at": "1970-01-01T00:00:00Z",
    "roles": [
      {
        "document_id": "string",
        "inbox": "abcdef123456789abcdef123",
        "role": "abcdef123456789abcdef123"
      }
    ],
    "token": "string",
    "user": "string"
  }
]
```

<h3 id="get-all-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|API-Key not found|None|

<h3 id="get-all-api-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[APIKeyModel](#schemaapikeymodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Create a new API Key

<a id="opIdpost_api_keys_resource"></a>

> Code samples

```bash
curl https://example.com/auth/api-key \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "active": true,
    "expire_at": "1970-01-01T00:00:00Z",
    "roles": [
      {
        "document_id": "string",
        "inbox": "abcdef123456789abcdef123",
        "role": "abcdef123456789abcdef123"
      }
    ],
    "user": "string"
  }'
```

`POST /auth/api-key`

API Keys are simple randomly generated strings bound to roles that grant access to resources.

Every API Key maps to attributes defining its validity and can be revoked at any time.

API Key can be passed in the **X-API-Key** HTTP Header and in the querystring **&api_key=**


**Permission required:** edit_backend_settings

> Body parameter

```json
{
  "active": true,
  "expire_at": "1970-01-01T00:00:00Z",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "user": "string"
}
```

<h3 id="create-a-new-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|body|body|[APIKeyRequest](#schemaapikeyrequest)|true|none|
|» active|body|boolean|false|Is the API Key active or not|
|» expire_at|body|string(date-time)|false|Expiration date|
|» roles|body|[[TokenRoleModel](#schematokenrolemodel)]|true|Roles to grant to this token bearer|
|» user|body|string|true|User to give to the bearer|

> Example responses

> 201 Response

```json
{
  "active": true,
  "expire_at": "1970-01-01T00:00:00Z",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "token": "string",
  "user": "string"
}
```

<h3 id="create-a-new-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[APIKeyModel](#schemaapikeymodel)|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Role not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get all API-Keys for this inbox

<a id="opIdget_api_keys_inbox_resource"></a>

> Code samples

```bash
curl https://example.com/auth/api-key/inbox/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /auth/api-key/inbox/{inbox_id}`

**Permission required:** view_api_keys

<h3 id="get-all-api-keys-for-this-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|inbox_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "expire_at": "1970-01-01T00:00:00Z",
    "roles": [
      {
        "document_id": "string",
        "inbox": "abcdef123456789abcdef123",
        "role": "abcdef123456789abcdef123"
      }
    ],
    "token": "string",
    "user": "string"
  }
]
```

<h3 id="get-all-api-keys-for-this-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|API-Key not found|None|

<h3 id="get-all-api-keys-for-this-inbox-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[APIKeyModel](#schemaapikeymodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Create a new API Key on inbox level

<a id="opIdpost_api_keys_inbox_resource"></a>

> Code samples

```bash
curl https://example.com/auth/api-key/inbox/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "active": true,
    "expire_at": "1970-01-01T00:00:00Z",
    "roles": [
      {
        "document_id": "string",
        "inbox": "abcdef123456789abcdef123",
        "role": "abcdef123456789abcdef123"
      }
    ],
    "user": "string"
  }'
```

`POST /auth/api-key/inbox/{inbox_id}`

The requesting user needs to have inbox level permissions

API Keys are simple randomly generated strings bound to roles that grant access to resources.

Every API Key maps to attributes defining its validity and can be revoked at any time.

API Key can be passed in the **X-API-Key** HTTP Header and in the querystring **&api_key=**


**Permission required:** edit_backend_settings

> Body parameter

```json
{
  "active": true,
  "expire_at": "1970-01-01T00:00:00Z",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "user": "string"
}
```

<h3 id="create-a-new-api-key-on-inbox-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|inbox_id|path|string|true|none|
|body|body|[APIKeyRequest](#schemaapikeyrequest)|true|none|
|» active|body|boolean|false|Is the API Key active or not|
|» expire_at|body|string(date-time)|false|Expiration date|
|» roles|body|[[TokenRoleModel](#schematokenrolemodel)]|true|Roles to grant to this token bearer|
|» user|body|string|true|User to give to the bearer|

> Example responses

> 201 Response

```json
{
  "active": true,
  "expire_at": "1970-01-01T00:00:00Z",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "token": "string",
  "user": "string"
}
```

<h3 id="create-a-new-api-key-on-inbox-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[APIKeyModel](#schemaapikeymodel)|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Role not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get details of an API-Key

<a id="opIdget_api_key_resource"></a>

> Code samples

```bash
curl https://example.com/auth/api-key/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /auth/api-key/{key}`

**Permission required:** view_api_keys

<h3 id="get-details-of-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|key|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "active": true,
  "expire_at": "1970-01-01T00:00:00Z",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "token": "string",
  "user": "string"
}
```

<h3 id="get-details-of-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[APIKeyModel](#schemaapikeymodel)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete an API Key

<a id="opIddelete_api_key_resource"></a>

> Code samples

```bash
curl https://example.com/auth/api-key/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /auth/api-key/{key}`

Completely remove an API Key, thus disabling it. The token won't be recoverable

**Permission required:** edit_backend_settings

<h3 id="delete-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|

<h3 id="delete-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Edit an API-Key

<a id="opIdpatch_api_key_resource"></a>

> Code samples

```bash
curl https://example.com/auth/api-key/string \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PATCH /auth/api-key/{key}`

**roles** can't be modified after creation: you need to create a new token if you want other roles.

**Permission required:** edit_backend_settings

<h3 id="edit-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|key|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "active": true,
  "expire_at": "1970-01-01T00:00:00Z",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "token": "string",
  "user": "string"
}
```

<h3 id="edit-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[APIKeyModel](#schemaapikeymodel)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Create a new ephemeral token

<a id="opIdpost_ephemeral_token_resource"></a>

> Code samples

```bash
curl https://example.com/auth/ephemeral \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /auth/ephemeral`

Ephemeral tokens are short lived tokens that can be used to temporary grant access to resources.

<h3 id="create-a-new-ephemeral-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 201 Response

```json
{
  "authentication_token": "string"
}
```

<h3 id="create-a-new-ephemeral-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[TokenReplyModel](#schematokenreplymodel)|
|404|Not Found|User not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Create a new JWT Token

<a id="opIdpost_get_jwt_resource"></a>

> Code samples

```bash
curl https://example.com/auth/get_JWT \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "roles": [
      {
        "document_id": "string",
        "inbox": "abcdef123456789abcdef123",
        "role": "abcdef123456789abcdef123"
      }
    ],
    "username": "string"
  }'
```

`POST /auth/get_JWT`

<aside class="warning">
This operation is deprecated
</aside>

## This endpoint is *deprecated* : use /auth/ephemeral and /auth/token instead

This endpoint requires authentication and requires the user to have the role **edit_users**: you can
then request a JWT on behalf of another user, specified in the request **username** attribute.

This endpoint has 2 modes depending on the presence or absence of the *roles* attribute in the request
data:

## Regular token

When sending only a **username**: a regular JWT Token bound to the given user is created and returned.

## Temporary token

When sending **username** AND a list **roles** of **role** (defined by the UID, optional the inbox to restrict access to):
a temporary token is created that will behave like a regular user with the given roles until the access token expires.

**Permission required:** edit_users

> Body parameter

```json
{
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "username": "string"
}
```

<h3 id="create-a-new-jwt-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|body|body|[TokenModelBase](#schematokenmodelbase)|true|none|
|» roles|body|[[TokenRoleModel](#schematokenrolemodel)]|false|the user roles|
|» username|body|string|true|the user username|

> Example responses

> 201 Response

```json
{
  "authentication_token": "string"
}
```

<h3 id="create-a-new-jwt-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[TokenReplyModel](#schematokenreplymodel)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Reset the user password

<a id="opIdpost_reset_password"></a>

> Code samples

```bash
curl https://example.com/auth/reset_password \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "new_password": "string",
    "token": "string",
    "user_name": "string"
  }'
```

`POST /auth/reset_password`

> Body parameter

```json
{
  "new_password": "string",
  "token": "string",
  "user_name": "string"
}
```

<h3 id="reset-the-user-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ResetPasswordModelPost](#schemaresetpasswordmodelpost)|true|none|
|» new_password|body|string|false|the new user's password|
|» token|body|string|false|the token to reset the password|
|» user_name|body|string|false|the username|

<h3 id="reset-the-user-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|403|Forbidden|Reset Denied|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Create a new token

<a id="opIdpost_token_resource"></a>

> Code samples

```bash
curl https://example.com/auth/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "roles": [
      {
        "document_id": "string",
        "inbox": "abcdef123456789abcdef123",
        "role": "abcdef123456789abcdef123"
      }
    ],
    "username": "string"
  }'
```

`POST /auth/token`

Bearer tokens can be used to authenticated without session or without sending credentials.

If the user making the request has sufficient privileges, he is allowed to create a token on behalf of another user.
Otherwise only a token for the request current user is allowed.


**Permission required:** edit_users

> Body parameter

```json
{
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "username": "string"
}
```

<h3 id="create-a-new-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|body|body|[TokenModelBase](#schematokenmodelbase)|true|none|
|» roles|body|[[TokenRoleModel](#schematokenrolemodel)]|false|the user roles|
|» username|body|string|true|the user username|

> Example responses

> 201 Response

```json
{
  "authentication_token": "string"
}
```

<h3 id="create-a-new-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[TokenReplyModel](#schematokenreplymodel)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-sso">sso</h1>

various endpoints to manage third party credentials

## get_sso_config_resources

<a id="opIdget_sso_config_resources"></a>

> Code samples

```bash
curl https://example.com/sso/config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sso/config`

<h3 id="getssoconfigresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
{
  "extra": {
    "entity_id": "spn:d6b4feb1-a0bb-408a-b813-6e4eba3e5fef",
    "specification_url": "https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/federationmetadata/2007-06/federationmetadata.xml"
  },
  "id": "string",
  "provider": "string",
  "type": "saml",
  "url": "https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/saml2"
}
```

<h3 id="getssoconfigresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SsoConfigModelGet](#schemassoconfigmodelget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## post_sso_config_resources

<a id="opIdpost_sso_config_resources"></a>

> Code samples

```bash
curl https://example.com/sso/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "extra": {
      "entity_id": "spn:d6b4feb1-a0bb-408a-b813-6e4eba3e5fef",
      "specification_url": "https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/federationmetadata/2007-06/federationmetadata.xml"
    },
    "provider": "string",
    "type": "saml",
    "url": "https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/saml2"
  }'
```

`POST /sso/config`

> Body parameter

```json
{
  "extra": {
    "entity_id": "spn:d6b4feb1-a0bb-408a-b813-6e4eba3e5fef",
    "specification_url": "https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/federationmetadata/2007-06/federationmetadata.xml"
  },
  "provider": "string",
  "type": "saml",
  "url": "https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/saml2"
}
```

<h3 id="postssoconfigresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|body|body|[SsoConfigModel](#schemassoconfigmodel)|true|none|
|» extra|body|[ExtraModel](#schemaextramodel)|false|none|
|» provider|body|string|true|usually your company name, only used for visualisation: log in as <provider> employee|
|» type|body|string|false|Type of SSO integration, for now only SAML is supported|
|» url|body|string|false|SAML-P sign-on endpoint|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|saml|

<h3 id="postssoconfigresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get integration attributes

<a id="opIddelete_sso_config_resources"></a>

> Code samples

```bash
curl https://example.com/sso/config/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /sso/config/{sso_config_id}`

Return the given integration attributes

**Permission required:** edit_integrations

<h3 id="get-integration-attributes-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sso_config_id|path|string|true|none|

<h3 id="get-integration-attributes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## post_oauth_login_resource

<a id="opIdpost_oauth_login_resource"></a>

> Code samples

```bash
curl https://example.com/sso/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "token": "string",
    "type": "oauth"
  }'
```

`POST /sso/login`

> Body parameter

```json
{
  "token": "string",
  "type": "oauth"
}
```

<h3 id="postoauthloginresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SsoModel](#schemassomodel)|true|none|
|» token|body|string|false|the access token (JWT for oauth or SAML response)|
|» type|body|string|false|the type of SSO token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|oauth|
|» type|saml|

<h3 id="postoauthloginresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-users">users</h1>

User manipulation endpoint

## Get all users

<a id="opIdget_users_resource"></a>

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /users`

Return the list of users

**Permission required:** edit_users

<h3 id="get-all-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "confirmed_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "roles": [
      {
        "document_id": "string",
        "inbox": "abcdef123456789abcdef123",
        "role": "abcdef123456789abcdef123"
      }
    ],
    "username": "string"
  }
]
```

<h3 id="get-all-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Permission insufficient|None|

<h3 id="get-all-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserModelGet](#schemausermodelget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Create user

<a id="opIdpost_users_resource"></a>

> Code samples

```bash
curl https://example.com/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "active": true,
    "password": "string",
    "roles": [
      {
        "document_id": "string",
        "inbox": "abcdef123456789abcdef123",
        "role": "abcdef123456789abcdef123"
      }
    ],
    "username": "string"
  }'
```

`POST /users`

Create a new user with the provided attributes and roles

**Permission required:** edit_users

> Body parameter

```json
{
  "active": true,
  "password": "string",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "username": "string"
}
```

<h3 id="create-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|body|body|[UserModelPost](#schemausermodelpost)|true|none|
|» active|body|boolean|true|Inactive users have to reset their password first|
|» password|body|string|false|the user password|
|» roles|body|[[UserRoleModel](#schemauserrolemodel)]|true|the user roles|
|» username|body|string|true|the user username|

> Example responses

> 201 Response

```json
{
  "active": true,
  "confirmed_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "username": "string"
}
```

<h3 id="create-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[UserModelGet](#schemausermodelget)|
|400|Bad Request|Missing field|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|
|406|Not Acceptable|Role does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Return info on the current user

<a id="opIdget_me"></a>

> Code samples

```bash
curl https://example.com/users/me \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /users/me`

Return user info of the authenticated used making the call

<h3 id="return-info-on-the-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
{
  "active": true,
  "confirmed_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "username": "string"
}
```

<h3 id="return-info-on-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserModelGet](#schemausermodelget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Change the current user password

<a id="opIdpost_change_password"></a>

> Code samples

```bash
curl https://example.com/users/me/change_password \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "new_password": "string",
    "old_password": "string"
  }'
```

`POST /users/me/change_password`

Update the current authenticated user password

> Body parameter

```json
{
  "new_password": "string",
  "old_password": "string"
}
```

<h3 id="change-the-current-user-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChangePasswordModelPost](#schemachangepasswordmodelpost)|true|none|
|» new_password|body|string|false|the new user's password|
|» old_password|body|string|false|the old user's password|

<h3 id="change-the-current-user-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Password mismatch|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get user

<a id="opIdget_user_resource"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /users/{user_id}`

Return user attribute

**Permission required:** edit_users

<h3 id="get-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|user_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "active": true,
  "confirmed_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "username": "string"
}
```

<h3 id="get-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserModelGet](#schemausermodelget)|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|User Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete a user

<a id="opIddelete_user_resource"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /users/{user_id}`

Delete the given user.

**WARNING** This will completely remove the user, this is not recoverable

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|none|

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|404|Not Found|User Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update user

<a id="opIdpatch_user_resource"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "roles": [
      {
        "inbox": "abcdef123456789abcdef123",
        "role": "abcdef123456789abcdef123"
      }
    ],
    "username": "string"
  }'
```

`PATCH /users/{user_id}`

Update the given user with the provided attributes

**Permission required:** edit_users

> Body parameter

```json
{
  "roles": [
    {
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "username": "string"
}
```

<h3 id="update-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|user_id|path|string|true|none|
|body|body|[UserModelPatch](#schemausermodelpatch)|true|none|
|» roles|body|[[UserRoleModelPatch](#schemauserrolemodelpatch)]|false|the user roles|
|» username|body|string|false|the user username|

> Example responses

> 200 Response

```json
{
  "active": true,
  "confirmed_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "username": "string"
}
```

<h3 id="update-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserModelGet](#schemausermodelget)|
|400|Bad Request|Missing fields|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|User Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-roles">roles</h1>

Role manipulation endpoint

## Get all roles

<a id="opIdget_roles_resource"></a>

> Code samples

```bash
curl https://example.com/roles \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /roles`

Return the list of roles

<h3 id="get-all-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "permissions": {
      "create_dropbox_user": false,
      "create_inbox": false,
      "create_webhook": false,
      "de_escalate_document": false,
      "delete_tenant": false,
      "delete_webhook": false,
      "edit_backend_settings": false,
      "edit_beats": false,
      "edit_dashboard_settings": false,
      "edit_data_retention_settings": false,
      "edit_flow_settings": false,
      "edit_format_settings": false,
      "edit_integration_settings": false,
      "edit_integrations": false,
      "edit_predictor_settings": false,
      "edit_reports": false,
      "edit_retention_settings": false,
      "edit_review_settings": false,
      "edit_roles": false,
      "edit_sampling_settings": false,
      "edit_security_settings": false,
      "edit_templates": false,
      "edit_thresholds_settings": false,
      "edit_translations": false,
      "edit_users": false,
      "escalate_document": false,
      "never_twice": false,
      "pick_next_escalated": false,
      "read_beats": false,
      "read_data_retention_settings": false,
      "read_feedback": false,
      "read_integrations": false,
      "read_release_notes": false,
      "read_reports": false,
      "read_thresholds_settings": false,
      "read_webhook": false,
      "reject_document": false,
      "release_lock": false,
      "review": false,
      "submit": false,
      "update_webhook": false,
      "upload": false,
      "versions": false,
      "view_api_keys": false,
      "view_list": false,
      "view_projects": false,
      "view_statistics": false,
      "view_templates": false,
      "write_feedback": false,
      "write_release_notes": false
    },
    "id": "string"
  }
]
```

<h3 id="get-all-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-all-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleModelGet](#schemarolemodelget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Create role

<a id="opIdpost_roles_resource"></a>

> Code samples

```bash
curl https://example.com/roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "permissions": {
      "create_dropbox_user": false,
      "create_inbox": false,
      "create_webhook": false,
      "de_escalate_document": false,
      "delete_tenant": false,
      "delete_webhook": false,
      "edit_backend_settings": false,
      "edit_beats": false,
      "edit_dashboard_settings": false,
      "edit_data_retention_settings": false,
      "edit_flow_settings": false,
      "edit_format_settings": false,
      "edit_integration_settings": false,
      "edit_integrations": false,
      "edit_predictor_settings": false,
      "edit_reports": false,
      "edit_retention_settings": false,
      "edit_review_settings": false,
      "edit_roles": false,
      "edit_sampling_settings": false,
      "edit_security_settings": false,
      "edit_templates": false,
      "edit_thresholds_settings": false,
      "edit_translations": false,
      "edit_users": false,
      "escalate_document": false,
      "never_twice": false,
      "pick_next_escalated": false,
      "read_beats": false,
      "read_data_retention_settings": false,
      "read_feedback": false,
      "read_integrations": false,
      "read_release_notes": false,
      "read_reports": false,
      "read_thresholds_settings": false,
      "read_webhook": false,
      "reject_document": false,
      "release_lock": false,
      "review": false,
      "submit": false,
      "update_webhook": false,
      "upload": false,
      "versions": false,
      "view_api_keys": false,
      "view_list": false,
      "view_projects": false,
      "view_statistics": false,
      "view_templates": false,
      "write_feedback": false,
      "write_release_notes": false
    }
  }'
```

`POST /roles`

Create a new role

**Permission required:** edit_users

> Body parameter

```json
{
  "name": "string",
  "permissions": {
    "create_dropbox_user": false,
    "create_inbox": false,
    "create_webhook": false,
    "de_escalate_document": false,
    "delete_tenant": false,
    "delete_webhook": false,
    "edit_backend_settings": false,
    "edit_beats": false,
    "edit_dashboard_settings": false,
    "edit_data_retention_settings": false,
    "edit_flow_settings": false,
    "edit_format_settings": false,
    "edit_integration_settings": false,
    "edit_integrations": false,
    "edit_predictor_settings": false,
    "edit_reports": false,
    "edit_retention_settings": false,
    "edit_review_settings": false,
    "edit_roles": false,
    "edit_sampling_settings": false,
    "edit_security_settings": false,
    "edit_templates": false,
    "edit_thresholds_settings": false,
    "edit_translations": false,
    "edit_users": false,
    "escalate_document": false,
    "never_twice": false,
    "pick_next_escalated": false,
    "read_beats": false,
    "read_data_retention_settings": false,
    "read_feedback": false,
    "read_integrations": false,
    "read_release_notes": false,
    "read_reports": false,
    "read_thresholds_settings": false,
    "read_webhook": false,
    "reject_document": false,
    "release_lock": false,
    "review": false,
    "submit": false,
    "update_webhook": false,
    "upload": false,
    "versions": false,
    "view_api_keys": false,
    "view_list": false,
    "view_projects": false,
    "view_statistics": false,
    "view_templates": false,
    "write_feedback": false,
    "write_release_notes": false
  }
}
```

<h3 id="create-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|body|body|[RoleModelPost](#schemarolemodelpost)|true|none|
|» name|body|string|true|none|
|» permissions|body|[PermissionsModel](#schemapermissionsmodel)|true|none|

> Example responses

> 201 Response

```json
{
  "name": "string",
  "permissions": {
    "create_dropbox_user": false,
    "create_inbox": false,
    "create_webhook": false,
    "de_escalate_document": false,
    "delete_tenant": false,
    "delete_webhook": false,
    "edit_backend_settings": false,
    "edit_beats": false,
    "edit_dashboard_settings": false,
    "edit_data_retention_settings": false,
    "edit_flow_settings": false,
    "edit_format_settings": false,
    "edit_integration_settings": false,
    "edit_integrations": false,
    "edit_predictor_settings": false,
    "edit_reports": false,
    "edit_retention_settings": false,
    "edit_review_settings": false,
    "edit_roles": false,
    "edit_sampling_settings": false,
    "edit_security_settings": false,
    "edit_templates": false,
    "edit_thresholds_settings": false,
    "edit_translations": false,
    "edit_users": false,
    "escalate_document": false,
    "never_twice": false,
    "pick_next_escalated": false,
    "read_beats": false,
    "read_data_retention_settings": false,
    "read_feedback": false,
    "read_integrations": false,
    "read_release_notes": false,
    "read_reports": false,
    "read_thresholds_settings": false,
    "read_webhook": false,
    "reject_document": false,
    "release_lock": false,
    "review": false,
    "submit": false,
    "update_webhook": false,
    "upload": false,
    "versions": false,
    "view_api_keys": false,
    "view_list": false,
    "view_projects": false,
    "view_statistics": false,
    "view_templates": false,
    "write_feedback": false,
    "write_release_notes": false
  },
  "id": "string"
}
```

<h3 id="create-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[RoleModelGet](#schemarolemodelget)|
|403|Forbidden|Permission insufficient|None|
|405|Method Not Allowed|Missing fields|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get role

<a id="opIdget_role_resource"></a>

> Code samples

```bash
curl https://example.com/roles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /roles/{role_id}`

Return role attributes

<h3 id="get-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|role_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "permissions": {
    "create_dropbox_user": false,
    "create_inbox": false,
    "create_webhook": false,
    "de_escalate_document": false,
    "delete_tenant": false,
    "delete_webhook": false,
    "edit_backend_settings": false,
    "edit_beats": false,
    "edit_dashboard_settings": false,
    "edit_data_retention_settings": false,
    "edit_flow_settings": false,
    "edit_format_settings": false,
    "edit_integration_settings": false,
    "edit_integrations": false,
    "edit_predictor_settings": false,
    "edit_reports": false,
    "edit_retention_settings": false,
    "edit_review_settings": false,
    "edit_roles": false,
    "edit_sampling_settings": false,
    "edit_security_settings": false,
    "edit_templates": false,
    "edit_thresholds_settings": false,
    "edit_translations": false,
    "edit_users": false,
    "escalate_document": false,
    "never_twice": false,
    "pick_next_escalated": false,
    "read_beats": false,
    "read_data_retention_settings": false,
    "read_feedback": false,
    "read_integrations": false,
    "read_release_notes": false,
    "read_reports": false,
    "read_thresholds_settings": false,
    "read_webhook": false,
    "reject_document": false,
    "release_lock": false,
    "review": false,
    "submit": false,
    "update_webhook": false,
    "upload": false,
    "versions": false,
    "view_api_keys": false,
    "view_list": false,
    "view_projects": false,
    "view_statistics": false,
    "view_templates": false,
    "write_feedback": false,
    "write_release_notes": false
  },
  "id": "string"
}
```

<h3 id="get-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RoleModelGet](#schemarolemodelget)|
|404|Not Found|Role Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete a role

<a id="opIddelete_role_resource"></a>

> Code samples

```bash
curl https://example.com/roles/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /roles/{role_id}`

Delete the given role.

**WARNING** This will completely remove the role, this is not recoverable

**Permission required:** edit_users

<h3 id="delete-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role_id|path|string|true|none|

<h3 id="delete-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Role Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update role

<a id="opIdpatch_role_resource"></a>

> Code samples

```bash
curl https://example.com/roles/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "permissions": {
      "create_dropbox_user": false,
      "create_inbox": false,
      "create_webhook": false,
      "de_escalate_document": false,
      "delete_tenant": false,
      "delete_webhook": false,
      "edit_backend_settings": false,
      "edit_beats": false,
      "edit_dashboard_settings": false,
      "edit_data_retention_settings": false,
      "edit_flow_settings": false,
      "edit_format_settings": false,
      "edit_integration_settings": false,
      "edit_integrations": false,
      "edit_predictor_settings": false,
      "edit_reports": false,
      "edit_retention_settings": false,
      "edit_review_settings": false,
      "edit_roles": false,
      "edit_sampling_settings": false,
      "edit_security_settings": false,
      "edit_templates": false,
      "edit_thresholds_settings": false,
      "edit_translations": false,
      "edit_users": false,
      "escalate_document": false,
      "never_twice": false,
      "pick_next_escalated": false,
      "read_beats": false,
      "read_data_retention_settings": false,
      "read_feedback": false,
      "read_integrations": false,
      "read_release_notes": false,
      "read_reports": false,
      "read_thresholds_settings": false,
      "read_webhook": false,
      "reject_document": false,
      "release_lock": false,
      "review": false,
      "submit": false,
      "update_webhook": false,
      "upload": false,
      "versions": false,
      "view_api_keys": false,
      "view_list": false,
      "view_projects": false,
      "view_statistics": false,
      "view_templates": false,
      "write_feedback": false,
      "write_release_notes": false
    }
  }'
```

`PATCH /roles/{role_id}`

Modify the role with the given arguments

**Permission required:** edit_users

> Body parameter

```json
{
  "name": "string",
  "permissions": {
    "create_dropbox_user": false,
    "create_inbox": false,
    "create_webhook": false,
    "de_escalate_document": false,
    "delete_tenant": false,
    "delete_webhook": false,
    "edit_backend_settings": false,
    "edit_beats": false,
    "edit_dashboard_settings": false,
    "edit_data_retention_settings": false,
    "edit_flow_settings": false,
    "edit_format_settings": false,
    "edit_integration_settings": false,
    "edit_integrations": false,
    "edit_predictor_settings": false,
    "edit_reports": false,
    "edit_retention_settings": false,
    "edit_review_settings": false,
    "edit_roles": false,
    "edit_sampling_settings": false,
    "edit_security_settings": false,
    "edit_templates": false,
    "edit_thresholds_settings": false,
    "edit_translations": false,
    "edit_users": false,
    "escalate_document": false,
    "never_twice": false,
    "pick_next_escalated": false,
    "read_beats": false,
    "read_data_retention_settings": false,
    "read_feedback": false,
    "read_integrations": false,
    "read_release_notes": false,
    "read_reports": false,
    "read_thresholds_settings": false,
    "read_webhook": false,
    "reject_document": false,
    "release_lock": false,
    "review": false,
    "submit": false,
    "update_webhook": false,
    "upload": false,
    "versions": false,
    "view_api_keys": false,
    "view_list": false,
    "view_projects": false,
    "view_statistics": false,
    "view_templates": false,
    "write_feedback": false,
    "write_release_notes": false
  }
}
```

<h3 id="update-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|role_id|path|string|true|none|
|body|body|[RoleModelPatch](#schemarolemodelpatch)|true|none|
|» name|body|string|false|none|
|» permissions|body|[PermissionsModel](#schemapermissionsmodel)|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "permissions": {
    "create_dropbox_user": false,
    "create_inbox": false,
    "create_webhook": false,
    "de_escalate_document": false,
    "delete_tenant": false,
    "delete_webhook": false,
    "edit_backend_settings": false,
    "edit_beats": false,
    "edit_dashboard_settings": false,
    "edit_data_retention_settings": false,
    "edit_flow_settings": false,
    "edit_format_settings": false,
    "edit_integration_settings": false,
    "edit_integrations": false,
    "edit_predictor_settings": false,
    "edit_reports": false,
    "edit_retention_settings": false,
    "edit_review_settings": false,
    "edit_roles": false,
    "edit_sampling_settings": false,
    "edit_security_settings": false,
    "edit_templates": false,
    "edit_thresholds_settings": false,
    "edit_translations": false,
    "edit_users": false,
    "escalate_document": false,
    "never_twice": false,
    "pick_next_escalated": false,
    "read_beats": false,
    "read_data_retention_settings": false,
    "read_feedback": false,
    "read_integrations": false,
    "read_release_notes": false,
    "read_reports": false,
    "read_thresholds_settings": false,
    "read_webhook": false,
    "reject_document": false,
    "release_lock": false,
    "review": false,
    "submit": false,
    "update_webhook": false,
    "upload": false,
    "versions": false,
    "view_api_keys": false,
    "view_list": false,
    "view_projects": false,
    "view_statistics": false,
    "view_templates": false,
    "write_feedback": false,
    "write_release_notes": false
  },
  "id": "string"
}
```

<h3 id="update-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RoleModelGet](#schemarolemodelget)|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Role Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-settings">settings</h1>

Settings endpoint

## Get scoped dashboard setting

<a id="opIdget_dashboard_settings_atomic_resource"></a>

> Code samples

```bash
curl https://example.com/settings/dashboard \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /settings/dashboard`

Get the dashboard settings for the given scope (project or inbox)

<h3 id="get-scoped-dashboard-setting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|false|none|
|full|query|boolean|false|none|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
{
  "autolearning": true,
  "dashboard_timeout": 0,
  "default_date_range": {},
  "default_inbox_size": {},
  "default_inbox_sorting": {},
  "flexible_filters": [
    {}
  ],
  "navigation_menu": {},
  "process_unreadable": true,
  "sequence_columns_of_inbox": {
    "columns_headers": [
      {
        "checked": true,
        "field": "string",
        "label": "string"
      }
    ],
    "inline_headers": [
      {
        "checked": true,
        "field": "string",
        "label": "string"
      }
    ]
  },
  "show_digital_annotations": true,
  "show_filters": {},
  "show_inbox_actions": {},
  "studio_format_options": {},
  "upload_options": {},
  "welcome_counters": true,
  "welcome_counters_options": {}
}
```

<h3 id="get-scoped-dashboard-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DashboardSettingsModelGet](#schemadashboardsettingsmodelget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update scoped dashboard setting

<a id="opIdpatch_dashboard_settings_atomic_resource"></a>

> Code samples

```bash
curl https://example.com/settings/dashboard \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "scope": "string",
    "settings": {
      "autolearning": true,
      "dashboard_timeout": 0,
      "default_date_range": {},
      "default_inbox_size": {},
      "default_inbox_sorting": {},
      "flexible_filters": [
        {}
      ],
      "navigation_menu": {},
      "process_unreadable": true,
      "sequence_columns_of_inbox": {
        "columns_headers": [
          {
            "checked": true,
            "field": "string",
            "label": "string"
          }
        ],
        "inline_headers": [
          {
            "checked": true,
            "field": "string",
            "label": "string"
          }
        ]
      },
      "show_digital_annotations": true,
      "show_filters": {},
      "show_inbox_actions": {},
      "studio_format_options": {},
      "upload_options": {},
      "welcome_counters": true,
      "welcome_counters_options": {}
    }
  }'
```

`PATCH /settings/dashboard`

Update the dashboard settings for the given scope (project or inbox)

**Permission required:** edit_dashboard_settings

> Body parameter

```json
{
  "scope": "string",
  "settings": {
    "autolearning": true,
    "dashboard_timeout": 0,
    "default_date_range": {},
    "default_inbox_size": {},
    "default_inbox_sorting": {},
    "flexible_filters": [
      {}
    ],
    "navigation_menu": {},
    "process_unreadable": true,
    "sequence_columns_of_inbox": {
      "columns_headers": [
        {
          "checked": true,
          "field": "string",
          "label": "string"
        }
      ],
      "inline_headers": [
        {
          "checked": true,
          "field": "string",
          "label": "string"
        }
      ]
    },
    "show_digital_annotations": true,
    "show_filters": {},
    "show_inbox_actions": {},
    "studio_format_options": {},
    "upload_options": {},
    "welcome_counters": true,
    "welcome_counters_options": {}
  }
}
```

<h3 id="update-scoped-dashboard-setting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|body|body|[DashboardSettingsModelPatch](#schemadashboardsettingsmodelpatch)|true|none|
|» scope|body|string|false|none|
|» settings|body|[DashboardSettingsModelGet](#schemadashboardsettingsmodelget)|false|none|

> Example responses

> 200 Response

```json
{
  "autolearning": true,
  "dashboard_timeout": 0,
  "default_date_range": {},
  "default_inbox_size": {},
  "default_inbox_sorting": {},
  "flexible_filters": [
    {}
  ],
  "navigation_menu": {},
  "process_unreadable": true,
  "sequence_columns_of_inbox": {
    "columns_headers": [
      {
        "checked": true,
        "field": "string",
        "label": "string"
      }
    ],
    "inline_headers": [
      {
        "checked": true,
        "field": "string",
        "label": "string"
      }
    ]
  },
  "show_digital_annotations": true,
  "show_filters": {},
  "show_inbox_actions": {},
  "studio_format_options": {},
  "upload_options": {},
  "welcome_counters": true,
  "welcome_counters_options": {}
}
```

<h3 id="update-scoped-dashboard-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DashboardSettingsModelGet](#schemadashboardsettingsmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get scoped review setting

<a id="opIdget_review_settings_atomic_resource"></a>

> Code samples

```bash
curl https://example.com/settings/review \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /settings/review`

Get the review settings for the given scope (project or inbox)

<h3 id="get-scoped-review-setting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|false|none|
|full|query|boolean|false|none|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
{
  "default_zoom": {},
  "first_toolbar": {},
  "lock_expiry": {},
  "review_options": {},
  "second_toolbar": {}
}
```

<h3 id="get-scoped-review-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReviewSettingsModelGet](#schemareviewsettingsmodelget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update scoped review setting

<a id="opIdpatch_review_settings_atomic_resource"></a>

> Code samples

```bash
curl https://example.com/settings/review \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "scope": "string",
    "settings": {
      "default_zoom": {},
      "first_toolbar": {},
      "lock_expiry": {},
      "review_options": {},
      "second_toolbar": {}
    }
  }'
```

`PATCH /settings/review`

Update the review settings for the given scope (project or inbox)

**Permission required:** edit_review_settings

> Body parameter

```json
{
  "scope": "string",
  "settings": {
    "default_zoom": {},
    "first_toolbar": {},
    "lock_expiry": {},
    "review_options": {},
    "second_toolbar": {}
  }
}
```

<h3 id="update-scoped-review-setting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|body|body|[ReviewSettingsModelPatch](#schemareviewsettingsmodelpatch)|true|none|
|» scope|body|string|false|none|
|» settings|body|[ReviewSettingsModelGet](#schemareviewsettingsmodelget)|false|none|

> Example responses

> 200 Response

```json
{
  "default_zoom": {},
  "first_toolbar": {},
  "lock_expiry": {},
  "review_options": {},
  "second_toolbar": {}
}
```

<h3 id="update-scoped-review-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReviewSettingsModelGet](#schemareviewsettingsmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-thresholdsettings">threshold_settings</h1>

SettingThreshold manipulation endpoint

## Get all thresholds settings

<a id="opIdget_settings_threshold_resource"></a>

> Code samples

```bash
curl https://example.com/threshold_settings \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /threshold_settings`

**Permission required:** read_thresholds_settings / review

<h3 id="get-all-thresholds-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
[
  {
    "thresholds": {
      "annotations": {},
      "lines": {},
      "sections": {}
    },
    "scope": ""
  }
]
```

<h3 id="get-all-thresholds-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Permission insufficient|None|

<h3 id="get-all-thresholds-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SettingThresholdModelGet](#schemasettingthresholdmodelget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get the scoped thresholds settings

<a id="opIdget_setting_threshold_resource"></a>

> Code samples

```bash
curl https://example.com/threshold_settings/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /threshold_settings/{scope}`

**Permission required:** read_thresholds_settings / review

<h3 id="get-the-scoped-thresholds-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|default|query|boolean|false|none|
|X-Fields|header|string(mask)|false|An optional fields mask|
|scope|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "thresholds": {
    "annotations": {},
    "lines": {},
    "sections": {}
  },
  "scope": ""
}
```

<h3 id="get-the-scoped-thresholds-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SettingThresholdModelGet](#schemasettingthresholdmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete the thresholds settings

<a id="opIddelete_setting_threshold_resource"></a>

> Code samples

```bash
curl https://example.com/threshold_settings/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /threshold_settings/{scope}`

**Permission required:** edit_thresholds_settings

<h3 id="delete-the-thresholds-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|path|string|true|none|

<h3 id="delete-the-thresholds-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Threshold Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update the scoped thresholds settings

<a id="opIdpatch_setting_threshold_resource"></a>

> Code samples

```bash
curl https://example.com/threshold_settings/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "thresholds": {
      "annotations": {},
      "lines": {},
      "sections": {}
    }
  }'
```

`PATCH /threshold_settings/{scope}`

**Permission required:** edit_thresholds_settings

> Body parameter

```json
{
  "thresholds": {
    "annotations": {},
    "lines": {},
    "sections": {}
  }
}
```

<h3 id="update-the-scoped-thresholds-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|scope|path|string|true|none|
|body|body|[SettingThresholdModelPatch](#schemasettingthresholdmodelpatch)|true|none|
|» thresholds|body|[ThresholdModel](#schemathresholdmodel)|false|none|

> Example responses

> 200 Response

```json
{
  "thresholds": {
    "annotations": {},
    "lines": {},
    "sections": {}
  },
  "scope": ""
}
```

<h3 id="update-the-scoped-thresholds-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SettingThresholdModelGet](#schemasettingthresholdmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-style">style</h1>

Style endpoint

## Get the custom CSS file

<a id="opIdget_style_sheet_resource"></a>

> Code samples

```bash
curl https://example.com/style/custom.css \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /style/custom.css`

<h3 id="get-the-custom-css-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File Content|None|
|204|No Content|No Style|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Upload the custom logo

<a id="opIdpost_style_sheet_resource"></a>

> Code samples

```bash
curl https://example.com/style/custom.css \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'file=@/path/to/file'
```

`POST /style/custom.css`

**Permission required:** edit_dashboard_settings

> Body parameter

```yaml
file: string
```

<h3 id="upload-the-custom-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|File to handle|

<h3 id="upload-the-custom-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Permission insufficient|None|
|422|Unprocessable Entity|File input invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get the custom logo

<a id="opIdget_style_logo_resource"></a>

> Code samples

```bash
curl https://example.com/style/logo.png \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /style/logo.png`

<h3 id="get-the-custom-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Upload the custom logo

<a id="opIdpost_style_logo_resource"></a>

> Code samples

```bash
curl https://example.com/style/logo.png \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'file=@/path/to/file'
```

`POST /style/logo.png`

**Permission required:** edit_dashboard_settings

> Body parameter

```yaml
file: string
```

<h3 id="upload-the-custom-logo-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|File to handle|

<h3 id="upload-the-custom-logo-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Permission insufficient|None|
|422|Unprocessable Entity|File input invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-stats">stats</h1>

stats manipulation endpoint

## get_usage_stats_resource

<a id="opIdget_usage_stats_resource"></a>

> Code samples

```bash
curl 'https://example.com/stats/usage?start_date=2023-01-31T13%3A36%3A39&end_date=2023-03-02T13%3A36%3A39' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stats/usage`

<h3 id="getusagestatsresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|query|string|false|none|
|start_date|query|string|true|none|
|end_date|query|string|true|none|
|excel_output|query|boolean|false|Set to 'true' to get data in an excel. (Default output format: JSON)|

<h3 id="getusagestatsresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get inbox statistics

<a id="opIdget_stats_resource"></a>

> Code samples

```bash
curl https://example.com/stats/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stats/{inbox_id}`

Compute and return statistics on the given inbox, optionally restricted to a date range and a field.

Stats will return per field:
- accuracy
- precision
- f1 score
- recall

**Note** Depending on the date range and fields, computation might be intensive

**Permission required:** view_statistics

<h3 id="get-inbox-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|field_name|query|string|false|The field names to include in the stats. If left empty, all fields are included.Additionally, `__all_fields__` field name is also added, and aggregates the stats for all fields|
|start_date|query|string(date-time)|false|The minimum upload time of the file. If left empty, no filter is applied. |
|end_date|query|string(date-time)|false|The maximum upload time of the file. If left empty, no filter is applied. |
|version_name|query|string|false|The name of the version to evaluate. If left empty, latest evaluated version is chosen. |
|inbox_id|path|string|true|none|

<h3 id="get-inbox-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get summary or details of automation blockers

<a id="opIdget_automation_blockers_stats"></a>

> Code samples

```bash
curl https://example.com/stats/string/automation_blockers \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stats/{inbox_id}/automation_blockers`

**Permission required:** view_statistics

<h3 id="get-summary-or-details-of-automation-blockers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date-time)|false|none|
|end_date|query|string(date-time)|false|none|
|version_name|query|string|false|provide the version name to evaluate|
|include_detail|query|boolean|false|none|
|inbox_id|path|string|true|none|

<h3 id="get-summary-or-details-of-automation-blockers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Not Supported|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get the Blue Dots statistics for the inbox

<a id="opIdpost_blue_dots_resource"></a>

> Code samples

```bash
curl https://example.com/stats/string/blue_dots \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'end_date=2023-03-02T13:36:39.250962' \
  -F 'fields_to_exclude=' \
  -F 'level=file' \
  -F 'option_level_fields=' \
  -F 'start_date=2023-02-02T13:36:39.250933' \
  -F 'version_name=submitted'
```

`POST /stats/{inbox_id}/blue_dots`

Compute and return the blue dots statistics, optionally restricted to date range, fields and versions

**Permission required:** submit

> Body parameter

```yaml
end_date: "2023-03-02T13:36:39.250962"
fields_to_exclude: ""
level: file
option_level_fields: ""
start_date: "2023-02-02T13:36:39.250933"
version_name: submitted
```

<h3 id="get-the-blue-dots-statistics-for-the-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|none|
|body|body|object|false|none|
|» end_date|body|string(date-time)|false|none|
|» fields_to_exclude|body|string|false|gross_amount,due_date|
|» level|body|string|false|possible values: file, field|
|» option_level_fields|body|string|false|invoice,receipt|
|» start_date|body|string(date-time)|false|none|
|» version_name|body|string|false|provide the version name to evaluate|

<h3 id="get-the-blue-dots-statistics-for-the-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Document evaluation missing|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get the documents with evaluated versions

<a id="opIdget_evaluated_versions"></a>

> Code samples

```bash
curl https://example.com/stats/string/evaluated_versions \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stats/{inbox_id}/evaluated_versions`

If filter_on_version_date is True, the document
versions are filtered by timestamp, otherwise, documents are filtered by receive_time.

**Permission required:** view_statistics

<h3 id="get-the-documents-with-evaluated-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date-time)|false|none|
|end_date|query|string(date-time)|false|none|
|filter_versions|query|boolean|false|none|
|last_one_only|query|boolean|false|none|
|version_name|query|string|false|filter the version by name. If not specified, all version names are considered|
|inbox_id|path|string|true|none|

<h3 id="get-the-documents-with-evaluated-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get processing runtime stats

<a id="opIdget_processing_stats"></a>

> Code samples

```bash
curl https://example.com/stats/string/processing \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stats/{inbox_id}/processing`

**This endpoint is in _preview_ and its interface may change.**

Compute statistics over the documents in the inbox. These stats include:
- mean
- min
- max
- standard deviation
- 50th percentile
- 95th percentile
- 99th percentile

Documents are grouped by their page count: this is currently the *only* supported group by attribute.

Documents can be further filter by any given start or end date: the filter will apply to the start
processing date, and *not* to the done date.

**Permission required:** view_statistics

<h3 id="get-processing-runtime-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date-time)|false|none|
|end_date|query|string(date-time)|false|none|
|group_by|query|string|false|Group stats per this given attribute. Only **pages** is supported|
|inbox_id|path|string|true|none|

<h3 id="get-processing-runtime-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Not Supported|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## **Permission required:** view_statistics

<a id="opIdget_volume_stats"></a>

> Code samples

```bash
curl https://example.com/stats/string/volume \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stats/{inbox_id}/volume`

<h3 id="permission-required-viewstatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date-time)|false|none|
|end_date|query|string(date-time)|false|none|
|status|query|string|false|none|
|user|query|string|false|none|
|inbox_id|path|string|true|none|

<h3 id="permission-required-viewstatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Not Supported|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get the Accuracy counts on documents, sections and fields in the given inbox

<a id="opIdget_accuracy_resource"></a>

> Code samples

```bash
curl https://example.com/stats/string/accuracy \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stats/{scope}/accuracy`

**Permission required:** view_statistics

<h3 id="get-the-accuracy-counts-on-documents-sections-and-fields-in-the-given-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date-time)|false|none|
|end_date|query|string(date-time)|false|none|
|stp_files_only|query|boolean|false|none|
|stp_fields_only|query|boolean|false|none|
|version_name|query|string|false|provide the version name to evaluate|
|filter_by|query|string|false|Choose to filter the results by doctype, process label, ...|
|scope|path|string|true|none|

<h3 id="get-the-accuracy-counts-on-documents-sections-and-fields-in-the-given-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get the STP counts on documents, sections and fields in the given inbox

<a id="opIdget_stp_resource"></a>

> Code samples

```bash
curl https://example.com/stats/string/stp \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stats/{scope}/stp`

**Permission required:** view_statistics

<h3 id="get-the-stp-counts-on-documents-sections-and-fields-in-the-given-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date-time)|false|none|
|end_date|query|string(date-time)|false|none|
|version_name|query|string|false|Provide the evaluated version name to inspect automation (of the predictions) for|
|filter_by|query|string|false|Choose to filter the results by doctype, process label, ...|
|scope|path|string|true|none|

<h3 id="get-the-stp-counts-on-documents-sections-and-fields-in-the-given-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-samplingsettings">sampling_settings</h1>

SettingSampling manipulation endpoint

## Get all sampling settings

<a id="opIdget_setting_samplings_resource"></a>

> Code samples

```bash
curl https://example.com/sampling_settings \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sampling_settings`

**Permission required:** edit_sampling_settings / review

<h3 id="get-all-sampling-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
[
  {
    "auto_reject_FFR": 0,
    "auto_submit_FFR": 0,
    "second_pass_FFR": 0,
    "second_pass_STP": 0,
    "scope": "string"
  }
]
```

<h3 id="get-all-sampling-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Permission insufficient|None|

<h3 id="get-all-sampling-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SamplingModelGet](#schemasamplingmodelget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get scoped sampling settings

<a id="opIdget_setting_sampling_resource"></a>

> Code samples

```bash
curl https://example.com/sampling_settings/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sampling_settings/{scope}`

**Permission required:** edit_sampling_settings / review

<h3 id="get-scoped-sampling-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|scope|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "auto_reject_FFR": 0,
  "auto_submit_FFR": 0,
  "second_pass_FFR": 0,
  "second_pass_STP": 0,
  "scope": "string"
}
```

<h3 id="get-scoped-sampling-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SamplingModelGet](#schemasamplingmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete scoped sampling settings

<a id="opIddelete_setting_sampling_resource"></a>

> Code samples

```bash
curl https://example.com/sampling_settings/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /sampling_settings/{scope}`

**Permission required:** edit_sampling_settings

<h3 id="delete-scoped-sampling-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|path|string|true|none|

<h3 id="delete-scoped-sampling-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update scoped sampling settings

<a id="opIdpatch_setting_sampling_resource"></a>

> Code samples

```bash
curl https://example.com/sampling_settings/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "auto_reject_FFR": 0,
    "auto_submit_FFR": 0,
    "second_pass_FFR": 0,
    "second_pass_STP": 0
  }'
```

`PATCH /sampling_settings/{scope}`

**Permission required:** edit_sampling_settings

> Body parameter

```json
{
  "auto_reject_FFR": 0,
  "auto_submit_FFR": 0,
  "second_pass_FFR": 0,
  "second_pass_STP": 0
}
```

<h3 id="update-scoped-sampling-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|scope|path|string|true|none|
|body|body|[SamplingModelPatch](#schemasamplingmodelpatch)|true|none|
|» auto_reject_FFR|body|integer|false|none|
|» auto_submit_FFR|body|integer|false|none|
|» second_pass_FFR|body|integer|false|none|
|» second_pass_STP|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "auto_reject_FFR": 0,
  "auto_submit_FFR": 0,
  "second_pass_FFR": 0,
  "second_pass_STP": 0,
  "scope": "string"
}
```

<h3 id="update-scoped-sampling-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SamplingModelGet](#schemasamplingmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-predictorsettings">predictor_settings</h1>

Predictor settings manipulation endpoint

## Get all predictor settings

<a id="opIdget_predictor_settings_resource"></a>

> Code samples

```bash
curl https://example.com/predictor_settings \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /predictor_settings`

**Permission required:** edit_predictor_settings

<h3 id="get-all-predictor-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
[
  {
    "blacklist": {},
    "expected_values": {},
    "fallback": {},
    "key_value_pairs": {
      "classification_cutoff": 0,
      "rule_config": {},
      "splitting_cutoff": 0,
      "uer_pre_config": {}
    },
    "table_extraction_settings": {
      "field_settings": {
        "*": {
          "property1": {
            "default_value": "string",
            "expected_pattern": "string",
            "nested_field_patterns": {
              "*": {
                "property1": "string",
                "property2": "string"
              }
            },
            "override_default_patterns": true
          },
          "property2": {
            "default_value": "string",
            "expected_pattern": "string",
            "nested_field_patterns": {
              "*": {
                "property1": "string",
                "property2": "string"
              }
            },
            "override_default_patterns": true
          }
        }
      }
    },
    "whitelist": {},
    "scope": "string"
  }
]
```

<h3 id="get-all-predictor-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Permission insufficient|None|

<h3 id="get-all-predictor-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PredictorModelGet](#schemapredictormodelget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get scoped predictor settings

<a id="opIdget_predictor_setting_resource"></a>

> Code samples

```bash
curl https://example.com/predictor_settings/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /predictor_settings/{scope}`

**Permission required:** edit_predictor_settings

<h3 id="get-scoped-predictor-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|scope|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "blacklist": {},
  "expected_values": {},
  "fallback": {},
  "key_value_pairs": {
    "classification_cutoff": 0,
    "rule_config": {},
    "splitting_cutoff": 0,
    "uer_pre_config": {}
  },
  "table_extraction_settings": {
    "field_settings": {
      "*": {
        "property1": {
          "default_value": "string",
          "expected_pattern": "string",
          "nested_field_patterns": {
            "*": {
              "property1": "string",
              "property2": "string"
            }
          },
          "override_default_patterns": true
        },
        "property2": {
          "default_value": "string",
          "expected_pattern": "string",
          "nested_field_patterns": {
            "*": {
              "property1": "string",
              "property2": "string"
            }
          },
          "override_default_patterns": true
        }
      }
    }
  },
  "whitelist": {},
  "scope": "string"
}
```

<h3 id="get-scoped-predictor-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PredictorModelGet](#schemapredictormodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete scoped predictor settings

<a id="opIddelete_predictor_setting_resource"></a>

> Code samples

```bash
curl https://example.com/predictor_settings/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /predictor_settings/{scope}`

**Permission required:** edit_predictor_settings

<h3 id="delete-scoped-predictor-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|path|string|true|none|

<h3 id="delete-scoped-predictor-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update scoped predictor settings

<a id="opIdpatch_predictor_setting_resource"></a>

> Code samples

```bash
curl https://example.com/predictor_settings/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "blacklist": {},
    "expected_values": {},
    "fallback": {},
    "key_value_pairs": {
      "classification_cutoff": 0,
      "rule_config": {},
      "splitting_cutoff": 0,
      "uer_pre_config": {}
    },
    "table_extraction_settings": {
      "field_settings": {
        "*": {
          "property1": {
            "default_value": "string",
            "expected_pattern": "string",
            "nested_field_patterns": {
              "*": {
                "property1": "string",
                "property2": "string"
              }
            },
            "override_default_patterns": true
          },
          "property2": {
            "default_value": "string",
            "expected_pattern": "string",
            "nested_field_patterns": {
              "*": {
                "property1": "string",
                "property2": "string"
              }
            },
            "override_default_patterns": true
          }
        }
      }
    },
    "whitelist": {}
  }'
```

`PATCH /predictor_settings/{scope}`

**Permission required:** edit_predictor_settings

> Body parameter

```json
{
  "blacklist": {},
  "expected_values": {},
  "fallback": {},
  "key_value_pairs": {
    "classification_cutoff": 0,
    "rule_config": {},
    "splitting_cutoff": 0,
    "uer_pre_config": {}
  },
  "table_extraction_settings": {
    "field_settings": {
      "*": {
        "property1": {
          "default_value": "string",
          "expected_pattern": "string",
          "nested_field_patterns": {
            "*": {
              "property1": "string",
              "property2": "string"
            }
          },
          "override_default_patterns": true
        },
        "property2": {
          "default_value": "string",
          "expected_pattern": "string",
          "nested_field_patterns": {
            "*": {
              "property1": "string",
              "property2": "string"
            }
          },
          "override_default_patterns": true
        }
      }
    }
  },
  "whitelist": {}
}
```

<h3 id="update-scoped-predictor-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|scope|path|string|true|none|
|body|body|[PredictorSettingModel](#schemapredictorsettingmodel)|true|none|
|» blacklist|body|object|false|none|
|» expected_values|body|object|false|none|
|» fallback|body|object|false|none|
|» key_value_pairs|body|[KeyValyePairSettingsModel](#schemakeyvalyepairsettingsmodel)|false|none|
|» table_extraction_settings|body|[TableExtractionSettingsModel](#schematableextractionsettingsmodel)|false|none|
|» whitelist|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "blacklist": {},
  "expected_values": {},
  "fallback": {},
  "key_value_pairs": {
    "classification_cutoff": 0,
    "rule_config": {},
    "splitting_cutoff": 0,
    "uer_pre_config": {}
  },
  "table_extraction_settings": {
    "field_settings": {
      "*": {
        "property1": {
          "default_value": "string",
          "expected_pattern": "string",
          "nested_field_patterns": {
            "*": {
              "property1": "string",
              "property2": "string"
            }
          },
          "override_default_patterns": true
        },
        "property2": {
          "default_value": "string",
          "expected_pattern": "string",
          "nested_field_patterns": {
            "*": {
              "property1": "string",
              "property2": "string"
            }
          },
          "override_default_patterns": true
        }
      }
    }
  },
  "whitelist": {},
  "scope": "string"
}
```

<h3 id="update-scoped-predictor-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PredictorModelGet](#schemapredictormodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-ruleconfig">rule_config</h1>

Rule config manipulation endpoint

## Get all rule configs

<a id="opIdget_rule_configs_resource"></a>

> Code samples

```bash
curl https://example.com/rule_config \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /rule_config`

**Permission required:** edit_predictor_settings

<h3 id="get-all-rule-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
[
  {
    "rule_config": {},
    "scope": "string"
  }
]
```

<h3 id="get-all-rule-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Permission insufficient|None|

<h3 id="get-all-rule-configs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RuleConfigModelGet](#schemaruleconfigmodelget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get the regexes that are generated by the rule

<a id="opIdpost_debug_rule_entity_resource"></a>

> Code samples

```bash
curl https://example.com/rule_config/rule_entity/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{}'
```

`POST /rule_config/rule_entity/`

**Permission required:** edit_predictor_settings

> Body parameter

```json
{}
```

<h3 id="get-the-regexes-that-are-generated-by-the-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[dictionary](#schemadictionary)|true|none|

<h3 id="get-the-regexes-that-are-generated-by-the-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Evaluate a rule on a document

<a id="opIdpost_debug_rule_entity_document_resource"></a>

> Code samples

```bash
curl https://example.com/rule_config/rule_entity/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{}'
```

`POST /rule_config/rule_entity/{document_id}`

**Permission required:** edit_predictor_settings

> Body parameter

```json
{}
```

<h3 id="evaluate-a-rule-on-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|document_id|path|string|true|none|
|body|body|[dictionary](#schemadictionary)|true|none|

<h3 id="evaluate-a-rule-on-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get the text a where_to_search specification will generate

<a id="opIdpost_debug_where_to_search"></a>

> Code samples

```bash
curl https://example.com/rule_config/where_to_search/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{}'
```

`POST /rule_config/where_to_search/{document_id}`

Returns a list of strings per granularity. If no granularity is specified. It is considered to be the whole document

**Permission required:** edit_predictor_settings

> Body parameter

```json
{}
```

<h3 id="get-the-text-a-wheretosearch-specification-will-generate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|document_id|path|string|true|none|
|body|body|[dictionary](#schemadictionary)|true|none|

<h3 id="get-the-text-a-wheretosearch-specification-will-generate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get scoped rule config

<a id="opIdget_rule_config_resource"></a>

> Code samples

```bash
curl https://example.com/rule_config/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /rule_config/{scope}`

**Permission required:** edit_predictor_settings

<h3 id="get-scoped-rule-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|scope|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "rule_config": {},
  "scope": "string"
}
```

<h3 id="get-scoped-rule-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RuleConfigModelGet](#schemaruleconfigmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete scoped rule config

<a id="opIddelete_rule_config_resource"></a>

> Code samples

```bash
curl https://example.com/rule_config/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /rule_config/{scope}`

**Permission required:** edit_predictor_settings

<h3 id="delete-scoped-rule-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|path|string|true|none|

<h3 id="delete-scoped-rule-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update scoped rule config

<a id="opIdpatch_rule_config_resource"></a>

> Code samples

```bash
curl https://example.com/rule_config/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "rule_config": {}
  }'
```

`PATCH /rule_config/{scope}`

**Permission required:** edit_predictor_settings

> Body parameter

```json
{
  "rule_config": {}
}
```

<h3 id="update-scoped-rule-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|scope|path|string|true|none|
|body|body|[RuleConfigModel](#schemaruleconfigmodel)|true|none|
|» rule_config|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "rule_config": {},
  "scope": "string"
}
```

<h3 id="update-scoped-rule-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RuleConfigModelGet](#schemaruleconfigmodelget)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-dataretentionsettings">data_retention_settings</h1>

Data Retention Settings manipulation endpoint

## Get all data retention settings

<a id="opIdget_data_retention_resource"></a>

> Code samples

```bash
curl https://example.com/data_retention_settings \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /data_retention_settings`

**Permission required:** read_data_retention_settings

<h3 id="get-all-data-retention-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
[
  {
    "scope": {
      "id": "string",
      "level": "string"
    },
    "settings": [
      {
        "age": 30,
        "how": "FULL",
        "what": "ALL"
      }
    ]
  }
]
```

<h3 id="get-all-data-retention-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Permission insufficient|None|

<h3 id="get-all-data-retention-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DataRetentionModel](#schemadataretentionmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get scoped data retention settings

> Code samples

```bash
curl https://example.com/data_retention_settings/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /data_retention_settings/{level}/{id}`

**Permission required:** read_data_retention_settings

<h3 id="get-scoped-data-retention-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|level|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "scope": {
    "id": "string",
    "level": "string"
  },
  "settings": [
    {
      "age": 30,
      "how": "FULL",
      "what": "ALL"
    }
  ]
}
```

<h3 id="get-scoped-data-retention-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DataRetentionModel](#schemadataretentionmodel)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete scoped sampling settings

<a id="opIddelete_data_retention_resource"></a>

> Code samples

```bash
curl https://example.com/data_retention_settings/string/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /data_retention_settings/{level}/{id}`

**Permission required:** edit_data_retention_settings

<h3 id="delete-scoped-sampling-settings-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|level|path|string|true|none|
|id|path|string|true|none|

<h3 id="delete-scoped-sampling-settings-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update scoped data retention settings

<a id="opIdpatch_data_retention_resource"></a>

> Code samples

```bash
curl https://example.com/data_retention_settings/string/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "settings": [
      {
        "age": 30,
        "how": "FULL",
        "what": "ALL"
      }
    ]
  }'
```

`PATCH /data_retention_settings/{level}/{id}`

**Permission required:** edit_data_retention_settings

> Body parameter

```json
{
  "settings": [
    {
      "age": 30,
      "how": "FULL",
      "what": "ALL"
    }
  ]
}
```

<h3 id="update-scoped-data-retention-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|level|path|string|true|none|
|id|path|string|true|none|
|body|body|[DataRetentionModelPatch](#schemadataretentionmodelpatch)|true|none|
|» settings|body|[[DataRetentionAtomModel](#schemadataretentionatommodel)]|false|none|

> Example responses

> 200 Response

```json
{
  "scope": {
    "id": "string",
    "level": "string"
  },
  "settings": [
    {
      "age": 30,
      "how": "FULL",
      "what": "ALL"
    }
  ]
}
```

<h3 id="update-scoped-data-retention-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DataRetentionModel](#schemadataretentionmodel)|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-reports">reports</h1>

Report manipulation endpoint

## Get all reports

<a id="opIdget_reports_resource"></a>

> Code samples

```bash
curl https://example.com/reports \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /reports`

Return the list of reports

**Permission required:** read_reports

<h3 id="get-all-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|

> Example responses

> 200 Response

```json
[
  {
    "annotations": {
      "add_text": false,
      "include": false
    },
    "automation_blockers": {
      "include": false
    },
    "automation_score": {
      "include": false
    },
    "automation_what_if": {
      "include": false
    },
    "cover": {
      "include": false
    },
    "documents": [
      "abcdef123456789abcdef123"
    ],
    "elapse_time": {
      "include": false
    },
    "evaluations": {
      "additional_column": "string",
      "include": false
    },
    "field_automation": {
      "include": false
    },
    "inboxes": [
      "abcdef123456789abcdef123"
    ],
    "lines": {
      "include": false
    },
    "metadata": {
      "columns": [
        "string"
      ],
      "fields": {
        "annotations": [
          "string"
        ],
        "lines": [
          "string"
        ],
        "meta_information": [
          "string"
        ]
      },
      "include": false,
      "rename": {}
    },
    "name": "string",
    "page_classification": {
      "include": false
    },
    "projects": [
      "abcdef123456789abcdef123"
    ],
    "sections": {
      "include": false
    },
    "separator": "|",
    "sources": [
      "human",
      "machine"
    ],
    "text": {
      "include": false
    },
    "version_name": "string",
    "id": "string"
  }
]
```

<h3 id="get-all-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Permission insufficient|None|

<h3 id="get-all-reports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReportModelGet](#schemareportmodelget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Create report

<a id="opIdpost_reports_resource"></a>

> Code samples

```bash
curl https://example.com/reports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "annotations": {
      "add_text": false,
      "include": false
    },
    "automation_blockers": {
      "include": false
    },
    "automation_score": {
      "include": false
    },
    "automation_what_if": {
      "include": false
    },
    "cover": {
      "include": false
    },
    "documents": [
      "abcdef123456789abcdef123"
    ],
    "elapse_time": {
      "include": false
    },
    "evaluations": {
      "additional_column": "string",
      "include": false
    },
    "field_automation": {
      "include": false
    },
    "inboxes": [
      "abcdef123456789abcdef123"
    ],
    "lines": {
      "include": false
    },
    "metadata": {
      "columns": [
        "string"
      ],
      "fields": {
        "annotations": [
          "string"
        ],
        "lines": [
          "string"
        ],
        "meta_information": [
          "string"
        ]
      },
      "include": false,
      "rename": {}
    },
    "name": "string",
    "page_classification": {
      "include": false
    },
    "projects": [
      "abcdef123456789abcdef123"
    ],
    "sections": {
      "include": false
    },
    "separator": "|",
    "sources": [
      "human",
      "machine"
    ],
    "text": {
      "include": false
    },
    "version_name": "string"
  }'
```

`POST /reports`

Create a new report

**Permission required:** edit_reports

> Body parameter

```json
{
  "annotations": {
    "add_text": false,
    "include": false
  },
  "automation_blockers": {
    "include": false
  },
  "automation_score": {
    "include": false
  },
  "automation_what_if": {
    "include": false
  },
  "cover": {
    "include": false
  },
  "documents": [
    "abcdef123456789abcdef123"
  ],
  "elapse_time": {
    "include": false
  },
  "evaluations": {
    "additional_column": "string",
    "include": false
  },
  "field_automation": {
    "include": false
  },
  "inboxes": [
    "abcdef123456789abcdef123"
  ],
  "lines": {
    "include": false
  },
  "metadata": {
    "columns": [
      "string"
    ],
    "fields": {
      "annotations": [
        "string"
      ],
      "lines": [
        "string"
      ],
      "meta_information": [
        "string"
      ]
    },
    "include": false,
    "rename": {}
  },
  "name": "string",
  "page_classification": {
    "include": false
  },
  "projects": [
    "abcdef123456789abcdef123"
  ],
  "sections": {
    "include": false
  },
  "separator": "|",
  "sources": [
    "human",
    "machine"
  ],
  "text": {
    "include": false
  },
  "version_name": "string"
}
```

<h3 id="create-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|body|body|[ReportModelPost](#schemareportmodelpost)|true|none|
|» annotations|body|[AnnotationOptions](#schemaannotationoptions)|false|none|
|» automation_blockers|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» automation_score|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» automation_what_if|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» cover|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» documents|body|[string]|false|none|
|» elapse_time|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» evaluations|body|[EvaluationsOptions](#schemaevaluationsoptions)|false|none|
|» field_automation|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» inboxes|body|[string]|false|none|
|» lines|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» metadata|body|[MetadataOptions](#schemametadataoptions)|false|none|
|» name|body|string|false|none|
|» page_classification|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» projects|body|[string]|false|none|
|» sections|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» separator|body|string|false|none|
|» sources|body|[string]|false|none|
|» text|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» version_name|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sources|human|
|» sources|machine|

> Example responses

> 201 Response

```json
{
  "annotations": {
    "add_text": false,
    "include": false
  },
  "automation_blockers": {
    "include": false
  },
  "automation_score": {
    "include": false
  },
  "automation_what_if": {
    "include": false
  },
  "cover": {
    "include": false
  },
  "documents": [
    "abcdef123456789abcdef123"
  ],
  "elapse_time": {
    "include": false
  },
  "evaluations": {
    "additional_column": "string",
    "include": false
  },
  "field_automation": {
    "include": false
  },
  "inboxes": [
    "abcdef123456789abcdef123"
  ],
  "lines": {
    "include": false
  },
  "metadata": {
    "columns": [
      "string"
    ],
    "fields": {
      "annotations": [
        "string"
      ],
      "lines": [
        "string"
      ],
      "meta_information": [
        "string"
      ]
    },
    "include": false,
    "rename": {}
  },
  "name": "string",
  "page_classification": {
    "include": false
  },
  "projects": [
    "abcdef123456789abcdef123"
  ],
  "sections": {
    "include": false
  },
  "separator": "|",
  "sources": [
    "human",
    "machine"
  ],
  "text": {
    "include": false
  },
  "version_name": "string",
  "id": "string"
}
```

<h3 id="create-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[ReportModelGet](#schemareportmodelget)|
|403|Forbidden|Permission insufficient|None|
|405|Method Not Allowed|Missing fields|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Generate report based on input

<a id="opIdpost_generate_report_resource"></a>

> Code samples

```bash
curl https://example.com/reports/generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "annotations": {
      "add_text": false,
      "include": false
    },
    "automation_blockers": {
      "include": false
    },
    "automation_score": {
      "include": false
    },
    "automation_what_if": {
      "include": false
    },
    "cover": {
      "include": false
    },
    "documents": [
      "abcdef123456789abcdef123"
    ],
    "elapse_time": {
      "include": false
    },
    "evaluations": {
      "additional_column": "string",
      "include": false
    },
    "field_automation": {
      "include": false
    },
    "inboxes": [
      "abcdef123456789abcdef123"
    ],
    "lines": {
      "include": false
    },
    "metadata": {
      "columns": [
        "string"
      ],
      "fields": {
        "annotations": [
          "string"
        ],
        "lines": [
          "string"
        ],
        "meta_information": [
          "string"
        ]
      },
      "include": false,
      "rename": {}
    },
    "name": "string",
    "page_classification": {
      "include": false
    },
    "projects": [
      "abcdef123456789abcdef123"
    ],
    "sections": {
      "include": false
    },
    "separator": "|",
    "sources": [
      "human",
      "machine"
    ],
    "text": {
      "include": false
    },
    "version_name": "string",
    "delivery_method": "email",
    "email": "string",
    "end_date": "1970-01-01T00:00:00Z",
    "start_date": "1970-01-01T00:00:00Z"
  }'
```

`POST /reports/generate`

**Note**: start_date and end_date filter on status update

**Permission required:** read_reports

> Body parameter

```json
{
  "annotations": {
    "add_text": false,
    "include": false
  },
  "automation_blockers": {
    "include": false
  },
  "automation_score": {
    "include": false
  },
  "automation_what_if": {
    "include": false
  },
  "cover": {
    "include": false
  },
  "documents": [
    "abcdef123456789abcdef123"
  ],
  "elapse_time": {
    "include": false
  },
  "evaluations": {
    "additional_column": "string",
    "include": false
  },
  "field_automation": {
    "include": false
  },
  "inboxes": [
    "abcdef123456789abcdef123"
  ],
  "lines": {
    "include": false
  },
  "metadata": {
    "columns": [
      "string"
    ],
    "fields": {
      "annotations": [
        "string"
      ],
      "lines": [
        "string"
      ],
      "meta_information": [
        "string"
      ]
    },
    "include": false,
    "rename": {}
  },
  "name": "string",
  "page_classification": {
    "include": false
  },
  "projects": [
    "abcdef123456789abcdef123"
  ],
  "sections": {
    "include": false
  },
  "separator": "|",
  "sources": [
    "human",
    "machine"
  ],
  "text": {
    "include": false
  },
  "version_name": "string",
  "delivery_method": "email",
  "email": "string",
  "end_date": "1970-01-01T00:00:00Z",
  "start_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="generate-report-based-on-input-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReportModelFullGenerate](#schemareportmodelfullgenerate)|true|none|
|» annotations|body|[AnnotationOptions](#schemaannotationoptions)|false|none|
|» automation_blockers|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» automation_score|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» automation_what_if|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» cover|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» documents|body|[string]|false|none|
|» elapse_time|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» evaluations|body|[EvaluationsOptions](#schemaevaluationsoptions)|false|none|
|» field_automation|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» inboxes|body|[string]|false|none|
|» lines|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» metadata|body|[MetadataOptions](#schemametadataoptions)|false|none|
|» name|body|string|false|none|
|» page_classification|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» projects|body|[string]|false|none|
|» sections|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» separator|body|string|false|none|
|» sources|body|[string]|false|none|
|» text|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» version_name|body|string|false|none|
|» delivery_method|body|string|false|none|
|» email|body|string|false|none|
|» end_date|body|string(date-time)|false|none|
|» start_date|body|string(date-time)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sources|human|
|» sources|machine|
|» delivery_method|email|
|» delivery_method|download|

<h3 id="generate-report-based-on-input-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Permission insufficient|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Get report

<a id="opIdget_report_resource"></a>

> Code samples

```bash
curl https://example.com/reports/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /reports/{report_id}`

Return report attributes

**Permission required:** read_reports

<h3 id="get-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|report_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "add_text": false,
    "include": false
  },
  "automation_blockers": {
    "include": false
  },
  "automation_score": {
    "include": false
  },
  "automation_what_if": {
    "include": false
  },
  "cover": {
    "include": false
  },
  "documents": [
    "abcdef123456789abcdef123"
  ],
  "elapse_time": {
    "include": false
  },
  "evaluations": {
    "additional_column": "string",
    "include": false
  },
  "field_automation": {
    "include": false
  },
  "inboxes": [
    "abcdef123456789abcdef123"
  ],
  "lines": {
    "include": false
  },
  "metadata": {
    "columns": [
      "string"
    ],
    "fields": {
      "annotations": [
        "string"
      ],
      "lines": [
        "string"
      ],
      "meta_information": [
        "string"
      ]
    },
    "include": false,
    "rename": {}
  },
  "name": "string",
  "page_classification": {
    "include": false
  },
  "projects": [
    "abcdef123456789abcdef123"
  ],
  "sections": {
    "include": false
  },
  "separator": "|",
  "sources": [
    "human",
    "machine"
  ],
  "text": {
    "include": false
  },
  "version_name": "string",
  "id": "string"
}
```

<h3 id="get-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReportModelGet](#schemareportmodelget)|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Report Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Delete a report

<a id="opIddelete_report_resource"></a>

> Code samples

```bash
curl https://example.com/reports/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /reports/{report_id}`

Delete the given report.

**WARNING** This will completely remove the report, this is not recoverable

**Permission required:** edit_reports

<h3 id="delete-a-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|report_id|path|string|true|none|

<h3 id="delete-a-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Report Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Update report

<a id="opIdpatch_report_resource"></a>

> Code samples

```bash
curl https://example.com/reports/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "annotations": {
      "add_text": false,
      "include": false
    },
    "automation_blockers": {
      "include": false
    },
    "automation_score": {
      "include": false
    },
    "automation_what_if": {
      "include": false
    },
    "cover": {
      "include": false
    },
    "documents": [
      "abcdef123456789abcdef123"
    ],
    "elapse_time": {
      "include": false
    },
    "evaluations": {
      "additional_column": "string",
      "include": false
    },
    "field_automation": {
      "include": false
    },
    "inboxes": [
      "abcdef123456789abcdef123"
    ],
    "lines": {
      "include": false
    },
    "metadata": {
      "columns": [
        "string"
      ],
      "fields": {
        "annotations": [
          "string"
        ],
        "lines": [
          "string"
        ],
        "meta_information": [
          "string"
        ]
      },
      "include": false,
      "rename": {}
    },
    "name": "string",
    "page_classification": {
      "include": false
    },
    "projects": [
      "abcdef123456789abcdef123"
    ],
    "sections": {
      "include": false
    },
    "separator": "|",
    "sources": [
      "human",
      "machine"
    ],
    "text": {
      "include": false
    },
    "version_name": "string"
  }'
```

`PATCH /reports/{report_id}`

Modify the report with the given arguments

**Permission required:** edit_reports

> Body parameter

```json
{
  "annotations": {
    "add_text": false,
    "include": false
  },
  "automation_blockers": {
    "include": false
  },
  "automation_score": {
    "include": false
  },
  "automation_what_if": {
    "include": false
  },
  "cover": {
    "include": false
  },
  "documents": [
    "abcdef123456789abcdef123"
  ],
  "elapse_time": {
    "include": false
  },
  "evaluations": {
    "additional_column": "string",
    "include": false
  },
  "field_automation": {
    "include": false
  },
  "inboxes": [
    "abcdef123456789abcdef123"
  ],
  "lines": {
    "include": false
  },
  "metadata": {
    "columns": [
      "string"
    ],
    "fields": {
      "annotations": [
        "string"
      ],
      "lines": [
        "string"
      ],
      "meta_information": [
        "string"
      ]
    },
    "include": false,
    "rename": {}
  },
  "name": "string",
  "page_classification": {
    "include": false
  },
  "projects": [
    "abcdef123456789abcdef123"
  ],
  "sections": {
    "include": false
  },
  "separator": "|",
  "sources": [
    "human",
    "machine"
  ],
  "text": {
    "include": false
  },
  "version_name": "string"
}
```

<h3 id="update-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|report_id|path|string|true|none|
|body|body|[ReportModelPost](#schemareportmodelpost)|true|none|
|» annotations|body|[AnnotationOptions](#schemaannotationoptions)|false|none|
|» automation_blockers|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» automation_score|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» automation_what_if|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» cover|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» documents|body|[string]|false|none|
|» elapse_time|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» evaluations|body|[EvaluationsOptions](#schemaevaluationsoptions)|false|none|
|» field_automation|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» inboxes|body|[string]|false|none|
|» lines|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» metadata|body|[MetadataOptions](#schemametadataoptions)|false|none|
|» name|body|string|false|none|
|» page_classification|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» projects|body|[string]|false|none|
|» sections|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» separator|body|string|false|none|
|» sources|body|[string]|false|none|
|» text|body|[SimpleInclude](#schemasimpleinclude)|false|none|
|» version_name|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sources|human|
|» sources|machine|

> Example responses

> 200 Response

```json
{
  "annotations": {
    "add_text": false,
    "include": false
  },
  "automation_blockers": {
    "include": false
  },
  "automation_score": {
    "include": false
  },
  "automation_what_if": {
    "include": false
  },
  "cover": {
    "include": false
  },
  "documents": [
    "abcdef123456789abcdef123"
  ],
  "elapse_time": {
    "include": false
  },
  "evaluations": {
    "additional_column": "string",
    "include": false
  },
  "field_automation": {
    "include": false
  },
  "inboxes": [
    "abcdef123456789abcdef123"
  ],
  "lines": {
    "include": false
  },
  "metadata": {
    "columns": [
      "string"
    ],
    "fields": {
      "annotations": [
        "string"
      ],
      "lines": [
        "string"
      ],
      "meta_information": [
        "string"
      ]
    },
    "include": false,
    "rename": {}
  },
  "name": "string",
  "page_classification": {
    "include": false
  },
  "projects": [
    "abcdef123456789abcdef123"
  ],
  "sections": {
    "include": false
  },
  "separator": "|",
  "sources": [
    "human",
    "machine"
  ],
  "text": {
    "include": false
  },
  "version_name": "string"
}
```

<h3 id="update-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReportModelPost](#schemareportmodelpost)|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Report Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## Generate report based on report id

<a id="opIdpost_generate_report_id_resource"></a>

> Code samples

```bash
curl 'https://example.com/reports/string/generate?delivery_method=download' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /reports/{report_id}/generate`

**Note**: start_date and end_date filter on status update

**Permission required:** read_reports

<h3 id="generate-report-based-on-report-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delivery_method|query|string|true|none|
|email|query|string|false|none|
|start_date|query|string(date-time)|false|none|
|end_date|query|string(date-time)|false|none|
|report_id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|delivery_method|download|
|delivery_method|email|

<h3 id="generate-report-based-on-report-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-about">about</h1>

About the contract.fit solution

## get_release_notes

<a id="opIdget_release_notes"></a>

> Code samples

```bash
curl https://example.com/about/release_notes \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /about/release_notes`

<h3 id="getreleasenotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## get_version

<a id="opIdget_version"></a>

> Code samples

```bash
curl https://example.com/about/version \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /about/version`

<h3 id="getversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

<h1 id="contractfit-api-tenant">tenant</h1>

tenant manipulation endpoints

## delete_tenant_resource

<a id="opIddelete_tenant_resource"></a>

> Code samples

```bash
curl https://example.com/tenant \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /tenant`

<h3 id="deletetenantresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Permission insufficient|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

## patch_activate_tenant_resource

<a id="opIdpatch_activate_tenant_resource"></a>

> Code samples

```bash
curl https://example.com/tenant/activate \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "code": 0,
    "email": "string"
  }'
```

`PATCH /tenant/activate`

> Body parameter

```json
{
  "code": 0,
  "email": "string"
}
```

<h3 id="patchactivatetenantresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|body|body|[TenantModelPatch](#schematenantmodelpatch)|true|none|
|» code|body|integer|false|none|
|» email|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patchactivatetenantresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TenantModelGet](#schematenantmodelget)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Invalid input|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, token
</aside>

# Schemas

<h2 id="tocS_APIKeyModel">APIKeyModel</h2>
<!-- backwards compatibility -->
<a id="schemaapikeymodel"></a>
<a id="schema_APIKeyModel"></a>
<a id="tocSapikeymodel"></a>
<a id="tocsapikeymodel"></a>

```json
{
  "active": true,
  "expire_at": "1970-01-01T00:00:00Z",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "token": "string",
  "user": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|Is the API Key active or not|
|expire_at|string(date-time)|false|none|The date at which the API Key will expire|
|roles|[[TokenRoleModel](#schematokenrolemodel)]|false|none|the user roles|
|token|string|true|none|Token value|
|user|string|true|none|Bearer user|

<h2 id="tocS_APIKeyRequest">APIKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyrequest"></a>
<a id="schema_APIKeyRequest"></a>
<a id="tocSapikeyrequest"></a>
<a id="tocsapikeyrequest"></a>

```json
{
  "active": true,
  "expire_at": "1970-01-01T00:00:00Z",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "user": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|Is the API Key active or not|
|expire_at|string(date-time)|false|none|Expiration date|
|roles|[[TokenRoleModel](#schematokenrolemodel)]|true|none|Roles to grant to this token bearer|
|user|string|true|none|User to give to the bearer|

<h2 id="tocS_AggregationPipelinePost">AggregationPipelinePost</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationpipelinepost"></a>
<a id="schema_AggregationPipelinePost"></a>
<a id="tocSaggregationpipelinepost"></a>
<a id="tocsaggregationpipelinepost"></a>

```json
{
  "filter": {
    "_id": {
      "$oid": "abcdef123456789abcdef123"
    },
    "inbox": {
      "$in": [
        {
          "$oid": "abcdef123456789abcdef123"
        }
      ]
    },
    "timing_fields": {
      "timeFrom": "string",
      "timeTo": "string"
    },
    "timings": {
      "done_time": {
        "$gt": "1970-01-01T00:00:00Z",
        "$gte": "1970-01-01T00:00:00Z",
        "$lt": "1970-01-01T00:00:00Z",
        "$lte": "1970-01-01T00:00:00Z"
      },
      "feedback_time": {
        "$gt": "1970-01-01T00:00:00Z",
        "$gte": "1970-01-01T00:00:00Z",
        "$lt": "1970-01-01T00:00:00Z",
        "$lte": "1970-01-01T00:00:00Z"
      },
      "receive_time": {
        "$gt": "1970-01-01T00:00:00Z",
        "$gte": "1970-01-01T00:00:00Z",
        "$lt": "1970-01-01T00:00:00Z",
        "$lte": "1970-01-01T00:00:00Z"
      },
      "review_start_time": {
        "$gt": "1970-01-01T00:00:00Z",
        "$gte": "1970-01-01T00:00:00Z",
        "$lt": "1970-01-01T00:00:00Z",
        "$lte": "1970-01-01T00:00:00Z"
      },
      "start_time": {
        "$gt": "1970-01-01T00:00:00Z",
        "$gte": "1970-01-01T00:00:00Z",
        "$lt": "1970-01-01T00:00:00Z",
        "$lte": "1970-01-01T00:00:00Z"
      }
    }
  },
  "type": "inbox"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[FilterModel](#schemafiltermodel)|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|inbox|
|type|get-todo-count|
|type|get-todo-escalated-count|
|type|get-oldest-todo|
|type|get-oldest-escalated-todo|
|type|get-finished-me|
|type|get-finished-team|
|type|next-document|
|type|prev-document|
|type|get-next-uuid|
|type|avg-time|

<h2 id="tocS_AnnotationOptions">AnnotationOptions</h2>
<!-- backwards compatibility -->
<a id="schemaannotationoptions"></a>
<a id="schema_AnnotationOptions"></a>
<a id="tocSannotationoptions"></a>
<a id="tocsannotationoptions"></a>

```json
{
  "add_text": false,
  "include": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_text|boolean|false|none|none|
|include|boolean|false|none|none|

<h2 id="tocS_AuthModel">AuthModel</h2>
<!-- backwards compatibility -->
<a id="schemaauthmodel"></a>
<a id="schema_AuthModel"></a>
<a id="tocSauthmodel"></a>
<a id="tocsauthmodel"></a>

```json
{
  "password": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|the user password|
|username|string|true|none|the user username|

<h2 id="tocS_ChangePasswordModelPost">ChangePasswordModelPost</h2>
<!-- backwards compatibility -->
<a id="schemachangepasswordmodelpost"></a>
<a id="schema_ChangePasswordModelPost"></a>
<a id="tocSchangepasswordmodelpost"></a>
<a id="tocschangepasswordmodelpost"></a>

```json
{
  "new_password": "string",
  "old_password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new_password|string|false|none|the new user's password|
|old_password|string|false|none|the old user's password|

<h2 id="tocS_ColumnsHeaders">ColumnsHeaders</h2>
<!-- backwards compatibility -->
<a id="schemacolumnsheaders"></a>
<a id="schema_ColumnsHeaders"></a>
<a id="tocScolumnsheaders"></a>
<a id="tocscolumnsheaders"></a>

```json
{
  "columns_headers": [
    {
      "checked": true,
      "field": "string",
      "label": "string"
    }
  ],
  "inline_headers": [
    {
      "checked": true,
      "field": "string",
      "label": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns_headers|[[SequenceColumnsAtomModel](#schemasequencecolumnsatommodel)]|false|none|none|
|inline_headers|[[SequenceColumnsAtomModel](#schemasequencecolumnsatommodel)]|false|none|none|

<h2 id="tocS_ConnectionModelGet">ConnectionModelGet</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionmodelget"></a>
<a id="schema_ConnectionModelGet"></a>
<a id="tocSconnectionmodelget"></a>
<a id="tocsconnectionmodelget"></a>

```json
{
  "event": "document_predict",
  "integration": "abcdef123456789abcdef123",
  "routing": [
    {
      "and_conditions": {},
      "target": "string"
    }
  ],
  "scope": "abcdef123456789abcdef123",
  "what": "original",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|string|true|none|none|
|integration|string|true|none|none|
|routing|[[RoutingAtom](#schemaroutingatom)]|false|none|none|
|scope|string|false|none|none|
|what|string|true|none|none|
|id|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event|document_predict|
|event|document_evaluate|
|event|document_text|
|event|document_split|
|event|document_delete|
|what|original|
|what|reply_to|
|what|ready|
|what|submit|

<h2 id="tocS_ConnectionModelPost">ConnectionModelPost</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionmodelpost"></a>
<a id="schema_ConnectionModelPost"></a>
<a id="tocSconnectionmodelpost"></a>
<a id="tocsconnectionmodelpost"></a>

```json
{
  "event": "document_predict",
  "integration": "abcdef123456789abcdef123",
  "routing": [
    {
      "and_conditions": {},
      "target": "string"
    }
  ],
  "scope": "abcdef123456789abcdef123",
  "what": "original"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|string|true|none|none|
|integration|string|true|none|none|
|routing|[[RoutingAtom](#schemaroutingatom)]|false|none|none|
|scope|string|false|none|none|
|what|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event|document_predict|
|event|document_evaluate|
|event|document_text|
|event|document_split|
|event|document_delete|
|what|original|
|what|reply_to|
|what|ready|
|what|submit|

<h2 id="tocS_CustomAtom">CustomAtom</h2>
<!-- backwards compatibility -->
<a id="schemacustomatom"></a>
<a id="schema_CustomAtom"></a>
<a id="tocScustomatom"></a>
<a id="tocscustomatom"></a>

```json
{}
```

<h2 id="tocS_CustomOutputPost">CustomOutputPost</h2>
<!-- backwards compatibility -->
<a id="schemacustomoutputpost"></a>
<a id="schema_CustomOutputPost"></a>
<a id="tocScustomoutputpost"></a>
<a id="tocscustomoutputpost"></a>

```json
{
  "custom": {},
  "excel": {
    "add_automation_blockers": false,
    "add_confidence": false,
    "add_text": true,
    "enable_key_value": false,
    "multiple_value_separator": ";"
  },
  "filter": {
    "end_date": "1970-01-01T00:00:00Z",
    "list": [
      "string"
    ],
    "start_date": "1970-01-01T00:00:00Z",
    "type": "project"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom|[CustomAtom](#schemacustomatom)|false|none|none|
|excel|[ExcelAtom](#schemaexcelatom)|false|none|none|
|filter|[FilterAtom](#schemafilteratom)|false|none|none|

<h2 id="tocS_DashboardSettingsModelGet">DashboardSettingsModelGet</h2>
<!-- backwards compatibility -->
<a id="schemadashboardsettingsmodelget"></a>
<a id="schema_DashboardSettingsModelGet"></a>
<a id="tocSdashboardsettingsmodelget"></a>
<a id="tocsdashboardsettingsmodelget"></a>

```json
{
  "autolearning": true,
  "dashboard_timeout": 0,
  "default_date_range": {},
  "default_inbox_size": {},
  "default_inbox_sorting": {},
  "flexible_filters": [
    {}
  ],
  "navigation_menu": {},
  "process_unreadable": true,
  "sequence_columns_of_inbox": {
    "columns_headers": [
      {
        "checked": true,
        "field": "string",
        "label": "string"
      }
    ],
    "inline_headers": [
      {
        "checked": true,
        "field": "string",
        "label": "string"
      }
    ]
  },
  "show_digital_annotations": true,
  "show_filters": {},
  "show_inbox_actions": {},
  "studio_format_options": {},
  "upload_options": {},
  "welcome_counters": true,
  "welcome_counters_options": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autolearning|boolean|false|none|none|
|dashboard_timeout|integer|false|none|none|
|default_date_range|object|false|none|none|
|default_inbox_size|object|false|none|none|
|default_inbox_sorting|object|false|none|none|
|flexible_filters|[object]|false|none|none|
|navigation_menu|object|false|none|none|
|process_unreadable|boolean|false|none|none|
|sequence_columns_of_inbox|[ColumnsHeaders](#schemacolumnsheaders)|false|none|none|
|show_digital_annotations|boolean|false|none|none|
|show_filters|object|false|none|none|
|show_inbox_actions|object|false|none|none|
|studio_format_options|object|false|none|none|
|upload_options|object|false|none|none|
|welcome_counters|boolean|false|none|none|
|welcome_counters_options|object|false|none|none|

<h2 id="tocS_DashboardSettingsModelPatch">DashboardSettingsModelPatch</h2>
<!-- backwards compatibility -->
<a id="schemadashboardsettingsmodelpatch"></a>
<a id="schema_DashboardSettingsModelPatch"></a>
<a id="tocSdashboardsettingsmodelpatch"></a>
<a id="tocsdashboardsettingsmodelpatch"></a>

```json
{
  "scope": "string",
  "settings": {
    "autolearning": true,
    "dashboard_timeout": 0,
    "default_date_range": {},
    "default_inbox_size": {},
    "default_inbox_sorting": {},
    "flexible_filters": [
      {}
    ],
    "navigation_menu": {},
    "process_unreadable": true,
    "sequence_columns_of_inbox": {
      "columns_headers": [
        {
          "checked": true,
          "field": "string",
          "label": "string"
        }
      ],
      "inline_headers": [
        {
          "checked": true,
          "field": "string",
          "label": "string"
        }
      ]
    },
    "show_digital_annotations": true,
    "show_filters": {},
    "show_inbox_actions": {},
    "studio_format_options": {},
    "upload_options": {},
    "welcome_counters": true,
    "welcome_counters_options": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|string|false|none|none|
|settings|[DashboardSettingsModelGet](#schemadashboardsettingsmodelget)|false|none|none|

<h2 id="tocS_DataRetentionAtomModel">DataRetentionAtomModel</h2>
<!-- backwards compatibility -->
<a id="schemadataretentionatommodel"></a>
<a id="schema_DataRetentionAtomModel"></a>
<a id="tocSdataretentionatommodel"></a>
<a id="tocsdataretentionatommodel"></a>

```json
{
  "age": 30,
  "how": "FULL",
  "what": "ALL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|age|integer|false|none|none|
|how|string|false|none|none|
|what|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|how|FULL|
|how|SOURCE_FILES|
|what|ALL|
|what|DONE|

<h2 id="tocS_DataRetentionModel">DataRetentionModel</h2>
<!-- backwards compatibility -->
<a id="schemadataretentionmodel"></a>
<a id="schema_DataRetentionModel"></a>
<a id="tocSdataretentionmodel"></a>
<a id="tocsdataretentionmodel"></a>

```json
{
  "scope": {
    "id": "string",
    "level": "string"
  },
  "settings": [
    {
      "age": 30,
      "how": "FULL",
      "what": "ALL"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|[ScopeModel](#schemascopemodel)|false|none|none|
|settings|[[DataRetentionAtomModel](#schemadataretentionatommodel)]|false|none|none|

<h2 id="tocS_DataRetentionModelPatch">DataRetentionModelPatch</h2>
<!-- backwards compatibility -->
<a id="schemadataretentionmodelpatch"></a>
<a id="schema_DataRetentionModelPatch"></a>
<a id="tocSdataretentionmodelpatch"></a>
<a id="tocsdataretentionmodelpatch"></a>

```json
{
  "settings": [
    {
      "age": 30,
      "how": "FULL",
      "what": "ALL"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|[[DataRetentionAtomModel](#schemadataretentionatommodel)]|false|none|none|

<h2 id="tocS_DocumentIds">DocumentIds</h2>
<!-- backwards compatibility -->
<a id="schemadocumentids"></a>
<a id="schema_DocumentIds"></a>
<a id="tocSdocumentids"></a>
<a id="tocsdocumentids"></a>

```json
{
  "document_ids": [
    "abcdef123456789abcdef123"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_ids|[string]|false|none|none|

<h2 id="tocS_DocumentModelGet">DocumentModelGet</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmodelget"></a>
<a id="schema_DocumentModelGet"></a>
<a id="tocSdocumentmodelget"></a>
<a id="tocsdocumentmodelget"></a>

```json
{
  "escalate": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "feedback": {},
  "files": [
    {
      "embedded_attachment": true,
      "filehash": "string",
      "filename": "string",
      "leaf": true,
      "page": 0,
      "page_count": 0
    }
  ],
  "flag_for_review": true,
  "id": "string",
  "inbox": "abcdef123456789abcdef123",
  "last_version": "string",
  "lock": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "meta_information": {},
  "opened_by": [
    {
      "by": "abcdef123456789abcdef123",
      "since": "1970-01-01T00:00:00Z",
      "value": true
    }
  ],
  "original_filename": "string",
  "page_count": 0,
  "prediction": {},
  "reject": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "status_data": {
    "archived": true,
    "data": true,
    "escalate": true,
    "feedback": true,
    "lock": true,
    "ready_accepted": true,
    "ready_attempts": 0,
    "reject": true,
    "reject_accepted": true,
    "reject_attempts": 0,
    "sampling": true,
    "submit_accepted": true,
    "submit_attempts": 0,
    "success": true
  },
  "submitted": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "timings": {
    "done_time": "1970-01-01T00:00:00Z",
    "feedback_time": "1970-01-01T00:00:00Z",
    "processing_period": 0,
    "receive_time": "1970-01-01T00:00:00Z",
    "start_time": "1970-01-01T00:00:00Z",
    "submit_time": "1970-01-01T00:00:00Z"
  },
  "usage_data": {},
  "versions": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|escalate|[StateModelGet](#schemastatemodelget)|false|none|none|
|feedback|object|false|none|none|
|files|[[FileModelGet](#schemafilemodelget)]|false|none|none|
|flag_for_review|boolean|false|none|none|
|id|string|true|none|none|
|inbox|string|true|none|none|
|last_version|string|false|none|none|
|lock|[StateModelGet](#schemastatemodelget)|false|none|none|
|meta_information|object|false|none|none|
|opened_by|[[StateModelGet](#schemastatemodelget)]|false|none|none|
|original_filename|string|true|none|none|
|page_count|integer|true|none|none|
|prediction|object|false|none|none|
|reject|[StateModelGet](#schemastatemodelget)|false|none|none|
|status_data|[StatusDataModel](#schemastatusdatamodel)|false|none|none|
|submitted|[StateModelGet](#schemastatemodelget)|false|none|none|
|timings|[TimingsModelGet](#schematimingsmodelget)|false|none|none|
|usage_data|object|false|none|none|
|versions|[object]|false|none|none|

<h2 id="tocS_DocumentModelPaginated">DocumentModelPaginated</h2>
<!-- backwards compatibility -->
<a id="schemadocumentmodelpaginated"></a>
<a id="schema_DocumentModelPaginated"></a>
<a id="tocSdocumentmodelpaginated"></a>
<a id="tocsdocumentmodelpaginated"></a>

```json
{
  "page": 0,
  "per_page": 0,
  "results": [
    {
      "escalate": {
        "by": "abcdef123456789abcdef123",
        "since": "1970-01-01T00:00:00Z",
        "value": true
      },
      "feedback": {},
      "files": [
        {
          "embedded_attachment": true,
          "filehash": "string",
          "filename": "string",
          "leaf": true,
          "page": 0,
          "page_count": 0
        }
      ],
      "flag_for_review": true,
      "id": "string",
      "inbox": "abcdef123456789abcdef123",
      "last_version": "string",
      "lock": {
        "by": "abcdef123456789abcdef123",
        "since": "1970-01-01T00:00:00Z",
        "value": true
      },
      "meta_information": {},
      "opened_by": [
        {
          "by": "abcdef123456789abcdef123",
          "since": "1970-01-01T00:00:00Z",
          "value": true
        }
      ],
      "original_filename": "string",
      "page_count": 0,
      "prediction": {},
      "reject": {
        "by": "abcdef123456789abcdef123",
        "since": "1970-01-01T00:00:00Z",
        "value": true
      },
      "status_data": {
        "archived": true,
        "data": true,
        "escalate": true,
        "feedback": true,
        "lock": true,
        "ready_accepted": true,
        "ready_attempts": 0,
        "reject": true,
        "reject_accepted": true,
        "reject_attempts": 0,
        "sampling": true,
        "submit_accepted": true,
        "submit_attempts": 0,
        "success": true
      },
      "submitted": {
        "by": "abcdef123456789abcdef123",
        "since": "1970-01-01T00:00:00Z",
        "value": true
      },
      "timings": {
        "done_time": "1970-01-01T00:00:00Z",
        "feedback_time": "1970-01-01T00:00:00Z",
        "processing_period": 0,
        "receive_time": "1970-01-01T00:00:00Z",
        "start_time": "1970-01-01T00:00:00Z",
        "submit_time": "1970-01-01T00:00:00Z"
      },
      "usage_data": {},
      "versions": [
        {}
      ]
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|false|none|Current page number|
|per_page|integer|false|none|Number of results per page|
|results|[[DocumentModelGet](#schemadocumentmodelget)]|false|none|none|
|total|integer|false|none|Total number of results|

<h2 id="tocS_DocumentTypeModel">DocumentTypeModel</h2>
<!-- backwards compatibility -->
<a id="schemadocumenttypemodel"></a>
<a id="schema_DocumentTypeModel"></a>
<a id="tocSdocumenttypemodel"></a>
<a id="tocsdocumenttypemodel"></a>

```json
{
  "display_name": "string",
  "field_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|false|none|none|
|field_name|string|true|none|none|

<h2 id="tocS_DocumentTypeModelGet">DocumentTypeModelGet</h2>
<!-- backwards compatibility -->
<a id="schemadocumenttypemodelget"></a>
<a id="schema_DocumentTypeModelGet"></a>
<a id="tocSdocumenttypemodelget"></a>
<a id="tocsdocumenttypemodelget"></a>

```json
{
  "document_types": [
    {
      "display_name": "string",
      "field_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_types|[[DocumentTypeModel](#schemadocumenttypemodel)]|false|none|none|

<h2 id="tocS_EnrichmentModelPost">EnrichmentModelPost</h2>
<!-- backwards compatibility -->
<a id="schemaenrichmentmodelpost"></a>
<a id="schema_EnrichmentModelPost"></a>
<a id="tocSenrichmentmodelpost"></a>
<a id="tocsenrichmentmodelpost"></a>

```json
{}
```

<h2 id="tocS_EvaluationAtom">EvaluationAtom</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationatom"></a>
<a id="schema_EvaluationAtom"></a>
<a id="tocSevaluationatom"></a>
<a id="tocsevaluationatom"></a>

```json
{
  "gold": "string",
  "text": "string",
  "textual_coord": [
    0,
    0,
    0,
    0,
    0,
    0
  ],
  "visual_coord": [
    0,
    0,
    0,
    0,
    0,
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gold|string|true|none|none|
|text|string|true|none|none|
|textual_coord|[integer]|true|none|none|
|visual_coord|[integer]|false|none|none|

<h2 id="tocS_EvaluationsOptions">EvaluationsOptions</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationsoptions"></a>
<a id="schema_EvaluationsOptions"></a>
<a id="tocSevaluationsoptions"></a>
<a id="tocsevaluationsoptions"></a>

```json
{
  "additional_column": "string",
  "include": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_column|string|false|none|none|
|include|boolean|false|none|none|

<h2 id="tocS_ExcelAtom">ExcelAtom</h2>
<!-- backwards compatibility -->
<a id="schemaexcelatom"></a>
<a id="schema_ExcelAtom"></a>
<a id="tocSexcelatom"></a>
<a id="tocsexcelatom"></a>

```json
{
  "add_automation_blockers": false,
  "add_confidence": false,
  "add_text": true,
  "enable_key_value": false,
  "multiple_value_separator": ";"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_automation_blockers|boolean|false|none|none|
|add_confidence|boolean|false|none|none|
|add_text|boolean|false|none|none|
|enable_key_value|boolean|true|none|none|
|multiple_value_separator|string|false|none|none|

<h2 id="tocS_ExtraModel">ExtraModel</h2>
<!-- backwards compatibility -->
<a id="schemaextramodel"></a>
<a id="schema_ExtraModel"></a>
<a id="tocSextramodel"></a>
<a id="tocsextramodel"></a>

```json
{
  "entity_id": "spn:d6b4feb1-a0bb-408a-b813-6e4eba3e5fef",
  "specification_url": "https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/federationmetadata/2007-06/federationmetadata.xml"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|your entity id|
|specification_url|string|false|none|Federation metadata document|

<h2 id="tocS_FieldSettingsDictModel">FieldSettingsDictModel</h2>
<!-- backwards compatibility -->
<a id="schemafieldsettingsdictmodel"></a>
<a id="schema_FieldSettingsDictModel"></a>
<a id="tocSfieldsettingsdictmodel"></a>
<a id="tocsfieldsettingsdictmodel"></a>

```json
{
  "*": {
    "property1": {
      "default_value": "string",
      "expected_pattern": "string",
      "nested_field_patterns": {
        "*": {
          "property1": "string",
          "property2": "string"
        }
      },
      "override_default_patterns": true
    },
    "property2": {
      "default_value": "string",
      "expected_pattern": "string",
      "nested_field_patterns": {
        "*": {
          "property1": "string",
          "property2": "string"
        }
      },
      "override_default_patterns": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*|object|false|none|none|

<h2 id="tocS_FieldSettingsModel">FieldSettingsModel</h2>
<!-- backwards compatibility -->
<a id="schemafieldsettingsmodel"></a>
<a id="schema_FieldSettingsModel"></a>
<a id="tocSfieldsettingsmodel"></a>
<a id="tocsfieldsettingsmodel"></a>

```json
{
  "default_value": "string",
  "expected_pattern": "string",
  "nested_field_patterns": {
    "*": {
      "property1": "string",
      "property2": "string"
    }
  },
  "override_default_patterns": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_value|string|false|none|none|
|expected_pattern|string|false|none|none|
|nested_field_patterns|[SpanDictModel](#schemaspandictmodel)|false|none|none|
|override_default_patterns|boolean|false|none|none|

<h2 id="tocS_FieldsInMetadata">FieldsInMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafieldsinmetadata"></a>
<a id="schema_FieldsInMetadata"></a>
<a id="tocSfieldsinmetadata"></a>
<a id="tocsfieldsinmetadata"></a>

```json
{
  "annotations": [
    "string"
  ],
  "lines": [
    "string"
  ],
  "meta_information": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[string]|false|none|none|
|lines|[string]|false|none|none|
|meta_information|[string]|false|none|none|

<h2 id="tocS_FileModelGet">FileModelGet</h2>
<!-- backwards compatibility -->
<a id="schemafilemodelget"></a>
<a id="schema_FileModelGet"></a>
<a id="tocSfilemodelget"></a>
<a id="tocsfilemodelget"></a>

```json
{
  "embedded_attachment": true,
  "filehash": "string",
  "filename": "string",
  "leaf": true,
  "page": 0,
  "page_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embedded_attachment|boolean|false|none|none|
|filehash|string|false|none|none|
|filename|string|false|none|none|
|leaf|boolean|false|none|none|
|page|integer|false|none|none|
|page_count|integer|false|none|none|

<h2 id="tocS_FilterAtom">FilterAtom</h2>
<!-- backwards compatibility -->
<a id="schemafilteratom"></a>
<a id="schema_FilterAtom"></a>
<a id="tocSfilteratom"></a>
<a id="tocsfilteratom"></a>

```json
{
  "end_date": "1970-01-01T00:00:00Z",
  "list": [
    "string"
  ],
  "start_date": "1970-01-01T00:00:00Z",
  "type": "project"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_date|string(date-time)|false|none|none|
|list|[string]|false|none|none|
|start_date|string(date-time)|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|project|
|type|inbox|
|type|document|

<h2 id="tocS_FilterModel">FilterModel</h2>
<!-- backwards compatibility -->
<a id="schemafiltermodel"></a>
<a id="schema_FilterModel"></a>
<a id="tocSfiltermodel"></a>
<a id="tocsfiltermodel"></a>

```json
{
  "_id": {
    "$oid": "abcdef123456789abcdef123"
  },
  "inbox": {
    "$in": [
      {
        "$oid": "abcdef123456789abcdef123"
      }
    ]
  },
  "timing_fields": {
    "timeFrom": "string",
    "timeTo": "string"
  },
  "timings": {
    "done_time": {
      "$gt": "1970-01-01T00:00:00Z",
      "$gte": "1970-01-01T00:00:00Z",
      "$lt": "1970-01-01T00:00:00Z",
      "$lte": "1970-01-01T00:00:00Z"
    },
    "feedback_time": {
      "$gt": "1970-01-01T00:00:00Z",
      "$gte": "1970-01-01T00:00:00Z",
      "$lt": "1970-01-01T00:00:00Z",
      "$lte": "1970-01-01T00:00:00Z"
    },
    "receive_time": {
      "$gt": "1970-01-01T00:00:00Z",
      "$gte": "1970-01-01T00:00:00Z",
      "$lt": "1970-01-01T00:00:00Z",
      "$lte": "1970-01-01T00:00:00Z"
    },
    "review_start_time": {
      "$gt": "1970-01-01T00:00:00Z",
      "$gte": "1970-01-01T00:00:00Z",
      "$lt": "1970-01-01T00:00:00Z",
      "$lte": "1970-01-01T00:00:00Z"
    },
    "start_time": {
      "$gt": "1970-01-01T00:00:00Z",
      "$gte": "1970-01-01T00:00:00Z",
      "$lt": "1970-01-01T00:00:00Z",
      "$lte": "1970-01-01T00:00:00Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|[Filter_OId_Model_Doc](#schemafilter_oid_model_doc)|false|none|none|
|inbox|[Filter_OId_List_Model](#schemafilter_oid_list_model)|false|none|none|
|timing_fields|[Filter_Timings_Field_Model](#schemafilter_timings_field_model)|false|none|none|
|timings|[Filter_Timings_Model](#schemafilter_timings_model)|false|none|none|

<h2 id="tocS_Filter_OId_List_Model">Filter_OId_List_Model</h2>
<!-- backwards compatibility -->
<a id="schemafilter_oid_list_model"></a>
<a id="schema_Filter_OId_List_Model"></a>
<a id="tocSfilter_oid_list_model"></a>
<a id="tocsfilter_oid_list_model"></a>

```json
{
  "$in": [
    {
      "$oid": "abcdef123456789abcdef123"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$in|[[Filter_OId_Model](#schemafilter_oid_model)]|false|none|none|

<h2 id="tocS_Filter_OId_Model">Filter_OId_Model</h2>
<!-- backwards compatibility -->
<a id="schemafilter_oid_model"></a>
<a id="schema_Filter_OId_Model"></a>
<a id="tocSfilter_oid_model"></a>
<a id="tocsfilter_oid_model"></a>

```json
{
  "$oid": "abcdef123456789abcdef123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$oid|string|false|none|Inbox ID|

<h2 id="tocS_Filter_OId_Model_Doc">Filter_OId_Model_Doc</h2>
<!-- backwards compatibility -->
<a id="schemafilter_oid_model_doc"></a>
<a id="schema_Filter_OId_Model_Doc"></a>
<a id="tocSfilter_oid_model_doc"></a>
<a id="tocsfilter_oid_model_doc"></a>

```json
{
  "$oid": "abcdef123456789abcdef123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$oid|string|false|none|Document ID|

<h2 id="tocS_Filter_Time_Model">Filter_Time_Model</h2>
<!-- backwards compatibility -->
<a id="schemafilter_time_model"></a>
<a id="schema_Filter_Time_Model"></a>
<a id="tocSfilter_time_model"></a>
<a id="tocsfilter_time_model"></a>

```json
{
  "$gt": "1970-01-01T00:00:00Z",
  "$gte": "1970-01-01T00:00:00Z",
  "$lt": "1970-01-01T00:00:00Z",
  "$lte": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$gt|string(date-time)|false|none|none|
|$gte|string(date-time)|false|none|none|
|$lt|string(date-time)|false|none|none|
|$lte|string(date-time)|false|none|none|

<h2 id="tocS_Filter_Timings_Field_Model">Filter_Timings_Field_Model</h2>
<!-- backwards compatibility -->
<a id="schemafilter_timings_field_model"></a>
<a id="schema_Filter_Timings_Field_Model"></a>
<a id="tocSfilter_timings_field_model"></a>
<a id="tocsfilter_timings_field_model"></a>

```json
{
  "timeFrom": "string",
  "timeTo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeFrom|string|false|none|none|
|timeTo|string|false|none|none|

<h2 id="tocS_Filter_Timings_Model">Filter_Timings_Model</h2>
<!-- backwards compatibility -->
<a id="schemafilter_timings_model"></a>
<a id="schema_Filter_Timings_Model"></a>
<a id="tocSfilter_timings_model"></a>
<a id="tocsfilter_timings_model"></a>

```json
{
  "done_time": {
    "$gt": "1970-01-01T00:00:00Z",
    "$gte": "1970-01-01T00:00:00Z",
    "$lt": "1970-01-01T00:00:00Z",
    "$lte": "1970-01-01T00:00:00Z"
  },
  "feedback_time": {
    "$gt": "1970-01-01T00:00:00Z",
    "$gte": "1970-01-01T00:00:00Z",
    "$lt": "1970-01-01T00:00:00Z",
    "$lte": "1970-01-01T00:00:00Z"
  },
  "receive_time": {
    "$gt": "1970-01-01T00:00:00Z",
    "$gte": "1970-01-01T00:00:00Z",
    "$lt": "1970-01-01T00:00:00Z",
    "$lte": "1970-01-01T00:00:00Z"
  },
  "review_start_time": {
    "$gt": "1970-01-01T00:00:00Z",
    "$gte": "1970-01-01T00:00:00Z",
    "$lt": "1970-01-01T00:00:00Z",
    "$lte": "1970-01-01T00:00:00Z"
  },
  "start_time": {
    "$gt": "1970-01-01T00:00:00Z",
    "$gte": "1970-01-01T00:00:00Z",
    "$lt": "1970-01-01T00:00:00Z",
    "$lte": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done_time|[Filter_Time_Model](#schemafilter_time_model)|false|none|none|
|feedback_time|[Filter_Time_Model](#schemafilter_time_model)|false|none|none|
|receive_time|[Filter_Time_Model](#schemafilter_time_model)|false|none|none|
|review_start_time|[Filter_Time_Model](#schemafilter_time_model)|false|none|none|
|start_time|[Filter_Time_Model](#schemafilter_time_model)|false|none|none|

<h2 id="tocS_FormatModelGet">FormatModelGet</h2>
<!-- backwards compatibility -->
<a id="schemaformatmodelget"></a>
<a id="schema_FormatModelGet"></a>
<a id="tocSformatmodelget"></a>
<a id="tocsformatmodelget"></a>

```json
{
  "document_types": [
    {
      "display_name": "string",
      "field_name": "string"
    }
  ],
  "id": "string",
  "labels": [
    {
      "category": "annotation",
      "count_in_evaluation": true,
      "description": "string",
      "display_name": "string",
      "field_name": "string",
      "formula": "string",
      "initialized": true,
      "is_library": false,
      "mandatory": true,
      "mandatory_if": {},
      "multiple": true,
      "options": [
        {
          "active": true,
          "display_name": "string",
          "name": "string"
        }
      ],
      "scope": "section",
      "type": "string",
      "visible": true,
      "visible_if": {}
    }
  ],
  "name": "string",
  "separators": [],
  "table_types": [
    {
      "collapsed": true,
      "columns": [
        {
          "category": "annotation",
          "count_in_evaluation": true,
          "description": "string",
          "display_name": "string",
          "field_name": "string",
          "formula": "string",
          "initialized": true,
          "is_library": false,
          "mandatory": true,
          "mandatory_if": {},
          "multiple": true,
          "options": [
            {
              "active": true,
              "display_name": "string",
              "name": "string"
            }
          ],
          "scope": "section",
          "type": "string",
          "visible": true,
          "visible_if": {}
        }
      ],
      "contains_line_items": true,
      "initialized": true,
      "label": "string",
      "scope": "section"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_types|[[DocumentTypeModel](#schemadocumenttypemodel)]|false|none|none|
|id|string|true|none|none|
|labels|[[LabelModel](#schemalabelmodel)]|false|none|none|
|name|string|false|none|none|
|separators|[[SectionModel](#schemasectionmodel)]|false|none|none|
|table_types|[[TableModel](#schematablemodel)]|false|none|none|

<h2 id="tocS_FormatModelPatch">FormatModelPatch</h2>
<!-- backwards compatibility -->
<a id="schemaformatmodelpatch"></a>
<a id="schema_FormatModelPatch"></a>
<a id="tocSformatmodelpatch"></a>
<a id="tocsformatmodelpatch"></a>

```json
{
  "display_name": "string",
  "document_types": [
    {
      "display_name": "string",
      "field_name": "string"
    }
  ],
  "labels": [
    {
      "category": "annotation",
      "count_in_evaluation": true,
      "description": "string",
      "display_name": "string",
      "field_name": "string",
      "formula": "string",
      "initialized": true,
      "is_library": false,
      "mandatory": true,
      "mandatory_if": {},
      "multiple": true,
      "options": [
        {
          "active": true,
          "display_name": "string",
          "name": "string"
        }
      ],
      "scope": "section",
      "type": "string",
      "visible": true,
      "visible_if": {}
    }
  ],
  "name": "string",
  "separators": [],
  "table_types": [
    {
      "collapsed": true,
      "columns": [
        {
          "category": "annotation",
          "count_in_evaluation": true,
          "description": "string",
          "display_name": "string",
          "field_name": "string",
          "formula": "string",
          "initialized": true,
          "is_library": false,
          "mandatory": true,
          "mandatory_if": {},
          "multiple": true,
          "options": [
            {
              "active": true,
              "display_name": "string",
              "name": "string"
            }
          ],
          "scope": "section",
          "type": "string",
          "visible": true,
          "visible_if": {}
        }
      ],
      "contains_line_items": true,
      "initialized": true,
      "label": "string",
      "scope": "section"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|false|none|none|
|document_types|[[DocumentTypeModel](#schemadocumenttypemodel)]|false|none|none|
|labels|[[LabelModel](#schemalabelmodel)]|false|none|none|
|name|string|false|none|none|
|separators|[[SectionModel](#schemasectionmodel)]|false|none|none|
|table_types|[[TableModel](#schematablemodel)]|false|none|none|

<h2 id="tocS_FormatModelPost">FormatModelPost</h2>
<!-- backwards compatibility -->
<a id="schemaformatmodelpost"></a>
<a id="schema_FormatModelPost"></a>
<a id="tocSformatmodelpost"></a>
<a id="tocsformatmodelpost"></a>

```json
{
  "display_name": "string",
  "document_types": [
    {
      "display_name": "string",
      "field_name": "string"
    }
  ],
  "labels": [
    {
      "category": "annotation",
      "count_in_evaluation": true,
      "description": "string",
      "display_name": "string",
      "field_name": "string",
      "formula": "string",
      "initialized": true,
      "is_library": false,
      "mandatory": true,
      "mandatory_if": {},
      "multiple": true,
      "options": [
        {
          "active": true,
          "display_name": "string",
          "name": "string"
        }
      ],
      "scope": "section",
      "type": "string",
      "visible": true,
      "visible_if": {}
    }
  ],
  "name": "string",
  "separators": [],
  "table_types": [
    {
      "collapsed": true,
      "columns": [
        {
          "category": "annotation",
          "count_in_evaluation": true,
          "description": "string",
          "display_name": "string",
          "field_name": "string",
          "formula": "string",
          "initialized": true,
          "is_library": false,
          "mandatory": true,
          "mandatory_if": {},
          "multiple": true,
          "options": [
            {
              "active": true,
              "display_name": "string",
              "name": "string"
            }
          ],
          "scope": "section",
          "type": "string",
          "visible": true,
          "visible_if": {}
        }
      ],
      "contains_line_items": true,
      "initialized": true,
      "label": "string",
      "scope": "section"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|false|none|none|
|document_types|[[DocumentTypeModel](#schemadocumenttypemodel)]|false|none|none|
|labels|[[LabelModel](#schemalabelmodel)]|true|none|none|
|name|string|true|none|none|
|separators|[[SectionModel](#schemasectionmodel)]|false|none|none|
|table_types|[[TableModel](#schematablemodel)]|false|none|none|

<h2 id="tocS_InboxModelGet">InboxModelGet</h2>
<!-- backwards compatibility -->
<a id="schemainboxmodelget"></a>
<a id="schema_InboxModelGet"></a>
<a id="tocSinboxmodelget"></a>
<a id="tocsinboxmodelget"></a>

```json
{
  "name": "string",
  "project": "abcdef123456789abcdef123",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|project|string|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_InboxModelPatch">InboxModelPatch</h2>
<!-- backwards compatibility -->
<a id="schemainboxmodelpatch"></a>
<a id="schema_InboxModelPatch"></a>
<a id="tocSinboxmodelpatch"></a>
<a id="tocsinboxmodelpatch"></a>

```json
{
  "name": "string",
  "project": "abcdef123456789abcdef123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|project|string|false|none|none|

<h2 id="tocS_InboxModelPost">InboxModelPost</h2>
<!-- backwards compatibility -->
<a id="schemainboxmodelpost"></a>
<a id="schema_InboxModelPost"></a>
<a id="tocSinboxmodelpost"></a>
<a id="tocsinboxmodelpost"></a>

```json
{
  "name": "string",
  "project": "abcdef123456789abcdef123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|project|string|true|none|none|

<h2 id="tocS_IntegrationModelGet">IntegrationModelGet</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationmodelget"></a>
<a id="schema_IntegrationModelGet"></a>
<a id="tocSintegrationmodelget"></a>
<a id="tocsintegrationmodelget"></a>

```json
{
  "type": "webhook"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|webhook|
|type|dropbox|
|type|office365|
|type|email|
|type|imap|
|type|sftp|
|type|smtp|
|type|service_bus|

<h2 id="tocS_KeyValyePairSettingsModel">KeyValyePairSettingsModel</h2>
<!-- backwards compatibility -->
<a id="schemakeyvalyepairsettingsmodel"></a>
<a id="schema_KeyValyePairSettingsModel"></a>
<a id="tocSkeyvalyepairsettingsmodel"></a>
<a id="tocskeyvalyepairsettingsmodel"></a>

```json
{
  "classification_cutoff": 0,
  "rule_config": {},
  "splitting_cutoff": 0,
  "uer_pre_config": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification_cutoff|integer|false|none|none|
|rule_config|object|false|none|none|
|splitting_cutoff|integer|false|none|none|
|uer_pre_config|object|false|none|none|

<h2 id="tocS_LabelModel">LabelModel</h2>
<!-- backwards compatibility -->
<a id="schemalabelmodel"></a>
<a id="schema_LabelModel"></a>
<a id="tocSlabelmodel"></a>
<a id="tocslabelmodel"></a>

```json
{
  "category": "annotation",
  "count_in_evaluation": true,
  "description": "string",
  "display_name": "string",
  "field_name": "string",
  "formula": "string",
  "initialized": true,
  "is_library": false,
  "mandatory": true,
  "mandatory_if": {},
  "multiple": true,
  "options": [
    {
      "active": true,
      "display_name": "string",
      "name": "string"
    }
  ],
  "scope": "section",
  "type": "string",
  "visible": true,
  "visible_if": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|count_in_evaluation|boolean|false|none|A flag that determines whether to count this field for evaluation|
|description|string|false|none|A description of this field|
|display_name|string|false|none|none|
|field_name|string|true|none|none|
|formula|string|false|none|An excel-like formula for conditional logic|
|initialized|boolean|false|none|none|
|is_library|boolean|false|none|none|
|mandatory|boolean|false|none|none|
|mandatory_if|object|false|none|A value to decide if mandatory based on other field|
|multiple|boolean|false|none|none|
|options|[[OptionModel](#schemaoptionmodel)]|false|none|none|
|scope|string|false|none|none|
|type|string|false|none|none|
|visible|boolean|false|none|none|
|visible_if|object|false|none|A value to decide if shown in UI|

#### Enumerated Values

|Property|Value|
|---|---|
|category|annotation|
|category|tag|
|category|separator|
|category|computed|
|scope|document|
|scope|page|
|scope|section|
|type|string|
|type|date|
|type|integer|
|type|float|
|type|currency|
|type|alphanumeric|
|type|national_identification_number_be|
|type|boolean|
|type|datetime|
|type|address|

<h2 id="tocS_MetadataOptions">MetadataOptions</h2>
<!-- backwards compatibility -->
<a id="schemametadataoptions"></a>
<a id="schema_MetadataOptions"></a>
<a id="tocSmetadataoptions"></a>
<a id="tocsmetadataoptions"></a>

```json
{
  "columns": [
    "string"
  ],
  "fields": {
    "annotations": [
      "string"
    ],
    "lines": [
      "string"
    ],
    "meta_information": [
      "string"
    ]
  },
  "include": false,
  "rename": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[string]|false|none|none|
|fields|[FieldsInMetadata](#schemafieldsinmetadata)|false|none|none|
|include|boolean|false|none|none|
|rename|object|false|none|none|

<h2 id="tocS_OptionModel">OptionModel</h2>
<!-- backwards compatibility -->
<a id="schemaoptionmodel"></a>
<a id="schema_OptionModel"></a>
<a id="tocSoptionmodel"></a>
<a id="tocsoptionmodel"></a>

```json
{
  "active": true,
  "display_name": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|none|
|display_name|string|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_PermissionsModel">PermissionsModel</h2>
<!-- backwards compatibility -->
<a id="schemapermissionsmodel"></a>
<a id="schema_PermissionsModel"></a>
<a id="tocSpermissionsmodel"></a>
<a id="tocspermissionsmodel"></a>

```json
{
  "create_dropbox_user": false,
  "create_inbox": false,
  "create_webhook": false,
  "de_escalate_document": false,
  "delete_tenant": false,
  "delete_webhook": false,
  "edit_backend_settings": false,
  "edit_beats": false,
  "edit_dashboard_settings": false,
  "edit_data_retention_settings": false,
  "edit_flow_settings": false,
  "edit_format_settings": false,
  "edit_integration_settings": false,
  "edit_integrations": false,
  "edit_predictor_settings": false,
  "edit_reports": false,
  "edit_retention_settings": false,
  "edit_review_settings": false,
  "edit_roles": false,
  "edit_sampling_settings": false,
  "edit_security_settings": false,
  "edit_templates": false,
  "edit_thresholds_settings": false,
  "edit_translations": false,
  "edit_users": false,
  "escalate_document": false,
  "never_twice": false,
  "pick_next_escalated": false,
  "read_beats": false,
  "read_data_retention_settings": false,
  "read_feedback": false,
  "read_integrations": false,
  "read_release_notes": false,
  "read_reports": false,
  "read_thresholds_settings": false,
  "read_webhook": false,
  "reject_document": false,
  "release_lock": false,
  "review": false,
  "submit": false,
  "update_webhook": false,
  "upload": false,
  "versions": false,
  "view_api_keys": false,
  "view_list": false,
  "view_projects": false,
  "view_statistics": false,
  "view_templates": false,
  "write_feedback": false,
  "write_release_notes": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create_dropbox_user|boolean|false|none|none|
|create_inbox|boolean|false|none|none|
|create_webhook|boolean|false|none|none|
|de_escalate_document|boolean|false|none|none|
|delete_tenant|boolean|false|none|none|
|delete_webhook|boolean|false|none|none|
|edit_backend_settings|boolean|false|none|none|
|edit_beats|boolean|false|none|none|
|edit_dashboard_settings|boolean|false|none|none|
|edit_data_retention_settings|boolean|false|none|none|
|edit_flow_settings|boolean|false|none|none|
|edit_format_settings|boolean|false|none|none|
|edit_integration_settings|boolean|false|none|none|
|edit_integrations|boolean|false|none|none|
|edit_predictor_settings|boolean|false|none|none|
|edit_reports|boolean|false|none|none|
|edit_retention_settings|boolean|false|none|none|
|edit_review_settings|boolean|false|none|none|
|edit_roles|boolean|false|none|none|
|edit_sampling_settings|boolean|false|none|none|
|edit_security_settings|boolean|false|none|none|
|edit_templates|boolean|false|none|none|
|edit_thresholds_settings|boolean|false|none|none|
|edit_translations|boolean|false|none|none|
|edit_users|boolean|false|none|none|
|escalate_document|boolean|false|none|none|
|never_twice|boolean|false|none|none|
|pick_next_escalated|boolean|false|none|none|
|read_beats|boolean|false|none|none|
|read_data_retention_settings|boolean|false|none|none|
|read_feedback|boolean|false|none|none|
|read_integrations|boolean|false|none|none|
|read_release_notes|boolean|false|none|none|
|read_reports|boolean|false|none|none|
|read_thresholds_settings|boolean|false|none|none|
|read_webhook|boolean|false|none|none|
|reject_document|boolean|false|none|none|
|release_lock|boolean|false|none|none|
|review|boolean|false|none|none|
|submit|boolean|false|none|none|
|update_webhook|boolean|false|none|none|
|upload|boolean|false|none|none|
|versions|boolean|false|none|none|
|view_api_keys|boolean|false|none|none|
|view_list|boolean|false|none|none|
|view_projects|boolean|false|none|none|
|view_statistics|boolean|false|none|none|
|view_templates|boolean|false|none|none|
|write_feedback|boolean|false|none|none|
|write_release_notes|boolean|false|none|none|

<h2 id="tocS_PredictorModelGet">PredictorModelGet</h2>
<!-- backwards compatibility -->
<a id="schemapredictormodelget"></a>
<a id="schema_PredictorModelGet"></a>
<a id="tocSpredictormodelget"></a>
<a id="tocspredictormodelget"></a>

```json
{
  "blacklist": {},
  "expected_values": {},
  "fallback": {},
  "key_value_pairs": {
    "classification_cutoff": 0,
    "rule_config": {},
    "splitting_cutoff": 0,
    "uer_pre_config": {}
  },
  "table_extraction_settings": {
    "field_settings": {
      "*": {
        "property1": {
          "default_value": "string",
          "expected_pattern": "string",
          "nested_field_patterns": {
            "*": {
              "property1": "string",
              "property2": "string"
            }
          },
          "override_default_patterns": true
        },
        "property2": {
          "default_value": "string",
          "expected_pattern": "string",
          "nested_field_patterns": {
            "*": {
              "property1": "string",
              "property2": "string"
            }
          },
          "override_default_patterns": true
        }
      }
    }
  },
  "whitelist": {},
  "scope": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blacklist|object|false|none|none|
|expected_values|object|false|none|none|
|fallback|object|false|none|none|
|key_value_pairs|[KeyValyePairSettingsModel](#schemakeyvalyepairsettingsmodel)|false|none|none|
|table_extraction_settings|[TableExtractionSettingsModel](#schematableextractionsettingsmodel)|false|none|none|
|whitelist|object|false|none|none|
|scope|string|true|none|none|

<h2 id="tocS_PredictorSettingModel">PredictorSettingModel</h2>
<!-- backwards compatibility -->
<a id="schemapredictorsettingmodel"></a>
<a id="schema_PredictorSettingModel"></a>
<a id="tocSpredictorsettingmodel"></a>
<a id="tocspredictorsettingmodel"></a>

```json
{
  "blacklist": {},
  "expected_values": {},
  "fallback": {},
  "key_value_pairs": {
    "classification_cutoff": 0,
    "rule_config": {},
    "splitting_cutoff": 0,
    "uer_pre_config": {}
  },
  "table_extraction_settings": {
    "field_settings": {
      "*": {
        "property1": {
          "default_value": "string",
          "expected_pattern": "string",
          "nested_field_patterns": {
            "*": {
              "property1": "string",
              "property2": "string"
            }
          },
          "override_default_patterns": true
        },
        "property2": {
          "default_value": "string",
          "expected_pattern": "string",
          "nested_field_patterns": {
            "*": {
              "property1": "string",
              "property2": "string"
            }
          },
          "override_default_patterns": true
        }
      }
    }
  },
  "whitelist": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blacklist|object|false|none|none|
|expected_values|object|false|none|none|
|fallback|object|false|none|none|
|key_value_pairs|[KeyValyePairSettingsModel](#schemakeyvalyepairsettingsmodel)|false|none|none|
|table_extraction_settings|[TableExtractionSettingsModel](#schematableextractionsettingsmodel)|false|none|none|
|whitelist|object|false|none|none|

<h2 id="tocS_ProjectModelPatch">ProjectModelPatch</h2>
<!-- backwards compatibility -->
<a id="schemaprojectmodelpatch"></a>
<a id="schema_ProjectModelPatch"></a>
<a id="tocSprojectmodelpatch"></a>
<a id="tocsprojectmodelpatch"></a>

```json
{
  "default_document_type": "string",
  "default_format": "string",
  "formats": [
    "string"
  ],
  "name": "string",
  "split_into_sections": true,
  "sub_page_splitting": true,
  "timeout": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_document_type|string|false|none|This format is chosen as fallback|
|default_format|string|false|none|This format is chosen as fallback|
|formats|[string]|false|none|none|
|name|string|false|none|none|
|split_into_sections|boolean|false|none|none|
|sub_page_splitting|boolean|false|none|none|
|timeout|integer|false|none|none|

<h2 id="tocS_ProjectModelPost">ProjectModelPost</h2>
<!-- backwards compatibility -->
<a id="schemaprojectmodelpost"></a>
<a id="schema_ProjectModelPost"></a>
<a id="tocSprojectmodelpost"></a>
<a id="tocsprojectmodelpost"></a>

```json
{
  "default_document_type": "string",
  "default_format": "string",
  "formats": [
    "string"
  ],
  "name": "string",
  "split_into_sections": true,
  "sub_page_splitting": false,
  "timeout": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_document_type|string|false|none|This format is chosen as fallback|
|default_format|string|false|none|This format is chosen as fallback|
|formats|[string]|true|none|none|
|name|string|true|none|none|
|split_into_sections|boolean|true|none|none|
|sub_page_splitting|boolean|true|none|none|
|timeout|integer|false|none|none|

<h2 id="tocS_ReportModelFullGenerate">ReportModelFullGenerate</h2>
<!-- backwards compatibility -->
<a id="schemareportmodelfullgenerate"></a>
<a id="schema_ReportModelFullGenerate"></a>
<a id="tocSreportmodelfullgenerate"></a>
<a id="tocsreportmodelfullgenerate"></a>

```json
{
  "annotations": {
    "add_text": false,
    "include": false
  },
  "automation_blockers": {
    "include": false
  },
  "automation_score": {
    "include": false
  },
  "automation_what_if": {
    "include": false
  },
  "cover": {
    "include": false
  },
  "documents": [
    "abcdef123456789abcdef123"
  ],
  "elapse_time": {
    "include": false
  },
  "evaluations": {
    "additional_column": "string",
    "include": false
  },
  "field_automation": {
    "include": false
  },
  "inboxes": [
    "abcdef123456789abcdef123"
  ],
  "lines": {
    "include": false
  },
  "metadata": {
    "columns": [
      "string"
    ],
    "fields": {
      "annotations": [
        "string"
      ],
      "lines": [
        "string"
      ],
      "meta_information": [
        "string"
      ]
    },
    "include": false,
    "rename": {}
  },
  "name": "string",
  "page_classification": {
    "include": false
  },
  "projects": [
    "abcdef123456789abcdef123"
  ],
  "sections": {
    "include": false
  },
  "separator": "|",
  "sources": [
    "human",
    "machine"
  ],
  "text": {
    "include": false
  },
  "version_name": "string",
  "delivery_method": "email",
  "email": "string",
  "end_date": "1970-01-01T00:00:00Z",
  "start_date": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[AnnotationOptions](#schemaannotationoptions)|false|none|none|
|automation_blockers|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|automation_score|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|automation_what_if|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|cover|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|documents|[string]|false|none|none|
|elapse_time|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|evaluations|[EvaluationsOptions](#schemaevaluationsoptions)|false|none|none|
|field_automation|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|inboxes|[string]|false|none|none|
|lines|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|metadata|[MetadataOptions](#schemametadataoptions)|false|none|none|
|name|string|false|none|none|
|page_classification|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|projects|[string]|false|none|none|
|sections|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|separator|string|false|none|none|
|sources|[string]|false|none|none|
|text|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|version_name|string|false|none|none|
|delivery_method|string|false|none|none|
|email|string|false|none|none|
|end_date|string(date-time)|false|none|none|
|start_date|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sources|human|
|sources|machine|
|delivery_method|email|
|delivery_method|download|

<h2 id="tocS_ReportModelGet">ReportModelGet</h2>
<!-- backwards compatibility -->
<a id="schemareportmodelget"></a>
<a id="schema_ReportModelGet"></a>
<a id="tocSreportmodelget"></a>
<a id="tocsreportmodelget"></a>

```json
{
  "annotations": {
    "add_text": false,
    "include": false
  },
  "automation_blockers": {
    "include": false
  },
  "automation_score": {
    "include": false
  },
  "automation_what_if": {
    "include": false
  },
  "cover": {
    "include": false
  },
  "documents": [
    "abcdef123456789abcdef123"
  ],
  "elapse_time": {
    "include": false
  },
  "evaluations": {
    "additional_column": "string",
    "include": false
  },
  "field_automation": {
    "include": false
  },
  "inboxes": [
    "abcdef123456789abcdef123"
  ],
  "lines": {
    "include": false
  },
  "metadata": {
    "columns": [
      "string"
    ],
    "fields": {
      "annotations": [
        "string"
      ],
      "lines": [
        "string"
      ],
      "meta_information": [
        "string"
      ]
    },
    "include": false,
    "rename": {}
  },
  "name": "string",
  "page_classification": {
    "include": false
  },
  "projects": [
    "abcdef123456789abcdef123"
  ],
  "sections": {
    "include": false
  },
  "separator": "|",
  "sources": [
    "human",
    "machine"
  ],
  "text": {
    "include": false
  },
  "version_name": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[AnnotationOptions](#schemaannotationoptions)|false|none|none|
|automation_blockers|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|automation_score|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|automation_what_if|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|cover|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|documents|[string]|false|none|none|
|elapse_time|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|evaluations|[EvaluationsOptions](#schemaevaluationsoptions)|false|none|none|
|field_automation|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|inboxes|[string]|false|none|none|
|lines|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|metadata|[MetadataOptions](#schemametadataoptions)|false|none|none|
|name|string|false|none|none|
|page_classification|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|projects|[string]|false|none|none|
|sections|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|separator|string|false|none|none|
|sources|[string]|false|none|none|
|text|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|version_name|string|false|none|none|
|id|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sources|human|
|sources|machine|

<h2 id="tocS_ReportModelPost">ReportModelPost</h2>
<!-- backwards compatibility -->
<a id="schemareportmodelpost"></a>
<a id="schema_ReportModelPost"></a>
<a id="tocSreportmodelpost"></a>
<a id="tocsreportmodelpost"></a>

```json
{
  "annotations": {
    "add_text": false,
    "include": false
  },
  "automation_blockers": {
    "include": false
  },
  "automation_score": {
    "include": false
  },
  "automation_what_if": {
    "include": false
  },
  "cover": {
    "include": false
  },
  "documents": [
    "abcdef123456789abcdef123"
  ],
  "elapse_time": {
    "include": false
  },
  "evaluations": {
    "additional_column": "string",
    "include": false
  },
  "field_automation": {
    "include": false
  },
  "inboxes": [
    "abcdef123456789abcdef123"
  ],
  "lines": {
    "include": false
  },
  "metadata": {
    "columns": [
      "string"
    ],
    "fields": {
      "annotations": [
        "string"
      ],
      "lines": [
        "string"
      ],
      "meta_information": [
        "string"
      ]
    },
    "include": false,
    "rename": {}
  },
  "name": "string",
  "page_classification": {
    "include": false
  },
  "projects": [
    "abcdef123456789abcdef123"
  ],
  "sections": {
    "include": false
  },
  "separator": "|",
  "sources": [
    "human",
    "machine"
  ],
  "text": {
    "include": false
  },
  "version_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[AnnotationOptions](#schemaannotationoptions)|false|none|none|
|automation_blockers|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|automation_score|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|automation_what_if|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|cover|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|documents|[string]|false|none|none|
|elapse_time|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|evaluations|[EvaluationsOptions](#schemaevaluationsoptions)|false|none|none|
|field_automation|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|inboxes|[string]|false|none|none|
|lines|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|metadata|[MetadataOptions](#schemametadataoptions)|false|none|none|
|name|string|false|none|none|
|page_classification|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|projects|[string]|false|none|none|
|sections|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|separator|string|false|none|none|
|sources|[string]|false|none|none|
|text|[SimpleInclude](#schemasimpleinclude)|false|none|none|
|version_name|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sources|human|
|sources|machine|

<h2 id="tocS_ResetPasswordModelPost">ResetPasswordModelPost</h2>
<!-- backwards compatibility -->
<a id="schemaresetpasswordmodelpost"></a>
<a id="schema_ResetPasswordModelPost"></a>
<a id="tocSresetpasswordmodelpost"></a>
<a id="tocsresetpasswordmodelpost"></a>

```json
{
  "new_password": "string",
  "token": "string",
  "user_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new_password|string|false|none|the new user's password|
|token|string|false|none|the token to reset the password|
|user_name|string|false|none|the username|

<h2 id="tocS_ReviewSettingsModelGet">ReviewSettingsModelGet</h2>
<!-- backwards compatibility -->
<a id="schemareviewsettingsmodelget"></a>
<a id="schema_ReviewSettingsModelGet"></a>
<a id="tocSreviewsettingsmodelget"></a>
<a id="tocsreviewsettingsmodelget"></a>

```json
{
  "default_zoom": {},
  "first_toolbar": {},
  "lock_expiry": {},
  "review_options": {},
  "second_toolbar": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_zoom|object|false|none|none|
|first_toolbar|object|false|none|none|
|lock_expiry|object|false|none|none|
|review_options|object|false|none|none|
|second_toolbar|object|false|none|none|

<h2 id="tocS_ReviewSettingsModelPatch">ReviewSettingsModelPatch</h2>
<!-- backwards compatibility -->
<a id="schemareviewsettingsmodelpatch"></a>
<a id="schema_ReviewSettingsModelPatch"></a>
<a id="tocSreviewsettingsmodelpatch"></a>
<a id="tocsreviewsettingsmodelpatch"></a>

```json
{
  "scope": "string",
  "settings": {
    "default_zoom": {},
    "first_toolbar": {},
    "lock_expiry": {},
    "review_options": {},
    "second_toolbar": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|string|false|none|none|
|settings|[ReviewSettingsModelGet](#schemareviewsettingsmodelget)|false|none|none|

<h2 id="tocS_RoleModelGet">RoleModelGet</h2>
<!-- backwards compatibility -->
<a id="schemarolemodelget"></a>
<a id="schema_RoleModelGet"></a>
<a id="tocSrolemodelget"></a>
<a id="tocsrolemodelget"></a>

```json
{
  "name": "string",
  "permissions": {
    "create_dropbox_user": false,
    "create_inbox": false,
    "create_webhook": false,
    "de_escalate_document": false,
    "delete_tenant": false,
    "delete_webhook": false,
    "edit_backend_settings": false,
    "edit_beats": false,
    "edit_dashboard_settings": false,
    "edit_data_retention_settings": false,
    "edit_flow_settings": false,
    "edit_format_settings": false,
    "edit_integration_settings": false,
    "edit_integrations": false,
    "edit_predictor_settings": false,
    "edit_reports": false,
    "edit_retention_settings": false,
    "edit_review_settings": false,
    "edit_roles": false,
    "edit_sampling_settings": false,
    "edit_security_settings": false,
    "edit_templates": false,
    "edit_thresholds_settings": false,
    "edit_translations": false,
    "edit_users": false,
    "escalate_document": false,
    "never_twice": false,
    "pick_next_escalated": false,
    "read_beats": false,
    "read_data_retention_settings": false,
    "read_feedback": false,
    "read_integrations": false,
    "read_release_notes": false,
    "read_reports": false,
    "read_thresholds_settings": false,
    "read_webhook": false,
    "reject_document": false,
    "release_lock": false,
    "review": false,
    "submit": false,
    "update_webhook": false,
    "upload": false,
    "versions": false,
    "view_api_keys": false,
    "view_list": false,
    "view_projects": false,
    "view_statistics": false,
    "view_templates": false,
    "write_feedback": false,
    "write_release_notes": false
  },
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|permissions|[PermissionsModel](#schemapermissionsmodel)|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_RoleModelPatch">RoleModelPatch</h2>
<!-- backwards compatibility -->
<a id="schemarolemodelpatch"></a>
<a id="schema_RoleModelPatch"></a>
<a id="tocSrolemodelpatch"></a>
<a id="tocsrolemodelpatch"></a>

```json
{
  "name": "string",
  "permissions": {
    "create_dropbox_user": false,
    "create_inbox": false,
    "create_webhook": false,
    "de_escalate_document": false,
    "delete_tenant": false,
    "delete_webhook": false,
    "edit_backend_settings": false,
    "edit_beats": false,
    "edit_dashboard_settings": false,
    "edit_data_retention_settings": false,
    "edit_flow_settings": false,
    "edit_format_settings": false,
    "edit_integration_settings": false,
    "edit_integrations": false,
    "edit_predictor_settings": false,
    "edit_reports": false,
    "edit_retention_settings": false,
    "edit_review_settings": false,
    "edit_roles": false,
    "edit_sampling_settings": false,
    "edit_security_settings": false,
    "edit_templates": false,
    "edit_thresholds_settings": false,
    "edit_translations": false,
    "edit_users": false,
    "escalate_document": false,
    "never_twice": false,
    "pick_next_escalated": false,
    "read_beats": false,
    "read_data_retention_settings": false,
    "read_feedback": false,
    "read_integrations": false,
    "read_release_notes": false,
    "read_reports": false,
    "read_thresholds_settings": false,
    "read_webhook": false,
    "reject_document": false,
    "release_lock": false,
    "review": false,
    "submit": false,
    "update_webhook": false,
    "upload": false,
    "versions": false,
    "view_api_keys": false,
    "view_list": false,
    "view_projects": false,
    "view_statistics": false,
    "view_templates": false,
    "write_feedback": false,
    "write_release_notes": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|permissions|[PermissionsModel](#schemapermissionsmodel)|false|none|none|

<h2 id="tocS_RoleModelPost">RoleModelPost</h2>
<!-- backwards compatibility -->
<a id="schemarolemodelpost"></a>
<a id="schema_RoleModelPost"></a>
<a id="tocSrolemodelpost"></a>
<a id="tocsrolemodelpost"></a>

```json
{
  "name": "string",
  "permissions": {
    "create_dropbox_user": false,
    "create_inbox": false,
    "create_webhook": false,
    "de_escalate_document": false,
    "delete_tenant": false,
    "delete_webhook": false,
    "edit_backend_settings": false,
    "edit_beats": false,
    "edit_dashboard_settings": false,
    "edit_data_retention_settings": false,
    "edit_flow_settings": false,
    "edit_format_settings": false,
    "edit_integration_settings": false,
    "edit_integrations": false,
    "edit_predictor_settings": false,
    "edit_reports": false,
    "edit_retention_settings": false,
    "edit_review_settings": false,
    "edit_roles": false,
    "edit_sampling_settings": false,
    "edit_security_settings": false,
    "edit_templates": false,
    "edit_thresholds_settings": false,
    "edit_translations": false,
    "edit_users": false,
    "escalate_document": false,
    "never_twice": false,
    "pick_next_escalated": false,
    "read_beats": false,
    "read_data_retention_settings": false,
    "read_feedback": false,
    "read_integrations": false,
    "read_release_notes": false,
    "read_reports": false,
    "read_thresholds_settings": false,
    "read_webhook": false,
    "reject_document": false,
    "release_lock": false,
    "review": false,
    "submit": false,
    "update_webhook": false,
    "upload": false,
    "versions": false,
    "view_api_keys": false,
    "view_list": false,
    "view_projects": false,
    "view_statistics": false,
    "view_templates": false,
    "write_feedback": false,
    "write_release_notes": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|permissions|[PermissionsModel](#schemapermissionsmodel)|true|none|none|

<h2 id="tocS_RoutingAtom">RoutingAtom</h2>
<!-- backwards compatibility -->
<a id="schemaroutingatom"></a>
<a id="schema_RoutingAtom"></a>
<a id="tocSroutingatom"></a>
<a id="tocsroutingatom"></a>

```json
{
  "and_conditions": {},
  "target": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|and_conditions|object|false|none|none|
|target|string|false|none|none|

<h2 id="tocS_RuleConfigModel">RuleConfigModel</h2>
<!-- backwards compatibility -->
<a id="schemaruleconfigmodel"></a>
<a id="schema_RuleConfigModel"></a>
<a id="tocSruleconfigmodel"></a>
<a id="tocsruleconfigmodel"></a>

```json
{
  "rule_config": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule_config|object|false|none|none|

<h2 id="tocS_RuleConfigModelGet">RuleConfigModelGet</h2>
<!-- backwards compatibility -->
<a id="schemaruleconfigmodelget"></a>
<a id="schema_RuleConfigModelGet"></a>
<a id="tocSruleconfigmodelget"></a>
<a id="tocsruleconfigmodelget"></a>

```json
{
  "rule_config": {},
  "scope": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule_config|object|false|none|none|
|scope|string|true|none|none|

<h2 id="tocS_SamplingModelGet">SamplingModelGet</h2>
<!-- backwards compatibility -->
<a id="schemasamplingmodelget"></a>
<a id="schema_SamplingModelGet"></a>
<a id="tocSsamplingmodelget"></a>
<a id="tocssamplingmodelget"></a>

```json
{
  "auto_reject_FFR": 0,
  "auto_submit_FFR": 0,
  "second_pass_FFR": 0,
  "second_pass_STP": 0,
  "scope": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_reject_FFR|integer|false|none|none|
|auto_submit_FFR|integer|false|none|none|
|second_pass_FFR|integer|false|none|none|
|second_pass_STP|integer|false|none|none|
|scope|string|true|none|none|

<h2 id="tocS_SamplingModelPatch">SamplingModelPatch</h2>
<!-- backwards compatibility -->
<a id="schemasamplingmodelpatch"></a>
<a id="schema_SamplingModelPatch"></a>
<a id="tocSsamplingmodelpatch"></a>
<a id="tocssamplingmodelpatch"></a>

```json
{
  "auto_reject_FFR": 0,
  "auto_submit_FFR": 0,
  "second_pass_FFR": 0,
  "second_pass_STP": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_reject_FFR|integer|false|none|none|
|auto_submit_FFR|integer|false|none|none|
|second_pass_FFR|integer|false|none|none|
|second_pass_STP|integer|false|none|none|

<h2 id="tocS_ScopeModel">ScopeModel</h2>
<!-- backwards compatibility -->
<a id="schemascopemodel"></a>
<a id="schema_ScopeModel"></a>
<a id="tocSscopemodel"></a>
<a id="tocsscopemodel"></a>

```json
{
  "id": "string",
  "level": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|level|string|false|none|none|

<h2 id="tocS_SectionAtom">SectionAtom</h2>
<!-- backwards compatibility -->
<a id="schemasectionatom"></a>
<a id="schema_SectionAtom"></a>
<a id="tocSsectionatom"></a>
<a id="tocssectionatom"></a>

```json
{
  "confidence": 0,
  "document_type": "string",
  "format": "abcdef123456789abcdef123",
  "page": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|integer|false|none|none|
|document_type|string|false|none|none|
|format|string|false|none|none|
|page|integer|true|none|none|

<h2 id="tocS_SectionModel">SectionModel</h2>
<!-- backwards compatibility -->
<a id="schemasectionmodel"></a>
<a id="schema_SectionModel"></a>
<a id="tocSsectionmodel"></a>
<a id="tocssectionmodel"></a>

```json
{
  "name": "string",
  "page": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|page|integer|true|none|none|

<h2 id="tocS_SequenceColumnsAtomModel">SequenceColumnsAtomModel</h2>
<!-- backwards compatibility -->
<a id="schemasequencecolumnsatommodel"></a>
<a id="schema_SequenceColumnsAtomModel"></a>
<a id="tocSsequencecolumnsatommodel"></a>
<a id="tocssequencecolumnsatommodel"></a>

```json
{
  "checked": true,
  "field": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checked|boolean|false|none|none|
|field|string|false|none|none|
|label|string|false|none|none|

<h2 id="tocS_SettingThresholdModelGet">SettingThresholdModelGet</h2>
<!-- backwards compatibility -->
<a id="schemasettingthresholdmodelget"></a>
<a id="schema_SettingThresholdModelGet"></a>
<a id="tocSsettingthresholdmodelget"></a>
<a id="tocssettingthresholdmodelget"></a>

```json
{
  "thresholds": {
    "annotations": {},
    "lines": {},
    "sections": {}
  },
  "scope": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thresholds|[ThresholdModel](#schemathresholdmodel)|false|none|none|
|scope|string|false|none|none|

<h2 id="tocS_SettingThresholdModelPatch">SettingThresholdModelPatch</h2>
<!-- backwards compatibility -->
<a id="schemasettingthresholdmodelpatch"></a>
<a id="schema_SettingThresholdModelPatch"></a>
<a id="tocSsettingthresholdmodelpatch"></a>
<a id="tocssettingthresholdmodelpatch"></a>

```json
{
  "thresholds": {
    "annotations": {},
    "lines": {},
    "sections": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thresholds|[ThresholdModel](#schemathresholdmodel)|false|none|none|

<h2 id="tocS_SimpleInclude">SimpleInclude</h2>
<!-- backwards compatibility -->
<a id="schemasimpleinclude"></a>
<a id="schema_SimpleInclude"></a>
<a id="tocSsimpleinclude"></a>
<a id="tocssimpleinclude"></a>

```json
{
  "include": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|include|boolean|false|none|none|

<h2 id="tocS_SpanDictModel">SpanDictModel</h2>
<!-- backwards compatibility -->
<a id="schemaspandictmodel"></a>
<a id="schema_SpanDictModel"></a>
<a id="tocSspandictmodel"></a>
<a id="tocsspandictmodel"></a>

```json
{
  "*": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*|object|false|none|none|

<h2 id="tocS_SsoConfigModel">SsoConfigModel</h2>
<!-- backwards compatibility -->
<a id="schemassoconfigmodel"></a>
<a id="schema_SsoConfigModel"></a>
<a id="tocSssoconfigmodel"></a>
<a id="tocsssoconfigmodel"></a>

```json
{
  "extra": {
    "entity_id": "spn:d6b4feb1-a0bb-408a-b813-6e4eba3e5fef",
    "specification_url": "https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/federationmetadata/2007-06/federationmetadata.xml"
  },
  "provider": "string",
  "type": "saml",
  "url": "https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/saml2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extra|[ExtraModel](#schemaextramodel)|false|none|none|
|provider|string|true|none|usually your company name, only used for visualisation: log in as <provider> employee|
|type|string|false|none|Type of SSO integration, for now only SAML is supported|
|url|string|false|none|SAML-P sign-on endpoint|

#### Enumerated Values

|Property|Value|
|---|---|
|type|saml|

<h2 id="tocS_SsoConfigModelGet">SsoConfigModelGet</h2>
<!-- backwards compatibility -->
<a id="schemassoconfigmodelget"></a>
<a id="schema_SsoConfigModelGet"></a>
<a id="tocSssoconfigmodelget"></a>
<a id="tocsssoconfigmodelget"></a>

```json
{
  "extra": {
    "entity_id": "spn:d6b4feb1-a0bb-408a-b813-6e4eba3e5fef",
    "specification_url": "https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/federationmetadata/2007-06/federationmetadata.xml"
  },
  "id": "string",
  "provider": "string",
  "type": "saml",
  "url": "https://login.microsoftonline.com/e8656a10-4ec3-4cea-aa49-cbe9424c312d/saml2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extra|[ExtraModel](#schemaextramodel)|false|none|none|
|id|string|true|none|none|
|provider|string|true|none|usually your company name, only used for visualisation: log in as <provider> employee|
|type|string|false|none|Type of SSO integration, for now only SAML is supported|
|url|string|false|none|SAML-P sign-on endpoint|

#### Enumerated Values

|Property|Value|
|---|---|
|type|saml|

<h2 id="tocS_SsoModel">SsoModel</h2>
<!-- backwards compatibility -->
<a id="schemassomodel"></a>
<a id="schema_SsoModel"></a>
<a id="tocSssomodel"></a>
<a id="tocsssomodel"></a>

```json
{
  "token": "string",
  "type": "oauth"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|the access token (JWT for oauth or SAML response)|
|type|string|false|none|the type of SSO token|

#### Enumerated Values

|Property|Value|
|---|---|
|type|oauth|
|type|saml|

<h2 id="tocS_StateModelGet">StateModelGet</h2>
<!-- backwards compatibility -->
<a id="schemastatemodelget"></a>
<a id="schema_StateModelGet"></a>
<a id="tocSstatemodelget"></a>
<a id="tocsstatemodelget"></a>

```json
{
  "by": "abcdef123456789abcdef123",
  "since": "1970-01-01T00:00:00Z",
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|by|string|false|none|none|
|since|string(date-time)|false|none|none|
|value|boolean|false|none|none|

<h2 id="tocS_StatusDataModel">StatusDataModel</h2>
<!-- backwards compatibility -->
<a id="schemastatusdatamodel"></a>
<a id="schema_StatusDataModel"></a>
<a id="tocSstatusdatamodel"></a>
<a id="tocsstatusdatamodel"></a>

```json
{
  "archived": true,
  "data": true,
  "escalate": true,
  "feedback": true,
  "lock": true,
  "ready_accepted": true,
  "ready_attempts": 0,
  "reject": true,
  "reject_accepted": true,
  "reject_attempts": 0,
  "sampling": true,
  "submit_accepted": true,
  "submit_attempts": 0,
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|none|
|data|boolean|false|none|none|
|escalate|boolean|false|none|none|
|feedback|boolean|false|none|none|
|lock|boolean|false|none|none|
|ready_accepted|boolean|false|none|none|
|ready_attempts|integer|false|none|none|
|reject|boolean|false|none|none|
|reject_accepted|boolean|false|none|none|
|reject_attempts|integer|false|none|none|
|sampling|boolean|false|none|none|
|submit_accepted|boolean|false|none|none|
|submit_attempts|integer|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_StatusDataPost">StatusDataPost</h2>
<!-- backwards compatibility -->
<a id="schemastatusdatapost"></a>
<a id="schema_StatusDataPost"></a>
<a id="tocSstatusdatapost"></a>
<a id="tocsstatusdatapost"></a>

```json
{
  "escalate": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "last_version": "string",
  "lock": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "opened_by": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "reject": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "status_data": {
    "archived": true,
    "data": true,
    "escalate": true,
    "feedback": true,
    "lock": true,
    "ready_accepted": true,
    "ready_attempts": 0,
    "reject": true,
    "reject_accepted": true,
    "reject_attempts": 0,
    "sampling": true,
    "submit_accepted": true,
    "submit_attempts": 0,
    "success": true
  },
  "submitted": {
    "by": "abcdef123456789abcdef123",
    "since": "1970-01-01T00:00:00Z",
    "value": true
  },
  "timings": {
    "done_time": "1970-01-01T00:00:00Z",
    "feedback_time": "1970-01-01T00:00:00Z",
    "processing_period": 0,
    "receive_time": "1970-01-01T00:00:00Z",
    "start_time": "1970-01-01T00:00:00Z",
    "submit_time": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|escalate|[StateModelGet](#schemastatemodelget)|false|none|none|
|last_version|string|false|none|none|
|lock|[StateModelGet](#schemastatemodelget)|false|none|none|
|opened_by|[StateModelGet](#schemastatemodelget)|false|none|none|
|reject|[StateModelGet](#schemastatemodelget)|false|none|none|
|status_data|[StatusDataModel](#schemastatusdatamodel)|false|none|none|
|submitted|[StateModelGet](#schemastatemodelget)|false|none|none|
|timings|[TimingsModelGet](#schematimingsmodelget)|false|none|none|

<h2 id="tocS_TableAnnotationPost">TableAnnotationPost</h2>
<!-- backwards compatibility -->
<a id="schematableannotationpost"></a>
<a id="schema_TableAnnotationPost"></a>
<a id="tocStableannotationpost"></a>
<a id="tocstableannotationpost"></a>

```json
{
  "bottom_right": [
    0,
    0,
    0
  ],
  "columns": [
    {
      "field_name": "string",
      "x_bounds": [
        0,
        0
      ]
    }
  ],
  "first_row_y_bounds": [
    0,
    0
  ],
  "header_bottom_y": 0,
  "name": "string",
  "top_left": [
    0,
    0,
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bottom_right|[integer]|false|none|none|
|columns|[[column_bound](#schemacolumn_bound)]|false|none|none|
|first_row_y_bounds|[integer]|false|none|none|
|header_bottom_y|integer|false|none|none|
|name|string|false|none|none|
|top_left|[integer]|false|none|none|

<h2 id="tocS_TableExtractionSettingsModel">TableExtractionSettingsModel</h2>
<!-- backwards compatibility -->
<a id="schematableextractionsettingsmodel"></a>
<a id="schema_TableExtractionSettingsModel"></a>
<a id="tocStableextractionsettingsmodel"></a>
<a id="tocstableextractionsettingsmodel"></a>

```json
{
  "field_settings": {
    "*": {
      "property1": {
        "default_value": "string",
        "expected_pattern": "string",
        "nested_field_patterns": {
          "*": {
            "property1": "string",
            "property2": "string"
          }
        },
        "override_default_patterns": true
      },
      "property2": {
        "default_value": "string",
        "expected_pattern": "string",
        "nested_field_patterns": {
          "*": {
            "property1": "string",
            "property2": "string"
          }
        },
        "override_default_patterns": true
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field_settings|[FieldSettingsDictModel](#schemafieldsettingsdictmodel)|false|none|none|

<h2 id="tocS_TableModel">TableModel</h2>
<!-- backwards compatibility -->
<a id="schematablemodel"></a>
<a id="schema_TableModel"></a>
<a id="tocStablemodel"></a>
<a id="tocstablemodel"></a>

```json
{
  "collapsed": true,
  "columns": [
    {
      "category": "annotation",
      "count_in_evaluation": true,
      "description": "string",
      "display_name": "string",
      "field_name": "string",
      "formula": "string",
      "initialized": true,
      "is_library": false,
      "mandatory": true,
      "mandatory_if": {},
      "multiple": true,
      "options": [
        {
          "active": true,
          "display_name": "string",
          "name": "string"
        }
      ],
      "scope": "section",
      "type": "string",
      "visible": true,
      "visible_if": {}
    }
  ],
  "contains_line_items": true,
  "initialized": true,
  "label": "string",
  "scope": "section"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collapsed|boolean|false|none|none|
|columns|[[LabelModel](#schemalabelmodel)]|false|none|none|
|contains_line_items|boolean|false|none|none|
|initialized|boolean|false|none|none|
|label|string|false|none|none|
|scope|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|document|
|scope|page|
|scope|section|

<h2 id="tocS_TagFieldModelGet">TagFieldModelGet</h2>
<!-- backwards compatibility -->
<a id="schematagfieldmodelget"></a>
<a id="schema_TagFieldModelGet"></a>
<a id="tocStagfieldmodelget"></a>
<a id="tocstagfieldmodelget"></a>

```json
{
  "tag_fields": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag_fields|object|false|none|none|

<h2 id="tocS_TenantModelGet">TenantModelGet</h2>
<!-- backwards compatibility -->
<a id="schematenantmodelget"></a>
<a id="schema_TenantModelGet"></a>
<a id="tocStenantmodelget"></a>
<a id="tocstenantmodelget"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_TenantModelPatch">TenantModelPatch</h2>
<!-- backwards compatibility -->
<a id="schematenantmodelpatch"></a>
<a id="schema_TenantModelPatch"></a>
<a id="tocStenantmodelpatch"></a>
<a id="tocstenantmodelpatch"></a>

```json
{
  "code": 0,
  "email": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|email|string|false|none|none|

<h2 id="tocS_ThresholdModel">ThresholdModel</h2>
<!-- backwards compatibility -->
<a id="schemathresholdmodel"></a>
<a id="schema_ThresholdModel"></a>
<a id="tocSthresholdmodel"></a>
<a id="tocsthresholdmodel"></a>

```json
{
  "annotations": {},
  "lines": {},
  "sections": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|none|
|lines|object|false|none|none|
|sections|object|false|none|none|

<h2 id="tocS_TimingsModelGet">TimingsModelGet</h2>
<!-- backwards compatibility -->
<a id="schematimingsmodelget"></a>
<a id="schema_TimingsModelGet"></a>
<a id="tocStimingsmodelget"></a>
<a id="tocstimingsmodelget"></a>

```json
{
  "done_time": "1970-01-01T00:00:00Z",
  "feedback_time": "1970-01-01T00:00:00Z",
  "processing_period": 0,
  "receive_time": "1970-01-01T00:00:00Z",
  "start_time": "1970-01-01T00:00:00Z",
  "submit_time": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done_time|string(date-time)|false|none|none|
|feedback_time|string(date-time)|false|none|none|
|processing_period|number|false|none|none|
|receive_time|string(date-time)|false|none|none|
|start_time|string(date-time)|false|none|none|
|submit_time|string(date-time)|false|none|none|

<h2 id="tocS_TokenModelBase">TokenModelBase</h2>
<!-- backwards compatibility -->
<a id="schematokenmodelbase"></a>
<a id="schema_TokenModelBase"></a>
<a id="tocStokenmodelbase"></a>
<a id="tocstokenmodelbase"></a>

```json
{
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[[TokenRoleModel](#schematokenrolemodel)]|false|none|the user roles|
|username|string|true|none|the user username|

<h2 id="tocS_TokenReplyModel">TokenReplyModel</h2>
<!-- backwards compatibility -->
<a id="schematokenreplymodel"></a>
<a id="schema_TokenReplyModel"></a>
<a id="tocStokenreplymodel"></a>
<a id="tocstokenreplymodel"></a>

```json
{
  "authentication_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentication_token|string|true|none|none|

<h2 id="tocS_TokenRoleModel">TokenRoleModel</h2>
<!-- backwards compatibility -->
<a id="schematokenrolemodel"></a>
<a id="schema_TokenRoleModel"></a>
<a id="tocStokenrolemodel"></a>
<a id="tocstokenrolemodel"></a>

```json
{
  "document_id": "string",
  "inbox": "abcdef123456789abcdef123",
  "role": "abcdef123456789abcdef123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_id|string|false|none|limited to a document|
|inbox|string|false|none|none|
|role|string|true|none|none|

<h2 id="tocS_UserModelGet">UserModelGet</h2>
<!-- backwards compatibility -->
<a id="schemausermodelget"></a>
<a id="schema_UserModelGet"></a>
<a id="tocSusermodelget"></a>
<a id="tocsusermodelget"></a>

```json
{
  "active": true,
  "confirmed_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|Inactive users have to reset their password first|
|confirmed_at|string(date-time)|false|none|none|
|id|string|true|none|none|
|roles|[[UserRoleModel](#schemauserrolemodel)]|true|none|the user roles|
|username|string|true|none|the user username|

<h2 id="tocS_UserModelPatch">UserModelPatch</h2>
<!-- backwards compatibility -->
<a id="schemausermodelpatch"></a>
<a id="schema_UserModelPatch"></a>
<a id="tocSusermodelpatch"></a>
<a id="tocsusermodelpatch"></a>

```json
{
  "roles": [
    {
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[[UserRoleModelPatch](#schemauserrolemodelpatch)]|false|none|the user roles|
|username|string|false|none|the user username|

<h2 id="tocS_UserModelPost">UserModelPost</h2>
<!-- backwards compatibility -->
<a id="schemausermodelpost"></a>
<a id="schema_UserModelPost"></a>
<a id="tocSusermodelpost"></a>
<a id="tocsusermodelpost"></a>

```json
{
  "active": true,
  "password": "string",
  "roles": [
    {
      "document_id": "string",
      "inbox": "abcdef123456789abcdef123",
      "role": "abcdef123456789abcdef123"
    }
  ],
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|Inactive users have to reset their password first|
|password|string|false|none|the user password|
|roles|[[UserRoleModel](#schemauserrolemodel)]|true|none|the user roles|
|username|string|true|none|the user username|

<h2 id="tocS_UserRoleModel">UserRoleModel</h2>
<!-- backwards compatibility -->
<a id="schemauserrolemodel"></a>
<a id="schema_UserRoleModel"></a>
<a id="tocSuserrolemodel"></a>
<a id="tocsuserrolemodel"></a>

```json
{
  "document_id": "string",
  "inbox": "abcdef123456789abcdef123",
  "role": "abcdef123456789abcdef123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_id|string|false|none|limited to a document|
|inbox|string|false|none|none|
|role|string|true|none|none|

<h2 id="tocS_UserRoleModelPatch">UserRoleModelPatch</h2>
<!-- backwards compatibility -->
<a id="schemauserrolemodelpatch"></a>
<a id="schema_UserRoleModelPatch"></a>
<a id="tocSuserrolemodelpatch"></a>
<a id="tocsuserrolemodelpatch"></a>

```json
{
  "inbox": "abcdef123456789abcdef123",
  "role": "abcdef123456789abcdef123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inbox|string|false|none|none|
|role|string|false|none|none|

<h2 id="tocS_VersionCompare">VersionCompare</h2>
<!-- backwards compatibility -->
<a id="schemaversioncompare"></a>
<a id="schema_VersionCompare"></a>
<a id="tocSversioncompare"></a>
<a id="tocsversioncompare"></a>

```json
{
  "cmp_version_1": "string",
  "cmp_version_2": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cmp_version_1|string|true|none|none|
|cmp_version_2|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_VersionPost">VersionPost</h2>
<!-- backwards compatibility -->
<a id="schemaversionpost"></a>
<a id="schema_VersionPost"></a>
<a id="tocSversionpost"></a>
<a id="tocsversionpost"></a>

```json
{
  "annotations": {
    "string": [
      {
        "gold": "string",
        "text": "string",
        "textual_coord": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "visual_coord": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ]
  },
  "cmp_version": "string",
  "evaluate": true,
  "lines": {
    "string": [
      {
        "string": {
          "gold": "string",
          "text": "string",
          "textual_coord": [
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "visual_coord": [
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      }
    ]
  },
  "name": "string",
  "sections": [
    {
      "confidence": 0,
      "document_type": "string",
      "format": "abcdef123456789abcdef123",
      "page": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[annotations](#schemaannotations)|false|none|none|
|cmp_version|string|false|none|none|
|evaluate|boolean|false|none|none|
|lines|[lines](#schemalines)|false|none|none|
|name|string|false|none|none|
|sections|[[SectionAtom](#schemasectionatom)]|false|none|none|

<h2 id="tocS_WorkflowModel">WorkflowModel</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowmodel"></a>
<a id="schema_WorkflowModel"></a>
<a id="tocSworkflowmodel"></a>
<a id="tocsworkflowmodel"></a>

```json
{
  "graph": {},
  "links": {},
  "nodes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|graph|object|false|none|none|
|links|object|false|none|none|
|nodes|object|false|none|none|

<h2 id="tocS_annotations">annotations</h2>
<!-- backwards compatibility -->
<a id="schemaannotations"></a>
<a id="schema_annotations"></a>
<a id="tocSannotations"></a>
<a id="tocsannotations"></a>

```json
{
  "string": [
    {
      "gold": "string",
      "text": "string",
      "textual_coord": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "visual_coord": [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|string|[[EvaluationAtom](#schemaevaluationatom)]|false|none|none|

<h2 id="tocS_cells">cells</h2>
<!-- backwards compatibility -->
<a id="schemacells"></a>
<a id="schema_cells"></a>
<a id="tocScells"></a>
<a id="tocscells"></a>

```json
{
  "string": {
    "gold": "string",
    "text": "string",
    "textual_coord": [
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "visual_coord": [
      0,
      0,
      0,
      0,
      0,
      0
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|string|[EvaluationAtom](#schemaevaluationatom)|false|none|none|

<h2 id="tocS_column_bound">column_bound</h2>
<!-- backwards compatibility -->
<a id="schemacolumn_bound"></a>
<a id="schema_column_bound"></a>
<a id="tocScolumn_bound"></a>
<a id="tocscolumn_bound"></a>

```json
{
  "field_name": "string",
  "x_bounds": [
    0,
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field_name|string|false|none|none|
|x_bounds|[integer]|false|none|none|

<h2 id="tocS_dictionary">dictionary</h2>
<!-- backwards compatibility -->
<a id="schemadictionary"></a>
<a id="schema_dictionary"></a>
<a id="tocSdictionary"></a>
<a id="tocsdictionary"></a>

```json
{}
```

<h2 id="tocS_lines">lines</h2>
<!-- backwards compatibility -->
<a id="schemalines"></a>
<a id="schema_lines"></a>
<a id="tocSlines"></a>
<a id="tocslines"></a>

```json
{
  "string": [
    {
      "string": {
        "gold": "string",
        "text": "string",
        "textual_coord": [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "visual_coord": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|string|[[cells](#schemacells)]|false|none|none|
