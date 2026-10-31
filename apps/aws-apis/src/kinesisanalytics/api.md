<h1 id="amazon-kinesis-analytics">Amazon Kinesis Analytics v2015-08-14</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Kinesis Analytics</fullname> <p> <b>Overview</b> </p> <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>This is the <i>Amazon Kinesis Analytics v1 API Reference</i>. The Amazon Kinesis Analytics Developer Guide provides additional information. </p>

Base URLs:

* <a href="http://kinesisanalytics.us-east-1.amazonaws.com">http://kinesisanalytics.us-east-1.amazonaws.com</a> - The Kinesis Analytics multi-region endpoint

* <a href="https://kinesisanalytics.us-east-1.amazonaws.com">https://kinesisanalytics.us-east-1.amazonaws.com</a> - The Kinesis Analytics multi-region endpoint

* <a href="http://kinesisanalytics.cn-north-1.amazonaws.com.cn">http://kinesisanalytics.cn-north-1.amazonaws.com.cn</a> - The Kinesis Analytics endpoint for China (Beijing) and China (Ningxia)

* <a href="https://kinesisanalytics.cn-north-1.amazonaws.com.cn">https://kinesisanalytics.cn-north-1.amazonaws.com.cn</a> - The Kinesis Analytics endpoint for China (Beijing) and China (Ningxia)

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
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "CloudWatchLoggingOption": {
      "LogStreamARN": {},
      "RoleARN": {}
    }
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a CloudWatch log stream to monitor application configuration errors. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "CloudWatchLoggingOption": {
    "LogStreamARN": {},
    "RoleARN": {}
  }
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
|» CurrentApplicationVersionId|body|object|true|none|
|» CloudWatchLoggingOption|body|object|true|none|
|» » LogStreamARN|body|object|true|none|
|» » RoleARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption|

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

<h3 id="addapplicationcloudwatchloggingoption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddApplicationCloudWatchLoggingOptionResponse](#schemaaddapplicationcloudwatchloggingoptionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddApplicationInput

