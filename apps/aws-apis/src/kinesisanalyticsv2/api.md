<h1 id="amazon-kinesis-analytics">Amazon Kinesis Analytics v2018-05-23</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using Java, SQL, or Scala. The service enables you to quickly author and run Java, SQL, or Scala code against streaming sources to perform time series analytics, feed real-time dashboards, and create real-time metrics.

Base URLs:

* <a href="http://kinesisanalytics.us-east-1.amazonaws.com">http://kinesisanalytics.us-east-1.amazonaws.com</a> - The Kinesis Analytics V2 multi-region endpoint

* <a href="https://kinesisanalytics.us-east-1.amazonaws.com">https://kinesisanalytics.us-east-1.amazonaws.com</a> - The Kinesis Analytics V2 multi-region endpoint

* <a href="http://kinesisanalytics.cn-north-1.amazonaws.com.cn">http://kinesisanalytics.cn-north-1.amazonaws.com.cn</a> - The Kinesis Analytics V2 endpoint for China (Beijing) and China (Ningxia)

* <a href="https://kinesisanalytics.cn-north-1.amazonaws.com.cn">https://kinesisanalytics.cn-north-1.amazonaws.com.cn</a> - The Kinesis Analytics V2 endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/kinesisanalytics/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-kinesis-analytics-default">Default</h1>

## AddApplicationCloudWatchLoggingOption

<a id="opIdAddApplicationCloudWatchLoggingOption"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "CloudWatchLoggingOption": {
      "LogStreamARN": {}
    },
    "ConditionalToken": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption`

Adds an Amazon CloudWatch log stream to monitor application configuration errors.

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "CloudWatchLoggingOption": {
    "LogStreamARN": {}
  },
  "ConditionalToken": {}
}
```

