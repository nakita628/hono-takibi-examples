<h1 id="einstein-vision-and-einstein-language">Einstein Vision and Einstein Language v2.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provided by [Salesforce](https://www.einstein-hub.com/)  � Copyright 2000�2020 salesforce.com, inc. All rights reserved. Salesforce is a registered trademark of salesforce.com, inc., as are other names and marks. Other marks appearing herein may be trademarks of their respective owners. **Last updated:** Aug 17, 2020

Base URLs:

* <a href="http://salesforce.local">http://salesforce.local</a>

<a href="https://metamind.readme.io">For more information, see the Einstein Platform Services Developer Guide</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="einstein-vision-and-einstein-language-check-api-usage">Check API Usage</h1>

Resources that let you get API usage information.

## Get API Isage

<a id="opIdgetApiUsagePlansV2"></a>

> Code samples

```bash
curl https://example.com/v2/apiusage \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/apiusage`

Returns prediction usage on a monthly basis for the current calendar month and future months. Each apiusage object in the response corresponds to a calendar month in your plan.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "endsAt": "1970-01-01T00:00:00Z",
      "id": "489",
      "licenseId": "kJCHtYDCSf",
      "object": "apiusage",
      "organizationId": "108",
      "planData": [
        {
          "amount": 1,
          "plan": "STARTER",
          "source": "SALESFORCE"
        }
      ],
      "predictionsMax": 1997,
      "predictionsUsed": 3,
      "startsAt": "1970-01-01T00:00:00Z"
    }
  ],
  "object": "list"
}
```

<h3 id="get-api-isage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|api usage|[ApiUsageList](#schemaapiusagelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

<h1 id="einstein-vision-and-einstein-language-authorization">Authorization</h1>

Resources that manage authorization tokens.

## Generate an OAuth Token

<a id="opIdgenerateTokenV2"></a>

> Code samples

```bash
curl https://example.com/v2/oauth2/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'assertion=SOME_ASSERTION_STRING&grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&refresh_token=SomeRefreshToken&scope=offline&valid_for=120'
```

`POST /v2/oauth2/token`

Returns an OAuth access token or a refresh token. You must pass a valid access token in the header of each API call.

<a href="https://metamind.readme.io/docs/generate-an-oauth-access-token">authentication guid</a>

> Body parameter

```yaml
assertion: SOME_ASSERTION_STRING
grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer"
refresh_token: SomeRefreshToken
scope: offline
valid_for: 120
```

<h3 id="generate-an-oauth-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» assertion|body|string|false|encrypted payload to identify yourself|
|» grant_type|body|string|false|specify the authentication method desired|
|» refresh_token|body|string|false|The refresh token you created previously.|
|» scope|body|string|false|set to `offline` to generate a refresh token|
|» valid_for|body|integer(int32)|false|Number of seconds until the access token expires. Default is 60 seconds. Maximum value is 30 days|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» grant_type|urn:ietf:params:oauth:grant-type:jwt-bearer|
|» grant_type|refresh_token|

> Example responses

> 200 Response

```json
{
  "access_token": "SPFPQ5IBLB6DPE6FKPWHMIWW4MCRICX4M4KQXFQMI6THZXIEZ6QGNWNOERD6S7655LJAFWTRIKC4KGYO5G3XROMEOTBSS53CFSB6GIA",
  "expires_in": "120",
  "refresh_token": "FL4GSVQS4W5CKSFRVZBLPIVZZJ2K4VIFPLGZ45SJGUQK4SS56IWPWACZ7V2B7OVLVKZCNK5JZSSW7CIHCNQJAO3TOUE3375108HHTLY",
  "token_type": "Bearer"
}
```

<h3 id="generate-an-oauth-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|access token result|[GenerateAccessTokenResponse](#schemagenerateaccesstokenresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Refresh Token

<a id="opIdrevokeRefreshTokenV2"></a>

> Code samples

```bash
curl https://example.com/v2/oauth2/tokens/SOME_REFRESH_TOKEN \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/oauth2/tokens/{token}`

<h3 id="delete-a-refresh-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|the token to revoke|

<h3 id="delete-a-refresh-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|deleted, with no content returned|None|
|400|Bad Request|token cannot be removed|None|
|404|Not Found|token not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

<h1 id="einstein-vision-and-einstein-language-vision-datasets">Vision Datasets</h1>

Resources that manage image datasets.

## Get All Datasets

<a id="opIdlistDatasets_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/datasets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/vision/datasets`

Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.

<h3 id="get-all-datasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|Index of the dataset from which you want to start paging|
|count|query|string|false|Number of datsets to return. Maximum valid value is 25. If you specify a number greater than 25, the call returns 25 datasets.|
|global|query|boolean|false|If true, returns all global datasets. Global datasets are public datasets that Salesforce provides.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "available": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "id": 1000014,
      "labelSummary": {
        "labels": [
          {
            "datasetId": 57,
            "id": 621,
            "name": "Mountain",
            "numExamples": 40
          }
        ]
      },
      "language": "N/A",
      "name": "weather report",
      "numOfDuplicates": 0,
      "object": "dataset",
      "statusMsg": "SUCCEEDED",
      "totalExamples": 20,
      "totalLabels": 2,
      "type": "string",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "object": "list"
}
```

<h3 id="get-all-datasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DatasetList](#schemadatasetlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Create a Dataset

<a id="opIdcreateDataset"></a>

> Code samples

```bash
curl https://example.com/v2/vision/datasets \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'labels=beach,mountain' \
  -F 'name=Beach and Mountain' \
  -F 'type=image'