<a id="opIdAddApplicationInput"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.AddApplicationInput' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "Input": {
      "NamePrefix": {},
      "InputProcessingConfiguration": {
        "InputLambdaProcessor": {
          "ResourceARN": {},
          "RoleARN": {}
        }
      },
      "KinesisStreamsInput": {
        "ResourceARN": {},
        "RoleARN": {}
      },
      "KinesisFirehoseInput": {
        "ResourceARN": {},
        "RoleARN": {}
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

`POST /#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Adds a streaming source to your Amazon Kinesis application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p> <p>You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationInput</code> action.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "Input": {
    "NamePrefix": {},
    "InputProcessingConfiguration": {
      "InputLambdaProcessor": {
        "ResourceARN": {},
        "RoleARN": {}
      }
    },
    "KinesisStreamsInput": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "KinesisFirehoseInput": {
      "ResourceARN": {},
      "RoleARN": {}
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
|» » » » RoleARN|body|object|true|none|
|» » KinesisStreamsInput|body|object|false|none|
|» » » ResourceARN|body|object|true|none|
|» » » RoleARN|body|object|true|none|
|» » KinesisFirehoseInput|body|object|false|none|
|» » » ResourceARN|body|object|true|none|
|» » » RoleARN|body|object|true|none|
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
|X-Amz-Target|KinesisAnalytics_20150814.AddApplicationInput|

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

<h3 id="addapplicationinput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddApplicationInputResponse](#schemaaddapplicationinputresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|CodeValidationException|[CodeValidationException](#schemacodevalidationexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddApplicationInputProcessingConfiguration

<a id="opIdAddApplicationInputProcessingConfiguration"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "InputId": {},
    "InputProcessingConfiguration": {
      "InputLambdaProcessor": {
        "ResourceARN": {},
        "RoleARN": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "InputId": {},
  "InputProcessingConfiguration": {
    "InputLambdaProcessor": {
      "ResourceARN": {},
      "RoleARN": {}
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
|» » » RoleARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration|

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

<h3 id="addapplicationinputprocessingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddApplicationInputProcessingConfigurationResponse](#schemaaddapplicationinputprocessingconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddApplicationOutput

<a id="opIdAddApplicationOutput"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.AddApplicationOutput' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "Output": {
      "Name": {},
      "KinesisStreamsOutput": {
        "ResourceARN": {},
        "RoleARN": {}
      },
      "KinesisFirehoseOutput": {
        "ResourceARN": {},
        "RoleARN": {}
      },
      "LambdaOutput": {
        "ResourceARN": {},
        "RoleARN": {}
      },
      "DestinationSchema": {
        "RecordFormatType": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an external destination to your Amazon Kinesis Analytics application.</p> <p>If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Understanding Application Output (Destination)</a>. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version.</p> <p>For the limits on the number of application inputs and outputs you can configure, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "Output": {
    "Name": {},
    "KinesisStreamsOutput": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "KinesisFirehoseOutput": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "LambdaOutput": {
      "ResourceARN": {},
      "RoleARN": {}
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
|» » » RoleARN|body|object|true|none|
|» » KinesisFirehoseOutput|body|object|false|none|
|» » » ResourceARN|body|object|true|none|
|» » » RoleARN|body|object|true|none|
|» » LambdaOutput|body|object|false|none|
|» » » ResourceARN|body|object|true|none|
|» » » RoleARN|body|object|true|none|
|» » DestinationSchema|body|object|true|none|
|» » » RecordFormatType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20150814.AddApplicationOutput|

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

<h3 id="addapplicationoutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddApplicationOutputResponse](#schemaaddapplicationoutputresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddApplicationReferenceDataSource

<a id="opIdAddApplicationReferenceDataSource"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.AddApplicationReferenceDataSource' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "ReferenceDataSource": {
      "TableName": {},
      "S3ReferenceDataSource": {
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
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a reference data source to an existing application.</p> <p>Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.</p> <p> For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. For the limits on data sources you can add to your application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action. </p>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "ReferenceDataSource": {
    "TableName": {},
    "S3ReferenceDataSource": {
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
|» » » BucketARN|body|object|true|none|
|» » » FileKey|body|object|true|none|
|» » » ReferenceRoleARN|body|object|true|none|
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
|X-Amz-Target|KinesisAnalytics_20150814.AddApplicationReferenceDataSource|

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

<h3 id="addapplicationreferencedatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AddApplicationReferenceDataSourceResponse](#schemaaddapplicationreferencedatasourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApplication

<a id="opIdCreateApplication"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.CreateApplication' \
  -d '{
    "ApplicationName": {},
    "ApplicationDescription": {},
    "Inputs": {},
    "Outputs": {},
    "CloudWatchLoggingOptions": {},
    "ApplicationCode": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to three destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html">How it Works</a>. </p> <p>In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source.</p> <p>Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.</p> <p>In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.</p> <p> To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the <code>kinesisanalytics:CreateApplication</code> action. </p> <p> For introductory exercises to create an Amazon Kinesis Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/getting-started.html">Getting Started</a>. </p>

> Body parameter

```json
{
  "ApplicationName": {},
  "ApplicationDescription": {},
  "Inputs": {},
  "Outputs": {},
  "CloudWatchLoggingOptions": {},
  "ApplicationCode": {},
  "Tags": {}
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
|» Inputs|body|object|false|none|
|» Outputs|body|object|false|none|
|» CloudWatchLoggingOptions|body|object|false|none|
|» ApplicationCode|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20150814.CreateApplication|

> Example responses

> 200 Response

```json
{
  "ApplicationSummary": {
    "ApplicationName": {},
    "ApplicationARN": {},
    "ApplicationStatus": {}
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

<h3 id="createapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateApplicationResponse](#schemacreateapplicationresponse)|
|480|480|CodeValidationException|[CodeValidationException](#schemacodevalidationexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplication

<a id="opIdDeleteApplication"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.DeleteApplication' \
  -d '{
    "ApplicationName": {},
    "CreateTimestamp": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code).</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplication</code> action.</p>

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
|X-Amz-Target|KinesisAnalytics_20150814.DeleteApplication|

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

<h3 id="deleteapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationResponse](#schemadeleteapplicationresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplicationCloudWatchLoggingOption

<a id="opIdDeleteApplicationCloudWatchLoggingOption"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "CloudWatchLoggingOptionId": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "CloudWatchLoggingOptionId": {}
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
|» CurrentApplicationVersionId|body|object|true|none|
|» CloudWatchLoggingOptionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption|

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

<h3 id="deleteapplicationcloudwatchloggingoption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationCloudWatchLoggingOptionResponse](#schemadeleteapplicationcloudwatchloggingoptionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplicationInputProcessingConfiguration

<a id="opIdDeleteApplicationInputProcessingConfiguration"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "InputId": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> from an input.</p>

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
|X-Amz-Target|KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration|

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

<h3 id="deleteapplicationinputprocessingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationInputProcessingConfigurationResponse](#schemadeleteapplicationinputprocessingconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplicationOutput

<a id="opIdDeleteApplicationOutput"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.DeleteApplicationOutput' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "OutputId": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplicationOutput</code> action.</p>

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
|X-Amz-Target|KinesisAnalytics_20150814.DeleteApplicationOutput|

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

<h3 id="deleteapplicationoutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationOutputResponse](#schemadeleteapplicationoutputresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplicationReferenceDataSource

<a id="opIdDeleteApplicationReferenceDataSource"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "ReferenceId": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a reference data source configuration from the specified application configuration.</p> <p>If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics.DeleteApplicationReferenceDataSource</code> action.</p>

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
|X-Amz-Target|KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource|

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

<h3 id="deleteapplicationreferencedatasource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationReferenceDataSourceResponse](#schemadeleteapplicationreferencedatasourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeApplication

<a id="opIdDescribeApplication"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.DescribeApplication' \
  -d '{
    "ApplicationName": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns information about a specific Amazon Kinesis Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html">ListApplications</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DescribeApplication</code> action. You can use <code>DescribeApplication</code> to get the current application versionId, which you need to call other operations such as <code>Update</code>. </p>

> Body parameter

```json
{
  "ApplicationName": {}
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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20150814.DescribeApplication|

> Example responses

> 200 Response

```json
{
  "ApplicationDetail": {
    "ApplicationName": {},
    "ApplicationDescription": {},
    "ApplicationARN": {},
    "ApplicationStatus": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "InputDescriptions": {},
    "OutputDescriptions": {},
    "ReferenceDataSourceDescriptions": {},
    "CloudWatchLoggingOptionDescriptions": {},
    "ApplicationCode": {},
    "ApplicationVersionId": {}
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

<h3 id="describeapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeApplicationResponse](#schemadescribeapplicationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DiscoverInputSchema

<a id="opIdDiscoverInputSchema"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.DiscoverInputSchema' \
  -d '{
    "ResourceARN": {},
    "RoleARN": {},
    "InputStartingPositionConfiguration": {
      "InputStartingPosition": {}
    },
    "S3Configuration": {
      "RoleARN": {},
      "BucketARN": {},
      "FileKey": {}
    },
    "InputProcessingConfiguration": {
      "InputLambdaProcessor": {
        "ResourceARN": {},
        "RoleARN": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. Note that when you create an application using the Amazon Kinesis Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:DiscoverInputSchema</code> action. </p>

> Body parameter

```json
{
  "ResourceARN": {},
  "RoleARN": {},
  "InputStartingPositionConfiguration": {
    "InputStartingPosition": {}
  },
  "S3Configuration": {
    "RoleARN": {},
    "BucketARN": {},
    "FileKey": {}
  },
  "InputProcessingConfiguration": {
    "InputLambdaProcessor": {
      "ResourceARN": {},
      "RoleARN": {}
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
|» RoleARN|body|object|false|none|
|» InputStartingPositionConfiguration|body|object|false|none|
|» » InputStartingPosition|body|object|false|none|
|» S3Configuration|body|object|false|none|
|» » RoleARN|body|object|true|none|
|» » BucketARN|body|object|true|none|
|» » FileKey|body|object|true|none|
|» InputProcessingConfiguration|body|object|false|none|
|» » InputLambdaProcessor|body|object|true|none|
|» » » ResourceARN|body|object|true|none|
|» » » RoleARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20150814.DiscoverInputSchema|

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

<h3 id="discoverinputschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DiscoverInputSchemaResponse](#schemadiscoverinputschemaresponse)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|UnableToDetectSchemaException|[UnableToDetectSchemaException](#schemaunabletodetectschemaexception)|
|482|482|ResourceProvisionedThroughputExceededException|[ResourceProvisionedThroughputExceededException](#schemaresourceprovisionedthroughputexceededexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApplications

<a id="opIdListApplications"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.ListApplications' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.ListApplications' \
  -d '{
    "Limit": {},
    "ExclusiveStartApplicationName": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.ListApplications`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the <code>HasMoreApplications</code> value as true, you can send another request by adding the <code>ExclusiveStartApplicationName</code> in the request body, and set the value of this to the last application name from the previous response. </p> <p>If you want detailed information about a specific application, use <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:ListApplications</code> action.</p>

> Body parameter

```json
{
  "Limit": {},
  "ExclusiveStartApplicationName": {}
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
|» ExclusiveStartApplicationName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20150814.ListApplications|

> Example responses

> 200 Response

```json
{
  "ApplicationSummaries": {},
  "HasMoreApplications": {}
}
```

<h3 id="listapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationsResponse](#schemalistapplicationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource`

Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.

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
|X-Amz-Target|KinesisAnalytics_20150814.ListTagsForResource|

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

## StartApplication

<a id="opIdStartApplication"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.StartApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.StartApplication' \
  -d '{
    "ApplicationName": {},
    "InputConfigurations": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.StartApplication`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.</p> <p>After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.</p> <p> The application status must be <code>READY</code> for you to start an application. You can get the application status in the console or using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p> <p>After you start the application, you can stop the application from processing the input by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html">StopApplication</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StartApplication</code> action.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "InputConfigurations": {}
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
|» InputConfigurations|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20150814.StartApplication|

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
|484|484|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopApplication

<a id="opIdStopApplication"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.StopApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.StopApplication' \
  -d '{
    "ApplicationName": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.StopApplication`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StopApplication</code> action.</p>

> Body parameter

```json
{
  "ApplicationName": {}
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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20150814.StopApplication|

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

<h3 id="stopapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopApplicationResponse](#schemastopapplicationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.TagResource`

Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.

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
|X-Amz-Target|KinesisAnalytics_20150814.TagResource|

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
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.UntagResource`

Removes one or more tags from a Kinesis Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.

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
|X-Amz-Target|KinesisAnalytics_20150814.UntagResource|

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
curl 'https://kinesisanalytics.us-east-1.amazonaws.com/#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: KinesisAnalytics_20150814.UpdateApplication' \
  -d '{
    "ApplicationName": {},
    "CurrentApplicationVersionId": {},
    "ApplicationUpdate": {
      "InputUpdates": {},
      "ApplicationCodeUpdate": {},
      "OutputUpdates": {},
      "ReferenceDataSourceUpdates": {},
      "CloudWatchLoggingOptionUpdates": {}
    }
  }'
```

`POST /#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication`

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration. </p> <p>Note that Amazon Kinesis Analytics updates the <code>CurrentApplicationVersionId</code> each time you update your application. </p> <p>This operation requires permission for the <code>kinesisanalytics:UpdateApplication</code> action.</p>

> Body parameter

```json
{
  "ApplicationName": {},
  "CurrentApplicationVersionId": {},
  "ApplicationUpdate": {
    "InputUpdates": {},
    "ApplicationCodeUpdate": {},
    "OutputUpdates": {},
    "ReferenceDataSourceUpdates": {},
    "CloudWatchLoggingOptionUpdates": {}
  }
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
|» CurrentApplicationVersionId|body|object|true|none|
|» ApplicationUpdate|body|object|true|none|
|» » InputUpdates|body|object|false|none|
|» » ApplicationCodeUpdate|body|object|false|none|
|» » OutputUpdates|body|object|false|none|
|» » ReferenceDataSourceUpdates|body|object|false|none|
|» » CloudWatchLoggingOptionUpdates|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|KinesisAnalytics_20150814.UpdateApplication|

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

<h3 id="updateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApplicationResponse](#schemaupdateapplicationresponse)|
|480|480|CodeValidationException|[CodeValidationException](#schemacodevalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|

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
{}
```

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
    "LogStreamARN": {},
    "RoleARN": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|true|none|none|
|CloudWatchLoggingOption|object|true|none|none|

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

<h2 id="tocS_UnsupportedOperationException">UnsupportedOperationException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedoperationexception"></a>
<a id="schema_UnsupportedOperationException"></a>
<a id="tocSunsupportedoperationexception"></a>
<a id="tocsunsupportedoperationexception"></a>

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
{}
```

<p/>

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
        "ResourceARN": {},
        "RoleARN": {}
      }
    },
    "KinesisStreamsInput": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "KinesisFirehoseInput": {
      "ResourceARN": {},
      "RoleARN": {}
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

<p/>

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
{}
```

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
      "ResourceARN": {},
      "RoleARN": {}
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
{}
```

<p/>

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
      "ResourceARN": {},
      "RoleARN": {}
    },
    "KinesisFirehoseOutput": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "LambdaOutput": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "DestinationSchema": {
      "RecordFormatType": {}
    }
  }
}
```

<p/>

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
{}
```

<p/>

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
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|true|none|none|
|ReferenceDataSource|object|true|none|none|

<h2 id="tocS_CreateApplicationResponse">CreateApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationresponse"></a>
<a id="schema_CreateApplicationResponse"></a>
<a id="tocScreateapplicationresponse"></a>
<a id="tocscreateapplicationresponse"></a>

```json
{
  "ApplicationSummary": {
    "ApplicationName": {},
    "ApplicationARN": {},
    "ApplicationStatus": {}
  }
}
```

TBD

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationSummary|object|true|none|none|

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
  "Inputs": {},
  "Outputs": {},
  "CloudWatchLoggingOptions": {},
  "ApplicationCode": {},
  "Tags": {}
}
```

TBD

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|ApplicationDescription|object|false|none|none|
|Inputs|object|false|none|none|
|Outputs|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|
|ApplicationCode|object|false|none|none|
|Tags|object|false|none|none|

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

<h2 id="tocS_DeleteApplicationResponse">DeleteApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationresponse"></a>
<a id="schema_DeleteApplicationResponse"></a>
<a id="tocSdeleteapplicationresponse"></a>
<a id="tocsdeleteapplicationresponse"></a>

```json
{}
```

<p/>

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

<p/>

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
{}
```

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
  "CloudWatchLoggingOptionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|true|none|none|
|CloudWatchLoggingOptionId|object|true|none|none|

<h2 id="tocS_DeleteApplicationInputProcessingConfigurationResponse">DeleteApplicationInputProcessingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationinputprocessingconfigurationresponse"></a>
<a id="schema_DeleteApplicationInputProcessingConfigurationResponse"></a>
<a id="tocSdeleteapplicationinputprocessingconfigurationresponse"></a>
<a id="tocsdeleteapplicationinputprocessingconfigurationresponse"></a>

```json
{}
```

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
{}
```

<p/>

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

<p/>

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
{}
```

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

<h2 id="tocS_DescribeApplicationResponse">DescribeApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationresponse"></a>
<a id="schema_DescribeApplicationResponse"></a>
<a id="tocSdescribeapplicationresponse"></a>
<a id="tocsdescribeapplicationresponse"></a>

```json
{
  "ApplicationDetail": {
    "ApplicationName": {},
    "ApplicationDescription": {},
    "ApplicationARN": {},
    "ApplicationStatus": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "InputDescriptions": {},
    "OutputDescriptions": {},
    "ReferenceDataSourceDescriptions": {},
    "CloudWatchLoggingOptionDescriptions": {},
    "ApplicationCode": {},
    "ApplicationVersionId": {}
  }
}
```

<p/>

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
  "ApplicationName": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|

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

<p/>

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
  "RoleARN": {},
  "InputStartingPositionConfiguration": {
    "InputStartingPosition": {}
  },
  "S3Configuration": {
    "RoleARN": {},
    "BucketARN": {},
    "FileKey": {}
  },
  "InputProcessingConfiguration": {
    "InputLambdaProcessor": {
      "ResourceARN": {},
      "RoleARN": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|
|RoleARN|object|false|none|none|
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

<h2 id="tocS_ListApplicationsResponse">ListApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsresponse"></a>
<a id="schema_ListApplicationsResponse"></a>
<a id="tocSlistapplicationsresponse"></a>
<a id="tocslistapplicationsresponse"></a>

```json
{
  "ApplicationSummaries": {},
  "HasMoreApplications": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationSummaries|object|true|none|none|
|HasMoreApplications|object|true|none|none|

<h2 id="tocS_ListApplicationsRequest">ListApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsrequest"></a>
<a id="schema_ListApplicationsRequest"></a>
<a id="tocSlistapplicationsrequest"></a>
<a id="tocslistapplicationsrequest"></a>

```json
{
  "Limit": {},
  "ExclusiveStartApplicationName": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|false|none|none|
|ExclusiveStartApplicationName|object|false|none|none|

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

<h2 id="tocS_StartApplicationResponse">StartApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartapplicationresponse"></a>
<a id="schema_StartApplicationResponse"></a>
<a id="tocSstartapplicationresponse"></a>
<a id="tocsstartapplicationresponse"></a>

```json
{}
```

<p/>

<h2 id="tocS_StartApplicationRequest">StartApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartapplicationrequest"></a>
<a id="schema_StartApplicationRequest"></a>
<a id="tocSstartapplicationrequest"></a>
<a id="tocsstartapplicationrequest"></a>

```json
{
  "ApplicationName": {},
  "InputConfigurations": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|InputConfigurations|object|true|none|none|

<h2 id="tocS_InvalidApplicationConfigurationException">InvalidApplicationConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidapplicationconfigurationexception"></a>
<a id="schema_InvalidApplicationConfigurationException"></a>
<a id="tocSinvalidapplicationconfigurationexception"></a>
<a id="tocsinvalidapplicationconfigurationexception"></a>

```json
null
```

<h2 id="tocS_StopApplicationResponse">StopApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopapplicationresponse"></a>
<a id="schema_StopApplicationResponse"></a>
<a id="tocSstopapplicationresponse"></a>
<a id="tocsstopapplicationresponse"></a>

```json
{}
```

<p/>

<h2 id="tocS_StopApplicationRequest">StopApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopapplicationrequest"></a>
<a id="schema_StopApplicationRequest"></a>
<a id="tocSstopapplicationrequest"></a>
<a id="tocsstopapplicationrequest"></a>

```json
{
  "ApplicationName": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|

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
{}
```

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
  "ApplicationUpdate": {
    "InputUpdates": {},
    "ApplicationCodeUpdate": {},
    "OutputUpdates": {},
    "ReferenceDataSourceUpdates": {},
    "CloudWatchLoggingOptionUpdates": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|CurrentApplicationVersionId|object|true|none|none|
|ApplicationUpdate|object|true|none|none|

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
  "LogStreamARN": {},
  "RoleARN": {}
}
```

Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogStreamARN|object|true|none|none|
|RoleARN|object|true|none|none|

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
    "ResourceARN": {},
    "RoleARN": {}
  }
}
```

Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputLambdaProcessor|object|true|none|none|

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
      "ResourceARN": {},
      "RoleARN": {}
    }
  },
  "KinesisStreamsInput": {
    "ResourceARN": {},
    "RoleARN": {}
  },
  "KinesisFirehoseInput": {
    "ResourceARN": {},
    "RoleARN": {}
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

When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NamePrefix|object|true|none|none|
|InputProcessingConfiguration|object|false|none|none|
|KinesisStreamsInput|object|false|none|none|
|KinesisFirehoseInput|object|false|none|none|
|InputParallelism|object|false|none|none|
|InputSchema|object|true|none|none|

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
    "ResourceARN": {},
    "RoleARN": {}
  },
  "KinesisFirehoseOutput": {
    "ResourceARN": {},
    "RoleARN": {}
  },
  "LambdaOutput": {
    "ResourceARN": {},
    "RoleARN": {}
  },
  "DestinationSchema": {
    "RecordFormatType": {}
  }
}
```

<p> Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p> <p/> <p>For limits on how many destinations an application can write and other limitations, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|KinesisStreamsOutput|object|false|none|none|
|KinesisFirehoseOutput|object|false|none|none|
|LambdaOutput|object|false|none|none|
|DestinationSchema|object|true|none|none|

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

Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TableName|object|true|none|none|
|S3ReferenceDataSource|object|false|none|none|
|ReferenceSchema|object|true|none|none|

<h2 id="tocS_ApplicationCode">ApplicationCode</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationcode"></a>
<a id="schema_ApplicationCode"></a>
<a id="tocSapplicationcode"></a>
<a id="tocsapplicationcode"></a>

```json
"string"
```

<h2 id="tocS_ApplicationDescription">ApplicationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdescription"></a>
<a id="schema_ApplicationDescription"></a>
<a id="tocSapplicationdescription"></a>
<a id="tocsapplicationdescription"></a>

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

<h2 id="tocS_ApplicationDetail">ApplicationDetail</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationdetail"></a>
<a id="schema_ApplicationDetail"></a>
<a id="tocSapplicationdetail"></a>
<a id="tocsapplicationdetail"></a>

```json
{
  "ApplicationName": {},
  "ApplicationDescription": {},
  "ApplicationARN": {},
  "ApplicationStatus": {},
  "CreateTimestamp": {},
  "LastUpdateTimestamp": {},
  "InputDescriptions": {},
  "OutputDescriptions": {},
  "ReferenceDataSourceDescriptions": {},
  "CloudWatchLoggingOptionDescriptions": {},
  "ApplicationCode": {},
  "ApplicationVersionId": {}
}
```

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|ApplicationDescription|object|false|none|none|
|ApplicationARN|object|true|none|none|
|ApplicationStatus|object|true|none|none|
|CreateTimestamp|object|false|none|none|
|LastUpdateTimestamp|object|false|none|none|
|InputDescriptions|object|false|none|none|
|OutputDescriptions|object|false|none|none|
|ReferenceDataSourceDescriptions|object|false|none|none|
|CloudWatchLoggingOptionDescriptions|object|false|none|none|
|ApplicationCode|object|false|none|none|
|ApplicationVersionId|object|true|none|none|

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
  "ApplicationStatus": {}
}
```

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationName|object|true|none|none|
|ApplicationARN|object|true|none|none|
|ApplicationStatus|object|true|none|none|

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
    "ApplicationStatus": {}
  }
]
```

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
        "ResourceARNUpdate": {},
        "RoleARNUpdate": {}
      }
    },
    "KinesisStreamsInputUpdate": {
      "ResourceARNUpdate": {},
      "RoleARNUpdate": {}
    },
    "KinesisFirehoseInputUpdate": {
      "ResourceARNUpdate": {},
      "RoleARNUpdate": {}
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
      "ResourceARNUpdate": {},
      "RoleARNUpdate": {}
    },
    "KinesisFirehoseOutputUpdate": {
      "ResourceARNUpdate": {},
      "RoleARNUpdate": {}
    },
    "LambdaOutputUpdate": {
      "ResourceARNUpdate": {},
      "RoleARNUpdate": {}
    },
    "DestinationSchemaUpdate": {
      "RecordFormatType": {}
    }
  }
]
```

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
      "FileKeyUpdate": {},
      "ReferenceRoleARNUpdate": {}
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
    "LogStreamARNUpdate": {},
    "RoleARNUpdate": {}
  }
]
```

<h2 id="tocS_ApplicationUpdate">ApplicationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationupdate"></a>
<a id="schema_ApplicationUpdate"></a>
<a id="tocSapplicationupdate"></a>
<a id="tocsapplicationupdate"></a>

```json
{
  "InputUpdates": {},
  "ApplicationCodeUpdate": {},
  "OutputUpdates": {},
  "ReferenceDataSourceUpdates": {},
  "CloudWatchLoggingOptionUpdates": {}
}
```

Describes updates to apply to an existing Amazon Kinesis Analytics application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputUpdates|object|false|none|none|
|ApplicationCodeUpdate|object|false|none|none|
|OutputUpdates|object|false|none|none|
|ReferenceDataSourceUpdates|object|false|none|none|
|CloudWatchLoggingOptionUpdates|object|false|none|none|

<h2 id="tocS_BooleanObject">BooleanObject</h2>
<!-- backwards compatibility -->
<a id="schemabooleanobject"></a>
<a id="schema_BooleanObject"></a>
<a id="tocSbooleanobject"></a>
<a id="tocsbooleanobject"></a>

```json
true
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

<p>Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordRowDelimiter|object|true|none|none|
|RecordColumnDelimiter|object|true|none|none|

<h2 id="tocS_LogStreamARN">LogStreamARN</h2>
<!-- backwards compatibility -->
<a id="schemalogstreamarn"></a>
<a id="schema_LogStreamARN"></a>
<a id="tocSlogstreamarn"></a>
<a id="tocslogstreamarn"></a>

```json
"string"
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

Description of the CloudWatch logging option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchLoggingOptionId|object|false|none|none|
|LogStreamARN|object|true|none|none|
|RoleARN|object|true|none|none|

<h2 id="tocS_CloudWatchLoggingOptionUpdate">CloudWatchLoggingOptionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggingoptionupdate"></a>
<a id="schema_CloudWatchLoggingOptionUpdate"></a>
<a id="tocScloudwatchloggingoptionupdate"></a>
<a id="tocscloudwatchloggingoptionupdate"></a>

```json
{
  "CloudWatchLoggingOptionId": {},
  "LogStreamARNUpdate": {},
  "RoleARNUpdate": {}
}
```

Describes CloudWatch logging option updates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchLoggingOptionId|object|true|none|none|
|LogStreamARNUpdate|object|false|none|none|
|RoleARNUpdate|object|false|none|none|

<h2 id="tocS_CloudWatchLoggingOptions">CloudWatchLoggingOptions</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggingoptions"></a>
<a id="schema_CloudWatchLoggingOptions"></a>
<a id="tocScloudwatchloggingoptions"></a>
<a id="tocscloudwatchloggingoptions"></a>

```json
[
  {
    "LogStreamARN": {},
    "RoleARN": {}
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
        "ResourceARN": {},
        "RoleARN": {}
      }
    },
    "KinesisStreamsInput": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "KinesisFirehoseInput": {
      "ResourceARN": {},
      "RoleARN": {}
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
      "ResourceARN": {},
      "RoleARN": {}
    },
    "KinesisFirehoseOutput": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "LambdaOutput": {
      "ResourceARN": {},
      "RoleARN": {}
    },
    "DestinationSchema": {
      "RecordFormatType": {}
    }
  }
]
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

Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.

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
  "RoleARN": {},
  "BucketARN": {},
  "FileKey": {}
}
```

Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the Amazon S3 object that contains the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|true|none|none|
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

Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.

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

<h2 id="tocS_FileKey">FileKey</h2>
<!-- backwards compatibility -->
<a id="schemafilekey"></a>
<a id="schema_FileKey"></a>
<a id="tocSfilekey"></a>
<a id="tocsfilekey"></a>

```json
"string"
```

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
  "ResourceARN": {},
  "RoleARN": {}
}
```

 Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|RoleARN|object|true|none|none|

<h2 id="tocS_KinesisFirehoseInput">KinesisFirehoseInput</h2>
<!-- backwards compatibility -->
<a id="schemakinesisfirehoseinput"></a>
<a id="schema_KinesisFirehoseInput"></a>
<a id="tocSkinesisfirehoseinput"></a>
<a id="tocskinesisfirehoseinput"></a>

```json
{
  "ResourceARN": {},
  "RoleARN": {}
}
```

 Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|RoleARN|object|true|none|none|

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

Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|object|false|none|none|

<h2 id="tocS_InputConfiguration">InputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainputconfiguration"></a>
<a id="schema_InputConfiguration"></a>
<a id="tocSinputconfiguration"></a>
<a id="tocsinputconfiguration"></a>

```json
{
  "Id": {},
  "InputStartingPositionConfiguration": {
    "InputStartingPosition": {}
  }
}
```

When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|InputStartingPositionConfiguration|object|true|none|none|

<h2 id="tocS_InputConfigurations">InputConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemainputconfigurations"></a>
<a id="schema_InputConfigurations"></a>
<a id="tocSinputconfigurations"></a>
<a id="tocsinputconfigurations"></a>

```json
[
  {
    "Id": {},
    "InputStartingPositionConfiguration": {
      "InputStartingPosition": {}
    }
  }
]
```

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

Provides configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputLambdaProcessorDescription|object|false|none|none|

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

 Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|
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

 Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|
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

Describes the application input configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.

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
  "ResourceARN": {},
  "RoleARN": {}
}
```

An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|RoleARN|object|true|none|none|

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

An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda expression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|
|RoleARN|object|false|none|none|

<h2 id="tocS_InputLambdaProcessorUpdate">InputLambdaProcessorUpdate</h2>
<!-- backwards compatibility -->
<a id="schemainputlambdaprocessorupdate"></a>
<a id="schema_InputLambdaProcessorUpdate"></a>
<a id="tocSinputlambdaprocessorupdate"></a>
<a id="tocsinputlambdaprocessorupdate"></a>

```json
{
  "ResourceARNUpdate": {},
  "RoleARNUpdate": {}
}
```

Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNUpdate|object|false|none|none|
|RoleARNUpdate|object|false|none|none|

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

Provides updates to the parallelism count.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountUpdate|object|false|none|none|

<h2 id="tocS_InputProcessingConfigurationUpdate">InputProcessingConfigurationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemainputprocessingconfigurationupdate"></a>
<a id="schema_InputProcessingConfigurationUpdate"></a>
<a id="tocSinputprocessingconfigurationupdate"></a>
<a id="tocsinputprocessingconfigurationupdate"></a>

```json
{
  "InputLambdaProcessorUpdate": {
    "ResourceARNUpdate": {},
    "RoleARNUpdate": {}
  }
}
```

Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>.

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

 Describes the record format and relevant mapping information that should be applied to schematize the records on the stream.

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
"string"
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

Describes updates for the application's input schema.

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
  "ResourceARNUpdate": {},
  "RoleARNUpdate": {}
}
```

