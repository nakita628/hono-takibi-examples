<h1 id="amazon-honeycode">Amazon Honeycode v2020-03-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

 Amazon Honeycode is a fully managed service that allows you to quickly build mobile and web apps for teams—without programming. Build Honeycode apps for managing almost anything, like projects, customers, operations, approvals, resources, and even your team.

Base URLs:

* <a href="http://honeycode.us-east-1.amazonaws.com">http://honeycode.us-east-1.amazonaws.com</a> - The Honeycode multi-region endpoint

* <a href="https://honeycode.us-east-1.amazonaws.com">https://honeycode.us-east-1.amazonaws.com</a> - The Honeycode multi-region endpoint

* <a href="http://honeycode.cn-north-1.amazonaws.com.cn">http://honeycode.cn-north-1.amazonaws.com.cn</a> - The Honeycode endpoint for China (Beijing) and China (Ningxia)

* <a href="https://honeycode.cn-north-1.amazonaws.com.cn">https://honeycode.cn-north-1.amazonaws.com.cn</a> - The Honeycode endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/honeycode/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-honeycode-default">Default</h1>

## BatchCreateTableRows

<a id="opIdBatchCreateTableRows"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/workbooks/stringstringstringstringstringstring/tables/stringstringstringstringstringstring/rows/batchcreate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "rowsToCreate": [
      {
        "batchItemId": {},
        "cellsToCreate": {
          "property1": {
            "fact": {},
            "facts": {}
          },
          "property2": {
            "fact": {},
            "facts": {}
          }
        }
      }
    ],
    "clientRequestToken": "stringstringstringstringstringst"
  }'
```

`POST /workbooks/{workbookId}/tables/{tableId}/rows/batchcreate`

<p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>

> Body parameter

```json
{
  "rowsToCreate": [
    {
      "batchItemId": {},
      "cellsToCreate": {
        "property1": {
          "fact": {},
          "facts": {}
        },
        "property2": {
          "fact": {},
          "facts": {}
        }
      }
    }
  ],
  "clientRequestToken": "stringstringstringstringstringst"
}
```

<h3 id="batchcreatetablerows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workbookId|path|string|true|<p>The ID of the workbook where the new rows are being added.</p> <p> If a workbook with the specified ID could not be found, this API throws ResourceNotFoundException. </p>|
|tableId|path|string|true|<p>The ID of the table where the new rows are being added.</p> <p> If a table with the specified ID could not be found, this API throws ResourceNotFoundException. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» rowsToCreate|body|[[CreateRowData](#schemacreaterowdata)]|true|<p> The list of rows to create at the end of the table. Each item in this list needs to have a batch item id to uniquely identify the element in the request and the cells to create for that row. You need to specify at least one item in this list. </p> <p> Note that if one of the column ids in any of the rows in the request does not exist in the table, then the request fails and no updates are made to the table. </p>|
|» clientRequestToken|body|string|false|<p> The request token for performing the batch create operation. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the operation again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>|

> Example responses

> 200 Response

```json
{
  "workbookCursor": {},
  "createdRows": {
    "property1": "stringstringstringstringstringstringstringstringstringstringstringstringstrin",
    "property2": "stringstringstringstringstringstringstringstringstringstringstringstringstrin"
  },
  "failedBatchItems": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="batchcreatetablerows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchCreateTableRowsResult](#schemabatchcreatetablerowsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|487|487|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDeleteTableRows

<a id="opIdBatchDeleteTableRows"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/workbooks/stringstringstringstringstringstring/tables/stringstringstringstringstringstring/rows/batchdelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "rowIds": [
      "stringstringstringstringstringstringstringstringstringstringstringstringstrin"
    ],
    "clientRequestToken": "stringstringstringstringstringst"
  }'
```

`POST /workbooks/{workbookId}/tables/{tableId}/rows/batchdelete`

 The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table. 

> Body parameter

```json
{
  "rowIds": [
    "stringstringstringstringstringstringstringstringstringstringstringstringstrin"
  ],
  "clientRequestToken": "stringstringstringstringstringst"
}
```

<h3 id="batchdeletetablerows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workbookId|path|string|true|<p>The ID of the workbook where the rows are being deleted.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|tableId|path|string|true|<p>The ID of the table where the rows are being deleted.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» rowIds|body|[[RowId](#schemarowid)]|true|<p> The list of row ids to delete from the table. You need to specify at least one row id in this list. </p> <p> Note that if one of the row ids provided in the request does not exist in the table, then the request fails and no rows are deleted from the table. </p>|
|» clientRequestToken|body|string|false|<p> The request token for performing the delete action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>|

> Example responses

> 200 Response

```json
{
  "workbookCursor": {},
  "failedBatchItems": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="batchdeletetablerows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteTableRowsResult](#schemabatchdeletetablerowsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchUpdateTableRows

<a id="opIdBatchUpdateTableRows"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/workbooks/stringstringstringstringstringstring/tables/stringstringstringstringstringstring/rows/batchupdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "rowsToUpdate": [
      {
        "rowId": {},
        "cellsToUpdate": {
          "property1": {
            "fact": {},
            "facts": {}
          },
          "property2": {
            "fact": {},
            "facts": {}
          }
        }
      }
    ],
    "clientRequestToken": "stringstringstringstringstringst"
  }'
```

`POST /workbooks/{workbookId}/tables/{tableId}/rows/batchupdate`

<p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>

> Body parameter

```json
{
  "rowsToUpdate": [
    {
      "rowId": {},
      "cellsToUpdate": {
        "property1": {
          "fact": {},
          "facts": {}
        },
        "property2": {
          "fact": {},
          "facts": {}
        }
      }
    }
  ],
  "clientRequestToken": "stringstringstringstringstringst"
}
```

<h3 id="batchupdatetablerows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workbookId|path|string|true|<p>The ID of the workbook where the rows are being updated.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|tableId|path|string|true|<p>The ID of the table where the rows are being updated.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» rowsToUpdate|body|[[UpdateRowData](#schemaupdaterowdata)]|true|<p> The list of rows to update in the table. Each item in this list needs to contain the row id to update along with the map of column id to cell values for each column in that row that needs to be updated. You need to specify at least one row in this list, and for each row, you need to specify at least one column to update. </p> <p> Note that if one of the row or column ids in the request does not exist in the table, then the request fails and no updates are made to the table. </p>|
|» clientRequestToken|body|string|false|<p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>|

> Example responses

> 200 Response

```json
{
  "workbookCursor": {},
  "failedBatchItems": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="batchupdatetablerows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchUpdateTableRowsResult](#schemabatchupdatetablerowsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchUpsertTableRows

<a id="opIdBatchUpsertTableRows"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/workbooks/stringstringstringstringstringstring/tables/stringstringstringstringstringstring/rows/batchupsert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "rowsToUpsert": [
      {
        "batchItemId": {},
        "filter": {
          "formula": {},
          "contextRowId": {}
        },
        "cellsToUpdate": {
          "property1": {
            "fact": {},
            "facts": {}
          },
          "property2": {
            "fact": {},
            "facts": {}
          }
        }
      }
    ],
    "clientRequestToken": "stringstringstringstringstringst"
  }'