```

`POST /v2/vision/datasets`

Creates a dataset and labels, if they're specified.

> Body parameter

```yaml
labels: "beach,mountain"
name: Beach and Mountain
type: image
```

<h3 id="create-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» labels|body|string|false|Optional comma-separated list of labels. If specified, creates the labels in the dataset. Maximum number of labels per dataset is 250.|
|» name|body|string|false|Name of the dataset. Maximum length is 180 characters.|
|» type|body|string|false|Type of dataset data|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|image|
|» type|image-multi-label|

> Example responses

> 200 Response

```json
{
  "available": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 1000014,
  "labelSummary": {
    "labels": [
      {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      }
    ]
  },
  "language": "N/A",
  "name": "weather report",
  "numOfDuplicates": 0,
  "object": "dataset",
  "statusMsg": "SUCCEEDED",
  "totalExamples": 20,
  "totalLabels": 2,
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Creation success|[Dataset](#schemadataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Create a Dataset From a Zip File Asynchronously

<a id="opIduploadDatasetAsync_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/datasets/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'data=string' \
  -F 'name=mountainvsbeach' \
  -F 'path=string' \
  -F 'type=image'
```

`POST /v2/vision/datasets/upload`

Creates a dataset, labels, and examples from the specified .zip file. The call returns immediately and continues to upload the images in the background.

> Body parameter

```yaml
data: string
name: mountainvsbeach
path: string
type: image
```

<h3 id="create-a-dataset-from-a-zip-file-asynchronously-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» data|body|string|false|Path to the .zip file on the local drive (FilePart).|
|» name|body|string|false|Name of the dataset. Optional. If this parameter is omitted, the dataset name is derived from the .zip file name.|
|» path|body|string|false|URL of the .zip file.|
|» type|body|string|false|Type of dataset data.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|image|
|» type|image-detection|
|» type|image-multi-label|

> Example responses

> 200 Response

```json
{
  "available": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 1000014,
  "labelSummary": {
    "labels": [
      {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      }
    ]
  },
  "language": "N/A",
  "name": "weather report",
  "numOfDuplicates": 0,
  "object": "dataset",
  "statusMsg": "SUCCEEDED",
  "totalExamples": 20,
  "totalLabels": 2,
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-dataset-from-a-zip-file-asynchronously-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload initiated|[Dataset](#schemadataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Create a Dataset From a Zip File Synchronously

<a id="opIduploadDatasetSync_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/datasets/upload/sync \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'data=string' \
  -F 'name=mountainvsbeach' \
  -F 'path=string' \
  -F 'type=image'
```

`POST /v2/vision/datasets/upload/sync`

Creates a dataset, labels, and examples from the specified .zip file. The call returns after the dataset is created and all of the images are uploaded.

> Body parameter

```yaml
data: string
name: mountainvsbeach
path: string
type: image
```

<h3 id="create-a-dataset-from-a-zip-file-synchronously-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» data|body|string|false|Path to the .zip file on the local drive (FilePart).|
|» name|body|string|false|Name of the dataset. Optional. If this parameter is omitted, the dataset name is derived from the .zip file name.|
|» path|body|string|false|URL of the .zip file.|
|» type|body|string|false|Type of dataset data.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|image|
|» type|image-detection|
|» type|image-multi-label|

> Example responses

> 200 Response

```json
{
  "available": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 1000014,
  "labelSummary": {
    "labels": [
      {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      }
    ]
  },
  "language": "N/A",
  "name": "weather report",
  "numOfDuplicates": 0,
  "object": "dataset",
  "statusMsg": "SUCCEEDED",
  "totalExamples": 20,
  "totalLabels": 2,
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-dataset-from-a-zip-file-synchronously-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload success|[Dataset](#schemadataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Get a Dataset

<a id="opIdgetDataset_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/datasets/SomeDatasetId \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/vision/datasets/{datasetId}`

Returns a single dataset.

<h3 id="get-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|Dataset Id|

> Example responses

> 200 Response

```json
{
  "available": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 1000014,
  "labelSummary": {
    "labels": [
      {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      }
    ]
  },
  "language": "N/A",
  "name": "weather report",
  "numOfDuplicates": 0,
  "object": "dataset",
  "statusMsg": "SUCCEEDED",
  "totalExamples": 20,
  "totalLabels": 2,
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Dataset](#schemadataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Delete a Dataset

<a id="opIddeleteDataset_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/datasets/SomeDatasetId \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/vision/datasets/{datasetId}`

Deletes the specified dataset and associated labels and examples.

<h3 id="delete-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|Dataset Id|

> Example responses

> 201 Response

```json
{
  "deletedObjectId": "1003360",
  "id": "Z2JTFBF3A7XKIJC5QEJXMO4HSY",
  "message": "string",
  "object": "deletion",
  "organizationId": "2",
  "progress": 1,
  "status": "QUEUED",
  "type": "DATASET"
}
```

<h3 id="delete-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[DeletionResponse](#schemadeletionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Get Deletion Status

<a id="opIdget_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/deletion/Z2JTFBF3A7XKIJC5QEJXMO4HSY \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/vision/deletion/{id}`

Returns the status of an image dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.

<h3 id="get-deletion-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Deletion Id|

> Example responses

> 200 Response

```json
{
  "deletedObjectId": "1003360",
  "id": "Z2JTFBF3A7XKIJC5QEJXMO4HSY",
  "message": "string",
  "object": "deletion",
  "organizationId": "2",
  "progress": 1,
  "status": "QUEUED",
  "type": "DATASET"
}
```

<h3 id="get-deletion-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deletion status|[DeletionResponse](#schemadeletionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

<h1 id="einstein-vision-and-einstein-language-vision-examples">Vision Examples</h1>

Resources that manage image examples.

## Create Feedback Examples From a Zip File

<a id="opIdupdateDatasetAsync_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/bulkfeedback \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'data=string' \
  -F 'modelId=string'
```

`PUT /v2/vision/bulkfeedback`

Adds feedback examples to the dataset associated with the specified object detection model.

> Body parameter

```yaml
data: string
modelId: string
```

<h3 id="create-feedback-examples-from-a-zip-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» data|body|string|false|Local .zip file to upload. The maximum .zip file size you can upload from a local drive is 50 MB.|
|» modelId|body|string|false|ID of the model that misclassified the images. The feedback examples are added to the dataset associated with this model.|

> Example responses

> 200 Response

```json
{
  "available": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 1000014,
  "labelSummary": {
    "labels": [
      {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      }
    ]
  },
  "language": "N/A",
  "name": "weather report",
  "numOfDuplicates": 0,
  "object": "dataset",
  "statusMsg": "SUCCEEDED",
  "totalExamples": 20,
  "totalLabels": 2,
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-feedback-examples-from-a-zip-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Update success|[Dataset](#schemadataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Get All Examples

<a id="opIdgetExamples_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/datasets/SomeDatasetId/examples \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/vision/datasets/{datasetId}/examples`

Returns all the examples for the specified dataset. By default, returns examples created by uploading them from a .zip file.

<h3 id="get-all-examples-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|Dataset Id|
|offset|query|string|false|Index of the example from which you want to start paging.|
|count|query|string|false|Number of examples to return.|
|source|query|string|false|return examples that were created in the dataset as feedback|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source|all|
|source|feedback|
|source|upload|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "id": 546,
      "label": {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      },
      "location": "https://K3A04Q79O5TBySIZSeMIj%2BC3zqi7rOmeK...",
      "name": "659803277.jpg",
      "object": "example"
    }
  ],
  "object": "list"
}
```

<h3 id="get-all-examples-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExampleList](#schemaexamplelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Create an Example

<a id="opIdaddExample"></a>

> Code samples

```bash
curl https://example.com/v2/vision/datasets/SomeDatasetId/examples \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'data=string' \
  -F 'labelId=42' \
  -F 'name=string'
```

`POST /v2/vision/datasets/{datasetId}/examples`

Adds an example with the specified label to a dataset.

> Body parameter

```yaml
data: string
labelId: 42
name: string
```

<h3 id="create-an-example-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|Dataset Id|
|body|body|object|false|none|
|» data|body|string|false|Location of the local image file to upload.|
|» labelId|body|integer(int64)|false|ID of the label to add to the example.|
|» name|body|string|false|Name of the example. Maximum length is 180 characters.|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 546,
  "label": {
    "datasetId": 57,
    "id": 621,
    "name": "Mountain",
    "numExamples": 40
  },
  "location": "https://K3A04Q79O5TBySIZSeMIj%2BC3zqi7rOmeK...",
  "name": "659803277.jpg",
  "object": "example"
}
```

<h3 id="create-an-example-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Example created|[Example](#schemaexample)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Create Examples From a Zip File

<a id="opIdupdateDatasetAsync_2"></a>

> Code samples

```bash
curl https://example.com/v2/vision/datasets/SomeDatasetId/upload \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'data=string' \
  -F 'path=string'
```

`PUT /v2/vision/datasets/{datasetId}/upload`

Adds examples from a .zip file to a dataset. You can use this call only with a dataset that was created from a .zip file.

> Body parameter

```yaml
data: string
path: string
```

<h3 id="create-examples-from-a-zip-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|Dataset Id|
|body|body|object|false|none|
|» data|body|string|false|Location of the local image file to upload.|
|» path|body|string|false|URL of the .zip file.|

> Example responses

> 200 Response

```json
{
  "available": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 1000014,
  "labelSummary": {
    "labels": [
      {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      }
    ]
  },
  "language": "N/A",
  "name": "weather report",
  "numOfDuplicates": 0,
  "object": "dataset",
  "statusMsg": "SUCCEEDED",
  "totalExamples": 20,
  "totalLabels": 2,
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-examples-from-a-zip-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload success|[Dataset](#schemadataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Get All Examples for Label

<a id="opIdgetExamplesByLabel_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/examples \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/vision/examples`

Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.

<h3 id="get-all-examples-for-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|labelId|query|string|false|Label Id|
|offset|query|string|false|Index of the example from which you want to start paging.|
|count|query|string|false|Number of examples to return.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "id": 546,
      "label": {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      },
      "location": "https://K3A04Q79O5TBySIZSeMIj%2BC3zqi7rOmeK...",
      "name": "659803277.jpg",
      "object": "example"
    }
  ],
  "object": "list"
}
```

<h3 id="get-all-examples-for-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExampleList](#schemaexamplelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Create a Feedback Example

<a id="opIdprovideFeedback_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/feedback \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'data=string' \
  -F 'expectedLabel=string' \
  -F 'modelId=string' \
  -F 'name=feedback-1'
```

`POST /v2/vision/feedback`

Adds a feedback example to the dataset associated with the specified model.

> Body parameter

```yaml
data: string
expectedLabel: string
modelId: string
name: feedback-1
```

<h3 id="create-a-feedback-example-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» data|body|string|false|Local image file to upload.|
|» expectedLabel|body|string|false|Correct label for the example. Must be a label that exists in the dataset.|
|» modelId|body|string|false|ID of the model that misclassified the image. The feedback example is added to the dataset associated with this model.|
|» name|body|string|false|Name of the example. Optional. Maximum length is 180 characters.|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 546,
  "label": {
    "datasetId": 57,
    "id": 621,
    "name": "Mountain",
    "numExamples": 40
  },
  "location": "https://K3A04Q79O5TBySIZSeMIj%2BC3zqi7rOmeK...",
  "name": "659803277.jpg",
  "object": "example"
}
```

<h3 id="create-a-feedback-example-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload success|[Example](#schemaexample)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

<h1 id="einstein-vision-and-einstein-language-vision-training">Vision Training</h1>

Resources that handle image dataset training.

## Retrain a Dataset

<a id="opIdretrain_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/retrain \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'algorithm=object-detection' \
  -F 'epochs=20' \
  -F 'learningRate=0.0001' \
  -F 'modelId=7JXCXTRXTMNLJCEF2DR5CJ46QU' \
  -F 'trainParams={"trainSplitRatio":0.9,"withFeedback":true,"withGlobalDatasetId":0}'
```

`POST /v2/vision/retrain`

Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.

> Body parameter

```yaml
algorithm: object-detection
epochs: 20
learningRate: 0.0001
modelId: "7JXCXTRXTMNLJCEF2DR5CJ46QU"
trainParams:
  trainSplitRatio: 0.9
  withFeedback: true
  withGlobalDatasetId: 0
```

<h3 id="retrain-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» algorithm|body|string|false|Specifies the algorithm used to train the dataset. Optional. Use this parameter only when training a dataset with a type of image-detection. Valid values are object-detection-v1 and retail-execution.|
|» epochs|body|integer(int32)|false|Number of training iterations for the neural network. Optional.|
|» learningRate|body|number(float)|false|Specifies how much the gradient affects the optimization of the model at each time step. Optional.|
|» modelId|body|string|false|ID of the model to be updated from the training.|
|» trainParams|body|[V2VisionTrainParams](#schemav2visiontrainparams)|false|JSON that contains parameters that specify how the model is created|

> Example responses

> 200 Response

```json
{
  "algorithm": "object-detection",
  "createdAt": "1970-01-01T00:00:00Z",
  "datasetId": 57,
  "datasetVersionId": 0,
  "epochs": 20,
  "failureMsg": "To train a dataset and create a model, the dataset must contain at least 100 examples per label for test set",
  "language": "en_US",
  "learningRate": 0.0001,
  "modelId": "2KXJEOM3N562JBT4P7OX7VID2Q",
  "modelType": "string",
  "name": "My Model - Version1",
  "object": "training",
  "progress": 0.7,
  "queuePosition": 1,
  "status": "QUEUED",
  "trainParams": "{\"trainSplitRatio\":0.7}",
  "trainStats": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="retrain-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Training Status|[TrainResponse](#schematrainresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Train a Dataset

<a id="opIdtrain_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/train \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'algorithm=object-detection' \
  -F 'datasetId=57' \
  -F 'epochs=20' \
  -F 'learningRate=0.0001' \
  -F 'name=string' \
  -F 'trainParams={"trainSplitRatio":0.9,"withFeedback":true,"withGlobalDatasetId":0}'
```

`POST /v2/vision/train`

Trains a dataset and creates a model.

> Body parameter

```yaml
algorithm: object-detection
datasetId: 57
epochs: 20
learningRate: 0.0001
name: string
trainParams:
  trainSplitRatio: 0.9
  withFeedback: true
  withGlobalDatasetId: 0
```

<h3 id="train-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» algorithm|body|string|false|Specifies the algorithm used to train the dataset. Optional. Use this parameter only when training a dataset with a type of image-detection. Valid values are object-detection-v1 and retail-execution.|
|» datasetId|body|integer(int64)|false|ID of the dataset to train.|
|» epochs|body|integer(int32)|false|Number of training iterations for the neural network. Optional.|
|» learningRate|body|number(double)|false|Specifies how much the gradient affects the optimization of the model at each time step. Optional.|
|» name|body|string|false|Name of the model. Maximum length is 180 characters.|
|» trainParams|body|[V2VisionTrainParams](#schemav2visiontrainparams)|false|JSON that contains parameters that specify how the model is created|

> Example responses

> 200 Response

```json
{
  "algorithm": "object-detection",
  "createdAt": "1970-01-01T00:00:00Z",
  "datasetId": 57,
  "datasetVersionId": 0,
  "epochs": 20,
  "failureMsg": "To train a dataset and create a model, the dataset must contain at least 100 examples per label for test set",
  "language": "en_US",
  "learningRate": 0.0001,
  "modelId": "2KXJEOM3N562JBT4P7OX7VID2Q",
  "modelType": "string",
  "name": "My Model - Version1",
  "object": "training",
  "progress": 0.7,
  "queuePosition": 1,
  "status": "QUEUED",
  "trainParams": "{\"trainSplitRatio\":0.7}",
  "trainStats": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="train-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Training Status|[TrainResponse](#schematrainresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Get Training Status

<a id="opIdgetTrainStatusAndProgress_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/train/SomeModelId \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/vision/train/{modelId}`

Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.

<h3 id="get-training-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "algorithm": "object-detection",
  "createdAt": "1970-01-01T00:00:00Z",
  "datasetId": 57,
  "datasetVersionId": 0,
  "epochs": 20,
  "failureMsg": "To train a dataset and create a model, the dataset must contain at least 100 examples per label for test set",
  "language": "en_US",
  "learningRate": 0.0001,
  "modelId": "2KXJEOM3N562JBT4P7OX7VID2Q",
  "modelType": "string",
  "name": "My Model - Version1",
  "object": "training",
  "progress": 0.7,
  "queuePosition": 1,
  "status": "QUEUED",
  "trainParams": "{\"trainSplitRatio\":0.7}",
  "trainStats": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-training-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Training Status|[TrainResponse](#schematrainresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

<h1 id="einstein-vision-and-einstein-language-vision-models">Vision Models</h1>

Resources that manage image models and model metrics.

## Get All Models

<a id="opIdgetTrainedModels_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/datasets/SomeDatasetId/models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/vision/datasets/{datasetId}/models`

Returns all models for the specified dataset.

<h3 id="get-all-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|Index of the model from which you want to start paging.|
|count|query|string|false|Number of models to return.|
|datasetId|path|string|true|Dataset Id|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "algorithm": "object-detection",
      "createdAt": "1970-01-01T00:00:00Z",
      "datasetId": 57,
      "datasetVersionId": 0,
      "failureMsg": "To train a dataset and create a model, the dataset must contain at least 100 examples per label for test set",
      "language": "en_US",
      "modelId": "2KXJEOM3N562JBT4P7OX7VID2Q",
      "modelType": "string",
      "name": "My Model - Version1",
      "object": "model",
      "progress": 0,
      "status": "QUEUED",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "object": "list"
}
```

<h3 id="get-all-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModelList](#schemamodellist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Get Model Metrics

<a id="opIdgetTrainedModelMetrics_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/models/SomeModelId \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/vision/models/{modelId}`

Returns the metrics for a model

<h3 id="get-model-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "algorithm": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "language": "string",
  "metricsData": {},
  "object": "string"
}
```

<h3 id="get-model-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Model Metrics|[Metrics](#schemametrics)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Delete a Model

<a id="opIddeleteModel_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/models/SomeModelId \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/vision/models/{modelId}`

Deletes the specified model.

<h3 id="delete-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|none|

> Example responses

> 201 Response

```json
{
  "deletedObjectId": "1003360",
  "id": "Z2JTFBF3A7XKIJC5QEJXMO4HSY",
  "message": "string",
  "object": "deletion",
  "organizationId": "2",
  "progress": 1,
  "status": "QUEUED",
  "type": "DATASET"
}
```

<h3 id="delete-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Deletion submitted|[DeletionResponse](#schemadeletionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Get Model Learning Curve

<a id="opIdgetTrainedModelLearningCurve_1"></a>

> Code samples

```bash
curl https://example.com/v2/vision/models/SomeModelId/lc \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/vision/models/{modelId}/lc`

Returns the metrics for each epoch in a model.

<h3 id="get-model-learning-curve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|none|
|offset|query|string|false|Index of the epoch from which you want to start paging|
|count|query|string|false|Number of epoch to return. Maximum valid value is 25.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "epoch": 1,
      "epochResults": {},
      "metricsData": {},
      "object": "learningcurve"
    }
  ],
  "object": "list"
}
```

<h3 id="get-model-learning-curve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Learning Curve|[LearningCurveList](#schemalearningcurvelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

<h1 id="einstein-vision-and-einstein-language-vision-prediction">Vision Prediction</h1>

Resources that return predictions for image input.

## Detection with Image File

<a id="opIddetectMultipart"></a>

> Code samples

```bash
curl https://example.com/v2/vision/detect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "modelId": "YCQ4ZACEPJFGXZNRA6ERF3GL5E",
    "sampleBase64Content": "SomeBase64EncodedImage",
    "sampleId": "string",
    "sampleLocation": "string"
  }'