When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNUpdate|object|false|none|none|
|RoleARNUpdate|object|false|none|none|

<h2 id="tocS_KinesisFirehoseInputUpdate">KinesisFirehoseInputUpdate</h2>
<!-- backwards compatibility -->
<a id="schemakinesisfirehoseinputupdate"></a>
<a id="schema_KinesisFirehoseInputUpdate"></a>
<a id="tocSkinesisfirehoseinputupdate"></a>
<a id="tocskinesisfirehoseinputupdate"></a>

```json
{
  "ResourceARNUpdate": {},
  "RoleARNUpdate": {}
}
```

When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNUpdate|object|false|none|none|
|RoleARNUpdate|object|false|none|none|

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
      "ResourceARNUpdate": {},
      "RoleARNUpdate": {}
    }
  },
  "KinesisStreamsInputUpdate": {
    "ResourceARNUpdate": {},
    "RoleARNUpdate": {}
  },
  "KinesisFirehoseInputUpdate": {
    "ResourceARNUpdate": {},
    "RoleARNUpdate": {}
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

Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).

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

Provides additional mapping information when JSON is the record format on the streaming source.

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
  "ResourceARN": {},
  "RoleARN": {}
}
```

When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|RoleARN|object|true|none|none|

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

 For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|
|RoleARN|object|false|none|none|

<h2 id="tocS_KinesisFirehoseOutputUpdate">KinesisFirehoseOutputUpdate</h2>
<!-- backwards compatibility -->
<a id="schemakinesisfirehoseoutputupdate"></a>
<a id="schema_KinesisFirehoseOutputUpdate"></a>
<a id="tocSkinesisfirehoseoutputupdate"></a>
<a id="tocskinesisfirehoseoutputupdate"></a>

```json
{
  "ResourceARNUpdate": {},
  "RoleARNUpdate": {}
}
```

 When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis Firehose delivery stream configured as the destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNUpdate|object|false|none|none|
|RoleARNUpdate|object|false|none|none|

<h2 id="tocS_KinesisStreamsOutput">KinesisStreamsOutput</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamsoutput"></a>
<a id="schema_KinesisStreamsOutput"></a>
<a id="tocSkinesisstreamsoutput"></a>
<a id="tocskinesisstreamsoutput"></a>

```json
{
  "ResourceARN": {},
  "RoleARN": {}
}
```

When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|RoleARN|object|true|none|none|

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

 For an application output, describes the Amazon Kinesis stream configured as its destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|
|RoleARN|object|false|none|none|

<h2 id="tocS_KinesisStreamsOutputUpdate">KinesisStreamsOutputUpdate</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamsoutputupdate"></a>
<a id="schema_KinesisStreamsOutputUpdate"></a>
<a id="tocSkinesisstreamsoutputupdate"></a>
<a id="tocskinesisstreamsoutputupdate"></a>

```json
{
  "ResourceARNUpdate": {},
  "RoleARNUpdate": {}
}
```

 When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis stream configured as the destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNUpdate|object|false|none|none|
|RoleARNUpdate|object|false|none|none|

<h2 id="tocS_LambdaOutput">LambdaOutput</h2>
<!-- backwards compatibility -->
<a id="schemalambdaoutput"></a>
<a id="schema_LambdaOutput"></a>
<a id="tocSlambdaoutput"></a>
<a id="tocslambdaoutput"></a>

```json
{
  "ResourceARN": {},
  "RoleARN": {}
}
```

When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|RoleARN|object|true|none|none|

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

For an application output, describes the AWS Lambda function configured as its destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|
|RoleARN|object|false|none|none|

<h2 id="tocS_LambdaOutputUpdate">LambdaOutputUpdate</h2>
<!-- backwards compatibility -->
<a id="schemalambdaoutputupdate"></a>
<a id="schema_LambdaOutputUpdate"></a>
<a id="tocSlambdaoutputupdate"></a>
<a id="tocslambdaoutputupdate"></a>

```json
{
  "ResourceARNUpdate": {},
  "RoleARNUpdate": {}
}
```

When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an AWS Lambda function configured as the destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARNUpdate|object|false|none|none|
|RoleARNUpdate|object|false|none|none|

<h2 id="tocS_ListApplicationsInputLimit">ListApplicationsInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsinputlimit"></a>
<a id="schema_ListApplicationsInputLimit"></a>
<a id="tocSlistapplicationsinputlimit"></a>
<a id="tocslistapplicationsinputlimit"></a>

```json
1
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

