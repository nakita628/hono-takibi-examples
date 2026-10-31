<h1 id="aws-rds-dataservice">AWS RDS DataService v2018-08-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p><fullname>Amazon RDS Data Service</fullname> <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora Serverless v1 DB cluster. To run these statements, you work with the Data Service API.</p> <note> <p>The Data Service API isn't supported on Amazon Aurora Serverless v2 DB clusters.</p> </note> <p>For more information about the Data Service API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a> in the <i>Amazon Aurora User Guide</i>.</p></p>

Base URLs:

* <a href="http://rds-data.us-east-1.amazonaws.com">http://rds-data.us-east-1.amazonaws.com</a> - The AWS RDS DataService multi-region endpoint

* <a href="https://rds-data.us-east-1.amazonaws.com">https://rds-data.us-east-1.amazonaws.com</a> - The AWS RDS DataService multi-region endpoint

* <a href="http://rds-data.cn-north-1.amazonaws.com.cn">http://rds-data.cn-north-1.amazonaws.com.cn</a> - The AWS RDS DataService endpoint for China (Beijing) and China (Ningxia)

* <a href="https://rds-data.cn-north-1.amazonaws.com.cn">https://rds-data.cn-north-1.amazonaws.com.cn</a> - The AWS RDS DataService endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/rds-data/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-rds-dataservice-default">Default</h1>

## BatchExecuteStatement

<a id="opIdBatchExecuteStatement"></a>

> Code samples

```bash
curl https://rds-data.us-east-1.amazonaws.com/BatchExecute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceArn": "stringstrin",
    "secretArn": "stringstrin",
    "sql": "string",
    "database": "string",
    "schema": "string",
    "parameterSets": [
      [
        {
          "name": {},
          "value": {
            "isNull": {},
            "booleanValue": {},
            "longValue": {},
            "doubleValue": {},
            "stringValue": {},
            "blobValue": {},
            "arrayValue": {
              "booleanValues": {},
              "longValues": {},
              "doubleValues": {},
              "stringValues": {},
              "arrayValues": {}
            }
          },
          "typeHint": {}
        }
      ]
    ],
    "transactionId": "string"
  }'
```

`POST /BatchExecute`

<p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>

> Body parameter

```json
{
  "resourceArn": "stringstrin",
  "secretArn": "stringstrin",
  "sql": "string",
  "database": "string",
  "schema": "string",
  "parameterSets": [
    [
      {
        "name": {},
        "value": {
          "isNull": {},
          "booleanValue": {},
          "longValue": {},
          "doubleValue": {},
          "stringValue": {},
          "blobValue": {},
          "arrayValue": {
            "booleanValues": {},
            "longValues": {},
            "doubleValues": {},
            "stringValues": {},
            "arrayValues": {}
          }
        },
        "typeHint": {}
      }
    ]
  ],
  "transactionId": "string"
}
```