<h3 id="addapplicationcloudwatchloggingoption-parameters">Parameters</h3>

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
|body|body|[AddApplicationCloudWatchLoggingOptionRequest](#schemaaddapplicationcloudwatchloggingoptionrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CurrentApplicationVersionId|body|object|false|none|
|» CloudWatchLoggingOption|body|object|true|none|
|» » LogStreamARN|body|object|true|none|
|» ConditionalToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption|

> Example responses

> 200 Response

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "CloudWatchLoggingOptionDescriptions": {}
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

<h3 id="addapplicationcloudwatchloggingoption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddApplicationCloudWatchLoggingOptionResponse](#schemaaddapplicationcloudwatchloggingoptionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|485|485|InvalidApplicationConfigurationException|[InvalidApplicationConfigurationException](#schemainvalidapplicationconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddApplicationInput

<a id="opIdAddApplicationInput"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.AddApplicationInput' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "Input": {
      "NamePrefix": {},
      "InputProcessingConfiguration": {
        "InputLambdaProcessor": {
          "ResourceARN": {}
        }
      },
      "KinesisStreamsInput": {
        "ResourceARN": {}
      },
      "KinesisFirehoseInput": {
        "ResourceARN": {}
      },
      "InputParallelism": {
        "Count": {}
      },
      "InputSchema": {
        "RecordFormat": {
          "RecordFormatType": {},
          "MappingParameters": {
            "JSONMappingParameters": {
              "RecordRowPath": {}
            },
            "CSVMappingParameters": {
              "RecordRowDelimiter": {},
              "RecordColumnDelimiter": {}
            }
          }
        },
        "RecordEncoding": {},
        "RecordColumns": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput`

<p> Adds a streaming source to your SQL-based Kinesis Data Analytics application. </p> <p>You can add a streaming source when you create an application, or you can use this operation to add a streaming source after you create an application. For more information, see <a>CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version. </p>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "Input": {
    "NamePrefix": {},
    "InputProcessingConfiguration": {
      "InputLambdaProcessor": {
        "ResourceARN": {}
      }
    },
    "KinesisStreamsInput": {
      "ResourceARN": {}
    },
    "KinesisFirehoseInput": {
      "ResourceARN": {}
    },
    "InputParallelism": {
      "Count": {}
    },
    "InputSchema": {
      "RecordFormat": {
        "RecordFormatType": {},
        "MappingParameters": {
          "JSONMappingParameters": {
            "RecordRowPath": {}
          },
          "CSVMappingParameters": {
            "RecordRowDelimiter": {},
            "RecordColumnDelimiter": {}
          }
        }
      },
      "RecordEncoding": {},
      "RecordColumns": {}
    }
  }
}
```

<h3 id="addapplicationinput-parameters">Parameters</h3>

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
|body|body|[AddApplicationInputRequest](#schemaaddapplicationinputrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CurrentApplicationVersionId|body|object|true|none|
|» Input|body|object|true|none|
|» » NamePrefix|body|object|true|none|
|» » InputProcessingConfiguration|body|object|false|none|
|» » » InputLambdaProcessor|body|object|true|none|
|» » » » ResourceARN|body|object|true|none|
|» » KinesisStreamsInput|body|object|false|none|
|» » » ResourceARN|body|object|true|none|
|» » KinesisFirehoseInput|body|object|false|none|
|» » » ResourceARN|body|object|true|none|
|» » InputParallelism|body|object|false|none|
|» » » Count|body|object|false|none|
|» » InputSchema|body|object|true|none|
|» » » RecordFormat|body|object|true|none|
|» » » » RecordFormatType|body|object|true|none|
|» » » » MappingParameters|body|object|false|none|
|» » » » » JSONMappingParameters|body|object|false|none|
|» » » » » » RecordRowPath|body|object|true|none|
|» » » » » CSVMappingParameters|body|object|false|none|
|» » » » » » RecordRowDelimiter|body|object|true|none|
|» » » » » » RecordColumnDelimiter|body|object|true|none|
|» » » RecordEncoding|body|object|false|none|
|» » » RecordColumns|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.AddApplicationInput|

> Example responses

> 200 Response

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "InputDescriptions": {}
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

<h3 id="addapplicationinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddApplicationInputResponse](#schemaaddapplicationinputresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|CodeValidationException|[CodeValidationException](#schemacodevalidationexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddApplicationInputProcessingConfiguration

<a id="opIdAddApplicationInputProcessingConfiguration"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "InputId": {},
    "InputProcessingConfiguration": {
      "InputLambdaProcessor": {
        "ResourceARN": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration`

Adds an <a>InputProcessingConfiguration</a> to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "InputId": {},
  "InputProcessingConfiguration": {
    "InputLambdaProcessor": {
      "ResourceARN": {}
    }
  }
}
```

<h3 id="addapplicationinputprocessingconfiguration-parameters">Parameters</h3>

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
|body|body|[AddApplicationInputProcessingConfigurationRequest](#schemaaddapplicationinputprocessingconfigurationrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CurrentApplicationVersionId|body|object|true|none|
|» InputId|body|object|true|none|
|» InputProcessingConfiguration|body|object|true|none|
|» » InputLambdaProcessor|body|object|true|none|
|» » » ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration|

> Example responses

> 200 Response

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "InputId": {},
  "InputProcessingConfigurationDescription": {
    "InputLambdaProcessorDescription": {
      "ResourceARN": {},
      "RoleARN": {}
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

<h3 id="addapplicationinputprocessingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddApplicationInputProcessingConfigurationResponse](#schemaaddapplicationinputprocessingconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddApplicationOutput

<a id="opIdAddApplicationOutput"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.AddApplicationOutput' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "Output": {
      "Name": {},
      "KinesisStreamsOutput": {
        "ResourceARN": {}
      },
      "KinesisFirehoseOutput": {
        "ResourceARN": {}
      },
      "LambdaOutput": {
        "ResourceARN": {}
      },
      "DestinationSchema": {
        "RecordFormatType": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput`

<p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p> <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "Output": {
    "Name": {},
    "KinesisStreamsOutput": {
      "ResourceARN": {}
    },
    "KinesisFirehoseOutput": {
      "ResourceARN": {}
    },
    "LambdaOutput": {
      "ResourceARN": {}
    },
    "DestinationSchema": {
      "RecordFormatType": {}
    }
  }
}
```

<h3 id="addapplicationoutput-parameters">Parameters</h3>

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
|body|body|[AddApplicationOutputRequest](#schemaaddapplicationoutputrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CurrentApplicationVersionId|body|object|true|none|
|» Output|body|object|true|none|
|» » Name|body|object|true|none|
|» » KinesisStreamsOutput|body|object|false|none|
|» » » ResourceARN|body|object|true|none|
|» » KinesisFirehoseOutput|body|object|false|none|
|» » » ResourceARN|body|object|true|none|
|» » LambdaOutput|body|object|false|none|
|» » » ResourceARN|body|object|true|none|
|» » DestinationSchema|body|object|true|none|
|» » » RecordFormatType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.AddApplicationOutput|

> Example responses

> 200 Response

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "OutputDescriptions": {}
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

<h3 id="addapplicationoutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddApplicationOutputResponse](#schemaaddapplicationoutputresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddApplicationReferenceDataSource

<a id="opIdAddApplicationReferenceDataSource"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.AddApplicationReferenceDataSource' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "ReferenceDataSource": {
      "TableName": {},
      "S3ReferenceDataSource": {
        "BucketARN": {},
        "FileKey": {}
      },
      "ReferenceSchema": {
        "RecordFormat": {
          "RecordFormatType": {},
          "MappingParameters": {
            "JSONMappingParameters": {
              "RecordRowPath": {}
            },
            "CSVMappingParameters": {
              "RecordRowDelimiter": {},
              "RecordColumnDelimiter": {}
            }
          }
        },
        "RecordEncoding": {},
        "RecordColumns": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource`

<p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p> <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "ReferenceDataSource": {
    "TableName": {},
    "S3ReferenceDataSource": {
      "BucketARN": {},
      "FileKey": {}
    },
    "ReferenceSchema": {
      "RecordFormat": {
        "RecordFormatType": {},
        "MappingParameters": {
          "JSONMappingParameters": {
            "RecordRowPath": {}
          },
          "CSVMappingParameters": {
            "RecordRowDelimiter": {},
            "RecordColumnDelimiter": {}
          }
        }
      },
      "RecordEncoding": {},
      "RecordColumns": {}
    }
  }
}
```

<h3 id="addapplicationreferencedatasource-parameters">Parameters</h3>

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
|body|body|[AddApplicationReferenceDataSourceRequest](#schemaaddapplicationreferencedatasourcerequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CurrentApplicationVersionId|body|object|true|none|
|» ReferenceDataSource|body|object|true|none|
|» » TableName|body|object|true|none|
|» » S3ReferenceDataSource|body|object|false|none|
|» » » BucketARN|body|object|false|none|
|» » » FileKey|body|object|false|none|
|» » ReferenceSchema|body|object|true|none|
|» » » RecordFormat|body|object|true|none|
|» » » » RecordFormatType|body|object|true|none|
|» » » » MappingParameters|body|object|false|none|
|» » » » » JSONMappingParameters|body|object|false|none|
|» » » » » » RecordRowPath|body|object|true|none|
|» » » » » CSVMappingParameters|body|object|false|none|
|» » » » » » RecordRowDelimiter|body|object|true|none|
|» » » » » » RecordColumnDelimiter|body|object|true|none|
|» » » RecordEncoding|body|object|false|none|
|» » » RecordColumns|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.AddApplicationReferenceDataSource|

> Example responses

> 200 Response

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "ReferenceDataSourceDescriptions": {}
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

<h3 id="addapplicationreferencedatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddApplicationReferenceDataSourceResponse](#schemaaddapplicationreferencedatasourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddApplicationVpcConfiguration

<a id="opIdAddApplicationVpcConfiguration"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.AddApplicationVpcConfiguration' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "VpcConfiguration": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "ConditionalToken": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration`

<p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store and access resources securely.</p> <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p> <ul> <li> <p>VPC configurations are not supported for SQL applications.</p> </li> <li> <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p> </li> </ul>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "ConditionalToken": {}
}
```

<h3 id="addapplicationvpcconfiguration-parameters">Parameters</h3>

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
|body|body|[AddApplicationVpcConfigurationRequest](#schemaaddapplicationvpcconfigurationrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CurrentApplicationVersionId|body|object|false|none|
|» VpcConfiguration|body|object|true|none|
|» » SubnetIds|body|object|true|none|
|» » SecurityGroupIds|body|object|true|none|
|» ConditionalToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.AddApplicationVpcConfiguration|

> Example responses

> 200 Response

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "VpcConfigurationDescription": {
    "VpcConfigurationId": {},
    "VpcId": {},
    "SubnetIds": {},
    "SecurityGroupIds": {}
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

<h3 id="addapplicationvpcconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddApplicationVpcConfigurationResponse](#schemaaddapplicationvpcconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|InvalidApplicationConfigurationException|[InvalidApplicationConfigurationException](#schemainvalidapplicationconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApplication

<a id="opIdCreateApplication"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.CreateApplication' \
  -d '{
    "ApplicationName": {},
    "ApplicationDescription": {},
    "RuntimeEnvironment": {},
    "ServiceExecutionRole": {},
    "ApplicationConfiguration": {
      "SqlApplicationConfiguration": {
        "Inputs": {},
        "Outputs": {},
        "ReferenceDataSources": {}
      },
      "FlinkApplicationConfiguration": {
        "CheckpointConfiguration": {
          "ConfigurationType": {},
          "CheckpointingEnabled": {},
          "CheckpointInterval": {},
          "MinPauseBetweenCheckpoints": {}
        },
        "MonitoringConfiguration": {
          "ConfigurationType": {},
          "MetricsLevel": {},
          "LogLevel": {}
        },
        "ParallelismConfiguration": {
          "ConfigurationType": {},
          "Parallelism": {},
          "ParallelismPerKPU": {},
          "AutoScalingEnabled": {}
        }
      },
      "EnvironmentProperties": {
        "PropertyGroups": {}
      },
      "ApplicationCodeConfiguration": {
        "CodeContent": {
          "TextContent": {},
          "ZipFileContent": {},
          "S3ContentLocation": {
            "BucketARN": {},
            "FileKey": {},
            "ObjectVersion": {}
          }
        },
        "CodeContentType": {}
      },
      "ApplicationSnapshotConfiguration": {
        "SnapshotsEnabled": {}
      },
      "VpcConfigurations": {},
      "ZeppelinApplicationConfiguration": {
        "MonitoringConfiguration": {
          "LogLevel": {}
        },
        "CatalogConfiguration": {
          "GlueDataCatalogConfiguration": {
            "DatabaseARN": {}
          }
        },
        "DeployAsApplicationConfiguration": {
          "S3ContentLocation": {
            "BucketARN": {},
            "BasePath": {}
          }
        },
        "CustomArtifactsConfiguration": {}
      }
    },
    "CloudWatchLoggingOptions": {},
    "Tags": {},
    "ApplicationMode": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication`

Creates a Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an Application</a>.

> Body parameter

```json
{
  "ApplicationName": {},
  "ApplicationDescription": {},
  "RuntimeEnvironment": {},
  "ServiceExecutionRole": {},
  "ApplicationConfiguration": {
    "SqlApplicationConfiguration": {
      "Inputs": {},
      "Outputs": {},
      "ReferenceDataSources": {}
    },
    "FlinkApplicationConfiguration": {
      "CheckpointConfiguration": {
        "ConfigurationType": {},
        "CheckpointingEnabled": {},
        "CheckpointInterval": {},
        "MinPauseBetweenCheckpoints": {}
      },
      "MonitoringConfiguration": {
        "ConfigurationType": {},
        "MetricsLevel": {},
        "LogLevel": {}
      },
      "ParallelismConfiguration": {
        "ConfigurationType": {},
        "Parallelism": {},
        "ParallelismPerKPU": {},
        "AutoScalingEnabled": {}
      }
    },
    "EnvironmentProperties": {
      "PropertyGroups": {}
    },
    "ApplicationCodeConfiguration": {
      "CodeContent": {
        "TextContent": {},
        "ZipFileContent": {},
        "S3ContentLocation": {
          "BucketARN": {},
          "FileKey": {},
          "ObjectVersion": {}
        }
      },
      "CodeContentType": {}
    },
    "ApplicationSnapshotConfiguration": {
      "SnapshotsEnabled": {}
    },
    "VpcConfigurations": {},
    "ZeppelinApplicationConfiguration": {
      "MonitoringConfiguration": {
        "LogLevel": {}
      },
      "CatalogConfiguration": {
        "GlueDataCatalogConfiguration": {
          "DatabaseARN": {}
        }
      },
      "DeployAsApplicationConfiguration": {
        "S3ContentLocation": {
          "BucketARN": {},
          "BasePath": {}
        }
      },
      "CustomArtifactsConfiguration": {}
    }
  },
  "CloudWatchLoggingOptions": {},
  "Tags": {},
  "ApplicationMode": {}
}
```

<h3 id="createapplication-parameters">Parameters</h3>

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
|body|body|[CreateApplicationRequest](#schemacreateapplicationrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» ApplicationDescription|body|object|false|none|
|» RuntimeEnvironment|body|object|true|none|
|» ServiceExecutionRole|body|object|true|none|
|» ApplicationConfiguration|body|object|false|none|
|» » SqlApplicationConfiguration|body|object|false|none|
|» » » Inputs|body|object|false|none|
|» » » Outputs|body|object|false|none|
|» » » ReferenceDataSources|body|object|false|none|
|» » FlinkApplicationConfiguration|body|object|false|none|
|» » » CheckpointConfiguration|body|object|false|none|
|» » » » ConfigurationType|body|object|true|none|
|» » » » CheckpointingEnabled|body|object|false|none|
|» » » » CheckpointInterval|body|object|false|none|
|» » » » MinPauseBetweenCheckpoints|body|object|false|none|
|» » » MonitoringConfiguration|body|object|false|none|
|» » » » ConfigurationType|body|object|true|none|
|» » » » MetricsLevel|body|object|false|none|
|» » » » LogLevel|body|object|false|none|
|» » » ParallelismConfiguration|body|object|false|none|
|» » » » ConfigurationType|body|object|true|none|
|» » » » Parallelism|body|object|false|none|
|» » » » ParallelismPerKPU|body|object|false|none|
|» » » » AutoScalingEnabled|body|object|false|none|
|» » EnvironmentProperties|body|object|false|none|
|» » » PropertyGroups|body|object|true|none|
|» » ApplicationCodeConfiguration|body|object|false|none|
|» » » CodeContent|body|object|false|none|
|» » » » TextContent|body|object|false|none|
|» » » » ZipFileContent|body|object|false|none|
|» » » » S3ContentLocation|body|object|false|none|
|» » » » » BucketARN|body|object|true|none|
|» » » » » FileKey|body|object|true|none|
|» » » » » ObjectVersion|body|object|false|none|
|» » » CodeContentType|body|object|true|none|
|» » ApplicationSnapshotConfiguration|body|object|false|none|
|» » » SnapshotsEnabled|body|object|true|none|
|» » VpcConfigurations|body|object|false|none|
|» » ZeppelinApplicationConfiguration|body|object|false|none|
|» » » MonitoringConfiguration|body|object|false|none|
|» » » » LogLevel|body|object|true|none|
|» » » CatalogConfiguration|body|object|false|none|
|» » » » GlueDataCatalogConfiguration|body|object|true|none|
|» » » » » DatabaseARN|body|object|true|none|
|» » » DeployAsApplicationConfiguration|body|object|false|none|
|» » » » S3ContentLocation|body|object|true|none|
|» » » » » BucketARN|body|object|true|none|
|» » » » » BasePath|body|object|false|none|
|» » » CustomArtifactsConfiguration|body|object|false|none|
|» CloudWatchLoggingOptions|body|object|false|none|
|» Tags|body|object|false|none|
|» ApplicationMode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.CreateApplication|

> Example responses

> 200 Response

```json
{
  "ApplicationDetail": {
    "ApplicationARN": {},
    "ApplicationDescription": {},
    "ApplicationName": {},
    "RuntimeEnvironment": {},
    "ServiceExecutionRole": {},
    "ApplicationStatus": {},
    "ApplicationVersionId": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "ApplicationConfigurationDescription": {
      "SqlApplicationConfigurationDescription": {
        "InputDescriptions": {},
        "OutputDescriptions": {},
        "ReferenceDataSourceDescriptions": {}
      },
      "ApplicationCodeConfigurationDescription": {
        "CodeContentType": {},
        "CodeContentDescription": {
          "TextContent": {},
          "CodeMD5": {},
          "CodeSize": {},
          "S3ApplicationCodeLocationDescription": {
            "BucketARN": {},
            "FileKey": {},
            "ObjectVersion": {}
          }
        }
      },
      "RunConfigurationDescription": {
        "ApplicationRestoreConfigurationDescription": {
          "ApplicationRestoreType": {},
          "SnapshotName": {}
        },
        "FlinkRunConfigurationDescription": {
          "AllowNonRestoredState": {}
        }
      },
      "FlinkApplicationConfigurationDescription": {
        "CheckpointConfigurationDescription": {
          "ConfigurationType": {},
          "CheckpointingEnabled": {},
          "CheckpointInterval": {},
          "MinPauseBetweenCheckpoints": {}
        },
        "MonitoringConfigurationDescription": {
          "ConfigurationType": {},
          "MetricsLevel": {},
          "LogLevel": {}
        },
        "ParallelismConfigurationDescription": {
          "ConfigurationType": {},
          "Parallelism": {},
          "ParallelismPerKPU": {},
          "CurrentParallelism": {},
          "AutoScalingEnabled": {}
        },
        "JobPlanDescription": {}
      },
      "EnvironmentPropertyDescriptions": {
        "PropertyGroupDescriptions": {}
      },
      "ApplicationSnapshotConfigurationDescription": {
        "SnapshotsEnabled": {}
      },
      "VpcConfigurationDescriptions": {},
      "ZeppelinApplicationConfigurationDescription": {
        "MonitoringConfigurationDescription": {
          "LogLevel": {}
        },
        "CatalogConfigurationDescription": {
          "GlueDataCatalogConfigurationDescription": {
            "DatabaseARN": {}
          }
        },
        "DeployAsApplicationConfigurationDescription": {
          "S3ContentLocationDescription": {
            "BucketARN": {},
            "BasePath": {}
          }
        },
        "CustomArtifactsConfigurationDescription": {}
      }
    },
    "CloudWatchLoggingOptionDescriptions": {},
    "ApplicationMaintenanceConfigurationDescription": {
      "ApplicationMaintenanceWindowStartTime": {},
      "ApplicationMaintenanceWindowEndTime": {}
    },
    "ApplicationVersionUpdatedFrom": {},
    "ApplicationVersionRolledBackFrom": {},
    "ConditionalToken": {},
    "ApplicationVersionRolledBackTo": {},
    "ApplicationMode": {}
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

<h3 id="createapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateApplicationResponse](#schemacreateapplicationresponse)|
|480|480|CodeValidationException|[CodeValidationException](#schemacodevalidationexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|485|485|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|486|486|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|487|487|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApplicationPresignedUrl

<a id="opIdCreateApplicationPresignedUrl"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.CreateApplicationPresignedUrl' \
  -d '{
    "ApplicationName": {},
    "UrlType": {},
    "SessionExpirationDurationInSeconds": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl`

<p>Creates and returns a URL that you can use to connect to an application's extension.</p> <p>The IAM role or user used to call this API defines the permissions to access the extension. After the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request that attempts to connect to the extension. </p> <p>You control the amount of time that the URL will be valid using the <code>SessionExpirationDurationInSeconds</code> parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.</p> <note> <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes to be valid. If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p> </note>

> Body parameter

```json
{
  "ApplicationName": {},
  "UrlType": {},
  "SessionExpirationDurationInSeconds": {}
}
```

<h3 id="createapplicationpresignedurl-parameters">Parameters</h3>

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
|body|body|[CreateApplicationPresignedUrlRequest](#schemacreateapplicationpresignedurlrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» UrlType|body|object|true|none|
|» SessionExpirationDurationInSeconds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.CreateApplicationPresignedUrl|

> Example responses

> 200 Response

```json
{
  "AuthorizedUrl": {}
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

<h3 id="createapplicationpresignedurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateApplicationPresignedUrlResponse](#schemacreateapplicationpresignedurlresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApplicationSnapshot

<a id="opIdCreateApplicationSnapshot"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.CreateApplicationSnapshot' \
  -d '{
    "ApplicationName": {},
    "SnapshotName": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot`

Creates a snapshot of the application's state data.

> Body parameter

```json
{
  "ApplicationName": {},
  "SnapshotName": {}
}
```

<h3 id="createapplicationsnapshot-parameters">Parameters</h3>

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
|body|body|[CreateApplicationSnapshotRequest](#schemacreateapplicationsnapshotrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» SnapshotName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.CreateApplicationSnapshot|

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

<h3 id="createapplicationsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateApplicationSnapshotResponse](#schemacreateapplicationsnapshotresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|486|486|InvalidApplicationConfigurationException|[InvalidApplicationConfigurationException](#schemainvalidapplicationconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplication

<a id="opIdDeleteApplication"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.DeleteApplication' \
  -d '{
    "ApplicationName": {},
    "CreateTimestamp": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication`

Deletes the specified application. Kinesis Data Analytics halts application execution and deletes the application.

> Body parameter

```json
{
  "ApplicationName": {},
  "CreateTimestamp": {}
}
```

<h3 id="deleteapplication-parameters">Parameters</h3>

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
|body|body|[DeleteApplicationRequest](#schemadeleteapplicationrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CreateTimestamp|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.DeleteApplication|

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

<h3 id="deleteapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationResponse](#schemadeleteapplicationresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|485|485|InvalidApplicationConfigurationException|[InvalidApplicationConfigurationException](#schemainvalidapplicationconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplicationCloudWatchLoggingOption

<a id="opIdDeleteApplicationCloudWatchLoggingOption"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "CloudWatchLoggingOptionId": {},
    "ConditionalToken": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption`

Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application. 

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "CloudWatchLoggingOptionId": {},
  "ConditionalToken": {}
}
```

<h3 id="deleteapplicationcloudwatchloggingoption-parameters">Parameters</h3>

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
|body|body|[DeleteApplicationCloudWatchLoggingOptionRequest](#schemadeleteapplicationcloudwatchloggingoptionrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CurrentApplicationVersionId|body|object|false|none|
|» CloudWatchLoggingOptionId|body|object|true|none|
|» ConditionalToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption|

> Example responses

> 200 Response

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "CloudWatchLoggingOptionDescriptions": {}
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

<h3 id="deleteapplicationcloudwatchloggingoption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationCloudWatchLoggingOptionResponse](#schemadeleteapplicationcloudwatchloggingoptionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|485|485|InvalidApplicationConfigurationException|[InvalidApplicationConfigurationException](#schemainvalidapplicationconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplicationInputProcessingConfiguration

<a id="opIdDeleteApplicationInputProcessingConfiguration"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "InputId": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration`

Deletes an <a>InputProcessingConfiguration</a> from an input.

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "InputId": {}
}
```

<h3 id="deleteapplicationinputprocessingconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteApplicationInputProcessingConfigurationRequest](#schemadeleteapplicationinputprocessingconfigurationrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CurrentApplicationVersionId|body|object|true|none|
|» InputId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration|

> Example responses

> 200 Response

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {}
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

<h3 id="deleteapplicationinputprocessingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationInputProcessingConfigurationResponse](#schemadeleteapplicationinputprocessingconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplicationOutput

<a id="opIdDeleteApplicationOutput"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.DeleteApplicationOutput' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "OutputId": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput`

Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "OutputId": {}
}
```

<h3 id="deleteapplicationoutput-parameters">Parameters</h3>

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
|body|body|[DeleteApplicationOutputRequest](#schemadeleteapplicationoutputrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CurrentApplicationVersionId|body|object|true|none|
|» OutputId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.DeleteApplicationOutput|

> Example responses

> 200 Response

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {}
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

<h3 id="deleteapplicationoutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationOutputResponse](#schemadeleteapplicationoutputresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplicationReferenceDataSource

<a id="opIdDeleteApplicationReferenceDataSource"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "ReferenceId": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource`

<p>Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration.</p> <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table that you created using the <a>AddApplicationReferenceDataSource</a> operation. </p>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "ReferenceId": {}
}
```

<h3 id="deleteapplicationreferencedatasource-parameters">Parameters</h3>

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
|body|body|[DeleteApplicationReferenceDataSourceRequest](#schemadeleteapplicationreferencedatasourcerequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CurrentApplicationVersionId|body|object|true|none|
|» ReferenceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource|

> Example responses

> 200 Response

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {}
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

<h3 id="deleteapplicationreferencedatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationReferenceDataSourceResponse](#schemadeleteapplicationreferencedatasourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplicationSnapshot

<a id="opIdDeleteApplicationSnapshot"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.DeleteApplicationSnapshot' \
  -d '{
    "ApplicationName": {},
    "SnapshotName": {},
    "SnapshotCreationTimestamp": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot`

Deletes a snapshot of application state.

> Body parameter

```json
{
  "ApplicationName": {},
  "SnapshotName": {},
  "SnapshotCreationTimestamp": {}
}
```

<h3 id="deleteapplicationsnapshot-parameters">Parameters</h3>

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
|body|body|[DeleteApplicationSnapshotRequest](#schemadeleteapplicationsnapshotrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» SnapshotName|body|object|true|none|
|» SnapshotCreationTimestamp|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.DeleteApplicationSnapshot|

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

<h3 id="deleteapplicationsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationSnapshotResponse](#schemadeleteapplicationsnapshotresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplicationVpcConfiguration

<a id="opIdDeleteApplicationVpcConfiguration"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "VpcConfigurationId": {},
    "ConditionalToken": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration`

Removes a VPC configuration from a Kinesis Data Analytics application.

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "VpcConfigurationId": {},
  "ConditionalToken": {}
}
```

<h3 id="deleteapplicationvpcconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteApplicationVpcConfigurationRequest](#schemadeleteapplicationvpcconfigurationrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CurrentApplicationVersionId|body|object|false|none|
|» VpcConfigurationId|body|object|true|none|
|» ConditionalToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration|

> Example responses

> 200 Response

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {}
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

<h3 id="deleteapplicationvpcconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationVpcConfigurationResponse](#schemadeleteapplicationvpcconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|InvalidApplicationConfigurationException|[InvalidApplicationConfigurationException](#schemainvalidapplicationconfigurationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeApplication

<a id="opIdDescribeApplication"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.DescribeApplication' \
  -d '{
    "ApplicationName": {},
    "IncludeAdditionalDetails": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication`

<p>Returns information about a specific Kinesis Data Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a>ListApplications</a> operation.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "IncludeAdditionalDetails": {}
}
```

<h3 id="describeapplication-parameters">Parameters</h3>

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
|body|body|[DescribeApplicationRequest](#schemadescribeapplicationrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» IncludeAdditionalDetails|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.DescribeApplication|

> Example responses

> 200 Response

```json
{
  "ApplicationDetail": {
    "ApplicationARN": {},
    "ApplicationDescription": {},
    "ApplicationName": {},
    "RuntimeEnvironment": {},
    "ServiceExecutionRole": {},
    "ApplicationStatus": {},
    "ApplicationVersionId": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "ApplicationConfigurationDescription": {
      "SqlApplicationConfigurationDescription": {
        "InputDescriptions": {},
        "OutputDescriptions": {},
        "ReferenceDataSourceDescriptions": {}
      },
      "ApplicationCodeConfigurationDescription": {
        "CodeContentType": {},
        "CodeContentDescription": {
          "TextContent": {},
          "CodeMD5": {},
          "CodeSize": {},
          "S3ApplicationCodeLocationDescription": {
            "BucketARN": {},
            "FileKey": {},
            "ObjectVersion": {}
          }
        }
      },
      "RunConfigurationDescription": {
        "ApplicationRestoreConfigurationDescription": {
          "ApplicationRestoreType": {},
          "SnapshotName": {}
        },
        "FlinkRunConfigurationDescription": {
          "AllowNonRestoredState": {}
        }
      },
      "FlinkApplicationConfigurationDescription": {
        "CheckpointConfigurationDescription": {
          "ConfigurationType": {},
          "CheckpointingEnabled": {},
          "CheckpointInterval": {},
          "MinPauseBetweenCheckpoints": {}
        },
        "MonitoringConfigurationDescription": {
          "ConfigurationType": {},
          "MetricsLevel": {},
          "LogLevel": {}
        },
        "ParallelismConfigurationDescription": {
          "ConfigurationType": {},
          "Parallelism": {},
          "ParallelismPerKPU": {},
          "CurrentParallelism": {},
          "AutoScalingEnabled": {}
        },
        "JobPlanDescription": {}
      },
      "EnvironmentPropertyDescriptions": {
        "PropertyGroupDescriptions": {}
      },
      "ApplicationSnapshotConfigurationDescription": {
        "SnapshotsEnabled": {}
      },
      "VpcConfigurationDescriptions": {},
      "ZeppelinApplicationConfigurationDescription": {
        "MonitoringConfigurationDescription": {
          "LogLevel": {}
        },
        "CatalogConfigurationDescription": {
          "GlueDataCatalogConfigurationDescription": {
            "DatabaseARN": {}
          }
        },
        "DeployAsApplicationConfigurationDescription": {
          "S3ContentLocationDescription": {
            "BucketARN": {},
            "BasePath": {}
          }
        },
        "CustomArtifactsConfigurationDescription": {}
      }
    },
    "CloudWatchLoggingOptionDescriptions": {},
    "ApplicationMaintenanceConfigurationDescription": {
      "ApplicationMaintenanceWindowStartTime": {},
      "ApplicationMaintenanceWindowEndTime": {}
    },
    "ApplicationVersionUpdatedFrom": {},
    "ApplicationVersionRolledBackFrom": {},
    "ConditionalToken": {},
    "ApplicationVersionRolledBackTo": {},
    "ApplicationMode": {}
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

<h3 id="describeapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeApplicationResponse](#schemadescribeapplicationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeApplicationSnapshot

<a id="opIdDescribeApplicationSnapshot"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.DescribeApplicationSnapshot' \
  -d '{
    "ApplicationName": {},
    "SnapshotName": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot`

Returns information about a snapshot of application state data.

> Body parameter

```json
{
  "ApplicationName": {},
  "SnapshotName": {}
}
```

<h3 id="describeapplicationsnapshot-parameters">Parameters</h3>

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
|body|body|[DescribeApplicationSnapshotRequest](#schemadescribeapplicationsnapshotrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» SnapshotName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.DescribeApplicationSnapshot|

> Example responses

> 200 Response

```json
{
  "SnapshotDetails": {
    "SnapshotName": {},
    "SnapshotStatus": {},
    "ApplicationVersionId": {},
    "SnapshotCreationTimestamp": {}
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

<h3 id="describeapplicationsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeApplicationSnapshotResponse](#schemadescribeapplicationsnapshotresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeApplicationVersion

<a id="opIdDescribeApplicationVersion"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.DescribeApplicationVersion' \
  -d '{
    "ApplicationName": {},
    "ApplicationVersionId": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion`

<p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

> Body parameter

```json
{
  "ApplicationName": {},
  "ApplicationVersionId": {}
}
```

<h3 id="describeapplicationversion-parameters">Parameters</h3>

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
|body|body|[DescribeApplicationVersionRequest](#schemadescribeapplicationversionrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» ApplicationVersionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.DescribeApplicationVersion|

> Example responses

> 200 Response

```json
{
  "ApplicationVersionDetail": {
    "ApplicationARN": {},
    "ApplicationDescription": {},
    "ApplicationName": {},
    "RuntimeEnvironment": {},
    "ServiceExecutionRole": {},
    "ApplicationStatus": {},
    "ApplicationVersionId": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "ApplicationConfigurationDescription": {
      "SqlApplicationConfigurationDescription": {
        "InputDescriptions": {},
        "OutputDescriptions": {},
        "ReferenceDataSourceDescriptions": {}
      },
      "ApplicationCodeConfigurationDescription": {
        "CodeContentType": {},
        "CodeContentDescription": {
          "TextContent": {},
          "CodeMD5": {},
          "CodeSize": {},
          "S3ApplicationCodeLocationDescription": {
            "BucketARN": {},
            "FileKey": {},
            "ObjectVersion": {}
          }
        }
      },
      "RunConfigurationDescription": {
        "ApplicationRestoreConfigurationDescription": {
          "ApplicationRestoreType": {},
          "SnapshotName": {}
        },
        "FlinkRunConfigurationDescription": {
          "AllowNonRestoredState": {}
        }
      },
      "FlinkApplicationConfigurationDescription": {
        "CheckpointConfigurationDescription": {
          "ConfigurationType": {},
          "CheckpointingEnabled": {},
          "CheckpointInterval": {},
          "MinPauseBetweenCheckpoints": {}
        },
        "MonitoringConfigurationDescription": {
          "ConfigurationType": {},
          "MetricsLevel": {},
          "LogLevel": {}
        },
        "ParallelismConfigurationDescription": {
          "ConfigurationType": {},
          "Parallelism": {},
          "ParallelismPerKPU": {},
          "CurrentParallelism": {},
          "AutoScalingEnabled": {}
        },
        "JobPlanDescription": {}
      },
      "EnvironmentPropertyDescriptions": {
        "PropertyGroupDescriptions": {}
      },
      "ApplicationSnapshotConfigurationDescription": {
        "SnapshotsEnabled": {}
      },
      "VpcConfigurationDescriptions": {},
      "ZeppelinApplicationConfigurationDescription": {
        "MonitoringConfigurationDescription": {
          "LogLevel": {}
        },
        "CatalogConfigurationDescription": {
          "GlueDataCatalogConfigurationDescription": {
            "DatabaseARN": {}
          }
        },
        "DeployAsApplicationConfigurationDescription": {
          "S3ContentLocationDescription": {
            "BucketARN": {},
            "BasePath": {}
          }
        },
        "CustomArtifactsConfigurationDescription": {}
      }
    },
    "CloudWatchLoggingOptionDescriptions": {},
    "ApplicationMaintenanceConfigurationDescription": {
      "ApplicationMaintenanceWindowStartTime": {},
      "ApplicationMaintenanceWindowEndTime": {}
    },
    "ApplicationVersionUpdatedFrom": {},
    "ApplicationVersionRolledBackFrom": {},
    "ConditionalToken": {},
    "ApplicationVersionRolledBackTo": {},
    "ApplicationMode": {}
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

<h3 id="describeapplicationversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeApplicationVersionResponse](#schemadescribeapplicationversionresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DiscoverInputSchema

<a id="opIdDiscoverInputSchema"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.DiscoverInputSchema' \
  -d '{
    "ResourceARN": {},
    "ServiceExecutionRole": {},
    "InputStartingPositionConfiguration": {
      "InputStartingPosition": {}
    },
    "S3Configuration": {
      "BucketARN": {},
      "FileKey": {}
    },
    "InputProcessingConfiguration": {
      "InputLambdaProcessor": {
        "ResourceARN": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema`

<p>Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose delivery stream) or Amazon S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. When you create an application using the Kinesis Data Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p>

> Body parameter

```json
{
  "ResourceARN": {},
  "ServiceExecutionRole": {},
  "InputStartingPositionConfiguration": {
    "InputStartingPosition": {}
  },
  "S3Configuration": {
    "BucketARN": {},
    "FileKey": {}
  },
  "InputProcessingConfiguration": {
    "InputLambdaProcessor": {
      "ResourceARN": {}
    }
  }
}
```

<h3 id="discoverinputschema-parameters">Parameters</h3>

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
|body|body|[DiscoverInputSchemaRequest](#schemadiscoverinputschemarequest)|true|none|
|» ResourceARN|body|object|false|none|
|» ServiceExecutionRole|body|object|true|none|
|» InputStartingPositionConfiguration|body|object|false|none|
|» » InputStartingPosition|body|object|false|none|
|» S3Configuration|body|object|false|none|
|» » BucketARN|body|object|true|none|
|» » FileKey|body|object|true|none|
|» InputProcessingConfiguration|body|object|false|none|
|» » InputLambdaProcessor|body|object|true|none|
|» » » ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.DiscoverInputSchema|

> Example responses

> 200 Response

```json
{
  "InputSchema": {
    "RecordFormat": {
      "RecordFormatType": {},
      "MappingParameters": {
        "JSONMappingParameters": {
          "RecordRowPath": {}
        },
        "CSVMappingParameters": {
          "RecordRowDelimiter": {},
          "RecordColumnDelimiter": {}
        }
      }
    },
    "RecordEncoding": {},
    "RecordColumns": {}
  },
  "ParsedInputRecords": {},
  "ProcessedInputRecords": {},
  "RawInputRecords": {}
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

<h3 id="discoverinputschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DiscoverInputSchemaResponse](#schemadiscoverinputschemaresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|UnableToDetectSchemaException|[UnableToDetectSchemaException](#schemaunabletodetectschemaexception)|
|482|482|ResourceProvisionedThroughputExceededException|[ResourceProvisionedThroughputExceededException](#schemaresourceprovisionedthroughputexceededexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApplicationSnapshots

<a id="opIdListApplicationSnapshots"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.ListApplicationSnapshots' \
  -d '{
    "ApplicationName": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots`

Lists information about the current application snapshots.

> Body parameter

```json
{
  "ApplicationName": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listapplicationsnapshots-parameters">Parameters</h3>

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
|body|body|[ListApplicationSnapshotsRequest](#schemalistapplicationsnapshotsrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.ListApplicationSnapshots|

> Example responses

> 200 Response

```json
{
  "SnapshotSummaries": {},
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

<h3 id="listapplicationsnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationSnapshotsResponse](#schemalistapplicationsnapshotsresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApplicationVersions

<a id="opIdListApplicationVersions"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.ListApplicationVersions' \
  -d '{
    "ApplicationName": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions`

<p>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration associated with each version.</p> <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

> Body parameter

```json
{
  "ApplicationName": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listapplicationversions-parameters">Parameters</h3>

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
|body|body|[ListApplicationVersionsRequest](#schemalistapplicationversionsrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.ListApplicationVersions|

> Example responses

> 200 Response

```json
{
  "ApplicationVersionSummaries": {},
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

<h3 id="listapplicationversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationVersionsResponse](#schemalistapplicationversionsresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApplications

<a id="opIdListApplications"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.ListApplications' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.ListApplications' \
  -d '{
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.ListApplications`

<p>Returns a list of Kinesis Data Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. </p> <p>If you want detailed information about a specific application, use <a>DescribeApplication</a>.</p>

> Body parameter

```json
{
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listapplications-parameters">Parameters</h3>

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
|body|body|[ListApplicationsRequest](#schemalistapplicationsrequest)|true|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.ListApplications|

> Example responses

> 200 Response

```json
{
  "ApplicationSummaries": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationsResponse](#schemalistapplicationsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource`

Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.

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
|X-Amz-Target|KinesisAnalytics_20180523.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RollbackApplication

<a id="opIdRollbackApplication"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.RollbackApplication' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication`

<p>Reverts the application to the previous running version. You can roll back an application if you suspect it is stuck in a transient status. </p> <p>You can roll back an application only if it is in the <code>UPDATING</code> or <code>AUTOSCALING</code> status.</p> <p>When you rollback an application, it loads state data from the last successful snapshot. If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p> <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {}
}
```

<h3 id="rollbackapplication-parameters">Parameters</h3>

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
|body|body|[RollbackApplicationRequest](#schemarollbackapplicationrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CurrentApplicationVersionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.RollbackApplication|

> Example responses

> 200 Response

```json
{
  "ApplicationDetail": {
    "ApplicationARN": {},
    "ApplicationDescription": {},
    "ApplicationName": {},
    "RuntimeEnvironment": {},
    "ServiceExecutionRole": {},
    "ApplicationStatus": {},
    "ApplicationVersionId": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "ApplicationConfigurationDescription": {
      "SqlApplicationConfigurationDescription": {
        "InputDescriptions": {},
        "OutputDescriptions": {},
        "ReferenceDataSourceDescriptions": {}
      },
      "ApplicationCodeConfigurationDescription": {
        "CodeContentType": {},
        "CodeContentDescription": {
          "TextContent": {},
          "CodeMD5": {},
          "CodeSize": {},
          "S3ApplicationCodeLocationDescription": {
            "BucketARN": {},
            "FileKey": {},
            "ObjectVersion": {}
          }
        }
      },
      "RunConfigurationDescription": {
        "ApplicationRestoreConfigurationDescription": {
          "ApplicationRestoreType": {},
          "SnapshotName": {}
        },
        "FlinkRunConfigurationDescription": {
          "AllowNonRestoredState": {}
        }
      },
      "FlinkApplicationConfigurationDescription": {
        "CheckpointConfigurationDescription": {
          "ConfigurationType": {},
          "CheckpointingEnabled": {},
          "CheckpointInterval": {},
          "MinPauseBetweenCheckpoints": {}
        },
        "MonitoringConfigurationDescription": {
          "ConfigurationType": {},
          "MetricsLevel": {},
          "LogLevel": {}
        },
        "ParallelismConfigurationDescription": {
          "ConfigurationType": {},
          "Parallelism": {},
          "ParallelismPerKPU": {},
          "CurrentParallelism": {},
          "AutoScalingEnabled": {}
        },
        "JobPlanDescription": {}
      },
      "EnvironmentPropertyDescriptions": {
        "PropertyGroupDescriptions": {}
      },
      "ApplicationSnapshotConfigurationDescription": {
        "SnapshotsEnabled": {}
      },
      "VpcConfigurationDescriptions": {},
      "ZeppelinApplicationConfigurationDescription": {
        "MonitoringConfigurationDescription": {
          "LogLevel": {}
        },
        "CatalogConfigurationDescription": {
          "GlueDataCatalogConfigurationDescription": {
            "DatabaseARN": {}
          }
        },
        "DeployAsApplicationConfigurationDescription": {
          "S3ContentLocationDescription": {
            "BucketARN": {},
            "BasePath": {}
          }
        },
        "CustomArtifactsConfigurationDescription": {}
      }
    },
    "CloudWatchLoggingOptionDescriptions": {},
    "ApplicationMaintenanceConfigurationDescription": {
      "ApplicationMaintenanceWindowStartTime": {},
      "ApplicationMaintenanceWindowEndTime": {}
    },
    "ApplicationVersionUpdatedFrom": {},
    "ApplicationVersionRolledBackFrom": {},
    "ConditionalToken": {},
    "ApplicationVersionRolledBackTo": {},
    "ApplicationMode": {}
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

<h3 id="rollbackapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RollbackApplicationResponse](#schemarollbackapplicationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartApplication

<a id="opIdStartApplication"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.StartApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.StartApplication' \
  -d '{
    "ApplicationName": {},
    "RunConfiguration": {
      "FlinkRunConfiguration": {
        "AllowNonRestoredState": {}
      },
      "SqlRunConfigurations": {},
      "ApplicationRestoreConfiguration": {
        "ApplicationRestoreType": {},
        "SnapshotName": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.StartApplication`

Starts the specified Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to start your application.

> Body parameter

```json
{
  "ApplicationName": {},
  "RunConfiguration": {
    "FlinkRunConfiguration": {
      "AllowNonRestoredState": {}
    },
    "SqlRunConfigurations": {},
    "ApplicationRestoreConfiguration": {
      "ApplicationRestoreType": {},
      "SnapshotName": {}
    }
  }
}
```

<h3 id="startapplication-parameters">Parameters</h3>

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
|body|body|[StartApplicationRequest](#schemastartapplicationrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» RunConfiguration|body|object|false|none|
|» » FlinkRunConfiguration|body|object|false|none|
|» » » AllowNonRestoredState|body|object|false|none|
|» » SqlRunConfigurations|body|object|false|none|
|» » ApplicationRestoreConfiguration|body|object|false|none|
|» » » ApplicationRestoreType|body|object|true|none|
|» » » SnapshotName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.StartApplication|

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

<h3 id="startapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartApplicationResponse](#schemastartapplicationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|InvalidApplicationConfigurationException|[InvalidApplicationConfigurationException](#schemainvalidapplicationconfigurationexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopApplication

<a id="opIdStopApplication"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.StopApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.StopApplication' \
  -d '{
    "ApplicationName": {},
    "Force": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.StopApplication`

<p>Stops the application from processing data. You can stop an application only if it is in the running status, unless you set the <code>Force</code> parameter to <code>true</code>.</p> <p>You can use the <a>DescribeApplication</a> operation to find the application status. </p> <p>Kinesis Data Analytics takes a snapshot when the application is stopped, unless <code>Force</code> is set to <code>true</code>.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "Force": {}
}
```

<h3 id="stopapplication-parameters">Parameters</h3>

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
|body|body|[StopApplicationRequest](#schemastopapplicationrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» Force|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.StopApplication|

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

<h3 id="stopapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopApplicationResponse](#schemastopapplicationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidApplicationConfigurationException|[InvalidApplicationConfigurationException](#schemainvalidapplicationconfigurationexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.TagResource`

Adds one or more key-value tags to a Kinesis Data Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.

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
|X-Amz-Target|KinesisAnalytics_20180523.TagResource|

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
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.UntagResource`

Removes one or more tags from a Kinesis Data Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.

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
|X-Amz-Target|KinesisAnalytics_20180523.UntagResource|

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
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApplication

<a id="opIdUpdateApplication"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.UpdateApplication' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "ApplicationConfigurationUpdate": {
      "SqlApplicationConfigurationUpdate": {
        "InputUpdates": {},
        "OutputUpdates": {},
        "ReferenceDataSourceUpdates": {}
      },
      "ApplicationCodeConfigurationUpdate": {
        "CodeContentTypeUpdate": {},
        "CodeContentUpdate": {
          "TextContentUpdate": {},
          "ZipFileContentUpdate": {},
          "S3ContentLocationUpdate": {
            "BucketARNUpdate": {},
            "FileKeyUpdate": {},
            "ObjectVersionUpdate": {}
          }
        }
      },
      "FlinkApplicationConfigurationUpdate": {
        "CheckpointConfigurationUpdate": {
          "ConfigurationTypeUpdate": {},
          "CheckpointingEnabledUpdate": {},
          "CheckpointIntervalUpdate": {},
          "MinPauseBetweenCheckpointsUpdate": {}
        },
        "MonitoringConfigurationUpdate": {
          "ConfigurationTypeUpdate": {},
          "MetricsLevelUpdate": {},
          "LogLevelUpdate": {}
        },
        "ParallelismConfigurationUpdate": {
          "ConfigurationTypeUpdate": {},
          "ParallelismUpdate": {},
          "ParallelismPerKPUUpdate": {},
          "AutoScalingEnabledUpdate": {}
        }
      },
      "EnvironmentPropertyUpdates": {
        "PropertyGroups": {}
      },
      "ApplicationSnapshotConfigurationUpdate": {
        "SnapshotsEnabledUpdate": {}
      },
      "VpcConfigurationUpdates": {},
      "ZeppelinApplicationConfigurationUpdate": {
        "MonitoringConfigurationUpdate": {
          "LogLevelUpdate": {}
        },
        "CatalogConfigurationUpdate": {
          "GlueDataCatalogConfigurationUpdate": {
            "DatabaseARNUpdate": {}
          }
        },
        "DeployAsApplicationConfigurationUpdate": {
          "S3ContentLocationUpdate": {
            "BucketARNUpdate": {},
            "BasePathUpdate": {}
          }
        },
        "CustomArtifactsConfigurationUpdate": {}
      }
    },
    "ServiceExecutionRoleUpdate": {},
    "RunConfigurationUpdate": {
      "FlinkRunConfiguration": {
        "AllowNonRestoredState": {}
      },
      "ApplicationRestoreConfiguration": {
        "ApplicationRestoreType": {},
        "SnapshotName": {}
      }
    },
    "CloudWatchLoggingOptionUpdates": {},
    "ConditionalToken": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication`

<p>Updates an existing Kinesis Data Analytics application. Using this operation, you can update application code, input configuration, and output configuration. </p> <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update your application. </p> <note> <p>You cannot update the <code>RuntimeEnvironment</code> of an existing application. If you need to update an application's <code>RuntimeEnvironment</code>, you must delete the application and create it again.</p> </note>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "ApplicationConfigurationUpdate": {
    "SqlApplicationConfigurationUpdate": {
      "InputUpdates": {},
      "OutputUpdates": {},
      "ReferenceDataSourceUpdates": {}
    },
    "ApplicationCodeConfigurationUpdate": {
      "CodeContentTypeUpdate": {},
      "CodeContentUpdate": {
        "TextContentUpdate": {},
        "ZipFileContentUpdate": {},
        "S3ContentLocationUpdate": {
          "BucketARNUpdate": {},
          "FileKeyUpdate": {},
          "ObjectVersionUpdate": {}
        }
      }
    },
    "FlinkApplicationConfigurationUpdate": {
      "CheckpointConfigurationUpdate": {
        "ConfigurationTypeUpdate": {},
        "CheckpointingEnabledUpdate": {},
        "CheckpointIntervalUpdate": {},
        "MinPauseBetweenCheckpointsUpdate": {}
      },
      "MonitoringConfigurationUpdate": {
        "ConfigurationTypeUpdate": {},
        "MetricsLevelUpdate": {},
        "LogLevelUpdate": {}
      },
      "ParallelismConfigurationUpdate": {
        "ConfigurationTypeUpdate": {},
        "ParallelismUpdate": {},
        "ParallelismPerKPUUpdate": {},
        "AutoScalingEnabledUpdate": {}
      }
    },
    "EnvironmentPropertyUpdates": {
      "PropertyGroups": {}
    },
    "ApplicationSnapshotConfigurationUpdate": {
      "SnapshotsEnabledUpdate": {}
    },
    "VpcConfigurationUpdates": {},
    "ZeppelinApplicationConfigurationUpdate": {
      "MonitoringConfigurationUpdate": {
        "LogLevelUpdate": {}
      },
      "CatalogConfigurationUpdate": {
        "GlueDataCatalogConfigurationUpdate": {
          "DatabaseARNUpdate": {}
        }
      },
      "DeployAsApplicationConfigurationUpdate": {
        "S3ContentLocationUpdate": {
          "BucketARNUpdate": {},
          "BasePathUpdate": {}
        }
      },
      "CustomArtifactsConfigurationUpdate": {}
    }
  },
  "ServiceExecutionRoleUpdate": {},
  "RunConfigurationUpdate": {
    "FlinkRunConfiguration": {
      "AllowNonRestoredState": {}
    },
    "ApplicationRestoreConfiguration": {
      "ApplicationRestoreType": {},
      "SnapshotName": {}
    }
  },
  "CloudWatchLoggingOptionUpdates": {},
  "ConditionalToken": {}
}
```

<h3 id="updateapplication-parameters">Parameters</h3>

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
|body|body|[UpdateApplicationRequest](#schemaupdateapplicationrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» CurrentApplicationVersionId|body|object|false|none|
|» ApplicationConfigurationUpdate|body|object|false|none|
|» » SqlApplicationConfigurationUpdate|body|object|false|none|
|» » » InputUpdates|body|object|false|none|
|» » » OutputUpdates|body|object|false|none|
|» » » ReferenceDataSourceUpdates|body|object|false|none|
|» » ApplicationCodeConfigurationUpdate|body|object|false|none|
|» » » CodeContentTypeUpdate|body|object|false|none|
|» » » CodeContentUpdate|body|object|false|none|
|» » » » TextContentUpdate|body|object|false|none|
|» » » » ZipFileContentUpdate|body|object|false|none|
|» » » » S3ContentLocationUpdate|body|object|false|none|
|» » » » » BucketARNUpdate|body|object|false|none|
|» » » » » FileKeyUpdate|body|object|false|none|
|» » » » » ObjectVersionUpdate|body|object|false|none|
|» » FlinkApplicationConfigurationUpdate|body|object|false|none|
|» » » CheckpointConfigurationUpdate|body|object|false|none|
|» » » » ConfigurationTypeUpdate|body|object|false|none|
|» » » » CheckpointingEnabledUpdate|body|object|false|none|
|» » » » CheckpointIntervalUpdate|body|object|false|none|
|» » » » MinPauseBetweenCheckpointsUpdate|body|object|false|none|
|» » » MonitoringConfigurationUpdate|body|object|false|none|
|» » » » ConfigurationTypeUpdate|body|object|false|none|
|» » » » MetricsLevelUpdate|body|object|false|none|
|» » » » LogLevelUpdate|body|object|false|none|
|» » » ParallelismConfigurationUpdate|body|object|false|none|
|» » » » ConfigurationTypeUpdate|body|object|false|none|
|» » » » ParallelismUpdate|body|object|false|none|
|» » » » ParallelismPerKPUUpdate|body|object|false|none|
|» » » » AutoScalingEnabledUpdate|body|object|false|none|
|» » EnvironmentPropertyUpdates|body|object|false|none|
|» » » PropertyGroups|body|object|true|none|
|» » ApplicationSnapshotConfigurationUpdate|body|object|false|none|
|» » » SnapshotsEnabledUpdate|body|object|true|none|
|» » VpcConfigurationUpdates|body|object|false|none|
|» » ZeppelinApplicationConfigurationUpdate|body|object|false|none|
|» » » MonitoringConfigurationUpdate|body|object|false|none|
|» » » » LogLevelUpdate|body|object|true|none|
|» » » CatalogConfigurationUpdate|body|object|false|none|
|» » » » GlueDataCatalogConfigurationUpdate|body|object|true|none|
|» » » » » DatabaseARNUpdate|body|object|true|none|
|» » » DeployAsApplicationConfigurationUpdate|body|[DeployAsApplicationConfigurationUpdate](#schemadeployasapplicationconfigurationupdate)|false|Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.|
|» » » CustomArtifactsConfigurationUpdate|body|object|false|none|
|» ServiceExecutionRoleUpdate|body|object|false|none|
|» RunConfigurationUpdate|body|object|false|none|
|» » FlinkRunConfiguration|body|object|false|none|
|» » » AllowNonRestoredState|body|object|false|none|
|» » ApplicationRestoreConfiguration|body|object|false|none|
|» » » ApplicationRestoreType|body|object|true|none|
|» » » SnapshotName|body|object|false|none|
|» CloudWatchLoggingOptionUpdates|body|object|false|none|
|» ConditionalToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.UpdateApplication|

> Example responses

> 200 Response

```json
{
  "ApplicationDetail": {
    "ApplicationARN": {},
    "ApplicationDescription": {},
    "ApplicationName": {},
    "RuntimeEnvironment": {},
    "ServiceExecutionRole": {},
    "ApplicationStatus": {},
    "ApplicationVersionId": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "ApplicationConfigurationDescription": {
      "SqlApplicationConfigurationDescription": {
        "InputDescriptions": {},
        "OutputDescriptions": {},
        "ReferenceDataSourceDescriptions": {}
      },
      "ApplicationCodeConfigurationDescription": {
        "CodeContentType": {},
        "CodeContentDescription": {
          "TextContent": {},
          "CodeMD5": {},
          "CodeSize": {},
          "S3ApplicationCodeLocationDescription": {
            "BucketARN": {},
            "FileKey": {},
            "ObjectVersion": {}
          }
        }
      },
      "RunConfigurationDescription": {
        "ApplicationRestoreConfigurationDescription": {
          "ApplicationRestoreType": {},
          "SnapshotName": {}
        },
        "FlinkRunConfigurationDescription": {
          "AllowNonRestoredState": {}
        }
      },
      "FlinkApplicationConfigurationDescription": {
        "CheckpointConfigurationDescription": {
          "ConfigurationType": {},
          "CheckpointingEnabled": {},
          "CheckpointInterval": {},
          "MinPauseBetweenCheckpoints": {}
        },
        "MonitoringConfigurationDescription": {
          "ConfigurationType": {},
          "MetricsLevel": {},
          "LogLevel": {}
        },
        "ParallelismConfigurationDescription": {
          "ConfigurationType": {},
          "Parallelism": {},
          "ParallelismPerKPU": {},
          "CurrentParallelism": {},
          "AutoScalingEnabled": {}
        },
        "JobPlanDescription": {}
      },
      "EnvironmentPropertyDescriptions": {
        "PropertyGroupDescriptions": {}
      },
      "ApplicationSnapshotConfigurationDescription": {
        "SnapshotsEnabled": {}
      },
      "VpcConfigurationDescriptions": {},
      "ZeppelinApplicationConfigurationDescription": {
        "MonitoringConfigurationDescription": {
          "LogLevel": {}
        },
        "CatalogConfigurationDescription": {
          "GlueDataCatalogConfigurationDescription": {
            "DatabaseARN": {}
          }
        },
        "DeployAsApplicationConfigurationDescription": {
          "S3ContentLocationDescription": {
            "BucketARN": {},
            "BasePath": {}
          }
        },
        "CustomArtifactsConfigurationDescription": {}
      }
    },
    "CloudWatchLoggingOptionDescriptions": {},
    "ApplicationMaintenanceConfigurationDescription": {
      "ApplicationMaintenanceWindowStartTime": {},
      "ApplicationMaintenanceWindowEndTime": {}
    },
    "ApplicationVersionUpdatedFrom": {},
    "ApplicationVersionRolledBackFrom": {},
    "ConditionalToken": {},
    "ApplicationVersionRolledBackTo": {},
    "ApplicationMode": {}
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

<h3 id="updateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApplicationResponse](#schemaupdateapplicationresponse)|
|480|480|CodeValidationException|[CodeValidationException](#schemacodevalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|486|486|InvalidApplicationConfigurationException|[InvalidApplicationConfigurationException](#schemainvalidapplicationconfigurationexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApplicationMaintenanceConfiguration

<a id="opIdUpdateApplicationMaintenanceConfiguration"></a>

> Code samples

```bash
curl 'https://kinesisanalyticsv2.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration' \
  -d '{
    "ApplicationName": {},
    "ApplicationMaintenanceConfigurationUpdate": {
      "ApplicationMaintenanceWindowStartTimeUpdate": {}
    }
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration`

<p>Updates the maintenance configuration of the Kinesis Data Analytics application. </p> <p>You can invoke this operation on an application that is in one of the two following states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is in a state other than these two states, it throws a <code>ResourceInUseException</code>. The service makes use of the updated configuration the next time it schedules maintenance for the application. If you invoke this operation after the service schedules maintenance, the service will apply the configuration update the next time it schedules maintenance for the application. This means that you might not see the maintenance configuration update applied to the maintenance process that follows a successful invocation of this operation, but to the following maintenance process instead.</p> <p>To see the current maintenance configuration of your application, invoke the <a>DescribeApplication</a> operation.</p> <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

> Body parameter

```json
{
  "ApplicationName": {},
  "ApplicationMaintenanceConfigurationUpdate": {
    "ApplicationMaintenanceWindowStartTimeUpdate": {}
  }
}
```

<h3 id="updateapplicationmaintenanceconfiguration-parameters">Parameters</h3>

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
|body|body|[UpdateApplicationMaintenanceConfigurationRequest](#schemaupdateapplicationmaintenanceconfigurationrequest)|true|none|
|» ApplicationName|body|object|true|none|
|» ApplicationMaintenanceConfigurationUpdate|body|object|true|none|
|» » ApplicationMaintenanceWindowStartTimeUpdate|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration|

> Example responses

> 200 Response

```json
{
  "ApplicationARN": {},
  "ApplicationMaintenanceConfigurationDescription": {
    "ApplicationMaintenanceWindowStartTime": {},
    "ApplicationMaintenanceWindowEndTime": {}
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

<h3 id="updateapplicationmaintenanceconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApplicationMaintenanceConfigurationResponse](#schemaupdateapplicationmaintenanceconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AddApplicationCloudWatchLoggingOptionResponse">AddApplicationCloudWatchLoggingOptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddapplicationcloudwatchloggingoptionresponse"></a>
<a id="schema_AddApplicationCloudWatchLoggingOptionResponse"></a>
<a id="tocSaddapplicationcloudwatchloggingoptionresponse"></a>
<a id="tocsaddapplicationcloudwatchloggingoptionresponse"></a>

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "CloudWatchLoggingOptionDescriptions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationARN|object|false|none|none|
|ApplicationVersionId|object|false|none|none|
|CloudWatchLoggingOptionDescriptions|object|false|none|none|

<h2 id="tocS_AddApplicationCloudWatchLoggingOptionRequest">AddApplicationCloudWatchLoggingOptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddapplicationcloudwatchloggingoptionrequest"></a>
<a id="schema_AddApplicationCloudWatchLoggingOptionRequest"></a>
<a id="tocSaddapplicationcloudwatchloggingoptionrequest"></a>
<a id="tocsaddapplicationcloudwatchloggingoptionrequest"></a>

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "CloudWatchLoggingOption": {
    "LogStreamARN": {}
  },
  "ConditionalToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|false|none|none|
|CloudWatchLoggingOption|object|true|none|none|
|ConditionalToken|object|false|none|none|

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

<h2 id="tocS_InvalidArgumentException">InvalidArgumentException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidargumentexception"></a>
<a id="schema_InvalidArgumentException"></a>
<a id="tocSinvalidargumentexception"></a>
<a id="tocsinvalidargumentexception"></a>

```json
null
```

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

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

<h2 id="tocS_InvalidApplicationConfigurationException">InvalidApplicationConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidapplicationconfigurationexception"></a>
<a id="schema_InvalidApplicationConfigurationException"></a>
<a id="tocSinvalidapplicationconfigurationexception"></a>
<a id="tocsinvalidapplicationconfigurationexception"></a>

```json
null
```

<h2 id="tocS_AddApplicationInputResponse">AddApplicationInputResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddapplicationinputresponse"></a>
<a id="schema_AddApplicationInputResponse"></a>
<a id="tocSaddapplicationinputresponse"></a>
<a id="tocsaddapplicationinputresponse"></a>

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "InputDescriptions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationARN|object|false|none|none|
|ApplicationVersionId|object|false|none|none|
|InputDescriptions|object|false|none|none|

<h2 id="tocS_AddApplicationInputRequest">AddApplicationInputRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddapplicationinputrequest"></a>
<a id="schema_AddApplicationInputRequest"></a>
<a id="tocSaddapplicationinputrequest"></a>
<a id="tocsaddapplicationinputrequest"></a>

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "Input": {
    "NamePrefix": {},
    "InputProcessingConfiguration": {
      "InputLambdaProcessor": {
        "ResourceARN": {}
      }
    },
    "KinesisStreamsInput": {
      "ResourceARN": {}
    },
    "KinesisFirehoseInput": {
      "ResourceARN": {}
    },
    "InputParallelism": {
      "Count": {}
    },
    "InputSchema": {
      "RecordFormat": {
        "RecordFormatType": {},
        "MappingParameters": {
          "JSONMappingParameters": {
            "RecordRowPath": {}
          },
          "CSVMappingParameters": {
            "RecordRowDelimiter": {},
            "RecordColumnDelimiter": {}
          }
        }
      },
      "RecordEncoding": {},
      "RecordColumns": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|true|none|none|
|Input|object|true|none|none|

<h2 id="tocS_CodeValidationException">CodeValidationException</h2>
<!-- backwards compatibility -->
<a id="schemacodevalidationexception"></a>
<a id="schema_CodeValidationException"></a>
<a id="tocScodevalidationexception"></a>
<a id="tocscodevalidationexception"></a>

```json
null
```

<h2 id="tocS_AddApplicationInputProcessingConfigurationResponse">AddApplicationInputProcessingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddapplicationinputprocessingconfigurationresponse"></a>
<a id="schema_AddApplicationInputProcessingConfigurationResponse"></a>
<a id="tocSaddapplicationinputprocessingconfigurationresponse"></a>
<a id="tocsaddapplicationinputprocessingconfigurationresponse"></a>

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "InputId": {},
  "InputProcessingConfigurationDescription": {
    "InputLambdaProcessorDescription": {
      "ResourceARN": {},
      "RoleARN": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationARN|object|false|none|none|
|ApplicationVersionId|object|false|none|none|
|InputId|object|false|none|none|
|InputProcessingConfigurationDescription|object|false|none|none|

<h2 id="tocS_AddApplicationInputProcessingConfigurationRequest">AddApplicationInputProcessingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddapplicationinputprocessingconfigurationrequest"></a>
<a id="schema_AddApplicationInputProcessingConfigurationRequest"></a>
<a id="tocSaddapplicationinputprocessingconfigurationrequest"></a>
<a id="tocsaddapplicationinputprocessingconfigurationrequest"></a>

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "InputId": {},
  "InputProcessingConfiguration": {
    "InputLambdaProcessor": {
      "ResourceARN": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|true|none|none|
|InputId|object|true|none|none|
|InputProcessingConfiguration|object|true|none|none|

<h2 id="tocS_AddApplicationOutputResponse">AddApplicationOutputResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddapplicationoutputresponse"></a>
<a id="schema_AddApplicationOutputResponse"></a>
<a id="tocSaddapplicationoutputresponse"></a>
<a id="tocsaddapplicationoutputresponse"></a>

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "OutputDescriptions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationARN|object|false|none|none|
|ApplicationVersionId|object|false|none|none|
|OutputDescriptions|object|false|none|none|

<h2 id="tocS_AddApplicationOutputRequest">AddApplicationOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddapplicationoutputrequest"></a>
<a id="schema_AddApplicationOutputRequest"></a>
<a id="tocSaddapplicationoutputrequest"></a>
<a id="tocsaddapplicationoutputrequest"></a>

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "Output": {
    "Name": {},
    "KinesisStreamsOutput": {
      "ResourceARN": {}
    },
    "KinesisFirehoseOutput": {
      "ResourceARN": {}
    },
    "LambdaOutput": {
      "ResourceARN": {}
    },
    "DestinationSchema": {
      "RecordFormatType": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|true|none|none|
|Output|object|true|none|none|

<h2 id="tocS_AddApplicationReferenceDataSourceResponse">AddApplicationReferenceDataSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddapplicationreferencedatasourceresponse"></a>
<a id="schema_AddApplicationReferenceDataSourceResponse"></a>
<a id="tocSaddapplicationreferencedatasourceresponse"></a>
<a id="tocsaddapplicationreferencedatasourceresponse"></a>

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "ReferenceDataSourceDescriptions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationARN|object|false|none|none|
|ApplicationVersionId|object|false|none|none|
|ReferenceDataSourceDescriptions|object|false|none|none|

<h2 id="tocS_AddApplicationReferenceDataSourceRequest">AddApplicationReferenceDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddapplicationreferencedatasourcerequest"></a>
<a id="schema_AddApplicationReferenceDataSourceRequest"></a>
<a id="tocSaddapplicationreferencedatasourcerequest"></a>
<a id="tocsaddapplicationreferencedatasourcerequest"></a>

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "ReferenceDataSource": {
    "TableName": {},
    "S3ReferenceDataSource": {
      "BucketARN": {},
      "FileKey": {}
    },
    "ReferenceSchema": {
      "RecordFormat": {
        "RecordFormatType": {},
        "MappingParameters": {
          "JSONMappingParameters": {
            "RecordRowPath": {}
          },
          "CSVMappingParameters": {
            "RecordRowDelimiter": {},
            "RecordColumnDelimiter": {}
          }
        }
      },
      "RecordEncoding": {},
      "RecordColumns": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|true|none|none|
|ReferenceDataSource|object|true|none|none|

<h2 id="tocS_AddApplicationVpcConfigurationResponse">AddApplicationVpcConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddapplicationvpcconfigurationresponse"></a>
<a id="schema_AddApplicationVpcConfigurationResponse"></a>
<a id="tocSaddapplicationvpcconfigurationresponse"></a>
<a id="tocsaddapplicationvpcconfigurationresponse"></a>

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "VpcConfigurationDescription": {
    "VpcConfigurationId": {},
    "VpcId": {},
    "SubnetIds": {},
    "SecurityGroupIds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationARN|object|false|none|none|
|ApplicationVersionId|object|false|none|none|
|VpcConfigurationDescription|object|false|none|none|

<h2 id="tocS_AddApplicationVpcConfigurationRequest">AddApplicationVpcConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddapplicationvpcconfigurationrequest"></a>
<a id="schema_AddApplicationVpcConfigurationRequest"></a>
<a id="tocSaddapplicationvpcconfigurationrequest"></a>
<a id="tocsaddapplicationvpcconfigurationrequest"></a>

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "VpcConfiguration": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "ConditionalToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|false|none|none|
|VpcConfiguration|object|true|none|none|
|ConditionalToken|object|false|none|none|

<h2 id="tocS_CreateApplicationResponse">CreateApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationresponse"></a>
<a id="schema_CreateApplicationResponse"></a>
<a id="tocScreateapplicationresponse"></a>
<a id="tocscreateapplicationresponse"></a>

```json
{
  "ApplicationDetail": {
    "ApplicationARN": {},
    "ApplicationDescription": {},
    "ApplicationName": {},
    "RuntimeEnvironment": {},
    "ServiceExecutionRole": {},
    "ApplicationStatus": {},
    "ApplicationVersionId": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "ApplicationConfigurationDescription": {
      "SqlApplicationConfigurationDescription": {
        "InputDescriptions": {},
        "OutputDescriptions": {},
        "ReferenceDataSourceDescriptions": {}
      },
      "ApplicationCodeConfigurationDescription": {
        "CodeContentType": {},
        "CodeContentDescription": {
          "TextContent": {},
          "CodeMD5": {},
          "CodeSize": {},
          "S3ApplicationCodeLocationDescription": {
            "BucketARN": {},
            "FileKey": {},
            "ObjectVersion": {}
          }
        }
      },
      "RunConfigurationDescription": {
        "ApplicationRestoreConfigurationDescription": {
          "ApplicationRestoreType": {},
          "SnapshotName": {}
        },
        "FlinkRunConfigurationDescription": {
          "AllowNonRestoredState": {}
        }
      },
      "FlinkApplicationConfigurationDescription": {
        "CheckpointConfigurationDescription": {
          "ConfigurationType": {},
          "CheckpointingEnabled": {},
          "CheckpointInterval": {},
          "MinPauseBetweenCheckpoints": {}
        },
        "MonitoringConfigurationDescription": {
          "ConfigurationType": {},
          "MetricsLevel": {},
          "LogLevel": {}
        },
        "ParallelismConfigurationDescription": {
          "ConfigurationType": {},
          "Parallelism": {},
          "ParallelismPerKPU": {},
          "CurrentParallelism": {},
          "AutoScalingEnabled": {}
        },
        "JobPlanDescription": {}
      },
      "EnvironmentPropertyDescriptions": {
        "PropertyGroupDescriptions": {}
      },
      "ApplicationSnapshotConfigurationDescription": {
        "SnapshotsEnabled": {}
      },
      "VpcConfigurationDescriptions": {},
      "ZeppelinApplicationConfigurationDescription": {
        "MonitoringConfigurationDescription": {
          "LogLevel": {}
        },
        "CatalogConfigurationDescription": {
          "GlueDataCatalogConfigurationDescription": {
            "DatabaseARN": {}
          }
        },
        "DeployAsApplicationConfigurationDescription": {
          "S3ContentLocationDescription": {
            "BucketARN": {},
            "BasePath": {}
          }
        },
        "CustomArtifactsConfigurationDescription": {}
      }
    },
    "CloudWatchLoggingOptionDescriptions": {},
    "ApplicationMaintenanceConfigurationDescription": {
      "ApplicationMaintenanceWindowStartTime": {},
      "ApplicationMaintenanceWindowEndTime": {}
    },
    "ApplicationVersionUpdatedFrom": {},
    "ApplicationVersionRolledBackFrom": {},
    "ConditionalToken": {},
    "ApplicationVersionRolledBackTo": {},
    "ApplicationMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationDetail|object|true|none|none|

<h2 id="tocS_CreateApplicationRequest">CreateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationrequest"></a>
<a id="schema_CreateApplicationRequest"></a>
<a id="tocScreateapplicationrequest"></a>
<a id="tocscreateapplicationrequest"></a>

```json
{
  "ApplicationName": {},
  "ApplicationDescription": {},
  "RuntimeEnvironment": {},
  "ServiceExecutionRole": {},
  "ApplicationConfiguration": {
    "SqlApplicationConfiguration": {
      "Inputs": {},
      "Outputs": {},
      "ReferenceDataSources": {}
    },
    "FlinkApplicationConfiguration": {
      "CheckpointConfiguration": {
        "ConfigurationType": {},
        "CheckpointingEnabled": {},
        "CheckpointInterval": {},
        "MinPauseBetweenCheckpoints": {}
      },
      "MonitoringConfiguration": {
        "ConfigurationType": {},
        "MetricsLevel": {},
        "LogLevel": {}
      },
      "ParallelismConfiguration": {
        "ConfigurationType": {},
        "Parallelism": {},
        "ParallelismPerKPU": {},
        "AutoScalingEnabled": {}
      }
    },
    "EnvironmentProperties": {
      "PropertyGroups": {}
    },
    "ApplicationCodeConfiguration": {
      "CodeContent": {
        "TextContent": {},
        "ZipFileContent": {},
        "S3ContentLocation": {
          "BucketARN": {},
          "FileKey": {},
          "ObjectVersion": {}
        }
      },
      "CodeContentType": {}
    },
    "ApplicationSnapshotConfiguration": {
      "SnapshotsEnabled": {}
    },
    "VpcConfigurations": {},
    "ZeppelinApplicationConfiguration": {
      "MonitoringConfiguration": {
        "LogLevel": {}
      },
      "CatalogConfiguration": {
        "GlueDataCatalogConfiguration": {
          "DatabaseARN": {}
        }
      },
      "DeployAsApplicationConfiguration": {
        "S3ContentLocation": {
          "BucketARN": {},
          "BasePath": {}
        }
      },
      "CustomArtifactsConfiguration": {}
    }
  },
  "CloudWatchLoggingOptions": {},
  "Tags": {},
  "ApplicationMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|ApplicationDescription|object|false|none|none|
|RuntimeEnvironment|object|true|none|none|
|ServiceExecutionRole|object|true|none|none|
|ApplicationConfiguration|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|
|Tags|object|false|none|none|
|ApplicationMode|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedOperationException">UnsupportedOperationException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedoperationexception"></a>
<a id="schema_UnsupportedOperationException"></a>
<a id="tocSunsupportedoperationexception"></a>
<a id="tocsunsupportedoperationexception"></a>

```json
null
```

<h2 id="tocS_CreateApplicationPresignedUrlResponse">CreateApplicationPresignedUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationpresignedurlresponse"></a>
<a id="schema_CreateApplicationPresignedUrlResponse"></a>
<a id="tocScreateapplicationpresignedurlresponse"></a>
<a id="tocscreateapplicationpresignedurlresponse"></a>

```json
{
  "AuthorizedUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizedUrl|object|false|none|none|

<h2 id="tocS_CreateApplicationPresignedUrlRequest">CreateApplicationPresignedUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationpresignedurlrequest"></a>
<a id="schema_CreateApplicationPresignedUrlRequest"></a>
<a id="tocScreateapplicationpresignedurlrequest"></a>
<a id="tocscreateapplicationpresignedurlrequest"></a>

```json
{
  "ApplicationName": {},
  "UrlType": {},
  "SessionExpirationDurationInSeconds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|UrlType|object|true|none|none|
|SessionExpirationDurationInSeconds|object|false|none|none|

<h2 id="tocS_CreateApplicationSnapshotResponse">CreateApplicationSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationsnapshotresponse"></a>
<a id="schema_CreateApplicationSnapshotResponse"></a>
<a id="tocScreateapplicationsnapshotresponse"></a>
<a id="tocscreateapplicationsnapshotresponse"></a>

```json
{}
```

<h2 id="tocS_CreateApplicationSnapshotRequest">CreateApplicationSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationsnapshotrequest"></a>
<a id="schema_CreateApplicationSnapshotRequest"></a>
<a id="tocScreateapplicationsnapshotrequest"></a>
<a id="tocscreateapplicationsnapshotrequest"></a>

```json
{
  "ApplicationName": {},
  "SnapshotName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|SnapshotName|object|true|none|none|

<h2 id="tocS_DeleteApplicationResponse">DeleteApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationresponse"></a>
<a id="schema_DeleteApplicationResponse"></a>
<a id="tocSdeleteapplicationresponse"></a>
<a id="tocsdeleteapplicationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteApplicationRequest">DeleteApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationrequest"></a>
<a id="schema_DeleteApplicationRequest"></a>
<a id="tocSdeleteapplicationrequest"></a>
<a id="tocsdeleteapplicationrequest"></a>

```json
{
  "ApplicationName": {},
  "CreateTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CreateTimestamp|object|true|none|none|

<h2 id="tocS_DeleteApplicationCloudWatchLoggingOptionResponse">DeleteApplicationCloudWatchLoggingOptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationcloudwatchloggingoptionresponse"></a>
<a id="schema_DeleteApplicationCloudWatchLoggingOptionResponse"></a>
<a id="tocSdeleteapplicationcloudwatchloggingoptionresponse"></a>
<a id="tocsdeleteapplicationcloudwatchloggingoptionresponse"></a>

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {},
  "CloudWatchLoggingOptionDescriptions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationARN|object|false|none|none|
|ApplicationVersionId|object|false|none|none|
|CloudWatchLoggingOptionDescriptions|object|false|none|none|

<h2 id="tocS_DeleteApplicationCloudWatchLoggingOptionRequest">DeleteApplicationCloudWatchLoggingOptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationcloudwatchloggingoptionrequest"></a>
<a id="schema_DeleteApplicationCloudWatchLoggingOptionRequest"></a>
<a id="tocSdeleteapplicationcloudwatchloggingoptionrequest"></a>
<a id="tocsdeleteapplicationcloudwatchloggingoptionrequest"></a>

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "CloudWatchLoggingOptionId": {},
  "ConditionalToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|false|none|none|
|CloudWatchLoggingOptionId|object|true|none|none|
|ConditionalToken|object|false|none|none|

<h2 id="tocS_DeleteApplicationInputProcessingConfigurationResponse">DeleteApplicationInputProcessingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationinputprocessingconfigurationresponse"></a>
<a id="schema_DeleteApplicationInputProcessingConfigurationResponse"></a>
<a id="tocSdeleteapplicationinputprocessingconfigurationresponse"></a>
<a id="tocsdeleteapplicationinputprocessingconfigurationresponse"></a>

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationARN|object|false|none|none|
|ApplicationVersionId|object|false|none|none|

<h2 id="tocS_DeleteApplicationInputProcessingConfigurationRequest">DeleteApplicationInputProcessingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationinputprocessingconfigurationrequest"></a>
<a id="schema_DeleteApplicationInputProcessingConfigurationRequest"></a>
<a id="tocSdeleteapplicationinputprocessingconfigurationrequest"></a>
<a id="tocsdeleteapplicationinputprocessingconfigurationrequest"></a>

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "InputId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|true|none|none|
|InputId|object|true|none|none|

<h2 id="tocS_DeleteApplicationOutputResponse">DeleteApplicationOutputResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationoutputresponse"></a>
<a id="schema_DeleteApplicationOutputResponse"></a>
<a id="tocSdeleteapplicationoutputresponse"></a>
<a id="tocsdeleteapplicationoutputresponse"></a>

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationARN|object|false|none|none|
|ApplicationVersionId|object|false|none|none|

<h2 id="tocS_DeleteApplicationOutputRequest">DeleteApplicationOutputRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationoutputrequest"></a>
<a id="schema_DeleteApplicationOutputRequest"></a>
<a id="tocSdeleteapplicationoutputrequest"></a>
<a id="tocsdeleteapplicationoutputrequest"></a>

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "OutputId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|true|none|none|
|OutputId|object|true|none|none|

<h2 id="tocS_DeleteApplicationReferenceDataSourceResponse">DeleteApplicationReferenceDataSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationreferencedatasourceresponse"></a>
<a id="schema_DeleteApplicationReferenceDataSourceResponse"></a>
<a id="tocSdeleteapplicationreferencedatasourceresponse"></a>
<a id="tocsdeleteapplicationreferencedatasourceresponse"></a>

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationARN|object|false|none|none|
|ApplicationVersionId|object|false|none|none|

<h2 id="tocS_DeleteApplicationReferenceDataSourceRequest">DeleteApplicationReferenceDataSourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationreferencedatasourcerequest"></a>
<a id="schema_DeleteApplicationReferenceDataSourceRequest"></a>
<a id="tocSdeleteapplicationreferencedatasourcerequest"></a>
<a id="tocsdeleteapplicationreferencedatasourcerequest"></a>

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "ReferenceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|true|none|none|
|ReferenceId|object|true|none|none|

<h2 id="tocS_DeleteApplicationSnapshotResponse">DeleteApplicationSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationsnapshotresponse"></a>
<a id="schema_DeleteApplicationSnapshotResponse"></a>
<a id="tocSdeleteapplicationsnapshotresponse"></a>
<a id="tocsdeleteapplicationsnapshotresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteApplicationSnapshotRequest">DeleteApplicationSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationsnapshotrequest"></a>
<a id="schema_DeleteApplicationSnapshotRequest"></a>
<a id="tocSdeleteapplicationsnapshotrequest"></a>
<a id="tocsdeleteapplicationsnapshotrequest"></a>

```json
{
  "ApplicationName": {},
  "SnapshotName": {},
  "SnapshotCreationTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|SnapshotName|object|true|none|none|
|SnapshotCreationTimestamp|object|true|none|none|

<h2 id="tocS_DeleteApplicationVpcConfigurationResponse">DeleteApplicationVpcConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationvpcconfigurationresponse"></a>
<a id="schema_DeleteApplicationVpcConfigurationResponse"></a>
<a id="tocSdeleteapplicationvpcconfigurationresponse"></a>
<a id="tocsdeleteapplicationvpcconfigurationresponse"></a>

```json
{
  "ApplicationARN": {},
  "ApplicationVersionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationARN|object|false|none|none|
|ApplicationVersionId|object|false|none|none|

<h2 id="tocS_DeleteApplicationVpcConfigurationRequest">DeleteApplicationVpcConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationvpcconfigurationrequest"></a>
<a id="schema_DeleteApplicationVpcConfigurationRequest"></a>
<a id="tocSdeleteapplicationvpcconfigurationrequest"></a>
<a id="tocsdeleteapplicationvpcconfigurationrequest"></a>

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "VpcConfigurationId": {},
  "ConditionalToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|false|none|none|
|VpcConfigurationId|object|true|none|none|
|ConditionalToken|object|false|none|none|

<h2 id="tocS_DescribeApplicationResponse">DescribeApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationresponse"></a>
<a id="schema_DescribeApplicationResponse"></a>
<a id="tocSdescribeapplicationresponse"></a>
<a id="tocsdescribeapplicationresponse"></a>

```json
{
  "ApplicationDetail": {
    "ApplicationARN": {},
    "ApplicationDescription": {},
    "ApplicationName": {},
    "RuntimeEnvironment": {},
    "ServiceExecutionRole": {},
    "ApplicationStatus": {},
    "ApplicationVersionId": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "ApplicationConfigurationDescription": {
      "SqlApplicationConfigurationDescription": {
        "InputDescriptions": {},
        "OutputDescriptions": {},
        "ReferenceDataSourceDescriptions": {}
      },
      "ApplicationCodeConfigurationDescription": {
        "CodeContentType": {},
        "CodeContentDescription": {
          "TextContent": {},
          "CodeMD5": {},
          "CodeSize": {},
          "S3ApplicationCodeLocationDescription": {
            "BucketARN": {},
            "FileKey": {},
            "ObjectVersion": {}
          }
        }
      },
      "RunConfigurationDescription": {
        "ApplicationRestoreConfigurationDescription": {
          "ApplicationRestoreType": {},
          "SnapshotName": {}
        },
        "FlinkRunConfigurationDescription": {
          "AllowNonRestoredState": {}
        }
      },
      "FlinkApplicationConfigurationDescription": {
        "CheckpointConfigurationDescription": {
          "ConfigurationType": {},
          "CheckpointingEnabled": {},
          "CheckpointInterval": {},
          "MinPauseBetweenCheckpoints": {}
        },
        "MonitoringConfigurationDescription": {
          "ConfigurationType": {},
          "MetricsLevel": {},
          "LogLevel": {}
        },
        "ParallelismConfigurationDescription": {
          "ConfigurationType": {},
          "Parallelism": {},
          "ParallelismPerKPU": {},
          "CurrentParallelism": {},
          "AutoScalingEnabled": {}
        },
        "JobPlanDescription": {}
      },
      "EnvironmentPropertyDescriptions": {
        "PropertyGroupDescriptions": {}
      },
      "ApplicationSnapshotConfigurationDescription": {
        "SnapshotsEnabled": {}
      },
      "VpcConfigurationDescriptions": {},
      "ZeppelinApplicationConfigurationDescription": {
        "MonitoringConfigurationDescription": {
          "LogLevel": {}
        },
        "CatalogConfigurationDescription": {
          "GlueDataCatalogConfigurationDescription": {
            "DatabaseARN": {}
          }
        },
        "DeployAsApplicationConfigurationDescription": {
          "S3ContentLocationDescription": {
            "BucketARN": {},
            "BasePath": {}
          }
        },
        "CustomArtifactsConfigurationDescription": {}
      }
    },
    "CloudWatchLoggingOptionDescriptions": {},
    "ApplicationMaintenanceConfigurationDescription": {
      "ApplicationMaintenanceWindowStartTime": {},
      "ApplicationMaintenanceWindowEndTime": {}
    },
    "ApplicationVersionUpdatedFrom": {},
    "ApplicationVersionRolledBackFrom": {},
    "ConditionalToken": {},
    "ApplicationVersionRolledBackTo": {},
    "ApplicationMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationDetail|object|true|none|none|

<h2 id="tocS_DescribeApplicationRequest">DescribeApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationrequest"></a>
<a id="schema_DescribeApplicationRequest"></a>
<a id="tocSdescribeapplicationrequest"></a>
<a id="tocsdescribeapplicationrequest"></a>

```json
{
  "ApplicationName": {},
  "IncludeAdditionalDetails": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|IncludeAdditionalDetails|object|false|none|none|

<h2 id="tocS_DescribeApplicationSnapshotResponse">DescribeApplicationSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationsnapshotresponse"></a>
<a id="schema_DescribeApplicationSnapshotResponse"></a>
<a id="tocSdescribeapplicationsnapshotresponse"></a>
<a id="tocsdescribeapplicationsnapshotresponse"></a>

```json
{
  "SnapshotDetails": {
    "SnapshotName": {},
    "SnapshotStatus": {},
    "ApplicationVersionId": {},
    "SnapshotCreationTimestamp": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotDetails|object|true|none|none|

<h2 id="tocS_DescribeApplicationSnapshotRequest">DescribeApplicationSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationsnapshotrequest"></a>
<a id="schema_DescribeApplicationSnapshotRequest"></a>
<a id="tocSdescribeapplicationsnapshotrequest"></a>
<a id="tocsdescribeapplicationsnapshotrequest"></a>

```json
{
  "ApplicationName": {},
  "SnapshotName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|SnapshotName|object|true|none|none|

<h2 id="tocS_DescribeApplicationVersionResponse">DescribeApplicationVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationversionresponse"></a>
<a id="schema_DescribeApplicationVersionResponse"></a>
<a id="tocSdescribeapplicationversionresponse"></a>
<a id="tocsdescribeapplicationversionresponse"></a>

```json
{
  "ApplicationVersionDetail": {
    "ApplicationARN": {},
    "ApplicationDescription": {},
    "ApplicationName": {},
    "RuntimeEnvironment": {},
    "ServiceExecutionRole": {},
    "ApplicationStatus": {},
    "ApplicationVersionId": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "ApplicationConfigurationDescription": {
      "SqlApplicationConfigurationDescription": {
        "InputDescriptions": {},
        "OutputDescriptions": {},
        "ReferenceDataSourceDescriptions": {}
      },
      "ApplicationCodeConfigurationDescription": {
        "CodeContentType": {},
        "CodeContentDescription": {
          "TextContent": {},
          "CodeMD5": {},
          "CodeSize": {},
          "S3ApplicationCodeLocationDescription": {
            "BucketARN": {},
            "FileKey": {},
            "ObjectVersion": {}
          }
        }
      },
      "RunConfigurationDescription": {
        "ApplicationRestoreConfigurationDescription": {
          "ApplicationRestoreType": {},
          "SnapshotName": {}
        },
        "FlinkRunConfigurationDescription": {
          "AllowNonRestoredState": {}
        }
      },
      "FlinkApplicationConfigurationDescription": {
        "CheckpointConfigurationDescription": {
          "ConfigurationType": {},
          "CheckpointingEnabled": {},
          "CheckpointInterval": {},
          "MinPauseBetweenCheckpoints": {}
        },
        "MonitoringConfigurationDescription": {
          "ConfigurationType": {},
          "MetricsLevel": {},
          "LogLevel": {}
        },
        "ParallelismConfigurationDescription": {
          "ConfigurationType": {},
          "Parallelism": {},
          "ParallelismPerKPU": {},
          "CurrentParallelism": {},
          "AutoScalingEnabled": {}
        },
        "JobPlanDescription": {}
      },
      "EnvironmentPropertyDescriptions": {
        "PropertyGroupDescriptions": {}
      },
      "ApplicationSnapshotConfigurationDescription": {
        "SnapshotsEnabled": {}
      },
      "VpcConfigurationDescriptions": {},
      "ZeppelinApplicationConfigurationDescription": {
        "MonitoringConfigurationDescription": {
          "LogLevel": {}
        },
        "CatalogConfigurationDescription": {
          "GlueDataCatalogConfigurationDescription": {
            "DatabaseARN": {}
          }
        },
        "DeployAsApplicationConfigurationDescription": {
          "S3ContentLocationDescription": {
            "BucketARN": {},
            "BasePath": {}
          }
        },
        "CustomArtifactsConfigurationDescription": {}
      }
    },
    "CloudWatchLoggingOptionDescriptions": {},
    "ApplicationMaintenanceConfigurationDescription": {
      "ApplicationMaintenanceWindowStartTime": {},
      "ApplicationMaintenanceWindowEndTime": {}
    },
    "ApplicationVersionUpdatedFrom": {},
    "ApplicationVersionRolledBackFrom": {},
    "ConditionalToken": {},
    "ApplicationVersionRolledBackTo": {},
    "ApplicationMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationVersionDetail|[ApplicationDetail](#schemaapplicationdetail)|false|none|Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.|

<h2 id="tocS_DescribeApplicationVersionRequest">DescribeApplicationVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationversionrequest"></a>
<a id="schema_DescribeApplicationVersionRequest"></a>
<a id="tocSdescribeapplicationversionrequest"></a>
<a id="tocsdescribeapplicationversionrequest"></a>

```json
{
  "ApplicationName": {},
  "ApplicationVersionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|ApplicationVersionId|object|true|none|none|

<h2 id="tocS_DiscoverInputSchemaResponse">DiscoverInputSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverinputschemaresponse"></a>
<a id="schema_DiscoverInputSchemaResponse"></a>
<a id="tocSdiscoverinputschemaresponse"></a>
<a id="tocsdiscoverinputschemaresponse"></a>

```json
{
  "InputSchema": {
    "RecordFormat": {
      "RecordFormatType": {},
      "MappingParameters": {
        "JSONMappingParameters": {
          "RecordRowPath": {}
        },
        "CSVMappingParameters": {
          "RecordRowDelimiter": {},
          "RecordColumnDelimiter": {}
        }
      }
    },
    "RecordEncoding": {},
    "RecordColumns": {}
  },
  "ParsedInputRecords": {},
  "ProcessedInputRecords": {},
  "RawInputRecords": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputSchema|object|false|none|none|
|ParsedInputRecords|object|false|none|none|
|ProcessedInputRecords|object|false|none|none|
|RawInputRecords|object|false|none|none|

<h2 id="tocS_DiscoverInputSchemaRequest">DiscoverInputSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverinputschemarequest"></a>
<a id="schema_DiscoverInputSchemaRequest"></a>
<a id="tocSdiscoverinputschemarequest"></a>
<a id="tocsdiscoverinputschemarequest"></a>

```json
{
  "ResourceARN": {},
  "ServiceExecutionRole": {},
  "InputStartingPositionConfiguration": {
    "InputStartingPosition": {}
  },
  "S3Configuration": {
    "BucketARN": {},
    "FileKey": {}
  },
  "InputProcessingConfiguration": {
    "InputLambdaProcessor": {
      "ResourceARN": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|
|ServiceExecutionRole|object|true|none|none|
|InputStartingPositionConfiguration|object|false|none|none|
|S3Configuration|object|false|none|none|
|InputProcessingConfiguration|object|false|none|none|

<h2 id="tocS_UnableToDetectSchemaException">UnableToDetectSchemaException</h2>
<!-- backwards compatibility -->
<a id="schemaunabletodetectschemaexception"></a>
<a id="schema_UnableToDetectSchemaException"></a>
<a id="tocSunabletodetectschemaexception"></a>
<a id="tocsunabletodetectschemaexception"></a>

```json
null
```

<h2 id="tocS_ResourceProvisionedThroughputExceededException">ResourceProvisionedThroughputExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceprovisionedthroughputexceededexception"></a>
<a id="schema_ResourceProvisionedThroughputExceededException"></a>
<a id="tocSresourceprovisionedthroughputexceededexception"></a>
<a id="tocsresourceprovisionedthroughputexceededexception"></a>

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

<h2 id="tocS_ListApplicationSnapshotsResponse">ListApplicationSnapshotsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsnapshotsresponse"></a>
<a id="schema_ListApplicationSnapshotsResponse"></a>
<a id="tocSlistapplicationsnapshotsresponse"></a>
<a id="tocslistapplicationsnapshotsresponse"></a>

```json
{
  "SnapshotSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListApplicationSnapshotsRequest">ListApplicationSnapshotsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsnapshotsrequest"></a>
<a id="schema_ListApplicationSnapshotsRequest"></a>
<a id="tocSlistapplicationsnapshotsrequest"></a>
<a id="tocslistapplicationsnapshotsrequest"></a>

```json
{
  "ApplicationName": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListApplicationVersionsResponse">ListApplicationVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationversionsresponse"></a>
<a id="schema_ListApplicationVersionsResponse"></a>
<a id="tocSlistapplicationversionsresponse"></a>
<a id="tocslistapplicationversionsresponse"></a>

```json
{
  "ApplicationVersionSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationVersionSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListApplicationVersionsRequest">ListApplicationVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationversionsrequest"></a>
<a id="schema_ListApplicationVersionsRequest"></a>
<a id="tocSlistapplicationversionsrequest"></a>
<a id="tocslistapplicationversionsrequest"></a>

```json
{
  "ApplicationName": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListApplicationsResponse">ListApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsresponse"></a>
<a id="schema_ListApplicationsResponse"></a>
<a id="tocSlistapplicationsresponse"></a>
<a id="tocslistapplicationsresponse"></a>

```json
{
  "ApplicationSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationSummaries|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListApplicationsRequest">ListApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsrequest"></a>
<a id="schema_ListApplicationsRequest"></a>
<a id="tocSlistapplicationsrequest"></a>
<a id="tocslistapplicationsrequest"></a>

```json
{
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

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

<h2 id="tocS_RollbackApplicationResponse">RollbackApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemarollbackapplicationresponse"></a>
<a id="schema_RollbackApplicationResponse"></a>
<a id="tocSrollbackapplicationresponse"></a>
<a id="tocsrollbackapplicationresponse"></a>

```json
{
  "ApplicationDetail": {
    "ApplicationARN": {},
    "ApplicationDescription": {},
    "ApplicationName": {},
    "RuntimeEnvironment": {},
    "ServiceExecutionRole": {},
    "ApplicationStatus": {},
    "ApplicationVersionId": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "ApplicationConfigurationDescription": {
      "SqlApplicationConfigurationDescription": {
        "InputDescriptions": {},
        "OutputDescriptions": {},
        "ReferenceDataSourceDescriptions": {}
      },
      "ApplicationCodeConfigurationDescription": {
        "CodeContentType": {},
        "CodeContentDescription": {
          "TextContent": {},
          "CodeMD5": {},
          "CodeSize": {},
          "S3ApplicationCodeLocationDescription": {
            "BucketARN": {},
            "FileKey": {},
            "ObjectVersion": {}
          }
        }
      },
      "RunConfigurationDescription": {
        "ApplicationRestoreConfigurationDescription": {
          "ApplicationRestoreType": {},
          "SnapshotName": {}
        },
        "FlinkRunConfigurationDescription": {
          "AllowNonRestoredState": {}
        }
      },
      "FlinkApplicationConfigurationDescription": {
        "CheckpointConfigurationDescription": {
          "ConfigurationType": {},
          "CheckpointingEnabled": {},
          "CheckpointInterval": {},
          "MinPauseBetweenCheckpoints": {}
        },
        "MonitoringConfigurationDescription": {
          "ConfigurationType": {},
          "MetricsLevel": {},
          "LogLevel": {}
        },
        "ParallelismConfigurationDescription": {
          "ConfigurationType": {},
          "Parallelism": {},
          "ParallelismPerKPU": {},
          "CurrentParallelism": {},
          "AutoScalingEnabled": {}
        },
        "JobPlanDescription": {}
      },
      "EnvironmentPropertyDescriptions": {
        "PropertyGroupDescriptions": {}
      },
      "ApplicationSnapshotConfigurationDescription": {
        "SnapshotsEnabled": {}
      },
      "VpcConfigurationDescriptions": {},
      "ZeppelinApplicationConfigurationDescription": {
        "MonitoringConfigurationDescription": {
          "LogLevel": {}
        },
        "CatalogConfigurationDescription": {
          "GlueDataCatalogConfigurationDescription": {
            "DatabaseARN": {}
          }
        },
        "DeployAsApplicationConfigurationDescription": {
          "S3ContentLocationDescription": {
            "BucketARN": {},
            "BasePath": {}
          }
        },
        "CustomArtifactsConfigurationDescription": {}
      }
    },
    "CloudWatchLoggingOptionDescriptions": {},
    "ApplicationMaintenanceConfigurationDescription": {
      "ApplicationMaintenanceWindowStartTime": {},
      "ApplicationMaintenanceWindowEndTime": {}
    },
    "ApplicationVersionUpdatedFrom": {},
    "ApplicationVersionRolledBackFrom": {},
    "ConditionalToken": {},
    "ApplicationVersionRolledBackTo": {},
    "ApplicationMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationDetail|[ApplicationDetail](#schemaapplicationdetail)|true|none|Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.|

<h2 id="tocS_RollbackApplicationRequest">RollbackApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarollbackapplicationrequest"></a>
<a id="schema_RollbackApplicationRequest"></a>
<a id="tocSrollbackapplicationrequest"></a>
<a id="tocsrollbackapplicationrequest"></a>

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|true|none|none|

<h2 id="tocS_StartApplicationResponse">StartApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartapplicationresponse"></a>
<a id="schema_StartApplicationResponse"></a>
<a id="tocSstartapplicationresponse"></a>
<a id="tocsstartapplicationresponse"></a>

```json
{}
```

<h2 id="tocS_StartApplicationRequest">StartApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartapplicationrequest"></a>
<a id="schema_StartApplicationRequest"></a>
<a id="tocSstartapplicationrequest"></a>
<a id="tocsstartapplicationrequest"></a>

```json
{
  "ApplicationName": {},
  "RunConfiguration": {
    "FlinkRunConfiguration": {
      "AllowNonRestoredState": {}
    },
    "SqlRunConfigurations": {},
    "ApplicationRestoreConfiguration": {
      "ApplicationRestoreType": {},
      "SnapshotName": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|RunConfiguration|object|false|none|none|

<h2 id="tocS_StopApplicationResponse">StopApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopapplicationresponse"></a>
<a id="schema_StopApplicationResponse"></a>
<a id="tocSstopapplicationresponse"></a>
<a id="tocsstopapplicationresponse"></a>

```json
{}
```

<h2 id="tocS_StopApplicationRequest">StopApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopapplicationrequest"></a>
<a id="schema_StopApplicationRequest"></a>
<a id="tocSstopapplicationrequest"></a>
<a id="tocsstopapplicationrequest"></a>

```json
{
  "ApplicationName": {},
  "Force": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|Force|object|false|none|none|

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

<h2 id="tocS_UpdateApplicationResponse">UpdateApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationresponse"></a>
<a id="schema_UpdateApplicationResponse"></a>
<a id="tocSupdateapplicationresponse"></a>
<a id="tocsupdateapplicationresponse"></a>

```json
{
  "ApplicationDetail": {
    "ApplicationARN": {},
    "ApplicationDescription": {},
    "ApplicationName": {},
    "RuntimeEnvironment": {},
    "ServiceExecutionRole": {},
    "ApplicationStatus": {},
    "ApplicationVersionId": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "ApplicationConfigurationDescription": {
      "SqlApplicationConfigurationDescription": {
        "InputDescriptions": {},
        "OutputDescriptions": {},
        "ReferenceDataSourceDescriptions": {}
      },
      "ApplicationCodeConfigurationDescription": {
        "CodeContentType": {},
        "CodeContentDescription": {
          "TextContent": {},
          "CodeMD5": {},
          "CodeSize": {},
          "S3ApplicationCodeLocationDescription": {
            "BucketARN": {},
            "FileKey": {},
            "ObjectVersion": {}
          }
        }
      },
      "RunConfigurationDescription": {
        "ApplicationRestoreConfigurationDescription": {
          "ApplicationRestoreType": {},
          "SnapshotName": {}
        },
        "FlinkRunConfigurationDescription": {
          "AllowNonRestoredState": {}
        }
      },
      "FlinkApplicationConfigurationDescription": {
        "CheckpointConfigurationDescription": {
          "ConfigurationType": {},
          "CheckpointingEnabled": {},
          "CheckpointInterval": {},
          "MinPauseBetweenCheckpoints": {}
        },
        "MonitoringConfigurationDescription": {
          "ConfigurationType": {},
          "MetricsLevel": {},
          "LogLevel": {}
        },
        "ParallelismConfigurationDescription": {
          "ConfigurationType": {},
          "Parallelism": {},
          "ParallelismPerKPU": {},
          "CurrentParallelism": {},
          "AutoScalingEnabled": {}
        },
        "JobPlanDescription": {}
      },
      "EnvironmentPropertyDescriptions": {
        "PropertyGroupDescriptions": {}
      },
      "ApplicationSnapshotConfigurationDescription": {
        "SnapshotsEnabled": {}
      },
      "VpcConfigurationDescriptions": {},
      "ZeppelinApplicationConfigurationDescription": {
        "MonitoringConfigurationDescription": {
          "LogLevel": {}
        },
        "CatalogConfigurationDescription": {
          "GlueDataCatalogConfigurationDescription": {
            "DatabaseARN": {}
          }
        },
        "DeployAsApplicationConfigurationDescription": {
          "S3ContentLocationDescription": {
            "BucketARN": {},
            "BasePath": {}
          }
        },
        "CustomArtifactsConfigurationDescription": {}
      }
    },
    "CloudWatchLoggingOptionDescriptions": {},
    "ApplicationMaintenanceConfigurationDescription": {
      "ApplicationMaintenanceWindowStartTime": {},
      "ApplicationMaintenanceWindowEndTime": {}
    },
    "ApplicationVersionUpdatedFrom": {},
    "ApplicationVersionRolledBackFrom": {},
    "ConditionalToken": {},
    "ApplicationVersionRolledBackTo": {},
    "ApplicationMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationDetail|object|true|none|none|

<h2 id="tocS_UpdateApplicationRequest">UpdateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationrequest"></a>
<a id="schema_UpdateApplicationRequest"></a>
<a id="tocSupdateapplicationrequest"></a>
<a id="tocsupdateapplicationrequest"></a>

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "ApplicationConfigurationUpdate": {
    "SqlApplicationConfigurationUpdate": {
      "InputUpdates": {},
      "OutputUpdates": {},
      "ReferenceDataSourceUpdates": {}
    },
    "ApplicationCodeConfigurationUpdate": {
      "CodeContentTypeUpdate": {},
      "CodeContentUpdate": {
        "TextContentUpdate": {},
        "ZipFileContentUpdate": {},
        "S3ContentLocationUpdate": {
          "BucketARNUpdate": {},
          "FileKeyUpdate": {},
          "ObjectVersionUpdate": {}
        }
      }
    },
    "FlinkApplicationConfigurationUpdate": {
      "CheckpointConfigurationUpdate": {
        "ConfigurationTypeUpdate": {},
        "CheckpointingEnabledUpdate": {},
        "CheckpointIntervalUpdate": {},
        "MinPauseBetweenCheckpointsUpdate": {}
      },
      "MonitoringConfigurationUpdate": {
        "ConfigurationTypeUpdate": {},
        "MetricsLevelUpdate": {},
        "LogLevelUpdate": {}
      },
      "ParallelismConfigurationUpdate": {
        "ConfigurationTypeUpdate": {},
        "ParallelismUpdate": {},
        "ParallelismPerKPUUpdate": {},
        "AutoScalingEnabledUpdate": {}
      }
    },
    "EnvironmentPropertyUpdates": {
      "PropertyGroups": {}
    },
    "ApplicationSnapshotConfigurationUpdate": {
      "SnapshotsEnabledUpdate": {}
    },
    "VpcConfigurationUpdates": {},
    "ZeppelinApplicationConfigurationUpdate": {
      "MonitoringConfigurationUpdate": {
        "LogLevelUpdate": {}
      },
      "CatalogConfigurationUpdate": {
        "GlueDataCatalogConfigurationUpdate": {
          "DatabaseARNUpdate": {}
        }
      },
      "DeployAsApplicationConfigurationUpdate": {
        "S3ContentLocationUpdate": {
          "BucketARNUpdate": {},
          "BasePathUpdate": {}
        }
      },
      "CustomArtifactsConfigurationUpdate": {}
    }
  },
  "ServiceExecutionRoleUpdate": {},
  "RunConfigurationUpdate": {
    "FlinkRunConfiguration": {
      "AllowNonRestoredState": {}
    },
    "ApplicationRestoreConfiguration": {
      "ApplicationRestoreType": {},
      "SnapshotName": {}
    }
  },
  "CloudWatchLoggingOptionUpdates": {},
  "ConditionalToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|false|none|none|
|ApplicationConfigurationUpdate|object|false|none|none|
|ServiceExecutionRoleUpdate|object|false|none|none|
|RunConfigurationUpdate|object|false|none|none|
|CloudWatchLoggingOptionUpdates|object|false|none|none|
|ConditionalToken|object|false|none|none|

<h2 id="tocS_UpdateApplicationMaintenanceConfigurationResponse">UpdateApplicationMaintenanceConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationmaintenanceconfigurationresponse"></a>
<a id="schema_UpdateApplicationMaintenanceConfigurationResponse"></a>
<a id="tocSupdateapplicationmaintenanceconfigurationresponse"></a>
<a id="tocsupdateapplicationmaintenanceconfigurationresponse"></a>

```json
{
  "ApplicationARN": {},
  "ApplicationMaintenanceConfigurationDescription": {
    "ApplicationMaintenanceWindowStartTime": {},
    "ApplicationMaintenanceWindowEndTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationARN|object|false|none|none|
|ApplicationMaintenanceConfigurationDescription|object|false|none|none|

<h2 id="tocS_UpdateApplicationMaintenanceConfigurationRequest">UpdateApplicationMaintenanceConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationmaintenanceconfigurationrequest"></a>
<a id="schema_UpdateApplicationMaintenanceConfigurationRequest"></a>
<a id="tocSupdateapplicationmaintenanceconfigurationrequest"></a>
<a id="tocsupdateapplicationmaintenanceconfigurationrequest"></a>

```json
{
  "ApplicationName": {},
  "ApplicationMaintenanceConfigurationUpdate": {
    "ApplicationMaintenanceWindowStartTimeUpdate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|ApplicationMaintenanceConfigurationUpdate|object|true|none|none|

<h2 id="tocS_ApplicationName">ApplicationName</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationname"></a>
<a id="schema_ApplicationName"></a>
<a id="tocSapplicationname"></a>
<a id="tocsapplicationname"></a>

```json
"string"
```

<h2 id="tocS_ApplicationVersionId">ApplicationVersionId</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationversionid"></a>
<a id="schema_ApplicationVersionId"></a>
<a id="tocSapplicationversionid"></a>
<a id="tocsapplicationversionid"></a>

```json
1
```

<h2 id="tocS_CloudWatchLoggingOption">CloudWatchLoggingOption</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggingoption"></a>
<a id="schema_CloudWatchLoggingOption"></a>
<a id="tocScloudwatchloggingoption"></a>
<a id="tocscloudwatchloggingoption"></a>

```json
{
  "LogStreamARN": {}
}
```

Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogStreamARN|object|true|none|none|

<h2 id="tocS_ConditionalToken">ConditionalToken</h2>
<!-- backwards compatibility -->
<a id="schemaconditionaltoken"></a>
<a id="schema_ConditionalToken"></a>
<a id="tocSconditionaltoken"></a>
<a id="tocsconditionaltoken"></a>

```json
"string"
```

<h2 id="tocS_ResourceARN">ResourceARN</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceARN"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchLoggingOptionDescriptions">CloudWatchLoggingOptionDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggingoptiondescriptions"></a>
<a id="schema_CloudWatchLoggingOptionDescriptions"></a>
<a id="tocScloudwatchloggingoptiondescriptions"></a>
<a id="tocscloudwatchloggingoptiondescriptions"></a>

```json
[
  {
    "CloudWatchLoggingOptionId": {},
    "LogStreamARN": {},
    "RoleARN": {}
  }
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

<h2 id="tocS_InputProcessingConfiguration">InputProcessingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainputprocessingconfiguration"></a>
<a id="schema_InputProcessingConfiguration"></a>
<a id="tocSinputprocessingconfiguration"></a>
<a id="tocsinputprocessingconfiguration"></a>

```json
{
  "InputLambdaProcessor": {
    "ResourceARN": {}
  }
}
```

For a SQL-based Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputLambdaProcessor|object|true|none|none|

<h2 id="tocS_InputProcessingConfigurationDescription">InputProcessingConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemainputprocessingconfigurationdescription"></a>
<a id="schema_InputProcessingConfigurationDescription"></a>
<a id="tocSinputprocessingconfigurationdescription"></a>
<a id="tocsinputprocessingconfigurationdescription"></a>

```json
{
  "InputLambdaProcessorDescription": {
    "ResourceARN": {},
    "RoleARN": {}
  }
}
```

For a SQL-based Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputLambdaProcessorDescription|object|false|none|none|

<h2 id="tocS_Input">Input</h2>
<!-- backwards compatibility -->
<a id="schemainput"></a>
<a id="schema_Input"></a>
<a id="tocSinput"></a>
<a id="tocsinput"></a>

```json
{
  "NamePrefix": {},
  "InputProcessingConfiguration": {
    "InputLambdaProcessor": {
      "ResourceARN": {}
    }
  },
  "KinesisStreamsInput": {
    "ResourceARN": {}
  },
  "KinesisFirehoseInput": {
    "ResourceARN": {}
  },
  "InputParallelism": {
    "Count": {}
  },
  "InputSchema": {
    "RecordFormat": {
      "RecordFormatType": {},
      "MappingParameters": {
        "JSONMappingParameters": {
          "RecordRowPath": {}
        },
        "CSVMappingParameters": {
          "RecordRowDelimiter": {},
          "RecordColumnDelimiter": {}
        }
      }
    },
    "RecordEncoding": {},
    "RecordColumns": {}
  }
}
```

When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamePrefix|object|true|none|none|
|InputProcessingConfiguration|object|false|none|none|
|KinesisStreamsInput|object|false|none|none|
|KinesisFirehoseInput|object|false|none|none|
|InputParallelism|object|false|none|none|
|InputSchema|object|true|none|none|

<h2 id="tocS_InputDescriptions">InputDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemainputdescriptions"></a>
<a id="schema_InputDescriptions"></a>
<a id="tocSinputdescriptions"></a>
<a id="tocsinputdescriptions"></a>

```json
[
  {
    "InputId": {},
    "NamePrefix": {},
    "InAppStreamNames": {},
    "InputProcessingConfigurationDescription": {
      "InputLambdaProcessorDescription": {
        "ResourceARN": {},
        "RoleARN": {}
      }
    },
    "KinesisStreamsInputDescription": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "KinesisFirehoseInputDescription": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "InputSchema": {
      "RecordFormat": {
        "RecordFormatType": {},
        "MappingParameters": {
          "JSONMappingParameters": {
            "RecordRowPath": {}
          },
          "CSVMappingParameters": {
            "RecordRowDelimiter": {},
            "RecordColumnDelimiter": {}
          }
        }
      },
      "RecordEncoding": {},
      "RecordColumns": {}
    },
    "InputParallelism": {
      "Count": {}
    },
    "InputStartingPositionConfiguration": {
      "InputStartingPosition": {}
    }
  }
]
```

<h2 id="tocS_Output">Output</h2>
<!-- backwards compatibility -->
<a id="schemaoutput"></a>
<a id="schema_Output"></a>
<a id="tocSoutput"></a>
<a id="tocsoutput"></a>

```json
{
  "Name": {},
  "KinesisStreamsOutput": {
    "ResourceARN": {}
  },
  "KinesisFirehoseOutput": {
    "ResourceARN": {}
  },
  "LambdaOutput": {
    "ResourceARN": {}
  },
  "DestinationSchema": {
    "RecordFormatType": {}
  }
}
```

<p> Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|KinesisStreamsOutput|object|false|none|none|
|KinesisFirehoseOutput|object|false|none|none|
|LambdaOutput|object|false|none|none|
|DestinationSchema|object|true|none|none|

<h2 id="tocS_OutputDescriptions">OutputDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemaoutputdescriptions"></a>
<a id="schema_OutputDescriptions"></a>
<a id="tocSoutputdescriptions"></a>
<a id="tocsoutputdescriptions"></a>

```json
[
  {
    "OutputId": {},
    "Name": {},
    "KinesisStreamsOutputDescription": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "KinesisFirehoseOutputDescription": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "LambdaOutputDescription": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "DestinationSchema": {
      "RecordFormatType": {}
    }
  }
]
```

<h2 id="tocS_ReferenceDataSource">ReferenceDataSource</h2>
<!-- backwards compatibility -->
<a id="schemareferencedatasource"></a>
<a id="schema_ReferenceDataSource"></a>
<a id="tocSreferencedatasource"></a>
<a id="tocsreferencedatasource"></a>

```json
{
  "TableName": {},
  "S3ReferenceDataSource": {
    "BucketARN": {},
    "FileKey": {}
  },
  "ReferenceSchema": {
    "RecordFormat": {
      "RecordFormatType": {},
      "MappingParameters": {
        "JSONMappingParameters": {
          "RecordRowPath": {}
        },
        "CSVMappingParameters": {
          "RecordRowDelimiter": {},
          "RecordColumnDelimiter": {}
        }
      }
    },
    "RecordEncoding": {},
    "RecordColumns": {}
  }
}
```

For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|S3ReferenceDataSource|object|false|none|none|
|ReferenceSchema|object|true|none|none|

<h2 id="tocS_ReferenceDataSourceDescriptions">ReferenceDataSourceDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemareferencedatasourcedescriptions"></a>
<a id="schema_ReferenceDataSourceDescriptions"></a>
<a id="tocSreferencedatasourcedescriptions"></a>
<a id="tocsreferencedatasourcedescriptions"></a>

```json
[
  {
    "ReferenceId": {},
    "TableName": {},
    "S3ReferenceDataSourceDescription": {
      "BucketARN": {},
      "FileKey": {},
      "ReferenceRoleARN": {}
    },
    "ReferenceSchema": {
      "RecordFormat": {
        "RecordFormatType": {},
        "MappingParameters": {
          "JSONMappingParameters": {
            "RecordRowPath": {}
          },
          "CSVMappingParameters": {
            "RecordRowDelimiter": {},
            "RecordColumnDelimiter": {}
          }
        }
      },
      "RecordEncoding": {},
      "RecordColumns": {}
    }
  }
]
```

<h2 id="tocS_VpcConfiguration">VpcConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfiguration"></a>
<a id="schema_VpcConfiguration"></a>
<a id="tocSvpcconfiguration"></a>
<a id="tocsvpcconfiguration"></a>

```json
{
  "SubnetIds": {},
  "SecurityGroupIds": {}
}
```

Describes the parameters of a VPC used by the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIds|object|true|none|none|
|SecurityGroupIds|object|true|none|none|

<h2 id="tocS_VpcConfigurationDescription">VpcConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfigurationdescription"></a>
<a id="schema_VpcConfigurationDescription"></a>
<a id="tocSvpcconfigurationdescription"></a>
<a id="tocsvpcconfigurationdescription"></a>

```json
{
  "VpcConfigurationId": {},
  "VpcId": {},
  "SubnetIds": {},
  "SecurityGroupIds": {}
}
```

Describes the parameters of a VPC used by the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConfigurationId|object|true|none|none|
|VpcId|object|true|none|none|
|SubnetIds|object|true|none|none|
|SecurityGroupIds|object|true|none|none|

<h2 id="tocS_CodeContent">CodeContent</h2>
<!-- backwards compatibility -->
<a id="schemacodecontent"></a>
<a id="schema_CodeContent"></a>
<a id="tocScodecontent"></a>
<a id="tocscodecontent"></a>

```json
{
  "TextContent": {},
  "ZipFileContent": {},
  "S3ContentLocation": {
    "BucketARN": {},
    "FileKey": {},
    "ObjectVersion": {}
  }
}
```

Specifies either the application code, or the location of the application code, for a Flink-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextContent|object|false|none|none|
|ZipFileContent|object|false|none|none|
|S3ContentLocation|object|false|none|none|

<h2 id="tocS_CodeContentType">CodeContentType</h2>
<!-- backwards compatibility -->
<a id="schemacodecontenttype"></a>
<a id="schema_CodeContentType"></a>
<a id="tocScodecontenttype"></a>
<a id="tocscodecontenttype"></a>

```json
"PLAINTEXT"
```

<h2 id="tocS_ApplicationCodeConfiguration">ApplicationCodeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationcodeconfiguration"></a>
<a id="schema_ApplicationCodeConfiguration"></a>
<a id="tocSapplicationcodeconfiguration"></a>
<a id="tocsapplicationcodeconfiguration"></a>

```json
{
  "CodeContent": {
    "TextContent": {},
    "ZipFileContent": {},
    "S3ContentLocation": {
      "BucketARN": {},
      "FileKey": {},
      "ObjectVersion": {}
    }
  },
  "CodeContentType": {}
}
```

Describes code configuration for an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeContent|object|false|none|none|
|CodeContentType|object|true|none|none|

<h2 id="tocS_CodeContentDescription">CodeContentDescription</h2>
<!-- backwards compatibility -->
<a id="schemacodecontentdescription"></a>
<a id="schema_CodeContentDescription"></a>
<a id="tocScodecontentdescription"></a>
<a id="tocscodecontentdescription"></a>

```json
{
  "TextContent": {},
  "CodeMD5": {},
  "CodeSize": {},
  "S3ApplicationCodeLocationDescription": {
    "BucketARN": {},
    "FileKey": {},
    "ObjectVersion": {}
  }
}
```

Describes details about the code of a Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextContent|object|false|none|none|
|CodeMD5|object|false|none|none|
|CodeSize|object|false|none|none|
|S3ApplicationCodeLocationDescription|object|false|none|none|

<h2 id="tocS_ApplicationCodeConfigurationDescription">ApplicationCodeConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationcodeconfigurationdescription"></a>
<a id="schema_ApplicationCodeConfigurationDescription"></a>
<a id="tocSapplicationcodeconfigurationdescription"></a>
<a id="tocsapplicationcodeconfigurationdescription"></a>

```json
{
  "CodeContentType": {},
  "CodeContentDescription": {
    "TextContent": {},
    "CodeMD5": {},
    "CodeSize": {},
    "S3ApplicationCodeLocationDescription": {
      "BucketARN": {},
      "FileKey": {},
      "ObjectVersion": {}
    }
  }
}
```

Describes code configuration for an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeContentType|object|true|none|none|
|CodeContentDescription|object|false|none|none|

<h2 id="tocS_CodeContentUpdate">CodeContentUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacodecontentupdate"></a>
<a id="schema_CodeContentUpdate"></a>
<a id="tocScodecontentupdate"></a>
<a id="tocscodecontentupdate"></a>

```json
{
  "TextContentUpdate": {},
  "ZipFileContentUpdate": {},
  "S3ContentLocationUpdate": {
    "BucketARNUpdate": {},
    "FileKeyUpdate": {},
    "ObjectVersionUpdate": {}
  }
}
```

Describes an update to the code of an application. Not supported for Apache Zeppelin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextContentUpdate|object|false|none|none|
|ZipFileContentUpdate|object|false|none|none|
|S3ContentLocationUpdate|object|false|none|none|

<h2 id="tocS_ApplicationCodeConfigurationUpdate">ApplicationCodeConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationcodeconfigurationupdate"></a>
<a id="schema_ApplicationCodeConfigurationUpdate"></a>
<a id="tocSapplicationcodeconfigurationupdate"></a>
<a id="tocsapplicationcodeconfigurationupdate"></a>

```json
{
  "CodeContentTypeUpdate": {},
  "CodeContentUpdate": {
    "TextContentUpdate": {},
    "ZipFileContentUpdate": {},
    "S3ContentLocationUpdate": {
      "BucketARNUpdate": {},
      "FileKeyUpdate": {},
      "ObjectVersionUpdate": {}
    }
  }
}
```

Describes code configuration updates for an application. This is supported for a Flink-based Kinesis Data Analytics application or a SQL-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeContentTypeUpdate|object|false|none|none|
|CodeContentUpdate|object|false|none|none|

<h2 id="tocS_SqlApplicationConfiguration">SqlApplicationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasqlapplicationconfiguration"></a>
<a id="schema_SqlApplicationConfiguration"></a>
<a id="tocSsqlapplicationconfiguration"></a>
<a id="tocssqlapplicationconfiguration"></a>

```json
{
  "Inputs": {},
  "Outputs": {},
  "ReferenceDataSources": {}
}
```

Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Inputs|object|false|none|none|
|Outputs|object|false|none|none|
|ReferenceDataSources|object|false|none|none|

<h2 id="tocS_FlinkApplicationConfiguration">FlinkApplicationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaflinkapplicationconfiguration"></a>
<a id="schema_FlinkApplicationConfiguration"></a>
<a id="tocSflinkapplicationconfiguration"></a>
<a id="tocsflinkapplicationconfiguration"></a>

```json
{
  "CheckpointConfiguration": {
    "ConfigurationType": {},
    "CheckpointingEnabled": {},
    "CheckpointInterval": {},
    "MinPauseBetweenCheckpoints": {}
  },
  "MonitoringConfiguration": {
    "ConfigurationType": {},
    "MetricsLevel": {},
    "LogLevel": {}
  },
  "ParallelismConfiguration": {
    "ConfigurationType": {},
    "Parallelism": {},
    "ParallelismPerKPU": {},
    "AutoScalingEnabled": {}
  }
}
```

Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CheckpointConfiguration|object|false|none|none|
|MonitoringConfiguration|object|false|none|none|
|ParallelismConfiguration|object|false|none|none|

<h2 id="tocS_EnvironmentProperties">EnvironmentProperties</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentproperties"></a>
<a id="schema_EnvironmentProperties"></a>
<a id="tocSenvironmentproperties"></a>
<a id="tocsenvironmentproperties"></a>

```json
{
  "PropertyGroups": {}
}
```

Describes execution properties for a Flink-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PropertyGroups|object|true|none|none|

<h2 id="tocS_ApplicationSnapshotConfiguration">ApplicationSnapshotConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsnapshotconfiguration"></a>
<a id="schema_ApplicationSnapshotConfiguration"></a>
<a id="tocSapplicationsnapshotconfiguration"></a>
<a id="tocsapplicationsnapshotconfiguration"></a>

```json
{
  "SnapshotsEnabled": {}
}
```

Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotsEnabled|object|true|none|none|

<h2 id="tocS_VpcConfigurations">VpcConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfigurations"></a>
<a id="schema_VpcConfigurations"></a>
<a id="tocSvpcconfigurations"></a>
<a id="tocsvpcconfigurations"></a>

```json
[
  {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  }
]
```

<h2 id="tocS_ZeppelinApplicationConfiguration">ZeppelinApplicationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemazeppelinapplicationconfiguration"></a>
<a id="schema_ZeppelinApplicationConfiguration"></a>
<a id="tocSzeppelinapplicationconfiguration"></a>
<a id="tocszeppelinapplicationconfiguration"></a>

```json
{
  "MonitoringConfiguration": {
    "LogLevel": {}
  },
  "CatalogConfiguration": {
    "GlueDataCatalogConfiguration": {
      "DatabaseARN": {}
    }
  },
  "DeployAsApplicationConfiguration": {
    "S3ContentLocation": {
      "BucketARN": {},
      "BasePath": {}
    }
  },
  "CustomArtifactsConfiguration": {}
}
```

The configuration of a Kinesis Data Analytics Studio notebook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitoringConfiguration|object|false|none|none|
|CatalogConfiguration|object|false|none|none|
|DeployAsApplicationConfiguration|object|false|none|none|
|CustomArtifactsConfiguration|object|false|none|none|

<h2 id="tocS_ApplicationConfiguration">ApplicationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationconfiguration"></a>
<a id="schema_ApplicationConfiguration"></a>
<a id="tocSapplicationconfiguration"></a>
<a id="tocsapplicationconfiguration"></a>

```json
{
  "SqlApplicationConfiguration": {
    "Inputs": {},
    "Outputs": {},
    "ReferenceDataSources": {}
  },
  "FlinkApplicationConfiguration": {
    "CheckpointConfiguration": {
      "ConfigurationType": {},
      "CheckpointingEnabled": {},
      "CheckpointInterval": {},
      "MinPauseBetweenCheckpoints": {}
    },
    "MonitoringConfiguration": {
      "ConfigurationType": {},
      "MetricsLevel": {},
      "LogLevel": {}
    },
    "ParallelismConfiguration": {
      "ConfigurationType": {},
      "Parallelism": {},
      "ParallelismPerKPU": {},
      "AutoScalingEnabled": {}
    }
  },
  "EnvironmentProperties": {
    "PropertyGroups": {}
  },
  "ApplicationCodeConfiguration": {
    "CodeContent": {
      "TextContent": {},
      "ZipFileContent": {},
      "S3ContentLocation": {
        "BucketARN": {},
        "FileKey": {},
        "ObjectVersion": {}
      }
    },
    "CodeContentType": {}
  },
  "ApplicationSnapshotConfiguration": {
    "SnapshotsEnabled": {}
  },
  "VpcConfigurations": {},
  "ZeppelinApplicationConfiguration": {
    "MonitoringConfiguration": {
      "LogLevel": {}
    },
    "CatalogConfiguration": {
      "GlueDataCatalogConfiguration": {
        "DatabaseARN": {}
      }
    },
    "DeployAsApplicationConfiguration": {
      "S3ContentLocation": {
        "BucketARN": {},
        "BasePath": {}
      }
    },
    "CustomArtifactsConfiguration": {}
  }
}
```

Specifies the creation parameters for a Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SqlApplicationConfiguration|object|false|none|none|
|FlinkApplicationConfiguration|object|false|none|none|
|EnvironmentProperties|object|false|none|none|
|ApplicationCodeConfiguration|object|false|none|none|
|ApplicationSnapshotConfiguration|object|false|none|none|
|VpcConfigurations|object|false|none|none|
|ZeppelinApplicationConfiguration|object|false|none|none|

<h2 id="tocS_SqlApplicationConfigurationDescription">SqlApplicationConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemasqlapplicationconfigurationdescription"></a>
<a id="schema_SqlApplicationConfigurationDescription"></a>
<a id="tocSsqlapplicationconfigurationdescription"></a>
<a id="tocssqlapplicationconfigurationdescription"></a>

```json
{
  "InputDescriptions": {},
  "OutputDescriptions": {},
  "ReferenceDataSourceDescriptions": {}
}
```

Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputDescriptions|object|false|none|none|
|OutputDescriptions|object|false|none|none|
|ReferenceDataSourceDescriptions|object|false|none|none|

<h2 id="tocS_RunConfigurationDescription">RunConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemarunconfigurationdescription"></a>
<a id="schema_RunConfigurationDescription"></a>
<a id="tocSrunconfigurationdescription"></a>
<a id="tocsrunconfigurationdescription"></a>

```json
{
  "ApplicationRestoreConfigurationDescription": {
    "ApplicationRestoreType": {},
    "SnapshotName": {}
  },
  "FlinkRunConfigurationDescription": {
    "AllowNonRestoredState": {}
  }
}
```

Describes the starting properties for a Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationRestoreConfigurationDescription|object|false|none|none|
|FlinkRunConfigurationDescription|[FlinkRunConfiguration](#schemaflinkrunconfiguration)|false|none|Describes the starting parameters for a Flink-based Kinesis Data Analytics application.|

<h2 id="tocS_FlinkApplicationConfigurationDescription">FlinkApplicationConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaflinkapplicationconfigurationdescription"></a>
<a id="schema_FlinkApplicationConfigurationDescription"></a>
<a id="tocSflinkapplicationconfigurationdescription"></a>
<a id="tocsflinkapplicationconfigurationdescription"></a>

```json
{
  "CheckpointConfigurationDescription": {
    "ConfigurationType": {},
    "CheckpointingEnabled": {},
    "CheckpointInterval": {},
    "MinPauseBetweenCheckpoints": {}
  },
  "MonitoringConfigurationDescription": {
    "ConfigurationType": {},
    "MetricsLevel": {},
    "LogLevel": {}
  },
  "ParallelismConfigurationDescription": {
    "ConfigurationType": {},
    "Parallelism": {},
    "ParallelismPerKPU": {},
    "CurrentParallelism": {},
    "AutoScalingEnabled": {}
  },
  "JobPlanDescription": {}
}
```

Describes configuration parameters for a Flink-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CheckpointConfigurationDescription|object|false|none|none|
|MonitoringConfigurationDescription|object|false|none|none|
|ParallelismConfigurationDescription|object|false|none|none|
|JobPlanDescription|object|false|none|none|

<h2 id="tocS_EnvironmentPropertyDescriptions">EnvironmentPropertyDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentpropertydescriptions"></a>
<a id="schema_EnvironmentPropertyDescriptions"></a>
<a id="tocSenvironmentpropertydescriptions"></a>
<a id="tocsenvironmentpropertydescriptions"></a>

```json
{
  "PropertyGroupDescriptions": {}
}
```

Describes the execution properties for an Apache Flink runtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PropertyGroupDescriptions|object|false|none|none|

<h2 id="tocS_ApplicationSnapshotConfigurationDescription">ApplicationSnapshotConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsnapshotconfigurationdescription"></a>
<a id="schema_ApplicationSnapshotConfigurationDescription"></a>
<a id="tocSapplicationsnapshotconfigurationdescription"></a>
<a id="tocsapplicationsnapshotconfigurationdescription"></a>

```json
{
  "SnapshotsEnabled": {}
}
```

Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotsEnabled|object|true|none|none|

<h2 id="tocS_VpcConfigurationDescriptions">VpcConfigurationDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfigurationdescriptions"></a>
<a id="schema_VpcConfigurationDescriptions"></a>
<a id="tocSvpcconfigurationdescriptions"></a>
<a id="tocsvpcconfigurationdescriptions"></a>

```json
[
  {
    "VpcConfigurationId": {},
    "VpcId": {},
    "SubnetIds": {},
    "SecurityGroupIds": {}
  }
]
```

<h2 id="tocS_ZeppelinApplicationConfigurationDescription">ZeppelinApplicationConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemazeppelinapplicationconfigurationdescription"></a>
<a id="schema_ZeppelinApplicationConfigurationDescription"></a>
<a id="tocSzeppelinapplicationconfigurationdescription"></a>
<a id="tocszeppelinapplicationconfigurationdescription"></a>

```json
{
  "MonitoringConfigurationDescription": {
    "LogLevel": {}
  },
  "CatalogConfigurationDescription": {
    "GlueDataCatalogConfigurationDescription": {
      "DatabaseARN": {}
    }
  },
  "DeployAsApplicationConfigurationDescription": {
    "S3ContentLocationDescription": {
      "BucketARN": {},
      "BasePath": {}
    }
  },
  "CustomArtifactsConfigurationDescription": {}
}
```

The configuration of a Kinesis Data Analytics Studio notebook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitoringConfigurationDescription|object|true|none|none|
|CatalogConfigurationDescription|object|false|none|none|
|DeployAsApplicationConfigurationDescription|object|false|none|none|
|CustomArtifactsConfigurationDescription|object|false|none|none|

<h2 id="tocS_ApplicationConfigurationDescription">ApplicationConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationconfigurationdescription"></a>
<a id="schema_ApplicationConfigurationDescription"></a>
<a id="tocSapplicationconfigurationdescription"></a>
<a id="tocsapplicationconfigurationdescription"></a>

```json
{
  "SqlApplicationConfigurationDescription": {
    "InputDescriptions": {},
    "OutputDescriptions": {},
    "ReferenceDataSourceDescriptions": {}
  },
  "ApplicationCodeConfigurationDescription": {
    "CodeContentType": {},
    "CodeContentDescription": {
      "TextContent": {},
      "CodeMD5": {},
      "CodeSize": {},
      "S3ApplicationCodeLocationDescription": {
        "BucketARN": {},
        "FileKey": {},
        "ObjectVersion": {}
      }
    }
  },
  "RunConfigurationDescription": {
    "ApplicationRestoreConfigurationDescription": {
      "ApplicationRestoreType": {},
      "SnapshotName": {}
    },
    "FlinkRunConfigurationDescription": {
      "AllowNonRestoredState": {}
    }
  },
  "FlinkApplicationConfigurationDescription": {
    "CheckpointConfigurationDescription": {
      "ConfigurationType": {},
      "CheckpointingEnabled": {},
      "CheckpointInterval": {},
      "MinPauseBetweenCheckpoints": {}
    },
    "MonitoringConfigurationDescription": {
      "ConfigurationType": {},
      "MetricsLevel": {},
      "LogLevel": {}
    },
    "ParallelismConfigurationDescription": {
      "ConfigurationType": {},
      "Parallelism": {},
      "ParallelismPerKPU": {},
      "CurrentParallelism": {},
      "AutoScalingEnabled": {}
    },
    "JobPlanDescription": {}
  },
  "EnvironmentPropertyDescriptions": {
    "PropertyGroupDescriptions": {}
  },
  "ApplicationSnapshotConfigurationDescription": {
    "SnapshotsEnabled": {}
  },
  "VpcConfigurationDescriptions": {},
  "ZeppelinApplicationConfigurationDescription": {
    "MonitoringConfigurationDescription": {
      "LogLevel": {}
    },
    "CatalogConfigurationDescription": {
      "GlueDataCatalogConfigurationDescription": {
        "DatabaseARN": {}
      }
    },
    "DeployAsApplicationConfigurationDescription": {
      "S3ContentLocationDescription": {
        "BucketARN": {},
        "BasePath": {}
      }
    },
    "CustomArtifactsConfigurationDescription": {}
  }
}
```

Describes details about the application code and starting parameters for a Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SqlApplicationConfigurationDescription|object|false|none|none|
|ApplicationCodeConfigurationDescription|object|false|none|none|
|RunConfigurationDescription|object|false|none|none|
|FlinkApplicationConfigurationDescription|object|false|none|none|
|EnvironmentPropertyDescriptions|object|false|none|none|
|ApplicationSnapshotConfigurationDescription|object|false|none|none|
|VpcConfigurationDescriptions|object|false|none|none|
|ZeppelinApplicationConfigurationDescription|object|false|none|none|

<h2 id="tocS_SqlApplicationConfigurationUpdate">SqlApplicationConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemasqlapplicationconfigurationupdate"></a>
<a id="schema_SqlApplicationConfigurationUpdate"></a>
<a id="tocSsqlapplicationconfigurationupdate"></a>
<a id="tocssqlapplicationconfigurationupdate"></a>

```json
{
  "InputUpdates": {},
  "OutputUpdates": {},
  "ReferenceDataSourceUpdates": {}
}
```

Describes updates to the input streams, destination streams, and reference data sources for a SQL-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputUpdates|object|false|none|none|
|OutputUpdates|object|false|none|none|
|ReferenceDataSourceUpdates|object|false|none|none|

<h2 id="tocS_FlinkApplicationConfigurationUpdate">FlinkApplicationConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaflinkapplicationconfigurationupdate"></a>
<a id="schema_FlinkApplicationConfigurationUpdate"></a>
<a id="tocSflinkapplicationconfigurationupdate"></a>
<a id="tocsflinkapplicationconfigurationupdate"></a>

```json
{
  "CheckpointConfigurationUpdate": {
    "ConfigurationTypeUpdate": {},
    "CheckpointingEnabledUpdate": {},
    "CheckpointIntervalUpdate": {},
    "MinPauseBetweenCheckpointsUpdate": {}
  },
  "MonitoringConfigurationUpdate": {
    "ConfigurationTypeUpdate": {},
    "MetricsLevelUpdate": {},
    "LogLevelUpdate": {}
  },
  "ParallelismConfigurationUpdate": {
    "ConfigurationTypeUpdate": {},
    "ParallelismUpdate": {},
    "ParallelismPerKPUUpdate": {},
    "AutoScalingEnabledUpdate": {}
  }
}
```

Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CheckpointConfigurationUpdate|object|false|none|none|
|MonitoringConfigurationUpdate|object|false|none|none|
|ParallelismConfigurationUpdate|object|false|none|none|

<h2 id="tocS_EnvironmentPropertyUpdates">EnvironmentPropertyUpdates</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentpropertyupdates"></a>
<a id="schema_EnvironmentPropertyUpdates"></a>
<a id="tocSenvironmentpropertyupdates"></a>
<a id="tocsenvironmentpropertyupdates"></a>

```json
{
  "PropertyGroups": {}
}
```

Describes updates to the execution property groups for a Flink-based Kinesis Data Analytics application or a Studio notebook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PropertyGroups|object|true|none|none|

<h2 id="tocS_ApplicationSnapshotConfigurationUpdate">ApplicationSnapshotConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsnapshotconfigurationupdate"></a>
<a id="schema_ApplicationSnapshotConfigurationUpdate"></a>
<a id="tocSapplicationsnapshotconfigurationupdate"></a>
<a id="tocsapplicationsnapshotconfigurationupdate"></a>

```json
{
  "SnapshotsEnabledUpdate": {}
}
```

Describes updates to whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotsEnabledUpdate|object|true|none|none|

<h2 id="tocS_VpcConfigurationUpdates">VpcConfigurationUpdates</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfigurationupdates"></a>
<a id="schema_VpcConfigurationUpdates"></a>
<a id="tocSvpcconfigurationupdates"></a>
<a id="tocsvpcconfigurationupdates"></a>

```json
[
  {
    "VpcConfigurationId": {},
    "SubnetIdUpdates": {},
    "SecurityGroupIdUpdates": {}
  }
]
```

<h2 id="tocS_ZeppelinApplicationConfigurationUpdate">ZeppelinApplicationConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemazeppelinapplicationconfigurationupdate"></a>
<a id="schema_ZeppelinApplicationConfigurationUpdate"></a>
<a id="tocSzeppelinapplicationconfigurationupdate"></a>
<a id="tocszeppelinapplicationconfigurationupdate"></a>

```json
{
  "MonitoringConfigurationUpdate": {
    "LogLevelUpdate": {}
  },
  "CatalogConfigurationUpdate": {
    "GlueDataCatalogConfigurationUpdate": {
      "DatabaseARNUpdate": {}
    }
  },
  "DeployAsApplicationConfigurationUpdate": {
    "S3ContentLocationUpdate": {
      "BucketARNUpdate": {},
      "BasePathUpdate": {}
    }
  },
  "CustomArtifactsConfigurationUpdate": {}
}
```

Updates to the configuration of Kinesis Data Analytics Studio notebook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitoringConfigurationUpdate|object|false|none|none|
|CatalogConfigurationUpdate|object|false|none|none|
|DeployAsApplicationConfigurationUpdate|[DeployAsApplicationConfigurationUpdate](#schemadeployasapplicationconfigurationupdate)|false|none|Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.|
|CustomArtifactsConfigurationUpdate|object|false|none|none|

<h2 id="tocS_ApplicationConfigurationUpdate">ApplicationConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationconfigurationupdate"></a>
<a id="schema_ApplicationConfigurationUpdate"></a>
<a id="tocSapplicationconfigurationupdate"></a>
<a id="tocsapplicationconfigurationupdate"></a>

```json
{
  "SqlApplicationConfigurationUpdate": {
    "InputUpdates": {},
    "OutputUpdates": {},
    "ReferenceDataSourceUpdates": {}
  },
  "ApplicationCodeConfigurationUpdate": {
    "CodeContentTypeUpdate": {},
    "CodeContentUpdate": {
      "TextContentUpdate": {},
      "ZipFileContentUpdate": {},
      "S3ContentLocationUpdate": {
        "BucketARNUpdate": {},
        "FileKeyUpdate": {},
        "ObjectVersionUpdate": {}
      }
    }
  },
  "FlinkApplicationConfigurationUpdate": {
    "CheckpointConfigurationUpdate": {
      "ConfigurationTypeUpdate": {},
      "CheckpointingEnabledUpdate": {},
      "CheckpointIntervalUpdate": {},
      "MinPauseBetweenCheckpointsUpdate": {}
    },
    "MonitoringConfigurationUpdate": {
      "ConfigurationTypeUpdate": {},
      "MetricsLevelUpdate": {},
      "LogLevelUpdate": {}
    },
    "ParallelismConfigurationUpdate": {
      "ConfigurationTypeUpdate": {},
      "ParallelismUpdate": {},
      "ParallelismPerKPUUpdate": {},
      "AutoScalingEnabledUpdate": {}
    }
  },
  "EnvironmentPropertyUpdates": {
    "PropertyGroups": {}
  },
  "ApplicationSnapshotConfigurationUpdate": {
    "SnapshotsEnabledUpdate": {}
  },
  "VpcConfigurationUpdates": {},
  "ZeppelinApplicationConfigurationUpdate": {
    "MonitoringConfigurationUpdate": {
      "LogLevelUpdate": {}
    },
    "CatalogConfigurationUpdate": {
      "GlueDataCatalogConfigurationUpdate": {
        "DatabaseARNUpdate": {}
      }
    },
    "DeployAsApplicationConfigurationUpdate": {
      "S3ContentLocationUpdate": {
        "BucketARNUpdate": {},
        "BasePathUpdate": {}
      }
    },
    "CustomArtifactsConfigurationUpdate": {}
  }
}
```

Describes updates to an application's configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SqlApplicationConfigurationUpdate|object|false|none|none|
|ApplicationCodeConfigurationUpdate|object|false|none|none|
|FlinkApplicationConfigurationUpdate|object|false|none|none|
|EnvironmentPropertyUpdates|object|false|none|none|
|ApplicationSnapshotConfigurationUpdate|object|false|none|none|
|VpcConfigurationUpdates|object|false|none|none|
|ZeppelinApplicationConfigurationUpdate|object|false|none|none|

<h2 id="tocS_ApplicationDescription">ApplicationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdescription"></a>
<a id="schema_ApplicationDescription"></a>
<a id="tocSapplicationdescription"></a>
<a id="tocsapplicationdescription"></a>

```json
"string"
```

<h2 id="tocS_RuntimeEnvironment">RuntimeEnvironment</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeenvironment"></a>
<a id="schema_RuntimeEnvironment"></a>
<a id="tocSruntimeenvironment"></a>
<a id="tocsruntimeenvironment"></a>

```json
"SQL-1_0"
```

<h2 id="tocS_RoleARN">RoleARN</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleARN"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_ApplicationStatus">ApplicationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationstatus"></a>
<a id="schema_ApplicationStatus"></a>
<a id="tocSapplicationstatus"></a>
<a id="tocsapplicationstatus"></a>

```json
"DELETING"
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

<h2 id="tocS_ApplicationMaintenanceConfigurationDescription">ApplicationMaintenanceConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationmaintenanceconfigurationdescription"></a>
<a id="schema_ApplicationMaintenanceConfigurationDescription"></a>
<a id="tocSapplicationmaintenanceconfigurationdescription"></a>
<a id="tocsapplicationmaintenanceconfigurationdescription"></a>

```json
{
  "ApplicationMaintenanceWindowStartTime": {},
  "ApplicationMaintenanceWindowEndTime": {}
}
```

The details of the maintenance configuration for the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationMaintenanceWindowStartTime|object|true|none|none|
|ApplicationMaintenanceWindowEndTime|object|true|none|none|

<h2 id="tocS_ApplicationMode">ApplicationMode</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationmode"></a>
<a id="schema_ApplicationMode"></a>
<a id="tocSapplicationmode"></a>
<a id="tocsapplicationmode"></a>

```json
"STREAMING"
```

<h2 id="tocS_ApplicationDetail">ApplicationDetail</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdetail"></a>
<a id="schema_ApplicationDetail"></a>
<a id="tocSapplicationdetail"></a>
<a id="tocsapplicationdetail"></a>

```json
{
  "ApplicationARN": {},
  "ApplicationDescription": {},
  "ApplicationName": {},
  "RuntimeEnvironment": {},
  "ServiceExecutionRole": {},
  "ApplicationStatus": {},
  "ApplicationVersionId": {},
  "CreateTimestamp": {},
  "LastUpdateTimestamp": {},
  "ApplicationConfigurationDescription": {
    "SqlApplicationConfigurationDescription": {
      "InputDescriptions": {},
      "OutputDescriptions": {},
      "ReferenceDataSourceDescriptions": {}
    },
    "ApplicationCodeConfigurationDescription": {
      "CodeContentType": {},
      "CodeContentDescription": {
        "TextContent": {},
        "CodeMD5": {},
        "CodeSize": {},
        "S3ApplicationCodeLocationDescription": {
          "BucketARN": {},
          "FileKey": {},
          "ObjectVersion": {}
        }
      }
    },
    "RunConfigurationDescription": {
      "ApplicationRestoreConfigurationDescription": {
        "ApplicationRestoreType": {},
        "SnapshotName": {}
      },
      "FlinkRunConfigurationDescription": {
        "AllowNonRestoredState": {}
      }
    },
    "FlinkApplicationConfigurationDescription": {
      "CheckpointConfigurationDescription": {
        "ConfigurationType": {},
        "CheckpointingEnabled": {},
        "CheckpointInterval": {},
        "MinPauseBetweenCheckpoints": {}
      },
      "MonitoringConfigurationDescription": {
        "ConfigurationType": {},
        "MetricsLevel": {},
        "LogLevel": {}
      },
      "ParallelismConfigurationDescription": {
        "ConfigurationType": {},
        "Parallelism": {},
        "ParallelismPerKPU": {},
        "CurrentParallelism": {},
        "AutoScalingEnabled": {}
      },
      "JobPlanDescription": {}
    },
    "EnvironmentPropertyDescriptions": {
      "PropertyGroupDescriptions": {}
    },
    "ApplicationSnapshotConfigurationDescription": {
      "SnapshotsEnabled": {}
    },
    "VpcConfigurationDescriptions": {},
    "ZeppelinApplicationConfigurationDescription": {
      "MonitoringConfigurationDescription": {
        "LogLevel": {}
      },
      "CatalogConfigurationDescription": {
        "GlueDataCatalogConfigurationDescription": {
          "DatabaseARN": {}
        }
      },
      "DeployAsApplicationConfigurationDescription": {
        "S3ContentLocationDescription": {
          "BucketARN": {},
          "BasePath": {}
        }
      },
      "CustomArtifactsConfigurationDescription": {}
    }
  },
  "CloudWatchLoggingOptionDescriptions": {},
  "ApplicationMaintenanceConfigurationDescription": {
    "ApplicationMaintenanceWindowStartTime": {},
    "ApplicationMaintenanceWindowEndTime": {}
  },
  "ApplicationVersionUpdatedFrom": {},
  "ApplicationVersionRolledBackFrom": {},
  "ConditionalToken": {},
  "ApplicationVersionRolledBackTo": {},
  "ApplicationMode": {}
}
```

Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationARN|object|true|none|none|
|ApplicationDescription|object|false|none|none|
|ApplicationName|object|true|none|none|
|RuntimeEnvironment|object|true|none|none|
|ServiceExecutionRole|object|false|none|none|
|ApplicationStatus|object|true|none|none|
|ApplicationVersionId|object|true|none|none|
|CreateTimestamp|object|false|none|none|
|LastUpdateTimestamp|object|false|none|none|
|ApplicationConfigurationDescription|object|false|none|none|
|CloudWatchLoggingOptionDescriptions|object|false|none|none|
|ApplicationMaintenanceConfigurationDescription|object|false|none|none|
|ApplicationVersionUpdatedFrom|object|false|none|none|
|ApplicationVersionRolledBackFrom|object|false|none|none|
|ConditionalToken|object|false|none|none|
|ApplicationVersionRolledBackTo|object|false|none|none|
|ApplicationMode|object|false|none|none|

<h2 id="tocS_ApplicationMaintenanceWindowStartTime">ApplicationMaintenanceWindowStartTime</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationmaintenancewindowstarttime"></a>
<a id="schema_ApplicationMaintenanceWindowStartTime"></a>
<a id="tocSapplicationmaintenancewindowstarttime"></a>
<a id="tocsapplicationmaintenancewindowstarttime"></a>

```json
"strin"
```

<h2 id="tocS_ApplicationMaintenanceWindowEndTime">ApplicationMaintenanceWindowEndTime</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationmaintenancewindowendtime"></a>
<a id="schema_ApplicationMaintenanceWindowEndTime"></a>
<a id="tocSapplicationmaintenancewindowendtime"></a>
<a id="tocsapplicationmaintenancewindowendtime"></a>

```json
"strin"
```

<h2 id="tocS_ApplicationMaintenanceConfigurationUpdate">ApplicationMaintenanceConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationmaintenanceconfigurationupdate"></a>
<a id="schema_ApplicationMaintenanceConfigurationUpdate"></a>
<a id="tocSapplicationmaintenanceconfigurationupdate"></a>
<a id="tocsapplicationmaintenanceconfigurationupdate"></a>

```json
{
  "ApplicationMaintenanceWindowStartTimeUpdate": {}
}
```

Describes the updated maintenance configuration for the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationMaintenanceWindowStartTimeUpdate|object|true|none|none|

<h2 id="tocS_ApplicationRestoreType">ApplicationRestoreType</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationrestoretype"></a>
<a id="schema_ApplicationRestoreType"></a>
<a id="tocSapplicationrestoretype"></a>
<a id="tocsapplicationrestoretype"></a>

```json
"SKIP_RESTORE_FROM_SNAPSHOT"
```

<h2 id="tocS_SnapshotName">SnapshotName</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotname"></a>
<a id="schema_SnapshotName"></a>
<a id="tocSsnapshotname"></a>
<a id="tocssnapshotname"></a>

```json
"string"
```

<h2 id="tocS_ApplicationRestoreConfiguration">ApplicationRestoreConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationrestoreconfiguration"></a>
<a id="schema_ApplicationRestoreConfiguration"></a>
<a id="tocSapplicationrestoreconfiguration"></a>
<a id="tocsapplicationrestoreconfiguration"></a>

```json
{
  "ApplicationRestoreType": {},
  "SnapshotName": {}
}
```

Specifies the method and snapshot to use when restarting an application using previously saved application state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationRestoreType|object|true|none|none|
|SnapshotName|object|false|none|none|

<h2 id="tocS_BooleanObject">BooleanObject</h2>
<!-- backwards compatibility -->
<a id="schemabooleanobject"></a>
<a id="schema_BooleanObject"></a>
<a id="tocSbooleanobject"></a>
<a id="tocsbooleanobject"></a>

```json
true
```

<h2 id="tocS_ApplicationSummary">ApplicationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsummary"></a>
<a id="schema_ApplicationSummary"></a>
<a id="tocSapplicationsummary"></a>
<a id="tocsapplicationsummary"></a>

```json
{
  "ApplicationName": {},
  "ApplicationARN": {},
  "ApplicationStatus": {},
  "ApplicationVersionId": {},
  "RuntimeEnvironment": {},
  "ApplicationMode": {}
}
```

Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|ApplicationARN|object|true|none|none|
|ApplicationStatus|object|true|none|none|
|ApplicationVersionId|object|true|none|none|
|RuntimeEnvironment|object|true|none|none|
|ApplicationMode|object|false|none|none|

<h2 id="tocS_ApplicationSummaries">ApplicationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsummaries"></a>
<a id="schema_ApplicationSummaries"></a>
<a id="tocSapplicationsummaries"></a>
<a id="tocsapplicationsummaries"></a>

```json
[
  {
    "ApplicationName": {},
    "ApplicationARN": {},
    "ApplicationStatus": {},
    "ApplicationVersionId": {},
    "RuntimeEnvironment": {},
    "ApplicationMode": {}
  }
]
```

<h2 id="tocS_ApplicationVersionSummary">ApplicationVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationversionsummary"></a>
<a id="schema_ApplicationVersionSummary"></a>
<a id="tocSapplicationversionsummary"></a>
<a id="tocsapplicationversionsummary"></a>

```json
{
  "ApplicationVersionId": {},
  "ApplicationStatus": {}
}
```

The summary of the application version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationVersionId|object|true|none|none|
|ApplicationStatus|object|true|none|none|

<h2 id="tocS_ApplicationVersionSummaries">ApplicationVersionSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationversionsummaries"></a>
<a id="schema_ApplicationVersionSummaries"></a>
<a id="tocSapplicationversionsummaries"></a>
<a id="tocsapplicationversionsummaries"></a>

```json
[
  {
    "ApplicationVersionId": {},
    "ApplicationStatus": {}
  }
]
```

<h2 id="tocS_ArtifactType">ArtifactType</h2>
<!-- backwards compatibility -->
<a id="schemaartifacttype"></a>
<a id="schema_ArtifactType"></a>
<a id="tocSartifacttype"></a>
<a id="tocsartifacttype"></a>

```json
"UDF"
```

<h2 id="tocS_AuthorizedUrl">AuthorizedUrl</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizedurl"></a>
<a id="schema_AuthorizedUrl"></a>
<a id="tocSauthorizedurl"></a>
<a id="tocsauthorizedurl"></a>

```json
"string"
```

<h2 id="tocS_BasePath">BasePath</h2>
<!-- backwards compatibility -->
<a id="schemabasepath"></a>
<a id="schema_BasePath"></a>
<a id="tocSbasepath"></a>
<a id="tocsbasepath"></a>

```json
"string"
```

<h2 id="tocS_BucketARN">BucketARN</h2>
<!-- backwards compatibility -->
<a id="schemabucketarn"></a>
<a id="schema_BucketARN"></a>
<a id="tocSbucketarn"></a>
<a id="tocsbucketarn"></a>

```json
"string"
```

<h2 id="tocS_RecordRowDelimiter">RecordRowDelimiter</h2>
<!-- backwards compatibility -->
<a id="schemarecordrowdelimiter"></a>
<a id="schema_RecordRowDelimiter"></a>
<a id="tocSrecordrowdelimiter"></a>
<a id="tocsrecordrowdelimiter"></a>

```json
"string"
```

<h2 id="tocS_RecordColumnDelimiter">RecordColumnDelimiter</h2>
<!-- backwards compatibility -->
<a id="schemarecordcolumndelimiter"></a>
<a id="schema_RecordColumnDelimiter"></a>
<a id="tocSrecordcolumndelimiter"></a>
<a id="tocsrecordcolumndelimiter"></a>

```json
"string"
```

<h2 id="tocS_CSVMappingParameters">CSVMappingParameters</h2>
<!-- backwards compatibility -->
<a id="schemacsvmappingparameters"></a>
<a id="schema_CSVMappingParameters"></a>
<a id="tocScsvmappingparameters"></a>
<a id="tocscsvmappingparameters"></a>

```json
{
  "RecordRowDelimiter": {},
  "RecordColumnDelimiter": {}
}
```

<p>For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordRowDelimiter|object|true|none|none|
|RecordColumnDelimiter|object|true|none|none|

<h2 id="tocS_GlueDataCatalogConfiguration">GlueDataCatalogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemagluedatacatalogconfiguration"></a>
<a id="schema_GlueDataCatalogConfiguration"></a>
<a id="tocSgluedatacatalogconfiguration"></a>
<a id="tocsgluedatacatalogconfiguration"></a>

```json
{
  "DatabaseARN": {}
}
```

The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseARN|object|true|none|none|

<h2 id="tocS_CatalogConfiguration">CatalogConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacatalogconfiguration"></a>
<a id="schema_CatalogConfiguration"></a>
<a id="tocScatalogconfiguration"></a>
<a id="tocscatalogconfiguration"></a>

```json
{
  "GlueDataCatalogConfiguration": {
    "DatabaseARN": {}
  }
}
```

The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlueDataCatalogConfiguration|object|true|none|none|

<h2 id="tocS_GlueDataCatalogConfigurationDescription">GlueDataCatalogConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemagluedatacatalogconfigurationdescription"></a>
<a id="schema_GlueDataCatalogConfigurationDescription"></a>
<a id="tocSgluedatacatalogconfigurationdescription"></a>
<a id="tocsgluedatacatalogconfigurationdescription"></a>

```json
{
  "DatabaseARN": {}
}
```

The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseARN|object|true|none|none|

<h2 id="tocS_CatalogConfigurationDescription">CatalogConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemacatalogconfigurationdescription"></a>
<a id="schema_CatalogConfigurationDescription"></a>
<a id="tocScatalogconfigurationdescription"></a>
<a id="tocscatalogconfigurationdescription"></a>

```json
{
  "GlueDataCatalogConfigurationDescription": {
    "DatabaseARN": {}
  }
}
```

The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlueDataCatalogConfigurationDescription|object|true|none|none|

<h2 id="tocS_GlueDataCatalogConfigurationUpdate">GlueDataCatalogConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemagluedatacatalogconfigurationupdate"></a>
<a id="schema_GlueDataCatalogConfigurationUpdate"></a>
<a id="tocSgluedatacatalogconfigurationupdate"></a>
<a id="tocsgluedatacatalogconfigurationupdate"></a>

```json
{
  "DatabaseARNUpdate": {}
}
```

Updates to the configuration of the Glue Data Catalog that you use for SQL queries that you write in a Kinesis Data Analytics Studio notebook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatabaseARNUpdate|object|true|none|none|

<h2 id="tocS_CatalogConfigurationUpdate">CatalogConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacatalogconfigurationupdate"></a>
<a id="schema_CatalogConfigurationUpdate"></a>
<a id="tocScatalogconfigurationupdate"></a>
<a id="tocscatalogconfigurationupdate"></a>

```json
{
  "GlueDataCatalogConfigurationUpdate": {
    "DatabaseARNUpdate": {}
  }
}
```

Updates to the configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GlueDataCatalogConfigurationUpdate|object|true|none|none|

<h2 id="tocS_ConfigurationType">ConfigurationType</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationtype"></a>
<a id="schema_ConfigurationType"></a>
<a id="tocSconfigurationtype"></a>
<a id="tocsconfigurationtype"></a>

```json
"DEFAULT"
```

<h2 id="tocS_CheckpointInterval">CheckpointInterval</h2>
<!-- backwards compatibility -->
<a id="schemacheckpointinterval"></a>
<a id="schema_CheckpointInterval"></a>
<a id="tocScheckpointinterval"></a>
<a id="tocscheckpointinterval"></a>

```json
1
```

<h2 id="tocS_MinPauseBetweenCheckpoints">MinPauseBetweenCheckpoints</h2>
<!-- backwards compatibility -->
<a id="schemaminpausebetweencheckpoints"></a>
<a id="schema_MinPauseBetweenCheckpoints"></a>
<a id="tocSminpausebetweencheckpoints"></a>
<a id="tocsminpausebetweencheckpoints"></a>

```json
0
```

<h2 id="tocS_CheckpointConfiguration">CheckpointConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacheckpointconfiguration"></a>
<a id="schema_CheckpointConfiguration"></a>
<a id="tocScheckpointconfiguration"></a>
<a id="tocscheckpointconfiguration"></a>

```json
{
  "ConfigurationType": {},
  "CheckpointingEnabled": {},
  "CheckpointInterval": {},
  "MinPauseBetweenCheckpoints": {}
}
```

Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationType|object|true|none|none|
|CheckpointingEnabled|object|false|none|none|
|CheckpointInterval|object|false|none|none|
|MinPauseBetweenCheckpoints|object|false|none|none|

<h2 id="tocS_CheckpointConfigurationDescription">CheckpointConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemacheckpointconfigurationdescription"></a>
<a id="schema_CheckpointConfigurationDescription"></a>
<a id="tocScheckpointconfigurationdescription"></a>
<a id="tocscheckpointconfigurationdescription"></a>

```json
{
  "ConfigurationType": {},
  "CheckpointingEnabled": {},
  "CheckpointInterval": {},
  "MinPauseBetweenCheckpoints": {}
}
```

Describes checkpointing parameters for a Flink-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationType|object|false|none|none|
|CheckpointingEnabled|object|false|none|none|
|CheckpointInterval|object|false|none|none|
|MinPauseBetweenCheckpoints|object|false|none|none|

<h2 id="tocS_CheckpointConfigurationUpdate">CheckpointConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacheckpointconfigurationupdate"></a>
<a id="schema_CheckpointConfigurationUpdate"></a>
<a id="tocScheckpointconfigurationupdate"></a>
<a id="tocscheckpointconfigurationupdate"></a>

```json
{
  "ConfigurationTypeUpdate": {},
  "CheckpointingEnabledUpdate": {},
  "CheckpointIntervalUpdate": {},
  "MinPauseBetweenCheckpointsUpdate": {}
}
```

Describes updates to the checkpointing parameters for a Flink-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationTypeUpdate|object|false|none|none|
|CheckpointingEnabledUpdate|object|false|none|none|
|CheckpointIntervalUpdate|object|false|none|none|
|MinPauseBetweenCheckpointsUpdate|object|false|none|none|

<h2 id="tocS_LogStreamARN">LogStreamARN</h2>
<!-- backwards compatibility -->
<a id="schemalogstreamarn"></a>
<a id="schema_LogStreamARN"></a>
<a id="tocSlogstreamarn"></a>
<a id="tocslogstreamarn"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchLoggingOptionDescription">CloudWatchLoggingOptionDescription</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggingoptiondescription"></a>
<a id="schema_CloudWatchLoggingOptionDescription"></a>
<a id="tocScloudwatchloggingoptiondescription"></a>
<a id="tocscloudwatchloggingoptiondescription"></a>

```json
{
  "CloudWatchLoggingOptionId": {},
  "LogStreamARN": {},
  "RoleARN": {}
}
```

Describes the Amazon CloudWatch logging option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchLoggingOptionId|object|false|none|none|
|LogStreamARN|object|true|none|none|
|RoleARN|object|false|none|none|

<h2 id="tocS_CloudWatchLoggingOptionUpdate">CloudWatchLoggingOptionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggingoptionupdate"></a>
<a id="schema_CloudWatchLoggingOptionUpdate"></a>
<a id="tocScloudwatchloggingoptionupdate"></a>
<a id="tocscloudwatchloggingoptionupdate"></a>

```json
{
  "CloudWatchLoggingOptionId": {},
  "LogStreamARNUpdate": {}
}
```

Describes the Amazon CloudWatch logging option updates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchLoggingOptionId|object|true|none|none|
|LogStreamARNUpdate|object|false|none|none|

<h2 id="tocS_CloudWatchLoggingOptionUpdates">CloudWatchLoggingOptionUpdates</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggingoptionupdates"></a>
<a id="schema_CloudWatchLoggingOptionUpdates"></a>
<a id="tocScloudwatchloggingoptionupdates"></a>
<a id="tocscloudwatchloggingoptionupdates"></a>

```json
[
  {
    "CloudWatchLoggingOptionId": {},
    "LogStreamARNUpdate": {}
  }
]
```

<h2 id="tocS_CloudWatchLoggingOptions">CloudWatchLoggingOptions</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggingoptions"></a>
<a id="schema_CloudWatchLoggingOptions"></a>
<a id="tocScloudwatchloggingoptions"></a>
<a id="tocscloudwatchloggingoptions"></a>

```json
[
  {
    "LogStreamARN": {}
  }
]
```

<h2 id="tocS_TextContent">TextContent</h2>
<!-- backwards compatibility -->
<a id="schematextcontent"></a>
<a id="schema_TextContent"></a>
<a id="tocStextcontent"></a>
<a id="tocstextcontent"></a>

```json
"string"
```

<h2 id="tocS_ZipFileContent">ZipFileContent</h2>
<!-- backwards compatibility -->
<a id="schemazipfilecontent"></a>
<a id="schema_ZipFileContent"></a>
<a id="tocSzipfilecontent"></a>
<a id="tocszipfilecontent"></a>

```json
"string"
```

<h2 id="tocS_S3ContentLocation">S3ContentLocation</h2>
<!-- backwards compatibility -->
<a id="schemas3contentlocation"></a>
<a id="schema_S3ContentLocation"></a>
<a id="tocSs3contentlocation"></a>
<a id="tocss3contentlocation"></a>

```json
{
  "BucketARN": {},
  "FileKey": {},
  "ObjectVersion": {}
}
```

For a Kinesis Data Analytics application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketARN|object|true|none|none|
|FileKey|object|true|none|none|
|ObjectVersion|object|false|none|none|

<h2 id="tocS_CodeMD5">CodeMD5</h2>
<!-- backwards compatibility -->
<a id="schemacodemd5"></a>
<a id="schema_CodeMD5"></a>
<a id="tocScodemd5"></a>
<a id="tocscodemd5"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringst"
```

<h2 id="tocS_CodeSize">CodeSize</h2>
<!-- backwards compatibility -->
<a id="schemacodesize"></a>
<a id="schema_CodeSize"></a>
<a id="tocScodesize"></a>
<a id="tocscodesize"></a>

```json
0
```

<h2 id="tocS_S3ApplicationCodeLocationDescription">S3ApplicationCodeLocationDescription</h2>
<!-- backwards compatibility -->
<a id="schemas3applicationcodelocationdescription"></a>
<a id="schema_S3ApplicationCodeLocationDescription"></a>
<a id="tocSs3applicationcodelocationdescription"></a>
<a id="tocss3applicationcodelocationdescription"></a>

```json
{
  "BucketARN": {},
  "FileKey": {},
  "ObjectVersion": {}
}
```

Describes the location of an application's code stored in an S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketARN|object|true|none|none|
|FileKey|object|true|none|none|
|ObjectVersion|object|false|none|none|

<h2 id="tocS_S3ContentLocationUpdate">S3ContentLocationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemas3contentlocationupdate"></a>
<a id="schema_S3ContentLocationUpdate"></a>
<a id="tocSs3contentlocationupdate"></a>
<a id="tocss3contentlocationupdate"></a>

```json
{
  "BucketARNUpdate": {},
  "FileKeyUpdate": {},
  "ObjectVersionUpdate": {}
}
```

Describes an update for the Amazon S3 code content location for an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketARNUpdate|object|false|none|none|
|FileKeyUpdate|object|false|none|none|
|ObjectVersionUpdate|object|false|none|none|

<h2 id="tocS_UrlType">UrlType</h2>
<!-- backwards compatibility -->
<a id="schemaurltype"></a>
<a id="schema_UrlType"></a>
<a id="tocSurltype"></a>
<a id="tocsurltype"></a>

```json
"FLINK_DASHBOARD_URL"
```

<h2 id="tocS_SessionExpirationDurationInSeconds">SessionExpirationDurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemasessionexpirationdurationinseconds"></a>
<a id="schema_SessionExpirationDurationInSeconds"></a>
<a id="tocSsessionexpirationdurationinseconds"></a>
<a id="tocssessionexpirationdurationinseconds"></a>

```json
1800
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

<h2 id="tocS_MavenReference">MavenReference</h2>
<!-- backwards compatibility -->
<a id="schemamavenreference"></a>
<a id="schema_MavenReference"></a>
<a id="tocSmavenreference"></a>
<a id="tocsmavenreference"></a>

```json
{
  "GroupId": {},
  "ArtifactId": {},
  "Version": {}
}
```

The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GroupId|object|true|none|none|
|ArtifactId|object|true|none|none|
|Version|object|true|none|none|

<h2 id="tocS_CustomArtifactConfiguration">CustomArtifactConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacustomartifactconfiguration"></a>
<a id="schema_CustomArtifactConfiguration"></a>
<a id="tocScustomartifactconfiguration"></a>
<a id="tocscustomartifactconfiguration"></a>

```json
{
  "ArtifactType": {},
  "S3ContentLocation": {
    "BucketARN": {},
    "FileKey": {},
    "ObjectVersion": {}
  },
  "MavenReference": {
    "GroupId": {},
    "ArtifactId": {},
    "Version": {}
  }
}
```

Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArtifactType|object|true|none|none|
|S3ContentLocation|[S3ContentLocation](#schemas3contentlocation)|false|none|For a Kinesis Data Analytics application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. |
|MavenReference|object|false|none|none|

<h2 id="tocS_CustomArtifactConfigurationDescription">CustomArtifactConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemacustomartifactconfigurationdescription"></a>
<a id="schema_CustomArtifactConfigurationDescription"></a>
<a id="tocScustomartifactconfigurationdescription"></a>
<a id="tocscustomartifactconfigurationdescription"></a>

```json
{
  "ArtifactType": {},
  "S3ContentLocationDescription": {
    "BucketARN": {},
    "FileKey": {},
    "ObjectVersion": {}
  },
  "MavenReferenceDescription": {
    "GroupId": {},
    "ArtifactId": {},
    "Version": {}
  }
}
```

Specifies a dependency JAR or a JAR of user-defined functions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArtifactType|object|false|none|none|
|S3ContentLocationDescription|[S3ContentLocation](#schemas3contentlocation)|false|none|For a Kinesis Data Analytics application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. |
|MavenReferenceDescription|object|false|none|none|

<h2 id="tocS_CustomArtifactsConfigurationDescriptionList">CustomArtifactsConfigurationDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemacustomartifactsconfigurationdescriptionlist"></a>
<a id="schema_CustomArtifactsConfigurationDescriptionList"></a>
<a id="tocScustomartifactsconfigurationdescriptionlist"></a>
<a id="tocscustomartifactsconfigurationdescriptionlist"></a>

```json
[
  {
    "ArtifactType": {},
    "S3ContentLocationDescription": {
      "BucketARN": {},
      "FileKey": {},
      "ObjectVersion": {}
    },
    "MavenReferenceDescription": {
      "GroupId": {},
      "ArtifactId": {},
      "Version": {}
    }
  }
]
```

<h2 id="tocS_CustomArtifactsConfigurationList">CustomArtifactsConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemacustomartifactsconfigurationlist"></a>
<a id="schema_CustomArtifactsConfigurationList"></a>
<a id="tocScustomartifactsconfigurationlist"></a>
<a id="tocscustomartifactsconfigurationlist"></a>

```json
[
  {
    "ArtifactType": {},
    "S3ContentLocation": {
      "BucketARN": {},
      "FileKey": {},
      "ObjectVersion": {}
    },
    "MavenReference": {
      "GroupId": {},
      "ArtifactId": {},
      "Version": {}
    }
  }
]
```

<h2 id="tocS_DatabaseARN">DatabaseARN</h2>
<!-- backwards compatibility -->
<a id="schemadatabasearn"></a>
<a id="schema_DatabaseARN"></a>
<a id="tocSdatabasearn"></a>
<a id="tocsdatabasearn"></a>

```json
"string"
```

<h2 id="tocS_S3ContentBaseLocation">S3ContentBaseLocation</h2>
<!-- backwards compatibility -->
<a id="schemas3contentbaselocation"></a>
<a id="schema_S3ContentBaseLocation"></a>
<a id="tocSs3contentbaselocation"></a>
<a id="tocss3contentbaselocation"></a>

```json
{
  "BucketARN": {},
  "BasePath": {}
}
```

The S3 bucket that holds the application information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketARN|object|true|none|none|
|BasePath|object|false|none|none|

<h2 id="tocS_DeployAsApplicationConfiguration">DeployAsApplicationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeployasapplicationconfiguration"></a>
<a id="schema_DeployAsApplicationConfiguration"></a>
<a id="tocSdeployasapplicationconfiguration"></a>
<a id="tocsdeployasapplicationconfiguration"></a>

```json
{
  "S3ContentLocation": {
    "BucketARN": {},
    "BasePath": {}
  }
}
```

The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3ContentLocation|object|true|none|none|

<h2 id="tocS_S3ContentBaseLocationDescription">S3ContentBaseLocationDescription</h2>
<!-- backwards compatibility -->
<a id="schemas3contentbaselocationdescription"></a>
<a id="schema_S3ContentBaseLocationDescription"></a>
<a id="tocSs3contentbaselocationdescription"></a>
<a id="tocss3contentbaselocationdescription"></a>

```json
{
  "BucketARN": {},
  "BasePath": {}
}
```

The description of the S3 base location that holds the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketARN|object|true|none|none|
|BasePath|object|false|none|none|

<h2 id="tocS_DeployAsApplicationConfigurationDescription">DeployAsApplicationConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemadeployasapplicationconfigurationdescription"></a>
<a id="schema_DeployAsApplicationConfigurationDescription"></a>
<a id="tocSdeployasapplicationconfigurationdescription"></a>
<a id="tocsdeployasapplicationconfigurationdescription"></a>

```json
{
  "S3ContentLocationDescription": {
    "BucketARN": {},
    "BasePath": {}
  }
}
```

The configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3ContentLocationDescription|object|true|none|none|

<h2 id="tocS_S3ContentBaseLocationUpdate">S3ContentBaseLocationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemas3contentbaselocationupdate"></a>
<a id="schema_S3ContentBaseLocationUpdate"></a>
<a id="tocSs3contentbaselocationupdate"></a>
<a id="tocss3contentbaselocationupdate"></a>

```json
{
  "BucketARNUpdate": {},
  "BasePathUpdate": {}
}
```

The information required to update the S3 base location that holds the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketARNUpdate|object|false|none|none|
|BasePathUpdate|object|false|none|none|

<h2 id="tocS_DeployAsApplicationConfigurationUpdate">DeployAsApplicationConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadeployasapplicationconfigurationupdate"></a>
<a id="schema_DeployAsApplicationConfigurationUpdate"></a>
<a id="tocSdeployasapplicationconfigurationupdate"></a>
<a id="tocsdeployasapplicationconfigurationupdate"></a>

```json
{
  "S3ContentLocationUpdate": {
    "BucketARNUpdate": {},
    "BasePathUpdate": {}
  }
}
```

Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3ContentLocationUpdate|object|false|none|none|

<h2 id="tocS_SnapshotDetails">SnapshotDetails</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotdetails"></a>
<a id="schema_SnapshotDetails"></a>
<a id="tocSsnapshotdetails"></a>
<a id="tocssnapshotdetails"></a>

```json
{
  "SnapshotName": {},
  "SnapshotStatus": {},
  "ApplicationVersionId": {},
  "SnapshotCreationTimestamp": {}
}
```

Provides details about a snapshot of application state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SnapshotName|object|true|none|none|
|SnapshotStatus|object|true|none|none|
|ApplicationVersionId|object|true|none|none|
|SnapshotCreationTimestamp|object|false|none|none|

<h2 id="tocS_RecordFormatType">RecordFormatType</h2>
<!-- backwards compatibility -->
<a id="schemarecordformattype"></a>
<a id="schema_RecordFormatType"></a>
<a id="tocSrecordformattype"></a>
<a id="tocsrecordformattype"></a>

```json
"JSON"
```

<h2 id="tocS_DestinationSchema">DestinationSchema</h2>
<!-- backwards compatibility -->
<a id="schemadestinationschema"></a>
<a id="schema_DestinationSchema"></a>
<a id="tocSdestinationschema"></a>
<a id="tocsdestinationschema"></a>

```json
{
  "RecordFormatType": {}
}
```

Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordFormatType|object|true|none|none|

<h2 id="tocS_InputStartingPositionConfiguration">InputStartingPositionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainputstartingpositionconfiguration"></a>
<a id="schema_InputStartingPositionConfiguration"></a>
<a id="tocSinputstartingpositionconfiguration"></a>
<a id="tocsinputstartingpositionconfiguration"></a>

```json
{
  "InputStartingPosition": {}
}
```

Describes the point at which the application reads from the streaming source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputStartingPosition|object|false|none|none|

<h2 id="tocS_S3Configuration">S3Configuration</h2>
<!-- backwards compatibility -->
<a id="schemas3configuration"></a>
<a id="schema_S3Configuration"></a>
<a id="tocSs3configuration"></a>
<a id="tocss3configuration"></a>

```json
{
  "BucketARN": {},
  "FileKey": {}
}
```

For a SQL-based Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketARN|object|true|none|none|
|FileKey|object|true|none|none|

<h2 id="tocS_SourceSchema">SourceSchema</h2>
<!-- backwards compatibility -->
<a id="schemasourceschema"></a>
<a id="schema_SourceSchema"></a>
<a id="tocSsourceschema"></a>
<a id="tocssourceschema"></a>

```json
{
  "RecordFormat": {
    "RecordFormatType": {},
    "MappingParameters": {
      "JSONMappingParameters": {
        "RecordRowPath": {}
      },
      "CSVMappingParameters": {
        "RecordRowDelimiter": {},
        "RecordColumnDelimiter": {}
      }
    }
  },
  "RecordEncoding": {},
  "RecordColumns": {}
}
```

For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordFormat|object|true|none|none|
|RecordEncoding|object|false|none|none|
|RecordColumns|object|true|none|none|

<h2 id="tocS_ParsedInputRecords">ParsedInputRecords</h2>
<!-- backwards compatibility -->
<a id="schemaparsedinputrecords"></a>
<a id="schema_ParsedInputRecords"></a>
<a id="tocSparsedinputrecords"></a>
<a id="tocsparsedinputrecords"></a>

```json
[
  [
    "string"
  ]
]
```

<h2 id="tocS_ProcessedInputRecords">ProcessedInputRecords</h2>
<!-- backwards compatibility -->
<a id="schemaprocessedinputrecords"></a>
<a id="schema_ProcessedInputRecords"></a>
<a id="tocSprocessedinputrecords"></a>
<a id="tocsprocessedinputrecords"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RawInputRecords">RawInputRecords</h2>
<!-- backwards compatibility -->
<a id="schemarawinputrecords"></a>
<a id="schema_RawInputRecords"></a>
<a id="tocSrawinputrecords"></a>
<a id="tocsrawinputrecords"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PropertyGroups">PropertyGroups</h2>
<!-- backwards compatibility -->
<a id="schemapropertygroups"></a>
<a id="schema_PropertyGroups"></a>
<a id="tocSpropertygroups"></a>
<a id="tocspropertygroups"></a>

```json
[
  {
    "PropertyGroupId": {},
    "PropertyMap": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_FileKey">FileKey</h2>
<!-- backwards compatibility -->
<a id="schemafilekey"></a>
<a id="schema_FileKey"></a>
<a id="tocSfilekey"></a>
<a id="tocsfilekey"></a>

```json
"string"
```

<h2 id="tocS_MonitoringConfiguration">MonitoringConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringconfiguration"></a>
<a id="schema_MonitoringConfiguration"></a>
<a id="tocSmonitoringconfiguration"></a>
<a id="tocsmonitoringconfiguration"></a>

```json
{
  "ConfigurationType": {},
  "MetricsLevel": {},
  "LogLevel": {}
}
```

Describes configuration parameters for Amazon CloudWatch logging for an application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationType|object|true|none|none|
|MetricsLevel|object|false|none|none|
|LogLevel|object|false|none|none|

<h2 id="tocS_ParallelismConfiguration">ParallelismConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaparallelismconfiguration"></a>
<a id="schema_ParallelismConfiguration"></a>
<a id="tocSparallelismconfiguration"></a>
<a id="tocsparallelismconfiguration"></a>

```json
{
  "ConfigurationType": {},
  "Parallelism": {},
  "ParallelismPerKPU": {},
  "AutoScalingEnabled": {}
}
```

Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationType|object|true|none|none|
|Parallelism|object|false|none|none|
|ParallelismPerKPU|object|false|none|none|
|AutoScalingEnabled|object|false|none|none|

<h2 id="tocS_MonitoringConfigurationDescription">MonitoringConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringconfigurationdescription"></a>
<a id="schema_MonitoringConfigurationDescription"></a>
<a id="tocSmonitoringconfigurationdescription"></a>
<a id="tocsmonitoringconfigurationdescription"></a>

```json
{
  "ConfigurationType": {},
  "MetricsLevel": {},
  "LogLevel": {}
}
```

Describes configuration parameters for CloudWatch logging for an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationType|object|false|none|none|
|MetricsLevel|object|false|none|none|
|LogLevel|object|false|none|none|

<h2 id="tocS_ParallelismConfigurationDescription">ParallelismConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaparallelismconfigurationdescription"></a>
<a id="schema_ParallelismConfigurationDescription"></a>
<a id="tocSparallelismconfigurationdescription"></a>
<a id="tocsparallelismconfigurationdescription"></a>

```json
{
  "ConfigurationType": {},
  "Parallelism": {},
  "ParallelismPerKPU": {},
  "CurrentParallelism": {},
  "AutoScalingEnabled": {}
}
```

Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationType|object|false|none|none|
|Parallelism|object|false|none|none|
|ParallelismPerKPU|object|false|none|none|
|CurrentParallelism|object|false|none|none|
|AutoScalingEnabled|object|false|none|none|

<h2 id="tocS_JobPlanDescription">JobPlanDescription</h2>
<!-- backwards compatibility -->
<a id="schemajobplandescription"></a>
<a id="schema_JobPlanDescription"></a>
<a id="tocSjobplandescription"></a>
<a id="tocsjobplandescription"></a>

```json
"string"
```

<h2 id="tocS_MonitoringConfigurationUpdate">MonitoringConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringconfigurationupdate"></a>
<a id="schema_MonitoringConfigurationUpdate"></a>
<a id="tocSmonitoringconfigurationupdate"></a>
<a id="tocsmonitoringconfigurationupdate"></a>

```json
{
  "ConfigurationTypeUpdate": {},
  "MetricsLevelUpdate": {},
  "LogLevelUpdate": {}
}
```

Describes updates to configuration parameters for Amazon CloudWatch logging for an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationTypeUpdate|object|false|none|none|
|MetricsLevelUpdate|object|false|none|none|
|LogLevelUpdate|object|false|none|none|

<h2 id="tocS_ParallelismConfigurationUpdate">ParallelismConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaparallelismconfigurationupdate"></a>
<a id="schema_ParallelismConfigurationUpdate"></a>
<a id="tocSparallelismconfigurationupdate"></a>
<a id="tocsparallelismconfigurationupdate"></a>

```json
{
  "ConfigurationTypeUpdate": {},
  "ParallelismUpdate": {},
  "ParallelismPerKPUUpdate": {},
  "AutoScalingEnabledUpdate": {}
}
```

Describes updates to parameters for how an application executes multiple tasks simultaneously.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationTypeUpdate|object|false|none|none|
|ParallelismUpdate|object|false|none|none|
|ParallelismPerKPUUpdate|object|false|none|none|
|AutoScalingEnabledUpdate|object|false|none|none|

<h2 id="tocS_FlinkRunConfiguration">FlinkRunConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaflinkrunconfiguration"></a>
<a id="schema_FlinkRunConfiguration"></a>
<a id="tocSflinkrunconfiguration"></a>
<a id="tocsflinkrunconfiguration"></a>

```json
{
  "AllowNonRestoredState": {}
}
```

Describes the starting parameters for a Flink-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowNonRestoredState|object|false|none|none|

<h2 id="tocS_InAppStreamName">InAppStreamName</h2>
<!-- backwards compatibility -->
<a id="schemainappstreamname"></a>
<a id="schema_InAppStreamName"></a>
<a id="tocSinappstreamname"></a>
<a id="tocsinappstreamname"></a>

```json
"string"
```

<h2 id="tocS_InAppStreamNames">InAppStreamNames</h2>
<!-- backwards compatibility -->
<a id="schemainappstreamnames"></a>
<a id="schema_InAppStreamNames"></a>
<a id="tocSinappstreamnames"></a>
<a id="tocsinappstreamnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InAppTableName">InAppTableName</h2>
<!-- backwards compatibility -->
<a id="schemainapptablename"></a>
<a id="schema_InAppTableName"></a>
<a id="tocSinapptablename"></a>
<a id="tocsinapptablename"></a>

```json
"string"
```

<h2 id="tocS_KinesisStreamsInput">KinesisStreamsInput</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamsinput"></a>
<a id="schema_KinesisStreamsInput"></a>
<a id="tocSkinesisstreamsinput"></a>
<a id="tocskinesisstreamsinput"></a>

```json
{
  "ResourceARN": {}
}
```

 Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_KinesisFirehoseInput">KinesisFirehoseInput</h2>
<!-- backwards compatibility -->
<a id="schemakinesisfirehoseinput"></a>
<a id="schema_KinesisFirehoseInput"></a>
<a id="tocSkinesisfirehoseinput"></a>
<a id="tocskinesisfirehoseinput"></a>

```json
{
  "ResourceARN": {}
}
```

For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_InputParallelism">InputParallelism</h2>
<!-- backwards compatibility -->
<a id="schemainputparallelism"></a>
<a id="schema_InputParallelism"></a>
<a id="tocSinputparallelism"></a>
<a id="tocsinputparallelism"></a>

```json
{
  "Count": {}
}
```

For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|object|false|none|none|

<h2 id="tocS_KinesisStreamsInputDescription">KinesisStreamsInputDescription</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamsinputdescription"></a>
<a id="schema_KinesisStreamsInputDescription"></a>
<a id="tocSkinesisstreamsinputdescription"></a>
<a id="tocskinesisstreamsinputdescription"></a>

```json
{
  "ResourceARN": {},
  "RoleARN": {}
}
```

For a SQL-based Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|RoleARN|object|false|none|none|

<h2 id="tocS_KinesisFirehoseInputDescription">KinesisFirehoseInputDescription</h2>
<!-- backwards compatibility -->
<a id="schemakinesisfirehoseinputdescription"></a>
<a id="schema_KinesisFirehoseInputDescription"></a>
<a id="tocSkinesisfirehoseinputdescription"></a>
<a id="tocskinesisfirehoseinputdescription"></a>

```json
{
  "ResourceARN": {},
  "RoleARN": {}
}
```

Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source in the application input configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|RoleARN|object|false|none|none|

<h2 id="tocS_InputDescription">InputDescription</h2>
<!-- backwards compatibility -->
<a id="schemainputdescription"></a>
<a id="schema_InputDescription"></a>
<a id="tocSinputdescription"></a>
<a id="tocsinputdescription"></a>

```json
{
  "InputId": {},
  "NamePrefix": {},
  "InAppStreamNames": {},
  "InputProcessingConfigurationDescription": {
    "InputLambdaProcessorDescription": {
      "ResourceARN": {},
      "RoleARN": {}
    }
  },
  "KinesisStreamsInputDescription": {
    "ResourceARN": {},
    "RoleARN": {}
  },
  "KinesisFirehoseInputDescription": {
    "ResourceARN": {},
    "RoleARN": {}
  },
  "InputSchema": {
    "RecordFormat": {
      "RecordFormatType": {},
      "MappingParameters": {
        "JSONMappingParameters": {
          "RecordRowPath": {}
        },
        "CSVMappingParameters": {
          "RecordRowDelimiter": {},
          "RecordColumnDelimiter": {}
        }
      }
    },
    "RecordEncoding": {},
    "RecordColumns": {}
  },
  "InputParallelism": {
    "Count": {}
  },
  "InputStartingPositionConfiguration": {
    "InputStartingPosition": {}
  }
}
```

Describes the application input configuration for a SQL-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputId|object|false|none|none|
|NamePrefix|object|false|none|none|
|InAppStreamNames|object|false|none|none|
|InputProcessingConfigurationDescription|object|false|none|none|
|KinesisStreamsInputDescription|object|false|none|none|
|KinesisFirehoseInputDescription|object|false|none|none|
|InputSchema|object|false|none|none|
|InputParallelism|object|false|none|none|
|InputStartingPositionConfiguration|object|false|none|none|

<h2 id="tocS_InputLambdaProcessor">InputLambdaProcessor</h2>
<!-- backwards compatibility -->
<a id="schemainputlambdaprocessor"></a>
<a id="schema_InputLambdaProcessor"></a>
<a id="tocSinputlambdaprocessor"></a>
<a id="tocsinputlambdaprocessor"></a>

```json
{
  "ResourceARN": {}
}
```

An object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_InputLambdaProcessorDescription">InputLambdaProcessorDescription</h2>
<!-- backwards compatibility -->
<a id="schemainputlambdaprocessordescription"></a>
<a id="schema_InputLambdaProcessorDescription"></a>
<a id="tocSinputlambdaprocessordescription"></a>
<a id="tocsinputlambdaprocessordescription"></a>

```json
{
  "ResourceARN": {},
  "RoleARN": {}
}
```

For a SQL-based Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|RoleARN|object|false|none|none|

<h2 id="tocS_InputLambdaProcessorUpdate">InputLambdaProcessorUpdate</h2>
<!-- backwards compatibility -->
<a id="schemainputlambdaprocessorupdate"></a>
<a id="schema_InputLambdaProcessorUpdate"></a>
<a id="tocSinputlambdaprocessorupdate"></a>
<a id="tocsinputlambdaprocessorupdate"></a>

```json
{
  "ResourceARNUpdate": {}
}
```

For a SQL-based Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNUpdate|object|true|none|none|

<h2 id="tocS_InputParallelismCount">InputParallelismCount</h2>
<!-- backwards compatibility -->
<a id="schemainputparallelismcount"></a>
<a id="schema_InputParallelismCount"></a>
<a id="tocSinputparallelismcount"></a>
<a id="tocsinputparallelismcount"></a>

```json
1
```

<h2 id="tocS_InputParallelismUpdate">InputParallelismUpdate</h2>
<!-- backwards compatibility -->
<a id="schemainputparallelismupdate"></a>
<a id="schema_InputParallelismUpdate"></a>
<a id="tocSinputparallelismupdate"></a>
<a id="tocsinputparallelismupdate"></a>

```json
{
  "CountUpdate": {}
}
```

For a SQL-based Kinesis Data Analytics application, provides updates to the parallelism count.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountUpdate|object|true|none|none|

<h2 id="tocS_InputProcessingConfigurationUpdate">InputProcessingConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemainputprocessingconfigurationupdate"></a>
<a id="schema_InputProcessingConfigurationUpdate"></a>
<a id="tocSinputprocessingconfigurationupdate"></a>
<a id="tocsinputprocessingconfigurationupdate"></a>

```json
{
  "InputLambdaProcessorUpdate": {
    "ResourceARNUpdate": {}
  }
}
```

For a SQL-based Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputLambdaProcessorUpdate|object|true|none|none|

<h2 id="tocS_RecordFormat">RecordFormat</h2>
<!-- backwards compatibility -->
<a id="schemarecordformat"></a>
<a id="schema_RecordFormat"></a>
<a id="tocSrecordformat"></a>
<a id="tocsrecordformat"></a>

```json
{
  "RecordFormatType": {},
  "MappingParameters": {
    "JSONMappingParameters": {
      "RecordRowPath": {}
    },
    "CSVMappingParameters": {
      "RecordRowDelimiter": {},
      "RecordColumnDelimiter": {}
    }
  }
}
```

 For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordFormatType|object|true|none|none|
|MappingParameters|object|false|none|none|

<h2 id="tocS_RecordEncoding">RecordEncoding</h2>
<!-- backwards compatibility -->
<a id="schemarecordencoding"></a>
<a id="schema_RecordEncoding"></a>
<a id="tocSrecordencoding"></a>
<a id="tocsrecordencoding"></a>

```json
"strin"
```

<h2 id="tocS_RecordColumns">RecordColumns</h2>
<!-- backwards compatibility -->
<a id="schemarecordcolumns"></a>
<a id="schema_RecordColumns"></a>
<a id="tocSrecordcolumns"></a>
<a id="tocsrecordcolumns"></a>

```json
[
  {
    "Name": {},
    "Mapping": {},
    "SqlType": {}
  }
]
```

<h2 id="tocS_InputSchemaUpdate">InputSchemaUpdate</h2>
<!-- backwards compatibility -->
<a id="schemainputschemaupdate"></a>
<a id="schema_InputSchemaUpdate"></a>
<a id="tocSinputschemaupdate"></a>
<a id="tocsinputschemaupdate"></a>

```json
{
  "RecordFormatUpdate": {
    "RecordFormatType": {},
    "MappingParameters": {
      "JSONMappingParameters": {
        "RecordRowPath": {}
      },
      "CSVMappingParameters": {
        "RecordRowDelimiter": {},
        "RecordColumnDelimiter": {}
      }
    }
  },
  "RecordEncodingUpdate": {},
  "RecordColumnUpdates": {}
}
```

Describes updates for an SQL-based Kinesis Data Analytics application's input schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordFormatUpdate|object|false|none|none|
|RecordEncodingUpdate|object|false|none|none|
|RecordColumnUpdates|object|false|none|none|

<h2 id="tocS_InputStartingPosition">InputStartingPosition</h2>
<!-- backwards compatibility -->
<a id="schemainputstartingposition"></a>
<a id="schema_InputStartingPosition"></a>
<a id="tocSinputstartingposition"></a>
<a id="tocsinputstartingposition"></a>

```json
"NOW"
```

<h2 id="tocS_KinesisStreamsInputUpdate">KinesisStreamsInputUpdate</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamsinputupdate"></a>
<a id="schema_KinesisStreamsInputUpdate"></a>
<a id="tocSkinesisstreamsinputupdate"></a>
<a id="tocskinesisstreamsinputupdate"></a>

```json
{
  "ResourceARNUpdate": {}
}
```

When you update the input configuration for a SQL-based Kinesis Data Analytics application, provides information about a Kinesis stream as the streaming source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNUpdate|object|true|none|none|

<h2 id="tocS_KinesisFirehoseInputUpdate">KinesisFirehoseInputUpdate</h2>
<!-- backwards compatibility -->
<a id="schemakinesisfirehoseinputupdate"></a>
<a id="schema_KinesisFirehoseInputUpdate"></a>
<a id="tocSkinesisfirehoseinputupdate"></a>
<a id="tocskinesisfirehoseinputupdate"></a>

```json
{
  "ResourceARNUpdate": {}
}
```

For a SQL-based Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNUpdate|object|true|none|none|

<h2 id="tocS_InputUpdate">InputUpdate</h2>
<!-- backwards compatibility -->
<a id="schemainputupdate"></a>
<a id="schema_InputUpdate"></a>
<a id="tocSinputupdate"></a>
<a id="tocsinputupdate"></a>

```json
{
  "InputId": {},
  "NamePrefixUpdate": {},
  "InputProcessingConfigurationUpdate": {
    "InputLambdaProcessorUpdate": {
      "ResourceARNUpdate": {}
    }
  },
  "KinesisStreamsInputUpdate": {
    "ResourceARNUpdate": {}
  },
  "KinesisFirehoseInputUpdate": {
    "ResourceARNUpdate": {}
  },
  "InputSchemaUpdate": {
    "RecordFormatUpdate": {
      "RecordFormatType": {},
      "MappingParameters": {
        "JSONMappingParameters": {
          "RecordRowPath": {}
        },
        "CSVMappingParameters": {
          "RecordRowDelimiter": {},
          "RecordColumnDelimiter": {}
        }
      }
    },
    "RecordEncodingUpdate": {},
    "RecordColumnUpdates": {}
  },
  "InputParallelismUpdate": {
    "CountUpdate": {}
  }
}
```

For a SQL-based Kinesis Data Analytics application, describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputId|object|true|none|none|
|NamePrefixUpdate|object|false|none|none|
|InputProcessingConfigurationUpdate|object|false|none|none|
|KinesisStreamsInputUpdate|object|false|none|none|
|KinesisFirehoseInputUpdate|object|false|none|none|
|InputSchemaUpdate|object|false|none|none|
|InputParallelismUpdate|object|false|none|none|

<h2 id="tocS_InputUpdates">InputUpdates</h2>
<!-- backwards compatibility -->
<a id="schemainputupdates"></a>
<a id="schema_InputUpdates"></a>
<a id="tocSinputupdates"></a>
<a id="tocsinputupdates"></a>

```json
[
  {
    "InputId": {},
    "NamePrefixUpdate": {},
    "InputProcessingConfigurationUpdate": {
      "InputLambdaProcessorUpdate": {
        "ResourceARNUpdate": {}
      }
    },
    "KinesisStreamsInputUpdate": {
      "ResourceARNUpdate": {}
    },
    "KinesisFirehoseInputUpdate": {
      "ResourceARNUpdate": {}
    },
    "InputSchemaUpdate": {
      "RecordFormatUpdate": {
        "RecordFormatType": {},
        "MappingParameters": {
          "JSONMappingParameters": {
            "RecordRowPath": {}
          },
          "CSVMappingParameters": {
            "RecordRowDelimiter": {},
            "RecordColumnDelimiter": {}
          }
        }
      },
      "RecordEncodingUpdate": {},
      "RecordColumnUpdates": {}
    },
    "InputParallelismUpdate": {
      "CountUpdate": {}
    }
  }
]
```

<h2 id="tocS_Inputs">Inputs</h2>
<!-- backwards compatibility -->
<a id="schemainputs"></a>
<a id="schema_Inputs"></a>
<a id="tocSinputs"></a>
<a id="tocsinputs"></a>

```json
[
  {
    "NamePrefix": {},
    "InputProcessingConfiguration": {
      "InputLambdaProcessor": {
        "ResourceARN": {}
      }
    },
    "KinesisStreamsInput": {
      "ResourceARN": {}
    },
    "KinesisFirehoseInput": {
      "ResourceARN": {}
    },
    "InputParallelism": {
      "Count": {}
    },
    "InputSchema": {
      "RecordFormat": {
        "RecordFormatType": {},
        "MappingParameters": {
          "JSONMappingParameters": {
            "RecordRowPath": {}
          },
          "CSVMappingParameters": {
            "RecordRowDelimiter": {},
            "RecordColumnDelimiter": {}
          }
        }
      },
      "RecordEncoding": {},
      "RecordColumns": {}
    }
  }
]
```

<h2 id="tocS_RecordRowPath">RecordRowPath</h2>
<!-- backwards compatibility -->
<a id="schemarecordrowpath"></a>
<a id="schema_RecordRowPath"></a>
<a id="tocSrecordrowpath"></a>
<a id="tocsrecordrowpath"></a>

```json
"string"
```

<h2 id="tocS_JSONMappingParameters">JSONMappingParameters</h2>
<!-- backwards compatibility -->
<a id="schemajsonmappingparameters"></a>
<a id="schema_JSONMappingParameters"></a>
<a id="tocSjsonmappingparameters"></a>
<a id="tocsjsonmappingparameters"></a>

```json
{
  "RecordRowPath": {}
}
```

For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordRowPath|object|true|none|none|

<h2 id="tocS_KinesisAnalyticsARN">KinesisAnalyticsARN</h2>
<!-- backwards compatibility -->
<a id="schemakinesisanalyticsarn"></a>
<a id="schema_KinesisAnalyticsARN"></a>
<a id="tocSkinesisanalyticsarn"></a>
<a id="tocskinesisanalyticsarn"></a>

```json
"string"
```

<h2 id="tocS_KinesisFirehoseOutput">KinesisFirehoseOutput</h2>
<!-- backwards compatibility -->
<a id="schemakinesisfirehoseoutput"></a>
<a id="schema_KinesisFirehoseOutput"></a>
<a id="tocSkinesisfirehoseoutput"></a>
<a id="tocskinesisfirehoseoutput"></a>

```json
{
  "ResourceARN": {}
}
```

For a SQL-based Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_KinesisFirehoseOutputDescription">KinesisFirehoseOutputDescription</h2>
<!-- backwards compatibility -->
<a id="schemakinesisfirehoseoutputdescription"></a>
<a id="schema_KinesisFirehoseOutputDescription"></a>
<a id="tocSkinesisfirehoseoutputdescription"></a>
<a id="tocskinesisfirehoseoutputdescription"></a>

```json
{
  "ResourceARN": {},
  "RoleARN": {}
}
```

For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|RoleARN|object|false|none|none|

<h2 id="tocS_KinesisFirehoseOutputUpdate">KinesisFirehoseOutputUpdate</h2>
<!-- backwards compatibility -->
<a id="schemakinesisfirehoseoutputupdate"></a>
<a id="schema_KinesisFirehoseOutputUpdate"></a>
<a id="tocSkinesisfirehoseoutputupdate"></a>
<a id="tocskinesisfirehoseoutputupdate"></a>

```json
{
  "ResourceARNUpdate": {}
}
```

For a SQL-based Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNUpdate|object|true|none|none|

<h2 id="tocS_KinesisStreamsOutput">KinesisStreamsOutput</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamsoutput"></a>
<a id="schema_KinesisStreamsOutput"></a>
<a id="tocSkinesisstreamsoutput"></a>
<a id="tocskinesisstreamsoutput"></a>

```json
{
  "ResourceARN": {}
}
```

When you configure a SQL-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_KinesisStreamsOutputDescription">KinesisStreamsOutputDescription</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamsoutputdescription"></a>
<a id="schema_KinesisStreamsOutputDescription"></a>
<a id="tocSkinesisstreamsoutputdescription"></a>
<a id="tocskinesisstreamsoutputdescription"></a>

```json
{
  "ResourceARN": {},
  "RoleARN": {}
}
```

For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|RoleARN|object|false|none|none|

<h2 id="tocS_KinesisStreamsOutputUpdate">KinesisStreamsOutputUpdate</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamsoutputupdate"></a>
<a id="schema_KinesisStreamsOutputUpdate"></a>
<a id="tocSkinesisstreamsoutputupdate"></a>
<a id="tocskinesisstreamsoutputupdate"></a>

```json
{
  "ResourceARNUpdate": {}
}
```

When you update a SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNUpdate|object|true|none|none|

<h2 id="tocS_LambdaOutput">LambdaOutput</h2>
<!-- backwards compatibility -->
<a id="schemalambdaoutput"></a>
<a id="schema_LambdaOutput"></a>
<a id="tocSlambdaoutput"></a>
<a id="tocslambdaoutput"></a>

```json
{
  "ResourceARN": {}
}
```

When you configure a SQL-based Kinesis Data Analytics application's output, identifies an Amazon Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_LambdaOutputDescription">LambdaOutputDescription</h2>
<!-- backwards compatibility -->
<a id="schemalambdaoutputdescription"></a>
<a id="schema_LambdaOutputDescription"></a>
<a id="tocSlambdaoutputdescription"></a>
<a id="tocslambdaoutputdescription"></a>

```json
{
  "ResourceARN": {},
  "RoleARN": {}
}
```

For a SQL-based Kinesis Data Analytics application's output, describes the Amazon Lambda function that is configured as its destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|RoleARN|object|false|none|none|

<h2 id="tocS_LambdaOutputUpdate">LambdaOutputUpdate</h2>
<!-- backwards compatibility -->
<a id="schemalambdaoutputupdate"></a>
<a id="schema_LambdaOutputUpdate"></a>
<a id="tocSlambdaoutputupdate"></a>
<a id="tocslambdaoutputupdate"></a>

```json
{
  "ResourceARNUpdate": {}
}
```

When you update an SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an Amazon Lambda function that is configured as the destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNUpdate|object|true|none|none|

<h2 id="tocS_ListSnapshotsInputLimit">ListSnapshotsInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistsnapshotsinputlimit"></a>
<a id="schema_ListSnapshotsInputLimit"></a>
<a id="tocSlistsnapshotsinputlimit"></a>
<a id="tocslistsnapshotsinputlimit"></a>

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

<h2 id="tocS_SnapshotSummaries">SnapshotSummaries</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotsummaries"></a>
<a id="schema_SnapshotSummaries"></a>
<a id="tocSsnapshotsummaries"></a>
<a id="tocssnapshotsummaries"></a>

```json
[
  {
    "SnapshotName": {},
    "SnapshotStatus": {},
    "ApplicationVersionId": {},
    "SnapshotCreationTimestamp": {}
  }
]
```

<h2 id="tocS_ListApplicationVersionsInputLimit">ListApplicationVersionsInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationversionsinputlimit"></a>
<a id="schema_ListApplicationVersionsInputLimit"></a>
<a id="tocSlistapplicationversionsinputlimit"></a>
<a id="tocslistapplicationversionsinputlimit"></a>

```json
1
```

<h2 id="tocS_ListApplicationsInputLimit">ListApplicationsInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsinputlimit"></a>
<a id="schema_ListApplicationsInputLimit"></a>
<a id="tocSlistapplicationsinputlimit"></a>
<a id="tocslistapplicationsinputlimit"></a>

```json
1
```

<h2 id="tocS_LogLevel">LogLevel</h2>
<!-- backwards compatibility -->
<a id="schemaloglevel"></a>
<a id="schema_LogLevel"></a>
<a id="tocSloglevel"></a>
<a id="tocsloglevel"></a>

```json
"INFO"
```

<h2 id="tocS_MappingParameters">MappingParameters</h2>
<!-- backwards compatibility -->
<a id="schemamappingparameters"></a>
<a id="schema_MappingParameters"></a>
<a id="tocSmappingparameters"></a>
<a id="tocsmappingparameters"></a>

```json
{
  "JSONMappingParameters": {
    "RecordRowPath": {}
  },
  "CSVMappingParameters": {
    "RecordRowDelimiter": {},
    "RecordColumnDelimiter": {}
  }
}
```

When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JSONMappingParameters|object|false|none|none|
|CSVMappingParameters|object|false|none|none|

<h2 id="tocS_MavenArtifactId">MavenArtifactId</h2>
<!-- backwards compatibility -->
<a id="schemamavenartifactid"></a>
<a id="schema_MavenArtifactId"></a>
<a id="tocSmavenartifactid"></a>
<a id="tocsmavenartifactid"></a>

```json
"string"
```

<h2 id="tocS_MavenGroupId">MavenGroupId</h2>
<!-- backwards compatibility -->
<a id="schemamavengroupid"></a>
<a id="schema_MavenGroupId"></a>
<a id="tocSmavengroupid"></a>
<a id="tocsmavengroupid"></a>

```json
"string"
```

<h2 id="tocS_MavenVersion">MavenVersion</h2>
<!-- backwards compatibility -->
<a id="schemamavenversion"></a>
<a id="schema_MavenVersion"></a>
<a id="tocSmavenversion"></a>
<a id="tocsmavenversion"></a>

```json
"string"
```

<h2 id="tocS_MetricsLevel">MetricsLevel</h2>
<!-- backwards compatibility -->
<a id="schemametricslevel"></a>
<a id="schema_MetricsLevel"></a>
<a id="tocSmetricslevel"></a>
<a id="tocsmetricslevel"></a>

```json
"APPLICATION"
```

<h2 id="tocS_ObjectVersion">ObjectVersion</h2>
<!-- backwards compatibility -->
<a id="schemaobjectversion"></a>
<a id="schema_ObjectVersion"></a>
<a id="tocSobjectversion"></a>
<a id="tocsobjectversion"></a>

```json
"string"
```

<h2 id="tocS_OutputDescription">OutputDescription</h2>
<!-- backwards compatibility -->
<a id="schemaoutputdescription"></a>
<a id="schema_OutputDescription"></a>
<a id="tocSoutputdescription"></a>
<a id="tocsoutputdescription"></a>

```json
{
  "OutputId": {},
  "Name": {},
  "KinesisStreamsOutputDescription": {
    "ResourceARN": {},
    "RoleARN": {}
  },
  "KinesisFirehoseOutputDescription": {
    "ResourceARN": {},
    "RoleARN": {}
  },
  "LambdaOutputDescription": {
    "ResourceARN": {},
    "RoleARN": {}
  },
  "DestinationSchema": {
    "RecordFormatType": {}
  }
}
```

For a SQL-based Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputId|object|false|none|none|
|Name|object|false|none|none|
|KinesisStreamsOutputDescription|object|false|none|none|
|KinesisFirehoseOutputDescription|object|false|none|none|
|LambdaOutputDescription|object|false|none|none|
|DestinationSchema|object|false|none|none|

<h2 id="tocS_OutputUpdate">OutputUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaoutputupdate"></a>
<a id="schema_OutputUpdate"></a>
<a id="tocSoutputupdate"></a>
<a id="tocsoutputupdate"></a>

```json
{
  "OutputId": {},
  "NameUpdate": {},
  "KinesisStreamsOutputUpdate": {
    "ResourceARNUpdate": {}
  },
  "KinesisFirehoseOutputUpdate": {
    "ResourceARNUpdate": {}
  },
  "LambdaOutputUpdate": {
    "ResourceARNUpdate": {}
  },
  "DestinationSchemaUpdate": {
    "RecordFormatType": {}
  }
}
```

 For a SQL-based Kinesis Data Analytics application, describes updates to the output configuration identified by the <code>OutputId</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputId|object|true|none|none|
|NameUpdate|object|false|none|none|
|KinesisStreamsOutputUpdate|object|false|none|none|
|KinesisFirehoseOutputUpdate|object|false|none|none|
|LambdaOutputUpdate|object|false|none|none|
|DestinationSchemaUpdate|object|false|none|none|

<h2 id="tocS_OutputUpdates">OutputUpdates</h2>
<!-- backwards compatibility -->
<a id="schemaoutputupdates"></a>
<a id="schema_OutputUpdates"></a>
<a id="tocSoutputupdates"></a>
<a id="tocsoutputupdates"></a>

```json
[
  {
    "OutputId": {},
    "NameUpdate": {},
    "KinesisStreamsOutputUpdate": {
      "ResourceARNUpdate": {}
    },
    "KinesisFirehoseOutputUpdate": {
      "ResourceARNUpdate": {}
    },
    "LambdaOutputUpdate": {
      "ResourceARNUpdate": {}
    },
    "DestinationSchemaUpdate": {
      "RecordFormatType": {}
    }
  }
]
```

<h2 id="tocS_Outputs">Outputs</h2>
<!-- backwards compatibility -->
<a id="schemaoutputs"></a>
<a id="schema_Outputs"></a>
<a id="tocSoutputs"></a>
<a id="tocsoutputs"></a>

```json
[
  {
    "Name": {},
    "KinesisStreamsOutput": {
      "ResourceARN": {}
    },
    "KinesisFirehoseOutput": {
      "ResourceARN": {}
    },
    "LambdaOutput": {
      "ResourceARN": {}
    },
    "DestinationSchema": {
      "RecordFormatType": {}
    }
  }
]
```

<h2 id="tocS_Parallelism">Parallelism</h2>
<!-- backwards compatibility -->
<a id="schemaparallelism"></a>
<a id="schema_Parallelism"></a>
<a id="tocSparallelism"></a>
<a id="tocsparallelism"></a>

```json
1
```

<h2 id="tocS_ParallelismPerKPU">ParallelismPerKPU</h2>
<!-- backwards compatibility -->
<a id="schemaparallelismperkpu"></a>
<a id="schema_ParallelismPerKPU"></a>
<a id="tocSparallelismperkpu"></a>
<a id="tocsparallelismperkpu"></a>

```json
1
```

<h2 id="tocS_ParsedInputRecordField">ParsedInputRecordField</h2>
<!-- backwards compatibility -->
<a id="schemaparsedinputrecordfield"></a>
<a id="schema_ParsedInputRecordField"></a>
<a id="tocSparsedinputrecordfield"></a>
<a id="tocsparsedinputrecordfield"></a>

```json
"string"
```

<h2 id="tocS_ParsedInputRecord">ParsedInputRecord</h2>
<!-- backwards compatibility -->
<a id="schemaparsedinputrecord"></a>
<a id="schema_ParsedInputRecord"></a>
<a id="tocSparsedinputrecord"></a>
<a id="tocsparsedinputrecord"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProcessedInputRecord">ProcessedInputRecord</h2>
<!-- backwards compatibility -->
<a id="schemaprocessedinputrecord"></a>
<a id="schema_ProcessedInputRecord"></a>
<a id="tocSprocessedinputrecord"></a>
<a id="tocsprocessedinputrecord"></a>

```json
"string"
```

<h2 id="tocS_PropertyMap">PropertyMap</h2>
<!-- backwards compatibility -->
<a id="schemapropertymap"></a>
<a id="schema_PropertyMap"></a>
<a id="tocSpropertymap"></a>
<a id="tocspropertymap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PropertyValue](#schemapropertyvalue)|false|none|none|

<h2 id="tocS_PropertyGroup">PropertyGroup</h2>
<!-- backwards compatibility -->
<a id="schemapropertygroup"></a>
<a id="schema_PropertyGroup"></a>
<a id="tocSpropertygroup"></a>
<a id="tocspropertygroup"></a>

```json
{
  "PropertyGroupId": {},
  "PropertyMap": {
    "property1": "string",
    "property2": "string"
  }
}
```

Property key-value pairs passed into an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PropertyGroupId|object|true|none|none|
|PropertyMap|object|true|none|none|

<h2 id="tocS_PropertyKey">PropertyKey</h2>
<!-- backwards compatibility -->
<a id="schemapropertykey"></a>
<a id="schema_PropertyKey"></a>
<a id="tocSpropertykey"></a>
<a id="tocspropertykey"></a>

```json
"string"
```

<h2 id="tocS_PropertyValue">PropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemapropertyvalue"></a>
<a id="schema_PropertyValue"></a>
<a id="tocSpropertyvalue"></a>
<a id="tocspropertyvalue"></a>

```json
"string"
```

<h2 id="tocS_RawInputRecord">RawInputRecord</h2>
<!-- backwards compatibility -->
<a id="schemarawinputrecord"></a>
<a id="schema_RawInputRecord"></a>
<a id="tocSrawinputrecord"></a>
<a id="tocsrawinputrecord"></a>

```json
"string"
```

<h2 id="tocS_RecordColumnName">RecordColumnName</h2>
<!-- backwards compatibility -->
<a id="schemarecordcolumnname"></a>
<a id="schema_RecordColumnName"></a>
<a id="tocSrecordcolumnname"></a>
<a id="tocsrecordcolumnname"></a>

```json
"string"
```

<h2 id="tocS_RecordColumnMapping">RecordColumnMapping</h2>
<!-- backwards compatibility -->
<a id="schemarecordcolumnmapping"></a>
<a id="schema_RecordColumnMapping"></a>
<a id="tocSrecordcolumnmapping"></a>
<a id="tocsrecordcolumnmapping"></a>

```json
"string"
```

<h2 id="tocS_RecordColumnSqlType">RecordColumnSqlType</h2>
<!-- backwards compatibility -->
<a id="schemarecordcolumnsqltype"></a>
<a id="schema_RecordColumnSqlType"></a>
<a id="tocSrecordcolumnsqltype"></a>
<a id="tocsrecordcolumnsqltype"></a>

```json
"string"
```

<h2 id="tocS_RecordColumn">RecordColumn</h2>
<!-- backwards compatibility -->
<a id="schemarecordcolumn"></a>
<a id="schema_RecordColumn"></a>
<a id="tocSrecordcolumn"></a>
<a id="tocsrecordcolumn"></a>

```json
{
  "Name": {},
  "Mapping": {},
  "SqlType": {}
}
```

<p>For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Mapping|object|false|none|none|
|SqlType|object|true|none|none|

<h2 id="tocS_S3ReferenceDataSource">S3ReferenceDataSource</h2>
<!-- backwards compatibility -->
<a id="schemas3referencedatasource"></a>
<a id="schema_S3ReferenceDataSource"></a>
<a id="tocSs3referencedatasource"></a>
<a id="tocss3referencedatasource"></a>

```json
{
  "BucketARN": {},
  "FileKey": {}
}
```

<p>For a SQL-based Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketARN|object|false|none|none|
|FileKey|object|false|none|none|

<h2 id="tocS_S3ReferenceDataSourceDescription">S3ReferenceDataSourceDescription</h2>
<!-- backwards compatibility -->
<a id="schemas3referencedatasourcedescription"></a>
<a id="schema_S3ReferenceDataSourceDescription"></a>
<a id="tocSs3referencedatasourcedescription"></a>
<a id="tocss3referencedatasourcedescription"></a>

```json
{
  "BucketARN": {},
  "FileKey": {},
  "ReferenceRoleARN": {}
}
```

For a SQL-based Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketARN|object|true|none|none|
|FileKey|object|true|none|none|
|ReferenceRoleARN|object|false|none|none|

<h2 id="tocS_ReferenceDataSourceDescription">ReferenceDataSourceDescription</h2>
<!-- backwards compatibility -->
<a id="schemareferencedatasourcedescription"></a>
<a id="schema_ReferenceDataSourceDescription"></a>
<a id="tocSreferencedatasourcedescription"></a>
<a id="tocsreferencedatasourcedescription"></a>

```json
{
  "ReferenceId": {},
  "TableName": {},
  "S3ReferenceDataSourceDescription": {
    "BucketARN": {},
    "FileKey": {},
    "ReferenceRoleARN": {}
  },
  "ReferenceSchema": {
    "RecordFormat": {
      "RecordFormatType": {},
      "MappingParameters": {
        "JSONMappingParameters": {
          "RecordRowPath": {}
        },
        "CSVMappingParameters": {
          "RecordRowDelimiter": {},
          "RecordColumnDelimiter": {}
        }
      }
    },
    "RecordEncoding": {},
    "RecordColumns": {}
  }
}
```

For a SQL-based Kinesis Data Analytics application, describes the reference data source configured for an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReferenceId|object|true|none|none|
|TableName|object|true|none|none|
|S3ReferenceDataSourceDescription|object|true|none|none|
|ReferenceSchema|object|false|none|none|

<h2 id="tocS_S3ReferenceDataSourceUpdate">S3ReferenceDataSourceUpdate</h2>
<!-- backwards compatibility -->
<a id="schemas3referencedatasourceupdate"></a>
<a id="schema_S3ReferenceDataSourceUpdate"></a>
<a id="tocSs3referencedatasourceupdate"></a>
<a id="tocss3referencedatasourceupdate"></a>

```json
{
  "BucketARNUpdate": {},
  "FileKeyUpdate": {}
}
```

For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketARNUpdate|object|false|none|none|
|FileKeyUpdate|object|false|none|none|

<h2 id="tocS_ReferenceDataSourceUpdate">ReferenceDataSourceUpdate</h2>
<!-- backwards compatibility -->
<a id="schemareferencedatasourceupdate"></a>
<a id="schema_ReferenceDataSourceUpdate"></a>
<a id="tocSreferencedatasourceupdate"></a>
<a id="tocsreferencedatasourceupdate"></a>

```json
{
  "ReferenceId": {},
  "TableNameUpdate": {},
  "S3ReferenceDataSourceUpdate": {
    "BucketARNUpdate": {},
    "FileKeyUpdate": {}
  },
  "ReferenceSchemaUpdate": {
    "RecordFormat": {
      "RecordFormatType": {},
      "MappingParameters": {
        "JSONMappingParameters": {
          "RecordRowPath": {}
        },
        "CSVMappingParameters": {
          "RecordRowDelimiter": {},
          "RecordColumnDelimiter": {}
        }
      }
    },
    "RecordEncoding": {},
    "RecordColumns": {}
  }
}
```

When you update a reference data source configuration for a SQL-based Kinesis Data Analytics application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReferenceId|object|true|none|none|
|TableNameUpdate|object|false|none|none|
|S3ReferenceDataSourceUpdate|object|false|none|none|
|ReferenceSchemaUpdate|object|false|none|none|

<h2 id="tocS_ReferenceDataSourceUpdates">ReferenceDataSourceUpdates</h2>
<!-- backwards compatibility -->
<a id="schemareferencedatasourceupdates"></a>
<a id="schema_ReferenceDataSourceUpdates"></a>
<a id="tocSreferencedatasourceupdates"></a>
<a id="tocsreferencedatasourceupdates"></a>

```json
[
  {
    "ReferenceId": {},
    "TableNameUpdate": {},
    "S3ReferenceDataSourceUpdate": {
      "BucketARNUpdate": {},
      "FileKeyUpdate": {}
    },
    "ReferenceSchemaUpdate": {
      "RecordFormat": {
        "RecordFormatType": {},
        "MappingParameters": {
          "JSONMappingParameters": {
            "RecordRowPath": {}
          },
          "CSVMappingParameters": {
            "RecordRowDelimiter": {},
            "RecordColumnDelimiter": {}
          }
        }
      },
      "RecordEncoding": {},
      "RecordColumns": {}
    }
  }
]
```

<h2 id="tocS_ReferenceDataSources">ReferenceDataSources</h2>
<!-- backwards compatibility -->
<a id="schemareferencedatasources"></a>
<a id="schema_ReferenceDataSources"></a>
<a id="tocSreferencedatasources"></a>
<a id="tocsreferencedatasources"></a>

```json
[
  {
    "TableName": {},
    "S3ReferenceDataSource": {
      "BucketARN": {},
      "FileKey": {}
    },
    "ReferenceSchema": {
      "RecordFormat": {
        "RecordFormatType": {},
        "MappingParameters": {
          "JSONMappingParameters": {
            "RecordRowPath": {}
          },
          "CSVMappingParameters": {
            "RecordRowDelimiter": {},
            "RecordColumnDelimiter": {}
          }
        }
      },
      "RecordEncoding": {},
      "RecordColumns": {}
    }
  }
]
```

<h2 id="tocS_SqlRunConfigurations">SqlRunConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemasqlrunconfigurations"></a>
<a id="schema_SqlRunConfigurations"></a>
<a id="tocSsqlrunconfigurations"></a>
<a id="tocssqlrunconfigurations"></a>

```json
[
  {
    "InputId": {},
    "InputStartingPositionConfiguration": {
      "InputStartingPosition": {}
    }
  }
]
```

<h2 id="tocS_RunConfiguration">RunConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemarunconfiguration"></a>
<a id="schema_RunConfiguration"></a>
<a id="tocSrunconfiguration"></a>
<a id="tocsrunconfiguration"></a>

```json
{
  "FlinkRunConfiguration": {
    "AllowNonRestoredState": {}
  },
  "SqlRunConfigurations": {},
  "ApplicationRestoreConfiguration": {
    "ApplicationRestoreType": {},
    "SnapshotName": {}
  }
}
```

Describes the starting parameters for an Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlinkRunConfiguration|object|false|none|none|
|SqlRunConfigurations|object|false|none|none|
|ApplicationRestoreConfiguration|object|false|none|none|

<h2 id="tocS_RunConfigurationUpdate">RunConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemarunconfigurationupdate"></a>
<a id="schema_RunConfigurationUpdate"></a>
<a id="tocSrunconfigurationupdate"></a>
<a id="tocsrunconfigurationupdate"></a>

```json
{
  "FlinkRunConfiguration": {
    "AllowNonRestoredState": {}
  },
  "ApplicationRestoreConfiguration": {
    "ApplicationRestoreType": {},
    "SnapshotName": {}
  }
}
```

Describes the updates to the starting parameters for a Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FlinkRunConfiguration|object|false|none|none|
|ApplicationRestoreConfiguration|object|false|none|none|

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_SecurityGroupIds">SecurityGroupIds</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupids"></a>
<a id="schema_SecurityGroupIds"></a>
<a id="tocSsecuritygroupids"></a>
<a id="tocssecuritygroupids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SnapshotStatus">SnapshotStatus</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotstatus"></a>
<a id="schema_SnapshotStatus"></a>
<a id="tocSsnapshotstatus"></a>
<a id="tocssnapshotstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_SqlRunConfiguration">SqlRunConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasqlrunconfiguration"></a>
<a id="schema_SqlRunConfiguration"></a>
<a id="tocSsqlrunconfiguration"></a>
<a id="tocssqlrunconfiguration"></a>

```json
{
  "InputId": {},
  "InputStartingPositionConfiguration": {
    "InputStartingPosition": {}
  }
}
```

Describes the starting parameters for a SQL-based Kinesis Data Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputId|object|true|none|none|
|InputStartingPositionConfiguration|object|true|none|none|

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"string"
```

<h2 id="tocS_SubnetIds">SubnetIds</h2>
<!-- backwards compatibility -->
<a id="schemasubnetids"></a>
<a id="schema_SubnetIds"></a>
<a id="tocSsubnetids"></a>
<a id="tocssubnetids"></a>

```json
[
  "string"
]
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

A key-value pair (the value is optional) that you can define and assign to Amazon resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_VpcId">VpcId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VpcId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"string"
```

<h2 id="tocS_VpcConfigurationUpdate">VpcConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfigurationupdate"></a>
<a id="schema_VpcConfigurationUpdate"></a>
<a id="tocSvpcconfigurationupdate"></a>
<a id="tocsvpcconfigurationupdate"></a>

```json
{
  "VpcConfigurationId": {},
  "SubnetIdUpdates": {},
  "SecurityGroupIdUpdates": {}
}
```

Describes updates to the VPC configuration used by the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConfigurationId|object|true|none|none|
|SubnetIdUpdates|object|false|none|none|
|SecurityGroupIdUpdates|object|false|none|none|

<h2 id="tocS_ZeppelinMonitoringConfiguration">ZeppelinMonitoringConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemazeppelinmonitoringconfiguration"></a>
<a id="schema_ZeppelinMonitoringConfiguration"></a>
<a id="tocSzeppelinmonitoringconfiguration"></a>
<a id="tocszeppelinmonitoringconfiguration"></a>

```json
{
  "LogLevel": {}
}
```

Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogLevel|object|true|none|none|

<h2 id="tocS_ZeppelinMonitoringConfigurationDescription">ZeppelinMonitoringConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemazeppelinmonitoringconfigurationdescription"></a>
<a id="schema_ZeppelinMonitoringConfigurationDescription"></a>
<a id="tocSzeppelinmonitoringconfigurationdescription"></a>
<a id="tocszeppelinmonitoringconfigurationdescription"></a>

```json
{
  "LogLevel": {}
}
```

The monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogLevel|object|false|none|none|

<h2 id="tocS_ZeppelinMonitoringConfigurationUpdate">ZeppelinMonitoringConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemazeppelinmonitoringconfigurationupdate"></a>
<a id="schema_ZeppelinMonitoringConfigurationUpdate"></a>
<a id="tocSzeppelinmonitoringconfigurationupdate"></a>
<a id="tocszeppelinmonitoringconfigurationupdate"></a>

```json
{
  "LogLevelUpdate": {}
}
```

Updates to the monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogLevelUpdate|object|true|none|none|
