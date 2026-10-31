<h1 id="aws-iot-analytics">AWS IoT Analytics v2017-11-27</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>IoT Analytics allows you to collect large amounts of device data, process messages, and store them. You can then query the data and run sophisticated analytics on it. IoT Analytics enables advanced data exploration through integration with Jupyter Notebooks and data visualization through integration with Amazon QuickSight.</p> <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result the data from these devices can have significant gaps, corrupted messages, and false readings that must be cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data from external sources. </p> <p>IoT Analytics automates the steps required to analyze data from IoT devices. IoT Analytics filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You can set up the service to collect only the data you need from your devices, apply mathematical transforms to process the data, and enrich the data with device-specific metadata such as device type and location before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine, or perform more complex analytics and machine learning inference. IoT Analytics includes pre-built models for common IoT use cases so you can answer questions like which devices are about to fail or which customers are at risk of abandoning their wearable devices.</p>

Base URLs:

* <a href="http://iotanalytics.us-east-1.amazonaws.com">http://iotanalytics.us-east-1.amazonaws.com</a> - The AWS IoT Analytics multi-region endpoint

* <a href="https://iotanalytics.us-east-1.amazonaws.com">https://iotanalytics.us-east-1.amazonaws.com</a> - The AWS IoT Analytics multi-region endpoint

* <a href="http://iotanalytics.cn-north-1.amazonaws.com.cn">http://iotanalytics.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Analytics endpoint for China (Beijing) and China (Ningxia)

* <a href="https://iotanalytics.cn-north-1.amazonaws.com.cn">https://iotanalytics.cn-north-1.amazonaws.com.cn</a> - The AWS IoT Analytics endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/iotanalytics/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-iot-analytics-default">Default</h1>

## BatchPutMessage

<a id="opIdBatchPutMessage"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/messages/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelName": "string",
    "messages": [
      {
        "messageId": {},
        "payload": {}
      }
    ]
  }'