<h3 id="batchexecutestatement-parameters">Parameters</h3>

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
|» resourceArn|body|string|true|The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.|
|» secretArn|body|string|true|<p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>|
|» sql|body|string|true|The SQL statement to run. Don't include a semicolon (;) at the end of the SQL statement.|
|» database|body|string|false|The name of the database.|
|» schema|body|string|false|<p>The name of the database schema.</p> <note> <p>Currently, the <code>schema</code> parameter isn't supported.</p> </note>|
|» parameterSets|body|[[SqlParametersList](#schemasqlparameterslist)]|false|<p>The parameter set for the batch operation.</p> <p>The SQL statement is executed as many times as the number of parameter sets provided. To execute a SQL statement with no parameters, use one of the following options:</p> <ul> <li> <p>Specify one or more empty parameter sets.</p> </li> <li> <p>Use the <code>ExecuteStatement</code> operation instead of the <code>BatchExecuteStatement</code> operation.</p> </li> </ul> <note> <p>Array parameters are not supported.</p> </note>|
|» transactionId|body|string|false|<p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>|

> Example responses

> 200 Response

```json
{
  "updateResults": {}
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

<h3 id="batchexecutestatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchExecuteStatementResponse](#schemabatchexecutestatementresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|StatementTimeoutException|[StatementTimeoutException](#schemastatementtimeoutexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableError|[ServiceUnavailableError](#schemaserviceunavailableerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BeginTransaction

<a id="opIdBeginTransaction"></a>

> Code samples

```bash
curl https://rds-data.us-east-1.amazonaws.com/BeginTransaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceArn": "stringstrin",
    "secretArn": "stringstrin",
    "database": "string",
    "schema": "string"
  }'
```

`POST /BeginTransaction`

<p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>

> Body parameter

```json
{
  "resourceArn": "stringstrin",
  "secretArn": "stringstrin",
  "database": "string",
  "schema": "string"
}
```

<h3 id="begintransaction-parameters">Parameters</h3>

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
|» resourceArn|body|string|true|The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.|
|» secretArn|body|string|true|The name or ARN of the secret that enables access to the DB cluster.|
|» database|body|string|false|The name of the database.|
|» schema|body|string|false|The name of the database schema.|

> Example responses

> 200 Response

```json
{
  "transactionId": {}
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

<h3 id="begintransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BeginTransactionResponse](#schemabegintransactionresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|StatementTimeoutException|[StatementTimeoutException](#schemastatementtimeoutexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableError|[ServiceUnavailableError](#schemaserviceunavailableerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CommitTransaction

<a id="opIdCommitTransaction"></a>

> Code samples

```bash
curl https://rds-data.us-east-1.amazonaws.com/CommitTransaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceArn": "stringstrin",
    "secretArn": "stringstrin",
    "transactionId": "string"
  }'
```

`POST /CommitTransaction`

Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.

> Body parameter

```json
{
  "resourceArn": "stringstrin",
  "secretArn": "stringstrin",
  "transactionId": "string"
}
```

<h3 id="committransaction-parameters">Parameters</h3>

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
|» resourceArn|body|string|true|The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.|
|» secretArn|body|string|true|The name or ARN of the secret that enables access to the DB cluster.|
|» transactionId|body|string|true|The identifier of the transaction to end and commit.|

> Example responses

> 200 Response

```json
{
  "transactionStatus": {}
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

<h3 id="committransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CommitTransactionResponse](#schemacommittransactionresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|StatementTimeoutException|[StatementTimeoutException](#schemastatementtimeoutexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableError|[ServiceUnavailableError](#schemaserviceunavailableerror)|
|486|486|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExecuteSql

<a id="opIdExecuteSql"></a>

> Code samples

```bash
curl https://rds-data.us-east-1.amazonaws.com/ExecuteSql \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "dbClusterOrInstanceArn": "stringstrin",
    "awsSecretStoreArn": "stringstrin",
    "sqlStatements": "string",
    "database": "string",
    "schema": "string"
  }'
```

`POST /ExecuteSql`

<aside class="warning">
This operation is deprecated
</aside>

<p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note>

> Body parameter

```json
{
  "dbClusterOrInstanceArn": "stringstrin",
  "awsSecretStoreArn": "stringstrin",
  "sqlStatements": "string",
  "database": "string",
  "schema": "string"
}
```

<h3 id="executesql-parameters">Parameters</h3>

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
|» dbClusterOrInstanceArn|body|string|true|The ARN of the Aurora Serverless DB cluster.|
|» awsSecretStoreArn|body|string|true|<p>The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>|
|» sqlStatements|body|string|true|<p>One or more SQL statements to run on the DB cluster.</p> <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL statement is permitted, including data definition, data manipulation, and commit statements. </p>|
|» database|body|string|false|The name of the database.|
|» schema|body|string|false|The name of the database schema.|

> Example responses

> 200 Response

```json
{
  "sqlStatementResults": {}
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

<h3 id="executesql-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExecuteSqlResponse](#schemaexecutesqlresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableError|[ServiceUnavailableError](#schemaserviceunavailableerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExecuteStatement

<a id="opIdExecuteStatement"></a>

> Code samples

```bash
curl https://rds-data.us-east-1.amazonaws.com/Execute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceArn": "stringstrin",
    "secretArn": "stringstrin",
    "sql": "string",
    "database": "string",
    "schema": "string",
    "parameters": [
      {
        "name": {},
        "value": {
          "isNull": {},
          "booleanValue": {},
          "longValue": {},
          "doubleValue": {},
          "stringValue": {},
          "blobValue": {},
          "arrayValue": {
            "booleanValues": {},
            "longValues": {},
            "doubleValues": {},
            "stringValues": {},
            "arrayValues": {}
          }
        },
        "typeHint": {}
      }
    ],
    "transactionId": "string",
    "includeResultMetadata": true,
    "continueAfterTimeout": true,
    "resultSetOptions": {
      "decimalReturnType": {},
      "longReturnType": {}
    },
    "formatRecordsAs": "NONE"
  }'
```

`POST /Execute`

<p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>

> Body parameter

```json
{
  "resourceArn": "stringstrin",
  "secretArn": "stringstrin",
  "sql": "string",
  "database": "string",
  "schema": "string",
  "parameters": [
    {
      "name": {},
      "value": {
        "isNull": {},
        "booleanValue": {},
        "longValue": {},
        "doubleValue": {},
        "stringValue": {},
        "blobValue": {},
        "arrayValue": {
          "booleanValues": {},
          "longValues": {},
          "doubleValues": {},
          "stringValues": {},
          "arrayValues": {}
        }
      },
      "typeHint": {}
    }
  ],
  "transactionId": "string",
  "includeResultMetadata": true,
  "continueAfterTimeout": true,
  "resultSetOptions": {
    "decimalReturnType": {},
    "longReturnType": {}
  },
  "formatRecordsAs": "NONE"
}
```

<h3 id="executestatement-parameters">Parameters</h3>

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
|» resourceArn|body|string|true|The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.|
|» secretArn|body|string|true|<p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>|
|» sql|body|string|true|The SQL statement to run.|
|» database|body|string|false|The name of the database.|
|» schema|body|string|false|<p>The name of the database schema.</p> <note> <p>Currently, the <code>schema</code> parameter isn't supported.</p> </note>|
|» parameters|body|[[SqlParameter](#schemasqlparameter)]|false|<p>The parameters for the SQL statement.</p> <note> <p>Array parameters are not supported.</p> </note>|
|» transactionId|body|string|false|<p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>|
|» includeResultMetadata|body|boolean|false|A value that indicates whether to include metadata in the results.|
|» continueAfterTimeout|body|boolean|false|<p>A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.</p> <note> <p>For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures.</p> </note>|
|» resultSetOptions|body|object|false|Options that control how the result set is returned.|
|» » decimalReturnType|body|object|false|none|
|» » longReturnType|body|object|false|none|
|» formatRecordsAs|body|string|false|<p>A value that indicates whether to format the result set as a single JSON string. This parameter only applies to <code>SELECT</code> statements and is ignored for other types of statements. Allowed values are <code>NONE</code> and <code>JSON</code>. The default value is <code>NONE</code>. The result is returned in the <code>formattedRecords</code> field.</p> <p>For usage information about the JSON format for result sets, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a> in the <i>Amazon Aurora User Guide</i>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» formatRecordsAs|NONE|
|» formatRecordsAs|JSON|

> Example responses

> 200 Response

```json
{
  "records": {},
  "columnMetadata": {},
  "numberOfRecordsUpdated": {},
  "generatedFields": {},
  "formattedRecords": {}
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

<h3 id="executestatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExecuteStatementResponse](#schemaexecutestatementresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|StatementTimeoutException|[StatementTimeoutException](#schemastatementtimeoutexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableError|[ServiceUnavailableError](#schemaserviceunavailableerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RollbackTransaction

<a id="opIdRollbackTransaction"></a>

> Code samples

```bash
curl https://rds-data.us-east-1.amazonaws.com/RollbackTransaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "resourceArn": "stringstrin",
    "secretArn": "stringstrin",
    "transactionId": "string"
  }'
```

`POST /RollbackTransaction`

Performs a rollback of a transaction. Rolling back a transaction cancels its changes.

> Body parameter

```json
{
  "resourceArn": "stringstrin",
  "secretArn": "stringstrin",
  "transactionId": "string"
}
```

<h3 id="rollbacktransaction-parameters">Parameters</h3>

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
|» resourceArn|body|string|true|The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.|
|» secretArn|body|string|true|The name or ARN of the secret that enables access to the DB cluster.|
|» transactionId|body|string|true|The identifier of the transaction to roll back.|

> Example responses

> 200 Response

```json
{
  "transactionStatus": {}
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

<h3 id="rollbacktransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RollbackTransactionResponse](#schemarollbacktransactionresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|StatementTimeoutException|[StatementTimeoutException](#schemastatementtimeoutexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|ServiceUnavailableError|[ServiceUnavailableError](#schemaserviceunavailableerror)|
|486|486|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchExecuteStatementResponse">BatchExecuteStatementResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchexecutestatementresponse"></a>
<a id="schema_BatchExecuteStatementResponse"></a>
<a id="tocSbatchexecutestatementresponse"></a>
<a id="tocsbatchexecutestatementresponse"></a>

```json
{
  "updateResults": {}
}
```

The response elements represent the output of a SQL statement over an array of data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|updateResults|object|false|none|none|

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
    "value": {
      "isNull": {},
      "booleanValue": {},
      "longValue": {},
      "doubleValue": {},
      "stringValue": {},
      "blobValue": {},
      "arrayValue": {
        "booleanValues": {},
        "longValues": {},
        "doubleValues": {},
        "stringValues": {},
        "arrayValues": {}
      }
    },
    "typeHint": {}
  }
]
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

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_StatementTimeoutException">StatementTimeoutException</h2>
<!-- backwards compatibility -->
<a id="schemastatementtimeoutexception"></a>
<a id="schema_StatementTimeoutException"></a>
<a id="tocSstatementtimeoutexception"></a>
<a id="tocsstatementtimeoutexception"></a>

```json
null
```

<h2 id="tocS_InternalServerErrorException">InternalServerErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererrorexception"></a>
<a id="schema_InternalServerErrorException"></a>
<a id="tocSinternalservererrorexception"></a>
<a id="tocsinternalservererrorexception"></a>

```json
null
```

<h2 id="tocS_ForbiddenException">ForbiddenException</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenexception"></a>
<a id="schema_ForbiddenException"></a>
<a id="tocSforbiddenexception"></a>
<a id="tocsforbiddenexception"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailableError">ServiceUnavailableError</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableerror"></a>
<a id="schema_ServiceUnavailableError"></a>
<a id="tocSserviceunavailableerror"></a>
<a id="tocsserviceunavailableerror"></a>

```json
null
```

<h2 id="tocS_BeginTransactionResponse">BeginTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemabegintransactionresponse"></a>
<a id="schema_BeginTransactionResponse"></a>
<a id="tocSbegintransactionresponse"></a>
<a id="tocsbegintransactionresponse"></a>

```json
{
  "transactionId": {}
}
```

The response elements represent the output of a request to start a SQL transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionId|object|false|none|none|

<h2 id="tocS_CommitTransactionResponse">CommitTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacommittransactionresponse"></a>
<a id="schema_CommitTransactionResponse"></a>
<a id="tocScommittransactionresponse"></a>
<a id="tocscommittransactionresponse"></a>

```json
{
  "transactionStatus": {}
}
```

The response elements represent the output of a commit transaction request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionStatus|object|false|none|none|

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_ExecuteSqlResponse">ExecuteSqlResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexecutesqlresponse"></a>
<a id="schema_ExecuteSqlResponse"></a>
<a id="tocSexecutesqlresponse"></a>
<a id="tocsexecutesqlresponse"></a>

```json
{
  "sqlStatementResults": {}
}
```

The response elements represent the output of a request to run one or more SQL statements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sqlStatementResults|object|false|none|none|

<h2 id="tocS_ExecuteStatementResponse">ExecuteStatementResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexecutestatementresponse"></a>
<a id="schema_ExecuteStatementResponse"></a>
<a id="tocSexecutestatementresponse"></a>
<a id="tocsexecutestatementresponse"></a>

```json
{
  "records": {},
  "columnMetadata": {},
  "numberOfRecordsUpdated": {},
  "generatedFields": {},
  "formattedRecords": {}
}
```

The response elements represent the output of a request to run a SQL statement against a database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|records|object|false|none|none|
|columnMetadata|object|false|none|none|
|numberOfRecordsUpdated|object|false|none|none|
|generatedFields|object|false|none|none|
|formattedRecords|object|false|none|none|

<h2 id="tocS_SqlParameter">SqlParameter</h2>
<!-- backwards compatibility -->
<a id="schemasqlparameter"></a>
<a id="schema_SqlParameter"></a>
<a id="tocSsqlparameter"></a>
<a id="tocssqlparameter"></a>

```json
{
  "name": {},
  "value": {
    "isNull": {},
    "booleanValue": {},
    "longValue": {},
    "doubleValue": {},
    "stringValue": {},
    "blobValue": {},
    "arrayValue": {
      "booleanValues": {},
      "longValues": {},
      "doubleValues": {},
      "stringValues": {},
      "arrayValues": {}
    }
  },
  "typeHint": {}
}
```

A parameter used in a SQL statement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|
|typeHint|object|false|none|none|

<h2 id="tocS_DecimalReturnType">DecimalReturnType</h2>
<!-- backwards compatibility -->
<a id="schemadecimalreturntype"></a>
<a id="schema_DecimalReturnType"></a>
<a id="tocSdecimalreturntype"></a>
<a id="tocsdecimalreturntype"></a>

```json
"STRING"
```

<h2 id="tocS_LongReturnType">LongReturnType</h2>
<!-- backwards compatibility -->
<a id="schemalongreturntype"></a>
<a id="schema_LongReturnType"></a>
<a id="tocSlongreturntype"></a>
<a id="tocslongreturntype"></a>

```json
"STRING"
```

<h2 id="tocS_RollbackTransactionResponse">RollbackTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemarollbacktransactionresponse"></a>
<a id="schema_RollbackTransactionResponse"></a>
<a id="tocSrollbacktransactionresponse"></a>
<a id="tocsrollbacktransactionresponse"></a>

```json
{
  "transactionStatus": {}
}
```

The response elements represent the output of a request to perform a rollback of a transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionStatus|object|false|none|none|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"stringstrin"
```

<h2 id="tocS_ArrayValue">ArrayValue</h2>
<!-- backwards compatibility -->
<a id="schemaarrayvalue"></a>
<a id="schema_ArrayValue"></a>
<a id="tocSarrayvalue"></a>
<a id="tocsarrayvalue"></a>

```json
{
  "booleanValues": {},
  "longValues": {},
  "doubleValues": {},
  "stringValues": {},
  "arrayValues": {}
}
```

Contains an array.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|booleanValues|object|false|none|none|
|longValues|object|false|none|none|
|doubleValues|object|false|none|none|
|stringValues|object|false|none|none|
|arrayValues|object|false|none|none|

<h2 id="tocS_ArrayOfArray">ArrayOfArray</h2>
<!-- backwards compatibility -->
<a id="schemaarrayofarray"></a>
<a id="schema_ArrayOfArray"></a>
<a id="tocSarrayofarray"></a>
<a id="tocsarrayofarray"></a>

```json
[
  {
    "booleanValues": {},
    "longValues": {},
    "doubleValues": {},
    "stringValues": {},
    "arrayValues": {}
  }
]
```

<p>An array of arrays.</p> <note> <p>Some array entries can be null.</p> </note>

<h2 id="tocS_BooleanArray">BooleanArray</h2>
<!-- backwards compatibility -->
<a id="schemabooleanarray"></a>
<a id="schema_BooleanArray"></a>
<a id="tocSbooleanarray"></a>
<a id="tocsbooleanarray"></a>

```json
[
  true
]
```

<p>An array of Boolean values.</p> <note> <p>Some array entries can be null.</p> </note>

<h2 id="tocS_LongArray">LongArray</h2>
<!-- backwards compatibility -->
<a id="schemalongarray"></a>
<a id="schema_LongArray"></a>
<a id="tocSlongarray"></a>
<a id="tocslongarray"></a>

```json
[
  0
]
```

<p>An array of integers.</p> <note> <p>Some array entries can be null.</p> </note>

<h2 id="tocS_DoubleArray">DoubleArray</h2>
<!-- backwards compatibility -->
<a id="schemadoublearray"></a>
<a id="schema_DoubleArray"></a>
<a id="tocSdoublearray"></a>
<a id="tocsdoublearray"></a>

```json
[
  0
]
```

<p>An array of floating-point numbers.</p> <note> <p>Some array entries can be null.</p> </note>

<h2 id="tocS_StringArray">StringArray</h2>
<!-- backwards compatibility -->
<a id="schemastringarray"></a>
<a id="schema_StringArray"></a>
<a id="tocSstringarray"></a>
<a id="tocsstringarray"></a>

```json
[
  "string"
]
```

<p>An array of strings.</p> <note> <p>Some array entries can be null.</p> </note>

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
{
  "isNull": {},
  "bitValue": {},
  "bigIntValue": {},
  "intValue": {},
  "doubleValue": {},
  "realValue": {},
  "stringValue": {},
  "blobValue": {},
  "arrayValues": {},
  "structValue": {
    "attributes": {}
  }
}
```

<p>Contains the value of a column.</p> <pre><code> &lt;note&gt; &lt;p&gt;This data structure is only used with the deprecated &lt;code&gt;ExecuteSql&lt;/code&gt; operation. Use the &lt;code&gt;BatchExecuteStatement&lt;/code&gt; or &lt;code&gt;ExecuteStatement&lt;/code&gt; operation instead.&lt;/p&gt; &lt;/note&gt; </code></pre>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isNull|object|false|none|none|
|bitValue|object|false|none|none|
|bigIntValue|object|false|none|none|
|intValue|object|false|none|none|
|doubleValue|object|false|none|none|
|realValue|object|false|none|none|
|stringValue|object|false|none|none|
|blobValue|object|false|none|none|
|arrayValues|object|false|none|none|
|structValue|object|false|none|none|

<h2 id="tocS_ArrayValueList">ArrayValueList</h2>
<!-- backwards compatibility -->
<a id="schemaarrayvaluelist"></a>
<a id="schema_ArrayValueList"></a>
<a id="tocSarrayvaluelist"></a>
<a id="tocsarrayvaluelist"></a>

```json
[
  {
    "isNull": {},
    "bitValue": {},
    "bigIntValue": {},
    "intValue": {},
    "doubleValue": {},
    "realValue": {},
    "stringValue": {},
    "blobValue": {},
    "arrayValues": {},
    "structValue": {}
  }
]
```

<h2 id="tocS_SqlStatement">SqlStatement</h2>
<!-- backwards compatibility -->
<a id="schemasqlstatement"></a>
<a id="schema_SqlStatement"></a>
<a id="tocSsqlstatement"></a>
<a id="tocssqlstatement"></a>

```json
"string"
```

<h2 id="tocS_DbName">DbName</h2>
<!-- backwards compatibility -->
<a id="schemadbname"></a>
<a id="schema_DbName"></a>
<a id="tocSdbname"></a>
<a id="tocsdbname"></a>

```json
"string"
```

<h2 id="tocS_SqlParameterSets">SqlParameterSets</h2>
<!-- backwards compatibility -->
<a id="schemasqlparametersets"></a>
<a id="schema_SqlParameterSets"></a>
<a id="tocSsqlparametersets"></a>
<a id="tocssqlparametersets"></a>

```json
[
  [
    {
      "name": {},
      "value": {
        "isNull": {},
        "booleanValue": {},
        "longValue": {},
        "doubleValue": {},
        "stringValue": {},
        "blobValue": {},
        "arrayValue": {
          "booleanValues": {},
          "longValues": {},
          "doubleValues": {},
          "stringValues": {},
          "arrayValues": {}
        }
      },
      "typeHint": {}
    }
  ]
]
```

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

<h2 id="tocS_BatchExecuteStatementRequest">BatchExecuteStatementRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchexecutestatementrequest"></a>
<a id="schema_BatchExecuteStatementRequest"></a>
<a id="tocSbatchexecutestatementrequest"></a>
<a id="tocsbatchexecutestatementrequest"></a>

```json
{
  "resourceArn": {},
  "secretArn": {},
  "sql": {},
  "database": {},
  "schema": {},
  "parameterSets": {},
  "transactionId": {}
}
```

The request parameters represent the input of a SQL statement over an array of data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|secretArn|object|true|none|none|
|sql|object|true|none|none|
|database|object|false|none|none|
|schema|object|false|none|none|
|parameterSets|object|false|none|none|
|transactionId|object|false|none|none|

<h2 id="tocS_UpdateResults">UpdateResults</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresults"></a>
<a id="schema_UpdateResults"></a>
<a id="tocSupdateresults"></a>
<a id="tocsupdateresults"></a>

```json
[
  {
    "generatedFields": {}
  }
]
```

<h2 id="tocS_BeginTransactionRequest">BeginTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemabegintransactionrequest"></a>
<a id="schema_BeginTransactionRequest"></a>
<a id="tocSbegintransactionrequest"></a>
<a id="tocsbegintransactionrequest"></a>

```json
{
  "resourceArn": {},
  "secretArn": {},
  "database": {},
  "schema": {}
}
```

The request parameters represent the input of a request to start a SQL transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|secretArn|object|true|none|none|
|database|object|false|none|none|
|schema|object|false|none|none|

<h2 id="tocS_Blob">Blob</h2>
<!-- backwards compatibility -->
<a id="schemablob"></a>
<a id="schema_Blob"></a>
<a id="tocSblob"></a>
<a id="tocsblob"></a>

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

<h2 id="tocS_BoxedFloat">BoxedFloat</h2>
<!-- backwards compatibility -->
<a id="schemaboxedfloat"></a>
<a id="schema_BoxedFloat"></a>
<a id="tocSboxedfloat"></a>
<a id="tocsboxedfloat"></a>

```json
0
```

<h2 id="tocS_BoxedInteger">BoxedInteger</h2>
<!-- backwards compatibility -->
<a id="schemaboxedinteger"></a>
<a id="schema_BoxedInteger"></a>
<a id="tocSboxedinteger"></a>
<a id="tocsboxedinteger"></a>

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

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
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

<h2 id="tocS_ColumnMetadata">ColumnMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacolumnmetadata"></a>
<a id="schema_ColumnMetadata"></a>
<a id="tocScolumnmetadata"></a>
<a id="tocscolumnmetadata"></a>

```json
{
  "name": {},
  "type": {},
  "typeName": {},
  "label": {},
  "schemaName": {},
  "tableName": {},
  "isAutoIncrement": {},
  "isSigned": {},
  "isCurrency": {},
  "isCaseSensitive": {},
  "nullable": {},
  "precision": {},
  "scale": {},
  "arrayBaseColumnType": {}
}
```

Contains the metadata for a column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|type|object|false|none|none|
|typeName|object|false|none|none|
|label|object|false|none|none|
|schemaName|object|false|none|none|
|tableName|object|false|none|none|
|isAutoIncrement|object|false|none|none|
|isSigned|object|false|none|none|
|isCurrency|object|false|none|none|
|isCaseSensitive|object|false|none|none|
|nullable|object|false|none|none|
|precision|object|false|none|none|
|scale|object|false|none|none|
|arrayBaseColumnType|object|false|none|none|

<h2 id="tocS_CommitTransactionRequest">CommitTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacommittransactionrequest"></a>
<a id="schema_CommitTransactionRequest"></a>
<a id="tocScommittransactionrequest"></a>
<a id="tocscommittransactionrequest"></a>

```json
{
  "resourceArn": {},
  "secretArn": {},
  "transactionId": {}
}
```

The request parameters represent the input of a commit transaction request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|secretArn|object|true|none|none|
|transactionId|object|true|none|none|

<h2 id="tocS_TransactionStatus">TransactionStatus</h2>
<!-- backwards compatibility -->
<a id="schematransactionstatus"></a>
<a id="schema_TransactionStatus"></a>
<a id="tocStransactionstatus"></a>
<a id="tocstransactionstatus"></a>

```json
"string"
```

<h2 id="tocS_ExecuteSqlRequest">ExecuteSqlRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutesqlrequest"></a>
<a id="schema_ExecuteSqlRequest"></a>
<a id="tocSexecutesqlrequest"></a>
<a id="tocsexecutesqlrequest"></a>

```json
{
  "dbClusterOrInstanceArn": {},
  "awsSecretStoreArn": {},
  "sqlStatements": {},
  "database": {},
  "schema": {}
}
```

The request parameters represent the input of a request to run one or more SQL statements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dbClusterOrInstanceArn|object|true|none|none|
|awsSecretStoreArn|object|true|none|none|
|sqlStatements|object|true|none|none|
|database|object|false|none|none|
|schema|object|false|none|none|

<h2 id="tocS_SqlStatementResults">SqlStatementResults</h2>
<!-- backwards compatibility -->
<a id="schemasqlstatementresults"></a>
<a id="schema_SqlStatementResults"></a>
<a id="tocSsqlstatementresults"></a>
<a id="tocssqlstatementresults"></a>

```json
[
  {
    "resultFrame": {
      "resultSetMetadata": {
        "columnCount": {},
        "columnMetadata": {}
      },
      "records": {}
    },
    "numberOfRecordsUpdated": {}
  }
]
```

<h2 id="tocS_ResultSetOptions">ResultSetOptions</h2>
<!-- backwards compatibility -->
<a id="schemaresultsetoptions"></a>
<a id="schema_ResultSetOptions"></a>
<a id="tocSresultsetoptions"></a>
<a id="tocsresultsetoptions"></a>

```json
{
  "decimalReturnType": {},
  "longReturnType": {}
}
```

Options that control how the result set is returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decimalReturnType|object|false|none|none|
|longReturnType|object|false|none|none|

<h2 id="tocS_RecordsFormatType">RecordsFormatType</h2>
<!-- backwards compatibility -->
<a id="schemarecordsformattype"></a>
<a id="schema_RecordsFormatType"></a>
<a id="tocSrecordsformattype"></a>
<a id="tocsrecordsformattype"></a>

```json
"NONE"
```

<h2 id="tocS_ExecuteStatementRequest">ExecuteStatementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutestatementrequest"></a>
<a id="schema_ExecuteStatementRequest"></a>
<a id="tocSexecutestatementrequest"></a>
<a id="tocsexecutestatementrequest"></a>

```json
{
  "resourceArn": {},
  "secretArn": {},
  "sql": {},
  "database": {},
  "schema": {},
  "parameters": {},
  "transactionId": {},
  "includeResultMetadata": {},
  "continueAfterTimeout": {},
  "resultSetOptions": {
    "decimalReturnType": {},
    "longReturnType": {}
  },
  "formatRecordsAs": {}
}
```

The request parameters represent the input of a request to run a SQL statement against a database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|secretArn|object|true|none|none|
|sql|object|true|none|none|
|database|object|false|none|none|
|schema|object|false|none|none|
|parameters|object|false|none|none|
|transactionId|object|false|none|none|
|includeResultMetadata|object|false|none|none|
|continueAfterTimeout|object|false|none|none|
|resultSetOptions|object|false|none|none|
|formatRecordsAs|object|false|none|none|

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
      "isNull": {},
      "booleanValue": {},
      "longValue": {},
      "doubleValue": {},
      "stringValue": {},
      "blobValue": {},
      "arrayValue": {
        "booleanValues": {},
        "longValues": {},
        "doubleValues": {},
        "stringValues": {},
        "arrayValues": {}
      }
    }
  ]
]
```

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
[
  {
    "name": {},
    "type": {},
    "typeName": {},
    "label": {},
    "schemaName": {},
    "tableName": {},
    "isAutoIncrement": {},
    "isSigned": {},
    "isCurrency": {},
    "isCaseSensitive": {},
    "nullable": {},
    "precision": {},
    "scale": {},
    "arrayBaseColumnType": {}
  }
]
```

