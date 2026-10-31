<h1 id="amazon-timestream-write">Amazon Timestream Write v2018-11-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Timestream Write</fullname> <p>Amazon Timestream is a fast, scalable, fully managed time-series database service that makes it easy to store and analyze trillions of time-series data points per day. With Timestream, you can easily store and analyze IoT sensor data to derive insights from your IoT applications. You can analyze industrial telemetry to streamline equipment management and maintenance. You can also store and analyze log data and metrics to improve the performance and availability of your applications. </p> <p>Timestream is built from the ground up to effectively ingest, process, and store time-series data. It organizes data to optimize query processing. It automatically scales based on the volume of data ingested and on the query volume to ensure you receive optimal performance while inserting and querying data. As your data grows over time, Timestream’s adaptive query processing engine spans across storage tiers to provide fast analysis while reducing costs.</p>

Base URLs:

* <a href="http://ingest.timestream.us-east-1.amazonaws.com">http://ingest.timestream.us-east-1.amazonaws.com</a> - The Timestream Write multi-region endpoint

* <a href="https://ingest.timestream.us-east-1.amazonaws.com">https://ingest.timestream.us-east-1.amazonaws.com</a> - The Timestream Write multi-region endpoint

* <a href="http://ingest.timestream.cn-north-1.amazonaws.com.cn">http://ingest.timestream.cn-north-1.amazonaws.com.cn</a> - The Timestream Write endpoint for China (Beijing) and China (Ningxia)

* <a href="https://ingest.timestream.cn-north-1.amazonaws.com.cn">https://ingest.timestream.cn-north-1.amazonaws.com.cn</a> - The Timestream Write endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/timestream/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-timestream-write-default">Default</h1>

## CreateBatchLoadTask