```

`POST /messages/batch`

Sends messages to a channel.

> Body parameter

```json
{
  "channelName": "string",
  "messages": [
    {
      "messageId": {},
      "payload": {}
    }
  ]
}
```

<h3 id="batchputmessage-parameters">Parameters</h3>

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
|» channelName|body|string|true|The name of the channel where the messages are sent.|
|» messages|body|[[Message](#schemamessage)]|true|<p>The list of messages to be sent. Each message has the format: { "messageId": "string", "payload": "string"}.</p> <p>The field names of message payloads (data) that you send to IoT Analytics:</p> <ul> <li> <p>Must contain only alphanumeric characters and undescores (_). No other special characters are allowed.</p> </li> <li> <p>Must begin with an alphabetic character or single underscore (_).</p> </li> <li> <p>Cannot contain hyphens (-).</p> </li> <li> <p>In regular expression terms: "^[A-Za-z_]([A-Za-z0-9]*\|[A-Za-z0-9][A-Za-z0-9_]*)$". </p> </li> <li> <p>Cannot be more than 255 characters.</p> </li> <li> <p>Are case insensitive. (Fields named foo and FOO in the same payload are considered duplicates.)</p> </li> </ul> <p>For example, {"temp_01": 29} or {"_temp_01": 29} are valid, but {"temp-01": 29}, {"01_temp": 29} or {"__temp_01": 29} are invalid in message payloads. </p>|

> Example responses

> 200 Response

```json
{
  "batchPutMessageErrorEntries": {}
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

<h3 id="batchputmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchPutMessageResponse](#schemabatchputmessageresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelPipelineReprocessing

<a id="opIdCancelPipelineReprocessing"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/pipelines/string/reprocessing/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /pipelines/{pipelineName}/reprocessing/{reprocessingId}`

Cancels the reprocessing of data through the pipeline.

<h3 id="cancelpipelinereprocessing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pipelineName|path|string|true|The name of pipeline for which data reprocessing is canceled.|
|reprocessingId|path|string|true|The ID of the reprocessing task (returned by <code>StartPipelineReprocessing</code>).|
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

<h3 id="cancelpipelinereprocessing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelPipelineReprocessingResponse](#schemacancelpipelinereprocessingresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListChannels

<a id="opIdListChannels"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/channels \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels`

Retrieves a list of channels.

<h3 id="listchannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token for the next set of results.|
|maxResults|query|integer|false|<p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>|
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
  "channelSummaries": {},
  "nextToken": {}
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

<h3 id="listchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChannelsResponse](#schemalistchannelsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateChannel

<a id="opIdCreateChannel"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/channels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelName": "string",
    "channelStorage": {
      "serviceManagedS3": {},
      "customerManagedS3": {
        "bucket": {},
        "keyPrefix": {},
        "roleArn": {}
      }
    },
    "retentionPeriod": {
      "unlimited": {},
      "numberOfDays": {}
    },
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`POST /channels`

Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.

> Body parameter

```json
{
  "channelName": "string",
  "channelStorage": {
    "serviceManagedS3": {},
    "customerManagedS3": {
      "bucket": {},
      "keyPrefix": {},
      "roleArn": {}
    }
  },
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  },
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="createchannel-parameters">Parameters</h3>

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
|» channelName|body|string|true|The name of the channel.|
|» channelStorage|body|object|false|Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.|
|» » serviceManagedS3|body|object|false|none|
|» » customerManagedS3|body|object|false|none|
|» » » bucket|body|object|true|none|
|» » » keyPrefix|body|object|false|none|
|» » » roleArn|body|object|true|none|
|» retentionPeriod|body|object|false|How long, in days, message data is kept.|
|» » unlimited|body|object|false|none|
|» » numberOfDays|body|object|false|none|
|» tags|body|[[Tag](#schematag)]|false|Metadata which can be used to manage the channel.|

> Example responses

> 201 Response

```json
{
  "channelName": {},
  "channelArn": {},
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
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

<h3 id="createchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateChannelResponse](#schemacreatechannelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasets

<a id="opIdListDatasets"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datasets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datasets`

Retrieves information about datasets.

<h3 id="listdatasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token for the next set of results.|
|maxResults|query|integer|false|<p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>|
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
  "datasetSummaries": {},
  "nextToken": {}
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

<h3 id="listdatasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasetsResponse](#schemalistdatasetsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDataset

<a id="opIdCreateDataset"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datasets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "datasetName": "string",
    "actions": [
      {
        "actionName": {},
        "queryAction": {
          "sqlQuery": {},
          "filters": {}
        },
        "containerAction": {
          "image": {},
          "executionRoleArn": {},
          "resourceConfiguration": {
            "computeType": {},
            "volumeSizeInGB": {}
          },
          "variables": {}
        }
      }
    ],
    "triggers": [
      {
        "schedule": {
          "expression": {}
        },
        "dataset": {
          "name": {}
        }
      }
    ],
    "contentDeliveryRules": [
      {
        "entryName": {},
        "destination": {
          "iotEventsDestinationConfiguration": {
            "inputName": {},
            "roleArn": {}
          },
          "s3DestinationConfiguration": {
            "bucket": {},
            "key": {},
            "glueConfiguration": {
              "tableName": {},
              "databaseName": {}
            },
            "roleArn": {}
          }
        }
      }
    ],
    "retentionPeriod": {
      "unlimited": {},
      "numberOfDays": {}
    },
    "versioningConfiguration": {
      "unlimited": {},
      "maxVersions": {}
    },
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ],
    "lateDataRules": [
      {
        "ruleName": {},
        "ruleConfiguration": {
          "deltaTimeSessionWindowConfiguration": {
            "timeoutInMinutes": {}
          }
        }
      }
    ]
  }'
```

`POST /datasets`

Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.

> Body parameter

```json
{
  "datasetName": "string",
  "actions": [
    {
      "actionName": {},
      "queryAction": {
        "sqlQuery": {},
        "filters": {}
      },
      "containerAction": {
        "image": {},
        "executionRoleArn": {},
        "resourceConfiguration": {
          "computeType": {},
          "volumeSizeInGB": {}
        },
        "variables": {}
      }
    }
  ],
  "triggers": [
    {
      "schedule": {
        "expression": {}
      },
      "dataset": {
        "name": {}
      }
    }
  ],
  "contentDeliveryRules": [
    {
      "entryName": {},
      "destination": {
        "iotEventsDestinationConfiguration": {
          "inputName": {},
          "roleArn": {}
        },
        "s3DestinationConfiguration": {
          "bucket": {},
          "key": {},
          "glueConfiguration": {
            "tableName": {},
            "databaseName": {}
          },
          "roleArn": {}
        }
      }
    }
  ],
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  },
  "versioningConfiguration": {
    "unlimited": {},
    "maxVersions": {}
  },
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ],
  "lateDataRules": [
    {
      "ruleName": {},
      "ruleConfiguration": {
        "deltaTimeSessionWindowConfiguration": {
          "timeoutInMinutes": {}
        }
      }
    }
  ]
}
```

<h3 id="createdataset-parameters">Parameters</h3>

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
|» datasetName|body|string|true|The name of the dataset.|
|» actions|body|[[DatasetAction](#schemadatasetaction)]|true|A list of actions that create the dataset contents.|
|» triggers|body|[[DatasetTrigger](#schemadatasettrigger)]|false|A list of triggers. A trigger causes dataset contents to be populated at a specified time interval or when another dataset's contents are created. The list of triggers can be empty or contain up to five <code>DataSetTrigger</code> objects.|
|» contentDeliveryRules|body|[[DatasetContentDeliveryRule](#schemadatasetcontentdeliveryrule)]|false|When dataset contents are created, they are delivered to destinations specified here.|
|» retentionPeriod|body|object|false|How long, in days, message data is kept.|
|» » unlimited|body|object|false|none|
|» » numberOfDays|body|object|false|none|
|» versioningConfiguration|body|object|false|Information about the versioning of dataset contents.|
|» » unlimited|body|object|false|none|
|» » maxVersions|body|object|false|none|
|» tags|body|[[Tag](#schematag)]|false|Metadata which can be used to manage the dataset.|
|» lateDataRules|body|[[LateDataRule](#schemalatedatarule)]|false|A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.|

> Example responses

> 201 Response

```json
{
  "datasetName": {},
  "datasetArn": {},
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
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

<h3 id="createdataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateDatasetResponse](#schemacreatedatasetresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDatasetContent

<a id="opIdGetDatasetContent"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datasets/string/content \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datasets/{datasetName}/content`

Retrieves the contents of a dataset as presigned URIs.

<h3 id="getdatasetcontent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetName|path|string|true|The name of the dataset whose contents are retrieved.|
|versionId|query|string|false|The version of the dataset whose contents are retrieved. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to retrieve the contents of the latest or latest successfully completed dataset. If not specified, "$LATEST_SUCCEEDED" is the default.|
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
  "entries": {},
  "timestamp": {},
  "status": {
    "state": {},
    "reason": {}
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

<h3 id="getdatasetcontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDatasetContentResponse](#schemagetdatasetcontentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDatasetContent

<a id="opIdCreateDatasetContent"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datasets/string/content \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "versionId": "strings"
  }'
```

`POST /datasets/{datasetName}/content`

Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).

> Body parameter

```json
{
  "versionId": "strings"
}
```

<h3 id="createdatasetcontent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetName|path|string|true|The name of the dataset.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» versionId|body|string|false|The version ID of the dataset content. To specify <code>versionId</code> for a dataset content, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.|

> Example responses

> 200 Response

```json
{
  "versionId": {}
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

<h3 id="createdatasetcontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDatasetContentResponse](#schemacreatedatasetcontentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDatasetContent

<a id="opIdDeleteDatasetContent"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datasets/string/content \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /datasets/{datasetName}/content`

Deletes the content of the specified dataset.

<h3 id="deletedatasetcontent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetName|path|string|true|The name of the dataset whose content is deleted.|
|versionId|query|string|false|The version of the dataset whose content is deleted. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to delete the latest or latest successfully completed data set. If not specified, "$LATEST_SUCCEEDED" is the default.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deletedatasetcontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatastores

<a id="opIdListDatastores"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datastores \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datastores`

Retrieves a list of data stores.

<h3 id="listdatastores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token for the next set of results.|
|maxResults|query|integer|false|<p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>|
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
  "datastoreSummaries": {},
  "nextToken": {}
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

<h3 id="listdatastores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatastoresResponse](#schemalistdatastoresresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDatastore

<a id="opIdCreateDatastore"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datastores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "datastoreName": "string",
    "datastoreStorage": {
      "serviceManagedS3": {},
      "customerManagedS3": {
        "bucket": {},
        "keyPrefix": {},
        "roleArn": {}
      },
      "iotSiteWiseMultiLayerStorage": {
        "customerManagedS3Storage": {
          "bucket": {},
          "keyPrefix": {}
        }
      }
    },
    "retentionPeriod": {
      "unlimited": {},
      "numberOfDays": {}
    },
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ],
    "fileFormatConfiguration": {
      "jsonConfiguration": {},
      "parquetConfiguration": {
        "schemaDefinition": {
          "columns": {}
        }
      }
    },
    "datastorePartitions": {
      "partitions": {}
    }
  }'
```

`POST /datastores`

Creates a data store, which is a repository for messages.

> Body parameter

```json
{
  "datastoreName": "string",
  "datastoreStorage": {
    "serviceManagedS3": {},
    "customerManagedS3": {
      "bucket": {},
      "keyPrefix": {},
      "roleArn": {}
    },
    "iotSiteWiseMultiLayerStorage": {
      "customerManagedS3Storage": {
        "bucket": {},
        "keyPrefix": {}
      }
    }
  },
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  },
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ],
  "fileFormatConfiguration": {
    "jsonConfiguration": {},
    "parquetConfiguration": {
      "schemaDefinition": {
        "columns": {}
      }
    }
  },
  "datastorePartitions": {
    "partitions": {}
  }
}
```

<h3 id="createdatastore-parameters">Parameters</h3>

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
|» datastoreName|body|string|true|The name of the data store.|
|» datastoreStorage|body|object|false|Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. |
|» » serviceManagedS3|body|object|false|none|
|» » customerManagedS3|body|object|false|none|
|» » » bucket|body|object|true|none|
|» » » keyPrefix|body|object|false|none|
|» » » roleArn|body|object|true|none|
|» » iotSiteWiseMultiLayerStorage|body|object|false|none|
|» » » customerManagedS3Storage|body|object|true|none|
|» » » » bucket|body|object|true|none|
|» » » » keyPrefix|body|object|false|none|
|» retentionPeriod|body|object|false|How long, in days, message data is kept.|
|» » unlimited|body|object|false|none|
|» » numberOfDays|body|object|false|none|
|» tags|body|[[Tag](#schematag)]|false|Metadata which can be used to manage the data store.|
|» fileFormatConfiguration|body|object|false|<p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>|
|» » jsonConfiguration|body|object|false|none|
|» » parquetConfiguration|body|object|false|none|
|» » » schemaDefinition|body|object|false|none|
|» » » » columns|body|object|false|none|
|» datastorePartitions|body|object|false| Contains information about the partition dimensions in a data store. |
|» » partitions|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "datastoreName": {},
  "datastoreArn": {},
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
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

<h3 id="createdatastore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateDatastoreResponse](#schemacreatedatastoreresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPipelines

<a id="opIdListPipelines"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/pipelines \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /pipelines`

Retrieves a list of pipelines.

<h3 id="listpipelines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|The token for the next set of results.|
|maxResults|query|integer|false|<p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>|
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
  "pipelineSummaries": {},
  "nextToken": {}
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

<h3 id="listpipelines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPipelinesResponse](#schemalistpipelinesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePipeline

<a id="opIdCreatePipeline"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/pipelines \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "pipelineName": "string",
    "pipelineActivities": [
      {
        "channel": {
          "name": {},
          "channelName": {},
          "next": {}
        },
        "lambda": {
          "name": {},
          "lambdaName": {},
          "batchSize": {},
          "next": {}
        },
        "datastore": {
          "name": {},
          "datastoreName": {}
        },
        "addAttributes": {
          "name": {},
          "attributes": {
            "property1": "string",
            "property2": "string"
          },
          "next": {}
        },
        "removeAttributes": {
          "name": {},
          "attributes": {},
          "next": {}
        },
        "selectAttributes": {
          "name": {},
          "attributes": {},
          "next": {}
        },
        "filter": {
          "name": {},
          "filter": {},
          "next": {}
        },
        "math": {
          "name": {},
          "attribute": {},
          "math": {},
          "next": {}
        },
        "deviceRegistryEnrich": {
          "name": {},
          "attribute": {},
          "thingName": {},
          "roleArn": {},
          "next": {}
        },
        "deviceShadowEnrich": {
          "name": {},
          "attribute": {},
          "thingName": {},
          "roleArn": {},
          "next": {}
        }
      }
    ],
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`POST /pipelines`

Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.

> Body parameter

```json
{
  "pipelineName": "string",
  "pipelineActivities": [
    {
      "channel": {
        "name": {},
        "channelName": {},
        "next": {}
      },
      "lambda": {
        "name": {},
        "lambdaName": {},
        "batchSize": {},
        "next": {}
      },
      "datastore": {
        "name": {},
        "datastoreName": {}
      },
      "addAttributes": {
        "name": {},
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "next": {}
      },
      "removeAttributes": {
        "name": {},
        "attributes": {},
        "next": {}
      },
      "selectAttributes": {
        "name": {},
        "attributes": {},
        "next": {}
      },
      "filter": {
        "name": {},
        "filter": {},
        "next": {}
      },
      "math": {
        "name": {},
        "attribute": {},
        "math": {},
        "next": {}
      },
      "deviceRegistryEnrich": {
        "name": {},
        "attribute": {},
        "thingName": {},
        "roleArn": {},
        "next": {}
      },
      "deviceShadowEnrich": {
        "name": {},
        "attribute": {},
        "thingName": {},
        "roleArn": {},
        "next": {}
      }
    }
  ],
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="createpipeline-parameters">Parameters</h3>

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
|» pipelineName|body|string|true|The name of the pipeline.|
|» pipelineActivities|body|[[PipelineActivity](#schemapipelineactivity)]|true|<p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda unctions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity. For example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>|
|» tags|body|[[Tag](#schematag)]|false|Metadata which can be used to manage the pipeline.|

> Example responses

> 201 Response

```json
{
  "pipelineName": {},
  "pipelineArn": {}
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

<h3 id="createpipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreatePipelineResponse](#schemacreatepipelineresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeChannel

<a id="opIdDescribeChannel"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/channels/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{channelName}`

Retrieves information about a channel.

<h3 id="describechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelName|path|string|true|The name of the channel whose information is retrieved.|
|includeStatistics|query|boolean|false|If true, additional statistical information about the channel is included in the response. This feature can't be used with a channel whose S3 storage is customer-managed.|
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
  "channel": {
    "name": {},
    "storage": {
      "serviceManagedS3": {},
      "customerManagedS3": {
        "bucket": {},
        "keyPrefix": {},
        "roleArn": {}
      }
    },
    "arn": {},
    "status": {},
    "retentionPeriod": {
      "unlimited": {},
      "numberOfDays": {}
    },
    "creationTime": {},
    "lastUpdateTime": {},
    "lastMessageArrivalTime": {}
  },
  "statistics": {
    "size": {
      "estimatedSizeInBytes": {},
      "estimatedOn": {}
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

<h3 id="describechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChannelResponse](#schemadescribechannelresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateChannel

<a id="opIdUpdateChannel"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/channels/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "channelStorage": {
      "serviceManagedS3": {},
      "customerManagedS3": {
        "bucket": {},
        "keyPrefix": {},
        "roleArn": {}
      }
    },
    "retentionPeriod": {
      "unlimited": {},
      "numberOfDays": {}
    }
  }'
```

`PUT /channels/{channelName}`

Used to update the settings of a channel.

> Body parameter

```json
{
  "channelStorage": {
    "serviceManagedS3": {},
    "customerManagedS3": {
      "bucket": {},
      "keyPrefix": {},
      "roleArn": {}
    }
  },
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  }
}
```

<h3 id="updatechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelName|path|string|true|The name of the channel to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» channelStorage|body|object|false|Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.|
|» » serviceManagedS3|body|object|false|none|
|» » customerManagedS3|body|object|false|none|
|» » » bucket|body|object|true|none|
|» » » keyPrefix|body|object|false|none|
|» » » roleArn|body|object|true|none|
|» retentionPeriod|body|object|false|How long, in days, message data is kept.|
|» » unlimited|body|object|false|none|
|» » numberOfDays|body|object|false|none|

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

<h3 id="updatechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteChannel

<a id="opIdDeleteChannel"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/channels/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /channels/{channelName}`

Deletes the specified channel.

<h3 id="deletechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelName|path|string|true|The name of the channel to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deletechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDataset

<a id="opIdDescribeDataset"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datasets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datasets/{datasetName}`

Retrieves information about a dataset.

<h3 id="describedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetName|path|string|true|The name of the dataset whose information is retrieved.|
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
  "dataset": {
    "name": {},
    "arn": {},
    "actions": {},
    "triggers": {},
    "contentDeliveryRules": {},
    "status": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "retentionPeriod": {
      "unlimited": {},
      "numberOfDays": {}
    },
    "versioningConfiguration": {
      "unlimited": {},
      "maxVersions": {}
    },
    "lateDataRules": {}
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

<h3 id="describedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatasetResponse](#schemadescribedatasetresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDataset

<a id="opIdUpdateDataset"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datasets/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "actions": [
      {
        "actionName": {},
        "queryAction": {
          "sqlQuery": {},
          "filters": {}
        },
        "containerAction": {
          "image": {},
          "executionRoleArn": {},
          "resourceConfiguration": {
            "computeType": {},
            "volumeSizeInGB": {}
          },
          "variables": {}
        }
      }
    ],
    "triggers": [
      {
        "schedule": {
          "expression": {}
        },
        "dataset": {
          "name": {}
        }
      }
    ],
    "contentDeliveryRules": [
      {
        "entryName": {},
        "destination": {
          "iotEventsDestinationConfiguration": {
            "inputName": {},
            "roleArn": {}
          },
          "s3DestinationConfiguration": {
            "bucket": {},
            "key": {},
            "glueConfiguration": {
              "tableName": {},
              "databaseName": {}
            },
            "roleArn": {}
          }
        }
      }
    ],
    "retentionPeriod": {
      "unlimited": {},
      "numberOfDays": {}
    },
    "versioningConfiguration": {
      "unlimited": {},
      "maxVersions": {}
    },
    "lateDataRules": [
      {
        "ruleName": {},
        "ruleConfiguration": {
          "deltaTimeSessionWindowConfiguration": {
            "timeoutInMinutes": {}
          }
        }
      }
    ]
  }'
```

`PUT /datasets/{datasetName}`

Updates the settings of a dataset.

> Body parameter

```json
{
  "actions": [
    {
      "actionName": {},
      "queryAction": {
        "sqlQuery": {},
        "filters": {}
      },
      "containerAction": {
        "image": {},
        "executionRoleArn": {},
        "resourceConfiguration": {
          "computeType": {},
          "volumeSizeInGB": {}
        },
        "variables": {}
      }
    }
  ],
  "triggers": [
    {
      "schedule": {
        "expression": {}
      },
      "dataset": {
        "name": {}
      }
    }
  ],
  "contentDeliveryRules": [
    {
      "entryName": {},
      "destination": {
        "iotEventsDestinationConfiguration": {
          "inputName": {},
          "roleArn": {}
        },
        "s3DestinationConfiguration": {
          "bucket": {},
          "key": {},
          "glueConfiguration": {
            "tableName": {},
            "databaseName": {}
          },
          "roleArn": {}
        }
      }
    }
  ],
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  },
  "versioningConfiguration": {
    "unlimited": {},
    "maxVersions": {}
  },
  "lateDataRules": [
    {
      "ruleName": {},
      "ruleConfiguration": {
        "deltaTimeSessionWindowConfiguration": {
          "timeoutInMinutes": {}
        }
      }
    }
  ]
}
```

<h3 id="updatedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetName|path|string|true|The name of the dataset to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» actions|body|[[DatasetAction](#schemadatasetaction)]|true|A list of <code>DatasetAction</code> objects.|
|» triggers|body|[[DatasetTrigger](#schemadatasettrigger)]|false|A list of <code>DatasetTrigger</code> objects. The list can be empty or can contain up to five <code>DatasetTrigger</code> objects.|
|» contentDeliveryRules|body|[[DatasetContentDeliveryRule](#schemadatasetcontentdeliveryrule)]|false|When dataset contents are created, they are delivered to destinations specified here.|
|» retentionPeriod|body|object|false|How long, in days, message data is kept.|
|» » unlimited|body|object|false|none|
|» » numberOfDays|body|object|false|none|
|» versioningConfiguration|body|object|false|Information about the versioning of dataset contents.|
|» » unlimited|body|object|false|none|
|» » maxVersions|body|object|false|none|
|» lateDataRules|body|[[LateDataRule](#schemalatedatarule)]|false|A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.|

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

<h3 id="updatedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataset

<a id="opIdDeleteDataset"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datasets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /datasets/{datasetName}`

<p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>

<h3 id="deletedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetName|path|string|true|The name of the dataset to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deletedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDatastore

<a id="opIdDescribeDatastore"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datastores/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datastores/{datastoreName}`

Retrieves information about a data store.

<h3 id="describedatastore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datastoreName|path|string|true|The name of the data store|
|includeStatistics|query|boolean|false|If true, additional statistical information about the data store is included in the response. This feature can't be used with a data store whose S3 storage is customer-managed.|
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
  "datastore": {
    "name": {},
    "storage": {
      "serviceManagedS3": {},
      "customerManagedS3": {
        "bucket": {},
        "keyPrefix": {},
        "roleArn": {}
      },
      "iotSiteWiseMultiLayerStorage": {
        "customerManagedS3Storage": {
          "bucket": {},
          "keyPrefix": {}
        }
      }
    },
    "arn": {},
    "status": {},
    "retentionPeriod": {
      "unlimited": {},
      "numberOfDays": {}
    },
    "creationTime": {},
    "lastUpdateTime": {},
    "lastMessageArrivalTime": {},
    "fileFormatConfiguration": {
      "jsonConfiguration": {},
      "parquetConfiguration": {
        "schemaDefinition": {
          "columns": {}
        }
      }
    },
    "datastorePartitions": {
      "partitions": {}
    }
  },
  "statistics": {
    "size": {
      "estimatedSizeInBytes": {},
      "estimatedOn": {}
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

<h3 id="describedatastore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDatastoreResponse](#schemadescribedatastoreresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDatastore

<a id="opIdUpdateDatastore"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datastores/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "retentionPeriod": {
      "unlimited": {},
      "numberOfDays": {}
    },
    "datastoreStorage": {
      "serviceManagedS3": {},
      "customerManagedS3": {
        "bucket": {},
        "keyPrefix": {},
        "roleArn": {}
      },
      "iotSiteWiseMultiLayerStorage": {
        "customerManagedS3Storage": {
          "bucket": {},
          "keyPrefix": {}
        }
      }
    },
    "fileFormatConfiguration": {
      "jsonConfiguration": {},
      "parquetConfiguration": {
        "schemaDefinition": {
          "columns": {}
        }
      }
    }
  }'
```

`PUT /datastores/{datastoreName}`

Used to update the settings of a data store.

> Body parameter

```json
{
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  },
  "datastoreStorage": {
    "serviceManagedS3": {},
    "customerManagedS3": {
      "bucket": {},
      "keyPrefix": {},
      "roleArn": {}
    },
    "iotSiteWiseMultiLayerStorage": {
      "customerManagedS3Storage": {
        "bucket": {},
        "keyPrefix": {}
      }
    }
  },
  "fileFormatConfiguration": {
    "jsonConfiguration": {},
    "parquetConfiguration": {
      "schemaDefinition": {
        "columns": {}
      }
    }
  }
}
```

<h3 id="updatedatastore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datastoreName|path|string|true|The name of the data store to be updated.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» retentionPeriod|body|object|false|How long, in days, message data is kept.|
|» » unlimited|body|object|false|none|
|» » numberOfDays|body|object|false|none|
|» datastoreStorage|body|object|false|Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. |
|» » serviceManagedS3|body|object|false|none|
|» » customerManagedS3|body|object|false|none|
|» » » bucket|body|object|true|none|
|» » » keyPrefix|body|object|false|none|
|» » » roleArn|body|object|true|none|
|» » iotSiteWiseMultiLayerStorage|body|object|false|none|
|» » » customerManagedS3Storage|body|object|true|none|
|» » » » bucket|body|object|true|none|
|» » » » keyPrefix|body|object|false|none|
|» fileFormatConfiguration|body|object|false|<p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>|
|» » jsonConfiguration|body|object|false|none|
|» » parquetConfiguration|body|object|false|none|
|» » » schemaDefinition|body|object|false|none|
|» » » » columns|body|object|false|none|

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

<h3 id="updatedatastore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDatastore

<a id="opIdDeleteDatastore"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datastores/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /datastores/{datastoreName}`

Deletes the specified data store.

<h3 id="deletedatastore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datastoreName|path|string|true|The name of the data store to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deletedatastore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePipeline

<a id="opIdDescribePipeline"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/pipelines/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /pipelines/{pipelineName}`

Retrieves information about a pipeline.

<h3 id="describepipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pipelineName|path|string|true|The name of the pipeline whose information is retrieved.|
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
  "pipeline": {
    "name": {},
    "arn": {},
    "activities": {},
    "reprocessingSummaries": {},
    "creationTime": {},
    "lastUpdateTime": {}
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

<h3 id="describepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePipelineResponse](#schemadescribepipelineresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePipeline

<a id="opIdUpdatePipeline"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/pipelines/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "pipelineActivities": [
      {
        "channel": {
          "name": {},
          "channelName": {},
          "next": {}
        },
        "lambda": {
          "name": {},
          "lambdaName": {},
          "batchSize": {},
          "next": {}
        },
        "datastore": {
          "name": {},
          "datastoreName": {}
        },
        "addAttributes": {
          "name": {},
          "attributes": {
            "property1": "string",
            "property2": "string"
          },
          "next": {}
        },
        "removeAttributes": {
          "name": {},
          "attributes": {},
          "next": {}
        },
        "selectAttributes": {
          "name": {},
          "attributes": {},
          "next": {}
        },
        "filter": {
          "name": {},
          "filter": {},
          "next": {}
        },
        "math": {
          "name": {},
          "attribute": {},
          "math": {},
          "next": {}
        },
        "deviceRegistryEnrich": {
          "name": {},
          "attribute": {},
          "thingName": {},
          "roleArn": {},
          "next": {}
        },
        "deviceShadowEnrich": {
          "name": {},
          "attribute": {},
          "thingName": {},
          "roleArn": {},
          "next": {}
        }
      }
    ]
  }'
```

`PUT /pipelines/{pipelineName}`

Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.

> Body parameter

```json
{
  "pipelineActivities": [
    {
      "channel": {
        "name": {},
        "channelName": {},
        "next": {}
      },
      "lambda": {
        "name": {},
        "lambdaName": {},
        "batchSize": {},
        "next": {}
      },
      "datastore": {
        "name": {},
        "datastoreName": {}
      },
      "addAttributes": {
        "name": {},
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "next": {}
      },
      "removeAttributes": {
        "name": {},
        "attributes": {},
        "next": {}
      },
      "selectAttributes": {
        "name": {},
        "attributes": {},
        "next": {}
      },
      "filter": {
        "name": {},
        "filter": {},
        "next": {}
      },
      "math": {
        "name": {},
        "attribute": {},
        "math": {},
        "next": {}
      },
      "deviceRegistryEnrich": {
        "name": {},
        "attribute": {},
        "thingName": {},
        "roleArn": {},
        "next": {}
      },
      "deviceShadowEnrich": {
        "name": {},
        "attribute": {},
        "thingName": {},
        "roleArn": {},
        "next": {}
      }
    }
  ]
}
```

<h3 id="updatepipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pipelineName|path|string|true|The name of the pipeline to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» pipelineActivities|body|[[PipelineActivity](#schemapipelineactivity)]|true|<p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity. For example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>|

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

<h3 id="updatepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePipeline

<a id="opIdDeletePipeline"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/pipelines/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /pipelines/{pipelineName}`

Deletes the specified pipeline.

<h3 id="deletepipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pipelineName|path|string|true|The name of the pipeline to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="deletepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLoggingOptions

<a id="opIdDescribeLoggingOptions"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/logging \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /logging`

Retrieves the current settings of the IoT Analytics logging options.

<h3 id="describeloggingoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "loggingOptions": {
    "roleArn": {},
    "level": {},
    "enabled": {}
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

<h3 id="describeloggingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLoggingOptionsResponse](#schemadescribeloggingoptionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutLoggingOptions

<a id="opIdPutLoggingOptions"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/logging \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "loggingOptions": {
      "roleArn": {},
      "level": {},
      "enabled": {}
    }
  }'
```

`PUT /logging`

<p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>

> Body parameter

```json
{
  "loggingOptions": {
    "roleArn": {},
    "level": {},
    "enabled": {}
  }
}
```

<h3 id="putloggingoptions-parameters">Parameters</h3>

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
|» loggingOptions|body|object|true|Information about logging options.|
|» » roleArn|body|object|false|none|
|» » level|body|object|false|none|
|» » enabled|body|object|false|none|

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

<h3 id="putloggingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasetContents

<a id="opIdListDatasetContents"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/datasets/string/contents \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /datasets/{datasetName}/contents`

Lists information about dataset contents that have been created.

<h3 id="listdatasetcontents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetName|path|string|true|The name of the dataset whose contents information you want to list.|
|nextToken|query|string|false|The token for the next set of results.|
|maxResults|query|integer|false|The maximum number of results to return in this request.|
|scheduledOnOrAfter|query|string(date-time)|false|A filter to limit results to those dataset contents whose creation is scheduled on or after the given time. See the field <code>triggers.schedule</code> in the <code>CreateDataset</code> request. (timestamp)|
|scheduledBefore|query|string(date-time)|false|A filter to limit results to those dataset contents whose creation is scheduled before the given time. See the field <code>triggers.schedule</code> in the <code>CreateDataset</code> request. (timestamp)|
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
  "datasetContentSummaries": {},
  "nextToken": {}
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

<h3 id="listdatasetcontents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDatasetContentsResponse](#schemalistdatasetcontentsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://iotanalytics.us-east-1.amazonaws.com/tags#resourceArn?resourceArn=stringstringstringst' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags#resourceArn`

Lists the tags (metadata) that you have assigned to the resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The ARN of the resource whose tags you want to list.|
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
  "tags": {}
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://iotanalytics.us-east-1.amazonaws.com/tags#resourceArn?resourceArn=stringstringstringst' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": [
      {
        "key": {},
        "value": {}
      }
    ]
  }'
```

`POST /tags#resourceArn`

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.

> Body parameter

```json
{
  "tags": [
    {
      "key": {},
      "value": {}
    }
  ]
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The ARN of the resource whose tags you want to modify.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|[[Tag](#schematag)]|true|The new or modified tags for the resource.|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RunPipelineActivity

<a id="opIdRunPipelineActivity"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/pipelineactivities/run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "pipelineActivity": {
      "channel": {
        "name": {},
        "channelName": {},
        "next": {}
      },
      "lambda": {
        "name": {},
        "lambdaName": {},
        "batchSize": {},
        "next": {}
      },
      "datastore": {
        "name": {},
        "datastoreName": {}
      },
      "addAttributes": {
        "name": {},
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "next": {}
      },
      "removeAttributes": {
        "name": {},
        "attributes": {},
        "next": {}
      },
      "selectAttributes": {
        "name": {},
        "attributes": {},
        "next": {}
      },
      "filter": {
        "name": {},
        "filter": {},
        "next": {}
      },
      "math": {
        "name": {},
        "attribute": {},
        "math": {},
        "next": {}
      },
      "deviceRegistryEnrich": {
        "name": {},
        "attribute": {},
        "thingName": {},
        "roleArn": {},
        "next": {}
      },
      "deviceShadowEnrich": {
        "name": {},
        "attribute": {},
        "thingName": {},
        "roleArn": {},
        "next": {}
      }
    },
    "payloads": [
      "string"
    ]
  }'
```

`POST /pipelineactivities/run`

Simulates the results of running a pipeline activity on a message payload.

> Body parameter

```json
{
  "pipelineActivity": {
    "channel": {
      "name": {},
      "channelName": {},
      "next": {}
    },
    "lambda": {
      "name": {},
      "lambdaName": {},
      "batchSize": {},
      "next": {}
    },
    "datastore": {
      "name": {},
      "datastoreName": {}
    },
    "addAttributes": {
      "name": {},
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "next": {}
    },
    "removeAttributes": {
      "name": {},
      "attributes": {},
      "next": {}
    },
    "selectAttributes": {
      "name": {},
      "attributes": {},
      "next": {}
    },
    "filter": {
      "name": {},
      "filter": {},
      "next": {}
    },
    "math": {
      "name": {},
      "attribute": {},
      "math": {},
      "next": {}
    },
    "deviceRegistryEnrich": {
      "name": {},
      "attribute": {},
      "thingName": {},
      "roleArn": {},
      "next": {}
    },
    "deviceShadowEnrich": {
      "name": {},
      "attribute": {},
      "thingName": {},
      "roleArn": {},
      "next": {}
    }
  },
  "payloads": [
    "string"
  ]
}
```

<h3 id="runpipelineactivity-parameters">Parameters</h3>

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
|» pipelineActivity|body|object|true|An activity that performs a transformation on a message.|
|» » channel|body|object|false|none|
|» » » name|body|object|true|none|
|» » » channelName|body|object|true|none|
|» » » next|body|object|false|none|
|» » lambda|body|object|false|none|
|» » » name|body|object|true|none|
|» » » lambdaName|body|object|true|none|
|» » » batchSize|body|object|true|none|
|» » » next|body|object|false|none|
|» » datastore|body|object|false|none|
|» » » name|body|object|true|none|
|» » » datastoreName|body|object|true|none|
|» » addAttributes|body|object|false|none|
|» » » name|body|object|true|none|
|» » » attributes|body|object|true|none|
|» » » » **additionalProperties**|body|[AttributeName](#schemaattributename)|false|none|
|» » » next|body|object|false|none|
|» » removeAttributes|body|object|false|none|
|» » » name|body|object|true|none|
|» » » attributes|body|object|true|none|
|» » » next|body|object|false|none|
|» » selectAttributes|body|object|false|none|
|» » » name|body|object|true|none|
|» » » attributes|body|object|true|none|
|» » » next|body|object|false|none|
|» » filter|body|object|false|none|
|» » » name|body|object|true|none|
|» » » filter|body|object|true|none|
|» » » next|body|object|false|none|
|» » math|body|object|false|none|
|» » » name|body|object|true|none|
|» » » attribute|body|object|true|none|
|» » » math|body|object|true|none|
|» » » next|body|object|false|none|
|» » deviceRegistryEnrich|body|object|false|none|
|» » » name|body|object|true|none|
|» » » attribute|body|object|true|none|
|» » » thingName|body|object|true|none|
|» » » roleArn|body|object|true|none|
|» » » next|body|object|false|none|
|» » deviceShadowEnrich|body|object|false|none|
|» » » name|body|object|true|none|
|» » » attribute|body|object|true|none|
|» » » thingName|body|object|true|none|
|» » » roleArn|body|object|true|none|
|» » » next|body|object|false|none|
|» payloads|body|[[MessagePayload](#schemamessagepayload)]|true|The sample message payloads on which the pipeline activity is run.|

> Example responses

> 200 Response

```json
{
  "payloads": {},
  "logResult": {}
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

<h3 id="runpipelineactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RunPipelineActivityResponse](#schemarunpipelineactivityresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SampleChannelData

<a id="opIdSampleChannelData"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/channels/string/sample \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{channelName}/sample`

Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.

<h3 id="samplechanneldata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelName|path|string|true|The name of the channel whose message samples are retrieved.|
|maxMessages|query|integer|false|The number of sample messages to be retrieved. The limit is 10. The default is also 10.|
|startTime|query|string(date-time)|false|The start of the time window from which sample messages are retrieved.|
|endTime|query|string(date-time)|false|The end of the time window from which sample messages are retrieved.|
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
  "payloads": {}
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

<h3 id="samplechanneldata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SampleChannelDataResponse](#schemasamplechanneldataresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartPipelineReprocessing

<a id="opIdStartPipelineReprocessing"></a>

> Code samples

```bash
curl https://iotanalytics.us-east-1.amazonaws.com/pipelines/string/reprocessing \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "startTime": "1970-01-01T00:00:00Z",
    "endTime": "1970-01-01T00:00:00Z",
    "channelMessages": {
      "s3Paths": {}
    }
  }'
```

`POST /pipelines/{pipelineName}/reprocessing`

Starts the reprocessing of raw message data through the pipeline.

> Body parameter

```json
{
  "startTime": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "channelMessages": {
    "s3Paths": {}
  }
}
```

<h3 id="startpipelinereprocessing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pipelineName|path|string|true|The name of the pipeline on which to start reprocessing.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» startTime|body|string(date-time)|false|<p>The start time (inclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>startTime</code> parameter, you must not use the <code>channelMessages</code> object.</p>|
|» endTime|body|string(date-time)|false|<p>The end time (exclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>endTime</code> parameter, you must not use the <code>channelMessages</code> object.</p>|
|» channelMessages|body|object|false|Specifies one or more sets of channel messages.|
|» » s3Paths|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "reprocessingId": {}
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

<h3 id="startpipelinereprocessing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartPipelineReprocessingResponse](#schemastartpipelinereprocessingresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://iotanalytics.us-east-1.amazonaws.com/tags#resourceArn&tagKeys?resourceArn=stringstringstringst&tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags#resourceArn&tagKeys`

Removes the given tags (metadata) from the resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|query|string|true|The ARN of the resource whose tags you want to remove.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The keys of those tags which you want to remove.|
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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalFailureException|[InternalFailureException](#schemainternalfailureexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchPutMessageResponse">BatchPutMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchputmessageresponse"></a>
<a id="schema_BatchPutMessageResponse"></a>
<a id="tocSbatchputmessageresponse"></a>
<a id="tocsbatchputmessageresponse"></a>

```json
{
  "batchPutMessageErrorEntries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchPutMessageErrorEntries|object|false|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "messageId": {},
  "payload": {}
}
```

Information about a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|object|true|none|none|
|payload|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_InternalFailureException">InternalFailureException</h2>
<!-- backwards compatibility -->
<a id="schemainternalfailureexception"></a>
<a id="schema_InternalFailureException"></a>
<a id="tocSinternalfailureexception"></a>
<a id="tocsinternalfailureexception"></a>

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_CancelPipelineReprocessingResponse">CancelPipelineReprocessingResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelpipelinereprocessingresponse"></a>
<a id="schema_CancelPipelineReprocessingResponse"></a>
<a id="tocScancelpipelinereprocessingresponse"></a>
<a id="tocscancelpipelinereprocessingresponse"></a>

```json
{}
```

<h2 id="tocS_CreateChannelResponse">CreateChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelresponse"></a>
<a id="schema_CreateChannelResponse"></a>
<a id="tocScreatechannelresponse"></a>
<a id="tocscreatechannelresponse"></a>

```json
{
  "channelName": {},
  "channelArn": {},
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelName|object|false|none|none|
|channelArn|object|false|none|none|
|retentionPeriod|object|false|none|none|

<h2 id="tocS_ServiceManagedChannelS3Storage">ServiceManagedChannelS3Storage</h2>
<!-- backwards compatibility -->
<a id="schemaservicemanagedchannels3storage"></a>
<a id="schema_ServiceManagedChannelS3Storage"></a>
<a id="tocSservicemanagedchannels3storage"></a>
<a id="tocsservicemanagedchannels3storage"></a>

```json
{}
```

Used to store channel data in an S3 bucket managed by IoT Analytics. You can't change the choice of S3 storage after the data store is created.

<h2 id="tocS_CustomerManagedChannelS3Storage">CustomerManagedChannelS3Storage</h2>
<!-- backwards compatibility -->
<a id="schemacustomermanagedchannels3storage"></a>
<a id="schema_CustomerManagedChannelS3Storage"></a>
<a id="tocScustomermanagedchannels3storage"></a>
<a id="tocscustomermanagedchannels3storage"></a>

```json
{
  "bucket": {},
  "keyPrefix": {},
  "roleArn": {}
}
```

Used to store channel data in an S3 bucket that you manage. If customer-managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of S3 storage after the data store is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|true|none|none|
|keyPrefix|object|false|none|none|
|roleArn|object|true|none|none|

<h2 id="tocS_UnlimitedRetentionPeriod">UnlimitedRetentionPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaunlimitedretentionperiod"></a>
<a id="schema_UnlimitedRetentionPeriod"></a>
<a id="tocSunlimitedretentionperiod"></a>
<a id="tocsunlimitedretentionperiod"></a>

```json
true
```

<h2 id="tocS_RetentionPeriodInDays">RetentionPeriodInDays</h2>
<!-- backwards compatibility -->
<a id="schemaretentionperiodindays"></a>
<a id="schema_RetentionPeriodInDays"></a>
<a id="tocSretentionperiodindays"></a>
<a id="tocsretentionperiodindays"></a>

```json
1
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "key": {},
  "value": {}
}
```

A set of key-value pairs that are used to manage the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

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
  "datasetName": {},
  "datasetArn": {},
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetName|object|false|none|none|
|datasetArn|object|false|none|none|
|retentionPeriod|object|false|none|none|

<h2 id="tocS_DatasetAction">DatasetAction</h2>
<!-- backwards compatibility -->
<a id="schemadatasetaction"></a>
<a id="schema_DatasetAction"></a>
<a id="tocSdatasetaction"></a>
<a id="tocsdatasetaction"></a>

```json
{
  "actionName": {},
  "queryAction": {
    "sqlQuery": {},
    "filters": {}
  },
  "containerAction": {
    "image": {},
    "executionRoleArn": {},
    "resourceConfiguration": {
      "computeType": {},
      "volumeSizeInGB": {}
    },
    "variables": {}
  }
}
```

A <code>DatasetAction</code> object that specifies how dataset contents are automatically created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionName|object|false|none|none|
|queryAction|object|false|none|none|
|containerAction|object|false|none|none|

<h2 id="tocS_DatasetTrigger">DatasetTrigger</h2>
<!-- backwards compatibility -->
<a id="schemadatasettrigger"></a>
<a id="schema_DatasetTrigger"></a>
<a id="tocSdatasettrigger"></a>
<a id="tocsdatasettrigger"></a>

```json
{
  "schedule": {
    "expression": {}
  },
  "dataset": {
    "name": {}
  }
}
```

The <code>DatasetTrigger</code> that specifies when the dataset is automatically updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|object|false|none|none|
|dataset|object|false|none|none|

<h2 id="tocS_DatasetContentDeliveryRule">DatasetContentDeliveryRule</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcontentdeliveryrule"></a>
<a id="schema_DatasetContentDeliveryRule"></a>
<a id="tocSdatasetcontentdeliveryrule"></a>
<a id="tocsdatasetcontentdeliveryrule"></a>

```json
{
  "entryName": {},
  "destination": {
    "iotEventsDestinationConfiguration": {
      "inputName": {},
      "roleArn": {}
    },
    "s3DestinationConfiguration": {
      "bucket": {},
      "key": {},
      "glueConfiguration": {
        "tableName": {},
        "databaseName": {}
      },
      "roleArn": {}
    }
  }
}
```

When dataset contents are created, they are delivered to destination specified here.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryName|object|false|none|none|
|destination|object|true|none|none|

<h2 id="tocS_UnlimitedVersioning">UnlimitedVersioning</h2>
<!-- backwards compatibility -->
<a id="schemaunlimitedversioning"></a>
<a id="schema_UnlimitedVersioning"></a>
<a id="tocSunlimitedversioning"></a>
<a id="tocsunlimitedversioning"></a>

```json
true
```

<h2 id="tocS_MaxVersions">MaxVersions</h2>
<!-- backwards compatibility -->
<a id="schemamaxversions"></a>
<a id="schema_MaxVersions"></a>
<a id="tocSmaxversions"></a>
<a id="tocsmaxversions"></a>

```json
1
```

<h2 id="tocS_LateDataRule">LateDataRule</h2>
<!-- backwards compatibility -->
<a id="schemalatedatarule"></a>
<a id="schema_LateDataRule"></a>
<a id="tocSlatedatarule"></a>
<a id="tocslatedatarule"></a>

```json
{
  "ruleName": {},
  "ruleConfiguration": {
    "deltaTimeSessionWindowConfiguration": {
      "timeoutInMinutes": {}
    }
  }
}
```

A structure that contains the name and configuration information of a late data rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleName|object|false|none|none|
|ruleConfiguration|object|true|none|none|

<h2 id="tocS_CreateDatasetContentResponse">CreateDatasetContentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetcontentresponse"></a>
<a id="schema_CreateDatasetContentResponse"></a>
<a id="tocScreatedatasetcontentresponse"></a>
<a id="tocscreatedatasetcontentresponse"></a>

```json
{
  "versionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versionId|object|false|none|none|

<h2 id="tocS_CreateDatastoreResponse">CreateDatastoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatastoreresponse"></a>
<a id="schema_CreateDatastoreResponse"></a>
<a id="tocScreatedatastoreresponse"></a>
<a id="tocscreatedatastoreresponse"></a>

```json
{
  "datastoreName": {},
  "datastoreArn": {},
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datastoreName|object|false|none|none|
|datastoreArn|object|false|none|none|
|retentionPeriod|object|false|none|none|

<h2 id="tocS_ServiceManagedDatastoreS3Storage">ServiceManagedDatastoreS3Storage</h2>
<!-- backwards compatibility -->
<a id="schemaservicemanageddatastores3storage"></a>
<a id="schema_ServiceManagedDatastoreS3Storage"></a>
<a id="tocSservicemanageddatastores3storage"></a>
<a id="tocsservicemanageddatastores3storage"></a>

```json
{}
```

Used to store data in an Amazon S3 bucket managed by IoT Analytics. You can't change the choice of Amazon S3 storage after your data store is created.

<h2 id="tocS_CustomerManagedDatastoreS3Storage">CustomerManagedDatastoreS3Storage</h2>
<!-- backwards compatibility -->
<a id="schemacustomermanageddatastores3storage"></a>
<a id="schema_CustomerManagedDatastoreS3Storage"></a>
<a id="tocScustomermanageddatastores3storage"></a>
<a id="tocscustomermanageddatastores3storage"></a>

```json
{
  "bucket": {},
  "keyPrefix": {},
  "roleArn": {}
}
```

S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|true|none|none|
|keyPrefix|object|false|none|none|
|roleArn|object|true|none|none|

<h2 id="tocS_DatastoreIotSiteWiseMultiLayerStorage">DatastoreIotSiteWiseMultiLayerStorage</h2>
<!-- backwards compatibility -->
<a id="schemadatastoreiotsitewisemultilayerstorage"></a>
<a id="schema_DatastoreIotSiteWiseMultiLayerStorage"></a>
<a id="tocSdatastoreiotsitewisemultilayerstorage"></a>
<a id="tocsdatastoreiotsitewisemultilayerstorage"></a>

```json
{
  "customerManagedS3Storage": {
    "bucket": {},
    "keyPrefix": {}
  }
}
```

 Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerManagedS3Storage|object|true|none|none|

<h2 id="tocS_JsonConfiguration">JsonConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemajsonconfiguration"></a>
<a id="schema_JsonConfiguration"></a>
<a id="tocSjsonconfiguration"></a>
<a id="tocsjsonconfiguration"></a>

```json
{}
```

Contains the configuration information of the JSON format.

<h2 id="tocS_ParquetConfiguration">ParquetConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaparquetconfiguration"></a>
<a id="schema_ParquetConfiguration"></a>
<a id="tocSparquetconfiguration"></a>
<a id="tocsparquetconfiguration"></a>

```json
{
  "schemaDefinition": {
    "columns": {}
  }
}
```

Contains the configuration information of the Parquet format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemaDefinition|object|false|none|none|

<h2 id="tocS_Partitions">Partitions</h2>
<!-- backwards compatibility -->
<a id="schemapartitions"></a>
<a id="schema_Partitions"></a>
<a id="tocSpartitions"></a>
<a id="tocspartitions"></a>

```json
[
  {
    "attributePartition": {
      "attributeName": {}
    },
    "timestampPartition": {
      "attributeName": {},
      "timestampFormat": {}
    }
  }
]
```

<h2 id="tocS_CreatePipelineResponse">CreatePipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepipelineresponse"></a>
<a id="schema_CreatePipelineResponse"></a>
<a id="tocScreatepipelineresponse"></a>
<a id="tocscreatepipelineresponse"></a>

```json
{
  "pipelineName": {},
  "pipelineArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|false|none|none|
|pipelineArn|object|false|none|none|

<h2 id="tocS_PipelineActivity">PipelineActivity</h2>
<!-- backwards compatibility -->
<a id="schemapipelineactivity"></a>
<a id="schema_PipelineActivity"></a>
<a id="tocSpipelineactivity"></a>
<a id="tocspipelineactivity"></a>

```json
{
  "channel": {
    "name": {},
    "channelName": {},
    "next": {}
  },
  "lambda": {
    "name": {},
    "lambdaName": {},
    "batchSize": {},
    "next": {}
  },
  "datastore": {
    "name": {},
    "datastoreName": {}
  },
  "addAttributes": {
    "name": {},
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "next": {}
  },
  "removeAttributes": {
    "name": {},
    "attributes": {},
    "next": {}
  },
  "selectAttributes": {
    "name": {},
    "attributes": {},
    "next": {}
  },
  "filter": {
    "name": {},
    "filter": {},
    "next": {}
  },
  "math": {
    "name": {},
    "attribute": {},
    "math": {},
    "next": {}
  },
  "deviceRegistryEnrich": {
    "name": {},
    "attribute": {},
    "thingName": {},
    "roleArn": {},
    "next": {}
  },
  "deviceShadowEnrich": {
    "name": {},
    "attribute": {},
    "thingName": {},
    "roleArn": {},
    "next": {}
  }
}
```

An activity that performs a transformation on a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|lambda|object|false|none|none|
|datastore|object|false|none|none|
|addAttributes|object|false|none|none|
|removeAttributes|object|false|none|none|
|selectAttributes|object|false|none|none|
|filter|object|false|none|none|
|math|object|false|none|none|
|deviceRegistryEnrich|object|false|none|none|
|deviceShadowEnrich|object|false|none|none|

<h2 id="tocS_DescribeChannelResponse">DescribeChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelresponse"></a>
<a id="schema_DescribeChannelResponse"></a>
<a id="tocSdescribechannelresponse"></a>
<a id="tocsdescribechannelresponse"></a>

```json
{
  "channel": {
    "name": {},
    "storage": {
      "serviceManagedS3": {},
      "customerManagedS3": {
        "bucket": {},
        "keyPrefix": {},
        "roleArn": {}
      }
    },
    "arn": {},
    "status": {},
    "retentionPeriod": {
      "unlimited": {},
      "numberOfDays": {}
    },
    "creationTime": {},
    "lastUpdateTime": {},
    "lastMessageArrivalTime": {}
  },
  "statistics": {
    "size": {
      "estimatedSizeInBytes": {},
      "estimatedOn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|none|
|statistics|object|false|none|none|

<h2 id="tocS_DescribeDatasetResponse">DescribeDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetresponse"></a>
<a id="schema_DescribeDatasetResponse"></a>
<a id="tocSdescribedatasetresponse"></a>
<a id="tocsdescribedatasetresponse"></a>

```json
{
  "dataset": {
    "name": {},
    "arn": {},
    "actions": {},
    "triggers": {},
    "contentDeliveryRules": {},
    "status": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "retentionPeriod": {
      "unlimited": {},
      "numberOfDays": {}
    },
    "versioningConfiguration": {
      "unlimited": {},
      "maxVersions": {}
    },
    "lateDataRules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|object|false|none|none|

<h2 id="tocS_DescribeDatastoreResponse">DescribeDatastoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatastoreresponse"></a>
<a id="schema_DescribeDatastoreResponse"></a>
<a id="tocSdescribedatastoreresponse"></a>
<a id="tocsdescribedatastoreresponse"></a>

```json
{
  "datastore": {
    "name": {},
    "storage": {
      "serviceManagedS3": {},
      "customerManagedS3": {
        "bucket": {},
        "keyPrefix": {},
        "roleArn": {}
      },
      "iotSiteWiseMultiLayerStorage": {
        "customerManagedS3Storage": {
          "bucket": {},
          "keyPrefix": {}
        }
      }
    },
    "arn": {},
    "status": {},
    "retentionPeriod": {
      "unlimited": {},
      "numberOfDays": {}
    },
    "creationTime": {},
    "lastUpdateTime": {},
    "lastMessageArrivalTime": {},
    "fileFormatConfiguration": {
      "jsonConfiguration": {},
      "parquetConfiguration": {
        "schemaDefinition": {
          "columns": {}
        }
      }
    },
    "datastorePartitions": {
      "partitions": {}
    }
  },
  "statistics": {
    "size": {
      "estimatedSizeInBytes": {},
      "estimatedOn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datastore|object|false|none|none|
|statistics|object|false|none|none|

<h2 id="tocS_DescribeLoggingOptionsResponse">DescribeLoggingOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloggingoptionsresponse"></a>
<a id="schema_DescribeLoggingOptionsResponse"></a>
<a id="tocSdescribeloggingoptionsresponse"></a>
<a id="tocsdescribeloggingoptionsresponse"></a>

```json
{
  "loggingOptions": {
    "roleArn": {},
    "level": {},
    "enabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loggingOptions|object|false|none|none|

<h2 id="tocS_DescribePipelineResponse">DescribePipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribepipelineresponse"></a>
<a id="schema_DescribePipelineResponse"></a>
<a id="tocSdescribepipelineresponse"></a>
<a id="tocsdescribepipelineresponse"></a>

```json
{
  "pipeline": {
    "name": {},
    "arn": {},
    "activities": {},
    "reprocessingSummaries": {},
    "creationTime": {},
    "lastUpdateTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipeline|object|false|none|none|

<h2 id="tocS_GetDatasetContentResponse">GetDatasetContentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdatasetcontentresponse"></a>
<a id="schema_GetDatasetContentResponse"></a>
<a id="tocSgetdatasetcontentresponse"></a>
<a id="tocsgetdatasetcontentresponse"></a>

```json
{
  "entries": {},
  "timestamp": {},
  "status": {
    "state": {},
    "reason": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|object|false|none|none|
|timestamp|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_ListChannelsResponse">ListChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsresponse"></a>
<a id="schema_ListChannelsResponse"></a>
<a id="tocSlistchannelsresponse"></a>
<a id="tocslistchannelsresponse"></a>

```json
{
  "channelSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDatasetContentsResponse">ListDatasetContentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetcontentsresponse"></a>
<a id="schema_ListDatasetContentsResponse"></a>
<a id="tocSlistdatasetcontentsresponse"></a>
<a id="tocslistdatasetcontentsresponse"></a>

```json
{
  "datasetContentSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetContentSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDatasetsResponse">ListDatasetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsresponse"></a>
<a id="schema_ListDatasetsResponse"></a>
<a id="tocSlistdatasetsresponse"></a>
<a id="tocslistdatasetsresponse"></a>

```json
{
  "datasetSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDatastoresResponse">ListDatastoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatastoresresponse"></a>
<a id="schema_ListDatastoresResponse"></a>
<a id="tocSlistdatastoresresponse"></a>
<a id="tocslistdatastoresresponse"></a>

```json
{
  "datastoreSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datastoreSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPipelinesResponse">ListPipelinesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpipelinesresponse"></a>
<a id="schema_ListPipelinesResponse"></a>
<a id="tocSlistpipelinesresponse"></a>
<a id="tocslistpipelinesresponse"></a>

```json
{
  "pipelineSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_LoggingLevel">LoggingLevel</h2>
<!-- backwards compatibility -->
<a id="schemalogginglevel"></a>
<a id="schema_LoggingLevel"></a>
<a id="tocSlogginglevel"></a>
<a id="tocslogginglevel"></a>

```json
"ERROR"
```

<h2 id="tocS_LoggingEnabled">LoggingEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaloggingenabled"></a>
<a id="schema_LoggingEnabled"></a>
<a id="tocSloggingenabled"></a>
<a id="tocsloggingenabled"></a>

```json
true
```

<h2 id="tocS_RunPipelineActivityResponse">RunPipelineActivityResponse</h2>
<!-- backwards compatibility -->
<a id="schemarunpipelineactivityresponse"></a>
<a id="schema_RunPipelineActivityResponse"></a>
<a id="tocSrunpipelineactivityresponse"></a>
<a id="tocsrunpipelineactivityresponse"></a>

```json
{
  "payloads": {},
  "logResult": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payloads|object|false|none|none|
|logResult|object|false|none|none|

<h2 id="tocS_ChannelActivity">ChannelActivity</h2>
<!-- backwards compatibility -->
<a id="schemachannelactivity"></a>
<a id="schema_ChannelActivity"></a>
<a id="tocSchannelactivity"></a>
<a id="tocschannelactivity"></a>

```json
{
  "name": {},
  "channelName": {},
  "next": {}
}
```

The activity that determines the source of the messages to be processed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|channelName|object|true|none|none|
|next|object|false|none|none|

<h2 id="tocS_LambdaActivity">LambdaActivity</h2>
<!-- backwards compatibility -->
<a id="schemalambdaactivity"></a>
<a id="schema_LambdaActivity"></a>
<a id="tocSlambdaactivity"></a>
<a id="tocslambdaactivity"></a>

```json
{
  "name": {},
  "lambdaName": {},
  "batchSize": {},
  "next": {}
}
```

An activity that runs a Lambda function to modify the message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|lambdaName|object|true|none|none|
|batchSize|object|true|none|none|
|next|object|false|none|none|

<h2 id="tocS_DatastoreActivity">DatastoreActivity</h2>
<!-- backwards compatibility -->
<a id="schemadatastoreactivity"></a>
<a id="schema_DatastoreActivity"></a>
<a id="tocSdatastoreactivity"></a>
<a id="tocsdatastoreactivity"></a>

```json
{
  "name": {},
  "datastoreName": {}
}
```

The datastore activity that specifies where to store the processed data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|datastoreName|object|true|none|none|

<h2 id="tocS_AddAttributesActivity">AddAttributesActivity</h2>
<!-- backwards compatibility -->
<a id="schemaaddattributesactivity"></a>
<a id="schema_AddAttributesActivity"></a>
<a id="tocSaddattributesactivity"></a>
<a id="tocsaddattributesactivity"></a>

```json
{
  "name": {},
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "next": {}
}
```

An activity that adds other attributes based on existing attributes in the message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|attributes|object|true|none|none|
|next|object|false|none|none|

<h2 id="tocS_RemoveAttributesActivity">RemoveAttributesActivity</h2>
<!-- backwards compatibility -->
<a id="schemaremoveattributesactivity"></a>
<a id="schema_RemoveAttributesActivity"></a>
<a id="tocSremoveattributesactivity"></a>
<a id="tocsremoveattributesactivity"></a>

```json
{
  "name": {},
  "attributes": {},
  "next": {}
}
```

An activity that removes attributes from a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|attributes|object|true|none|none|
|next|object|false|none|none|

<h2 id="tocS_SelectAttributesActivity">SelectAttributesActivity</h2>
<!-- backwards compatibility -->
<a id="schemaselectattributesactivity"></a>
<a id="schema_SelectAttributesActivity"></a>
<a id="tocSselectattributesactivity"></a>
<a id="tocsselectattributesactivity"></a>

```json
{
  "name": {},
  "attributes": {},
  "next": {}
}
```

Used to create a new message using only the specified attributes from the original message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|attributes|object|true|none|none|
|next|object|false|none|none|

<h2 id="tocS_FilterActivity">FilterActivity</h2>
<!-- backwards compatibility -->
<a id="schemafilteractivity"></a>
<a id="schema_FilterActivity"></a>
<a id="tocSfilteractivity"></a>
<a id="tocsfilteractivity"></a>

```json
{
  "name": {},
  "filter": {},
  "next": {}
}
```

An activity that filters a message based on its attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|filter|object|true|none|none|
|next|object|false|none|none|

<h2 id="tocS_MathActivity">MathActivity</h2>
<!-- backwards compatibility -->
<a id="schemamathactivity"></a>
<a id="schema_MathActivity"></a>
<a id="tocSmathactivity"></a>
<a id="tocsmathactivity"></a>

```json
{
  "name": {},
  "attribute": {},
  "math": {},
  "next": {}
}
```

An activity that computes an arithmetic expression using the message's attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|attribute|object|true|none|none|
|math|object|true|none|none|
|next|object|false|none|none|

<h2 id="tocS_DeviceRegistryEnrichActivity">DeviceRegistryEnrichActivity</h2>
<!-- backwards compatibility -->
<a id="schemadeviceregistryenrichactivity"></a>
<a id="schema_DeviceRegistryEnrichActivity"></a>
<a id="tocSdeviceregistryenrichactivity"></a>
<a id="tocsdeviceregistryenrichactivity"></a>

```json
{
  "name": {},
  "attribute": {},
  "thingName": {},
  "roleArn": {},
  "next": {}
}
```

An activity that adds data from the IoT device registry to your message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|attribute|object|true|none|none|
|thingName|object|true|none|none|
|roleArn|object|true|none|none|
|next|object|false|none|none|

<h2 id="tocS_DeviceShadowEnrichActivity">DeviceShadowEnrichActivity</h2>
<!-- backwards compatibility -->
<a id="schemadeviceshadowenrichactivity"></a>
<a id="schema_DeviceShadowEnrichActivity"></a>
<a id="tocSdeviceshadowenrichactivity"></a>
<a id="tocsdeviceshadowenrichactivity"></a>

```json
{
  "name": {},
  "attribute": {},
  "thingName": {},
  "roleArn": {},
  "next": {}
}
```

An activity that adds information from the IoT Device Shadow service to a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|attribute|object|true|none|none|
|thingName|object|true|none|none|
|roleArn|object|true|none|none|
|next|object|false|none|none|

<h2 id="tocS_MessagePayload">MessagePayload</h2>
<!-- backwards compatibility -->
<a id="schemamessagepayload"></a>
<a id="schema_MessagePayload"></a>
<a id="tocSmessagepayload"></a>
<a id="tocsmessagepayload"></a>

```json
"string"
```

<h2 id="tocS_SampleChannelDataResponse">SampleChannelDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemasamplechanneldataresponse"></a>
<a id="schema_SampleChannelDataResponse"></a>
<a id="tocSsamplechanneldataresponse"></a>
<a id="tocssamplechanneldataresponse"></a>

```json
{
  "payloads": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payloads|object|false|none|none|

<h2 id="tocS_StartPipelineReprocessingResponse">StartPipelineReprocessingResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartpipelinereprocessingresponse"></a>
<a id="schema_StartPipelineReprocessingResponse"></a>
<a id="tocSstartpipelinereprocessingresponse"></a>
<a id="tocsstartpipelinereprocessingresponse"></a>

```json
{
  "reprocessingId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reprocessingId|object|false|none|none|

<h2 id="tocS_S3PathChannelMessages">S3PathChannelMessages</h2>
<!-- backwards compatibility -->
<a id="schemas3pathchannelmessages"></a>
<a id="schema_S3PathChannelMessages"></a>
<a id="tocSs3pathchannelmessages"></a>
<a id="tocss3pathchannelmessages"></a>

```json
[
  "string"
]
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

<h2 id="tocS_ActivityBatchSize">ActivityBatchSize</h2>
<!-- backwards compatibility -->
<a id="schemaactivitybatchsize"></a>
<a id="schema_ActivityBatchSize"></a>
<a id="tocSactivitybatchsize"></a>
<a id="tocsactivitybatchsize"></a>

```json
1
```

<h2 id="tocS_ActivityName">ActivityName</h2>
<!-- backwards compatibility -->
<a id="schemaactivityname"></a>
<a id="schema_ActivityName"></a>
<a id="tocSactivityname"></a>
<a id="tocsactivityname"></a>

```json
"string"
```

<h2 id="tocS_AttributeNameMapping">AttributeNameMapping</h2>
<!-- backwards compatibility -->
<a id="schemaattributenamemapping"></a>
<a id="schema_AttributeNameMapping"></a>
<a id="tocSattributenamemapping"></a>
<a id="tocsattributenamemapping"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeName](#schemaattributename)|false|none|none|

<h2 id="tocS_AttributeName">AttributeName</h2>
<!-- backwards compatibility -->
<a id="schemaattributename"></a>
<a id="schema_AttributeName"></a>
<a id="tocSattributename"></a>
<a id="tocsattributename"></a>

```json
"string"
```

<h2 id="tocS_AttributeNames">AttributeNames</h2>
<!-- backwards compatibility -->
<a id="schemaattributenames"></a>
<a id="schema_AttributeNames"></a>
<a id="tocSattributenames"></a>
<a id="tocsattributenames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchPutMessageErrorEntry">BatchPutMessageErrorEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchputmessageerrorentry"></a>
<a id="schema_BatchPutMessageErrorEntry"></a>
<a id="tocSbatchputmessageerrorentry"></a>
<a id="tocsbatchputmessageerrorentry"></a>

```json
{
  "messageId": {},
  "errorCode": {},
  "errorMessage": {}
}
```

Contains informations about errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_BatchPutMessageErrorEntries">BatchPutMessageErrorEntries</h2>
<!-- backwards compatibility -->
<a id="schemabatchputmessageerrorentries"></a>
<a id="schema_BatchPutMessageErrorEntries"></a>
<a id="tocSbatchputmessageerrorentries"></a>
<a id="tocsbatchputmessageerrorentries"></a>

```json
[
  {
    "messageId": {},
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_MessageId">MessageId</h2>
<!-- backwards compatibility -->
<a id="schemamessageid"></a>
<a id="schema_MessageId"></a>
<a id="tocSmessageid"></a>
<a id="tocsmessageid"></a>

```json
"string"
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

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_ChannelName">ChannelName</h2>
<!-- backwards compatibility -->
<a id="schemachannelname"></a>
<a id="schema_ChannelName"></a>
<a id="tocSchannelname"></a>
<a id="tocschannelname"></a>

```json
"string"
```

<h2 id="tocS_Messages">Messages</h2>
<!-- backwards compatibility -->
<a id="schemamessages"></a>
<a id="schema_Messages"></a>
<a id="tocSmessages"></a>
<a id="tocsmessages"></a>

```json
[
  {
    "messageId": {},
    "payload": {}
  }
]
```

<h2 id="tocS_BatchPutMessageRequest">BatchPutMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchputmessagerequest"></a>
<a id="schema_BatchPutMessageRequest"></a>
<a id="tocSbatchputmessagerequest"></a>
<a id="tocsbatchputmessagerequest"></a>

```json
{
  "channelName": {},
  "messages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelName|object|true|none|none|
|messages|object|true|none|none|

<h2 id="tocS_BucketKeyExpression">BucketKeyExpression</h2>
<!-- backwards compatibility -->
<a id="schemabucketkeyexpression"></a>
<a id="schema_BucketKeyExpression"></a>
<a id="tocSbucketkeyexpression"></a>
<a id="tocsbucketkeyexpression"></a>

```json
"string"
```

<h2 id="tocS_BucketName">BucketName</h2>
<!-- backwards compatibility -->
<a id="schemabucketname"></a>
<a id="schema_BucketName"></a>
<a id="tocSbucketname"></a>
<a id="tocsbucketname"></a>

```json
"string"
```

<h2 id="tocS_PipelineName">PipelineName</h2>
<!-- backwards compatibility -->
<a id="schemapipelinename"></a>
<a id="schema_PipelineName"></a>
<a id="tocSpipelinename"></a>
<a id="tocspipelinename"></a>

```json
"string"
```

<h2 id="tocS_ReprocessingId">ReprocessingId</h2>
<!-- backwards compatibility -->
<a id="schemareprocessingid"></a>
<a id="schema_ReprocessingId"></a>
<a id="tocSreprocessingid"></a>
<a id="tocsreprocessingid"></a>

```json
"string"
```

<h2 id="tocS_CancelPipelineReprocessingRequest">CancelPipelineReprocessingRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelpipelinereprocessingrequest"></a>
<a id="schema_CancelPipelineReprocessingRequest"></a>
<a id="tocScancelpipelinereprocessingrequest"></a>
<a id="tocscancelpipelinereprocessingrequest"></a>

```json
{}
```

<h2 id="tocS_ChannelStorage">ChannelStorage</h2>
<!-- backwards compatibility -->
<a id="schemachannelstorage"></a>
<a id="schema_ChannelStorage"></a>
<a id="tocSchannelstorage"></a>
<a id="tocschannelstorage"></a>

```json
{
  "serviceManagedS3": {},
  "customerManagedS3": {
    "bucket": {},
    "keyPrefix": {},
    "roleArn": {}
  }
}
```

Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceManagedS3|object|false|none|none|
|customerManagedS3|object|false|none|none|

<h2 id="tocS_ChannelArn">ChannelArn</h2>
<!-- backwards compatibility -->
<a id="schemachannelarn"></a>
<a id="schema_ChannelArn"></a>
<a id="tocSchannelarn"></a>
<a id="tocschannelarn"></a>

```json
"string"
```

<h2 id="tocS_ChannelStatus">ChannelStatus</h2>
<!-- backwards compatibility -->
<a id="schemachannelstatus"></a>
<a id="schema_ChannelStatus"></a>
<a id="tocSchannelstatus"></a>
<a id="tocschannelstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_RetentionPeriod">RetentionPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaretentionperiod"></a>
<a id="schema_RetentionPeriod"></a>
<a id="tocSretentionperiod"></a>
<a id="tocsretentionperiod"></a>

```json
{
  "unlimited": {},
  "numberOfDays": {}
}
```

How long, in days, message data is kept.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unlimited|object|false|none|none|
|numberOfDays|object|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "name": {},
  "storage": {
    "serviceManagedS3": {},
    "customerManagedS3": {
      "bucket": {},
      "keyPrefix": {},
      "roleArn": {}
    }
  },
  "arn": {},
  "status": {},
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  },
  "creationTime": {},
  "lastUpdateTime": {},
  "lastMessageArrivalTime": {}
}
```

A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|storage|object|false|none|none|
|arn|object|false|none|none|
|status|object|false|none|none|
|retentionPeriod|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|lastMessageArrivalTime|object|false|none|none|

<h2 id="tocS_ChannelMessages">ChannelMessages</h2>
<!-- backwards compatibility -->
<a id="schemachannelmessages"></a>
<a id="schema_ChannelMessages"></a>
<a id="tocSchannelmessages"></a>
<a id="tocschannelmessages"></a>

```json
{
  "s3Paths": {}
}
```

Specifies one or more sets of channel messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Paths|object|false|none|none|

<h2 id="tocS_EstimatedResourceSize">EstimatedResourceSize</h2>
<!-- backwards compatibility -->
<a id="schemaestimatedresourcesize"></a>
<a id="schema_EstimatedResourceSize"></a>
<a id="tocSestimatedresourcesize"></a>
<a id="tocsestimatedresourcesize"></a>

```json
{
  "estimatedSizeInBytes": {},
  "estimatedOn": {}
}
```

The estimated size of the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimatedSizeInBytes|object|false|none|none|
|estimatedOn|object|false|none|none|

<h2 id="tocS_ChannelStatistics">ChannelStatistics</h2>
<!-- backwards compatibility -->
<a id="schemachannelstatistics"></a>
<a id="schema_ChannelStatistics"></a>
<a id="tocSchannelstatistics"></a>
<a id="tocschannelstatistics"></a>

```json
{
  "size": {
    "estimatedSizeInBytes": {},
    "estimatedOn": {}
  }
}
```

Statistics information about the channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|object|false|none|none|

<h2 id="tocS_ServiceManagedChannelS3StorageSummary">ServiceManagedChannelS3StorageSummary</h2>
<!-- backwards compatibility -->
<a id="schemaservicemanagedchannels3storagesummary"></a>
<a id="schema_ServiceManagedChannelS3StorageSummary"></a>
<a id="tocSservicemanagedchannels3storagesummary"></a>
<a id="tocsservicemanagedchannels3storagesummary"></a>

```json
{}
```

Used to store channel data in an S3 bucket managed by IoT Analytics.

<h2 id="tocS_CustomerManagedChannelS3StorageSummary">CustomerManagedChannelS3StorageSummary</h2>
<!-- backwards compatibility -->
<a id="schemacustomermanagedchannels3storagesummary"></a>
<a id="schema_CustomerManagedChannelS3StorageSummary"></a>
<a id="tocScustomermanagedchannels3storagesummary"></a>
<a id="tocscustomermanagedchannels3storagesummary"></a>

```json
{
  "bucket": {},
  "keyPrefix": {},
  "roleArn": {}
}
```

Used to store channel data in an S3 bucket that you manage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|false|none|none|
|keyPrefix|object|false|none|none|
|roleArn|object|false|none|none|

<h2 id="tocS_ChannelStorageSummary">ChannelStorageSummary</h2>
<!-- backwards compatibility -->
<a id="schemachannelstoragesummary"></a>
<a id="schema_ChannelStorageSummary"></a>
<a id="tocSchannelstoragesummary"></a>
<a id="tocschannelstoragesummary"></a>

```json
{
  "serviceManagedS3": {},
  "customerManagedS3": {
    "bucket": {},
    "keyPrefix": {},
    "roleArn": {}
  }
}
```

Where channel data is stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceManagedS3|object|false|none|none|
|customerManagedS3|object|false|none|none|

<h2 id="tocS_ChannelSummary">ChannelSummary</h2>
<!-- backwards compatibility -->
<a id="schemachannelsummary"></a>
<a id="schema_ChannelSummary"></a>
<a id="tocSchannelsummary"></a>
<a id="tocschannelsummary"></a>

```json
{
  "channelName": {},
  "channelStorage": {
    "serviceManagedS3": {},
    "customerManagedS3": {
      "bucket": {},
      "keyPrefix": {},
      "roleArn": {}
    }
  },
  "status": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "lastMessageArrivalTime": {}
}
```

A summary of information about a channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelName|object|false|none|none|
|channelStorage|object|false|none|none|
|status|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|lastMessageArrivalTime|object|false|none|none|

<h2 id="tocS_ChannelSummaries">ChannelSummaries</h2>
<!-- backwards compatibility -->
<a id="schemachannelsummaries"></a>
<a id="schema_ChannelSummaries"></a>
<a id="tocSchannelsummaries"></a>
<a id="tocschannelsummaries"></a>

```json
[
  {
    "channelName": {},
    "channelStorage": {
      "serviceManagedS3": {},
      "customerManagedS3": {
        "bucket": {},
        "keyPrefix": {},
        "roleArn": {}
      }
    },
    "status": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "lastMessageArrivalTime": {}
  }
]
```

<h2 id="tocS_ColumnName">ColumnName</h2>
<!-- backwards compatibility -->
<a id="schemacolumnname"></a>
<a id="schema_ColumnName"></a>
<a id="tocScolumnname"></a>
<a id="tocscolumnname"></a>

```json
"string"
```

<h2 id="tocS_ColumnDataType">ColumnDataType</h2>
<!-- backwards compatibility -->
<a id="schemacolumndatatype"></a>
<a id="schema_ColumnDataType"></a>
<a id="tocScolumndatatype"></a>
<a id="tocscolumndatatype"></a>

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
  "name": {},
  "type": {}
}
```

Contains information about a column that stores your data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|type|object|true|none|none|

<h2 id="tocS_Columns">Columns</h2>
<!-- backwards compatibility -->
<a id="schemacolumns"></a>
<a id="schema_Columns"></a>
<a id="tocScolumns"></a>
<a id="tocscolumns"></a>

```json
[
  {
    "name": {},
    "type": {}
  }
]
```

<h2 id="tocS_ComputeType">ComputeType</h2>
<!-- backwards compatibility -->
<a id="schemacomputetype"></a>
<a id="schema_ComputeType"></a>
<a id="tocScomputetype"></a>
<a id="tocscomputetype"></a>

```json
"ACU_1"
```

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
"string"
```

<h2 id="tocS_ResourceConfiguration">ResourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaresourceconfiguration"></a>
<a id="schema_ResourceConfiguration"></a>
<a id="tocSresourceconfiguration"></a>
<a id="tocsresourceconfiguration"></a>

```json
{
  "computeType": {},
  "volumeSizeInGB": {}
}
```

The configuration of the resource used to execute the <code>containerAction</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computeType|object|true|none|none|
|volumeSizeInGB|object|true|none|none|

<h2 id="tocS_Variables">Variables</h2>
<!-- backwards compatibility -->
<a id="schemavariables"></a>
<a id="schema_Variables"></a>
<a id="tocSvariables"></a>
<a id="tocsvariables"></a>

```json
[
  {
    "name": {},
    "stringValue": {},
    "doubleValue": {},
    "datasetContentVersionValue": {
      "datasetName": {}
    },
    "outputFileUriValue": {
      "fileName": {}
    }
  }
]
```

<h2 id="tocS_ContainerDatasetAction">ContainerDatasetAction</h2>
<!-- backwards compatibility -->
<a id="schemacontainerdatasetaction"></a>
<a id="schema_ContainerDatasetAction"></a>
<a id="tocScontainerdatasetaction"></a>
<a id="tocscontainerdatasetaction"></a>

```json
{
  "image": {},
  "executionRoleArn": {},
  "resourceConfiguration": {
    "computeType": {},
    "volumeSizeInGB": {}
  },
  "variables": {}
}
```

Information required to run the <code>containerAction</code> to produce dataset contents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|object|true|none|none|
|executionRoleArn|object|true|none|none|
|resourceConfiguration|object|true|none|none|
|variables|object|false|none|none|

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_CreateChannelRequest">CreateChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelrequest"></a>
<a id="schema_CreateChannelRequest"></a>
<a id="tocScreatechannelrequest"></a>
<a id="tocscreatechannelrequest"></a>

```json
{
  "channelName": {},
  "channelStorage": {
    "serviceManagedS3": {},
    "customerManagedS3": {
      "bucket": {},
      "keyPrefix": {},
      "roleArn": {}
    }
  },
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelName|object|true|none|none|
|channelStorage|object|false|none|none|
|retentionPeriod|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DatasetName">DatasetName</h2>
<!-- backwards compatibility -->
<a id="schemadatasetname"></a>
<a id="schema_DatasetName"></a>
<a id="tocSdatasetname"></a>
<a id="tocsdatasetname"></a>

```json
"string"
```

<h2 id="tocS_DatasetContentVersion">DatasetContentVersion</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcontentversion"></a>
<a id="schema_DatasetContentVersion"></a>
<a id="tocSdatasetcontentversion"></a>
<a id="tocsdatasetcontentversion"></a>

```json
"strings"
```

<h2 id="tocS_CreateDatasetContentRequest">CreateDatasetContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetcontentrequest"></a>
<a id="schema_CreateDatasetContentRequest"></a>
<a id="tocScreatedatasetcontentrequest"></a>
<a id="tocscreatedatasetcontentrequest"></a>

```json
{
  "versionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versionId|object|false|none|none|

<h2 id="tocS_DatasetActions">DatasetActions</h2>
<!-- backwards compatibility -->
<a id="schemadatasetactions"></a>
<a id="schema_DatasetActions"></a>
<a id="tocSdatasetactions"></a>
<a id="tocsdatasetactions"></a>

```json
[
  {
    "actionName": {},
    "queryAction": {
      "sqlQuery": {},
      "filters": {}
    },
    "containerAction": {
      "image": {},
      "executionRoleArn": {},
      "resourceConfiguration": {
        "computeType": {},
        "volumeSizeInGB": {}
      },
      "variables": {}
    }
  }
]
```

<h2 id="tocS_DatasetTriggers">DatasetTriggers</h2>
<!-- backwards compatibility -->
<a id="schemadatasettriggers"></a>
<a id="schema_DatasetTriggers"></a>
<a id="tocSdatasettriggers"></a>
<a id="tocsdatasettriggers"></a>

```json
[
  {
    "schedule": {
      "expression": {}
    },
    "dataset": {
      "name": {}
    }
  }
]
```

<h2 id="tocS_DatasetContentDeliveryRules">DatasetContentDeliveryRules</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcontentdeliveryrules"></a>
<a id="schema_DatasetContentDeliveryRules"></a>
<a id="tocSdatasetcontentdeliveryrules"></a>
<a id="tocsdatasetcontentdeliveryrules"></a>

```json
[
  {
    "entryName": {},
    "destination": {
      "iotEventsDestinationConfiguration": {
        "inputName": {},
        "roleArn": {}
      },
      "s3DestinationConfiguration": {
        "bucket": {},
        "key": {},
        "glueConfiguration": {
          "tableName": {},
          "databaseName": {}
        },
        "roleArn": {}
      }
    }
  }
]
```

<h2 id="tocS_VersioningConfiguration">VersioningConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaversioningconfiguration"></a>
<a id="schema_VersioningConfiguration"></a>
<a id="tocSversioningconfiguration"></a>
<a id="tocsversioningconfiguration"></a>

```json
{
  "unlimited": {},
  "maxVersions": {}
}
```

Information about the versioning of dataset contents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unlimited|object|false|none|none|
|maxVersions|object|false|none|none|

<h2 id="tocS_LateDataRules">LateDataRules</h2>
<!-- backwards compatibility -->
<a id="schemalatedatarules"></a>
<a id="schema_LateDataRules"></a>
<a id="tocSlatedatarules"></a>
<a id="tocslatedatarules"></a>

```json
[
  {
    "ruleName": {},
    "ruleConfiguration": {
      "deltaTimeSessionWindowConfiguration": {
        "timeoutInMinutes": {}
      }
    }
  }
]
```

<h2 id="tocS_CreateDatasetRequest">CreateDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetrequest"></a>
<a id="schema_CreateDatasetRequest"></a>
<a id="tocScreatedatasetrequest"></a>
<a id="tocscreatedatasetrequest"></a>

```json
{
  "datasetName": {},
  "actions": {},
  "triggers": {},
  "contentDeliveryRules": {},
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  },
  "versioningConfiguration": {
    "unlimited": {},
    "maxVersions": {}
  },
  "tags": {},
  "lateDataRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetName|object|true|none|none|
|actions|object|true|none|none|
|triggers|object|false|none|none|
|contentDeliveryRules|object|false|none|none|
|retentionPeriod|object|false|none|none|
|versioningConfiguration|object|false|none|none|
|tags|object|false|none|none|
|lateDataRules|object|false|none|none|

<h2 id="tocS_DatasetArn">DatasetArn</h2>
<!-- backwards compatibility -->
<a id="schemadatasetarn"></a>
<a id="schema_DatasetArn"></a>
<a id="tocSdatasetarn"></a>
<a id="tocsdatasetarn"></a>

```json
"string"
```

<h2 id="tocS_DatastoreName">DatastoreName</h2>
<!-- backwards compatibility -->
<a id="schemadatastorename"></a>
<a id="schema_DatastoreName"></a>
<a id="tocSdatastorename"></a>
<a id="tocsdatastorename"></a>

```json
"string"
```

<h2 id="tocS_DatastoreStorage">DatastoreStorage</h2>
<!-- backwards compatibility -->
<a id="schemadatastorestorage"></a>
<a id="schema_DatastoreStorage"></a>
<a id="tocSdatastorestorage"></a>
<a id="tocsdatastorestorage"></a>

```json
{
  "serviceManagedS3": {},
  "customerManagedS3": {
    "bucket": {},
    "keyPrefix": {},
    "roleArn": {}
  },
  "iotSiteWiseMultiLayerStorage": {
    "customerManagedS3Storage": {
      "bucket": {},
      "keyPrefix": {}
    }
  }
}
```

Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceManagedS3|object|false|none|none|
|customerManagedS3|object|false|none|none|
|iotSiteWiseMultiLayerStorage|object|false|none|none|

<h2 id="tocS_FileFormatConfiguration">FileFormatConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafileformatconfiguration"></a>
<a id="schema_FileFormatConfiguration"></a>
<a id="tocSfileformatconfiguration"></a>
<a id="tocsfileformatconfiguration"></a>

```json
{
  "jsonConfiguration": {},
  "parquetConfiguration": {
    "schemaDefinition": {
      "columns": {}
    }
  }
}
```

<p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jsonConfiguration|object|false|none|none|
|parquetConfiguration|object|false|none|none|

<h2 id="tocS_DatastorePartitions">DatastorePartitions</h2>
<!-- backwards compatibility -->
<a id="schemadatastorepartitions"></a>
<a id="schema_DatastorePartitions"></a>
<a id="tocSdatastorepartitions"></a>
<a id="tocsdatastorepartitions"></a>

```json
{
  "partitions": {}
}
```

 Contains information about the partition dimensions in a data store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partitions|object|false|none|none|

<h2 id="tocS_CreateDatastoreRequest">CreateDatastoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatastorerequest"></a>
<a id="schema_CreateDatastoreRequest"></a>
<a id="tocScreatedatastorerequest"></a>
<a id="tocscreatedatastorerequest"></a>

```json
{
  "datastoreName": {},
  "datastoreStorage": {
    "serviceManagedS3": {},
    "customerManagedS3": {
      "bucket": {},
      "keyPrefix": {},
      "roleArn": {}
    },
    "iotSiteWiseMultiLayerStorage": {
      "customerManagedS3Storage": {
        "bucket": {},
        "keyPrefix": {}
      }
    }
  },
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  },
  "tags": {},
  "fileFormatConfiguration": {
    "jsonConfiguration": {},
    "parquetConfiguration": {
      "schemaDefinition": {
        "columns": {}
      }
    }
  },
  "datastorePartitions": {
    "partitions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datastoreName|object|true|none|none|
|datastoreStorage|object|false|none|none|
|retentionPeriod|object|false|none|none|
|tags|object|false|none|none|
|fileFormatConfiguration|object|false|none|none|
|datastorePartitions|object|false|none|none|

<h2 id="tocS_DatastoreArn">DatastoreArn</h2>
<!-- backwards compatibility -->
<a id="schemadatastorearn"></a>
<a id="schema_DatastoreArn"></a>
<a id="tocSdatastorearn"></a>
<a id="tocsdatastorearn"></a>

```json
"string"
```

<h2 id="tocS_PipelineActivities">PipelineActivities</h2>
<!-- backwards compatibility -->
<a id="schemapipelineactivities"></a>
<a id="schema_PipelineActivities"></a>
<a id="tocSpipelineactivities"></a>
<a id="tocspipelineactivities"></a>

```json
[
  {
    "channel": {
      "name": {},
      "channelName": {},
      "next": {}
    },
    "lambda": {
      "name": {},
      "lambdaName": {},
      "batchSize": {},
      "next": {}
    },
    "datastore": {
      "name": {},
      "datastoreName": {}
    },
    "addAttributes": {
      "name": {},
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "next": {}
    },
    "removeAttributes": {
      "name": {},
      "attributes": {},
      "next": {}
    },
    "selectAttributes": {
      "name": {},
      "attributes": {},
      "next": {}
    },
    "filter": {
      "name": {},
      "filter": {},
      "next": {}
    },
    "math": {
      "name": {},
      "attribute": {},
      "math": {},
      "next": {}
    },
    "deviceRegistryEnrich": {
      "name": {},
      "attribute": {},
      "thingName": {},
      "roleArn": {},
      "next": {}
    },
    "deviceShadowEnrich": {
      "name": {},
      "attribute": {},
      "thingName": {},
      "roleArn": {},
      "next": {}
    }
  }
]
```

<h2 id="tocS_CreatePipelineRequest">CreatePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepipelinerequest"></a>
<a id="schema_CreatePipelineRequest"></a>
<a id="tocScreatepipelinerequest"></a>
<a id="tocscreatepipelinerequest"></a>

```json
{
  "pipelineName": {},
  "pipelineActivities": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|true|none|none|
|pipelineActivities|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_PipelineArn">PipelineArn</h2>
<!-- backwards compatibility -->
<a id="schemapipelinearn"></a>
<a id="schema_PipelineArn"></a>
<a id="tocSpipelinearn"></a>
<a id="tocspipelinearn"></a>

```json
"string"
```

<h2 id="tocS_S3KeyPrefix">S3KeyPrefix</h2>
<!-- backwards compatibility -->
<a id="schemas3keyprefix"></a>
<a id="schema_S3KeyPrefix"></a>
<a id="tocSs3keyprefix"></a>
<a id="tocss3keyprefix"></a>

```json
"string"
```

<h2 id="tocS_CustomerManagedDatastoreS3StorageSummary">CustomerManagedDatastoreS3StorageSummary</h2>
<!-- backwards compatibility -->
<a id="schemacustomermanageddatastores3storagesummary"></a>
<a id="schema_CustomerManagedDatastoreS3StorageSummary"></a>
<a id="tocScustomermanageddatastores3storagesummary"></a>
<a id="tocscustomermanageddatastores3storagesummary"></a>

```json
{
  "bucket": {},
  "keyPrefix": {},
  "roleArn": {}
}
```

Contains information about the data store that you manage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|false|none|none|
|keyPrefix|object|false|none|none|
|roleArn|object|false|none|none|

<h2 id="tocS_DatasetStatus">DatasetStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatasetstatus"></a>
<a id="schema_DatasetStatus"></a>
<a id="tocSdatasetstatus"></a>
<a id="tocsdatasetstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "name": {},
  "arn": {},
  "actions": {},
  "triggers": {},
  "contentDeliveryRules": {},
  "status": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  },
  "versioningConfiguration": {
    "unlimited": {},
    "maxVersions": {}
  },
  "lateDataRules": {}
}
```

Information about a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|actions|object|false|none|none|
|triggers|object|false|none|none|
|contentDeliveryRules|object|false|none|none|
|status|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|retentionPeriod|object|false|none|none|
|versioningConfiguration|object|false|none|none|
|lateDataRules|object|false|none|none|

<h2 id="tocS_DatasetActionName">DatasetActionName</h2>
<!-- backwards compatibility -->
<a id="schemadatasetactionname"></a>
<a id="schema_DatasetActionName"></a>
<a id="tocSdatasetactionname"></a>
<a id="tocsdatasetactionname"></a>

```json
"string"
```

<h2 id="tocS_SqlQueryDatasetAction">SqlQueryDatasetAction</h2>
<!-- backwards compatibility -->
<a id="schemasqlquerydatasetaction"></a>
<a id="schema_SqlQueryDatasetAction"></a>
<a id="tocSsqlquerydatasetaction"></a>
<a id="tocssqlquerydatasetaction"></a>

```json
{
  "sqlQuery": {},
  "filters": {}
}
```

The SQL query to modify the message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sqlQuery|object|true|none|none|
|filters|object|false|none|none|

<h2 id="tocS_DatasetActionSummary">DatasetActionSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatasetactionsummary"></a>
<a id="schema_DatasetActionSummary"></a>
<a id="tocSdatasetactionsummary"></a>
<a id="tocsdatasetactionsummary"></a>

```json
{
  "actionName": {},
  "actionType": {}
}
```

Information about the action that automatically creates the dataset's contents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionName|object|false|none|none|
|actionType|object|false|none|none|

<h2 id="tocS_DatasetActionSummaries">DatasetActionSummaries</h2>
<!-- backwards compatibility -->
<a id="schemadatasetactionsummaries"></a>
<a id="schema_DatasetActionSummaries"></a>
<a id="tocSdatasetactionsummaries"></a>
<a id="tocsdatasetactionsummaries"></a>

```json
[
  {
    "actionName": {},
    "actionType": {}
  }
]
```

<h2 id="tocS_DatasetActionType">DatasetActionType</h2>
<!-- backwards compatibility -->
<a id="schemadatasetactiontype"></a>
<a id="schema_DatasetActionType"></a>
<a id="tocSdatasetactiontype"></a>
<a id="tocsdatasetactiontype"></a>

```json
"QUERY"
```

<h2 id="tocS_IotEventsDestinationConfiguration">IotEventsDestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaioteventsdestinationconfiguration"></a>
<a id="schema_IotEventsDestinationConfiguration"></a>
<a id="tocSioteventsdestinationconfiguration"></a>
<a id="tocsioteventsdestinationconfiguration"></a>

```json
{
  "inputName": {},
  "roleArn": {}
}
```

Configuration information for delivery of dataset contents to IoT Events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputName|object|true|none|none|
|roleArn|object|true|none|none|

<h2 id="tocS_S3DestinationConfiguration">S3DestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3destinationconfiguration"></a>
<a id="schema_S3DestinationConfiguration"></a>
<a id="tocSs3destinationconfiguration"></a>
<a id="tocss3destinationconfiguration"></a>

```json
{
  "bucket": {},
  "key": {},
  "glueConfiguration": {
    "tableName": {},
    "databaseName": {}
  },
  "roleArn": {}
}
```

Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|true|none|none|
|key|object|true|none|none|
|glueConfiguration|object|false|none|none|
|roleArn|object|true|none|none|

<h2 id="tocS_DatasetContentDeliveryDestination">DatasetContentDeliveryDestination</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcontentdeliverydestination"></a>
<a id="schema_DatasetContentDeliveryDestination"></a>
<a id="tocSdatasetcontentdeliverydestination"></a>
<a id="tocsdatasetcontentdeliverydestination"></a>

```json
{
  "iotEventsDestinationConfiguration": {
    "inputName": {},
    "roleArn": {}
  },
  "s3DestinationConfiguration": {
    "bucket": {},
    "key": {},
    "glueConfiguration": {
      "tableName": {},
      "databaseName": {}
    },
    "roleArn": {}
  }
}
```

The destination to which dataset contents are delivered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iotEventsDestinationConfiguration|object|false|none|none|
|s3DestinationConfiguration|object|false|none|none|

<h2 id="tocS_EntryName">EntryName</h2>
<!-- backwards compatibility -->
<a id="schemaentryname"></a>
<a id="schema_EntryName"></a>
<a id="tocSentryname"></a>
<a id="tocsentryname"></a>

```json
"string"
```

<h2 id="tocS_DatasetContentState">DatasetContentState</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcontentstate"></a>
<a id="schema_DatasetContentState"></a>
<a id="tocSdatasetcontentstate"></a>
<a id="tocsdatasetcontentstate"></a>

```json
"CREATING"
```

<h2 id="tocS_Reason">Reason</h2>
<!-- backwards compatibility -->
<a id="schemareason"></a>
<a id="schema_Reason"></a>
<a id="tocSreason"></a>
<a id="tocsreason"></a>

```json
"string"
```

<h2 id="tocS_DatasetContentStatus">DatasetContentStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcontentstatus"></a>
<a id="schema_DatasetContentStatus"></a>
<a id="tocSdatasetcontentstatus"></a>
<a id="tocsdatasetcontentstatus"></a>

```json
{
  "state": {},
  "reason": {}
}
```

The state of the dataset contents and the reason they are in this state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|false|none|none|
|reason|object|false|none|none|

<h2 id="tocS_DatasetContentSummary">DatasetContentSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcontentsummary"></a>
<a id="schema_DatasetContentSummary"></a>
<a id="tocSdatasetcontentsummary"></a>
<a id="tocsdatasetcontentsummary"></a>

```json
{
  "version": {},
  "status": {
    "state": {},
    "reason": {}
  },
  "creationTime": {},
  "scheduleTime": {},
  "completionTime": {}
}
```

Summary information about dataset contents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|object|false|none|none|
|status|object|false|none|none|
|creationTime|object|false|none|none|
|scheduleTime|object|false|none|none|
|completionTime|object|false|none|none|

<h2 id="tocS_DatasetContentSummaries">DatasetContentSummaries</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcontentsummaries"></a>
<a id="schema_DatasetContentSummaries"></a>
<a id="tocSdatasetcontentsummaries"></a>
<a id="tocsdatasetcontentsummaries"></a>

```json
[
  {
    "version": {},
    "status": {
      "state": {},
      "reason": {}
    },
    "creationTime": {},
    "scheduleTime": {},
    "completionTime": {}
  }
]
```

<h2 id="tocS_DatasetContentVersionValue">DatasetContentVersionValue</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcontentversionvalue"></a>
<a id="schema_DatasetContentVersionValue"></a>
<a id="tocSdatasetcontentversionvalue"></a>
<a id="tocsdatasetcontentversionvalue"></a>

```json
{
  "datasetName": {}
}
```

The dataset whose latest contents are used as input to the notebook or application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetName|object|true|none|none|

<h2 id="tocS_DatasetEntry">DatasetEntry</h2>
<!-- backwards compatibility -->
<a id="schemadatasetentry"></a>
<a id="schema_DatasetEntry"></a>
<a id="tocSdatasetentry"></a>
<a id="tocsdatasetentry"></a>

```json
{
  "entryName": {},
  "dataURI": {}
}
```

The reference to a dataset entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryName|object|false|none|none|
|dataURI|object|false|none|none|

<h2 id="tocS_DatasetEntries">DatasetEntries</h2>
<!-- backwards compatibility -->
<a id="schemadatasetentries"></a>
<a id="schema_DatasetEntries"></a>
<a id="tocSdatasetentries"></a>
<a id="tocsdatasetentries"></a>

```json
[
  {
    "entryName": {},
    "dataURI": {}
  }
]
```

<h2 id="tocS_PresignedURI">PresignedURI</h2>
<!-- backwards compatibility -->
<a id="schemapresigneduri"></a>
<a id="schema_PresignedURI"></a>
<a id="tocSpresigneduri"></a>
<a id="tocspresigneduri"></a>

```json
"string"
```

<h2 id="tocS_DatasetSummary">DatasetSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatasetsummary"></a>
<a id="schema_DatasetSummary"></a>
<a id="tocSdatasetsummary"></a>
<a id="tocsdatasetsummary"></a>

```json
{
  "datasetName": {},
  "status": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "triggers": {},
  "actions": {}
}
```

A summary of information about a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetName|object|false|none|none|
|status|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|triggers|object|false|none|none|
|actions|object|false|none|none|

<h2 id="tocS_DatasetSummaries">DatasetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemadatasetsummaries"></a>
<a id="schema_DatasetSummaries"></a>
<a id="tocSdatasetsummaries"></a>
<a id="tocsdatasetsummaries"></a>

```json
[
  {
    "datasetName": {},
    "status": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "triggers": {},
    "actions": {}
  }
]
```

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "expression": {}
}
```

The schedule for when to trigger an update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expression|object|false|none|none|

<h2 id="tocS_TriggeringDataset">TriggeringDataset</h2>
<!-- backwards compatibility -->
<a id="schematriggeringdataset"></a>
<a id="schema_TriggeringDataset"></a>
<a id="tocStriggeringdataset"></a>
<a id="tocstriggeringdataset"></a>

```json
{
  "name": {}
}
```

Information about the dataset whose content generation triggers the new dataset content generation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DatastoreStatus">DatastoreStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatastorestatus"></a>
<a id="schema_DatastoreStatus"></a>
<a id="tocSdatastorestatus"></a>
<a id="tocsdatastorestatus"></a>

```json
"CREATING"
```

<h2 id="tocS_Datastore">Datastore</h2>
<!-- backwards compatibility -->
<a id="schemadatastore"></a>
<a id="schema_Datastore"></a>
<a id="tocSdatastore"></a>
<a id="tocsdatastore"></a>

```json
{
  "name": {},
  "storage": {
    "serviceManagedS3": {},
    "customerManagedS3": {
      "bucket": {},
      "keyPrefix": {},
      "roleArn": {}
    },
    "iotSiteWiseMultiLayerStorage": {
      "customerManagedS3Storage": {
        "bucket": {},
        "keyPrefix": {}
      }
    }
  },
  "arn": {},
  "status": {},
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  },
  "creationTime": {},
  "lastUpdateTime": {},
  "lastMessageArrivalTime": {},
  "fileFormatConfiguration": {
    "jsonConfiguration": {},
    "parquetConfiguration": {
      "schemaDefinition": {
        "columns": {}
      }
    }
  },
  "datastorePartitions": {
    "partitions": {}
  }
}
```

Information about a data store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|storage|object|false|none|none|
|arn|object|false|none|none|
|status|object|false|none|none|
|retentionPeriod|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|lastMessageArrivalTime|object|false|none|none|
|fileFormatConfiguration|object|false|none|none|
|datastorePartitions|object|false|none|none|

<h2 id="tocS_IotSiteWiseCustomerManagedDatastoreS3Storage">IotSiteWiseCustomerManagedDatastoreS3Storage</h2>
<!-- backwards compatibility -->
<a id="schemaiotsitewisecustomermanageddatastores3storage"></a>
<a id="schema_IotSiteWiseCustomerManagedDatastoreS3Storage"></a>
<a id="tocSiotsitewisecustomermanageddatastores3storage"></a>
<a id="tocsiotsitewisecustomermanageddatastores3storage"></a>

```json
{
  "bucket": {},
  "keyPrefix": {}
}
```

 Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|true|none|none|
|keyPrefix|object|false|none|none|

<h2 id="tocS_IotSiteWiseCustomerManagedDatastoreS3StorageSummary">IotSiteWiseCustomerManagedDatastoreS3StorageSummary</h2>
<!-- backwards compatibility -->
<a id="schemaiotsitewisecustomermanageddatastores3storagesummary"></a>
<a id="schema_IotSiteWiseCustomerManagedDatastoreS3StorageSummary"></a>
<a id="tocSiotsitewisecustomermanageddatastores3storagesummary"></a>
<a id="tocsiotsitewisecustomermanageddatastores3storagesummary"></a>

```json
{
  "bucket": {},
  "keyPrefix": {}
}
```

 Contains information about the data store that you manage, which stores data used by IoT SiteWise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|false|none|none|
|keyPrefix|object|false|none|none|

<h2 id="tocS_DatastoreIotSiteWiseMultiLayerStorageSummary">DatastoreIotSiteWiseMultiLayerStorageSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatastoreiotsitewisemultilayerstoragesummary"></a>
<a id="schema_DatastoreIotSiteWiseMultiLayerStorageSummary"></a>
<a id="tocSdatastoreiotsitewisemultilayerstoragesummary"></a>
<a id="tocsdatastoreiotsitewisemultilayerstoragesummary"></a>

```json
{
  "customerManagedS3Storage": {
    "bucket": {},
    "keyPrefix": {}
  }
}
```

 Contains information about the data store that you manage, which stores data used by IoT SiteWise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerManagedS3Storage|object|false|none|none|

<h2 id="tocS_Partition">Partition</h2>
<!-- backwards compatibility -->
<a id="schemapartition"></a>
<a id="schema_Partition"></a>
<a id="tocSpartition"></a>
<a id="tocspartition"></a>

```json
{
  "attributeName": {}
}
```

 A partition dimension defined by an attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeName|object|true|none|none|

<h2 id="tocS_TimestampPartition">TimestampPartition</h2>
<!-- backwards compatibility -->
<a id="schematimestamppartition"></a>
<a id="schema_TimestampPartition"></a>
<a id="tocStimestamppartition"></a>
<a id="tocstimestamppartition"></a>

```json
{
  "attributeName": {},
  "timestampFormat": {}
}
```

 A partition dimension defined by a timestamp attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeName|object|true|none|none|
|timestampFormat|object|false|none|none|

<h2 id="tocS_DatastorePartition">DatastorePartition</h2>
<!-- backwards compatibility -->
<a id="schemadatastorepartition"></a>
<a id="schema_DatastorePartition"></a>
<a id="tocSdatastorepartition"></a>
<a id="tocsdatastorepartition"></a>

```json
{
  "attributePartition": {
    "attributeName": {}
  },
  "timestampPartition": {
    "attributeName": {},
    "timestampFormat": {}
  }
}
```

 A single dimension to partition a data store. The dimension must be an <code>AttributePartition</code> or a <code>TimestampPartition</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributePartition|object|false|none|none|
|timestampPartition|object|false|none|none|

<h2 id="tocS_DatastoreStatistics">DatastoreStatistics</h2>
<!-- backwards compatibility -->
<a id="schemadatastorestatistics"></a>
<a id="schema_DatastoreStatistics"></a>
<a id="tocSdatastorestatistics"></a>
<a id="tocsdatastorestatistics"></a>

```json
{
  "size": {
    "estimatedSizeInBytes": {},
    "estimatedOn": {}
  }
}
```

Statistical information about the data store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|object|false|none|none|

<h2 id="tocS_ServiceManagedDatastoreS3StorageSummary">ServiceManagedDatastoreS3StorageSummary</h2>
<!-- backwards compatibility -->
<a id="schemaservicemanageddatastores3storagesummary"></a>
<a id="schema_ServiceManagedDatastoreS3StorageSummary"></a>
<a id="tocSservicemanageddatastores3storagesummary"></a>
<a id="tocsservicemanageddatastores3storagesummary"></a>

```json
{}
```

Contains information about the data store that is managed by IoT Analytics.

<h2 id="tocS_DatastoreStorageSummary">DatastoreStorageSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatastorestoragesummary"></a>
<a id="schema_DatastoreStorageSummary"></a>
<a id="tocSdatastorestoragesummary"></a>
<a id="tocsdatastorestoragesummary"></a>

```json
{
  "serviceManagedS3": {},
  "customerManagedS3": {
    "bucket": {},
    "keyPrefix": {},
    "roleArn": {}
  },
  "iotSiteWiseMultiLayerStorage": {
    "customerManagedS3Storage": {
      "bucket": {},
      "keyPrefix": {}
    }
  }
}
```

Contains information about your data store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceManagedS3|object|false|none|none|
|customerManagedS3|object|false|none|none|
|iotSiteWiseMultiLayerStorage|object|false|none|none|

<h2 id="tocS_DatastoreSummary">DatastoreSummary</h2>
<!-- backwards compatibility -->
<a id="schemadatastoresummary"></a>
<a id="schema_DatastoreSummary"></a>
<a id="tocSdatastoresummary"></a>
<a id="tocsdatastoresummary"></a>

```json
{
  "datastoreName": {},
  "datastoreStorage": {
    "serviceManagedS3": {},
    "customerManagedS3": {
      "bucket": {},
      "keyPrefix": {},
      "roleArn": {}
    },
    "iotSiteWiseMultiLayerStorage": {
      "customerManagedS3Storage": {
        "bucket": {},
        "keyPrefix": {}
      }
    }
  },
  "status": {},
  "creationTime": {},
  "lastUpdateTime": {},
  "lastMessageArrivalTime": {},
  "fileFormatType": {},
  "datastorePartitions": {
    "partitions": {}
  }
}
```

A summary of information about a data store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datastoreName|object|false|none|none|
|datastoreStorage|object|false|none|none|
|status|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|
|lastMessageArrivalTime|object|false|none|none|
|fileFormatType|object|false|none|none|
|datastorePartitions|object|false|none|none|

<h2 id="tocS_DatastoreSummaries">DatastoreSummaries</h2>
<!-- backwards compatibility -->
<a id="schemadatastoresummaries"></a>
<a id="schema_DatastoreSummaries"></a>
<a id="tocSdatastoresummaries"></a>
<a id="tocsdatastoresummaries"></a>

```json
[
  {
    "datastoreName": {},
    "datastoreStorage": {
      "serviceManagedS3": {},
      "customerManagedS3": {
        "bucket": {},
        "keyPrefix": {},
        "roleArn": {}
      },
      "iotSiteWiseMultiLayerStorage": {
        "customerManagedS3Storage": {
          "bucket": {},
          "keyPrefix": {}
        }
      }
    },
    "status": {},
    "creationTime": {},
    "lastUpdateTime": {},
    "lastMessageArrivalTime": {},
    "fileFormatType": {},
    "datastorePartitions": {
      "partitions": {}
    }
  }
]
```

<h2 id="tocS_FileFormatType">FileFormatType</h2>
<!-- backwards compatibility -->
<a id="schemafileformattype"></a>
<a id="schema_FileFormatType"></a>
<a id="tocSfileformattype"></a>
<a id="tocsfileformattype"></a>

```json
"JSON"
```

<h2 id="tocS_DeleteChannelRequest">DeleteChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelrequest"></a>
<a id="schema_DeleteChannelRequest"></a>
<a id="tocSdeletechannelrequest"></a>
<a id="tocsdeletechannelrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDatasetContentRequest">DeleteDatasetContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetcontentrequest"></a>
<a id="schema_DeleteDatasetContentRequest"></a>
<a id="tocSdeletedatasetcontentrequest"></a>
<a id="tocsdeletedatasetcontentrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDatasetRequest">DeleteDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetrequest"></a>
<a id="schema_DeleteDatasetRequest"></a>
<a id="tocSdeletedatasetrequest"></a>
<a id="tocsdeletedatasetrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDatastoreRequest">DeleteDatastoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatastorerequest"></a>
<a id="schema_DeleteDatastoreRequest"></a>
<a id="tocSdeletedatastorerequest"></a>
<a id="tocsdeletedatastorerequest"></a>

```json
{}
```

<h2 id="tocS_DeletePipelineRequest">DeletePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepipelinerequest"></a>
<a id="schema_DeletePipelineRequest"></a>
<a id="tocSdeletepipelinerequest"></a>
<a id="tocsdeletepipelinerequest"></a>

```json
{}
```

<h2 id="tocS_OffsetSeconds">OffsetSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaoffsetseconds"></a>
<a id="schema_OffsetSeconds"></a>
<a id="tocSoffsetseconds"></a>
<a id="tocsoffsetseconds"></a>

```json
0
```

<h2 id="tocS_TimeExpression">TimeExpression</h2>
<!-- backwards compatibility -->
<a id="schematimeexpression"></a>
<a id="schema_TimeExpression"></a>
<a id="tocStimeexpression"></a>
<a id="tocstimeexpression"></a>

```json
"string"
```

<h2 id="tocS_DeltaTime">DeltaTime</h2>
<!-- backwards compatibility -->
<a id="schemadeltatime"></a>
<a id="schema_DeltaTime"></a>
<a id="tocSdeltatime"></a>
<a id="tocsdeltatime"></a>

```json
{
  "offsetSeconds": {},
  "timeExpression": {}
}
```

Used to limit data to that which has arrived since the last execution of the action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offsetSeconds|object|true|none|none|
|timeExpression|object|true|none|none|

<h2 id="tocS_SessionTimeoutInMinutes">SessionTimeoutInMinutes</h2>
<!-- backwards compatibility -->
<a id="schemasessiontimeoutinminutes"></a>
<a id="schema_SessionTimeoutInMinutes"></a>
<a id="tocSsessiontimeoutinminutes"></a>
<a id="tocssessiontimeoutinminutes"></a>

```json
1
```

<h2 id="tocS_DeltaTimeSessionWindowConfiguration">DeltaTimeSessionWindowConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeltatimesessionwindowconfiguration"></a>
<a id="schema_DeltaTimeSessionWindowConfiguration"></a>
<a id="tocSdeltatimesessionwindowconfiguration"></a>
<a id="tocsdeltatimesessionwindowconfiguration"></a>

```json
{
  "timeoutInMinutes": {}
}
```

<p>A structure that contains the configuration information of a delta time session window.</p> <p> <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html"> <code>DeltaTime</code> </a> specifies a time interval. You can use <code>DeltaTime</code> to create dataset contents with data that has arrived in the data store since the last execution. For an example of <code>DeltaTime</code>, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/automate-create-dataset.html#automate-example6"> Creating a SQL dataset with a delta window (CLI)</a> in the <i>IoT Analytics User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeoutInMinutes|object|true|none|none|

<h2 id="tocS_IncludeStatisticsFlag">IncludeStatisticsFlag</h2>
<!-- backwards compatibility -->
<a id="schemaincludestatisticsflag"></a>
<a id="schema_IncludeStatisticsFlag"></a>
<a id="tocSincludestatisticsflag"></a>
<a id="tocsincludestatisticsflag"></a>

```json
true
```

<h2 id="tocS_DescribeChannelRequest">DescribeChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelrequest"></a>
<a id="schema_DescribeChannelRequest"></a>
<a id="tocSdescribechannelrequest"></a>
<a id="tocsdescribechannelrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeDatasetRequest">DescribeDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetrequest"></a>
<a id="schema_DescribeDatasetRequest"></a>
<a id="tocSdescribedatasetrequest"></a>
<a id="tocsdescribedatasetrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeDatastoreRequest">DescribeDatastoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatastorerequest"></a>
<a id="schema_DescribeDatastoreRequest"></a>
<a id="tocSdescribedatastorerequest"></a>
<a id="tocsdescribedatastorerequest"></a>

```json
{}
```

<h2 id="tocS_DescribeLoggingOptionsRequest">DescribeLoggingOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeloggingoptionsrequest"></a>
<a id="schema_DescribeLoggingOptionsRequest"></a>
<a id="tocSdescribeloggingoptionsrequest"></a>
<a id="tocsdescribeloggingoptionsrequest"></a>

```json
{}
```

<h2 id="tocS_LoggingOptions">LoggingOptions</h2>
<!-- backwards compatibility -->
<a id="schemaloggingoptions"></a>
<a id="schema_LoggingOptions"></a>
<a id="tocSloggingoptions"></a>
<a id="tocsloggingoptions"></a>

```json
{
  "roleArn": {},
  "level": {},
  "enabled": {}
}
```

Information about logging options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleArn|object|true|none|none|
|level|object|true|none|none|
|enabled|object|true|none|none|

<h2 id="tocS_DescribePipelineRequest">DescribePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepipelinerequest"></a>
<a id="schema_DescribePipelineRequest"></a>
<a id="tocSdescribepipelinerequest"></a>
<a id="tocsdescribepipelinerequest"></a>

```json
{}
```

<h2 id="tocS_Pipeline">Pipeline</h2>
<!-- backwards compatibility -->
<a id="schemapipeline"></a>
<a id="schema_Pipeline"></a>
<a id="tocSpipeline"></a>
<a id="tocspipeline"></a>

```json
{
  "name": {},
  "arn": {},
  "activities": {},
  "reprocessingSummaries": {},
  "creationTime": {},
  "lastUpdateTime": {}
}
```

Contains information about a pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|arn|object|false|none|none|
|activities|object|false|none|none|
|reprocessingSummaries|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|

<h2 id="tocS_DoubleValue">DoubleValue</h2>
<!-- backwards compatibility -->
<a id="schemadoublevalue"></a>
<a id="schema_DoubleValue"></a>
<a id="tocSdoublevalue"></a>
<a id="tocsdoublevalue"></a>

```json
0
```

<h2 id="tocS_EndTime">EndTime</h2>
<!-- backwards compatibility -->
<a id="schemaendtime"></a>
<a id="schema_EndTime"></a>
<a id="tocSendtime"></a>
<a id="tocsendtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_SizeInBytes">SizeInBytes</h2>
<!-- backwards compatibility -->
<a id="schemasizeinbytes"></a>
<a id="schema_SizeInBytes"></a>
<a id="tocSsizeinbytes"></a>
<a id="tocssizeinbytes"></a>

```json
0
```

<h2 id="tocS_FilterExpression">FilterExpression</h2>
<!-- backwards compatibility -->
<a id="schemafilterexpression"></a>
<a id="schema_FilterExpression"></a>
<a id="tocSfilterexpression"></a>
<a id="tocsfilterexpression"></a>

```json
"string"
```

<h2 id="tocS_GetDatasetContentRequest">GetDatasetContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdatasetcontentrequest"></a>
<a id="schema_GetDatasetContentRequest"></a>
<a id="tocSgetdatasetcontentrequest"></a>
<a id="tocsgetdatasetcontentrequest"></a>

```json
{}
```

<h2 id="tocS_GlueTableName">GlueTableName</h2>
<!-- backwards compatibility -->
<a id="schemagluetablename"></a>
<a id="schema_GlueTableName"></a>
<a id="tocSgluetablename"></a>
<a id="tocsgluetablename"></a>

```json
"string"
```

<h2 id="tocS_GlueDatabaseName">GlueDatabaseName</h2>
<!-- backwards compatibility -->
<a id="schemagluedatabasename"></a>
<a id="schema_GlueDatabaseName"></a>
<a id="tocSgluedatabasename"></a>
<a id="tocsgluedatabasename"></a>

```json
"string"
```

<h2 id="tocS_GlueConfiguration">GlueConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaglueconfiguration"></a>
<a id="schema_GlueConfiguration"></a>
<a id="tocSglueconfiguration"></a>
<a id="tocsglueconfiguration"></a>

```json
{
  "tableName": {},
  "databaseName": {}
}
```

Configuration information for coordination with Glue, a fully managed extract, transform and load (ETL) service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tableName|object|true|none|none|
|databaseName|object|true|none|none|

<h2 id="tocS_IotEventsInputName">IotEventsInputName</h2>
<!-- backwards compatibility -->
<a id="schemaioteventsinputname"></a>
<a id="schema_IotEventsInputName"></a>
<a id="tocSioteventsinputname"></a>
<a id="tocsioteventsinputname"></a>

```json
"string"
```

<h2 id="tocS_LambdaName">LambdaName</h2>
<!-- backwards compatibility -->
<a id="schemalambdaname"></a>
<a id="schema_LambdaName"></a>
<a id="tocSlambdaname"></a>
<a id="tocslambdaname"></a>

```json
"string"
```

<h2 id="tocS_LateDataRuleName">LateDataRuleName</h2>
<!-- backwards compatibility -->
<a id="schemalatedatarulename"></a>
<a id="schema_LateDataRuleName"></a>
<a id="tocSlatedatarulename"></a>
<a id="tocslatedatarulename"></a>

```json
"string"
```

<h2 id="tocS_LateDataRuleConfiguration">LateDataRuleConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalatedataruleconfiguration"></a>
<a id="schema_LateDataRuleConfiguration"></a>
<a id="tocSlatedataruleconfiguration"></a>
<a id="tocslatedataruleconfiguration"></a>

```json
{
  "deltaTimeSessionWindowConfiguration": {
    "timeoutInMinutes": {}
  }
}
```

The information needed to configure a delta time session window.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deltaTimeSessionWindowConfiguration|object|false|none|none|

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

<h2 id="tocS_ListChannelsRequest">ListChannelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsrequest"></a>
<a id="schema_ListChannelsRequest"></a>
<a id="tocSlistchannelsrequest"></a>
<a id="tocslistchannelsrequest"></a>

```json
{}
```

<h2 id="tocS_ListDatasetContentsRequest">ListDatasetContentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetcontentsrequest"></a>
<a id="schema_ListDatasetContentsRequest"></a>
<a id="tocSlistdatasetcontentsrequest"></a>
<a id="tocslistdatasetcontentsrequest"></a>

```json
{}
```

<h2 id="tocS_ListDatasetsRequest">ListDatasetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsrequest"></a>
<a id="schema_ListDatasetsRequest"></a>
<a id="tocSlistdatasetsrequest"></a>
<a id="tocslistdatasetsrequest"></a>

```json
{}
```

<h2 id="tocS_ListDatastoresRequest">ListDatastoresRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatastoresrequest"></a>
<a id="schema_ListDatastoresRequest"></a>
<a id="tocSlistdatastoresrequest"></a>
<a id="tocslistdatastoresrequest"></a>

```json
{}
```

<h2 id="tocS_ListPipelinesRequest">ListPipelinesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpipelinesrequest"></a>
<a id="schema_ListPipelinesRequest"></a>
<a id="tocSlistpipelinesrequest"></a>
<a id="tocslistpipelinesrequest"></a>

```json
{}
```

<h2 id="tocS_PipelineSummaries">PipelineSummaries</h2>
<!-- backwards compatibility -->
<a id="schemapipelinesummaries"></a>
<a id="schema_PipelineSummaries"></a>
<a id="tocSpipelinesummaries"></a>
<a id="tocspipelinesummaries"></a>

```json
[
  {
    "pipelineName": {},
    "reprocessingSummaries": {},
    "creationTime": {},
    "lastUpdateTime": {}
  }
]
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"stringstringstringst"
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

<h2 id="tocS_LogResult">LogResult</h2>
<!-- backwards compatibility -->
<a id="schemalogresult"></a>
<a id="schema_LogResult"></a>
<a id="tocSlogresult"></a>
<a id="tocslogresult"></a>

```json
"string"
```

<h2 id="tocS_MathExpression">MathExpression</h2>
<!-- backwards compatibility -->
<a id="schemamathexpression"></a>
<a id="schema_MathExpression"></a>
<a id="tocSmathexpression"></a>
<a id="tocsmathexpression"></a>

```json
"string"
```

<h2 id="tocS_MaxMessages">MaxMessages</h2>
<!-- backwards compatibility -->
<a id="schemamaxmessages"></a>
<a id="schema_MaxMessages"></a>
<a id="tocSmaxmessages"></a>
<a id="tocsmaxmessages"></a>

```json
1
```

<h2 id="tocS_MessagePayloads">MessagePayloads</h2>
<!-- backwards compatibility -->
<a id="schemamessagepayloads"></a>
<a id="schema_MessagePayloads"></a>
<a id="tocSmessagepayloads"></a>
<a id="tocsmessagepayloads"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OutputFileName">OutputFileName</h2>
<!-- backwards compatibility -->
<a id="schemaoutputfilename"></a>
<a id="schema_OutputFileName"></a>
<a id="tocSoutputfilename"></a>
<a id="tocsoutputfilename"></a>

```json
"string"
```

<h2 id="tocS_OutputFileUriValue">OutputFileUriValue</h2>
<!-- backwards compatibility -->
<a id="schemaoutputfileurivalue"></a>
<a id="schema_OutputFileUriValue"></a>
<a id="tocSoutputfileurivalue"></a>
<a id="tocsoutputfileurivalue"></a>

```json
{
  "fileName": {}
}
```

The value of the variable as a structure that specifies an output file URI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileName|object|true|none|none|

<h2 id="tocS_SchemaDefinition">SchemaDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaschemadefinition"></a>
<a id="schema_SchemaDefinition"></a>
<a id="tocSschemadefinition"></a>
<a id="tocsschemadefinition"></a>

```json
{
  "columns": {}
}
```

Information needed to define a schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|object|false|none|none|

<h2 id="tocS_PartitionAttributeName">PartitionAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemapartitionattributename"></a>
<a id="schema_PartitionAttributeName"></a>
<a id="tocSpartitionattributename"></a>
<a id="tocspartitionattributename"></a>

```json
"string"
```

<h2 id="tocS_ReprocessingSummaries">ReprocessingSummaries</h2>
<!-- backwards compatibility -->
<a id="schemareprocessingsummaries"></a>
<a id="schema_ReprocessingSummaries"></a>
<a id="tocSreprocessingsummaries"></a>
<a id="tocsreprocessingsummaries"></a>

```json
[
  {
    "id": {},
    "status": {},
    "creationTime": {}
  }
]
```

<h2 id="tocS_PipelineSummary">PipelineSummary</h2>
<!-- backwards compatibility -->
<a id="schemapipelinesummary"></a>
<a id="schema_PipelineSummary"></a>
<a id="tocSpipelinesummary"></a>
<a id="tocspipelinesummary"></a>

```json
{
  "pipelineName": {},
  "reprocessingSummaries": {},
  "creationTime": {},
  "lastUpdateTime": {}
}
```

A summary of information about a pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineName|object|false|none|none|
|reprocessingSummaries|object|false|none|none|
|creationTime|object|false|none|none|
|lastUpdateTime|object|false|none|none|

<h2 id="tocS_PutLoggingOptionsRequest">PutLoggingOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputloggingoptionsrequest"></a>
<a id="schema_PutLoggingOptionsRequest"></a>
<a id="tocSputloggingoptionsrequest"></a>
<a id="tocsputloggingoptionsrequest"></a>

```json
{
  "loggingOptions": {
    "roleArn": {},
    "level": {},
    "enabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loggingOptions|object|true|none|none|

<h2 id="tocS_QueryFilter">QueryFilter</h2>
<!-- backwards compatibility -->
<a id="schemaqueryfilter"></a>
<a id="schema_QueryFilter"></a>
<a id="tocSqueryfilter"></a>
<a id="tocsqueryfilter"></a>

```json
{
  "deltaTime": {
    "offsetSeconds": {},
    "timeExpression": {}
  }
}
```

Information that is used to filter message data, to segregate it according to the timeframe in which it arrives.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deltaTime|object|false|none|none|

<h2 id="tocS_QueryFilters">QueryFilters</h2>
<!-- backwards compatibility -->
<a id="schemaqueryfilters"></a>
<a id="schema_QueryFilters"></a>
<a id="tocSqueryfilters"></a>
<a id="tocsqueryfilters"></a>

```json
[
  {
    "deltaTime": {
      "offsetSeconds": {},
      "timeExpression": {}
    }
  }
]
```

<h2 id="tocS_ReprocessingStatus">ReprocessingStatus</h2>
<!-- backwards compatibility -->
<a id="schemareprocessingstatus"></a>
<a id="schema_ReprocessingStatus"></a>
<a id="tocSreprocessingstatus"></a>
<a id="tocsreprocessingstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_ReprocessingSummary">ReprocessingSummary</h2>
<!-- backwards compatibility -->
<a id="schemareprocessingsummary"></a>
<a id="schema_ReprocessingSummary"></a>
<a id="tocSreprocessingsummary"></a>
<a id="tocsreprocessingsummary"></a>

```json
{
  "id": {},
  "status": {},
  "creationTime": {}
}
```

Information about pipeline reprocessing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|status|object|false|none|none|
|creationTime|object|false|none|none|

<h2 id="tocS_VolumeSizeInGB">VolumeSizeInGB</h2>
<!-- backwards compatibility -->
<a id="schemavolumesizeingb"></a>
<a id="schema_VolumeSizeInGB"></a>
<a id="tocSvolumesizeingb"></a>
<a id="tocsvolumesizeingb"></a>

```json
1
```

<h2 id="tocS_RunPipelineActivityRequest">RunPipelineActivityRequest</h2>
<!-- backwards compatibility -->
<a id="schemarunpipelineactivityrequest"></a>
<a id="schema_RunPipelineActivityRequest"></a>
<a id="tocSrunpipelineactivityrequest"></a>
<a id="tocsrunpipelineactivityrequest"></a>

```json
{
  "pipelineActivity": {
    "channel": {
      "name": {},
      "channelName": {},
      "next": {}
    },
    "lambda": {
      "name": {},
      "lambdaName": {},
      "batchSize": {},
      "next": {}
    },
    "datastore": {
      "name": {},
      "datastoreName": {}
    },
    "addAttributes": {
      "name": {},
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "next": {}
    },
    "removeAttributes": {
      "name": {},
      "attributes": {},
      "next": {}
    },
    "selectAttributes": {
      "name": {},
      "attributes": {},
      "next": {}
    },
    "filter": {
      "name": {},
      "filter": {},
      "next": {}
    },
    "math": {
      "name": {},
      "attribute": {},
      "math": {},
      "next": {}
    },
    "deviceRegistryEnrich": {
      "name": {},
      "attribute": {},
      "thingName": {},
      "roleArn": {},
      "next": {}
    },
    "deviceShadowEnrich": {
      "name": {},
      "attribute": {},
      "thingName": {},
      "roleArn": {},
      "next": {}
    }
  },
  "payloads": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineActivity|object|true|none|none|
|payloads|object|true|none|none|

<h2 id="tocS_S3PathChannelMessage">S3PathChannelMessage</h2>
<!-- backwards compatibility -->
<a id="schemas3pathchannelmessage"></a>
<a id="schema_S3PathChannelMessage"></a>
<a id="tocSs3pathchannelmessage"></a>
<a id="tocss3pathchannelmessage"></a>

```json
"string"
```

<h2 id="tocS_StartTime">StartTime</h2>
<!-- backwards compatibility -->
<a id="schemastarttime"></a>
<a id="schema_StartTime"></a>
<a id="tocSstarttime"></a>
<a id="tocsstarttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_SampleChannelDataRequest">SampleChannelDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemasamplechanneldatarequest"></a>
<a id="schema_SampleChannelDataRequest"></a>
<a id="tocSsamplechanneldatarequest"></a>
<a id="tocssamplechanneldatarequest"></a>

```json
{}
```

<h2 id="tocS_ScheduleExpression">ScheduleExpression</h2>
<!-- backwards compatibility -->
<a id="schemascheduleexpression"></a>
<a id="schema_ScheduleExpression"></a>
<a id="tocSscheduleexpression"></a>
<a id="tocsscheduleexpression"></a>

```json
"string"
```

<h2 id="tocS_SqlQuery">SqlQuery</h2>
<!-- backwards compatibility -->
<a id="schemasqlquery"></a>
<a id="schema_SqlQuery"></a>
<a id="tocSsqlquery"></a>
<a id="tocssqlquery"></a>

```json
"string"
```

<h2 id="tocS_StartPipelineReprocessingRequest">StartPipelineReprocessingRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartpipelinereprocessingrequest"></a>
<a id="schema_StartPipelineReprocessingRequest"></a>
<a id="tocSstartpipelinereprocessingrequest"></a>
<a id="tocsstartpipelinereprocessingrequest"></a>

```json
{
  "startTime": {},
  "endTime": {},
  "channelMessages": {
    "s3Paths": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|channelMessages|object|false|none|none|

<h2 id="tocS_StringValue">StringValue</h2>
<!-- backwards compatibility -->
<a id="schemastringvalue"></a>
<a id="schema_StringValue"></a>
<a id="tocSstringvalue"></a>
<a id="tocsstringvalue"></a>

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
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_TimestampFormat">TimestampFormat</h2>
<!-- backwards compatibility -->
<a id="schematimestampformat"></a>
<a id="schema_TimestampFormat"></a>
<a id="tocStimestampformat"></a>
<a id="tocstimestampformat"></a>

```json
"string"
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateChannelRequest">UpdateChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelrequest"></a>
<a id="schema_UpdateChannelRequest"></a>
<a id="tocSupdatechannelrequest"></a>
<a id="tocsupdatechannelrequest"></a>

```json
{
  "channelStorage": {
    "serviceManagedS3": {},
    "customerManagedS3": {
      "bucket": {},
      "keyPrefix": {},
      "roleArn": {}
    }
  },
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelStorage|object|false|none|none|
|retentionPeriod|object|false|none|none|

<h2 id="tocS_UpdateDatasetRequest">UpdateDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetrequest"></a>
<a id="schema_UpdateDatasetRequest"></a>
<a id="tocSupdatedatasetrequest"></a>
<a id="tocsupdatedatasetrequest"></a>

```json
{
  "actions": {},
  "triggers": {},
  "contentDeliveryRules": {},
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  },
  "versioningConfiguration": {
    "unlimited": {},
    "maxVersions": {}
  },
  "lateDataRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|object|true|none|none|
|triggers|object|false|none|none|
|contentDeliveryRules|object|false|none|none|
|retentionPeriod|object|false|none|none|
|versioningConfiguration|object|false|none|none|
|lateDataRules|object|false|none|none|

<h2 id="tocS_UpdateDatastoreRequest">UpdateDatastoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatastorerequest"></a>
<a id="schema_UpdateDatastoreRequest"></a>
<a id="tocSupdatedatastorerequest"></a>
<a id="tocsupdatedatastorerequest"></a>

```json
{
  "retentionPeriod": {
    "unlimited": {},
    "numberOfDays": {}
  },
  "datastoreStorage": {
    "serviceManagedS3": {},
    "customerManagedS3": {
      "bucket": {},
      "keyPrefix": {},
      "roleArn": {}
    },
    "iotSiteWiseMultiLayerStorage": {
      "customerManagedS3Storage": {
        "bucket": {},
        "keyPrefix": {}
      }
    }
  },
  "fileFormatConfiguration": {
    "jsonConfiguration": {},
    "parquetConfiguration": {
      "schemaDefinition": {
        "columns": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|retentionPeriod|object|false|none|none|
|datastoreStorage|object|false|none|none|
|fileFormatConfiguration|object|false|none|none|

<h2 id="tocS_UpdatePipelineRequest">UpdatePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepipelinerequest"></a>
<a id="schema_UpdatePipelineRequest"></a>
<a id="tocSupdatepipelinerequest"></a>
<a id="tocsupdatepipelinerequest"></a>

```json
{
  "pipelineActivities": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pipelineActivities|object|true|none|none|

<h2 id="tocS_VariableName">VariableName</h2>
<!-- backwards compatibility -->
<a id="schemavariablename"></a>
<a id="schema_VariableName"></a>
<a id="tocSvariablename"></a>
<a id="tocsvariablename"></a>

```json
"string"
```

<h2 id="tocS_Variable">Variable</h2>
<!-- backwards compatibility -->
<a id="schemavariable"></a>
<a id="schema_Variable"></a>
<a id="tocSvariable"></a>
<a id="tocsvariable"></a>

```json
{
  "name": {},
  "stringValue": {},
  "doubleValue": {},
  "datasetContentVersionValue": {
    "datasetName": {}
  },
  "outputFileUriValue": {
    "fileName": {}
  }
}
```

An instance of a variable to be passed to the <code>containerAction</code> execution. Each variable must have a name and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|stringValue|object|false|none|none|
|doubleValue|object|false|none|none|
|datasetContentVersionValue|object|false|none|none|
|outputFileUriValue|object|false|none|none|