<h2 id="tocS_RecordsUpdated">RecordsUpdated</h2>
<!-- backwards compatibility -->
<a id="schemarecordsupdated"></a>
<a id="schema_RecordsUpdated"></a>
<a id="tocSrecordsupdated"></a>
<a id="tocsrecordsupdated"></a>

```json
0
```

<h2 id="tocS_FieldList">FieldList</h2>
<!-- backwards compatibility -->
<a id="schemafieldlist"></a>
<a id="schema_FieldList"></a>
<a id="tocSfieldlist"></a>
<a id="tocsfieldlist"></a>

```json
[
  {
    "isNull": {},
    "booleanValue": {},
    "longValue": {},
    "doubleValue": {},
    "stringValue": {},
    "blobValue": {},
    "arrayValue": {
      "booleanValues": {},
      "longValues": {},
      "doubleValues": {},
      "stringValues": {},
      "arrayValues": {}
    }
  }
]
```

<h2 id="tocS_FormattedSqlRecords">FormattedSqlRecords</h2>
<!-- backwards compatibility -->
<a id="schemaformattedsqlrecords"></a>
<a id="schema_FormattedSqlRecords"></a>
<a id="tocSformattedsqlrecords"></a>
<a id="tocsformattedsqlrecords"></a>

```json
"string"
```

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "isNull": {},
  "booleanValue": {},
  "longValue": {},
  "doubleValue": {},
  "stringValue": {},
  "blobValue": {},
  "arrayValue": {
    "booleanValues": {},
    "longValues": {},
    "doubleValues": {},
    "stringValues": {},
    "arrayValues": {}
  }
}
```

Contains a value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isNull|object|false|none|none|
|booleanValue|object|false|none|none|
|longValue|object|false|none|none|
|doubleValue|object|false|none|none|
|stringValue|object|false|none|none|
|blobValue|object|false|none|none|
|arrayValue|object|false|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
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

<h2 id="tocS_Row">Row</h2>
<!-- backwards compatibility -->
<a id="schemarow"></a>
<a id="schema_Row"></a>
<a id="tocSrow"></a>
<a id="tocsrow"></a>

```json
[
  {
    "isNull": {},
    "bitValue": {},
    "bigIntValue": {},
    "intValue": {},
    "doubleValue": {},
    "realValue": {},
    "stringValue": {},
    "blobValue": {},
    "arrayValues": {},
    "structValue": {}
  }
]
```

<h2 id="tocS_Record">Record</h2>
<!-- backwards compatibility -->
<a id="schemarecord"></a>
<a id="schema_Record"></a>
<a id="tocSrecord"></a>
<a id="tocsrecord"></a>

```json
{
  "values": {}
}
```

<p>A record returned by a call.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|object|false|none|none|

<h2 id="tocS_Records">Records</h2>
<!-- backwards compatibility -->
<a id="schemarecords"></a>
<a id="schema_Records"></a>
<a id="tocSrecords"></a>
<a id="tocsrecords"></a>

```json
[
  {
    "values": {}
  }
]
```

<h2 id="tocS_ResultSetMetadata">ResultSetMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaresultsetmetadata"></a>
<a id="schema_ResultSetMetadata"></a>
<a id="tocSresultsetmetadata"></a>
<a id="tocsresultsetmetadata"></a>

```json
{
  "columnCount": {},
  "columnMetadata": {}
}
```

The metadata of the result set returned by a SQL statement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnCount|object|false|none|none|
|columnMetadata|object|false|none|none|

<h2 id="tocS_ResultFrame">ResultFrame</h2>
<!-- backwards compatibility -->
<a id="schemaresultframe"></a>
<a id="schema_ResultFrame"></a>
<a id="tocSresultframe"></a>
<a id="tocsresultframe"></a>

```json
{
  "resultSetMetadata": {
    "columnCount": {},
    "columnMetadata": {}
  },
  "records": {}
}
```

<p>The result set returned by a SQL statement.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resultSetMetadata|object|false|none|none|
|records|object|false|none|none|

<h2 id="tocS_RollbackTransactionRequest">RollbackTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemarollbacktransactionrequest"></a>
<a id="schema_RollbackTransactionRequest"></a>
<a id="tocSrollbacktransactionrequest"></a>
<a id="tocsrollbacktransactionrequest"></a>

```json
{
  "resourceArn": {},
  "secretArn": {},
  "transactionId": {}
}
```

The request parameters represent the input of a request to perform a rollback of a transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|secretArn|object|true|none|none|
|transactionId|object|true|none|none|

<h2 id="tocS_TypeHint">TypeHint</h2>
<!-- backwards compatibility -->
<a id="schematypehint"></a>
<a id="schema_TypeHint"></a>
<a id="tocStypehint"></a>
<a id="tocstypehint"></a>

```json
"JSON"
```

<h2 id="tocS_SqlStatementResult">SqlStatementResult</h2>
<!-- backwards compatibility -->
<a id="schemasqlstatementresult"></a>
<a id="schema_SqlStatementResult"></a>
<a id="tocSsqlstatementresult"></a>
<a id="tocssqlstatementresult"></a>

```json
{
  "resultFrame": {
    "resultSetMetadata": {
      "columnCount": {},
      "columnMetadata": {}
    },
    "records": {}
  },
  "numberOfRecordsUpdated": {}
}
```

<p>The result of a SQL statement.</p> <pre><code> &lt;note&gt; &lt;p&gt;This data structure is only used with the deprecated &lt;code&gt;ExecuteSql&lt;/code&gt; operation. Use the &lt;code&gt;BatchExecuteStatement&lt;/code&gt; or &lt;code&gt;ExecuteStatement&lt;/code&gt; operation instead.&lt;/p&gt; &lt;/note&gt; </code></pre>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resultFrame|object|false|none|none|
|numberOfRecordsUpdated|object|false|none|none|

<h2 id="tocS_StructValue">StructValue</h2>
<!-- backwards compatibility -->
<a id="schemastructvalue"></a>
<a id="schema_StructValue"></a>
<a id="tocSstructvalue"></a>
<a id="tocsstructvalue"></a>

```json
{
  "attributes": {}
}
```

<p>A structure value returned by a call.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|

<h2 id="tocS_UpdateResult">UpdateResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresult"></a>
<a id="schema_UpdateResult"></a>
<a id="tocSupdateresult"></a>
<a id="tocsupdateresult"></a>

```json
{
  "generatedFields": {}
}
```

The response elements represent the results of an update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|generatedFields|object|false|none|none|
