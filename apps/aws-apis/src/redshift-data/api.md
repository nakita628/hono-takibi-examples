<h1 id="redshift-data-api-service">Redshift Data API Service v2019-12-20</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>You can use the Amazon Redshift Data API to run queries on Amazon Redshift tables. You can run SQL statements, which are committed if the statement succeeds. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>

Base URLs:

* <a href="http://redshift-data.us-east-1.amazonaws.com">http://redshift-data.us-east-1.amazonaws.com</a> - The Redshift Data API Service multi-region endpoint

* <a href="https://redshift-data.us-east-1.amazonaws.com">https://redshift-data.us-east-1.amazonaws.com</a> - The Redshift Data API Service multi-region endpoint

* <a href="http://redshift-data.cn-north-1.amazonaws.com.cn">http://redshift-data.cn-north-1.amazonaws.com.cn</a> - The Redshift Data API Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://redshift-data.cn-north-1.amazonaws.com.cn">https://redshift-data.cn-north-1.amazonaws.com.cn</a> - The Redshift Data API Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/redshift-data/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="redshift-data-api-service-default">Default</h1>

## BatchExecuteStatement

<a id="opIdBatchExecuteStatement"></a>

> Code samples

```bash
curl 'https://redshift-data.us-east-1.amazonaws.com/#X-Amz-Target=RedshiftData.BatchExecuteStatement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: RedshiftData.BatchExecuteStatement' \
  -d '{
    "ClientToken": {},
    "ClusterIdentifier": {},
    "Database": {},
    "DbUser": {},
    "SecretArn": {},
    "Sqls": {},
    "StatementName": {},
    "WithEvent": {},
    "WorkgroupName": {}
  }'
```

`POST /#X-Amz-Target=RedshiftData.BatchExecuteStatement`

<p>Runs one or more SQL statements, which can be data manipulation language (DML) or data definition language (DDL). Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret stored in Secrets Manager which has <code>username</code> and <code>password</code>. The specified secret contains credentials to connect to the <code>database</code> you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.</p> </li> <li> <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p> <ul> <li> <p>When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p> </li> </ul> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>

> Body parameter

```json
{
  "ClientToken": {},
  "ClusterIdentifier": {},
  "Database": {},
  "DbUser": {},
  "SecretArn": {},
  "Sqls": {},
  "StatementName": {},
  "WithEvent": {},
  "WorkgroupName": {}
}
```

<h3 id="batchexecutestatement-parameters">Parameters</h3>

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
|body|body|[BatchExecuteStatementInput](#schemabatchexecutestatementinput)|true|none|
|» ClientToken|body|object|false|none|
|» ClusterIdentifier|body|object|false|none|
|» Database|body|object|true|none|
|» DbUser|body|object|false|none|
|» SecretArn|body|object|false|none|
|» Sqls|body|object|true|none|
|» StatementName|body|object|false|none|
|» WithEvent|body|object|false|none|
|» WorkgroupName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|RedshiftData.BatchExecuteStatement|

> Example responses

> 200 Response

```json
{
  "ClusterIdentifier": {},
  "CreatedAt": {},
  "Database": {},
  "DbUser": {},
  "Id": {},
  "SecretArn": {},
  "WorkgroupName": {}
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

<h3 id="batchexecutestatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchExecuteStatementOutput](#schemabatchexecutestatementoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ActiveStatementsExceededException|[ActiveStatementsExceededException](#schemaactivestatementsexceededexception)|
|482|482|BatchExecuteStatementException|[BatchExecuteStatementException](#schemabatchexecutestatementexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelStatement

<a id="opIdCancelStatement"></a>

> Code samples

```bash
curl 'https://redshift-data.us-east-1.amazonaws.com/#X-Amz-Target=RedshiftData.CancelStatement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: RedshiftData.CancelStatement' \
  -d '{
    "Id": {}
  }'
```

`POST /#X-Amz-Target=RedshiftData.CancelStatement`

<p>Cancels a running query. To be canceled, a query must be running. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>

> Body parameter

```json
{
  "Id": {}
}
```

<h3 id="cancelstatement-parameters">Parameters</h3>

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
|body|body|[CancelStatementRequest](#schemacancelstatementrequest)|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|RedshiftData.CancelStatement|

> Example responses

> 200 Response

```json
{
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

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="cancelstatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelStatementResponse](#schemacancelstatementresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|DatabaseConnectionException|[DatabaseConnectionException](#schemadatabaseconnectionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeStatement

<a id="opIdDescribeStatement"></a>

> Code samples

```bash
curl 'https://redshift-data.us-east-1.amazonaws.com/#X-Amz-Target=RedshiftData.DescribeStatement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: RedshiftData.DescribeStatement' \
  -d '{
    "Id": {}
  }'
```

`POST /#X-Amz-Target=RedshiftData.DescribeStatement`

<p>Describes the details about a specific instance when a query was run by the Amazon Redshift Data API. The information includes when the query started, when it finished, the query status, the number of rows returned, and the SQL statement. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>

> Body parameter

```json
{
  "Id": {}
}
```