```

`POST /v2/vision/detect`

Returns labels, probabilities, and bounding box coordinates for items detected in the specified local image file.

> Body parameter

```json
{
  "modelId": "YCQ4ZACEPJFGXZNRA6ERF3GL5E",
  "sampleBase64Content": "SomeBase64EncodedImage",
  "sampleId": "string",
  "sampleLocation": "string"
}
```

<h3 id="detection-with-image-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ObjectDetectionRequest](#schemaobjectdetectionrequest)|false|none|
|» modelId|body|string|true|ID of the model that makes the detection.|
|» sampleBase64Content|body|string|false|The image contained in a base64 string.|
|» sampleId|body|string|false|String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.|
|» sampleLocation|body|string|false|URL of the image file.|

> Example responses

> 200 Response

```json
{
  "object": "predictresponse",
  "probabilities": [
    {
      "boundingBox": {
        "maxX": 0,
        "maxY": 0,
        "minX": 0,
        "minY": 0
      },
      "label": "string",
      "probability": 0
    }
  ],
  "sampleId": "Sample1"
}
```

<h3 id="detection-with-image-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Detection Result|[ObjectDetectionResponse](#schemaobjectdetectionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Detect Text

<a id="opIdocrMultipart"></a>

> Code samples

```bash
curl https://example.com/v2/vision/ocr \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'modelId=WJH4YCA7YX4PCWVNCYNWYHBMY4' \
  -F 'sampleContent=@/path/to/file' \
  -F 'sampleId=string' \
  -F 'sampleLocation=string' \
  -F 'task=table'
```

`POST /v2/vision/ocr`

Returns a prediction from an OCR model for the specified image URL or local image file.

> Body parameter

```yaml
modelId: WJH4YCA7YX4PCWVNCYNWYHBMY4
sampleContent: string
sampleId: string
sampleLocation: string
task: table
```

<h3 id="detect-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» modelId|body|string|false|ID of the model that makes the prediction. Valid values are OCRModel and tabulatev2.|
|» sampleContent|body|string(binary)|false|Binary content of image file uploaded as multipart/form-data. Optional.|
|» sampleId|body|string|false|String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.|
|» sampleLocation|body|string|false|URL of the image file. Use this parameter when sending in a file from a web location. Optional.|
|» task|body|string|false|Optional. Designates the type of data in the image. Default is text. Valid values: contact, table, and text.|

> Example responses

> 200 Response

```json
{
  "object": "predictresponse",
  "probabilities": [
    {
      "attributes": {
        "cellLocation": {
          "colIndex": 0,
          "rowIndex": 0
        },
        "language": "string",
        "pageNumber": "string",
        "tag": "string",
        "value": {
          "boundingBox": {
            "maxX": 0,
            "maxY": 0,
            "minX": 0,
            "minY": 0
          },
          "entity": "string",
          "text": "string"
        }
      },
      "boundingBox": {
        "maxX": 0,
        "maxY": 0,
        "minX": 0,
        "minY": 0
      },
      "label": "string",
      "probability": 0
    }
  ],
  "sampleId": "Sample1",
  "task": "Task1"
}
```

<h3 id="detect-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OCR Result|[OCRPredictResponse](#schemaocrpredictresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Make Prediction

<a id="opIdpredictMultipart"></a>

> Code samples

```bash
curl https://example.com/v2/vision/predict \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "modelId": "WJH4YCA7YX4PCWVNCYNWYHBMY4",
    "numResults": 3,
    "sampleBase64Content": "SomeBase64EncodedImage",
    "sampleId": "string",
    "sampleLocation": "string"
  }'
```

`POST /v2/vision/predict`

Returns a prediction from an image or multi-label model for the specified image.

> Body parameter

```json
{
  "modelId": "WJH4YCA7YX4PCWVNCYNWYHBMY4",
  "numResults": 3,
  "sampleBase64Content": "SomeBase64EncodedImage",
  "sampleId": "string",
  "sampleLocation": "string"
}
```

<h3 id="make-prediction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImageClassificationRequest](#schemaimageclassificationrequest)|false|none|
|» modelId|body|string|true|ID of the model that makes the prediction.|
|» numResults|body|integer(int32)|false|Number of probabilities to return.|
|» sampleBase64Content|body|string|false|The image contained in a base64 string.|
|» sampleId|body|string|false|String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.|
|» sampleLocation|body|string|false|URL of the image file.|

> Example responses

> 200 Response

```json
{
  "object": "predictresponse",
  "probabilities": [
    {
      "label": "string",
      "probability": 0
    }
  ],
  "sampleId": "Sample1"
}
```

<h3 id="make-prediction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Prediction Result|[ImageClassificationResponse](#schemaimageclassificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

<h1 id="einstein-vision-and-einstein-language-language-datasets">Language Datasets</h1>

Resources that manage text datasets.

## Get All Datasets

<a id="opIdlistDatasets"></a>

> Code samples

```bash
curl https://example.com/v2/language/datasets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/language/datasets`

Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.

