<h1 id="amazon-lookout-for-metrics">Amazon Lookout for Metrics v2017-07-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the <i>Amazon Lookout for Metrics API Reference</i>. For an introduction to the service with tutorials for getting started, visit <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev">Amazon Lookout for Metrics Developer Guide</a>.

Base URLs:

* <a href="http://lookoutmetrics.us-east-1.amazonaws.com">http://lookoutmetrics.us-east-1.amazonaws.com</a> - The LookoutMetrics multi-region endpoint

* <a href="https://lookoutmetrics.us-east-1.amazonaws.com">https://lookoutmetrics.us-east-1.amazonaws.com</a> - The LookoutMetrics multi-region endpoint

* <a href="http://lookoutmetrics.cn-north-1.amazonaws.com.cn">http://lookoutmetrics.cn-north-1.amazonaws.com.cn</a> - The LookoutMetrics endpoint for China (Beijing) and China (Ningxia)

* <a href="https://lookoutmetrics.cn-north-1.amazonaws.com.cn">https://lookoutmetrics.cn-north-1.amazonaws.com.cn</a> - The LookoutMetrics endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/lookoutmetrics/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-lookout-for-metrics-default">Default</h1>

## ActivateAnomalyDetector

<a id="opIdActivateAnomalyDetector"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/ActivateAnomalyDetector \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string"
  }'
```

`POST /ActivateAnomalyDetector`

Activates an anomaly detector.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string"
}
```

<h3 id="activateanomalydetector-parameters">Parameters</h3>

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
|» AnomalyDetectorArn|body|string|true|The ARN of the anomaly detector.|

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

<h3 id="activateanomalydetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivateAnomalyDetectorResponse](#schemaactivateanomalydetectorresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BackTestAnomalyDetector

<a id="opIdBackTestAnomalyDetector"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/BackTestAnomalyDetector \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string"
  }'
```

`POST /BackTestAnomalyDetector`

Runs a backtest for anomaly detection for the specified resource.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string"
}
```

<h3 id="backtestanomalydetector-parameters">Parameters</h3>

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
|» AnomalyDetectorArn|body|string|true|The Amazon Resource Name (ARN) of the anomaly detector.|

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

<h3 id="backtestanomalydetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BackTestAnomalyDetectorResponse](#schemabacktestanomalydetectorresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAlert

<a id="opIdCreateAlert"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/CreateAlert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AlertName": "string",
    "AlertSensitivityThreshold": 0,
    "AlertDescription": "string",
    "AnomalyDetectorArn": "string",
    "Action": {
      "SNSConfiguration": {
        "RoleArn": {},
        "SnsTopicArn": {},
        "SnsFormat": {}
      },
      "LambdaConfiguration": {
        "RoleArn": {},
        "LambdaArn": {}
      }
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "AlertFilters": {
      "MetricList": {},
      "DimensionFilterList": {}
    }
  }'
```

`POST /CreateAlert`

Creates an alert for an anomaly detector.

> Body parameter

```json
{
  "AlertName": "string",
  "AlertSensitivityThreshold": 0,
  "AlertDescription": "string",
  "AnomalyDetectorArn": "string",
  "Action": {
    "SNSConfiguration": {
      "RoleArn": {},
      "SnsTopicArn": {},
      "SnsFormat": {}
    },
    "LambdaConfiguration": {
      "RoleArn": {},
      "LambdaArn": {}
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "AlertFilters": {
    "MetricList": {},
    "DimensionFilterList": {}
  }
}
```

<h3 id="createalert-parameters">Parameters</h3>

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
|» AlertName|body|string|true|The name of the alert.|
|» AlertSensitivityThreshold|body|integer|false|An integer from 0 to 100 specifying the alert sensitivity threshold.|
|» AlertDescription|body|string|false|A description of the alert.|
|» AnomalyDetectorArn|body|string|true|The ARN of the detector to which the alert is attached.|
|» Action|body|object|true|A configuration that specifies the action to perform when anomalies are detected.|
|» » SNSConfiguration|body|object|false|none|
|» » » RoleArn|body|object|true|none|
|» » » SnsTopicArn|body|object|true|none|
|» » » SnsFormat|body|object|false|none|
|» » LambdaConfiguration|body|object|false|none|
|» » » RoleArn|body|object|true|none|
|» » » LambdaArn|body|object|true|none|
|» Tags|body|object|false|A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the alert.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» AlertFilters|body|object|false|The configuration of the alert filters.|
|» » MetricList|body|object|false|none|
|» » DimensionFilterList|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "AlertArn": {}
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

<h3 id="createalert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAlertResponse](#schemacreatealertresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAnomalyDetector

<a id="opIdCreateAnomalyDetector"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/CreateAnomalyDetector \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorName": "string",
    "AnomalyDetectorDescription": "string",
    "AnomalyDetectorConfig": {
      "AnomalyDetectorFrequency": {}
    },
    "KmsKeyArn": "stringstringstringst",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /CreateAnomalyDetector`

Creates an anomaly detector.

> Body parameter

```json
{
  "AnomalyDetectorName": "string",
  "AnomalyDetectorDescription": "string",
  "AnomalyDetectorConfig": {
    "AnomalyDetectorFrequency": {}
  },
  "KmsKeyArn": "stringstringstringst",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createanomalydetector-parameters">Parameters</h3>

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
|» AnomalyDetectorName|body|string|true|The name of the detector.|
|» AnomalyDetectorDescription|body|string|false|A description of the detector.|
|» AnomalyDetectorConfig|body|object|true|Contains information about a detector's configuration.|
|» » AnomalyDetectorFrequency|body|object|false|none|
|» KmsKeyArn|body|string|false|The ARN of the KMS key to use to encrypt your data.|
|» Tags|body|object|false|A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the anomaly detector.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "AnomalyDetectorArn": {}
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

<h3 id="createanomalydetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAnomalyDetectorResponse](#schemacreateanomalydetectorresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMetricSet

<a id="opIdCreateMetricSet"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/CreateMetricSet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string",
    "MetricSetName": "string",
    "MetricSetDescription": "string",
    "MetricList": [
      {
        "MetricName": {},
        "AggregationFunction": {},
        "Namespace": {}
      }
    ],
    "Offset": 0,
    "TimestampColumn": {
      "ColumnName": {},
      "ColumnFormat": {}
    },
    "DimensionList": [
      "string"
    ],
    "MetricSetFrequency": "P1D",
    "MetricSource": {
      "S3SourceConfig": {
        "RoleArn": {},
        "TemplatedPathList": {},
        "HistoricalDataPathList": {},
        "FileFormatDescriptor": {
          "CsvFormatDescriptor": {
            "FileCompression": {},
            "Charset": {},
            "ContainsHeader": {},
            "Delimiter": {},
            "HeaderList": {},
            "QuoteSymbol": {}
          },
          "JsonFormatDescriptor": {
            "FileCompression": {},
            "Charset": {}
          }
        }
      },
      "AppFlowConfig": {
        "RoleArn": {},
        "FlowName": {}
      },
      "CloudWatchConfig": {
        "RoleArn": {},
        "BackTestConfiguration": {
          "RunBackTestMode": {}
        }
      },
      "RDSSourceConfig": {
        "DBInstanceIdentifier": {},
        "DatabaseHost": {},
        "DatabasePort": {},
        "SecretManagerArn": {},
        "DatabaseName": {},
        "TableName": {},
        "RoleArn": {},
        "VpcConfiguration": {
          "SubnetIdList": {},
          "SecurityGroupIdList": {}
        }
      },
      "RedshiftSourceConfig": {
        "ClusterIdentifier": {},
        "DatabaseHost": {},
        "DatabasePort": {},
        "SecretManagerArn": {},
        "DatabaseName": {},
        "TableName": {},
        "RoleArn": {},
        "VpcConfiguration": {
          "SubnetIdList": {},
          "SecurityGroupIdList": {}
        }
      },
      "AthenaSourceConfig": {
        "RoleArn": {},
        "DatabaseName": {},
        "DataCatalog": {},
        "TableName": {},
        "WorkGroupName": {},
        "S3ResultsPath": {},
        "BackTestConfiguration": {
          "RunBackTestMode": {}
        }
      }
    },
    "Timezone": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "DimensionFilterList": [
      {
        "Name": {},
        "FilterList": {}
      }
    ]
  }'
```

`POST /CreateMetricSet`

Creates a dataset.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string",
  "MetricSetName": "string",
  "MetricSetDescription": "string",
  "MetricList": [
    {
      "MetricName": {},
      "AggregationFunction": {},
      "Namespace": {}
    }
  ],
  "Offset": 0,
  "TimestampColumn": {
    "ColumnName": {},
    "ColumnFormat": {}
  },
  "DimensionList": [
    "string"
  ],
  "MetricSetFrequency": "P1D",
  "MetricSource": {
    "S3SourceConfig": {
      "RoleArn": {},
      "TemplatedPathList": {},
      "HistoricalDataPathList": {},
      "FileFormatDescriptor": {
        "CsvFormatDescriptor": {
          "FileCompression": {},
          "Charset": {},
          "ContainsHeader": {},
          "Delimiter": {},
          "HeaderList": {},
          "QuoteSymbol": {}
        },
        "JsonFormatDescriptor": {
          "FileCompression": {},
          "Charset": {}
        }
      }
    },
    "AppFlowConfig": {
      "RoleArn": {},
      "FlowName": {}
    },
    "CloudWatchConfig": {
      "RoleArn": {},
      "BackTestConfiguration": {
        "RunBackTestMode": {}
      }
    },
    "RDSSourceConfig": {
      "DBInstanceIdentifier": {},
      "DatabaseHost": {},
      "DatabasePort": {},
      "SecretManagerArn": {},
      "DatabaseName": {},
      "TableName": {},
      "RoleArn": {},
      "VpcConfiguration": {
        "SubnetIdList": {},
        "SecurityGroupIdList": {}
      }
    },
    "RedshiftSourceConfig": {
      "ClusterIdentifier": {},
      "DatabaseHost": {},
      "DatabasePort": {},
      "SecretManagerArn": {},
      "DatabaseName": {},
      "TableName": {},
      "RoleArn": {},
      "VpcConfiguration": {
        "SubnetIdList": {},
        "SecurityGroupIdList": {}
      }
    },
    "AthenaSourceConfig": {
      "RoleArn": {},
      "DatabaseName": {},
      "DataCatalog": {},
      "TableName": {},
      "WorkGroupName": {},
      "S3ResultsPath": {},
      "BackTestConfiguration": {
        "RunBackTestMode": {}
      }
    }
  },
  "Timezone": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "DimensionFilterList": [
    {
      "Name": {},
      "FilterList": {}
    }
  ]
}
```

<h3 id="createmetricset-parameters">Parameters</h3>

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
|» AnomalyDetectorArn|body|string|true|The ARN of the anomaly detector that will use the dataset.|
|» MetricSetName|body|string|true|The name of the dataset.|
|» MetricSetDescription|body|string|false|A description of the dataset you are creating.|
|» MetricList|body|[[Metric](#schemametric)]|true|A list of metrics that the dataset will contain.|
|» Offset|body|integer|false|After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.|
|» TimestampColumn|body|object|false|Contains information about the column used to track time in a source data file.|
|» » ColumnName|body|object|false|none|
|» » ColumnFormat|body|object|false|none|
|» DimensionList|body|[[ColumnName](#schemacolumnname)]|false|A list of the fields you want to treat as dimensions.|
|» MetricSetFrequency|body|string|false|The frequency with which the source data will be analyzed for anomalies.|
|» MetricSource|body|object|true|Contains information about source data used to generate metrics.|
|» » S3SourceConfig|body|[S3SourceConfig](#schemas3sourceconfig)|false|Contains information about the configuration of the S3 bucket that contains source files.|
|» » AppFlowConfig|body|object|false|none|
|» » » RoleArn|body|object|false|none|
|» » » FlowName|body|object|false|none|
|» » CloudWatchConfig|body|object|false|none|
|» » » RoleArn|body|object|false|none|
|» » » BackTestConfiguration|body|object|false|none|
|» » » » RunBackTestMode|body|object|true|none|
|» » RDSSourceConfig|body|object|false|none|
|» » » DBInstanceIdentifier|body|object|false|none|
|» » » DatabaseHost|body|object|false|none|
|» » » DatabasePort|body|object|false|none|
|» » » SecretManagerArn|body|object|false|none|
|» » » DatabaseName|body|object|false|none|
|» » » TableName|body|object|false|none|
|» » » RoleArn|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIdList|body|object|true|none|
|» » » » SecurityGroupIdList|body|object|true|none|
|» » RedshiftSourceConfig|body|object|false|none|
|» » » ClusterIdentifier|body|object|false|none|
|» » » DatabaseHost|body|object|false|none|
|» » » DatabasePort|body|object|false|none|
|» » » SecretManagerArn|body|object|false|none|
|» » » DatabaseName|body|object|false|none|
|» » » TableName|body|object|false|none|
|» » » RoleArn|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIdList|body|object|true|none|
|» » » » SecurityGroupIdList|body|object|true|none|
|» » AthenaSourceConfig|body|object|false|none|
|» » » RoleArn|body|object|false|none|
|» » » DatabaseName|body|object|false|none|
|» » » DataCatalog|body|object|false|none|
|» » » TableName|body|object|false|none|
|» » » WorkGroupName|body|object|false|none|
|» » » S3ResultsPath|body|object|false|none|
|» » » BackTestConfiguration|body|object|false|none|
|» » » » RunBackTestMode|body|object|true|none|
|» Timezone|body|string|false|The time zone in which your source data was recorded.|
|» Tags|body|object|false|A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the dataset.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» DimensionFilterList|body|[[MetricSetDimensionFilter](#schemametricsetdimensionfilter)]|false|A list of filters that specify which data is kept for anomaly detection.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» MetricSetFrequency|P1D|
|» MetricSetFrequency|PT1H|
|» MetricSetFrequency|PT10M|
|» MetricSetFrequency|PT5M|

> Example responses

> 200 Response

```json
{
  "MetricSetArn": {}
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

<h3 id="createmetricset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMetricSetResponse](#schemacreatemetricsetresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeactivateAnomalyDetector

<a id="opIdDeactivateAnomalyDetector"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/DeactivateAnomalyDetector \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string"
  }'
```

`POST /DeactivateAnomalyDetector`

Deactivates an anomaly detector.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string"
}
```

<h3 id="deactivateanomalydetector-parameters">Parameters</h3>

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
|» AnomalyDetectorArn|body|string|true|The Amazon Resource Name (ARN) of the anomaly detector.|

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

<h3 id="deactivateanomalydetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeactivateAnomalyDetectorResponse](#schemadeactivateanomalydetectorresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAlert

<a id="opIdDeleteAlert"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/DeleteAlert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AlertArn": "string"
  }'
```

`POST /DeleteAlert`

Deletes an alert.

> Body parameter

```json
{
  "AlertArn": "string"
}
```

<h3 id="deletealert-parameters">Parameters</h3>

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
|» AlertArn|body|string|true|The ARN of the alert to delete.|

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

<h3 id="deletealert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAlertResponse](#schemadeletealertresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAnomalyDetector

<a id="opIdDeleteAnomalyDetector"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/DeleteAnomalyDetector \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string"
  }'
```

`POST /DeleteAnomalyDetector`

Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string"
}
```

<h3 id="deleteanomalydetector-parameters">Parameters</h3>

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
|» AnomalyDetectorArn|body|string|true|The ARN of the detector to delete.|

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

<h3 id="deleteanomalydetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAnomalyDetectorResponse](#schemadeleteanomalydetectorresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAlert

<a id="opIdDescribeAlert"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/DescribeAlert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AlertArn": "string"
  }'
```

`POST /DescribeAlert`

<p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

> Body parameter

```json
{
  "AlertArn": "string"
}
```

<h3 id="describealert-parameters">Parameters</h3>

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
|» AlertArn|body|string|true|The ARN of the alert to describe.|

> Example responses

> 200 Response

```json
{
  "Alert": {
    "Action": {
      "SNSConfiguration": {
        "RoleArn": {},
        "SnsTopicArn": {},
        "SnsFormat": {}
      },
      "LambdaConfiguration": {
        "RoleArn": {},
        "LambdaArn": {}
      }
    },
    "AlertDescription": {},
    "AlertArn": {},
    "AnomalyDetectorArn": {},
    "AlertName": {},
    "AlertSensitivityThreshold": {},
    "AlertType": {},
    "AlertStatus": {},
    "LastModificationTime": {},
    "CreationTime": {},
    "AlertFilters": {
      "MetricList": {},
      "DimensionFilterList": {}
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

<h3 id="describealert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAlertResponse](#schemadescribealertresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAnomalyDetectionExecutions

<a id="opIdDescribeAnomalyDetectionExecutions"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/DescribeAnomalyDetectionExecutions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string",
    "Timestamp": "string",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /DescribeAnomalyDetectionExecutions`

Returns information about the status of the specified anomaly detection jobs.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string",
  "Timestamp": "string",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="describeanomalydetectionexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AnomalyDetectorArn|body|string|true|The Amazon Resource Name (ARN) of the anomaly detector.|
|» Timestamp|body|string|false|The timestamp of the anomaly detection job.|
|» MaxResults|body|integer|false|The number of items to return in the response.|
|» NextToken|body|string|false|Specify the pagination token that's returned by a previous request to retrieve the next page of results.|

> Example responses

> 200 Response

```json
{
  "ExecutionList": {},
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

<h3 id="describeanomalydetectionexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAnomalyDetectionExecutionsResponse](#schemadescribeanomalydetectionexecutionsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAnomalyDetector

<a id="opIdDescribeAnomalyDetector"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/DescribeAnomalyDetector \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string"
  }'
```

`POST /DescribeAnomalyDetector`

<p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

> Body parameter

```json
{
  "AnomalyDetectorArn": "string"
}
```

<h3 id="describeanomalydetector-parameters">Parameters</h3>

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
|» AnomalyDetectorArn|body|string|true|The ARN of the detector to describe.|

> Example responses

> 200 Response

```json
{
  "AnomalyDetectorArn": {},
  "AnomalyDetectorName": {},
  "AnomalyDetectorDescription": {},
  "AnomalyDetectorConfig": {
    "AnomalyDetectorFrequency": {}
  },
  "CreationTime": {},
  "LastModificationTime": {},
  "Status": {},
  "FailureReason": {},
  "KmsKeyArn": {},
  "FailureType": {}
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

<h3 id="describeanomalydetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAnomalyDetectorResponse](#schemadescribeanomalydetectorresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMetricSet

<a id="opIdDescribeMetricSet"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/DescribeMetricSet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MetricSetArn": "string"
  }'
```

`POST /DescribeMetricSet`

<p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

> Body parameter

```json
{
  "MetricSetArn": "string"
}
```

<h3 id="describemetricset-parameters">Parameters</h3>

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
|» MetricSetArn|body|string|true|The ARN of the dataset.|

> Example responses

> 200 Response