```

`POST /workbooks/{workbookId}/tables/{tableId}/rows/batchupsert`

<p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>

> Body parameter

```json
{
  "rowsToUpsert": [
    {
      "batchItemId": {},
      "filter": {
        "formula": {},
        "contextRowId": {}
      },
      "cellsToUpdate": {
        "property1": {
          "fact": {},
          "facts": {}
        },
        "property2": {
          "fact": {},
          "facts": {}
        }
      }
    }
  ],
  "clientRequestToken": "stringstringstringstringstringst"
}
```

<h3 id="batchupserttablerows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workbookId|path|string|true|<p>The ID of the workbook where the rows are being upserted.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|tableId|path|string|true|<p>The ID of the table where the rows are being upserted.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» rowsToUpsert|body|[[UpsertRowData](#schemaupsertrowdata)]|true|<p> The list of rows to upsert in the table. Each item in this list needs to have a batch item id to uniquely identify the element in the request, a filter expression to find the rows to update for that element and the cell values to set for each column in the upserted rows. You need to specify at least one item in this list. </p> <p> Note that if one of the filter formulas in the request fails to evaluate because of an error or one of the column ids in any of the rows does not exist in the table, then the request fails and no updates are made to the table. </p>|
|» clientRequestToken|body|string|false|<p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>|

> Example responses

> 200 Response

```json
{
  "rows": {
    "property1": {
      "rowIds": {},
      "upsertAction": {}
    },
    "property2": {
      "rowIds": {},
      "upsertAction": {}
    }
  },
  "workbookCursor": {},
  "failedBatchItems": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="batchupserttablerows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchUpsertTableRowsResult](#schemabatchupserttablerowsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|487|487|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTableDataImportJob

<a id="opIdDescribeTableDataImportJob"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/workbooks/stringstringstringstringstringstring/tables/stringstringstringstringstringstring/import/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workbooks/{workbookId}/tables/{tableId}/import/{jobId}`

 The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job. 

<h3 id="describetabledataimportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workbookId|path|string|true|<p>The ID of the workbook into which data was imported.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|tableId|path|string|true|<p>The ID of the table into which data was imported.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|jobId|path|string|true|<p>The ID of the job that was returned by the StartTableDataImportJob request.</p> <p> If a job with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "jobStatus": {},
  "message": {},
  "jobMetadata": {
    "submitter": {
      "email": {},
      "userArn": {}
    },
    "submitTime": {},
    "importOptions": {
      "destinationOptions": {
        "columnMap": {
          "property1": {
            "columnIndex": {}
          },
          "property2": {
            "columnIndex": {}
          }
        }
      },
      "delimitedTextOptions": {
        "delimiter": {},
        "hasHeaderRow": {},
        "ignoreEmptyRows": {},
        "dataCharacterEncoding": {}
      }
    },
    "dataSource": {
      "dataSourceConfig": {
        "dataSourceUrl": {}
      }
    }
  },
  "errorCode": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="describetabledataimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTableDataImportJobResult](#schemadescribetabledataimportjobresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|
|486|486|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetScreenData

<a id="opIdGetScreenData"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/screendata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "workbookId": "stringstringstringstringstringstring",
    "appId": "stringstringstringstringstringstring",
    "screenId": "stringstringstringstringstringstring",
    "variables": {
      "property1": {
        "rawValue": {}
      },
      "property2": {
        "rawValue": {}
      }
    },
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /screendata`

 The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 

> Body parameter

```json
{
  "workbookId": "stringstringstringstringstringstring",
  "appId": "stringstringstringstringstringstring",
  "screenId": "stringstringstringstringstringstring",
  "variables": {
    "property1": {
      "rawValue": {}
    },
    "property2": {
      "rawValue": {}
    }
  },
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="getscreendata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» workbookId|body|string|true|The ID of the workbook that contains the screen.|
|» appId|body|string|true|The ID of the app that contains the screen.|
|» screenId|body|string|true|The ID of the screen.|
|» variables|body|object|false| Variables are optional and are needed only if the screen requires them to render correctly. Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. |
|» » **additionalProperties**|body|[VariableValue](#schemavariablevalue)|false|The input variables to the app to be used by the InvokeScreenAutomation action request.|
|» maxResults|body|integer|false|<p> The number of results to be returned on a single page. Specify a number between 1 and 100. The maximum value is 100. </p> <p> This parameter is optional. If you don't specify this parameter, the default page size is 100. </p>|
|» nextToken|body|string|false|<p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>|

> Example responses

> 200 Response

```json
{
  "results": {
    "property1": {
      "headers": {},
      "rows": {}
    },
    "property2": {
      "headers": {},
      "rows": {}
    }
  },
  "workbookCursor": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="getscreendata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetScreenDataResult](#schemagetscreendataresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InvokeScreenAutomation

<a id="opIdInvokeScreenAutomation"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/workbooks/stringstringstringstringstringstring/apps/stringstringstringstringstringstring/screens/stringstringstringstringstringstring/automations/stringstringstringstringstringstring \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "variables": {
      "property1": {
        "rawValue": {}
      },
      "property2": {
        "rawValue": {}
      }
    },
    "rowId": "stringstringstringstringstringstringstringstringstringstringstringstringstrin",
    "clientRequestToken": "stringstringstringstringstringst"
  }'
```

`POST /workbooks/{workbookId}/apps/{appId}/screens/{screenId}/automations/{automationId}`

 The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 

> Body parameter

```json
{
  "variables": {
    "property1": {
      "rawValue": {}
    },
    "property2": {
      "rawValue": {}
    }
  },
  "rowId": "stringstringstringstringstringstringstringstringstringstringstringstringstrin",
  "clientRequestToken": "stringstringstringstringstringst"
}
```

<h3 id="invokescreenautomation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workbookId|path|string|true|The ID of the workbook that contains the screen automation.|
|appId|path|string|true|The ID of the app that contains the screen automation.|
|screenId|path|string|true|The ID of the screen that contains the screen automation.|
|automationId|path|string|true|The ID of the automation action to be performed.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» variables|body|object|false| Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. Any variables defined in a screen are required to be passed in the call. |
|» » **additionalProperties**|body|[VariableValue](#schemavariablevalue)|false|The input variables to the app to be used by the InvokeScreenAutomation action request.|
|» rowId|body|string|false| The row ID for the automation if the automation is defined inside a block with source or list. |
|» clientRequestToken|body|string|false|<p> The request token for performing the automation action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will return the response of the previous call rather than performing the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>|

> Example responses

> 200 Response

```json
{
  "workbookCursor": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="invokescreenautomation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InvokeScreenAutomationResult](#schemainvokescreenautomationresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|AutomationExecutionException|[AutomationExecutionException](#schemaautomationexecutionexception)|
|487|487|AutomationExecutionTimeoutException|[AutomationExecutionTimeoutException](#schemaautomationexecutiontimeoutexception)|
|488|488|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|489|489|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTableColumns

<a id="opIdListTableColumns"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/workbooks/stringstringstringstringstringstring/tables/stringstringstringstringstringstring/columns \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workbooks/{workbookId}/tables/{tableId}/columns`

 The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook. 

<h3 id="listtablecolumns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workbookId|path|string|true|<p>The ID of the workbook that contains the table whose columns are being retrieved.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|tableId|path|string|true|<p>The ID of the table whose columns are being retrieved.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|nextToken|query|string|false|<p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "tableColumns": {},
  "nextToken": {},
  "workbookCursor": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listtablecolumns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTableColumnsResult](#schemalisttablecolumnsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTableRows

<a id="opIdListTableRows"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/workbooks/stringstringstringstringstringstring/tables/stringstringstringstringstringstring/rows/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "rowIds": [
      "stringstringstringstringstringstringstringstringstringstringstringstringstrin"
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /workbooks/{workbookId}/tables/{tableId}/rows/list`

 The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook. 

> Body parameter

```json
{
  "rowIds": [
    "stringstringstringstringstringstringstringstringstringstringstringstringstrin"
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listtablerows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workbookId|path|string|true|<p>The ID of the workbook that contains the table whose rows are being retrieved.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|tableId|path|string|true|<p>The ID of the table whose rows are being retrieved.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» rowIds|body|[[RowId](#schemarowid)]|false| This parameter is optional. If one or more row ids are specified in this list, then only the specified row ids are returned in the result. If no row ids are specified here, then all the rows in the table are returned. |
|» maxResults|body|integer|false|The maximum number of rows to return in each page of the results.|
|» nextToken|body|string|false|<p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>|

> Example responses

> 200 Response

```json
{
  "columnIds": {},
  "rows": {},
  "rowIdsNotFound": {},
  "nextToken": {},
  "workbookCursor": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listtablerows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTableRowsResult](#schemalisttablerowsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTables

<a id="opIdListTables"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/workbooks/stringstringstringstringstringstring/tables \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /workbooks/{workbookId}/tables`

 The ListTables API allows you to retrieve a list of all the tables in a workbook. 

<h3 id="listtables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workbookId|path|string|true|<p>The ID of the workbook whose tables are being retrieved.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|maxResults|query|integer|false|The maximum number of tables to return in each page of the results.|
|nextToken|query|string|false|<p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "tables": {},
  "nextToken": {},
  "workbookCursor": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listtables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTablesResult](#schemalisttablesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

 The ListTagsForResource API allows you to return a resource's tags. 

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The resource's Amazon Resource Name (ARN).|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResult](#schemalisttagsforresourceresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{resourceArn}`

 The TagResource API allows you to add tags to an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The resource's Amazon Resource Name (ARN).|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|A string to string map representing tags|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResult](#schematagresourceresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## QueryTableRows

<a id="opIdQueryTableRows"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/workbooks/stringstringstringstringstringstring/tables/stringstringstringstringstringstring/rows/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filterFormula": {
      "formula": {},
      "contextRowId": {}
    },
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /workbooks/{workbookId}/tables/{tableId}/rows/query`

 The QueryTableRows API allows you to use a filter formula to query for specific rows in a table. 

> Body parameter

```json
{
  "filterFormula": {
    "formula": {},
    "contextRowId": {}
  },
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="querytablerows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workbookId|path|string|true|<p>The ID of the workbook whose table rows are being queried.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|tableId|path|string|true|<p>The ID of the table whose rows are being queried.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» filterFormula|body|object|true| An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate. |
|» » formula|body|object|false|none|
|» » contextRowId|body|object|false|none|
|» maxResults|body|integer|false|The maximum number of rows to return in each page of the results.|
|» nextToken|body|string|false|<p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>|

> Example responses

> 200 Response

```json
{
  "columnIds": {},
  "rows": {},
  "nextToken": {},
  "workbookCursor": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="querytablerows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[QueryTableRowsResult](#schemaquerytablerowsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartTableDataImportJob

<a id="opIdStartTableDataImportJob"></a>

> Code samples

```bash
curl https://honeycode.us-east-1.amazonaws.com/workbooks/stringstringstringstringstringstring/tables/stringstringstringstringstringstring/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "dataSource": {
      "dataSourceConfig": {
        "dataSourceUrl": {}
      }
    },
    "dataFormat": "DELIMITED_TEXT",
    "importOptions": {
      "destinationOptions": {
        "columnMap": {
          "property1": {
            "columnIndex": {}
          },
          "property2": {
            "columnIndex": {}
          }
        }
      },
      "delimitedTextOptions": {
        "delimiter": {},
        "hasHeaderRow": {},
        "ignoreEmptyRows": {},
        "dataCharacterEncoding": {}
      }
    },
    "clientRequestToken": "stringstringstringstringstringst"
  }'
```

`POST /workbooks/{workbookId}/tables/{tableId}/import`

 The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API. 

> Body parameter

```json
{
  "dataSource": {
    "dataSourceConfig": {
      "dataSourceUrl": {}
    }
  },
  "dataFormat": "DELIMITED_TEXT",
  "importOptions": {
    "destinationOptions": {
      "columnMap": {
        "property1": {
          "columnIndex": {}
        },
        "property2": {
          "columnIndex": {}
        }
      }
    },
    "delimitedTextOptions": {
      "delimiter": {},
      "hasHeaderRow": {},
      "ignoreEmptyRows": {},
      "dataCharacterEncoding": {}
    }
  },
  "clientRequestToken": "stringstringstringstringstringst"
}
```

<h3 id="starttabledataimportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workbookId|path|string|true|<p>The ID of the workbook where the rows are being imported.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|tableId|path|string|true|<p>The ID of the table where the rows are being imported.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» dataSource|body|object|true|An object that has details about the source of the data that was submitted for import.|
|» » dataSourceConfig|body|object|false|none|
|» » » dataSourceUrl|body|object|false|none|
|» dataFormat|body|string|true| The format of the data that is being imported. Currently the only option supported is "DELIMITED_TEXT". |
|» importOptions|body|object|true|An object that contains the options specified by the sumitter of the import request.|
|» » destinationOptions|body|object|false|none|
|» » » columnMap|body|object|false|none|
|» » » » **additionalProperties**|body|[SourceDataColumnProperties](#schemasourcedatacolumnproperties)|false|An object that contains the properties for importing data to a specific column in a table.|
|» » delimitedTextOptions|body|object|false|none|
|» » » delimiter|body|object|true|none|
|» » » hasHeaderRow|body|object|false|none|
|» » » ignoreEmptyRows|body|object|false|none|
|» » » dataCharacterEncoding|body|object|false|none|
|» clientRequestToken|body|string|true|<p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» dataFormat|DELIMITED_TEXT|

> Example responses

> 200 Response

```json
{
  "jobId": {},
  "jobStatus": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="starttabledataimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartTableDataImportJobResult](#schemastarttabledataimportjobresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|
|486|486|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|487|487|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://honeycode.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

 The UntagResource API allows you to removes tags from an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The resource's Amazon Resource Name (ARN).|
|tagKeys|query|[[TagKey](#schematagkey)]|true|A list of tag keys to remove from the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResult](#schemauntagresourceresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|RequestTimeoutException|[RequestTimeoutException](#schemarequesttimeoutexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchCreateTableRowsResult">BatchCreateTableRowsResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatetablerowsresult"></a>
<a id="schema_BatchCreateTableRowsResult"></a>
<a id="tocSbatchcreatetablerowsresult"></a>
<a id="tocsbatchcreatetablerowsresult"></a>

```json
{
  "workbookCursor": {},
  "createdRows": {
    "property1": "stringstringstringstringstringstringstringstringstringstringstringstringstrin",
    "property2": "stringstringstringstringstringstringstringstringstringstringstringstringstrin"
  },
  "failedBatchItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workbookCursor|object|true|none|none|
|createdRows|object|true|none|none|
|failedBatchItems|object|false|none|none|

<h2 id="tocS_CreateRowData">CreateRowData</h2>
<!-- backwards compatibility -->
<a id="schemacreaterowdata"></a>
<a id="schema_CreateRowData"></a>
<a id="tocScreaterowdata"></a>
<a id="tocscreaterowdata"></a>

```json
{
  "batchItemId": {},
  "cellsToCreate": {
    "property1": {
      "fact": {},
      "facts": {}
    },
    "property2": {
      "fact": {},
      "facts": {}
    }
  }
}
```

 Data needed to create a single row in a table as part of the BatchCreateTableRows request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchItemId|object|true|none|none|
|cellsToCreate|object|true|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_RequestTimeoutException">RequestTimeoutException</h2>
<!-- backwards compatibility -->
<a id="schemarequesttimeoutexception"></a>
<a id="schema_RequestTimeoutException"></a>
<a id="tocSrequesttimeoutexception"></a>
<a id="tocsrequesttimeoutexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_BatchDeleteTableRowsResult">BatchDeleteTableRowsResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletetablerowsresult"></a>
<a id="schema_BatchDeleteTableRowsResult"></a>
<a id="tocSbatchdeletetablerowsresult"></a>
<a id="tocsbatchdeletetablerowsresult"></a>

```json
{
  "workbookCursor": {},
  "failedBatchItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workbookCursor|object|true|none|none|
|failedBatchItems|object|false|none|none|

<h2 id="tocS_RowId">RowId</h2>
<!-- backwards compatibility -->
<a id="schemarowid"></a>
<a id="schema_RowId"></a>
<a id="tocSrowid"></a>
<a id="tocsrowid"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstringstringstrin"
```

<h2 id="tocS_BatchUpdateTableRowsResult">BatchUpdateTableRowsResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatetablerowsresult"></a>
<a id="schema_BatchUpdateTableRowsResult"></a>
<a id="tocSbatchupdatetablerowsresult"></a>
<a id="tocsbatchupdatetablerowsresult"></a>

```json
{
  "workbookCursor": {},
  "failedBatchItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workbookCursor|object|true|none|none|
|failedBatchItems|object|false|none|none|

<h2 id="tocS_UpdateRowData">UpdateRowData</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterowdata"></a>
<a id="schema_UpdateRowData"></a>
<a id="tocSupdaterowdata"></a>
<a id="tocsupdaterowdata"></a>

```json
{
  "rowId": {},
  "cellsToUpdate": {
    "property1": {
      "fact": {},
      "facts": {}
    },
    "property2": {
      "fact": {},
      "facts": {}
    }
  }
}
```

 Data needed to create a single row in a table as part of the BatchCreateTableRows request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rowId|object|true|none|none|
|cellsToUpdate|object|true|none|none|

<h2 id="tocS_BatchUpsertTableRowsResult">BatchUpsertTableRowsResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchupserttablerowsresult"></a>
<a id="schema_BatchUpsertTableRowsResult"></a>
<a id="tocSbatchupserttablerowsresult"></a>
<a id="tocsbatchupserttablerowsresult"></a>

```json
{
  "rows": {
    "property1": {
      "rowIds": {},
      "upsertAction": {}
    },
    "property2": {
      "rowIds": {},
      "upsertAction": {}
    }
  },
  "workbookCursor": {},
  "failedBatchItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|object|true|none|none|
|workbookCursor|object|true|none|none|
|failedBatchItems|object|false|none|none|

<h2 id="tocS_UpsertRowData">UpsertRowData</h2>
<!-- backwards compatibility -->
<a id="schemaupsertrowdata"></a>
<a id="schema_UpsertRowData"></a>
<a id="tocSupsertrowdata"></a>
<a id="tocsupsertrowdata"></a>

```json
{
  "batchItemId": {},
  "filter": {
    "formula": {},
    "contextRowId": {}
  },
  "cellsToUpdate": {
    "property1": {
      "fact": {},
      "facts": {}
    },
    "property2": {
      "fact": {},
      "facts": {}
    }
  }
}
```

 Data needed to upsert rows in a table as part of a single item in the BatchUpsertTableRows request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchItemId|object|true|none|none|
|filter|object|true|none|none|
|cellsToUpdate|object|true|none|none|

<h2 id="tocS_DescribeTableDataImportJobResult">DescribeTableDataImportJobResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribetabledataimportjobresult"></a>
<a id="schema_DescribeTableDataImportJobResult"></a>
<a id="tocSdescribetabledataimportjobresult"></a>
<a id="tocsdescribetabledataimportjobresult"></a>

```json
{
  "jobStatus": {},
  "message": {},
  "jobMetadata": {
    "submitter": {
      "email": {},
      "userArn": {}
    },
    "submitTime": {},
    "importOptions": {
      "destinationOptions": {
        "columnMap": {
          "property1": {
            "columnIndex": {}
          },
          "property2": {
            "columnIndex": {}
          }
        }
      },
      "delimitedTextOptions": {
        "delimiter": {},
        "hasHeaderRow": {},
        "ignoreEmptyRows": {},
        "dataCharacterEncoding": {}
      }
    },
    "dataSource": {
      "dataSourceConfig": {
        "dataSourceUrl": {}
      }
    }
  },
  "errorCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobStatus|object|true|none|none|
|message|object|true|none|none|
|jobMetadata|object|true|none|none|
|errorCode|object|false|none|none|

<h2 id="tocS_GetScreenDataResult">GetScreenDataResult</h2>
<!-- backwards compatibility -->
<a id="schemagetscreendataresult"></a>
<a id="schema_GetScreenDataResult"></a>
<a id="tocSgetscreendataresult"></a>
<a id="tocsgetscreendataresult"></a>

```json
{
  "results": {
    "property1": {
      "headers": {},
      "rows": {}
    },
    "property2": {
      "headers": {},
      "rows": {}
    }
  },
  "workbookCursor": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|true|none|none|
|workbookCursor|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_VariableValue">VariableValue</h2>
<!-- backwards compatibility -->
<a id="schemavariablevalue"></a>
<a id="schema_VariableValue"></a>
<a id="tocSvariablevalue"></a>
<a id="tocsvariablevalue"></a>

```json
{
  "rawValue": {}
}
```

The input variables to the app to be used by the InvokeScreenAutomation action request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rawValue|object|true|none|none|

<h2 id="tocS_InvokeScreenAutomationResult">InvokeScreenAutomationResult</h2>
<!-- backwards compatibility -->
<a id="schemainvokescreenautomationresult"></a>
<a id="schema_InvokeScreenAutomationResult"></a>
<a id="tocSinvokescreenautomationresult"></a>
<a id="tocsinvokescreenautomationresult"></a>

```json
{
  "workbookCursor": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workbookCursor|object|true|none|none|

<h2 id="tocS_AutomationExecutionException">AutomationExecutionException</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutionexception"></a>
<a id="schema_AutomationExecutionException"></a>
<a id="tocSautomationexecutionexception"></a>
<a id="tocsautomationexecutionexception"></a>

```json
null
```

<h2 id="tocS_AutomationExecutionTimeoutException">AutomationExecutionTimeoutException</h2>
<!-- backwards compatibility -->
<a id="schemaautomationexecutiontimeoutexception"></a>
<a id="schema_AutomationExecutionTimeoutException"></a>
<a id="tocSautomationexecutiontimeoutexception"></a>
<a id="tocsautomationexecutiontimeoutexception"></a>

```json
null
```

<h2 id="tocS_ListTableColumnsResult">ListTableColumnsResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttablecolumnsresult"></a>
<a id="schema_ListTableColumnsResult"></a>
<a id="tocSlisttablecolumnsresult"></a>
<a id="tocslisttablecolumnsresult"></a>

```json
{
  "tableColumns": {},
  "nextToken": {},
  "workbookCursor": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tableColumns|object|true|none|none|
|nextToken|object|false|none|none|
|workbookCursor|object|false|none|none|

<h2 id="tocS_ListTableRowsResult">ListTableRowsResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttablerowsresult"></a>
<a id="schema_ListTableRowsResult"></a>
<a id="tocSlisttablerowsresult"></a>
<a id="tocslisttablerowsresult"></a>

```json
{
  "columnIds": {},
  "rows": {},
  "rowIdsNotFound": {},
  "nextToken": {},
  "workbookCursor": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnIds|object|true|none|none|
|rows|object|true|none|none|
|rowIdsNotFound|object|false|none|none|
|nextToken|object|false|none|none|
|workbookCursor|object|true|none|none|

<h2 id="tocS_ListTablesResult">ListTablesResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttablesresult"></a>
<a id="schema_ListTablesResult"></a>
<a id="tocSlisttablesresult"></a>
<a id="tocslisttablesresult"></a>

```json
{
  "tables": {},
  "nextToken": {},
  "workbookCursor": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tables|object|true|none|none|
|nextToken|object|false|none|none|
|workbookCursor|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResult">ListTagsForResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresult"></a>
<a id="schema_ListTagsForResourceResult"></a>
<a id="tocSlisttagsforresourceresult"></a>
<a id="tocslisttagsforresourceresult"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_QueryTableRowsResult">QueryTableRowsResult</h2>
<!-- backwards compatibility -->
<a id="schemaquerytablerowsresult"></a>
<a id="schema_QueryTableRowsResult"></a>
<a id="tocSquerytablerowsresult"></a>
<a id="tocsquerytablerowsresult"></a>

```json
{
  "columnIds": {},
  "rows": {},
  "nextToken": {},
  "workbookCursor": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnIds|object|true|none|none|
|rows|object|true|none|none|
|nextToken|object|false|none|none|
|workbookCursor|object|true|none|none|

<h2 id="tocS_Formula">Formula</h2>
<!-- backwards compatibility -->
<a id="schemaformula"></a>
<a id="schema_Formula"></a>
<a id="tocSformula"></a>
<a id="tocsformula"></a>

```json
"password"
```

<h2 id="tocS_StartTableDataImportJobResult">StartTableDataImportJobResult</h2>
<!-- backwards compatibility -->
<a id="schemastarttabledataimportjobresult"></a>
<a id="schema_StartTableDataImportJobResult"></a>
<a id="tocSstarttabledataimportjobresult"></a>
<a id="tocsstarttabledataimportjobresult"></a>

```json
{
  "jobId": {},
  "jobStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|jobStatus|object|true|none|none|

<h2 id="tocS_ImportDataSourceConfig">ImportDataSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaimportdatasourceconfig"></a>
<a id="schema_ImportDataSourceConfig"></a>
<a id="tocSimportdatasourceconfig"></a>
<a id="tocsimportdatasourceconfig"></a>

```json
{
  "dataSourceUrl": {}
}
```

 An object that contains the configuration parameters for the data source of an import request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSourceUrl|object|false|none|none|

<h2 id="tocS_DestinationOptions">DestinationOptions</h2>
<!-- backwards compatibility -->
<a id="schemadestinationoptions"></a>
<a id="schema_DestinationOptions"></a>
<a id="tocSdestinationoptions"></a>
<a id="tocsdestinationoptions"></a>

```json
{
  "columnMap": {
    "property1": {
      "columnIndex": {}
    },
    "property2": {
      "columnIndex": {}
    }
  }
}
```

An object that contains the options relating to the destination of the import request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnMap|object|false|none|none|

<h2 id="tocS_DelimitedTextImportOptions">DelimitedTextImportOptions</h2>
<!-- backwards compatibility -->
<a id="schemadelimitedtextimportoptions"></a>
<a id="schema_DelimitedTextImportOptions"></a>
<a id="tocSdelimitedtextimportoptions"></a>
<a id="tocsdelimitedtextimportoptions"></a>

```json
{
  "delimiter": {},
  "hasHeaderRow": {},
  "ignoreEmptyRows": {},
  "dataCharacterEncoding": {}
}
```

 An object that contains the options relating to parsing delimited text as part of an import request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delimiter|object|true|none|none|
|hasHeaderRow|object|false|none|none|
|ignoreEmptyRows|object|false|none|none|
|dataCharacterEncoding|object|false|none|none|

<h2 id="tocS_TagResourceResult">TagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresult"></a>
<a id="schema_TagResourceResult"></a>
<a id="tocStagresourceresult"></a>
<a id="tocstagresourceresult"></a>

```json
{}
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_UntagResourceResult">UntagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresult"></a>
<a id="schema_UntagResourceResult"></a>
<a id="tocSuntagresourceresult"></a>
<a id="tocsuntagresourceresult"></a>

```json
{}
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_AwsUserArn">AwsUserArn</h2>
<!-- backwards compatibility -->
<a id="schemaawsuserarn"></a>
<a id="schema_AwsUserArn"></a>
<a id="tocSawsuserarn"></a>
<a id="tocsawsuserarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_CreateRowDataList">CreateRowDataList</h2>
<!-- backwards compatibility -->
<a id="schemacreaterowdatalist"></a>
<a id="schema_CreateRowDataList"></a>
<a id="tocScreaterowdatalist"></a>
<a id="tocscreaterowdatalist"></a>

```json
[
  {
    "batchItemId": {},
    "cellsToCreate": {
      "property1": {
        "fact": {},
        "facts": {}
      },
      "property2": {
        "fact": {},
        "facts": {}
      }
    }
  }
]
```

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"stringstringstringstringstringst"
```

<h2 id="tocS_BatchCreateTableRowsRequest">BatchCreateTableRowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatetablerowsrequest"></a>
<a id="schema_BatchCreateTableRowsRequest"></a>
<a id="tocSbatchcreatetablerowsrequest"></a>
<a id="tocsbatchcreatetablerowsrequest"></a>

```json
{
  "rowsToCreate": {},
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rowsToCreate|object|true|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_WorkbookCursor">WorkbookCursor</h2>
<!-- backwards compatibility -->
<a id="schemaworkbookcursor"></a>
<a id="schema_WorkbookCursor"></a>
<a id="tocSworkbookcursor"></a>
<a id="tocsworkbookcursor"></a>

```json
0
```

<h2 id="tocS_CreatedRowsMap">CreatedRowsMap</h2>
<!-- backwards compatibility -->
<a id="schemacreatedrowsmap"></a>
<a id="schema_CreatedRowsMap"></a>
<a id="tocScreatedrowsmap"></a>
<a id="tocscreatedrowsmap"></a>

```json
{
  "property1": "stringstringstringstringstringstringstringstringstringstringstringstringstrin",
  "property2": "stringstringstringstringstringstringstringstringstringstringstringstringstrin"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RowId](#schemarowid)|false|none|none|

<h2 id="tocS_FailedBatchItems">FailedBatchItems</h2>
<!-- backwards compatibility -->
<a id="schemafailedbatchitems"></a>
<a id="schema_FailedBatchItems"></a>
<a id="tocSfailedbatchitems"></a>
<a id="tocsfailedbatchitems"></a>

```json
[
  {
    "id": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_RowIdList">RowIdList</h2>
<!-- backwards compatibility -->
<a id="schemarowidlist"></a>
<a id="schema_RowIdList"></a>
<a id="tocSrowidlist"></a>
<a id="tocsrowidlist"></a>

```json
[
  "stringstringstringstringstringstringstringstringstringstringstringstringstrin"
]
```

<h2 id="tocS_BatchDeleteTableRowsRequest">BatchDeleteTableRowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletetablerowsrequest"></a>
<a id="schema_BatchDeleteTableRowsRequest"></a>
<a id="tocSbatchdeletetablerowsrequest"></a>
<a id="tocsbatchdeletetablerowsrequest"></a>

```json
{
  "rowIds": {},
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rowIds|object|true|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_BatchErrorMessage">BatchErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemabatcherrormessage"></a>
<a id="schema_BatchErrorMessage"></a>
<a id="tocSbatcherrormessage"></a>
<a id="tocsbatcherrormessage"></a>

```json
"string"
```

<h2 id="tocS_BatchItemId">BatchItemId</h2>
<!-- backwards compatibility -->
<a id="schemabatchitemid"></a>
<a id="schema_BatchItemId"></a>
<a id="tocSbatchitemid"></a>
<a id="tocsbatchitemid"></a>

```json
"string"
```

<h2 id="tocS_UpdateRowDataList">UpdateRowDataList</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterowdatalist"></a>
<a id="schema_UpdateRowDataList"></a>
<a id="tocSupdaterowdatalist"></a>
<a id="tocsupdaterowdatalist"></a>

```json
[
  {
    "rowId": {},
    "cellsToUpdate": {
      "property1": {
        "fact": {},
        "facts": {}
      },
      "property2": {
        "fact": {},
        "facts": {}
      }
    }
  }
]
```

<h2 id="tocS_BatchUpdateTableRowsRequest">BatchUpdateTableRowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatetablerowsrequest"></a>
<a id="schema_BatchUpdateTableRowsRequest"></a>
<a id="tocSbatchupdatetablerowsrequest"></a>
<a id="tocsbatchupdatetablerowsrequest"></a>

```json
{
  "rowsToUpdate": {},
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rowsToUpdate|object|true|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_UpsertRowDataList">UpsertRowDataList</h2>
<!-- backwards compatibility -->
<a id="schemaupsertrowdatalist"></a>
<a id="schema_UpsertRowDataList"></a>
<a id="tocSupsertrowdatalist"></a>
<a id="tocsupsertrowdatalist"></a>

```json
[
  {
    "batchItemId": {},
    "filter": {
      "formula": {},
      "contextRowId": {}
    },
    "cellsToUpdate": {
      "property1": {
        "fact": {},
        "facts": {}
      },
      "property2": {
        "fact": {},
        "facts": {}
      }
    }
  }
]
```

<h2 id="tocS_BatchUpsertTableRowsRequest">BatchUpsertTableRowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupserttablerowsrequest"></a>
<a id="schema_BatchUpsertTableRowsRequest"></a>
<a id="tocSbatchupserttablerowsrequest"></a>
<a id="tocsbatchupserttablerowsrequest"></a>

```json
{
  "rowsToUpsert": {},
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rowsToUpsert|object|true|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_UpsertRowsResultMap">UpsertRowsResultMap</h2>
<!-- backwards compatibility -->
<a id="schemaupsertrowsresultmap"></a>
<a id="schema_UpsertRowsResultMap"></a>
<a id="tocSupsertrowsresultmap"></a>
<a id="tocsupsertrowsresultmap"></a>

```json
{
  "property1": {
    "rowIds": {},
    "upsertAction": {}
  },
  "property2": {
    "rowIds": {},
    "upsertAction": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[UpsertRowsResult](#schemaupsertrowsresult)|false|none| An object that represents the result of a single upsert row request. |

<h2 id="tocS_Format">Format</h2>
<!-- backwards compatibility -->
<a id="schemaformat"></a>
<a id="schema_Format"></a>
<a id="tocSformat"></a>
<a id="tocsformat"></a>

```json
"AUTO"
```

<h2 id="tocS_RawValue">RawValue</h2>
<!-- backwards compatibility -->
<a id="schemarawvalue"></a>
<a id="schema_RawValue"></a>
<a id="tocSrawvalue"></a>
<a id="tocsrawvalue"></a>

```json
"string"
```

<h2 id="tocS_FormattedValue">FormattedValue</h2>
<!-- backwards compatibility -->
<a id="schemaformattedvalue"></a>
<a id="schema_FormattedValue"></a>
<a id="tocSformattedvalue"></a>
<a id="tocsformattedvalue"></a>

```json
"string"
```

<h2 id="tocS_FormattedValuesList">FormattedValuesList</h2>
<!-- backwards compatibility -->
<a id="schemaformattedvalueslist"></a>
<a id="schema_FormattedValuesList"></a>
<a id="tocSformattedvalueslist"></a>
<a id="tocsformattedvalueslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Cell">Cell</h2>
<!-- backwards compatibility -->
<a id="schemacell"></a>
<a id="schema_Cell"></a>
<a id="tocScell"></a>
<a id="tocscell"></a>

```json
{
  "formula": {},
  "format": {},
  "rawValue": {},
  "formattedValue": {},
  "formattedValues": {}
}
```

An object that represents a single cell in a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formula|object|false|none|none|
|format|object|false|none|none|
|rawValue|object|false|none|none|
|formattedValue|object|false|none|none|
|formattedValues|object|false|none|none|

<h2 id="tocS_Fact">Fact</h2>
<!-- backwards compatibility -->
<a id="schemafact"></a>
<a id="schema_Fact"></a>
<a id="tocSfact"></a>
<a id="tocsfact"></a>

```json
"password"
```

<h2 id="tocS_FactList">FactList</h2>
<!-- backwards compatibility -->
<a id="schemafactlist"></a>
<a id="schema_FactList"></a>
<a id="tocSfactlist"></a>
<a id="tocsfactlist"></a>

```json
[
  "password"
]
```

<h2 id="tocS_CellInput">CellInput</h2>
<!-- backwards compatibility -->
<a id="schemacellinput"></a>
<a id="schema_CellInput"></a>
<a id="tocScellinput"></a>
<a id="tocscellinput"></a>

```json
{
  "fact": {},
  "facts": {}
}
```

<p> CellInput object contains the data needed to create or update cells in a table. </p> <note> <p> CellInput object has only a facts field or a fact field, but not both. A 400 bad request will be thrown if both fact and facts field are present. </p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fact|object|false|none|none|
|facts|object|false|none|none|

<h2 id="tocS_Cells">Cells</h2>
<!-- backwards compatibility -->
<a id="schemacells"></a>
<a id="schema_Cells"></a>
<a id="tocScells"></a>
<a id="tocscells"></a>

```json
[
  {
    "formula": {},
    "format": {},
    "rawValue": {},
    "formattedValue": {},
    "formattedValues": {}
  }
]
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"password"
```

<h2 id="tocS_ColumnMetadata">ColumnMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacolumnmetadata"></a>
<a id="schema_ColumnMetadata"></a>
<a id="tocScolumnmetadata"></a>
<a id="tocscolumnmetadata"></a>

```json
{
  "name": {},
  "format": {}
}
```

Metadata for column in the table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|format|object|true|none|none|

<h2 id="tocS_RowDataInput">RowDataInput</h2>
<!-- backwards compatibility -->
<a id="schemarowdatainput"></a>
<a id="schema_RowDataInput"></a>
<a id="tocSrowdatainput"></a>
<a id="tocsrowdatainput"></a>

```json
{
  "property1": {
    "fact": {},
    "facts": {}
  },
  "property2": {
    "fact": {},
    "facts": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[CellInput](#schemacellinput)|false|none|<p> CellInput object contains the data needed to create or update cells in a table. </p> <note> <p> CellInput object has only a facts field or a fact field, but not both. A 400 bad request will be thrown if both fact and facts field are present. </p> </note>|

<h2 id="tocS_DataItem">DataItem</h2>
<!-- backwards compatibility -->
<a id="schemadataitem"></a>
<a id="schema_DataItem"></a>
<a id="tocSdataitem"></a>
<a id="tocsdataitem"></a>

```json
{
  "overrideFormat": {},
  "rawValue": {},
  "formattedValue": {}
}
```

The data in a particular data cell defined on the screen.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overrideFormat|object|false|none|none|
|rawValue|object|false|none|none|
|formattedValue|object|false|none|none|

<h2 id="tocS_DataItems">DataItems</h2>
<!-- backwards compatibility -->
<a id="schemadataitems"></a>
<a id="schema_DataItems"></a>
<a id="tocSdataitems"></a>
<a id="tocsdataitems"></a>

```json
[
  {
    "overrideFormat": {},
    "rawValue": {},
    "formattedValue": {}
  }
]
```

<h2 id="tocS_DelimitedTextDelimiter">DelimitedTextDelimiter</h2>
<!-- backwards compatibility -->
<a id="schemadelimitedtextdelimiter"></a>
<a id="schema_DelimitedTextDelimiter"></a>
<a id="tocSdelimitedtextdelimiter"></a>
<a id="tocsdelimitedtextdelimiter"></a>

```json
"s"
```

<h2 id="tocS_HasHeaderRow">HasHeaderRow</h2>
<!-- backwards compatibility -->
<a id="schemahasheaderrow"></a>
<a id="schema_HasHeaderRow"></a>
<a id="tocShasheaderrow"></a>
<a id="tocshasheaderrow"></a>

```json
true
```

<h2 id="tocS_IgnoreEmptyRows">IgnoreEmptyRows</h2>
<!-- backwards compatibility -->
<a id="schemaignoreemptyrows"></a>
<a id="schema_IgnoreEmptyRows"></a>
<a id="tocSignoreemptyrows"></a>
<a id="tocsignoreemptyrows"></a>

```json
true
```

<h2 id="tocS_ImportDataCharacterEncoding">ImportDataCharacterEncoding</h2>
<!-- backwards compatibility -->
<a id="schemaimportdatacharacterencoding"></a>
<a id="schema_ImportDataCharacterEncoding"></a>
<a id="tocSimportdatacharacterencoding"></a>
<a id="tocsimportdatacharacterencoding"></a>

```json
"UTF-8"
```

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"string"
```

<h2 id="tocS_DescribeTableDataImportJobRequest">DescribeTableDataImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetabledataimportjobrequest"></a>
<a id="schema_DescribeTableDataImportJobRequest"></a>
<a id="tocSdescribetabledataimportjobrequest"></a>
<a id="tocsdescribetabledataimportjobrequest"></a>

```json
{}
```

<h2 id="tocS_TableDataImportJobStatus">TableDataImportJobStatus</h2>
<!-- backwards compatibility -->
<a id="schematabledataimportjobstatus"></a>
<a id="schema_TableDataImportJobStatus"></a>
<a id="tocStabledataimportjobstatus"></a>
<a id="tocstabledataimportjobstatus"></a>

```json
"SUBMITTED"
```

<h2 id="tocS_TableDataImportJobMessage">TableDataImportJobMessage</h2>
<!-- backwards compatibility -->
<a id="schematabledataimportjobmessage"></a>
<a id="schema_TableDataImportJobMessage"></a>
<a id="tocStabledataimportjobmessage"></a>
<a id="tocstabledataimportjobmessage"></a>

```json
"string"
```

<h2 id="tocS_TableDataImportJobMetadata">TableDataImportJobMetadata</h2>
<!-- backwards compatibility -->
<a id="schematabledataimportjobmetadata"></a>
<a id="schema_TableDataImportJobMetadata"></a>
<a id="tocStabledataimportjobmetadata"></a>
<a id="tocstabledataimportjobmetadata"></a>

```json
{
  "submitter": {
    "email": {},
    "userArn": {}
  },
  "submitTime": {},
  "importOptions": {
    "destinationOptions": {
      "columnMap": {
        "property1": {
          "columnIndex": {}
        },
        "property2": {
          "columnIndex": {}
        }
      }
    },
    "delimitedTextOptions": {
      "delimiter": {},
      "hasHeaderRow": {},
      "ignoreEmptyRows": {},
      "dataCharacterEncoding": {}
    }
  },
  "dataSource": {
    "dataSourceConfig": {
      "dataSourceUrl": {}
    }
  }
}
```

The metadata associated with the table data import job that was submitted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|submitter|object|true|none|none|
|submitTime|object|true|none|none|
|importOptions|object|true|none|none|
|dataSource|object|true|none|none|

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"ACCESS_DENIED"
```

<h2 id="tocS_ImportColumnMap">ImportColumnMap</h2>
<!-- backwards compatibility -->
<a id="schemaimportcolumnmap"></a>
<a id="schema_ImportColumnMap"></a>
<a id="tocSimportcolumnmap"></a>
<a id="tocsimportcolumnmap"></a>

```json
{
  "property1": {
    "columnIndex": {}
  },
  "property2": {
    "columnIndex": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SourceDataColumnProperties](#schemasourcedatacolumnproperties)|false|none|An object that contains the properties for importing data to a specific column in a table.|

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"password"
```

<h2 id="tocS_FailedBatchItem">FailedBatchItem</h2>
<!-- backwards compatibility -->
<a id="schemafailedbatchitem"></a>
<a id="schema_FailedBatchItem"></a>
<a id="tocSfailedbatchitem"></a>
<a id="tocsfailedbatchitem"></a>

```json
{
  "id": {},
  "errorMessage": {}
}
```

 A single item in a batch that failed to perform the intended action because of an error preventing it from succeeding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|errorMessage|object|true|none|none|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "formula": {},
  "contextRowId": {}
}
```

 An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formula|object|true|none|none|
|contextRowId|object|false|none|none|

<h2 id="tocS_VariableValueMap">VariableValueMap</h2>
<!-- backwards compatibility -->
<a id="schemavariablevaluemap"></a>
<a id="schema_VariableValueMap"></a>
<a id="tocSvariablevaluemap"></a>
<a id="tocsvariablevaluemap"></a>

```json
{
  "property1": {
    "rawValue": {}
  },
  "property2": {
    "rawValue": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[VariableValue](#schemavariablevalue)|false|none|The input variables to the app to be used by the InvokeScreenAutomation action request.|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_GetScreenDataRequest">GetScreenDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetscreendatarequest"></a>
<a id="schema_GetScreenDataRequest"></a>
<a id="tocSgetscreendatarequest"></a>
<a id="tocsgetscreendatarequest"></a>

```json
{
  "workbookId": {},
  "appId": {},
  "screenId": {},
  "variables": {
    "property1": {
      "rawValue": {}
    },
    "property2": {
      "rawValue": {}
    }
  },
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workbookId|object|true|none|none|
|appId|object|true|none|none|
|screenId|object|true|none|none|
|variables|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ResultSetMap">ResultSetMap</h2>
<!-- backwards compatibility -->
<a id="schemaresultsetmap"></a>
<a id="schema_ResultSetMap"></a>
<a id="tocSresultsetmap"></a>
<a id="tocsresultsetmap"></a>

```json
{
  "property1": {
    "headers": {},
    "rows": {}
  },
  "property2": {
    "headers": {},
    "rows": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ResultSet](#schemaresultset)|false|none| ResultSet contains the results of the request for a single block or list defined on the screen. |

<h2 id="tocS_SourceDataColumnProperties">SourceDataColumnProperties</h2>
<!-- backwards compatibility -->
<a id="schemasourcedatacolumnproperties"></a>
<a id="schema_SourceDataColumnProperties"></a>
<a id="tocSsourcedatacolumnproperties"></a>
<a id="tocssourcedatacolumnproperties"></a>

```json
{
  "columnIndex": {}
}
```

An object that contains the properties for importing data to a specific column in a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnIndex|object|false|none|none|

<h2 id="tocS_ImportDataSource">ImportDataSource</h2>
<!-- backwards compatibility -->
<a id="schemaimportdatasource"></a>
<a id="schema_ImportDataSource"></a>
<a id="tocSimportdatasource"></a>
<a id="tocsimportdatasource"></a>

```json
{
  "dataSourceConfig": {
    "dataSourceUrl": {}
  }
}
```

An object that has details about the source of the data that was submitted for import.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSourceConfig|object|true|none|none|

<h2 id="tocS_SecureURL">SecureURL</h2>
<!-- backwards compatibility -->
<a id="schemasecureurl"></a>
<a id="schema_SecureURL"></a>
<a id="tocSsecureurl"></a>
<a id="tocssecureurl"></a>

```json
"password"
```

<h2 id="tocS_ImportJobSubmitter">ImportJobSubmitter</h2>
<!-- backwards compatibility -->
<a id="schemaimportjobsubmitter"></a>
<a id="schema_ImportJobSubmitter"></a>
<a id="tocSimportjobsubmitter"></a>
<a id="tocsimportjobsubmitter"></a>

```json
{
  "email": {},
  "userArn": {}
}
```

An object that contains the attributes of the submitter of the import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|object|false|none|none|
|userArn|object|false|none|none|

<h2 id="tocS_ImportOptions">ImportOptions</h2>
<!-- backwards compatibility -->
<a id="schemaimportoptions"></a>
<a id="schema_ImportOptions"></a>
<a id="tocSimportoptions"></a>
<a id="tocsimportoptions"></a>

```json
{
  "destinationOptions": {
    "columnMap": {
      "property1": {
        "columnIndex": {}
      },
      "property2": {
        "columnIndex": {}
      }
    }
  },
  "delimitedTextOptions": {
    "delimiter": {},
    "hasHeaderRow": {},
    "ignoreEmptyRows": {},
    "dataCharacterEncoding": {}
  }
}
```

An object that contains the options specified by the sumitter of the import request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationOptions|object|false|none|none|
|delimitedTextOptions|object|false|none|none|

<h2 id="tocS_ImportSourceDataFormat">ImportSourceDataFormat</h2>
<!-- backwards compatibility -->
<a id="schemaimportsourcedataformat"></a>
<a id="schema_ImportSourceDataFormat"></a>
<a id="tocSimportsourcedataformat"></a>
<a id="tocsimportsourcedataformat"></a>

```json
"DELIMITED_TEXT"
```

<h2 id="tocS_InvokeScreenAutomationRequest">InvokeScreenAutomationRequest</h2>
<!-- backwards compatibility -->
<a id="schemainvokescreenautomationrequest"></a>
<a id="schema_InvokeScreenAutomationRequest"></a>
<a id="tocSinvokescreenautomationrequest"></a>
<a id="tocsinvokescreenautomationrequest"></a>

```json
{
  "variables": {
    "property1": {
      "rawValue": {}
    },
    "property2": {
      "rawValue": {}
    }
  },
  "rowId": {},
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variables|object|false|none|none|
|rowId|object|false|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_ListTableColumnsRequest">ListTableColumnsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttablecolumnsrequest"></a>
<a id="schema_ListTableColumnsRequest"></a>
<a id="tocSlisttablecolumnsrequest"></a>
<a id="tocslisttablecolumnsrequest"></a>

```json
{}
```

<h2 id="tocS_TableColumns">TableColumns</h2>
<!-- backwards compatibility -->
<a id="schematablecolumns"></a>
<a id="schema_TableColumns"></a>
<a id="tocStablecolumns"></a>
<a id="tocstablecolumns"></a>

```json
[
  {
    "tableColumnId": {},
    "tableColumnName": {},
    "format": {}
  }
]
```

<h2 id="tocS_ListTableRowsRequest">ListTableRowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttablerowsrequest"></a>
<a id="schema_ListTableRowsRequest"></a>
<a id="tocSlisttablerowsrequest"></a>
<a id="tocslisttablerowsrequest"></a>

```json
{
  "rowIds": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rowIds|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ResourceIds">ResourceIds</h2>
<!-- backwards compatibility -->
<a id="schemaresourceids"></a>
<a id="schema_ResourceIds"></a>
<a id="tocSresourceids"></a>
<a id="tocsresourceids"></a>

```json
[
  "stringstringstringstringstringstring"
]
```

<h2 id="tocS_TableRows">TableRows</h2>
<!-- backwards compatibility -->
<a id="schematablerows"></a>
<a id="schema_TableRows"></a>
<a id="tocStablerows"></a>
<a id="tocstablerows"></a>

```json
[
  {
    "rowId": {},
    "cells": {}
  }
]
```

<h2 id="tocS_ListTablesRequest">ListTablesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttablesrequest"></a>
<a id="schema_ListTablesRequest"></a>
<a id="tocSlisttablesrequest"></a>
<a id="tocslisttablesrequest"></a>

```json
{}
```

<h2 id="tocS_Tables">Tables</h2>
<!-- backwards compatibility -->
<a id="schematables"></a>
<a id="schema_Tables"></a>
<a id="tocStables"></a>
<a id="tocstables"></a>

```json
[
  {
    "tableId": {},
    "tableName": {}
  }
]
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_TagsMap">TagsMap</h2>
<!-- backwards compatibility -->
<a id="schematagsmap"></a>
<a id="schema_TagsMap"></a>
<a id="tocStagsmap"></a>
<a id="tocstagsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

A string to string map representing tags

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_QueryTableRowsRequest">QueryTableRowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquerytablerowsrequest"></a>
<a id="schema_QueryTableRowsRequest"></a>
<a id="tocSquerytablerowsrequest"></a>
<a id="tocsquerytablerowsrequest"></a>

```json
{
  "filterFormula": {
    "formula": {},
    "contextRowId": {}
  },
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterFormula|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ResultHeader">ResultHeader</h2>
<!-- backwards compatibility -->
<a id="schemaresultheader"></a>
<a id="schema_ResultHeader"></a>
<a id="tocSresultheader"></a>
<a id="tocsresultheader"></a>

```json
[
  {
    "name": {},
    "format": {}
  }
]
```

<h2 id="tocS_ResultRow">ResultRow</h2>
<!-- backwards compatibility -->
<a id="schemaresultrow"></a>
<a id="schema_ResultRow"></a>
<a id="tocSresultrow"></a>
<a id="tocsresultrow"></a>

```json
{
  "rowId": {},
  "dataItems": {}
}
```

A single row in the ResultSet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rowId|object|false|none|none|
|dataItems|object|true|none|none|

<h2 id="tocS_ResultRows">ResultRows</h2>
<!-- backwards compatibility -->
<a id="schemaresultrows"></a>
<a id="schema_ResultRows"></a>
<a id="tocSresultrows"></a>
<a id="tocsresultrows"></a>

```json
[
  {
    "rowId": {},
    "dataItems": {}
  }
]
```

<h2 id="tocS_ResultSet">ResultSet</h2>
<!-- backwards compatibility -->
<a id="schemaresultset"></a>
<a id="schema_ResultSet"></a>
<a id="tocSresultset"></a>
<a id="tocsresultset"></a>

```json
{
  "headers": {},
  "rows": {}
}
```

 ResultSet contains the results of the request for a single block or list defined on the screen.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|true|none|none|
|rows|object|true|none|none|

<h2 id="tocS_SourceDataColumnIndex">SourceDataColumnIndex</h2>
<!-- backwards compatibility -->
<a id="schemasourcedatacolumnindex"></a>
<a id="schema_SourceDataColumnIndex"></a>
<a id="tocSsourcedatacolumnindex"></a>
<a id="tocssourcedatacolumnindex"></a>

```json
1
```

<h2 id="tocS_StartTableDataImportJobRequest">StartTableDataImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastarttabledataimportjobrequest"></a>
<a id="schema_StartTableDataImportJobRequest"></a>
<a id="tocSstarttabledataimportjobrequest"></a>
<a id="tocsstarttabledataimportjobrequest"></a>

```json
{
  "dataSource": {
    "dataSourceConfig": {
      "dataSourceUrl": {}
    }
  },
  "dataFormat": {},
  "importOptions": {
    "destinationOptions": {
      "columnMap": {
        "property1": {
          "columnIndex": {}
        },
        "property2": {
          "columnIndex": {}
        }
      }
    },
    "delimitedTextOptions": {
      "delimiter": {},
      "hasHeaderRow": {},
      "ignoreEmptyRows": {},
      "dataCharacterEncoding": {}
    }
  },
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSource|object|true|none|none|
|dataFormat|object|true|none|none|
|importOptions|object|true|none|none|
|clientRequestToken|object|true|none|none|

<h2 id="tocS_TableName">TableName</h2>
<!-- backwards compatibility -->
<a id="schematablename"></a>
<a id="schema_TableName"></a>
<a id="tocStablename"></a>
<a id="tocstablename"></a>

```json
"string"
```

<h2 id="tocS_Table">Table</h2>
<!-- backwards compatibility -->
<a id="schematable"></a>
<a id="schema_Table"></a>
<a id="tocStable"></a>
<a id="tocstable"></a>

```json
{
  "tableId": {},
  "tableName": {}
}
```

An object representing the properties of a table in a workbook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tableId|object|false|none|none|
|tableName|object|false|none|none|

<h2 id="tocS_TableColumnName">TableColumnName</h2>
<!-- backwards compatibility -->
<a id="schematablecolumnname"></a>
<a id="schema_TableColumnName"></a>
<a id="tocStablecolumnname"></a>
<a id="tocstablecolumnname"></a>

```json
"string"
```

<h2 id="tocS_TableColumn">TableColumn</h2>
<!-- backwards compatibility -->
<a id="schematablecolumn"></a>
<a id="schema_TableColumn"></a>
<a id="tocStablecolumn"></a>
<a id="tocstablecolumn"></a>

```json
{
  "tableColumnId": {},
  "tableColumnName": {},
  "format": {}
}
```

An object that contains attributes about a single column in a table

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tableColumnId|object|false|none|none|
|tableColumnName|object|false|none|none|
|format|object|false|none|none|

<h2 id="tocS_TimestampInMillis">TimestampInMillis</h2>
<!-- backwards compatibility -->
<a id="schematimestampinmillis"></a>
<a id="schema_TimestampInMillis"></a>
<a id="tocStimestampinmillis"></a>
<a id="tocstimestampinmillis"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_TableRow">TableRow</h2>
<!-- backwards compatibility -->
<a id="schematablerow"></a>
<a id="schema_TableRow"></a>
<a id="tocStablerow"></a>
<a id="tocstablerow"></a>

```json
{
  "rowId": {},
  "cells": {}
}
```

An object that contains attributes about a single row in a table

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rowId|object|true|none|none|
|cells|object|true|none|none|

<h2 id="tocS_TagKeysList">TagKeysList</h2>
<!-- backwards compatibility -->
<a id="schematagkeyslist"></a>
<a id="schema_TagKeysList"></a>
<a id="tocStagkeyslist"></a>
<a id="tocstagkeyslist"></a>

```json
[
  "string"
]
```

A list of tag keys

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpsertAction">UpsertAction</h2>
<!-- backwards compatibility -->
<a id="schemaupsertaction"></a>
<a id="schema_UpsertAction"></a>
<a id="tocSupsertaction"></a>
<a id="tocsupsertaction"></a>

```json
"UPDATED"
```

<h2 id="tocS_UpsertRowsResult">UpsertRowsResult</h2>
<!-- backwards compatibility -->
<a id="schemaupsertrowsresult"></a>
<a id="schema_UpsertRowsResult"></a>
<a id="tocSupsertrowsresult"></a>
<a id="tocsupsertrowsresult"></a>

```json
{
  "rowIds": {},
  "upsertAction": {}
}
```

 An object that represents the result of a single upsert row request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rowIds|object|true|none|none|
|upsertAction|object|true|none|none|

<h2 id="tocS_VariableName">VariableName</h2>
<!-- backwards compatibility -->
<a id="schemavariablename"></a>
<a id="schema_VariableName"></a>
<a id="tocSvariablename"></a>
<a id="tocsvariablename"></a>

```json
"password"
```