<h3 id="describestatement-parameters">Parameters</h3>

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
|body|body|[DescribeStatementRequest](#schemadescribestatementrequest)|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|RedshiftData.DescribeStatement|

> Example responses

> 200 Response

```json
{
  "ClusterIdentifier": {},
  "CreatedAt": {},
  "Database": {},
  "DbUser": {},
  "Duration": {},
  "Error": {},
  "HasResultSet": {},
  "Id": {},
  "QueryParameters": {},
  "QueryString": {},
  "RedshiftPid": {},
  "RedshiftQueryId": {},
  "ResultRows": {},
  "ResultSize": {},
  "SecretArn": {},
  "Status": {},
  "SubStatements": {},
  "UpdatedAt": {},
  "WorkgroupName": {}
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

<h3 id="describestatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeStatementResponse](#schemadescribestatementresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTable

<a id="opIdDescribeTable"></a>

> Code samples

```bash
curl 'https://redshift-data.us-east-1.amazonaws.com/#X-Amz-Target=RedshiftData.DescribeTable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: RedshiftData.DescribeTable' \
  -d '{
    "ClusterIdentifier": {},
    "ConnectedDatabase": {},
    "Database": {},
    "DbUser": {},
    "MaxResults": {},
    "NextToken": {},
    "Schema": {},
    "SecretArn": {},
    "Table": {},
    "WorkgroupName": {}
  }'
```

`POST /#X-Amz-Target=RedshiftData.DescribeTable`

<p>Describes the detailed information about a table from metadata in the cluster. The information includes its columns. A token is returned to page through the column list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret stored in Secrets Manager which has <code>username</code> and <code>password</code>. The specified secret contains credentials to connect to the <code>database</code> you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.</p> </li> <li> <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p> <ul> <li> <p>When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p> </li> </ul> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>

> Body parameter

```json
{
  "ClusterIdentifier": {},
  "ConnectedDatabase": {},
  "Database": {},
  "DbUser": {},
  "MaxResults": {},
  "NextToken": {},
  "Schema": {},
  "SecretArn": {},
  "Table": {},
  "WorkgroupName": {}
}
```

<h3 id="describetable-parameters">Parameters</h3>

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
|body|body|[DescribeTableRequest](#schemadescribetablerequest)|true|none|
|» ClusterIdentifier|body|object|false|none|
|» ConnectedDatabase|body|object|false|none|
|» Database|body|object|true|none|
|» DbUser|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Schema|body|object|false|none|
|» SecretArn|body|object|false|none|
|» Table|body|object|false|none|
|» WorkgroupName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|RedshiftData.DescribeTable|

> Example responses

> 200 Response

```json
{
  "ColumnList": {},
  "NextToken": {},
  "TableName": {}
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

<h3 id="describetable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTableResponse](#schemadescribetableresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|DatabaseConnectionException|[DatabaseConnectionException](#schemadatabaseconnectionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExecuteStatement

<a id="opIdExecuteStatement"></a>

> Code samples

```bash
curl 'https://redshift-data.us-east-1.amazonaws.com/#X-Amz-Target=RedshiftData.ExecuteStatement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: RedshiftData.ExecuteStatement' \
  -d '{
    "ClientToken": {},
    "ClusterIdentifier": {},
    "Database": {},
    "DbUser": {},
    "Parameters": {},
    "SecretArn": {},
    "Sql": {},
    "StatementName": {},
    "WithEvent": {},
    "WorkgroupName": {}
  }'
```

`POST /#X-Amz-Target=RedshiftData.ExecuteStatement`

<p>Runs an SQL statement, which can be data manipulation language (DML) or data definition language (DDL). This statement must be a single SQL statement. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret stored in Secrets Manager which has <code>username</code> and <code>password</code>. The specified secret contains credentials to connect to the <code>database</code> you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.</p> </li> <li> <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p> <ul> <li> <p>When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p> </li> </ul> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>

> Body parameter

```json
{
  "ClientToken": {},
  "ClusterIdentifier": {},
  "Database": {},
  "DbUser": {},
  "Parameters": {},
  "SecretArn": {},
  "Sql": {},
  "StatementName": {},
  "WithEvent": {},
  "WorkgroupName": {}
}
```