<h3 id="get-all-datasets-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|Index of the dataset from which you want to start paging|
|count|query|string|false|Number of datsets to return. Maximum valid value is 25. If you specify a number greater than 25, the call returns 25 datasets.|
|global|query|boolean|false|If true, returns all global datasets. Global datasets are public datasets that Salesforce provides.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "available": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "id": 1000014,
      "labelSummary": {
        "labels": [
          {
            "datasetId": 57,
            "id": 621,
            "name": "Mountain",
            "numExamples": 40
          }
        ]
      },
      "language": "N/A",
      "name": "weather report",
      "numOfDuplicates": 0,
      "object": "dataset",
      "statusMsg": "SUCCEEDED",
      "totalExamples": 20,
      "totalLabels": 2,
      "type": "string",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "object": "list"
}
```

<h3 id="get-all-datasets-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DatasetList](#schemadatasetlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Create a Dataset From a File Asynchronously

<a id="opIduploadDatasetAsync"></a>

> Code samples

```bash
curl https://example.com/v2/language/datasets/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'data=string' \
  -F 'name=weather' \
  -F 'path=string' \
  -F 'type=text-intent'
```

`POST /v2/language/datasets/upload`

Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns immediately and continues to upload data in the background.

> Body parameter

```yaml
data: string
name: weather
path: string
type: text-intent
```

<h3 id="create-a-dataset-from-a-file-asynchronously-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» data|body|string|false|Path to the .csv, .tsv, or .json file on the local drive (FilePart).|
|» name|body|string|false|Name of the dataset. Optional. If this parameter is omitted, the dataset name is derived from the file name.|
|» path|body|string|false|URL of the .csv, .tsv, or .json file.|
|» type|body|string|false|Type of dataset data.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|text-intent|
|» type|text-sentiment|

> Example responses

> 200 Response

```json
{
  "available": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 1000014,
  "labelSummary": {
    "labels": [
      {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      }
    ]
  },
  "language": "N/A",
  "name": "weather report",
  "numOfDuplicates": 0,
  "object": "dataset",
  "statusMsg": "SUCCEEDED",
  "totalExamples": 20,
  "totalLabels": 2,
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-dataset-from-a-file-asynchronously-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload initiated|[Dataset](#schemadataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Create a Dataset From a File Synchronously

<a id="opIduploadDatasetSync"></a>

> Code samples

```bash
curl https://example.com/v2/language/datasets/upload/sync \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'data=string' \
  -F 'name=weather' \
  -F 'path=string' \
  -F 'type=text-intent'
```

`POST /v2/language/datasets/upload/sync`

Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns after the dataset is created and all of the data is uploaded.

> Body parameter

```yaml
data: string
name: weather
path: string
type: text-intent
```

<h3 id="create-a-dataset-from-a-file-synchronously-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» data|body|string|false|Path to the .csv, .tsv, or .json file on the local drive (FilePart).|
|» name|body|string|false|Name of the dataset. Optional. If this parameter is omitted, the dataset name is derived from the file name.|
|» path|body|string|false|URL of the .csv, .tsv, or .json file.|
|» type|body|string|false|Type of dataset data.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|text-intent|
|» type|text-sentiment|

> Example responses

> 200 Response

```json
{
  "available": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 1000014,
  "labelSummary": {
    "labels": [
      {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      }
    ]
  },
  "language": "N/A",
  "name": "weather report",
  "numOfDuplicates": 0,
  "object": "dataset",
  "statusMsg": "SUCCEEDED",
  "totalExamples": 20,
  "totalLabels": 2,
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-dataset-from-a-file-synchronously-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload success|[Dataset](#schemadataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Get a Dataset

<a id="opIdgetDataset"></a>

> Code samples

```bash
curl https://example.com/v2/language/datasets/SomeDatasetId \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/language/datasets/{datasetId}`

Returns a single dataset.

<h3 id="get-a-dataset-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|Dataset Id|

> Example responses

> 200 Response

```json
{
  "available": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 1000014,
  "labelSummary": {
    "labels": [
      {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      }
    ]
  },
  "language": "N/A",
  "name": "weather report",
  "numOfDuplicates": 0,
  "object": "dataset",
  "statusMsg": "SUCCEEDED",
  "totalExamples": 20,
  "totalLabels": 2,
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-a-dataset-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Dataset](#schemadataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Delete a Dataset

<a id="opIddeleteDataset"></a>

> Code samples

```bash
curl https://example.com/v2/language/datasets/SomeDatasetId \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/language/datasets/{datasetId}`

Deletes the specified dataset and associated labels and examples.

<h3 id="delete-a-dataset-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|Dataset Id|

> Example responses

> 200 Response

```json
{
  "deletedObjectId": "1003360",
  "id": "Z2JTFBF3A7XKIJC5QEJXMO4HSY",
  "message": "string",
  "object": "deletion",
  "organizationId": "2",
  "progress": 1,
  "status": "QUEUED",
  "type": "DATASET"
}
```

<h3 id="delete-a-dataset-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletionResponse](#schemadeletionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Get Deletion Status

<a id="opIdget"></a>

> Code samples

```bash
curl https://example.com/v2/language/deletion/Z2JTFBF3A7XKIJC5QEJXMO4HSY \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/language/deletion/{id}`

Returns the status of a language dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.

<h3 id="get-deletion-status-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Deletion Id|

> Example responses

> 200 Response

```json
{
  "deletedObjectId": "1003360",
  "id": "Z2JTFBF3A7XKIJC5QEJXMO4HSY",
  "message": "string",
  "object": "deletion",
  "organizationId": "2",
  "progress": 1,
  "status": "QUEUED",
  "type": "DATASET"
}
```

<h3 id="get-deletion-status-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deletion status|[DeletionResponse](#schemadeletionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

<h1 id="einstein-vision-and-einstein-language-language-examples">Language Examples</h1>

Resources that manage text examples.

## Get All Examples

<a id="opIdgetExamples"></a>

> Code samples

```bash
curl https://example.com/v2/language/datasets/SomeDatasetId/examples \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/language/datasets/{datasetId}/examples`

Returns all the examples for the specified dataset,

<h3 id="get-all-examples-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|Dataset Id|
|offset|query|string|false|Index of the example from which you want to start paging.|
|count|query|string|false|Number of examples to return.|
|source|query|string|false|return examples that were created in the dataset as feedback|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source|all|
|source|feedback|
|source|upload|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "id": 546,
      "label": {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      },
      "location": "https://K3A04Q79O5TBySIZSeMIj%2BC3zqi7rOmeK...",
      "name": "659803277.jpg",
      "object": "example"
    }
  ],
  "object": "list"
}
```

<h3 id="get-all-examples-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExampleList](#schemaexamplelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Create Examples From a File

<a id="opIdupdateDatasetAsync"></a>

> Code samples

```bash
curl https://example.com/v2/language/datasets/SomeDatasetId/upload \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'data=string' \
  -F 'type=string'
```

`PUT /v2/language/datasets/{datasetId}/upload`

Adds examples from a .csv, .tsv, or .json file to a dataset.

> Body parameter

```yaml
data: string
type: string
```

<h3 id="create-examples-from-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetId|path|string|true|Dataset Id|
|body|body|object|false|none|
|» data|body|string|false|Path to the .csv, .tsv, or .json file on a local drive. |
|» type|body|string|false|URL of the .csv, .tsv, or .json file.|

> Example responses

> 200 Response

```json
{
  "available": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 1000014,
  "labelSummary": {
    "labels": [
      {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      }
    ]
  },
  "language": "N/A",
  "name": "weather report",
  "numOfDuplicates": 0,
  "object": "dataset",
  "statusMsg": "SUCCEEDED",
  "totalExamples": 20,
  "totalLabels": 2,
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-examples-from-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload success|[Dataset](#schemadataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Get All Examples for Label

<a id="opIdgetExamplesByLabel"></a>

> Code samples

```bash
curl https://example.com/v2/language/examples \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/language/examples`

Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.

<h3 id="get-all-examples-for-label-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|labelId|query|string|false|Label Id|
|offset|query|string|false|Index of the example from which you want to start paging.|
|count|query|string|false|Number of examples to return.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "id": 546,
      "label": {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      },
      "location": "https://K3A04Q79O5TBySIZSeMIj%2BC3zqi7rOmeK...",
      "name": "659803277.jpg",
      "object": "example"
    }
  ],
  "object": "list"
}
```

<h3 id="get-all-examples-for-label-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExampleList](#schemaexamplelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Create a Feedback Example

<a id="opIdprovideFeedback"></a>

> Code samples

```bash
curl https://example.com/v2/language/feedback \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'document=string' \
  -F 'expectedLabel=string' \
  -F 'modelId=string' \
  -F 'name=feedback-2'
```

`POST /v2/language/feedback`

Adds a feedback example to the dataset associated with the specified model.

> Body parameter

```yaml
document: string
expectedLabel: string
modelId: string
name: feedback-2
```

<h3 id="create-a-feedback-example-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» document|body|string|false|Intent or sentiment string to add to the dataset.|
|» expectedLabel|body|string|false|Correct label for the example. Must be a label that exists in the dataset.|
|» modelId|body|string|false|ID of the model that misclassified the image. The feedback example is added to the dataset associated with this model.|
|» name|body|string|false|Name of the example. Optional. Maximum length is 180 characters.|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 546,
  "label": {
    "datasetId": 57,
    "id": 621,
    "name": "Mountain",
    "numExamples": 40
  },
  "location": "https://K3A04Q79O5TBySIZSeMIj%2BC3zqi7rOmeK...",
  "name": "659803277.jpg",
  "object": "example"
}
```

<h3 id="create-a-feedback-example-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload success|[Example](#schemaexample)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

<h1 id="einstein-vision-and-einstein-language-language-training">Language Training</h1>

Resources that handle text dataset training.

## Retrain a Dataset

<a id="opIdretrain"></a>

> Code samples

```bash
curl https://example.com/v2/language/retrain \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'algorithm=intent' \
  -F 'epochs=20' \
  -F 'learningRate=0.0001' \
  -F 'modelId=7JXCXTRXTMNLJCEF2DR5CJ46QU' \
  -F 'trainParams={"trainSplitRatio":0.9,"withFeedback":true,"withGlobalDatasetId":0}'
```

