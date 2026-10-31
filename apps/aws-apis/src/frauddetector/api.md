<h1 id="amazon-fraud-detector">Amazon Fraud Detector v2019-11-15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>This is the Amazon Fraud Detector API Reference. This guide is for developers who need detailed information about Amazon Fraud Detector API actions, data types, and errors. For more information about Amazon Fraud Detector features, see the <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/">Amazon Fraud Detector User Guide</a>.</p> <p>We provide the Query API as well as AWS software development kits (SDK) for Amazon Fraud Detector in Java and Python programming languages.</p> <p>The Amazon Fraud Detector Query API provides HTTPS requests that use the HTTP verb GET or POST and a Query parameter <code>Action</code>. AWS SDK provides libraries, sample code, tutorials, and other resources for software developers who prefer to build applications using language-specific APIs instead of submitting a request over HTTP or HTTPS. These libraries provide basic functions that automatically take care of tasks such as cryptographically signing your requests, retrying requests, and handling error responses, so that it is easier for you to get started. For more information about the AWS SDKs, see <a href="https://docs.aws.amazon.com/https:/aws.amazon.com/tools/">Tools to build on AWS</a>. </p>

Base URLs:

* <a href="http://frauddetector.us-east-1.amazonaws.com">http://frauddetector.us-east-1.amazonaws.com</a> - The Amazon Fraud Detector multi-region endpoint

* <a href="https://frauddetector.us-east-1.amazonaws.com">https://frauddetector.us-east-1.amazonaws.com</a> - The Amazon Fraud Detector multi-region endpoint

* <a href="http://frauddetector.cn-north-1.amazonaws.com.cn">http://frauddetector.cn-north-1.amazonaws.com.cn</a> - The Amazon Fraud Detector endpoint for China (Beijing) and China (Ningxia)

* <a href="https://frauddetector.cn-north-1.amazonaws.com.cn">https://frauddetector.cn-north-1.amazonaws.com.cn</a> - The Amazon Fraud Detector endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/frauddetector/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-fraud-detector-default">Default</h1>

## BatchCreateVariable

