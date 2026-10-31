<h1 id="amazon-forecast-service">Amazon Forecast Service v2018-06-26</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides APIs for creating and managing Amazon Forecast resources.

Base URLs:

* <a href="http://forecast.us-east-1.amazonaws.com">http://forecast.us-east-1.amazonaws.com</a> - The Amazon Forecast Service multi-region endpoint

* <a href="https://forecast.us-east-1.amazonaws.com">https://forecast.us-east-1.amazonaws.com</a> - The Amazon Forecast Service multi-region endpoint

* <a href="http://forecast.cn-north-1.amazonaws.com.cn">http://forecast.cn-north-1.amazonaws.com.cn</a> - The Amazon Forecast Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://forecast.cn-north-1.amazonaws.com.cn">https://forecast.cn-north-1.amazonaws.com.cn</a> - The Amazon Forecast Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/forecast/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-forecast-service-default">Default</h1>

## CreateAutoPredictor

<a id="opIdCreateAutoPredictor"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreateAutoPredictor' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreateAutoPredictor' \
  -d '{
    "PredictorName": {},
    "ForecastHorizon": {},
    "ForecastTypes": {},
    "ForecastDimensions": {},
    "ForecastFrequency": {},
    "DataConfig": {
      "DatasetGroupArn": {},
      "AttributeConfigs": {},
      "AdditionalDatasets": {}
    },
    "EncryptionConfig": {
      "RoleArn": {},
      "KMSKeyArn": {}
    },
    "ReferencePredictorArn": {},
    "OptimizationMetric": {},
    "ExplainPredictor": {},
    "Tags": {},
    "MonitorConfig": {
      "MonitorName": {}
    },
    "TimeAlignmentBoundary": {
      "Month": {},
      "DayOfMonth": {},
      "DayOfWeek": {},
      "Hour": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreateAutoPredictor`

<p>Creates an Amazon Forecast predictor.</p> <p>Amazon Forecast creates predictors with AutoPredictor, which involves applying the optimal combination of algorithms to each time series in your datasets. You can use <a>CreateAutoPredictor</a> to create new predictors or upgrade/retrain existing predictors.</p> <p> <b>Creating new predictors</b> </p> <p>The following parameters are required when creating a new predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>DatasetGroupArn</code> - The ARN of the dataset group used to train the predictor.</p> </li> <li> <p> <code>ForecastFrequency</code> - The granularity of your forecasts (hourly, daily, weekly, etc).</p> </li> <li> <p> <code>ForecastHorizon</code> - The number of time-steps that the model predicts. The forecast horizon is also called the prediction length.</p> </li> </ul> <p>When creating a new predictor, do not specify a value for <code>ReferencePredictorArn</code>.</p> <p> <b>Upgrading and retraining predictors</b> </p> <p>The following parameters are required when retraining or upgrading a predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>ReferencePredictorArn</code> - The ARN of the predictor to retrain or upgrade.</p> </li> </ul> <p>When upgrading or retraining a predictor, only specify values for the <code>ReferencePredictorArn</code> and <code>PredictorName</code>. </p>

> Body parameter

```json
{
  "PredictorName": {},
  "ForecastHorizon": {},
  "ForecastTypes": {},
  "ForecastDimensions": {},
  "ForecastFrequency": {},
  "DataConfig": {
    "DatasetGroupArn": {},
    "AttributeConfigs": {},
    "AdditionalDatasets": {}
  },
  "EncryptionConfig": {
    "RoleArn": {},
    "KMSKeyArn": {}
  },
  "ReferencePredictorArn": {},
  "OptimizationMetric": {},
  "ExplainPredictor": {},
  "Tags": {},
  "MonitorConfig": {
    "MonitorName": {}
  },
  "TimeAlignmentBoundary": {
    "Month": {},
    "DayOfMonth": {},
    "DayOfWeek": {},
    "Hour": {}
  }
}
```

<h3 id="createautopredictor-parameters">Parameters</h3>

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
|body|body|[CreateAutoPredictorRequest](#schemacreateautopredictorrequest)|true|none|
|» PredictorName|body|object|true|none|
|» ForecastHorizon|body|object|false|none|
|» ForecastTypes|body|object|false|none|
|» ForecastDimensions|body|object|false|none|
|» ForecastFrequency|body|object|false|none|
|» DataConfig|body|object|false|none|
|» » DatasetGroupArn|body|object|true|none|
|» » AttributeConfigs|body|object|false|none|
|» » AdditionalDatasets|body|object|false|none|
|» EncryptionConfig|body|[EncryptionConfig](#schemaencryptionconfig)|false|An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests.|
|» ReferencePredictorArn|body|object|false|none|
|» OptimizationMetric|body|object|false|none|
|» ExplainPredictor|body|object|false|none|
|» Tags|body|object|false|none|
|» MonitorConfig|body|object|false|none|
|» » MonitorName|body|object|true|none|
|» TimeAlignmentBoundary|body|object|false|none|
|» » Month|body|object|false|none|
|» » DayOfMonth|body|object|false|none|
|» » DayOfWeek|body|object|false|none|
|» » Hour|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreateAutoPredictor|

> Example responses

> 200 Response

```json
{
  "PredictorArn": {}
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

<h3 id="createautopredictor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAutoPredictorResponse](#schemacreateautopredictorresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataset

<a id="opIdCreateDataset"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreateDataset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreateDataset' \
  -d '{
    "DatasetName": {},
    "Domain": {},
    "DatasetType": {},
    "DataFrequency": {},
    "Schema": {
      "Attributes": {}
    },
    "EncryptionConfig": {
      "RoleArn": {},
      "KMSKeyArn": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreateDataset`

<p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:</p> <ul> <li> <p> <i> <code>DataFrequency</code> </i> - How frequently your historical time-series data is collected.</p> </li> <li> <p> <i> <code>Domain</code> </i> and <i> <code>DatasetType</code> </i> - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.</p> </li> <li> <p> <i> <code>Schema</code> </i> - A schema specifies the fields in the dataset, including the field name and data type.</p> </li> </ul> <p>After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Importing datasets</a>.</p> <p>To get a list of all your datasets, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation.</p> <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub repository</a>.</p> <note> <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import training data. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation to get the status.</p> </note>

> Body parameter

```json
{
  "DatasetName": {},
  "Domain": {},
  "DatasetType": {},
  "DataFrequency": {},
  "Schema": {
    "Attributes": {}
  },
  "EncryptionConfig": {
    "RoleArn": {},
    "KMSKeyArn": {}
  },
  "Tags": {}
}
```

<h3 id="createdataset-parameters">Parameters</h3>

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
|body|body|[CreateDatasetRequest](#schemacreatedatasetrequest)|true|none|
|» DatasetName|body|object|true|none|
|» Domain|body|object|true|none|
|» DatasetType|body|object|true|none|
|» DataFrequency|body|object|false|none|
|» Schema|body|object|true|none|
|» » Attributes|body|object|false|none|
|» EncryptionConfig|body|object|false|none|
|» » RoleArn|body|object|true|none|
|» » KMSKeyArn|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreateDataset|

> Example responses

> 200 Response

```json
{
  "DatasetArn": {}
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

<h3 id="createdataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDatasetResponse](#schemacreatedatasetresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDatasetGroup

<a id="opIdCreateDatasetGroup"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreateDatasetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreateDatasetGroup' \
  -d '{
    "DatasetGroupName": {},
    "Domain": {},
    "DatasetArns": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreateDatasetGroup`

<p>Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation.</p> <p>After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p> <p>To get a list of all your datasets groups, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation.</p> <note> <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> </note>

> Body parameter

```json
{
  "DatasetGroupName": {},
  "Domain": {},
  "DatasetArns": {},
  "Tags": {}
}
```

<h3 id="createdatasetgroup-parameters">Parameters</h3>

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
|body|body|[CreateDatasetGroupRequest](#schemacreatedatasetgrouprequest)|true|none|
|» DatasetGroupName|body|object|true|none|
|» Domain|body|object|true|none|
|» DatasetArns|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreateDatasetGroup|

> Example responses

> 200 Response

```json
{
  "DatasetGroupArn": {}
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

<h3 id="createdatasetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDatasetGroupResponse](#schemacreatedatasetgroupresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDatasetImportJob

<a id="opIdCreateDatasetImportJob"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreateDatasetImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreateDatasetImportJob' \
  -d '{
    "DatasetImportJobName": {},
    "DatasetArn": {},
    "DataSource": {
      "S3Config": {
        "Path": {},
        "RoleArn": {},
        "KMSKeyArn": {}
      }
    },
    "TimestampFormat": {},
    "TimeZone": {},
    "UseGeolocationForTimeZone": {},
    "GeolocationFormat": {},
    "Tags": {},
    "Format": {},
    "ImportMode": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreateDatasetImportJob`

<p>Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to.</p> <p>You must specify a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DataSource.html">DataSource</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal Amazon Web Services system. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-iam-roles.html">Set up permissions</a>.</p> <p>The training data must be in CSV or Parquet format. The delimiter must be a comma (,).</p> <p>You can specify the path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files.</p> <p>Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import.</p> <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation.</p>

> Body parameter

```json
{
  "DatasetImportJobName": {},
  "DatasetArn": {},
  "DataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "TimestampFormat": {},
  "TimeZone": {},
  "UseGeolocationForTimeZone": {},
  "GeolocationFormat": {},
  "Tags": {},
  "Format": {},
  "ImportMode": {}
}
```

<h3 id="createdatasetimportjob-parameters">Parameters</h3>

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
|body|body|[CreateDatasetImportJobRequest](#schemacreatedatasetimportjobrequest)|true|none|
|» DatasetImportJobName|body|object|true|none|
|» DatasetArn|body|object|true|none|
|» DataSource|body|object|true|none|
|» » S3Config|body|object|true|none|
|» » » Path|body|object|true|none|
|» » » RoleArn|body|object|true|none|
|» » » KMSKeyArn|body|object|false|none|
|» TimestampFormat|body|object|false|none|
|» TimeZone|body|object|false|none|
|» UseGeolocationForTimeZone|body|object|false|none|
|» GeolocationFormat|body|object|false|none|
|» Tags|body|object|false|none|
|» Format|body|object|false|none|
|» ImportMode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreateDatasetImportJob|

> Example responses

> 200 Response

```json
{
  "DatasetImportJobArn": {}
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

<h3 id="createdatasetimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDatasetImportJobResponse](#schemacreatedatasetimportjobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateExplainability

<a id="opIdCreateExplainability"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreateExplainability' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreateExplainability' \
  -d '{
    "ExplainabilityName": {},
    "ResourceArn": {},
    "ExplainabilityConfig": {
      "TimeSeriesGranularity": {},
      "TimePointGranularity": {}
    },
    "DataSource": {
      "S3Config": {
        "Path": {},
        "RoleArn": {},
        "KMSKeyArn": {}
      }
    },
    "Schema": {
      "Attributes": {}
    },
    "EnableVisualization": {},
    "StartDateTime": {},
    "EndDateTime": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreateExplainability`

<note> <p>Explainability is only available for Forecasts and Predictors generated from an AutoPredictor (<a>CreateAutoPredictor</a>)</p> </note> <p>Creates an Amazon Forecast Explainability.</p> <p>Explainability helps you better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative impact of each attribute and determine whether they increase or decrease forecast values.</p> <p>To enable Forecast Explainability, your predictor must include at least one of the following: related time series, item metadata, or additional datasets like Holidays and the Weather Index.</p> <p>CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a Forecast ARN.</p> <p> <b>CreateExplainability with a Predictor ARN</b> </p> <note> <p>You can only have one Explainability resource per predictor. If you already enabled <code>ExplainPredictor</code> in <a>CreateAutoPredictor</a>, that predictor already has an Explainability resource.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the predictor.</p> </li> <li> <p> <code>TimePointGranularity</code> - Must be set to “ALL”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Must be set to “ALL”.</p> </li> </ul> <p>Do not specify a value for the following parameters:</p> <ul> <li> <p> <code>DataSource</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>Schema</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>StartDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>EndDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> </ul> <p> <b>CreateExplainability with a Forecast ARN</b> </p> <note> <p>You can specify a maximum of 50 time series and 500 time points.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the forecast.</p> </li> <li> <p> <code>TimePointGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> </ul> <p>If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>DataSource</code> - The S3 location of the CSV file specifying your time series.</p> </li> <li> <p> <code>Schema</code> - The Schema defines the attributes and attribute types listed in the Data Source.</p> </li> </ul> <p>If you set TimePointGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>StartDateTime</code> - The first timestamp in the range of time points.</p> </li> <li> <p> <code>EndDateTime</code> - The last timestamp in the range of time points.</p> </li> </ul>

> Body parameter

```json
{
  "ExplainabilityName": {},
  "ResourceArn": {},
  "ExplainabilityConfig": {
    "TimeSeriesGranularity": {},
    "TimePointGranularity": {}
  },
  "DataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Schema": {
    "Attributes": {}
  },
  "EnableVisualization": {},
  "StartDateTime": {},
  "EndDateTime": {},
  "Tags": {}
}
```

<h3 id="createexplainability-parameters">Parameters</h3>

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
|body|body|[CreateExplainabilityRequest](#schemacreateexplainabilityrequest)|true|none|
|» ExplainabilityName|body|object|true|none|
|» ResourceArn|body|object|true|none|
|» ExplainabilityConfig|body|object|true|none|
|» » TimeSeriesGranularity|body|object|true|none|
|» » TimePointGranularity|body|object|true|none|
|» DataSource|body|[DataSource](#schemadatasource)|false|The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.|
|» Schema|body|[Schema](#schemaschema)|false|Defines the fields of a dataset.|
|» EnableVisualization|body|object|false|none|
|» StartDateTime|body|object|false|none|
|» EndDateTime|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreateExplainability|

> Example responses

> 200 Response

```json
{
  "ExplainabilityArn": {}
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

<h3 id="createexplainability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateExplainabilityResponse](#schemacreateexplainabilityresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateExplainabilityExport

<a id="opIdCreateExplainabilityExport"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreateExplainabilityExport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreateExplainabilityExport' \
  -d '{
    "ExplainabilityExportName": {},
    "ExplainabilityArn": {},
    "Destination": {
      "S3Config": {
        "Path": {},
        "RoleArn": {},
        "KMSKeyArn": {}
      }
    },
    "Tags": {},
    "Format": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreateExplainabilityExport`

<p>Exports an Explainability resource created by the <a>CreateExplainability</a> operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket.</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribeExplainabilityExport</a> operation.</p> </note>

> Body parameter

```json
{
  "ExplainabilityExportName": {},
  "ExplainabilityArn": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Tags": {},
  "Format": {}
}
```

<h3 id="createexplainabilityexport-parameters">Parameters</h3>

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
|body|body|[CreateExplainabilityExportRequest](#schemacreateexplainabilityexportrequest)|true|none|
|» ExplainabilityExportName|body|object|true|none|
|» ExplainabilityArn|body|object|true|none|
|» Destination|body|[DataDestination](#schemadatadestination)|true|The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). |
|» Tags|body|object|false|none|
|» Format|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreateExplainabilityExport|

> Example responses

> 200 Response

```json
{
  "ExplainabilityExportArn": {}
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

<h3 id="createexplainabilityexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateExplainabilityExportResponse](#schemacreateexplainabilityexportresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateForecast

<a id="opIdCreateForecast"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreateForecast' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreateForecast' \
  -d '{
    "ForecastName": {},
    "PredictorArn": {},
    "ForecastTypes": {},
    "Tags": {},
    "TimeSeriesSelector": {
      "TimeSeriesIdentifiers": {
        "DataSource": {
          "S3Config": {
            "Path": {},
            "RoleArn": {},
            "KMSKeyArn": {}
          }
        },
        "Schema": {
          "Attributes": {}
        },
        "Format": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreateForecast`

<p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p> <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which you specify in the <a>CreatePredictor</a> request. When you query a forecast, you can request a specific date range within the forecast.</p> <p>To get a list of all your forecasts, use the <a>ListForecasts</a> operation.</p> <note> <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor.</p> </note> <p>For more information, see <a>howitworks-forecast</a>.</p> <note> <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query or export the forecast. Use the <a>DescribeForecast</a> operation to get the status.</p> </note> <p>By default, a forecast includes predictions for every item (<code>item_id</code>) in the dataset group that was used to train the predictor. However, you can use the <code>TimeSeriesSelector</code> object to generate a forecast on a subset of time series. Forecast creation is skipped for any time series that you specify that are not in the input dataset. The forecast export file will not contain these time series or their forecasted values.</p>

> Body parameter

```json
{
  "ForecastName": {},
  "PredictorArn": {},
  "ForecastTypes": {},
  "Tags": {},
  "TimeSeriesSelector": {
    "TimeSeriesIdentifiers": {
      "DataSource": {
        "S3Config": {
          "Path": {},
          "RoleArn": {},
          "KMSKeyArn": {}
        }
      },
      "Schema": {
        "Attributes": {}
      },
      "Format": {}
    }
  }
}
```

<h3 id="createforecast-parameters">Parameters</h3>

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
|body|body|[CreateForecastRequest](#schemacreateforecastrequest)|true|none|
|» ForecastName|body|object|true|none|
|» PredictorArn|body|object|true|none|
|» ForecastTypes|body|object|false|none|
|» Tags|body|object|false|none|
|» TimeSeriesSelector|body|object|false|none|
|» » TimeSeriesIdentifiers|body|object|false|none|
|» » » DataSource|body|[DataSource](#schemadatasource)|false|The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.|
|» » » Schema|body|[Schema](#schemaschema)|false|Defines the fields of a dataset.|
|» » » Format|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreateForecast|

> Example responses

> 200 Response

```json
{
  "ForecastArn": {}
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

<h3 id="createforecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateForecastResponse](#schemacreateforecastresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateForecastExportJob

<a id="opIdCreateForecastExportJob"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreateForecastExportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreateForecastExportJob' \
  -d '{
    "ForecastExportJobName": {},
    "ForecastArn": {},
    "Destination": {
      "S3Config": {
        "Path": {},
        "RoleArn": {},
        "KMSKeyArn": {}
      }
    },
    "Tags": {},
    "Format": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreateForecastExportJob`

<p>Exports a forecast created by the <a>CreateForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p>&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</p> <p>where the &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p> </note>

> Body parameter

```json
{
  "ForecastExportJobName": {},
  "ForecastArn": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Tags": {},
  "Format": {}
}
```

<h3 id="createforecastexportjob-parameters">Parameters</h3>

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
|body|body|[CreateForecastExportJobRequest](#schemacreateforecastexportjobrequest)|true|none|
|» ForecastExportJobName|body|object|true|none|
|» ForecastArn|body|object|true|none|
|» Destination|body|object|true|none|
|» » S3Config|body|object|true|none|
|» » » Path|body|object|true|none|
|» » » RoleArn|body|object|true|none|
|» » » KMSKeyArn|body|object|false|none|
|» Tags|body|object|false|none|
|» Format|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreateForecastExportJob|

> Example responses

> 200 Response

```json
{
  "ForecastExportJobArn": {}
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

<h3 id="createforecastexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateForecastExportJobResponse](#schemacreateforecastexportjobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMonitor

<a id="opIdCreateMonitor"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreateMonitor' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreateMonitor' \
  -d '{
    "MonitorName": {},
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreateMonitor`

Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html">Predictor Monitoring</a>. 

> Body parameter

```json
{
  "MonitorName": {},
  "ResourceArn": {},
  "Tags": {}
}
```

<h3 id="createmonitor-parameters">Parameters</h3>

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
|body|body|[CreateMonitorRequest](#schemacreatemonitorrequest)|true|none|
|» MonitorName|body|object|true|none|
|» ResourceArn|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreateMonitor|

> Example responses

> 200 Response

```json
{
  "MonitorArn": {}
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

<h3 id="createmonitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMonitorResponse](#schemacreatemonitorresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePredictor

<a id="opIdCreatePredictor"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreatePredictor' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreatePredictor' \
  -d '{
    "PredictorName": {},
    "AlgorithmArn": {},
    "ForecastHorizon": {},
    "ForecastTypes": {},
    "PerformAutoML": {},
    "AutoMLOverrideStrategy": {},
    "PerformHPO": {},
    "TrainingParameters": {
      "property1": "string",
      "property2": "string"
    },
    "EvaluationParameters": {
      "NumberOfBacktestWindows": {},
      "BackTestWindowOffset": {}
    },
    "HPOConfig": {
      "ParameterRanges": {
        "CategoricalParameterRanges": {},
        "ContinuousParameterRanges": {},
        "IntegerParameterRanges": {}
      }
    },
    "InputDataConfig": {
      "DatasetGroupArn": {},
      "SupplementaryFeatures": {}
    },
    "FeaturizationConfig": {
      "ForecastFrequency": {},
      "ForecastDimensions": {},
      "Featurizations": {}
    },
    "EncryptionConfig": {
      "RoleArn": {},
      "KMSKeyArn": {}
    },
    "Tags": {},
    "OptimizationMetric": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreatePredictor`

<note> <p> This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use <a>CreateAutoPredictor</a>.</p> </note> <p>Creates an Amazon Forecast predictor.</p> <p>In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters.</p> <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the <a>CreateForecast</a> operation.</p> <p> To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation. </p> <p>You can specify a featurization configuration to fill and aggregate the data fields in the <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more information, see <a>FeaturizationConfig</a>.</p> <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the <code>DataFrequency</code> specified when the dataset was created matches the <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p> <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9 (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by setting the <code>ForecastTypes</code>. </p> <p> <b>AutoML</b> </p> <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The <code>objective function</code> is defined as the mean of the weighted losses over the forecast types. By default, these are the p10, p50, and p90 quantile losses. For more information, see <a>EvaluationResult</a>.</p> <p>When AutoML is enabled, the following properties are disallowed:</p> <ul> <li> <p> <code>AlgorithmArn</code> </p> </li> <li> <p> <code>HPOConfig</code> </p> </li> <li> <p> <code>PerformHPO</code> </p> </li> <li> <p> <code>TrainingParameters</code> </p> </li> </ul> <p>To get a list of all of your predictors, use the <a>ListPredictors</a> operation.</p> <note> <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>

> Body parameter

```json
{
  "PredictorName": {},
  "AlgorithmArn": {},
  "ForecastHorizon": {},
  "ForecastTypes": {},
  "PerformAutoML": {},
  "AutoMLOverrideStrategy": {},
  "PerformHPO": {},
  "TrainingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "EvaluationParameters": {
    "NumberOfBacktestWindows": {},
    "BackTestWindowOffset": {}
  },
  "HPOConfig": {
    "ParameterRanges": {
      "CategoricalParameterRanges": {},
      "ContinuousParameterRanges": {},
      "IntegerParameterRanges": {}
    }
  },
  "InputDataConfig": {
    "DatasetGroupArn": {},
    "SupplementaryFeatures": {}
  },
  "FeaturizationConfig": {
    "ForecastFrequency": {},
    "ForecastDimensions": {},
    "Featurizations": {}
  },
  "EncryptionConfig": {
    "RoleArn": {},
    "KMSKeyArn": {}
  },
  "Tags": {},
  "OptimizationMetric": {}
}
```

<h3 id="createpredictor-parameters">Parameters</h3>

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
|body|body|[CreatePredictorRequest](#schemacreatepredictorrequest)|true|none|
|» PredictorName|body|object|true|none|
|» AlgorithmArn|body|object|false|none|
|» ForecastHorizon|body|object|true|none|
|» ForecastTypes|body|object|false|none|
|» PerformAutoML|body|object|false|none|
|» AutoMLOverrideStrategy|body|object|false|none|
|» PerformHPO|body|object|false|none|
|» TrainingParameters|body|object|false|none|
|» » **additionalProperties**|body|[ParameterValue](#schemaparametervalue)|false|none|
|» EvaluationParameters|body|object|false|none|
|» » NumberOfBacktestWindows|body|object|false|none|
|» » BackTestWindowOffset|body|object|false|none|
|» HPOConfig|body|object|false|none|
|» » ParameterRanges|body|object|false|none|
|» » » CategoricalParameterRanges|body|object|false|none|
|» » » ContinuousParameterRanges|body|object|false|none|
|» » » IntegerParameterRanges|body|object|false|none|
|» InputDataConfig|body|object|true|none|
|» » DatasetGroupArn|body|object|true|none|
|» » SupplementaryFeatures|body|object|false|none|
|» FeaturizationConfig|body|object|true|none|
|» » ForecastFrequency|body|object|true|none|
|» » ForecastDimensions|body|object|false|none|
|» » Featurizations|body|object|false|none|
|» EncryptionConfig|body|object|false|none|
|» » RoleArn|body|object|true|none|
|» » KMSKeyArn|body|object|true|none|
|» Tags|body|object|false|none|
|» OptimizationMetric|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreatePredictor|

> Example responses

> 200 Response

```json
{
  "PredictorArn": {}
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

<h3 id="createpredictor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePredictorResponse](#schemacreatepredictorresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePredictorBacktestExportJob

<a id="opIdCreatePredictorBacktestExportJob"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreatePredictorBacktestExportJob' \
  -d '{
    "PredictorBacktestExportJobName": {},
    "PredictorArn": {},
    "Destination": {
      "S3Config": {
        "Path": {},
        "RoleArn": {},
        "KMSKeyArn": {}
      }
    },
    "Tags": {},
    "Format": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob`

<p>Exports backtest forecasts and accuracy metrics generated by the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. Two folders containing CSV or Parquet files are exported to your specified S3 bucket.</p> <p> The export file names will match the following conventions:</p> <p> <code>&lt;ExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;.csv</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDate format (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p> </note>

> Body parameter

```json
{
  "PredictorBacktestExportJobName": {},
  "PredictorArn": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Tags": {},
  "Format": {}
}
```

<h3 id="createpredictorbacktestexportjob-parameters">Parameters</h3>

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
|body|body|[CreatePredictorBacktestExportJobRequest](#schemacreatepredictorbacktestexportjobrequest)|true|none|
|» PredictorBacktestExportJobName|body|object|true|none|
|» PredictorArn|body|object|true|none|
|» Destination|body|[DataDestination](#schemadatadestination)|true|The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). |
|» Tags|body|object|false|none|
|» Format|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreatePredictorBacktestExportJob|

> Example responses

> 200 Response

```json
{
  "PredictorBacktestExportJobArn": {}
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

<h3 id="createpredictorbacktestexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePredictorBacktestExportJobResponse](#schemacreatepredictorbacktestexportjobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWhatIfAnalysis

<a id="opIdCreateWhatIfAnalysis"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreateWhatIfAnalysis' \
  -d '{
    "WhatIfAnalysisName": {},
    "ForecastArn": {},
    "TimeSeriesSelector": {
      "TimeSeriesIdentifiers": {
        "DataSource": {
          "S3Config": {
            "Path": {},
            "RoleArn": {},
            "KMSKeyArn": {}
          }
        },
        "Schema": {
          "Attributes": {}
        },
        "Format": {}
      }
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis`

<p>What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to remember that the purpose of a what-if analysis is to understand how a forecast can change given different modifications to the baseline time series.</p> <p>For example, imagine you are a clothing retailer who is considering an end of season sale to clear space for new styles. After creating a baseline forecast, you can use a what-if analysis to investigate how different sales tactics might affect your goals.</p> <p>You could create a scenario where everything is given a 25% markdown, and another where everything is given a fixed dollar markdown. You could create a scenario where the sale lasts for one week and another where the sale lasts for one month. With a what-if analysis, you can compare many different scenarios against each other.</p> <p>Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For instance, forecasts might not be accurate for novel scenarios where there is no reference available to determine whether a forecast is good.</p> <p>The <a>TimeSeriesSelector</a> object defines the items that you want in the what-if analysis.</p>

> Body parameter

```json
{
  "WhatIfAnalysisName": {},
  "ForecastArn": {},
  "TimeSeriesSelector": {
    "TimeSeriesIdentifiers": {
      "DataSource": {
        "S3Config": {
          "Path": {},
          "RoleArn": {},
          "KMSKeyArn": {}
        }
      },
      "Schema": {
        "Attributes": {}
      },
      "Format": {}
    }
  },
  "Tags": {}
}
```

<h3 id="createwhatifanalysis-parameters">Parameters</h3>

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
|body|body|[CreateWhatIfAnalysisRequest](#schemacreatewhatifanalysisrequest)|true|none|
|» WhatIfAnalysisName|body|object|true|none|
|» ForecastArn|body|object|true|none|
|» TimeSeriesSelector|body|object|false|none|
|» » TimeSeriesIdentifiers|body|object|false|none|
|» » » DataSource|body|[DataSource](#schemadatasource)|false|The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.|
|» » » Schema|body|[Schema](#schemaschema)|false|Defines the fields of a dataset.|
|» » » Format|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreateWhatIfAnalysis|

> Example responses

> 200 Response

```json
{
  "WhatIfAnalysisArn": {}
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

<h3 id="createwhatifanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWhatIfAnalysisResponse](#schemacreatewhatifanalysisresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWhatIfForecast

<a id="opIdCreateWhatIfForecast"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreateWhatIfForecast' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreateWhatIfForecast' \
  -d '{
    "WhatIfForecastName": {},
    "WhatIfAnalysisArn": {},
    "TimeSeriesTransformations": {},
    "TimeSeriesReplacementsDataSource": {
      "S3Config": {
        "Path": {},
        "RoleArn": {},
        "KMSKeyArn": {}
      },
      "Schema": {
        "Attributes": {}
      },
      "Format": {},
      "TimestampFormat": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreateWhatIfForecast`

A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset. 

> Body parameter

```json
{
  "WhatIfForecastName": {},
  "WhatIfAnalysisArn": {},
  "TimeSeriesTransformations": {},
  "TimeSeriesReplacementsDataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    },
    "Schema": {
      "Attributes": {}
    },
    "Format": {},
    "TimestampFormat": {}
  },
  "Tags": {}
}
```

<h3 id="createwhatifforecast-parameters">Parameters</h3>

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
|body|body|[CreateWhatIfForecastRequest](#schemacreatewhatifforecastrequest)|true|none|
|» WhatIfForecastName|body|object|true|none|
|» WhatIfAnalysisArn|body|object|true|none|
|» TimeSeriesTransformations|body|object|false|none|
|» TimeSeriesReplacementsDataSource|body|object|false|none|
|» » S3Config|body|[S3Config](#schemas3config)|true|The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.|
|» » Schema|body|[Schema](#schemaschema)|true|Defines the fields of a dataset.|
|» » Format|body|object|false|none|
|» » TimestampFormat|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreateWhatIfForecast|

> Example responses

> 200 Response

```json
{
  "WhatIfForecastArn": {}
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

<h3 id="createwhatifforecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWhatIfForecastResponse](#schemacreatewhatifforecastresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWhatIfForecastExport

<a id="opIdCreateWhatIfForecastExport"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.CreateWhatIfForecastExport' \
  -d '{
    "WhatIfForecastExportName": {},
    "WhatIfForecastArns": {},
    "Destination": {
      "S3Config": {
        "Path": {},
        "RoleArn": {},
        "KMSKeyArn": {}
      }
    },
    "Tags": {},
    "Format": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport`

<p>Exports a forecast created by the <a>CreateWhatIfForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p> <code>≈&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your what-if forecast export jobs, use the <a>ListWhatIfForecastExports</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation.</p> </note>

> Body parameter

```json
{
  "WhatIfForecastExportName": {},
  "WhatIfForecastArns": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Tags": {},
  "Format": {}
}
```

<h3 id="createwhatifforecastexport-parameters">Parameters</h3>

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
|body|body|[CreateWhatIfForecastExportRequest](#schemacreatewhatifforecastexportrequest)|true|none|
|» WhatIfForecastExportName|body|object|true|none|
|» WhatIfForecastArns|body|object|true|none|
|» Destination|body|object|true|none|
|» » S3Config|body|object|true|none|
|» » » Path|body|object|true|none|
|» » » RoleArn|body|object|true|none|
|» » » KMSKeyArn|body|object|false|none|
|» Tags|body|object|false|none|
|» Format|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.CreateWhatIfForecastExport|

> Example responses

> 200 Response

```json
{
  "WhatIfForecastExportArn": {}
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

<h3 id="createwhatifforecastexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWhatIfForecastExportResponse](#schemacreatewhatifforecastexportresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataset

<a id="opIdDeleteDataset"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeleteDataset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeleteDataset' \
  -d '{
    "DatasetArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeleteDataset`

<p>Deletes an Amazon Forecast dataset that was created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. You can only delete datasets that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.</p> <note> <p>Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update the dataset group, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation, omitting the deleted dataset's ARN.</p> </note>

> Body parameter

```json
{
  "DatasetArn": {}
}
```

<h3 id="deletedataset-parameters">Parameters</h3>

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
|body|body|[DeleteDatasetRequest](#schemadeletedatasetrequest)|true|none|
|» DatasetArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeleteDataset|

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

<h3 id="deletedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDatasetGroup

<a id="opIdDeleteDatasetGroup"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeleteDatasetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeleteDatasetGroup' \
  -d '{
    "DatasetGroupArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeleteDatasetGroup`

<p>Deletes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. You can only delete dataset groups that have a status of <code>ACTIVE</code>, <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> <p>This operation deletes only the dataset group, not the datasets in the group.</p>

> Body parameter

```json
{
  "DatasetGroupArn": {}
}
```

<h3 id="deletedatasetgroup-parameters">Parameters</h3>

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
|body|body|[DeleteDatasetGroupRequest](#schemadeletedatasetgrouprequest)|true|none|
|» DatasetGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeleteDatasetGroup|

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

<h3 id="deletedatasetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDatasetImportJob

<a id="opIdDeleteDatasetImportJob"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeleteDatasetImportJob' \
  -d '{
    "DatasetImportJobArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob`

Deletes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation.

> Body parameter

```json
{
  "DatasetImportJobArn": {}
}
```

<h3 id="deletedatasetimportjob-parameters">Parameters</h3>

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
|body|body|[DeleteDatasetImportJobRequest](#schemadeletedatasetimportjobrequest)|true|none|
|» DatasetImportJobArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeleteDatasetImportJob|

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

<h3 id="deletedatasetimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteExplainability

<a id="opIdDeleteExplainability"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeleteExplainability' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeleteExplainability' \
  -d '{
    "ExplainabilityArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeleteExplainability`

<p>Deletes an Explainability resource.</p> <p>You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeExplainability</a> operation.</p>

> Body parameter

```json
{
  "ExplainabilityArn": {}
}
```

<h3 id="deleteexplainability-parameters">Parameters</h3>

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
|body|body|[DeleteExplainabilityRequest](#schemadeleteexplainabilityrequest)|true|none|
|» ExplainabilityArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeleteExplainability|

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

<h3 id="deleteexplainability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteExplainabilityExport

<a id="opIdDeleteExplainabilityExport"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeleteExplainabilityExport' \
  -d '{
    "ExplainabilityExportArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport`

Deletes an Explainability export.

> Body parameter

```json
{
  "ExplainabilityExportArn": {}
}
```

<h3 id="deleteexplainabilityexport-parameters">Parameters</h3>

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
|body|body|[DeleteExplainabilityExportRequest](#schemadeleteexplainabilityexportrequest)|true|none|
|» ExplainabilityExportArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeleteExplainabilityExport|

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

<h3 id="deleteexplainabilityexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteForecast

<a id="opIdDeleteForecast"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeleteForecast' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeleteForecast' \
  -d '{
    "ForecastArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeleteForecast`

<p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecast</a> operation.</p> <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.</p>

> Body parameter

```json
{
  "ForecastArn": {}
}
```

<h3 id="deleteforecast-parameters">Parameters</h3>

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
|body|body|[DeleteForecastRequest](#schemadeleteforecastrequest)|true|none|
|» ForecastArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeleteForecast|

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

<h3 id="deleteforecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteForecastExportJob

<a id="opIdDeleteForecastExportJob"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeleteForecastExportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeleteForecastExportJob' \
  -d '{
    "ForecastExportJobArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeleteForecastExportJob`

Deletes a forecast export job created using the <a>CreateForecastExportJob</a> operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.

> Body parameter

```json
{
  "ForecastExportJobArn": {}
}
```

<h3 id="deleteforecastexportjob-parameters">Parameters</h3>

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
|body|body|[DeleteForecastExportJobRequest](#schemadeleteforecastexportjobrequest)|true|none|
|» ForecastExportJobArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeleteForecastExportJob|

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

<h3 id="deleteforecastexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMonitor

<a id="opIdDeleteMonitor"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeleteMonitor' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeleteMonitor' \
  -d '{
    "MonitorArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeleteMonitor`

Deletes a monitor resource. You can only delete a monitor resource with a status of <code>ACTIVE</code>, <code>ACTIVE_STOPPED</code>, <code>CREATE_FAILED</code>, or <code>CREATE_STOPPED</code>.

> Body parameter

```json
{
  "MonitorArn": {}
}
```

<h3 id="deletemonitor-parameters">Parameters</h3>

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
|body|body|[DeleteMonitorRequest](#schemadeletemonitorrequest)|true|none|
|» MonitorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeleteMonitor|

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

<h3 id="deletemonitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePredictor

<a id="opIdDeletePredictor"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeletePredictor' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeletePredictor' \
  -d '{
    "PredictorArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeletePredictor`

Deletes a predictor created using the <a>DescribePredictor</a> or <a>CreatePredictor</a> operations. You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribePredictor</a> operation.

> Body parameter

```json
{
  "PredictorArn": {}
}
```

<h3 id="deletepredictor-parameters">Parameters</h3>

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
|body|body|[DeletePredictorRequest](#schemadeletepredictorrequest)|true|none|
|» PredictorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeletePredictor|

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

<h3 id="deletepredictor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePredictorBacktestExportJob

<a id="opIdDeletePredictorBacktestExportJob"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeletePredictorBacktestExportJob' \
  -d '{
    "PredictorBacktestExportJobArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob`

Deletes a predictor backtest export job.

> Body parameter

```json
{
  "PredictorBacktestExportJobArn": {}
}
```

<h3 id="deletepredictorbacktestexportjob-parameters">Parameters</h3>

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
|body|body|[DeletePredictorBacktestExportJobRequest](#schemadeletepredictorbacktestexportjobrequest)|true|none|
|» PredictorBacktestExportJobArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeletePredictorBacktestExportJob|

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

<h3 id="deletepredictorbacktestexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResourceTree

<a id="opIdDeleteResourceTree"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeleteResourceTree' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeleteResourceTree' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeleteResourceTree`

<p>Deletes an entire resource tree. This operation will delete the parent resource and its child resources.</p> <p>Child resources are resources that were created from another resource. For example, when a forecast is generated from a predictor, the forecast is the child resource and the predictor is the parent resource.</p> <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p> <ul> <li> <p> <b>Dataset</b>: dataset import jobs</p> </li> <li> <p> <b>Dataset Group</b>: predictors, predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Predictor</b>: predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Forecast</b>: forecast export jobs</p> </li> </ul> <note> <p> <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not delete datasets or exported files stored in Amazon S3. </p> </note>

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="deleteresourcetree-parameters">Parameters</h3>

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
|body|body|[DeleteResourceTreeRequest](#schemadeleteresourcetreerequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeleteResourceTree|

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

<h3 id="deleteresourcetree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWhatIfAnalysis

<a id="opIdDeleteWhatIfAnalysis"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeleteWhatIfAnalysis' \
  -d '{
    "WhatIfAnalysisArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis`

<p>Deletes a what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation. You can delete only what-if analyses that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfAnalysis</a> operation. </p> <p>You can't delete a what-if analysis while any of its forecasts are being exported.</p>

> Body parameter

```json
{
  "WhatIfAnalysisArn": {}
}
```

<h3 id="deletewhatifanalysis-parameters">Parameters</h3>

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
|body|body|[DeleteWhatIfAnalysisRequest](#schemadeletewhatifanalysisrequest)|true|none|
|» WhatIfAnalysisArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeleteWhatIfAnalysis|

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

<h3 id="deletewhatifanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWhatIfForecast

<a id="opIdDeleteWhatIfForecast"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeleteWhatIfForecast' \
  -d '{
    "WhatIfForecastArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast`

<p>Deletes a what-if forecast created using the <a>CreateWhatIfForecast</a> operation. You can delete only what-if forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecast</a> operation. </p> <p>You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.</p>

> Body parameter

```json
{
  "WhatIfForecastArn": {}
}
```

<h3 id="deletewhatifforecast-parameters">Parameters</h3>

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
|body|body|[DeleteWhatIfForecastRequest](#schemadeletewhatifforecastrequest)|true|none|
|» WhatIfForecastArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeleteWhatIfForecast|

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

<h3 id="deletewhatifforecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWhatIfForecastExport

<a id="opIdDeleteWhatIfForecastExport"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DeleteWhatIfForecastExport' \
  -d '{
    "WhatIfForecastExportArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport`

Deletes a what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation. You can delete only what-if forecast exports that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation. 

> Body parameter

```json
{
  "WhatIfForecastExportArn": {}
}
```

<h3 id="deletewhatifforecastexport-parameters">Parameters</h3>

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
|body|body|[DeleteWhatIfForecastExportRequest](#schemadeletewhatifforecastexportrequest)|true|none|
|» WhatIfForecastExportArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DeleteWhatIfForecastExport|

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

<h3 id="deletewhatifforecastexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAutoPredictor

<a id="opIdDescribeAutoPredictor"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribeAutoPredictor' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribeAutoPredictor' \
  -d '{
    "PredictorArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribeAutoPredictor`

Describes a predictor created using the CreateAutoPredictor operation.

> Body parameter

```json
{
  "PredictorArn": {}
}
```

<h3 id="describeautopredictor-parameters">Parameters</h3>

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
|body|body|[DescribeAutoPredictorRequest](#schemadescribeautopredictorrequest)|true|none|
|» PredictorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribeAutoPredictor|

> Example responses

> 200 Response

```json
{
  "PredictorArn": {},
  "PredictorName": {},
  "ForecastHorizon": {},
  "ForecastTypes": {},
  "ForecastFrequency": {},
  "ForecastDimensions": {},
  "DatasetImportJobArns": {},
  "DataConfig": {
    "DatasetGroupArn": {},
    "AttributeConfigs": {},
    "AdditionalDatasets": {}
  },
  "EncryptionConfig": {
    "RoleArn": {},
    "KMSKeyArn": {}
  },
  "ReferencePredictorSummary": {
    "Arn": {},
    "State": {}
  },
  "EstimatedTimeRemainingInMinutes": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "OptimizationMetric": {},
  "ExplainabilityInfo": {
    "ExplainabilityArn": {},
    "Status": {}
  },
  "MonitorInfo": {
    "MonitorArn": {},
    "Status": {}
  },
  "TimeAlignmentBoundary": {
    "Month": {},
    "DayOfMonth": {},
    "DayOfWeek": {},
    "Hour": {}
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

<h3 id="describeautopredictor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAutoPredictorResponse](#schemadescribeautopredictorresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDataset

<a id="opIdDescribeDataset"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribeDataset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribeDataset' \
  -d '{
    "DatasetArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribeDataset`

<p>Describes an Amazon Forecast dataset created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation.</p> <p>In addition to listing the parameters specified in the <code>CreateDataset</code> request, this operation includes the following dataset properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

> Body parameter

```json
{
  "DatasetArn": {}
}
```

<h3 id="describedataset-parameters">Parameters</h3>

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
|body|body|[DescribeDatasetRequest](#schemadescribedatasetrequest)|true|none|
|» DatasetArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribeDataset|

> Example responses

> 200 Response

```json
{
  "DatasetArn": {},
  "DatasetName": {},
  "Domain": {},
  "DatasetType": {},
  "DataFrequency": {},
  "Schema": {
    "Attributes": {}
  },
  "EncryptionConfig": {
    "RoleArn": {},
    "KMSKeyArn": {}
  },
  "Status": {},
  "CreationTime": {},
  "LastModificationTime": {}
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

<h3 id="describedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatasetResponse](#schemadescribedatasetresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDatasetGroup

<a id="opIdDescribeDatasetGroup"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribeDatasetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribeDatasetGroup' \
  -d '{
    "DatasetGroupArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribeDatasetGroup`

<p>Describes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>DatasetArns</code> - The datasets belonging to the group.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

> Body parameter

```json
{
  "DatasetGroupArn": {}
}
```

<h3 id="describedatasetgroup-parameters">Parameters</h3>

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
|body|body|[DescribeDatasetGroupRequest](#schemadescribedatasetgrouprequest)|true|none|
|» DatasetGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribeDatasetGroup|

> Example responses

> 200 Response

```json
{
  "DatasetGroupName": {},
  "DatasetGroupArn": {},
  "DatasetArns": {},
  "Domain": {},
  "Status": {},
  "CreationTime": {},
  "LastModificationTime": {}
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

<h3 id="describedatasetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatasetGroupResponse](#schemadescribedatasetgroupresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDatasetImportJob

<a id="opIdDescribeDatasetImportJob"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribeDatasetImportJob' \
  -d '{
    "DatasetImportJobArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob`

<p>Describes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>DataSize</code> </p> </li> <li> <p> <code>FieldStatistics</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

> Body parameter

```json
{
  "DatasetImportJobArn": {}
}
```

<h3 id="describedatasetimportjob-parameters">Parameters</h3>

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
|body|body|[DescribeDatasetImportJobRequest](#schemadescribedatasetimportjobrequest)|true|none|
|» DatasetImportJobArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribeDatasetImportJob|

> Example responses

> 200 Response

```json
{
  "DatasetImportJobName": {},
  "DatasetImportJobArn": {},
  "DatasetArn": {},
  "TimestampFormat": {},
  "TimeZone": {},
  "UseGeolocationForTimeZone": {},
  "GeolocationFormat": {},
  "DataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "EstimatedTimeRemainingInMinutes": {},
  "FieldStatistics": {
    "property1": {
      "Count": {},
      "CountDistinct": {},
      "CountNull": {},
      "CountNan": {},
      "Min": {},
      "Max": {},
      "Avg": {},
      "Stddev": {},
      "CountLong": {},
      "CountDistinctLong": {},
      "CountNullLong": {},
      "CountNanLong": {}
    },
    "property2": {
      "Count": {},
      "CountDistinct": {},
      "CountNull": {},
      "CountNan": {},
      "Min": {},
      "Max": {},
      "Avg": {},
      "Stddev": {},
      "CountLong": {},
      "CountDistinctLong": {},
      "CountNullLong": {},
      "CountNanLong": {}
    }
  },
  "DataSize": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "Format": {},
  "ImportMode": {}
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

<h3 id="describedatasetimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatasetImportJobResponse](#schemadescribedatasetimportjobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeExplainability

<a id="opIdDescribeExplainability"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribeExplainability' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribeExplainability' \
  -d '{
    "ExplainabilityArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribeExplainability`

Describes an Explainability resource created using the <a>CreateExplainability</a> operation.

> Body parameter

```json
{
  "ExplainabilityArn": {}
}
```

<h3 id="describeexplainability-parameters">Parameters</h3>

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
|body|body|[DescribeExplainabilityRequest](#schemadescribeexplainabilityrequest)|true|none|
|» ExplainabilityArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribeExplainability|

> Example responses

> 200 Response

```json
{
  "ExplainabilityArn": {},
  "ExplainabilityName": {},
  "ResourceArn": {},
  "ExplainabilityConfig": {
    "TimeSeriesGranularity": {},
    "TimePointGranularity": {}
  },
  "EnableVisualization": {},
  "DataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Schema": {
    "Attributes": {}
  },
  "StartDateTime": {},
  "EndDateTime": {},
  "EstimatedTimeRemainingInMinutes": {},
  "Message": {},
  "Status": {},
  "CreationTime": {},
  "LastModificationTime": {}
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

<h3 id="describeexplainability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeExplainabilityResponse](#schemadescribeexplainabilityresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeExplainabilityExport

<a id="opIdDescribeExplainabilityExport"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribeExplainabilityExport' \
  -d '{
    "ExplainabilityExportArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport`

Describes an Explainability export created using the <a>CreateExplainabilityExport</a> operation.

> Body parameter

```json
{
  "ExplainabilityExportArn": {}
}
```

<h3 id="describeexplainabilityexport-parameters">Parameters</h3>

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
|body|body|[DescribeExplainabilityExportRequest](#schemadescribeexplainabilityexportrequest)|true|none|
|» ExplainabilityExportArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribeExplainabilityExport|

> Example responses

> 200 Response

```json
{
  "ExplainabilityExportArn": {},
  "ExplainabilityExportName": {},
  "ExplainabilityArn": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Message": {},
  "Status": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "Format": {}
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

<h3 id="describeexplainabilityexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeExplainabilityExportResponse](#schemadescribeexplainabilityexportresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeForecast

<a id="opIdDescribeForecast"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribeForecast' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribeForecast' \
  -d '{
    "ForecastArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribeForecast`

<p>Describes a forecast created using the <a>CreateForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetGroupArn</code> - The dataset group that provided the training data.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

> Body parameter

```json
{
  "ForecastArn": {}
}
```

<h3 id="describeforecast-parameters">Parameters</h3>

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
|body|body|[DescribeForecastRequest](#schemadescribeforecastrequest)|true|none|
|» ForecastArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribeForecast|

> Example responses

> 200 Response

```json
{
  "ForecastArn": {},
  "ForecastName": {},
  "ForecastTypes": {},
  "PredictorArn": {},
  "DatasetGroupArn": {},
  "EstimatedTimeRemainingInMinutes": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "TimeSeriesSelector": {
    "TimeSeriesIdentifiers": {
      "DataSource": {
        "S3Config": {
          "Path": {},
          "RoleArn": {},
          "KMSKeyArn": {}
        }
      },
      "Schema": {
        "Attributes": {}
      },
      "Format": {}
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

<h3 id="describeforecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeForecastResponse](#schemadescribeforecastresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeForecastExportJob

<a id="opIdDescribeForecastExportJob"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribeForecastExportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribeForecastExportJob' \
  -d '{
    "ForecastExportJobArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribeForecastExportJob`

<p>Describes a forecast export job created using the <a>CreateForecastExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreateForecastExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

> Body parameter

```json
{
  "ForecastExportJobArn": {}
}
```

<h3 id="describeforecastexportjob-parameters">Parameters</h3>

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
|body|body|[DescribeForecastExportJobRequest](#schemadescribeforecastexportjobrequest)|true|none|
|» ForecastExportJobArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribeForecastExportJob|

> Example responses

> 200 Response

```json
{
  "ForecastExportJobArn": {},
  "ForecastExportJobName": {},
  "ForecastArn": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Message": {},
  "Status": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "Format": {}
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

<h3 id="describeforecastexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeForecastExportJobResponse](#schemadescribeforecastexportjobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMonitor

<a id="opIdDescribeMonitor"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribeMonitor' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribeMonitor' \
  -d '{
    "MonitorArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribeMonitor`

<p>Describes a monitor resource. In addition to listing the properties provided in the <a>CreateMonitor</a> request, this operation lists the following properties:</p> <ul> <li> <p> <code>Baseline</code> </p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastEvaluationTime</code> </p> </li> <li> <p> <code>LastEvaluationState</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

> Body parameter

```json
{
  "MonitorArn": {}
}
```

<h3 id="describemonitor-parameters">Parameters</h3>

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
|body|body|[DescribeMonitorRequest](#schemadescribemonitorrequest)|true|none|
|» MonitorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribeMonitor|

> Example responses

> 200 Response

```json
{
  "MonitorName": {},
  "MonitorArn": {},
  "ResourceArn": {},
  "Status": {},
  "LastEvaluationTime": {},
  "LastEvaluationState": {},
  "Baseline": {
    "PredictorBaseline": {
      "BaselineMetrics": {}
    }
  },
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "EstimatedEvaluationTimeRemainingInMinutes": {}
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

<h3 id="describemonitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMonitorResponse](#schemadescribemonitorresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePredictor

<a id="opIdDescribePredictor"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribePredictor' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribePredictor' \
  -d '{
    "PredictorArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribePredictor`

<note> <p> This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use <a>DescribeAutoPredictor</a>.</p> </note> <p>Describes a predictor created using the <a>CreatePredictor</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreatePredictor</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetImportJobArns</code> - The dataset import jobs used to import training data.</p> </li> <li> <p> <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were evaluated.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>

> Body parameter

```json
{
  "PredictorArn": {}
}
```

<h3 id="describepredictor-parameters">Parameters</h3>

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
|body|body|[DescribePredictorRequest](#schemadescribepredictorrequest)|true|none|
|» PredictorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribePredictor|

> Example responses

> 200 Response

```json
{
  "PredictorArn": {},
  "PredictorName": {},
  "AlgorithmArn": {},
  "AutoMLAlgorithmArns": {},
  "ForecastHorizon": {},
  "ForecastTypes": {},
  "PerformAutoML": {},
  "AutoMLOverrideStrategy": {},
  "PerformHPO": {},
  "TrainingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "EvaluationParameters": {
    "NumberOfBacktestWindows": {},
    "BackTestWindowOffset": {}
  },
  "HPOConfig": {
    "ParameterRanges": {
      "CategoricalParameterRanges": {},
      "ContinuousParameterRanges": {},
      "IntegerParameterRanges": {}
    }
  },
  "InputDataConfig": {
    "DatasetGroupArn": {},
    "SupplementaryFeatures": {}
  },
  "FeaturizationConfig": {
    "ForecastFrequency": {},
    "ForecastDimensions": {},
    "Featurizations": {}
  },
  "EncryptionConfig": {
    "RoleArn": {},
    "KMSKeyArn": {}
  },
  "PredictorExecutionDetails": {
    "PredictorExecutions": {}
  },
  "EstimatedTimeRemainingInMinutes": {},
  "IsAutoPredictor": {},
  "DatasetImportJobArns": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "OptimizationMetric": {}
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

<h3 id="describepredictor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePredictorResponse](#schemadescribepredictorresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePredictorBacktestExportJob

<a id="opIdDescribePredictorBacktestExportJob"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribePredictorBacktestExportJob' \
  -d '{
    "PredictorBacktestExportJobArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob`

<p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreatePredictorBacktestExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> (if an error occurred)</p> </li> </ul>

> Body parameter

```json
{
  "PredictorBacktestExportJobArn": {}
}
```

<h3 id="describepredictorbacktestexportjob-parameters">Parameters</h3>

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
|body|body|[DescribePredictorBacktestExportJobRequest](#schemadescribepredictorbacktestexportjobrequest)|true|none|
|» PredictorBacktestExportJobArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribePredictorBacktestExportJob|

> Example responses

> 200 Response

```json
{
  "PredictorBacktestExportJobArn": {},
  "PredictorBacktestExportJobName": {},
  "PredictorArn": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Message": {},
  "Status": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "Format": {}
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

<h3 id="describepredictorbacktestexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePredictorBacktestExportJobResponse](#schemadescribepredictorbacktestexportjobresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWhatIfAnalysis

<a id="opIdDescribeWhatIfAnalysis"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribeWhatIfAnalysis' \
  -d '{
    "WhatIfAnalysisArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis`

<p>Describes the what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfAnalysis</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

> Body parameter

```json
{
  "WhatIfAnalysisArn": {}
}
```

<h3 id="describewhatifanalysis-parameters">Parameters</h3>

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
|body|body|[DescribeWhatIfAnalysisRequest](#schemadescribewhatifanalysisrequest)|true|none|
|» WhatIfAnalysisArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribeWhatIfAnalysis|

> Example responses

> 200 Response

```json
{
  "WhatIfAnalysisName": {},
  "WhatIfAnalysisArn": {},
  "ForecastArn": {},
  "EstimatedTimeRemainingInMinutes": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "TimeSeriesSelector": {
    "TimeSeriesIdentifiers": {
      "DataSource": {
        "S3Config": {
          "Path": {},
          "RoleArn": {},
          "KMSKeyArn": {}
        }
      },
      "Schema": {
        "Attributes": {}
      },
      "Format": {}
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

<h3 id="describewhatifanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWhatIfAnalysisResponse](#schemadescribewhatifanalysisresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWhatIfForecast

<a id="opIdDescribeWhatIfForecast"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribeWhatIfForecast' \
  -d '{
    "WhatIfForecastArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast`

<p>Describes the what-if forecast created using the <a>CreateWhatIfForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

> Body parameter

```json
{
  "WhatIfForecastArn": {}
}
```

<h3 id="describewhatifforecast-parameters">Parameters</h3>

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
|body|body|[DescribeWhatIfForecastRequest](#schemadescribewhatifforecastrequest)|true|none|
|» WhatIfForecastArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribeWhatIfForecast|

> Example responses

> 200 Response

```json
{
  "WhatIfForecastName": {},
  "WhatIfForecastArn": {},
  "WhatIfAnalysisArn": {},
  "EstimatedTimeRemainingInMinutes": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "TimeSeriesTransformations": {},
  "TimeSeriesReplacementsDataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    },
    "Schema": {
      "Attributes": {}
    },
    "Format": {},
    "TimestampFormat": {}
  },
  "ForecastTypes": {}
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

<h3 id="describewhatifforecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWhatIfForecastResponse](#schemadescribewhatifforecastresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWhatIfForecastExport

<a id="opIdDescribeWhatIfForecastExport"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.DescribeWhatIfForecastExport' \
  -d '{
    "WhatIfForecastExportArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport`

<p>Describes the what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecastExport</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>

> Body parameter

```json
{
  "WhatIfForecastExportArn": {}
}
```

<h3 id="describewhatifforecastexport-parameters">Parameters</h3>

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
|body|body|[DescribeWhatIfForecastExportRequest](#schemadescribewhatifforecastexportrequest)|true|none|
|» WhatIfForecastExportArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.DescribeWhatIfForecastExport|

> Example responses

> 200 Response

```json
{
  "WhatIfForecastExportArn": {},
  "WhatIfForecastExportName": {},
  "WhatIfForecastArns": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Message": {},
  "Status": {},
  "CreationTime": {},
  "EstimatedTimeRemainingInMinutes": {},
  "LastModificationTime": {},
  "Format": {}
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

<h3 id="describewhatifforecastexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWhatIfForecastExportResponse](#schemadescribewhatifforecastexportresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccuracyMetrics

<a id="opIdGetAccuracyMetrics"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.GetAccuracyMetrics' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.GetAccuracyMetrics' \
  -d '{
    "PredictorArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.GetAccuracyMetrics`

<p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Predictor Metrics</a>.</p> <p>This operation generates metrics for each backtest window that was evaluated. The number of backtest windows (<code>NumberOfBacktestWindows</code>) is specified using the <a>EvaluationParameters</a> object, which is optionally included in the <code>CreatePredictor</code> request. If <code>NumberOfBacktestWindows</code> isn't specified, the number defaults to one.</p> <p>The parameters of the <code>filling</code> method determine which items contribute to the metrics. If you want all items to contribute, specify <code>zero</code>. If you want only those items that have complete data in the range being evaluated to contribute, specify <code>nan</code>. For more information, see <a>FeaturizationMethod</a>.</p> <note> <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>

> Body parameter

```json
{
  "PredictorArn": {}
}
```

<h3 id="getaccuracymetrics-parameters">Parameters</h3>

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
|body|body|[GetAccuracyMetricsRequest](#schemagetaccuracymetricsrequest)|true|none|
|» PredictorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.GetAccuracyMetrics|

> Example responses

> 200 Response

```json
{
  "PredictorEvaluationResults": {},
  "IsAutoPredictor": {},
  "AutoMLOverrideStrategy": {},
  "OptimizationMetric": {}
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

<h3 id="getaccuracymetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccuracyMetricsResponse](#schemagetaccuracymetricsresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasetGroups

<a id="opIdListDatasetGroups"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListDatasetGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListDatasetGroups' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListDatasetGroups`

Returns a list of dataset groups created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdatasetgroups-parameters">Parameters</h3>

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
|body|body|[ListDatasetGroupsRequest](#schemalistdatasetgroupsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListDatasetGroups|

> Example responses

> 200 Response

```json
{
  "DatasetGroups": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listdatasetgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasetGroupsResponse](#schemalistdatasetgroupsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasetImportJobs

<a id="opIdListDatasetImportJobs"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListDatasetImportJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListDatasetImportJobs' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListDatasetImportJobs`

Returns a list of dataset import jobs created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Filter.html">Filter</a> objects.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listdatasetimportjobs-parameters">Parameters</h3>

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
|body|body|[ListDatasetImportJobsRequest](#schemalistdatasetimportjobsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListDatasetImportJobs|

> Example responses

> 200 Response

```json
{
  "DatasetImportJobs": {},
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

<h3 id="listdatasetimportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasetImportJobsResponse](#schemalistdatasetimportjobsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasets

<a id="opIdListDatasets"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListDatasets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListDatasets' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListDatasets`

Returns a list of datasets created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdatasets-parameters">Parameters</h3>

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
|body|body|[ListDatasetsRequest](#schemalistdatasetsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListDatasets|

> Example responses

> 200 Response

```json
{
  "Datasets": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listdatasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasetsResponse](#schemalistdatasetsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListExplainabilities

<a id="opIdListExplainabilities"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListExplainabilities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListExplainabilities' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListExplainabilities`

<p>Returns a list of Explainability resources created using the <a>CreateExplainability</a> operation. This operation returns a summary for each Explainability. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability resource, use the ARN with the <a>DescribeExplainability</a> operation.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listexplainabilities-parameters">Parameters</h3>

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
|body|body|[ListExplainabilitiesRequest](#schemalistexplainabilitiesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListExplainabilities|

> Example responses

> 200 Response

```json
{
  "Explainabilities": {},
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

<h3 id="listexplainabilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExplainabilitiesResponse](#schemalistexplainabilitiesresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListExplainabilityExports

<a id="opIdListExplainabilityExports"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListExplainabilityExports' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListExplainabilityExports' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListExplainabilityExports`

<p>Returns a list of Explainability exports created using the <a>CreateExplainabilityExport</a> operation. This operation returns a summary for each Explainability export. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability export, use the ARN with the <a>DescribeExplainability</a> operation.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listexplainabilityexports-parameters">Parameters</h3>

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
|body|body|[ListExplainabilityExportsRequest](#schemalistexplainabilityexportsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListExplainabilityExports|

> Example responses

> 200 Response

```json
{
  "ExplainabilityExports": {},
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

<h3 id="listexplainabilityexports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListExplainabilityExportsResponse](#schemalistexplainabilityexportsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListForecastExportJobs

<a id="opIdListForecastExportJobs"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListForecastExportJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListForecastExportJobs' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListForecastExportJobs`

Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a> operation. You can filter the list using an array of <a>Filter</a> objects.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listforecastexportjobs-parameters">Parameters</h3>

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
|body|body|[ListForecastExportJobsRequest](#schemalistforecastexportjobsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListForecastExportJobs|

> Example responses

> 200 Response

```json
{
  "ForecastExportJobs": {},
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

<h3 id="listforecastexportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListForecastExportJobsResponse](#schemalistforecastexportjobsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListForecasts

<a id="opIdListForecasts"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListForecasts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListForecasts' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListForecasts`

Returns a list of forecasts created using the <a>CreateForecast</a> operation. For each forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the <a>DescribeForecast</a> operation. You can filter the list using an array of <a>Filter</a> objects.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listforecasts-parameters">Parameters</h3>

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
|body|body|[ListForecastsRequest](#schemalistforecastsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListForecasts|

> Example responses

> 200 Response

```json
{
  "Forecasts": {},
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

<h3 id="listforecasts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListForecastsResponse](#schemalistforecastsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMonitorEvaluations

<a id="opIdListMonitorEvaluations"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListMonitorEvaluations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListMonitorEvaluations' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "MonitorArn": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListMonitorEvaluations`

<p>Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource during different windows of time.</p> <p>For information about monitoring see <a>predictor-monitoring</a>. For more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "MonitorArn": {},
  "Filters": {}
}
```

<h3 id="listmonitorevaluations-parameters">Parameters</h3>

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
|body|body|[ListMonitorEvaluationsRequest](#schemalistmonitorevaluationsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» MonitorArn|body|object|true|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListMonitorEvaluations|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "PredictorMonitorEvaluations": {}
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

<h3 id="listmonitorevaluations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMonitorEvaluationsResponse](#schemalistmonitorevaluationsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMonitors

<a id="opIdListMonitors"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListMonitors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListMonitors' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListMonitors`

Returns a list of monitors created with the <a>CreateMonitor</a> operation and <a>CreateAutoPredictor</a> operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the <a>DescribeMonitor</a> operation.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listmonitors-parameters">Parameters</h3>

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
|body|body|[ListMonitorsRequest](#schemalistmonitorsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListMonitors|

> Example responses

> 200 Response

```json
{
  "Monitors": {},
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

<h3 id="listmonitors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMonitorsResponse](#schemalistmonitorsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPredictorBacktestExportJobs

<a id="opIdListPredictorBacktestExportJobs"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListPredictorBacktestExportJobs' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs`

<p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular backtest export job, use the ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listpredictorbacktestexportjobs-parameters">Parameters</h3>

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
|body|body|[ListPredictorBacktestExportJobsRequest](#schemalistpredictorbacktestexportjobsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListPredictorBacktestExportJobs|

> Example responses

> 200 Response

```json
{
  "PredictorBacktestExportJobs": {},
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

<h3 id="listpredictorbacktestexportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPredictorBacktestExportJobsResponse](#schemalistpredictorbacktestexportjobsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPredictors

<a id="opIdListPredictors"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListPredictors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListPredictors' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListPredictors`

<p>Returns a list of predictors created using the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). </p> <p>You can retrieve the complete set of properties by using the ARN with the <a>DescribeAutoPredictor</a> and <a>DescribePredictor</a> operations. You can filter the list using an array of <a>Filter</a> objects.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listpredictors-parameters">Parameters</h3>

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
|body|body|[ListPredictorsRequest](#schemalistpredictorsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListPredictors|

> Example responses

> 200 Response

```json
{
  "Predictors": {},
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

<h3 id="listpredictors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPredictorsResponse](#schemalistpredictorsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListTagsForResource`

Lists the tags for an Amazon Forecast resource.

> Body parameter

```json
{
  "ResourceArn": {}
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
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWhatIfAnalyses

<a id="opIdListWhatIfAnalyses"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListWhatIfAnalyses' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses`

Returns a list of what-if analyses created using the <a>CreateWhatIfAnalysis</a> operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the <a>DescribeWhatIfAnalysis</a> operation.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listwhatifanalyses-parameters">Parameters</h3>

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
|body|body|[ListWhatIfAnalysesRequest](#schemalistwhatifanalysesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListWhatIfAnalyses|

> Example responses

> 200 Response

```json
{
  "WhatIfAnalyses": {},
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

<h3 id="listwhatifanalyses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWhatIfAnalysesResponse](#schemalistwhatifanalysesresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWhatIfForecastExports

<a id="opIdListWhatIfForecastExports"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListWhatIfForecastExports' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports`

Returns a list of what-if forecast exports created using the <a>CreateWhatIfForecastExport</a> operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the <a>DescribeWhatIfForecastExport</a> operation.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listwhatifforecastexports-parameters">Parameters</h3>

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
|body|body|[ListWhatIfForecastExportsRequest](#schemalistwhatifforecastexportsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListWhatIfForecastExports|

> Example responses

> 200 Response

```json
{
  "WhatIfForecastExports": {},
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

<h3 id="listwhatifforecastexports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWhatIfForecastExportsResponse](#schemalistwhatifforecastexportsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWhatIfForecasts

<a id="opIdListWhatIfForecasts"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ListWhatIfForecasts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ListWhatIfForecasts' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ListWhatIfForecasts`

Returns a list of what-if forecasts created using the <a>CreateWhatIfForecast</a> operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the <a>DescribeWhatIfForecast</a> operation.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listwhatifforecasts-parameters">Parameters</h3>

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
|body|body|[ListWhatIfForecastsRequest](#schemalistwhatifforecastsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ListWhatIfForecasts|

> Example responses

> 200 Response

```json
{
  "WhatIfForecasts": {},
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

<h3 id="listwhatifforecasts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWhatIfForecastsResponse](#schemalistwhatifforecastsresponse)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResumeResource

<a id="opIdResumeResource"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.ResumeResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.ResumeResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.ResumeResource`

Resumes a stopped monitor resource.

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="resumeresource-parameters">Parameters</h3>

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
|body|body|[ResumeResourceRequest](#schemaresumeresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.ResumeResource|

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

<h3 id="resumeresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopResource

<a id="opIdStopResource"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.StopResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.StopResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.StopResource`

<p>Stops a resource.</p> <p>The resource undergoes the following states: <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume a resource once it has been stopped.</p> <p>This operation can be applied to the following resources (and their corresponding child resources):</p> <ul> <li> <p>Dataset Import Job</p> </li> <li> <p>Predictor Job</p> </li> <li> <p>Forecast Job</p> </li> <li> <p>Forecast Export Job</p> </li> <li> <p>Predictor Backtest Export Job</p> </li> <li> <p>Explainability Job</p> </li> <li> <p>Explainability Export Job</p> </li> </ul>

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="stopresource-parameters">Parameters</h3>

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
|body|body|[StopResourceRequest](#schemastopresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.StopResource|

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

<h3 id="stopresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.TagResource`

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.

> Body parameter

```json
{
  "ResourceArn": {},
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
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.TagResource|

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
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.UntagResource`

Deletes the specified tags from a resource.

> Body parameter

```json
{
  "ResourceArn": {},
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
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDatasetGroup

<a id="opIdUpdateDatasetGroup"></a>

> Code samples

```bash
curl 'https://forecast.us-east-1.amazonaws.com/#X-Amz-Target=AmazonForecast.UpdateDatasetGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonForecast.UpdateDatasetGroup' \
  -d '{
    "DatasetGroupArn": {},
    "DatasetArns": {}
  }'
```

`POST /#X-Amz-Target=AmazonForecast.UpdateDatasetGroup`

<p>Replaces the datasets in a dataset group with the specified datasets.</p> <note> <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation to get the status.</p> </note>

> Body parameter

```json
{
  "DatasetGroupArn": {},
  "DatasetArns": {}
}
```

<h3 id="updatedatasetgroup-parameters">Parameters</h3>

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
|body|body|[UpdateDatasetGroupRequest](#schemaupdatedatasetgrouprequest)|true|none|
|» DatasetGroupArn|body|object|true|none|
|» DatasetArns|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonForecast.UpdateDatasetGroup|

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

<h3 id="updatedatasetgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDatasetGroupResponse](#schemaupdatedatasetgroupresponse)|
|480|480|InvalidInputException|[InvalidInputException](#schemainvalidinputexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateAutoPredictorResponse">CreateAutoPredictorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateautopredictorresponse"></a>
<a id="schema_CreateAutoPredictorResponse"></a>
<a id="tocScreateautopredictorresponse"></a>
<a id="tocscreateautopredictorresponse"></a>

```json
{
  "PredictorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorArn|object|false|none|none|

<h2 id="tocS_CreateAutoPredictorRequest">CreateAutoPredictorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateautopredictorrequest"></a>
<a id="schema_CreateAutoPredictorRequest"></a>
<a id="tocScreateautopredictorrequest"></a>
<a id="tocscreateautopredictorrequest"></a>

```json
{
  "PredictorName": {},
  "ForecastHorizon": {},
  "ForecastTypes": {},
  "ForecastDimensions": {},
  "ForecastFrequency": {},
  "DataConfig": {
    "DatasetGroupArn": {},
    "AttributeConfigs": {},
    "AdditionalDatasets": {}
  },
  "EncryptionConfig": {
    "RoleArn": {},
    "KMSKeyArn": {}
  },
  "ReferencePredictorArn": {},
  "OptimizationMetric": {},
  "ExplainPredictor": {},
  "Tags": {},
  "MonitorConfig": {
    "MonitorName": {}
  },
  "TimeAlignmentBoundary": {
    "Month": {},
    "DayOfMonth": {},
    "DayOfWeek": {},
    "Hour": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorName|object|true|none|none|
|ForecastHorizon|object|false|none|none|
|ForecastTypes|object|false|none|none|
|ForecastDimensions|object|false|none|none|
|ForecastFrequency|object|false|none|none|
|DataConfig|object|false|none|none|
|EncryptionConfig|[EncryptionConfig](#schemaencryptionconfig)|false|none|An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests.|
|ReferencePredictorArn|object|false|none|none|
|OptimizationMetric|object|false|none|none|
|ExplainPredictor|object|false|none|none|
|Tags|object|false|none|none|
|MonitorConfig|object|false|none|none|
|TimeAlignmentBoundary|object|false|none|none|

<h2 id="tocS_InvalidInputException">InvalidInputException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinputexception"></a>
<a id="schema_InvalidInputException"></a>
<a id="tocSinvalidinputexception"></a>
<a id="tocsinvalidinputexception"></a>

```json
null
```

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

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

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateDatasetResponse">CreateDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetresponse"></a>
<a id="schema_CreateDatasetResponse"></a>
<a id="tocScreatedatasetresponse"></a>
<a id="tocscreatedatasetresponse"></a>

```json
{
  "DatasetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetArn|object|false|none|none|

<h2 id="tocS_CreateDatasetRequest">CreateDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetrequest"></a>
<a id="schema_CreateDatasetRequest"></a>
<a id="tocScreatedatasetrequest"></a>
<a id="tocscreatedatasetrequest"></a>

```json
{
  "DatasetName": {},
  "Domain": {},
  "DatasetType": {},
  "DataFrequency": {},
  "Schema": {
    "Attributes": {}
  },
  "EncryptionConfig": {
    "RoleArn": {},
    "KMSKeyArn": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetName|object|true|none|none|
|Domain|object|true|none|none|
|DatasetType|object|true|none|none|
|DataFrequency|object|false|none|none|
|Schema|object|true|none|none|
|EncryptionConfig|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateDatasetGroupResponse">CreateDatasetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetgroupresponse"></a>
<a id="schema_CreateDatasetGroupResponse"></a>
<a id="tocScreatedatasetgroupresponse"></a>
<a id="tocscreatedatasetgroupresponse"></a>

```json
{
  "DatasetGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetGroupArn|object|false|none|none|

<h2 id="tocS_CreateDatasetGroupRequest">CreateDatasetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetgrouprequest"></a>
<a id="schema_CreateDatasetGroupRequest"></a>
<a id="tocScreatedatasetgrouprequest"></a>
<a id="tocscreatedatasetgrouprequest"></a>

```json
{
  "DatasetGroupName": {},
  "Domain": {},
  "DatasetArns": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetGroupName|object|true|none|none|
|Domain|object|true|none|none|
|DatasetArns|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateDatasetImportJobResponse">CreateDatasetImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetimportjobresponse"></a>
<a id="schema_CreateDatasetImportJobResponse"></a>
<a id="tocScreatedatasetimportjobresponse"></a>
<a id="tocscreatedatasetimportjobresponse"></a>

```json
{
  "DatasetImportJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetImportJobArn|object|false|none|none|

<h2 id="tocS_CreateDatasetImportJobRequest">CreateDatasetImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetimportjobrequest"></a>
<a id="schema_CreateDatasetImportJobRequest"></a>
<a id="tocScreatedatasetimportjobrequest"></a>
<a id="tocscreatedatasetimportjobrequest"></a>

```json
{
  "DatasetImportJobName": {},
  "DatasetArn": {},
  "DataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "TimestampFormat": {},
  "TimeZone": {},
  "UseGeolocationForTimeZone": {},
  "GeolocationFormat": {},
  "Tags": {},
  "Format": {},
  "ImportMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetImportJobName|object|true|none|none|
|DatasetArn|object|true|none|none|
|DataSource|object|true|none|none|
|TimestampFormat|object|false|none|none|
|TimeZone|object|false|none|none|
|UseGeolocationForTimeZone|object|false|none|none|
|GeolocationFormat|object|false|none|none|
|Tags|object|false|none|none|
|Format|object|false|none|none|
|ImportMode|object|false|none|none|

<h2 id="tocS_CreateExplainabilityResponse">CreateExplainabilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateexplainabilityresponse"></a>
<a id="schema_CreateExplainabilityResponse"></a>
<a id="tocScreateexplainabilityresponse"></a>
<a id="tocscreateexplainabilityresponse"></a>

```json
{
  "ExplainabilityArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityArn|object|false|none|none|

<h2 id="tocS_CreateExplainabilityRequest">CreateExplainabilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateexplainabilityrequest"></a>
<a id="schema_CreateExplainabilityRequest"></a>
<a id="tocScreateexplainabilityrequest"></a>
<a id="tocscreateexplainabilityrequest"></a>

```json
{
  "ExplainabilityName": {},
  "ResourceArn": {},
  "ExplainabilityConfig": {
    "TimeSeriesGranularity": {},
    "TimePointGranularity": {}
  },
  "DataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Schema": {
    "Attributes": {}
  },
  "EnableVisualization": {},
  "StartDateTime": {},
  "EndDateTime": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityName|object|true|none|none|
|ResourceArn|object|true|none|none|
|ExplainabilityConfig|object|true|none|none|
|DataSource|[DataSource](#schemadatasource)|false|none|The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.|
|Schema|[Schema](#schemaschema)|false|none|Defines the fields of a dataset.|
|EnableVisualization|object|false|none|none|
|StartDateTime|object|false|none|none|
|EndDateTime|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateExplainabilityExportResponse">CreateExplainabilityExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateexplainabilityexportresponse"></a>
<a id="schema_CreateExplainabilityExportResponse"></a>
<a id="tocScreateexplainabilityexportresponse"></a>
<a id="tocscreateexplainabilityexportresponse"></a>

```json
{
  "ExplainabilityExportArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityExportArn|object|false|none|none|

<h2 id="tocS_CreateExplainabilityExportRequest">CreateExplainabilityExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateexplainabilityexportrequest"></a>
<a id="schema_CreateExplainabilityExportRequest"></a>
<a id="tocScreateexplainabilityexportrequest"></a>
<a id="tocscreateexplainabilityexportrequest"></a>

```json
{
  "ExplainabilityExportName": {},
  "ExplainabilityArn": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Tags": {},
  "Format": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityExportName|object|true|none|none|
|ExplainabilityArn|object|true|none|none|
|Destination|[DataDestination](#schemadatadestination)|true|none|The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). |
|Tags|object|false|none|none|
|Format|object|false|none|none|

<h2 id="tocS_CreateForecastResponse">CreateForecastResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateforecastresponse"></a>
<a id="schema_CreateForecastResponse"></a>
<a id="tocScreateforecastresponse"></a>
<a id="tocscreateforecastresponse"></a>

```json
{
  "ForecastArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastArn|object|false|none|none|

<h2 id="tocS_CreateForecastRequest">CreateForecastRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateforecastrequest"></a>
<a id="schema_CreateForecastRequest"></a>
<a id="tocScreateforecastrequest"></a>
<a id="tocscreateforecastrequest"></a>

```json
{
  "ForecastName": {},
  "PredictorArn": {},
  "ForecastTypes": {},
  "Tags": {},
  "TimeSeriesSelector": {
    "TimeSeriesIdentifiers": {
      "DataSource": {
        "S3Config": {
          "Path": {},
          "RoleArn": {},
          "KMSKeyArn": {}
        }
      },
      "Schema": {
        "Attributes": {}
      },
      "Format": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastName|object|true|none|none|
|PredictorArn|object|true|none|none|
|ForecastTypes|object|false|none|none|
|Tags|object|false|none|none|
|TimeSeriesSelector|object|false|none|none|

<h2 id="tocS_CreateForecastExportJobResponse">CreateForecastExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateforecastexportjobresponse"></a>
<a id="schema_CreateForecastExportJobResponse"></a>
<a id="tocScreateforecastexportjobresponse"></a>
<a id="tocscreateforecastexportjobresponse"></a>

```json
{
  "ForecastExportJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastExportJobArn|object|false|none|none|

<h2 id="tocS_CreateForecastExportJobRequest">CreateForecastExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateforecastexportjobrequest"></a>
<a id="schema_CreateForecastExportJobRequest"></a>
<a id="tocScreateforecastexportjobrequest"></a>
<a id="tocscreateforecastexportjobrequest"></a>

```json
{
  "ForecastExportJobName": {},
  "ForecastArn": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Tags": {},
  "Format": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastExportJobName|object|true|none|none|
|ForecastArn|object|true|none|none|
|Destination|object|true|none|none|
|Tags|object|false|none|none|
|Format|object|false|none|none|

<h2 id="tocS_CreateMonitorResponse">CreateMonitorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemonitorresponse"></a>
<a id="schema_CreateMonitorResponse"></a>
<a id="tocScreatemonitorresponse"></a>
<a id="tocscreatemonitorresponse"></a>

```json
{
  "MonitorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorArn|object|false|none|none|

<h2 id="tocS_CreateMonitorRequest">CreateMonitorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemonitorrequest"></a>
<a id="schema_CreateMonitorRequest"></a>
<a id="tocScreatemonitorrequest"></a>
<a id="tocscreatemonitorrequest"></a>

```json
{
  "MonitorName": {},
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorName|object|true|none|none|
|ResourceArn|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreatePredictorResponse">CreatePredictorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepredictorresponse"></a>
<a id="schema_CreatePredictorResponse"></a>
<a id="tocScreatepredictorresponse"></a>
<a id="tocscreatepredictorresponse"></a>

```json
{
  "PredictorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorArn|object|false|none|none|

<h2 id="tocS_CreatePredictorRequest">CreatePredictorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepredictorrequest"></a>
<a id="schema_CreatePredictorRequest"></a>
<a id="tocScreatepredictorrequest"></a>
<a id="tocscreatepredictorrequest"></a>

```json
{
  "PredictorName": {},
  "AlgorithmArn": {},
  "ForecastHorizon": {},
  "ForecastTypes": {},
  "PerformAutoML": {},
  "AutoMLOverrideStrategy": {},
  "PerformHPO": {},
  "TrainingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "EvaluationParameters": {
    "NumberOfBacktestWindows": {},
    "BackTestWindowOffset": {}
  },
  "HPOConfig": {
    "ParameterRanges": {
      "CategoricalParameterRanges": {},
      "ContinuousParameterRanges": {},
      "IntegerParameterRanges": {}
    }
  },
  "InputDataConfig": {
    "DatasetGroupArn": {},
    "SupplementaryFeatures": {}
  },
  "FeaturizationConfig": {
    "ForecastFrequency": {},
    "ForecastDimensions": {},
    "Featurizations": {}
  },
  "EncryptionConfig": {
    "RoleArn": {},
    "KMSKeyArn": {}
  },
  "Tags": {},
  "OptimizationMetric": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorName|object|true|none|none|
|AlgorithmArn|object|false|none|none|
|ForecastHorizon|object|true|none|none|
|ForecastTypes|object|false|none|none|
|PerformAutoML|object|false|none|none|
|AutoMLOverrideStrategy|object|false|none|none|
|PerformHPO|object|false|none|none|
|TrainingParameters|object|false|none|none|
|EvaluationParameters|object|false|none|none|
|HPOConfig|object|false|none|none|
|InputDataConfig|object|true|none|none|
|FeaturizationConfig|object|true|none|none|
|EncryptionConfig|object|false|none|none|
|Tags|object|false|none|none|
|OptimizationMetric|object|false|none|none|

<h2 id="tocS_CreatePredictorBacktestExportJobResponse">CreatePredictorBacktestExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepredictorbacktestexportjobresponse"></a>
<a id="schema_CreatePredictorBacktestExportJobResponse"></a>
<a id="tocScreatepredictorbacktestexportjobresponse"></a>
<a id="tocscreatepredictorbacktestexportjobresponse"></a>

```json
{
  "PredictorBacktestExportJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorBacktestExportJobArn|object|false|none|none|

<h2 id="tocS_CreatePredictorBacktestExportJobRequest">CreatePredictorBacktestExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepredictorbacktestexportjobrequest"></a>
<a id="schema_CreatePredictorBacktestExportJobRequest"></a>
<a id="tocScreatepredictorbacktestexportjobrequest"></a>
<a id="tocscreatepredictorbacktestexportjobrequest"></a>

```json
{
  "PredictorBacktestExportJobName": {},
  "PredictorArn": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Tags": {},
  "Format": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorBacktestExportJobName|object|true|none|none|
|PredictorArn|object|true|none|none|
|Destination|[DataDestination](#schemadatadestination)|true|none|The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). |
|Tags|object|false|none|none|
|Format|object|false|none|none|

<h2 id="tocS_CreateWhatIfAnalysisResponse">CreateWhatIfAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatewhatifanalysisresponse"></a>
<a id="schema_CreateWhatIfAnalysisResponse"></a>
<a id="tocScreatewhatifanalysisresponse"></a>
<a id="tocscreatewhatifanalysisresponse"></a>

```json
{
  "WhatIfAnalysisArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfAnalysisArn|object|false|none|none|

<h2 id="tocS_CreateWhatIfAnalysisRequest">CreateWhatIfAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewhatifanalysisrequest"></a>
<a id="schema_CreateWhatIfAnalysisRequest"></a>
<a id="tocScreatewhatifanalysisrequest"></a>
<a id="tocscreatewhatifanalysisrequest"></a>

```json
{
  "WhatIfAnalysisName": {},
  "ForecastArn": {},
  "TimeSeriesSelector": {
    "TimeSeriesIdentifiers": {
      "DataSource": {
        "S3Config": {
          "Path": {},
          "RoleArn": {},
          "KMSKeyArn": {}
        }
      },
      "Schema": {
        "Attributes": {}
      },
      "Format": {}
    }
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfAnalysisName|object|true|none|none|
|ForecastArn|object|true|none|none|
|TimeSeriesSelector|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateWhatIfForecastResponse">CreateWhatIfForecastResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatewhatifforecastresponse"></a>
<a id="schema_CreateWhatIfForecastResponse"></a>
<a id="tocScreatewhatifforecastresponse"></a>
<a id="tocscreatewhatifforecastresponse"></a>

```json
{
  "WhatIfForecastArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecastArn|object|false|none|none|

<h2 id="tocS_CreateWhatIfForecastRequest">CreateWhatIfForecastRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewhatifforecastrequest"></a>
<a id="schema_CreateWhatIfForecastRequest"></a>
<a id="tocScreatewhatifforecastrequest"></a>
<a id="tocscreatewhatifforecastrequest"></a>

```json
{
  "WhatIfForecastName": {},
  "WhatIfAnalysisArn": {},
  "TimeSeriesTransformations": {},
  "TimeSeriesReplacementsDataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    },
    "Schema": {
      "Attributes": {}
    },
    "Format": {},
    "TimestampFormat": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecastName|object|true|none|none|
|WhatIfAnalysisArn|object|true|none|none|
|TimeSeriesTransformations|object|false|none|none|
|TimeSeriesReplacementsDataSource|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateWhatIfForecastExportResponse">CreateWhatIfForecastExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatewhatifforecastexportresponse"></a>
<a id="schema_CreateWhatIfForecastExportResponse"></a>
<a id="tocScreatewhatifforecastexportresponse"></a>
<a id="tocscreatewhatifforecastexportresponse"></a>

```json
{
  "WhatIfForecastExportArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecastExportArn|object|false|none|none|

<h2 id="tocS_CreateWhatIfForecastExportRequest">CreateWhatIfForecastExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewhatifforecastexportrequest"></a>
<a id="schema_CreateWhatIfForecastExportRequest"></a>
<a id="tocScreatewhatifforecastexportrequest"></a>
<a id="tocscreatewhatifforecastexportrequest"></a>

```json
{
  "WhatIfForecastExportName": {},
  "WhatIfForecastArns": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Tags": {},
  "Format": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecastExportName|object|true|none|none|
|WhatIfForecastArns|object|true|none|none|
|Destination|object|true|none|none|
|Tags|object|false|none|none|
|Format|object|false|none|none|

<h2 id="tocS_DeleteDatasetRequest">DeleteDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetrequest"></a>
<a id="schema_DeleteDatasetRequest"></a>
<a id="tocSdeletedatasetrequest"></a>
<a id="tocsdeletedatasetrequest"></a>

```json
{
  "DatasetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetArn|object|true|none|none|

<h2 id="tocS_DeleteDatasetGroupRequest">DeleteDatasetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetgrouprequest"></a>
<a id="schema_DeleteDatasetGroupRequest"></a>
<a id="tocSdeletedatasetgrouprequest"></a>
<a id="tocsdeletedatasetgrouprequest"></a>

```json
{
  "DatasetGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetGroupArn|object|true|none|none|

<h2 id="tocS_DeleteDatasetImportJobRequest">DeleteDatasetImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetimportjobrequest"></a>
<a id="schema_DeleteDatasetImportJobRequest"></a>
<a id="tocSdeletedatasetimportjobrequest"></a>
<a id="tocsdeletedatasetimportjobrequest"></a>

```json
{
  "DatasetImportJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetImportJobArn|object|true|none|none|

<h2 id="tocS_DeleteExplainabilityRequest">DeleteExplainabilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteexplainabilityrequest"></a>
<a id="schema_DeleteExplainabilityRequest"></a>
<a id="tocSdeleteexplainabilityrequest"></a>
<a id="tocsdeleteexplainabilityrequest"></a>

```json
{
  "ExplainabilityArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityArn|object|true|none|none|

<h2 id="tocS_DeleteExplainabilityExportRequest">DeleteExplainabilityExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteexplainabilityexportrequest"></a>
<a id="schema_DeleteExplainabilityExportRequest"></a>
<a id="tocSdeleteexplainabilityexportrequest"></a>
<a id="tocsdeleteexplainabilityexportrequest"></a>

```json
{
  "ExplainabilityExportArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityExportArn|object|true|none|none|

<h2 id="tocS_DeleteForecastRequest">DeleteForecastRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteforecastrequest"></a>
<a id="schema_DeleteForecastRequest"></a>
<a id="tocSdeleteforecastrequest"></a>
<a id="tocsdeleteforecastrequest"></a>

```json
{
  "ForecastArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastArn|object|true|none|none|

<h2 id="tocS_DeleteForecastExportJobRequest">DeleteForecastExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteforecastexportjobrequest"></a>
<a id="schema_DeleteForecastExportJobRequest"></a>
<a id="tocSdeleteforecastexportjobrequest"></a>
<a id="tocsdeleteforecastexportjobrequest"></a>

```json
{
  "ForecastExportJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastExportJobArn|object|true|none|none|

<h2 id="tocS_DeleteMonitorRequest">DeleteMonitorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemonitorrequest"></a>
<a id="schema_DeleteMonitorRequest"></a>
<a id="tocSdeletemonitorrequest"></a>
<a id="tocsdeletemonitorrequest"></a>

```json
{
  "MonitorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorArn|object|true|none|none|

<h2 id="tocS_DeletePredictorRequest">DeletePredictorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepredictorrequest"></a>
<a id="schema_DeletePredictorRequest"></a>
<a id="tocSdeletepredictorrequest"></a>
<a id="tocsdeletepredictorrequest"></a>

```json
{
  "PredictorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorArn|object|true|none|none|

<h2 id="tocS_DeletePredictorBacktestExportJobRequest">DeletePredictorBacktestExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepredictorbacktestexportjobrequest"></a>
<a id="schema_DeletePredictorBacktestExportJobRequest"></a>
<a id="tocSdeletepredictorbacktestexportjobrequest"></a>
<a id="tocsdeletepredictorbacktestexportjobrequest"></a>

```json
{
  "PredictorBacktestExportJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorBacktestExportJobArn|object|true|none|none|

<h2 id="tocS_DeleteResourceTreeRequest">DeleteResourceTreeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresourcetreerequest"></a>
<a id="schema_DeleteResourceTreeRequest"></a>
<a id="tocSdeleteresourcetreerequest"></a>
<a id="tocsdeleteresourcetreerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_DeleteWhatIfAnalysisRequest">DeleteWhatIfAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletewhatifanalysisrequest"></a>
<a id="schema_DeleteWhatIfAnalysisRequest"></a>
<a id="tocSdeletewhatifanalysisrequest"></a>
<a id="tocsdeletewhatifanalysisrequest"></a>

```json
{
  "WhatIfAnalysisArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfAnalysisArn|object|true|none|none|

<h2 id="tocS_DeleteWhatIfForecastRequest">DeleteWhatIfForecastRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletewhatifforecastrequest"></a>
<a id="schema_DeleteWhatIfForecastRequest"></a>
<a id="tocSdeletewhatifforecastrequest"></a>
<a id="tocsdeletewhatifforecastrequest"></a>

```json
{
  "WhatIfForecastArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecastArn|object|true|none|none|

<h2 id="tocS_DeleteWhatIfForecastExportRequest">DeleteWhatIfForecastExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletewhatifforecastexportrequest"></a>
<a id="schema_DeleteWhatIfForecastExportRequest"></a>
<a id="tocSdeletewhatifforecastexportrequest"></a>
<a id="tocsdeletewhatifforecastexportrequest"></a>

```json
{
  "WhatIfForecastExportArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecastExportArn|object|true|none|none|

<h2 id="tocS_DescribeAutoPredictorResponse">DescribeAutoPredictorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeautopredictorresponse"></a>
<a id="schema_DescribeAutoPredictorResponse"></a>
<a id="tocSdescribeautopredictorresponse"></a>
<a id="tocsdescribeautopredictorresponse"></a>

```json
{
  "PredictorArn": {},
  "PredictorName": {},
  "ForecastHorizon": {},
  "ForecastTypes": {},
  "ForecastFrequency": {},
  "ForecastDimensions": {},
  "DatasetImportJobArns": {},
  "DataConfig": {
    "DatasetGroupArn": {},
    "AttributeConfigs": {},
    "AdditionalDatasets": {}
  },
  "EncryptionConfig": {
    "RoleArn": {},
    "KMSKeyArn": {}
  },
  "ReferencePredictorSummary": {
    "Arn": {},
    "State": {}
  },
  "EstimatedTimeRemainingInMinutes": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "OptimizationMetric": {},
  "ExplainabilityInfo": {
    "ExplainabilityArn": {},
    "Status": {}
  },
  "MonitorInfo": {
    "MonitorArn": {},
    "Status": {}
  },
  "TimeAlignmentBoundary": {
    "Month": {},
    "DayOfMonth": {},
    "DayOfWeek": {},
    "Hour": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorArn|object|false|none|none|
|PredictorName|object|false|none|none|
|ForecastHorizon|object|false|none|none|
|ForecastTypes|object|false|none|none|
|ForecastFrequency|object|false|none|none|
|ForecastDimensions|object|false|none|none|
|DatasetImportJobArns|object|false|none|none|
|DataConfig|object|false|none|none|
|EncryptionConfig|[EncryptionConfig](#schemaencryptionconfig)|false|none|An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests.|
|ReferencePredictorSummary|object|false|none|none|
|EstimatedTimeRemainingInMinutes|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|OptimizationMetric|object|false|none|none|
|ExplainabilityInfo|object|false|none|none|
|MonitorInfo|object|false|none|none|
|TimeAlignmentBoundary|object|false|none|none|

<h2 id="tocS_DescribeAutoPredictorRequest">DescribeAutoPredictorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeautopredictorrequest"></a>
<a id="schema_DescribeAutoPredictorRequest"></a>
<a id="tocSdescribeautopredictorrequest"></a>
<a id="tocsdescribeautopredictorrequest"></a>

```json
{
  "PredictorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorArn|object|true|none|none|

<h2 id="tocS_DescribeDatasetResponse">DescribeDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetresponse"></a>
<a id="schema_DescribeDatasetResponse"></a>
<a id="tocSdescribedatasetresponse"></a>
<a id="tocsdescribedatasetresponse"></a>

```json
{
  "DatasetArn": {},
  "DatasetName": {},
  "Domain": {},
  "DatasetType": {},
  "DataFrequency": {},
  "Schema": {
    "Attributes": {}
  },
  "EncryptionConfig": {
    "RoleArn": {},
    "KMSKeyArn": {}
  },
  "Status": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetArn|object|false|none|none|
|DatasetName|object|false|none|none|
|Domain|object|false|none|none|
|DatasetType|object|false|none|none|
|DataFrequency|object|false|none|none|
|Schema|object|false|none|none|
|EncryptionConfig|object|false|none|none|
|Status|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_DescribeDatasetRequest">DescribeDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetrequest"></a>
<a id="schema_DescribeDatasetRequest"></a>
<a id="tocSdescribedatasetrequest"></a>
<a id="tocsdescribedatasetrequest"></a>

```json
{
  "DatasetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetArn|object|true|none|none|

<h2 id="tocS_DescribeDatasetGroupResponse">DescribeDatasetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetgroupresponse"></a>
<a id="schema_DescribeDatasetGroupResponse"></a>
<a id="tocSdescribedatasetgroupresponse"></a>
<a id="tocsdescribedatasetgroupresponse"></a>

```json
{
  "DatasetGroupName": {},
  "DatasetGroupArn": {},
  "DatasetArns": {},
  "Domain": {},
  "Status": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetGroupName|object|false|none|none|
|DatasetGroupArn|object|false|none|none|
|DatasetArns|object|false|none|none|
|Domain|object|false|none|none|
|Status|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_DescribeDatasetGroupRequest">DescribeDatasetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetgrouprequest"></a>
<a id="schema_DescribeDatasetGroupRequest"></a>
<a id="tocSdescribedatasetgrouprequest"></a>
<a id="tocsdescribedatasetgrouprequest"></a>

```json
{
  "DatasetGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetGroupArn|object|true|none|none|

<h2 id="tocS_DescribeDatasetImportJobResponse">DescribeDatasetImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetimportjobresponse"></a>
<a id="schema_DescribeDatasetImportJobResponse"></a>
<a id="tocSdescribedatasetimportjobresponse"></a>
<a id="tocsdescribedatasetimportjobresponse"></a>

```json
{
  "DatasetImportJobName": {},
  "DatasetImportJobArn": {},
  "DatasetArn": {},
  "TimestampFormat": {},
  "TimeZone": {},
  "UseGeolocationForTimeZone": {},
  "GeolocationFormat": {},
  "DataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "EstimatedTimeRemainingInMinutes": {},
  "FieldStatistics": {
    "property1": {
      "Count": {},
      "CountDistinct": {},
      "CountNull": {},
      "CountNan": {},
      "Min": {},
      "Max": {},
      "Avg": {},
      "Stddev": {},
      "CountLong": {},
      "CountDistinctLong": {},
      "CountNullLong": {},
      "CountNanLong": {}
    },
    "property2": {
      "Count": {},
      "CountDistinct": {},
      "CountNull": {},
      "CountNan": {},
      "Min": {},
      "Max": {},
      "Avg": {},
      "Stddev": {},
      "CountLong": {},
      "CountDistinctLong": {},
      "CountNullLong": {},
      "CountNanLong": {}
    }
  },
  "DataSize": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "Format": {},
  "ImportMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetImportJobName|object|false|none|none|
|DatasetImportJobArn|object|false|none|none|
|DatasetArn|object|false|none|none|
|TimestampFormat|object|false|none|none|
|TimeZone|object|false|none|none|
|UseGeolocationForTimeZone|object|false|none|none|
|GeolocationFormat|object|false|none|none|
|DataSource|object|false|none|none|
|EstimatedTimeRemainingInMinutes|object|false|none|none|
|FieldStatistics|object|false|none|none|
|DataSize|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|Format|object|false|none|none|
|ImportMode|object|false|none|none|

<h2 id="tocS_DescribeDatasetImportJobRequest">DescribeDatasetImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetimportjobrequest"></a>
<a id="schema_DescribeDatasetImportJobRequest"></a>
<a id="tocSdescribedatasetimportjobrequest"></a>
<a id="tocsdescribedatasetimportjobrequest"></a>

```json
{
  "DatasetImportJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetImportJobArn|object|true|none|none|

<h2 id="tocS_DescribeExplainabilityResponse">DescribeExplainabilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexplainabilityresponse"></a>
<a id="schema_DescribeExplainabilityResponse"></a>
<a id="tocSdescribeexplainabilityresponse"></a>
<a id="tocsdescribeexplainabilityresponse"></a>

```json
{
  "ExplainabilityArn": {},
  "ExplainabilityName": {},
  "ResourceArn": {},
  "ExplainabilityConfig": {
    "TimeSeriesGranularity": {},
    "TimePointGranularity": {}
  },
  "EnableVisualization": {},
  "DataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Schema": {
    "Attributes": {}
  },
  "StartDateTime": {},
  "EndDateTime": {},
  "EstimatedTimeRemainingInMinutes": {},
  "Message": {},
  "Status": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityArn|object|false|none|none|
|ExplainabilityName|object|false|none|none|
|ResourceArn|object|false|none|none|
|ExplainabilityConfig|object|false|none|none|
|EnableVisualization|object|false|none|none|
|DataSource|[DataSource](#schemadatasource)|false|none|The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.|
|Schema|[Schema](#schemaschema)|false|none|Defines the fields of a dataset.|
|StartDateTime|object|false|none|none|
|EndDateTime|object|false|none|none|
|EstimatedTimeRemainingInMinutes|object|false|none|none|
|Message|object|false|none|none|
|Status|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_DescribeExplainabilityRequest">DescribeExplainabilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexplainabilityrequest"></a>
<a id="schema_DescribeExplainabilityRequest"></a>
<a id="tocSdescribeexplainabilityrequest"></a>
<a id="tocsdescribeexplainabilityrequest"></a>

```json
{
  "ExplainabilityArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityArn|object|true|none|none|

<h2 id="tocS_DescribeExplainabilityExportResponse">DescribeExplainabilityExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexplainabilityexportresponse"></a>
<a id="schema_DescribeExplainabilityExportResponse"></a>
<a id="tocSdescribeexplainabilityexportresponse"></a>
<a id="tocsdescribeexplainabilityexportresponse"></a>

```json
{
  "ExplainabilityExportArn": {},
  "ExplainabilityExportName": {},
  "ExplainabilityArn": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Message": {},
  "Status": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "Format": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityExportArn|object|false|none|none|
|ExplainabilityExportName|object|false|none|none|
|ExplainabilityArn|object|false|none|none|
|Destination|[DataDestination](#schemadatadestination)|false|none|The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). |
|Message|object|false|none|none|
|Status|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|Format|object|false|none|none|

<h2 id="tocS_DescribeExplainabilityExportRequest">DescribeExplainabilityExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexplainabilityexportrequest"></a>
<a id="schema_DescribeExplainabilityExportRequest"></a>
<a id="tocSdescribeexplainabilityexportrequest"></a>
<a id="tocsdescribeexplainabilityexportrequest"></a>

```json
{
  "ExplainabilityExportArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityExportArn|object|true|none|none|

<h2 id="tocS_DescribeForecastResponse">DescribeForecastResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeforecastresponse"></a>
<a id="schema_DescribeForecastResponse"></a>
<a id="tocSdescribeforecastresponse"></a>
<a id="tocsdescribeforecastresponse"></a>

```json
{
  "ForecastArn": {},
  "ForecastName": {},
  "ForecastTypes": {},
  "PredictorArn": {},
  "DatasetGroupArn": {},
  "EstimatedTimeRemainingInMinutes": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "TimeSeriesSelector": {
    "TimeSeriesIdentifiers": {
      "DataSource": {
        "S3Config": {
          "Path": {},
          "RoleArn": {},
          "KMSKeyArn": {}
        }
      },
      "Schema": {
        "Attributes": {}
      },
      "Format": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastArn|object|false|none|none|
|ForecastName|object|false|none|none|
|ForecastTypes|object|false|none|none|
|PredictorArn|object|false|none|none|
|DatasetGroupArn|object|false|none|none|
|EstimatedTimeRemainingInMinutes|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|TimeSeriesSelector|object|false|none|none|

<h2 id="tocS_DescribeForecastRequest">DescribeForecastRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeforecastrequest"></a>
<a id="schema_DescribeForecastRequest"></a>
<a id="tocSdescribeforecastrequest"></a>
<a id="tocsdescribeforecastrequest"></a>

```json
{
  "ForecastArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastArn|object|true|none|none|

<h2 id="tocS_DescribeForecastExportJobResponse">DescribeForecastExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeforecastexportjobresponse"></a>
<a id="schema_DescribeForecastExportJobResponse"></a>
<a id="tocSdescribeforecastexportjobresponse"></a>
<a id="tocsdescribeforecastexportjobresponse"></a>

```json
{
  "ForecastExportJobArn": {},
  "ForecastExportJobName": {},
  "ForecastArn": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Message": {},
  "Status": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "Format": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastExportJobArn|object|false|none|none|
|ForecastExportJobName|object|false|none|none|
|ForecastArn|object|false|none|none|
|Destination|object|false|none|none|
|Message|object|false|none|none|
|Status|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|Format|object|false|none|none|

<h2 id="tocS_DescribeForecastExportJobRequest">DescribeForecastExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeforecastexportjobrequest"></a>
<a id="schema_DescribeForecastExportJobRequest"></a>
<a id="tocSdescribeforecastexportjobrequest"></a>
<a id="tocsdescribeforecastexportjobrequest"></a>

```json
{
  "ForecastExportJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastExportJobArn|object|true|none|none|

<h2 id="tocS_DescribeMonitorResponse">DescribeMonitorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemonitorresponse"></a>
<a id="schema_DescribeMonitorResponse"></a>
<a id="tocSdescribemonitorresponse"></a>
<a id="tocsdescribemonitorresponse"></a>

```json
{
  "MonitorName": {},
  "MonitorArn": {},
  "ResourceArn": {},
  "Status": {},
  "LastEvaluationTime": {},
  "LastEvaluationState": {},
  "Baseline": {
    "PredictorBaseline": {
      "BaselineMetrics": {}
    }
  },
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "EstimatedEvaluationTimeRemainingInMinutes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorName|object|false|none|none|
|MonitorArn|object|false|none|none|
|ResourceArn|object|false|none|none|
|Status|object|false|none|none|
|LastEvaluationTime|object|false|none|none|
|LastEvaluationState|object|false|none|none|
|Baseline|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|EstimatedEvaluationTimeRemainingInMinutes|object|false|none|none|

<h2 id="tocS_DescribeMonitorRequest">DescribeMonitorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemonitorrequest"></a>
<a id="schema_DescribeMonitorRequest"></a>
<a id="tocSdescribemonitorrequest"></a>
<a id="tocsdescribemonitorrequest"></a>

```json
{
  "MonitorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorArn|object|true|none|none|

<h2 id="tocS_DescribePredictorResponse">DescribePredictorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribepredictorresponse"></a>
<a id="schema_DescribePredictorResponse"></a>
<a id="tocSdescribepredictorresponse"></a>
<a id="tocsdescribepredictorresponse"></a>

```json
{
  "PredictorArn": {},
  "PredictorName": {},
  "AlgorithmArn": {},
  "AutoMLAlgorithmArns": {},
  "ForecastHorizon": {},
  "ForecastTypes": {},
  "PerformAutoML": {},
  "AutoMLOverrideStrategy": {},
  "PerformHPO": {},
  "TrainingParameters": {
    "property1": "string",
    "property2": "string"
  },
  "EvaluationParameters": {
    "NumberOfBacktestWindows": {},
    "BackTestWindowOffset": {}
  },
  "HPOConfig": {
    "ParameterRanges": {
      "CategoricalParameterRanges": {},
      "ContinuousParameterRanges": {},
      "IntegerParameterRanges": {}
    }
  },
  "InputDataConfig": {
    "DatasetGroupArn": {},
    "SupplementaryFeatures": {}
  },
  "FeaturizationConfig": {
    "ForecastFrequency": {},
    "ForecastDimensions": {},
    "Featurizations": {}
  },
  "EncryptionConfig": {
    "RoleArn": {},
    "KMSKeyArn": {}
  },
  "PredictorExecutionDetails": {
    "PredictorExecutions": {}
  },
  "EstimatedTimeRemainingInMinutes": {},
  "IsAutoPredictor": {},
  "DatasetImportJobArns": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "OptimizationMetric": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorArn|object|false|none|none|
|PredictorName|object|false|none|none|
|AlgorithmArn|object|false|none|none|
|AutoMLAlgorithmArns|object|false|none|none|
|ForecastHorizon|object|false|none|none|
|ForecastTypes|object|false|none|none|
|PerformAutoML|object|false|none|none|
|AutoMLOverrideStrategy|object|false|none|none|
|PerformHPO|object|false|none|none|
|TrainingParameters|object|false|none|none|
|EvaluationParameters|object|false|none|none|
|HPOConfig|object|false|none|none|
|InputDataConfig|object|false|none|none|
|FeaturizationConfig|object|false|none|none|
|EncryptionConfig|object|false|none|none|
|PredictorExecutionDetails|object|false|none|none|
|EstimatedTimeRemainingInMinutes|object|false|none|none|
|IsAutoPredictor|object|false|none|none|
|DatasetImportJobArns|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|OptimizationMetric|object|false|none|none|

<h2 id="tocS_DescribePredictorRequest">DescribePredictorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepredictorrequest"></a>
<a id="schema_DescribePredictorRequest"></a>
<a id="tocSdescribepredictorrequest"></a>
<a id="tocsdescribepredictorrequest"></a>

```json
{
  "PredictorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorArn|object|true|none|none|

<h2 id="tocS_DescribePredictorBacktestExportJobResponse">DescribePredictorBacktestExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribepredictorbacktestexportjobresponse"></a>
<a id="schema_DescribePredictorBacktestExportJobResponse"></a>
<a id="tocSdescribepredictorbacktestexportjobresponse"></a>
<a id="tocsdescribepredictorbacktestexportjobresponse"></a>

```json
{
  "PredictorBacktestExportJobArn": {},
  "PredictorBacktestExportJobName": {},
  "PredictorArn": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Message": {},
  "Status": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "Format": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorBacktestExportJobArn|object|false|none|none|
|PredictorBacktestExportJobName|object|false|none|none|
|PredictorArn|object|false|none|none|
|Destination|[DataDestination](#schemadatadestination)|false|none|The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). |
|Message|object|false|none|none|
|Status|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|Format|object|false|none|none|

<h2 id="tocS_DescribePredictorBacktestExportJobRequest">DescribePredictorBacktestExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepredictorbacktestexportjobrequest"></a>
<a id="schema_DescribePredictorBacktestExportJobRequest"></a>
<a id="tocSdescribepredictorbacktestexportjobrequest"></a>
<a id="tocsdescribepredictorbacktestexportjobrequest"></a>

```json
{
  "PredictorBacktestExportJobArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorBacktestExportJobArn|object|true|none|none|

<h2 id="tocS_DescribeWhatIfAnalysisResponse">DescribeWhatIfAnalysisResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribewhatifanalysisresponse"></a>
<a id="schema_DescribeWhatIfAnalysisResponse"></a>
<a id="tocSdescribewhatifanalysisresponse"></a>
<a id="tocsdescribewhatifanalysisresponse"></a>

```json
{
  "WhatIfAnalysisName": {},
  "WhatIfAnalysisArn": {},
  "ForecastArn": {},
  "EstimatedTimeRemainingInMinutes": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "TimeSeriesSelector": {
    "TimeSeriesIdentifiers": {
      "DataSource": {
        "S3Config": {
          "Path": {},
          "RoleArn": {},
          "KMSKeyArn": {}
        }
      },
      "Schema": {
        "Attributes": {}
      },
      "Format": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfAnalysisName|object|false|none|none|
|WhatIfAnalysisArn|object|false|none|none|
|ForecastArn|object|false|none|none|
|EstimatedTimeRemainingInMinutes|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|TimeSeriesSelector|[TimeSeriesSelector](#schematimeseriesselector)|false|none|<p>Defines the set of time series that are used to create the forecasts in a <code>TimeSeriesIdentifiers</code> object.</p> <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p> <ul> <li> <p> <code>DataSource</code> </p> </li> <li> <p> <code>Format</code> </p> </li> <li> <p> <code>Schema</code> </p> </li> </ul>|

<h2 id="tocS_DescribeWhatIfAnalysisRequest">DescribeWhatIfAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribewhatifanalysisrequest"></a>
<a id="schema_DescribeWhatIfAnalysisRequest"></a>
<a id="tocSdescribewhatifanalysisrequest"></a>
<a id="tocsdescribewhatifanalysisrequest"></a>

```json
{
  "WhatIfAnalysisArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfAnalysisArn|object|true|none|none|

<h2 id="tocS_DescribeWhatIfForecastResponse">DescribeWhatIfForecastResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribewhatifforecastresponse"></a>
<a id="schema_DescribeWhatIfForecastResponse"></a>
<a id="tocSdescribewhatifforecastresponse"></a>
<a id="tocsdescribewhatifforecastresponse"></a>

```json
{
  "WhatIfForecastName": {},
  "WhatIfForecastArn": {},
  "WhatIfAnalysisArn": {},
  "EstimatedTimeRemainingInMinutes": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "TimeSeriesTransformations": {},
  "TimeSeriesReplacementsDataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    },
    "Schema": {
      "Attributes": {}
    },
    "Format": {},
    "TimestampFormat": {}
  },
  "ForecastTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecastName|object|false|none|none|
|WhatIfForecastArn|object|false|none|none|
|WhatIfAnalysisArn|object|false|none|none|
|EstimatedTimeRemainingInMinutes|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|TimeSeriesTransformations|object|false|none|none|
|TimeSeriesReplacementsDataSource|object|false|none|none|
|ForecastTypes|object|false|none|none|

<h2 id="tocS_DescribeWhatIfForecastRequest">DescribeWhatIfForecastRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribewhatifforecastrequest"></a>
<a id="schema_DescribeWhatIfForecastRequest"></a>
<a id="tocSdescribewhatifforecastrequest"></a>
<a id="tocsdescribewhatifforecastrequest"></a>

```json
{
  "WhatIfForecastArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecastArn|object|true|none|none|

<h2 id="tocS_DescribeWhatIfForecastExportResponse">DescribeWhatIfForecastExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribewhatifforecastexportresponse"></a>
<a id="schema_DescribeWhatIfForecastExportResponse"></a>
<a id="tocSdescribewhatifforecastexportresponse"></a>
<a id="tocsdescribewhatifforecastexportresponse"></a>

```json
{
  "WhatIfForecastExportArn": {},
  "WhatIfForecastExportName": {},
  "WhatIfForecastArns": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Message": {},
  "Status": {},
  "CreationTime": {},
  "EstimatedTimeRemainingInMinutes": {},
  "LastModificationTime": {},
  "Format": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecastExportArn|object|false|none|none|
|WhatIfForecastExportName|object|false|none|none|
|WhatIfForecastArns|object|false|none|none|
|Destination|[DataDestination](#schemadatadestination)|false|none|The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). |
|Message|object|false|none|none|
|Status|object|false|none|none|
|CreationTime|object|false|none|none|
|EstimatedTimeRemainingInMinutes|object|false|none|none|
|LastModificationTime|object|false|none|none|
|Format|object|false|none|none|

<h2 id="tocS_DescribeWhatIfForecastExportRequest">DescribeWhatIfForecastExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribewhatifforecastexportrequest"></a>
<a id="schema_DescribeWhatIfForecastExportRequest"></a>
<a id="tocSdescribewhatifforecastexportrequest"></a>
<a id="tocsdescribewhatifforecastexportrequest"></a>

```json
{
  "WhatIfForecastExportArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecastExportArn|object|true|none|none|

<h2 id="tocS_GetAccuracyMetricsResponse">GetAccuracyMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccuracymetricsresponse"></a>
<a id="schema_GetAccuracyMetricsResponse"></a>
<a id="tocSgetaccuracymetricsresponse"></a>
<a id="tocsgetaccuracymetricsresponse"></a>

```json
{
  "PredictorEvaluationResults": {},
  "IsAutoPredictor": {},
  "AutoMLOverrideStrategy": {},
  "OptimizationMetric": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorEvaluationResults|object|false|none|none|
|IsAutoPredictor|object|false|none|none|
|AutoMLOverrideStrategy|object|false|none|none|
|OptimizationMetric|object|false|none|none|

<h2 id="tocS_GetAccuracyMetricsRequest">GetAccuracyMetricsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccuracymetricsrequest"></a>
<a id="schema_GetAccuracyMetricsRequest"></a>
<a id="tocSgetaccuracymetricsrequest"></a>
<a id="tocsgetaccuracymetricsrequest"></a>

```json
{
  "PredictorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorArn|object|true|none|none|

<h2 id="tocS_ListDatasetGroupsResponse">ListDatasetGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetgroupsresponse"></a>
<a id="schema_ListDatasetGroupsResponse"></a>
<a id="tocSlistdatasetgroupsresponse"></a>
<a id="tocslistdatasetgroupsresponse"></a>

```json
{
  "DatasetGroups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetGroups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDatasetGroupsRequest">ListDatasetGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetgroupsrequest"></a>
<a id="schema_ListDatasetGroupsRequest"></a>
<a id="tocSlistdatasetgroupsrequest"></a>
<a id="tocslistdatasetgroupsrequest"></a>

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

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListDatasetImportJobsResponse">ListDatasetImportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetimportjobsresponse"></a>
<a id="schema_ListDatasetImportJobsResponse"></a>
<a id="tocSlistdatasetimportjobsresponse"></a>
<a id="tocslistdatasetimportjobsresponse"></a>

```json
{
  "DatasetImportJobs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetImportJobs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDatasetImportJobsRequest">ListDatasetImportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetimportjobsrequest"></a>
<a id="schema_ListDatasetImportJobsRequest"></a>
<a id="tocSlistdatasetimportjobsrequest"></a>
<a id="tocslistdatasetimportjobsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListDatasetsResponse">ListDatasetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsresponse"></a>
<a id="schema_ListDatasetsResponse"></a>
<a id="tocSlistdatasetsresponse"></a>
<a id="tocslistdatasetsresponse"></a>

```json
{
  "Datasets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Datasets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDatasetsRequest">ListDatasetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsrequest"></a>
<a id="schema_ListDatasetsRequest"></a>
<a id="tocSlistdatasetsrequest"></a>
<a id="tocslistdatasetsrequest"></a>

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

<h2 id="tocS_ListExplainabilitiesResponse">ListExplainabilitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexplainabilitiesresponse"></a>
<a id="schema_ListExplainabilitiesResponse"></a>
<a id="tocSlistexplainabilitiesresponse"></a>
<a id="tocslistexplainabilitiesresponse"></a>

```json
{
  "Explainabilities": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Explainabilities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListExplainabilitiesRequest">ListExplainabilitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistexplainabilitiesrequest"></a>
<a id="schema_ListExplainabilitiesRequest"></a>
<a id="tocSlistexplainabilitiesrequest"></a>
<a id="tocslistexplainabilitiesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListExplainabilityExportsResponse">ListExplainabilityExportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexplainabilityexportsresponse"></a>
<a id="schema_ListExplainabilityExportsResponse"></a>
<a id="tocSlistexplainabilityexportsresponse"></a>
<a id="tocslistexplainabilityexportsresponse"></a>

```json
{
  "ExplainabilityExports": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityExports|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListExplainabilityExportsRequest">ListExplainabilityExportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistexplainabilityexportsrequest"></a>
<a id="schema_ListExplainabilityExportsRequest"></a>
<a id="tocSlistexplainabilityexportsrequest"></a>
<a id="tocslistexplainabilityexportsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListForecastExportJobsResponse">ListForecastExportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistforecastexportjobsresponse"></a>
<a id="schema_ListForecastExportJobsResponse"></a>
<a id="tocSlistforecastexportjobsresponse"></a>
<a id="tocslistforecastexportjobsresponse"></a>

```json
{
  "ForecastExportJobs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastExportJobs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListForecastExportJobsRequest">ListForecastExportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistforecastexportjobsrequest"></a>
<a id="schema_ListForecastExportJobsRequest"></a>
<a id="tocSlistforecastexportjobsrequest"></a>
<a id="tocslistforecastexportjobsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListForecastsResponse">ListForecastsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistforecastsresponse"></a>
<a id="schema_ListForecastsResponse"></a>
<a id="tocSlistforecastsresponse"></a>
<a id="tocslistforecastsresponse"></a>

```json
{
  "Forecasts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Forecasts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListForecastsRequest">ListForecastsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistforecastsrequest"></a>
<a id="schema_ListForecastsRequest"></a>
<a id="tocSlistforecastsrequest"></a>
<a id="tocslistforecastsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListMonitorEvaluationsResponse">ListMonitorEvaluationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmonitorevaluationsresponse"></a>
<a id="schema_ListMonitorEvaluationsResponse"></a>
<a id="tocSlistmonitorevaluationsresponse"></a>
<a id="tocslistmonitorevaluationsresponse"></a>

```json
{
  "NextToken": {},
  "PredictorMonitorEvaluations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|PredictorMonitorEvaluations|object|false|none|none|

<h2 id="tocS_ListMonitorEvaluationsRequest">ListMonitorEvaluationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmonitorevaluationsrequest"></a>
<a id="schema_ListMonitorEvaluationsRequest"></a>
<a id="tocSlistmonitorevaluationsrequest"></a>
<a id="tocslistmonitorevaluationsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "MonitorArn": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|MonitorArn|object|true|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListMonitorsResponse">ListMonitorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmonitorsresponse"></a>
<a id="schema_ListMonitorsResponse"></a>
<a id="tocSlistmonitorsresponse"></a>
<a id="tocslistmonitorsresponse"></a>

```json
{
  "Monitors": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Monitors|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMonitorsRequest">ListMonitorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmonitorsrequest"></a>
<a id="schema_ListMonitorsRequest"></a>
<a id="tocSlistmonitorsrequest"></a>
<a id="tocslistmonitorsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListPredictorBacktestExportJobsResponse">ListPredictorBacktestExportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpredictorbacktestexportjobsresponse"></a>
<a id="schema_ListPredictorBacktestExportJobsResponse"></a>
<a id="tocSlistpredictorbacktestexportjobsresponse"></a>
<a id="tocslistpredictorbacktestexportjobsresponse"></a>

```json
{
  "PredictorBacktestExportJobs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorBacktestExportJobs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPredictorBacktestExportJobsRequest">ListPredictorBacktestExportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpredictorbacktestexportjobsrequest"></a>
<a id="schema_ListPredictorBacktestExportJobsRequest"></a>
<a id="tocSlistpredictorbacktestexportjobsrequest"></a>
<a id="tocslistpredictorbacktestexportjobsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListPredictorsResponse">ListPredictorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpredictorsresponse"></a>
<a id="schema_ListPredictorsResponse"></a>
<a id="tocSlistpredictorsresponse"></a>
<a id="tocslistpredictorsresponse"></a>

```json
{
  "Predictors": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Predictors|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPredictorsRequest">ListPredictorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpredictorsrequest"></a>
<a id="schema_ListPredictorsRequest"></a>
<a id="tocSlistpredictorsrequest"></a>
<a id="tocslistpredictorsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

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
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_ListWhatIfAnalysesResponse">ListWhatIfAnalysesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwhatifanalysesresponse"></a>
<a id="schema_ListWhatIfAnalysesResponse"></a>
<a id="tocSlistwhatifanalysesresponse"></a>
<a id="tocslistwhatifanalysesresponse"></a>

```json
{
  "WhatIfAnalyses": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfAnalyses|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListWhatIfAnalysesRequest">ListWhatIfAnalysesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistwhatifanalysesrequest"></a>
<a id="schema_ListWhatIfAnalysesRequest"></a>
<a id="tocSlistwhatifanalysesrequest"></a>
<a id="tocslistwhatifanalysesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListWhatIfForecastExportsResponse">ListWhatIfForecastExportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwhatifforecastexportsresponse"></a>
<a id="schema_ListWhatIfForecastExportsResponse"></a>
<a id="tocSlistwhatifforecastexportsresponse"></a>
<a id="tocslistwhatifforecastexportsresponse"></a>

```json
{
  "WhatIfForecastExports": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecastExports|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListWhatIfForecastExportsRequest">ListWhatIfForecastExportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistwhatifforecastexportsrequest"></a>
<a id="schema_ListWhatIfForecastExportsRequest"></a>
<a id="tocSlistwhatifforecastexportsrequest"></a>
<a id="tocslistwhatifforecastexportsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListWhatIfForecastsResponse">ListWhatIfForecastsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwhatifforecastsresponse"></a>
<a id="schema_ListWhatIfForecastsResponse"></a>
<a id="tocSlistwhatifforecastsresponse"></a>
<a id="tocslistwhatifforecastsresponse"></a>

```json
{
  "WhatIfForecasts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecasts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListWhatIfForecastsRequest">ListWhatIfForecastsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistwhatifforecastsrequest"></a>
<a id="schema_ListWhatIfForecastsRequest"></a>
<a id="tocSlistwhatifforecastsrequest"></a>
<a id="tocslistwhatifforecastsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ResumeResourceRequest">ResumeResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumeresourcerequest"></a>
<a id="schema_ResumeResourceRequest"></a>
<a id="tocSresumeresourcerequest"></a>
<a id="tocsresumeresourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_StopResourceRequest">StopResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopresourcerequest"></a>
<a id="schema_StopResourceRequest"></a>
<a id="tocSstopresourcerequest"></a>
<a id="tocsstopresourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

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
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
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
  "ResourceArn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateDatasetGroupResponse">UpdateDatasetGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetgroupresponse"></a>
<a id="schema_UpdateDatasetGroupResponse"></a>
<a id="tocSupdatedatasetgroupresponse"></a>
<a id="tocsupdatedatasetgroupresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateDatasetGroupRequest">UpdateDatasetGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetgrouprequest"></a>
<a id="schema_UpdateDatasetGroupRequest"></a>
<a id="tocSupdatedatasetgrouprequest"></a>
<a id="tocsupdatedatasetgrouprequest"></a>

```json
{
  "DatasetGroupArn": {},
  "DatasetArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetGroupArn|object|true|none|none|
|DatasetArns|object|true|none|none|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
"ADD"
```

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "AttributeName": {},
  "Operation": {},
  "Value": {}
}
```

Defines the modifications that you are making to an attribute for a what-if forecast. For example, you can use this operation to create a what-if forecast that investigates a 10% off sale on all shoes. To do this, you specify <code>"AttributeName": "shoes"</code>, <code>"Operation": "MULTIPLY"</code>, and <code>"Value": "0.90"</code>. Pair this operation with the <a>TimeSeriesCondition</a> operation within the <a>CreateWhatIfForecastRequest$TimeSeriesTransformations</a> operation to define a subset of attribute items that are modified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|true|none|none|
|Operation|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_Configuration">Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_Configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Values](#schemavalues)|false|none|none|

<h2 id="tocS_AdditionalDataset">AdditionalDataset</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldataset"></a>
<a id="schema_AdditionalDataset"></a>
<a id="tocSadditionaldataset"></a>
<a id="tocsadditionaldataset"></a>

```json
{
  "Name": {},
  "Configuration": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

<p>Describes an additional dataset. This object is part of the <a>DataConfig</a> object. Forecast supports the Weather Index and Holidays additional datasets.</p> <p> <b>Weather Index</b> </p> <p>The Amazon Forecast Weather Index is a built-in dataset that incorporates historical and projected weather information into your model. The Weather Index supplements your datasets with over two years of historical weather data and up to 14 days of projected weather data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast Weather Index</a>.</p> <p> <b>Holidays</b> </p> <p>Holidays is a built-in dataset that incorporates national holiday information into your model. It provides native support for the holiday calendars of 66 countries. To view the holiday calendars, refer to the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> library. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/holidays.html">Holidays Featurization</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Configuration|object|false|none|none|

<h2 id="tocS_AdditionalDatasets">AdditionalDatasets</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldatasets"></a>
<a id="schema_AdditionalDatasets"></a>
<a id="tocSadditionaldatasets"></a>
<a id="tocsadditionaldatasets"></a>

```json
[
  {
    "Name": {},
    "Configuration": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  }
]
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

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

<h2 id="tocS_Transformations">Transformations</h2>
<!-- backwards compatibility -->
<a id="schematransformations"></a>
<a id="schema_Transformations"></a>
<a id="tocStransformations"></a>
<a id="tocstransformations"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Value](#schemavalue)|false|none|none|

<h2 id="tocS_AttributeConfig">AttributeConfig</h2>
<!-- backwards compatibility -->
<a id="schemaattributeconfig"></a>
<a id="schema_AttributeConfig"></a>
<a id="tocSattributeconfig"></a>
<a id="tocsattributeconfig"></a>

```json
{
  "AttributeName": {},
  "Transformations": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>Provides information about the method used to transform attributes.</p> <p>The following is an example using the RETAIL domain:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>"Transformations": {"aggregation": "sum", "middlefill": "zero", "backfill": "zero"}</code> </p> <p> <code>}</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|true|none|none|
|Transformations|object|true|none|none|

<h2 id="tocS_AttributeConfigs">AttributeConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaattributeconfigs"></a>
<a id="schema_AttributeConfigs"></a>
<a id="tocSattributeconfigs"></a>
<a id="tocsattributeconfigs"></a>

```json
[
  {
    "AttributeName": {},
    "Transformations": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_AttributeType">AttributeType</h2>
<!-- backwards compatibility -->
<a id="schemaattributetype"></a>
<a id="schema_AttributeType"></a>
<a id="tocSattributetype"></a>
<a id="tocsattributetype"></a>

```json
"string"
```

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
"string"
```

<h2 id="tocS_AutoMLOverrideStrategy">AutoMLOverrideStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaautomloverridestrategy"></a>
<a id="schema_AutoMLOverrideStrategy"></a>
<a id="tocSautomloverridestrategy"></a>
<a id="tocsautomloverridestrategy"></a>

```json
"LatencyOptimized"
```

<h2 id="tocS_PredictorBaseline">PredictorBaseline</h2>
<!-- backwards compatibility -->
<a id="schemapredictorbaseline"></a>
<a id="schema_PredictorBaseline"></a>
<a id="tocSpredictorbaseline"></a>
<a id="tocspredictorbaseline"></a>

```json
{
  "BaselineMetrics": {}
}
```

Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BaselineMetrics|object|false|none|none|

<h2 id="tocS_Baseline">Baseline</h2>
<!-- backwards compatibility -->
<a id="schemabaseline"></a>
<a id="schema_Baseline"></a>
<a id="tocSbaseline"></a>
<a id="tocsbaseline"></a>

```json
{
  "PredictorBaseline": {
    "BaselineMetrics": {}
  }
}
```

Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorBaseline|object|false|none|none|

<h2 id="tocS_BaselineMetric">BaselineMetric</h2>
<!-- backwards compatibility -->
<a id="schemabaselinemetric"></a>
<a id="schema_BaselineMetric"></a>
<a id="tocSbaselinemetric"></a>
<a id="tocsbaselinemetric"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

An individual metric that you can use for comparison as you evaluate your monitoring results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_BaselineMetrics">BaselineMetrics</h2>
<!-- backwards compatibility -->
<a id="schemabaselinemetrics"></a>
<a id="schema_BaselineMetrics"></a>
<a id="tocSbaselinemetrics"></a>
<a id="tocsbaselinemetrics"></a>

```json
[
  {
    "Name": {},
    "Value": {}
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

<h2 id="tocS_Values">Values</h2>
<!-- backwards compatibility -->
<a id="schemavalues"></a>
<a id="schema_Values"></a>
<a id="tocSvalues"></a>
<a id="tocsvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CategoricalParameterRange">CategoricalParameterRange</h2>
<!-- backwards compatibility -->
<a id="schemacategoricalparameterrange"></a>
<a id="schema_CategoricalParameterRange"></a>
<a id="tocScategoricalparameterrange"></a>
<a id="tocscategoricalparameterrange"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

Specifies a categorical hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_CategoricalParameterRanges">CategoricalParameterRanges</h2>
<!-- backwards compatibility -->
<a id="schemacategoricalparameterranges"></a>
<a id="schema_CategoricalParameterRanges"></a>
<a id="tocScategoricalparameterranges"></a>
<a id="tocscategoricalparameterranges"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
"EQUALS"
```

<h2 id="tocS_ScalingType">ScalingType</h2>
<!-- backwards compatibility -->
<a id="schemascalingtype"></a>
<a id="schema_ScalingType"></a>
<a id="tocSscalingtype"></a>
<a id="tocsscalingtype"></a>

```json
"Auto"
```

<h2 id="tocS_ContinuousParameterRange">ContinuousParameterRange</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousparameterrange"></a>
<a id="schema_ContinuousParameterRange"></a>
<a id="tocScontinuousparameterrange"></a>
<a id="tocscontinuousparameterrange"></a>

```json
{
  "Name": {},
  "MaxValue": {},
  "MinValue": {},
  "ScalingType": {}
}
```

Specifies a continuous hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|MaxValue|object|true|none|none|
|MinValue|object|true|none|none|
|ScalingType|object|false|none|none|

<h2 id="tocS_ContinuousParameterRanges">ContinuousParameterRanges</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousparameterranges"></a>
<a id="schema_ContinuousParameterRanges"></a>
<a id="tocScontinuousparameterranges"></a>
<a id="tocscontinuousparameterranges"></a>

```json
[
  {
    "Name": {},
    "MaxValue": {},
    "MinValue": {},
    "ScalingType": {}
  }
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

<h2 id="tocS_ForecastTypes">ForecastTypes</h2>
<!-- backwards compatibility -->
<a id="schemaforecasttypes"></a>
<a id="schema_ForecastTypes"></a>
<a id="tocSforecasttypes"></a>
<a id="tocsforecasttypes"></a>

```json
[
  "stri"
]
```

<h2 id="tocS_ForecastDimensions">ForecastDimensions</h2>
<!-- backwards compatibility -->
<a id="schemaforecastdimensions"></a>
<a id="schema_ForecastDimensions"></a>
<a id="tocSforecastdimensions"></a>
<a id="tocsforecastdimensions"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Frequency">Frequency</h2>
<!-- backwards compatibility -->
<a id="schemafrequency"></a>
<a id="schema_Frequency"></a>
<a id="tocSfrequency"></a>
<a id="tocsfrequency"></a>

```json
"strin"
```

<h2 id="tocS_DataConfig">DataConfig</h2>
<!-- backwards compatibility -->
<a id="schemadataconfig"></a>
<a id="schema_DataConfig"></a>
<a id="tocSdataconfig"></a>
<a id="tocsdataconfig"></a>

```json
{
  "DatasetGroupArn": {},
  "AttributeConfigs": {},
  "AdditionalDatasets": {}
}
```

The data configuration for your dataset group and any additional datasets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetGroupArn|object|true|none|none|
|AttributeConfigs|object|false|none|none|
|AdditionalDatasets|object|false|none|none|

<h2 id="tocS_EncryptionConfig">EncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfig"></a>
<a id="schema_EncryptionConfig"></a>
<a id="tocSencryptionconfig"></a>
<a id="tocsencryptionconfig"></a>

```json
{
  "RoleArn": {},
  "KMSKeyArn": {}
}
```

An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|true|none|none|
|KMSKeyArn|object|true|none|none|

<h2 id="tocS_OptimizationMetric">OptimizationMetric</h2>
<!-- backwards compatibility -->
<a id="schemaoptimizationmetric"></a>
<a id="schema_OptimizationMetric"></a>
<a id="tocSoptimizationmetric"></a>
<a id="tocsoptimizationmetric"></a>

```json
"WAPE"
```

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_MonitorConfig">MonitorConfig</h2>
<!-- backwards compatibility -->
<a id="schemamonitorconfig"></a>
<a id="schema_MonitorConfig"></a>
<a id="tocSmonitorconfig"></a>
<a id="tocsmonitorconfig"></a>

```json
{
  "MonitorName": {}
}
```

The configuration details for the predictor monitor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorName|object|true|none|none|

<h2 id="tocS_TimeAlignmentBoundary">TimeAlignmentBoundary</h2>
<!-- backwards compatibility -->
<a id="schematimealignmentboundary"></a>
<a id="schema_TimeAlignmentBoundary"></a>
<a id="tocStimealignmentboundary"></a>
<a id="tocstimealignmentboundary"></a>

```json
{
  "Month": {},
  "DayOfMonth": {},
  "DayOfWeek": {},
  "Hour": {}
}
```

<p>The time boundary Forecast uses to align and aggregate your data to match your forecast frequency. Provide the unit of time and the time boundary as a key value pair. If you don't provide a time boundary, Forecast uses a set of <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#default-time-boundaries">Default Time Boundaries</a>. </p> <p>For more information about aggregation, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html">Data Aggregation for Different Forecast Frequencies</a>. For more information setting a custom time boundary, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#specifying-time-boundary">Specifying a Time Boundary</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Month|object|false|none|none|
|DayOfMonth|object|false|none|none|
|DayOfWeek|object|false|none|none|
|Hour|object|false|none|none|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
"RETAIL"
```

<h2 id="tocS_DataSource">DataSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_DataSource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
{
  "S3Config": {
    "Path": {},
    "RoleArn": {},
    "KMSKeyArn": {}
  }
}
```

The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Config|object|true|none|none|

<h2 id="tocS_TimestampFormat">TimestampFormat</h2>
<!-- backwards compatibility -->
<a id="schematimestampformat"></a>
<a id="schema_TimestampFormat"></a>
<a id="tocStimestampformat"></a>
<a id="tocstimestampformat"></a>

```json
"string"
```

<h2 id="tocS_TimeZone">TimeZone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_TimeZone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
"string"
```

<h2 id="tocS_UseGeolocationForTimeZone">UseGeolocationForTimeZone</h2>
<!-- backwards compatibility -->
<a id="schemausegeolocationfortimezone"></a>
<a id="schema_UseGeolocationForTimeZone"></a>
<a id="tocSusegeolocationfortimezone"></a>
<a id="tocsusegeolocationfortimezone"></a>

```json
true
```

<h2 id="tocS_GeolocationFormat">GeolocationFormat</h2>
<!-- backwards compatibility -->
<a id="schemageolocationformat"></a>
<a id="schema_GeolocationFormat"></a>
<a id="tocSgeolocationformat"></a>
<a id="tocsgeolocationformat"></a>

```json
"string"
```

<h2 id="tocS_Format">Format</h2>
<!-- backwards compatibility -->
<a id="schemaformat"></a>
<a id="schema_Format"></a>
<a id="tocSformat"></a>
<a id="tocsformat"></a>

```json
"string"
```

<h2 id="tocS_ImportMode">ImportMode</h2>
<!-- backwards compatibility -->
<a id="schemaimportmode"></a>
<a id="schema_ImportMode"></a>
<a id="tocSimportmode"></a>
<a id="tocsimportmode"></a>

```json
"FULL"
```

<h2 id="tocS_DatasetType">DatasetType</h2>
<!-- backwards compatibility -->
<a id="schemadatasettype"></a>
<a id="schema_DatasetType"></a>
<a id="tocSdatasettype"></a>
<a id="tocsdatasettype"></a>

```json
"TARGET_TIME_SERIES"
```

<h2 id="tocS_Schema">Schema</h2>
<!-- backwards compatibility -->
<a id="schemaschema"></a>
<a id="schema_Schema"></a>
<a id="tocSschema"></a>
<a id="tocsschema"></a>

```json
{
  "Attributes": {}
}
```

Defines the fields of a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attributes|object|false|none|none|

<h2 id="tocS_DataDestination">DataDestination</h2>
<!-- backwards compatibility -->
<a id="schemadatadestination"></a>
<a id="schema_DataDestination"></a>
<a id="tocSdatadestination"></a>
<a id="tocsdatadestination"></a>

```json
{
  "S3Config": {
    "Path": {},
    "RoleArn": {},
    "KMSKeyArn": {}
  }
}
```

The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Config|object|true|none|none|

<h2 id="tocS_ExplainabilityConfig">ExplainabilityConfig</h2>
<!-- backwards compatibility -->
<a id="schemaexplainabilityconfig"></a>
<a id="schema_ExplainabilityConfig"></a>
<a id="tocSexplainabilityconfig"></a>
<a id="tocsexplainabilityconfig"></a>

```json
{
  "TimeSeriesGranularity": {},
  "TimePointGranularity": {}
}
```

<p>The ExplainabilityConfig data type defines the number of time series and time points included in <a>CreateExplainability</a>.</p> <p>If you provide a predictor ARN for <code>ResourceArn</code>, you must set both <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to “ALL”. When creating Predictor Explainability, Amazon Forecast considers all time series and time points.</p> <p>If you provide a forecast ARN for <code>ResourceArn</code>, you can set <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to either “ALL” or “Specific”.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeSeriesGranularity|object|true|none|none|
|TimePointGranularity|object|true|none|none|

<h2 id="tocS_LocalDateTime">LocalDateTime</h2>
<!-- backwards compatibility -->
<a id="schemalocaldatetime"></a>
<a id="schema_LocalDateTime"></a>
<a id="tocSlocaldatetime"></a>
<a id="tocslocaldatetime"></a>

```json
"string"
```

<h2 id="tocS_TimeSeriesSelector">TimeSeriesSelector</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesselector"></a>
<a id="schema_TimeSeriesSelector"></a>
<a id="tocStimeseriesselector"></a>
<a id="tocstimeseriesselector"></a>

```json
{
  "TimeSeriesIdentifiers": {
    "DataSource": {
      "S3Config": {
        "Path": {},
        "RoleArn": {},
        "KMSKeyArn": {}
      }
    },
    "Schema": {
      "Attributes": {}
    },
    "Format": {}
  }
}
```

<p>Defines the set of time series that are used to create the forecasts in a <code>TimeSeriesIdentifiers</code> object.</p> <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p> <ul> <li> <p> <code>DataSource</code> </p> </li> <li> <p> <code>Format</code> </p> </li> <li> <p> <code>Schema</code> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeSeriesIdentifiers|object|false|none|none|

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
|**additionalProperties**|[ParameterValue](#schemaparametervalue)|false|none|none|

<h2 id="tocS_EvaluationParameters">EvaluationParameters</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationparameters"></a>
<a id="schema_EvaluationParameters"></a>
<a id="tocSevaluationparameters"></a>
<a id="tocsevaluationparameters"></a>

```json
{
  "NumberOfBacktestWindows": {},
  "BackTestWindowOffset": {}
}
```

Parameters that define how to split a dataset into training data and testing data, and the number of iterations to perform. These parameters are specified in the predefined algorithms but you can override them in the <a>CreatePredictor</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NumberOfBacktestWindows|object|false|none|none|
|BackTestWindowOffset|object|false|none|none|

<h2 id="tocS_HyperParameterTuningJobConfig">HyperParameterTuningJobConfig</h2>
<!-- backwards compatibility -->
<a id="schemahyperparametertuningjobconfig"></a>
<a id="schema_HyperParameterTuningJobConfig"></a>
<a id="tocShyperparametertuningjobconfig"></a>
<a id="tocshyperparametertuningjobconfig"></a>

```json
{
  "ParameterRanges": {
    "CategoricalParameterRanges": {},
    "ContinuousParameterRanges": {},
    "IntegerParameterRanges": {}
  }
}
```

<p>Configuration information for a hyperparameter tuning job. You specify this object in the <a>CreatePredictor</a> request.</p> <p>A <i>hyperparameter</i> is a parameter that governs the model training process. You set hyperparameters before training starts, unlike model parameters, which are determined during training. The values of the hyperparameters effect which values are chosen for the model parameters.</p> <p>In a <i>hyperparameter tuning job</i>, Amazon Forecast chooses the set of hyperparameter values that optimize a specified metric. Forecast accomplishes this by running many training jobs over a range of hyperparameter values. The optimum set of values depends on the algorithm, the training data, and the specified metric objective.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterRanges|object|false|none|none|

<h2 id="tocS_InputDataConfig">InputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemainputdataconfig"></a>
<a id="schema_InputDataConfig"></a>
<a id="tocSinputdataconfig"></a>
<a id="tocsinputdataconfig"></a>

```json
{
  "DatasetGroupArn": {},
  "SupplementaryFeatures": {}
}
```

<note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>DataConfig</a>.</p> </note> <p>The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetGroupArn|object|true|none|none|
|SupplementaryFeatures|object|false|none|none|

<h2 id="tocS_FeaturizationConfig">FeaturizationConfig</h2>
<!-- backwards compatibility -->
<a id="schemafeaturizationconfig"></a>
<a id="schema_FeaturizationConfig"></a>
<a id="tocSfeaturizationconfig"></a>
<a id="tocsfeaturizationconfig"></a>

```json
{
  "ForecastFrequency": {},
  "ForecastDimensions": {},
  "Featurizations": {}
}
```

<note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>AttributeConfig</a>.</p> </note> <p>In a <a>CreatePredictor</a> operation, the specified algorithm trains a model using the specified dataset group. You can optionally tell the operation to modify data fields prior to training a model. These modifications are referred to as <i>featurization</i>.</p> <p>You define featurization using the <code>FeaturizationConfig</code> object. You specify an array of transformations, one for each field that you want to featurize. You then include the <code>FeaturizationConfig</code> object in your <code>CreatePredictor</code> request. Amazon Forecast applies the featurization to the <code>TARGET_TIME_SERIES</code> and <code>RELATED_TIME_SERIES</code> datasets before model training.</p> <p>You can create multiple featurization configurations. For example, you might call the <code>CreatePredictor</code> operation twice by specifying different featurization configurations.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastFrequency|object|true|none|none|
|ForecastDimensions|object|false|none|none|
|Featurizations|object|false|none|none|

<h2 id="tocS_WhatIfForecastArnListForExport">WhatIfForecastArnListForExport</h2>
<!-- backwards compatibility -->
<a id="schemawhatifforecastarnlistforexport"></a>
<a id="schema_WhatIfForecastArnListForExport"></a>
<a id="tocSwhatifforecastarnlistforexport"></a>
<a id="tocswhatifforecastarnlistforexport"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LongArn">LongArn</h2>
<!-- backwards compatibility -->
<a id="schemalongarn"></a>
<a id="schema_LongArn"></a>
<a id="tocSlongarn"></a>
<a id="tocslongarn"></a>

```json
"string"
```

<h2 id="tocS_TimeSeriesTransformations">TimeSeriesTransformations</h2>
<!-- backwards compatibility -->
<a id="schematimeseriestransformations"></a>
<a id="schema_TimeSeriesTransformations"></a>
<a id="tocStimeseriestransformations"></a>
<a id="tocstimeseriestransformations"></a>

```json
[
  {
    "Action": {
      "AttributeName": {},
      "Operation": {},
      "Value": {}
    },
    "TimeSeriesConditions": {}
  }
]
```

<h2 id="tocS_TimeSeriesReplacementsDataSource">TimeSeriesReplacementsDataSource</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesreplacementsdatasource"></a>
<a id="schema_TimeSeriesReplacementsDataSource"></a>
<a id="tocStimeseriesreplacementsdatasource"></a>
<a id="tocstimeseriesreplacementsdatasource"></a>

```json
{
  "S3Config": {
    "Path": {},
    "RoleArn": {},
    "KMSKeyArn": {}
  },
  "Schema": {
    "Attributes": {}
  },
  "Format": {},
  "TimestampFormat": {}
}
```

A replacement dataset is a modified version of the baseline related time series that contains only the values that you want to include in a what-if forecast. The replacement dataset must contain the forecast dimensions and item identifiers in the baseline related time series as well as at least 1 changed time series. This dataset is merged with the baseline related time series to create a transformed dataset that is used for the what-if forecast.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Config|[S3Config](#schemas3config)|true|none|The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.|
|Schema|[Schema](#schemaschema)|true|none|Defines the fields of a dataset.|
|Format|object|false|none|none|
|TimestampFormat|object|false|none|none|

<h2 id="tocS_S3Config">S3Config</h2>
<!-- backwards compatibility -->
<a id="schemas3config"></a>
<a id="schema_S3Config"></a>
<a id="tocSs3config"></a>
<a id="tocss3config"></a>

```json
{
  "Path": {},
  "RoleArn": {},
  "KMSKeyArn": {}
}
```

The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Path|object|true|none|none|
|RoleArn|object|true|none|none|
|KMSKeyArn|object|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DatasetGroupSummary">DatasetGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatasetgroupsummary"></a>
<a id="schema_DatasetGroupSummary"></a>
<a id="tocSdatasetgroupsummary"></a>
<a id="tocsdatasetgroupsummary"></a>

```json
{
  "DatasetGroupArn": {},
  "DatasetGroupName": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

Provides a summary of the dataset group properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation, and provide the <code>DatasetGroupArn</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetGroupArn|object|false|none|none|
|DatasetGroupName|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_DatasetGroups">DatasetGroups</h2>
<!-- backwards compatibility -->
<a id="schemadatasetgroups"></a>
<a id="schema_DatasetGroups"></a>
<a id="tocSdatasetgroups"></a>
<a id="tocsdatasetgroups"></a>

```json
[
  {
    "DatasetGroupArn": {},
    "DatasetGroupName": {},
    "CreationTime": {},
    "LastModificationTime": {}
  }
]
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"string"
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_DatasetImportJobSummary">DatasetImportJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatasetimportjobsummary"></a>
<a id="schema_DatasetImportJobSummary"></a>
<a id="tocSdatasetimportjobsummary"></a>
<a id="tocsdatasetimportjobsummary"></a>

```json
{
  "DatasetImportJobArn": {},
  "DatasetImportJobName": {},
  "DataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "ImportMode": {}
}
```

Provides a summary of the dataset import job properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation, and provide the <code>DatasetImportJobArn</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetImportJobArn|object|false|none|none|
|DatasetImportJobName|object|false|none|none|
|DataSource|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|ImportMode|object|false|none|none|

<h2 id="tocS_DatasetImportJobs">DatasetImportJobs</h2>
<!-- backwards compatibility -->
<a id="schemadatasetimportjobs"></a>
<a id="schema_DatasetImportJobs"></a>
<a id="tocSdatasetimportjobs"></a>
<a id="tocsdatasetimportjobs"></a>

```json
[
  {
    "DatasetImportJobArn": {},
    "DatasetImportJobName": {},
    "DataSource": {
      "S3Config": {
        "Path": {},
        "RoleArn": {},
        "KMSKeyArn": {}
      }
    },
    "Status": {},
    "Message": {},
    "CreationTime": {},
    "LastModificationTime": {},
    "ImportMode": {}
  }
]
```

<h2 id="tocS_DatasetSummary">DatasetSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatasetsummary"></a>
<a id="schema_DatasetSummary"></a>
<a id="tocSdatasetsummary"></a>
<a id="tocsdatasetsummary"></a>

```json
{
  "DatasetArn": {},
  "DatasetName": {},
  "DatasetType": {},
  "Domain": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

Provides a summary of the dataset properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation, and provide the <code>DatasetArn</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetArn|object|false|none|none|
|DatasetName|object|false|none|none|
|DatasetType|object|false|none|none|
|Domain|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_Datasets">Datasets</h2>
<!-- backwards compatibility -->
<a id="schemadatasets"></a>
<a id="schema_Datasets"></a>
<a id="tocSdatasets"></a>
<a id="tocsdatasets"></a>

```json
[
  {
    "DatasetArn": {},
    "DatasetName": {},
    "DatasetType": {},
    "Domain": {},
    "CreationTime": {},
    "LastModificationTime": {}
  }
]
```

<h2 id="tocS_DayOfMonth">DayOfMonth</h2>
<!-- backwards compatibility -->
<a id="schemadayofmonth"></a>
<a id="schema_DayOfMonth"></a>
<a id="tocSdayofmonth"></a>
<a id="tocsdayofmonth"></a>

```json
1
```

<h2 id="tocS_DayOfWeek">DayOfWeek</h2>
<!-- backwards compatibility -->
<a id="schemadayofweek"></a>
<a id="schema_DayOfWeek"></a>
<a id="tocSdayofweek"></a>
<a id="tocsdayofweek"></a>

```json
"MONDAY"
```

<h2 id="tocS_ReferencePredictorSummary">ReferencePredictorSummary</h2>
<!-- backwards compatibility -->
<a id="schemareferencepredictorsummary"></a>
<a id="schema_ReferencePredictorSummary"></a>
<a id="tocSreferencepredictorsummary"></a>
<a id="tocsreferencepredictorsummary"></a>

```json
{
  "Arn": {},
  "State": {}
}
```

Provides a summary of the reference predictor used when retraining or upgrading a predictor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_ExplainabilityInfo">ExplainabilityInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexplainabilityinfo"></a>
<a id="schema_ExplainabilityInfo"></a>
<a id="tocSexplainabilityinfo"></a>
<a id="tocsexplainabilityinfo"></a>

```json
{
  "ExplainabilityArn": {},
  "Status": {}
}
```

Provides information about the Explainability resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_MonitorInfo">MonitorInfo</h2>
<!-- backwards compatibility -->
<a id="schemamonitorinfo"></a>
<a id="schema_MonitorInfo"></a>
<a id="tocSmonitorinfo"></a>
<a id="tocsmonitorinfo"></a>

```json
{
  "MonitorArn": {},
  "Status": {}
}
```

Provides information about the monitor resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_FieldStatistics">FieldStatistics</h2>
<!-- backwards compatibility -->
<a id="schemafieldstatistics"></a>
<a id="schema_FieldStatistics"></a>
<a id="tocSfieldstatistics"></a>
<a id="tocsfieldstatistics"></a>

```json
{
  "property1": {
    "Count": {},
    "CountDistinct": {},
    "CountNull": {},
    "CountNan": {},
    "Min": {},
    "Max": {},
    "Avg": {},
    "Stddev": {},
    "CountLong": {},
    "CountDistinctLong": {},
    "CountNullLong": {},
    "CountNanLong": {}
  },
  "property2": {
    "Count": {},
    "CountDistinct": {},
    "CountNull": {},
    "CountNan": {},
    "Min": {},
    "Max": {},
    "Avg": {},
    "Stddev": {},
    "CountLong": {},
    "CountDistinctLong": {},
    "CountNullLong": {},
    "CountNanLong": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Statistics](#schemastatistics)|false|none|Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_EvaluationState">EvaluationState</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationstate"></a>
<a id="schema_EvaluationState"></a>
<a id="tocSevaluationstate"></a>
<a id="tocsevaluationstate"></a>

```json
"string"
```

<h2 id="tocS_PredictorExecutionDetails">PredictorExecutionDetails</h2>
<!-- backwards compatibility -->
<a id="schemapredictorexecutiondetails"></a>
<a id="schema_PredictorExecutionDetails"></a>
<a id="tocSpredictorexecutiondetails"></a>
<a id="tocspredictorexecutiondetails"></a>

```json
{
  "PredictorExecutions": {}
}
```

Contains details on the backtests performed to evaluate the accuracy of the predictor. The tests are returned in descending order of accuracy, with the most accurate backtest appearing first. You specify the number of backtests to perform when you call the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorExecutions|object|false|none|none|

<h2 id="tocS_LongArnList">LongArnList</h2>
<!-- backwards compatibility -->
<a id="schemalongarnlist"></a>
<a id="schema_LongArnList"></a>
<a id="tocSlongarnlist"></a>
<a id="tocslongarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Detail">Detail</h2>
<!-- backwards compatibility -->
<a id="schemadetail"></a>
<a id="schema_Detail"></a>
<a id="tocSdetail"></a>
<a id="tocsdetail"></a>

```json
"string"
```

<h2 id="tocS_KMSKeyArn">KMSKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarn"></a>
<a id="schema_KMSKeyArn"></a>
<a id="tocSkmskeyarn"></a>
<a id="tocskmskeyarn"></a>

```json
"string"
```

<h2 id="tocS_ForecastType">ForecastType</h2>
<!-- backwards compatibility -->
<a id="schemaforecasttype"></a>
<a id="schema_ForecastType"></a>
<a id="tocSforecasttype"></a>
<a id="tocsforecasttype"></a>

```json
"stri"
```

<h2 id="tocS_ErrorMetric">ErrorMetric</h2>
<!-- backwards compatibility -->
<a id="schemaerrormetric"></a>
<a id="schema_ErrorMetric"></a>
<a id="tocSerrormetric"></a>
<a id="tocserrormetric"></a>

```json
{
  "ForecastType": {},
  "WAPE": {},
  "RMSE": {},
  "MASE": {},
  "MAPE": {}
}
```

 Provides detailed error metrics to evaluate the performance of a predictor. This object is part of the <a>Metrics</a> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastType|object|false|none|none|
|WAPE|object|false|none|none|
|RMSE|object|false|none|none|
|MASE|object|false|none|none|
|MAPE|object|false|none|none|

<h2 id="tocS_ErrorMetrics">ErrorMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaerrormetrics"></a>
<a id="schema_ErrorMetrics"></a>
<a id="tocSerrormetrics"></a>
<a id="tocserrormetrics"></a>

```json
[
  {
    "ForecastType": {},
    "WAPE": {},
    "RMSE": {},
    "MASE": {},
    "MAPE": {}
  }
]
```

<h2 id="tocS_TestWindows">TestWindows</h2>
<!-- backwards compatibility -->
<a id="schematestwindows"></a>
<a id="schema_TestWindows"></a>
<a id="tocStestwindows"></a>
<a id="tocstestwindows"></a>

```json
[
  {
    "TestWindowStart": {},
    "TestWindowEnd": {},
    "ItemCount": {},
    "EvaluationType": {},
    "Metrics": {
      "RMSE": {},
      "WeightedQuantileLosses": {},
      "ErrorMetrics": {},
      "AverageWeightedQuantileLoss": {}
    }
  }
]
```

<h2 id="tocS_EvaluationResult">EvaluationResult</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationresult"></a>
<a id="schema_EvaluationResult"></a>
<a id="tocSevaluationresult"></a>
<a id="tocsevaluationresult"></a>

```json
{
  "AlgorithmArn": {},
  "TestWindows": {}
}
```

The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlgorithmArn|object|false|none|none|
|TestWindows|object|false|none|none|

<h2 id="tocS_EvaluationType">EvaluationType</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationtype"></a>
<a id="schema_EvaluationType"></a>
<a id="tocSevaluationtype"></a>
<a id="tocsevaluationtype"></a>

```json
"SUMMARY"
```

<h2 id="tocS_ExplainabilitySummary">ExplainabilitySummary</h2>
<!-- backwards compatibility -->
<a id="schemaexplainabilitysummary"></a>
<a id="schema_ExplainabilitySummary"></a>
<a id="tocSexplainabilitysummary"></a>
<a id="tocsexplainabilitysummary"></a>

```json
{
  "ExplainabilityArn": {},
  "ExplainabilityName": {},
  "ResourceArn": {},
  "ExplainabilityConfig": {
    "TimeSeriesGranularity": {},
    "TimePointGranularity": {}
  },
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

Provides a summary of the Explainability properties used in the <a>ListExplainabilities</a> operation. To get a complete set of properties, call the <a>DescribeExplainability</a> operation, and provide the listed <code>ExplainabilityArn</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityArn|object|false|none|none|
|ExplainabilityName|object|false|none|none|
|ResourceArn|object|false|none|none|
|ExplainabilityConfig|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_Explainabilities">Explainabilities</h2>
<!-- backwards compatibility -->
<a id="schemaexplainabilities"></a>
<a id="schema_Explainabilities"></a>
<a id="tocSexplainabilities"></a>
<a id="tocsexplainabilities"></a>

```json
[
  {
    "ExplainabilityArn": {},
    "ExplainabilityName": {},
    "ResourceArn": {},
    "ExplainabilityConfig": {
      "TimeSeriesGranularity": {},
      "TimePointGranularity": {}
    },
    "Status": {},
    "Message": {},
    "CreationTime": {},
    "LastModificationTime": {}
  }
]
```

<h2 id="tocS_TimeSeriesGranularity">TimeSeriesGranularity</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesgranularity"></a>
<a id="schema_TimeSeriesGranularity"></a>
<a id="tocStimeseriesgranularity"></a>
<a id="tocstimeseriesgranularity"></a>

```json
"ALL"
```

<h2 id="tocS_TimePointGranularity">TimePointGranularity</h2>
<!-- backwards compatibility -->
<a id="schematimepointgranularity"></a>
<a id="schema_TimePointGranularity"></a>
<a id="tocStimepointgranularity"></a>
<a id="tocstimepointgranularity"></a>

```json
"ALL"
```

<h2 id="tocS_ExplainabilityExportSummary">ExplainabilityExportSummary</h2>
<!-- backwards compatibility -->
<a id="schemaexplainabilityexportsummary"></a>
<a id="schema_ExplainabilityExportSummary"></a>
<a id="tocSexplainabilityexportsummary"></a>
<a id="tocsexplainabilityexportsummary"></a>

```json
{
  "ExplainabilityExportArn": {},
  "ExplainabilityExportName": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

Provides a summary of the Explainability export properties used in the <a>ListExplainabilityExports</a> operation. To get a complete set of properties, call the <a>DescribeExplainabilityExport</a> operation, and provide the <code>ExplainabilityExportArn</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExplainabilityExportArn|object|false|none|none|
|ExplainabilityExportName|object|false|none|none|
|Destination|[DataDestination](#schemadatadestination)|false|none|The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). |
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_ExplainabilityExports">ExplainabilityExports</h2>
<!-- backwards compatibility -->
<a id="schemaexplainabilityexports"></a>
<a id="schema_ExplainabilityExports"></a>
<a id="tocSexplainabilityexports"></a>
<a id="tocsexplainabilityexports"></a>

```json
[
  {
    "ExplainabilityExportArn": {},
    "ExplainabilityExportName": {},
    "Destination": {
      "S3Config": {
        "Path": {},
        "RoleArn": {},
        "KMSKeyArn": {}
      }
    },
    "Status": {},
    "Message": {},
    "CreationTime": {},
    "LastModificationTime": {}
  }
]
```

<h2 id="tocS_FeaturizationPipeline">FeaturizationPipeline</h2>
<!-- backwards compatibility -->
<a id="schemafeaturizationpipeline"></a>
<a id="schema_FeaturizationPipeline"></a>
<a id="tocSfeaturizationpipeline"></a>
<a id="tocsfeaturizationpipeline"></a>

```json
[
  {
    "FeaturizationMethodName": {},
    "FeaturizationMethodParameters": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_Featurization">Featurization</h2>
<!-- backwards compatibility -->
<a id="schemafeaturization"></a>
<a id="schema_Featurization"></a>
<a id="tocSfeaturization"></a>
<a id="tocsfeaturization"></a>

```json
{
  "AttributeName": {},
  "FeaturizationPipeline": {}
}
```

<note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>AttributeConfig</a>.</p> </note> <p>Provides featurization (transformation) information for a dataset field. This object is part of the <a>FeaturizationConfig</a> object.</p> <p>For example:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>FeaturizationPipeline [ {</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code> </p> <p> <code>} ]</code> </p> <p> <code>}</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|true|none|none|
|FeaturizationPipeline|object|false|none|none|

<h2 id="tocS_Featurizations">Featurizations</h2>
<!-- backwards compatibility -->
<a id="schemafeaturizations"></a>
<a id="schema_Featurizations"></a>
<a id="tocSfeaturizations"></a>
<a id="tocsfeaturizations"></a>

```json
[
  {
    "AttributeName": {},
    "FeaturizationPipeline": {}
  }
]
```

<h2 id="tocS_FeaturizationMethodName">FeaturizationMethodName</h2>
<!-- backwards compatibility -->
<a id="schemafeaturizationmethodname"></a>
<a id="schema_FeaturizationMethodName"></a>
<a id="tocSfeaturizationmethodname"></a>
<a id="tocsfeaturizationmethodname"></a>

```json
"filling"
```

<h2 id="tocS_FeaturizationMethodParameters">FeaturizationMethodParameters</h2>
<!-- backwards compatibility -->
<a id="schemafeaturizationmethodparameters"></a>
<a id="schema_FeaturizationMethodParameters"></a>
<a id="tocSfeaturizationmethodparameters"></a>
<a id="tocsfeaturizationmethodparameters"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ParameterValue](#schemaparametervalue)|false|none|none|

<h2 id="tocS_FeaturizationMethod">FeaturizationMethod</h2>
<!-- backwards compatibility -->
<a id="schemafeaturizationmethod"></a>
<a id="schema_FeaturizationMethod"></a>
<a id="tocSfeaturizationmethod"></a>
<a id="tocsfeaturizationmethod"></a>

```json
{
  "FeaturizationMethodName": {},
  "FeaturizationMethodParameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

<p>Provides information about the method that featurizes (transforms) a dataset field. The method is part of the <code>FeaturizationPipeline</code> of the <a>Featurization</a> object. </p> <p>The following is an example of how you specify a <code>FeaturizationMethod</code> object.</p> <p> <code>{</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "sum", "middlefill": "zero", "backfill": "zero"}</code> </p> <p> <code>}</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FeaturizationMethodName|object|true|none|none|
|FeaturizationMethodParameters|object|false|none|none|

<h2 id="tocS_ParameterValue">ParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaparametervalue"></a>
<a id="schema_ParameterValue"></a>
<a id="tocSparametervalue"></a>
<a id="tocsparametervalue"></a>

```json
"string"
```

<h2 id="tocS_Statistics">Statistics</h2>
<!-- backwards compatibility -->
<a id="schemastatistics"></a>
<a id="schema_Statistics"></a>
<a id="tocSstatistics"></a>
<a id="tocsstatistics"></a>

```json
{
  "Count": {},
  "CountDistinct": {},
  "CountNull": {},
  "CountNan": {},
  "Min": {},
  "Max": {},
  "Avg": {},
  "Stddev": {},
  "CountLong": {},
  "CountDistinctLong": {},
  "CountNullLong": {},
  "CountNanLong": {}
}
```

Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|object|false|none|none|
|CountDistinct|object|false|none|none|
|CountNull|object|false|none|none|
|CountNan|object|false|none|none|
|Min|object|false|none|none|
|Max|object|false|none|none|
|Avg|object|false|none|none|
|Stddev|object|false|none|none|
|CountLong|object|false|none|none|
|CountDistinctLong|object|false|none|none|
|CountNullLong|object|false|none|none|
|CountNanLong|object|false|none|none|

<h2 id="tocS_FilterConditionString">FilterConditionString</h2>
<!-- backwards compatibility -->
<a id="schemafilterconditionstring"></a>
<a id="schema_FilterConditionString"></a>
<a id="tocSfilterconditionstring"></a>
<a id="tocsfilterconditionstring"></a>

```json
"IS"
```

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "Key": {},
  "Value": {},
  "Condition": {}
}
```

Describes a filter for choosing a subset of objects. Each filter consists of a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the objects that match the statement, respectively. The match statement consists of a key and a value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|
|Condition|object|true|none|none|

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
[
  {
    "Key": {},
    "Value": {},
    "Condition": {}
  }
]
```

<h2 id="tocS_ForecastExportJobSummary">ForecastExportJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemaforecastexportjobsummary"></a>
<a id="schema_ForecastExportJobSummary"></a>
<a id="tocSforecastexportjobsummary"></a>
<a id="tocsforecastexportjobsummary"></a>

```json
{
  "ForecastExportJobArn": {},
  "ForecastExportJobName": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call the <a>DescribeForecastExportJob</a> operation, and provide the listed <code>ForecastExportJobArn</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastExportJobArn|object|false|none|none|
|ForecastExportJobName|object|false|none|none|
|Destination|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_ForecastExportJobs">ForecastExportJobs</h2>
<!-- backwards compatibility -->
<a id="schemaforecastexportjobs"></a>
<a id="schema_ForecastExportJobs"></a>
<a id="tocSforecastexportjobs"></a>
<a id="tocsforecastexportjobs"></a>

```json
[
  {
    "ForecastExportJobArn": {},
    "ForecastExportJobName": {},
    "Destination": {
      "S3Config": {
        "Path": {},
        "RoleArn": {},
        "KMSKeyArn": {}
      }
    },
    "Status": {},
    "Message": {},
    "CreationTime": {},
    "LastModificationTime": {}
  }
]
```

<h2 id="tocS_ForecastSummary">ForecastSummary</h2>
<!-- backwards compatibility -->
<a id="schemaforecastsummary"></a>
<a id="schema_ForecastSummary"></a>
<a id="tocSforecastsummary"></a>
<a id="tocsforecastsummary"></a>

```json
{
  "ForecastArn": {},
  "ForecastName": {},
  "PredictorArn": {},
  "CreatedUsingAutoPredictor": {},
  "DatasetGroupArn": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

Provides a summary of the forecast properties used in the <a>ListForecasts</a> operation. To get the complete set of properties, call the <a>DescribeForecast</a> operation, and provide the <code>ForecastArn</code> that is listed in the summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForecastArn|object|false|none|none|
|ForecastName|object|false|none|none|
|PredictorArn|object|false|none|none|
|CreatedUsingAutoPredictor|object|false|none|none|
|DatasetGroupArn|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_Forecasts">Forecasts</h2>
<!-- backwards compatibility -->
<a id="schemaforecasts"></a>
<a id="schema_Forecasts"></a>
<a id="tocSforecasts"></a>
<a id="tocsforecasts"></a>

```json
[
  {
    "ForecastArn": {},
    "ForecastName": {},
    "PredictorArn": {},
    "CreatedUsingAutoPredictor": {},
    "DatasetGroupArn": {},
    "Status": {},
    "Message": {},
    "CreationTime": {},
    "LastModificationTime": {}
  }
]
```

<h2 id="tocS_PredictorEvaluationResults">PredictorEvaluationResults</h2>
<!-- backwards compatibility -->
<a id="schemapredictorevaluationresults"></a>
<a id="schema_PredictorEvaluationResults"></a>
<a id="tocSpredictorevaluationresults"></a>
<a id="tocspredictorevaluationresults"></a>

```json
[
  {
    "AlgorithmArn": {},
    "TestWindows": {}
  }
]
```

<h2 id="tocS_Hour">Hour</h2>
<!-- backwards compatibility -->
<a id="schemahour"></a>
<a id="schema_Hour"></a>
<a id="tocShour"></a>
<a id="tocshour"></a>

```json
0
```

<h2 id="tocS_ParameterRanges">ParameterRanges</h2>
<!-- backwards compatibility -->
<a id="schemaparameterranges"></a>
<a id="schema_ParameterRanges"></a>
<a id="tocSparameterranges"></a>
<a id="tocsparameterranges"></a>

```json
{
  "CategoricalParameterRanges": {},
  "ContinuousParameterRanges": {},
  "IntegerParameterRanges": {}
}
```

Specifies the categorical, continuous, and integer hyperparameters, and their ranges of tunable values. The range of tunable values determines which values that a hyperparameter tuning job can choose for the specified hyperparameter. This object is part of the <a>HyperParameterTuningJobConfig</a> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoricalParameterRanges|object|false|none|none|
|ContinuousParameterRanges|object|false|none|none|
|IntegerParameterRanges|object|false|none|none|

<h2 id="tocS_SupplementaryFeatures">SupplementaryFeatures</h2>
<!-- backwards compatibility -->
<a id="schemasupplementaryfeatures"></a>
<a id="schema_SupplementaryFeatures"></a>
<a id="tocSsupplementaryfeatures"></a>
<a id="tocssupplementaryfeatures"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_IntegerParameterRange">IntegerParameterRange</h2>
<!-- backwards compatibility -->
<a id="schemaintegerparameterrange"></a>
<a id="schema_IntegerParameterRange"></a>
<a id="tocSintegerparameterrange"></a>
<a id="tocsintegerparameterrange"></a>

```json
{
  "Name": {},
  "MaxValue": {},
  "MinValue": {},
  "ScalingType": {}
}
```

Specifies an integer hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|MaxValue|object|true|none|none|
|MinValue|object|true|none|none|
|ScalingType|object|false|none|none|

<h2 id="tocS_IntegerParameterRanges">IntegerParameterRanges</h2>
<!-- backwards compatibility -->
<a id="schemaintegerparameterranges"></a>
<a id="schema_IntegerParameterRanges"></a>
<a id="tocSintegerparameterranges"></a>
<a id="tocsintegerparameterranges"></a>

```json
[
  {
    "Name": {},
    "MaxValue": {},
    "MinValue": {},
    "ScalingType": {}
  }
]
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_PredictorMonitorEvaluations">PredictorMonitorEvaluations</h2>
<!-- backwards compatibility -->
<a id="schemapredictormonitorevaluations"></a>
<a id="schema_PredictorMonitorEvaluations"></a>
<a id="tocSpredictormonitorevaluations"></a>
<a id="tocspredictormonitorevaluations"></a>

```json
[
  {
    "ResourceArn": {},
    "MonitorArn": {},
    "EvaluationTime": {},
    "EvaluationState": {},
    "WindowStartDatetime": {},
    "WindowEndDatetime": {},
    "PredictorEvent": {
      "Detail": {},
      "Datetime": {}
    },
    "MonitorDataSource": {
      "DatasetImportJobArn": {},
      "ForecastArn": {},
      "PredictorArn": {}
    },
    "MetricResults": {},
    "NumItemsEvaluated": {},
    "Message": {}
  }
]
```

<h2 id="tocS_Monitors">Monitors</h2>
<!-- backwards compatibility -->
<a id="schemamonitors"></a>
<a id="schema_Monitors"></a>
<a id="tocSmonitors"></a>
<a id="tocsmonitors"></a>

```json
[
  {
    "MonitorArn": {},
    "MonitorName": {},
    "ResourceArn": {},
    "Status": {},
    "CreationTime": {},
    "LastModificationTime": {}
  }
]
```

<h2 id="tocS_PredictorBacktestExportJobs">PredictorBacktestExportJobs</h2>
<!-- backwards compatibility -->
<a id="schemapredictorbacktestexportjobs"></a>
<a id="schema_PredictorBacktestExportJobs"></a>
<a id="tocSpredictorbacktestexportjobs"></a>
<a id="tocspredictorbacktestexportjobs"></a>

```json
[
  {
    "PredictorBacktestExportJobArn": {},
    "PredictorBacktestExportJobName": {},
    "Destination": {
      "S3Config": {
        "Path": {},
        "RoleArn": {},
        "KMSKeyArn": {}
      }
    },
    "Status": {},
    "Message": {},
    "CreationTime": {},
    "LastModificationTime": {}
  }
]
```

<h2 id="tocS_Predictors">Predictors</h2>
<!-- backwards compatibility -->
<a id="schemapredictors"></a>
<a id="schema_Predictors"></a>
<a id="tocSpredictors"></a>
<a id="tocspredictors"></a>

```json
[
  {
    "PredictorArn": {},
    "PredictorName": {},
    "DatasetGroupArn": {},
    "IsAutoPredictor": {},
    "ReferencePredictorSummary": {
      "Arn": {},
      "State": {}
    },
    "Status": {},
    "Message": {},
    "CreationTime": {},
    "LastModificationTime": {}
  }
]
```

<h2 id="tocS_WhatIfAnalyses">WhatIfAnalyses</h2>
<!-- backwards compatibility -->
<a id="schemawhatifanalyses"></a>
<a id="schema_WhatIfAnalyses"></a>
<a id="tocSwhatifanalyses"></a>
<a id="tocswhatifanalyses"></a>

```json
[
  {
    "WhatIfAnalysisArn": {},
    "WhatIfAnalysisName": {},
    "ForecastArn": {},
    "Status": {},
    "Message": {},
    "CreationTime": {},
    "LastModificationTime": {}
  }
]
```

<h2 id="tocS_WhatIfForecastExports">WhatIfForecastExports</h2>
<!-- backwards compatibility -->
<a id="schemawhatifforecastexports"></a>
<a id="schema_WhatIfForecastExports"></a>
<a id="tocSwhatifforecastexports"></a>
<a id="tocswhatifforecastexports"></a>

```json
[
  {
    "WhatIfForecastExportArn": {},
    "WhatIfForecastArns": {},
    "WhatIfForecastExportName": {},
    "Destination": {
      "S3Config": {
        "Path": {},
        "RoleArn": {},
        "KMSKeyArn": {}
      }
    },
    "Status": {},
    "Message": {},
    "CreationTime": {},
    "LastModificationTime": {}
  }
]
```

<h2 id="tocS_WhatIfForecasts">WhatIfForecasts</h2>
<!-- backwards compatibility -->
<a id="schemawhatifforecasts"></a>
<a id="schema_WhatIfForecasts"></a>
<a id="tocSwhatifforecasts"></a>
<a id="tocswhatifforecasts"></a>

```json
[
  {
    "WhatIfForecastArn": {},
    "WhatIfForecastName": {},
    "WhatIfAnalysisArn": {},
    "Status": {},
    "Message": {},
    "CreationTime": {},
    "LastModificationTime": {}
  }
]
```

<h2 id="tocS_MetricName">MetricName</h2>
<!-- backwards compatibility -->
<a id="schemametricname"></a>
<a id="schema_MetricName"></a>
<a id="tocSmetricname"></a>
<a id="tocsmetricname"></a>

```json
"string"
```

<h2 id="tocS_MetricResult">MetricResult</h2>
<!-- backwards compatibility -->
<a id="schemametricresult"></a>
<a id="schema_MetricResult"></a>
<a id="tocSmetricresult"></a>
<a id="tocsmetricresult"></a>

```json
{
  "MetricName": {},
  "MetricValue": {}
}
```

<p>An individual metric Forecast calculated when monitoring predictor usage. You can compare the value for this metric to the metric's value in the <a>Baseline</a> to see how your predictor's performance is changing.</p> <p>For more information about metrics generated by Forecast see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Evaluating Predictor Accuracy</a> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricName|object|false|none|none|
|MetricValue|object|false|none|none|

<h2 id="tocS_MetricResults">MetricResults</h2>
<!-- backwards compatibility -->
<a id="schemametricresults"></a>
<a id="schema_MetricResults"></a>
<a id="tocSmetricresults"></a>
<a id="tocsmetricresults"></a>

```json
[
  {
    "MetricName": {},
    "MetricValue": {}
  }
]
```

<h2 id="tocS_WeightedQuantileLosses">WeightedQuantileLosses</h2>
<!-- backwards compatibility -->
<a id="schemaweightedquantilelosses"></a>
<a id="schema_WeightedQuantileLosses"></a>
<a id="tocSweightedquantilelosses"></a>
<a id="tocsweightedquantilelosses"></a>

```json
[
  {
    "Quantile": {},
    "LossValue": {}
  }
]
```

<h2 id="tocS_Metrics">Metrics</h2>
<!-- backwards compatibility -->
<a id="schemametrics"></a>
<a id="schema_Metrics"></a>
<a id="tocSmetrics"></a>
<a id="tocsmetrics"></a>

```json
{
  "RMSE": {},
  "WeightedQuantileLosses": {},
  "ErrorMetrics": {},
  "AverageWeightedQuantileLoss": {}
}
```

Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RMSE|object|false|none|none|
|WeightedQuantileLosses|object|false|none|none|
|ErrorMetrics|object|false|none|none|
|AverageWeightedQuantileLoss|object|false|none|none|

<h2 id="tocS_MonitorDataSource">MonitorDataSource</h2>
<!-- backwards compatibility -->
<a id="schemamonitordatasource"></a>
<a id="schema_MonitorDataSource"></a>
<a id="tocSmonitordatasource"></a>
<a id="tocsmonitordatasource"></a>

```json
{
  "DatasetImportJobArn": {},
  "ForecastArn": {},
  "PredictorArn": {}
}
```

The source of the data the monitor used during the evaluation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetImportJobArn|object|false|none|none|
|ForecastArn|object|false|none|none|
|PredictorArn|object|false|none|none|

<h2 id="tocS_MonitorSummary">MonitorSummary</h2>
<!-- backwards compatibility -->
<a id="schemamonitorsummary"></a>
<a id="schema_MonitorSummary"></a>
<a id="tocSmonitorsummary"></a>
<a id="tocsmonitorsummary"></a>

```json
{
  "MonitorArn": {},
  "MonitorName": {},
  "ResourceArn": {},
  "Status": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

Provides a summary of the monitor properties used in the <a>ListMonitors</a> operation. To get a complete set of properties, call the <a>DescribeMonitor</a> operation, and provide the listed <code>MonitorArn</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitorArn|object|false|none|none|
|MonitorName|object|false|none|none|
|ResourceArn|object|false|none|none|
|Status|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_Month">Month</h2>
<!-- backwards compatibility -->
<a id="schemamonth"></a>
<a id="schema_Month"></a>
<a id="tocSmonth"></a>
<a id="tocsmonth"></a>

```json
"JANUARY"
```

<h2 id="tocS_ParameterKey">ParameterKey</h2>
<!-- backwards compatibility -->
<a id="schemaparameterkey"></a>
<a id="schema_ParameterKey"></a>
<a id="tocSparameterkey"></a>
<a id="tocsparameterkey"></a>

```json
"string"
```

<h2 id="tocS_PredictorBacktestExportJobSummary">PredictorBacktestExportJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemapredictorbacktestexportjobsummary"></a>
<a id="schema_PredictorBacktestExportJobSummary"></a>
<a id="tocSpredictorbacktestexportjobsummary"></a>
<a id="tocspredictorbacktestexportjobsummary"></a>

```json
{
  "PredictorBacktestExportJobArn": {},
  "PredictorBacktestExportJobName": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of properties, call the <a>DescribePredictorBacktestExportJob</a> operation, and provide the listed <code>PredictorBacktestExportJobArn</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorBacktestExportJobArn|object|false|none|none|
|PredictorBacktestExportJobName|object|false|none|none|
|Destination|[DataDestination](#schemadatadestination)|false|none|The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). |
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_PredictorEvent">PredictorEvent</h2>
<!-- backwards compatibility -->
<a id="schemapredictorevent"></a>
<a id="schema_PredictorEvent"></a>
<a id="tocSpredictorevent"></a>
<a id="tocspredictorevent"></a>

```json
{
  "Detail": {},
  "Datetime": {}
}
```

Provides details about a predictor event, such as a retraining.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Detail|object|false|none|none|
|Datetime|object|false|none|none|

<h2 id="tocS_TestWindowDetails">TestWindowDetails</h2>
<!-- backwards compatibility -->
<a id="schematestwindowdetails"></a>
<a id="schema_TestWindowDetails"></a>
<a id="tocStestwindowdetails"></a>
<a id="tocstestwindowdetails"></a>

```json
[
  {
    "TestWindowStart": {},
    "TestWindowEnd": {},
    "Status": {},
    "Message": {}
  }
]
```

<h2 id="tocS_PredictorExecution">PredictorExecution</h2>
<!-- backwards compatibility -->
<a id="schemapredictorexecution"></a>
<a id="schema_PredictorExecution"></a>
<a id="tocSpredictorexecution"></a>
<a id="tocspredictorexecution"></a>

```json
{
  "AlgorithmArn": {},
  "TestWindows": {}
}
```

The algorithm used to perform a backtest and the status of those tests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlgorithmArn|object|false|none|none|
|TestWindows|object|false|none|none|

<h2 id="tocS_PredictorExecutions">PredictorExecutions</h2>
<!-- backwards compatibility -->
<a id="schemapredictorexecutions"></a>
<a id="schema_PredictorExecutions"></a>
<a id="tocSpredictorexecutions"></a>
<a id="tocspredictorexecutions"></a>

```json
[
  {
    "AlgorithmArn": {},
    "TestWindows": {}
  }
]
```

<h2 id="tocS_PredictorMonitorEvaluation">PredictorMonitorEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemapredictormonitorevaluation"></a>
<a id="schema_PredictorMonitorEvaluation"></a>
<a id="tocSpredictormonitorevaluation"></a>
<a id="tocspredictormonitorevaluation"></a>

```json
{
  "ResourceArn": {},
  "MonitorArn": {},
  "EvaluationTime": {},
  "EvaluationState": {},
  "WindowStartDatetime": {},
  "WindowEndDatetime": {},
  "PredictorEvent": {
    "Detail": {},
    "Datetime": {}
  },
  "MonitorDataSource": {
    "DatasetImportJobArn": {},
    "ForecastArn": {},
    "PredictorArn": {}
  },
  "MetricResults": {},
  "NumItemsEvaluated": {},
  "Message": {}
}
```

Describes the results of a monitor evaluation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|MonitorArn|object|false|none|none|
|EvaluationTime|object|false|none|none|
|EvaluationState|object|false|none|none|
|WindowStartDatetime|object|false|none|none|
|WindowEndDatetime|object|false|none|none|
|PredictorEvent|object|false|none|none|
|MonitorDataSource|object|false|none|none|
|MetricResults|object|false|none|none|
|NumItemsEvaluated|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_PredictorSummary">PredictorSummary</h2>
<!-- backwards compatibility -->
<a id="schemapredictorsummary"></a>
<a id="schema_PredictorSummary"></a>
<a id="tocSpredictorsummary"></a>
<a id="tocspredictorsummary"></a>

```json
{
  "PredictorArn": {},
  "PredictorName": {},
  "DatasetGroupArn": {},
  "IsAutoPredictor": {},
  "ReferencePredictorSummary": {
    "Arn": {},
    "State": {}
  },
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed <code>PredictorArn</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PredictorArn|object|false|none|none|
|PredictorName|object|false|none|none|
|DatasetGroupArn|object|false|none|none|
|IsAutoPredictor|object|false|none|none|
|ReferencePredictorSummary|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
"Active"
```

<h2 id="tocS_S3Path">S3Path</h2>
<!-- backwards compatibility -->
<a id="schemas3path"></a>
<a id="schema_S3Path"></a>
<a id="tocSs3path"></a>
<a id="tocss3path"></a>

```json
"strings"
```

<h2 id="tocS_SchemaAttributes">SchemaAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaschemaattributes"></a>
<a id="schema_SchemaAttributes"></a>
<a id="tocSschemaattributes"></a>
<a id="tocsschemaattributes"></a>

```json
[
  {
    "AttributeName": {},
    "AttributeType": {}
  }
]
```

<h2 id="tocS_SchemaAttribute">SchemaAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaschemaattribute"></a>
<a id="schema_SchemaAttribute"></a>
<a id="tocSschemaattribute"></a>
<a id="tocsschemaattribute"></a>

```json
{
  "AttributeName": {},
  "AttributeType": {}
}
```

An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Schema.html">Schema</a> object contains an array of <code>SchemaAttribute</code> objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|false|none|none|
|AttributeType|object|false|none|none|

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
"string"
```

<h2 id="tocS_SupplementaryFeature">SupplementaryFeature</h2>
<!-- backwards compatibility -->
<a id="schemasupplementaryfeature"></a>
<a id="schema_SupplementaryFeature"></a>
<a id="tocSsupplementaryfeature"></a>
<a id="tocssupplementaryfeature"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

<note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>AdditionalDataset</a>.</p> </note> <p>Describes a supplementary feature of a dataset group. This object is part of the <a>InputDataConfig</a> object. Forecast supports the Weather Index and Holidays built-in featurizations.</p> <p> <b>Weather Index</b> </p> <p>The Amazon Forecast Weather Index is a built-in featurization that incorporates historical and projected weather information into your model. The Weather Index supplements your datasets with over two years of historical weather data and up to 14 days of projected weather data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast Weather Index</a>.</p> <p> <b>Holidays</b> </p> <p>Holidays is a built-in featurization that incorporates a feature-engineered dataset of national holiday information into your model. It provides native support for the holiday calendars of 66 countries. To view the holiday calendars, refer to the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> library. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/holidays.html">Holidays Featurization</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"password"
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"password"
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

<p>The optional metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

```json
[
  "password"
]
```

<h2 id="tocS_TestWindowSummary">TestWindowSummary</h2>
<!-- backwards compatibility -->
<a id="schematestwindowsummary"></a>
<a id="schema_TestWindowSummary"></a>
<a id="tocStestwindowsummary"></a>
<a id="tocstestwindowsummary"></a>

```json
{
  "TestWindowStart": {},
  "TestWindowEnd": {},
  "Status": {},
  "Message": {}
}
```

The status, start time, and end time of a backtest, as well as a failure reason if applicable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TestWindowStart|object|false|none|none|
|TestWindowEnd|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_WindowSummary">WindowSummary</h2>
<!-- backwards compatibility -->
<a id="schemawindowsummary"></a>
<a id="schema_WindowSummary"></a>
<a id="tocSwindowsummary"></a>
<a id="tocswindowsummary"></a>

```json
{
  "TestWindowStart": {},
  "TestWindowEnd": {},
  "ItemCount": {},
  "EvaluationType": {},
  "Metrics": {
    "RMSE": {},
    "WeightedQuantileLosses": {},
    "ErrorMetrics": {},
    "AverageWeightedQuantileLoss": {}
  }
}
```

<p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TestWindowStart|object|false|none|none|
|TestWindowEnd|object|false|none|none|
|ItemCount|object|false|none|none|
|EvaluationType|object|false|none|none|
|Metrics|object|false|none|none|

<h2 id="tocS_TimeSeriesCondition">TimeSeriesCondition</h2>
<!-- backwards compatibility -->
<a id="schematimeseriescondition"></a>
<a id="schema_TimeSeriesCondition"></a>
<a id="tocStimeseriescondition"></a>
<a id="tocstimeseriescondition"></a>

```json
{
  "AttributeName": {},
  "AttributeValue": {},
  "Condition": {}
}
```

Creates a subset of items within an attribute that are modified. For example, you can use this operation to create a subset of items that cost $5 or less. To do this, you specify <code>"AttributeName": "price"</code>, <code>"AttributeValue": "5"</code>, and <code>"Condition": "LESS_THAN"</code>. Pair this operation with the <a>Action</a> operation within the <a>CreateWhatIfForecastRequest$TimeSeriesTransformations</a> operation to define how the attribute is modified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|true|none|none|
|AttributeValue|object|true|none|none|
|Condition|object|true|none|none|

<h2 id="tocS_TimeSeriesConditions">TimeSeriesConditions</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesconditions"></a>
<a id="schema_TimeSeriesConditions"></a>
<a id="tocStimeseriesconditions"></a>
<a id="tocstimeseriesconditions"></a>

```json
[
  {
    "AttributeName": {},
    "AttributeValue": {},
    "Condition": {}
  }
]
```

<h2 id="tocS_TimeSeriesIdentifiers">TimeSeriesIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesidentifiers"></a>
<a id="schema_TimeSeriesIdentifiers"></a>
<a id="tocStimeseriesidentifiers"></a>
<a id="tocstimeseriesidentifiers"></a>

```json
{
  "DataSource": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Schema": {
    "Attributes": {}
  },
  "Format": {}
}
```

Details about the import file that contains the time series for which you want to create forecasts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSource|[DataSource](#schemadatasource)|false|none|The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.|
|Schema|[Schema](#schemaschema)|false|none|Defines the fields of a dataset.|
|Format|object|false|none|none|

<h2 id="tocS_TimeSeriesTransformation">TimeSeriesTransformation</h2>
<!-- backwards compatibility -->
<a id="schematimeseriestransformation"></a>
<a id="schema_TimeSeriesTransformation"></a>
<a id="tocStimeseriestransformation"></a>
<a id="tocstimeseriestransformation"></a>

```json
{
  "Action": {
    "AttributeName": {},
    "Operation": {},
    "Value": {}
  },
  "TimeSeriesConditions": {}
}
```

A transformation function is a pair of operations that select and modify the rows in a related time series. You select the rows that you want with a condition operation and you modify the rows with a transformation operation. All conditions are joined with an AND operation, meaning that all conditions must be true for the transformation to be applied. Transformations are applied in the order that they are listed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|false|none|none|
|TimeSeriesConditions|object|false|none|none|

<h2 id="tocS_WeightedQuantileLoss">WeightedQuantileLoss</h2>
<!-- backwards compatibility -->
<a id="schemaweightedquantileloss"></a>
<a id="schema_WeightedQuantileLoss"></a>
<a id="tocSweightedquantileloss"></a>
<a id="tocsweightedquantileloss"></a>

```json
{
  "Quantile": {},
  "LossValue": {}
}
```

The weighted loss value for a quantile. This object is part of the <a>Metrics</a> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantile|object|false|none|none|
|LossValue|object|false|none|none|

<h2 id="tocS_WhatIfAnalysisSummary">WhatIfAnalysisSummary</h2>
<!-- backwards compatibility -->
<a id="schemawhatifanalysissummary"></a>
<a id="schema_WhatIfAnalysisSummary"></a>
<a id="tocSwhatifanalysissummary"></a>
<a id="tocswhatifanalysissummary"></a>

```json
{
  "WhatIfAnalysisArn": {},
  "WhatIfAnalysisName": {},
  "ForecastArn": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

Provides a summary of the what-if analysis properties used in the <a>ListWhatIfAnalyses</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfAnalysis</a> operation, and provide the <code>WhatIfAnalysisArn</code> that is listed in the summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfAnalysisArn|object|false|none|none|
|WhatIfAnalysisName|object|false|none|none|
|ForecastArn|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_WhatIfForecastExportSummary">WhatIfForecastExportSummary</h2>
<!-- backwards compatibility -->
<a id="schemawhatifforecastexportsummary"></a>
<a id="schema_WhatIfForecastExportSummary"></a>
<a id="tocSwhatifforecastexportsummary"></a>
<a id="tocswhatifforecastexportsummary"></a>

```json
{
  "WhatIfForecastExportArn": {},
  "WhatIfForecastArns": {},
  "WhatIfForecastExportName": {},
  "Destination": {
    "S3Config": {
      "Path": {},
      "RoleArn": {},
      "KMSKeyArn": {}
    }
  },
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

Provides a summary of the what-if forecast export properties used in the <a>ListWhatIfForecastExports</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecastExport</a> operation, and provide the <code>WhatIfForecastExportArn</code> that is listed in the summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecastExportArn|object|false|none|none|
|WhatIfForecastArns|object|false|none|none|
|WhatIfForecastExportName|object|false|none|none|
|Destination|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|

<h2 id="tocS_WhatIfForecastSummary">WhatIfForecastSummary</h2>
<!-- backwards compatibility -->
<a id="schemawhatifforecastsummary"></a>
<a id="schema_WhatIfForecastSummary"></a>
<a id="tocSwhatifforecastsummary"></a>
<a id="tocswhatifforecastsummary"></a>

```json
{
  "WhatIfForecastArn": {},
  "WhatIfForecastName": {},
  "WhatIfAnalysisArn": {},
  "Status": {},
  "Message": {},
  "CreationTime": {},
  "LastModificationTime": {}
}
```

Provides a summary of the what-if forecast properties used in the <a>ListWhatIfForecasts</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecast</a> operation, and provide the <code>WhatIfForecastArn</code> that is listed in the summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WhatIfForecastArn|object|false|none|none|
|WhatIfForecastName|object|false|none|none|
|WhatIfAnalysisArn|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