```json
{
  "MetricSetArn": {},
  "AnomalyDetectorArn": {},
  "MetricSetName": {},
  "MetricSetDescription": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "Offset": {},
  "MetricList": {},
  "TimestampColumn": {
    "ColumnName": {},
    "ColumnFormat": {}
  },
  "DimensionList": {},
  "MetricSetFrequency": {},
  "Timezone": {},
  "MetricSource": {
    "S3SourceConfig": {
      "RoleArn": {},
      "TemplatedPathList": {},
      "HistoricalDataPathList": {},
      "FileFormatDescriptor": {
        "CsvFormatDescriptor": {
          "FileCompression": {},
          "Charset": {},
          "ContainsHeader": {},
          "Delimiter": {},
          "HeaderList": {},
          "QuoteSymbol": {}
        },
        "JsonFormatDescriptor": {
          "FileCompression": {},
          "Charset": {}
        }
      }
    },
    "AppFlowConfig": {
      "RoleArn": {},
      "FlowName": {}
    },
    "CloudWatchConfig": {
      "RoleArn": {},
      "BackTestConfiguration": {
        "RunBackTestMode": {}
      }
    },
    "RDSSourceConfig": {
      "DBInstanceIdentifier": {},
      "DatabaseHost": {},
      "DatabasePort": {},
      "SecretManagerArn": {},
      "DatabaseName": {},
      "TableName": {},
      "RoleArn": {},
      "VpcConfiguration": {
        "SubnetIdList": {},
        "SecurityGroupIdList": {}
      }
    },
    "RedshiftSourceConfig": {
      "ClusterIdentifier": {},
      "DatabaseHost": {},
      "DatabasePort": {},
      "SecretManagerArn": {},
      "DatabaseName": {},
      "TableName": {},
      "RoleArn": {},
      "VpcConfiguration": {
        "SubnetIdList": {},
        "SecurityGroupIdList": {}
      }
    },
    "AthenaSourceConfig": {
      "RoleArn": {},
      "DatabaseName": {},
      "DataCatalog": {},
      "TableName": {},
      "WorkGroupName": {},
      "S3ResultsPath": {},
      "BackTestConfiguration": {
        "RunBackTestMode": {}
      }
    }
  },
  "DimensionFilterList": {}
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

<h3 id="describemetricset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMetricSetResponse](#schemadescribemetricsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DetectMetricSetConfig

<a id="opIdDetectMetricSetConfig"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/DetectMetricSetConfig \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string",
    "AutoDetectionMetricSource": {
      "S3SourceConfig": {
        "TemplatedPathList": {},
        "HistoricalDataPathList": {}
      }
    }
  }'
```

`POST /DetectMetricSetConfig`

Detects an Amazon S3 dataset's file format, interval, and offset.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string",
  "AutoDetectionMetricSource": {
    "S3SourceConfig": {
      "TemplatedPathList": {},
      "HistoricalDataPathList": {}
    }
  }
}
```

<h3 id="detectmetricsetconfig-parameters">Parameters</h3>

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
|» AnomalyDetectorArn|body|string|true|An anomaly detector ARN.|
|» AutoDetectionMetricSource|body|object|true|An auto detection metric source.|
|» » S3SourceConfig|body|object|false|none|
|» » » TemplatedPathList|body|object|false|none|
|» » » HistoricalDataPathList|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "DetectedMetricSetConfig": {
    "Offset": {
      "Value": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {}
      },
      "Confidence": {},
      "Message": {}
    },
    "MetricSetFrequency": {
      "Value": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {}
      },
      "Confidence": {},
      "Message": {}
    },
    "MetricSource": {
      "S3SourceConfig": {
        "FileFormatDescriptor": {
          "CsvFormatDescriptor": {
            "FileCompression": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            },
            "Charset": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            },
            "ContainsHeader": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            },
            "Delimiter": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            },
            "HeaderList": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            },
            "QuoteSymbol": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            }
          },
          "JsonFormatDescriptor": {
            "FileCompression": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            },
            "Charset": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            }
          }
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

<h3 id="detectmetricsetconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DetectMetricSetConfigResponse](#schemadetectmetricsetconfigresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAnomalyGroup

<a id="opIdGetAnomalyGroup"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/GetAnomalyGroup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyGroupId": "string",
    "AnomalyDetectorArn": "string"
  }'
```

`POST /GetAnomalyGroup`

Returns details about a group of anomalous metrics.

> Body parameter

```json
{
  "AnomalyGroupId": "string",
  "AnomalyDetectorArn": "string"
}
```

<h3 id="getanomalygroup-parameters">Parameters</h3>

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
|» AnomalyGroupId|body|string|true|The ID of the anomaly group.|
|» AnomalyDetectorArn|body|string|true|The Amazon Resource Name (ARN) of the anomaly detector.|

> Example responses

> 200 Response

```json
{
  "AnomalyGroup": {
    "StartTime": {},
    "EndTime": {},
    "AnomalyGroupId": {},
    "AnomalyGroupScore": {},
    "PrimaryMetricName": {},
    "MetricLevelImpactList": {}
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

<h3 id="getanomalygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAnomalyGroupResponse](#schemagetanomalygroupresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDataQualityMetrics

<a id="opIdGetDataQualityMetrics"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/GetDataQualityMetrics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string",
    "MetricSetArn": "string"
  }'
```

`POST /GetDataQualityMetrics`

