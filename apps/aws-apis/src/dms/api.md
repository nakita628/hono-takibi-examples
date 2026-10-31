<h1 id="aws-database-migration-service">AWS Database Migration Service v2016-01-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Database Migration Service</fullname> <p>Database Migration Service (DMS) can migrate your data to and from the most widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL.</p> <p>For more information about DMS, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html">What Is Database Migration Service?</a> in the <i>Database Migration Service User Guide.</i> </p>

Base URLs:

* <a href="http://dms.us-east-1.amazonaws.com">http://dms.us-east-1.amazonaws.com</a> - The AWS Database Migration Service multi-region endpoint

* <a href="https://dms.us-east-1.amazonaws.com">https://dms.us-east-1.amazonaws.com</a> - The AWS Database Migration Service multi-region endpoint

* <a href="http://dms.cn-north-1.amazonaws.com.cn">http://dms.cn-north-1.amazonaws.com.cn</a> - The AWS Database Migration Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://dms.cn-north-1.amazonaws.com.cn">https://dms.cn-north-1.amazonaws.com.cn</a> - The AWS Database Migration Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/dms/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-database-migration-service-default">Default</h1>

## AddTagsToResource

<a id="opIdAddTagsToResource"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.AddTagsToResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource`

Adds metadata tags to an DMS resource, including replication instance, endpoint, subnet group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.

> Body parameter

```json
{
  "ResourceArn": {},
  "Tags": {}
}
```

<h3 id="addtagstoresource-parameters">Parameters</h3>

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
|body|body|[AddTagsToResourceMessage](#schemaaddtagstoresourcemessage)|true|none|
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.AddTagsToResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="addtagstoresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddTagsToResourceResponse](#schemaaddtagstoresourceresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ApplyPendingMaintenanceAction

<a id="opIdApplyPendingMaintenanceAction"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.ApplyPendingMaintenanceAction' \
  -d '{
    "ReplicationInstanceArn": {},
    "ApplyAction": {},
    "OptInType": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction`

Applies a pending maintenance action to a resource (for example, to a replication instance).

> Body parameter

```json
{
  "ReplicationInstanceArn": {},
  "ApplyAction": {},
  "OptInType": {}
}
```

<h3 id="applypendingmaintenanceaction-parameters">Parameters</h3>

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
|body|body|[ApplyPendingMaintenanceActionMessage](#schemaapplypendingmaintenanceactionmessage)|true|none|
|» ReplicationInstanceArn|body|object|true|none|
|» ApplyAction|body|object|true|none|
|» OptInType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.ApplyPendingMaintenanceAction|

> Example responses

> 200 Response

```json
{
  "ResourcePendingMaintenanceActions": {
    "ResourceIdentifier": {},
    "PendingMaintenanceActionDetails": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="applypendingmaintenanceaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApplyPendingMaintenanceActionResponse](#schemaapplypendingmaintenanceactionresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchStartRecommendations

<a id="opIdBatchStartRecommendations"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.BatchStartRecommendations' \
  -d '{
    "Data": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.BatchStartRecommendations`

<p>Starts the analysis of up to 20 source databases to recommend target engines for each source database. This is a batch version of <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartRecommendations.html">StartRecommendations</a>.</p> <p>The result of analysis of each source database is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>

> Body parameter

```json
{
  "Data": {}
}
```

<h3 id="batchstartrecommendations-parameters">Parameters</h3>

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
|body|body|[BatchStartRecommendationsRequest](#schemabatchstartrecommendationsrequest)|true|none|
|» Data|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.BatchStartRecommendations|

> Example responses

> 200 Response

```json
{
  "ErrorEntries": {}
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

<h3 id="batchstartrecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchStartRecommendationsResponse](#schemabatchstartrecommendationsresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|482|482|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelReplicationTaskAssessmentRun

<a id="opIdCancelReplicationTaskAssessmentRun"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.CancelReplicationTaskAssessmentRun' \
  -d '{
    "ReplicationTaskAssessmentRunArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.CancelReplicationTaskAssessmentRun`

<p>Cancels a single premigration assessment run.</p> <p>This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.</p>

> Body parameter

```json
{
  "ReplicationTaskAssessmentRunArn": {}
}
```

<h3 id="cancelreplicationtaskassessmentrun-parameters">Parameters</h3>

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
|body|body|[CancelReplicationTaskAssessmentRunMessage](#schemacancelreplicationtaskassessmentrunmessage)|true|none|
|» ReplicationTaskAssessmentRunArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.CancelReplicationTaskAssessmentRun|

> Example responses

> 200 Response

```json
{
  "ReplicationTaskAssessmentRun": {
    "ReplicationTaskAssessmentRunArn": {},
    "ReplicationTaskArn": {},
    "Status": {},
    "ReplicationTaskAssessmentRunCreationDate": {},
    "AssessmentProgress": {
      "IndividualAssessmentCount": {},
      "IndividualAssessmentCompletedCount": {}
    },
    "LastFailureMessage": {},
    "ServiceAccessRoleArn": {},
    "ResultLocationBucket": {},
    "ResultLocationFolder": {},
    "ResultEncryptionMode": {},
    "ResultKmsKeyArn": {},
    "AssessmentRunName": {}
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

<h3 id="cancelreplicationtaskassessmentrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelReplicationTaskAssessmentRunResponse](#schemacancelreplicationtaskassessmentrunresponse)|
|480|480|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|482|482|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEndpoint

<a id="opIdCreateEndpoint"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.CreateEndpoint' \
  -d '{
    "EndpointIdentifier": {},
    "EndpointType": {},
    "EngineName": {},
    "Username": {},
    "Password": {},
    "ServerName": {},
    "Port": {},
    "DatabaseName": {},
    "ExtraConnectionAttributes": {},
    "KmsKeyId": {},
    "Tags": {},
    "CertificateArn": {},
    "SslMode": {},
    "ServiceAccessRoleArn": {},
    "ExternalTableDefinition": {},
    "DynamoDbSettings": {
      "ServiceAccessRoleArn": {}
    },
    "S3Settings": {
      "ServiceAccessRoleArn": {},
      "ExternalTableDefinition": {},
      "CsvRowDelimiter": {},
      "CsvDelimiter": {},
      "BucketFolder": {},
      "BucketName": {},
      "CompressionType": {},
      "EncryptionMode": {},
      "ServerSideEncryptionKmsKeyId": {},
      "DataFormat": {},
      "EncodingType": {},
      "DictPageSizeLimit": {},
      "RowGroupLength": {},
      "DataPageSize": {},
      "ParquetVersion": {},
      "EnableStatistics": {},
      "IncludeOpForFullLoad": {},
      "CdcInsertsOnly": {},
      "TimestampColumnName": {},
      "ParquetTimestampInMillisecond": {},
      "CdcInsertsAndUpdates": {},
      "DatePartitionEnabled": {},
      "DatePartitionSequence": {},
      "DatePartitionDelimiter": {},
      "UseCsvNoSupValue": {},
      "CsvNoSupValue": {},
      "PreserveTransactions": {},
      "CdcPath": {},
      "UseTaskStartTimeForFullLoadTimestamp": {},
      "CannedAclForObjects": {},
      "AddColumnName": {},
      "CdcMaxBatchInterval": {},
      "CdcMinFileSize": {},
      "CsvNullValue": {},
      "IgnoreHeaderRows": {},
      "MaxFileSize": {},
      "Rfc4180": {},
      "DatePartitionTimezone": {},
      "AddTrailingPaddingCharacter": {},
      "ExpectedBucketOwner": {},
      "GlueCatalogGeneration": {}
    },
    "DmsTransferSettings": {
      "ServiceAccessRoleArn": {},
      "BucketName": {}
    },
    "MongoDbSettings": {
      "Username": {},
      "Password": {},
      "ServerName": {},
      "Port": {},
      "DatabaseName": {},
      "AuthType": {},
      "AuthMechanism": {},
      "NestingLevel": {},
      "ExtractDocId": {},
      "DocsToInvestigate": {},
      "AuthSource": {},
      "KmsKeyId": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "KinesisSettings": {
      "StreamArn": {},
      "MessageFormat": {},
      "ServiceAccessRoleArn": {},
      "IncludeTransactionDetails": {},
      "IncludePartitionValue": {},
      "PartitionIncludeSchemaTable": {},
      "IncludeTableAlterOperations": {},
      "IncludeControlDetails": {},
      "IncludeNullAndEmpty": {},
      "NoHexPrefix": {}
    },
    "KafkaSettings": {
      "Broker": {},
      "Topic": {},
      "MessageFormat": {},
      "IncludeTransactionDetails": {},
      "IncludePartitionValue": {},
      "PartitionIncludeSchemaTable": {},
      "IncludeTableAlterOperations": {},
      "IncludeControlDetails": {},
      "MessageMaxBytes": {},
      "IncludeNullAndEmpty": {},
      "SecurityProtocol": {},
      "SslClientCertificateArn": {},
      "SslClientKeyArn": {},
      "SslClientKeyPassword": {},
      "SslCaCertificateArn": {},
      "SaslUsername": {},
      "SaslPassword": {},
      "NoHexPrefix": {},
      "SaslMechanism": {}
    },
    "ElasticsearchSettings": {
      "ServiceAccessRoleArn": {},
      "EndpointUri": {},
      "FullLoadErrorPercentage": {},
      "ErrorRetryDuration": {},
      "UseNewMappingType": {}
    },
    "NeptuneSettings": {
      "ServiceAccessRoleArn": {},
      "S3BucketName": {},
      "S3BucketFolder": {},
      "ErrorRetryDuration": {},
      "MaxFileSize": {},
      "MaxRetryCount": {},
      "IamAuthEnabled": {}
    },
    "RedshiftSettings": {
      "AcceptAnyDate": {},
      "AfterConnectScript": {},
      "BucketFolder": {},
      "BucketName": {},
      "CaseSensitiveNames": {},
      "CompUpdate": {},
      "ConnectionTimeout": {},
      "DatabaseName": {},
      "DateFormat": {},
      "EmptyAsNull": {},
      "EncryptionMode": {},
      "ExplicitIds": {},
      "FileTransferUploadStreams": {},
      "LoadTimeout": {},
      "MaxFileSize": {},
      "Password": {},
      "Port": {},
      "RemoveQuotes": {},
      "ReplaceInvalidChars": {},
      "ReplaceChars": {},
      "ServerName": {},
      "ServiceAccessRoleArn": {},
      "ServerSideEncryptionKmsKeyId": {},
      "TimeFormat": {},
      "TrimBlanks": {},
      "TruncateColumns": {},
      "Username": {},
      "WriteBufferSize": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {},
      "MapBooleanAsBoolean": {}
    },
    "PostgreSQLSettings": {
      "AfterConnectScript": {},
      "CaptureDdls": {},
      "MaxFileSize": {},
      "DatabaseName": {},
      "DdlArtifactsSchema": {},
      "ExecuteTimeout": {},
      "FailTasksOnLobTruncation": {},
      "HeartbeatEnable": {},
      "HeartbeatSchema": {},
      "HeartbeatFrequency": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "Username": {},
      "SlotName": {},
      "PluginName": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {},
      "TrimSpaceInChar": {},
      "MapBooleanAsBoolean": {}
    },
    "MySQLSettings": {
      "AfterConnectScript": {},
      "CleanSourceMetadataOnMismatch": {},
      "DatabaseName": {},
      "EventsPollInterval": {},
      "TargetDbType": {},
      "MaxFileSize": {},
      "ParallelLoadThreads": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "ServerTimezone": {},
      "Username": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "OracleSettings": {
      "AddSupplementalLogging": {},
      "ArchivedLogDestId": {},
      "AdditionalArchivedLogDestId": {},
      "ExtraArchivedLogDestIds": {},
      "AllowSelectNestedTables": {},
      "ParallelAsmReadThreads": {},
      "ReadAheadBlocks": {},
      "AccessAlternateDirectly": {},
      "UseAlternateFolderForOnline": {},
      "OraclePathPrefix": {},
      "UsePathPrefix": {},
      "ReplacePathPrefix": {},
      "EnableHomogenousTablespace": {},
      "DirectPathNoLog": {},
      "ArchivedLogsOnly": {},
      "AsmPassword": {},
      "AsmServer": {},
      "AsmUser": {},
      "CharLengthSemantics": {},
      "DatabaseName": {},
      "DirectPathParallelLoad": {},
      "FailTasksOnLobTruncation": {},
      "NumberDatatypeScale": {},
      "Password": {},
      "Port": {},
      "ReadTableSpaceName": {},
      "RetryInterval": {},
      "SecurityDbEncryption": {},
      "SecurityDbEncryptionName": {},
      "ServerName": {},
      "SpatialDataOptionToGeoJsonFunctionName": {},
      "StandbyDelayTime": {},
      "Username": {},
      "UseBFile": {},
      "UseDirectPathFullLoad": {},
      "UseLogminerReader": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {},
      "SecretsManagerOracleAsmAccessRoleArn": {},
      "SecretsManagerOracleAsmSecretId": {},
      "TrimSpaceInChar": {},
      "ConvertTimestampWithZoneToUTC": {}
    },
    "SybaseSettings": {
      "DatabaseName": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "Username": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "MicrosoftSQLServerSettings": {
      "Port": {},
      "BcpPacketSize": {},
      "DatabaseName": {},
      "ControlTablesFileGroup": {},
      "Password": {},
      "QuerySingleAlwaysOnNode": {},
      "ReadBackupOnly": {},
      "SafeguardPolicy": {},
      "ServerName": {},
      "Username": {},
      "UseBcpFullLoad": {},
      "UseThirdPartyBackupDevice": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {},
      "TrimSpaceInChar": {},
      "TlogAccessMode": {},
      "ForceLobLookup": {}
    },
    "IBMDb2Settings": {
      "DatabaseName": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "SetDataCaptureChanges": {},
      "CurrentLsn": {},
      "MaxKBytesPerRead": {},
      "Username": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "ResourceIdentifier": {},
    "DocDbSettings": {
      "Username": {},
      "Password": {},
      "ServerName": {},
      "Port": {},
      "DatabaseName": {},
      "NestingLevel": {},
      "ExtractDocId": {},
      "DocsToInvestigate": {},
      "KmsKeyId": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "RedisSettings": {
      "ServerName": {},
      "Port": {},
      "SslSecurityProtocol": {},
      "AuthType": {},
      "AuthUserName": {},
      "AuthPassword": {},
      "SslCaCertificateArn": {}
    },
    "GcpMySQLSettings": {
      "AfterConnectScript": {},
      "CleanSourceMetadataOnMismatch": {},
      "DatabaseName": {},
      "EventsPollInterval": {},
      "TargetDbType": {},
      "MaxFileSize": {},
      "ParallelLoadThreads": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "ServerTimezone": {},
      "Username": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint`

<p>Creates an endpoint using the provided settings.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>CreateEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>

> Body parameter

```json
{
  "EndpointIdentifier": {},
  "EndpointType": {},
  "EngineName": {},
  "Username": {},
  "Password": {},
  "ServerName": {},
  "Port": {},
  "DatabaseName": {},
  "ExtraConnectionAttributes": {},
  "KmsKeyId": {},
  "Tags": {},
  "CertificateArn": {},
  "SslMode": {},
  "ServiceAccessRoleArn": {},
  "ExternalTableDefinition": {},
  "DynamoDbSettings": {
    "ServiceAccessRoleArn": {}
  },
  "S3Settings": {
    "ServiceAccessRoleArn": {},
    "ExternalTableDefinition": {},
    "CsvRowDelimiter": {},
    "CsvDelimiter": {},
    "BucketFolder": {},
    "BucketName": {},
    "CompressionType": {},
    "EncryptionMode": {},
    "ServerSideEncryptionKmsKeyId": {},
    "DataFormat": {},
    "EncodingType": {},
    "DictPageSizeLimit": {},
    "RowGroupLength": {},
    "DataPageSize": {},
    "ParquetVersion": {},
    "EnableStatistics": {},
    "IncludeOpForFullLoad": {},
    "CdcInsertsOnly": {},
    "TimestampColumnName": {},
    "ParquetTimestampInMillisecond": {},
    "CdcInsertsAndUpdates": {},
    "DatePartitionEnabled": {},
    "DatePartitionSequence": {},
    "DatePartitionDelimiter": {},
    "UseCsvNoSupValue": {},
    "CsvNoSupValue": {},
    "PreserveTransactions": {},
    "CdcPath": {},
    "UseTaskStartTimeForFullLoadTimestamp": {},
    "CannedAclForObjects": {},
    "AddColumnName": {},
    "CdcMaxBatchInterval": {},
    "CdcMinFileSize": {},
    "CsvNullValue": {},
    "IgnoreHeaderRows": {},
    "MaxFileSize": {},
    "Rfc4180": {},
    "DatePartitionTimezone": {},
    "AddTrailingPaddingCharacter": {},
    "ExpectedBucketOwner": {},
    "GlueCatalogGeneration": {}
  },
  "DmsTransferSettings": {
    "ServiceAccessRoleArn": {},
    "BucketName": {}
  },
  "MongoDbSettings": {
    "Username": {},
    "Password": {},
    "ServerName": {},
    "Port": {},
    "DatabaseName": {},
    "AuthType": {},
    "AuthMechanism": {},
    "NestingLevel": {},
    "ExtractDocId": {},
    "DocsToInvestigate": {},
    "AuthSource": {},
    "KmsKeyId": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "KinesisSettings": {
    "StreamArn": {},
    "MessageFormat": {},
    "ServiceAccessRoleArn": {},
    "IncludeTransactionDetails": {},
    "IncludePartitionValue": {},
    "PartitionIncludeSchemaTable": {},
    "IncludeTableAlterOperations": {},
    "IncludeControlDetails": {},
    "IncludeNullAndEmpty": {},
    "NoHexPrefix": {}
  },
  "KafkaSettings": {
    "Broker": {},
    "Topic": {},
    "MessageFormat": {},
    "IncludeTransactionDetails": {},
    "IncludePartitionValue": {},
    "PartitionIncludeSchemaTable": {},
    "IncludeTableAlterOperations": {},
    "IncludeControlDetails": {},
    "MessageMaxBytes": {},
    "IncludeNullAndEmpty": {},
    "SecurityProtocol": {},
    "SslClientCertificateArn": {},
    "SslClientKeyArn": {},
    "SslClientKeyPassword": {},
    "SslCaCertificateArn": {},
    "SaslUsername": {},
    "SaslPassword": {},
    "NoHexPrefix": {},
    "SaslMechanism": {}
  },
  "ElasticsearchSettings": {
    "ServiceAccessRoleArn": {},
    "EndpointUri": {},
    "FullLoadErrorPercentage": {},
    "ErrorRetryDuration": {},
    "UseNewMappingType": {}
  },
  "NeptuneSettings": {
    "ServiceAccessRoleArn": {},
    "S3BucketName": {},
    "S3BucketFolder": {},
    "ErrorRetryDuration": {},
    "MaxFileSize": {},
    "MaxRetryCount": {},
    "IamAuthEnabled": {}
  },
  "RedshiftSettings": {
    "AcceptAnyDate": {},
    "AfterConnectScript": {},
    "BucketFolder": {},
    "BucketName": {},
    "CaseSensitiveNames": {},
    "CompUpdate": {},
    "ConnectionTimeout": {},
    "DatabaseName": {},
    "DateFormat": {},
    "EmptyAsNull": {},
    "EncryptionMode": {},
    "ExplicitIds": {},
    "FileTransferUploadStreams": {},
    "LoadTimeout": {},
    "MaxFileSize": {},
    "Password": {},
    "Port": {},
    "RemoveQuotes": {},
    "ReplaceInvalidChars": {},
    "ReplaceChars": {},
    "ServerName": {},
    "ServiceAccessRoleArn": {},
    "ServerSideEncryptionKmsKeyId": {},
    "TimeFormat": {},
    "TrimBlanks": {},
    "TruncateColumns": {},
    "Username": {},
    "WriteBufferSize": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "MapBooleanAsBoolean": {}
  },
  "PostgreSQLSettings": {
    "AfterConnectScript": {},
    "CaptureDdls": {},
    "MaxFileSize": {},
    "DatabaseName": {},
    "DdlArtifactsSchema": {},
    "ExecuteTimeout": {},
    "FailTasksOnLobTruncation": {},
    "HeartbeatEnable": {},
    "HeartbeatSchema": {},
    "HeartbeatFrequency": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "Username": {},
    "SlotName": {},
    "PluginName": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "TrimSpaceInChar": {},
    "MapBooleanAsBoolean": {}
  },
  "MySQLSettings": {
    "AfterConnectScript": {},
    "CleanSourceMetadataOnMismatch": {},
    "DatabaseName": {},
    "EventsPollInterval": {},
    "TargetDbType": {},
    "MaxFileSize": {},
    "ParallelLoadThreads": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "ServerTimezone": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "OracleSettings": {
    "AddSupplementalLogging": {},
    "ArchivedLogDestId": {},
    "AdditionalArchivedLogDestId": {},
    "ExtraArchivedLogDestIds": {},
    "AllowSelectNestedTables": {},
    "ParallelAsmReadThreads": {},
    "ReadAheadBlocks": {},
    "AccessAlternateDirectly": {},
    "UseAlternateFolderForOnline": {},
    "OraclePathPrefix": {},
    "UsePathPrefix": {},
    "ReplacePathPrefix": {},
    "EnableHomogenousTablespace": {},
    "DirectPathNoLog": {},
    "ArchivedLogsOnly": {},
    "AsmPassword": {},
    "AsmServer": {},
    "AsmUser": {},
    "CharLengthSemantics": {},
    "DatabaseName": {},
    "DirectPathParallelLoad": {},
    "FailTasksOnLobTruncation": {},
    "NumberDatatypeScale": {},
    "Password": {},
    "Port": {},
    "ReadTableSpaceName": {},
    "RetryInterval": {},
    "SecurityDbEncryption": {},
    "SecurityDbEncryptionName": {},
    "ServerName": {},
    "SpatialDataOptionToGeoJsonFunctionName": {},
    "StandbyDelayTime": {},
    "Username": {},
    "UseBFile": {},
    "UseDirectPathFullLoad": {},
    "UseLogminerReader": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "SecretsManagerOracleAsmAccessRoleArn": {},
    "SecretsManagerOracleAsmSecretId": {},
    "TrimSpaceInChar": {},
    "ConvertTimestampWithZoneToUTC": {}
  },
  "SybaseSettings": {
    "DatabaseName": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "MicrosoftSQLServerSettings": {
    "Port": {},
    "BcpPacketSize": {},
    "DatabaseName": {},
    "ControlTablesFileGroup": {},
    "Password": {},
    "QuerySingleAlwaysOnNode": {},
    "ReadBackupOnly": {},
    "SafeguardPolicy": {},
    "ServerName": {},
    "Username": {},
    "UseBcpFullLoad": {},
    "UseThirdPartyBackupDevice": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "TrimSpaceInChar": {},
    "TlogAccessMode": {},
    "ForceLobLookup": {}
  },
  "IBMDb2Settings": {
    "DatabaseName": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "SetDataCaptureChanges": {},
    "CurrentLsn": {},
    "MaxKBytesPerRead": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "ResourceIdentifier": {},
  "DocDbSettings": {
    "Username": {},
    "Password": {},
    "ServerName": {},
    "Port": {},
    "DatabaseName": {},
    "NestingLevel": {},
    "ExtractDocId": {},
    "DocsToInvestigate": {},
    "KmsKeyId": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "RedisSettings": {
    "ServerName": {},
    "Port": {},
    "SslSecurityProtocol": {},
    "AuthType": {},
    "AuthUserName": {},
    "AuthPassword": {},
    "SslCaCertificateArn": {}
  },
  "GcpMySQLSettings": {
    "AfterConnectScript": {},
    "CleanSourceMetadataOnMismatch": {},
    "DatabaseName": {},
    "EventsPollInterval": {},
    "TargetDbType": {},
    "MaxFileSize": {},
    "ParallelLoadThreads": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "ServerTimezone": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  }
}
```

<h3 id="createendpoint-parameters">Parameters</h3>

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
|body|body|[CreateEndpointMessage](#schemacreateendpointmessage)|true|none|
|» EndpointIdentifier|body|object|true|none|
|» EndpointType|body|object|true|none|
|» EngineName|body|object|true|none|
|» Username|body|object|false|none|
|» Password|body|object|false|none|
|» ServerName|body|object|false|none|
|» Port|body|object|false|none|
|» DatabaseName|body|object|false|none|
|» ExtraConnectionAttributes|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» Tags|body|object|false|none|
|» CertificateArn|body|object|false|none|
|» SslMode|body|object|false|none|
|» ServiceAccessRoleArn|body|object|false|none|
|» ExternalTableDefinition|body|object|false|none|
|» DynamoDbSettings|body|object|false|none|
|» » ServiceAccessRoleArn|body|object|true|none|
|» S3Settings|body|object|false|none|
|» » ServiceAccessRoleArn|body|object|false|none|
|» » ExternalTableDefinition|body|object|false|none|
|» » CsvRowDelimiter|body|object|false|none|
|» » CsvDelimiter|body|object|false|none|
|» » BucketFolder|body|object|false|none|
|» » BucketName|body|object|false|none|
|» » CompressionType|body|object|false|none|
|» » EncryptionMode|body|object|false|none|
|» » ServerSideEncryptionKmsKeyId|body|object|false|none|
|» » DataFormat|body|object|false|none|
|» » EncodingType|body|object|false|none|
|» » DictPageSizeLimit|body|object|false|none|
|» » RowGroupLength|body|object|false|none|
|» » DataPageSize|body|object|false|none|
|» » ParquetVersion|body|object|false|none|
|» » EnableStatistics|body|object|false|none|
|» » IncludeOpForFullLoad|body|object|false|none|
|» » CdcInsertsOnly|body|object|false|none|
|» » TimestampColumnName|body|object|false|none|
|» » ParquetTimestampInMillisecond|body|object|false|none|
|» » CdcInsertsAndUpdates|body|object|false|none|
|» » DatePartitionEnabled|body|object|false|none|
|» » DatePartitionSequence|body|object|false|none|
|» » DatePartitionDelimiter|body|object|false|none|
|» » UseCsvNoSupValue|body|object|false|none|
|» » CsvNoSupValue|body|object|false|none|
|» » PreserveTransactions|body|object|false|none|
|» » CdcPath|body|object|false|none|
|» » UseTaskStartTimeForFullLoadTimestamp|body|object|false|none|
|» » CannedAclForObjects|body|object|false|none|
|» » AddColumnName|body|object|false|none|
|» » CdcMaxBatchInterval|body|object|false|none|
|» » CdcMinFileSize|body|object|false|none|
|» » CsvNullValue|body|object|false|none|
|» » IgnoreHeaderRows|body|object|false|none|
|» » MaxFileSize|body|object|false|none|
|» » Rfc4180|body|object|false|none|
|» » DatePartitionTimezone|body|object|false|none|
|» » AddTrailingPaddingCharacter|body|object|false|none|
|» » ExpectedBucketOwner|body|object|false|none|
|» » GlueCatalogGeneration|body|object|false|none|
|» DmsTransferSettings|body|object|false|none|
|» » ServiceAccessRoleArn|body|object|false|none|
|» » BucketName|body|object|false|none|
|» MongoDbSettings|body|object|false|none|
|» » Username|body|object|false|none|
|» » Password|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » Port|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » AuthType|body|object|false|none|
|» » AuthMechanism|body|object|false|none|
|» » NestingLevel|body|object|false|none|
|» » ExtractDocId|body|object|false|none|
|» » DocsToInvestigate|body|object|false|none|
|» » AuthSource|body|object|false|none|
|» » KmsKeyId|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» KinesisSettings|body|object|false|none|
|» » StreamArn|body|object|false|none|
|» » MessageFormat|body|object|false|none|
|» » ServiceAccessRoleArn|body|object|false|none|
|» » IncludeTransactionDetails|body|object|false|none|
|» » IncludePartitionValue|body|object|false|none|
|» » PartitionIncludeSchemaTable|body|object|false|none|
|» » IncludeTableAlterOperations|body|object|false|none|
|» » IncludeControlDetails|body|object|false|none|
|» » IncludeNullAndEmpty|body|object|false|none|
|» » NoHexPrefix|body|object|false|none|
|» KafkaSettings|body|object|false|none|
|» » Broker|body|object|false|none|
|» » Topic|body|object|false|none|
|» » MessageFormat|body|object|false|none|
|» » IncludeTransactionDetails|body|object|false|none|
|» » IncludePartitionValue|body|object|false|none|
|» » PartitionIncludeSchemaTable|body|object|false|none|
|» » IncludeTableAlterOperations|body|object|false|none|
|» » IncludeControlDetails|body|object|false|none|
|» » MessageMaxBytes|body|object|false|none|
|» » IncludeNullAndEmpty|body|object|false|none|
|» » SecurityProtocol|body|object|false|none|
|» » SslClientCertificateArn|body|object|false|none|
|» » SslClientKeyArn|body|object|false|none|
|» » SslClientKeyPassword|body|object|false|none|
|» » SslCaCertificateArn|body|object|false|none|
|» » SaslUsername|body|object|false|none|
|» » SaslPassword|body|object|false|none|
|» » NoHexPrefix|body|object|false|none|
|» » SaslMechanism|body|object|false|none|
|» ElasticsearchSettings|body|object|false|none|
|» » ServiceAccessRoleArn|body|object|true|none|
|» » EndpointUri|body|object|true|none|
|» » FullLoadErrorPercentage|body|object|false|none|
|» » ErrorRetryDuration|body|object|false|none|
|» » UseNewMappingType|body|object|false|none|
|» NeptuneSettings|body|object|false|none|
|» » ServiceAccessRoleArn|body|object|false|none|
|» » S3BucketName|body|object|true|none|
|» » S3BucketFolder|body|object|true|none|
|» » ErrorRetryDuration|body|object|false|none|
|» » MaxFileSize|body|object|false|none|
|» » MaxRetryCount|body|object|false|none|
|» » IamAuthEnabled|body|object|false|none|
|» RedshiftSettings|body|[RedshiftSettings](#schemaredshiftsettings)|false|Provides information that defines an Amazon Redshift endpoint.|
|» PostgreSQLSettings|body|object|false|none|
|» » AfterConnectScript|body|object|false|none|
|» » CaptureDdls|body|object|false|none|
|» » MaxFileSize|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » DdlArtifactsSchema|body|object|false|none|
|» » ExecuteTimeout|body|object|false|none|
|» » FailTasksOnLobTruncation|body|object|false|none|
|» » HeartbeatEnable|body|object|false|none|
|» » HeartbeatSchema|body|object|false|none|
|» » HeartbeatFrequency|body|object|false|none|
|» » Password|body|object|false|none|
|» » Port|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » Username|body|object|false|none|
|» » SlotName|body|object|false|none|
|» » PluginName|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» » TrimSpaceInChar|body|object|false|none|
|» » MapBooleanAsBoolean|body|object|false|none|
|» MySQLSettings|body|object|false|none|
|» » AfterConnectScript|body|object|false|none|
|» » CleanSourceMetadataOnMismatch|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » EventsPollInterval|body|object|false|none|
|» » TargetDbType|body|object|false|none|
|» » MaxFileSize|body|object|false|none|
|» » ParallelLoadThreads|body|object|false|none|
|» » Password|body|object|false|none|
|» » Port|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » ServerTimezone|body|object|false|none|
|» » Username|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» OracleSettings|body|object|false|none|
|» » AddSupplementalLogging|body|object|false|none|
|» » ArchivedLogDestId|body|object|false|none|
|» » AdditionalArchivedLogDestId|body|object|false|none|
|» » ExtraArchivedLogDestIds|body|object|false|none|
|» » AllowSelectNestedTables|body|object|false|none|
|» » ParallelAsmReadThreads|body|object|false|none|
|» » ReadAheadBlocks|body|object|false|none|
|» » AccessAlternateDirectly|body|object|false|none|
|» » UseAlternateFolderForOnline|body|object|false|none|
|» » OraclePathPrefix|body|object|false|none|
|» » UsePathPrefix|body|object|false|none|
|» » ReplacePathPrefix|body|object|false|none|
|» » EnableHomogenousTablespace|body|object|false|none|
|» » DirectPathNoLog|body|object|false|none|
|» » ArchivedLogsOnly|body|object|false|none|
|» » AsmPassword|body|object|false|none|
|» » AsmServer|body|object|false|none|
|» » AsmUser|body|object|false|none|
|» » CharLengthSemantics|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » DirectPathParallelLoad|body|object|false|none|
|» » FailTasksOnLobTruncation|body|object|false|none|
|» » NumberDatatypeScale|body|object|false|none|
|» » Password|body|object|false|none|
|» » Port|body|object|false|none|
|» » ReadTableSpaceName|body|object|false|none|
|» » RetryInterval|body|object|false|none|
|» » SecurityDbEncryption|body|object|false|none|
|» » SecurityDbEncryptionName|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » SpatialDataOptionToGeoJsonFunctionName|body|object|false|none|
|» » StandbyDelayTime|body|object|false|none|
|» » Username|body|object|false|none|
|» » UseBFile|body|object|false|none|
|» » UseDirectPathFullLoad|body|object|false|none|
|» » UseLogminerReader|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» » SecretsManagerOracleAsmAccessRoleArn|body|object|false|none|
|» » SecretsManagerOracleAsmSecretId|body|object|false|none|
|» » TrimSpaceInChar|body|object|false|none|
|» » ConvertTimestampWithZoneToUTC|body|object|false|none|
|» SybaseSettings|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » Password|body|object|false|none|
|» » Port|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » Username|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» MicrosoftSQLServerSettings|body|object|false|none|
|» » Port|body|object|false|none|
|» » BcpPacketSize|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » ControlTablesFileGroup|body|object|false|none|
|» » Password|body|object|false|none|
|» » QuerySingleAlwaysOnNode|body|object|false|none|
|» » ReadBackupOnly|body|object|false|none|
|» » SafeguardPolicy|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » Username|body|object|false|none|
|» » UseBcpFullLoad|body|object|false|none|
|» » UseThirdPartyBackupDevice|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» » TrimSpaceInChar|body|object|false|none|
|» » TlogAccessMode|body|object|false|none|
|» » ForceLobLookup|body|object|false|none|
|» IBMDb2Settings|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » Password|body|object|false|none|
|» » Port|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » SetDataCaptureChanges|body|object|false|none|
|» » CurrentLsn|body|object|false|none|
|» » MaxKBytesPerRead|body|object|false|none|
|» » Username|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» ResourceIdentifier|body|object|false|none|
|» DocDbSettings|body|[DocDbSettings](#schemadocdbsettings)|false|Provides information that defines a DocumentDB endpoint.|
|» RedisSettings|body|object|false|none|
|» » ServerName|body|object|true|none|
|» » Port|body|object|true|none|
|» » SslSecurityProtocol|body|object|false|none|
|» » AuthType|body|object|false|none|
|» » AuthUserName|body|object|false|none|
|» » AuthPassword|body|object|false|none|
|» » SslCaCertificateArn|body|object|false|none|
|» GcpMySQLSettings|body|object|false|none|
|» » AfterConnectScript|body|object|false|none|
|» » CleanSourceMetadataOnMismatch|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » EventsPollInterval|body|object|false|none|
|» » TargetDbType|body|object|false|none|
|» » MaxFileSize|body|object|false|none|
|» » ParallelLoadThreads|body|object|false|none|
|» » Password|body|object|false|none|
|» » Port|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » ServerTimezone|body|object|false|none|
|» » Username|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.CreateEndpoint|

> Example responses

> 200 Response

```json
{
  "Endpoint": {
    "EndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:RAAR3R22XSH46S3PWLC3NJAWKM",
    "EndpointIdentifier": "test-endpoint-1",
    "EndpointType": "source",
    "EngineName": "mysql",
    "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
    "Port": 3306,
    "ServerName": "mydb.cx1llnox7iyx.us-west-2.rds.amazonaws.com",
    "Status": "active",
    "Username": "username"
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

<h3 id="createendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEndpointResponse](#schemacreateendpointresponse)|
|480|480|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|481|481|ResourceAlreadyExistsFault|[ResourceAlreadyExistsFault](#schemaresourcealreadyexistsfault)|
|482|482|ResourceQuotaExceededFault|[ResourceQuotaExceededFault](#schemaresourcequotaexceededfault)|
|483|483|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|484|484|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|485|485|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|486|486|S3AccessDeniedFault|[S3AccessDeniedFault](#schemas3accessdeniedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEventSubscription

<a id="opIdCreateEventSubscription"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.CreateEventSubscription' \
  -d '{
    "SubscriptionName": {},
    "SnsTopicArn": {},
    "SourceType": {},
    "EventCategories": {},
    "SourceIds": {},
    "Enabled": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription`

<p> Creates an DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all DMS sources belonging to your customer account.</p> <p>For more information about DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> </p>

> Body parameter

```json
{
  "SubscriptionName": {},
  "SnsTopicArn": {},
  "SourceType": {},
  "EventCategories": {},
  "SourceIds": {},
  "Enabled": {},
  "Tags": {}
}
```

<h3 id="createeventsubscription-parameters">Parameters</h3>

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
|body|body|[CreateEventSubscriptionMessage](#schemacreateeventsubscriptionmessage)|true|none|
|» SubscriptionName|body|object|true|none|
|» SnsTopicArn|body|object|true|none|
|» SourceType|body|object|false|none|
|» EventCategories|body|object|false|none|
|» SourceIds|body|object|false|none|
|» Enabled|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.CreateEventSubscription|

> Example responses

> 200 Response

```json
{
  "EventSubscription": {
    "CustomerAwsId": {},
    "CustSubscriptionId": {},
    "SnsTopicArn": {},
    "Status": {},
    "SubscriptionCreationTime": {},
    "SourceType": {},
    "SourceIdsList": {},
    "EventCategoriesList": {},
    "Enabled": {}
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

> 489 Response

```json
null
```

<h3 id="createeventsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEventSubscriptionResponse](#schemacreateeventsubscriptionresponse)|
|480|480|ResourceQuotaExceededFault|[ResourceQuotaExceededFault](#schemaresourcequotaexceededfault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|482|482|ResourceAlreadyExistsFault|[ResourceAlreadyExistsFault](#schemaresourcealreadyexistsfault)|
|483|483|SNSInvalidTopicFault|[SNSInvalidTopicFault](#schemasnsinvalidtopicfault)|
|484|484|SNSNoAuthorizationFault|[SNSNoAuthorizationFault](#schemasnsnoauthorizationfault)|
|485|485|KMSAccessDeniedFault|[KMSAccessDeniedFault](#schemakmsaccessdeniedfault)|
|486|486|KMSDisabledFault|[KMSDisabledFault](#schemakmsdisabledfault)|
|487|487|KMSInvalidStateFault|[KMSInvalidStateFault](#schemakmsinvalidstatefault)|
|488|488|KMSNotFoundFault|[KMSNotFoundFault](#schemakmsnotfoundfault)|
|489|489|KMSThrottlingFault|[KMSThrottlingFault](#schemakmsthrottlingfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFleetAdvisorCollector

<a id="opIdCreateFleetAdvisorCollector"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.CreateFleetAdvisorCollector' \
  -d '{
    "CollectorName": {},
    "Description": {},
    "ServiceAccessRoleArn": {},
    "S3BucketName": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.CreateFleetAdvisorCollector`

Creates a Fleet Advisor collector using the specified parameters.

> Body parameter

```json
{
  "CollectorName": {},
  "Description": {},
  "ServiceAccessRoleArn": {},
  "S3BucketName": {}
}
```

<h3 id="createfleetadvisorcollector-parameters">Parameters</h3>

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
|body|body|[CreateFleetAdvisorCollectorRequest](#schemacreatefleetadvisorcollectorrequest)|true|none|
|» CollectorName|body|object|true|none|
|» Description|body|object|false|none|
|» ServiceAccessRoleArn|body|object|true|none|
|» S3BucketName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.CreateFleetAdvisorCollector|

> Example responses

> 200 Response

```json
{
  "CollectorReferencedId": {},
  "CollectorName": {},
  "Description": {},
  "ServiceAccessRoleArn": {},
  "S3BucketName": {}
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

<h3 id="createfleetadvisorcollector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFleetAdvisorCollectorResponse](#schemacreatefleetadvisorcollectorresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|482|482|S3AccessDeniedFault|[S3AccessDeniedFault](#schemas3accessdeniedfault)|
|483|483|S3ResourceNotFoundFault|[S3ResourceNotFoundFault](#schemas3resourcenotfoundfault)|
|484|484|ResourceQuotaExceededFault|[ResourceQuotaExceededFault](#schemaresourcequotaexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateReplicationInstance

<a id="opIdCreateReplicationInstance"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.CreateReplicationInstance' \
  -d '{
    "ReplicationInstanceIdentifier": {},
    "AllocatedStorage": {},
    "ReplicationInstanceClass": {},
    "VpcSecurityGroupIds": {},
    "AvailabilityZone": {},
    "ReplicationSubnetGroupIdentifier": {},
    "PreferredMaintenanceWindow": {},
    "MultiAZ": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "Tags": {},
    "KmsKeyId": {},
    "PubliclyAccessible": {},
    "DnsNameServers": {},
    "ResourceIdentifier": {},
    "NetworkType": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance`

<p>Creates the replication instance using the specified parameters.</p> <p>DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>

> Body parameter

```json
{
  "ReplicationInstanceIdentifier": {},
  "AllocatedStorage": {},
  "ReplicationInstanceClass": {},
  "VpcSecurityGroupIds": {},
  "AvailabilityZone": {},
  "ReplicationSubnetGroupIdentifier": {},
  "PreferredMaintenanceWindow": {},
  "MultiAZ": {},
  "EngineVersion": {},
  "AutoMinorVersionUpgrade": {},
  "Tags": {},
  "KmsKeyId": {},
  "PubliclyAccessible": {},
  "DnsNameServers": {},
  "ResourceIdentifier": {},
  "NetworkType": {}
}
```

<h3 id="createreplicationinstance-parameters">Parameters</h3>

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
|body|body|[CreateReplicationInstanceMessage](#schemacreatereplicationinstancemessage)|true|none|
|» ReplicationInstanceIdentifier|body|object|true|none|
|» AllocatedStorage|body|object|false|none|
|» ReplicationInstanceClass|body|object|true|none|
|» VpcSecurityGroupIds|body|object|false|none|
|» AvailabilityZone|body|object|false|none|
|» ReplicationSubnetGroupIdentifier|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» MultiAZ|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» AutoMinorVersionUpgrade|body|object|false|none|
|» Tags|body|object|false|none|
|» KmsKeyId|body|object|false|none|
|» PubliclyAccessible|body|object|false|none|
|» DnsNameServers|body|object|false|none|
|» ResourceIdentifier|body|object|false|none|
|» NetworkType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.CreateReplicationInstance|

> Example responses

> 200 Response

```json
{
  "ReplicationInstance": {
    "AllocatedStorage": 5,
    "AutoMinorVersionUpgrade": true,
    "EngineVersion": "1.5.0",
    "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
    "PendingModifiedValues": {},
    "PreferredMaintenanceWindow": "sun:06:00-sun:14:00",
    "PubliclyAccessible": true,
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationInstanceClass": "dms.t2.micro",
    "ReplicationInstanceIdentifier": "test-rep-1",
    "ReplicationInstanceStatus": "creating",
    "ReplicationSubnetGroup": {
      "ReplicationSubnetGroupDescription": "default",
      "ReplicationSubnetGroupIdentifier": "default",
      "SubnetGroupStatus": "Complete",
      "Subnets": [
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1d"
          },
          "SubnetIdentifier": "subnet-f6dd91af",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1b"
          },
          "SubnetIdentifier": "subnet-3605751d",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1c"
          },
          "SubnetIdentifier": "subnet-c2daefb5",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1e"
          },
          "SubnetIdentifier": "subnet-85e90cb8",
          "SubnetStatus": "Active"
        }
      ],
      "VpcId": "vpc-6741a603"
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

> 489 Response

```json
null
```

<h3 id="createreplicationinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReplicationInstanceResponse](#schemacreatereplicationinstanceresponse)|
|480|480|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|481|481|ResourceAlreadyExistsFault|[ResourceAlreadyExistsFault](#schemaresourcealreadyexistsfault)|
|482|482|InsufficientResourceCapacityFault|[InsufficientResourceCapacityFault](#schemainsufficientresourcecapacityfault)|
|483|483|ResourceQuotaExceededFault|[ResourceQuotaExceededFault](#schemaresourcequotaexceededfault)|
|484|484|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|485|485|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|486|486|ReplicationSubnetGroupDoesNotCoverEnoughAZs|[ReplicationSubnetGroupDoesNotCoverEnoughAZs](#schemareplicationsubnetgroupdoesnotcoverenoughazs)|
|487|487|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|488|488|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|
|489|489|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateReplicationSubnetGroup

<a id="opIdCreateReplicationSubnetGroup"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.CreateReplicationSubnetGroup' \
  -d '{
    "ReplicationSubnetGroupIdentifier": {},
    "ReplicationSubnetGroupDescription": {},
    "SubnetIds": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup`

<p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p> <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>

> Body parameter

```json
{
  "ReplicationSubnetGroupIdentifier": {},
  "ReplicationSubnetGroupDescription": {},
  "SubnetIds": {},
  "Tags": {}
}
```

<h3 id="createreplicationsubnetgroup-parameters">Parameters</h3>

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
|body|body|[CreateReplicationSubnetGroupMessage](#schemacreatereplicationsubnetgroupmessage)|true|none|
|» ReplicationSubnetGroupIdentifier|body|object|true|none|
|» ReplicationSubnetGroupDescription|body|object|true|none|
|» SubnetIds|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.CreateReplicationSubnetGroup|

> Example responses

> 200 Response

```json
{
  "ReplicationSubnetGroup": {}
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

<h3 id="createreplicationsubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReplicationSubnetGroupResponse](#schemacreatereplicationsubnetgroupresponse)|
|480|480|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|481|481|ResourceAlreadyExistsFault|[ResourceAlreadyExistsFault](#schemaresourcealreadyexistsfault)|
|482|482|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|483|483|ResourceQuotaExceededFault|[ResourceQuotaExceededFault](#schemaresourcequotaexceededfault)|
|484|484|ReplicationSubnetGroupDoesNotCoverEnoughAZs|[ReplicationSubnetGroupDoesNotCoverEnoughAZs](#schemareplicationsubnetgroupdoesnotcoverenoughazs)|
|485|485|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateReplicationTask

<a id="opIdCreateReplicationTask"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.CreateReplicationTask' \
  -d '{
    "ReplicationTaskIdentifier": {},
    "SourceEndpointArn": {},
    "TargetEndpointArn": {},
    "ReplicationInstanceArn": {},
    "MigrationType": {},
    "TableMappings": {},
    "ReplicationTaskSettings": {},
    "CdcStartTime": {},
    "CdcStartPosition": {},
    "CdcStopPosition": {},
    "Tags": {},
    "TaskData": {},
    "ResourceIdentifier": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask`

Creates a replication task using the specified parameters.

> Body parameter

```json
{
  "ReplicationTaskIdentifier": {},
  "SourceEndpointArn": {},
  "TargetEndpointArn": {},
  "ReplicationInstanceArn": {},
  "MigrationType": {},
  "TableMappings": {},
  "ReplicationTaskSettings": {},
  "CdcStartTime": {},
  "CdcStartPosition": {},
  "CdcStopPosition": {},
  "Tags": {},
  "TaskData": {},
  "ResourceIdentifier": {}
}
```

<h3 id="createreplicationtask-parameters">Parameters</h3>

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
|body|body|[CreateReplicationTaskMessage](#schemacreatereplicationtaskmessage)|true|none|
|» ReplicationTaskIdentifier|body|object|true|none|
|» SourceEndpointArn|body|object|true|none|
|» TargetEndpointArn|body|object|true|none|
|» ReplicationInstanceArn|body|object|true|none|
|» MigrationType|body|object|true|none|
|» TableMappings|body|object|true|none|
|» ReplicationTaskSettings|body|object|false|none|
|» CdcStartTime|body|object|false|none|
|» CdcStartPosition|body|object|false|none|
|» CdcStopPosition|body|object|false|none|
|» Tags|body|object|false|none|
|» TaskData|body|object|false|none|
|» ResourceIdentifier|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.CreateReplicationTask|

> Example responses

> 200 Response

```json
{
  "ReplicationTask": {
    "MigrationType": "full-load",
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationTaskArn": "arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM",
    "ReplicationTaskCreationDate": "2016-12-14T18:25:43Z",
    "ReplicationTaskIdentifier": "task1",
    "ReplicationTaskSettings": "{\"TargetMetadata\":{\"TargetSchema\":\"\",\"SupportLobs\":true,\"FullLobMode\":true,\"LobChunkSize\":64,\"LimitedSizeLobMode\":false,\"LobMaxSize\":0},\"FullLoadSettings\":{\"FullLoadEnabled\":true,\"ApplyChangesEnabled\":false,\"TargetTablePrepMode\":\"DROP_AND_CREATE\",\"CreatePkAfterFullLoad\":false,\"StopTaskCachedChangesApplied\":false,\"StopTaskCachedChangesNotApplied\":false,\"ResumeEnabled\":false,\"ResumeMinTableSize\":100000,\"ResumeOnlyClusteredPKTables\":true,\"MaxFullLoadSubTasks\":8,\"TransactionConsistencyTimeout\":600,\"CommitRate\":10000},\"Logging\":{\"EnableLogging\":false}}",
    "SourceEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
    "Status": "creating",
    "TableMappings": "file://mappingfile.json",
    "TargetEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E"
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

<h3 id="createreplicationtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReplicationTaskResponse](#schemacreatereplicationtaskresponse)|
|480|480|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|482|482|ResourceAlreadyExistsFault|[ResourceAlreadyExistsFault](#schemaresourcealreadyexistsfault)|
|483|483|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|484|484|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|485|485|ResourceQuotaExceededFault|[ResourceQuotaExceededFault](#schemaresourcequotaexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCertificate

<a id="opIdDeleteCertificate"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DeleteCertificate' \
  -d '{
    "CertificateArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate`

Deletes the specified certificate. 

> Body parameter

```json
{
  "CertificateArn": {}
}
```

<h3 id="deletecertificate-parameters">Parameters</h3>

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
|body|body|[DeleteCertificateMessage](#schemadeletecertificatemessage)|true|none|
|» CertificateArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DeleteCertificate|

> Example responses

> 200 Response

```json
{
  "Certificate": {}
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

<h3 id="deletecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCertificateResponse](#schemadeletecertificateresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConnection

<a id="opIdDeleteConnection"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DeleteConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DeleteConnection' \
  -d '{
    "EndpointArn": {},
    "ReplicationInstanceArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DeleteConnection`

Deletes the connection between a replication instance and an endpoint.

> Body parameter

```json
{
  "EndpointArn": {},
  "ReplicationInstanceArn": {}
}
```

<h3 id="deleteconnection-parameters">Parameters</h3>

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
|body|body|[DeleteConnectionMessage](#schemadeleteconnectionmessage)|true|none|
|» EndpointArn|body|object|true|none|
|» ReplicationInstanceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DeleteConnection|

> Example responses

> 200 Response

```json
{
  "Connection": {}
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

<h3 id="deleteconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConnectionResponse](#schemadeleteconnectionresponse)|
|480|480|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|482|482|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEndpoint

<a id="opIdDeleteEndpoint"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DeleteEndpoint' \
  -d '{
    "EndpointArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint`

<p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>

> Body parameter

```json
{
  "EndpointArn": {}
}
```

<h3 id="deleteendpoint-parameters">Parameters</h3>

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
|body|body|[DeleteEndpointMessage](#schemadeleteendpointmessage)|true|none|
|» EndpointArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DeleteEndpoint|

> Example responses

> 200 Response

```json
{
  "Endpoint": {
    "EndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:RAAR3R22XSH46S3PWLC3NJAWKM",
    "EndpointIdentifier": "test-endpoint-1",
    "EndpointType": "source",
    "EngineName": "mysql",
    "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
    "Port": 3306,
    "ServerName": "mydb.cx1llnox7iyx.us-west-2.rds.amazonaws.com",
    "Status": "active",
    "Username": "username"
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

<h3 id="deleteendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEndpointResponse](#schemadeleteendpointresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEventSubscription

<a id="opIdDeleteEventSubscription"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DeleteEventSubscription' \
  -d '{
    "SubscriptionName": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription`

 Deletes an DMS event subscription. 

> Body parameter

```json
{
  "SubscriptionName": {}
}
```

<h3 id="deleteeventsubscription-parameters">Parameters</h3>

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
|body|body|[DeleteEventSubscriptionMessage](#schemadeleteeventsubscriptionmessage)|true|none|
|» SubscriptionName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DeleteEventSubscription|

> Example responses

> 200 Response

```json
{
  "EventSubscription": {
    "CustomerAwsId": {},
    "CustSubscriptionId": {},
    "SnsTopicArn": {},
    "Status": {},
    "SubscriptionCreationTime": {},
    "SourceType": {},
    "SourceIdsList": {},
    "EventCategoriesList": {},
    "Enabled": {}
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

<h3 id="deleteeventsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEventSubscriptionResponse](#schemadeleteeventsubscriptionresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFleetAdvisorCollector

<a id="opIdDeleteFleetAdvisorCollector"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DeleteFleetAdvisorCollector' \
  -d '{
    "CollectorReferencedId": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorCollector`

Deletes the specified Fleet Advisor collector.

> Body parameter

```json
{
  "CollectorReferencedId": {}
}
```

<h3 id="deletefleetadvisorcollector-parameters">Parameters</h3>

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
|body|body|[DeleteCollectorRequest](#schemadeletecollectorrequest)|true|none|
|» CollectorReferencedId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DeleteFleetAdvisorCollector|

> Example responses

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletefleetadvisorcollector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|CollectorNotFoundFault|[CollectorNotFoundFault](#schemacollectornotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFleetAdvisorDatabases

<a id="opIdDeleteFleetAdvisorDatabases"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DeleteFleetAdvisorDatabases' \
  -d '{
    "DatabaseIds": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DeleteFleetAdvisorDatabases`

Deletes the specified Fleet Advisor collector databases.

> Body parameter

```json
{
  "DatabaseIds": {}
}
```

<h3 id="deletefleetadvisordatabases-parameters">Parameters</h3>

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
|body|body|[DeleteFleetAdvisorDatabasesRequest](#schemadeletefleetadvisordatabasesrequest)|true|none|
|» DatabaseIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DeleteFleetAdvisorDatabases|

> Example responses

> 200 Response

```json
{
  "DatabaseIds": {}
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

<h3 id="deletefleetadvisordatabases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFleetAdvisorDatabasesResponse](#schemadeletefleetadvisordatabasesresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidOperationFault|[InvalidOperationFault](#schemainvalidoperationfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReplicationInstance

<a id="opIdDeleteReplicationInstance"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DeleteReplicationInstance' \
  -d '{
    "ReplicationInstanceArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance`

<p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>

> Body parameter

```json
{
  "ReplicationInstanceArn": {}
}
```

<h3 id="deletereplicationinstance-parameters">Parameters</h3>

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
|body|body|[DeleteReplicationInstanceMessage](#schemadeletereplicationinstancemessage)|true|none|
|» ReplicationInstanceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DeleteReplicationInstance|

> Example responses

> 200 Response

```json
{
  "ReplicationInstance": {
    "AllocatedStorage": 5,
    "AutoMinorVersionUpgrade": true,
    "EngineVersion": "1.5.0",
    "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
    "PendingModifiedValues": {},
    "PreferredMaintenanceWindow": "sun:06:00-sun:14:00",
    "PubliclyAccessible": true,
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationInstanceClass": "dms.t2.micro",
    "ReplicationInstanceIdentifier": "test-rep-1",
    "ReplicationInstanceStatus": "creating",
    "ReplicationSubnetGroup": {
      "ReplicationSubnetGroupDescription": "default",
      "ReplicationSubnetGroupIdentifier": "default",
      "SubnetGroupStatus": "Complete",
      "Subnets": [
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1d"
          },
          "SubnetIdentifier": "subnet-f6dd91af",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1b"
          },
          "SubnetIdentifier": "subnet-3605751d",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1c"
          },
          "SubnetIdentifier": "subnet-c2daefb5",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1e"
          },
          "SubnetIdentifier": "subnet-85e90cb8",
          "SubnetStatus": "Active"
        }
      ],
      "VpcId": "vpc-6741a603"
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

<h3 id="deletereplicationinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReplicationInstanceResponse](#schemadeletereplicationinstanceresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReplicationSubnetGroup

<a id="opIdDeleteReplicationSubnetGroup"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DeleteReplicationSubnetGroup' \
  -d '{
    "ReplicationSubnetGroupIdentifier": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup`

Deletes a subnet group.

> Body parameter

```json
{
  "ReplicationSubnetGroupIdentifier": {}
}
```

<h3 id="deletereplicationsubnetgroup-parameters">Parameters</h3>

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
|body|body|[DeleteReplicationSubnetGroupMessage](#schemadeletereplicationsubnetgroupmessage)|true|none|
|» ReplicationSubnetGroupIdentifier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DeleteReplicationSubnetGroup|

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

<h3 id="deletereplicationsubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReplicationSubnetGroupResponse](#schemadeletereplicationsubnetgroupresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReplicationTask

<a id="opIdDeleteReplicationTask"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DeleteReplicationTask' \
  -d '{
    "ReplicationTaskArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask`

Deletes the specified replication task.

> Body parameter

```json
{
  "ReplicationTaskArn": {}
}
```

<h3 id="deletereplicationtask-parameters">Parameters</h3>

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
|body|body|[DeleteReplicationTaskMessage](#schemadeletereplicationtaskmessage)|true|none|
|» ReplicationTaskArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DeleteReplicationTask|

> Example responses

> 200 Response

```json
{
  "ReplicationTask": {
    "MigrationType": "full-load",
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationTaskArn": "arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM",
    "ReplicationTaskCreationDate": "2016-12-14T18:25:43Z",
    "ReplicationTaskIdentifier": "task1",
    "ReplicationTaskSettings": "{\"TargetMetadata\":{\"TargetSchema\":\"\",\"SupportLobs\":true,\"FullLobMode\":true,\"LobChunkSize\":64,\"LimitedSizeLobMode\":false,\"LobMaxSize\":0},\"FullLoadSettings\":{\"FullLoadEnabled\":true,\"ApplyChangesEnabled\":false,\"TargetTablePrepMode\":\"DROP_AND_CREATE\",\"CreatePkAfterFullLoad\":false,\"StopTaskCachedChangesApplied\":false,\"StopTaskCachedChangesNotApplied\":false,\"ResumeEnabled\":false,\"ResumeMinTableSize\":100000,\"ResumeOnlyClusteredPKTables\":true,\"MaxFullLoadSubTasks\":8,\"TransactionConsistencyTimeout\":600,\"CommitRate\":10000},\"Logging\":{\"EnableLogging\":false}}",
    "SourceEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
    "Status": "creating",
    "TableMappings": "file://mappingfile.json",
    "TargetEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E"
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

<h3 id="deletereplicationtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReplicationTaskResponse](#schemadeletereplicationtaskresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReplicationTaskAssessmentRun

<a id="opIdDeleteReplicationTaskAssessmentRun"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun' \
  -d '{
    "ReplicationTaskAssessmentRunArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun`

<p>Deletes the record of a single premigration assessment run.</p> <p>This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.</p>

> Body parameter

```json
{
  "ReplicationTaskAssessmentRunArn": {}
}
```

<h3 id="deletereplicationtaskassessmentrun-parameters">Parameters</h3>

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
|body|body|[DeleteReplicationTaskAssessmentRunMessage](#schemadeletereplicationtaskassessmentrunmessage)|true|none|
|» ReplicationTaskAssessmentRunArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun|

> Example responses

> 200 Response

```json
{
  "ReplicationTaskAssessmentRun": {
    "ReplicationTaskAssessmentRunArn": {},
    "ReplicationTaskArn": {},
    "Status": {},
    "ReplicationTaskAssessmentRunCreationDate": {},
    "AssessmentProgress": {
      "IndividualAssessmentCount": {},
      "IndividualAssessmentCompletedCount": {}
    },
    "LastFailureMessage": {},
    "ServiceAccessRoleArn": {},
    "ResultLocationBucket": {},
    "ResultLocationFolder": {},
    "ResultEncryptionMode": {},
    "ResultKmsKeyArn": {},
    "AssessmentRunName": {}
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

<h3 id="deletereplicationtaskassessmentrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReplicationTaskAssessmentRunResponse](#schemadeletereplicationtaskassessmentrunresponse)|
|480|480|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|482|482|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAccountAttributes

<a id="opIdDescribeAccountAttributes"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeAccountAttributes' \
  -d '{}'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes`

<p>Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>

> Body parameter

```json
{}
```

<h3 id="describeaccountattributes-parameters">Parameters</h3>

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
|body|body|[DescribeAccountAttributesMessage](#schemadescribeaccountattributesmessage)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeAccountAttributes|

> Example responses

> 200 Response

```json
{
  "AccountQuotas": [
    {
      "AccountQuotaName": "ReplicationInstances",
      "Max": 20,
      "Used": 0
    },
    {
      "AccountQuotaName": "AllocatedStorage",
      "Max": 20,
      "Used": 0
    },
    {
      "AccountQuotaName": "Endpoints",
      "Max": 20,
      "Used": 0
    }
  ]
}
```

<h3 id="describeaccountattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAccountAttributesResponse](#schemadescribeaccountattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeApplicableIndividualAssessments

<a id="opIdDescribeApplicableIndividualAssessments"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeApplicableIndividualAssessments' \
  -d '{
    "ReplicationTaskArn": {},
    "ReplicationInstanceArn": {},
    "SourceEngineName": {},
    "TargetEngineName": {},
    "MigrationType": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeApplicableIndividualAssessments`

<p>Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters.</p> <p>If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run.</p> <p>To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task.</p> <p>If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.</p>

> Body parameter

```json
{
  "ReplicationTaskArn": {},
  "ReplicationInstanceArn": {},
  "SourceEngineName": {},
  "TargetEngineName": {},
  "MigrationType": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describeapplicableindividualassessments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeApplicableIndividualAssessmentsMessage](#schemadescribeapplicableindividualassessmentsmessage)|true|none|
|» ReplicationTaskArn|body|object|false|none|
|» ReplicationInstanceArn|body|object|false|none|
|» SourceEngineName|body|object|false|none|
|» TargetEngineName|body|object|false|none|
|» MigrationType|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeApplicableIndividualAssessments|

> Example responses

> 200 Response

```json
{
  "IndividualAssessmentNames": {},
  "Marker": {}
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

<h3 id="describeapplicableindividualassessments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeApplicableIndividualAssessmentsResponse](#schemadescribeapplicableindividualassessmentsresponse)|
|480|480|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|482|482|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCertificates

<a id="opIdDescribeCertificates"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeCertificates' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates`

Provides a description of the certificate.

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describecertificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeCertificatesMessage](#schemadescribecertificatesmessage)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeCertificates|

> Example responses

> 200 Response

```json
{
  "Certificates": [],
  "Marker": ""
}
```

> 480 Response

```json
null
```

<h3 id="describecertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCertificatesResponse](#schemadescribecertificatesresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConnections

<a id="opIdDescribeConnections"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeConnections' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeConnections' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeConnections`

Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describeconnections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConnectionsMessage](#schemadescribeconnectionsmessage)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeConnections|

> Example responses

> 200 Response

```json
{
  "Connections": [
    {
      "EndpointArn": "arn:aws:dms:us-east-arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
      "EndpointIdentifier": "testsrc1",
      "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
      "ReplicationInstanceIdentifier": "test",
      "Status": "successful"
    }
  ],
  "Marker": ""
}
```

> 480 Response

```json
null
```

<h3 id="describeconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConnectionsResponse](#schemadescribeconnectionsresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEndpointSettings

<a id="opIdDescribeEndpointSettings"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeEndpointSettings' \
  -d '{
    "EngineName": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointSettings`

Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.

> Body parameter

```json
{
  "EngineName": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describeendpointsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEndpointSettingsMessage](#schemadescribeendpointsettingsmessage)|true|none|
|» EngineName|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeEndpointSettings|

> Example responses

> 200 Response

```json
{
  "Marker": {},
  "EndpointSettings": {}
}
```

<h3 id="describeendpointsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEndpointSettingsResponse](#schemadescribeendpointsettingsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEndpointTypes

<a id="opIdDescribeEndpointTypes"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeEndpointTypes' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes`

Returns information about the type of endpoints available.

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describeendpointtypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEndpointTypesMessage](#schemadescribeendpointtypesmessage)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeEndpointTypes|

> Example responses

> 200 Response

```json
{
  "Marker": "",
  "SupportedEndpointTypes": []
}
```

<h3 id="describeendpointtypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEndpointTypesResponse](#schemadescribeendpointtypesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEndpoints

<a id="opIdDescribeEndpoints"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeEndpoints' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints`

Returns information about the endpoints for your account in the current region.

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describeendpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEndpointsMessage](#schemadescribeendpointsmessage)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeEndpoints|

> Example responses

> 200 Response

```json
{
  "Endpoints": [],
  "Marker": ""
}
```

> 480 Response

```json
null
```

<h3 id="describeendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEndpointsResponse](#schemadescribeendpointsresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEventCategories

<a id="opIdDescribeEventCategories"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeEventCategories' \
  -d '{
    "SourceType": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories`

Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 

> Body parameter

```json
{
  "SourceType": {},
  "Filters": {}
}
```

<h3 id="describeeventcategories-parameters">Parameters</h3>

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
|body|body|[DescribeEventCategoriesMessage](#schemadescribeeventcategoriesmessage)|true|none|
|» SourceType|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeEventCategories|

> Example responses

> 200 Response

```json
{
  "EventCategoryGroupList": {}
}
```

<h3 id="describeeventcategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventCategoriesResponse](#schemadescribeeventcategoriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEventSubscriptions

<a id="opIdDescribeEventSubscriptions"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeEventSubscriptions' \
  -d '{
    "SubscriptionName": {},
    "Filters": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions`

<p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>

> Body parameter

```json
{
  "SubscriptionName": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describeeventsubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEventSubscriptionsMessage](#schemadescribeeventsubscriptionsmessage)|true|none|
|» SubscriptionName|body|object|false|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeEventSubscriptions|

> Example responses

> 200 Response

```json
{
  "Marker": {},
  "EventSubscriptionsList": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeeventsubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventSubscriptionsResponse](#schemadescribeeventsubscriptionsresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEvents

<a id="opIdDescribeEvents"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeEvents' \
  -d '{
    "SourceIdentifier": {},
    "SourceType": {},
    "StartTime": {},
    "EndTime": {},
    "Duration": {},
    "EventCategories": {},
    "Filters": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeEvents`

 Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 

> Body parameter

```json
{
  "SourceIdentifier": {},
  "SourceType": {},
  "StartTime": {},
  "EndTime": {},
  "Duration": {},
  "EventCategories": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describeevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEventsMessage](#schemadescribeeventsmessage)|true|none|
|» SourceIdentifier|body|object|false|none|
|» SourceType|body|object|false|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» Duration|body|object|false|none|
|» EventCategories|body|object|false|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeEvents|

> Example responses

> 200 Response

```json
{
  "Marker": {},
  "Events": {}
}
```

<h3 id="describeevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventsResponse](#schemadescribeeventsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetAdvisorCollectors

<a id="opIdDescribeFleetAdvisorCollectors"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeFleetAdvisorCollectors' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorCollectors`

Returns a list of the Fleet Advisor collectors in your account.

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="describefleetadvisorcollectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeFleetAdvisorCollectorsRequest](#schemadescribefleetadvisorcollectorsrequest)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeFleetAdvisorCollectors|

> Example responses

> 200 Response

```json
{
  "Collectors": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describefleetadvisorcollectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetAdvisorCollectorsResponse](#schemadescribefleetadvisorcollectorsresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetAdvisorDatabases

<a id="opIdDescribeFleetAdvisorDatabases"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeFleetAdvisorDatabases' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorDatabases`

Returns a list of Fleet Advisor databases in your account.

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="describefleetadvisordatabases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeFleetAdvisorDatabasesRequest](#schemadescribefleetadvisordatabasesrequest)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeFleetAdvisorDatabases|

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

<h3 id="describefleetadvisordatabases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetAdvisorDatabasesResponse](#schemadescribefleetadvisordatabasesresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetAdvisorLsaAnalysis

<a id="opIdDescribeFleetAdvisorLsaAnalysis"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis' \
  -d '{
    "MaxRecords": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis`

Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors. 

> Body parameter

```json
{
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="describefleetadvisorlsaanalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeFleetAdvisorLsaAnalysisRequest](#schemadescribefleetadvisorlsaanalysisrequest)|true|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeFleetAdvisorLsaAnalysis|

> Example responses

> 200 Response

```json
{
  "Analysis": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describefleetadvisorlsaanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetAdvisorLsaAnalysisResponse](#schemadescribefleetadvisorlsaanalysisresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetAdvisorSchemaObjectSummary

<a id="opIdDescribeFleetAdvisorSchemaObjectSummary"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary`

Provides descriptions of the schemas discovered by your Fleet Advisor collectors.

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="describefleetadvisorschemaobjectsummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeFleetAdvisorSchemaObjectSummaryRequest](#schemadescribefleetadvisorschemaobjectsummaryrequest)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary|

> Example responses

> 200 Response

```json
{
  "FleetAdvisorSchemaObjects": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describefleetadvisorschemaobjectsummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetAdvisorSchemaObjectSummaryResponse](#schemadescribefleetadvisorschemaobjectsummaryresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetAdvisorSchemas

<a id="opIdDescribeFleetAdvisorSchemas"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeFleetAdvisorSchemas' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeFleetAdvisorSchemas`

Returns a list of schemas detected by Fleet Advisor Collectors in your account.

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="describefleetadvisorschemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeFleetAdvisorSchemasRequest](#schemadescribefleetadvisorschemasrequest)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeFleetAdvisorSchemas|

> Example responses

> 200 Response

```json
{
  "FleetAdvisorSchemas": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describefleetadvisorschemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetAdvisorSchemasResponse](#schemadescribefleetadvisorschemasresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOrderableReplicationInstances

<a id="opIdDescribeOrderableReplicationInstances"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeOrderableReplicationInstances' \
  -d '{
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances`

Returns information about the replication instance types that can be created in the specified region.

> Body parameter

```json
{
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describeorderablereplicationinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeOrderableReplicationInstancesMessage](#schemadescribeorderablereplicationinstancesmessage)|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeOrderableReplicationInstances|

> Example responses

> 200 Response

```json
{
  "Marker": "",
  "OrderableReplicationInstances": []
}
```

<h3 id="describeorderablereplicationinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOrderableReplicationInstancesResponse](#schemadescribeorderablereplicationinstancesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePendingMaintenanceActions

<a id="opIdDescribePendingMaintenanceActions"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribePendingMaintenanceActions' \
  -d '{
    "ReplicationInstanceArn": {},
    "Filters": {},
    "Marker": {},
    "MaxRecords": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions`

For internal use only

> Body parameter

```json
{
  "ReplicationInstanceArn": {},
  "Filters": {},
  "Marker": {},
  "MaxRecords": {}
}
```

<h3 id="describependingmaintenanceactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribePendingMaintenanceActionsMessage](#schemadescribependingmaintenanceactionsmessage)|true|none|
|» ReplicationInstanceArn|body|object|false|none|
|» Filters|body|object|false|none|
|» Marker|body|object|false|none|
|» MaxRecords|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribePendingMaintenanceActions|

> Example responses

> 200 Response

```json
{
  "PendingMaintenanceActions": {},
  "Marker": {}
}
```

> 480 Response

```json
null
```

<h3 id="describependingmaintenanceactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePendingMaintenanceActionsResponse](#schemadescribependingmaintenanceactionsresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRecommendationLimitations

<a id="opIdDescribeRecommendationLimitations"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeRecommendationLimitations' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendationLimitations`

Returns a paginated list of limitations for recommendations of target Amazon Web Services engines.

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="describerecommendationlimitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeRecommendationLimitationsRequest](#schemadescriberecommendationlimitationsrequest)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeRecommendationLimitations|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Limitations": {}
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

<h3 id="describerecommendationlimitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRecommendationLimitationsResponse](#schemadescriberecommendationlimitationsresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRecommendations

<a id="opIdDescribeRecommendations"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeRecommendations' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeRecommendations`

Returns a paginated list of target engine recommendations for your source databases.

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="describerecommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeRecommendationsRequest](#schemadescriberecommendationsrequest)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeRecommendations|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Recommendations": {}
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

<h3 id="describerecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRecommendationsResponse](#schemadescriberecommendationsresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRefreshSchemasStatus

<a id="opIdDescribeRefreshSchemasStatus"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeRefreshSchemasStatus' \
  -d '{
    "EndpointArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus`

Returns the status of the RefreshSchemas operation.

> Body parameter

```json
{
  "EndpointArn": {}
}
```

<h3 id="describerefreshschemasstatus-parameters">Parameters</h3>

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
|body|body|[DescribeRefreshSchemasStatusMessage](#schemadescriberefreshschemasstatusmessage)|true|none|
|» EndpointArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeRefreshSchemasStatus|

> Example responses

> 200 Response

```json
{
  "RefreshSchemasStatus": {}
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

<h3 id="describerefreshschemasstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRefreshSchemasStatusResponse](#schemadescriberefreshschemasstatusresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReplicationInstanceTaskLogs

<a id="opIdDescribeReplicationInstanceTaskLogs"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs' \
  -d '{
    "ReplicationInstanceArn": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs`

Returns information about the task logs for the specified task.

> Body parameter

```json
{
  "ReplicationInstanceArn": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describereplicationinstancetasklogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeReplicationInstanceTaskLogsMessage](#schemadescribereplicationinstancetasklogsmessage)|true|none|
|» ReplicationInstanceArn|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs|

> Example responses

> 200 Response

```json
{
  "ReplicationInstanceArn": {},
  "ReplicationInstanceTaskLogs": {},
  "Marker": {}
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

<h3 id="describereplicationinstancetasklogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReplicationInstanceTaskLogsResponse](#schemadescribereplicationinstancetasklogsresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReplicationInstances

<a id="opIdDescribeReplicationInstances"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeReplicationInstances' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances`

Returns information about replication instances for your account in the current region.

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describereplicationinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeReplicationInstancesMessage](#schemadescribereplicationinstancesmessage)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeReplicationInstances|

> Example responses

> 200 Response

```json
{
  "Marker": "",
  "ReplicationInstances": []
}
```

> 480 Response

```json
null
```

<h3 id="describereplicationinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReplicationInstancesResponse](#schemadescribereplicationinstancesresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReplicationSubnetGroups

<a id="opIdDescribeReplicationSubnetGroups"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeReplicationSubnetGroups' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups`

Returns information about the replication subnet groups.

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describereplicationsubnetgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeReplicationSubnetGroupsMessage](#schemadescribereplicationsubnetgroupsmessage)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeReplicationSubnetGroups|

> Example responses

> 200 Response

```json
{
  "Marker": "",
  "ReplicationSubnetGroups": []
}
```

> 480 Response

```json
null
```

<h3 id="describereplicationsubnetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReplicationSubnetGroupsResponse](#schemadescribereplicationsubnetgroupsresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReplicationTaskAssessmentResults

<a id="opIdDescribeReplicationTaskAssessmentResults"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults' \
  -d '{
    "ReplicationTaskArn": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults`

<p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results.</p> <p>For more information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>

> Body parameter

```json
{
  "ReplicationTaskArn": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describereplicationtaskassessmentresults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeReplicationTaskAssessmentResultsMessage](#schemadescribereplicationtaskassessmentresultsmessage)|true|none|
|» ReplicationTaskArn|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults|

> Example responses

> 200 Response

```json
{
  "Marker": {},
  "BucketName": {},
  "ReplicationTaskAssessmentResults": {}
}
```

> 480 Response

```json
null
```

<h3 id="describereplicationtaskassessmentresults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReplicationTaskAssessmentResultsResponse](#schemadescribereplicationtaskassessmentresultsresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReplicationTaskAssessmentRuns

<a id="opIdDescribeReplicationTaskAssessmentRuns"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns`

<p>Returns a paginated list of premigration assessment runs based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.</p> <note> <p>This operation doesn't return information about individual assessments. For this information, see the <code>DescribeReplicationTaskIndividualAssessments</code> operation. </p> </note>

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describereplicationtaskassessmentruns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeReplicationTaskAssessmentRunsMessage](#schemadescribereplicationtaskassessmentrunsmessage)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns|

> Example responses

> 200 Response

```json
{
  "Marker": {},
  "ReplicationTaskAssessmentRuns": {}
}
```

> 480 Response

```json
null
```

<h3 id="describereplicationtaskassessmentruns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReplicationTaskAssessmentRunsResponse](#schemadescribereplicationtaskassessmentrunsresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReplicationTaskIndividualAssessments

<a id="opIdDescribeReplicationTaskIndividualAssessments"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments`

<p>Returns a paginated list of individual assessments based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.</p>

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describereplicationtaskindividualassessments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeReplicationTaskIndividualAssessmentsMessage](#schemadescribereplicationtaskindividualassessmentsmessage)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments|

> Example responses

> 200 Response

```json
{
  "Marker": {},
  "ReplicationTaskIndividualAssessments": {}
}
```

> 480 Response

```json
null
```

<h3 id="describereplicationtaskindividualassessments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReplicationTaskIndividualAssessmentsResponse](#schemadescribereplicationtaskindividualassessmentsresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReplicationTasks

<a id="opIdDescribeReplicationTasks"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeReplicationTasks' \
  -d '{
    "Filters": {},
    "MaxRecords": {},
    "Marker": {},
    "WithoutSettings": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks`

Returns information about replication tasks for your account in the current region.

> Body parameter

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {},
  "WithoutSettings": {}
}
```

<h3 id="describereplicationtasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeReplicationTasksMessage](#schemadescribereplicationtasksmessage)|true|none|
|» Filters|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|
|» WithoutSettings|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeReplicationTasks|

> Example responses

> 200 Response

```json
{
  "Marker": "",
  "ReplicationTasks": []
}
```

> 480 Response

```json
null
```

<h3 id="describereplicationtasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReplicationTasksResponse](#schemadescribereplicationtasksresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeSchemas

<a id="opIdDescribeSchemas"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeSchemas' \
  -d '{
    "EndpointArn": {},
    "MaxRecords": {},
    "Marker": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas`

<p>Returns information about the schema for the specified endpoint.</p> <p/>

> Body parameter

```json
{
  "EndpointArn": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<h3 id="describeschemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeSchemasMessage](#schemadescribeschemasmessage)|true|none|
|» EndpointArn|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeSchemas|

> Example responses

> 200 Response

```json
{
  "Marker": "",
  "Schemas": []
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

<h3 id="describeschemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSchemasResponse](#schemadescribeschemasresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTableStatistics

<a id="opIdDescribeTableStatistics"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.DescribeTableStatistics' \
  -d '{
    "ReplicationTaskArn": {},
    "MaxRecords": {},
    "Marker": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics`

<p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>

> Body parameter

```json
{
  "ReplicationTaskArn": {},
  "MaxRecords": {},
  "Marker": {},
  "Filters": {}
}
```

<h3 id="describetablestatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeTableStatisticsMessage](#schemadescribetablestatisticsmessage)|true|none|
|» ReplicationTaskArn|body|object|true|none|
|» MaxRecords|body|object|false|none|
|» Marker|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.DescribeTableStatistics|

> Example responses

> 200 Response

```json
{
  "Marker": "",
  "ReplicationTaskArn": "",
  "TableStatistics": []
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

<h3 id="describetablestatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTableStatisticsResponse](#schemadescribetablestatisticsresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportCertificate

<a id="opIdImportCertificate"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.ImportCertificate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.ImportCertificate' \
  -d '{
    "CertificateIdentifier": {},
    "CertificatePem": {},
    "CertificateWallet": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.ImportCertificate`

Uploads the specified certificate.

> Body parameter

```json
{
  "CertificateIdentifier": {},
  "CertificatePem": {},
  "CertificateWallet": {},
  "Tags": {}
}
```

<h3 id="importcertificate-parameters">Parameters</h3>

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
|body|body|[ImportCertificateMessage](#schemaimportcertificatemessage)|true|none|
|» CertificateIdentifier|body|object|true|none|
|» CertificatePem|body|object|false|none|
|» CertificateWallet|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.ImportCertificate|

> Example responses

> 200 Response

```json
{
  "Certificate": {}
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

<h3 id="importcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportCertificateResponse](#schemaimportcertificateresponse)|
|480|480|ResourceAlreadyExistsFault|[ResourceAlreadyExistsFault](#schemaresourcealreadyexistsfault)|
|481|481|InvalidCertificateFault|[InvalidCertificateFault](#schemainvalidcertificatefault)|
|482|482|ResourceQuotaExceededFault|[ResourceQuotaExceededFault](#schemaresourcequotaexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.ListTagsForResource' \
  -d '{
    "ResourceArn": {},
    "ResourceArnList": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource`

Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.

> Body parameter

```json
{
  "ResourceArn": {},
  "ResourceArnList": {}
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
|body|body|[ListTagsForResourceMessage](#schemalisttagsforresourcemessage)|true|none|
|» ResourceArn|body|object|false|none|
|» ResourceArnList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "TagList": []
}
```

> 480 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyEndpoint

<a id="opIdModifyEndpoint"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.ModifyEndpoint' \
  -d '{
    "EndpointArn": {},
    "EndpointIdentifier": {},
    "EndpointType": {},
    "EngineName": {},
    "Username": {},
    "Password": {},
    "ServerName": {},
    "Port": {},
    "DatabaseName": {},
    "ExtraConnectionAttributes": {},
    "CertificateArn": {},
    "SslMode": {},
    "ServiceAccessRoleArn": {},
    "ExternalTableDefinition": {},
    "DynamoDbSettings": {
      "ServiceAccessRoleArn": {}
    },
    "S3Settings": {
      "ServiceAccessRoleArn": {},
      "ExternalTableDefinition": {},
      "CsvRowDelimiter": {},
      "CsvDelimiter": {},
      "BucketFolder": {},
      "BucketName": {},
      "CompressionType": {},
      "EncryptionMode": {},
      "ServerSideEncryptionKmsKeyId": {},
      "DataFormat": {},
      "EncodingType": {},
      "DictPageSizeLimit": {},
      "RowGroupLength": {},
      "DataPageSize": {},
      "ParquetVersion": {},
      "EnableStatistics": {},
      "IncludeOpForFullLoad": {},
      "CdcInsertsOnly": {},
      "TimestampColumnName": {},
      "ParquetTimestampInMillisecond": {},
      "CdcInsertsAndUpdates": {},
      "DatePartitionEnabled": {},
      "DatePartitionSequence": {},
      "DatePartitionDelimiter": {},
      "UseCsvNoSupValue": {},
      "CsvNoSupValue": {},
      "PreserveTransactions": {},
      "CdcPath": {},
      "UseTaskStartTimeForFullLoadTimestamp": {},
      "CannedAclForObjects": {},
      "AddColumnName": {},
      "CdcMaxBatchInterval": {},
      "CdcMinFileSize": {},
      "CsvNullValue": {},
      "IgnoreHeaderRows": {},
      "MaxFileSize": {},
      "Rfc4180": {},
      "DatePartitionTimezone": {},
      "AddTrailingPaddingCharacter": {},
      "ExpectedBucketOwner": {},
      "GlueCatalogGeneration": {}
    },
    "DmsTransferSettings": {
      "ServiceAccessRoleArn": {},
      "BucketName": {}
    },
    "MongoDbSettings": {
      "Username": {},
      "Password": {},
      "ServerName": {},
      "Port": {},
      "DatabaseName": {},
      "AuthType": {},
      "AuthMechanism": {},
      "NestingLevel": {},
      "ExtractDocId": {},
      "DocsToInvestigate": {},
      "AuthSource": {},
      "KmsKeyId": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "KinesisSettings": {
      "StreamArn": {},
      "MessageFormat": {},
      "ServiceAccessRoleArn": {},
      "IncludeTransactionDetails": {},
      "IncludePartitionValue": {},
      "PartitionIncludeSchemaTable": {},
      "IncludeTableAlterOperations": {},
      "IncludeControlDetails": {},
      "IncludeNullAndEmpty": {},
      "NoHexPrefix": {}
    },
    "KafkaSettings": {
      "Broker": {},
      "Topic": {},
      "MessageFormat": {},
      "IncludeTransactionDetails": {},
      "IncludePartitionValue": {},
      "PartitionIncludeSchemaTable": {},
      "IncludeTableAlterOperations": {},
      "IncludeControlDetails": {},
      "MessageMaxBytes": {},
      "IncludeNullAndEmpty": {},
      "SecurityProtocol": {},
      "SslClientCertificateArn": {},
      "SslClientKeyArn": {},
      "SslClientKeyPassword": {},
      "SslCaCertificateArn": {},
      "SaslUsername": {},
      "SaslPassword": {},
      "NoHexPrefix": {},
      "SaslMechanism": {}
    },
    "ElasticsearchSettings": {
      "ServiceAccessRoleArn": {},
      "EndpointUri": {},
      "FullLoadErrorPercentage": {},
      "ErrorRetryDuration": {},
      "UseNewMappingType": {}
    },
    "NeptuneSettings": {
      "ServiceAccessRoleArn": {},
      "S3BucketName": {},
      "S3BucketFolder": {},
      "ErrorRetryDuration": {},
      "MaxFileSize": {},
      "MaxRetryCount": {},
      "IamAuthEnabled": {}
    },
    "RedshiftSettings": {
      "AcceptAnyDate": {},
      "AfterConnectScript": {},
      "BucketFolder": {},
      "BucketName": {},
      "CaseSensitiveNames": {},
      "CompUpdate": {},
      "ConnectionTimeout": {},
      "DatabaseName": {},
      "DateFormat": {},
      "EmptyAsNull": {},
      "EncryptionMode": {},
      "ExplicitIds": {},
      "FileTransferUploadStreams": {},
      "LoadTimeout": {},
      "MaxFileSize": {},
      "Password": {},
      "Port": {},
      "RemoveQuotes": {},
      "ReplaceInvalidChars": {},
      "ReplaceChars": {},
      "ServerName": {},
      "ServiceAccessRoleArn": {},
      "ServerSideEncryptionKmsKeyId": {},
      "TimeFormat": {},
      "TrimBlanks": {},
      "TruncateColumns": {},
      "Username": {},
      "WriteBufferSize": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {},
      "MapBooleanAsBoolean": {}
    },
    "PostgreSQLSettings": {
      "AfterConnectScript": {},
      "CaptureDdls": {},
      "MaxFileSize": {},
      "DatabaseName": {},
      "DdlArtifactsSchema": {},
      "ExecuteTimeout": {},
      "FailTasksOnLobTruncation": {},
      "HeartbeatEnable": {},
      "HeartbeatSchema": {},
      "HeartbeatFrequency": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "Username": {},
      "SlotName": {},
      "PluginName": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {},
      "TrimSpaceInChar": {},
      "MapBooleanAsBoolean": {}
    },
    "MySQLSettings": {
      "AfterConnectScript": {},
      "CleanSourceMetadataOnMismatch": {},
      "DatabaseName": {},
      "EventsPollInterval": {},
      "TargetDbType": {},
      "MaxFileSize": {},
      "ParallelLoadThreads": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "ServerTimezone": {},
      "Username": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "OracleSettings": {
      "AddSupplementalLogging": {},
      "ArchivedLogDestId": {},
      "AdditionalArchivedLogDestId": {},
      "ExtraArchivedLogDestIds": {},
      "AllowSelectNestedTables": {},
      "ParallelAsmReadThreads": {},
      "ReadAheadBlocks": {},
      "AccessAlternateDirectly": {},
      "UseAlternateFolderForOnline": {},
      "OraclePathPrefix": {},
      "UsePathPrefix": {},
      "ReplacePathPrefix": {},
      "EnableHomogenousTablespace": {},
      "DirectPathNoLog": {},
      "ArchivedLogsOnly": {},
      "AsmPassword": {},
      "AsmServer": {},
      "AsmUser": {},
      "CharLengthSemantics": {},
      "DatabaseName": {},
      "DirectPathParallelLoad": {},
      "FailTasksOnLobTruncation": {},
      "NumberDatatypeScale": {},
      "Password": {},
      "Port": {},
      "ReadTableSpaceName": {},
      "RetryInterval": {},
      "SecurityDbEncryption": {},
      "SecurityDbEncryptionName": {},
      "ServerName": {},
      "SpatialDataOptionToGeoJsonFunctionName": {},
      "StandbyDelayTime": {},
      "Username": {},
      "UseBFile": {},
      "UseDirectPathFullLoad": {},
      "UseLogminerReader": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {},
      "SecretsManagerOracleAsmAccessRoleArn": {},
      "SecretsManagerOracleAsmSecretId": {},
      "TrimSpaceInChar": {},
      "ConvertTimestampWithZoneToUTC": {}
    },
    "SybaseSettings": {
      "DatabaseName": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "Username": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "MicrosoftSQLServerSettings": {
      "Port": {},
      "BcpPacketSize": {},
      "DatabaseName": {},
      "ControlTablesFileGroup": {},
      "Password": {},
      "QuerySingleAlwaysOnNode": {},
      "ReadBackupOnly": {},
      "SafeguardPolicy": {},
      "ServerName": {},
      "Username": {},
      "UseBcpFullLoad": {},
      "UseThirdPartyBackupDevice": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {},
      "TrimSpaceInChar": {},
      "TlogAccessMode": {},
      "ForceLobLookup": {}
    },
    "IBMDb2Settings": {
      "DatabaseName": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "SetDataCaptureChanges": {},
      "CurrentLsn": {},
      "MaxKBytesPerRead": {},
      "Username": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "DocDbSettings": {
      "Username": {},
      "Password": {},
      "ServerName": {},
      "Port": {},
      "DatabaseName": {},
      "NestingLevel": {},
      "ExtractDocId": {},
      "DocsToInvestigate": {},
      "KmsKeyId": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "RedisSettings": {
      "ServerName": {},
      "Port": {},
      "SslSecurityProtocol": {},
      "AuthType": {},
      "AuthUserName": {},
      "AuthPassword": {},
      "SslCaCertificateArn": {}
    },
    "ExactSettings": {},
    "GcpMySQLSettings": {
      "AfterConnectScript": {},
      "CleanSourceMetadataOnMismatch": {},
      "DatabaseName": {},
      "EventsPollInterval": {},
      "TargetDbType": {},
      "MaxFileSize": {},
      "ParallelLoadThreads": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "ServerTimezone": {},
      "Username": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint`

<p>Modifies the specified endpoint.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>

> Body parameter

```json
{
  "EndpointArn": {},
  "EndpointIdentifier": {},
  "EndpointType": {},
  "EngineName": {},
  "Username": {},
  "Password": {},
  "ServerName": {},
  "Port": {},
  "DatabaseName": {},
  "ExtraConnectionAttributes": {},
  "CertificateArn": {},
  "SslMode": {},
  "ServiceAccessRoleArn": {},
  "ExternalTableDefinition": {},
  "DynamoDbSettings": {
    "ServiceAccessRoleArn": {}
  },
  "S3Settings": {
    "ServiceAccessRoleArn": {},
    "ExternalTableDefinition": {},
    "CsvRowDelimiter": {},
    "CsvDelimiter": {},
    "BucketFolder": {},
    "BucketName": {},
    "CompressionType": {},
    "EncryptionMode": {},
    "ServerSideEncryptionKmsKeyId": {},
    "DataFormat": {},
    "EncodingType": {},
    "DictPageSizeLimit": {},
    "RowGroupLength": {},
    "DataPageSize": {},
    "ParquetVersion": {},
    "EnableStatistics": {},
    "IncludeOpForFullLoad": {},
    "CdcInsertsOnly": {},
    "TimestampColumnName": {},
    "ParquetTimestampInMillisecond": {},
    "CdcInsertsAndUpdates": {},
    "DatePartitionEnabled": {},
    "DatePartitionSequence": {},
    "DatePartitionDelimiter": {},
    "UseCsvNoSupValue": {},
    "CsvNoSupValue": {},
    "PreserveTransactions": {},
    "CdcPath": {},
    "UseTaskStartTimeForFullLoadTimestamp": {},
    "CannedAclForObjects": {},
    "AddColumnName": {},
    "CdcMaxBatchInterval": {},
    "CdcMinFileSize": {},
    "CsvNullValue": {},
    "IgnoreHeaderRows": {},
    "MaxFileSize": {},
    "Rfc4180": {},
    "DatePartitionTimezone": {},
    "AddTrailingPaddingCharacter": {},
    "ExpectedBucketOwner": {},
    "GlueCatalogGeneration": {}
  },
  "DmsTransferSettings": {
    "ServiceAccessRoleArn": {},
    "BucketName": {}
  },
  "MongoDbSettings": {
    "Username": {},
    "Password": {},
    "ServerName": {},
    "Port": {},
    "DatabaseName": {},
    "AuthType": {},
    "AuthMechanism": {},
    "NestingLevel": {},
    "ExtractDocId": {},
    "DocsToInvestigate": {},
    "AuthSource": {},
    "KmsKeyId": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "KinesisSettings": {
    "StreamArn": {},
    "MessageFormat": {},
    "ServiceAccessRoleArn": {},
    "IncludeTransactionDetails": {},
    "IncludePartitionValue": {},
    "PartitionIncludeSchemaTable": {},
    "IncludeTableAlterOperations": {},
    "IncludeControlDetails": {},
    "IncludeNullAndEmpty": {},
    "NoHexPrefix": {}
  },
  "KafkaSettings": {
    "Broker": {},
    "Topic": {},
    "MessageFormat": {},
    "IncludeTransactionDetails": {},
    "IncludePartitionValue": {},
    "PartitionIncludeSchemaTable": {},
    "IncludeTableAlterOperations": {},
    "IncludeControlDetails": {},
    "MessageMaxBytes": {},
    "IncludeNullAndEmpty": {},
    "SecurityProtocol": {},
    "SslClientCertificateArn": {},
    "SslClientKeyArn": {},
    "SslClientKeyPassword": {},
    "SslCaCertificateArn": {},
    "SaslUsername": {},
    "SaslPassword": {},
    "NoHexPrefix": {},
    "SaslMechanism": {}
  },
  "ElasticsearchSettings": {
    "ServiceAccessRoleArn": {},
    "EndpointUri": {},
    "FullLoadErrorPercentage": {},
    "ErrorRetryDuration": {},
    "UseNewMappingType": {}
  },
  "NeptuneSettings": {
    "ServiceAccessRoleArn": {},
    "S3BucketName": {},
    "S3BucketFolder": {},
    "ErrorRetryDuration": {},
    "MaxFileSize": {},
    "MaxRetryCount": {},
    "IamAuthEnabled": {}
  },
  "RedshiftSettings": {
    "AcceptAnyDate": {},
    "AfterConnectScript": {},
    "BucketFolder": {},
    "BucketName": {},
    "CaseSensitiveNames": {},
    "CompUpdate": {},
    "ConnectionTimeout": {},
    "DatabaseName": {},
    "DateFormat": {},
    "EmptyAsNull": {},
    "EncryptionMode": {},
    "ExplicitIds": {},
    "FileTransferUploadStreams": {},
    "LoadTimeout": {},
    "MaxFileSize": {},
    "Password": {},
    "Port": {},
    "RemoveQuotes": {},
    "ReplaceInvalidChars": {},
    "ReplaceChars": {},
    "ServerName": {},
    "ServiceAccessRoleArn": {},
    "ServerSideEncryptionKmsKeyId": {},
    "TimeFormat": {},
    "TrimBlanks": {},
    "TruncateColumns": {},
    "Username": {},
    "WriteBufferSize": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "MapBooleanAsBoolean": {}
  },
  "PostgreSQLSettings": {
    "AfterConnectScript": {},
    "CaptureDdls": {},
    "MaxFileSize": {},
    "DatabaseName": {},
    "DdlArtifactsSchema": {},
    "ExecuteTimeout": {},
    "FailTasksOnLobTruncation": {},
    "HeartbeatEnable": {},
    "HeartbeatSchema": {},
    "HeartbeatFrequency": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "Username": {},
    "SlotName": {},
    "PluginName": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "TrimSpaceInChar": {},
    "MapBooleanAsBoolean": {}
  },
  "MySQLSettings": {
    "AfterConnectScript": {},
    "CleanSourceMetadataOnMismatch": {},
    "DatabaseName": {},
    "EventsPollInterval": {},
    "TargetDbType": {},
    "MaxFileSize": {},
    "ParallelLoadThreads": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "ServerTimezone": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "OracleSettings": {
    "AddSupplementalLogging": {},
    "ArchivedLogDestId": {},
    "AdditionalArchivedLogDestId": {},
    "ExtraArchivedLogDestIds": {},
    "AllowSelectNestedTables": {},
    "ParallelAsmReadThreads": {},
    "ReadAheadBlocks": {},
    "AccessAlternateDirectly": {},
    "UseAlternateFolderForOnline": {},
    "OraclePathPrefix": {},
    "UsePathPrefix": {},
    "ReplacePathPrefix": {},
    "EnableHomogenousTablespace": {},
    "DirectPathNoLog": {},
    "ArchivedLogsOnly": {},
    "AsmPassword": {},
    "AsmServer": {},
    "AsmUser": {},
    "CharLengthSemantics": {},
    "DatabaseName": {},
    "DirectPathParallelLoad": {},
    "FailTasksOnLobTruncation": {},
    "NumberDatatypeScale": {},
    "Password": {},
    "Port": {},
    "ReadTableSpaceName": {},
    "RetryInterval": {},
    "SecurityDbEncryption": {},
    "SecurityDbEncryptionName": {},
    "ServerName": {},
    "SpatialDataOptionToGeoJsonFunctionName": {},
    "StandbyDelayTime": {},
    "Username": {},
    "UseBFile": {},
    "UseDirectPathFullLoad": {},
    "UseLogminerReader": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "SecretsManagerOracleAsmAccessRoleArn": {},
    "SecretsManagerOracleAsmSecretId": {},
    "TrimSpaceInChar": {},
    "ConvertTimestampWithZoneToUTC": {}
  },
  "SybaseSettings": {
    "DatabaseName": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "MicrosoftSQLServerSettings": {
    "Port": {},
    "BcpPacketSize": {},
    "DatabaseName": {},
    "ControlTablesFileGroup": {},
    "Password": {},
    "QuerySingleAlwaysOnNode": {},
    "ReadBackupOnly": {},
    "SafeguardPolicy": {},
    "ServerName": {},
    "Username": {},
    "UseBcpFullLoad": {},
    "UseThirdPartyBackupDevice": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "TrimSpaceInChar": {},
    "TlogAccessMode": {},
    "ForceLobLookup": {}
  },
  "IBMDb2Settings": {
    "DatabaseName": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "SetDataCaptureChanges": {},
    "CurrentLsn": {},
    "MaxKBytesPerRead": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "DocDbSettings": {
    "Username": {},
    "Password": {},
    "ServerName": {},
    "Port": {},
    "DatabaseName": {},
    "NestingLevel": {},
    "ExtractDocId": {},
    "DocsToInvestigate": {},
    "KmsKeyId": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "RedisSettings": {
    "ServerName": {},
    "Port": {},
    "SslSecurityProtocol": {},
    "AuthType": {},
    "AuthUserName": {},
    "AuthPassword": {},
    "SslCaCertificateArn": {}
  },
  "ExactSettings": {},
  "GcpMySQLSettings": {
    "AfterConnectScript": {},
    "CleanSourceMetadataOnMismatch": {},
    "DatabaseName": {},
    "EventsPollInterval": {},
    "TargetDbType": {},
    "MaxFileSize": {},
    "ParallelLoadThreads": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "ServerTimezone": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  }
}
```

<h3 id="modifyendpoint-parameters">Parameters</h3>

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
|body|body|[ModifyEndpointMessage](#schemamodifyendpointmessage)|true|none|
|» EndpointArn|body|object|true|none|
|» EndpointIdentifier|body|object|false|none|
|» EndpointType|body|object|false|none|
|» EngineName|body|object|false|none|
|» Username|body|object|false|none|
|» Password|body|object|false|none|
|» ServerName|body|object|false|none|
|» Port|body|object|false|none|
|» DatabaseName|body|object|false|none|
|» ExtraConnectionAttributes|body|object|false|none|
|» CertificateArn|body|object|false|none|
|» SslMode|body|object|false|none|
|» ServiceAccessRoleArn|body|object|false|none|
|» ExternalTableDefinition|body|object|false|none|
|» DynamoDbSettings|body|object|false|none|
|» » ServiceAccessRoleArn|body|object|true|none|
|» S3Settings|body|object|false|none|
|» » ServiceAccessRoleArn|body|object|false|none|
|» » ExternalTableDefinition|body|object|false|none|
|» » CsvRowDelimiter|body|object|false|none|
|» » CsvDelimiter|body|object|false|none|
|» » BucketFolder|body|object|false|none|
|» » BucketName|body|object|false|none|
|» » CompressionType|body|object|false|none|
|» » EncryptionMode|body|object|false|none|
|» » ServerSideEncryptionKmsKeyId|body|object|false|none|
|» » DataFormat|body|object|false|none|
|» » EncodingType|body|object|false|none|
|» » DictPageSizeLimit|body|object|false|none|
|» » RowGroupLength|body|object|false|none|
|» » DataPageSize|body|object|false|none|
|» » ParquetVersion|body|object|false|none|
|» » EnableStatistics|body|object|false|none|
|» » IncludeOpForFullLoad|body|object|false|none|
|» » CdcInsertsOnly|body|object|false|none|
|» » TimestampColumnName|body|object|false|none|
|» » ParquetTimestampInMillisecond|body|object|false|none|
|» » CdcInsertsAndUpdates|body|object|false|none|
|» » DatePartitionEnabled|body|object|false|none|
|» » DatePartitionSequence|body|object|false|none|
|» » DatePartitionDelimiter|body|object|false|none|
|» » UseCsvNoSupValue|body|object|false|none|
|» » CsvNoSupValue|body|object|false|none|
|» » PreserveTransactions|body|object|false|none|
|» » CdcPath|body|object|false|none|
|» » UseTaskStartTimeForFullLoadTimestamp|body|object|false|none|
|» » CannedAclForObjects|body|object|false|none|
|» » AddColumnName|body|object|false|none|
|» » CdcMaxBatchInterval|body|object|false|none|
|» » CdcMinFileSize|body|object|false|none|
|» » CsvNullValue|body|object|false|none|
|» » IgnoreHeaderRows|body|object|false|none|
|» » MaxFileSize|body|object|false|none|
|» » Rfc4180|body|object|false|none|
|» » DatePartitionTimezone|body|object|false|none|
|» » AddTrailingPaddingCharacter|body|object|false|none|
|» » ExpectedBucketOwner|body|object|false|none|
|» » GlueCatalogGeneration|body|object|false|none|
|» DmsTransferSettings|body|object|false|none|
|» » ServiceAccessRoleArn|body|object|false|none|
|» » BucketName|body|object|false|none|
|» MongoDbSettings|body|object|false|none|
|» » Username|body|object|false|none|
|» » Password|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » Port|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » AuthType|body|object|false|none|
|» » AuthMechanism|body|object|false|none|
|» » NestingLevel|body|object|false|none|
|» » ExtractDocId|body|object|false|none|
|» » DocsToInvestigate|body|object|false|none|
|» » AuthSource|body|object|false|none|
|» » KmsKeyId|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» KinesisSettings|body|object|false|none|
|» » StreamArn|body|object|false|none|
|» » MessageFormat|body|object|false|none|
|» » ServiceAccessRoleArn|body|object|false|none|
|» » IncludeTransactionDetails|body|object|false|none|
|» » IncludePartitionValue|body|object|false|none|
|» » PartitionIncludeSchemaTable|body|object|false|none|
|» » IncludeTableAlterOperations|body|object|false|none|
|» » IncludeControlDetails|body|object|false|none|
|» » IncludeNullAndEmpty|body|object|false|none|
|» » NoHexPrefix|body|object|false|none|
|» KafkaSettings|body|object|false|none|
|» » Broker|body|object|false|none|
|» » Topic|body|object|false|none|
|» » MessageFormat|body|object|false|none|
|» » IncludeTransactionDetails|body|object|false|none|
|» » IncludePartitionValue|body|object|false|none|
|» » PartitionIncludeSchemaTable|body|object|false|none|
|» » IncludeTableAlterOperations|body|object|false|none|
|» » IncludeControlDetails|body|object|false|none|
|» » MessageMaxBytes|body|object|false|none|
|» » IncludeNullAndEmpty|body|object|false|none|
|» » SecurityProtocol|body|object|false|none|
|» » SslClientCertificateArn|body|object|false|none|
|» » SslClientKeyArn|body|object|false|none|
|» » SslClientKeyPassword|body|object|false|none|
|» » SslCaCertificateArn|body|object|false|none|
|» » SaslUsername|body|object|false|none|
|» » SaslPassword|body|object|false|none|
|» » NoHexPrefix|body|object|false|none|
|» » SaslMechanism|body|object|false|none|
|» ElasticsearchSettings|body|object|false|none|
|» » ServiceAccessRoleArn|body|object|true|none|
|» » EndpointUri|body|object|true|none|
|» » FullLoadErrorPercentage|body|object|false|none|
|» » ErrorRetryDuration|body|object|false|none|
|» » UseNewMappingType|body|object|false|none|
|» NeptuneSettings|body|object|false|none|
|» » ServiceAccessRoleArn|body|object|false|none|
|» » S3BucketName|body|object|true|none|
|» » S3BucketFolder|body|object|true|none|
|» » ErrorRetryDuration|body|object|false|none|
|» » MaxFileSize|body|object|false|none|
|» » MaxRetryCount|body|object|false|none|
|» » IamAuthEnabled|body|object|false|none|
|» RedshiftSettings|body|[RedshiftSettings](#schemaredshiftsettings)|false|Provides information that defines an Amazon Redshift endpoint.|
|» PostgreSQLSettings|body|object|false|none|
|» » AfterConnectScript|body|object|false|none|
|» » CaptureDdls|body|object|false|none|
|» » MaxFileSize|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » DdlArtifactsSchema|body|object|false|none|
|» » ExecuteTimeout|body|object|false|none|
|» » FailTasksOnLobTruncation|body|object|false|none|
|» » HeartbeatEnable|body|object|false|none|
|» » HeartbeatSchema|body|object|false|none|
|» » HeartbeatFrequency|body|object|false|none|
|» » Password|body|object|false|none|
|» » Port|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » Username|body|object|false|none|
|» » SlotName|body|object|false|none|
|» » PluginName|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» » TrimSpaceInChar|body|object|false|none|
|» » MapBooleanAsBoolean|body|object|false|none|
|» MySQLSettings|body|object|false|none|
|» » AfterConnectScript|body|object|false|none|
|» » CleanSourceMetadataOnMismatch|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » EventsPollInterval|body|object|false|none|
|» » TargetDbType|body|object|false|none|
|» » MaxFileSize|body|object|false|none|
|» » ParallelLoadThreads|body|object|false|none|
|» » Password|body|object|false|none|
|» » Port|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » ServerTimezone|body|object|false|none|
|» » Username|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» OracleSettings|body|object|false|none|
|» » AddSupplementalLogging|body|object|false|none|
|» » ArchivedLogDestId|body|object|false|none|
|» » AdditionalArchivedLogDestId|body|object|false|none|
|» » ExtraArchivedLogDestIds|body|object|false|none|
|» » AllowSelectNestedTables|body|object|false|none|
|» » ParallelAsmReadThreads|body|object|false|none|
|» » ReadAheadBlocks|body|object|false|none|
|» » AccessAlternateDirectly|body|object|false|none|
|» » UseAlternateFolderForOnline|body|object|false|none|
|» » OraclePathPrefix|body|object|false|none|
|» » UsePathPrefix|body|object|false|none|
|» » ReplacePathPrefix|body|object|false|none|
|» » EnableHomogenousTablespace|body|object|false|none|
|» » DirectPathNoLog|body|object|false|none|
|» » ArchivedLogsOnly|body|object|false|none|
|» » AsmPassword|body|object|false|none|
|» » AsmServer|body|object|false|none|
|» » AsmUser|body|object|false|none|
|» » CharLengthSemantics|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » DirectPathParallelLoad|body|object|false|none|
|» » FailTasksOnLobTruncation|body|object|false|none|
|» » NumberDatatypeScale|body|object|false|none|
|» » Password|body|object|false|none|
|» » Port|body|object|false|none|
|» » ReadTableSpaceName|body|object|false|none|
|» » RetryInterval|body|object|false|none|
|» » SecurityDbEncryption|body|object|false|none|
|» » SecurityDbEncryptionName|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » SpatialDataOptionToGeoJsonFunctionName|body|object|false|none|
|» » StandbyDelayTime|body|object|false|none|
|» » Username|body|object|false|none|
|» » UseBFile|body|object|false|none|
|» » UseDirectPathFullLoad|body|object|false|none|
|» » UseLogminerReader|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» » SecretsManagerOracleAsmAccessRoleArn|body|object|false|none|
|» » SecretsManagerOracleAsmSecretId|body|object|false|none|
|» » TrimSpaceInChar|body|object|false|none|
|» » ConvertTimestampWithZoneToUTC|body|object|false|none|
|» SybaseSettings|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » Password|body|object|false|none|
|» » Port|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » Username|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» MicrosoftSQLServerSettings|body|object|false|none|
|» » Port|body|object|false|none|
|» » BcpPacketSize|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » ControlTablesFileGroup|body|object|false|none|
|» » Password|body|object|false|none|
|» » QuerySingleAlwaysOnNode|body|object|false|none|
|» » ReadBackupOnly|body|object|false|none|
|» » SafeguardPolicy|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » Username|body|object|false|none|
|» » UseBcpFullLoad|body|object|false|none|
|» » UseThirdPartyBackupDevice|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» » TrimSpaceInChar|body|object|false|none|
|» » TlogAccessMode|body|object|false|none|
|» » ForceLobLookup|body|object|false|none|
|» IBMDb2Settings|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » Password|body|object|false|none|
|» » Port|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » SetDataCaptureChanges|body|object|false|none|
|» » CurrentLsn|body|object|false|none|
|» » MaxKBytesPerRead|body|object|false|none|
|» » Username|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» DocDbSettings|body|object|false|none|
|» » Username|body|object|false|none|
|» » Password|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » Port|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » NestingLevel|body|object|false|none|
|» » ExtractDocId|body|object|false|none|
|» » DocsToInvestigate|body|object|false|none|
|» » KmsKeyId|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|
|» RedisSettings|body|object|false|none|
|» » ServerName|body|object|true|none|
|» » Port|body|object|true|none|
|» » SslSecurityProtocol|body|object|false|none|
|» » AuthType|body|object|false|none|
|» » AuthUserName|body|object|false|none|
|» » AuthPassword|body|object|false|none|
|» » SslCaCertificateArn|body|object|false|none|
|» ExactSettings|body|object|false|none|
|» GcpMySQLSettings|body|object|false|none|
|» » AfterConnectScript|body|object|false|none|
|» » CleanSourceMetadataOnMismatch|body|object|false|none|
|» » DatabaseName|body|object|false|none|
|» » EventsPollInterval|body|object|false|none|
|» » TargetDbType|body|object|false|none|
|» » MaxFileSize|body|object|false|none|
|» » ParallelLoadThreads|body|object|false|none|
|» » Password|body|object|false|none|
|» » Port|body|object|false|none|
|» » ServerName|body|object|false|none|
|» » ServerTimezone|body|object|false|none|
|» » Username|body|object|false|none|
|» » SecretsManagerAccessRoleArn|body|object|false|none|
|» » SecretsManagerSecretId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.ModifyEndpoint|

> Example responses

> 200 Response

```json
{
  "Endpoint": {}
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

<h3 id="modifyendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyEndpointResponse](#schemamodifyendpointresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|482|482|ResourceAlreadyExistsFault|[ResourceAlreadyExistsFault](#schemaresourcealreadyexistsfault)|
|483|483|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|484|484|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyEventSubscription

<a id="opIdModifyEventSubscription"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.ModifyEventSubscription' \
  -d '{
    "SubscriptionName": {},
    "SnsTopicArn": {},
    "SourceType": {},
    "EventCategories": {},
    "Enabled": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription`

Modifies an existing DMS event notification subscription. 

> Body parameter

```json
{
  "SubscriptionName": {},
  "SnsTopicArn": {},
  "SourceType": {},
  "EventCategories": {},
  "Enabled": {}
}
```

<h3 id="modifyeventsubscription-parameters">Parameters</h3>

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
|body|body|[ModifyEventSubscriptionMessage](#schemamodifyeventsubscriptionmessage)|true|none|
|» SubscriptionName|body|object|true|none|
|» SnsTopicArn|body|object|false|none|
|» SourceType|body|object|false|none|
|» EventCategories|body|object|false|none|
|» Enabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.ModifyEventSubscription|

> Example responses

> 200 Response

```json
{
  "EventSubscription": {
    "CustomerAwsId": {},
    "CustSubscriptionId": {},
    "SnsTopicArn": {},
    "Status": {},
    "SubscriptionCreationTime": {},
    "SourceType": {},
    "SourceIdsList": {},
    "EventCategoriesList": {},
    "Enabled": {}
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

<h3 id="modifyeventsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyEventSubscriptionResponse](#schemamodifyeventsubscriptionresponse)|
|480|480|ResourceQuotaExceededFault|[ResourceQuotaExceededFault](#schemaresourcequotaexceededfault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|482|482|SNSInvalidTopicFault|[SNSInvalidTopicFault](#schemasnsinvalidtopicfault)|
|483|483|SNSNoAuthorizationFault|[SNSNoAuthorizationFault](#schemasnsnoauthorizationfault)|
|484|484|KMSAccessDeniedFault|[KMSAccessDeniedFault](#schemakmsaccessdeniedfault)|
|485|485|KMSDisabledFault|[KMSDisabledFault](#schemakmsdisabledfault)|
|486|486|KMSInvalidStateFault|[KMSInvalidStateFault](#schemakmsinvalidstatefault)|
|487|487|KMSNotFoundFault|[KMSNotFoundFault](#schemakmsnotfoundfault)|
|488|488|KMSThrottlingFault|[KMSThrottlingFault](#schemakmsthrottlingfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyReplicationInstance

<a id="opIdModifyReplicationInstance"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.ModifyReplicationInstance' \
  -d '{
    "ReplicationInstanceArn": {},
    "AllocatedStorage": {},
    "ApplyImmediately": {},
    "ReplicationInstanceClass": {},
    "VpcSecurityGroupIds": {},
    "PreferredMaintenanceWindow": {},
    "MultiAZ": {},
    "EngineVersion": {},
    "AllowMajorVersionUpgrade": {},
    "AutoMinorVersionUpgrade": {},
    "ReplicationInstanceIdentifier": {},
    "NetworkType": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance`

<p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>

> Body parameter

```json
{
  "ReplicationInstanceArn": {},
  "AllocatedStorage": {},
  "ApplyImmediately": {},
  "ReplicationInstanceClass": {},
  "VpcSecurityGroupIds": {},
  "PreferredMaintenanceWindow": {},
  "MultiAZ": {},
  "EngineVersion": {},
  "AllowMajorVersionUpgrade": {},
  "AutoMinorVersionUpgrade": {},
  "ReplicationInstanceIdentifier": {},
  "NetworkType": {}
}
```

<h3 id="modifyreplicationinstance-parameters">Parameters</h3>

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
|body|body|[ModifyReplicationInstanceMessage](#schemamodifyreplicationinstancemessage)|true|none|
|» ReplicationInstanceArn|body|object|true|none|
|» AllocatedStorage|body|object|false|none|
|» ApplyImmediately|body|object|false|none|
|» ReplicationInstanceClass|body|object|false|none|
|» VpcSecurityGroupIds|body|object|false|none|
|» PreferredMaintenanceWindow|body|object|false|none|
|» MultiAZ|body|object|false|none|
|» EngineVersion|body|object|false|none|
|» AllowMajorVersionUpgrade|body|object|false|none|
|» AutoMinorVersionUpgrade|body|object|false|none|
|» ReplicationInstanceIdentifier|body|object|false|none|
|» NetworkType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.ModifyReplicationInstance|

> Example responses

> 200 Response

```json
{
  "ReplicationInstance": {
    "AllocatedStorage": 5,
    "AutoMinorVersionUpgrade": true,
    "EngineVersion": "1.5.0",
    "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
    "PendingModifiedValues": {},
    "PreferredMaintenanceWindow": "sun:06:00-sun:14:00",
    "PubliclyAccessible": true,
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationInstanceClass": "dms.t2.micro",
    "ReplicationInstanceIdentifier": "test-rep-1",
    "ReplicationInstanceStatus": "available",
    "ReplicationSubnetGroup": {
      "ReplicationSubnetGroupDescription": "default",
      "ReplicationSubnetGroupIdentifier": "default",
      "SubnetGroupStatus": "Complete",
      "Subnets": [
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1d"
          },
          "SubnetIdentifier": "subnet-f6dd91af",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1b"
          },
          "SubnetIdentifier": "subnet-3605751d",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1c"
          },
          "SubnetIdentifier": "subnet-c2daefb5",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1e"
          },
          "SubnetIdentifier": "subnet-85e90cb8",
          "SubnetStatus": "Active"
        }
      ],
      "VpcId": "vpc-6741a603"
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

<h3 id="modifyreplicationinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyReplicationInstanceResponse](#schemamodifyreplicationinstanceresponse)|
|480|480|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|482|482|ResourceAlreadyExistsFault|[ResourceAlreadyExistsFault](#schemaresourcealreadyexistsfault)|
|483|483|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|484|484|InsufficientResourceCapacityFault|[InsufficientResourceCapacityFault](#schemainsufficientresourcecapacityfault)|
|485|485|StorageQuotaExceededFault|[StorageQuotaExceededFault](#schemastoragequotaexceededfault)|
|486|486|UpgradeDependencyFailureFault|[UpgradeDependencyFailureFault](#schemaupgradedependencyfailurefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyReplicationSubnetGroup

<a id="opIdModifyReplicationSubnetGroup"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.ModifyReplicationSubnetGroup' \
  -d '{
    "ReplicationSubnetGroupIdentifier": {},
    "ReplicationSubnetGroupDescription": {},
    "SubnetIds": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup`

Modifies the settings for the specified replication subnet group.

> Body parameter

```json
{
  "ReplicationSubnetGroupIdentifier": {},
  "ReplicationSubnetGroupDescription": {},
  "SubnetIds": {}
}
```

<h3 id="modifyreplicationsubnetgroup-parameters">Parameters</h3>

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
|body|body|[ModifyReplicationSubnetGroupMessage](#schemamodifyreplicationsubnetgroupmessage)|true|none|
|» ReplicationSubnetGroupIdentifier|body|object|true|none|
|» ReplicationSubnetGroupDescription|body|object|false|none|
|» SubnetIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.ModifyReplicationSubnetGroup|

> Example responses

> 200 Response

```json
{
  "ReplicationSubnetGroup": {}
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

<h3 id="modifyreplicationsubnetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyReplicationSubnetGroupResponse](#schemamodifyreplicationsubnetgroupresponse)|
|480|480|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|482|482|ResourceQuotaExceededFault|[ResourceQuotaExceededFault](#schemaresourcequotaexceededfault)|
|483|483|SubnetAlreadyInUse|[SubnetAlreadyInUse](#schemasubnetalreadyinuse)|
|484|484|ReplicationSubnetGroupDoesNotCoverEnoughAZs|[ReplicationSubnetGroupDoesNotCoverEnoughAZs](#schemareplicationsubnetgroupdoesnotcoverenoughazs)|
|485|485|InvalidSubnet|[InvalidSubnet](#schemainvalidsubnet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ModifyReplicationTask

<a id="opIdModifyReplicationTask"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.ModifyReplicationTask' \
  -d '{
    "ReplicationTaskArn": {},
    "ReplicationTaskIdentifier": {},
    "MigrationType": {},
    "TableMappings": {},
    "ReplicationTaskSettings": {},
    "CdcStartTime": {},
    "CdcStartPosition": {},
    "CdcStopPosition": {},
    "TaskData": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask`

<p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>Database Migration Service User Guide</i>.</p>

> Body parameter

```json
{
  "ReplicationTaskArn": {},
  "ReplicationTaskIdentifier": {},
  "MigrationType": {},
  "TableMappings": {},
  "ReplicationTaskSettings": {},
  "CdcStartTime": {},
  "CdcStartPosition": {},
  "CdcStopPosition": {},
  "TaskData": {}
}
```

<h3 id="modifyreplicationtask-parameters">Parameters</h3>

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
|body|body|[ModifyReplicationTaskMessage](#schemamodifyreplicationtaskmessage)|true|none|
|» ReplicationTaskArn|body|object|true|none|
|» ReplicationTaskIdentifier|body|object|false|none|
|» MigrationType|body|object|false|none|
|» TableMappings|body|object|false|none|
|» ReplicationTaskSettings|body|object|false|none|
|» CdcStartTime|body|object|false|none|
|» CdcStartPosition|body|object|false|none|
|» CdcStopPosition|body|object|false|none|
|» TaskData|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.ModifyReplicationTask|

> Example responses

> 200 Response

```json
{
  "ReplicationTask": {
    "ReplicationTaskIdentifier": {},
    "SourceEndpointArn": {},
    "TargetEndpointArn": {},
    "ReplicationInstanceArn": {},
    "MigrationType": {},
    "TableMappings": {},
    "ReplicationTaskSettings": {},
    "Status": {},
    "LastFailureMessage": {},
    "StopReason": {},
    "ReplicationTaskCreationDate": {},
    "ReplicationTaskStartDate": {},
    "CdcStartPosition": {},
    "CdcStopPosition": {},
    "RecoveryCheckpoint": {},
    "ReplicationTaskArn": {},
    "ReplicationTaskStats": {
      "FullLoadProgressPercent": {},
      "ElapsedTimeMillis": {},
      "TablesLoaded": {},
      "TablesLoading": {},
      "TablesQueued": {},
      "TablesErrored": {},
      "FreshStartDate": {},
      "StartDate": {},
      "StopDate": {},
      "FullLoadStartDate": {},
      "FullLoadFinishDate": {}
    },
    "TaskData": {},
    "TargetReplicationInstanceArn": {}
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

<h3 id="modifyreplicationtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ModifyReplicationTaskResponse](#schemamodifyreplicationtaskresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|482|482|ResourceAlreadyExistsFault|[ResourceAlreadyExistsFault](#schemaresourcealreadyexistsfault)|
|483|483|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MoveReplicationTask

<a id="opIdMoveReplicationTask"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.MoveReplicationTask' \
  -d '{
    "ReplicationTaskArn": {},
    "TargetReplicationInstanceArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.MoveReplicationTask`

Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.

> Body parameter

```json
{
  "ReplicationTaskArn": {},
  "TargetReplicationInstanceArn": {}
}
```

<h3 id="movereplicationtask-parameters">Parameters</h3>

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
|body|body|[MoveReplicationTaskMessage](#schemamovereplicationtaskmessage)|true|none|
|» ReplicationTaskArn|body|object|true|none|
|» TargetReplicationInstanceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.MoveReplicationTask|

> Example responses

> 200 Response

```json
{
  "ReplicationTask": {
    "ReplicationTaskIdentifier": {},
    "SourceEndpointArn": {},
    "TargetEndpointArn": {},
    "ReplicationInstanceArn": {},
    "MigrationType": {},
    "TableMappings": {},
    "ReplicationTaskSettings": {},
    "Status": {},
    "LastFailureMessage": {},
    "StopReason": {},
    "ReplicationTaskCreationDate": {},
    "ReplicationTaskStartDate": {},
    "CdcStartPosition": {},
    "CdcStopPosition": {},
    "RecoveryCheckpoint": {},
    "ReplicationTaskArn": {},
    "ReplicationTaskStats": {
      "FullLoadProgressPercent": {},
      "ElapsedTimeMillis": {},
      "TablesLoaded": {},
      "TablesLoading": {},
      "TablesQueued": {},
      "TablesErrored": {},
      "FreshStartDate": {},
      "StartDate": {},
      "StopDate": {},
      "FullLoadStartDate": {},
      "FullLoadFinishDate": {}
    },
    "TaskData": {},
    "TargetReplicationInstanceArn": {}
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

<h3 id="movereplicationtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MoveReplicationTaskResponse](#schemamovereplicationtaskresponse)|
|480|480|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|482|482|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|483|483|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|484|484|ResourceQuotaExceededFault|[ResourceQuotaExceededFault](#schemaresourcequotaexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RebootReplicationInstance

<a id="opIdRebootReplicationInstance"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.RebootReplicationInstance' \
  -d '{
    "ReplicationInstanceArn": {},
    "ForceFailover": {},
    "ForcePlannedFailover": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance`

Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.

> Body parameter

```json
{
  "ReplicationInstanceArn": {},
  "ForceFailover": {},
  "ForcePlannedFailover": {}
}
```

<h3 id="rebootreplicationinstance-parameters">Parameters</h3>

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
|body|body|[RebootReplicationInstanceMessage](#schemarebootreplicationinstancemessage)|true|none|
|» ReplicationInstanceArn|body|object|true|none|
|» ForceFailover|body|object|false|none|
|» ForcePlannedFailover|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.RebootReplicationInstance|

> Example responses

> 200 Response

```json
{
  "ReplicationInstance": {
    "ReplicationInstanceIdentifier": {},
    "ReplicationInstanceClass": {},
    "ReplicationInstanceStatus": {},
    "AllocatedStorage": {},
    "InstanceCreateTime": {},
    "VpcSecurityGroups": {},
    "AvailabilityZone": {},
    "ReplicationSubnetGroup": {
      "ReplicationSubnetGroupIdentifier": {},
      "ReplicationSubnetGroupDescription": {},
      "VpcId": {},
      "SubnetGroupStatus": {},
      "Subnets": {},
      "SupportedNetworkTypes": {}
    },
    "PreferredMaintenanceWindow": {},
    "PendingModifiedValues": {
      "ReplicationInstanceClass": {},
      "AllocatedStorage": {},
      "MultiAZ": {},
      "EngineVersion": {},
      "NetworkType": {}
    },
    "MultiAZ": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "KmsKeyId": {},
    "ReplicationInstanceArn": {},
    "ReplicationInstancePublicIpAddress": {},
    "ReplicationInstancePrivateIpAddress": {},
    "ReplicationInstancePublicIpAddresses": {},
    "ReplicationInstancePrivateIpAddresses": {},
    "ReplicationInstanceIpv6Addresses": {},
    "PubliclyAccessible": {},
    "SecondaryAvailabilityZone": {},
    "FreeUntil": {},
    "DnsNameServers": {},
    "NetworkType": {}
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

<h3 id="rebootreplicationinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebootReplicationInstanceResponse](#schemarebootreplicationinstanceresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RefreshSchemas

<a id="opIdRefreshSchemas"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.RefreshSchemas' \
  -d '{
    "EndpointArn": {},
    "ReplicationInstanceArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas`

Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.

> Body parameter

```json
{
  "EndpointArn": {},
  "ReplicationInstanceArn": {}
}
```

<h3 id="refreshschemas-parameters">Parameters</h3>

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
|body|body|[RefreshSchemasMessage](#schemarefreshschemasmessage)|true|none|
|» EndpointArn|body|object|true|none|
|» ReplicationInstanceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.RefreshSchemas|

> Example responses

> 200 Response

```json
{
  "RefreshSchemasStatus": {}
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

<h3 id="refreshschemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RefreshSchemasResponse](#schemarefreshschemasresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|482|482|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|483|483|ResourceQuotaExceededFault|[ResourceQuotaExceededFault](#schemaresourcequotaexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReloadTables

<a id="opIdReloadTables"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.ReloadTables' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.ReloadTables' \
  -d '{
    "ReplicationTaskArn": {},
    "TablesToReload": {},
    "ReloadOption": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.ReloadTables`

<p>Reloads the target database table with the source data. </p> <p>You can only use this operation with a task in the <code>RUNNING</code> state, otherwise the service will throw an <code>InvalidResourceStateFault</code> exception.</p>

> Body parameter

```json
{
  "ReplicationTaskArn": {},
  "TablesToReload": {},
  "ReloadOption": {}
}
```

<h3 id="reloadtables-parameters">Parameters</h3>

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
|body|body|[ReloadTablesMessage](#schemareloadtablesmessage)|true|none|
|» ReplicationTaskArn|body|object|true|none|
|» TablesToReload|body|object|true|none|
|» ReloadOption|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.ReloadTables|

> Example responses

> 200 Response

```json
{
  "ReplicationTaskArn": {}
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

<h3 id="reloadtables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReloadTablesResponse](#schemareloadtablesresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTagsFromResource

<a id="opIdRemoveTagsFromResource"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.RemoveTagsFromResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource`

Removes metadata tags from an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.

> Body parameter

```json
{
  "ResourceArn": {},
  "TagKeys": {}
}
```

<h3 id="removetagsfromresource-parameters">Parameters</h3>

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
|body|body|[RemoveTagsFromResourceMessage](#schemaremovetagsfromresourcemessage)|true|none|
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.RemoveTagsFromResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="removetagsfromresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RemoveTagsFromResourceResponse](#schemaremovetagsfromresourceresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RunFleetAdvisorLsaAnalysis

<a id="opIdRunFleetAdvisorLsaAnalysis"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis`

Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.

<h3 id="runfleetadvisorlsaanalysis-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis|

> Example responses

> 200 Response

```json
{
  "LsaAnalysisId": {},
  "Status": {}
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

<h3 id="runfleetadvisorlsaanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RunFleetAdvisorLsaAnalysisResponse](#schemarunfleetadvisorlsaanalysisresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartRecommendations

<a id="opIdStartRecommendations"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.StartRecommendations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.StartRecommendations' \
  -d '{
    "DatabaseId": {},
    "Settings": {
      "InstanceSizingType": {},
      "WorkloadType": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.StartRecommendations`

<p>Starts the analysis of your source database to provide recommendations of target engines.</p> <p>You can create recommendations for multiple source databases using <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_BatchStartRecommendations.html">BatchStartRecommendations</a>.</p>

> Body parameter

```json
{
  "DatabaseId": {},
  "Settings": {
    "InstanceSizingType": {},
    "WorkloadType": {}
  }
}
```

<h3 id="startrecommendations-parameters">Parameters</h3>

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
|body|body|[StartRecommendationsRequest](#schemastartrecommendationsrequest)|true|none|
|» DatabaseId|body|object|true|none|
|» Settings|body|object|true|none|
|» » InstanceSizingType|body|object|true|none|
|» » WorkloadType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.StartRecommendations|

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

<h3 id="startrecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|482|482|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartReplicationTask

<a id="opIdStartReplicationTask"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.StartReplicationTask' \
  -d '{
    "ReplicationTaskArn": {},
    "StartReplicationTaskType": {},
    "CdcStartTime": {},
    "CdcStartPosition": {},
    "CdcStopPosition": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask`

<p>Starts the replication task.</p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>Database Migration Service User Guide.</i> </p>

> Body parameter

```json
{
  "ReplicationTaskArn": {},
  "StartReplicationTaskType": {},
  "CdcStartTime": {},
  "CdcStartPosition": {},
  "CdcStopPosition": {}
}
```

<h3 id="startreplicationtask-parameters">Parameters</h3>

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
|body|body|[StartReplicationTaskMessage](#schemastartreplicationtaskmessage)|true|none|
|» ReplicationTaskArn|body|object|true|none|
|» StartReplicationTaskType|body|object|true|none|
|» CdcStartTime|body|object|false|none|
|» CdcStartPosition|body|object|false|none|
|» CdcStopPosition|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.StartReplicationTask|

> Example responses

> 200 Response

```json
{
  "ReplicationTask": {
    "MigrationType": "full-load",
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationTaskArn": "arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM",
    "ReplicationTaskCreationDate": "2016-12-14T18:25:43Z",
    "ReplicationTaskIdentifier": "task1",
    "ReplicationTaskSettings": "{\"TargetMetadata\":{\"TargetSchema\":\"\",\"SupportLobs\":true,\"FullLobMode\":true,\"LobChunkSize\":64,\"LimitedSizeLobMode\":false,\"LobMaxSize\":0},\"FullLoadSettings\":{\"FullLoadEnabled\":true,\"ApplyChangesEnabled\":false,\"TargetTablePrepMode\":\"DROP_AND_CREATE\",\"CreatePkAfterFullLoad\":false,\"StopTaskCachedChangesApplied\":false,\"StopTaskCachedChangesNotApplied\":false,\"ResumeEnabled\":false,\"ResumeMinTableSize\":100000,\"ResumeOnlyClusteredPKTables\":true,\"MaxFullLoadSubTasks\":8,\"TransactionConsistencyTimeout\":600,\"CommitRate\":10000},\"Logging\":{\"EnableLogging\":false}}",
    "SourceEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
    "Status": "creating",
    "TableMappings": "file://mappingfile.json",
    "TargetEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E"
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

<h3 id="startreplicationtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartReplicationTaskResponse](#schemastartreplicationtaskresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|482|482|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartReplicationTaskAssessment

<a id="opIdStartReplicationTaskAssessment"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.StartReplicationTaskAssessment' \
  -d '{
    "ReplicationTaskArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment`

<p> Starts the replication task assessment for unsupported data types in the source database. </p> <p>You can only use this operation for a task if the following conditions are true:</p> <ul> <li> <p>The task must be in the <code>stopped</code> state.</p> </li> <li> <p>The task must have successful connections to the source and target.</p> </li> </ul> <p>If either of these conditions are not met, an <code>InvalidResourceStateFault</code> error will result. </p> <p>For information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <i>Database Migration Service User Guide</i>.</p>

> Body parameter

```json
{
  "ReplicationTaskArn": {}
}
```

<h3 id="startreplicationtaskassessment-parameters">Parameters</h3>

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
|body|body|[StartReplicationTaskAssessmentMessage](#schemastartreplicationtaskassessmentmessage)|true|none|
|» ReplicationTaskArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.StartReplicationTaskAssessment|

> Example responses

> 200 Response

```json
{
  "ReplicationTask": {
    "ReplicationTaskIdentifier": {},
    "SourceEndpointArn": {},
    "TargetEndpointArn": {},
    "ReplicationInstanceArn": {},
    "MigrationType": {},
    "TableMappings": {},
    "ReplicationTaskSettings": {},
    "Status": {},
    "LastFailureMessage": {},
    "StopReason": {},
    "ReplicationTaskCreationDate": {},
    "ReplicationTaskStartDate": {},
    "CdcStartPosition": {},
    "CdcStopPosition": {},
    "RecoveryCheckpoint": {},
    "ReplicationTaskArn": {},
    "ReplicationTaskStats": {
      "FullLoadProgressPercent": {},
      "ElapsedTimeMillis": {},
      "TablesLoaded": {},
      "TablesLoading": {},
      "TablesQueued": {},
      "TablesErrored": {},
      "FreshStartDate": {},
      "StartDate": {},
      "StopDate": {},
      "FullLoadStartDate": {},
      "FullLoadFinishDate": {}
    },
    "TaskData": {},
    "TargetReplicationInstanceArn": {}
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

<h3 id="startreplicationtaskassessment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartReplicationTaskAssessmentResponse](#schemastartreplicationtaskassessmentresponse)|
|480|480|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartReplicationTaskAssessmentRun

<a id="opIdStartReplicationTaskAssessmentRun"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.StartReplicationTaskAssessmentRun' \
  -d '{
    "ReplicationTaskArn": {},
    "ServiceAccessRoleArn": {},
    "ResultLocationBucket": {},
    "ResultLocationFolder": {},
    "ResultEncryptionMode": {},
    "ResultKmsKeyArn": {},
    "AssessmentRunName": {},
    "IncludeOnly": {},
    "Exclude": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessmentRun`

<p>Starts a new premigration assessment run for one or more individual assessments of a migration task.</p> <p>The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.</p>

> Body parameter

```json
{
  "ReplicationTaskArn": {},
  "ServiceAccessRoleArn": {},
  "ResultLocationBucket": {},
  "ResultLocationFolder": {},
  "ResultEncryptionMode": {},
  "ResultKmsKeyArn": {},
  "AssessmentRunName": {},
  "IncludeOnly": {},
  "Exclude": {}
}
```

<h3 id="startreplicationtaskassessmentrun-parameters">Parameters</h3>

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
|body|body|[StartReplicationTaskAssessmentRunMessage](#schemastartreplicationtaskassessmentrunmessage)|true|none|
|» ReplicationTaskArn|body|object|true|none|
|» ServiceAccessRoleArn|body|object|true|none|
|» ResultLocationBucket|body|object|true|none|
|» ResultLocationFolder|body|object|false|none|
|» ResultEncryptionMode|body|object|false|none|
|» ResultKmsKeyArn|body|object|false|none|
|» AssessmentRunName|body|object|true|none|
|» IncludeOnly|body|object|false|none|
|» Exclude|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.StartReplicationTaskAssessmentRun|

> Example responses

> 200 Response

```json
{
  "ReplicationTaskAssessmentRun": {
    "ReplicationTaskAssessmentRunArn": {},
    "ReplicationTaskArn": {},
    "Status": {},
    "ReplicationTaskAssessmentRunCreationDate": {},
    "AssessmentProgress": {
      "IndividualAssessmentCount": {},
      "IndividualAssessmentCompletedCount": {}
    },
    "LastFailureMessage": {},
    "ServiceAccessRoleArn": {},
    "ResultLocationBucket": {},
    "ResultLocationFolder": {},
    "ResultEncryptionMode": {},
    "ResultKmsKeyArn": {},
    "AssessmentRunName": {}
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

> 489 Response

```json
null
```

> 490 Response

```json
null
```

> 491 Response

```json
null
```

<h3 id="startreplicationtaskassessmentrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartReplicationTaskAssessmentRunResponse](#schemastartreplicationtaskassessmentrunresponse)|
|480|480|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|481|481|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|482|482|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|483|483|KMSAccessDeniedFault|[KMSAccessDeniedFault](#schemakmsaccessdeniedfault)|
|484|484|KMSDisabledFault|[KMSDisabledFault](#schemakmsdisabledfault)|
|485|485|KMSFault|[KMSFault](#schemakmsfault)|
|486|486|KMSInvalidStateFault|[KMSInvalidStateFault](#schemakmsinvalidstatefault)|
|487|487|KMSNotFoundFault|[KMSNotFoundFault](#schemakmsnotfoundfault)|
|488|488|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|489|489|S3AccessDeniedFault|[S3AccessDeniedFault](#schemas3accessdeniedfault)|
|490|490|S3ResourceNotFoundFault|[S3ResourceNotFoundFault](#schemas3resourcenotfoundfault)|
|491|491|ResourceAlreadyExistsFault|[ResourceAlreadyExistsFault](#schemaresourcealreadyexistsfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopReplicationTask

<a id="opIdStopReplicationTask"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.StopReplicationTask' \
  -d '{
    "ReplicationTaskArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask`

Stops the replication task.

> Body parameter

```json
{
  "ReplicationTaskArn": {}
}
```

<h3 id="stopreplicationtask-parameters">Parameters</h3>

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
|body|body|[StopReplicationTaskMessage](#schemastopreplicationtaskmessage)|true|none|
|» ReplicationTaskArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.StopReplicationTask|

> Example responses

> 200 Response

```json
{
  "ReplicationTask": {
    "MigrationType": "full-load",
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationTaskArn": "arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM",
    "ReplicationTaskCreationDate": "2016-12-14T18:25:43Z",
    "ReplicationTaskIdentifier": "task1",
    "ReplicationTaskSettings": "{\"TargetMetadata\":{\"TargetSchema\":\"\",\"SupportLobs\":true,\"FullLobMode\":true,\"LobChunkSize\":64,\"LimitedSizeLobMode\":false,\"LobMaxSize\":0},\"FullLoadSettings\":{\"FullLoadEnabled\":true,\"ApplyChangesEnabled\":false,\"TargetTablePrepMode\":\"DROP_AND_CREATE\",\"CreatePkAfterFullLoad\":false,\"StopTaskCachedChangesApplied\":false,\"StopTaskCachedChangesNotApplied\":false,\"ResumeEnabled\":false,\"ResumeMinTableSize\":100000,\"ResumeOnlyClusteredPKTables\":true,\"MaxFullLoadSubTasks\":8,\"TransactionConsistencyTimeout\":600,\"CommitRate\":10000},\"Logging\":{\"EnableLogging\":false}}",
    "SourceEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
    "Status": "creating",
    "TableMappings": "file://mappingfile.json",
    "TargetEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E"
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

<h3 id="stopreplicationtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopReplicationTaskResponse](#schemastopreplicationtaskresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestConnection

<a id="opIdTestConnection"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.TestConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.TestConnection' \
  -d '{
    "ReplicationInstanceArn": {},
    "EndpointArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.TestConnection`

Tests the connection between the replication instance and the endpoint.

> Body parameter

```json
{
  "ReplicationInstanceArn": {},
  "EndpointArn": {}
}
```

<h3 id="testconnection-parameters">Parameters</h3>

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
|body|body|[TestConnectionMessage](#schematestconnectionmessage)|true|none|
|» ReplicationInstanceArn|body|object|true|none|
|» EndpointArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.TestConnection|

> Example responses

> 200 Response

```json
{
  "Connection": {}
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

<h3 id="testconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestConnectionResponse](#schematestconnectionresponse)|
|480|480|ResourceNotFoundFault|[ResourceNotFoundFault](#schemaresourcenotfoundfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|
|482|482|KMSKeyNotAccessibleFault|[KMSKeyNotAccessibleFault](#schemakmskeynotaccessiblefault)|
|483|483|ResourceQuotaExceededFault|[ResourceQuotaExceededFault](#schemaresourcequotaexceededfault)|
|484|484|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSubscriptionsToEventBridge

<a id="opIdUpdateSubscriptionsToEventBridge"></a>

> Code samples

```bash
curl 'https://dms.us-east-1.amazonaws.com/#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonDMSv20160101.UpdateSubscriptionsToEventBridge' \
  -d '{
    "ForceMove": {}
  }'
```

`POST /#X-Amz-Target=AmazonDMSv20160101.UpdateSubscriptionsToEventBridge`

<p>Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.6 or higher. If any replication instances are from versions earlier than 3.4.6, the operation raises an error and tells you to upgrade these instances to version 3.4.6 or higher. To enable migration regardless of version, set the <code>Force</code> option to true. However, if you don't upgrade instances earlier than version 3.4.6, some types of events might not be available when you use Amazon EventBridge.</p> <p>To call this operation, make sure that you have certain permissions added to your user account. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html#CHAP_Events-migrate-to-eventbridge">Migrating event subscriptions to Amazon EventBridge</a> in the <i>Amazon Web Services Database Migration Service User Guide</i>.</p>

> Body parameter

```json
{
  "ForceMove": {}
}
```

<h3 id="updatesubscriptionstoeventbridge-parameters">Parameters</h3>

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
|body|body|[UpdateSubscriptionsToEventBridgeMessage](#schemaupdatesubscriptionstoeventbridgemessage)|true|none|
|» ForceMove|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonDMSv20160101.UpdateSubscriptionsToEventBridge|

> Example responses

> 200 Response

```json
{
  "Result": {}
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

<h3 id="updatesubscriptionstoeventbridge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSubscriptionsToEventBridgeResponse](#schemaupdatesubscriptionstoeventbridgeresponse)|
|480|480|AccessDeniedFault|[AccessDeniedFault](#schemaaccessdeniedfault)|
|481|481|InvalidResourceStateFault|[InvalidResourceStateFault](#schemainvalidresourcestatefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddTagsToResourceResponse">AddTagsToResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstoresourceresponse"></a>
<a id="schema_AddTagsToResourceResponse"></a>
<a id="tocSaddtagstoresourceresponse"></a>
<a id="tocsaddtagstoresourceresponse"></a>

```json
{}
```

<p/>

<h2 id="tocS_AddTagsToResourceMessage">AddTagsToResourceMessage</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagstoresourcemessage"></a>
<a id="schema_AddTagsToResourceMessage"></a>
<a id="tocSaddtagstoresourcemessage"></a>
<a id="tocsaddtagstoresourcemessage"></a>

```json
{
  "ResourceArn": {},
  "Tags": {}
}
```

Associates a set of tags with an DMS resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_ResourceNotFoundFault">ResourceNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundfault"></a>
<a id="schema_ResourceNotFoundFault"></a>
<a id="tocSresourcenotfoundfault"></a>
<a id="tocsresourcenotfoundfault"></a>

```json
null
```

<h2 id="tocS_ApplyPendingMaintenanceActionResponse">ApplyPendingMaintenanceActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapplypendingmaintenanceactionresponse"></a>
<a id="schema_ApplyPendingMaintenanceActionResponse"></a>
<a id="tocSapplypendingmaintenanceactionresponse"></a>
<a id="tocsapplypendingmaintenanceactionresponse"></a>

```json
{
  "ResourcePendingMaintenanceActions": {
    "ResourceIdentifier": {},
    "PendingMaintenanceActionDetails": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourcePendingMaintenanceActions|object|false|none|none|

<h2 id="tocS_ApplyPendingMaintenanceActionMessage">ApplyPendingMaintenanceActionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaapplypendingmaintenanceactionmessage"></a>
<a id="schema_ApplyPendingMaintenanceActionMessage"></a>
<a id="tocSapplypendingmaintenanceactionmessage"></a>
<a id="tocsapplypendingmaintenanceactionmessage"></a>

```json
{
  "ReplicationInstanceArn": {},
  "ApplyAction": {},
  "OptInType": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstanceArn|object|true|none|none|
|ApplyAction|object|true|none|none|
|OptInType|object|true|none|none|

<h2 id="tocS_BatchStartRecommendationsResponse">BatchStartRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchstartrecommendationsresponse"></a>
<a id="schema_BatchStartRecommendationsResponse"></a>
<a id="tocSbatchstartrecommendationsresponse"></a>
<a id="tocsbatchstartrecommendationsresponse"></a>

```json
{
  "ErrorEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorEntries|object|false|none|none|

<h2 id="tocS_BatchStartRecommendationsRequest">BatchStartRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchstartrecommendationsrequest"></a>
<a id="schema_BatchStartRecommendationsRequest"></a>
<a id="tocSbatchstartrecommendationsrequest"></a>
<a id="tocsbatchstartrecommendationsrequest"></a>

```json
{
  "Data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|false|none|none|

<h2 id="tocS_InvalidResourceStateFault">InvalidResourceStateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresourcestatefault"></a>
<a id="schema_InvalidResourceStateFault"></a>
<a id="tocSinvalidresourcestatefault"></a>
<a id="tocsinvalidresourcestatefault"></a>

```json
null
```

<h2 id="tocS_AccessDeniedFault">AccessDeniedFault</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedfault"></a>
<a id="schema_AccessDeniedFault"></a>
<a id="tocSaccessdeniedfault"></a>
<a id="tocsaccessdeniedfault"></a>

```json
null
```

<h2 id="tocS_CancelReplicationTaskAssessmentRunResponse">CancelReplicationTaskAssessmentRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelreplicationtaskassessmentrunresponse"></a>
<a id="schema_CancelReplicationTaskAssessmentRunResponse"></a>
<a id="tocScancelreplicationtaskassessmentrunresponse"></a>
<a id="tocscancelreplicationtaskassessmentrunresponse"></a>

```json
{
  "ReplicationTaskAssessmentRun": {
    "ReplicationTaskAssessmentRunArn": {},
    "ReplicationTaskArn": {},
    "Status": {},
    "ReplicationTaskAssessmentRunCreationDate": {},
    "AssessmentProgress": {
      "IndividualAssessmentCount": {},
      "IndividualAssessmentCompletedCount": {}
    },
    "LastFailureMessage": {},
    "ServiceAccessRoleArn": {},
    "ResultLocationBucket": {},
    "ResultLocationFolder": {},
    "ResultEncryptionMode": {},
    "ResultKmsKeyArn": {},
    "AssessmentRunName": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskAssessmentRun|object|false|none|none|

<h2 id="tocS_CancelReplicationTaskAssessmentRunMessage">CancelReplicationTaskAssessmentRunMessage</h2>
<!-- backwards compatibility -->
<a id="schemacancelreplicationtaskassessmentrunmessage"></a>
<a id="schema_CancelReplicationTaskAssessmentRunMessage"></a>
<a id="tocScancelreplicationtaskassessmentrunmessage"></a>
<a id="tocscancelreplicationtaskassessmentrunmessage"></a>

```json
{
  "ReplicationTaskAssessmentRunArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskAssessmentRunArn|object|true|none|none|

<h2 id="tocS_CreateEndpointResponse">CreateEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateendpointresponse"></a>
<a id="schema_CreateEndpointResponse"></a>
<a id="tocScreateendpointresponse"></a>
<a id="tocscreateendpointresponse"></a>

```json
{
  "Endpoint": {
    "EndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:RAAR3R22XSH46S3PWLC3NJAWKM",
    "EndpointIdentifier": "test-endpoint-1",
    "EndpointType": "source",
    "EngineName": "mysql",
    "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
    "Port": 3306,
    "ServerName": "mydb.cx1llnox7iyx.us-west-2.rds.amazonaws.com",
    "Status": "active",
    "Username": "username"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoint|object|false|none|none|

<h2 id="tocS_CreateEndpointMessage">CreateEndpointMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreateendpointmessage"></a>
<a id="schema_CreateEndpointMessage"></a>
<a id="tocScreateendpointmessage"></a>
<a id="tocscreateendpointmessage"></a>

```json
{
  "EndpointIdentifier": {},
  "EndpointType": {},
  "EngineName": {},
  "Username": {},
  "Password": {},
  "ServerName": {},
  "Port": {},
  "DatabaseName": {},
  "ExtraConnectionAttributes": {},
  "KmsKeyId": {},
  "Tags": {},
  "CertificateArn": {},
  "SslMode": {},
  "ServiceAccessRoleArn": {},
  "ExternalTableDefinition": {},
  "DynamoDbSettings": {
    "ServiceAccessRoleArn": {}
  },
  "S3Settings": {
    "ServiceAccessRoleArn": {},
    "ExternalTableDefinition": {},
    "CsvRowDelimiter": {},
    "CsvDelimiter": {},
    "BucketFolder": {},
    "BucketName": {},
    "CompressionType": {},
    "EncryptionMode": {},
    "ServerSideEncryptionKmsKeyId": {},
    "DataFormat": {},
    "EncodingType": {},
    "DictPageSizeLimit": {},
    "RowGroupLength": {},
    "DataPageSize": {},
    "ParquetVersion": {},
    "EnableStatistics": {},
    "IncludeOpForFullLoad": {},
    "CdcInsertsOnly": {},
    "TimestampColumnName": {},
    "ParquetTimestampInMillisecond": {},
    "CdcInsertsAndUpdates": {},
    "DatePartitionEnabled": {},
    "DatePartitionSequence": {},
    "DatePartitionDelimiter": {},
    "UseCsvNoSupValue": {},
    "CsvNoSupValue": {},
    "PreserveTransactions": {},
    "CdcPath": {},
    "UseTaskStartTimeForFullLoadTimestamp": {},
    "CannedAclForObjects": {},
    "AddColumnName": {},
    "CdcMaxBatchInterval": {},
    "CdcMinFileSize": {},
    "CsvNullValue": {},
    "IgnoreHeaderRows": {},
    "MaxFileSize": {},
    "Rfc4180": {},
    "DatePartitionTimezone": {},
    "AddTrailingPaddingCharacter": {},
    "ExpectedBucketOwner": {},
    "GlueCatalogGeneration": {}
  },
  "DmsTransferSettings": {
    "ServiceAccessRoleArn": {},
    "BucketName": {}
  },
  "MongoDbSettings": {
    "Username": {},
    "Password": {},
    "ServerName": {},
    "Port": {},
    "DatabaseName": {},
    "AuthType": {},
    "AuthMechanism": {},
    "NestingLevel": {},
    "ExtractDocId": {},
    "DocsToInvestigate": {},
    "AuthSource": {},
    "KmsKeyId": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "KinesisSettings": {
    "StreamArn": {},
    "MessageFormat": {},
    "ServiceAccessRoleArn": {},
    "IncludeTransactionDetails": {},
    "IncludePartitionValue": {},
    "PartitionIncludeSchemaTable": {},
    "IncludeTableAlterOperations": {},
    "IncludeControlDetails": {},
    "IncludeNullAndEmpty": {},
    "NoHexPrefix": {}
  },
  "KafkaSettings": {
    "Broker": {},
    "Topic": {},
    "MessageFormat": {},
    "IncludeTransactionDetails": {},
    "IncludePartitionValue": {},
    "PartitionIncludeSchemaTable": {},
    "IncludeTableAlterOperations": {},
    "IncludeControlDetails": {},
    "MessageMaxBytes": {},
    "IncludeNullAndEmpty": {},
    "SecurityProtocol": {},
    "SslClientCertificateArn": {},
    "SslClientKeyArn": {},
    "SslClientKeyPassword": {},
    "SslCaCertificateArn": {},
    "SaslUsername": {},
    "SaslPassword": {},
    "NoHexPrefix": {},
    "SaslMechanism": {}
  },
  "ElasticsearchSettings": {
    "ServiceAccessRoleArn": {},
    "EndpointUri": {},
    "FullLoadErrorPercentage": {},
    "ErrorRetryDuration": {},
    "UseNewMappingType": {}
  },
  "NeptuneSettings": {
    "ServiceAccessRoleArn": {},
    "S3BucketName": {},
    "S3BucketFolder": {},
    "ErrorRetryDuration": {},
    "MaxFileSize": {},
    "MaxRetryCount": {},
    "IamAuthEnabled": {}
  },
  "RedshiftSettings": {
    "AcceptAnyDate": {},
    "AfterConnectScript": {},
    "BucketFolder": {},
    "BucketName": {},
    "CaseSensitiveNames": {},
    "CompUpdate": {},
    "ConnectionTimeout": {},
    "DatabaseName": {},
    "DateFormat": {},
    "EmptyAsNull": {},
    "EncryptionMode": {},
    "ExplicitIds": {},
    "FileTransferUploadStreams": {},
    "LoadTimeout": {},
    "MaxFileSize": {},
    "Password": {},
    "Port": {},
    "RemoveQuotes": {},
    "ReplaceInvalidChars": {},
    "ReplaceChars": {},
    "ServerName": {},
    "ServiceAccessRoleArn": {},
    "ServerSideEncryptionKmsKeyId": {},
    "TimeFormat": {},
    "TrimBlanks": {},
    "TruncateColumns": {},
    "Username": {},
    "WriteBufferSize": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "MapBooleanAsBoolean": {}
  },
  "PostgreSQLSettings": {
    "AfterConnectScript": {},
    "CaptureDdls": {},
    "MaxFileSize": {},
    "DatabaseName": {},
    "DdlArtifactsSchema": {},
    "ExecuteTimeout": {},
    "FailTasksOnLobTruncation": {},
    "HeartbeatEnable": {},
    "HeartbeatSchema": {},
    "HeartbeatFrequency": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "Username": {},
    "SlotName": {},
    "PluginName": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "TrimSpaceInChar": {},
    "MapBooleanAsBoolean": {}
  },
  "MySQLSettings": {
    "AfterConnectScript": {},
    "CleanSourceMetadataOnMismatch": {},
    "DatabaseName": {},
    "EventsPollInterval": {},
    "TargetDbType": {},
    "MaxFileSize": {},
    "ParallelLoadThreads": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "ServerTimezone": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "OracleSettings": {
    "AddSupplementalLogging": {},
    "ArchivedLogDestId": {},
    "AdditionalArchivedLogDestId": {},
    "ExtraArchivedLogDestIds": {},
    "AllowSelectNestedTables": {},
    "ParallelAsmReadThreads": {},
    "ReadAheadBlocks": {},
    "AccessAlternateDirectly": {},
    "UseAlternateFolderForOnline": {},
    "OraclePathPrefix": {},
    "UsePathPrefix": {},
    "ReplacePathPrefix": {},
    "EnableHomogenousTablespace": {},
    "DirectPathNoLog": {},
    "ArchivedLogsOnly": {},
    "AsmPassword": {},
    "AsmServer": {},
    "AsmUser": {},
    "CharLengthSemantics": {},
    "DatabaseName": {},
    "DirectPathParallelLoad": {},
    "FailTasksOnLobTruncation": {},
    "NumberDatatypeScale": {},
    "Password": {},
    "Port": {},
    "ReadTableSpaceName": {},
    "RetryInterval": {},
    "SecurityDbEncryption": {},
    "SecurityDbEncryptionName": {},
    "ServerName": {},
    "SpatialDataOptionToGeoJsonFunctionName": {},
    "StandbyDelayTime": {},
    "Username": {},
    "UseBFile": {},
    "UseDirectPathFullLoad": {},
    "UseLogminerReader": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "SecretsManagerOracleAsmAccessRoleArn": {},
    "SecretsManagerOracleAsmSecretId": {},
    "TrimSpaceInChar": {},
    "ConvertTimestampWithZoneToUTC": {}
  },
  "SybaseSettings": {
    "DatabaseName": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "MicrosoftSQLServerSettings": {
    "Port": {},
    "BcpPacketSize": {},
    "DatabaseName": {},
    "ControlTablesFileGroup": {},
    "Password": {},
    "QuerySingleAlwaysOnNode": {},
    "ReadBackupOnly": {},
    "SafeguardPolicy": {},
    "ServerName": {},
    "Username": {},
    "UseBcpFullLoad": {},
    "UseThirdPartyBackupDevice": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "TrimSpaceInChar": {},
    "TlogAccessMode": {},
    "ForceLobLookup": {}
  },
  "IBMDb2Settings": {
    "DatabaseName": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "SetDataCaptureChanges": {},
    "CurrentLsn": {},
    "MaxKBytesPerRead": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "ResourceIdentifier": {},
  "DocDbSettings": {
    "Username": {},
    "Password": {},
    "ServerName": {},
    "Port": {},
    "DatabaseName": {},
    "NestingLevel": {},
    "ExtractDocId": {},
    "DocsToInvestigate": {},
    "KmsKeyId": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "RedisSettings": {
    "ServerName": {},
    "Port": {},
    "SslSecurityProtocol": {},
    "AuthType": {},
    "AuthUserName": {},
    "AuthPassword": {},
    "SslCaCertificateArn": {}
  },
  "GcpMySQLSettings": {
    "AfterConnectScript": {},
    "CleanSourceMetadataOnMismatch": {},
    "DatabaseName": {},
    "EventsPollInterval": {},
    "TargetDbType": {},
    "MaxFileSize": {},
    "ParallelLoadThreads": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "ServerTimezone": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointIdentifier|object|true|none|none|
|EndpointType|object|true|none|none|
|EngineName|object|true|none|none|
|Username|object|false|none|none|
|Password|object|false|none|none|
|ServerName|object|false|none|none|
|Port|object|false|none|none|
|DatabaseName|object|false|none|none|
|ExtraConnectionAttributes|object|false|none|none|
|KmsKeyId|object|false|none|none|
|Tags|object|false|none|none|
|CertificateArn|object|false|none|none|
|SslMode|object|false|none|none|
|ServiceAccessRoleArn|object|false|none|none|
|ExternalTableDefinition|object|false|none|none|
|DynamoDbSettings|object|false|none|none|
|S3Settings|object|false|none|none|
|DmsTransferSettings|object|false|none|none|
|MongoDbSettings|object|false|none|none|
|KinesisSettings|object|false|none|none|
|KafkaSettings|object|false|none|none|
|ElasticsearchSettings|object|false|none|none|
|NeptuneSettings|object|false|none|none|
|RedshiftSettings|[RedshiftSettings](#schemaredshiftsettings)|false|none|Provides information that defines an Amazon Redshift endpoint.|
|PostgreSQLSettings|object|false|none|none|
|MySQLSettings|object|false|none|none|
|OracleSettings|object|false|none|none|
|SybaseSettings|object|false|none|none|
|MicrosoftSQLServerSettings|object|false|none|none|
|IBMDb2Settings|object|false|none|none|
|ResourceIdentifier|object|false|none|none|
|DocDbSettings|[DocDbSettings](#schemadocdbsettings)|false|none|Provides information that defines a DocumentDB endpoint.|
|RedisSettings|object|false|none|none|
|GcpMySQLSettings|object|false|none|none|

<h2 id="tocS_KMSKeyNotAccessibleFault">KMSKeyNotAccessibleFault</h2>
<!-- backwards compatibility -->
<a id="schemakmskeynotaccessiblefault"></a>
<a id="schema_KMSKeyNotAccessibleFault"></a>
<a id="tocSkmskeynotaccessiblefault"></a>
<a id="tocskmskeynotaccessiblefault"></a>

```json
null
```

<h2 id="tocS_ResourceAlreadyExistsFault">ResourceAlreadyExistsFault</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsfault"></a>
<a id="schema_ResourceAlreadyExistsFault"></a>
<a id="tocSresourcealreadyexistsfault"></a>
<a id="tocsresourcealreadyexistsfault"></a>

```json
null
```

<h2 id="tocS_ResourceQuotaExceededFault">ResourceQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemaresourcequotaexceededfault"></a>
<a id="schema_ResourceQuotaExceededFault"></a>
<a id="tocSresourcequotaexceededfault"></a>
<a id="tocsresourcequotaexceededfault"></a>

```json
null
```

<h2 id="tocS_S3AccessDeniedFault">S3AccessDeniedFault</h2>
<!-- backwards compatibility -->
<a id="schemas3accessdeniedfault"></a>
<a id="schema_S3AccessDeniedFault"></a>
<a id="tocSs3accessdeniedfault"></a>
<a id="tocss3accessdeniedfault"></a>

```json
null
```

<h2 id="tocS_CreateEventSubscriptionResponse">CreateEventSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventsubscriptionresponse"></a>
<a id="schema_CreateEventSubscriptionResponse"></a>
<a id="tocScreateeventsubscriptionresponse"></a>
<a id="tocscreateeventsubscriptionresponse"></a>

```json
{
  "EventSubscription": {
    "CustomerAwsId": {},
    "CustSubscriptionId": {},
    "SnsTopicArn": {},
    "Status": {},
    "SubscriptionCreationTime": {},
    "SourceType": {},
    "SourceIdsList": {},
    "EventCategoriesList": {},
    "Enabled": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSubscription|object|false|none|none|

<h2 id="tocS_CreateEventSubscriptionMessage">CreateEventSubscriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventsubscriptionmessage"></a>
<a id="schema_CreateEventSubscriptionMessage"></a>
<a id="tocScreateeventsubscriptionmessage"></a>
<a id="tocscreateeventsubscriptionmessage"></a>

```json
{
  "SubscriptionName": {},
  "SnsTopicArn": {},
  "SourceType": {},
  "EventCategories": {},
  "SourceIds": {},
  "Enabled": {},
  "Tags": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionName|object|true|none|none|
|SnsTopicArn|object|true|none|none|
|SourceType|object|false|none|none|
|EventCategories|object|false|none|none|
|SourceIds|object|false|none|none|
|Enabled|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_SNSInvalidTopicFault">SNSInvalidTopicFault</h2>
<!-- backwards compatibility -->
<a id="schemasnsinvalidtopicfault"></a>
<a id="schema_SNSInvalidTopicFault"></a>
<a id="tocSsnsinvalidtopicfault"></a>
<a id="tocssnsinvalidtopicfault"></a>

```json
null
```

<h2 id="tocS_SNSNoAuthorizationFault">SNSNoAuthorizationFault</h2>
<!-- backwards compatibility -->
<a id="schemasnsnoauthorizationfault"></a>
<a id="schema_SNSNoAuthorizationFault"></a>
<a id="tocSsnsnoauthorizationfault"></a>
<a id="tocssnsnoauthorizationfault"></a>

```json
null
```

<h2 id="tocS_KMSAccessDeniedFault">KMSAccessDeniedFault</h2>
<!-- backwards compatibility -->
<a id="schemakmsaccessdeniedfault"></a>
<a id="schema_KMSAccessDeniedFault"></a>
<a id="tocSkmsaccessdeniedfault"></a>
<a id="tocskmsaccessdeniedfault"></a>

```json
null
```

<h2 id="tocS_KMSDisabledFault">KMSDisabledFault</h2>
<!-- backwards compatibility -->
<a id="schemakmsdisabledfault"></a>
<a id="schema_KMSDisabledFault"></a>
<a id="tocSkmsdisabledfault"></a>
<a id="tocskmsdisabledfault"></a>

```json
null
```

<h2 id="tocS_KMSInvalidStateFault">KMSInvalidStateFault</h2>
<!-- backwards compatibility -->
<a id="schemakmsinvalidstatefault"></a>
<a id="schema_KMSInvalidStateFault"></a>
<a id="tocSkmsinvalidstatefault"></a>
<a id="tocskmsinvalidstatefault"></a>

```json
null
```

<h2 id="tocS_KMSNotFoundFault">KMSNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemakmsnotfoundfault"></a>
<a id="schema_KMSNotFoundFault"></a>
<a id="tocSkmsnotfoundfault"></a>
<a id="tocskmsnotfoundfault"></a>

```json
null
```

<h2 id="tocS_KMSThrottlingFault">KMSThrottlingFault</h2>
<!-- backwards compatibility -->
<a id="schemakmsthrottlingfault"></a>
<a id="schema_KMSThrottlingFault"></a>
<a id="tocSkmsthrottlingfault"></a>
<a id="tocskmsthrottlingfault"></a>

```json
null
```

<h2 id="tocS_CreateFleetAdvisorCollectorResponse">CreateFleetAdvisorCollectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefleetadvisorcollectorresponse"></a>
<a id="schema_CreateFleetAdvisorCollectorResponse"></a>
<a id="tocScreatefleetadvisorcollectorresponse"></a>
<a id="tocscreatefleetadvisorcollectorresponse"></a>

```json
{
  "CollectorReferencedId": {},
  "CollectorName": {},
  "Description": {},
  "ServiceAccessRoleArn": {},
  "S3BucketName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectorReferencedId|object|false|none|none|
|CollectorName|object|false|none|none|
|Description|object|false|none|none|
|ServiceAccessRoleArn|object|false|none|none|
|S3BucketName|object|false|none|none|

<h2 id="tocS_CreateFleetAdvisorCollectorRequest">CreateFleetAdvisorCollectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefleetadvisorcollectorrequest"></a>
<a id="schema_CreateFleetAdvisorCollectorRequest"></a>
<a id="tocScreatefleetadvisorcollectorrequest"></a>
<a id="tocscreatefleetadvisorcollectorrequest"></a>

```json
{
  "CollectorName": {},
  "Description": {},
  "ServiceAccessRoleArn": {},
  "S3BucketName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectorName|object|true|none|none|
|Description|object|false|none|none|
|ServiceAccessRoleArn|object|true|none|none|
|S3BucketName|object|true|none|none|

<h2 id="tocS_S3ResourceNotFoundFault">S3ResourceNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemas3resourcenotfoundfault"></a>
<a id="schema_S3ResourceNotFoundFault"></a>
<a id="tocSs3resourcenotfoundfault"></a>
<a id="tocss3resourcenotfoundfault"></a>

```json
null
```

<h2 id="tocS_CreateReplicationInstanceResponse">CreateReplicationInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationinstanceresponse"></a>
<a id="schema_CreateReplicationInstanceResponse"></a>
<a id="tocScreatereplicationinstanceresponse"></a>
<a id="tocscreatereplicationinstanceresponse"></a>

```json
{
  "ReplicationInstance": {
    "AllocatedStorage": 5,
    "AutoMinorVersionUpgrade": true,
    "EngineVersion": "1.5.0",
    "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
    "PendingModifiedValues": {},
    "PreferredMaintenanceWindow": "sun:06:00-sun:14:00",
    "PubliclyAccessible": true,
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationInstanceClass": "dms.t2.micro",
    "ReplicationInstanceIdentifier": "test-rep-1",
    "ReplicationInstanceStatus": "creating",
    "ReplicationSubnetGroup": {
      "ReplicationSubnetGroupDescription": "default",
      "ReplicationSubnetGroupIdentifier": "default",
      "SubnetGroupStatus": "Complete",
      "Subnets": [
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1d"
          },
          "SubnetIdentifier": "subnet-f6dd91af",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1b"
          },
          "SubnetIdentifier": "subnet-3605751d",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1c"
          },
          "SubnetIdentifier": "subnet-c2daefb5",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1e"
          },
          "SubnetIdentifier": "subnet-85e90cb8",
          "SubnetStatus": "Active"
        }
      ],
      "VpcId": "vpc-6741a603"
    }
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstance|object|false|none|none|

<h2 id="tocS_CreateReplicationInstanceMessage">CreateReplicationInstanceMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationinstancemessage"></a>
<a id="schema_CreateReplicationInstanceMessage"></a>
<a id="tocScreatereplicationinstancemessage"></a>
<a id="tocscreatereplicationinstancemessage"></a>

```json
{
  "ReplicationInstanceIdentifier": {},
  "AllocatedStorage": {},
  "ReplicationInstanceClass": {},
  "VpcSecurityGroupIds": {},
  "AvailabilityZone": {},
  "ReplicationSubnetGroupIdentifier": {},
  "PreferredMaintenanceWindow": {},
  "MultiAZ": {},
  "EngineVersion": {},
  "AutoMinorVersionUpgrade": {},
  "Tags": {},
  "KmsKeyId": {},
  "PubliclyAccessible": {},
  "DnsNameServers": {},
  "ResourceIdentifier": {},
  "NetworkType": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstanceIdentifier|object|true|none|none|
|AllocatedStorage|object|false|none|none|
|ReplicationInstanceClass|object|true|none|none|
|VpcSecurityGroupIds|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|ReplicationSubnetGroupIdentifier|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|MultiAZ|object|false|none|none|
|EngineVersion|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|Tags|object|false|none|none|
|KmsKeyId|object|false|none|none|
|PubliclyAccessible|object|false|none|none|
|DnsNameServers|object|false|none|none|
|ResourceIdentifier|object|false|none|none|
|NetworkType|object|false|none|none|

<h2 id="tocS_InsufficientResourceCapacityFault">InsufficientResourceCapacityFault</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientresourcecapacityfault"></a>
<a id="schema_InsufficientResourceCapacityFault"></a>
<a id="tocSinsufficientresourcecapacityfault"></a>
<a id="tocsinsufficientresourcecapacityfault"></a>

```json
null
```

<h2 id="tocS_StorageQuotaExceededFault">StorageQuotaExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemastoragequotaexceededfault"></a>
<a id="schema_StorageQuotaExceededFault"></a>
<a id="tocSstoragequotaexceededfault"></a>
<a id="tocsstoragequotaexceededfault"></a>

```json
null
```

<h2 id="tocS_ReplicationSubnetGroupDoesNotCoverEnoughAZs">ReplicationSubnetGroupDoesNotCoverEnoughAZs</h2>
<!-- backwards compatibility -->
<a id="schemareplicationsubnetgroupdoesnotcoverenoughazs"></a>
<a id="schema_ReplicationSubnetGroupDoesNotCoverEnoughAZs"></a>
<a id="tocSreplicationsubnetgroupdoesnotcoverenoughazs"></a>
<a id="tocsreplicationsubnetgroupdoesnotcoverenoughazs"></a>

```json
null
```

<h2 id="tocS_InvalidSubnet">InvalidSubnet</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsubnet"></a>
<a id="schema_InvalidSubnet"></a>
<a id="tocSinvalidsubnet"></a>
<a id="tocsinvalidsubnet"></a>

```json
null
```

<h2 id="tocS_CreateReplicationSubnetGroupResponse">CreateReplicationSubnetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationsubnetgroupresponse"></a>
<a id="schema_CreateReplicationSubnetGroupResponse"></a>
<a id="tocScreatereplicationsubnetgroupresponse"></a>
<a id="tocscreatereplicationsubnetgroupresponse"></a>

```json
{
  "ReplicationSubnetGroup": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationSubnetGroup|object|false|none|none|

<h2 id="tocS_CreateReplicationSubnetGroupMessage">CreateReplicationSubnetGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationsubnetgroupmessage"></a>
<a id="schema_CreateReplicationSubnetGroupMessage"></a>
<a id="tocScreatereplicationsubnetgroupmessage"></a>
<a id="tocscreatereplicationsubnetgroupmessage"></a>

```json
{
  "ReplicationSubnetGroupIdentifier": {},
  "ReplicationSubnetGroupDescription": {},
  "SubnetIds": {},
  "Tags": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationSubnetGroupIdentifier|object|true|none|none|
|ReplicationSubnetGroupDescription|object|true|none|none|
|SubnetIds|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateReplicationTaskResponse">CreateReplicationTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationtaskresponse"></a>
<a id="schema_CreateReplicationTaskResponse"></a>
<a id="tocScreatereplicationtaskresponse"></a>
<a id="tocscreatereplicationtaskresponse"></a>

```json
{
  "ReplicationTask": {
    "MigrationType": "full-load",
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationTaskArn": "arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM",
    "ReplicationTaskCreationDate": "2016-12-14T18:25:43Z",
    "ReplicationTaskIdentifier": "task1",
    "ReplicationTaskSettings": "{\"TargetMetadata\":{\"TargetSchema\":\"\",\"SupportLobs\":true,\"FullLobMode\":true,\"LobChunkSize\":64,\"LimitedSizeLobMode\":false,\"LobMaxSize\":0},\"FullLoadSettings\":{\"FullLoadEnabled\":true,\"ApplyChangesEnabled\":false,\"TargetTablePrepMode\":\"DROP_AND_CREATE\",\"CreatePkAfterFullLoad\":false,\"StopTaskCachedChangesApplied\":false,\"StopTaskCachedChangesNotApplied\":false,\"ResumeEnabled\":false,\"ResumeMinTableSize\":100000,\"ResumeOnlyClusteredPKTables\":true,\"MaxFullLoadSubTasks\":8,\"TransactionConsistencyTimeout\":600,\"CommitRate\":10000},\"Logging\":{\"EnableLogging\":false}}",
    "SourceEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
    "Status": "creating",
    "TableMappings": "file://mappingfile.json",
    "TargetEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTask|object|false|none|none|

<h2 id="tocS_CreateReplicationTaskMessage">CreateReplicationTaskMessage</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplicationtaskmessage"></a>
<a id="schema_CreateReplicationTaskMessage"></a>
<a id="tocScreatereplicationtaskmessage"></a>
<a id="tocscreatereplicationtaskmessage"></a>

```json
{
  "ReplicationTaskIdentifier": {},
  "SourceEndpointArn": {},
  "TargetEndpointArn": {},
  "ReplicationInstanceArn": {},
  "MigrationType": {},
  "TableMappings": {},
  "ReplicationTaskSettings": {},
  "CdcStartTime": {},
  "CdcStartPosition": {},
  "CdcStopPosition": {},
  "Tags": {},
  "TaskData": {},
  "ResourceIdentifier": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskIdentifier|object|true|none|none|
|SourceEndpointArn|object|true|none|none|
|TargetEndpointArn|object|true|none|none|
|ReplicationInstanceArn|object|true|none|none|
|MigrationType|object|true|none|none|
|TableMappings|object|true|none|none|
|ReplicationTaskSettings|object|false|none|none|
|CdcStartTime|object|false|none|none|
|CdcStartPosition|object|false|none|none|
|CdcStopPosition|object|false|none|none|
|Tags|object|false|none|none|
|TaskData|object|false|none|none|
|ResourceIdentifier|object|false|none|none|

<h2 id="tocS_DeleteCertificateResponse">DeleteCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecertificateresponse"></a>
<a id="schema_DeleteCertificateResponse"></a>
<a id="tocSdeletecertificateresponse"></a>
<a id="tocsdeletecertificateresponse"></a>

```json
{
  "Certificate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificate|object|false|none|none|

<h2 id="tocS_DeleteCertificateMessage">DeleteCertificateMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletecertificatemessage"></a>
<a id="schema_DeleteCertificateMessage"></a>
<a id="tocSdeletecertificatemessage"></a>
<a id="tocsdeletecertificatemessage"></a>

```json
{
  "CertificateArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|true|none|none|

<h2 id="tocS_DeleteConnectionResponse">DeleteConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectionresponse"></a>
<a id="schema_DeleteConnectionResponse"></a>
<a id="tocSdeleteconnectionresponse"></a>
<a id="tocsdeleteconnectionresponse"></a>

```json
{
  "Connection": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connection|object|false|none|none|

<h2 id="tocS_DeleteConnectionMessage">DeleteConnectionMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectionmessage"></a>
<a id="schema_DeleteConnectionMessage"></a>
<a id="tocSdeleteconnectionmessage"></a>
<a id="tocsdeleteconnectionmessage"></a>

```json
{
  "EndpointArn": {},
  "ReplicationInstanceArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|true|none|none|
|ReplicationInstanceArn|object|true|none|none|

<h2 id="tocS_DeleteEndpointResponse">DeleteEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteendpointresponse"></a>
<a id="schema_DeleteEndpointResponse"></a>
<a id="tocSdeleteendpointresponse"></a>
<a id="tocsdeleteendpointresponse"></a>

```json
{
  "Endpoint": {
    "EndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:RAAR3R22XSH46S3PWLC3NJAWKM",
    "EndpointIdentifier": "test-endpoint-1",
    "EndpointType": "source",
    "EngineName": "mysql",
    "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
    "Port": 3306,
    "ServerName": "mydb.cx1llnox7iyx.us-west-2.rds.amazonaws.com",
    "Status": "active",
    "Username": "username"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoint|object|false|none|none|

<h2 id="tocS_DeleteEndpointMessage">DeleteEndpointMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeleteendpointmessage"></a>
<a id="schema_DeleteEndpointMessage"></a>
<a id="tocSdeleteendpointmessage"></a>
<a id="tocsdeleteendpointmessage"></a>

```json
{
  "EndpointArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|true|none|none|

<h2 id="tocS_DeleteEventSubscriptionResponse">DeleteEventSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventsubscriptionresponse"></a>
<a id="schema_DeleteEventSubscriptionResponse"></a>
<a id="tocSdeleteeventsubscriptionresponse"></a>
<a id="tocsdeleteeventsubscriptionresponse"></a>

```json
{
  "EventSubscription": {
    "CustomerAwsId": {},
    "CustSubscriptionId": {},
    "SnsTopicArn": {},
    "Status": {},
    "SubscriptionCreationTime": {},
    "SourceType": {},
    "SourceIdsList": {},
    "EventCategoriesList": {},
    "Enabled": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSubscription|object|false|none|none|

<h2 id="tocS_DeleteEventSubscriptionMessage">DeleteEventSubscriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventsubscriptionmessage"></a>
<a id="schema_DeleteEventSubscriptionMessage"></a>
<a id="tocSdeleteeventsubscriptionmessage"></a>
<a id="tocsdeleteeventsubscriptionmessage"></a>

```json
{
  "SubscriptionName": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionName|object|true|none|none|

<h2 id="tocS_DeleteCollectorRequest">DeleteCollectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecollectorrequest"></a>
<a id="schema_DeleteCollectorRequest"></a>
<a id="tocSdeletecollectorrequest"></a>
<a id="tocsdeletecollectorrequest"></a>

```json
{
  "CollectorReferencedId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectorReferencedId|object|true|none|none|

<h2 id="tocS_CollectorNotFoundFault">CollectorNotFoundFault</h2>
<!-- backwards compatibility -->
<a id="schemacollectornotfoundfault"></a>
<a id="schema_CollectorNotFoundFault"></a>
<a id="tocScollectornotfoundfault"></a>
<a id="tocscollectornotfoundfault"></a>

```json
null
```

<h2 id="tocS_DeleteFleetAdvisorDatabasesResponse">DeleteFleetAdvisorDatabasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefleetadvisordatabasesresponse"></a>
<a id="schema_DeleteFleetAdvisorDatabasesResponse"></a>
<a id="tocSdeletefleetadvisordatabasesresponse"></a>
<a id="tocsdeletefleetadvisordatabasesresponse"></a>

```json
{
  "DatabaseIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseIds|object|false|none|none|

<h2 id="tocS_DeleteFleetAdvisorDatabasesRequest">DeleteFleetAdvisorDatabasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefleetadvisordatabasesrequest"></a>
<a id="schema_DeleteFleetAdvisorDatabasesRequest"></a>
<a id="tocSdeletefleetadvisordatabasesrequest"></a>
<a id="tocsdeletefleetadvisordatabasesrequest"></a>

```json
{
  "DatabaseIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseIds|object|true|none|none|

<h2 id="tocS_InvalidOperationFault">InvalidOperationFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoperationfault"></a>
<a id="schema_InvalidOperationFault"></a>
<a id="tocSinvalidoperationfault"></a>
<a id="tocsinvalidoperationfault"></a>

```json
null
```

<h2 id="tocS_DeleteReplicationInstanceResponse">DeleteReplicationInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationinstanceresponse"></a>
<a id="schema_DeleteReplicationInstanceResponse"></a>
<a id="tocSdeletereplicationinstanceresponse"></a>
<a id="tocsdeletereplicationinstanceresponse"></a>

```json
{
  "ReplicationInstance": {
    "AllocatedStorage": 5,
    "AutoMinorVersionUpgrade": true,
    "EngineVersion": "1.5.0",
    "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
    "PendingModifiedValues": {},
    "PreferredMaintenanceWindow": "sun:06:00-sun:14:00",
    "PubliclyAccessible": true,
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationInstanceClass": "dms.t2.micro",
    "ReplicationInstanceIdentifier": "test-rep-1",
    "ReplicationInstanceStatus": "creating",
    "ReplicationSubnetGroup": {
      "ReplicationSubnetGroupDescription": "default",
      "ReplicationSubnetGroupIdentifier": "default",
      "SubnetGroupStatus": "Complete",
      "Subnets": [
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1d"
          },
          "SubnetIdentifier": "subnet-f6dd91af",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1b"
          },
          "SubnetIdentifier": "subnet-3605751d",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1c"
          },
          "SubnetIdentifier": "subnet-c2daefb5",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1e"
          },
          "SubnetIdentifier": "subnet-85e90cb8",
          "SubnetStatus": "Active"
        }
      ],
      "VpcId": "vpc-6741a603"
    }
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstance|object|false|none|none|

<h2 id="tocS_DeleteReplicationInstanceMessage">DeleteReplicationInstanceMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationinstancemessage"></a>
<a id="schema_DeleteReplicationInstanceMessage"></a>
<a id="tocSdeletereplicationinstancemessage"></a>
<a id="tocsdeletereplicationinstancemessage"></a>

```json
{
  "ReplicationInstanceArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstanceArn|object|true|none|none|

<h2 id="tocS_DeleteReplicationSubnetGroupResponse">DeleteReplicationSubnetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationsubnetgroupresponse"></a>
<a id="schema_DeleteReplicationSubnetGroupResponse"></a>
<a id="tocSdeletereplicationsubnetgroupresponse"></a>
<a id="tocsdeletereplicationsubnetgroupresponse"></a>

```json
{}
```

<p/>

<h2 id="tocS_DeleteReplicationSubnetGroupMessage">DeleteReplicationSubnetGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationsubnetgroupmessage"></a>
<a id="schema_DeleteReplicationSubnetGroupMessage"></a>
<a id="tocSdeletereplicationsubnetgroupmessage"></a>
<a id="tocsdeletereplicationsubnetgroupmessage"></a>

```json
{
  "ReplicationSubnetGroupIdentifier": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationSubnetGroupIdentifier|object|true|none|none|

<h2 id="tocS_DeleteReplicationTaskResponse">DeleteReplicationTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationtaskresponse"></a>
<a id="schema_DeleteReplicationTaskResponse"></a>
<a id="tocSdeletereplicationtaskresponse"></a>
<a id="tocsdeletereplicationtaskresponse"></a>

```json
{
  "ReplicationTask": {
    "MigrationType": "full-load",
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationTaskArn": "arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM",
    "ReplicationTaskCreationDate": "2016-12-14T18:25:43Z",
    "ReplicationTaskIdentifier": "task1",
    "ReplicationTaskSettings": "{\"TargetMetadata\":{\"TargetSchema\":\"\",\"SupportLobs\":true,\"FullLobMode\":true,\"LobChunkSize\":64,\"LimitedSizeLobMode\":false,\"LobMaxSize\":0},\"FullLoadSettings\":{\"FullLoadEnabled\":true,\"ApplyChangesEnabled\":false,\"TargetTablePrepMode\":\"DROP_AND_CREATE\",\"CreatePkAfterFullLoad\":false,\"StopTaskCachedChangesApplied\":false,\"StopTaskCachedChangesNotApplied\":false,\"ResumeEnabled\":false,\"ResumeMinTableSize\":100000,\"ResumeOnlyClusteredPKTables\":true,\"MaxFullLoadSubTasks\":8,\"TransactionConsistencyTimeout\":600,\"CommitRate\":10000},\"Logging\":{\"EnableLogging\":false}}",
    "SourceEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
    "Status": "creating",
    "TableMappings": "file://mappingfile.json",
    "TargetEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTask|object|false|none|none|

<h2 id="tocS_DeleteReplicationTaskMessage">DeleteReplicationTaskMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationtaskmessage"></a>
<a id="schema_DeleteReplicationTaskMessage"></a>
<a id="tocSdeletereplicationtaskmessage"></a>
<a id="tocsdeletereplicationtaskmessage"></a>

```json
{
  "ReplicationTaskArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskArn|object|true|none|none|

<h2 id="tocS_DeleteReplicationTaskAssessmentRunResponse">DeleteReplicationTaskAssessmentRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationtaskassessmentrunresponse"></a>
<a id="schema_DeleteReplicationTaskAssessmentRunResponse"></a>
<a id="tocSdeletereplicationtaskassessmentrunresponse"></a>
<a id="tocsdeletereplicationtaskassessmentrunresponse"></a>

```json
{
  "ReplicationTaskAssessmentRun": {
    "ReplicationTaskAssessmentRunArn": {},
    "ReplicationTaskArn": {},
    "Status": {},
    "ReplicationTaskAssessmentRunCreationDate": {},
    "AssessmentProgress": {
      "IndividualAssessmentCount": {},
      "IndividualAssessmentCompletedCount": {}
    },
    "LastFailureMessage": {},
    "ServiceAccessRoleArn": {},
    "ResultLocationBucket": {},
    "ResultLocationFolder": {},
    "ResultEncryptionMode": {},
    "ResultKmsKeyArn": {},
    "AssessmentRunName": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskAssessmentRun|object|false|none|none|

<h2 id="tocS_DeleteReplicationTaskAssessmentRunMessage">DeleteReplicationTaskAssessmentRunMessage</h2>
<!-- backwards compatibility -->
<a id="schemadeletereplicationtaskassessmentrunmessage"></a>
<a id="schema_DeleteReplicationTaskAssessmentRunMessage"></a>
<a id="tocSdeletereplicationtaskassessmentrunmessage"></a>
<a id="tocsdeletereplicationtaskassessmentrunmessage"></a>

```json
{
  "ReplicationTaskAssessmentRunArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskAssessmentRunArn|object|true|none|none|

<h2 id="tocS_DescribeAccountAttributesResponse">DescribeAccountAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountattributesresponse"></a>
<a id="schema_DescribeAccountAttributesResponse"></a>
<a id="tocSdescribeaccountattributesresponse"></a>
<a id="tocsdescribeaccountattributesresponse"></a>

```json
{
  "AccountQuotas": [
    {
      "AccountQuotaName": "ReplicationInstances",
      "Max": 20,
      "Used": 0
    },
    {
      "AccountQuotaName": "AllocatedStorage",
      "Max": 20,
      "Used": 0
    },
    {
      "AccountQuotaName": "Endpoints",
      "Max": 20,
      "Used": 0
    }
  ]
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountQuotas|object|false|none|none|
|UniqueAccountIdentifier|object|false|none|none|

<h2 id="tocS_DescribeAccountAttributesMessage">DescribeAccountAttributesMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaccountattributesmessage"></a>
<a id="schema_DescribeAccountAttributesMessage"></a>
<a id="tocSdescribeaccountattributesmessage"></a>
<a id="tocsdescribeaccountattributesmessage"></a>

```json
{}
```

<p/>

<h2 id="tocS_DescribeApplicableIndividualAssessmentsResponse">DescribeApplicableIndividualAssessmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicableindividualassessmentsresponse"></a>
<a id="schema_DescribeApplicableIndividualAssessmentsResponse"></a>
<a id="tocSdescribeapplicableindividualassessmentsresponse"></a>
<a id="tocsdescribeapplicableindividualassessmentsresponse"></a>

```json
{
  "IndividualAssessmentNames": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndividualAssessmentNames|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeApplicableIndividualAssessmentsMessage">DescribeApplicableIndividualAssessmentsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicableindividualassessmentsmessage"></a>
<a id="schema_DescribeApplicableIndividualAssessmentsMessage"></a>
<a id="tocSdescribeapplicableindividualassessmentsmessage"></a>
<a id="tocsdescribeapplicableindividualassessmentsmessage"></a>

```json
{
  "ReplicationTaskArn": {},
  "ReplicationInstanceArn": {},
  "SourceEngineName": {},
  "TargetEngineName": {},
  "MigrationType": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskArn|object|false|none|none|
|ReplicationInstanceArn|object|false|none|none|
|SourceEngineName|object|false|none|none|
|TargetEngineName|object|false|none|none|
|MigrationType|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeCertificatesResponse">DescribeCertificatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecertificatesresponse"></a>
<a id="schema_DescribeCertificatesResponse"></a>
<a id="tocSdescribecertificatesresponse"></a>
<a id="tocsdescribecertificatesresponse"></a>

```json
{
  "Certificates": [],
  "Marker": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|Certificates|object|false|none|none|

<h2 id="tocS_DescribeCertificatesMessage">DescribeCertificatesMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribecertificatesmessage"></a>
<a id="schema_DescribeCertificatesMessage"></a>
<a id="tocSdescribecertificatesmessage"></a>
<a id="tocsdescribecertificatesmessage"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeConnectionsResponse">DescribeConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectionsresponse"></a>
<a id="schema_DescribeConnectionsResponse"></a>
<a id="tocSdescribeconnectionsresponse"></a>
<a id="tocsdescribeconnectionsresponse"></a>

```json
{
  "Connections": [
    {
      "EndpointArn": "arn:aws:dms:us-east-arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
      "EndpointIdentifier": "testsrc1",
      "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
      "ReplicationInstanceIdentifier": "test",
      "Status": "successful"
    }
  ],
  "Marker": ""
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|Connections|object|false|none|none|

<h2 id="tocS_DescribeConnectionsMessage">DescribeConnectionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectionsmessage"></a>
<a id="schema_DescribeConnectionsMessage"></a>
<a id="tocSdescribeconnectionsmessage"></a>
<a id="tocsdescribeconnectionsmessage"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeEndpointSettingsResponse">DescribeEndpointSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointsettingsresponse"></a>
<a id="schema_DescribeEndpointSettingsResponse"></a>
<a id="tocSdescribeendpointsettingsresponse"></a>
<a id="tocsdescribeendpointsettingsresponse"></a>

```json
{
  "Marker": {},
  "EndpointSettings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|EndpointSettings|object|false|none|none|

<h2 id="tocS_DescribeEndpointSettingsMessage">DescribeEndpointSettingsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointsettingsmessage"></a>
<a id="schema_DescribeEndpointSettingsMessage"></a>
<a id="tocSdescribeendpointsettingsmessage"></a>
<a id="tocsdescribeendpointsettingsmessage"></a>

```json
{
  "EngineName": {},
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngineName|object|true|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeEndpointTypesResponse">DescribeEndpointTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointtypesresponse"></a>
<a id="schema_DescribeEndpointTypesResponse"></a>
<a id="tocSdescribeendpointtypesresponse"></a>
<a id="tocsdescribeendpointtypesresponse"></a>

```json
{
  "Marker": "",
  "SupportedEndpointTypes": []
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|SupportedEndpointTypes|object|false|none|none|

<h2 id="tocS_DescribeEndpointTypesMessage">DescribeEndpointTypesMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointtypesmessage"></a>
<a id="schema_DescribeEndpointTypesMessage"></a>
<a id="tocSdescribeendpointtypesmessage"></a>
<a id="tocsdescribeendpointtypesmessage"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeEndpointsResponse">DescribeEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointsresponse"></a>
<a id="schema_DescribeEndpointsResponse"></a>
<a id="tocSdescribeendpointsresponse"></a>
<a id="tocsdescribeendpointsresponse"></a>

```json
{
  "Endpoints": [],
  "Marker": ""
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|Endpoints|object|false|none|none|

<h2 id="tocS_DescribeEndpointsMessage">DescribeEndpointsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeendpointsmessage"></a>
<a id="schema_DescribeEndpointsMessage"></a>
<a id="tocSdescribeendpointsmessage"></a>
<a id="tocsdescribeendpointsmessage"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeEventCategoriesResponse">DescribeEventCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventcategoriesresponse"></a>
<a id="schema_DescribeEventCategoriesResponse"></a>
<a id="tocSdescribeeventcategoriesresponse"></a>
<a id="tocsdescribeeventcategoriesresponse"></a>

```json
{
  "EventCategoryGroupList": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventCategoryGroupList|object|false|none|none|

<h2 id="tocS_DescribeEventCategoriesMessage">DescribeEventCategoriesMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventcategoriesmessage"></a>
<a id="schema_DescribeEventCategoriesMessage"></a>
<a id="tocSdescribeeventcategoriesmessage"></a>
<a id="tocsdescribeeventcategoriesmessage"></a>

```json
{
  "SourceType": {},
  "Filters": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceType|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_DescribeEventSubscriptionsResponse">DescribeEventSubscriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsubscriptionsresponse"></a>
<a id="schema_DescribeEventSubscriptionsResponse"></a>
<a id="tocSdescribeeventsubscriptionsresponse"></a>
<a id="tocsdescribeeventsubscriptionsresponse"></a>

```json
{
  "Marker": {},
  "EventSubscriptionsList": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|EventSubscriptionsList|object|false|none|none|

<h2 id="tocS_DescribeEventSubscriptionsMessage">DescribeEventSubscriptionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsubscriptionsmessage"></a>
<a id="schema_DescribeEventSubscriptionsMessage"></a>
<a id="tocSdescribeeventsubscriptionsmessage"></a>
<a id="tocsdescribeeventsubscriptionsmessage"></a>

```json
{
  "SubscriptionName": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionName|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeEventsResponse">DescribeEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsresponse"></a>
<a id="schema_DescribeEventsResponse"></a>
<a id="tocSdescribeeventsresponse"></a>
<a id="tocsdescribeeventsresponse"></a>

```json
{
  "Marker": {},
  "Events": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|Events|object|false|none|none|

<h2 id="tocS_DescribeEventsMessage">DescribeEventsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsmessage"></a>
<a id="schema_DescribeEventsMessage"></a>
<a id="tocSdescribeeventsmessage"></a>
<a id="tocsdescribeeventsmessage"></a>

```json
{
  "SourceIdentifier": {},
  "SourceType": {},
  "StartTime": {},
  "EndTime": {},
  "Duration": {},
  "EventCategories": {},
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceIdentifier|object|false|none|none|
|SourceType|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Duration|object|false|none|none|
|EventCategories|object|false|none|none|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeFleetAdvisorCollectorsResponse">DescribeFleetAdvisorCollectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetadvisorcollectorsresponse"></a>
<a id="schema_DescribeFleetAdvisorCollectorsResponse"></a>
<a id="tocSdescribefleetadvisorcollectorsresponse"></a>
<a id="tocsdescribefleetadvisorcollectorsresponse"></a>

```json
{
  "Collectors": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Collectors|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetAdvisorCollectorsRequest">DescribeFleetAdvisorCollectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetadvisorcollectorsrequest"></a>
<a id="schema_DescribeFleetAdvisorCollectorsRequest"></a>
<a id="tocSdescribefleetadvisorcollectorsrequest"></a>
<a id="tocsdescribefleetadvisorcollectorsrequest"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetAdvisorDatabasesResponse">DescribeFleetAdvisorDatabasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetadvisordatabasesresponse"></a>
<a id="schema_DescribeFleetAdvisorDatabasesResponse"></a>
<a id="tocSdescribefleetadvisordatabasesresponse"></a>
<a id="tocsdescribefleetadvisordatabasesresponse"></a>

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

<h2 id="tocS_DescribeFleetAdvisorDatabasesRequest">DescribeFleetAdvisorDatabasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetadvisordatabasesrequest"></a>
<a id="schema_DescribeFleetAdvisorDatabasesRequest"></a>
<a id="tocSdescribefleetadvisordatabasesrequest"></a>
<a id="tocsdescribefleetadvisordatabasesrequest"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetAdvisorLsaAnalysisResponse">DescribeFleetAdvisorLsaAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetadvisorlsaanalysisresponse"></a>
<a id="schema_DescribeFleetAdvisorLsaAnalysisResponse"></a>
<a id="tocSdescribefleetadvisorlsaanalysisresponse"></a>
<a id="tocsdescribefleetadvisorlsaanalysisresponse"></a>

```json
{
  "Analysis": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Analysis|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetAdvisorLsaAnalysisRequest">DescribeFleetAdvisorLsaAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetadvisorlsaanalysisrequest"></a>
<a id="schema_DescribeFleetAdvisorLsaAnalysisRequest"></a>
<a id="tocSdescribefleetadvisorlsaanalysisrequest"></a>
<a id="tocsdescribefleetadvisorlsaanalysisrequest"></a>

```json
{
  "MaxRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetAdvisorSchemaObjectSummaryResponse">DescribeFleetAdvisorSchemaObjectSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetadvisorschemaobjectsummaryresponse"></a>
<a id="schema_DescribeFleetAdvisorSchemaObjectSummaryResponse"></a>
<a id="tocSdescribefleetadvisorschemaobjectsummaryresponse"></a>
<a id="tocsdescribefleetadvisorschemaobjectsummaryresponse"></a>

```json
{
  "FleetAdvisorSchemaObjects": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetAdvisorSchemaObjects|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetAdvisorSchemaObjectSummaryRequest">DescribeFleetAdvisorSchemaObjectSummaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetadvisorschemaobjectsummaryrequest"></a>
<a id="schema_DescribeFleetAdvisorSchemaObjectSummaryRequest"></a>
<a id="tocSdescribefleetadvisorschemaobjectsummaryrequest"></a>
<a id="tocsdescribefleetadvisorschemaobjectsummaryrequest"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetAdvisorSchemasResponse">DescribeFleetAdvisorSchemasResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetadvisorschemasresponse"></a>
<a id="schema_DescribeFleetAdvisorSchemasResponse"></a>
<a id="tocSdescribefleetadvisorschemasresponse"></a>
<a id="tocsdescribefleetadvisorschemasresponse"></a>

```json
{
  "FleetAdvisorSchemas": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetAdvisorSchemas|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetAdvisorSchemasRequest">DescribeFleetAdvisorSchemasRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetadvisorschemasrequest"></a>
<a id="schema_DescribeFleetAdvisorSchemasRequest"></a>
<a id="tocSdescribefleetadvisorschemasrequest"></a>
<a id="tocsdescribefleetadvisorschemasrequest"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeOrderableReplicationInstancesResponse">DescribeOrderableReplicationInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorderablereplicationinstancesresponse"></a>
<a id="schema_DescribeOrderableReplicationInstancesResponse"></a>
<a id="tocSdescribeorderablereplicationinstancesresponse"></a>
<a id="tocsdescribeorderablereplicationinstancesresponse"></a>

```json
{
  "Marker": "",
  "OrderableReplicationInstances": []
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrderableReplicationInstances|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeOrderableReplicationInstancesMessage">DescribeOrderableReplicationInstancesMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeorderablereplicationinstancesmessage"></a>
<a id="schema_DescribeOrderableReplicationInstancesMessage"></a>
<a id="tocSdescribeorderablereplicationinstancesmessage"></a>
<a id="tocsdescribeorderablereplicationinstancesmessage"></a>

```json
{
  "MaxRecords": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribePendingMaintenanceActionsResponse">DescribePendingMaintenanceActionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribependingmaintenanceactionsresponse"></a>
<a id="schema_DescribePendingMaintenanceActionsResponse"></a>
<a id="tocSdescribependingmaintenanceactionsresponse"></a>
<a id="tocsdescribependingmaintenanceactionsresponse"></a>

```json
{
  "PendingMaintenanceActions": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PendingMaintenanceActions|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribePendingMaintenanceActionsMessage">DescribePendingMaintenanceActionsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribependingmaintenanceactionsmessage"></a>
<a id="schema_DescribePendingMaintenanceActionsMessage"></a>
<a id="tocSdescribependingmaintenanceactionsmessage"></a>
<a id="tocsdescribependingmaintenanceactionsmessage"></a>

```json
{
  "ReplicationInstanceArn": {},
  "Filters": {},
  "Marker": {},
  "MaxRecords": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstanceArn|object|false|none|none|
|Filters|object|false|none|none|
|Marker|object|false|none|none|
|MaxRecords|object|false|none|none|

<h2 id="tocS_DescribeRecommendationLimitationsResponse">DescribeRecommendationLimitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecommendationlimitationsresponse"></a>
<a id="schema_DescribeRecommendationLimitationsResponse"></a>
<a id="tocSdescriberecommendationlimitationsresponse"></a>
<a id="tocsdescriberecommendationlimitationsresponse"></a>

```json
{
  "NextToken": {},
  "Limitations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Limitations|object|false|none|none|

<h2 id="tocS_DescribeRecommendationLimitationsRequest">DescribeRecommendationLimitationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecommendationlimitationsrequest"></a>
<a id="schema_DescribeRecommendationLimitationsRequest"></a>
<a id="tocSdescriberecommendationlimitationsrequest"></a>
<a id="tocsdescriberecommendationlimitationsrequest"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeRecommendationsResponse">DescribeRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecommendationsresponse"></a>
<a id="schema_DescribeRecommendationsResponse"></a>
<a id="tocSdescriberecommendationsresponse"></a>
<a id="tocsdescriberecommendationsresponse"></a>

```json
{
  "NextToken": {},
  "Recommendations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Recommendations|object|false|none|none|

<h2 id="tocS_DescribeRecommendationsRequest">DescribeRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecommendationsrequest"></a>
<a id="schema_DescribeRecommendationsRequest"></a>
<a id="tocSdescriberecommendationsrequest"></a>
<a id="tocsdescriberecommendationsrequest"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeRefreshSchemasStatusResponse">DescribeRefreshSchemasStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberefreshschemasstatusresponse"></a>
<a id="schema_DescribeRefreshSchemasStatusResponse"></a>
<a id="tocSdescriberefreshschemasstatusresponse"></a>
<a id="tocsdescriberefreshschemasstatusresponse"></a>

```json
{
  "RefreshSchemasStatus": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RefreshSchemasStatus|object|false|none|none|

<h2 id="tocS_DescribeRefreshSchemasStatusMessage">DescribeRefreshSchemasStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescriberefreshschemasstatusmessage"></a>
<a id="schema_DescribeRefreshSchemasStatusMessage"></a>
<a id="tocSdescriberefreshschemasstatusmessage"></a>
<a id="tocsdescriberefreshschemasstatusmessage"></a>

```json
{
  "EndpointArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|true|none|none|

<h2 id="tocS_DescribeReplicationInstanceTaskLogsResponse">DescribeReplicationInstanceTaskLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationinstancetasklogsresponse"></a>
<a id="schema_DescribeReplicationInstanceTaskLogsResponse"></a>
<a id="tocSdescribereplicationinstancetasklogsresponse"></a>
<a id="tocsdescribereplicationinstancetasklogsresponse"></a>

```json
{
  "ReplicationInstanceArn": {},
  "ReplicationInstanceTaskLogs": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstanceArn|object|false|none|none|
|ReplicationInstanceTaskLogs|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeReplicationInstanceTaskLogsMessage">DescribeReplicationInstanceTaskLogsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationinstancetasklogsmessage"></a>
<a id="schema_DescribeReplicationInstanceTaskLogsMessage"></a>
<a id="tocSdescribereplicationinstancetasklogsmessage"></a>
<a id="tocsdescribereplicationinstancetasklogsmessage"></a>

```json
{
  "ReplicationInstanceArn": {},
  "MaxRecords": {},
  "Marker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstanceArn|object|true|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeReplicationInstancesResponse">DescribeReplicationInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationinstancesresponse"></a>
<a id="schema_DescribeReplicationInstancesResponse"></a>
<a id="tocSdescribereplicationinstancesresponse"></a>
<a id="tocsdescribereplicationinstancesresponse"></a>

```json
{
  "Marker": "",
  "ReplicationInstances": []
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|ReplicationInstances|object|false|none|none|

<h2 id="tocS_DescribeReplicationInstancesMessage">DescribeReplicationInstancesMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationinstancesmessage"></a>
<a id="schema_DescribeReplicationInstancesMessage"></a>
<a id="tocSdescribereplicationinstancesmessage"></a>
<a id="tocsdescribereplicationinstancesmessage"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeReplicationSubnetGroupsResponse">DescribeReplicationSubnetGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationsubnetgroupsresponse"></a>
<a id="schema_DescribeReplicationSubnetGroupsResponse"></a>
<a id="tocSdescribereplicationsubnetgroupsresponse"></a>
<a id="tocsdescribereplicationsubnetgroupsresponse"></a>

```json
{
  "Marker": "",
  "ReplicationSubnetGroups": []
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|ReplicationSubnetGroups|object|false|none|none|

<h2 id="tocS_DescribeReplicationSubnetGroupsMessage">DescribeReplicationSubnetGroupsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationsubnetgroupsmessage"></a>
<a id="schema_DescribeReplicationSubnetGroupsMessage"></a>
<a id="tocSdescribereplicationsubnetgroupsmessage"></a>
<a id="tocsdescribereplicationsubnetgroupsmessage"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeReplicationTaskAssessmentResultsResponse">DescribeReplicationTaskAssessmentResultsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationtaskassessmentresultsresponse"></a>
<a id="schema_DescribeReplicationTaskAssessmentResultsResponse"></a>
<a id="tocSdescribereplicationtaskassessmentresultsresponse"></a>
<a id="tocsdescribereplicationtaskassessmentresultsresponse"></a>

```json
{
  "Marker": {},
  "BucketName": {},
  "ReplicationTaskAssessmentResults": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|BucketName|object|false|none|none|
|ReplicationTaskAssessmentResults|object|false|none|none|

<h2 id="tocS_DescribeReplicationTaskAssessmentResultsMessage">DescribeReplicationTaskAssessmentResultsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationtaskassessmentresultsmessage"></a>
<a id="schema_DescribeReplicationTaskAssessmentResultsMessage"></a>
<a id="tocSdescribereplicationtaskassessmentresultsmessage"></a>
<a id="tocsdescribereplicationtaskassessmentresultsmessage"></a>

```json
{
  "ReplicationTaskArn": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskArn|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeReplicationTaskAssessmentRunsResponse">DescribeReplicationTaskAssessmentRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationtaskassessmentrunsresponse"></a>
<a id="schema_DescribeReplicationTaskAssessmentRunsResponse"></a>
<a id="tocSdescribereplicationtaskassessmentrunsresponse"></a>
<a id="tocsdescribereplicationtaskassessmentrunsresponse"></a>

```json
{
  "Marker": {},
  "ReplicationTaskAssessmentRuns": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|ReplicationTaskAssessmentRuns|object|false|none|none|

<h2 id="tocS_DescribeReplicationTaskAssessmentRunsMessage">DescribeReplicationTaskAssessmentRunsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationtaskassessmentrunsmessage"></a>
<a id="schema_DescribeReplicationTaskAssessmentRunsMessage"></a>
<a id="tocSdescribereplicationtaskassessmentrunsmessage"></a>
<a id="tocsdescribereplicationtaskassessmentrunsmessage"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeReplicationTaskIndividualAssessmentsResponse">DescribeReplicationTaskIndividualAssessmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationtaskindividualassessmentsresponse"></a>
<a id="schema_DescribeReplicationTaskIndividualAssessmentsResponse"></a>
<a id="tocSdescribereplicationtaskindividualassessmentsresponse"></a>
<a id="tocsdescribereplicationtaskindividualassessmentsresponse"></a>

```json
{
  "Marker": {},
  "ReplicationTaskIndividualAssessments": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|ReplicationTaskIndividualAssessments|object|false|none|none|

<h2 id="tocS_DescribeReplicationTaskIndividualAssessmentsMessage">DescribeReplicationTaskIndividualAssessmentsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationtaskindividualassessmentsmessage"></a>
<a id="schema_DescribeReplicationTaskIndividualAssessmentsMessage"></a>
<a id="tocSdescribereplicationtaskindividualassessmentsmessage"></a>
<a id="tocsdescribereplicationtaskindividualassessmentsmessage"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeReplicationTasksResponse">DescribeReplicationTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationtasksresponse"></a>
<a id="schema_DescribeReplicationTasksResponse"></a>
<a id="tocSdescribereplicationtasksresponse"></a>
<a id="tocsdescribereplicationtasksresponse"></a>

```json
{
  "Marker": "",
  "ReplicationTasks": []
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|ReplicationTasks|object|false|none|none|

<h2 id="tocS_DescribeReplicationTasksMessage">DescribeReplicationTasksMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribereplicationtasksmessage"></a>
<a id="schema_DescribeReplicationTasksMessage"></a>
<a id="tocSdescribereplicationtasksmessage"></a>
<a id="tocsdescribereplicationtasksmessage"></a>

```json
{
  "Filters": {},
  "MaxRecords": {},
  "Marker": {},
  "WithoutSettings": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|
|WithoutSettings|object|false|none|none|

<h2 id="tocS_DescribeSchemasResponse">DescribeSchemasResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeschemasresponse"></a>
<a id="schema_DescribeSchemasResponse"></a>
<a id="tocSdescribeschemasresponse"></a>
<a id="tocsdescribeschemasresponse"></a>

```json
{
  "Marker": "",
  "Schemas": []
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|Schemas|object|false|none|none|

<h2 id="tocS_DescribeSchemasMessage">DescribeSchemasMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribeschemasmessage"></a>
<a id="schema_DescribeSchemasMessage"></a>
<a id="tocSdescribeschemasmessage"></a>
<a id="tocsdescribeschemasmessage"></a>

```json
{
  "EndpointArn": {},
  "MaxRecords": {},
  "Marker": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|true|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeTableStatisticsResponse">DescribeTableStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetablestatisticsresponse"></a>
<a id="schema_DescribeTableStatisticsResponse"></a>
<a id="tocSdescribetablestatisticsresponse"></a>
<a id="tocsdescribetablestatisticsresponse"></a>

```json
{
  "Marker": "",
  "ReplicationTaskArn": "",
  "TableStatistics": []
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskArn|object|false|none|none|
|TableStatistics|object|false|none|none|
|Marker|object|false|none|none|

<h2 id="tocS_DescribeTableStatisticsMessage">DescribeTableStatisticsMessage</h2>
<!-- backwards compatibility -->
<a id="schemadescribetablestatisticsmessage"></a>
<a id="schema_DescribeTableStatisticsMessage"></a>
<a id="tocSdescribetablestatisticsmessage"></a>
<a id="tocsdescribetablestatisticsmessage"></a>

```json
{
  "ReplicationTaskArn": {},
  "MaxRecords": {},
  "Marker": {},
  "Filters": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskArn|object|true|none|none|
|MaxRecords|object|false|none|none|
|Marker|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ImportCertificateResponse">ImportCertificateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportcertificateresponse"></a>
<a id="schema_ImportCertificateResponse"></a>
<a id="tocSimportcertificateresponse"></a>
<a id="tocsimportcertificateresponse"></a>

```json
{
  "Certificate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificate|object|false|none|none|

<h2 id="tocS_ImportCertificateMessage">ImportCertificateMessage</h2>
<!-- backwards compatibility -->
<a id="schemaimportcertificatemessage"></a>
<a id="schema_ImportCertificateMessage"></a>
<a id="tocSimportcertificatemessage"></a>
<a id="tocsimportcertificatemessage"></a>

```json
{
  "CertificateIdentifier": {},
  "CertificatePem": {},
  "CertificateWallet": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateIdentifier|object|true|none|none|
|CertificatePem|object|false|none|none|
|CertificateWallet|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_InvalidCertificateFault">InvalidCertificateFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcertificatefault"></a>
<a id="schema_InvalidCertificateFault"></a>
<a id="tocSinvalidcertificatefault"></a>
<a id="tocsinvalidcertificatefault"></a>

```json
null
```

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "TagList": []
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagList|object|false|none|none|

<h2 id="tocS_ListTagsForResourceMessage">ListTagsForResourceMessage</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcemessage"></a>
<a id="schema_ListTagsForResourceMessage"></a>
<a id="tocSlisttagsforresourcemessage"></a>
<a id="tocslisttagsforresourcemessage"></a>

```json
{
  "ResourceArn": {},
  "ResourceArnList": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|ResourceArnList|object|false|none|none|

<h2 id="tocS_ModifyEndpointResponse">ModifyEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifyendpointresponse"></a>
<a id="schema_ModifyEndpointResponse"></a>
<a id="tocSmodifyendpointresponse"></a>
<a id="tocsmodifyendpointresponse"></a>

```json
{
  "Endpoint": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoint|object|false|none|none|

<h2 id="tocS_ModifyEndpointMessage">ModifyEndpointMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifyendpointmessage"></a>
<a id="schema_ModifyEndpointMessage"></a>
<a id="tocSmodifyendpointmessage"></a>
<a id="tocsmodifyendpointmessage"></a>

```json
{
  "EndpointArn": {},
  "EndpointIdentifier": {},
  "EndpointType": {},
  "EngineName": {},
  "Username": {},
  "Password": {},
  "ServerName": {},
  "Port": {},
  "DatabaseName": {},
  "ExtraConnectionAttributes": {},
  "CertificateArn": {},
  "SslMode": {},
  "ServiceAccessRoleArn": {},
  "ExternalTableDefinition": {},
  "DynamoDbSettings": {
    "ServiceAccessRoleArn": {}
  },
  "S3Settings": {
    "ServiceAccessRoleArn": {},
    "ExternalTableDefinition": {},
    "CsvRowDelimiter": {},
    "CsvDelimiter": {},
    "BucketFolder": {},
    "BucketName": {},
    "CompressionType": {},
    "EncryptionMode": {},
    "ServerSideEncryptionKmsKeyId": {},
    "DataFormat": {},
    "EncodingType": {},
    "DictPageSizeLimit": {},
    "RowGroupLength": {},
    "DataPageSize": {},
    "ParquetVersion": {},
    "EnableStatistics": {},
    "IncludeOpForFullLoad": {},
    "CdcInsertsOnly": {},
    "TimestampColumnName": {},
    "ParquetTimestampInMillisecond": {},
    "CdcInsertsAndUpdates": {},
    "DatePartitionEnabled": {},
    "DatePartitionSequence": {},
    "DatePartitionDelimiter": {},
    "UseCsvNoSupValue": {},
    "CsvNoSupValue": {},
    "PreserveTransactions": {},
    "CdcPath": {},
    "UseTaskStartTimeForFullLoadTimestamp": {},
    "CannedAclForObjects": {},
    "AddColumnName": {},
    "CdcMaxBatchInterval": {},
    "CdcMinFileSize": {},
    "CsvNullValue": {},
    "IgnoreHeaderRows": {},
    "MaxFileSize": {},
    "Rfc4180": {},
    "DatePartitionTimezone": {},
    "AddTrailingPaddingCharacter": {},
    "ExpectedBucketOwner": {},
    "GlueCatalogGeneration": {}
  },
  "DmsTransferSettings": {
    "ServiceAccessRoleArn": {},
    "BucketName": {}
  },
  "MongoDbSettings": {
    "Username": {},
    "Password": {},
    "ServerName": {},
    "Port": {},
    "DatabaseName": {},
    "AuthType": {},
    "AuthMechanism": {},
    "NestingLevel": {},
    "ExtractDocId": {},
    "DocsToInvestigate": {},
    "AuthSource": {},
    "KmsKeyId": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "KinesisSettings": {
    "StreamArn": {},
    "MessageFormat": {},
    "ServiceAccessRoleArn": {},
    "IncludeTransactionDetails": {},
    "IncludePartitionValue": {},
    "PartitionIncludeSchemaTable": {},
    "IncludeTableAlterOperations": {},
    "IncludeControlDetails": {},
    "IncludeNullAndEmpty": {},
    "NoHexPrefix": {}
  },
  "KafkaSettings": {
    "Broker": {},
    "Topic": {},
    "MessageFormat": {},
    "IncludeTransactionDetails": {},
    "IncludePartitionValue": {},
    "PartitionIncludeSchemaTable": {},
    "IncludeTableAlterOperations": {},
    "IncludeControlDetails": {},
    "MessageMaxBytes": {},
    "IncludeNullAndEmpty": {},
    "SecurityProtocol": {},
    "SslClientCertificateArn": {},
    "SslClientKeyArn": {},
    "SslClientKeyPassword": {},
    "SslCaCertificateArn": {},
    "SaslUsername": {},
    "SaslPassword": {},
    "NoHexPrefix": {},
    "SaslMechanism": {}
  },
  "ElasticsearchSettings": {
    "ServiceAccessRoleArn": {},
    "EndpointUri": {},
    "FullLoadErrorPercentage": {},
    "ErrorRetryDuration": {},
    "UseNewMappingType": {}
  },
  "NeptuneSettings": {
    "ServiceAccessRoleArn": {},
    "S3BucketName": {},
    "S3BucketFolder": {},
    "ErrorRetryDuration": {},
    "MaxFileSize": {},
    "MaxRetryCount": {},
    "IamAuthEnabled": {}
  },
  "RedshiftSettings": {
    "AcceptAnyDate": {},
    "AfterConnectScript": {},
    "BucketFolder": {},
    "BucketName": {},
    "CaseSensitiveNames": {},
    "CompUpdate": {},
    "ConnectionTimeout": {},
    "DatabaseName": {},
    "DateFormat": {},
    "EmptyAsNull": {},
    "EncryptionMode": {},
    "ExplicitIds": {},
    "FileTransferUploadStreams": {},
    "LoadTimeout": {},
    "MaxFileSize": {},
    "Password": {},
    "Port": {},
    "RemoveQuotes": {},
    "ReplaceInvalidChars": {},
    "ReplaceChars": {},
    "ServerName": {},
    "ServiceAccessRoleArn": {},
    "ServerSideEncryptionKmsKeyId": {},
    "TimeFormat": {},
    "TrimBlanks": {},
    "TruncateColumns": {},
    "Username": {},
    "WriteBufferSize": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "MapBooleanAsBoolean": {}
  },
  "PostgreSQLSettings": {
    "AfterConnectScript": {},
    "CaptureDdls": {},
    "MaxFileSize": {},
    "DatabaseName": {},
    "DdlArtifactsSchema": {},
    "ExecuteTimeout": {},
    "FailTasksOnLobTruncation": {},
    "HeartbeatEnable": {},
    "HeartbeatSchema": {},
    "HeartbeatFrequency": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "Username": {},
    "SlotName": {},
    "PluginName": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "TrimSpaceInChar": {},
    "MapBooleanAsBoolean": {}
  },
  "MySQLSettings": {
    "AfterConnectScript": {},
    "CleanSourceMetadataOnMismatch": {},
    "DatabaseName": {},
    "EventsPollInterval": {},
    "TargetDbType": {},
    "MaxFileSize": {},
    "ParallelLoadThreads": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "ServerTimezone": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "OracleSettings": {
    "AddSupplementalLogging": {},
    "ArchivedLogDestId": {},
    "AdditionalArchivedLogDestId": {},
    "ExtraArchivedLogDestIds": {},
    "AllowSelectNestedTables": {},
    "ParallelAsmReadThreads": {},
    "ReadAheadBlocks": {},
    "AccessAlternateDirectly": {},
    "UseAlternateFolderForOnline": {},
    "OraclePathPrefix": {},
    "UsePathPrefix": {},
    "ReplacePathPrefix": {},
    "EnableHomogenousTablespace": {},
    "DirectPathNoLog": {},
    "ArchivedLogsOnly": {},
    "AsmPassword": {},
    "AsmServer": {},
    "AsmUser": {},
    "CharLengthSemantics": {},
    "DatabaseName": {},
    "DirectPathParallelLoad": {},
    "FailTasksOnLobTruncation": {},
    "NumberDatatypeScale": {},
    "Password": {},
    "Port": {},
    "ReadTableSpaceName": {},
    "RetryInterval": {},
    "SecurityDbEncryption": {},
    "SecurityDbEncryptionName": {},
    "ServerName": {},
    "SpatialDataOptionToGeoJsonFunctionName": {},
    "StandbyDelayTime": {},
    "Username": {},
    "UseBFile": {},
    "UseDirectPathFullLoad": {},
    "UseLogminerReader": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "SecretsManagerOracleAsmAccessRoleArn": {},
    "SecretsManagerOracleAsmSecretId": {},
    "TrimSpaceInChar": {},
    "ConvertTimestampWithZoneToUTC": {}
  },
  "SybaseSettings": {
    "DatabaseName": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "MicrosoftSQLServerSettings": {
    "Port": {},
    "BcpPacketSize": {},
    "DatabaseName": {},
    "ControlTablesFileGroup": {},
    "Password": {},
    "QuerySingleAlwaysOnNode": {},
    "ReadBackupOnly": {},
    "SafeguardPolicy": {},
    "ServerName": {},
    "Username": {},
    "UseBcpFullLoad": {},
    "UseThirdPartyBackupDevice": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "TrimSpaceInChar": {},
    "TlogAccessMode": {},
    "ForceLobLookup": {}
  },
  "IBMDb2Settings": {
    "DatabaseName": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "SetDataCaptureChanges": {},
    "CurrentLsn": {},
    "MaxKBytesPerRead": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "DocDbSettings": {
    "Username": {},
    "Password": {},
    "ServerName": {},
    "Port": {},
    "DatabaseName": {},
    "NestingLevel": {},
    "ExtractDocId": {},
    "DocsToInvestigate": {},
    "KmsKeyId": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "RedisSettings": {
    "ServerName": {},
    "Port": {},
    "SslSecurityProtocol": {},
    "AuthType": {},
    "AuthUserName": {},
    "AuthPassword": {},
    "SslCaCertificateArn": {}
  },
  "ExactSettings": {},
  "GcpMySQLSettings": {
    "AfterConnectScript": {},
    "CleanSourceMetadataOnMismatch": {},
    "DatabaseName": {},
    "EventsPollInterval": {},
    "TargetDbType": {},
    "MaxFileSize": {},
    "ParallelLoadThreads": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "ServerTimezone": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|true|none|none|
|EndpointIdentifier|object|false|none|none|
|EndpointType|object|false|none|none|
|EngineName|object|false|none|none|
|Username|object|false|none|none|
|Password|object|false|none|none|
|ServerName|object|false|none|none|
|Port|object|false|none|none|
|DatabaseName|object|false|none|none|
|ExtraConnectionAttributes|object|false|none|none|
|CertificateArn|object|false|none|none|
|SslMode|object|false|none|none|
|ServiceAccessRoleArn|object|false|none|none|
|ExternalTableDefinition|object|false|none|none|
|DynamoDbSettings|object|false|none|none|
|S3Settings|object|false|none|none|
|DmsTransferSettings|object|false|none|none|
|MongoDbSettings|object|false|none|none|
|KinesisSettings|object|false|none|none|
|KafkaSettings|object|false|none|none|
|ElasticsearchSettings|object|false|none|none|
|NeptuneSettings|object|false|none|none|
|RedshiftSettings|[RedshiftSettings](#schemaredshiftsettings)|false|none|Provides information that defines an Amazon Redshift endpoint.|
|PostgreSQLSettings|object|false|none|none|
|MySQLSettings|object|false|none|none|
|OracleSettings|object|false|none|none|
|SybaseSettings|object|false|none|none|
|MicrosoftSQLServerSettings|object|false|none|none|
|IBMDb2Settings|object|false|none|none|
|DocDbSettings|object|false|none|none|
|RedisSettings|object|false|none|none|
|ExactSettings|object|false|none|none|
|GcpMySQLSettings|object|false|none|none|

<h2 id="tocS_ModifyEventSubscriptionResponse">ModifyEventSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifyeventsubscriptionresponse"></a>
<a id="schema_ModifyEventSubscriptionResponse"></a>
<a id="tocSmodifyeventsubscriptionresponse"></a>
<a id="tocsmodifyeventsubscriptionresponse"></a>

```json
{
  "EventSubscription": {
    "CustomerAwsId": {},
    "CustSubscriptionId": {},
    "SnsTopicArn": {},
    "Status": {},
    "SubscriptionCreationTime": {},
    "SourceType": {},
    "SourceIdsList": {},
    "EventCategoriesList": {},
    "Enabled": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventSubscription|object|false|none|none|

<h2 id="tocS_ModifyEventSubscriptionMessage">ModifyEventSubscriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifyeventsubscriptionmessage"></a>
<a id="schema_ModifyEventSubscriptionMessage"></a>
<a id="tocSmodifyeventsubscriptionmessage"></a>
<a id="tocsmodifyeventsubscriptionmessage"></a>

```json
{
  "SubscriptionName": {},
  "SnsTopicArn": {},
  "SourceType": {},
  "EventCategories": {},
  "Enabled": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubscriptionName|object|true|none|none|
|SnsTopicArn|object|false|none|none|
|SourceType|object|false|none|none|
|EventCategories|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_ModifyReplicationInstanceResponse">ModifyReplicationInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifyreplicationinstanceresponse"></a>
<a id="schema_ModifyReplicationInstanceResponse"></a>
<a id="tocSmodifyreplicationinstanceresponse"></a>
<a id="tocsmodifyreplicationinstanceresponse"></a>

```json
{
  "ReplicationInstance": {
    "AllocatedStorage": 5,
    "AutoMinorVersionUpgrade": true,
    "EngineVersion": "1.5.0",
    "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
    "PendingModifiedValues": {},
    "PreferredMaintenanceWindow": "sun:06:00-sun:14:00",
    "PubliclyAccessible": true,
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationInstanceClass": "dms.t2.micro",
    "ReplicationInstanceIdentifier": "test-rep-1",
    "ReplicationInstanceStatus": "available",
    "ReplicationSubnetGroup": {
      "ReplicationSubnetGroupDescription": "default",
      "ReplicationSubnetGroupIdentifier": "default",
      "SubnetGroupStatus": "Complete",
      "Subnets": [
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1d"
          },
          "SubnetIdentifier": "subnet-f6dd91af",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1b"
          },
          "SubnetIdentifier": "subnet-3605751d",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1c"
          },
          "SubnetIdentifier": "subnet-c2daefb5",
          "SubnetStatus": "Active"
        },
        {
          "SubnetAvailabilityZone": {
            "Name": "us-east-1e"
          },
          "SubnetIdentifier": "subnet-85e90cb8",
          "SubnetStatus": "Active"
        }
      ],
      "VpcId": "vpc-6741a603"
    }
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstance|object|false|none|none|

<h2 id="tocS_ModifyReplicationInstanceMessage">ModifyReplicationInstanceMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifyreplicationinstancemessage"></a>
<a id="schema_ModifyReplicationInstanceMessage"></a>
<a id="tocSmodifyreplicationinstancemessage"></a>
<a id="tocsmodifyreplicationinstancemessage"></a>

```json
{
  "ReplicationInstanceArn": {},
  "AllocatedStorage": {},
  "ApplyImmediately": {},
  "ReplicationInstanceClass": {},
  "VpcSecurityGroupIds": {},
  "PreferredMaintenanceWindow": {},
  "MultiAZ": {},
  "EngineVersion": {},
  "AllowMajorVersionUpgrade": {},
  "AutoMinorVersionUpgrade": {},
  "ReplicationInstanceIdentifier": {},
  "NetworkType": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstanceArn|object|true|none|none|
|AllocatedStorage|object|false|none|none|
|ApplyImmediately|object|false|none|none|
|ReplicationInstanceClass|object|false|none|none|
|VpcSecurityGroupIds|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|MultiAZ|object|false|none|none|
|EngineVersion|object|false|none|none|
|AllowMajorVersionUpgrade|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|ReplicationInstanceIdentifier|object|false|none|none|
|NetworkType|object|false|none|none|

<h2 id="tocS_UpgradeDependencyFailureFault">UpgradeDependencyFailureFault</h2>
<!-- backwards compatibility -->
<a id="schemaupgradedependencyfailurefault"></a>
<a id="schema_UpgradeDependencyFailureFault"></a>
<a id="tocSupgradedependencyfailurefault"></a>
<a id="tocsupgradedependencyfailurefault"></a>

```json
null
```

<h2 id="tocS_ModifyReplicationSubnetGroupResponse">ModifyReplicationSubnetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifyreplicationsubnetgroupresponse"></a>
<a id="schema_ModifyReplicationSubnetGroupResponse"></a>
<a id="tocSmodifyreplicationsubnetgroupresponse"></a>
<a id="tocsmodifyreplicationsubnetgroupresponse"></a>

```json
{
  "ReplicationSubnetGroup": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationSubnetGroup|object|false|none|none|

<h2 id="tocS_ModifyReplicationSubnetGroupMessage">ModifyReplicationSubnetGroupMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifyreplicationsubnetgroupmessage"></a>
<a id="schema_ModifyReplicationSubnetGroupMessage"></a>
<a id="tocSmodifyreplicationsubnetgroupmessage"></a>
<a id="tocsmodifyreplicationsubnetgroupmessage"></a>

```json
{
  "ReplicationSubnetGroupIdentifier": {},
  "ReplicationSubnetGroupDescription": {},
  "SubnetIds": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationSubnetGroupIdentifier|object|true|none|none|
|ReplicationSubnetGroupDescription|object|false|none|none|
|SubnetIds|object|true|none|none|

<h2 id="tocS_SubnetAlreadyInUse">SubnetAlreadyInUse</h2>
<!-- backwards compatibility -->
<a id="schemasubnetalreadyinuse"></a>
<a id="schema_SubnetAlreadyInUse"></a>
<a id="tocSsubnetalreadyinuse"></a>
<a id="tocssubnetalreadyinuse"></a>

```json
null
```

<h2 id="tocS_ModifyReplicationTaskResponse">ModifyReplicationTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifyreplicationtaskresponse"></a>
<a id="schema_ModifyReplicationTaskResponse"></a>
<a id="tocSmodifyreplicationtaskresponse"></a>
<a id="tocsmodifyreplicationtaskresponse"></a>

```json
{
  "ReplicationTask": {
    "ReplicationTaskIdentifier": {},
    "SourceEndpointArn": {},
    "TargetEndpointArn": {},
    "ReplicationInstanceArn": {},
    "MigrationType": {},
    "TableMappings": {},
    "ReplicationTaskSettings": {},
    "Status": {},
    "LastFailureMessage": {},
    "StopReason": {},
    "ReplicationTaskCreationDate": {},
    "ReplicationTaskStartDate": {},
    "CdcStartPosition": {},
    "CdcStopPosition": {},
    "RecoveryCheckpoint": {},
    "ReplicationTaskArn": {},
    "ReplicationTaskStats": {
      "FullLoadProgressPercent": {},
      "ElapsedTimeMillis": {},
      "TablesLoaded": {},
      "TablesLoading": {},
      "TablesQueued": {},
      "TablesErrored": {},
      "FreshStartDate": {},
      "StartDate": {},
      "StopDate": {},
      "FullLoadStartDate": {},
      "FullLoadFinishDate": {}
    },
    "TaskData": {},
    "TargetReplicationInstanceArn": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTask|object|false|none|none|

<h2 id="tocS_ModifyReplicationTaskMessage">ModifyReplicationTaskMessage</h2>
<!-- backwards compatibility -->
<a id="schemamodifyreplicationtaskmessage"></a>
<a id="schema_ModifyReplicationTaskMessage"></a>
<a id="tocSmodifyreplicationtaskmessage"></a>
<a id="tocsmodifyreplicationtaskmessage"></a>

```json
{
  "ReplicationTaskArn": {},
  "ReplicationTaskIdentifier": {},
  "MigrationType": {},
  "TableMappings": {},
  "ReplicationTaskSettings": {},
  "CdcStartTime": {},
  "CdcStartPosition": {},
  "CdcStopPosition": {},
  "TaskData": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskArn|object|true|none|none|
|ReplicationTaskIdentifier|object|false|none|none|
|MigrationType|object|false|none|none|
|TableMappings|object|false|none|none|
|ReplicationTaskSettings|object|false|none|none|
|CdcStartTime|object|false|none|none|
|CdcStartPosition|object|false|none|none|
|CdcStopPosition|object|false|none|none|
|TaskData|object|false|none|none|

<h2 id="tocS_MoveReplicationTaskResponse">MoveReplicationTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemamovereplicationtaskresponse"></a>
<a id="schema_MoveReplicationTaskResponse"></a>
<a id="tocSmovereplicationtaskresponse"></a>
<a id="tocsmovereplicationtaskresponse"></a>

```json
{
  "ReplicationTask": {
    "ReplicationTaskIdentifier": {},
    "SourceEndpointArn": {},
    "TargetEndpointArn": {},
    "ReplicationInstanceArn": {},
    "MigrationType": {},
    "TableMappings": {},
    "ReplicationTaskSettings": {},
    "Status": {},
    "LastFailureMessage": {},
    "StopReason": {},
    "ReplicationTaskCreationDate": {},
    "ReplicationTaskStartDate": {},
    "CdcStartPosition": {},
    "CdcStopPosition": {},
    "RecoveryCheckpoint": {},
    "ReplicationTaskArn": {},
    "ReplicationTaskStats": {
      "FullLoadProgressPercent": {},
      "ElapsedTimeMillis": {},
      "TablesLoaded": {},
      "TablesLoading": {},
      "TablesQueued": {},
      "TablesErrored": {},
      "FreshStartDate": {},
      "StartDate": {},
      "StopDate": {},
      "FullLoadStartDate": {},
      "FullLoadFinishDate": {}
    },
    "TaskData": {},
    "TargetReplicationInstanceArn": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTask|object|false|none|none|

<h2 id="tocS_MoveReplicationTaskMessage">MoveReplicationTaskMessage</h2>
<!-- backwards compatibility -->
<a id="schemamovereplicationtaskmessage"></a>
<a id="schema_MoveReplicationTaskMessage"></a>
<a id="tocSmovereplicationtaskmessage"></a>
<a id="tocsmovereplicationtaskmessage"></a>

```json
{
  "ReplicationTaskArn": {},
  "TargetReplicationInstanceArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskArn|object|true|none|none|
|TargetReplicationInstanceArn|object|true|none|none|

<h2 id="tocS_RebootReplicationInstanceResponse">RebootReplicationInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemarebootreplicationinstanceresponse"></a>
<a id="schema_RebootReplicationInstanceResponse"></a>
<a id="tocSrebootreplicationinstanceresponse"></a>
<a id="tocsrebootreplicationinstanceresponse"></a>

```json
{
  "ReplicationInstance": {
    "ReplicationInstanceIdentifier": {},
    "ReplicationInstanceClass": {},
    "ReplicationInstanceStatus": {},
    "AllocatedStorage": {},
    "InstanceCreateTime": {},
    "VpcSecurityGroups": {},
    "AvailabilityZone": {},
    "ReplicationSubnetGroup": {
      "ReplicationSubnetGroupIdentifier": {},
      "ReplicationSubnetGroupDescription": {},
      "VpcId": {},
      "SubnetGroupStatus": {},
      "Subnets": {},
      "SupportedNetworkTypes": {}
    },
    "PreferredMaintenanceWindow": {},
    "PendingModifiedValues": {
      "ReplicationInstanceClass": {},
      "AllocatedStorage": {},
      "MultiAZ": {},
      "EngineVersion": {},
      "NetworkType": {}
    },
    "MultiAZ": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "KmsKeyId": {},
    "ReplicationInstanceArn": {},
    "ReplicationInstancePublicIpAddress": {},
    "ReplicationInstancePrivateIpAddress": {},
    "ReplicationInstancePublicIpAddresses": {},
    "ReplicationInstancePrivateIpAddresses": {},
    "ReplicationInstanceIpv6Addresses": {},
    "PubliclyAccessible": {},
    "SecondaryAvailabilityZone": {},
    "FreeUntil": {},
    "DnsNameServers": {},
    "NetworkType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstance|object|false|none|none|

<h2 id="tocS_RebootReplicationInstanceMessage">RebootReplicationInstanceMessage</h2>
<!-- backwards compatibility -->
<a id="schemarebootreplicationinstancemessage"></a>
<a id="schema_RebootReplicationInstanceMessage"></a>
<a id="tocSrebootreplicationinstancemessage"></a>
<a id="tocsrebootreplicationinstancemessage"></a>

```json
{
  "ReplicationInstanceArn": {},
  "ForceFailover": {},
  "ForcePlannedFailover": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstanceArn|object|true|none|none|
|ForceFailover|object|false|none|none|
|ForcePlannedFailover|object|false|none|none|

<h2 id="tocS_RefreshSchemasResponse">RefreshSchemasResponse</h2>
<!-- backwards compatibility -->
<a id="schemarefreshschemasresponse"></a>
<a id="schema_RefreshSchemasResponse"></a>
<a id="tocSrefreshschemasresponse"></a>
<a id="tocsrefreshschemasresponse"></a>

```json
{
  "RefreshSchemasStatus": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RefreshSchemasStatus|object|false|none|none|

<h2 id="tocS_RefreshSchemasMessage">RefreshSchemasMessage</h2>
<!-- backwards compatibility -->
<a id="schemarefreshschemasmessage"></a>
<a id="schema_RefreshSchemasMessage"></a>
<a id="tocSrefreshschemasmessage"></a>
<a id="tocsrefreshschemasmessage"></a>

```json
{
  "EndpointArn": {},
  "ReplicationInstanceArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|true|none|none|
|ReplicationInstanceArn|object|true|none|none|

<h2 id="tocS_ReloadTablesResponse">ReloadTablesResponse</h2>
<!-- backwards compatibility -->
<a id="schemareloadtablesresponse"></a>
<a id="schema_ReloadTablesResponse"></a>
<a id="tocSreloadtablesresponse"></a>
<a id="tocsreloadtablesresponse"></a>

```json
{
  "ReplicationTaskArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskArn|object|false|none|none|

<h2 id="tocS_ReloadTablesMessage">ReloadTablesMessage</h2>
<!-- backwards compatibility -->
<a id="schemareloadtablesmessage"></a>
<a id="schema_ReloadTablesMessage"></a>
<a id="tocSreloadtablesmessage"></a>
<a id="tocsreloadtablesmessage"></a>

```json
{
  "ReplicationTaskArn": {},
  "TablesToReload": {},
  "ReloadOption": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskArn|object|true|none|none|
|TablesToReload|object|true|none|none|
|ReloadOption|object|false|none|none|

<h2 id="tocS_RemoveTagsFromResourceResponse">RemoveTagsFromResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromresourceresponse"></a>
<a id="schema_RemoveTagsFromResourceResponse"></a>
<a id="tocSremovetagsfromresourceresponse"></a>
<a id="tocsremovetagsfromresourceresponse"></a>

```json
{}
```

<p/>

<h2 id="tocS_RemoveTagsFromResourceMessage">RemoveTagsFromResourceMessage</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsfromresourcemessage"></a>
<a id="schema_RemoveTagsFromResourceMessage"></a>
<a id="tocSremovetagsfromresourcemessage"></a>
<a id="tocsremovetagsfromresourcemessage"></a>

```json
{
  "ResourceArn": {},
  "TagKeys": {}
}
```

Removes one or more tags from an DMS resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_RunFleetAdvisorLsaAnalysisResponse">RunFleetAdvisorLsaAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemarunfleetadvisorlsaanalysisresponse"></a>
<a id="schema_RunFleetAdvisorLsaAnalysisResponse"></a>
<a id="tocSrunfleetadvisorlsaanalysisresponse"></a>
<a id="tocsrunfleetadvisorlsaanalysisresponse"></a>

```json
{
  "LsaAnalysisId": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LsaAnalysisId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_StartRecommendationsRequest">StartRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartrecommendationsrequest"></a>
<a id="schema_StartRecommendationsRequest"></a>
<a id="tocSstartrecommendationsrequest"></a>
<a id="tocsstartrecommendationsrequest"></a>

```json
{
  "DatabaseId": {},
  "Settings": {
    "InstanceSizingType": {},
    "WorkloadType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseId|object|true|none|none|
|Settings|object|true|none|none|

<h2 id="tocS_StartReplicationTaskResponse">StartReplicationTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartreplicationtaskresponse"></a>
<a id="schema_StartReplicationTaskResponse"></a>
<a id="tocSstartreplicationtaskresponse"></a>
<a id="tocsstartreplicationtaskresponse"></a>

```json
{
  "ReplicationTask": {
    "MigrationType": "full-load",
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationTaskArn": "arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM",
    "ReplicationTaskCreationDate": "2016-12-14T18:25:43Z",
    "ReplicationTaskIdentifier": "task1",
    "ReplicationTaskSettings": "{\"TargetMetadata\":{\"TargetSchema\":\"\",\"SupportLobs\":true,\"FullLobMode\":true,\"LobChunkSize\":64,\"LimitedSizeLobMode\":false,\"LobMaxSize\":0},\"FullLoadSettings\":{\"FullLoadEnabled\":true,\"ApplyChangesEnabled\":false,\"TargetTablePrepMode\":\"DROP_AND_CREATE\",\"CreatePkAfterFullLoad\":false,\"StopTaskCachedChangesApplied\":false,\"StopTaskCachedChangesNotApplied\":false,\"ResumeEnabled\":false,\"ResumeMinTableSize\":100000,\"ResumeOnlyClusteredPKTables\":true,\"MaxFullLoadSubTasks\":8,\"TransactionConsistencyTimeout\":600,\"CommitRate\":10000},\"Logging\":{\"EnableLogging\":false}}",
    "SourceEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
    "Status": "creating",
    "TableMappings": "file://mappingfile.json",
    "TargetEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTask|object|false|none|none|

<h2 id="tocS_StartReplicationTaskMessage">StartReplicationTaskMessage</h2>
<!-- backwards compatibility -->
<a id="schemastartreplicationtaskmessage"></a>
<a id="schema_StartReplicationTaskMessage"></a>
<a id="tocSstartreplicationtaskmessage"></a>
<a id="tocsstartreplicationtaskmessage"></a>

```json
{
  "ReplicationTaskArn": {},
  "StartReplicationTaskType": {},
  "CdcStartTime": {},
  "CdcStartPosition": {},
  "CdcStopPosition": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskArn|object|true|none|none|
|StartReplicationTaskType|object|true|none|none|
|CdcStartTime|object|false|none|none|
|CdcStartPosition|object|false|none|none|
|CdcStopPosition|object|false|none|none|

<h2 id="tocS_StartReplicationTaskAssessmentResponse">StartReplicationTaskAssessmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartreplicationtaskassessmentresponse"></a>
<a id="schema_StartReplicationTaskAssessmentResponse"></a>
<a id="tocSstartreplicationtaskassessmentresponse"></a>
<a id="tocsstartreplicationtaskassessmentresponse"></a>

```json
{
  "ReplicationTask": {
    "ReplicationTaskIdentifier": {},
    "SourceEndpointArn": {},
    "TargetEndpointArn": {},
    "ReplicationInstanceArn": {},
    "MigrationType": {},
    "TableMappings": {},
    "ReplicationTaskSettings": {},
    "Status": {},
    "LastFailureMessage": {},
    "StopReason": {},
    "ReplicationTaskCreationDate": {},
    "ReplicationTaskStartDate": {},
    "CdcStartPosition": {},
    "CdcStopPosition": {},
    "RecoveryCheckpoint": {},
    "ReplicationTaskArn": {},
    "ReplicationTaskStats": {
      "FullLoadProgressPercent": {},
      "ElapsedTimeMillis": {},
      "TablesLoaded": {},
      "TablesLoading": {},
      "TablesQueued": {},
      "TablesErrored": {},
      "FreshStartDate": {},
      "StartDate": {},
      "StopDate": {},
      "FullLoadStartDate": {},
      "FullLoadFinishDate": {}
    },
    "TaskData": {},
    "TargetReplicationInstanceArn": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTask|object|false|none|none|

<h2 id="tocS_StartReplicationTaskAssessmentMessage">StartReplicationTaskAssessmentMessage</h2>
<!-- backwards compatibility -->
<a id="schemastartreplicationtaskassessmentmessage"></a>
<a id="schema_StartReplicationTaskAssessmentMessage"></a>
<a id="tocSstartreplicationtaskassessmentmessage"></a>
<a id="tocsstartreplicationtaskassessmentmessage"></a>

```json
{
  "ReplicationTaskArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskArn|object|true|none|none|

<h2 id="tocS_StartReplicationTaskAssessmentRunResponse">StartReplicationTaskAssessmentRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartreplicationtaskassessmentrunresponse"></a>
<a id="schema_StartReplicationTaskAssessmentRunResponse"></a>
<a id="tocSstartreplicationtaskassessmentrunresponse"></a>
<a id="tocsstartreplicationtaskassessmentrunresponse"></a>

```json
{
  "ReplicationTaskAssessmentRun": {
    "ReplicationTaskAssessmentRunArn": {},
    "ReplicationTaskArn": {},
    "Status": {},
    "ReplicationTaskAssessmentRunCreationDate": {},
    "AssessmentProgress": {
      "IndividualAssessmentCount": {},
      "IndividualAssessmentCompletedCount": {}
    },
    "LastFailureMessage": {},
    "ServiceAccessRoleArn": {},
    "ResultLocationBucket": {},
    "ResultLocationFolder": {},
    "ResultEncryptionMode": {},
    "ResultKmsKeyArn": {},
    "AssessmentRunName": {}
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskAssessmentRun|object|false|none|none|

<h2 id="tocS_StartReplicationTaskAssessmentRunMessage">StartReplicationTaskAssessmentRunMessage</h2>
<!-- backwards compatibility -->
<a id="schemastartreplicationtaskassessmentrunmessage"></a>
<a id="schema_StartReplicationTaskAssessmentRunMessage"></a>
<a id="tocSstartreplicationtaskassessmentrunmessage"></a>
<a id="tocsstartreplicationtaskassessmentrunmessage"></a>

```json
{
  "ReplicationTaskArn": {},
  "ServiceAccessRoleArn": {},
  "ResultLocationBucket": {},
  "ResultLocationFolder": {},
  "ResultEncryptionMode": {},
  "ResultKmsKeyArn": {},
  "AssessmentRunName": {},
  "IncludeOnly": {},
  "Exclude": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskArn|object|true|none|none|
|ServiceAccessRoleArn|object|true|none|none|
|ResultLocationBucket|object|true|none|none|
|ResultLocationFolder|object|false|none|none|
|ResultEncryptionMode|object|false|none|none|
|ResultKmsKeyArn|object|false|none|none|
|AssessmentRunName|object|true|none|none|
|IncludeOnly|object|false|none|none|
|Exclude|object|false|none|none|

<h2 id="tocS_KMSFault">KMSFault</h2>
<!-- backwards compatibility -->
<a id="schemakmsfault"></a>
<a id="schema_KMSFault"></a>
<a id="tocSkmsfault"></a>
<a id="tocskmsfault"></a>

```json
null
```

<h2 id="tocS_StopReplicationTaskResponse">StopReplicationTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopreplicationtaskresponse"></a>
<a id="schema_StopReplicationTaskResponse"></a>
<a id="tocSstopreplicationtaskresponse"></a>
<a id="tocsstopreplicationtaskresponse"></a>

```json
{
  "ReplicationTask": {
    "MigrationType": "full-load",
    "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
    "ReplicationTaskArn": "arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM",
    "ReplicationTaskCreationDate": "2016-12-14T18:25:43Z",
    "ReplicationTaskIdentifier": "task1",
    "ReplicationTaskSettings": "{\"TargetMetadata\":{\"TargetSchema\":\"\",\"SupportLobs\":true,\"FullLobMode\":true,\"LobChunkSize\":64,\"LimitedSizeLobMode\":false,\"LobMaxSize\":0},\"FullLoadSettings\":{\"FullLoadEnabled\":true,\"ApplyChangesEnabled\":false,\"TargetTablePrepMode\":\"DROP_AND_CREATE\",\"CreatePkAfterFullLoad\":false,\"StopTaskCachedChangesApplied\":false,\"StopTaskCachedChangesNotApplied\":false,\"ResumeEnabled\":false,\"ResumeMinTableSize\":100000,\"ResumeOnlyClusteredPKTables\":true,\"MaxFullLoadSubTasks\":8,\"TransactionConsistencyTimeout\":600,\"CommitRate\":10000},\"Logging\":{\"EnableLogging\":false}}",
    "SourceEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
    "Status": "creating",
    "TableMappings": "file://mappingfile.json",
    "TargetEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E"
  }
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTask|object|false|none|none|

<h2 id="tocS_StopReplicationTaskMessage">StopReplicationTaskMessage</h2>
<!-- backwards compatibility -->
<a id="schemastopreplicationtaskmessage"></a>
<a id="schema_StopReplicationTaskMessage"></a>
<a id="tocSstopreplicationtaskmessage"></a>
<a id="tocsstopreplicationtaskmessage"></a>

```json
{
  "ReplicationTaskArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskArn|object|true|none|none|

<h2 id="tocS_TestConnectionResponse">TestConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schematestconnectionresponse"></a>
<a id="schema_TestConnectionResponse"></a>
<a id="tocStestconnectionresponse"></a>
<a id="tocstestconnectionresponse"></a>

```json
{
  "Connection": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connection|object|false|none|none|

<h2 id="tocS_TestConnectionMessage">TestConnectionMessage</h2>
<!-- backwards compatibility -->
<a id="schematestconnectionmessage"></a>
<a id="schema_TestConnectionMessage"></a>
<a id="tocStestconnectionmessage"></a>
<a id="tocstestconnectionmessage"></a>

```json
{
  "ReplicationInstanceArn": {},
  "EndpointArn": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstanceArn|object|true|none|none|
|EndpointArn|object|true|none|none|

<h2 id="tocS_UpdateSubscriptionsToEventBridgeResponse">UpdateSubscriptionsToEventBridgeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubscriptionstoeventbridgeresponse"></a>
<a id="schema_UpdateSubscriptionsToEventBridgeResponse"></a>
<a id="tocSupdatesubscriptionstoeventbridgeresponse"></a>
<a id="tocsupdatesubscriptionstoeventbridgeresponse"></a>

```json
{
  "Result": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Result|object|false|none|none|

<h2 id="tocS_UpdateSubscriptionsToEventBridgeMessage">UpdateSubscriptionsToEventBridgeMessage</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubscriptionstoeventbridgemessage"></a>
<a id="schema_UpdateSubscriptionsToEventBridgeMessage"></a>
<a id="tocSupdatesubscriptionstoeventbridgemessage"></a>
<a id="tocsupdatesubscriptionstoeventbridgemessage"></a>

```json
{
  "ForceMove": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForceMove|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
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

<h2 id="tocS_AccountQuota">AccountQuota</h2>
<!-- backwards compatibility -->
<a id="schemaaccountquota"></a>
<a id="schema_AccountQuota"></a>
<a id="tocSaccountquota"></a>
<a id="tocsaccountquota"></a>

```json
{
  "AccountQuotaName": {},
  "Used": {},
  "Max": {}
}
```

Describes a quota for an Amazon Web Services account, for example the number of replication instances allowed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountQuotaName|object|false|none|none|
|Used|object|false|none|none|
|Max|object|false|none|none|

<h2 id="tocS_AccountQuotaList">AccountQuotaList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountquotalist"></a>
<a id="schema_AccountQuotaList"></a>
<a id="tocSaccountquotalist"></a>
<a id="tocsaccountquotalist"></a>

```json
[
  {
    "AccountQuotaName": {},
    "Used": {},
    "Max": {}
  }
]
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
    "Value": {},
    "ResourceArn": {}
  }
]
```

<h2 id="tocS_ResourcePendingMaintenanceActions">ResourcePendingMaintenanceActions</h2>
<!-- backwards compatibility -->
<a id="schemaresourcependingmaintenanceactions"></a>
<a id="schema_ResourcePendingMaintenanceActions"></a>
<a id="tocSresourcependingmaintenanceactions"></a>
<a id="tocsresourcependingmaintenanceactions"></a>

```json
{
  "ResourceIdentifier": {},
  "PendingMaintenanceActionDetails": {}
}
```

Identifies an DMS resource and any pending actions for it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIdentifier|object|false|none|none|
|PendingMaintenanceActionDetails|object|false|none|none|

<h2 id="tocS_ArnList">ArnList</h2>
<!-- backwards compatibility -->
<a id="schemaarnlist"></a>
<a id="schema_ArnList"></a>
<a id="tocSarnlist"></a>
<a id="tocsarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AuthMechanismValue">AuthMechanismValue</h2>
<!-- backwards compatibility -->
<a id="schemaauthmechanismvalue"></a>
<a id="schema_AuthMechanismValue"></a>
<a id="tocSauthmechanismvalue"></a>
<a id="tocsauthmechanismvalue"></a>

```json
"default"
```

<h2 id="tocS_AuthTypeValue">AuthTypeValue</h2>
<!-- backwards compatibility -->
<a id="schemaauthtypevalue"></a>
<a id="schema_AuthTypeValue"></a>
<a id="tocSauthtypevalue"></a>
<a id="tocsauthtypevalue"></a>

```json
"no"
```

<h2 id="tocS_AvailabilityZone">AvailabilityZone</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzone"></a>
<a id="schema_AvailabilityZone"></a>
<a id="tocSavailabilityzone"></a>
<a id="tocsavailabilityzone"></a>

```json
{
  "Name": {}
}
```

The name of an Availability Zone for use during database migration. <code>AvailabilityZone</code> is an optional parameter to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html"> <code>CreateReplicationInstance</code> </a> operation, and it’s value relates to the Amazon Web Services Region of an endpoint. For example, the availability zone of an endpoint in the us-east-1 region might be us-east-1a, us-east-1b, us-east-1c, or us-east-1d.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_AvailabilityZonesList">AvailabilityZonesList</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzoneslist"></a>
<a id="schema_AvailabilityZonesList"></a>
<a id="tocSavailabilityzoneslist"></a>
<a id="tocsavailabilityzoneslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchStartRecommendationsErrorEntry">BatchStartRecommendationsErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchstartrecommendationserrorentry"></a>
<a id="schema_BatchStartRecommendationsErrorEntry"></a>
<a id="tocSbatchstartrecommendationserrorentry"></a>
<a id="tocsbatchstartrecommendationserrorentry"></a>

```json
{
  "DatabaseId": {},
  "Message": {},
  "Code": {}
}
```

Provides information about the errors that occurred during the analysis of the source database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseId|object|false|none|none|
|Message|object|false|none|none|
|Code|object|false|none|none|

<h2 id="tocS_BatchStartRecommendationsErrorEntryList">BatchStartRecommendationsErrorEntryList</h2>
<!-- backwards compatibility -->
<a id="schemabatchstartrecommendationserrorentrylist"></a>
<a id="schema_BatchStartRecommendationsErrorEntryList"></a>
<a id="tocSbatchstartrecommendationserrorentrylist"></a>
<a id="tocsbatchstartrecommendationserrorentrylist"></a>

```json
[
  {
    "DatabaseId": {},
    "Message": {},
    "Code": {}
  }
]
```

<h2 id="tocS_StartRecommendationsRequestEntryList">StartRecommendationsRequestEntryList</h2>
<!-- backwards compatibility -->
<a id="schemastartrecommendationsrequestentrylist"></a>
<a id="schema_StartRecommendationsRequestEntryList"></a>
<a id="tocSstartrecommendationsrequestentrylist"></a>
<a id="tocsstartrecommendationsrequestentrylist"></a>

```json
[
  {
    "DatabaseId": {},
    "Settings": {
      "InstanceSizingType": {},
      "WorkloadType": {}
    }
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

<h2 id="tocS_BooleanOptional">BooleanOptional</h2>
<!-- backwards compatibility -->
<a id="schemabooleanoptional"></a>
<a id="schema_BooleanOptional"></a>
<a id="tocSbooleanoptional"></a>
<a id="tocsbooleanoptional"></a>

```json
true
```

<h2 id="tocS_ReplicationTaskAssessmentRun">ReplicationTaskAssessmentRun</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtaskassessmentrun"></a>
<a id="schema_ReplicationTaskAssessmentRun"></a>
<a id="tocSreplicationtaskassessmentrun"></a>
<a id="tocsreplicationtaskassessmentrun"></a>

```json
{
  "ReplicationTaskAssessmentRunArn": {},
  "ReplicationTaskArn": {},
  "Status": {},
  "ReplicationTaskAssessmentRunCreationDate": {},
  "AssessmentProgress": {
    "IndividualAssessmentCount": {},
    "IndividualAssessmentCompletedCount": {}
  },
  "LastFailureMessage": {},
  "ServiceAccessRoleArn": {},
  "ResultLocationBucket": {},
  "ResultLocationFolder": {},
  "ResultEncryptionMode": {},
  "ResultKmsKeyArn": {},
  "AssessmentRunName": {}
}
```

<p>Provides information that describes a premigration assessment run that you have started using the <code>StartReplicationTaskAssessmentRun</code> operation.</p> <p>Some of the information appears based on other operations that can return the <code>ReplicationTaskAssessmentRun</code> object.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskAssessmentRunArn|object|false|none|none|
|ReplicationTaskArn|object|false|none|none|
|Status|object|false|none|none|
|ReplicationTaskAssessmentRunCreationDate|object|false|none|none|
|AssessmentProgress|object|false|none|none|
|LastFailureMessage|object|false|none|none|
|ServiceAccessRoleArn|object|false|none|none|
|ResultLocationBucket|object|false|none|none|
|ResultLocationFolder|object|false|none|none|
|ResultEncryptionMode|object|false|none|none|
|ResultKmsKeyArn|object|false|none|none|
|AssessmentRunName|object|false|none|none|

<h2 id="tocS_CannedAclForObjectsValue">CannedAclForObjectsValue</h2>
<!-- backwards compatibility -->
<a id="schemacannedaclforobjectsvalue"></a>
<a id="schema_CannedAclForObjectsValue"></a>
<a id="tocScannedaclforobjectsvalue"></a>
<a id="tocscannedaclforobjectsvalue"></a>

```json
"none"
```

<h2 id="tocS_TStamp">TStamp</h2>
<!-- backwards compatibility -->
<a id="schematstamp"></a>
<a id="schema_TStamp"></a>
<a id="tocStstamp"></a>
<a id="tocststamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CertificateWallet">CertificateWallet</h2>
<!-- backwards compatibility -->
<a id="schemacertificatewallet"></a>
<a id="schema_CertificateWallet"></a>
<a id="tocScertificatewallet"></a>
<a id="tocscertificatewallet"></a>

```json
"string"
```

<h2 id="tocS_IntegerOptional">IntegerOptional</h2>
<!-- backwards compatibility -->
<a id="schemaintegeroptional"></a>
<a id="schema_IntegerOptional"></a>
<a id="tocSintegeroptional"></a>
<a id="tocsintegeroptional"></a>

```json
0
```

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
{
  "CertificateIdentifier": {},
  "CertificateCreationDate": {},
  "CertificatePem": {},
  "CertificateWallet": {},
  "CertificateArn": {},
  "CertificateOwner": {},
  "ValidFromDate": {},
  "ValidToDate": {},
  "SigningAlgorithm": {},
  "KeyLength": {}
}
```

The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateIdentifier|object|false|none|none|
|CertificateCreationDate|object|false|none|none|
|CertificatePem|object|false|none|none|
|CertificateWallet|object|false|none|none|
|CertificateArn|object|false|none|none|
|CertificateOwner|object|false|none|none|
|ValidFromDate|object|false|none|none|
|ValidToDate|object|false|none|none|
|SigningAlgorithm|object|false|none|none|
|KeyLength|object|false|none|none|

<h2 id="tocS_CertificateList">CertificateList</h2>
<!-- backwards compatibility -->
<a id="schemacertificatelist"></a>
<a id="schema_CertificateList"></a>
<a id="tocScertificatelist"></a>
<a id="tocscertificatelist"></a>

```json
[
  {
    "CertificateIdentifier": {},
    "CertificateCreationDate": {},
    "CertificatePem": {},
    "CertificateWallet": {},
    "CertificateArn": {},
    "CertificateOwner": {},
    "ValidFromDate": {},
    "ValidToDate": {},
    "SigningAlgorithm": {},
    "KeyLength": {}
  }
]
```

<h2 id="tocS_CharLengthSemantics">CharLengthSemantics</h2>
<!-- backwards compatibility -->
<a id="schemacharlengthsemantics"></a>
<a id="schema_CharLengthSemantics"></a>
<a id="tocScharlengthsemantics"></a>
<a id="tocscharlengthsemantics"></a>

```json
"default"
```

<h2 id="tocS_CollectorStatus">CollectorStatus</h2>
<!-- backwards compatibility -->
<a id="schemacollectorstatus"></a>
<a id="schema_CollectorStatus"></a>
<a id="tocScollectorstatus"></a>
<a id="tocscollectorstatus"></a>

```json
"UNREGISTERED"
```

<h2 id="tocS_CollectorHealthCheck">CollectorHealthCheck</h2>
<!-- backwards compatibility -->
<a id="schemacollectorhealthcheck"></a>
<a id="schema_CollectorHealthCheck"></a>
<a id="tocScollectorhealthcheck"></a>
<a id="tocscollectorhealthcheck"></a>

```json
{
  "CollectorStatus": {},
  "LocalCollectorS3Access": {},
  "WebCollectorS3Access": {},
  "WebCollectorGrantedRoleBasedAccess": {}
}
```

Describes the last Fleet Advisor collector health check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectorStatus|object|false|none|none|
|LocalCollectorS3Access|object|false|none|none|
|WebCollectorS3Access|object|false|none|none|
|WebCollectorGrantedRoleBasedAccess|object|false|none|none|

<h2 id="tocS_VersionStatus">VersionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaversionstatus"></a>
<a id="schema_VersionStatus"></a>
<a id="tocSversionstatus"></a>
<a id="tocsversionstatus"></a>

```json
"UP_TO_DATE"
```

<h2 id="tocS_InventoryData">InventoryData</h2>
<!-- backwards compatibility -->
<a id="schemainventorydata"></a>
<a id="schema_InventoryData"></a>
<a id="tocSinventorydata"></a>
<a id="tocsinventorydata"></a>

```json
{
  "NumberOfDatabases": {},
  "NumberOfSchemas": {}
}
```

Describes a Fleet Advisor collector inventory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NumberOfDatabases|object|false|none|none|
|NumberOfSchemas|object|false|none|none|

<h2 id="tocS_CollectorResponse">CollectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacollectorresponse"></a>
<a id="schema_CollectorResponse"></a>
<a id="tocScollectorresponse"></a>
<a id="tocscollectorresponse"></a>

```json
{
  "CollectorReferencedId": {},
  "CollectorName": {},
  "CollectorVersion": {},
  "VersionStatus": {},
  "Description": {},
  "S3BucketName": {},
  "ServiceAccessRoleArn": {},
  "CollectorHealthCheck": {
    "CollectorStatus": {},
    "LocalCollectorS3Access": {},
    "WebCollectorS3Access": {},
    "WebCollectorGrantedRoleBasedAccess": {}
  },
  "LastDataReceived": {},
  "RegisteredDate": {},
  "CreatedDate": {},
  "ModifiedDate": {},
  "InventoryData": {
    "NumberOfDatabases": {},
    "NumberOfSchemas": {}
  }
}
```

Describes a Fleet Advisor collector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectorReferencedId|object|false|none|none|
|CollectorName|object|false|none|none|
|CollectorVersion|object|false|none|none|
|VersionStatus|object|false|none|none|
|Description|object|false|none|none|
|S3BucketName|object|false|none|none|
|ServiceAccessRoleArn|object|false|none|none|
|CollectorHealthCheck|[CollectorHealthCheck](#schemacollectorhealthcheck)|false|none|Describes the last Fleet Advisor collector health check.|
|LastDataReceived|object|false|none|none|
|RegisteredDate|object|false|none|none|
|CreatedDate|object|false|none|none|
|ModifiedDate|object|false|none|none|
|InventoryData|[InventoryData](#schemainventorydata)|false|none|Describes a Fleet Advisor collector inventory.|

<h2 id="tocS_CollectorResponses">CollectorResponses</h2>
<!-- backwards compatibility -->
<a id="schemacollectorresponses"></a>
<a id="schema_CollectorResponses"></a>
<a id="tocScollectorresponses"></a>
<a id="tocscollectorresponses"></a>

```json
[
  {
    "CollectorReferencedId": {},
    "CollectorName": {},
    "CollectorVersion": {},
    "VersionStatus": {},
    "Description": {},
    "S3BucketName": {},
    "ServiceAccessRoleArn": {},
    "CollectorHealthCheck": {
      "CollectorStatus": {},
      "LocalCollectorS3Access": {},
      "WebCollectorS3Access": {},
      "WebCollectorGrantedRoleBasedAccess": {}
    },
    "LastDataReceived": {},
    "RegisteredDate": {},
    "CreatedDate": {},
    "ModifiedDate": {},
    "InventoryData": {
      "NumberOfDatabases": {},
      "NumberOfSchemas": {}
    }
  }
]
```

<h2 id="tocS_CollectorShortInfoResponse">CollectorShortInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemacollectorshortinforesponse"></a>
<a id="schema_CollectorShortInfoResponse"></a>
<a id="tocScollectorshortinforesponse"></a>
<a id="tocscollectorshortinforesponse"></a>

```json
{
  "CollectorReferencedId": {},
  "CollectorName": {}
}
```

Briefly describes a Fleet Advisor collector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectorReferencedId|object|false|none|none|
|CollectorName|object|false|none|none|

<h2 id="tocS_CollectorsList">CollectorsList</h2>
<!-- backwards compatibility -->
<a id="schemacollectorslist"></a>
<a id="schema_CollectorsList"></a>
<a id="tocScollectorslist"></a>
<a id="tocscollectorslist"></a>

```json
[
  {
    "CollectorReferencedId": {},
    "CollectorName": {}
  }
]
```

<h2 id="tocS_CompressionTypeValue">CompressionTypeValue</h2>
<!-- backwards compatibility -->
<a id="schemacompressiontypevalue"></a>
<a id="schema_CompressionTypeValue"></a>
<a id="tocScompressiontypevalue"></a>
<a id="tocscompressiontypevalue"></a>

```json
"none"
```

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "ReplicationInstanceArn": {},
  "EndpointArn": {},
  "Status": {},
  "LastFailureMessage": {},
  "EndpointIdentifier": {},
  "ReplicationInstanceIdentifier": {}
}
```

Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstanceArn|object|false|none|none|
|EndpointArn|object|false|none|none|
|Status|object|false|none|none|
|LastFailureMessage|object|false|none|none|
|EndpointIdentifier|object|false|none|none|
|ReplicationInstanceIdentifier|object|false|none|none|

<h2 id="tocS_ConnectionList">ConnectionList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionlist"></a>
<a id="schema_ConnectionList"></a>
<a id="tocSconnectionlist"></a>
<a id="tocsconnectionlist"></a>

```json
[
  {
    "ReplicationInstanceArn": {},
    "EndpointArn": {},
    "Status": {},
    "LastFailureMessage": {},
    "EndpointIdentifier": {},
    "ReplicationInstanceIdentifier": {}
  }
]
```

<h2 id="tocS_ReplicationEndpointTypeValue">ReplicationEndpointTypeValue</h2>
<!-- backwards compatibility -->
<a id="schemareplicationendpointtypevalue"></a>
<a id="schema_ReplicationEndpointTypeValue"></a>
<a id="tocSreplicationendpointtypevalue"></a>
<a id="tocsreplicationendpointtypevalue"></a>

```json
"source"
```

<h2 id="tocS_SecretString">SecretString</h2>
<!-- backwards compatibility -->
<a id="schemasecretstring"></a>
<a id="schema_SecretString"></a>
<a id="tocSsecretstring"></a>
<a id="tocssecretstring"></a>

```json
"password"
```

<h2 id="tocS_DmsSslModeValue">DmsSslModeValue</h2>
<!-- backwards compatibility -->
<a id="schemadmssslmodevalue"></a>
<a id="schema_DmsSslModeValue"></a>
<a id="tocSdmssslmodevalue"></a>
<a id="tocsdmssslmodevalue"></a>

```json
"none"
```

<h2 id="tocS_DynamoDbSettings">DynamoDbSettings</h2>
<!-- backwards compatibility -->
<a id="schemadynamodbsettings"></a>
<a id="schema_DynamoDbSettings"></a>
<a id="tocSdynamodbsettings"></a>
<a id="tocsdynamodbsettings"></a>

```json
{
  "ServiceAccessRoleArn": {}
}
```

Provides the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceAccessRoleArn|object|true|none|none|

<h2 id="tocS_S3Settings">S3Settings</h2>
<!-- backwards compatibility -->
<a id="schemas3settings"></a>
<a id="schema_S3Settings"></a>
<a id="tocSs3settings"></a>
<a id="tocss3settings"></a>

```json
{
  "ServiceAccessRoleArn": {},
  "ExternalTableDefinition": {},
  "CsvRowDelimiter": {},
  "CsvDelimiter": {},
  "BucketFolder": {},
  "BucketName": {},
  "CompressionType": {},
  "EncryptionMode": {},
  "ServerSideEncryptionKmsKeyId": {},
  "DataFormat": {},
  "EncodingType": {},
  "DictPageSizeLimit": {},
  "RowGroupLength": {},
  "DataPageSize": {},
  "ParquetVersion": {},
  "EnableStatistics": {},
  "IncludeOpForFullLoad": {},
  "CdcInsertsOnly": {},
  "TimestampColumnName": {},
  "ParquetTimestampInMillisecond": {},
  "CdcInsertsAndUpdates": {},
  "DatePartitionEnabled": {},
  "DatePartitionSequence": {},
  "DatePartitionDelimiter": {},
  "UseCsvNoSupValue": {},
  "CsvNoSupValue": {},
  "PreserveTransactions": {},
  "CdcPath": {},
  "UseTaskStartTimeForFullLoadTimestamp": {},
  "CannedAclForObjects": {},
  "AddColumnName": {},
  "CdcMaxBatchInterval": {},
  "CdcMinFileSize": {},
  "CsvNullValue": {},
  "IgnoreHeaderRows": {},
  "MaxFileSize": {},
  "Rfc4180": {},
  "DatePartitionTimezone": {},
  "AddTrailingPaddingCharacter": {},
  "ExpectedBucketOwner": {},
  "GlueCatalogGeneration": {}
}
```

Settings for exporting data to Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceAccessRoleArn|object|false|none|none|
|ExternalTableDefinition|object|false|none|none|
|CsvRowDelimiter|object|false|none|none|
|CsvDelimiter|object|false|none|none|
|BucketFolder|object|false|none|none|
|BucketName|object|false|none|none|
|CompressionType|object|false|none|none|
|EncryptionMode|object|false|none|none|
|ServerSideEncryptionKmsKeyId|object|false|none|none|
|DataFormat|object|false|none|none|
|EncodingType|object|false|none|none|
|DictPageSizeLimit|object|false|none|none|
|RowGroupLength|object|false|none|none|
|DataPageSize|object|false|none|none|
|ParquetVersion|object|false|none|none|
|EnableStatistics|object|false|none|none|
|IncludeOpForFullLoad|object|false|none|none|
|CdcInsertsOnly|object|false|none|none|
|TimestampColumnName|object|false|none|none|
|ParquetTimestampInMillisecond|object|false|none|none|
|CdcInsertsAndUpdates|object|false|none|none|
|DatePartitionEnabled|object|false|none|none|
|DatePartitionSequence|object|false|none|none|
|DatePartitionDelimiter|object|false|none|none|
|UseCsvNoSupValue|object|false|none|none|
|CsvNoSupValue|object|false|none|none|
|PreserveTransactions|object|false|none|none|
|CdcPath|object|false|none|none|
|UseTaskStartTimeForFullLoadTimestamp|object|false|none|none|
|CannedAclForObjects|object|false|none|none|
|AddColumnName|object|false|none|none|
|CdcMaxBatchInterval|object|false|none|none|
|CdcMinFileSize|object|false|none|none|
|CsvNullValue|object|false|none|none|
|IgnoreHeaderRows|object|false|none|none|
|MaxFileSize|object|false|none|none|
|Rfc4180|object|false|none|none|
|DatePartitionTimezone|object|false|none|none|
|AddTrailingPaddingCharacter|object|false|none|none|
|ExpectedBucketOwner|object|false|none|none|
|GlueCatalogGeneration|object|false|none|none|

<h2 id="tocS_DmsTransferSettings">DmsTransferSettings</h2>
<!-- backwards compatibility -->
<a id="schemadmstransfersettings"></a>
<a id="schema_DmsTransferSettings"></a>
<a id="tocSdmstransfersettings"></a>
<a id="tocsdmstransfersettings"></a>

```json
{
  "ServiceAccessRoleArn": {},
  "BucketName": {}
}
```

 The settings in JSON format for the DMS Transfer type source endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceAccessRoleArn|object|false|none|none|
|BucketName|object|false|none|none|

<h2 id="tocS_MongoDbSettings">MongoDbSettings</h2>
<!-- backwards compatibility -->
<a id="schemamongodbsettings"></a>
<a id="schema_MongoDbSettings"></a>
<a id="tocSmongodbsettings"></a>
<a id="tocsmongodbsettings"></a>

```json
{
  "Username": {},
  "Password": {},
  "ServerName": {},
  "Port": {},
  "DatabaseName": {},
  "AuthType": {},
  "AuthMechanism": {},
  "NestingLevel": {},
  "ExtractDocId": {},
  "DocsToInvestigate": {},
  "AuthSource": {},
  "KmsKeyId": {},
  "SecretsManagerAccessRoleArn": {},
  "SecretsManagerSecretId": {}
}
```

Provides information that defines a MongoDB endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|false|none|none|
|Password|object|false|none|none|
|ServerName|object|false|none|none|
|Port|object|false|none|none|
|DatabaseName|object|false|none|none|
|AuthType|object|false|none|none|
|AuthMechanism|object|false|none|none|
|NestingLevel|object|false|none|none|
|ExtractDocId|object|false|none|none|
|DocsToInvestigate|object|false|none|none|
|AuthSource|object|false|none|none|
|KmsKeyId|object|false|none|none|
|SecretsManagerAccessRoleArn|object|false|none|none|
|SecretsManagerSecretId|object|false|none|none|

<h2 id="tocS_KinesisSettings">KinesisSettings</h2>
<!-- backwards compatibility -->
<a id="schemakinesissettings"></a>
<a id="schema_KinesisSettings"></a>
<a id="tocSkinesissettings"></a>
<a id="tocskinesissettings"></a>

```json
{
  "StreamArn": {},
  "MessageFormat": {},
  "ServiceAccessRoleArn": {},
  "IncludeTransactionDetails": {},
  "IncludePartitionValue": {},
  "PartitionIncludeSchemaTable": {},
  "IncludeTableAlterOperations": {},
  "IncludeControlDetails": {},
  "IncludeNullAndEmpty": {},
  "NoHexPrefix": {}
}
```

Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamArn|object|false|none|none|
|MessageFormat|object|false|none|none|
|ServiceAccessRoleArn|object|false|none|none|
|IncludeTransactionDetails|object|false|none|none|
|IncludePartitionValue|object|false|none|none|
|PartitionIncludeSchemaTable|object|false|none|none|
|IncludeTableAlterOperations|object|false|none|none|
|IncludeControlDetails|object|false|none|none|
|IncludeNullAndEmpty|object|false|none|none|
|NoHexPrefix|object|false|none|none|

<h2 id="tocS_KafkaSettings">KafkaSettings</h2>
<!-- backwards compatibility -->
<a id="schemakafkasettings"></a>
<a id="schema_KafkaSettings"></a>
<a id="tocSkafkasettings"></a>
<a id="tocskafkasettings"></a>

```json
{
  "Broker": {},
  "Topic": {},
  "MessageFormat": {},
  "IncludeTransactionDetails": {},
  "IncludePartitionValue": {},
  "PartitionIncludeSchemaTable": {},
  "IncludeTableAlterOperations": {},
  "IncludeControlDetails": {},
  "MessageMaxBytes": {},
  "IncludeNullAndEmpty": {},
  "SecurityProtocol": {},
  "SslClientCertificateArn": {},
  "SslClientKeyArn": {},
  "SslClientKeyPassword": {},
  "SslCaCertificateArn": {},
  "SaslUsername": {},
  "SaslPassword": {},
  "NoHexPrefix": {},
  "SaslMechanism": {}
}
```

Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Broker|object|false|none|none|
|Topic|object|false|none|none|
|MessageFormat|object|false|none|none|
|IncludeTransactionDetails|object|false|none|none|
|IncludePartitionValue|object|false|none|none|
|PartitionIncludeSchemaTable|object|false|none|none|
|IncludeTableAlterOperations|object|false|none|none|
|IncludeControlDetails|object|false|none|none|
|MessageMaxBytes|object|false|none|none|
|IncludeNullAndEmpty|object|false|none|none|
|SecurityProtocol|object|false|none|none|
|SslClientCertificateArn|object|false|none|none|
|SslClientKeyArn|object|false|none|none|
|SslClientKeyPassword|object|false|none|none|
|SslCaCertificateArn|object|false|none|none|
|SaslUsername|object|false|none|none|
|SaslPassword|object|false|none|none|
|NoHexPrefix|object|false|none|none|
|SaslMechanism|object|false|none|none|

<h2 id="tocS_ElasticsearchSettings">ElasticsearchSettings</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchsettings"></a>
<a id="schema_ElasticsearchSettings"></a>
<a id="tocSelasticsearchsettings"></a>
<a id="tocselasticsearchsettings"></a>

```json
{
  "ServiceAccessRoleArn": {},
  "EndpointUri": {},
  "FullLoadErrorPercentage": {},
  "ErrorRetryDuration": {},
  "UseNewMappingType": {}
}
```

Provides information that defines an OpenSearch endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceAccessRoleArn|object|true|none|none|
|EndpointUri|object|true|none|none|
|FullLoadErrorPercentage|object|false|none|none|
|ErrorRetryDuration|object|false|none|none|
|UseNewMappingType|object|false|none|none|

<h2 id="tocS_NeptuneSettings">NeptuneSettings</h2>
<!-- backwards compatibility -->
<a id="schemaneptunesettings"></a>
<a id="schema_NeptuneSettings"></a>
<a id="tocSneptunesettings"></a>
<a id="tocsneptunesettings"></a>

```json
{
  "ServiceAccessRoleArn": {},
  "S3BucketName": {},
  "S3BucketFolder": {},
  "ErrorRetryDuration": {},
  "MaxFileSize": {},
  "MaxRetryCount": {},
  "IamAuthEnabled": {}
}
```

Provides information that defines an Amazon Neptune endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceAccessRoleArn|object|false|none|none|
|S3BucketName|object|true|none|none|
|S3BucketFolder|object|true|none|none|
|ErrorRetryDuration|object|false|none|none|
|MaxFileSize|object|false|none|none|
|MaxRetryCount|object|false|none|none|
|IamAuthEnabled|object|false|none|none|

<h2 id="tocS_RedshiftSettings">RedshiftSettings</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftsettings"></a>
<a id="schema_RedshiftSettings"></a>
<a id="tocSredshiftsettings"></a>
<a id="tocsredshiftsettings"></a>

```json
{
  "AcceptAnyDate": {},
  "AfterConnectScript": {},
  "BucketFolder": {},
  "BucketName": {},
  "CaseSensitiveNames": {},
  "CompUpdate": {},
  "ConnectionTimeout": {},
  "DatabaseName": {},
  "DateFormat": {},
  "EmptyAsNull": {},
  "EncryptionMode": {},
  "ExplicitIds": {},
  "FileTransferUploadStreams": {},
  "LoadTimeout": {},
  "MaxFileSize": {},
  "Password": {},
  "Port": {},
  "RemoveQuotes": {},
  "ReplaceInvalidChars": {},
  "ReplaceChars": {},
  "ServerName": {},
  "ServiceAccessRoleArn": {},
  "ServerSideEncryptionKmsKeyId": {},
  "TimeFormat": {},
  "TrimBlanks": {},
  "TruncateColumns": {},
  "Username": {},
  "WriteBufferSize": {},
  "SecretsManagerAccessRoleArn": {},
  "SecretsManagerSecretId": {},
  "MapBooleanAsBoolean": {}
}
```

Provides information that defines an Amazon Redshift endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptAnyDate|object|false|none|none|
|AfterConnectScript|object|false|none|none|
|BucketFolder|object|false|none|none|
|BucketName|object|false|none|none|
|CaseSensitiveNames|object|false|none|none|
|CompUpdate|object|false|none|none|
|ConnectionTimeout|object|false|none|none|
|DatabaseName|object|false|none|none|
|DateFormat|object|false|none|none|
|EmptyAsNull|object|false|none|none|
|EncryptionMode|object|false|none|none|
|ExplicitIds|object|false|none|none|
|FileTransferUploadStreams|object|false|none|none|
|LoadTimeout|object|false|none|none|
|MaxFileSize|object|false|none|none|
|Password|object|false|none|none|
|Port|object|false|none|none|
|RemoveQuotes|object|false|none|none|
|ReplaceInvalidChars|object|false|none|none|
|ReplaceChars|object|false|none|none|
|ServerName|object|false|none|none|
|ServiceAccessRoleArn|object|false|none|none|
|ServerSideEncryptionKmsKeyId|object|false|none|none|
|TimeFormat|object|false|none|none|
|TrimBlanks|object|false|none|none|
|TruncateColumns|object|false|none|none|
|Username|object|false|none|none|
|WriteBufferSize|object|false|none|none|
|SecretsManagerAccessRoleArn|object|false|none|none|
|SecretsManagerSecretId|object|false|none|none|
|MapBooleanAsBoolean|object|false|none|none|

<h2 id="tocS_PostgreSQLSettings">PostgreSQLSettings</h2>
<!-- backwards compatibility -->
<a id="schemapostgresqlsettings"></a>
<a id="schema_PostgreSQLSettings"></a>
<a id="tocSpostgresqlsettings"></a>
<a id="tocspostgresqlsettings"></a>

```json
{
  "AfterConnectScript": {},
  "CaptureDdls": {},
  "MaxFileSize": {},
  "DatabaseName": {},
  "DdlArtifactsSchema": {},
  "ExecuteTimeout": {},
  "FailTasksOnLobTruncation": {},
  "HeartbeatEnable": {},
  "HeartbeatSchema": {},
  "HeartbeatFrequency": {},
  "Password": {},
  "Port": {},
  "ServerName": {},
  "Username": {},
  "SlotName": {},
  "PluginName": {},
  "SecretsManagerAccessRoleArn": {},
  "SecretsManagerSecretId": {},
  "TrimSpaceInChar": {},
  "MapBooleanAsBoolean": {}
}
```

Provides information that defines a PostgreSQL endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AfterConnectScript|object|false|none|none|
|CaptureDdls|object|false|none|none|
|MaxFileSize|object|false|none|none|
|DatabaseName|object|false|none|none|
|DdlArtifactsSchema|object|false|none|none|
|ExecuteTimeout|object|false|none|none|
|FailTasksOnLobTruncation|object|false|none|none|
|HeartbeatEnable|object|false|none|none|
|HeartbeatSchema|object|false|none|none|
|HeartbeatFrequency|object|false|none|none|
|Password|object|false|none|none|
|Port|object|false|none|none|
|ServerName|object|false|none|none|
|Username|object|false|none|none|
|SlotName|object|false|none|none|
|PluginName|object|false|none|none|
|SecretsManagerAccessRoleArn|object|false|none|none|
|SecretsManagerSecretId|object|false|none|none|
|TrimSpaceInChar|object|false|none|none|
|MapBooleanAsBoolean|object|false|none|none|

<h2 id="tocS_MySQLSettings">MySQLSettings</h2>
<!-- backwards compatibility -->
<a id="schemamysqlsettings"></a>
<a id="schema_MySQLSettings"></a>
<a id="tocSmysqlsettings"></a>
<a id="tocsmysqlsettings"></a>

```json
{
  "AfterConnectScript": {},
  "CleanSourceMetadataOnMismatch": {},
  "DatabaseName": {},
  "EventsPollInterval": {},
  "TargetDbType": {},
  "MaxFileSize": {},
  "ParallelLoadThreads": {},
  "Password": {},
  "Port": {},
  "ServerName": {},
  "ServerTimezone": {},
  "Username": {},
  "SecretsManagerAccessRoleArn": {},
  "SecretsManagerSecretId": {}
}
```

Provides information that defines a MySQL endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AfterConnectScript|object|false|none|none|
|CleanSourceMetadataOnMismatch|object|false|none|none|
|DatabaseName|object|false|none|none|
|EventsPollInterval|object|false|none|none|
|TargetDbType|object|false|none|none|
|MaxFileSize|object|false|none|none|
|ParallelLoadThreads|object|false|none|none|
|Password|object|false|none|none|
|Port|object|false|none|none|
|ServerName|object|false|none|none|
|ServerTimezone|object|false|none|none|
|Username|object|false|none|none|
|SecretsManagerAccessRoleArn|object|false|none|none|
|SecretsManagerSecretId|object|false|none|none|

<h2 id="tocS_OracleSettings">OracleSettings</h2>
<!-- backwards compatibility -->
<a id="schemaoraclesettings"></a>
<a id="schema_OracleSettings"></a>
<a id="tocSoraclesettings"></a>
<a id="tocsoraclesettings"></a>

```json
{
  "AddSupplementalLogging": {},
  "ArchivedLogDestId": {},
  "AdditionalArchivedLogDestId": {},
  "ExtraArchivedLogDestIds": {},
  "AllowSelectNestedTables": {},
  "ParallelAsmReadThreads": {},
  "ReadAheadBlocks": {},
  "AccessAlternateDirectly": {},
  "UseAlternateFolderForOnline": {},
  "OraclePathPrefix": {},
  "UsePathPrefix": {},
  "ReplacePathPrefix": {},
  "EnableHomogenousTablespace": {},
  "DirectPathNoLog": {},
  "ArchivedLogsOnly": {},
  "AsmPassword": {},
  "AsmServer": {},
  "AsmUser": {},
  "CharLengthSemantics": {},
  "DatabaseName": {},
  "DirectPathParallelLoad": {},
  "FailTasksOnLobTruncation": {},
  "NumberDatatypeScale": {},
  "Password": {},
  "Port": {},
  "ReadTableSpaceName": {},
  "RetryInterval": {},
  "SecurityDbEncryption": {},
  "SecurityDbEncryptionName": {},
  "ServerName": {},
  "SpatialDataOptionToGeoJsonFunctionName": {},
  "StandbyDelayTime": {},
  "Username": {},
  "UseBFile": {},
  "UseDirectPathFullLoad": {},
  "UseLogminerReader": {},
  "SecretsManagerAccessRoleArn": {},
  "SecretsManagerSecretId": {},
  "SecretsManagerOracleAsmAccessRoleArn": {},
  "SecretsManagerOracleAsmSecretId": {},
  "TrimSpaceInChar": {},
  "ConvertTimestampWithZoneToUTC": {}
}
```

Provides information that defines an Oracle endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddSupplementalLogging|object|false|none|none|
|ArchivedLogDestId|object|false|none|none|
|AdditionalArchivedLogDestId|object|false|none|none|
|ExtraArchivedLogDestIds|object|false|none|none|
|AllowSelectNestedTables|object|false|none|none|
|ParallelAsmReadThreads|object|false|none|none|
|ReadAheadBlocks|object|false|none|none|
|AccessAlternateDirectly|object|false|none|none|
|UseAlternateFolderForOnline|object|false|none|none|
|OraclePathPrefix|object|false|none|none|
|UsePathPrefix|object|false|none|none|
|ReplacePathPrefix|object|false|none|none|
|EnableHomogenousTablespace|object|false|none|none|
|DirectPathNoLog|object|false|none|none|
|ArchivedLogsOnly|object|false|none|none|
|AsmPassword|object|false|none|none|
|AsmServer|object|false|none|none|
|AsmUser|object|false|none|none|
|CharLengthSemantics|object|false|none|none|
|DatabaseName|object|false|none|none|
|DirectPathParallelLoad|object|false|none|none|
|FailTasksOnLobTruncation|object|false|none|none|
|NumberDatatypeScale|object|false|none|none|
|Password|object|false|none|none|
|Port|object|false|none|none|
|ReadTableSpaceName|object|false|none|none|
|RetryInterval|object|false|none|none|
|SecurityDbEncryption|object|false|none|none|
|SecurityDbEncryptionName|object|false|none|none|
|ServerName|object|false|none|none|
|SpatialDataOptionToGeoJsonFunctionName|object|false|none|none|
|StandbyDelayTime|object|false|none|none|
|Username|object|false|none|none|
|UseBFile|object|false|none|none|
|UseDirectPathFullLoad|object|false|none|none|
|UseLogminerReader|object|false|none|none|
|SecretsManagerAccessRoleArn|object|false|none|none|
|SecretsManagerSecretId|object|false|none|none|
|SecretsManagerOracleAsmAccessRoleArn|object|false|none|none|
|SecretsManagerOracleAsmSecretId|object|false|none|none|
|TrimSpaceInChar|object|false|none|none|
|ConvertTimestampWithZoneToUTC|object|false|none|none|

<h2 id="tocS_SybaseSettings">SybaseSettings</h2>
<!-- backwards compatibility -->
<a id="schemasybasesettings"></a>
<a id="schema_SybaseSettings"></a>
<a id="tocSsybasesettings"></a>
<a id="tocssybasesettings"></a>

```json
{
  "DatabaseName": {},
  "Password": {},
  "Port": {},
  "ServerName": {},
  "Username": {},
  "SecretsManagerAccessRoleArn": {},
  "SecretsManagerSecretId": {}
}
```

Provides information that defines a SAP ASE endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|false|none|none|
|Password|object|false|none|none|
|Port|object|false|none|none|
|ServerName|object|false|none|none|
|Username|object|false|none|none|
|SecretsManagerAccessRoleArn|object|false|none|none|
|SecretsManagerSecretId|object|false|none|none|

<h2 id="tocS_MicrosoftSQLServerSettings">MicrosoftSQLServerSettings</h2>
<!-- backwards compatibility -->
<a id="schemamicrosoftsqlserversettings"></a>
<a id="schema_MicrosoftSQLServerSettings"></a>
<a id="tocSmicrosoftsqlserversettings"></a>
<a id="tocsmicrosoftsqlserversettings"></a>

```json
{
  "Port": {},
  "BcpPacketSize": {},
  "DatabaseName": {},
  "ControlTablesFileGroup": {},
  "Password": {},
  "QuerySingleAlwaysOnNode": {},
  "ReadBackupOnly": {},
  "SafeguardPolicy": {},
  "ServerName": {},
  "Username": {},
  "UseBcpFullLoad": {},
  "UseThirdPartyBackupDevice": {},
  "SecretsManagerAccessRoleArn": {},
  "SecretsManagerSecretId": {},
  "TrimSpaceInChar": {},
  "TlogAccessMode": {},
  "ForceLobLookup": {}
}
```

Provides information that defines a Microsoft SQL Server endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Port|object|false|none|none|
|BcpPacketSize|object|false|none|none|
|DatabaseName|object|false|none|none|
|ControlTablesFileGroup|object|false|none|none|
|Password|object|false|none|none|
|QuerySingleAlwaysOnNode|object|false|none|none|
|ReadBackupOnly|object|false|none|none|
|SafeguardPolicy|object|false|none|none|
|ServerName|object|false|none|none|
|Username|object|false|none|none|
|UseBcpFullLoad|object|false|none|none|
|UseThirdPartyBackupDevice|object|false|none|none|
|SecretsManagerAccessRoleArn|object|false|none|none|
|SecretsManagerSecretId|object|false|none|none|
|TrimSpaceInChar|object|false|none|none|
|TlogAccessMode|object|false|none|none|
|ForceLobLookup|object|false|none|none|

<h2 id="tocS_IBMDb2Settings">IBMDb2Settings</h2>
<!-- backwards compatibility -->
<a id="schemaibmdb2settings"></a>
<a id="schema_IBMDb2Settings"></a>
<a id="tocSibmdb2settings"></a>
<a id="tocsibmdb2settings"></a>

```json
{
  "DatabaseName": {},
  "Password": {},
  "Port": {},
  "ServerName": {},
  "SetDataCaptureChanges": {},
  "CurrentLsn": {},
  "MaxKBytesPerRead": {},
  "Username": {},
  "SecretsManagerAccessRoleArn": {},
  "SecretsManagerSecretId": {}
}
```

Provides information that defines an IBM Db2 LUW endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|object|false|none|none|
|Password|object|false|none|none|
|Port|object|false|none|none|
|ServerName|object|false|none|none|
|SetDataCaptureChanges|object|false|none|none|
|CurrentLsn|object|false|none|none|
|MaxKBytesPerRead|object|false|none|none|
|Username|object|false|none|none|
|SecretsManagerAccessRoleArn|object|false|none|none|
|SecretsManagerSecretId|object|false|none|none|

<h2 id="tocS_DocDbSettings">DocDbSettings</h2>
<!-- backwards compatibility -->
<a id="schemadocdbsettings"></a>
<a id="schema_DocDbSettings"></a>
<a id="tocSdocdbsettings"></a>
<a id="tocsdocdbsettings"></a>

```json
{
  "Username": {},
  "Password": {},
  "ServerName": {},
  "Port": {},
  "DatabaseName": {},
  "NestingLevel": {},
  "ExtractDocId": {},
  "DocsToInvestigate": {},
  "KmsKeyId": {},
  "SecretsManagerAccessRoleArn": {},
  "SecretsManagerSecretId": {}
}
```

Provides information that defines a DocumentDB endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|object|false|none|none|
|Password|object|false|none|none|
|ServerName|object|false|none|none|
|Port|object|false|none|none|
|DatabaseName|object|false|none|none|
|NestingLevel|object|false|none|none|
|ExtractDocId|object|false|none|none|
|DocsToInvestigate|object|false|none|none|
|KmsKeyId|object|false|none|none|
|SecretsManagerAccessRoleArn|object|false|none|none|
|SecretsManagerSecretId|object|false|none|none|

<h2 id="tocS_RedisSettings">RedisSettings</h2>
<!-- backwards compatibility -->
<a id="schemaredissettings"></a>
<a id="schema_RedisSettings"></a>
<a id="tocSredissettings"></a>
<a id="tocsredissettings"></a>

```json
{
  "ServerName": {},
  "Port": {},
  "SslSecurityProtocol": {},
  "AuthType": {},
  "AuthUserName": {},
  "AuthPassword": {},
  "SslCaCertificateArn": {}
}
```

Provides information that defines a Redis target endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerName|object|true|none|none|
|Port|object|true|none|none|
|SslSecurityProtocol|object|false|none|none|
|AuthType|object|false|none|none|
|AuthUserName|object|false|none|none|
|AuthPassword|object|false|none|none|
|SslCaCertificateArn|object|false|none|none|

<h2 id="tocS_GcpMySQLSettings">GcpMySQLSettings</h2>
<!-- backwards compatibility -->
<a id="schemagcpmysqlsettings"></a>
<a id="schema_GcpMySQLSettings"></a>
<a id="tocSgcpmysqlsettings"></a>
<a id="tocsgcpmysqlsettings"></a>

```json
{
  "AfterConnectScript": {},
  "CleanSourceMetadataOnMismatch": {},
  "DatabaseName": {},
  "EventsPollInterval": {},
  "TargetDbType": {},
  "MaxFileSize": {},
  "ParallelLoadThreads": {},
  "Password": {},
  "Port": {},
  "ServerName": {},
  "ServerTimezone": {},
  "Username": {},
  "SecretsManagerAccessRoleArn": {},
  "SecretsManagerSecretId": {}
}
```

Settings in JSON format for the source GCP MySQL endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AfterConnectScript|object|false|none|none|
|CleanSourceMetadataOnMismatch|object|false|none|none|
|DatabaseName|object|false|none|none|
|EventsPollInterval|object|false|none|none|
|TargetDbType|object|false|none|none|
|MaxFileSize|object|false|none|none|
|ParallelLoadThreads|object|false|none|none|
|Password|object|false|none|none|
|Port|object|false|none|none|
|ServerName|object|false|none|none|
|ServerTimezone|object|false|none|none|
|Username|object|false|none|none|
|SecretsManagerAccessRoleArn|object|false|none|none|
|SecretsManagerSecretId|object|false|none|none|

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "EndpointIdentifier": {},
  "EndpointType": {},
  "EngineName": {},
  "EngineDisplayName": {},
  "Username": {},
  "ServerName": {},
  "Port": {},
  "DatabaseName": {},
  "ExtraConnectionAttributes": {},
  "Status": {},
  "KmsKeyId": {},
  "EndpointArn": {},
  "CertificateArn": {},
  "SslMode": {},
  "ServiceAccessRoleArn": {},
  "ExternalTableDefinition": {},
  "ExternalId": {},
  "DynamoDbSettings": {
    "ServiceAccessRoleArn": {}
  },
  "S3Settings": {
    "ServiceAccessRoleArn": {},
    "ExternalTableDefinition": {},
    "CsvRowDelimiter": {},
    "CsvDelimiter": {},
    "BucketFolder": {},
    "BucketName": {},
    "CompressionType": {},
    "EncryptionMode": {},
    "ServerSideEncryptionKmsKeyId": {},
    "DataFormat": {},
    "EncodingType": {},
    "DictPageSizeLimit": {},
    "RowGroupLength": {},
    "DataPageSize": {},
    "ParquetVersion": {},
    "EnableStatistics": {},
    "IncludeOpForFullLoad": {},
    "CdcInsertsOnly": {},
    "TimestampColumnName": {},
    "ParquetTimestampInMillisecond": {},
    "CdcInsertsAndUpdates": {},
    "DatePartitionEnabled": {},
    "DatePartitionSequence": {},
    "DatePartitionDelimiter": {},
    "UseCsvNoSupValue": {},
    "CsvNoSupValue": {},
    "PreserveTransactions": {},
    "CdcPath": {},
    "UseTaskStartTimeForFullLoadTimestamp": {},
    "CannedAclForObjects": {},
    "AddColumnName": {},
    "CdcMaxBatchInterval": {},
    "CdcMinFileSize": {},
    "CsvNullValue": {},
    "IgnoreHeaderRows": {},
    "MaxFileSize": {},
    "Rfc4180": {},
    "DatePartitionTimezone": {},
    "AddTrailingPaddingCharacter": {},
    "ExpectedBucketOwner": {},
    "GlueCatalogGeneration": {}
  },
  "DmsTransferSettings": {
    "ServiceAccessRoleArn": {},
    "BucketName": {}
  },
  "MongoDbSettings": {
    "Username": {},
    "Password": {},
    "ServerName": {},
    "Port": {},
    "DatabaseName": {},
    "AuthType": {},
    "AuthMechanism": {},
    "NestingLevel": {},
    "ExtractDocId": {},
    "DocsToInvestigate": {},
    "AuthSource": {},
    "KmsKeyId": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "KinesisSettings": {
    "StreamArn": {},
    "MessageFormat": {},
    "ServiceAccessRoleArn": {},
    "IncludeTransactionDetails": {},
    "IncludePartitionValue": {},
    "PartitionIncludeSchemaTable": {},
    "IncludeTableAlterOperations": {},
    "IncludeControlDetails": {},
    "IncludeNullAndEmpty": {},
    "NoHexPrefix": {}
  },
  "KafkaSettings": {
    "Broker": {},
    "Topic": {},
    "MessageFormat": {},
    "IncludeTransactionDetails": {},
    "IncludePartitionValue": {},
    "PartitionIncludeSchemaTable": {},
    "IncludeTableAlterOperations": {},
    "IncludeControlDetails": {},
    "MessageMaxBytes": {},
    "IncludeNullAndEmpty": {},
    "SecurityProtocol": {},
    "SslClientCertificateArn": {},
    "SslClientKeyArn": {},
    "SslClientKeyPassword": {},
    "SslCaCertificateArn": {},
    "SaslUsername": {},
    "SaslPassword": {},
    "NoHexPrefix": {},
    "SaslMechanism": {}
  },
  "ElasticsearchSettings": {
    "ServiceAccessRoleArn": {},
    "EndpointUri": {},
    "FullLoadErrorPercentage": {},
    "ErrorRetryDuration": {},
    "UseNewMappingType": {}
  },
  "NeptuneSettings": {
    "ServiceAccessRoleArn": {},
    "S3BucketName": {},
    "S3BucketFolder": {},
    "ErrorRetryDuration": {},
    "MaxFileSize": {},
    "MaxRetryCount": {},
    "IamAuthEnabled": {}
  },
  "RedshiftSettings": {
    "AcceptAnyDate": {},
    "AfterConnectScript": {},
    "BucketFolder": {},
    "BucketName": {},
    "CaseSensitiveNames": {},
    "CompUpdate": {},
    "ConnectionTimeout": {},
    "DatabaseName": {},
    "DateFormat": {},
    "EmptyAsNull": {},
    "EncryptionMode": {},
    "ExplicitIds": {},
    "FileTransferUploadStreams": {},
    "LoadTimeout": {},
    "MaxFileSize": {},
    "Password": {},
    "Port": {},
    "RemoveQuotes": {},
    "ReplaceInvalidChars": {},
    "ReplaceChars": {},
    "ServerName": {},
    "ServiceAccessRoleArn": {},
    "ServerSideEncryptionKmsKeyId": {},
    "TimeFormat": {},
    "TrimBlanks": {},
    "TruncateColumns": {},
    "Username": {},
    "WriteBufferSize": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "MapBooleanAsBoolean": {}
  },
  "PostgreSQLSettings": {
    "AfterConnectScript": {},
    "CaptureDdls": {},
    "MaxFileSize": {},
    "DatabaseName": {},
    "DdlArtifactsSchema": {},
    "ExecuteTimeout": {},
    "FailTasksOnLobTruncation": {},
    "HeartbeatEnable": {},
    "HeartbeatSchema": {},
    "HeartbeatFrequency": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "Username": {},
    "SlotName": {},
    "PluginName": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "TrimSpaceInChar": {},
    "MapBooleanAsBoolean": {}
  },
  "MySQLSettings": {
    "AfterConnectScript": {},
    "CleanSourceMetadataOnMismatch": {},
    "DatabaseName": {},
    "EventsPollInterval": {},
    "TargetDbType": {},
    "MaxFileSize": {},
    "ParallelLoadThreads": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "ServerTimezone": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "OracleSettings": {
    "AddSupplementalLogging": {},
    "ArchivedLogDestId": {},
    "AdditionalArchivedLogDestId": {},
    "ExtraArchivedLogDestIds": {},
    "AllowSelectNestedTables": {},
    "ParallelAsmReadThreads": {},
    "ReadAheadBlocks": {},
    "AccessAlternateDirectly": {},
    "UseAlternateFolderForOnline": {},
    "OraclePathPrefix": {},
    "UsePathPrefix": {},
    "ReplacePathPrefix": {},
    "EnableHomogenousTablespace": {},
    "DirectPathNoLog": {},
    "ArchivedLogsOnly": {},
    "AsmPassword": {},
    "AsmServer": {},
    "AsmUser": {},
    "CharLengthSemantics": {},
    "DatabaseName": {},
    "DirectPathParallelLoad": {},
    "FailTasksOnLobTruncation": {},
    "NumberDatatypeScale": {},
    "Password": {},
    "Port": {},
    "ReadTableSpaceName": {},
    "RetryInterval": {},
    "SecurityDbEncryption": {},
    "SecurityDbEncryptionName": {},
    "ServerName": {},
    "SpatialDataOptionToGeoJsonFunctionName": {},
    "StandbyDelayTime": {},
    "Username": {},
    "UseBFile": {},
    "UseDirectPathFullLoad": {},
    "UseLogminerReader": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "SecretsManagerOracleAsmAccessRoleArn": {},
    "SecretsManagerOracleAsmSecretId": {},
    "TrimSpaceInChar": {},
    "ConvertTimestampWithZoneToUTC": {}
  },
  "SybaseSettings": {
    "DatabaseName": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "MicrosoftSQLServerSettings": {
    "Port": {},
    "BcpPacketSize": {},
    "DatabaseName": {},
    "ControlTablesFileGroup": {},
    "Password": {},
    "QuerySingleAlwaysOnNode": {},
    "ReadBackupOnly": {},
    "SafeguardPolicy": {},
    "ServerName": {},
    "Username": {},
    "UseBcpFullLoad": {},
    "UseThirdPartyBackupDevice": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {},
    "TrimSpaceInChar": {},
    "TlogAccessMode": {},
    "ForceLobLookup": {}
  },
  "IBMDb2Settings": {
    "DatabaseName": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "SetDataCaptureChanges": {},
    "CurrentLsn": {},
    "MaxKBytesPerRead": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "DocDbSettings": {
    "Username": {},
    "Password": {},
    "ServerName": {},
    "Port": {},
    "DatabaseName": {},
    "NestingLevel": {},
    "ExtractDocId": {},
    "DocsToInvestigate": {},
    "KmsKeyId": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  },
  "RedisSettings": {
    "ServerName": {},
    "Port": {},
    "SslSecurityProtocol": {},
    "AuthType": {},
    "AuthUserName": {},
    "AuthPassword": {},
    "SslCaCertificateArn": {}
  },
  "GcpMySQLSettings": {
    "AfterConnectScript": {},
    "CleanSourceMetadataOnMismatch": {},
    "DatabaseName": {},
    "EventsPollInterval": {},
    "TargetDbType": {},
    "MaxFileSize": {},
    "ParallelLoadThreads": {},
    "Password": {},
    "Port": {},
    "ServerName": {},
    "ServerTimezone": {},
    "Username": {},
    "SecretsManagerAccessRoleArn": {},
    "SecretsManagerSecretId": {}
  }
}
```

<p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointIdentifier|object|false|none|none|
|EndpointType|object|false|none|none|
|EngineName|object|false|none|none|
|EngineDisplayName|object|false|none|none|
|Username|object|false|none|none|
|ServerName|object|false|none|none|
|Port|object|false|none|none|
|DatabaseName|object|false|none|none|
|ExtraConnectionAttributes|object|false|none|none|
|Status|object|false|none|none|
|KmsKeyId|object|false|none|none|
|EndpointArn|object|false|none|none|
|CertificateArn|object|false|none|none|
|SslMode|object|false|none|none|
|ServiceAccessRoleArn|object|false|none|none|
|ExternalTableDefinition|object|false|none|none|
|ExternalId|object|false|none|none|
|DynamoDbSettings|object|false|none|none|
|S3Settings|object|false|none|none|
|DmsTransferSettings|object|false|none|none|
|MongoDbSettings|object|false|none|none|
|KinesisSettings|object|false|none|none|
|KafkaSettings|object|false|none|none|
|ElasticsearchSettings|object|false|none|none|
|NeptuneSettings|object|false|none|none|
|RedshiftSettings|object|false|none|none|
|PostgreSQLSettings|object|false|none|none|
|MySQLSettings|object|false|none|none|
|OracleSettings|object|false|none|none|
|SybaseSettings|object|false|none|none|
|MicrosoftSQLServerSettings|object|false|none|none|
|IBMDb2Settings|object|false|none|none|
|DocDbSettings|[DocDbSettings](#schemadocdbsettings)|false|none|Provides information that defines a DocumentDB endpoint.|
|RedisSettings|object|false|none|none|
|GcpMySQLSettings|object|false|none|none|

<h2 id="tocS_EventCategoriesList">EventCategoriesList</h2>
<!-- backwards compatibility -->
<a id="schemaeventcategorieslist"></a>
<a id="schema_EventCategoriesList"></a>
<a id="tocSeventcategorieslist"></a>
<a id="tocseventcategorieslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SourceIdsList">SourceIdsList</h2>
<!-- backwards compatibility -->
<a id="schemasourceidslist"></a>
<a id="schema_SourceIdsList"></a>
<a id="tocSsourceidslist"></a>
<a id="tocssourceidslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EventSubscription">EventSubscription</h2>
<!-- backwards compatibility -->
<a id="schemaeventsubscription"></a>
<a id="schema_EventSubscription"></a>
<a id="tocSeventsubscription"></a>
<a id="tocseventsubscription"></a>

```json
{
  "CustomerAwsId": {},
  "CustSubscriptionId": {},
  "SnsTopicArn": {},
  "Status": {},
  "SubscriptionCreationTime": {},
  "SourceType": {},
  "SourceIdsList": {},
  "EventCategoriesList": {},
  "Enabled": {}
}
```

Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomerAwsId|object|false|none|none|
|CustSubscriptionId|object|false|none|none|
|SnsTopicArn|object|false|none|none|
|Status|object|false|none|none|
|SubscriptionCreationTime|object|false|none|none|
|SourceType|object|false|none|none|
|SourceIdsList|object|false|none|none|
|EventCategoriesList|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_VpcSecurityGroupIdList">VpcSecurityGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemavpcsecuritygroupidlist"></a>
<a id="schema_VpcSecurityGroupIdList"></a>
<a id="tocSvpcsecuritygroupidlist"></a>
<a id="tocsvpcsecuritygroupidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReplicationInstance">ReplicationInstance</h2>
<!-- backwards compatibility -->
<a id="schemareplicationinstance"></a>
<a id="schema_ReplicationInstance"></a>
<a id="tocSreplicationinstance"></a>
<a id="tocsreplicationinstance"></a>

```json
{
  "ReplicationInstanceIdentifier": {},
  "ReplicationInstanceClass": {},
  "ReplicationInstanceStatus": {},
  "AllocatedStorage": {},
  "InstanceCreateTime": {},
  "VpcSecurityGroups": {},
  "AvailabilityZone": {},
  "ReplicationSubnetGroup": {
    "ReplicationSubnetGroupIdentifier": {},
    "ReplicationSubnetGroupDescription": {},
    "VpcId": {},
    "SubnetGroupStatus": {},
    "Subnets": {},
    "SupportedNetworkTypes": {}
  },
  "PreferredMaintenanceWindow": {},
  "PendingModifiedValues": {
    "ReplicationInstanceClass": {},
    "AllocatedStorage": {},
    "MultiAZ": {},
    "EngineVersion": {},
    "NetworkType": {}
  },
  "MultiAZ": {},
  "EngineVersion": {},
  "AutoMinorVersionUpgrade": {},
  "KmsKeyId": {},
  "ReplicationInstanceArn": {},
  "ReplicationInstancePublicIpAddress": {},
  "ReplicationInstancePrivateIpAddress": {},
  "ReplicationInstancePublicIpAddresses": {},
  "ReplicationInstancePrivateIpAddresses": {},
  "ReplicationInstanceIpv6Addresses": {},
  "PubliclyAccessible": {},
  "SecondaryAvailabilityZone": {},
  "FreeUntil": {},
  "DnsNameServers": {},
  "NetworkType": {}
}
```

Provides information that defines a replication instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstanceIdentifier|object|false|none|none|
|ReplicationInstanceClass|object|false|none|none|
|ReplicationInstanceStatus|object|false|none|none|
|AllocatedStorage|object|false|none|none|
|InstanceCreateTime|object|false|none|none|
|VpcSecurityGroups|object|false|none|none|
|AvailabilityZone|object|false|none|none|
|ReplicationSubnetGroup|object|false|none|none|
|PreferredMaintenanceWindow|object|false|none|none|
|PendingModifiedValues|object|false|none|none|
|MultiAZ|object|false|none|none|
|EngineVersion|object|false|none|none|
|AutoMinorVersionUpgrade|object|false|none|none|
|KmsKeyId|object|false|none|none|
|ReplicationInstanceArn|object|false|none|none|
|ReplicationInstancePublicIpAddress|object|false|none|none|
|ReplicationInstancePrivateIpAddress|object|false|none|none|
|ReplicationInstancePublicIpAddresses|object|false|none|none|
|ReplicationInstancePrivateIpAddresses|object|false|none|none|
|ReplicationInstanceIpv6Addresses|object|false|none|none|
|PubliclyAccessible|object|false|none|none|
|SecondaryAvailabilityZone|object|false|none|none|
|FreeUntil|object|false|none|none|
|DnsNameServers|object|false|none|none|
|NetworkType|object|false|none|none|

<h2 id="tocS_SubnetIdentifierList">SubnetIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetidentifierlist"></a>
<a id="schema_SubnetIdentifierList"></a>
<a id="tocSsubnetidentifierlist"></a>
<a id="tocssubnetidentifierlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReplicationSubnetGroup">ReplicationSubnetGroup</h2>
<!-- backwards compatibility -->
<a id="schemareplicationsubnetgroup"></a>
<a id="schema_ReplicationSubnetGroup"></a>
<a id="tocSreplicationsubnetgroup"></a>
<a id="tocsreplicationsubnetgroup"></a>

```json
{
  "ReplicationSubnetGroupIdentifier": {},
  "ReplicationSubnetGroupDescription": {},
  "VpcId": {},
  "SubnetGroupStatus": {},
  "Subnets": {},
  "SupportedNetworkTypes": {}
}
```

Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroups</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationSubnetGroupIdentifier|object|false|none|none|
|ReplicationSubnetGroupDescription|object|false|none|none|
|VpcId|object|false|none|none|
|SubnetGroupStatus|object|false|none|none|
|Subnets|object|false|none|none|
|SupportedNetworkTypes|object|false|none|none|

<h2 id="tocS_MigrationTypeValue">MigrationTypeValue</h2>
<!-- backwards compatibility -->
<a id="schemamigrationtypevalue"></a>
<a id="schema_MigrationTypeValue"></a>
<a id="tocSmigrationtypevalue"></a>
<a id="tocsmigrationtypevalue"></a>

```json
"full-load"
```

<h2 id="tocS_ReplicationTask">ReplicationTask</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtask"></a>
<a id="schema_ReplicationTask"></a>
<a id="tocSreplicationtask"></a>
<a id="tocsreplicationtask"></a>

```json
{
  "ReplicationTaskIdentifier": {},
  "SourceEndpointArn": {},
  "TargetEndpointArn": {},
  "ReplicationInstanceArn": {},
  "MigrationType": {},
  "TableMappings": {},
  "ReplicationTaskSettings": {},
  "Status": {},
  "LastFailureMessage": {},
  "StopReason": {},
  "ReplicationTaskCreationDate": {},
  "ReplicationTaskStartDate": {},
  "CdcStartPosition": {},
  "CdcStopPosition": {},
  "RecoveryCheckpoint": {},
  "ReplicationTaskArn": {},
  "ReplicationTaskStats": {
    "FullLoadProgressPercent": {},
    "ElapsedTimeMillis": {},
    "TablesLoaded": {},
    "TablesLoading": {},
    "TablesQueued": {},
    "TablesErrored": {},
    "FreshStartDate": {},
    "StartDate": {},
    "StopDate": {},
    "FullLoadStartDate": {},
    "FullLoadFinishDate": {}
  },
  "TaskData": {},
  "TargetReplicationInstanceArn": {}
}
```

Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskIdentifier|object|false|none|none|
|SourceEndpointArn|object|false|none|none|
|TargetEndpointArn|object|false|none|none|
|ReplicationInstanceArn|object|false|none|none|
|MigrationType|object|false|none|none|
|TableMappings|object|false|none|none|
|ReplicationTaskSettings|object|false|none|none|
|Status|object|false|none|none|
|LastFailureMessage|object|false|none|none|
|StopReason|object|false|none|none|
|ReplicationTaskCreationDate|object|false|none|none|
|ReplicationTaskStartDate|object|false|none|none|
|CdcStartPosition|object|false|none|none|
|CdcStopPosition|object|false|none|none|
|RecoveryCheckpoint|object|false|none|none|
|ReplicationTaskArn|object|false|none|none|
|ReplicationTaskStats|object|false|none|none|
|TaskData|object|false|none|none|
|TargetReplicationInstanceArn|object|false|none|none|

<h2 id="tocS_DataFormatValue">DataFormatValue</h2>
<!-- backwards compatibility -->
<a id="schemadataformatvalue"></a>
<a id="schema_DataFormatValue"></a>
<a id="tocSdataformatvalue"></a>
<a id="tocsdataformatvalue"></a>

```json
"csv"
```

<h2 id="tocS_DatabaseInstanceSoftwareDetailsResponse">DatabaseInstanceSoftwareDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseinstancesoftwaredetailsresponse"></a>
<a id="schema_DatabaseInstanceSoftwareDetailsResponse"></a>
<a id="tocSdatabaseinstancesoftwaredetailsresponse"></a>
<a id="tocsdatabaseinstancesoftwaredetailsresponse"></a>

```json
{
  "Engine": {},
  "EngineVersion": {},
  "EngineEdition": {},
  "ServicePack": {},
  "SupportLevel": {},
  "OsArchitecture": {},
  "Tooltip": {}
}
```

Describes an inventory database instance for a Fleet Advisor collector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Engine|object|false|none|none|
|EngineVersion|object|false|none|none|
|EngineEdition|object|false|none|none|
|ServicePack|object|false|none|none|
|SupportLevel|object|false|none|none|
|OsArchitecture|object|false|none|none|
|Tooltip|object|false|none|none|

<h2 id="tocS_DatabaseResponse">DatabaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseresponse"></a>
<a id="schema_DatabaseResponse"></a>
<a id="tocSdatabaseresponse"></a>
<a id="tocsdatabaseresponse"></a>

```json
{
  "DatabaseId": {},
  "DatabaseName": {},
  "IpAddress": {},
  "NumberOfSchemas": {},
  "Server": {
    "ServerId": {},
    "IpAddress": {},
    "ServerName": {}
  },
  "SoftwareDetails": {
    "Engine": {},
    "EngineVersion": {},
    "EngineEdition": {},
    "ServicePack": {},
    "SupportLevel": {},
    "OsArchitecture": {},
    "Tooltip": {}
  },
  "Collectors": {}
}
```

Describes a database in a Fleet Advisor collector inventory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseId|object|false|none|none|
|DatabaseName|object|false|none|none|
|IpAddress|object|false|none|none|
|NumberOfSchemas|object|false|none|none|
|Server|object|false|none|none|
|SoftwareDetails|object|false|none|none|
|Collectors|object|false|none|none|

<h2 id="tocS_DatabaseList">DatabaseList</h2>
<!-- backwards compatibility -->
<a id="schemadatabaselist"></a>
<a id="schema_DatabaseList"></a>
<a id="tocSdatabaselist"></a>
<a id="tocsdatabaselist"></a>

```json
[
  {
    "DatabaseId": {},
    "DatabaseName": {},
    "IpAddress": {},
    "NumberOfSchemas": {},
    "Server": {
      "ServerId": {},
      "IpAddress": {},
      "ServerName": {}
    },
    "SoftwareDetails": {
      "Engine": {},
      "EngineVersion": {},
      "EngineEdition": {},
      "ServicePack": {},
      "SupportLevel": {},
      "OsArchitecture": {},
      "Tooltip": {}
    },
    "Collectors": {}
  }
]
```

<h2 id="tocS_LongOptional">LongOptional</h2>
<!-- backwards compatibility -->
<a id="schemalongoptional"></a>
<a id="schema_LongOptional"></a>
<a id="tocSlongoptional"></a>
<a id="tocslongoptional"></a>

```json
0
```

<h2 id="tocS_ServerShortInfoResponse">ServerShortInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaservershortinforesponse"></a>
<a id="schema_ServerShortInfoResponse"></a>
<a id="tocSservershortinforesponse"></a>
<a id="tocsservershortinforesponse"></a>

```json
{
  "ServerId": {},
  "IpAddress": {},
  "ServerName": {}
}
```

Describes a server in a Fleet Advisor collector inventory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerId|object|false|none|none|
|IpAddress|object|false|none|none|
|ServerName|object|false|none|none|

<h2 id="tocS_DatabaseShortInfoResponse">DatabaseShortInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseshortinforesponse"></a>
<a id="schema_DatabaseShortInfoResponse"></a>
<a id="tocSdatabaseshortinforesponse"></a>
<a id="tocsdatabaseshortinforesponse"></a>

```json
{
  "DatabaseId": {},
  "DatabaseName": {},
  "DatabaseIpAddress": {},
  "DatabaseEngine": {}
}
```

Describes a database in a Fleet Advisor collector inventory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseId|object|false|none|none|
|DatabaseName|object|false|none|none|
|DatabaseIpAddress|object|false|none|none|
|DatabaseEngine|object|false|none|none|

<h2 id="tocS_DatePartitionDelimiterValue">DatePartitionDelimiterValue</h2>
<!-- backwards compatibility -->
<a id="schemadatepartitiondelimitervalue"></a>
<a id="schema_DatePartitionDelimiterValue"></a>
<a id="tocSdatepartitiondelimitervalue"></a>
<a id="tocsdatepartitiondelimitervalue"></a>

```json
"SLASH"
```

<h2 id="tocS_DatePartitionSequenceValue">DatePartitionSequenceValue</h2>
<!-- backwards compatibility -->
<a id="schemadatepartitionsequencevalue"></a>
<a id="schema_DatePartitionSequenceValue"></a>
<a id="tocSdatepartitionsequencevalue"></a>
<a id="tocsdatepartitionsequencevalue"></a>

```json
"YYYYMMDD"
```

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IndividualAssessmentNameList">IndividualAssessmentNameList</h2>
<!-- backwards compatibility -->
<a id="schemaindividualassessmentnamelist"></a>
<a id="schema_IndividualAssessmentNameList"></a>
<a id="tocSindividualassessmentnamelist"></a>
<a id="tocsindividualassessmentnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FilterList">FilterList</h2>
<!-- backwards compatibility -->
<a id="schemafilterlist"></a>
<a id="schema_FilterList"></a>
<a id="tocSfilterlist"></a>
<a id="tocsfilterlist"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_EndpointSettingsList">EndpointSettingsList</h2>
<!-- backwards compatibility -->
<a id="schemaendpointsettingslist"></a>
<a id="schema_EndpointSettingsList"></a>
<a id="tocSendpointsettingslist"></a>
<a id="tocsendpointsettingslist"></a>

```json
[
  {
    "Name": {},
    "Type": {},
    "EnumValues": {},
    "Sensitive": {},
    "Units": {},
    "Applicability": {},
    "IntValueMin": {},
    "IntValueMax": {},
    "DefaultValue": {}
  }
]
```

<h2 id="tocS_SupportedEndpointTypeList">SupportedEndpointTypeList</h2>
<!-- backwards compatibility -->
<a id="schemasupportedendpointtypelist"></a>
<a id="schema_SupportedEndpointTypeList"></a>
<a id="tocSsupportedendpointtypelist"></a>
<a id="tocssupportedendpointtypelist"></a>

```json
[
  {
    "EngineName": {},
    "SupportsCDC": {},
    "EndpointType": {},
    "ReplicationInstanceEngineMinimumVersion": {},
    "EngineDisplayName": {}
  }
]
```

<h2 id="tocS_EndpointList">EndpointList</h2>
<!-- backwards compatibility -->
<a id="schemaendpointlist"></a>
<a id="schema_EndpointList"></a>
<a id="tocSendpointlist"></a>
<a id="tocsendpointlist"></a>

```json
[
  {
    "EndpointIdentifier": {},
    "EndpointType": {},
    "EngineName": {},
    "EngineDisplayName": {},
    "Username": {},
    "ServerName": {},
    "Port": {},
    "DatabaseName": {},
    "ExtraConnectionAttributes": {},
    "Status": {},
    "KmsKeyId": {},
    "EndpointArn": {},
    "CertificateArn": {},
    "SslMode": {},
    "ServiceAccessRoleArn": {},
    "ExternalTableDefinition": {},
    "ExternalId": {},
    "DynamoDbSettings": {
      "ServiceAccessRoleArn": {}
    },
    "S3Settings": {
      "ServiceAccessRoleArn": {},
      "ExternalTableDefinition": {},
      "CsvRowDelimiter": {},
      "CsvDelimiter": {},
      "BucketFolder": {},
      "BucketName": {},
      "CompressionType": {},
      "EncryptionMode": {},
      "ServerSideEncryptionKmsKeyId": {},
      "DataFormat": {},
      "EncodingType": {},
      "DictPageSizeLimit": {},
      "RowGroupLength": {},
      "DataPageSize": {},
      "ParquetVersion": {},
      "EnableStatistics": {},
      "IncludeOpForFullLoad": {},
      "CdcInsertsOnly": {},
      "TimestampColumnName": {},
      "ParquetTimestampInMillisecond": {},
      "CdcInsertsAndUpdates": {},
      "DatePartitionEnabled": {},
      "DatePartitionSequence": {},
      "DatePartitionDelimiter": {},
      "UseCsvNoSupValue": {},
      "CsvNoSupValue": {},
      "PreserveTransactions": {},
      "CdcPath": {},
      "UseTaskStartTimeForFullLoadTimestamp": {},
      "CannedAclForObjects": {},
      "AddColumnName": {},
      "CdcMaxBatchInterval": {},
      "CdcMinFileSize": {},
      "CsvNullValue": {},
      "IgnoreHeaderRows": {},
      "MaxFileSize": {},
      "Rfc4180": {},
      "DatePartitionTimezone": {},
      "AddTrailingPaddingCharacter": {},
      "ExpectedBucketOwner": {},
      "GlueCatalogGeneration": {}
    },
    "DmsTransferSettings": {
      "ServiceAccessRoleArn": {},
      "BucketName": {}
    },
    "MongoDbSettings": {
      "Username": {},
      "Password": {},
      "ServerName": {},
      "Port": {},
      "DatabaseName": {},
      "AuthType": {},
      "AuthMechanism": {},
      "NestingLevel": {},
      "ExtractDocId": {},
      "DocsToInvestigate": {},
      "AuthSource": {},
      "KmsKeyId": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "KinesisSettings": {
      "StreamArn": {},
      "MessageFormat": {},
      "ServiceAccessRoleArn": {},
      "IncludeTransactionDetails": {},
      "IncludePartitionValue": {},
      "PartitionIncludeSchemaTable": {},
      "IncludeTableAlterOperations": {},
      "IncludeControlDetails": {},
      "IncludeNullAndEmpty": {},
      "NoHexPrefix": {}
    },
    "KafkaSettings": {
      "Broker": {},
      "Topic": {},
      "MessageFormat": {},
      "IncludeTransactionDetails": {},
      "IncludePartitionValue": {},
      "PartitionIncludeSchemaTable": {},
      "IncludeTableAlterOperations": {},
      "IncludeControlDetails": {},
      "MessageMaxBytes": {},
      "IncludeNullAndEmpty": {},
      "SecurityProtocol": {},
      "SslClientCertificateArn": {},
      "SslClientKeyArn": {},
      "SslClientKeyPassword": {},
      "SslCaCertificateArn": {},
      "SaslUsername": {},
      "SaslPassword": {},
      "NoHexPrefix": {},
      "SaslMechanism": {}
    },
    "ElasticsearchSettings": {
      "ServiceAccessRoleArn": {},
      "EndpointUri": {},
      "FullLoadErrorPercentage": {},
      "ErrorRetryDuration": {},
      "UseNewMappingType": {}
    },
    "NeptuneSettings": {
      "ServiceAccessRoleArn": {},
      "S3BucketName": {},
      "S3BucketFolder": {},
      "ErrorRetryDuration": {},
      "MaxFileSize": {},
      "MaxRetryCount": {},
      "IamAuthEnabled": {}
    },
    "RedshiftSettings": {
      "AcceptAnyDate": {},
      "AfterConnectScript": {},
      "BucketFolder": {},
      "BucketName": {},
      "CaseSensitiveNames": {},
      "CompUpdate": {},
      "ConnectionTimeout": {},
      "DatabaseName": {},
      "DateFormat": {},
      "EmptyAsNull": {},
      "EncryptionMode": {},
      "ExplicitIds": {},
      "FileTransferUploadStreams": {},
      "LoadTimeout": {},
      "MaxFileSize": {},
      "Password": {},
      "Port": {},
      "RemoveQuotes": {},
      "ReplaceInvalidChars": {},
      "ReplaceChars": {},
      "ServerName": {},
      "ServiceAccessRoleArn": {},
      "ServerSideEncryptionKmsKeyId": {},
      "TimeFormat": {},
      "TrimBlanks": {},
      "TruncateColumns": {},
      "Username": {},
      "WriteBufferSize": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {},
      "MapBooleanAsBoolean": {}
    },
    "PostgreSQLSettings": {
      "AfterConnectScript": {},
      "CaptureDdls": {},
      "MaxFileSize": {},
      "DatabaseName": {},
      "DdlArtifactsSchema": {},
      "ExecuteTimeout": {},
      "FailTasksOnLobTruncation": {},
      "HeartbeatEnable": {},
      "HeartbeatSchema": {},
      "HeartbeatFrequency": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "Username": {},
      "SlotName": {},
      "PluginName": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {},
      "TrimSpaceInChar": {},
      "MapBooleanAsBoolean": {}
    },
    "MySQLSettings": {
      "AfterConnectScript": {},
      "CleanSourceMetadataOnMismatch": {},
      "DatabaseName": {},
      "EventsPollInterval": {},
      "TargetDbType": {},
      "MaxFileSize": {},
      "ParallelLoadThreads": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "ServerTimezone": {},
      "Username": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "OracleSettings": {
      "AddSupplementalLogging": {},
      "ArchivedLogDestId": {},
      "AdditionalArchivedLogDestId": {},
      "ExtraArchivedLogDestIds": {},
      "AllowSelectNestedTables": {},
      "ParallelAsmReadThreads": {},
      "ReadAheadBlocks": {},
      "AccessAlternateDirectly": {},
      "UseAlternateFolderForOnline": {},
      "OraclePathPrefix": {},
      "UsePathPrefix": {},
      "ReplacePathPrefix": {},
      "EnableHomogenousTablespace": {},
      "DirectPathNoLog": {},
      "ArchivedLogsOnly": {},
      "AsmPassword": {},
      "AsmServer": {},
      "AsmUser": {},
      "CharLengthSemantics": {},
      "DatabaseName": {},
      "DirectPathParallelLoad": {},
      "FailTasksOnLobTruncation": {},
      "NumberDatatypeScale": {},
      "Password": {},
      "Port": {},
      "ReadTableSpaceName": {},
      "RetryInterval": {},
      "SecurityDbEncryption": {},
      "SecurityDbEncryptionName": {},
      "ServerName": {},
      "SpatialDataOptionToGeoJsonFunctionName": {},
      "StandbyDelayTime": {},
      "Username": {},
      "UseBFile": {},
      "UseDirectPathFullLoad": {},
      "UseLogminerReader": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {},
      "SecretsManagerOracleAsmAccessRoleArn": {},
      "SecretsManagerOracleAsmSecretId": {},
      "TrimSpaceInChar": {},
      "ConvertTimestampWithZoneToUTC": {}
    },
    "SybaseSettings": {
      "DatabaseName": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "Username": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "MicrosoftSQLServerSettings": {
      "Port": {},
      "BcpPacketSize": {},
      "DatabaseName": {},
      "ControlTablesFileGroup": {},
      "Password": {},
      "QuerySingleAlwaysOnNode": {},
      "ReadBackupOnly": {},
      "SafeguardPolicy": {},
      "ServerName": {},
      "Username": {},
      "UseBcpFullLoad": {},
      "UseThirdPartyBackupDevice": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {},
      "TrimSpaceInChar": {},
      "TlogAccessMode": {},
      "ForceLobLookup": {}
    },
    "IBMDb2Settings": {
      "DatabaseName": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "SetDataCaptureChanges": {},
      "CurrentLsn": {},
      "MaxKBytesPerRead": {},
      "Username": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "DocDbSettings": {
      "Username": {},
      "Password": {},
      "ServerName": {},
      "Port": {},
      "DatabaseName": {},
      "NestingLevel": {},
      "ExtractDocId": {},
      "DocsToInvestigate": {},
      "KmsKeyId": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    },
    "RedisSettings": {
      "ServerName": {},
      "Port": {},
      "SslSecurityProtocol": {},
      "AuthType": {},
      "AuthUserName": {},
      "AuthPassword": {},
      "SslCaCertificateArn": {}
    },
    "GcpMySQLSettings": {
      "AfterConnectScript": {},
      "CleanSourceMetadataOnMismatch": {},
      "DatabaseName": {},
      "EventsPollInterval": {},
      "TargetDbType": {},
      "MaxFileSize": {},
      "ParallelLoadThreads": {},
      "Password": {},
      "Port": {},
      "ServerName": {},
      "ServerTimezone": {},
      "Username": {},
      "SecretsManagerAccessRoleArn": {},
      "SecretsManagerSecretId": {}
    }
  }
]
```

<h2 id="tocS_EventCategoryGroupList">EventCategoryGroupList</h2>
<!-- backwards compatibility -->
<a id="schemaeventcategorygrouplist"></a>
<a id="schema_EventCategoryGroupList"></a>
<a id="tocSeventcategorygrouplist"></a>
<a id="tocseventcategorygrouplist"></a>

```json
[
  {
    "SourceType": {},
    "EventCategories": {}
  }
]
```

<h2 id="tocS_EventSubscriptionsList">EventSubscriptionsList</h2>
<!-- backwards compatibility -->
<a id="schemaeventsubscriptionslist"></a>
<a id="schema_EventSubscriptionsList"></a>
<a id="tocSeventsubscriptionslist"></a>
<a id="tocseventsubscriptionslist"></a>

```json
[
  {
    "CustomerAwsId": {},
    "CustSubscriptionId": {},
    "SnsTopicArn": {},
    "Status": {},
    "SubscriptionCreationTime": {},
    "SourceType": {},
    "SourceIdsList": {},
    "EventCategoriesList": {},
    "Enabled": {}
  }
]
```

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"replication-instance"
```

<h2 id="tocS_EventList">EventList</h2>
<!-- backwards compatibility -->
<a id="schemaeventlist"></a>
<a id="schema_EventList"></a>
<a id="tocSeventlist"></a>
<a id="tocseventlist"></a>

```json
[
  {
    "SourceIdentifier": {},
    "SourceType": {},
    "Message": {},
    "EventCategories": {},
    "Date": {}
  }
]
```

<h2 id="tocS_FleetAdvisorLsaAnalysisResponseList">FleetAdvisorLsaAnalysisResponseList</h2>
<!-- backwards compatibility -->
<a id="schemafleetadvisorlsaanalysisresponselist"></a>
<a id="schema_FleetAdvisorLsaAnalysisResponseList"></a>
<a id="tocSfleetadvisorlsaanalysisresponselist"></a>
<a id="tocsfleetadvisorlsaanalysisresponselist"></a>

```json
[
  {
    "LsaAnalysisId": {},
    "Status": {}
  }
]
```

<h2 id="tocS_FleetAdvisorSchemaObjectList">FleetAdvisorSchemaObjectList</h2>
<!-- backwards compatibility -->
<a id="schemafleetadvisorschemaobjectlist"></a>
<a id="schema_FleetAdvisorSchemaObjectList"></a>
<a id="tocSfleetadvisorschemaobjectlist"></a>
<a id="tocsfleetadvisorschemaobjectlist"></a>

```json
[
  {
    "SchemaId": {},
    "ObjectType": {},
    "NumberOfObjects": {},
    "CodeLineCount": {},
    "CodeSize": {}
  }
]
```

<h2 id="tocS_FleetAdvisorSchemaList">FleetAdvisorSchemaList</h2>
<!-- backwards compatibility -->
<a id="schemafleetadvisorschemalist"></a>
<a id="schema_FleetAdvisorSchemaList"></a>
<a id="tocSfleetadvisorschemalist"></a>
<a id="tocsfleetadvisorschemalist"></a>

```json
[
  {
    "CodeLineCount": {},
    "CodeSize": {},
    "Complexity": {},
    "Server": {
      "ServerId": {},
      "IpAddress": {},
      "ServerName": {}
    },
    "DatabaseInstance": {
      "DatabaseId": {},
      "DatabaseName": {},
      "DatabaseIpAddress": {},
      "DatabaseEngine": {}
    },
    "SchemaId": {},
    "SchemaName": {},
    "OriginalSchema": {
      "SchemaId": {},
      "SchemaName": {},
      "DatabaseId": {},
      "DatabaseName": {},
      "DatabaseIpAddress": {}
    },
    "Similarity": {}
  }
]
```

<h2 id="tocS_OrderableReplicationInstanceList">OrderableReplicationInstanceList</h2>
<!-- backwards compatibility -->
<a id="schemaorderablereplicationinstancelist"></a>
<a id="schema_OrderableReplicationInstanceList"></a>
<a id="tocSorderablereplicationinstancelist"></a>
<a id="tocsorderablereplicationinstancelist"></a>

```json
[
  {
    "EngineVersion": {},
    "ReplicationInstanceClass": {},
    "StorageType": {},
    "MinAllocatedStorage": {},
    "MaxAllocatedStorage": {},
    "DefaultAllocatedStorage": {},
    "IncludedAllocatedStorage": {},
    "AvailabilityZones": {},
    "ReleaseStatus": {}
  }
]
```

<h2 id="tocS_PendingMaintenanceActions">PendingMaintenanceActions</h2>
<!-- backwards compatibility -->
<a id="schemapendingmaintenanceactions"></a>
<a id="schema_PendingMaintenanceActions"></a>
<a id="tocSpendingmaintenanceactions"></a>
<a id="tocspendingmaintenanceactions"></a>

```json
[
  {
    "ResourceIdentifier": {},
    "PendingMaintenanceActionDetails": {}
  }
]
```

<h2 id="tocS_LimitationList">LimitationList</h2>
<!-- backwards compatibility -->
<a id="schemalimitationlist"></a>
<a id="schema_LimitationList"></a>
<a id="tocSlimitationlist"></a>
<a id="tocslimitationlist"></a>

```json
[
  {
    "DatabaseId": {},
    "EngineName": {},
    "Name": {},
    "Description": {},
    "Impact": {},
    "Type": {}
  }
]
```

<h2 id="tocS_RecommendationList">RecommendationList</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationlist"></a>
<a id="schema_RecommendationList"></a>
<a id="tocSrecommendationlist"></a>
<a id="tocsrecommendationlist"></a>

```json
[
  {
    "DatabaseId": {},
    "EngineName": {},
    "CreatedDate": {},
    "Status": {},
    "Preferred": {},
    "Settings": {
      "InstanceSizingType": {},
      "WorkloadType": {}
    },
    "Data": {
      "RdsEngine": {
        "RequirementsToTarget": {
          "EngineEdition": {},
          "InstanceVcpu": {},
          "InstanceMemory": {},
          "StorageSize": {},
          "StorageIops": {},
          "DeploymentOption": {}
        },
        "TargetConfiguration": {
          "EngineEdition": {},
          "InstanceType": {},
          "InstanceVcpu": {},
          "InstanceMemory": {},
          "StorageType": {},
          "StorageSize": {},
          "StorageIops": {},
          "DeploymentOption": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_RefreshSchemasStatus">RefreshSchemasStatus</h2>
<!-- backwards compatibility -->
<a id="schemarefreshschemasstatus"></a>
<a id="schema_RefreshSchemasStatus"></a>
<a id="tocSrefreshschemasstatus"></a>
<a id="tocsrefreshschemasstatus"></a>

```json
{
  "EndpointArn": {},
  "ReplicationInstanceArn": {},
  "Status": {},
  "LastRefreshDate": {},
  "LastFailureMessage": {}
}
```

Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointArn|object|false|none|none|
|ReplicationInstanceArn|object|false|none|none|
|Status|object|false|none|none|
|LastRefreshDate|object|false|none|none|
|LastFailureMessage|object|false|none|none|

<h2 id="tocS_ReplicationInstanceTaskLogsList">ReplicationInstanceTaskLogsList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationinstancetasklogslist"></a>
<a id="schema_ReplicationInstanceTaskLogsList"></a>
<a id="tocSreplicationinstancetasklogslist"></a>
<a id="tocsreplicationinstancetasklogslist"></a>

```json
[
  {
    "ReplicationTaskName": {},
    "ReplicationTaskArn": {},
    "ReplicationInstanceTaskLogSize": {}
  }
]
```

<h2 id="tocS_ReplicationInstanceList">ReplicationInstanceList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationinstancelist"></a>
<a id="schema_ReplicationInstanceList"></a>
<a id="tocSreplicationinstancelist"></a>
<a id="tocsreplicationinstancelist"></a>

```json
[
  {
    "ReplicationInstanceIdentifier": {},
    "ReplicationInstanceClass": {},
    "ReplicationInstanceStatus": {},
    "AllocatedStorage": {},
    "InstanceCreateTime": {},
    "VpcSecurityGroups": {},
    "AvailabilityZone": {},
    "ReplicationSubnetGroup": {
      "ReplicationSubnetGroupIdentifier": {},
      "ReplicationSubnetGroupDescription": {},
      "VpcId": {},
      "SubnetGroupStatus": {},
      "Subnets": {},
      "SupportedNetworkTypes": {}
    },
    "PreferredMaintenanceWindow": {},
    "PendingModifiedValues": {
      "ReplicationInstanceClass": {},
      "AllocatedStorage": {},
      "MultiAZ": {},
      "EngineVersion": {},
      "NetworkType": {}
    },
    "MultiAZ": {},
    "EngineVersion": {},
    "AutoMinorVersionUpgrade": {},
    "KmsKeyId": {},
    "ReplicationInstanceArn": {},
    "ReplicationInstancePublicIpAddress": {},
    "ReplicationInstancePrivateIpAddress": {},
    "ReplicationInstancePublicIpAddresses": {},
    "ReplicationInstancePrivateIpAddresses": {},
    "ReplicationInstanceIpv6Addresses": {},
    "PubliclyAccessible": {},
    "SecondaryAvailabilityZone": {},
    "FreeUntil": {},
    "DnsNameServers": {},
    "NetworkType": {}
  }
]
```

<h2 id="tocS_ReplicationSubnetGroups">ReplicationSubnetGroups</h2>
<!-- backwards compatibility -->
<a id="schemareplicationsubnetgroups"></a>
<a id="schema_ReplicationSubnetGroups"></a>
<a id="tocSreplicationsubnetgroups"></a>
<a id="tocsreplicationsubnetgroups"></a>

```json
[
  {
    "ReplicationSubnetGroupIdentifier": {},
    "ReplicationSubnetGroupDescription": {},
    "VpcId": {},
    "SubnetGroupStatus": {},
    "Subnets": {},
    "SupportedNetworkTypes": {}
  }
]
```

<h2 id="tocS_ReplicationTaskAssessmentResultList">ReplicationTaskAssessmentResultList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtaskassessmentresultlist"></a>
<a id="schema_ReplicationTaskAssessmentResultList"></a>
<a id="tocSreplicationtaskassessmentresultlist"></a>
<a id="tocsreplicationtaskassessmentresultlist"></a>

```json
[
  {
    "ReplicationTaskIdentifier": {},
    "ReplicationTaskArn": {},
    "ReplicationTaskLastAssessmentDate": {},
    "AssessmentStatus": {},
    "AssessmentResultsFile": {},
    "AssessmentResults": {},
    "S3ObjectUrl": {}
  }
]
```

<h2 id="tocS_ReplicationTaskAssessmentRunList">ReplicationTaskAssessmentRunList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtaskassessmentrunlist"></a>
<a id="schema_ReplicationTaskAssessmentRunList"></a>
<a id="tocSreplicationtaskassessmentrunlist"></a>
<a id="tocsreplicationtaskassessmentrunlist"></a>

```json
[
  {
    "ReplicationTaskAssessmentRunArn": {},
    "ReplicationTaskArn": {},
    "Status": {},
    "ReplicationTaskAssessmentRunCreationDate": {},
    "AssessmentProgress": {
      "IndividualAssessmentCount": {},
      "IndividualAssessmentCompletedCount": {}
    },
    "LastFailureMessage": {},
    "ServiceAccessRoleArn": {},
    "ResultLocationBucket": {},
    "ResultLocationFolder": {},
    "ResultEncryptionMode": {},
    "ResultKmsKeyArn": {},
    "AssessmentRunName": {}
  }
]
```

<h2 id="tocS_ReplicationTaskIndividualAssessmentList">ReplicationTaskIndividualAssessmentList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtaskindividualassessmentlist"></a>
<a id="schema_ReplicationTaskIndividualAssessmentList"></a>
<a id="tocSreplicationtaskindividualassessmentlist"></a>
<a id="tocsreplicationtaskindividualassessmentlist"></a>

```json
[
  {
    "ReplicationTaskIndividualAssessmentArn": {},
    "ReplicationTaskAssessmentRunArn": {},
    "IndividualAssessmentName": {},
    "Status": {},
    "ReplicationTaskIndividualAssessmentStartDate": {}
  }
]
```

<h2 id="tocS_ReplicationTaskList">ReplicationTaskList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtasklist"></a>
<a id="schema_ReplicationTaskList"></a>
<a id="tocSreplicationtasklist"></a>
<a id="tocsreplicationtasklist"></a>

```json
[
  {
    "ReplicationTaskIdentifier": {},
    "SourceEndpointArn": {},
    "TargetEndpointArn": {},
    "ReplicationInstanceArn": {},
    "MigrationType": {},
    "TableMappings": {},
    "ReplicationTaskSettings": {},
    "Status": {},
    "LastFailureMessage": {},
    "StopReason": {},
    "ReplicationTaskCreationDate": {},
    "ReplicationTaskStartDate": {},
    "CdcStartPosition": {},
    "CdcStopPosition": {},
    "RecoveryCheckpoint": {},
    "ReplicationTaskArn": {},
    "ReplicationTaskStats": {
      "FullLoadProgressPercent": {},
      "ElapsedTimeMillis": {},
      "TablesLoaded": {},
      "TablesLoading": {},
      "TablesQueued": {},
      "TablesErrored": {},
      "FreshStartDate": {},
      "StartDate": {},
      "StopDate": {},
      "FullLoadStartDate": {},
      "FullLoadFinishDate": {}
    },
    "TaskData": {},
    "TargetReplicationInstanceArn": {}
  }
]
```

<h2 id="tocS_SchemaList">SchemaList</h2>
<!-- backwards compatibility -->
<a id="schemaschemalist"></a>
<a id="schema_SchemaList"></a>
<a id="tocSschemalist"></a>
<a id="tocsschemalist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TableStatisticsList">TableStatisticsList</h2>
<!-- backwards compatibility -->
<a id="schematablestatisticslist"></a>
<a id="schema_TableStatisticsList"></a>
<a id="tocStablestatisticslist"></a>
<a id="tocstablestatisticslist"></a>

```json
[
  {
    "SchemaName": {},
    "TableName": {},
    "Inserts": {},
    "Deletes": {},
    "Updates": {},
    "Ddls": {},
    "AppliedInserts": {},
    "AppliedDeletes": {},
    "AppliedUpdates": {},
    "AppliedDdls": {},
    "FullLoadRows": {},
    "FullLoadCondtnlChkFailedRows": {},
    "FullLoadErrorRows": {},
    "FullLoadStartTime": {},
    "FullLoadEndTime": {},
    "FullLoadReloaded": {},
    "LastUpdateTime": {},
    "TableState": {},
    "ValidationPendingRecords": {},
    "ValidationFailedRecords": {},
    "ValidationSuspendedRecords": {},
    "ValidationState": {},
    "ValidationStateDetails": {}
  }
]
```

<h2 id="tocS_NestingLevelValue">NestingLevelValue</h2>
<!-- backwards compatibility -->
<a id="schemanestinglevelvalue"></a>
<a id="schema_NestingLevelValue"></a>
<a id="tocSnestinglevelvalue"></a>
<a id="tocsnestinglevelvalue"></a>

```json
"none"
```

<h2 id="tocS_DoubleOptional">DoubleOptional</h2>
<!-- backwards compatibility -->
<a id="schemadoubleoptional"></a>
<a id="schema_DoubleOptional"></a>
<a id="tocSdoubleoptional"></a>
<a id="tocsdoubleoptional"></a>

```json
0
```

<h2 id="tocS_EncodingTypeValue">EncodingTypeValue</h2>
<!-- backwards compatibility -->
<a id="schemaencodingtypevalue"></a>
<a id="schema_EncodingTypeValue"></a>
<a id="tocSencodingtypevalue"></a>
<a id="tocsencodingtypevalue"></a>

```json
"plain"
```

<h2 id="tocS_EncryptionModeValue">EncryptionModeValue</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionmodevalue"></a>
<a id="schema_EncryptionModeValue"></a>
<a id="tocSencryptionmodevalue"></a>
<a id="tocsencryptionmodevalue"></a>

```json
"sse-s3"
```

<h2 id="tocS_EndpointSettingTypeValue">EndpointSettingTypeValue</h2>
<!-- backwards compatibility -->
<a id="schemaendpointsettingtypevalue"></a>
<a id="schema_EndpointSettingTypeValue"></a>
<a id="tocSendpointsettingtypevalue"></a>
<a id="tocsendpointsettingtypevalue"></a>

```json
"string"
```

<h2 id="tocS_EndpointSettingEnumValues">EndpointSettingEnumValues</h2>
<!-- backwards compatibility -->
<a id="schemaendpointsettingenumvalues"></a>
<a id="schema_EndpointSettingEnumValues"></a>
<a id="tocSendpointsettingenumvalues"></a>
<a id="tocsendpointsettingenumvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EndpointSetting">EndpointSetting</h2>
<!-- backwards compatibility -->
<a id="schemaendpointsetting"></a>
<a id="schema_EndpointSetting"></a>
<a id="tocSendpointsetting"></a>
<a id="tocsendpointsetting"></a>

```json
{
  "Name": {},
  "Type": {},
  "EnumValues": {},
  "Sensitive": {},
  "Units": {},
  "Applicability": {},
  "IntValueMin": {},
  "IntValueMax": {},
  "DefaultValue": {}
}
```

Endpoint settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|false|none|none|
|EnumValues|object|false|none|none|
|Sensitive|object|false|none|none|
|Units|object|false|none|none|
|Applicability|object|false|none|none|
|IntValueMin|object|false|none|none|
|IntValueMax|object|false|none|none|
|DefaultValue|object|false|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "SourceIdentifier": {},
  "SourceType": {},
  "Message": {},
  "EventCategories": {},
  "Date": {}
}
```

Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the DMS resource type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceIdentifier|object|false|none|none|
|SourceType|object|false|none|none|
|Message|object|false|none|none|
|EventCategories|object|false|none|none|
|Date|object|false|none|none|

<h2 id="tocS_EventCategoryGroup">EventCategoryGroup</h2>
<!-- backwards compatibility -->
<a id="schemaeventcategorygroup"></a>
<a id="schema_EventCategoryGroup"></a>
<a id="tocSeventcategorygroup"></a>
<a id="tocseventcategorygroup"></a>

```json
{
  "SourceType": {},
  "EventCategories": {}
}
```

Lists categories of events subscribed to, and generated by, the applicable DMS resource type. This data type appears in response to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_EventCategoryGroup.html"> <code>DescribeEventCategories</code> </a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceType|object|false|none|none|
|EventCategories|object|false|none|none|

<h2 id="tocS_ExcludeTestList">ExcludeTestList</h2>
<!-- backwards compatibility -->
<a id="schemaexcludetestlist"></a>
<a id="schema_ExcludeTestList"></a>
<a id="tocSexcludetestlist"></a>
<a id="tocsexcludetestlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FilterValueList">FilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemafiltervaluelist"></a>
<a id="schema_FilterValueList"></a>
<a id="tocSfiltervaluelist"></a>
<a id="tocsfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

Identifies the name and value of a filter object. This filter is used to limit the number and type of DMS objects that are returned for a particular <code>Describe*</code> call or similar operation. Filters are used as an optional parameter for certain API operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_FleetAdvisorLsaAnalysisResponse">FleetAdvisorLsaAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemafleetadvisorlsaanalysisresponse"></a>
<a id="schema_FleetAdvisorLsaAnalysisResponse"></a>
<a id="tocSfleetadvisorlsaanalysisresponse"></a>
<a id="tocsfleetadvisorlsaanalysisresponse"></a>

```json
{
  "LsaAnalysisId": {},
  "Status": {}
}
```

Describes a large-scale assessment (LSA) analysis run by a Fleet Advisor collector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LsaAnalysisId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_SchemaResponse">SchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschemaresponse"></a>
<a id="schema_SchemaResponse"></a>
<a id="tocSschemaresponse"></a>
<a id="tocsschemaresponse"></a>

```json
{
  "CodeLineCount": {},
  "CodeSize": {},
  "Complexity": {},
  "Server": {
    "ServerId": {},
    "IpAddress": {},
    "ServerName": {}
  },
  "DatabaseInstance": {
    "DatabaseId": {},
    "DatabaseName": {},
    "DatabaseIpAddress": {},
    "DatabaseEngine": {}
  },
  "SchemaId": {},
  "SchemaName": {},
  "OriginalSchema": {
    "SchemaId": {},
    "SchemaName": {},
    "DatabaseId": {},
    "DatabaseName": {},
    "DatabaseIpAddress": {}
  },
  "Similarity": {}
}
```

Describes a schema in a Fleet Advisor collector inventory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeLineCount|object|false|none|none|
|CodeSize|object|false|none|none|
|Complexity|object|false|none|none|
|Server|object|false|none|none|
|DatabaseInstance|object|false|none|none|
|SchemaId|object|false|none|none|
|SchemaName|object|false|none|none|
|OriginalSchema|[SchemaShortInfoResponse](#schemaschemashortinforesponse)|false|none|Describes a schema in a Fleet Advisor collector inventory.|
|Similarity|object|false|none|none|

<h2 id="tocS_FleetAdvisorSchemaObjectResponse">FleetAdvisorSchemaObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemafleetadvisorschemaobjectresponse"></a>
<a id="schema_FleetAdvisorSchemaObjectResponse"></a>
<a id="tocSfleetadvisorschemaobjectresponse"></a>
<a id="tocsfleetadvisorschemaobjectresponse"></a>

```json
{
  "SchemaId": {},
  "ObjectType": {},
  "NumberOfObjects": {},
  "CodeLineCount": {},
  "CodeSize": {}
}
```

Describes a schema object in a Fleet Advisor collector inventory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaId|object|false|none|none|
|ObjectType|object|false|none|none|
|NumberOfObjects|object|false|none|none|
|CodeLineCount|object|false|none|none|
|CodeSize|object|false|none|none|

<h2 id="tocS_TargetDbType">TargetDbType</h2>
<!-- backwards compatibility -->
<a id="schematargetdbtype"></a>
<a id="schema_TargetDbType"></a>
<a id="tocStargetdbtype"></a>
<a id="tocstargetdbtype"></a>

```json
"specific-database"
```

<h2 id="tocS_IncludeTestList">IncludeTestList</h2>
<!-- backwards compatibility -->
<a id="schemaincludetestlist"></a>
<a id="schema_IncludeTestList"></a>
<a id="tocSincludetestlist"></a>
<a id="tocsincludetestlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_IntegerList">IntegerList</h2>
<!-- backwards compatibility -->
<a id="schemaintegerlist"></a>
<a id="schema_IntegerList"></a>
<a id="tocSintegerlist"></a>
<a id="tocsintegerlist"></a>

```json
[
  0
]
```

<h2 id="tocS_KafkaSaslMechanism">KafkaSaslMechanism</h2>
<!-- backwards compatibility -->
<a id="schemakafkasaslmechanism"></a>
<a id="schema_KafkaSaslMechanism"></a>
<a id="tocSkafkasaslmechanism"></a>
<a id="tocskafkasaslmechanism"></a>

```json
"scram-sha-512"
```

<h2 id="tocS_KafkaSecurityProtocol">KafkaSecurityProtocol</h2>
<!-- backwards compatibility -->
<a id="schemakafkasecurityprotocol"></a>
<a id="schema_KafkaSecurityProtocol"></a>
<a id="tocSkafkasecurityprotocol"></a>
<a id="tocskafkasecurityprotocol"></a>

```json
"plaintext"
```

<h2 id="tocS_MessageFormatValue">MessageFormatValue</h2>
<!-- backwards compatibility -->
<a id="schemamessageformatvalue"></a>
<a id="schema_MessageFormatValue"></a>
<a id="tocSmessageformatvalue"></a>
<a id="tocsmessageformatvalue"></a>

```json
"json"
```

<h2 id="tocS_KeyList">KeyList</h2>
<!-- backwards compatibility -->
<a id="schemakeylist"></a>
<a id="schema_KeyList"></a>
<a id="tocSkeylist"></a>
<a id="tocskeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Limitation">Limitation</h2>
<!-- backwards compatibility -->
<a id="schemalimitation"></a>
<a id="schema_Limitation"></a>
<a id="tocSlimitation"></a>
<a id="tocslimitation"></a>

```json
{
  "DatabaseId": {},
  "EngineName": {},
  "Name": {},
  "Description": {},
  "Impact": {},
  "Type": {}
}
```

<p>Provides information about the limitations of target Amazon Web Services engines.</p> <p>Your source database might include features that the target Amazon Web Services engine doesn't support. Fleet Advisor lists these features as limitations. You should consider these limitations during database migration. For each limitation, Fleet Advisor recommends an action that you can take to address or avoid this limitation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseId|object|false|none|none|
|EngineName|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Impact|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_SafeguardPolicy">SafeguardPolicy</h2>
<!-- backwards compatibility -->
<a id="schemasafeguardpolicy"></a>
<a id="schema_SafeguardPolicy"></a>
<a id="tocSsafeguardpolicy"></a>
<a id="tocssafeguardpolicy"></a>

```json
"rely-on-sql-server-replication-agent"
```

<h2 id="tocS_TlogAccessMode">TlogAccessMode</h2>
<!-- backwards compatibility -->
<a id="schematlogaccessmode"></a>
<a id="schema_TlogAccessMode"></a>
<a id="tocStlogaccessmode"></a>
<a id="tocstlogaccessmode"></a>

```json
"BackupOnly"
```

<h2 id="tocS_ReleaseStatusValues">ReleaseStatusValues</h2>
<!-- backwards compatibility -->
<a id="schemareleasestatusvalues"></a>
<a id="schema_ReleaseStatusValues"></a>
<a id="tocSreleasestatusvalues"></a>
<a id="tocsreleasestatusvalues"></a>

```json
"beta"
```

<h2 id="tocS_OrderableReplicationInstance">OrderableReplicationInstance</h2>
<!-- backwards compatibility -->
<a id="schemaorderablereplicationinstance"></a>
<a id="schema_OrderableReplicationInstance"></a>
<a id="tocSorderablereplicationinstance"></a>
<a id="tocsorderablereplicationinstance"></a>

```json
{
  "EngineVersion": {},
  "ReplicationInstanceClass": {},
  "StorageType": {},
  "MinAllocatedStorage": {},
  "MaxAllocatedStorage": {},
  "DefaultAllocatedStorage": {},
  "IncludedAllocatedStorage": {},
  "AvailabilityZones": {},
  "ReleaseStatus": {}
}
```

In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngineVersion|object|false|none|none|
|ReplicationInstanceClass|object|false|none|none|
|StorageType|object|false|none|none|
|MinAllocatedStorage|object|false|none|none|
|MaxAllocatedStorage|object|false|none|none|
|DefaultAllocatedStorage|object|false|none|none|
|IncludedAllocatedStorage|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|ReleaseStatus|object|false|none|none|

<h2 id="tocS_ParquetVersionValue">ParquetVersionValue</h2>
<!-- backwards compatibility -->
<a id="schemaparquetversionvalue"></a>
<a id="schema_ParquetVersionValue"></a>
<a id="tocSparquetversionvalue"></a>
<a id="tocsparquetversionvalue"></a>

```json
"parquet-1-0"
```

<h2 id="tocS_PendingMaintenanceAction">PendingMaintenanceAction</h2>
<!-- backwards compatibility -->
<a id="schemapendingmaintenanceaction"></a>
<a id="schema_PendingMaintenanceAction"></a>
<a id="tocSpendingmaintenanceaction"></a>
<a id="tocspendingmaintenanceaction"></a>

```json
{
  "Action": {},
  "AutoAppliedAfterDate": {},
  "ForcedApplyDate": {},
  "OptInStatus": {},
  "CurrentApplyDate": {},
  "Description": {}
}
```

Describes a maintenance action pending for an DMS resource, including when and how it will be applied. This data type is a response element to the <code>DescribePendingMaintenanceActions</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|false|none|none|
|AutoAppliedAfterDate|object|false|none|none|
|ForcedApplyDate|object|false|none|none|
|OptInStatus|object|false|none|none|
|CurrentApplyDate|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_PendingMaintenanceActionDetails">PendingMaintenanceActionDetails</h2>
<!-- backwards compatibility -->
<a id="schemapendingmaintenanceactiondetails"></a>
<a id="schema_PendingMaintenanceActionDetails"></a>
<a id="tocSpendingmaintenanceactiondetails"></a>
<a id="tocspendingmaintenanceactiondetails"></a>

```json
[
  {
    "Action": {},
    "AutoAppliedAfterDate": {},
    "ForcedApplyDate": {},
    "OptInStatus": {},
    "CurrentApplyDate": {},
    "Description": {}
  }
]
```

<h2 id="tocS_PluginNameValue">PluginNameValue</h2>
<!-- backwards compatibility -->
<a id="schemapluginnamevalue"></a>
<a id="schema_PluginNameValue"></a>
<a id="tocSpluginnamevalue"></a>
<a id="tocspluginnamevalue"></a>

```json
"no-preference"
```

<h2 id="tocS_RdsConfiguration">RdsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemardsconfiguration"></a>
<a id="schema_RdsConfiguration"></a>
<a id="tocSrdsconfiguration"></a>
<a id="tocsrdsconfiguration"></a>

```json
{
  "EngineEdition": {},
  "InstanceType": {},
  "InstanceVcpu": {},
  "InstanceMemory": {},
  "StorageType": {},
  "StorageSize": {},
  "StorageIops": {},
  "DeploymentOption": {}
}
```

Provides information that describes the configuration of the recommended target engine on Amazon RDS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngineEdition|object|false|none|none|
|InstanceType|object|false|none|none|
|InstanceVcpu|object|false|none|none|
|InstanceMemory|object|false|none|none|
|StorageType|object|false|none|none|
|StorageSize|object|false|none|none|
|StorageIops|object|false|none|none|
|DeploymentOption|object|false|none|none|

<h2 id="tocS_RdsRequirements">RdsRequirements</h2>
<!-- backwards compatibility -->
<a id="schemardsrequirements"></a>
<a id="schema_RdsRequirements"></a>
<a id="tocSrdsrequirements"></a>
<a id="tocsrdsrequirements"></a>

```json
{
  "EngineEdition": {},
  "InstanceVcpu": {},
  "InstanceMemory": {},
  "StorageSize": {},
  "StorageIops": {},
  "DeploymentOption": {}
}
```

Provides information that describes the requirements to the target engine on Amazon RDS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngineEdition|object|false|none|none|
|InstanceVcpu|object|false|none|none|
|InstanceMemory|object|false|none|none|
|StorageSize|object|false|none|none|
|StorageIops|object|false|none|none|
|DeploymentOption|object|false|none|none|

<h2 id="tocS_RdsRecommendation">RdsRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemardsrecommendation"></a>
<a id="schema_RdsRecommendation"></a>
<a id="tocSrdsrecommendation"></a>
<a id="tocsrdsrecommendation"></a>

```json
{
  "RequirementsToTarget": {
    "EngineEdition": {},
    "InstanceVcpu": {},
    "InstanceMemory": {},
    "StorageSize": {},
    "StorageIops": {},
    "DeploymentOption": {}
  },
  "TargetConfiguration": {
    "EngineEdition": {},
    "InstanceType": {},
    "InstanceVcpu": {},
    "InstanceMemory": {},
    "StorageType": {},
    "StorageSize": {},
    "StorageIops": {},
    "DeploymentOption": {}
  }
}
```

Provides information that describes a recommendation of a target engine on Amazon RDS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequirementsToTarget|object|false|none|none|
|TargetConfiguration|object|false|none|none|

<h2 id="tocS_RecommendationSettings">RecommendationSettings</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationsettings"></a>
<a id="schema_RecommendationSettings"></a>
<a id="tocSrecommendationsettings"></a>
<a id="tocsrecommendationsettings"></a>

```json
{
  "InstanceSizingType": {},
  "WorkloadType": {}
}
```

Provides information about the required target engine settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceSizingType|object|true|none|none|
|WorkloadType|object|true|none|none|

<h2 id="tocS_RecommendationData">RecommendationData</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationdata"></a>
<a id="schema_RecommendationData"></a>
<a id="tocSrecommendationdata"></a>
<a id="tocsrecommendationdata"></a>

```json
{
  "RdsEngine": {
    "RequirementsToTarget": {
      "EngineEdition": {},
      "InstanceVcpu": {},
      "InstanceMemory": {},
      "StorageSize": {},
      "StorageIops": {},
      "DeploymentOption": {}
    },
    "TargetConfiguration": {
      "EngineEdition": {},
      "InstanceType": {},
      "InstanceVcpu": {},
      "InstanceMemory": {},
      "StorageType": {},
      "StorageSize": {},
      "StorageIops": {},
      "DeploymentOption": {}
    }
  }
}
```

Provides information about the target engine for the specified source database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RdsEngine|object|false|none|none|

<h2 id="tocS_Recommendation">Recommendation</h2>
<!-- backwards compatibility -->
<a id="schemarecommendation"></a>
<a id="schema_Recommendation"></a>
<a id="tocSrecommendation"></a>
<a id="tocsrecommendation"></a>

```json
{
  "DatabaseId": {},
  "EngineName": {},
  "CreatedDate": {},
  "Status": {},
  "Preferred": {},
  "Settings": {
    "InstanceSizingType": {},
    "WorkloadType": {}
  },
  "Data": {
    "RdsEngine": {
      "RequirementsToTarget": {
        "EngineEdition": {},
        "InstanceVcpu": {},
        "InstanceMemory": {},
        "StorageSize": {},
        "StorageIops": {},
        "DeploymentOption": {}
      },
      "TargetConfiguration": {
        "EngineEdition": {},
        "InstanceType": {},
        "InstanceVcpu": {},
        "InstanceMemory": {},
        "StorageType": {},
        "StorageSize": {},
        "StorageIops": {},
        "DeploymentOption": {}
      }
    }
  }
}
```

<p>Provides information that describes a recommendation of a target engine.</p> <p>A <i>recommendation</i> is a set of possible Amazon Web Services target engines that you can choose to migrate your source on-premises database. In this set, Fleet Advisor suggests a single target engine as the right sized migration destination. To determine this rightsized migration destination, Fleet Advisor uses the inventory metadata and metrics from data collector. You can use recommendations before the start of migration to save costs and reduce risks.</p> <p>With recommendations, you can explore different target options and compare metrics, so you can make an informed decision when you choose the migration target.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseId|object|false|none|none|
|EngineName|object|false|none|none|
|CreatedDate|object|false|none|none|
|Status|object|false|none|none|
|Preferred|object|false|none|none|
|Settings|object|false|none|none|
|Data|object|false|none|none|

<h2 id="tocS_RedisAuthTypeValue">RedisAuthTypeValue</h2>
<!-- backwards compatibility -->
<a id="schemaredisauthtypevalue"></a>
<a id="schema_RedisAuthTypeValue"></a>
<a id="tocSredisauthtypevalue"></a>
<a id="tocsredisauthtypevalue"></a>

```json
"none"
```

<h2 id="tocS_SslSecurityProtocolValue">SslSecurityProtocolValue</h2>
<!-- backwards compatibility -->
<a id="schemasslsecurityprotocolvalue"></a>
<a id="schema_SslSecurityProtocolValue"></a>
<a id="tocSsslsecurityprotocolvalue"></a>
<a id="tocssslsecurityprotocolvalue"></a>

```json
"plaintext"
```

<h2 id="tocS_RefreshSchemasStatusTypeValue">RefreshSchemasStatusTypeValue</h2>
<!-- backwards compatibility -->
<a id="schemarefreshschemasstatustypevalue"></a>
<a id="schema_RefreshSchemasStatusTypeValue"></a>
<a id="tocSrefreshschemasstatustypevalue"></a>
<a id="tocsrefreshschemasstatustypevalue"></a>

```json
"successful"
```

<h2 id="tocS_ReloadOptionValue">ReloadOptionValue</h2>
<!-- backwards compatibility -->
<a id="schemareloadoptionvalue"></a>
<a id="schema_ReloadOptionValue"></a>
<a id="tocSreloadoptionvalue"></a>
<a id="tocsreloadoptionvalue"></a>

```json
"data-reload"
```

<h2 id="tocS_TableListToReload">TableListToReload</h2>
<!-- backwards compatibility -->
<a id="schematablelisttoreload"></a>
<a id="schema_TableListToReload"></a>
<a id="tocStablelisttoreload"></a>
<a id="tocstablelisttoreload"></a>

```json
[
  {
    "SchemaName": {},
    "TableName": {}
  }
]
```

<h2 id="tocS_VpcSecurityGroupMembershipList">VpcSecurityGroupMembershipList</h2>
<!-- backwards compatibility -->
<a id="schemavpcsecuritygroupmembershiplist"></a>
<a id="schema_VpcSecurityGroupMembershipList"></a>
<a id="tocSvpcsecuritygroupmembershiplist"></a>
<a id="tocsvpcsecuritygroupmembershiplist"></a>

```json
[
  {
    "VpcSecurityGroupId": {},
    "Status": {}
  }
]
```

<h2 id="tocS_ReplicationPendingModifiedValues">ReplicationPendingModifiedValues</h2>
<!-- backwards compatibility -->
<a id="schemareplicationpendingmodifiedvalues"></a>
<a id="schema_ReplicationPendingModifiedValues"></a>
<a id="tocSreplicationpendingmodifiedvalues"></a>
<a id="tocsreplicationpendingmodifiedvalues"></a>

```json
{
  "ReplicationInstanceClass": {},
  "AllocatedStorage": {},
  "MultiAZ": {},
  "EngineVersion": {},
  "NetworkType": {}
}
```

Provides information about the values of pending modifications to a replication instance. This data type is an object of the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html"> <code>ReplicationInstance</code> </a> user-defined data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationInstanceClass|object|false|none|none|
|AllocatedStorage|object|false|none|none|
|MultiAZ|object|false|none|none|
|EngineVersion|object|false|none|none|
|NetworkType|object|false|none|none|

<h2 id="tocS_ReplicationInstancePublicIpAddressList">ReplicationInstancePublicIpAddressList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationinstancepublicipaddresslist"></a>
<a id="schema_ReplicationInstancePublicIpAddressList"></a>
<a id="tocSreplicationinstancepublicipaddresslist"></a>
<a id="tocsreplicationinstancepublicipaddresslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReplicationInstancePrivateIpAddressList">ReplicationInstancePrivateIpAddressList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationinstanceprivateipaddresslist"></a>
<a id="schema_ReplicationInstancePrivateIpAddressList"></a>
<a id="tocSreplicationinstanceprivateipaddresslist"></a>
<a id="tocsreplicationinstanceprivateipaddresslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReplicationInstanceIpv6AddressList">ReplicationInstanceIpv6AddressList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationinstanceipv6addresslist"></a>
<a id="schema_ReplicationInstanceIpv6AddressList"></a>
<a id="tocSreplicationinstanceipv6addresslist"></a>
<a id="tocsreplicationinstanceipv6addresslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReplicationInstanceTaskLog">ReplicationInstanceTaskLog</h2>
<!-- backwards compatibility -->
<a id="schemareplicationinstancetasklog"></a>
<a id="schema_ReplicationInstanceTaskLog"></a>
<a id="tocSreplicationinstancetasklog"></a>
<a id="tocsreplicationinstancetasklog"></a>

```json
{
  "ReplicationTaskName": {},
  "ReplicationTaskArn": {},
  "ReplicationInstanceTaskLogSize": {}
}
```

Contains metadata for a replication instance task log.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskName|object|false|none|none|
|ReplicationTaskArn|object|false|none|none|
|ReplicationInstanceTaskLogSize|object|false|none|none|

<h2 id="tocS_SubnetList">SubnetList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetlist"></a>
<a id="schema_SubnetList"></a>
<a id="tocSsubnetlist"></a>
<a id="tocssubnetlist"></a>

```json
[
  {
    "SubnetIdentifier": {},
    "SubnetAvailabilityZone": {
      "Name": {}
    },
    "SubnetStatus": {}
  }
]
```

<h2 id="tocS_ReplicationTaskStats">ReplicationTaskStats</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtaskstats"></a>
<a id="schema_ReplicationTaskStats"></a>
<a id="tocSreplicationtaskstats"></a>
<a id="tocsreplicationtaskstats"></a>

```json
{
  "FullLoadProgressPercent": {},
  "ElapsedTimeMillis": {},
  "TablesLoaded": {},
  "TablesLoading": {},
  "TablesQueued": {},
  "TablesErrored": {},
  "FreshStartDate": {},
  "StartDate": {},
  "StopDate": {},
  "FullLoadStartDate": {},
  "FullLoadFinishDate": {}
}
```

In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FullLoadProgressPercent|object|false|none|none|
|ElapsedTimeMillis|object|false|none|none|
|TablesLoaded|object|false|none|none|
|TablesLoading|object|false|none|none|
|TablesQueued|object|false|none|none|
|TablesErrored|object|false|none|none|
|FreshStartDate|object|false|none|none|
|StartDate|object|false|none|none|
|StopDate|object|false|none|none|
|FullLoadStartDate|object|false|none|none|
|FullLoadFinishDate|object|false|none|none|

<h2 id="tocS_ReplicationTaskAssessmentResult">ReplicationTaskAssessmentResult</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtaskassessmentresult"></a>
<a id="schema_ReplicationTaskAssessmentResult"></a>
<a id="tocSreplicationtaskassessmentresult"></a>
<a id="tocsreplicationtaskassessmentresult"></a>

```json
{
  "ReplicationTaskIdentifier": {},
  "ReplicationTaskArn": {},
  "ReplicationTaskLastAssessmentDate": {},
  "AssessmentStatus": {},
  "AssessmentResultsFile": {},
  "AssessmentResults": {},
  "S3ObjectUrl": {}
}
```

 The task assessment report in JSON format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskIdentifier|object|false|none|none|
|ReplicationTaskArn|object|false|none|none|
|ReplicationTaskLastAssessmentDate|object|false|none|none|
|AssessmentStatus|object|false|none|none|
|AssessmentResultsFile|object|false|none|none|
|AssessmentResults|object|false|none|none|
|S3ObjectUrl|object|false|none|none|

<h2 id="tocS_ReplicationTaskAssessmentRunProgress">ReplicationTaskAssessmentRunProgress</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtaskassessmentrunprogress"></a>
<a id="schema_ReplicationTaskAssessmentRunProgress"></a>
<a id="tocSreplicationtaskassessmentrunprogress"></a>
<a id="tocsreplicationtaskassessmentrunprogress"></a>

```json
{
  "IndividualAssessmentCount": {},
  "IndividualAssessmentCompletedCount": {}
}
```

The progress values reported by the <code>AssessmentProgress</code> response element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndividualAssessmentCount|object|false|none|none|
|IndividualAssessmentCompletedCount|object|false|none|none|

<h2 id="tocS_ReplicationTaskIndividualAssessment">ReplicationTaskIndividualAssessment</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtaskindividualassessment"></a>
<a id="schema_ReplicationTaskIndividualAssessment"></a>
<a id="tocSreplicationtaskindividualassessment"></a>
<a id="tocsreplicationtaskindividualassessment"></a>

```json
{
  "ReplicationTaskIndividualAssessmentArn": {},
  "ReplicationTaskAssessmentRunArn": {},
  "IndividualAssessmentName": {},
  "Status": {},
  "ReplicationTaskIndividualAssessmentStartDate": {}
}
```

Provides information that describes an individual assessment from a premigration assessment run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationTaskIndividualAssessmentArn|object|false|none|none|
|ReplicationTaskAssessmentRunArn|object|false|none|none|
|IndividualAssessmentName|object|false|none|none|
|Status|object|false|none|none|
|ReplicationTaskIndividualAssessmentStartDate|object|false|none|none|

<h2 id="tocS_SchemaShortInfoResponse">SchemaShortInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschemashortinforesponse"></a>
<a id="schema_SchemaShortInfoResponse"></a>
<a id="tocSschemashortinforesponse"></a>
<a id="tocsschemashortinforesponse"></a>

```json
{
  "SchemaId": {},
  "SchemaName": {},
  "DatabaseId": {},
  "DatabaseName": {},
  "DatabaseIpAddress": {}
}
```

Describes a schema in a Fleet Advisor collector inventory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaId|object|false|none|none|
|SchemaName|object|false|none|none|
|DatabaseId|object|false|none|none|
|DatabaseName|object|false|none|none|
|DatabaseIpAddress|object|false|none|none|

<h2 id="tocS_StartRecommendationsRequestEntry">StartRecommendationsRequestEntry</h2>
<!-- backwards compatibility -->
<a id="schemastartrecommendationsrequestentry"></a>
<a id="schema_StartRecommendationsRequestEntry"></a>
<a id="tocSstartrecommendationsrequestentry"></a>
<a id="tocsstartrecommendationsrequestentry"></a>

```json
{
  "DatabaseId": {},
  "Settings": {
    "InstanceSizingType": {},
    "WorkloadType": {}
  }
}
```

Provides information about the source database to analyze and provide target recommendations according to the specified requirements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseId|object|true|none|none|
|Settings|object|true|none|none|

<h2 id="tocS_StartReplicationTaskTypeValue">StartReplicationTaskTypeValue</h2>
<!-- backwards compatibility -->
<a id="schemastartreplicationtasktypevalue"></a>
<a id="schema_StartReplicationTaskTypeValue"></a>
<a id="tocSstartreplicationtasktypevalue"></a>
<a id="tocsstartreplicationtasktypevalue"></a>

```json
"start-replication"
```

<h2 id="tocS_Subnet">Subnet</h2>
<!-- backwards compatibility -->
<a id="schemasubnet"></a>
<a id="schema_Subnet"></a>
<a id="tocSsubnet"></a>
<a id="tocssubnet"></a>

```json
{
  "SubnetIdentifier": {},
  "SubnetAvailabilityZone": {
    "Name": {}
  },
  "SubnetStatus": {}
}
```

In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIdentifier|object|false|none|none|
|SubnetAvailabilityZone|object|false|none|none|
|SubnetStatus|object|false|none|none|

<h2 id="tocS_SupportedEndpointType">SupportedEndpointType</h2>
<!-- backwards compatibility -->
<a id="schemasupportedendpointtype"></a>
<a id="schema_SupportedEndpointType"></a>
<a id="tocSsupportedendpointtype"></a>
<a id="tocssupportedendpointtype"></a>

```json
{
  "EngineName": {},
  "SupportsCDC": {},
  "EndpointType": {},
  "ReplicationInstanceEngineMinimumVersion": {},
  "EngineDisplayName": {}
}
```

Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngineName|object|false|none|none|
|SupportsCDC|object|false|none|none|
|EndpointType|object|false|none|none|
|ReplicationInstanceEngineMinimumVersion|object|false|none|none|
|EngineDisplayName|object|false|none|none|

<h2 id="tocS_TableToReload">TableToReload</h2>
<!-- backwards compatibility -->
<a id="schematabletoreload"></a>
<a id="schema_TableToReload"></a>
<a id="tocStabletoreload"></a>
<a id="tocstabletoreload"></a>

```json
{
  "SchemaName": {},
  "TableName": {}
}
```

Provides the name of the schema and table to be reloaded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaName|object|true|none|none|
|TableName|object|true|none|none|

<h2 id="tocS_TableStatistics">TableStatistics</h2>
<!-- backwards compatibility -->
<a id="schematablestatistics"></a>
<a id="schema_TableStatistics"></a>
<a id="tocStablestatistics"></a>
<a id="tocstablestatistics"></a>

```json
{
  "SchemaName": {},
  "TableName": {},
  "Inserts": {},
  "Deletes": {},
  "Updates": {},
  "Ddls": {},
  "AppliedInserts": {},
  "AppliedDeletes": {},
  "AppliedUpdates": {},
  "AppliedDdls": {},
  "FullLoadRows": {},
  "FullLoadCondtnlChkFailedRows": {},
  "FullLoadErrorRows": {},
  "FullLoadStartTime": {},
  "FullLoadEndTime": {},
  "FullLoadReloaded": {},
  "LastUpdateTime": {},
  "TableState": {},
  "ValidationPendingRecords": {},
  "ValidationFailedRecords": {},
  "ValidationSuspendedRecords": {},
  "ValidationState": {},
  "ValidationStateDetails": {}
}
```

Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaName|object|false|none|none|
|TableName|object|false|none|none|
|Inserts|object|false|none|none|
|Deletes|object|false|none|none|
|Updates|object|false|none|none|
|Ddls|object|false|none|none|
|AppliedInserts|object|false|none|none|
|AppliedDeletes|object|false|none|none|
|AppliedUpdates|object|false|none|none|
|AppliedDdls|object|false|none|none|
|FullLoadRows|object|false|none|none|
|FullLoadCondtnlChkFailedRows|object|false|none|none|
|FullLoadErrorRows|object|false|none|none|
|FullLoadStartTime|object|false|none|none|
|FullLoadEndTime|object|false|none|none|
|FullLoadReloaded|object|false|none|none|
|LastUpdateTime|object|false|none|none|
|TableState|object|false|none|none|
|ValidationPendingRecords|object|false|none|none|
|ValidationFailedRecords|object|false|none|none|
|ValidationSuspendedRecords|object|false|none|none|
|ValidationState|object|false|none|none|
|ValidationStateDetails|object|false|none|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {},
  "ResourceArn": {}
}
```

<p>A user-defined key-value pair that describes metadata added to an DMS resource and that is used by operations such as the following:</p> <ul> <li> <p> <code>AddTagsToResource</code> </p> </li> <li> <p> <code>ListTagsForResource</code> </p> </li> <li> <p> <code>RemoveTagsFromResource</code> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|
|ResourceArn|object|false|none|none|

<h2 id="tocS_VpcSecurityGroupMembership">VpcSecurityGroupMembership</h2>
<!-- backwards compatibility -->
<a id="schemavpcsecuritygroupmembership"></a>
<a id="schema_VpcSecurityGroupMembership"></a>
<a id="tocSvpcsecuritygroupmembership"></a>
<a id="tocsvpcsecuritygroupmembership"></a>

```json
{
  "VpcSecurityGroupId": {},
  "Status": {}
}
```

Describes the status of a security group associated with the virtual private cloud (VPC) hosting your replication and DB instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcSecurityGroupId|object|false|none|none|
|Status|object|false|none|none|
