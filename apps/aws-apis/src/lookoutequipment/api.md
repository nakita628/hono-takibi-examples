<h1 id="amazon-lookout-for-equipment">Amazon Lookout for Equipment v2020-12-15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify anomalies in machines from sensor data for use in predictive maintenance.

Base URLs:

* <a href="http://lookoutequipment.us-east-1.amazonaws.com">http://lookoutequipment.us-east-1.amazonaws.com</a> - The LookoutEquipment multi-region endpoint

* <a href="https://lookoutequipment.us-east-1.amazonaws.com">https://lookoutequipment.us-east-1.amazonaws.com</a> - The LookoutEquipment multi-region endpoint

* <a href="http://lookoutequipment.cn-north-1.amazonaws.com.cn">http://lookoutequipment.cn-north-1.amazonaws.com.cn</a> - The LookoutEquipment endpoint for China (Beijing) and China (Ningxia)

* <a href="https://lookoutequipment.cn-north-1.amazonaws.com.cn">https://lookoutequipment.cn-north-1.amazonaws.com.cn</a> - The LookoutEquipment endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/lookoutequipment/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-lookout-for-equipment-default">Default</h1>

## CreateDataset

<a id="opIdCreateDataset"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.CreateDataset' \
  -d '{
    "DatasetName": {},
    "DatasetSchema": {
      "InlineDataSchema": {}
    },
    "ServerSideKmsKeyId": {},
    "ClientToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset`

Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data. 

> Body parameter

```json
{
  "DatasetName": {},
  "DatasetSchema": {
    "InlineDataSchema": {}
  },
  "ServerSideKmsKeyId": {},
  "ClientToken": {},
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
|» DatasetSchema|body|object|false|none|
|» » InlineDataSchema|body|object|false|none|
|» ServerSideKmsKeyId|body|object|false|none|
|» ClientToken|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.CreateDataset|

> Example responses

> 200 Response

```json
{
  "DatasetName": {},
  "DatasetArn": {},
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
|200|OK|Success|[CreateDatasetResponse](#schemacreatedatasetresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInferenceScheduler

<a id="opIdCreateInferenceScheduler"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.CreateInferenceScheduler' \
  -d '{
    "ModelName": {},
    "InferenceSchedulerName": {},
    "DataDelayOffsetInMinutes": {},
    "DataUploadFrequency": {},
    "DataInputConfiguration": {
      "S3InputConfiguration": {
        "Bucket": {},
        "Prefix": {}
      },
      "InputTimeZoneOffset": {},
      "InferenceInputNameConfiguration": {
        "TimestampFormat": {},
        "ComponentTimestampDelimiter": {}
      }
    },
    "DataOutputConfiguration": {
      "S3OutputConfiguration": {
        "Bucket": {},
        "Prefix": {}
      },
      "KmsKeyId": {}
    },
    "RoleArn": {},
    "ServerSideKmsKeyId": {},
    "ClientToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler`

 Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data. 

> Body parameter

```json
{
  "ModelName": {},
  "InferenceSchedulerName": {},
  "DataDelayOffsetInMinutes": {},
  "DataUploadFrequency": {},
  "DataInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "InputTimeZoneOffset": {},
    "InferenceInputNameConfiguration": {
      "TimestampFormat": {},
      "ComponentTimestampDelimiter": {}
    }
  },
  "DataOutputConfiguration": {
    "S3OutputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "KmsKeyId": {}
  },
  "RoleArn": {},
  "ServerSideKmsKeyId": {},
  "ClientToken": {},
  "Tags": {}
}
```

<h3 id="createinferencescheduler-parameters">Parameters</h3>

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
|body|body|[CreateInferenceSchedulerRequest](#schemacreateinferenceschedulerrequest)|true|none|
|» ModelName|body|object|true|none|
|» InferenceSchedulerName|body|object|true|none|
|» DataDelayOffsetInMinutes|body|object|false|none|
|» DataUploadFrequency|body|object|true|none|
|» DataInputConfiguration|body|object|true|none|
|» » S3InputConfiguration|body|object|false|none|
|» » » Bucket|body|object|true|none|
|» » » Prefix|body|object|false|none|
|» » InputTimeZoneOffset|body|object|false|none|
|» » InferenceInputNameConfiguration|body|object|false|none|
|» » » TimestampFormat|body|object|false|none|
|» » » ComponentTimestampDelimiter|body|object|false|none|
|» DataOutputConfiguration|body|object|true|none|
|» » S3OutputConfiguration|body|object|true|none|
|» » » Bucket|body|object|true|none|
|» » » Prefix|body|object|false|none|
|» » KmsKeyId|body|object|false|none|
|» RoleArn|body|object|true|none|
|» ServerSideKmsKeyId|body|object|false|none|
|» ClientToken|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.CreateInferenceScheduler|

> Example responses

> 200 Response

```json
{
  "InferenceSchedulerArn": {},
  "InferenceSchedulerName": {},
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

<h3 id="createinferencescheduler-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateInferenceSchedulerResponse](#schemacreateinferenceschedulerresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLabel

<a id="opIdCreateLabel"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.CreateLabel' \
  -d '{
    "LabelGroupName": {},
    "StartTime": {},
    "EndTime": {},
    "Rating": {},
    "FaultCode": {},
    "Notes": {},
    "Equipment": {},
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel`

 Creates a label for an event. 

> Body parameter

```json
{
  "LabelGroupName": {},
  "StartTime": {},
  "EndTime": {},
  "Rating": {},
  "FaultCode": {},
  "Notes": {},
  "Equipment": {},
  "ClientToken": {}
}
```

<h3 id="createlabel-parameters">Parameters</h3>

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
|body|body|[CreateLabelRequest](#schemacreatelabelrequest)|true|none|
|» LabelGroupName|body|object|true|none|
|» StartTime|body|object|true|none|
|» EndTime|body|object|true|none|
|» Rating|body|object|true|none|
|» FaultCode|body|object|false|none|
|» Notes|body|object|false|none|
|» Equipment|body|object|false|none|
|» ClientToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.CreateLabel|

> Example responses

> 200 Response

```json
{
  "LabelId": {}
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

<h3 id="createlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLabelResponse](#schemacreatelabelresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLabelGroup

<a id="opIdCreateLabelGroup"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.CreateLabelGroup' \
  -d '{
    "LabelGroupName": {},
    "FaultCodes": {},
    "ClientToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup`

 Creates a group of labels. 

> Body parameter

```json
{
  "LabelGroupName": {},
  "FaultCodes": {},
  "ClientToken": {},
  "Tags": {}
}
```

<h3 id="createlabelgroup-parameters">Parameters</h3>

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
|body|body|[CreateLabelGroupRequest](#schemacreatelabelgrouprequest)|true|none|
|» LabelGroupName|body|object|true|none|
|» FaultCodes|body|object|false|none|
|» ClientToken|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.CreateLabelGroup|

> Example responses

> 200 Response

```json
{
  "LabelGroupName": {},
  "LabelGroupArn": {}
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

<h3 id="createlabelgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLabelGroupResponse](#schemacreatelabelgroupresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateModel

<a id="opIdCreateModel"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.CreateModel' \
  -d '{
    "ModelName": {},
    "DatasetName": {},
    "DatasetSchema": {
      "InlineDataSchema": {}
    },
    "LabelsInputConfiguration": {
      "S3InputConfiguration": {
        "Bucket": {},
        "Prefix": {}
      },
      "LabelGroupName": {}
    },
    "ClientToken": {},
    "TrainingDataStartTime": {},
    "TrainingDataEndTime": {},
    "EvaluationDataStartTime": {},
    "EvaluationDataEndTime": {},
    "RoleArn": {},
    "DataPreProcessingConfiguration": {
      "TargetSamplingRate": {}
    },
    "ServerSideKmsKeyId": {},
    "Tags": {},
    "OffCondition": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel`

<p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>

> Body parameter

```json
{
  "ModelName": {},
  "DatasetName": {},
  "DatasetSchema": {
    "InlineDataSchema": {}
  },
  "LabelsInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "LabelGroupName": {}
  },
  "ClientToken": {},
  "TrainingDataStartTime": {},
  "TrainingDataEndTime": {},
  "EvaluationDataStartTime": {},
  "EvaluationDataEndTime": {},
  "RoleArn": {},
  "DataPreProcessingConfiguration": {
    "TargetSamplingRate": {}
  },
  "ServerSideKmsKeyId": {},
  "Tags": {},
  "OffCondition": {}
}
```

<h3 id="createmodel-parameters">Parameters</h3>

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
|body|body|[CreateModelRequest](#schemacreatemodelrequest)|true|none|
|» ModelName|body|object|true|none|
|» DatasetName|body|object|true|none|
|» DatasetSchema|body|object|false|none|
|» » InlineDataSchema|body|object|false|none|
|» LabelsInputConfiguration|body|object|false|none|
|» » S3InputConfiguration|body|object|false|none|
|» » » Bucket|body|object|true|none|
|» » » Prefix|body|object|false|none|
|» » LabelGroupName|body|object|false|none|
|» ClientToken|body|object|true|none|
|» TrainingDataStartTime|body|object|false|none|
|» TrainingDataEndTime|body|object|false|none|
|» EvaluationDataStartTime|body|object|false|none|
|» EvaluationDataEndTime|body|object|false|none|
|» RoleArn|body|object|false|none|
|» DataPreProcessingConfiguration|body|object|false|none|
|» » TargetSamplingRate|body|object|false|none|
|» ServerSideKmsKeyId|body|object|false|none|
|» Tags|body|object|false|none|
|» OffCondition|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.CreateModel|

> Example responses

> 200 Response

```json
{
  "ModelArn": {},
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

<h3 id="createmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateModelResponse](#schemacreatemodelresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDataset

<a id="opIdDeleteDataset"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.DeleteDataset' \
  -d '{
    "DatasetName": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset`

 Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future. 

> Body parameter

```json
{
  "DatasetName": {}
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
|» DatasetName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.DeleteDataset|

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

<h3 id="deletedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInferenceScheduler

<a id="opIdDeleteInferenceScheduler"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler' \
  -d '{
    "InferenceSchedulerName": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler`

Deletes an inference scheduler that has been set up. Already processed output results are not affected. 

> Body parameter

```json
{
  "InferenceSchedulerName": {}
}
```

<h3 id="deleteinferencescheduler-parameters">Parameters</h3>

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
|body|body|[DeleteInferenceSchedulerRequest](#schemadeleteinferenceschedulerrequest)|true|none|
|» InferenceSchedulerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler|

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

<h3 id="deleteinferencescheduler-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLabel

<a id="opIdDeleteLabel"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.DeleteLabel' \
  -d '{
    "LabelGroupName": {},
    "LabelId": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel`

 Deletes a label. 

> Body parameter

```json
{
  "LabelGroupName": {},
  "LabelId": {}
}
```

<h3 id="deletelabel-parameters">Parameters</h3>

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
|body|body|[DeleteLabelRequest](#schemadeletelabelrequest)|true|none|
|» LabelGroupName|body|object|true|none|
|» LabelId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.DeleteLabel|

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

<h3 id="deletelabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLabelGroup

<a id="opIdDeleteLabelGroup"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.DeleteLabelGroup' \
  -d '{
    "LabelGroupName": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup`

 Deletes a group of labels. 

> Body parameter

```json
{
  "LabelGroupName": {}
}
```

<h3 id="deletelabelgroup-parameters">Parameters</h3>

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
|body|body|[DeleteLabelGroupRequest](#schemadeletelabelgrouprequest)|true|none|
|» LabelGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.DeleteLabelGroup|

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

<h3 id="deletelabelgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteModel

<a id="opIdDeleteModel"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.DeleteModel' \
  -d '{
    "ModelName": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel`

Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up. 

> Body parameter

```json
{
  "ModelName": {}
}
```

<h3 id="deletemodel-parameters">Parameters</h3>

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
|body|body|[DeleteModelRequest](#schemadeletemodelrequest)|true|none|
|» ModelName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.DeleteModel|

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

<h3 id="deletemodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDataIngestionJob

<a id="opIdDescribeDataIngestionJob"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob' \
  -d '{
    "JobId": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob`

Provides information on a specific data ingestion job such as creation time, dataset ARN, and status.

> Body parameter

```json
{
  "JobId": {}
}
```

<h3 id="describedataingestionjob-parameters">Parameters</h3>

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
|body|body|[DescribeDataIngestionJobRequest](#schemadescribedataingestionjobrequest)|true|none|
|» JobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
  "DatasetArn": {},
  "IngestionInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {},
      "KeyPattern": {}
    }
  },
  "RoleArn": {},
  "CreatedAt": {},
  "Status": {},
  "FailedReason": {},
  "DataQualitySummary": {
    "InsufficientSensorData": {
      "MissingCompleteSensorData": {
        "AffectedSensorCount": {}
      },
      "SensorsWithShortDateRange": {
        "AffectedSensorCount": {}
      }
    },
    "MissingSensorData": {
      "AffectedSensorCount": {},
      "TotalNumberOfMissingValues": {}
    },
    "InvalidSensorData": {
      "AffectedSensorCount": {},
      "TotalNumberOfInvalidValues": {}
    },
    "UnsupportedTimestamps": {
      "TotalNumberOfUnsupportedTimestamps": {}
    },
    "DuplicateTimestamps": {
      "TotalNumberOfDuplicateTimestamps": {}
    }
  },
  "IngestedFilesSummary": {
    "TotalNumberOfFiles": {},
    "IngestedNumberOfFiles": {},
    "DiscardedFiles": {}
  },
  "StatusDetail": {},
  "IngestedDataSize": {},
  "DataStartTime": {},
  "DataEndTime": {}
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

<h3 id="describedataingestionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDataIngestionJobResponse](#schemadescribedataingestionjobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDataset

<a id="opIdDescribeDataset"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.DescribeDataset' \
  -d '{
    "DatasetName": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset`

Provides a JSON description of the data in each time series dataset, including names, column names, and data types.

> Body parameter

```json
{
  "DatasetName": {}
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
|» DatasetName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.DescribeDataset|

> Example responses

> 200 Response

```json
{
  "DatasetName": {},
  "DatasetArn": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Status": {},
  "Schema": {},
  "ServerSideKmsKeyId": {},
  "IngestionInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {},
      "KeyPattern": {}
    }
  },
  "DataQualitySummary": {
    "InsufficientSensorData": {
      "MissingCompleteSensorData": {
        "AffectedSensorCount": {}
      },
      "SensorsWithShortDateRange": {
        "AffectedSensorCount": {}
      }
    },
    "MissingSensorData": {
      "AffectedSensorCount": {},
      "TotalNumberOfMissingValues": {}
    },
    "InvalidSensorData": {
      "AffectedSensorCount": {},
      "TotalNumberOfInvalidValues": {}
    },
    "UnsupportedTimestamps": {
      "TotalNumberOfUnsupportedTimestamps": {}
    },
    "DuplicateTimestamps": {
      "TotalNumberOfDuplicateTimestamps": {}
    }
  },
  "IngestedFilesSummary": {
    "TotalNumberOfFiles": {},
    "IngestedNumberOfFiles": {},
    "DiscardedFiles": {}
  },
  "RoleArn": {},
  "DataStartTime": {},
  "DataEndTime": {}
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
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInferenceScheduler

<a id="opIdDescribeInferenceScheduler"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler' \
  -d '{
    "InferenceSchedulerName": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler`

 Specifies information about the inference scheduler being used, including name, model, status, and associated metadata 

> Body parameter

```json
{
  "InferenceSchedulerName": {}
}
```

<h3 id="describeinferencescheduler-parameters">Parameters</h3>

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
|body|body|[DescribeInferenceSchedulerRequest](#schemadescribeinferenceschedulerrequest)|true|none|
|» InferenceSchedulerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler|

> Example responses

> 200 Response

```json
{
  "ModelArn": {},
  "ModelName": {},
  "InferenceSchedulerName": {},
  "InferenceSchedulerArn": {},
  "Status": {},
  "DataDelayOffsetInMinutes": {},
  "DataUploadFrequency": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "DataInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "InputTimeZoneOffset": {},
    "InferenceInputNameConfiguration": {
      "TimestampFormat": {},
      "ComponentTimestampDelimiter": {}
    }
  },
  "DataOutputConfiguration": {
    "S3OutputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "KmsKeyId": {}
  },
  "RoleArn": {},
  "ServerSideKmsKeyId": {},
  "LatestInferenceResult": {}
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

<h3 id="describeinferencescheduler-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInferenceSchedulerResponse](#schemadescribeinferenceschedulerresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLabel

<a id="opIdDescribeLabel"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.DescribeLabel' \
  -d '{
    "LabelGroupName": {},
    "LabelId": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel`

 Returns the name of the label. 

> Body parameter

```json
{
  "LabelGroupName": {},
  "LabelId": {}
}
```

<h3 id="describelabel-parameters">Parameters</h3>

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
|body|body|[DescribeLabelRequest](#schemadescribelabelrequest)|true|none|
|» LabelGroupName|body|object|true|none|
|» LabelId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.DescribeLabel|

> Example responses

> 200 Response

```json
{
  "LabelGroupName": {},
  "LabelGroupArn": {},
  "LabelId": {},
  "StartTime": {},
  "EndTime": {},
  "Rating": {},
  "FaultCode": {},
  "Notes": {},
  "Equipment": {},
  "CreatedAt": {}
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

<h3 id="describelabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLabelResponse](#schemadescribelabelresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLabelGroup

<a id="opIdDescribeLabelGroup"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.DescribeLabelGroup' \
  -d '{
    "LabelGroupName": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup`

 Returns information about the label group. 

> Body parameter

```json
{
  "LabelGroupName": {}
}
```

<h3 id="describelabelgroup-parameters">Parameters</h3>

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
|body|body|[DescribeLabelGroupRequest](#schemadescribelabelgrouprequest)|true|none|
|» LabelGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.DescribeLabelGroup|

> Example responses

> 200 Response

```json
{
  "LabelGroupName": {},
  "LabelGroupArn": {},
  "FaultCodes": {},
  "CreatedAt": {},
  "UpdatedAt": {}
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

<h3 id="describelabelgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLabelGroupResponse](#schemadescribelabelgroupresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeModel

<a id="opIdDescribeModel"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.DescribeModel' \
  -d '{
    "ModelName": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel`

Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on. 

> Body parameter

```json
{
  "ModelName": {}
}
```

<h3 id="describemodel-parameters">Parameters</h3>

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
|body|body|[DescribeModelRequest](#schemadescribemodelrequest)|true|none|
|» ModelName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.DescribeModel|

> Example responses

> 200 Response

```json
{
  "ModelName": {},
  "ModelArn": {},
  "DatasetName": {},
  "DatasetArn": {},
  "Schema": {},
  "LabelsInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "LabelGroupName": {}
  },
  "TrainingDataStartTime": {},
  "TrainingDataEndTime": {},
  "EvaluationDataStartTime": {},
  "EvaluationDataEndTime": {},
  "RoleArn": {},
  "DataPreProcessingConfiguration": {
    "TargetSamplingRate": {}
  },
  "Status": {},
  "TrainingExecutionStartTime": {},
  "TrainingExecutionEndTime": {},
  "FailedReason": {},
  "ModelMetrics": {},
  "LastUpdatedTime": {},
  "CreatedAt": {},
  "ServerSideKmsKeyId": {},
  "OffCondition": {}
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

<h3 id="describemodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeModelResponse](#schemadescribemodelresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDataIngestionJobs

<a id="opIdListDataIngestionJobs"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.ListDataIngestionJobs' \
  -d '{
    "DatasetName": {},
    "NextToken": {},
    "MaxResults": {},
    "Status": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs`

Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on. 

> Body parameter

```json
{
  "DatasetName": {},
  "NextToken": {},
  "MaxResults": {},
  "Status": {}
}
```

<h3 id="listdataingestionjobs-parameters">Parameters</h3>

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
|body|body|[ListDataIngestionJobsRequest](#schemalistdataingestionjobsrequest)|true|none|
|» DatasetName|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.ListDataIngestionJobs|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "DataIngestionJobSummaries": {}
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

<h3 id="listdataingestionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDataIngestionJobsResponse](#schemalistdataingestionjobsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDatasets

<a id="opIdListDatasets"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.ListDatasets' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "DatasetNameBeginsWith": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets`

Lists all datasets currently available in your account, filtering on the dataset name. 

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "DatasetNameBeginsWith": {}
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
|» DatasetNameBeginsWith|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.ListDatasets|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "DatasetSummaries": {}
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
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInferenceEvents

<a id="opIdListInferenceEvents"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.ListInferenceEvents' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "InferenceSchedulerName": {},
    "IntervalStartTime": {},
    "IntervalEndTime": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents`

 Lists all inference events that have been found for the specified inference scheduler. 

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "InferenceSchedulerName": {},
  "IntervalStartTime": {},
  "IntervalEndTime": {}
}
```

<h3 id="listinferenceevents-parameters">Parameters</h3>

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
|body|body|[ListInferenceEventsRequest](#schemalistinferenceeventsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» InferenceSchedulerName|body|object|true|none|
|» IntervalStartTime|body|object|true|none|
|» IntervalEndTime|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.ListInferenceEvents|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "InferenceEventSummaries": {}
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

<h3 id="listinferenceevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInferenceEventsResponse](#schemalistinferenceeventsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInferenceExecutions

<a id="opIdListInferenceExecutions"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.ListInferenceExecutions' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "InferenceSchedulerName": {},
    "DataStartTimeAfter": {},
    "DataEndTimeBefore": {},
    "Status": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions`

 Lists all inference executions that have been performed by the specified inference scheduler. 

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "InferenceSchedulerName": {},
  "DataStartTimeAfter": {},
  "DataEndTimeBefore": {},
  "Status": {}
}
```

<h3 id="listinferenceexecutions-parameters">Parameters</h3>

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
|body|body|[ListInferenceExecutionsRequest](#schemalistinferenceexecutionsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» InferenceSchedulerName|body|object|true|none|
|» DataStartTimeAfter|body|object|false|none|
|» DataEndTimeBefore|body|object|false|none|
|» Status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.ListInferenceExecutions|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "InferenceExecutionSummaries": {}
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

<h3 id="listinferenceexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInferenceExecutionsResponse](#schemalistinferenceexecutionsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInferenceSchedulers

<a id="opIdListInferenceSchedulers"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.ListInferenceSchedulers' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "InferenceSchedulerNameBeginsWith": {},
    "ModelName": {},
    "Status": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers`

Retrieves a list of all inference schedulers currently available for your account. 

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "InferenceSchedulerNameBeginsWith": {},
  "ModelName": {},
  "Status": {}
}
```

<h3 id="listinferenceschedulers-parameters">Parameters</h3>

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
|body|body|[ListInferenceSchedulersRequest](#schemalistinferenceschedulersrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» InferenceSchedulerNameBeginsWith|body|object|false|none|
|» ModelName|body|object|false|none|
|» Status|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.ListInferenceSchedulers|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "InferenceSchedulerSummaries": {}
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

<h3 id="listinferenceschedulers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInferenceSchedulersResponse](#schemalistinferenceschedulersresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLabelGroups

<a id="opIdListLabelGroups"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.ListLabelGroups' \
  -d '{
    "LabelGroupNameBeginsWith": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups`

 Returns a list of the label groups. 

> Body parameter

```json
{
  "LabelGroupNameBeginsWith": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listlabelgroups-parameters">Parameters</h3>

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
|body|body|[ListLabelGroupsRequest](#schemalistlabelgroupsrequest)|true|none|
|» LabelGroupNameBeginsWith|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.ListLabelGroups|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "LabelGroupSummaries": {}
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

<h3 id="listlabelgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLabelGroupsResponse](#schemalistlabelgroupsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLabels

<a id="opIdListLabels"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.ListLabels' \
  -d '{
    "LabelGroupName": {},
    "IntervalStartTime": {},
    "IntervalEndTime": {},
    "FaultCode": {},
    "Equipment": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels`

 Provides a list of labels. 

> Body parameter

```json
{
  "LabelGroupName": {},
  "IntervalStartTime": {},
  "IntervalEndTime": {},
  "FaultCode": {},
  "Equipment": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listlabels-parameters">Parameters</h3>

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
|body|body|[ListLabelsRequest](#schemalistlabelsrequest)|true|none|
|» LabelGroupName|body|object|true|none|
|» IntervalStartTime|body|object|false|none|
|» IntervalEndTime|body|object|false|none|
|» FaultCode|body|object|false|none|
|» Equipment|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.ListLabels|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "LabelSummaries": {}
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

<h3 id="listlabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLabelsResponse](#schemalistlabelsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListModels

<a id="opIdListModels"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.ListModels' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Status": {},
    "ModelNameBeginsWith": {},
    "DatasetNameBeginsWith": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels`

Generates a list of all models in the account, including model name and ARN, dataset, and status. 

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Status": {},
  "ModelNameBeginsWith": {},
  "DatasetNameBeginsWith": {}
}
```

<h3 id="listmodels-parameters">Parameters</h3>

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
|body|body|[ListModelsRequest](#schemalistmodelsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Status|body|object|false|none|
|» ModelNameBeginsWith|body|object|false|none|
|» DatasetNameBeginsWith|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.ListModels|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "ModelSummaries": {}
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

<h3 id="listmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListModelsResponse](#schemalistmodelsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSensorStatistics

<a id="opIdListSensorStatistics"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.ListSensorStatistics' \
  -d '{
    "DatasetName": {},
    "IngestionJobId": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics`

 Lists statistics about the data collected for each of the sensors that have been successfully ingested in the particular dataset. Can also be used to retreive Sensor Statistics for a previous ingestion job. 

> Body parameter

```json
{
  "DatasetName": {},
  "IngestionJobId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listsensorstatistics-parameters">Parameters</h3>

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
|body|body|[ListSensorStatisticsRequest](#schemalistsensorstatisticsrequest)|true|none|
|» DatasetName|body|object|true|none|
|» IngestionJobId|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.ListSensorStatistics|

> Example responses

> 200 Response

```json
{
  "SensorStatisticsSummaries": {},
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

<h3 id="listsensorstatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSensorStatisticsResponse](#schemalistsensorstatisticsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource`

Lists all the tags for a specified resource, including key and value. 

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
|X-Amz-Target|AWSLookoutEquipmentFrontendService.ListTagsForResource|

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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDataIngestionJob

<a id="opIdStartDataIngestionJob"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.StartDataIngestionJob' \
  -d '{
    "DatasetName": {},
    "IngestionInputConfiguration": {
      "S3InputConfiguration": {
        "Bucket": {},
        "Prefix": {},
        "KeyPattern": {}
      }
    },
    "RoleArn": {},
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob`

Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. 

> Body parameter

```json
{
  "DatasetName": {},
  "IngestionInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {},
      "KeyPattern": {}
    }
  },
  "RoleArn": {},
  "ClientToken": {}
}
```

<h3 id="startdataingestionjob-parameters">Parameters</h3>

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
|body|body|[StartDataIngestionJobRequest](#schemastartdataingestionjobrequest)|true|none|
|» DatasetName|body|object|true|none|
|» IngestionInputConfiguration|body|object|true|none|
|» » S3InputConfiguration|body|object|true|none|
|» » » Bucket|body|object|true|none|
|» » » Prefix|body|object|false|none|
|» » » KeyPattern|body|object|false|none|
|» RoleArn|body|object|true|none|
|» ClientToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.StartDataIngestionJob|

> Example responses

> 200 Response

```json
{
  "JobId": {},
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

<h3 id="startdataingestionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDataIngestionJobResponse](#schemastartdataingestionjobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartInferenceScheduler

<a id="opIdStartInferenceScheduler"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.StartInferenceScheduler' \
  -d '{
    "InferenceSchedulerName": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler`

Starts an inference scheduler. 

> Body parameter

```json
{
  "InferenceSchedulerName": {}
}
```

<h3 id="startinferencescheduler-parameters">Parameters</h3>

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
|body|body|[StartInferenceSchedulerRequest](#schemastartinferenceschedulerrequest)|true|none|
|» InferenceSchedulerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.StartInferenceScheduler|

> Example responses

> 200 Response

```json
{
  "ModelArn": {},
  "ModelName": {},
  "InferenceSchedulerName": {},
  "InferenceSchedulerArn": {},
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="startinferencescheduler-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartInferenceSchedulerResponse](#schemastartinferenceschedulerresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopInferenceScheduler

<a id="opIdStopInferenceScheduler"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.StopInferenceScheduler' \
  -d '{
    "InferenceSchedulerName": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler`

Stops an inference scheduler. 

> Body parameter

```json
{
  "InferenceSchedulerName": {}
}
```

<h3 id="stopinferencescheduler-parameters">Parameters</h3>

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
|body|body|[StopInferenceSchedulerRequest](#schemastopinferenceschedulerrequest)|true|none|
|» InferenceSchedulerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.StopInferenceScheduler|

> Example responses

> 200 Response

```json
{
  "ModelArn": {},
  "ModelName": {},
  "InferenceSchedulerName": {},
  "InferenceSchedulerArn": {},
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="stopinferencescheduler-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopInferenceSchedulerResponse](#schemastopinferenceschedulerresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource`

Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource. 

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
|X-Amz-Target|AWSLookoutEquipmentFrontendService.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource`

Removes a specific tag from a given resource. The tag is specified by its key. 

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
|X-Amz-Target|AWSLookoutEquipmentFrontendService.UntagResource|

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
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateInferenceScheduler

<a id="opIdUpdateInferenceScheduler"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler' \
  -d '{
    "InferenceSchedulerName": {},
    "DataDelayOffsetInMinutes": {},
    "DataUploadFrequency": {},
    "DataInputConfiguration": {
      "S3InputConfiguration": {
        "Bucket": {},
        "Prefix": {}
      },
      "InputTimeZoneOffset": {},
      "InferenceInputNameConfiguration": {
        "TimestampFormat": {},
        "ComponentTimestampDelimiter": {}
      }
    },
    "DataOutputConfiguration": {
      "S3OutputConfiguration": {
        "Bucket": {},
        "Prefix": {}
      },
      "KmsKeyId": {}
    },
    "RoleArn": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler`

Updates an inference scheduler. 

> Body parameter

```json
{
  "InferenceSchedulerName": {},
  "DataDelayOffsetInMinutes": {},
  "DataUploadFrequency": {},
  "DataInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "InputTimeZoneOffset": {},
    "InferenceInputNameConfiguration": {
      "TimestampFormat": {},
      "ComponentTimestampDelimiter": {}
    }
  },
  "DataOutputConfiguration": {
    "S3OutputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "KmsKeyId": {}
  },
  "RoleArn": {}
}
```

<h3 id="updateinferencescheduler-parameters">Parameters</h3>

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
|body|body|[UpdateInferenceSchedulerRequest](#schemaupdateinferenceschedulerrequest)|true|none|
|» InferenceSchedulerName|body|object|true|none|
|» DataDelayOffsetInMinutes|body|object|false|none|
|» DataUploadFrequency|body|object|false|none|
|» DataInputConfiguration|body|object|false|none|
|» » S3InputConfiguration|body|object|false|none|
|» » » Bucket|body|object|true|none|
|» » » Prefix|body|object|false|none|
|» » InputTimeZoneOffset|body|object|false|none|
|» » InferenceInputNameConfiguration|body|object|false|none|
|» » » TimestampFormat|body|object|false|none|
|» » » ComponentTimestampDelimiter|body|object|false|none|
|» DataOutputConfiguration|body|object|false|none|
|» » S3OutputConfiguration|body|object|true|none|
|» » » Bucket|body|object|true|none|
|» » » Prefix|body|object|false|none|
|» » KmsKeyId|body|object|false|none|
|» RoleArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler|

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

<h3 id="updateinferencescheduler-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLabelGroup

<a id="opIdUpdateLabelGroup"></a>

> Code samples

```bash
curl 'https://lookoutequipment.us-east-1.amazonaws.com/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLookoutEquipmentFrontendService.UpdateLabelGroup' \
  -d '{
    "LabelGroupName": {},
    "FaultCodes": {}
  }'
```

`POST /#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup`

 Updates the label group. 

> Body parameter

```json
{
  "LabelGroupName": {},
  "FaultCodes": {}
}
```

<h3 id="updatelabelgroup-parameters">Parameters</h3>

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
|body|body|[UpdateLabelGroupRequest](#schemaupdatelabelgrouprequest)|true|none|
|» LabelGroupName|body|object|true|none|
|» FaultCodes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLookoutEquipmentFrontendService.UpdateLabelGroup|

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

<h3 id="updatelabelgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateDatasetResponse">CreateDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetresponse"></a>
<a id="schema_CreateDatasetResponse"></a>
<a id="tocScreatedatasetresponse"></a>
<a id="tocscreatedatasetresponse"></a>

```json
{
  "DatasetName": {},
  "DatasetArn": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetName|object|false|none|none|
|DatasetArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CreateDatasetRequest">CreateDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetrequest"></a>
<a id="schema_CreateDatasetRequest"></a>
<a id="tocScreatedatasetrequest"></a>
<a id="tocscreatedatasetrequest"></a>

```json
{
  "DatasetName": {},
  "DatasetSchema": {
    "InlineDataSchema": {}
  },
  "ServerSideKmsKeyId": {},
  "ClientToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetName|object|true|none|none|
|DatasetSchema|object|false|none|none|
|ServerSideKmsKeyId|object|false|none|none|
|ClientToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
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

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

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

<h2 id="tocS_CreateInferenceSchedulerResponse">CreateInferenceSchedulerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateinferenceschedulerresponse"></a>
<a id="schema_CreateInferenceSchedulerResponse"></a>
<a id="tocScreateinferenceschedulerresponse"></a>
<a id="tocscreateinferenceschedulerresponse"></a>

```json
{
  "InferenceSchedulerArn": {},
  "InferenceSchedulerName": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InferenceSchedulerArn|object|false|none|none|
|InferenceSchedulerName|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CreateInferenceSchedulerRequest">CreateInferenceSchedulerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinferenceschedulerrequest"></a>
<a id="schema_CreateInferenceSchedulerRequest"></a>
<a id="tocScreateinferenceschedulerrequest"></a>
<a id="tocscreateinferenceschedulerrequest"></a>

```json
{
  "ModelName": {},
  "InferenceSchedulerName": {},
  "DataDelayOffsetInMinutes": {},
  "DataUploadFrequency": {},
  "DataInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "InputTimeZoneOffset": {},
    "InferenceInputNameConfiguration": {
      "TimestampFormat": {},
      "ComponentTimestampDelimiter": {}
    }
  },
  "DataOutputConfiguration": {
    "S3OutputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "KmsKeyId": {}
  },
  "RoleArn": {},
  "ServerSideKmsKeyId": {},
  "ClientToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelName|object|true|none|none|
|InferenceSchedulerName|object|true|none|none|
|DataDelayOffsetInMinutes|object|false|none|none|
|DataUploadFrequency|object|true|none|none|
|DataInputConfiguration|object|true|none|none|
|DataOutputConfiguration|object|true|none|none|
|RoleArn|object|true|none|none|
|ServerSideKmsKeyId|object|false|none|none|
|ClientToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreateLabelResponse">CreateLabelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelabelresponse"></a>
<a id="schema_CreateLabelResponse"></a>
<a id="tocScreatelabelresponse"></a>
<a id="tocscreatelabelresponse"></a>

```json
{
  "LabelId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelId|object|false|none|none|

<h2 id="tocS_CreateLabelRequest">CreateLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelabelrequest"></a>
<a id="schema_CreateLabelRequest"></a>
<a id="tocScreatelabelrequest"></a>
<a id="tocscreatelabelrequest"></a>

```json
{
  "LabelGroupName": {},
  "StartTime": {},
  "EndTime": {},
  "Rating": {},
  "FaultCode": {},
  "Notes": {},
  "Equipment": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupName|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|Rating|object|true|none|none|
|FaultCode|object|false|none|none|
|Notes|object|false|none|none|
|Equipment|object|false|none|none|
|ClientToken|object|true|none|none|

<h2 id="tocS_CreateLabelGroupResponse">CreateLabelGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelabelgroupresponse"></a>
<a id="schema_CreateLabelGroupResponse"></a>
<a id="tocScreatelabelgroupresponse"></a>
<a id="tocscreatelabelgroupresponse"></a>

```json
{
  "LabelGroupName": {},
  "LabelGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupName|object|false|none|none|
|LabelGroupArn|object|false|none|none|

<h2 id="tocS_CreateLabelGroupRequest">CreateLabelGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelabelgrouprequest"></a>
<a id="schema_CreateLabelGroupRequest"></a>
<a id="tocScreatelabelgrouprequest"></a>
<a id="tocscreatelabelgrouprequest"></a>

```json
{
  "LabelGroupName": {},
  "FaultCodes": {},
  "ClientToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupName|object|true|none|none|
|FaultCodes|object|false|none|none|
|ClientToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateModelResponse">CreateModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodelresponse"></a>
<a id="schema_CreateModelResponse"></a>
<a id="tocScreatemodelresponse"></a>
<a id="tocscreatemodelresponse"></a>

```json
{
  "ModelArn": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CreateModelRequest">CreateModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodelrequest"></a>
<a id="schema_CreateModelRequest"></a>
<a id="tocScreatemodelrequest"></a>
<a id="tocscreatemodelrequest"></a>

```json
{
  "ModelName": {},
  "DatasetName": {},
  "DatasetSchema": {
    "InlineDataSchema": {}
  },
  "LabelsInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "LabelGroupName": {}
  },
  "ClientToken": {},
  "TrainingDataStartTime": {},
  "TrainingDataEndTime": {},
  "EvaluationDataStartTime": {},
  "EvaluationDataEndTime": {},
  "RoleArn": {},
  "DataPreProcessingConfiguration": {
    "TargetSamplingRate": {}
  },
  "ServerSideKmsKeyId": {},
  "Tags": {},
  "OffCondition": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelName|object|true|none|none|
|DatasetName|object|true|none|none|
|DatasetSchema|object|false|none|none|
|LabelsInputConfiguration|object|false|none|none|
|ClientToken|object|true|none|none|
|TrainingDataStartTime|object|false|none|none|
|TrainingDataEndTime|object|false|none|none|
|EvaluationDataStartTime|object|false|none|none|
|EvaluationDataEndTime|object|false|none|none|
|RoleArn|object|false|none|none|
|DataPreProcessingConfiguration|object|false|none|none|
|ServerSideKmsKeyId|object|false|none|none|
|Tags|object|false|none|none|
|OffCondition|object|false|none|none|

<h2 id="tocS_DeleteDatasetRequest">DeleteDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetrequest"></a>
<a id="schema_DeleteDatasetRequest"></a>
<a id="tocSdeletedatasetrequest"></a>
<a id="tocsdeletedatasetrequest"></a>

```json
{
  "DatasetName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetName|object|true|none|none|

<h2 id="tocS_DeleteInferenceSchedulerRequest">DeleteInferenceSchedulerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinferenceschedulerrequest"></a>
<a id="schema_DeleteInferenceSchedulerRequest"></a>
<a id="tocSdeleteinferenceschedulerrequest"></a>
<a id="tocsdeleteinferenceschedulerrequest"></a>

```json
{
  "InferenceSchedulerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InferenceSchedulerName|object|true|none|none|

<h2 id="tocS_DeleteLabelRequest">DeleteLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelabelrequest"></a>
<a id="schema_DeleteLabelRequest"></a>
<a id="tocSdeletelabelrequest"></a>
<a id="tocsdeletelabelrequest"></a>

```json
{
  "LabelGroupName": {},
  "LabelId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupName|object|true|none|none|
|LabelId|object|true|none|none|

<h2 id="tocS_DeleteLabelGroupRequest">DeleteLabelGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelabelgrouprequest"></a>
<a id="schema_DeleteLabelGroupRequest"></a>
<a id="tocSdeletelabelgrouprequest"></a>
<a id="tocsdeletelabelgrouprequest"></a>

```json
{
  "LabelGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupName|object|true|none|none|

<h2 id="tocS_DeleteModelRequest">DeleteModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemodelrequest"></a>
<a id="schema_DeleteModelRequest"></a>
<a id="tocSdeletemodelrequest"></a>
<a id="tocsdeletemodelrequest"></a>

```json
{
  "ModelName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelName|object|true|none|none|

<h2 id="tocS_DescribeDataIngestionJobResponse">DescribeDataIngestionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedataingestionjobresponse"></a>
<a id="schema_DescribeDataIngestionJobResponse"></a>
<a id="tocSdescribedataingestionjobresponse"></a>
<a id="tocsdescribedataingestionjobresponse"></a>

```json
{
  "JobId": {},
  "DatasetArn": {},
  "IngestionInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {},
      "KeyPattern": {}
    }
  },
  "RoleArn": {},
  "CreatedAt": {},
  "Status": {},
  "FailedReason": {},
  "DataQualitySummary": {
    "InsufficientSensorData": {
      "MissingCompleteSensorData": {
        "AffectedSensorCount": {}
      },
      "SensorsWithShortDateRange": {
        "AffectedSensorCount": {}
      }
    },
    "MissingSensorData": {
      "AffectedSensorCount": {},
      "TotalNumberOfMissingValues": {}
    },
    "InvalidSensorData": {
      "AffectedSensorCount": {},
      "TotalNumberOfInvalidValues": {}
    },
    "UnsupportedTimestamps": {
      "TotalNumberOfUnsupportedTimestamps": {}
    },
    "DuplicateTimestamps": {
      "TotalNumberOfDuplicateTimestamps": {}
    }
  },
  "IngestedFilesSummary": {
    "TotalNumberOfFiles": {},
    "IngestedNumberOfFiles": {},
    "DiscardedFiles": {}
  },
  "StatusDetail": {},
  "IngestedDataSize": {},
  "DataStartTime": {},
  "DataEndTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|DatasetArn|object|false|none|none|
|IngestionInputConfiguration|object|false|none|none|
|RoleArn|object|false|none|none|
|CreatedAt|object|false|none|none|
|Status|object|false|none|none|
|FailedReason|object|false|none|none|
|DataQualitySummary|object|false|none|none|
|IngestedFilesSummary|[IngestedFilesSummary](#schemaingestedfilessummary)|false|none|Gives statistics about how many files have been ingested, and which files have not been ingested, for a particular ingestion job.|
|StatusDetail|object|false|none|none|
|IngestedDataSize|object|false|none|none|
|DataStartTime|object|false|none|none|
|DataEndTime|object|false|none|none|

<h2 id="tocS_DescribeDataIngestionJobRequest">DescribeDataIngestionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedataingestionjobrequest"></a>
<a id="schema_DescribeDataIngestionJobRequest"></a>
<a id="tocSdescribedataingestionjobrequest"></a>
<a id="tocsdescribedataingestionjobrequest"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|

<h2 id="tocS_DescribeDatasetResponse">DescribeDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetresponse"></a>
<a id="schema_DescribeDatasetResponse"></a>
<a id="tocSdescribedatasetresponse"></a>
<a id="tocsdescribedatasetresponse"></a>

```json
{
  "DatasetName": {},
  "DatasetArn": {},
  "CreatedAt": {},
  "LastUpdatedAt": {},
  "Status": {},
  "Schema": {},
  "ServerSideKmsKeyId": {},
  "IngestionInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {},
      "KeyPattern": {}
    }
  },
  "DataQualitySummary": {
    "InsufficientSensorData": {
      "MissingCompleteSensorData": {
        "AffectedSensorCount": {}
      },
      "SensorsWithShortDateRange": {
        "AffectedSensorCount": {}
      }
    },
    "MissingSensorData": {
      "AffectedSensorCount": {},
      "TotalNumberOfMissingValues": {}
    },
    "InvalidSensorData": {
      "AffectedSensorCount": {},
      "TotalNumberOfInvalidValues": {}
    },
    "UnsupportedTimestamps": {
      "TotalNumberOfUnsupportedTimestamps": {}
    },
    "DuplicateTimestamps": {
      "TotalNumberOfDuplicateTimestamps": {}
    }
  },
  "IngestedFilesSummary": {
    "TotalNumberOfFiles": {},
    "IngestedNumberOfFiles": {},
    "DiscardedFiles": {}
  },
  "RoleArn": {},
  "DataStartTime": {},
  "DataEndTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetName|object|false|none|none|
|DatasetArn|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|object|false|none|none|
|Status|object|false|none|none|
|Schema|object|false|none|none|
|ServerSideKmsKeyId|object|false|none|none|
|IngestionInputConfiguration|object|false|none|none|
|DataQualitySummary|object|false|none|none|
|IngestedFilesSummary|object|false|none|none|
|RoleArn|object|false|none|none|
|DataStartTime|object|false|none|none|
|DataEndTime|object|false|none|none|

<h2 id="tocS_DescribeDatasetRequest">DescribeDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedatasetrequest"></a>
<a id="schema_DescribeDatasetRequest"></a>
<a id="tocSdescribedatasetrequest"></a>
<a id="tocsdescribedatasetrequest"></a>

```json
{
  "DatasetName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetName|object|true|none|none|

<h2 id="tocS_DescribeInferenceSchedulerResponse">DescribeInferenceSchedulerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinferenceschedulerresponse"></a>
<a id="schema_DescribeInferenceSchedulerResponse"></a>
<a id="tocSdescribeinferenceschedulerresponse"></a>
<a id="tocsdescribeinferenceschedulerresponse"></a>

```json
{
  "ModelArn": {},
  "ModelName": {},
  "InferenceSchedulerName": {},
  "InferenceSchedulerArn": {},
  "Status": {},
  "DataDelayOffsetInMinutes": {},
  "DataUploadFrequency": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "DataInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "InputTimeZoneOffset": {},
    "InferenceInputNameConfiguration": {
      "TimestampFormat": {},
      "ComponentTimestampDelimiter": {}
    }
  },
  "DataOutputConfiguration": {
    "S3OutputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "KmsKeyId": {}
  },
  "RoleArn": {},
  "ServerSideKmsKeyId": {},
  "LatestInferenceResult": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelArn|object|false|none|none|
|ModelName|object|false|none|none|
|InferenceSchedulerName|object|false|none|none|
|InferenceSchedulerArn|object|false|none|none|
|Status|object|false|none|none|
|DataDelayOffsetInMinutes|object|false|none|none|
|DataUploadFrequency|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|
|DataInputConfiguration|object|false|none|none|
|DataOutputConfiguration|object|false|none|none|
|RoleArn|object|false|none|none|
|ServerSideKmsKeyId|object|false|none|none|
|LatestInferenceResult|object|false|none|none|

<h2 id="tocS_DescribeInferenceSchedulerRequest">DescribeInferenceSchedulerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinferenceschedulerrequest"></a>
<a id="schema_DescribeInferenceSchedulerRequest"></a>
<a id="tocSdescribeinferenceschedulerrequest"></a>
<a id="tocsdescribeinferenceschedulerrequest"></a>

```json
{
  "InferenceSchedulerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InferenceSchedulerName|object|true|none|none|

<h2 id="tocS_DescribeLabelResponse">DescribeLabelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelabelresponse"></a>
<a id="schema_DescribeLabelResponse"></a>
<a id="tocSdescribelabelresponse"></a>
<a id="tocsdescribelabelresponse"></a>

```json
{
  "LabelGroupName": {},
  "LabelGroupArn": {},
  "LabelId": {},
  "StartTime": {},
  "EndTime": {},
  "Rating": {},
  "FaultCode": {},
  "Notes": {},
  "Equipment": {},
  "CreatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupName|object|false|none|none|
|LabelGroupArn|object|false|none|none|
|LabelId|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Rating|object|false|none|none|
|FaultCode|object|false|none|none|
|Notes|object|false|none|none|
|Equipment|object|false|none|none|
|CreatedAt|object|false|none|none|

<h2 id="tocS_DescribeLabelRequest">DescribeLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelabelrequest"></a>
<a id="schema_DescribeLabelRequest"></a>
<a id="tocSdescribelabelrequest"></a>
<a id="tocsdescribelabelrequest"></a>

```json
{
  "LabelGroupName": {},
  "LabelId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupName|object|true|none|none|
|LabelId|object|true|none|none|

<h2 id="tocS_DescribeLabelGroupResponse">DescribeLabelGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelabelgroupresponse"></a>
<a id="schema_DescribeLabelGroupResponse"></a>
<a id="tocSdescribelabelgroupresponse"></a>
<a id="tocsdescribelabelgroupresponse"></a>

```json
{
  "LabelGroupName": {},
  "LabelGroupArn": {},
  "FaultCodes": {},
  "CreatedAt": {},
  "UpdatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupName|object|false|none|none|
|LabelGroupArn|object|false|none|none|
|FaultCodes|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_DescribeLabelGroupRequest">DescribeLabelGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelabelgrouprequest"></a>
<a id="schema_DescribeLabelGroupRequest"></a>
<a id="tocSdescribelabelgrouprequest"></a>
<a id="tocsdescribelabelgrouprequest"></a>

```json
{
  "LabelGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupName|object|true|none|none|

<h2 id="tocS_DescribeModelResponse">DescribeModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemodelresponse"></a>
<a id="schema_DescribeModelResponse"></a>
<a id="tocSdescribemodelresponse"></a>
<a id="tocsdescribemodelresponse"></a>

```json
{
  "ModelName": {},
  "ModelArn": {},
  "DatasetName": {},
  "DatasetArn": {},
  "Schema": {},
  "LabelsInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "LabelGroupName": {}
  },
  "TrainingDataStartTime": {},
  "TrainingDataEndTime": {},
  "EvaluationDataStartTime": {},
  "EvaluationDataEndTime": {},
  "RoleArn": {},
  "DataPreProcessingConfiguration": {
    "TargetSamplingRate": {}
  },
  "Status": {},
  "TrainingExecutionStartTime": {},
  "TrainingExecutionEndTime": {},
  "FailedReason": {},
  "ModelMetrics": {},
  "LastUpdatedTime": {},
  "CreatedAt": {},
  "ServerSideKmsKeyId": {},
  "OffCondition": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelName|object|false|none|none|
|ModelArn|object|false|none|none|
|DatasetName|object|false|none|none|
|DatasetArn|object|false|none|none|
|Schema|object|false|none|none|
|LabelsInputConfiguration|object|false|none|none|
|TrainingDataStartTime|object|false|none|none|
|TrainingDataEndTime|object|false|none|none|
|EvaluationDataStartTime|object|false|none|none|
|EvaluationDataEndTime|object|false|none|none|
|RoleArn|object|false|none|none|
|DataPreProcessingConfiguration|object|false|none|none|
|Status|object|false|none|none|
|TrainingExecutionStartTime|object|false|none|none|
|TrainingExecutionEndTime|object|false|none|none|
|FailedReason|object|false|none|none|
|ModelMetrics|object|false|none|none|
|LastUpdatedTime|object|false|none|none|
|CreatedAt|object|false|none|none|
|ServerSideKmsKeyId|object|false|none|none|
|OffCondition|object|false|none|none|

<h2 id="tocS_DescribeModelRequest">DescribeModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemodelrequest"></a>
<a id="schema_DescribeModelRequest"></a>
<a id="tocSdescribemodelrequest"></a>
<a id="tocsdescribemodelrequest"></a>

```json
{
  "ModelName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelName|object|true|none|none|

<h2 id="tocS_ListDataIngestionJobsResponse">ListDataIngestionJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdataingestionjobsresponse"></a>
<a id="schema_ListDataIngestionJobsResponse"></a>
<a id="tocSlistdataingestionjobsresponse"></a>
<a id="tocslistdataingestionjobsresponse"></a>

```json
{
  "NextToken": {},
  "DataIngestionJobSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|DataIngestionJobSummaries|object|false|none|none|

<h2 id="tocS_ListDataIngestionJobsRequest">ListDataIngestionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdataingestionjobsrequest"></a>
<a id="schema_ListDataIngestionJobsRequest"></a>
<a id="tocSlistdataingestionjobsrequest"></a>
<a id="tocslistdataingestionjobsrequest"></a>

```json
{
  "DatasetName": {},
  "NextToken": {},
  "MaxResults": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetName|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ListDatasetsResponse">ListDatasetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsresponse"></a>
<a id="schema_ListDatasetsResponse"></a>
<a id="tocSlistdatasetsresponse"></a>
<a id="tocslistdatasetsresponse"></a>

```json
{
  "NextToken": {},
  "DatasetSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|DatasetSummaries|object|false|none|none|

<h2 id="tocS_ListDatasetsRequest">ListDatasetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsrequest"></a>
<a id="schema_ListDatasetsRequest"></a>
<a id="tocSlistdatasetsrequest"></a>
<a id="tocslistdatasetsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "DatasetNameBeginsWith": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|DatasetNameBeginsWith|object|false|none|none|

<h2 id="tocS_ListInferenceEventsResponse">ListInferenceEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinferenceeventsresponse"></a>
<a id="schema_ListInferenceEventsResponse"></a>
<a id="tocSlistinferenceeventsresponse"></a>
<a id="tocslistinferenceeventsresponse"></a>

```json
{
  "NextToken": {},
  "InferenceEventSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|InferenceEventSummaries|object|false|none|none|

<h2 id="tocS_ListInferenceEventsRequest">ListInferenceEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinferenceeventsrequest"></a>
<a id="schema_ListInferenceEventsRequest"></a>
<a id="tocSlistinferenceeventsrequest"></a>
<a id="tocslistinferenceeventsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "InferenceSchedulerName": {},
  "IntervalStartTime": {},
  "IntervalEndTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|InferenceSchedulerName|object|true|none|none|
|IntervalStartTime|object|true|none|none|
|IntervalEndTime|object|true|none|none|

<h2 id="tocS_ListInferenceExecutionsResponse">ListInferenceExecutionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinferenceexecutionsresponse"></a>
<a id="schema_ListInferenceExecutionsResponse"></a>
<a id="tocSlistinferenceexecutionsresponse"></a>
<a id="tocslistinferenceexecutionsresponse"></a>

```json
{
  "NextToken": {},
  "InferenceExecutionSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|InferenceExecutionSummaries|object|false|none|none|

<h2 id="tocS_ListInferenceExecutionsRequest">ListInferenceExecutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinferenceexecutionsrequest"></a>
<a id="schema_ListInferenceExecutionsRequest"></a>
<a id="tocSlistinferenceexecutionsrequest"></a>
<a id="tocslistinferenceexecutionsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "InferenceSchedulerName": {},
  "DataStartTimeAfter": {},
  "DataEndTimeBefore": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|InferenceSchedulerName|object|true|none|none|
|DataStartTimeAfter|object|false|none|none|
|DataEndTimeBefore|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ListInferenceSchedulersResponse">ListInferenceSchedulersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinferenceschedulersresponse"></a>
<a id="schema_ListInferenceSchedulersResponse"></a>
<a id="tocSlistinferenceschedulersresponse"></a>
<a id="tocslistinferenceschedulersresponse"></a>

```json
{
  "NextToken": {},
  "InferenceSchedulerSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|InferenceSchedulerSummaries|object|false|none|none|

<h2 id="tocS_ListInferenceSchedulersRequest">ListInferenceSchedulersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinferenceschedulersrequest"></a>
<a id="schema_ListInferenceSchedulersRequest"></a>
<a id="tocSlistinferenceschedulersrequest"></a>
<a id="tocslistinferenceschedulersrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "InferenceSchedulerNameBeginsWith": {},
  "ModelName": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|InferenceSchedulerNameBeginsWith|object|false|none|none|
|ModelName|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ListLabelGroupsResponse">ListLabelGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlabelgroupsresponse"></a>
<a id="schema_ListLabelGroupsResponse"></a>
<a id="tocSlistlabelgroupsresponse"></a>
<a id="tocslistlabelgroupsresponse"></a>

```json
{
  "NextToken": {},
  "LabelGroupSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|LabelGroupSummaries|object|false|none|none|

<h2 id="tocS_ListLabelGroupsRequest">ListLabelGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlabelgroupsrequest"></a>
<a id="schema_ListLabelGroupsRequest"></a>
<a id="tocSlistlabelgroupsrequest"></a>
<a id="tocslistlabelgroupsrequest"></a>

```json
{
  "LabelGroupNameBeginsWith": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupNameBeginsWith|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListLabelsResponse">ListLabelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlabelsresponse"></a>
<a id="schema_ListLabelsResponse"></a>
<a id="tocSlistlabelsresponse"></a>
<a id="tocslistlabelsresponse"></a>

```json
{
  "NextToken": {},
  "LabelSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|LabelSummaries|object|false|none|none|

<h2 id="tocS_ListLabelsRequest">ListLabelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlabelsrequest"></a>
<a id="schema_ListLabelsRequest"></a>
<a id="tocSlistlabelsrequest"></a>
<a id="tocslistlabelsrequest"></a>

```json
{
  "LabelGroupName": {},
  "IntervalStartTime": {},
  "IntervalEndTime": {},
  "FaultCode": {},
  "Equipment": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupName|object|true|none|none|
|IntervalStartTime|object|false|none|none|
|IntervalEndTime|object|false|none|none|
|FaultCode|object|false|none|none|
|Equipment|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListModelsResponse">ListModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelsresponse"></a>
<a id="schema_ListModelsResponse"></a>
<a id="tocSlistmodelsresponse"></a>
<a id="tocslistmodelsresponse"></a>

```json
{
  "NextToken": {},
  "ModelSummaries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ModelSummaries|object|false|none|none|

<h2 id="tocS_ListModelsRequest">ListModelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelsrequest"></a>
<a id="schema_ListModelsRequest"></a>
<a id="tocSlistmodelsrequest"></a>
<a id="tocslistmodelsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Status": {},
  "ModelNameBeginsWith": {},
  "DatasetNameBeginsWith": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Status|object|false|none|none|
|ModelNameBeginsWith|object|false|none|none|
|DatasetNameBeginsWith|object|false|none|none|

<h2 id="tocS_ListSensorStatisticsResponse">ListSensorStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsensorstatisticsresponse"></a>
<a id="schema_ListSensorStatisticsResponse"></a>
<a id="tocSlistsensorstatisticsresponse"></a>
<a id="tocslistsensorstatisticsresponse"></a>

```json
{
  "SensorStatisticsSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SensorStatisticsSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSensorStatisticsRequest">ListSensorStatisticsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsensorstatisticsrequest"></a>
<a id="schema_ListSensorStatisticsRequest"></a>
<a id="tocSlistsensorstatisticsrequest"></a>
<a id="tocslistsensorstatisticsrequest"></a>

```json
{
  "DatasetName": {},
  "IngestionJobId": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetName|object|true|none|none|
|IngestionJobId|object|false|none|none|
|MaxResults|object|false|none|none|
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
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_StartDataIngestionJobResponse">StartDataIngestionJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartdataingestionjobresponse"></a>
<a id="schema_StartDataIngestionJobResponse"></a>
<a id="tocSstartdataingestionjobresponse"></a>
<a id="tocsstartdataingestionjobresponse"></a>

```json
{
  "JobId": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_StartDataIngestionJobRequest">StartDataIngestionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartdataingestionjobrequest"></a>
<a id="schema_StartDataIngestionJobRequest"></a>
<a id="tocSstartdataingestionjobrequest"></a>
<a id="tocsstartdataingestionjobrequest"></a>

```json
{
  "DatasetName": {},
  "IngestionInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {},
      "KeyPattern": {}
    }
  },
  "RoleArn": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetName|object|true|none|none|
|IngestionInputConfiguration|object|true|none|none|
|RoleArn|object|true|none|none|
|ClientToken|object|true|none|none|

<h2 id="tocS_StartInferenceSchedulerResponse">StartInferenceSchedulerResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartinferenceschedulerresponse"></a>
<a id="schema_StartInferenceSchedulerResponse"></a>
<a id="tocSstartinferenceschedulerresponse"></a>
<a id="tocsstartinferenceschedulerresponse"></a>

```json
{
  "ModelArn": {},
  "ModelName": {},
  "InferenceSchedulerName": {},
  "InferenceSchedulerArn": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelArn|object|false|none|none|
|ModelName|object|false|none|none|
|InferenceSchedulerName|object|false|none|none|
|InferenceSchedulerArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_StartInferenceSchedulerRequest">StartInferenceSchedulerRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartinferenceschedulerrequest"></a>
<a id="schema_StartInferenceSchedulerRequest"></a>
<a id="tocSstartinferenceschedulerrequest"></a>
<a id="tocsstartinferenceschedulerrequest"></a>

```json
{
  "InferenceSchedulerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InferenceSchedulerName|object|true|none|none|

<h2 id="tocS_StopInferenceSchedulerResponse">StopInferenceSchedulerResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopinferenceschedulerresponse"></a>
<a id="schema_StopInferenceSchedulerResponse"></a>
<a id="tocSstopinferenceschedulerresponse"></a>
<a id="tocsstopinferenceschedulerresponse"></a>

```json
{
  "ModelArn": {},
  "ModelName": {},
  "InferenceSchedulerName": {},
  "InferenceSchedulerArn": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelArn|object|false|none|none|
|ModelName|object|false|none|none|
|InferenceSchedulerName|object|false|none|none|
|InferenceSchedulerArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_StopInferenceSchedulerRequest">StopInferenceSchedulerRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopinferenceschedulerrequest"></a>
<a id="schema_StopInferenceSchedulerRequest"></a>
<a id="tocSstopinferenceschedulerrequest"></a>
<a id="tocsstopinferenceschedulerrequest"></a>

```json
{
  "InferenceSchedulerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InferenceSchedulerName|object|true|none|none|

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

<h2 id="tocS_UpdateInferenceSchedulerRequest">UpdateInferenceSchedulerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinferenceschedulerrequest"></a>
<a id="schema_UpdateInferenceSchedulerRequest"></a>
<a id="tocSupdateinferenceschedulerrequest"></a>
<a id="tocsupdateinferenceschedulerrequest"></a>

```json
{
  "InferenceSchedulerName": {},
  "DataDelayOffsetInMinutes": {},
  "DataUploadFrequency": {},
  "DataInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "InputTimeZoneOffset": {},
    "InferenceInputNameConfiguration": {
      "TimestampFormat": {},
      "ComponentTimestampDelimiter": {}
    }
  },
  "DataOutputConfiguration": {
    "S3OutputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "KmsKeyId": {}
  },
  "RoleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InferenceSchedulerName|object|true|none|none|
|DataDelayOffsetInMinutes|object|false|none|none|
|DataUploadFrequency|object|false|none|none|
|DataInputConfiguration|object|false|none|none|
|DataOutputConfiguration|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_UpdateLabelGroupRequest">UpdateLabelGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelabelgrouprequest"></a>
<a id="schema_UpdateLabelGroupRequest"></a>
<a id="tocSupdatelabelgrouprequest"></a>
<a id="tocsupdatelabelgrouprequest"></a>

```json
{
  "LabelGroupName": {},
  "FaultCodes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupName|object|true|none|none|
|FaultCodes|object|false|none|none|

<h2 id="tocS_AmazonResourceArn">AmazonResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcearn"></a>
<a id="schema_AmazonResourceArn"></a>
<a id="tocSamazonresourcearn"></a>
<a id="tocsamazonresourcearn"></a>

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

<h2 id="tocS_BoundedLengthString">BoundedLengthString</h2>
<!-- backwards compatibility -->
<a id="schemaboundedlengthstring"></a>
<a id="schema_BoundedLengthString"></a>
<a id="tocSboundedlengthstring"></a>
<a id="tocsboundedlengthstring"></a>

```json
"string"
```

<h2 id="tocS_StatisticalIssueStatus">StatisticalIssueStatus</h2>
<!-- backwards compatibility -->
<a id="schemastatisticalissuestatus"></a>
<a id="schema_StatisticalIssueStatus"></a>
<a id="tocSstatisticalissuestatus"></a>
<a id="tocsstatisticalissuestatus"></a>

```json
"POTENTIAL_ISSUE_DETECTED"
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

<h2 id="tocS_CategoricalValues">CategoricalValues</h2>
<!-- backwards compatibility -->
<a id="schemacategoricalvalues"></a>
<a id="schema_CategoricalValues"></a>
<a id="tocScategoricalvalues"></a>
<a id="tocscategoricalvalues"></a>

```json
{
  "Status": {},
  "NumberOfCategory": {}
}
```

 Entity that comprises information on categorical values in data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|NumberOfCategory|object|false|none|none|

<h2 id="tocS_Comments">Comments</h2>
<!-- backwards compatibility -->
<a id="schemacomments"></a>
<a id="schema_Comments"></a>
<a id="tocScomments"></a>
<a id="tocscomments"></a>

```json
"string"
```

<h2 id="tocS_ComponentName">ComponentName</h2>
<!-- backwards compatibility -->
<a id="schemacomponentname"></a>
<a id="schema_ComponentName"></a>
<a id="tocScomponentname"></a>
<a id="tocscomponentname"></a>

```json
"string"
```

<h2 id="tocS_ComponentTimestampDelimiter">ComponentTimestampDelimiter</h2>
<!-- backwards compatibility -->
<a id="schemacomponenttimestampdelimiter"></a>
<a id="schema_ComponentTimestampDelimiter"></a>
<a id="tocScomponenttimestampdelimiter"></a>
<a id="tocscomponenttimestampdelimiter"></a>

```json
"s"
```

<h2 id="tocS_Float">Float</h2>
<!-- backwards compatibility -->
<a id="schemafloat"></a>
<a id="schema_Float"></a>
<a id="tocSfloat"></a>
<a id="tocsfloat"></a>

```json
0
```

<h2 id="tocS_CountPercent">CountPercent</h2>
<!-- backwards compatibility -->
<a id="schemacountpercent"></a>
<a id="schema_CountPercent"></a>
<a id="tocScountpercent"></a>
<a id="tocscountpercent"></a>

```json
{
  "Count": {},
  "Percentage": {}
}
```

 Entity that comprises information of count and percentage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|object|true|none|none|
|Percentage|object|true|none|none|

<h2 id="tocS_DatasetName">DatasetName</h2>
<!-- backwards compatibility -->
<a id="schemadatasetname"></a>
<a id="schema_DatasetName"></a>
<a id="tocSdatasetname"></a>
<a id="tocsdatasetname"></a>

```json
"string"
```

<h2 id="tocS_DatasetSchema">DatasetSchema</h2>
<!-- backwards compatibility -->
<a id="schemadatasetschema"></a>
<a id="schema_DatasetSchema"></a>
<a id="tocSdatasetschema"></a>
<a id="tocsdatasetschema"></a>

```json
{
  "InlineDataSchema": {}
}
```

Provides information about the data schema used with the given dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InlineDataSchema|object|false|none|none|

<h2 id="tocS_NameOrArn">NameOrArn</h2>
<!-- backwards compatibility -->
<a id="schemanameorarn"></a>
<a id="schema_NameOrArn"></a>
<a id="tocSnameorarn"></a>
<a id="tocsnameorarn"></a>

```json
"string"
```

<h2 id="tocS_IdempotenceToken">IdempotenceToken</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencetoken"></a>
<a id="schema_IdempotenceToken"></a>
<a id="tocSidempotencetoken"></a>
<a id="tocsidempotencetoken"></a>

```json
"string"
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

<h2 id="tocS_DatasetArn">DatasetArn</h2>
<!-- backwards compatibility -->
<a id="schemadatasetarn"></a>
<a id="schema_DatasetArn"></a>
<a id="tocSdatasetarn"></a>
<a id="tocsdatasetarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_DatasetStatus">DatasetStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatasetstatus"></a>
<a id="schema_DatasetStatus"></a>
<a id="tocSdatasetstatus"></a>
<a id="tocsdatasetstatus"></a>

```json
"CREATED"
```

<h2 id="tocS_ModelName">ModelName</h2>
<!-- backwards compatibility -->
<a id="schemamodelname"></a>
<a id="schema_ModelName"></a>
<a id="tocSmodelname"></a>
<a id="tocsmodelname"></a>

```json
"string"
```

<h2 id="tocS_InferenceSchedulerName">InferenceSchedulerName</h2>
<!-- backwards compatibility -->
<a id="schemainferenceschedulername"></a>
<a id="schema_InferenceSchedulerName"></a>
<a id="tocSinferenceschedulername"></a>
<a id="tocsinferenceschedulername"></a>

```json
"string"
```

<h2 id="tocS_DataDelayOffsetInMinutes">DataDelayOffsetInMinutes</h2>
<!-- backwards compatibility -->
<a id="schemadatadelayoffsetinminutes"></a>
<a id="schema_DataDelayOffsetInMinutes"></a>
<a id="tocSdatadelayoffsetinminutes"></a>
<a id="tocsdatadelayoffsetinminutes"></a>

```json
0
```

<h2 id="tocS_DataUploadFrequency">DataUploadFrequency</h2>
<!-- backwards compatibility -->
<a id="schemadatauploadfrequency"></a>
<a id="schema_DataUploadFrequency"></a>
<a id="tocSdatauploadfrequency"></a>
<a id="tocsdatauploadfrequency"></a>

```json
"PT5M"
```

<h2 id="tocS_InferenceInputConfiguration">InferenceInputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainferenceinputconfiguration"></a>
<a id="schema_InferenceInputConfiguration"></a>
<a id="tocSinferenceinputconfiguration"></a>
<a id="tocsinferenceinputconfiguration"></a>

```json
{
  "S3InputConfiguration": {
    "Bucket": {},
    "Prefix": {}
  },
  "InputTimeZoneOffset": {},
  "InferenceInputNameConfiguration": {
    "TimestampFormat": {},
    "ComponentTimestampDelimiter": {}
  }
}
```

Specifies configuration information for the input data for the inference, including Amazon S3 location of input data..

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3InputConfiguration|object|false|none|none|
|InputTimeZoneOffset|object|false|none|none|
|InferenceInputNameConfiguration|object|false|none|none|

<h2 id="tocS_InferenceOutputConfiguration">InferenceOutputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainferenceoutputconfiguration"></a>
<a id="schema_InferenceOutputConfiguration"></a>
<a id="tocSinferenceoutputconfiguration"></a>
<a id="tocsinferenceoutputconfiguration"></a>

```json
{
  "S3OutputConfiguration": {
    "Bucket": {},
    "Prefix": {}
  },
  "KmsKeyId": {}
}
```

 Specifies configuration information for the output results from for the inference, including KMS key ID and output S3 location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3OutputConfiguration|object|true|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_IamRoleArn">IamRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IamRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_InferenceSchedulerArn">InferenceSchedulerArn</h2>
<!-- backwards compatibility -->
<a id="schemainferenceschedulerarn"></a>
<a id="schema_InferenceSchedulerArn"></a>
<a id="tocSinferenceschedulerarn"></a>
<a id="tocsinferenceschedulerarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_InferenceSchedulerStatus">InferenceSchedulerStatus</h2>
<!-- backwards compatibility -->
<a id="schemainferenceschedulerstatus"></a>
<a id="schema_InferenceSchedulerStatus"></a>
<a id="tocSinferenceschedulerstatus"></a>
<a id="tocsinferenceschedulerstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_LabelGroupName">LabelGroupName</h2>
<!-- backwards compatibility -->
<a id="schemalabelgroupname"></a>
<a id="schema_LabelGroupName"></a>
<a id="tocSlabelgroupname"></a>
<a id="tocslabelgroupname"></a>

```json
"string"
```

<h2 id="tocS_FaultCodes">FaultCodes</h2>
<!-- backwards compatibility -->
<a id="schemafaultcodes"></a>
<a id="schema_FaultCodes"></a>
<a id="tocSfaultcodes"></a>
<a id="tocsfaultcodes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LabelGroupArn">LabelGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemalabelgrouparn"></a>
<a id="schema_LabelGroupArn"></a>
<a id="tocSlabelgrouparn"></a>
<a id="tocslabelgrouparn"></a>

```json
"stringstringstringst"
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

<h2 id="tocS_LabelRating">LabelRating</h2>
<!-- backwards compatibility -->
<a id="schemalabelrating"></a>
<a id="schema_LabelRating"></a>
<a id="tocSlabelrating"></a>
<a id="tocslabelrating"></a>

```json
"ANOMALY"
```

<h2 id="tocS_FaultCode">FaultCode</h2>
<!-- backwards compatibility -->
<a id="schemafaultcode"></a>
<a id="schema_FaultCode"></a>
<a id="tocSfaultcode"></a>
<a id="tocsfaultcode"></a>

```json
"string"
```

<h2 id="tocS_Equipment">Equipment</h2>
<!-- backwards compatibility -->
<a id="schemaequipment"></a>
<a id="schema_Equipment"></a>
<a id="tocSequipment"></a>
<a id="tocsequipment"></a>

```json
"string"
```

<h2 id="tocS_LabelId">LabelId</h2>
<!-- backwards compatibility -->
<a id="schemalabelid"></a>
<a id="schema_LabelId"></a>
<a id="tocSlabelid"></a>
<a id="tocslabelid"></a>

```json
"string"
```

<h2 id="tocS_DatasetIdentifier">DatasetIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemadatasetidentifier"></a>
<a id="schema_DatasetIdentifier"></a>
<a id="tocSdatasetidentifier"></a>
<a id="tocsdatasetidentifier"></a>

```json
"string"
```

<h2 id="tocS_LabelsInputConfiguration">LabelsInputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalabelsinputconfiguration"></a>
<a id="schema_LabelsInputConfiguration"></a>
<a id="tocSlabelsinputconfiguration"></a>
<a id="tocslabelsinputconfiguration"></a>

```json
{
  "S3InputConfiguration": {
    "Bucket": {},
    "Prefix": {}
  },
  "LabelGroupName": {}
}
```

Contains the configuration information for the S3 location being used to hold label data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3InputConfiguration|object|false|none|none|
|LabelGroupName|object|false|none|none|

<h2 id="tocS_DataPreProcessingConfiguration">DataPreProcessingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadatapreprocessingconfiguration"></a>
<a id="schema_DataPreProcessingConfiguration"></a>
<a id="tocSdatapreprocessingconfiguration"></a>
<a id="tocsdatapreprocessingconfiguration"></a>

```json
{
  "TargetSamplingRate": {}
}
```

<p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p> <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>, and the value for a 1 hour rate is <i>PT1H</i> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetSamplingRate|object|false|none|none|

<h2 id="tocS_OffCondition">OffCondition</h2>
<!-- backwards compatibility -->
<a id="schemaoffcondition"></a>
<a id="schema_OffCondition"></a>
<a id="tocSoffcondition"></a>
<a id="tocsoffcondition"></a>

```json
"string"
```

<h2 id="tocS_ModelArn">ModelArn</h2>
<!-- backwards compatibility -->
<a id="schemamodelarn"></a>
<a id="schema_ModelArn"></a>
<a id="tocSmodelarn"></a>
<a id="tocsmodelarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_ModelStatus">ModelStatus</h2>
<!-- backwards compatibility -->
<a id="schemamodelstatus"></a>
<a id="schema_ModelStatus"></a>
<a id="tocSmodelstatus"></a>
<a id="tocsmodelstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_DataIngestionJobSummary">DataIngestionJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemadataingestionjobsummary"></a>
<a id="schema_DataIngestionJobSummary"></a>
<a id="tocSdataingestionjobsummary"></a>
<a id="tocsdataingestionjobsummary"></a>

```json
{
  "JobId": {},
  "DatasetName": {},
  "DatasetArn": {},
  "IngestionInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {},
      "KeyPattern": {}
    }
  },
  "Status": {}
}
```

Provides information about a specified data ingestion job, including dataset information, data ingestion configuration, and status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|DatasetName|object|false|none|none|
|DatasetArn|object|false|none|none|
|IngestionInputConfiguration|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_DataIngestionJobSummaries">DataIngestionJobSummaries</h2>
<!-- backwards compatibility -->
<a id="schemadataingestionjobsummaries"></a>
<a id="schema_DataIngestionJobSummaries"></a>
<a id="tocSdataingestionjobsummaries"></a>
<a id="tocsdataingestionjobsummaries"></a>

```json
[
  {
    "JobId": {},
    "DatasetName": {},
    "DatasetArn": {},
    "IngestionInputConfiguration": {
      "S3InputConfiguration": {
        "Bucket": {},
        "Prefix": {},
        "KeyPattern": {}
      }
    },
    "Status": {}
  }
]
```

<h2 id="tocS_IngestionJobId">IngestionJobId</h2>
<!-- backwards compatibility -->
<a id="schemaingestionjobid"></a>
<a id="schema_IngestionJobId"></a>
<a id="tocSingestionjobid"></a>
<a id="tocsingestionjobid"></a>

```json
"string"
```

<h2 id="tocS_IngestionInputConfiguration">IngestionInputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaingestioninputconfiguration"></a>
<a id="schema_IngestionInputConfiguration"></a>
<a id="tocSingestioninputconfiguration"></a>
<a id="tocsingestioninputconfiguration"></a>

```json
{
  "S3InputConfiguration": {
    "Bucket": {},
    "Prefix": {},
    "KeyPattern": {}
  }
}
```

 Specifies configuration information for the input data for the data ingestion job, including input data S3 location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3InputConfiguration|object|true|none|none|

<h2 id="tocS_IngestionJobStatus">IngestionJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemaingestionjobstatus"></a>
<a id="schema_IngestionJobStatus"></a>
<a id="tocSingestionjobstatus"></a>
<a id="tocsingestionjobstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_TargetSamplingRate">TargetSamplingRate</h2>
<!-- backwards compatibility -->
<a id="schematargetsamplingrate"></a>
<a id="schema_TargetSamplingRate"></a>
<a id="tocStargetsamplingrate"></a>
<a id="tocstargetsamplingrate"></a>

```json
"PT1S"
```

<h2 id="tocS_InsufficientSensorData">InsufficientSensorData</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientsensordata"></a>
<a id="schema_InsufficientSensorData"></a>
<a id="tocSinsufficientsensordata"></a>
<a id="tocsinsufficientsensordata"></a>

```json
{
  "MissingCompleteSensorData": {
    "AffectedSensorCount": {}
  },
  "SensorsWithShortDateRange": {
    "AffectedSensorCount": {}
  }
}
```

 Entity that comprises aggregated information on sensors having insufficient data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MissingCompleteSensorData|object|true|none|none|
|SensorsWithShortDateRange|object|true|none|none|

<h2 id="tocS_MissingSensorData">MissingSensorData</h2>
<!-- backwards compatibility -->
<a id="schemamissingsensordata"></a>
<a id="schema_MissingSensorData"></a>
<a id="tocSmissingsensordata"></a>
<a id="tocsmissingsensordata"></a>

```json
{
  "AffectedSensorCount": {},
  "TotalNumberOfMissingValues": {}
}
```

 Entity that comprises aggregated information on sensors having missing data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AffectedSensorCount|object|true|none|none|
|TotalNumberOfMissingValues|object|true|none|none|

<h2 id="tocS_InvalidSensorData">InvalidSensorData</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsensordata"></a>
<a id="schema_InvalidSensorData"></a>
<a id="tocSinvalidsensordata"></a>
<a id="tocsinvalidsensordata"></a>

```json
{
  "AffectedSensorCount": {},
  "TotalNumberOfInvalidValues": {}
}
```

 Entity that comprises aggregated information on sensors having insufficient data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AffectedSensorCount|object|true|none|none|
|TotalNumberOfInvalidValues|object|true|none|none|

<h2 id="tocS_UnsupportedTimestamps">UnsupportedTimestamps</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedtimestamps"></a>
<a id="schema_UnsupportedTimestamps"></a>
<a id="tocSunsupportedtimestamps"></a>
<a id="tocsunsupportedtimestamps"></a>

```json
{
  "TotalNumberOfUnsupportedTimestamps": {}
}
```

 Entity that comprises information abount unsupported timestamps in the dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalNumberOfUnsupportedTimestamps|object|true|none|none|

<h2 id="tocS_DuplicateTimestamps">DuplicateTimestamps</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatetimestamps"></a>
<a id="schema_DuplicateTimestamps"></a>
<a id="tocSduplicatetimestamps"></a>
<a id="tocsduplicatetimestamps"></a>

```json
{
  "TotalNumberOfDuplicateTimestamps": {}
}
```

 Entity that comprises information abount duplicate timestamps in the dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalNumberOfDuplicateTimestamps|object|true|none|none|

<h2 id="tocS_DataQualitySummary">DataQualitySummary</h2>
<!-- backwards compatibility -->
<a id="schemadataqualitysummary"></a>
<a id="schema_DataQualitySummary"></a>
<a id="tocSdataqualitysummary"></a>
<a id="tocsdataqualitysummary"></a>

```json
{
  "InsufficientSensorData": {
    "MissingCompleteSensorData": {
      "AffectedSensorCount": {}
    },
    "SensorsWithShortDateRange": {
      "AffectedSensorCount": {}
    }
  },
  "MissingSensorData": {
    "AffectedSensorCount": {},
    "TotalNumberOfMissingValues": {}
  },
  "InvalidSensorData": {
    "AffectedSensorCount": {},
    "TotalNumberOfInvalidValues": {}
  },
  "UnsupportedTimestamps": {
    "TotalNumberOfUnsupportedTimestamps": {}
  },
  "DuplicateTimestamps": {
    "TotalNumberOfDuplicateTimestamps": {}
  }
}
```

 DataQualitySummary gives aggregated statistics over all the sensors about a completed ingestion job. It primarily gives more information about statistics over different incorrect data like MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats, InsufficientSensorData, DuplicateTimeStamps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InsufficientSensorData|object|true|none|none|
|MissingSensorData|object|true|none|none|
|InvalidSensorData|object|true|none|none|
|UnsupportedTimestamps|object|true|none|none|
|DuplicateTimestamps|object|true|none|none|

<h2 id="tocS_DataSizeInBytes">DataSizeInBytes</h2>
<!-- backwards compatibility -->
<a id="schemadatasizeinbytes"></a>
<a id="schema_DataSizeInBytes"></a>
<a id="tocSdatasizeinbytes"></a>
<a id="tocsdatasizeinbytes"></a>

```json
0
```

<h2 id="tocS_InlineDataSchema">InlineDataSchema</h2>
<!-- backwards compatibility -->
<a id="schemainlinedataschema"></a>
<a id="schema_InlineDataSchema"></a>
<a id="tocSinlinedataschema"></a>
<a id="tocsinlinedataschema"></a>

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
  "DatasetName": {},
  "DatasetArn": {},
  "Status": {},
  "CreatedAt": {}
}
```

Contains information about the specific data set, including name, ARN, and status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatasetName|object|false|none|none|
|DatasetArn|object|false|none|none|
|Status|object|false|none|none|
|CreatedAt|object|false|none|none|

<h2 id="tocS_DatasetSummaries">DatasetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemadatasetsummaries"></a>
<a id="schema_DatasetSummaries"></a>
<a id="tocSdatasetsummaries"></a>
<a id="tocsdatasetsummaries"></a>

```json
[
  {
    "DatasetName": {},
    "DatasetArn": {},
    "Status": {},
    "CreatedAt": {}
  }
]
```

<h2 id="tocS_InferenceSchedulerIdentifier">InferenceSchedulerIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemainferencescheduleridentifier"></a>
<a id="schema_InferenceSchedulerIdentifier"></a>
<a id="tocSinferencescheduleridentifier"></a>
<a id="tocsinferencescheduleridentifier"></a>

```json
"string"
```

<h2 id="tocS_IngestedFilesSummary">IngestedFilesSummary</h2>
<!-- backwards compatibility -->
<a id="schemaingestedfilessummary"></a>
<a id="schema_IngestedFilesSummary"></a>
<a id="tocSingestedfilessummary"></a>
<a id="tocsingestedfilessummary"></a>

```json
{
  "TotalNumberOfFiles": {},
  "IngestedNumberOfFiles": {},
  "DiscardedFiles": {}
}
```

Gives statistics about how many files have been ingested, and which files have not been ingested, for a particular ingestion job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalNumberOfFiles|object|true|none|none|
|IngestedNumberOfFiles|object|true|none|none|
|DiscardedFiles|object|false|none|none|

<h2 id="tocS_KmsKeyArn">KmsKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarn"></a>
<a id="schema_KmsKeyArn"></a>
<a id="tocSkmskeyarn"></a>
<a id="tocskmskeyarn"></a>

```json
"string"
```

<h2 id="tocS_LatestInferenceResult">LatestInferenceResult</h2>
<!-- backwards compatibility -->
<a id="schemalatestinferenceresult"></a>
<a id="schema_LatestInferenceResult"></a>
<a id="tocSlatestinferenceresult"></a>
<a id="tocslatestinferenceresult"></a>

```json
"ANOMALOUS"
```

<h2 id="tocS_ModelMetrics">ModelMetrics</h2>
<!-- backwards compatibility -->
<a id="schemamodelmetrics"></a>
<a id="schema_ModelMetrics"></a>
<a id="tocSmodelmetrics"></a>
<a id="tocsmodelmetrics"></a>

```json
"string"
```

<h2 id="tocS_EventDurationInSeconds">EventDurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaeventdurationinseconds"></a>
<a id="schema_EventDurationInSeconds"></a>
<a id="tocSeventdurationinseconds"></a>
<a id="tocseventdurationinseconds"></a>

```json
0
```

<h2 id="tocS_FileNameTimestampFormat">FileNameTimestampFormat</h2>
<!-- backwards compatibility -->
<a id="schemafilenametimestampformat"></a>
<a id="schema_FileNameTimestampFormat"></a>
<a id="tocSfilenametimestampformat"></a>
<a id="tocsfilenametimestampformat"></a>

```json
"string"
```

<h2 id="tocS_InferenceEventSummary">InferenceEventSummary</h2>
<!-- backwards compatibility -->
<a id="schemainferenceeventsummary"></a>
<a id="schema_InferenceEventSummary"></a>
<a id="tocSinferenceeventsummary"></a>
<a id="tocsinferenceeventsummary"></a>

```json
{
  "InferenceSchedulerArn": {},
  "InferenceSchedulerName": {},
  "EventStartTime": {},
  "EventEndTime": {},
  "Diagnostics": {},
  "EventDurationInSeconds": {}
}
```

Contains information about the specific inference event, including start and end time, diagnostics information, event duration and so on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InferenceSchedulerArn|object|false|none|none|
|InferenceSchedulerName|object|false|none|none|
|EventStartTime|object|false|none|none|
|EventEndTime|object|false|none|none|
|Diagnostics|object|false|none|none|
|EventDurationInSeconds|object|false|none|none|

<h2 id="tocS_InferenceEventSummaries">InferenceEventSummaries</h2>
<!-- backwards compatibility -->
<a id="schemainferenceeventsummaries"></a>
<a id="schema_InferenceEventSummaries"></a>
<a id="tocSinferenceeventsummaries"></a>
<a id="tocsinferenceeventsummaries"></a>

```json
[
  {
    "InferenceSchedulerArn": {},
    "InferenceSchedulerName": {},
    "EventStartTime": {},
    "EventEndTime": {},
    "Diagnostics": {},
    "EventDurationInSeconds": {}
  }
]
```

<h2 id="tocS_InferenceExecutionStatus">InferenceExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemainferenceexecutionstatus"></a>
<a id="schema_InferenceExecutionStatus"></a>
<a id="tocSinferenceexecutionstatus"></a>
<a id="tocsinferenceexecutionstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_InferenceExecutionSummary">InferenceExecutionSummary</h2>
<!-- backwards compatibility -->
<a id="schemainferenceexecutionsummary"></a>
<a id="schema_InferenceExecutionSummary"></a>
<a id="tocSinferenceexecutionsummary"></a>
<a id="tocsinferenceexecutionsummary"></a>

```json
{
  "ModelName": {},
  "ModelArn": {},
  "InferenceSchedulerName": {},
  "InferenceSchedulerArn": {},
  "ScheduledStartTime": {},
  "DataStartTime": {},
  "DataEndTime": {},
  "DataInputConfiguration": {
    "S3InputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "InputTimeZoneOffset": {},
    "InferenceInputNameConfiguration": {
      "TimestampFormat": {},
      "ComponentTimestampDelimiter": {}
    }
  },
  "DataOutputConfiguration": {
    "S3OutputConfiguration": {
      "Bucket": {},
      "Prefix": {}
    },
    "KmsKeyId": {}
  },
  "CustomerResultObject": {
    "Bucket": {},
    "Key": {}
  },
  "Status": {},
  "FailedReason": {}
}
```

Contains information about the specific inference execution, including input and output data configuration, inference scheduling information, status, and so on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelName|object|false|none|none|
|ModelArn|object|false|none|none|
|InferenceSchedulerName|object|false|none|none|
|InferenceSchedulerArn|object|false|none|none|
|ScheduledStartTime|object|false|none|none|
|DataStartTime|object|false|none|none|
|DataEndTime|object|false|none|none|
|DataInputConfiguration|object|false|none|none|
|DataOutputConfiguration|object|false|none|none|
|CustomerResultObject|object|false|none|none|
|Status|object|false|none|none|
|FailedReason|object|false|none|none|

<h2 id="tocS_InferenceExecutionSummaries">InferenceExecutionSummaries</h2>
<!-- backwards compatibility -->
<a id="schemainferenceexecutionsummaries"></a>
<a id="schema_InferenceExecutionSummaries"></a>
<a id="tocSinferenceexecutionsummaries"></a>
<a id="tocsinferenceexecutionsummaries"></a>

```json
[
  {
    "ModelName": {},
    "ModelArn": {},
    "InferenceSchedulerName": {},
    "InferenceSchedulerArn": {},
    "ScheduledStartTime": {},
    "DataStartTime": {},
    "DataEndTime": {},
    "DataInputConfiguration": {
      "S3InputConfiguration": {
        "Bucket": {},
        "Prefix": {}
      },
      "InputTimeZoneOffset": {},
      "InferenceInputNameConfiguration": {
        "TimestampFormat": {},
        "ComponentTimestampDelimiter": {}
      }
    },
    "DataOutputConfiguration": {
      "S3OutputConfiguration": {
        "Bucket": {},
        "Prefix": {}
      },
      "KmsKeyId": {}
    },
    "CustomerResultObject": {
      "Bucket": {},
      "Key": {}
    },
    "Status": {},
    "FailedReason": {}
  }
]
```

<h2 id="tocS_S3Object">S3Object</h2>
<!-- backwards compatibility -->
<a id="schemas3object"></a>
<a id="schema_S3Object"></a>
<a id="tocSs3object"></a>
<a id="tocss3object"></a>

```json
{
  "Bucket": {},
  "Key": {}
}
```

Contains information about an S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|Key|object|true|none|none|

<h2 id="tocS_InferenceS3InputConfiguration">InferenceS3InputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainferences3inputconfiguration"></a>
<a id="schema_InferenceS3InputConfiguration"></a>
<a id="tocSinferences3inputconfiguration"></a>
<a id="tocsinferences3inputconfiguration"></a>

```json
{
  "Bucket": {},
  "Prefix": {}
}
```

 Specifies configuration information for the input data for the inference, including input data S3 location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|Prefix|object|false|none|none|

<h2 id="tocS_TimeZoneOffset">TimeZoneOffset</h2>
<!-- backwards compatibility -->
<a id="schematimezoneoffset"></a>
<a id="schema_TimeZoneOffset"></a>
<a id="tocStimezoneoffset"></a>
<a id="tocstimezoneoffset"></a>

```json
"string"
```

<h2 id="tocS_InferenceInputNameConfiguration">InferenceInputNameConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainferenceinputnameconfiguration"></a>
<a id="schema_InferenceInputNameConfiguration"></a>
<a id="tocSinferenceinputnameconfiguration"></a>
<a id="tocsinferenceinputnameconfiguration"></a>

```json
{
  "TimestampFormat": {},
  "ComponentTimestampDelimiter": {}
}
```

Specifies configuration information for the input data for the inference, including timestamp format and delimiter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimestampFormat|object|false|none|none|
|ComponentTimestampDelimiter|object|false|none|none|

<h2 id="tocS_InferenceS3OutputConfiguration">InferenceS3OutputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainferences3outputconfiguration"></a>
<a id="schema_InferenceS3OutputConfiguration"></a>
<a id="tocSinferences3outputconfiguration"></a>
<a id="tocsinferences3outputconfiguration"></a>

```json
{
  "Bucket": {},
  "Prefix": {}
}
```

 Specifies configuration information for the output results from the inference, including output S3 location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|Prefix|object|false|none|none|

<h2 id="tocS_S3Bucket">S3Bucket</h2>
<!-- backwards compatibility -->
<a id="schemas3bucket"></a>
<a id="schema_S3Bucket"></a>
<a id="tocSs3bucket"></a>
<a id="tocss3bucket"></a>

```json
"string"
```

<h2 id="tocS_S3Prefix">S3Prefix</h2>
<!-- backwards compatibility -->
<a id="schemas3prefix"></a>
<a id="schema_S3Prefix"></a>
<a id="tocSs3prefix"></a>
<a id="tocss3prefix"></a>

```json
"string"
```

<h2 id="tocS_InferenceSchedulerSummary">InferenceSchedulerSummary</h2>
<!-- backwards compatibility -->
<a id="schemainferenceschedulersummary"></a>
<a id="schema_InferenceSchedulerSummary"></a>
<a id="tocSinferenceschedulersummary"></a>
<a id="tocsinferenceschedulersummary"></a>

```json
{
  "ModelName": {},
  "ModelArn": {},
  "InferenceSchedulerName": {},
  "InferenceSchedulerArn": {},
  "Status": {},
  "DataDelayOffsetInMinutes": {},
  "DataUploadFrequency": {},
  "LatestInferenceResult": {}
}
```

Contains information about the specific inference scheduler, including data delay offset, model name and ARN, status, and so on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelName|object|false|none|none|
|ModelArn|object|false|none|none|
|InferenceSchedulerName|object|false|none|none|
|InferenceSchedulerArn|object|false|none|none|
|Status|object|false|none|none|
|DataDelayOffsetInMinutes|object|false|none|none|
|DataUploadFrequency|object|false|none|none|
|LatestInferenceResult|object|false|none|none|

<h2 id="tocS_InferenceSchedulerSummaries">InferenceSchedulerSummaries</h2>
<!-- backwards compatibility -->
<a id="schemainferenceschedulersummaries"></a>
<a id="schema_InferenceSchedulerSummaries"></a>
<a id="tocSinferenceschedulersummaries"></a>
<a id="tocsinferenceschedulersummaries"></a>

```json
[
  {
    "ModelName": {},
    "ModelArn": {},
    "InferenceSchedulerName": {},
    "InferenceSchedulerArn": {},
    "Status": {},
    "DataDelayOffsetInMinutes": {},
    "DataUploadFrequency": {},
    "LatestInferenceResult": {}
  }
]
```

<h2 id="tocS_ListOfDiscardedFiles">ListOfDiscardedFiles</h2>
<!-- backwards compatibility -->
<a id="schemalistofdiscardedfiles"></a>
<a id="schema_ListOfDiscardedFiles"></a>
<a id="tocSlistofdiscardedfiles"></a>
<a id="tocslistofdiscardedfiles"></a>

```json
[
  {
    "Bucket": {},
    "Key": {}
  }
]
```

<h2 id="tocS_IngestionS3InputConfiguration">IngestionS3InputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaingestions3inputconfiguration"></a>
<a id="schema_IngestionS3InputConfiguration"></a>
<a id="tocSingestions3inputconfiguration"></a>
<a id="tocsingestions3inputconfiguration"></a>

```json
{
  "Bucket": {},
  "Prefix": {},
  "KeyPattern": {}
}
```

 Specifies S3 configuration information for the input data for the data ingestion job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|Prefix|object|false|none|none|
|KeyPattern|object|false|none|none|

<h2 id="tocS_KeyPattern">KeyPattern</h2>
<!-- backwards compatibility -->
<a id="schemakeypattern"></a>
<a id="schema_KeyPattern"></a>
<a id="tocSkeypattern"></a>
<a id="tocskeypattern"></a>

```json
"string"
```

<h2 id="tocS_MissingCompleteSensorData">MissingCompleteSensorData</h2>
<!-- backwards compatibility -->
<a id="schemamissingcompletesensordata"></a>
<a id="schema_MissingCompleteSensorData"></a>
<a id="tocSmissingcompletesensordata"></a>
<a id="tocsmissingcompletesensordata"></a>

```json
{
  "AffectedSensorCount": {}
}
```

 Entity that comprises information on sensors that have sensor data completely missing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AffectedSensorCount|object|true|none|none|

<h2 id="tocS_SensorsWithShortDateRange">SensorsWithShortDateRange</h2>
<!-- backwards compatibility -->
<a id="schemasensorswithshortdaterange"></a>
<a id="schema_SensorsWithShortDateRange"></a>
<a id="tocSsensorswithshortdaterange"></a>
<a id="tocssensorswithshortdaterange"></a>

```json
{
  "AffectedSensorCount": {}
}
```

 Entity that comprises information on sensors that have shorter date range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AffectedSensorCount|object|true|none|none|

<h2 id="tocS_LabelGroupSummary">LabelGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemalabelgroupsummary"></a>
<a id="schema_LabelGroupSummary"></a>
<a id="tocSlabelgroupsummary"></a>
<a id="tocslabelgroupsummary"></a>

```json
{
  "LabelGroupName": {},
  "LabelGroupArn": {},
  "CreatedAt": {},
  "UpdatedAt": {}
}
```

 Contains information about the label group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupName|object|false|none|none|
|LabelGroupArn|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_LabelGroupSummaries">LabelGroupSummaries</h2>
<!-- backwards compatibility -->
<a id="schemalabelgroupsummaries"></a>
<a id="schema_LabelGroupSummaries"></a>
<a id="tocSlabelgroupsummaries"></a>
<a id="tocslabelgroupsummaries"></a>

```json
[
  {
    "LabelGroupName": {},
    "LabelGroupArn": {},
    "CreatedAt": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_LabelSummary">LabelSummary</h2>
<!-- backwards compatibility -->
<a id="schemalabelsummary"></a>
<a id="schema_LabelSummary"></a>
<a id="tocSlabelsummary"></a>
<a id="tocslabelsummary"></a>

```json
{
  "LabelGroupName": {},
  "LabelId": {},
  "LabelGroupArn": {},
  "StartTime": {},
  "EndTime": {},
  "Rating": {},
  "FaultCode": {},
  "Equipment": {},
  "CreatedAt": {}
}
```

 Information about the label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LabelGroupName|object|false|none|none|
|LabelId|object|false|none|none|
|LabelGroupArn|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Rating|object|false|none|none|
|FaultCode|object|false|none|none|
|Equipment|object|false|none|none|
|CreatedAt|object|false|none|none|

<h2 id="tocS_LabelSummaries">LabelSummaries</h2>
<!-- backwards compatibility -->
<a id="schemalabelsummaries"></a>
<a id="schema_LabelSummaries"></a>
<a id="tocSlabelsummaries"></a>
<a id="tocslabelsummaries"></a>

```json
[
  {
    "LabelGroupName": {},
    "LabelId": {},
    "LabelGroupArn": {},
    "StartTime": {},
    "EndTime": {},
    "Rating": {},
    "FaultCode": {},
    "Equipment": {},
    "CreatedAt": {}
  }
]
```

<h2 id="tocS_LabelsS3InputConfiguration">LabelsS3InputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalabelss3inputconfiguration"></a>
<a id="schema_LabelsS3InputConfiguration"></a>
<a id="tocSlabelss3inputconfiguration"></a>
<a id="tocslabelss3inputconfiguration"></a>

```json
{
  "Bucket": {},
  "Prefix": {}
}
```

The location information (prefix and bucket name) for the s3 location being used for label data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|Prefix|object|false|none|none|

<h2 id="tocS_LargeTimestampGaps">LargeTimestampGaps</h2>
<!-- backwards compatibility -->
<a id="schemalargetimestampgaps"></a>
<a id="schema_LargeTimestampGaps"></a>
<a id="tocSlargetimestampgaps"></a>
<a id="tocslargetimestampgaps"></a>

```json
{
  "Status": {},
  "NumberOfLargeTimestampGaps": {},
  "MaxTimestampGapInDays": {}
}
```

 Entity that comprises information on large gaps between consecutive timestamps in data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|NumberOfLargeTimestampGaps|object|false|none|none|
|MaxTimestampGapInDays|object|false|none|none|

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

<h2 id="tocS_ModelSummaries">ModelSummaries</h2>
<!-- backwards compatibility -->
<a id="schemamodelsummaries"></a>
<a id="schema_ModelSummaries"></a>
<a id="tocSmodelsummaries"></a>
<a id="tocsmodelsummaries"></a>

```json
[
  {
    "ModelName": {},
    "ModelArn": {},
    "DatasetName": {},
    "DatasetArn": {},
    "Status": {},
    "CreatedAt": {}
  }
]
```

<h2 id="tocS_SensorStatisticsSummaries">SensorStatisticsSummaries</h2>
<!-- backwards compatibility -->
<a id="schemasensorstatisticssummaries"></a>
<a id="schema_SensorStatisticsSummaries"></a>
<a id="tocSsensorstatisticssummaries"></a>
<a id="tocssensorstatisticssummaries"></a>

```json
[
  {
    "ComponentName": {},
    "SensorName": {},
    "DataExists": {},
    "MissingValues": {
      "Count": {},
      "Percentage": {}
    },
    "InvalidValues": {
      "Count": {},
      "Percentage": {}
    },
    "InvalidDateEntries": {
      "Count": {},
      "Percentage": {}
    },
    "DuplicateTimestamps": {
      "Count": {},
      "Percentage": {}
    },
    "CategoricalValues": {
      "Status": {},
      "NumberOfCategory": {}
    },
    "MultipleOperatingModes": {
      "Status": {}
    },
    "LargeTimestampGaps": {
      "Status": {},
      "NumberOfLargeTimestampGaps": {},
      "MaxTimestampGapInDays": {}
    },
    "MonotonicValues": {
      "Status": {},
      "Monotonicity": {}
    },
    "DataStartTime": {},
    "DataEndTime": {}
  }
]
```

<h2 id="tocS_ModelSummary">ModelSummary</h2>
<!-- backwards compatibility -->
<a id="schemamodelsummary"></a>
<a id="schema_ModelSummary"></a>
<a id="tocSmodelsummary"></a>
<a id="tocsmodelsummary"></a>

```json
{
  "ModelName": {},
  "ModelArn": {},
  "DatasetName": {},
  "DatasetArn": {},
  "Status": {},
  "CreatedAt": {}
}
```

Provides information about the specified ML model, including dataset and model names and ARNs, as well as status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ModelName|object|false|none|none|
|ModelArn|object|false|none|none|
|DatasetName|object|false|none|none|
|DatasetArn|object|false|none|none|
|Status|object|false|none|none|
|CreatedAt|object|false|none|none|

<h2 id="tocS_Monotonicity">Monotonicity</h2>
<!-- backwards compatibility -->
<a id="schemamonotonicity"></a>
<a id="schema_Monotonicity"></a>
<a id="tocSmonotonicity"></a>
<a id="tocsmonotonicity"></a>

```json
"DECREASING"
```

<h2 id="tocS_MonotonicValues">MonotonicValues</h2>
<!-- backwards compatibility -->
<a id="schemamonotonicvalues"></a>
<a id="schema_MonotonicValues"></a>
<a id="tocSmonotonicvalues"></a>
<a id="tocsmonotonicvalues"></a>

```json
{
  "Status": {},
  "Monotonicity": {}
}
```

 Entity that comprises information on monotonic values in the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|Monotonicity|object|false|none|none|

<h2 id="tocS_MultipleOperatingModes">MultipleOperatingModes</h2>
<!-- backwards compatibility -->
<a id="schemamultipleoperatingmodes"></a>
<a id="schema_MultipleOperatingModes"></a>
<a id="tocSmultipleoperatingmodes"></a>
<a id="tocsmultipleoperatingmodes"></a>

```json
{
  "Status": {}
}
```

 Entity that comprises information on operating modes in data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_S3Key">S3Key</h2>
<!-- backwards compatibility -->
<a id="schemas3key"></a>
<a id="schema_S3Key"></a>
<a id="tocSs3key"></a>
<a id="tocss3key"></a>

```json
"string"
```

<h2 id="tocS_SensorName">SensorName</h2>
<!-- backwards compatibility -->
<a id="schemasensorname"></a>
<a id="schema_SensorName"></a>
<a id="tocSsensorname"></a>
<a id="tocssensorname"></a>

```json
"string"
```

<h2 id="tocS_SensorStatisticsSummary">SensorStatisticsSummary</h2>
<!-- backwards compatibility -->
<a id="schemasensorstatisticssummary"></a>
<a id="schema_SensorStatisticsSummary"></a>
<a id="tocSsensorstatisticssummary"></a>
<a id="tocssensorstatisticssummary"></a>

```json
{
  "ComponentName": {},
  "SensorName": {},
  "DataExists": {},
  "MissingValues": {
    "Count": {},
    "Percentage": {}
  },
  "InvalidValues": {
    "Count": {},
    "Percentage": {}
  },
  "InvalidDateEntries": {
    "Count": {},
    "Percentage": {}
  },
  "DuplicateTimestamps": {
    "Count": {},
    "Percentage": {}
  },
  "CategoricalValues": {
    "Status": {},
    "NumberOfCategory": {}
  },
  "MultipleOperatingModes": {
    "Status": {}
  },
  "LargeTimestampGaps": {
    "Status": {},
    "NumberOfLargeTimestampGaps": {},
    "MaxTimestampGapInDays": {}
  },
  "MonotonicValues": {
    "Status": {},
    "Monotonicity": {}
  },
  "DataStartTime": {},
  "DataEndTime": {}
}
```

 Summary of ingestion statistics like whether data exists, number of missing values, number of invalid values and so on related to the particular sensor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComponentName|object|false|none|none|
|SensorName|object|false|none|none|
|DataExists|object|false|none|none|
|MissingValues|object|false|none|none|
|InvalidValues|object|false|none|none|
|InvalidDateEntries|object|false|none|none|
|DuplicateTimestamps|object|false|none|none|
|CategoricalValues|object|false|none|none|
|MultipleOperatingModes|object|false|none|none|
|LargeTimestampGaps|object|false|none|none|
|MonotonicValues|object|false|none|none|
|DataStartTime|object|false|none|none|
|DataEndTime|object|false|none|none|

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

A tag is a key-value pair that can be added to a resource as metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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