Returns details about the requested data quality metrics.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string",
  "MetricSetArn": "string"
}
```

<h3 id="getdataqualitymetrics-parameters">Parameters</h3>

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
|» AnomalyDetectorArn|body|string|true|The Amazon Resource Name (ARN) of the anomaly detector that you want to investigate.|
|» MetricSetArn|body|string|false|The Amazon Resource Name (ARN) of a specific data quality metric set.|

> Example responses

> 200 Response

```json
{
  "AnomalyDetectorDataQualityMetricList": {}
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

<h3 id="getdataqualitymetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDataQualityMetricsResponse](#schemagetdataqualitymetricsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFeedback

<a id="opIdGetFeedback"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/GetFeedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string",
    "AnomalyGroupTimeSeriesFeedback": {
      "AnomalyGroupId": {},
      "TimeSeriesId": {}
    },
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /GetFeedback`

Get feedback for an anomaly group.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string",
  "AnomalyGroupTimeSeriesFeedback": {
    "AnomalyGroupId": {},
    "TimeSeriesId": {}
  },
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="getfeedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AnomalyDetectorArn|body|string|true|The Amazon Resource Name (ARN) of the anomaly detector.|
|» AnomalyGroupTimeSeriesFeedback|body|object|true|An anomalous metric in an anomaly group.|
|» » AnomalyGroupId|body|object|false|none|
|» » TimeSeriesId|body|object|false|none|
|» MaxResults|body|integer|false|The maximum number of results to return.|
|» NextToken|body|string|false|Specify the pagination token that's returned by a previous request to retrieve the next page of results.|

> Example responses

> 200 Response

```json
{
  "AnomalyGroupTimeSeriesFeedback": {},
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

<h3 id="getfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFeedbackResponse](#schemagetfeedbackresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSampleData

<a id="opIdGetSampleData"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/GetSampleData \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "S3SourceConfig": {
      "RoleArn": {},
      "TemplatedPathList": {},
      "HistoricalDataPathList": {},
      "FileFormatDescriptor": {
        "CsvFormatDescriptor": {
          "FileCompression": {},
          "Charset": {},
          "ContainsHeader": {},
          "Delimiter": {},
          "HeaderList": {},
          "QuoteSymbol": {}
        },
        "JsonFormatDescriptor": {
          "FileCompression": {},
          "Charset": {}
        }
      }
    }
  }'
```

`POST /GetSampleData`

Returns a selection of sample records from an Amazon S3 datasource.

> Body parameter

```json
{
  "S3SourceConfig": {
    "RoleArn": {},
    "TemplatedPathList": {},
    "HistoricalDataPathList": {},
    "FileFormatDescriptor": {
      "CsvFormatDescriptor": {
        "FileCompression": {},
        "Charset": {},
        "ContainsHeader": {},
        "Delimiter": {},
        "HeaderList": {},
        "QuoteSymbol": {}
      },
      "JsonFormatDescriptor": {
        "FileCompression": {},
        "Charset": {}
      }
    }
  }
}
```

<h3 id="getsampledata-parameters">Parameters</h3>

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
|» S3SourceConfig|body|object|false|Contains information about the source configuration in Amazon S3.|
|» » RoleArn|body|object|false|none|
|» » TemplatedPathList|body|object|false|none|
|» » HistoricalDataPathList|body|object|false|none|
|» » FileFormatDescriptor|body|[FileFormatDescriptor](#schemafileformatdescriptor)|false|Contains information about a source file's formatting.|

> Example responses

> 200 Response

```json
{
  "HeaderValues": {},
  "SampleRows": {}
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

<h3 id="getsampledata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSampleDataResponse](#schemagetsampledataresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAlerts

<a id="opIdListAlerts"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/ListAlerts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /ListAlerts`

<p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

> Body parameter

```json
{
  "AnomalyDetectorArn": "string",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listalerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AnomalyDetectorArn|body|string|false|The ARN of the alert's detector.|
|» NextToken|body|string|false|If the result of the previous request is truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.|
|» MaxResults|body|integer|false|The maximum number of results that will be displayed by the request.|

> Example responses

> 200 Response

```json
{
  "AlertSummaryList": {},
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

<h3 id="listalerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAlertsResponse](#schemalistalertsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAnomalyDetectors

<a id="opIdListAnomalyDetectors"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/ListAnomalyDetectors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /ListAnomalyDetectors`

<p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

> Body parameter

```json
{
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listanomalydetectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaxResults|body|integer|false|The maximum number of results to return.|
|» NextToken|body|string|false|If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.|

> Example responses

> 200 Response

```json
{
  "AnomalyDetectorSummaryList": {},
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

<h3 id="listanomalydetectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAnomalyDetectorsResponse](#schemalistanomalydetectorsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAnomalyGroupRelatedMetrics

<a id="opIdListAnomalyGroupRelatedMetrics"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/ListAnomalyGroupRelatedMetrics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string",
    "AnomalyGroupId": "string",
    "RelationshipTypeFilter": "CAUSE_OF_INPUT_ANOMALY_GROUP",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /ListAnomalyGroupRelatedMetrics`

Returns a list of measures that are potential causes or effects of an anomaly group.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string",
  "AnomalyGroupId": "string",
  "RelationshipTypeFilter": "CAUSE_OF_INPUT_ANOMALY_GROUP",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listanomalygrouprelatedmetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AnomalyDetectorArn|body|string|true|The Amazon Resource Name (ARN) of the anomaly detector.|
|» AnomalyGroupId|body|string|true|The ID of the anomaly group.|
|» RelationshipTypeFilter|body|string|false|Filter for potential causes (<code>CAUSE_OF_INPUT_ANOMALY_GROUP</code>) or downstream effects (<code>EFFECT_OF_INPUT_ANOMALY_GROUP</code>) of the anomaly group.|
|» MaxResults|body|integer|false|The maximum number of results to return.|
|» NextToken|body|string|false|Specify the pagination token that's returned by a previous request to retrieve the next page of results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» RelationshipTypeFilter|CAUSE_OF_INPUT_ANOMALY_GROUP|
|» RelationshipTypeFilter|EFFECT_OF_INPUT_ANOMALY_GROUP|

> Example responses

> 200 Response

```json
{
  "InterMetricImpactList": {},
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

<h3 id="listanomalygrouprelatedmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAnomalyGroupRelatedMetricsResponse](#schemalistanomalygrouprelatedmetricsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAnomalyGroupSummaries

<a id="opIdListAnomalyGroupSummaries"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/ListAnomalyGroupSummaries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string",
    "SensitivityThreshold": 0,
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /ListAnomalyGroupSummaries`

Returns a list of anomaly groups.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string",
  "SensitivityThreshold": 0,
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listanomalygroupsummaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AnomalyDetectorArn|body|string|true|The Amazon Resource Name (ARN) of the anomaly detector.|
|» SensitivityThreshold|body|integer|true|The minimum severity score for inclusion in the output.|
|» MaxResults|body|integer|false|The maximum number of results to return.|
|» NextToken|body|string|false|Specify the pagination token that's returned by a previous request to retrieve the next page of results.|

> Example responses

> 200 Response

```json
{
  "AnomalyGroupSummaryList": {},
  "AnomalyGroupStatistics": {
    "EvaluationStartDate": {},
    "TotalCount": {},
    "ItemizedMetricStatsList": {}
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listanomalygroupsummaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAnomalyGroupSummariesResponse](#schemalistanomalygroupsummariesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAnomalyGroupTimeSeries

<a id="opIdListAnomalyGroupTimeSeries"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/ListAnomalyGroupTimeSeries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string",
    "AnomalyGroupId": "string",
    "MetricName": "string",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /ListAnomalyGroupTimeSeries`

Gets a list of anomalous metrics for a measure in an anomaly group.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string",
  "AnomalyGroupId": "string",
  "MetricName": "string",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listanomalygrouptimeseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AnomalyDetectorArn|body|string|true|The Amazon Resource Name (ARN) of the anomaly detector.|
|» AnomalyGroupId|body|string|true|The ID of the anomaly group.|
|» MetricName|body|string|true|The name of the measure field.|
|» MaxResults|body|integer|false|The maximum number of results to return.|
|» NextToken|body|string|false|Specify the pagination token that's returned by a previous request to retrieve the next page of results.|

> Example responses

> 200 Response

```json
{
  "AnomalyGroupId": {},
  "MetricName": {},
  "TimestampList": {},
  "NextToken": {},
  "TimeSeriesList": {}
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

<h3 id="listanomalygrouptimeseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAnomalyGroupTimeSeriesResponse](#schemalistanomalygrouptimeseriesresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMetricSets

<a id="opIdListMetricSets"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/ListMetricSets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /ListMetricSets`

<p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>

> Body parameter

```json
{
  "AnomalyDetectorArn": "string",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listmetricsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AnomalyDetectorArn|body|string|false|The ARN of the anomaly detector containing the metrics sets to list.|
|» MaxResults|body|integer|false|The maximum number of results to return.|
|» NextToken|body|string|false|If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.|

> Example responses

> 200 Response

```json
{
  "MetricSetSummaryList": {},
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

<h3 id="listmetricsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMetricSetsResponse](#schemalistmetricsetsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.

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
  "Tags": {
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/tags/string \
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

Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.

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
|» tags|body|object|true|Tags to apply to the resource. Tag keys and values can contain letters, numbers, spaces, and the following symbols: <code>_.:/=+@-</code> |
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 204 Response

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
|204|No Content|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutFeedback

<a id="opIdPutFeedback"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/PutFeedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string",
    "AnomalyGroupTimeSeriesFeedback": {
      "AnomalyGroupId": {},
      "TimeSeriesId": {},
      "IsAnomaly": {}
    }
  }'
```

`POST /PutFeedback`

Add feedback for an anomalous metric.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string",
  "AnomalyGroupTimeSeriesFeedback": {
    "AnomalyGroupId": {},
    "TimeSeriesId": {},
    "IsAnomaly": {}
  }
}
```

<h3 id="putfeedback-parameters">Parameters</h3>

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
|» AnomalyDetectorArn|body|string|true|The Amazon Resource Name (ARN) of the anomaly detector.|
|» AnomalyGroupTimeSeriesFeedback|body|object|true|Feedback for an anomalous metric.|
|» » AnomalyGroupId|body|object|false|none|
|» » TimeSeriesId|body|object|false|none|
|» » IsAnomaly|body|object|false|none|

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

<h3 id="putfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutFeedbackResponse](#schemaputfeedbackresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://lookoutmetrics.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The resource's Amazon Resource Name (ARN).|
|tagKeys|query|[[TagKey](#schematagkey)]|true|Keys to remove from the resource's tags.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 204 Response

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
|204|No Content|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAlert

<a id="opIdUpdateAlert"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/UpdateAlert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AlertArn": "string",
    "AlertDescription": "string",
    "AlertSensitivityThreshold": 0,
    "Action": {
      "SNSConfiguration": {
        "RoleArn": {},
        "SnsTopicArn": {},
        "SnsFormat": {}
      },
      "LambdaConfiguration": {
        "RoleArn": {},
        "LambdaArn": {}
      }
    },
    "AlertFilters": {
      "MetricList": {},
      "DimensionFilterList": {}
    }
  }'
```

`POST /UpdateAlert`

Make changes to an existing alert.

> Body parameter

```json
{
  "AlertArn": "string",
  "AlertDescription": "string",
  "AlertSensitivityThreshold": 0,
  "Action": {
    "SNSConfiguration": {
      "RoleArn": {},
      "SnsTopicArn": {},
      "SnsFormat": {}
    },
    "LambdaConfiguration": {
      "RoleArn": {},
      "LambdaArn": {}
    }
  },
  "AlertFilters": {
    "MetricList": {},
    "DimensionFilterList": {}
  }
}
```

<h3 id="updatealert-parameters">Parameters</h3>

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
|» AlertArn|body|string|true|The ARN of the alert to update.|
|» AlertDescription|body|string|false|A description of the alert.|
|» AlertSensitivityThreshold|body|integer|false|An integer from 0 to 100 specifying the alert sensitivity threshold.|
|» Action|body|object|false|A configuration that specifies the action to perform when anomalies are detected.|
|» » SNSConfiguration|body|object|false|none|
|» » » RoleArn|body|object|true|none|
|» » » SnsTopicArn|body|object|true|none|
|» » » SnsFormat|body|object|false|none|
|» » LambdaConfiguration|body|object|false|none|
|» » » RoleArn|body|object|true|none|
|» » » LambdaArn|body|object|true|none|
|» AlertFilters|body|object|false|The configuration of the alert filters.|
|» » MetricList|body|object|false|none|
|» » DimensionFilterList|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "AlertArn": {}
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

<h3 id="updatealert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAlertResponse](#schemaupdatealertresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAnomalyDetector

<a id="opIdUpdateAnomalyDetector"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/UpdateAnomalyDetector \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AnomalyDetectorArn": "string",
    "KmsKeyArn": "stringstringstringst",
    "AnomalyDetectorDescription": "string",
    "AnomalyDetectorConfig": {
      "AnomalyDetectorFrequency": {}
    }
  }'
```

`POST /UpdateAnomalyDetector`

Updates a detector. After activation, you can only change a detector's ingestion delay and description.

> Body parameter

```json
{
  "AnomalyDetectorArn": "string",
  "KmsKeyArn": "stringstringstringst",
  "AnomalyDetectorDescription": "string",
  "AnomalyDetectorConfig": {
    "AnomalyDetectorFrequency": {}
  }
}
```

<h3 id="updateanomalydetector-parameters">Parameters</h3>

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
|» AnomalyDetectorArn|body|string|true|The ARN of the detector to update.|
|» KmsKeyArn|body|string|false|The Amazon Resource Name (ARN) of an AWS KMS encryption key.|
|» AnomalyDetectorDescription|body|string|false|The updated detector description.|
|» AnomalyDetectorConfig|body|object|false|Contains information about a detector's configuration.|
|» » AnomalyDetectorFrequency|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "AnomalyDetectorArn": {}
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

<h3 id="updateanomalydetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAnomalyDetectorResponse](#schemaupdateanomalydetectorresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMetricSet

<a id="opIdUpdateMetricSet"></a>

> Code samples

```bash
curl https://lookoutmetrics.us-east-1.amazonaws.com/UpdateMetricSet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MetricSetArn": "string",
    "MetricSetDescription": "string",
    "MetricList": [
      {
        "MetricName": {},
        "AggregationFunction": {},
        "Namespace": {}
      }
    ],
    "Offset": 0,
    "TimestampColumn": {
      "ColumnName": {},
      "ColumnFormat": {}
    },
    "DimensionList": [
      "string"
    ],
    "MetricSetFrequency": "P1D",
    "MetricSource": {
      "S3SourceConfig": {
        "RoleArn": {},
        "TemplatedPathList": {},
        "HistoricalDataPathList": {},
        "FileFormatDescriptor": {
          "CsvFormatDescriptor": {
            "FileCompression": {},
            "Charset": {},
            "ContainsHeader": {},
            "Delimiter": {},
            "HeaderList": {},
            "QuoteSymbol": {}
          },
          "JsonFormatDescriptor": {
            "FileCompression": {},
            "Charset": {}
          }
        }
      },
      "AppFlowConfig": {
        "RoleArn": {},
        "FlowName": {}
      },
      "CloudWatchConfig": {
        "RoleArn": {},
        "BackTestConfiguration": {
          "RunBackTestMode": {}
        }
      },
      "RDSSourceConfig": {
        "DBInstanceIdentifier": {},
        "DatabaseHost": {},
        "DatabasePort": {},
        "SecretManagerArn": {},
        "DatabaseName": {},
        "TableName": {},
        "RoleArn": {},
        "VpcConfiguration": {
          "SubnetIdList": {},
          "SecurityGroupIdList": {}
        }
      },
      "RedshiftSourceConfig": {
        "ClusterIdentifier": {},
        "DatabaseHost": {},
        "DatabasePort": {},
        "SecretManagerArn": {},
        "DatabaseName": {},
        "TableName": {},
        "RoleArn": {},
        "VpcConfiguration": {
          "SubnetIdList": {},
          "SecurityGroupIdList": {}
        }
      },
      "AthenaSourceConfig": {
        "RoleArn": {},
        "DatabaseName": {},
        "DataCatalog": {},
        "TableName": {},
        "WorkGroupName": {},
        "S3ResultsPath": {},
        "BackTestConfiguration": {
          "RunBackTestMode": {}
        }
      }
    },
    "DimensionFilterList": [
      {
        "Name": {},
        "FilterList": {}
      }
    ]
  }'
```

`POST /UpdateMetricSet`

Updates a dataset.

> Body parameter

```json
{
  "MetricSetArn": "string",
  "MetricSetDescription": "string",
  "MetricList": [
    {
      "MetricName": {},
      "AggregationFunction": {},
      "Namespace": {}
    }
  ],
  "Offset": 0,
  "TimestampColumn": {
    "ColumnName": {},
    "ColumnFormat": {}
  },
  "DimensionList": [
    "string"
  ],
  "MetricSetFrequency": "P1D",
  "MetricSource": {
    "S3SourceConfig": {
      "RoleArn": {},
      "TemplatedPathList": {},
      "HistoricalDataPathList": {},
      "FileFormatDescriptor": {
        "CsvFormatDescriptor": {
          "FileCompression": {},
          "Charset": {},
          "ContainsHeader": {},
          "Delimiter": {},
          "HeaderList": {},
          "QuoteSymbol": {}
        },
        "JsonFormatDescriptor": {
          "FileCompression": {},
          "Charset": {}
        }
      }
    },
    "AppFlowConfig": {
      "RoleArn": {},
      "FlowName": {}
    },
    "CloudWatchConfig": {
      "RoleArn": {},
      "BackTestConfiguration": {
        "RunBackTestMode": {}
      }
    },
    "RDSSourceConfig": {
      "DBInstanceIdentifier": {},
      "DatabaseHost": {},
      "DatabasePort": {},
      "SecretManagerArn": {},
      "DatabaseName": {},
      "TableName": {},
      "RoleArn": {},
      "VpcConfiguration": {
        "SubnetIdList": {},
        "SecurityGroupIdList": {}
      }
    },
    "RedshiftSourceConfig": {
      "ClusterIdentifier": {},
      "DatabaseHost": {},
      "DatabasePort": {},
      "SecretManagerArn": {},
      "DatabaseName": {},
      "TableName": {},
      "RoleArn": {},
      "VpcConfiguration": {
        "SubnetIdList": {},
        "SecurityGroupIdList": {}
      }
    },
    "AthenaSourceConfig": {
      "RoleArn": {},
      "DatabaseName": {},
      "DataCatalog": {},
      "TableName": {},
      "WorkGroupName": {},
      "S3ResultsPath": {},
      "BackTestConfiguration": {
        "RunBackTestMode": {}
      }
    }
  },
  "DimensionFilterList": [
    {
      "Name": {},
      "FilterList": {}
    }
  ]
}
```

<h3 id="updatemetricset-parameters">Parameters</h3>

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
|» MetricSetArn|body|string|true|The ARN of the dataset to update.|
|» MetricSetDescription|body|string|false|The dataset's description.|
|» MetricList|body|[[Metric](#schemametric)]|false|The metric list.|
|» Offset|body|integer|false|After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.|
|» TimestampColumn|body|object|false|Contains information about the column used to track time in a source data file.|
|» » ColumnName|body|object|false|none|
|» » ColumnFormat|body|object|false|none|
|» DimensionList|body|[[ColumnName](#schemacolumnname)]|false|The dimension list.|
|» MetricSetFrequency|body|string|false|The dataset's interval.|
|» MetricSource|body|object|false|Contains information about source data used to generate metrics.|
|» » S3SourceConfig|body|[S3SourceConfig](#schemas3sourceconfig)|false|Contains information about the configuration of the S3 bucket that contains source files.|
|» » AppFlowConfig|body|object|false|none|
|» » » RoleArn|body|object|false|none|
|» » » FlowName|body|object|false|none|
|» » CloudWatchConfig|body|object|false|none|
|» » » RoleArn|body|object|false|none|
|» » » BackTestConfiguration|body|object|false|none|
|» » » » RunBackTestMode|body|object|true|none|
|» » RDSSourceConfig|body|object|false|none|
|» » » DBInstanceIdentifier|body|object|false|none|
|» » » DatabaseHost|body|object|false|none|
|» » » DatabasePort|body|object|false|none|
|» » » SecretManagerArn|body|object|false|none|
|» » » DatabaseName|body|object|false|none|
|» » » TableName|body|object|false|none|
|» » » RoleArn|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIdList|body|object|true|none|
|» » » » SecurityGroupIdList|body|object|true|none|
|» » RedshiftSourceConfig|body|object|false|none|
|» » » ClusterIdentifier|body|object|false|none|
|» » » DatabaseHost|body|object|false|none|
|» » » DatabasePort|body|object|false|none|
|» » » SecretManagerArn|body|object|false|none|
|» » » DatabaseName|body|object|false|none|
|» » » TableName|body|object|false|none|
|» » » RoleArn|body|object|false|none|
|» » » VpcConfiguration|body|object|false|none|
|» » » » SubnetIdList|body|object|true|none|
|» » » » SecurityGroupIdList|body|object|true|none|
|» » AthenaSourceConfig|body|object|false|none|
|» » » RoleArn|body|object|false|none|
|» » » DatabaseName|body|object|false|none|
|» » » DataCatalog|body|object|false|none|
|» » » TableName|body|object|false|none|
|» » » WorkGroupName|body|object|false|none|
|» » » S3ResultsPath|body|object|false|none|
|» » » BackTestConfiguration|body|object|false|none|
|» » » » RunBackTestMode|body|object|true|none|
|» DimensionFilterList|body|[[MetricSetDimensionFilter](#schemametricsetdimensionfilter)]|false|Describes a list of filters for choosing specific dimensions and specific values. Each filter consists of the dimension and one of its values that you want to include. When multiple dimensions or values are specified, the dimensions are joined with an AND operation and the values are joined with an OR operation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» MetricSetFrequency|P1D|
|» MetricSetFrequency|PT1H|
|» MetricSetFrequency|PT10M|
|» MetricSetFrequency|PT5M|

> Example responses

> 200 Response

```json
{
  "MetricSetArn": {}
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

<h3 id="updatemetricset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMetricSetResponse](#schemaupdatemetricsetresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ActivateAnomalyDetectorResponse">ActivateAnomalyDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactivateanomalydetectorresponse"></a>
<a id="schema_ActivateAnomalyDetectorResponse"></a>
<a id="tocSactivateanomalydetectorresponse"></a>
<a id="tocsactivateanomalydetectorresponse"></a>

```json
{}
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

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

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

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_BackTestAnomalyDetectorResponse">BackTestAnomalyDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemabacktestanomalydetectorresponse"></a>
<a id="schema_BackTestAnomalyDetectorResponse"></a>
<a id="tocSbacktestanomalydetectorresponse"></a>
<a id="tocsbacktestanomalydetectorresponse"></a>

```json
{}
```

<h2 id="tocS_CreateAlertResponse">CreateAlertResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatealertresponse"></a>
<a id="schema_CreateAlertResponse"></a>
<a id="tocScreatealertresponse"></a>
<a id="tocscreatealertresponse"></a>

```json
{
  "AlertArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlertArn|object|false|none|none|

<h2 id="tocS_SNSConfiguration">SNSConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasnsconfiguration"></a>
<a id="schema_SNSConfiguration"></a>
<a id="tocSsnsconfiguration"></a>
<a id="tocssnsconfiguration"></a>

```json
{
  "RoleArn": {},
  "SnsTopicArn": {},
  "SnsFormat": {}
}
```

Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|true|none|none|
|SnsTopicArn|object|true|none|none|
|SnsFormat|object|false|none|none|

<h2 id="tocS_LambdaConfiguration">LambdaConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalambdaconfiguration"></a>
<a id="schema_LambdaConfiguration"></a>
<a id="tocSlambdaconfiguration"></a>
<a id="tocslambdaconfiguration"></a>

```json
{
  "RoleArn": {},
  "LambdaArn": {}
}
```

Contains information about a Lambda configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|true|none|none|
|LambdaArn|object|true|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_MetricNameList">MetricNameList</h2>
<!-- backwards compatibility -->
<a id="schemametricnamelist"></a>
<a id="schema_MetricNameList"></a>
<a id="tocSmetricnamelist"></a>
<a id="tocsmetricnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DimensionFilterList">DimensionFilterList</h2>
<!-- backwards compatibility -->
<a id="schemadimensionfilterlist"></a>
<a id="schema_DimensionFilterList"></a>
<a id="tocSdimensionfilterlist"></a>
<a id="tocsdimensionfilterlist"></a>

```json
[
  {
    "DimensionName": {},
    "DimensionValueList": {}
  }
]
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

<h2 id="tocS_CreateAnomalyDetectorResponse">CreateAnomalyDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateanomalydetectorresponse"></a>
<a id="schema_CreateAnomalyDetectorResponse"></a>
<a id="tocScreateanomalydetectorresponse"></a>
<a id="tocscreateanomalydetectorresponse"></a>

```json
{
  "AnomalyDetectorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|false|none|none|

<h2 id="tocS_Frequency">Frequency</h2>
<!-- backwards compatibility -->
<a id="schemafrequency"></a>
<a id="schema_Frequency"></a>
<a id="tocSfrequency"></a>
<a id="tocsfrequency"></a>

```json
"P1D"
```

<h2 id="tocS_CreateMetricSetResponse">CreateMetricSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemetricsetresponse"></a>
<a id="schema_CreateMetricSetResponse"></a>
<a id="tocScreatemetricsetresponse"></a>
<a id="tocscreatemetricsetresponse"></a>

```json
{
  "MetricSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricSetArn|object|false|none|none|

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "MetricName": {},
  "AggregationFunction": {},
  "Namespace": {}
}
```

A calculation made by contrasting a measure and a dimension from your source data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricName|object|true|none|none|
|AggregationFunction|object|true|none|none|
|Namespace|object|false|none|none|

<h2 id="tocS_ColumnName">ColumnName</h2>
<!-- backwards compatibility -->
<a id="schemacolumnname"></a>
<a id="schema_ColumnName"></a>
<a id="tocScolumnname"></a>
<a id="tocscolumnname"></a>

```json
"string"
```

<h2 id="tocS_DateTimeFormat">DateTimeFormat</h2>
<!-- backwards compatibility -->
<a id="schemadatetimeformat"></a>
<a id="schema_DateTimeFormat"></a>
<a id="tocSdatetimeformat"></a>
<a id="tocsdatetimeformat"></a>

```json
"string"
```

<h2 id="tocS_S3SourceConfig">S3SourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemas3sourceconfig"></a>
<a id="schema_S3SourceConfig"></a>
<a id="tocSs3sourceconfig"></a>
<a id="tocss3sourceconfig"></a>

```json
{
  "RoleArn": {},
  "TemplatedPathList": {},
  "HistoricalDataPathList": {},
  "FileFormatDescriptor": {
    "CsvFormatDescriptor": {
      "FileCompression": {},
      "Charset": {},
      "ContainsHeader": {},
      "Delimiter": {},
      "HeaderList": {},
      "QuoteSymbol": {}
    },
    "JsonFormatDescriptor": {
      "FileCompression": {},
      "Charset": {}
    }
  }
}
```

Contains information about the configuration of the S3 bucket that contains source files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|false|none|none|
|TemplatedPathList|object|false|none|none|
|HistoricalDataPathList|object|false|none|none|
|FileFormatDescriptor|object|false|none|none|

<h2 id="tocS_AppFlowConfig">AppFlowConfig</h2>
<!-- backwards compatibility -->
<a id="schemaappflowconfig"></a>
<a id="schema_AppFlowConfig"></a>
<a id="tocSappflowconfig"></a>
<a id="tocsappflowconfig"></a>

```json
{
  "RoleArn": {},
  "FlowName": {}
}
```

Details about an Amazon AppFlow flow datasource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|false|none|none|
|FlowName|object|false|none|none|

<h2 id="tocS_CloudWatchConfig">CloudWatchConfig</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchconfig"></a>
<a id="schema_CloudWatchConfig"></a>
<a id="tocScloudwatchconfig"></a>
<a id="tocscloudwatchconfig"></a>

```json
{
  "RoleArn": {},
  "BackTestConfiguration": {
    "RunBackTestMode": {}
  }
}
```

Details about an Amazon CloudWatch datasource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|false|none|none|
|BackTestConfiguration|object|false|none|none|

<h2 id="tocS_RDSSourceConfig">RDSSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemardssourceconfig"></a>
<a id="schema_RDSSourceConfig"></a>
<a id="tocSrdssourceconfig"></a>
<a id="tocsrdssourceconfig"></a>

```json
{
  "DBInstanceIdentifier": {},
  "DatabaseHost": {},
  "DatabasePort": {},
  "SecretManagerArn": {},
  "DatabaseName": {},
  "TableName": {},
  "RoleArn": {},
  "VpcConfiguration": {
    "SubnetIdList": {},
    "SecurityGroupIdList": {}
  }
}
```

Contains information about the Amazon Relational Database Service (RDS) configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DBInstanceIdentifier|object|false|none|none|
|DatabaseHost|object|false|none|none|
|DatabasePort|object|false|none|none|
|SecretManagerArn|object|false|none|none|
|DatabaseName|object|false|none|none|
|TableName|object|false|none|none|
|RoleArn|object|false|none|none|
|VpcConfiguration|object|false|none|none|

<h2 id="tocS_RedshiftSourceConfig">RedshiftSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftsourceconfig"></a>
<a id="schema_RedshiftSourceConfig"></a>
<a id="tocSredshiftsourceconfig"></a>
<a id="tocsredshiftsourceconfig"></a>

```json
{
  "ClusterIdentifier": {},
  "DatabaseHost": {},
  "DatabasePort": {},
  "SecretManagerArn": {},
  "DatabaseName": {},
  "TableName": {},
  "RoleArn": {},
  "VpcConfiguration": {
    "SubnetIdList": {},
    "SecurityGroupIdList": {}
  }
}
```

Provides information about the Amazon Redshift database configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterIdentifier|object|false|none|none|
|DatabaseHost|object|false|none|none|
|DatabasePort|object|false|none|none|
|SecretManagerArn|object|false|none|none|
|DatabaseName|object|false|none|none|
|TableName|object|false|none|none|
|RoleArn|object|false|none|none|
|VpcConfiguration|object|false|none|none|

<h2 id="tocS_AthenaSourceConfig">AthenaSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaathenasourceconfig"></a>
<a id="schema_AthenaSourceConfig"></a>
<a id="tocSathenasourceconfig"></a>
<a id="tocsathenasourceconfig"></a>

```json
{
  "RoleArn": {},
  "DatabaseName": {},
  "DataCatalog": {},
  "TableName": {},
  "WorkGroupName": {},
  "S3ResultsPath": {},
  "BackTestConfiguration": {
    "RunBackTestMode": {}
  }
}
```

Details about an Amazon Athena datasource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|false|none|none|
|DatabaseName|object|false|none|none|
|DataCatalog|object|false|none|none|
|TableName|object|false|none|none|
|WorkGroupName|object|false|none|none|
|S3ResultsPath|object|false|none|none|
|BackTestConfiguration|object|false|none|none|

<h2 id="tocS_MetricSetDimensionFilter">MetricSetDimensionFilter</h2>
<!-- backwards compatibility -->
<a id="schemametricsetdimensionfilter"></a>
<a id="schema_MetricSetDimensionFilter"></a>
<a id="tocSmetricsetdimensionfilter"></a>
<a id="tocsmetricsetdimensionfilter"></a>

```json
{
  "Name": {},
  "FilterList": {}
}
```

Describes a list of filters for choosing a subset of dimension values. Each filter consists of the dimension and one of its values that you want to include. When multiple dimensions or values are specified, the dimensions are joined with an AND operation and the values are joined with an OR operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|FilterList|object|false|none|none|

<h2 id="tocS_DeactivateAnomalyDetectorResponse">DeactivateAnomalyDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeactivateanomalydetectorresponse"></a>
<a id="schema_DeactivateAnomalyDetectorResponse"></a>
<a id="tocSdeactivateanomalydetectorresponse"></a>
<a id="tocsdeactivateanomalydetectorresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAlertResponse">DeleteAlertResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletealertresponse"></a>
<a id="schema_DeleteAlertResponse"></a>
<a id="tocSdeletealertresponse"></a>
<a id="tocsdeletealertresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAnomalyDetectorResponse">DeleteAnomalyDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteanomalydetectorresponse"></a>
<a id="schema_DeleteAnomalyDetectorResponse"></a>
<a id="tocSdeleteanomalydetectorresponse"></a>
<a id="tocsdeleteanomalydetectorresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeAlertResponse">DescribeAlertResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribealertresponse"></a>
<a id="schema_DescribeAlertResponse"></a>
<a id="tocSdescribealertresponse"></a>
<a id="tocsdescribealertresponse"></a>

```json
{
  "Alert": {
    "Action": {
      "SNSConfiguration": {
        "RoleArn": {},
        "SnsTopicArn": {},
        "SnsFormat": {}
      },
      "LambdaConfiguration": {
        "RoleArn": {},
        "LambdaArn": {}
      }
    },
    "AlertDescription": {},
    "AlertArn": {},
    "AnomalyDetectorArn": {},
    "AlertName": {},
    "AlertSensitivityThreshold": {},
    "AlertType": {},
    "AlertStatus": {},
    "LastModificationTime": {},
    "CreationTime": {},
    "AlertFilters": {
      "MetricList": {},
      "DimensionFilterList": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Alert|object|false|none|none|

<h2 id="tocS_DescribeAnomalyDetectionExecutionsResponse">DescribeAnomalyDetectionExecutionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeanomalydetectionexecutionsresponse"></a>
<a id="schema_DescribeAnomalyDetectionExecutionsResponse"></a>
<a id="tocSdescribeanomalydetectionexecutionsresponse"></a>
<a id="tocsdescribeanomalydetectionexecutionsresponse"></a>

```json
{
  "ExecutionList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExecutionList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAnomalyDetectorResponse">DescribeAnomalyDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeanomalydetectorresponse"></a>
<a id="schema_DescribeAnomalyDetectorResponse"></a>
<a id="tocSdescribeanomalydetectorresponse"></a>
<a id="tocsdescribeanomalydetectorresponse"></a>

```json
{
  "AnomalyDetectorArn": {},
  "AnomalyDetectorName": {},
  "AnomalyDetectorDescription": {},
  "AnomalyDetectorConfig": {
    "AnomalyDetectorFrequency": {}
  },
  "CreationTime": {},
  "LastModificationTime": {},
  "Status": {},
  "FailureReason": {},
  "KmsKeyArn": {},
  "FailureType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|false|none|none|
|AnomalyDetectorName|object|false|none|none|
|AnomalyDetectorDescription|object|false|none|none|
|AnomalyDetectorConfig|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|Status|object|false|none|none|
|FailureReason|object|false|none|none|
|KmsKeyArn|object|false|none|none|
|FailureType|object|false|none|none|

<h2 id="tocS_DescribeMetricSetResponse">DescribeMetricSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemetricsetresponse"></a>
<a id="schema_DescribeMetricSetResponse"></a>
<a id="tocSdescribemetricsetresponse"></a>
<a id="tocsdescribemetricsetresponse"></a>

```json
{
  "MetricSetArn": {},
  "AnomalyDetectorArn": {},
  "MetricSetName": {},
  "MetricSetDescription": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "Offset": {},
  "MetricList": {},
  "TimestampColumn": {
    "ColumnName": {},
    "ColumnFormat": {}
  },
  "DimensionList": {},
  "MetricSetFrequency": {},
  "Timezone": {},
  "MetricSource": {
    "S3SourceConfig": {
      "RoleArn": {},
      "TemplatedPathList": {},
      "HistoricalDataPathList": {},
      "FileFormatDescriptor": {
        "CsvFormatDescriptor": {
          "FileCompression": {},
          "Charset": {},
          "ContainsHeader": {},
          "Delimiter": {},
          "HeaderList": {},
          "QuoteSymbol": {}
        },
        "JsonFormatDescriptor": {
          "FileCompression": {},
          "Charset": {}
        }
      }
    },
    "AppFlowConfig": {
      "RoleArn": {},
      "FlowName": {}
    },
    "CloudWatchConfig": {
      "RoleArn": {},
      "BackTestConfiguration": {
        "RunBackTestMode": {}
      }
    },
    "RDSSourceConfig": {
      "DBInstanceIdentifier": {},
      "DatabaseHost": {},
      "DatabasePort": {},
      "SecretManagerArn": {},
      "DatabaseName": {},
      "TableName": {},
      "RoleArn": {},
      "VpcConfiguration": {
        "SubnetIdList": {},
        "SecurityGroupIdList": {}
      }
    },
    "RedshiftSourceConfig": {
      "ClusterIdentifier": {},
      "DatabaseHost": {},
      "DatabasePort": {},
      "SecretManagerArn": {},
      "DatabaseName": {},
      "TableName": {},
      "RoleArn": {},
      "VpcConfiguration": {
        "SubnetIdList": {},
        "SecurityGroupIdList": {}
      }
    },
    "AthenaSourceConfig": {
      "RoleArn": {},
      "DatabaseName": {},
      "DataCatalog": {},
      "TableName": {},
      "WorkGroupName": {},
      "S3ResultsPath": {},
      "BackTestConfiguration": {
        "RunBackTestMode": {}
      }
    }
  },
  "DimensionFilterList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricSetArn|object|false|none|none|
|AnomalyDetectorArn|object|false|none|none|
|MetricSetName|object|false|none|none|
|MetricSetDescription|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|Offset|object|false|none|none|
|MetricList|object|false|none|none|
|TimestampColumn|object|false|none|none|
|DimensionList|object|false|none|none|
|MetricSetFrequency|object|false|none|none|
|Timezone|object|false|none|none|
|MetricSource|object|false|none|none|
|DimensionFilterList|object|false|none|none|

<h2 id="tocS_DetectMetricSetConfigResponse">DetectMetricSetConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemadetectmetricsetconfigresponse"></a>
<a id="schema_DetectMetricSetConfigResponse"></a>
<a id="tocSdetectmetricsetconfigresponse"></a>
<a id="tocsdetectmetricsetconfigresponse"></a>

```json
{
  "DetectedMetricSetConfig": {
    "Offset": {
      "Value": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {}
      },
      "Confidence": {},
      "Message": {}
    },
    "MetricSetFrequency": {
      "Value": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {}
      },
      "Confidence": {},
      "Message": {}
    },
    "MetricSource": {
      "S3SourceConfig": {
        "FileFormatDescriptor": {
          "CsvFormatDescriptor": {
            "FileCompression": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            },
            "Charset": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            },
            "ContainsHeader": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            },
            "Delimiter": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            },
            "HeaderList": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            },
            "QuoteSymbol": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            }
          },
          "JsonFormatDescriptor": {
            "FileCompression": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            },
            "Charset": {
              "Value": {
                "S": {},
                "N": {},
                "B": {},
                "SS": {},
                "NS": {},
                "BS": {}
              },
              "Confidence": {},
              "Message": {}
            }
          }
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DetectedMetricSetConfig|object|false|none|none|

<h2 id="tocS_AutoDetectionS3SourceConfig">AutoDetectionS3SourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaautodetections3sourceconfig"></a>
<a id="schema_AutoDetectionS3SourceConfig"></a>
<a id="tocSautodetections3sourceconfig"></a>
<a id="tocsautodetections3sourceconfig"></a>

```json
{
  "TemplatedPathList": {},
  "HistoricalDataPathList": {}
}
```

An auto detection source config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplatedPathList|object|false|none|none|
|HistoricalDataPathList|object|false|none|none|

<h2 id="tocS_GetAnomalyGroupResponse">GetAnomalyGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetanomalygroupresponse"></a>
<a id="schema_GetAnomalyGroupResponse"></a>
<a id="tocSgetanomalygroupresponse"></a>
<a id="tocsgetanomalygroupresponse"></a>

```json
{
  "AnomalyGroup": {
    "StartTime": {},
    "EndTime": {},
    "AnomalyGroupId": {},
    "AnomalyGroupScore": {},
    "PrimaryMetricName": {},
    "MetricLevelImpactList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyGroup|object|false|none|none|

<h2 id="tocS_GetDataQualityMetricsResponse">GetDataQualityMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdataqualitymetricsresponse"></a>
<a id="schema_GetDataQualityMetricsResponse"></a>
<a id="tocSgetdataqualitymetricsresponse"></a>
<a id="tocsgetdataqualitymetricsresponse"></a>

```json
{
  "AnomalyDetectorDataQualityMetricList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorDataQualityMetricList|object|false|none|none|

<h2 id="tocS_GetFeedbackResponse">GetFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfeedbackresponse"></a>
<a id="schema_GetFeedbackResponse"></a>
<a id="tocSgetfeedbackresponse"></a>
<a id="tocsgetfeedbackresponse"></a>

```json
{
  "AnomalyGroupTimeSeriesFeedback": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyGroupTimeSeriesFeedback|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"string"
```

<h2 id="tocS_TimeSeriesId">TimeSeriesId</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesid"></a>
<a id="schema_TimeSeriesId"></a>
<a id="tocStimeseriesid"></a>
<a id="tocstimeseriesid"></a>

```json
"string"
```

<h2 id="tocS_GetSampleDataResponse">GetSampleDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsampledataresponse"></a>
<a id="schema_GetSampleDataResponse"></a>
<a id="tocSgetsampledataresponse"></a>
<a id="tocsgetsampledataresponse"></a>

```json
{
  "HeaderValues": {},
  "SampleRows": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HeaderValues|object|false|none|none|
|SampleRows|object|false|none|none|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_TemplatedPathList">TemplatedPathList</h2>
<!-- backwards compatibility -->
<a id="schematemplatedpathlist"></a>
<a id="schema_TemplatedPathList"></a>
<a id="tocStemplatedpathlist"></a>
<a id="tocstemplatedpathlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HistoricalDataPathList">HistoricalDataPathList</h2>
<!-- backwards compatibility -->
<a id="schemahistoricaldatapathlist"></a>
<a id="schema_HistoricalDataPathList"></a>
<a id="tocShistoricaldatapathlist"></a>
<a id="tocshistoricaldatapathlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FileFormatDescriptor">FileFormatDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemafileformatdescriptor"></a>
<a id="schema_FileFormatDescriptor"></a>
<a id="tocSfileformatdescriptor"></a>
<a id="tocsfileformatdescriptor"></a>

```json
{
  "CsvFormatDescriptor": {
    "FileCompression": {},
    "Charset": {},
    "ContainsHeader": {},
    "Delimiter": {},
    "HeaderList": {},
    "QuoteSymbol": {}
  },
  "JsonFormatDescriptor": {
    "FileCompression": {},
    "Charset": {}
  }
}
```

Contains information about a source file's formatting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CsvFormatDescriptor|object|false|none|none|
|JsonFormatDescriptor|object|false|none|none|

<h2 id="tocS_ListAlertsResponse">ListAlertsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistalertsresponse"></a>
<a id="schema_ListAlertsResponse"></a>
<a id="tocSlistalertsresponse"></a>
<a id="tocslistalertsresponse"></a>

```json
{
  "AlertSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlertSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAnomalyDetectorsResponse">ListAnomalyDetectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistanomalydetectorsresponse"></a>
<a id="schema_ListAnomalyDetectorsResponse"></a>
<a id="tocSlistanomalydetectorsresponse"></a>
<a id="tocslistanomalydetectorsresponse"></a>

```json
{
  "AnomalyDetectorSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAnomalyGroupRelatedMetricsResponse">ListAnomalyGroupRelatedMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistanomalygrouprelatedmetricsresponse"></a>
<a id="schema_ListAnomalyGroupRelatedMetricsResponse"></a>
<a id="tocSlistanomalygrouprelatedmetricsresponse"></a>
<a id="tocslistanomalygrouprelatedmetricsresponse"></a>

```json
{
  "InterMetricImpactList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InterMetricImpactList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAnomalyGroupSummariesResponse">ListAnomalyGroupSummariesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistanomalygroupsummariesresponse"></a>
<a id="schema_ListAnomalyGroupSummariesResponse"></a>
<a id="tocSlistanomalygroupsummariesresponse"></a>
<a id="tocslistanomalygroupsummariesresponse"></a>

```json
{
  "AnomalyGroupSummaryList": {},
  "AnomalyGroupStatistics": {
    "EvaluationStartDate": {},
    "TotalCount": {},
    "ItemizedMetricStatsList": {}
  },
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyGroupSummaryList|object|false|none|none|
|AnomalyGroupStatistics|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAnomalyGroupTimeSeriesResponse">ListAnomalyGroupTimeSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistanomalygrouptimeseriesresponse"></a>
<a id="schema_ListAnomalyGroupTimeSeriesResponse"></a>
<a id="tocSlistanomalygrouptimeseriesresponse"></a>
<a id="tocslistanomalygrouptimeseriesresponse"></a>

```json
{
  "AnomalyGroupId": {},
  "MetricName": {},
  "TimestampList": {},
  "NextToken": {},
  "TimeSeriesList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyGroupId|object|false|none|none|
|MetricName|object|false|none|none|
|TimestampList|object|false|none|none|
|NextToken|object|false|none|none|
|TimeSeriesList|object|false|none|none|

<h2 id="tocS_ListMetricSetsResponse">ListMetricSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmetricsetsresponse"></a>
<a id="schema_ListMetricSetsResponse"></a>
<a id="tocSlistmetricsetsresponse"></a>
<a id="tocslistmetricsetsresponse"></a>

```json
{
  "MetricSetSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricSetSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_PutFeedbackResponse">PutFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputfeedbackresponse"></a>
<a id="schema_PutFeedbackResponse"></a>
<a id="tocSputfeedbackresponse"></a>
<a id="tocsputfeedbackresponse"></a>

```json
{}
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

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

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

<h2 id="tocS_UpdateAlertResponse">UpdateAlertResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatealertresponse"></a>
<a id="schema_UpdateAlertResponse"></a>
<a id="tocSupdatealertresponse"></a>
<a id="tocsupdatealertresponse"></a>

```json
{
  "AlertArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlertArn|object|false|none|none|

<h2 id="tocS_UpdateAnomalyDetectorResponse">UpdateAnomalyDetectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateanomalydetectorresponse"></a>
<a id="schema_UpdateAnomalyDetectorResponse"></a>
<a id="tocSupdateanomalydetectorresponse"></a>
<a id="tocsupdateanomalydetectorresponse"></a>

```json
{
  "AnomalyDetectorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|false|none|none|

<h2 id="tocS_UpdateMetricSetResponse">UpdateMetricSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemetricsetresponse"></a>
<a id="schema_UpdateMetricSetResponse"></a>
<a id="tocSupdatemetricsetresponse"></a>
<a id="tocsupdatemetricsetresponse"></a>

```json
{
  "MetricSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricSetArn|object|false|none|none|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "SNSConfiguration": {
    "RoleArn": {},
    "SnsTopicArn": {},
    "SnsFormat": {}
  },
  "LambdaConfiguration": {
    "RoleArn": {},
    "LambdaArn": {}
  }
}
```

A configuration that specifies the action to perform when anomalies are detected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SNSConfiguration|object|false|none|none|
|LambdaConfiguration|object|false|none|none|

<h2 id="tocS_ActivateAnomalyDetectorRequest">ActivateAnomalyDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactivateanomalydetectorrequest"></a>
<a id="schema_ActivateAnomalyDetectorRequest"></a>
<a id="tocSactivateanomalydetectorrequest"></a>
<a id="tocsactivateanomalydetectorrequest"></a>

```json
{
  "AnomalyDetectorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|

<h2 id="tocS_AggregationFunction">AggregationFunction</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationfunction"></a>
<a id="schema_AggregationFunction"></a>
<a id="tocSaggregationfunction"></a>
<a id="tocsaggregationfunction"></a>

```json
"AVG"
```

<h2 id="tocS_AlertDescription">AlertDescription</h2>
<!-- backwards compatibility -->
<a id="schemaalertdescription"></a>
<a id="schema_AlertDescription"></a>
<a id="tocSalertdescription"></a>
<a id="tocsalertdescription"></a>

```json
"string"
```

<h2 id="tocS_AlertName">AlertName</h2>
<!-- backwards compatibility -->
<a id="schemaalertname"></a>
<a id="schema_AlertName"></a>
<a id="tocSalertname"></a>
<a id="tocsalertname"></a>

```json
"string"
```

<h2 id="tocS_SensitivityThreshold">SensitivityThreshold</h2>
<!-- backwards compatibility -->
<a id="schemasensitivitythreshold"></a>
<a id="schema_SensitivityThreshold"></a>
<a id="tocSsensitivitythreshold"></a>
<a id="tocssensitivitythreshold"></a>

```json
0
```

<h2 id="tocS_AlertType">AlertType</h2>
<!-- backwards compatibility -->
<a id="schemaalerttype"></a>
<a id="schema_AlertType"></a>
<a id="tocSalerttype"></a>
<a id="tocsalerttype"></a>

```json
"SNS"
```

<h2 id="tocS_AlertStatus">AlertStatus</h2>
<!-- backwards compatibility -->
<a id="schemaalertstatus"></a>
<a id="schema_AlertStatus"></a>
<a id="tocSalertstatus"></a>
<a id="tocsalertstatus"></a>

```json
"ACTIVE"
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

<h2 id="tocS_AlertFilters">AlertFilters</h2>
<!-- backwards compatibility -->
<a id="schemaalertfilters"></a>
<a id="schema_AlertFilters"></a>
<a id="tocSalertfilters"></a>
<a id="tocsalertfilters"></a>

```json
{
  "MetricList": {},
  "DimensionFilterList": {}
}
```

The configuration of the alert filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricList|object|false|none|none|
|DimensionFilterList|object|false|none|none|

<h2 id="tocS_Alert">Alert</h2>
<!-- backwards compatibility -->
<a id="schemaalert"></a>
<a id="schema_Alert"></a>
<a id="tocSalert"></a>
<a id="tocsalert"></a>

```json
{
  "Action": {
    "SNSConfiguration": {
      "RoleArn": {},
      "SnsTopicArn": {},
      "SnsFormat": {}
    },
    "LambdaConfiguration": {
      "RoleArn": {},
      "LambdaArn": {}
    }
  },
  "AlertDescription": {},
  "AlertArn": {},
  "AnomalyDetectorArn": {},
  "AlertName": {},
  "AlertSensitivityThreshold": {},
  "AlertType": {},
  "AlertStatus": {},
  "LastModificationTime": {},
  "CreationTime": {},
  "AlertFilters": {
    "MetricList": {},
    "DimensionFilterList": {}
  }
}
```

A configuration for Amazon SNS-integrated notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|false|none|none|
|AlertDescription|object|false|none|none|
|AlertArn|object|false|none|none|
|AnomalyDetectorArn|object|false|none|none|
|AlertName|object|false|none|none|
|AlertSensitivityThreshold|object|false|none|none|
|AlertType|object|false|none|none|
|AlertStatus|object|false|none|none|
|LastModificationTime|object|false|none|none|
|CreationTime|object|false|none|none|
|AlertFilters|object|false|none|none|

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_AlertSummary">AlertSummary</h2>
<!-- backwards compatibility -->
<a id="schemaalertsummary"></a>
<a id="schema_AlertSummary"></a>
<a id="tocSalertsummary"></a>
<a id="tocsalertsummary"></a>

```json
{
  "AlertArn": {},
  "AnomalyDetectorArn": {},
  "AlertName": {},
  "AlertSensitivityThreshold": {},
  "AlertType": {},
  "AlertStatus": {},
  "LastModificationTime": {},
  "CreationTime": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Provides a summary of an alert's configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlertArn|object|false|none|none|
|AnomalyDetectorArn|object|false|none|none|
|AlertName|object|false|none|none|
|AlertSensitivityThreshold|object|false|none|none|
|AlertType|object|false|none|none|
|AlertStatus|object|false|none|none|
|LastModificationTime|object|false|none|none|
|CreationTime|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_AlertSummaryList">AlertSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaalertsummarylist"></a>
<a id="schema_AlertSummaryList"></a>
<a id="tocSalertsummarylist"></a>
<a id="tocsalertsummarylist"></a>

```json
[
  {
    "AlertArn": {},
    "AnomalyDetectorArn": {},
    "AlertName": {},
    "AlertSensitivityThreshold": {},
    "AlertType": {},
    "AlertStatus": {},
    "LastModificationTime": {},
    "CreationTime": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_AnomalyDetectionTaskStatus">AnomalyDetectionTaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectiontaskstatus"></a>
<a id="schema_AnomalyDetectionTaskStatus"></a>
<a id="tocSanomalydetectiontaskstatus"></a>
<a id="tocsanomalydetectiontaskstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_AnomalyDetectionTaskStatusMessage">AnomalyDetectionTaskStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectiontaskstatusmessage"></a>
<a id="schema_AnomalyDetectionTaskStatusMessage"></a>
<a id="tocSanomalydetectiontaskstatusmessage"></a>
<a id="tocsanomalydetectiontaskstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_AnomalyDetectorConfig">AnomalyDetectorConfig</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectorconfig"></a>
<a id="schema_AnomalyDetectorConfig"></a>
<a id="tocSanomalydetectorconfig"></a>
<a id="tocsanomalydetectorconfig"></a>

```json
{
  "AnomalyDetectorFrequency": {}
}
```

Contains information about a detector's configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorFrequency|object|false|none|none|

<h2 id="tocS_AnomalyDetectorConfigSummary">AnomalyDetectorConfigSummary</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectorconfigsummary"></a>
<a id="schema_AnomalyDetectorConfigSummary"></a>
<a id="tocSanomalydetectorconfigsummary"></a>
<a id="tocsanomalydetectorconfigsummary"></a>

```json
{
  "AnomalyDetectorFrequency": {}
}
```

Contains information about a detector's configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorFrequency|object|false|none|none|

<h2 id="tocS_MetricSetDataQualityMetricList">MetricSetDataQualityMetricList</h2>
<!-- backwards compatibility -->
<a id="schemametricsetdataqualitymetriclist"></a>
<a id="schema_MetricSetDataQualityMetricList"></a>
<a id="tocSmetricsetdataqualitymetriclist"></a>
<a id="tocsmetricsetdataqualitymetriclist"></a>

```json
[
  {
    "MetricSetArn": {},
    "DataQualityMetricList": {}
  }
]
```

<h2 id="tocS_AnomalyDetectorDataQualityMetric">AnomalyDetectorDataQualityMetric</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectordataqualitymetric"></a>
<a id="schema_AnomalyDetectorDataQualityMetric"></a>
<a id="tocSanomalydetectordataqualitymetric"></a>
<a id="tocsanomalydetectordataqualitymetric"></a>

```json
{
  "StartTimestamp": {},
  "MetricSetDataQualityMetricList": {}
}
```

Aggregated details about the data quality metrics collected for the <code>AnomalyDetectorArn</code> provided in the <a>GetDataQualityMetrics</a> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTimestamp|object|false|none|none|
|MetricSetDataQualityMetricList|object|false|none|none|

<h2 id="tocS_AnomalyDetectorDataQualityMetricList">AnomalyDetectorDataQualityMetricList</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectordataqualitymetriclist"></a>
<a id="schema_AnomalyDetectorDataQualityMetricList"></a>
<a id="tocSanomalydetectordataqualitymetriclist"></a>
<a id="tocsanomalydetectordataqualitymetriclist"></a>

```json
[
  {
    "StartTimestamp": {},
    "MetricSetDataQualityMetricList": {}
  }
]
```

<h2 id="tocS_AnomalyDetectorDescription">AnomalyDetectorDescription</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectordescription"></a>
<a id="schema_AnomalyDetectorDescription"></a>
<a id="tocSanomalydetectordescription"></a>
<a id="tocsanomalydetectordescription"></a>

```json
"string"
```

<h2 id="tocS_AnomalyDetectorFailureType">AnomalyDetectorFailureType</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectorfailuretype"></a>
<a id="schema_AnomalyDetectorFailureType"></a>
<a id="tocSanomalydetectorfailuretype"></a>
<a id="tocsanomalydetectorfailuretype"></a>

```json
"ACTIVATION_FAILURE"
```

<h2 id="tocS_AnomalyDetectorName">AnomalyDetectorName</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectorname"></a>
<a id="schema_AnomalyDetectorName"></a>
<a id="tocSanomalydetectorname"></a>
<a id="tocsanomalydetectorname"></a>

```json
"string"
```

<h2 id="tocS_AnomalyDetectorStatus">AnomalyDetectorStatus</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectorstatus"></a>
<a id="schema_AnomalyDetectorStatus"></a>
<a id="tocSanomalydetectorstatus"></a>
<a id="tocsanomalydetectorstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_AnomalyDetectorSummary">AnomalyDetectorSummary</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectorsummary"></a>
<a id="schema_AnomalyDetectorSummary"></a>
<a id="tocSanomalydetectorsummary"></a>
<a id="tocsanomalydetectorsummary"></a>

```json
{
  "AnomalyDetectorArn": {},
  "AnomalyDetectorName": {},
  "AnomalyDetectorDescription": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "Status": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about an an anomaly detector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|false|none|none|
|AnomalyDetectorName|object|false|none|none|
|AnomalyDetectorDescription|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|Status|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_AnomalyDetectorSummaryList">AnomalyDetectorSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectorsummarylist"></a>
<a id="schema_AnomalyDetectorSummaryList"></a>
<a id="tocSanomalydetectorsummarylist"></a>
<a id="tocsanomalydetectorsummarylist"></a>

```json
[
  {
    "AnomalyDetectorArn": {},
    "AnomalyDetectorName": {},
    "AnomalyDetectorDescription": {},
    "CreationTime": {},
    "LastModificationTime": {},
    "Status": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_TimestampString">TimestampString</h2>
<!-- backwards compatibility -->
<a id="schematimestampstring"></a>
<a id="schema_TimestampString"></a>
<a id="tocStimestampstring"></a>
<a id="tocstimestampstring"></a>

```json
"string"
```

<h2 id="tocS_Score">Score</h2>
<!-- backwards compatibility -->
<a id="schemascore"></a>
<a id="schema_Score"></a>
<a id="tocSscore"></a>
<a id="tocsscore"></a>

```json
0
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

<h2 id="tocS_MetricLevelImpactList">MetricLevelImpactList</h2>
<!-- backwards compatibility -->
<a id="schemametriclevelimpactlist"></a>
<a id="schema_MetricLevelImpactList"></a>
<a id="tocSmetriclevelimpactlist"></a>
<a id="tocsmetriclevelimpactlist"></a>

```json
[
  {
    "MetricName": {},
    "NumTimeSeries": {},
    "ContributionMatrix": {
      "DimensionContributionList": {}
    }
  }
]
```

<h2 id="tocS_AnomalyGroup">AnomalyGroup</h2>
<!-- backwards compatibility -->
<a id="schemaanomalygroup"></a>
<a id="schema_AnomalyGroup"></a>
<a id="tocSanomalygroup"></a>
<a id="tocsanomalygroup"></a>

```json
{
  "StartTime": {},
  "EndTime": {},
  "AnomalyGroupId": {},
  "AnomalyGroupScore": {},
  "PrimaryMetricName": {},
  "MetricLevelImpactList": {}
}
```

A group of anomalous metrics

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|AnomalyGroupId|object|false|none|none|
|AnomalyGroupScore|object|false|none|none|
|PrimaryMetricName|object|false|none|none|
|MetricLevelImpactList|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_ItemizedMetricStatsList">ItemizedMetricStatsList</h2>
<!-- backwards compatibility -->
<a id="schemaitemizedmetricstatslist"></a>
<a id="schema_ItemizedMetricStatsList"></a>
<a id="tocSitemizedmetricstatslist"></a>
<a id="tocsitemizedmetricstatslist"></a>

```json
[
  {
    "MetricName": {},
    "OccurrenceCount": {}
  }
]
```

<h2 id="tocS_AnomalyGroupStatistics">AnomalyGroupStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaanomalygroupstatistics"></a>
<a id="schema_AnomalyGroupStatistics"></a>
<a id="tocSanomalygroupstatistics"></a>
<a id="tocsanomalygroupstatistics"></a>

```json
{
  "EvaluationStartDate": {},
  "TotalCount": {},
  "ItemizedMetricStatsList": {}
}
```

Aggregated statistics for a group of anomalous metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationStartDate|object|false|none|none|
|TotalCount|object|false|none|none|
|ItemizedMetricStatsList|object|false|none|none|

<h2 id="tocS_AnomalyGroupSummary">AnomalyGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemaanomalygroupsummary"></a>
<a id="schema_AnomalyGroupSummary"></a>
<a id="tocSanomalygroupsummary"></a>
<a id="tocsanomalygroupsummary"></a>

```json
{
  "StartTime": {},
  "EndTime": {},
  "AnomalyGroupId": {},
  "AnomalyGroupScore": {},
  "PrimaryMetricName": {}
}
```

Details about a group of anomalous metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|AnomalyGroupId|object|false|none|none|
|AnomalyGroupScore|object|false|none|none|
|PrimaryMetricName|object|false|none|none|

<h2 id="tocS_AnomalyGroupSummaryList">AnomalyGroupSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaanomalygroupsummarylist"></a>
<a id="schema_AnomalyGroupSummaryList"></a>
<a id="tocSanomalygroupsummarylist"></a>
<a id="tocsanomalygroupsummarylist"></a>

```json
[
  {
    "StartTime": {},
    "EndTime": {},
    "AnomalyGroupId": {},
    "AnomalyGroupScore": {},
    "PrimaryMetricName": {}
  }
]
```

<h2 id="tocS_AnomalyGroupTimeSeries">AnomalyGroupTimeSeries</h2>
<!-- backwards compatibility -->
<a id="schemaanomalygrouptimeseries"></a>
<a id="schema_AnomalyGroupTimeSeries"></a>
<a id="tocSanomalygrouptimeseries"></a>
<a id="tocsanomalygrouptimeseries"></a>

```json
{
  "AnomalyGroupId": {},
  "TimeSeriesId": {}
}
```

An anomalous metric in an anomaly group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyGroupId|object|true|none|none|
|TimeSeriesId|object|false|none|none|

<h2 id="tocS_AnomalyGroupTimeSeriesFeedback">AnomalyGroupTimeSeriesFeedback</h2>
<!-- backwards compatibility -->
<a id="schemaanomalygrouptimeseriesfeedback"></a>
<a id="schema_AnomalyGroupTimeSeriesFeedback"></a>
<a id="tocSanomalygrouptimeseriesfeedback"></a>
<a id="tocsanomalygrouptimeseriesfeedback"></a>

```json
{
  "AnomalyGroupId": {},
  "TimeSeriesId": {},
  "IsAnomaly": {}
}
```

Feedback for an anomalous metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyGroupId|object|true|none|none|
|TimeSeriesId|object|true|none|none|
|IsAnomaly|object|true|none|none|

<h2 id="tocS_FlowName">FlowName</h2>
<!-- backwards compatibility -->
<a id="schemaflowname"></a>
<a id="schema_FlowName"></a>
<a id="tocSflowname"></a>
<a id="tocsflowname"></a>

```json
"string"
```

<h2 id="tocS_AthenaDataCatalog">AthenaDataCatalog</h2>
<!-- backwards compatibility -->
<a id="schemaathenadatacatalog"></a>
<a id="schema_AthenaDataCatalog"></a>
<a id="tocSathenadatacatalog"></a>
<a id="tocsathenadatacatalog"></a>

```json
"string"
```

<h2 id="tocS_AthenaDatabaseName">AthenaDatabaseName</h2>
<!-- backwards compatibility -->
<a id="schemaathenadatabasename"></a>
<a id="schema_AthenaDatabaseName"></a>
<a id="tocSathenadatabasename"></a>
<a id="tocsathenadatabasename"></a>

```json
"string"
```

<h2 id="tocS_AthenaS3ResultsPath">AthenaS3ResultsPath</h2>
<!-- backwards compatibility -->
<a id="schemaathenas3resultspath"></a>
<a id="schema_AthenaS3ResultsPath"></a>
<a id="tocSathenas3resultspath"></a>
<a id="tocsathenas3resultspath"></a>

```json
"string"
```

<h2 id="tocS_AthenaTableName">AthenaTableName</h2>
<!-- backwards compatibility -->
<a id="schemaathenatablename"></a>
<a id="schema_AthenaTableName"></a>
<a id="tocSathenatablename"></a>
<a id="tocsathenatablename"></a>

```json
"string"
```

<h2 id="tocS_AthenaWorkGroupName">AthenaWorkGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaathenaworkgroupname"></a>
<a id="schema_AthenaWorkGroupName"></a>
<a id="tocSathenaworkgroupname"></a>
<a id="tocsathenaworkgroupname"></a>

```json
"string"
```

<h2 id="tocS_BackTestConfiguration">BackTestConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemabacktestconfiguration"></a>
<a id="schema_BackTestConfiguration"></a>
<a id="tocSbacktestconfiguration"></a>
<a id="tocsbacktestconfiguration"></a>

```json
{
  "RunBackTestMode": {}
}
```

Settings for backtest mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RunBackTestMode|object|true|none|none|

<h2 id="tocS_StringAttributeValue">StringAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemastringattributevalue"></a>
<a id="schema_StringAttributeValue"></a>
<a id="tocSstringattributevalue"></a>
<a id="tocsstringattributevalue"></a>

```json
"string"
```

<h2 id="tocS_NumberAttributeValue">NumberAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemanumberattributevalue"></a>
<a id="schema_NumberAttributeValue"></a>
<a id="tocSnumberattributevalue"></a>
<a id="tocsnumberattributevalue"></a>

```json
"string"
```

<h2 id="tocS_BinaryAttributeValue">BinaryAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemabinaryattributevalue"></a>
<a id="schema_BinaryAttributeValue"></a>
<a id="tocSbinaryattributevalue"></a>
<a id="tocsbinaryattributevalue"></a>

```json
"string"
```

<h2 id="tocS_StringListAttributeValue">StringListAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemastringlistattributevalue"></a>
<a id="schema_StringListAttributeValue"></a>
<a id="tocSstringlistattributevalue"></a>
<a id="tocsstringlistattributevalue"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NumberListAttributeValue">NumberListAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemanumberlistattributevalue"></a>
<a id="schema_NumberListAttributeValue"></a>
<a id="tocSnumberlistattributevalue"></a>
<a id="tocsnumberlistattributevalue"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BinaryListAttributeValue">BinaryListAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemabinarylistattributevalue"></a>
<a id="schema_BinaryListAttributeValue"></a>
<a id="tocSbinarylistattributevalue"></a>
<a id="tocsbinarylistattributevalue"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
{
  "S": {},
  "N": {},
  "B": {},
  "SS": {},
  "NS": {},
  "BS": {}
}
```

An attribute value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S|object|false|none|none|
|N|object|false|none|none|
|B|object|false|none|none|
|SS|object|false|none|none|
|NS|object|false|none|none|
|BS|object|false|none|none|

<h2 id="tocS_AutoDetectionMetricSource">AutoDetectionMetricSource</h2>
<!-- backwards compatibility -->
<a id="schemaautodetectionmetricsource"></a>
<a id="schema_AutoDetectionMetricSource"></a>
<a id="tocSautodetectionmetricsource"></a>
<a id="tocsautodetectionmetricsource"></a>

```json
{
  "S3SourceConfig": {
    "TemplatedPathList": {},
    "HistoricalDataPathList": {}
  }
}
```

An auto detection metric source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3SourceConfig|object|false|none|none|

<h2 id="tocS_BackTestAnomalyDetectorRequest">BackTestAnomalyDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemabacktestanomalydetectorrequest"></a>
<a id="schema_BackTestAnomalyDetectorRequest"></a>
<a id="tocSbacktestanomalydetectorrequest"></a>
<a id="tocsbacktestanomalydetectorrequest"></a>

```json
{
  "AnomalyDetectorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|

<h2 id="tocS_CSVFileCompression">CSVFileCompression</h2>
<!-- backwards compatibility -->
<a id="schemacsvfilecompression"></a>
<a id="schema_CSVFileCompression"></a>
<a id="tocScsvfilecompression"></a>
<a id="tocscsvfilecompression"></a>

```json
"NONE"
```

<h2 id="tocS_Charset">Charset</h2>
<!-- backwards compatibility -->
<a id="schemacharset"></a>
<a id="schema_Charset"></a>
<a id="tocScharset"></a>
<a id="tocscharset"></a>

```json
"string"
```

<h2 id="tocS_Confidence">Confidence</h2>
<!-- backwards compatibility -->
<a id="schemaconfidence"></a>
<a id="schema_Confidence"></a>
<a id="tocSconfidence"></a>
<a id="tocsconfidence"></a>

```json
"HIGH"
```

<h2 id="tocS_DimensionContributionList">DimensionContributionList</h2>
<!-- backwards compatibility -->
<a id="schemadimensioncontributionlist"></a>
<a id="schema_DimensionContributionList"></a>
<a id="tocSdimensioncontributionlist"></a>
<a id="tocsdimensioncontributionlist"></a>

```json
[
  {
    "DimensionName": {},
    "DimensionValueContributionList": {}
  }
]
```

<h2 id="tocS_ContributionMatrix">ContributionMatrix</h2>
<!-- backwards compatibility -->
<a id="schemacontributionmatrix"></a>
<a id="schema_ContributionMatrix"></a>
<a id="tocScontributionmatrix"></a>
<a id="tocscontributionmatrix"></a>

```json
{
  "DimensionContributionList": {}
}
```

Details about dimensions that contributed to an anomaly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DimensionContributionList|object|false|none|none|

<h2 id="tocS_CreateAlertRequest">CreateAlertRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatealertrequest"></a>
<a id="schema_CreateAlertRequest"></a>
<a id="tocScreatealertrequest"></a>
<a id="tocscreatealertrequest"></a>

```json
{
  "AlertName": {},
  "AlertSensitivityThreshold": {},
  "AlertDescription": {},
  "AnomalyDetectorArn": {},
  "Action": {
    "SNSConfiguration": {
      "RoleArn": {},
      "SnsTopicArn": {},
      "SnsFormat": {}
    },
    "LambdaConfiguration": {
      "RoleArn": {},
      "LambdaArn": {}
    }
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "AlertFilters": {
    "MetricList": {},
    "DimensionFilterList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlertName|object|true|none|none|
|AlertSensitivityThreshold|object|false|none|none|
|AlertDescription|object|false|none|none|
|AnomalyDetectorArn|object|true|none|none|
|Action|object|true|none|none|
|Tags|object|false|none|none|
|AlertFilters|object|false|none|none|

<h2 id="tocS_KmsKeyArn">KmsKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarn"></a>
<a id="schema_KmsKeyArn"></a>
<a id="tocSkmskeyarn"></a>
<a id="tocskmskeyarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_CreateAnomalyDetectorRequest">CreateAnomalyDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateanomalydetectorrequest"></a>
<a id="schema_CreateAnomalyDetectorRequest"></a>
<a id="tocScreateanomalydetectorrequest"></a>
<a id="tocscreateanomalydetectorrequest"></a>

```json
{
  "AnomalyDetectorName": {},
  "AnomalyDetectorDescription": {},
  "AnomalyDetectorConfig": {
    "AnomalyDetectorFrequency": {}
  },
  "KmsKeyArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorName|object|true|none|none|
|AnomalyDetectorDescription|object|false|none|none|
|AnomalyDetectorConfig|object|true|none|none|
|KmsKeyArn|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_MetricSetName">MetricSetName</h2>
<!-- backwards compatibility -->
<a id="schemametricsetname"></a>
<a id="schema_MetricSetName"></a>
<a id="tocSmetricsetname"></a>
<a id="tocsmetricsetname"></a>

```json
"string"
```

<h2 id="tocS_MetricSetDescription">MetricSetDescription</h2>
<!-- backwards compatibility -->
<a id="schemametricsetdescription"></a>
<a id="schema_MetricSetDescription"></a>
<a id="tocSmetricsetdescription"></a>
<a id="tocsmetricsetdescription"></a>

```json
"string"
```

<h2 id="tocS_MetricList">MetricList</h2>
<!-- backwards compatibility -->
<a id="schemametriclist"></a>
<a id="schema_MetricList"></a>
<a id="tocSmetriclist"></a>
<a id="tocsmetriclist"></a>

```json
[
  {
    "MetricName": {},
    "AggregationFunction": {},
    "Namespace": {}
  }
]
```

<h2 id="tocS_Offset">Offset</h2>
<!-- backwards compatibility -->
<a id="schemaoffset"></a>
<a id="schema_Offset"></a>
<a id="tocSoffset"></a>
<a id="tocsoffset"></a>

```json
0
```

<h2 id="tocS_TimestampColumn">TimestampColumn</h2>
<!-- backwards compatibility -->
<a id="schematimestampcolumn"></a>
<a id="schema_TimestampColumn"></a>
<a id="tocStimestampcolumn"></a>
<a id="tocstimestampcolumn"></a>

```json
{
  "ColumnName": {},
  "ColumnFormat": {}
}
```

Contains information about the column used to track time in a source data file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ColumnName|object|false|none|none|
|ColumnFormat|object|false|none|none|

<h2 id="tocS_DimensionList">DimensionList</h2>
<!-- backwards compatibility -->
<a id="schemadimensionlist"></a>
<a id="schema_DimensionList"></a>
<a id="tocSdimensionlist"></a>
<a id="tocsdimensionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MetricSource">MetricSource</h2>
<!-- backwards compatibility -->
<a id="schemametricsource"></a>
<a id="schema_MetricSource"></a>
<a id="tocSmetricsource"></a>
<a id="tocsmetricsource"></a>

```json
{
  "S3SourceConfig": {
    "RoleArn": {},
    "TemplatedPathList": {},
    "HistoricalDataPathList": {},
    "FileFormatDescriptor": {
      "CsvFormatDescriptor": {
        "FileCompression": {},
        "Charset": {},
        "ContainsHeader": {},
        "Delimiter": {},
        "HeaderList": {},
        "QuoteSymbol": {}
      },
      "JsonFormatDescriptor": {
        "FileCompression": {},
        "Charset": {}
      }
    }
  },
  "AppFlowConfig": {
    "RoleArn": {},
    "FlowName": {}
  },
  "CloudWatchConfig": {
    "RoleArn": {},
    "BackTestConfiguration": {
      "RunBackTestMode": {}
    }
  },
  "RDSSourceConfig": {
    "DBInstanceIdentifier": {},
    "DatabaseHost": {},
    "DatabasePort": {},
    "SecretManagerArn": {},
    "DatabaseName": {},
    "TableName": {},
    "RoleArn": {},
    "VpcConfiguration": {
      "SubnetIdList": {},
      "SecurityGroupIdList": {}
    }
  },
  "RedshiftSourceConfig": {
    "ClusterIdentifier": {},
    "DatabaseHost": {},
    "DatabasePort": {},
    "SecretManagerArn": {},
    "DatabaseName": {},
    "TableName": {},
    "RoleArn": {},
    "VpcConfiguration": {
      "SubnetIdList": {},
      "SecurityGroupIdList": {}
    }
  },
  "AthenaSourceConfig": {
    "RoleArn": {},
    "DatabaseName": {},
    "DataCatalog": {},
    "TableName": {},
    "WorkGroupName": {},
    "S3ResultsPath": {},
    "BackTestConfiguration": {
      "RunBackTestMode": {}
    }
  }
}
```

Contains information about source data used to generate metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3SourceConfig|[S3SourceConfig](#schemas3sourceconfig)|false|none|Contains information about the configuration of the S3 bucket that contains source files.|
|AppFlowConfig|object|false|none|none|
|CloudWatchConfig|object|false|none|none|
|RDSSourceConfig|object|false|none|none|
|RedshiftSourceConfig|object|false|none|none|
|AthenaSourceConfig|object|false|none|none|

<h2 id="tocS_Timezone">Timezone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_Timezone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
"string"
```

<h2 id="tocS_MetricSetDimensionFilterList">MetricSetDimensionFilterList</h2>
<!-- backwards compatibility -->
<a id="schemametricsetdimensionfilterlist"></a>
<a id="schema_MetricSetDimensionFilterList"></a>
<a id="tocSmetricsetdimensionfilterlist"></a>
<a id="tocsmetricsetdimensionfilterlist"></a>

```json
[
  {
    "Name": {},
    "FilterList": {}
  }
]
```

<h2 id="tocS_CreateMetricSetRequest">CreateMetricSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemetricsetrequest"></a>
<a id="schema_CreateMetricSetRequest"></a>
<a id="tocScreatemetricsetrequest"></a>
<a id="tocscreatemetricsetrequest"></a>

```json
{
  "AnomalyDetectorArn": {},
  "MetricSetName": {},
  "MetricSetDescription": {},
  "MetricList": {},
  "Offset": {},
  "TimestampColumn": {
    "ColumnName": {},
    "ColumnFormat": {}
  },
  "DimensionList": {},
  "MetricSetFrequency": {},
  "MetricSource": {
    "S3SourceConfig": {
      "RoleArn": {},
      "TemplatedPathList": {},
      "HistoricalDataPathList": {},
      "FileFormatDescriptor": {
        "CsvFormatDescriptor": {
          "FileCompression": {},
          "Charset": {},
          "ContainsHeader": {},
          "Delimiter": {},
          "HeaderList": {},
          "QuoteSymbol": {}
        },
        "JsonFormatDescriptor": {
          "FileCompression": {},
          "Charset": {}
        }
      }
    },
    "AppFlowConfig": {
      "RoleArn": {},
      "FlowName": {}
    },
    "CloudWatchConfig": {
      "RoleArn": {},
      "BackTestConfiguration": {
        "RunBackTestMode": {}
      }
    },
    "RDSSourceConfig": {
      "DBInstanceIdentifier": {},
      "DatabaseHost": {},
      "DatabasePort": {},
      "SecretManagerArn": {},
      "DatabaseName": {},
      "TableName": {},
      "RoleArn": {},
      "VpcConfiguration": {
        "SubnetIdList": {},
        "SecurityGroupIdList": {}
      }
    },
    "RedshiftSourceConfig": {
      "ClusterIdentifier": {},
      "DatabaseHost": {},
      "DatabasePort": {},
      "SecretManagerArn": {},
      "DatabaseName": {},
      "TableName": {},
      "RoleArn": {},
      "VpcConfiguration": {
        "SubnetIdList": {},
        "SecurityGroupIdList": {}
      }
    },
    "AthenaSourceConfig": {
      "RoleArn": {},
      "DatabaseName": {},
      "DataCatalog": {},
      "TableName": {},
      "WorkGroupName": {},
      "S3ResultsPath": {},
      "BackTestConfiguration": {
        "RunBackTestMode": {}
      }
    }
  },
  "Timezone": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "DimensionFilterList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|
|MetricSetName|object|true|none|none|
|MetricSetDescription|object|false|none|none|
|MetricList|object|true|none|none|
|Offset|object|false|none|none|
|TimestampColumn|object|false|none|none|
|DimensionList|object|false|none|none|
|MetricSetFrequency|object|false|none|none|
|MetricSource|object|true|none|none|
|Timezone|object|false|none|none|
|Tags|object|false|none|none|
|DimensionFilterList|object|false|none|none|

<h2 id="tocS_Delimiter">Delimiter</h2>
<!-- backwards compatibility -->
<a id="schemadelimiter"></a>
<a id="schema_Delimiter"></a>
<a id="tocSdelimiter"></a>
<a id="tocsdelimiter"></a>

```json
"s"
```

<h2 id="tocS_HeaderList">HeaderList</h2>
<!-- backwards compatibility -->
<a id="schemaheaderlist"></a>
<a id="schema_HeaderList"></a>
<a id="tocSheaderlist"></a>
<a id="tocsheaderlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_QuoteSymbol">QuoteSymbol</h2>
<!-- backwards compatibility -->
<a id="schemaquotesymbol"></a>
<a id="schema_QuoteSymbol"></a>
<a id="tocSquotesymbol"></a>
<a id="tocsquotesymbol"></a>

```json
"s"
```

<h2 id="tocS_CsvFormatDescriptor">CsvFormatDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemacsvformatdescriptor"></a>
<a id="schema_CsvFormatDescriptor"></a>
<a id="tocScsvformatdescriptor"></a>
<a id="tocscsvformatdescriptor"></a>

```json
{
  "FileCompression": {},
  "Charset": {},
  "ContainsHeader": {},
  "Delimiter": {},
  "HeaderList": {},
  "QuoteSymbol": {}
}
```

Contains information about how a source CSV data file should be analyzed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileCompression|object|false|none|none|
|Charset|object|false|none|none|
|ContainsHeader|object|false|none|none|
|Delimiter|object|false|none|none|
|HeaderList|object|false|none|none|
|QuoteSymbol|object|false|none|none|

<h2 id="tocS_DataItem">DataItem</h2>
<!-- backwards compatibility -->
<a id="schemadataitem"></a>
<a id="schema_DataItem"></a>
<a id="tocSdataitem"></a>
<a id="tocsdataitem"></a>

```json
"string"
```

<h2 id="tocS_DataQualityMetricType">DataQualityMetricType</h2>
<!-- backwards compatibility -->
<a id="schemadataqualitymetrictype"></a>
<a id="schema_DataQualityMetricType"></a>
<a id="tocSdataqualitymetrictype"></a>
<a id="tocsdataqualitymetrictype"></a>

```json
"COLUMN_COMPLETENESS"
```

<h2 id="tocS_DataQualityMetricDescription">DataQualityMetricDescription</h2>
<!-- backwards compatibility -->
<a id="schemadataqualitymetricdescription"></a>
<a id="schema_DataQualityMetricDescription"></a>
<a id="tocSdataqualitymetricdescription"></a>
<a id="tocsdataqualitymetricdescription"></a>

```json
"string"
```

<h2 id="tocS_RelatedColumnName">RelatedColumnName</h2>
<!-- backwards compatibility -->
<a id="schemarelatedcolumnname"></a>
<a id="schema_RelatedColumnName"></a>
<a id="tocSrelatedcolumnname"></a>
<a id="tocsrelatedcolumnname"></a>

```json
"string"
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

<h2 id="tocS_DataQualityMetric">DataQualityMetric</h2>
<!-- backwards compatibility -->
<a id="schemadataqualitymetric"></a>
<a id="schema_DataQualityMetric"></a>
<a id="tocSdataqualitymetric"></a>
<a id="tocsdataqualitymetric"></a>

```json
{
  "MetricType": {},
  "MetricDescription": {},
  "RelatedColumnName": {},
  "MetricValue": {}
}
```

An array that describes a data quality metric. Each <code>DataQualityMetric</code> object contains the data quality metric name, its value, a description of the metric, and the affected column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricType|object|false|none|none|
|MetricDescription|object|false|none|none|
|RelatedColumnName|object|false|none|none|
|MetricValue|object|false|none|none|

<h2 id="tocS_DataQualityMetricList">DataQualityMetricList</h2>
<!-- backwards compatibility -->
<a id="schemadataqualitymetriclist"></a>
<a id="schema_DataQualityMetricList"></a>
<a id="tocSdataqualitymetriclist"></a>
<a id="tocsdataqualitymetriclist"></a>

```json
[
  {
    "MetricType": {},
    "MetricDescription": {},
    "RelatedColumnName": {},
    "MetricValue": {}
  }
]
```

<h2 id="tocS_DatabaseHost">DatabaseHost</h2>
<!-- backwards compatibility -->
<a id="schemadatabasehost"></a>
<a id="schema_DatabaseHost"></a>
<a id="tocSdatabasehost"></a>
<a id="tocsdatabasehost"></a>

```json
"string"
```

<h2 id="tocS_DatabasePort">DatabasePort</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseport"></a>
<a id="schema_DatabasePort"></a>
<a id="tocSdatabaseport"></a>
<a id="tocsdatabaseport"></a>

```json
1
```

<h2 id="tocS_DeactivateAnomalyDetectorRequest">DeactivateAnomalyDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeactivateanomalydetectorrequest"></a>
<a id="schema_DeactivateAnomalyDetectorRequest"></a>
<a id="tocSdeactivateanomalydetectorrequest"></a>
<a id="tocsdeactivateanomalydetectorrequest"></a>

```json
{
  "AnomalyDetectorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|

<h2 id="tocS_DeleteAlertRequest">DeleteAlertRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletealertrequest"></a>
<a id="schema_DeleteAlertRequest"></a>
<a id="tocSdeletealertrequest"></a>
<a id="tocsdeletealertrequest"></a>

```json
{
  "AlertArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlertArn|object|true|none|none|

<h2 id="tocS_DeleteAnomalyDetectorRequest">DeleteAnomalyDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteanomalydetectorrequest"></a>
<a id="schema_DeleteAnomalyDetectorRequest"></a>
<a id="tocSdeleteanomalydetectorrequest"></a>
<a id="tocsdeleteanomalydetectorrequest"></a>

```json
{
  "AnomalyDetectorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|

<h2 id="tocS_DescribeAlertRequest">DescribeAlertRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribealertrequest"></a>
<a id="schema_DescribeAlertRequest"></a>
<a id="tocSdescribealertrequest"></a>
<a id="tocsdescribealertrequest"></a>

```json
{
  "AlertArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlertArn|object|true|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
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

<h2 id="tocS_DescribeAnomalyDetectionExecutionsRequest">DescribeAnomalyDetectionExecutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeanomalydetectionexecutionsrequest"></a>
<a id="schema_DescribeAnomalyDetectionExecutionsRequest"></a>
<a id="tocSdescribeanomalydetectionexecutionsrequest"></a>
<a id="tocsdescribeanomalydetectionexecutionsrequest"></a>

```json
{
  "AnomalyDetectorArn": {},
  "Timestamp": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|
|Timestamp|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ExecutionList">ExecutionList</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionlist"></a>
<a id="schema_ExecutionList"></a>
<a id="tocSexecutionlist"></a>
<a id="tocsexecutionlist"></a>

```json
[
  {
    "Timestamp": {},
    "Status": {},
    "FailureReason": {}
  }
]
```

<h2 id="tocS_DescribeAnomalyDetectorRequest">DescribeAnomalyDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeanomalydetectorrequest"></a>
<a id="schema_DescribeAnomalyDetectorRequest"></a>
<a id="tocSdescribeanomalydetectorrequest"></a>
<a id="tocsdescribeanomalydetectorrequest"></a>

```json
{
  "AnomalyDetectorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_DescribeMetricSetRequest">DescribeMetricSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemetricsetrequest"></a>
<a id="schema_DescribeMetricSetRequest"></a>
<a id="tocSdescribemetricsetrequest"></a>
<a id="tocsdescribemetricsetrequest"></a>

```json
{
  "MetricSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricSetArn|object|true|none|none|

<h2 id="tocS_DetectMetricSetConfigRequest">DetectMetricSetConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetectmetricsetconfigrequest"></a>
<a id="schema_DetectMetricSetConfigRequest"></a>
<a id="tocSdetectmetricsetconfigrequest"></a>
<a id="tocsdetectmetricsetconfigrequest"></a>

```json
{
  "AnomalyDetectorArn": {},
  "AutoDetectionMetricSource": {
    "S3SourceConfig": {
      "TemplatedPathList": {},
      "HistoricalDataPathList": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|
|AutoDetectionMetricSource|object|true|none|none|

<h2 id="tocS_DetectedMetricSetConfig">DetectedMetricSetConfig</h2>
<!-- backwards compatibility -->
<a id="schemadetectedmetricsetconfig"></a>
<a id="schema_DetectedMetricSetConfig"></a>
<a id="tocSdetectedmetricsetconfig"></a>
<a id="tocsdetectedmetricsetconfig"></a>

```json
{
  "Offset": {
    "Value": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {}
    },
    "Confidence": {},
    "Message": {}
  },
  "MetricSetFrequency": {
    "Value": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {}
    },
    "Confidence": {},
    "Message": {}
  },
  "MetricSource": {
    "S3SourceConfig": {
      "FileFormatDescriptor": {
        "CsvFormatDescriptor": {
          "FileCompression": {
            "Value": {
              "S": {},
              "N": {},
              "B": {},
              "SS": {},
              "NS": {},
              "BS": {}
            },
            "Confidence": {},
            "Message": {}
          },
          "Charset": {
            "Value": {
              "S": {},
              "N": {},
              "B": {},
              "SS": {},
              "NS": {},
              "BS": {}
            },
            "Confidence": {},
            "Message": {}
          },
          "ContainsHeader": {
            "Value": {
              "S": {},
              "N": {},
              "B": {},
              "SS": {},
              "NS": {},
              "BS": {}
            },
            "Confidence": {},
            "Message": {}
          },
          "Delimiter": {
            "Value": {
              "S": {},
              "N": {},
              "B": {},
              "SS": {},
              "NS": {},
              "BS": {}
            },
            "Confidence": {},
            "Message": {}
          },
          "HeaderList": {
            "Value": {
              "S": {},
              "N": {},
              "B": {},
              "SS": {},
              "NS": {},
              "BS": {}
            },
            "Confidence": {},
            "Message": {}
          },
          "QuoteSymbol": {
            "Value": {
              "S": {},
              "N": {},
              "B": {},
              "SS": {},
              "NS": {},
              "BS": {}
            },
            "Confidence": {},
            "Message": {}
          }
        },
        "JsonFormatDescriptor": {
          "FileCompression": {
            "Value": {
              "S": {},
              "N": {},
              "B": {},
              "SS": {},
              "NS": {},
              "BS": {}
            },
            "Confidence": {},
            "Message": {}
          },
          "Charset": {
            "Value": {
              "S": {},
              "N": {},
              "B": {},
              "SS": {},
              "NS": {},
              "BS": {}
            },
            "Confidence": {},
            "Message": {}
          }
        }
      }
    }
  }
}
```

An inferred dataset configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Offset|object|false|none|none|
|MetricSetFrequency|object|false|none|none|
|MetricSource|object|false|none|none|

<h2 id="tocS_DetectedField">DetectedField</h2>
<!-- backwards compatibility -->
<a id="schemadetectedfield"></a>
<a id="schema_DetectedField"></a>
<a id="tocSdetectedfield"></a>
<a id="tocsdetectedfield"></a>

```json
{
  "Value": {
    "S": {},
    "N": {},
    "B": {},
    "SS": {},
    "NS": {},
    "BS": {}
  },
  "Confidence": {},
  "Message": {}
}
```

An inferred field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Confidence|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_DetectedCsvFormatDescriptor">DetectedCsvFormatDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemadetectedcsvformatdescriptor"></a>
<a id="schema_DetectedCsvFormatDescriptor"></a>
<a id="tocSdetectedcsvformatdescriptor"></a>
<a id="tocsdetectedcsvformatdescriptor"></a>

```json
{
  "FileCompression": {
    "Value": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {}
    },
    "Confidence": {},
    "Message": {}
  },
  "Charset": {
    "Value": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {}
    },
    "Confidence": {},
    "Message": {}
  },
  "ContainsHeader": {
    "Value": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {}
    },
    "Confidence": {},
    "Message": {}
  },
  "Delimiter": {
    "Value": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {}
    },
    "Confidence": {},
    "Message": {}
  },
  "HeaderList": {
    "Value": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {}
    },
    "Confidence": {},
    "Message": {}
  },
  "QuoteSymbol": {
    "Value": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {}
    },
    "Confidence": {},
    "Message": {}
  }
}
```

Properties of an inferred CSV format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileCompression|object|false|none|none|
|Charset|object|false|none|none|
|ContainsHeader|object|false|none|none|
|Delimiter|object|false|none|none|
|HeaderList|object|false|none|none|
|QuoteSymbol|object|false|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_DetectedJsonFormatDescriptor">DetectedJsonFormatDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemadetectedjsonformatdescriptor"></a>
<a id="schema_DetectedJsonFormatDescriptor"></a>
<a id="tocSdetectedjsonformatdescriptor"></a>
<a id="tocsdetectedjsonformatdescriptor"></a>

```json
{
  "FileCompression": {
    "Value": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {}
    },
    "Confidence": {},
    "Message": {}
  },
  "Charset": {
    "Value": {
      "S": {},
      "N": {},
      "B": {},
      "SS": {},
      "NS": {},
      "BS": {}
    },
    "Confidence": {},
    "Message": {}
  }
}
```

A detected JSON format descriptor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileCompression|object|false|none|none|
|Charset|object|false|none|none|

<h2 id="tocS_DetectedFileFormatDescriptor">DetectedFileFormatDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemadetectedfileformatdescriptor"></a>
<a id="schema_DetectedFileFormatDescriptor"></a>
<a id="tocSdetectedfileformatdescriptor"></a>
<a id="tocsdetectedfileformatdescriptor"></a>

```json
{
  "CsvFormatDescriptor": {
    "FileCompression": {
      "Value": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {}
      },
      "Confidence": {},
      "Message": {}
    },
    "Charset": {
      "Value": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {}
      },
      "Confidence": {},
      "Message": {}
    },
    "ContainsHeader": {
      "Value": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {}
      },
      "Confidence": {},
      "Message": {}
    },
    "Delimiter": {
      "Value": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {}
      },
      "Confidence": {},
      "Message": {}
    },
    "HeaderList": {
      "Value": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {}
      },
      "Confidence": {},
      "Message": {}
    },
    "QuoteSymbol": {
      "Value": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {}
      },
      "Confidence": {},
      "Message": {}
    }
  },
  "JsonFormatDescriptor": {
    "FileCompression": {
      "Value": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {}
      },
      "Confidence": {},
      "Message": {}
    },
    "Charset": {
      "Value": {
        "S": {},
        "N": {},
        "B": {},
        "SS": {},
        "NS": {},
        "BS": {}
      },
      "Confidence": {},
      "Message": {}
    }
  }
}
```

Properties of an inferred data format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CsvFormatDescriptor|object|false|none|none|
|JsonFormatDescriptor|object|false|none|none|

<h2 id="tocS_DetectedMetricSource">DetectedMetricSource</h2>
<!-- backwards compatibility -->
<a id="schemadetectedmetricsource"></a>
<a id="schema_DetectedMetricSource"></a>
<a id="tocSdetectedmetricsource"></a>
<a id="tocsdetectedmetricsource"></a>

```json
{
  "S3SourceConfig": {
    "FileFormatDescriptor": {
      "CsvFormatDescriptor": {
        "FileCompression": {
          "Value": {
            "S": {},
            "N": {},
            "B": {},
            "SS": {},
            "NS": {},
            "BS": {}
          },
          "Confidence": {},
          "Message": {}
        },
        "Charset": {
          "Value": {
            "S": {},
            "N": {},
            "B": {},
            "SS": {},
            "NS": {},
            "BS": {}
          },
          "Confidence": {},
          "Message": {}
        },
        "ContainsHeader": {
          "Value": {
            "S": {},
            "N": {},
            "B": {},
            "SS": {},
            "NS": {},
            "BS": {}
          },
          "Confidence": {},
          "Message": {}
        },
        "Delimiter": {
          "Value": {
            "S": {},
            "N": {},
            "B": {},
            "SS": {},
            "NS": {},
            "BS": {}
          },
          "Confidence": {},
          "Message": {}
        },
        "HeaderList": {
          "Value": {
            "S": {},
            "N": {},
            "B": {},
            "SS": {},
            "NS": {},
            "BS": {}
          },
          "Confidence": {},
          "Message": {}
        },
        "QuoteSymbol": {
          "Value": {
            "S": {},
            "N": {},
            "B": {},
            "SS": {},
            "NS": {},
            "BS": {}
          },
          "Confidence": {},
          "Message": {}
        }
      },
      "JsonFormatDescriptor": {
        "FileCompression": {
          "Value": {
            "S": {},
            "N": {},
            "B": {},
            "SS": {},
            "NS": {},
            "BS": {}
          },
          "Confidence": {},
          "Message": {}
        },
        "Charset": {
          "Value": {
            "S": {},
            "N": {},
            "B": {},
            "SS": {},
            "NS": {},
            "BS": {}
          },
          "Confidence": {},
          "Message": {}
        }
      }
    }
  }
}
```

An inferred data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3SourceConfig|object|false|none|none|

<h2 id="tocS_DetectedS3SourceConfig">DetectedS3SourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemadetecteds3sourceconfig"></a>
<a id="schema_DetectedS3SourceConfig"></a>
<a id="tocSdetecteds3sourceconfig"></a>
<a id="tocsdetecteds3sourceconfig"></a>

```json
{
  "FileFormatDescriptor": {
    "CsvFormatDescriptor": {
      "FileCompression": {
        "Value": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {}
        },
        "Confidence": {},
        "Message": {}
      },
      "Charset": {
        "Value": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {}
        },
        "Confidence": {},
        "Message": {}
      },
      "ContainsHeader": {
        "Value": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {}
        },
        "Confidence": {},
        "Message": {}
      },
      "Delimiter": {
        "Value": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {}
        },
        "Confidence": {},
        "Message": {}
      },
      "HeaderList": {
        "Value": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {}
        },
        "Confidence": {},
        "Message": {}
      },
      "QuoteSymbol": {
        "Value": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {}
        },
        "Confidence": {},
        "Message": {}
      }
    },
    "JsonFormatDescriptor": {
      "FileCompression": {
        "Value": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {}
        },
        "Confidence": {},
        "Message": {}
      },
      "Charset": {
        "Value": {
          "S": {},
          "N": {},
          "B": {},
          "SS": {},
          "NS": {},
          "BS": {}
        },
        "Confidence": {},
        "Message": {}
      }
    }
  }
}
```

An inferred source configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileFormatDescriptor|object|false|none|none|

<h2 id="tocS_DimensionValueContributionList">DimensionValueContributionList</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvaluecontributionlist"></a>
<a id="schema_DimensionValueContributionList"></a>
<a id="tocSdimensionvaluecontributionlist"></a>
<a id="tocsdimensionvaluecontributionlist"></a>

```json
[
  {
    "DimensionValue": {},
    "ContributionScore": {}
  }
]
```

<h2 id="tocS_DimensionContribution">DimensionContribution</h2>
<!-- backwards compatibility -->
<a id="schemadimensioncontribution"></a>
<a id="schema_DimensionContribution"></a>
<a id="tocSdimensioncontribution"></a>
<a id="tocsdimensioncontribution"></a>

```json
{
  "DimensionName": {},
  "DimensionValueContributionList": {}
}
```

Details about a dimension that contributed to an anomaly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DimensionName|object|false|none|none|
|DimensionValueContributionList|object|false|none|none|

<h2 id="tocS_DimensionValueList">DimensionValueList</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvaluelist"></a>
<a id="schema_DimensionValueList"></a>
<a id="tocSdimensionvaluelist"></a>
<a id="tocsdimensionvaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DimensionFilter">DimensionFilter</h2>
<!-- backwards compatibility -->
<a id="schemadimensionfilter"></a>
<a id="schema_DimensionFilter"></a>
<a id="tocSdimensionfilter"></a>
<a id="tocsdimensionfilter"></a>

```json
{
  "DimensionName": {},
  "DimensionValueList": {}
}
```

The dimension filter, containing DimensionName and DimensionValueList.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DimensionName|object|false|none|none|
|DimensionValueList|object|false|none|none|

<h2 id="tocS_DimensionValue">DimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvalue"></a>
<a id="schema_DimensionValue"></a>
<a id="tocSdimensionvalue"></a>
<a id="tocsdimensionvalue"></a>

```json
"string"
```

<h2 id="tocS_DimensionNameValue">DimensionNameValue</h2>
<!-- backwards compatibility -->
<a id="schemadimensionnamevalue"></a>
<a id="schema_DimensionNameValue"></a>
<a id="tocSdimensionnamevalue"></a>
<a id="tocsdimensionnamevalue"></a>

```json
{
  "DimensionName": {},
  "DimensionValue": {}
}
```

A dimension name and value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DimensionName|object|true|none|none|
|DimensionValue|object|true|none|none|

<h2 id="tocS_DimensionNameValueList">DimensionNameValueList</h2>
<!-- backwards compatibility -->
<a id="schemadimensionnamevaluelist"></a>
<a id="schema_DimensionNameValueList"></a>
<a id="tocSdimensionnamevaluelist"></a>
<a id="tocsdimensionnamevaluelist"></a>

```json
[
  {
    "DimensionName": {},
    "DimensionValue": {}
  }
]
```

<h2 id="tocS_DimensionValueContribution">DimensionValueContribution</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvaluecontribution"></a>
<a id="schema_DimensionValueContribution"></a>
<a id="tocSdimensionvaluecontribution"></a>
<a id="tocsdimensionvaluecontribution"></a>

```json
{
  "DimensionValue": {},
  "ContributionScore": {}
}
```

The severity of a value of a dimension that contributed to an anomaly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DimensionValue|object|false|none|none|
|ContributionScore|object|false|none|none|

<h2 id="tocS_ExecutionStatus">ExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstatus"></a>
<a id="schema_ExecutionStatus"></a>
<a id="tocSexecutionstatus"></a>
<a id="tocsexecutionstatus"></a>

```json
{
  "Timestamp": {},
  "Status": {},
  "FailureReason": {}
}
```

The status of an anomaly detector run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|object|false|none|none|
|Status|object|false|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_JsonFormatDescriptor">JsonFormatDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemajsonformatdescriptor"></a>
<a id="schema_JsonFormatDescriptor"></a>
<a id="tocSjsonformatdescriptor"></a>
<a id="tocsjsonformatdescriptor"></a>

```json
{
  "FileCompression": {},
  "Charset": {}
}
```

Contains information about how a source JSON data file should be analyzed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileCompression|object|false|none|none|
|Charset|object|false|none|none|

<h2 id="tocS_FilterOperation">FilterOperation</h2>
<!-- backwards compatibility -->
<a id="schemafilteroperation"></a>
<a id="schema_FilterOperation"></a>
<a id="tocSfilteroperation"></a>
<a id="tocsfilteroperation"></a>

```json
"EQUALS"
```

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "DimensionValue": {},
  "FilterOperation": {}
}
```

Describes a filter for choosing a subset of dimension values. Each filter consists of the dimension that you want to include and the condition statement. The condition statement is specified in the <code>FilterOperation</code> object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DimensionValue|object|false|none|none|
|FilterOperation|object|false|none|none|

<h2 id="tocS_FilterList">FilterList</h2>
<!-- backwards compatibility -->
<a id="schemafilterlist"></a>
<a id="schema_FilterList"></a>
<a id="tocSfilterlist"></a>
<a id="tocsfilterlist"></a>

```json
[
  {
    "DimensionValue": {},
    "FilterOperation": {}
  }
]
```

<h2 id="tocS_GetAnomalyGroupRequest">GetAnomalyGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetanomalygrouprequest"></a>
<a id="schema_GetAnomalyGroupRequest"></a>
<a id="tocSgetanomalygrouprequest"></a>
<a id="tocsgetanomalygrouprequest"></a>

```json
{
  "AnomalyGroupId": {},
  "AnomalyDetectorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyGroupId|object|true|none|none|
|AnomalyDetectorArn|object|true|none|none|

<h2 id="tocS_GetDataQualityMetricsRequest">GetDataQualityMetricsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdataqualitymetricsrequest"></a>
<a id="schema_GetDataQualityMetricsRequest"></a>
<a id="tocSgetdataqualitymetricsrequest"></a>
<a id="tocsgetdataqualitymetricsrequest"></a>

```json
{
  "AnomalyDetectorArn": {},
  "MetricSetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|
|MetricSetArn|object|false|none|none|

<h2 id="tocS_GetFeedbackRequest">GetFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfeedbackrequest"></a>
<a id="schema_GetFeedbackRequest"></a>
<a id="tocSgetfeedbackrequest"></a>
<a id="tocsgetfeedbackrequest"></a>

```json
{
  "AnomalyDetectorArn": {},
  "AnomalyGroupTimeSeriesFeedback": {
    "AnomalyGroupId": {},
    "TimeSeriesId": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|
|AnomalyGroupTimeSeriesFeedback|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TimeSeriesFeedbackList">TimeSeriesFeedbackList</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesfeedbacklist"></a>
<a id="schema_TimeSeriesFeedbackList"></a>
<a id="tocStimeseriesfeedbacklist"></a>
<a id="tocstimeseriesfeedbacklist"></a>

```json
[
  {
    "TimeSeriesId": {},
    "IsAnomaly": {}
  }
]
```

<h2 id="tocS_SampleDataS3SourceConfig">SampleDataS3SourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemasampledatas3sourceconfig"></a>
<a id="schema_SampleDataS3SourceConfig"></a>
<a id="tocSsampledatas3sourceconfig"></a>
<a id="tocssampledatas3sourceconfig"></a>

```json
{
  "RoleArn": {},
  "TemplatedPathList": {},
  "HistoricalDataPathList": {},
  "FileFormatDescriptor": {
    "CsvFormatDescriptor": {
      "FileCompression": {},
      "Charset": {},
      "ContainsHeader": {},
      "Delimiter": {},
      "HeaderList": {},
      "QuoteSymbol": {}
    },
    "JsonFormatDescriptor": {
      "FileCompression": {},
      "Charset": {}
    }
  }
}
```

Contains information about the source configuration in Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|true|none|none|
|TemplatedPathList|object|false|none|none|
|HistoricalDataPathList|object|false|none|none|
|FileFormatDescriptor|[FileFormatDescriptor](#schemafileformatdescriptor)|true|none|Contains information about a source file's formatting.|

<h2 id="tocS_GetSampleDataRequest">GetSampleDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsampledatarequest"></a>
<a id="schema_GetSampleDataRequest"></a>
<a id="tocSgetsampledatarequest"></a>
<a id="tocsgetsampledatarequest"></a>

```json
{
  "S3SourceConfig": {
    "RoleArn": {},
    "TemplatedPathList": {},
    "HistoricalDataPathList": {},
    "FileFormatDescriptor": {
      "CsvFormatDescriptor": {
        "FileCompression": {},
        "Charset": {},
        "ContainsHeader": {},
        "Delimiter": {},
        "HeaderList": {},
        "QuoteSymbol": {}
      },
      "JsonFormatDescriptor": {
        "FileCompression": {},
        "Charset": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3SourceConfig|object|false|none|none|

<h2 id="tocS_HeaderValueList">HeaderValueList</h2>
<!-- backwards compatibility -->
<a id="schemaheadervaluelist"></a>
<a id="schema_HeaderValueList"></a>
<a id="tocSheadervaluelist"></a>
<a id="tocsheadervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SampleRows">SampleRows</h2>
<!-- backwards compatibility -->
<a id="schemasamplerows"></a>
<a id="schema_SampleRows"></a>
<a id="tocSsamplerows"></a>
<a id="tocssamplerows"></a>

```json
[
  [
    "string"
  ]
]
```

<h2 id="tocS_HeaderValue">HeaderValue</h2>
<!-- backwards compatibility -->
<a id="schemaheadervalue"></a>
<a id="schema_HeaderValue"></a>
<a id="tocSheadervalue"></a>
<a id="tocsheadervalue"></a>

```json
"string"
```

<h2 id="tocS_HistoricalDataPath">HistoricalDataPath</h2>
<!-- backwards compatibility -->
<a id="schemahistoricaldatapath"></a>
<a id="schema_HistoricalDataPath"></a>
<a id="tocShistoricaldatapath"></a>
<a id="tocshistoricaldatapath"></a>

```json
"string"
```

<h2 id="tocS_RelationshipType">RelationshipType</h2>
<!-- backwards compatibility -->
<a id="schemarelationshiptype"></a>
<a id="schema_RelationshipType"></a>
<a id="tocSrelationshiptype"></a>
<a id="tocsrelationshiptype"></a>

```json
"CAUSE_OF_INPUT_ANOMALY_GROUP"
```

<h2 id="tocS_MetricChangePercentage">MetricChangePercentage</h2>
<!-- backwards compatibility -->
<a id="schemametricchangepercentage"></a>
<a id="schema_MetricChangePercentage"></a>
<a id="tocSmetricchangepercentage"></a>
<a id="tocsmetricchangepercentage"></a>

```json
0
```

<h2 id="tocS_InterMetricImpactDetails">InterMetricImpactDetails</h2>
<!-- backwards compatibility -->
<a id="schemaintermetricimpactdetails"></a>
<a id="schema_InterMetricImpactDetails"></a>
<a id="tocSintermetricimpactdetails"></a>
<a id="tocsintermetricimpactdetails"></a>

```json
{
  "MetricName": {},
  "AnomalyGroupId": {},
  "RelationshipType": {},
  "ContributionPercentage": {}
}
```

<p>Aggregated details about the measures contributing to the anomaly group, and the measures potentially impacted by the anomaly group.</p> <p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricName|object|false|none|none|
|AnomalyGroupId|object|false|none|none|
|RelationshipType|object|false|none|none|
|ContributionPercentage|object|false|none|none|

<h2 id="tocS_InterMetricImpactList">InterMetricImpactList</h2>
<!-- backwards compatibility -->
<a id="schemaintermetricimpactlist"></a>
<a id="schema_InterMetricImpactList"></a>
<a id="tocSintermetricimpactlist"></a>
<a id="tocsintermetricimpactlist"></a>

```json
[
  {
    "MetricName": {},
    "AnomalyGroupId": {},
    "RelationshipType": {},
    "ContributionPercentage": {}
  }
]
```

<h2 id="tocS_ItemizedMetricStats">ItemizedMetricStats</h2>
<!-- backwards compatibility -->
<a id="schemaitemizedmetricstats"></a>
<a id="schema_ItemizedMetricStats"></a>
<a id="tocSitemizedmetricstats"></a>
<a id="tocsitemizedmetricstats"></a>

```json
{
  "MetricName": {},
  "OccurrenceCount": {}
}
```

Aggregated statistics about a measure affected by an anomaly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricName|object|false|none|none|
|OccurrenceCount|object|false|none|none|

<h2 id="tocS_JsonFileCompression">JsonFileCompression</h2>
<!-- backwards compatibility -->
<a id="schemajsonfilecompression"></a>
<a id="schema_JsonFileCompression"></a>
<a id="tocSjsonfilecompression"></a>
<a id="tocsjsonfilecompression"></a>

```json
"NONE"
```

<h2 id="tocS_ListAlertsRequest">ListAlertsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistalertsrequest"></a>
<a id="schema_ListAlertsRequest"></a>
<a id="tocSlistalertsrequest"></a>
<a id="tocslistalertsrequest"></a>

```json
{
  "AnomalyDetectorArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListAnomalyDetectorsRequest">ListAnomalyDetectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistanomalydetectorsrequest"></a>
<a id="schema_ListAnomalyDetectorsRequest"></a>
<a id="tocSlistanomalydetectorsrequest"></a>
<a id="tocslistanomalydetectorsrequest"></a>

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

<h2 id="tocS_ListAnomalyGroupRelatedMetricsRequest">ListAnomalyGroupRelatedMetricsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistanomalygrouprelatedmetricsrequest"></a>
<a id="schema_ListAnomalyGroupRelatedMetricsRequest"></a>
<a id="tocSlistanomalygrouprelatedmetricsrequest"></a>
<a id="tocslistanomalygrouprelatedmetricsrequest"></a>

```json
{
  "AnomalyDetectorArn": {},
  "AnomalyGroupId": {},
  "RelationshipTypeFilter": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|
|AnomalyGroupId|object|true|none|none|
|RelationshipTypeFilter|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAnomalyGroupSummariesRequest">ListAnomalyGroupSummariesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistanomalygroupsummariesrequest"></a>
<a id="schema_ListAnomalyGroupSummariesRequest"></a>
<a id="tocSlistanomalygroupsummariesrequest"></a>
<a id="tocslistanomalygroupsummariesrequest"></a>

```json
{
  "AnomalyDetectorArn": {},
  "SensitivityThreshold": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|
|SensitivityThreshold|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAnomalyGroupTimeSeriesRequest">ListAnomalyGroupTimeSeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistanomalygrouptimeseriesrequest"></a>
<a id="schema_ListAnomalyGroupTimeSeriesRequest"></a>
<a id="tocSlistanomalygrouptimeseriesrequest"></a>
<a id="tocslistanomalygrouptimeseriesrequest"></a>

```json
{
  "AnomalyDetectorArn": {},
  "AnomalyGroupId": {},
  "MetricName": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|
|AnomalyGroupId|object|true|none|none|
|MetricName|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_TimestampList">TimestampList</h2>
<!-- backwards compatibility -->
<a id="schematimestamplist"></a>
<a id="schema_TimestampList"></a>
<a id="tocStimestamplist"></a>
<a id="tocstimestamplist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TimeSeriesList">TimeSeriesList</h2>
<!-- backwards compatibility -->
<a id="schematimeserieslist"></a>
<a id="schema_TimeSeriesList"></a>
<a id="tocStimeserieslist"></a>
<a id="tocstimeserieslist"></a>

```json
[
  {
    "TimeSeriesId": {},
    "DimensionList": {},
    "MetricValueList": {}
  }
]
```

<h2 id="tocS_ListMetricSetsRequest">ListMetricSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmetricsetsrequest"></a>
<a id="schema_ListMetricSetsRequest"></a>
<a id="tocSlistmetricsetsrequest"></a>
<a id="tocslistmetricsetsrequest"></a>

```json
{
  "AnomalyDetectorArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_MetricSetSummaryList">MetricSetSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemametricsetsummarylist"></a>
<a id="schema_MetricSetSummaryList"></a>
<a id="tocSmetricsetsummarylist"></a>
<a id="tocsmetricsetsummarylist"></a>

```json
[
  {
    "MetricSetArn": {},
    "AnomalyDetectorArn": {},
    "MetricSetDescription": {},
    "MetricSetName": {},
    "CreationTime": {},
    "LastModificationTime": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
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

<h2 id="tocS_Namespace">Namespace</h2>
<!-- backwards compatibility -->
<a id="schemanamespace"></a>
<a id="schema_Namespace"></a>
<a id="tocSnamespace"></a>
<a id="tocsnamespace"></a>

```json
"string"
```

<h2 id="tocS_MetricLevelImpact">MetricLevelImpact</h2>
<!-- backwards compatibility -->
<a id="schemametriclevelimpact"></a>
<a id="schema_MetricLevelImpact"></a>
<a id="tocSmetriclevelimpact"></a>
<a id="tocsmetriclevelimpact"></a>

```json
{
  "MetricName": {},
  "NumTimeSeries": {},
  "ContributionMatrix": {
    "DimensionContributionList": {}
  }
}
```

Details about a measure affected by an anomaly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricName|object|false|none|none|
|NumTimeSeries|object|false|none|none|
|ContributionMatrix|object|false|none|none|

<h2 id="tocS_MetricSetDataQualityMetric">MetricSetDataQualityMetric</h2>
<!-- backwards compatibility -->
<a id="schemametricsetdataqualitymetric"></a>
<a id="schema_MetricSetDataQualityMetric"></a>
<a id="tocSmetricsetdataqualitymetric"></a>
<a id="tocsmetricsetdataqualitymetric"></a>

```json
{
  "MetricSetArn": {},
  "DataQualityMetricList": {}
}
```

An array of <code>DataQualityMetric</code> objects that describes one or more data quality metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricSetArn|object|false|none|none|
|DataQualityMetricList|object|false|none|none|

<h2 id="tocS_MetricSetSummary">MetricSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemametricsetsummary"></a>
<a id="schema_MetricSetSummary"></a>
<a id="tocSmetricsetsummary"></a>
<a id="tocsmetricsetsummary"></a>

```json
{
  "MetricSetArn": {},
  "AnomalyDetectorArn": {},
  "MetricSetDescription": {},
  "MetricSetName": {},
  "CreationTime": {},
  "LastModificationTime": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Contains information about a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricSetArn|object|false|none|none|
|AnomalyDetectorArn|object|false|none|none|
|MetricSetDescription|object|false|none|none|
|MetricSetName|object|false|none|none|
|CreationTime|object|false|none|none|
|LastModificationTime|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_MetricValue">MetricValue</h2>
<!-- backwards compatibility -->
<a id="schemametricvalue"></a>
<a id="schema_MetricValue"></a>
<a id="tocSmetricvalue"></a>
<a id="tocsmetricvalue"></a>

```json
0
```

<h2 id="tocS_MetricValueList">MetricValueList</h2>
<!-- backwards compatibility -->
<a id="schemametricvaluelist"></a>
<a id="schema_MetricValueList"></a>
<a id="tocSmetricvaluelist"></a>
<a id="tocsmetricvaluelist"></a>

```json
[
  0
]
```

<h2 id="tocS_PoirotSecretManagerArn">PoirotSecretManagerArn</h2>
<!-- backwards compatibility -->
<a id="schemapoirotsecretmanagerarn"></a>
<a id="schema_PoirotSecretManagerArn"></a>
<a id="tocSpoirotsecretmanagerarn"></a>
<a id="tocspoirotsecretmanagerarn"></a>

```json
"string"
```

<h2 id="tocS_PutFeedbackRequest">PutFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputfeedbackrequest"></a>
<a id="schema_PutFeedbackRequest"></a>
<a id="tocSputfeedbackrequest"></a>
<a id="tocsputfeedbackrequest"></a>

```json
{
  "AnomalyDetectorArn": {},
  "AnomalyGroupTimeSeriesFeedback": {
    "AnomalyGroupId": {},
    "TimeSeriesId": {},
    "IsAnomaly": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|
|AnomalyGroupTimeSeriesFeedback|object|true|none|none|

<h2 id="tocS_RDSDatabaseIdentifier">RDSDatabaseIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemardsdatabaseidentifier"></a>
<a id="schema_RDSDatabaseIdentifier"></a>
<a id="tocSrdsdatabaseidentifier"></a>
<a id="tocsrdsdatabaseidentifier"></a>

```json
"string"
```

<h2 id="tocS_RDSDatabaseName">RDSDatabaseName</h2>
<!-- backwards compatibility -->
<a id="schemardsdatabasename"></a>
<a id="schema_RDSDatabaseName"></a>
<a id="tocSrdsdatabasename"></a>
<a id="tocsrdsdatabasename"></a>

```json
"string"
```

<h2 id="tocS_TableName">TableName</h2>
<!-- backwards compatibility -->
<a id="schematablename"></a>
<a id="schema_TableName"></a>
<a id="tocStablename"></a>
<a id="tocstablename"></a>

```json
"string"
```

<h2 id="tocS_VpcConfiguration">VpcConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfiguration"></a>
<a id="schema_VpcConfiguration"></a>
<a id="tocSvpcconfiguration"></a>
<a id="tocsvpcconfiguration"></a>

```json
{
  "SubnetIdList": {},
  "SecurityGroupIdList": {}
}
```

Contains configuration information about the Amazon Virtual Private Cloud (VPC).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIdList|object|true|none|none|
|SecurityGroupIdList|object|true|none|none|

<h2 id="tocS_RedshiftClusterIdentifier">RedshiftClusterIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftclusteridentifier"></a>
<a id="schema_RedshiftClusterIdentifier"></a>
<a id="tocSredshiftclusteridentifier"></a>
<a id="tocsredshiftclusteridentifier"></a>

```json
"string"
```

<h2 id="tocS_RedshiftDatabaseName">RedshiftDatabaseName</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdatabasename"></a>
<a id="schema_RedshiftDatabaseName"></a>
<a id="tocSredshiftdatabasename"></a>
<a id="tocsredshiftdatabasename"></a>

```json
"string"
```

<h2 id="tocS_SnsFormat">SnsFormat</h2>
<!-- backwards compatibility -->
<a id="schemasnsformat"></a>
<a id="schema_SnsFormat"></a>
<a id="tocSsnsformat"></a>
<a id="tocssnsformat"></a>

```json
"LONG_TEXT"
```

<h2 id="tocS_SampleRow">SampleRow</h2>
<!-- backwards compatibility -->
<a id="schemasamplerow"></a>
<a id="schema_SampleRow"></a>
<a id="tocSsamplerow"></a>
<a id="tocssamplerow"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_SecurityGroupIdList">SecurityGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupidlist"></a>
<a id="schema_SecurityGroupIdList"></a>
<a id="tocSsecuritygroupidlist"></a>
<a id="tocssecuritygroupidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"string"
```

<h2 id="tocS_SubnetIdList">SubnetIdList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetidlist"></a>
<a id="schema_SubnetIdList"></a>
<a id="tocSsubnetidlist"></a>
<a id="tocssubnetidlist"></a>

```json
[
  "string"
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

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_TemplatedPath">TemplatedPath</h2>
<!-- backwards compatibility -->
<a id="schematemplatedpath"></a>
<a id="schema_TemplatedPath"></a>
<a id="tocStemplatedpath"></a>
<a id="tocstemplatedpath"></a>

```json
"string"
```

<h2 id="tocS_TimeSeries">TimeSeries</h2>
<!-- backwards compatibility -->
<a id="schematimeseries"></a>
<a id="schema_TimeSeries"></a>
<a id="tocStimeseries"></a>
<a id="tocstimeseries"></a>

```json
{
  "TimeSeriesId": {},
  "DimensionList": {},
  "MetricValueList": {}
}
```

Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as <i>availability</i> in the <i>us-east-1</i> Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeSeriesId|object|true|none|none|
|DimensionList|object|true|none|none|
|MetricValueList|object|true|none|none|

<h2 id="tocS_TimeSeriesFeedback">TimeSeriesFeedback</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesfeedback"></a>
<a id="schema_TimeSeriesFeedback"></a>
<a id="tocStimeseriesfeedback"></a>
<a id="tocstimeseriesfeedback"></a>

```json
{
  "TimeSeriesId": {},
  "IsAnomaly": {}
}
```

Details about feedback submitted for an anomalous metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeSeriesId|object|false|none|none|
|IsAnomaly|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateAlertRequest">UpdateAlertRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatealertrequest"></a>
<a id="schema_UpdateAlertRequest"></a>
<a id="tocSupdatealertrequest"></a>
<a id="tocsupdatealertrequest"></a>

```json
{
  "AlertArn": {},
  "AlertDescription": {},
  "AlertSensitivityThreshold": {},
  "Action": {
    "SNSConfiguration": {
      "RoleArn": {},
      "SnsTopicArn": {},
      "SnsFormat": {}
    },
    "LambdaConfiguration": {
      "RoleArn": {},
      "LambdaArn": {}
    }
  },
  "AlertFilters": {
    "MetricList": {},
    "DimensionFilterList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlertArn|object|true|none|none|
|AlertDescription|object|false|none|none|
|AlertSensitivityThreshold|object|false|none|none|
|Action|object|false|none|none|
|AlertFilters|object|false|none|none|

<h2 id="tocS_UpdateAnomalyDetectorRequest">UpdateAnomalyDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateanomalydetectorrequest"></a>
<a id="schema_UpdateAnomalyDetectorRequest"></a>
<a id="tocSupdateanomalydetectorrequest"></a>
<a id="tocsupdateanomalydetectorrequest"></a>

```json
{
  "AnomalyDetectorArn": {},
  "KmsKeyArn": {},
  "AnomalyDetectorDescription": {},
  "AnomalyDetectorConfig": {
    "AnomalyDetectorFrequency": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectorArn|object|true|none|none|
|KmsKeyArn|object|false|none|none|
|AnomalyDetectorDescription|object|false|none|none|
|AnomalyDetectorConfig|object|false|none|none|

<h2 id="tocS_UpdateMetricSetRequest">UpdateMetricSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemetricsetrequest"></a>
<a id="schema_UpdateMetricSetRequest"></a>
<a id="tocSupdatemetricsetrequest"></a>
<a id="tocsupdatemetricsetrequest"></a>

```json
{
  "MetricSetArn": {},
  "MetricSetDescription": {},
  "MetricList": {},
  "Offset": {},
  "TimestampColumn": {
    "ColumnName": {},
    "ColumnFormat": {}
  },
  "DimensionList": {},
  "MetricSetFrequency": {},
  "MetricSource": {
    "S3SourceConfig": {
      "RoleArn": {},
      "TemplatedPathList": {},
      "HistoricalDataPathList": {},
      "FileFormatDescriptor": {
        "CsvFormatDescriptor": {
          "FileCompression": {},
          "Charset": {},
          "ContainsHeader": {},
          "Delimiter": {},
          "HeaderList": {},
          "QuoteSymbol": {}
        },
        "JsonFormatDescriptor": {
          "FileCompression": {},
          "Charset": {}
        }
      }
    },
    "AppFlowConfig": {
      "RoleArn": {},
      "FlowName": {}
    },
    "CloudWatchConfig": {
      "RoleArn": {},
      "BackTestConfiguration": {
        "RunBackTestMode": {}
      }
    },
    "RDSSourceConfig": {
      "DBInstanceIdentifier": {},
      "DatabaseHost": {},
      "DatabasePort": {},
      "SecretManagerArn": {},
      "DatabaseName": {},
      "TableName": {},
      "RoleArn": {},
      "VpcConfiguration": {
        "SubnetIdList": {},
        "SecurityGroupIdList": {}
      }
    },
    "RedshiftSourceConfig": {
      "ClusterIdentifier": {},
      "DatabaseHost": {},
      "DatabasePort": {},
      "SecretManagerArn": {},
      "DatabaseName": {},
      "TableName": {},
      "RoleArn": {},
      "VpcConfiguration": {
        "SubnetIdList": {},
        "SecurityGroupIdList": {}
      }
    },
    "AthenaSourceConfig": {
      "RoleArn": {},
      "DatabaseName": {},
      "DataCatalog": {},
      "TableName": {},
      "WorkGroupName": {},
      "S3ResultsPath": {},
      "BackTestConfiguration": {
        "RunBackTestMode": {}
      }
    }
  },
  "DimensionFilterList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricSetArn|object|true|none|none|
|MetricSetDescription|object|false|none|none|
|MetricList|object|false|none|none|
|Offset|object|false|none|none|
|TimestampColumn|object|false|none|none|
|DimensionList|object|false|none|none|
|MetricSetFrequency|object|false|none|none|
|MetricSource|[MetricSource](#schemametricsource)|false|none|Contains information about source data used to generate metrics.|
|DimensionFilterList|object|false|none|none|