`POST /v2/language/retrain`

Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.

> Body parameter

```yaml
algorithm: intent
epochs: 20
learningRate: 0.0001
modelId: "7JXCXTRXTMNLJCEF2DR5CJ46QU"
trainParams:
  trainSplitRatio: 0.9
  withFeedback: true
  withGlobalDatasetId: 0
```

<h3 id="retrain-a-dataset-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» algorithm|body|string|false|Algorithm used for train|
|» epochs|body|integer(int32)|false|Number of training iterations for the neural network. Optional.|
|» learningRate|body|number(float)|false|N/A for intent or sentiment models.|
|» modelId|body|string|false|ID of the model to be updated from the training.|
|» trainParams|body|[V2LanguageTrainParams](#schemav2languagetrainparams)|false|JSON that contains parameters that specify how the model is created|

> Example responses

> 200 Response

```json
{
  "algorithm": "object-detection",
  "createdAt": "1970-01-01T00:00:00Z",
  "datasetId": 57,
  "datasetVersionId": 0,
  "epochs": 20,
  "failureMsg": "To train a dataset and create a model, the dataset must contain at least 100 examples per label for test set",
  "language": "en_US",
  "learningRate": 0.0001,
  "modelId": "2KXJEOM3N562JBT4P7OX7VID2Q",
  "modelType": "string",
  "name": "My Model - Version1",
  "object": "training",
  "progress": 0.7,
  "queuePosition": 1,
  "status": "QUEUED",
  "trainParams": "{\"trainSplitRatio\":0.7}",
  "trainStats": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="retrain-a-dataset-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Training Status|[TrainResponse](#schematrainresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Train a Dataset

<a id="opIdtrain"></a>

> Code samples

```bash
curl https://example.com/v2/language/train \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'algorithm=intent' \
  -F 'datasetId=57' \
  -F 'epochs=20' \
  -F 'learningRate=0' \
  -F 'name=string' \
  -F 'trainParams={"trainSplitRatio":0.9,"withFeedback":true,"withGlobalDatasetId":0}'
```

`POST /v2/language/train`

Trains a dataset and creates a model.

> Body parameter

```yaml
algorithm: intent
datasetId: 57
epochs: 20
learningRate: 0
name: string
trainParams:
  trainSplitRatio: 0.9
  withFeedback: true
  withGlobalDatasetId: 0
```

<h3 id="train-a-dataset-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» algorithm|body|string|false|Algorithm used for train|
|» datasetId|body|integer(int64)|false|ID of the dataset to train.|
|» epochs|body|integer(int32)|false|Number of training iterations for the neural network. Optional.|
|» learningRate|body|number(double)|false|N/A for intent or sentiment models.|
|» name|body|string|false|Name of the model. Maximum length is 180 characters.|
|» trainParams|body|[V2LanguageTrainParams](#schemav2languagetrainparams)|false|JSON that contains parameters that specify how the model is created|

> Example responses

> 200 Response

```json
{
  "algorithm": "object-detection",
  "createdAt": "1970-01-01T00:00:00Z",
  "datasetId": 57,
  "datasetVersionId": 0,
  "epochs": 20,
  "failureMsg": "To train a dataset and create a model, the dataset must contain at least 100 examples per label for test set",
  "language": "en_US",
  "learningRate": 0.0001,
  "modelId": "2KXJEOM3N562JBT4P7OX7VID2Q",
  "modelType": "string",
  "name": "My Model - Version1",
  "object": "training",
  "progress": 0.7,
  "queuePosition": 1,
  "status": "QUEUED",
  "trainParams": "{\"trainSplitRatio\":0.7}",
  "trainStats": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="train-a-dataset-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Training Status|[TrainResponse](#schematrainresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Get Training Status

<a id="opIdgetTrainStatusAndProgress"></a>

> Code samples

```bash
curl https://example.com/v2/language/train/SomeModelId \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/language/train/{modelId}`

Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.

<h3 id="get-training-status-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|Model Id|

> Example responses

> 200 Response

```json
{
  "algorithm": "object-detection",
  "createdAt": "1970-01-01T00:00:00Z",
  "datasetId": 57,
  "datasetVersionId": 0,
  "epochs": 20,
  "failureMsg": "To train a dataset and create a model, the dataset must contain at least 100 examples per label for test set",
  "language": "en_US",
  "learningRate": 0.0001,
  "modelId": "2KXJEOM3N562JBT4P7OX7VID2Q",
  "modelType": "string",
  "name": "My Model - Version1",
  "object": "training",
  "progress": 0.7,
  "queuePosition": 1,
  "status": "QUEUED",
  "trainParams": "{\"trainSplitRatio\":0.7}",
  "trainStats": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-training-status-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Training Status|[TrainResponse](#schematrainresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

<h1 id="einstein-vision-and-einstein-language-language-models">Language Models</h1>

Resources that manage text models and model metrics.

## Get All Models

<a id="opIdgetTrainedModels"></a>

> Code samples

```bash
curl https://example.com/v2/language/datasets/SomeDatasetId/models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/language/datasets/{datasetId}/models`

Returns all models for the specified dataset.

<h3 id="get-all-models-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|string|false|Index of the model from which you want to start paging.|
|count|query|string|false|Number of models to return.|
|datasetId|path|string|true|Dataset Id|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "algorithm": "object-detection",
      "createdAt": "1970-01-01T00:00:00Z",
      "datasetId": 57,
      "datasetVersionId": 0,
      "failureMsg": "To train a dataset and create a model, the dataset must contain at least 100 examples per label for test set",
      "language": "en_US",
      "modelId": "2KXJEOM3N562JBT4P7OX7VID2Q",
      "modelType": "string",
      "name": "My Model - Version1",
      "object": "model",
      "progress": 0,
      "status": "QUEUED",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "object": "list"
}
```

<h3 id="get-all-models-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModelList](#schemamodellist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Get Model Metrics

<a id="opIdgetTrainedModelMetrics"></a>

> Code samples

```bash
curl https://example.com/v2/language/models/SomeModelId \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/language/models/{modelId}`

Returns the metrics for a model

<h3 id="get-model-metrics-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|Model Id|

> Example responses

> 200 Response

```json
{
  "algorithm": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "language": "string",
  "metricsData": {},
  "object": "string"
}
```

<h3 id="get-model-metrics-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Model Metrics|[Metrics](#schemametrics)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Delete a Model

<a id="opIddeleteModel"></a>

> Code samples

```bash
curl https://example.com/v2/language/models/SomeModelId \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/language/models/{modelId}`

Deletes the specified model.

<h3 id="delete-a-model-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|Model Id|

> Example responses

> 201 Response

```json
{
  "deletedObjectId": "1003360",
  "id": "Z2JTFBF3A7XKIJC5QEJXMO4HSY",
  "message": "string",
  "object": "deletion",
  "organizationId": "2",
  "progress": 1,
  "status": "QUEUED",
  "type": "DATASET"
}
```

<h3 id="delete-a-model-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Deletion submitted|[DeletionResponse](#schemadeletionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Get Model Learning Curve

<a id="opIdgetTrainedModelLearningCurve"></a>

> Code samples

```bash
curl https://example.com/v2/language/models/SomeModelId/lc \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/language/models/{modelId}/lc`

Returns the metrics for each epoch in a model.

<h3 id="get-model-learning-curve-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modelId|path|string|true|Model Id|
|offset|query|string|false|Index of the epoch from which you want to start paging|
|count|query|string|false|Number of epoch to return. Maximum valid value is 25.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "epoch": 1,
      "epochResults": {},
      "metricsData": {},
      "object": "learningcurve"
    }
  ],
  "object": "list"
}
```

<h3 id="get-model-learning-curve-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Learning Curve|[LearningCurveList](#schemalearningcurvelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

<h1 id="einstein-vision-and-einstein-language-language-prediction">Language Prediction</h1>

Resources that return predictions for text input.

## Prediction for Intent

<a id="opIdintentMultipart"></a>

> Code samples

```bash
curl https://example.com/v2/language/intent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "document": "I can'\''t tell you how much fun it was",
    "modelId": "WJH4YCA7YX4PCWVNCYNWYHBMY4",
    "numResults": 3,
    "sampleId": "string"
  }'
```

`POST /v2/language/intent`

Returns an intent prediction for the given string.

> Body parameter

```json
{
  "document": "I can't tell you how much fun it was",
  "modelId": "WJH4YCA7YX4PCWVNCYNWYHBMY4",
  "numResults": 3,
  "sampleId": "string"
}
```

<h3 id="prediction-for-intent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IntentPredictRequest](#schemaintentpredictrequest)|false|none|
|» document|body|string|true|Text for which you want to return an intent prediction.|
|» modelId|body|string|true|ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.|
|» numResults|body|integer(int32)|false|Number of probabilities to return. |
|» sampleId|body|string|false|String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.|

> Example responses

> 200 Response

```json
{
  "object": "predictresponse",
  "probabilities": [
    {
      "label": "string",
      "probability": 0
    }
  ],
  "sampleId": "Sample1"
}
```

> 429 Response

```json
{
  "message": "string",
  "object": "string"
}
```

<h3 id="prediction-for-intent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Prediction Result|[IntentPredictResponse](#schemaintentpredictresponse)|
|429|Too Many Requests|Exceed usage limitation|[PredictionErrorResponse](#schemapredictionerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

## Prediction for Sentiment

<a id="opIdsentimentMultipart"></a>

> Code samples

```bash
curl https://example.com/v2/language/sentiment \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "document": "I can'\''t tell you how much fun it was",
    "modelId": "WJH4YCA7YX4PCWVNCYNWYHBMY4",
    "numResults": 3,
    "sampleId": "string"
  }'