<a id="opIdCreateBatchLoadTask"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.CreateBatchLoadTask' \
  -d '{
    "ClientToken": {},
    "DataModelConfiguration": {
      "DataModel": {
        "TimeColumn": {},
        "TimeUnit": {},
        "DimensionMappings": {},
        "MultiMeasureMappings": {
          "TargetMultiMeasureName": {},
          "MultiMeasureAttributeMappings": {}
        },
        "MixedMeasureMappings": {},
        "MeasureNameColumn": {}
      },
      "DataModelS3Configuration": {
        "BucketName": {},
        "ObjectKey": {}
      }
    },
    "DataSourceConfiguration": {
      "DataSourceS3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {}
      },
      "CsvConfiguration": {
        "ColumnSeparator": {},
        "EscapeChar": {},
        "QuoteChar": {},
        "NullValue": {},
        "TrimWhiteSpace": {}
      },
      "DataFormat": {}
    },
    "ReportConfiguration": {
      "ReportS3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {},
        "EncryptionOption": {},
        "KmsKeyId": {}
      }
    },
    "TargetDatabaseName": {},
    "TargetTableName": {},
    "RecordVersion": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask`

Creates a new Timestream batch load task. A batch load task processes data from a CSV source in an S3 location and writes to a Timestream table. A mapping from source to target is defined in a batch load task. Errors and events are written to a report at an S3 location. For the report, if the KMS key is not specified, the batch load task will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-batch-load.html">code sample</a>.

> Body parameter

```json
{
  "ClientToken": {},
  "DataModelConfiguration": {
    "DataModel": {
      "TimeColumn": {},
      "TimeUnit": {},
      "DimensionMappings": {},
      "MultiMeasureMappings": {
        "TargetMultiMeasureName": {},
        "MultiMeasureAttributeMappings": {}
      },
      "MixedMeasureMappings": {},
      "MeasureNameColumn": {}
    },
    "DataModelS3Configuration": {
      "BucketName": {},
      "ObjectKey": {}
    }
  },
  "DataSourceConfiguration": {
    "DataSourceS3Configuration": {
      "BucketName": {},
      "ObjectKeyPrefix": {}
    },
    "CsvConfiguration": {
      "ColumnSeparator": {},
      "EscapeChar": {},
      "QuoteChar": {},
      "NullValue": {},
      "TrimWhiteSpace": {}
    },
    "DataFormat": {}
  },
  "ReportConfiguration": {
    "ReportS3Configuration": {
      "BucketName": {},
      "ObjectKeyPrefix": {},
      "EncryptionOption": {},
      "KmsKeyId": {}
    }
  },
  "TargetDatabaseName": {},
  "TargetTableName": {},
  "RecordVersion": {}
}
```

<h3 id="createbatchloadtask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateBatchLoadTaskRequest](#schemacreatebatchloadtaskrequest)|true|none|
|» ClientToken|body|object|false|none|
|» DataModelConfiguration|body|[DataModelConfiguration](#schemadatamodelconfiguration)|false|<p/>|
|» DataSourceConfiguration|body|object|true|none|
|» » DataSourceS3Configuration|body|object|true|none|
|» » » BucketName|body|object|true|none|
|» » » ObjectKeyPrefix|body|object|false|none|
|» » CsvConfiguration|body|[CsvConfiguration](#schemacsvconfiguration)|false|A delimited data format where the column separator can be a comma and the record separator is a newline character.|
|» » DataFormat|body|object|true|none|
|» ReportConfiguration|body|[ReportConfiguration](#schemareportconfiguration)|true|Report configuration for a batch load task. This contains details about where error reports are stored.|
|» TargetDatabaseName|body|object|true|none|
|» TargetTableName|body|object|true|none|
|» RecordVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.CreateBatchLoadTask|

> Example responses

> 200 Response

```json
{
  "TaskId": {}
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

<h3 id="createbatchloadtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBatchLoadTaskResponse](#schemacreatebatchloadtaskresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|487|487|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDatabase

<a id="opIdCreateDatabase"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.CreateDatabase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.CreateDatabase' \
  -d '{
    "DatabaseName": {},
    "KmsKeyId": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.CreateDatabase`

Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html">code sample</a>. 

> Body parameter

```json
{
  "DatabaseName": {},
  "KmsKeyId": {},
  "Tags": {}
}
```

<h3 id="createdatabase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateDatabaseRequest](#schemacreatedatabaserequest)|true|none|
|» DatabaseName|body|object|true|none|
|» KmsKeyId|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.CreateDatabase|

> Example responses

> 200 Response

```json
{
  "Database": {
    "Arn": {},
    "DatabaseName": {},
    "TableCount": {},
    "KmsKeyId": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
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

> 487 Response

```json
null
```

<h3 id="createdatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDatabaseResponse](#schemacreatedatabaseresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|487|487|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTable

<a id="opIdCreateTable"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.CreateTable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.CreateTable' \
  -d '{
    "DatabaseName": {},
    "TableName": {},
    "RetentionProperties": {
      "MemoryStoreRetentionPeriodInHours": {},
      "MagneticStoreRetentionPeriodInDays": {}
    },
    "Tags": {},
    "MagneticStoreWriteProperties": {
      "EnableMagneticStoreWrites": {},
      "MagneticStoreRejectedDataLocation": {
        "S3Configuration": {
          "BucketName": {},
          "ObjectKeyPrefix": {},
          "EncryptionOption": {},
          "KmsKeyId": {}
        }
      }
    }
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.CreateTable`

Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html">code sample</a> for details. 

> Body parameter

```json
{
  "DatabaseName": {},
  "TableName": {},
  "RetentionProperties": {
    "MemoryStoreRetentionPeriodInHours": {},
    "MagneticStoreRetentionPeriodInDays": {}
  },
  "Tags": {},
  "MagneticStoreWriteProperties": {
    "EnableMagneticStoreWrites": {},
    "MagneticStoreRejectedDataLocation": {
      "S3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {},
        "EncryptionOption": {},
        "KmsKeyId": {}
      }
    }
  }
}
```

<h3 id="createtable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateTableRequest](#schemacreatetablerequest)|true|none|
|» DatabaseName|body|object|true|none|
|» TableName|body|object|true|none|
|» RetentionProperties|body|object|false|none|
|» » MemoryStoreRetentionPeriodInHours|body|object|true|none|
|» » MagneticStoreRetentionPeriodInDays|body|object|true|none|
|» Tags|body|object|false|none|
|» MagneticStoreWriteProperties|body|object|false|none|
|» » EnableMagneticStoreWrites|body|object|true|none|
|» » MagneticStoreRejectedDataLocation|body|object|false|none|
|» » » S3Configuration|body|object|false|none|
|» » » » BucketName|body|object|false|none|
|» » » » ObjectKeyPrefix|body|object|false|none|
|» » » » EncryptionOption|body|object|false|none|
|» » » » KmsKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.CreateTable|

> Example responses

> 200 Response

```json
{
  "Table": {
    "Arn": {},
    "TableName": {},
    "DatabaseName": {},
    "TableStatus": {},
    "RetentionProperties": {
      "MemoryStoreRetentionPeriodInHours": {},
      "MagneticStoreRetentionPeriodInDays": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {},
    "MagneticStoreWriteProperties": {
      "EnableMagneticStoreWrites": {},
      "MagneticStoreRejectedDataLocation": {
        "S3Configuration": {
          "BucketName": {},
          "ObjectKeyPrefix": {},
          "EncryptionOption": {},
          "KmsKeyId": {}
        }
      }
    }
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="createtable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTableResponse](#schemacreatetableresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|
|487|487|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|488|488|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDatabase

<a id="opIdDeleteDatabase"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.DeleteDatabase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.DeleteDatabase' \
  -d '{
    "DatabaseName": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.DeleteDatabase`

<p>Deletes a given Timestream database. <i>This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered.</i> </p> <note> <p>All tables in the database must be deleted first, or a ValidationException error will be thrown. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html">code sample</a> for details.</p>

> Body parameter

```json
{
  "DatabaseName": {}
}
```

<h3 id="deletedatabase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteDatabaseRequest](#schemadeletedatabaserequest)|true|none|
|» DatabaseName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.DeleteDatabase|

> Example responses

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

<h3 id="deletedatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTable

<a id="opIdDeleteTable"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.DeleteTable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.DeleteTable' \
  -d '{
    "DatabaseName": {},
    "TableName": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.DeleteTable`

<p>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time-series data stored in the table cannot be recovered. </p> <note> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code sample</a> for details.</p>

> Body parameter

```json
{
  "DatabaseName": {},
  "TableName": {}
}
```

<h3 id="deletetable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteTableRequest](#schemadeletetablerequest)|true|none|
|» DatabaseName|body|object|true|none|
|» TableName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.DeleteTable|

> Example responses

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

<h3 id="deletetable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBatchLoadTask

<a id="opIdDescribeBatchLoadTask"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.DescribeBatchLoadTask' \
  -d '{
    "TaskId": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask`

Returns information about the batch load task, including configurations, mappings, progress, and other details. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-batch-load.html">code sample</a> for details.

> Body parameter

```json
{
  "TaskId": {}
}
```

<h3 id="describebatchloadtask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeBatchLoadTaskRequest](#schemadescribebatchloadtaskrequest)|true|none|
|» TaskId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.DescribeBatchLoadTask|

> Example responses

> 200 Response

```json
{
  "BatchLoadTaskDescription": {
    "TaskId": {},
    "ErrorMessage": {},
    "DataSourceConfiguration": {
      "DataSourceS3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {}
      },
      "CsvConfiguration": {
        "ColumnSeparator": {},
        "EscapeChar": {},
        "QuoteChar": {},
        "NullValue": {},
        "TrimWhiteSpace": {}
      },
      "DataFormat": {}
    },
    "ProgressReport": {
      "RecordsProcessed": {},
      "RecordsIngested": {},
      "ParseFailures": {},
      "RecordIngestionFailures": {},
      "FileFailures": {},
      "BytesMetered": {}
    },
    "ReportConfiguration": {
      "ReportS3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {},
        "EncryptionOption": {},
        "KmsKeyId": {}
      }
    },
    "DataModelConfiguration": {
      "DataModel": {
        "TimeColumn": {},
        "TimeUnit": {},
        "DimensionMappings": {},
        "MultiMeasureMappings": {
          "TargetMultiMeasureName": {},
          "MultiMeasureAttributeMappings": {}
        },
        "MixedMeasureMappings": {},
        "MeasureNameColumn": {}
      },
      "DataModelS3Configuration": {
        "BucketName": {},
        "ObjectKey": {}
      }
    },
    "TargetDatabaseName": {},
    "TargetTableName": {},
    "TaskStatus": {},
    "RecordVersion": {},
    "CreationTime": {},
    "LastUpdatedTime": {},
    "ResumableUntil": {}
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

<h3 id="describebatchloadtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBatchLoadTaskResponse](#schemadescribebatchloadtaskresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDatabase

<a id="opIdDescribeDatabase"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.DescribeDatabase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.DescribeDatabase' \
  -d '{
    "DatabaseName": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.DescribeDatabase`

Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-db.html">code sample</a> for details.

> Body parameter

```json
{
  "DatabaseName": {}
}
```

<h3 id="describedatabase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDatabaseRequest](#schemadescribedatabaserequest)|true|none|
|» DatabaseName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.DescribeDatabase|

> Example responses

> 200 Response

```json
{
  "Database": {
    "Arn": {},
    "DatabaseName": {},
    "TableCount": {},
    "KmsKeyId": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
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

<h3 id="describedatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatabaseResponse](#schemadescribedatabaseresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEndpoints

<a id="opIdDescribeEndpoints"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.DescribeEndpoints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.DescribeEndpoints' \
  -d '{}'
```

`POST /#X-Amz-Target=Timestream_20181101.DescribeEndpoints`

<p>Returns a list of available endpoints to make Timestream API calls against. This API operation is available through both the Write and Query APIs.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>we don't recommend that you use this API operation unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream</a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>

> Body parameter

```json
{}
```

<h3 id="describeendpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEndpointsRequest](#schemadescribeendpointsrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.DescribeEndpoints|

> Example responses

> 200 Response

```json
{
  "Endpoints": {}
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

<h3 id="describeendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEndpointsResponse](#schemadescribeendpointsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTable

<a id="opIdDescribeTable"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.DescribeTable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.DescribeTable' \
  -d '{
    "DatabaseName": {},
    "TableName": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.DescribeTable`

Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-table.html">code sample</a> for details. 

> Body parameter

```json
{
  "DatabaseName": {},
  "TableName": {}
}
```

<h3 id="describetable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTableRequest](#schemadescribetablerequest)|true|none|
|» DatabaseName|body|object|true|none|
|» TableName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.DescribeTable|

> Example responses

> 200 Response

```json
{
  "Table": {
    "Arn": {},
    "TableName": {},
    "DatabaseName": {},
    "TableStatus": {},
    "RetentionProperties": {
      "MemoryStoreRetentionPeriodInHours": {},
      "MagneticStoreRetentionPeriodInDays": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {},
    "MagneticStoreWriteProperties": {
      "EnableMagneticStoreWrites": {},
      "MagneticStoreRejectedDataLocation": {
        "S3Configuration": {
          "BucketName": {},
          "ObjectKeyPrefix": {},
          "EncryptionOption": {},
          "KmsKeyId": {}
        }
      }
    }
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

<h3 id="describetable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTableResponse](#schemadescribetableresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBatchLoadTasks

<a id="opIdListBatchLoadTasks"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.ListBatchLoadTasks' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "TaskStatus": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks`

Provides a list of batch load tasks, along with the name, status, when the task is resumable until, and other details. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-batch-load-tasks.html">code sample</a> for details.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "TaskStatus": {}
}
```

<h3 id="listbatchloadtasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListBatchLoadTasksRequest](#schemalistbatchloadtasksrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» TaskStatus|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.ListBatchLoadTasks|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "BatchLoadTasks": {}
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

<h3 id="listbatchloadtasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBatchLoadTasksResponse](#schemalistbatchloadtasksresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatabases

<a id="opIdListDatabases"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.ListDatabases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.ListDatabases' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.ListDatabases`

Returns a list of your Timestream databases. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-db.html">code sample</a> for details. 

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdatabases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDatabasesRequest](#schemalistdatabasesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.ListDatabases|

> Example responses

> 200 Response

```json
{
  "Databases": {},
  "NextToken": {}
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

<h3 id="listdatabases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatabasesResponse](#schemalistdatabasesresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTables

<a id="opIdListTables"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.ListTables' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.ListTables' \
  -d '{
    "DatabaseName": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.ListTables`

Provides a list of tables, along with the name, status, and retention properties of each table. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html">code sample</a> for details. 

> Body parameter

```json
{
  "DatabaseName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listtables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTablesRequest](#schemalisttablesrequest)|true|none|
|» DatabaseName|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.ListTables|

> Example responses

> 200 Response

```json
{
  "Tables": {},
  "NextToken": {}
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

<h3 id="listtables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTablesResponse](#schemalisttablesresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.ListTagsForResource`

 Lists all tags on a Timestream resource. 

> Body parameter

```json
{
  "ResourceARN": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": {}
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResumeBatchLoadTask

<a id="opIdResumeBatchLoadTask"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.ResumeBatchLoadTask' \
  -d '{
    "TaskId": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask`

 

> Body parameter

```json
{
  "TaskId": {}
}
```

<h3 id="resumebatchloadtask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ResumeBatchLoadTaskRequest](#schemaresumebatchloadtaskrequest)|true|none|
|» TaskId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.ResumeBatchLoadTask|

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

<h3 id="resumebatchloadtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResumeBatchLoadTaskResponse](#schemaresumebatchloadtaskresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.TagResource`

 Associates a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 

> Body parameter

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.UntagResource`

 Removes the association of tags from a Timestream resource. 

> Body parameter

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDatabase

<a id="opIdUpdateDatabase"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.UpdateDatabase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.UpdateDatabase' \
  -d '{
    "DatabaseName": {},
    "KmsKeyId": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.UpdateDatabase`

<p> Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>). If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-db.html">code sample</a> for details.</p>

> Body parameter

```json
{
  "DatabaseName": {},
  "KmsKeyId": {}
}
```

<h3 id="updatedatabase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateDatabaseRequest](#schemaupdatedatabaserequest)|true|none|
|» DatabaseName|body|object|true|none|
|» KmsKeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.UpdateDatabase|

> Example responses

> 200 Response

```json
{
  "Database": {
    "Arn": {},
    "DatabaseName": {},
    "TableCount": {},
    "KmsKeyId": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
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

<h3 id="updatedatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDatabaseResponse](#schemaupdatedatabaseresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|486|486|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTable

<a id="opIdUpdateTable"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.UpdateTable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.UpdateTable' \
  -d '{
    "DatabaseName": {},
    "TableName": {},
    "RetentionProperties": {
      "MemoryStoreRetentionPeriodInHours": {},
      "MagneticStoreRetentionPeriodInDays": {}
    },
    "MagneticStoreWriteProperties": {
      "EnableMagneticStoreWrites": {},
      "MagneticStoreRejectedDataLocation": {
        "S3Configuration": {
          "BucketName": {},
          "ObjectKeyPrefix": {},
          "EncryptionOption": {},
          "KmsKeyId": {}
        }
      }
    }
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.UpdateTable`

<p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-table.html">code sample</a> for details.</p>

> Body parameter

```json
{
  "DatabaseName": {},
  "TableName": {},
  "RetentionProperties": {
    "MemoryStoreRetentionPeriodInHours": {},
    "MagneticStoreRetentionPeriodInDays": {}
  },
  "MagneticStoreWriteProperties": {
    "EnableMagneticStoreWrites": {},
    "MagneticStoreRejectedDataLocation": {
      "S3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {},
        "EncryptionOption": {},
        "KmsKeyId": {}
      }
    }
  }
}
```

<h3 id="updatetable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateTableRequest](#schemaupdatetablerequest)|true|none|
|» DatabaseName|body|object|true|none|
|» TableName|body|object|true|none|
|» RetentionProperties|body|object|false|none|
|» » MemoryStoreRetentionPeriodInHours|body|object|true|none|
|» » MagneticStoreRetentionPeriodInDays|body|object|true|none|
|» MagneticStoreWriteProperties|body|object|false|none|
|» » EnableMagneticStoreWrites|body|object|true|none|
|» » MagneticStoreRejectedDataLocation|body|object|false|none|
|» » » S3Configuration|body|object|false|none|
|» » » » BucketName|body|object|false|none|
|» » » » ObjectKeyPrefix|body|object|false|none|
|» » » » EncryptionOption|body|object|false|none|
|» » » » KmsKeyId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.UpdateTable|

> Example responses

> 200 Response

```json
{
  "Table": {
    "Arn": {},
    "TableName": {},
    "DatabaseName": {},
    "TableStatus": {},
    "RetentionProperties": {
      "MemoryStoreRetentionPeriodInHours": {},
      "MagneticStoreRetentionPeriodInDays": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {},
    "MagneticStoreWriteProperties": {
      "EnableMagneticStoreWrites": {},
      "MagneticStoreRejectedDataLocation": {
        "S3Configuration": {
          "BucketName": {},
          "ObjectKeyPrefix": {},
          "EncryptionOption": {},
          "KmsKeyId": {}
        }
      }
    }
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

<h3 id="updatetable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTableResponse](#schemaupdatetableresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## WriteRecords

<a id="opIdWriteRecords"></a>

> Code samples

```bash
curl 'https://timestream-write.us-east-1.amazonaws.com/#X-Amz-Target=Timestream_20181101.WriteRecords' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Timestream_20181101.WriteRecords' \
  -d '{
    "DatabaseName": {},
    "TableName": {},
    "CommonAttributes": {
      "Dimensions": {},
      "MeasureName": {},
      "MeasureValue": {},
      "MeasureValueType": {},
      "Time": {},
      "TimeUnit": {},
      "Version": {},
      "MeasureValues": {}
    },
    "Records": {}
  }'
```

`POST /#X-Amz-Target=Timestream_20181101.WriteRecords`

<p>Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. </p> <p>Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for details.</p> <p> <b>Upserts</b> </p> <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to update data points. Timestream tracks a version number with each record. <code>Version</code> defaults to <code>1</code> when it's not specified for the record in the request. Timestream updates an existing record’s measure value along with its <code>Version</code> when it receives a write request with a higher <code>Version</code> number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates <code>Version</code>, if it is greater than the existing value of <code>Version</code>. You can update a data point as many times as desired, as long as the value of <code>Version</code> continuously increases. </p> <p> For example, suppose you write a new record without indicating <code>Version</code> in the request. Timestream stores this record, and set <code>Version</code> to <code>1</code>. Now, suppose you try to update this record with a <code>WriteRecords</code> request of the same record with a different measure value but, like before, do not provide <code>Version</code>. In this case, Timestream will reject this update with a <code>RejectedRecordsException</code> since the updated record’s version is not greater than the existing value of Version. </p> <p>However, if you were to resend the update request with <code>Version</code> set to <code>2</code>, Timestream would then succeed in updating the record’s value, and the <code>Version</code> would be set to <code>2</code>. Next, suppose you sent a <code>WriteRecords</code> request with this same record and an identical measure value, but with <code>Version</code> set to <code>3</code>. In this case, Timestream would only update <code>Version</code> to <code>3</code>. Any further updates would need to send a version number greater than <code>3</code>, or the update requests would receive a <code>RejectedRecordsException</code>. </p>

> Body parameter

```json
{
  "DatabaseName": {},
  "TableName": {},
  "CommonAttributes": {
    "Dimensions": {},
    "MeasureName": {},
    "MeasureValue": {},
    "MeasureValueType": {},
    "Time": {},
    "TimeUnit": {},
    "Version": {},
    "MeasureValues": {}
  },
  "Records": {}
}
```

<h3 id="writerecords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[WriteRecordsRequest](#schemawriterecordsrequest)|true|none|
|» DatabaseName|body|object|true|none|
|» TableName|body|object|true|none|
|» CommonAttributes|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » MeasureName|body|object|false|none|
|» » MeasureValue|body|object|false|none|
|» » MeasureValueType|body|object|false|none|
|» » Time|body|object|false|none|
|» » TimeUnit|body|object|false|none|
|» » Version|body|object|false|none|
|» » MeasureValues|body|object|false|none|
|» Records|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Timestream_20181101.WriteRecords|

> Example responses

> 200 Response

```json
{
  "RecordsIngested": {
    "Total": {},
    "MemoryStore": {},
    "MagneticStore": {}
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

<h3 id="writerecords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WriteRecordsResponse](#schemawriterecordsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|RejectedRecordsException|[RejectedRecordsException](#schemarejectedrecordsexception)|
|486|486|InvalidEndpointException|[InvalidEndpointException](#schemainvalidendpointexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateBatchLoadTaskResponse">CreateBatchLoadTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchloadtaskresponse"></a>
<a id="schema_CreateBatchLoadTaskResponse"></a>
<a id="tocScreatebatchloadtaskresponse"></a>
<a id="tocscreatebatchloadtaskresponse"></a>

```json
{
  "TaskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskId|object|true|none|none|

<h2 id="tocS_CreateBatchLoadTaskRequest">CreateBatchLoadTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchloadtaskrequest"></a>
<a id="schema_CreateBatchLoadTaskRequest"></a>
<a id="tocScreatebatchloadtaskrequest"></a>
<a id="tocscreatebatchloadtaskrequest"></a>

```json
{
  "ClientToken": {},
  "DataModelConfiguration": {
    "DataModel": {
      "TimeColumn": {},
      "TimeUnit": {},
      "DimensionMappings": {},
      "MultiMeasureMappings": {
        "TargetMultiMeasureName": {},
        "MultiMeasureAttributeMappings": {}
      },
      "MixedMeasureMappings": {},
      "MeasureNameColumn": {}
    },
    "DataModelS3Configuration": {
      "BucketName": {},
      "ObjectKey": {}
    }
  },
  "DataSourceConfiguration": {
    "DataSourceS3Configuration": {
      "BucketName": {},
      "ObjectKeyPrefix": {}
    },
    "CsvConfiguration": {
      "ColumnSeparator": {},
      "EscapeChar": {},
      "QuoteChar": {},
      "NullValue": {},
      "TrimWhiteSpace": {}
    },
    "DataFormat": {}
  },
  "ReportConfiguration": {
    "ReportS3Configuration": {
      "BucketName": {},
      "ObjectKeyPrefix": {},
      "EncryptionOption": {},
      "KmsKeyId": {}
    }
  },
  "TargetDatabaseName": {},
  "TargetTableName": {},
  "RecordVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|false|none|none|
|DataModelConfiguration|[DataModelConfiguration](#schemadatamodelconfiguration)|false|none|<p/>|
|DataSourceConfiguration|object|true|none|none|
|ReportConfiguration|[ReportConfiguration](#schemareportconfiguration)|true|none|Report configuration for a batch load task. This contains details about where error reports are stored.|
|TargetDatabaseName|object|true|none|none|
|TargetTableName|object|true|none|none|
|RecordVersion|object|false|none|none|

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

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

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

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

<h2 id="tocS_InvalidEndpointException">InvalidEndpointException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidendpointexception"></a>
<a id="schema_InvalidEndpointException"></a>
<a id="tocSinvalidendpointexception"></a>
<a id="tocsinvalidendpointexception"></a>

```json
null
```

<h2 id="tocS_CreateDatabaseResponse">CreateDatabaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatabaseresponse"></a>
<a id="schema_CreateDatabaseResponse"></a>
<a id="tocScreatedatabaseresponse"></a>
<a id="tocscreatedatabaseresponse"></a>

```json
{
  "Database": {
    "Arn": {},
    "DatabaseName": {},
    "TableCount": {},
    "KmsKeyId": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Database|object|false|none|none|

<h2 id="tocS_CreateDatabaseRequest">CreateDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatabaserequest"></a>
<a id="schema_CreateDatabaseRequest"></a>
<a id="tocScreatedatabaserequest"></a>
<a id="tocscreatedatabaserequest"></a>

```json
{
  "DatabaseName": {},
  "KmsKeyId": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|true|none|none|
|KmsKeyId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateTableResponse">CreateTableResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetableresponse"></a>
<a id="schema_CreateTableResponse"></a>
<a id="tocScreatetableresponse"></a>
<a id="tocscreatetableresponse"></a>

```json
{
  "Table": {
    "Arn": {},
    "TableName": {},
    "DatabaseName": {},
    "TableStatus": {},
    "RetentionProperties": {
      "MemoryStoreRetentionPeriodInHours": {},
      "MagneticStoreRetentionPeriodInDays": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {},
    "MagneticStoreWriteProperties": {
      "EnableMagneticStoreWrites": {},
      "MagneticStoreRejectedDataLocation": {
        "S3Configuration": {
          "BucketName": {},
          "ObjectKeyPrefix": {},
          "EncryptionOption": {},
          "KmsKeyId": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Table|object|false|none|none|

<h2 id="tocS_CreateTableRequest">CreateTableRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetablerequest"></a>
<a id="schema_CreateTableRequest"></a>
<a id="tocScreatetablerequest"></a>
<a id="tocscreatetablerequest"></a>

```json
{
  "DatabaseName": {},
  "TableName": {},
  "RetentionProperties": {
    "MemoryStoreRetentionPeriodInHours": {},
    "MagneticStoreRetentionPeriodInDays": {}
  },
  "Tags": {},
  "MagneticStoreWriteProperties": {
    "EnableMagneticStoreWrites": {},
    "MagneticStoreRejectedDataLocation": {
      "S3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {},
        "EncryptionOption": {},
        "KmsKeyId": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|RetentionProperties|object|false|none|none|
|Tags|object|false|none|none|
|MagneticStoreWriteProperties|object|false|none|none|

<h2 id="tocS_DeleteDatabaseRequest">DeleteDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatabaserequest"></a>
<a id="schema_DeleteDatabaseRequest"></a>
<a id="tocSdeletedatabaserequest"></a>
<a id="tocsdeletedatabaserequest"></a>

```json
{
  "DatabaseName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|true|none|none|

<h2 id="tocS_DeleteTableRequest">DeleteTableRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetablerequest"></a>
<a id="schema_DeleteTableRequest"></a>
<a id="tocSdeletetablerequest"></a>
<a id="tocsdeletetablerequest"></a>

```json
{
  "DatabaseName": {},
  "TableName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|

<h2 id="tocS_DescribeBatchLoadTaskResponse">DescribeBatchLoadTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribebatchloadtaskresponse"></a>
<a id="schema_DescribeBatchLoadTaskResponse"></a>
<a id="tocSdescribebatchloadtaskresponse"></a>
<a id="tocsdescribebatchloadtaskresponse"></a>

```json
{
  "BatchLoadTaskDescription": {
    "TaskId": {},
    "ErrorMessage": {},
    "DataSourceConfiguration": {
      "DataSourceS3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {}
      },
      "CsvConfiguration": {
        "ColumnSeparator": {},
        "EscapeChar": {},
        "QuoteChar": {},
        "NullValue": {},
        "TrimWhiteSpace": {}
      },
      "DataFormat": {}
    },
    "ProgressReport": {
      "RecordsProcessed": {},
      "RecordsIngested": {},
      "ParseFailures": {},
      "RecordIngestionFailures": {},
      "FileFailures": {},
      "BytesMetered": {}
    },
    "ReportConfiguration": {
      "ReportS3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {},
        "EncryptionOption": {},
        "KmsKeyId": {}
      }
    },
    "DataModelConfiguration": {
      "DataModel": {
        "TimeColumn": {},
        "TimeUnit": {},
        "DimensionMappings": {},
        "MultiMeasureMappings": {
          "TargetMultiMeasureName": {},
          "MultiMeasureAttributeMappings": {}
        },
        "MixedMeasureMappings": {},
        "MeasureNameColumn": {}
      },
      "DataModelS3Configuration": {
        "BucketName": {},
        "ObjectKey": {}
      }
    },
    "TargetDatabaseName": {},
    "TargetTableName": {},
    "TaskStatus": {},
    "RecordVersion": {},
    "CreationTime": {},
    "LastUpdatedTime": {},
    "ResumableUntil": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BatchLoadTaskDescription|object|true|none|none|

<h2 id="tocS_DescribeBatchLoadTaskRequest">DescribeBatchLoadTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribebatchloadtaskrequest"></a>
<a id="schema_DescribeBatchLoadTaskRequest"></a>
<a id="tocSdescribebatchloadtaskrequest"></a>
<a id="tocsdescribebatchloadtaskrequest"></a>

```json
{
  "TaskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskId|object|true|none|none|

<h2 id="tocS_DescribeDatabaseResponse">DescribeDatabaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatabaseresponse"></a>
<a id="schema_DescribeDatabaseResponse"></a>
<a id="tocSdescribedatabaseresponse"></a>
<a id="tocsdescribedatabaseresponse"></a>

```json
{
  "Database": {
    "Arn": {},
    "DatabaseName": {},
    "TableCount": {},
    "KmsKeyId": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Database|object|false|none|none|

<h2 id="tocS_DescribeDatabaseRequest">DescribeDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatabaserequest"></a>
<a id="schema_DescribeDatabaseRequest"></a>
<a id="tocSdescribedatabaserequest"></a>
<a id="tocsdescribedatabaserequest"></a>

```json
{
  "DatabaseName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|true|none|none|

<h2 id="tocS_DescribeEndpointsResponse">DescribeEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointsresponse"></a>
<a id="schema_DescribeEndpointsResponse"></a>
<a id="tocSdescribeendpointsresponse"></a>
<a id="tocsdescribeendpointsresponse"></a>

```json
{
  "Endpoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoints|object|true|none|none|

<h2 id="tocS_DescribeEndpointsRequest">DescribeEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointsrequest"></a>
<a id="schema_DescribeEndpointsRequest"></a>
<a id="tocSdescribeendpointsrequest"></a>
<a id="tocsdescribeendpointsrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeTableResponse">DescribeTableResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetableresponse"></a>
<a id="schema_DescribeTableResponse"></a>
<a id="tocSdescribetableresponse"></a>
<a id="tocsdescribetableresponse"></a>

```json
{
  "Table": {
    "Arn": {},
    "TableName": {},
    "DatabaseName": {},
    "TableStatus": {},
    "RetentionProperties": {
      "MemoryStoreRetentionPeriodInHours": {},
      "MagneticStoreRetentionPeriodInDays": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {},
    "MagneticStoreWriteProperties": {
      "EnableMagneticStoreWrites": {},
      "MagneticStoreRejectedDataLocation": {
        "S3Configuration": {
          "BucketName": {},
          "ObjectKeyPrefix": {},
          "EncryptionOption": {},
          "KmsKeyId": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Table|object|false|none|none|

<h2 id="tocS_DescribeTableRequest">DescribeTableRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetablerequest"></a>
<a id="schema_DescribeTableRequest"></a>
<a id="tocSdescribetablerequest"></a>
<a id="tocsdescribetablerequest"></a>

```json
{
  "DatabaseName": {},
  "TableName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|

<h2 id="tocS_ListBatchLoadTasksResponse">ListBatchLoadTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbatchloadtasksresponse"></a>
<a id="schema_ListBatchLoadTasksResponse"></a>
<a id="tocSlistbatchloadtasksresponse"></a>
<a id="tocslistbatchloadtasksresponse"></a>

```json
{
  "NextToken": {},
  "BatchLoadTasks": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|BatchLoadTasks|object|false|none|none|

<h2 id="tocS_ListBatchLoadTasksRequest">ListBatchLoadTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbatchloadtasksrequest"></a>
<a id="schema_ListBatchLoadTasksRequest"></a>
<a id="tocSlistbatchloadtasksrequest"></a>
<a id="tocslistbatchloadtasksrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "TaskStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|TaskStatus|object|false|none|none|

<h2 id="tocS_ListDatabasesResponse">ListDatabasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatabasesresponse"></a>
<a id="schema_ListDatabasesResponse"></a>
<a id="tocSlistdatabasesresponse"></a>
<a id="tocslistdatabasesresponse"></a>

```json
{
  "Databases": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Databases|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDatabasesRequest">ListDatabasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatabasesrequest"></a>
<a id="schema_ListDatabasesRequest"></a>
<a id="tocSlistdatabasesrequest"></a>
<a id="tocslistdatabasesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListTablesResponse">ListTablesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttablesresponse"></a>
<a id="schema_ListTablesResponse"></a>
<a id="tocSlisttablesresponse"></a>
<a id="tocslisttablesresponse"></a>

```json
{
  "Tables": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tables|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTablesRequest">ListTablesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttablesrequest"></a>
<a id="schema_ListTablesRequest"></a>
<a id="tocSlisttablesrequest"></a>
<a id="tocslisttablesrequest"></a>

```json
{
  "DatabaseName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_ResumeBatchLoadTaskResponse">ResumeBatchLoadTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresumebatchloadtaskresponse"></a>
<a id="schema_ResumeBatchLoadTaskResponse"></a>
<a id="tocSresumebatchloadtaskresponse"></a>
<a id="tocsresumebatchloadtaskresponse"></a>

```json
{}
```

<h2 id="tocS_ResumeBatchLoadTaskRequest">ResumeBatchLoadTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumebatchloadtaskrequest"></a>
<a id="schema_ResumeBatchLoadTaskRequest"></a>
<a id="tocSresumebatchloadtaskrequest"></a>
<a id="tocsresumebatchloadtaskrequest"></a>

```json
{
  "TaskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskId|object|true|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateDatabaseResponse">UpdateDatabaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatabaseresponse"></a>
<a id="schema_UpdateDatabaseResponse"></a>
<a id="tocSupdatedatabaseresponse"></a>
<a id="tocsupdatedatabaseresponse"></a>

```json
{
  "Database": {
    "Arn": {},
    "DatabaseName": {},
    "TableCount": {},
    "KmsKeyId": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Database|[Database](#schemadatabase)|false|none|A top-level container for a table. Databases and tables are the fundamental management concepts in Amazon Timestream. All tables in a database are encrypted with the same KMS key.|

<h2 id="tocS_UpdateDatabaseRequest">UpdateDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatabaserequest"></a>
<a id="schema_UpdateDatabaseRequest"></a>
<a id="tocSupdatedatabaserequest"></a>
<a id="tocsupdatedatabaserequest"></a>

```json
{
  "DatabaseName": {},
  "KmsKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|true|none|none|
|KmsKeyId|object|true|none|none|

<h2 id="tocS_UpdateTableResponse">UpdateTableResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetableresponse"></a>
<a id="schema_UpdateTableResponse"></a>
<a id="tocSupdatetableresponse"></a>
<a id="tocsupdatetableresponse"></a>

```json
{
  "Table": {
    "Arn": {},
    "TableName": {},
    "DatabaseName": {},
    "TableStatus": {},
    "RetentionProperties": {
      "MemoryStoreRetentionPeriodInHours": {},
      "MagneticStoreRetentionPeriodInDays": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {},
    "MagneticStoreWriteProperties": {
      "EnableMagneticStoreWrites": {},
      "MagneticStoreRejectedDataLocation": {
        "S3Configuration": {
          "BucketName": {},
          "ObjectKeyPrefix": {},
          "EncryptionOption": {},
          "KmsKeyId": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Table|object|false|none|none|

<h2 id="tocS_UpdateTableRequest">UpdateTableRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetablerequest"></a>
<a id="schema_UpdateTableRequest"></a>
<a id="tocSupdatetablerequest"></a>
<a id="tocsupdatetablerequest"></a>

```json
{
  "DatabaseName": {},
  "TableName": {},
  "RetentionProperties": {
    "MemoryStoreRetentionPeriodInHours": {},
    "MagneticStoreRetentionPeriodInDays": {}
  },
  "MagneticStoreWriteProperties": {
    "EnableMagneticStoreWrites": {},
    "MagneticStoreRejectedDataLocation": {
      "S3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {},
        "EncryptionOption": {},
        "KmsKeyId": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|RetentionProperties|object|false|none|none|
|MagneticStoreWriteProperties|object|false|none|none|

<h2 id="tocS_WriteRecordsResponse">WriteRecordsResponse</h2>
<!-- backwards compatibility -->
<a id="schemawriterecordsresponse"></a>
<a id="schema_WriteRecordsResponse"></a>
<a id="tocSwriterecordsresponse"></a>
<a id="tocswriterecordsresponse"></a>

```json
{
  "RecordsIngested": {
    "Total": {},
    "MemoryStore": {},
    "MagneticStore": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordsIngested|object|false|none|none|

<h2 id="tocS_WriteRecordsRequest">WriteRecordsRequest</h2>
<!-- backwards compatibility -->
<a id="schemawriterecordsrequest"></a>
<a id="schema_WriteRecordsRequest"></a>
<a id="tocSwriterecordsrequest"></a>
<a id="tocswriterecordsrequest"></a>

```json
{
  "DatabaseName": {},
  "TableName": {},
  "CommonAttributes": {
    "Dimensions": {},
    "MeasureName": {},
    "MeasureValue": {},
    "MeasureValueType": {},
    "Time": {},
    "TimeUnit": {},
    "Version": {},
    "MeasureValues": {}
  },
  "Records": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|
|CommonAttributes|object|false|none|none|
|Records|object|true|none|none|

<h2 id="tocS_RejectedRecordsException">RejectedRecordsException</h2>
<!-- backwards compatibility -->
<a id="schemarejectedrecordsexception"></a>
<a id="schema_RejectedRecordsException"></a>
<a id="tocSrejectedrecordsexception"></a>
<a id="tocsrejectedrecordsexception"></a>

```json
null
```

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_BatchLoadDataFormat">BatchLoadDataFormat</h2>
<!-- backwards compatibility -->
<a id="schemabatchloaddataformat"></a>
<a id="schema_BatchLoadDataFormat"></a>
<a id="tocSbatchloaddataformat"></a>
<a id="tocsbatchloaddataformat"></a>

```json
"CSV"
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_BatchLoadProgressReport">BatchLoadProgressReport</h2>
<!-- backwards compatibility -->
<a id="schemabatchloadprogressreport"></a>
<a id="schema_BatchLoadProgressReport"></a>
<a id="tocSbatchloadprogressreport"></a>
<a id="tocsbatchloadprogressreport"></a>

```json
{
  "RecordsProcessed": {},
  "RecordsIngested": {},
  "ParseFailures": {},
  "RecordIngestionFailures": {},
  "FileFailures": {},
  "BytesMetered": {}
}
```

Details about the progress of a batch load task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordsProcessed|object|false|none|none|
|RecordsIngested|object|false|none|none|
|ParseFailures|object|false|none|none|
|RecordIngestionFailures|object|false|none|none|
|FileFailures|object|false|none|none|
|BytesMetered|object|false|none|none|

<h2 id="tocS_BatchLoadStatus">BatchLoadStatus</h2>
<!-- backwards compatibility -->
<a id="schemabatchloadstatus"></a>
<a id="schema_BatchLoadStatus"></a>
<a id="tocSbatchloadstatus"></a>
<a id="tocsbatchloadstatus"></a>

```json
"CREATED"
```

<h2 id="tocS_BatchLoadTaskId">BatchLoadTaskId</h2>
<!-- backwards compatibility -->
<a id="schemabatchloadtaskid"></a>
<a id="schema_BatchLoadTaskId"></a>
<a id="tocSbatchloadtaskid"></a>
<a id="tocsbatchloadtaskid"></a>

```json
"string"
```

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_BatchLoadTask">BatchLoadTask</h2>
<!-- backwards compatibility -->
<a id="schemabatchloadtask"></a>
<a id="schema_BatchLoadTask"></a>
<a id="tocSbatchloadtask"></a>
<a id="tocsbatchloadtask"></a>

```json
{
  "TaskId": {},
  "TaskStatus": {},
  "DatabaseName": {},
  "TableName": {},
  "CreationTime": {},
  "LastUpdatedTime": {},
  "ResumableUntil": {}
}
```

Details about a batch load task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskId|object|false|none|none|
|TaskStatus|object|false|none|none|
|DatabaseName|object|false|none|none|
|TableName|object|false|none|none|
|CreationTime|object|false|none|none|
|LastUpdatedTime|object|false|none|none|
|ResumableUntil|object|false|none|none|

<h2 id="tocS_StringValue2048">StringValue2048</h2>
<!-- backwards compatibility -->
<a id="schemastringvalue2048"></a>
<a id="schema_StringValue2048"></a>
<a id="tocSstringvalue2048"></a>
<a id="tocsstringvalue2048"></a>

```json
"string"
```

<h2 id="tocS_DataSourceConfiguration">DataSourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceconfiguration"></a>
<a id="schema_DataSourceConfiguration"></a>
<a id="tocSdatasourceconfiguration"></a>
<a id="tocsdatasourceconfiguration"></a>

```json
{
  "DataSourceS3Configuration": {
    "BucketName": {},
    "ObjectKeyPrefix": {}
  },
  "CsvConfiguration": {
    "ColumnSeparator": {},
    "EscapeChar": {},
    "QuoteChar": {},
    "NullValue": {},
    "TrimWhiteSpace": {}
  },
  "DataFormat": {}
}
```

Defines configuration details about the data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceS3Configuration|object|true|none|none|
|CsvConfiguration|[CsvConfiguration](#schemacsvconfiguration)|false|none|A delimited data format where the column separator can be a comma and the record separator is a newline character.|
|DataFormat|object|true|none|none|

<h2 id="tocS_ReportConfiguration">ReportConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemareportconfiguration"></a>
<a id="schema_ReportConfiguration"></a>
<a id="tocSreportconfiguration"></a>
<a id="tocsreportconfiguration"></a>

```json
{
  "ReportS3Configuration": {
    "BucketName": {},
    "ObjectKeyPrefix": {},
    "EncryptionOption": {},
    "KmsKeyId": {}
  }
}
```

Report configuration for a batch load task. This contains details about where error reports are stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportS3Configuration|object|false|none|none|

<h2 id="tocS_DataModelConfiguration">DataModelConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadatamodelconfiguration"></a>
<a id="schema_DataModelConfiguration"></a>
<a id="tocSdatamodelconfiguration"></a>
<a id="tocsdatamodelconfiguration"></a>

```json
{
  "DataModel": {
    "TimeColumn": {},
    "TimeUnit": {},
    "DimensionMappings": {},
    "MultiMeasureMappings": {
      "TargetMultiMeasureName": {},
      "MultiMeasureAttributeMappings": {}
    },
    "MixedMeasureMappings": {},
    "MeasureNameColumn": {}
  },
  "DataModelS3Configuration": {
    "BucketName": {},
    "ObjectKey": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataModel|object|false|none|none|
|DataModelS3Configuration|object|false|none|none|

<h2 id="tocS_RecordVersion">RecordVersion</h2>
<!-- backwards compatibility -->
<a id="schemarecordversion"></a>
<a id="schema_RecordVersion"></a>
<a id="tocSrecordversion"></a>
<a id="tocsrecordversion"></a>

```json
0
```

<h2 id="tocS_BatchLoadTaskDescription">BatchLoadTaskDescription</h2>
<!-- backwards compatibility -->
<a id="schemabatchloadtaskdescription"></a>
<a id="schema_BatchLoadTaskDescription"></a>
<a id="tocSbatchloadtaskdescription"></a>
<a id="tocsbatchloadtaskdescription"></a>

```json
{
  "TaskId": {},
  "ErrorMessage": {},
  "DataSourceConfiguration": {
    "DataSourceS3Configuration": {
      "BucketName": {},
      "ObjectKeyPrefix": {}
    },
    "CsvConfiguration": {
      "ColumnSeparator": {},
      "EscapeChar": {},
      "QuoteChar": {},
      "NullValue": {},
      "TrimWhiteSpace": {}
    },
    "DataFormat": {}
  },
  "ProgressReport": {
    "RecordsProcessed": {},
    "RecordsIngested": {},
    "ParseFailures": {},
    "RecordIngestionFailures": {},
    "FileFailures": {},
    "BytesMetered": {}
  },
  "ReportConfiguration": {
    "ReportS3Configuration": {
      "BucketName": {},
      "ObjectKeyPrefix": {},
      "EncryptionOption": {},
      "KmsKeyId": {}
    }
  },
  "DataModelConfiguration": {
    "DataModel": {
      "TimeColumn": {},
      "TimeUnit": {},
      "DimensionMappings": {},
      "MultiMeasureMappings": {
        "TargetMultiMeasureName": {},
        "MultiMeasureAttributeMappings": {}
      },
      "MixedMeasureMappings": {},
      "MeasureNameColumn": {}
    },
    "DataModelS3Configuration": {
      "BucketName": {},
      "ObjectKey": {}
    }
  },
  "TargetDatabaseName": {},
  "TargetTableName": {},
  "TaskStatus": {},
  "RecordVersion": {},
  "CreationTime": {},
  "LastUpdatedTime": {},
  "ResumableUntil": {}
}
```

Details about a batch load task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TaskId|object|false|none|none|
|ErrorMessage|object|false|none|none|
|DataSourceConfiguration|object|false|none|none|
|ProgressReport|object|false|none|none|
|ReportConfiguration|object|false|none|none|
|DataModelConfiguration|object|false|none|none|
|TargetDatabaseName|object|false|none|none|
|TargetTableName|object|false|none|none|
|TaskStatus|object|false|none|none|
|RecordVersion|object|false|none|none|
|CreationTime|object|false|none|none|
|LastUpdatedTime|object|false|none|none|
|ResumableUntil|object|false|none|none|

<h2 id="tocS_BatchLoadTaskList">BatchLoadTaskList</h2>
<!-- backwards compatibility -->
<a id="schemabatchloadtasklist"></a>
<a id="schema_BatchLoadTaskList"></a>
<a id="tocSbatchloadtasklist"></a>
<a id="tocsbatchloadtasklist"></a>

```json
[
  {
    "TaskId": {},
    "TaskStatus": {},
    "DatabaseName": {},
    "TableName": {},
    "CreationTime": {},
    "LastUpdatedTime": {},
    "ResumableUntil": {}
  }
]
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"password"
```

<h2 id="tocS_ResourceCreateAPIName">ResourceCreateAPIName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecreateapiname"></a>
<a id="schema_ResourceCreateAPIName"></a>
<a id="tocSresourcecreateapiname"></a>
<a id="tocsresourcecreateapiname"></a>

```json
"string"
```

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Database">Database</h2>
<!-- backwards compatibility -->
<a id="schemadatabase"></a>
<a id="schema_Database"></a>
<a id="tocSdatabase"></a>
<a id="tocsdatabase"></a>

```json
{
  "Arn": {},
  "DatabaseName": {},
  "TableCount": {},
  "KmsKeyId": {},
  "CreationTime": {},
  "LastUpdatedTime": {}
}
```

A top-level container for a table. Databases and tables are the fundamental management concepts in Amazon Timestream. All tables in a database are encrypted with the same KMS key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|DatabaseName|object|false|none|none|
|TableCount|object|false|none|none|
|KmsKeyId|object|false|none|none|
|CreationTime|object|false|none|none|
|LastUpdatedTime|object|false|none|none|

<h2 id="tocS_RetentionProperties">RetentionProperties</h2>
<!-- backwards compatibility -->
<a id="schemaretentionproperties"></a>
<a id="schema_RetentionProperties"></a>
<a id="tocSretentionproperties"></a>
<a id="tocsretentionproperties"></a>

```json
{
  "MemoryStoreRetentionPeriodInHours": {},
  "MagneticStoreRetentionPeriodInDays": {}
}
```

Retention properties contain the duration for which your time-series data must be stored in the magnetic store and the memory store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MemoryStoreRetentionPeriodInHours|object|true|none|none|
|MagneticStoreRetentionPeriodInDays|object|true|none|none|

<h2 id="tocS_MagneticStoreWriteProperties">MagneticStoreWriteProperties</h2>
<!-- backwards compatibility -->
<a id="schemamagneticstorewriteproperties"></a>
<a id="schema_MagneticStoreWriteProperties"></a>
<a id="tocSmagneticstorewriteproperties"></a>
<a id="tocsmagneticstorewriteproperties"></a>

```json
{
  "EnableMagneticStoreWrites": {},
  "MagneticStoreRejectedDataLocation": {
    "S3Configuration": {
      "BucketName": {},
      "ObjectKeyPrefix": {},
      "EncryptionOption": {},
      "KmsKeyId": {}
    }
  }
}
```

The set of properties on a table for configuring magnetic store writes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnableMagneticStoreWrites|object|true|none|none|
|MagneticStoreRejectedDataLocation|object|false|none|none|

<h2 id="tocS_Table">Table</h2>
<!-- backwards compatibility -->
<a id="schematable"></a>
<a id="schema_Table"></a>
<a id="tocStable"></a>
<a id="tocstable"></a>

```json
{
  "Arn": {},
  "TableName": {},
  "DatabaseName": {},
  "TableStatus": {},
  "RetentionProperties": {
    "MemoryStoreRetentionPeriodInHours": {},
    "MagneticStoreRetentionPeriodInDays": {}
  },
  "CreationTime": {},
  "LastUpdatedTime": {},
  "MagneticStoreWriteProperties": {
    "EnableMagneticStoreWrites": {},
    "MagneticStoreRejectedDataLocation": {
      "S3Configuration": {
        "BucketName": {},
        "ObjectKeyPrefix": {},
        "EncryptionOption": {},
        "KmsKeyId": {}
      }
    }
  }
}
```

Represents a database table in Timestream. Tables contain one or more related time series. You can modify the retention duration of the memory store and the magnetic store for a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|TableName|object|false|none|none|
|DatabaseName|object|false|none|none|
|TableStatus|object|false|none|none|
|RetentionProperties|object|false|none|none|
|CreationTime|object|false|none|none|
|LastUpdatedTime|object|false|none|none|
|MagneticStoreWriteProperties|object|false|none|none|

<h2 id="tocS_StringValue1">StringValue1</h2>
<!-- backwards compatibility -->
<a id="schemastringvalue1"></a>
<a id="schema_StringValue1"></a>
<a id="tocSstringvalue1"></a>
<a id="tocsstringvalue1"></a>

```json
"s"
```

<h2 id="tocS_StringValue256">StringValue256</h2>
<!-- backwards compatibility -->
<a id="schemastringvalue256"></a>
<a id="schema_StringValue256"></a>
<a id="tocSstringvalue256"></a>
<a id="tocsstringvalue256"></a>

```json
"string"
```

<h2 id="tocS_CsvConfiguration">CsvConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacsvconfiguration"></a>
<a id="schema_CsvConfiguration"></a>
<a id="tocScsvconfiguration"></a>
<a id="tocscsvconfiguration"></a>

```json
{
  "ColumnSeparator": {},
  "EscapeChar": {},
  "QuoteChar": {},
  "NullValue": {},
  "TrimWhiteSpace": {}
}
```

A delimited data format where the column separator can be a comma and the record separator is a newline character.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ColumnSeparator|object|false|none|none|
|EscapeChar|object|false|none|none|
|QuoteChar|object|false|none|none|
|NullValue|object|false|none|none|
|TrimWhiteSpace|object|false|none|none|

<h2 id="tocS_TimeUnit">TimeUnit</h2>
<!-- backwards compatibility -->
<a id="schematimeunit"></a>
<a id="schema_TimeUnit"></a>
<a id="tocStimeunit"></a>
<a id="tocstimeunit"></a>

```json
"MILLISECONDS"
```

<h2 id="tocS_DimensionMappings">DimensionMappings</h2>
<!-- backwards compatibility -->
<a id="schemadimensionmappings"></a>
<a id="schema_DimensionMappings"></a>
<a id="tocSdimensionmappings"></a>
<a id="tocsdimensionmappings"></a>

```json
[
  {
    "SourceColumn": {},
    "DestinationColumn": {}
  }
]
```

<h2 id="tocS_MultiMeasureMappings">MultiMeasureMappings</h2>
<!-- backwards compatibility -->
<a id="schemamultimeasuremappings"></a>
<a id="schema_MultiMeasureMappings"></a>
<a id="tocSmultimeasuremappings"></a>
<a id="tocsmultimeasuremappings"></a>

```json
{
  "TargetMultiMeasureName": {},
  "MultiMeasureAttributeMappings": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetMultiMeasureName|object|false|none|none|
|MultiMeasureAttributeMappings|object|true|none|none|

<h2 id="tocS_MixedMeasureMappingList">MixedMeasureMappingList</h2>
<!-- backwards compatibility -->
<a id="schemamixedmeasuremappinglist"></a>
<a id="schema_MixedMeasureMappingList"></a>
<a id="tocSmixedmeasuremappinglist"></a>
<a id="tocsmixedmeasuremappinglist"></a>

```json
[
  {
    "MeasureName": {},
    "SourceColumn": {},
    "TargetMeasureName": {},
    "MeasureValueType": {},
    "MultiMeasureAttributeMappings": {}
  }
]
```

<h2 id="tocS_DataModel">DataModel</h2>
<!-- backwards compatibility -->
<a id="schemadatamodel"></a>
<a id="schema_DataModel"></a>
<a id="tocSdatamodel"></a>
<a id="tocsdatamodel"></a>

```json
{
  "TimeColumn": {},
  "TimeUnit": {},
  "DimensionMappings": {},
  "MultiMeasureMappings": {
    "TargetMultiMeasureName": {},
    "MultiMeasureAttributeMappings": {}
  },
  "MixedMeasureMappings": {},
  "MeasureNameColumn": {}
}
```

Data model for a batch load task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeColumn|object|false|none|none|
|TimeUnit|object|false|none|none|
|DimensionMappings|object|true|none|none|
|MultiMeasureMappings|object|false|none|none|
|MixedMeasureMappings|object|false|none|none|
|MeasureNameColumn|object|false|none|none|

<h2 id="tocS_DataModelS3Configuration">DataModelS3Configuration</h2>
<!-- backwards compatibility -->
<a id="schemadatamodels3configuration"></a>
<a id="schema_DataModelS3Configuration"></a>
<a id="tocSdatamodels3configuration"></a>
<a id="tocsdatamodels3configuration"></a>

```json
{
  "BucketName": {},
  "ObjectKey": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|false|none|none|
|ObjectKey|object|false|none|none|

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_S3ObjectKey">S3ObjectKey</h2>
<!-- backwards compatibility -->
<a id="schemas3objectkey"></a>
<a id="schema_S3ObjectKey"></a>
<a id="tocSs3objectkey"></a>
<a id="tocss3objectkey"></a>

```json
"string"
```

<h2 id="tocS_DataSourceS3Configuration">DataSourceS3Configuration</h2>
<!-- backwards compatibility -->
<a id="schemadatasources3configuration"></a>
<a id="schema_DataSourceS3Configuration"></a>
<a id="tocSdatasources3configuration"></a>
<a id="tocsdatasources3configuration"></a>

```json
{
  "BucketName": {},
  "ObjectKeyPrefix": {}
}
```



### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|true|none|none|
|ObjectKeyPrefix|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_DatabaseList">DatabaseList</h2>
<!-- backwards compatibility -->
<a id="schemadatabaselist"></a>
<a id="schema_DatabaseList"></a>
<a id="tocSdatabaselist"></a>
<a id="tocsdatabaselist"></a>

```json
[
  {
    "Arn": {},
    "DatabaseName": {},
    "TableCount": {},
    "KmsKeyId": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
]
```

<h2 id="tocS_Endpoints">Endpoints</h2>
<!-- backwards compatibility -->
<a id="schemaendpoints"></a>
<a id="schema_Endpoints"></a>
<a id="tocSendpoints"></a>
<a id="tocsendpoints"></a>

```json
[
  {
    "Address": {},
    "CachePeriodInMinutes": {}
  }
]
```

<h2 id="tocS_SchemaName">SchemaName</h2>
<!-- backwards compatibility -->
<a id="schemaschemaname"></a>
<a id="schema_SchemaName"></a>
<a id="tocSschemaname"></a>
<a id="tocsschemaname"></a>

```json
"string"
```

<h2 id="tocS_SchemaValue">SchemaValue</h2>
<!-- backwards compatibility -->
<a id="schemaschemavalue"></a>
<a id="schema_SchemaValue"></a>
<a id="tocSschemavalue"></a>
<a id="tocsschemavalue"></a>

```json
"string"
```

<h2 id="tocS_DimensionValueType">DimensionValueType</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvaluetype"></a>
<a id="schema_DimensionValueType"></a>
<a id="tocSdimensionvaluetype"></a>
<a id="tocsdimensionvaluetype"></a>

```json
"VARCHAR"
```

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
{
  "Name": {},
  "Value": {},
  "DimensionValueType": {}
}
```

Represents the metadata attributes of the time series. For example, the name and Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|
|DimensionValueType|object|false|none|none|

<h2 id="tocS_DimensionMapping">DimensionMapping</h2>
<!-- backwards compatibility -->
<a id="schemadimensionmapping"></a>
<a id="schema_DimensionMapping"></a>
<a id="tocSdimensionmapping"></a>
<a id="tocsdimensionmapping"></a>

```json
{
  "SourceColumn": {},
  "DestinationColumn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceColumn|object|false|none|none|
|DestinationColumn|object|false|none|none|

<h2 id="tocS_Dimensions">Dimensions</h2>
<!-- backwards compatibility -->
<a id="schemadimensions"></a>
<a id="schema_Dimensions"></a>
<a id="tocSdimensions"></a>
<a id="tocsdimensions"></a>

```json
[
  {
    "Name": {},
    "Value": {},
    "DimensionValueType": {}
  }
]
```

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "Address": {},
  "CachePeriodInMinutes": {}
}
```

Represents an available endpoint against which to make API calls against, as well as the TTL for that endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|object|true|none|none|
|CachePeriodInMinutes|object|true|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_PageLimit">PageLimit</h2>
<!-- backwards compatibility -->
<a id="schemapagelimit"></a>
<a id="schema_PageLimit"></a>
<a id="tocSpagelimit"></a>
<a id="tocspagelimit"></a>

```json
1
```

<h2 id="tocS_PaginationLimit">PaginationLimit</h2>
<!-- backwards compatibility -->
<a id="schemapaginationlimit"></a>
<a id="schema_PaginationLimit"></a>
<a id="tocSpaginationlimit"></a>
<a id="tocspaginationlimit"></a>

```json
1
```

<h2 id="tocS_TableList">TableList</h2>
<!-- backwards compatibility -->
<a id="schematablelist"></a>
<a id="schema_TableList"></a>
<a id="tocStablelist"></a>
<a id="tocstablelist"></a>

```json
[
  {
    "Arn": {},
    "TableName": {},
    "DatabaseName": {},
    "TableStatus": {},
    "RetentionProperties": {
      "MemoryStoreRetentionPeriodInHours": {},
      "MagneticStoreRetentionPeriodInDays": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {},
    "MagneticStoreWriteProperties": {
      "EnableMagneticStoreWrites": {},
      "MagneticStoreRejectedDataLocation": {
        "S3Configuration": {
          "BucketName": {},
          "ObjectKeyPrefix": {},
          "EncryptionOption": {},
          "KmsKeyId": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_S3Configuration">S3Configuration</h2>
<!-- backwards compatibility -->
<a id="schemas3configuration"></a>
<a id="schema_S3Configuration"></a>
<a id="tocSs3configuration"></a>
<a id="tocss3configuration"></a>

```json
{
  "BucketName": {},
  "ObjectKeyPrefix": {},
  "EncryptionOption": {},
  "KmsKeyId": {}
}
```

The configuration that specifies an S3 location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|false|none|none|
|ObjectKeyPrefix|object|false|none|none|
|EncryptionOption|object|false|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_MagneticStoreRejectedDataLocation">MagneticStoreRejectedDataLocation</h2>
<!-- backwards compatibility -->
<a id="schemamagneticstorerejecteddatalocation"></a>
<a id="schema_MagneticStoreRejectedDataLocation"></a>
<a id="tocSmagneticstorerejecteddatalocation"></a>
<a id="tocsmagneticstorerejecteddatalocation"></a>

```json
{
  "S3Configuration": {
    "BucketName": {},
    "ObjectKeyPrefix": {},
    "EncryptionOption": {},
    "KmsKeyId": {}
  }
}
```

The location to write error reports for records rejected, asynchronously, during magnetic store writes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Configuration|object|false|none|none|

<h2 id="tocS_MagneticStoreRetentionPeriodInDays">MagneticStoreRetentionPeriodInDays</h2>
<!-- backwards compatibility -->
<a id="schemamagneticstoreretentionperiodindays"></a>
<a id="schema_MagneticStoreRetentionPeriodInDays"></a>
<a id="tocSmagneticstoreretentionperiodindays"></a>
<a id="tocsmagneticstoreretentionperiodindays"></a>

```json
1
```

<h2 id="tocS_MeasureValueType">MeasureValueType</h2>
<!-- backwards compatibility -->
<a id="schemameasurevaluetype"></a>
<a id="schema_MeasureValueType"></a>
<a id="tocSmeasurevaluetype"></a>
<a id="tocsmeasurevaluetype"></a>

```json
"DOUBLE"
```

<h2 id="tocS_MeasureValue">MeasureValue</h2>
<!-- backwards compatibility -->
<a id="schemameasurevalue"></a>
<a id="schema_MeasureValue"></a>
<a id="tocSmeasurevalue"></a>
<a id="tocsmeasurevalue"></a>

```json
{
  "Name": {},
  "Value": {},
  "Type": {}
}
```

<p> Represents the data attribute of the time series. For example, the CPU utilization of an EC2 instance or the RPM of a wind turbine are measures. MeasureValue has both name and value. </p> <p> MeasureValue is only allowed for type <code>MULTI</code>. Using <code>MULTI</code> type, you can pass multiple data attributes associated with the same time series in a single record </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_MeasureValues">MeasureValues</h2>
<!-- backwards compatibility -->
<a id="schemameasurevalues"></a>
<a id="schema_MeasureValues"></a>
<a id="tocSmeasurevalues"></a>
<a id="tocsmeasurevalues"></a>

```json
[
  {
    "Name": {},
    "Value": {},
    "Type": {}
  }
]
```

<h2 id="tocS_MemoryStoreRetentionPeriodInHours">MemoryStoreRetentionPeriodInHours</h2>
<!-- backwards compatibility -->
<a id="schemamemorystoreretentionperiodinhours"></a>
<a id="schema_MemoryStoreRetentionPeriodInHours"></a>
<a id="tocSmemorystoreretentionperiodinhours"></a>
<a id="tocsmemorystoreretentionperiodinhours"></a>

```json
1
```

<h2 id="tocS_MultiMeasureAttributeMappingList">MultiMeasureAttributeMappingList</h2>
<!-- backwards compatibility -->
<a id="schemamultimeasureattributemappinglist"></a>
<a id="schema_MultiMeasureAttributeMappingList"></a>
<a id="tocSmultimeasureattributemappinglist"></a>
<a id="tocsmultimeasureattributemappinglist"></a>

```json
[
  {
    "SourceColumn": {},
    "TargetMultiMeasureAttributeName": {},
    "MeasureValueType": {}
  }
]
```

<h2 id="tocS_MixedMeasureMapping">MixedMeasureMapping</h2>
<!-- backwards compatibility -->
<a id="schemamixedmeasuremapping"></a>
<a id="schema_MixedMeasureMapping"></a>
<a id="tocSmixedmeasuremapping"></a>
<a id="tocsmixedmeasuremapping"></a>

```json
{
  "MeasureName": {},
  "SourceColumn": {},
  "TargetMeasureName": {},
  "MeasureValueType": {},
  "MultiMeasureAttributeMappings": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MeasureName|object|false|none|none|
|SourceColumn|object|false|none|none|
|TargetMeasureName|object|false|none|none|
|MeasureValueType|object|true|none|none|
|MultiMeasureAttributeMappings|object|false|none|none|

<h2 id="tocS_ScalarMeasureValueType">ScalarMeasureValueType</h2>
<!-- backwards compatibility -->
<a id="schemascalarmeasurevaluetype"></a>
<a id="schema_ScalarMeasureValueType"></a>
<a id="tocSscalarmeasurevaluetype"></a>
<a id="tocsscalarmeasurevaluetype"></a>

```json
"DOUBLE"
```

<h2 id="tocS_MultiMeasureAttributeMapping">MultiMeasureAttributeMapping</h2>
<!-- backwards compatibility -->
<a id="schemamultimeasureattributemapping"></a>
<a id="schema_MultiMeasureAttributeMapping"></a>
<a id="tocSmultimeasureattributemapping"></a>
<a id="tocsmultimeasureattributemapping"></a>

```json
{
  "SourceColumn": {},
  "TargetMultiMeasureAttributeName": {},
  "MeasureValueType": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceColumn|object|true|none|none|
|TargetMultiMeasureAttributeName|object|false|none|none|
|MeasureValueType|object|false|none|none|

<h2 id="tocS_Record">Record</h2>
<!-- backwards compatibility -->
<a id="schemarecord"></a>
<a id="schema_Record"></a>
<a id="tocSrecord"></a>
<a id="tocsrecord"></a>

```json
{
  "Dimensions": {},
  "MeasureName": {},
  "MeasureValue": {},
  "MeasureValueType": {},
  "Time": {},
  "TimeUnit": {},
  "Version": {},
  "MeasureValues": {}
}
```

<p>Represents a time-series data point being written into Timestream. Each record contains an array of dimensions. Dimensions represent the metadata attributes of a time-series data point, such as the instance name or Availability Zone of an EC2 instance. A record also contains the measure name, which is the name of the measure being collected (for example, the CPU utilization of an EC2 instance). Additionally, a record contains the measure value and the value type, which is the data type of the measure value. Also, the record contains the timestamp of when the measure was collected and the timestamp unit, which represents the granularity of the timestamp. </p> <p> Records have a <code>Version</code> field, which is a 64-bit <code>long</code> that you can use for updating data points. Writes of a duplicate record with the same dimension, timestamp, and measure name but different measure value will only succeed if the <code>Version</code> attribute of the record in the write request is higher than that of the existing record. Timestream defaults to a <code>Version</code> of <code>1</code> for records without the <code>Version</code> field. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Dimensions|object|false|none|none|
|MeasureName|object|false|none|none|
|MeasureValue|object|false|none|none|
|MeasureValueType|object|false|none|none|
|Time|object|false|none|none|
|TimeUnit|object|false|none|none|
|Version|object|false|none|none|
|MeasureValues|object|false|none|none|

<h2 id="tocS_Records">Records</h2>
<!-- backwards compatibility -->
<a id="schemarecords"></a>
<a id="schema_Records"></a>
<a id="tocSrecords"></a>
<a id="tocsrecords"></a>

```json
[
  {
    "Dimensions": {},
    "MeasureName": {},
    "MeasureValue": {},
    "MeasureValueType": {},
    "Time": {},
    "TimeUnit": {},
    "Version": {},
    "MeasureValues": {}
  }
]
```

<h2 id="tocS_RecordsIngested">RecordsIngested</h2>
<!-- backwards compatibility -->
<a id="schemarecordsingested"></a>
<a id="schema_RecordsIngested"></a>
<a id="tocSrecordsingested"></a>
<a id="tocsrecordsingested"></a>

```json
{
  "Total": {},
  "MemoryStore": {},
  "MagneticStore": {}
}
```

Information on the records ingested by this request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Total|object|false|none|none|
|MemoryStore|object|false|none|none|
|MagneticStore|object|false|none|none|

<h2 id="tocS_ReportS3Configuration">ReportS3Configuration</h2>
<!-- backwards compatibility -->
<a id="schemareports3configuration"></a>
<a id="schema_ReportS3Configuration"></a>
<a id="tocSreports3configuration"></a>
<a id="tocsreports3configuration"></a>

```json
{
  "BucketName": {},
  "ObjectKeyPrefix": {},
  "EncryptionOption": {},
  "KmsKeyId": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|true|none|none|
|ObjectKeyPrefix|object|false|none|none|
|EncryptionOption|object|false|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_S3ObjectKeyPrefix">S3ObjectKeyPrefix</h2>
<!-- backwards compatibility -->
<a id="schemas3objectkeyprefix"></a>
<a id="schema_S3ObjectKeyPrefix"></a>
<a id="tocSs3objectkeyprefix"></a>
<a id="tocss3objectkeyprefix"></a>

```json
"string"
```

<h2 id="tocS_S3EncryptionOption">S3EncryptionOption</h2>
<!-- backwards compatibility -->
<a id="schemas3encryptionoption"></a>
<a id="schema_S3EncryptionOption"></a>
<a id="tocSs3encryptionoption"></a>
<a id="tocss3encryptionoption"></a>

```json
"SSE_S3"
```

<h2 id="tocS_TableStatus">TableStatus</h2>
<!-- backwards compatibility -->
<a id="schematablestatus"></a>
<a id="schema_TableStatus"></a>
<a id="tocStablestatus"></a>
<a id="tocstablestatus"></a>

```json
"ACTIVE"
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

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

 A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. With tags, you can categorize databases and/or tables, for example, by purpose, owner, or environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```
