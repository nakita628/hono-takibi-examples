<h1 id="amazon-athena">Amazon Athena v2017-05-18</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon Athena is an interactive query service that lets you use standard SQL to analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay only for the queries you run. Athena scales automatically—executing queries in parallel—so results are fast, even with large datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User Guide</i>.</p> <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or later with the Amazon Athena API. Earlier version drivers do not support the API. For more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing Amazon Athena with JDBC</a>.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

Base URLs:

* <a href="http://athena.us-east-1.amazonaws.com">http://athena.us-east-1.amazonaws.com</a> - The Amazon Athena multi-region endpoint

* <a href="https://athena.us-east-1.amazonaws.com">https://athena.us-east-1.amazonaws.com</a> - The Amazon Athena multi-region endpoint

* <a href="http://athena.cn-north-1.amazonaws.com.cn">http://athena.cn-north-1.amazonaws.com.cn</a> - The Amazon Athena endpoint for China (Beijing) and China (Ningxia)

* <a href="https://athena.cn-north-1.amazonaws.com.cn">https://athena.cn-north-1.amazonaws.com.cn</a> - The Amazon Athena endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/athena/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-athena-default">Default</h1>

## BatchGetNamedQuery

<a id="opIdBatchGetNamedQuery"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.BatchGetNamedQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.BatchGetNamedQuery' \
  -d '{
    "NamedQueryIds": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.BatchGetNamedQuery`

Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of query execution IDs.

> Body parameter

```json
{
  "NamedQueryIds": {}
}
```

<h3 id="batchgetnamedquery-parameters">Parameters</h3>

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
|body|body|[BatchGetNamedQueryInput](#schemabatchgetnamedqueryinput)|true|none|
|» NamedQueryIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.BatchGetNamedQuery|

> Example responses

> 200 Response

```json
{
  "NamedQueries": {},
  "UnprocessedNamedQueryIds": {}
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

<h3 id="batchgetnamedquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetNamedQueryOutput](#schemabatchgetnamedqueryoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetPreparedStatement

<a id="opIdBatchGetPreparedStatement"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.BatchGetPreparedStatement' \
  -d '{
    "PreparedStatementNames": {},
    "WorkGroup": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement`

Returns the details of a single prepared statement or a list of up to 256 prepared statements for the array of prepared statement names that you provide. Requires you to have access to the workgroup to which the prepared statements belong. If a prepared statement cannot be retrieved for the name specified, the statement is listed in <code>UnprocessedPreparedStatementNames</code>.

> Body parameter

```json
{
  "PreparedStatementNames": {},
  "WorkGroup": {}
}
```

<h3 id="batchgetpreparedstatement-parameters">Parameters</h3>

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
|body|body|[BatchGetPreparedStatementInput](#schemabatchgetpreparedstatementinput)|true|none|
|» PreparedStatementNames|body|object|true|none|
|» WorkGroup|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.BatchGetPreparedStatement|

> Example responses

> 200 Response

```json
{
  "PreparedStatements": {},
  "UnprocessedPreparedStatementNames": {}
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

<h3 id="batchgetpreparedstatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetPreparedStatementOutput](#schemabatchgetpreparedstatementoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetQueryExecution

<a id="opIdBatchGetQueryExecution"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.BatchGetQueryExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.BatchGetQueryExecution' \
  -d '{
    "QueryExecutionIds": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.BatchGetQueryExecution`

Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.

> Body parameter

```json
{
  "QueryExecutionIds": {}
}
```

<h3 id="batchgetqueryexecution-parameters">Parameters</h3>

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
|body|body|[BatchGetQueryExecutionInput](#schemabatchgetqueryexecutioninput)|true|none|
|» QueryExecutionIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.BatchGetQueryExecution|

> Example responses

> 200 Response

```json
{
  "QueryExecutions": {},
  "UnprocessedQueryExecutionIds": {}
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

<h3 id="batchgetqueryexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetQueryExecutionOutput](#schemabatchgetqueryexecutionoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelCapacityReservation

<a id="opIdCancelCapacityReservation"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.CancelCapacityReservation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.CancelCapacityReservation' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.CancelCapacityReservation`

Cancels the capacity reservation with the specified name. Cancelled reservations remain in your account and will be deleted 45 days after cancellation. During the 45 days, you cannot re-purpose or reuse a reservation that has been cancelled, but you can refer to its tags and view it for historical reference. 

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="cancelcapacityreservation-parameters">Parameters</h3>

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
|body|body|[CancelCapacityReservationInput](#schemacancelcapacityreservationinput)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.CancelCapacityReservation|

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

<h3 id="cancelcapacityreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelCapacityReservationOutput](#schemacancelcapacityreservationoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCapacityReservation

<a id="opIdCreateCapacityReservation"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.CreateCapacityReservation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.CreateCapacityReservation' \
  -d '{
    "TargetDpus": {},
    "Name": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.CreateCapacityReservation`

Creates a capacity reservation with the specified name and number of requested data processing units.

> Body parameter

```json
{
  "TargetDpus": {},
  "Name": {},
  "Tags": {}
}
```

<h3 id="createcapacityreservation-parameters">Parameters</h3>

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
|body|body|[CreateCapacityReservationInput](#schemacreatecapacityreservationinput)|true|none|
|» TargetDpus|body|object|true|none|
|» Name|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.CreateCapacityReservation|

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

<h3 id="createcapacityreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCapacityReservationOutput](#schemacreatecapacityreservationoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataCatalog

<a id="opIdCreateDataCatalog"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.CreateDataCatalog' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.CreateDataCatalog' \
  -d '{
    "Name": {},
    "Type": {},
    "Description": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.CreateDataCatalog`

Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account.

> Body parameter

```json
{
  "Name": {},
  "Type": {},
  "Description": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {}
}
```

<h3 id="createdatacatalog-parameters">Parameters</h3>

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
|body|body|[CreateDataCatalogInput](#schemacreatedatacataloginput)|true|none|
|» Name|body|object|true|none|
|» Type|body|object|true|none|
|» Description|body|object|false|none|
|» Parameters|body|object|false|none|
|» » **additionalProperties**|body|[ParametersMapValue](#schemaparametersmapvalue)|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.CreateDataCatalog|

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

<h3 id="createdatacatalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDataCatalogOutput](#schemacreatedatacatalogoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateNamedQuery

<a id="opIdCreateNamedQuery"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.CreateNamedQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.CreateNamedQuery' \
  -d '{
    "Name": {},
    "Description": {},
    "Database": {},
    "QueryString": {},
    "ClientRequestToken": {},
    "WorkGroup": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.CreateNamedQuery`

<p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "Database": {},
  "QueryString": {},
  "ClientRequestToken": {},
  "WorkGroup": {}
}
```

<h3 id="createnamedquery-parameters">Parameters</h3>

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
|body|body|[CreateNamedQueryInput](#schemacreatenamedqueryinput)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» Database|body|object|true|none|
|» QueryString|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» WorkGroup|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.CreateNamedQuery|

> Example responses

> 200 Response

```json
{
  "NamedQueryId": {}
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

<h3 id="createnamedquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateNamedQueryOutput](#schemacreatenamedqueryoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateNotebook

<a id="opIdCreateNotebook"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.CreateNotebook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.CreateNotebook' \
  -d '{
    "WorkGroup": {},
    "Name": {},
    "ClientRequestToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.CreateNotebook`

Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists.

> Body parameter

```json
{
  "WorkGroup": {},
  "Name": {},
  "ClientRequestToken": {}
}
```

<h3 id="createnotebook-parameters">Parameters</h3>

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
|body|body|[CreateNotebookInput](#schemacreatenotebookinput)|true|none|
|» WorkGroup|body|object|true|none|
|» Name|body|object|true|none|
|» ClientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.CreateNotebook|

> Example responses

> 200 Response

```json
{
  "NotebookId": {}
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

<h3 id="createnotebook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateNotebookOutput](#schemacreatenotebookoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePreparedStatement

<a id="opIdCreatePreparedStatement"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.CreatePreparedStatement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.CreatePreparedStatement' \
  -d '{
    "StatementName": {},
    "WorkGroup": {},
    "QueryStatement": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.CreatePreparedStatement`

Creates a prepared statement for use with SQL queries in Athena.

> Body parameter

```json
{
  "StatementName": {},
  "WorkGroup": {},
  "QueryStatement": {},
  "Description": {}
}
```

<h3 id="createpreparedstatement-parameters">Parameters</h3>

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
|body|body|[CreatePreparedStatementInput](#schemacreatepreparedstatementinput)|true|none|
|» StatementName|body|object|true|none|
|» WorkGroup|body|object|true|none|
|» QueryStatement|body|object|true|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.CreatePreparedStatement|

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

<h3 id="createpreparedstatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePreparedStatementOutput](#schemacreatepreparedstatementoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePresignedNotebookUrl

<a id="opIdCreatePresignedNotebookUrl"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.CreatePresignedNotebookUrl' \
  -d '{
    "SessionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl`

Gets an authentication token and the URL at which the notebook can be accessed. During programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10 minutes to refresh the authentication token. For information about granting programmatic access, see <a href="https://docs.aws.amazon.com/athena/latest/ug/setting-up.html#setting-up-grant-programmatic-access">Grant programmatic access</a>.

> Body parameter

```json
{
  "SessionId": {}
}
```

<h3 id="createpresignednotebookurl-parameters">Parameters</h3>

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
|body|body|[CreatePresignedNotebookUrlRequest](#schemacreatepresignednotebookurlrequest)|true|none|
|» SessionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.CreatePresignedNotebookUrl|

> Example responses

> 200 Response

```json
{
  "NotebookUrl": {},
  "AuthToken": {},
  "AuthTokenExpirationTime": {}
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

<h3 id="createpresignednotebookurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePresignedNotebookUrlResponse](#schemacreatepresignednotebookurlresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWorkGroup

<a id="opIdCreateWorkGroup"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.CreateWorkGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.CreateWorkGroup' \
  -d '{
    "Name": {},
    "Configuration": {
      "ResultConfiguration": {
        "OutputLocation": {},
        "EncryptionConfiguration": {
          "EncryptionOption": {},
          "KmsKey": {}
        },
        "ExpectedBucketOwner": {},
        "AclConfiguration": {
          "S3AclOption": {}
        }
      },
      "EnforceWorkGroupConfiguration": {},
      "PublishCloudWatchMetricsEnabled": {},
      "BytesScannedCutoffPerQuery": {},
      "RequesterPaysEnabled": {},
      "EngineVersion": {
        "SelectedEngineVersion": {},
        "EffectiveEngineVersion": {}
      },
      "AdditionalConfiguration": {},
      "ExecutionRole": {},
      "CustomerContentEncryptionConfiguration": {
        "KmsKey": {}
      },
      "EnableMinimumEncryptionConfiguration": {}
    },
    "Description": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.CreateWorkGroup`

Creates a workgroup with the specified name. A workgroup can be an Apache Spark enabled workgroup or an Athena SQL workgroup.

> Body parameter

```json
{
  "Name": {},
  "Configuration": {
    "ResultConfiguration": {
      "OutputLocation": {},
      "EncryptionConfiguration": {
        "EncryptionOption": {},
        "KmsKey": {}
      },
      "ExpectedBucketOwner": {},
      "AclConfiguration": {
        "S3AclOption": {}
      }
    },
    "EnforceWorkGroupConfiguration": {},
    "PublishCloudWatchMetricsEnabled": {},
    "BytesScannedCutoffPerQuery": {},
    "RequesterPaysEnabled": {},
    "EngineVersion": {
      "SelectedEngineVersion": {},
      "EffectiveEngineVersion": {}
    },
    "AdditionalConfiguration": {},
    "ExecutionRole": {},
    "CustomerContentEncryptionConfiguration": {
      "KmsKey": {}
    },
    "EnableMinimumEncryptionConfiguration": {}
  },
  "Description": {},
  "Tags": {}
}
```

<h3 id="createworkgroup-parameters">Parameters</h3>

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
|body|body|[CreateWorkGroupInput](#schemacreateworkgroupinput)|true|none|
|» Name|body|object|true|none|
|» Configuration|body|object|false|none|
|» » ResultConfiguration|body|object|false|none|
|» » » OutputLocation|body|object|false|none|
|» » » EncryptionConfiguration|body|object|false|none|
|» » » » EncryptionOption|body|object|true|none|
|» » » » KmsKey|body|object|false|none|
|» » » ExpectedBucketOwner|body|object|false|none|
|» » » AclConfiguration|body|object|false|none|
|» » » » S3AclOption|body|object|true|none|
|» » EnforceWorkGroupConfiguration|body|object|false|none|
|» » PublishCloudWatchMetricsEnabled|body|object|false|none|
|» » BytesScannedCutoffPerQuery|body|object|false|none|
|» » RequesterPaysEnabled|body|object|false|none|
|» » EngineVersion|body|object|false|none|
|» » » SelectedEngineVersion|body|object|false|none|
|» » » EffectiveEngineVersion|body|object|false|none|
|» » AdditionalConfiguration|body|object|false|none|
|» » ExecutionRole|body|object|false|none|
|» » CustomerContentEncryptionConfiguration|body|object|false|none|
|» » » KmsKey|body|object|true|none|
|» » EnableMinimumEncryptionConfiguration|body|object|false|none|
|» Description|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.CreateWorkGroup|

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

<h3 id="createworkgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWorkGroupOutput](#schemacreateworkgroupoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCapacityReservation

<a id="opIdDeleteCapacityReservation"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.DeleteCapacityReservation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.DeleteCapacityReservation' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.DeleteCapacityReservation`

Deletes a cancelled capacity reservation. A reservation must be cancelled before it can be deleted. A deleted reservation is immediately removed from your account and can no longer be referenced, including by its ARN. A deleted reservation cannot be called by <code>GetCapacityReservation</code>, and deleted reservations do not appear in the output of <code>ListCapacityReservations</code>.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deletecapacityreservation-parameters">Parameters</h3>

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
|body|body|[DeleteCapacityReservationInput](#schemadeletecapacityreservationinput)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.DeleteCapacityReservation|

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

<h3 id="deletecapacityreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCapacityReservationOutput](#schemadeletecapacityreservationoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataCatalog

<a id="opIdDeleteDataCatalog"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.DeleteDataCatalog' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.DeleteDataCatalog' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.DeleteDataCatalog`

Deletes a data catalog.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deletedatacatalog-parameters">Parameters</h3>

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
|body|body|[DeleteDataCatalogInput](#schemadeletedatacataloginput)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.DeleteDataCatalog|

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

<h3 id="deletedatacatalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDataCatalogOutput](#schemadeletedatacatalogoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteNamedQuery

<a id="opIdDeleteNamedQuery"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.DeleteNamedQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.DeleteNamedQuery' \
  -d '{
    "NamedQueryId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.DeleteNamedQuery`

<p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

> Body parameter

```json
{
  "NamedQueryId": {}
}
```

<h3 id="deletenamedquery-parameters">Parameters</h3>

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
|body|body|[DeleteNamedQueryInput](#schemadeletenamedqueryinput)|true|none|
|» NamedQueryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.DeleteNamedQuery|

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

<h3 id="deletenamedquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteNamedQueryOutput](#schemadeletenamedqueryoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteNotebook

<a id="opIdDeleteNotebook"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.DeleteNotebook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.DeleteNotebook' \
  -d '{
    "NotebookId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.DeleteNotebook`

Deletes the specified notebook.

> Body parameter

```json
{
  "NotebookId": {}
}
```

<h3 id="deletenotebook-parameters">Parameters</h3>

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
|body|body|[DeleteNotebookInput](#schemadeletenotebookinput)|true|none|
|» NotebookId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.DeleteNotebook|

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

<h3 id="deletenotebook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteNotebookOutput](#schemadeletenotebookoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePreparedStatement

<a id="opIdDeletePreparedStatement"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.DeletePreparedStatement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.DeletePreparedStatement' \
  -d '{
    "StatementName": {},
    "WorkGroup": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.DeletePreparedStatement`

Deletes the prepared statement with the specified name from the specified workgroup.

> Body parameter

```json
{
  "StatementName": {},
  "WorkGroup": {}
}
```

<h3 id="deletepreparedstatement-parameters">Parameters</h3>

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
|body|body|[DeletePreparedStatementInput](#schemadeletepreparedstatementinput)|true|none|
|» StatementName|body|object|true|none|
|» WorkGroup|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.DeletePreparedStatement|

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

<h3 id="deletepreparedstatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePreparedStatementOutput](#schemadeletepreparedstatementoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWorkGroup

<a id="opIdDeleteWorkGroup"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.DeleteWorkGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.DeleteWorkGroup' \
  -d '{
    "WorkGroup": {},
    "RecursiveDeleteOption": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.DeleteWorkGroup`

Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.

> Body parameter

```json
{
  "WorkGroup": {},
  "RecursiveDeleteOption": {}
}
```

<h3 id="deleteworkgroup-parameters">Parameters</h3>

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
|body|body|[DeleteWorkGroupInput](#schemadeleteworkgroupinput)|true|none|
|» WorkGroup|body|object|true|none|
|» RecursiveDeleteOption|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.DeleteWorkGroup|

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

<h3 id="deleteworkgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteWorkGroupOutput](#schemadeleteworkgroupoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExportNotebook

<a id="opIdExportNotebook"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ExportNotebook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ExportNotebook' \
  -d '{
    "NotebookId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ExportNotebook`

Exports the specified notebook and its metadata.

> Body parameter

```json
{
  "NotebookId": {}
}
```

<h3 id="exportnotebook-parameters">Parameters</h3>

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
|body|body|[ExportNotebookInput](#schemaexportnotebookinput)|true|none|
|» NotebookId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ExportNotebook|

> Example responses

> 200 Response

```json
{
  "NotebookMetadata": {
    "NotebookId": {},
    "Name": {},
    "WorkGroup": {},
    "CreationTime": {},
    "Type": {},
    "LastModifiedTime": {}
  },
  "Payload": {}
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

<h3 id="exportnotebook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportNotebookOutput](#schemaexportnotebookoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCalculationExecution

<a id="opIdGetCalculationExecution"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetCalculationExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetCalculationExecution' \
  -d '{
    "CalculationExecutionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetCalculationExecution`

Describes a previously submitted calculation execution.

> Body parameter

```json
{
  "CalculationExecutionId": {}
}
```

<h3 id="getcalculationexecution-parameters">Parameters</h3>

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
|body|body|[GetCalculationExecutionRequest](#schemagetcalculationexecutionrequest)|true|none|
|» CalculationExecutionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetCalculationExecution|

> Example responses

> 200 Response

```json
{
  "CalculationExecutionId": {},
  "SessionId": {},
  "Description": {},
  "WorkingDirectory": {},
  "Status": {
    "SubmissionDateTime": {},
    "CompletionDateTime": {},
    "State": {},
    "StateChangeReason": {}
  },
  "Statistics": {
    "DpuExecutionInMillis": {},
    "Progress": {}
  },
  "Result": {
    "StdOutS3Uri": {},
    "StdErrorS3Uri": {},
    "ResultS3Uri": {},
    "ResultType": {}
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

<h3 id="getcalculationexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCalculationExecutionResponse](#schemagetcalculationexecutionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCalculationExecutionCode

<a id="opIdGetCalculationExecutionCode"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetCalculationExecutionCode' \
  -d '{
    "CalculationExecutionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode`

Retrieves the unencrypted code that was executed for the calculation.

> Body parameter

```json
{
  "CalculationExecutionId": {}
}
```

<h3 id="getcalculationexecutioncode-parameters">Parameters</h3>

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
|body|body|[GetCalculationExecutionCodeRequest](#schemagetcalculationexecutioncoderequest)|true|none|
|» CalculationExecutionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetCalculationExecutionCode|

> Example responses

> 200 Response

```json
{
  "CodeBlock": {}
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

<h3 id="getcalculationexecutioncode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCalculationExecutionCodeResponse](#schemagetcalculationexecutioncoderesponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCalculationExecutionStatus

<a id="opIdGetCalculationExecutionStatus"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetCalculationExecutionStatus' \
  -d '{
    "CalculationExecutionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus`

Gets the status of a current calculation.

> Body parameter

```json
{
  "CalculationExecutionId": {}
}
```

<h3 id="getcalculationexecutionstatus-parameters">Parameters</h3>

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
|body|body|[GetCalculationExecutionStatusRequest](#schemagetcalculationexecutionstatusrequest)|true|none|
|» CalculationExecutionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetCalculationExecutionStatus|

> Example responses

> 200 Response

```json
{
  "Status": {
    "SubmissionDateTime": {},
    "CompletionDateTime": {},
    "State": {},
    "StateChangeReason": {}
  },
  "Statistics": {
    "DpuExecutionInMillis": {},
    "Progress": {}
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

<h3 id="getcalculationexecutionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCalculationExecutionStatusResponse](#schemagetcalculationexecutionstatusresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCapacityAssignmentConfiguration

<a id="opIdGetCapacityAssignmentConfiguration"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetCapacityAssignmentConfiguration' \
  -d '{
    "CapacityReservationName": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration`

Gets the capacity assignment configuration for a capacity reservation, if one exists.

> Body parameter

```json
{
  "CapacityReservationName": {}
}
```

<h3 id="getcapacityassignmentconfiguration-parameters">Parameters</h3>

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
|body|body|[GetCapacityAssignmentConfigurationInput](#schemagetcapacityassignmentconfigurationinput)|true|none|
|» CapacityReservationName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetCapacityAssignmentConfiguration|

> Example responses

> 200 Response

```json
{
  "CapacityAssignmentConfiguration": {
    "CapacityReservationName": {},
    "CapacityAssignments": {}
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

<h3 id="getcapacityassignmentconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCapacityAssignmentConfigurationOutput](#schemagetcapacityassignmentconfigurationoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCapacityReservation

<a id="opIdGetCapacityReservation"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetCapacityReservation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetCapacityReservation' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetCapacityReservation`

Returns information about the capacity reservation with the specified name.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="getcapacityreservation-parameters">Parameters</h3>

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
|body|body|[GetCapacityReservationInput](#schemagetcapacityreservationinput)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetCapacityReservation|

> Example responses

> 200 Response

```json
{
  "CapacityReservation": {
    "Name": {},
    "Status": {},
    "TargetDpus": {},
    "AllocatedDpus": {},
    "LastAllocation": {
      "Status": {},
      "StatusMessage": {},
      "RequestTime": {},
      "RequestCompletionTime": {}
    },
    "LastSuccessfulAllocationTime": {},
    "CreationTime": {}
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

<h3 id="getcapacityreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCapacityReservationOutput](#schemagetcapacityreservationoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataCatalog

<a id="opIdGetDataCatalog"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetDataCatalog' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetDataCatalog' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetDataCatalog`

Returns the specified data catalog.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="getdatacatalog-parameters">Parameters</h3>

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
|body|body|[GetDataCatalogInput](#schemagetdatacataloginput)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetDataCatalog|

> Example responses

> 200 Response

```json
{
  "DataCatalog": {
    "Name": {},
    "Description": {},
    "Type": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
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

<h3 id="getdatacatalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataCatalogOutput](#schemagetdatacatalogoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDatabase

<a id="opIdGetDatabase"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetDatabase' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetDatabase' \
  -d '{
    "CatalogName": {},
    "DatabaseName": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetDatabase`

Returns a database object for the specified database and data catalog.

> Body parameter

```json
{
  "CatalogName": {},
  "DatabaseName": {}
}
```

<h3 id="getdatabase-parameters">Parameters</h3>

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
|body|body|[GetDatabaseInput](#schemagetdatabaseinput)|true|none|
|» CatalogName|body|object|true|none|
|» DatabaseName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetDatabase|

> Example responses

> 200 Response

```json
{
  "Database": {
    "Name": {},
    "Description": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
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

<h3 id="getdatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDatabaseOutput](#schemagetdatabaseoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|MetadataException|[MetadataException](#schemametadataexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNamedQuery

<a id="opIdGetNamedQuery"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetNamedQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetNamedQuery' \
  -d '{
    "NamedQueryId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetNamedQuery`

Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.

> Body parameter

```json
{
  "NamedQueryId": {}
}
```

<h3 id="getnamedquery-parameters">Parameters</h3>

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
|body|body|[GetNamedQueryInput](#schemagetnamedqueryinput)|true|none|
|» NamedQueryId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetNamedQuery|

> Example responses

> 200 Response

```json
{
  "NamedQuery": {
    "Name": {},
    "Description": {},
    "Database": {},
    "QueryString": {},
    "NamedQueryId": {},
    "WorkGroup": {}
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

<h3 id="getnamedquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNamedQueryOutput](#schemagetnamedqueryoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNotebookMetadata

<a id="opIdGetNotebookMetadata"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetNotebookMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetNotebookMetadata' \
  -d '{
    "NotebookId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetNotebookMetadata`

Retrieves notebook metadata for the specified notebook ID.

> Body parameter

```json
{
  "NotebookId": {}
}
```

<h3 id="getnotebookmetadata-parameters">Parameters</h3>

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
|body|body|[GetNotebookMetadataInput](#schemagetnotebookmetadatainput)|true|none|
|» NotebookId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetNotebookMetadata|

> Example responses

> 200 Response

```json
{
  "NotebookMetadata": {
    "NotebookId": {},
    "Name": {},
    "WorkGroup": {},
    "CreationTime": {},
    "Type": {},
    "LastModifiedTime": {}
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

<h3 id="getnotebookmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNotebookMetadataOutput](#schemagetnotebookmetadataoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPreparedStatement

<a id="opIdGetPreparedStatement"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetPreparedStatement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetPreparedStatement' \
  -d '{
    "StatementName": {},
    "WorkGroup": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetPreparedStatement`

Retrieves the prepared statement with the specified name from the specified workgroup.

> Body parameter

```json
{
  "StatementName": {},
  "WorkGroup": {}
}
```

<h3 id="getpreparedstatement-parameters">Parameters</h3>

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
|body|body|[GetPreparedStatementInput](#schemagetpreparedstatementinput)|true|none|
|» StatementName|body|object|true|none|
|» WorkGroup|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetPreparedStatement|

> Example responses

> 200 Response

```json
{
  "PreparedStatement": {
    "StatementName": {},
    "QueryStatement": {},
    "WorkGroupName": {},
    "Description": {},
    "LastModifiedTime": {}
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

<h3 id="getpreparedstatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPreparedStatementOutput](#schemagetpreparedstatementoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetQueryExecution

<a id="opIdGetQueryExecution"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetQueryExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetQueryExecution' \
  -d '{
    "QueryExecutionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetQueryExecution`

Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.

> Body parameter

```json
{
  "QueryExecutionId": {}
}
```

<h3 id="getqueryexecution-parameters">Parameters</h3>

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
|body|body|[GetQueryExecutionInput](#schemagetqueryexecutioninput)|true|none|
|» QueryExecutionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetQueryExecution|

> Example responses

> 200 Response

```json
{
  "QueryExecution": {
    "QueryExecutionId": {},
    "Query": {},
    "StatementType": {},
    "ResultConfiguration": {
      "OutputLocation": {},
      "EncryptionConfiguration": {
        "EncryptionOption": {},
        "KmsKey": {}
      },
      "ExpectedBucketOwner": {},
      "AclConfiguration": {
        "S3AclOption": {}
      }
    },
    "ResultReuseConfiguration": {
      "ResultReuseByAgeConfiguration": {
        "Enabled": {},
        "MaxAgeInMinutes": {}
      }
    },
    "QueryExecutionContext": {
      "Database": {},
      "Catalog": {}
    },
    "Status": {
      "State": {},
      "StateChangeReason": {},
      "SubmissionDateTime": {},
      "CompletionDateTime": {},
      "AthenaError": {
        "ErrorCategory": {},
        "ErrorType": {},
        "Retryable": {},
        "ErrorMessage": {}
      }
    },
    "Statistics": {
      "EngineExecutionTimeInMillis": {},
      "DataScannedInBytes": {},
      "DataManifestLocation": {},
      "TotalExecutionTimeInMillis": {},
      "QueryQueueTimeInMillis": {},
      "QueryPlanningTimeInMillis": {},
      "ServiceProcessingTimeInMillis": {},
      "ResultReuseInformation": {
        "ReusedPreviousResult": {}
      }
    },
    "WorkGroup": {},
    "EngineVersion": {
      "SelectedEngineVersion": {},
      "EffectiveEngineVersion": {}
    },
    "ExecutionParameters": {},
    "SubstatementType": {}
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

<h3 id="getqueryexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQueryExecutionOutput](#schemagetqueryexecutionoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetQueryResults

<a id="opIdGetQueryResults"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetQueryResults' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetQueryResults' \
  -d '{
    "QueryExecutionId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetQueryResults`

<p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>

> Body parameter

```json
{
  "QueryExecutionId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="getqueryresults-parameters">Parameters</h3>

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
|body|body|[GetQueryResultsInput](#schemagetqueryresultsinput)|true|none|
|» QueryExecutionId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetQueryResults|

> Example responses

> 200 Response

```json
{
  "UpdateCount": {},
  "ResultSet": {
    "Rows": {},
    "ResultSetMetadata": {
      "ColumnInfo": {}
    }
  },
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

<h3 id="getqueryresults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQueryResultsOutput](#schemagetqueryresultsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetQueryRuntimeStatistics

<a id="opIdGetQueryRuntimeStatistics"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetQueryRuntimeStatistics' \
  -d '{
    "QueryExecutionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics`

Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Query execution runtime statistics are returned only when <a>QueryExecutionStatus$State</a> is in a SUCCEEDED or FAILED state. Stage-level input and output row count and data size statistics are not shown when a query has row-level filters defined in Lake Formation.

> Body parameter

```json
{
  "QueryExecutionId": {}
}
```

<h3 id="getqueryruntimestatistics-parameters">Parameters</h3>

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
|body|body|[GetQueryRuntimeStatisticsInput](#schemagetqueryruntimestatisticsinput)|true|none|
|» QueryExecutionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetQueryRuntimeStatistics|

> Example responses

> 200 Response

```json
{
  "QueryRuntimeStatistics": {
    "Timeline": {
      "QueryQueueTimeInMillis": {},
      "QueryPlanningTimeInMillis": {},
      "EngineExecutionTimeInMillis": {},
      "ServiceProcessingTimeInMillis": {},
      "TotalExecutionTimeInMillis": {}
    },
    "Rows": {
      "InputRows": {},
      "InputBytes": {},
      "OutputBytes": {},
      "OutputRows": {}
    },
    "OutputStage": {
      "StageId": {},
      "State": {},
      "OutputBytes": {},
      "OutputRows": {},
      "InputBytes": {},
      "InputRows": {},
      "ExecutionTime": {},
      "QueryStagePlan": {},
      "SubStages": {}
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

<h3 id="getqueryruntimestatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQueryRuntimeStatisticsOutput](#schemagetqueryruntimestatisticsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSession

<a id="opIdGetSession"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetSession' \
  -d '{
    "SessionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetSession`

Gets the full details of a previously created session, including the session status and configuration.

> Body parameter

```json
{
  "SessionId": {}
}
```

<h3 id="getsession-parameters">Parameters</h3>

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
|body|body|[GetSessionRequest](#schemagetsessionrequest)|true|none|
|» SessionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetSession|

> Example responses

> 200 Response

```json
{
  "SessionId": {},
  "Description": {},
  "WorkGroup": {},
  "EngineVersion": {},
  "EngineConfiguration": {
    "CoordinatorDpuSize": {},
    "MaxConcurrentDpus": {},
    "DefaultExecutorDpuSize": {},
    "AdditionalConfigs": {
      "property1": "string",
      "property2": "string"
    },
    "SparkProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "NotebookVersion": {},
  "SessionConfiguration": {
    "ExecutionRole": {},
    "WorkingDirectory": {},
    "IdleTimeoutSeconds": {},
    "EncryptionConfiguration": {
      "EncryptionOption": {},
      "KmsKey": {}
    }
  },
  "Status": {
    "StartDateTime": {},
    "LastModifiedDateTime": {},
    "EndDateTime": {},
    "IdleSinceDateTime": {},
    "State": {},
    "StateChangeReason": {}
  },
  "Statistics": {
    "DpuExecutionInMillis": {}
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

<h3 id="getsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSessionResponse](#schemagetsessionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSessionStatus

<a id="opIdGetSessionStatus"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetSessionStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetSessionStatus' \
  -d '{
    "SessionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetSessionStatus`

Gets the current status of a session.

> Body parameter

```json
{
  "SessionId": {}
}
```

<h3 id="getsessionstatus-parameters">Parameters</h3>

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
|body|body|[GetSessionStatusRequest](#schemagetsessionstatusrequest)|true|none|
|» SessionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetSessionStatus|

> Example responses

> 200 Response

```json
{
  "SessionId": {},
  "Status": {
    "StartDateTime": {},
    "LastModifiedDateTime": {},
    "EndDateTime": {},
    "IdleSinceDateTime": {},
    "State": {},
    "StateChangeReason": {}
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

<h3 id="getsessionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSessionStatusResponse](#schemagetsessionstatusresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTableMetadata

<a id="opIdGetTableMetadata"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetTableMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetTableMetadata' \
  -d '{
    "CatalogName": {},
    "DatabaseName": {},
    "TableName": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetTableMetadata`

Returns table metadata for the specified catalog, database, and table.

> Body parameter

```json
{
  "CatalogName": {},
  "DatabaseName": {},
  "TableName": {}
}
```

<h3 id="gettablemetadata-parameters">Parameters</h3>

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
|body|body|[GetTableMetadataInput](#schemagettablemetadatainput)|true|none|
|» CatalogName|body|object|true|none|
|» DatabaseName|body|object|true|none|
|» TableName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetTableMetadata|

> Example responses

> 200 Response

```json
{
  "TableMetadata": {
    "Name": {},
    "CreateTime": {},
    "LastAccessTime": {},
    "TableType": {},
    "Columns": {},
    "PartitionKeys": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
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

<h3 id="gettablemetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTableMetadataOutput](#schemagettablemetadataoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|MetadataException|[MetadataException](#schemametadataexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWorkGroup

<a id="opIdGetWorkGroup"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.GetWorkGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.GetWorkGroup' \
  -d '{
    "WorkGroup": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.GetWorkGroup`

Returns information about the workgroup with the specified name.

> Body parameter

```json
{
  "WorkGroup": {}
}
```

<h3 id="getworkgroup-parameters">Parameters</h3>

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
|body|body|[GetWorkGroupInput](#schemagetworkgroupinput)|true|none|
|» WorkGroup|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.GetWorkGroup|

> Example responses

> 200 Response

```json
{
  "WorkGroup": {
    "Name": {},
    "State": {},
    "Configuration": {
      "ResultConfiguration": {
        "OutputLocation": {},
        "EncryptionConfiguration": {
          "EncryptionOption": {},
          "KmsKey": {}
        },
        "ExpectedBucketOwner": {},
        "AclConfiguration": {
          "S3AclOption": {}
        }
      },
      "EnforceWorkGroupConfiguration": {},
      "PublishCloudWatchMetricsEnabled": {},
      "BytesScannedCutoffPerQuery": {},
      "RequesterPaysEnabled": {},
      "EngineVersion": {
        "SelectedEngineVersion": {},
        "EffectiveEngineVersion": {}
      },
      "AdditionalConfiguration": {},
      "ExecutionRole": {},
      "CustomerContentEncryptionConfiguration": {
        "KmsKey": {}
      },
      "EnableMinimumEncryptionConfiguration": {}
    },
    "Description": {},
    "CreationTime": {}
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

<h3 id="getworkgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWorkGroupOutput](#schemagetworkgroupoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportNotebook

<a id="opIdImportNotebook"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ImportNotebook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ImportNotebook' \
  -d '{
    "WorkGroup": {},
    "Name": {},
    "Payload": {},
    "Type": {},
    "ClientRequestToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ImportNotebook`

Imports a single <code>ipynb</code> file to a Spark enabled workgroup. The maximum file size that can be imported is 10 megabytes. If an <code>ipynb</code> file with the same name already exists in the workgroup, throws an error.

> Body parameter

```json
{
  "WorkGroup": {},
  "Name": {},
  "Payload": {},
  "Type": {},
  "ClientRequestToken": {}
}
```

<h3 id="importnotebook-parameters">Parameters</h3>

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
|body|body|[ImportNotebookInput](#schemaimportnotebookinput)|true|none|
|» WorkGroup|body|object|true|none|
|» Name|body|object|true|none|
|» Payload|body|object|true|none|
|» Type|body|object|true|none|
|» ClientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ImportNotebook|

> Example responses

> 200 Response

```json
{
  "NotebookId": {}
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

<h3 id="importnotebook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportNotebookOutput](#schemaimportnotebookoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApplicationDPUSizes

<a id="opIdListApplicationDPUSizes"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListApplicationDPUSizes' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes`

Returns the supported DPU sizes for the supported application runtimes (for example, <code>Athena notebook version 1</code>). 

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listapplicationdpusizes-parameters">Parameters</h3>

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
|body|body|[ListApplicationDPUSizesInput](#schemalistapplicationdpusizesinput)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListApplicationDPUSizes|

> Example responses

> 200 Response

```json
{
  "ApplicationDPUSizes": {},
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

<h3 id="listapplicationdpusizes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationDPUSizesOutput](#schemalistapplicationdpusizesoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCalculationExecutions

<a id="opIdListCalculationExecutions"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListCalculationExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListCalculationExecutions' \
  -d '{
    "SessionId": {},
    "StateFilter": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListCalculationExecutions`

Lists the calculations that have been submitted to a session in descending order. Newer calculations are listed first; older calculations are listed later.

> Body parameter

```json
{
  "SessionId": {},
  "StateFilter": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listcalculationexecutions-parameters">Parameters</h3>

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
|body|body|[ListCalculationExecutionsRequest](#schemalistcalculationexecutionsrequest)|true|none|
|» SessionId|body|object|true|none|
|» StateFilter|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListCalculationExecutions|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Calculations": {}
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

<h3 id="listcalculationexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCalculationExecutionsResponse](#schemalistcalculationexecutionsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCapacityReservations

<a id="opIdListCapacityReservations"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListCapacityReservations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListCapacityReservations' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListCapacityReservations`

Lists the capacity reservations for the current account.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listcapacityreservations-parameters">Parameters</h3>

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
|body|body|[ListCapacityReservationsInput](#schemalistcapacityreservationsinput)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListCapacityReservations|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "CapacityReservations": {}
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

<h3 id="listcapacityreservations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCapacityReservationsOutput](#schemalistcapacityreservationsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDataCatalogs

<a id="opIdListDataCatalogs"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListDataCatalogs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListDataCatalogs' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListDataCatalogs`

<p>Lists the data catalogs in the current Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdatacatalogs-parameters">Parameters</h3>

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
|body|body|[ListDataCatalogsInput](#schemalistdatacatalogsinput)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListDataCatalogs|

> Example responses

> 200 Response

```json
{
  "DataCatalogsSummary": {},
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

<h3 id="listdatacatalogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDataCatalogsOutput](#schemalistdatacatalogsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatabases

<a id="opIdListDatabases"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListDatabases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListDatabases' \
  -d '{
    "CatalogName": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListDatabases`

Lists the databases in the specified data catalog.

> Body parameter

```json
{
  "CatalogName": {},
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
|body|body|[ListDatabasesInput](#schemalistdatabasesinput)|true|none|
|» CatalogName|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListDatabases|

> Example responses

> 200 Response

```json
{
  "DatabaseList": {},
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
|200|OK|Success|[ListDatabasesOutput](#schemalistdatabasesoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|MetadataException|[MetadataException](#schemametadataexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEngineVersions

<a id="opIdListEngineVersions"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListEngineVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListEngineVersions' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListEngineVersions`

Returns a list of engine versions that are available to choose from, including the Auto option.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listengineversions-parameters">Parameters</h3>

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
|body|body|[ListEngineVersionsInput](#schemalistengineversionsinput)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListEngineVersions|

> Example responses

> 200 Response

```json
{
  "EngineVersions": {},
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

<h3 id="listengineversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEngineVersionsOutput](#schemalistengineversionsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListExecutors

<a id="opIdListExecutors"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListExecutors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListExecutors' \
  -d '{
    "SessionId": {},
    "ExecutorStateFilter": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListExecutors`

Lists, in descending order, the executors that joined a session. Newer executors are listed first; older executors are listed later. The result can be optionally filtered by state.

> Body parameter

```json
{
  "SessionId": {},
  "ExecutorStateFilter": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listexecutors-parameters">Parameters</h3>

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
|body|body|[ListExecutorsRequest](#schemalistexecutorsrequest)|true|none|
|» SessionId|body|object|true|none|
|» ExecutorStateFilter|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListExecutors|

> Example responses

> 200 Response

```json
{
  "SessionId": {},
  "NextToken": {},
  "ExecutorsSummary": {}
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

<h3 id="listexecutors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExecutorsResponse](#schemalistexecutorsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNamedQueries

<a id="opIdListNamedQueries"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListNamedQueries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListNamedQueries' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "WorkGroup": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListNamedQueries`

<p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "WorkGroup": {}
}
```

<h3 id="listnamedqueries-parameters">Parameters</h3>

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
|body|body|[ListNamedQueriesInput](#schemalistnamedqueriesinput)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» WorkGroup|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListNamedQueries|

> Example responses

> 200 Response

```json
{
  "NamedQueryIds": {},
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

<h3 id="listnamedqueries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNamedQueriesOutput](#schemalistnamedqueriesoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNotebookMetadata

<a id="opIdListNotebookMetadata"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListNotebookMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListNotebookMetadata' \
  -d '{
    "Filters": {
      "Name": {}
    },
    "NextToken": {},
    "MaxResults": {},
    "WorkGroup": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListNotebookMetadata`

Displays the notebook files for the specified workgroup in paginated format.

> Body parameter

```json
{
  "Filters": {
    "Name": {}
  },
  "NextToken": {},
  "MaxResults": {},
  "WorkGroup": {}
}
```

<h3 id="listnotebookmetadata-parameters">Parameters</h3>

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
|body|body|[ListNotebookMetadataInput](#schemalistnotebookmetadatainput)|true|none|
|» Filters|body|object|false|none|
|» » Name|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» WorkGroup|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListNotebookMetadata|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "NotebookMetadataList": {}
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

<h3 id="listnotebookmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNotebookMetadataOutput](#schemalistnotebookmetadataoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNotebookSessions

<a id="opIdListNotebookSessions"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListNotebookSessions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListNotebookSessions' \
  -d '{
    "NotebookId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListNotebookSessions`

Lists, in descending order, the sessions that have been created in a notebook that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code> or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.

> Body parameter

```json
{
  "NotebookId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listnotebooksessions-parameters">Parameters</h3>

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
|body|body|[ListNotebookSessionsRequest](#schemalistnotebooksessionsrequest)|true|none|
|» NotebookId|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListNotebookSessions|

> Example responses

> 200 Response

```json
{
  "NotebookSessionsList": {},
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

<h3 id="listnotebooksessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNotebookSessionsResponse](#schemalistnotebooksessionsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPreparedStatements

<a id="opIdListPreparedStatements"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListPreparedStatements' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListPreparedStatements' \
  -d '{
    "WorkGroup": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListPreparedStatements`

Lists the prepared statements in the specified workgroup.

> Body parameter

```json
{
  "WorkGroup": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listpreparedstatements-parameters">Parameters</h3>

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
|body|body|[ListPreparedStatementsInput](#schemalistpreparedstatementsinput)|true|none|
|» WorkGroup|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListPreparedStatements|

> Example responses

> 200 Response

```json
{
  "PreparedStatements": {},
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

<h3 id="listpreparedstatements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPreparedStatementsOutput](#schemalistpreparedstatementsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListQueryExecutions

<a id="opIdListQueryExecutions"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListQueryExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListQueryExecutions' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "WorkGroup": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListQueryExecutions`

<p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "WorkGroup": {}
}
```

<h3 id="listqueryexecutions-parameters">Parameters</h3>

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
|body|body|[ListQueryExecutionsInput](#schemalistqueryexecutionsinput)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» WorkGroup|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListQueryExecutions|

> Example responses

> 200 Response

```json
{
  "QueryExecutionIds": {},
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

<h3 id="listqueryexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQueryExecutionsOutput](#schemalistqueryexecutionsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSessions

<a id="opIdListSessions"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListSessions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListSessions' \
  -d '{
    "WorkGroup": {},
    "StateFilter": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListSessions`

Lists the sessions in a workgroup that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>, or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.

> Body parameter

```json
{
  "WorkGroup": {},
  "StateFilter": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listsessions-parameters">Parameters</h3>

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
|body|body|[ListSessionsRequest](#schemalistsessionsrequest)|true|none|
|» WorkGroup|body|object|true|none|
|» StateFilter|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListSessions|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Sessions": {}
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

<h3 id="listsessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSessionsResponse](#schemalistsessionsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTableMetadata

<a id="opIdListTableMetadata"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListTableMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListTableMetadata' \
  -d '{
    "CatalogName": {},
    "DatabaseName": {},
    "Expression": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListTableMetadata`

Lists the metadata for the tables in the specified data catalog database.

> Body parameter

```json
{
  "CatalogName": {},
  "DatabaseName": {},
  "Expression": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listtablemetadata-parameters">Parameters</h3>

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
|body|body|[ListTableMetadataInput](#schemalisttablemetadatainput)|true|none|
|» CatalogName|body|object|true|none|
|» DatabaseName|body|object|true|none|
|» Expression|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListTableMetadata|

> Example responses

> 200 Response

```json
{
  "TableMetadataList": {},
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

<h3 id="listtablemetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTableMetadataOutput](#schemalisttablemetadataoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|MetadataException|[MetadataException](#schemametadataexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListTagsForResource' \
  -d '{
    "ResourceARN": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListTagsForResource`

Lists the tags associated with an Athena resource.

> Body parameter

```json
{
  "ResourceARN": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceInput](#schemalisttagsforresourceinput)|true|none|
|» ResourceARN|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": {},
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorkGroups

<a id="opIdListWorkGroups"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.ListWorkGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.ListWorkGroups' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.ListWorkGroups`

Lists available workgroups for the account.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listworkgroups-parameters">Parameters</h3>

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
|body|body|[ListWorkGroupsInput](#schemalistworkgroupsinput)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.ListWorkGroups|

> Example responses

> 200 Response

```json
{
  "WorkGroups": {},
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

<h3 id="listworkgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorkGroupsOutput](#schemalistworkgroupsoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutCapacityAssignmentConfiguration

<a id="opIdPutCapacityAssignmentConfiguration"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.PutCapacityAssignmentConfiguration' \
  -d '{
    "CapacityReservationName": {},
    "CapacityAssignments": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration`

Puts a new capacity assignment configuration for a specified capacity reservation. If a capacity assignment configuration already exists for the capacity reservation, replaces the existing capacity assignment configuration.

> Body parameter

```json
{
  "CapacityReservationName": {},
  "CapacityAssignments": {}
}
```

<h3 id="putcapacityassignmentconfiguration-parameters">Parameters</h3>

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
|body|body|[PutCapacityAssignmentConfigurationInput](#schemaputcapacityassignmentconfigurationinput)|true|none|
|» CapacityReservationName|body|object|true|none|
|» CapacityAssignments|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.PutCapacityAssignmentConfiguration|

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

<h3 id="putcapacityassignmentconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutCapacityAssignmentConfigurationOutput](#schemaputcapacityassignmentconfigurationoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartCalculationExecution

<a id="opIdStartCalculationExecution"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.StartCalculationExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.StartCalculationExecution' \
  -d '{
    "SessionId": {},
    "Description": {},
    "CalculationConfiguration": {
      "CodeBlock": {}
    },
    "CodeBlock": {},
    "ClientRequestToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.StartCalculationExecution`

Submits calculations for execution within a session. You can supply the code to run as an inline code block within the request.

> Body parameter

```json
{
  "SessionId": {},
  "Description": {},
  "CalculationConfiguration": {
    "CodeBlock": {}
  },
  "CodeBlock": {},
  "ClientRequestToken": {}
}
```

<h3 id="startcalculationexecution-parameters">Parameters</h3>

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
|body|body|[StartCalculationExecutionRequest](#schemastartcalculationexecutionrequest)|true|none|
|» SessionId|body|object|true|none|
|» Description|body|object|false|none|
|» CalculationConfiguration|body|object|false|none|
|» » CodeBlock|body|object|false|none|
|» CodeBlock|body|object|false|none|
|» ClientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.StartCalculationExecution|

> Example responses

> 200 Response

```json
{
  "CalculationExecutionId": {},
  "State": {}
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

<h3 id="startcalculationexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartCalculationExecutionResponse](#schemastartcalculationexecutionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartQueryExecution

<a id="opIdStartQueryExecution"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.StartQueryExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.StartQueryExecution' \
  -d '{
    "QueryString": {},
    "ClientRequestToken": {},
    "QueryExecutionContext": {
      "Database": {},
      "Catalog": {}
    },
    "ResultConfiguration": {
      "OutputLocation": {},
      "EncryptionConfiguration": {
        "EncryptionOption": {},
        "KmsKey": {}
      },
      "ExpectedBucketOwner": {},
      "AclConfiguration": {
        "S3AclOption": {}
      }
    },
    "WorkGroup": {},
    "ExecutionParameters": {},
    "ResultReuseConfiguration": {
      "ResultReuseByAgeConfiguration": {
        "Enabled": {},
        "MaxAgeInMinutes": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AmazonAthena.StartQueryExecution`

Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.

> Body parameter

```json
{
  "QueryString": {},
  "ClientRequestToken": {},
  "QueryExecutionContext": {
    "Database": {},
    "Catalog": {}
  },
  "ResultConfiguration": {
    "OutputLocation": {},
    "EncryptionConfiguration": {
      "EncryptionOption": {},
      "KmsKey": {}
    },
    "ExpectedBucketOwner": {},
    "AclConfiguration": {
      "S3AclOption": {}
    }
  },
  "WorkGroup": {},
  "ExecutionParameters": {},
  "ResultReuseConfiguration": {
    "ResultReuseByAgeConfiguration": {
      "Enabled": {},
      "MaxAgeInMinutes": {}
    }
  }
}
```

<h3 id="startqueryexecution-parameters">Parameters</h3>

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
|body|body|[StartQueryExecutionInput](#schemastartqueryexecutioninput)|true|none|
|» QueryString|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» QueryExecutionContext|body|object|false|none|
|» » Database|body|object|false|none|
|» » Catalog|body|object|false|none|
|» ResultConfiguration|body|object|false|none|
|» » OutputLocation|body|object|false|none|
|» » EncryptionConfiguration|body|object|false|none|
|» » » EncryptionOption|body|object|true|none|
|» » » KmsKey|body|object|false|none|
|» » ExpectedBucketOwner|body|object|false|none|
|» » AclConfiguration|body|object|false|none|
|» » » S3AclOption|body|object|true|none|
|» WorkGroup|body|object|false|none|
|» ExecutionParameters|body|object|false|none|
|» ResultReuseConfiguration|body|object|false|none|
|» » ResultReuseByAgeConfiguration|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » MaxAgeInMinutes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.StartQueryExecution|

> Example responses

> 200 Response

```json
{
  "QueryExecutionId": {}
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

<h3 id="startqueryexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartQueryExecutionOutput](#schemastartqueryexecutionoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSession

<a id="opIdStartSession"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.StartSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.StartSession' \
  -d '{
    "Description": {},
    "WorkGroup": {},
    "EngineConfiguration": {
      "CoordinatorDpuSize": {},
      "MaxConcurrentDpus": {},
      "DefaultExecutorDpuSize": {},
      "AdditionalConfigs": {
        "property1": "string",
        "property2": "string"
      },
      "SparkProperties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "NotebookVersion": {},
    "SessionIdleTimeoutInMinutes": {},
    "ClientRequestToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.StartSession`

Creates a session for running calculations within a workgroup. The session is ready when it reaches an <code>IDLE</code> state.

> Body parameter

```json
{
  "Description": {},
  "WorkGroup": {},
  "EngineConfiguration": {
    "CoordinatorDpuSize": {},
    "MaxConcurrentDpus": {},
    "DefaultExecutorDpuSize": {},
    "AdditionalConfigs": {
      "property1": "string",
      "property2": "string"
    },
    "SparkProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "NotebookVersion": {},
  "SessionIdleTimeoutInMinutes": {},
  "ClientRequestToken": {}
}
```

<h3 id="startsession-parameters">Parameters</h3>

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
|body|body|[StartSessionRequest](#schemastartsessionrequest)|true|none|
|» Description|body|object|false|none|
|» WorkGroup|body|object|true|none|
|» EngineConfiguration|body|object|true|none|
|» » CoordinatorDpuSize|body|object|false|none|
|» » MaxConcurrentDpus|body|object|true|none|
|» » DefaultExecutorDpuSize|body|object|false|none|
|» » AdditionalConfigs|body|object|false|none|
|» » » **additionalProperties**|body|[ParametersMapValue](#schemaparametersmapvalue)|false|none|
|» » SparkProperties|body|object|false|none|
|» » » **additionalProperties**|body|[ParametersMapValue](#schemaparametersmapvalue)|false|none|
|» NotebookVersion|body|object|false|none|
|» SessionIdleTimeoutInMinutes|body|object|false|none|
|» ClientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.StartSession|

> Example responses

> 200 Response

```json
{
  "SessionId": {},
  "State": {}
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

<h3 id="startsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSessionResponse](#schemastartsessionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|SessionAlreadyExistsException|[SessionAlreadyExistsException](#schemasessionalreadyexistsexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopCalculationExecution

<a id="opIdStopCalculationExecution"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.StopCalculationExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.StopCalculationExecution' \
  -d '{
    "CalculationExecutionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.StopCalculationExecution`

<p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code> call on a calculation that is already in a terminal state (for example, <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but has no effect.</p> <note> <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot be cancelled, you can be charged for its completion. If you are concerned about being charged for a calculation that cannot be cancelled, consider terminating the session in which the calculation is running.</p> </note>

> Body parameter

```json
{
  "CalculationExecutionId": {}
}
```

<h3 id="stopcalculationexecution-parameters">Parameters</h3>

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
|body|body|[StopCalculationExecutionRequest](#schemastopcalculationexecutionrequest)|true|none|
|» CalculationExecutionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.StopCalculationExecution|

> Example responses

> 200 Response

```json
{
  "State": {}
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

<h3 id="stopcalculationexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopCalculationExecutionResponse](#schemastopcalculationexecutionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopQueryExecution

<a id="opIdStopQueryExecution"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.StopQueryExecution' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.StopQueryExecution' \
  -d '{
    "QueryExecutionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.StopQueryExecution`

<p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

> Body parameter

```json
{
  "QueryExecutionId": {}
}
```

<h3 id="stopqueryexecution-parameters">Parameters</h3>

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
|body|body|[StopQueryExecutionInput](#schemastopqueryexecutioninput)|true|none|
|» QueryExecutionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.StopQueryExecution|

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

<h3 id="stopqueryexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopQueryExecutionOutput](#schemastopqueryexecutionoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.TagResource`

Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups, data catalogs, or capacity reservations by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter the resources in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.

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
|body|body|[TagResourceInput](#schematagresourceinput)|true|none|
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceOutput](#schematagresourceoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TerminateSession

<a id="opIdTerminateSession"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.TerminateSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.TerminateSession' \
  -d '{
    "SessionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.TerminateSession`

Terminates an active session. A <code>TerminateSession</code> call on a session that is already inactive (for example, in a <code>FAILED</code>, <code>TERMINATED</code> or <code>TERMINATING</code> state) succeeds but has no effect. Calculations running in the session when <code>TerminateSession</code> is called are forcefully stopped, but may display as <code>FAILED</code> instead of <code>STOPPED</code>.

> Body parameter

```json
{
  "SessionId": {}
}
```

<h3 id="terminatesession-parameters">Parameters</h3>

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
|body|body|[TerminateSessionRequest](#schematerminatesessionrequest)|true|none|
|» SessionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.TerminateSession|

> Example responses

> 200 Response

```json
{
  "State": {}
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

<h3 id="terminatesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TerminateSessionResponse](#schematerminatesessionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.UntagResource`

Removes one or more tags from an Athena resource.

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
|body|body|[UntagResourceInput](#schemauntagresourceinput)|true|none|
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceOutput](#schemauntagresourceoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCapacityReservation

<a id="opIdUpdateCapacityReservation"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.UpdateCapacityReservation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.UpdateCapacityReservation' \
  -d '{
    "TargetDpus": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.UpdateCapacityReservation`

Updates the number of requested data processing units for the capacity reservation with the specified name.

> Body parameter

```json
{
  "TargetDpus": {},
  "Name": {}
}
```

<h3 id="updatecapacityreservation-parameters">Parameters</h3>

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
|body|body|[UpdateCapacityReservationInput](#schemaupdatecapacityreservationinput)|true|none|
|» TargetDpus|body|object|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.UpdateCapacityReservation|

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

<h3 id="updatecapacityreservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCapacityReservationOutput](#schemaupdatecapacityreservationoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDataCatalog

<a id="opIdUpdateDataCatalog"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.UpdateDataCatalog' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.UpdateDataCatalog' \
  -d '{
    "Name": {},
    "Type": {},
    "Description": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=AmazonAthena.UpdateDataCatalog`

Updates the data catalog that has the specified name.

> Body parameter

```json
{
  "Name": {},
  "Type": {},
  "Description": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updatedatacatalog-parameters">Parameters</h3>

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
|body|body|[UpdateDataCatalogInput](#schemaupdatedatacataloginput)|true|none|
|» Name|body|object|true|none|
|» Type|body|object|true|none|
|» Description|body|object|false|none|
|» Parameters|body|object|false|none|
|» » **additionalProperties**|body|[ParametersMapValue](#schemaparametersmapvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.UpdateDataCatalog|

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

<h3 id="updatedatacatalog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDataCatalogOutput](#schemaupdatedatacatalogoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNamedQuery

<a id="opIdUpdateNamedQuery"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.UpdateNamedQuery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.UpdateNamedQuery' \
  -d '{
    "NamedQueryId": {},
    "Name": {},
    "Description": {},
    "QueryString": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.UpdateNamedQuery`

Updates a <a>NamedQuery</a> object. The database or workgroup cannot be updated.

> Body parameter

```json
{
  "NamedQueryId": {},
  "Name": {},
  "Description": {},
  "QueryString": {}
}
```

<h3 id="updatenamedquery-parameters">Parameters</h3>

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
|body|body|[UpdateNamedQueryInput](#schemaupdatenamedqueryinput)|true|none|
|» NamedQueryId|body|object|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» QueryString|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.UpdateNamedQuery|

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

<h3 id="updatenamedquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNamedQueryOutput](#schemaupdatenamedqueryoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNotebook

<a id="opIdUpdateNotebook"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.UpdateNotebook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.UpdateNotebook' \
  -d '{
    "NotebookId": {},
    "Payload": {},
    "Type": {},
    "SessionId": {},
    "ClientRequestToken": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.UpdateNotebook`

Updates the contents of a Spark notebook.

> Body parameter

```json
{
  "NotebookId": {},
  "Payload": {},
  "Type": {},
  "SessionId": {},
  "ClientRequestToken": {}
}
```

<h3 id="updatenotebook-parameters">Parameters</h3>

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
|body|body|[UpdateNotebookInput](#schemaupdatenotebookinput)|true|none|
|» NotebookId|body|object|true|none|
|» Payload|body|object|true|none|
|» Type|body|object|true|none|
|» SessionId|body|object|false|none|
|» ClientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.UpdateNotebook|

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

<h3 id="updatenotebook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNotebookOutput](#schemaupdatenotebookoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNotebookMetadata

<a id="opIdUpdateNotebookMetadata"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.UpdateNotebookMetadata' \
  -d '{
    "NotebookId": {},
    "ClientRequestToken": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata`

Updates the metadata for a notebook.

> Body parameter

```json
{
  "NotebookId": {},
  "ClientRequestToken": {},
  "Name": {}
}
```

<h3 id="updatenotebookmetadata-parameters">Parameters</h3>

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
|body|body|[UpdateNotebookMetadataInput](#schemaupdatenotebookmetadatainput)|true|none|
|» NotebookId|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.UpdateNotebookMetadata|

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

<h3 id="updatenotebookmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNotebookMetadataOutput](#schemaupdatenotebookmetadataoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePreparedStatement

<a id="opIdUpdatePreparedStatement"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.UpdatePreparedStatement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.UpdatePreparedStatement' \
  -d '{
    "StatementName": {},
    "WorkGroup": {},
    "QueryStatement": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.UpdatePreparedStatement`

Updates a prepared statement.

> Body parameter

```json
{
  "StatementName": {},
  "WorkGroup": {},
  "QueryStatement": {},
  "Description": {}
}
```

<h3 id="updatepreparedstatement-parameters">Parameters</h3>

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
|body|body|[UpdatePreparedStatementInput](#schemaupdatepreparedstatementinput)|true|none|
|» StatementName|body|object|true|none|
|» WorkGroup|body|object|true|none|
|» QueryStatement|body|object|true|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.UpdatePreparedStatement|

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

<h3 id="updatepreparedstatement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePreparedStatementOutput](#schemaupdatepreparedstatementoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWorkGroup

<a id="opIdUpdateWorkGroup"></a>

> Code samples

```bash
curl 'https://athena.us-east-1.amazonaws.com/#X-Amz-Target=AmazonAthena.UpdateWorkGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonAthena.UpdateWorkGroup' \
  -d '{
    "WorkGroup": {},
    "Description": {},
    "ConfigurationUpdates": {
      "EnforceWorkGroupConfiguration": {},
      "ResultConfigurationUpdates": {
        "OutputLocation": {},
        "RemoveOutputLocation": {},
        "EncryptionConfiguration": {
          "EncryptionOption": {},
          "KmsKey": {}
        },
        "RemoveEncryptionConfiguration": {},
        "ExpectedBucketOwner": {},
        "RemoveExpectedBucketOwner": {},
        "AclConfiguration": {
          "S3AclOption": {}
        },
        "RemoveAclConfiguration": {}
      },
      "PublishCloudWatchMetricsEnabled": {},
      "BytesScannedCutoffPerQuery": {},
      "RemoveBytesScannedCutoffPerQuery": {},
      "RequesterPaysEnabled": {},
      "EngineVersion": {
        "SelectedEngineVersion": {},
        "EffectiveEngineVersion": {}
      },
      "RemoveCustomerContentEncryptionConfiguration": {},
      "AdditionalConfiguration": {},
      "ExecutionRole": {},
      "CustomerContentEncryptionConfiguration": {
        "KmsKey": {}
      },
      "EnableMinimumEncryptionConfiguration": {}
    },
    "State": {}
  }'
```

`POST /#X-Amz-Target=AmazonAthena.UpdateWorkGroup`

Updates the workgroup with the specified name. The workgroup's name cannot be changed. Only <code>ConfigurationUpdates</code> can be specified.

> Body parameter

```json
{
  "WorkGroup": {},
  "Description": {},
  "ConfigurationUpdates": {
    "EnforceWorkGroupConfiguration": {},
    "ResultConfigurationUpdates": {
      "OutputLocation": {},
      "RemoveOutputLocation": {},
      "EncryptionConfiguration": {
        "EncryptionOption": {},
        "KmsKey": {}
      },
      "RemoveEncryptionConfiguration": {},
      "ExpectedBucketOwner": {},
      "RemoveExpectedBucketOwner": {},
      "AclConfiguration": {
        "S3AclOption": {}
      },
      "RemoveAclConfiguration": {}
    },
    "PublishCloudWatchMetricsEnabled": {},
    "BytesScannedCutoffPerQuery": {},
    "RemoveBytesScannedCutoffPerQuery": {},
    "RequesterPaysEnabled": {},
    "EngineVersion": {
      "SelectedEngineVersion": {},
      "EffectiveEngineVersion": {}
    },
    "RemoveCustomerContentEncryptionConfiguration": {},
    "AdditionalConfiguration": {},
    "ExecutionRole": {},
    "CustomerContentEncryptionConfiguration": {
      "KmsKey": {}
    },
    "EnableMinimumEncryptionConfiguration": {}
  },
  "State": {}
}
```

<h3 id="updateworkgroup-parameters">Parameters</h3>

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
|body|body|[UpdateWorkGroupInput](#schemaupdateworkgroupinput)|true|none|
|» WorkGroup|body|object|true|none|
|» Description|body|object|false|none|
|» ConfigurationUpdates|body|object|false|none|
|» » EnforceWorkGroupConfiguration|body|object|false|none|
|» » ResultConfigurationUpdates|body|object|false|none|
|» » » OutputLocation|body|object|false|none|
|» » » RemoveOutputLocation|body|object|false|none|
|» » » EncryptionConfiguration|body|object|false|none|
|» » » » EncryptionOption|body|object|true|none|
|» » » » KmsKey|body|object|false|none|
|» » » RemoveEncryptionConfiguration|body|object|false|none|
|» » » ExpectedBucketOwner|body|object|false|none|
|» » » RemoveExpectedBucketOwner|body|object|false|none|
|» » » AclConfiguration|body|object|false|none|
|» » » » S3AclOption|body|object|true|none|
|» » » RemoveAclConfiguration|body|object|false|none|
|» » PublishCloudWatchMetricsEnabled|body|object|false|none|
|» » BytesScannedCutoffPerQuery|body|object|false|none|
|» » RemoveBytesScannedCutoffPerQuery|body|object|false|none|
|» » RequesterPaysEnabled|body|object|false|none|
|» » EngineVersion|body|object|false|none|
|» » » SelectedEngineVersion|body|object|false|none|
|» » » EffectiveEngineVersion|body|object|false|none|
|» » RemoveCustomerContentEncryptionConfiguration|body|object|false|none|
|» » AdditionalConfiguration|body|object|false|none|
|» » ExecutionRole|body|object|false|none|
|» » CustomerContentEncryptionConfiguration|body|[CustomerContentEncryptionConfiguration](#schemacustomercontentencryptionconfiguration)|false|Specifies the KMS key that is used to encrypt the user's data stores in Athena. This setting does not apply to Athena SQL workgroups.|
|» » EnableMinimumEncryptionConfiguration|body|object|false|none|
|» State|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonAthena.UpdateWorkGroup|

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

<h3 id="updateworkgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateWorkGroupOutput](#schemaupdateworkgroupoutput)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchGetNamedQueryOutput">BatchGetNamedQueryOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetnamedqueryoutput"></a>
<a id="schema_BatchGetNamedQueryOutput"></a>
<a id="tocSbatchgetnamedqueryoutput"></a>
<a id="tocsbatchgetnamedqueryoutput"></a>

```json
{
  "NamedQueries": {},
  "UnprocessedNamedQueryIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamedQueries|object|false|none|none|
|UnprocessedNamedQueryIds|object|false|none|none|

<h2 id="tocS_BatchGetNamedQueryInput">BatchGetNamedQueryInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetnamedqueryinput"></a>
<a id="schema_BatchGetNamedQueryInput"></a>
<a id="tocSbatchgetnamedqueryinput"></a>
<a id="tocsbatchgetnamedqueryinput"></a>

```json
{
  "NamedQueryIds": {}
}
```

Contains an array of named query IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamedQueryIds|object|true|none|none|

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_BatchGetPreparedStatementOutput">BatchGetPreparedStatementOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetpreparedstatementoutput"></a>
<a id="schema_BatchGetPreparedStatementOutput"></a>
<a id="tocSbatchgetpreparedstatementoutput"></a>
<a id="tocsbatchgetpreparedstatementoutput"></a>

```json
{
  "PreparedStatements": {},
  "UnprocessedPreparedStatementNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PreparedStatements|object|false|none|none|
|UnprocessedPreparedStatementNames|object|false|none|none|

<h2 id="tocS_BatchGetPreparedStatementInput">BatchGetPreparedStatementInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetpreparedstatementinput"></a>
<a id="schema_BatchGetPreparedStatementInput"></a>
<a id="tocSbatchgetpreparedstatementinput"></a>
<a id="tocsbatchgetpreparedstatementinput"></a>

```json
{
  "PreparedStatementNames": {},
  "WorkGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PreparedStatementNames|object|true|none|none|
|WorkGroup|object|true|none|none|

<h2 id="tocS_BatchGetQueryExecutionOutput">BatchGetQueryExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetqueryexecutionoutput"></a>
<a id="schema_BatchGetQueryExecutionOutput"></a>
<a id="tocSbatchgetqueryexecutionoutput"></a>
<a id="tocsbatchgetqueryexecutionoutput"></a>

```json
{
  "QueryExecutions": {},
  "UnprocessedQueryExecutionIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryExecutions|object|false|none|none|
|UnprocessedQueryExecutionIds|object|false|none|none|

<h2 id="tocS_BatchGetQueryExecutionInput">BatchGetQueryExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetqueryexecutioninput"></a>
<a id="schema_BatchGetQueryExecutionInput"></a>
<a id="tocSbatchgetqueryexecutioninput"></a>
<a id="tocsbatchgetqueryexecutioninput"></a>

```json
{
  "QueryExecutionIds": {}
}
```

Contains an array of query execution IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryExecutionIds|object|true|none|none|

<h2 id="tocS_CancelCapacityReservationOutput">CancelCapacityReservationOutput</h2>
<!-- backwards compatibility -->
<a id="schemacancelcapacityreservationoutput"></a>
<a id="schema_CancelCapacityReservationOutput"></a>
<a id="tocScancelcapacityreservationoutput"></a>
<a id="tocscancelcapacityreservationoutput"></a>

```json
{}
```

<h2 id="tocS_CancelCapacityReservationInput">CancelCapacityReservationInput</h2>
<!-- backwards compatibility -->
<a id="schemacancelcapacityreservationinput"></a>
<a id="schema_CancelCapacityReservationInput"></a>
<a id="tocScancelcapacityreservationinput"></a>
<a id="tocscancelcapacityreservationinput"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_CreateCapacityReservationOutput">CreateCapacityReservationOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecapacityreservationoutput"></a>
<a id="schema_CreateCapacityReservationOutput"></a>
<a id="tocScreatecapacityreservationoutput"></a>
<a id="tocscreatecapacityreservationoutput"></a>

```json
{}
```

<h2 id="tocS_CreateCapacityReservationInput">CreateCapacityReservationInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecapacityreservationinput"></a>
<a id="schema_CreateCapacityReservationInput"></a>
<a id="tocScreatecapacityreservationinput"></a>
<a id="tocscreatecapacityreservationinput"></a>

```json
{
  "TargetDpus": {},
  "Name": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetDpus|object|true|none|none|
|Name|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateDataCatalogOutput">CreateDataCatalogOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatacatalogoutput"></a>
<a id="schema_CreateDataCatalogOutput"></a>
<a id="tocScreatedatacatalogoutput"></a>
<a id="tocscreatedatacatalogoutput"></a>

```json
{}
```

<h2 id="tocS_CreateDataCatalogInput">CreateDataCatalogInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatacataloginput"></a>
<a id="schema_CreateDataCatalogInput"></a>
<a id="tocScreatedatacataloginput"></a>
<a id="tocscreatedatacataloginput"></a>

```json
{
  "Name": {},
  "Type": {},
  "Description": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Type|object|true|none|none|
|Description|object|false|none|none|
|Parameters|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateNamedQueryOutput">CreateNamedQueryOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatenamedqueryoutput"></a>
<a id="schema_CreateNamedQueryOutput"></a>
<a id="tocScreatenamedqueryoutput"></a>
<a id="tocscreatenamedqueryoutput"></a>

```json
{
  "NamedQueryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamedQueryId|object|false|none|none|

<h2 id="tocS_CreateNamedQueryInput">CreateNamedQueryInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatenamedqueryinput"></a>
<a id="schema_CreateNamedQueryInput"></a>
<a id="tocScreatenamedqueryinput"></a>
<a id="tocscreatenamedqueryinput"></a>

```json
{
  "Name": {},
  "Description": {},
  "Database": {},
  "QueryString": {},
  "ClientRequestToken": {},
  "WorkGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|Database|object|true|none|none|
|QueryString|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|WorkGroup|object|false|none|none|

<h2 id="tocS_CreateNotebookOutput">CreateNotebookOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatenotebookoutput"></a>
<a id="schema_CreateNotebookOutput"></a>
<a id="tocScreatenotebookoutput"></a>
<a id="tocscreatenotebookoutput"></a>

```json
{
  "NotebookId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookId|object|false|none|none|

<h2 id="tocS_CreateNotebookInput">CreateNotebookInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatenotebookinput"></a>
<a id="schema_CreateNotebookInput"></a>
<a id="tocScreatenotebookinput"></a>
<a id="tocscreatenotebookinput"></a>

```json
{
  "WorkGroup": {},
  "Name": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkGroup|object|true|none|none|
|Name|object|true|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_CreatePreparedStatementOutput">CreatePreparedStatementOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatepreparedstatementoutput"></a>
<a id="schema_CreatePreparedStatementOutput"></a>
<a id="tocScreatepreparedstatementoutput"></a>
<a id="tocscreatepreparedstatementoutput"></a>

```json
{}
```

<h2 id="tocS_CreatePreparedStatementInput">CreatePreparedStatementInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatepreparedstatementinput"></a>
<a id="schema_CreatePreparedStatementInput"></a>
<a id="tocScreatepreparedstatementinput"></a>
<a id="tocscreatepreparedstatementinput"></a>

```json
{
  "StatementName": {},
  "WorkGroup": {},
  "QueryStatement": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatementName|object|true|none|none|
|WorkGroup|object|true|none|none|
|QueryStatement|object|true|none|none|
|Description|object|false|none|none|

<h2 id="tocS_CreatePresignedNotebookUrlResponse">CreatePresignedNotebookUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepresignednotebookurlresponse"></a>
<a id="schema_CreatePresignedNotebookUrlResponse"></a>
<a id="tocScreatepresignednotebookurlresponse"></a>
<a id="tocscreatepresignednotebookurlresponse"></a>

```json
{
  "NotebookUrl": {},
  "AuthToken": {},
  "AuthTokenExpirationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookUrl|object|true|none|none|
|AuthToken|object|true|none|none|
|AuthTokenExpirationTime|object|true|none|none|

<h2 id="tocS_CreatePresignedNotebookUrlRequest">CreatePresignedNotebookUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepresignednotebookurlrequest"></a>
<a id="schema_CreatePresignedNotebookUrlRequest"></a>
<a id="tocScreatepresignednotebookurlrequest"></a>
<a id="tocscreatepresignednotebookurlrequest"></a>

```json
{
  "SessionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreateWorkGroupOutput">CreateWorkGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkgroupoutput"></a>
<a id="schema_CreateWorkGroupOutput"></a>
<a id="tocScreateworkgroupoutput"></a>
<a id="tocscreateworkgroupoutput"></a>

```json
{}
```

<h2 id="tocS_CreateWorkGroupInput">CreateWorkGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkgroupinput"></a>
<a id="schema_CreateWorkGroupInput"></a>
<a id="tocScreateworkgroupinput"></a>
<a id="tocscreateworkgroupinput"></a>

```json
{
  "Name": {},
  "Configuration": {
    "ResultConfiguration": {
      "OutputLocation": {},
      "EncryptionConfiguration": {
        "EncryptionOption": {},
        "KmsKey": {}
      },
      "ExpectedBucketOwner": {},
      "AclConfiguration": {
        "S3AclOption": {}
      }
    },
    "EnforceWorkGroupConfiguration": {},
    "PublishCloudWatchMetricsEnabled": {},
    "BytesScannedCutoffPerQuery": {},
    "RequesterPaysEnabled": {},
    "EngineVersion": {
      "SelectedEngineVersion": {},
      "EffectiveEngineVersion": {}
    },
    "AdditionalConfiguration": {},
    "ExecutionRole": {},
    "CustomerContentEncryptionConfiguration": {
      "KmsKey": {}
    },
    "EnableMinimumEncryptionConfiguration": {}
  },
  "Description": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Configuration|object|false|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DeleteCapacityReservationOutput">DeleteCapacityReservationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletecapacityreservationoutput"></a>
<a id="schema_DeleteCapacityReservationOutput"></a>
<a id="tocSdeletecapacityreservationoutput"></a>
<a id="tocsdeletecapacityreservationoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteCapacityReservationInput">DeleteCapacityReservationInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletecapacityreservationinput"></a>
<a id="schema_DeleteCapacityReservationInput"></a>
<a id="tocSdeletecapacityreservationinput"></a>
<a id="tocsdeletecapacityreservationinput"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteDataCatalogOutput">DeleteDataCatalogOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatacatalogoutput"></a>
<a id="schema_DeleteDataCatalogOutput"></a>
<a id="tocSdeletedatacatalogoutput"></a>
<a id="tocsdeletedatacatalogoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteDataCatalogInput">DeleteDataCatalogInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatacataloginput"></a>
<a id="schema_DeleteDataCatalogInput"></a>
<a id="tocSdeletedatacataloginput"></a>
<a id="tocsdeletedatacataloginput"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteNamedQueryOutput">DeleteNamedQueryOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletenamedqueryoutput"></a>
<a id="schema_DeleteNamedQueryOutput"></a>
<a id="tocSdeletenamedqueryoutput"></a>
<a id="tocsdeletenamedqueryoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteNamedQueryInput">DeleteNamedQueryInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletenamedqueryinput"></a>
<a id="schema_DeleteNamedQueryInput"></a>
<a id="tocSdeletenamedqueryinput"></a>
<a id="tocsdeletenamedqueryinput"></a>

```json
{
  "NamedQueryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamedQueryId|object|true|none|none|

<h2 id="tocS_DeleteNotebookOutput">DeleteNotebookOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletenotebookoutput"></a>
<a id="schema_DeleteNotebookOutput"></a>
<a id="tocSdeletenotebookoutput"></a>
<a id="tocsdeletenotebookoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteNotebookInput">DeleteNotebookInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletenotebookinput"></a>
<a id="schema_DeleteNotebookInput"></a>
<a id="tocSdeletenotebookinput"></a>
<a id="tocsdeletenotebookinput"></a>

```json
{
  "NotebookId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookId|object|true|none|none|

<h2 id="tocS_DeletePreparedStatementOutput">DeletePreparedStatementOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletepreparedstatementoutput"></a>
<a id="schema_DeletePreparedStatementOutput"></a>
<a id="tocSdeletepreparedstatementoutput"></a>
<a id="tocsdeletepreparedstatementoutput"></a>

```json
{}
```

<h2 id="tocS_DeletePreparedStatementInput">DeletePreparedStatementInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletepreparedstatementinput"></a>
<a id="schema_DeletePreparedStatementInput"></a>
<a id="tocSdeletepreparedstatementinput"></a>
<a id="tocsdeletepreparedstatementinput"></a>

```json
{
  "StatementName": {},
  "WorkGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatementName|object|true|none|none|
|WorkGroup|object|true|none|none|

<h2 id="tocS_DeleteWorkGroupOutput">DeleteWorkGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkgroupoutput"></a>
<a id="schema_DeleteWorkGroupOutput"></a>
<a id="tocSdeleteworkgroupoutput"></a>
<a id="tocsdeleteworkgroupoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteWorkGroupInput">DeleteWorkGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteworkgroupinput"></a>
<a id="schema_DeleteWorkGroupInput"></a>
<a id="tocSdeleteworkgroupinput"></a>
<a id="tocsdeleteworkgroupinput"></a>

```json
{
  "WorkGroup": {},
  "RecursiveDeleteOption": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkGroup|object|true|none|none|
|RecursiveDeleteOption|object|false|none|none|

<h2 id="tocS_ExportNotebookOutput">ExportNotebookOutput</h2>
<!-- backwards compatibility -->
<a id="schemaexportnotebookoutput"></a>
<a id="schema_ExportNotebookOutput"></a>
<a id="tocSexportnotebookoutput"></a>
<a id="tocsexportnotebookoutput"></a>

```json
{
  "NotebookMetadata": {
    "NotebookId": {},
    "Name": {},
    "WorkGroup": {},
    "CreationTime": {},
    "Type": {},
    "LastModifiedTime": {}
  },
  "Payload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookMetadata|object|false|none|none|
|Payload|object|false|none|none|

<h2 id="tocS_ExportNotebookInput">ExportNotebookInput</h2>
<!-- backwards compatibility -->
<a id="schemaexportnotebookinput"></a>
<a id="schema_ExportNotebookInput"></a>
<a id="tocSexportnotebookinput"></a>
<a id="tocsexportnotebookinput"></a>

```json
{
  "NotebookId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookId|object|true|none|none|

<h2 id="tocS_GetCalculationExecutionResponse">GetCalculationExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcalculationexecutionresponse"></a>
<a id="schema_GetCalculationExecutionResponse"></a>
<a id="tocSgetcalculationexecutionresponse"></a>
<a id="tocsgetcalculationexecutionresponse"></a>

```json
{
  "CalculationExecutionId": {},
  "SessionId": {},
  "Description": {},
  "WorkingDirectory": {},
  "Status": {
    "SubmissionDateTime": {},
    "CompletionDateTime": {},
    "State": {},
    "StateChangeReason": {}
  },
  "Statistics": {
    "DpuExecutionInMillis": {},
    "Progress": {}
  },
  "Result": {
    "StdOutS3Uri": {},
    "StdErrorS3Uri": {},
    "ResultS3Uri": {},
    "ResultType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculationExecutionId|object|false|none|none|
|SessionId|object|false|none|none|
|Description|object|false|none|none|
|WorkingDirectory|object|false|none|none|
|Status|object|false|none|none|
|Statistics|object|false|none|none|
|Result|object|false|none|none|

<h2 id="tocS_GetCalculationExecutionRequest">GetCalculationExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcalculationexecutionrequest"></a>
<a id="schema_GetCalculationExecutionRequest"></a>
<a id="tocSgetcalculationexecutionrequest"></a>
<a id="tocsgetcalculationexecutionrequest"></a>

```json
{
  "CalculationExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculationExecutionId|object|true|none|none|

<h2 id="tocS_GetCalculationExecutionCodeResponse">GetCalculationExecutionCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcalculationexecutioncoderesponse"></a>
<a id="schema_GetCalculationExecutionCodeResponse"></a>
<a id="tocSgetcalculationexecutioncoderesponse"></a>
<a id="tocsgetcalculationexecutioncoderesponse"></a>

```json
{
  "CodeBlock": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeBlock|object|false|none|none|

<h2 id="tocS_GetCalculationExecutionCodeRequest">GetCalculationExecutionCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcalculationexecutioncoderequest"></a>
<a id="schema_GetCalculationExecutionCodeRequest"></a>
<a id="tocSgetcalculationexecutioncoderequest"></a>
<a id="tocsgetcalculationexecutioncoderequest"></a>

```json
{
  "CalculationExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculationExecutionId|object|true|none|none|

<h2 id="tocS_GetCalculationExecutionStatusResponse">GetCalculationExecutionStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcalculationexecutionstatusresponse"></a>
<a id="schema_GetCalculationExecutionStatusResponse"></a>
<a id="tocSgetcalculationexecutionstatusresponse"></a>
<a id="tocsgetcalculationexecutionstatusresponse"></a>

```json
{
  "Status": {
    "SubmissionDateTime": {},
    "CompletionDateTime": {},
    "State": {},
    "StateChangeReason": {}
  },
  "Statistics": {
    "DpuExecutionInMillis": {},
    "Progress": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|Statistics|object|false|none|none|

<h2 id="tocS_GetCalculationExecutionStatusRequest">GetCalculationExecutionStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcalculationexecutionstatusrequest"></a>
<a id="schema_GetCalculationExecutionStatusRequest"></a>
<a id="tocSgetcalculationexecutionstatusrequest"></a>
<a id="tocsgetcalculationexecutionstatusrequest"></a>

```json
{
  "CalculationExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculationExecutionId|object|true|none|none|

<h2 id="tocS_GetCapacityAssignmentConfigurationOutput">GetCapacityAssignmentConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcapacityassignmentconfigurationoutput"></a>
<a id="schema_GetCapacityAssignmentConfigurationOutput"></a>
<a id="tocSgetcapacityassignmentconfigurationoutput"></a>
<a id="tocsgetcapacityassignmentconfigurationoutput"></a>

```json
{
  "CapacityAssignmentConfiguration": {
    "CapacityReservationName": {},
    "CapacityAssignments": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CapacityAssignmentConfiguration|object|true|none|none|

<h2 id="tocS_GetCapacityAssignmentConfigurationInput">GetCapacityAssignmentConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcapacityassignmentconfigurationinput"></a>
<a id="schema_GetCapacityAssignmentConfigurationInput"></a>
<a id="tocSgetcapacityassignmentconfigurationinput"></a>
<a id="tocsgetcapacityassignmentconfigurationinput"></a>

```json
{
  "CapacityReservationName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CapacityReservationName|object|true|none|none|

<h2 id="tocS_GetCapacityReservationOutput">GetCapacityReservationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcapacityreservationoutput"></a>
<a id="schema_GetCapacityReservationOutput"></a>
<a id="tocSgetcapacityreservationoutput"></a>
<a id="tocsgetcapacityreservationoutput"></a>

```json
{
  "CapacityReservation": {
    "Name": {},
    "Status": {},
    "TargetDpus": {},
    "AllocatedDpus": {},
    "LastAllocation": {
      "Status": {},
      "StatusMessage": {},
      "RequestTime": {},
      "RequestCompletionTime": {}
    },
    "LastSuccessfulAllocationTime": {},
    "CreationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CapacityReservation|object|true|none|none|

<h2 id="tocS_GetCapacityReservationInput">GetCapacityReservationInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcapacityreservationinput"></a>
<a id="schema_GetCapacityReservationInput"></a>
<a id="tocSgetcapacityreservationinput"></a>
<a id="tocsgetcapacityreservationinput"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_GetDataCatalogOutput">GetDataCatalogOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetdatacatalogoutput"></a>
<a id="schema_GetDataCatalogOutput"></a>
<a id="tocSgetdatacatalogoutput"></a>
<a id="tocsgetdatacatalogoutput"></a>

```json
{
  "DataCatalog": {
    "Name": {},
    "Description": {},
    "Type": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataCatalog|object|false|none|none|

<h2 id="tocS_GetDataCatalogInput">GetDataCatalogInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdatacataloginput"></a>
<a id="schema_GetDataCatalogInput"></a>
<a id="tocSgetdatacataloginput"></a>
<a id="tocsgetdatacataloginput"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_GetDatabaseOutput">GetDatabaseOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetdatabaseoutput"></a>
<a id="schema_GetDatabaseOutput"></a>
<a id="tocSgetdatabaseoutput"></a>
<a id="tocsgetdatabaseoutput"></a>

```json
{
  "Database": {
    "Name": {},
    "Description": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Database|object|false|none|none|

<h2 id="tocS_GetDatabaseInput">GetDatabaseInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdatabaseinput"></a>
<a id="schema_GetDatabaseInput"></a>
<a id="tocSgetdatabaseinput"></a>
<a id="tocsgetdatabaseinput"></a>

```json
{
  "CatalogName": {},
  "DatabaseName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogName|object|true|none|none|
|DatabaseName|object|true|none|none|

<h2 id="tocS_MetadataException">MetadataException</h2>
<!-- backwards compatibility -->
<a id="schemametadataexception"></a>
<a id="schema_MetadataException"></a>
<a id="tocSmetadataexception"></a>
<a id="tocsmetadataexception"></a>

```json
null
```

<h2 id="tocS_GetNamedQueryOutput">GetNamedQueryOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetnamedqueryoutput"></a>
<a id="schema_GetNamedQueryOutput"></a>
<a id="tocSgetnamedqueryoutput"></a>
<a id="tocsgetnamedqueryoutput"></a>

```json
{
  "NamedQuery": {
    "Name": {},
    "Description": {},
    "Database": {},
    "QueryString": {},
    "NamedQueryId": {},
    "WorkGroup": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamedQuery|object|false|none|none|

<h2 id="tocS_GetNamedQueryInput">GetNamedQueryInput</h2>
<!-- backwards compatibility -->
<a id="schemagetnamedqueryinput"></a>
<a id="schema_GetNamedQueryInput"></a>
<a id="tocSgetnamedqueryinput"></a>
<a id="tocsgetnamedqueryinput"></a>

```json
{
  "NamedQueryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamedQueryId|object|true|none|none|

<h2 id="tocS_GetNotebookMetadataOutput">GetNotebookMetadataOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetnotebookmetadataoutput"></a>
<a id="schema_GetNotebookMetadataOutput"></a>
<a id="tocSgetnotebookmetadataoutput"></a>
<a id="tocsgetnotebookmetadataoutput"></a>

```json
{
  "NotebookMetadata": {
    "NotebookId": {},
    "Name": {},
    "WorkGroup": {},
    "CreationTime": {},
    "Type": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookMetadata|object|false|none|none|

<h2 id="tocS_GetNotebookMetadataInput">GetNotebookMetadataInput</h2>
<!-- backwards compatibility -->
<a id="schemagetnotebookmetadatainput"></a>
<a id="schema_GetNotebookMetadataInput"></a>
<a id="tocSgetnotebookmetadatainput"></a>
<a id="tocsgetnotebookmetadatainput"></a>

```json
{
  "NotebookId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookId|object|true|none|none|

<h2 id="tocS_GetPreparedStatementOutput">GetPreparedStatementOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetpreparedstatementoutput"></a>
<a id="schema_GetPreparedStatementOutput"></a>
<a id="tocSgetpreparedstatementoutput"></a>
<a id="tocsgetpreparedstatementoutput"></a>

```json
{
  "PreparedStatement": {
    "StatementName": {},
    "QueryStatement": {},
    "WorkGroupName": {},
    "Description": {},
    "LastModifiedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PreparedStatement|object|false|none|none|

<h2 id="tocS_GetPreparedStatementInput">GetPreparedStatementInput</h2>
<!-- backwards compatibility -->
<a id="schemagetpreparedstatementinput"></a>
<a id="schema_GetPreparedStatementInput"></a>
<a id="tocSgetpreparedstatementinput"></a>
<a id="tocsgetpreparedstatementinput"></a>

```json
{
  "StatementName": {},
  "WorkGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatementName|object|true|none|none|
|WorkGroup|object|true|none|none|

<h2 id="tocS_GetQueryExecutionOutput">GetQueryExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetqueryexecutionoutput"></a>
<a id="schema_GetQueryExecutionOutput"></a>
<a id="tocSgetqueryexecutionoutput"></a>
<a id="tocsgetqueryexecutionoutput"></a>

```json
{
  "QueryExecution": {
    "QueryExecutionId": {},
    "Query": {},
    "StatementType": {},
    "ResultConfiguration": {
      "OutputLocation": {},
      "EncryptionConfiguration": {
        "EncryptionOption": {},
        "KmsKey": {}
      },
      "ExpectedBucketOwner": {},
      "AclConfiguration": {
        "S3AclOption": {}
      }
    },
    "ResultReuseConfiguration": {
      "ResultReuseByAgeConfiguration": {
        "Enabled": {},
        "MaxAgeInMinutes": {}
      }
    },
    "QueryExecutionContext": {
      "Database": {},
      "Catalog": {}
    },
    "Status": {
      "State": {},
      "StateChangeReason": {},
      "SubmissionDateTime": {},
      "CompletionDateTime": {},
      "AthenaError": {
        "ErrorCategory": {},
        "ErrorType": {},
        "Retryable": {},
        "ErrorMessage": {}
      }
    },
    "Statistics": {
      "EngineExecutionTimeInMillis": {},
      "DataScannedInBytes": {},
      "DataManifestLocation": {},
      "TotalExecutionTimeInMillis": {},
      "QueryQueueTimeInMillis": {},
      "QueryPlanningTimeInMillis": {},
      "ServiceProcessingTimeInMillis": {},
      "ResultReuseInformation": {
        "ReusedPreviousResult": {}
      }
    },
    "WorkGroup": {},
    "EngineVersion": {
      "SelectedEngineVersion": {},
      "EffectiveEngineVersion": {}
    },
    "ExecutionParameters": {},
    "SubstatementType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryExecution|object|false|none|none|

<h2 id="tocS_GetQueryExecutionInput">GetQueryExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemagetqueryexecutioninput"></a>
<a id="schema_GetQueryExecutionInput"></a>
<a id="tocSgetqueryexecutioninput"></a>
<a id="tocsgetqueryexecutioninput"></a>

```json
{
  "QueryExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryExecutionId|object|true|none|none|

<h2 id="tocS_GetQueryResultsOutput">GetQueryResultsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetqueryresultsoutput"></a>
<a id="schema_GetQueryResultsOutput"></a>
<a id="tocSgetqueryresultsoutput"></a>
<a id="tocsgetqueryresultsoutput"></a>

```json
{
  "UpdateCount": {},
  "ResultSet": {
    "Rows": {},
    "ResultSetMetadata": {
      "ColumnInfo": {}
    }
  },
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpdateCount|object|false|none|none|
|ResultSet|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetQueryResultsInput">GetQueryResultsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetqueryresultsinput"></a>
<a id="schema_GetQueryResultsInput"></a>
<a id="tocSgetqueryresultsinput"></a>
<a id="tocsgetqueryresultsinput"></a>

```json
{
  "QueryExecutionId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryExecutionId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_GetQueryRuntimeStatisticsOutput">GetQueryRuntimeStatisticsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetqueryruntimestatisticsoutput"></a>
<a id="schema_GetQueryRuntimeStatisticsOutput"></a>
<a id="tocSgetqueryruntimestatisticsoutput"></a>
<a id="tocsgetqueryruntimestatisticsoutput"></a>

```json
{
  "QueryRuntimeStatistics": {
    "Timeline": {
      "QueryQueueTimeInMillis": {},
      "QueryPlanningTimeInMillis": {},
      "EngineExecutionTimeInMillis": {},
      "ServiceProcessingTimeInMillis": {},
      "TotalExecutionTimeInMillis": {}
    },
    "Rows": {
      "InputRows": {},
      "InputBytes": {},
      "OutputBytes": {},
      "OutputRows": {}
    },
    "OutputStage": {
      "StageId": {},
      "State": {},
      "OutputBytes": {},
      "OutputRows": {},
      "InputBytes": {},
      "InputRows": {},
      "ExecutionTime": {},
      "QueryStagePlan": {},
      "SubStages": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryRuntimeStatistics|object|false|none|none|

<h2 id="tocS_GetQueryRuntimeStatisticsInput">GetQueryRuntimeStatisticsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetqueryruntimestatisticsinput"></a>
<a id="schema_GetQueryRuntimeStatisticsInput"></a>
<a id="tocSgetqueryruntimestatisticsinput"></a>
<a id="tocsgetqueryruntimestatisticsinput"></a>

```json
{
  "QueryExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryExecutionId|object|true|none|none|

<h2 id="tocS_GetSessionResponse">GetSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsessionresponse"></a>
<a id="schema_GetSessionResponse"></a>
<a id="tocSgetsessionresponse"></a>
<a id="tocsgetsessionresponse"></a>

```json
{
  "SessionId": {},
  "Description": {},
  "WorkGroup": {},
  "EngineVersion": {},
  "EngineConfiguration": {
    "CoordinatorDpuSize": {},
    "MaxConcurrentDpus": {},
    "DefaultExecutorDpuSize": {},
    "AdditionalConfigs": {
      "property1": "string",
      "property2": "string"
    },
    "SparkProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "NotebookVersion": {},
  "SessionConfiguration": {
    "ExecutionRole": {},
    "WorkingDirectory": {},
    "IdleTimeoutSeconds": {},
    "EncryptionConfiguration": {
      "EncryptionOption": {},
      "KmsKey": {}
    }
  },
  "Status": {
    "StartDateTime": {},
    "LastModifiedDateTime": {},
    "EndDateTime": {},
    "IdleSinceDateTime": {},
    "State": {},
    "StateChangeReason": {}
  },
  "Statistics": {
    "DpuExecutionInMillis": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|false|none|none|
|Description|object|false|none|none|
|WorkGroup|object|false|none|none|
|EngineVersion|object|false|none|none|
|EngineConfiguration|object|false|none|none|
|NotebookVersion|object|false|none|none|
|SessionConfiguration|object|false|none|none|
|Status|object|false|none|none|
|Statistics|object|false|none|none|

<h2 id="tocS_GetSessionRequest">GetSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsessionrequest"></a>
<a id="schema_GetSessionRequest"></a>
<a id="tocSgetsessionrequest"></a>
<a id="tocsgetsessionrequest"></a>

```json
{
  "SessionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|true|none|none|

<h2 id="tocS_GetSessionStatusResponse">GetSessionStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsessionstatusresponse"></a>
<a id="schema_GetSessionStatusResponse"></a>
<a id="tocSgetsessionstatusresponse"></a>
<a id="tocsgetsessionstatusresponse"></a>

```json
{
  "SessionId": {},
  "Status": {
    "StartDateTime": {},
    "LastModifiedDateTime": {},
    "EndDateTime": {},
    "IdleSinceDateTime": {},
    "State": {},
    "StateChangeReason": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_GetSessionStatusRequest">GetSessionStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsessionstatusrequest"></a>
<a id="schema_GetSessionStatusRequest"></a>
<a id="tocSgetsessionstatusrequest"></a>
<a id="tocsgetsessionstatusrequest"></a>

```json
{
  "SessionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|true|none|none|

<h2 id="tocS_GetTableMetadataOutput">GetTableMetadataOutput</h2>
<!-- backwards compatibility -->
<a id="schemagettablemetadataoutput"></a>
<a id="schema_GetTableMetadataOutput"></a>
<a id="tocSgettablemetadataoutput"></a>
<a id="tocsgettablemetadataoutput"></a>

```json
{
  "TableMetadata": {
    "Name": {},
    "CreateTime": {},
    "LastAccessTime": {},
    "TableType": {},
    "Columns": {},
    "PartitionKeys": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableMetadata|object|false|none|none|

<h2 id="tocS_GetTableMetadataInput">GetTableMetadataInput</h2>
<!-- backwards compatibility -->
<a id="schemagettablemetadatainput"></a>
<a id="schema_GetTableMetadataInput"></a>
<a id="tocSgettablemetadatainput"></a>
<a id="tocsgettablemetadatainput"></a>

```json
{
  "CatalogName": {},
  "DatabaseName": {},
  "TableName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogName|object|true|none|none|
|DatabaseName|object|true|none|none|
|TableName|object|true|none|none|

<h2 id="tocS_GetWorkGroupOutput">GetWorkGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetworkgroupoutput"></a>
<a id="schema_GetWorkGroupOutput"></a>
<a id="tocSgetworkgroupoutput"></a>
<a id="tocsgetworkgroupoutput"></a>

```json
{
  "WorkGroup": {
    "Name": {},
    "State": {},
    "Configuration": {
      "ResultConfiguration": {
        "OutputLocation": {},
        "EncryptionConfiguration": {
          "EncryptionOption": {},
          "KmsKey": {}
        },
        "ExpectedBucketOwner": {},
        "AclConfiguration": {
          "S3AclOption": {}
        }
      },
      "EnforceWorkGroupConfiguration": {},
      "PublishCloudWatchMetricsEnabled": {},
      "BytesScannedCutoffPerQuery": {},
      "RequesterPaysEnabled": {},
      "EngineVersion": {
        "SelectedEngineVersion": {},
        "EffectiveEngineVersion": {}
      },
      "AdditionalConfiguration": {},
      "ExecutionRole": {},
      "CustomerContentEncryptionConfiguration": {
        "KmsKey": {}
      },
      "EnableMinimumEncryptionConfiguration": {}
    },
    "Description": {},
    "CreationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkGroup|object|false|none|none|

<h2 id="tocS_GetWorkGroupInput">GetWorkGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemagetworkgroupinput"></a>
<a id="schema_GetWorkGroupInput"></a>
<a id="tocSgetworkgroupinput"></a>
<a id="tocsgetworkgroupinput"></a>

```json
{
  "WorkGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkGroup|object|true|none|none|

<h2 id="tocS_ImportNotebookOutput">ImportNotebookOutput</h2>
<!-- backwards compatibility -->
<a id="schemaimportnotebookoutput"></a>
<a id="schema_ImportNotebookOutput"></a>
<a id="tocSimportnotebookoutput"></a>
<a id="tocsimportnotebookoutput"></a>

```json
{
  "NotebookId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookId|object|false|none|none|

<h2 id="tocS_ImportNotebookInput">ImportNotebookInput</h2>
<!-- backwards compatibility -->
<a id="schemaimportnotebookinput"></a>
<a id="schema_ImportNotebookInput"></a>
<a id="tocSimportnotebookinput"></a>
<a id="tocsimportnotebookinput"></a>

```json
{
  "WorkGroup": {},
  "Name": {},
  "Payload": {},
  "Type": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkGroup|object|true|none|none|
|Name|object|true|none|none|
|Payload|object|true|none|none|
|Type|object|true|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_ListApplicationDPUSizesOutput">ListApplicationDPUSizesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationdpusizesoutput"></a>
<a id="schema_ListApplicationDPUSizesOutput"></a>
<a id="tocSlistapplicationdpusizesoutput"></a>
<a id="tocslistapplicationdpusizesoutput"></a>

```json
{
  "ApplicationDPUSizes": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationDPUSizes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListApplicationDPUSizesInput">ListApplicationDPUSizesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationdpusizesinput"></a>
<a id="schema_ListApplicationDPUSizesInput"></a>
<a id="tocSlistapplicationdpusizesinput"></a>
<a id="tocslistapplicationdpusizesinput"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCalculationExecutionsResponse">ListCalculationExecutionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcalculationexecutionsresponse"></a>
<a id="schema_ListCalculationExecutionsResponse"></a>
<a id="tocSlistcalculationexecutionsresponse"></a>
<a id="tocslistcalculationexecutionsresponse"></a>

```json
{
  "NextToken": {},
  "Calculations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Calculations|object|false|none|none|

<h2 id="tocS_ListCalculationExecutionsRequest">ListCalculationExecutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcalculationexecutionsrequest"></a>
<a id="schema_ListCalculationExecutionsRequest"></a>
<a id="tocSlistcalculationexecutionsrequest"></a>
<a id="tocslistcalculationexecutionsrequest"></a>

```json
{
  "SessionId": {},
  "StateFilter": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|true|none|none|
|StateFilter|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListCapacityReservationsOutput">ListCapacityReservationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistcapacityreservationsoutput"></a>
<a id="schema_ListCapacityReservationsOutput"></a>
<a id="tocSlistcapacityreservationsoutput"></a>
<a id="tocslistcapacityreservationsoutput"></a>

```json
{
  "NextToken": {},
  "CapacityReservations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|CapacityReservations|object|true|none|none|

<h2 id="tocS_ListCapacityReservationsInput">ListCapacityReservationsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistcapacityreservationsinput"></a>
<a id="schema_ListCapacityReservationsInput"></a>
<a id="tocSlistcapacityreservationsinput"></a>
<a id="tocslistcapacityreservationsinput"></a>

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

<h2 id="tocS_ListDataCatalogsOutput">ListDataCatalogsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistdatacatalogsoutput"></a>
<a id="schema_ListDataCatalogsOutput"></a>
<a id="tocSlistdatacatalogsoutput"></a>
<a id="tocslistdatacatalogsoutput"></a>

```json
{
  "DataCatalogsSummary": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataCatalogsSummary|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDataCatalogsInput">ListDataCatalogsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistdatacatalogsinput"></a>
<a id="schema_ListDataCatalogsInput"></a>
<a id="tocSlistdatacatalogsinput"></a>
<a id="tocslistdatacatalogsinput"></a>

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

<h2 id="tocS_ListDatabasesOutput">ListDatabasesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistdatabasesoutput"></a>
<a id="schema_ListDatabasesOutput"></a>
<a id="tocSlistdatabasesoutput"></a>
<a id="tocslistdatabasesoutput"></a>

```json
{
  "DatabaseList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDatabasesInput">ListDatabasesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistdatabasesinput"></a>
<a id="schema_ListDatabasesInput"></a>
<a id="tocSlistdatabasesinput"></a>
<a id="tocslistdatabasesinput"></a>

```json
{
  "CatalogName": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogName|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListEngineVersionsOutput">ListEngineVersionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistengineversionsoutput"></a>
<a id="schema_ListEngineVersionsOutput"></a>
<a id="tocSlistengineversionsoutput"></a>
<a id="tocslistengineversionsoutput"></a>

```json
{
  "EngineVersions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngineVersions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEngineVersionsInput">ListEngineVersionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistengineversionsinput"></a>
<a id="schema_ListEngineVersionsInput"></a>
<a id="tocSlistengineversionsinput"></a>
<a id="tocslistengineversionsinput"></a>

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

<h2 id="tocS_ListExecutorsResponse">ListExecutorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexecutorsresponse"></a>
<a id="schema_ListExecutorsResponse"></a>
<a id="tocSlistexecutorsresponse"></a>
<a id="tocslistexecutorsresponse"></a>

```json
{
  "SessionId": {},
  "NextToken": {},
  "ExecutorsSummary": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|true|none|none|
|NextToken|object|false|none|none|
|ExecutorsSummary|object|false|none|none|

<h2 id="tocS_ListExecutorsRequest">ListExecutorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistexecutorsrequest"></a>
<a id="schema_ListExecutorsRequest"></a>
<a id="tocSlistexecutorsrequest"></a>
<a id="tocslistexecutorsrequest"></a>

```json
{
  "SessionId": {},
  "ExecutorStateFilter": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|true|none|none|
|ExecutorStateFilter|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListNamedQueriesOutput">ListNamedQueriesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistnamedqueriesoutput"></a>
<a id="schema_ListNamedQueriesOutput"></a>
<a id="tocSlistnamedqueriesoutput"></a>
<a id="tocslistnamedqueriesoutput"></a>

```json
{
  "NamedQueryIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamedQueryIds|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListNamedQueriesInput">ListNamedQueriesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistnamedqueriesinput"></a>
<a id="schema_ListNamedQueriesInput"></a>
<a id="tocSlistnamedqueriesinput"></a>
<a id="tocslistnamedqueriesinput"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "WorkGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|WorkGroup|object|false|none|none|

<h2 id="tocS_ListNotebookMetadataOutput">ListNotebookMetadataOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistnotebookmetadataoutput"></a>
<a id="schema_ListNotebookMetadataOutput"></a>
<a id="tocSlistnotebookmetadataoutput"></a>
<a id="tocslistnotebookmetadataoutput"></a>

```json
{
  "NextToken": {},
  "NotebookMetadataList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|NotebookMetadataList|object|false|none|none|

<h2 id="tocS_ListNotebookMetadataInput">ListNotebookMetadataInput</h2>
<!-- backwards compatibility -->
<a id="schemalistnotebookmetadatainput"></a>
<a id="schema_ListNotebookMetadataInput"></a>
<a id="tocSlistnotebookmetadatainput"></a>
<a id="tocslistnotebookmetadatainput"></a>

```json
{
  "Filters": {
    "Name": {}
  },
  "NextToken": {},
  "MaxResults": {},
  "WorkGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|WorkGroup|object|true|none|none|

<h2 id="tocS_ListNotebookSessionsResponse">ListNotebookSessionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnotebooksessionsresponse"></a>
<a id="schema_ListNotebookSessionsResponse"></a>
<a id="tocSlistnotebooksessionsresponse"></a>
<a id="tocslistnotebooksessionsresponse"></a>

```json
{
  "NotebookSessionsList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookSessionsList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListNotebookSessionsRequest">ListNotebookSessionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistnotebooksessionsrequest"></a>
<a id="schema_ListNotebookSessionsRequest"></a>
<a id="tocSlistnotebooksessionsrequest"></a>
<a id="tocslistnotebooksessionsrequest"></a>

```json
{
  "NotebookId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookId|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPreparedStatementsOutput">ListPreparedStatementsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistpreparedstatementsoutput"></a>
<a id="schema_ListPreparedStatementsOutput"></a>
<a id="tocSlistpreparedstatementsoutput"></a>
<a id="tocslistpreparedstatementsoutput"></a>

```json
{
  "PreparedStatements": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PreparedStatements|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPreparedStatementsInput">ListPreparedStatementsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistpreparedstatementsinput"></a>
<a id="schema_ListPreparedStatementsInput"></a>
<a id="tocSlistpreparedstatementsinput"></a>
<a id="tocslistpreparedstatementsinput"></a>

```json
{
  "WorkGroup": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkGroup|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListQueryExecutionsOutput">ListQueryExecutionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistqueryexecutionsoutput"></a>
<a id="schema_ListQueryExecutionsOutput"></a>
<a id="tocSlistqueryexecutionsoutput"></a>
<a id="tocslistqueryexecutionsoutput"></a>

```json
{
  "QueryExecutionIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryExecutionIds|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListQueryExecutionsInput">ListQueryExecutionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistqueryexecutionsinput"></a>
<a id="schema_ListQueryExecutionsInput"></a>
<a id="tocSlistqueryexecutionsinput"></a>
<a id="tocslistqueryexecutionsinput"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "WorkGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|WorkGroup|object|false|none|none|

<h2 id="tocS_ListSessionsResponse">ListSessionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsessionsresponse"></a>
<a id="schema_ListSessionsResponse"></a>
<a id="tocSlistsessionsresponse"></a>
<a id="tocslistsessionsresponse"></a>

```json
{
  "NextToken": {},
  "Sessions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Sessions|object|false|none|none|

<h2 id="tocS_ListSessionsRequest">ListSessionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsessionsrequest"></a>
<a id="schema_ListSessionsRequest"></a>
<a id="tocSlistsessionsrequest"></a>
<a id="tocslistsessionsrequest"></a>

```json
{
  "WorkGroup": {},
  "StateFilter": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkGroup|object|true|none|none|
|StateFilter|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTableMetadataOutput">ListTableMetadataOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttablemetadataoutput"></a>
<a id="schema_ListTableMetadataOutput"></a>
<a id="tocSlisttablemetadataoutput"></a>
<a id="tocslisttablemetadataoutput"></a>

```json
{
  "TableMetadataList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableMetadataList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTableMetadataInput">ListTableMetadataInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttablemetadatainput"></a>
<a id="schema_ListTableMetadataInput"></a>
<a id="tocSlisttablemetadatainput"></a>
<a id="tocslisttablemetadatainput"></a>

```json
{
  "CatalogName": {},
  "DatabaseName": {},
  "Expression": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogName|object|true|none|none|
|DatabaseName|object|true|none|none|
|Expression|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceOutput">ListTagsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceoutput"></a>
<a id="schema_ListTagsForResourceOutput"></a>
<a id="tocSlisttagsforresourceoutput"></a>
<a id="tocslisttagsforresourceoutput"></a>

```json
{
  "Tags": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{
  "ResourceARN": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListWorkGroupsOutput">ListWorkGroupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistworkgroupsoutput"></a>
<a id="schema_ListWorkGroupsOutput"></a>
<a id="tocSlistworkgroupsoutput"></a>
<a id="tocslistworkgroupsoutput"></a>

```json
{
  "WorkGroups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkGroups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListWorkGroupsInput">ListWorkGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistworkgroupsinput"></a>
<a id="schema_ListWorkGroupsInput"></a>
<a id="tocSlistworkgroupsinput"></a>
<a id="tocslistworkgroupsinput"></a>

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

<h2 id="tocS_PutCapacityAssignmentConfigurationOutput">PutCapacityAssignmentConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputcapacityassignmentconfigurationoutput"></a>
<a id="schema_PutCapacityAssignmentConfigurationOutput"></a>
<a id="tocSputcapacityassignmentconfigurationoutput"></a>
<a id="tocsputcapacityassignmentconfigurationoutput"></a>

```json
{}
```

<h2 id="tocS_PutCapacityAssignmentConfigurationInput">PutCapacityAssignmentConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaputcapacityassignmentconfigurationinput"></a>
<a id="schema_PutCapacityAssignmentConfigurationInput"></a>
<a id="tocSputcapacityassignmentconfigurationinput"></a>
<a id="tocsputcapacityassignmentconfigurationinput"></a>

```json
{
  "CapacityReservationName": {},
  "CapacityAssignments": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CapacityReservationName|object|true|none|none|
|CapacityAssignments|object|true|none|none|

<h2 id="tocS_StartCalculationExecutionResponse">StartCalculationExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartcalculationexecutionresponse"></a>
<a id="schema_StartCalculationExecutionResponse"></a>
<a id="tocSstartcalculationexecutionresponse"></a>
<a id="tocsstartcalculationexecutionresponse"></a>

```json
{
  "CalculationExecutionId": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculationExecutionId|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_StartCalculationExecutionRequest">StartCalculationExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartcalculationexecutionrequest"></a>
<a id="schema_StartCalculationExecutionRequest"></a>
<a id="tocSstartcalculationexecutionrequest"></a>
<a id="tocsstartcalculationexecutionrequest"></a>

```json
{
  "SessionId": {},
  "Description": {},
  "CalculationConfiguration": {
    "CodeBlock": {}
  },
  "CodeBlock": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|true|none|none|
|Description|object|false|none|none|
|CalculationConfiguration|object|false|none|none|
|CodeBlock|object|false|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_StartQueryExecutionOutput">StartQueryExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartqueryexecutionoutput"></a>
<a id="schema_StartQueryExecutionOutput"></a>
<a id="tocSstartqueryexecutionoutput"></a>
<a id="tocsstartqueryexecutionoutput"></a>

```json
{
  "QueryExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryExecutionId|object|false|none|none|

<h2 id="tocS_StartQueryExecutionInput">StartQueryExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemastartqueryexecutioninput"></a>
<a id="schema_StartQueryExecutionInput"></a>
<a id="tocSstartqueryexecutioninput"></a>
<a id="tocsstartqueryexecutioninput"></a>

```json
{
  "QueryString": {},
  "ClientRequestToken": {},
  "QueryExecutionContext": {
    "Database": {},
    "Catalog": {}
  },
  "ResultConfiguration": {
    "OutputLocation": {},
    "EncryptionConfiguration": {
      "EncryptionOption": {},
      "KmsKey": {}
    },
    "ExpectedBucketOwner": {},
    "AclConfiguration": {
      "S3AclOption": {}
    }
  },
  "WorkGroup": {},
  "ExecutionParameters": {},
  "ResultReuseConfiguration": {
    "ResultReuseByAgeConfiguration": {
      "Enabled": {},
      "MaxAgeInMinutes": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryString|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|QueryExecutionContext|object|false|none|none|
|ResultConfiguration|object|false|none|none|
|WorkGroup|object|false|none|none|
|ExecutionParameters|object|false|none|none|
|ResultReuseConfiguration|object|false|none|none|

<h2 id="tocS_StartSessionResponse">StartSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartsessionresponse"></a>
<a id="schema_StartSessionResponse"></a>
<a id="tocSstartsessionresponse"></a>
<a id="tocsstartsessionresponse"></a>

```json
{
  "SessionId": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_StartSessionRequest">StartSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartsessionrequest"></a>
<a id="schema_StartSessionRequest"></a>
<a id="tocSstartsessionrequest"></a>
<a id="tocsstartsessionrequest"></a>

```json
{
  "Description": {},
  "WorkGroup": {},
  "EngineConfiguration": {
    "CoordinatorDpuSize": {},
    "MaxConcurrentDpus": {},
    "DefaultExecutorDpuSize": {},
    "AdditionalConfigs": {
      "property1": "string",
      "property2": "string"
    },
    "SparkProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "NotebookVersion": {},
  "SessionIdleTimeoutInMinutes": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|WorkGroup|object|true|none|none|
|EngineConfiguration|object|true|none|none|
|NotebookVersion|object|false|none|none|
|SessionIdleTimeoutInMinutes|object|false|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_SessionAlreadyExistsException">SessionAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemasessionalreadyexistsexception"></a>
<a id="schema_SessionAlreadyExistsException"></a>
<a id="tocSsessionalreadyexistsexception"></a>
<a id="tocssessionalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_StopCalculationExecutionResponse">StopCalculationExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopcalculationexecutionresponse"></a>
<a id="schema_StopCalculationExecutionResponse"></a>
<a id="tocSstopcalculationexecutionresponse"></a>
<a id="tocsstopcalculationexecutionresponse"></a>

```json
{
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|

<h2 id="tocS_StopCalculationExecutionRequest">StopCalculationExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopcalculationexecutionrequest"></a>
<a id="schema_StopCalculationExecutionRequest"></a>
<a id="tocSstopcalculationexecutionrequest"></a>
<a id="tocsstopcalculationexecutionrequest"></a>

```json
{
  "CalculationExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculationExecutionId|object|true|none|none|

<h2 id="tocS_StopQueryExecutionOutput">StopQueryExecutionOutput</h2>
<!-- backwards compatibility -->
<a id="schemastopqueryexecutionoutput"></a>
<a id="schema_StopQueryExecutionOutput"></a>
<a id="tocSstopqueryexecutionoutput"></a>
<a id="tocsstopqueryexecutionoutput"></a>

```json
{}
```

<h2 id="tocS_StopQueryExecutionInput">StopQueryExecutionInput</h2>
<!-- backwards compatibility -->
<a id="schemastopqueryexecutioninput"></a>
<a id="schema_StopQueryExecutionInput"></a>
<a id="tocSstopqueryexecutioninput"></a>
<a id="tocsstopqueryexecutioninput"></a>

```json
{
  "QueryExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryExecutionId|object|true|none|none|

<h2 id="tocS_TagResourceOutput">TagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceoutput"></a>
<a id="schema_TagResourceOutput"></a>
<a id="tocStagresourceoutput"></a>
<a id="tocstagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

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

<h2 id="tocS_TerminateSessionResponse">TerminateSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schematerminatesessionresponse"></a>
<a id="schema_TerminateSessionResponse"></a>
<a id="tocSterminatesessionresponse"></a>
<a id="tocsterminatesessionresponse"></a>

```json
{
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|

<h2 id="tocS_TerminateSessionRequest">TerminateSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schematerminatesessionrequest"></a>
<a id="schema_TerminateSessionRequest"></a>
<a id="tocSterminatesessionrequest"></a>
<a id="tocsterminatesessionrequest"></a>

```json
{
  "SessionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|true|none|none|

<h2 id="tocS_UntagResourceOutput">UntagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceoutput"></a>
<a id="schema_UntagResourceOutput"></a>
<a id="tocSuntagresourceoutput"></a>
<a id="tocsuntagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

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

<h2 id="tocS_UpdateCapacityReservationOutput">UpdateCapacityReservationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecapacityreservationoutput"></a>
<a id="schema_UpdateCapacityReservationOutput"></a>
<a id="tocSupdatecapacityreservationoutput"></a>
<a id="tocsupdatecapacityreservationoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateCapacityReservationInput">UpdateCapacityReservationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecapacityreservationinput"></a>
<a id="schema_UpdateCapacityReservationInput"></a>
<a id="tocSupdatecapacityreservationinput"></a>
<a id="tocsupdatecapacityreservationinput"></a>

```json
{
  "TargetDpus": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetDpus|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_UpdateDataCatalogOutput">UpdateDataCatalogOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatacatalogoutput"></a>
<a id="schema_UpdateDataCatalogOutput"></a>
<a id="tocSupdatedatacatalogoutput"></a>
<a id="tocsupdatedatacatalogoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateDataCatalogInput">UpdateDataCatalogInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatacataloginput"></a>
<a id="schema_UpdateDataCatalogInput"></a>
<a id="tocSupdatedatacataloginput"></a>
<a id="tocsupdatedatacataloginput"></a>

```json
{
  "Name": {},
  "Type": {},
  "Description": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Type|object|true|none|none|
|Description|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_UpdateNamedQueryOutput">UpdateNamedQueryOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenamedqueryoutput"></a>
<a id="schema_UpdateNamedQueryOutput"></a>
<a id="tocSupdatenamedqueryoutput"></a>
<a id="tocsupdatenamedqueryoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateNamedQueryInput">UpdateNamedQueryInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenamedqueryinput"></a>
<a id="schema_UpdateNamedQueryInput"></a>
<a id="tocSupdatenamedqueryinput"></a>
<a id="tocsupdatenamedqueryinput"></a>

```json
{
  "NamedQueryId": {},
  "Name": {},
  "Description": {},
  "QueryString": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamedQueryId|object|true|none|none|
|Name|object|true|none|none|
|Description|object|false|none|none|
|QueryString|object|true|none|none|

<h2 id="tocS_UpdateNotebookOutput">UpdateNotebookOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotebookoutput"></a>
<a id="schema_UpdateNotebookOutput"></a>
<a id="tocSupdatenotebookoutput"></a>
<a id="tocsupdatenotebookoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateNotebookInput">UpdateNotebookInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotebookinput"></a>
<a id="schema_UpdateNotebookInput"></a>
<a id="tocSupdatenotebookinput"></a>
<a id="tocsupdatenotebookinput"></a>

```json
{
  "NotebookId": {},
  "Payload": {},
  "Type": {},
  "SessionId": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookId|object|true|none|none|
|Payload|object|true|none|none|
|Type|object|true|none|none|
|SessionId|object|false|none|none|
|ClientRequestToken|object|false|none|none|

<h2 id="tocS_UpdateNotebookMetadataOutput">UpdateNotebookMetadataOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotebookmetadataoutput"></a>
<a id="schema_UpdateNotebookMetadataOutput"></a>
<a id="tocSupdatenotebookmetadataoutput"></a>
<a id="tocsupdatenotebookmetadataoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateNotebookMetadataInput">UpdateNotebookMetadataInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotebookmetadatainput"></a>
<a id="schema_UpdateNotebookMetadataInput"></a>
<a id="tocSupdatenotebookmetadatainput"></a>
<a id="tocsupdatenotebookmetadatainput"></a>

```json
{
  "NotebookId": {},
  "ClientRequestToken": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookId|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|Name|object|true|none|none|

<h2 id="tocS_UpdatePreparedStatementOutput">UpdatePreparedStatementOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepreparedstatementoutput"></a>
<a id="schema_UpdatePreparedStatementOutput"></a>
<a id="tocSupdatepreparedstatementoutput"></a>
<a id="tocsupdatepreparedstatementoutput"></a>

```json
{}
```

<h2 id="tocS_UpdatePreparedStatementInput">UpdatePreparedStatementInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepreparedstatementinput"></a>
<a id="schema_UpdatePreparedStatementInput"></a>
<a id="tocSupdatepreparedstatementinput"></a>
<a id="tocsupdatepreparedstatementinput"></a>

```json
{
  "StatementName": {},
  "WorkGroup": {},
  "QueryStatement": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatementName|object|true|none|none|
|WorkGroup|object|true|none|none|
|QueryStatement|object|true|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateWorkGroupOutput">UpdateWorkGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkgroupoutput"></a>
<a id="schema_UpdateWorkGroupOutput"></a>
<a id="tocSupdateworkgroupoutput"></a>
<a id="tocsupdateworkgroupoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateWorkGroupInput">UpdateWorkGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkgroupinput"></a>
<a id="schema_UpdateWorkGroupInput"></a>
<a id="tocSupdateworkgroupinput"></a>
<a id="tocsupdateworkgroupinput"></a>

```json
{
  "WorkGroup": {},
  "Description": {},
  "ConfigurationUpdates": {
    "EnforceWorkGroupConfiguration": {},
    "ResultConfigurationUpdates": {
      "OutputLocation": {},
      "RemoveOutputLocation": {},
      "EncryptionConfiguration": {
        "EncryptionOption": {},
        "KmsKey": {}
      },
      "RemoveEncryptionConfiguration": {},
      "ExpectedBucketOwner": {},
      "RemoveExpectedBucketOwner": {},
      "AclConfiguration": {
        "S3AclOption": {}
      },
      "RemoveAclConfiguration": {}
    },
    "PublishCloudWatchMetricsEnabled": {},
    "BytesScannedCutoffPerQuery": {},
    "RemoveBytesScannedCutoffPerQuery": {},
    "RequesterPaysEnabled": {},
    "EngineVersion": {
      "SelectedEngineVersion": {},
      "EffectiveEngineVersion": {}
    },
    "RemoveCustomerContentEncryptionConfiguration": {},
    "AdditionalConfiguration": {},
    "ExecutionRole": {},
    "CustomerContentEncryptionConfiguration": {
      "KmsKey": {}
    },
    "EnableMinimumEncryptionConfiguration": {}
  },
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkGroup|object|true|none|none|
|Description|object|false|none|none|
|ConfigurationUpdates|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_S3AclOption">S3AclOption</h2>
<!-- backwards compatibility -->
<a id="schemas3acloption"></a>
<a id="schema_S3AclOption"></a>
<a id="tocSs3acloption"></a>
<a id="tocss3acloption"></a>

```json
"BUCKET_OWNER_FULL_CONTROL"
```

<h2 id="tocS_AclConfiguration">AclConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaaclconfiguration"></a>
<a id="schema_AclConfiguration"></a>
<a id="tocSaclconfiguration"></a>
<a id="tocsaclconfiguration"></a>

```json
{
  "S3AclOption": {}
}
```

Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. When Athena stores query results in Amazon S3, the canned ACL is set with the <code>x-amz-acl</code> request header. For more information about S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html#object-ownership-overview">Object Ownership settings</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3AclOption|object|true|none|none|

<h2 id="tocS_Age">Age</h2>
<!-- backwards compatibility -->
<a id="schemaage"></a>
<a id="schema_Age"></a>
<a id="tocSage"></a>
<a id="tocsage"></a>

```json
0
```

<h2 id="tocS_AllocatedDpusInteger">AllocatedDpusInteger</h2>
<!-- backwards compatibility -->
<a id="schemaallocateddpusinteger"></a>
<a id="schema_AllocatedDpusInteger"></a>
<a id="tocSallocateddpusinteger"></a>
<a id="tocsallocateddpusinteger"></a>

```json
0
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

<h2 id="tocS_NameString">NameString</h2>
<!-- backwards compatibility -->
<a id="schemanamestring"></a>
<a id="schema_NameString"></a>
<a id="tocSnamestring"></a>
<a id="tocsnamestring"></a>

```json
"string"
```

<h2 id="tocS_SupportedDPUSizeList">SupportedDPUSizeList</h2>
<!-- backwards compatibility -->
<a id="schemasupporteddpusizelist"></a>
<a id="schema_SupportedDPUSizeList"></a>
<a id="tocSsupporteddpusizelist"></a>
<a id="tocssupporteddpusizelist"></a>

```json
[
  0
]
```

<h2 id="tocS_ApplicationDPUSizes">ApplicationDPUSizes</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdpusizes"></a>
<a id="schema_ApplicationDPUSizes"></a>
<a id="tocSapplicationdpusizes"></a>
<a id="tocsapplicationdpusizes"></a>

```json
{
  "ApplicationRuntimeId": {},
  "SupportedDPUSizes": {}
}
```

Contains the application runtime IDs and their supported DPU sizes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationRuntimeId|object|false|none|none|
|SupportedDPUSizes|object|false|none|none|

<h2 id="tocS_ApplicationDPUSizesList">ApplicationDPUSizesList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdpusizeslist"></a>
<a id="schema_ApplicationDPUSizesList"></a>
<a id="tocSapplicationdpusizeslist"></a>
<a id="tocsapplicationdpusizeslist"></a>

```json
[
  {
    "ApplicationRuntimeId": {},
    "SupportedDPUSizes": {}
  }
]
```

<h2 id="tocS_ErrorCategory">ErrorCategory</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcategory"></a>
<a id="schema_ErrorCategory"></a>
<a id="tocSerrorcategory"></a>
<a id="tocserrorcategory"></a>

```json
1
```

<h2 id="tocS_ErrorType">ErrorType</h2>
<!-- backwards compatibility -->
<a id="schemaerrortype"></a>
<a id="schema_ErrorType"></a>
<a id="tocSerrortype"></a>
<a id="tocserrortype"></a>

```json
0
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

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_AthenaError">AthenaError</h2>
<!-- backwards compatibility -->
<a id="schemaathenaerror"></a>
<a id="schema_AthenaError"></a>
<a id="tocSathenaerror"></a>
<a id="tocsathenaerror"></a>

```json
{
  "ErrorCategory": {},
  "ErrorType": {},
  "Retryable": {},
  "ErrorMessage": {}
}
```

Provides information about an Athena query error. The <code>AthenaError</code> feature provides standardized error information to help you understand failed queries and take steps after a query failure occurs. <code>AthenaError</code> includes an <code>ErrorCategory</code> field that specifies whether the cause of the failed query is due to system error, user error, or other error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCategory|object|false|none|none|
|ErrorType|object|false|none|none|
|Retryable|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_AuthToken">AuthToken</h2>
<!-- backwards compatibility -->
<a id="schemaauthtoken"></a>
<a id="schema_AuthToken"></a>
<a id="tocSauthtoken"></a>
<a id="tocsauthtoken"></a>

```json
"string"
```

<h2 id="tocS_AwsAccountId">AwsAccountId</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountid"></a>
<a id="schema_AwsAccountId"></a>
<a id="tocSawsaccountid"></a>
<a id="tocsawsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_NamedQueryIdList">NamedQueryIdList</h2>
<!-- backwards compatibility -->
<a id="schemanamedqueryidlist"></a>
<a id="schema_NamedQueryIdList"></a>
<a id="tocSnamedqueryidlist"></a>
<a id="tocsnamedqueryidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NamedQueryList">NamedQueryList</h2>
<!-- backwards compatibility -->
<a id="schemanamedquerylist"></a>
<a id="schema_NamedQueryList"></a>
<a id="tocSnamedquerylist"></a>
<a id="tocsnamedquerylist"></a>

```json
[
  {
    "Name": {},
    "Description": {},
    "Database": {},
    "QueryString": {},
    "NamedQueryId": {},
    "WorkGroup": {}
  }
]
```

<h2 id="tocS_UnprocessedNamedQueryIdList">UnprocessedNamedQueryIdList</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessednamedqueryidlist"></a>
<a id="schema_UnprocessedNamedQueryIdList"></a>
<a id="tocSunprocessednamedqueryidlist"></a>
<a id="tocsunprocessednamedqueryidlist"></a>

```json
[
  {
    "NamedQueryId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_PreparedStatementNameList">PreparedStatementNameList</h2>
<!-- backwards compatibility -->
<a id="schemapreparedstatementnamelist"></a>
<a id="schema_PreparedStatementNameList"></a>
<a id="tocSpreparedstatementnamelist"></a>
<a id="tocspreparedstatementnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_WorkGroupName">WorkGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupname"></a>
<a id="schema_WorkGroupName"></a>
<a id="tocSworkgroupname"></a>
<a id="tocsworkgroupname"></a>

```json
"string"
```

<h2 id="tocS_PreparedStatementDetailsList">PreparedStatementDetailsList</h2>
<!-- backwards compatibility -->
<a id="schemapreparedstatementdetailslist"></a>
<a id="schema_PreparedStatementDetailsList"></a>
<a id="tocSpreparedstatementdetailslist"></a>
<a id="tocspreparedstatementdetailslist"></a>

```json
[
  {
    "StatementName": {},
    "QueryStatement": {},
    "WorkGroupName": {},
    "Description": {},
    "LastModifiedTime": {}
  }
]
```

<h2 id="tocS_UnprocessedPreparedStatementNameList">UnprocessedPreparedStatementNameList</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedpreparedstatementnamelist"></a>
<a id="schema_UnprocessedPreparedStatementNameList"></a>
<a id="tocSunprocessedpreparedstatementnamelist"></a>
<a id="tocsunprocessedpreparedstatementnamelist"></a>

```json
[
  {
    "StatementName": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_QueryExecutionIdList">QueryExecutionIdList</h2>
<!-- backwards compatibility -->
<a id="schemaqueryexecutionidlist"></a>
<a id="schema_QueryExecutionIdList"></a>
<a id="tocSqueryexecutionidlist"></a>
<a id="tocsqueryexecutionidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_QueryExecutionList">QueryExecutionList</h2>
<!-- backwards compatibility -->
<a id="schemaqueryexecutionlist"></a>
<a id="schema_QueryExecutionList"></a>
<a id="tocSqueryexecutionlist"></a>
<a id="tocsqueryexecutionlist"></a>

```json
[
  {
    "QueryExecutionId": {},
    "Query": {},
    "StatementType": {},
    "ResultConfiguration": {
      "OutputLocation": {},
      "EncryptionConfiguration": {
        "EncryptionOption": {},
        "KmsKey": {}
      },
      "ExpectedBucketOwner": {},
      "AclConfiguration": {
        "S3AclOption": {}
      }
    },
    "ResultReuseConfiguration": {
      "ResultReuseByAgeConfiguration": {
        "Enabled": {},
        "MaxAgeInMinutes": {}
      }
    },
    "QueryExecutionContext": {
      "Database": {},
      "Catalog": {}
    },
    "Status": {
      "State": {},
      "StateChangeReason": {},
      "SubmissionDateTime": {},
      "CompletionDateTime": {},
      "AthenaError": {
        "ErrorCategory": {},
        "ErrorType": {},
        "Retryable": {},
        "ErrorMessage": {}
      }
    },
    "Statistics": {
      "EngineExecutionTimeInMillis": {},
      "DataScannedInBytes": {},
      "DataManifestLocation": {},
      "TotalExecutionTimeInMillis": {},
      "QueryQueueTimeInMillis": {},
      "QueryPlanningTimeInMillis": {},
      "ServiceProcessingTimeInMillis": {},
      "ResultReuseInformation": {
        "ReusedPreviousResult": {}
      }
    },
    "WorkGroup": {},
    "EngineVersion": {
      "SelectedEngineVersion": {},
      "EffectiveEngineVersion": {}
    },
    "ExecutionParameters": {},
    "SubstatementType": {}
  }
]
```

<h2 id="tocS_UnprocessedQueryExecutionIdList">UnprocessedQueryExecutionIdList</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedqueryexecutionidlist"></a>
<a id="schema_UnprocessedQueryExecutionIdList"></a>
<a id="tocSunprocessedqueryexecutionidlist"></a>
<a id="tocsunprocessedqueryexecutionidlist"></a>

```json
[
  {
    "QueryExecutionId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
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

<h2 id="tocS_BytesScannedCutoffValue">BytesScannedCutoffValue</h2>
<!-- backwards compatibility -->
<a id="schemabytesscannedcutoffvalue"></a>
<a id="schema_BytesScannedCutoffValue"></a>
<a id="tocSbytesscannedcutoffvalue"></a>
<a id="tocsbytesscannedcutoffvalue"></a>

```json
10000000
```

<h2 id="tocS_CodeBlock">CodeBlock</h2>
<!-- backwards compatibility -->
<a id="schemacodeblock"></a>
<a id="schema_CodeBlock"></a>
<a id="tocScodeblock"></a>
<a id="tocscodeblock"></a>

```json
"string"
```

<h2 id="tocS_CalculationConfiguration">CalculationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacalculationconfiguration"></a>
<a id="schema_CalculationConfiguration"></a>
<a id="tocScalculationconfiguration"></a>
<a id="tocscalculationconfiguration"></a>

```json
{
  "CodeBlock": {}
}
```

Contains configuration information for the calculation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeBlock|object|false|none|none|

<h2 id="tocS_CalculationExecutionId">CalculationExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemacalculationexecutionid"></a>
<a id="schema_CalculationExecutionId"></a>
<a id="tocScalculationexecutionid"></a>
<a id="tocscalculationexecutionid"></a>

```json
"string"
```

<h2 id="tocS_CalculationExecutionState">CalculationExecutionState</h2>
<!-- backwards compatibility -->
<a id="schemacalculationexecutionstate"></a>
<a id="schema_CalculationExecutionState"></a>
<a id="tocScalculationexecutionstate"></a>
<a id="tocscalculationexecutionstate"></a>

```json
"CREATING"
```

<h2 id="tocS_S3Uri">S3Uri</h2>
<!-- backwards compatibility -->
<a id="schemas3uri"></a>
<a id="schema_S3Uri"></a>
<a id="tocSs3uri"></a>
<a id="tocss3uri"></a>

```json
"string"
```

<h2 id="tocS_CalculationResultType">CalculationResultType</h2>
<!-- backwards compatibility -->
<a id="schemacalculationresulttype"></a>
<a id="schema_CalculationResultType"></a>
<a id="tocScalculationresulttype"></a>
<a id="tocscalculationresulttype"></a>

```json
"string"
```

<h2 id="tocS_CalculationResult">CalculationResult</h2>
<!-- backwards compatibility -->
<a id="schemacalculationresult"></a>
<a id="schema_CalculationResult"></a>
<a id="tocScalculationresult"></a>
<a id="tocscalculationresult"></a>

```json
{
  "StdOutS3Uri": {},
  "StdErrorS3Uri": {},
  "ResultS3Uri": {},
  "ResultType": {}
}
```

Contains information about an application-specific calculation result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StdOutS3Uri|object|false|none|none|
|StdErrorS3Uri|object|false|none|none|
|ResultS3Uri|object|false|none|none|
|ResultType|object|false|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_DescriptionString">DescriptionString</h2>
<!-- backwards compatibility -->
<a id="schemadescriptionstring"></a>
<a id="schema_DescriptionString"></a>
<a id="tocSdescriptionstring"></a>
<a id="tocsdescriptionstring"></a>

```json
"string"
```

<h2 id="tocS_CalculationStatistics">CalculationStatistics</h2>
<!-- backwards compatibility -->
<a id="schemacalculationstatistics"></a>
<a id="schema_CalculationStatistics"></a>
<a id="tocScalculationstatistics"></a>
<a id="tocscalculationstatistics"></a>

```json
{
  "DpuExecutionInMillis": {},
  "Progress": {}
}
```

Contains statistics for a notebook calculation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DpuExecutionInMillis|object|false|none|none|
|Progress|object|false|none|none|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CalculationStatus">CalculationStatus</h2>
<!-- backwards compatibility -->
<a id="schemacalculationstatus"></a>
<a id="schema_CalculationStatus"></a>
<a id="tocScalculationstatus"></a>
<a id="tocscalculationstatus"></a>

```json
{
  "SubmissionDateTime": {},
  "CompletionDateTime": {},
  "State": {},
  "StateChangeReason": {}
}
```

Contains information about the status of a notebook calculation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubmissionDateTime|object|false|none|none|
|CompletionDateTime|object|false|none|none|
|State|object|false|none|none|
|StateChangeReason|object|false|none|none|

<h2 id="tocS_CalculationSummary">CalculationSummary</h2>
<!-- backwards compatibility -->
<a id="schemacalculationsummary"></a>
<a id="schema_CalculationSummary"></a>
<a id="tocScalculationsummary"></a>
<a id="tocscalculationsummary"></a>

```json
{
  "CalculationExecutionId": {},
  "Description": {},
  "Status": {
    "SubmissionDateTime": {},
    "CompletionDateTime": {},
    "State": {},
    "StateChangeReason": {}
  }
}
```

Summary information for a notebook calculation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculationExecutionId|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CalculationsList">CalculationsList</h2>
<!-- backwards compatibility -->
<a id="schemacalculationslist"></a>
<a id="schema_CalculationsList"></a>
<a id="tocScalculationslist"></a>
<a id="tocscalculationslist"></a>

```json
[
  {
    "CalculationExecutionId": {},
    "Description": {},
    "Status": {
      "SubmissionDateTime": {},
      "CompletionDateTime": {},
      "State": {},
      "StateChangeReason": {}
    }
  }
]
```

<h2 id="tocS_CapacityReservationName">CapacityReservationName</h2>
<!-- backwards compatibility -->
<a id="schemacapacityreservationname"></a>
<a id="schema_CapacityReservationName"></a>
<a id="tocScapacityreservationname"></a>
<a id="tocscapacityreservationname"></a>

```json
"string"
```

<h2 id="tocS_CapacityAllocationStatus">CapacityAllocationStatus</h2>
<!-- backwards compatibility -->
<a id="schemacapacityallocationstatus"></a>
<a id="schema_CapacityAllocationStatus"></a>
<a id="tocScapacityallocationstatus"></a>
<a id="tocscapacityallocationstatus"></a>

```json
"PENDING"
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

<h2 id="tocS_CapacityAllocation">CapacityAllocation</h2>
<!-- backwards compatibility -->
<a id="schemacapacityallocation"></a>
<a id="schema_CapacityAllocation"></a>
<a id="tocScapacityallocation"></a>
<a id="tocscapacityallocation"></a>

```json
{
  "Status": {},
  "StatusMessage": {},
  "RequestTime": {},
  "RequestCompletionTime": {}
}
```

Contains the submission time of a single allocation request for a capacity reservation and the most recent status of the attempted allocation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|StatusMessage|object|false|none|none|
|RequestTime|object|true|none|none|
|RequestCompletionTime|object|false|none|none|

<h2 id="tocS_WorkGroupNamesList">WorkGroupNamesList</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupnameslist"></a>
<a id="schema_WorkGroupNamesList"></a>
<a id="tocSworkgroupnameslist"></a>
<a id="tocsworkgroupnameslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CapacityAssignment">CapacityAssignment</h2>
<!-- backwards compatibility -->
<a id="schemacapacityassignment"></a>
<a id="schema_CapacityAssignment"></a>
<a id="tocScapacityassignment"></a>
<a id="tocscapacityassignment"></a>

```json
{
  "WorkGroupNames": {}
}
```

A mapping between one or more workgroups and a capacity reservation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkGroupNames|object|false|none|none|

<h2 id="tocS_CapacityAssignmentsList">CapacityAssignmentsList</h2>
<!-- backwards compatibility -->
<a id="schemacapacityassignmentslist"></a>
<a id="schema_CapacityAssignmentsList"></a>
<a id="tocScapacityassignmentslist"></a>
<a id="tocscapacityassignmentslist"></a>

```json
[
  {
    "WorkGroupNames": {}
  }
]
```

<h2 id="tocS_CapacityAssignmentConfiguration">CapacityAssignmentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacapacityassignmentconfiguration"></a>
<a id="schema_CapacityAssignmentConfiguration"></a>
<a id="tocScapacityassignmentconfiguration"></a>
<a id="tocscapacityassignmentconfiguration"></a>

```json
{
  "CapacityReservationName": {},
  "CapacityAssignments": {}
}
```

Assigns Athena workgroups (and hence their queries) to capacity reservations. A capacity reservation can have only one capacity assignment configuration, but the capacity assignment configuration can be made up of multiple individual assignments. Each assignment specifies how Athena queries can consume capacity from the capacity reservation that their workgroup is mapped to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CapacityReservationName|object|false|none|none|
|CapacityAssignments|object|false|none|none|

<h2 id="tocS_CapacityReservationStatus">CapacityReservationStatus</h2>
<!-- backwards compatibility -->
<a id="schemacapacityreservationstatus"></a>
<a id="schema_CapacityReservationStatus"></a>
<a id="tocScapacityreservationstatus"></a>
<a id="tocscapacityreservationstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_TargetDpusInteger">TargetDpusInteger</h2>
<!-- backwards compatibility -->
<a id="schematargetdpusinteger"></a>
<a id="schema_TargetDpusInteger"></a>
<a id="tocStargetdpusinteger"></a>
<a id="tocstargetdpusinteger"></a>

```json
24
```

<h2 id="tocS_CapacityReservation">CapacityReservation</h2>
<!-- backwards compatibility -->
<a id="schemacapacityreservation"></a>
<a id="schema_CapacityReservation"></a>
<a id="tocScapacityreservation"></a>
<a id="tocscapacityreservation"></a>

```json
{
  "Name": {},
  "Status": {},
  "TargetDpus": {},
  "AllocatedDpus": {},
  "LastAllocation": {
    "Status": {},
    "StatusMessage": {},
    "RequestTime": {},
    "RequestCompletionTime": {}
  },
  "LastSuccessfulAllocationTime": {},
  "CreationTime": {}
}
```

A reservation for a specified number of data processing units (DPUs). When a reservation is initially created, it has no DPUs. Athena allocates DPUs until the allocated amount equals the requested amount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Status|object|true|none|none|
|TargetDpus|object|true|none|none|
|AllocatedDpus|object|true|none|none|
|LastAllocation|[CapacityAllocation](#schemacapacityallocation)|false|none|Contains the submission time of a single allocation request for a capacity reservation and the most recent status of the attempted allocation.|
|LastSuccessfulAllocationTime|object|false|none|none|
|CreationTime|object|true|none|none|

<h2 id="tocS_CapacityReservationsList">CapacityReservationsList</h2>
<!-- backwards compatibility -->
<a id="schemacapacityreservationslist"></a>
<a id="schema_CapacityReservationsList"></a>
<a id="tocScapacityreservationslist"></a>
<a id="tocscapacityreservationslist"></a>

```json
[
  {
    "Name": {},
    "Status": {},
    "TargetDpus": {},
    "AllocatedDpus": {},
    "LastAllocation": {
      "Status": {},
      "StatusMessage": {},
      "RequestTime": {},
      "RequestCompletionTime": {}
    },
    "LastSuccessfulAllocationTime": {},
    "CreationTime": {}
  }
]
```

<h2 id="tocS_CatalogNameString">CatalogNameString</h2>
<!-- backwards compatibility -->
<a id="schemacatalognamestring"></a>
<a id="schema_CatalogNameString"></a>
<a id="tocScatalognamestring"></a>
<a id="tocscatalognamestring"></a>

```json
"string"
```

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

<h2 id="tocS_TypeString">TypeString</h2>
<!-- backwards compatibility -->
<a id="schematypestring"></a>
<a id="schema_TypeString"></a>
<a id="tocStypestring"></a>
<a id="tocstypestring"></a>

```json
"string"
```

<h2 id="tocS_CommentString">CommentString</h2>
<!-- backwards compatibility -->
<a id="schemacommentstring"></a>
<a id="schema_CommentString"></a>
<a id="tocScommentstring"></a>
<a id="tocscommentstring"></a>

```json
"string"
```

<h2 id="tocS_Column">Column</h2>
<!-- backwards compatibility -->
<a id="schemacolumn"></a>
<a id="schema_Column"></a>
<a id="tocScolumn"></a>
<a id="tocscolumn"></a>

```json
{
  "Name": {},
  "Type": {},
  "Comment": {}
}
```

Contains metadata for a column in a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Type|object|false|none|none|
|Comment|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_ColumnNullable">ColumnNullable</h2>
<!-- backwards compatibility -->
<a id="schemacolumnnullable"></a>
<a id="schema_ColumnNullable"></a>
<a id="tocScolumnnullable"></a>
<a id="tocscolumnnullable"></a>

```json
"NOT_NULL"
```

<h2 id="tocS_ColumnInfo">ColumnInfo</h2>
<!-- backwards compatibility -->
<a id="schemacolumninfo"></a>
<a id="schema_ColumnInfo"></a>
<a id="tocScolumninfo"></a>
<a id="tocscolumninfo"></a>

```json
{
  "CatalogName": {},
  "SchemaName": {},
  "TableName": {},
  "Name": {},
  "Label": {},
  "Type": {},
  "Precision": {},
  "Scale": {},
  "Nullable": {},
  "CaseSensitive": {}
}
```

Information about the columns in a query execution result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogName|object|false|none|none|
|SchemaName|object|false|none|none|
|TableName|object|false|none|none|
|Name|object|true|none|none|
|Label|object|false|none|none|
|Type|object|true|none|none|
|Precision|object|false|none|none|
|Scale|object|false|none|none|
|Nullable|object|false|none|none|
|CaseSensitive|object|false|none|none|

<h2 id="tocS_ColumnInfoList">ColumnInfoList</h2>
<!-- backwards compatibility -->
<a id="schemacolumninfolist"></a>
<a id="schema_ColumnInfoList"></a>
<a id="tocScolumninfolist"></a>
<a id="tocscolumninfolist"></a>

```json
[
  {
    "CatalogName": {},
    "SchemaName": {},
    "TableName": {},
    "Name": {},
    "Label": {},
    "Type": {},
    "Precision": {},
    "Scale": {},
    "Nullable": {},
    "CaseSensitive": {}
  }
]
```

<h2 id="tocS_ColumnList">ColumnList</h2>
<!-- backwards compatibility -->
<a id="schemacolumnlist"></a>
<a id="schema_ColumnList"></a>
<a id="tocScolumnlist"></a>
<a id="tocscolumnlist"></a>

```json
[
  {
    "Name": {},
    "Type": {},
    "Comment": {}
  }
]
```

<h2 id="tocS_CoordinatorDpuSize">CoordinatorDpuSize</h2>
<!-- backwards compatibility -->
<a id="schemacoordinatordpusize"></a>
<a id="schema_CoordinatorDpuSize"></a>
<a id="tocScoordinatordpusize"></a>
<a id="tocscoordinatordpusize"></a>

```json
1
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

<h2 id="tocS_DataCatalogType">DataCatalogType</h2>
<!-- backwards compatibility -->
<a id="schemadatacatalogtype"></a>
<a id="schema_DataCatalogType"></a>
<a id="tocSdatacatalogtype"></a>
<a id="tocsdatacatalogtype"></a>

```json
"LAMBDA"
```

<h2 id="tocS_ParametersMap">ParametersMap</h2>
<!-- backwards compatibility -->
<a id="schemaparametersmap"></a>
<a id="schema_ParametersMap"></a>
<a id="tocSparametersmap"></a>
<a id="tocsparametersmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ParametersMapValue](#schemaparametersmapvalue)|false|none|none|

<h2 id="tocS_DatabaseString">DatabaseString</h2>
<!-- backwards compatibility -->
<a id="schemadatabasestring"></a>
<a id="schema_DatabaseString"></a>
<a id="tocSdatabasestring"></a>
<a id="tocsdatabasestring"></a>

```json
"string"
```

<h2 id="tocS_QueryString">QueryString</h2>
<!-- backwards compatibility -->
<a id="schemaquerystring"></a>
<a id="schema_QueryString"></a>
<a id="tocSquerystring"></a>
<a id="tocsquerystring"></a>

```json
"string"
```

<h2 id="tocS_IdempotencyToken">IdempotencyToken</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencytoken"></a>
<a id="schema_IdempotencyToken"></a>
<a id="tocSidempotencytoken"></a>
<a id="tocsidempotencytoken"></a>

```json
"stringstringstringstringstringst"
```

<h2 id="tocS_NamedQueryId">NamedQueryId</h2>
<!-- backwards compatibility -->
<a id="schemanamedqueryid"></a>
<a id="schema_NamedQueryId"></a>
<a id="tocSnamedqueryid"></a>
<a id="tocsnamedqueryid"></a>

```json
"string"
```

<h2 id="tocS_NotebookName">NotebookName</h2>
<!-- backwards compatibility -->
<a id="schemanotebookname"></a>
<a id="schema_NotebookName"></a>
<a id="tocSnotebookname"></a>
<a id="tocsnotebookname"></a>

```json
"string"
```

<h2 id="tocS_NotebookId">NotebookId</h2>
<!-- backwards compatibility -->
<a id="schemanotebookid"></a>
<a id="schema_NotebookId"></a>
<a id="tocSnotebookid"></a>
<a id="tocsnotebookid"></a>

```json
"string"
```

<h2 id="tocS_StatementName">StatementName</h2>
<!-- backwards compatibility -->
<a id="schemastatementname"></a>
<a id="schema_StatementName"></a>
<a id="tocSstatementname"></a>
<a id="tocsstatementname"></a>

```json
"string"
```

<h2 id="tocS_SessionId">SessionId</h2>
<!-- backwards compatibility -->
<a id="schemasessionid"></a>
<a id="schema_SessionId"></a>
<a id="tocSsessionid"></a>
<a id="tocssessionid"></a>

```json
"string"
```

<h2 id="tocS_WorkGroupConfiguration">WorkGroupConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupconfiguration"></a>
<a id="schema_WorkGroupConfiguration"></a>
<a id="tocSworkgroupconfiguration"></a>
<a id="tocsworkgroupconfiguration"></a>

```json
{
  "ResultConfiguration": {
    "OutputLocation": {},
    "EncryptionConfiguration": {
      "EncryptionOption": {},
      "KmsKey": {}
    },
    "ExpectedBucketOwner": {},
    "AclConfiguration": {
      "S3AclOption": {}
    }
  },
  "EnforceWorkGroupConfiguration": {},
  "PublishCloudWatchMetricsEnabled": {},
  "BytesScannedCutoffPerQuery": {},
  "RequesterPaysEnabled": {},
  "EngineVersion": {
    "SelectedEngineVersion": {},
    "EffectiveEngineVersion": {}
  },
  "AdditionalConfiguration": {},
  "ExecutionRole": {},
  "CustomerContentEncryptionConfiguration": {
    "KmsKey": {}
  },
  "EnableMinimumEncryptionConfiguration": {}
}
```

The configuration of the workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption option, if any, used for query and calculation results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultConfiguration|object|false|none|none|
|EnforceWorkGroupConfiguration|object|false|none|none|
|PublishCloudWatchMetricsEnabled|object|false|none|none|
|BytesScannedCutoffPerQuery|object|false|none|none|
|RequesterPaysEnabled|object|false|none|none|
|EngineVersion|object|false|none|none|
|AdditionalConfiguration|object|false|none|none|
|ExecutionRole|object|false|none|none|
|CustomerContentEncryptionConfiguration|object|false|none|none|
|EnableMinimumEncryptionConfiguration|object|false|none|none|

<h2 id="tocS_WorkGroupDescriptionString">WorkGroupDescriptionString</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupdescriptionstring"></a>
<a id="schema_WorkGroupDescriptionString"></a>
<a id="tocSworkgroupdescriptionstring"></a>
<a id="tocsworkgroupdescriptionstring"></a>

```json
"string"
```

<h2 id="tocS_KmsKey">KmsKey</h2>
<!-- backwards compatibility -->
<a id="schemakmskey"></a>
<a id="schema_KmsKey"></a>
<a id="tocSkmskey"></a>
<a id="tocskmskey"></a>

```json
"string"
```

<h2 id="tocS_CustomerContentEncryptionConfiguration">CustomerContentEncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacustomercontentencryptionconfiguration"></a>
<a id="schema_CustomerContentEncryptionConfiguration"></a>
<a id="tocScustomercontentencryptionconfiguration"></a>
<a id="tocscustomercontentencryptionconfiguration"></a>

```json
{
  "KmsKey": {}
}
```

Specifies the KMS key that is used to encrypt the user's data stores in Athena. This setting does not apply to Athena SQL workgroups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KmsKey|object|true|none|none|

<h2 id="tocS_DataCatalog">DataCatalog</h2>
<!-- backwards compatibility -->
<a id="schemadatacatalog"></a>
<a id="schema_DataCatalog"></a>
<a id="tocSdatacatalog"></a>
<a id="tocsdatacatalog"></a>

```json
{
  "Name": {},
  "Description": {},
  "Type": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>Contains information about a data catalog in an Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|Type|object|true|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_DataCatalogSummary">DataCatalogSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatacatalogsummary"></a>
<a id="schema_DataCatalogSummary"></a>
<a id="tocSdatacatalogsummary"></a>
<a id="tocsdatacatalogsummary"></a>

```json
{
  "CatalogName": {},
  "Type": {}
}
```

The summary information for the data catalog, which includes its name and type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CatalogName|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_DataCatalogSummaryList">DataCatalogSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemadatacatalogsummarylist"></a>
<a id="schema_DataCatalogSummaryList"></a>
<a id="tocSdatacatalogsummarylist"></a>
<a id="tocsdatacatalogsummarylist"></a>

```json
[
  {
    "CatalogName": {},
    "Type": {}
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
  "Name": {},
  "Description": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains metadata information for a database in a data catalog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_DatabaseList">DatabaseList</h2>
<!-- backwards compatibility -->
<a id="schemadatabaselist"></a>
<a id="schema_DatabaseList"></a>
<a id="tocSdatabaselist"></a>
<a id="tocsdatabaselist"></a>

```json
[
  {
    "Name": {},
    "Description": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_datumString">datumString</h2>
<!-- backwards compatibility -->
<a id="schemadatumstring"></a>
<a id="schema_datumString"></a>
<a id="tocSdatumstring"></a>
<a id="tocsdatumstring"></a>

```json
"string"
```

<h2 id="tocS_Datum">Datum</h2>
<!-- backwards compatibility -->
<a id="schemadatum"></a>
<a id="schema_Datum"></a>
<a id="tocSdatum"></a>
<a id="tocsdatum"></a>

```json
{
  "VarCharValue": {}
}
```

A piece of data (a field in the table).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VarCharValue|object|false|none|none|

<h2 id="tocS_DefaultExecutorDpuSize">DefaultExecutorDpuSize</h2>
<!-- backwards compatibility -->
<a id="schemadefaultexecutordpusize"></a>
<a id="schema_DefaultExecutorDpuSize"></a>
<a id="tocSdefaultexecutordpusize"></a>
<a id="tocsdefaultexecutordpusize"></a>

```json
1
```

<h2 id="tocS_EncryptionOption">EncryptionOption</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionoption"></a>
<a id="schema_EncryptionOption"></a>
<a id="tocSencryptionoption"></a>
<a id="tocsencryptionoption"></a>

```json
"SSE_S3"
```

<h2 id="tocS_EncryptionConfiguration">EncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfiguration"></a>
<a id="schema_EncryptionConfiguration"></a>
<a id="tocSencryptionconfiguration"></a>
<a id="tocsencryptionconfiguration"></a>

```json
{
  "EncryptionOption": {},
  "KmsKey": {}
}
```

If query and calculation results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionOption|object|true|none|none|
|KmsKey|object|false|none|none|

<h2 id="tocS_MaxConcurrentDpus">MaxConcurrentDpus</h2>
<!-- backwards compatibility -->
<a id="schemamaxconcurrentdpus"></a>
<a id="schema_MaxConcurrentDpus"></a>
<a id="tocSmaxconcurrentdpus"></a>
<a id="tocsmaxconcurrentdpus"></a>

```json
2
```

<h2 id="tocS_EngineConfiguration">EngineConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaengineconfiguration"></a>
<a id="schema_EngineConfiguration"></a>
<a id="tocSengineconfiguration"></a>
<a id="tocsengineconfiguration"></a>

```json
{
  "CoordinatorDpuSize": {},
  "MaxConcurrentDpus": {},
  "DefaultExecutorDpuSize": {},
  "AdditionalConfigs": {
    "property1": "string",
    "property2": "string"
  },
  "SparkProperties": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains data processing unit (DPU) configuration settings and parameter mappings for a notebook engine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CoordinatorDpuSize|object|false|none|none|
|MaxConcurrentDpus|object|true|none|none|
|DefaultExecutorDpuSize|object|false|none|none|
|AdditionalConfigs|object|false|none|none|
|SparkProperties|object|false|none|none|

<h2 id="tocS_EngineVersion">EngineVersion</h2>
<!-- backwards compatibility -->
<a id="schemaengineversion"></a>
<a id="schema_EngineVersion"></a>
<a id="tocSengineversion"></a>
<a id="tocsengineversion"></a>

```json
{
  "SelectedEngineVersion": {},
  "EffectiveEngineVersion": {}
}
```

The Athena engine version for running queries, or the PySpark engine version for running sessions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SelectedEngineVersion|object|false|none|none|
|EffectiveEngineVersion|object|false|none|none|

<h2 id="tocS_EngineVersionsList">EngineVersionsList</h2>
<!-- backwards compatibility -->
<a id="schemaengineversionslist"></a>
<a id="schema_EngineVersionsList"></a>
<a id="tocSengineversionslist"></a>
<a id="tocsengineversionslist"></a>

```json
[
  {
    "SelectedEngineVersion": {},
    "EffectiveEngineVersion": {}
  }
]
```

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"string"
```

The error code returned when the query execution failed to process, or when the processing request for the named query failed.

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_ExecutionParameter">ExecutionParameter</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionparameter"></a>
<a id="schema_ExecutionParameter"></a>
<a id="tocSexecutionparameter"></a>
<a id="tocsexecutionparameter"></a>

```json
"string"
```

<h2 id="tocS_ExecutionParameters">ExecutionParameters</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionparameters"></a>
<a id="schema_ExecutionParameters"></a>
<a id="tocSexecutionparameters"></a>
<a id="tocsexecutionparameters"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ExecutorId">ExecutorId</h2>
<!-- backwards compatibility -->
<a id="schemaexecutorid"></a>
<a id="schema_ExecutorId"></a>
<a id="tocSexecutorid"></a>
<a id="tocsexecutorid"></a>

```json
"string"
```

<h2 id="tocS_ExecutorState">ExecutorState</h2>
<!-- backwards compatibility -->
<a id="schemaexecutorstate"></a>
<a id="schema_ExecutorState"></a>
<a id="tocSexecutorstate"></a>
<a id="tocsexecutorstate"></a>

```json
"CREATING"
```

<h2 id="tocS_ExecutorType">ExecutorType</h2>
<!-- backwards compatibility -->
<a id="schemaexecutortype"></a>
<a id="schema_ExecutorType"></a>
<a id="tocSexecutortype"></a>
<a id="tocsexecutortype"></a>

```json
"COORDINATOR"
```

<h2 id="tocS_ExecutorsSummary">ExecutorsSummary</h2>
<!-- backwards compatibility -->
<a id="schemaexecutorssummary"></a>
<a id="schema_ExecutorsSummary"></a>
<a id="tocSexecutorssummary"></a>
<a id="tocsexecutorssummary"></a>

```json
{
  "ExecutorId": {},
  "ExecutorType": {},
  "StartDateTime": {},
  "TerminationDateTime": {},
  "ExecutorState": {},
  "ExecutorSize": {}
}
```

Contains summary information about an executor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutorId|object|true|none|none|
|ExecutorType|object|false|none|none|
|StartDateTime|object|false|none|none|
|TerminationDateTime|object|false|none|none|
|ExecutorState|object|false|none|none|
|ExecutorSize|object|false|none|none|

<h2 id="tocS_ExecutorsSummaryList">ExecutorsSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaexecutorssummarylist"></a>
<a id="schema_ExecutorsSummaryList"></a>
<a id="tocSexecutorssummarylist"></a>
<a id="tocsexecutorssummarylist"></a>

```json
[
  {
    "ExecutorId": {},
    "ExecutorType": {},
    "StartDateTime": {},
    "TerminationDateTime": {},
    "ExecutorState": {},
    "ExecutorSize": {}
  }
]
```

<h2 id="tocS_NotebookMetadata">NotebookMetadata</h2>
<!-- backwards compatibility -->
<a id="schemanotebookmetadata"></a>
<a id="schema_NotebookMetadata"></a>
<a id="tocSnotebookmetadata"></a>
<a id="tocsnotebookmetadata"></a>

```json
{
  "NotebookId": {},
  "Name": {},
  "WorkGroup": {},
  "CreationTime": {},
  "Type": {},
  "LastModifiedTime": {}
}
```

Contains metadata for notebook, including the notebook name, ID, workgroup, and time created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotebookId|object|false|none|none|
|Name|object|false|none|none|
|WorkGroup|object|false|none|none|
|CreationTime|object|false|none|none|
|Type|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_Payload">Payload</h2>
<!-- backwards compatibility -->
<a id="schemapayload"></a>
<a id="schema_Payload"></a>
<a id="tocSpayload"></a>
<a id="tocspayload"></a>

```json
"string"
```

<h2 id="tocS_ExpressionString">ExpressionString</h2>
<!-- backwards compatibility -->
<a id="schemaexpressionstring"></a>
<a id="schema_ExpressionString"></a>
<a id="tocSexpressionstring"></a>
<a id="tocsexpressionstring"></a>

```json
"string"
```

<h2 id="tocS_FilterDefinition">FilterDefinition</h2>
<!-- backwards compatibility -->
<a id="schemafilterdefinition"></a>
<a id="schema_FilterDefinition"></a>
<a id="tocSfilterdefinition"></a>
<a id="tocsfilterdefinition"></a>

```json
{
  "Name": {}
}
```

A string for searching notebook names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_NamedQuery">NamedQuery</h2>
<!-- backwards compatibility -->
<a id="schemanamedquery"></a>
<a id="schema_NamedQuery"></a>
<a id="tocSnamedquery"></a>
<a id="tocsnamedquery"></a>

```json
{
  "Name": {},
  "Description": {},
  "Database": {},
  "QueryString": {},
  "NamedQueryId": {},
  "WorkGroup": {}
}
```

A query, where <code>QueryString</code> contains the SQL statements that make up the query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|Database|object|true|none|none|
|QueryString|object|true|none|none|
|NamedQueryId|object|false|none|none|
|WorkGroup|object|false|none|none|

<h2 id="tocS_PreparedStatement">PreparedStatement</h2>
<!-- backwards compatibility -->
<a id="schemapreparedstatement"></a>
<a id="schema_PreparedStatement"></a>
<a id="tocSpreparedstatement"></a>
<a id="tocspreparedstatement"></a>

```json
{
  "StatementName": {},
  "QueryStatement": {},
  "WorkGroupName": {},
  "Description": {},
  "LastModifiedTime": {}
}
```

A prepared SQL statement for use with Athena.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatementName|object|false|none|none|
|QueryStatement|object|false|none|none|
|WorkGroupName|object|false|none|none|
|Description|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_QueryExecutionId">QueryExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemaqueryexecutionid"></a>
<a id="schema_QueryExecutionId"></a>
<a id="tocSqueryexecutionid"></a>
<a id="tocsqueryexecutionid"></a>

```json
"string"
```

<h2 id="tocS_QueryExecution">QueryExecution</h2>
<!-- backwards compatibility -->
<a id="schemaqueryexecution"></a>
<a id="schema_QueryExecution"></a>
<a id="tocSqueryexecution"></a>
<a id="tocsqueryexecution"></a>

```json
{
  "QueryExecutionId": {},
  "Query": {},
  "StatementType": {},
  "ResultConfiguration": {
    "OutputLocation": {},
    "EncryptionConfiguration": {
      "EncryptionOption": {},
      "KmsKey": {}
    },
    "ExpectedBucketOwner": {},
    "AclConfiguration": {
      "S3AclOption": {}
    }
  },
  "ResultReuseConfiguration": {
    "ResultReuseByAgeConfiguration": {
      "Enabled": {},
      "MaxAgeInMinutes": {}
    }
  },
  "QueryExecutionContext": {
    "Database": {},
    "Catalog": {}
  },
  "Status": {
    "State": {},
    "StateChangeReason": {},
    "SubmissionDateTime": {},
    "CompletionDateTime": {},
    "AthenaError": {
      "ErrorCategory": {},
      "ErrorType": {},
      "Retryable": {},
      "ErrorMessage": {}
    }
  },
  "Statistics": {
    "EngineExecutionTimeInMillis": {},
    "DataScannedInBytes": {},
    "DataManifestLocation": {},
    "TotalExecutionTimeInMillis": {},
    "QueryQueueTimeInMillis": {},
    "QueryPlanningTimeInMillis": {},
    "ServiceProcessingTimeInMillis": {},
    "ResultReuseInformation": {
      "ReusedPreviousResult": {}
    }
  },
  "WorkGroup": {},
  "EngineVersion": {
    "SelectedEngineVersion": {},
    "EffectiveEngineVersion": {}
  },
  "ExecutionParameters": {},
  "SubstatementType": {}
}
```

Information about a single instance of a query execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryExecutionId|object|false|none|none|
|Query|object|false|none|none|
|StatementType|object|false|none|none|
|ResultConfiguration|object|false|none|none|
|ResultReuseConfiguration|object|false|none|none|
|QueryExecutionContext|object|false|none|none|
|Status|object|false|none|none|
|Statistics|object|false|none|none|
|WorkGroup|object|false|none|none|
|EngineVersion|object|false|none|none|
|ExecutionParameters|object|false|none|none|
|SubstatementType|object|false|none|none|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_MaxQueryResults">MaxQueryResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxqueryresults"></a>
<a id="schema_MaxQueryResults"></a>
<a id="tocSmaxqueryresults"></a>
<a id="tocsmaxqueryresults"></a>

```json
1
```

<h2 id="tocS_ResultSet">ResultSet</h2>
<!-- backwards compatibility -->
<a id="schemaresultset"></a>
<a id="schema_ResultSet"></a>
<a id="tocSresultset"></a>
<a id="tocsresultset"></a>

```json
{
  "Rows": {},
  "ResultSetMetadata": {
    "ColumnInfo": {}
  }
}
```

The metadata and rows that make up a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rows|object|false|none|none|
|ResultSetMetadata|object|false|none|none|

<h2 id="tocS_QueryRuntimeStatistics">QueryRuntimeStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaqueryruntimestatistics"></a>
<a id="schema_QueryRuntimeStatistics"></a>
<a id="tocSqueryruntimestatistics"></a>
<a id="tocsqueryruntimestatistics"></a>

```json
{
  "Timeline": {
    "QueryQueueTimeInMillis": {},
    "QueryPlanningTimeInMillis": {},
    "EngineExecutionTimeInMillis": {},
    "ServiceProcessingTimeInMillis": {},
    "TotalExecutionTimeInMillis": {}
  },
  "Rows": {
    "InputRows": {},
    "InputBytes": {},
    "OutputBytes": {},
    "OutputRows": {}
  },
  "OutputStage": {
    "StageId": {},
    "State": {},
    "OutputBytes": {},
    "OutputRows": {},
    "InputBytes": {},
    "InputRows": {},
    "ExecutionTime": {},
    "QueryStagePlan": {},
    "SubStages": {}
  }
}
```

The query execution timeline, statistics on input and output rows and bytes, and the different query stages that form the query execution plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timeline|[QueryRuntimeStatisticsTimeline](#schemaqueryruntimestatisticstimeline)|false|none|Timeline statistics such as query queue time, planning time, execution time, service processing time, and total execution time.|
|Rows|[QueryRuntimeStatisticsRows](#schemaqueryruntimestatisticsrows)|false|none|Statistics such as input rows and bytes read by the query, rows and bytes output by the query, and the number of rows written by the query.|
|OutputStage|object|false|none|none|

<h2 id="tocS_SessionConfiguration">SessionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasessionconfiguration"></a>
<a id="schema_SessionConfiguration"></a>
<a id="tocSsessionconfiguration"></a>
<a id="tocssessionconfiguration"></a>

```json
{
  "ExecutionRole": {},
  "WorkingDirectory": {},
  "IdleTimeoutSeconds": {},
  "EncryptionConfiguration": {
    "EncryptionOption": {},
    "KmsKey": {}
  }
}
```

Contains session configuration information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutionRole|object|false|none|none|
|WorkingDirectory|object|false|none|none|
|IdleTimeoutSeconds|object|false|none|none|
|EncryptionConfiguration|[EncryptionConfiguration](#schemaencryptionconfiguration)|false|none|If query and calculation results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key information.|

<h2 id="tocS_SessionStatus">SessionStatus</h2>
<!-- backwards compatibility -->
<a id="schemasessionstatus"></a>
<a id="schema_SessionStatus"></a>
<a id="tocSsessionstatus"></a>
<a id="tocssessionstatus"></a>

```json
{
  "StartDateTime": {},
  "LastModifiedDateTime": {},
  "EndDateTime": {},
  "IdleSinceDateTime": {},
  "State": {},
  "StateChangeReason": {}
}
```

Contains information about the status of a session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartDateTime|object|false|none|none|
|LastModifiedDateTime|object|false|none|none|
|EndDateTime|object|false|none|none|
|IdleSinceDateTime|object|false|none|none|
|State|object|false|none|none|
|StateChangeReason|object|false|none|none|

<h2 id="tocS_SessionStatistics">SessionStatistics</h2>
<!-- backwards compatibility -->
<a id="schemasessionstatistics"></a>
<a id="schema_SessionStatistics"></a>
<a id="tocSsessionstatistics"></a>
<a id="tocssessionstatistics"></a>

```json
{
  "DpuExecutionInMillis": {}
}
```

Contains statistics for a session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DpuExecutionInMillis|object|false|none|none|

<h2 id="tocS_TableMetadata">TableMetadata</h2>
<!-- backwards compatibility -->
<a id="schematablemetadata"></a>
<a id="schema_TableMetadata"></a>
<a id="tocStablemetadata"></a>
<a id="tocstablemetadata"></a>

```json
{
  "Name": {},
  "CreateTime": {},
  "LastAccessTime": {},
  "TableType": {},
  "Columns": {},
  "PartitionKeys": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains metadata for a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|CreateTime|object|false|none|none|
|LastAccessTime|object|false|none|none|
|TableType|object|false|none|none|
|Columns|object|false|none|none|
|PartitionKeys|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_WorkGroup">WorkGroup</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroup"></a>
<a id="schema_WorkGroup"></a>
<a id="tocSworkgroup"></a>
<a id="tocsworkgroup"></a>

```json
{
  "Name": {},
  "State": {},
  "Configuration": {
    "ResultConfiguration": {
      "OutputLocation": {},
      "EncryptionConfiguration": {
        "EncryptionOption": {},
        "KmsKey": {}
      },
      "ExpectedBucketOwner": {},
      "AclConfiguration": {
        "S3AclOption": {}
      }
    },
    "EnforceWorkGroupConfiguration": {},
    "PublishCloudWatchMetricsEnabled": {},
    "BytesScannedCutoffPerQuery": {},
    "RequesterPaysEnabled": {},
    "EngineVersion": {
      "SelectedEngineVersion": {},
      "EffectiveEngineVersion": {}
    },
    "AdditionalConfiguration": {},
    "ExecutionRole": {},
    "CustomerContentEncryptionConfiguration": {
      "KmsKey": {}
    },
    "EnableMinimumEncryptionConfiguration": {}
  },
  "Description": {},
  "CreationTime": {}
}
```

A workgroup, which contains a name, description, creation time, state, and other configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup enables you to isolate queries for you or your group of users from other queries in the same account, to configure the query results location and the encryption configuration (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch, and to establish per-query data usage control limits for all queries in a workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|State|object|false|none|none|
|Configuration|object|false|none|none|
|Description|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_NotebookType">NotebookType</h2>
<!-- backwards compatibility -->
<a id="schemanotebooktype"></a>
<a id="schema_NotebookType"></a>
<a id="tocSnotebooktype"></a>
<a id="tocsnotebooktype"></a>

```json
"IPYNB"
```

<h2 id="tocS_KeyString">KeyString</h2>
<!-- backwards compatibility -->
<a id="schemakeystring"></a>
<a id="schema_KeyString"></a>
<a id="tocSkeystring"></a>
<a id="tocskeystring"></a>

```json
"string"
```

<h2 id="tocS_MaxApplicationDPUSizesCount">MaxApplicationDPUSizesCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxapplicationdpusizescount"></a>
<a id="schema_MaxApplicationDPUSizesCount"></a>
<a id="tocSmaxapplicationdpusizescount"></a>
<a id="tocsmaxapplicationdpusizescount"></a>

```json
1
```

<h2 id="tocS_MaxCalculationsCount">MaxCalculationsCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxcalculationscount"></a>
<a id="schema_MaxCalculationsCount"></a>
<a id="tocSmaxcalculationscount"></a>
<a id="tocsmaxcalculationscount"></a>

```json
1
```

<h2 id="tocS_SessionManagerToken">SessionManagerToken</h2>
<!-- backwards compatibility -->
<a id="schemasessionmanagertoken"></a>
<a id="schema_SessionManagerToken"></a>
<a id="tocSsessionmanagertoken"></a>
<a id="tocssessionmanagertoken"></a>

```json
"string"
```

<h2 id="tocS_MaxCapacityReservationsCount">MaxCapacityReservationsCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxcapacityreservationscount"></a>
<a id="schema_MaxCapacityReservationsCount"></a>
<a id="tocSmaxcapacityreservationscount"></a>
<a id="tocsmaxcapacityreservationscount"></a>

```json
1
```

<h2 id="tocS_MaxDataCatalogsCount">MaxDataCatalogsCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxdatacatalogscount"></a>
<a id="schema_MaxDataCatalogsCount"></a>
<a id="tocSmaxdatacatalogscount"></a>
<a id="tocsmaxdatacatalogscount"></a>

```json
2
```

<h2 id="tocS_MaxDatabasesCount">MaxDatabasesCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxdatabasescount"></a>
<a id="schema_MaxDatabasesCount"></a>
<a id="tocSmaxdatabasescount"></a>
<a id="tocsmaxdatabasescount"></a>

```json
1
```

<h2 id="tocS_MaxEngineVersionsCount">MaxEngineVersionsCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxengineversionscount"></a>
<a id="schema_MaxEngineVersionsCount"></a>
<a id="tocSmaxengineversionscount"></a>
<a id="tocsmaxengineversionscount"></a>

```json
1
```

<h2 id="tocS_MaxListExecutorsCount">MaxListExecutorsCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxlistexecutorscount"></a>
<a id="schema_MaxListExecutorsCount"></a>
<a id="tocSmaxlistexecutorscount"></a>
<a id="tocsmaxlistexecutorscount"></a>

```json
1
```

<h2 id="tocS_MaxNamedQueriesCount">MaxNamedQueriesCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxnamedqueriescount"></a>
<a id="schema_MaxNamedQueriesCount"></a>
<a id="tocSmaxnamedqueriescount"></a>
<a id="tocsmaxnamedqueriescount"></a>

```json
0
```

<h2 id="tocS_MaxNotebooksCount">MaxNotebooksCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxnotebookscount"></a>
<a id="schema_MaxNotebooksCount"></a>
<a id="tocSmaxnotebookscount"></a>
<a id="tocsmaxnotebookscount"></a>

```json
1
```

<h2 id="tocS_NotebookMetadataArray">NotebookMetadataArray</h2>
<!-- backwards compatibility -->
<a id="schemanotebookmetadataarray"></a>
<a id="schema_NotebookMetadataArray"></a>
<a id="tocSnotebookmetadataarray"></a>
<a id="tocsnotebookmetadataarray"></a>

```json
[
  {
    "NotebookId": {},
    "Name": {},
    "WorkGroup": {},
    "CreationTime": {},
    "Type": {},
    "LastModifiedTime": {}
  }
]
```

<h2 id="tocS_MaxSessionsCount">MaxSessionsCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxsessionscount"></a>
<a id="schema_MaxSessionsCount"></a>
<a id="tocSmaxsessionscount"></a>
<a id="tocsmaxsessionscount"></a>

```json
1
```

<h2 id="tocS_NotebookSessionsList">NotebookSessionsList</h2>
<!-- backwards compatibility -->
<a id="schemanotebooksessionslist"></a>
<a id="schema_NotebookSessionsList"></a>
<a id="tocSnotebooksessionslist"></a>
<a id="tocsnotebooksessionslist"></a>

```json
[
  {
    "SessionId": {},
    "CreationTime": {}
  }
]
```

A list of notebook sessions.

<h2 id="tocS_MaxPreparedStatementsCount">MaxPreparedStatementsCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxpreparedstatementscount"></a>
<a id="schema_MaxPreparedStatementsCount"></a>
<a id="tocSmaxpreparedstatementscount"></a>
<a id="tocsmaxpreparedstatementscount"></a>

```json
1
```

<h2 id="tocS_PreparedStatementsList">PreparedStatementsList</h2>
<!-- backwards compatibility -->
<a id="schemapreparedstatementslist"></a>
<a id="schema_PreparedStatementsList"></a>
<a id="tocSpreparedstatementslist"></a>
<a id="tocspreparedstatementslist"></a>

```json
[
  {
    "StatementName": {},
    "LastModifiedTime": {}
  }
]
```

<h2 id="tocS_MaxQueryExecutionsCount">MaxQueryExecutionsCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxqueryexecutionscount"></a>
<a id="schema_MaxQueryExecutionsCount"></a>
<a id="tocSmaxqueryexecutionscount"></a>
<a id="tocsmaxqueryexecutionscount"></a>

```json
0
```

<h2 id="tocS_SessionState">SessionState</h2>
<!-- backwards compatibility -->
<a id="schemasessionstate"></a>
<a id="schema_SessionState"></a>
<a id="tocSsessionstate"></a>
<a id="tocssessionstate"></a>

```json
"CREATING"
```

<h2 id="tocS_SessionsList">SessionsList</h2>
<!-- backwards compatibility -->
<a id="schemasessionslist"></a>
<a id="schema_SessionsList"></a>
<a id="tocSsessionslist"></a>
<a id="tocssessionslist"></a>

```json
[
  {
    "SessionId": {},
    "Description": {},
    "EngineVersion": {
      "SelectedEngineVersion": {},
      "EffectiveEngineVersion": {}
    },
    "NotebookVersion": {},
    "Status": {
      "StartDateTime": {},
      "LastModifiedDateTime": {},
      "EndDateTime": {},
      "IdleSinceDateTime": {},
      "State": {},
      "StateChangeReason": {}
    }
  }
]
```

<h2 id="tocS_MaxTableMetadataCount">MaxTableMetadataCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxtablemetadatacount"></a>
<a id="schema_MaxTableMetadataCount"></a>
<a id="tocSmaxtablemetadatacount"></a>
<a id="tocsmaxtablemetadatacount"></a>

```json
1
```

<h2 id="tocS_TableMetadataList">TableMetadataList</h2>
<!-- backwards compatibility -->
<a id="schematablemetadatalist"></a>
<a id="schema_TableMetadataList"></a>
<a id="tocStablemetadatalist"></a>
<a id="tocstablemetadatalist"></a>

```json
[
  {
    "Name": {},
    "CreateTime": {},
    "LastAccessTime": {},
    "TableType": {},
    "Columns": {},
    "PartitionKeys": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_MaxTagsCount">MaxTagsCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxtagscount"></a>
<a id="schema_MaxTagsCount"></a>
<a id="tocSmaxtagscount"></a>
<a id="tocsmaxtagscount"></a>

```json
75
```

<h2 id="tocS_MaxWorkGroupsCount">MaxWorkGroupsCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxworkgroupscount"></a>
<a id="schema_MaxWorkGroupsCount"></a>
<a id="tocSmaxworkgroupscount"></a>
<a id="tocsmaxworkgroupscount"></a>

```json
1
```

<h2 id="tocS_WorkGroupsList">WorkGroupsList</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupslist"></a>
<a id="schema_WorkGroupsList"></a>
<a id="tocSworkgroupslist"></a>
<a id="tocsworkgroupslist"></a>

```json
[
  {
    "Name": {},
    "State": {},
    "Description": {},
    "CreationTime": {},
    "EngineVersion": {
      "SelectedEngineVersion": {},
      "EffectiveEngineVersion": {}
    }
  }
]
```

<h2 id="tocS_NamedQueryDescriptionString">NamedQueryDescriptionString</h2>
<!-- backwards compatibility -->
<a id="schemanamedquerydescriptionstring"></a>
<a id="schema_NamedQueryDescriptionString"></a>
<a id="tocSnamedquerydescriptionstring"></a>
<a id="tocsnamedquerydescriptionstring"></a>

```json
"string"
```

<h2 id="tocS_NotebookSessionSummary">NotebookSessionSummary</h2>
<!-- backwards compatibility -->
<a id="schemanotebooksessionsummary"></a>
<a id="schema_NotebookSessionSummary"></a>
<a id="tocSnotebooksessionsummary"></a>
<a id="tocsnotebooksessionsummary"></a>

```json
{
  "SessionId": {},
  "CreationTime": {}
}
```

Contains the notebook session ID and notebook session creation time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_ParametersMapValue">ParametersMapValue</h2>
<!-- backwards compatibility -->
<a id="schemaparametersmapvalue"></a>
<a id="schema_ParametersMapValue"></a>
<a id="tocSparametersmapvalue"></a>
<a id="tocsparametersmapvalue"></a>

```json
"string"
```

<h2 id="tocS_PreparedStatementSummary">PreparedStatementSummary</h2>
<!-- backwards compatibility -->
<a id="schemapreparedstatementsummary"></a>
<a id="schema_PreparedStatementSummary"></a>
<a id="tocSpreparedstatementsummary"></a>
<a id="tocspreparedstatementsummary"></a>

```json
{
  "StatementName": {},
  "LastModifiedTime": {}
}
```

The name and last modified time of the prepared statement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatementName|object|false|none|none|
|LastModifiedTime|object|false|none|none|

<h2 id="tocS_StatementType">StatementType</h2>
<!-- backwards compatibility -->
<a id="schemastatementtype"></a>
<a id="schema_StatementType"></a>
<a id="tocSstatementtype"></a>
<a id="tocsstatementtype"></a>

```json
"DDL"
```

<h2 id="tocS_ResultConfiguration">ResultConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaresultconfiguration"></a>
<a id="schema_ResultConfiguration"></a>
<a id="tocSresultconfiguration"></a>
<a id="tocsresultconfiguration"></a>

```json
{
  "OutputLocation": {},
  "EncryptionConfiguration": {
    "EncryptionOption": {},
    "KmsKey": {}
  },
  "ExpectedBucketOwner": {},
  "AclConfiguration": {
    "S3AclOption": {}
  }
}
```

The location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query and calculation results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputLocation|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|ExpectedBucketOwner|object|false|none|none|
|AclConfiguration|object|false|none|none|

<h2 id="tocS_ResultReuseConfiguration">ResultReuseConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaresultreuseconfiguration"></a>
<a id="schema_ResultReuseConfiguration"></a>
<a id="tocSresultreuseconfiguration"></a>
<a id="tocsresultreuseconfiguration"></a>

```json
{
  "ResultReuseByAgeConfiguration": {
    "Enabled": {},
    "MaxAgeInMinutes": {}
  }
}
```

Specifies the query result reuse behavior for the query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResultReuseByAgeConfiguration|object|false|none|none|

<h2 id="tocS_QueryExecutionContext">QueryExecutionContext</h2>
<!-- backwards compatibility -->
<a id="schemaqueryexecutioncontext"></a>
<a id="schema_QueryExecutionContext"></a>
<a id="tocSqueryexecutioncontext"></a>
<a id="tocsqueryexecutioncontext"></a>

```json
{
  "Database": {},
  "Catalog": {}
}
```

The database and data catalog context in which the query execution occurs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Database|object|false|none|none|
|Catalog|object|false|none|none|

<h2 id="tocS_QueryExecutionStatus">QueryExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaqueryexecutionstatus"></a>
<a id="schema_QueryExecutionStatus"></a>
<a id="tocSqueryexecutionstatus"></a>
<a id="tocsqueryexecutionstatus"></a>

```json
{
  "State": {},
  "StateChangeReason": {},
  "SubmissionDateTime": {},
  "CompletionDateTime": {},
  "AthenaError": {
    "ErrorCategory": {},
    "ErrorType": {},
    "Retryable": {},
    "ErrorMessage": {}
  }
}
```

The completion date, current state, submission time, and state change reason (if applicable) for the query execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|
|StateChangeReason|object|false|none|none|
|SubmissionDateTime|object|false|none|none|
|CompletionDateTime|object|false|none|none|
|AthenaError|object|false|none|none|

<h2 id="tocS_QueryExecutionStatistics">QueryExecutionStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaqueryexecutionstatistics"></a>
<a id="schema_QueryExecutionStatistics"></a>
<a id="tocSqueryexecutionstatistics"></a>
<a id="tocsqueryexecutionstatistics"></a>

```json
{
  "EngineExecutionTimeInMillis": {},
  "DataScannedInBytes": {},
  "DataManifestLocation": {},
  "TotalExecutionTimeInMillis": {},
  "QueryQueueTimeInMillis": {},
  "QueryPlanningTimeInMillis": {},
  "ServiceProcessingTimeInMillis": {},
  "ResultReuseInformation": {
    "ReusedPreviousResult": {}
  }
}
```

The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngineExecutionTimeInMillis|object|false|none|none|
|DataScannedInBytes|object|false|none|none|
|DataManifestLocation|object|false|none|none|
|TotalExecutionTimeInMillis|object|false|none|none|
|QueryQueueTimeInMillis|object|false|none|none|
|QueryPlanningTimeInMillis|object|false|none|none|
|ServiceProcessingTimeInMillis|object|false|none|none|
|ResultReuseInformation|object|false|none|none|

<h2 id="tocS_QueryExecutionState">QueryExecutionState</h2>
<!-- backwards compatibility -->
<a id="schemaqueryexecutionstate"></a>
<a id="schema_QueryExecutionState"></a>
<a id="tocSqueryexecutionstate"></a>
<a id="tocsqueryexecutionstate"></a>

```json
"QUEUED"
```

<h2 id="tocS_ResultReuseInformation">ResultReuseInformation</h2>
<!-- backwards compatibility -->
<a id="schemaresultreuseinformation"></a>
<a id="schema_ResultReuseInformation"></a>
<a id="tocSresultreuseinformation"></a>
<a id="tocsresultreuseinformation"></a>

```json
{
  "ReusedPreviousResult": {}
}
```

Contains information about whether the result of a previous query was reused.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReusedPreviousResult|object|true|none|none|

<h2 id="tocS_QueryRuntimeStatisticsTimeline">QueryRuntimeStatisticsTimeline</h2>
<!-- backwards compatibility -->
<a id="schemaqueryruntimestatisticstimeline"></a>
<a id="schema_QueryRuntimeStatisticsTimeline"></a>
<a id="tocSqueryruntimestatisticstimeline"></a>
<a id="tocsqueryruntimestatisticstimeline"></a>

```json
{
  "QueryQueueTimeInMillis": {},
  "QueryPlanningTimeInMillis": {},
  "EngineExecutionTimeInMillis": {},
  "ServiceProcessingTimeInMillis": {},
  "TotalExecutionTimeInMillis": {}
}
```

Timeline statistics such as query queue time, planning time, execution time, service processing time, and total execution time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryQueueTimeInMillis|object|false|none|none|
|QueryPlanningTimeInMillis|object|false|none|none|
|EngineExecutionTimeInMillis|object|false|none|none|
|ServiceProcessingTimeInMillis|object|false|none|none|
|TotalExecutionTimeInMillis|object|false|none|none|

<h2 id="tocS_QueryRuntimeStatisticsRows">QueryRuntimeStatisticsRows</h2>
<!-- backwards compatibility -->
<a id="schemaqueryruntimestatisticsrows"></a>
<a id="schema_QueryRuntimeStatisticsRows"></a>
<a id="tocSqueryruntimestatisticsrows"></a>
<a id="tocsqueryruntimestatisticsrows"></a>

```json
{
  "InputRows": {},
  "InputBytes": {},
  "OutputBytes": {},
  "OutputRows": {}
}
```

Statistics such as input rows and bytes read by the query, rows and bytes output by the query, and the number of rows written by the query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputRows|object|false|none|none|
|InputBytes|object|false|none|none|
|OutputBytes|object|false|none|none|
|OutputRows|object|false|none|none|

<h2 id="tocS_QueryStage">QueryStage</h2>
<!-- backwards compatibility -->
<a id="schemaquerystage"></a>
<a id="schema_QueryStage"></a>
<a id="tocSquerystage"></a>
<a id="tocsquerystage"></a>

```json
{
  "StageId": {},
  "State": {},
  "OutputBytes": {},
  "OutputRows": {},
  "InputBytes": {},
  "InputRows": {},
  "ExecutionTime": {},
  "QueryStagePlan": {
    "Name": {},
    "Identifier": {},
    "Children": {},
    "RemoteSources": {}
  },
  "SubStages": {}
}
```

Stage statistics such as input and output rows and bytes, execution time and stage state. This information also includes substages and the query stage plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StageId|object|false|none|none|
|State|object|false|none|none|
|OutputBytes|object|false|none|none|
|OutputRows|object|false|none|none|
|InputBytes|object|false|none|none|
|InputRows|object|false|none|none|
|ExecutionTime|object|false|none|none|
|QueryStagePlan|object|false|none|none|
|SubStages|object|false|none|none|

<h2 id="tocS_QueryStagePlanNode">QueryStagePlanNode</h2>
<!-- backwards compatibility -->
<a id="schemaquerystageplannode"></a>
<a id="schema_QueryStagePlanNode"></a>
<a id="tocSquerystageplannode"></a>
<a id="tocsquerystageplannode"></a>

```json
{
  "Name": {},
  "Identifier": {},
  "Children": {},
  "RemoteSources": {}
}
```

Stage plan information such as name, identifier, sub plans, and remote sources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Identifier|object|false|none|none|
|Children|object|false|none|none|
|RemoteSources|object|false|none|none|

<h2 id="tocS_QueryStages">QueryStages</h2>
<!-- backwards compatibility -->
<a id="schemaquerystages"></a>
<a id="schema_QueryStages"></a>
<a id="tocSquerystages"></a>
<a id="tocsquerystages"></a>

```json
[
  {
    "StageId": {},
    "State": {},
    "OutputBytes": {},
    "OutputRows": {},
    "InputBytes": {},
    "InputRows": {},
    "ExecutionTime": {},
    "QueryStagePlan": {},
    "SubStages": {}
  }
]
```

<h2 id="tocS_QueryStagePlanNodes">QueryStagePlanNodes</h2>
<!-- backwards compatibility -->
<a id="schemaquerystageplannodes"></a>
<a id="schema_QueryStagePlanNodes"></a>
<a id="tocSquerystageplannodes"></a>
<a id="tocsquerystageplannodes"></a>

```json
[
  {
    "Name": {},
    "Identifier": {},
    "Children": {},
    "RemoteSources": {}
  }
]
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

<h2 id="tocS_ResultOutputLocation">ResultOutputLocation</h2>
<!-- backwards compatibility -->
<a id="schemaresultoutputlocation"></a>
<a id="schema_ResultOutputLocation"></a>
<a id="tocSresultoutputlocation"></a>
<a id="tocsresultoutputlocation"></a>

```json
"string"
```

<h2 id="tocS_ResultConfigurationUpdates">ResultConfigurationUpdates</h2>
<!-- backwards compatibility -->
<a id="schemaresultconfigurationupdates"></a>
<a id="schema_ResultConfigurationUpdates"></a>
<a id="tocSresultconfigurationupdates"></a>
<a id="tocsresultconfigurationupdates"></a>

```json
{
  "OutputLocation": {},
  "RemoveOutputLocation": {},
  "EncryptionConfiguration": {
    "EncryptionOption": {},
    "KmsKey": {}
  },
  "RemoveEncryptionConfiguration": {},
  "ExpectedBucketOwner": {},
  "RemoveExpectedBucketOwner": {},
  "AclConfiguration": {
    "S3AclOption": {}
  },
  "RemoveAclConfiguration": {}
}
```

The information about the updates in the query results, such as output location and encryption configuration for the query results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputLocation|object|false|none|none|
|RemoveOutputLocation|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|RemoveEncryptionConfiguration|object|false|none|none|
|ExpectedBucketOwner|object|false|none|none|
|RemoveExpectedBucketOwner|object|false|none|none|
|AclConfiguration|object|false|none|none|
|RemoveAclConfiguration|object|false|none|none|

<h2 id="tocS_ResultReuseByAgeConfiguration">ResultReuseByAgeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaresultreusebyageconfiguration"></a>
<a id="schema_ResultReuseByAgeConfiguration"></a>
<a id="tocSresultreusebyageconfiguration"></a>
<a id="tocsresultreusebyageconfiguration"></a>

```json
{
  "Enabled": {},
  "MaxAgeInMinutes": {}
}
```

Specifies whether previous query results are reused, and if so, their maximum age.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|MaxAgeInMinutes|object|false|none|none|

<h2 id="tocS_RowList">RowList</h2>
<!-- backwards compatibility -->
<a id="schemarowlist"></a>
<a id="schema_RowList"></a>
<a id="tocSrowlist"></a>
<a id="tocsrowlist"></a>

```json
[
  {
    "Data": {}
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
  "ColumnInfo": {}
}
```

The metadata that describes the column structure and data types of a table of query results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ColumnInfo|object|false|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_datumList">datumList</h2>
<!-- backwards compatibility -->
<a id="schemadatumlist"></a>
<a id="schema_datumList"></a>
<a id="tocSdatumlist"></a>
<a id="tocsdatumlist"></a>

```json
[
  {
    "VarCharValue": {}
  }
]
```

<h2 id="tocS_Row">Row</h2>
<!-- backwards compatibility -->
<a id="schemarow"></a>
<a id="schema_Row"></a>
<a id="tocSrow"></a>
<a id="tocsrow"></a>

```json
{
  "Data": {}
}
```

The rows that make up a query result table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|false|none|none|

<h2 id="tocS_SessionIdleTimeoutInMinutes">SessionIdleTimeoutInMinutes</h2>
<!-- backwards compatibility -->
<a id="schemasessionidletimeoutinminutes"></a>
<a id="schema_SessionIdleTimeoutInMinutes"></a>
<a id="tocSsessionidletimeoutinminutes"></a>
<a id="tocssessionidletimeoutinminutes"></a>

```json
1
```

<h2 id="tocS_SessionSummary">SessionSummary</h2>
<!-- backwards compatibility -->
<a id="schemasessionsummary"></a>
<a id="schema_SessionSummary"></a>
<a id="tocSsessionsummary"></a>
<a id="tocssessionsummary"></a>

```json
{
  "SessionId": {},
  "Description": {},
  "EngineVersion": {
    "SelectedEngineVersion": {},
    "EffectiveEngineVersion": {}
  },
  "NotebookVersion": {},
  "Status": {
    "StartDateTime": {},
    "LastModifiedDateTime": {},
    "EndDateTime": {},
    "IdleSinceDateTime": {},
    "State": {},
    "StateChangeReason": {}
  }
}
```

Contains summary information about a session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SessionId|object|false|none|none|
|Description|object|false|none|none|
|EngineVersion|object|false|none|none|
|NotebookVersion|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_TableTypeString">TableTypeString</h2>
<!-- backwards compatibility -->
<a id="schematabletypestring"></a>
<a id="schema_TableTypeString"></a>
<a id="tocStabletypestring"></a>
<a id="tocstabletypestring"></a>

```json
"string"
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

A label that you assign to a resource. Athena resources include workgroups, data catalogs, and capacity reservations. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena resources by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter the resources in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

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

<h2 id="tocS_UnprocessedNamedQueryId">UnprocessedNamedQueryId</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessednamedqueryid"></a>
<a id="schema_UnprocessedNamedQueryId"></a>
<a id="tocSunprocessednamedqueryid"></a>
<a id="tocsunprocessednamedqueryid"></a>

```json
{
  "NamedQueryId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Information about a named query ID that could not be processed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamedQueryId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_UnprocessedPreparedStatementName">UnprocessedPreparedStatementName</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedpreparedstatementname"></a>
<a id="schema_UnprocessedPreparedStatementName"></a>
<a id="tocSunprocessedpreparedstatementname"></a>
<a id="tocsunprocessedpreparedstatementname"></a>

```json
{
  "StatementName": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

The name of a prepared statement that could not be returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatementName|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_UnprocessedQueryExecutionId">UnprocessedQueryExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedqueryexecutionid"></a>
<a id="schema_UnprocessedQueryExecutionId"></a>
<a id="tocSunprocessedqueryexecutionid"></a>
<a id="tocsunprocessedqueryexecutionid"></a>

```json
{
  "QueryExecutionId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Describes a query execution that failed to process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryExecutionId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_WorkGroupConfigurationUpdates">WorkGroupConfigurationUpdates</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupconfigurationupdates"></a>
<a id="schema_WorkGroupConfigurationUpdates"></a>
<a id="tocSworkgroupconfigurationupdates"></a>
<a id="tocsworkgroupconfigurationupdates"></a>

```json
{
  "EnforceWorkGroupConfiguration": {},
  "ResultConfigurationUpdates": {
    "OutputLocation": {},
    "RemoveOutputLocation": {},
    "EncryptionConfiguration": {
      "EncryptionOption": {},
      "KmsKey": {}
    },
    "RemoveEncryptionConfiguration": {},
    "ExpectedBucketOwner": {},
    "RemoveExpectedBucketOwner": {},
    "AclConfiguration": {
      "S3AclOption": {}
    },
    "RemoveAclConfiguration": {}
  },
  "PublishCloudWatchMetricsEnabled": {},
  "BytesScannedCutoffPerQuery": {},
  "RemoveBytesScannedCutoffPerQuery": {},
  "RequesterPaysEnabled": {},
  "EngineVersion": {
    "SelectedEngineVersion": {},
    "EffectiveEngineVersion": {}
  },
  "RemoveCustomerContentEncryptionConfiguration": {},
  "AdditionalConfiguration": {},
  "ExecutionRole": {},
  "CustomerContentEncryptionConfiguration": {
    "KmsKey": {}
  },
  "EnableMinimumEncryptionConfiguration": {}
}
```

The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnforceWorkGroupConfiguration|object|false|none|none|
|ResultConfigurationUpdates|object|false|none|none|
|PublishCloudWatchMetricsEnabled|object|false|none|none|
|BytesScannedCutoffPerQuery|object|false|none|none|
|RemoveBytesScannedCutoffPerQuery|object|false|none|none|
|RequesterPaysEnabled|object|false|none|none|
|EngineVersion|object|false|none|none|
|RemoveCustomerContentEncryptionConfiguration|object|false|none|none|
|AdditionalConfiguration|object|false|none|none|
|ExecutionRole|object|false|none|none|
|CustomerContentEncryptionConfiguration|[CustomerContentEncryptionConfiguration](#schemacustomercontentencryptionconfiguration)|false|none|Specifies the KMS key that is used to encrypt the user's data stores in Athena. This setting does not apply to Athena SQL workgroups.|
|EnableMinimumEncryptionConfiguration|object|false|none|none|

<h2 id="tocS_WorkGroupState">WorkGroupState</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupstate"></a>
<a id="schema_WorkGroupState"></a>
<a id="tocSworkgroupstate"></a>
<a id="tocsworkgroupstate"></a>

```json
"ENABLED"
```

<h2 id="tocS_WorkGroupSummary">WorkGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupsummary"></a>
<a id="schema_WorkGroupSummary"></a>
<a id="tocSworkgroupsummary"></a>
<a id="tocsworkgroupsummary"></a>

```json
{
  "Name": {},
  "State": {},
  "Description": {},
  "CreationTime": {},
  "EngineVersion": {
    "SelectedEngineVersion": {},
    "EffectiveEngineVersion": {}
  }
}
```

The summary information for the workgroup, which includes its name, state, description, and the date and time it was created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|State|object|false|none|none|
|Description|object|false|none|none|
|CreationTime|object|false|none|none|
|EngineVersion|object|false|none|none|