```

`POST /v2/language/sentiment`

Returns a sentiment prediction for the given string.

> Body parameter

```json
{
  "document": "I can't tell you how much fun it was",
  "modelId": "WJH4YCA7YX4PCWVNCYNWYHBMY4",
  "numResults": 3,
  "sampleId": "string"
}
```

<h3 id="prediction-for-sentiment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SentimentPredictRequest](#schemasentimentpredictrequest)|false|none|
|» document|body|string|true|Text for which you want to return a sentiment prediction.|
|» modelId|body|string|true|ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.|
|» numResults|body|integer(int32)|false|Number of probabilities to return. |
|» sampleId|body|string|false|String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.|

> Example responses

> 200 Response

```json
{
  "object": "predictresponse",
  "probabilities": [
    {
      "label": "string",
      "probability": 0
    }
  ],
  "sampleId": "Sample1"
}
```

<h3 id="prediction-for-sentiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Prediction Result|[SentimentPredictResponse](#schemasentimentpredictresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_token
</aside>

# Schemas

<h2 id="tocS_ApiUsage">ApiUsage</h2>
<!-- backwards compatibility -->
<a id="schemaapiusage"></a>
<a id="schema_ApiUsage"></a>
<a id="tocSapiusage"></a>
<a id="tocsapiusage"></a>

```json
{
  "endsAt": "1970-01-01T00:00:00Z",
  "id": "489",
  "licenseId": "kJCHtYDCSf",
  "object": "apiusage",
  "organizationId": "108",
  "planData": [
    {
      "amount": 1,
      "plan": "STARTER",
      "source": "SALESFORCE"
    }
  ],
  "predictionsMax": 1997,
  "predictionsUsed": 3,
  "startsAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endsAt|string(date-time)|false|none|none|
|id|string|false|none|none|
|licenseId|string|false|none|none|
|object|string|false|none|none|
|organizationId|string|false|none|none|
|planData|[[PlanData](#schemaplandata)]|false|none|none|
|predictionsMax|integer(int64)|false|none|none|
|predictionsUsed|integer(int64)|false|none|none|
|startsAt|string(date-time)|false|none|none|

<h2 id="tocS_ApiUsageList">ApiUsageList</h2>
<!-- backwards compatibility -->
<a id="schemaapiusagelist"></a>
<a id="schema_ApiUsageList"></a>
<a id="tocSapiusagelist"></a>
<a id="tocsapiusagelist"></a>

```json
{
  "data": [
    {
      "endsAt": "1970-01-01T00:00:00Z",
      "id": "489",
      "licenseId": "kJCHtYDCSf",
      "object": "apiusage",
      "organizationId": "108",
      "planData": [
        {
          "amount": 1,
          "plan": "STARTER",
          "source": "SALESFORCE"
        }
      ],
      "predictionsMax": 1997,
      "predictionsUsed": 3,
      "startsAt": "1970-01-01T00:00:00Z"
    }
  ],
  "object": "list"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ApiUsage](#schemaapiusage)]|false|none|none|
|object|string|false|none|none|

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
{
  "cellLocation": {
    "colIndex": 0,
    "rowIndex": 0
  },
  "language": "string",
  "pageNumber": "string",
  "tag": "string",
  "value": {
    "boundingBox": {
      "maxX": 0,
      "maxY": 0,
      "minX": 0,
      "minY": 0
    },
    "entity": "string",
    "text": "string"
  }
}
```

Contains additional attributes related to the task parameter. If the task parameter is table, the row and column IDs for the detected text are returned. If the task parameter is contact, the detected entity tags will be returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cellLocation|[CellLocation](#schemacelllocation)|false|none|none|
|language|string|false|none|none|
|pageNumber|string|false|none|none|
|tag|string|false|none|none|
|value|[EntityObject](#schemaentityobject)|false|none|none|

<h2 id="tocS_BoundingBox">BoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemaboundingbox"></a>
<a id="schema_BoundingBox"></a>
<a id="tocSboundingbox"></a>
<a id="tocsboundingbox"></a>

```json
{
  "maxX": 0,
  "maxY": 0,
  "minX": 0,
  "minY": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxX|integer(int32)|false|none|X-coordinate of the left side of the bounding box. The origin of the coordinate system is the top-left of the image. Number of pixels from the left edge of the image.|
|maxY|integer(int32)|false|none|Y-coordinate of the top of the bounding box. Number of pixels from the top edge of the image.|
|minX|integer(int32)|false|none|X-coordinate of the right side of the bounding box. Number of pixels from the left edge of the image.|
|minY|integer(int32)|false|none|Y-coordinate of the bottom of the bounding box. Number of pixels from the top edge of the image.|

<h2 id="tocS_CellLocation">CellLocation</h2>
<!-- backwards compatibility -->
<a id="schemacelllocation"></a>
<a id="schema_CellLocation"></a>
<a id="tocScelllocation"></a>
<a id="tocscelllocation"></a>

```json
{
  "colIndex": 0,
  "rowIndex": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colIndex|integer(int32)|false|none|Index of the column that contains the detected text.|
|rowIndex|integer(int32)|false|none|Index of the row that contains the detected text.|

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "available": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 1000014,
  "labelSummary": {
    "labels": [
      {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      }
    ]
  },
  "language": "N/A",
  "name": "weather report",
  "numOfDuplicates": 0,
  "object": "dataset",
  "statusMsg": "SUCCEEDED",
  "totalExamples": 20,
  "totalLabels": 2,
  "type": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|false|none|none|
|createdAt|string(date-time)|false|none|Date and time that the dataset was created.|
|id|integer(int64)|true|none|none|
|labelSummary|[LabelSummary](#schemalabelsummary)|false|none|Contains the labels array that contains all the labels for the dataset.|
|language|string|false|none|Dataset language.|
|name|string|true|none|none|
|numOfDuplicates|integer(int32)|false|none|Number of duplicate images. This number includes duplicates in the .zip file from which the dataset was created plus the number of duplicate images from subsequent PUT calls to add images to the dataset.|
|object|string|false|none|Object returned; in this case, dataset.|
|statusMsg|string|false|none|none|
|totalExamples|integer(int32)|false|none|Total number of examples in the dataset.|
|totalLabels|integer(int32)|false|none|Total number of labels in the dataset.|
|type|string|false|none|none|
|updatedAt|string(date-time)|false|none|none|

<h2 id="tocS_DatasetList">DatasetList</h2>
<!-- backwards compatibility -->
<a id="schemadatasetlist"></a>
<a id="schema_DatasetList"></a>
<a id="tocSdatasetlist"></a>
<a id="tocsdatasetlist"></a>

```json
{
  "data": [
    {
      "available": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "id": 1000014,
      "labelSummary": {
        "labels": [
          {
            "datasetId": 57,
            "id": 621,
            "name": "Mountain",
            "numExamples": 40
          }
        ]
      },
      "language": "N/A",
      "name": "weather report",
      "numOfDuplicates": 0,
      "object": "dataset",
      "statusMsg": "SUCCEEDED",
      "totalExamples": 20,
      "totalLabels": 2,
      "type": "string",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "object": "list"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Dataset](#schemadataset)]|false|none|none|
|object|string|false|none|none|

<h2 id="tocS_DeletionResponse">DeletionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletionresponse"></a>
<a id="schema_DeletionResponse"></a>
<a id="tocSdeletionresponse"></a>
<a id="tocsdeletionresponse"></a>

```json
{
  "deletedObjectId": "1003360",
  "id": "Z2JTFBF3A7XKIJC5QEJXMO4HSY",
  "message": "string",
  "object": "deletion",
  "organizationId": "2",
  "progress": 1,
  "status": "QUEUED",
  "type": "DATASET"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedObjectId|string|false|none|none|
|id|string|false|none|none|
|message|string|false|none|none|
|object|string|false|none|none|
|organizationId|string|false|none|none|
|progress|number(double)|false|none|none|
|status|string|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|QUEUED|
|status|RUNNING|
|status|SUCCEEDED_WAITING_FOR_CACHE_REMOVAL|
|status|SUCCEEDED|
|status|KILLED|
|status|FAILED|
|status|RETRY|
|type|DATASET|
|type|MODEL|

<h2 id="tocS_DetectionResult">DetectionResult</h2>
<!-- backwards compatibility -->
<a id="schemadetectionresult"></a>
<a id="schema_DetectionResult"></a>
<a id="tocSdetectionresult"></a>
<a id="tocsdetectionresult"></a>

```json
{
  "boundingBox": {
    "maxX": 0,
    "maxY": 0,
    "minX": 0,
    "minY": 0
  },
  "label": "string",
  "probability": 0
}
```

label

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[BoundingBox](#schemaboundingbox)|false|none|none|
|label|string|false|none|Probability lable for the input. |
|probability|number(float)|false|none|Probability value for the input. Values are between 0�1.|

<h2 id="tocS_EntityObject">EntityObject</h2>
<!-- backwards compatibility -->
<a id="schemaentityobject"></a>
<a id="schema_EntityObject"></a>
<a id="tocSentityobject"></a>
<a id="tocsentityobject"></a>

```json
{
  "boundingBox": {
    "maxX": 0,
    "maxY": 0,
    "minX": 0,
    "minY": 0
  },
  "entity": "string",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[BoundingBox](#schemaboundingbox)|false|none|none|
|entity|string|false|none|none|
|text|string|false|none|none|

<h2 id="tocS_Example">Example</h2>
<!-- backwards compatibility -->
<a id="schemaexample"></a>
<a id="schema_Example"></a>
<a id="tocSexample"></a>
<a id="tocsexample"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 546,
  "label": {
    "datasetId": 57,
    "id": 621,
    "name": "Mountain",
    "numExamples": 40
  },
  "location": "https://K3A04Q79O5TBySIZSeMIj%2BC3zqi7rOmeK...",
  "name": "659803277.jpg",
  "object": "example"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|Date and time that the example was created.|
|id|integer(int64)|true|none|ID of the example.|
|label|[Label](#schemalabel)|false|none|Contains information about the label with which the example is associated.|
|location|string|false|none|URL of the image in the dataset. This is a temporary URL that expires in 30 minutes. This URL can be used to display images that were uploaded to a dataset in a UI.|
|name|string|true|none|Name of the example.|
|object|string|false|none|Object returned; in this case, example.|

<h2 id="tocS_ExampleList">ExampleList</h2>
<!-- backwards compatibility -->
<a id="schemaexamplelist"></a>
<a id="schema_ExampleList"></a>
<a id="tocSexamplelist"></a>
<a id="tocsexamplelist"></a>

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "id": 546,
      "label": {
        "datasetId": 57,
        "id": 621,
        "name": "Mountain",
        "numExamples": 40
      },
      "location": "https://K3A04Q79O5TBySIZSeMIj%2BC3zqi7rOmeK...",
      "name": "659803277.jpg",
      "object": "example"
    }
  ],
  "object": "list"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Example](#schemaexample)]|false|none|none|
|object|string|false|none|none|

<h2 id="tocS_GenerateAccessTokenResponse">GenerateAccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenerateaccesstokenresponse"></a>
<a id="schema_GenerateAccessTokenResponse"></a>
<a id="tocSgenerateaccesstokenresponse"></a>
<a id="tocsgenerateaccesstokenresponse"></a>

```json
{
  "access_token": "SPFPQ5IBLB6DPE6FKPWHMIWW4MCRICX4M4KQXFQMI6THZXIEZ6QGNWNOERD6S7655LJAFWTRIKC4KGYO5G3XROMEOTBSS53CFSB6GIA",
  "expires_in": "120",
  "refresh_token": "FL4GSVQS4W5CKSFRVZBLPIVZZJ2K4VIFPLGZ45SJGUQK4SS56IWPWACZ7V2B7OVLVKZCNK5JZSSW7CIHCNQJAO3TOUE3375108HHTLY",
  "token_type": "Bearer"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|none|
|expires_in|string|false|none|none|
|refresh_token|string|false|none|none|
|token_type|string|false|none|none|

<h2 id="tocS_ImageClassificationRequest">ImageClassificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimageclassificationrequest"></a>
<a id="schema_ImageClassificationRequest"></a>
<a id="tocSimageclassificationrequest"></a>
<a id="tocsimageclassificationrequest"></a>

```json
{
  "modelId": "WJH4YCA7YX4PCWVNCYNWYHBMY4",
  "numResults": 3,
  "sampleBase64Content": "SomeBase64EncodedImage",
  "sampleId": "string",
  "sampleLocation": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|string|true|none|ID of the model that makes the prediction.|
|numResults|integer(int32)|false|none|Number of probabilities to return.|
|sampleBase64Content|string|false|none|The image contained in a base64 string.|
|sampleId|string|false|none|String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.|
|sampleLocation|string|false|none|URL of the image file.|

<h2 id="tocS_ImageClassificationResponse">ImageClassificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimageclassificationresponse"></a>
<a id="schema_ImageClassificationResponse"></a>
<a id="tocSimageclassificationresponse"></a>
<a id="tocsimageclassificationresponse"></a>

```json
{
  "object": "predictresponse",
  "probabilities": [
    {
      "label": "string",
      "probability": 0
    }
  ],
  "sampleId": "Sample1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|probabilities|[[LabelResult](#schemalabelresult)]|false|none|none|
|sampleId|string|false|none|Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided.|

<h2 id="tocS_IntentPredictRequest">IntentPredictRequest</h2>
<!-- backwards compatibility -->
<a id="schemaintentpredictrequest"></a>
<a id="schema_IntentPredictRequest"></a>
<a id="tocSintentpredictrequest"></a>
<a id="tocsintentpredictrequest"></a>

```json
{
  "document": "I can't tell you how much fun it was",
  "modelId": "WJH4YCA7YX4PCWVNCYNWYHBMY4",
  "numResults": 3,
  "sampleId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|string|true|none|Text for which you want to return an intent prediction.|
|modelId|string|true|none|ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.|
|numResults|integer(int32)|false|none|Number of probabilities to return. |
|sampleId|string|false|none|String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.|

<h2 id="tocS_IntentPredictResponse">IntentPredictResponse</h2>
<!-- backwards compatibility -->
<a id="schemaintentpredictresponse"></a>
<a id="schema_IntentPredictResponse"></a>
<a id="tocSintentpredictresponse"></a>
<a id="tocsintentpredictresponse"></a>

```json
{
  "object": "predictresponse",
  "probabilities": [
    {
      "label": "string",
      "probability": 0
    }
  ],
  "sampleId": "Sample1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|probabilities|[[LabelResult](#schemalabelresult)]|false|none|none|
|sampleId|string|false|none|Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided.|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "datasetId": 57,
  "id": 621,
  "name": "Mountain",
  "numExamples": 40
}
```

Contains information about the label with which the example is associated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|integer(int64)|true|none|ID of the dataset that the label belongs to.|
|id|integer(int64)|false|none|ID of the label.|
|name|string|true|none|Name of the label.|
|numExamples|integer(int64)|false|none|Number of examples that have the label.|

<h2 id="tocS_LabelResult">LabelResult</h2>
<!-- backwards compatibility -->
<a id="schemalabelresult"></a>
<a id="schema_LabelResult"></a>
<a id="tocSlabelresult"></a>
<a id="tocslabelresult"></a>

```json
{
  "label": "string",
  "probability": 0
}
```

label

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|Probability lable for the input. |
|probability|number(float)|false|none|Probability value for the input. Values are between 0�1.|

<h2 id="tocS_LabelSummary">LabelSummary</h2>
<!-- backwards compatibility -->
<a id="schemalabelsummary"></a>
<a id="schema_LabelSummary"></a>
<a id="tocSlabelsummary"></a>
<a id="tocslabelsummary"></a>

```json
{
  "labels": [
    {
      "datasetId": 57,
      "id": 621,
      "name": "Mountain",
      "numExamples": 40
    }
  ]
}
```

Contains the labels array that contains all the labels for the dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[[Label](#schemalabel)]|false|none|none|

<h2 id="tocS_LearningCurve">LearningCurve</h2>
<!-- backwards compatibility -->
<a id="schemalearningcurve"></a>
<a id="schema_LearningCurve"></a>
<a id="tocSlearningcurve"></a>
<a id="tocslearningcurve"></a>

```json
{
  "epoch": 1,
  "epochResults": {},
  "metricsData": {},
  "object": "learningcurve"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|epoch|object|false|none|Epoch to which the metrics correspond.|
|epochResults|object|false|none|Prediction results for the set of data used to test the model during training.|
|metricsData|object|false|none|Model metrics values.|
|object|string|false|none|Object returned; in this case, learningcurve.|

<h2 id="tocS_LearningCurveList">LearningCurveList</h2>
<!-- backwards compatibility -->
<a id="schemalearningcurvelist"></a>
<a id="schema_LearningCurveList"></a>
<a id="tocSlearningcurvelist"></a>
<a id="tocslearningcurvelist"></a>

```json
{
  "data": [
    {
      "epoch": 1,
      "epochResults": {},
      "metricsData": {},
      "object": "learningcurve"
    }
  ],
  "object": "list"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LearningCurve](#schemalearningcurve)]|false|none|none|
|object|string|false|none|none|

<h2 id="tocS_Metrics">Metrics</h2>
<!-- backwards compatibility -->
<a id="schemametrics"></a>
<a id="schema_Metrics"></a>
<a id="tocSmetrics"></a>
<a id="tocsmetrics"></a>

```json
{
  "algorithm": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "language": "string",
  "metricsData": {},
  "object": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|none|
|createdAt|string(date-time)|false|none|Date and time that the model was created.|
|id|string|false|none|Model Id|
|language|string|false|none|none|
|metricsData|object|false|none|Model metrics values.|
|object|string|false|none|none|

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
{
  "algorithm": "object-detection",
  "createdAt": "1970-01-01T00:00:00Z",
  "datasetId": 57,
  "datasetVersionId": 0,
  "failureMsg": "To train a dataset and create a model, the dataset must contain at least 100 examples per label for test set",
  "language": "en_US",
  "modelId": "2KXJEOM3N562JBT4P7OX7VID2Q",
  "modelType": "string",
  "name": "My Model - Version1",
  "object": "model",
  "progress": 0,
  "status": "QUEUED",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|Algorithm used to create the model. Returned only when the modelType is image-detection.|
|createdAt|string(date-time)|false|none|Date and time that the model was created.|
|datasetId|integer(int64)|true|none|ID of the dataset trained to create the model.|
|datasetVersionId|integer(int64)|true|none|Not available yet|
|failureMsg|string|false|none|Reason the dataset training failed. Returned only if the training status is FAILED.|
|language|string|false|none|Model language inherited from the dataset language. For image datasets, default is N/A. For text datasets, default is en_US.|
|modelId|string|true|none|ID of the model. Contains letters and numbers.|
|modelType|string|false|none|Type of data from which the model was created.|
|name|string|true|none|Name of the model.|
|object|string|false|none|Object returned; in this case, model.|
|progress|number|true|none|How far the dataset training has progressed. Values are between 0�1.|
|status|string|true|none|Status of the model.|
|updatedAt|string(date-time)|false|none|Date and time that the model was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|QUEUED|
|status|RUNNING|
|status|SUCCEEDED|
|status|FAILED|
|status|KILLED|
|status|FAILED_WITH_RETRIES|

<h2 id="tocS_ModelList">ModelList</h2>
<!-- backwards compatibility -->
<a id="schemamodellist"></a>
<a id="schema_ModelList"></a>
<a id="tocSmodellist"></a>
<a id="tocsmodellist"></a>

```json
{
  "data": [
    {
      "algorithm": "object-detection",
      "createdAt": "1970-01-01T00:00:00Z",
      "datasetId": 57,
      "datasetVersionId": 0,
      "failureMsg": "To train a dataset and create a model, the dataset must contain at least 100 examples per label for test set",
      "language": "en_US",
      "modelId": "2KXJEOM3N562JBT4P7OX7VID2Q",
      "modelType": "string",
      "name": "My Model - Version1",
      "object": "model",
      "progress": 0,
      "status": "QUEUED",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "object": "list"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Model](#schemamodel)]|false|none|none|
|object|string|false|none|none|

<h2 id="tocS_OCRPredictResponse">OCRPredictResponse</h2>
<!-- backwards compatibility -->
<a id="schemaocrpredictresponse"></a>
<a id="schema_OCRPredictResponse"></a>
<a id="tocSocrpredictresponse"></a>
<a id="tocsocrpredictresponse"></a>

```json
{
  "object": "predictresponse",
  "probabilities": [
    {
      "attributes": {
        "cellLocation": {
          "colIndex": 0,
          "rowIndex": 0
        },
        "language": "string",
        "pageNumber": "string",
        "tag": "string",
        "value": {
          "boundingBox": {
            "maxX": 0,
            "maxY": 0,
            "minX": 0,
            "minY": 0
          },
          "entity": "string",
          "text": "string"
        }
      },
      "boundingBox": {
        "maxX": 0,
        "maxY": 0,
        "minX": 0,
        "minY": 0
      },
      "label": "string",
      "probability": 0
    }
  ],
  "sampleId": "Sample1",
  "task": "Task1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|probabilities|[[OCRResult](#schemaocrresult)]|false|none|none|
|sampleId|string|false|none|Same value as request parameter. Returned only if the sampleId request parameter is provided.|
|task|string|false|none|Same value as request parameter. Returns text if the request parameter isn't supplied.|

<h2 id="tocS_OCRResult">OCRResult</h2>
<!-- backwards compatibility -->
<a id="schemaocrresult"></a>
<a id="schema_OCRResult"></a>
<a id="tocSocrresult"></a>
<a id="tocsocrresult"></a>

```json
{
  "attributes": {
    "cellLocation": {
      "colIndex": 0,
      "rowIndex": 0
    },
    "language": "string",
    "pageNumber": "string",
    "tag": "string",
    "value": {
      "boundingBox": {
        "maxX": 0,
        "maxY": 0,
        "minX": 0,
        "minY": 0
      },
      "entity": "string",
      "text": "string"
    }
  },
  "boundingBox": {
    "maxX": 0,
    "maxY": 0,
    "minX": 0,
    "minY": 0
  },
  "label": "string",
  "probability": 0
}
```

Array of probabilities for the prediction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[Attributes](#schemaattributes)|false|none|Contains additional attributes related to the task parameter. If the task parameter is table, the row and column IDs for the detected text are returned. If the task parameter is contact, the detected entity tags will be returned.|
|boundingBox|[BoundingBox](#schemaboundingbox)|false|none|none|
|label|string|false|none|Content of the detected text.|
|probability|number(float)|false|none|Probability value for the input. Values are between 0�1.|

<h2 id="tocS_ObjectDetectionRequest">ObjectDetectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaobjectdetectionrequest"></a>
<a id="schema_ObjectDetectionRequest"></a>
<a id="tocSobjectdetectionrequest"></a>
<a id="tocsobjectdetectionrequest"></a>

```json
{
  "modelId": "YCQ4ZACEPJFGXZNRA6ERF3GL5E",
  "sampleBase64Content": "SomeBase64EncodedImage",
  "sampleId": "string",
  "sampleLocation": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|string|true|none|ID of the model that makes the detection.|
|sampleBase64Content|string|false|none|The image contained in a base64 string.|
|sampleId|string|false|none|String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.|
|sampleLocation|string|false|none|URL of the image file.|

<h2 id="tocS_ObjectDetectionResponse">ObjectDetectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaobjectdetectionresponse"></a>
<a id="schema_ObjectDetectionResponse"></a>
<a id="tocSobjectdetectionresponse"></a>
<a id="tocsobjectdetectionresponse"></a>

```json
{
  "object": "predictresponse",
  "probabilities": [
    {
      "boundingBox": {
        "maxX": 0,
        "maxY": 0,
        "minX": 0,
        "minY": 0
      },
      "label": "string",
      "probability": 0
    }
  ],
  "sampleId": "Sample1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|probabilities|[[DetectionResult](#schemadetectionresult)]|false|none|none|
|sampleId|string|false|none|Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided.|

<h2 id="tocS_PlanData">PlanData</h2>
<!-- backwards compatibility -->
<a id="schemaplandata"></a>
<a id="schema_PlanData"></a>
<a id="tocSplandata"></a>
<a id="tocsplandata"></a>

```json
{
  "amount": 1,
  "plan": "STARTER",
  "source": "SALESFORCE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int32)|false|none|none|
|plan|string|false|none|none|
|source|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|plan|STARTER|
|plan|SFDC_1M_EDITION|
|plan|BRONZE|
|plan|SILVER|
|plan|GOLD|
|plan|DATASET_DOWNLOAD|
|source|SALESFORCE|
|source|HEROKU|
|source|SF_AUTO_PROVISION|
|source|SF_AUTO_PROVISION_BOUND|

<h2 id="tocS_PredictionErrorResponse">PredictionErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemapredictionerrorresponse"></a>
<a id="schema_PredictionErrorResponse"></a>
<a id="tocSpredictionerrorresponse"></a>
<a id="tocspredictionerrorresponse"></a>

```json
{
  "message": "string",
  "object": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|object|string|false|none|none|

<h2 id="tocS_SentimentPredictRequest">SentimentPredictRequest</h2>
<!-- backwards compatibility -->
<a id="schemasentimentpredictrequest"></a>
<a id="schema_SentimentPredictRequest"></a>
<a id="tocSsentimentpredictrequest"></a>
<a id="tocssentimentpredictrequest"></a>

```json
{
  "document": "I can't tell you how much fun it was",
  "modelId": "WJH4YCA7YX4PCWVNCYNWYHBMY4",
  "numResults": 3,
  "sampleId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|string|true|none|Text for which you want to return a sentiment prediction.|
|modelId|string|true|none|ID of the model that makes the prediction. The model must have been created from a dataset with a type of text-sentiment.|
|numResults|integer(int32)|false|none|Number of probabilities to return. |
|sampleId|string|false|none|String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.|

<h2 id="tocS_SentimentPredictResponse">SentimentPredictResponse</h2>
<!-- backwards compatibility -->
<a id="schemasentimentpredictresponse"></a>
<a id="schema_SentimentPredictResponse"></a>
<a id="tocSsentimentpredictresponse"></a>
<a id="tocssentimentpredictresponse"></a>

```json
{
  "object": "predictresponse",
  "probabilities": [
    {
      "label": "string",
      "probability": 0
    }
  ],
  "sampleId": "Sample1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|none|
|probabilities|[[LabelResult](#schemalabelresult)]|false|none|none|
|sampleId|string|false|none|Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided.|

<h2 id="tocS_TrainResponse">TrainResponse</h2>
<!-- backwards compatibility -->
<a id="schematrainresponse"></a>
<a id="schema_TrainResponse"></a>
<a id="tocStrainresponse"></a>
<a id="tocstrainresponse"></a>

```json
{
  "algorithm": "object-detection",
  "createdAt": "1970-01-01T00:00:00Z",
  "datasetId": 57,
  "datasetVersionId": 0,
  "epochs": 20,
  "failureMsg": "To train a dataset and create a model, the dataset must contain at least 100 examples per label for test set",
  "language": "en_US",
  "learningRate": 0.0001,
  "modelId": "2KXJEOM3N562JBT4P7OX7VID2Q",
  "modelType": "string",
  "name": "My Model - Version1",
  "object": "training",
  "progress": 0.7,
  "queuePosition": 1,
  "status": "QUEUED",
  "trainParams": "{\"trainSplitRatio\":0.7}",
  "trainStats": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|Algorithm used to create the model. Returned only when the modelType is image-detection.|
|createdAt|string(date-time)|false|none|Date and time that the model was created.|
|datasetId|integer(int64)|true|none|ID of the dataset trained to create the model.|
|datasetVersionId|integer(int64)|true|none|Not available yet|
|epochs|integer(int32)|false|none|Number of epochs used during training.|
|failureMsg|string|false|none|Reason the dataset training failed. Returned only if the training status is FAILED.|
|language|string|true|none|Model language inherited from the dataset language. For image datasets, default is N/A. For text datasets, default is en_US.|
|learningRate|number(double)|false|none|Learning rate used during training.|
|modelId|string|true|none|ID of the model. Contains letters and numbers.|
|modelType|string|false|none|Type of data from which the model was created.|
|name|string|true|none|Name of the model.|
|object|string|false|none|Object returned; in this case, training.|
|progress|number|true|none|How far the dataset training has progressed. Values are between 0�1.|
|queuePosition|integer(int32)|false|none|Where the training job is in the queue. This field appears in the response only if the status is QUEUED.|
|status|string|true|none|Status of the model.|
|trainParams|string|false|none|Training parameters passed into the request.|
|trainStats|string|false|none|Returns null when you train a dataset. Training statistics are returned when the status is SUCCEEDED or FAILED.|
|updatedAt|string(date-time)|false|none|Date and time that the model was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|QUEUED|
|status|RUNNING|
|status|SUCCEEDED|
|status|FAILED|
|status|KILLED|
|status|FAILED_WITH_RETRIES|

<h2 id="tocS_V2LanguageTrainParams">V2LanguageTrainParams</h2>
<!-- backwards compatibility -->
<a id="schemav2languagetrainparams"></a>
<a id="schema_V2LanguageTrainParams"></a>
<a id="tocSv2languagetrainparams"></a>
<a id="tocsv2languagetrainparams"></a>

```json
{
  "trainSplitRatio": 0.9,
  "withFeedback": true,
  "withGlobalDatasetId": 0
}
```

JSON that contains parameters that specify how the model is created

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trainSplitRatio|number(float)|false|none|Lets you specify the ratio of data used to train the dataset and the data used to test the model.|
|withFeedback|boolean|false|none|Lets you specify that feedback examples are included in the data to be trained to create the model.|
|withGlobalDatasetId|integer(int64)|false|none|Lets you specify that a global dataset is used in addition to the specified dataset to create the model.|

<h2 id="tocS_V2VisionTrainParams">V2VisionTrainParams</h2>
<!-- backwards compatibility -->
<a id="schemav2visiontrainparams"></a>
<a id="schema_V2VisionTrainParams"></a>
<a id="tocSv2visiontrainparams"></a>
<a id="tocsv2visiontrainparams"></a>

```json
{
  "trainSplitRatio": 0.9,
  "withFeedback": true,
  "withGlobalDatasetId": 0
}
```

JSON that contains parameters that specify how the model is created

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trainSplitRatio|number(float)|false|none|Lets you specify the ratio of data used to train the dataset and the data used to test the model.|
|withFeedback|boolean|false|none|Lets you specify that feedback examples are included in the data to be trained to create the model.|
|withGlobalDatasetId|integer(int64)|false|none|Lets you specify that a global dataset is used in addition to the specified dataset to create the model.|