<h3 id="executestatement-parameters">Parameters</h3>

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
|body|body|[ExecuteStatementInput](#schemaexecutestatementinput)|true|none|
|» ClientToken|body|object|false|none|
|» ClusterIdentifier|body|object|false|none|
|» Database|body|object|true|none|
|» DbUser|body|object|false|none|
|» Parameters|body|object|false|none|
|» SecretArn|body|object|false|none|
|» Sql|body|object|true|none|
|» StatementName|body|object|false|none|
|» WithEvent|body|object|false|none|
|» WorkgroupName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|RedshiftData.ExecuteStatement|

> Example responses

> 200 Response

```json
{
  "ClusterIdentifier": {},
  "CreatedAt": {},
  "Database": {},
  "DbUser": {},
  "Id": {},
  "SecretArn": {},
  "WorkgroupName": {}
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

<h3 id="executestatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExecuteStatementOutput](#schemaexecutestatementoutput)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ExecuteStatementException|[ExecuteStatementException](#schemaexecutestatementexception)|
|482|482|ActiveStatementsExceededException|[ActiveStatementsExceededException](#schemaactivestatementsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStatementResult

<a id="opIdGetStatementResult"></a>

> Code samples

```bash
curl 'https://redshift-data.us-east-1.amazonaws.com/#X-Amz-Target=RedshiftData.GetStatementResult' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: RedshiftData.GetStatementResult' \
  -d '{
    "Id": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=RedshiftData.GetStatementResult`

<p>Fetches the temporarily cached result of an SQL statement. A token is returned to page through the statement results. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>

> Body parameter

```json
{
  "Id": {},
  "NextToken": {}
}
```

<h3 id="getstatementresult-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetStatementResultRequest](#schemagetstatementresultrequest)|true|none|
|» Id|body|object|true|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|RedshiftData.GetStatementResult|

> Example responses

> 200 Response

```json
{
  "ColumnMetadata": {},
  "NextToken": {},
  "Records": {},
  "TotalNumRows": {}
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

<h3 id="getstatementresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStatementResultResponse](#schemagetstatementresultresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatabases

<a id="opIdListDatabases"></a>

> Code samples

```bash
curl 'https://redshift-data.us-east-1.amazonaws.com/#X-Amz-Target=RedshiftData.ListDatabases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: RedshiftData.ListDatabases' \
  -d '{
    "ClusterIdentifier": {},
    "Database": {},
    "DbUser": {},
    "MaxResults": {},
    "NextToken": {},
    "SecretArn": {},
    "WorkgroupName": {}
  }'
```

`POST /#X-Amz-Target=RedshiftData.ListDatabases`

<p>List the databases in a cluster. A token is returned to page through the database list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret stored in Secrets Manager which has <code>username</code> and <code>password</code>. The specified secret contains credentials to connect to the <code>database</code> you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.</p> </li> <li> <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p> <ul> <li> <p>When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p> </li> </ul> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>

> Body parameter

```json
{
  "ClusterIdentifier": {},
  "Database": {},
  "DbUser": {},
  "MaxResults": {},
  "NextToken": {},
  "SecretArn": {},
  "WorkgroupName": {}
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
|» ClusterIdentifier|body|object|false|none|
|» Database|body|object|true|none|
|» DbUser|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» SecretArn|body|object|false|none|
|» WorkgroupName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|RedshiftData.ListDatabases|

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

<h3 id="listdatabases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatabasesResponse](#schemalistdatabasesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|DatabaseConnectionException|[DatabaseConnectionException](#schemadatabaseconnectionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSchemas

<a id="opIdListSchemas"></a>

> Code samples

```bash
curl 'https://redshift-data.us-east-1.amazonaws.com/#X-Amz-Target=RedshiftData.ListSchemas' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: RedshiftData.ListSchemas' \
  -d '{
    "ClusterIdentifier": {},
    "ConnectedDatabase": {},
    "Database": {},
    "DbUser": {},
    "MaxResults": {},
    "NextToken": {},
    "SchemaPattern": {},
    "SecretArn": {},
    "WorkgroupName": {}
  }'
```

`POST /#X-Amz-Target=RedshiftData.ListSchemas`

<p>Lists the schemas in a database. A token is returned to page through the schema list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret stored in Secrets Manager which has <code>username</code> and <code>password</code>. The specified secret contains credentials to connect to the <code>database</code> you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.</p> </li> <li> <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p> <ul> <li> <p>When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p> </li> </ul> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>

> Body parameter

```json
{
  "ClusterIdentifier": {},
  "ConnectedDatabase": {},
  "Database": {},
  "DbUser": {},
  "MaxResults": {},
  "NextToken": {},
  "SchemaPattern": {},
  "SecretArn": {},
  "WorkgroupName": {}
}
```

<h3 id="listschemas-parameters">Parameters</h3>

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
|body|body|[ListSchemasRequest](#schemalistschemasrequest)|true|none|
|» ClusterIdentifier|body|object|false|none|
|» ConnectedDatabase|body|object|false|none|
|» Database|body|object|true|none|
|» DbUser|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» SchemaPattern|body|object|false|none|
|» SecretArn|body|object|false|none|
|» WorkgroupName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|RedshiftData.ListSchemas|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Schemas": {}
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

<h3 id="listschemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSchemasResponse](#schemalistschemasresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|DatabaseConnectionException|[DatabaseConnectionException](#schemadatabaseconnectionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStatements

<a id="opIdListStatements"></a>

> Code samples

```bash
curl 'https://redshift-data.us-east-1.amazonaws.com/#X-Amz-Target=RedshiftData.ListStatements' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: RedshiftData.ListStatements' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "RoleLevel": {},
    "StatementName": {},
    "Status": {}
  }'
```

`POST /#X-Amz-Target=RedshiftData.ListStatements`

<p>List of SQL statements. By default, only finished statements are shown. A token is returned to page through the statement list. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "RoleLevel": {},
  "StatementName": {},
  "Status": {}
}
```

<h3 id="liststatements-parameters">Parameters</h3>

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
|body|body|[ListStatementsRequest](#schemaliststatementsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» RoleLevel|body|object|false|none|
|» StatementName|body|object|false|none|
|» Status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|RedshiftData.ListStatements|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Statements": {}
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

<h3 id="liststatements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStatementsResponse](#schemaliststatementsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTables

<a id="opIdListTables"></a>

> Code samples

```bash
curl 'https://redshift-data.us-east-1.amazonaws.com/#X-Amz-Target=RedshiftData.ListTables' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: RedshiftData.ListTables' \
  -d '{
    "ClusterIdentifier": {},
    "ConnectedDatabase": {},
    "Database": {},
    "DbUser": {},
    "MaxResults": {},
    "NextToken": {},
    "SchemaPattern": {},
    "SecretArn": {},
    "TablePattern": {},
    "WorkgroupName": {}
  }'
```

`POST /#X-Amz-Target=RedshiftData.ListTables`

<p>List the tables in a database. If neither <code>SchemaPattern</code> nor <code>TablePattern</code> are specified, then all tables in the database are returned. A token is returned to page through the table list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret stored in Secrets Manager which has <code>username</code> and <code>password</code>. The specified secret contains credentials to connect to the <code>database</code> you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.</p> </li> <li> <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p> <ul> <li> <p>When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p> </li> </ul> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>

> Body parameter

```json
{
  "ClusterIdentifier": {},
  "ConnectedDatabase": {},
  "Database": {},
  "DbUser": {},
  "MaxResults": {},
  "NextToken": {},
  "SchemaPattern": {},
  "SecretArn": {},
  "TablePattern": {},
  "WorkgroupName": {}
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
|» ClusterIdentifier|body|object|false|none|
|» ConnectedDatabase|body|object|false|none|
|» Database|body|object|true|none|
|» DbUser|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» SchemaPattern|body|object|false|none|
|» SecretArn|body|object|false|none|
|» TablePattern|body|object|false|none|
|» WorkgroupName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|RedshiftData.ListTables|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Tables": {}
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

<h3 id="listtables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTablesResponse](#schemalisttablesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|DatabaseConnectionException|[DatabaseConnectionException](#schemadatabaseconnectionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchExecuteStatementOutput">BatchExecuteStatementOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchexecutestatementoutput"></a>
<a id="schema_BatchExecuteStatementOutput"></a>
<a id="tocSbatchexecutestatementoutput"></a>
<a id="tocsbatchexecutestatementoutput"></a>

```json
{
  "ClusterIdentifier": {},
  "CreatedAt": {},
  "Database": {},
  "DbUser": {},
  "Id": {},
  "SecretArn": {},
  "WorkgroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterIdentifier|object|false|none|none|
|CreatedAt|object|false|none|none|
|Database|object|false|none|none|
|DbUser|object|false|none|none|
|Id|object|false|none|none|
|SecretArn|object|false|none|none|
|WorkgroupName|object|false|none|none|

<h2 id="tocS_BatchExecuteStatementInput">BatchExecuteStatementInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchexecutestatementinput"></a>
<a id="schema_BatchExecuteStatementInput"></a>
<a id="tocSbatchexecutestatementinput"></a>
<a id="tocsbatchexecutestatementinput"></a>

```json
{
  "ClientToken": {},
  "ClusterIdentifier": {},
  "Database": {},
  "DbUser": {},
  "SecretArn": {},
  "Sqls": {},
  "StatementName": {},
  "WithEvent": {},
  "WorkgroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|false|none|none|
|ClusterIdentifier|object|false|none|none|
|Database|object|true|none|none|
|DbUser|object|false|none|none|
|SecretArn|object|false|none|none|
|Sqls|object|true|none|none|
|StatementName|object|false|none|none|
|WithEvent|object|false|none|none|
|WorkgroupName|object|false|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_ActiveStatementsExceededException">ActiveStatementsExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaactivestatementsexceededexception"></a>
<a id="schema_ActiveStatementsExceededException"></a>
<a id="tocSactivestatementsexceededexception"></a>
<a id="tocsactivestatementsexceededexception"></a>

```json
null
```

<h2 id="tocS_BatchExecuteStatementException">BatchExecuteStatementException</h2>
<!-- backwards compatibility -->
<a id="schemabatchexecutestatementexception"></a>
<a id="schema_BatchExecuteStatementException"></a>
<a id="tocSbatchexecutestatementexception"></a>
<a id="tocsbatchexecutestatementexception"></a>

```json
null
```

<h2 id="tocS_CancelStatementResponse">CancelStatementResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelstatementresponse"></a>
<a id="schema_CancelStatementResponse"></a>
<a id="tocScancelstatementresponse"></a>
<a id="tocscancelstatementresponse"></a>

```json
{
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|

<h2 id="tocS_CancelStatementRequest">CancelStatementRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelstatementrequest"></a>
<a id="schema_CancelStatementRequest"></a>
<a id="tocScancelstatementrequest"></a>
<a id="tocscancelstatementrequest"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_DatabaseConnectionException">DatabaseConnectionException</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseconnectionexception"></a>
<a id="schema_DatabaseConnectionException"></a>
<a id="tocSdatabaseconnectionexception"></a>
<a id="tocsdatabaseconnectionexception"></a>

```json
null
```

<h2 id="tocS_DescribeStatementResponse">DescribeStatementResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribestatementresponse"></a>
<a id="schema_DescribeStatementResponse"></a>
<a id="tocSdescribestatementresponse"></a>
<a id="tocsdescribestatementresponse"></a>

```json
{
  "ClusterIdentifier": {},
  "CreatedAt": {},
  "Database": {},
  "DbUser": {},
  "Duration": {},
  "Error": {},
  "HasResultSet": {},
  "Id": {},
  "QueryParameters": {},
  "QueryString": {},
  "RedshiftPid": {},
  "RedshiftQueryId": {},
  "ResultRows": {},
  "ResultSize": {},
  "SecretArn": {},
  "Status": {},
  "SubStatements": {},
  "UpdatedAt": {},
  "WorkgroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterIdentifier|object|false|none|none|
|CreatedAt|object|false|none|none|
|Database|object|false|none|none|
|DbUser|object|false|none|none|
|Duration|object|false|none|none|
|Error|object|false|none|none|
|HasResultSet|object|false|none|none|
|Id|object|true|none|none|
|QueryParameters|object|false|none|none|
|QueryString|object|false|none|none|
|RedshiftPid|object|false|none|none|
|RedshiftQueryId|object|false|none|none|
|ResultRows|object|false|none|none|
|ResultSize|object|false|none|none|
|SecretArn|object|false|none|none|
|Status|object|false|none|none|
|SubStatements|object|false|none|none|
|UpdatedAt|object|false|none|none|
|WorkgroupName|object|false|none|none|

<h2 id="tocS_DescribeStatementRequest">DescribeStatementRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribestatementrequest"></a>
<a id="schema_DescribeStatementRequest"></a>
<a id="tocSdescribestatementrequest"></a>
<a id="tocsdescribestatementrequest"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_DescribeTableResponse">DescribeTableResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetableresponse"></a>
<a id="schema_DescribeTableResponse"></a>
<a id="tocSdescribetableresponse"></a>
<a id="tocsdescribetableresponse"></a>

```json
{
  "ColumnList": {},
  "NextToken": {},
  "TableName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ColumnList|object|false|none|none|
|NextToken|object|false|none|none|
|TableName|object|false|none|none|

<h2 id="tocS_DescribeTableRequest">DescribeTableRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetablerequest"></a>
<a id="schema_DescribeTableRequest"></a>
<a id="tocSdescribetablerequest"></a>
<a id="tocsdescribetablerequest"></a>

```json
{
  "ClusterIdentifier": {},
  "ConnectedDatabase": {},
  "Database": {},
  "DbUser": {},
  "MaxResults": {},
  "NextToken": {},
  "Schema": {},
  "SecretArn": {},
  "Table": {},
  "WorkgroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterIdentifier|object|false|none|none|
|ConnectedDatabase|object|false|none|none|
|Database|object|true|none|none|
|DbUser|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Schema|object|false|none|none|
|SecretArn|object|false|none|none|
|Table|object|false|none|none|
|WorkgroupName|object|false|none|none|

<h2 id="tocS_ExecuteStatementOutput">ExecuteStatementOutput</h2>
<!-- backwards compatibility -->
<a id="schemaexecutestatementoutput"></a>
<a id="schema_ExecuteStatementOutput"></a>
<a id="tocSexecutestatementoutput"></a>
<a id="tocsexecutestatementoutput"></a>

```json
{
  "ClusterIdentifier": {},
  "CreatedAt": {},
  "Database": {},
  "DbUser": {},
  "Id": {},
  "SecretArn": {},
  "WorkgroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterIdentifier|object|false|none|none|
|CreatedAt|object|false|none|none|
|Database|object|false|none|none|
|DbUser|object|false|none|none|
|Id|object|false|none|none|
|SecretArn|object|false|none|none|
|WorkgroupName|object|false|none|none|

<h2 id="tocS_ExecuteStatementInput">ExecuteStatementInput</h2>
<!-- backwards compatibility -->
<a id="schemaexecutestatementinput"></a>
<a id="schema_ExecuteStatementInput"></a>
<a id="tocSexecutestatementinput"></a>
<a id="tocsexecutestatementinput"></a>

```json
{
  "ClientToken": {},
  "ClusterIdentifier": {},
  "Database": {},
  "DbUser": {},
  "Parameters": {},
  "SecretArn": {},
  "Sql": {},
  "StatementName": {},
  "WithEvent": {},
  "WorkgroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|false|none|none|
|ClusterIdentifier|object|false|none|none|
|Database|object|true|none|none|
|DbUser|object|false|none|none|
|Parameters|object|false|none|none|
|SecretArn|object|false|none|none|
|Sql|object|true|none|none|
|StatementName|object|false|none|none|
|WithEvent|object|false|none|none|
|WorkgroupName|object|false|none|none|

<h2 id="tocS_ExecuteStatementException">ExecuteStatementException</h2>
<!-- backwards compatibility -->
<a id="schemaexecutestatementexception"></a>
<a id="schema_ExecuteStatementException"></a>
<a id="tocSexecutestatementexception"></a>
<a id="tocsexecutestatementexception"></a>

```json
null
```

<h2 id="tocS_GetStatementResultResponse">GetStatementResultResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstatementresultresponse"></a>
<a id="schema_GetStatementResultResponse"></a>
<a id="tocSgetstatementresultresponse"></a>
<a id="tocsgetstatementresultresponse"></a>

```json
{
  "ColumnMetadata": {},
  "NextToken": {},
  "Records": {},
  "TotalNumRows": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ColumnMetadata|object|false|none|none|
|NextToken|object|false|none|none|
|Records|object|true|none|none|
|TotalNumRows|object|false|none|none|

<h2 id="tocS_GetStatementResultRequest">GetStatementResultRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstatementresultrequest"></a>
<a id="schema_GetStatementResultRequest"></a>
<a id="tocSgetstatementresultrequest"></a>
<a id="tocsgetstatementresultrequest"></a>

```json
{
  "Id": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|NextToken|object|false|none|none|

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
  "ClusterIdentifier": {},
  "Database": {},
  "DbUser": {},
  "MaxResults": {},
  "NextToken": {},
  "SecretArn": {},
  "WorkgroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterIdentifier|object|false|none|none|
|Database|object|true|none|none|
|DbUser|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|SecretArn|object|false|none|none|
|WorkgroupName|object|false|none|none|

<h2 id="tocS_ListSchemasResponse">ListSchemasResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistschemasresponse"></a>
<a id="schema_ListSchemasResponse"></a>
<a id="tocSlistschemasresponse"></a>
<a id="tocslistschemasresponse"></a>

```json
{
  "NextToken": {},
  "Schemas": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Schemas|object|false|none|none|

<h2 id="tocS_ListSchemasRequest">ListSchemasRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistschemasrequest"></a>
<a id="schema_ListSchemasRequest"></a>
<a id="tocSlistschemasrequest"></a>
<a id="tocslistschemasrequest"></a>

```json
{
  "ClusterIdentifier": {},
  "ConnectedDatabase": {},
  "Database": {},
  "DbUser": {},
  "MaxResults": {},
  "NextToken": {},
  "SchemaPattern": {},
  "SecretArn": {},
  "WorkgroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterIdentifier|object|false|none|none|
|ConnectedDatabase|object|false|none|none|
|Database|object|true|none|none|
|DbUser|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|SchemaPattern|object|false|none|none|
|SecretArn|object|false|none|none|
|WorkgroupName|object|false|none|none|

<h2 id="tocS_ListStatementsResponse">ListStatementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliststatementsresponse"></a>
<a id="schema_ListStatementsResponse"></a>
<a id="tocSliststatementsresponse"></a>
<a id="tocsliststatementsresponse"></a>

```json
{
  "NextToken": {},
  "Statements": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Statements|object|true|none|none|

<h2 id="tocS_ListStatementsRequest">ListStatementsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaliststatementsrequest"></a>
<a id="schema_ListStatementsRequest"></a>
<a id="tocSliststatementsrequest"></a>
<a id="tocsliststatementsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "RoleLevel": {},
  "StatementName": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|RoleLevel|object|false|none|none|
|StatementName|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ListTablesResponse">ListTablesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttablesresponse"></a>
<a id="schema_ListTablesResponse"></a>
<a id="tocSlisttablesresponse"></a>
<a id="tocslisttablesresponse"></a>

```json
{
  "NextToken": {},
  "Tables": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Tables|object|false|none|none|

<h2 id="tocS_ListTablesRequest">ListTablesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttablesrequest"></a>
<a id="schema_ListTablesRequest"></a>
<a id="tocSlisttablesrequest"></a>
<a id="tocslisttablesrequest"></a>

```json
{
  "ClusterIdentifier": {},
  "ConnectedDatabase": {},
  "Database": {},
  "DbUser": {},
  "MaxResults": {},
  "NextToken": {},
  "SchemaPattern": {},
  "SecretArn": {},
  "TablePattern": {},
  "WorkgroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterIdentifier|object|false|none|none|
|ConnectedDatabase|object|false|none|none|
|Database|object|true|none|none|
|DbUser|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|SchemaPattern|object|false|none|none|
|SecretArn|object|false|none|none|
|TablePattern|object|false|none|none|
|WorkgroupName|object|false|none|none|

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
"string"
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_SecretArn">SecretArn</h2>
<!-- backwards compatibility -->
<a id="schemasecretarn"></a>
<a id="schema_SecretArn"></a>
<a id="tocSsecretarn"></a>
<a id="tocssecretarn"></a>

```json
"string"
```

<h2 id="tocS_SqlList">SqlList</h2>
<!-- backwards compatibility -->
<a id="schemasqllist"></a>
<a id="schema_SqlList"></a>
<a id="tocSsqllist"></a>
<a id="tocssqllist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StatementNameString">StatementNameString</h2>
<!-- backwards compatibility -->
<a id="schemastatementnamestring"></a>
<a id="schema_StatementNameString"></a>
<a id="tocSstatementnamestring"></a>
<a id="tocsstatementnamestring"></a>

```json
"string"
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

<h2 id="tocS_WorkgroupNameString">WorkgroupNameString</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupnamestring"></a>
<a id="schema_WorkgroupNameString"></a>
<a id="tocSworkgroupnamestring"></a>
<a id="tocsworkgroupnamestring"></a>

```json
"string"
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_StatementId">StatementId</h2>
<!-- backwards compatibility -->
<a id="schemastatementid"></a>
<a id="schema_StatementId"></a>
<a id="tocSstatementid"></a>
<a id="tocsstatementid"></a>

```json
"string"
```

<h2 id="tocS_Blob">Blob</h2>
<!-- backwards compatibility -->
<a id="schemablob"></a>
<a id="schema_Blob"></a>
<a id="tocSblob"></a>
<a id="tocsblob"></a>

```json
"string"
```

<h2 id="tocS_BoxedBoolean">BoxedBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaboxedboolean"></a>
<a id="schema_BoxedBoolean"></a>
<a id="tocSboxedboolean"></a>
<a id="tocsboxedboolean"></a>

```json
true
```

<h2 id="tocS_BoxedDouble">BoxedDouble</h2>
<!-- backwards compatibility -->
<a id="schemaboxeddouble"></a>
<a id="schema_BoxedDouble"></a>
<a id="tocSboxeddouble"></a>
<a id="tocsboxeddouble"></a>

```json
0
```

<h2 id="tocS_BoxedLong">BoxedLong</h2>
<!-- backwards compatibility -->
<a id="schemaboxedlong"></a>
<a id="schema_BoxedLong"></a>
<a id="tocSboxedlong"></a>
<a id="tocsboxedlong"></a>

```json
0
```

<h2 id="tocS_ColumnMetadata">ColumnMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacolumnmetadata"></a>
<a id="schema_ColumnMetadata"></a>
<a id="tocScolumnmetadata"></a>
<a id="tocscolumnmetadata"></a>

```json
{
  "columnDefault": {},
  "isCaseSensitive": {},
  "isCurrency": {},
  "isSigned": {},
  "label": {},
  "length": {},
  "name": {},
  "nullable": {},
  "precision": {},
  "scale": {},
  "schemaName": {},
  "tableName": {},
  "typeName": {}
}
```

The properties (metadata) of a column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnDefault|object|false|none|none|
|isCaseSensitive|object|false|none|none|
|isCurrency|object|false|none|none|
|isSigned|object|false|none|none|
|label|object|false|none|none|
|length|object|false|none|none|
|name|object|false|none|none|
|nullable|object|false|none|none|
|precision|object|false|none|none|
|scale|object|false|none|none|
|schemaName|object|false|none|none|
|tableName|object|false|none|none|
|typeName|object|false|none|none|

<h2 id="tocS_ColumnList">ColumnList</h2>
<!-- backwards compatibility -->
<a id="schemacolumnlist"></a>
<a id="schema_ColumnList"></a>
<a id="tocScolumnlist"></a>
<a id="tocscolumnlist"></a>

```json
[
  {
    "columnDefault": {},
    "isCaseSensitive": {},
    "isCurrency": {},
    "isSigned": {},
    "label": {},
    "length": {},
    "name": {},
    "nullable": {},
    "precision": {},
    "scale": {},
    "schemaName": {},
    "tableName": {},
    "typeName": {}
  }
]
```

<h2 id="tocS_bool">bool</h2>
<!-- backwards compatibility -->
<a id="schemabool"></a>
<a id="schema_bool"></a>
<a id="tocSbool"></a>
<a id="tocsbool"></a>

```json
true
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

<h2 id="tocS_ColumnMetadataList">ColumnMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemacolumnmetadatalist"></a>
<a id="schema_ColumnMetadataList"></a>
<a id="tocScolumnmetadatalist"></a>
<a id="tocscolumnmetadatalist"></a>

```json
[
  {
    "columnDefault": {},
    "isCaseSensitive": {},
    "isCurrency": {},
    "isSigned": {},
    "label": {},
    "length": {},
    "name": {},
    "nullable": {},
    "precision": {},
    "scale": {},
    "schemaName": {},
    "tableName": {},
    "typeName": {}
  }
]
```

<h2 id="tocS_DatabaseList">DatabaseList</h2>
<!-- backwards compatibility -->
<a id="schemadatabaselist"></a>
<a id="schema_DatabaseList"></a>
<a id="tocSdatabaselist"></a>
<a id="tocsdatabaselist"></a>

```json
[
  "string"
]
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

<h2 id="tocS_SqlParametersList">SqlParametersList</h2>
<!-- backwards compatibility -->
<a id="schemasqlparameterslist"></a>
<a id="schema_SqlParametersList"></a>
<a id="tocSsqlparameterslist"></a>
<a id="tocssqlparameterslist"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_StatementString">StatementString</h2>
<!-- backwards compatibility -->
<a id="schemastatementstring"></a>
<a id="schema_StatementString"></a>
<a id="tocSstatementstring"></a>
<a id="tocsstatementstring"></a>

```json
"string"
```

<h2 id="tocS_StatusString">StatusString</h2>
<!-- backwards compatibility -->
<a id="schemastatusstring"></a>
<a id="schema_StatusString"></a>
<a id="tocSstatusstring"></a>
<a id="tocsstatusstring"></a>

```json
"SUBMITTED"
```

<h2 id="tocS_SubStatementList">SubStatementList</h2>
<!-- backwards compatibility -->
<a id="schemasubstatementlist"></a>
<a id="schema_SubStatementList"></a>
<a id="tocSsubstatementlist"></a>
<a id="tocssubstatementlist"></a>

```json
[
  {
    "CreatedAt": {},
    "Duration": {},
    "Error": {},
    "HasResultSet": {},
    "Id": {},
    "QueryString": {},
    "RedshiftQueryId": {},
    "ResultRows": {},
    "ResultSize": {},
    "Status": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_PageSize">PageSize</h2>
<!-- backwards compatibility -->
<a id="schemapagesize"></a>
<a id="schema_PageSize"></a>
<a id="tocSpagesize"></a>
<a id="tocspagesize"></a>

```json
0
```

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "blobValue": {},
  "booleanValue": {},
  "doubleValue": {},
  "isNull": {},
  "longValue": {},
  "stringValue": {}
}
```

A data value in a column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blobValue|object|false|none|none|
|booleanValue|object|false|none|none|
|doubleValue|object|false|none|none|
|isNull|object|false|none|none|
|longValue|object|false|none|none|
|stringValue|object|false|none|none|

<h2 id="tocS_FieldList">FieldList</h2>
<!-- backwards compatibility -->
<a id="schemafieldlist"></a>
<a id="schema_FieldList"></a>
<a id="tocSfieldlist"></a>
<a id="tocsfieldlist"></a>

```json
[
  {
    "blobValue": {},
    "booleanValue": {},
    "doubleValue": {},
    "isNull": {},
    "longValue": {},
    "stringValue": {}
  }
]
```

<h2 id="tocS_SqlRecords">SqlRecords</h2>
<!-- backwards compatibility -->
<a id="schemasqlrecords"></a>
<a id="schema_SqlRecords"></a>
<a id="tocSsqlrecords"></a>
<a id="tocssqlrecords"></a>

```json
[
  [
    {
      "blobValue": {},
      "booleanValue": {},
      "doubleValue": {},
      "isNull": {},
      "longValue": {},
      "stringValue": {}
    }
  ]
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

<h2 id="tocS_ListStatementsLimit">ListStatementsLimit</h2>
<!-- backwards compatibility -->
<a id="schemaliststatementslimit"></a>
<a id="schema_ListStatementsLimit"></a>
<a id="tocSliststatementslimit"></a>
<a id="tocsliststatementslimit"></a>

```json
0
```

<h2 id="tocS_StatementList">StatementList</h2>
<!-- backwards compatibility -->
<a id="schemastatementlist"></a>
<a id="schema_StatementList"></a>
<a id="tocSstatementlist"></a>
<a id="tocsstatementlist"></a>

```json
[
  {
    "CreatedAt": {},
    "Id": {},
    "IsBatchStatement": {},
    "QueryParameters": {},
    "QueryString": {},
    "QueryStrings": {},
    "SecretArn": {},
    "StatementName": {},
    "Status": {},
    "UpdatedAt": {}
  }
]
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
    "name": {},
    "schema": {},
    "type": {}
  }
]
```

<h2 id="tocS_ParameterName">ParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaparametername"></a>
<a id="schema_ParameterName"></a>
<a id="tocSparametername"></a>
<a id="tocsparametername"></a>

```json
"string"
```

<h2 id="tocS_ParameterValue">ParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaparametervalue"></a>
<a id="schema_ParameterValue"></a>
<a id="tocSparametervalue"></a>
<a id="tocsparametervalue"></a>

```json
"string"
```

<h2 id="tocS_SqlParameter">SqlParameter</h2>
<!-- backwards compatibility -->
<a id="schemasqlparameter"></a>
<a id="schema_SqlParameter"></a>
<a id="tocSsqlparameter"></a>
<a id="tocssqlparameter"></a>

```json
{
  "name": {},
  "value": {}
}
```

A parameter used in a SQL statement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_StatementStringList">StatementStringList</h2>
<!-- backwards compatibility -->
<a id="schemastatementstringlist"></a>
<a id="schema_StatementStringList"></a>
<a id="tocSstatementstringlist"></a>
<a id="tocsstatementstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StatementData">StatementData</h2>
<!-- backwards compatibility -->
<a id="schemastatementdata"></a>
<a id="schema_StatementData"></a>
<a id="tocSstatementdata"></a>
<a id="tocsstatementdata"></a>

```json
{
  "CreatedAt": {},
  "Id": {},
  "IsBatchStatement": {},
  "QueryParameters": {},
  "QueryString": {},
  "QueryStrings": {},
  "SecretArn": {},
  "StatementName": {},
  "Status": {},
  "UpdatedAt": {}
}
```

The SQL statement to run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedAt|object|false|none|none|
|Id|object|true|none|none|
|IsBatchStatement|object|false|none|none|
|QueryParameters|object|false|none|none|
|QueryString|object|false|none|none|
|QueryStrings|object|false|none|none|
|SecretArn|object|false|none|none|
|StatementName|object|false|none|none|
|Status|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_StatementStatusString">StatementStatusString</h2>
<!-- backwards compatibility -->
<a id="schemastatementstatusstring"></a>
<a id="schema_StatementStatusString"></a>
<a id="tocSstatementstatusstring"></a>
<a id="tocsstatementstatusstring"></a>

```json
"SUBMITTED"
```

<h2 id="tocS_SubStatementData">SubStatementData</h2>
<!-- backwards compatibility -->
<a id="schemasubstatementdata"></a>
<a id="schema_SubStatementData"></a>
<a id="tocSsubstatementdata"></a>
<a id="tocssubstatementdata"></a>

```json
{
  "CreatedAt": {},
  "Duration": {},
  "Error": {},
  "HasResultSet": {},
  "Id": {},
  "QueryString": {},
  "RedshiftQueryId": {},
  "ResultRows": {},
  "ResultSize": {},
  "Status": {},
  "UpdatedAt": {}
}
```

Information about an SQL statement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedAt|object|false|none|none|
|Duration|object|false|none|none|
|Error|object|false|none|none|
|HasResultSet|object|false|none|none|
|Id|object|true|none|none|
|QueryString|object|false|none|none|
|RedshiftQueryId|object|false|none|none|
|ResultRows|object|false|none|none|
|ResultSize|object|false|none|none|
|Status|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_TableMember">TableMember</h2>
<!-- backwards compatibility -->
<a id="schematablemember"></a>
<a id="schema_TableMember"></a>
<a id="tocStablemember"></a>
<a id="tocstablemember"></a>

```json
{
  "name": {},
  "schema": {},
  "type": {}
}
```

The properties of a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|schema|object|false|none|none|
|type|object|false|none|none|