<a id="opIdBatchCreateVariable"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.BatchCreateVariable' \
  -d '{
    "variableEntries": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable`

Creates a batch of variables.

> Body parameter

```json
{
  "variableEntries": {},
  "tags": {}
}
```

<h3 id="batchcreatevariable-parameters">Parameters</h3>

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
|body|body|[BatchCreateVariableRequest](#schemabatchcreatevariablerequest)|true|none|
|» variableEntries|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.BatchCreateVariable|

> Example responses

> 200 Response

```json
{
  "errors": {}
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

<h3 id="batchcreatevariable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchCreateVariableResult](#schemabatchcreatevariableresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetVariable

<a id="opIdBatchGetVariable"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.BatchGetVariable' \
  -d '{
    "names": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable`

Gets a batch of variables.

> Body parameter

```json
{
  "names": {}
}
```

<h3 id="batchgetvariable-parameters">Parameters</h3>

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
|body|body|[BatchGetVariableRequest](#schemabatchgetvariablerequest)|true|none|
|» names|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.BatchGetVariable|

> Example responses

> 200 Response

```json
{
  "variables": {},
  "errors": {}
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

<h3 id="batchgetvariable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetVariableResult](#schemabatchgetvariableresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelBatchImportJob

<a id="opIdCancelBatchImportJob"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.CancelBatchImportJob' \
  -d '{
    "jobId": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob`

 Cancels an in-progress batch import job.

> Body parameter

```json
{
  "jobId": {}
}
```

<h3 id="cancelbatchimportjob-parameters">Parameters</h3>

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
|body|body|[CancelBatchImportJobRequest](#schemacancelbatchimportjobrequest)|true|none|
|» jobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.CancelBatchImportJob|

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

<h3 id="cancelbatchimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelBatchImportJobResult](#schemacancelbatchimportjobresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelBatchPredictionJob

<a id="opIdCancelBatchPredictionJob"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.CancelBatchPredictionJob' \
  -d '{
    "jobId": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob`

Cancels the specified batch prediction job.

> Body parameter

```json
{
  "jobId": {}
}
```

<h3 id="cancelbatchpredictionjob-parameters">Parameters</h3>

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
|body|body|[CancelBatchPredictionJobRequest](#schemacancelbatchpredictionjobrequest)|true|none|
|» jobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.CancelBatchPredictionJob|

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

<h3 id="cancelbatchpredictionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelBatchPredictionJobResult](#schemacancelbatchpredictionjobresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBatchImportJob

<a id="opIdCreateBatchImportJob"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.CreateBatchImportJob' \
  -d '{
    "jobId": {},
    "inputPath": {},
    "outputPath": {},
    "eventTypeName": {},
    "iamRoleArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob`

Creates a batch import job. 

> Body parameter

```json
{
  "jobId": {},
  "inputPath": {},
  "outputPath": {},
  "eventTypeName": {},
  "iamRoleArn": {},
  "tags": {}
}
```

<h3 id="createbatchimportjob-parameters">Parameters</h3>

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
|body|body|[CreateBatchImportJobRequest](#schemacreatebatchimportjobrequest)|true|none|
|» jobId|body|object|true|none|
|» inputPath|body|object|true|none|
|» outputPath|body|object|true|none|
|» eventTypeName|body|object|true|none|
|» iamRoleArn|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.CreateBatchImportJob|

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

<h3 id="createbatchimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBatchImportJobResult](#schemacreatebatchimportjobresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBatchPredictionJob

<a id="opIdCreateBatchPredictionJob"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.CreateBatchPredictionJob' \
  -d '{
    "jobId": {},
    "inputPath": {},
    "outputPath": {},
    "eventTypeName": {},
    "detectorName": {},
    "detectorVersion": {},
    "iamRoleArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob`

Creates a batch prediction job.

> Body parameter

```json
{
  "jobId": {},
  "inputPath": {},
  "outputPath": {},
  "eventTypeName": {},
  "detectorName": {},
  "detectorVersion": {},
  "iamRoleArn": {},
  "tags": {}
}
```

<h3 id="createbatchpredictionjob-parameters">Parameters</h3>

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
|body|body|[CreateBatchPredictionJobRequest](#schemacreatebatchpredictionjobrequest)|true|none|
|» jobId|body|object|true|none|
|» inputPath|body|object|true|none|
|» outputPath|body|object|true|none|
|» eventTypeName|body|object|true|none|
|» detectorName|body|object|true|none|
|» detectorVersion|body|object|false|none|
|» iamRoleArn|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.CreateBatchPredictionJob|

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

<h3 id="createbatchpredictionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBatchPredictionJobResult](#schemacreatebatchpredictionjobresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDetectorVersion

<a id="opIdCreateDetectorVersion"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.CreateDetectorVersion' \
  -d '{
    "detectorId": {},
    "description": {},
    "externalModelEndpoints": {},
    "rules": {},
    "modelVersions": {},
    "ruleExecutionMode": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion`

Creates a detector version. The detector version starts in a <code>DRAFT</code> status.

> Body parameter

```json
{
  "detectorId": {},
  "description": {},
  "externalModelEndpoints": {},
  "rules": {},
  "modelVersions": {},
  "ruleExecutionMode": {},
  "tags": {}
}
```

<h3 id="createdetectorversion-parameters">Parameters</h3>

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
|body|body|[CreateDetectorVersionRequest](#schemacreatedetectorversionrequest)|true|none|
|» detectorId|body|object|true|none|
|» description|body|object|false|none|
|» externalModelEndpoints|body|object|false|none|
|» rules|body|object|true|none|
|» modelVersions|body|object|false|none|
|» ruleExecutionMode|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.CreateDetectorVersion|

> Example responses

> 200 Response

```json
{
  "detectorId": {},
  "detectorVersionId": {},
  "status": {}
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

<h3 id="createdetectorversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDetectorVersionResult](#schemacreatedetectorversionresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateList

<a id="opIdCreateList"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.CreateList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.CreateList' \
  -d '{
    "name": {},
    "elements": {},
    "variableType": {},
    "description": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.CreateList`

<p> Creates a list. </p> <p>List is a set of input data for a variable in your event dataset. You use the input data in a rule that's associated with your detector. For more information, see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/lists.html">Lists</a>.</p>

> Body parameter

```json
{
  "name": {},
  "elements": {},
  "variableType": {},
  "description": {},
  "tags": {}
}
```

<h3 id="createlist-parameters">Parameters</h3>

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
|body|body|[CreateListRequest](#schemacreatelistrequest)|true|none|
|» name|body|object|true|none|
|» elements|body|object|false|none|
|» variableType|body|object|false|none|
|» description|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.CreateList|

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

<h3 id="createlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateListResult](#schemacreatelistresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateModel

<a id="opIdCreateModel"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.CreateModel' \
  -d '{
    "modelId": {},
    "modelType": {},
    "description": {},
    "eventTypeName": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel`

Creates a model using the specified model type.

> Body parameter

```json
{
  "modelId": {},
  "modelType": {},
  "description": {},
  "eventTypeName": {},
  "tags": {}
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
|» modelId|body|object|true|none|
|» modelType|body|object|true|none|
|» description|body|object|false|none|
|» eventTypeName|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.CreateModel|

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

<h3 id="createmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateModelResult](#schemacreatemodelresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateModelVersion

<a id="opIdCreateModelVersion"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.CreateModelVersion' \
  -d '{
    "modelId": {},
    "modelType": {},
    "trainingDataSource": {},
    "trainingDataSchema": {
      "modelVariables": {},
      "labelSchema": {
        "labelMapper": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "unlabeledEventsTreatment": {}
      }
    },
    "externalEventsDetail": {
      "dataLocation": {},
      "dataAccessRoleArn": {}
    },
    "ingestedEventsDetail": {
      "ingestedEventsTimeWindow": {
        "startTime": {},
        "endTime": {}
      }
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion`

Creates a version of the model using the specified model type and model id. 

> Body parameter

```json
{
  "modelId": {},
  "modelType": {},
  "trainingDataSource": {},
  "trainingDataSchema": {
    "modelVariables": {},
    "labelSchema": {
      "labelMapper": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "unlabeledEventsTreatment": {}
    }
  },
  "externalEventsDetail": {
    "dataLocation": {},
    "dataAccessRoleArn": {}
  },
  "ingestedEventsDetail": {
    "ingestedEventsTimeWindow": {
      "startTime": {},
      "endTime": {}
    }
  },
  "tags": {}
}
```

<h3 id="createmodelversion-parameters">Parameters</h3>

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
|body|body|[CreateModelVersionRequest](#schemacreatemodelversionrequest)|true|none|
|» modelId|body|object|true|none|
|» modelType|body|object|true|none|
|» trainingDataSource|body|object|true|none|
|» trainingDataSchema|body|object|true|none|
|» » modelVariables|body|object|true|none|
|» » labelSchema|body|[LabelSchema](#schemalabelschema)|false|The label schema.|
|» externalEventsDetail|body|object|false|none|
|» » dataLocation|body|object|true|none|
|» » dataAccessRoleArn|body|object|true|none|
|» ingestedEventsDetail|body|object|false|none|
|» » ingestedEventsTimeWindow|body|object|true|none|
|» » » startTime|body|object|true|none|
|» » » endTime|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.CreateModelVersion|

> Example responses

> 200 Response

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {},
  "status": {}
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

<h3 id="createmodelversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateModelVersionResult](#schemacreatemodelversionresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRule

<a id="opIdCreateRule"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.CreateRule' \
  -d '{
    "ruleId": {},
    "detectorId": {},
    "description": {},
    "expression": {},
    "language": {},
    "outcomes": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule`

Creates a rule for use with the specified detector. 

> Body parameter

```json
{
  "ruleId": {},
  "detectorId": {},
  "description": {},
  "expression": {},
  "language": {},
  "outcomes": {},
  "tags": {}
}
```

<h3 id="createrule-parameters">Parameters</h3>

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
|body|body|[CreateRuleRequest](#schemacreaterulerequest)|true|none|
|» ruleId|body|object|true|none|
|» detectorId|body|object|true|none|
|» description|body|object|false|none|
|» expression|body|object|true|none|
|» language|body|object|true|none|
|» outcomes|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.CreateRule|

> Example responses

> 200 Response

```json
{
  "rule": {
    "detectorId": {},
    "ruleId": {},
    "ruleVersion": {}
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

<h3 id="createrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRuleResult](#schemacreateruleresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVariable

<a id="opIdCreateVariable"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.CreateVariable' \
  -d '{
    "name": {},
    "dataType": {},
    "dataSource": {},
    "defaultValue": {},
    "description": {},
    "variableType": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable`

Creates a variable.

> Body parameter

```json
{
  "name": {},
  "dataType": {},
  "dataSource": {},
  "defaultValue": {},
  "description": {},
  "variableType": {},
  "tags": {}
}
```

<h3 id="createvariable-parameters">Parameters</h3>

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
|body|body|[CreateVariableRequest](#schemacreatevariablerequest)|true|none|
|» name|body|object|true|none|
|» dataType|body|object|true|none|
|» dataSource|body|object|true|none|
|» defaultValue|body|object|true|none|
|» description|body|object|false|none|
|» variableType|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.CreateVariable|

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

<h3 id="createvariable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVariableResult](#schemacreatevariableresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBatchImportJob

<a id="opIdDeleteBatchImportJob"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteBatchImportJob' \
  -d '{
    "jobId": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob`

Deletes the specified batch import job ID record. This action does not delete the data that was batch imported. 

> Body parameter

```json
{
  "jobId": {}
}
```

<h3 id="deletebatchimportjob-parameters">Parameters</h3>

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
|body|body|[DeleteBatchImportJobRequest](#schemadeletebatchimportjobrequest)|true|none|
|» jobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteBatchImportJob|

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

<h3 id="deletebatchimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBatchImportJobResult](#schemadeletebatchimportjobresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBatchPredictionJob

<a id="opIdDeleteBatchPredictionJob"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteBatchPredictionJob' \
  -d '{
    "jobId": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob`

Deletes a batch prediction job.

> Body parameter

```json
{
  "jobId": {}
}
```

<h3 id="deletebatchpredictionjob-parameters">Parameters</h3>

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
|body|body|[DeleteBatchPredictionJobRequest](#schemadeletebatchpredictionjobrequest)|true|none|
|» jobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteBatchPredictionJob|

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

<h3 id="deletebatchpredictionjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBatchPredictionJobResult](#schemadeletebatchpredictionjobresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDetector

<a id="opIdDeleteDetector"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteDetector' \
  -d '{
    "detectorId": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector`

<p>Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector.</p> <p>When you delete a detector, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</p>

> Body parameter

```json
{
  "detectorId": {}
}
```

<h3 id="deletedetector-parameters">Parameters</h3>

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
|body|body|[DeleteDetectorRequest](#schemadeletedetectorrequest)|true|none|
|» detectorId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteDetector|

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

<h3 id="deletedetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDetectorResult](#schemadeletedetectorresult)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDetectorVersion

<a id="opIdDeleteDetectorVersion"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteDetectorVersion' \
  -d '{
    "detectorId": {},
    "detectorVersionId": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion`

<p>Deletes the detector version. You cannot delete detector versions that are in <code>ACTIVE</code> status.</p> <p>When you delete a detector version, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</p>

> Body parameter

```json
{
  "detectorId": {},
  "detectorVersionId": {}
}
```

<h3 id="deletedetectorversion-parameters">Parameters</h3>

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
|body|body|[DeleteDetectorVersionRequest](#schemadeletedetectorversionrequest)|true|none|
|» detectorId|body|object|true|none|
|» detectorVersionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteDetectorVersion|

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

<h3 id="deletedetectorversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDetectorVersionResult](#schemadeletedetectorversionresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEntityType

<a id="opIdDeleteEntityType"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteEntityType' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType`

<p>Deletes an entity type.</p> <p>You cannot delete an entity type that is included in an event type.</p> <p>When you delete an entity type, Amazon Fraud Detector permanently deletes that entity type and the data is no longer stored in Amazon Fraud Detector.</p>

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deleteentitytype-parameters">Parameters</h3>

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
|body|body|[DeleteEntityTypeRequest](#schemadeleteentitytyperequest)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteEntityType|

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

<h3 id="deleteentitytype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEntityTypeResult](#schemadeleteentitytyperesult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEvent

<a id="opIdDeleteEvent"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteEvent' \
  -d '{
    "eventId": {},
    "eventTypeName": {},
    "deleteAuditHistory": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent`

<p>Deletes the specified event.</p> <p>When you delete an event, Amazon Fraud Detector permanently deletes that event and the event data is no longer stored in Amazon Fraud Detector.</p>

> Body parameter

```json
{
  "eventId": {},
  "eventTypeName": {},
  "deleteAuditHistory": {}
}
```

<h3 id="deleteevent-parameters">Parameters</h3>

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
|body|body|[DeleteEventRequest](#schemadeleteeventrequest)|true|none|
|» eventId|body|object|true|none|
|» eventTypeName|body|object|true|none|
|» deleteAuditHistory|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteEvent|

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

<h3 id="deleteevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEventResult](#schemadeleteeventresult)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEventType

<a id="opIdDeleteEventType"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteEventType' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType`

<p>Deletes an event type.</p> <p>You cannot delete an event type that is used in a detector or a model.</p> <p>When you delete an event type, Amazon Fraud Detector permanently deletes that event type and the data is no longer stored in Amazon Fraud Detector.</p>

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deleteeventtype-parameters">Parameters</h3>

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
|body|body|[DeleteEventTypeRequest](#schemadeleteeventtyperequest)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteEventType|

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

<h3 id="deleteeventtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEventTypeResult](#schemadeleteeventtyperesult)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEventsByEventType

<a id="opIdDeleteEventsByEventType"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteEventsByEventType' \
  -d '{
    "eventTypeName": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType`

Deletes all events of a particular event type.

> Body parameter

```json
{
  "eventTypeName": {}
}
```

<h3 id="deleteeventsbyeventtype-parameters">Parameters</h3>

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
|body|body|[DeleteEventsByEventTypeRequest](#schemadeleteeventsbyeventtyperequest)|true|none|
|» eventTypeName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteEventsByEventType|

> Example responses

> 200 Response

```json
{
  "eventTypeName": {},
  "eventsDeletionStatus": {}
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

<h3 id="deleteeventsbyeventtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEventsByEventTypeResult](#schemadeleteeventsbyeventtyperesult)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteExternalModel

<a id="opIdDeleteExternalModel"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteExternalModel' \
  -d '{
    "modelEndpoint": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel`

<p>Removes a SageMaker model from Amazon Fraud Detector.</p> <p>You can remove an Amazon SageMaker model if it is not associated with a detector version. Removing a SageMaker model disconnects it from Amazon Fraud Detector, but the model remains available in SageMaker.</p>

> Body parameter

```json
{
  "modelEndpoint": {}
}
```

<h3 id="deleteexternalmodel-parameters">Parameters</h3>

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
|body|body|[DeleteExternalModelRequest](#schemadeleteexternalmodelrequest)|true|none|
|» modelEndpoint|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteExternalModel|

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

<h3 id="deleteexternalmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteExternalModelResult](#schemadeleteexternalmodelresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLabel

<a id="opIdDeleteLabel"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteLabel' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel`

<p>Deletes a label.</p> <p>You cannot delete labels that are included in an event type in Amazon Fraud Detector.</p> <p>You cannot delete a label assigned to an event ID. You must first delete the relevant event ID.</p> <p>When you delete a label, Amazon Fraud Detector permanently deletes that label and the data is no longer stored in Amazon Fraud Detector.</p>

> Body parameter

```json
{
  "name": {}
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
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteLabel|

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

<h3 id="deletelabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLabelResult](#schemadeletelabelresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteList

<a id="opIdDeleteList"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteList' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList`

<p> Deletes the list, provided it is not used in a rule. </p> <p> When you delete a list, Amazon Fraud Detector permanently deletes that list and the elements in the list.</p>

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deletelist-parameters">Parameters</h3>

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
|body|body|[DeleteListRequest](#schemadeletelistrequest)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteList|

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

<h3 id="deletelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteListResult](#schemadeletelistresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteModel

<a id="opIdDeleteModel"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteModel' \
  -d '{
    "modelId": {},
    "modelType": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel`

<p>Deletes a model.</p> <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p> <p> When you delete a model, Amazon Fraud Detector permanently deletes that model and the data is no longer stored in Amazon Fraud Detector.</p>

> Body parameter

```json
{
  "modelId": {},
  "modelType": {}
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
|» modelId|body|object|true|none|
|» modelType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteModel|

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

<h3 id="deletemodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteModelResult](#schemadeletemodelresult)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteModelVersion

<a id="opIdDeleteModelVersion"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteModelVersion' \
  -d '{
    "modelId": {},
    "modelType": {},
    "modelVersionNumber": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion`

<p>Deletes a model version.</p> <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p> <p> When you delete a model version, Amazon Fraud Detector permanently deletes that model version and the data is no longer stored in Amazon Fraud Detector.</p>

> Body parameter

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {}
}
```

<h3 id="deletemodelversion-parameters">Parameters</h3>

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
|body|body|[DeleteModelVersionRequest](#schemadeletemodelversionrequest)|true|none|
|» modelId|body|object|true|none|
|» modelType|body|object|true|none|
|» modelVersionNumber|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteModelVersion|

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

<h3 id="deletemodelversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteModelVersionResult](#schemadeletemodelversionresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteOutcome

<a id="opIdDeleteOutcome"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteOutcome' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome`

<p>Deletes an outcome.</p> <p>You cannot delete an outcome that is used in a rule version.</p> <p>When you delete an outcome, Amazon Fraud Detector permanently deletes that outcome and the data is no longer stored in Amazon Fraud Detector.</p>

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deleteoutcome-parameters">Parameters</h3>

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
|body|body|[DeleteOutcomeRequest](#schemadeleteoutcomerequest)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteOutcome|

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

<h3 id="deleteoutcome-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteOutcomeResult](#schemadeleteoutcomeresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRule

<a id="opIdDeleteRule"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteRule' \
  -d '{
    "rule": {
      "detectorId": {},
      "ruleId": {},
      "ruleVersion": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule`

<p>Deletes the rule. You cannot delete a rule if it is used by an <code>ACTIVE</code> or <code>INACTIVE</code> detector version.</p> <p>When you delete a rule, Amazon Fraud Detector permanently deletes that rule and the data is no longer stored in Amazon Fraud Detector.</p>

> Body parameter

```json
{
  "rule": {
    "detectorId": {},
    "ruleId": {},
    "ruleVersion": {}
  }
}
```

<h3 id="deleterule-parameters">Parameters</h3>

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
|body|body|[DeleteRuleRequest](#schemadeleterulerequest)|true|none|
|» rule|body|[Rule](#schemarule)|true|A rule.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteRule|

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

<h3 id="deleterule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRuleResult](#schemadeleteruleresult)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVariable

<a id="opIdDeleteVariable"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DeleteVariable' \
  -d '{
    "name": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable`

<p>Deletes a variable.</p> <p>You can't delete variables that are included in an event type in Amazon Fraud Detector.</p> <p>Amazon Fraud Detector automatically deletes model output variables and SageMaker model output variables when you delete the model. You can't delete these variables manually.</p> <p>When you delete a variable, Amazon Fraud Detector permanently deletes that variable and the data is no longer stored in Amazon Fraud Detector.</p>

> Body parameter

```json
{
  "name": {}
}
```

<h3 id="deletevariable-parameters">Parameters</h3>

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
|body|body|[DeleteVariableRequest](#schemadeletevariablerequest)|true|none|
|» name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DeleteVariable|

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

<h3 id="deletevariable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVariableResult](#schemadeletevariableresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDetector

<a id="opIdDescribeDetector"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DescribeDetector' \
  -d '{
    "detectorId": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector`

Gets all versions for a specified detector.

> Body parameter

```json
{
  "detectorId": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describedetector-parameters">Parameters</h3>

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
|body|body|[DescribeDetectorRequest](#schemadescribedetectorrequest)|true|none|
|» detectorId|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DescribeDetector|

> Example responses

> 200 Response

```json
{
  "detectorId": {},
  "detectorVersionSummaries": {},
  "nextToken": {},
  "arn": {}
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

<h3 id="describedetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDetectorResult](#schemadescribedetectorresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeModelVersions

<a id="opIdDescribeModelVersions"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.DescribeModelVersions' \
  -d '{
    "modelId": {},
    "modelVersionNumber": {},
    "modelType": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions`

Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version. 

> Body parameter

```json
{
  "modelId": {},
  "modelVersionNumber": {},
  "modelType": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describemodelversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeModelVersionsRequest](#schemadescribemodelversionsrequest)|true|none|
|» modelId|body|object|false|none|
|» modelVersionNumber|body|object|false|none|
|» modelType|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.DescribeModelVersions|

> Example responses

> 200 Response

```json
{
  "modelVersionDetails": {},
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

<h3 id="describemodelversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeModelVersionsResult](#schemadescribemodelversionsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBatchImportJobs

<a id="opIdGetBatchImportJobs"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetBatchImportJobs' \
  -d '{
    "jobId": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs`

Gets all batch import jobs or a specific job of the specified ID. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 50 records per page. If you provide a <code>maxResults</code>, the value must be between 1 and 50. To get the next page results, provide the pagination token from the <code>GetBatchImportJobsResponse</code> as part of your request. A null pagination token fetches the records from the beginning.

> Body parameter

```json
{
  "jobId": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="getbatchimportjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetBatchImportJobsRequest](#schemagetbatchimportjobsrequest)|true|none|
|» jobId|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetBatchImportJobs|

> Example responses

> 200 Response

```json
{
  "batchImports": {},
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

<h3 id="getbatchimportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBatchImportJobsResult](#schemagetbatchimportjobsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBatchPredictionJobs

<a id="opIdGetBatchPredictionJobs"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetBatchPredictionJobs' \
  -d '{
    "jobId": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs`

Gets all batch prediction jobs or a specific job if you specify a job ID. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 1 and 50. To get the next page results, provide the pagination token from the GetBatchPredictionJobsResponse as part of your request. A null pagination token fetches the records from the beginning.

> Body parameter

```json
{
  "jobId": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="getbatchpredictionjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetBatchPredictionJobsRequest](#schemagetbatchpredictionjobsrequest)|true|none|
|» jobId|body|object|false|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetBatchPredictionJobs|

> Example responses

> 200 Response

```json
{
  "batchPredictions": {},
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

<h3 id="getbatchpredictionjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBatchPredictionJobsResult](#schemagetbatchpredictionjobsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeleteEventsByEventTypeStatus

<a id="opIdGetDeleteEventsByEventTypeStatus"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus' \
  -d '{
    "eventTypeName": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus`

Retrieves the status of a <code>DeleteEventsByEventType</code> action.

> Body parameter

```json
{
  "eventTypeName": {}
}
```

<h3 id="getdeleteeventsbyeventtypestatus-parameters">Parameters</h3>

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
|body|body|[GetDeleteEventsByEventTypeStatusRequest](#schemagetdeleteeventsbyeventtypestatusrequest)|true|none|
|» eventTypeName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus|

> Example responses

> 200 Response

```json
{
  "eventTypeName": {},
  "eventsDeletionStatus": {}
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

<h3 id="getdeleteeventsbyeventtypestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeleteEventsByEventTypeStatusResult](#schemagetdeleteeventsbyeventtypestatusresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDetectorVersion

<a id="opIdGetDetectorVersion"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetDetectorVersion' \
  -d '{
    "detectorId": {},
    "detectorVersionId": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion`

Gets a particular detector version. 

> Body parameter

```json
{
  "detectorId": {},
  "detectorVersionId": {}
}
```

<h3 id="getdetectorversion-parameters">Parameters</h3>

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
|body|body|[GetDetectorVersionRequest](#schemagetdetectorversionrequest)|true|none|
|» detectorId|body|object|true|none|
|» detectorVersionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetDetectorVersion|

> Example responses

> 200 Response

```json
{
  "detectorId": {},
  "detectorVersionId": {},
  "description": {},
  "externalModelEndpoints": {},
  "modelVersions": {},
  "rules": {},
  "status": {},
  "lastUpdatedTime": {},
  "createdTime": {},
  "ruleExecutionMode": {},
  "arn": {}
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

<h3 id="getdetectorversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDetectorVersionResult](#schemagetdetectorversionresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDetectors

<a id="opIdGetDetectors"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetDetectors' \
  -d '{
    "detectorId": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors`

Gets all detectors or a single detector if a <code>detectorId</code> is specified. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetDetectorsResponse</code> as part of your request. A null pagination token fetches the records from the beginning. 

> Body parameter

```json
{
  "detectorId": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getdetectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetDetectorsRequest](#schemagetdetectorsrequest)|true|none|
|» detectorId|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetDetectors|

> Example responses

> 200 Response

```json
{
  "detectors": {},
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

<h3 id="getdetectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDetectorsResult](#schemagetdetectorsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEntityTypes

<a id="opIdGetEntityTypes"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetEntityTypes' \
  -d '{
    "name": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes`

Gets all entity types or a specific entity type if a name is specified. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetEntityTypesResponse</code> as part of your request. A null pagination token fetches the records from the beginning. 

> Body parameter

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getentitytypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetEntityTypesRequest](#schemagetentitytypesrequest)|true|none|
|» name|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetEntityTypes|

> Example responses

> 200 Response

```json
{
  "entityTypes": {},
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

<h3 id="getentitytypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEntityTypesResult](#schemagetentitytypesresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEvent

<a id="opIdGetEvent"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetEvent' \
  -d '{
    "eventId": {},
    "eventTypeName": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent`

Retrieves details of events stored with Amazon Fraud Detector. This action does not retrieve prediction results.

> Body parameter

```json
{
  "eventId": {},
  "eventTypeName": {}
}
```

<h3 id="getevent-parameters">Parameters</h3>

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
|body|body|[GetEventRequest](#schemageteventrequest)|true|none|
|» eventId|body|object|true|none|
|» eventTypeName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetEvent|

> Example responses

> 200 Response

```json
{
  "event": {
    "eventId": {},
    "eventTypeName": {},
    "eventTimestamp": {},
    "eventVariables": {
      "property1": "password",
      "property2": "password"
    },
    "currentLabel": {},
    "labelTimestamp": {},
    "entities": {}
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

<h3 id="getevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEventResult](#schemageteventresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEventPrediction

<a id="opIdGetEventPrediction"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetEventPrediction' \
  -d '{
    "detectorId": {},
    "detectorVersionId": {},
    "eventId": {},
    "eventTypeName": {},
    "entities": {},
    "eventTimestamp": {},
    "eventVariables": {
      "property1": "password",
      "property2": "password"
    },
    "externalModelEndpointDataBlobs": {
      "property1": {
        "byteBuffer": {},
        "contentType": {}
      },
      "property2": {
        "byteBuffer": {},
        "contentType": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction`

Evaluates an event against a detector version. If a version ID is not provided, the detector’s (<code>ACTIVE</code>) version is used.

> Body parameter

```json
{
  "detectorId": {},
  "detectorVersionId": {},
  "eventId": {},
  "eventTypeName": {},
  "entities": {},
  "eventTimestamp": {},
  "eventVariables": {
    "property1": "password",
    "property2": "password"
  },
  "externalModelEndpointDataBlobs": {
    "property1": {
      "byteBuffer": {},
      "contentType": {}
    },
    "property2": {
      "byteBuffer": {},
      "contentType": {}
    }
  }
}
```

<h3 id="geteventprediction-parameters">Parameters</h3>

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
|body|body|[GetEventPredictionRequest](#schemageteventpredictionrequest)|true|none|
|» detectorId|body|object|true|none|
|» detectorVersionId|body|object|false|none|
|» eventId|body|object|true|none|
|» eventTypeName|body|object|true|none|
|» entities|body|object|true|none|
|» eventTimestamp|body|object|true|none|
|» eventVariables|body|object|true|none|
|» » **additionalProperties**|body|[variableValue](#schemavariablevalue)|false|none|
|» externalModelEndpointDataBlobs|body|object|false|none|
|» » **additionalProperties**|body|[ModelEndpointDataBlob](#schemamodelendpointdatablob)|false|A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetEventPrediction|

> Example responses

> 200 Response

```json
{
  "modelScores": {},
  "ruleResults": {},
  "externalModelOutputs": {}
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

<h3 id="geteventprediction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEventPredictionResult](#schemageteventpredictionresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|
|486|486|ResourceUnavailableException|[ResourceUnavailableException](#schemaresourceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEventPredictionMetadata

<a id="opIdGetEventPredictionMetadata"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetEventPredictionMetadata' \
  -d '{
    "eventId": {},
    "eventTypeName": {},
    "detectorId": {},
    "detectorVersionId": {},
    "predictionTimestamp": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata`

 Gets details of the past fraud predictions for the specified event ID, event type, detector ID, and detector version ID that was generated in the specified time period. 

> Body parameter

```json
{
  "eventId": {},
  "eventTypeName": {},
  "detectorId": {},
  "detectorVersionId": {},
  "predictionTimestamp": {}
}
```

<h3 id="geteventpredictionmetadata-parameters">Parameters</h3>

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
|body|body|[GetEventPredictionMetadataRequest](#schemageteventpredictionmetadatarequest)|true|none|
|» eventId|body|object|true|none|
|» eventTypeName|body|object|true|none|
|» detectorId|body|object|true|none|
|» detectorVersionId|body|object|true|none|
|» predictionTimestamp|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetEventPredictionMetadata|

> Example responses

> 200 Response

```json
{
  "eventId": {},
  "eventTypeName": {},
  "entityId": {},
  "entityType": {},
  "eventTimestamp": {},
  "detectorId": {},
  "detectorVersionId": {},
  "detectorVersionStatus": {},
  "eventVariables": {},
  "rules": {},
  "ruleExecutionMode": {},
  "outcomes": {},
  "evaluatedModelVersions": {},
  "evaluatedExternalModels": {},
  "predictionTimestamp": {}
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

<h3 id="geteventpredictionmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEventPredictionMetadataResult](#schemageteventpredictionmetadataresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEventTypes

<a id="opIdGetEventTypes"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetEventTypes' \
  -d '{
    "name": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes`

Gets all event types or a specific event type if name is provided. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetEventTypesResponse</code> as part of your request. A null pagination token fetches the records from the beginning. 

> Body parameter

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="geteventtypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetEventTypesRequest](#schemageteventtypesrequest)|true|none|
|» name|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetEventTypes|

> Example responses

> 200 Response

```json
{
  "eventTypes": {},
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

<h3 id="geteventtypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEventTypesResult](#schemageteventtypesresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetExternalModels

<a id="opIdGetExternalModels"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetExternalModels' \
  -d '{
    "modelEndpoint": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels`

Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null <code>maxResults</code>, this actions retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetExternalModelsResult</code> as part of your request. A null pagination token fetches the records from the beginning. 

> Body parameter

```json
{
  "modelEndpoint": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getexternalmodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetExternalModelsRequest](#schemagetexternalmodelsrequest)|true|none|
|» modelEndpoint|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetExternalModels|

> Example responses

> 200 Response

```json
{
  "externalModels": {},
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

<h3 id="getexternalmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetExternalModelsResult](#schemagetexternalmodelsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetKMSEncryptionKey

<a id="opIdGetKMSEncryptionKey"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetKMSEncryptionKey'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey`

Gets the encryption key if a KMS key has been specified to be used to encrypt content in Amazon Fraud Detector.

<h3 id="getkmsencryptionkey-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetKMSEncryptionKey|

> Example responses

> 200 Response

```json
{
  "kmsKey": {
    "kmsEncryptionKeyArn": {}
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

<h3 id="getkmsencryptionkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetKMSEncryptionKeyResult](#schemagetkmsencryptionkeyresult)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLabels

<a id="opIdGetLabels"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetLabels' \
  -d '{
    "name": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels`

Gets all labels or a specific label if name is provided. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 50 records per page. If you provide a <code>maxResults</code>, the value must be between 10 and 50. To get the next page results, provide the pagination token from the <code>GetGetLabelsResponse</code> as part of your request. A null pagination token fetches the records from the beginning. 

> Body parameter

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getlabels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetLabelsRequest](#schemagetlabelsrequest)|true|none|
|» name|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetLabels|

> Example responses

> 200 Response

```json
{
  "labels": {},
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

<h3 id="getlabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLabelsResult](#schemagetlabelsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetListElements

<a id="opIdGetListElements"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetListElements' \
  -d '{
    "name": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements`

 Gets all the elements in the specified list. 

> Body parameter

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getlistelements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetListElementsRequest](#schemagetlistelementsrequest)|true|none|
|» name|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetListElements|

> Example responses

> 200 Response

```json
{
  "elements": {},
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

<h3 id="getlistelements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetListElementsResult](#schemagetlistelementsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetListsMetadata

<a id="opIdGetListsMetadata"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetListsMetadata' \
  -d '{
    "name": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata`

 Gets the metadata of either all the lists under the account or the specified list. 

> Body parameter

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getlistsmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetListsMetadataRequest](#schemagetlistsmetadatarequest)|true|none|
|» name|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetListsMetadata|

> Example responses

> 200 Response

```json
{
  "lists": {},
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

<h3 id="getlistsmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetListsMetadataResult](#schemagetlistsmetadataresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetModelVersion

<a id="opIdGetModelVersion"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetModelVersion' \
  -d '{
    "modelId": {},
    "modelType": {},
    "modelVersionNumber": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion`

Gets the details of the specified model version.

> Body parameter

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {}
}
```

<h3 id="getmodelversion-parameters">Parameters</h3>

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
|body|body|[GetModelVersionRequest](#schemagetmodelversionrequest)|true|none|
|» modelId|body|object|true|none|
|» modelType|body|object|true|none|
|» modelVersionNumber|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetModelVersion|

> Example responses

> 200 Response

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {},
  "trainingDataSource": {},
  "trainingDataSchema": {
    "modelVariables": {},
    "labelSchema": {
      "labelMapper": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "unlabeledEventsTreatment": {}
    }
  },
  "externalEventsDetail": {
    "dataLocation": {},
    "dataAccessRoleArn": {}
  },
  "ingestedEventsDetail": {
    "ingestedEventsTimeWindow": {
      "startTime": {},
      "endTime": {}
    }
  },
  "status": {},
  "arn": {}
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

<h3 id="getmodelversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetModelVersionResult](#schemagetmodelversionresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetModels

<a id="opIdGetModels"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetModels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetModels' \
  -d '{
    "modelId": {},
    "modelType": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetModels`

<p>Gets one or more models. Gets all models for the Amazon Web Services account if no model type and no model id provided. Gets all models for the Amazon Web Services account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified. </p> <p>This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 1 and 10. To get the next page results, provide the pagination token from the response as part of your request. A null pagination token fetches the records from the beginning.</p>

> Body parameter

```json
{
  "modelId": {},
  "modelType": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getmodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetModelsRequest](#schemagetmodelsrequest)|true|none|
|» modelId|body|object|false|none|
|» modelType|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetModels|

> Example responses

> 200 Response

```json
{
  "nextToken": {},
  "models": {}
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

<h3 id="getmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetModelsResult](#schemagetmodelsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOutcomes

<a id="opIdGetOutcomes"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetOutcomes' \
  -d '{
    "name": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes`

Gets one or more outcomes. This is a paginated API. If you provide a null <code>maxResults</code>, this actions retrieves a maximum of 100 records per page. If you provide a <code>maxResults</code>, the value must be between 50 and 100. To get the next page results, provide the pagination token from the <code>GetOutcomesResult</code> as part of your request. A null pagination token fetches the records from the beginning. 

> Body parameter

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getoutcomes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetOutcomesRequest](#schemagetoutcomesrequest)|true|none|
|» name|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetOutcomes|

> Example responses

> 200 Response

```json
{
  "outcomes": {},
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

<h3 id="getoutcomes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOutcomesResult](#schemagetoutcomesresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRules

<a id="opIdGetRules"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetRules' \
  -d '{
    "ruleId": {},
    "detectorId": {},
    "ruleVersion": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetRules`

<p>Get all rules for a detector (paginated) if <code>ruleId</code> and <code>ruleVersion</code> are not specified. Gets all rules for the detector and the <code>ruleId</code> if present (paginated). Gets a specific rule if both the <code>ruleId</code> and the <code>ruleVersion</code> are specified.</p> <p>This is a paginated API. Providing null maxResults results in retrieving maximum of 100 records per page. If you provide maxResults the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetRulesResult as part of your request. Null pagination token fetches the records from the beginning.</p>

> Body parameter

```json
{
  "ruleId": {},
  "detectorId": {},
  "ruleVersion": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetRulesRequest](#schemagetrulesrequest)|true|none|
|» ruleId|body|object|false|none|
|» detectorId|body|object|true|none|
|» ruleVersion|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetRules|

> Example responses

> 200 Response

```json
{
  "ruleDetails": {},
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

<h3 id="getrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRulesResult](#schemagetrulesresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetVariables

<a id="opIdGetVariables"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.GetVariables' \
  -d '{
    "name": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables`

Gets all of the variables or the specific variable. This is a paginated API. Providing null <code>maxSizePerPage</code> results in retrieving maximum of 100 records per page. If you provide <code>maxSizePerPage</code> the value must be between 50 and 100. To get the next page result, a provide a pagination token from <code>GetVariablesResult</code> as part of your request. Null pagination token fetches the records from the beginning. 

> Body parameter

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getvariables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetVariablesRequest](#schemagetvariablesrequest)|true|none|
|» name|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.GetVariables|

> Example responses

> 200 Response

```json
{
  "variables": {},
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

<h3 id="getvariables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetVariablesResult](#schemagetvariablesresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEventPredictions

<a id="opIdListEventPredictions"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.ListEventPredictions' \
  -d '{
    "eventId": {
      "value": {}
    },
    "eventType": {
      "value": {}
    },
    "detectorId": {
      "value": {}
    },
    "detectorVersionId": {
      "value": {}
    },
    "predictionTimeRange": {
      "startTime": {},
      "endTime": {}
    },
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions`

<p>Gets a list of past predictions. The list can be filtered by detector ID, detector version ID, event ID, event type, or by specifying a time period. If filter is not specified, the most recent prediction is returned.</p> <p>For example, the following filter lists all past predictions for <code>xyz</code> event type - <code>{ "eventType":{ "value": "xyz" }” } </code> </p> <p>This is a paginated API. If you provide a null <code>maxResults</code>, this action will retrieve a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 50 and 100. To get the next page results, provide the <code>nextToken</code> from the response as part of your request. A null <code>nextToken</code> fetches the records from the beginning. </p>

> Body parameter

```json
{
  "eventId": {
    "value": {}
  },
  "eventType": {
    "value": {}
  },
  "detectorId": {
    "value": {}
  },
  "detectorVersionId": {
    "value": {}
  },
  "predictionTimeRange": {
    "startTime": {},
    "endTime": {}
  },
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listeventpredictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListEventPredictionsRequest](#schemalisteventpredictionsrequest)|true|none|
|» eventId|body|object|false|none|
|» » value|body|object|false|none|
|» eventType|body|object|false|none|
|» » value|body|object|false|none|
|» detectorId|body|object|false|none|
|» » value|body|object|false|none|
|» detectorVersionId|body|object|false|none|
|» » value|body|object|false|none|
|» predictionTimeRange|body|object|false|none|
|» » startTime|body|object|true|none|
|» » endTime|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.ListEventPredictions|

> Example responses

> 200 Response

```json
{
  "eventPredictionSummaries": {},
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

<h3 id="listeventpredictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEventPredictionsResult](#schemalisteventpredictionsresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.ListTagsForResource' \
  -d '{
    "resourceARN": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource`

Lists all tags associated with the resource. This is a paginated API. To get the next page results, provide the pagination token from the response as part of your request. A null pagination token fetches the records from the beginning. 

> Body parameter

```json
{
  "resourceARN": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» resourceARN|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "tags": {},
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResult](#schemalisttagsforresourceresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutDetector

<a id="opIdPutDetector"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.PutDetector' \
  -d '{
    "detectorId": {},
    "description": {},
    "eventTypeName": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector`

Creates or updates a detector. 

> Body parameter

```json
{
  "detectorId": {},
  "description": {},
  "eventTypeName": {},
  "tags": {}
}
```

<h3 id="putdetector-parameters">Parameters</h3>

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
|body|body|[PutDetectorRequest](#schemaputdetectorrequest)|true|none|
|» detectorId|body|object|true|none|
|» description|body|object|false|none|
|» eventTypeName|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.PutDetector|

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

<h3 id="putdetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutDetectorResult](#schemaputdetectorresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutEntityType

<a id="opIdPutEntityType"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.PutEntityType' \
  -d '{
    "name": {},
    "description": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType`

Creates or updates an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account.

> Body parameter

```json
{
  "name": {},
  "description": {},
  "tags": {}
}
```

<h3 id="putentitytype-parameters">Parameters</h3>

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
|body|body|[PutEntityTypeRequest](#schemaputentitytyperequest)|true|none|
|» name|body|object|true|none|
|» description|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.PutEntityType|

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

<h3 id="putentitytype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutEntityTypeResult](#schemaputentitytyperesult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutEventType

<a id="opIdPutEventType"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.PutEventType' \
  -d '{
    "name": {},
    "description": {},
    "eventVariables": {},
    "labels": {},
    "entityTypes": {},
    "eventIngestion": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType`

Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.

> Body parameter

```json
{
  "name": {},
  "description": {},
  "eventVariables": {},
  "labels": {},
  "entityTypes": {},
  "eventIngestion": {},
  "tags": {}
}
```

<h3 id="puteventtype-parameters">Parameters</h3>

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
|body|body|[PutEventTypeRequest](#schemaputeventtyperequest)|true|none|
|» name|body|object|true|none|
|» description|body|object|false|none|
|» eventVariables|body|object|true|none|
|» labels|body|object|false|none|
|» entityTypes|body|object|true|none|
|» eventIngestion|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.PutEventType|

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

<h3 id="puteventtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutEventTypeResult](#schemaputeventtyperesult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutExternalModel

<a id="opIdPutExternalModel"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.PutExternalModel' \
  -d '{
    "modelEndpoint": {},
    "modelSource": {},
    "invokeModelEndpointRoleArn": {},
    "inputConfiguration": {
      "eventTypeName": {},
      "format": {},
      "useEventVariables": {},
      "jsonInputTemplate": {},
      "csvInputTemplate": {}
    },
    "outputConfiguration": {
      "format": {},
      "jsonKeyToVariableMap": {
        "property1": "string",
        "property2": "string"
      },
      "csvIndexToVariableMap": {
        "property1": "string",
        "property2": "string"
      }
    },
    "modelEndpointStatus": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel`

Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables. 

> Body parameter

```json
{
  "modelEndpoint": {},
  "modelSource": {},
  "invokeModelEndpointRoleArn": {},
  "inputConfiguration": {
    "eventTypeName": {},
    "format": {},
    "useEventVariables": {},
    "jsonInputTemplate": {},
    "csvInputTemplate": {}
  },
  "outputConfiguration": {
    "format": {},
    "jsonKeyToVariableMap": {
      "property1": "string",
      "property2": "string"
    },
    "csvIndexToVariableMap": {
      "property1": "string",
      "property2": "string"
    }
  },
  "modelEndpointStatus": {},
  "tags": {}
}
```

<h3 id="putexternalmodel-parameters">Parameters</h3>

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
|body|body|[PutExternalModelRequest](#schemaputexternalmodelrequest)|true|none|
|» modelEndpoint|body|object|true|none|
|» modelSource|body|object|true|none|
|» invokeModelEndpointRoleArn|body|object|true|none|
|» inputConfiguration|body|object|true|none|
|» » eventTypeName|body|object|false|none|
|» » format|body|object|false|none|
|» » useEventVariables|body|object|true|none|
|» » jsonInputTemplate|body|object|false|none|
|» » csvInputTemplate|body|object|false|none|
|» outputConfiguration|body|object|true|none|
|» » format|body|object|true|none|
|» » jsonKeyToVariableMap|body|object|false|none|
|» » » **additionalProperties**|body|[string](#schemastring)|false|none|
|» » csvIndexToVariableMap|body|object|false|none|
|» » » **additionalProperties**|body|[string](#schemastring)|false|none|
|» modelEndpointStatus|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.PutExternalModel|

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

<h3 id="putexternalmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutExternalModelResult](#schemaputexternalmodelresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutKMSEncryptionKey

<a id="opIdPutKMSEncryptionKey"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.PutKMSEncryptionKey' \
  -d '{
    "kmsEncryptionKeyArn": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey`

Specifies the KMS key to be used to encrypt content in Amazon Fraud Detector.

> Body parameter

```json
{
  "kmsEncryptionKeyArn": {}
}
```

<h3 id="putkmsencryptionkey-parameters">Parameters</h3>

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
|body|body|[PutKMSEncryptionKeyRequest](#schemaputkmsencryptionkeyrequest)|true|none|
|» kmsEncryptionKeyArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.PutKMSEncryptionKey|

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

<h3 id="putkmsencryptionkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutKMSEncryptionKeyResult](#schemaputkmsencryptionkeyresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutLabel

<a id="opIdPutLabel"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.PutLabel' \
  -d '{
    "name": {},
    "description": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel`

Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector. 

> Body parameter

```json
{
  "name": {},
  "description": {},
  "tags": {}
}
```

<h3 id="putlabel-parameters">Parameters</h3>

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
|body|body|[PutLabelRequest](#schemaputlabelrequest)|true|none|
|» name|body|object|true|none|
|» description|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.PutLabel|

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

<h3 id="putlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutLabelResult](#schemaputlabelresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutOutcome

<a id="opIdPutOutcome"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.PutOutcome' \
  -d '{
    "name": {},
    "description": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome`

Creates or updates an outcome. 

> Body parameter

```json
{
  "name": {},
  "description": {},
  "tags": {}
}
```

<h3 id="putoutcome-parameters">Parameters</h3>

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
|body|body|[PutOutcomeRequest](#schemaputoutcomerequest)|true|none|
|» name|body|object|true|none|
|» description|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.PutOutcome|

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

<h3 id="putoutcome-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutOutcomeResult](#schemaputoutcomeresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendEvent

<a id="opIdSendEvent"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.SendEvent' \
  -d '{
    "eventId": {},
    "eventTypeName": {},
    "eventTimestamp": {},
    "eventVariables": {
      "property1": "password",
      "property2": "password"
    },
    "assignedLabel": {},
    "labelTimestamp": {},
    "entities": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent`

Stores events in Amazon Fraud Detector without generating fraud predictions for those events. For example, you can use <code>SendEvent</code> to upload a historical dataset, which you can then later use to train a model.

> Body parameter

```json
{
  "eventId": {},
  "eventTypeName": {},
  "eventTimestamp": {},
  "eventVariables": {
    "property1": "password",
    "property2": "password"
  },
  "assignedLabel": {},
  "labelTimestamp": {},
  "entities": {}
}
```

<h3 id="sendevent-parameters">Parameters</h3>

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
|body|body|[SendEventRequest](#schemasendeventrequest)|true|none|
|» eventId|body|object|true|none|
|» eventTypeName|body|object|true|none|
|» eventTimestamp|body|object|true|none|
|» eventVariables|body|object|true|none|
|» » **additionalProperties**|body|[variableValue](#schemavariablevalue)|false|none|
|» assignedLabel|body|object|false|none|
|» labelTimestamp|body|object|false|none|
|» entities|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.SendEvent|

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

<h3 id="sendevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendEventResult](#schemasendeventresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.TagResource' \
  -d '{
    "resourceARN": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.TagResource`

Assigns tags to a resource.

> Body parameter

```json
{
  "resourceARN": {},
  "tags": {}
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
|» resourceARN|body|object|true|none|
|» tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResult](#schematagresourceresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.UntagResource' \
  -d '{
    "resourceARN": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource`

Removes tags from a resource.

> Body parameter

```json
{
  "resourceARN": {},
  "tagKeys": {}
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
|» resourceARN|body|object|true|none|
|» tagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResult](#schemauntagresourceresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDetectorVersion

<a id="opIdUpdateDetectorVersion"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.UpdateDetectorVersion' \
  -d '{
    "detectorId": {},
    "detectorVersionId": {},
    "externalModelEndpoints": {},
    "rules": {},
    "description": {},
    "modelVersions": {},
    "ruleExecutionMode": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion`

 Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a <code>DRAFT</code> detector version.

> Body parameter

```json
{
  "detectorId": {},
  "detectorVersionId": {},
  "externalModelEndpoints": {},
  "rules": {},
  "description": {},
  "modelVersions": {},
  "ruleExecutionMode": {}
}
```

<h3 id="updatedetectorversion-parameters">Parameters</h3>

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
|body|body|[UpdateDetectorVersionRequest](#schemaupdatedetectorversionrequest)|true|none|
|» detectorId|body|object|true|none|
|» detectorVersionId|body|object|true|none|
|» externalModelEndpoints|body|object|true|none|
|» rules|body|object|true|none|
|» description|body|object|false|none|
|» modelVersions|body|object|false|none|
|» ruleExecutionMode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.UpdateDetectorVersion|

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

<h3 id="updatedetectorversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDetectorVersionResult](#schemaupdatedetectorversionresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDetectorVersionMetadata

<a id="opIdUpdateDetectorVersionMetadata"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata' \
  -d '{
    "detectorId": {},
    "detectorVersionId": {},
    "description": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata`

Updates the detector version's description. You can update the metadata for any detector version (<code>DRAFT, ACTIVE,</code> or <code>INACTIVE</code>). 

> Body parameter

```json
{
  "detectorId": {},
  "detectorVersionId": {},
  "description": {}
}
```

<h3 id="updatedetectorversionmetadata-parameters">Parameters</h3>

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
|body|body|[UpdateDetectorVersionMetadataRequest](#schemaupdatedetectorversionmetadatarequest)|true|none|
|» detectorId|body|object|true|none|
|» detectorVersionId|body|object|true|none|
|» description|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata|

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

<h3 id="updatedetectorversionmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDetectorVersionMetadataResult](#schemaupdatedetectorversionmetadataresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDetectorVersionStatus

<a id="opIdUpdateDetectorVersionStatus"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.UpdateDetectorVersionStatus' \
  -d '{
    "detectorId": {},
    "detectorVersionId": {},
    "status": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus`

Updates the detector version’s status. You can perform the following promotions or demotions using <code>UpdateDetectorVersionStatus</code>: <code>DRAFT</code> to <code>ACTIVE</code>, <code>ACTIVE</code> to <code>INACTIVE</code>, and <code>INACTIVE</code> to <code>ACTIVE</code>.

> Body parameter

```json
{
  "detectorId": {},
  "detectorVersionId": {},
  "status": {}
}
```

<h3 id="updatedetectorversionstatus-parameters">Parameters</h3>

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
|body|body|[UpdateDetectorVersionStatusRequest](#schemaupdatedetectorversionstatusrequest)|true|none|
|» detectorId|body|object|true|none|
|» detectorVersionId|body|object|true|none|
|» status|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.UpdateDetectorVersionStatus|

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

<h3 id="updatedetectorversionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDetectorVersionStatusResult](#schemaupdatedetectorversionstatusresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEventLabel

<a id="opIdUpdateEventLabel"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.UpdateEventLabel' \
  -d '{
    "eventId": {},
    "eventTypeName": {},
    "assignedLabel": {},
    "labelTimestamp": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel`

Updates the specified event with a new label.

> Body parameter

```json
{
  "eventId": {},
  "eventTypeName": {},
  "assignedLabel": {},
  "labelTimestamp": {}
}
```

<h3 id="updateeventlabel-parameters">Parameters</h3>

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
|body|body|[UpdateEventLabelRequest](#schemaupdateeventlabelrequest)|true|none|
|» eventId|body|object|true|none|
|» eventTypeName|body|object|true|none|
|» assignedLabel|body|object|true|none|
|» labelTimestamp|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.UpdateEventLabel|

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

<h3 id="updateeventlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEventLabelResult](#schemaupdateeventlabelresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateList

<a id="opIdUpdateList"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.UpdateList' \
  -d '{
    "name": {},
    "elements": {},
    "description": {},
    "updateMode": {},
    "variableType": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList`

 Updates a list. 

> Body parameter

```json
{
  "name": {},
  "elements": {},
  "description": {},
  "updateMode": {},
  "variableType": {}
}
```

<h3 id="updatelist-parameters">Parameters</h3>

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
|body|body|[UpdateListRequest](#schemaupdatelistrequest)|true|none|
|» name|body|object|true|none|
|» elements|body|object|false|none|
|» description|body|object|false|none|
|» updateMode|body|object|false|none|
|» variableType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.UpdateList|

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

<h3 id="updatelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateListResult](#schemaupdatelistresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateModel

<a id="opIdUpdateModel"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.UpdateModel' \
  -d '{
    "modelId": {},
    "modelType": {},
    "description": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel`

Updates model description.

> Body parameter

```json
{
  "modelId": {},
  "modelType": {},
  "description": {}
}
```

<h3 id="updatemodel-parameters">Parameters</h3>

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
|body|body|[UpdateModelRequest](#schemaupdatemodelrequest)|true|none|
|» modelId|body|object|true|none|
|» modelType|body|object|true|none|
|» description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.UpdateModel|

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

<h3 id="updatemodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateModelResult](#schemaupdatemodelresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateModelVersion

<a id="opIdUpdateModelVersion"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.UpdateModelVersion' \
  -d '{
    "modelId": {},
    "modelType": {},
    "majorVersionNumber": {},
    "externalEventsDetail": {
      "dataLocation": {},
      "dataAccessRoleArn": {}
    },
    "ingestedEventsDetail": {
      "ingestedEventsTimeWindow": {
        "startTime": {},
        "endTime": {}
      }
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion`

Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.

> Body parameter

```json
{
  "modelId": {},
  "modelType": {},
  "majorVersionNumber": {},
  "externalEventsDetail": {
    "dataLocation": {},
    "dataAccessRoleArn": {}
  },
  "ingestedEventsDetail": {
    "ingestedEventsTimeWindow": {
      "startTime": {},
      "endTime": {}
    }
  },
  "tags": {}
}
```

<h3 id="updatemodelversion-parameters">Parameters</h3>

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
|body|body|[UpdateModelVersionRequest](#schemaupdatemodelversionrequest)|true|none|
|» modelId|body|object|true|none|
|» modelType|body|object|true|none|
|» majorVersionNumber|body|object|true|none|
|» externalEventsDetail|body|object|false|none|
|» » dataLocation|body|object|true|none|
|» » dataAccessRoleArn|body|object|true|none|
|» ingestedEventsDetail|body|object|false|none|
|» » ingestedEventsTimeWindow|body|object|true|none|
|» » » startTime|body|object|true|none|
|» » » endTime|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.UpdateModelVersion|

> Example responses

> 200 Response

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {},
  "status": {}
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

<h3 id="updatemodelversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateModelVersionResult](#schemaupdatemodelversionresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateModelVersionStatus

<a id="opIdUpdateModelVersionStatus"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.UpdateModelVersionStatus' \
  -d '{
    "modelId": {},
    "modelType": {},
    "modelVersionNumber": {},
    "status": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus`

<p>Updates the status of a model version.</p> <p>You can perform the following status updates:</p> <ol> <li> <p>Change the <code>TRAINING_IN_PROGRESS</code> status to <code>TRAINING_CANCELLED</code>.</p> </li> <li> <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code>.</p> </li> <li> <p>Change <code>ACTIVE</code> to <code>INACTIVE</code>.</p> </li> </ol>

> Body parameter

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {},
  "status": {}
}
```

<h3 id="updatemodelversionstatus-parameters">Parameters</h3>

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
|body|body|[UpdateModelVersionStatusRequest](#schemaupdatemodelversionstatusrequest)|true|none|
|» modelId|body|object|true|none|
|» modelType|body|object|true|none|
|» modelVersionNumber|body|object|true|none|
|» status|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.UpdateModelVersionStatus|

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

<h3 id="updatemodelversionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateModelVersionStatusResult](#schemaupdatemodelversionstatusresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRuleMetadata

<a id="opIdUpdateRuleMetadata"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.UpdateRuleMetadata' \
  -d '{
    "rule": {
      "detectorId": {},
      "ruleId": {},
      "ruleVersion": {}
    },
    "description": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata`

Updates a rule's metadata. The description attribute can be updated.

> Body parameter

```json
{
  "rule": {
    "detectorId": {},
    "ruleId": {},
    "ruleVersion": {}
  },
  "description": {}
}
```

<h3 id="updaterulemetadata-parameters">Parameters</h3>

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
|body|body|[UpdateRuleMetadataRequest](#schemaupdaterulemetadatarequest)|true|none|
|» rule|body|object|true|none|
|» » detectorId|body|object|true|none|
|» » ruleId|body|object|true|none|
|» » ruleVersion|body|object|true|none|
|» description|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.UpdateRuleMetadata|

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

<h3 id="updaterulemetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRuleMetadataResult](#schemaupdaterulemetadataresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRuleVersion

<a id="opIdUpdateRuleVersion"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.UpdateRuleVersion' \
  -d '{
    "rule": {
      "detectorId": {},
      "ruleId": {},
      "ruleVersion": {}
    },
    "description": {},
    "expression": {},
    "language": {},
    "outcomes": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion`

Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...). 

> Body parameter

```json
{
  "rule": {
    "detectorId": {},
    "ruleId": {},
    "ruleVersion": {}
  },
  "description": {},
  "expression": {},
  "language": {},
  "outcomes": {},
  "tags": {}
}
```

<h3 id="updateruleversion-parameters">Parameters</h3>

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
|body|body|[UpdateRuleVersionRequest](#schemaupdateruleversionrequest)|true|none|
|» rule|body|object|true|none|
|» » detectorId|body|object|true|none|
|» » ruleId|body|object|true|none|
|» » ruleVersion|body|object|true|none|
|» description|body|object|false|none|
|» expression|body|object|true|none|
|» language|body|object|true|none|
|» outcomes|body|object|true|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.UpdateRuleVersion|

> Example responses

> 200 Response

```json
{
  "rule": {
    "detectorId": {},
    "ruleId": {},
    "ruleVersion": {}
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

<h3 id="updateruleversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRuleVersionResult](#schemaupdateruleversionresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVariable

<a id="opIdUpdateVariable"></a>

> Code samples

```bash
curl 'https://frauddetector.us-east-1.amazonaws.com/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHawksNestServiceFacade.UpdateVariable' \
  -d '{
    "name": {},
    "defaultValue": {},
    "description": {},
    "variableType": {}
  }'
```

`POST /#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable`

Updates a variable.

> Body parameter

```json
{
  "name": {},
  "defaultValue": {},
  "description": {},
  "variableType": {}
}
```

<h3 id="updatevariable-parameters">Parameters</h3>

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
|body|body|[UpdateVariableRequest](#schemaupdatevariablerequest)|true|none|
|» name|body|object|true|none|
|» defaultValue|body|object|false|none|
|» description|body|object|false|none|
|» variableType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHawksNestServiceFacade.UpdateVariable|

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

<h3 id="updatevariable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVariableResult](#schemaupdatevariableresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchCreateVariableResult">BatchCreateVariableResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatevariableresult"></a>
<a id="schema_BatchCreateVariableResult"></a>
<a id="tocSbatchcreatevariableresult"></a>
<a id="tocsbatchcreatevariableresult"></a>

```json
{
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|

<h2 id="tocS_BatchCreateVariableRequest">BatchCreateVariableRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatevariablerequest"></a>
<a id="schema_BatchCreateVariableRequest"></a>
<a id="tocSbatchcreatevariablerequest"></a>
<a id="tocsbatchcreatevariablerequest"></a>

```json
{
  "variableEntries": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variableEntries|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

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

<h2 id="tocS_BatchGetVariableResult">BatchGetVariableResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetvariableresult"></a>
<a id="schema_BatchGetVariableResult"></a>
<a id="tocSbatchgetvariableresult"></a>
<a id="tocsbatchgetvariableresult"></a>

```json
{
  "variables": {},
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variables|object|false|none|none|
|errors|object|false|none|none|

<h2 id="tocS_BatchGetVariableRequest">BatchGetVariableRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetvariablerequest"></a>
<a id="schema_BatchGetVariableRequest"></a>
<a id="tocSbatchgetvariablerequest"></a>
<a id="tocsbatchgetvariablerequest"></a>

```json
{
  "names": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|object|true|none|none|

<h2 id="tocS_CancelBatchImportJobResult">CancelBatchImportJobResult</h2>
<!-- backwards compatibility -->
<a id="schemacancelbatchimportjobresult"></a>
<a id="schema_CancelBatchImportJobResult"></a>
<a id="tocScancelbatchimportjobresult"></a>
<a id="tocscancelbatchimportjobresult"></a>

```json
{}
```

<h2 id="tocS_CancelBatchImportJobRequest">CancelBatchImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelbatchimportjobrequest"></a>
<a id="schema_CancelBatchImportJobRequest"></a>
<a id="tocScancelbatchimportjobrequest"></a>
<a id="tocscancelbatchimportjobrequest"></a>

```json
{
  "jobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_CancelBatchPredictionJobResult">CancelBatchPredictionJobResult</h2>
<!-- backwards compatibility -->
<a id="schemacancelbatchpredictionjobresult"></a>
<a id="schema_CancelBatchPredictionJobResult"></a>
<a id="tocScancelbatchpredictionjobresult"></a>
<a id="tocscancelbatchpredictionjobresult"></a>

```json
{}
```

<h2 id="tocS_CancelBatchPredictionJobRequest">CancelBatchPredictionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelbatchpredictionjobrequest"></a>
<a id="schema_CancelBatchPredictionJobRequest"></a>
<a id="tocScancelbatchpredictionjobrequest"></a>
<a id="tocscancelbatchpredictionjobrequest"></a>

```json
{
  "jobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|

<h2 id="tocS_CreateBatchImportJobResult">CreateBatchImportJobResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchimportjobresult"></a>
<a id="schema_CreateBatchImportJobResult"></a>
<a id="tocScreatebatchimportjobresult"></a>
<a id="tocscreatebatchimportjobresult"></a>

```json
{}
```

<h2 id="tocS_CreateBatchImportJobRequest">CreateBatchImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchimportjobrequest"></a>
<a id="schema_CreateBatchImportJobRequest"></a>
<a id="tocScreatebatchimportjobrequest"></a>
<a id="tocscreatebatchimportjobrequest"></a>

```json
{
  "jobId": {},
  "inputPath": {},
  "outputPath": {},
  "eventTypeName": {},
  "iamRoleArn": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|inputPath|object|true|none|none|
|outputPath|object|true|none|none|
|eventTypeName|object|true|none|none|
|iamRoleArn|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateBatchPredictionJobResult">CreateBatchPredictionJobResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchpredictionjobresult"></a>
<a id="schema_CreateBatchPredictionJobResult"></a>
<a id="tocScreatebatchpredictionjobresult"></a>
<a id="tocscreatebatchpredictionjobresult"></a>

```json
{}
```

<h2 id="tocS_CreateBatchPredictionJobRequest">CreateBatchPredictionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchpredictionjobrequest"></a>
<a id="schema_CreateBatchPredictionJobRequest"></a>
<a id="tocScreatebatchpredictionjobrequest"></a>
<a id="tocscreatebatchpredictionjobrequest"></a>

```json
{
  "jobId": {},
  "inputPath": {},
  "outputPath": {},
  "eventTypeName": {},
  "detectorName": {},
  "detectorVersion": {},
  "iamRoleArn": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|
|inputPath|object|true|none|none|
|outputPath|object|true|none|none|
|eventTypeName|object|true|none|none|
|detectorName|object|true|none|none|
|detectorVersion|object|false|none|none|
|iamRoleArn|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateDetectorVersionResult">CreateDetectorVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedetectorversionresult"></a>
<a id="schema_CreateDetectorVersionResult"></a>
<a id="tocScreatedetectorversionresult"></a>
<a id="tocscreatedetectorversionresult"></a>

```json
{
  "detectorId": {},
  "detectorVersionId": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|false|none|none|
|detectorVersionId|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_CreateDetectorVersionRequest">CreateDetectorVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedetectorversionrequest"></a>
<a id="schema_CreateDetectorVersionRequest"></a>
<a id="tocScreatedetectorversionrequest"></a>
<a id="tocscreatedetectorversionrequest"></a>

```json
{
  "detectorId": {},
  "description": {},
  "externalModelEndpoints": {},
  "rules": {},
  "modelVersions": {},
  "ruleExecutionMode": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|true|none|none|
|description|object|false|none|none|
|externalModelEndpoints|object|false|none|none|
|rules|object|true|none|none|
|modelVersions|object|false|none|none|
|ruleExecutionMode|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateListResult">CreateListResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatelistresult"></a>
<a id="schema_CreateListResult"></a>
<a id="tocScreatelistresult"></a>
<a id="tocscreatelistresult"></a>

```json
{}
```

<h2 id="tocS_CreateListRequest">CreateListRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelistrequest"></a>
<a id="schema_CreateListRequest"></a>
<a id="tocScreatelistrequest"></a>
<a id="tocscreatelistrequest"></a>

```json
{
  "name": {},
  "elements": {},
  "variableType": {},
  "description": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|elements|object|false|none|none|
|variableType|object|false|none|none|
|description|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateModelResult">CreateModelResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodelresult"></a>
<a id="schema_CreateModelResult"></a>
<a id="tocScreatemodelresult"></a>
<a id="tocscreatemodelresult"></a>

```json
{}
```

<h2 id="tocS_CreateModelRequest">CreateModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodelrequest"></a>
<a id="schema_CreateModelRequest"></a>
<a id="tocScreatemodelrequest"></a>
<a id="tocscreatemodelrequest"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "description": {},
  "eventTypeName": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|true|none|none|
|modelType|object|true|none|none|
|description|object|false|none|none|
|eventTypeName|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateModelVersionResult">CreateModelVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodelversionresult"></a>
<a id="schema_CreateModelVersionResult"></a>
<a id="tocScreatemodelversionresult"></a>
<a id="tocscreatemodelversionresult"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|false|none|none|
|modelType|object|false|none|none|
|modelVersionNumber|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_CreateModelVersionRequest">CreateModelVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodelversionrequest"></a>
<a id="schema_CreateModelVersionRequest"></a>
<a id="tocScreatemodelversionrequest"></a>
<a id="tocscreatemodelversionrequest"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "trainingDataSource": {},
  "trainingDataSchema": {
    "modelVariables": {},
    "labelSchema": {
      "labelMapper": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "unlabeledEventsTreatment": {}
    }
  },
  "externalEventsDetail": {
    "dataLocation": {},
    "dataAccessRoleArn": {}
  },
  "ingestedEventsDetail": {
    "ingestedEventsTimeWindow": {
      "startTime": {},
      "endTime": {}
    }
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|true|none|none|
|modelType|object|true|none|none|
|trainingDataSource|object|true|none|none|
|trainingDataSchema|object|true|none|none|
|externalEventsDetail|object|false|none|none|
|ingestedEventsDetail|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateRuleResult">CreateRuleResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateruleresult"></a>
<a id="schema_CreateRuleResult"></a>
<a id="tocScreateruleresult"></a>
<a id="tocscreateruleresult"></a>

```json
{
  "rule": {
    "detectorId": {},
    "ruleId": {},
    "ruleVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|object|false|none|none|

<h2 id="tocS_CreateRuleRequest">CreateRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterulerequest"></a>
<a id="schema_CreateRuleRequest"></a>
<a id="tocScreaterulerequest"></a>
<a id="tocscreaterulerequest"></a>

```json
{
  "ruleId": {},
  "detectorId": {},
  "description": {},
  "expression": {},
  "language": {},
  "outcomes": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleId|object|true|none|none|
|detectorId|object|true|none|none|
|description|object|false|none|none|
|expression|object|true|none|none|
|language|object|true|none|none|
|outcomes|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_CreateVariableResult">CreateVariableResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatevariableresult"></a>
<a id="schema_CreateVariableResult"></a>
<a id="tocScreatevariableresult"></a>
<a id="tocscreatevariableresult"></a>

```json
{}
```

<h2 id="tocS_CreateVariableRequest">CreateVariableRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevariablerequest"></a>
<a id="schema_CreateVariableRequest"></a>
<a id="tocScreatevariablerequest"></a>
<a id="tocscreatevariablerequest"></a>

```json
{
  "name": {},
  "dataType": {},
  "dataSource": {},
  "defaultValue": {},
  "description": {},
  "variableType": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|dataType|object|true|none|none|
|dataSource|object|true|none|none|
|defaultValue|object|true|none|none|
|description|object|false|none|none|
|variableType|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DeleteBatchImportJobResult">DeleteBatchImportJobResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletebatchimportjobresult"></a>
<a id="schema_DeleteBatchImportJobResult"></a>
<a id="tocSdeletebatchimportjobresult"></a>
<a id="tocsdeletebatchimportjobresult"></a>

```json
{}
```

<h2 id="tocS_DeleteBatchImportJobRequest">DeleteBatchImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebatchimportjobrequest"></a>
<a id="schema_DeleteBatchImportJobRequest"></a>
<a id="tocSdeletebatchimportjobrequest"></a>
<a id="tocsdeletebatchimportjobrequest"></a>

```json
{
  "jobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|

<h2 id="tocS_DeleteBatchPredictionJobResult">DeleteBatchPredictionJobResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletebatchpredictionjobresult"></a>
<a id="schema_DeleteBatchPredictionJobResult"></a>
<a id="tocSdeletebatchpredictionjobresult"></a>
<a id="tocsdeletebatchpredictionjobresult"></a>

```json
{}
```

<h2 id="tocS_DeleteBatchPredictionJobRequest">DeleteBatchPredictionJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebatchpredictionjobrequest"></a>
<a id="schema_DeleteBatchPredictionJobRequest"></a>
<a id="tocSdeletebatchpredictionjobrequest"></a>
<a id="tocsdeletebatchpredictionjobrequest"></a>

```json
{
  "jobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|true|none|none|

<h2 id="tocS_DeleteDetectorResult">DeleteDetectorResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedetectorresult"></a>
<a id="schema_DeleteDetectorResult"></a>
<a id="tocSdeletedetectorresult"></a>
<a id="tocsdeletedetectorresult"></a>

```json
{}
```

<h2 id="tocS_DeleteDetectorRequest">DeleteDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedetectorrequest"></a>
<a id="schema_DeleteDetectorRequest"></a>
<a id="tocSdeletedetectorrequest"></a>
<a id="tocsdeletedetectorrequest"></a>

```json
{
  "detectorId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|true|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_DeleteDetectorVersionResult">DeleteDetectorVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletedetectorversionresult"></a>
<a id="schema_DeleteDetectorVersionResult"></a>
<a id="tocSdeletedetectorversionresult"></a>
<a id="tocsdeletedetectorversionresult"></a>

```json
{}
```

<h2 id="tocS_DeleteDetectorVersionRequest">DeleteDetectorVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedetectorversionrequest"></a>
<a id="schema_DeleteDetectorVersionRequest"></a>
<a id="tocSdeletedetectorversionrequest"></a>
<a id="tocsdeletedetectorversionrequest"></a>

```json
{
  "detectorId": {},
  "detectorVersionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|true|none|none|
|detectorVersionId|object|true|none|none|

<h2 id="tocS_DeleteEntityTypeResult">DeleteEntityTypeResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteentitytyperesult"></a>
<a id="schema_DeleteEntityTypeResult"></a>
<a id="tocSdeleteentitytyperesult"></a>
<a id="tocsdeleteentitytyperesult"></a>

```json
{}
```

<h2 id="tocS_DeleteEntityTypeRequest">DeleteEntityTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteentitytyperequest"></a>
<a id="schema_DeleteEntityTypeRequest"></a>
<a id="tocSdeleteentitytyperequest"></a>
<a id="tocsdeleteentitytyperequest"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DeleteEventResult">DeleteEventResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventresult"></a>
<a id="schema_DeleteEventResult"></a>
<a id="tocSdeleteeventresult"></a>
<a id="tocsdeleteeventresult"></a>

```json
{}
```

<h2 id="tocS_DeleteEventRequest">DeleteEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventrequest"></a>
<a id="schema_DeleteEventRequest"></a>
<a id="tocSdeleteeventrequest"></a>
<a id="tocsdeleteeventrequest"></a>

```json
{
  "eventId": {},
  "eventTypeName": {},
  "deleteAuditHistory": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|object|true|none|none|
|eventTypeName|object|true|none|none|
|deleteAuditHistory|object|false|none|none|

<h2 id="tocS_DeleteEventTypeResult">DeleteEventTypeResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventtyperesult"></a>
<a id="schema_DeleteEventTypeResult"></a>
<a id="tocSdeleteeventtyperesult"></a>
<a id="tocsdeleteeventtyperesult"></a>

```json
{}
```

<h2 id="tocS_DeleteEventTypeRequest">DeleteEventTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventtyperequest"></a>
<a id="schema_DeleteEventTypeRequest"></a>
<a id="tocSdeleteeventtyperequest"></a>
<a id="tocsdeleteeventtyperequest"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DeleteEventsByEventTypeResult">DeleteEventsByEventTypeResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventsbyeventtyperesult"></a>
<a id="schema_DeleteEventsByEventTypeResult"></a>
<a id="tocSdeleteeventsbyeventtyperesult"></a>
<a id="tocsdeleteeventsbyeventtyperesult"></a>

```json
{
  "eventTypeName": {},
  "eventsDeletionStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypeName|object|false|none|none|
|eventsDeletionStatus|object|false|none|none|

<h2 id="tocS_DeleteEventsByEventTypeRequest">DeleteEventsByEventTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventsbyeventtyperequest"></a>
<a id="schema_DeleteEventsByEventTypeRequest"></a>
<a id="tocSdeleteeventsbyeventtyperequest"></a>
<a id="tocsdeleteeventsbyeventtyperequest"></a>

```json
{
  "eventTypeName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypeName|object|true|none|none|

<h2 id="tocS_DeleteExternalModelResult">DeleteExternalModelResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteexternalmodelresult"></a>
<a id="schema_DeleteExternalModelResult"></a>
<a id="tocSdeleteexternalmodelresult"></a>
<a id="tocsdeleteexternalmodelresult"></a>

```json
{}
```

<h2 id="tocS_DeleteExternalModelRequest">DeleteExternalModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteexternalmodelrequest"></a>
<a id="schema_DeleteExternalModelRequest"></a>
<a id="tocSdeleteexternalmodelrequest"></a>
<a id="tocsdeleteexternalmodelrequest"></a>

```json
{
  "modelEndpoint": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelEndpoint|object|true|none|none|

<h2 id="tocS_DeleteLabelResult">DeleteLabelResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletelabelresult"></a>
<a id="schema_DeleteLabelResult"></a>
<a id="tocSdeletelabelresult"></a>
<a id="tocsdeletelabelresult"></a>

```json
{}
```

<h2 id="tocS_DeleteLabelRequest">DeleteLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelabelrequest"></a>
<a id="schema_DeleteLabelRequest"></a>
<a id="tocSdeletelabelrequest"></a>
<a id="tocsdeletelabelrequest"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DeleteListResult">DeleteListResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletelistresult"></a>
<a id="schema_DeleteListResult"></a>
<a id="tocSdeletelistresult"></a>
<a id="tocsdeletelistresult"></a>

```json
{}
```

<h2 id="tocS_DeleteListRequest">DeleteListRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelistrequest"></a>
<a id="schema_DeleteListRequest"></a>
<a id="tocSdeletelistrequest"></a>
<a id="tocsdeletelistrequest"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DeleteModelResult">DeleteModelResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletemodelresult"></a>
<a id="schema_DeleteModelResult"></a>
<a id="tocSdeletemodelresult"></a>
<a id="tocsdeletemodelresult"></a>

```json
{}
```

<h2 id="tocS_DeleteModelRequest">DeleteModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemodelrequest"></a>
<a id="schema_DeleteModelRequest"></a>
<a id="tocSdeletemodelrequest"></a>
<a id="tocsdeletemodelrequest"></a>

```json
{
  "modelId": {},
  "modelType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|true|none|none|
|modelType|object|true|none|none|

<h2 id="tocS_DeleteModelVersionResult">DeleteModelVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletemodelversionresult"></a>
<a id="schema_DeleteModelVersionResult"></a>
<a id="tocSdeletemodelversionresult"></a>
<a id="tocsdeletemodelversionresult"></a>

```json
{}
```

<h2 id="tocS_DeleteModelVersionRequest">DeleteModelVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemodelversionrequest"></a>
<a id="schema_DeleteModelVersionRequest"></a>
<a id="tocSdeletemodelversionrequest"></a>
<a id="tocsdeletemodelversionrequest"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|true|none|none|
|modelType|object|true|none|none|
|modelVersionNumber|object|true|none|none|

<h2 id="tocS_DeleteOutcomeResult">DeleteOutcomeResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteoutcomeresult"></a>
<a id="schema_DeleteOutcomeResult"></a>
<a id="tocSdeleteoutcomeresult"></a>
<a id="tocsdeleteoutcomeresult"></a>

```json
{}
```

<h2 id="tocS_DeleteOutcomeRequest">DeleteOutcomeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteoutcomerequest"></a>
<a id="schema_DeleteOutcomeRequest"></a>
<a id="tocSdeleteoutcomerequest"></a>
<a id="tocsdeleteoutcomerequest"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DeleteRuleResult">DeleteRuleResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteruleresult"></a>
<a id="schema_DeleteRuleResult"></a>
<a id="tocSdeleteruleresult"></a>
<a id="tocsdeleteruleresult"></a>

```json
{}
```

<h2 id="tocS_DeleteRuleRequest">DeleteRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulerequest"></a>
<a id="schema_DeleteRuleRequest"></a>
<a id="tocSdeleterulerequest"></a>
<a id="tocsdeleterulerequest"></a>

```json
{
  "rule": {
    "detectorId": {},
    "ruleId": {},
    "ruleVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|[Rule](#schemarule)|true|none|A rule.|

<h2 id="tocS_DeleteVariableResult">DeleteVariableResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletevariableresult"></a>
<a id="schema_DeleteVariableResult"></a>
<a id="tocSdeletevariableresult"></a>
<a id="tocsdeletevariableresult"></a>

```json
{}
```

<h2 id="tocS_DeleteVariableRequest">DeleteVariableRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevariablerequest"></a>
<a id="schema_DeleteVariableRequest"></a>
<a id="tocSdeletevariablerequest"></a>
<a id="tocsdeletevariablerequest"></a>

```json
{
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_DescribeDetectorResult">DescribeDetectorResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribedetectorresult"></a>
<a id="schema_DescribeDetectorResult"></a>
<a id="tocSdescribedetectorresult"></a>
<a id="tocsdescribedetectorresult"></a>

```json
{
  "detectorId": {},
  "detectorVersionSummaries": {},
  "nextToken": {},
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|false|none|none|
|detectorVersionSummaries|object|false|none|none|
|nextToken|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_DescribeDetectorRequest">DescribeDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedetectorrequest"></a>
<a id="schema_DescribeDetectorRequest"></a>
<a id="tocSdescribedetectorrequest"></a>
<a id="tocsdescribedetectorrequest"></a>

```json
{
  "detectorId": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_DescribeModelVersionsResult">DescribeModelVersionsResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribemodelversionsresult"></a>
<a id="schema_DescribeModelVersionsResult"></a>
<a id="tocSdescribemodelversionsresult"></a>
<a id="tocsdescribemodelversionsresult"></a>

```json
{
  "modelVersionDetails": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelVersionDetails|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeModelVersionsRequest">DescribeModelVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemodelversionsrequest"></a>
<a id="schema_DescribeModelVersionsRequest"></a>
<a id="tocSdescribemodelversionsrequest"></a>
<a id="tocsdescribemodelversionsrequest"></a>

```json
{
  "modelId": {},
  "modelVersionNumber": {},
  "modelType": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|false|none|none|
|modelVersionNumber|object|false|none|none|
|modelType|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetBatchImportJobsResult">GetBatchImportJobsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbatchimportjobsresult"></a>
<a id="schema_GetBatchImportJobsResult"></a>
<a id="tocSgetbatchimportjobsresult"></a>
<a id="tocsgetbatchimportjobsresult"></a>

```json
{
  "batchImports": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchImports|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetBatchImportJobsRequest">GetBatchImportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbatchimportjobsrequest"></a>
<a id="schema_GetBatchImportJobsRequest"></a>
<a id="tocSgetbatchimportjobsrequest"></a>
<a id="tocsgetbatchimportjobsrequest"></a>

```json
{
  "jobId": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetBatchPredictionJobsResult">GetBatchPredictionJobsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbatchpredictionjobsresult"></a>
<a id="schema_GetBatchPredictionJobsResult"></a>
<a id="tocSgetbatchpredictionjobsresult"></a>
<a id="tocsgetbatchpredictionjobsresult"></a>

```json
{
  "batchPredictions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchPredictions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetBatchPredictionJobsRequest">GetBatchPredictionJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbatchpredictionjobsrequest"></a>
<a id="schema_GetBatchPredictionJobsRequest"></a>
<a id="tocSgetbatchpredictionjobsrequest"></a>
<a id="tocsgetbatchpredictionjobsrequest"></a>

```json
{
  "jobId": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetDeleteEventsByEventTypeStatusResult">GetDeleteEventsByEventTypeStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdeleteeventsbyeventtypestatusresult"></a>
<a id="schema_GetDeleteEventsByEventTypeStatusResult"></a>
<a id="tocSgetdeleteeventsbyeventtypestatusresult"></a>
<a id="tocsgetdeleteeventsbyeventtypestatusresult"></a>

```json
{
  "eventTypeName": {},
  "eventsDeletionStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypeName|object|false|none|none|
|eventsDeletionStatus|object|false|none|none|

<h2 id="tocS_GetDeleteEventsByEventTypeStatusRequest">GetDeleteEventsByEventTypeStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeleteeventsbyeventtypestatusrequest"></a>
<a id="schema_GetDeleteEventsByEventTypeStatusRequest"></a>
<a id="tocSgetdeleteeventsbyeventtypestatusrequest"></a>
<a id="tocsgetdeleteeventsbyeventtypestatusrequest"></a>

```json
{
  "eventTypeName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypeName|object|true|none|none|

<h2 id="tocS_GetDetectorVersionResult">GetDetectorVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdetectorversionresult"></a>
<a id="schema_GetDetectorVersionResult"></a>
<a id="tocSgetdetectorversionresult"></a>
<a id="tocsgetdetectorversionresult"></a>

```json
{
  "detectorId": {},
  "detectorVersionId": {},
  "description": {},
  "externalModelEndpoints": {},
  "modelVersions": {},
  "rules": {},
  "status": {},
  "lastUpdatedTime": {},
  "createdTime": {},
  "ruleExecutionMode": {},
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|false|none|none|
|detectorVersionId|object|false|none|none|
|description|object|false|none|none|
|externalModelEndpoints|object|false|none|none|
|modelVersions|object|false|none|none|
|rules|object|false|none|none|
|status|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|createdTime|object|false|none|none|
|ruleExecutionMode|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_GetDetectorVersionRequest">GetDetectorVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdetectorversionrequest"></a>
<a id="schema_GetDetectorVersionRequest"></a>
<a id="tocSgetdetectorversionrequest"></a>
<a id="tocsgetdetectorversionrequest"></a>

```json
{
  "detectorId": {},
  "detectorVersionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|true|none|none|
|detectorVersionId|object|true|none|none|

<h2 id="tocS_GetDetectorsResult">GetDetectorsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdetectorsresult"></a>
<a id="schema_GetDetectorsResult"></a>
<a id="tocSgetdetectorsresult"></a>
<a id="tocsgetdetectorsresult"></a>

```json
{
  "detectors": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectors|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetDetectorsRequest">GetDetectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdetectorsrequest"></a>
<a id="schema_GetDetectorsRequest"></a>
<a id="tocSgetdetectorsrequest"></a>
<a id="tocsgetdetectorsrequest"></a>

```json
{
  "detectorId": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetEntityTypesResult">GetEntityTypesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetentitytypesresult"></a>
<a id="schema_GetEntityTypesResult"></a>
<a id="tocSgetentitytypesresult"></a>
<a id="tocsgetentitytypesresult"></a>

```json
{
  "entityTypes": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityTypes|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetEntityTypesRequest">GetEntityTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetentitytypesrequest"></a>
<a id="schema_GetEntityTypesRequest"></a>
<a id="tocSgetentitytypesrequest"></a>
<a id="tocsgetentitytypesrequest"></a>

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetEventResult">GetEventResult</h2>
<!-- backwards compatibility -->
<a id="schemageteventresult"></a>
<a id="schema_GetEventResult"></a>
<a id="tocSgeteventresult"></a>
<a id="tocsgeteventresult"></a>

```json
{
  "event": {
    "eventId": {},
    "eventTypeName": {},
    "eventTimestamp": {},
    "eventVariables": {
      "property1": "password",
      "property2": "password"
    },
    "currentLabel": {},
    "labelTimestamp": {},
    "entities": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|false|none|none|

<h2 id="tocS_GetEventRequest">GetEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteventrequest"></a>
<a id="schema_GetEventRequest"></a>
<a id="tocSgeteventrequest"></a>
<a id="tocsgeteventrequest"></a>

```json
{
  "eventId": {},
  "eventTypeName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|object|true|none|none|
|eventTypeName|object|true|none|none|

<h2 id="tocS_GetEventPredictionResult">GetEventPredictionResult</h2>
<!-- backwards compatibility -->
<a id="schemageteventpredictionresult"></a>
<a id="schema_GetEventPredictionResult"></a>
<a id="tocSgeteventpredictionresult"></a>
<a id="tocsgeteventpredictionresult"></a>

```json
{
  "modelScores": {},
  "ruleResults": {},
  "externalModelOutputs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelScores|object|false|none|none|
|ruleResults|object|false|none|none|
|externalModelOutputs|object|false|none|none|

<h2 id="tocS_GetEventPredictionRequest">GetEventPredictionRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteventpredictionrequest"></a>
<a id="schema_GetEventPredictionRequest"></a>
<a id="tocSgeteventpredictionrequest"></a>
<a id="tocsgeteventpredictionrequest"></a>

```json
{
  "detectorId": {},
  "detectorVersionId": {},
  "eventId": {},
  "eventTypeName": {},
  "entities": {},
  "eventTimestamp": {},
  "eventVariables": {
    "property1": "password",
    "property2": "password"
  },
  "externalModelEndpointDataBlobs": {
    "property1": {
      "byteBuffer": {},
      "contentType": {}
    },
    "property2": {
      "byteBuffer": {},
      "contentType": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|true|none|none|
|detectorVersionId|object|false|none|none|
|eventId|object|true|none|none|
|eventTypeName|object|true|none|none|
|entities|object|true|none|none|
|eventTimestamp|object|true|none|none|
|eventVariables|object|true|none|none|
|externalModelEndpointDataBlobs|object|false|none|none|

<h2 id="tocS_ResourceUnavailableException">ResourceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceunavailableexception"></a>
<a id="schema_ResourceUnavailableException"></a>
<a id="tocSresourceunavailableexception"></a>
<a id="tocsresourceunavailableexception"></a>

```json
null
```

<h2 id="tocS_GetEventPredictionMetadataResult">GetEventPredictionMetadataResult</h2>
<!-- backwards compatibility -->
<a id="schemageteventpredictionmetadataresult"></a>
<a id="schema_GetEventPredictionMetadataResult"></a>
<a id="tocSgeteventpredictionmetadataresult"></a>
<a id="tocsgeteventpredictionmetadataresult"></a>

```json
{
  "eventId": {},
  "eventTypeName": {},
  "entityId": {},
  "entityType": {},
  "eventTimestamp": {},
  "detectorId": {},
  "detectorVersionId": {},
  "detectorVersionStatus": {},
  "eventVariables": {},
  "rules": {},
  "ruleExecutionMode": {},
  "outcomes": {},
  "evaluatedModelVersions": {},
  "evaluatedExternalModels": {},
  "predictionTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|object|false|none|none|
|eventTypeName|object|false|none|none|
|entityId|object|false|none|none|
|entityType|object|false|none|none|
|eventTimestamp|object|false|none|none|
|detectorId|object|false|none|none|
|detectorVersionId|object|false|none|none|
|detectorVersionStatus|object|false|none|none|
|eventVariables|object|false|none|none|
|rules|object|false|none|none|
|ruleExecutionMode|object|false|none|none|
|outcomes|object|false|none|none|
|evaluatedModelVersions|object|false|none|none|
|evaluatedExternalModels|object|false|none|none|
|predictionTimestamp|object|false|none|none|

<h2 id="tocS_GetEventPredictionMetadataRequest">GetEventPredictionMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteventpredictionmetadatarequest"></a>
<a id="schema_GetEventPredictionMetadataRequest"></a>
<a id="tocSgeteventpredictionmetadatarequest"></a>
<a id="tocsgeteventpredictionmetadatarequest"></a>

```json
{
  "eventId": {},
  "eventTypeName": {},
  "detectorId": {},
  "detectorVersionId": {},
  "predictionTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|object|true|none|none|
|eventTypeName|object|true|none|none|
|detectorId|object|true|none|none|
|detectorVersionId|object|true|none|none|
|predictionTimestamp|object|true|none|none|

<h2 id="tocS_GetEventTypesResult">GetEventTypesResult</h2>
<!-- backwards compatibility -->
<a id="schemageteventtypesresult"></a>
<a id="schema_GetEventTypesResult"></a>
<a id="tocSgeteventtypesresult"></a>
<a id="tocsgeteventtypesresult"></a>

```json
{
  "eventTypes": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypes|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetEventTypesRequest">GetEventTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemageteventtypesrequest"></a>
<a id="schema_GetEventTypesRequest"></a>
<a id="tocSgeteventtypesrequest"></a>
<a id="tocsgeteventtypesrequest"></a>

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetExternalModelsResult">GetExternalModelsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetexternalmodelsresult"></a>
<a id="schema_GetExternalModelsResult"></a>
<a id="tocSgetexternalmodelsresult"></a>
<a id="tocsgetexternalmodelsresult"></a>

```json
{
  "externalModels": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalModels|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetExternalModelsRequest">GetExternalModelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetexternalmodelsrequest"></a>
<a id="schema_GetExternalModelsRequest"></a>
<a id="tocSgetexternalmodelsrequest"></a>
<a id="tocsgetexternalmodelsrequest"></a>

```json
{
  "modelEndpoint": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelEndpoint|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetKMSEncryptionKeyResult">GetKMSEncryptionKeyResult</h2>
<!-- backwards compatibility -->
<a id="schemagetkmsencryptionkeyresult"></a>
<a id="schema_GetKMSEncryptionKeyResult"></a>
<a id="tocSgetkmsencryptionkeyresult"></a>
<a id="tocsgetkmsencryptionkeyresult"></a>

```json
{
  "kmsKey": {
    "kmsEncryptionKeyArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKey|object|false|none|none|

<h2 id="tocS_GetLabelsResult">GetLabelsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetlabelsresult"></a>
<a id="schema_GetLabelsResult"></a>
<a id="tocSgetlabelsresult"></a>
<a id="tocsgetlabelsresult"></a>

```json
{
  "labels": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetLabelsRequest">GetLabelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlabelsrequest"></a>
<a id="schema_GetLabelsRequest"></a>
<a id="tocSgetlabelsrequest"></a>
<a id="tocsgetlabelsrequest"></a>

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetListElementsResult">GetListElementsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetlistelementsresult"></a>
<a id="schema_GetListElementsResult"></a>
<a id="tocSgetlistelementsresult"></a>
<a id="tocsgetlistelementsresult"></a>

```json
{
  "elements": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetListElementsRequest">GetListElementsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlistelementsrequest"></a>
<a id="schema_GetListElementsRequest"></a>
<a id="tocSgetlistelementsrequest"></a>
<a id="tocsgetlistelementsrequest"></a>

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetListsMetadataResult">GetListsMetadataResult</h2>
<!-- backwards compatibility -->
<a id="schemagetlistsmetadataresult"></a>
<a id="schema_GetListsMetadataResult"></a>
<a id="tocSgetlistsmetadataresult"></a>
<a id="tocsgetlistsmetadataresult"></a>

```json
{
  "lists": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetListsMetadataRequest">GetListsMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlistsmetadatarequest"></a>
<a id="schema_GetListsMetadataRequest"></a>
<a id="tocSgetlistsmetadatarequest"></a>
<a id="tocsgetlistsmetadatarequest"></a>

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetModelVersionResult">GetModelVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelversionresult"></a>
<a id="schema_GetModelVersionResult"></a>
<a id="tocSgetmodelversionresult"></a>
<a id="tocsgetmodelversionresult"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {},
  "trainingDataSource": {},
  "trainingDataSchema": {
    "modelVariables": {},
    "labelSchema": {
      "labelMapper": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "unlabeledEventsTreatment": {}
    }
  },
  "externalEventsDetail": {
    "dataLocation": {},
    "dataAccessRoleArn": {}
  },
  "ingestedEventsDetail": {
    "ingestedEventsTimeWindow": {
      "startTime": {},
      "endTime": {}
    }
  },
  "status": {},
  "arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|false|none|none|
|modelType|object|false|none|none|
|modelVersionNumber|object|false|none|none|
|trainingDataSource|object|false|none|none|
|trainingDataSchema|object|false|none|none|
|externalEventsDetail|object|false|none|none|
|ingestedEventsDetail|object|false|none|none|
|status|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_GetModelVersionRequest">GetModelVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelversionrequest"></a>
<a id="schema_GetModelVersionRequest"></a>
<a id="tocSgetmodelversionrequest"></a>
<a id="tocsgetmodelversionrequest"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|true|none|none|
|modelType|object|true|none|none|
|modelVersionNumber|object|true|none|none|

<h2 id="tocS_GetModelsResult">GetModelsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelsresult"></a>
<a id="schema_GetModelsResult"></a>
<a id="tocSgetmodelsresult"></a>
<a id="tocsgetmodelsresult"></a>

```json
{
  "nextToken": {},
  "models": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|models|object|false|none|none|

<h2 id="tocS_GetModelsRequest">GetModelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelsrequest"></a>
<a id="schema_GetModelsRequest"></a>
<a id="tocSgetmodelsrequest"></a>
<a id="tocsgetmodelsrequest"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|false|none|none|
|modelType|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetOutcomesResult">GetOutcomesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetoutcomesresult"></a>
<a id="schema_GetOutcomesResult"></a>
<a id="tocSgetoutcomesresult"></a>
<a id="tocsgetoutcomesresult"></a>

```json
{
  "outcomes": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outcomes|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetOutcomesRequest">GetOutcomesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetoutcomesrequest"></a>
<a id="schema_GetOutcomesRequest"></a>
<a id="tocSgetoutcomesrequest"></a>
<a id="tocsgetoutcomesrequest"></a>

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetRulesResult">GetRulesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrulesresult"></a>
<a id="schema_GetRulesResult"></a>
<a id="tocSgetrulesresult"></a>
<a id="tocsgetrulesresult"></a>

```json
{
  "ruleDetails": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleDetails|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetRulesRequest">GetRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrulesrequest"></a>
<a id="schema_GetRulesRequest"></a>
<a id="tocSgetrulesrequest"></a>
<a id="tocsgetrulesrequest"></a>

```json
{
  "ruleId": {},
  "detectorId": {},
  "ruleVersion": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleId|object|false|none|none|
|detectorId|object|true|none|none|
|ruleVersion|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetVariablesResult">GetVariablesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetvariablesresult"></a>
<a id="schema_GetVariablesResult"></a>
<a id="tocSgetvariablesresult"></a>
<a id="tocsgetvariablesresult"></a>

```json
{
  "variables": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variables|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetVariablesRequest">GetVariablesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetvariablesrequest"></a>
<a id="schema_GetVariablesRequest"></a>
<a id="tocSgetvariablesrequest"></a>
<a id="tocsgetvariablesrequest"></a>

```json
{
  "name": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListEventPredictionsResult">ListEventPredictionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalisteventpredictionsresult"></a>
<a id="schema_ListEventPredictionsResult"></a>
<a id="tocSlisteventpredictionsresult"></a>
<a id="tocslisteventpredictionsresult"></a>

```json
{
  "eventPredictionSummaries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventPredictionSummaries|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListEventPredictionsRequest">ListEventPredictionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisteventpredictionsrequest"></a>
<a id="schema_ListEventPredictionsRequest"></a>
<a id="tocSlisteventpredictionsrequest"></a>
<a id="tocslisteventpredictionsrequest"></a>

```json
{
  "eventId": {
    "value": {}
  },
  "eventType": {
    "value": {}
  },
  "detectorId": {
    "value": {}
  },
  "detectorVersionId": {
    "value": {}
  },
  "predictionTimeRange": {
    "startTime": {},
    "endTime": {}
  },
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|object|false|none|none|
|eventType|object|false|none|none|
|detectorId|object|false|none|none|
|detectorVersionId|object|false|none|none|
|predictionTimeRange|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResult">ListTagsForResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresult"></a>
<a id="schema_ListTagsForResourceResult"></a>
<a id="tocSlisttagsforresourceresult"></a>
<a id="tocslisttagsforresourceresult"></a>

```json
{
  "tags": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "resourceARN": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceARN|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_PutDetectorResult">PutDetectorResult</h2>
<!-- backwards compatibility -->
<a id="schemaputdetectorresult"></a>
<a id="schema_PutDetectorResult"></a>
<a id="tocSputdetectorresult"></a>
<a id="tocsputdetectorresult"></a>

```json
{}
```

<h2 id="tocS_PutDetectorRequest">PutDetectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputdetectorrequest"></a>
<a id="schema_PutDetectorRequest"></a>
<a id="tocSputdetectorrequest"></a>
<a id="tocsputdetectorrequest"></a>

```json
{
  "detectorId": {},
  "description": {},
  "eventTypeName": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|true|none|none|
|description|object|false|none|none|
|eventTypeName|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_PutEntityTypeResult">PutEntityTypeResult</h2>
<!-- backwards compatibility -->
<a id="schemaputentitytyperesult"></a>
<a id="schema_PutEntityTypeResult"></a>
<a id="tocSputentitytyperesult"></a>
<a id="tocsputentitytyperesult"></a>

```json
{}
```

<h2 id="tocS_PutEntityTypeRequest">PutEntityTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputentitytyperequest"></a>
<a id="schema_PutEntityTypeRequest"></a>
<a id="tocSputentitytyperequest"></a>
<a id="tocsputentitytyperequest"></a>

```json
{
  "name": {},
  "description": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_PutEventTypeResult">PutEventTypeResult</h2>
<!-- backwards compatibility -->
<a id="schemaputeventtyperesult"></a>
<a id="schema_PutEventTypeResult"></a>
<a id="tocSputeventtyperesult"></a>
<a id="tocsputeventtyperesult"></a>

```json
{}
```

<h2 id="tocS_PutEventTypeRequest">PutEventTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputeventtyperequest"></a>
<a id="schema_PutEventTypeRequest"></a>
<a id="tocSputeventtyperequest"></a>
<a id="tocsputeventtyperequest"></a>

```json
{
  "name": {},
  "description": {},
  "eventVariables": {},
  "labels": {},
  "entityTypes": {},
  "eventIngestion": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|eventVariables|object|true|none|none|
|labels|object|false|none|none|
|entityTypes|object|true|none|none|
|eventIngestion|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_PutExternalModelResult">PutExternalModelResult</h2>
<!-- backwards compatibility -->
<a id="schemaputexternalmodelresult"></a>
<a id="schema_PutExternalModelResult"></a>
<a id="tocSputexternalmodelresult"></a>
<a id="tocsputexternalmodelresult"></a>

```json
{}
```

<h2 id="tocS_PutExternalModelRequest">PutExternalModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputexternalmodelrequest"></a>
<a id="schema_PutExternalModelRequest"></a>
<a id="tocSputexternalmodelrequest"></a>
<a id="tocsputexternalmodelrequest"></a>

```json
{
  "modelEndpoint": {},
  "modelSource": {},
  "invokeModelEndpointRoleArn": {},
  "inputConfiguration": {
    "eventTypeName": {},
    "format": {},
    "useEventVariables": {},
    "jsonInputTemplate": {},
    "csvInputTemplate": {}
  },
  "outputConfiguration": {
    "format": {},
    "jsonKeyToVariableMap": {
      "property1": "string",
      "property2": "string"
    },
    "csvIndexToVariableMap": {
      "property1": "string",
      "property2": "string"
    }
  },
  "modelEndpointStatus": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelEndpoint|object|true|none|none|
|modelSource|object|true|none|none|
|invokeModelEndpointRoleArn|object|true|none|none|
|inputConfiguration|object|true|none|none|
|outputConfiguration|object|true|none|none|
|modelEndpointStatus|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_PutKMSEncryptionKeyResult">PutKMSEncryptionKeyResult</h2>
<!-- backwards compatibility -->
<a id="schemaputkmsencryptionkeyresult"></a>
<a id="schema_PutKMSEncryptionKeyResult"></a>
<a id="tocSputkmsencryptionkeyresult"></a>
<a id="tocsputkmsencryptionkeyresult"></a>

```json
{}
```

<h2 id="tocS_PutKMSEncryptionKeyRequest">PutKMSEncryptionKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputkmsencryptionkeyrequest"></a>
<a id="schema_PutKMSEncryptionKeyRequest"></a>
<a id="tocSputkmsencryptionkeyrequest"></a>
<a id="tocsputkmsencryptionkeyrequest"></a>

```json
{
  "kmsEncryptionKeyArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsEncryptionKeyArn|object|true|none|none|

<h2 id="tocS_PutLabelResult">PutLabelResult</h2>
<!-- backwards compatibility -->
<a id="schemaputlabelresult"></a>
<a id="schema_PutLabelResult"></a>
<a id="tocSputlabelresult"></a>
<a id="tocsputlabelresult"></a>

```json
{}
```

<h2 id="tocS_PutLabelRequest">PutLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputlabelrequest"></a>
<a id="schema_PutLabelRequest"></a>
<a id="tocSputlabelrequest"></a>
<a id="tocsputlabelrequest"></a>

```json
{
  "name": {},
  "description": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_PutOutcomeResult">PutOutcomeResult</h2>
<!-- backwards compatibility -->
<a id="schemaputoutcomeresult"></a>
<a id="schema_PutOutcomeResult"></a>
<a id="tocSputoutcomeresult"></a>
<a id="tocsputoutcomeresult"></a>

```json
{}
```

<h2 id="tocS_PutOutcomeRequest">PutOutcomeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputoutcomerequest"></a>
<a id="schema_PutOutcomeRequest"></a>
<a id="tocSputoutcomerequest"></a>
<a id="tocsputoutcomerequest"></a>

```json
{
  "name": {},
  "description": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_SendEventResult">SendEventResult</h2>
<!-- backwards compatibility -->
<a id="schemasendeventresult"></a>
<a id="schema_SendEventResult"></a>
<a id="tocSsendeventresult"></a>
<a id="tocssendeventresult"></a>

```json
{}
```

<h2 id="tocS_SendEventRequest">SendEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendeventrequest"></a>
<a id="schema_SendEventRequest"></a>
<a id="tocSsendeventrequest"></a>
<a id="tocssendeventrequest"></a>

```json
{
  "eventId": {},
  "eventTypeName": {},
  "eventTimestamp": {},
  "eventVariables": {
    "property1": "password",
    "property2": "password"
  },
  "assignedLabel": {},
  "labelTimestamp": {},
  "entities": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|object|true|none|none|
|eventTypeName|object|true|none|none|
|eventTimestamp|object|true|none|none|
|eventVariables|object|true|none|none|
|assignedLabel|object|false|none|none|
|labelTimestamp|object|false|none|none|
|entities|object|true|none|none|

<h2 id="tocS_TagResourceResult">TagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresult"></a>
<a id="schema_TagResourceResult"></a>
<a id="tocStagresourceresult"></a>
<a id="tocstagresourceresult"></a>

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
  "resourceARN": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceARN|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceResult">UntagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresult"></a>
<a id="schema_UntagResourceResult"></a>
<a id="tocSuntagresourceresult"></a>
<a id="tocsuntagresourceresult"></a>

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
  "resourceARN": {},
  "tagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceARN|object|true|none|none|
|tagKeys|object|true|none|none|

<h2 id="tocS_UpdateDetectorVersionResult">UpdateDetectorVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedetectorversionresult"></a>
<a id="schema_UpdateDetectorVersionResult"></a>
<a id="tocSupdatedetectorversionresult"></a>
<a id="tocsupdatedetectorversionresult"></a>

```json
{}
```

<h2 id="tocS_UpdateDetectorVersionRequest">UpdateDetectorVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedetectorversionrequest"></a>
<a id="schema_UpdateDetectorVersionRequest"></a>
<a id="tocSupdatedetectorversionrequest"></a>
<a id="tocsupdatedetectorversionrequest"></a>

```json
{
  "detectorId": {},
  "detectorVersionId": {},
  "externalModelEndpoints": {},
  "rules": {},
  "description": {},
  "modelVersions": {},
  "ruleExecutionMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|true|none|none|
|detectorVersionId|object|true|none|none|
|externalModelEndpoints|object|true|none|none|
|rules|object|true|none|none|
|description|object|false|none|none|
|modelVersions|object|false|none|none|
|ruleExecutionMode|object|false|none|none|

<h2 id="tocS_UpdateDetectorVersionMetadataResult">UpdateDetectorVersionMetadataResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedetectorversionmetadataresult"></a>
<a id="schema_UpdateDetectorVersionMetadataResult"></a>
<a id="tocSupdatedetectorversionmetadataresult"></a>
<a id="tocsupdatedetectorversionmetadataresult"></a>

```json
{}
```

<h2 id="tocS_UpdateDetectorVersionMetadataRequest">UpdateDetectorVersionMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedetectorversionmetadatarequest"></a>
<a id="schema_UpdateDetectorVersionMetadataRequest"></a>
<a id="tocSupdatedetectorversionmetadatarequest"></a>
<a id="tocsupdatedetectorversionmetadatarequest"></a>

```json
{
  "detectorId": {},
  "detectorVersionId": {},
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|true|none|none|
|detectorVersionId|object|true|none|none|
|description|object|true|none|none|

<h2 id="tocS_UpdateDetectorVersionStatusResult">UpdateDetectorVersionStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedetectorversionstatusresult"></a>
<a id="schema_UpdateDetectorVersionStatusResult"></a>
<a id="tocSupdatedetectorversionstatusresult"></a>
<a id="tocsupdatedetectorversionstatusresult"></a>

```json
{}
```

<h2 id="tocS_UpdateDetectorVersionStatusRequest">UpdateDetectorVersionStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedetectorversionstatusrequest"></a>
<a id="schema_UpdateDetectorVersionStatusRequest"></a>
<a id="tocSupdatedetectorversionstatusrequest"></a>
<a id="tocsupdatedetectorversionstatusrequest"></a>

```json
{
  "detectorId": {},
  "detectorVersionId": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|true|none|none|
|detectorVersionId|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_UpdateEventLabelResult">UpdateEventLabelResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventlabelresult"></a>
<a id="schema_UpdateEventLabelResult"></a>
<a id="tocSupdateeventlabelresult"></a>
<a id="tocsupdateeventlabelresult"></a>

```json
{}
```

<h2 id="tocS_UpdateEventLabelRequest">UpdateEventLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventlabelrequest"></a>
<a id="schema_UpdateEventLabelRequest"></a>
<a id="tocSupdateeventlabelrequest"></a>
<a id="tocsupdateeventlabelrequest"></a>

```json
{
  "eventId": {},
  "eventTypeName": {},
  "assignedLabel": {},
  "labelTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|object|true|none|none|
|eventTypeName|object|true|none|none|
|assignedLabel|object|true|none|none|
|labelTimestamp|object|true|none|none|

<h2 id="tocS_UpdateListResult">UpdateListResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelistresult"></a>
<a id="schema_UpdateListResult"></a>
<a id="tocSupdatelistresult"></a>
<a id="tocsupdatelistresult"></a>

```json
{}
```

<h2 id="tocS_UpdateListRequest">UpdateListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelistrequest"></a>
<a id="schema_UpdateListRequest"></a>
<a id="tocSupdatelistrequest"></a>
<a id="tocsupdatelistrequest"></a>

```json
{
  "name": {},
  "elements": {},
  "description": {},
  "updateMode": {},
  "variableType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|elements|object|false|none|none|
|description|object|false|none|none|
|updateMode|object|false|none|none|
|variableType|object|false|none|none|

<h2 id="tocS_UpdateModelResult">UpdateModelResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemodelresult"></a>
<a id="schema_UpdateModelResult"></a>
<a id="tocSupdatemodelresult"></a>
<a id="tocsupdatemodelresult"></a>

```json
{}
```

<h2 id="tocS_UpdateModelRequest">UpdateModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemodelrequest"></a>
<a id="schema_UpdateModelRequest"></a>
<a id="tocSupdatemodelrequest"></a>
<a id="tocsupdatemodelrequest"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|true|none|none|
|modelType|object|true|none|none|
|description|object|false|none|none|

<h2 id="tocS_UpdateModelVersionResult">UpdateModelVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemodelversionresult"></a>
<a id="schema_UpdateModelVersionResult"></a>
<a id="tocSupdatemodelversionresult"></a>
<a id="tocsupdatemodelversionresult"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|false|none|none|
|modelType|object|false|none|none|
|modelVersionNumber|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_UpdateModelVersionRequest">UpdateModelVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemodelversionrequest"></a>
<a id="schema_UpdateModelVersionRequest"></a>
<a id="tocSupdatemodelversionrequest"></a>
<a id="tocsupdatemodelversionrequest"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "majorVersionNumber": {},
  "externalEventsDetail": {
    "dataLocation": {},
    "dataAccessRoleArn": {}
  },
  "ingestedEventsDetail": {
    "ingestedEventsTimeWindow": {
      "startTime": {},
      "endTime": {}
    }
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|true|none|none|
|modelType|object|true|none|none|
|majorVersionNumber|object|true|none|none|
|externalEventsDetail|object|false|none|none|
|ingestedEventsDetail|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_UpdateModelVersionStatusResult">UpdateModelVersionStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemodelversionstatusresult"></a>
<a id="schema_UpdateModelVersionStatusResult"></a>
<a id="tocSupdatemodelversionstatusresult"></a>
<a id="tocsupdatemodelversionstatusresult"></a>

```json
{}
```

<h2 id="tocS_UpdateModelVersionStatusRequest">UpdateModelVersionStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemodelversionstatusrequest"></a>
<a id="schema_UpdateModelVersionStatusRequest"></a>
<a id="tocSupdatemodelversionstatusrequest"></a>
<a id="tocsupdatemodelversionstatusrequest"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|true|none|none|
|modelType|object|true|none|none|
|modelVersionNumber|object|true|none|none|
|status|object|true|none|none|

<h2 id="tocS_UpdateRuleMetadataResult">UpdateRuleMetadataResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulemetadataresult"></a>
<a id="schema_UpdateRuleMetadataResult"></a>
<a id="tocSupdaterulemetadataresult"></a>
<a id="tocsupdaterulemetadataresult"></a>

```json
{}
```

<h2 id="tocS_UpdateRuleMetadataRequest">UpdateRuleMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulemetadatarequest"></a>
<a id="schema_UpdateRuleMetadataRequest"></a>
<a id="tocSupdaterulemetadatarequest"></a>
<a id="tocsupdaterulemetadatarequest"></a>

```json
{
  "rule": {
    "detectorId": {},
    "ruleId": {},
    "ruleVersion": {}
  },
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|object|true|none|none|
|description|object|true|none|none|

<h2 id="tocS_UpdateRuleVersionResult">UpdateRuleVersionResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateruleversionresult"></a>
<a id="schema_UpdateRuleVersionResult"></a>
<a id="tocSupdateruleversionresult"></a>
<a id="tocsupdateruleversionresult"></a>

```json
{
  "rule": {
    "detectorId": {},
    "ruleId": {},
    "ruleVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|object|false|none|none|

<h2 id="tocS_UpdateRuleVersionRequest">UpdateRuleVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateruleversionrequest"></a>
<a id="schema_UpdateRuleVersionRequest"></a>
<a id="tocSupdateruleversionrequest"></a>
<a id="tocsupdateruleversionrequest"></a>

```json
{
  "rule": {
    "detectorId": {},
    "ruleId": {},
    "ruleVersion": {}
  },
  "description": {},
  "expression": {},
  "language": {},
  "outcomes": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|object|true|none|none|
|description|object|false|none|none|
|expression|object|true|none|none|
|language|object|true|none|none|
|outcomes|object|true|none|none|
|tags|object|false|none|none|

<h2 id="tocS_UpdateVariableResult">UpdateVariableResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevariableresult"></a>
<a id="schema_UpdateVariableResult"></a>
<a id="tocSupdatevariableresult"></a>
<a id="tocsupdatevariableresult"></a>

```json
{}
```

<h2 id="tocS_UpdateVariableRequest">UpdateVariableRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevariablerequest"></a>
<a id="schema_UpdateVariableRequest"></a>
<a id="tocSupdatevariablerequest"></a>
<a id="tocsupdatevariablerequest"></a>

```json
{
  "name": {},
  "defaultValue": {},
  "description": {},
  "variableType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|defaultValue|object|false|none|none|
|description|object|false|none|none|
|variableType|object|false|none|none|

<h2 id="tocS_float">float</h2>
<!-- backwards compatibility -->
<a id="schemafloat"></a>
<a id="schema_float"></a>
<a id="tocSfloat"></a>
<a id="tocsfloat"></a>

```json
0
```

<h2 id="tocS_ATIMetricDataPoint">ATIMetricDataPoint</h2>
<!-- backwards compatibility -->
<a id="schemaatimetricdatapoint"></a>
<a id="schema_ATIMetricDataPoint"></a>
<a id="tocSatimetricdatapoint"></a>
<a id="tocsatimetricdatapoint"></a>

```json
{
  "cr": {},
  "adr": {},
  "threshold": {},
  "atodr": {}
}
```

 The Account Takeover Insights (ATI) model performance metrics data points.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cr|object|false|none|none|
|adr|object|false|none|none|
|threshold|object|false|none|none|
|atodr|object|false|none|none|

<h2 id="tocS_ATIMetricDataPointsList">ATIMetricDataPointsList</h2>
<!-- backwards compatibility -->
<a id="schemaatimetricdatapointslist"></a>
<a id="schema_ATIMetricDataPointsList"></a>
<a id="tocSatimetricdatapointslist"></a>
<a id="tocsatimetricdatapointslist"></a>

```json
[
  {
    "cr": {},
    "adr": {},
    "threshold": {},
    "atodr": {}
  }
]
```

<h2 id="tocS_ATIModelPerformance">ATIModelPerformance</h2>
<!-- backwards compatibility -->
<a id="schemaatimodelperformance"></a>
<a id="schema_ATIModelPerformance"></a>
<a id="tocSatimodelperformance"></a>
<a id="tocsatimodelperformance"></a>

```json
{
  "asi": {}
}
```

 The Account Takeover Insights (ATI) model performance score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asi|object|false|none|none|

<h2 id="tocS_ATITrainingMetricsValue">ATITrainingMetricsValue</h2>
<!-- backwards compatibility -->
<a id="schemaatitrainingmetricsvalue"></a>
<a id="schema_ATITrainingMetricsValue"></a>
<a id="tocSatitrainingmetricsvalue"></a>
<a id="tocsatitrainingmetricsvalue"></a>

```json
{
  "metricDataPoints": {},
  "modelPerformance": {
    "asi": {}
  }
}
```

 The Account Takeover Insights (ATI) model training metric details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricDataPoints|object|false|none|none|
|modelPerformance|object|false|none|none|

<h2 id="tocS_ListOfStrings">ListOfStrings</h2>
<!-- backwards compatibility -->
<a id="schemalistofstrings"></a>
<a id="schema_ListOfStrings"></a>
<a id="tocSlistofstrings"></a>
<a id="tocslistofstrings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AggregatedLogOddsMetric">AggregatedLogOddsMetric</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatedlogoddsmetric"></a>
<a id="schema_AggregatedLogOddsMetric"></a>
<a id="tocSaggregatedlogoddsmetric"></a>
<a id="tocsaggregatedlogoddsmetric"></a>

```json
{
  "variableNames": {},
  "aggregatedVariablesImportance": {}
}
```

<p>The log odds metric details.</p> <p>Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variableNames|object|true|none|none|
|aggregatedVariablesImportance|object|true|none|none|

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_string"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_AggregatedVariablesImpactExplanation">AggregatedVariablesImpactExplanation</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatedvariablesimpactexplanation"></a>
<a id="schema_AggregatedVariablesImpactExplanation"></a>
<a id="tocSaggregatedvariablesimpactexplanation"></a>
<a id="tocsaggregatedvariablesimpactexplanation"></a>

```json
{
  "eventVariableNames": {},
  "relativeImpact": {},
  "logOddsImpact": {}
}
```

<p> The details of the impact of aggregated variables on the prediction score. </p> <p>Account Takeover Insights (ATI) model uses the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, the model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventVariableNames|object|false|none|none|
|relativeImpact|object|false|none|none|
|logOddsImpact|object|false|none|none|

<h2 id="tocS_ListOfAggregatedLogOddsMetrics">ListOfAggregatedLogOddsMetrics</h2>
<!-- backwards compatibility -->
<a id="schemalistofaggregatedlogoddsmetrics"></a>
<a id="schema_ListOfAggregatedLogOddsMetrics"></a>
<a id="tocSlistofaggregatedlogoddsmetrics"></a>
<a id="tocslistofaggregatedlogoddsmetrics"></a>

```json
[
  {
    "variableNames": {},
    "aggregatedVariablesImportance": {}
  }
]
```

<h2 id="tocS_AggregatedVariablesImportanceMetrics">AggregatedVariablesImportanceMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatedvariablesimportancemetrics"></a>
<a id="schema_AggregatedVariablesImportanceMetrics"></a>
<a id="tocSaggregatedvariablesimportancemetrics"></a>
<a id="tocsaggregatedvariablesimportancemetrics"></a>

```json
{
  "logOddsMetrics": {}
}
```

<p>The details of the relative importance of the aggregated variables.</p> <p>Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logOddsMetrics|object|false|none|none|

<h2 id="tocS_noDashIdentifier">noDashIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemanodashidentifier"></a>
<a id="schema_noDashIdentifier"></a>
<a id="tocSnodashidentifier"></a>
<a id="tocsnodashidentifier"></a>

```json
"string"
```

<h2 id="tocS_description">description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_variableType">variableType</h2>
<!-- backwards compatibility -->
<a id="schemavariabletype"></a>
<a id="schema_variableType"></a>
<a id="tocSvariabletype"></a>
<a id="tocsvariabletype"></a>

```json
"string"
```

<h2 id="tocS_time">time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"stringstrin"
```

<h2 id="tocS_fraudDetectorArn">fraudDetectorArn</h2>
<!-- backwards compatibility -->
<a id="schemafrauddetectorarn"></a>
<a id="schema_fraudDetectorArn"></a>
<a id="tocSfrauddetectorarn"></a>
<a id="tocsfrauddetectorarn"></a>

```json
"string"
```

<h2 id="tocS_AllowDenyList">AllowDenyList</h2>
<!-- backwards compatibility -->
<a id="schemaallowdenylist"></a>
<a id="schema_AllowDenyList"></a>
<a id="tocSallowdenylist"></a>
<a id="tocsallowdenylist"></a>

```json
{
  "name": {},
  "description": {},
  "variableType": {},
  "createdTime": {},
  "updatedTime": {},
  "arn": {}
}
```

 The metadata of a list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|variableType|object|false|none|none|
|createdTime|object|false|none|none|
|updatedTime|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_AllowDenyLists">AllowDenyLists</h2>
<!-- backwards compatibility -->
<a id="schemaallowdenylists"></a>
<a id="schema_AllowDenyLists"></a>
<a id="tocSallowdenylists"></a>
<a id="tocsallowdenylists"></a>

```json
[
  {
    "name": {},
    "description": {},
    "variableType": {},
    "createdTime": {},
    "updatedTime": {},
    "arn": {}
  }
]
```

<h2 id="tocS_AsyncJobStatus">AsyncJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemaasyncjobstatus"></a>
<a id="schema_AsyncJobStatus"></a>
<a id="tocSasyncjobstatus"></a>
<a id="tocsasyncjobstatus"></a>

```json
"IN_PROGRESS_INITIALIZING"
```

<h2 id="tocS_integer">integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_BatchCreateVariableError">BatchCreateVariableError</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatevariableerror"></a>
<a id="schema_BatchCreateVariableError"></a>
<a id="tocSbatchcreatevariableerror"></a>
<a id="tocsbatchcreatevariableerror"></a>

```json
{
  "name": {},
  "code": {},
  "message": {}
}
```

Provides the error of the batch create variable API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_BatchCreateVariableErrorList">BatchCreateVariableErrorList</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatevariableerrorlist"></a>
<a id="schema_BatchCreateVariableErrorList"></a>
<a id="tocSbatchcreatevariableerrorlist"></a>
<a id="tocsbatchcreatevariableerrorlist"></a>

```json
[
  {
    "name": {},
    "code": {},
    "message": {}
  }
]
```

<h2 id="tocS_VariableEntryList">VariableEntryList</h2>
<!-- backwards compatibility -->
<a id="schemavariableentrylist"></a>
<a id="schema_VariableEntryList"></a>
<a id="tocSvariableentrylist"></a>
<a id="tocsvariableentrylist"></a>

```json
[
  {
    "name": {},
    "dataType": {},
    "dataSource": {},
    "defaultValue": {},
    "description": {},
    "variableType": {}
  }
]
```

<h2 id="tocS_tagList">tagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_tagList"></a>
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

<h2 id="tocS_BatchGetVariableError">BatchGetVariableError</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetvariableerror"></a>
<a id="schema_BatchGetVariableError"></a>
<a id="tocSbatchgetvariableerror"></a>
<a id="tocsbatchgetvariableerror"></a>

```json
{
  "name": {},
  "code": {},
  "message": {}
}
```

Provides the error of the batch get variable API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|code|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_BatchGetVariableErrorList">BatchGetVariableErrorList</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetvariableerrorlist"></a>
<a id="schema_BatchGetVariableErrorList"></a>
<a id="tocSbatchgetvariableerrorlist"></a>
<a id="tocsbatchgetvariableerrorlist"></a>

```json
[
  {
    "name": {},
    "code": {},
    "message": {}
  }
]
```

<h2 id="tocS_NameList">NameList</h2>
<!-- backwards compatibility -->
<a id="schemanamelist"></a>
<a id="schema_NameList"></a>
<a id="tocSnamelist"></a>
<a id="tocsnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_VariableList">VariableList</h2>
<!-- backwards compatibility -->
<a id="schemavariablelist"></a>
<a id="schema_VariableList"></a>
<a id="tocSvariablelist"></a>
<a id="tocsvariablelist"></a>

```json
[
  {
    "name": {},
    "dataType": {},
    "dataSource": {},
    "defaultValue": {},
    "description": {},
    "variableType": {},
    "lastUpdatedTime": {},
    "createdTime": {},
    "arn": {}
  }
]
```

<h2 id="tocS_identifier">identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
"string"
```

<h2 id="tocS_s3BucketLocation">s3BucketLocation</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketlocation"></a>
<a id="schema_s3BucketLocation"></a>
<a id="tocSs3bucketlocation"></a>
<a id="tocss3bucketlocation"></a>

```json
"string"
```

<h2 id="tocS_iamRoleArn">iamRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_iamRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"string"
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger-1"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger-1"></a>
<a id="tocsinteger-1"></a>

```json
0
```

<h2 id="tocS_BatchImport">BatchImport</h2>
<!-- backwards compatibility -->
<a id="schemabatchimport"></a>
<a id="schema_BatchImport"></a>
<a id="tocSbatchimport"></a>
<a id="tocsbatchimport"></a>

```json
{
  "jobId": {},
  "status": {},
  "failureReason": {},
  "startTime": {},
  "completionTime": {},
  "inputPath": {},
  "outputPath": {},
  "eventTypeName": {},
  "iamRoleArn": {},
  "arn": {},
  "processedRecordsCount": {},
  "failedRecordsCount": {},
  "totalRecordsCount": {}
}
```

The batch import job details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|status|object|false|none|none|
|failureReason|object|false|none|none|
|startTime|object|false|none|none|
|completionTime|object|false|none|none|
|inputPath|object|false|none|none|
|outputPath|object|false|none|none|
|eventTypeName|object|false|none|none|
|iamRoleArn|object|false|none|none|
|arn|object|false|none|none|
|processedRecordsCount|object|false|none|none|
|failedRecordsCount|object|false|none|none|
|totalRecordsCount|object|false|none|none|

<h2 id="tocS_BatchImportList">BatchImportList</h2>
<!-- backwards compatibility -->
<a id="schemabatchimportlist"></a>
<a id="schema_BatchImportList"></a>
<a id="tocSbatchimportlist"></a>
<a id="tocsbatchimportlist"></a>

```json
[
  {
    "jobId": {},
    "status": {},
    "failureReason": {},
    "startTime": {},
    "completionTime": {},
    "inputPath": {},
    "outputPath": {},
    "eventTypeName": {},
    "iamRoleArn": {},
    "arn": {},
    "processedRecordsCount": {},
    "failedRecordsCount": {},
    "totalRecordsCount": {}
  }
]
```

<h2 id="tocS_floatVersionString">floatVersionString</h2>
<!-- backwards compatibility -->
<a id="schemafloatversionstring"></a>
<a id="schema_floatVersionString"></a>
<a id="tocSfloatversionstring"></a>
<a id="tocsfloatversionstring"></a>

```json
"string"
```

<h2 id="tocS_BatchPrediction">BatchPrediction</h2>
<!-- backwards compatibility -->
<a id="schemabatchprediction"></a>
<a id="schema_BatchPrediction"></a>
<a id="tocSbatchprediction"></a>
<a id="tocsbatchprediction"></a>

```json
{
  "jobId": {},
  "status": {},
  "failureReason": {},
  "startTime": {},
  "completionTime": {},
  "lastHeartbeatTime": {},
  "inputPath": {},
  "outputPath": {},
  "eventTypeName": {},
  "detectorName": {},
  "detectorVersion": {},
  "iamRoleArn": {},
  "arn": {},
  "processedRecordsCount": {},
  "totalRecordsCount": {}
}
```

The batch prediction details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|object|false|none|none|
|status|object|false|none|none|
|failureReason|object|false|none|none|
|startTime|object|false|none|none|
|completionTime|object|false|none|none|
|lastHeartbeatTime|object|false|none|none|
|inputPath|object|false|none|none|
|outputPath|object|false|none|none|
|eventTypeName|object|false|none|none|
|detectorName|object|false|none|none|
|detectorVersion|object|false|none|none|
|iamRoleArn|object|false|none|none|
|arn|object|false|none|none|
|processedRecordsCount|object|false|none|none|
|totalRecordsCount|object|false|none|none|

<h2 id="tocS_BatchPredictionList">BatchPredictionList</h2>
<!-- backwards compatibility -->
<a id="schemabatchpredictionlist"></a>
<a id="schema_BatchPredictionList"></a>
<a id="tocSbatchpredictionlist"></a>
<a id="tocsbatchpredictionlist"></a>

```json
[
  {
    "jobId": {},
    "status": {},
    "failureReason": {},
    "startTime": {},
    "completionTime": {},
    "lastHeartbeatTime": {},
    "inputPath": {},
    "outputPath": {},
    "eventTypeName": {},
    "detectorName": {},
    "detectorVersion": {},
    "iamRoleArn": {},
    "arn": {},
    "processedRecordsCount": {},
    "totalRecordsCount": {}
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

<h2 id="tocS_wholeNumberVersionString">wholeNumberVersionString</h2>
<!-- backwards compatibility -->
<a id="schemawholenumberversionstring"></a>
<a id="schema_wholeNumberVersionString"></a>
<a id="tocSwholenumberversionstring"></a>
<a id="tocswholenumberversionstring"></a>

```json
"strin"
```

<h2 id="tocS_RuleList">RuleList</h2>
<!-- backwards compatibility -->
<a id="schemarulelist"></a>
<a id="schema_RuleList"></a>
<a id="tocSrulelist"></a>
<a id="tocsrulelist"></a>

```json
[
  {
    "detectorId": {},
    "ruleId": {},
    "ruleVersion": {}
  }
]
```

<h2 id="tocS_ListOfModelVersions">ListOfModelVersions</h2>
<!-- backwards compatibility -->
<a id="schemalistofmodelversions"></a>
<a id="schema_ListOfModelVersions"></a>
<a id="tocSlistofmodelversions"></a>
<a id="tocslistofmodelversions"></a>

```json
[
  {
    "modelId": {},
    "modelType": {},
    "modelVersionNumber": {},
    "arn": {}
  }
]
```

<h2 id="tocS_RuleExecutionMode">RuleExecutionMode</h2>
<!-- backwards compatibility -->
<a id="schemaruleexecutionmode"></a>
<a id="schema_RuleExecutionMode"></a>
<a id="tocSruleexecutionmode"></a>
<a id="tocsruleexecutionmode"></a>

```json
"ALL_MATCHED"
```

<h2 id="tocS_DetectorVersionStatus">DetectorVersionStatus</h2>
<!-- backwards compatibility -->
<a id="schemadetectorversionstatus"></a>
<a id="schema_DetectorVersionStatus"></a>
<a id="tocSdetectorversionstatus"></a>
<a id="tocsdetectorversionstatus"></a>

```json
"DRAFT"
```

<h2 id="tocS_ElementsList">ElementsList</h2>
<!-- backwards compatibility -->
<a id="schemaelementslist"></a>
<a id="schema_ElementsList"></a>
<a id="tocSelementslist"></a>
<a id="tocselementslist"></a>

```json
[
  "password"
]
```

<h2 id="tocS_modelIdentifier">modelIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemamodelidentifier"></a>
<a id="schema_modelIdentifier"></a>
<a id="tocSmodelidentifier"></a>
<a id="tocsmodelidentifier"></a>

```json
"string"
```

<h2 id="tocS_ModelTypeEnum">ModelTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemamodeltypeenum"></a>
<a id="schema_ModelTypeEnum"></a>
<a id="tocSmodeltypeenum"></a>
<a id="tocsmodeltypeenum"></a>

```json
"ONLINE_FRAUD_INSIGHTS"
```

<h2 id="tocS_TrainingDataSourceEnum">TrainingDataSourceEnum</h2>
<!-- backwards compatibility -->
<a id="schematrainingdatasourceenum"></a>
<a id="schema_TrainingDataSourceEnum"></a>
<a id="tocStrainingdatasourceenum"></a>
<a id="tocstrainingdatasourceenum"></a>

```json
"EXTERNAL_EVENTS"
```

<h2 id="tocS_TrainingDataSchema">TrainingDataSchema</h2>
<!-- backwards compatibility -->
<a id="schematrainingdataschema"></a>
<a id="schema_TrainingDataSchema"></a>
<a id="tocStrainingdataschema"></a>
<a id="tocstrainingdataschema"></a>

```json
{
  "modelVariables": {},
  "labelSchema": {
    "labelMapper": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "unlabeledEventsTreatment": {}
  }
}
```

The training data schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelVariables|object|true|none|none|
|labelSchema|[LabelSchema](#schemalabelschema)|false|none|The label schema.|

<h2 id="tocS_ExternalEventsDetail">ExternalEventsDetail</h2>
<!-- backwards compatibility -->
<a id="schemaexternaleventsdetail"></a>
<a id="schema_ExternalEventsDetail"></a>
<a id="tocSexternaleventsdetail"></a>
<a id="tocsexternaleventsdetail"></a>

```json
{
  "dataLocation": {},
  "dataAccessRoleArn": {}
}
```

Details for the external events data used for model version training.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataLocation|object|true|none|none|
|dataAccessRoleArn|object|true|none|none|

<h2 id="tocS_IngestedEventsDetail">IngestedEventsDetail</h2>
<!-- backwards compatibility -->
<a id="schemaingestedeventsdetail"></a>
<a id="schema_IngestedEventsDetail"></a>
<a id="tocSingestedeventsdetail"></a>
<a id="tocsingestedeventsdetail"></a>

```json
{
  "ingestedEventsTimeWindow": {
    "startTime": {},
    "endTime": {}
  }
}
```

The details of the ingested event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingestedEventsTimeWindow|object|true|none|none|

<h2 id="tocS_ruleExpression">ruleExpression</h2>
<!-- backwards compatibility -->
<a id="schemaruleexpression"></a>
<a id="schema_ruleExpression"></a>
<a id="tocSruleexpression"></a>
<a id="tocsruleexpression"></a>

```json
"password"
```

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
"DETECTORPL"
```

<h2 id="tocS_NonEmptyListOfStrings">NonEmptyListOfStrings</h2>
<!-- backwards compatibility -->
<a id="schemanonemptylistofstrings"></a>
<a id="schema_NonEmptyListOfStrings"></a>
<a id="tocSnonemptylistofstrings"></a>
<a id="tocsnonemptylistofstrings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "detectorId": {},
  "ruleId": {},
  "ruleVersion": {}
}
```

A rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|true|none|none|
|ruleId|object|true|none|none|
|ruleVersion|object|true|none|none|

<h2 id="tocS_DataType">DataType</h2>
<!-- backwards compatibility -->
<a id="schemadatatype"></a>
<a id="schema_DataType"></a>
<a id="tocSdatatype"></a>
<a id="tocsdatatype"></a>

```json
"STRING"
```

<h2 id="tocS_DataSource">DataSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_DataSource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
"EVENT"
```

<h2 id="tocS_CsvIndexToVariableMap">CsvIndexToVariableMap</h2>
<!-- backwards compatibility -->
<a id="schemacsvindextovariablemap"></a>
<a id="schema_CsvIndexToVariableMap"></a>
<a id="tocScsvindextovariablemap"></a>
<a id="tocscsvindextovariablemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string](#schemastring)|false|none|none|

<h2 id="tocS_fileValidationMessageList">fileValidationMessageList</h2>
<!-- backwards compatibility -->
<a id="schemafilevalidationmessagelist"></a>
<a id="schema_fileValidationMessageList"></a>
<a id="tocSfilevalidationmessagelist"></a>
<a id="tocsfilevalidationmessagelist"></a>

```json
[
  {
    "title": {},
    "content": {},
    "type": {}
  }
]
```

<h2 id="tocS_fieldValidationMessageList">fieldValidationMessageList</h2>
<!-- backwards compatibility -->
<a id="schemafieldvalidationmessagelist"></a>
<a id="schema_fieldValidationMessageList"></a>
<a id="tocSfieldvalidationmessagelist"></a>
<a id="tocsfieldvalidationmessagelist"></a>

```json
[
  {
    "fieldName": {},
    "identifier": {},
    "title": {},
    "content": {},
    "type": {}
  }
]
```

<h2 id="tocS_DataValidationMetrics">DataValidationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemadatavalidationmetrics"></a>
<a id="schema_DataValidationMetrics"></a>
<a id="tocSdatavalidationmetrics"></a>
<a id="tocsdatavalidationmetrics"></a>

```json
{
  "fileLevelMessages": {},
  "fieldLevelMessages": {}
}
```

The model training data validation metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileLevelMessages|object|false|none|none|
|fieldLevelMessages|object|false|none|none|

<h2 id="tocS_DeleteAuditHistory">DeleteAuditHistory</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaudithistory"></a>
<a id="schema_DeleteAuditHistory"></a>
<a id="tocSdeleteaudithistory"></a>
<a id="tocsdeleteaudithistory"></a>

```json
true
```

<h2 id="tocS_sageMakerEndpointIdentifier">sageMakerEndpointIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemasagemakerendpointidentifier"></a>
<a id="schema_sageMakerEndpointIdentifier"></a>
<a id="tocSsagemakerendpointidentifier"></a>
<a id="tocssagemakerendpointidentifier"></a>

```json
"string"
```

<h2 id="tocS_DetectorVersionMaxResults">DetectorVersionMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemadetectorversionmaxresults"></a>
<a id="schema_DetectorVersionMaxResults"></a>
<a id="tocSdetectorversionmaxresults"></a>
<a id="tocsdetectorversionmaxresults"></a>

```json
1000
```

<h2 id="tocS_DetectorVersionSummaryList">DetectorVersionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemadetectorversionsummarylist"></a>
<a id="schema_DetectorVersionSummaryList"></a>
<a id="tocSdetectorversionsummarylist"></a>
<a id="tocsdetectorversionsummarylist"></a>

```json
[
  {
    "detectorVersionId": {},
    "status": {},
    "description": {},
    "lastUpdatedTime": {}
  }
]
```

<h2 id="tocS_modelsMaxPageSize">modelsMaxPageSize</h2>
<!-- backwards compatibility -->
<a id="schemamodelsmaxpagesize"></a>
<a id="schema_modelsMaxPageSize"></a>
<a id="tocSmodelsmaxpagesize"></a>
<a id="tocsmodelsmaxpagesize"></a>

```json
1
```

<h2 id="tocS_modelVersionDetailList">modelVersionDetailList</h2>
<!-- backwards compatibility -->
<a id="schemamodelversiondetaillist"></a>
<a id="schema_modelVersionDetailList"></a>
<a id="tocSmodelversiondetaillist"></a>
<a id="tocsmodelversiondetaillist"></a>

```json
[
  {
    "modelId": {},
    "modelType": {},
    "modelVersionNumber": {},
    "status": {},
    "trainingDataSource": {},
    "trainingDataSchema": {
      "modelVariables": {},
      "labelSchema": {
        "labelMapper": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "unlabeledEventsTreatment": {}
      }
    },
    "externalEventsDetail": {
      "dataLocation": {},
      "dataAccessRoleArn": {}
    },
    "ingestedEventsDetail": {
      "ingestedEventsTimeWindow": {
        "startTime": {},
        "endTime": {}
      }
    },
    "trainingResult": {
      "dataValidationMetrics": {
        "fileLevelMessages": {},
        "fieldLevelMessages": {}
      },
      "trainingMetrics": {
        "auc": {},
        "metricDataPoints": {}
      },
      "variableImportanceMetrics": {
        "logOddsMetrics": {}
      }
    },
    "lastUpdatedTime": {},
    "createdTime": {},
    "arn": {},
    "trainingResultV2": {
      "dataValidationMetrics": {
        "fileLevelMessages": {},
        "fieldLevelMessages": {}
      },
      "trainingMetricsV2": {
        "ofi": {
          "metricDataPoints": {},
          "modelPerformance": {
            "auc": {},
            "uncertaintyRange": {
              "lowerBoundValue": {},
              "upperBoundValue": {}
            }
          }
        },
        "tfi": {
          "metricDataPoints": {},
          "modelPerformance": {
            "auc": {},
            "uncertaintyRange": {
              "lowerBoundValue": {},
              "upperBoundValue": {}
            }
          }
        },
        "ati": {
          "metricDataPoints": {},
          "modelPerformance": {
            "asi": {}
          }
        }
      },
      "variableImportanceMetrics": {
        "logOddsMetrics": {}
      },
      "aggregatedVariablesImportanceMetrics": {
        "logOddsMetrics": {}
      }
    }
  }
]
```

<h2 id="tocS_Detector">Detector</h2>
<!-- backwards compatibility -->
<a id="schemadetector"></a>
<a id="schema_Detector"></a>
<a id="tocSdetector"></a>
<a id="tocsdetector"></a>

```json
{
  "detectorId": {},
  "description": {},
  "eventTypeName": {},
  "lastUpdatedTime": {},
  "createdTime": {},
  "arn": {}
}
```

The detector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorId|object|false|none|none|
|description|object|false|none|none|
|eventTypeName|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|createdTime|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_DetectorList">DetectorList</h2>
<!-- backwards compatibility -->
<a id="schemadetectorlist"></a>
<a id="schema_DetectorList"></a>
<a id="tocSdetectorlist"></a>
<a id="tocsdetectorlist"></a>

```json
[
  {
    "detectorId": {},
    "description": {},
    "eventTypeName": {},
    "lastUpdatedTime": {},
    "createdTime": {},
    "arn": {}
  }
]
```

<h2 id="tocS_DetectorVersionSummary">DetectorVersionSummary</h2>
<!-- backwards compatibility -->
<a id="schemadetectorversionsummary"></a>
<a id="schema_DetectorVersionSummary"></a>
<a id="tocSdetectorversionsummary"></a>
<a id="tocsdetectorversionsummary"></a>

```json
{
  "detectorVersionId": {},
  "status": {},
  "description": {},
  "lastUpdatedTime": {}
}
```

The summary of the detector version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorVersionId|object|false|none|none|
|status|object|false|none|none|
|description|object|false|none|none|
|lastUpdatedTime|object|false|none|none|

<h2 id="tocS_DetectorsMaxResults">DetectorsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemadetectorsmaxresults"></a>
<a id="schema_DetectorsMaxResults"></a>
<a id="tocSdetectorsmaxresults"></a>
<a id="tocsdetectorsmaxresults"></a>

```json
5
```

<h2 id="tocS_Elements">Elements</h2>
<!-- backwards compatibility -->
<a id="schemaelements"></a>
<a id="schema_Elements"></a>
<a id="tocSelements"></a>
<a id="tocselements"></a>

```json
"password"
```

<h2 id="tocS_entityRestrictedString">entityRestrictedString</h2>
<!-- backwards compatibility -->
<a id="schemaentityrestrictedstring"></a>
<a id="schema_entityRestrictedString"></a>
<a id="tocSentityrestrictedstring"></a>
<a id="tocsentityrestrictedstring"></a>

```json
"string"
```

<h2 id="tocS_Entity">Entity</h2>
<!-- backwards compatibility -->
<a id="schemaentity"></a>
<a id="schema_Entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
{
  "entityType": {},
  "entityId": {}
}
```

The entity details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityType|object|true|none|none|
|entityId|object|true|none|none|

<h2 id="tocS_EntityType">EntityType</h2>
<!-- backwards compatibility -->
<a id="schemaentitytype"></a>
<a id="schema_EntityType"></a>
<a id="tocSentitytype"></a>
<a id="tocsentitytype"></a>

```json
{
  "name": {},
  "description": {},
  "lastUpdatedTime": {},
  "createdTime": {},
  "arn": {}
}
```

The entity type details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|createdTime|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_MapOfStrings">MapOfStrings</h2>
<!-- backwards compatibility -->
<a id="schemamapofstrings"></a>
<a id="schema_MapOfStrings"></a>
<a id="tocSmapofstrings"></a>
<a id="tocsmapofstrings"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string](#schemastring)|false|none|none|

<h2 id="tocS_EvaluatedExternalModel">EvaluatedExternalModel</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatedexternalmodel"></a>
<a id="schema_EvaluatedExternalModel"></a>
<a id="tocSevaluatedexternalmodel"></a>
<a id="tocsevaluatedexternalmodel"></a>

```json
{
  "modelEndpoint": {},
  "useEventVariables": {},
  "inputVariables": {
    "property1": "string",
    "property2": "string"
  },
  "outputVariables": {
    "property1": "string",
    "property2": "string"
  }
}
```

 The details of the external (Amazon Sagemaker) model evaluated for generating predictions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelEndpoint|object|false|none|none|
|useEventVariables|object|false|none|none|
|inputVariables|object|false|none|none|
|outputVariables|object|false|none|none|

<h2 id="tocS_ListOfModelVersionEvaluations">ListOfModelVersionEvaluations</h2>
<!-- backwards compatibility -->
<a id="schemalistofmodelversionevaluations"></a>
<a id="schema_ListOfModelVersionEvaluations"></a>
<a id="tocSlistofmodelversionevaluations"></a>
<a id="tocslistofmodelversionevaluations"></a>

```json
[
  {
    "outputVariableName": {},
    "evaluationScore": {},
    "predictionExplanations": {
      "variableImpactExplanations": {},
      "aggregatedVariablesImpactExplanations": {}
    }
  }
]
```

<h2 id="tocS_EvaluatedModelVersion">EvaluatedModelVersion</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatedmodelversion"></a>
<a id="schema_EvaluatedModelVersion"></a>
<a id="tocSevaluatedmodelversion"></a>
<a id="tocsevaluatedmodelversion"></a>

```json
{
  "modelId": {},
  "modelVersion": {},
  "modelType": {},
  "evaluations": {}
}
```

 The model version evaluated for generating prediction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|false|none|none|
|modelVersion|object|false|none|none|
|modelType|object|false|none|none|
|evaluations|object|false|none|none|

<h2 id="tocS_sensitiveString">sensitiveString</h2>
<!-- backwards compatibility -->
<a id="schemasensitivestring"></a>
<a id="schema_sensitiveString"></a>
<a id="tocSsensitivestring"></a>
<a id="tocssensitivestring"></a>

```json
"password"
```

<h2 id="tocS_EvaluatedRule">EvaluatedRule</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatedrule"></a>
<a id="schema_EvaluatedRule"></a>
<a id="tocSevaluatedrule"></a>
<a id="tocsevaluatedrule"></a>

```json
{
  "ruleId": {},
  "ruleVersion": {},
  "expression": {},
  "expressionWithValues": {},
  "outcomes": {},
  "evaluated": {},
  "matched": {}
}
```

 The details of the rule used for evaluating variable values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleId|object|false|none|none|
|ruleVersion|object|false|none|none|
|expression|object|false|none|none|
|expressionWithValues|object|false|none|none|
|outcomes|object|false|none|none|
|evaluated|object|false|none|none|
|matched|object|false|none|none|

<h2 id="tocS_EvaluatedRuleList">EvaluatedRuleList</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatedrulelist"></a>
<a id="schema_EvaluatedRuleList"></a>
<a id="tocSevaluatedrulelist"></a>
<a id="tocsevaluatedrulelist"></a>

```json
[
  {
    "ruleId": {},
    "ruleVersion": {},
    "expression": {},
    "expressionWithValues": {},
    "outcomes": {},
    "evaluated": {},
    "matched": {}
  }
]
```

<h2 id="tocS_EventAttributeMap">EventAttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemaeventattributemap"></a>
<a id="schema_EventAttributeMap"></a>
<a id="tocSeventattributemap"></a>
<a id="tocseventattributemap"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[attributeValue](#schemaattributevalue)|false|none|none|

<h2 id="tocS_listOfEntities">listOfEntities</h2>
<!-- backwards compatibility -->
<a id="schemalistofentities"></a>
<a id="schema_listOfEntities"></a>
<a id="tocSlistofentities"></a>
<a id="tocslistofentities"></a>

```json
[
  {
    "entityType": {},
    "entityId": {}
  }
]
```

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "eventId": {},
  "eventTypeName": {},
  "eventTimestamp": {},
  "eventVariables": {
    "property1": "password",
    "property2": "password"
  },
  "currentLabel": {},
  "labelTimestamp": {},
  "entities": {}
}
```

The event details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|object|false|none|none|
|eventTypeName|object|false|none|none|
|eventTimestamp|object|false|none|none|
|eventVariables|object|false|none|none|
|currentLabel|object|false|none|none|
|labelTimestamp|object|false|none|none|
|entities|object|false|none|none|

<h2 id="tocS_attributeValue">attributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_attributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
"password"
```

<h2 id="tocS_EventIngestion">EventIngestion</h2>
<!-- backwards compatibility -->
<a id="schemaeventingestion"></a>
<a id="schema_EventIngestion"></a>
<a id="tocSeventingestion"></a>
<a id="tocseventingestion"></a>

```json
"ENABLED"
```

<h2 id="tocS_EventPredictionSummary">EventPredictionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaeventpredictionsummary"></a>
<a id="schema_EventPredictionSummary"></a>
<a id="tocSeventpredictionsummary"></a>
<a id="tocseventpredictionsummary"></a>

```json
{
  "eventId": {},
  "eventTypeName": {},
  "eventTimestamp": {},
  "predictionTimestamp": {},
  "detectorId": {},
  "detectorVersionId": {}
}
```

 Information about the summary of an event prediction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|object|false|none|none|
|eventTypeName|object|false|none|none|
|eventTimestamp|object|false|none|none|
|predictionTimestamp|object|false|none|none|
|detectorId|object|false|none|none|
|detectorVersionId|object|false|none|none|

<h2 id="tocS_EventPredictionsMaxResults">EventPredictionsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaeventpredictionsmaxresults"></a>
<a id="schema_EventPredictionsMaxResults"></a>
<a id="tocSeventpredictionsmaxresults"></a>
<a id="tocseventpredictionsmaxresults"></a>

```json
50
```

<h2 id="tocS_IngestedEventStatistics">IngestedEventStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaingestedeventstatistics"></a>
<a id="schema_IngestedEventStatistics"></a>
<a id="tocSingestedeventstatistics"></a>
<a id="tocsingestedeventstatistics"></a>

```json
{
  "numberOfEvents": {},
  "eventDataSizeInBytes": {},
  "leastRecentEvent": {},
  "mostRecentEvent": {},
  "lastUpdatedTime": {}
}
```

Data about the stored events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfEvents|object|false|none|none|
|eventDataSizeInBytes|object|false|none|none|
|leastRecentEvent|object|false|none|none|
|mostRecentEvent|object|false|none|none|
|lastUpdatedTime|object|false|none|none|

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
{
  "name": {},
  "description": {},
  "eventVariables": {},
  "labels": {},
  "entityTypes": {},
  "eventIngestion": {},
  "ingestedEventStatistics": {
    "numberOfEvents": {},
    "eventDataSizeInBytes": {},
    "leastRecentEvent": {},
    "mostRecentEvent": {},
    "lastUpdatedTime": {}
  },
  "lastUpdatedTime": {},
  "createdTime": {},
  "arn": {}
}
```

The event type details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|eventVariables|object|false|none|none|
|labels|object|false|none|none|
|entityTypes|object|false|none|none|
|eventIngestion|object|false|none|none|
|ingestedEventStatistics|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|createdTime|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_variableValue">variableValue</h2>
<!-- backwards compatibility -->
<a id="schemavariablevalue"></a>
<a id="schema_variableValue"></a>
<a id="tocSvariablevalue"></a>
<a id="tocsvariablevalue"></a>

```json
"password"
```

<h2 id="tocS_EventVariableMap">EventVariableMap</h2>
<!-- backwards compatibility -->
<a id="schemaeventvariablemap"></a>
<a id="schema_EventVariableMap"></a>
<a id="tocSeventvariablemap"></a>
<a id="tocseventvariablemap"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[variableValue](#schemavariablevalue)|false|none|none|

<h2 id="tocS_EventVariableSummary">EventVariableSummary</h2>
<!-- backwards compatibility -->
<a id="schemaeventvariablesummary"></a>
<a id="schema_EventVariableSummary"></a>
<a id="tocSeventvariablesummary"></a>
<a id="tocseventvariablesummary"></a>

```json
{
  "name": {},
  "value": {},
  "source": {}
}
```

 Information about the summary of an event variable that was evaluated for generating prediction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|value|object|false|none|none|
|source|object|false|none|none|

<h2 id="tocS_ModelSource">ModelSource</h2>
<!-- backwards compatibility -->
<a id="schemamodelsource"></a>
<a id="schema_ModelSource"></a>
<a id="tocSmodelsource"></a>
<a id="tocsmodelsource"></a>

```json
"SAGEMAKER"
```

<h2 id="tocS_ModelInputConfiguration">ModelInputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamodelinputconfiguration"></a>
<a id="schema_ModelInputConfiguration"></a>
<a id="tocSmodelinputconfiguration"></a>
<a id="tocsmodelinputconfiguration"></a>

```json
{
  "eventTypeName": {},
  "format": {},
  "useEventVariables": {},
  "jsonInputTemplate": {},
  "csvInputTemplate": {}
}
```

The Amazon SageMaker model input configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypeName|object|false|none|none|
|format|object|false|none|none|
|useEventVariables|object|true|none|none|
|jsonInputTemplate|object|false|none|none|
|csvInputTemplate|object|false|none|none|

<h2 id="tocS_ModelOutputConfiguration">ModelOutputConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamodeloutputconfiguration"></a>
<a id="schema_ModelOutputConfiguration"></a>
<a id="tocSmodeloutputconfiguration"></a>
<a id="tocsmodeloutputconfiguration"></a>

```json
{
  "format": {},
  "jsonKeyToVariableMap": {
    "property1": "string",
    "property2": "string"
  },
  "csvIndexToVariableMap": {
    "property1": "string",
    "property2": "string"
  }
}
```

Provides the Amazon Sagemaker model output configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|object|true|none|none|
|jsonKeyToVariableMap|object|false|none|none|
|csvIndexToVariableMap|object|false|none|none|

<h2 id="tocS_ModelEndpointStatus">ModelEndpointStatus</h2>
<!-- backwards compatibility -->
<a id="schemamodelendpointstatus"></a>
<a id="schema_ModelEndpointStatus"></a>
<a id="tocSmodelendpointstatus"></a>
<a id="tocsmodelendpointstatus"></a>

```json
"ASSOCIATED"
```

<h2 id="tocS_ExternalModel">ExternalModel</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmodel"></a>
<a id="schema_ExternalModel"></a>
<a id="tocSexternalmodel"></a>
<a id="tocsexternalmodel"></a>

```json
{
  "modelEndpoint": {},
  "modelSource": {},
  "invokeModelEndpointRoleArn": {},
  "inputConfiguration": {
    "eventTypeName": {},
    "format": {},
    "useEventVariables": {},
    "jsonInputTemplate": {},
    "csvInputTemplate": {}
  },
  "outputConfiguration": {
    "format": {},
    "jsonKeyToVariableMap": {
      "property1": "string",
      "property2": "string"
    },
    "csvIndexToVariableMap": {
      "property1": "string",
      "property2": "string"
    }
  },
  "modelEndpointStatus": {},
  "lastUpdatedTime": {},
  "createdTime": {},
  "arn": {}
}
```

The Amazon SageMaker model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelEndpoint|object|false|none|none|
|modelSource|object|false|none|none|
|invokeModelEndpointRoleArn|object|false|none|none|
|inputConfiguration|object|false|none|none|
|outputConfiguration|object|false|none|none|
|modelEndpointStatus|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|createdTime|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_ModelEndpointDataBlob">ModelEndpointDataBlob</h2>
<!-- backwards compatibility -->
<a id="schemamodelendpointdatablob"></a>
<a id="schema_ModelEndpointDataBlob"></a>
<a id="tocSmodelendpointdatablob"></a>
<a id="tocsmodelendpointdatablob"></a>

```json
{
  "byteBuffer": {},
  "contentType": {}
}
```

A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|byteBuffer|object|false|none|none|
|contentType|object|false|none|none|

<h2 id="tocS_ExternalModelEndpointDataBlobMap">ExternalModelEndpointDataBlobMap</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmodelendpointdatablobmap"></a>
<a id="schema_ExternalModelEndpointDataBlobMap"></a>
<a id="tocSexternalmodelendpointdatablobmap"></a>
<a id="tocsexternalmodelendpointdatablobmap"></a>

```json
{
  "property1": {
    "byteBuffer": {},
    "contentType": {}
  },
  "property2": {
    "byteBuffer": {},
    "contentType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ModelEndpointDataBlob](#schemamodelendpointdatablob)|false|none|A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration.|

<h2 id="tocS_ExternalModelList">ExternalModelList</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmodellist"></a>
<a id="schema_ExternalModelList"></a>
<a id="tocSexternalmodellist"></a>
<a id="tocsexternalmodellist"></a>

```json
[
  {
    "modelEndpoint": {},
    "modelSource": {},
    "invokeModelEndpointRoleArn": {},
    "inputConfiguration": {
      "eventTypeName": {},
      "format": {},
      "useEventVariables": {},
      "jsonInputTemplate": {},
      "csvInputTemplate": {}
    },
    "outputConfiguration": {
      "format": {},
      "jsonKeyToVariableMap": {
        "property1": "string",
        "property2": "string"
      },
      "csvIndexToVariableMap": {
        "property1": "string",
        "property2": "string"
      }
    },
    "modelEndpointStatus": {},
    "lastUpdatedTime": {},
    "createdTime": {},
    "arn": {}
  }
]
```

<h2 id="tocS_ExternalModelSummary">ExternalModelSummary</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmodelsummary"></a>
<a id="schema_ExternalModelSummary"></a>
<a id="tocSexternalmodelsummary"></a>
<a id="tocsexternalmodelsummary"></a>

```json
{
  "modelEndpoint": {},
  "modelSource": {}
}
```

The Amazon SageMaker model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelEndpoint|object|false|none|none|
|modelSource|object|false|none|none|

<h2 id="tocS_ExternalModelPredictionMap">ExternalModelPredictionMap</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmodelpredictionmap"></a>
<a id="schema_ExternalModelPredictionMap"></a>
<a id="tocSexternalmodelpredictionmap"></a>
<a id="tocsexternalmodelpredictionmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string](#schemastring)|false|none|none|

<h2 id="tocS_ExternalModelOutputs">ExternalModelOutputs</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmodeloutputs"></a>
<a id="schema_ExternalModelOutputs"></a>
<a id="tocSexternalmodeloutputs"></a>
<a id="tocsexternalmodeloutputs"></a>

```json
{
  "externalModel": {
    "modelEndpoint": {},
    "modelSource": {}
  },
  "outputs": {
    "property1": "string",
    "property2": "string"
  }
}
```

The fraud prediction scores from Amazon SageMaker model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalModel|object|false|none|none|
|outputs|object|false|none|none|

<h2 id="tocS_ExternalModelsMaxResults">ExternalModelsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmodelsmaxresults"></a>
<a id="schema_ExternalModelsMaxResults"></a>
<a id="tocSexternalmodelsmaxresults"></a>
<a id="tocsexternalmodelsmaxresults"></a>

```json
5
```

<h2 id="tocS_FieldValidationMessage">FieldValidationMessage</h2>
<!-- backwards compatibility -->
<a id="schemafieldvalidationmessage"></a>
<a id="schema_FieldValidationMessage"></a>
<a id="tocSfieldvalidationmessage"></a>
<a id="tocsfieldvalidationmessage"></a>

```json
{
  "fieldName": {},
  "identifier": {},
  "title": {},
  "content": {},
  "type": {}
}
```

The message details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldName|object|false|none|none|
|identifier|object|false|none|none|
|title|object|false|none|none|
|content|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_FileValidationMessage">FileValidationMessage</h2>
<!-- backwards compatibility -->
<a id="schemafilevalidationmessage"></a>
<a id="schema_FileValidationMessage"></a>
<a id="tocSfilevalidationmessage"></a>
<a id="tocsfilevalidationmessage"></a>

```json
{
  "title": {},
  "content": {},
  "type": {}
}
```

The message details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|object|false|none|none|
|content|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_filterString">filterString</h2>
<!-- backwards compatibility -->
<a id="schemafilterstring"></a>
<a id="schema_filterString"></a>
<a id="tocSfilterstring"></a>
<a id="tocsfilterstring"></a>

```json
"string"
```

<h2 id="tocS_FilterCondition">FilterCondition</h2>
<!-- backwards compatibility -->
<a id="schemafiltercondition"></a>
<a id="schema_FilterCondition"></a>
<a id="tocSfiltercondition"></a>
<a id="tocsfiltercondition"></a>

```json
{
  "value": {}
}
```

 A conditional statement for filtering a list of past predictions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|false|none|none|

<h2 id="tocS_batchImportsMaxPageSize">batchImportsMaxPageSize</h2>
<!-- backwards compatibility -->
<a id="schemabatchimportsmaxpagesize"></a>
<a id="schema_batchImportsMaxPageSize"></a>
<a id="tocSbatchimportsmaxpagesize"></a>
<a id="tocsbatchimportsmaxpagesize"></a>

```json
1
```

<h2 id="tocS_batchPredictionsMaxPageSize">batchPredictionsMaxPageSize</h2>
<!-- backwards compatibility -->
<a id="schemabatchpredictionsmaxpagesize"></a>
<a id="schema_batchPredictionsMaxPageSize"></a>
<a id="tocSbatchpredictionsmaxpagesize"></a>
<a id="tocsbatchpredictionsmaxpagesize"></a>

```json
1
```

<h2 id="tocS_entityTypesMaxResults">entityTypesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaentitytypesmaxresults"></a>
<a id="schema_entityTypesMaxResults"></a>
<a id="tocSentitytypesmaxresults"></a>
<a id="tocsentitytypesmaxresults"></a>

```json
5
```

<h2 id="tocS_entityTypeList">entityTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaentitytypelist"></a>
<a id="schema_entityTypeList"></a>
<a id="tocSentitytypelist"></a>
<a id="tocsentitytypelist"></a>

```json
[
  {
    "name": {},
    "description": {},
    "lastUpdatedTime": {},
    "createdTime": {},
    "arn": {}
  }
]
```

<h2 id="tocS_ListOfEventVariableSummaries">ListOfEventVariableSummaries</h2>
<!-- backwards compatibility -->
<a id="schemalistofeventvariablesummaries"></a>
<a id="schema_ListOfEventVariableSummaries"></a>
<a id="tocSlistofeventvariablesummaries"></a>
<a id="tocslistofeventvariablesummaries"></a>

```json
[
  {
    "name": {},
    "value": {},
    "source": {}
  }
]
```

<h2 id="tocS_ListOfEvaluatedModelVersions">ListOfEvaluatedModelVersions</h2>
<!-- backwards compatibility -->
<a id="schemalistofevaluatedmodelversions"></a>
<a id="schema_ListOfEvaluatedModelVersions"></a>
<a id="tocSlistofevaluatedmodelversions"></a>
<a id="tocslistofevaluatedmodelversions"></a>

```json
[
  {
    "modelId": {},
    "modelVersion": {},
    "modelType": {},
    "evaluations": {}
  }
]
```

<h2 id="tocS_ListOfEvaluatedExternalModels">ListOfEvaluatedExternalModels</h2>
<!-- backwards compatibility -->
<a id="schemalistofevaluatedexternalmodels"></a>
<a id="schema_ListOfEvaluatedExternalModels"></a>
<a id="tocSlistofevaluatedexternalmodels"></a>
<a id="tocslistofevaluatedexternalmodels"></a>

```json
[
  {
    "modelEndpoint": {},
    "useEventVariables": {},
    "inputVariables": {
      "property1": "string",
      "property2": "string"
    },
    "outputVariables": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_utcTimestampISO8601">utcTimestampISO8601</h2>
<!-- backwards compatibility -->
<a id="schemautctimestampiso8601"></a>
<a id="schema_utcTimestampISO8601"></a>
<a id="tocSutctimestampiso8601"></a>
<a id="tocsutctimestampiso8601"></a>

```json
"stringstri"
```

<h2 id="tocS_ListOfModelScores">ListOfModelScores</h2>
<!-- backwards compatibility -->
<a id="schemalistofmodelscores"></a>
<a id="schema_ListOfModelScores"></a>
<a id="tocSlistofmodelscores"></a>
<a id="tocslistofmodelscores"></a>

```json
[
  {
    "modelVersion": {
      "modelId": {},
      "modelType": {},
      "modelVersionNumber": {},
      "arn": {}
    },
    "scores": {
      "property1": 0,
      "property2": 0
    }
  }
]
```

<h2 id="tocS_ListOfRuleResults">ListOfRuleResults</h2>
<!-- backwards compatibility -->
<a id="schemalistofruleresults"></a>
<a id="schema_ListOfRuleResults"></a>
<a id="tocSlistofruleresults"></a>
<a id="tocslistofruleresults"></a>

```json
[
  {
    "ruleId": {},
    "outcomes": {}
  }
]
```

<h2 id="tocS_ListOfExternalModelOutputs">ListOfExternalModelOutputs</h2>
<!-- backwards compatibility -->
<a id="schemalistofexternalmodeloutputs"></a>
<a id="schema_ListOfExternalModelOutputs"></a>
<a id="tocSlistofexternalmodeloutputs"></a>
<a id="tocslistofexternalmodeloutputs"></a>

```json
[
  {
    "externalModel": {
      "modelEndpoint": {},
      "modelSource": {}
    },
    "outputs": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_eventTypesMaxResults">eventTypesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypesmaxresults"></a>
<a id="schema_eventTypesMaxResults"></a>
<a id="tocSeventtypesmaxresults"></a>
<a id="tocseventtypesmaxresults"></a>

```json
5
```

<h2 id="tocS_eventTypeList">eventTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypelist"></a>
<a id="schema_eventTypeList"></a>
<a id="tocSeventtypelist"></a>
<a id="tocseventtypelist"></a>

```json
[
  {
    "name": {},
    "description": {},
    "eventVariables": {},
    "labels": {},
    "entityTypes": {},
    "eventIngestion": {},
    "ingestedEventStatistics": {
      "numberOfEvents": {},
      "eventDataSizeInBytes": {},
      "leastRecentEvent": {},
      "mostRecentEvent": {},
      "lastUpdatedTime": {}
    },
    "lastUpdatedTime": {},
    "createdTime": {},
    "arn": {}
  }
]
```

<h2 id="tocS_KMSKey">KMSKey</h2>
<!-- backwards compatibility -->
<a id="schemakmskey"></a>
<a id="schema_KMSKey"></a>
<a id="tocSkmskey"></a>
<a id="tocskmskey"></a>

```json
{
  "kmsEncryptionKeyArn": {}
}
```

The KMS key details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsEncryptionKeyArn|object|false|none|none|

<h2 id="tocS_labelsMaxResults">labelsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalabelsmaxresults"></a>
<a id="schema_labelsMaxResults"></a>
<a id="tocSlabelsmaxresults"></a>
<a id="tocslabelsmaxresults"></a>

```json
10
```

<h2 id="tocS_labelList">labelList</h2>
<!-- backwards compatibility -->
<a id="schemalabellist"></a>
<a id="schema_labelList"></a>
<a id="tocSlabellist"></a>
<a id="tocslabellist"></a>

```json
[
  {
    "name": {},
    "description": {},
    "lastUpdatedTime": {},
    "createdTime": {},
    "arn": {}
  }
]
```

<h2 id="tocS_nextToken">nextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_nextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_ListsElementsMaxResults">ListsElementsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistselementsmaxresults"></a>
<a id="schema_ListsElementsMaxResults"></a>
<a id="tocSlistselementsmaxresults"></a>
<a id="tocslistselementsmaxresults"></a>

```json
500
```

<h2 id="tocS_ListsMetadataMaxResults">ListsMetadataMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistsmetadatamaxresults"></a>
<a id="schema_ListsMetadataMaxResults"></a>
<a id="tocSlistsmetadatamaxresults"></a>
<a id="tocslistsmetadatamaxresults"></a>

```json
5
```

<h2 id="tocS_modelList">modelList</h2>
<!-- backwards compatibility -->
<a id="schemamodellist"></a>
<a id="schema_modelList"></a>
<a id="tocSmodellist"></a>
<a id="tocsmodellist"></a>

```json
[
  {
    "modelId": {},
    "modelType": {},
    "description": {},
    "eventTypeName": {},
    "createdTime": {},
    "lastUpdatedTime": {},
    "arn": {}
  }
]
```

<h2 id="tocS_OutcomesMaxResults">OutcomesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaoutcomesmaxresults"></a>
<a id="schema_OutcomesMaxResults"></a>
<a id="tocSoutcomesmaxresults"></a>
<a id="tocsoutcomesmaxresults"></a>

```json
50
```

<h2 id="tocS_OutcomeList">OutcomeList</h2>
<!-- backwards compatibility -->
<a id="schemaoutcomelist"></a>
<a id="schema_OutcomeList"></a>
<a id="tocSoutcomelist"></a>
<a id="tocsoutcomelist"></a>

```json
[
  {
    "name": {},
    "description": {},
    "lastUpdatedTime": {},
    "createdTime": {},
    "arn": {}
  }
]
```

<h2 id="tocS_RulesMaxResults">RulesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemarulesmaxresults"></a>
<a id="schema_RulesMaxResults"></a>
<a id="tocSrulesmaxresults"></a>
<a id="tocsrulesmaxresults"></a>

```json
50
```

<h2 id="tocS_RuleDetailList">RuleDetailList</h2>
<!-- backwards compatibility -->
<a id="schemaruledetaillist"></a>
<a id="schema_RuleDetailList"></a>
<a id="tocSruledetaillist"></a>
<a id="tocsruledetaillist"></a>

```json
[
  {
    "ruleId": {},
    "description": {},
    "detectorId": {},
    "ruleVersion": {},
    "expression": {},
    "language": {},
    "outcomes": {},
    "lastUpdatedTime": {},
    "createdTime": {},
    "arn": {}
  }
]
```

<h2 id="tocS_VariablesMaxResults">VariablesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemavariablesmaxresults"></a>
<a id="schema_VariablesMaxResults"></a>
<a id="tocSvariablesmaxresults"></a>
<a id="tocsvariablesmaxresults"></a>

```json
50
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

<h2 id="tocS_IngestedEventsTimeWindow">IngestedEventsTimeWindow</h2>
<!-- backwards compatibility -->
<a id="schemaingestedeventstimewindow"></a>
<a id="schema_IngestedEventsTimeWindow"></a>
<a id="tocSingestedeventstimewindow"></a>
<a id="tocsingestedeventstimewindow"></a>

```json
{
  "startTime": {},
  "endTime": {}
}
```

The start and stop time of the ingested events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTime|object|true|none|none|
|endTime|object|true|none|none|

<h2 id="tocS_JsonKeyToVariableMap">JsonKeyToVariableMap</h2>
<!-- backwards compatibility -->
<a id="schemajsonkeytovariablemap"></a>
<a id="schema_JsonKeyToVariableMap"></a>
<a id="tocSjsonkeytovariablemap"></a>
<a id="tocsjsonkeytovariablemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string](#schemastring)|false|none|none|

<h2 id="tocS_KmsEncryptionKeyArn">KmsEncryptionKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmsencryptionkeyarn"></a>
<a id="schema_KmsEncryptionKeyArn"></a>
<a id="tocSkmsencryptionkeyarn"></a>
<a id="tocskmsencryptionkeyarn"></a>

```json
"strings"
```

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "name": {},
  "description": {},
  "lastUpdatedTime": {},
  "createdTime": {},
  "arn": {}
}
```

The label details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|createdTime|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_labelMapper">labelMapper</h2>
<!-- backwards compatibility -->
<a id="schemalabelmapper"></a>
<a id="schema_labelMapper"></a>
<a id="tocSlabelmapper"></a>
<a id="tocslabelmapper"></a>

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
|**additionalProperties**|[ListOfStrings](#schemalistofstrings)|false|none|none|

<h2 id="tocS_UnlabeledEventsTreatment">UnlabeledEventsTreatment</h2>
<!-- backwards compatibility -->
<a id="schemaunlabeledeventstreatment"></a>
<a id="schema_UnlabeledEventsTreatment"></a>
<a id="tocSunlabeledeventstreatment"></a>
<a id="tocsunlabeledeventstreatment"></a>

```json
"IGNORE"
```

<h2 id="tocS_LabelSchema">LabelSchema</h2>
<!-- backwards compatibility -->
<a id="schemalabelschema"></a>
<a id="schema_LabelSchema"></a>
<a id="tocSlabelschema"></a>
<a id="tocslabelschema"></a>

```json
{
  "labelMapper": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "unlabeledEventsTreatment": {}
}
```

The label schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelMapper|object|false|none|none|
|unlabeledEventsTreatment|object|false|none|none|

<h2 id="tocS_PredictionTimeRange">PredictionTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemapredictiontimerange"></a>
<a id="schema_PredictionTimeRange"></a>
<a id="tocSpredictiontimerange"></a>
<a id="tocspredictiontimerange"></a>

```json
{
  "startTime": {},
  "endTime": {}
}
```

 The time period for when the predictions were generated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTime|object|true|none|none|
|endTime|object|true|none|none|

<h2 id="tocS_ListOfEventPredictionSummaries">ListOfEventPredictionSummaries</h2>
<!-- backwards compatibility -->
<a id="schemalistofeventpredictionsummaries"></a>
<a id="schema_ListOfEventPredictionSummaries"></a>
<a id="tocSlistofeventpredictionsummaries"></a>
<a id="tocslistofeventpredictionsummaries"></a>

```json
[
  {
    "eventId": {},
    "eventTypeName": {},
    "eventTimestamp": {},
    "predictionTimestamp": {},
    "detectorId": {},
    "detectorVersionId": {}
  }
]
```

<h2 id="tocS_ListOfAggregatedVariablesImpactExplanations">ListOfAggregatedVariablesImpactExplanations</h2>
<!-- backwards compatibility -->
<a id="schemalistofaggregatedvariablesimpactexplanations"></a>
<a id="schema_ListOfAggregatedVariablesImpactExplanations"></a>
<a id="tocSlistofaggregatedvariablesimpactexplanations"></a>
<a id="tocslistofaggregatedvariablesimpactexplanations"></a>

```json
[
  {
    "eventVariableNames": {},
    "relativeImpact": {},
    "logOddsImpact": {}
  }
]
```

<h2 id="tocS_LogOddsMetric">LogOddsMetric</h2>
<!-- backwards compatibility -->
<a id="schemalogoddsmetric"></a>
<a id="schema_LogOddsMetric"></a>
<a id="tocSlogoddsmetric"></a>
<a id="tocslogoddsmetric"></a>

```json
{
  "variableName": {},
  "variableType": {},
  "variableImportance": {}
}
```

The log odds metric details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variableName|object|true|none|none|
|variableType|object|true|none|none|
|variableImportance|object|true|none|none|

<h2 id="tocS_ListOfLogOddsMetrics">ListOfLogOddsMetrics</h2>
<!-- backwards compatibility -->
<a id="schemalistoflogoddsmetrics"></a>
<a id="schema_ListOfLogOddsMetrics"></a>
<a id="tocSlistoflogoddsmetrics"></a>
<a id="tocslistoflogoddsmetrics"></a>

```json
[
  {
    "variableName": {},
    "variableType": {},
    "variableImportance": {}
  }
]
```

<h2 id="tocS_ModelScores">ModelScores</h2>
<!-- backwards compatibility -->
<a id="schemamodelscores"></a>
<a id="schema_ModelScores"></a>
<a id="tocSmodelscores"></a>
<a id="tocsmodelscores"></a>

```json
{
  "modelVersion": {
    "modelId": {},
    "modelType": {},
    "modelVersionNumber": {},
    "arn": {}
  },
  "scores": {
    "property1": 0,
    "property2": 0
  }
}
```

The fraud prediction scores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelVersion|object|false|none|none|
|scores|object|false|none|none|

<h2 id="tocS_ModelVersionEvaluation">ModelVersionEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemamodelversionevaluation"></a>
<a id="schema_ModelVersionEvaluation"></a>
<a id="tocSmodelversionevaluation"></a>
<a id="tocsmodelversionevaluation"></a>

```json
{
  "outputVariableName": {},
  "evaluationScore": {},
  "predictionExplanations": {
    "variableImpactExplanations": {},
    "aggregatedVariablesImpactExplanations": {}
  }
}
```

 The model version evalutions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputVariableName|object|false|none|none|
|evaluationScore|object|false|none|none|
|predictionExplanations|object|false|none|none|

<h2 id="tocS_ModelVersion">ModelVersion</h2>
<!-- backwards compatibility -->
<a id="schemamodelversion"></a>
<a id="schema_ModelVersion"></a>
<a id="tocSmodelversion"></a>
<a id="tocsmodelversion"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {},
  "arn": {}
}
```

The model version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|true|none|none|
|modelType|object|true|none|none|
|modelVersionNumber|object|true|none|none|
|arn|object|false|none|none|

<h2 id="tocS_RuleResult">RuleResult</h2>
<!-- backwards compatibility -->
<a id="schemaruleresult"></a>
<a id="schema_RuleResult"></a>
<a id="tocSruleresult"></a>
<a id="tocsruleresult"></a>

```json
{
  "ruleId": {},
  "outcomes": {}
}
```

The rule results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleId|object|false|none|none|
|outcomes|object|false|none|none|

<h2 id="tocS_TagsMaxResults">TagsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schematagsmaxresults"></a>
<a id="schema_TagsMaxResults"></a>
<a id="tocStagsmaxresults"></a>
<a id="tocstagsmaxresults"></a>

```json
50
```

<h2 id="tocS_ListUpdateMode">ListUpdateMode</h2>
<!-- backwards compatibility -->
<a id="schemalistupdatemode"></a>
<a id="schema_ListUpdateMode"></a>
<a id="tocSlistupdatemode"></a>
<a id="tocslistupdatemode"></a>

```json
"REPLACE"
```

<h2 id="tocS_MetricDataPoint">MetricDataPoint</h2>
<!-- backwards compatibility -->
<a id="schemametricdatapoint"></a>
<a id="schema_MetricDataPoint"></a>
<a id="tocSmetricdatapoint"></a>
<a id="tocsmetricdatapoint"></a>

```json
{
  "fpr": {},
  "precision": {},
  "tpr": {},
  "threshold": {}
}
```

Model performance metrics data points.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fpr|object|false|none|none|
|precision|object|false|none|none|
|tpr|object|false|none|none|
|threshold|object|false|none|none|

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "description": {},
  "eventTypeName": {},
  "createdTime": {},
  "lastUpdatedTime": {},
  "arn": {}
}
```

The model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|false|none|none|
|modelType|object|false|none|none|
|description|object|false|none|none|
|eventTypeName|object|false|none|none|
|createdTime|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_blob">blob</h2>
<!-- backwards compatibility -->
<a id="schemablob"></a>
<a id="schema_blob"></a>
<a id="tocSblob"></a>
<a id="tocsblob"></a>

```json
"string"
```

<h2 id="tocS_contentType">contentType</h2>
<!-- backwards compatibility -->
<a id="schemacontenttype"></a>
<a id="schema_contentType"></a>
<a id="tocScontenttype"></a>
<a id="tocscontenttype"></a>

```json
"string"
```

<h2 id="tocS_ModelInputDataFormat">ModelInputDataFormat</h2>
<!-- backwards compatibility -->
<a id="schemamodelinputdataformat"></a>
<a id="schema_ModelInputDataFormat"></a>
<a id="tocSmodelinputdataformat"></a>
<a id="tocsmodelinputdataformat"></a>

```json
"TEXT_CSV"
```

<h2 id="tocS_UseEventVariables">UseEventVariables</h2>
<!-- backwards compatibility -->
<a id="schemauseeventvariables"></a>
<a id="schema_UseEventVariables"></a>
<a id="tocSuseeventvariables"></a>
<a id="tocsuseeventvariables"></a>

```json
true
```

<h2 id="tocS_modelInputTemplate">modelInputTemplate</h2>
<!-- backwards compatibility -->
<a id="schemamodelinputtemplate"></a>
<a id="schema_modelInputTemplate"></a>
<a id="tocSmodelinputtemplate"></a>
<a id="tocsmodelinputtemplate"></a>

```json
"string"
```

<h2 id="tocS_ModelOutputDataFormat">ModelOutputDataFormat</h2>
<!-- backwards compatibility -->
<a id="schemamodeloutputdataformat"></a>
<a id="schema_ModelOutputDataFormat"></a>
<a id="tocSmodeloutputdataformat"></a>
<a id="tocsmodeloutputdataformat"></a>

```json
"TEXT_CSV"
```

<h2 id="tocS_ModelPredictionMap">ModelPredictionMap</h2>
<!-- backwards compatibility -->
<a id="schemamodelpredictionmap"></a>
<a id="schema_ModelPredictionMap"></a>
<a id="tocSmodelpredictionmap"></a>
<a id="tocsmodelpredictionmap"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[float](#schemafloat)|false|none|none|

<h2 id="tocS_TrainingResult">TrainingResult</h2>
<!-- backwards compatibility -->
<a id="schematrainingresult"></a>
<a id="schema_TrainingResult"></a>
<a id="tocStrainingresult"></a>
<a id="tocstrainingresult"></a>

```json
{
  "dataValidationMetrics": {
    "fileLevelMessages": {},
    "fieldLevelMessages": {}
  },
  "trainingMetrics": {
    "auc": {},
    "metricDataPoints": {}
  },
  "variableImportanceMetrics": {
    "logOddsMetrics": {}
  }
}
```

The training result details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataValidationMetrics|object|false|none|none|
|trainingMetrics|object|false|none|none|
|variableImportanceMetrics|object|false|none|none|

<h2 id="tocS_TrainingResultV2">TrainingResultV2</h2>
<!-- backwards compatibility -->
<a id="schematrainingresultv2"></a>
<a id="schema_TrainingResultV2"></a>
<a id="tocStrainingresultv2"></a>
<a id="tocstrainingresultv2"></a>

```json
{
  "dataValidationMetrics": {
    "fileLevelMessages": {},
    "fieldLevelMessages": {}
  },
  "trainingMetricsV2": {
    "ofi": {
      "metricDataPoints": {},
      "modelPerformance": {
        "auc": {},
        "uncertaintyRange": {
          "lowerBoundValue": {},
          "upperBoundValue": {}
        }
      }
    },
    "tfi": {
      "metricDataPoints": {},
      "modelPerformance": {
        "auc": {},
        "uncertaintyRange": {
          "lowerBoundValue": {},
          "upperBoundValue": {}
        }
      }
    },
    "ati": {
      "metricDataPoints": {},
      "modelPerformance": {
        "asi": {}
      }
    }
  },
  "variableImportanceMetrics": {
    "logOddsMetrics": {}
  },
  "aggregatedVariablesImportanceMetrics": {
    "logOddsMetrics": {}
  }
}
```

 The training result details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataValidationMetrics|[DataValidationMetrics](#schemadatavalidationmetrics)|false|none|The model training data validation metrics.|
|trainingMetricsV2|object|false|none|none|
|variableImportanceMetrics|[VariableImportanceMetrics](#schemavariableimportancemetrics)|false|none|The variable importance metrics details.|
|aggregatedVariablesImportanceMetrics|object|false|none|none|

<h2 id="tocS_ModelVersionDetail">ModelVersionDetail</h2>
<!-- backwards compatibility -->
<a id="schemamodelversiondetail"></a>
<a id="schema_ModelVersionDetail"></a>
<a id="tocSmodelversiondetail"></a>
<a id="tocsmodelversiondetail"></a>

```json
{
  "modelId": {},
  "modelType": {},
  "modelVersionNumber": {},
  "status": {},
  "trainingDataSource": {},
  "trainingDataSchema": {
    "modelVariables": {},
    "labelSchema": {
      "labelMapper": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "unlabeledEventsTreatment": {}
    }
  },
  "externalEventsDetail": {
    "dataLocation": {},
    "dataAccessRoleArn": {}
  },
  "ingestedEventsDetail": {
    "ingestedEventsTimeWindow": {
      "startTime": {},
      "endTime": {}
    }
  },
  "trainingResult": {
    "dataValidationMetrics": {
      "fileLevelMessages": {},
      "fieldLevelMessages": {}
    },
    "trainingMetrics": {
      "auc": {},
      "metricDataPoints": {}
    },
    "variableImportanceMetrics": {
      "logOddsMetrics": {}
    }
  },
  "lastUpdatedTime": {},
  "createdTime": {},
  "arn": {},
  "trainingResultV2": {
    "dataValidationMetrics": {
      "fileLevelMessages": {},
      "fieldLevelMessages": {}
    },
    "trainingMetricsV2": {
      "ofi": {
        "metricDataPoints": {},
        "modelPerformance": {
          "auc": {},
          "uncertaintyRange": {
            "lowerBoundValue": {},
            "upperBoundValue": {}
          }
        }
      },
      "tfi": {
        "metricDataPoints": {},
        "modelPerformance": {
          "auc": {},
          "uncertaintyRange": {
            "lowerBoundValue": {},
            "upperBoundValue": {}
          }
        }
      },
      "ati": {
        "metricDataPoints": {},
        "modelPerformance": {
          "asi": {}
        }
      }
    },
    "variableImportanceMetrics": {
      "logOddsMetrics": {}
    },
    "aggregatedVariablesImportanceMetrics": {
      "logOddsMetrics": {}
    }
  }
}
```

The details of the model version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|object|false|none|none|
|modelType|object|false|none|none|
|modelVersionNumber|object|false|none|none|
|status|object|false|none|none|
|trainingDataSource|object|false|none|none|
|trainingDataSchema|object|false|none|none|
|externalEventsDetail|object|false|none|none|
|ingestedEventsDetail|object|false|none|none|
|trainingResult|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|createdTime|object|false|none|none|
|arn|object|false|none|none|
|trainingResultV2|object|false|none|none|

<h2 id="tocS_PredictionExplanations">PredictionExplanations</h2>
<!-- backwards compatibility -->
<a id="schemapredictionexplanations"></a>
<a id="schema_PredictionExplanations"></a>
<a id="tocSpredictionexplanations"></a>
<a id="tocspredictionexplanations"></a>

```json
{
  "variableImpactExplanations": {},
  "aggregatedVariablesImpactExplanations": {}
}
```

 The prediction explanations that provide insight into how each event variable impacted the model version's fraud prediction score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variableImpactExplanations|object|false|none|none|
|aggregatedVariablesImpactExplanations|object|false|none|none|

<h2 id="tocS_ModelVersionStatus">ModelVersionStatus</h2>
<!-- backwards compatibility -->
<a id="schemamodelversionstatus"></a>
<a id="schema_ModelVersionStatus"></a>
<a id="tocSmodelversionstatus"></a>
<a id="tocsmodelversionstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_OFIMetricDataPoint">OFIMetricDataPoint</h2>
<!-- backwards compatibility -->
<a id="schemaofimetricdatapoint"></a>
<a id="schema_OFIMetricDataPoint"></a>
<a id="tocSofimetricdatapoint"></a>
<a id="tocsofimetricdatapoint"></a>

```json
{
  "fpr": {},
  "precision": {},
  "tpr": {},
  "threshold": {}
}
```

 The Online Fraud Insights (OFI) model performance metrics data points.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fpr|object|false|none|none|
|precision|object|false|none|none|
|tpr|object|false|none|none|
|threshold|object|false|none|none|

<h2 id="tocS_OFIMetricDataPointsList">OFIMetricDataPointsList</h2>
<!-- backwards compatibility -->
<a id="schemaofimetricdatapointslist"></a>
<a id="schema_OFIMetricDataPointsList"></a>
<a id="tocSofimetricdatapointslist"></a>
<a id="tocsofimetricdatapointslist"></a>

```json
[
  {
    "fpr": {},
    "precision": {},
    "tpr": {},
    "threshold": {}
  }
]
```

<h2 id="tocS_UncertaintyRange">UncertaintyRange</h2>
<!-- backwards compatibility -->
<a id="schemauncertaintyrange"></a>
<a id="schema_UncertaintyRange"></a>
<a id="tocSuncertaintyrange"></a>
<a id="tocsuncertaintyrange"></a>

```json
{
  "lowerBoundValue": {},
  "upperBoundValue": {}
}
```

 Range of area under curve (auc) expected from the model. A range greater than 0.1 indicates higher model uncertainity. A range is the difference between upper and lower bound of auc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lowerBoundValue|object|true|none|none|
|upperBoundValue|object|true|none|none|

<h2 id="tocS_OFIModelPerformance">OFIModelPerformance</h2>
<!-- backwards compatibility -->
<a id="schemaofimodelperformance"></a>
<a id="schema_OFIModelPerformance"></a>
<a id="tocSofimodelperformance"></a>
<a id="tocsofimodelperformance"></a>

```json
{
  "auc": {},
  "uncertaintyRange": {
    "lowerBoundValue": {},
    "upperBoundValue": {}
  }
}
```

 The Online Fraud Insights (OFI) model performance score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auc|object|false|none|none|
|uncertaintyRange|object|false|none|none|

<h2 id="tocS_OFITrainingMetricsValue">OFITrainingMetricsValue</h2>
<!-- backwards compatibility -->
<a id="schemaofitrainingmetricsvalue"></a>
<a id="schema_OFITrainingMetricsValue"></a>
<a id="tocSofitrainingmetricsvalue"></a>
<a id="tocsofitrainingmetricsvalue"></a>

```json
{
  "metricDataPoints": {},
  "modelPerformance": {
    "auc": {},
    "uncertaintyRange": {
      "lowerBoundValue": {},
      "upperBoundValue": {}
    }
  }
}
```

 The Online Fraud Insights (OFI) model training metric details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricDataPoints|object|false|none|none|
|modelPerformance|object|false|none|none|

<h2 id="tocS_Outcome">Outcome</h2>
<!-- backwards compatibility -->
<a id="schemaoutcome"></a>
<a id="schema_Outcome"></a>
<a id="tocSoutcome"></a>
<a id="tocsoutcome"></a>

```json
{
  "name": {},
  "description": {},
  "lastUpdatedTime": {},
  "createdTime": {},
  "arn": {}
}
```

The outcome.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|createdTime|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_listOfVariableImpactExplanations">listOfVariableImpactExplanations</h2>
<!-- backwards compatibility -->
<a id="schemalistofvariableimpactexplanations"></a>
<a id="schema_listOfVariableImpactExplanations"></a>
<a id="tocSlistofvariableimpactexplanations"></a>
<a id="tocslistofvariableimpactexplanations"></a>

```json
[
  {
    "eventVariableName": {},
    "relativeImpact": {},
    "logOddsImpact": {}
  }
]
```

<h2 id="tocS_RuleDetail">RuleDetail</h2>
<!-- backwards compatibility -->
<a id="schemaruledetail"></a>
<a id="schema_RuleDetail"></a>
<a id="tocSruledetail"></a>
<a id="tocsruledetail"></a>

```json
{
  "ruleId": {},
  "description": {},
  "detectorId": {},
  "ruleVersion": {},
  "expression": {},
  "language": {},
  "outcomes": {},
  "lastUpdatedTime": {},
  "createdTime": {},
  "arn": {}
}
```

The details of the rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleId|object|false|none|none|
|description|object|false|none|none|
|detectorId|object|false|none|none|
|ruleVersion|object|false|none|none|
|expression|object|false|none|none|
|language|object|false|none|none|
|outcomes|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|createdTime|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_TFIMetricDataPoint">TFIMetricDataPoint</h2>
<!-- backwards compatibility -->
<a id="schematfimetricdatapoint"></a>
<a id="schema_TFIMetricDataPoint"></a>
<a id="tocStfimetricdatapoint"></a>
<a id="tocstfimetricdatapoint"></a>

```json
{
  "fpr": {},
  "precision": {},
  "tpr": {},
  "threshold": {}
}
```

 The performance metrics data points for Transaction Fraud Insights (TFI) model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fpr|object|false|none|none|
|precision|object|false|none|none|
|tpr|object|false|none|none|
|threshold|object|false|none|none|

<h2 id="tocS_TFIMetricDataPointsList">TFIMetricDataPointsList</h2>
<!-- backwards compatibility -->
<a id="schematfimetricdatapointslist"></a>
<a id="schema_TFIMetricDataPointsList"></a>
<a id="tocStfimetricdatapointslist"></a>
<a id="tocstfimetricdatapointslist"></a>

```json
[
  {
    "fpr": {},
    "precision": {},
    "tpr": {},
    "threshold": {}
  }
]
```

<h2 id="tocS_TFIModelPerformance">TFIModelPerformance</h2>
<!-- backwards compatibility -->
<a id="schematfimodelperformance"></a>
<a id="schema_TFIModelPerformance"></a>
<a id="tocStfimodelperformance"></a>
<a id="tocstfimodelperformance"></a>

```json
{
  "auc": {},
  "uncertaintyRange": {
    "lowerBoundValue": {},
    "upperBoundValue": {}
  }
}
```

 The Transaction Fraud Insights (TFI) model performance score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auc|object|false|none|none|
|uncertaintyRange|object|false|none|none|

<h2 id="tocS_TFITrainingMetricsValue">TFITrainingMetricsValue</h2>
<!-- backwards compatibility -->
<a id="schematfitrainingmetricsvalue"></a>
<a id="schema_TFITrainingMetricsValue"></a>
<a id="tocStfitrainingmetricsvalue"></a>
<a id="tocstfitrainingmetricsvalue"></a>

```json
{
  "metricDataPoints": {},
  "modelPerformance": {
    "auc": {},
    "uncertaintyRange": {
      "lowerBoundValue": {},
      "upperBoundValue": {}
    }
  }
}
```

 The Transaction Fraud Insights (TFI) model training metric details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricDataPoints|object|false|none|none|
|modelPerformance|object|false|none|none|

<h2 id="tocS_tagKey">tagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_tagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_tagValue">tagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_tagValue"></a>
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
  "key": {},
  "value": {}
}
```

A key and value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_metricDataPointsList">metricDataPointsList</h2>
<!-- backwards compatibility -->
<a id="schemametricdatapointslist"></a>
<a id="schema_metricDataPointsList"></a>
<a id="tocSmetricdatapointslist"></a>
<a id="tocsmetricdatapointslist"></a>

```json
[
  {
    "fpr": {},
    "precision": {},
    "tpr": {},
    "threshold": {}
  }
]
```

<h2 id="tocS_TrainingMetrics">TrainingMetrics</h2>
<!-- backwards compatibility -->
<a id="schematrainingmetrics"></a>
<a id="schema_TrainingMetrics"></a>
<a id="tocStrainingmetrics"></a>
<a id="tocstrainingmetrics"></a>

```json
{
  "auc": {},
  "metricDataPoints": {}
}
```

The training metric details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auc|object|false|none|none|
|metricDataPoints|object|false|none|none|

<h2 id="tocS_TrainingMetricsV2">TrainingMetricsV2</h2>
<!-- backwards compatibility -->
<a id="schematrainingmetricsv2"></a>
<a id="schema_TrainingMetricsV2"></a>
<a id="tocStrainingmetricsv2"></a>
<a id="tocstrainingmetricsv2"></a>

```json
{
  "ofi": {
    "metricDataPoints": {},
    "modelPerformance": {
      "auc": {},
      "uncertaintyRange": {
        "lowerBoundValue": {},
        "upperBoundValue": {}
      }
    }
  },
  "tfi": {
    "metricDataPoints": {},
    "modelPerformance": {
      "auc": {},
      "uncertaintyRange": {
        "lowerBoundValue": {},
        "upperBoundValue": {}
      }
    }
  },
  "ati": {
    "metricDataPoints": {},
    "modelPerformance": {
      "asi": {}
    }
  }
}
```

 The training metrics details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ofi|object|false|none|none|
|tfi|object|false|none|none|
|ati|object|false|none|none|

<h2 id="tocS_VariableImportanceMetrics">VariableImportanceMetrics</h2>
<!-- backwards compatibility -->
<a id="schemavariableimportancemetrics"></a>
<a id="schema_VariableImportanceMetrics"></a>
<a id="tocSvariableimportancemetrics"></a>
<a id="tocsvariableimportancemetrics"></a>

```json
{
  "logOddsMetrics": {}
}
```

The variable importance metrics details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logOddsMetrics|object|false|none|none|

<h2 id="tocS_tagKeyList">tagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_tagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
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
  "dataType": {},
  "dataSource": {},
  "defaultValue": {},
  "description": {},
  "variableType": {},
  "lastUpdatedTime": {},
  "createdTime": {},
  "arn": {}
}
```

The variable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|dataType|object|false|none|none|
|dataSource|object|false|none|none|
|defaultValue|object|false|none|none|
|description|object|false|none|none|
|variableType|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|createdTime|object|false|none|none|
|arn|object|false|none|none|

<h2 id="tocS_VariableEntry">VariableEntry</h2>
<!-- backwards compatibility -->
<a id="schemavariableentry"></a>
<a id="schema_VariableEntry"></a>
<a id="tocSvariableentry"></a>
<a id="tocsvariableentry"></a>

```json
{
  "name": {},
  "dataType": {},
  "dataSource": {},
  "defaultValue": {},
  "description": {},
  "variableType": {}
}
```

A variable in the list of variables for the batch create variable request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|dataType|object|false|none|none|
|dataSource|object|false|none|none|
|defaultValue|object|false|none|none|
|description|object|false|none|none|
|variableType|object|false|none|none|

<h2 id="tocS_VariableImpactExplanation">VariableImpactExplanation</h2>
<!-- backwards compatibility -->
<a id="schemavariableimpactexplanation"></a>
<a id="schema_VariableImpactExplanation"></a>
<a id="tocSvariableimpactexplanation"></a>
<a id="tocsvariableimpactexplanation"></a>

```json
{
  "eventVariableName": {},
  "relativeImpact": {},
  "logOddsImpact": {}
}
```

 The details of the event variable's impact on the prediction score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventVariableName|object|false|none|none|
|relativeImpact|object|false|none|none|
|logOddsImpact|object|false|none|none|

<h2 id="tocS_attributeKey">attributeKey</h2>
<!-- backwards compatibility -->
<a id="schemaattributekey"></a>
<a id="schema_attributeKey"></a>
<a id="tocSattributekey"></a>
<a id="tocsattributekey"></a>

```json
"string"
```

<h2 id="tocS_variableName">variableName</h2>
<!-- backwards compatibility -->
<a id="schemavariablename"></a>
<a id="schema_variableName"></a>
<a id="tocSvariablename"></a>
<a id="tocsvariablename"></a>

```json
"string"
```