When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JSONMappingParameters|object|false|none|none|
|CSVMappingParameters|object|false|none|none|

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

Describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream.

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
    "ResourceARNUpdate": {},
    "RoleARNUpdate": {}
  },
  "KinesisFirehoseOutputUpdate": {
    "ResourceARNUpdate": {},
    "RoleARNUpdate": {}
  },
  "LambdaOutputUpdate": {
    "ResourceARNUpdate": {},
    "RoleARNUpdate": {}
  },
  "DestinationSchemaUpdate": {
    "RecordFormatType": {}
  }
}
```

 Describes updates to the output configuration identified by the <code>OutputId</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputId|object|true|none|none|
|NameUpdate|object|false|none|none|
|KinesisStreamsOutputUpdate|object|false|none|none|
|KinesisFirehoseOutputUpdate|object|false|none|none|
|LambdaOutputUpdate|object|false|none|none|
|DestinationSchemaUpdate|object|false|none|none|

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

<p>Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>

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
  "FileKey": {},
  "ReferenceRoleARN": {}
}
```

<p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p> <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger reloading of data into your application.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketARN|object|true|none|none|
|FileKey|object|true|none|none|
|ReferenceRoleARN|object|true|none|none|

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

Provides the bucket name and object key name that stores the reference data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketARN|object|true|none|none|
|FileKey|object|true|none|none|
|ReferenceRoleARN|object|true|none|none|

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

Describes the reference data source configured for an application.

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
  "FileKeyUpdate": {},
  "ReferenceRoleARNUpdate": {}
}
```

Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketARNUpdate|object|false|none|none|
|FileKeyUpdate|object|false|none|none|
|ReferenceRoleARNUpdate|object|false|none|none|

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
    "FileKeyUpdate": {},
    "ReferenceRoleARNUpdate": {}
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

When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReferenceId|object|true|none|none|
|TableNameUpdate|object|false|none|none|
|S3ReferenceDataSourceUpdate|object|false|none|none|
|ReferenceSchemaUpdate|object|false|none|none|

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

A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.

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
