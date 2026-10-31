<h1 id="amazon-machine-learning">Amazon Machine Learning v2014-12-12</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Definition of the public APIs exposed by Amazon Machine Learning

Base URLs:

* <a href="http://machinelearning.us-east-1.amazonaws.com">http://machinelearning.us-east-1.amazonaws.com</a> - The Amazon Machine Learning multi-region endpoint

* <a href="https://machinelearning.us-east-1.amazonaws.com">https://machinelearning.us-east-1.amazonaws.com</a> - The Amazon Machine Learning multi-region endpoint

* <a href="http://machinelearning.cn-north-1.amazonaws.com.cn">http://machinelearning.cn-north-1.amazonaws.com.cn</a> - The Amazon Machine Learning endpoint for China (Beijing) and China (Ningxia)

* <a href="https://machinelearning.cn-north-1.amazonaws.com.cn">https://machinelearning.cn-north-1.amazonaws.com.cn</a> - The Amazon Machine Learning endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/machinelearning/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-machine-learning-default">Default</h1>

## AddTags

<a id="opIdAddTags"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.AddTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.AddTags' \
  -d '{
    "Tags": {},
    "ResourceId": {},
    "ResourceType": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.AddTags`

Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value. If you add a tag using a key that is already associated with the ML object, <code>AddTags</code> updates the tag's value.

> Body parameter

```json
{
  "Tags": {},
  "ResourceId": {},
  "ResourceType": {}
}
```

<h3 id="addtags-parameters">Parameters</h3>

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
|body|body|[AddTagsInput](#schemaaddtagsinput)|true|none|
|» Tags|body|object|true|none|
|» ResourceId|body|object|true|none|
|» ResourceType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.AddTags|

> Example responses

> 200 Response

```json
{
  "ResourceId": {},
  "ResourceType": {}
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

<h3 id="addtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddTagsOutput](#schemaaddtagsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|482|482|TagLimitExceededException|[TagLimitExceededException](#schemataglimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBatchPrediction

<a id="opIdCreateBatchPrediction"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.CreateBatchPrediction' \
  -d '{
    "BatchPredictionId": {},
    "BatchPredictionName": {},
    "MLModelId": {},
    "BatchPredictionDataSourceId": {},
    "OutputUri": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction`

<p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data files referenced by the <code>DataSource</code> as information sources. </p> <p> <code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>. After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears, the results are available in the location specified by the <code>OutputUri</code> parameter.</p>

> Body parameter

```json
{
  "BatchPredictionId": {},
  "BatchPredictionName": {},
  "MLModelId": {},
  "BatchPredictionDataSourceId": {},
  "OutputUri": {}
}
```

<h3 id="createbatchprediction-parameters">Parameters</h3>

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
|body|body|[CreateBatchPredictionInput](#schemacreatebatchpredictioninput)|true|none|
|» BatchPredictionId|body|object|true|none|
|» BatchPredictionName|body|object|false|none|
|» MLModelId|body|object|true|none|
|» BatchPredictionDataSourceId|body|object|true|none|
|» OutputUri|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.CreateBatchPrediction|

> Example responses

> 200 Response

```json
{
  "BatchPredictionId": {}
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

<h3 id="createbatchprediction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBatchPredictionOutput](#schemacreatebatchpredictionoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataSourceFromRDS

<a id="opIdCreateDataSourceFromRDS"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.CreateDataSourceFromRDS' \
  -d '{
    "DataSourceId": {},
    "DataSourceName": {},
    "RDSData": {
      "DatabaseInformation": {
        "InstanceIdentifier": {},
        "DatabaseName": "string"
      },
      "SelectSqlQuery": {},
      "DatabaseCredentials": {
        "Username": "string",
        "Password": "stringst"
      },
      "S3StagingLocation": {},
      "DataRearrangement": {},
      "DataSchema": {},
      "DataSchemaUri": {},
      "ResourceRole": {},
      "ServiceRole": {},
      "SubnetId": {},
      "SecurityGroupIds": {}
    },
    "RoleARN": {},
    "ComputeStatistics": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS`

<p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used only to perform <code>&gt;CreateMLModel</code>&gt;, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p>

> Body parameter

```json
{
  "DataSourceId": {},
  "DataSourceName": {},
  "RDSData": {
    "DatabaseInformation": {
      "InstanceIdentifier": {},
      "DatabaseName": "string"
    },
    "SelectSqlQuery": {},
    "DatabaseCredentials": {
      "Username": "string",
      "Password": "stringst"
    },
    "S3StagingLocation": {},
    "DataRearrangement": {},
    "DataSchema": {},
    "DataSchemaUri": {},
    "ResourceRole": {},
    "ServiceRole": {},
    "SubnetId": {},
    "SecurityGroupIds": {}
  },
  "RoleARN": {},
  "ComputeStatistics": {}
}
```

<h3 id="createdatasourcefromrds-parameters">Parameters</h3>

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
|body|body|[CreateDataSourceFromRDSInput](#schemacreatedatasourcefromrdsinput)|true|none|
|» DataSourceId|body|object|true|none|
|» DataSourceName|body|object|false|none|
|» RDSData|body|object|true|none|
|» » DatabaseInformation|body|object|true|none|
|» » » InstanceIdentifier|body|object|true|none|
|» » » DatabaseName|body|[RDSDatabaseName](#schemardsdatabasename)|true|The name of a database hosted on an RDS DB instance.|
|» » SelectSqlQuery|body|object|true|none|
|» » DatabaseCredentials|body|object|true|none|
|» » » Username|body|[RDSDatabaseUsername](#schemardsdatabaseusername)|true|The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.|
|» » » Password|body|[RDSDatabasePassword](#schemardsdatabasepassword)|true|The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.|
|» » S3StagingLocation|body|object|true|none|
|» » DataRearrangement|body|object|false|none|
|» » DataSchema|body|object|false|none|
|» » DataSchemaUri|body|object|false|none|
|» » ResourceRole|body|object|true|none|
|» » ServiceRole|body|object|true|none|
|» » SubnetId|body|object|true|none|
|» » SecurityGroupIds|body|object|true|none|
|» RoleARN|body|object|true|none|
|» ComputeStatistics|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.CreateDataSourceFromRDS|

> Example responses

> 200 Response

```json
{
  "DataSourceId": {}
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

<h3 id="createdatasourcefromrds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDataSourceFromRDSOutput](#schemacreatedatasourcefromrdsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataSourceFromRedshift

<a id="opIdCreateDataSourceFromRedshift"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.CreateDataSourceFromRedshift' \
  -d '{
    "DataSourceId": {},
    "DataSourceName": {},
    "DataSpec": {
      "DatabaseInformation": {
        "DatabaseName": "string",
        "ClusterIdentifier": "string"
      },
      "SelectSqlQuery": {},
      "DatabaseCredentials": {
        "Username": "string",
        "Password": "stringst"
      },
      "S3StagingLocation": {},
      "DataRearrangement": {},
      "DataSchema": {},
      "DataSchemaUri": {}
    },
    "RoleARN": {},
    "ComputeStatistics": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift`

<p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A <code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an <code>Unload</code> command in Amazon Redshift to transfer the result set of the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p> <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p> <p>You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call <code>GetDataSource</code> for an existing datasource and copy the values to a <code>CreateDataSource</code> call. Change the settings that you want to change and make sure that all required fields have the appropriate values.</p>

> Body parameter

```json
{
  "DataSourceId": {},
  "DataSourceName": {},
  "DataSpec": {
    "DatabaseInformation": {
      "DatabaseName": "string",
      "ClusterIdentifier": "string"
    },
    "SelectSqlQuery": {},
    "DatabaseCredentials": {
      "Username": "string",
      "Password": "stringst"
    },
    "S3StagingLocation": {},
    "DataRearrangement": {},
    "DataSchema": {},
    "DataSchemaUri": {}
  },
  "RoleARN": {},
  "ComputeStatistics": {}
}
```

<h3 id="createdatasourcefromredshift-parameters">Parameters</h3>

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
|body|body|[CreateDataSourceFromRedshiftInput](#schemacreatedatasourcefromredshiftinput)|true|none|
|» DataSourceId|body|object|true|none|
|» DataSourceName|body|object|false|none|
|» DataSpec|body|object|true|none|
|» » DatabaseInformation|body|object|true|none|
|» » » DatabaseName|body|[RedshiftDatabaseName](#schemaredshiftdatabasename)|true|The name of a database hosted on an Amazon Redshift cluster.|
|» » » ClusterIdentifier|body|[RedshiftClusterIdentifier](#schemaredshiftclusteridentifier)|true|The ID of an Amazon Redshift cluster.|
|» » SelectSqlQuery|body|object|true|none|
|» » DatabaseCredentials|body|object|true|none|
|» » » Username|body|[RedshiftDatabaseUsername](#schemaredshiftdatabaseusername)|true|A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.|
|» » » Password|body|[RedshiftDatabasePassword](#schemaredshiftdatabasepassword)|true|A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.|
|» » S3StagingLocation|body|object|true|none|
|» » DataRearrangement|body|object|false|none|
|» » DataSchema|body|object|false|none|
|» » DataSchemaUri|body|object|false|none|
|» RoleARN|body|object|true|none|
|» ComputeStatistics|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.CreateDataSourceFromRedshift|

> Example responses

> 200 Response

```json
{
  "DataSourceId": {}
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

<h3 id="createdatasourcefromredshift-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDataSourceFromRedshiftOutput](#schemacreatedatasourcefromredshiftoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataSourceFromS3

<a id="opIdCreateDataSourceFromS3"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.CreateDataSourceFromS3' \
  -d '{
    "DataSourceId": {},
    "DataSourceName": {},
    "DataSpec": {
      "DataLocationS3": {},
      "DataRearrangement": {},
      "DataSchema": {},
      "DataSchemaLocationS3": {}
    },
    "ComputeStatistics": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3`

<p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> has been created and is ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code> or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observation data used in a <code>DataSource</code> should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the <code>DataSource</code>. </p> <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p>

> Body parameter

```json
{
  "DataSourceId": {},
  "DataSourceName": {},
  "DataSpec": {
    "DataLocationS3": {},
    "DataRearrangement": {},
    "DataSchema": {},
    "DataSchemaLocationS3": {}
  },
  "ComputeStatistics": {}
}
```

<h3 id="createdatasourcefroms3-parameters">Parameters</h3>

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
|body|body|[CreateDataSourceFromS3Input](#schemacreatedatasourcefroms3input)|true|none|
|» DataSourceId|body|object|true|none|
|» DataSourceName|body|object|false|none|
|» DataSpec|body|object|true|none|
|» » DataLocationS3|body|object|true|none|
|» » DataRearrangement|body|object|false|none|
|» » DataSchema|body|object|false|none|
|» » DataSchemaLocationS3|body|object|false|none|
|» ComputeStatistics|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.CreateDataSourceFromS3|

> Example responses

> 200 Response

```json
{
  "DataSourceId": {}
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

<h3 id="createdatasourcefroms3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDataSourceFromS3Output](#schemacreatedatasourcefroms3output)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEvaluation

<a id="opIdCreateEvaluation"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.CreateEvaluation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.CreateEvaluation' \
  -d '{
    "EvaluationId": {},
    "EvaluationName": {},
    "MLModelId": {},
    "EvaluationDataSourceId": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.CreateEvaluation`

<p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code> for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the <code>MLModel</code> functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>. </p> <p> <code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>

> Body parameter

```json
{
  "EvaluationId": {},
  "EvaluationName": {},
  "MLModelId": {},
  "EvaluationDataSourceId": {}
}
```

<h3 id="createevaluation-parameters">Parameters</h3>

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
|body|body|[CreateEvaluationInput](#schemacreateevaluationinput)|true|none|
|» EvaluationId|body|object|true|none|
|» EvaluationName|body|object|false|none|
|» MLModelId|body|object|true|none|
|» EvaluationDataSourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.CreateEvaluation|

> Example responses

> 200 Response

```json
{
  "EvaluationId": {}
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

<h3 id="createevaluation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEvaluationOutput](#schemacreateevaluationoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMLModel

<a id="opIdCreateMLModel"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.CreateMLModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.CreateMLModel' \
  -d '{
    "MLModelId": {},
    "MLModelName": {},
    "MLModelType": {},
    "Parameters": {
      "property1": "string",
      "property2": "string"
    },
    "TrainingDataSourceId": {},
    "Recipe": {},
    "RecipeUri": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.CreateMLModel`

<p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as information sources. </p> <p>An <code>MLModel</code> is nearly immutable. Users can update only the <code>MLModelName</code> and the <code>ScoreThreshold</code> in an <code>MLModel</code> without creating a new <code>MLModel</code>. </p> <p> <code>CreateMLModel</code> is an asynchronous operation. In response to <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>MLModel</code> status to <code>PENDING</code>. After the <code>MLModel</code> has been created and ready is for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetMLModel</code> operation to check the progress of the <code>MLModel</code> during the creation operation.</p> <p> <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics, which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or <code>CreateDataSourceFromRedshift</code> operations. </p>

> Body parameter

```json
{
  "MLModelId": {},
  "MLModelName": {},
  "MLModelType": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  },
  "TrainingDataSourceId": {},
  "Recipe": {},
  "RecipeUri": {}
}
```

<h3 id="createmlmodel-parameters">Parameters</h3>

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
|body|body|[CreateMLModelInput](#schemacreatemlmodelinput)|true|none|
|» MLModelId|body|object|true|none|
|» MLModelName|body|object|false|none|
|» MLModelType|body|object|true|none|
|» Parameters|body|object|false|none|
|» » **additionalProperties**|body|[StringType](#schemastringtype)|false|String type.|
|» TrainingDataSourceId|body|object|true|none|
|» Recipe|body|object|false|none|
|» RecipeUri|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.CreateMLModel|

> Example responses

> 200 Response

```json
{
  "MLModelId": {}
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

<h3 id="createmlmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMLModelOutput](#schemacreatemlmodeloutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRealtimeEndpoint

<a id="opIdCreateRealtimeEndpoint"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.CreateRealtimeEndpoint' \
  -d '{
    "MLModelId": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint`

Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.

> Body parameter

```json
{
  "MLModelId": {}
}
```

<h3 id="createrealtimeendpoint-parameters">Parameters</h3>

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
|body|body|[CreateRealtimeEndpointInput](#schemacreaterealtimeendpointinput)|true|none|
|» MLModelId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.CreateRealtimeEndpoint|

> Example responses

> 200 Response

```json
{
  "MLModelId": {},
  "RealtimeEndpointInfo": {
    "PeakRequestsPerSecond": {},
    "CreatedAt": {},
    "EndpointUrl": {},
    "EndpointStatus": {}
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

<h3 id="createrealtimeendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRealtimeEndpointOutput](#schemacreaterealtimeendpointoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBatchPrediction

<a id="opIdDeleteBatchPrediction"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.DeleteBatchPrediction' \
  -d '{
    "BatchPredictionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction`

<p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p> <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a> operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>

> Body parameter

```json
{
  "BatchPredictionId": {}
}
```

<h3 id="deletebatchprediction-parameters">Parameters</h3>

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
|body|body|[DeleteBatchPredictionInput](#schemadeletebatchpredictioninput)|true|none|
|» BatchPredictionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.DeleteBatchPrediction|

> Example responses

> 200 Response

```json
{
  "BatchPredictionId": {}
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

<h3 id="deletebatchprediction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBatchPredictionOutput](#schemadeletebatchpredictionoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataSource

<a id="opIdDeleteDataSource"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.DeleteDataSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.DeleteDataSource' \
  -d '{
    "DataSourceId": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.DeleteDataSource`

<p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p> <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p> <p> <b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>

> Body parameter

```json
{
  "DataSourceId": {}
}
```

<h3 id="deletedatasource-parameters">Parameters</h3>

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
|body|body|[DeleteDataSourceInput](#schemadeletedatasourceinput)|true|none|
|» DataSourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.DeleteDataSource|

> Example responses

> 200 Response

```json
{
  "DataSourceId": {}
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

<h3 id="deletedatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDataSourceOutput](#schemadeletedatasourceoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEvaluation

<a id="opIdDeleteEvaluation"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.DeleteEvaluation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.DeleteEvaluation' \
  -d '{
    "EvaluationId": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.DeleteEvaluation`

<p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p> <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p> <p> <b>Caution:</b> The results of the <code>DeleteEvaluation</code> operation are irreversible.</p>

> Body parameter

```json
{
  "EvaluationId": {}
}
```

<h3 id="deleteevaluation-parameters">Parameters</h3>

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
|body|body|[DeleteEvaluationInput](#schemadeleteevaluationinput)|true|none|
|» EvaluationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.DeleteEvaluation|

> Example responses

> 200 Response

```json
{
  "EvaluationId": {}
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

<h3 id="deleteevaluation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEvaluationOutput](#schemadeleteevaluationoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMLModel

<a id="opIdDeleteMLModel"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.DeleteMLModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.DeleteMLModel' \
  -d '{
    "MLModelId": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.DeleteMLModel`

<p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p> <p>After using the <code>DeleteMLModel</code> operation, you can use the <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>

> Body parameter

```json
{
  "MLModelId": {}
}
```

<h3 id="deletemlmodel-parameters">Parameters</h3>

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
|body|body|[DeleteMLModelInput](#schemadeletemlmodelinput)|true|none|
|» MLModelId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.DeleteMLModel|

> Example responses

> 200 Response

```json
{
  "MLModelId": {}
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

<h3 id="deletemlmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMLModelOutput](#schemadeletemlmodeloutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRealtimeEndpoint

<a id="opIdDeleteRealtimeEndpoint"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.DeleteRealtimeEndpoint' \
  -d '{
    "MLModelId": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint`

Deletes a real time endpoint of an <code>MLModel</code>.

> Body parameter

```json
{
  "MLModelId": {}
}
```

<h3 id="deleterealtimeendpoint-parameters">Parameters</h3>

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
|body|body|[DeleteRealtimeEndpointInput](#schemadeleterealtimeendpointinput)|true|none|
|» MLModelId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.DeleteRealtimeEndpoint|

> Example responses

> 200 Response

```json
{
  "MLModelId": {},
  "RealtimeEndpointInfo": {
    "PeakRequestsPerSecond": {},
    "CreatedAt": {},
    "EndpointUrl": {},
    "EndpointStatus": {}
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

<h3 id="deleterealtimeendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRealtimeEndpointOutput](#schemadeleterealtimeendpointoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTags

<a id="opIdDeleteTags"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.DeleteTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.DeleteTags' \
  -d '{
    "TagKeys": {},
    "ResourceId": {},
    "ResourceType": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.DeleteTags`

<p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p> <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>

> Body parameter

```json
{
  "TagKeys": {},
  "ResourceId": {},
  "ResourceType": {}
}
```

<h3 id="deletetags-parameters">Parameters</h3>

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
|body|body|[DeleteTagsInput](#schemadeletetagsinput)|true|none|
|» TagKeys|body|object|true|none|
|» ResourceId|body|object|true|none|
|» ResourceType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.DeleteTags|

> Example responses

> 200 Response

```json
{
  "ResourceId": {},
  "ResourceType": {}
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

<h3 id="deletetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTagsOutput](#schemadeletetagsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InvalidTagException|[InvalidTagException](#schemainvalidtagexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBatchPredictions

<a id="opIdDescribeBatchPredictions"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.DescribeBatchPredictions' \
  -d '{
    "FilterVariable": {},
    "EQ": {},
    "GT": {},
    "LT": {},
    "GE": {},
    "LE": {},
    "NE": {},
    "Prefix": {},
    "SortOrder": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions`

Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.

> Body parameter

```json
{
  "FilterVariable": {},
  "EQ": {},
  "GT": {},
  "LT": {},
  "GE": {},
  "LE": {},
  "NE": {},
  "Prefix": {},
  "SortOrder": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describebatchpredictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeBatchPredictionsInput](#schemadescribebatchpredictionsinput)|true|none|
|» FilterVariable|body|object|false|none|
|» EQ|body|object|false|none|
|» GT|body|object|false|none|
|» LT|body|object|false|none|
|» GE|body|object|false|none|
|» LE|body|object|false|none|
|» NE|body|object|false|none|
|» Prefix|body|object|false|none|
|» SortOrder|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.DescribeBatchPredictions|

> Example responses

> 200 Response

```json
{
  "Results": {},
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

<h3 id="describebatchpredictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBatchPredictionsOutput](#schemadescribebatchpredictionsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDataSources

<a id="opIdDescribeDataSources"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.DescribeDataSources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.DescribeDataSources' \
  -d '{
    "FilterVariable": {},
    "EQ": {},
    "GT": {},
    "LT": {},
    "GE": {},
    "LE": {},
    "NE": {},
    "Prefix": {},
    "SortOrder": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.DescribeDataSources`

Returns a list of <code>DataSource</code> that match the search criteria in the request.

> Body parameter

```json
{
  "FilterVariable": {},
  "EQ": {},
  "GT": {},
  "LT": {},
  "GE": {},
  "LE": {},
  "NE": {},
  "Prefix": {},
  "SortOrder": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describedatasources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDataSourcesInput](#schemadescribedatasourcesinput)|true|none|
|» FilterVariable|body|object|false|none|
|» EQ|body|object|false|none|
|» GT|body|object|false|none|
|» LT|body|object|false|none|
|» GE|body|object|false|none|
|» LE|body|object|false|none|
|» NE|body|object|false|none|
|» Prefix|body|object|false|none|
|» SortOrder|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.DescribeDataSources|

> Example responses

> 200 Response

```json
{
  "Results": {},
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

<h3 id="describedatasources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDataSourcesOutput](#schemadescribedatasourcesoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEvaluations

<a id="opIdDescribeEvaluations"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.DescribeEvaluations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.DescribeEvaluations' \
  -d '{
    "FilterVariable": {},
    "EQ": {},
    "GT": {},
    "LT": {},
    "GE": {},
    "LE": {},
    "NE": {},
    "Prefix": {},
    "SortOrder": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.DescribeEvaluations`

Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.

> Body parameter

```json
{
  "FilterVariable": {},
  "EQ": {},
  "GT": {},
  "LT": {},
  "GE": {},
  "LE": {},
  "NE": {},
  "Prefix": {},
  "SortOrder": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describeevaluations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEvaluationsInput](#schemadescribeevaluationsinput)|true|none|
|» FilterVariable|body|object|false|none|
|» EQ|body|object|false|none|
|» GT|body|object|false|none|
|» LT|body|object|false|none|
|» GE|body|object|false|none|
|» LE|body|object|false|none|
|» NE|body|object|false|none|
|» Prefix|body|object|false|none|
|» SortOrder|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.DescribeEvaluations|

> Example responses

> 200 Response

```json
{
  "Results": {},
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

<h3 id="describeevaluations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEvaluationsOutput](#schemadescribeevaluationsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMLModels

<a id="opIdDescribeMLModels"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.DescribeMLModels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.DescribeMLModels' \
  -d '{
    "FilterVariable": {},
    "EQ": {},
    "GT": {},
    "LT": {},
    "GE": {},
    "LE": {},
    "NE": {},
    "Prefix": {},
    "SortOrder": {},
    "NextToken": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.DescribeMLModels`

Returns a list of <code>MLModel</code> that match the search criteria in the request.

> Body parameter

```json
{
  "FilterVariable": {},
  "EQ": {},
  "GT": {},
  "LT": {},
  "GE": {},
  "LE": {},
  "NE": {},
  "Prefix": {},
  "SortOrder": {},
  "NextToken": {},
  "Limit": {}
}
```

<h3 id="describemlmodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMLModelsInput](#schemadescribemlmodelsinput)|true|none|
|» FilterVariable|body|object|false|none|
|» EQ|body|object|false|none|
|» GT|body|object|false|none|
|» LT|body|object|false|none|
|» GE|body|object|false|none|
|» LE|body|object|false|none|
|» NE|body|object|false|none|
|» Prefix|body|object|false|none|
|» SortOrder|body|object|false|none|
|» NextToken|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.DescribeMLModels|

> Example responses

> 200 Response

```json
{
  "Results": {},
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

<h3 id="describemlmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMLModelsOutput](#schemadescribemlmodelsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTags

<a id="opIdDescribeTags"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.DescribeTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.DescribeTags' \
  -d '{
    "ResourceId": {},
    "ResourceType": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.DescribeTags`

Describes one or more of the tags for your Amazon ML object.

> Body parameter

```json
{
  "ResourceId": {},
  "ResourceType": {}
}
```

<h3 id="describetags-parameters">Parameters</h3>

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
|body|body|[DescribeTagsInput](#schemadescribetagsinput)|true|none|
|» ResourceId|body|object|true|none|
|» ResourceType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.DescribeTags|

> Example responses

> 200 Response

```json
{
  "ResourceId": {},
  "ResourceType": {},
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

<h3 id="describetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTagsOutput](#schemadescribetagsoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBatchPrediction

<a id="opIdGetBatchPrediction"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.GetBatchPrediction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.GetBatchPrediction' \
  -d '{
    "BatchPredictionId": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.GetBatchPrediction`

Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a <code>Batch Prediction</code> request.

> Body parameter

```json
{
  "BatchPredictionId": {}
}
```

<h3 id="getbatchprediction-parameters">Parameters</h3>

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
|body|body|[GetBatchPredictionInput](#schemagetbatchpredictioninput)|true|none|
|» BatchPredictionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.GetBatchPrediction|

> Example responses

> 200 Response

```json
{
  "BatchPredictionId": {},
  "MLModelId": {},
  "BatchPredictionDataSourceId": {},
  "InputDataLocationS3": {},
  "CreatedByIamUser": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Name": {},
  "Status": {},
  "OutputUri": {},
  "LogUri": {},
  "Message": {},
  "ComputeTime": {},
  "FinishedAt": {},
  "StartedAt": {},
  "TotalRecordCount": {},
  "InvalidRecordCount": {}
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

<h3 id="getbatchprediction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBatchPredictionOutput](#schemagetbatchpredictionoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataSource

<a id="opIdGetDataSource"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.GetDataSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.GetDataSource' \
  -d '{
    "DataSourceId": {},
    "Verbose": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.GetDataSource`

<p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p> <p> <code>GetDataSource</code> provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>

> Body parameter

```json
{
  "DataSourceId": {},
  "Verbose": {}
}
```

<h3 id="getdatasource-parameters">Parameters</h3>

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
|body|body|[GetDataSourceInput](#schemagetdatasourceinput)|true|none|
|» DataSourceId|body|object|true|none|
|» Verbose|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.GetDataSource|

> Example responses

> 200 Response

```json
{
  "DataSourceId": {},
  "DataLocationS3": {},
  "DataRearrangement": {},
  "CreatedByIamUser": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "DataSizeInBytes": {},
  "NumberOfFiles": {},
  "Name": {},
  "Status": {},
  "LogUri": {},
  "Message": {},
  "RedshiftMetadata": {
    "RedshiftDatabase": {
      "DatabaseName": "string",
      "ClusterIdentifier": "string"
    },
    "DatabaseUserName": "string",
    "SelectSqlQuery": {}
  },
  "RDSMetadata": {
    "Database": {
      "InstanceIdentifier": {},
      "DatabaseName": "string"
    },
    "DatabaseUserName": "string",
    "SelectSqlQuery": {},
    "ResourceRole": {},
    "ServiceRole": {},
    "DataPipelineId": {}
  },
  "RoleARN": "string",
  "ComputeStatistics": {},
  "ComputeTime": {},
  "FinishedAt": {},
  "StartedAt": {},
  "DataSourceSchema": {}
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

<h3 id="getdatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataSourceOutput](#schemagetdatasourceoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEvaluation

<a id="opIdGetEvaluation"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.GetEvaluation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.GetEvaluation' \
  -d '{
    "EvaluationId": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.GetEvaluation`

Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.

> Body parameter

```json
{
  "EvaluationId": {}
}
```

<h3 id="getevaluation-parameters">Parameters</h3>

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
|body|body|[GetEvaluationInput](#schemagetevaluationinput)|true|none|
|» EvaluationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.GetEvaluation|

> Example responses

> 200 Response

```json
{
  "EvaluationId": {},
  "MLModelId": {},
  "EvaluationDataSourceId": {},
  "InputDataLocationS3": {},
  "CreatedByIamUser": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Name": {},
  "Status": {},
  "PerformanceMetrics": {
    "Properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "LogUri": {},
  "Message": {},
  "ComputeTime": {},
  "FinishedAt": {},
  "StartedAt": {}
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

<h3 id="getevaluation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEvaluationOutput](#schemagetevaluationoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMLModel

<a id="opIdGetMLModel"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.GetMLModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.GetMLModel' \
  -d '{
    "MLModelId": {},
    "Verbose": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.GetMLModel`

<p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p> <p> <code>GetMLModel</code> provides results in normal or verbose format. </p>

> Body parameter

```json
{
  "MLModelId": {},
  "Verbose": {}
}
```

<h3 id="getmlmodel-parameters">Parameters</h3>

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
|body|body|[GetMLModelInput](#schemagetmlmodelinput)|true|none|
|» MLModelId|body|object|true|none|
|» Verbose|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.GetMLModel|

> Example responses

> 200 Response

```json
{
  "MLModelId": {},
  "TrainingDataSourceId": {},
  "CreatedByIamUser": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Name": {},
  "Status": {},
  "SizeInBytes": 0,
  "EndpointInfo": {
    "PeakRequestsPerSecond": {},
    "CreatedAt": {},
    "EndpointUrl": {},
    "EndpointStatus": {}
  },
  "TrainingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "InputDataLocationS3": {},
  "MLModelType": {},
  "ScoreThreshold": {},
  "ScoreThresholdLastUpdatedAt": {},
  "LogUri": {},
  "Message": {},
  "ComputeTime": {},
  "FinishedAt": {},
  "StartedAt": {},
  "Recipe": {},
  "Schema": {}
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

<h3 id="getmlmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMLModelOutput](#schemagetmlmodeloutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Predict

<a id="opIdPredict"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.Predict' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.Predict' \
  -d '{
    "MLModelId": {},
    "Record": {
      "property1": "string",
      "property2": "string"
    },
    "PredictEndpoint": "string"
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.Predict`

<p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p> <p> <b>Note:</b> Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.</p>

> Body parameter

```json
{
  "MLModelId": {},
  "Record": {
    "property1": "string",
    "property2": "string"
  },
  "PredictEndpoint": "string"
}
```

<h3 id="predict-parameters">Parameters</h3>

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
|body|body|[PredictInput](#schemapredictinput)|true|none|
|» MLModelId|body|object|true|none|
|» Record|body|[Record](#schemarecord)|true|A map of variable name-value pairs that represent an observation.|
|» PredictEndpoint|body|[VipURL](#schemavipurl)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.Predict|

> Example responses

> 200 Response

```json
{
  "Prediction": {
    "predictedLabel": {},
    "predictedValue": {},
    "predictedScores": {
      "property1": 0,
      "property2": 0
    },
    "details": {
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="predict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PredictOutput](#schemapredictoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|PredictorNotMountedException|[PredictorNotMountedException](#schemapredictornotmountedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBatchPrediction

<a id="opIdUpdateBatchPrediction"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.UpdateBatchPrediction' \
  -d '{
    "BatchPredictionId": {},
    "BatchPredictionName": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction`

<p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p> <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>

> Body parameter

```json
{
  "BatchPredictionId": {},
  "BatchPredictionName": {}
}
```

<h3 id="updatebatchprediction-parameters">Parameters</h3>

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
|body|body|[UpdateBatchPredictionInput](#schemaupdatebatchpredictioninput)|true|none|
|» BatchPredictionId|body|object|true|none|
|» BatchPredictionName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.UpdateBatchPrediction|

> Example responses

> 200 Response

```json
{
  "BatchPredictionId": {}
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

<h3 id="updatebatchprediction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBatchPredictionOutput](#schemaupdatebatchpredictionoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDataSource

<a id="opIdUpdateDataSource"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.UpdateDataSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.UpdateDataSource' \
  -d '{
    "DataSourceId": {},
    "DataSourceName": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.UpdateDataSource`

<p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p> <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>

> Body parameter

```json
{
  "DataSourceId": {},
  "DataSourceName": {}
}
```

<h3 id="updatedatasource-parameters">Parameters</h3>

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
|body|body|[UpdateDataSourceInput](#schemaupdatedatasourceinput)|true|none|
|» DataSourceId|body|object|true|none|
|» DataSourceName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.UpdateDataSource|

> Example responses

> 200 Response

```json
{
  "DataSourceId": {}
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

<h3 id="updatedatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDataSourceOutput](#schemaupdatedatasourceoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEvaluation

<a id="opIdUpdateEvaluation"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.UpdateEvaluation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.UpdateEvaluation' \
  -d '{
    "EvaluationId": {},
    "EvaluationName": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.UpdateEvaluation`

<p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p> <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>

> Body parameter

```json
{
  "EvaluationId": {},
  "EvaluationName": {}
}
```

<h3 id="updateevaluation-parameters">Parameters</h3>

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
|body|body|[UpdateEvaluationInput](#schemaupdateevaluationinput)|true|none|
|» EvaluationId|body|object|true|none|
|» EvaluationName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.UpdateEvaluation|

> Example responses

> 200 Response

```json
{
  "EvaluationId": {}
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

<h3 id="updateevaluation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEvaluationOutput](#schemaupdateevaluationoutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMLModel

<a id="opIdUpdateMLModel"></a>

> Code samples

```bash
curl 'https://machinelearning.us-east-1.amazonaws.com/#X-Amz-Target=AmazonML_20141212.UpdateMLModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonML_20141212.UpdateMLModel' \
  -d '{
    "MLModelId": {},
    "MLModelName": {},
    "ScoreThreshold": {}
  }'
```

`POST /#X-Amz-Target=AmazonML_20141212.UpdateMLModel`

<p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p> <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>

> Body parameter

```json
{
  "MLModelId": {},
  "MLModelName": {},
  "ScoreThreshold": {}
}
```

<h3 id="updatemlmodel-parameters">Parameters</h3>

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
|body|body|[UpdateMLModelInput](#schemaupdatemlmodelinput)|true|none|
|» MLModelId|body|object|true|none|
|» MLModelName|body|object|false|none|
|» ScoreThreshold|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonML_20141212.UpdateMLModel|

> Example responses

> 200 Response

```json
{
  "MLModelId": {}
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

<h3 id="updatemlmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMLModelOutput](#schemaupdatemlmodeloutput)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddTagsOutput">AddTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagsoutput"></a>
<a id="schema_AddTagsOutput"></a>
<a id="tocSaddtagsoutput"></a>
<a id="tocsaddtagsoutput"></a>

```json
{
  "ResourceId": {},
  "ResourceType": {}
}
```

Amazon ML returns the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|ResourceType|object|false|none|none|

<h2 id="tocS_AddTagsInput">AddTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagsinput"></a>
<a id="schema_AddTagsInput"></a>
<a id="tocSaddtagsinput"></a>
<a id="tocsaddtagsinput"></a>

```json
{
  "Tags": {},
  "ResourceId": {},
  "ResourceType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|
|ResourceId|object|true|none|none|
|ResourceType|object|true|none|none|

<h2 id="tocS_InvalidInputException">InvalidInputException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputexception"></a>
<a id="schema_InvalidInputException"></a>
<a id="tocSinvalidinputexception"></a>
<a id="tocsinvalidinputexception"></a>

```json
null
```

<h2 id="tocS_InvalidTagException">InvalidTagException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtagexception"></a>
<a id="schema_InvalidTagException"></a>
<a id="tocSinvalidtagexception"></a>
<a id="tocsinvalidtagexception"></a>

```json
null
```

<h2 id="tocS_TagLimitExceededException">TagLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemataglimitexceededexception"></a>
<a id="schema_TagLimitExceededException"></a>
<a id="tocStaglimitexceededexception"></a>
<a id="tocstaglimitexceededexception"></a>

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

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_CreateBatchPredictionOutput">CreateBatchPredictionOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchpredictionoutput"></a>
<a id="schema_CreateBatchPredictionOutput"></a>
<a id="tocScreatebatchpredictionoutput"></a>
<a id="tocscreatebatchpredictionoutput"></a>

```json
{
  "BatchPredictionId": {}
}
```

<p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BatchPredictionId|object|false|none|none|

<h2 id="tocS_CreateBatchPredictionInput">CreateBatchPredictionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchpredictioninput"></a>
<a id="schema_CreateBatchPredictionInput"></a>
<a id="tocScreatebatchpredictioninput"></a>
<a id="tocscreatebatchpredictioninput"></a>

```json
{
  "BatchPredictionId": {},
  "BatchPredictionName": {},
  "MLModelId": {},
  "BatchPredictionDataSourceId": {},
  "OutputUri": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BatchPredictionId|object|true|none|none|
|BatchPredictionName|object|false|none|none|
|MLModelId|object|true|none|none|
|BatchPredictionDataSourceId|object|true|none|none|
|OutputUri|object|true|none|none|

<h2 id="tocS_IdempotentParameterMismatchException">IdempotentParameterMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemaidempotentparametermismatchexception"></a>
<a id="schema_IdempotentParameterMismatchException"></a>
<a id="tocSidempotentparametermismatchexception"></a>
<a id="tocsidempotentparametermismatchexception"></a>

```json
null
```

<h2 id="tocS_CreateDataSourceFromRDSOutput">CreateDataSourceFromRDSOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasourcefromrdsoutput"></a>
<a id="schema_CreateDataSourceFromRDSOutput"></a>
<a id="tocScreatedatasourcefromrdsoutput"></a>
<a id="tocscreatedatasourcefromrdsoutput"></a>

```json
{
  "DataSourceId": {}
}
```

<p> Represents the output of a <code>CreateDataSourceFromRDS</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRDS</code>&gt; operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. You can inspect the <code>Message</code> when <code>Status</code> shows up as <code>FAILED</code>. You can also check the progress of the copy operation by going to the <code>DataPipeline</code> console and looking up the pipeline using the <code>pipelineId </code> from the describe call.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|false|none|none|

<h2 id="tocS_CreateDataSourceFromRDSInput">CreateDataSourceFromRDSInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasourcefromrdsinput"></a>
<a id="schema_CreateDataSourceFromRDSInput"></a>
<a id="tocScreatedatasourcefromrdsinput"></a>
<a id="tocscreatedatasourcefromrdsinput"></a>

```json
{
  "DataSourceId": {},
  "DataSourceName": {},
  "RDSData": {
    "DatabaseInformation": {
      "InstanceIdentifier": {},
      "DatabaseName": "string"
    },
    "SelectSqlQuery": {},
    "DatabaseCredentials": {
      "Username": "string",
      "Password": "stringst"
    },
    "S3StagingLocation": {},
    "DataRearrangement": {},
    "DataSchema": {},
    "DataSchemaUri": {},
    "ResourceRole": {},
    "ServiceRole": {},
    "SubnetId": {},
    "SecurityGroupIds": {}
  },
  "RoleARN": {},
  "ComputeStatistics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|true|none|none|
|DataSourceName|object|false|none|none|
|RDSData|object|true|none|none|
|RoleARN|object|true|none|none|
|ComputeStatistics|object|false|none|none|

<h2 id="tocS_CreateDataSourceFromRedshiftOutput">CreateDataSourceFromRedshiftOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasourcefromredshiftoutput"></a>
<a id="schema_CreateDataSourceFromRedshiftOutput"></a>
<a id="tocScreatedatasourcefromredshiftoutput"></a>
<a id="tocscreatedatasourcefromredshiftoutput"></a>

```json
{
  "DataSourceId": {}
}
```

<p> Represents the output of a <code>CreateDataSourceFromRedshift</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRedshift</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|false|none|none|

<h2 id="tocS_CreateDataSourceFromRedshiftInput">CreateDataSourceFromRedshiftInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasourcefromredshiftinput"></a>
<a id="schema_CreateDataSourceFromRedshiftInput"></a>
<a id="tocScreatedatasourcefromredshiftinput"></a>
<a id="tocscreatedatasourcefromredshiftinput"></a>

```json
{
  "DataSourceId": {},
  "DataSourceName": {},
  "DataSpec": {
    "DatabaseInformation": {
      "DatabaseName": "string",
      "ClusterIdentifier": "string"
    },
    "SelectSqlQuery": {},
    "DatabaseCredentials": {
      "Username": "string",
      "Password": "stringst"
    },
    "S3StagingLocation": {},
    "DataRearrangement": {},
    "DataSchema": {},
    "DataSchemaUri": {}
  },
  "RoleARN": {},
  "ComputeStatistics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|true|none|none|
|DataSourceName|object|false|none|none|
|DataSpec|object|true|none|none|
|RoleARN|object|true|none|none|
|ComputeStatistics|object|false|none|none|

<h2 id="tocS_CreateDataSourceFromS3Output">CreateDataSourceFromS3Output</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasourcefroms3output"></a>
<a id="schema_CreateDataSourceFromS3Output"></a>
<a id="tocScreatedatasourcefroms3output"></a>
<a id="tocscreatedatasourcefroms3output"></a>

```json
{
  "DataSourceId": {}
}
```

<p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|false|none|none|

<h2 id="tocS_CreateDataSourceFromS3Input">CreateDataSourceFromS3Input</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasourcefroms3input"></a>
<a id="schema_CreateDataSourceFromS3Input"></a>
<a id="tocScreatedatasourcefroms3input"></a>
<a id="tocscreatedatasourcefroms3input"></a>

```json
{
  "DataSourceId": {},
  "DataSourceName": {},
  "DataSpec": {
    "DataLocationS3": {},
    "DataRearrangement": {},
    "DataSchema": {},
    "DataSchemaLocationS3": {}
  },
  "ComputeStatistics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|true|none|none|
|DataSourceName|object|false|none|none|
|DataSpec|object|true|none|none|
|ComputeStatistics|object|false|none|none|

<h2 id="tocS_CreateEvaluationOutput">CreateEvaluationOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateevaluationoutput"></a>
<a id="schema_CreateEvaluationOutput"></a>
<a id="tocScreateevaluationoutput"></a>
<a id="tocscreateevaluationoutput"></a>

```json
{
  "EvaluationId": {}
}
```

<p> Represents the output of a <code>CreateEvaluation</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p> <code>CreateEvaluation</code> operation is asynchronous. You can poll for status updates by using the <code>GetEvcaluation</code> operation and checking the <code>Status</code> parameter. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationId|object|false|none|none|

<h2 id="tocS_CreateEvaluationInput">CreateEvaluationInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateevaluationinput"></a>
<a id="schema_CreateEvaluationInput"></a>
<a id="tocScreateevaluationinput"></a>
<a id="tocscreateevaluationinput"></a>

```json
{
  "EvaluationId": {},
  "EvaluationName": {},
  "MLModelId": {},
  "EvaluationDataSourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationId|object|true|none|none|
|EvaluationName|object|false|none|none|
|MLModelId|object|true|none|none|
|EvaluationDataSourceId|object|true|none|none|

<h2 id="tocS_CreateMLModelOutput">CreateMLModelOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatemlmodeloutput"></a>
<a id="schema_CreateMLModelOutput"></a>
<a id="tocScreatemlmodeloutput"></a>
<a id="tocscreatemlmodeloutput"></a>

```json
{
  "MLModelId": {}
}
```

<p> Represents the output of a <code>CreateMLModel</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateMLModel</code> operation is asynchronous. You can poll for status updates by using the <code>GetMLModel</code> operation and checking the <code>Status</code> parameter. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|false|none|none|

<h2 id="tocS_CreateMLModelInput">CreateMLModelInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatemlmodelinput"></a>
<a id="schema_CreateMLModelInput"></a>
<a id="tocScreatemlmodelinput"></a>
<a id="tocscreatemlmodelinput"></a>

```json
{
  "MLModelId": {},
  "MLModelName": {},
  "MLModelType": {},
  "Parameters": {
    "property1": "string",
    "property2": "string"
  },
  "TrainingDataSourceId": {},
  "Recipe": {},
  "RecipeUri": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|true|none|none|
|MLModelName|object|false|none|none|
|MLModelType|object|true|none|none|
|Parameters|object|false|none|none|
|TrainingDataSourceId|object|true|none|none|
|Recipe|object|false|none|none|
|RecipeUri|object|false|none|none|

<h2 id="tocS_CreateRealtimeEndpointOutput">CreateRealtimeEndpointOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreaterealtimeendpointoutput"></a>
<a id="schema_CreateRealtimeEndpointOutput"></a>
<a id="tocScreaterealtimeendpointoutput"></a>
<a id="tocscreaterealtimeendpointoutput"></a>

```json
{
  "MLModelId": {},
  "RealtimeEndpointInfo": {
    "PeakRequestsPerSecond": {},
    "CreatedAt": {},
    "EndpointUrl": {},
    "EndpointStatus": {}
  }
}
```

<p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <p> <b>Note:</b> The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|false|none|none|
|RealtimeEndpointInfo|object|false|none|none|

<h2 id="tocS_CreateRealtimeEndpointInput">CreateRealtimeEndpointInput</h2>
<!-- backwards compatibility -->
<a id="schemacreaterealtimeendpointinput"></a>
<a id="schema_CreateRealtimeEndpointInput"></a>
<a id="tocScreaterealtimeendpointinput"></a>
<a id="tocscreaterealtimeendpointinput"></a>

```json
{
  "MLModelId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|true|none|none|

<h2 id="tocS_DeleteBatchPredictionOutput">DeleteBatchPredictionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebatchpredictionoutput"></a>
<a id="schema_DeleteBatchPredictionOutput"></a>
<a id="tocSdeletebatchpredictionoutput"></a>
<a id="tocsdeletebatchpredictionoutput"></a>

```json
{
  "BatchPredictionId": {}
}
```

<p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p> <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BatchPredictionId|object|false|none|none|

<h2 id="tocS_DeleteBatchPredictionInput">DeleteBatchPredictionInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebatchpredictioninput"></a>
<a id="schema_DeleteBatchPredictionInput"></a>
<a id="tocSdeletebatchpredictioninput"></a>
<a id="tocsdeletebatchpredictioninput"></a>

```json
{
  "BatchPredictionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BatchPredictionId|object|true|none|none|

<h2 id="tocS_DeleteDataSourceOutput">DeleteDataSourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasourceoutput"></a>
<a id="schema_DeleteDataSourceOutput"></a>
<a id="tocSdeletedatasourceoutput"></a>
<a id="tocsdeletedatasourceoutput"></a>

```json
{
  "DataSourceId": {}
}
```

 Represents the output of a <code>DeleteDataSource</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|false|none|none|

<h2 id="tocS_DeleteDataSourceInput">DeleteDataSourceInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasourceinput"></a>
<a id="schema_DeleteDataSourceInput"></a>
<a id="tocSdeletedatasourceinput"></a>
<a id="tocsdeletedatasourceinput"></a>

```json
{
  "DataSourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|true|none|none|

<h2 id="tocS_DeleteEvaluationOutput">DeleteEvaluationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteevaluationoutput"></a>
<a id="schema_DeleteEvaluationOutput"></a>
<a id="tocSdeleteevaluationoutput"></a>
<a id="tocsdeleteevaluationoutput"></a>

```json
{
  "EvaluationId": {}
}
```

<p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p> <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>Evaluation</code> is marked as <code>DELETED</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationId|object|false|none|none|

<h2 id="tocS_DeleteEvaluationInput">DeleteEvaluationInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteevaluationinput"></a>
<a id="schema_DeleteEvaluationInput"></a>
<a id="tocSdeleteevaluationinput"></a>
<a id="tocsdeleteevaluationinput"></a>

```json
{
  "EvaluationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationId|object|true|none|none|

<h2 id="tocS_DeleteMLModelOutput">DeleteMLModelOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletemlmodeloutput"></a>
<a id="schema_DeleteMLModelOutput"></a>
<a id="tocSdeletemlmodeloutput"></a>
<a id="tocsdeletemlmodeloutput"></a>

```json
{
  "MLModelId": {}
}
```

<p>Represents the output of a <code>DeleteMLModel</code> operation.</p> <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>MLModel</code> is marked as <code>DELETED</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|false|none|none|

<h2 id="tocS_DeleteMLModelInput">DeleteMLModelInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletemlmodelinput"></a>
<a id="schema_DeleteMLModelInput"></a>
<a id="tocSdeletemlmodelinput"></a>
<a id="tocsdeletemlmodelinput"></a>

```json
{
  "MLModelId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|true|none|none|

<h2 id="tocS_DeleteRealtimeEndpointOutput">DeleteRealtimeEndpointOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleterealtimeendpointoutput"></a>
<a id="schema_DeleteRealtimeEndpointOutput"></a>
<a id="tocSdeleterealtimeendpointoutput"></a>
<a id="tocsdeleterealtimeendpointoutput"></a>

```json
{
  "MLModelId": {},
  "RealtimeEndpointInfo": {
    "PeakRequestsPerSecond": {},
    "CreatedAt": {},
    "EndpointUrl": {},
    "EndpointStatus": {}
  }
}
```

<p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|false|none|none|
|RealtimeEndpointInfo|object|false|none|none|

<h2 id="tocS_DeleteRealtimeEndpointInput">DeleteRealtimeEndpointInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleterealtimeendpointinput"></a>
<a id="schema_DeleteRealtimeEndpointInput"></a>
<a id="tocSdeleterealtimeendpointinput"></a>
<a id="tocsdeleterealtimeendpointinput"></a>

```json
{
  "MLModelId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|true|none|none|

<h2 id="tocS_DeleteTagsOutput">DeleteTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagsoutput"></a>
<a id="schema_DeleteTagsOutput"></a>
<a id="tocSdeletetagsoutput"></a>
<a id="tocsdeletetagsoutput"></a>

```json
{
  "ResourceId": {},
  "ResourceType": {}
}
```

Amazon ML returns the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|ResourceType|object|false|none|none|

<h2 id="tocS_DeleteTagsInput">DeleteTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagsinput"></a>
<a id="schema_DeleteTagsInput"></a>
<a id="tocSdeletetagsinput"></a>
<a id="tocsdeletetagsinput"></a>

```json
{
  "TagKeys": {},
  "ResourceId": {},
  "ResourceType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKeys|object|true|none|none|
|ResourceId|object|true|none|none|
|ResourceType|object|true|none|none|

<h2 id="tocS_DescribeBatchPredictionsOutput">DescribeBatchPredictionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebatchpredictionsoutput"></a>
<a id="schema_DescribeBatchPredictionsOutput"></a>
<a id="tocSdescribebatchpredictionsoutput"></a>
<a id="tocsdescribebatchpredictionsoutput"></a>

```json
{
  "Results": {},
  "NextToken": {}
}
```

Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeBatchPredictionsInput">DescribeBatchPredictionsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebatchpredictionsinput"></a>
<a id="schema_DescribeBatchPredictionsInput"></a>
<a id="tocSdescribebatchpredictionsinput"></a>
<a id="tocsdescribebatchpredictionsinput"></a>

```json
{
  "FilterVariable": {},
  "EQ": {},
  "GT": {},
  "LT": {},
  "GE": {},
  "LE": {},
  "NE": {},
  "Prefix": {},
  "SortOrder": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterVariable|object|false|none|none|
|EQ|object|false|none|none|
|GT|object|false|none|none|
|LT|object|false|none|none|
|GE|object|false|none|none|
|LE|object|false|none|none|
|NE|object|false|none|none|
|Prefix|object|false|none|none|
|SortOrder|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeDataSourcesOutput">DescribeDataSourcesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasourcesoutput"></a>
<a id="schema_DescribeDataSourcesOutput"></a>
<a id="tocSdescribedatasourcesoutput"></a>
<a id="tocsdescribedatasourcesoutput"></a>

```json
{
  "Results": {},
  "NextToken": {}
}
```

Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeDataSourcesInput">DescribeDataSourcesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasourcesinput"></a>
<a id="schema_DescribeDataSourcesInput"></a>
<a id="tocSdescribedatasourcesinput"></a>
<a id="tocsdescribedatasourcesinput"></a>

```json
{
  "FilterVariable": {},
  "EQ": {},
  "GT": {},
  "LT": {},
  "GE": {},
  "LE": {},
  "NE": {},
  "Prefix": {},
  "SortOrder": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterVariable|object|false|none|none|
|EQ|object|false|none|none|
|GT|object|false|none|none|
|LT|object|false|none|none|
|GE|object|false|none|none|
|LE|object|false|none|none|
|NE|object|false|none|none|
|Prefix|object|false|none|none|
|SortOrder|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeEvaluationsOutput">DescribeEvaluationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeevaluationsoutput"></a>
<a id="schema_DescribeEvaluationsOutput"></a>
<a id="tocSdescribeevaluationsoutput"></a>
<a id="tocsdescribeevaluationsoutput"></a>

```json
{
  "Results": {},
  "NextToken": {}
}
```

Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeEvaluationsInput">DescribeEvaluationsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeevaluationsinput"></a>
<a id="schema_DescribeEvaluationsInput"></a>
<a id="tocSdescribeevaluationsinput"></a>
<a id="tocsdescribeevaluationsinput"></a>

```json
{
  "FilterVariable": {},
  "EQ": {},
  "GT": {},
  "LT": {},
  "GE": {},
  "LE": {},
  "NE": {},
  "Prefix": {},
  "SortOrder": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterVariable|object|false|none|none|
|EQ|object|false|none|none|
|GT|object|false|none|none|
|LT|object|false|none|none|
|GE|object|false|none|none|
|LE|object|false|none|none|
|NE|object|false|none|none|
|Prefix|object|false|none|none|
|SortOrder|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeMLModelsOutput">DescribeMLModelsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemlmodelsoutput"></a>
<a id="schema_DescribeMLModelsOutput"></a>
<a id="tocSdescribemlmodelsoutput"></a>
<a id="tocsdescribemlmodelsoutput"></a>

```json
{
  "Results": {},
  "NextToken": {}
}
```

Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMLModelsInput">DescribeMLModelsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemlmodelsinput"></a>
<a id="schema_DescribeMLModelsInput"></a>
<a id="tocSdescribemlmodelsinput"></a>
<a id="tocsdescribemlmodelsinput"></a>

```json
{
  "FilterVariable": {},
  "EQ": {},
  "GT": {},
  "LT": {},
  "GE": {},
  "LE": {},
  "NE": {},
  "Prefix": {},
  "SortOrder": {},
  "NextToken": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterVariable|object|false|none|none|
|EQ|object|false|none|none|
|GT|object|false|none|none|
|LT|object|false|none|none|
|GE|object|false|none|none|
|LE|object|false|none|none|
|NE|object|false|none|none|
|Prefix|object|false|none|none|
|SortOrder|object|false|none|none|
|NextToken|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_DescribeTagsOutput">DescribeTagsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsoutput"></a>
<a id="schema_DescribeTagsOutput"></a>
<a id="tocSdescribetagsoutput"></a>
<a id="tocsdescribetagsoutput"></a>

```json
{
  "ResourceId": {},
  "ResourceType": {},
  "Tags": {}
}
```

Amazon ML returns the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|ResourceType|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeTagsInput">DescribeTagsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagsinput"></a>
<a id="schema_DescribeTagsInput"></a>
<a id="tocSdescribetagsinput"></a>
<a id="tocsdescribetagsinput"></a>

```json
{
  "ResourceId": {},
  "ResourceType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|ResourceType|object|true|none|none|

<h2 id="tocS_GetBatchPredictionOutput">GetBatchPredictionOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbatchpredictionoutput"></a>
<a id="schema_GetBatchPredictionOutput"></a>
<a id="tocSgetbatchpredictionoutput"></a>
<a id="tocsgetbatchpredictionoutput"></a>

```json
{
  "BatchPredictionId": {},
  "MLModelId": {},
  "BatchPredictionDataSourceId": {},
  "InputDataLocationS3": {},
  "CreatedByIamUser": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Name": {},
  "Status": {},
  "OutputUri": {},
  "LogUri": {},
  "Message": {},
  "ComputeTime": {},
  "FinishedAt": {},
  "StartedAt": {},
  "TotalRecordCount": {},
  "InvalidRecordCount": {}
}
```

Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BatchPredictionId|object|false|none|none|
|MLModelId|object|false|none|none|
|BatchPredictionDataSourceId|object|false|none|none|
|InputDataLocationS3|object|false|none|none|
|CreatedByIamUser|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|OutputUri|object|false|none|none|
|LogUri|object|false|none|none|
|Message|object|false|none|none|
|ComputeTime|object|false|none|none|
|FinishedAt|object|false|none|none|
|StartedAt|object|false|none|none|
|TotalRecordCount|object|false|none|none|
|InvalidRecordCount|object|false|none|none|

<h2 id="tocS_GetBatchPredictionInput">GetBatchPredictionInput</h2>
<!-- backwards compatibility -->
<a id="schemagetbatchpredictioninput"></a>
<a id="schema_GetBatchPredictionInput"></a>
<a id="tocSgetbatchpredictioninput"></a>
<a id="tocsgetbatchpredictioninput"></a>

```json
{
  "BatchPredictionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BatchPredictionId|object|true|none|none|

<h2 id="tocS_GetDataSourceOutput">GetDataSourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetdatasourceoutput"></a>
<a id="schema_GetDataSourceOutput"></a>
<a id="tocSgetdatasourceoutput"></a>
<a id="tocsgetdatasourceoutput"></a>

```json
{
  "DataSourceId": {},
  "DataLocationS3": {},
  "DataRearrangement": {},
  "CreatedByIamUser": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "DataSizeInBytes": {},
  "NumberOfFiles": {},
  "Name": {},
  "Status": {},
  "LogUri": {},
  "Message": {},
  "RedshiftMetadata": {
    "RedshiftDatabase": {
      "DatabaseName": "string",
      "ClusterIdentifier": "string"
    },
    "DatabaseUserName": "string",
    "SelectSqlQuery": {}
  },
  "RDSMetadata": {
    "Database": {
      "InstanceIdentifier": {},
      "DatabaseName": "string"
    },
    "DatabaseUserName": "string",
    "SelectSqlQuery": {},
    "ResourceRole": {},
    "ServiceRole": {},
    "DataPipelineId": {}
  },
  "RoleARN": "string",
  "ComputeStatistics": {},
  "ComputeTime": {},
  "FinishedAt": {},
  "StartedAt": {},
  "DataSourceSchema": {}
}
```

Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|false|none|none|
|DataLocationS3|object|false|none|none|
|DataRearrangement|object|false|none|none|
|CreatedByIamUser|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|DataSizeInBytes|object|false|none|none|
|NumberOfFiles|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|LogUri|object|false|none|none|
|Message|object|false|none|none|
|RedshiftMetadata|[RedshiftMetadata](#schemaredshiftmetadata)|false|none|Describes the <code>DataSource</code> details specific to Amazon Redshift.|
|RDSMetadata|[RDSMetadata](#schemardsmetadata)|false|none|The datasource details that are specific to Amazon RDS.|
|RoleARN|[RoleARN](#schemarolearn)|false|none|The Amazon Resource Name (ARN) of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename. |
|ComputeStatistics|object|false|none|none|
|ComputeTime|object|false|none|none|
|FinishedAt|object|false|none|none|
|StartedAt|object|false|none|none|
|DataSourceSchema|object|false|none|none|

<h2 id="tocS_GetDataSourceInput">GetDataSourceInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdatasourceinput"></a>
<a id="schema_GetDataSourceInput"></a>
<a id="tocSgetdatasourceinput"></a>
<a id="tocsgetdatasourceinput"></a>

```json
{
  "DataSourceId": {},
  "Verbose": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|true|none|none|
|Verbose|object|false|none|none|

<h2 id="tocS_GetEvaluationOutput">GetEvaluationOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetevaluationoutput"></a>
<a id="schema_GetEvaluationOutput"></a>
<a id="tocSgetevaluationoutput"></a>
<a id="tocsgetevaluationoutput"></a>

```json
{
  "EvaluationId": {},
  "MLModelId": {},
  "EvaluationDataSourceId": {},
  "InputDataLocationS3": {},
  "CreatedByIamUser": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Name": {},
  "Status": {},
  "PerformanceMetrics": {
    "Properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "LogUri": {},
  "Message": {},
  "ComputeTime": {},
  "FinishedAt": {},
  "StartedAt": {}
}
```

Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationId|object|false|none|none|
|MLModelId|object|false|none|none|
|EvaluationDataSourceId|object|false|none|none|
|InputDataLocationS3|object|false|none|none|
|CreatedByIamUser|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|PerformanceMetrics|object|false|none|none|
|LogUri|object|false|none|none|
|Message|object|false|none|none|
|ComputeTime|object|false|none|none|
|FinishedAt|object|false|none|none|
|StartedAt|object|false|none|none|

<h2 id="tocS_GetEvaluationInput">GetEvaluationInput</h2>
<!-- backwards compatibility -->
<a id="schemagetevaluationinput"></a>
<a id="schema_GetEvaluationInput"></a>
<a id="tocSgetevaluationinput"></a>
<a id="tocsgetevaluationinput"></a>

```json
{
  "EvaluationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationId|object|true|none|none|

<h2 id="tocS_GetMLModelOutput">GetMLModelOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmlmodeloutput"></a>
<a id="schema_GetMLModelOutput"></a>
<a id="tocSgetmlmodeloutput"></a>
<a id="tocsgetmlmodeloutput"></a>

```json
{
  "MLModelId": {},
  "TrainingDataSourceId": {},
  "CreatedByIamUser": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Name": {},
  "Status": {},
  "SizeInBytes": 0,
  "EndpointInfo": {
    "PeakRequestsPerSecond": {},
    "CreatedAt": {},
    "EndpointUrl": {},
    "EndpointStatus": {}
  },
  "TrainingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "InputDataLocationS3": {},
  "MLModelType": {},
  "ScoreThreshold": {},
  "ScoreThresholdLastUpdatedAt": {},
  "LogUri": {},
  "Message": {},
  "ComputeTime": {},
  "FinishedAt": {},
  "StartedAt": {},
  "Recipe": {},
  "Schema": {}
}
```

Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|false|none|none|
|TrainingDataSourceId|object|false|none|none|
|CreatedByIamUser|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|SizeInBytes|[LongType](#schemalongtype)|false|none|Long integer type that is a 64-bit signed number.|
|EndpointInfo|object|false|none|none|
|TrainingParameters|object|false|none|none|
|InputDataLocationS3|object|false|none|none|
|MLModelType|object|false|none|none|
|ScoreThreshold|object|false|none|none|
|ScoreThresholdLastUpdatedAt|object|false|none|none|
|LogUri|object|false|none|none|
|Message|object|false|none|none|
|ComputeTime|object|false|none|none|
|FinishedAt|object|false|none|none|
|StartedAt|object|false|none|none|
|Recipe|object|false|none|none|
|Schema|object|false|none|none|

<h2 id="tocS_GetMLModelInput">GetMLModelInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmlmodelinput"></a>
<a id="schema_GetMLModelInput"></a>
<a id="tocSgetmlmodelinput"></a>
<a id="tocsgetmlmodelinput"></a>

```json
{
  "MLModelId": {},
  "Verbose": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|true|none|none|
|Verbose|object|false|none|none|

<h2 id="tocS_PredictOutput">PredictOutput</h2>
<!-- backwards compatibility -->
<a id="schemapredictoutput"></a>
<a id="schema_PredictOutput"></a>
<a id="tocSpredictoutput"></a>
<a id="tocspredictoutput"></a>

```json
{
  "Prediction": {
    "predictedLabel": {},
    "predictedValue": {},
    "predictedScores": {
      "property1": 0,
      "property2": 0
    },
    "details": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prediction|[Prediction](#schemaprediction)|false|none|<p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION \| BINARY \| MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul>|

<h2 id="tocS_PredictInput">PredictInput</h2>
<!-- backwards compatibility -->
<a id="schemapredictinput"></a>
<a id="schema_PredictInput"></a>
<a id="tocSpredictinput"></a>
<a id="tocspredictinput"></a>

```json
{
  "MLModelId": {},
  "Record": {
    "property1": "string",
    "property2": "string"
  },
  "PredictEndpoint": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|true|none|none|
|Record|[Record](#schemarecord)|true|none|A map of variable name-value pairs that represent an observation.|
|PredictEndpoint|[VipURL](#schemavipurl)|true|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_PredictorNotMountedException">PredictorNotMountedException</h2>
<!-- backwards compatibility -->
<a id="schemapredictornotmountedexception"></a>
<a id="schema_PredictorNotMountedException"></a>
<a id="tocSpredictornotmountedexception"></a>
<a id="tocspredictornotmountedexception"></a>

```json
null
```

<h2 id="tocS_UpdateBatchPredictionOutput">UpdateBatchPredictionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebatchpredictionoutput"></a>
<a id="schema_UpdateBatchPredictionOutput"></a>
<a id="tocSupdatebatchpredictionoutput"></a>
<a id="tocsupdatebatchpredictionoutput"></a>

```json
{
  "BatchPredictionId": {}
}
```

<p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BatchPredictionId|object|false|none|none|

<h2 id="tocS_UpdateBatchPredictionInput">UpdateBatchPredictionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebatchpredictioninput"></a>
<a id="schema_UpdateBatchPredictionInput"></a>
<a id="tocSupdatebatchpredictioninput"></a>
<a id="tocsupdatebatchpredictioninput"></a>

```json
{
  "BatchPredictionId": {},
  "BatchPredictionName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BatchPredictionId|object|true|none|none|
|BatchPredictionName|object|true|none|none|

<h2 id="tocS_UpdateDataSourceOutput">UpdateDataSourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasourceoutput"></a>
<a id="schema_UpdateDataSourceOutput"></a>
<a id="tocSupdatedatasourceoutput"></a>
<a id="tocsupdatedatasourceoutput"></a>

```json
{
  "DataSourceId": {}
}
```

<p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|false|none|none|

<h2 id="tocS_UpdateDataSourceInput">UpdateDataSourceInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasourceinput"></a>
<a id="schema_UpdateDataSourceInput"></a>
<a id="tocSupdatedatasourceinput"></a>
<a id="tocsupdatedatasourceinput"></a>

```json
{
  "DataSourceId": {},
  "DataSourceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|true|none|none|
|DataSourceName|object|true|none|none|

<h2 id="tocS_UpdateEvaluationOutput">UpdateEvaluationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateevaluationoutput"></a>
<a id="schema_UpdateEvaluationOutput"></a>
<a id="tocSupdateevaluationoutput"></a>
<a id="tocsupdateevaluationoutput"></a>

```json
{
  "EvaluationId": {}
}
```

<p>Represents the output of an <code>UpdateEvaluation</code> operation.</p> <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationId|object|false|none|none|

<h2 id="tocS_UpdateEvaluationInput">UpdateEvaluationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateevaluationinput"></a>
<a id="schema_UpdateEvaluationInput"></a>
<a id="tocSupdateevaluationinput"></a>
<a id="tocsupdateevaluationinput"></a>

```json
{
  "EvaluationId": {},
  "EvaluationName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationId|object|true|none|none|
|EvaluationName|object|true|none|none|

<h2 id="tocS_UpdateMLModelOutput">UpdateMLModelOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemlmodeloutput"></a>
<a id="schema_UpdateMLModelOutput"></a>
<a id="tocSupdatemlmodeloutput"></a>
<a id="tocsupdatemlmodeloutput"></a>

```json
{
  "MLModelId": {}
}
```

<p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|false|none|none|

<h2 id="tocS_UpdateMLModelInput">UpdateMLModelInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemlmodelinput"></a>
<a id="schema_UpdateMLModelInput"></a>
<a id="tocSupdatemlmodelinput"></a>
<a id="tocsupdatemlmodelinput"></a>

```json
{
  "MLModelId": {},
  "MLModelName": {},
  "ScoreThreshold": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|true|none|none|
|MLModelName|object|false|none|none|
|ScoreThreshold|object|false|none|none|

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

<h2 id="tocS_EntityId">EntityId</h2>
<!-- backwards compatibility -->
<a id="schemaentityid"></a>
<a id="schema_EntityId"></a>
<a id="tocSentityid"></a>
<a id="tocsentityid"></a>

```json
"string"
```

<h2 id="tocS_TaggableResourceType">TaggableResourceType</h2>
<!-- backwards compatibility -->
<a id="schemataggableresourcetype"></a>
<a id="schema_TaggableResourceType"></a>
<a id="tocStaggableresourcetype"></a>
<a id="tocstaggableresourcetype"></a>

```json
"BatchPrediction"
```

<h2 id="tocS_Algorithm">Algorithm</h2>
<!-- backwards compatibility -->
<a id="schemaalgorithm"></a>
<a id="schema_Algorithm"></a>
<a id="tocSalgorithm"></a>
<a id="tocsalgorithm"></a>

```json
"sgd"
```

<p>The function used to train an <code>MLModel</code>. Training choices supported by Amazon ML include the following:</p> <ul> <li> <p> <code>SGD</code> - Stochastic Gradient Descent.</p> </li> <li> <p> <code>RandomForest</code> - Random forest of decision trees.</p> </li> </ul>

<h2 id="tocS_AwsUserArn">AwsUserArn</h2>
<!-- backwards compatibility -->
<a id="schemaawsuserarn"></a>
<a id="schema_AwsUserArn"></a>
<a id="tocSawsuserarn"></a>
<a id="tocsawsuserarn"></a>

```json
"string"
```

An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user.

<h2 id="tocS_S3Url">S3Url</h2>
<!-- backwards compatibility -->
<a id="schemas3url"></a>
<a id="schema_S3Url"></a>
<a id="tocSs3url"></a>
<a id="tocss3url"></a>

```json
"string"
```

A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).

<h2 id="tocS_EpochTime">EpochTime</h2>
<!-- backwards compatibility -->
<a id="schemaepochtime"></a>
<a id="schema_EpochTime"></a>
<a id="tocSepochtime"></a>
<a id="tocsepochtime"></a>

```json
"1970-01-01T00:00:00Z"
```

A timestamp represented in epoch time.

<h2 id="tocS_EntityName">EntityName</h2>
<!-- backwards compatibility -->
<a id="schemaentityname"></a>
<a id="schema_EntityName"></a>
<a id="tocSentityname"></a>
<a id="tocsentityname"></a>

```json
"string"
```

A user-supplied name or description of the Amazon ML resource.

<h2 id="tocS_EntityStatus">EntityStatus</h2>
<!-- backwards compatibility -->
<a id="schemaentitystatus"></a>
<a id="schema_EntityStatus"></a>
<a id="tocSentitystatus"></a>
<a id="tocsentitystatus"></a>

```json
"PENDING"
```

<p>Object status with the following possible values:</p> <ul> <li> <p> <code>PENDING</code> </p> </li> <li> <p> <code>INPROGRESS</code> </p> </li> <li> <p> <code>FAILED</code> </p> </li> <li> <p> <code>COMPLETED</code> </p> </li> <li> <p> <code>DELETED</code> </p> </li> </ul>

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

Description of the most recent details about an object.

<h2 id="tocS_LongType">LongType</h2>
<!-- backwards compatibility -->
<a id="schemalongtype"></a>
<a id="schema_LongType"></a>
<a id="tocSlongtype"></a>
<a id="tocslongtype"></a>

```json
0
```

Long integer type that is a 64-bit signed number.

<h2 id="tocS_BatchPrediction">BatchPrediction</h2>
<!-- backwards compatibility -->
<a id="schemabatchprediction"></a>
<a id="schema_BatchPrediction"></a>
<a id="tocSbatchprediction"></a>
<a id="tocsbatchprediction"></a>

```json
{
  "BatchPredictionId": {},
  "MLModelId": {},
  "BatchPredictionDataSourceId": {},
  "InputDataLocationS3": {},
  "CreatedByIamUser": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Name": {},
  "Status": {},
  "OutputUri": {},
  "Message": {},
  "ComputeTime": 0,
  "FinishedAt": "1970-01-01T00:00:00Z",
  "StartedAt": "1970-01-01T00:00:00Z",
  "TotalRecordCount": 0,
  "InvalidRecordCount": 0
}
```

<p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BatchPredictionId|object|false|none|none|
|MLModelId|object|false|none|none|
|BatchPredictionDataSourceId|object|false|none|none|
|InputDataLocationS3|object|false|none|none|
|CreatedByIamUser|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|OutputUri|object|false|none|none|
|Message|object|false|none|none|
|ComputeTime|[LongType](#schemalongtype)|false|none|Long integer type that is a 64-bit signed number.|
|FinishedAt|[EpochTime](#schemaepochtime)|false|none|A timestamp represented in epoch time.|
|StartedAt|[EpochTime](#schemaepochtime)|false|none|A timestamp represented in epoch time.|
|TotalRecordCount|[LongType](#schemalongtype)|false|none|Long integer type that is a 64-bit signed number.|
|InvalidRecordCount|[LongType](#schemalongtype)|false|none|Long integer type that is a 64-bit signed number.|

<h2 id="tocS_BatchPredictionFilterVariable">BatchPredictionFilterVariable</h2>
<!-- backwards compatibility -->
<a id="schemabatchpredictionfiltervariable"></a>
<a id="schema_BatchPredictionFilterVariable"></a>
<a id="tocSbatchpredictionfiltervariable"></a>
<a id="tocsbatchpredictionfiltervariable"></a>

```json
"CreatedAt"
```

<p>A list of the variables to use in searching or filtering <code>BatchPrediction</code>.</p> <ul> <li> <p> <code>CreatedAt</code> - Sets the search criteria to <code>BatchPrediction</code> creation date.</p> </li> <li> <p> <code>Status</code> - Sets the search criteria to <code>BatchPrediction</code> status.</p> </li> <li> <p> <code>Name</code> - Sets the search criteria to the contents of <code>BatchPrediction</code> <code>Name</code>.</p> </li> <li> <p> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>BatchPrediction</code> creation.</p> </li> <li> <p> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> used in the <code>BatchPrediction</code>.</p> </li> <li> <p> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in the <code>BatchPrediction</code>.</p> </li> <li> <p> <code>DataURI</code> - Sets the search criteria to the data file(s) used in the <code>BatchPrediction</code>. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</p> </li> </ul>

<h2 id="tocS_BatchPredictions">BatchPredictions</h2>
<!-- backwards compatibility -->
<a id="schemabatchpredictions"></a>
<a id="schema_BatchPredictions"></a>
<a id="tocSbatchpredictions"></a>
<a id="tocsbatchpredictions"></a>

```json
[
  {
    "BatchPredictionId": {},
    "MLModelId": {},
    "BatchPredictionDataSourceId": {},
    "InputDataLocationS3": {},
    "CreatedByIamUser": {},
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "Name": {},
    "Status": {},
    "OutputUri": {},
    "Message": {},
    "ComputeTime": 0,
    "FinishedAt": "1970-01-01T00:00:00Z",
    "StartedAt": "1970-01-01T00:00:00Z",
    "TotalRecordCount": 0,
    "InvalidRecordCount": 0
  }
]
```

<h2 id="tocS_ComparatorValue">ComparatorValue</h2>
<!-- backwards compatibility -->
<a id="schemacomparatorvalue"></a>
<a id="schema_ComparatorValue"></a>
<a id="tocScomparatorvalue"></a>
<a id="tocscomparatorvalue"></a>

```json
"string"
```

The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.

<h2 id="tocS_ComputeStatistics">ComputeStatistics</h2>
<!-- backwards compatibility -->
<a id="schemacomputestatistics"></a>
<a id="schema_ComputeStatistics"></a>
<a id="tocScomputestatistics"></a>
<a id="tocscomputestatistics"></a>

```json
true
```

<h2 id="tocS_RDSDataSpec">RDSDataSpec</h2>
<!-- backwards compatibility -->
<a id="schemardsdataspec"></a>
<a id="schema_RDSDataSpec"></a>
<a id="tocSrdsdataspec"></a>
<a id="tocsrdsdataspec"></a>

```json
{
  "DatabaseInformation": {
    "InstanceIdentifier": {},
    "DatabaseName": "string"
  },
  "SelectSqlQuery": {},
  "DatabaseCredentials": {
    "Username": "string",
    "Password": "stringst"
  },
  "S3StagingLocation": {},
  "DataRearrangement": {},
  "DataSchema": {},
  "DataSchemaUri": {},
  "ResourceRole": {},
  "ServiceRole": {},
  "SubnetId": {},
  "SecurityGroupIds": {}
}
```

The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseInformation|object|true|none|none|
|SelectSqlQuery|object|true|none|none|
|DatabaseCredentials|object|true|none|none|
|S3StagingLocation|object|true|none|none|
|DataRearrangement|object|false|none|none|
|DataSchema|object|false|none|none|
|DataSchemaUri|object|false|none|none|
|ResourceRole|object|true|none|none|
|ServiceRole|object|true|none|none|
|SubnetId|object|true|none|none|
|SecurityGroupIds|object|true|none|none|

<h2 id="tocS_RoleARN">RoleARN</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleARN"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

The Amazon Resource Name (ARN) of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.

<h2 id="tocS_RedshiftDataSpec">RedshiftDataSpec</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdataspec"></a>
<a id="schema_RedshiftDataSpec"></a>
<a id="tocSredshiftdataspec"></a>
<a id="tocsredshiftdataspec"></a>

```json
{
  "DatabaseInformation": {
    "DatabaseName": "string",
    "ClusterIdentifier": "string"
  },
  "SelectSqlQuery": {},
  "DatabaseCredentials": {
    "Username": "string",
    "Password": "stringst"
  },
  "S3StagingLocation": {},
  "DataRearrangement": {},
  "DataSchema": {},
  "DataSchemaUri": {}
}
```

Describes the data specification of an Amazon Redshift <code>DataSource</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseInformation|object|true|none|none|
|SelectSqlQuery|object|true|none|none|
|DatabaseCredentials|object|true|none|none|
|S3StagingLocation|object|true|none|none|
|DataRearrangement|object|false|none|none|
|DataSchema|object|false|none|none|
|DataSchemaUri|object|false|none|none|

<h2 id="tocS_S3DataSpec">S3DataSpec</h2>
<!-- backwards compatibility -->
<a id="schemas3dataspec"></a>
<a id="schema_S3DataSpec"></a>
<a id="tocSs3dataspec"></a>
<a id="tocss3dataspec"></a>

```json
{
  "DataLocationS3": {},
  "DataRearrangement": {},
  "DataSchema": {},
  "DataSchemaLocationS3": {}
}
```

 Describes the data specification of a <code>DataSource</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataLocationS3|object|true|none|none|
|DataRearrangement|object|false|none|none|
|DataSchema|object|false|none|none|
|DataSchemaLocationS3|object|false|none|none|

<h2 id="tocS_MLModelType">MLModelType</h2>
<!-- backwards compatibility -->
<a id="schemamlmodeltype"></a>
<a id="schema_MLModelType"></a>
<a id="tocSmlmodeltype"></a>
<a id="tocsmlmodeltype"></a>

```json
"REGRESSION"
```

<h2 id="tocS_TrainingParameters">TrainingParameters</h2>
<!-- backwards compatibility -->
<a id="schematrainingparameters"></a>
<a id="schema_TrainingParameters"></a>
<a id="tocStrainingparameters"></a>
<a id="tocstrainingparameters"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[StringType](#schemastringtype)|false|none|String type.|

<h2 id="tocS_Recipe">Recipe</h2>
<!-- backwards compatibility -->
<a id="schemarecipe"></a>
<a id="schema_Recipe"></a>
<a id="tocSrecipe"></a>
<a id="tocsrecipe"></a>

```json
"string"
```

<h2 id="tocS_RealtimeEndpointInfo">RealtimeEndpointInfo</h2>
<!-- backwards compatibility -->
<a id="schemarealtimeendpointinfo"></a>
<a id="schema_RealtimeEndpointInfo"></a>
<a id="tocSrealtimeendpointinfo"></a>
<a id="tocsrealtimeendpointinfo"></a>

```json
{
  "PeakRequestsPerSecond": {},
  "CreatedAt": {},
  "EndpointUrl": {},
  "EndpointStatus": {}
}
```

 Describes the real-time endpoint information for an <code>MLModel</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PeakRequestsPerSecond|object|false|none|none|
|CreatedAt|object|false|none|none|
|EndpointUrl|object|false|none|none|
|EndpointStatus|object|false|none|none|

<h2 id="tocS_DataRearrangement">DataRearrangement</h2>
<!-- backwards compatibility -->
<a id="schemadatarearrangement"></a>
<a id="schema_DataRearrangement"></a>
<a id="tocSdatarearrangement"></a>
<a id="tocsdatarearrangement"></a>

```json
"string"
```

<h2 id="tocS_DataSchema">DataSchema</h2>
<!-- backwards compatibility -->
<a id="schemadataschema"></a>
<a id="schema_DataSchema"></a>
<a id="tocSdataschema"></a>
<a id="tocsdataschema"></a>

```json
"string"
```

<p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p> <code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code> </p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] }</p>

<h2 id="tocS_RedshiftMetadata">RedshiftMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftmetadata"></a>
<a id="schema_RedshiftMetadata"></a>
<a id="tocSredshiftmetadata"></a>
<a id="tocsredshiftmetadata"></a>

```json
{
  "RedshiftDatabase": {
    "DatabaseName": "string",
    "ClusterIdentifier": "string"
  },
  "DatabaseUserName": "string",
  "SelectSqlQuery": {}
}
```

Describes the <code>DataSource</code> details specific to Amazon Redshift.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RedshiftDatabase|[RedshiftDatabase](#schemaredshiftdatabase)|false|none|Describes the database details required to connect to an Amazon Redshift database.|
|DatabaseUserName|[RedshiftDatabaseUsername](#schemaredshiftdatabaseusername)|false|none|A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.|
|SelectSqlQuery|object|false|none|none|

<h2 id="tocS_RDSMetadata">RDSMetadata</h2>
<!-- backwards compatibility -->
<a id="schemardsmetadata"></a>
<a id="schema_RDSMetadata"></a>
<a id="tocSrdsmetadata"></a>
<a id="tocsrdsmetadata"></a>

```json
{
  "Database": {
    "InstanceIdentifier": {},
    "DatabaseName": "string"
  },
  "DatabaseUserName": "string",
  "SelectSqlQuery": {},
  "ResourceRole": {},
  "ServiceRole": {},
  "DataPipelineId": {}
}
```

The datasource details that are specific to Amazon RDS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Database|object|false|none|none|
|DatabaseUserName|[RDSDatabaseUsername](#schemardsdatabaseusername)|false|none|The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.|
|SelectSqlQuery|object|false|none|none|
|ResourceRole|object|false|none|none|
|ServiceRole|object|false|none|none|
|DataPipelineId|object|false|none|none|

<h2 id="tocS_DataSource">DataSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_DataSource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
{
  "DataSourceId": {},
  "DataLocationS3": {},
  "DataRearrangement": {},
  "CreatedByIamUser": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "DataSizeInBytes": {},
  "NumberOfFiles": {},
  "Name": {},
  "Status": {},
  "Message": {},
  "RedshiftMetadata": {
    "RedshiftDatabase": {
      "DatabaseName": "string",
      "ClusterIdentifier": "string"
    },
    "DatabaseUserName": "string",
    "SelectSqlQuery": {}
  },
  "RDSMetadata": {
    "Database": {
      "InstanceIdentifier": {},
      "DatabaseName": "string"
    },
    "DatabaseUserName": "string",
    "SelectSqlQuery": {},
    "ResourceRole": {},
    "ServiceRole": {},
    "DataPipelineId": {}
  },
  "RoleARN": "string",
  "ComputeStatistics": {},
  "ComputeTime": 0,
  "FinishedAt": "1970-01-01T00:00:00Z",
  "StartedAt": "1970-01-01T00:00:00Z"
}
```

<p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceId|object|false|none|none|
|DataLocationS3|object|false|none|none|
|DataRearrangement|object|false|none|none|
|CreatedByIamUser|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|DataSizeInBytes|object|false|none|none|
|NumberOfFiles|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|RedshiftMetadata|[RedshiftMetadata](#schemaredshiftmetadata)|false|none|Describes the <code>DataSource</code> details specific to Amazon Redshift.|
|RDSMetadata|[RDSMetadata](#schemardsmetadata)|false|none|The datasource details that are specific to Amazon RDS.|
|RoleARN|[RoleARN](#schemarolearn)|false|none|The Amazon Resource Name (ARN) of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename. |
|ComputeStatistics|object|false|none|none|
|ComputeTime|[LongType](#schemalongtype)|false|none|Long integer type that is a 64-bit signed number.|
|FinishedAt|[EpochTime](#schemaepochtime)|false|none|A timestamp represented in epoch time.|
|StartedAt|[EpochTime](#schemaepochtime)|false|none|A timestamp represented in epoch time.|

<h2 id="tocS_DataSourceFilterVariable">DataSourceFilterVariable</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcefiltervariable"></a>
<a id="schema_DataSourceFilterVariable"></a>
<a id="tocSdatasourcefiltervariable"></a>
<a id="tocsdatasourcefiltervariable"></a>

```json
"CreatedAt"
```

<p>A list of the variables to use in searching or filtering <code>DataSource</code>.</p> <ul> <li> <p> <code>CreatedAt</code> - Sets the search criteria to <code>DataSource</code> creation date.</p> </li> <li> <p> <code>Status</code> - Sets the search criteria to <code>DataSource</code> status.</p> </li> <li> <p> <code>Name</code> - Sets the search criteria to the contents of <code>DataSource</code> <code>Name</code>.</p> </li> <li> <p> <code>DataUri</code> - Sets the search criteria to the URI of data files used to create the <code>DataSource</code>. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</p> </li> <li> <p> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>DataSource</code> creation.</p> </li> </ul> <p> <b>Note:</b> The variable names should match the variable names in the <code>DataSource</code>.</p>

<h2 id="tocS_DataSources">DataSources</h2>
<!-- backwards compatibility -->
<a id="schemadatasources"></a>
<a id="schema_DataSources"></a>
<a id="tocSdatasources"></a>
<a id="tocsdatasources"></a>

```json
[
  {
    "DataSourceId": {},
    "DataLocationS3": {},
    "DataRearrangement": {},
    "CreatedByIamUser": {},
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "DataSizeInBytes": {},
    "NumberOfFiles": {},
    "Name": {},
    "Status": {},
    "Message": {},
    "RedshiftMetadata": {
      "RedshiftDatabase": {
        "DatabaseName": "string",
        "ClusterIdentifier": "string"
      },
      "DatabaseUserName": "string",
      "SelectSqlQuery": {}
    },
    "RDSMetadata": {
      "Database": {
        "InstanceIdentifier": {},
        "DatabaseName": "string"
      },
      "DatabaseUserName": "string",
      "SelectSqlQuery": {},
      "ResourceRole": {},
      "ServiceRole": {},
      "DataPipelineId": {}
    },
    "RoleARN": "string",
    "ComputeStatistics": {},
    "ComputeTime": 0,
    "FinishedAt": "1970-01-01T00:00:00Z",
    "StartedAt": "1970-01-01T00:00:00Z"
  }
]
```

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

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"asc"
```

<p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <p> <code>asc</code> - Present the information in ascending order (from A-Z).</p> </li> <li> <p> <code>dsc</code> - Present the information in descending order (from Z-A).</p> </li> </ul>

<h2 id="tocS_StringType">StringType</h2>
<!-- backwards compatibility -->
<a id="schemastringtype"></a>
<a id="schema_StringType"></a>
<a id="tocSstringtype"></a>
<a id="tocsstringtype"></a>

```json
"string"
```

String type.

<h2 id="tocS_PageLimit">PageLimit</h2>
<!-- backwards compatibility -->
<a id="schemapagelimit"></a>
<a id="schema_PageLimit"></a>
<a id="tocSpagelimit"></a>
<a id="tocspagelimit"></a>

```json
1
```

<h2 id="tocS_EvaluationFilterVariable">EvaluationFilterVariable</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationfiltervariable"></a>
<a id="schema_EvaluationFilterVariable"></a>
<a id="tocSevaluationfiltervariable"></a>
<a id="tocsevaluationfiltervariable"></a>

```json
"CreatedAt"
```

<p>A list of the variables to use in searching or filtering <code>Evaluation</code>.</p> <ul> <li> <p> <code>CreatedAt</code> - Sets the search criteria to <code>Evaluation</code> creation date.</p> </li> <li> <p> <code>Status</code> - Sets the search criteria to <code>Evaluation</code> status.</p> </li> <li> <p> <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code> <b> </b> <code>Name</code>.</p> </li> <li> <p> <code>IAMUser</code> - Sets the search criteria to the user account that invoked an evaluation.</p> </li> <li> <p> <code>MLModelId</code> - Sets the search criteria to the <code>Predictor</code> that was evaluated.</p> </li> <li> <p> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in evaluation.</p> </li> <li> <p> <code>DataUri</code> - Sets the search criteria to the data file(s) used in evaluation. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</p> </li> </ul>

<h2 id="tocS_Evaluations">Evaluations</h2>
<!-- backwards compatibility -->
<a id="schemaevaluations"></a>
<a id="schema_Evaluations"></a>
<a id="tocSevaluations"></a>
<a id="tocsevaluations"></a>

```json
[
  {
    "EvaluationId": {},
    "MLModelId": {},
    "EvaluationDataSourceId": {},
    "InputDataLocationS3": {},
    "CreatedByIamUser": {},
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "Name": {},
    "Status": {},
    "PerformanceMetrics": {
      "Properties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "Message": {},
    "ComputeTime": 0,
    "FinishedAt": "1970-01-01T00:00:00Z",
    "StartedAt": "1970-01-01T00:00:00Z"
  }
]
```

<h2 id="tocS_MLModelFilterVariable">MLModelFilterVariable</h2>
<!-- backwards compatibility -->
<a id="schemamlmodelfiltervariable"></a>
<a id="schema_MLModelFilterVariable"></a>
<a id="tocSmlmodelfiltervariable"></a>
<a id="tocsmlmodelfiltervariable"></a>

```json
"CreatedAt"
```

<h2 id="tocS_MLModels">MLModels</h2>
<!-- backwards compatibility -->
<a id="schemamlmodels"></a>
<a id="schema_MLModels"></a>
<a id="tocSmlmodels"></a>
<a id="tocsmlmodels"></a>

```json
[
  {
    "MLModelId": {},
    "TrainingDataSourceId": {},
    "CreatedByIamUser": {},
    "CreatedAt": {},
    "LastUpdatedAt": {},
    "Name": {},
    "Status": {},
    "SizeInBytes": 0,
    "EndpointInfo": {
      "PeakRequestsPerSecond": {},
      "CreatedAt": {},
      "EndpointUrl": {},
      "EndpointStatus": {}
    },
    "TrainingParameters": {
      "property1": "string",
      "property2": "string"
    },
    "InputDataLocationS3": {},
    "Algorithm": {},
    "MLModelType": {},
    "ScoreThreshold": 0,
    "ScoreThresholdLastUpdatedAt": {},
    "Message": {},
    "ComputeTime": 0,
    "FinishedAt": "1970-01-01T00:00:00Z",
    "StartedAt": "1970-01-01T00:00:00Z"
  }
]
```

<h2 id="tocS_DetailsAttributes">DetailsAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadetailsattributes"></a>
<a id="schema_DetailsAttributes"></a>
<a id="tocSdetailsattributes"></a>
<a id="tocsdetailsattributes"></a>

```json
"PredictiveModelType"
```

<p>Contains the key values of <code>DetailsMap</code>:</p> <ul> <li> <p> <code>PredictiveModelType</code> - Indicates the type of the <code>MLModel</code>.</p> </li> <li> <p> <code>Algorithm</code> - Indicates the algorithm that was used for the <code>MLModel</code>.</p> </li> </ul>

<h2 id="tocS_DetailsValue">DetailsValue</h2>
<!-- backwards compatibility -->
<a id="schemadetailsvalue"></a>
<a id="schema_DetailsValue"></a>
<a id="tocSdetailsvalue"></a>
<a id="tocsdetailsvalue"></a>

```json
"string"
```

<h2 id="tocS_DetailsMap">DetailsMap</h2>
<!-- backwards compatibility -->
<a id="schemadetailsmap"></a>
<a id="schema_DetailsMap"></a>
<a id="tocSdetailsmap"></a>
<a id="tocsdetailsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

Provides any additional details regarding the prediction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DetailsValue](#schemadetailsvalue)|false|none|none|

<h2 id="tocS_EDPPipelineId">EDPPipelineId</h2>
<!-- backwards compatibility -->
<a id="schemaedppipelineid"></a>
<a id="schema_EDPPipelineId"></a>
<a id="tocSedppipelineid"></a>
<a id="tocsedppipelineid"></a>

```json
"string"
```

<h2 id="tocS_EDPResourceRole">EDPResourceRole</h2>
<!-- backwards compatibility -->
<a id="schemaedpresourcerole"></a>
<a id="schema_EDPResourceRole"></a>
<a id="tocSedpresourcerole"></a>
<a id="tocsedpresourcerole"></a>

```json
"string"
```

<h2 id="tocS_EDPSecurityGroupId">EDPSecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemaedpsecuritygroupid"></a>
<a id="schema_EDPSecurityGroupId"></a>
<a id="tocSedpsecuritygroupid"></a>
<a id="tocsedpsecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_EDPSecurityGroupIds">EDPSecurityGroupIds</h2>
<!-- backwards compatibility -->
<a id="schemaedpsecuritygroupids"></a>
<a id="schema_EDPSecurityGroupIds"></a>
<a id="tocSedpsecuritygroupids"></a>
<a id="tocsedpsecuritygroupids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EDPServiceRole">EDPServiceRole</h2>
<!-- backwards compatibility -->
<a id="schemaedpservicerole"></a>
<a id="schema_EDPServiceRole"></a>
<a id="tocSedpservicerole"></a>
<a id="tocsedpservicerole"></a>

```json
"string"
```

<h2 id="tocS_EDPSubnetId">EDPSubnetId</h2>
<!-- backwards compatibility -->
<a id="schemaedpsubnetid"></a>
<a id="schema_EDPSubnetId"></a>
<a id="tocSedpsubnetid"></a>
<a id="tocsedpsubnetid"></a>

```json
"string"
```

<h2 id="tocS_PerformanceMetrics">PerformanceMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaperformancemetrics"></a>
<a id="schema_PerformanceMetrics"></a>
<a id="tocSperformancemetrics"></a>
<a id="tocsperformancemetrics"></a>

```json
{
  "Properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="https://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Properties|[PerformanceMetricsProperties](#schemaperformancemetricsproperties)|false|none|none|

<h2 id="tocS_Evaluation">Evaluation</h2>
<!-- backwards compatibility -->
<a id="schemaevaluation"></a>
<a id="schema_Evaluation"></a>
<a id="tocSevaluation"></a>
<a id="tocsevaluation"></a>

```json
{
  "EvaluationId": {},
  "MLModelId": {},
  "EvaluationDataSourceId": {},
  "InputDataLocationS3": {},
  "CreatedByIamUser": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Name": {},
  "Status": {},
  "PerformanceMetrics": {
    "Properties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "Message": {},
  "ComputeTime": 0,
  "FinishedAt": "1970-01-01T00:00:00Z",
  "StartedAt": "1970-01-01T00:00:00Z"
}
```

<p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationId|object|false|none|none|
|MLModelId|object|false|none|none|
|EvaluationDataSourceId|object|false|none|none|
|InputDataLocationS3|object|false|none|none|
|CreatedByIamUser|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|PerformanceMetrics|object|false|none|none|
|Message|object|false|none|none|
|ComputeTime|[LongType](#schemalongtype)|false|none|Long integer type that is a 64-bit signed number.|
|FinishedAt|[EpochTime](#schemaepochtime)|false|none|A timestamp represented in epoch time.|
|StartedAt|[EpochTime](#schemaepochtime)|false|none|A timestamp represented in epoch time.|

<h2 id="tocS_PresignedS3Url">PresignedS3Url</h2>
<!-- backwards compatibility -->
<a id="schemapresigneds3url"></a>
<a id="schema_PresignedS3Url"></a>
<a id="tocSpresigneds3url"></a>
<a id="tocspresigneds3url"></a>

```json
"string"
```

<h2 id="tocS_Verbose">Verbose</h2>
<!-- backwards compatibility -->
<a id="schemaverbose"></a>
<a id="schema_Verbose"></a>
<a id="tocSverbose"></a>
<a id="tocsverbose"></a>

```json
true
```

Specifies whether a describe operation should return exhaustive or abbreviated information.

<h2 id="tocS_MLModelName">MLModelName</h2>
<!-- backwards compatibility -->
<a id="schemamlmodelname"></a>
<a id="schema_MLModelName"></a>
<a id="tocSmlmodelname"></a>
<a id="tocsmlmodelname"></a>

```json
"string"
```

<h2 id="tocS_ScoreThreshold">ScoreThreshold</h2>
<!-- backwards compatibility -->
<a id="schemascorethreshold"></a>
<a id="schema_ScoreThreshold"></a>
<a id="tocSscorethreshold"></a>
<a id="tocsscorethreshold"></a>

```json
0
```

<h2 id="tocS_IntegerType">IntegerType</h2>
<!-- backwards compatibility -->
<a id="schemaintegertype"></a>
<a id="schema_IntegerType"></a>
<a id="tocSintegertype"></a>
<a id="tocsintegertype"></a>

```json
0
```

Integer type that is a 32-bit signed number.

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
"string"
```

<h2 id="tocS_MLModel">MLModel</h2>
<!-- backwards compatibility -->
<a id="schemamlmodel"></a>
<a id="schema_MLModel"></a>
<a id="tocSmlmodel"></a>
<a id="tocsmlmodel"></a>

```json
{
  "MLModelId": {},
  "TrainingDataSourceId": {},
  "CreatedByIamUser": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Name": {},
  "Status": {},
  "SizeInBytes": 0,
  "EndpointInfo": {
    "PeakRequestsPerSecond": {},
    "CreatedAt": {},
    "EndpointUrl": {},
    "EndpointStatus": {}
  },
  "TrainingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "InputDataLocationS3": {},
  "Algorithm": {},
  "MLModelType": {},
  "ScoreThreshold": 0,
  "ScoreThresholdLastUpdatedAt": {},
  "Message": {},
  "ComputeTime": 0,
  "FinishedAt": "1970-01-01T00:00:00Z",
  "StartedAt": "1970-01-01T00:00:00Z"
}
```

<p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MLModelId|object|false|none|none|
|TrainingDataSourceId|object|false|none|none|
|CreatedByIamUser|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|SizeInBytes|[LongType](#schemalongtype)|false|none|Long integer type that is a 64-bit signed number.|
|EndpointInfo|object|false|none|none|
|TrainingParameters|object|false|none|none|
|InputDataLocationS3|object|false|none|none|
|Algorithm|object|false|none|none|
|MLModelType|object|false|none|none|
|ScoreThreshold|[ScoreThreshold](#schemascorethreshold)|false|none|none|
|ScoreThresholdLastUpdatedAt|object|false|none|none|
|Message|object|false|none|none|
|ComputeTime|[LongType](#schemalongtype)|false|none|Long integer type that is a 64-bit signed number.|
|FinishedAt|[EpochTime](#schemaepochtime)|false|none|A timestamp represented in epoch time.|
|StartedAt|[EpochTime](#schemaepochtime)|false|none|A timestamp represented in epoch time.|

<h2 id="tocS_PerformanceMetricsProperties">PerformanceMetricsProperties</h2>
<!-- backwards compatibility -->
<a id="schemaperformancemetricsproperties"></a>
<a id="schema_PerformanceMetricsProperties"></a>
<a id="tocSperformancemetricsproperties"></a>
<a id="tocsperformancemetricsproperties"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PerformanceMetricsPropertyValue](#schemaperformancemetricspropertyvalue)|false|none|none|

<h2 id="tocS_PerformanceMetricsPropertyValue">PerformanceMetricsPropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemaperformancemetricspropertyvalue"></a>
<a id="schema_PerformanceMetricsPropertyValue"></a>
<a id="tocSperformancemetricspropertyvalue"></a>
<a id="tocsperformancemetricspropertyvalue"></a>

```json
"string"
```

<h2 id="tocS_PerformanceMetricsPropertyKey">PerformanceMetricsPropertyKey</h2>
<!-- backwards compatibility -->
<a id="schemaperformancemetricspropertykey"></a>
<a id="schema_PerformanceMetricsPropertyKey"></a>
<a id="tocSperformancemetricspropertykey"></a>
<a id="tocsperformancemetricspropertykey"></a>

```json
"string"
```

<h2 id="tocS_Record">Record</h2>
<!-- backwards compatibility -->
<a id="schemarecord"></a>
<a id="schema_Record"></a>
<a id="tocSrecord"></a>
<a id="tocsrecord"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

A map of variable name-value pairs that represent an observation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[VariableValue](#schemavariablevalue)|false|none|The value of a variable. Currently it's used to specify values of the target value, weights, and tag variables and for filtering variable values.|

<h2 id="tocS_VipURL">VipURL</h2>
<!-- backwards compatibility -->
<a id="schemavipurl"></a>
<a id="schema_VipURL"></a>
<a id="tocSvipurl"></a>
<a id="tocsvipurl"></a>

```json
"string"
```

<h2 id="tocS_Prediction">Prediction</h2>
<!-- backwards compatibility -->
<a id="schemaprediction"></a>
<a id="schema_Prediction"></a>
<a id="tocSprediction"></a>
<a id="tocsprediction"></a>

```json
{
  "predictedLabel": {},
  "predictedValue": {},
  "predictedScores": {
    "property1": 0,
    "property2": 0
  },
  "details": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|predictedLabel|object|false|none|none|
|predictedValue|object|false|none|none|
|predictedScores|[ScoreValuePerLabelMap](#schemascorevalueperlabelmap)|false|none|Provides the raw classification score corresponding to each label.|
|details|[DetailsMap](#schemadetailsmap)|false|none|Provides any additional details regarding the prediction.|

<h2 id="tocS_floatLabel">floatLabel</h2>
<!-- backwards compatibility -->
<a id="schemafloatlabel"></a>
<a id="schema_floatLabel"></a>
<a id="tocSfloatlabel"></a>
<a id="tocsfloatlabel"></a>

```json
0
```

<h2 id="tocS_ScoreValuePerLabelMap">ScoreValuePerLabelMap</h2>
<!-- backwards compatibility -->
<a id="schemascorevalueperlabelmap"></a>
<a id="schema_ScoreValuePerLabelMap"></a>
<a id="tocSscorevalueperlabelmap"></a>
<a id="tocsscorevalueperlabelmap"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

Provides the raw classification score corresponding to each label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ScoreValue](#schemascorevalue)|false|none|none|

<h2 id="tocS_RDSDatabase">RDSDatabase</h2>
<!-- backwards compatibility -->
<a id="schemardsdatabase"></a>
<a id="schema_RDSDatabase"></a>
<a id="tocSrdsdatabase"></a>
<a id="tocsrdsdatabase"></a>

```json
{
  "InstanceIdentifier": {},
  "DatabaseName": "string"
}
```

The database details of an Amazon RDS database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceIdentifier|object|true|none|none|
|DatabaseName|[RDSDatabaseName](#schemardsdatabasename)|true|none|The name of a database hosted on an RDS DB instance.|

<h2 id="tocS_RDSSelectSqlQuery">RDSSelectSqlQuery</h2>
<!-- backwards compatibility -->
<a id="schemardsselectsqlquery"></a>
<a id="schema_RDSSelectSqlQuery"></a>
<a id="tocSrdsselectsqlquery"></a>
<a id="tocsrdsselectsqlquery"></a>

```json
"string"
```

The SQL query to be executed against the Amazon RDS database. The SQL query should be valid for the Amazon RDS type being used.

<h2 id="tocS_RDSDatabaseCredentials">RDSDatabaseCredentials</h2>
<!-- backwards compatibility -->
<a id="schemardsdatabasecredentials"></a>
<a id="schema_RDSDatabaseCredentials"></a>
<a id="tocSrdsdatabasecredentials"></a>
<a id="tocsrdsdatabasecredentials"></a>

```json
{
  "Username": "string",
  "Password": "stringst"
}
```

The database credentials to connect to a database on an RDS DB instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|[RDSDatabaseUsername](#schemardsdatabaseusername)|true|none|The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.|
|Password|[RDSDatabasePassword](#schemardsdatabasepassword)|true|none|The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.|

<h2 id="tocS_RDSInstanceIdentifier">RDSInstanceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemardsinstanceidentifier"></a>
<a id="schema_RDSInstanceIdentifier"></a>
<a id="tocSrdsinstanceidentifier"></a>
<a id="tocsrdsinstanceidentifier"></a>

```json
"string"
```

Identifier of RDS DB Instances.

<h2 id="tocS_RDSDatabaseName">RDSDatabaseName</h2>
<!-- backwards compatibility -->
<a id="schemardsdatabasename"></a>
<a id="schema_RDSDatabaseName"></a>
<a id="tocSrdsdatabasename"></a>
<a id="tocsrdsdatabasename"></a>

```json
"string"
```

The name of a database hosted on an RDS DB instance.

<h2 id="tocS_RDSDatabaseUsername">RDSDatabaseUsername</h2>
<!-- backwards compatibility -->
<a id="schemardsdatabaseusername"></a>
<a id="schema_RDSDatabaseUsername"></a>
<a id="tocSrdsdatabaseusername"></a>
<a id="tocsrdsdatabaseusername"></a>

```json
"string"
```

The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.

<h2 id="tocS_RDSDatabasePassword">RDSDatabasePassword</h2>
<!-- backwards compatibility -->
<a id="schemardsdatabasepassword"></a>
<a id="schema_RDSDatabasePassword"></a>
<a id="tocSrdsdatabasepassword"></a>
<a id="tocsrdsdatabasepassword"></a>

```json
"stringst"
```

The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.

<h2 id="tocS_RealtimeEndpointStatus">RealtimeEndpointStatus</h2>
<!-- backwards compatibility -->
<a id="schemarealtimeendpointstatus"></a>
<a id="schema_RealtimeEndpointStatus"></a>
<a id="tocSrealtimeendpointstatus"></a>
<a id="tocsrealtimeendpointstatus"></a>

```json
"NONE"
```

<h2 id="tocS_VariableValue">VariableValue</h2>
<!-- backwards compatibility -->
<a id="schemavariablevalue"></a>
<a id="schema_VariableValue"></a>
<a id="tocSvariablevalue"></a>
<a id="tocsvariablevalue"></a>

```json
"string"
```

The value of a variable. Currently it's used to specify values of the target value, weights, and tag variables and for filtering variable values.

<h2 id="tocS_RedshiftClusterIdentifier">RedshiftClusterIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftclusteridentifier"></a>
<a id="schema_RedshiftClusterIdentifier"></a>
<a id="tocSredshiftclusteridentifier"></a>
<a id="tocsredshiftclusteridentifier"></a>

```json
"string"
```

The ID of an Amazon Redshift cluster.

<h2 id="tocS_RedshiftDatabase">RedshiftDatabase</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdatabase"></a>
<a id="schema_RedshiftDatabase"></a>
<a id="tocSredshiftdatabase"></a>
<a id="tocsredshiftdatabase"></a>

```json
{
  "DatabaseName": "string",
  "ClusterIdentifier": "string"
}
```

Describes the database details required to connect to an Amazon Redshift database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseName|[RedshiftDatabaseName](#schemaredshiftdatabasename)|true|none|The name of a database hosted on an Amazon Redshift cluster.|
|ClusterIdentifier|[RedshiftClusterIdentifier](#schemaredshiftclusteridentifier)|true|none|The ID of an Amazon Redshift cluster.|

<h2 id="tocS_RedshiftSelectSqlQuery">RedshiftSelectSqlQuery</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftselectsqlquery"></a>
<a id="schema_RedshiftSelectSqlQuery"></a>
<a id="tocSredshiftselectsqlquery"></a>
<a id="tocsredshiftselectsqlquery"></a>

```json
"string"
```

 Describes the SQL query to execute on the Amazon Redshift database. The SQL query should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_SELECT_synopsis.html">SELECT</a>.

<h2 id="tocS_RedshiftDatabaseCredentials">RedshiftDatabaseCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdatabasecredentials"></a>
<a id="schema_RedshiftDatabaseCredentials"></a>
<a id="tocSredshiftdatabasecredentials"></a>
<a id="tocsredshiftdatabasecredentials"></a>

```json
{
  "Username": "string",
  "Password": "stringst"
}
```

Describes the database credentials for connecting to a database on an Amazon Redshift cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Username|[RedshiftDatabaseUsername](#schemaredshiftdatabaseusername)|true|none|A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.|
|Password|[RedshiftDatabasePassword](#schemaredshiftdatabasepassword)|true|none|A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.|

<h2 id="tocS_RedshiftDatabaseName">RedshiftDatabaseName</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdatabasename"></a>
<a id="schema_RedshiftDatabaseName"></a>
<a id="tocSredshiftdatabasename"></a>
<a id="tocsredshiftdatabasename"></a>

```json
"string"
```

The name of a database hosted on an Amazon Redshift cluster.

<h2 id="tocS_RedshiftDatabaseUsername">RedshiftDatabaseUsername</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdatabaseusername"></a>
<a id="schema_RedshiftDatabaseUsername"></a>
<a id="tocSredshiftdatabaseusername"></a>
<a id="tocsredshiftdatabaseusername"></a>

```json
"string"
```

A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.

<h2 id="tocS_RedshiftDatabasePassword">RedshiftDatabasePassword</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdatabasepassword"></a>
<a id="schema_RedshiftDatabasePassword"></a>
<a id="tocSredshiftdatabasepassword"></a>
<a id="tocsredshiftdatabasepassword"></a>

```json
"stringst"
```

A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.

<h2 id="tocS_ScoreValue">ScoreValue</h2>
<!-- backwards compatibility -->
<a id="schemascorevalue"></a>
<a id="schema_ScoreValue"></a>
<a id="tocSscorevalue"></a>
<a id="tocsscorevalue"></a>

```json
0
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

A custom key-value pair associated with an ML object, such as an ML model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_VariableName">VariableName</h2>
<!-- backwards compatibility -->
<a id="schemavariablename"></a>
<a id="schema_VariableName"></a>
<a id="tocSvariablename"></a>
<a id="tocsvariablename"></a>

```json
"string"
```

The name of a variable. Currently it's used to specify the name of the target value, label, weight, and tags.
