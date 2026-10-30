<h1 id="api-reference">API Reference v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Cohere's API

The Cohere API for interacting with Chat, Embed and Rerank models.

Base URLs:

* <a href="https://api.cohere.com">https://api.cohere.com</a> - production

<a href="https://cohere.com/terms-of-use">Terms of service</a>
Email: <a href="mailto:team@cohere.com">Cohere Developers</a> 
Web: <a href="https://cohere.com/">Cohere Developers</a> 
License: <a href="https://cohere.com/terms-of-use">proprietary</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="api-reference-datasets">/datasets</h1>

Datasets API

## List Datasets

<a id="opIdlist-datasets"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/datasets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/datasets`

List datasets that have been created.

<h3 id="list-datasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetType|query|string|false|optional filter by dataset type|
|before|query|string(date-time)|false|optional filter before a date|
|after|query|string(date-time)|false|optional filter after a date|
|limit|query|number|false|optional limit to number of results|
|offset|query|number|false|optional offset to start of results|
|validationStatus|query|[DatasetValidationStatus](#schemadatasetvalidationstatus)|false|optional filter by validation status|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|validationStatus|unknown|
|validationStatus|queued|
|validationStatus|processing|
|validationStatus|failed|
|validationStatus|validated|
|validationStatus|skipped|

> Example responses

> 200 Response

```json
{
  "datasets": [
    {
      "id": "string",
      "name": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "dataset_type": "embed-input",
      "validation_status": "unknown",
      "validation_error": "string",
      "schema": "string",
      "required_fields": [
        "string"
      ],
      "preserve_fields": [
        "string"
      ],
      "dataset_parts": [
        {
          "id": "string",
          "name": "string",
          "url": "string",
          "index": 0,
          "size_bytes": 0,
          "num_rows": 0,
          "original_url": "string",
          "samples": [
            "string"
          ]
        }
      ],
      "validation_warnings": [
        "string"
      ],
      "metrics": {
        "finetune_dataset_metrics": {
          "trainable_token_count": 0,
          "total_examples": 0,
          "train_examples": 0,
          "train_size_bytes": 0,
          "eval_examples": 0,
          "eval_size_bytes": 0,
          "reranker_data_metrics": {
            "num_train_queries": 0,
            "num_train_relevant_passages": 0,
            "num_train_hard_negatives": 0,
            "num_eval_queries": 0,
            "num_eval_relevant_passages": 0,
            "num_eval_hard_negatives": 0
          },
          "chat_data_metrics": {
            "num_train_turns": 0,
            "num_eval_turns": 0,
            "preamble": "string"
          },
          "classify_data_metrics": {
            "label_metrics": [
              {
                "total_examples": 0,
                "label": "string",
                "samples": [
                  "string"
                ]
              }
            ]
          }
        }
      }
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="list-datasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="list-datasets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasets|[[Dataset](#schemadataset)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a Dataset

<a id="opIdcreate-dataset"></a>

> Code samples

```bash
curl 'https://api.cohere.com/v1/datasets?name=string&type=embed-input' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'data=@/path/to/file' \
  -F 'eval_data=@/path/to/file'
```

`POST /v1/datasets`

Create a dataset by uploading a file. See ['Dataset Creation'](https://docs.cohere.com/docs/datasets#dataset-creation) for more information.

> Body parameter

```yaml
data: string
eval_data: string
```

<h3 id="create-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|The name of the uploaded dataset.|
|type|query|[DatasetType](#schemadatasettype)|true|The dataset type, which is used to validate the data. The only valid type is `embed-input` used in conjunction with the Embed Jobs API.|
|keep_original_file|query|boolean|false|Indicates if the original file should be stored.|
|skip_malformed_input|query|boolean|false|Indicates whether rows with malformed input should be dropped (instead of failing the validation check). Dropped rows will be returned in the warnings field.|
|keep_fields|query|[string]|false|List of names of fields that will be persisted in the Dataset. By default the Dataset will retain only the required fields indicated in the [schema for the corresponding Dataset type](https://docs.cohere.com/docs/datasets#dataset-types). For example, datasets of type `embed-input` will drop all fields other than the required `text` field. If any of the fields in `keep_fields` are missing from the uploaded file, Dataset validation will fail.|
|optional_fields|query|[string]|false|List of names of fields that will be persisted in the Dataset. By default the Dataset will retain only the required fields indicated in the [schema for the corresponding Dataset type](https://docs.cohere.com/docs/datasets#dataset-types). For example, Datasets of type `embed-input` will drop all fields other than the required `text` field. If any of the fields in `optional_fields` are missing from the uploaded file, Dataset validation will pass.|
|text_separator|query|string|false|Raw .txt uploads will be split into entries using the text_separator value.|
|csv_delimiter|query|string|false|The delimiter used for .csv uploads.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|object|false|none|
|» data|body|string(binary)|true|The file to upload|
|» eval_data|body|string(binary)|false|An optional evaluation file to upload|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|embed-input|
|type|embed-result|
|type|cluster-result|
|type|cluster-outliers|
|type|reranker-finetune-input|
|type|single-label-classification-finetune-input|
|type|chat-finetune-input|
|type|multi-label-classification-finetune-input|
|type|batch-chat-input|
|type|batch-openai-chat-input|
|type|batch-embed-v2-input|
|type|batch-chat-v2-input|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="create-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="create-a-dataset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The dataset ID|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Dataset Usage

<a id="opIdget-dataset-usage"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/datasets/usage \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/datasets/usage`

View the dataset storage usage for your Organization. Each Organization can have up to 10GB of storage across all their users.

<h3 id="get-dataset-usage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "organization_usage": 0
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="get-dataset-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="get-dataset-usage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organization_usage|number(int64)|false|none|The total number of bytes used by the organization.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a Dataset

<a id="opIdget-dataset"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/datasets/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/datasets/{id}`

Retrieve a dataset by ID. See ['Datasets'](https://docs.cohere.com/docs/datasets) for more information.

<h3 id="get-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "dataset": {
    "id": "string",
    "name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "dataset_type": "embed-input",
    "validation_status": "unknown",
    "validation_error": "string",
    "schema": "string",
    "required_fields": [
      "string"
    ],
    "preserve_fields": [
      "string"
    ],
    "dataset_parts": [
      {
        "id": "string",
        "name": "string",
        "url": "string",
        "index": 0,
        "size_bytes": 0,
        "num_rows": 0,
        "original_url": "string",
        "samples": [
          "string"
        ]
      }
    ],
    "validation_warnings": [
      "string"
    ],
    "metrics": {
      "finetune_dataset_metrics": {
        "trainable_token_count": 0,
        "total_examples": 0,
        "train_examples": 0,
        "train_size_bytes": 0,
        "eval_examples": 0,
        "eval_size_bytes": 0,
        "reranker_data_metrics": {
          "num_train_queries": 0,
          "num_train_relevant_passages": 0,
          "num_train_hard_negatives": 0,
          "num_eval_queries": 0,
          "num_eval_relevant_passages": 0,
          "num_eval_hard_negatives": 0
        },
        "chat_data_metrics": {
          "num_train_turns": 0,
          "num_eval_turns": 0,
          "preamble": "string"
        },
        "classify_data_metrics": {
          "label_metrics": [
            {
              "total_examples": 0,
              "label": "string",
              "samples": [
                "string"
              ]
            }
          ]
        }
      }
    }
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="get-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="get-a-dataset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|[Dataset](#schemadataset)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a Dataset

<a id="opIddelete-dataset"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/datasets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/datasets/{id}`

Delete a dataset by ID. Datasets are automatically deleted after 30 days, but they can also be deleted manually.

<h3 id="delete-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="delete-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="delete-a-dataset-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="api-reference-connectors">/connectors</h1>

Connectors API

## List Connectors

<a id="opIdlist-connectors"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/connectors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/connectors`

<aside class="warning">
This operation is deprecated
</aside>

Returns a list of connectors ordered by descending creation date (newer first). See ['Managing your Connector'](https://docs.cohere.com/docs/managing-your-connector) for more information.

<h3 id="list-connectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|number|false|Maximum number of connectors to return [0, 100].|
|offset|query|number|false|Number of connectors to skip before returning results [0, inf].|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "connectors": [
    {
      "id": "string",
      "organization_id": "string",
      "name": "string",
      "description": "string",
      "url": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "excludes": [
        "string"
      ],
      "auth_type": "string",
      "oauth": {
        "client_id": "string",
        "client_secret": "string",
        "authorize_url": "string",
        "token_url": "string",
        "scope": "string"
      },
      "auth_status": "valid",
      "active": true,
      "continue_on_failure": true
    }
  ],
  "total_count": 0
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="list-connectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListConnectorsResponse](#schemalistconnectorsresponse)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="list-connectors-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a Connector

<a id="opIdcreate-connector"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/connectors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "url": "string",
    "excludes": [
      "string"
    ],
    "oauth": {
      "client_id": "string",
      "client_secret": "string",
      "authorize_url": "string",
      "token_url": "string",
      "scope": "string"
    },
    "active": true,
    "continue_on_failure": false,
    "service_auth": {
      "type": "noscheme",
      "token": "string"
    }
  }'
```

`POST /v1/connectors`

<aside class="warning">
This operation is deprecated
</aside>

Creates a new connector. The connector is tested during registration and will cancel registration when the test is unsuccessful. See ['Creating and Deploying a Connector'](https://docs.cohere.com/v1/docs/creating-and-deploying-a-connector) for more information.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "url": "string",
  "excludes": [
    "string"
  ],
  "oauth": {
    "client_id": "string",
    "client_secret": "string",
    "authorize_url": "string",
    "token_url": "string",
    "scope": "string"
  },
  "active": true,
  "continue_on_failure": false,
  "service_auth": {
    "type": "noscheme",
    "token": "string"
  }
}
```

<h3 id="create-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|[CreateConnectorRequest](#schemacreateconnectorrequest)|true|none|
|» name|body|string|true|A human-readable name for the connector.|
|» description|body|string|false|A description of the connector.|
|» url|body|string|true|The URL of the connector that will be used to search for documents.|
|» excludes|body|[string]|false|A list of fields to exclude from the prompt (fields remain in the document).|
|» oauth|body|[CreateConnectorOAuth](#schemacreateconnectoroauth)|false|The OAuth 2.0 configuration for the connector. Cannot be specified if service_auth is specified.|
|» active|body|boolean|false|Whether the connector is active or not.|
|» continue_on_failure|body|boolean|false|Whether a chat request should continue or not if the request to this connector fails.|
|» service_auth|body|[CreateConnectorServiceAuth](#schemacreateconnectorserviceauth)|false|The service to service authentication configuration for the connector. Cannot be specified if oauth is specified.|

> Example responses

> 200 Response

```json
{
  "connector": {
    "id": "string",
    "organization_id": "string",
    "name": "string",
    "description": "string",
    "url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "excludes": [
      "string"
    ],
    "auth_type": "string",
    "oauth": {
      "client_id": "string",
      "client_secret": "string",
      "authorize_url": "string",
      "token_url": "string",
      "scope": "string"
    },
    "auth_status": "valid",
    "active": true,
    "continue_on_failure": true
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="create-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateConnectorResponse](#schemacreateconnectorresponse)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="create-a-connector-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a Connector

<a id="opIdget-connector"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/connectors/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/connectors/{id}`

<aside class="warning">
This operation is deprecated
</aside>

Retrieve a connector by ID. See ['Connectors'](https://docs.cohere.com/docs/connectors) for more information.

<h3 id="get-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the connector to retrieve.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "connector": {
    "id": "string",
    "organization_id": "string",
    "name": "string",
    "description": "string",
    "url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "excludes": [
      "string"
    ],
    "auth_type": "string",
    "oauth": {
      "client_id": "string",
      "client_secret": "string",
      "authorize_url": "string",
      "token_url": "string",
      "scope": "string"
    },
    "auth_status": "valid",
    "active": true,
    "continue_on_failure": true
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="get-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetConnectorResponse](#schemagetconnectorresponse)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="get-a-connector-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a Connector

<a id="opIddelete-connector"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/connectors/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/connectors/{id}`

<aside class="warning">
This operation is deprecated
</aside>

Delete a connector by ID. See ['Connectors'](https://docs.cohere.com/docs/connectors) for more information.

<h3 id="delete-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the connector to delete.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="delete-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DeleteConnectorResponse](#schemadeleteconnectorresponse)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="delete-a-connector-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a Connector

<a id="opIdupdate-connector"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/connectors/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "url": "string",
    "excludes": [
      "string"
    ],
    "oauth": {
      "client_id": "string",
      "client_secret": "string",
      "authorize_url": "string",
      "token_url": "string",
      "scope": "string"
    },
    "active": true,
    "continue_on_failure": false,
    "service_auth": {
      "type": "noscheme",
      "token": "string"
    }
  }'
```

`PATCH /v1/connectors/{id}`

<aside class="warning">
This operation is deprecated
</aside>

Update a connector by ID. Omitted fields will not be updated. See ['Managing your Connector'](https://docs.cohere.com/docs/managing-your-connector) for more information.

> Body parameter

```json
{
  "name": "string",
  "url": "string",
  "excludes": [
    "string"
  ],
  "oauth": {
    "client_id": "string",
    "client_secret": "string",
    "authorize_url": "string",
    "token_url": "string",
    "scope": "string"
  },
  "active": true,
  "continue_on_failure": false,
  "service_auth": {
    "type": "noscheme",
    "token": "string"
  }
}
```

<h3 id="update-a-connector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the connector to update.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|[UpdateConnectorRequest](#schemaupdateconnectorrequest)|true|none|
|» name|body|string|false|A human-readable name for the connector.|
|» url|body|string|false|The URL of the connector that will be used to search for documents.|
|» excludes|body|[string]|false|A list of fields to exclude from the prompt (fields remain in the document).|
|» oauth|body|[CreateConnectorOAuth](#schemacreateconnectoroauth)|false|The OAuth 2.0 configuration for the connector. Cannot be specified if service_auth is specified.|
|» active|body|boolean|false|none|
|» continue_on_failure|body|boolean|false|none|
|» service_auth|body|[CreateConnectorServiceAuth](#schemacreateconnectorserviceauth)|false|The service to service authentication configuration for the connector. Cannot be specified if oauth is specified.|

> Example responses

> 200 Response

```json
{
  "connector": {
    "id": "string",
    "organization_id": "string",
    "name": "string",
    "description": "string",
    "url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "excludes": [
      "string"
    ],
    "auth_type": "string",
    "oauth": {
      "client_id": "string",
      "client_secret": "string",
      "authorize_url": "string",
      "token_url": "string",
      "scope": "string"
    },
    "auth_status": "valid",
    "active": true,
    "continue_on_failure": true
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="update-a-connector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateConnectorResponse](#schemaupdateconnectorresponse)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="update-a-connector-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Authorize with oAuth

<a id="opIdoAuthAuthorize-connector"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/connectors/string/oauth/authorize \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/connectors/{id}/oauth/authorize`

<aside class="warning">
This operation is deprecated
</aside>

Authorize the connector with the given ID for the connector oauth app.  See ['Connector Authentication'](https://docs.cohere.com/docs/connector-authentication) for more information.

<h3 id="authorize-with-oauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the connector to authorize.|
|after_token_redirect|query|string|false|The URL to redirect to after the connector has been authorized.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "redirect_url": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="authorize-with-oauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OAuthAuthorizeResponse](#schemaoauthauthorizeresponse)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="authorize-with-oauth-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="api-reference-embed-jobs">/embed-jobs</h1>

Embed Jobs API

## List Embed Jobs

<a id="opIdlist-embed-jobs"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/embed-jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/embed-jobs`

The list embed job endpoint allows users to view all embed jobs history for that specific user.

<h3 id="list-embed-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "embed_jobs": [
    {
      "job_id": "string",
      "name": "string",
      "status": "processing",
      "created_at": "1970-01-01T00:00:00Z",
      "input_dataset_id": "string",
      "output_dataset_id": "string",
      "model": "string",
      "truncate": "START",
      "meta": {
        "api_version": {
          "version": "string",
          "is_deprecated": true,
          "is_experimental": true
        },
        "billed_units": {
          "images": 0,
          "input_tokens": 0,
          "image_tokens": 0,
          "output_tokens": 0,
          "search_units": 0,
          "classifications": 0,
          "pages": 0
        },
        "tokens": {
          "input_tokens": 0,
          "output_tokens": 0
        },
        "cached_tokens": 0,
        "warnings": [
          "string"
        ]
      }
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="list-embed-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListEmbedJobResponse](#schemalistembedjobresponse)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="list-embed-jobs-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-API-Warning|string||The name of the project that is making the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an Embed Job

<a id="opIdcreate-embed-job"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/embed-jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "model": "string",
    "dataset_id": "string",
    "input_type": "search_document",
    "name": "string",
    "embedding_types": [
      "float"
    ],
    "truncate": "END"
  }'
```

`POST /v1/embed-jobs`

This API launches an async Embed job for a [Dataset](https://docs.cohere.com/docs/datasets) of type `embed-input`. The result of a completed embed job is new Dataset of type `embed-output`, which contains the original text entries and the corresponding embeddings.

> Body parameter

```json
{
  "model": "string",
  "dataset_id": "string",
  "input_type": "search_document",
  "name": "string",
  "embedding_types": [
    "float"
  ],
  "truncate": "END"
}
```

<h3 id="create-an-embed-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|[CreateEmbedJobRequest](#schemacreateembedjobrequest)|false|none|
|» model|body|string(string)|true|ID of the embedding model.<br><br>Available models and corresponding embedding dimensions:<br><br>- `embed-english-v3.0` : 1024<br>- `embed-multilingual-v3.0` : 1024<br>- `embed-english-light-v3.0` : 384<br>- `embed-multilingual-light-v3.0` : 384<br>|
|» dataset_id|body|string|true|ID of a [Dataset](https://docs.cohere.com/docs/datasets). The Dataset must be of type `embed-input` and must have a validation status `Validated`|
|» input_type|body|[EmbedInputType](#schemaembedinputtype)|true|Specifies the type of input passed to the model. Required for embedding models v3 and higher.<br><br>- `"search_document"`: Used for embeddings stored in a vector database for search use-cases.<br>- `"search_query"`: Used for embeddings of search queries run against a vector DB to find relevant documents.<br>- `"classification"`: Used for embeddings passed through a text classifier.<br>- `"clustering"`: Used for the embeddings run through a clustering algorithm.<br>- `"image"`: Used for embeddings with image input.<br>|
|» name|body|string|false|The name of the embed job.|
|» embedding_types|body|[[EmbeddingType](#schemaembeddingtype)]|false|Specifies the types of embeddings you want to get back. Not required and default is None, which returns the Embed Floats response type. Can be one or more of the following types.<br><br>* `"float"`: Use this when you want to get back the default float embeddings. Valid for all models.<br>* `"int8"`: Use this when you want to get back signed int8 embeddings. Valid for v3 and newer model versions.<br>* `"uint8"`: Use this when you want to get back unsigned int8 embeddings. Valid for v3 and newer model versions.<br>* `"binary"`: Use this when you want to get back signed binary embeddings. Valid for v3 and newer model versions.<br>* `"ubinary"`: Use this when you want to get back unsigned binary embeddings. Valid for v3 and newer model versions.|
|» truncate|body|string|false|One of `START\|END` to specify how the API will handle inputs longer than the maximum token length.<br><br>Passing `START` will discard the start of the input. `END` will discard the end of the input. In both cases, input is discarded until the remaining input is exactly the maximum input token length for the model.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» input_type|search_document|
|» input_type|search_query|
|» input_type|classification|
|» input_type|clustering|
|» input_type|image|
|» embedding_types|float|
|» embedding_types|int8|
|» embedding_types|uint8|
|» embedding_types|binary|
|» embedding_types|ubinary|
|» embedding_types|base64|
|» truncate|START|
|» truncate|END|

> Example responses

> 200 Response

```json
{
  "job_id": "string",
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="create-an-embed-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateEmbedJobResponse](#schemacreateembedjobresponse)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="create-an-embed-job-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-API-Warning|string||The name of the project that is making the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Fetch an Embed Job

<a id="opIdget-embed-job"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/embed-jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/embed-jobs/{id}`

This API retrieves the details about an embed job started by the same user.

<h3 id="fetch-an-embed-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the embed job to retrieve.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "job_id": "string",
  "name": "string",
  "status": "processing",
  "created_at": "1970-01-01T00:00:00Z",
  "input_dataset_id": "string",
  "output_dataset_id": "string",
  "model": "string",
  "truncate": "START",
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="fetch-an-embed-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EmbedJob](#schemaembedjob)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="fetch-an-embed-job-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-API-Warning|string||The name of the project that is making the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel an Embed Job

<a id="opIdcancel-embed-job"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/embed-jobs/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/embed-jobs/{id}/cancel`

This API allows users to cancel an active embed job. Once invoked, the embedding process will be terminated, and users will be charged for the embeddings processed up to the cancellation point. It's important to note that partial results will not be available to users after cancellation.

<h3 id="cancel-an-embed-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the embed job to cancel.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="cancel-an-embed-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="cancel-an-embed-job-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-API-Warning|string||The name of the project that is making the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="api-reference-finetuning">/finetuning</h1>

Finetuning API (Beta)

## Lists fine-tuned models.

<a id="opIdListFinetunedModels"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/finetuning/finetuned-models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/finetuning/finetuned-models`

<aside class="warning">
This operation is deprecated
</aside>

Returns a list of fine-tuned models that the user has access to.

<h3 id="lists-fine-tuned-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer(int32)|false|Maximum number of results to be returned by the server. If 0, defaults to<br>50.|
|page_token|query|string|false|Request a specific page of the list results.|
|order_by|query|string|false|Comma separated list of fields. For example: "created_at,name". The default<br>sorting order is ascending. To specify descending order for a field, append<br>" desc" to the field name. For example: "created_at desc,name".<br><br>Supported sorting fields:<br>  - created_at (default)|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "finetuned_models": [
    {
      "id": "fee37446-7fc7-42f9-a026-c6ba2fcc422d",
      "name": "chat-ft",
      "creator_id": "7a317d97-4d05-427d-9396-f31b9fb92c55",
      "organization_id": "6bdca3d5-3eae-4de0-ac34-786d8063b7ee",
      "settings": {
        "base_model": {
          "name": "medium",
          "version": "14.2.0",
          "base_type": "BASE_TYPE_CHAT",
          "strategy": "STRATEGY_TFEW"
        },
        "dataset_id": "my-dataset-d701tr",
        "hyperparameters": {
          "early_stopping_patience": 6,
          "early_stopping_threshold": 0.01,
          "train_batch_size": 16,
          "train_epochs": 1,
          "learning_rate": 0.01
        }
      },
      "status": "STATUS_READY",
      "created_at": "2024-01-17T20:11:42.907112Z",
      "updated_at": "2024-01-17T20:31:06.464015Z",
      "completed_at": "2024-01-17T20:31:05.047066Z"
    },
    {
      "id": "9d927c5e-7598-4772-98b7-cdf2014e8874",
      "name": "rerank-ft",
      "creator_id": "7a317d97-4d05-427d-9396-f31b9fb92c55",
      "organization_id": "6bdca3d5-3eae-4de0-ac34-786d8063b7ee",
      "settings": {
        "base_model": {
          "name": "english",
          "version": "2.0.0",
          "base_type": "BASE_TYPE_RERANK",
          "strategy": "STRATEGY_VANILLA"
        },
        "dataset_id": "rerank-dataset-d820xf"
      },
      "status": "STATUS_READY",
      "created_at": "2024-01-17T20:17:16.997608Z",
      "updated_at": "2024-01-17T20:50:11.148769Z",
      "completed_at": "2024-01-17T20:42:55.821051Z"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

> 503 Response

```json
{
  "message": "string"
}
```

<h3 id="lists-fine-tuned-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[ListFinetunedModelsResponse](#schemalistfinetunedmodelsresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Status Service Unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Trains and deploys a fine-tuned model.

<a id="opIdCreateFinetunedModel"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/finetuning/finetuned-models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "settings": {
      "base_model": {
        "name": "string",
        "base_type": "BASE_TYPE_UNSPECIFIED",
        "strategy": "STRATEGY_UNSPECIFIED"
      },
      "dataset_id": "string",
      "hyperparameters": {
        "early_stopping_patience": 0,
        "early_stopping_threshold": 0,
        "train_batch_size": 0,
        "train_epochs": 0,
        "learning_rate": 0,
        "lora_alpha": 0,
        "lora_rank": 0,
        "lora_target_modules": "LORA_TARGET_MODULES_UNSPECIFIED"
      },
      "wandb": {
        "project": "string",
        "api_key": "string",
        "entity": "string"
      }
    }
  }'
```

`POST /v1/finetuning/finetuned-models`

<aside class="warning">
This operation is deprecated
</aside>

Creates a new fine-tuned model. The model will be trained on the dataset specified in the request body. The training process may take some time, and the model will be available once the training is complete.

> Body parameter

```json
{
  "name": "string",
  "settings": {
    "base_model": {
      "name": "string",
      "base_type": "BASE_TYPE_UNSPECIFIED",
      "strategy": "STRATEGY_UNSPECIFIED"
    },
    "dataset_id": "string",
    "hyperparameters": {
      "early_stopping_patience": 0,
      "early_stopping_threshold": 0,
      "train_batch_size": 0,
      "train_epochs": 0,
      "learning_rate": 0,
      "lora_alpha": 0,
      "lora_rank": 0,
      "lora_target_modules": "LORA_TARGET_MODULES_UNSPECIFIED"
    },
    "wandb": {
      "project": "string",
      "api_key": "string",
      "entity": "string"
    }
  }
}
```

<h3 id="trains-and-deploys-a-fine-tuned-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|[FinetunedModel](#schemafinetunedmodel)|true|Information about the fine-tuned model. Must contain name and settings.|
|» name|body|string|true|FinetunedModel name (e.g. `foobar`).|
|» settings|body|[Settings](#schemasettings)|true|**Deprecated.** FinetunedModel settings such as dataset, hyperparameters...|

> Example responses

> 200 Response

```json
{
  "finetuned_model": {
    "id": "string",
    "name": "string",
    "creator_id": "string",
    "organization_id": "string",
    "settings": {
      "base_model": {
        "name": "string",
        "version": "string",
        "base_type": "BASE_TYPE_UNSPECIFIED",
        "strategy": "STRATEGY_UNSPECIFIED"
      },
      "dataset_id": "string",
      "hyperparameters": {
        "early_stopping_patience": 0,
        "early_stopping_threshold": 0,
        "train_batch_size": 0,
        "train_epochs": 0,
        "learning_rate": 0,
        "lora_alpha": 0,
        "lora_rank": 0,
        "lora_target_modules": "LORA_TARGET_MODULES_UNSPECIFIED"
      },
      "multi_label": true,
      "wandb": {
        "project": "string",
        "api_key": "string",
        "entity": "string"
      }
    },
    "status": "STATUS_UNSPECIFIED",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "completed_at": "1970-01-01T00:00:00Z",
    "last_used": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

> 503 Response

```json
{
  "message": "string"
}
```

<h3 id="trains-and-deploys-a-fine-tuned-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[CreateFinetunedModelResponse](#schemacreatefinetunedmodelresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Status Service Unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Returns a fine-tuned model by ID.

<a id="opIdGetFinetunedModel"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/finetuning/finetuned-models/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/finetuning/finetuned-models/{id}`

<aside class="warning">
This operation is deprecated
</aside>

Retrieve a fine-tuned model by its ID.

<h3 id="returns-a-fine-tuned-model-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The fine-tuned model ID.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "finetuned_model": {
    "id": "fee37446-7fc7-42f9-a026-c6ba2fcc422d",
    "name": "chat-ft",
    "creator_id": "7a317d97-4d05-427d-9396-f31b9fb92c55",
    "organization_id": "6bdca3d5-3eae-4de0-ac34-786d8063b7ee",
    "settings": {
      "base_model": {
        "name": "medium",
        "version": "14.2.0",
        "base_type": "BASE_TYPE_CHAT",
        "strategy": "STRATEGY_TFEW"
      },
      "dataset_id": "my-dataset-d701tr",
      "hyperparameters": {
        "early_stopping_patience": 6,
        "early_stopping_threshold": 0.01,
        "train_batch_size": 16,
        "train_epochs": 1,
        "learning_rate": 0.01
      }
    },
    "status": "STATUS_READY",
    "created_at": "2024-01-17T20:11:42.907112Z",
    "updated_at": "2024-01-17T20:31:06.464015Z",
    "completed_at": "2024-01-17T20:31:05.047066Z"
  }
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

> 503 Response

```json
{
  "message": "string"
}
```

<h3 id="returns-a-fine-tuned-model-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[GetFinetunedModelResponse](#schemagetfinetunedmodelresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Status Service Unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Deletes a fine-tuned model.

<a id="opIdDeleteFinetunedModel"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/finetuning/finetuned-models/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/finetuning/finetuned-models/{id}`

<aside class="warning">
This operation is deprecated
</aside>

Deletes a fine-tuned model. The model will be removed from the system and will no longer be available for use.
This operation is irreversible.

<h3 id="deletes-a-fine-tuned-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The fine-tuned model ID.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

> 503 Response

```json
{
  "message": "string"
}
```

<h3 id="deletes-a-fine-tuned-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[DeleteFinetunedModelResponse](#schemadeletefinetunedmodelresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Status Service Unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Updates a fine-tuned model.

<a id="opIdUpdateFinetunedModel"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/finetuning/finetuned-models/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "settings": {
      "base_model": {
        "name": "string",
        "base_type": "BASE_TYPE_UNSPECIFIED",
        "strategy": "STRATEGY_UNSPECIFIED"
      },
      "dataset_id": "string",
      "hyperparameters": {
        "early_stopping_patience": 0,
        "early_stopping_threshold": 0,
        "train_batch_size": 0,
        "train_epochs": 0,
        "learning_rate": 0,
        "lora_alpha": 0,
        "lora_rank": 0,
        "lora_target_modules": "LORA_TARGET_MODULES_UNSPECIFIED"
      },
      "wandb": {
        "project": "string",
        "api_key": "string",
        "entity": "string"
      }
    }
  }'
```

`PATCH /v1/finetuning/finetuned-models/{id}`

<aside class="warning">
This operation is deprecated
</aside>

Updates the fine-tuned model with the given ID. The model will be updated with the new settings and name provided in the request body.

> Body parameter

```json
{
  "name": "string",
  "settings": {
    "base_model": {
      "name": "string",
      "base_type": "BASE_TYPE_UNSPECIFIED",
      "strategy": "STRATEGY_UNSPECIFIED"
    },
    "dataset_id": "string",
    "hyperparameters": {
      "early_stopping_patience": 0,
      "early_stopping_threshold": 0,
      "train_batch_size": 0,
      "train_epochs": 0,
      "learning_rate": 0,
      "lora_alpha": 0,
      "lora_rank": 0,
      "lora_target_modules": "LORA_TARGET_MODULES_UNSPECIFIED"
    },
    "wandb": {
      "project": "string",
      "api_key": "string",
      "entity": "string"
    }
  }
}
```

<h3 id="updates-a-fine-tuned-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|FinetunedModel ID.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|object|true|Information about the fine-tuned model. Must contain name and settings.|
|» name|body|string|true|FinetunedModel name (e.g. `foobar`).|
|» settings|body|[Settings](#schemasettings)|true|**Deprecated.** FinetunedModel settings such as dataset, hyperparameters...|

> Example responses

> 200 Response

```json
{
  "finetuned_model": {
    "id": "string",
    "name": "string",
    "creator_id": "string",
    "organization_id": "string",
    "settings": {
      "base_model": {
        "name": "string",
        "version": "string",
        "base_type": "BASE_TYPE_UNSPECIFIED",
        "strategy": "STRATEGY_UNSPECIFIED"
      },
      "dataset_id": "string",
      "hyperparameters": {
        "early_stopping_patience": 0,
        "early_stopping_threshold": 0,
        "train_batch_size": 0,
        "train_epochs": 0,
        "learning_rate": 0,
        "lora_alpha": 0,
        "lora_rank": 0,
        "lora_target_modules": "LORA_TARGET_MODULES_UNSPECIFIED"
      },
      "multi_label": true,
      "wandb": {
        "project": "string",
        "api_key": "string",
        "entity": "string"
      }
    },
    "status": "STATUS_UNSPECIFIED",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "completed_at": "1970-01-01T00:00:00Z",
    "last_used": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

> 503 Response

```json
{
  "message": "string"
}
```

<h3 id="updates-a-fine-tuned-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[UpdateFinetunedModelResponse](#schemaupdatefinetunedmodelresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Status Service Unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Fetch history of statuses for a fine-tuned model.

<a id="opIdListEvents"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/finetuning/finetuned-models/string/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/finetuning/finetuned-models/{finetuned_model_id}/events`

<aside class="warning">
This operation is deprecated
</aside>

Returns a list of events that occurred during the life-cycle of the fine-tuned model.
The events are ordered by creation time, with the most recent event first.
The list can be paginated using `page_size` and `page_token` parameters.

<h3 id="fetch-history-of-statuses-for-a-fine-tuned-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|finetuned_model_id|path|string|true|The parent fine-tuned model ID.|
|page_size|query|integer(int32)|false|Maximum number of results to be returned by the server. If 0, defaults to<br>50.|
|page_token|query|string|false|Request a specific page of the list results.|
|order_by|query|string|false|Comma separated list of fields. For example: "created_at,name". The default<br>sorting order is ascending. To specify descending order for a field, append<br>" desc" to the field name. For example: "created_at desc,name".<br><br>Supported sorting fields:<br>  - created_at (default)|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "user_id": "7a317d97-4d05-427d-9396-f31b9fb92c55",
      "status": "STATUS_QUEUED",
      "created_at": "2024-01-17T20:11:45.267960Z"
    },
    {
      "user_id": "7a317d97-4d05-427d-9396-f31b9fb92c55",
      "status": "STATUS_FINETUNING",
      "created_at": "2024-01-17T20:11:46.000862Z"
    },
    {
      "user_id": "7a317d97-4d05-427d-9396-f31b9fb92c55",
      "status": "STATUS_DEPLOYING_API",
      "created_at": "2024-01-17T20:31:05.047066Z"
    },
    {
      "status": "STATUS_READY",
      "created_at": "2024-01-17T20:31:06.988655Z"
    }
  ],
  "total_size": 5
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

> 503 Response

```json
{
  "message": "string"
}
```

<h3 id="fetch-history-of-statuses-for-a-fine-tuned-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[ListEventsResponse](#schemalisteventsresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Status Service Unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve training metrics for fine-tuned models.

<a id="opIdListTrainingStepMetrics"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/finetuning/finetuned-models/string/training-step-metrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/finetuning/finetuned-models/{finetuned_model_id}/training-step-metrics`

<aside class="warning">
This operation is deprecated
</aside>

Returns a list of metrics measured during the training of a fine-tuned model.
The metrics are ordered by step number, with the most recent step first.
The list can be paginated using `page_size` and `page_token` parameters.

<h3 id="retrieve-training-metrics-for-fine-tuned-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|finetuned_model_id|path|string|true|The parent fine-tuned model ID.|
|page_size|query|integer(int32)|false|Maximum number of results to be returned by the server. If 0, defaults to<br>50.|
|page_token|query|string|false|Request a specific page of the list results.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "step_metrics": [
    {
      "created_at": "2024-01-17T20:24:26.952802658Z",
      "metrics": {
        "accuracy": 0.4557601809501648,
        "cross_entropy": 4.264331340789795,
        "generation_accuracy": 0.4557601809501648,
        "generation_cross_entropy": 4.264331340789795,
        "step": 0
      }
    },
    {
      "created_at": "2024-01-17T20:25:19.331940174Z",
      "step_number": 9,
      "metrics": {
        "accuracy": 0.7393720149993896,
        "cross_entropy": 0.7702581286430359,
        "generation_accuracy": 0.7393720149993896,
        "generation_cross_entropy": 0.7702581286430359,
        "step": 9
      }
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

> 503 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieve-training-metrics-for-fine-tuned-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[ListTrainingStepMetricsResponse](#schemalisttrainingstepmetricsresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Status Service Unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="api-reference-default">Default</h1>

## Chat API (v1)

<a id="opIdchat"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/chat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": "string",
    "model": "string",
    "stream": true,
    "preamble": "string",
    "chat_history": [
      {
        "role": "CHATBOT",
        "message": "string",
        "tool_calls": [
          {
            "name": "string",
            "parameters": {}
          }
        ]
      }
    ],
    "conversation_id": "string",
    "prompt_truncation": "OFF",
    "connectors": [
      {
        "id": "string",
        "user_access_token": "string",
        "continue_on_failure": true,
        "options": {}
      }
    ],
    "search_queries_only": true,
    "documents": [
      {
        "id": "string",
        "property1": "string",
        "property2": "string"
      }
    ],
    "citation_quality": "ENABLED",
    "temperature": 0,
    "max_tokens": 0,
    "max_input_tokens": 0,
    "k": 0,
    "p": 0.75,
    "seed": 0,
    "stop_sequences": [
      "string"
    ],
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "raw_prompting": true,
    "tools": [
      {
        "name": "string",
        "description": "string",
        "parameter_definitions": {
          "property1": {
            "description": "string",
            "type": "string",
            "required": false
          },
          "property2": {
            "description": "string",
            "type": "string",
            "required": false
          }
        }
      }
    ],
    "tool_results": [
      {
        "call": {
          "name": "string",
          "parameters": {}
        },
        "outputs": [
          {}
        ]
      }
    ],
    "force_single_step": true,
    "response_format": {
      "type": "text"
    },
    "safety_mode": "CONTEXTUAL"
  }'
```

`POST /v1/chat`

Generates a text response to a user message.
To learn how to use the Chat API and RAG follow our [Text Generation guides](https://docs.cohere.com/docs/chat-api).


> Body parameter

```json
{
  "message": "string",
  "model": "string",
  "stream": true,
  "preamble": "string",
  "chat_history": [
    {
      "role": "CHATBOT",
      "message": "string",
      "tool_calls": [
        {
          "name": "string",
          "parameters": {}
        }
      ]
    }
  ],
  "conversation_id": "string",
  "prompt_truncation": "OFF",
  "connectors": [
    {
      "id": "string",
      "user_access_token": "string",
      "continue_on_failure": true,
      "options": {}
    }
  ],
  "search_queries_only": true,
  "documents": [
    {
      "id": "string",
      "property1": "string",
      "property2": "string"
    }
  ],
  "citation_quality": "ENABLED",
  "temperature": 0,
  "max_tokens": 0,
  "max_input_tokens": 0,
  "k": 0,
  "p": 0.75,
  "seed": 0,
  "stop_sequences": [
    "string"
  ],
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "raw_prompting": true,
  "tools": [
    {
      "name": "string",
      "description": "string",
      "parameter_definitions": {
        "property1": {
          "description": "string",
          "type": "string",
          "required": false
        },
        "property2": {
          "description": "string",
          "type": "string",
          "required": false
        }
      }
    }
  ],
  "tool_results": [
    {
      "call": {
        "name": "string",
        "parameters": {}
      },
      "outputs": [
        {}
      ]
    }
  ],
  "force_single_step": true,
  "response_format": {
    "type": "text"
  },
  "safety_mode": "CONTEXTUAL"
}
```

<h3 id="chat-api-v1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|Accepts|header|string|false|Pass text/event-stream to receive the streamed response as server-sent events. The default is `\n` delimited events.<br>|
|body|body|object|false|none|
|» message|body|string|true|Text input for the model to respond to.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» model|body|string|false|The name of a compatible [Cohere model](https://docs.cohere.com/docs/models) or the ID of a [fine-tuned](https://docs.cohere.com/docs/chat-fine-tuning) model.<br><br>Compatible Deployments: Cohere Platform, Private Deployments<br>|
|» stream|body|boolean|false|Defaults to `false`.<br><br>When `true`, the response will be a JSON stream of events. The final event will contain the complete response, and will have an `event_type` of `"stream-end"`.<br><br>Streaming is beneficial for user interfaces that render the contents of the response piece by piece, as it gets generated.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» preamble|body|string|false|When specified, the default Cohere preamble will be replaced with the provided one. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style, and use the `SYSTEM` role.<br><br>The `SYSTEM` role is also used for the contents of the optional `chat_history=` parameter. When used with the `chat_history=` parameter it adds content throughout a conversation. Conversely, when used with the `preamble=` parameter it adds content at the start of the conversation only.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» chat_history|body|[[Message](#schemamessage)]|false|A list of previous messages between the user and the model, giving the model conversational context for responding to the user's `message`.<br><br>Each item represents a single message in the chat history, excluding the current user turn. It has two properties: `role` and `message`. The `role` identifies the sender (`CHATBOT`, `SYSTEM`, or `USER`), while the `message` contains the text content.<br><br>The chat_history parameter should not be used for `SYSTEM` messages in most cases. Instead, to add a `SYSTEM` role message at the beginning of a conversation, the `preamble` parameter should be used.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» conversation_id|body|string|false|An alternative to `chat_history`.<br><br>Providing a `conversation_id` creates or resumes a persisted conversation with the specified ID. The ID can be any non empty string.<br><br>Compatible Deployments: Cohere Platform<br>|
|» prompt_truncation|body|string|false|Defaults to `AUTO` when `connectors` are specified and `OFF` in all other cases.<br><br>Dictates how the prompt will be constructed.<br><br>With `prompt_truncation` set to "AUTO", some elements from `chat_history` and `documents` will be dropped in an attempt to construct a prompt that fits within the model's context length limit. During this process the order of the documents and chat history will be changed and ranked by relevance.<br><br>With `prompt_truncation` set to "AUTO_PRESERVE_ORDER", some elements from `chat_history` and `documents` will be dropped in an attempt to construct a prompt that fits within the model's context length limit. During this process the order of the documents and chat history will be preserved as they are inputted into the API.<br><br>With `prompt_truncation` set to "OFF", no elements will be dropped. If the sum of the inputs exceeds the model's context length limit, a `TooManyTokens` error will be returned.<br><br>Compatible Deployments:<br> - AUTO: Cohere Platform Only<br> - AUTO_PRESERVE_ORDER: Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» connectors|body|[[ChatConnector](#schemachatconnector)]|false|**Deprecated.** Accepts `{"id": "web-search"}`, and/or the `"id"` for a custom [connector](https://docs.cohere.com/docs/connectors), if you've [created](https://docs.cohere.com/v1/docs/creating-and-deploying-a-connector) one.<br><br>When specified, the model's reply will be enriched with information found by querying each of the connectors (RAG).<br><br>Compatible Deployments: Cohere Platform<br>|
|» search_queries_only|body|boolean|false|**Deprecated.** Defaults to `false`.<br><br>When `true`, the response will only contain a list of generated search queries, but no search will take place, and no reply from the model to the user's `message` will be generated.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» documents|body|[[ChatDocument](#schemachatdocument)]|false|A list of relevant documents that the model can cite to generate a more accurate reply. Each document is a string-string dictionary.<br><br>Example:<br>```<br>[<br>  { "title": "Tall penguins", "text": "Emperor penguins are the tallest." },<br>  { "title": "Penguin habitats", "text": "Emperor penguins only live in Antarctica." },<br>]<br>```<br><br>Keys and values from each document will be serialized to a string and passed to the model. The resulting generation will include citations that reference some of these documents.<br><br>Some suggested keys are "text", "author", and "date". For better generation quality, it is recommended to keep the total word count of the strings in the dictionary to under 300 words.<br><br>An `id` field (string) can be optionally supplied to identify the document in the citations. This field will not be passed to the model.<br><br>An `_excludes` field (array of strings) can be optionally supplied to omit some key-value pairs from being shown to the model. The omitted fields will still show up in the citation object. The "_excludes" field will not be passed to the model.<br><br>See ['Document Mode'](https://docs.cohere.com/docs/retrieval-augmented-generation-rag#document-mode) in the guide for more information.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» citation_quality|body|string|false|Defaults to `"enabled"`.<br>Citations are enabled by default for models that support it, but can be turned off by setting `"type": "disabled"`.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» temperature|body|number(float)|false|Defaults to `0.3`.<br><br>A non-negative float that tunes the degree of randomness in generation. Lower temperatures mean less random generations, and higher temperatures mean more random generations.<br><br>Randomness can be further maximized by increasing the  value of the `p` parameter.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» max_tokens|body|integer|false|The maximum number of tokens the model will generate as part of the response. Note: Setting a low value may result in incomplete generations.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» max_input_tokens|body|integer|false|The maximum number of input tokens to send to the model. If not specified, `max_input_tokens` is the model's context length limit minus a small buffer.<br><br>Input will be truncated according to the `prompt_truncation` parameter.<br><br>Compatible Deployments: Cohere Platform<br>|
|» k|body|integer|false|Ensures only the top `k` most likely tokens are considered for generation at each step.<br>Defaults to `0`, min value of `0`, max value of `500`.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» p|body|number|false|Ensures that only the most likely tokens, with total probability mass of `p`, are considered for generation at each step. If both `k` and `p` are enabled, `p` acts after `k`.<br>Defaults to `0.75`. min value of `0.01`, max value of `0.99`.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» seed|body|integer|false|If specified, the backend will make a best effort to sample tokens<br>deterministically, such that repeated requests with the same<br>seed and parameters should return the same result. However,<br>determinism cannot be totally guaranteed.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» stop_sequences|body|[string]|false|A list of up to 5 strings that the model will use to stop generation. If the model generates a string that matches any of the strings in the list, it will stop generating tokens and return the generated text up to that point not including the stop sequence.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» frequency_penalty|body|number|false|Defaults to `0.0`, min value of `0.0`, max value of `1.0`.<br><br>Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» presence_penalty|body|number|false|Defaults to `0.0`, min value of `0.0`, max value of `1.0`.<br><br>Used to reduce repetitiveness of generated tokens. Similar to `frequency_penalty`, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» raw_prompting|body|boolean|false|When enabled, the user's prompt will be sent to the model without<br>any pre-processing.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» tools|body|[[Tool](#schematool)]|false|A list of available tools (functions) that the model may suggest invoking before producing a text response.<br><br>When `tools` is passed (without `tool_results`), the `text` field in the response will be `""` and the `tool_calls` field in the response will be populated with a list of tool calls that need to be made. If no calls need to be made, the `tool_calls` array will be empty.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» tool_results|body|[[ToolResult](#schematoolresult)]|false|A list of results from invoking tools recommended by the model in the previous chat turn. Results are used to produce a text response and will be referenced in citations. When using `tool_results`, `tools` must be passed as well.<br>Each tool_result contains information about how it was invoked, as well as a list of outputs in the form of dictionaries.<br><br>**Note**: `outputs` must be a list of objects. If your tool returns a single object (eg `{"status": 200}`), make sure to wrap it in a list.<br>```<br>tool_results = [<br>  {<br>    "call": {<br>      "name": <tool name>,<br>      "parameters": {<br>        <param name>: <param value><br>      }<br>    },<br>    "outputs": [{<br>      <key>: <value><br>    }]<br>  },<br>  ...<br>]<br>```<br>**Note**: Chat calls with `tool_results` should not be included in the Chat history to avoid duplication of the message text.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» force_single_step|body|boolean|false|Forces the chat to be single step. Defaults to `false`.|
|» response_format|body|[ResponseFormat](#schemaresponseformat)|false|Configuration for forcing the model output to adhere to the specified format. Supported on [Command R 03-2024](https://docs.cohere.com/docs/command-r), [Command R+ 04-2024](https://docs.cohere.com/docs/command-r-plus) and newer models.<br><br>The model can be forced into outputting JSON objects (with up to 5 levels of nesting) by setting `{ "type": "json_object" }`.<br><br>A [JSON Schema](https://json-schema.org/) can optionally be provided, to ensure a specific structure.<br><br>**Note**: When using  `{ "type": "json_object" }` your `message` should always explicitly instruct the model to generate a JSON (eg: _"Generate a JSON ..."_) . Otherwise the model may end up getting stuck generating an infinite stream of characters and eventually run out of context length.<br>**Limitation**: The parameter is not supported in RAG mode (when any of `connectors`, `documents`, `tools`, `tool_results` are provided).<br>|
|» safety_mode|body|string|false|Used to select the [safety instruction](https://docs.cohere.com/docs/safety-modes) inserted into the prompt. Defaults to `CONTEXTUAL`.<br>When `NONE` is specified, the safety instruction will be omitted.<br><br>Safety modes are not yet configurable in combination with `tools`, `tool_results` and `documents` parameters.<br><br>**Note**: This parameter is only compatible newer Cohere models, starting with [Command R 08-2024](https://docs.cohere.com/docs/command-r#august-2024-release) and [Command R+ 08-2024](https://docs.cohere.com/docs/command-r-plus#august-2024-release).<br><br>**Note**: `command-r7b-12-2024` and newer models only support `"CONTEXTUAL"` and `"STRICT"` modes.<br><br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accepts|text/event-stream|
|» prompt_truncation|OFF|
|» prompt_truncation|AUTO|
|» prompt_truncation|AUTO_PRESERVE_ORDER|
|» citation_quality|ENABLED|
|» citation_quality|DISABLED|
|» citation_quality|FAST|
|» citation_quality|ACCURATE|
|» citation_quality|OFF|
|» safety_mode|CONTEXTUAL|
|» safety_mode|STRICT|
|» safety_mode|NONE|

> Example responses

> 200 Response

```json
{
  "text": "string",
  "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "response_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "citations": [
    {
      "start": 0,
      "end": 0,
      "text": "string",
      "document_ids": [
        "string"
      ],
      "type": "TEXT_CONTENT"
    }
  ],
  "documents": [
    {
      "id": "string",
      "property1": "string",
      "property2": "string"
    }
  ],
  "is_search_required": true,
  "search_queries": [
    {
      "text": "string",
      "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "search_results": [
    {
      "search_query": {
        "text": "string",
        "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "connector": {
        "id": "string"
      },
      "document_ids": [
        "string"
      ],
      "error_message": "string",
      "continue_on_failure": true
    }
  ],
  "finish_reason": "COMPLETE",
  "tool_calls": [
    {
      "name": "string",
      "parameters": {}
    }
  ],
  "chat_history": [
    {
      "role": "CHATBOT",
      "message": "string",
      "tool_calls": [
        {
          "name": "string",
          "parameters": {}
        }
      ]
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="chat-api-v1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="chat-api-v1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[NonStreamedChatResponse](#schemanonstreamedchatresponse)|false|none|none|
|*oneOf*|[StreamedChatResponse](#schemastreamedchatresponse)|false|none|StreamedChatResponse is returned in streaming mode (specified with `stream=True` in the request).|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Chat API (v2)

<a id="opIdchatv2"></a>

> Code samples

```bash
curl https://api.cohere.com/v2/chat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "stream": true,
    "model": "string",
    "messages": [
      {
        "role": "user",
        "content": "string"
      }
    ],
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "string",
          "description": "string",
          "parameters": {}
        }
      }
    ],
    "strict_tools": true,
    "documents": [
      "string"
    ],
    "citation_options": {
      "mode": "ENABLED"
    },
    "response_format": {
      "type": "text"
    },
    "safety_mode": "CONTEXTUAL",
    "max_tokens": 0,
    "stop_sequences": [
      "string"
    ],
    "temperature": 0,
    "seed": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "k": 0,
    "p": 0.75,
    "logprobs": true,
    "tool_choice": "REQUIRED",
    "thinking": {
      "type": "enabled",
      "token_budget": 1
    },
    "priority": 0
  }'
```

`POST /v2/chat`

Generates a text response to a user message and streams it down, token by token. To learn how to use the Chat API with streaming follow our [Text Generation guides](https://docs.cohere.com/v2/docs/chat-api).

Follow the [Migration Guide](https://docs.cohere.com/v2/docs/migrating-v1-to-v2) for instructions on moving from API v1 to API v2.


> Body parameter

```json
{
  "stream": true,
  "model": "string",
  "messages": [
    {
      "role": "user",
      "content": "string"
    }
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "string",
        "parameters": {}
      }
    }
  ],
  "strict_tools": true,
  "documents": [
    "string"
  ],
  "citation_options": {
    "mode": "ENABLED"
  },
  "response_format": {
    "type": "text"
  },
  "safety_mode": "CONTEXTUAL",
  "max_tokens": 0,
  "stop_sequences": [
    "string"
  ],
  "temperature": 0,
  "seed": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "k": 0,
  "p": 0.75,
  "logprobs": true,
  "tool_choice": "REQUIRED",
  "thinking": {
    "type": "enabled",
    "token_budget": 1
  },
  "priority": 0
}
```

<h3 id="chat-api-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|object|false|none|
|» stream|body|boolean|false|Defaults to `false`.<br><br>When `true`, the response will be a SSE stream of events.<br><br>Streaming is beneficial for user interfaces that render the contents of the response piece by piece, as it gets generated.<br>|
|» model|body|string|true|The name of a compatible [Cohere model](https://docs.cohere.com/v2/docs/models).|
|» messages|body|[ChatMessages](#schemachatmessages)|true|A list of chat messages in chronological order, representing a conversation between the user and the model.<br><br>Messages can be from `User`, `Assistant`, `Tool` and `System` roles. Learn more about messages and roles in [the Chat API guide](https://docs.cohere.com/v2/docs/chat-api).<br>|
|» tools|body|[[ToolV2](#schematoolv2)]|false|A list of tools (functions) available to the model. The model response may contain 'tool_calls' to the specified tools.<br><br>Learn more in the [Tool Use guide](https://docs.cohere.com/docs/tools).<br>|
|» strict_tools|body|boolean|false|When set to `true`, tool calls in the Assistant message will be forced to follow the tool definition strictly. Learn more in the [Structured Outputs (Tools) guide](https://docs.cohere.com/docs/structured-outputs-json#structured-outputs-tools).<br><br>**Note**: The first few requests with a new set of tools will take longer to process.<br>|
|» documents|body|[string \| [Document](#schemadocument)]|false|A list of relevant documents that the model can cite to generate a more accurate reply. Each document is either a string or document object with content and metadata.<br>|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[Document](#schemadocument)|false|Relevant information that could be used by the model to generate a more accurate reply.<br>The content of each document are generally short (should be under 300 words). Metadata should be used to provide additional information, both the key name and the value will be<br>passed to the model.<br>|
|» citation_options|body|[CitationOptions](#schemacitationoptions)|false|Options for controlling citation generation.|
|» response_format|body|[ResponseFormatV2](#schemaresponseformatv2)|false|Configuration for forcing the model output to adhere to the specified format. Supported on [Command R](https://docs.cohere.com/v2/docs/command-r), [Command R+](https://docs.cohere.com/v2/docs/command-r-plus) and newer models.<br><br>The model can be forced into outputting JSON objects by setting `{ "type": "json_object" }`.<br><br>A [JSON Schema](https://json-schema.org/) can optionally be provided, to ensure a specific structure.<br><br>**Note**: When using  `{ "type": "json_object" }` your `message` should always explicitly instruct the model to generate a JSON (eg: _"Generate a JSON ..."_) . Otherwise the model may end up getting stuck generating an infinite stream of characters and eventually run out of context length.<br><br>**Note**: When `json_schema` is not specified, the generated object can have up to 5 layers of nesting.<br><br>**Limitation**: The parameter is not supported when used in combinations with the `documents` or `tools` parameters.<br>|
|» safety_mode|body|string|false|Used to select the [safety instruction](https://docs.cohere.com/v2/docs/safety-modes) inserted into the prompt. Defaults to `CONTEXTUAL`.<br>When `OFF` is specified, the safety instruction will be omitted.<br><br>Safety modes are not yet configurable in combination with `tools` and `documents` parameters.<br><br>**Note**: This parameter is only compatible newer Cohere models, starting with [Command R 08-2024](https://docs.cohere.com/docs/command-r#august-2024-release) and [Command R+ 08-2024](https://docs.cohere.com/docs/command-r-plus#august-2024-release).<br><br>**Note**: `command-r7b-12-2024` and newer models only support `"CONTEXTUAL"` and `"STRICT"` modes.<br>|
|» max_tokens|body|integer|false|The maximum number of output tokens the model will generate in the response. If not set, `max_tokens` defaults to the model's maximum output token limit. You can find the maximum output token limits for each model in the [model documentation](https://docs.cohere.com/docs/models).<br><br>**Note**: Setting a low value may result in incomplete generations. In such cases, the `finish_reason` field in the response will be set to `"MAX_TOKENS"`.<br><br>**Note**: If `max_tokens` is set higher than the model's maximum output token limit, the generation will be capped at that model-specific maximum limit.<br>|
|» stop_sequences|body|[string]|false|A list of up to 5 strings that the model will use to stop generation. If the model generates a string that matches any of the strings in the list, it will stop generating tokens and return the generated text up to that point not including the stop sequence.<br>|
|» temperature|body|number(float)|false|Defaults to `0.3`.<br><br>A non-negative float that tunes the degree of randomness in generation. Lower temperatures mean less random generations, and higher temperatures mean more random generations.<br><br>Randomness can be further maximized by increasing the  value of the `p` parameter.<br>|
|» seed|body|integer|false|If specified, the backend will make a best effort to sample tokens<br>deterministically, such that repeated requests with the same<br>seed and parameters should return the same result. However,<br>determinism cannot be totally guaranteed.<br>|
|» frequency_penalty|body|number(float)|false|Defaults to `0.0`, min value of `0.0`, max value of `1.0`.<br>Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.<br>|
|» presence_penalty|body|number(float)|false|Defaults to `0.0`, min value of `0.0`, max value of `1.0`.<br>Used to reduce repetitiveness of generated tokens. Similar to `frequency_penalty`, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.<br>|
|» k|body|integer|false|Ensures that only the top `k` most likely tokens are considered for generation at each step. When `k` is set to `0`, k-sampling is disabled.<br>Defaults to `0`, min value of `0`, max value of `500`.<br>|
|» p|body|number(float)|false|Ensures that only the most likely tokens, with total probability mass of `p`, are considered for generation at each step. If both `k` and `p` are enabled, `p` acts after `k`.<br>Defaults to `0.75`. min value of `0.01`, max value of `0.99`.<br>|
|» logprobs|body|boolean|false|Defaults to `false`. When set to `true`, the log probabilities of the generated tokens will be included in the response.<br>|
|» tool_choice|body|string|false|Used to control whether or not the model will be forced to use a tool when answering. When `REQUIRED` is specified, the model will be forced to use at least one of the user-defined tools, and the `tools` parameter must be passed in the request.<br>When `NONE` is specified, the model will be forced **not** to use one of the specified tools, and give a direct response.<br>If tool_choice isn't specified, then the model is free to choose whether to use the specified tools or not.<br><br>**Note**: This parameter is only compatible with models [Command-r7b](https://docs.cohere.com/v2/docs/command-r7b) and newer.<br>|
|» thinking|body|[Thinking](#schemathinking)|false|Configuration for [reasoning features](https://docs.cohere.com/docs/reasoning).<br>|
|» priority|body|integer|false|Controls how early the request is handled. Lower numbers indicate higher priority (default: 0, the highest). When the system is under load, higher-priority requests are processed first and are the least likely to be dropped.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» safety_mode|CONTEXTUAL|
|» safety_mode|STRICT|
|» safety_mode|OFF|
|» tool_choice|REQUIRED|
|» tool_choice|NONE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "finish_reason": "COMPLETE",
  "message": {
    "role": "assistant",
    "tool_calls": [
      {
        "id": "string",
        "type": "function",
        "function": {
          "name": "string",
          "arguments": "string"
        }
      }
    ],
    "tool_plan": "string",
    "content": [
      {
        "type": "text",
        "text": "string"
      }
    ],
    "citations": [
      {
        "start": 0,
        "end": 0,
        "text": "string",
        "sources": [
          {
            "id": "string",
            "tool_output": {}
          }
        ],
        "content_index": 0,
        "type": "TEXT_CONTENT"
      }
    ]
  },
  "usage": {
    "billed_units": {
      "input_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0
  },
  "logprobs": [
    {
      "text": "string",
      "token_ids": [
        0
      ],
      "logprobs": [
        0
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="chat-api-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="chat-api-v2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ChatResponseV2](#schemachatresponsev2)|false|none|none|
|*oneOf*|[StreamedChatResponseV2](#schemastreamedchatresponsev2)|false|none|StreamedChatResponse is returned in streaming mode (specified with `stream=True` in the request).|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Parse API (v2)

<a id="opIdparsev2"></a>

> Code samples

```bash
curl https://api.cohere.com/v2/parse \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "model": "string",
    "document": {
      "type": "image_url",
      "image_url": "string"
    },
    "output_format": "markdown"
  }'
```

`POST /v2/parse`

Parse a document image into structured output. Use `output_format` to select
blocks or markdown (default).

Currently supports `document.type = image_url` only (data URI or remote http(s)
image URL). PDF / file URL inputs are not yet supported.

Image limits: 20 MB file size; 50 megapixels or 200 MB decoded (whichever is
exceeded first).


> Body parameter

```json
{
  "model": "string",
  "document": {
    "type": "image_url",
    "image_url": "string"
  },
  "output_format": "markdown"
}
```

<h3 id="parse-api-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|object|true|none|
|» model|body|string|true|The name of a compatible Cohere parse model.|
|» document|body|[ParseDocument](#schemaparsedocument)|true|Document to parse. Currently only `image_url` documents are supported.<br>|
|» output_format|body|[ParseOutputFormat](#schemaparseoutputformat)|false|Selects the page payload shape in the response. Defaults to `"markdown"`.<br><br>- `"markdown"`: each page includes markdown content. Tables are inlined as<br>  HTML, and images are referenced as `![<description>](<image_id>)` with<br>  matching entries in `page.markdown.images`.<br>- `"blocks"`: each page includes an ordered `blocks` array of text, image,<br>  and table content regions, including bounding boxes where available.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» output_format|blocks|
|» output_format|markdown|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "pages": [
    {
      "index": 0,
      "type": "blocks",
      "blocks": [
        {
          "type": "text",
          "text": {
            "content": "string"
          }
        }
      ]
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  },
  "finish_reason": "COMPLETE"
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="parse-api-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ParseResponse](#schemaparseresponse)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="parse-api-v2-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Generate

<a id="opIdgenerate"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "prompt": "Please explain to me how LLMs work",
    "model": "string",
    "num_generations": 0,
    "stream": true,
    "max_tokens": 0,
    "truncate": "END",
    "temperature": 0,
    "seed": 0,
    "preset": "my-preset-a58sbd",
    "end_sequences": [
      "string"
    ],
    "stop_sequences": [
      "string"
    ],
    "k": 0,
    "p": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "return_likelihoods": "NONE",
    "raw_prompting": true
  }'
```

`POST /v1/generate`

<aside class="warning">
This operation is deprecated
</aside>

<Warning>
This API is marked as "Legacy" and is no longer maintained. Follow the [migration guide](https://docs.cohere.com/docs/migrating-from-cogenerate-to-cochat) to start using the Chat API.
</Warning>
Generates realistic text conditioned on a given input.


> Body parameter

```json
{
  "prompt": "Please explain to me how LLMs work",
  "model": "string",
  "num_generations": 0,
  "stream": true,
  "max_tokens": 0,
  "truncate": "END",
  "temperature": 0,
  "seed": 0,
  "preset": "my-preset-a58sbd",
  "end_sequences": [
    "string"
  ],
  "stop_sequences": [
    "string"
  ],
  "k": 0,
  "p": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "return_likelihoods": "NONE",
  "raw_prompting": true
}
```

<h3 id="generate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|object|false|none|
|» prompt|body|string|true|The input text that serves as the starting point for generating the response.<br>Note: The prompt will be pre-processed and modified before reaching the model.<br>|
|» model|body|string|false|The identifier of the model to generate with. Currently available models are `command` (default), `command-nightly` (experimental), `command-light`, and `command-light-nightly` (experimental).<br>Smaller, "light" models are faster, while larger models will perform better. [Custom models](https://docs.cohere.com/docs/training-custom-models) can also be supplied with their full ID.|
|» num_generations|body|integer|false|The maximum number of generations that will be returned. Defaults to `1`, min value of `1`, max value of `5`.<br>|
|» stream|body|boolean|false|When `true`, the response will be a JSON stream of events. Streaming is beneficial for user interfaces that render the contents of the response piece by piece, as it gets generated.<br><br>The final event will contain the complete response, and will contain an `is_finished` field set to `true`. The event will also contain a `finish_reason`, which can be one of the following:<br>- `COMPLETE` - the model sent back a finished reply<br>- `MAX_TOKENS` - the reply was cut off because the model reached the maximum number of tokens for its context length<br>- `ERROR` - something went wrong when generating the reply<br>- `ERROR_TOXIC` - the model generated a reply that was deemed toxic<br>|
|» max_tokens|body|integer|false|The maximum number of tokens the model will generate as part of the response. Note: Setting a low value may result in incomplete generations.<br><br>This parameter is off by default, and if it's not specified, the model will continue generating until it emits an EOS completion token. See [BPE Tokens](/bpe-tokens-wiki) for more details.<br><br>Can only be set to `0` if `return_likelihoods` is set to `ALL` to get the likelihood of the prompt.<br>|
|» truncate|body|string|false|One of `NONE\|START\|END` to specify how the API will handle inputs longer than the maximum token length.<br><br>Passing `START` will discard the start of the input. `END` will discard the end of the input. In both cases, input is discarded until the remaining input is exactly the maximum input token length for the model.<br><br>If `NONE` is selected, when the input exceeds the maximum input token length an error will be returned.|
|» temperature|body|number|false|A non-negative float that tunes the degree of randomness in generation. Lower temperatures mean less random generations. See [Temperature](/temperature-wiki) for more details.<br>Defaults to `0.75`, min value of `0.0`, max value of `5.0`.<br>|
|» seed|body|integer|false|If specified, the backend will make a best effort to sample tokens<br>deterministically, such that repeated requests with the same<br>seed and parameters should return the same result. However,<br>determinism cannot be totally guaranteed.<br>Compatible Deployments: Cohere Platform, Azure, AWS Sagemaker/Bedrock, Private Deployments<br>|
|» preset|body|string|false|Identifier of a custom preset. A preset is a combination of parameters, such as prompt, temperature etc. You can create presets in the [playground](https://dashboard.cohere.com/playground/generate).<br>When a preset is specified, the `prompt` parameter becomes optional, and any included parameters will override the preset's parameters.<br>|
|» end_sequences|body|[string]|false|The generated text will be cut at the beginning of the earliest occurrence of an end sequence. The sequence will be excluded from the text.|
|» stop_sequences|body|[string]|false|The generated text will be cut at the end of the earliest occurrence of a stop sequence. The sequence will be included the text.|
|» k|body|integer|false|Ensures only the top `k` most likely tokens are considered for generation at each step.<br>Defaults to `0`, min value of `0`, max value of `500`.<br>|
|» p|body|number|false|Ensures that only the most likely tokens, with total probability mass of `p`, are considered for generation at each step. If both `k` and `p` are enabled, `p` acts after `k`.<br>Defaults to `0.75`. min value of `0.01`, max value of `0.99`.<br>|
|» frequency_penalty|body|number|false|Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.<br><br>Using `frequency_penalty` in combination with `presence_penalty` is not supported on newer models.<br>|
|» presence_penalty|body|number|false|Defaults to `0.0`, min value of `0.0`, max value of `1.0`.<br><br>Can be used to reduce repetitiveness of generated tokens. Similar to `frequency_penalty`, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.<br><br>Using `frequency_penalty` in combination with `presence_penalty` is not supported on newer models.<br>|
|» return_likelihoods|body|string|false|One of `GENERATION\|NONE` to specify how and if the token likelihoods are returned with the response. Defaults to `NONE`.<br><br>If `GENERATION` is selected, the token likelihoods will only be provided for generated text.<br><br>WARNING: `ALL` is deprecated, and will be removed in a future release.|
|» raw_prompting|body|boolean|false|When enabled, the user's prompt will be sent to the model without any pre-processing.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» truncate|NONE|
|» truncate|START|
|» truncate|END|
|» return_likelihoods|GENERATION|
|» return_likelihoods|ALL|
|» return_likelihoods|NONE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "prompt": "string",
  "generations": [
    {
      "id": "string",
      "text": "string",
      "index": 0,
      "likelihood": 0,
      "token_likelihoods": [
        {
          "token": "string",
          "likelihood": 0
        }
      ]
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="generate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Generation](#schemageneration)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="generate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-API-Warning|string||The name of the project that is making the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Embed API (v1)

<a id="opIdembed"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/embed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "texts": [
      "string"
    ],
    "images": [
      "string"
    ],
    "model": "string",
    "input_type": "search_document",
    "embedding_types": [
      "float"
    ],
    "truncate": "END"
  }'
```

`POST /v1/embed`

This endpoint returns text and image embeddings. An embedding is a list of floating point numbers that captures semantic information about the content that it represents.

Embeddings can be used to create classifiers as well as empower semantic search. To learn more about embeddings, see the embedding page.

If you want to learn more how to use the embedding model, have a look at the [Semantic Search Guide](https://docs.cohere.com/docs/semantic-search).

> Body parameter

```json
{
  "texts": [
    "string"
  ],
  "images": [
    "string"
  ],
  "model": "string",
  "input_type": "search_document",
  "embedding_types": [
    "float"
  ],
  "truncate": "END"
}
```

<h3 id="embed-api-v1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|object|false|none|
|» texts|body|[string]|false|An array of strings for the model to embed. Maximum number of texts per call is `96`.|
|» images|body|[string]|false|An array of image data URIs for the model to embed.<br><br>The image must be a valid [data URI](https://developer.mozilla.org/en-US/docs/Web/URI/Schemes/data). The image must be in either `image/jpeg`, `image/png`, `image/webp`, or `image/gif` format.<br><br>Image embeddings are supported with Embed v3.0 and newer models.<br><br>For **Embed v3.x** models, the maximum number of images per call is `1`, and each image has a maximum size of `5MB`.<br><br>For **Embed v4.0 and newer** models, there is no limit on the number of images per call. The combined size of all images in the request must be at most `20MB`.|
|» model|body|string|false|ID of one of the available [Embedding models](https://docs.cohere.com/docs/cohere-embed).|
|» input_type|body|[EmbedInputType](#schemaembedinputtype)|false|Specifies the type of input passed to the model. Required for embedding models v3 and higher.<br><br>- `"search_document"`: Used for embeddings stored in a vector database for search use-cases.<br>- `"search_query"`: Used for embeddings of search queries run against a vector DB to find relevant documents.<br>- `"classification"`: Used for embeddings passed through a text classifier.<br>- `"clustering"`: Used for the embeddings run through a clustering algorithm.<br>- `"image"`: Used for embeddings with image input.<br>|
|» embedding_types|body|[[EmbeddingType](#schemaembeddingtype)]|false|Specifies the types of embeddings you want to get back. Not required and default is None, which returns the Embed Floats response type. Can be one or more of the following types.<br><br>* `"float"`: Use this when you want to get back the default float embeddings. Supported with all Embed models.<br>* `"int8"`: Use this when you want to get back signed int8 embeddings. Supported with Embed v3.0 and newer Embed models.<br>* `"uint8"`: Use this when you want to get back unsigned int8 embeddings. Supported with Embed v3.0 and newer Embed models.<br>* `"binary"`: Use this when you want to get back signed binary embeddings. Supported with Embed v3.0 and newer Embed models.<br>* `"ubinary"`: Use this when you want to get back unsigned binary embeddings. Supported with Embed v3.0 and newer Embed models.|
|» truncate|body|string|false|One of `NONE\|START\|END` to specify how the API will handle inputs longer than the maximum token length.<br><br>Passing `START` will discard the start of the input. `END` will discard the end of the input. In both cases, input is discarded until the remaining input is exactly the maximum input token length for the model.<br><br>If `NONE` is selected, when the input exceeds the maximum input token length an error will be returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» input_type|search_document|
|» input_type|search_query|
|» input_type|classification|
|» input_type|clustering|
|» input_type|image|
|» embedding_types|float|
|» embedding_types|int8|
|» embedding_types|uint8|
|» embedding_types|binary|
|» embedding_types|ubinary|
|» embedding_types|base64|
|» truncate|NONE|
|» truncate|START|
|» truncate|END|

> Example responses

> 200 Response

```json
{
  "response_type": "embeddings_floats",
  "id": "string",
  "embeddings": [
    [
      0
    ]
  ],
  "texts": [
    "string"
  ],
  "images": [
    {
      "width": 0,
      "height": 0,
      "format": "string",
      "bit_depth": 0
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="embed-api-v1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="embed-api-v1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[EmbedFloatsResponse](#schemaembedfloatsresponse)|false|none|none|
|*oneOf*|[EmbedByTypeResponse](#schemaembedbytyperesponse)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-API-Warning|string||The name of the project that is making the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Embed API (v2)

<a id="opIdembedv2"></a>

> Code samples

```bash
curl https://api.cohere.com/v2/embed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "texts": [
      "string"
    ],
    "images": [
      "string"
    ],
    "model": "string",
    "input_type": "search_document",
    "inputs": [
      {
        "content": [
          {
            "type": "text",
            "image_url": {
              "url": "string"
            }
          }
        ]
      }
    ],
    "max_tokens": 0,
    "output_dimension": 0,
    "embedding_types": [
      "float"
    ],
    "truncate": "END",
    "priority": 0
  }'
```

`POST /v2/embed`

This endpoint returns text embeddings. An embedding is a list of floating point numbers that captures semantic information about the text that it represents.

Embeddings can be used to create text classifiers as well as empower semantic search. To learn more about embeddings, see the embedding page.

If you want to learn more how to use the embedding model, have a look at the [Semantic Search Guide](https://docs.cohere.com/docs/semantic-search).

> Body parameter

```json
{
  "texts": [
    "string"
  ],
  "images": [
    "string"
  ],
  "model": "string",
  "input_type": "search_document",
  "inputs": [
    {
      "content": [
        {
          "type": "text",
          "image_url": {
            "url": "string"
          }
        }
      ]
    }
  ],
  "max_tokens": 0,
  "output_dimension": 0,
  "embedding_types": [
    "float"
  ],
  "truncate": "END",
  "priority": 0
}
```

<h3 id="embed-api-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|object|false|none|
|» texts|body|[string]|false|An array of strings for the model to embed. Maximum number of texts per call is `96`.|
|» images|body|[string]|false|An array of image data URIs for the model to embed.<br><br>The image must be a valid [data URI](https://developer.mozilla.org/en-US/docs/Web/URI/Schemes/data). The image must be in either `image/jpeg`, `image/png`, `image/webp`, or `image/gif` format.<br><br>Image embeddings are supported with Embed v3.0 and newer models.<br><br>For **Embed v3.x** models, the maximum number of images per call is `1`, and each image has a maximum size of `5MB`.<br><br>For **Embed v4.0 and newer** models, there is no limit on the number of images per call. The combined size of all images in the request must be at most `20MB`.|
|» model|body|string|true|ID of one of the available [Embedding models](https://docs.cohere.com/docs/cohere-embed).|
|» input_type|body|[EmbedInputType](#schemaembedinputtype)|true|Specifies the type of input passed to the model. Required for embedding models v3 and higher.<br><br>- `"search_document"`: Used for embeddings stored in a vector database for search use-cases.<br>- `"search_query"`: Used for embeddings of search queries run against a vector DB to find relevant documents.<br>- `"classification"`: Used for embeddings passed through a text classifier.<br>- `"clustering"`: Used for the embeddings run through a clustering algorithm.<br>- `"image"`: Used for embeddings with image input.<br>|
|» inputs|body|[[EmbedInput](#schemaembedinput)]|false|An array of inputs for the model to embed. Maximum number of inputs per call is `96`. An input can contain a mix of text and image components.|
|» max_tokens|body|integer|false|The maximum number of tokens to embed per input. If the input text is longer than this, it will be truncated according to the `truncate` parameter.|
|» output_dimension|body|integer|false|The number of dimensions of the output embedding. This is only available for `embed-v4` and newer models.<br>For supported dimensions, please refer to the [Embed models](https://docs.cohere.com/docs/cohere-embed) page.|
|» embedding_types|body|[[EmbeddingType](#schemaembeddingtype)]|false|Specifies the types of embeddings you want to get back. Can be one or more of the following types.<br><br>* `"float"`: Use this when you want to get back the default float embeddings. Supported with all Embed models.<br>* `"int8"`: Use this when you want to get back signed int8 embeddings. Supported with Embed v3.0 and newer Embed models.<br>* `"uint8"`: Use this when you want to get back unsigned int8 embeddings. Supported with Embed v3.0 and newer Embed models.<br>* `"binary"`: Use this when you want to get back signed binary embeddings. Supported with Embed v3.0 and newer Embed models.<br>* `"ubinary"`: Use this when you want to get back unsigned binary embeddings. Supported with Embed v3.0 and newer Embed models.<br>* `"base64"`: Use this when you want to get back base64 embeddings. Supported with Embed v3.0 and newer Embed models.|
|» truncate|body|string|false|One of `NONE\|START\|END` to specify how the API will handle inputs longer than the maximum token length.<br><br>Passing `START` will discard the start of the input. `END` will discard the end of the input. In both cases, input is discarded until the remaining input is exactly the maximum input token length for the model.<br><br>If `NONE` is selected, when the input exceeds the maximum input token length an error will be returned.|
|» priority|body|integer|false|Controls how early the request is handled. Lower numbers indicate higher priority (default: 0, the highest). When the system is under load, higher-priority requests are processed first and are the least likely to be dropped.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» input_type|search_document|
|» input_type|search_query|
|» input_type|classification|
|» input_type|clustering|
|» input_type|image|
|» embedding_types|float|
|» embedding_types|int8|
|» embedding_types|uint8|
|» embedding_types|binary|
|» embedding_types|ubinary|
|» embedding_types|base64|
|» truncate|NONE|
|» truncate|START|
|» truncate|END|

> Example responses

> 200 Response

```json
{
  "response_type": "embeddings_floats",
  "id": "string",
  "embeddings": {
    "float": [
      [
        0
      ]
    ],
    "int8": [
      [
        0
      ]
    ],
    "uint8": [
      [
        0
      ]
    ],
    "binary": [
      [
        0
      ]
    ],
    "ubinary": [
      [
        0
      ]
    ],
    "base64": [
      "string"
    ]
  },
  "texts": [
    "string"
  ],
  "images": [
    {
      "width": 0,
      "height": 0,
      "format": "string",
      "bit_depth": 0
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="embed-api-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EmbedByTypeResponse](#schemaembedbytyperesponse)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="embed-api-v2-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-API-Warning|string||The name of the project that is making the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Rerank API (v1)

<a id="opIdrerank"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/rerank \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "model": "string",
    "query": "string",
    "documents": [
      "string"
    ],
    "top_n": 1,
    "rank_fields": [
      "string"
    ],
    "return_documents": false,
    "max_chunks_per_doc": 10
  }'
```

`POST /v1/rerank`

This endpoint takes in a query and a list of texts and produces an ordered array with each text assigned a relevance score.

> Body parameter

```json
{
  "model": "string",
  "query": "string",
  "documents": [
    "string"
  ],
  "top_n": 1,
  "rank_fields": [
    "string"
  ],
  "return_documents": false,
  "max_chunks_per_doc": 10
}
```

<h3 id="rerank-api-v1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|object|false|none|
|» model|body|string|false|The identifier of the model to use, eg `rerank-v3.5`.|
|» query|body|string|true|The search query|
|» documents|body|[string \| [RerankDocument](#schemarerankdocument)]|true|A list of document objects or strings to rerank.<br>If a document is provided the text fields is required and all other fields will be preserved in the response.<br><br>The total max chunks (length of documents * max_chunks_per_doc) must be less than 10000.<br><br>We recommend a maximum of 1,000 documents for optimal endpoint performance.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[RerankDocument](#schemarerankdocument)|false|none|
|» top_n|body|integer|false|The number of most relevant documents or indices to return, defaults to the length of the documents|
|» rank_fields|body|[string]|false|If a JSON object is provided, you can specify which keys you would like to have considered for reranking. The model will rerank based on order of the fields passed in (i.e. rank_fields=['title','author','text'] will rerank using the values in title, author, text  sequentially. If the length of title, author, and text exceeds the context length of the model, the chunking will not re-consider earlier fields). If not provided, the model will use the default text field for ranking.|
|» return_documents|body|boolean|false|- If false, returns results without the doc text - the api will return a list of {index, relevance score} where index is inferred from the list passed into the request.<br>- If true, returns results with the doc text passed in - the api will return an ordered list of {index, text, relevance score} where index + text refers to the list passed into the request.|
|» max_chunks_per_doc|body|integer|false|The maximum number of chunks to produce internally from a document|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "results": [
    {
      "document": {
        "text": "string"
      },
      "index": 0,
      "relevance_score": 0
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="rerank-api-v1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="rerank-api-v1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|results|[object]|true|none|An ordered list of ranked documents|
|» document|object|false|none|If `return_documents` is set as `false` this will return none, if `true` it will return the documents passed in|
|» » text|string|true|none|The text of the document to rerank|
|» index|integer|true|none|Corresponds to the index in the original list of documents to which the ranked document belongs. (i.e. if the first value in the `results` object has an `index` value of 3, it means in the list of documents passed in, the document at `index=3` had the highest relevance)|
|» relevance_score|number(float)|true|none|Relevance scores are normalized to be in the range `[0, 1]`. Scores close to `1` indicate a high relevance to the query, and scores closer to `0` indicate low relevance. It is not accurate to assume a score of 0.9 means the document is 2x more relevant than a document with a score of 0.45|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Rerank API (v2)

<a id="opIdrerankv2"></a>

> Code samples

```bash
curl https://api.cohere.com/v2/rerank \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "model": "string",
    "query": "string",
    "documents": [
      "string"
    ],
    "top_n": 1,
    "max_tokens_per_doc": 0,
    "relevant_spans": {
      "mode": "enabled",
      "threshold": 0.1,
      "max_spans": 1
    },
    "priority": 0
  }'
```

`POST /v2/rerank`

This endpoint takes in a query and a list of texts and produces an ordered array with each text assigned a relevance score.

> Body parameter

```json
{
  "model": "string",
  "query": "string",
  "documents": [
    "string"
  ],
  "top_n": 1,
  "max_tokens_per_doc": 0,
  "relevant_spans": {
    "mode": "enabled",
    "threshold": 0.1,
    "max_spans": 1
  },
  "priority": 0
}
```

<h3 id="rerank-api-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|object|false|none|
|» model|body|string|true|The identifier of the model to use, eg `rerank-v5.0-pro`.|
|» query|body|string|true|The search query|
|» documents|body|[string]|true|A list of texts that will be compared to the `query`.<br>For optimal performance we recommend against sending more than 1,000 documents in a single request.<br><br>**Note**: long documents will automatically be truncated to the value of `max_tokens_per_doc`.<br><br>**Note**: structured data should be formatted as YAML strings for best performance.|
|» top_n|body|integer|false|Limits the number of returned rerank results to the specified value. If not passed, all the rerank results will be returned.|
|» max_tokens_per_doc|body|integer|false|Defaults to `4096`. Long documents will be automatically truncated to the specified number of tokens.|
|» relevant_spans|body|[RerankRelevantSpans](#schemarerankrelevantspans)|false|When enabled, the API response will include the relevant spans of each document that contributed to its rank. This feature is only supported for Rerank v5 and newer models.|
|» priority|body|integer|false|Controls how early the request is handled. Lower numbers indicate higher priority (default: 0, the highest). When the system is under load, higher-priority requests are processed first and are the least likely to be dropped.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "results": [
    {
      "index": 0,
      "relevance_score": 0,
      "relevant_spans": [
        {
          "start": 0,
          "end": 0,
          "score": 0
        }
      ]
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="rerank-api-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="rerank-api-v2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|results|[object]|true|none|An ordered list of ranked documents|
|» index|integer|true|none|Corresponds to the index in the original list of documents to which the ranked document belongs. (i.e. if the first value in the `results` object has an `index` value of 3, it means in the list of documents passed in, the document at `index=3` had the highest relevance)|
|» relevance_score|number(float)|true|none|Relevance scores are normalized to be in the range `[0, 1]`. Scores close to `1` indicate a high relevance to the query, and scores closer to `0` indicate low relevance. It is not accurate to assume a score of 0.9 means the document is 2x more relevant than a document with a score of 0.45|
|» relevant_spans|[[RerankRelevantSpanResponse](#schemarerankrelevantspanresponse)]|false|none|The spans of this document that are most relevant to the query, ordered from most to least relevant. Only returned when the request enabled `relevant_spans` and the model found at least one span for the document.|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Classify

<a id="opIdclassify"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/classify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inputs": [
      "string"
    ],
    "examples": [
      {
        "text": "string",
        "label": "string"
      }
    ],
    "model": "string",
    "preset": "my-preset-a58sbd",
    "truncate": "END"
  }'
```

`POST /v1/classify`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint makes a prediction about which label fits the specified text inputs best. To make a prediction, Classify uses the provided `examples` of text + label pairs as a reference.
Note: [Fine-tuned models](https://docs.cohere.com/docs/classify-fine-tuning) trained on classification examples don't require the `examples` parameter to be passed in explicitly.

> Body parameter

```json
{
  "inputs": [
    "string"
  ],
  "examples": [
    {
      "text": "string",
      "label": "string"
    }
  ],
  "model": "string",
  "preset": "my-preset-a58sbd",
  "truncate": "END"
}
```

<h3 id="classify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|object|false|none|
|» inputs|body|[string]|true|A list of up to 96 texts to be classified. Each one must be a non-empty string.<br>There is, however, no consistent, universal limit to the length a particular input can be. We perform classification on the first `x` tokens of each input, and `x` varies depending on which underlying model is powering classification. The maximum token length for each model is listed in the "max tokens" column [here](https://docs.cohere.com/docs/models).<br>Note: by default the `truncate` parameter is set to `END`, so tokens exceeding the limit will be automatically dropped. This behavior can be disabled by setting `truncate` to `NONE`, which will result in validation errors for longer texts.|
|» examples|body|[[ClassifyExample](#schemaclassifyexample)]|false|An array of examples to provide context to the model. Each example is a text string and its associated label/class. Each unique label requires at least 2 examples associated with it; the maximum number of examples is 2500, and each example has a maximum length of 512 tokens. The values should be structured as `{text: "...",label: "..."}`.<br>Note: [Fine-tuned Models](https://docs.cohere.com/docs/classify-fine-tuning) trained on classification examples don't require the `examples` parameter to be passed in explicitly.|
|» model|body|string|false|ID of a [Fine-tuned](https://docs.cohere.com/v2/docs/classify-starting-the-training) Classify model|
|» preset|body|string|false|**Deprecated.** The ID of a custom playground preset. You can create presets in the [playground](https://dashboard.cohere.com/playground). If you use a preset, all other parameters become optional, and any included parameters will override the preset's parameters.|
|» truncate|body|string|false|One of `NONE\|START\|END` to specify how the API will handle inputs longer than the maximum token length.<br>Passing `START` will discard the start of the input. `END` will discard the end of the input. In both cases, input is discarded until the remaining input is exactly the maximum input token length for the model.<br>If `NONE` is selected, when the input exceeds the maximum input token length an error will be returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» truncate|NONE|
|» truncate|START|
|» truncate|END|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "classifications": [
    {
      "id": "string",
      "input": "string",
      "prediction": "string",
      "predictions": [
        "string"
      ],
      "confidence": 0,
      "confidences": [
        0
      ],
      "labels": {
        "property1": {
          "confidence": 0
        },
        "property2": {
          "confidence": 0
        }
      },
      "classification_type": "single-label"
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="classify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="classify-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|classifications|[object]|true|none|none|
|» id|string|true|none|none|
|» input|string|false|none|The input text that was classified|
|» prediction|string|false|none|**Deprecated.** The predicted label for the associated query (only filled for single-label models)|
|» predictions|[string]|true|none|An array containing the predicted labels for the associated query (only filled for single-label classification)|
|» confidence|number(float)|false|none|**Deprecated.** The confidence score for the top predicted class (only filled for single-label classification)|
|» confidences|[number(float)]|true|none|An array containing the confidence scores of all the predictions in the same order|
|» labels|object|true|none|A map containing each label and its confidence score according to the classifier. All the confidence scores add up to 1 for single-label classification. For multi-label classification the label confidences are independent of each other, so they don't have to sum up to 1.|
|» » **additionalProperties**|object|false|none|none|
|» » » confidence|number(float)|false|none|none|
|» classification_type|string|true|none|The type of classification performed|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» classification_type|single-label|
|» classification_type|multi-label|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-API-Warning|string||Warning description for incorrect usage of the API|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Summarize

<a id="opIdsummarize"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/summarize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "text": "stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstri",
    "length": "medium",
    "format": "paragraph",
    "model": "string",
    "extractiveness": "low",
    "temperature": 0.3,
    "additional_command": "string"
  }'
```

`POST /v1/summarize`

<aside class="warning">
This operation is deprecated
</aside>

<Warning>
This API is marked as "Legacy" and is no longer maintained. Follow the [migration guide](https://docs.cohere.com/docs/migrating-from-cogenerate-to-cochat) to start using the Chat API.
</Warning>
Generates a summary in English for a given text.


> Body parameter

```json
{
  "text": "stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstri",
  "length": "medium",
  "format": "paragraph",
  "model": "string",
  "extractiveness": "low",
  "temperature": 0.3,
  "additional_command": "string"
}
```

<h3 id="summarize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|object|false|none|
|» text|body|string|true|The text to generate a summary for. Can be up to 100,000 characters long. Currently the only supported language is English.|
|» length|body|string|false|One of `short`, `medium`, `long`, or `auto` defaults to `auto`. Indicates the approximate length of the summary. If `auto` is selected, the best option will be picked based on the input text.|
|» format|body|string|false|One of `paragraph`, `bullets`, or `auto`, defaults to `auto`. Indicates the style in which the summary will be delivered - in a free form paragraph or in bullet points. If `auto` is selected, the best option will be picked based on the input text.|
|» model|body|string|false|The identifier of the model to generate the summary with. Currently available models are `command` (default), `command-nightly` (experimental), `command-light`, and `command-light-nightly` (experimental). Smaller, "light" models are faster, while larger models will perform better.|
|» extractiveness|body|string|false|One of `low`, `medium`, `high`, or `auto`, defaults to `auto`. Controls how close to the original text the summary is. `high` extractiveness summaries will lean towards reusing sentences verbatim, while `low` extractiveness summaries will tend to paraphrase more. If `auto` is selected, the best option will be picked based on the input text.|
|» temperature|body|number|false|Ranges from 0 to 5. Controls the randomness of the output. Lower values tend to generate more “predictable” output, while higher values tend to generate more “creative” output. The sweet spot is typically between 0 and 1.|
|» additional_command|body|string|false|A free-form instruction for modifying how the summaries get generated. Should complete the sentence "Generate a summary _". Eg. "focusing on the next steps" or "written by Yoda"|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» length|short|
|» length|medium|
|» length|long|
|» format|paragraph|
|» format|bullets|
|» extractiveness|low|
|» extractiveness|medium|
|» extractiveness|high|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "summary": "string",
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="summarize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="summarize-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Generated ID for the summary|
|summary|string|false|none|Generated summary for the text|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-API-Warning|string||The name of the project that is making the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Tokenize

<a id="opIdtokenize"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/tokenize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "text": "tokenize me! :D",
    "model": "command"
  }'
```

`POST /v1/tokenize`

This endpoint splits input text into smaller units called tokens using byte-pair encoding (BPE). To learn more about tokenization and byte pair encoding, see the tokens page.

> Body parameter

```json
{
  "text": "tokenize me! :D",
  "model": "command"
}
```

<h3 id="tokenize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|object|false|none|
|» text|body|string|true|The string to be tokenized, the minimum text length is 1 character, and the maximum text length is 65536 characters.|
|» model|body|string|true|The input will be tokenized by the tokenizer that is used by this model.|

> Example responses

> 200 Response

```json
{
  "tokens": [
    34160,
    974,
    514,
    34,
    1420,
    69
  ],
  "token_strings": [
    "token",
    "ize'",
    " me",
    "!",
    " :",
    "D"
  ],
  "meta": {
    "api_version": {
      "version": "1"
    }
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="tokenize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="tokenize-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokens|[integer]|true|none|An array of tokens, where each token is an integer.|
|token_strings|[string]|true|none|none|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-API-Warning|string||The name of the project that is making the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Detokenize

<a id="opIddetokenize"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/detokenize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tokens": [
      0
    ],
    "model": "string"
  }'
```

`POST /v1/detokenize`

This endpoint takes tokens using byte-pair encoding and returns their text representation. To learn more about tokenization and byte pair encoding, see the tokens page.

> Body parameter

```json
{
  "tokens": [
    0
  ],
  "model": "string"
}
```

<h3 id="detokenize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|object|false|none|
|» tokens|body|[integer]|true|The list of tokens to be detokenized.|
|» model|body|string|true|An optional parameter to provide the model name. This will ensure that the detokenization is done by the tokenizer used by that model.|

> Example responses

> 200 Response

```json
{
  "text": "string",
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="detokenize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="detokenize-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|A string representing the list of tokens.|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-API-Warning|string||The name of the project that is making the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Check API key

<a id="opIdcheckAPIKey"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/check-api-key \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/check-api-key`

Checks that the api key in the Authorization header is valid and active


<h3 id="check-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "valid": true,
  "organization_id": "string",
  "owner_id": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="check-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="check-api-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|valid|boolean|true|none|none|
|organization_id|string|false|none|none|
|owner_id|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="api-reference-audiotranscriptions">/audio/transcriptions</h1>

## Create a transcription

<a id="opIdcreate-transcription"></a>

> Code samples

```bash
curl https://api.cohere.com/v2/audio/transcriptions \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'model=string' \
  -F 'language=string' \
  -F 'temperature=0' \
  -F 'file=@/path/to/file'
```

`POST /v2/audio/transcriptions`

Transcribe an audio file.

> Body parameter

```yaml
model: string
language: string
temperature: 0
file: string
```

<h3 id="create-a-transcription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» model|body|string|true|ID of the model to use.|
|» language|body|string|true|The language of the input audio, supplied in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.|
|» temperature|body|number|false|The sampling temperature, between 0 and 1. Higher values like 0.8 make the output more random, while lower values like 0.2 make it more focused and deterministic.|
|» file|body|string(binary)|true|The audio file object to transcribe. Supported file extensions are flac, mp3, mpeg, mpga, ogg, and wav.|

> Example responses

> 200 Response

```json
{
  "text": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="create-a-transcription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|Inline|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="create-a-transcription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The transcribed text.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="api-reference-batches">/batches</h1>

## List batches

<a id="opIdListBatches"></a>

> Code samples

```bash
curl https://api.cohere.com/v2/batches \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/batches`

List the batches for the current user

<h3 id="list-batches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer(int32)|false|The maximum number of batches to return. The service may return fewer than<br>this value.<br>If unspecified, at most 50 batches will be returned.<br>The maximum value is 1000; values above 1000 will be coerced to 1000.|
|page_token|query|string|false|A page token, received from a previous `ListBatches` call.<br>Provide this to retrieve the subsequent page.|
|order_by|query|string|false|Batches can be ordered by creation time or last updated time.<br>Use `created_at` for creation time or `updated_at` for last updated time.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "batches": [
    {
      "id": "9439e0e3-49a4-4336-93e3-485fc420bc18",
      "name": "my-batch",
      "creator_id": "b5e1ffb9-49a1-4653-9927-94083316309d",
      "org_id": "62603116-1750-4c04-b1b6-9d5046764bc4",
      "status": "BATCH_STATUS_IN_PROGRESS",
      "model": "command",
      "input_dataset_id": "my-requests-dataset",
      "num_records": 5000
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

> 503 Response

```json
{
  "message": "string"
}
```

<h3 id="list-batches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[ListBatchesResponse](#schemalistbatchesresponse)|
|400|Bad Request|Bad Request|[BatchError](#schemabatcherror)|
|401|Unauthorized|Unauthorized|[BatchError](#schemabatcherror)|
|403|Forbidden|Forbidden|[BatchError](#schemabatcherror)|
|404|Not Found|Not Found|[BatchError](#schemabatcherror)|
|500|Internal Server Error|Internal Server Error|[BatchError](#schemabatcherror)|
|503|Service Unavailable|Status Service Unavailable|[BatchError](#schemabatcherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a batch

<a id="opIdCreateBatch"></a>

> Code samples

```bash
curl https://api.cohere.com/v2/batches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "input_dataset_id": "string",
    "model": "string"
  }'
```

`POST /v2/batches`

Creates and executes a batch from an uploaded dataset of requests

> Body parameter

```json
{
  "name": "string",
  "input_dataset_id": "string",
  "model": "string"
}
```

<h3 id="create-a-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|
|body|body|[Batch](#schemabatch)|true|Information about the batch. Must contain name, input_dataset_id, and<br>model. Output-only fields are ignored.|
|» name|body|string|true|Batch name (e.g. `foobar`).|
|» input_dataset_id|body|string|true|ID of the dataset the batch reads inputs from.|
|» model|body|string|true|The name of the model the batch uses.|

> Example responses

> 200 Response

```json
{
  "batch": {
    "id": "string",
    "name": "string",
    "creator_id": "string",
    "org_id": "string",
    "status": "BATCH_STATUS_UNSPECIFIED",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "input_dataset_id": "string",
    "output_dataset_id": "string",
    "input_tokens": "string",
    "output_tokens": "string",
    "model": "string",
    "num_records": 0,
    "num_successful_records": 0,
    "num_failed_records": 0,
    "status_reason": "string"
  }
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

> 503 Response

```json
{
  "message": "string"
}
```

<h3 id="create-a-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[CreateBatchResponse](#schemacreatebatchresponse)|
|400|Bad Request|Bad Request|[BatchError](#schemabatcherror)|
|401|Unauthorized|Unauthorized|[BatchError](#schemabatcherror)|
|403|Forbidden|Forbidden|[BatchError](#schemabatcherror)|
|404|Not Found|Not Found|[BatchError](#schemabatcherror)|
|500|Internal Server Error|Internal Server Error|[BatchError](#schemabatcherror)|
|503|Service Unavailable|Status Service Unavailable|[BatchError](#schemabatcherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a batch

<a id="opIdGetBatch"></a>

> Code samples

```bash
curl https://api.cohere.com/v2/batches/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/batches/{id}`

Retrieves a batch

<h3 id="retrieve-a-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The batch ID.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "batch": {
    "id": "9439e0e3-49a4-4336-93e3-485fc420bc18",
    "name": "my-batch",
    "creator_id": "b5e1ffb9-49a1-4653-9927-94083316309d",
    "org_id": "62603116-1750-4c04-b1b6-9d5046764bc4",
    "status": "BATCH_STATUS_IN_PROGRESS",
    "created_at": "2025-03-05T14:59:25.438936Z",
    "updated_at": "2025-03-05T15:00:26.126572Z",
    "input_dataset_id": "my-requests-dataset",
    "output_dataset_id": "my-batch-output-c2waz1",
    "input_tokens": "0",
    "output_tokens": "0",
    "model": "batch-command",
    "num_records": 5000,
    "num_successful_records": 8,
    "num_failed_records": 0
  }
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

> 503 Response

```json
{
  "message": "string"
}
```

<h3 id="retrieve-a-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[GetBatchResponse](#schemagetbatchresponse)|
|400|Bad Request|Bad Request|[BatchError](#schemabatcherror)|
|401|Unauthorized|Unauthorized|[BatchError](#schemabatcherror)|
|403|Forbidden|Forbidden|[BatchError](#schemabatcherror)|
|404|Not Found|Not Found|[BatchError](#schemabatcherror)|
|500|Internal Server Error|Internal Server Error|[BatchError](#schemabatcherror)|
|503|Service Unavailable|Status Service Unavailable|[BatchError](#schemabatcherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel a batch

<a id="opIdCancelBatch"></a>

> Code samples

```bash
curl https://api.cohere.com/v2/batches/string:cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/batches/{id}:cancel`

Cancels an in-progress batch

<h3 id="cancel-a-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The batch ID.|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

> 503 Response

```json
{
  "message": "string"
}
```

<h3 id="cancel-a-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful response.|[CancelBatchResponse](#schemacancelbatchresponse)|
|400|Bad Request|Bad Request|[BatchError](#schemabatcherror)|
|401|Unauthorized|Unauthorized|[BatchError](#schemabatcherror)|
|403|Forbidden|Forbidden|[BatchError](#schemabatcherror)|
|404|Not Found|Not Found|[BatchError](#schemabatcherror)|
|500|Internal Server Error|Internal Server Error|[BatchError](#schemabatcherror)|
|503|Service Unavailable|Status Service Unavailable|[BatchError](#schemabatcherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="api-reference-models">/models</h1>

## Get a Model

<a id="opIdget-model"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/models/command-a-03-2025 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/models/{model}`

Returns the details of a model, provided its name.

<h3 id="get-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|model|path|string|true|none|
|X-Client-Name|header|string|false|The name of the project that is making the request.<br>|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "is_deprecated": true,
  "endpoints": [
    "chat"
  ],
  "finetuned": true,
  "context_length": 0,
  "tokenizer_url": "string",
  "default_endpoints": [
    "chat"
  ],
  "features": [
    "string"
  ],
  "sampling_defaults": {
    "temperature": 0,
    "k": 0,
    "p": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "max_tokens_per_doc": 0
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="get-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetModelResponse](#schemagetmodelresponse)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="get-a-model-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-API-Warning|string||The name of the project that is making the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Models

<a id="opIdlist-models"></a>

> Code samples

```bash
curl https://api.cohere.com/v1/models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/models`

Returns a list of models available for use.

<h3 id="list-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|number|false|Maximum number of models to include in a page<br>Defaults to `20`, min value of `1`, max value of `1000`.|
|page_token|query|string|false|Page token provided in the `next_page_token` field of a previous response.|
|endpoint|query|[CompatibleEndpoint](#schemacompatibleendpoint)|false|When provided, filters the list of models to only those that are compatible with the specified endpoint.|
|default_only|query|boolean|false|When provided, filters the list of models to only the default model to the endpoint. This parameter is only valid when `endpoint` is provided.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|endpoint|chat|
|endpoint|embed|
|endpoint|classify|
|endpoint|summarize|
|endpoint|rerank|
|endpoint|rate|
|endpoint|generate|

> Example responses

> 200 Response

```json
{
  "models": [
    {
      "name": "string",
      "is_deprecated": true,
      "endpoints": [
        "chat"
      ],
      "finetuned": true,
      "context_length": 0,
      "tokenizer_url": "string",
      "default_endpoints": [
        "chat"
      ],
      "features": [
        "string"
      ],
      "sampling_defaults": {
        "temperature": 0,
        "k": 0,
        "p": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "max_tokens_per_doc": 0
      }
    }
  ],
  "next_page_token": "string"
}
```

> 400 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 403 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 422 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 429 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 498 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 499 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 501 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 503 Response

```json
{
  "message": "string",
  "id": "string"
}
```

> 504 Response

```json
{
  "message": "string",
  "id": "string"
}
```

<h3 id="list-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListModelsResponse](#schemalistmodelsresponse)|
|400|Bad Request|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|401|Unauthorized|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|403|Forbidden|This error indicates that the operation attempted to be performed is not allowed. This could be because:<br>  - The api token is invalid<br>  - The user does not have the necessary permissions<br>|Inline|
|404|Not Found|This error is returned when a resource is not found. This could be because:<br>  - The endpoint does not exist<br>  - The resource does not exist eg model id, dataset id<br>|Inline|
|422|Unprocessable Entity|This error is returned when the request is not well formed. This could be because:<br>  - JSON is invalid<br>  - The request is missing required fields<br>  - The request contains an invalid combination of fields<br>|Inline|
|429|Too Many Requests|Too many requests|Inline|
|498|498|This error is returned when a request or response contains a deny-listed token.<br>|Inline|
|499|499|This error is returned when a request is cancelled by the user.<br>|Inline|
|500|Internal Server Error|This error is returned when an uncategorised internal server error occurs.<br>|Inline|
|501|Not Implemented|This error is returned when the requested feature is not implemented.<br>|Inline|
|503|Service Unavailable|This error is returned when the service is unavailable. This could be due to:<br>  - Too many users trying to access the service at the same time<br>|Inline|
|504|Gateway Timeout|This error is returned when a request to the server times out. This could be due to:<br>  - An internal services taking too long to respond<br>|Inline|

<h3 id="list-models-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **498**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **499**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_ChatRole">ChatRole</h2>
<!-- backwards compatibility -->
<a id="schemachatrole"></a>
<a id="schema_ChatRole"></a>
<a id="tocSchatrole"></a>
<a id="tocschatrole"></a>

```json
"CHATBOT"
```

One of `CHATBOT`, `SYSTEM`, `TOOL` or `USER` to identify who the message is coming from.

<h2 id="tocS_ToolCall">ToolCall</h2>
<!-- backwards compatibility -->
<a id="schematoolcall"></a>
<a id="schema_ToolCall"></a>
<a id="tocStoolcall"></a>
<a id="tocstoolcall"></a>

```json
{
  "name": "string",
  "parameters": {}
}
```

Contains the tool calls generated by the model. Use it to invoke your tools.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the tool to call.|
|parameters|object|true|none|The name and value of the parameters to use when invoking a tool.|

<h2 id="tocS_ChatMessage">ChatMessage</h2>
<!-- backwards compatibility -->
<a id="schemachatmessage"></a>
<a id="schema_ChatMessage"></a>
<a id="tocSchatmessage"></a>
<a id="tocschatmessage"></a>

```json
{
  "role": "CHATBOT",
  "message": "string",
  "tool_calls": [
    {
      "name": "string",
      "parameters": {}
    }
  ]
}
```

Represents a single message in the chat history, excluding the current user turn. It has two properties: `role` and `message`. The `role` identifies the sender (`CHATBOT`, `SYSTEM`, or `USER`), while the `message` contains the text content.

The chat_history parameter should not be used for `SYSTEM` messages in most cases. Instead, to add a `SYSTEM` role message at the beginning of a conversation, the `preamble` parameter should be used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|[ChatRole](#schemachatrole)|true|none|One of `CHATBOT`, `SYSTEM`, `TOOL` or `USER` to identify who the message is coming from.<br>|
|message|string|true|none|Contents of the chat message.<br>|
|tool_calls|[[ToolCall](#schematoolcall)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|CHATBOT|
|role|SYSTEM|
|role|USER|
|role|TOOL|

<h2 id="tocS_ToolResult">ToolResult</h2>
<!-- backwards compatibility -->
<a id="schematoolresult"></a>
<a id="schema_ToolResult"></a>
<a id="tocStoolresult"></a>
<a id="tocstoolresult"></a>

```json
{
  "call": {
    "name": "string",
    "parameters": {}
  },
  "outputs": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|call|[ToolCall](#schematoolcall)|true|none|Contains the tool calls generated by the model. Use it to invoke your tools.<br>|
|outputs|[object]|true|none|none|

<h2 id="tocS_ChatToolMessage">ChatToolMessage</h2>
<!-- backwards compatibility -->
<a id="schemachattoolmessage"></a>
<a id="schema_ChatToolMessage"></a>
<a id="tocSchattoolmessage"></a>
<a id="tocschattoolmessage"></a>

```json
{
  "role": "CHATBOT",
  "tool_results": [
    {
      "call": {
        "name": "string",
        "parameters": {}
      },
      "outputs": [
        {}
      ]
    }
  ]
}
```

Represents tool result in the chat history.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|[ChatRole](#schemachatrole)|true|none|One of `CHATBOT`, `SYSTEM`, `TOOL` or `USER` to identify who the message is coming from.<br>|
|tool_results|[[ToolResult](#schematoolresult)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|CHATBOT|
|role|SYSTEM|
|role|USER|
|role|TOOL|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "role": "CHATBOT",
  "message": "string",
  "tool_calls": [
    {
      "name": "string",
      "parameters": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ChatMessage](#schemachatmessage)|false|none|Represents a single message in the chat history, excluding the current user turn. It has two properties: `role` and `message`. The `role` identifies the sender (`CHATBOT`, `SYSTEM`, or `USER`), while the `message` contains the text content.<br><br>The chat_history parameter should not be used for `SYSTEM` messages in most cases. Instead, to add a `SYSTEM` role message at the beginning of a conversation, the `preamble` parameter should be used.<br>|
|*oneOf*|[ChatToolMessage](#schemachattoolmessage)|false|none|Represents tool result in the chat history.<br>|

<h2 id="tocS_ChatConnector">ChatConnector</h2>
<!-- backwards compatibility -->
<a id="schemachatconnector"></a>
<a id="schema_ChatConnector"></a>
<a id="tocSchatconnector"></a>
<a id="tocschatconnector"></a>

```json
{
  "id": "string",
  "user_access_token": "string",
  "continue_on_failure": true,
  "options": {}
}
```

The connector used for fetching documents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The identifier of the connector.<br>|
|user_access_token|string|false|none|When specified, this user access token will be passed to the connector in the Authorization header instead of the Cohere generated one.<br>|
|continue_on_failure|boolean|false|none|Defaults to `false`.<br><br>When `true`, the request will continue if this connector returned an error.<br>|
|options|object|false|none|Provides the connector with different settings at request time. The key/value pairs of this object are specific to each connector.<br><br>For example, the connector `web-search` supports the `site` option, which limits search results to the specified domain.<br>|

<h2 id="tocS_ChatDocument">ChatDocument</h2>
<!-- backwards compatibility -->
<a id="schemachatdocument"></a>
<a id="schema_ChatDocument"></a>
<a id="tocSchatdocument"></a>
<a id="tocschatdocument"></a>

```json
{
  "id": "string",
  "property1": "string",
  "property2": "string"
}
```

Relevant information that could be used by the model to generate a more accurate reply.
The contents of each document are generally short (under 300 words), and are passed in the form of a
dictionary of strings. Some suggested keys are "text", "author", "date". Both the key name and the value will be
passed to the model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for this document.|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_Tool">Tool</h2>
<!-- backwards compatibility -->
<a id="schematool"></a>
<a id="schema_Tool"></a>
<a id="tocStool"></a>
<a id="tocstool"></a>

```json
{
  "name": "string",
  "description": "string",
  "parameter_definitions": {
    "property1": {
      "description": "string",
      "type": "string",
      "required": false
    },
    "property2": {
      "description": "string",
      "type": "string",
      "required": false
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the tool to be called. Valid names contain only the characters `a-z`, `A-Z`, `0-9`, `_` and must not begin with a digit.<br>|
|description|string|true|none|The description of what the tool does, the model uses the description to choose when and how to call the function.<br>|
|parameter_definitions|object|false|none|The input parameters of the tool. Accepts a dictionary where the key is the name of the parameter and the value is the parameter spec. Valid parameter names contain only the characters `a-z`, `A-Z`, `0-9`, `_` and must not begin with a digit.<br>```<br>{<br>  "my_param": {<br>    "description": <string>,<br>    "type": <string>, // any python data type, such as 'str', 'bool'<br>    "required": <boolean><br>  }<br>}<br>```<br>|

<h2 id="tocS_ResponseFormatType">ResponseFormatType</h2>
<!-- backwards compatibility -->
<a id="schemaresponseformattype"></a>
<a id="schema_ResponseFormatType"></a>
<a id="tocSresponseformattype"></a>
<a id="tocsresponseformattype"></a>

```json
"text"
```

Defaults to `"text"`.

When set to `"json_object"`, the model's output will be a valid JSON Object.

<h2 id="tocS_ChatTextResponseFormat">ChatTextResponseFormat</h2>
<!-- backwards compatibility -->
<a id="schemachattextresponseformat"></a>
<a id="schema_ChatTextResponseFormat"></a>
<a id="tocSchattextresponseformat"></a>
<a id="tocschattextresponseformat"></a>

```json
{
  "type": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ResponseFormatType](#schemaresponseformattype)|true|none|Defaults to `"text"`.<br><br>When set to `"json_object"`, the model's output will be a valid JSON Object.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|json_object|

<h2 id="tocS_JSONResponseFormat">JSONResponseFormat</h2>
<!-- backwards compatibility -->
<a id="schemajsonresponseformat"></a>
<a id="schema_JSONResponseFormat"></a>
<a id="tocSjsonresponseformat"></a>
<a id="tocsjsonresponseformat"></a>

```json
{
  "type": "text",
  "schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ResponseFormatType](#schemaresponseformattype)|true|none|Defaults to `"text"`.<br><br>When set to `"json_object"`, the model's output will be a valid JSON Object.<br>|
|schema|object|false|none|A JSON schema object that the output will adhere to. There are some restrictions we have on the schema, refer to [our guide](https://docs.cohere.com/docs/structured-outputs-json#schema-constraints) for more information.<br>Example (required name and age object):<br>```json<br>{<br>  "type": "object",<br>  "properties": {<br>    "name": {"type": "string"},<br>    "age": {"type": "integer"}<br>  },<br>  "required": ["name", "age"]<br>}<br>```<br><br>**Note**: This field must not be specified when the `type` is set to `"text"`.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|json_object|

<h2 id="tocS_ResponseFormat">ResponseFormat</h2>
<!-- backwards compatibility -->
<a id="schemaresponseformat"></a>
<a id="schema_ResponseFormat"></a>
<a id="tocSresponseformat"></a>
<a id="tocsresponseformat"></a>

```json
{
  "type": "text"
}
```

Configuration for forcing the model output to adhere to the specified format. Supported on [Command R 03-2024](https://docs.cohere.com/docs/command-r), [Command R+ 04-2024](https://docs.cohere.com/docs/command-r-plus) and newer models.

The model can be forced into outputting JSON objects (with up to 5 levels of nesting) by setting `{ "type": "json_object" }`.

A [JSON Schema](https://json-schema.org/) can optionally be provided, to ensure a specific structure.

**Note**: When using  `{ "type": "json_object" }` your `message` should always explicitly instruct the model to generate a JSON (eg: _"Generate a JSON ..."_) . Otherwise the model may end up getting stuck generating an infinite stream of characters and eventually run out of context length.
**Limitation**: The parameter is not supported in RAG mode (when any of `connectors`, `documents`, `tools`, `tool_results` are provided).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ChatTextResponseFormat](#schemachattextresponseformat)|false|none|none|
|*oneOf*|[JSONResponseFormat](#schemajsonresponseformat)|false|none|none|

<h2 id="tocS_ChatCitation">ChatCitation</h2>
<!-- backwards compatibility -->
<a id="schemachatcitation"></a>
<a id="schema_ChatCitation"></a>
<a id="tocSchatcitation"></a>
<a id="tocschatcitation"></a>

```json
{
  "start": 0,
  "end": 0,
  "text": "string",
  "document_ids": [
    "string"
  ],
  "type": "TEXT_CONTENT"
}
```

A section of the generated reply which cites external knowledge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|integer|true|none|The index of text that the citation starts at, counting from zero. For example, a generation of `Hello, world!` with a citation on `world` would have a start value of `7`. This is because the citation starts at `w`, which is the seventh character.<br>|
|end|integer|true|none|The index of text that the citation ends after, counting from zero. For example, a generation of `Hello, world!` with a citation on `world` would have an end value of `11`. This is because the citation ends after `d`, which is the eleventh character.<br>|
|text|string|true|none|The text of the citation. For example, a generation of `Hello, world!` with a citation of `world` would have a text value of `world`.<br>|
|document_ids|[string]|true|none|Identifiers of documents cited by this section of the generated reply.<br>|
|type|string|false|none|The type of citation which indicates what part of the response the citation is for.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TEXT_CONTENT|
|type|PLAN|

<h2 id="tocS_ChatSearchQuery">ChatSearchQuery</h2>
<!-- backwards compatibility -->
<a id="schemachatsearchquery"></a>
<a id="schema_ChatSearchQuery"></a>
<a id="tocSchatsearchquery"></a>
<a id="tocschatsearchquery"></a>

```json
{
  "text": "string",
  "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

The generated search query. Contains the text of the query and a unique identifier for the query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The text of the search query.<br>|
|generation_id|string(uuid)|true|none|Unique identifier for the generated search query. Useful for submitting feedback.<br>|

<h2 id="tocS_ChatSearchResultConnector">ChatSearchResultConnector</h2>
<!-- backwards compatibility -->
<a id="schemachatsearchresultconnector"></a>
<a id="schema_ChatSearchResultConnector"></a>
<a id="tocSchatsearchresultconnector"></a>
<a id="tocschatsearchresultconnector"></a>

```json
{
  "id": "string"
}
```

The connector used for fetching documents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The identifier of the connector.<br>|

<h2 id="tocS_ChatSearchResult">ChatSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemachatsearchresult"></a>
<a id="schema_ChatSearchResult"></a>
<a id="tocSchatsearchresult"></a>
<a id="tocschatsearchresult"></a>

```json
{
  "search_query": {
    "text": "string",
    "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "connector": {
    "id": "string"
  },
  "document_ids": [
    "string"
  ],
  "error_message": "string",
  "continue_on_failure": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|search_query|[ChatSearchQuery](#schemachatsearchquery)|false|none|The generated search query. Contains the text of the query and a unique identifier for the query.<br>|
|connector|[ChatSearchResultConnector](#schemachatsearchresultconnector)|true|none|The connector from which this result comes from.<br>|
|document_ids|[string]|true|none|Identifiers of documents found by this search query.<br>|
|error_message|string|false|none|An error message if the search failed.<br>|
|continue_on_failure|boolean|false|none|Whether a chat request should continue or not if the request to this connector fails.<br>|

<h2 id="tocS_FinishReason">FinishReason</h2>
<!-- backwards compatibility -->
<a id="schemafinishreason"></a>
<a id="schema_FinishReason"></a>
<a id="tocSfinishreason"></a>
<a id="tocsfinishreason"></a>

```json
"COMPLETE"
```

<h2 id="tocS_ApiMeta">ApiMeta</h2>
<!-- backwards compatibility -->
<a id="schemaapimeta"></a>
<a id="schema_ApiMeta"></a>
<a id="tocSapimeta"></a>
<a id="tocsapimeta"></a>

```json
{
  "api_version": {
    "version": "string",
    "is_deprecated": true,
    "is_experimental": true
  },
  "billed_units": {
    "images": 0,
    "input_tokens": 0,
    "image_tokens": 0,
    "output_tokens": 0,
    "search_units": 0,
    "classifications": 0,
    "pages": 0
  },
  "tokens": {
    "input_tokens": 0,
    "output_tokens": 0
  },
  "cached_tokens": 0,
  "warnings": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_version|object|false|none|none|
|billed_units|object|false|none|none|
|tokens|object|false|none|none|
|cached_tokens|number|false|none|The number of prompt tokens that hit the inference cache.<br>|
|warnings|[string]|false|none|none|

<h2 id="tocS_NonStreamedChatResponse">NonStreamedChatResponse</h2>
<!-- backwards compatibility -->
<a id="schemanonstreamedchatresponse"></a>
<a id="schema_NonStreamedChatResponse"></a>
<a id="tocSnonstreamedchatresponse"></a>
<a id="tocsnonstreamedchatresponse"></a>

```json
{
  "text": "string",
  "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "response_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "citations": [
    {
      "start": 0,
      "end": 0,
      "text": "string",
      "document_ids": [
        "string"
      ],
      "type": "TEXT_CONTENT"
    }
  ],
  "documents": [
    {
      "id": "string",
      "property1": "string",
      "property2": "string"
    }
  ],
  "is_search_required": true,
  "search_queries": [
    {
      "text": "string",
      "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "search_results": [
    {
      "search_query": {
        "text": "string",
        "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "connector": {
        "id": "string"
      },
      "document_ids": [
        "string"
      ],
      "error_message": "string",
      "continue_on_failure": true
    }
  ],
  "finish_reason": "COMPLETE",
  "tool_calls": [
    {
      "name": "string",
      "parameters": {}
    }
  ],
  "chat_history": [
    {
      "role": "CHATBOT",
      "message": "string",
      "tool_calls": [
        {
          "name": "string",
          "parameters": {}
        }
      ]
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|Contents of the reply generated by the model.|
|generation_id|string(uuid)|false|none|Unique identifier for the generated reply. Useful for submitting feedback.|
|response_id|string(uuid)|false|none|Unique identifier for the response.|
|citations|[[ChatCitation](#schemachatcitation)]|false|none|Inline citations for the generated reply.|
|documents|[[ChatDocument](#schemachatdocument)]|false|none|Documents seen by the model when generating the reply.|
|is_search_required|boolean|false|none|Denotes that a search for documents is required during the RAG flow.|
|search_queries|[[ChatSearchQuery](#schemachatsearchquery)]|false|none|Generated search queries, meant to be used as part of the RAG flow.|
|search_results|[[ChatSearchResult](#schemachatsearchresult)]|false|none|Documents retrieved from each of the conducted searches.|
|finish_reason|[FinishReason](#schemafinishreason)|false|none|none|
|tool_calls|[[ToolCall](#schematoolcall)]|false|none|none|
|chat_history|[[Message](#schemamessage)]|false|none|A list of previous messages between the user and the model, meant to give the model conversational context for responding to the user's `message`.<br>|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|finish_reason|COMPLETE|
|finish_reason|STOP_SEQUENCE|
|finish_reason|ERROR|
|finish_reason|ERROR_TOXIC|
|finish_reason|ERROR_LIMIT|
|finish_reason|USER_CANCEL|
|finish_reason|MAX_TOKENS|
|finish_reason|TIMEOUT|

<h2 id="tocS_ChatStreamEvent">ChatStreamEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatstreamevent"></a>
<a id="schema_ChatStreamEvent"></a>
<a id="tocSchatstreamevent"></a>
<a id="tocschatstreamevent"></a>

```json
{
  "event_type": "stream-start"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|stream-start|
|event_type|search-queries-generation|
|event_type|search-results|
|event_type|text-generation|
|event_type|citation-generation|
|event_type|stream-end|
|event_type|debug|

<h2 id="tocS_ChatStreamStartEvent">ChatStreamStartEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatstreamstartevent"></a>
<a id="schema_ChatStreamStartEvent"></a>
<a id="tocSchatstreamstartevent"></a>
<a id="tocschatstreamstartevent"></a>

```json
{
  "event_type": "stream-start",
  "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|
|generation_id|string(uuid)|true|none|Unique identifier for the generated reply. Useful for submitting feedback.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|stream-start|
|event_type|search-queries-generation|
|event_type|search-results|
|event_type|text-generation|
|event_type|citation-generation|
|event_type|stream-end|
|event_type|debug|

<h2 id="tocS_ChatSearchQueriesGenerationEvent">ChatSearchQueriesGenerationEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatsearchqueriesgenerationevent"></a>
<a id="schema_ChatSearchQueriesGenerationEvent"></a>
<a id="tocSchatsearchqueriesgenerationevent"></a>
<a id="tocschatsearchqueriesgenerationevent"></a>

```json
{
  "event_type": "stream-start",
  "search_queries": [
    {
      "text": "string",
      "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|
|search_queries|[[ChatSearchQuery](#schemachatsearchquery)]|true|none|Generated search queries, meant to be used as part of the RAG flow.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|stream-start|
|event_type|search-queries-generation|
|event_type|search-results|
|event_type|text-generation|
|event_type|citation-generation|
|event_type|stream-end|
|event_type|debug|

<h2 id="tocS_ChatSearchResultsEvent">ChatSearchResultsEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatsearchresultsevent"></a>
<a id="schema_ChatSearchResultsEvent"></a>
<a id="tocSchatsearchresultsevent"></a>
<a id="tocschatsearchresultsevent"></a>

```json
{
  "event_type": "stream-start",
  "search_results": [
    {
      "search_query": {
        "text": "string",
        "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      },
      "connector": {
        "id": "string"
      },
      "document_ids": [
        "string"
      ],
      "error_message": "string",
      "continue_on_failure": true
    }
  ],
  "documents": [
    {
      "id": "string",
      "property1": "string",
      "property2": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|
|search_results|[[ChatSearchResult](#schemachatsearchresult)]|false|none|Conducted searches and the ids of documents retrieved from each of them.<br>|
|documents|[[ChatDocument](#schemachatdocument)]|false|none|Documents fetched from searches or provided by the user.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|stream-start|
|event_type|search-queries-generation|
|event_type|search-results|
|event_type|text-generation|
|event_type|citation-generation|
|event_type|stream-end|
|event_type|debug|

<h2 id="tocS_ChatTextGenerationEvent">ChatTextGenerationEvent</h2>
<!-- backwards compatibility -->
<a id="schemachattextgenerationevent"></a>
<a id="schema_ChatTextGenerationEvent"></a>
<a id="tocSchattextgenerationevent"></a>
<a id="tocschattextgenerationevent"></a>

```json
{
  "event_type": "stream-start",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|
|text|string|true|none|The next batch of text generated by the model.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|stream-start|
|event_type|search-queries-generation|
|event_type|search-results|
|event_type|text-generation|
|event_type|citation-generation|
|event_type|stream-end|
|event_type|debug|

<h2 id="tocS_ChatCitationGenerationEvent">ChatCitationGenerationEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatcitationgenerationevent"></a>
<a id="schema_ChatCitationGenerationEvent"></a>
<a id="tocSchatcitationgenerationevent"></a>
<a id="tocschatcitationgenerationevent"></a>

```json
{
  "event_type": "stream-start",
  "citations": [
    {
      "start": 0,
      "end": 0,
      "text": "string",
      "document_ids": [
        "string"
      ],
      "type": "TEXT_CONTENT"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|
|citations|[[ChatCitation](#schemachatcitation)]|true|none|Citations for the generated reply.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|stream-start|
|event_type|search-queries-generation|
|event_type|search-results|
|event_type|text-generation|
|event_type|citation-generation|
|event_type|stream-end|
|event_type|debug|

<h2 id="tocS_ChatToolCallsGenerationEvent">ChatToolCallsGenerationEvent</h2>
<!-- backwards compatibility -->
<a id="schemachattoolcallsgenerationevent"></a>
<a id="schema_ChatToolCallsGenerationEvent"></a>
<a id="tocSchattoolcallsgenerationevent"></a>
<a id="tocschattoolcallsgenerationevent"></a>

```json
{
  "event_type": "stream-start",
  "text": "string",
  "tool_calls": [
    {
      "name": "string",
      "parameters": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|
|text|string|false|none|The text generated related to the tool calls generated<br>|
|tool_calls|[[ToolCall](#schematoolcall)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|stream-start|
|event_type|search-queries-generation|
|event_type|search-results|
|event_type|text-generation|
|event_type|citation-generation|
|event_type|stream-end|
|event_type|debug|

<h2 id="tocS_ChatStreamEndEvent">ChatStreamEndEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatstreamendevent"></a>
<a id="schema_ChatStreamEndEvent"></a>
<a id="tocSchatstreamendevent"></a>
<a id="tocschatstreamendevent"></a>

```json
{
  "event_type": "stream-start",
  "finish_reason": "COMPLETE",
  "response": {
    "text": "string",
    "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "response_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "citations": [
      {
        "start": 0,
        "end": 0,
        "text": "string",
        "document_ids": [
          "string"
        ],
        "type": "TEXT_CONTENT"
      }
    ],
    "documents": [
      {
        "id": "string",
        "property1": "string",
        "property2": "string"
      }
    ],
    "is_search_required": true,
    "search_queries": [
      {
        "text": "string",
        "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ],
    "search_results": [
      {
        "search_query": {
          "text": "string",
          "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        },
        "connector": {
          "id": "string"
        },
        "document_ids": [
          "string"
        ],
        "error_message": "string",
        "continue_on_failure": true
      }
    ],
    "finish_reason": "COMPLETE",
    "tool_calls": [
      {
        "name": "string",
        "parameters": {}
      }
    ],
    "chat_history": [
      {
        "role": "CHATBOT",
        "message": "string",
        "tool_calls": [
          {
            "name": "string",
            "parameters": {}
          }
        ]
      }
    ],
    "meta": {
      "api_version": {
        "version": "string",
        "is_deprecated": true,
        "is_experimental": true
      },
      "billed_units": {
        "images": 0,
        "input_tokens": 0,
        "image_tokens": 0,
        "output_tokens": 0,
        "search_units": 0,
        "classifications": 0,
        "pages": 0
      },
      "tokens": {
        "input_tokens": 0,
        "output_tokens": 0
      },
      "cached_tokens": 0,
      "warnings": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|
|finish_reason|string|true|none|- `COMPLETE` - the model sent back a finished reply<br>- `ERROR_LIMIT` - the reply was cut off because the model reached the maximum number of tokens for its context length<br>- `MAX_TOKENS` - the reply was cut off because the model reached the maximum number of tokens specified by the max_tokens parameter<br>- `ERROR` - something went wrong when generating the reply<br>- `ERROR_TOXIC` - the model generated a reply that was deemed toxic<br>|
|response|[NonStreamedChatResponse](#schemanonstreamedchatresponse)|true|none|The consolidated response from the model. Contains the generated reply and all the other information streamed back in the previous events.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|stream-start|
|event_type|search-queries-generation|
|event_type|search-results|
|event_type|text-generation|
|event_type|citation-generation|
|event_type|stream-end|
|event_type|debug|
|finish_reason|COMPLETE|
|finish_reason|ERROR_LIMIT|
|finish_reason|MAX_TOKENS|
|finish_reason|ERROR|
|finish_reason|ERROR_TOXIC|

<h2 id="tocS_ToolCallDelta">ToolCallDelta</h2>
<!-- backwards compatibility -->
<a id="schematoolcalldelta"></a>
<a id="schema_ToolCallDelta"></a>
<a id="tocStoolcalldelta"></a>
<a id="tocstoolcalldelta"></a>

```json
{
  "name": "string",
  "index": 0,
  "parameters": "string",
  "text": "string"
}
```

Contains the chunk of the tool call generation in the stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the tool call<br>|
|index|number|false|none|Index of the tool call generated<br>|
|parameters|string|false|none|Chunk of the tool parameters<br>|
|text|string|false|none|Chunk of the tool plan text<br>|

<h2 id="tocS_ChatToolCallsChunkEvent">ChatToolCallsChunkEvent</h2>
<!-- backwards compatibility -->
<a id="schemachattoolcallschunkevent"></a>
<a id="schema_ChatToolCallsChunkEvent"></a>
<a id="tocSchattoolcallschunkevent"></a>
<a id="tocschattoolcallschunkevent"></a>

```json
{
  "event_type": "stream-start",
  "tool_call_delta": {
    "name": "string",
    "index": 0,
    "parameters": "string",
    "text": "string"
  },
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|
|tool_call_delta|[ToolCallDelta](#schematoolcalldelta)|true|none|Contains the chunk of the tool call generation in the stream.<br>|
|text|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|stream-start|
|event_type|search-queries-generation|
|event_type|search-results|
|event_type|text-generation|
|event_type|citation-generation|
|event_type|stream-end|
|event_type|debug|

<h2 id="tocS_ChatDebugEvent">ChatDebugEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatdebugevent"></a>
<a id="schema_ChatDebugEvent"></a>
<a id="tocSchatdebugevent"></a>
<a id="tocschatdebugevent"></a>

```json
{
  "event_type": "stream-start",
  "prompt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|
|prompt|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|stream-start|
|event_type|search-queries-generation|
|event_type|search-results|
|event_type|text-generation|
|event_type|citation-generation|
|event_type|stream-end|
|event_type|debug|

<h2 id="tocS_StreamedChatResponse">StreamedChatResponse</h2>
<!-- backwards compatibility -->
<a id="schemastreamedchatresponse"></a>
<a id="schema_StreamedChatResponse"></a>
<a id="tocSstreamedchatresponse"></a>
<a id="tocsstreamedchatresponse"></a>

```json
{
  "event_type": "stream-start",
  "generation_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

StreamedChatResponse is returned in streaming mode (specified with `stream=True` in the request).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ChatStreamStartEvent](#schemachatstreamstartevent)|false|none|none|
|*oneOf*|[ChatSearchQueriesGenerationEvent](#schemachatsearchqueriesgenerationevent)|false|none|none|
|*oneOf*|[ChatSearchResultsEvent](#schemachatsearchresultsevent)|false|none|none|
|*oneOf*|[ChatTextGenerationEvent](#schemachattextgenerationevent)|false|none|none|
|*oneOf*|[ChatCitationGenerationEvent](#schemachatcitationgenerationevent)|false|none|none|
|*oneOf*|[ChatToolCallsGenerationEvent](#schemachattoolcallsgenerationevent)|false|none|none|
|*oneOf*|[ChatStreamEndEvent](#schemachatstreamendevent)|false|none|none|
|*oneOf*|[ChatToolCallsChunkEvent](#schemachattoolcallschunkevent)|false|none|none|
|*oneOf*|[ChatDebugEvent](#schemachatdebugevent)|false|none|none|

<h2 id="tocS_ChatTextContent">ChatTextContent</h2>
<!-- backwards compatibility -->
<a id="schemachattextcontent"></a>
<a id="schema_ChatTextContent"></a>
<a id="tocSchattextcontent"></a>
<a id="tocschattextcontent"></a>

```json
{
  "type": "text",
  "text": "string"
}
```

Text content of the message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|text|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|

<h2 id="tocS_ContentType">ContentType</h2>
<!-- backwards compatibility -->
<a id="schemacontenttype"></a>
<a id="schema_ContentType"></a>
<a id="tocScontenttype"></a>
<a id="tocscontenttype"></a>

```json
"text"
```

Type of message content

<h2 id="tocS_ImageUrl">ImageUrl</h2>
<!-- backwards compatibility -->
<a id="schemaimageurl"></a>
<a id="schema_ImageUrl"></a>
<a id="tocSimageurl"></a>
<a id="tocsimageurl"></a>

```json
{
  "url": "string",
  "detail": "auto"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|URL of an image. Can be either a base64 data URI or a web URL.<br>|
|detail|string|false|none|Controls the level of detail in image processing. `"auto"` is the default and lets the system choose, `"low"` is faster but less detailed, and `"high"` preserves maximum detail. You can save tokens and speed up responses by using detail: `"low"`.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|detail|auto|
|detail|low|
|detail|high|

<h2 id="tocS_ImageContent">ImageContent</h2>
<!-- backwards compatibility -->
<a id="schemaimagecontent"></a>
<a id="schema_ImageContent"></a>
<a id="tocSimagecontent"></a>
<a id="tocsimagecontent"></a>

```json
{
  "type": "text",
  "image_url": {
    "url": "string",
    "detail": "auto"
  }
}
```

Image content of the message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ContentType](#schemacontenttype)|true|none|Type of message content<br>|
|image_url|[ImageUrl](#schemaimageurl)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|image_url|

<h2 id="tocS_Content">Content</h2>
<!-- backwards compatibility -->
<a id="schemacontent"></a>
<a id="schema_Content"></a>
<a id="tocScontent"></a>
<a id="tocscontent"></a>

```json
{
  "type": "text",
  "text": "string"
}
```

A Content block which contains information about the content type and the content itself.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ChatTextContent](#schemachattextcontent)|false|none|Text content of the message.|
|*oneOf*|[ImageContent](#schemaimagecontent)|false|none|Image content of the message.|

<h2 id="tocS_UserMessageV2">UserMessageV2</h2>
<!-- backwards compatibility -->
<a id="schemausermessagev2"></a>
<a id="schema_UserMessageV2"></a>
<a id="tocSusermessagev2"></a>
<a id="tocsusermessagev2"></a>

```json
{
  "role": "user",
  "content": "string"
}
```

A message from the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|none|
|content|string \| [[Content](#schemacontent)]|true|none|The content of the message. This can be a string or a list of content blocks.<br>If a string is provided, it will be treated as a text content block.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|role|user|

<h2 id="tocS_ToolCallV2">ToolCallV2</h2>
<!-- backwards compatibility -->
<a id="schematoolcallv2"></a>
<a id="schema_ToolCallV2"></a>
<a id="tocStoolcallv2"></a>
<a id="tocstoolcallv2"></a>

```json
{
  "id": "string",
  "type": "function",
  "function": {
    "name": "string",
    "arguments": "string"
  }
}
```

An array of tool calls to be made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|type|string|true|none|none|
|function|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|function|

<h2 id="tocS_ChatThinkingContent">ChatThinkingContent</h2>
<!-- backwards compatibility -->
<a id="schemachatthinkingcontent"></a>
<a id="schema_ChatThinkingContent"></a>
<a id="tocSchatthinkingcontent"></a>
<a id="tocschatthinkingcontent"></a>

```json
{
  "type": "thinking",
  "thinking": "string"
}
```

Thinking content of the message. This will be present when `thinking` is enabled, and will contain the models internal reasoning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|thinking|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|thinking|

<h2 id="tocS_ChatToolSource">ChatToolSource</h2>
<!-- backwards compatibility -->
<a id="schemachattoolsource"></a>
<a id="schema_ChatToolSource"></a>
<a id="tocSchattoolsource"></a>
<a id="tocschattoolsource"></a>

```json
{
  "id": "string",
  "tool_output": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the document|
|tool_output|object|false|none|none|

<h2 id="tocS_ChatDocumentSource">ChatDocumentSource</h2>
<!-- backwards compatibility -->
<a id="schemachatdocumentsource"></a>
<a id="schema_ChatDocumentSource"></a>
<a id="tocSchatdocumentsource"></a>
<a id="tocschatdocumentsource"></a>

```json
{
  "id": "string",
  "document": {}
}
```

A document source object containing the unique identifier of the document and the document itself.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the document|
|document|object|false|none|none|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "id": "string",
  "tool_output": {}
}
```

A source object containing information about the source of the data cited.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ChatToolSource](#schemachattoolsource)|false|none|none|
|*oneOf*|[ChatDocumentSource](#schemachatdocumentsource)|false|none|A document source object containing the unique identifier of the document and the document itself.|

<h2 id="tocS_CitationType">CitationType</h2>
<!-- backwards compatibility -->
<a id="schemacitationtype"></a>
<a id="schema_CitationType"></a>
<a id="tocScitationtype"></a>
<a id="tocscitationtype"></a>

```json
"TEXT_CONTENT"
```

The type of citation which indicates what part of the response the citation is for.

<h2 id="tocS_Citation">Citation</h2>
<!-- backwards compatibility -->
<a id="schemacitation"></a>
<a id="schema_Citation"></a>
<a id="tocScitation"></a>
<a id="tocscitation"></a>

```json
{
  "start": 0,
  "end": 0,
  "text": "string",
  "sources": [
    {
      "id": "string",
      "tool_output": {}
    }
  ],
  "content_index": 0,
  "type": "TEXT_CONTENT"
}
```

Citation information containing sources and the text cited.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|integer|false|none|Start index of the cited snippet in the original source text.|
|end|integer|false|none|End index of the cited snippet in the original source text.|
|text|string|false|none|Text snippet that is being cited.|
|sources|[[Source](#schemasource)]|false|none|none|
|content_index|integer|false|none|Index of the content block in which this citation appears.|
|type|[CitationType](#schemacitationtype)|false|none|The type of citation which indicates what part of the response the citation is for.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TEXT_CONTENT|
|type|THINKING_CONTENT|
|type|PLAN|

<h2 id="tocS_AssistantMessageV2">AssistantMessageV2</h2>
<!-- backwards compatibility -->
<a id="schemaassistantmessagev2"></a>
<a id="schema_AssistantMessageV2"></a>
<a id="tocSassistantmessagev2"></a>
<a id="tocsassistantmessagev2"></a>

```json
{
  "role": "assistant",
  "tool_calls": [
    {
      "id": "string",
      "type": "function",
      "function": {
        "name": "string",
        "arguments": "string"
      }
    }
  ],
  "tool_plan": "string",
  "content": "string",
  "citations": [
    {
      "start": 0,
      "end": 0,
      "text": "string",
      "sources": [
        {
          "id": "string",
          "tool_output": {}
        }
      ],
      "content_index": 0,
      "type": "TEXT_CONTENT"
    }
  ]
}
```

A message from the assistant role can contain text and tool call information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|none|
|tool_calls|[[ToolCallV2](#schematoolcallv2)]|false|none|none|
|tool_plan|string|false|none|A chain-of-thought style reflection and plan that the model generates when working with Tools.|
|content|string \| [[ChatTextContent](#schemachattextcontent) \| [ChatThinkingContent](#schemachatthinkingcontent)]|false|none|none|
|citations|[[Citation](#schemacitation)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|assistant|

<h2 id="tocS_SystemMessageV2">SystemMessageV2</h2>
<!-- backwards compatibility -->
<a id="schemasystemmessagev2"></a>
<a id="schema_SystemMessageV2"></a>
<a id="tocSsystemmessagev2"></a>
<a id="tocssystemmessagev2"></a>

```json
{
  "role": "system",
  "content": "string"
}
```

A message from the system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|none|
|content|string \| [[ChatTextContent](#schemachattextcontent)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|system|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "data": {},
  "id": "string"
}
```

Relevant information that could be used by the model to generate a more accurate reply.
The content of each document are generally short (should be under 300 words). Metadata should be used to provide additional information, both the key name and the value will be
passed to the model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|A relevant document that the model can cite to generate a more accurate reply. Each document is a string-any dictionary.<br>|
|id|string|false|none|Unique identifier for this document which will be referenced in citations. If not provided an ID will be automatically generated.|

<h2 id="tocS_DocumentContent">DocumentContent</h2>
<!-- backwards compatibility -->
<a id="schemadocumentcontent"></a>
<a id="schema_DocumentContent"></a>
<a id="tocSdocumentcontent"></a>
<a id="tocsdocumentcontent"></a>

```json
{
  "type": "document",
  "document": {
    "data": {},
    "id": "string"
  }
}
```

Document content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|document|[Document](#schemadocument)|true|none|Relevant information that could be used by the model to generate a more accurate reply.<br>The content of each document are generally short (should be under 300 words). Metadata should be used to provide additional information, both the key name and the value will be<br>passed to the model.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|document|

<h2 id="tocS_ToolContent">ToolContent</h2>
<!-- backwards compatibility -->
<a id="schematoolcontent"></a>
<a id="schema_ToolContent"></a>
<a id="tocStoolcontent"></a>
<a id="tocstoolcontent"></a>

```json
{
  "type": "text",
  "text": "string"
}
```

A content block which contains information about the content of a tool result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ChatTextContent](#schemachattextcontent)|false|none|Text content of the message.|
|*oneOf*|[DocumentContent](#schemadocumentcontent)|false|none|Document content.|

<h2 id="tocS_ToolMessageV2">ToolMessageV2</h2>
<!-- backwards compatibility -->
<a id="schematoolmessagev2"></a>
<a id="schema_ToolMessageV2"></a>
<a id="tocStoolmessagev2"></a>
<a id="tocstoolmessagev2"></a>

```json
{
  "role": "tool",
  "tool_call_id": "string",
  "content": "string"
}
```

A message with Tool outputs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|none|
|tool_call_id|string|true|none|The id of the associated tool call that has provided the given content|
|content|string \| [[ToolContent](#schematoolcontent)]|true|none|Outputs from a tool. The content should formatted as a JSON object string, or a list of tool content blocks|

#### Enumerated Values

|Property|Value|
|---|---|
|role|tool|

<h2 id="tocS_ChatMessageV2">ChatMessageV2</h2>
<!-- backwards compatibility -->
<a id="schemachatmessagev2"></a>
<a id="schema_ChatMessageV2"></a>
<a id="tocSchatmessagev2"></a>
<a id="tocschatmessagev2"></a>

```json
{
  "role": "user",
  "content": "string"
}
```

Represents a single message in the chat history from a given role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[UserMessageV2](#schemausermessagev2)|false|none|A message from the user.|
|*oneOf*|[AssistantMessageV2](#schemaassistantmessagev2)|false|none|A message from the assistant role can contain text and tool call information.|
|*oneOf*|[SystemMessageV2](#schemasystemmessagev2)|false|none|A message from the system.|
|*oneOf*|[ToolMessageV2](#schematoolmessagev2)|false|none|A message with Tool outputs.|

<h2 id="tocS_ChatMessages">ChatMessages</h2>
<!-- backwards compatibility -->
<a id="schemachatmessages"></a>
<a id="schema_ChatMessages"></a>
<a id="tocSchatmessages"></a>
<a id="tocschatmessages"></a>

```json
[
  {
    "role": "user",
    "content": "string"
  }
]
```

A list of chat messages in chronological order, representing a conversation between the user and the model.

Messages can be from `User`, `Assistant`, `Tool` and `System` roles. Learn more about messages and roles in [the Chat API guide](https://docs.cohere.com/v2/docs/chat-api).

<h2 id="tocS_ToolV2">ToolV2</h2>
<!-- backwards compatibility -->
<a id="schematoolv2"></a>
<a id="schema_ToolV2"></a>
<a id="tocStoolv2"></a>
<a id="tocstoolv2"></a>

```json
{
  "type": "function",
  "function": {
    "name": "string",
    "description": "string",
    "parameters": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|function|object|false|none|The function to be executed.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|function|

<h2 id="tocS_CitationOptions">CitationOptions</h2>
<!-- backwards compatibility -->
<a id="schemacitationoptions"></a>
<a id="schema_CitationOptions"></a>
<a id="tocScitationoptions"></a>
<a id="tocscitationoptions"></a>

```json
{
  "mode": "ENABLED"
}
```

Options for controlling citation generation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|false|none|Defaults to `"enabled"`.<br>Citations are enabled by default for models that support it, but can be turned off by setting `"type": "disabled"`.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|ENABLED|
|mode|DISABLED|
|mode|FAST|
|mode|ACCURATE|
|mode|OFF|

<h2 id="tocS_TruncationStrategy">TruncationStrategy</h2>
<!-- backwards compatibility -->
<a id="schematruncationstrategy"></a>
<a id="schema_TruncationStrategy"></a>
<a id="tocStruncationstrategy"></a>
<a id="tocstruncationstrategy"></a>

```json
null
```

Describes the truncation strategy for when the prompt exceeds the context length. Defaults to 'none'

<h2 id="tocS_ResponseFormatTypeV2">ResponseFormatTypeV2</h2>
<!-- backwards compatibility -->
<a id="schemaresponseformattypev2"></a>
<a id="schema_ResponseFormatTypeV2"></a>
<a id="tocSresponseformattypev2"></a>
<a id="tocsresponseformattypev2"></a>

```json
"text"
```

Defaults to `"text"`.

When set to `"json_object"`, the model's output will be a valid JSON Object.

<h2 id="tocS_ChatTextResponseFormatV2">ChatTextResponseFormatV2</h2>
<!-- backwards compatibility -->
<a id="schemachattextresponseformatv2"></a>
<a id="schema_ChatTextResponseFormatV2"></a>
<a id="tocSchattextresponseformatv2"></a>
<a id="tocschattextresponseformatv2"></a>

```json
{
  "type": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ResponseFormatTypeV2](#schemaresponseformattypev2)|true|none|Defaults to `"text"`.<br><br>When set to `"json_object"`, the model's output will be a valid JSON Object.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|json_object|

<h2 id="tocS_JsonResponseFormatV2">JsonResponseFormatV2</h2>
<!-- backwards compatibility -->
<a id="schemajsonresponseformatv2"></a>
<a id="schema_JsonResponseFormatV2"></a>
<a id="tocSjsonresponseformatv2"></a>
<a id="tocsjsonresponseformatv2"></a>

```json
{
  "type": "text",
  "json_schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ResponseFormatTypeV2](#schemaresponseformattypev2)|true|none|Defaults to `"text"`.<br><br>When set to `"json_object"`, the model's output will be a valid JSON Object.<br>|
|json_schema|object|false|none|A [JSON schema](https://json-schema.org/overview/what-is-jsonschema) object that the output will adhere to. There are some restrictions we have on the schema, refer to [our guide](https://docs.cohere.com/docs/structured-outputs-json#schema-constraints) for more information.<br>Example (required name and age object):<br>```json<br>{<br>  "type": "object",<br>  "properties": {<br>    "name": {"type": "string"},<br>    "age": {"type": "integer"}<br>  },<br>  "required": ["name", "age"]<br>}<br>```<br><br>**Note**: This field must not be specified when the `type` is set to `"text"`.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|json_object|

<h2 id="tocS_ResponseFormatV2">ResponseFormatV2</h2>
<!-- backwards compatibility -->
<a id="schemaresponseformatv2"></a>
<a id="schema_ResponseFormatV2"></a>
<a id="tocSresponseformatv2"></a>
<a id="tocsresponseformatv2"></a>

```json
{
  "type": "text"
}
```

Configuration for forcing the model output to adhere to the specified format. Supported on [Command R](https://docs.cohere.com/v2/docs/command-r), [Command R+](https://docs.cohere.com/v2/docs/command-r-plus) and newer models.

The model can be forced into outputting JSON objects by setting `{ "type": "json_object" }`.

A [JSON Schema](https://json-schema.org/) can optionally be provided, to ensure a specific structure.

**Note**: When using  `{ "type": "json_object" }` your `message` should always explicitly instruct the model to generate a JSON (eg: _"Generate a JSON ..."_) . Otherwise the model may end up getting stuck generating an infinite stream of characters and eventually run out of context length.

**Note**: When `json_schema` is not specified, the generated object can have up to 5 layers of nesting.

**Limitation**: The parameter is not supported when used in combinations with the `documents` or `tools` parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ChatTextResponseFormatV2](#schemachattextresponseformatv2)|false|none|none|
|*oneOf*|[JsonResponseFormatV2](#schemajsonresponseformatv2)|false|none|none|

<h2 id="tocS_Thinking">Thinking</h2>
<!-- backwards compatibility -->
<a id="schemathinking"></a>
<a id="schema_Thinking"></a>
<a id="tocSthinking"></a>
<a id="tocsthinking"></a>

```json
{
  "type": "enabled",
  "token_budget": 1
}
```

Configuration for [reasoning features](https://docs.cohere.com/docs/reasoning).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Reasoning is enabled by default for models that support it, but can be turned off by setting `"type": "disabled"`.<br>|
|token_budget|integer|false|none|The maximum number of tokens the model can use for thinking, which must be set to a positive integer.<br>The model will stop thinking if it reaches the thinking token budget and will proceed with the response.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|enabled|
|type|disabled|

<h2 id="tocS_ChatFinishReason">ChatFinishReason</h2>
<!-- backwards compatibility -->
<a id="schemachatfinishreason"></a>
<a id="schema_ChatFinishReason"></a>
<a id="tocSchatfinishreason"></a>
<a id="tocschatfinishreason"></a>

```json
"COMPLETE"
```

The reason a chat request has finished.

- **complete**: The model finished sending a complete message.
- **max_tokens**: The number of generated tokens exceeded the model's context length or the value specified via the `max_tokens` parameter.
- **stop_sequence**: One of the provided `stop_sequence` entries was reached in the model's generation.
- **tool_call**: The model generated a Tool Call and is expecting a Tool Message in return
- **error**: The generation failed due to an internal error
- **timeout**: The generation was stopped because it exceeded the allowed time limit.

<h2 id="tocS_AssistantMessageResponse">AssistantMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassistantmessageresponse"></a>
<a id="schema_AssistantMessageResponse"></a>
<a id="tocSassistantmessageresponse"></a>
<a id="tocsassistantmessageresponse"></a>

```json
{
  "role": "assistant",
  "tool_calls": [
    {
      "id": "string",
      "type": "function",
      "function": {
        "name": "string",
        "arguments": "string"
      }
    }
  ],
  "tool_plan": "string",
  "content": [
    {
      "type": "text",
      "text": "string"
    }
  ],
  "citations": [
    {
      "start": 0,
      "end": 0,
      "text": "string",
      "sources": [
        {
          "id": "string",
          "tool_output": {}
        }
      ],
      "content_index": 0,
      "type": "TEXT_CONTENT"
    }
  ]
}
```

A message from the assistant role can contain text and tool call information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|none|
|tool_calls|[[ToolCallV2](#schematoolcallv2)]|false|none|none|
|tool_plan|string|false|none|A chain-of-thought style reflection and plan that the model generates when working with Tools.|
|content|[[ChatTextContent](#schemachattextcontent) \| [ChatThinkingContent](#schemachatthinkingcontent)]|false|none|none|
|citations|[[Citation](#schemacitation)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|assistant|

<h2 id="tocS_Usage">Usage</h2>
<!-- backwards compatibility -->
<a id="schemausage"></a>
<a id="schema_Usage"></a>
<a id="tocSusage"></a>
<a id="tocsusage"></a>

```json
{
  "billed_units": {
    "input_tokens": 0,
    "output_tokens": 0,
    "search_units": 0,
    "classifications": 0
  },
  "tokens": {
    "input_tokens": 0,
    "output_tokens": 0
  },
  "cached_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billed_units|object|false|none|none|
|tokens|object|false|none|none|
|cached_tokens|number|false|none|The number of prompt tokens that hit the inference cache.<br>|

<h2 id="tocS_LogprobItem">LogprobItem</h2>
<!-- backwards compatibility -->
<a id="schemalogprobitem"></a>
<a id="schema_LogprobItem"></a>
<a id="tocSlogprobitem"></a>
<a id="tocslogprobitem"></a>

```json
{
  "text": "string",
  "token_ids": [
    0
  ],
  "logprobs": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|The text chunk for which the log probabilities was calculated.|
|token_ids|[integer]|true|none|The token ids of each token used to construct the text chunk.|
|logprobs|[number(float)]|false|none|The log probability of each token used to construct the text chunk.|

<h2 id="tocS_ChatResponseV2">ChatResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemachatresponsev2"></a>
<a id="schema_ChatResponseV2"></a>
<a id="tocSchatresponsev2"></a>
<a id="tocschatresponsev2"></a>

```json
{
  "id": "string",
  "finish_reason": "COMPLETE",
  "message": {
    "role": "assistant",
    "tool_calls": [
      {
        "id": "string",
        "type": "function",
        "function": {
          "name": "string",
          "arguments": "string"
        }
      }
    ],
    "tool_plan": "string",
    "content": [
      {
        "type": "text",
        "text": "string"
      }
    ],
    "citations": [
      {
        "start": 0,
        "end": 0,
        "text": "string",
        "sources": [
          {
            "id": "string",
            "tool_output": {}
          }
        ],
        "content_index": 0,
        "type": "TEXT_CONTENT"
      }
    ]
  },
  "usage": {
    "billed_units": {
      "input_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0
  },
  "logprobs": [
    {
      "text": "string",
      "token_ids": [
        0
      ],
      "logprobs": [
        0
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the generated reply. Useful for submitting feedback.|
|finish_reason|[ChatFinishReason](#schemachatfinishreason)|true|none|The reason a chat request has finished.<br><br>- **complete**: The model finished sending a complete message.<br>- **max_tokens**: The number of generated tokens exceeded the model's context length or the value specified via the `max_tokens` parameter.<br>- **stop_sequence**: One of the provided `stop_sequence` entries was reached in the model's generation.<br>- **tool_call**: The model generated a Tool Call and is expecting a Tool Message in return<br>- **error**: The generation failed due to an internal error<br>- **timeout**: The generation was stopped because it exceeded the allowed time limit.<br>|
|message|[AssistantMessageResponse](#schemaassistantmessageresponse)|true|none|A message from the assistant role can contain text and tool call information.|
|usage|[Usage](#schemausage)|false|none|none|
|logprobs|[[LogprobItem](#schemalogprobitem)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|finish_reason|COMPLETE|
|finish_reason|STOP_SEQUENCE|
|finish_reason|MAX_TOKENS|
|finish_reason|TOOL_CALL|
|finish_reason|ERROR|
|finish_reason|TIMEOUT|

<h2 id="tocS_ChatStreamEventType">ChatStreamEventType</h2>
<!-- backwards compatibility -->
<a id="schemachatstreameventtype"></a>
<a id="schema_ChatStreamEventType"></a>
<a id="tocSchatstreameventtype"></a>
<a id="tocschatstreameventtype"></a>

```json
{
  "type": "message-start"
}
```

The streamed event types

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message-start|
|type|content-start|
|type|content-delta|
|type|content-end|
|type|tool-call-start|
|type|tool-call-delta|
|type|tool-call-end|
|type|tool-plan-delta|
|type|citation-start|
|type|citation-end|
|type|message-end|

<h2 id="tocS_ChatMessageStartEvent">ChatMessageStartEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatmessagestartevent"></a>
<a id="schema_ChatMessageStartEvent"></a>
<a id="tocSchatmessagestartevent"></a>
<a id="tocschatmessagestartevent"></a>

```json
{
  "type": "message-start",
  "id": "string",
  "delta": {
    "message": {
      "role": "assistant"
    }
  }
}
```

A streamed event which signifies that a stream has started.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|id|string|false|none|Unique identifier for the generated reply.|
|delta|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message-start|
|type|content-start|
|type|content-delta|
|type|content-end|
|type|tool-call-start|
|type|tool-call-delta|
|type|tool-call-end|
|type|tool-plan-delta|
|type|citation-start|
|type|citation-end|
|type|message-end|

<h2 id="tocS_ChatContentStartEvent">ChatContentStartEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatcontentstartevent"></a>
<a id="schema_ChatContentStartEvent"></a>
<a id="tocSchatcontentstartevent"></a>
<a id="tocschatcontentstartevent"></a>

```json
{
  "type": "message-start",
  "index": 0,
  "delta": {
    "message": {
      "content": {
        "thinking": "string",
        "text": "string",
        "type": "text"
      }
    }
  }
}
```

A streamed delta event which signifies that a new content block has started.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|index|integer|false|none|none|
|delta|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message-start|
|type|content-start|
|type|content-delta|
|type|content-end|
|type|tool-call-start|
|type|tool-call-delta|
|type|tool-call-end|
|type|tool-plan-delta|
|type|citation-start|
|type|citation-end|
|type|message-end|

<h2 id="tocS_ChatContentDeltaEvent">ChatContentDeltaEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatcontentdeltaevent"></a>
<a id="schema_ChatContentDeltaEvent"></a>
<a id="tocSchatcontentdeltaevent"></a>
<a id="tocschatcontentdeltaevent"></a>

```json
{
  "type": "message-start",
  "index": 0,
  "delta": {
    "message": {
      "content": {
        "thinking": "string",
        "text": "string"
      }
    }
  },
  "logprobs": {
    "text": "string",
    "token_ids": [
      0
    ],
    "logprobs": [
      0
    ]
  }
}
```

A streamed delta event which contains a delta of chat text content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|index|integer|false|none|none|
|delta|object|false|none|none|
|logprobs|[LogprobItem](#schemalogprobitem)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message-start|
|type|content-start|
|type|content-delta|
|type|content-end|
|type|tool-call-start|
|type|tool-call-delta|
|type|tool-call-end|
|type|tool-plan-delta|
|type|citation-start|
|type|citation-end|
|type|message-end|

<h2 id="tocS_ChatContentEndEvent">ChatContentEndEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatcontentendevent"></a>
<a id="schema_ChatContentEndEvent"></a>
<a id="tocSchatcontentendevent"></a>
<a id="tocschatcontentendevent"></a>

```json
{
  "type": "message-start",
  "index": 0
}
```

A streamed delta event which signifies that the content block has ended.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|index|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message-start|
|type|content-start|
|type|content-delta|
|type|content-end|
|type|tool-call-start|
|type|tool-call-delta|
|type|tool-call-end|
|type|tool-plan-delta|
|type|citation-start|
|type|citation-end|
|type|message-end|

<h2 id="tocS_ChatToolPlanDeltaEvent">ChatToolPlanDeltaEvent</h2>
<!-- backwards compatibility -->
<a id="schemachattoolplandeltaevent"></a>
<a id="schema_ChatToolPlanDeltaEvent"></a>
<a id="tocSchattoolplandeltaevent"></a>
<a id="tocschattoolplandeltaevent"></a>

```json
{
  "type": "message-start",
  "delta": {
    "message": {
      "tool_plan": "string"
    }
  }
}
```

A streamed event which contains a delta of tool plan text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|delta|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message-start|
|type|content-start|
|type|content-delta|
|type|content-end|
|type|tool-call-start|
|type|tool-call-delta|
|type|tool-call-end|
|type|tool-plan-delta|
|type|citation-start|
|type|citation-end|
|type|message-end|

<h2 id="tocS_ChatToolCallStartEvent">ChatToolCallStartEvent</h2>
<!-- backwards compatibility -->
<a id="schemachattoolcallstartevent"></a>
<a id="schema_ChatToolCallStartEvent"></a>
<a id="tocSchattoolcallstartevent"></a>
<a id="tocschattoolcallstartevent"></a>

```json
{
  "type": "message-start",
  "index": 0,
  "delta": {
    "message": {
      "tool_calls": {
        "id": "string",
        "type": "function",
        "function": {
          "name": "string",
          "arguments": "string"
        }
      }
    }
  }
}
```

A streamed event delta which signifies a tool call has started streaming.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|index|integer|false|none|none|
|delta|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message-start|
|type|content-start|
|type|content-delta|
|type|content-end|
|type|tool-call-start|
|type|tool-call-delta|
|type|tool-call-end|
|type|tool-plan-delta|
|type|citation-start|
|type|citation-end|
|type|message-end|

<h2 id="tocS_ChatToolCallDeltaEvent">ChatToolCallDeltaEvent</h2>
<!-- backwards compatibility -->
<a id="schemachattoolcalldeltaevent"></a>
<a id="schema_ChatToolCallDeltaEvent"></a>
<a id="tocSchattoolcalldeltaevent"></a>
<a id="tocschattoolcalldeltaevent"></a>

```json
{
  "type": "message-start",
  "index": 0,
  "delta": {
    "message": {
      "tool_calls": {
        "function": {
          "arguments": "string"
        }
      }
    }
  }
}
```

A streamed event delta which signifies a delta in tool call arguments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|index|integer|false|none|none|
|delta|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message-start|
|type|content-start|
|type|content-delta|
|type|content-end|
|type|tool-call-start|
|type|tool-call-delta|
|type|tool-call-end|
|type|tool-plan-delta|
|type|citation-start|
|type|citation-end|
|type|message-end|

<h2 id="tocS_ChatToolCallEndEvent">ChatToolCallEndEvent</h2>
<!-- backwards compatibility -->
<a id="schemachattoolcallendevent"></a>
<a id="schema_ChatToolCallEndEvent"></a>
<a id="tocSchattoolcallendevent"></a>
<a id="tocschattoolcallendevent"></a>

```json
{
  "type": "message-start",
  "index": 0
}
```

A streamed event delta which signifies a tool call has finished streaming.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|index|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message-start|
|type|content-start|
|type|content-delta|
|type|content-end|
|type|tool-call-start|
|type|tool-call-delta|
|type|tool-call-end|
|type|tool-plan-delta|
|type|citation-start|
|type|citation-end|
|type|message-end|

<h2 id="tocS_CitationStartEvent">CitationStartEvent</h2>
<!-- backwards compatibility -->
<a id="schemacitationstartevent"></a>
<a id="schema_CitationStartEvent"></a>
<a id="tocScitationstartevent"></a>
<a id="tocscitationstartevent"></a>

```json
{
  "type": "message-start",
  "index": 0,
  "delta": {
    "message": {
      "citations": {
        "start": 0,
        "end": 0,
        "text": "string",
        "sources": [
          {
            "id": "string",
            "tool_output": {}
          }
        ],
        "content_index": 0,
        "type": "TEXT_CONTENT"
      }
    }
  }
}
```

A streamed event which signifies a citation has been created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|index|integer|false|none|none|
|delta|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message-start|
|type|content-start|
|type|content-delta|
|type|content-end|
|type|tool-call-start|
|type|tool-call-delta|
|type|tool-call-end|
|type|tool-plan-delta|
|type|citation-start|
|type|citation-end|
|type|message-end|

<h2 id="tocS_CitationEndEvent">CitationEndEvent</h2>
<!-- backwards compatibility -->
<a id="schemacitationendevent"></a>
<a id="schema_CitationEndEvent"></a>
<a id="tocScitationendevent"></a>
<a id="tocscitationendevent"></a>

```json
{
  "type": "message-start",
  "index": 0
}
```

A streamed event which signifies a citation has finished streaming.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|index|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message-start|
|type|content-start|
|type|content-delta|
|type|content-end|
|type|tool-call-start|
|type|tool-call-delta|
|type|tool-call-end|
|type|tool-plan-delta|
|type|citation-start|
|type|citation-end|
|type|message-end|

<h2 id="tocS_ChatMessageEndEvent">ChatMessageEndEvent</h2>
<!-- backwards compatibility -->
<a id="schemachatmessageendevent"></a>
<a id="schema_ChatMessageEndEvent"></a>
<a id="tocSchatmessageendevent"></a>
<a id="tocschatmessageendevent"></a>

```json
{
  "type": "message-start",
  "id": "string",
  "delta": {
    "error": "string",
    "finish_reason": "COMPLETE",
    "usage": {
      "billed_units": {
        "input_tokens": 0,
        "output_tokens": 0,
        "search_units": 0,
        "classifications": 0
      },
      "tokens": {
        "input_tokens": 0,
        "output_tokens": 0
      },
      "cached_tokens": 0
    }
  }
}
```

A streamed event which signifies that the chat message has ended.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|id|string|false|none|none|
|delta|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message-start|
|type|content-start|
|type|content-delta|
|type|content-end|
|type|tool-call-start|
|type|tool-call-delta|
|type|tool-call-end|
|type|tool-plan-delta|
|type|citation-start|
|type|citation-end|
|type|message-end|

<h2 id="tocS_StreamedChatResponseV2">StreamedChatResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemastreamedchatresponsev2"></a>
<a id="schema_StreamedChatResponseV2"></a>
<a id="tocSstreamedchatresponsev2"></a>
<a id="tocsstreamedchatresponsev2"></a>

```json
{
  "type": "message-start",
  "id": "string",
  "delta": {
    "message": {
      "role": "assistant"
    }
  }
}
```

StreamedChatResponse is returned in streaming mode (specified with `stream=True` in the request).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ChatMessageStartEvent](#schemachatmessagestartevent)|false|none|A streamed event which signifies that a stream has started.|
|*oneOf*|[ChatContentStartEvent](#schemachatcontentstartevent)|false|none|A streamed delta event which signifies that a new content block has started.|
|*oneOf*|[ChatContentDeltaEvent](#schemachatcontentdeltaevent)|false|none|A streamed delta event which contains a delta of chat text content.|
|*oneOf*|[ChatContentEndEvent](#schemachatcontentendevent)|false|none|A streamed delta event which signifies that the content block has ended.|
|*oneOf*|[ChatToolPlanDeltaEvent](#schemachattoolplandeltaevent)|false|none|A streamed event which contains a delta of tool plan text.|
|*oneOf*|[ChatToolCallStartEvent](#schemachattoolcallstartevent)|false|none|A streamed event delta which signifies a tool call has started streaming.|
|*oneOf*|[ChatToolCallDeltaEvent](#schemachattoolcalldeltaevent)|false|none|A streamed event delta which signifies a delta in tool call arguments.|
|*oneOf*|[ChatToolCallEndEvent](#schemachattoolcallendevent)|false|none|A streamed event delta which signifies a tool call has finished streaming.|
|*oneOf*|[ChatMessageEndEvent](#schemachatmessageendevent)|false|none|A streamed event which signifies that the chat message has ended.|
|*oneOf*|[ChatDebugEvent](#schemachatdebugevent)|false|none|none|

<h2 id="tocS_PromptResponseV2">PromptResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemapromptresponsev2"></a>
<a id="schema_PromptResponseV2"></a>
<a id="tocSpromptresponsev2"></a>
<a id="tocspromptresponsev2"></a>

```json
{
  "prompt": "string"
}
```

Response from the v2 prompt endpoint — the constructed text prompt without generation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prompt|string|true|none|The constructed text prompt that would be sent to the model for this chat request.|

<h2 id="tocS_ParseDocument">ParseDocument</h2>
<!-- backwards compatibility -->
<a id="schemaparsedocument"></a>
<a id="schema_ParseDocument"></a>
<a id="tocSparsedocument"></a>
<a id="tocsparsedocument"></a>

```json
{
  "type": "image_url",
  "image_url": "string"
}
```

Document to parse. Currently only `image_url` documents are supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Discriminator for the document payload.|
|image_url|string|true|none|Image URL or base64 data URI to parse.<br><br>Limits:<br>- Maximum file size: 20 MB (compressed upload, download, or decoded<br>  data-URI payload)<br>- Maximum decoded size: 50 megapixels or 200 MB decompressed<br>  (whichever is exceeded first)<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image_url|

<h2 id="tocS_ParseOutputFormat">ParseOutputFormat</h2>
<!-- backwards compatibility -->
<a id="schemaparseoutputformat"></a>
<a id="schema_ParseOutputFormat"></a>
<a id="tocSparseoutputformat"></a>
<a id="tocsparseoutputformat"></a>

```json
"markdown"
```

Selects the page payload shape in the response. Defaults to `"markdown"`.

- `"markdown"`: each page includes markdown content. Tables are inlined as
  HTML, and images are referenced as `![<description>](<image_id>)` with
  matching entries in `page.markdown.images`.
- `"blocks"`: each page includes an ordered `blocks` array of text, image,
  and table content regions, including bounding boxes where available.

<h2 id="tocS_ParseTextBlock">ParseTextBlock</h2>
<!-- backwards compatibility -->
<a id="schemaparsetextblock"></a>
<a id="schema_ParseTextBlock"></a>
<a id="tocSparsetextblock"></a>
<a id="tocsparsetextblock"></a>

```json
{
  "content": "string"
}
```

Payload for a text block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|Extracted text content.|

<h2 id="tocS_ParseTextContentBlock">ParseTextContentBlock</h2>
<!-- backwards compatibility -->
<a id="schemaparsetextcontentblock"></a>
<a id="schema_ParseTextContentBlock"></a>
<a id="tocSparsetextcontentblock"></a>
<a id="tocsparsetextcontentblock"></a>

```json
{
  "type": "text",
  "text": {
    "content": "string"
  }
}
```

A text content block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|text|[ParseTextBlock](#schemaparsetextblock)|true|none|Payload for a text block.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|

<h2 id="tocS_ParseImageCategory">ParseImageCategory</h2>
<!-- backwards compatibility -->
<a id="schemaparseimagecategory"></a>
<a id="schema_ParseImageCategory"></a>
<a id="tocSparseimagecategory"></a>
<a id="tocsparseimagecategory"></a>

```json
"other"
```

Image element category.

<h2 id="tocS_ParseBoundingBox">ParseBoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemaparseboundingbox"></a>
<a id="schema_ParseBoundingBox"></a>
<a id="tocSparseboundingbox"></a>
<a id="tocsparseboundingbox"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0
}
```

A bounding box with pixel coordinates on the source document image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|integer|true|none|X coordinate of the top-left corner.|
|top_left_y|integer|true|none|Y coordinate of the top-left corner.|
|bottom_right_x|integer|true|none|X coordinate of the bottom-right corner.|
|bottom_right_y|integer|true|none|Y coordinate of the bottom-right corner.|

<h2 id="tocS_ParseBoundingBoxNormalized">ParseBoundingBoxNormalized</h2>
<!-- backwards compatibility -->
<a id="schemaparseboundingboxnormalized"></a>
<a id="schema_ParseBoundingBoxNormalized"></a>
<a id="tocSparseboundingboxnormalized"></a>
<a id="tocsparseboundingboxnormalized"></a>

```json
{
  "top_left_x": 0,
  "top_left_y": 0,
  "bottom_right_x": 0,
  "bottom_right_y": 0
}
```

A bounding box with coordinates in [0, 1] relative to the source page (model
coordinates are thousandths of page width/height).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|top_left_x|number(double)|true|none|Normalized X coordinate of the top-left corner.|
|top_left_y|number(double)|true|none|Normalized Y coordinate of the top-left corner.|
|bottom_right_x|number(double)|true|none|Normalized X coordinate of the bottom-right corner.|
|bottom_right_y|number(double)|true|none|Normalized Y coordinate of the bottom-right corner.|

<h2 id="tocS_ParseImageBlock">ParseImageBlock</h2>
<!-- backwards compatibility -->
<a id="schemaparseimageblock"></a>
<a id="schema_ParseImageBlock"></a>
<a id="tocSparseimageblock"></a>
<a id="tocsparseimageblock"></a>

```json
{
  "id": "string",
  "description": "string",
  "category": "other",
  "bounding_box": {
    "top_left_x": 0,
    "top_left_y": 0,
    "bottom_right_x": 0,
    "bottom_right_y": 0
  },
  "bounding_box_normalized": {
    "top_left_x": 0,
    "top_left_y": 0,
    "bottom_right_x": 0,
    "bottom_right_y": 0
  }
}
```

Payload for an image block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the image within the page (for example `img-0`).|
|description|string|true|none|Model-generated description of the image.|
|category|[ParseImageCategory](#schemaparseimagecategory)|true|none|Image element category.|
|bounding_box|[ParseBoundingBox](#schemaparseboundingbox)|true|none|A bounding box with pixel coordinates on the source document image.|
|bounding_box_normalized|[ParseBoundingBoxNormalized](#schemaparseboundingboxnormalized)|true|none|A bounding box with coordinates in [0, 1] relative to the source page (model<br>coordinates are thousandths of page width/height).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|category|other|
|category|flowchart|
|category|logo|
|category|signature|

<h2 id="tocS_ParseImageContentBlock">ParseImageContentBlock</h2>
<!-- backwards compatibility -->
<a id="schemaparseimagecontentblock"></a>
<a id="schema_ParseImageContentBlock"></a>
<a id="tocSparseimagecontentblock"></a>
<a id="tocsparseimagecontentblock"></a>

```json
{
  "type": "image",
  "image": {
    "id": "string",
    "description": "string",
    "category": "other",
    "bounding_box": {
      "top_left_x": 0,
      "top_left_y": 0,
      "bottom_right_x": 0,
      "bottom_right_y": 0
    },
    "bounding_box_normalized": {
      "top_left_x": 0,
      "top_left_y": 0,
      "bottom_right_x": 0,
      "bottom_right_y": 0
    }
  }
}
```

An image content block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|image|[ParseImageBlock](#schemaparseimageblock)|true|none|Payload for an image block.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image|

<h2 id="tocS_ParseTableContentType">ParseTableContentType</h2>
<!-- backwards compatibility -->
<a id="schemaparsetablecontenttype"></a>
<a id="schema_ParseTableContentType"></a>
<a id="tocSparsetablecontenttype"></a>
<a id="tocsparsetablecontenttype"></a>

```json
"html"
```

Table serialization format.

<h2 id="tocS_ParseTableBlock">ParseTableBlock</h2>
<!-- backwards compatibility -->
<a id="schemaparsetableblock"></a>
<a id="schema_ParseTableBlock"></a>
<a id="tocSparsetableblock"></a>
<a id="tocsparsetableblock"></a>

```json
{
  "type": "html",
  "html": "string",
  "title": "string",
  "description": "string",
  "bounding_box": {
    "top_left_x": 0,
    "top_left_y": 0,
    "bottom_right_x": 0,
    "bottom_right_y": 0
  },
  "bounding_box_normalized": {
    "top_left_x": 0,
    "top_left_y": 0,
    "bottom_right_x": 0,
    "bottom_right_y": 0
  }
}
```

Payload for a table block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ParseTableContentType](#schemaparsetablecontenttype)|true|none|Table serialization format.|
|html|string|true|none|Table content as HTML.|
|title|string|false|none|Optional table title when detected.|
|description|string|false|none|Optional table description when detected.|
|bounding_box|[ParseBoundingBox](#schemaparseboundingbox)|true|none|A bounding box with pixel coordinates on the source document image.|
|bounding_box_normalized|[ParseBoundingBoxNormalized](#schemaparseboundingboxnormalized)|true|none|A bounding box with coordinates in [0, 1] relative to the source page (model<br>coordinates are thousandths of page width/height).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|html|

<h2 id="tocS_ParseTableContentBlock">ParseTableContentBlock</h2>
<!-- backwards compatibility -->
<a id="schemaparsetablecontentblock"></a>
<a id="schema_ParseTableContentBlock"></a>
<a id="tocSparsetablecontentblock"></a>
<a id="tocsparsetablecontentblock"></a>

```json
{
  "type": "table",
  "table": {
    "type": "html",
    "html": "string",
    "title": "string",
    "description": "string",
    "bounding_box": {
      "top_left_x": 0,
      "top_left_y": 0,
      "bottom_right_x": 0,
      "bottom_right_y": 0
    },
    "bounding_box_normalized": {
      "top_left_x": 0,
      "top_left_y": 0,
      "bottom_right_x": 0,
      "bottom_right_y": 0
    }
  }
}
```

A table content block.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|table|[ParseTableBlock](#schemaparsetableblock)|true|none|Payload for a table block.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|table|

<h2 id="tocS_ParseBlock">ParseBlock</h2>
<!-- backwards compatibility -->
<a id="schemaparseblock"></a>
<a id="schema_ParseBlock"></a>
<a id="tocSparseblock"></a>
<a id="tocsparseblock"></a>

```json
{
  "type": "text",
  "text": {
    "content": "string"
  }
}
```

A content block on a parsed page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ParseTextContentBlock](#schemaparsetextcontentblock)|false|none|A text content block.|
|*oneOf*|[ParseImageContentBlock](#schemaparseimagecontentblock)|false|none|An image content block.|
|*oneOf*|[ParseTableContentBlock](#schemaparsetablecontentblock)|false|none|A table content block.|

<h2 id="tocS_ParseBlocksPageVariant">ParseBlocksPageVariant</h2>
<!-- backwards compatibility -->
<a id="schemaparseblockspagevariant"></a>
<a id="schema_ParseBlocksPageVariant"></a>
<a id="tocSparseblockspagevariant"></a>
<a id="tocsparseblockspagevariant"></a>

```json
{
  "index": 0,
  "type": "blocks",
  "blocks": [
    {
      "type": "text",
      "text": {
        "content": "string"
      }
    }
  ]
}
```

A parsed page with structured content blocks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer|true|none|Zero-based page index.|
|type|string|true|none|none|
|blocks|[[ParseBlock](#schemaparseblock)]|true|none|Ordered content blocks extracted from the page.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|blocks|

<h2 id="tocS_ParseMarkdownPage">ParseMarkdownPage</h2>
<!-- backwards compatibility -->
<a id="schemaparsemarkdownpage"></a>
<a id="schema_ParseMarkdownPage"></a>
<a id="tocSparsemarkdownpage"></a>
<a id="tocsparsemarkdownpage"></a>

```json
{
  "content": "string",
  "images": [
    {
      "id": "string",
      "description": "string",
      "category": "other",
      "bounding_box": {
        "top_left_x": 0,
        "top_left_y": 0,
        "bottom_right_x": 0,
        "bottom_right_y": 0
      },
      "bounding_box_normalized": {
        "top_left_x": 0,
        "top_left_y": 0,
        "bottom_right_x": 0,
        "bottom_right_y": 0
      }
    }
  ]
}
```

Markdown output payload for a parsed page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|Page content as markdown. Images are embedded as<br>`![<description>](<image_id>)`. Tables are inlined as HTML.<br>|
|images|[[ParseImageBlock](#schemaparseimageblock)]|false|none|Image metadata referenced from `content`.|

<h2 id="tocS_ParseMarkdownPageVariant">ParseMarkdownPageVariant</h2>
<!-- backwards compatibility -->
<a id="schemaparsemarkdownpagevariant"></a>
<a id="schema_ParseMarkdownPageVariant"></a>
<a id="tocSparsemarkdownpagevariant"></a>
<a id="tocsparsemarkdownpagevariant"></a>

```json
{
  "index": 0,
  "type": "markdown",
  "markdown": {
    "content": "string",
    "images": [
      {
        "id": "string",
        "description": "string",
        "category": "other",
        "bounding_box": {
          "top_left_x": 0,
          "top_left_y": 0,
          "bottom_right_x": 0,
          "bottom_right_y": 0
        },
        "bounding_box_normalized": {
          "top_left_x": 0,
          "top_left_y": 0,
          "bottom_right_x": 0,
          "bottom_right_y": 0
        }
      }
    ]
  }
}
```

A parsed page with markdown content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer|true|none|Zero-based page index.|
|type|string|true|none|none|
|markdown|[ParseMarkdownPage](#schemaparsemarkdownpage)|true|none|Markdown output payload for a parsed page.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|markdown|

<h2 id="tocS_ParsePage">ParsePage</h2>
<!-- backwards compatibility -->
<a id="schemaparsepage"></a>
<a id="schema_ParsePage"></a>
<a id="tocSparsepage"></a>
<a id="tocsparsepage"></a>

```json
{
  "index": 0,
  "type": "blocks",
  "blocks": [
    {
      "type": "text",
      "text": {
        "content": "string"
      }
    }
  ]
}
```

A single parsed page. The payload shape depends on `output_format`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ParseBlocksPageVariant](#schemaparseblockspagevariant)|false|none|A parsed page with structured content blocks.|
|*oneOf*|[ParseMarkdownPageVariant](#schemaparsemarkdownpagevariant)|false|none|A parsed page with markdown content.|

<h2 id="tocS_ParseResponse">ParseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaparseresponse"></a>
<a id="schema_ParseResponse"></a>
<a id="tocSparseresponse"></a>
<a id="tocsparseresponse"></a>

```json
{
  "id": "string",
  "pages": [
    {
      "index": 0,
      "type": "blocks",
      "blocks": [
        {
          "type": "text",
          "text": {
            "content": "string"
          }
        }
      ]
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  },
  "finish_reason": "COMPLETE"
}
```

Response from the v2 parse endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the parse response.|
|pages|[[ParsePage](#schemaparsepage)]|true|none|Parsed pages in document order.|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|
|finish_reason|[ChatFinishReason](#schemachatfinishreason)|false|none|The reason parsing finished. For Parse, this is only ever `COMPLETE` or<br>`MAX_TOKENS`; `MAX_TOKENS` indicates the output was truncated because it<br>exceeded the maximum output token limit.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|finish_reason|COMPLETE|
|finish_reason|STOP_SEQUENCE|
|finish_reason|MAX_TOKENS|
|finish_reason|TOOL_CALL|
|finish_reason|ERROR|
|finish_reason|TIMEOUT|

<h2 id="tocS_SingleGeneration">SingleGeneration</h2>
<!-- backwards compatibility -->
<a id="schemasinglegeneration"></a>
<a id="schema_SingleGeneration"></a>
<a id="tocSsinglegeneration"></a>
<a id="tocssinglegeneration"></a>

```json
{
  "id": "string",
  "text": "string",
  "index": 0,
  "likelihood": 0,
  "token_likelihoods": [
    {
      "token": "string",
      "likelihood": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|text|string|true|none|none|
|index|integer|false|none|Refers to the nth generation. Only present when `num_generations` is greater than zero.|
|likelihood|number|false|none|none|
|token_likelihoods|[object]|false|none|Only returned if `return_likelihoods` is set to `GENERATION` or `ALL`. The likelihood refers to the average log-likelihood of the entire specified string, which is useful for [evaluating the performance of your model](likelihood-eval), especially if you've created a [custom model](https://docs.cohere.com/docs/training-custom-models). Individual token likelihoods provide the log-likelihood of each token. The first token will not have a likelihood.|

<h2 id="tocS_Generation">Generation</h2>
<!-- backwards compatibility -->
<a id="schemageneration"></a>
<a id="schema_Generation"></a>
<a id="tocSgeneration"></a>
<a id="tocsgeneration"></a>

```json
{
  "id": "string",
  "prompt": "string",
  "generations": [
    {
      "id": "string",
      "text": "string",
      "index": 0,
      "likelihood": 0,
      "token_likelihoods": [
        {
          "token": "string",
          "likelihood": 0
        }
      ]
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|prompt|string|false|none|Prompt used for generations.|
|generations|[[SingleGeneration](#schemasinglegeneration)]|true|none|List of generated results|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

<h2 id="tocS_GenerateStreamEvent">GenerateStreamEvent</h2>
<!-- backwards compatibility -->
<a id="schemageneratestreamevent"></a>
<a id="schema_GenerateStreamEvent"></a>
<a id="tocSgeneratestreamevent"></a>
<a id="tocsgeneratestreamevent"></a>

```json
{
  "event_type": "text-generation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|text-generation|
|event_type|stream-end|
|event_type|stream-error|

<h2 id="tocS_GenerateStreamText">GenerateStreamText</h2>
<!-- backwards compatibility -->
<a id="schemageneratestreamtext"></a>
<a id="schema_GenerateStreamText"></a>
<a id="tocSgeneratestreamtext"></a>
<a id="tocsgeneratestreamtext"></a>

```json
{
  "event_type": "text-generation",
  "text": "string",
  "index": 0,
  "is_finished": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|
|text|string|true|none|A segment of text of the generation.|
|index|integer|false|none|Refers to the nth generation. Only present when `num_generations` is greater than zero, and only when text responses are being streamed.|
|is_finished|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|text-generation|
|event_type|stream-end|
|event_type|stream-error|

<h2 id="tocS_SingleGenerationInStream">SingleGenerationInStream</h2>
<!-- backwards compatibility -->
<a id="schemasinglegenerationinstream"></a>
<a id="schema_SingleGenerationInStream"></a>
<a id="tocSsinglegenerationinstream"></a>
<a id="tocssinglegenerationinstream"></a>

```json
{
  "id": "string",
  "text": "string",
  "index": 0,
  "finish_reason": "COMPLETE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|text|string|true|none|Full text of the generation.|
|index|integer|false|none|Refers to the nth generation. Only present when `num_generations` is greater than zero.|
|finish_reason|[FinishReason](#schemafinishreason)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|finish_reason|COMPLETE|
|finish_reason|STOP_SEQUENCE|
|finish_reason|ERROR|
|finish_reason|ERROR_TOXIC|
|finish_reason|ERROR_LIMIT|
|finish_reason|USER_CANCEL|
|finish_reason|MAX_TOKENS|
|finish_reason|TIMEOUT|

<h2 id="tocS_GenerateStreamEnd">GenerateStreamEnd</h2>
<!-- backwards compatibility -->
<a id="schemageneratestreamend"></a>
<a id="schema_GenerateStreamEnd"></a>
<a id="tocSgeneratestreamend"></a>
<a id="tocsgeneratestreamend"></a>

```json
{
  "event_type": "text-generation",
  "is_finished": true,
  "finish_reason": "COMPLETE",
  "response": {
    "id": "string",
    "prompt": "string",
    "generations": [
      {
        "id": "string",
        "text": "string",
        "index": 0,
        "finish_reason": "COMPLETE"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|
|is_finished|boolean|true|none|none|
|finish_reason|[FinishReason](#schemafinishreason)|false|none|none|
|response|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|text-generation|
|event_type|stream-end|
|event_type|stream-error|
|finish_reason|COMPLETE|
|finish_reason|STOP_SEQUENCE|
|finish_reason|ERROR|
|finish_reason|ERROR_TOXIC|
|finish_reason|ERROR_LIMIT|
|finish_reason|USER_CANCEL|
|finish_reason|MAX_TOKENS|
|finish_reason|TIMEOUT|

<h2 id="tocS_GenerateStreamError">GenerateStreamError</h2>
<!-- backwards compatibility -->
<a id="schemageneratestreamerror"></a>
<a id="schema_GenerateStreamError"></a>
<a id="tocSgeneratestreamerror"></a>
<a id="tocsgeneratestreamerror"></a>

```json
{
  "event_type": "text-generation",
  "index": 0,
  "is_finished": true,
  "finish_reason": "COMPLETE",
  "err": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_type|string|true|none|none|
|index|integer|false|none|Refers to the nth generation. Only present when `num_generations` is greater than zero.|
|is_finished|boolean|true|none|none|
|finish_reason|[FinishReason](#schemafinishreason)|true|none|none|
|err|string|true|none|Error message|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|text-generation|
|event_type|stream-end|
|event_type|stream-error|
|finish_reason|COMPLETE|
|finish_reason|STOP_SEQUENCE|
|finish_reason|ERROR|
|finish_reason|ERROR_TOXIC|
|finish_reason|ERROR_LIMIT|
|finish_reason|USER_CANCEL|
|finish_reason|MAX_TOKENS|
|finish_reason|TIMEOUT|

<h2 id="tocS_GenerateStreamedResponse">GenerateStreamedResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratestreamedresponse"></a>
<a id="schema_GenerateStreamedResponse"></a>
<a id="tocSgeneratestreamedresponse"></a>
<a id="tocsgeneratestreamedresponse"></a>

```json
{
  "event_type": "text-generation",
  "text": "string",
  "index": 0,
  "is_finished": true
}
```

Response in content type stream when `stream` is `true` in the request parameters. Generation tokens are streamed with the GenerationStream response. The final response is of type GenerationFinalResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[GenerateStreamText](#schemageneratestreamtext)|false|none|none|
|*oneOf*|[GenerateStreamEnd](#schemageneratestreamend)|false|none|none|
|*oneOf*|[GenerateStreamError](#schemageneratestreamerror)|false|none|none|

<h2 id="tocS_EmbedInputType">EmbedInputType</h2>
<!-- backwards compatibility -->
<a id="schemaembedinputtype"></a>
<a id="schema_EmbedInputType"></a>
<a id="tocSembedinputtype"></a>
<a id="tocsembedinputtype"></a>

```json
"search_document"
```

Specifies the type of input passed to the model. Required for embedding models v3 and higher.

- `"search_document"`: Used for embeddings stored in a vector database for search use-cases.
- `"search_query"`: Used for embeddings of search queries run against a vector DB to find relevant documents.
- `"classification"`: Used for embeddings passed through a text classifier.
- `"clustering"`: Used for the embeddings run through a clustering algorithm.
- `"image"`: Used for embeddings with image input.

<h2 id="tocS_EmbeddingType">EmbeddingType</h2>
<!-- backwards compatibility -->
<a id="schemaembeddingtype"></a>
<a id="schema_EmbeddingType"></a>
<a id="tocSembeddingtype"></a>
<a id="tocsembeddingtype"></a>

```json
"float"
```

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "width": 0,
  "height": 0,
  "format": "string",
  "bit_depth": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|width|number(int64)|true|none|Width of the image in pixels|
|height|number(int64)|true|none|Height of the image in pixels|
|format|string|true|none|Format of the image|
|bit_depth|number(int64)|true|none|Bit depth of the image|

<h2 id="tocS_EmbedFloatsResponse">EmbedFloatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaembedfloatsresponse"></a>
<a id="schema_EmbedFloatsResponse"></a>
<a id="tocSembedfloatsresponse"></a>
<a id="tocsembedfloatsresponse"></a>

```json
{
  "response_type": "embeddings_floats",
  "id": "string",
  "embeddings": [
    [
      0
    ]
  ],
  "texts": [
    "string"
  ],
  "images": [
    {
      "width": 0,
      "height": 0,
      "format": "string",
      "bit_depth": 0
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response_type|string|false|none|none|
|id|string|true|none|none|
|embeddings|[[number]]|true|none|An array of embeddings, where each embedding is an array of floats. The length of the `embeddings` array will be the same as the length of the original `texts` array.|
|texts|[string]|true|none|The text entries for which embeddings were returned.|
|images|[[Image](#schemaimage)]|false|none|The image entries for which embeddings were returned.|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|response_type|embeddings_floats|
|response_type|embeddings_by_type|

<h2 id="tocS_EmbedByTypeResponse">EmbedByTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaembedbytyperesponse"></a>
<a id="schema_EmbedByTypeResponse"></a>
<a id="tocSembedbytyperesponse"></a>
<a id="tocsembedbytyperesponse"></a>

```json
{
  "response_type": "embeddings_floats",
  "id": "string",
  "embeddings": {
    "float": [
      [
        0
      ]
    ],
    "int8": [
      [
        0
      ]
    ],
    "uint8": [
      [
        0
      ]
    ],
    "binary": [
      [
        0
      ]
    ],
    "ubinary": [
      [
        0
      ]
    ],
    "base64": [
      "string"
    ]
  },
  "texts": [
    "string"
  ],
  "images": [
    {
      "width": 0,
      "height": 0,
      "format": "string",
      "bit_depth": 0
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response_type|string|false|none|none|
|id|string|true|none|none|
|embeddings|object|true|none|An object with different embedding types. The length of each embedding type array will be the same as the length of the original `texts` array.|
|texts|[string]|false|none|The text entries for which embeddings were returned.|
|images|[[Image](#schemaimage)]|false|none|The image entries for which embeddings were returned.|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|response_type|embeddings_floats|
|response_type|embeddings_by_type|

<h2 id="tocS_EmbedContentType">EmbedContentType</h2>
<!-- backwards compatibility -->
<a id="schemaembedcontenttype"></a>
<a id="schema_EmbedContentType"></a>
<a id="tocSembedcontenttype"></a>
<a id="tocsembedcontenttype"></a>

```json
"text"
```

<h2 id="tocS_EmbedImageUrl">EmbedImageUrl</h2>
<!-- backwards compatibility -->
<a id="schemaembedimageurl"></a>
<a id="schema_EmbedImageUrl"></a>
<a id="tocSembedimageurl"></a>
<a id="tocsembedimageurl"></a>

```json
{
  "url": "string"
}
```

Base64 url of image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|

<h2 id="tocS_EmbedImage">EmbedImage</h2>
<!-- backwards compatibility -->
<a id="schemaembedimage"></a>
<a id="schema_EmbedImage"></a>
<a id="tocSembedimage"></a>
<a id="tocsembedimage"></a>

```json
{
  "type": "text",
  "image_url": {
    "url": "string"
  }
}
```

Image content of the input. Supported with Embed v3.0 and newer models.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[EmbedContentType](#schemaembedcontenttype)|false|write-only|none|
|image_url|[EmbedImageUrl](#schemaembedimageurl)|false|none|Base64 url of image.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|image_url|

<h2 id="tocS_EmbedText">EmbedText</h2>
<!-- backwards compatibility -->
<a id="schemaembedtext"></a>
<a id="schema_EmbedText"></a>
<a id="tocSembedtext"></a>
<a id="tocsembedtext"></a>

```json
{
  "type": "text",
  "text": "string"
}
```

Text content of the input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[EmbedContentType](#schemaembedcontenttype)|false|write-only|none|
|text|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|image_url|

<h2 id="tocS_EmbedContent">EmbedContent</h2>
<!-- backwards compatibility -->
<a id="schemaembedcontent"></a>
<a id="schema_EmbedContent"></a>
<a id="tocSembedcontent"></a>
<a id="tocsembedcontent"></a>

```json
{
  "type": "text",
  "image_url": {
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[EmbedImage](#schemaembedimage)|false|none|Image content of the input. Supported with Embed v3.0 and newer models.|
|*oneOf*|[EmbedText](#schemaembedtext)|false|none|Text content of the input.|

<h2 id="tocS_EmbedInput">EmbedInput</h2>
<!-- backwards compatibility -->
<a id="schemaembedinput"></a>
<a id="schema_EmbedInput"></a>
<a id="tocSembedinput"></a>
<a id="tocsembedinput"></a>

```json
{
  "content": [
    {
      "type": "text",
      "image_url": {
        "url": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[EmbedContent](#schemaembedcontent)]|true|none|An array of objects containing the input data for the model to embed.|

<h2 id="tocS_BatchStatus">BatchStatus</h2>
<!-- backwards compatibility -->
<a id="schemabatchstatus"></a>
<a id="schema_BatchStatus"></a>
<a id="tocSbatchstatus"></a>
<a id="tocsbatchstatus"></a>

```json
"BATCH_STATUS_UNSPECIFIED"
```

The possible stages of a batch life-cycle.

 - BATCH_STATUS_UNSPECIFIED: Unspecified status.
 - BATCH_STATUS_QUEUED: The batch has been queued.
 - BATCH_STATUS_IN_PROGRESS: The batch is in-progress.
 - BATCH_STATUS_CANCELING: The batch is being canceled.
 - BATCH_STATUS_COMPLETED: The batch has been completed.
 - BATCH_STATUS_FAILED: The batch has failed.
 - BATCH_STATUS_CANCELED: The batch has been canceled.

<h2 id="tocS_Batch">Batch</h2>
<!-- backwards compatibility -->
<a id="schemabatch"></a>
<a id="schema_Batch"></a>
<a id="tocSbatch"></a>
<a id="tocsbatch"></a>

```json
{
  "id": "string",
  "name": "string",
  "creator_id": "string",
  "org_id": "string",
  "status": "BATCH_STATUS_UNSPECIFIED",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "input_dataset_id": "string",
  "output_dataset_id": "string",
  "input_tokens": "string",
  "output_tokens": "string",
  "model": "string",
  "num_records": 0,
  "num_successful_records": 0,
  "num_failed_records": 0,
  "status_reason": "string"
}
```

This resource represents a batch job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|read-only. Batch ID.|
|name|string|true|none|Batch name (e.g. `foobar`).|
|creator_id|string|false|read-only|read-only. User ID of the creator.|
|org_id|string|false|read-only|read-only. Organization ID.|
|status|[BatchStatus](#schemabatchstatus)|false|read-only|read-only. Current stage in the life-cycle of the batch.|
|created_at|string(date-time)|false|read-only|read-only. Creation timestamp.|
|updated_at|string(date-time)|false|read-only|read-only. Latest update timestamp.|
|input_dataset_id|string|true|none|ID of the dataset the batch reads inputs from.|
|output_dataset_id|string|false|read-only|none|
|input_tokens|string(int64)|false|read-only|read-only. The total number of input tokens in the batch.|
|output_tokens|string(int64)|false|read-only|read-only. The total number of output tokens in the batch.|
|model|string|true|none|The name of the model the batch uses.|
|num_records|integer(int32)|false|read-only|read-only. The total number of records in the batch.|
|num_successful_records|integer(int32)|false|read-only|read-only. The current number of successful records in the batch.|
|num_failed_records|integer(int32)|false|read-only|read-only. The current number of failed records in the batch.|
|status_reason|string|false|read-only|read-only. More details about the reason for the status of a batch job.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|BATCH_STATUS_UNSPECIFIED|
|status|BATCH_STATUS_QUEUED|
|status|BATCH_STATUS_IN_PROGRESS|
|status|BATCH_STATUS_CANCELING|
|status|BATCH_STATUS_COMPLETED|
|status|BATCH_STATUS_FAILED|
|status|BATCH_STATUS_CANCELED|

<h2 id="tocS_ListBatchesResponse">ListBatchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbatchesresponse"></a>
<a id="schema_ListBatchesResponse"></a>
<a id="tocSlistbatchesresponse"></a>
<a id="tocslistbatchesresponse"></a>

```json
{
  "batches": [
    {
      "id": "string",
      "name": "string",
      "creator_id": "string",
      "org_id": "string",
      "status": "BATCH_STATUS_UNSPECIFIED",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "input_dataset_id": "string",
      "output_dataset_id": "string",
      "input_tokens": "string",
      "output_tokens": "string",
      "model": "string",
      "num_records": 0,
      "num_successful_records": 0,
      "num_failed_records": 0,
      "status_reason": "string"
    }
  ],
  "next_page_token": "string"
}
```

Response to a request to list batches.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batches|[[Batch](#schemabatch)]|false|none|The batches that belong to the authenticated user.|
|next_page_token|string|false|none|A token, which can be sent as `page_token` to retrieve the next page.<br>If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_BatchError">BatchError</h2>
<!-- backwards compatibility -->
<a id="schemabatcherror"></a>
<a id="schema_BatchError"></a>
<a id="tocSbatcherror"></a>
<a id="tocsbatcherror"></a>

```json
{
  "message": "string"
}
```

Error is the response for any unsuccessful event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|A developer-facing error message.|

<h2 id="tocS_CreateBatchResponse">CreateBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchresponse"></a>
<a id="schema_CreateBatchResponse"></a>
<a id="tocScreatebatchresponse"></a>
<a id="tocscreatebatchresponse"></a>

```json
{
  "batch": {
    "id": "string",
    "name": "string",
    "creator_id": "string",
    "org_id": "string",
    "status": "BATCH_STATUS_UNSPECIFIED",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "input_dataset_id": "string",
    "output_dataset_id": "string",
    "input_tokens": "string",
    "output_tokens": "string",
    "model": "string",
    "num_records": 0,
    "num_successful_records": 0,
    "num_failed_records": 0,
    "status_reason": "string"
  }
}
```

Response to request to create a batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch|[Batch](#schemabatch)|true|none|Information about the batch.|

<h2 id="tocS_GetBatchResponse">GetBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbatchresponse"></a>
<a id="schema_GetBatchResponse"></a>
<a id="tocSgetbatchresponse"></a>
<a id="tocsgetbatchresponse"></a>

```json
{
  "batch": {
    "id": "string",
    "name": "string",
    "creator_id": "string",
    "org_id": "string",
    "status": "BATCH_STATUS_UNSPECIFIED",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "input_dataset_id": "string",
    "output_dataset_id": "string",
    "input_tokens": "string",
    "output_tokens": "string",
    "model": "string",
    "num_records": 0,
    "num_successful_records": 0,
    "num_failed_records": 0,
    "status_reason": "string"
  }
}
```

Response to a request to get a batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch|[Batch](#schemabatch)|true|none|Information about the batch.|

<h2 id="tocS_CancelBatchResponse">CancelBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelbatchresponse"></a>
<a id="schema_CancelBatchResponse"></a>
<a id="tocScancelbatchresponse"></a>
<a id="tocscancelbatchresponse"></a>

```json
{}
```

Response to a request to cancel a batch.

<h2 id="tocS_RetryBatchResponse">RetryBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaretrybatchresponse"></a>
<a id="schema_RetryBatchResponse"></a>
<a id="tocSretrybatchresponse"></a>
<a id="tocsretrybatchresponse"></a>

```json
{
  "batch": {
    "id": "string",
    "name": "string",
    "creator_id": "string",
    "org_id": "string",
    "status": "BATCH_STATUS_UNSPECIFIED",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "input_dataset_id": "string",
    "output_dataset_id": "string",
    "input_tokens": "string",
    "output_tokens": "string",
    "model": "string",
    "num_records": 0,
    "num_successful_records": 0,
    "num_failed_records": 0,
    "status_reason": "string"
  }
}
```

Response to a request to retry a batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch|[Batch](#schemabatch)|true|none|Information about the newly created retry batch.|

<h2 id="tocS_EmbedJob">EmbedJob</h2>
<!-- backwards compatibility -->
<a id="schemaembedjob"></a>
<a id="schema_EmbedJob"></a>
<a id="tocSembedjob"></a>
<a id="tocsembedjob"></a>

```json
{
  "job_id": "string",
  "name": "string",
  "status": "processing",
  "created_at": "1970-01-01T00:00:00Z",
  "input_dataset_id": "string",
  "output_dataset_id": "string",
  "model": "string",
  "truncate": "START",
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|true|none|ID of the embed job|
|name|string|false|none|The name of the embed job|
|status|string|true|none|The status of the embed job|
|created_at|string(date-time)|true|none|The creation date of the embed job|
|input_dataset_id|string|true|none|ID of the input dataset|
|output_dataset_id|string|false|none|ID of the resulting output dataset|
|model|string|true|none|ID of the model used to embed|
|truncate|string|true|none|The truncation option used|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|processing|
|status|complete|
|status|cancelling|
|status|cancelled|
|status|failed|
|truncate|START|
|truncate|END|

<h2 id="tocS_ListEmbedJobResponse">ListEmbedJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistembedjobresponse"></a>
<a id="schema_ListEmbedJobResponse"></a>
<a id="tocSlistembedjobresponse"></a>
<a id="tocslistembedjobresponse"></a>

```json
{
  "embed_jobs": [
    {
      "job_id": "string",
      "name": "string",
      "status": "processing",
      "created_at": "1970-01-01T00:00:00Z",
      "input_dataset_id": "string",
      "output_dataset_id": "string",
      "model": "string",
      "truncate": "START",
      "meta": {
        "api_version": {
          "version": "string",
          "is_deprecated": true,
          "is_experimental": true
        },
        "billed_units": {
          "images": 0,
          "input_tokens": 0,
          "image_tokens": 0,
          "output_tokens": 0,
          "search_units": 0,
          "classifications": 0,
          "pages": 0
        },
        "tokens": {
          "input_tokens": 0,
          "output_tokens": 0
        },
        "cached_tokens": 0,
        "warnings": [
          "string"
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embed_jobs|[[EmbedJob](#schemaembedjob)]|false|none|none|

<h2 id="tocS_CreateEmbedJobRequest">CreateEmbedJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateembedjobrequest"></a>
<a id="schema_CreateEmbedJobRequest"></a>
<a id="tocScreateembedjobrequest"></a>
<a id="tocscreateembedjobrequest"></a>

```json
{
  "model": "string",
  "dataset_id": "string",
  "input_type": "search_document",
  "name": "string",
  "embedding_types": [
    "float"
  ],
  "truncate": "END"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string(string)|true|none|ID of the embedding model.<br><br>Available models and corresponding embedding dimensions:<br><br>- `embed-english-v3.0` : 1024<br>- `embed-multilingual-v3.0` : 1024<br>- `embed-english-light-v3.0` : 384<br>- `embed-multilingual-light-v3.0` : 384<br>|
|dataset_id|string|true|none|ID of a [Dataset](https://docs.cohere.com/docs/datasets). The Dataset must be of type `embed-input` and must have a validation status `Validated`|
|input_type|[EmbedInputType](#schemaembedinputtype)|true|none|Specifies the type of input passed to the model. Required for embedding models v3 and higher.<br><br>- `"search_document"`: Used for embeddings stored in a vector database for search use-cases.<br>- `"search_query"`: Used for embeddings of search queries run against a vector DB to find relevant documents.<br>- `"classification"`: Used for embeddings passed through a text classifier.<br>- `"clustering"`: Used for the embeddings run through a clustering algorithm.<br>- `"image"`: Used for embeddings with image input.<br>|
|name|string|false|none|The name of the embed job.|
|embedding_types|[[EmbeddingType](#schemaembeddingtype)]|false|none|Specifies the types of embeddings you want to get back. Not required and default is None, which returns the Embed Floats response type. Can be one or more of the following types.<br><br>* `"float"`: Use this when you want to get back the default float embeddings. Valid for all models.<br>* `"int8"`: Use this when you want to get back signed int8 embeddings. Valid for v3 and newer model versions.<br>* `"uint8"`: Use this when you want to get back unsigned int8 embeddings. Valid for v3 and newer model versions.<br>* `"binary"`: Use this when you want to get back signed binary embeddings. Valid for v3 and newer model versions.<br>* `"ubinary"`: Use this when you want to get back unsigned binary embeddings. Valid for v3 and newer model versions.|
|truncate|string|false|none|One of `START\|END` to specify how the API will handle inputs longer than the maximum token length.<br><br>Passing `START` will discard the start of the input. `END` will discard the end of the input. In both cases, input is discarded until the remaining input is exactly the maximum input token length for the model.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|input_type|search_document|
|input_type|search_query|
|input_type|classification|
|input_type|clustering|
|input_type|image|
|embedding_types|float|
|embedding_types|int8|
|embedding_types|uint8|
|embedding_types|binary|
|embedding_types|ubinary|
|embedding_types|base64|
|truncate|START|
|truncate|END|

<h2 id="tocS_CreateEmbedJobResponse">CreateEmbedJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateembedjobresponse"></a>
<a id="schema_CreateEmbedJobResponse"></a>
<a id="tocScreateembedjobresponse"></a>
<a id="tocscreateembedjobresponse"></a>

```json
{
  "job_id": "string",
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

Response from creating an embed job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|true|none|none|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

<h2 id="tocS_RerankDocument">RerankDocument</h2>
<!-- backwards compatibility -->
<a id="schemarerankdocument"></a>
<a id="schema_RerankDocument"></a>
<a id="tocSrerankdocument"></a>
<a id="tocsrerankdocument"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The text of the document to rerank.|

<h2 id="tocS_RerankRelevantSpans">RerankRelevantSpans</h2>
<!-- backwards compatibility -->
<a id="schemarerankrelevantspans"></a>
<a id="schema_RerankRelevantSpans"></a>
<a id="tocSrerankrelevantspans"></a>
<a id="tocsrerankrelevantspans"></a>

```json
{
  "mode": "enabled",
  "threshold": 0.1,
  "max_spans": 1
}
```

When enabled, the API response will include the relevant spans of each document that contributed to its rank. This feature is only supported for Rerank v5 and newer models.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|true|none|One of `"enabled"` or `"disabled"`. Controls whether relevant spans will be returned in the API response.|
|threshold|number(float)|false|none|Only spans with a relevance score higher than the specified threshold value will be included in the response. Defaults to `0.1`.|
|max_spans|integer|false|none|The maximum number of relevant spans to include per document. If not set, all relevant spans will be returned.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|enabled|
|mode|disabled|

<h2 id="tocS_RerankRelevantSpanResponse">RerankRelevantSpanResponse</h2>
<!-- backwards compatibility -->
<a id="schemarerankrelevantspanresponse"></a>
<a id="schema_RerankRelevantSpanResponse"></a>
<a id="tocSrerankrelevantspanresponse"></a>
<a id="tocsrerankrelevantspanresponse"></a>

```json
{
  "start": 0,
  "end": 0,
  "score": 0
}
```

A stretch of a document that the model found relevant to the query, returned when context compression is enabled through `relevant_spans`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|integer|true|none|The position of the span's first character in the document, counted in Unicode codepoints.|
|end|integer|true|none|The position just past the span's last character, counted in Unicode codepoints, so the span covers `[start, end)` of the document.|
|score|number(float)|true|none|How relevant the span is to the query, in the range `[0, 1]`. Only spans reaching the requested `threshold` are returned.|

<h2 id="tocS_ClassifyExample">ClassifyExample</h2>
<!-- backwards compatibility -->
<a id="schemaclassifyexample"></a>
<a id="schema_ClassifyExample"></a>
<a id="tocSclassifyexample"></a>
<a id="tocsclassifyexample"></a>

```json
{
  "text": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|write-only|none|
|label|string|false|write-only|none|

<h2 id="tocS_DatasetValidationStatus">DatasetValidationStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatasetvalidationstatus"></a>
<a id="schema_DatasetValidationStatus"></a>
<a id="tocSdatasetvalidationstatus"></a>
<a id="tocsdatasetvalidationstatus"></a>

```json
"unknown"
```

The validation status of the dataset

<h2 id="tocS_DatasetType">DatasetType</h2>
<!-- backwards compatibility -->
<a id="schemadatasettype"></a>
<a id="schema_DatasetType"></a>
<a id="tocSdatasettype"></a>
<a id="tocsdatasettype"></a>

```json
"embed-input"
```

The type of the dataset

<h2 id="tocS_DatasetPart">DatasetPart</h2>
<!-- backwards compatibility -->
<a id="schemadatasetpart"></a>
<a id="schema_DatasetPart"></a>
<a id="tocSdatasetpart"></a>
<a id="tocsdatasetpart"></a>

```json
{
  "id": "string",
  "name": "string",
  "url": "string",
  "index": 0,
  "size_bytes": 0,
  "num_rows": 0,
  "original_url": "string",
  "samples": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The dataset part ID|
|name|string|true|none|The name of the dataset part|
|url|string|false|none|The download url of the file|
|index|integer(int32)|false|none|The index of the file|
|size_bytes|integer(int32)|false|none|The size of the file in bytes|
|num_rows|integer(int32)|false|none|The number of rows in the file|
|original_url|string|false|none|The download url of the original file|
|samples|[string]|false|none|The first few rows of the parsed file|

<h2 id="tocS_ParseInfo">ParseInfo</h2>
<!-- backwards compatibility -->
<a id="schemaparseinfo"></a>
<a id="schema_ParseInfo"></a>
<a id="tocSparseinfo"></a>
<a id="tocsparseinfo"></a>

```json
{
  "separator": "string",
  "delimiter": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|separator|string|false|write-only|none|
|delimiter|string|false|write-only|none|

<h2 id="tocS_RerankerDataMetrics">RerankerDataMetrics</h2>
<!-- backwards compatibility -->
<a id="schemarerankerdatametrics"></a>
<a id="schema_RerankerDataMetrics"></a>
<a id="tocSrerankerdatametrics"></a>
<a id="tocsrerankerdatametrics"></a>

```json
{
  "num_train_queries": 0,
  "num_train_relevant_passages": 0,
  "num_train_hard_negatives": 0,
  "num_eval_queries": 0,
  "num_eval_relevant_passages": 0,
  "num_eval_hard_negatives": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_train_queries|number(int64)|false|none|The number of training queries.|
|num_train_relevant_passages|number(int64)|false|none|The sum of all relevant passages of valid training examples.|
|num_train_hard_negatives|number(int64)|false|none|The sum of all hard negatives of valid training examples.|
|num_eval_queries|number(int64)|false|none|The number of evaluation queries.|
|num_eval_relevant_passages|number(int64)|false|none|The sum of all relevant passages of valid eval examples.|
|num_eval_hard_negatives|number(int64)|false|none|The sum of all hard negatives of valid eval examples.|

<h2 id="tocS_ChatDataMetrics">ChatDataMetrics</h2>
<!-- backwards compatibility -->
<a id="schemachatdatametrics"></a>
<a id="schema_ChatDataMetrics"></a>
<a id="tocSchatdatametrics"></a>
<a id="tocschatdatametrics"></a>

```json
{
  "num_train_turns": 0,
  "num_eval_turns": 0,
  "preamble": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_train_turns|number(int64)|false|none|The sum of all turns of valid train examples.|
|num_eval_turns|number(int64)|false|none|The sum of all turns of valid eval examples.|
|preamble|string|false|none|The preamble of this dataset.|

<h2 id="tocS_LabelMetric">LabelMetric</h2>
<!-- backwards compatibility -->
<a id="schemalabelmetric"></a>
<a id="schema_LabelMetric"></a>
<a id="tocSlabelmetric"></a>
<a id="tocslabelmetric"></a>

```json
{
  "total_examples": 0,
  "label": "string",
  "samples": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_examples|number(int64)|false|none|Total number of examples for this label|
|label|string|false|none|value of the label|
|samples|[string]|false|none|samples for this label|

<h2 id="tocS_ClassifyDataMetrics">ClassifyDataMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaclassifydatametrics"></a>
<a id="schema_ClassifyDataMetrics"></a>
<a id="tocSclassifydatametrics"></a>
<a id="tocsclassifydatametrics"></a>

```json
{
  "label_metrics": [
    {
      "total_examples": 0,
      "label": "string",
      "samples": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label_metrics|[[LabelMetric](#schemalabelmetric)]|false|none|none|

<h2 id="tocS_FinetuneDatasetMetrics">FinetuneDatasetMetrics</h2>
<!-- backwards compatibility -->
<a id="schemafinetunedatasetmetrics"></a>
<a id="schema_FinetuneDatasetMetrics"></a>
<a id="tocSfinetunedatasetmetrics"></a>
<a id="tocsfinetunedatasetmetrics"></a>

```json
{
  "trainable_token_count": 0,
  "total_examples": 0,
  "train_examples": 0,
  "train_size_bytes": 0,
  "eval_examples": 0,
  "eval_size_bytes": 0,
  "reranker_data_metrics": {
    "num_train_queries": 0,
    "num_train_relevant_passages": 0,
    "num_train_hard_negatives": 0,
    "num_eval_queries": 0,
    "num_eval_relevant_passages": 0,
    "num_eval_hard_negatives": 0
  },
  "chat_data_metrics": {
    "num_train_turns": 0,
    "num_eval_turns": 0,
    "preamble": "string"
  },
  "classify_data_metrics": {
    "label_metrics": [
      {
        "total_examples": 0,
        "label": "string",
        "samples": [
          "string"
        ]
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trainable_token_count|number(int64)|false|none|The number of tokens of valid examples that can be used for training.|
|total_examples|number(int64)|false|none|The overall number of examples.|
|train_examples|number(int64)|false|none|The number of training examples.|
|train_size_bytes|number(int64)|false|none|The size in bytes of all training examples.|
|eval_examples|number(int64)|false|none|Number of evaluation examples.|
|eval_size_bytes|number(int64)|false|none|The size in bytes of all eval examples.|
|reranker_data_metrics|[RerankerDataMetrics](#schemarerankerdatametrics)|false|none|none|
|chat_data_metrics|[ChatDataMetrics](#schemachatdatametrics)|false|none|none|
|classify_data_metrics|[ClassifyDataMetrics](#schemaclassifydatametrics)|false|none|none|

<h2 id="tocS_Metrics">Metrics</h2>
<!-- backwards compatibility -->
<a id="schemametrics"></a>
<a id="schema_Metrics"></a>
<a id="tocSmetrics"></a>
<a id="tocsmetrics"></a>

```json
{
  "finetune_dataset_metrics": {
    "trainable_token_count": 0,
    "total_examples": 0,
    "train_examples": 0,
    "train_size_bytes": 0,
    "eval_examples": 0,
    "eval_size_bytes": 0,
    "reranker_data_metrics": {
      "num_train_queries": 0,
      "num_train_relevant_passages": 0,
      "num_train_hard_negatives": 0,
      "num_eval_queries": 0,
      "num_eval_relevant_passages": 0,
      "num_eval_hard_negatives": 0
    },
    "chat_data_metrics": {
      "num_train_turns": 0,
      "num_eval_turns": 0,
      "preamble": "string"
    },
    "classify_data_metrics": {
      "label_metrics": [
        {
          "total_examples": 0,
          "label": "string",
          "samples": [
            "string"
          ]
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finetune_dataset_metrics|[FinetuneDatasetMetrics](#schemafinetunedatasetmetrics)|false|none|none|

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "id": "string",
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "dataset_type": "embed-input",
  "validation_status": "unknown",
  "validation_error": "string",
  "schema": "string",
  "required_fields": [
    "string"
  ],
  "preserve_fields": [
    "string"
  ],
  "dataset_parts": [
    {
      "id": "string",
      "name": "string",
      "url": "string",
      "index": 0,
      "size_bytes": 0,
      "num_rows": 0,
      "original_url": "string",
      "samples": [
        "string"
      ]
    }
  ],
  "validation_warnings": [
    "string"
  ],
  "parse_info": {
    "separator": "string",
    "delimiter": "string"
  },
  "metrics": {
    "finetune_dataset_metrics": {
      "trainable_token_count": 0,
      "total_examples": 0,
      "train_examples": 0,
      "train_size_bytes": 0,
      "eval_examples": 0,
      "eval_size_bytes": 0,
      "reranker_data_metrics": {
        "num_train_queries": 0,
        "num_train_relevant_passages": 0,
        "num_train_hard_negatives": 0,
        "num_eval_queries": 0,
        "num_eval_relevant_passages": 0,
        "num_eval_hard_negatives": 0
      },
      "chat_data_metrics": {
        "num_train_turns": 0,
        "num_eval_turns": 0,
        "preamble": "string"
      },
      "classify_data_metrics": {
        "label_metrics": [
          {
            "total_examples": 0,
            "label": "string",
            "samples": [
              "string"
            ]
          }
        ]
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The dataset ID|
|name|string|true|none|The name of the dataset|
|created_at|string(date-time)|true|none|The creation date|
|updated_at|string(date-time)|true|none|The last update date|
|dataset_type|[DatasetType](#schemadatasettype)|true|none|The type of the dataset|
|validation_status|[DatasetValidationStatus](#schemadatasetvalidationstatus)|true|none|The validation status of the dataset|
|validation_error|string|false|none|Errors found during validation|
|schema|string|false|none|the avro schema of the dataset|
|required_fields|[string]|false|none|none|
|preserve_fields|[string]|false|none|none|
|dataset_parts|[[DatasetPart](#schemadatasetpart)]|false|none|the underlying files that make up the dataset|
|validation_warnings|[string]|false|none|warnings found during validation|
|parse_info|[ParseInfo](#schemaparseinfo)|false|write-only|none|
|metrics|[Metrics](#schemametrics)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|dataset_type|embed-input|
|dataset_type|embed-result|
|dataset_type|cluster-result|
|dataset_type|cluster-outliers|
|dataset_type|reranker-finetune-input|
|dataset_type|single-label-classification-finetune-input|
|dataset_type|chat-finetune-input|
|dataset_type|multi-label-classification-finetune-input|
|dataset_type|batch-chat-input|
|dataset_type|batch-openai-chat-input|
|dataset_type|batch-embed-v2-input|
|dataset_type|batch-chat-v2-input|
|validation_status|unknown|
|validation_status|queued|
|validation_status|processing|
|validation_status|failed|
|validation_status|validated|
|validation_status|skipped|

<h2 id="tocS_ConnectorOAuth">ConnectorOAuth</h2>
<!-- backwards compatibility -->
<a id="schemaconnectoroauth"></a>
<a id="schema_ConnectorOAuth"></a>
<a id="tocSconnectoroauth"></a>
<a id="tocsconnectoroauth"></a>

```json
{
  "client_id": "string",
  "client_secret": "string",
  "authorize_url": "string",
  "token_url": "string",
  "scope": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|The OAuth 2.0 client ID. This field is encrypted at rest.|
|client_secret|string|false|none|The OAuth 2.0 client Secret. This field is encrypted at rest and never returned in a response.|
|authorize_url|string|true|none|The OAuth 2.0 /authorize endpoint to use when users authorize the connector.|
|token_url|string|true|none|The OAuth 2.0 /token endpoint to use when users authorize the connector.|
|scope|string|false|none|The OAuth scopes to request when users authorize the connector.|

<h2 id="tocS_Connector">Connector</h2>
<!-- backwards compatibility -->
<a id="schemaconnector"></a>
<a id="schema_Connector"></a>
<a id="tocSconnector"></a>
<a id="tocsconnector"></a>

```json
{
  "id": "string",
  "organization_id": "string",
  "name": "string",
  "description": "string",
  "url": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "excludes": [
    "string"
  ],
  "auth_type": "string",
  "oauth": {
    "client_id": "string",
    "client_secret": "string",
    "authorize_url": "string",
    "token_url": "string",
    "scope": "string"
  },
  "auth_status": "valid",
  "active": true,
  "continue_on_failure": true
}
```

A connector allows you to integrate data sources with the '/chat' endpoint to create grounded generations with citations to the data source.
documents to help answer users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the connector (used in both `/connectors` & `/chat` endpoints).<br>This is automatically created from the name of the connector upon registration.|
|organization_id|string|false|none|The organization to which this connector belongs. This is automatically set to<br>the organization of the user who created the connector.|
|name|string|true|none|A human-readable name for the connector.|
|description|string|false|none|A description of the connector.|
|url|string|false|none|The URL of the connector that will be used to search for documents.|
|created_at|string(date-time)|true|none|The UTC time at which the connector was created.|
|updated_at|string(date-time)|true|none|The UTC time at which the connector was last updated.|
|excludes|[string]|false|none|A list of fields to exclude from the prompt (fields remain in the document).|
|auth_type|string(enum)|false|none|The type of authentication/authorization used by the connector. Possible values: [oauth, service_auth]|
|oauth|[ConnectorOAuth](#schemaconnectoroauth)|false|none|The OAuth 2.0 configuration for the connector.|
|auth_status|string|false|none|The OAuth status for the user making the request. One of ["valid", "expired", ""]. Empty string (field is omitted) means the user has not authorized the connector yet.|
|active|boolean|false|none|Whether the connector is active or not.|
|continue_on_failure|boolean|false|none|Whether a chat request should continue or not if the request to this connector fails.|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_status|valid|
|auth_status|expired|

<h2 id="tocS_ListConnectorsResponse">ListConnectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectorsresponse"></a>
<a id="schema_ListConnectorsResponse"></a>
<a id="tocSlistconnectorsresponse"></a>
<a id="tocslistconnectorsresponse"></a>

```json
{
  "connectors": [
    {
      "id": "string",
      "organization_id": "string",
      "name": "string",
      "description": "string",
      "url": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "excludes": [
        "string"
      ],
      "auth_type": "string",
      "oauth": {
        "client_id": "string",
        "client_secret": "string",
        "authorize_url": "string",
        "token_url": "string",
        "scope": "string"
      },
      "auth_status": "valid",
      "active": true,
      "continue_on_failure": true
    }
  ],
  "total_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectors|[[Connector](#schemaconnector)]|true|none|none|
|total_count|number|false|none|Total number of connectors.|

<h2 id="tocS_CreateConnectorOAuth">CreateConnectorOAuth</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectoroauth"></a>
<a id="schema_CreateConnectorOAuth"></a>
<a id="tocScreateconnectoroauth"></a>
<a id="tocscreateconnectoroauth"></a>

```json
{
  "client_id": "string",
  "client_secret": "string",
  "authorize_url": "string",
  "token_url": "string",
  "scope": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|The OAuth 2.0 client ID. This fields is encrypted at rest.|
|client_secret|string|false|none|The OAuth 2.0 client Secret. This field is encrypted at rest and never returned in a response.|
|authorize_url|string|false|none|The OAuth 2.0 /authorize endpoint to use when users authorize the connector.|
|token_url|string|false|none|The OAuth 2.0 /token endpoint to use when users authorize the connector.|
|scope|string|false|none|The OAuth scopes to request when users authorize the connector.|

<h2 id="tocS_AuthTokenType">AuthTokenType</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokentype"></a>
<a id="schema_AuthTokenType"></a>
<a id="tocSauthtokentype"></a>
<a id="tocsauthtokentype"></a>

```json
"noscheme"
```

The token_type specifies the way the token is passed in the Authorization header. Valid values are "bearer", "basic", and "noscheme".

<h2 id="tocS_CreateConnectorServiceAuth">CreateConnectorServiceAuth</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectorserviceauth"></a>
<a id="schema_CreateConnectorServiceAuth"></a>
<a id="tocScreateconnectorserviceauth"></a>
<a id="tocscreateconnectorserviceauth"></a>

```json
{
  "type": "noscheme",
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[AuthTokenType](#schemaauthtokentype)|true|none|The token_type specifies the way the token is passed in the Authorization header. Valid values are "bearer", "basic", and "noscheme".|
|token|string|true|none|The token that will be used in the HTTP Authorization header when making requests to the connector. This field is encrypted at rest and never returned in a response.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|bearer|
|type|basic|
|type|noscheme|

<h2 id="tocS_CreateConnectorRequest">CreateConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectorrequest"></a>
<a id="schema_CreateConnectorRequest"></a>
<a id="tocScreateconnectorrequest"></a>
<a id="tocscreateconnectorrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "url": "string",
  "excludes": [
    "string"
  ],
  "oauth": {
    "client_id": "string",
    "client_secret": "string",
    "authorize_url": "string",
    "token_url": "string",
    "scope": "string"
  },
  "active": true,
  "continue_on_failure": false,
  "service_auth": {
    "type": "noscheme",
    "token": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A human-readable name for the connector.|
|description|string|false|none|A description of the connector.|
|url|string|true|none|The URL of the connector that will be used to search for documents.|
|excludes|[string]|false|none|A list of fields to exclude from the prompt (fields remain in the document).|
|oauth|[CreateConnectorOAuth](#schemacreateconnectoroauth)|false|none|The OAuth 2.0 configuration for the connector. Cannot be specified if service_auth is specified.|
|active|boolean|false|none|Whether the connector is active or not.|
|continue_on_failure|boolean|false|none|Whether a chat request should continue or not if the request to this connector fails.|
|service_auth|[CreateConnectorServiceAuth](#schemacreateconnectorserviceauth)|false|none|The service to service authentication configuration for the connector. Cannot be specified if oauth is specified.|

<h2 id="tocS_CreateConnectorResponse">CreateConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectorresponse"></a>
<a id="schema_CreateConnectorResponse"></a>
<a id="tocScreateconnectorresponse"></a>
<a id="tocscreateconnectorresponse"></a>

```json
{
  "connector": {
    "id": "string",
    "organization_id": "string",
    "name": "string",
    "description": "string",
    "url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "excludes": [
      "string"
    ],
    "auth_type": "string",
    "oauth": {
      "client_id": "string",
      "client_secret": "string",
      "authorize_url": "string",
      "token_url": "string",
      "scope": "string"
    },
    "auth_status": "valid",
    "active": true,
    "continue_on_failure": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connector|[Connector](#schemaconnector)|true|none|A connector allows you to integrate data sources with the '/chat' endpoint to create grounded generations with citations to the data source.<br>documents to help answer users.|

<h2 id="tocS_GetConnectorResponse">GetConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectorresponse"></a>
<a id="schema_GetConnectorResponse"></a>
<a id="tocSgetconnectorresponse"></a>
<a id="tocsgetconnectorresponse"></a>

```json
{
  "connector": {
    "id": "string",
    "organization_id": "string",
    "name": "string",
    "description": "string",
    "url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "excludes": [
      "string"
    ],
    "auth_type": "string",
    "oauth": {
      "client_id": "string",
      "client_secret": "string",
      "authorize_url": "string",
      "token_url": "string",
      "scope": "string"
    },
    "auth_status": "valid",
    "active": true,
    "continue_on_failure": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connector|[Connector](#schemaconnector)|true|none|A connector allows you to integrate data sources with the '/chat' endpoint to create grounded generations with citations to the data source.<br>documents to help answer users.|

<h2 id="tocS_DeleteConnectorResponse">DeleteConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectorresponse"></a>
<a id="schema_DeleteConnectorResponse"></a>
<a id="tocSdeleteconnectorresponse"></a>
<a id="tocsdeleteconnectorresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateConnectorRequest">UpdateConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectorrequest"></a>
<a id="schema_UpdateConnectorRequest"></a>
<a id="tocSupdateconnectorrequest"></a>
<a id="tocsupdateconnectorrequest"></a>

```json
{
  "name": "string",
  "url": "string",
  "excludes": [
    "string"
  ],
  "oauth": {
    "client_id": "string",
    "client_secret": "string",
    "authorize_url": "string",
    "token_url": "string",
    "scope": "string"
  },
  "active": true,
  "continue_on_failure": false,
  "service_auth": {
    "type": "noscheme",
    "token": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A human-readable name for the connector.|
|url|string|false|none|The URL of the connector that will be used to search for documents.|
|excludes|[string]|false|none|A list of fields to exclude from the prompt (fields remain in the document).|
|oauth|[CreateConnectorOAuth](#schemacreateconnectoroauth)|false|none|The OAuth 2.0 configuration for the connector. Cannot be specified if service_auth is specified.|
|active|boolean|false|none|none|
|continue_on_failure|boolean|false|none|none|
|service_auth|[CreateConnectorServiceAuth](#schemacreateconnectorserviceauth)|false|none|The service to service authentication configuration for the connector. Cannot be specified if oauth is specified.|

<h2 id="tocS_UpdateConnectorResponse">UpdateConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectorresponse"></a>
<a id="schema_UpdateConnectorResponse"></a>
<a id="tocSupdateconnectorresponse"></a>
<a id="tocsupdateconnectorresponse"></a>

```json
{
  "connector": {
    "id": "string",
    "organization_id": "string",
    "name": "string",
    "description": "string",
    "url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "excludes": [
      "string"
    ],
    "auth_type": "string",
    "oauth": {
      "client_id": "string",
      "client_secret": "string",
      "authorize_url": "string",
      "token_url": "string",
      "scope": "string"
    },
    "auth_status": "valid",
    "active": true,
    "continue_on_failure": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connector|[Connector](#schemaconnector)|true|none|A connector allows you to integrate data sources with the '/chat' endpoint to create grounded generations with citations to the data source.<br>documents to help answer users.|

<h2 id="tocS_OAuthAuthorizeResponse">OAuthAuthorizeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoauthauthorizeresponse"></a>
<a id="schema_OAuthAuthorizeResponse"></a>
<a id="tocSoauthauthorizeresponse"></a>
<a id="tocsoauthauthorizeresponse"></a>

```json
{
  "redirect_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redirect_url|string|false|none|The OAuth 2.0 redirect url. Redirect the user to this url to authorize the connector.|

<h2 id="tocS_ConnectorLog">ConnectorLog</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorlog"></a>
<a id="schema_ConnectorLog"></a>
<a id="tocSconnectorlog"></a>
<a id="tocsconnectorlog"></a>

```json
{
  "id": "string",
  "connector_id": "string",
  "request_id": "string",
  "user_id": "string",
  "organization_id": "string",
  "created_at": "2023-04-28T21:00:56.646257Z",
  "status_code": 0,
  "duration_millis": 0,
  "error_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the connector log|
|connector_id|string|true|none|Unique identifier for the connector|
|request_id|string|true|none|Unique identifier for the request|
|user_id|string|true|none|Unique identifier for the user|
|organization_id|string|true|none|Unique identifier for the organization|
|created_at|string(date-time)|true|none|Time of connector log creation in RFC3339 format|
|status_code|integer|true|none|HTTP status code of the request|
|duration_millis|integer|true|none|Duration of the request in milliseconds|
|error_message|string|false|none|Error message of the request|

<h2 id="tocS_GetConnectorsLogsResponse">GetConnectorsLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconnectorslogsresponse"></a>
<a id="schema_GetConnectorsLogsResponse"></a>
<a id="tocSgetconnectorslogsresponse"></a>
<a id="tocsgetconnectorslogsresponse"></a>

```json
{
  "connector_logs": [
    {
      "id": "string",
      "connector_id": "string",
      "request_id": "string",
      "user_id": "string",
      "organization_id": "string",
      "created_at": "2023-04-28T21:00:56.646257Z",
      "status_code": 0,
      "duration_millis": 0,
      "error_message": "string"
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connector_logs|[[ConnectorLog](#schemaconnectorlog)]|true|none|none|
|total|number|true|none|Total number of connector logs|

<h2 id="tocS_FeedbackResponse">FeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackresponse"></a>
<a id="schema_FeedbackResponse"></a>
<a id="tocSfeedbackresponse"></a>
<a id="tocsfeedbackresponse"></a>

```json
{}
```

<h2 id="tocS_TokenLikelihood">TokenLikelihood</h2>
<!-- backwards compatibility -->
<a id="schematokenlikelihood"></a>
<a id="schema_TokenLikelihood"></a>
<a id="tocStokenlikelihood"></a>
<a id="tocstokenlikelihood"></a>

```json
{
  "encoded": 0,
  "decoded": "string",
  "log_likelihood": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoded|integer|false|none|Tokenized text|
|decoded|string|false|none|Detokenized text|
|log_likelihood|number|false|none|Non normalized probability of the token|

<h2 id="tocS_LogLikelihoodResponse">LogLikelihoodResponse</h2>
<!-- backwards compatibility -->
<a id="schemaloglikelihoodresponse"></a>
<a id="schema_LogLikelihoodResponse"></a>
<a id="tocSloglikelihoodresponse"></a>
<a id="tocsloglikelihoodresponse"></a>

```json
{
  "id": "string",
  "prompt_tokens": [
    {
      "encoded": 0,
      "decoded": "string",
      "log_likelihood": 0
    }
  ],
  "completion_tokens": [
    {
      "encoded": 0,
      "decoded": "string",
      "log_likelihood": 0
    }
  ],
  "raw_prompt_tokens": [
    {
      "encoded": 0,
      "decoded": "string",
      "log_likelihood": 0
    }
  ],
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|prompt_tokens|[[TokenLikelihood](#schematokenlikelihood)]|true|none|Probabilities for tokens in the request prompt|
|completion_tokens|[[TokenLikelihood](#schematokenlikelihood)]|true|none|Probabilities for tokens in the request completion|
|raw_prompt_tokens|[[TokenLikelihood](#schematokenlikelihood)]|true|none|Probabilities for tokens in the request raw_prompt|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

<h2 id="tocS_Cluster">Cluster</h2>
<!-- backwards compatibility -->
<a id="schemacluster"></a>
<a id="schema_Cluster"></a>
<a id="tocScluster"></a>
<a id="tocscluster"></a>

```json
{
  "id": "string",
  "keywords": [
    "string"
  ],
  "description": "string",
  "size": 0,
  "sample_elements": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|keywords|[string]|false|none|none|
|description|string|false|none|none|
|size|integer|false|none|none|
|sample_elements|[string]|false|none|none|

<h2 id="tocS_GetClusterJobResponse">GetClusterJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetclusterjobresponse"></a>
<a id="schema_GetClusterJobResponse"></a>
<a id="tocSgetclusterjobresponse"></a>
<a id="tocsgetclusterjobresponse"></a>

```json
{
  "job_id": "string",
  "created_at": "2023-04-28T21:00:56.646257Z",
  "embeddings_url": "string",
  "input_dataset_id": "string",
  "min_cluster_size": 0,
  "n_neighbors": 0,
  "is_deterministic": true,
  "status": "unknown",
  "is_final_state": true,
  "output_clusters_url": "string",
  "output_outliers_url": "string",
  "clusters": [
    {
      "id": "string",
      "keywords": [
        "string"
      ],
      "description": "string",
      "size": 0,
      "sample_elements": [
        "string"
      ]
    }
  ],
  "error": "string",
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

Response for getting a cluster job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|true|none|none|
|created_at|string(date-time)|false|none|Time of job creation in RFC3339 format|
|embeddings_url|string|false|none|The input file URL used for the job|
|input_dataset_id|string|false|none|The input dataset ID used for the job|
|min_cluster_size|integer|false|none|The parameter used in the job creation. Please refer to the job creation endpoint for more details|
|n_neighbors|integer|false|none|The parameter used in the job creation. Please refer to the job creation endpoint for more details|
|is_deterministic|boolean|false|none|The parameter used in the job creation. Please refer to the job creation endpoint for more details|
|status|string|false|none|none|
|is_final_state|boolean|false|none|A boolean indicating whether the job is in a final state, whether completed or failed|
|output_clusters_url|string|false|none|The output file URL for the clusters (signed url that expires)|
|output_outliers_url|string|false|none|The output file URL for the outliers (signed url that expires)|
|clusters|[[Cluster](#schemacluster)]|false|none|The list of cluster summaries for the job|
|error|string|false|none|none|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|unknown|
|status|processing|
|status|failed|
|status|complete|
|status|queued|

<h2 id="tocS_ListClusterJobsResponse">ListClusterJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclusterjobsresponse"></a>
<a id="schema_ListClusterJobsResponse"></a>
<a id="tocSlistclusterjobsresponse"></a>
<a id="tocslistclusterjobsresponse"></a>

```json
{
  "jobs": [
    {
      "job_id": "string",
      "created_at": "2023-04-28T21:00:56.646257Z",
      "embeddings_url": "string",
      "input_dataset_id": "string",
      "min_cluster_size": 0,
      "n_neighbors": 0,
      "is_deterministic": true,
      "status": "unknown",
      "is_final_state": true,
      "output_clusters_url": "string",
      "output_outliers_url": "string",
      "clusters": [
        {
          "id": "string",
          "keywords": [
            "string"
          ],
          "description": "string",
          "size": 0,
          "sample_elements": [
            "string"
          ]
        }
      ],
      "error": "string",
      "meta": {
        "api_version": {
          "version": "string",
          "is_deprecated": true,
          "is_experimental": true
        },
        "billed_units": {
          "images": 0,
          "input_tokens": 0,
          "image_tokens": 0,
          "output_tokens": 0,
          "search_units": 0,
          "classifications": 0,
          "pages": 0
        },
        "tokens": {
          "input_tokens": 0,
          "output_tokens": 0
        },
        "cached_tokens": 0,
        "warnings": [
          "string"
        ]
      }
    }
  ],
  "total_count": 0,
  "meta": {
    "api_version": {
      "version": "string",
      "is_deprecated": true,
      "is_experimental": true
    },
    "billed_units": {
      "images": 0,
      "input_tokens": 0,
      "image_tokens": 0,
      "output_tokens": 0,
      "search_units": 0,
      "classifications": 0,
      "pages": 0
    },
    "tokens": {
      "input_tokens": 0,
      "output_tokens": 0
    },
    "cached_tokens": 0,
    "warnings": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[GetClusterJobResponse](#schemagetclusterjobresponse)]|true|none|none|
|total_count|integer|false|none|none|
|meta|[ApiMeta](#schemaapimeta)|false|none|none|

<h2 id="tocS_CreateClusterJobRequest">CreateClusterJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterjobrequest"></a>
<a id="schema_CreateClusterJobRequest"></a>
<a id="tocScreateclusterjobrequest"></a>
<a id="tocscreateclusterjobrequest"></a>

```json
{
  "embeddings_url": "string",
  "input_dataset_id": "string",
  "min_cluster_size": 10,
  "n_neighbors": 15,
  "is_deterministic": true,
  "generate_descriptions": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embeddings_url|string|true|none|none|
|input_dataset_id|string|false|none|none|
|min_cluster_size|integer|false|none|Defaults to `10`. Parameter for HDBSCAN. Only clusters with this number of elements will be returned with a positive cluster number.|
|n_neighbors|integer|false|none|Parameter for UMAP. A scalar governing how to balance global vs local structure in the data.|
|is_deterministic|boolean|false|none|Parameter for UMAP. A boolean governing whether the embeddings from UMAP (that will be clustered with HDBSCAN) are deterministic.|
|generate_descriptions|boolean|false|none|none|

<h2 id="tocS_CreateClusterJobResponse">CreateClusterJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterjobresponse"></a>
<a id="schema_CreateClusterJobResponse"></a>
<a id="tocScreateclusterjobresponse"></a>
<a id="tocscreateclusterjobresponse"></a>

```json
{
  "job_id": "string"
}
```

Response for creating a cluster job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|true|none|none|

<h2 id="tocS_UpdateClusterJobRequest">UpdateClusterJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterjobrequest"></a>
<a id="schema_UpdateClusterJobRequest"></a>
<a id="tocSupdateclusterjobrequest"></a>
<a id="tocsupdateclusterjobrequest"></a>

```json
{
  "status": "unknown",
  "clusters": [
    {
      "id": "string",
      "keywords": [
        "string"
      ],
      "description": "string",
      "size": 0,
      "sample_elements": [
        "string"
      ]
    }
  ],
  "output_clusters_gs_path": "string",
  "output_outliers_gs_path": "string",
  "error": "string",
  "input_tracking_metrics": {},
  "output_tracking_metrics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|clusters|[[Cluster](#schemacluster)]|false|none|none|
|output_clusters_gs_path|string|false|none|none|
|output_outliers_gs_path|string|false|none|none|
|error|string|false|none|none|
|input_tracking_metrics|object|false|none|none|
|output_tracking_metrics|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|unknown|
|status|processing|
|status|failed|
|status|complete|
|status|queued|

<h2 id="tocS_UpdateClusterJobResponse">UpdateClusterJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterjobresponse"></a>
<a id="schema_UpdateClusterJobResponse"></a>
<a id="tocSupdateclusterjobresponse"></a>
<a id="tocsupdateclusterjobresponse"></a>

```json
{
  "job_id": "string"
}
```

Response for updating a cluster job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|true|none|none|

<h2 id="tocS_CompatibleEndpoint">CompatibleEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemacompatibleendpoint"></a>
<a id="schema_CompatibleEndpoint"></a>
<a id="tocScompatibleendpoint"></a>
<a id="tocscompatibleendpoint"></a>

```json
"chat"
```

One of the Cohere API endpoints that the model can be used with.

<h2 id="tocS_GetModelResponse">GetModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelresponse"></a>
<a id="schema_GetModelResponse"></a>
<a id="tocSgetmodelresponse"></a>
<a id="tocsgetmodelresponse"></a>

```json
{
  "name": "string",
  "is_deprecated": true,
  "endpoints": [
    "chat"
  ],
  "finetuned": true,
  "context_length": 0,
  "tokenizer_url": "string",
  "default_endpoints": [
    "chat"
  ],
  "features": [
    "string"
  ],
  "sampling_defaults": {
    "temperature": 0,
    "k": 0,
    "p": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "max_tokens_per_doc": 0
  }
}
```

Contains information about the model and which API endpoints it can be used with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Specify this name in the `model` parameter of API requests to use your chosen model.|
|is_deprecated|boolean|false|none|Whether the model is deprecated or not.|
|endpoints|[[CompatibleEndpoint](#schemacompatibleendpoint)]|false|none|The API endpoints that the model is compatible with.|
|finetuned|boolean|false|none|Whether the model has been fine-tuned or not.|
|context_length|number|false|none|The maximum number of tokens that the model can process in a single request. Note that not all of these tokens are always available due to special tokens and preambles that Cohere has added by default.|
|tokenizer_url|string|false|none|Public URL to the tokenizer's configuration file.|
|default_endpoints|[[CompatibleEndpoint](#schemacompatibleendpoint)]|false|none|The API endpoints that the model is default to.|
|features|[string]|false|none|The features that the model supports.|
|sampling_defaults|object|false|none|Default sampling parameters for this model when omitted from API requests.|

#### Enumerated Values

|Property|Value|
|---|---|
|endpoints|chat|
|endpoints|embed|
|endpoints|classify|
|endpoints|summarize|
|endpoints|rerank|
|endpoints|rate|
|endpoints|generate|
|default_endpoints|chat|
|default_endpoints|embed|
|default_endpoints|classify|
|default_endpoints|summarize|
|default_endpoints|rerank|
|default_endpoints|rate|
|default_endpoints|generate|

<h2 id="tocS_ListModelsResponse">ListModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelsresponse"></a>
<a id="schema_ListModelsResponse"></a>
<a id="tocSlistmodelsresponse"></a>
<a id="tocslistmodelsresponse"></a>

```json
{
  "models": [
    {
      "name": "string",
      "is_deprecated": true,
      "endpoints": [
        "chat"
      ],
      "finetuned": true,
      "context_length": 0,
      "tokenizer_url": "string",
      "default_endpoints": [
        "chat"
      ],
      "features": [
        "string"
      ],
      "sampling_defaults": {
        "temperature": 0,
        "k": 0,
        "p": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "max_tokens_per_doc": 0
      }
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[[GetModelResponse](#schemagetmodelresponse)]|true|none|none|
|next_page_token|string|false|none|A token to retrieve the next page of results. Provide in the page_token parameter of the next request.|

<h2 id="tocS_BaseType">BaseType</h2>
<!-- backwards compatibility -->
<a id="schemabasetype"></a>
<a id="schema_BaseType"></a>
<a id="tocSbasetype"></a>
<a id="tocsbasetype"></a>

```json
"BASE_TYPE_UNSPECIFIED"
```

The possible types of fine-tuned models.

 - BASE_TYPE_UNSPECIFIED: Unspecified model.
 - BASE_TYPE_GENERATIVE: Deprecated: Generative model.
 - BASE_TYPE_CLASSIFICATION: Classification model.
 - BASE_TYPE_RERANK: Rerank model.
 - BASE_TYPE_CHAT: Chat model.

<h2 id="tocS_Strategy">Strategy</h2>
<!-- backwards compatibility -->
<a id="schemastrategy"></a>
<a id="schema_Strategy"></a>
<a id="tocSstrategy"></a>
<a id="tocsstrategy"></a>

```json
"STRATEGY_UNSPECIFIED"
```

The possible strategy used to serve a fine-tuned models.

 - STRATEGY_UNSPECIFIED: Unspecified strategy.
 - STRATEGY_VANILLA: Deprecated: Serve the fine-tuned model on a dedicated GPU.
 - STRATEGY_TFEW: Deprecated: Serve the fine-tuned model on a shared GPU.

<h2 id="tocS_BaseModel">BaseModel</h2>
<!-- backwards compatibility -->
<a id="schemabasemodel"></a>
<a id="schema_BaseModel"></a>
<a id="tocSbasemodel"></a>
<a id="tocsbasemodel"></a>

```json
{
  "name": "string",
  "version": "string",
  "base_type": "BASE_TYPE_UNSPECIFIED",
  "strategy": "STRATEGY_UNSPECIFIED"
}
```

The base model used for fine-tuning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the base model.|
|version|string|false|read-only|read-only. The version of the base model.|
|base_type|[BaseType](#schemabasetype)|true|none|**Deprecated.** The type of the base model.|
|strategy|[Strategy](#schemastrategy)|false|none|**Deprecated.** Deprecated: The fine-tuning strategy.|

#### Enumerated Values

|Property|Value|
|---|---|
|base_type|BASE_TYPE_UNSPECIFIED|
|base_type|BASE_TYPE_GENERATIVE|
|base_type|BASE_TYPE_CLASSIFICATION|
|base_type|BASE_TYPE_RERANK|
|base_type|BASE_TYPE_CHAT|
|strategy|STRATEGY_UNSPECIFIED|
|strategy|STRATEGY_VANILLA|
|strategy|STRATEGY_TFEW|

<h2 id="tocS_LoraTargetModules">LoraTargetModules</h2>
<!-- backwards compatibility -->
<a id="schemaloratargetmodules"></a>
<a id="schema_LoraTargetModules"></a>
<a id="tocSloratargetmodules"></a>
<a id="tocsloratargetmodules"></a>

```json
"LORA_TARGET_MODULES_UNSPECIFIED"
```

The possible combinations of LoRA modules to target.

 - LORA_TARGET_MODULES_UNSPECIFIED: Unspecified LoRA target modules.
 - LORA_TARGET_MODULES_QV: LoRA adapts the query and value matrices in transformer attention layers.
 - LORA_TARGET_MODULES_QKVO: LoRA adapts query, key, value, and output matrices in attention layers.
 - LORA_TARGET_MODULES_QKVO_FFN: LoRA adapts attention projection matrices and feed-forward networks (FFN).

<h2 id="tocS_Hyperparameters">Hyperparameters</h2>
<!-- backwards compatibility -->
<a id="schemahyperparameters"></a>
<a id="schema_Hyperparameters"></a>
<a id="tocShyperparameters"></a>
<a id="tocshyperparameters"></a>

```json
{
  "early_stopping_patience": 0,
  "early_stopping_threshold": 0,
  "train_batch_size": 0,
  "train_epochs": 0,
  "learning_rate": 0,
  "lora_alpha": 0,
  "lora_rank": 0,
  "lora_target_modules": "LORA_TARGET_MODULES_UNSPECIFIED"
}
```

The fine-tuning hyperparameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|early_stopping_patience|integer(int32)|false|none|Stops training if the loss metric does not improve beyond the value of<br>`early_stopping_threshold` after this many times of evaluation.|
|early_stopping_threshold|number(double)|false|none|How much the loss must improve to prevent early stopping.|
|train_batch_size|integer(int32)|false|none|The batch size is the number of training examples included in a single<br>training pass.|
|train_epochs|integer(int32)|false|none|The number of epochs to train for.|
|learning_rate|number(double)|false|none|The learning rate to be used during training.|
|lora_alpha|integer(int32)|false|none|Controls the scaling factor for LoRA updates. Higher values make the<br>updates more impactful.|
|lora_rank|integer(int32)|false|none|Specifies the rank for low-rank matrices. Lower ranks reduce parameters<br>but may limit model flexibility.|
|lora_target_modules|[LoraTargetModules](#schemaloratargetmodules)|false|none|**Deprecated.** The combination of LoRA modules to target.|

#### Enumerated Values

|Property|Value|
|---|---|
|lora_target_modules|LORA_TARGET_MODULES_UNSPECIFIED|
|lora_target_modules|LORA_TARGET_MODULES_QV|
|lora_target_modules|LORA_TARGET_MODULES_QKVO|
|lora_target_modules|LORA_TARGET_MODULES_QKVO_FFN|

<h2 id="tocS_WandbConfig">WandbConfig</h2>
<!-- backwards compatibility -->
<a id="schemawandbconfig"></a>
<a id="schema_WandbConfig"></a>
<a id="tocSwandbconfig"></a>
<a id="tocswandbconfig"></a>

```json
{
  "project": "string",
  "api_key": "string",
  "entity": "string"
}
```

The Weights & Biases configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|string|true|none|The WandB project name to be used during training.|
|api_key|string|true|none|The WandB API key to be used during training.|
|entity|string|false|none|The WandB entity name to be used during training.|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "base_model": {
    "name": "string",
    "version": "string",
    "base_type": "BASE_TYPE_UNSPECIFIED",
    "strategy": "STRATEGY_UNSPECIFIED"
  },
  "dataset_id": "string",
  "hyperparameters": {
    "early_stopping_patience": 0,
    "early_stopping_threshold": 0,
    "train_batch_size": 0,
    "train_epochs": 0,
    "learning_rate": 0,
    "lora_alpha": 0,
    "lora_rank": 0,
    "lora_target_modules": "LORA_TARGET_MODULES_UNSPECIFIED"
  },
  "multi_label": true,
  "wandb": {
    "project": "string",
    "api_key": "string",
    "entity": "string"
  }
}
```

The configuration used for fine-tuning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_model|[BaseModel](#schemabasemodel)|true|none|**Deprecated.** The base model to fine-tune.|
|dataset_id|string|true|none|The data used for training and evaluating the fine-tuned model.|
|hyperparameters|[Hyperparameters](#schemahyperparameters)|false|none|**Deprecated.** Fine-tuning hyper-parameters.|
|multi_label|boolean|false|read-only|read-only. Whether the model is single-label or multi-label (only for classification).|
|wandb|[WandbConfig](#schemawandbconfig)|false|none|**Deprecated.** The Weights & Biases configuration (Chat fine-tuning only).|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"STATUS_UNSPECIFIED"
```

The possible stages of a fine-tuned model life-cycle.

 - STATUS_UNSPECIFIED: Unspecified status.
 - STATUS_FINETUNING: The fine-tuned model is being fine-tuned.
 - STATUS_DEPLOYING_API: Deprecated: The fine-tuned model is being deployed.
 - STATUS_READY: The fine-tuned model is ready to receive requests.
 - STATUS_FAILED: The fine-tuned model failed.
 - STATUS_DELETED: The fine-tuned model was deleted.
 - STATUS_TEMPORARILY_OFFLINE: Deprecated: The fine-tuned model is temporarily unavailable.
 - STATUS_PAUSED: Deprecated: The fine-tuned model is paused (Vanilla only).
 - STATUS_QUEUED: The fine-tuned model is queued for training.

<h2 id="tocS_FinetunedModel">FinetunedModel</h2>
<!-- backwards compatibility -->
<a id="schemafinetunedmodel"></a>
<a id="schema_FinetunedModel"></a>
<a id="tocSfinetunedmodel"></a>
<a id="tocsfinetunedmodel"></a>

```json
{
  "id": "string",
  "name": "string",
  "creator_id": "string",
  "organization_id": "string",
  "settings": {
    "base_model": {
      "name": "string",
      "version": "string",
      "base_type": "BASE_TYPE_UNSPECIFIED",
      "strategy": "STRATEGY_UNSPECIFIED"
    },
    "dataset_id": "string",
    "hyperparameters": {
      "early_stopping_patience": 0,
      "early_stopping_threshold": 0,
      "train_batch_size": 0,
      "train_epochs": 0,
      "learning_rate": 0,
      "lora_alpha": 0,
      "lora_rank": 0,
      "lora_target_modules": "LORA_TARGET_MODULES_UNSPECIFIED"
    },
    "multi_label": true,
    "wandb": {
      "project": "string",
      "api_key": "string",
      "entity": "string"
    }
  },
  "status": "STATUS_UNSPECIFIED",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "last_used": "1970-01-01T00:00:00Z"
}
```

This resource represents a fine-tuned model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|read-only. FinetunedModel ID.|
|name|string|true|none|FinetunedModel name (e.g. `foobar`).|
|creator_id|string|false|read-only|read-only. User ID of the creator.|
|organization_id|string|false|read-only|read-only. Organization ID.|
|settings|[Settings](#schemasettings)|true|none|**Deprecated.** FinetunedModel settings such as dataset, hyperparameters...|
|status|[Status](#schemastatus)|false|none|**Deprecated.** read-only. Current stage in the life-cycle of the fine-tuned model.|
|created_at|string(date-time)|false|read-only|read-only. Creation timestamp.|
|updated_at|string(date-time)|false|read-only|read-only. Latest update timestamp.|
|completed_at|string(date-time)|false|read-only|read-only. Timestamp for the completed fine-tuning.|
|last_used|string(date-time)|false|read-only|read-only. Deprecated: Timestamp for the latest request to this fine-tuned model.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|STATUS_FINETUNING|
|status|STATUS_DEPLOYING_API|
|status|STATUS_READY|
|status|STATUS_FAILED|
|status|STATUS_DELETED|
|status|STATUS_TEMPORARILY_OFFLINE|
|status|STATUS_PAUSED|
|status|STATUS_QUEUED|

<h2 id="tocS_ListFinetunedModelsResponse">ListFinetunedModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfinetunedmodelsresponse"></a>
<a id="schema_ListFinetunedModelsResponse"></a>
<a id="tocSlistfinetunedmodelsresponse"></a>
<a id="tocslistfinetunedmodelsresponse"></a>

```json
{
  "finetuned_models": [
    {
      "id": "string",
      "name": "string",
      "creator_id": "string",
      "organization_id": "string",
      "settings": {
        "base_model": {
          "name": "string",
          "version": "string",
          "base_type": "BASE_TYPE_UNSPECIFIED",
          "strategy": "STRATEGY_UNSPECIFIED"
        },
        "dataset_id": "string",
        "hyperparameters": {
          "early_stopping_patience": 0,
          "early_stopping_threshold": 0,
          "train_batch_size": 0,
          "train_epochs": 0,
          "learning_rate": 0,
          "lora_alpha": 0,
          "lora_rank": 0,
          "lora_target_modules": "LORA_TARGET_MODULES_UNSPECIFIED"
        },
        "multi_label": true,
        "wandb": {
          "project": "string",
          "api_key": "string",
          "entity": "string"
        }
      },
      "status": "STATUS_UNSPECIFIED",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "last_used": "1970-01-01T00:00:00Z"
    }
  ],
  "next_page_token": "string",
  "total_size": 0
}
```

Response to a request to list fine-tuned models.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finetuned_models|[[FinetunedModel](#schemafinetunedmodel)]|false|none|List of fine-tuned models matching the request.|
|next_page_token|string|false|none|Pagination token to retrieve the next page of results. If the value is "",<br>it means no further results for the request.|
|total_size|integer(int32)|false|none|Total count of results.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "string"
}
```

Error is the response for any unsuccessful event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|A developer-facing error message.|

<h2 id="tocS_CreateFinetunedModelResponse">CreateFinetunedModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefinetunedmodelresponse"></a>
<a id="schema_CreateFinetunedModelResponse"></a>
<a id="tocScreatefinetunedmodelresponse"></a>
<a id="tocscreatefinetunedmodelresponse"></a>

```json
{
  "finetuned_model": {
    "id": "string",
    "name": "string",
    "creator_id": "string",
    "organization_id": "string",
    "settings": {
      "base_model": {
        "name": "string",
        "version": "string",
        "base_type": "BASE_TYPE_UNSPECIFIED",
        "strategy": "STRATEGY_UNSPECIFIED"
      },
      "dataset_id": "string",
      "hyperparameters": {
        "early_stopping_patience": 0,
        "early_stopping_threshold": 0,
        "train_batch_size": 0,
        "train_epochs": 0,
        "learning_rate": 0,
        "lora_alpha": 0,
        "lora_rank": 0,
        "lora_target_modules": "LORA_TARGET_MODULES_UNSPECIFIED"
      },
      "multi_label": true,
      "wandb": {
        "project": "string",
        "api_key": "string",
        "entity": "string"
      }
    },
    "status": "STATUS_UNSPECIFIED",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "completed_at": "1970-01-01T00:00:00Z",
    "last_used": "1970-01-01T00:00:00Z"
  }
}
```

Response to request to create a fine-tuned model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finetuned_model|[FinetunedModel](#schemafinetunedmodel)|false|none|**Deprecated.** Information about the fine-tuned model.|

<h2 id="tocS_GetFinetunedModelResponse">GetFinetunedModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfinetunedmodelresponse"></a>
<a id="schema_GetFinetunedModelResponse"></a>
<a id="tocSgetfinetunedmodelresponse"></a>
<a id="tocsgetfinetunedmodelresponse"></a>

```json
{
  "finetuned_model": {
    "id": "string",
    "name": "string",
    "creator_id": "string",
    "organization_id": "string",
    "settings": {
      "base_model": {
        "name": "string",
        "version": "string",
        "base_type": "BASE_TYPE_UNSPECIFIED",
        "strategy": "STRATEGY_UNSPECIFIED"
      },
      "dataset_id": "string",
      "hyperparameters": {
        "early_stopping_patience": 0,
        "early_stopping_threshold": 0,
        "train_batch_size": 0,
        "train_epochs": 0,
        "learning_rate": 0,
        "lora_alpha": 0,
        "lora_rank": 0,
        "lora_target_modules": "LORA_TARGET_MODULES_UNSPECIFIED"
      },
      "multi_label": true,
      "wandb": {
        "project": "string",
        "api_key": "string",
        "entity": "string"
      }
    },
    "status": "STATUS_UNSPECIFIED",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "completed_at": "1970-01-01T00:00:00Z",
    "last_used": "1970-01-01T00:00:00Z"
  }
}
```

Response to a request to get a fine-tuned model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finetuned_model|[FinetunedModel](#schemafinetunedmodel)|false|none|**Deprecated.** Information about the fine-tuned model.|

<h2 id="tocS_DeleteFinetunedModelResponse">DeleteFinetunedModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefinetunedmodelresponse"></a>
<a id="schema_DeleteFinetunedModelResponse"></a>
<a id="tocSdeletefinetunedmodelresponse"></a>
<a id="tocsdeletefinetunedmodelresponse"></a>

```json
{}
```

Response to request to delete a fine-tuned model.

<h2 id="tocS_UpdateFinetunedModelResponse">UpdateFinetunedModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefinetunedmodelresponse"></a>
<a id="schema_UpdateFinetunedModelResponse"></a>
<a id="tocSupdatefinetunedmodelresponse"></a>
<a id="tocsupdatefinetunedmodelresponse"></a>

```json
{
  "finetuned_model": {
    "id": "string",
    "name": "string",
    "creator_id": "string",
    "organization_id": "string",
    "settings": {
      "base_model": {
        "name": "string",
        "version": "string",
        "base_type": "BASE_TYPE_UNSPECIFIED",
        "strategy": "STRATEGY_UNSPECIFIED"
      },
      "dataset_id": "string",
      "hyperparameters": {
        "early_stopping_patience": 0,
        "early_stopping_threshold": 0,
        "train_batch_size": 0,
        "train_epochs": 0,
        "learning_rate": 0,
        "lora_alpha": 0,
        "lora_rank": 0,
        "lora_target_modules": "LORA_TARGET_MODULES_UNSPECIFIED"
      },
      "multi_label": true,
      "wandb": {
        "project": "string",
        "api_key": "string",
        "entity": "string"
      }
    },
    "status": "STATUS_UNSPECIFIED",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "completed_at": "1970-01-01T00:00:00Z",
    "last_used": "1970-01-01T00:00:00Z"
  }
}
```

Response to a request to update a fine-tuned model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finetuned_model|[FinetunedModel](#schemafinetunedmodel)|false|none|**Deprecated.** Information about the fine-tuned model.|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "user_id": "string",
  "status": "STATUS_UNSPECIFIED",
  "created_at": "1970-01-01T00:00:00Z"
}
```

A change in status of a fine-tuned model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|false|none|ID of the user who initiated the event. Empty if initiated by the system.|
|status|[Status](#schemastatus)|false|none|**Deprecated.** Status of the fine-tuned model.|
|created_at|string(date-time)|false|none|Timestamp when the event happened.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|STATUS_FINETUNING|
|status|STATUS_DEPLOYING_API|
|status|STATUS_READY|
|status|STATUS_FAILED|
|status|STATUS_DELETED|
|status|STATUS_TEMPORARILY_OFFLINE|
|status|STATUS_PAUSED|
|status|STATUS_QUEUED|

<h2 id="tocS_ListEventsResponse">ListEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsresponse"></a>
<a id="schema_ListEventsResponse"></a>
<a id="tocSlisteventsresponse"></a>
<a id="tocslisteventsresponse"></a>

```json
{
  "events": [
    {
      "user_id": "string",
      "status": "STATUS_UNSPECIFIED",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_page_token": "string",
  "total_size": 0
}
```

Response to a request to list events of a fine-tuned model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[Event](#schemaevent)]|false|none|List of events for the fine-tuned model.|
|next_page_token|string|false|none|Pagination token to retrieve the next page of results. If the value is "",<br>it means no further results for the request.|
|total_size|integer(int32)|false|none|Total count of results.|

<h2 id="tocS_TrainingStepMetrics">TrainingStepMetrics</h2>
<!-- backwards compatibility -->
<a id="schematrainingstepmetrics"></a>
<a id="schema_TrainingStepMetrics"></a>
<a id="tocStrainingstepmetrics"></a>
<a id="tocstrainingstepmetrics"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "step_number": 0,
  "metrics": {
    "property1": 0,
    "property2": 0
  }
}
```

The evaluation metrics at a given step of the training of a fine-tuned model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|Creation timestamp.|
|step_number|integer(int32)|false|none|Step number.|
|metrics|object|false|none|Map of names and values for each evaluation metrics.|

<h2 id="tocS_ListTrainingStepMetricsResponse">ListTrainingStepMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttrainingstepmetricsresponse"></a>
<a id="schema_ListTrainingStepMetricsResponse"></a>
<a id="tocSlisttrainingstepmetricsresponse"></a>
<a id="tocslisttrainingstepmetricsresponse"></a>

```json
{
  "step_metrics": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "step_number": 0,
      "metrics": {
        "property1": 0,
        "property2": 0
      }
    }
  ],
  "next_page_token": "string"
}
```

Response to a request to list training-step metrics of a fine-tuned model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|step_metrics|[[TrainingStepMetrics](#schematrainingstepmetrics)]|false|none|The metrics for each step the evaluation was run on.|
|next_page_token|string|false|none|Pagination token to retrieve the next page of results. If the value is "",<br>it means no further results for the request.|
